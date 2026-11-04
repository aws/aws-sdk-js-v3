// smithy-typescript generated code
import type {
  ActionConnectorType,
  AgentLifecycle,
  AgentStatus,
  AggType,
  AnalysisFilterAttribute,
  AnchorType,
  AnonymousUserDashboardEmbeddingConfigurationDisabledFeature,
  AnonymousUserDashboardEmbeddingConfigurationEnabledFeature,
  ApplicableToType,
  AppVisibility,
  AssetBundleExportFormat,
  AssetBundleExportJobAnalysisPropertyToOverride,
  AssetBundleExportJobDashboardPropertyToOverride,
  AssetBundleExportJobDataSetPropertyToOverride,
  AssetBundleExportJobDataSourcePropertyToOverride,
  AssetBundleExportJobFolderPropertyToOverride,
  AssetBundleExportJobRefreshSchedulePropertyToOverride,
  AssetBundleExportJobStatus,
  AssetBundleExportJobThemePropertyToOverride,
  AssetBundleExportJobTopicV2PropertyToOverride,
  AssetBundleExportJobVPCConnectionPropertyToOverride,
  AssetBundleImportFailureAction,
  AssetBundleImportJobStatus,
  AssetType,
  AudioExtractionStatus,
  AuthenticationMethodOption,
  AuthenticationType,
  AuthorizationCodeGrantCredentialsSource,
  AuthType,
  BrandStatus,
  BrandVersionStatus,
  CapabilityState,
  ClientCredentialsSource,
  ColumnDataSubType,
  ColumnDataType,
  ColumnOrderingType,
  ComparisonMethodType,
  ConnectionAuthType,
  ConstantType,
  ContributionAnalysisDirection,
  ContributionAnalysisSortType,
  DashboardBehavior,
  DashboardUIState,
  DefaultCategoryEffect,
  DisplayFormat,
  Edition,
  FilterClass,
  FilterOperator,
  GeoSpatialCountryCode,
  GeoSpatialDataRole,
  GovernedAction,
  HorizontalTextAlignment,
  LimitSource,
  LimitUnit,
  LookbackWindowSizeUnit,
  NullFilterOption,
  NumberScale,
  RefreshFailureAlertStatus,
  ResourceStatus,
  ResourceType,
  ReviewedAnswerErrorCode,
  ServiceType,
  SheetContentType,
  SnapshotFileFormatType,
  SnapshotFileSheetSelectionScope,
  StarburstProductType,
  TimeGranularity,
  TopicIRFilterFunction,
  TopicIRFilterType,
  TopicNumericSeparatorSymbol,
  TopicSortDirection,
  TopicTimeGranularity,
  UndefinedSpecifiedValueType,
  ValidationStrategyMode,
  WebCrawlerAuthType,
  WordCloudCloudLayout,
  WordCloudWordCasing,
  WordCloudWordOrientation,
  WordCloudWordPadding,
  WordCloudWordScaling,
} from "./enums";
import type {
  AccountCustomization,
  AdditionalNotes,
  AdHocFilteringOption,
  AggFunction,
  AggregationPartitionBy,
  AmazonElasticsearchParameters,
  AmazonOpenSearchParameters,
  AxisDisplayOptions,
  ChartAxisLabelOptions,
  DataLabelOptions,
  DimensionField,
  FilterControl,
  FontConfiguration,
  Layout,
  LegendOptions,
  MeasureField,
  ParameterControl,
  SheetControlLayout,
  SheetImage,
  SheetTextBox,
  TransformOperationSource,
  VisualCustomAction,
  VisualCustomActionDefaults,
  VisualInteractionOptions,
  VisualMenuOption,
} from "./models_0";
import type {
  BarChartVisual,
  BoxPlotVisual,
  ColorScale,
  ColumnHierarchy,
  ComboChartVisual,
  ConditionalFormattingColor,
  CustomContentVisual,
  EmptyVisual,
  FieldSortOptions,
  FilledMapVisual,
  FunnelChartVisual,
  GaugeChartVisual,
  GeospatialMapVisual,
  HeatMapVisual,
  HistogramVisual,
  InsightVisual,
  ItemsLimitConfiguration,
  KPIVisual,
  LayerMapVisual,
  LineChartVisual,
  PieChartVisual,
  PivotTableVisual,
  PluginVisual,
  RadarChartVisual,
  SankeyDiagramVisual,
  ScatterPlotVisual,
  TableCellConditionalFormatting,
  TableConfiguration,
  TooltipOptions,
  VisualPalette,
  VisualSubtitleLabelOptions,
  VisualTitleLabelOptions,
} from "./models_1";

/**
 * The conditional formatting of a table row.
 *
 * @public
 */
export interface TableRowConditionalFormatting {
  /**
   * The conditional formatting color (solid, gradient) of the background for a table row.
   *
   * @public
   */
  BackgroundColor?: ConditionalFormattingColor | undefined;

  /**
   * The conditional formatting color (solid, gradient) of the text for a table row.
   *
   * @public
   */
  TextColor?: ConditionalFormattingColor | undefined;
}

/**
 * Conditional formatting options for a `PivotTableVisual`.
 *
 * @public
 */
export interface TableConditionalFormattingOption {
  /**
   * The cell conditional formatting option for a table.
   *
   * @public
   */
  Cell?: TableCellConditionalFormatting | undefined;

  /**
   * The row conditional formatting option for a table.
   *
   * @public
   */
  Row?: TableRowConditionalFormatting | undefined;
}

/**
 * The conditional formatting for a `PivotTableVisual`.
 *
 * @public
 */
export interface TableConditionalFormatting {
  /**
   * Conditional formatting options for a `PivotTableVisual`.
   *
   * @public
   */
  ConditionalFormattingOptions?: TableConditionalFormattingOption[] | undefined;
}

/**
 * A table visual.
 *
 * For more information, see [Using tables as visuals](https://docs.aws.amazon.com/quicksight/latest/user/tabular.html) in the *Amazon Quick Suite User Guide*.
 *
 * @public
 */
export interface TableVisual {
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
  ChartConfiguration?: TableConfiguration | undefined;

  /**
   * The conditional formatting for a `PivotTableVisual`.
   *
   * @public
   */
  ConditionalFormatting?: TableConditionalFormatting | undefined;

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
 * Aggregated field wells of a tree map.
 *
 * @public
 */
export interface TreeMapAggregatedFieldWells {
  /**
   * The group by field well of a tree map. Values are grouped based on group by fields.
   *
   * @public
   */
  Groups?: DimensionField[] | undefined;

  /**
   * The size field well of a tree map. Values are aggregated based on group by fields.
   *
   * @public
   */
  Sizes?: MeasureField[] | undefined;

  /**
   * The color field well of a tree map. Values are grouped by aggregations based on group by fields.
   *
   * @public
   */
  Colors?: MeasureField[] | undefined;
}

/**
 * The field wells of a tree map.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 *
 * @public
 */
export interface TreeMapFieldWells {
  /**
   * The aggregated field wells of a tree map.
   *
   * @public
   */
  TreeMapAggregatedFieldWells?: TreeMapAggregatedFieldWells | undefined;
}

/**
 * The sort configuration of a tree map.
 *
 * @public
 */
export interface TreeMapSortConfiguration {
  /**
   * The sort configuration of group by fields.
   *
   * @public
   */
  TreeMapSort?: FieldSortOptions[] | undefined;

  /**
   * The limit on the number of groups that are displayed.
   *
   * @public
   */
  TreeMapGroupItemsLimitConfiguration?: ItemsLimitConfiguration | undefined;
}

/**
 * The configuration of a tree map.
 *
 * @public
 */
export interface TreeMapConfiguration {
  /**
   * The field wells of the visual.
   *
   * @public
   */
  FieldWells?: TreeMapFieldWells | undefined;

  /**
   * The sort configuration of a tree map.
   *
   * @public
   */
  SortConfiguration?: TreeMapSortConfiguration | undefined;

  /**
   * The label options (label text, label visibility) of the groups that are displayed in a tree map.
   *
   * @public
   */
  GroupLabelOptions?: ChartAxisLabelOptions | undefined;

  /**
   * The label options (label text, label visibility) of the sizes that are displayed in a tree map.
   *
   * @public
   */
  SizeLabelOptions?: ChartAxisLabelOptions | undefined;

  /**
   * The label options (label text, label visibility) for the colors displayed in a tree map.
   *
   * @public
   */
  ColorLabelOptions?: ChartAxisLabelOptions | undefined;

  /**
   * The color options (gradient color, point of divergence) of a tree map.
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
 * A tree map.
 *
 * For more information, see [Using tree maps](https://docs.aws.amazon.com/quicksight/latest/user/tree-map.html) in the *Amazon Quick Suite User Guide*.
 *
 * @public
 */
export interface TreeMapVisual {
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
  ChartConfiguration?: TreeMapConfiguration | undefined;

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
 * The color configuration for individual groups within a waterfall visual.
 *
 * @public
 */
export interface WaterfallChartGroupColorConfiguration {
  /**
   * Defines the color for the positive bars of a waterfall chart.
   *
   * @public
   */
  PositiveBarColor?: string | undefined;

  /**
   * Defines the color for the negative bars of a waterfall chart.
   *
   * @public
   */
  NegativeBarColor?: string | undefined;

  /**
   * Defines the color for the total bars of a waterfall chart.
   *
   * @public
   */
  TotalBarColor?: string | undefined;
}

/**
 * The color configuration of a waterfall visual.
 *
 * @public
 */
export interface WaterfallChartColorConfiguration {
  /**
   * The color configuration for individual groups within a waterfall visual.
   *
   * @public
   */
  GroupColorConfiguration?: WaterfallChartGroupColorConfiguration | undefined;
}

/**
 * The field well configuration of a waterfall visual.
 *
 * @public
 */
export interface WaterfallChartAggregatedFieldWells {
  /**
   * The category field wells of a waterfall visual.
   *
   * @public
   */
  Categories?: DimensionField[] | undefined;

  /**
   * The value field wells of a waterfall visual.
   *
   * @public
   */
  Values?: MeasureField[] | undefined;

  /**
   * The breakdown field wells of a waterfall visual.
   *
   * @public
   */
  Breakdowns?: DimensionField[] | undefined;
}

/**
 * The field well configuration of a waterfall visual.
 *
 * @public
 */
export interface WaterfallChartFieldWells {
  /**
   * The field well configuration of a waterfall visual.
   *
   * @public
   */
  WaterfallChartAggregatedFieldWells?: WaterfallChartAggregatedFieldWells | undefined;
}

/**
 * The sort configuration of a waterfall visual.
 *
 * @public
 */
export interface WaterfallChartSortConfiguration {
  /**
   * The sort configuration of the category fields.
   *
   * @public
   */
  CategorySort?: FieldSortOptions[] | undefined;

  /**
   * The limit on the number of bar groups that are displayed.
   *
   * @public
   */
  BreakdownItemsLimit?: ItemsLimitConfiguration | undefined;
}

/**
 * The options that determine the presentation of a waterfall visual.
 *
 * @public
 */
export interface WaterfallChartOptions {
  /**
   * This option determines the total bar label of a waterfall visual.
   *
   * @public
   */
  TotalBarLabel?: string | undefined;
}

/**
 * The configuration for a waterfall visual.
 *
 * @public
 */
export interface WaterfallChartConfiguration {
  /**
   * The field well configuration of a waterfall visual.
   *
   * @public
   */
  FieldWells?: WaterfallChartFieldWells | undefined;

  /**
   * The sort configuration of a waterfall visual.
   *
   * @public
   */
  SortConfiguration?: WaterfallChartSortConfiguration | undefined;

  /**
   * The options that determine the presentation of a waterfall visual.
   *
   * @public
   */
  WaterfallChartOptions?: WaterfallChartOptions | undefined;

  /**
   * The options that determine the presentation of the category axis label.
   *
   * @public
   */
  CategoryAxisLabelOptions?: ChartAxisLabelOptions | undefined;

  /**
   * The options that determine the presentation of the category axis.
   *
   * @public
   */
  CategoryAxisDisplayOptions?: AxisDisplayOptions | undefined;

  /**
   * The options that determine the presentation of the y-axis label.
   *
   * @public
   */
  PrimaryYAxisLabelOptions?: ChartAxisLabelOptions | undefined;

  /**
   * The options that determine the presentation of the y-axis.
   *
   * @public
   */
  PrimaryYAxisDisplayOptions?: AxisDisplayOptions | undefined;

  /**
   * The legend configuration of a waterfall visual.
   *
   * @public
   */
  Legend?: LegendOptions | undefined;

  /**
   * The data label configuration of a waterfall visual.
   *
   * @public
   */
  DataLabels?: DataLabelOptions | undefined;

  /**
   * The visual palette configuration of a waterfall visual.
   *
   * @public
   */
  VisualPalette?: VisualPalette | undefined;

  /**
   * The color configuration of a waterfall visual.
   *
   * @public
   */
  ColorConfiguration?: WaterfallChartColorConfiguration | undefined;

  /**
   * The general visual interactions setup for a visual.
   *
   * @public
   */
  Interactions?: VisualInteractionOptions | undefined;
}

/**
 * A waterfall chart.
 *
 * For more information, see [Using waterfall charts](https://docs.aws.amazon.com/quicksight/latest/user/waterfall-chart.html) in the *Amazon Quick Suite User Guide*.
 *
 * @public
 */
export interface WaterfallVisual {
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
   * The configuration for a waterfall visual.
   *
   * @public
   */
  ChartConfiguration?: WaterfallChartConfiguration | undefined;

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
 * The aggregated field wells of a word cloud.
 *
 * @public
 */
export interface WordCloudAggregatedFieldWells {
  /**
   * The group by field well of a word cloud. Values are grouped by group by fields.
   *
   * @public
   */
  GroupBy?: DimensionField[] | undefined;

  /**
   * The size field well of a word cloud. Values are aggregated based on group by fields.
   *
   * @public
   */
  Size?: MeasureField[] | undefined;
}

/**
 * The field wells of a word cloud visual.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 *
 * @public
 */
export interface WordCloudFieldWells {
  /**
   * The aggregated field wells of a word cloud.
   *
   * @public
   */
  WordCloudAggregatedFieldWells?: WordCloudAggregatedFieldWells | undefined;
}

/**
 * The sort configuration of a word cloud visual.
 *
 * @public
 */
export interface WordCloudSortConfiguration {
  /**
   * The limit on the number of groups that are displayed in a word cloud.
   *
   * @public
   */
  CategoryItemsLimit?: ItemsLimitConfiguration | undefined;

  /**
   * The sort configuration of group by fields.
   *
   * @public
   */
  CategorySort?: FieldSortOptions[] | undefined;
}

/**
 * The word cloud options for a word cloud visual.
 *
 * @public
 */
export interface WordCloudOptions {
  /**
   * The word orientation options (horizontal, horizontal_and_vertical) for the words in a word cloud.
   *
   * @public
   */
  WordOrientation?: WordCloudWordOrientation | undefined;

  /**
   * The word scaling options (emphasize, normal) for the words in a word cloud.
   *
   * @public
   */
  WordScaling?: WordCloudWordScaling | undefined;

  /**
   * The cloud layout options (fluid, normal) of a word cloud.
   *
   * @public
   */
  CloudLayout?: WordCloudCloudLayout | undefined;

  /**
   * The word casing options (lower_case, existing_case) for the words in a word cloud.
   *
   * @public
   */
  WordCasing?: WordCloudWordCasing | undefined;

  /**
   * The word padding options (none, small, medium, large) for the words in a word cloud.
   *
   * @public
   */
  WordPadding?: WordCloudWordPadding | undefined;

  /**
   * The length limit of each word from 1-100.
   *
   * @public
   */
  MaximumStringLength?: number | undefined;
}

/**
 * The configuration of a word cloud visual.
 *
 * @public
 */
export interface WordCloudChartConfiguration {
  /**
   * The field wells of the visual.
   *
   * @public
   */
  FieldWells?: WordCloudFieldWells | undefined;

  /**
   * The sort configuration of a word cloud visual.
   *
   * @public
   */
  SortConfiguration?: WordCloudSortConfiguration | undefined;

  /**
   * The label options (label text, label visibility, and sort icon visibility) for the word cloud category.
   *
   * @public
   */
  CategoryLabelOptions?: ChartAxisLabelOptions | undefined;

  /**
   * The options for a word cloud visual.
   *
   * @public
   */
  WordCloudOptions?: WordCloudOptions | undefined;

  /**
   * The general visual interactions setup for a visual.
   *
   * @public
   */
  Interactions?: VisualInteractionOptions | undefined;
}

/**
 * A word cloud.
 *
 * For more information, see [Using word clouds](https://docs.aws.amazon.com/quicksight/latest/user/word-cloud.html) in the *Amazon Quick Suite User Guide*.
 *
 * @public
 */
export interface WordCloudVisual {
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
  ChartConfiguration?: WordCloudChartConfiguration | undefined;

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
 * A visual displayed on a sheet in an analysis, dashboard, or template.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 *
 * @public
 */
export interface Visual {
  /**
   * A table visual.
   *
   * For more information, see [Using tables as visuals](https://docs.aws.amazon.com/quicksight/latest/user/tabular.html) in the *Amazon Quick Suite User Guide*.
   *
   * @public
   */
  TableVisual?: TableVisual | undefined;

  /**
   * A pivot table.
   *
   * For more information, see [Using pivot tables](https://docs.aws.amazon.com/quicksight/latest/user/pivot-table.html) in the *Amazon Quick Suite User Guide*.
   *
   * @public
   */
  PivotTableVisual?: PivotTableVisual | undefined;

  /**
   * A bar chart.
   *
   * For more information, see [Using bar charts](https://docs.aws.amazon.com/quicksight/latest/user/bar-charts.html) in the *Amazon Quick Suite User Guide*.
   *
   * @public
   */
  BarChartVisual?: BarChartVisual | undefined;

  /**
   * A key performance indicator (KPI).
   *
   * For more information, see [Using KPIs](https://docs.aws.amazon.com/quicksight/latest/user/kpi.html) in the *Amazon Quick Suite User Guide*.
   *
   * @public
   */
  KPIVisual?: KPIVisual | undefined;

  /**
   * A pie or donut chart.
   *
   * For more information, see [Using pie charts](https://docs.aws.amazon.com/quicksight/latest/user/pie-chart.html) in the *Amazon Quick Suite User Guide*.
   *
   * @public
   */
  PieChartVisual?: PieChartVisual | undefined;

  /**
   * A gauge chart.
   *
   * For more information, see [Using gauge charts](https://docs.aws.amazon.com/quicksight/latest/user/gauge-chart.html) in the *Amazon Quick Suite User Guide*.
   *
   * @public
   */
  GaugeChartVisual?: GaugeChartVisual | undefined;

  /**
   * A line chart.
   *
   * For more information, see [Using line charts](https://docs.aws.amazon.com/quicksight/latest/user/line-charts.html) in the *Amazon Quick Suite User Guide*.
   *
   * @public
   */
  LineChartVisual?: LineChartVisual | undefined;

  /**
   * A heat map.
   *
   * For more information, see [Using heat maps](https://docs.aws.amazon.com/quicksight/latest/user/heat-map.html) in the *Amazon Quick Suite User Guide*.
   *
   * @public
   */
  HeatMapVisual?: HeatMapVisual | undefined;

  /**
   * A tree map.
   *
   * For more information, see [Using tree maps](https://docs.aws.amazon.com/quicksight/latest/user/tree-map.html) in the *Amazon Quick Suite User Guide*.
   *
   * @public
   */
  TreeMapVisual?: TreeMapVisual | undefined;

  /**
   * A geospatial map or a points on map visual.
   *
   * For more information, see [Creating point maps](https://docs.aws.amazon.com/quicksight/latest/user/point-maps.html) in the *Amazon Quick Suite User Guide*.
   *
   * @public
   */
  GeospatialMapVisual?: GeospatialMapVisual | undefined;

  /**
   * A filled map.
   *
   * For more information, see [Creating filled maps](https://docs.aws.amazon.com/quicksight/latest/user/filled-maps.html) in the *Amazon Quick Suite User Guide*.
   *
   * @public
   */
  FilledMapVisual?: FilledMapVisual | undefined;

  /**
   * The properties for a layer map visual
   *
   * @public
   */
  LayerMapVisual?: LayerMapVisual | undefined;

  /**
   * A funnel chart.
   *
   * For more information, see [Using funnel charts](https://docs.aws.amazon.com/quicksight/latest/user/funnel-visual-content.html) in the *Amazon Quick Suite User Guide*.
   *
   * @public
   */
  FunnelChartVisual?: FunnelChartVisual | undefined;

  /**
   * A scatter plot.
   *
   * For more information, see [Using scatter plots](https://docs.aws.amazon.com/quicksight/latest/user/scatter-plot.html) in the *Amazon Quick Suite User Guide*.
   *
   * @public
   */
  ScatterPlotVisual?: ScatterPlotVisual | undefined;

  /**
   * A combo chart.
   *
   * For more information, see [Using combo charts](https://docs.aws.amazon.com/quicksight/latest/user/combo-charts.html) in the *Amazon Quick Suite User Guide*.
   *
   * @public
   */
  ComboChartVisual?: ComboChartVisual | undefined;

  /**
   * A box plot.
   *
   * For more information, see [Using box plots](https://docs.aws.amazon.com/quicksight/latest/user/box-plots.html) in the *Amazon Quick Suite User Guide*.
   *
   * @public
   */
  BoxPlotVisual?: BoxPlotVisual | undefined;

  /**
   * A waterfall chart.
   *
   * For more information, see [Using waterfall charts](https://docs.aws.amazon.com/quicksight/latest/user/waterfall-chart.html) in the *Amazon Quick Suite User Guide*.
   *
   * @public
   */
  WaterfallVisual?: WaterfallVisual | undefined;

  /**
   * A histogram.
   *
   * For more information, see [Using histograms](https://docs.aws.amazon.com/quicksight/latest/user/histogram-charts.html) in the *Amazon Quick Suite User Guide*.
   *
   * @public
   */
  HistogramVisual?: HistogramVisual | undefined;

  /**
   * A word cloud.
   *
   * For more information, see [Using word clouds](https://docs.aws.amazon.com/quicksight/latest/user/word-cloud.html) in the *Amazon Quick Suite User Guide*.
   *
   * @public
   */
  WordCloudVisual?: WordCloudVisual | undefined;

  /**
   * An insight visual.
   *
   * For more information, see [Working with insights](https://docs.aws.amazon.com/quicksight/latest/user/computational-insights.html) in the *Amazon Quick Suite User Guide*.
   *
   * @public
   */
  InsightVisual?: InsightVisual | undefined;

  /**
   * A sankey diagram.
   *
   * For more information, see [Using Sankey diagrams](https://docs.aws.amazon.com/quicksight/latest/user/sankey-diagram.html) in the *Amazon Quick Suite User Guide*.
   *
   * @public
   */
  SankeyDiagramVisual?: SankeyDiagramVisual | undefined;

  /**
   * A visual that contains custom content.
   *
   * For more information, see [Using custom visual content](https://docs.aws.amazon.com/quicksight/latest/user/custom-visual-content.html) in the *Amazon Quick Suite User Guide*.
   *
   * @public
   */
  CustomContentVisual?: CustomContentVisual | undefined;

  /**
   * An empty visual.
   *
   * @public
   */
  EmptyVisual?: EmptyVisual | undefined;

  /**
   * A radar chart visual.
   *
   * For more information, see [Using radar charts](https://docs.aws.amazon.com/quicksight/latest/user/radar-chart.html) in the *Amazon Quick Suite User Guide*.
   *
   * @public
   */
  RadarChartVisual?: RadarChartVisual | undefined;

  /**
   * The custom plugin visual type.
   *
   * @public
   */
  PluginVisual?: PluginVisual | undefined;
}

/**
 * A sheet is an object that contains a set of visuals that are viewed together on one page in a paginated report. Every analysis and dashboard must contain at least one sheet.
 *
 * @public
 */
export interface SheetDefinition {
  /**
   * The unique identifier of a sheet.
   *
   * @public
   */
  SheetId: string | undefined;

  /**
   * The title of the sheet.
   *
   * @public
   */
  Title?: string | undefined;

  /**
   * A description of the sheet.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The name of the sheet. This name is displayed on the sheet's tab in the Quick console.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The list of parameter controls that are on a sheet.
   *
   * For more information, see [Using a Control with a Parameter in Amazon Quick Sight](https://docs.aws.amazon.com/quicksight/latest/user/parameters-controls.html) in the *Amazon Quick Suite User Guide*.
   *
   * @public
   */
  ParameterControls?: ParameterControl[] | undefined;

  /**
   * The list of filter controls that are on a sheet.
   *
   * For more information, see [Adding filter controls to analysis sheets](https://docs.aws.amazon.com/quicksight/latest/user/filter-controls.html) in the *Amazon Quick Suite User Guide*.
   *
   * @public
   */
  FilterControls?: FilterControl[] | undefined;

  /**
   * A list of the visuals that are on a sheet. Visual placement is determined by the layout of the sheet.
   *
   * @public
   */
  Visuals?: Visual[] | undefined;

  /**
   * The text boxes that are on a sheet.
   *
   * @public
   */
  TextBoxes?: SheetTextBox[] | undefined;

  /**
   * A list of images on a sheet.
   *
   * @public
   */
  Images?: SheetImage[] | undefined;

  /**
   * Layouts define how the components of a sheet are arranged.
   *
   * For more information, see [Types of layout](https://docs.aws.amazon.com/quicksight/latest/user/types-of-layout.html) in the *Amazon Quick Suite User Guide*.
   *
   * @public
   */
  Layouts?: Layout[] | undefined;

  /**
   * The control layouts of the sheet.
   *
   * @public
   */
  SheetControlLayouts?: SheetControlLayout[] | undefined;

  /**
   * The layout content type of the sheet. Choose one of the following options:
   *
   * - `PAGINATED`: Creates a sheet for a paginated report.
   * - `INTERACTIVE`: Creates a sheet for an interactive dashboard.
   *
   * @public
   */
  ContentType?: SheetContentType | undefined;

  /**
   * A list of visual custom actions for the sheet.
   *
   * @public
   */
  CustomActionDefaults?: VisualCustomActionDefaults | undefined;
}

/**
 * The structure that contains the Amazon S3 location to download the static file from.
 *
 * @public
 */
export interface StaticFileS3SourceOptions {
  /**
   * The name of the Amazon S3 bucket.
   *
   * @public
   */
  BucketName: string | undefined;

  /**
   * The identifier of the static file in the Amazon S3 bucket.
   *
   * @public
   */
  ObjectKey: string | undefined;

  /**
   * The Region of the Amazon S3 account that contains the bucket.
   *
   * @public
   */
  Region: string | undefined;
}

/**
 * The structure that contains the URL to download the static file from.
 *
 * @public
 */
export interface StaticFileUrlSourceOptions {
  /**
   * The URL to download the static file from.
   *
   * @public
   */
  Url: string | undefined;
}

/**
 * The source of the static file.
 *
 * @public
 */
export interface StaticFileSource {
  /**
   * The structure that contains the URL to download the static file from.
   *
   * @public
   */
  UrlOptions?: StaticFileUrlSourceOptions | undefined;

  /**
   * The structure that contains the Amazon S3 location to download the static file from.
   *
   * @public
   */
  S3Options?: StaticFileS3SourceOptions | undefined;
}

/**
 * A static file that contains an image.
 *
 * @public
 */
export interface ImageStaticFile {
  /**
   * The ID of the static file that contains an image.
   *
   * @public
   */
  StaticFileId: string | undefined;

  /**
   * The source of the image static file.
   *
   * @public
   */
  Source?: StaticFileSource | undefined;
}

/**
 * A static file that contains the geospatial data.
 *
 * @public
 */
export interface SpatialStaticFile {
  /**
   * The ID of the spatial static file.
   *
   * @public
   */
  StaticFileId: string | undefined;

  /**
   * The source of the spatial static file.
   *
   * @public
   */
  Source?: StaticFileSource | undefined;
}

/**
 * The static file.
 *
 * @public
 */
export interface StaticFile {
  /**
   * The image static file.
   *
   * @public
   */
  ImageStaticFile?: ImageStaticFile | undefined;

  /**
   * The spacial static file.
   *
   * @public
   */
  SpatialStaticFile?: SpatialStaticFile | undefined;
}

/**
 * A tooltip sheet is an object that contains a set of visuals that are used as a tooltip. Every analysis and dashboard must contain at least one non-tooltip sheet.
 *
 * @public
 */
export interface TooltipSheetDefinition {
  /**
   * The unique identifier of a tooltip sheet.
   *
   * @public
   */
  SheetId: string | undefined;

  /**
   * The name of the tooltip sheet. This name is displayed on the sheet's tab in the Quick console.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * A list of the visuals that are on a tooltip sheet.
   *
   * @public
   */
  Visuals?: Visual[] | undefined;

  /**
   * The text boxes that are on a tooltip sheet.
   *
   * @public
   */
  TextBoxes?: SheetTextBox[] | undefined;

  /**
   * A list of images on a tooltip sheet.
   *
   * @public
   */
  Images?: SheetImage[] | undefined;

  /**
   * Layouts define how the components of a tooltip sheet are arranged.
   *
   * For more information, see [Types of layout](https://docs.aws.amazon.com/quicksight/latest/user/types-of-layout.html) in the *Amazon Quick Suite User Guide*.
   *
   * @public
   */
  Layouts?: Layout[] | undefined;
}

/**
 * A topic.
 *
 * @public
 */
export interface TopicIdentifierDeclaration {
  /**
   * The identifier of the topic, typically the topic's name.
   *
   * @public
   */
  Identifier: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the topic.
   *
   * @public
   */
  TopicArn: string | undefined;
}

/**
 * A filter that you apply when searching for one or more analyses.
 *
 * @public
 */
export interface AnalysisSearchFilter {
  /**
   * The comparison operator that you want to use as a filter, for example `"Operator": "StringEquals"`. Valid values are `"StringEquals"` and `"StringLike"`.
   *
   * If you set the operator value to `"StringEquals"`, you need to provide an ownership related filter in the `"NAME"` field and the arn of the user or group whose folders you want to search in the `"Value"` field. For example, `"Name":"DIRECT_QUICKSIGHT_OWNER", "Operator": "StringEquals", "Value": "arn:aws:quicksight:us-east-1:1:user/default/UserName1"`.
   *
   * If you set the value to `"StringLike"`, you need to provide the name of the folders you are searching for. For example, `"Name":"ANALYSIS_NAME", "Operator": "StringLike", "Value": "Test"`. The `"StringLike"` operator only supports the `NAME` value `ANALYSIS_NAME`.
   *
   * @public
   */
  Operator?: FilterOperator | undefined;

  /**
   * The name of the value that you want to use as a filter, for example `"Name": "QUICKSIGHT_OWNER"`.
   *
   * Valid values are defined as follows:
   *
   * - `QUICKSIGHT_VIEWER_OR_OWNER`: Provide an ARN of a user or group, and any analyses with that ARN listed as one of the analysis' owners or viewers are returned. Implicit permissions from folders or groups are considered.
   * - `QUICKSIGHT_OWNER`: Provide an ARN of a user or group, and any analyses with that ARN listed as one of the owners of the analyses are returned. Implicit permissions from folders or groups are considered.
   * - `DIRECT_QUICKSIGHT_SOLE_OWNER`: Provide an ARN of a user or group, and any analyses with that ARN listed as the only owner of the analysis are returned. Implicit permissions from folders or groups are not considered.
   * - `DIRECT_QUICKSIGHT_OWNER`: Provide an ARN of a user or group, and any analyses with that ARN listed as one of the owners of the analyses are returned. Implicit permissions from folders or groups are not considered.
   * - `DIRECT_QUICKSIGHT_VIEWER_OR_OWNER`: Provide an ARN of a user or group, and any analyses with that ARN listed as one of the owners or viewers of the analyses are returned. Implicit permissions from folders or groups are not considered.
   * - `ANALYSIS_NAME`: Any analyses whose names have a substring match to this value will be returned.
   *
   * @public
   */
  Name?: AnalysisFilterAttribute | undefined;

  /**
   * The value of the named item, in this case `QUICKSIGHT_USER`, that you want to use as a filter, for example `"Value"`. An example is `"arn:aws:quicksight:us-east-1:1:user/default/UserName1"`.
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * Dataset reference.
 *
 * @public
 */
export interface DataSetReference {
  /**
   * Dataset placeholder.
   *
   * @public
   */
  DataSetPlaceholder: string | undefined;

  /**
   * Dataset Amazon Resource Name (ARN).
   *
   * @public
   */
  DataSetArn: string | undefined;
}

/**
 * Topic reference.
 *
 * @public
 */
export interface TopicReference {
  /**
   * Topic placeholder.
   *
   * @public
   */
  TopicPlaceholder: string | undefined;

  /**
   * Topic Amazon Resource Name (ARN).
   *
   * @public
   */
  TopicArn: string | undefined;
}

/**
 * The source template of an analysis.
 *
 * @public
 */
export interface AnalysisSourceTemplate {
  /**
   * The dataset references of the source template of an analysis.
   *
   * @public
   */
  DataSetReferences: DataSetReference[] | undefined;

  /**
   * The topic references of the source template of an analysis.
   *
   * @public
   */
  TopicReferences?: TopicReference[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of the source template of an analysis.
   *
   * @public
   */
  Arn: string | undefined;
}

/**
 * The source entity of an analysis.
 *
 * @public
 */
export interface AnalysisSourceEntity {
  /**
   * The source template for the source entity of the analysis.
   *
   * @public
   */
  SourceTemplate?: AnalysisSourceTemplate | undefined;
}

/**
 * The summary metadata that describes an analysis.
 *
 * @public
 */
export interface AnalysisSummary {
  /**
   * The Amazon Resource Name (ARN) for the analysis.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The ID of the analysis. This ID displays in the URL.
   *
   * @public
   */
  AnalysisId?: string | undefined;

  /**
   * The name of the analysis. This name is displayed in the Quick Sight console.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The last known status for the analysis.
   *
   * @public
   */
  Status?: ResourceStatus | undefined;

  /**
   * The time that the analysis was created.
   *
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * The time that the analysis was last updated.
   *
   * @public
   */
  LastUpdatedTime?: Date | undefined;
}

/**
 * The definition of the Anchor.
 *
 * @public
 */
export interface Anchor {
  /**
   * The `AnchorType` for the Anchor.
   *
   * @public
   */
  AnchorType?: AnchorType | undefined;

  /**
   * The `TimeGranularity` of the Anchor.
   *
   * @public
   */
  TimeGranularity?: TimeGranularity | undefined;

  /**
   * The offset of the Anchor.
   *
   * @public
   */
  Offset?: number | undefined;
}

/**
 * The shared view settings of an embedded dashboard.
 *
 * @public
 */
export interface SharedViewConfigurations {
  /**
   * The shared view settings of an embedded dashboard.
   *
   * @public
   */
  Enabled: boolean | undefined;
}

/**
 * The feature configuration for an embedded dashboard.
 *
 * @public
 */
export interface AnonymousUserDashboardFeatureConfigurations {
  /**
   * The shared view settings of an embedded dashboard.
   *
   * @public
   */
  SharedView?: SharedViewConfigurations | undefined;
}

/**
 * Information about the dashboard that you want to embed.
 *
 * @public
 */
export interface AnonymousUserDashboardEmbeddingConfiguration {
  /**
   * The dashboard ID for the dashboard that you want the user to see first. This ID is included in the output URL. When the URL in response is accessed, Amazon Quick Sight renders this dashboard.
   *
   * The Amazon Resource Name (ARN) of this dashboard must be included in the `AuthorizedResourceArns` parameter. Otherwise, the request will fail with `InvalidParameterValueException`.
   *
   * @public
   */
  InitialDashboardId: string | undefined;

  /**
   * A list of all enabled features of a specified anonymous dashboard.
   *
   * @public
   */
  EnabledFeatures?: AnonymousUserDashboardEmbeddingConfigurationEnabledFeature[] | undefined;

  /**
   * A list of all disabled features of a specified anonymous dashboard.
   *
   * @public
   */
  DisabledFeatures?: AnonymousUserDashboardEmbeddingConfigurationDisabledFeature[] | undefined;

  /**
   * The feature configuration for an embedded dashboard.
   *
   * @public
   */
  FeatureConfigurations?: AnonymousUserDashboardFeatureConfigurations | undefined;
}

/**
 * A structure that contains the following elements:
 *
 * - The `DashboardId` of the dashboard that has the visual that you want to embed.
 * - The `SheetId` of the sheet that has the visual that you want to embed.
 * - The `VisualId` of the visual that you want to embed.
 *
 * The `DashboardId`, `SheetId`, and `VisualId` can be found in the `IDs for developers` section of the `Embed visual` pane of the visual's on-visual menu of the Amazon Quick Sight console. You can also get the `DashboardId` with a `ListDashboards` API operation.
 *
 * @public
 */
export interface DashboardVisualId {
  /**
   * The ID of the dashboard that has the visual that you want to embed. The `DashboardId` can be found in the `IDs for developers` section of the `Embed visual` pane of the visual's on-visual menu of the Quick console. You can also get the `DashboardId` with a `ListDashboards` API operation.
   *
   * @public
   */
  DashboardId: string | undefined;

  /**
   * The ID of the sheet that the has visual that you want to embed. The `SheetId` can be found in the `IDs for developers` section of the `Embed visual` pane of the visual's on-visual menu of the Quick console.
   *
   * @public
   */
  SheetId: string | undefined;

  /**
   * The ID of the visual that you want to embed. The `VisualID` can be found in the `IDs for developers` section of the `Embed visual` pane of the visual's on-visual menu of the Amazon Quick Sight console.
   *
   * @public
   */
  VisualId: string | undefined;
}

/**
 * The experience that you are embedding. You can use this object to generate a url that embeds a visual into your application.
 *
 * @public
 */
export interface AnonymousUserDashboardVisualEmbeddingConfiguration {
  /**
   * The visual ID for the visual that you want the user to see. This ID is included in the output URL. When the URL in response is accessed, Amazon Quick Sight renders this visual.
   *
   * The Amazon Resource Name (ARN) of the dashboard that the visual belongs to must be included in the `AuthorizedResourceArns` parameter. Otherwise, the request will fail with `InvalidParameterValueException`.
   *
   * @public
   */
  InitialDashboardVisualId: DashboardVisualId | undefined;
}

/**
 * The settings that you want to use for the Generative Q&A experience.
 *
 * @public
 */
export interface AnonymousUserGenerativeQnAEmbeddingConfiguration {
  /**
   * The Quick Sight Q topic ID of the new reader experience topic that you want the anonymous user to see first. This ID is included in the output URL. When the URL in response is accessed, Quick Sight renders the Generative Q&A experience with this new reader experience topic pre selected.
   *
   * The Amazon Resource Name (ARN) of this Q new reader experience topic must be included in the `AuthorizedResourceArns` parameter. Otherwise, the request fails with an `InvalidParameterValueException` error.
   *
   * @public
   */
  InitialTopicId: string | undefined;
}

/**
 * The settings that you want to use with the Q search bar.
 *
 * @public
 */
export interface AnonymousUserQSearchBarEmbeddingConfiguration {
  /**
   * The Quick Sight Q topic ID of the legacy topic that you want the anonymous user to see first. This ID is included in the output URL. When the URL in response is accessed, Quick Sight renders the Q search bar with this legacy topic pre-selected.
   *
   * The Amazon Resource Name (ARN) of this Q legacy topic must be included in the `AuthorizedResourceArns` parameter. Otherwise, the request fails with an `InvalidParameterValueException` error.
   *
   * @public
   */
  InitialTopicId: string | undefined;
}

/**
 * The type of experience you want to embed. For anonymous users, you can embed Quick dashboards.
 *
 * @public
 */
export interface AnonymousUserEmbeddingExperienceConfiguration {
  /**
   * The type of embedding experience. In this case, Amazon Quick Sight dashboards.
   *
   * @public
   */
  Dashboard?: AnonymousUserDashboardEmbeddingConfiguration | undefined;

  /**
   * The type of embedding experience. In this case, Amazon Quick Sight visuals.
   *
   * @public
   */
  DashboardVisual?: AnonymousUserDashboardVisualEmbeddingConfiguration | undefined;

  /**
   * The Q search bar that you want to use for anonymous user embedding.
   *
   * @public
   */
  QSearchBar?: AnonymousUserQSearchBarEmbeddingConfiguration | undefined;

  /**
   * The Generative Q&A experience that you want to use for anonymous user embedding.
   *
   * @public
   */
  GenerativeQnA?: AnonymousUserGenerativeQnAEmbeddingConfiguration | undefined;
}

/**
 * A structure that contains information that identifies the snapshot that needs to be generated.
 *
 * @public
 */
export interface SnapshotFileSheetSelection {
  /**
   * The sheet ID of the dashboard to generate the snapshot artifact from. This value is required for CSV, Excel, and PDF format types.
   *
   * @public
   */
  SheetId: string | undefined;

  /**
   * The selection scope of the visuals on a sheet of a dashboard that you are generating a snapthot of. You can choose one of the following options.
   *
   * - `ALL_VISUALS` - Selects all visuals that are on the sheet. This value is required if the snapshot is a PDF.
   * - `SELECTED_VISUALS` - Select the visual that you want to add to the snapshot. This value is required if the snapshot is a CSV or Excel workbook.
   *
   * @public
   */
  SelectionScope: SnapshotFileSheetSelectionScope | undefined;

  /**
   * A structure that lists the IDs of the visuals in the selected sheet. Supported visual types are table, pivot table visuals. This value is required if you are generating a CSV or Excel workbook. This value supports a maximum of 1 visual ID for CSV and 5 visual IDs across up to 5 sheet selections for Excel. If you are generating an Excel workbook, the order of the visual IDs provided in this structure determines the order of the worksheets in the Excel file.
   *
   * @public
   */
  VisualIds?: string[] | undefined;
}

/**
 * A structure that contains the information for the snapshot that you want to generate. This information is provided by you when you start a new snapshot job.
 *
 * @public
 */
export interface SnapshotFile {
  /**
   * A list of `SnapshotFileSheetSelection` objects that contain information on the dashboard sheet that is exported. These objects provide information about the snapshot artifacts that are generated during the job. This structure can hold a maximum of 5 CSV configurations, 5 Excel configurations, or 1 configuration for PDF.
   *
   * @public
   */
  SheetSelections: SnapshotFileSheetSelection[] | undefined;

  /**
   * The format of the snapshot file to be generated. You can choose between `CSV`, `Excel`, or `PDF`.
   *
   * @public
   */
  FormatType: SnapshotFileFormatType | undefined;
}

/**
 * Information on the error that caused the snapshot job to fail.
 *
 * @public
 */
export interface SnapshotJobResultErrorInfo {
  /**
   * The error message.
   *
   * @public
   */
  ErrorMessage?: string | undefined;

  /**
   * The error type.
   *
   * @public
   */
  ErrorType?: string | undefined;
}

/**
 * An optional structure that contains the Amazon S3 bucket configuration that the generated snapshots are stored in. If you don't provide this information, generated snapshots are stored in the default Amazon Quick Sight bucket.
 *
 * @public
 */
export interface S3BucketConfiguration {
  /**
   * The name of an existing Amazon S3 bucket where the generated snapshot artifacts are sent.
   *
   * @public
   */
  BucketName: string | undefined;

  /**
   * The prefix of the Amazon S3 bucket that the generated snapshots are stored in.
   *
   * @public
   */
  BucketPrefix: string | undefined;

  /**
   * The region that the Amazon S3 bucket is located in. The bucket must be located in the same region that the `StartDashboardSnapshotJob` API call is made.
   *
   * @public
   */
  BucketRegion: string | undefined;
}

/**
 * A structure that describes the Amazon S3 settings to use to save the generated dashboard snapshot.
 *
 * @public
 */
export interface SnapshotS3DestinationConfiguration {
  /**
   * A structure that contains details about the Amazon S3 bucket that the generated dashboard snapshot is saved in.
   *
   * @public
   */
  BucketConfiguration: S3BucketConfiguration | undefined;
}

/**
 * The Amazon S3 result from the snapshot job. The result includes the `DestinationConfiguration` and the Amazon S3 Uri. If an error occured during the job, the result returns information on the error.
 *
 * @public
 */
export interface SnapshotJobS3Result {
  /**
   * A list of Amazon S3 bucket configurations that are provided when you make a `StartDashboardSnapshotJob` API call.
   *
   * @public
   */
  S3DestinationConfiguration?: SnapshotS3DestinationConfiguration | undefined;

  /**
   * The Amazon S3 Uri.
   *
   * @public
   */
  S3Uri?: string | undefined;

  /**
   * An array of error records that describe any failures that occur while the dashboard snapshot job runs.
   *
   * @public
   */
  ErrorInfo?: SnapshotJobResultErrorInfo[] | undefined;
}

/**
 * A structure that contains information on the generated snapshot file groups.
 *
 * @public
 */
export interface SnapshotJobResultFileGroup {
  /**
   * A list of `SnapshotFile` objects.
   *
   * @public
   */
  Files?: SnapshotFile[] | undefined;

  /**
   * A list of `SnapshotJobS3Result` objects.
   *
   * @public
   */
  S3Results?: SnapshotJobS3Result[] | undefined;
}

/**
 * A structure that contains the file groups that are requested for the artifact generation in a `StartDashboardSnapshotJob` API call.
 *
 * @public
 */
export interface AnonymousUserSnapshotJobResult {
  /**
   * A list of `SnapshotJobResultFileGroup` objects that contain information on the files that are requested during a `StartDashboardSnapshotJob` API call. If the job succeeds, these objects contain the location where the snapshot artifacts are stored. If the job fails, the objects contain information about the error that caused the job to fail.
   *
   * @public
   */
  FileGroups?: SnapshotJobResultFileGroup[] | undefined;
}

/**
 * Configuration for API key-based authentication to external services.
 *
 * @public
 */
export interface APIKeyConnectionMetadata {
  /**
   * The base URL endpoint for the external service.
   *
   * @public
   */
  BaseEndpoint: string | undefined;

  /**
   * The API key used for authentication.
   *
   * @public
   */
  ApiKey: string | undefined;

  /**
   * The email address associated with the API key, if required.
   *
   * @public
   */
  Email?: string | undefined;
}

/**
 * Represents a column that will be included in the result of an append operation, combining data from multiple sources.
 *
 * @public
 */
export interface AppendedColumn {
  /**
   * The name of the column to include in the appended result.
   *
   * @public
   */
  ColumnName: string | undefined;

  /**
   * A unique identifier for the column in the appended result.
   *
   * @public
   */
  NewColumnId: string | undefined;
}

/**
 * A transform operation that combines rows from two data sources by stacking them vertically (union operation).
 *
 * @public
 */
export interface AppendOperation {
  /**
   * Alias for this operation.
   *
   * @public
   */
  Alias: string | undefined;

  /**
   * The first data source to be included in the append operation.
   *
   * @public
   */
  FirstSource?: TransformOperationSource | undefined;

  /**
   * The second data source to be appended to the first source.
   *
   * @public
   */
  SecondSource?: TransformOperationSource | undefined;

  /**
   * The list of columns to include in the appended result, mapping columns from both sources.
   *
   * @public
   */
  AppendedColumns: AppendedColumn[] | undefined;
}

/**
 * The scoping configuration that determines which principals an approval policy applies to.
 *
 * @public
 */
export interface ApplicableTo {
  /**
   * The type of scoping that determines which principals the approval policy applies to. Valid values are defined as follows:
   *
   * - `GROUP`: The policy applies only to principals in the groups specified by `GroupArns`. When you use `GROUP`, you must also provide a value for `GroupArns`.
   *
   * @public
   */
  Type: ApplicableToType | undefined;

  /**
   * The list of group ARNs that the policy applies to. Required when type is GROUP.
   *
   * @public
   */
  GroupArns?: string[] | undefined;
}

/**
 * The color palette.
 *
 * @public
 */
export interface Palette {
  /**
   * The foreground color.
   *
   * @public
   */
  Foreground?: string | undefined;

  /**
   * The background color.
   *
   * @public
   */
  Background?: string | undefined;
}

/**
 * The color palette.
 *
 * @public
 */
export interface BrandColorPalette {
  /**
   * The primary color.
   *
   * @public
   */
  Primary?: Palette | undefined;

  /**
   * The secondary color.
   *
   * @public
   */
  Secondary?: Palette | undefined;

  /**
   * The color that is used for accent elements.
   *
   * @public
   */
  Accent?: Palette | undefined;

  /**
   * The color that is used for measure elements.
   *
   * @public
   */
  Measure?: Palette | undefined;

  /**
   * The color that is used for dimension elements.
   *
   * @public
   */
  Dimension?: Palette | undefined;

  /**
   * The color that is used for success elements.
   *
   * @public
   */
  Success?: Palette | undefined;

  /**
   * The color that is used for info elements.
   *
   * @public
   */
  Info?: Palette | undefined;

  /**
   * The color that is used for warning elements.
   *
   * @public
   */
  Warning?: Palette | undefined;

  /**
   * The color that is used for danger elements.
   *
   * @public
   */
  Danger?: Palette | undefined;
}

/**
 * The navigation bar style.
 *
 * @public
 */
export interface NavbarStyle {
  /**
   * The global navigation bar style.
   *
   * @public
   */
  GlobalNavbar?: Palette | undefined;

  /**
   * The contextual navigation bar style.
   *
   * @public
   */
  ContextualNavbar?: Palette | undefined;
}

/**
 * The element style.
 *
 * @public
 */
export interface BrandElementStyle {
  /**
   * The navigation bar style.
   *
   * @public
   */
  NavbarStyle?: NavbarStyle | undefined;
}

/**
 * The contextual accent palette.
 *
 * @public
 */
export interface ContextualAccentPalette {
  /**
   * The color palette.
   *
   * @public
   */
  Connection?: Palette | undefined;

  /**
   * The color palette.
   *
   * @public
   */
  Visualization?: Palette | undefined;

  /**
   * The color palette.
   *
   * @public
   */
  Insight?: Palette | undefined;

  /**
   * The color palette.
   *
   * @public
   */
  Automation?: Palette | undefined;
}

/**
 * The application theme.
 *
 * @public
 */
export interface ApplicationTheme {
  /**
   * The color palette.
   *
   * @public
   */
  BrandColorPalette?: BrandColorPalette | undefined;

  /**
   * The contextual accent palette.
   *
   * @public
   */
  ContextualAccentPalette?: ContextualAccentPalette | undefined;

  /**
   * The element style.
   *
   * @public
   */
  BrandElementStyle?: BrandElementStyle | undefined;
}

/**
 * A governance approval policy that specifies which principals and governed actions require approval, and which assets the policy applies to.
 *
 * @public
 */
export interface ApprovalPolicy {
  /**
   * The unique identifier of the approval policy.
   *
   * @public
   */
  PolicyId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the approval policy.
   *
   * @public
   */
  PolicyArn: string | undefined;

  /**
   * The name of the approval policy.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A description of the approval policy.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The list of governed actions that trigger the approval workflow.
   *
   * @public
   */
  Actions: GovernedAction[] | undefined;

  /**
   * The list of asset types that the approval policy applies to.
   *
   * @public
   */
  AssetTypes: AssetType[] | undefined;

  /**
   * The scoping configuration that determines who the approval policy applies to.
   *
   * @public
   */
  ApplicableTo: ApplicableTo | undefined;

  /**
   * The list of group ARNs whose members can approve requests.
   *
   * @public
   */
  ApprovalGroups: string[] | undefined;

  /**
   * The date and time that the approval policy was created.
   *
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * The date and time that the approval policy was last updated.
   *
   * @public
   */
  UpdatedAt: Date | undefined;
}

/**
 * A summary of an app, including its identifier, name, and metadata.
 *
 * @public
 */
export interface AppSummary {
  /**
   * The ID of the app.
   *
   * @public
   */
  AppId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the app.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The display name of the app.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The time that the app was created.
   *
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * The time that the app was last updated.
   *
   * @public
   */
  LastUpdatedTime?: Date | undefined;

  /**
   * The sharing status of the app: `PUBLIC` if the app is shared publicly, or `PRIVATE` if it is private.
   *
   * @public
   */
  Visibility?: AppVisibility | undefined;
}

/**
 * Controls how a specific `Analysis` resource is parameterized in the returned CloudFormation template.
 *
 * @public
 */
export interface AssetBundleExportJobAnalysisOverrideProperties {
  /**
   * The ARN of the specific `Analysis` resource whose override properties are configured in this structure.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * A list of `Analysis` resource properties to generate variables for in the returned CloudFormation template.
   *
   * @public
   */
  Properties: AssetBundleExportJobAnalysisPropertyToOverride[] | undefined;
}

/**
 * Controls how a specific `Dashboard` resource is parameterized in the returned CloudFormation template.
 *
 * @public
 */
export interface AssetBundleExportJobDashboardOverrideProperties {
  /**
   * The ARN of the specific `Dashboard` resource whose override properties are configured in this structure.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * A list of `Dashboard` resource properties to generate variables for in the returned CloudFormation template.
   *
   * @public
   */
  Properties: AssetBundleExportJobDashboardPropertyToOverride[] | undefined;
}

/**
 * Controls how a specific `DataSet` resource is parameterized in the returned CloudFormation template.
 *
 * @public
 */
export interface AssetBundleExportJobDataSetOverrideProperties {
  /**
   * The ARN of the specific `DataSet` resource whose override properties are configured in this structure.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * A list of `DataSet` resource properties to generate variables for in the returned CloudFormation template.
   *
   * @public
   */
  Properties: AssetBundleExportJobDataSetPropertyToOverride[] | undefined;
}

/**
 * Controls how a specific `DataSource` resource is parameterized in the returned CloudFormation template.
 *
 * @public
 */
export interface AssetBundleExportJobDataSourceOverrideProperties {
  /**
   * The ARN of the specific `DataSource` resource whose override properties are configured in this structure.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * A list of `DataSource` resource properties to generate variables for in the returned CloudFormation template.
   *
   * @public
   */
  Properties: AssetBundleExportJobDataSourcePropertyToOverride[] | undefined;
}

/**
 * Controls how a specific `Folder` resource is parameterized in the returned CloudFormation template.
 *
 * @public
 */
export interface AssetBundleExportJobFolderOverrideProperties {
  /**
   * The ARN of the specific `Folder` resource whose override properties are configured in this structure.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * A list of `Folder` resource properties to generate variables for in the returned CloudFormation template.
   *
   * @public
   */
  Properties: AssetBundleExportJobFolderPropertyToOverride[] | undefined;
}

/**
 * Controls how a specific `RefreshSchedule` resource is parameterized in the returned CloudFormation template.
 *
 * @public
 */
export interface AssetBundleExportJobRefreshScheduleOverrideProperties {
  /**
   * The ARN of the specific `RefreshSchedule` resource whose override properties are configured in this structure.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * A list of `RefreshSchedule` resource properties to generate variables for in the returned CloudFormation template.
   *
   * @public
   */
  Properties: AssetBundleExportJobRefreshSchedulePropertyToOverride[] | undefined;
}

/**
 * An optional structure that configures resource ID overrides for the export job.
 *
 * @public
 */
export interface AssetBundleExportJobResourceIdOverrideConfiguration {
  /**
   * An option to request a CloudFormation variable for a prefix to be prepended to each resource's ID before import. The prefix is only added to the asset IDs and does not change the name of the asset.
   *
   * @public
   */
  PrefixForAllResources?: boolean | undefined;
}

/**
 * Controls how a specific `Theme` resource is parameterized in the returned CloudFormation template.
 *
 * @public
 */
export interface AssetBundleExportJobThemeOverrideProperties {
  /**
   * The ARN of the specific `Theme` resource whose override properties are configured in this structure.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * A list of `Theme` resource properties to generate variables for in the returned CloudFormation template.
   *
   * @public
   */
  Properties: AssetBundleExportJobThemePropertyToOverride[] | undefined;
}

/**
 * Controls how a specific `Topic` resource is parameterized in the returned CloudFormation template.
 *
 * @public
 */
export interface AssetBundleExportJobTopicV2OverrideProperties {
  /**
   * The ARN of the specific `Topic` resource whose override properties are configured in this structure.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * A list of `Topic` resource properties to generate variables for in the returned CloudFormation template.
   *
   * @public
   */
  Properties: AssetBundleExportJobTopicV2PropertyToOverride[] | undefined;
}

/**
 * Controls how a specific `VPCConnection` resource is parameterized in the outputted CloudFormation template.
 *
 * @public
 */
export interface AssetBundleExportJobVPCConnectionOverrideProperties {
  /**
   * The ARN of the specific `VPCConnection` resource whose override properties are configured in this structure.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * A list of `VPCConnection` resource properties to generate variables for in the returned CloudFormation template.
   *
   * @public
   */
  Properties: AssetBundleExportJobVPCConnectionPropertyToOverride[] | undefined;
}

/**
 * An optional collection of CloudFormation property configurations that control how the export job is generated.
 *
 * @public
 */
export interface AssetBundleCloudFormationOverridePropertyConfiguration {
  /**
   * An optional list of structures that control how resource IDs are parameterized in the returned CloudFormation template.
   *
   * @public
   */
  ResourceIdOverrideConfiguration?: AssetBundleExportJobResourceIdOverrideConfiguration | undefined;

  /**
   * An optional list of structures that control how `VPCConnection` resources are parameterized in the returned CloudFormation template.
   *
   * @public
   */
  VPCConnections?: AssetBundleExportJobVPCConnectionOverrideProperties[] | undefined;

  /**
   * An optional list of structures that control how `RefreshSchedule` resources are parameterized in the returned CloudFormation template.
   *
   * @public
   */
  RefreshSchedules?: AssetBundleExportJobRefreshScheduleOverrideProperties[] | undefined;

  /**
   * An optional list of structures that control how `DataSource` resources are parameterized in the returned CloudFormation template.
   *
   * @public
   */
  DataSources?: AssetBundleExportJobDataSourceOverrideProperties[] | undefined;

  /**
   * An optional list of structures that control how `DataSet` resources are parameterized in the returned CloudFormation template.
   *
   * @public
   */
  DataSets?: AssetBundleExportJobDataSetOverrideProperties[] | undefined;

  /**
   * An optional list of structures that control how `Theme` resources are parameterized in the returned CloudFormation template.
   *
   * @public
   */
  Themes?: AssetBundleExportJobThemeOverrideProperties[] | undefined;

  /**
   * An optional list of structures that control how `Analysis` resources are parameterized in the returned CloudFormation template.
   *
   * @public
   */
  Analyses?: AssetBundleExportJobAnalysisOverrideProperties[] | undefined;

  /**
   * An optional list of structures that control how `Dashboard` resources are parameterized in the returned CloudFormation template.
   *
   * @public
   */
  Dashboards?: AssetBundleExportJobDashboardOverrideProperties[] | undefined;

  /**
   * An optional list of structures that controls how `Folder` resources are parameterized in the returned CloudFormation template.
   *
   * @public
   */
  Folders?: AssetBundleExportJobFolderOverrideProperties[] | undefined;

  /**
   * An optional list of structures that controls how `Topic` resources are parameterized in the returned CloudFormation template.
   *
   * @public
   */
  TopicsV2?: AssetBundleExportJobTopicV2OverrideProperties[] | undefined;
}

/**
 * Describes an error that occurred during an Asset Bundle export job.
 *
 * @public
 */
export interface AssetBundleExportJobError {
  /**
   * The ARN of the resource whose processing caused an error.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The specific error type of the error that occurred.
   *
   * @public
   */
  Type?: string | undefined;

  /**
   * A description of the error.
   *
   * @public
   */
  Message?: string | undefined;
}

/**
 * A summary of the export job that includes details of the job's configuration and its current status.
 *
 * @public
 */
export interface AssetBundleExportJobSummary {
  /**
   * The current status of the export job.
   *
   * @public
   */
  JobStatus?: AssetBundleExportJobStatus | undefined;

  /**
   * The ARN of the export job.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The time that the export job was created.
   *
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * The ID of the export job.
   *
   * @public
   */
  AssetBundleExportJobId?: string | undefined;

  /**
   * The flag that determines the inclusion of resource dependencies in the returned asset bundle.
   *
   * @public
   */
  IncludeAllDependencies?: boolean | undefined;

  /**
   * The format for the export job.
   *
   * @public
   */
  ExportFormat?: AssetBundleExportFormat | undefined;

  /**
   * The flag that determines the inclusion of permissions associated with each resource ARN.
   *
   * @public
   */
  IncludePermissions?: boolean | undefined;

  /**
   * The flag that determines the inclusion of tags associated with each resource ARN.
   *
   * @public
   */
  IncludeTags?: boolean | undefined;
}

/**
 * The option to relax the validation that is required to export each asset. When `StrictModeForAllResource` is set to `false`, validation is skipped for specific UI errors.
 *
 * @public
 */
export interface AssetBundleExportJobValidationStrategy {
  /**
   * A Boolean value that indicates whether to export resources under strict or lenient mode.
   *
   * @public
   */
  StrictModeForAllResources?: boolean | undefined;
}

/**
 * Describes a warning that occurred during an Asset Bundle export job.
 *
 * @public
 */
export interface AssetBundleExportJobWarning {
  /**
   * The ARN of the resource whose processing caused a warning.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * A description of the warning.
   *
   * @public
   */
  Message?: string | undefined;
}

/**
 * The override parameters for a single analysis that is being imported.
 *
 * @public
 */
export interface AssetBundleImportJobAnalysisOverrideParameters {
  /**
   * The ID of the analysis that you ant to apply overrides to.
   *
   * @public
   */
  AnalysisId: string | undefined;

  /**
   * A new name for the analysis.
   *
   * @public
   */
  Name?: string | undefined;
}

/**
 * A structure that contains the permissions for the resource that you want to override in an asset bundle import job.
 *
 * @public
 */
export interface AssetBundleResourcePermissions {
  /**
   * A list of principals to grant permissions on.
   *
   * @public
   */
  Principals: string[] | undefined;

  /**
   * A list of IAM actions to grant permissions on.
   *
   * @public
   */
  Actions: string[] | undefined;
}

/**
 * An object that contains a list of permissions to be applied to a list of analysis IDs.
 *
 * @public
 */
export interface AssetBundleImportJobAnalysisOverridePermissions {
  /**
   * A list of analysis IDs that you want to apply overrides to. You can use `*` to override all analyses in this asset bundle.
   *
   * @public
   */
  AnalysisIds: string[] | undefined;

  /**
   * A list of permissions for the analyses that you want to apply overrides to.
   *
   * @public
   */
  Permissions: AssetBundleResourcePermissions | undefined;
}

/**
 * The key or keys of the key-value pairs for the resource tag or tags assigned to the resource.
 *
 * @public
 */
export interface Tag {
  /**
   * Tag key.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * Tag value.
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * An object that contains a list of tags to be assigned to a list of analysis IDs.
 *
 * @public
 */
export interface AssetBundleImportJobAnalysisOverrideTags {
  /**
   * A list of analysis IDs that you want to apply overrides to. You can use `*` to override all analyses in this asset bundle.
   *
   * @public
   */
  AnalysisIds: string[] | undefined;

  /**
   * A list of tags for the analyses that you want to apply overrides to.
   *
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * The override parameters for a single dashboard that is being imported.
 *
 * @public
 */
export interface AssetBundleImportJobDashboardOverrideParameters {
  /**
   * The ID of the dashboard that you want to apply overrides to.
   *
   * @public
   */
  DashboardId: string | undefined;

  /**
   * A new name for the dashboard.
   *
   * @public
   */
  Name?: string | undefined;
}

/**
 * A structure that contains the configuration of a shared link to an Amazon Quick Sight dashboard.
 *
 * @public
 */
export interface AssetBundleResourceLinkSharingConfiguration {
  /**
   * A list of link sharing permissions for the dashboards that you want to apply overrides to.
   *
   * @public
   */
  Permissions?: AssetBundleResourcePermissions | undefined;
}

/**
 * An object that contains a list of permissions to be applied to a list of dashboard IDs.
 *
 * @public
 */
export interface AssetBundleImportJobDashboardOverridePermissions {
  /**
   * A list of dashboard IDs that you want to apply overrides to. You can use `*` to override all dashboards in this asset bundle.
   *
   * @public
   */
  DashboardIds: string[] | undefined;

  /**
   * A list of permissions for the dashboards that you want to apply overrides to.
   *
   * @public
   */
  Permissions?: AssetBundleResourcePermissions | undefined;

  /**
   * A structure that contains the link sharing configurations that you want to apply overrides to.
   *
   * @public
   */
  LinkSharingConfiguration?: AssetBundleResourceLinkSharingConfiguration | undefined;
}

/**
 * An object that contains a list of tags to be assigned to a list of dashboard IDs.
 *
 * @public
 */
export interface AssetBundleImportJobDashboardOverrideTags {
  /**
   * A list of dashboard IDs that you want to apply overrides to. You can use `*` to override all dashboards in this asset bundle.
   *
   * @public
   */
  DashboardIds: string[] | undefined;

  /**
   * A list of tags for the dashboards that you want to apply overrides to.
   *
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * The configuration settings for the email alerts that are sent when a dataset refresh fails.
 *
 * @public
 */
export interface RefreshFailureEmailAlert {
  /**
   * The status value that determines if email alerts are sent.
   *
   * @public
   */
  AlertStatus?: RefreshFailureAlertStatus | undefined;
}

/**
 * The failure configuration of a dataset.
 *
 * @public
 */
export interface RefreshFailureConfiguration {
  /**
   * The email alert configuration for a dataset refresh failure.
   *
   * @public
   */
  EmailAlert?: RefreshFailureEmailAlert | undefined;
}

/**
 * The lookback window setup of an incremental refresh configuration.
 *
 * @public
 */
export interface LookbackWindow {
  /**
   * The name of the lookback window column.
   *
   * @public
   */
  ColumnName: string | undefined;

  /**
   * The lookback window column size.
   *
   * @public
   */
  Size: number | undefined;

  /**
   * The size unit that is used for the lookback window column. Valid values for this structure are `HOUR`, `DAY`, and `WEEK`.
   *
   * @public
   */
  SizeUnit: LookbackWindowSizeUnit | undefined;
}

/**
 * The incremental refresh configuration for a dataset.
 *
 * @public
 */
export interface IncrementalRefresh {
  /**
   * The lookback window setup for an incremental refresh configuration.
   *
   * @public
   */
  LookbackWindow: LookbackWindow | undefined;
}

/**
 * The refresh configuration of a dataset.
 *
 * @public
 */
export interface RefreshConfiguration {
  /**
   * The incremental refresh for the dataset.
   *
   * @public
   */
  IncrementalRefresh: IncrementalRefresh | undefined;
}

/**
 * The refresh properties of a dataset.
 *
 * @public
 */
export interface DataSetRefreshProperties {
  /**
   * The refresh configuration for a dataset.
   *
   * @public
   */
  RefreshConfiguration?: RefreshConfiguration | undefined;

  /**
   * The failure configuration for a dataset.
   *
   * @public
   */
  FailureConfiguration?: RefreshFailureConfiguration | undefined;
}

/**
 * The override parameters for a single dataset that is being imported.
 *
 * @public
 */
export interface AssetBundleImportJobDataSetOverrideParameters {
  /**
   * The ID of the dataset to apply overrides to.
   *
   * @public
   */
  DataSetId: string | undefined;

  /**
   * A new name for the dataset.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The refresh properties of a dataset.
   *
   * @public
   */
  DataSetRefreshProperties?: DataSetRefreshProperties | undefined;
}

/**
 * An object that contains a list of permissions to be applied to a list of dataset IDs.
 *
 * @public
 */
export interface AssetBundleImportJobDataSetOverridePermissions {
  /**
   * A list of dataset IDs that you want to apply overrides to. You can use `*` to override all datasets in this asset bundle.
   *
   * @public
   */
  DataSetIds: string[] | undefined;

  /**
   * A list of permissions for the datasets that you want to apply overrides to.
   *
   * @public
   */
  Permissions: AssetBundleResourcePermissions | undefined;
}

/**
 * An object that contains a list of tags to be assigned to a list of dataset IDs.
 *
 * @public
 */
export interface AssetBundleImportJobDataSetOverrideTags {
  /**
   * A list of dataset IDs that you want to apply overrides to. You can use `*` to override all datasets in this asset bundle.
   *
   * @public
   */
  DataSetIds: string[] | undefined;

  /**
   * A list of tags for the datasets that you want to apply overrides to.
   *
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * A username and password credential pair to use to import a data source resource.
 *
 * @public
 */
export interface AssetBundleImportJobDataSourceCredentialPair {
  /**
   * The username for the data source connection.
   *
   * @public
   */
  Username: string | undefined;

  /**
   * The password for the data source connection.
   *
   * @public
   */
  Password: string | undefined;
}

/**
 * The login credentials to use to import a data source resource.
 *
 * @public
 */
export interface AssetBundleImportJobDataSourceCredentials {
  /**
   * A username and password credential pair to be used to create the imported data source. Keep this field blank if you are using a Secrets Manager secret to provide credentials.
   *
   * @public
   */
  CredentialPair?: AssetBundleImportJobDataSourceCredentialPair | undefined;

  /**
   * The ARN of the Secrets Manager secret that's used to create the imported data source. Keep this field blank, unless you are using a secret in place of a credential pair.
   *
   * @public
   */
  SecretArn?: string | undefined;
}

/**
 * The parameters for an IAM Identity Center configuration.
 *
 * @public
 */
export interface IdentityCenterConfiguration {
  /**
   * A Boolean option that controls whether Trusted Identity Propagation should be used.
   *
   * @public
   */
  EnableIdentityPropagation?: boolean | undefined;
}

/**
 * Parameters for Amazon Athena.
 *
 * @public
 */
export interface AthenaParameters {
  /**
   * The workgroup that Amazon Athena uses.
   *
   * @public
   */
  WorkGroup?: string | undefined;

  /**
   * Use the `RoleArn` structure to override an account-wide role for a specific Athena data source. For example, say an account administrator has turned off all Athena access with an account-wide role. The administrator can then use `RoleArn` to bypass the account-wide role and allow Athena access for the single Athena data source that is specified in the structure, even if the account-wide role forbidding Athena access is still active.
   *
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * Use `ConsumerAccountRoleArn` to perform cross-account Athena access. This is an IAM role ARN in the same AWS account as the Athena resources you want to access. Provide this along with `RoleArn` to enable role-chaining, where Amazon Quick Sight first assumes the `RoleArn` and then assumes the `ConsumerAccountRoleArn` to access Athena resources.
   *
   * @public
   */
  ConsumerAccountRoleArn?: string | undefined;

  /**
   * An optional parameter that configures IAM Identity Center authentication to grant Quick Sight access to your workgroup.
   *
   * This parameter can only be specified if your Quick Sight account is configured with IAM Identity Center.
   *
   * @public
   */
  IdentityCenterConfiguration?: IdentityCenterConfiguration | undefined;
}

/**
 * Parameters for Amazon Aurora.
 *
 * @public
 */
export interface AuroraParameters {
  /**
   * Host.
   *
   * @public
   */
  Host: string | undefined;

  /**
   * Port.
   *
   * @public
   */
  Port: number | undefined;

  /**
   * Database.
   *
   * @public
   */
  Database: string | undefined;
}

/**
 * Parameters for Amazon Aurora PostgreSQL-Compatible Edition.
 *
 * @public
 */
export interface AuroraPostgreSqlParameters {
  /**
   * The Amazon Aurora PostgreSQL-Compatible host to connect to.
   *
   * @public
   */
  Host: string | undefined;

  /**
   * The port that Amazon Aurora PostgreSQL is listening on.
   *
   * @public
   */
  Port: number | undefined;

  /**
   * The Amazon Aurora PostgreSQL database to connect to.
   *
   * @public
   */
  Database: string | undefined;
}

/**
 * The parameters for IoT Analytics.
 *
 * @public
 */
export interface AwsIotAnalyticsParameters {
  /**
   * Dataset name.
   *
   * @public
   */
  DataSetName: string | undefined;
}

/**
 * The parameters that are required to connect to a Google BigQuery data source.
 *
 * @public
 */
export interface BigQueryParameters {
  /**
   * The Google Cloud Platform project ID where your datasource was created.
   *
   * @public
   */
  ProjectId: string | undefined;

  /**
   * The storage location where you create a Google BigQuery data source.
   *
   * @public
   */
  DataSetRegion?: string | undefined;
}

/**
 * The parameters that are required to connect to a Confluence data source
 *
 * @public
 */
export interface ConfluenceParameters {
  /**
   * The URL of the Confluence site to connect to.
   *
   * @public
   */
  ConfluenceUrl: string | undefined;
}

/**
 * The parameters that are required to connect to a custom connection data source.
 *
 * @public
 */
export interface CustomConnectionParameters {
  /**
   * The type of custom connector.
   *
   * @public
   */
  ConnectionType?: string | undefined;
}

/**
 * VPC connection properties.
 *
 * @public
 */
export interface VpcConnectionProperties {
  /**
   * The Amazon Resource Name (ARN) for the VPC connection.
   *
   * @public
   */
  VpcConnectionArn: string | undefined;
}

/**
 * An object that contains information needed to create a data source connection that uses OAuth client credentials. This option is available for data source connections that are made with Snowflake, Starburst, and Databricks.
 *
 * @public
 */
export interface OAuthParameters {
  /**
   * The token endpoint URL of the identity provider.
   *
   * @public
   */
  TokenProviderUrl: string | undefined;

  /**
   * The OAuth scope.
   *
   * @public
   */
  OAuthScope?: string | undefined;

  /**
   * VPC connection properties.
   *
   * @public
   */
  IdentityProviderVpcConnectionProperties?: VpcConnectionProperties | undefined;

  /**
   * The resource uri of the identity provider.
   *
   * @public
   */
  IdentityProviderResourceUri?: string | undefined;

  /**
   * The S3 URI of the identity provider's CA certificates bundle in PEM format. Use this parameter to provide a custom CA certificate bundle for the identity provider when the default trust store does not include the required certificates.
   *
   * @public
   */
  IdentityProviderCACertificatesBundleS3Uri?: string | undefined;
}

/**
 * The parameters that are required to connect to a Databricks data source.
 *
 * @public
 */
export interface DatabricksParameters {
  /**
   * The host name of the Databricks data source.
   *
   * @public
   */
  Host: string | undefined;

  /**
   * The port for the Databricks data source.
   *
   * @public
   */
  Port: number | undefined;

  /**
   * The HTTP path of the Databricks data source.
   *
   * @public
   */
  SqlEndpointPath: string | undefined;

  /**
   * The authentication type that you want to use for your connection. This parameter accepts OAuth and non-OAuth authentication types.
   *
   * @public
   */
  AuthenticationType?: AuthenticationType | undefined;

  /**
   * An object that contains information needed to create a data source connection between an Quick Sight account and Databricks.
   *
   * @public
   */
  OAuthParameters?: OAuthParameters | undefined;
}

/**
 * The required parameters for connecting to an Exasol data source.
 *
 * @public
 */
export interface ExasolParameters {
  /**
   * The hostname or IP address of the Exasol data source.
   *
   * @public
   */
  Host: string | undefined;

  /**
   * The port for the Exasol data source.
   *
   * @public
   */
  Port: number | undefined;
}

/**
 * The connection parameters for a fully managed knowledge base data source. Provide these parameters in the `DataSourceParameters` object when you create or update a data source that uses a fully managed knowledge base.
 *
 * @public
 */
export interface FMKBParameters {
  /**
   * The Amazon Resource Name (ARN) of the Amazon Bedrock knowledge base.
   *
   * @public
   */
  KnowledgeBaseArn: string | undefined;

  /**
   * The IDs of the linked data sources.
   *
   * @public
   */
  LinkedDataSourceIds?: string[] | undefined;
}

/**
 * The connection parameters for a Google Drive data source. Provide these parameters in the `DataSourceParameters` object when you create or update a data source that uses Google Drive.
 *
 * @public
 */
export interface GoogleDriveParameters {
  /**
   * The authentication type for the Google Drive data source. Valid values include:
   *
   * - `SERVICE_ACCOUNT` – Server-to-server authentication using a Google service account key.
   * - `THREE_LEGGED_OAUTH` – Interactive OAuth that requires user consent.
   *
   * @public
   */
  AuthType?: AuthType | undefined;
}

/**
 * The parameters that are required to connect to a Impala data source.
 *
 * @public
 */
export interface ImpalaParameters {
  /**
   * The host name of the Impala data source.
   *
   * @public
   */
  Host: string | undefined;

  /**
   * The port of the Impala data source.
   *
   * @public
   */
  Port: number | undefined;

  /**
   * The database of the Impala data source.
   *
   * @public
   */
  Database?: string | undefined;

  /**
   * The HTTP path of the Impala data source.
   *
   * @public
   */
  SqlEndpointPath: string | undefined;
}

/**
 * The parameters for Jira.
 *
 * @public
 */
export interface JiraParameters {
  /**
   * The base URL of the Jira site.
   *
   * @public
   */
  SiteBaseUrl: string | undefined;
}

/**
 * The parameters for MariaDB.
 *
 * @public
 */
export interface MariaDbParameters {
  /**
   * Host.
   *
   * @public
   */
  Host: string | undefined;

  /**
   * Port.
   *
   * @public
   */
  Port: number | undefined;

  /**
   * Database.
   *
   * @public
   */
  Database: string | undefined;
}

/**
 * The parameters for MySQL.
 *
 * @public
 */
export interface MySqlParameters {
  /**
   * Host.
   *
   * @public
   */
  Host: string | undefined;

  /**
   * Port.
   *
   * @public
   */
  Port: number | undefined;

  /**
   * Database.
   *
   * @public
   */
  Database: string | undefined;
}

/**
 * The connection parameters for an OneDrive data source. Provide these parameters in the `DataSourceParameters` object when you create or update a data source that uses OneDrive.
 *
 * @public
 */
export interface OneDriveParameters {
  /**
   * The tenant ID for the OneDrive data source.
   *
   * @public
   */
  TenantId?: string | undefined;

  /**
   * The client ID for the OneDrive data source.
   *
   * @public
   */
  ClientId?: string | undefined;

  /**
   * The authentication type for the OneDrive data source. Valid values include:
   *
   * - `TWO_LEGGED_OAUTH` – Server-to-server authentication using client credentials that do not require user interaction.
   * - `THREE_LEGGED_OAUTH` – Interactive OAuth that requires user consent.
   *
   * @public
   */
  AuthType?: AuthType | undefined;
}

/**
 * The parameters for Oracle.
 *
 * @public
 */
export interface OracleParameters {
  /**
   * An Oracle host.
   *
   * @public
   */
  Host: string | undefined;

  /**
   * The port.
   *
   * @public
   */
  Port: number | undefined;

  /**
   * The database.
   *
   * @public
   */
  Database: string | undefined;

  /**
   * A Boolean value that indicates whether the `Database` uses a service name or an SID. If this value is left blank, the default value is `SID`. If this value is set to `false`, the value is `SID`.
   *
   * @public
   */
  UseServiceName?: boolean | undefined;
}

/**
 * The parameters for PostgreSQL.
 *
 * @public
 */
export interface PostgreSqlParameters {
  /**
   * Host.
   *
   * @public
   */
  Host: string | undefined;

  /**
   * Port.
   *
   * @public
   */
  Port: number | undefined;

  /**
   * Database.
   *
   * @public
   */
  Database: string | undefined;
}

/**
 * The parameters for Presto.
 *
 * @public
 */
export interface PrestoParameters {
  /**
   * Host.
   *
   * @public
   */
  Host: string | undefined;

  /**
   * Port.
   *
   * @public
   */
  Port: number | undefined;

  /**
   * Catalog.
   *
   * @public
   */
  Catalog: string | undefined;
}

/**
 * The parameters that are required to connect to an Amazon Q Business data source.
 *
 * @public
 */
export interface QBusinessParameters {
  /**
   * The Amazon Resource Name (ARN) of the Amazon Q Business application.
   *
   * @public
   */
  ApplicationArn: string | undefined;
}

/**
 * The parameters for Amazon RDS.
 *
 * @public
 */
export interface RdsParameters {
  /**
   * Instance ID.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * Database.
   *
   * @public
   */
  Database: string | undefined;
}

/**
 * A structure that grants Quick Sight access to your cluster and make a call to the `redshift:GetClusterCredentials` API. For more information on the `redshift:GetClusterCredentials` API, see [`GetClusterCredentials`](https://docs.aws.amazon.com/redshift/latest/APIReference/API_GetClusterCredentials.html).
 *
 * @public
 */
export interface RedshiftIAMParameters {
  /**
   * Use the `RoleArn` structure to allow Quick Sight to call `redshift:GetClusterCredentials` on your cluster. The calling principal must have `iam:PassRole` access to pass the role to Quick Sight. The role's trust policy must allow the Quick Sight service principal to assume the role.
   *
   * @public
   */
  RoleArn: string | undefined;

  /**
   * The user whose permissions and group memberships will be used by Quick Sight to access the cluster. If this user already exists in your database, Amazon Quick Sight is granted the same permissions that the user has. If the user doesn't exist, set the value of `AutoCreateDatabaseUser` to `True` to create a new user with PUBLIC permissions.
   *
   * @public
   */
  DatabaseUser?: string | undefined;

  /**
   * A list of groups whose permissions will be granted to Quick Sight to access the cluster. These permissions are combined with the permissions granted to Quick Sight by the `DatabaseUser`. If you choose to include this parameter, the `RoleArn` must grant access to `redshift:JoinGroup`.
   *
   * @public
   */
  DatabaseGroups?: string[] | undefined;

  /**
   * Automatically creates a database user. If your database doesn't have a `DatabaseUser`, set this parameter to `True`. If there is no `DatabaseUser`, Quick Sight can't connect to your cluster. The `RoleArn` that you use for this operation must grant access to `redshift:CreateClusterUser` to successfully create the user.
   *
   * @public
   */
  AutoCreateDatabaseUser?: boolean | undefined;
}

/**
 * The parameters for Amazon Redshift. The `ClusterId` field can be blank if `Host` and `Port` are both set. The `Host` and `Port` fields can be blank if the `ClusterId` field is set.
 *
 * @public
 */
export interface RedshiftParameters {
  /**
   * Host. This field can be blank if `ClusterId` is provided.
   *
   * @public
   */
  Host?: string | undefined;

  /**
   * Port. This field can be blank if the `ClusterId` is provided.
   *
   * @public
   */
  Port?: number | undefined;

  /**
   * Database.
   *
   * @public
   */
  Database: string | undefined;

  /**
   * Cluster ID. This field can be blank if the `Host` and `Port` are provided.
   *
   * @public
   */
  ClusterId?: string | undefined;

  /**
   * An optional parameter that uses IAM authentication to grant Quick Sight access to your cluster. This parameter can be used instead of [DataSourceCredentials](https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DataSourceCredentials.html).
   *
   * @public
   */
  IAMParameters?: RedshiftIAMParameters | undefined;

  /**
   * An optional parameter that configures IAM Identity Center authentication to grant Quick Sight access to your cluster.
   *
   * This parameter can only be specified if your Quick Sight account is configured with IAM Identity Center.
   *
   * @public
   */
  IdentityCenterConfiguration?: IdentityCenterConfiguration | undefined;
}

/**
 * The parameters that are required to connect to an S3 knowledge base data source.
 *
 * **Prerequisites: Amazon S3 bucket access**
 *
 * Before you call `CreateKnowledgeBase` for an Amazon S3 knowledge base, an administrator must grant Amazon QuickSight access to the source S3 bucket. If access has not been granted for the bucket, knowledge base creation fails.
 *
 * To grant access, an administrator adds the bucket in the Amazon QuickSight admin console, under Permissions, Amazon Web Services resources, Amazon S3, Select S3 buckets. This authorizes the Amazon QuickSight service role to read the bucket. The bucket can be in the same Amazon Web Services account or, when the bucket owner has authorized your account, in a different account.
 *
 * The service role requires at least the following permissions on the bucket:
 *
 * - `s3:GetObject`
 * - `s3:ListBucket`
 * - `s3:GetBucketLocation`
 * - `s3:GetObjectVersion`
 * - `s3:ListBucketVersions`
 *
 * For the full procedure, including cross-account buckets and KMS-encrypted buckets, see the Amazon S3 knowledge base administrator setup guide.
 *
 * > **Note:** To grant access for a specific S3 knowledge base data source without granting account-wide S3 access, provide a custom IAM role on the data source by using `RoleArn`.
 *
 * @public
 */
export interface S3KnowledgeBaseParameters {
  /**
   * Use the `RoleArn` structure to override an account-wide role for a specific S3 Knowledge Base data source. For example, say an account administrator has turned off all S3 access with an account-wide role. The administrator can then use `RoleArn` to bypass the account-wide role and allow S3 access for the single S3 Knowledge Base data source that is specified in the structure, even if the account-wide role forbidding S3 access is still active.
   *
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * The URL of the S3 bucket that contains the knowledge base data.
   *
   * @public
   */
  BucketUrl: string | undefined;

  /**
   * The Amazon S3 location (prefix) of per-document metadata files. Each metadata file describes a single source document and its indexable attributes, such as title, category, and version. This is not the global ACL configuration file. To apply a single global ACL file to the entire knowledge base, use the access control configuration instead.
   *
   * @public
   */
  MetadataFilesLocation?: string | undefined;
}

/**
 * Amazon S3 manifest file location.
 *
 * @public
 */
export interface ManifestFileLocation {
  /**
   * Amazon S3 bucket.
   *
   * @public
   */
  Bucket: string | undefined;

  /**
   * Amazon S3 key that identifies an object.
   *
   * @public
   */
  Key: string | undefined;
}

/**
 * The parameters for S3.
 *
 * @public
 */
export interface S3Parameters {
  /**
   * Location of the Amazon S3 manifest file. This is NULL if the manifest file was uploaded into Quick Sight.
   *
   * @public
   */
  ManifestFileLocation: ManifestFileLocation | undefined;

  /**
   * Use the `RoleArn` structure to override an account-wide role for a specific S3 data source. For example, say an account administrator has turned off all S3 access with an account-wide role. The administrator can then use `RoleArn` to bypass the account-wide role and allow S3 access for the single S3 data source that is specified in the structure, even if the account-wide role forbidding S3 access is still active.
   *
   * @public
   */
  RoleArn?: string | undefined;
}

/**
 * The parameters for S3 Tables.
 *
 * @public
 */
export interface S3TablesParameters {
  /**
   * The Amazon Resource Name (ARN) of the S3 Tables bucket.
   *
   * @public
   */
  TableBucketArn?: string | undefined;
}

/**
 * The parameters for ServiceNow.
 *
 * @public
 */
export interface ServiceNowParameters {
  /**
   * URL of the base site.
   *
   * @public
   */
  SiteBaseUrl: string | undefined;
}

/**
 * The connection parameters for a SharePoint data source. Provide these parameters in the `DataSourceParameters` object when you create or update a data source that uses SharePoint.
 *
 * @public
 */
export interface SharePointParameters {
  /**
   * The SharePoint domain for the data source.
   *
   * @public
   */
  SharePointDomain: string | undefined;

  /**
   * The tenant ID for the SharePoint data source.
   *
   * @public
   */
  TenantId?: string | undefined;

  /**
   * The client ID for the SharePoint data source.
   *
   * @public
   */
  ClientId?: string | undefined;

  /**
   * The authentication type for the SharePoint data source. Valid values include:
   *
   * - `TWO_LEGGED_OAUTH` – Server-to-server authentication using client credentials that do not require user interaction.
   * - `THREE_LEGGED_OAUTH` – Interactive OAuth that requires user consent.
   *
   * @public
   */
  AuthType?: AuthType | undefined;
}

/**
 * The parameters for Snowflake.
 *
 * @public
 */
export interface SnowflakeParameters {
  /**
   * Host.
   *
   * @public
   */
  Host: string | undefined;

  /**
   * Database.
   *
   * @public
   */
  Database: string | undefined;

  /**
   * Warehouse.
   *
   * @public
   */
  Warehouse: string | undefined;

  /**
   * The authentication type that you want to use for your connection. This parameter accepts OAuth and non-OAuth authentication types.
   *
   * @public
   */
  AuthenticationType?: AuthenticationType | undefined;

  /**
   * The database access control role.
   *
   * @public
   */
  DatabaseAccessControlRole?: string | undefined;

  /**
   * An object that contains information needed to create a data source connection between an Quick Sight account and Snowflake.
   *
   * @public
   */
  OAuthParameters?: OAuthParameters | undefined;
}

/**
 * The parameters for Spark.
 *
 * @public
 */
export interface SparkParameters {
  /**
   * Host.
   *
   * @public
   */
  Host: string | undefined;

  /**
   * Port.
   *
   * @public
   */
  Port: number | undefined;
}

/**
 * The parameters for SQL Server.
 *
 * @public
 */
export interface SqlServerParameters {
  /**
   * Host.
   *
   * @public
   */
  Host: string | undefined;

  /**
   * Port.
   *
   * @public
   */
  Port: number | undefined;

  /**
   * Database.
   *
   * @public
   */
  Database: string | undefined;
}

/**
 * The parameters that are required to connect to a Starburst data source.
 *
 * @public
 */
export interface StarburstParameters {
  /**
   * The host name of the Starburst data source.
   *
   * @public
   */
  Host: string | undefined;

  /**
   * The port for the Starburst data source.
   *
   * @public
   */
  Port: number | undefined;

  /**
   * The catalog name for the Starburst data source.
   *
   * @public
   */
  Catalog: string | undefined;

  /**
   * The product type for the Starburst data source.
   *
   * @public
   */
  ProductType?: StarburstProductType | undefined;

  /**
   * The database access control role.
   *
   * @public
   */
  DatabaseAccessControlRole?: string | undefined;

  /**
   * The authentication type that you want to use for your connection. This parameter accepts OAuth and non-OAuth authentication types.
   *
   * @public
   */
  AuthenticationType?: AuthenticationType | undefined;

  /**
   * An object that contains information needed to create a data source connection between an Quick Sight account and Starburst.
   *
   * @public
   */
  OAuthParameters?: OAuthParameters | undefined;
}

/**
 * The parameters for Teradata.
 *
 * @public
 */
export interface TeradataParameters {
  /**
   * Host.
   *
   * @public
   */
  Host: string | undefined;

  /**
   * Port.
   *
   * @public
   */
  Port: number | undefined;

  /**
   * Database.
   *
   * @public
   */
  Database: string | undefined;
}

/**
 * The parameters that are required to connect to a Trino data source.
 *
 * @public
 */
export interface TrinoParameters {
  /**
   * The host name of the Trino data source.
   *
   * @public
   */
  Host: string | undefined;

  /**
   * The port for the Trino data source.
   *
   * @public
   */
  Port: number | undefined;

  /**
   * The catalog name for the Trino data source.
   *
   * @public
   */
  Catalog: string | undefined;
}

/**
 * The parameters for Twitter.
 *
 * @public
 */
export interface TwitterParameters {
  /**
   * Twitter query string.
   *
   * @public
   */
  Query: string | undefined;

  /**
   * Maximum number of rows to query Twitter.
   *
   * @public
   */
  MaxRows: number | undefined;
}

/**
 * The parameters for a web crawler data source.
 *
 * @public
 */
export interface WebCrawlerParameters {
  /**
   * The authentication type for the web crawler. The type can be one of the following:
   *
   * - `NO_AUTH`: No authentication required.
   * - `BASIC_AUTH`: Basic authentication using username and password.
   * - `SAML`: SAML-based authentication.
   * - `FORM`: Form-based authentication.
   *
   * @public
   */
  WebCrawlerAuthType: WebCrawlerAuthType | undefined;

  /**
   * The XPath expression for locating the username field on the login page.
   *
   * @public
   */
  UsernameFieldXpath?: string | undefined;

  /**
   * The XPath expression for locating the password field on the login page.
   *
   * @public
   */
  PasswordFieldXpath?: string | undefined;

  /**
   * The XPath expression for locating the username submit button on the login page.
   *
   * @public
   */
  UsernameButtonXpath?: string | undefined;

  /**
   * The XPath expression for locating the password submit button on the login page.
   *
   * @public
   */
  PasswordButtonXpath?: string | undefined;

  /**
   * The URL of the login page for the web crawler to authenticate.
   *
   * @public
   */
  LoginPageUrl?: string | undefined;

  /**
   * The hostname of the web proxy server for the web crawler.
   *
   * @public
   */
  WebProxyHostName?: string | undefined;

  /**
   * The port number of the web proxy server for the web crawler.
   *
   * @public
   */
  WebProxyPortNumber?: number | undefined;
}

/**
 * The parameters that Quick Sight uses to connect to your underlying data source. This is a variant type structure. For this structure to be valid, only one of the attributes can be non-null.
 *
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
  | DataSourceParameters.ConfluenceParametersMember
  | DataSourceParameters.CustomConnectionParametersMember
  | DataSourceParameters.DatabricksParametersMember
  | DataSourceParameters.ExasolParametersMember
  | DataSourceParameters.FMKBParametersMember
  | DataSourceParameters.GoogleDriveParametersMember
  | DataSourceParameters.ImpalaParametersMember
  | DataSourceParameters.JiraParametersMember
  | DataSourceParameters.MariaDbParametersMember
  | DataSourceParameters.MySqlParametersMember
  | DataSourceParameters.OneDriveParametersMember
  | DataSourceParameters.OracleParametersMember
  | DataSourceParameters.PostgreSqlParametersMember
  | DataSourceParameters.PrestoParametersMember
  | DataSourceParameters.QBusinessParametersMember
  | DataSourceParameters.RdsParametersMember
  | DataSourceParameters.RedshiftParametersMember
  | DataSourceParameters.S3KnowledgeBaseParametersMember
  | DataSourceParameters.S3ParametersMember
  | DataSourceParameters.S3TablesParametersMember
  | DataSourceParameters.ServiceNowParametersMember
  | DataSourceParameters.SharePointParametersMember
  | DataSourceParameters.SnowflakeParametersMember
  | DataSourceParameters.SparkParametersMember
  | DataSourceParameters.SqlServerParametersMember
  | DataSourceParameters.StarburstParametersMember
  | DataSourceParameters.TeradataParametersMember
  | DataSourceParameters.TrinoParametersMember
  | DataSourceParameters.TwitterParametersMember
  | DataSourceParameters.WebCrawlerParametersMember
  | DataSourceParameters.$UnknownMember;

/**
 * @public
 */
export namespace DataSourceParameters {
  /**
   * The parameters for OpenSearch.
   *
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
    S3TablesParameters?: never;
    S3KnowledgeBaseParameters?: never;
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
    ImpalaParameters?: never;
    CustomConnectionParameters?: never;
    WebCrawlerParameters?: never;
    ConfluenceParameters?: never;
    QBusinessParameters?: never;
    SharePointParameters?: never;
    GoogleDriveParameters?: never;
    OneDriveParameters?: never;
    FMKBParameters?: never;
    $unknown?: never;
  }

  /**
   * The parameters for Amazon Athena.
   *
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
    S3TablesParameters?: never;
    S3KnowledgeBaseParameters?: never;
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
    ImpalaParameters?: never;
    CustomConnectionParameters?: never;
    WebCrawlerParameters?: never;
    ConfluenceParameters?: never;
    QBusinessParameters?: never;
    SharePointParameters?: never;
    GoogleDriveParameters?: never;
    OneDriveParameters?: never;
    FMKBParameters?: never;
    $unknown?: never;
  }

  /**
   * The parameters for Amazon Aurora MySQL.
   *
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
    S3TablesParameters?: never;
    S3KnowledgeBaseParameters?: never;
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
    ImpalaParameters?: never;
    CustomConnectionParameters?: never;
    WebCrawlerParameters?: never;
    ConfluenceParameters?: never;
    QBusinessParameters?: never;
    SharePointParameters?: never;
    GoogleDriveParameters?: never;
    OneDriveParameters?: never;
    FMKBParameters?: never;
    $unknown?: never;
  }

  /**
   * The parameters for Amazon Aurora.
   *
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
    S3TablesParameters?: never;
    S3KnowledgeBaseParameters?: never;
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
    ImpalaParameters?: never;
    CustomConnectionParameters?: never;
    WebCrawlerParameters?: never;
    ConfluenceParameters?: never;
    QBusinessParameters?: never;
    SharePointParameters?: never;
    GoogleDriveParameters?: never;
    OneDriveParameters?: never;
    FMKBParameters?: never;
    $unknown?: never;
  }

  /**
   * The parameters for IoT Analytics.
   *
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
    S3TablesParameters?: never;
    S3KnowledgeBaseParameters?: never;
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
    ImpalaParameters?: never;
    CustomConnectionParameters?: never;
    WebCrawlerParameters?: never;
    ConfluenceParameters?: never;
    QBusinessParameters?: never;
    SharePointParameters?: never;
    GoogleDriveParameters?: never;
    OneDriveParameters?: never;
    FMKBParameters?: never;
    $unknown?: never;
  }

  /**
   * The parameters for Jira.
   *
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
    S3TablesParameters?: never;
    S3KnowledgeBaseParameters?: never;
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
    ImpalaParameters?: never;
    CustomConnectionParameters?: never;
    WebCrawlerParameters?: never;
    ConfluenceParameters?: never;
    QBusinessParameters?: never;
    SharePointParameters?: never;
    GoogleDriveParameters?: never;
    OneDriveParameters?: never;
    FMKBParameters?: never;
    $unknown?: never;
  }

  /**
   * The parameters for MariaDB.
   *
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
    S3TablesParameters?: never;
    S3KnowledgeBaseParameters?: never;
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
    ImpalaParameters?: never;
    CustomConnectionParameters?: never;
    WebCrawlerParameters?: never;
    ConfluenceParameters?: never;
    QBusinessParameters?: never;
    SharePointParameters?: never;
    GoogleDriveParameters?: never;
    OneDriveParameters?: never;
    FMKBParameters?: never;
    $unknown?: never;
  }

  /**
   * The parameters for MySQL.
   *
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
    S3TablesParameters?: never;
    S3KnowledgeBaseParameters?: never;
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
    ImpalaParameters?: never;
    CustomConnectionParameters?: never;
    WebCrawlerParameters?: never;
    ConfluenceParameters?: never;
    QBusinessParameters?: never;
    SharePointParameters?: never;
    GoogleDriveParameters?: never;
    OneDriveParameters?: never;
    FMKBParameters?: never;
    $unknown?: never;
  }

  /**
   * The parameters for Oracle.
   *
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
    S3TablesParameters?: never;
    S3KnowledgeBaseParameters?: never;
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
    ImpalaParameters?: never;
    CustomConnectionParameters?: never;
    WebCrawlerParameters?: never;
    ConfluenceParameters?: never;
    QBusinessParameters?: never;
    SharePointParameters?: never;
    GoogleDriveParameters?: never;
    OneDriveParameters?: never;
    FMKBParameters?: never;
    $unknown?: never;
  }

  /**
   * The parameters for PostgreSQL.
   *
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
    S3TablesParameters?: never;
    S3KnowledgeBaseParameters?: never;
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
    ImpalaParameters?: never;
    CustomConnectionParameters?: never;
    WebCrawlerParameters?: never;
    ConfluenceParameters?: never;
    QBusinessParameters?: never;
    SharePointParameters?: never;
    GoogleDriveParameters?: never;
    OneDriveParameters?: never;
    FMKBParameters?: never;
    $unknown?: never;
  }

  /**
   * The parameters for Presto.
   *
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
    S3TablesParameters?: never;
    S3KnowledgeBaseParameters?: never;
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
    ImpalaParameters?: never;
    CustomConnectionParameters?: never;
    WebCrawlerParameters?: never;
    ConfluenceParameters?: never;
    QBusinessParameters?: never;
    SharePointParameters?: never;
    GoogleDriveParameters?: never;
    OneDriveParameters?: never;
    FMKBParameters?: never;
    $unknown?: never;
  }

  /**
   * The parameters for Amazon RDS.
   *
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
    S3TablesParameters?: never;
    S3KnowledgeBaseParameters?: never;
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
    ImpalaParameters?: never;
    CustomConnectionParameters?: never;
    WebCrawlerParameters?: never;
    ConfluenceParameters?: never;
    QBusinessParameters?: never;
    SharePointParameters?: never;
    GoogleDriveParameters?: never;
    OneDriveParameters?: never;
    FMKBParameters?: never;
    $unknown?: never;
  }

  /**
   * The parameters for Amazon Redshift.
   *
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
    S3TablesParameters?: never;
    S3KnowledgeBaseParameters?: never;
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
    ImpalaParameters?: never;
    CustomConnectionParameters?: never;
    WebCrawlerParameters?: never;
    ConfluenceParameters?: never;
    QBusinessParameters?: never;
    SharePointParameters?: never;
    GoogleDriveParameters?: never;
    OneDriveParameters?: never;
    FMKBParameters?: never;
    $unknown?: never;
  }

  /**
   * The parameters for S3.
   *
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
    S3TablesParameters?: never;
    S3KnowledgeBaseParameters?: never;
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
    ImpalaParameters?: never;
    CustomConnectionParameters?: never;
    WebCrawlerParameters?: never;
    ConfluenceParameters?: never;
    QBusinessParameters?: never;
    SharePointParameters?: never;
    GoogleDriveParameters?: never;
    OneDriveParameters?: never;
    FMKBParameters?: never;
    $unknown?: never;
  }

  /**
   * The parameters for S3 Tables.
   *
   * @public
   */
  export interface S3TablesParametersMember {
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
    S3TablesParameters: S3TablesParameters;
    S3KnowledgeBaseParameters?: never;
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
    ImpalaParameters?: never;
    CustomConnectionParameters?: never;
    WebCrawlerParameters?: never;
    ConfluenceParameters?: never;
    QBusinessParameters?: never;
    SharePointParameters?: never;
    GoogleDriveParameters?: never;
    OneDriveParameters?: never;
    FMKBParameters?: never;
    $unknown?: never;
  }

  /**
   * The parameters for S3 Knowledge Base.
   *
   * @public
   */
  export interface S3KnowledgeBaseParametersMember {
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
    S3TablesParameters?: never;
    S3KnowledgeBaseParameters: S3KnowledgeBaseParameters;
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
    ImpalaParameters?: never;
    CustomConnectionParameters?: never;
    WebCrawlerParameters?: never;
    ConfluenceParameters?: never;
    QBusinessParameters?: never;
    SharePointParameters?: never;
    GoogleDriveParameters?: never;
    OneDriveParameters?: never;
    FMKBParameters?: never;
    $unknown?: never;
  }

  /**
   * The parameters for ServiceNow.
   *
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
    S3TablesParameters?: never;
    S3KnowledgeBaseParameters?: never;
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
    ImpalaParameters?: never;
    CustomConnectionParameters?: never;
    WebCrawlerParameters?: never;
    ConfluenceParameters?: never;
    QBusinessParameters?: never;
    SharePointParameters?: never;
    GoogleDriveParameters?: never;
    OneDriveParameters?: never;
    FMKBParameters?: never;
    $unknown?: never;
  }

  /**
   * The parameters for Snowflake.
   *
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
    S3TablesParameters?: never;
    S3KnowledgeBaseParameters?: never;
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
    ImpalaParameters?: never;
    CustomConnectionParameters?: never;
    WebCrawlerParameters?: never;
    ConfluenceParameters?: never;
    QBusinessParameters?: never;
    SharePointParameters?: never;
    GoogleDriveParameters?: never;
    OneDriveParameters?: never;
    FMKBParameters?: never;
    $unknown?: never;
  }

  /**
   * The parameters for Spark.
   *
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
    S3TablesParameters?: never;
    S3KnowledgeBaseParameters?: never;
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
    ImpalaParameters?: never;
    CustomConnectionParameters?: never;
    WebCrawlerParameters?: never;
    ConfluenceParameters?: never;
    QBusinessParameters?: never;
    SharePointParameters?: never;
    GoogleDriveParameters?: never;
    OneDriveParameters?: never;
    FMKBParameters?: never;
    $unknown?: never;
  }

  /**
   * The parameters for SQL Server.
   *
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
    S3TablesParameters?: never;
    S3KnowledgeBaseParameters?: never;
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
    ImpalaParameters?: never;
    CustomConnectionParameters?: never;
    WebCrawlerParameters?: never;
    ConfluenceParameters?: never;
    QBusinessParameters?: never;
    SharePointParameters?: never;
    GoogleDriveParameters?: never;
    OneDriveParameters?: never;
    FMKBParameters?: never;
    $unknown?: never;
  }

  /**
   * The parameters for Teradata.
   *
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
    S3TablesParameters?: never;
    S3KnowledgeBaseParameters?: never;
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
    ImpalaParameters?: never;
    CustomConnectionParameters?: never;
    WebCrawlerParameters?: never;
    ConfluenceParameters?: never;
    QBusinessParameters?: never;
    SharePointParameters?: never;
    GoogleDriveParameters?: never;
    OneDriveParameters?: never;
    FMKBParameters?: never;
    $unknown?: never;
  }

  /**
   * The parameters for Twitter.
   *
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
    S3TablesParameters?: never;
    S3KnowledgeBaseParameters?: never;
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
    ImpalaParameters?: never;
    CustomConnectionParameters?: never;
    WebCrawlerParameters?: never;
    ConfluenceParameters?: never;
    QBusinessParameters?: never;
    SharePointParameters?: never;
    GoogleDriveParameters?: never;
    OneDriveParameters?: never;
    FMKBParameters?: never;
    $unknown?: never;
  }

  /**
   * The parameters for OpenSearch.
   *
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
    S3TablesParameters?: never;
    S3KnowledgeBaseParameters?: never;
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
    ImpalaParameters?: never;
    CustomConnectionParameters?: never;
    WebCrawlerParameters?: never;
    ConfluenceParameters?: never;
    QBusinessParameters?: never;
    SharePointParameters?: never;
    GoogleDriveParameters?: never;
    OneDriveParameters?: never;
    FMKBParameters?: never;
    $unknown?: never;
  }

  /**
   * The parameters for Exasol.
   *
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
    S3TablesParameters?: never;
    S3KnowledgeBaseParameters?: never;
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
    ImpalaParameters?: never;
    CustomConnectionParameters?: never;
    WebCrawlerParameters?: never;
    ConfluenceParameters?: never;
    QBusinessParameters?: never;
    SharePointParameters?: never;
    GoogleDriveParameters?: never;
    OneDriveParameters?: never;
    FMKBParameters?: never;
    $unknown?: never;
  }

  /**
   * The parameters that are required to connect to a Databricks data source.
   *
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
    S3TablesParameters?: never;
    S3KnowledgeBaseParameters?: never;
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
    ImpalaParameters?: never;
    CustomConnectionParameters?: never;
    WebCrawlerParameters?: never;
    ConfluenceParameters?: never;
    QBusinessParameters?: never;
    SharePointParameters?: never;
    GoogleDriveParameters?: never;
    OneDriveParameters?: never;
    FMKBParameters?: never;
    $unknown?: never;
  }

  /**
   * The parameters that are required to connect to a Starburst data source.
   *
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
    S3TablesParameters?: never;
    S3KnowledgeBaseParameters?: never;
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
    ImpalaParameters?: never;
    CustomConnectionParameters?: never;
    WebCrawlerParameters?: never;
    ConfluenceParameters?: never;
    QBusinessParameters?: never;
    SharePointParameters?: never;
    GoogleDriveParameters?: never;
    OneDriveParameters?: never;
    FMKBParameters?: never;
    $unknown?: never;
  }

  /**
   * The parameters that are required to connect to a Trino data source.
   *
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
    S3TablesParameters?: never;
    S3KnowledgeBaseParameters?: never;
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
    ImpalaParameters?: never;
    CustomConnectionParameters?: never;
    WebCrawlerParameters?: never;
    ConfluenceParameters?: never;
    QBusinessParameters?: never;
    SharePointParameters?: never;
    GoogleDriveParameters?: never;
    OneDriveParameters?: never;
    FMKBParameters?: never;
    $unknown?: never;
  }

  /**
   * The parameters that are required to connect to a Google BigQuery data source.
   *
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
    S3TablesParameters?: never;
    S3KnowledgeBaseParameters?: never;
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
    ImpalaParameters?: never;
    CustomConnectionParameters?: never;
    WebCrawlerParameters?: never;
    ConfluenceParameters?: never;
    QBusinessParameters?: never;
    SharePointParameters?: never;
    GoogleDriveParameters?: never;
    OneDriveParameters?: never;
    FMKBParameters?: never;
    $unknown?: never;
  }

  /**
   * The parameters for Impala.
   *
   * @public
   */
  export interface ImpalaParametersMember {
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
    S3TablesParameters?: never;
    S3KnowledgeBaseParameters?: never;
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
    ImpalaParameters: ImpalaParameters;
    CustomConnectionParameters?: never;
    WebCrawlerParameters?: never;
    ConfluenceParameters?: never;
    QBusinessParameters?: never;
    SharePointParameters?: never;
    GoogleDriveParameters?: never;
    OneDriveParameters?: never;
    FMKBParameters?: never;
    $unknown?: never;
  }

  /**
   * The parameters for custom connectors.
   *
   * @public
   */
  export interface CustomConnectionParametersMember {
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
    S3TablesParameters?: never;
    S3KnowledgeBaseParameters?: never;
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
    ImpalaParameters?: never;
    CustomConnectionParameters: CustomConnectionParameters;
    WebCrawlerParameters?: never;
    ConfluenceParameters?: never;
    QBusinessParameters?: never;
    SharePointParameters?: never;
    GoogleDriveParameters?: never;
    OneDriveParameters?: never;
    FMKBParameters?: never;
    $unknown?: never;
  }

  /**
   * The parameters for Web Crawler.
   *
   * @public
   */
  export interface WebCrawlerParametersMember {
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
    S3TablesParameters?: never;
    S3KnowledgeBaseParameters?: never;
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
    ImpalaParameters?: never;
    CustomConnectionParameters?: never;
    WebCrawlerParameters: WebCrawlerParameters;
    ConfluenceParameters?: never;
    QBusinessParameters?: never;
    SharePointParameters?: never;
    GoogleDriveParameters?: never;
    OneDriveParameters?: never;
    FMKBParameters?: never;
    $unknown?: never;
  }

  /**
   * The parameters for Confluence.
   *
   * @public
   */
  export interface ConfluenceParametersMember {
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
    S3TablesParameters?: never;
    S3KnowledgeBaseParameters?: never;
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
    ImpalaParameters?: never;
    CustomConnectionParameters?: never;
    WebCrawlerParameters?: never;
    ConfluenceParameters: ConfluenceParameters;
    QBusinessParameters?: never;
    SharePointParameters?: never;
    GoogleDriveParameters?: never;
    OneDriveParameters?: never;
    FMKBParameters?: never;
    $unknown?: never;
  }

  /**
   * The parameters for Amazon Q Business.
   *
   * @public
   */
  export interface QBusinessParametersMember {
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
    S3TablesParameters?: never;
    S3KnowledgeBaseParameters?: never;
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
    ImpalaParameters?: never;
    CustomConnectionParameters?: never;
    WebCrawlerParameters?: never;
    ConfluenceParameters?: never;
    QBusinessParameters: QBusinessParameters;
    SharePointParameters?: never;
    GoogleDriveParameters?: never;
    OneDriveParameters?: never;
    FMKBParameters?: never;
    $unknown?: never;
  }

  /**
   * The parameters for a SharePoint data source.
   *
   * @public
   */
  export interface SharePointParametersMember {
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
    S3TablesParameters?: never;
    S3KnowledgeBaseParameters?: never;
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
    ImpalaParameters?: never;
    CustomConnectionParameters?: never;
    WebCrawlerParameters?: never;
    ConfluenceParameters?: never;
    QBusinessParameters?: never;
    SharePointParameters: SharePointParameters;
    GoogleDriveParameters?: never;
    OneDriveParameters?: never;
    FMKBParameters?: never;
    $unknown?: never;
  }

  /**
   * The parameters for a Google Drive data source.
   *
   * @public
   */
  export interface GoogleDriveParametersMember {
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
    S3TablesParameters?: never;
    S3KnowledgeBaseParameters?: never;
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
    ImpalaParameters?: never;
    CustomConnectionParameters?: never;
    WebCrawlerParameters?: never;
    ConfluenceParameters?: never;
    QBusinessParameters?: never;
    SharePointParameters?: never;
    GoogleDriveParameters: GoogleDriveParameters;
    OneDriveParameters?: never;
    FMKBParameters?: never;
    $unknown?: never;
  }

  /**
   * The parameters for an OneDrive data source.
   *
   * @public
   */
  export interface OneDriveParametersMember {
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
    S3TablesParameters?: never;
    S3KnowledgeBaseParameters?: never;
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
    ImpalaParameters?: never;
    CustomConnectionParameters?: never;
    WebCrawlerParameters?: never;
    ConfluenceParameters?: never;
    QBusinessParameters?: never;
    SharePointParameters?: never;
    GoogleDriveParameters?: never;
    OneDriveParameters: OneDriveParameters;
    FMKBParameters?: never;
    $unknown?: never;
  }

  /**
   * The parameters for a fully managed knowledge base data source.
   *
   * @public
   */
  export interface FMKBParametersMember {
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
    S3TablesParameters?: never;
    S3KnowledgeBaseParameters?: never;
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
    ImpalaParameters?: never;
    CustomConnectionParameters?: never;
    WebCrawlerParameters?: never;
    ConfluenceParameters?: never;
    QBusinessParameters?: never;
    SharePointParameters?: never;
    GoogleDriveParameters?: never;
    OneDriveParameters?: never;
    FMKBParameters: FMKBParameters;
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
    S3TablesParameters?: never;
    S3KnowledgeBaseParameters?: never;
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
    ImpalaParameters?: never;
    CustomConnectionParameters?: never;
    WebCrawlerParameters?: never;
    ConfluenceParameters?: never;
    QBusinessParameters?: never;
    SharePointParameters?: never;
    GoogleDriveParameters?: never;
    OneDriveParameters?: never;
    FMKBParameters?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
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
    S3TablesParameters: (value: S3TablesParameters) => T;
    S3KnowledgeBaseParameters: (value: S3KnowledgeBaseParameters) => T;
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
    ImpalaParameters: (value: ImpalaParameters) => T;
    CustomConnectionParameters: (value: CustomConnectionParameters) => T;
    WebCrawlerParameters: (value: WebCrawlerParameters) => T;
    ConfluenceParameters: (value: ConfluenceParameters) => T;
    QBusinessParameters: (value: QBusinessParameters) => T;
    SharePointParameters: (value: SharePointParameters) => T;
    GoogleDriveParameters: (value: GoogleDriveParameters) => T;
    OneDriveParameters: (value: OneDriveParameters) => T;
    FMKBParameters: (value: FMKBParameters) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Secure Socket Layer (SSL) properties that apply when Quick Sight connects to your underlying data source.
 *
 * @public
 */
export interface SslProperties {
  /**
   * A Boolean option to control whether SSL should be disabled.
   *
   * @public
   */
  DisableSsl?: boolean | undefined;
}

/**
 * The override parameters for a single data source that is being imported.
 *
 * @public
 */
export interface AssetBundleImportJobDataSourceOverrideParameters {
  /**
   * The ID of the data source to apply overrides to.
   *
   * @public
   */
  DataSourceId: string | undefined;

  /**
   * A new name for the data source.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The parameters that Quick Sight uses to connect to your underlying data source. This is a variant type structure. For this structure to be valid, only one of the attributes can be non-null.
   *
   * @public
   */
  DataSourceParameters?: DataSourceParameters | undefined;

  /**
   * VPC connection properties.
   *
   * @public
   */
  VpcConnectionProperties?: VpcConnectionProperties | undefined;

  /**
   * Secure Socket Layer (SSL) properties that apply when Quick Sight connects to your underlying data source.
   *
   * @public
   */
  SslProperties?: SslProperties | undefined;

  /**
   * An optional structure that provides the credentials to be used to create the imported data source.
   *
   * @public
   */
  Credentials?: AssetBundleImportJobDataSourceCredentials | undefined;
}

/**
 * An object that contains a list of permissions to be applied to a list of data source IDs.
 *
 * @public
 */
export interface AssetBundleImportJobDataSourceOverridePermissions {
  /**
   * A list of data source IDs that you want to apply overrides to. You can use `*` to override all data sources in this asset bundle.
   *
   * @public
   */
  DataSourceIds: string[] | undefined;

  /**
   * A list of permissions for the data source that you want to apply overrides to.
   *
   * @public
   */
  Permissions: AssetBundleResourcePermissions | undefined;
}

/**
 * An object that contains a list of tags to be assigned to a list of data source IDs.
 *
 * @public
 */
export interface AssetBundleImportJobDataSourceOverrideTags {
  /**
   * A list of data source IDs that you want to apply overrides to. You can use `*` to override all data sources in this asset bundle.
   *
   * @public
   */
  DataSourceIds: string[] | undefined;

  /**
   * A list of tags for the data source that you want to apply overrides to.
   *
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * Describes an error that occurred within an Asset Bundle import execution.
 *
 * @public
 */
export interface AssetBundleImportJobError {
  /**
   * The ARN of the resource whose processing caused an error.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The specific error type or the error that occurred.
   *
   * @public
   */
  Type?: string | undefined;

  /**
   * A description of the error.
   *
   * @public
   */
  Message?: string | undefined;
}

/**
 * The override parameters for a single folder that is being imported.
 *
 * @public
 */
export interface AssetBundleImportJobFolderOverrideParameters {
  /**
   * The ID of the folder that you want to apply overrides to.
   *
   * @public
   */
  FolderId: string | undefined;

  /**
   * A new name for the folder.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * A new parent folder arn. This change can only be applied if the import creates a brand new folder. Existing folders cannot be moved.
   *
   * @public
   */
  ParentFolderArn?: string | undefined;
}

/**
 * An object that contains a list of permissions to be applied to a list of folder IDs.
 *
 * @public
 */
export interface AssetBundleImportJobFolderOverridePermissions {
  /**
   * A list of folder IDs that you want to apply overrides to. You can use `*` to override all folders in this asset bundle.
   *
   * @public
   */
  FolderIds: string[] | undefined;

  /**
   * A structure that contains the permissions for the resource that you want to override in an asset bundle import job.
   *
   * @public
   */
  Permissions?: AssetBundleResourcePermissions | undefined;
}

/**
 * An object that contains a list of tags to be assigned to a list of folder IDs.
 *
 * @public
 */
export interface AssetBundleImportJobFolderOverrideTags {
  /**
   * A list of folder IDs that you want to apply overrides to. You can use `*` to override all folders in this asset bundle.
   *
   * @public
   */
  FolderIds: string[] | undefined;

  /**
   * A list of tags for the folders that you want to apply overrides to.
   *
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * A list of overrides for a specific `RefreshsSchedule` resource that is present in the asset bundle that is imported.
 *
 * @public
 */
export interface AssetBundleImportJobRefreshScheduleOverrideParameters {
  /**
   * A partial identifier for the specific `RefreshSchedule` resource that is being overridden. This structure is used together with the `ScheduleID` structure.
   *
   * @public
   */
  DataSetId: string | undefined;

  /**
   * A partial identifier for the specific `RefreshSchedule` resource being overridden. This structure is used together with the `DataSetId` structure.
   *
   * @public
   */
  ScheduleId: string | undefined;

  /**
   * An override for the `StartAfterDateTime` of a `RefreshSchedule`. Make sure that the `StartAfterDateTime` is set to a time that takes place in the future.
   *
   * @public
   */
  StartAfterDateTime?: Date | undefined;
}

/**
 * An optional structure that configures resource ID overrides for the import job.
 *
 * @public
 */
export interface AssetBundleImportJobResourceIdOverrideConfiguration {
  /**
   * An option to request a CloudFormation variable for a prefix to be prepended to each resource's ID before import. The prefix is only added to the asset IDs and does not change the name of the asset.
   *
   * @public
   */
  PrefixForAllResources?: string | undefined;
}

/**
 * The override parameters for a single theme that is imported.
 *
 * @public
 */
export interface AssetBundleImportJobThemeOverrideParameters {
  /**
   * The ID of the theme to apply overrides to.
   *
   * @public
   */
  ThemeId: string | undefined;

  /**
   * A new name for the theme.
   *
   * @public
   */
  Name?: string | undefined;
}

/**
 * The override parameters for a single topic that is being imported.
 *
 * @public
 */
export interface AssetBundleImportJobTopicV2OverrideParameters {
  /**
   * The ID of the topic that you want to apply overrides to.
   *
   * @public
   */
  TopicId: string | undefined;

  /**
   * A new name for the topic.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * A new description for the topic.
   *
   * @public
   */
  Description?: string | undefined;
}

/**
 * The override parameters for a single VPC connection that is imported.
 *
 * @public
 */
export interface AssetBundleImportJobVPCConnectionOverrideParameters {
  /**
   * The ID of the VPC Connection to apply overrides to.
   *
   * @public
   */
  VPCConnectionId: string | undefined;

  /**
   * A new name for the VPC connection.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * A list of new subnet IDs for the VPC connection you are importing. This field is required if you are importing the VPC connection from another Amazon Web Services account or Region.
   *
   * @public
   */
  SubnetIds?: string[] | undefined;

  /**
   * A new security group ID for the VPC connection you are importing. This field is required if you are importing the VPC connection from another Amazon Web Services account or Region.
   *
   * @public
   */
  SecurityGroupIds?: string[] | undefined;

  /**
   * An optional override of DNS resolvers to be used by the VPC connection.
   *
   * @public
   */
  DnsResolvers?: string[] | undefined;

  /**
   * An optional override of the role ARN to be used by the VPC connection.
   *
   * @public
   */
  RoleArn?: string | undefined;
}

/**
 * A list of overrides that modify the asset bundle resource configuration before the resource is imported.
 *
 * @public
 */
export interface AssetBundleImportJobOverrideParameters {
  /**
   * An optional structure that configures resource ID overrides to be applied within the import job.
   *
   * @public
   */
  ResourceIdOverrideConfiguration?: AssetBundleImportJobResourceIdOverrideConfiguration | undefined;

  /**
   * A list of overrides for any `VPCConnection` resources that are present in the asset bundle that is imported.
   *
   * @public
   */
  VPCConnections?: AssetBundleImportJobVPCConnectionOverrideParameters[] | undefined;

  /**
   * A list of overrides for any `RefreshSchedule` resources that are present in the asset bundle that is imported.
   *
   * @public
   */
  RefreshSchedules?: AssetBundleImportJobRefreshScheduleOverrideParameters[] | undefined;

  /**
   * A list of overrides for any `DataSource` resources that are present in the asset bundle that is imported.
   *
   * @public
   */
  DataSources?: AssetBundleImportJobDataSourceOverrideParameters[] | undefined;

  /**
   * A list of overrides for any `DataSet` resources that are present in the asset bundle that is imported.
   *
   * @public
   */
  DataSets?: AssetBundleImportJobDataSetOverrideParameters[] | undefined;

  /**
   * A list of overrides for any `Theme` resources that are present in the asset bundle that is imported.
   *
   * @public
   */
  Themes?: AssetBundleImportJobThemeOverrideParameters[] | undefined;

  /**
   * A list of overrides for any `Analysis` resources that are present in the asset bundle that is imported.
   *
   * @public
   */
  Analyses?: AssetBundleImportJobAnalysisOverrideParameters[] | undefined;

  /**
   * A list of overrides for any `Dashboard` resources that are present in the asset bundle that is imported.
   *
   * @public
   */
  Dashboards?: AssetBundleImportJobDashboardOverrideParameters[] | undefined;

  /**
   * A list of overrides for any `Folder` resources that are present in the asset bundle that is imported.
   *
   * @public
   */
  Folders?: AssetBundleImportJobFolderOverrideParameters[] | undefined;

  /**
   * A list of overrides for any `Topic` resources that are present in the asset bundle that is imported.
   *
   * @public
   */
  TopicsV2?: AssetBundleImportJobTopicV2OverrideParameters[] | undefined;
}

/**
 * An object that contains a list of permissions to be applied to a list of theme IDs.
 *
 * @public
 */
export interface AssetBundleImportJobThemeOverridePermissions {
  /**
   * A list of theme IDs that you want to apply overrides to. You can use `*` to override all themes in this asset bundle.
   *
   * @public
   */
  ThemeIds: string[] | undefined;

  /**
   * A list of permissions for the themes that you want to apply overrides to.
   *
   * @public
   */
  Permissions: AssetBundleResourcePermissions | undefined;
}

/**
 * An object that contains a list of permissions to be applied to a list of topic IDs.
 *
 * @public
 */
export interface AssetBundleImportJobTopicV2OverridePermissions {
  /**
   * A list of topic IDs that you want to apply overrides to. You can use `*` to override all topics in this asset bundle.
   *
   * @public
   */
  TopicIds: string[] | undefined;

  /**
   * A list of permissions for the topics that you want to apply overrides to.
   *
   * @public
   */
  Permissions: AssetBundleResourcePermissions | undefined;
}

/**
 * A structure that contains the override permission configurations that modify the permissions for specified resources before the resource is imported.
 *
 * @public
 */
export interface AssetBundleImportJobOverridePermissions {
  /**
   * A list of permissions overrides for any `DataSource` resources that are present in the asset bundle that is imported.
   *
   * @public
   */
  DataSources?: AssetBundleImportJobDataSourceOverridePermissions[] | undefined;

  /**
   * A list of permissions overrides for any `DataSet` resources that are present in the asset bundle that is imported.
   *
   * @public
   */
  DataSets?: AssetBundleImportJobDataSetOverridePermissions[] | undefined;

  /**
   * A list of permissions overrides for any `Theme` resources that are present in the asset bundle that is imported.
   *
   * @public
   */
  Themes?: AssetBundleImportJobThemeOverridePermissions[] | undefined;

  /**
   * A list of permissions overrides for any `Analysis` resources that are present in the asset bundle that is imported.
   *
   * @public
   */
  Analyses?: AssetBundleImportJobAnalysisOverridePermissions[] | undefined;

  /**
   * A list of permissions overrides for any `Dashboard` resources that are present in the asset bundle that is imported.
   *
   * @public
   */
  Dashboards?: AssetBundleImportJobDashboardOverridePermissions[] | undefined;

  /**
   * A list of permissions for the folders that you want to apply overrides to.
   *
   * @public
   */
  Folders?: AssetBundleImportJobFolderOverridePermissions[] | undefined;

  /**
   * A list of permissions for the topics that you want to apply overrides to.
   *
   * @public
   */
  TopicsV2?: AssetBundleImportJobTopicV2OverridePermissions[] | undefined;
}

/**
 * An object that contains a list of tags to be assigned to a list of theme IDs.
 *
 * @public
 */
export interface AssetBundleImportJobThemeOverrideTags {
  /**
   * A list of theme IDs that you want to apply overrides to. You can use `*` to override all themes in this asset bundle.
   *
   * @public
   */
  ThemeIds: string[] | undefined;

  /**
   * A list of tags for the themes that you want to apply overrides to.
   *
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * An object that contains a list of tags to be assigned to a list of topic IDs.
 *
 * @public
 */
export interface AssetBundleImportJobTopicV2OverrideTags {
  /**
   * A list of topic IDs that you want to apply overrides to. You can use `*` to override all topics in this asset bundle.
   *
   * @public
   */
  TopicIds: string[] | undefined;

  /**
   * A list of tags for the topics that you want to apply overrides to.
   *
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * An object that contains a list of tags to be assigned to a list of VPC connection IDs.
 *
 * @public
 */
export interface AssetBundleImportJobVPCConnectionOverrideTags {
  /**
   * A list of VPC connection IDs that you want to apply overrides to. You can use `*` to override all VPC connections in this asset bundle.
   *
   * @public
   */
  VPCConnectionIds: string[] | undefined;

  /**
   * A list of tags for the VPC connections that you want to apply overrides to.
   *
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * A structure that contains the override tag configuration that modify the tags that are assigned to specified resources before the resource is imported.
 *
 * @public
 */
export interface AssetBundleImportJobOverrideTags {
  /**
   * A list of tag overrides for any `VPCConnection` resources that are present in the asset bundle that is imported.
   *
   * @public
   */
  VPCConnections?: AssetBundleImportJobVPCConnectionOverrideTags[] | undefined;

  /**
   * A list of tag overrides for any `DataSource` resources that are present in the asset bundle that is imported.
   *
   * @public
   */
  DataSources?: AssetBundleImportJobDataSourceOverrideTags[] | undefined;

  /**
   * A list of tag overrides for any `DataSet` resources that are present in the asset bundle that is imported.
   *
   * @public
   */
  DataSets?: AssetBundleImportJobDataSetOverrideTags[] | undefined;

  /**
   * A list of tag overrides for any `Theme` resources that are present in the asset bundle that is imported.
   *
   * @public
   */
  Themes?: AssetBundleImportJobThemeOverrideTags[] | undefined;

  /**
   * A list of tag overrides for any `Analysis` resources that are present in the asset bundle that is imported.
   *
   * @public
   */
  Analyses?: AssetBundleImportJobAnalysisOverrideTags[] | undefined;

  /**
   * A list of tag overrides for any `Dashboard` resources that are present in the asset bundle that is imported.
   *
   * @public
   */
  Dashboards?: AssetBundleImportJobDashboardOverrideTags[] | undefined;

  /**
   * A list of tag overrides for any `Folder` resources that are present in the asset bundle that is imported.
   *
   * @public
   */
  Folders?: AssetBundleImportJobFolderOverrideTags[] | undefined;

  /**
   * A list of tag overrides for any `Topic` resources that are present in the asset bundle that is imported.
   *
   * @public
   */
  TopicsV2?: AssetBundleImportJobTopicV2OverrideTags[] | undefined;
}

/**
 * An optional parameter that overrides the validation strategy for all analyses and dashboards before the resource is imported.
 *
 * @public
 */
export interface AssetBundleImportJobOverrideValidationStrategy {
  /**
   * A Boolean value that indicates whether to import all analyses and dashboards under strict or lenient mode.
   *
   * @public
   */
  StrictModeForAllResources?: boolean | undefined;
}

/**
 * A summary of the import job that includes details of the requested job's configuration and its current status.
 *
 * @public
 */
export interface AssetBundleImportJobSummary {
  /**
   * The current status of the import job.
   *
   * @public
   */
  JobStatus?: AssetBundleImportJobStatus | undefined;

  /**
   * The ARN of the import job.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The time that the import job was created.
   *
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * The ID of the job. This ID is unique while the job is running. After the job is completed, you can reuse this ID for another job.
   *
   * @public
   */
  AssetBundleImportJobId?: string | undefined;

  /**
   * The failure action for the import job.
   *
   * @public
   */
  FailureAction?: AssetBundleImportFailureAction | undefined;
}

/**
 * Describes a warning that occurred during an Asset Bundle import job.
 *
 * @public
 */
export interface AssetBundleImportJobWarning {
  /**
   * The ARN of the resource that the warning occurred for.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * A description of the warning that occurred during an Asset Bundle import job.
   *
   * @public
   */
  Message?: string | undefined;
}

/**
 * The source of the asset bundle zip file that contains the data that you want to import. The file must be in `QUICKSIGHT_JSON` format.
 *
 * @public
 */
export interface AssetBundleImportSource {
  /**
   * The bytes of the base64 encoded asset bundle import zip file. This file can't exceed 20 MB. If the size of the file that you want to upload is more than 20 MB, add the file to your Amazon S3 bucket and use `S3Uri` of the file for this operation.
   *
   * If you are calling the API operations from the Amazon Web Services SDK for Java, JavaScript, Python, or PHP, the SDK encodes base64 automatically to allow the direct setting of the zip file's bytes. If you are using an SDK for a different language or receiving related errors, try to base64 encode your data.
   *
   * @public
   */
  Body?: Uint8Array | undefined;

  /**
   * The Amazon S3 URI for an asset bundle import file that exists in an Amazon S3 bucket that the caller has read access to. The file must be a zip format file and can't exceed 1 GB.
   *
   * @public
   */
  S3Uri?: string | undefined;
}

/**
 * A description of the import source that you provide at the start of an import job. This value is set to either `Body` or `S3Uri`, depending on how the `StartAssetBundleImportJobRequest` is configured.
 *
 * @public
 */
export interface AssetBundleImportSourceDescription {
  /**
   * An HTTPS download URL for the provided asset bundle that you optionally provided at the start of the import job. This URL is valid for five minutes after issuance. Call `DescribeAssetBundleExportJob` again for a fresh URL if needed. The downloaded asset bundle is a `.qs` zip file.
   *
   * @public
   */
  Body?: string | undefined;

  /**
   * The Amazon S3 URI that you provided at the start of the import job.
   *
   * @public
   */
  S3Uri?: string | undefined;
}

/**
 * The configuration for audio extraction from knowledge base documents.
 *
 * @public
 */
export interface AudioExtractionConfiguration {
  /**
   * The status of audio extraction. Valid values are ENABLED and DISABLED.
   *
   * @public
   */
  audioExtractionStatus: AudioExtractionStatus | undefined;
}

/**
 * Configuration details for OAuth 2.0 authorization code grant flow.
 *
 * @public
 */
export interface AuthorizationCodeGrantDetails {
  /**
   * The client ID for the OAuth application.
   *
   * @public
   */
  ClientId: string | undefined;

  /**
   * The client secret for the OAuth application.
   *
   * @public
   */
  ClientSecret: string | undefined;

  /**
   * The token endpoint URL for obtaining access tokens.
   *
   * @public
   */
  TokenEndpoint: string | undefined;

  /**
   * The authorization endpoint URL for the OAuth flow.
   *
   * @public
   */
  AuthorizationEndpoint: string | undefined;
}

/**
 * Details for OAuth 2.0 authorization code grant credentials.
 *
 * @public
 */
export type AuthorizationCodeGrantCredentialsDetails =
  | AuthorizationCodeGrantCredentialsDetails.AuthorizationCodeGrantDetailsMember
  | AuthorizationCodeGrantCredentialsDetails.$UnknownMember;

/**
 * @public
 */
export namespace AuthorizationCodeGrantCredentialsDetails {
  /**
   * The authorization code grant configuration details.
   *
   * @public
   */
  export interface AuthorizationCodeGrantDetailsMember {
    AuthorizationCodeGrantDetails: AuthorizationCodeGrantDetails;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    AuthorizationCodeGrantDetails?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    AuthorizationCodeGrantDetails: (value: AuthorizationCodeGrantDetails) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Metadata for OAuth 2.0 authorization code grant authentication.
 *
 * @public
 */
export interface AuthorizationCodeGrantMetadata {
  /**
   * The base URL endpoint for the external service.
   *
   * @public
   */
  BaseEndpoint: string | undefined;

  /**
   * The redirect URL for the OAuth authorization flow.
   *
   * @public
   */
  RedirectUrl: string | undefined;

  /**
   * The source of the authorization code grant credentials.
   *
   * @public
   */
  AuthorizationCodeGrantCredentialsSource?: AuthorizationCodeGrantCredentialsSource | undefined;

  /**
   * The detailed credentials configuration for authorization code grant.
   *
   * @public
   */
  AuthorizationCodeGrantCredentialsDetails?: AuthorizationCodeGrantCredentialsDetails | undefined;
}

/**
 * Metadata for basic authentication using username and password.
 *
 * @public
 */
export interface BasicAuthConnectionMetadata {
  /**
   * The base URL endpoint for the external service.
   *
   * @public
   */
  BaseEndpoint: string | undefined;

  /**
   * The username for basic authentication.
   *
   * @public
   */
  Username: string | undefined;

  /**
   * The password for basic authentication.
   *
   * @public
   */
  Password: string | undefined;
}

/**
 * Configuration details for OAuth2 client credentials grant flow, including client ID, client secret, token endpoint, and optional scopes.
 *
 * @public
 */
export interface ClientCredentialsGrantDetails {
  /**
   * The client identifier issued to the client during the registration process with the authorization server.
   *
   * @public
   */
  ClientId: string | undefined;

  /**
   * The client secret issued to the client during the registration process with the authorization server.
   *
   * @public
   */
  ClientSecret: string | undefined;

  /**
   * The authorization server endpoint used to obtain access tokens via the client credentials grant flow.
   *
   * @public
   */
  TokenEndpoint: string | undefined;
}

/**
 * Details for OAuth 2.0 client credentials grant authentication.
 *
 * @public
 */
export type ClientCredentialsDetails =
  | ClientCredentialsDetails.ClientCredentialsGrantDetailsMember
  | ClientCredentialsDetails.$UnknownMember;

/**
 * @public
 */
export namespace ClientCredentialsDetails {
  /**
   * The OAuth2 client credentials grant configuration details for authentication.
   *
   * @public
   */
  export interface ClientCredentialsGrantDetailsMember {
    ClientCredentialsGrantDetails: ClientCredentialsGrantDetails;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    ClientCredentialsGrantDetails?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    ClientCredentialsGrantDetails: (value: ClientCredentialsGrantDetails) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Configuration for OAuth 2.0 client credentials grant authentication, including client ID, client secret, token endpoint, and optional scopes.
 *
 * @public
 */
export interface ClientCredentialsGrantMetadata {
  /**
   * The base endpoint URL for the external service.
   *
   * @public
   */
  BaseEndpoint: string | undefined;

  /**
   * The source of the client credentials configuration.
   *
   * @public
   */
  ClientCredentialsSource?: ClientCredentialsSource | undefined;

  /**
   * The detailed client credentials configuration including client ID, client secret, and token endpoint.
   *
   * @public
   */
  ClientCredentialsDetails?: ClientCredentialsDetails | undefined;
}

/**
 * Authentication metadata for IAM-based connections, used for first-party Amazon Web Services service integrations.
 *
 * @public
 */
export interface IAMConnectionMetadata {
  /**
   * The Amazon Resource Name (ARN) of the IAM role to assume for authentication with Amazon Web Services services. This IAM role should be in the same account as Quick Sight.
   *
   * @public
   */
  RoleArn: string | undefined;
}

/**
 * Authentication metadata for connections that do not require authentication credentials.
 *
 * @public
 */
export interface NoneConnectionMetadata {
  /**
   * The base endpoint URL for connections that do not require authentication.
   *
   * @public
   */
  BaseEndpoint: string | undefined;
}

/**
 * Union type containing authentication metadata for different authentication methods.
 *
 * @public
 */
export type AuthenticationMetadata =
  | AuthenticationMetadata.ApiKeyConnectionMetadataMember
  | AuthenticationMetadata.AuthorizationCodeGrantMetadataMember
  | AuthenticationMetadata.BasicAuthConnectionMetadataMember
  | AuthenticationMetadata.ClientCredentialsGrantMetadataMember
  | AuthenticationMetadata.IamConnectionMetadataMember
  | AuthenticationMetadata.NoneConnectionMetadataMember
  | AuthenticationMetadata.$UnknownMember;

/**
 * @public
 */
export namespace AuthenticationMetadata {
  /**
   * OAuth 2.0 authorization code grant authentication metadata.
   *
   * @public
   */
  export interface AuthorizationCodeGrantMetadataMember {
    AuthorizationCodeGrantMetadata: AuthorizationCodeGrantMetadata;
    ClientCredentialsGrantMetadata?: never;
    BasicAuthConnectionMetadata?: never;
    ApiKeyConnectionMetadata?: never;
    NoneConnectionMetadata?: never;
    IamConnectionMetadata?: never;
    $unknown?: never;
  }

  /**
   * OAuth 2.0 client credentials grant authentication metadata.
   *
   * @public
   */
  export interface ClientCredentialsGrantMetadataMember {
    AuthorizationCodeGrantMetadata?: never;
    ClientCredentialsGrantMetadata: ClientCredentialsGrantMetadata;
    BasicAuthConnectionMetadata?: never;
    ApiKeyConnectionMetadata?: never;
    NoneConnectionMetadata?: never;
    IamConnectionMetadata?: never;
    $unknown?: never;
  }

  /**
   * Basic authentication metadata using username and password.
   *
   * @public
   */
  export interface BasicAuthConnectionMetadataMember {
    AuthorizationCodeGrantMetadata?: never;
    ClientCredentialsGrantMetadata?: never;
    BasicAuthConnectionMetadata: BasicAuthConnectionMetadata;
    ApiKeyConnectionMetadata?: never;
    NoneConnectionMetadata?: never;
    IamConnectionMetadata?: never;
    $unknown?: never;
  }

  /**
   * API key authentication metadata.
   *
   * @public
   */
  export interface ApiKeyConnectionMetadataMember {
    AuthorizationCodeGrantMetadata?: never;
    ClientCredentialsGrantMetadata?: never;
    BasicAuthConnectionMetadata?: never;
    ApiKeyConnectionMetadata: APIKeyConnectionMetadata;
    NoneConnectionMetadata?: never;
    IamConnectionMetadata?: never;
    $unknown?: never;
  }

  /**
   * No authentication metadata for services that don't require authentication.
   *
   * @public
   */
  export interface NoneConnectionMetadataMember {
    AuthorizationCodeGrantMetadata?: never;
    ClientCredentialsGrantMetadata?: never;
    BasicAuthConnectionMetadata?: never;
    ApiKeyConnectionMetadata?: never;
    NoneConnectionMetadata: NoneConnectionMetadata;
    IamConnectionMetadata?: never;
    $unknown?: never;
  }

  /**
   * IAM role-based authentication metadata for Amazon Web Services services.
   *
   * @public
   */
  export interface IamConnectionMetadataMember {
    AuthorizationCodeGrantMetadata?: never;
    ClientCredentialsGrantMetadata?: never;
    BasicAuthConnectionMetadata?: never;
    ApiKeyConnectionMetadata?: never;
    NoneConnectionMetadata?: never;
    IamConnectionMetadata: IAMConnectionMetadata;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    AuthorizationCodeGrantMetadata?: never;
    ClientCredentialsGrantMetadata?: never;
    BasicAuthConnectionMetadata?: never;
    ApiKeyConnectionMetadata?: never;
    NoneConnectionMetadata?: never;
    IamConnectionMetadata?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    AuthorizationCodeGrantMetadata: (value: AuthorizationCodeGrantMetadata) => T;
    ClientCredentialsGrantMetadata: (value: ClientCredentialsGrantMetadata) => T;
    BasicAuthConnectionMetadata: (value: BasicAuthConnectionMetadata) => T;
    ApiKeyConnectionMetadata: (value: APIKeyConnectionMetadata) => T;
    NoneConnectionMetadata: (value: NoneConnectionMetadata) => T;
    IamConnectionMetadata: (value: IAMConnectionMetadata) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Authentication configuration for connecting to external services.
 *
 * @public
 */
export interface AuthConfig {
  /**
   * The type of authentication method.
   *
   * @public
   */
  AuthenticationType: ConnectionAuthType | undefined;

  /**
   * The authentication metadata containing the specific configuration for the chosen authentication type.
   *
   * @public
   */
  AuthenticationMetadata: AuthenticationMetadata | undefined;
}

/**
 * The authorized targets that are associated with a service.
 *
 * @public
 */
export interface AuthorizedTargetsByService {
  /**
   * The name of the Amazon Web Services service.
   *
   * @public
   */
  Service?: ServiceType | undefined;

  /**
   * Aist of authorized targets that are represented by IAM Identity Center application ARNs.
   *
   * @public
   */
  AuthorizedTargets?: string[] | undefined;
}

/**
 * The definition for the `ContributionAnalysisFactor`.
 *
 * @public
 */
export interface ContributionAnalysisFactor {
  /**
   * The field name of the `ContributionAnalysisFactor`.
   *
   * @public
   */
  FieldName?: string | undefined;
}

/**
 * The definition for the identifier.
 *
 * @public
 */
export interface Identifier {
  /**
   * The identity of the identifier.
   *
   * @public
   */
  Identity: string | undefined;
}

/**
 * The definition for the `FilterAggMetrics`.
 *
 * @public
 */
export interface FilterAggMetrics {
  /**
   * The metric operand of the `FilterAggMetrics`.
   *
   * @public
   */
  MetricOperand?: Identifier | undefined;

  /**
   * The function for the `FilterAggMetrics`.
   *
   * @public
   */
  Function?: AggType | undefined;

  /**
   * The sort direction for `FilterAggMetrics`.
   *
   * @public
   */
  SortDirection?: TopicSortDirection | undefined;
}

/**
 * The definition for a `CollectiveConstantEntry`.
 *
 * @public
 */
export interface CollectiveConstantEntry {
  /**
   * The `ConstantType` of a `CollectiveConstantEntry`.
   *
   * @public
   */
  ConstantType?: ConstantType | undefined;

  /**
   * The value of a `CollectiveConstantEntry`.
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * The definition for a `TopicConstantValue`.
 *
 * @public
 */
export interface TopicConstantValue {
  /**
   * The constant type of a `TopicConstantValue`.
   *
   * @public
   */
  ConstantType?: ConstantType | undefined;

  /**
   * The value of the `TopicConstantValue`.
   *
   * @public
   */
  Value?: string | undefined;

  /**
   * The minimum for the `TopicConstantValue`.
   *
   * @public
   */
  Minimum?: string | undefined;

  /**
   * The maximum for the `TopicConstantValue`.
   *
   * @public
   */
  Maximum?: string | undefined;

  /**
   * The value list of the `TopicConstantValue`.
   *
   * @public
   */
  ValueList?: CollectiveConstantEntry[] | undefined;
}

/**
 * The definition for a `TopicIRFilterOption`.
 *
 * @public
 */
export interface TopicIRFilterOption {
  /**
   * The filter type for the `TopicIRFilterOption`.
   *
   * @public
   */
  FilterType?: TopicIRFilterType | undefined;

  /**
   * The filter class for the `TopicIRFilterOption`.
   *
   * @public
   */
  FilterClass?: FilterClass | undefined;

  /**
   * The operand field for the `TopicIRFilterOption`.
   *
   * @public
   */
  OperandField?: Identifier | undefined;

  /**
   * The function for the `TopicIRFilterOption`.
   *
   * @public
   */
  Function?: TopicIRFilterFunction | undefined;

  /**
   * The constant for the `TopicIRFilterOption`.
   *
   * @public
   */
  Constant?: TopicConstantValue | undefined;

  /**
   * The inverse for the `TopicIRFilterOption`.
   *
   * @public
   */
  Inverse?: boolean | undefined;

  /**
   * The null filter for the `TopicIRFilterOption`.
   *
   * @public
   */
  NullFilter?: NullFilterOption | undefined;

  /**
   * The aggregation for the `TopicIRFilterOption`.
   *
   * @public
   */
  Aggregation?: AggType | undefined;

  /**
   * The aggregation function parameters for the `TopicIRFilterOption`.
   *
   * @public
   */
  AggregationFunctionParameters?: Record<string, string> | undefined;

  /**
   * The `AggregationPartitionBy` for the `TopicIRFilterOption`.
   *
   * @public
   */
  AggregationPartitionBy?: AggregationPartitionBy[] | undefined;

  /**
   * The range for the `TopicIRFilterOption`.
   *
   * @public
   */
  Range?: TopicConstantValue | undefined;

  /**
   * The inclusive for the `TopicIRFilterOption`.
   *
   * @public
   */
  Inclusive?: boolean | undefined;

  /**
   * The time granularity for the `TopicIRFilterOption`.
   *
   * @public
   */
  TimeGranularity?: TimeGranularity | undefined;

  /**
   * The last next offset for the `TopicIRFilterOption`.
   *
   * @public
   */
  LastNextOffset?: TopicConstantValue | undefined;

  /**
   * The agg metrics for the `TopicIRFilterOption`.
   *
   * @public
   */
  AggMetrics?: FilterAggMetrics[] | undefined;

  /**
   * The `TopBottomLimit` for the `TopicIRFilterOption`.
   *
   * @public
   */
  TopBottomLimit?: TopicConstantValue | undefined;

  /**
   * The sort direction for the `TopicIRFilterOption`.
   *
   * @public
   */
  SortDirection?: TopicSortDirection | undefined;

  /**
   * The anchor for the `TopicIRFilterOption`.
   *
   * @public
   */
  Anchor?: Anchor | undefined;
}

/**
 * The definition for the `ContributionAnalysisTimeRanges`.
 *
 * @public
 */
export interface ContributionAnalysisTimeRanges {
  /**
   * The start range for the `ContributionAnalysisTimeRanges`.
   *
   * @public
   */
  StartRange?: TopicIRFilterOption | undefined;

  /**
   * The end range for the `ContributionAnalysisTimeRanges`.
   *
   * @public
   */
  EndRange?: TopicIRFilterOption | undefined;
}

/**
 * The definition for a `TopicIRContributionAnalysis`.
 *
 * @public
 */
export interface TopicIRContributionAnalysis {
  /**
   * The factors for a `TopicIRContributionAnalysis`.
   *
   * @public
   */
  Factors?: ContributionAnalysisFactor[] | undefined;

  /**
   * The time ranges for the `TopicIRContributionAnalysis`.
   *
   * @public
   */
  TimeRanges?: ContributionAnalysisTimeRanges | undefined;

  /**
   * The direction for the `TopicIRContributionAnalysis`.
   *
   * @public
   */
  Direction?: ContributionAnalysisDirection | undefined;

  /**
   * The sort type for the `TopicIRContributionAnalysis`.
   *
   * @public
   */
  SortType?: ContributionAnalysisSortType | undefined;
}

/**
 * A structure that represents a negative format.
 *
 * @public
 */
export interface NegativeFormat {
  /**
   * The prefix for a negative format.
   *
   * @public
   */
  Prefix?: string | undefined;

  /**
   * The suffix for a negative format.
   *
   * @public
   */
  Suffix?: string | undefined;
}

/**
 * A structure that represents additional options for display formatting.
 *
 * @public
 */
export interface DisplayFormatOptions {
  /**
   * A Boolean value that indicates whether to use blank cell format.
   *
   * @public
   */
  UseBlankCellFormat?: boolean | undefined;

  /**
   * Determines the blank cell format.
   *
   * @public
   */
  BlankCellFormat?: string | undefined;

  /**
   * Determines the `DateTime` format.
   *
   * @public
   */
  DateFormat?: string | undefined;

  /**
   * Determines the decimal separator.
   *
   * @public
   */
  DecimalSeparator?: TopicNumericSeparatorSymbol | undefined;

  /**
   * Determines the grouping separator.
   *
   * @public
   */
  GroupingSeparator?: string | undefined;

  /**
   * A Boolean value that indicates whether to use grouping.
   *
   * @public
   */
  UseGrouping?: boolean | undefined;

  /**
   * Determines the number of fraction digits.
   *
   * @public
   */
  FractionDigits?: number | undefined;

  /**
   * The prefix value for a display format.
   *
   * @public
   */
  Prefix?: string | undefined;

  /**
   * The suffix value for a display format.
   *
   * @public
   */
  Suffix?: string | undefined;

  /**
   * The unit scaler. Valid values for this structure are: `NONE`, `AUTO`, `THOUSANDS`, `MILLIONS`, `BILLIONS`, and `TRILLIONS`.
   *
   * @public
   */
  UnitScaler?: NumberScale | undefined;

  /**
   * The negative format.
   *
   * @public
   */
  NegativeFormat?: NegativeFormat | undefined;

  /**
   * The currency symbol, such as `USD`.
   *
   * @public
   */
  CurrencySymbol?: string | undefined;
}

/**
 * The definition for a `NamedEntityRef`.
 *
 * @public
 */
export interface NamedEntityRef {
  /**
   * The `NamedEntityName` for the `NamedEntityRef`.
   *
   * @public
   */
  NamedEntityName?: string | undefined;
}

/**
 * The definition for a `TopicSortClause`.
 *
 * @public
 */
export interface TopicSortClause {
  /**
   * The operand for a `TopicSortClause`.
   *
   * @public
   */
  Operand?: Identifier | undefined;

  /**
   * The sort direction for the `TopicSortClause`.
   *
   * @public
   */
  SortDirection?: TopicSortDirection | undefined;
}

/**
 * The definition for a `TopicIRGroupBy`.
 *
 * @public
 */
export interface TopicIRGroupBy {
  /**
   * The field name for the `TopicIRGroupBy`.
   *
   * @public
   */
  FieldName?: Identifier | undefined;

  /**
   * The time granularity for the `TopicIRGroupBy`.
   *
   * @public
   */
  TimeGranularity?: TopicTimeGranularity | undefined;

  /**
   * The sort for the `TopicIRGroupBy`.
   *
   * @public
   */
  Sort?: TopicSortClause | undefined;

  /**
   * The display format for the `TopicIRGroupBy`.
   *
   * @public
   */
  DisplayFormat?: DisplayFormat | undefined;

  /**
   * A structure that represents additional options for display formatting.
   *
   * @public
   */
  DisplayFormatOptions?: DisplayFormatOptions | undefined;

  /**
   * The named entity for the `TopicIRGroupBy`.
   *
   * @public
   */
  NamedEntity?: NamedEntityRef | undefined;
}

/**
 * The definition of a `TopicIRComparisonMethod`.
 *
 * @public
 */
export interface TopicIRComparisonMethod {
  /**
   * The type for the `TopicIRComparisonMethod`.
   *
   * @public
   */
  Type?: ComparisonMethodType | undefined;

  /**
   * The period for the `TopicIRComparisonMethod`.
   *
   * @public
   */
  Period?: TopicTimeGranularity | undefined;

  /**
   * The window size for the `TopicIRComparisonMethod`.
   *
   * @public
   */
  WindowSize?: number | undefined;
}

/**
 * The definition for a `TopicIRMetric`.
 *
 * @public
 */
export interface TopicIRMetric {
  /**
   * The metric ID for the `TopicIRMetric`.
   *
   * @public
   */
  MetricId?: Identifier | undefined;

  /**
   * The function for the `TopicIRMetric`.
   *
   * @public
   */
  Function?: AggFunction | undefined;

  /**
   * The operands for the `TopicIRMetric`.
   *
   * @public
   */
  Operands?: Identifier[] | undefined;

  /**
   * The comparison method for the `TopicIRMetric`.
   *
   * @public
   */
  ComparisonMethod?: TopicIRComparisonMethod | undefined;

  /**
   * The expression for the `TopicIRMetric`.
   *
   * @public
   */
  Expression?: string | undefined;

  /**
   * The calculated field references for the `TopicIRMetric`.
   *
   * @public
   */
  CalculatedFieldReferences?: Identifier[] | undefined;

  /**
   * The display format for the `TopicIRMetric`.
   *
   * @public
   */
  DisplayFormat?: DisplayFormat | undefined;

  /**
   * A structure that represents additional options for display formatting.
   *
   * @public
   */
  DisplayFormatOptions?: DisplayFormatOptions | undefined;

  /**
   * The named entity for the `TopicIRMetric`.
   *
   * @public
   */
  NamedEntity?: NamedEntityRef | undefined;
}

/**
 * The definition for a `VisualOptions`.
 *
 * @public
 */
export interface VisualOptions {
  /**
   * The type for a `VisualOptions`.
   *
   * @public
   */
  type?: string | undefined;
}

/**
 * The definition for a `TopicIR`.
 *
 * @public
 */
export interface TopicIR {
  /**
   * The metrics for the `TopicIR`.
   *
   * @public
   */
  Metrics?: TopicIRMetric[] | undefined;

  /**
   * The GroupBy list for the `TopicIR`.
   *
   * @public
   */
  GroupByList?: TopicIRGroupBy[] | undefined;

  /**
   * The filters for the `TopicIR`.
   *
   * @public
   */
  Filters?: TopicIRFilterOption[][] | undefined;

  /**
   * The sort for the `TopicIR`.
   *
   * @public
   */
  Sort?: TopicSortClause | undefined;

  /**
   * The contribution analysis for the `TopicIR`.
   *
   * @public
   */
  ContributionAnalysis?: TopicIRContributionAnalysis | undefined;

  /**
   * The visual for the `TopicIR`.
   *
   * @public
   */
  Visual?: VisualOptions | undefined;
}

/**
 * The definition for the slot.
 *
 * @public
 */
export interface Slot {
  /**
   * The slot ID of the slot.
   *
   * @public
   */
  SlotId?: string | undefined;

  /**
   * The visual ID for the slot.
   *
   * @public
   */
  VisualId?: string | undefined;
}

/**
 * The definition for a `TopicTemplate`.
 *
 * @public
 */
export interface TopicTemplate {
  /**
   * The template type for the `TopicTemplate`.
   *
   * @public
   */
  TemplateType?: string | undefined;

  /**
   * The slots for the `TopicTemplate`.
   *
   * @public
   */
  Slots?: Slot[] | undefined;
}

/**
 * The definition for a `InvalidTopicReviewedAnswer`.
 *
 * @public
 */
export interface InvalidTopicReviewedAnswer {
  /**
   * The answer ID for the `InvalidTopicReviewedAnswer`.
   *
   * @public
   */
  AnswerId?: string | undefined;

  /**
   * The error that is returned for the `InvalidTopicReviewedAnswer`.
   *
   * @public
   */
  Error?: ReviewedAnswerErrorCode | undefined;
}

/**
 * The definition for a `SucceededTopicReviewedAnswer`.
 *
 * @public
 */
export interface SucceededTopicReviewedAnswer {
  /**
   * The answer ID for the `SucceededTopicReviewedAnswer`.
   *
   * @public
   */
  AnswerId?: string | undefined;
}

/**
 * @public
 */
export interface BatchCreateTopicReviewedAnswerResponse {
  /**
   * The ID for the topic reviewed answer that you want to create. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.
   *
   * @public
   */
  TopicId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the topic.
   *
   * @public
   */
  TopicArn?: string | undefined;

  /**
   * The definition of Answers that are successfully created.
   *
   * @public
   */
  SucceededAnswers?: SucceededTopicReviewedAnswer[] | undefined;

  /**
   * The definition of Answers that are invalid and not created.
   *
   * @public
   */
  InvalidAnswers?: InvalidTopicReviewedAnswer[] | undefined;

  /**
   * The HTTP status of the request.
   *
   * @public
   */
  Status?: number | undefined;

  /**
   * The Amazon Web Services request ID for this operation.
   *
   * @public
   */
  RequestId?: string | undefined;
}

/**
 * @public
 */
export interface BatchDeleteKnowledgeBaseRequest {
  /**
   * The ID of the Amazon Web Services account that contains the knowledge base.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * A list of knowledge base identifiers to delete.
   *
   * @public
   */
  KnowledgeBaseIds: string[] | undefined;
}

/**
 * Information about a knowledge base that was successfully deleted in a batch operation.
 *
 * @public
 */
export interface BatchDeleteKnowledgeBaseSuccess {
  /**
   * The unique identifier of the successfully deleted knowledge base.
   *
   * @public
   */
  KnowledgeBaseId: string | undefined;

  /**
   * The ARN of the successfully deleted knowledge base.
   *
   * @public
   */
  KnowledgeBaseArn: string | undefined;
}

/**
 * Information about a knowledge base that failed to be deleted in a batch operation.
 *
 * @public
 */
export interface BatchDeleteKnowledgeBaseFailure {
  /**
   * The unique identifier of the knowledge base that failed to be deleted.
   *
   * @public
   */
  KnowledgeBaseId: string | undefined;

  /**
   * The error code for the deletion failure.
   *
   * @public
   */
  ErrorCode: string | undefined;

  /**
   * The error message for the deletion failure.
   *
   * @public
   */
  ErrorMessage: string | undefined;
}

/**
 * @public
 */
export interface BatchDeleteKnowledgeBaseResponse {
  /**
   * A list of knowledge bases that were successfully deleted.
   *
   * @public
   */
  Deleted: BatchDeleteKnowledgeBaseSuccess[] | undefined;

  /**
   * A list of knowledge bases that failed to be deleted.
   *
   * @public
   */
  Errors: BatchDeleteKnowledgeBaseFailure[] | undefined;

  /**
   * The Amazon Web Services request ID for this operation.
   *
   * @public
   */
  RequestId?: string | undefined;

  /**
   * The HTTP status of the request.
   *
   * @public
   */
  Status?: number | undefined;
}

/**
 * @public
 */
export interface BatchDeleteTopicReviewedAnswerRequest {
  /**
   * The ID of the Amazon Web Services account that you want to delete a reviewed answers in.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The ID for the topic reviewed answer that you want to delete. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.
   *
   * @public
   */
  TopicId: string | undefined;

  /**
   * The Answer IDs of the Answers to be deleted.
   *
   * @public
   */
  AnswerIds?: string[] | undefined;
}

/**
 * @public
 */
export interface BatchDeleteTopicReviewedAnswerResponse {
  /**
   * The ID of the topic reviewed answer that you want to delete. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.
   *
   * @public
   */
  TopicId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the topic.
   *
   * @public
   */
  TopicArn?: string | undefined;

  /**
   * The definition of Answers that are successfully deleted.
   *
   * @public
   */
  SucceededAnswers?: SucceededTopicReviewedAnswer[] | undefined;

  /**
   * The definition of Answers that are invalid and not deleted.
   *
   * @public
   */
  InvalidAnswers?: InvalidTopicReviewedAnswer[] | undefined;

  /**
   * The Amazon Web Services request ID for this operation.
   *
   * @public
   */
  RequestId?: string | undefined;

  /**
   * The HTTP status of the request.
   *
   * @public
   */
  Status?: number | undefined;
}

/**
 * Identifies a user for the `BatchDescribeUserLimits` operation.
 *
 * @public
 */
export interface UserLimitsEntry {
  /**
   * The name of the user.
   *
   * @public
   */
  userName: string | undefined;

  /**
   * The namespace of the user.
   *
   * @public
   */
  namespace: string | undefined;
}

/**
 * @public
 */
export interface BatchDescribeUserLimitsRequest {
  /**
   * The ID of the Amazon Web Services account that contains the users.
   *
   * @public
   */
  accountId: string | undefined;

  /**
   * A list of users to describe limits for. Each entry contains a user name and namespace.
   *
   * @public
   */
  users?: UserLimitsEntry[] | undefined;

  /**
   * An optional filter that limits the results to specific resource types. If you don't specify a value, the operation returns limits for all resource types.
   *
   * @public
   */
  resourceTypes?: ResourceType[] | undefined;
}

/**
 * Information about a user whose limits could not be described in a batch operation.
 *
 * @public
 */
export interface BatchDescribeUserLimitsError {
  /**
   * The name of the user that failed.
   *
   * @public
   */
  userName?: string | undefined;

  /**
   * The namespace of the user that failed.
   *
   * @public
   */
  namespace?: string | undefined;

  /**
   * The ARN of the user that failed.
   *
   * @public
   */
  userArn?: string | undefined;

  /**
   * The error code for the failure.
   *
   * @public
   */
  errorCode: string | undefined;

  /**
   * The error message for the failure.
   *
   * @public
   */
  message: string | undefined;
}

/**
 * The effective limit for a resource type that applies to a user, considering all applicable profile assignments and inheritance rules.
 *
 * @public
 */
export interface EffectiveLimit {
  /**
   * The type of resource that the limit applies to.
   *
   * @public
   */
  resourceType: ResourceType | undefined;

  /**
   * The maximum allowed value for the resource.
   *
   * @public
   */
  limitValue: number | undefined;

  /**
   * The unit of measurement for the limit.
   *
   * @public
   */
  limitUnit: LimitUnit | undefined;

  /**
   * The source from which this limit was inherited. Possible values:
   *
   * - `DIRECT_USER` – The limit comes from a profile directly assigned to the user.
   * - `GROUP` – The limit comes from a profile assigned to a group the user belongs to.
   * - `ROLE` – The limit comes from a profile assigned to a role the user has.
   * - `ACCOUNT` – The limit comes from the account-level default profile.
   * - `SYSTEM_DEFAULT` – The limit comes from the built-in system default.
   *
   * @public
   */
  source: LimitSource | undefined;

  /**
   * The identifier of the limits profile that defines this limit.
   *
   * @public
   */
  profileId: string | undefined;
}

/**
 * The effective limits for an Amazon Quick Sight user.
 *
 * @public
 */
export interface UserLimits {
  /**
   * The name of the user.
   *
   * @public
   */
  userName: string | undefined;

  /**
   * The namespace of the user.
   *
   * @public
   */
  namespace: string | undefined;

  /**
   * A list of effective limits for the user.
   *
   * @public
   */
  effectiveLimits: EffectiveLimit[] | undefined;
}

/**
 * @public
 */
export interface BatchDescribeUserLimitsResponse {
  /**
   * A list of user limits results. Each entry contains the effective limits for a user.
   *
   * @public
   */
  userLimits: UserLimits[] | undefined;

  /**
   * A list of errors for users whose limits could not be described.
   *
   * @public
   */
  errors: BatchDescribeUserLimitsError[] | undefined;
}

/**
 * The bookmarks configuration of an embedded dashboard.
 *
 * @public
 */
export interface BookmarksConfigurations {
  /**
   * A Boolean value that determines whether a user can bookmark an embedded dashboard.
   *
   * @public
   */
  Enabled: boolean | undefined;
}

/**
 * The display options for tile borders for visuals.
 *
 * @public
 */
export interface BorderStyle {
  /**
   * The option to add color for tile borders for visuals.
   *
   * @public
   */
  Color?: string | undefined;

  /**
   * The option to enable display of borders for visuals.
   *
   * @public
   */
  Show?: boolean | undefined;

  /**
   * The option to set the width of tile borders for visuals.
   *
   * @public
   */
  Width?: string | undefined;
}

/**
 * The source of the image.
 *
 * @public
 */
export type ImageSource =
  | ImageSource.PublicUrlMember
  | ImageSource.S3UriMember
  | ImageSource.$UnknownMember;

/**
 * @public
 */
export namespace ImageSource {
  /**
   * The public URL that points to the source image.
   *
   * @public
   */
  export interface PublicUrlMember {
    PublicUrl: string;
    S3Uri?: never;
    $unknown?: never;
  }

  /**
   * The Amazon S3 URI that points to the source image.
   *
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    PublicUrl: (value: string) => T;
    S3Uri: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The logo image configuration.
 *
 * @public
 */
export interface ImageConfiguration {
  /**
   * The source of the image.
   *
   * @public
   */
  Source?: ImageSource | undefined;
}

/**
 * The image set configuration.
 *
 * @public
 */
export interface ImageSetConfiguration {
  /**
   * The original image.
   *
   * @public
   */
  Original: ImageConfiguration | undefined;
}

/**
 * The logo set configuration.
 *
 * @public
 */
export interface LogoSetConfiguration {
  /**
   * The primary logo.
   *
   * @public
   */
  Primary: ImageSetConfiguration | undefined;

  /**
   * The favicon logo.
   *
   * @public
   */
  Favicon?: ImageSetConfiguration | undefined;
}

/**
 * The logo configuration.
 *
 * @public
 */
export interface LogoConfiguration {
  /**
   * The alt text for the logo.
   *
   * @public
   */
  AltText: string | undefined;

  /**
   * A set of configured logos.
   *
   * @public
   */
  LogoSet: LogoSetConfiguration | undefined;
}

/**
 * The definition of the brand.
 *
 * @public
 */
export interface BrandDefinition {
  /**
   * The name of the brand.
   *
   * @public
   */
  BrandName: string | undefined;

  /**
   * The description of the brand.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The application theme of the brand.
   *
   * @public
   */
  ApplicationTheme?: ApplicationTheme | undefined;

  /**
   * The logo configuration of the brand.
   *
   * @public
   */
  LogoConfiguration?: LogoConfiguration | undefined;
}

/**
 * The logo image.
 *
 * @public
 */
export interface Image {
  /**
   * The source of the logo image.
   *
   * @public
   */
  Source?: ImageSource | undefined;

  /**
   * The URL that points to the generated logo image.
   *
   * @public
   */
  GeneratedImageUrl?: string | undefined;
}

/**
 * The image set.
 *
 * @public
 */
export interface ImageSet {
  /**
   * The original image.
   *
   * @public
   */
  Original: Image | undefined;

  /**
   * The image with the height set to 64 pixels.
   *
   * @public
   */
  Height64?: Image | undefined;

  /**
   * The image with the height set to 32 pixels.
   *
   * @public
   */
  Height32?: Image | undefined;
}

/**
 * A set of logos.
 *
 * @public
 */
export interface LogoSet {
  /**
   * The primary logo.
   *
   * @public
   */
  Primary: ImageSet | undefined;

  /**
   * The favicon logo.
   *
   * @public
   */
  Favicon?: ImageSet | undefined;
}

/**
 * The logo configuration.
 *
 * @public
 */
export interface Logo {
  /**
   * The alt text for the logo.
   *
   * @public
   */
  AltText: string | undefined;

  /**
   * A set of configured logos.
   *
   * @public
   */
  LogoSet: LogoSet | undefined;
}

/**
 * The details of the brand.
 *
 * @public
 */
export interface BrandDetail {
  /**
   * The ID of the Quick brand.
   *
   * @public
   */
  BrandId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the brand.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The status of the brand.
   *
   * @public
   */
  BrandStatus?: BrandStatus | undefined;

  /**
   * The time that the brand was created.
   *
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * The last time the brand was updated.
   *
   * @public
   */
  LastUpdatedTime?: Date | undefined;

  /**
   * The ID of the version.
   *
   * @public
   */
  VersionId?: string | undefined;

  /**
   * The status of the version.
   *
   * @public
   */
  VersionStatus?: BrandVersionStatus | undefined;

  /**
   * A list of errors that occurred during the most recent brand operation.
   *
   * @public
   */
  Errors?: string[] | undefined;

  /**
   * The logo details.
   *
   * @public
   */
  Logo?: Logo | undefined;
}

/**
 * A summary of the brand.
 *
 * @public
 */
export interface BrandSummary {
  /**
   * The Amazon Resource Name (ARN) of the brand.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The ID of the Quick brand.
   *
   * @public
   */
  BrandId?: string | undefined;

  /**
   * The name of the brand.
   *
   * @public
   */
  BrandName?: string | undefined;

  /**
   * The description of the brand.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The status of the brand.
   *
   * @public
   */
  BrandStatus?: BrandStatus | undefined;

  /**
   * The time that the brand was created.
   *
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * The time when the brand was last updated.
   *
   * @public
   */
  LastUpdatedTime?: Date | undefined;
}

/**
 * A calculated column for a dataset.
 *
 * @public
 */
export interface CalculatedColumn {
  /**
   * Column name.
   *
   * @public
   */
  ColumnName: string | undefined;

  /**
   * A unique ID to identify a calculated column. During a dataset update, if the column ID of a calculated column matches that of an existing calculated column, Quick Sight preserves the existing calculated column.
   *
   * @public
   */
  ColumnId: string | undefined;

  /**
   * An expression that defines the calculated column.
   *
   * @public
   */
  Expression: string | undefined;
}

/**
 * @public
 */
export interface CancelIngestionRequest {
  /**
   * The Amazon Web Services account ID.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The ID of the dataset used in the ingestion.
   *
   * @public
   */
  DataSetId: string | undefined;

  /**
   * An ID for the ingestion.
   *
   * @public
   */
  IngestionId: string | undefined;
}

/**
 * @public
 */
export interface CancelIngestionResponse {
  /**
   * The Amazon Resource Name (ARN) for the data ingestion.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * An ID for the ingestion.
   *
   * @public
   */
  IngestionId?: string | undefined;

  /**
   * The Amazon Web Services request ID for this operation.
   *
   * @public
   */
  RequestId?: string | undefined;

  /**
   * The HTTP status of the request.
   *
   * @public
   */
  Status?: number | undefined;
}

/**
 * A set of actions that correspond to Amazon Quick Sight permissions.
 *
 * @public
 */
export interface Capabilities {
  /**
   * The ability to export to CSV files from the UI.
   *
   * @public
   */
  ExportToCsv?: CapabilityState | undefined;

  /**
   * The ability to export to Excel files from the UI.
   *
   * @public
   */
  ExportToExcel?: CapabilityState | undefined;

  /**
   * The ability to export to PDF files from the UI.
   *
   * @public
   */
  ExportToPdf?: CapabilityState | undefined;

  /**
   * The ability to print reports.
   *
   * @public
   */
  PrintReports?: CapabilityState | undefined;

  /**
   * The ability to export to Create and Update themes.
   *
   * @public
   */
  CreateAndUpdateThemes?: CapabilityState | undefined;

  /**
   * The ability to add or run anomaly detection.
   *
   * @public
   */
  AddOrRunAnomalyDetectionForAnalyses?: CapabilityState | undefined;

  /**
   * The ability to share analyses.
   *
   * @public
   */
  ShareAnalyses?: CapabilityState | undefined;

  /**
   * The ability to create and update datasets.
   *
   * @public
   */
  CreateAndUpdateDatasets?: CapabilityState | undefined;

  /**
   * The ability to share datasets.
   *
   * @public
   */
  ShareDatasets?: CapabilityState | undefined;

  /**
   * The ability to subscribe to email reports.
   *
   * @public
   */
  SubscribeDashboardEmailReports?: CapabilityState | undefined;

  /**
   * The ability to create and update email reports.
   *
   * @public
   */
  CreateAndUpdateDashboardEmailReports?: CapabilityState | undefined;

  /**
   * The ability to share dashboards.
   *
   * @public
   */
  ShareDashboards?: CapabilityState | undefined;

  /**
   * The ability to create and update threshold alerts.
   *
   * @public
   */
  CreateAndUpdateThresholdAlerts?: CapabilityState | undefined;

  /**
   * The ability to rename shared folders.
   *
   * @public
   */
  RenameSharedFolders?: CapabilityState | undefined;

  /**
   * The ability to create shared folders.
   *
   * @public
   */
  CreateSharedFolders?: CapabilityState | undefined;

  /**
   * The ability to create and update data sources.
   *
   * @public
   */
  CreateAndUpdateDataSources?: CapabilityState | undefined;

  /**
   * The ability to share data sources.
   *
   * @public
   */
  ShareDataSources?: CapabilityState | undefined;

  /**
   * The ability to view account SPICE capacity.
   *
   * @public
   */
  ViewAccountSPICECapacity?: CapabilityState | undefined;

  /**
   * The ability to create a SPICE dataset.
   *
   * @public
   */
  CreateSPICEDataset?: CapabilityState | undefined;

  /**
   * The ability to export to PDF files in scheduled email reports.
   *
   * @public
   */
  ExportToPdfInScheduledReports?: CapabilityState | undefined;

  /**
   * The ability to export to CSV files in scheduled email reports.
   *
   * @public
   */
  ExportToCsvInScheduledReports?: CapabilityState | undefined;

  /**
   * The ability to export to Excel files in scheduled email reports.
   *
   * @public
   */
  ExportToExcelInScheduledReports?: CapabilityState | undefined;

  /**
   * The ability to include content in scheduled email reports.
   *
   * @public
   */
  IncludeContentInScheduledReportsEmail?: CapabilityState | undefined;

  /**
   * The ability to perform dashboard-related actions.
   *
   * @public
   */
  Dashboard?: CapabilityState | undefined;

  /**
   * The ability to perform analysis-related actions.
   *
   * @public
   */
  Analysis?: CapabilityState | undefined;

  /**
   * The ability to perform automate-related actions.
   *
   * @public
   */
  Automate?: CapabilityState | undefined;

  /**
   * The ability to perform flow-related actions.
   *
   * @public
   */
  Flow?: CapabilityState | undefined;

  /**
   * The ability to perform apps-related actions.
   *
   * @public
   */
  Apps?: CapabilityState | undefined;

  /**
   * The ability to create or update apps.
   *
   * @public
   */
  CreateAndUpdateApps?: CapabilityState | undefined;

  /**
   * The ability to share apps with other users.
   *
   * @public
   */
  ShareApps?: CapabilityState | undefined;

  /**
   * The ability to add and invoke AI inference in new and existing apps.
   *
   * @public
   */
  InvokeAppsAIInference?: CapabilityState | undefined;

  /**
   * The ability to access the native data store for new and existing apps.
   *
   * @public
   */
  AccessAppsNativeDataStore?: CapabilityState | undefined;

  /**
   * The ability to enable approvals for flow share.
   *
   * @public
   */
  PublishWithoutApproval?: CapabilityState | undefined;

  /**
   * The ability to use Bedrock models for general knowledge step in flows.
   *
   * @public
   */
  UseBedrockModels?: CapabilityState | undefined;

  /**
   * The ability to use UI Agent step to perform tasks on public websites.
   *
   * @public
   */
  PerformFlowUiTask?: CapabilityState | undefined;

  /**
   * The ability to review and approve sharing requests of Flows.
   *
   * @public
   */
  ApproveFlowShareRequests?: CapabilityState | undefined;

  /**
   * The ability to use internet to enhance results in Chat Agents, Flows, and Quick Research. Web search queries will be processed securely in an Amazon Web Services region `us-east-1`.
   *
   * @public
   */
  UseAgentWebSearch?: CapabilityState | undefined;

  /**
   * The ability to use knowledge bases to specify content from external applications.
   *
   * @public
   */
  KnowledgeBase?: CapabilityState | undefined;

  /**
   * The permission state of a capability in a custom permissions profile. Valid values:
   *
   * - `DENY` – Amazon Quick denies this capability for users assigned to the profile.
   * - `ALLOW` – Amazon Quick grants this capability to users assigned to the profile. This value is only relevant when governance is enabled for the capability's category. Without governance, the default effect is always `ALLOW`. In a governed category, this value overrides the category-level deny-by-default behavior for that capability only.
   *
   * @public
   */
  CreateAndUpdateKnowledgeBases?: CapabilityState | undefined;

  /**
   * The permission state of a capability in a custom permissions profile. Valid values:
   *
   * - `DENY` – Amazon Quick denies this capability for users assigned to the profile.
   * - `ALLOW` – Amazon Quick grants this capability to users assigned to the profile. This value is only relevant when governance is enabled for the capability's category. Without governance, the default effect is always `ALLOW`. In a governed category, this value overrides the category-level deny-by-default behavior for that capability only.
   *
   * @public
   */
  ShareKnowledgeBases?: CapabilityState | undefined;

  /**
   * The permission state of a capability in a custom permissions profile. Valid values:
   *
   * - `DENY` – Amazon Quick denies this capability for users assigned to the profile.
   * - `ALLOW` – Amazon Quick grants this capability to users assigned to the profile. This value is only relevant when governance is enabled for the capability's category. Without governance, the default effect is always `ALLOW`. In a governed category, this value overrides the category-level deny-by-default behavior for that capability only.
   *
   * @public
   */
  SharePointKnowledgeBase?: CapabilityState | undefined;

  /**
   * The permission state of a capability in a custom permissions profile. Valid values:
   *
   * - `DENY` – Amazon Quick denies this capability for users assigned to the profile.
   * - `ALLOW` – Amazon Quick grants this capability to users assigned to the profile. This value is only relevant when governance is enabled for the capability's category. Without governance, the default effect is always `ALLOW`. In a governed category, this value overrides the category-level deny-by-default behavior for that capability only.
   *
   * @public
   */
  CreateAndUpdateSharePointKnowledgeBase?: CapabilityState | undefined;

  /**
   * The permission state of a capability in a custom permissions profile. Valid values:
   *
   * - `DENY` – Amazon Quick denies this capability for users assigned to the profile.
   * - `ALLOW` – Amazon Quick grants this capability to users assigned to the profile. This value is only relevant when governance is enabled for the capability's category. Without governance, the default effect is always `ALLOW`. In a governed category, this value overrides the category-level deny-by-default behavior for that capability only.
   *
   * @public
   */
  ShareSharePointKnowledgeBase?: CapabilityState | undefined;

  /**
   * The permission state of a capability in a custom permissions profile. Valid values:
   *
   * - `DENY` – Amazon Quick denies this capability for users assigned to the profile.
   * - `ALLOW` – Amazon Quick grants this capability to users assigned to the profile. This value is only relevant when governance is enabled for the capability's category. Without governance, the default effect is always `ALLOW`. In a governed category, this value overrides the category-level deny-by-default behavior for that capability only.
   *
   * @public
   */
  UseSharePointKnowledgeBase?: CapabilityState | undefined;

  /**
   * The permission state of a capability in a custom permissions profile. Valid values:
   *
   * - `DENY` – Amazon Quick denies this capability for users assigned to the profile.
   * - `ALLOW` – Amazon Quick grants this capability to users assigned to the profile. This value is only relevant when governance is enabled for the capability's category. Without governance, the default effect is always `ALLOW`. In a governed category, this value overrides the category-level deny-by-default behavior for that capability only.
   *
   * @public
   */
  GoogleDriveKnowledgeBase?: CapabilityState | undefined;

  /**
   * The permission state of a capability in a custom permissions profile. Valid values:
   *
   * - `DENY` – Amazon Quick denies this capability for users assigned to the profile.
   * - `ALLOW` – Amazon Quick grants this capability to users assigned to the profile. This value is only relevant when governance is enabled for the capability's category. Without governance, the default effect is always `ALLOW`. In a governed category, this value overrides the category-level deny-by-default behavior for that capability only.
   *
   * @public
   */
  CreateAndUpdateGoogleDriveKnowledgeBase?: CapabilityState | undefined;

  /**
   * The permission state of a capability in a custom permissions profile. Valid values:
   *
   * - `DENY` – Amazon Quick denies this capability for users assigned to the profile.
   * - `ALLOW` – Amazon Quick grants this capability to users assigned to the profile. This value is only relevant when governance is enabled for the capability's category. Without governance, the default effect is always `ALLOW`. In a governed category, this value overrides the category-level deny-by-default behavior for that capability only.
   *
   * @public
   */
  ShareGoogleDriveKnowledgeBase?: CapabilityState | undefined;

  /**
   * The permission state of a capability in a custom permissions profile. Valid values:
   *
   * - `DENY` – Amazon Quick denies this capability for users assigned to the profile.
   * - `ALLOW` – Amazon Quick grants this capability to users assigned to the profile. This value is only relevant when governance is enabled for the capability's category. Without governance, the default effect is always `ALLOW`. In a governed category, this value overrides the category-level deny-by-default behavior for that capability only.
   *
   * @public
   */
  UseGoogleDriveKnowledgeBase?: CapabilityState | undefined;

  /**
   * The permission state of a capability in a custom permissions profile. Valid values:
   *
   * - `DENY` – Amazon Quick denies this capability for users assigned to the profile.
   * - `ALLOW` – Amazon Quick grants this capability to users assigned to the profile. This value is only relevant when governance is enabled for the capability's category. Without governance, the default effect is always `ALLOW`. In a governed category, this value overrides the category-level deny-by-default behavior for that capability only.
   *
   * @public
   */
  WebCrawlerKnowledgeBase?: CapabilityState | undefined;

  /**
   * The permission state of a capability in a custom permissions profile. Valid values:
   *
   * - `DENY` – Amazon Quick denies this capability for users assigned to the profile.
   * - `ALLOW` – Amazon Quick grants this capability to users assigned to the profile. This value is only relevant when governance is enabled for the capability's category. Without governance, the default effect is always `ALLOW`. In a governed category, this value overrides the category-level deny-by-default behavior for that capability only.
   *
   * @public
   */
  CreateAndUpdateWebCrawlerKnowledgeBase?: CapabilityState | undefined;

  /**
   * The permission state of a capability in a custom permissions profile. Valid values:
   *
   * - `DENY` – Amazon Quick denies this capability for users assigned to the profile.
   * - `ALLOW` – Amazon Quick grants this capability to users assigned to the profile. This value is only relevant when governance is enabled for the capability's category. Without governance, the default effect is always `ALLOW`. In a governed category, this value overrides the category-level deny-by-default behavior for that capability only.
   *
   * @public
   */
  ShareWebCrawlerKnowledgeBase?: CapabilityState | undefined;

  /**
   * The permission state of a capability in a custom permissions profile. Valid values:
   *
   * - `DENY` – Amazon Quick denies this capability for users assigned to the profile.
   * - `ALLOW` – Amazon Quick grants this capability to users assigned to the profile. This value is only relevant when governance is enabled for the capability's category. Without governance, the default effect is always `ALLOW`. In a governed category, this value overrides the category-level deny-by-default behavior for that capability only.
   *
   * @public
   */
  UseWebCrawlerKnowledgeBase?: CapabilityState | undefined;

  /**
   * The permission state of a capability in a custom permissions profile. Valid values:
   *
   * - `DENY` – Amazon Quick denies this capability for users assigned to the profile.
   * - `ALLOW` – Amazon Quick grants this capability to users assigned to the profile. This value is only relevant when governance is enabled for the capability's category. Without governance, the default effect is always `ALLOW`. In a governed category, this value overrides the category-level deny-by-default behavior for that capability only.
   *
   * @public
   */
  S3KnowledgeBase?: CapabilityState | undefined;

  /**
   * The permission state of a capability in a custom permissions profile. Valid values:
   *
   * - `DENY` – Amazon Quick denies this capability for users assigned to the profile.
   * - `ALLOW` – Amazon Quick grants this capability to users assigned to the profile. This value is only relevant when governance is enabled for the capability's category. Without governance, the default effect is always `ALLOW`. In a governed category, this value overrides the category-level deny-by-default behavior for that capability only.
   *
   * @public
   */
  CreateAndUpdateS3KnowledgeBase?: CapabilityState | undefined;

  /**
   * The permission state of a capability in a custom permissions profile. Valid values:
   *
   * - `DENY` – Amazon Quick denies this capability for users assigned to the profile.
   * - `ALLOW` – Amazon Quick grants this capability to users assigned to the profile. This value is only relevant when governance is enabled for the capability's category. Without governance, the default effect is always `ALLOW`. In a governed category, this value overrides the category-level deny-by-default behavior for that capability only.
   *
   * @public
   */
  ShareS3KnowledgeBase?: CapabilityState | undefined;

  /**
   * The permission state of a capability in a custom permissions profile. Valid values:
   *
   * - `DENY` – Amazon Quick denies this capability for users assigned to the profile.
   * - `ALLOW` – Amazon Quick grants this capability to users assigned to the profile. This value is only relevant when governance is enabled for the capability's category. Without governance, the default effect is always `ALLOW`. In a governed category, this value overrides the category-level deny-by-default behavior for that capability only.
   *
   * @public
   */
  UseS3KnowledgeBase?: CapabilityState | undefined;

  /**
   * The permission state of a capability in a custom permissions profile. Valid values:
   *
   * - `DENY` – Amazon Quick denies this capability for users assigned to the profile.
   * - `ALLOW` – Amazon Quick grants this capability to users assigned to the profile. This value is only relevant when governance is enabled for the capability's category. Without governance, the default effect is always `ALLOW`. In a governed category, this value overrides the category-level deny-by-default behavior for that capability only.
   *
   * @public
   */
  ConfluenceKnowledgeBase?: CapabilityState | undefined;

  /**
   * The permission state of a capability in a custom permissions profile. Valid values:
   *
   * - `DENY` – Amazon Quick denies this capability for users assigned to the profile.
   * - `ALLOW` – Amazon Quick grants this capability to users assigned to the profile. This value is only relevant when governance is enabled for the capability's category. Without governance, the default effect is always `ALLOW`. In a governed category, this value overrides the category-level deny-by-default behavior for that capability only.
   *
   * @public
   */
  CreateAndUpdateConfluenceKnowledgeBase?: CapabilityState | undefined;

  /**
   * The permission state of a capability in a custom permissions profile. Valid values:
   *
   * - `DENY` – Amazon Quick denies this capability for users assigned to the profile.
   * - `ALLOW` – Amazon Quick grants this capability to users assigned to the profile. This value is only relevant when governance is enabled for the capability's category. Without governance, the default effect is always `ALLOW`. In a governed category, this value overrides the category-level deny-by-default behavior for that capability only.
   *
   * @public
   */
  ShareConfluenceKnowledgeBase?: CapabilityState | undefined;

  /**
   * The permission state of a capability in a custom permissions profile. Valid values:
   *
   * - `DENY` – Amazon Quick denies this capability for users assigned to the profile.
   * - `ALLOW` – Amazon Quick grants this capability to users assigned to the profile. This value is only relevant when governance is enabled for the capability's category. Without governance, the default effect is always `ALLOW`. In a governed category, this value overrides the category-level deny-by-default behavior for that capability only.
   *
   * @public
   */
  UseConfluenceKnowledgeBase?: CapabilityState | undefined;

  /**
   * The permission state of a capability in a custom permissions profile. Valid values:
   *
   * - `DENY` – Amazon Quick denies this capability for users assigned to the profile.
   * - `ALLOW` – Amazon Quick grants this capability to users assigned to the profile. This value is only relevant when governance is enabled for the capability's category. Without governance, the default effect is always `ALLOW`. In a governed category, this value overrides the category-level deny-by-default behavior for that capability only.
   *
   * @public
   */
  OneDriveKnowledgeBase?: CapabilityState | undefined;

  /**
   * The permission state of a capability in a custom permissions profile. Valid values:
   *
   * - `DENY` – Amazon Quick denies this capability for users assigned to the profile.
   * - `ALLOW` – Amazon Quick grants this capability to users assigned to the profile. This value is only relevant when governance is enabled for the capability's category. Without governance, the default effect is always `ALLOW`. In a governed category, this value overrides the category-level deny-by-default behavior for that capability only.
   *
   * @public
   */
  CreateAndUpdateOneDriveKnowledgeBase?: CapabilityState | undefined;

  /**
   * The permission state of a capability in a custom permissions profile. Valid values:
   *
   * - `DENY` – Amazon Quick denies this capability for users assigned to the profile.
   * - `ALLOW` – Amazon Quick grants this capability to users assigned to the profile. This value is only relevant when governance is enabled for the capability's category. Without governance, the default effect is always `ALLOW`. In a governed category, this value overrides the category-level deny-by-default behavior for that capability only.
   *
   * @public
   */
  ShareOneDriveKnowledgeBase?: CapabilityState | undefined;

  /**
   * The permission state of a capability in a custom permissions profile. Valid values:
   *
   * - `DENY` – Amazon Quick denies this capability for users assigned to the profile.
   * - `ALLOW` – Amazon Quick grants this capability to users assigned to the profile. This value is only relevant when governance is enabled for the capability's category. Without governance, the default effect is always `ALLOW`. In a governed category, this value overrides the category-level deny-by-default behavior for that capability only.
   *
   * @public
   */
  UseOneDriveKnowledgeBase?: CapabilityState | undefined;

  /**
   * The permission state of a capability in a custom permissions profile. Valid values:
   *
   * - `DENY` – Amazon Quick denies this capability for users assigned to the profile.
   * - `ALLOW` – Amazon Quick grants this capability to users assigned to the profile. This value is only relevant when governance is enabled for the capability's category. Without governance, the default effect is always `ALLOW`. In a governed category, this value overrides the category-level deny-by-default behavior for that capability only.
   *
   * @public
   */
  QBusinessKnowledgeBase?: CapabilityState | undefined;

  /**
   * The permission state of a capability in a custom permissions profile. Valid values:
   *
   * - `DENY` – Amazon Quick denies this capability for users assigned to the profile.
   * - `ALLOW` – Amazon Quick grants this capability to users assigned to the profile. This value is only relevant when governance is enabled for the capability's category. Without governance, the default effect is always `ALLOW`. In a governed category, this value overrides the category-level deny-by-default behavior for that capability only.
   *
   * @public
   */
  CreateAndUpdateQBusinessKnowledgeBase?: CapabilityState | undefined;

  /**
   * The permission state of a capability in a custom permissions profile. Valid values:
   *
   * - `DENY` – Amazon Quick denies this capability for users assigned to the profile.
   * - `ALLOW` – Amazon Quick grants this capability to users assigned to the profile. This value is only relevant when governance is enabled for the capability's category. Without governance, the default effect is always `ALLOW`. In a governed category, this value overrides the category-level deny-by-default behavior for that capability only.
   *
   * @public
   */
  ShareQBusinessKnowledgeBase?: CapabilityState | undefined;

  /**
   * The permission state of a capability in a custom permissions profile. Valid values:
   *
   * - `DENY` – Amazon Quick denies this capability for users assigned to the profile.
   * - `ALLOW` – Amazon Quick grants this capability to users assigned to the profile. This value is only relevant when governance is enabled for the capability's category. Without governance, the default effect is always `ALLOW`. In a governed category, this value overrides the category-level deny-by-default behavior for that capability only.
   *
   * @public
   */
  UseQBusinessKnowledgeBase?: CapabilityState | undefined;

  /**
   * The permission state of a capability in a custom permissions profile. Valid values:
   *
   * - `DENY` – Amazon Quick denies this capability for users assigned to the profile.
   * - `ALLOW` – Amazon Quick grants this capability to users assigned to the profile. This value is only relevant when governance is enabled for the capability's category. Without governance, the default effect is always `ALLOW`. In a governed category, this value overrides the category-level deny-by-default behavior for that capability only.
   *
   * @public
   */
  BedrockManagedKnowledgeBase?: CapabilityState | undefined;

  /**
   * The permission state of a capability in a custom permissions profile. Valid values:
   *
   * - `DENY` – Amazon Quick denies this capability for users assigned to the profile.
   * - `ALLOW` – Amazon Quick grants this capability to users assigned to the profile. This value is only relevant when governance is enabled for the capability's category. Without governance, the default effect is always `ALLOW`. In a governed category, this value overrides the category-level deny-by-default behavior for that capability only.
   *
   * @public
   */
  CreateAndUpdateBedrockManagedKnowledgeBase?: CapabilityState | undefined;

  /**
   * The permission state of a capability in a custom permissions profile. Valid values:
   *
   * - `DENY` – Amazon Quick denies this capability for users assigned to the profile.
   * - `ALLOW` – Amazon Quick grants this capability to users assigned to the profile. This value is only relevant when governance is enabled for the capability's category. Without governance, the default effect is always `ALLOW`. In a governed category, this value overrides the category-level deny-by-default behavior for that capability only.
   *
   * @public
   */
  ShareBedrockManagedKnowledgeBase?: CapabilityState | undefined;

  /**
   * The permission state of a capability in a custom permissions profile. Valid values:
   *
   * - `DENY` – Amazon Quick denies this capability for users assigned to the profile.
   * - `ALLOW` – Amazon Quick grants this capability to users assigned to the profile. This value is only relevant when governance is enabled for the capability's category. Without governance, the default effect is always `ALLOW`. In a governed category, this value overrides the category-level deny-by-default behavior for that capability only.
   *
   * @public
   */
  UseBedrockManagedKnowledgeBase?: CapabilityState | undefined;

  /**
   * The permission state of a capability in a custom permissions profile. Valid values:
   *
   * - `DENY` – Amazon Quick denies this capability for users assigned to the profile.
   * - `ALLOW` – Amazon Quick grants this capability to users assigned to the profile. This value is only relevant when governance is enabled for the capability's category. Without governance, the default effect is always `ALLOW`. In a governed category, this value overrides the category-level deny-by-default behavior for that capability only.
   *
   * @public
   */
  BoxKnowledgeBase?: CapabilityState | undefined;

  /**
   * The permission state of a capability in a custom permissions profile. Valid values:
   *
   * - `DENY` – Amazon Quick denies this capability for users assigned to the profile.
   * - `ALLOW` – Amazon Quick grants this capability to users assigned to the profile. This value is only relevant when governance is enabled for the capability's category. Without governance, the default effect is always `ALLOW`. In a governed category, this value overrides the category-level deny-by-default behavior for that capability only.
   *
   * @public
   */
  CreateAndUpdateBoxKnowledgeBase?: CapabilityState | undefined;

  /**
   * The permission state of a capability in a custom permissions profile. Valid values:
   *
   * - `DENY` – Amazon Quick denies this capability for users assigned to the profile.
   * - `ALLOW` – Amazon Quick grants this capability to users assigned to the profile. This value is only relevant when governance is enabled for the capability's category. Without governance, the default effect is always `ALLOW`. In a governed category, this value overrides the category-level deny-by-default behavior for that capability only.
   *
   * @public
   */
  ShareBoxKnowledgeBase?: CapabilityState | undefined;

  /**
   * The permission state of a capability in a custom permissions profile. Valid values:
   *
   * - `DENY` – Amazon Quick denies this capability for users assigned to the profile.
   * - `ALLOW` – Amazon Quick grants this capability to users assigned to the profile. This value is only relevant when governance is enabled for the capability's category. Without governance, the default effect is always `ALLOW`. In a governed category, this value overrides the category-level deny-by-default behavior for that capability only.
   *
   * @public
   */
  UseBoxKnowledgeBase?: CapabilityState | undefined;

  /**
   * The permission state of a capability in a custom permissions profile. Valid values:
   *
   * - `DENY` – Amazon Quick denies this capability for users assigned to the profile.
   * - `ALLOW` – Amazon Quick grants this capability to users assigned to the profile. This value is only relevant when governance is enabled for the capability's category. Without governance, the default effect is always `ALLOW`. In a governed category, this value overrides the category-level deny-by-default behavior for that capability only.
   *
   * @public
   */
  IDCKnowledgeBase?: CapabilityState | undefined;

  /**
   * The permission state of a capability in a custom permissions profile. Valid values:
   *
   * - `DENY` – Amazon Quick denies this capability for users assigned to the profile.
   * - `ALLOW` – Amazon Quick grants this capability to users assigned to the profile. This value is only relevant when governance is enabled for the capability's category. Without governance, the default effect is always `ALLOW`. In a governed category, this value overrides the category-level deny-by-default behavior for that capability only.
   *
   * @public
   */
  CreateAndUpdateIDCKnowledgeBase?: CapabilityState | undefined;

  /**
   * The permission state of a capability in a custom permissions profile. Valid values:
   *
   * - `DENY` – Amazon Quick denies this capability for users assigned to the profile.
   * - `ALLOW` – Amazon Quick grants this capability to users assigned to the profile. This value is only relevant when governance is enabled for the capability's category. Without governance, the default effect is always `ALLOW`. In a governed category, this value overrides the category-level deny-by-default behavior for that capability only.
   *
   * @public
   */
  ShareIDCKnowledgeBase?: CapabilityState | undefined;

  /**
   * The permission state of a capability in a custom permissions profile. Valid values:
   *
   * - `DENY` – Amazon Quick denies this capability for users assigned to the profile.
   * - `ALLOW` – Amazon Quick grants this capability to users assigned to the profile. This value is only relevant when governance is enabled for the capability's category. Without governance, the default effect is always `ALLOW`. In a governed category, this value overrides the category-level deny-by-default behavior for that capability only.
   *
   * @public
   */
  UseIDCKnowledgeBase?: CapabilityState | undefined;

  /**
   * The ability to perform actions in external services through Action connectors. Actions allow users to interact with third-party systems.
   *
   * @public
   */
  Action?: CapabilityState | undefined;

  /**
   * The ability to perform actions using REST API connection connectors.
   *
   * @public
   */
  GenericHTTPAction?: CapabilityState | undefined;

  /**
   * The ability to create and update REST API connection actions.
   *
   * @public
   */
  CreateAndUpdateGenericHTTPAction?: CapabilityState | undefined;

  /**
   * The ability to share REST API connection actions.
   *
   * @public
   */
  ShareGenericHTTPAction?: CapabilityState | undefined;

  /**
   * The ability to use REST API connection actions.
   *
   * @public
   */
  UseGenericHTTPAction?: CapabilityState | undefined;

  /**
   * The ability to perform actions using Asana connectors.
   *
   * @public
   */
  AsanaAction?: CapabilityState | undefined;

  /**
   * The ability to create and update Asana actions.
   *
   * @public
   */
  CreateAndUpdateAsanaAction?: CapabilityState | undefined;

  /**
   * The ability to share Asana actions.
   *
   * @public
   */
  ShareAsanaAction?: CapabilityState | undefined;

  /**
   * The ability to use Asana actions.
   *
   * @public
   */
  UseAsanaAction?: CapabilityState | undefined;

  /**
   * The ability to perform actions using Slack connectors.
   *
   * @public
   */
  SlackAction?: CapabilityState | undefined;

  /**
   * The ability to create and update Slack actions.
   *
   * @public
   */
  CreateAndUpdateSlackAction?: CapabilityState | undefined;

  /**
   * The ability to share Slack actions.
   *
   * @public
   */
  ShareSlackAction?: CapabilityState | undefined;

  /**
   * The ability to use Slack actions.
   *
   * @public
   */
  UseSlackAction?: CapabilityState | undefined;

  /**
   * The ability to perform actions using ServiceNow connectors.
   *
   * @public
   */
  ServiceNowAction?: CapabilityState | undefined;

  /**
   * The ability to create and update ServiceNow actions.
   *
   * @public
   */
  CreateAndUpdateServiceNowAction?: CapabilityState | undefined;

  /**
   * The ability to share ServiceNow actions.
   *
   * @public
   */
  ShareServiceNowAction?: CapabilityState | undefined;

  /**
   * The ability to use ServiceNow actions.
   *
   * @public
   */
  UseServiceNowAction?: CapabilityState | undefined;

  /**
   * The ability to perform actions using Salesforce connectors.
   *
   * @public
   */
  SalesforceAction?: CapabilityState | undefined;

  /**
   * The ability to create and update Salesforce actions.
   *
   * @public
   */
  CreateAndUpdateSalesforceAction?: CapabilityState | undefined;

  /**
   * The ability to share Salesforce actions.
   *
   * @public
   */
  ShareSalesforceAction?: CapabilityState | undefined;

  /**
   * The ability to use Salesforce actions.
   *
   * @public
   */
  UseSalesforceAction?: CapabilityState | undefined;

  /**
   * The ability to perform actions using Microsoft Outlook connectors.
   *
   * @public
   */
  MSExchangeAction?: CapabilityState | undefined;

  /**
   * The ability to create and update Microsoft Outlook actions.
   *
   * @public
   */
  CreateAndUpdateMSExchangeAction?: CapabilityState | undefined;

  /**
   * The ability to share Microsoft Outlook actions.
   *
   * @public
   */
  ShareMSExchangeAction?: CapabilityState | undefined;

  /**
   * The ability to use Microsoft Outlook actions.
   *
   * @public
   */
  UseMSExchangeAction?: CapabilityState | undefined;

  /**
   * The ability to perform actions using PagerDuty Advance connectors.
   *
   * @public
   */
  PagerDutyAction?: CapabilityState | undefined;

  /**
   * The ability to create and update PagerDuty Advance actions.
   *
   * @public
   */
  CreateAndUpdatePagerDutyAction?: CapabilityState | undefined;

  /**
   * The ability to share PagerDuty Advance actions.
   *
   * @public
   */
  SharePagerDutyAction?: CapabilityState | undefined;

  /**
   * The ability to use PagerDuty Advance actions.
   *
   * @public
   */
  UsePagerDutyAction?: CapabilityState | undefined;

  /**
   * The ability to perform actions using Jira connectors.
   *
   * @public
   */
  JiraAction?: CapabilityState | undefined;

  /**
   * The ability to create and update Jira actions.
   *
   * @public
   */
  CreateAndUpdateJiraAction?: CapabilityState | undefined;

  /**
   * The ability to share Jira actions.
   *
   * @public
   */
  ShareJiraAction?: CapabilityState | undefined;

  /**
   * The ability to use Jira actions.
   *
   * @public
   */
  UseJiraAction?: CapabilityState | undefined;

  /**
   * The ability to perform actions using Atlassian Confluence Cloud connectors.
   *
   * @public
   */
  ConfluenceAction?: CapabilityState | undefined;

  /**
   * The ability to create and update Atlassian Confluence Cloud actions.
   *
   * @public
   */
  CreateAndUpdateConfluenceAction?: CapabilityState | undefined;

  /**
   * The ability to share Atlassian Confluence Cloud actions.
   *
   * @public
   */
  ShareConfluenceAction?: CapabilityState | undefined;

  /**
   * The ability to use Atlassian Confluence Cloud actions.
   *
   * @public
   */
  UseConfluenceAction?: CapabilityState | undefined;

  /**
   * The ability to perform actions using Microsoft OneDrive connectors.
   *
   * @public
   */
  OneDriveAction?: CapabilityState | undefined;

  /**
   * The ability to create and update Microsoft OneDrive actions.
   *
   * @public
   */
  CreateAndUpdateOneDriveAction?: CapabilityState | undefined;

  /**
   * The ability to share Microsoft OneDrive actions.
   *
   * @public
   */
  ShareOneDriveAction?: CapabilityState | undefined;

  /**
   * The ability to use Microsoft OneDrive actions.
   *
   * @public
   */
  UseOneDriveAction?: CapabilityState | undefined;

  /**
   * The ability to perform actions using Microsoft SharePoint Online connectors.
   *
   * @public
   */
  SharePointAction?: CapabilityState | undefined;

  /**
   * The ability to create and update Microsoft SharePoint Online actions.
   *
   * @public
   */
  CreateAndUpdateSharePointAction?: CapabilityState | undefined;

  /**
   * The ability to share Microsoft SharePoint Online actions.
   *
   * @public
   */
  ShareSharePointAction?: CapabilityState | undefined;

  /**
   * The ability to use Microsoft SharePoint Online actions.
   *
   * @public
   */
  UseSharePointAction?: CapabilityState | undefined;

  /**
   * The ability to perform actions using Microsoft Teams connectors.
   *
   * @public
   */
  MSTeamsAction?: CapabilityState | undefined;

  /**
   * The ability to create and update Microsoft Teams actions.
   *
   * @public
   */
  CreateAndUpdateMSTeamsAction?: CapabilityState | undefined;

  /**
   * The ability to share Microsoft Teams actions.
   *
   * @public
   */
  ShareMSTeamsAction?: CapabilityState | undefined;

  /**
   * The ability to use Microsoft Teams actions.
   *
   * @public
   */
  UseMSTeamsAction?: CapabilityState | undefined;

  /**
   * The ability to perform actions using Google Calendar connectors.
   *
   * @public
   */
  GoogleCalendarAction?: CapabilityState | undefined;

  /**
   * The ability to create and update Google Calendar actions.
   *
   * @public
   */
  CreateAndUpdateGoogleCalendarAction?: CapabilityState | undefined;

  /**
   * The ability to share Google Calendar actions.
   *
   * @public
   */
  ShareGoogleCalendarAction?: CapabilityState | undefined;

  /**
   * The ability to use Google Calendar actions.
   *
   * @public
   */
  UseGoogleCalendarAction?: CapabilityState | undefined;

  /**
   * The ability to perform actions using Zendesk connectors.
   *
   * @public
   */
  ZendeskAction?: CapabilityState | undefined;

  /**
   * The ability to create and update Zendesk actions.
   *
   * @public
   */
  CreateAndUpdateZendeskAction?: CapabilityState | undefined;

  /**
   * The ability to share Zendesk actions.
   *
   * @public
   */
  ShareZendeskAction?: CapabilityState | undefined;

  /**
   * The ability to use Zendesk actions.
   *
   * @public
   */
  UseZendeskAction?: CapabilityState | undefined;

  /**
   * The ability to perform actions using Smartsheet connectors.
   *
   * @public
   */
  SmartsheetAction?: CapabilityState | undefined;

  /**
   * The ability to create and update Smartsheet actions.
   *
   * @public
   */
  CreateAndUpdateSmartsheetAction?: CapabilityState | undefined;

  /**
   * The ability to share Smartsheet actions.
   *
   * @public
   */
  ShareSmartsheetAction?: CapabilityState | undefined;

  /**
   * The ability to use Smartsheet actions.
   *
   * @public
   */
  UseSmartsheetAction?: CapabilityState | undefined;

  /**
   * The ability to perform actions using SAP Business Partner connectors.
   *
   * @public
   */
  SAPBusinessPartnerAction?: CapabilityState | undefined;

  /**
   * The ability to create and update SAP Business Partner actions.
   *
   * @public
   */
  CreateAndUpdateSAPBusinessPartnerAction?: CapabilityState | undefined;

  /**
   * The ability to share SAP Business Partner actions.
   *
   * @public
   */
  ShareSAPBusinessPartnerAction?: CapabilityState | undefined;

  /**
   * The ability to use SAP Business Partner actions.
   *
   * @public
   */
  UseSAPBusinessPartnerAction?: CapabilityState | undefined;

  /**
   * The ability to perform actions using SAP Product Master connectors.
   *
   * @public
   */
  SAPProductMasterDataAction?: CapabilityState | undefined;

  /**
   * The ability to create and update SAP Product Master actions.
   *
   * @public
   */
  CreateAndUpdateSAPProductMasterDataAction?: CapabilityState | undefined;

  /**
   * The ability to share SAP Product Master actions.
   *
   * @public
   */
  ShareSAPProductMasterDataAction?: CapabilityState | undefined;

  /**
   * The ability to use SAP Product Master actions.
   *
   * @public
   */
  UseSAPProductMasterDataAction?: CapabilityState | undefined;

  /**
   * The ability to perform actions using SAP Physical Inventory connectors.
   *
   * @public
   */
  SAPPhysicalInventoryAction?: CapabilityState | undefined;

  /**
   * The ability to create and update SAP Physical Inventory actions.
   *
   * @public
   */
  CreateAndUpdateSAPPhysicalInventoryAction?: CapabilityState | undefined;

  /**
   * The ability to share SAP Physical Inventory actions.
   *
   * @public
   */
  ShareSAPPhysicalInventoryAction?: CapabilityState | undefined;

  /**
   * The ability to use SAP Physical Inventory actions.
   *
   * @public
   */
  UseSAPPhysicalInventoryAction?: CapabilityState | undefined;

  /**
   * The ability to perform actions using SAP Bill of Materials connectors.
   *
   * @public
   */
  SAPBillOfMaterialAction?: CapabilityState | undefined;

  /**
   * The ability to create and update SAP Bill of Materials actions.
   *
   * @public
   */
  CreateAndUpdateSAPBillOfMaterialAction?: CapabilityState | undefined;

  /**
   * The ability to share SAP Bill of Materials actions.
   *
   * @public
   */
  ShareSAPBillOfMaterialAction?: CapabilityState | undefined;

  /**
   * The ability to use SAP Bill of Materials actions.
   *
   * @public
   */
  UseSAPBillOfMaterialAction?: CapabilityState | undefined;

  /**
   * The ability to perform actions using SAP Material Stock connectors.
   *
   * @public
   */
  SAPMaterialStockAction?: CapabilityState | undefined;

  /**
   * The ability to create and update SAP Material Stock actions.
   *
   * @public
   */
  CreateAndUpdateSAPMaterialStockAction?: CapabilityState | undefined;

  /**
   * The ability to share SAP Material Stock actions.
   *
   * @public
   */
  ShareSAPMaterialStockAction?: CapabilityState | undefined;

  /**
   * The ability to use SAP Material Stock actions.
   *
   * @public
   */
  UseSAPMaterialStockAction?: CapabilityState | undefined;

  /**
   * The ability to perform actions using FactSet connectors.
   *
   * @public
   */
  FactSetAction?: CapabilityState | undefined;

  /**
   * The ability to create and update FactSet actions.
   *
   * @public
   */
  CreateAndUpdateFactSetAction?: CapabilityState | undefined;

  /**
   * The ability to share FactSet actions.
   *
   * @public
   */
  ShareFactSetAction?: CapabilityState | undefined;

  /**
   * The ability to use FactSet actions.
   *
   * @public
   */
  UseFactSetAction?: CapabilityState | undefined;

  /**
   * The ability to perform actions using Amazon S3 connectors.
   *
   * @public
   */
  AmazonSThreeAction?: CapabilityState | undefined;

  /**
   * The ability to create and update Amazon S3 actions.
   *
   * @public
   */
  CreateAndUpdateAmazonSThreeAction?: CapabilityState | undefined;

  /**
   * The ability to share Amazon S3 actions.
   *
   * @public
   */
  ShareAmazonSThreeAction?: CapabilityState | undefined;

  /**
   * The ability to use Amazon S3 actions.
   *
   * @public
   */
  UseAmazonSThreeAction?: CapabilityState | undefined;

  /**
   * The ability to perform actions using Textract connectors.
   *
   * @public
   */
  TextractAction?: CapabilityState | undefined;

  /**
   * The ability to create and update Textract actions.
   *
   * @public
   */
  CreateAndUpdateTextractAction?: CapabilityState | undefined;

  /**
   * The ability to share Textract actions.
   *
   * @public
   */
  ShareTextractAction?: CapabilityState | undefined;

  /**
   * The ability to use Textract actions.
   *
   * @public
   */
  UseTextractAction?: CapabilityState | undefined;

  /**
   * The ability to perform actions using Comprehend connectors.
   *
   * @public
   */
  ComprehendAction?: CapabilityState | undefined;

  /**
   * The ability to create and update Comprehend actions.
   *
   * @public
   */
  CreateAndUpdateComprehendAction?: CapabilityState | undefined;

  /**
   * The ability to share Comprehend actions.
   *
   * @public
   */
  ShareComprehendAction?: CapabilityState | undefined;

  /**
   * The ability to use Comprehend actions.
   *
   * @public
   */
  UseComprehendAction?: CapabilityState | undefined;

  /**
   * The ability to perform actions using Comprehend Medical connectors.
   *
   * @public
   */
  ComprehendMedicalAction?: CapabilityState | undefined;

  /**
   * The ability to create and update Comprehend Medical actions.
   *
   * @public
   */
  CreateAndUpdateComprehendMedicalAction?: CapabilityState | undefined;

  /**
   * The ability to share Comprehend Medical actions.
   *
   * @public
   */
  ShareComprehendMedicalAction?: CapabilityState | undefined;

  /**
   * The ability to use Comprehend Medical actions.
   *
   * @public
   */
  UseComprehendMedicalAction?: CapabilityState | undefined;

  /**
   * The ability to perform actions using Bedrock Agent connectors.
   *
   * @public
   */
  AmazonBedrockARSAction?: CapabilityState | undefined;

  /**
   * The ability to create and update Bedrock Agent actions.
   *
   * @public
   */
  CreateAndUpdateAmazonBedrockARSAction?: CapabilityState | undefined;

  /**
   * The ability to share Bedrock Agent actions.
   *
   * @public
   */
  ShareAmazonBedrockARSAction?: CapabilityState | undefined;

  /**
   * The ability to use Bedrock Agent actions.
   *
   * @public
   */
  UseAmazonBedrockARSAction?: CapabilityState | undefined;

  /**
   * The ability to perform actions using Bedrock Runtime connectors.
   *
   * @public
   */
  AmazonBedrockFSAction?: CapabilityState | undefined;

  /**
   * The ability to create and update Bedrock Runtime actions.
   *
   * @public
   */
  CreateAndUpdateAmazonBedrockFSAction?: CapabilityState | undefined;

  /**
   * The ability to share Bedrock Runtime actions.
   *
   * @public
   */
  ShareAmazonBedrockFSAction?: CapabilityState | undefined;

  /**
   * The ability to use Bedrock Runtime actions.
   *
   * @public
   */
  UseAmazonBedrockFSAction?: CapabilityState | undefined;

  /**
   * The ability to perform actions using Bedrock Data Automation Runtime connectors.
   *
   * @public
   */
  AmazonBedrockKRSAction?: CapabilityState | undefined;

  /**
   * The ability to create and update Bedrock Data Automation Runtime actions.
   *
   * @public
   */
  CreateAndUpdateAmazonBedrockKRSAction?: CapabilityState | undefined;

  /**
   * The ability to share Bedrock Data Automation Runtime actions.
   *
   * @public
   */
  ShareAmazonBedrockKRSAction?: CapabilityState | undefined;

  /**
   * The ability to use Bedrock Data Automation Runtime actions.
   *
   * @public
   */
  UseAmazonBedrockKRSAction?: CapabilityState | undefined;

  /**
   * The ability to perform actions using Model Context Protocol connectors.
   *
   * @public
   */
  MCPAction?: CapabilityState | undefined;

  /**
   * The ability to create and update Model Context Protocol actions.
   *
   * @public
   */
  CreateAndUpdateMCPAction?: CapabilityState | undefined;

  /**
   * The ability to share Model Context Protocol actions.
   *
   * @public
   */
  ShareMCPAction?: CapabilityState | undefined;

  /**
   * The ability to use Model Context Protocol actions.
   *
   * @public
   */
  UseMCPAction?: CapabilityState | undefined;

  /**
   * The ability to perform actions using OpenAPI Specification connectors.
   *
   * @public
   */
  OpenAPIAction?: CapabilityState | undefined;

  /**
   * The ability to create and update OpenAPI Specification actions.
   *
   * @public
   */
  CreateAndUpdateOpenAPIAction?: CapabilityState | undefined;

  /**
   * The ability to share OpenAPI Specification actions.
   *
   * @public
   */
  ShareOpenAPIAction?: CapabilityState | undefined;

  /**
   * The ability to use OpenAPI Specification actions.
   *
   * @public
   */
  UseOpenAPIAction?: CapabilityState | undefined;

  /**
   * The ability to perform actions using S&P Global Market Intelligence connectors.
   *
   * @public
   */
  SandPGMIAction?: CapabilityState | undefined;

  /**
   * The ability to create and update S&P Global Market Intelligence actions.
   *
   * @public
   */
  CreateAndUpdateSandPGMIAction?: CapabilityState | undefined;

  /**
   * The ability to share S&P Global Market Intelligence actions.
   *
   * @public
   */
  ShareSandPGMIAction?: CapabilityState | undefined;

  /**
   * The ability to use S&P Global Market Intelligence actions.
   *
   * @public
   */
  UseSandPGMIAction?: CapabilityState | undefined;

  /**
   * The ability to perform actions using S&P Global Energy connectors.
   *
   * @public
   */
  SandPGlobalEnergyAction?: CapabilityState | undefined;

  /**
   * The ability to create and update S&P Global Energy actions.
   *
   * @public
   */
  CreateAndUpdateSandPGlobalEnergyAction?: CapabilityState | undefined;

  /**
   * The ability to share S&P Global Energy actions.
   *
   * @public
   */
  ShareSandPGlobalEnergyAction?: CapabilityState | undefined;

  /**
   * The ability to use S&P Global Energy actions.
   *
   * @public
   */
  UseSandPGlobalEnergyAction?: CapabilityState | undefined;

  /**
   * The ability to perform actions using BambooHR connectors.
   *
   * @public
   */
  BambooHRAction?: CapabilityState | undefined;

  /**
   * The ability to create and update BambooHR actions.
   *
   * @public
   */
  CreateAndUpdateBambooHRAction?: CapabilityState | undefined;

  /**
   * The ability to share BambooHR actions.
   *
   * @public
   */
  ShareBambooHRAction?: CapabilityState | undefined;

  /**
   * The ability to use BambooHR actions.
   *
   * @public
   */
  UseBambooHRAction?: CapabilityState | undefined;

  /**
   * The ability to perform actions using Box Agent connectors.
   *
   * @public
   */
  BoxAgentAction?: CapabilityState | undefined;

  /**
   * The ability to create and update Box Agent actions.
   *
   * @public
   */
  CreateAndUpdateBoxAgentAction?: CapabilityState | undefined;

  /**
   * The ability to share Box Agent actions.
   *
   * @public
   */
  ShareBoxAgentAction?: CapabilityState | undefined;

  /**
   * The ability to use Box Agent actions.
   *
   * @public
   */
  UseBoxAgentAction?: CapabilityState | undefined;

  /**
   * The ability to perform actions using Canva Agent connectors.
   *
   * @public
   */
  CanvaAgentAction?: CapabilityState | undefined;

  /**
   * The ability to create and update Canva Agent actions.
   *
   * @public
   */
  CreateAndUpdateCanvaAgentAction?: CapabilityState | undefined;

  /**
   * The ability to share Canva Agent actions.
   *
   * @public
   */
  ShareCanvaAgentAction?: CapabilityState | undefined;

  /**
   * The ability to use Canva Agent actions.
   *
   * @public
   */
  UseCanvaAgentAction?: CapabilityState | undefined;

  /**
   * The ability to perform actions using GitHub connectors.
   *
   * @public
   */
  GithubAction?: CapabilityState | undefined;

  /**
   * The ability to create and update GitHub actions.
   *
   * @public
   */
  CreateAndUpdateGithubAction?: CapabilityState | undefined;

  /**
   * The ability to share GitHub actions.
   *
   * @public
   */
  ShareGithubAction?: CapabilityState | undefined;

  /**
   * The ability to use GitHub actions.
   *
   * @public
   */
  UseGithubAction?: CapabilityState | undefined;

  /**
   * The ability to perform actions using Notion connectors.
   *
   * @public
   */
  NotionAction?: CapabilityState | undefined;

  /**
   * The ability to create and update Notion actions.
   *
   * @public
   */
  CreateAndUpdateNotionAction?: CapabilityState | undefined;

  /**
   * The ability to share Notion actions.
   *
   * @public
   */
  ShareNotionAction?: CapabilityState | undefined;

  /**
   * The ability to use Notion actions.
   *
   * @public
   */
  UseNotionAction?: CapabilityState | undefined;

  /**
   * The ability to perform actions using Linear connectors.
   *
   * @public
   */
  LinearAction?: CapabilityState | undefined;

  /**
   * The ability to create and update Linear actions.
   *
   * @public
   */
  CreateAndUpdateLinearAction?: CapabilityState | undefined;

  /**
   * The ability to share Linear actions.
   *
   * @public
   */
  ShareLinearAction?: CapabilityState | undefined;

  /**
   * The ability to use Linear actions.
   *
   * @public
   */
  UseLinearAction?: CapabilityState | undefined;

  /**
   * The ability to perform actions using HuggingFace connectors.
   *
   * @public
   */
  HuggingFaceAction?: CapabilityState | undefined;

  /**
   * The ability to create and update HuggingFace actions.
   *
   * @public
   */
  CreateAndUpdateHuggingFaceAction?: CapabilityState | undefined;

  /**
   * The ability to share HuggingFace actions.
   *
   * @public
   */
  ShareHuggingFaceAction?: CapabilityState | undefined;

  /**
   * The ability to use HuggingFace actions.
   *
   * @public
   */
  UseHuggingFaceAction?: CapabilityState | undefined;

  /**
   * The ability to perform actions using Monday connectors.
   *
   * @public
   */
  MondayAction?: CapabilityState | undefined;

  /**
   * The ability to create and update Monday actions.
   *
   * @public
   */
  CreateAndUpdateMondayAction?: CapabilityState | undefined;

  /**
   * The ability to share Monday actions.
   *
   * @public
   */
  ShareMondayAction?: CapabilityState | undefined;

  /**
   * The ability to use Monday actions.
   *
   * @public
   */
  UseMondayAction?: CapabilityState | undefined;

  /**
   * The ability to perform actions using Hubspot connectors.
   *
   * @public
   */
  HubspotAction?: CapabilityState | undefined;

  /**
   * The ability to create and update Hubspot actions.
   *
   * @public
   */
  CreateAndUpdateHubspotAction?: CapabilityState | undefined;

  /**
   * The ability to share Hubspot actions.
   *
   * @public
   */
  ShareHubspotAction?: CapabilityState | undefined;

  /**
   * The ability to use Hubspot actions.
   *
   * @public
   */
  UseHubspotAction?: CapabilityState | undefined;

  /**
   * The ability to perform actions using Intercom connectors.
   *
   * @public
   */
  IntercomAction?: CapabilityState | undefined;

  /**
   * The ability to create and update Intercom actions.
   *
   * @public
   */
  CreateAndUpdateIntercomAction?: CapabilityState | undefined;

  /**
   * The ability to share Intercom actions.
   *
   * @public
   */
  ShareIntercomAction?: CapabilityState | undefined;

  /**
   * The ability to use Intercom actions.
   *
   * @public
   */
  UseIntercomAction?: CapabilityState | undefined;

  /**
   * The ability to perform actions using New Relic connectors.
   *
   * @public
   */
  NewRelicAction?: CapabilityState | undefined;

  /**
   * The ability to create and update New Relic actions.
   *
   * @public
   */
  CreateAndUpdateNewRelicAction?: CapabilityState | undefined;

  /**
   * The ability to share New Relic actions.
   *
   * @public
   */
  ShareNewRelicAction?: CapabilityState | undefined;

  /**
   * The ability to use New Relic actions.
   *
   * @public
   */
  UseNewRelicAction?: CapabilityState | undefined;

  /**
   * The ability to perform actions using PagerDuty Agent connectors.
   *
   * @public
   */
  PagerDutyAgentAction?: CapabilityState | undefined;

  /**
   * The ability to create and update PagerDuty Agent actions.
   *
   * @public
   */
  CreateAndUpdatePagerDutyAgentAction?: CapabilityState | undefined;

  /**
   * The ability to share PagerDuty Agent actions.
   *
   * @public
   */
  SharePagerDutyAgentAction?: CapabilityState | undefined;

  /**
   * The ability to use PagerDuty Agent actions.
   *
   * @public
   */
  UsePagerDutyAgentAction?: CapabilityState | undefined;

  /**
   * The ability to perform actions using Visier Agent connectors.
   *
   * @public
   */
  VisierAgentAction?: CapabilityState | undefined;

  /**
   * The ability to create and update Visier Agent actions.
   *
   * @public
   */
  CreateAndUpdateVisierAgentAction?: CapabilityState | undefined;

  /**
   * The ability to share Visier Agent actions.
   *
   * @public
   */
  ShareVisierAgentAction?: CapabilityState | undefined;

  /**
   * The ability to use Visier Agent actions.
   *
   * @public
   */
  UseVisierAgentAction?: CapabilityState | undefined;

  /**
   * The ability to perform actions using Zoom connectors.
   *
   * @public
   */
  ZoomAction?: CapabilityState | undefined;

  /**
   * The ability to create and update Zoom actions.
   *
   * @public
   */
  CreateAndUpdateZoomAction?: CapabilityState | undefined;

  /**
   * The ability to share Zoom actions.
   *
   * @public
   */
  ShareZoomAction?: CapabilityState | undefined;

  /**
   * The ability to use Zoom actions.
   *
   * @public
   */
  UseZoomAction?: CapabilityState | undefined;

  /**
   * The ability to perform actions using Snowflake Cortex Agent connectors.
   *
   * @public
   */
  SnowFlakeAction?: CapabilityState | undefined;

  /**
   * The ability to create and update Snowflake Cortex Agent actions.
   *
   * @public
   */
  CreateAndUpdateSnowFlakeAction?: CapabilityState | undefined;

  /**
   * The ability to share Snowflake Cortex Agent actions.
   *
   * @public
   */
  ShareSnowFlakeAction?: CapabilityState | undefined;

  /**
   * The ability to use Snowflake Cortex Agent actions.
   *
   * @public
   */
  UseSnowFlakeAction?: CapabilityState | undefined;

  /**
   * The ability to perform actions using Zapier Agent connectors.
   *
   * @public
   */
  ZapierAction?: CapabilityState | undefined;

  /**
   * The ability to create and update Zapier Agent actions.
   *
   * @public
   */
  CreateAndUpdateZapierAction?: CapabilityState | undefined;

  /**
   * The ability to share Zapier Agent actions.
   *
   * @public
   */
  ShareZapierAction?: CapabilityState | undefined;

  /**
   * The ability to use Zapier Agent actions.
   *
   * @public
   */
  UseZapierAction?: CapabilityState | undefined;

  /**
   * The ability to perform actions using Airtable connectors.
   *
   * @public
   */
  AirtableAction?: CapabilityState | undefined;

  /**
   * The ability to create and update Airtable actions.
   *
   * @public
   */
  CreateAndUpdateAirtableAction?: CapabilityState | undefined;

  /**
   * The ability to share Airtable actions.
   *
   * @public
   */
  ShareAirtableAction?: CapabilityState | undefined;

  /**
   * The ability to use Airtable actions.
   *
   * @public
   */
  UseAirtableAction?: CapabilityState | undefined;

  /**
   * The ability to perform actions using Dropbox connectors.
   *
   * @public
   */
  DropboxAction?: CapabilityState | undefined;

  /**
   * The ability to create and update Dropbox actions.
   *
   * @public
   */
  CreateAndUpdateDropboxAction?: CapabilityState | undefined;

  /**
   * The ability to share Dropbox actions.
   *
   * @public
   */
  ShareDropboxAction?: CapabilityState | undefined;

  /**
   * The ability to use Dropbox actions.
   *
   * @public
   */
  UseDropboxAction?: CapabilityState | undefined;

  /**
   * The ability to perform actions using Gmail connectors.
   *
   * @public
   */
  GmailAction?: CapabilityState | undefined;

  /**
   * The ability to create and update Gmail actions.
   *
   * @public
   */
  CreateAndUpdateGmailAction?: CapabilityState | undefined;

  /**
   * The ability to share Gmail actions.
   *
   * @public
   */
  ShareGmailAction?: CapabilityState | undefined;

  /**
   * The ability to use Gmail actions.
   *
   * @public
   */
  UseGmailAction?: CapabilityState | undefined;

  /**
   * The ability to perform actions using Google Analytics connectors.
   *
   * @public
   */
  GoogleAnalyticsAction?: CapabilityState | undefined;

  /**
   * The ability to create and update Google Analytics actions.
   *
   * @public
   */
  CreateAndUpdateGoogleAnalyticsAction?: CapabilityState | undefined;

  /**
   * The ability to share Google Analytics actions.
   *
   * @public
   */
  ShareGoogleAnalyticsAction?: CapabilityState | undefined;

  /**
   * The ability to use Google Analytics actions.
   *
   * @public
   */
  UseGoogleAnalyticsAction?: CapabilityState | undefined;

  /**
   * The ability to perform actions using Google Docs connectors.
   *
   * @public
   */
  GoogleDocsAction?: CapabilityState | undefined;

  /**
   * The ability to create and update Google Docs actions.
   *
   * @public
   */
  CreateAndUpdateGoogleDocsAction?: CapabilityState | undefined;

  /**
   * The ability to share Google Docs actions.
   *
   * @public
   */
  ShareGoogleDocsAction?: CapabilityState | undefined;

  /**
   * The ability to use Google Docs actions.
   *
   * @public
   */
  UseGoogleDocsAction?: CapabilityState | undefined;

  /**
   * The ability to perform actions using Google Drive connectors.
   *
   * @public
   */
  GoogleDriveAction?: CapabilityState | undefined;

  /**
   * The ability to create and update Google Drive actions.
   *
   * @public
   */
  CreateAndUpdateGoogleDriveAction?: CapabilityState | undefined;

  /**
   * The ability to share Google Drive actions.
   *
   * @public
   */
  ShareGoogleDriveAction?: CapabilityState | undefined;

  /**
   * The ability to use Google Drive actions.
   *
   * @public
   */
  UseGoogleDriveAction?: CapabilityState | undefined;

  /**
   * The ability to perform actions using Google Meet connectors.
   *
   * @public
   */
  GoogleMeetAction?: CapabilityState | undefined;

  /**
   * The ability to create and update Google Meet actions.
   *
   * @public
   */
  CreateAndUpdateGoogleMeetAction?: CapabilityState | undefined;

  /**
   * The ability to share Google Meet actions.
   *
   * @public
   */
  ShareGoogleMeetAction?: CapabilityState | undefined;

  /**
   * The ability to use Google Meet actions.
   *
   * @public
   */
  UseGoogleMeetAction?: CapabilityState | undefined;

  /**
   * The ability to perform actions using Google Sheets connectors.
   *
   * @public
   */
  GoogleSheetsAction?: CapabilityState | undefined;

  /**
   * The ability to create and update Google Sheets actions.
   *
   * @public
   */
  CreateAndUpdateGoogleSheetsAction?: CapabilityState | undefined;

  /**
   * The ability to share Google Sheets actions.
   *
   * @public
   */
  ShareGoogleSheetsAction?: CapabilityState | undefined;

  /**
   * The ability to use Google Sheets actions.
   *
   * @public
   */
  UseGoogleSheetsAction?: CapabilityState | undefined;

  /**
   * The ability to perform actions using Google Slides connectors.
   *
   * @public
   */
  GoogleSlidesAction?: CapabilityState | undefined;

  /**
   * The ability to create and update Google Slides actions.
   *
   * @public
   */
  CreateAndUpdateGoogleSlidesAction?: CapabilityState | undefined;

  /**
   * The ability to share Google Slides actions.
   *
   * @public
   */
  ShareGoogleSlidesAction?: CapabilityState | undefined;

  /**
   * The ability to use Google Slides actions.
   *
   * @public
   */
  UseGoogleSlidesAction?: CapabilityState | undefined;

  /**
   * The ability to perform actions using QuickBooks connectors.
   *
   * @public
   */
  QuickBooksAction?: CapabilityState | undefined;

  /**
   * The ability to create and update QuickBooks actions.
   *
   * @public
   */
  CreateAndUpdateQuickBooksAction?: CapabilityState | undefined;

  /**
   * The ability to share QuickBooks actions.
   *
   * @public
   */
  ShareQuickBooksAction?: CapabilityState | undefined;

  /**
   * The ability to use QuickBooks actions.
   *
   * @public
   */
  UseQuickBooksAction?: CapabilityState | undefined;

  /**
   * The ability to perform actions using Figma connectors.
   *
   * @public
   */
  FigmaAction?: CapabilityState | undefined;

  /**
   * The ability to create and update Figma actions.
   *
   * @public
   */
  CreateAndUpdateFigmaAction?: CapabilityState | undefined;

  /**
   * The ability to share Figma actions.
   *
   * @public
   */
  ShareFigmaAction?: CapabilityState | undefined;

  /**
   * The ability to use Figma actions.
   *
   * @public
   */
  UseFigmaAction?: CapabilityState | undefined;

  /**
   * The ability to perform actions using WhatsApp connectors.
   *
   * @public
   */
  WhatsAppAction?: CapabilityState | undefined;

  /**
   * The ability to create and update WhatsApp actions.
   *
   * @public
   */
  CreateAndUpdateWhatsAppAction?: CapabilityState | undefined;

  /**
   * The ability to share WhatsApp actions.
   *
   * @public
   */
  ShareWhatsAppAction?: CapabilityState | undefined;

  /**
   * The ability to use WhatsApp actions.
   *
   * @public
   */
  UseWhatsAppAction?: CapabilityState | undefined;

  /**
   * The ability to perform actions using Google Chat connectors.
   *
   * @public
   */
  GoogleChatAction?: CapabilityState | undefined;

  /**
   * The ability to create and update Google Chat actions.
   *
   * @public
   */
  CreateAndUpdateGoogleChatAction?: CapabilityState | undefined;

  /**
   * The ability to share Google Chat actions.
   *
   * @public
   */
  ShareGoogleChatAction?: CapabilityState | undefined;

  /**
   * The ability to use Google Chat actions.
   *
   * @public
   */
  UseGoogleChatAction?: CapabilityState | undefined;

  /**
   * The ability to perform actions using Microsoft OneNote connectors.
   *
   * @public
   */
  OneNoteAction?: CapabilityState | undefined;

  /**
   * The ability to create and update Microsoft OneNote actions.
   *
   * @public
   */
  CreateAndUpdateOneNoteAction?: CapabilityState | undefined;

  /**
   * The ability to share Microsoft OneNote actions.
   *
   * @public
   */
  ShareOneNoteAction?: CapabilityState | undefined;

  /**
   * The ability to use Microsoft OneNote actions.
   *
   * @public
   */
  UseOneNoteAction?: CapabilityState | undefined;

  /**
   * The ability to perform actions using Shopify connectors.
   *
   * @public
   */
  ShopifyAction?: CapabilityState | undefined;

  /**
   * The ability to create and update Shopify actions.
   *
   * @public
   */
  CreateAndUpdateShopifyAction?: CapabilityState | undefined;

  /**
   * The ability to share Shopify actions.
   *
   * @public
   */
  ShareShopifyAction?: CapabilityState | undefined;

  /**
   * The ability to use Shopify actions.
   *
   * @public
   */
  UseShopifyAction?: CapabilityState | undefined;

  /**
   * The ability to perform actions using Adobe Marketing Agent connectors.
   *
   * @public
   */
  AdobeAction?: CapabilityState | undefined;

  /**
   * The ability to create and update Adobe Marketing Agent actions.
   *
   * @public
   */
  CreateAndUpdateAdobeAction?: CapabilityState | undefined;

  /**
   * The ability to share Adobe Marketing Agent actions.
   *
   * @public
   */
  ShareAdobeAction?: CapabilityState | undefined;

  /**
   * The ability to use Adobe Marketing Agent actions.
   *
   * @public
   */
  UseAdobeAction?: CapabilityState | undefined;

  /**
   * The ability to perform actions using Cisco Webex Video Messaging Agent connectors.
   *
   * @public
   */
  CiscoWebexVidcastAction?: CapabilityState | undefined;

  /**
   * The ability to create and update Cisco Webex Video Messaging Agent actions.
   *
   * @public
   */
  CreateAndUpdateCiscoWebexVidcastAction?: CapabilityState | undefined;

  /**
   * The ability to share Cisco Webex Video Messaging Agent actions.
   *
   * @public
   */
  ShareCiscoWebexVidcastAction?: CapabilityState | undefined;

  /**
   * The ability to use Cisco Webex Video Messaging Agent actions.
   *
   * @public
   */
  UseCiscoWebexVidcastAction?: CapabilityState | undefined;

  /**
   * The ability to perform actions using Cisco Webex Meetings connectors.
   *
   * @public
   */
  CiscoWebexMeetingsAction?: CapabilityState | undefined;

  /**
   * The ability to create and update Cisco Webex Meetings actions.
   *
   * @public
   */
  CreateAndUpdateCiscoWebexMeetingsAction?: CapabilityState | undefined;

  /**
   * The ability to share Cisco Webex Meetings actions.
   *
   * @public
   */
  ShareCiscoWebexMeetingsAction?: CapabilityState | undefined;

  /**
   * The ability to use Cisco Webex Meetings actions.
   *
   * @public
   */
  UseCiscoWebexMeetingsAction?: CapabilityState | undefined;

  /**
   * The ability to perform actions using Dun and Bradstreet connectors.
   *
   * @public
   */
  DunAndBradstreetAction?: CapabilityState | undefined;

  /**
   * The ability to create and update Dun and Bradstreet actions.
   *
   * @public
   */
  CreateAndUpdateDunAndBradstreetAction?: CapabilityState | undefined;

  /**
   * The ability to share Dun and Bradstreet actions.
   *
   * @public
   */
  ShareDunAndBradstreetAction?: CapabilityState | undefined;

  /**
   * The ability to use Dun and Bradstreet actions.
   *
   * @public
   */
  UseDunAndBradstreetAction?: CapabilityState | undefined;

  /**
   * The ability to perform actions using HG Insights Agent connectors.
   *
   * @public
   */
  HGInsightsAction?: CapabilityState | undefined;

  /**
   * The ability to create and update HG Insights Agent actions.
   *
   * @public
   */
  CreateAndUpdateHGInsightsAction?: CapabilityState | undefined;

  /**
   * The ability to share HG Insights Agent actions.
   *
   * @public
   */
  ShareHGInsightsAction?: CapabilityState | undefined;

  /**
   * The ability to use HG Insights Agent actions.
   *
   * @public
   */
  UseHGInsightsAction?: CapabilityState | undefined;

  /**
   * The ability to perform actions using ZoomInfo Agent connectors.
   *
   * @public
   */
  ZoomInfoAction?: CapabilityState | undefined;

  /**
   * The ability to create and update ZoomInfo Agent actions.
   *
   * @public
   */
  CreateAndUpdateZoomInfoAction?: CapabilityState | undefined;

  /**
   * The ability to share ZoomInfo Agent actions.
   *
   * @public
   */
  ShareZoomInfoAction?: CapabilityState | undefined;

  /**
   * The ability to use ZoomInfo Agent actions.
   *
   * @public
   */
  UseZoomInfoAction?: CapabilityState | undefined;

  /**
   * The ability to perform actions using Moody's GenAI Ready Data connectors.
   *
   * @public
   */
  MoodysAction?: CapabilityState | undefined;

  /**
   * The ability to create and update Moody's GenAI Ready Data actions.
   *
   * @public
   */
  CreateAndUpdateMoodysAction?: CapabilityState | undefined;

  /**
   * The ability to share Moody's GenAI Ready Data actions.
   *
   * @public
   */
  ShareMoodysAction?: CapabilityState | undefined;

  /**
   * The ability to use Moody's GenAI Ready Data actions.
   *
   * @public
   */
  UseMoodysAction?: CapabilityState | undefined;

  /**
   * The ability to perform actions using Bee connectors.
   *
   * @public
   */
  BeeAction?: CapabilityState | undefined;

  /**
   * The ability to create and update Bee actions.
   *
   * @public
   */
  CreateAndUpdateBeeAction?: CapabilityState | undefined;

  /**
   * The ability to share Bee actions.
   *
   * @public
   */
  ShareBeeAction?: CapabilityState | undefined;

  /**
   * The ability to use Bee actions.
   *
   * @public
   */
  UseBeeAction?: CapabilityState | undefined;

  /**
   * The ability to perform actions using Gong connectors.
   *
   * @public
   */
  GongAction?: CapabilityState | undefined;

  /**
   * The ability to create and update Gong actions.
   *
   * @public
   */
  CreateAndUpdateGongAction?: CapabilityState | undefined;

  /**
   * The ability to share Gong actions.
   *
   * @public
   */
  ShareGongAction?: CapabilityState | undefined;

  /**
   * The ability to use Gong actions.
   *
   * @public
   */
  UseGongAction?: CapabilityState | undefined;

  /**
   * The ability to perform Topic-related actions.
   *
   * @public
   */
  Topic?: CapabilityState | undefined;

  /**
   * The ability to Edit Visual with AI
   *
   * @public
   */
  EditVisualWithQ?: CapabilityState | undefined;

  /**
   * The ability to Build Calculation with AI
   *
   * @public
   */
  BuildCalculatedFieldWithQ?: CapabilityState | undefined;

  /**
   * The ability to Create Executive Summary
   *
   * @public
   */
  CreateDashboardExecutiveSummaryWithQ?: CapabilityState | undefined;

  /**
   * The ability to perform space-related actions.
   *
   * @public
   */
  Space?: CapabilityState | undefined;

  /**
   * The ability to create spaces.
   *
   * @public
   */
  CreateSpaces?: CapabilityState | undefined;

  /**
   * The ability to share spaces with other users and groups.
   *
   * @public
   */
  ShareSpaces?: CapabilityState | undefined;

  /**
   * The ability to perform chat-related actions.
   *
   * @public
   */
  ChatAgent?: CapabilityState | undefined;

  /**
   * The ability to create chat agents.
   *
   * @public
   */
  CreateChatAgents?: CapabilityState | undefined;

  /**
   * The ability to share chat agents with other users and groups.
   *
   * @public
   */
  ShareChatAgents?: CapabilityState | undefined;

  /**
   * The ability to perform research-related actions.
   *
   * @public
   */
  Research?: CapabilityState | undefined;

  /**
   * The ability to enable users to upgrade their user role.
   *
   * @public
   */
  SelfUpgradeUserRole?: CapabilityState | undefined;

  /**
   * The ability to perform Extension-related actions.
   *
   * @public
   */
  Extension?: CapabilityState | undefined;

  /**
   * The ability to use Amazon Quick through the browser extension for Chrome, Firefox, and Edge.
   *
   * @public
   */
  UseBrowserExtension?: CapabilityState | undefined;

  /**
   * The ability to use Amazon Quick through the Microsoft Word add-in.
   *
   * @public
   */
  UseWordAddInExtension?: CapabilityState | undefined;

  /**
   * The ability to use Amazon Quick through the Microsoft Outlook add-in.
   *
   * @public
   */
  UseOutlookAddInExtension?: CapabilityState | undefined;

  /**
   * The ability to use Amazon Quick through the Microsoft Excel add-in.
   *
   * @public
   */
  UseExcelAddInExtension?: CapabilityState | undefined;

  /**
   * The ability to use Amazon Quick through the Microsoft PowerPoint add-in.
   *
   * @public
   */
  UsePowerpointAddInExtension?: CapabilityState | undefined;

  /**
   * The ability to create, update, delete and view shared folders (both restricted and unrestricted), ability to add any asset to shared folders, and ability to share the folders.
   *
   * **Note:** This does *not* prevent inheriting access to assets that others share with them through folder membership.
   *
   * @public
   */
  ManageSharedFolders?: CapabilityState | undefined;

  /**
   * The ability to generate analysis using AI
   *
   * @public
   */
  GenerateAnalyses?: CapabilityState | undefined;

  /**
   * The ability to perform Story-related actions.
   *
   * @public
   */
  Story?: CapabilityState | undefined;

  /**
   * The ability to perform Scenario-related actions.
   *
   * @public
   */
  Scenario?: CapabilityState | undefined;

  /**
   * The ability to manage trigger-related settings for flows and automations.
   *
   * @public
   */
  Trigger?: CapabilityState | undefined;

  /**
   * The ability to create, view, edit, delete, and run schedule triggers for flows and automations.
   *
   * @public
   */
  ScheduleTrigger?: CapabilityState | undefined;

  /**
   * The ability to create, view, edit, delete, and run inbound email triggers for flows and automations.
   *
   * @public
   */
  InboundEmailTrigger?: CapabilityState | undefined;

  /**
   * The ability to create, view, edit, delete, and run Quick event triggers for flows and automations.
   *
   * @public
   */
  QuickEventTrigger?: CapabilityState | undefined;

  /**
   * The ability to create, update, and share file data sources.
   *
   * @public
   */
  FileDataSource?: CapabilityState | undefined;

  /**
   * The ability to create file data sources.
   *
   * @public
   */
  CreateFileDataSource?: CapabilityState | undefined;

  /**
   * The ability to update file data sources.
   *
   * @public
   */
  UpdateFileDataSource?: CapabilityState | undefined;

  /**
   * The ability to share file data sources.
   *
   * @public
   */
  ShareFileDataSource?: CapabilityState | undefined;

  /**
   * The ability to create, update, and share Amazon S3 data sources.
   *
   * @public
   */
  S3DataSource?: CapabilityState | undefined;

  /**
   * The ability to create Amazon S3 data sources.
   *
   * @public
   */
  CreateS3DataSource?: CapabilityState | undefined;

  /**
   * The ability to update Amazon S3 data sources.
   *
   * @public
   */
  UpdateS3DataSource?: CapabilityState | undefined;

  /**
   * The ability to share Amazon S3 data sources.
   *
   * @public
   */
  ShareS3DataSource?: CapabilityState | undefined;

  /**
   * The ability to create, update, and share Amazon S3 Analytics data sources.
   *
   * @public
   */
  S3AnalyticsDataSource?: CapabilityState | undefined;

  /**
   * The ability to create Amazon S3 Analytics data sources.
   *
   * @public
   */
  CreateS3AnalyticsDataSource?: CapabilityState | undefined;

  /**
   * The ability to update Amazon S3 Analytics data sources.
   *
   * @public
   */
  UpdateS3AnalyticsDataSource?: CapabilityState | undefined;

  /**
   * The ability to share Amazon S3 Analytics data sources.
   *
   * @public
   */
  ShareS3AnalyticsDataSource?: CapabilityState | undefined;

  /**
   * The ability to create, update, and share Amazon S3 Tables data sources.
   *
   * @public
   */
  S3TablesDataSource?: CapabilityState | undefined;

  /**
   * The ability to create Amazon S3 Tables data sources.
   *
   * @public
   */
  CreateS3TablesDataSource?: CapabilityState | undefined;

  /**
   * The ability to update Amazon S3 Tables data sources.
   *
   * @public
   */
  UpdateS3TablesDataSource?: CapabilityState | undefined;

  /**
   * The ability to share Amazon S3 Tables data sources.
   *
   * @public
   */
  ShareS3TablesDataSource?: CapabilityState | undefined;

  /**
   * The ability to create, update, and share Amazon Athena data sources.
   *
   * @public
   */
  AthenaDataSource?: CapabilityState | undefined;

  /**
   * The ability to create Amazon Athena data sources.
   *
   * @public
   */
  CreateAthenaDataSource?: CapabilityState | undefined;

  /**
   * The ability to update Amazon Athena data sources.
   *
   * @public
   */
  UpdateAthenaDataSource?: CapabilityState | undefined;

  /**
   * The ability to share Amazon Athena data sources.
   *
   * @public
   */
  ShareAthenaDataSource?: CapabilityState | undefined;

  /**
   * The ability to create, update, and share auto-discovered Amazon RDS data sources.
   *
   * @public
   */
  RdsDataSource?: CapabilityState | undefined;

  /**
   * The ability to create auto-discovered Amazon RDS data sources.
   *
   * @public
   */
  CreateRdsDataSource?: CapabilityState | undefined;

  /**
   * The ability to update auto-discovered Amazon RDS data sources.
   *
   * @public
   */
  UpdateRdsDataSource?: CapabilityState | undefined;

  /**
   * The ability to share auto-discovered Amazon RDS data sources.
   *
   * @public
   */
  ShareRdsDataSource?: CapabilityState | undefined;

  /**
   * The ability to create, update, and share auto-discovered Amazon Redshift data sources.
   *
   * @public
   */
  RedshiftAutoDiscoveredDataSource?: CapabilityState | undefined;

  /**
   * The ability to create auto-discovered Amazon Redshift data sources.
   *
   * @public
   */
  CreateRedshiftAutoDiscoveredDataSource?: CapabilityState | undefined;

  /**
   * The ability to update auto-discovered Amazon Redshift data sources.
   *
   * @public
   */
  UpdateRedshiftAutoDiscoveredDataSource?: CapabilityState | undefined;

  /**
   * The ability to share auto-discovered Amazon Redshift data sources.
   *
   * @public
   */
  ShareRedshiftAutoDiscoveredDataSource?: CapabilityState | undefined;

  /**
   * The ability to create, update, and share manually configured Amazon Redshift data sources.
   *
   * @public
   */
  RedshiftManualDataSource?: CapabilityState | undefined;

  /**
   * The ability to create manually configured Amazon Redshift data sources.
   *
   * @public
   */
  CreateRedshiftManualDataSource?: CapabilityState | undefined;

  /**
   * The ability to update manually configured Amazon Redshift data sources.
   *
   * @public
   */
  UpdateRedshiftManualDataSource?: CapabilityState | undefined;

  /**
   * The ability to share manually configured Amazon Redshift data sources.
   *
   * @public
   */
  ShareRedshiftManualDataSource?: CapabilityState | undefined;

  /**
   * The ability to create, update, and share Amazon OpenSearch Service data sources.
   *
   * @public
   */
  OpenSearchDataSource?: CapabilityState | undefined;

  /**
   * The ability to create Amazon OpenSearch Service data sources.
   *
   * @public
   */
  CreateOpenSearchDataSource?: CapabilityState | undefined;

  /**
   * The ability to update Amazon OpenSearch Service data sources.
   *
   * @public
   */
  UpdateOpenSearchDataSource?: CapabilityState | undefined;

  /**
   * The ability to share Amazon OpenSearch Service data sources.
   *
   * @public
   */
  ShareOpenSearchDataSource?: CapabilityState | undefined;

  /**
   * The ability to create, update, and share Amazon Timestream data sources.
   *
   * @public
   */
  TimestreamDataSource?: CapabilityState | undefined;

  /**
   * The ability to create Amazon Timestream data sources.
   *
   * @public
   */
  CreateTimestreamDataSource?: CapabilityState | undefined;

  /**
   * The ability to update Amazon Timestream data sources.
   *
   * @public
   */
  UpdateTimestreamDataSource?: CapabilityState | undefined;

  /**
   * The ability to share Amazon Timestream data sources.
   *
   * @public
   */
  ShareTimestreamDataSource?: CapabilityState | undefined;

  /**
   * The ability to create, update, and share Amazon Aurora data sources.
   *
   * @public
   */
  AuroraDataSource?: CapabilityState | undefined;

  /**
   * The ability to create Amazon Aurora data sources.
   *
   * @public
   */
  CreateAuroraDataSource?: CapabilityState | undefined;

  /**
   * The ability to update Amazon Aurora data sources.
   *
   * @public
   */
  UpdateAuroraDataSource?: CapabilityState | undefined;

  /**
   * The ability to share Amazon Aurora data sources.
   *
   * @public
   */
  ShareAuroraDataSource?: CapabilityState | undefined;

  /**
   * The ability to create, update, and share MySQL data sources.
   *
   * @public
   */
  MySqlDataSource?: CapabilityState | undefined;

  /**
   * The ability to create MySQL data sources.
   *
   * @public
   */
  CreateMySqlDataSource?: CapabilityState | undefined;

  /**
   * The ability to update MySQL data sources.
   *
   * @public
   */
  UpdateMySqlDataSource?: CapabilityState | undefined;

  /**
   * The ability to share MySQL data sources.
   *
   * @public
   */
  ShareMySqlDataSource?: CapabilityState | undefined;

  /**
   * The ability to create, update, and share PostgreSQL data sources.
   *
   * @public
   */
  PostgreSqlDataSource?: CapabilityState | undefined;

  /**
   * The ability to create PostgreSQL data sources.
   *
   * @public
   */
  CreatePostgreSqlDataSource?: CapabilityState | undefined;

  /**
   * The ability to update PostgreSQL data sources.
   *
   * @public
   */
  UpdatePostgreSqlDataSource?: CapabilityState | undefined;

  /**
   * The ability to share PostgreSQL data sources.
   *
   * @public
   */
  SharePostgreSqlDataSource?: CapabilityState | undefined;

  /**
   * The ability to create, update, and share Oracle data sources.
   *
   * @public
   */
  OracleDataSource?: CapabilityState | undefined;

  /**
   * The ability to create Oracle data sources.
   *
   * @public
   */
  CreateOracleDataSource?: CapabilityState | undefined;

  /**
   * The ability to update Oracle data sources.
   *
   * @public
   */
  UpdateOracleDataSource?: CapabilityState | undefined;

  /**
   * The ability to share Oracle data sources.
   *
   * @public
   */
  ShareOracleDataSource?: CapabilityState | undefined;

  /**
   * The ability to create, update, and share SQL Server data sources.
   *
   * @public
   */
  SqlServerDataSource?: CapabilityState | undefined;

  /**
   * The ability to create SQL Server data sources.
   *
   * @public
   */
  CreateSqlServerDataSource?: CapabilityState | undefined;

  /**
   * The ability to update SQL Server data sources.
   *
   * @public
   */
  UpdateSqlServerDataSource?: CapabilityState | undefined;

  /**
   * The ability to share SQL Server data sources.
   *
   * @public
   */
  ShareSqlServerDataSource?: CapabilityState | undefined;

  /**
   * The ability to create, update, and share MariaDB data sources.
   *
   * @public
   */
  MariaDbDataSource?: CapabilityState | undefined;

  /**
   * The ability to create MariaDB data sources.
   *
   * @public
   */
  CreateMariaDbDataSource?: CapabilityState | undefined;

  /**
   * The ability to update MariaDB data sources.
   *
   * @public
   */
  UpdateMariaDbDataSource?: CapabilityState | undefined;

  /**
   * The ability to share MariaDB data sources.
   *
   * @public
   */
  ShareMariaDbDataSource?: CapabilityState | undefined;

  /**
   * The ability to create, update, and share Snowflake data sources.
   *
   * @public
   */
  SnowflakeDataSource?: CapabilityState | undefined;

  /**
   * The ability to create Snowflake data sources.
   *
   * @public
   */
  CreateSnowflakeDataSource?: CapabilityState | undefined;

  /**
   * The ability to update Snowflake data sources.
   *
   * @public
   */
  UpdateSnowflakeDataSource?: CapabilityState | undefined;

  /**
   * The ability to share Snowflake data sources.
   *
   * @public
   */
  ShareSnowflakeDataSource?: CapabilityState | undefined;

  /**
   * The ability to create, update, and share Google BigQuery data sources.
   *
   * @public
   */
  GoogleBigQueryDataSource?: CapabilityState | undefined;

  /**
   * The ability to create Google BigQuery data sources.
   *
   * @public
   */
  CreateGoogleBigQueryDataSource?: CapabilityState | undefined;

  /**
   * The ability to update Google BigQuery data sources.
   *
   * @public
   */
  UpdateGoogleBigQueryDataSource?: CapabilityState | undefined;

  /**
   * The ability to share Google BigQuery data sources.
   *
   * @public
   */
  ShareGoogleBigQueryDataSource?: CapabilityState | undefined;

  /**
   * The ability to create, update, and share Databricks data sources.
   *
   * @public
   */
  DatabricksDataSource?: CapabilityState | undefined;

  /**
   * The ability to create Databricks data sources.
   *
   * @public
   */
  CreateDatabricksDataSource?: CapabilityState | undefined;

  /**
   * The ability to update Databricks data sources.
   *
   * @public
   */
  UpdateDatabricksDataSource?: CapabilityState | undefined;

  /**
   * The ability to share Databricks data sources.
   *
   * @public
   */
  ShareDatabricksDataSource?: CapabilityState | undefined;

  /**
   * The ability to create, update, and share Starburst data sources.
   *
   * @public
   */
  StarburstDataSource?: CapabilityState | undefined;

  /**
   * The ability to create Starburst data sources.
   *
   * @public
   */
  CreateStarburstDataSource?: CapabilityState | undefined;

  /**
   * The ability to update Starburst data sources.
   *
   * @public
   */
  UpdateStarburstDataSource?: CapabilityState | undefined;

  /**
   * The ability to share Starburst data sources.
   *
   * @public
   */
  ShareStarburstDataSource?: CapabilityState | undefined;

  /**
   * The ability to create, update, and share Trino data sources.
   *
   * @public
   */
  TrinoDataSource?: CapabilityState | undefined;

  /**
   * The ability to create Trino data sources.
   *
   * @public
   */
  CreateTrinoDataSource?: CapabilityState | undefined;

  /**
   * The ability to update Trino data sources.
   *
   * @public
   */
  UpdateTrinoDataSource?: CapabilityState | undefined;

  /**
   * The ability to share Trino data sources.
   *
   * @public
   */
  ShareTrinoDataSource?: CapabilityState | undefined;

  /**
   * The ability to create, update, and share Impala data sources.
   *
   * @public
   */
  ImpalaDataSource?: CapabilityState | undefined;

  /**
   * The ability to create Impala data sources.
   *
   * @public
   */
  CreateImpalaDataSource?: CapabilityState | undefined;

  /**
   * The ability to update Impala data sources.
   *
   * @public
   */
  UpdateImpalaDataSource?: CapabilityState | undefined;

  /**
   * The ability to share Impala data sources.
   *
   * @public
   */
  ShareImpalaDataSource?: CapabilityState | undefined;

  /**
   * The ability to create, update, and share Teradata data sources.
   *
   * @public
   */
  TeradataDataSource?: CapabilityState | undefined;

  /**
   * The ability to create Teradata data sources.
   *
   * @public
   */
  CreateTeradataDataSource?: CapabilityState | undefined;

  /**
   * The ability to update Teradata data sources.
   *
   * @public
   */
  UpdateTeradataDataSource?: CapabilityState | undefined;

  /**
   * The ability to share Teradata data sources.
   *
   * @public
   */
  ShareTeradataDataSource?: CapabilityState | undefined;

  /**
   * The ability to create, update, and share Presto data sources.
   *
   * @public
   */
  PrestoDataSource?: CapabilityState | undefined;

  /**
   * The ability to create Presto data sources.
   *
   * @public
   */
  CreatePrestoDataSource?: CapabilityState | undefined;

  /**
   * The ability to update Presto data sources.
   *
   * @public
   */
  UpdatePrestoDataSource?: CapabilityState | undefined;

  /**
   * The ability to share Presto data sources.
   *
   * @public
   */
  SharePrestoDataSource?: CapabilityState | undefined;

  /**
   * The ability to create, update, and share Spark data sources.
   *
   * @public
   */
  SparkDataSource?: CapabilityState | undefined;

  /**
   * The ability to create Spark data sources.
   *
   * @public
   */
  CreateSparkDataSource?: CapabilityState | undefined;

  /**
   * The ability to update Spark data sources.
   *
   * @public
   */
  UpdateSparkDataSource?: CapabilityState | undefined;

  /**
   * The ability to share Spark data sources.
   *
   * @public
   */
  ShareSparkDataSource?: CapabilityState | undefined;

  /**
   * The ability to create, update, and share Exasol data sources.
   *
   * @public
   */
  ExasolDataSource?: CapabilityState | undefined;

  /**
   * The ability to create Exasol data sources.
   *
   * @public
   */
  CreateExasolDataSource?: CapabilityState | undefined;

  /**
   * The ability to update Exasol data sources.
   *
   * @public
   */
  UpdateExasolDataSource?: CapabilityState | undefined;

  /**
   * The ability to share Exasol data sources.
   *
   * @public
   */
  ShareExasolDataSource?: CapabilityState | undefined;

  /**
   * The ability to create, update, and share Db2 data sources.
   *
   * @public
   */
  Db2DataSource?: CapabilityState | undefined;

  /**
   * The ability to create Db2 data sources.
   *
   * @public
   */
  CreateDb2DataSource?: CapabilityState | undefined;

  /**
   * The ability to update Db2 data sources.
   *
   * @public
   */
  UpdateDb2DataSource?: CapabilityState | undefined;

  /**
   * The ability to share Db2 data sources.
   *
   * @public
   */
  ShareDb2DataSource?: CapabilityState | undefined;

  /**
   * The ability to create, update, and share SAP HANA data sources.
   *
   * @public
   */
  SapHanaDataSource?: CapabilityState | undefined;

  /**
   * The ability to create SAP HANA data sources.
   *
   * @public
   */
  CreateSapHanaDataSource?: CapabilityState | undefined;

  /**
   * The ability to update SAP HANA data sources.
   *
   * @public
   */
  UpdateSapHanaDataSource?: CapabilityState | undefined;

  /**
   * The ability to share SAP HANA data sources.
   *
   * @public
   */
  ShareSapHanaDataSource?: CapabilityState | undefined;

  /**
   * The ability to create, update, and share Denodo data sources.
   *
   * @public
   */
  DenodoDataSource?: CapabilityState | undefined;

  /**
   * The ability to create Denodo data sources.
   *
   * @public
   */
  CreateDenodoDataSource?: CapabilityState | undefined;

  /**
   * The ability to update Denodo data sources.
   *
   * @public
   */
  UpdateDenodoDataSource?: CapabilityState | undefined;

  /**
   * The ability to share Denodo data sources.
   *
   * @public
   */
  ShareDenodoDataSource?: CapabilityState | undefined;

  /**
   * The ability to create, update, and share Dremio data sources.
   *
   * @public
   */
  DremioDataSource?: CapabilityState | undefined;

  /**
   * The ability to create Dremio data sources.
   *
   * @public
   */
  CreateDremioDataSource?: CapabilityState | undefined;

  /**
   * The ability to update Dremio data sources.
   *
   * @public
   */
  UpdateDremioDataSource?: CapabilityState | undefined;

  /**
   * The ability to share Dremio data sources.
   *
   * @public
   */
  ShareDremioDataSource?: CapabilityState | undefined;

  /**
   * The ability to create, update, and share Salesforce data sources.
   *
   * @public
   */
  SalesforceDataSource?: CapabilityState | undefined;

  /**
   * The ability to create Salesforce data sources.
   *
   * @public
   */
  CreateSalesforceDataSource?: CapabilityState | undefined;

  /**
   * The ability to update Salesforce data sources.
   *
   * @public
   */
  UpdateSalesforceDataSource?: CapabilityState | undefined;

  /**
   * The ability to share Salesforce data sources.
   *
   * @public
   */
  ShareSalesforceDataSource?: CapabilityState | undefined;

  /**
   * The ability to create, update, and share Amazon QuickSight data sources.
   *
   * @public
   */
  RadiantDataSource?: CapabilityState | undefined;

  /**
   * The ability to create Amazon QuickSight data sources.
   *
   * @public
   */
  CreateRadiantDataSource?: CapabilityState | undefined;

  /**
   * The ability to update Amazon QuickSight data sources.
   *
   * @public
   */
  UpdateRadiantDataSource?: CapabilityState | undefined;

  /**
   * The ability to share Amazon QuickSight data sources.
   *
   * @public
   */
  ShareRadiantDataSource?: CapabilityState | undefined;

  /**
   * The ability to create, update, and share PayPal data sources.
   *
   * @public
   */
  PayPalDataSource?: CapabilityState | undefined;

  /**
   * The ability to create PayPal data sources.
   *
   * @public
   */
  CreatePayPalDataSource?: CapabilityState | undefined;

  /**
   * The ability to update PayPal data sources.
   *
   * @public
   */
  UpdatePayPalDataSource?: CapabilityState | undefined;

  /**
   * The ability to share PayPal data sources.
   *
   * @public
   */
  SharePayPalDataSource?: CapabilityState | undefined;

  /**
   * The ability to create, update, and share Square data sources.
   *
   * @public
   */
  SquareDataSource?: CapabilityState | undefined;

  /**
   * The ability to create Square data sources.
   *
   * @public
   */
  CreateSquareDataSource?: CapabilityState | undefined;

  /**
   * The ability to update Square data sources.
   *
   * @public
   */
  UpdateSquareDataSource?: CapabilityState | undefined;

  /**
   * The ability to share Square data sources.
   *
   * @public
   */
  ShareSquareDataSource?: CapabilityState | undefined;

  /**
   * The ability to create, update, and share GitHub data sources.
   *
   * @public
   */
  GitHubDataSource?: CapabilityState | undefined;

  /**
   * The ability to create GitHub data sources.
   *
   * @public
   */
  CreateGitHubDataSource?: CapabilityState | undefined;

  /**
   * The ability to update GitHub data sources.
   *
   * @public
   */
  UpdateGitHubDataSource?: CapabilityState | undefined;

  /**
   * The ability to share GitHub data sources.
   *
   * @public
   */
  ShareGitHubDataSource?: CapabilityState | undefined;

  /**
   * The ability to create, update, and share Twitter data sources.
   *
   * @public
   */
  TwitterDataSource?: CapabilityState | undefined;

  /**
   * The ability to create Twitter data sources.
   *
   * @public
   */
  CreateTwitterDataSource?: CapabilityState | undefined;

  /**
   * The ability to update Twitter data sources.
   *
   * @public
   */
  UpdateTwitterDataSource?: CapabilityState | undefined;

  /**
   * The ability to share Twitter data sources.
   *
   * @public
   */
  ShareTwitterDataSource?: CapabilityState | undefined;

  /**
   * The ability to create, update, and share Jira data sources.
   *
   * @public
   */
  JiraDataSource?: CapabilityState | undefined;

  /**
   * The ability to create Jira data sources.
   *
   * @public
   */
  CreateJiraDataSource?: CapabilityState | undefined;

  /**
   * The ability to update Jira data sources.
   *
   * @public
   */
  UpdateJiraDataSource?: CapabilityState | undefined;

  /**
   * The ability to share Jira data sources.
   *
   * @public
   */
  ShareJiraDataSource?: CapabilityState | undefined;

  /**
   * The ability to create, update, and share ServiceNow data sources.
   *
   * @public
   */
  ServiceNowDataSource?: CapabilityState | undefined;

  /**
   * The ability to create ServiceNow data sources.
   *
   * @public
   */
  CreateServiceNowDataSource?: CapabilityState | undefined;

  /**
   * The ability to update ServiceNow data sources.
   *
   * @public
   */
  UpdateServiceNowDataSource?: CapabilityState | undefined;

  /**
   * The ability to share ServiceNow data sources.
   *
   * @public
   */
  ShareServiceNowDataSource?: CapabilityState | undefined;

  /**
   * The ability to create, update, and share Adobe Analytics data sources.
   *
   * @public
   */
  AdobeAnalyticsDataSource?: CapabilityState | undefined;

  /**
   * The ability to create Adobe Analytics data sources.
   *
   * @public
   */
  CreateAdobeAnalyticsDataSource?: CapabilityState | undefined;

  /**
   * The ability to update Adobe Analytics data sources.
   *
   * @public
   */
  UpdateAdobeAnalyticsDataSource?: CapabilityState | undefined;

  /**
   * The ability to share Adobe Analytics data sources.
   *
   * @public
   */
  ShareAdobeAnalyticsDataSource?: CapabilityState | undefined;

  /**
   * The ability to create, update, and share Google Analytics data sources.
   *
   * @public
   */
  GoogleAnalyticsDataSource?: CapabilityState | undefined;

  /**
   * The ability to create Google Analytics data sources.
   *
   * @public
   */
  CreateGoogleAnalyticsDataSource?: CapabilityState | undefined;

  /**
   * The ability to update Google Analytics data sources.
   *
   * @public
   */
  UpdateGoogleAnalyticsDataSource?: CapabilityState | undefined;

  /**
   * The ability to share Google Analytics data sources.
   *
   * @public
   */
  ShareGoogleAnalyticsDataSource?: CapabilityState | undefined;

  /**
   * The ability to create, update, and share Google Sheets data sources.
   *
   * @public
   */
  GoogleSheetsDataSource?: CapabilityState | undefined;

  /**
   * The ability to create Google Sheets data sources.
   *
   * @public
   */
  CreateGoogleSheetsDataSource?: CapabilityState | undefined;

  /**
   * The ability to update Google Sheets data sources.
   *
   * @public
   */
  UpdateGoogleSheetsDataSource?: CapabilityState | undefined;

  /**
   * The ability to share Google Sheets data sources.
   *
   * @public
   */
  ShareGoogleSheetsDataSource?: CapabilityState | undefined;

  /**
   * The ability to create, update, and share Amazon DocumentDB data sources.
   *
   * @public
   */
  DocumentDbDataSource?: CapabilityState | undefined;

  /**
   * The ability to create Amazon DocumentDB data sources.
   *
   * @public
   */
  CreateDocumentDbDataSource?: CapabilityState | undefined;

  /**
   * The ability to update Amazon DocumentDB data sources.
   *
   * @public
   */
  UpdateDocumentDbDataSource?: CapabilityState | undefined;

  /**
   * The ability to share Amazon DocumentDB data sources.
   *
   * @public
   */
  ShareDocumentDbDataSource?: CapabilityState | undefined;

  /**
   * The ability to create, update, and share MongoDB data sources.
   *
   * @public
   */
  MongoDbDataSource?: CapabilityState | undefined;

  /**
   * The ability to create MongoDB data sources.
   *
   * @public
   */
  CreateMongoDbDataSource?: CapabilityState | undefined;

  /**
   * The ability to update MongoDB data sources.
   *
   * @public
   */
  UpdateMongoDbDataSource?: CapabilityState | undefined;

  /**
   * The ability to share MongoDB data sources.
   *
   * @public
   */
  ShareMongoDbDataSource?: CapabilityState | undefined;

  /**
   * The ability to create, update, and share MongoDB Atlas data sources.
   *
   * @public
   */
  MongoAtlasDataSource?: CapabilityState | undefined;

  /**
   * The ability to create MongoDB Atlas data sources.
   *
   * @public
   */
  CreateMongoAtlasDataSource?: CapabilityState | undefined;

  /**
   * The ability to update MongoDB Atlas data sources.
   *
   * @public
   */
  UpdateMongoAtlasDataSource?: CapabilityState | undefined;

  /**
   * The ability to share MongoDB Atlas data sources.
   *
   * @public
   */
  ShareMongoAtlasDataSource?: CapabilityState | undefined;

  /**
   * The ability to create, update, and share Amazon DynamoDB data sources.
   *
   * @public
   */
  DynamoDbDataSource?: CapabilityState | undefined;

  /**
   * The ability to create Amazon DynamoDB data sources.
   *
   * @public
   */
  CreateDynamoDbDataSource?: CapabilityState | undefined;

  /**
   * The ability to update Amazon DynamoDB data sources.
   *
   * @public
   */
  UpdateDynamoDbDataSource?: CapabilityState | undefined;

  /**
   * The ability to share Amazon DynamoDB data sources.
   *
   * @public
   */
  ShareDynamoDbDataSource?: CapabilityState | undefined;
}

/**
 * A filter that matches users by total capacity range in bytes.
 *
 * @public
 */
export interface CapacityBytesRangeFilter {
  /**
   * The minimum capacity in bytes (inclusive). At least one of minBytes or maxBytes is required.
   *
   * @public
   */
  minBytes?: number | undefined;

  /**
   * The maximum capacity in bytes (inclusive). At least one of minBytes or maxBytes is required.
   *
   * @public
   */
  maxBytes?: number | undefined;
}

/**
 * A transform operation that casts a column to a different type.
 *
 * @public
 */
export interface CastColumnTypeOperation {
  /**
   * Column name.
   *
   * @public
   */
  ColumnName: string | undefined;

  /**
   * New column data type.
   *
   * @public
   */
  NewColumnType: ColumnDataType | undefined;

  /**
   * The sub data type of the new column. Sub types are only available for decimal columns that are part of a SPICE dataset.
   *
   * @public
   */
  SubType?: ColumnDataSubType | undefined;

  /**
   * When casting a column from string to datetime type, you can supply a string in a format supported by Quick Sight to denote the source data format.
   *
   * @public
   */
  Format?: string | undefined;
}

/**
 * A transform operation that changes the data types of one or more columns in the dataset.
 *
 * @public
 */
export interface CastColumnTypesOperation {
  /**
   * Alias for this operation.
   *
   * @public
   */
  Alias: string | undefined;

  /**
   * The source transform operation that provides input data for the type casting.
   *
   * @public
   */
  Source: TransformOperationSource | undefined;

  /**
   * The list of column type casting operations to perform.
   *
   * @public
   */
  CastColumnTypeOperations: CastColumnTypeOperation[] | undefined;
}

/**
 * A structure that represents the cell value synonym.
 *
 * @public
 */
export interface CellValueSynonym {
  /**
   * The cell value.
   *
   * @public
   */
  CellValue?: string | undefined;

  /**
   * Other names or aliases for the cell value.
   *
   * @public
   */
  Synonyms?: string[] | undefined;
}

/**
 * A structure that represents a collective constant.
 *
 * @public
 */
export interface CollectiveConstant {
  /**
   * A list of values for the collective constant.
   *
   * @public
   */
  ValueList?: string[] | undefined;
}

/**
 * Metadata that contains a description for a column.
 *
 * @public
 */
export interface ColumnDescription {
  /**
   * The text of a description for a column.
   *
   * @public
   */
  Text?: string | undefined;
}

/**
 * Geospatial column group that denotes a hierarchy.
 *
 * @public
 */
export interface GeoSpatialColumnGroup {
  /**
   * A display name for the hierarchy.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * Country code.
   *
   * @public
   */
  CountryCode?: GeoSpatialCountryCode | undefined;

  /**
   * Columns in this hierarchy.
   *
   * @public
   */
  Columns: string[] | undefined;
}

/**
 * Groupings of columns that work together in certain Quick Sight features. This is a variant type structure. For this structure to be valid, only one of the attributes can be non-null.
 *
 * @public
 */
export interface ColumnGroup {
  /**
   * Geospatial column group that denotes a hierarchy.
   *
   * @public
   */
  GeoSpatialColumnGroup?: GeoSpatialColumnGroup | undefined;
}

/**
 * A structure describing the name, data type, and geographic role of the columns.
 *
 * @public
 */
export interface ColumnGroupColumnSchema {
  /**
   * The name of the column group's column schema.
   *
   * @public
   */
  Name?: string | undefined;
}

/**
 * The column group schema.
 *
 * @public
 */
export interface ColumnGroupSchema {
  /**
   * The name of the column group schema.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * A structure containing the list of schemas for column group columns.
   *
   * @public
   */
  ColumnGroupColumnSchemaList?: ColumnGroupColumnSchema[] | undefined;
}

/**
 * A rule defined to grant access on one or more restricted columns. Each dataset can have multiple rules. To create a restricted column, you add it to one or more rules. Each rule must contain at least one column and at least one user or group. To be able to see a restricted column, a user or group needs to be added to a rule for that column.
 *
 * @public
 */
export interface ColumnLevelPermissionRule {
  /**
   * An array of Amazon Resource Names (ARNs) for Quick Sight users or groups.
   *
   * @public
   */
  Principals?: string[] | undefined;

  /**
   * An array of column names.
   *
   * @public
   */
  ColumnNames?: string[] | undefined;
}

/**
 * The column schema.
 *
 * @public
 */
export interface ColumnSchema {
  /**
   * The name of the column schema.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The data type of the column schema.
   *
   * @public
   */
  DataType?: string | undefined;

  /**
   * The geographic role of the column schema.
   *
   * @public
   */
  GeographicRole?: string | undefined;
}

/**
 * The semantic type information for a column in the new data preparation experience.
 *
 * @public
 */
export interface ColumnSemanticType {
  /**
   * The geographical role of the column in the new data preparation experience.
   *
   * @public
   */
  GeographicalRole?: GeoSpatialDataRole | undefined;
}

/**
 * A semantic property for a column.
 *
 * @public
 */
export interface ColumnSemanticProperty {
  /**
   * A description of the column.
   *
   * @public
   */
  Description?: ColumnDescription | undefined;

  /**
   * Additional notes for the column.
   *
   * @public
   */
  AdditionalNotes?: AdditionalNotes | undefined;

  /**
   * The semantic type of the column.
   *
   * @public
   */
  SemanticType?: ColumnSemanticType | undefined;
}

/**
 * A tag for a column in a `TagColumnOperation` structure. This is a variant type structure. For this structure to be valid, only one of the attributes can be non-null.
 *
 * @public
 */
export interface ColumnTag {
  /**
   * A geospatial role for a column.
   *
   * @public
   */
  ColumnGeographicRole?: GeoSpatialDataRole | undefined;

  /**
   * A description for a column.
   *
   * @public
   */
  ColumnDescription?: ColumnDescription | undefined;
}

/**
 * Specifies a column to be unpivoted, transforming it from a column into rows with associated values.
 *
 * @public
 */
export interface ColumnToUnpivot {
  /**
   * The name of the column to unpivot from the source data.
   *
   * @public
   */
  ColumnName?: string | undefined;

  /**
   * The value to assign to this column in the unpivoted result, typically the column name or a descriptive label.
   *
   * @public
   */
  NewValue?: string | undefined;
}

/**
 * A structure that represents a comparative order.
 *
 * @public
 */
export interface ComparativeOrder {
  /**
   * The ordering type for a column. Valid values for this structure are `GREATER_IS_BETTER`, `LESSER_IS_BETTER` and `SPECIFIED`.
   *
   * @public
   */
  UseOrdering?: ColumnOrderingType | undefined;

  /**
   * The list of columns to be used in the ordering.
   *
   * @public
   */
  SpecifedOrder?: string[] | undefined;

  /**
   * The treat of undefined specified values. Valid values for this structure are `LEAST` and `MOST`.
   *
   * @public
   */
  TreatUndefinedSpecifiedValues?: UndefinedSpecifiedValueType | undefined;
}

/**
 * Configures the display properties of the control title.
 *
 * @public
 */
export interface ControlTitleFontConfiguration {
  /**
   * Configures the font settings for the control title.
   *
   * @public
   */
  FontConfiguration?: FontConfiguration | undefined;

  /**
   * Determines the alignment of the control title.
   *
   * @public
   */
  TextAlignment?: HorizontalTextAlignment | undefined;
}

/**
 * @public
 */
export interface CreateAccountCustomizationRequest {
  /**
   * The ID for the Amazon Web Services account that you want to customize Quick Sight for.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The Quick Sight namespace that you want to add customizations to.
   *
   * @public
   */
  Namespace?: string | undefined;

  /**
   * The Quick Sight customizations you're adding. You can add these to an Amazon Web Services account and a QuickSight namespace.
   *
   * For example, you can add a default theme by setting `AccountCustomization` to the midnight theme: `"AccountCustomization": \{ "DefaultTheme": "arn:aws:quicksight::aws:theme/MIDNIGHT" \}`. Or, you can add a custom theme by specifying `"AccountCustomization": \{ "DefaultTheme": "arn:aws:quicksight:us-west-2:111122223333:theme/bdb844d0-0fe9-4d9d-b520-0fe602d93639" \}`.
   *
   * @public
   */
  AccountCustomization: AccountCustomization | undefined;

  /**
   * A list of the tags that you want to attach to this resource.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateAccountCustomizationResponse {
  /**
   * The Amazon Resource Name (ARN) for the customization that you created for this Amazon Web Services account.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The ID for the Amazon Web Services account that you want to customize Quick Sight for.
   *
   * @public
   */
  AwsAccountId?: string | undefined;

  /**
   * The namespace associated with the customization you're creating.
   *
   * @public
   */
  Namespace?: string | undefined;

  /**
   * The Quick Sight customizations you're adding.
   *
   * @public
   */
  AccountCustomization?: AccountCustomization | undefined;

  /**
   * The Amazon Web Services request ID for this operation.
   *
   * @public
   */
  RequestId?: string | undefined;

  /**
   * The HTTP status of the request.
   *
   * @public
   */
  Status?: number | undefined;
}

/**
 * @public
 */
export interface CreateAccountSubscriptionRequest {
  /**
   * The edition of Amazon Quick Sight that you want your account to have. Currently, you can choose from `ENTERPRISE` or `ENTERPRISE_AND_Q`.
   *
   * If you choose `ENTERPRISE_AND_Q`, the following parameters are required:
   *
   * - `FirstName`
   * - `LastName`
   * - `EmailAddress`
   * - `ContactNumber`
   *
   * @public
   */
  Edition?: Edition | undefined;

  /**
   * The method that you want to use to authenticate your Quick Sight account.
   *
   * If you choose `ACTIVE_DIRECTORY`, provide an `ActiveDirectoryName` and an `AdminGroup` associated with your Active Directory.
   *
   * If you choose `IAM_IDENTITY_CENTER`, provide an `AdminGroup` associated with your IAM Identity Center account.
   *
   * @public
   */
  AuthenticationMethod: AuthenticationMethodOption | undefined;

  /**
   * The Amazon Web Services account ID of the account that you're using to create your Quick Sight account.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The name of your Amazon Quick Sight account. This name is unique over all of Amazon Web Services, and it appears only when users sign in. You can't change `AccountName` value after the Amazon Quick Sight account is created.
   *
   * @public
   */
  AccountName: string | undefined;

  /**
   * The email address that you want Quick Sight to send notifications to regarding your Quick Sight account or Quick Sight subscription.
   *
   * @public
   */
  NotificationEmail: string | undefined;

  /**
   * The name of your Active Directory. This field is required if `ACTIVE_DIRECTORY` is the selected authentication method of the new Quick Sight account.
   *
   * @public
   */
  ActiveDirectoryName?: string | undefined;

  /**
   * The realm of the Active Directory that is associated with your Quick Sight account. This field is required if `ACTIVE_DIRECTORY` is the selected authentication method of the new Quick Sight account.
   *
   * @public
   */
  Realm?: string | undefined;

  /**
   * The ID of the Active Directory that is associated with your Quick Sight account.
   *
   * @public
   */
  DirectoryId?: string | undefined;

  /**
   * The admin group associated with your Active Directory or IAM Identity Center account. Either this field or the `AdminProGroup` field is required if `ACTIVE_DIRECTORY` or `IAM_IDENTITY_CENTER` is the selected authentication method of the new Quick Sight account.
   *
   * For more information about using IAM Identity Center in Amazon Quick Sight, see [Using IAM Identity Center with Amazon Quick Sight Enterprise Edition](https://docs.aws.amazon.com/quicksight/latest/user/sec-identity-management-identity-center.html) in the Amazon Quick Sight User Guide. For more information about using Active Directory in Amazon Quick Sight, see [Using Active Directory with Amazon Quick Sight Enterprise Edition](https://docs.aws.amazon.com/quicksight/latest/user/aws-directory-service.html) in the Amazon Quick Sight User Guide.
   *
   * @public
   */
  AdminGroup?: string[] | undefined;

  /**
   * The author group associated with your Active Directory or IAM Identity Center account.
   *
   * For more information about using IAM Identity Center in Amazon Quick Sight, see [Using IAM Identity Center with Amazon Quick Sight Enterprise Edition](https://docs.aws.amazon.com/quicksight/latest/user/sec-identity-management-identity-center.html) in the Amazon Quick Sight User Guide. For more information about using Active Directory in Amazon Quick Sight, see [Using Active Directory with Amazon Quick Sight Enterprise Edition](https://docs.aws.amazon.com/quicksight/latest/user/aws-directory-service.html) in the Amazon Quick Sight User Guide.
   *
   * @public
   */
  AuthorGroup?: string[] | undefined;

  /**
   * The reader group associated with your Active Directory or IAM Identity Center account.
   *
   * For more information about using IAM Identity Center in Amazon Quick Sight, see [Using IAM Identity Center with Amazon Quick Sight Enterprise Edition](https://docs.aws.amazon.com/quicksight/latest/user/sec-identity-management-identity-center.html) in the Amazon Quick Sight User Guide. For more information about using Active Directory in Amazon Quick Sight, see [Using Active Directory with Amazon Quick Sight Enterprise Edition](https://docs.aws.amazon.com/quicksight/latest/user/aws-directory-service.html) in the Amazon Quick Sight User Guide.
   *
   * @public
   */
  ReaderGroup?: string[] | undefined;

  /**
   * The admin pro group associated with your Active Directory or IAM Identity Center account. Either this field or the `AdminGroup` field is required if `ACTIVE_DIRECTORY` or `IAM_IDENTITY_CENTER` is the selected authentication method of the new Quick Sight account.
   *
   * For more information about using IAM Identity Center in Amazon Quick Sight, see [Using IAM Identity Center with Amazon Quick Sight Enterprise Edition](https://docs.aws.amazon.com/quicksight/latest/user/sec-identity-management-identity-center.html) in the Amazon Quick Sight User Guide. For more information about using Active Directory in Amazon Quick Sight, see [Using Active Directory with Amazon Quick Sight Enterprise Edition](https://docs.aws.amazon.com/quicksight/latest/user/aws-directory-service.html) in the Amazon Quick Sight User Guide.
   *
   * @public
   */
  AdminProGroup?: string[] | undefined;

  /**
   * The author pro group associated with your Active Directory or IAM Identity Center account.
   *
   * For more information about using IAM Identity Center in Amazon Quick Sight, see [Using IAM Identity Center with Amazon Quick Sight Enterprise Edition](https://docs.aws.amazon.com/quicksight/latest/user/sec-identity-management-identity-center.html) in the Amazon Quick Sight User Guide. For more information about using Active Directory in Amazon Quick Sight, see [Using Active Directory with Amazon Quick Sight Enterprise Edition](https://docs.aws.amazon.com/quicksight/latest/user/aws-directory-service.html) in the Amazon Quick Sight User Guide.
   *
   * @public
   */
  AuthorProGroup?: string[] | undefined;

  /**
   * The reader pro group associated with your Active Directory or IAM Identity Center account.
   *
   * For more information about using IAM Identity Center in Amazon Quick Sight, see [Using IAM Identity Center with Amazon Quick Sight Enterprise Edition](https://docs.aws.amazon.com/quicksight/latest/user/sec-identity-management-identity-center.html) in the Amazon Quick Sight User Guide. For more information about using Active Directory in Amazon Quick Sight, see [Using Active Directory with Amazon Quick Sight Enterprise Edition](https://docs.aws.amazon.com/quicksight/latest/user/aws-directory-service.html) in the Amazon Quick Sight User Guide.
   *
   * @public
   */
  ReaderProGroup?: string[] | undefined;

  /**
   * The first name of the author of the Amazon Quick Sight account to use for future communications. This field is required if `ENTERPPRISE_AND_Q` is the selected edition of the new Amazon Quick Sight account.
   *
   * @public
   */
  FirstName?: string | undefined;

  /**
   * The last name of the author of the Amazon Quick Sight account to use for future communications. This field is required if `ENTERPPRISE_AND_Q` is the selected edition of the new Amazon Quick Sight account.
   *
   * @public
   */
  LastName?: string | undefined;

  /**
   * The email address of the author of the Amazon Quick Sight account to use for future communications. This field is required if `ENTERPPRISE_AND_Q` is the selected edition of the new Amazon Quick Sight account.
   *
   * @public
   */
  EmailAddress?: string | undefined;

  /**
   * A 10-digit phone number for the author of the Amazon Quick Sight account to use for future communications. This field is required if `ENTERPPRISE_AND_Q` is the selected edition of the new Amazon Quick Sight account.
   *
   * @public
   */
  ContactNumber?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for the IAM Identity Center instance.
   *
   * @public
   */
  IAMIdentityCenterInstanceArn?: string | undefined;
}

/**
 * A `SignupResponse` object that contains a summary of a newly created account.
 *
 * @public
 */
export interface SignupResponse {
  /**
   * A Boolean that is `TRUE` if the Amazon Quick Sight uses IAM as an authentication method.
   *
   * @public
   */
  IAMUser?: boolean | undefined;

  /**
   * The user login name for your Amazon Quick Sight account.
   *
   * @public
   */
  userLoginName?: string | undefined;

  /**
   * The name of your Quick Sight account.
   *
   * @public
   */
  accountName?: string | undefined;

  /**
   * The type of Active Directory that is being used to authenticate the Amazon Quick Sight account. Valid values are `SIMPLE_AD`, `AD_CONNECTOR`, and `MICROSOFT_AD`.
   *
   * @public
   */
  directoryType?: string | undefined;
}

/**
 * @public
 */
export interface CreateAccountSubscriptionResponse {
  /**
   * A `SignupResponse` object that returns information about a newly created Quick Sight account.
   *
   * @public
   */
  SignupResponse?: SignupResponse | undefined;

  /**
   * The HTTP status of the request.
   *
   * @public
   */
  Status?: number | undefined;

  /**
   * The Amazon Web Services request ID for this operation.
   *
   * @public
   */
  RequestId?: string | undefined;
}

/**
 * Permission for the resource.
 *
 * @public
 */
export interface ResourcePermission {
  /**
   * The Amazon Resource Name (ARN) of the principal. This can be one of the following:
   *
   * - The ARN of an Quick Sight user or group associated with a data source or dataset. (This is common.)
   * - The ARN of an Quick Sight user, group, or namespace associated with an analysis, dashboard, template, or theme. Namespace sharing is not supported for action connectors. (This is common.)
   * - The ARN of an Amazon Web Services account root: This is an IAM ARN rather than a Quick Sight ARN. Use this option only to share resources (templates) across Amazon Web Services accounts. Account root sharing is not supported for action connectors. (This is less common.)
   *
   * @public
   */
  Principal: string | undefined;

  /**
   * The IAM action to grant or revoke permissions on.
   *
   * @public
   */
  Actions: string[] | undefined;
}

/**
 * @public
 */
export interface CreateActionConnectorRequest {
  /**
   * The Amazon Web Services account ID associated with the action connector.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * A unique identifier for the action connector. This ID must be unique within the Amazon Web Services account. The `ActionConnectorId` must not start with the prefix `quicksuite-`
   *
   * @public
   */
  ActionConnectorId: string | undefined;

  /**
   * A descriptive name for the action connector.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The type of action connector.
   *
   * @public
   */
  Type: ActionConnectorType | undefined;

  /**
   * The authentication configuration for connecting to the external service. This includes the authentication type, base URL, and authentication metadata such as client credentials or API keys.
   *
   * @public
   */
  AuthenticationConfig: AuthConfig | undefined;

  /**
   * An optional description of the action connector.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The permissions configuration that defines which users, groups, or namespaces can access this action connector and what operations they can perform.
   *
   * @public
   */
  Permissions?: ResourcePermission[] | undefined;

  /**
   * The ARN of the VPC connection to use for secure connectivity to the external service.
   *
   * @public
   */
  VpcConnectionArn?: string | undefined;

  /**
   * A list of tags to apply to the action connector for resource management and organization.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateActionConnectorResponse {
  /**
   * The Amazon Resource Name (ARN) of the created action connector.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The creation status of the action connector.
   *
   * @public
   */
  CreationStatus?: ResourceStatus | undefined;

  /**
   * The unique identifier of the created action connector.
   *
   * @public
   */
  ActionConnectorId?: string | undefined;

  /**
   * The Amazon Web Services request ID for this operation.
   *
   * @public
   */
  RequestId?: string | undefined;

  /**
   * The HTTP status code of the request.
   *
   * @public
   */
  Status?: number | undefined;
}

/**
 * A reference to an existing custom prompt profile.
 *
 * @public
 */
export interface CustomPromptProfile {
  /**
   * The identifier of the model profile.
   *
   * @public
   */
  ModelProfileId: string | undefined;

  /**
   * The subscription identifier.
   *
   * @public
   */
  SubscriptionId: string | undefined;

  /**
   * The Amazon Web Services account ID for the Q Business service.
   *
   * @public
   */
  QbsAwsAccountId: string | undefined;
}

/**
 * The parameters for configuring a custom prompt for an agent.
 *
 * @public
 */
export interface CustomPromptInputParameters {
  /**
   * Instructions for the desired response length.
   *
   * @public
   */
  ResponseLength?: string | undefined;

  /**
   * Instructions for the desired output style.
   *
   * @public
   */
  OutputStyle?: string | undefined;

  /**
   * Instructions that define the agent's identity and persona.
   *
   * @public
   */
  Identity?: string | undefined;

  /**
   * Instructions for the desired tone of responses.
   *
   * @public
   */
  Tone?: string | undefined;

  /**
   * Custom instructions for the agent's behavior.
   *
   * @public
   */
  CustomInstructions?: string | undefined;
}

/**
 * The custom prompt input for an agent. This is a union type that can be either an existing prompt profile or new prompt parameters.
 *
 * @public
 */
export type CustomPromptInput =
  | CustomPromptInput.ExistingPromptMember
  | CustomPromptInput.NewPromptMember
  | CustomPromptInput.$UnknownMember;

/**
 * @public
 */
export namespace CustomPromptInput {
  /**
   * An existing custom prompt profile to use for the agent.
   *
   * @public
   */
  export interface ExistingPromptMember {
    ExistingPrompt: CustomPromptProfile;
    NewPrompt?: never;
    $unknown?: never;
  }

  /**
   * New custom prompt parameters to configure for the agent.
   *
   * @public
   */
  export interface NewPromptMember {
    ExistingPrompt?: never;
    NewPrompt: CustomPromptInputParameters;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    ExistingPrompt?: never;
    NewPrompt?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    ExistingPrompt: (value: CustomPromptProfile) => T;
    NewPrompt: (value: CustomPromptInputParameters) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface CreateAgentRequest {
  /**
   * The Amazon Resource Names (ARNs) of the spaces to attach to the agent.
   *
   * @public
   */
  Spaces?: string[] | undefined;

  /**
   * The Amazon Resource Names (ARNs) of the action connectors to attach to the agent.
   *
   * @public
   */
  ActionConnectors?: string[] | undefined;

  /**
   * The ID of the Amazon Web Services account that contains the agent.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * A unique identifier for the agent.
   *
   * @public
   */
  AgentId: string | undefined;

  /**
   * The name of the agent.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A description of the agent.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The icon identifier for the agent.
   *
   * @public
   */
  IconId?: string | undefined;

  /**
   * A list of starter prompts that are displayed to users when they begin interacting with the agent.
   *
   * @public
   */
  StarterPrompts?: string[] | undefined;

  /**
   * The welcome message that is displayed when a user starts a conversation with the agent.
   *
   * @public
   */
  WelcomeMessage?: string | undefined;

  /**
   * The lifecycle state of the agent. Valid values are `PREVIEW` and `PUBLISHED`.
   *
   * @public
   */
  AgentLifecycle?: AgentLifecycle | undefined;

  /**
   * The custom prompt configuration for the agent.
   *
   * @public
   */
  CustomPromptInput?: CustomPromptInput | undefined;
}

/**
 * @public
 */
export interface CreateAgentResponse {
  /**
   * The Amazon Resource Name (ARN) of the agent.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The unique identifier for the agent.
   *
   * @public
   */
  AgentId: string | undefined;

  /**
   * The status of the agent.
   *
   * @public
   */
  AgentStatus: AgentStatus | undefined;

  /**
   * The name of the agent.
   *
   * @public
   */
  AgentName: string | undefined;

  /**
   * The Amazon Web Services request ID for this operation.
   *
   * @public
   */
  RequestId?: string | undefined;
}

/**
 * A date-time parameter.
 *
 * @public
 */
export interface DateTimeParameter {
  /**
   * A display name for the date-time parameter.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The values for the date-time parameter.
   *
   * @public
   */
  Values: Date[] | undefined;
}

/**
 * A decimal parameter.
 *
 * @public
 */
export interface DecimalParameter {
  /**
   * A display name for the decimal parameter.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The values for the decimal parameter.
   *
   * @public
   */
  Values: number[] | undefined;
}

/**
 * An integer parameter.
 *
 * @public
 */
export interface IntegerParameter {
  /**
   * The name of the integer parameter.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The values for the integer parameter.
   *
   * @public
   */
  Values: number[] | undefined;
}

/**
 * A string parameter.
 *
 * @public
 */
export interface StringParameter {
  /**
   * A display name for a string parameter.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The values of a string parameter.
   *
   * @public
   */
  Values: string[] | undefined;
}

/**
 * A list of Quick Sight parameters and the list's override values.
 *
 * @public
 */
export interface _Parameters {
  /**
   * The parameters that have a data type of string.
   *
   * @public
   */
  StringParameters?: StringParameter[] | undefined;

  /**
   * The parameters that have a data type of integer.
   *
   * @public
   */
  IntegerParameters?: IntegerParameter[] | undefined;

  /**
   * The parameters that have a data type of decimal.
   *
   * @public
   */
  DecimalParameters?: DecimalParameter[] | undefined;

  /**
   * The parameters that have a data type of date-time.
   *
   * @public
   */
  DateTimeParameters?: DateTimeParameter[] | undefined;
}

/**
 * The option to relax the validation that is required to create and update analyses, dashboards, and templates with definition objects. When you set this value to `LENIENT`, validation is skipped for specific errors.
 *
 * @public
 */
export interface ValidationStrategy {
  /**
   * The mode of validation for the asset to be created or updated. When you set this value to `STRICT`, strict validation for every error is enforced. When you set this value to `LENIENT`, validation is skipped for specific UI errors.
   *
   * @public
   */
  Mode: ValidationStrategyMode | undefined;
}

/**
 * @public
 */
export interface CreateAnalysisResponse {
  /**
   * The ARN for the analysis.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The ID of the analysis.
   *
   * @public
   */
  AnalysisId?: string | undefined;

  /**
   * The status of the creation of the analysis.
   *
   * @public
   */
  CreationStatus?: ResourceStatus | undefined;

  /**
   * The HTTP status of the request.
   *
   * @public
   */
  Status?: number | undefined;

  /**
   * The Amazon Web Services request ID for this operation.
   *
   * @public
   */
  RequestId?: string | undefined;
}

/**
 * @public
 */
export interface CreateApprovalPolicyRequest {
  /**
   * The unique identifier to assign to the approval policy. You cannot change this value after you create the policy.
   *
   * @public
   */
  PolicyId: string | undefined;

  /**
   * The name of the approval policy.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A description of the approval policy.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The list of governed actions that trigger the approval workflow.
   *
   * @public
   */
  Actions: GovernedAction[] | undefined;

  /**
   * The list of asset types that the approval policy applies to.
   *
   * @public
   */
  AssetTypes: AssetType[] | undefined;

  /**
   * The scoping configuration that determines who the approval policy applies to.
   *
   * @public
   */
  ApplicableTo: ApplicableTo | undefined;

  /**
   * The list of group ARNs whose members can approve requests.
   *
   * @public
   */
  ApprovalGroups: string[] | undefined;
}

/**
 * @public
 */
export interface CreateApprovalPolicyResponse {
  /**
   * The approval policy that was created.
   *
   * @public
   */
  Policy: ApprovalPolicy | undefined;
}

/**
 * @public
 */
export interface CreateBrandRequest {
  /**
   * The ID of the Amazon Web Services account that owns the brand.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The ID of the Quick brand.
   *
   * @public
   */
  BrandId: string | undefined;

  /**
   * The definition of the brand.
   *
   * @public
   */
  BrandDefinition?: BrandDefinition | undefined;

  /**
   * A map of the key-value pairs that are assigned to the brand.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateBrandResponse {
  /**
   * The Amazon Web Services request ID for this operation.
   *
   * @public
   */
  RequestId?: string | undefined;

  /**
   * The details of the brand.
   *
   * @public
   */
  BrandDetail?: BrandDetail | undefined;

  /**
   * The definition of the brand.
   *
   * @public
   */
  BrandDefinition?: BrandDefinition | undefined;
}

/**
 * A transform operation that creates calculated columns. Columns created in one such operation form a lexical closure.
 *
 * @public
 */
export interface CreateColumnsOperation {
  /**
   * Alias for this operation.
   *
   * @public
   */
  Alias?: string | undefined;

  /**
   * The source transform operation that provides input data for creating new calculated columns.
   *
   * @public
   */
  Source?: TransformOperationSource | undefined;

  /**
   * Calculated columns to create.
   *
   * @public
   */
  Columns: CalculatedColumn[] | undefined;
}

/**
 * Contains the governance configuration for a custom permissions profile. When governance controls are defined for a category, any capabilities in that category not explicitly set to `ALLOW` in `Capabilities` are denied. Even newly added capabilities in the category are implicitly disabled when Amazon Quick releases them.
 *
 * @public
 */
export interface Governance {
  /**
   * A map of `DefaultCategoryEffects`.
   *
   * @public
   */
  DefaultCategoryEffects?: Record<string, DefaultCategoryEffect> | undefined;
}

/**
 * @public
 */
export interface CreateCustomPermissionsRequest {
  /**
   * The ID of the Amazon Web Services account that you want to create the custom permissions profile in.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The name of the custom permissions profile that you want to create.
   *
   * @public
   */
  CustomPermissionsName: string | undefined;

  /**
   * A set of actions to include in the custom permissions profile.
   *
   * @public
   */
  Capabilities?: Capabilities | undefined;

  /**
   * The governance configuration for the custom permissions profile. When governance controls are defined for a category, any capabilities in that category not explicitly set to `ALLOW` in `Capabilities` are denied. Even newly added capabilities in the category are implicitly disabled when Amazon Quick releases them.
   *
   * @public
   */
  Governance?: Governance | undefined;

  /**
   * The tags to associate with the custom permissions profile.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateCustomPermissionsResponse {
  /**
   * The HTTP status of the request.
   *
   * @public
   */
  Status?: number | undefined;

  /**
   * The Amazon Resource Name (ARN) of the custom permissions profile.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The Amazon Web Services request ID for this operation.
   *
   * @public
   */
  RequestId?: string | undefined;
}

/**
 * The drill down options for data points in a dashbaord.
 *
 * @public
 */
export interface DataPointDrillUpDownOption {
  /**
   * The status of the drill down options of data points.
   *
   * @public
   */
  AvailabilityStatus?: DashboardBehavior | undefined;
}

/**
 * The data point menu options of a dashboard.
 *
 * @public
 */
export interface DataPointMenuLabelOption {
  /**
   * The status of the data point menu options.
   *
   * @public
   */
  AvailabilityStatus?: DashboardBehavior | undefined;
}

/**
 * The data point tooltip options.
 *
 * @public
 */
export interface DataPointTooltipOption {
  /**
   * The status of the data point tool tip options.
   *
   * @public
   */
  AvailabilityStatus?: DashboardBehavior | undefined;
}

/**
 * Adds Q&A capabilities to a dashboard. If no topic is linked, Dashboard Q&A uses the data values that are rendered on the dashboard. End users can use Dashboard Q&A to ask for different slices of the data that they see on the dashboard. If a topic is linked, Topic Q&A is enabled.
 *
 * @public
 */
export interface DataQAEnabledOption {
  /**
   * The status of the Data Q&A option on the dashboard.
   *
   * @public
   */
  AvailabilityStatus?: DashboardBehavior | undefined;
}

/**
 * Executive summary option.
 *
 * @public
 */
export interface DataStoriesSharingOption {
  /**
   * Availability status.
   *
   * @public
   */
  AvailabilityStatus?: DashboardBehavior | undefined;
}

/**
 * Data stories sharing option.
 *
 * @public
 */
export interface ExecutiveSummaryOption {
  /**
   * Availability status.
   *
   * @public
   */
  AvailabilityStatus?: DashboardBehavior | undefined;
}

/**
 * Export to .csv option.
 *
 * @public
 */
export interface ExportToCSVOption {
  /**
   * Availability status.
   *
   * @public
   */
  AvailabilityStatus?: DashboardBehavior | undefined;
}

/**
 * Determines whether or not hidden fields are visible on exported dashbaords.
 *
 * @public
 */
export interface ExportWithHiddenFieldsOption {
  /**
   * The status of the export with hidden fields options.
   *
   * @public
   */
  AvailabilityStatus?: DashboardBehavior | undefined;
}

/**
 * Determines if Actions in Amazon Quick Suite are enabled in a dashboard..
 *
 * @public
 */
export interface QuickSuiteActionsOption {
  /**
   * Availability status.
   *
   * @public
   */
  AvailabilityStatus?: DashboardBehavior | undefined;
}

/**
 * Sheet controls option.
 *
 * @public
 */
export interface SheetControlsOption {
  /**
   * Visibility state.
   *
   * @public
   */
  VisibilityState?: DashboardUIState | undefined;
}

/**
 * The sheet layout maximization options of a dashbaord.
 *
 * @public
 */
export interface SheetLayoutElementMaximizationOption {
  /**
   * The status of the sheet layout maximization options of a dashbaord.
   *
   * @public
   */
  AvailabilityStatus?: DashboardBehavior | undefined;
}

/**
 * The axis sort options for a visual.
 *
 * @public
 */
export interface VisualAxisSortOption {
  /**
   * The availaiblity status of a visual's axis sort options.
   *
   * @public
   */
  AvailabilityStatus?: DashboardBehavior | undefined;
}

/**
 * Determines if hidden fields are included in an exported dashboard.
 *
 * @public
 */
export interface ExportHiddenFieldsOption {
  /**
   * The status of the export hidden fields options of a dashbaord.
   *
   * @public
   */
  AvailabilityStatus?: DashboardBehavior | undefined;
}

/**
 * The visual publish options of a visual in a dashboard
 *
 * @public
 */
export interface DashboardVisualPublishOptions {
  /**
   * Determines if hidden fields are included in an exported dashboard.
   *
   * @public
   */
  ExportHiddenFieldsOption?: ExportHiddenFieldsOption | undefined;
}

/**
 * Dashboard publish options.
 *
 * @public
 */
export interface DashboardPublishOptions {
  /**
   * Ad hoc (one-time) filtering option.
   *
   * @public
   */
  AdHocFilteringOption?: AdHocFilteringOption | undefined;

  /**
   * Export to .csv option.
   *
   * @public
   */
  ExportToCSVOption?: ExportToCSVOption | undefined;

  /**
   * Sheet controls option.
   *
   * @public
   */
  SheetControlsOption?: SheetControlsOption | undefined;

  /**
   * The visual publish options of a visual in a dashboard.
   *
   * @deprecated VisualPublishOptions property will reach its end of standard support in a future release. To perform this action, use ExportWithHiddenFields.
   * @public
   */
  VisualPublishOptions?: DashboardVisualPublishOptions | undefined;

  /**
   * The sheet layout maximization options of a dashbaord.
   *
   * @public
   */
  SheetLayoutElementMaximizationOption?: SheetLayoutElementMaximizationOption | undefined;

  /**
   * The menu options of a visual in a dashboard.
   *
   * @public
   */
  VisualMenuOption?: VisualMenuOption | undefined;

  /**
   * The axis sort options of a dashboard.
   *
   * @public
   */
  VisualAxisSortOption?: VisualAxisSortOption | undefined;

  /**
   * Determines if hidden fields are exported with a dashboard.
   *
   * @public
   */
  ExportWithHiddenFieldsOption?: ExportWithHiddenFieldsOption | undefined;

  /**
   * The drill-down options of data points in a dashboard.
   *
   * @public
   */
  DataPointDrillUpDownOption?: DataPointDrillUpDownOption | undefined;

  /**
   * The data point menu label options of a dashboard.
   *
   * @public
   */
  DataPointMenuLabelOption?: DataPointMenuLabelOption | undefined;

  /**
   * The data point tool tip options of a dashboard.
   *
   * @public
   */
  DataPointTooltipOption?: DataPointTooltipOption | undefined;

  /**
   * Adds Q&A capabilities to an Quick Sight dashboard. If no topic is linked, Dashboard Q&A uses the data values that are rendered on the dashboard. End users can use Dashboard Q&A to ask for different slices of the data that they see on the dashboard. If a topic is linked, Topic Q&A is used.
   *
   * @public
   */
  DataQAEnabledOption?: DataQAEnabledOption | undefined;

  /**
   * Determines if Actions in Amazon Quick Suite are enabled in a dashboard.
   *
   * @public
   */
  QuickSuiteActionsOption?: QuickSuiteActionsOption | undefined;

  /**
   * Executive summary option.
   *
   * @public
   */
  ExecutiveSummaryOption?: ExecutiveSummaryOption | undefined;

  /**
   * Data stories sharing option.
   *
   * @public
   */
  DataStoriesSharingOption?: DataStoriesSharingOption | undefined;
}

/**
 * A structure that contains the configuration of a shareable link to the dashboard.
 *
 * @public
 */
export interface LinkSharingConfiguration {
  /**
   * A structure that contains the permissions of a shareable link.
   *
   * @public
   */
  Permissions?: ResourcePermission[] | undefined;
}

/**
 * Dashboard source template.
 *
 * @public
 */
export interface DashboardSourceTemplate {
  /**
   * Dataset references.
   *
   * @public
   */
  DataSetReferences: DataSetReference[] | undefined;

  /**
   * The topic references for the source template of a dashboard.
   *
   * @public
   */
  TopicReferences?: TopicReference[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of the resource.
   *
   * @public
   */
  Arn: string | undefined;
}

/**
 * Dashboard source entity.
 *
 * @public
 */
export interface DashboardSourceEntity {
  /**
   * Source template.
   *
   * @public
   */
  SourceTemplate?: DashboardSourceTemplate | undefined;
}

/**
 * @public
 */
export interface CreateDashboardResponse {
  /**
   * The ARN of the dashboard.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The ARN of the dashboard, including the version number of the first version that is created.
   *
   * @public
   */
  VersionArn?: string | undefined;

  /**
   * The ID for the dashboard.
   *
   * @public
   */
  DashboardId?: string | undefined;

  /**
   * The status of the dashboard creation request.
   *
   * @public
   */
  CreationStatus?: ResourceStatus | undefined;

  /**
   * The HTTP status of the request.
   *
   * @public
   */
  Status?: number | undefined;

  /**
   * The Amazon Web Services request ID for this operation.
   *
   * @public
   */
  RequestId?: string | undefined;
}
