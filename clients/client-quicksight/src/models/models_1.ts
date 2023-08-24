// smithy-typescript generated code
import { SENSITIVE_STRING } from "@smithy/smithy-client";

import {
  AnalysisDefaults,
  AxisBinding,
  AxisDisplayOptions,
  BarChartVisual,
  BarsArrangement,
  BoxPlotStyleOptions,
  CalculatedField,
  CalculatedFieldFilterSensitiveLog,
  ChartAxisLabelOptions,
  ColumnConfiguration,
  ColumnConfigurationFilterSensitiveLog,
  ColumnHierarchy,
  ColumnIdentifier,
  ColumnSort,
  ContributionAnalysisDefault,
  DataLabelOptions,
  DataLabelOptionsFilterSensitiveLog,
  DataLabelPosition,
  DataPathValue,
  DataPathValueFilterSensitiveLog,
  DataSetIdentifierDeclaration,
  DimensionField,
  FieldSort,
  FieldSortOptions,
  FilterControl,
  FilterGroup,
  FontConfiguration,
  FormatConfiguration,
  FormatConfigurationFilterSensitiveLog,
  HorizontalTextAlignment,
  ItemsLimitConfiguration,
  Layout,
  LegendOptions,
  MeasureField,
  MeasureFieldFilterSensitiveLog,
  NumberDisplayFormatConfiguration,
  NumberDisplayFormatConfigurationFilterSensitiveLog,
  ParameterControl,
  ParameterDeclaration,
  ParameterDeclarationFilterSensitiveLog,
  PercentageDisplayFormatConfiguration,
  PercentageDisplayFormatConfigurationFilterSensitiveLog,
  ReferenceLine,
  ReferenceLineFilterSensitiveLog,
  ResourceStatus,
  SheetContentType,
  SheetControlLayout,
  SheetTextBox,
  SmallMultiplesOptions,
  SortDirection,
  TimeGranularity,
  TooltipOptions,
  URLTargetConfiguration,
  Visibility,
  VisualCustomAction,
  VisualPalette,
  VisualPaletteFilterSensitiveLog,
  VisualSubtitleLabelOptions,
  VisualTitleLabelOptions,
  WidgetStatus,
} from "./models_0";

/**
 * @public
 * <p>The options of a box plot visual.</p>
 */
export interface BoxPlotOptions {
  /**
   * @public
   * <p>The style options of the box plot.</p>
   */
  StyleOptions?: BoxPlotStyleOptions;

  /**
   * @public
   * <p>Determines the visibility of the outlier in a box plot.</p>
   */
  OutlierVisibility?: Visibility | string;

  /**
   * @public
   * <p>Determines the visibility of all data points of the box plot.</p>
   */
  AllDataPointsVisibility?: Visibility | string;
}

/**
 * @public
 * <p>The aggregated field well for a box plot.</p>
 */
export interface BoxPlotAggregatedFieldWells {
  /**
   * @public
   * <p>The group by field well of a box plot chart. Values are grouped based on group by fields.</p>
   */
  GroupBy?: DimensionField[];

  /**
   * @public
   * <p>The value field well of a box plot chart. Values are aggregated based on group by fields.</p>
   */
  Values?: MeasureField[];
}

/**
 * @public
 * <p>The field wells of a <code>BoxPlotVisual</code>.</p>
 *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
 */
export interface BoxPlotFieldWells {
  /**
   * @public
   * <p>The aggregated field wells of a box plot.</p>
   */
  BoxPlotAggregatedFieldWells?: BoxPlotAggregatedFieldWells;
}

/**
 * @public
 * <p>The pagination configuration for a table visual or boxplot.</p>
 */
export interface PaginationConfiguration {
  /**
   * @public
   * <p>Indicates how many items render in one page.</p>
   */
  PageSize: number | undefined;

  /**
   * @public
   * <p>Indicates the page number.</p>
   */
  PageNumber: number | undefined;
}

/**
 * @public
 * <p>The sort configuration of a <code>BoxPlotVisual</code>.</p>
 */
export interface BoxPlotSortConfiguration {
  /**
   * @public
   * <p>The sort configuration of a group by fields.</p>
   */
  CategorySort?: FieldSortOptions[];

  /**
   * @public
   * <p>The pagination configuration of a table visual or box plot.</p>
   */
  PaginationConfiguration?: PaginationConfiguration;
}

/**
 * @public
 * <p>The configuration of a <code>BoxPlotVisual</code>.</p>
 */
export interface BoxPlotChartConfiguration {
  /**
   * @public
   * <p>The field wells of the visual.</p>
   */
  FieldWells?: BoxPlotFieldWells;

  /**
   * @public
   * <p>The sort configuration of a <code>BoxPlotVisual</code>.</p>
   */
  SortConfiguration?: BoxPlotSortConfiguration;

  /**
   * @public
   * <p>The box plot chart options for a box plot visual</p>
   */
  BoxPlotOptions?: BoxPlotOptions;

  /**
   * @public
   * <p>The label display options (grid line, range, scale, axis step) of a box plot category.</p>
   */
  CategoryAxis?: AxisDisplayOptions;

  /**
   * @public
   * <p>The label options (label text, label visibility and sort Icon visibility) of a box plot category.</p>
   */
  CategoryLabelOptions?: ChartAxisLabelOptions;

  /**
   * @public
   * <p>The label display options (grid line, range, scale, axis step) of a box plot category.</p>
   */
  PrimaryYAxisDisplayOptions?: AxisDisplayOptions;

  /**
   * @public
   * <p>The label options (label text, label visibility and sort icon visibility) of a box plot value.</p>
   */
  PrimaryYAxisLabelOptions?: ChartAxisLabelOptions;

  /**
   * @public
   * <p>The options for the legend setup of a visual.</p>
   */
  Legend?: LegendOptions;

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
   * <p>The palette (chart color) display setup of the visual.</p>
   */
  VisualPalette?: VisualPalette;
}

/**
 * @public
 * <p>A box plot.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/box-plots.html">Using box plots</a> in the <i>Amazon QuickSight User Guide</i>.</p>
 */
export interface BoxPlotVisual {
  /**
   * @public
   * <p>The unique identifier of a visual. This identifier must be unique within the context of a dashboard, template, or analysis. Two dashboards, analyses, or templates can have visuals with the same identifiers..</p>
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
  ChartConfiguration?: BoxPlotChartConfiguration;

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
 * <p>The aggregated field wells of a combo chart.</p>
 */
export interface ComboChartAggregatedFieldWells {
  /**
   * @public
   * <p>The aggregated category field wells of a combo chart.</p>
   */
  Category?: DimensionField[];

  /**
   * @public
   * <p>The aggregated <code>BarValues</code> field well of a combo chart.</p>
   */
  BarValues?: MeasureField[];

  /**
   * @public
   * <p>The aggregated colors field well of a combo chart.</p>
   */
  Colors?: DimensionField[];

  /**
   * @public
   * <p>The aggregated <code>LineValues</code> field well of a combo chart.</p>
   */
  LineValues?: MeasureField[];
}

/**
 * @public
 * <p>The field wells of the visual.</p>
 *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
 */
export interface ComboChartFieldWells {
  /**
   * @public
   * <p>The aggregated field wells of a combo chart. Combo charts only have aggregated field wells. Columns in a combo chart are aggregated by category.</p>
   */
  ComboChartAggregatedFieldWells?: ComboChartAggregatedFieldWells;
}

/**
 * @public
 * <p>The sort configuration of a <code>ComboChartVisual</code>.</p>
 */
export interface ComboChartSortConfiguration {
  /**
   * @public
   * <p>The sort configuration of the category field well in a combo chart.</p>
   */
  CategorySort?: FieldSortOptions[];

  /**
   * @public
   * <p>The item limit configuration for the category field well of a combo chart.</p>
   */
  CategoryItemsLimit?: ItemsLimitConfiguration;

  /**
   * @public
   * <p>The sort configuration of the color field well in a combo chart.</p>
   */
  ColorSort?: FieldSortOptions[];

  /**
   * @public
   * <p>The item limit configuration of the color field well in a combo chart.</p>
   */
  ColorItemsLimit?: ItemsLimitConfiguration;
}

/**
 * @public
 * <p>The configuration of a <code>ComboChartVisual</code>.</p>
 */
export interface ComboChartConfiguration {
  /**
   * @public
   * <p>The field wells of the visual.</p>
   */
  FieldWells?: ComboChartFieldWells;

  /**
   * @public
   * <p>The sort configuration of a <code>ComboChartVisual</code>.</p>
   */
  SortConfiguration?: ComboChartSortConfiguration;

  /**
   * @public
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
   * @public
   * <p>The category axis of a combo chart.</p>
   */
  CategoryAxis?: AxisDisplayOptions;

  /**
   * @public
   * <p>The label options (label text, label visibility, and sort icon visibility) of a combo chart category (group/color) field well.</p>
   */
  CategoryLabelOptions?: ChartAxisLabelOptions;

  /**
   * @public
   * <p>The label display options (grid line, range, scale, and axis step) of a combo chart's primary y-axis (bar) field well.</p>
   */
  PrimaryYAxisDisplayOptions?: AxisDisplayOptions;

  /**
   * @public
   * <p>The label options (label text, label visibility, and sort icon visibility) of a combo chart's primary y-axis (bar) field well.</p>
   */
  PrimaryYAxisLabelOptions?: ChartAxisLabelOptions;

  /**
   * @public
   * <p>The label display options (grid line, range, scale, axis step) of a combo chart's secondary y-axis (line) field well.</p>
   */
  SecondaryYAxisDisplayOptions?: AxisDisplayOptions;

  /**
   * @public
   * <p>The label options (label text, label visibility, and sort icon visibility) of a combo chart's secondary y-axis(line) field well.</p>
   */
  SecondaryYAxisLabelOptions?: ChartAxisLabelOptions;

  /**
   * @public
   * <p>The label options (label text, label visibility, and sort icon visibility) of a combo chart's color field well.</p>
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
   *          <p>The data label options for a bar in a combo chart.</p>
   */
  BarDataLabels?: DataLabelOptions;

  /**
   * @public
   * <p>The options that determine if visual data labels are displayed.</p>
   *          <p>The data label options for a line in a combo chart.</p>
   */
  LineDataLabels?: DataLabelOptions;

  /**
   * @public
   * <p>The legend display setup of the visual.</p>
   */
  Tooltip?: TooltipOptions;

  /**
   * @public
   * <p>The reference line setup of the visual.</p>
   */
  ReferenceLines?: ReferenceLine[];

  /**
   * @public
   * <p>The palette (chart color) display setup of the visual.</p>
   */
  VisualPalette?: VisualPalette;
}

/**
 * @public
 * <p>A combo chart.</p>
 *          <p>The <code>ComboChartVisual</code> includes stacked bar combo charts and clustered bar combo charts</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/combo-charts.html">Using combo charts</a> in the <i>Amazon QuickSight User Guide</i>.</p>
 */
export interface ComboChartVisual {
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
  ChartConfiguration?: ComboChartConfiguration;

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
 * <p>The configuration of a <code>CustomContentVisual</code>.</p>
 */
export interface CustomContentConfiguration {
  /**
   * @public
   * <p>The input URL that links to the custom content that you want in the custom visual.</p>
   */
  ContentUrl?: string;

  /**
   * @public
   * <p>The content type of the custom content visual. You can use this to have the visual render as an image.</p>
   */
  ContentType?: CustomContentType | string;

  /**
   * @public
   * <p>The sizing options for the size of the custom content visual. This structure is required when the <code>ContentType</code> of the visual is <code>'IMAGE'</code>.</p>
   */
  ImageScaling?: CustomContentImageScalingConfiguration | string;
}

/**
 * @public
 * <p>A visual that contains custom content.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/custom-visual-content.html">Using custom visual content</a> in the <i>Amazon QuickSight User Guide</i>.</p>
 */
export interface CustomContentVisual {
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
   * <p>The configuration of a <code>CustomContentVisual</code>.</p>
   */
  ChartConfiguration?: CustomContentConfiguration;

  /**
   * @public
   * <p>The list of custom actions that are configured for a visual.</p>
   */
  Actions?: VisualCustomAction[];

  /**
   * @public
   * <p>The dataset that is used to create the custom content visual. You can't create a visual without a dataset.</p>
   */
  DataSetIdentifier: string | undefined;
}

/**
 * @public
 * <p>An empty visual.</p>
 *          <p>Empty visuals are used in layouts but have not been configured to show any data. A new visual created in the Amazon QuickSight console is considered an <code>EmptyVisual</code> until a visual type is selected.</p>
 */
export interface EmptyVisual {
  /**
   * @public
   * <p>The unique identifier of a visual. This identifier must be unique within the context of a dashboard, template, or analysis. Two dashboards, analyses, or templates can have visuals with the same identifiers.</p>
   */
  VisualId: string | undefined;

  /**
   * @public
   * <p>The data set that is used in the empty visual. Every visual requires a dataset to render.</p>
   */
  DataSetIdentifier: string | undefined;

  /**
   * @public
   * <p>The list of custom actions that are configured for a visual.</p>
   */
  Actions?: VisualCustomAction[];
}

/**
 * @public
 * <p>The aggregated field well of the filled map.</p>
 */
export interface FilledMapAggregatedFieldWells {
  /**
   * @public
   * <p>The aggregated location field well of the filled map. Values are grouped by location fields.</p>
   */
  Geospatial?: DimensionField[];

  /**
   * @public
   * <p>The aggregated color field well of a filled map. Values are aggregated based on location fields.</p>
   */
  Values?: MeasureField[];
}

/**
 * @public
 * <p>The field wells of a <code>FilledMapVisual</code>.</p>
 *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
 */
export interface FilledMapFieldWells {
  /**
   * @public
   * <p>The aggregated field well of the filled map.</p>
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
 * @public
 * <p>The map style options of the geospatial map.</p>
 */
export interface GeospatialMapStyleOptions {
  /**
   * @public
   * <p>The base map style of the geospatial map.</p>
   */
  BaseMapStyle?: BaseMapStyleType | string;
}

/**
 * @public
 * <p>The sort configuration of a <code>FilledMapVisual</code>.</p>
 */
export interface FilledMapSortConfiguration {
  /**
   * @public
   * <p>The sort configuration of the location fields.</p>
   */
  CategorySort?: FieldSortOptions[];
}

/**
 * @public
 * <p>The bound
 *             options (north, south, west, east) of the geospatial window options.</p>
 */
export interface GeospatialCoordinateBounds {
  /**
   * @public
   * <p>The latitude of the north bound of the geospatial coordinate bounds.</p>
   */
  North: number | undefined;

  /**
   * @public
   * <p>The latitude of the south bound of the geospatial coordinate bounds.</p>
   */
  South: number | undefined;

  /**
   * @public
   * <p>The longitude of the west bound of the geospatial coordinate bounds.</p>
   */
  West: number | undefined;

  /**
   * @public
   * <p>The longitude of the east bound of the geospatial coordinate bounds.</p>
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
 * @public
 * <p>The window options of the geospatial map visual.</p>
 */
export interface GeospatialWindowOptions {
  /**
   * @public
   * <p>The bounds options (north, south, west, east) of the geospatial window options.</p>
   */
  Bounds?: GeospatialCoordinateBounds;

  /**
   * @public
   * <p>The map zoom modes (manual, auto) of the geospatial window options.</p>
   */
  MapZoomMode?: MapZoomMode | string;
}

/**
 * @public
 * <p>The configuration for a <code>FilledMapVisual</code>.</p>
 */
export interface FilledMapConfiguration {
  /**
   * @public
   * <p>The field wells of the visual.</p>
   */
  FieldWells?: FilledMapFieldWells;

  /**
   * @public
   * <p>The sort configuration of a <code>FilledMapVisual</code>.</p>
   */
  SortConfiguration?: FilledMapSortConfiguration;

  /**
   * @public
   * <p>The legend display setup of the visual.</p>
   */
  Legend?: LegendOptions;

  /**
   * @public
   * <p>The tooltip display setup of the visual.</p>
   */
  Tooltip?: TooltipOptions;

  /**
   * @public
   * <p>The window options of the filled map visual.</p>
   */
  WindowOptions?: GeospatialWindowOptions;

  /**
   * @public
   * <p>The map style options of the filled map visual.</p>
   */
  MapStyleOptions?: GeospatialMapStyleOptions;
}

/**
 * @public
 * <p>Determines the gradient stop configuration.</p>
 */
export interface GradientStop {
  /**
   * @public
   * <p>Determines gradient offset value.</p>
   */
  GradientOffset: number | undefined;

  /**
   * @public
   * <p>Determines the data value.</p>
   */
  DataValue?: number;

  /**
   * @public
   * <p>Determines the color.</p>
   */
  Color?: string;
}

/**
 * @public
 * <p>Determines the gradient color settings.</p>
 */
export interface GradientColor {
  /**
   * @public
   * <p>The list of gradient color stops.</p>
   */
  Stops?: GradientStop[];
}

/**
 * @public
 * <p>Formatting configuration for gradient color.</p>
 */
export interface ConditionalFormattingGradientColor {
  /**
   * @public
   * <p>The expression that determines the formatting configuration for gradient color.</p>
   */
  Expression: string | undefined;

  /**
   * @public
   * <p>Determines the color.</p>
   */
  Color: GradientColor | undefined;
}

/**
 * @public
 * <p>Formatting configuration for solid color.</p>
 */
export interface ConditionalFormattingSolidColor {
  /**
   * @public
   * <p>The expression that determines the formatting configuration for solid color.</p>
   */
  Expression: string | undefined;

  /**
   * @public
   * <p>Determines the color.</p>
   */
  Color?: string;
}

/**
 * @public
 * <p>The formatting configuration for the color.</p>
 */
export interface ConditionalFormattingColor {
  /**
   * @public
   * <p>Formatting configuration for solid color.</p>
   */
  Solid?: ConditionalFormattingSolidColor;

  /**
   * @public
   * <p>Formatting configuration for gradient color.</p>
   */
  Gradient?: ConditionalFormattingGradientColor;
}

/**
 * @public
 * <p>The shape conditional formatting of a filled map visual.</p>
 */
export interface ShapeConditionalFormat {
  /**
   * @public
   * <p>The conditional formatting for the shape background color of a filled map visual.</p>
   */
  BackgroundColor: ConditionalFormattingColor | undefined;
}

/**
 * @public
 * <p>The conditional formatting that determines the shape of the filled map.</p>
 */
export interface FilledMapShapeConditionalFormatting {
  /**
   * @public
   * <p>The field ID of the filled map shape.</p>
   */
  FieldId: string | undefined;

  /**
   * @public
   * <p>The conditional formatting that determines the background color of a filled map's shape.</p>
   */
  Format?: ShapeConditionalFormat;
}

/**
 * @public
 * <p>Conditional formatting options of a <code>FilledMapVisual</code>.</p>
 */
export interface FilledMapConditionalFormattingOption {
  /**
   * @public
   * <p>The conditional formatting that determines the shape of the filled map.</p>
   */
  Shape: FilledMapShapeConditionalFormatting | undefined;
}

/**
 * @public
 * <p>The conditional formatting of a <code>FilledMapVisual</code>.</p>
 */
export interface FilledMapConditionalFormatting {
  /**
   * @public
   * <p>Conditional formatting options of a <code>FilledMapVisual</code>.</p>
   */
  ConditionalFormattingOptions: FilledMapConditionalFormattingOption[] | undefined;
}

/**
 * @public
 * <p>A filled map.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/filled-maps.html">Creating filled maps</a> in the <i>Amazon QuickSight User Guide</i>.</p>
 */
export interface FilledMapVisual {
  /**
   * @public
   * <p>The unique identifier of a visual. This identifier must be unique within the context of a dashboard, template, or analysis. Two dashboards, analyses, or templates can have visuals with the same identifiers..</p>
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
  ChartConfiguration?: FilledMapConfiguration;

  /**
   * @public
   * <p>The conditional formatting of a <code>FilledMapVisual</code>.</p>
   */
  ConditionalFormatting?: FilledMapConditionalFormatting;

  /**
   * @public
   * <p>The column hierarchy that is used during drill-downs and drill-ups.</p>
   */
  ColumnHierarchies?: ColumnHierarchy[];

  /**
   * @public
   * <p>The list of custom actions that are configured for a visual.</p>
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
 * @public
 * <p>The options that determine the presentation of the data labels.</p>
 */
export interface FunnelChartDataLabelOptions {
  /**
   * @public
   * <p>The visibility option that determines if data labels are displayed.</p>
   */
  Visibility?: Visibility | string;

  /**
   * @public
   * <p>The visibility of the category labels within the data labels.</p>
   */
  CategoryLabelVisibility?: Visibility | string;

  /**
   * @public
   * <p>The visibility of the measure labels within the data labels.</p>
   */
  MeasureLabelVisibility?: Visibility | string;

  /**
   * @public
   * <p>Determines the positioning of the data label relative to a section of the funnel.</p>
   */
  Position?: DataLabelPosition | string;

  /**
   * @public
   * <p>The font configuration for the data labels.</p>
   *          <p>Only the <code>FontSize</code> attribute of the font configuration is used for data labels.</p>
   */
  LabelFontConfiguration?: FontConfiguration;

  /**
   * @public
   * <p>The color of the data label text.</p>
   */
  LabelColor?: string;

  /**
   * @public
   * <p>Determines the style of the metric labels.</p>
   */
  MeasureDataLabelStyle?: FunnelChartMeasureDataLabelStyle | string;
}

/**
 * @public
 * <p>The field well configuration of a <code>FunnelChartVisual</code>.</p>
 */
export interface FunnelChartAggregatedFieldWells {
  /**
   * @public
   * <p>The category field wells of a funnel chart. Values are grouped by category fields.</p>
   */
  Category?: DimensionField[];

  /**
   * @public
   * <p>The value field wells of a funnel chart. Values are aggregated based on categories.</p>
   */
  Values?: MeasureField[];
}

/**
 * @public
 * <p>The field well configuration of a <code>FunnelChartVisual</code>.</p>
 *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
 */
export interface FunnelChartFieldWells {
  /**
   * @public
   * <p>The field well configuration of a <code>FunnelChartVisual</code>.</p>
   */
  FunnelChartAggregatedFieldWells?: FunnelChartAggregatedFieldWells;
}

/**
 * @public
 * <p>The sort configuration of a <code>FunnelChartVisual</code>.</p>
 */
export interface FunnelChartSortConfiguration {
  /**
   * @public
   * <p>The sort configuration of the category fields.</p>
   */
  CategorySort?: FieldSortOptions[];

  /**
   * @public
   * <p>The limit on the number of categories displayed.</p>
   */
  CategoryItemsLimit?: ItemsLimitConfiguration;
}

/**
 * @public
 * <p>The configuration of a <code>FunnelChartVisual</code>.</p>
 */
export interface FunnelChartConfiguration {
  /**
   * @public
   * <p>The field well configuration of a <code>FunnelChartVisual</code>.</p>
   */
  FieldWells?: FunnelChartFieldWells;

  /**
   * @public
   * <p>The sort configuration of a <code>FunnelChartVisual</code>.</p>
   */
  SortConfiguration?: FunnelChartSortConfiguration;

  /**
   * @public
   * <p>The label options of the categories that are displayed in a <code>FunnelChartVisual</code>.</p>
   */
  CategoryLabelOptions?: ChartAxisLabelOptions;

  /**
   * @public
   * <p>The label options for the values that are displayed in a <code>FunnelChartVisual</code>.</p>
   */
  ValueLabelOptions?: ChartAxisLabelOptions;

  /**
   * @public
   * <p>The tooltip configuration of a <code>FunnelChartVisual</code>.</p>
   */
  Tooltip?: TooltipOptions;

  /**
   * @public
   * <p>The options that determine the presentation of the data labels.</p>
   */
  DataLabelOptions?: FunnelChartDataLabelOptions;

  /**
   * @public
   * <p>The visual palette configuration of a <code>FunnelChartVisual</code>.</p>
   */
  VisualPalette?: VisualPalette;
}

/**
 * @public
 * <p>A funnel chart.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/funnel-visual-content.html">Using funnel charts</a> in the <i>Amazon QuickSight User Guide</i>.</p>
 */
export interface FunnelChartVisual {
  /**
   * @public
   * <p>The unique identifier of a visual. This identifier must be unique within the context of a dashboard, template, or analysis. Two dashboards, analyses, or templates can have visuals with the same identifiers..</p>
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
   * <p>The configuration of a <code>FunnelChartVisual</code>.</p>
   */
  ChartConfiguration?: FunnelChartConfiguration;

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
 * <p>The field well configuration of a <code>GaugeChartVisual</code>.</p>
 */
export interface GaugeChartFieldWells {
  /**
   * @public
   * <p>The value field wells of a <code>GaugeChartVisual</code>.</p>
   */
  Values?: MeasureField[];

  /**
   * @public
   * <p>The target value field wells of a <code>GaugeChartVisual</code>.</p>
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
 * @public
 * <p>The arc configuration of a <code>GaugeChartVisual</code>.</p>
 */
export interface ArcConfiguration {
  /**
   * @public
   * <p>The option that determines the arc angle of a <code>GaugeChartVisual</code>.</p>
   */
  ArcAngle?: number;

  /**
   * @public
   * <p>The options that determine the arc thickness of a <code>GaugeChartVisual</code>.</p>
   */
  ArcThickness?: ArcThicknessOptions | string;
}

/**
 * @public
 * <p>The arc axis range of a <code>GaugeChartVisual</code>.</p>
 */
export interface ArcAxisDisplayRange {
  /**
   * @public
   * <p>The minimum value of the arc axis range.</p>
   */
  Min?: number;

  /**
   * @public
   * <p>The maximum value of the arc axis range.</p>
   */
  Max?: number;
}

/**
 * @public
 * <p>The arc axis configuration of a <code>GaugeChartVisual</code>.</p>
 */
export interface ArcAxisConfiguration {
  /**
   * @public
   * <p>The arc axis range of a <code>GaugeChartVisual</code>.</p>
   */
  Range?: ArcAxisDisplayRange;

  /**
   * @public
   * <p>The reserved range of the arc axis.</p>
   */
  ReserveRange?: number;
}

/**
 * @public
 * <p>The format of the comparison.</p>
 *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
 */
export interface ComparisonFormatConfiguration {
  /**
   * @public
   * <p>The number display format.</p>
   */
  NumberDisplayFormatConfiguration?: NumberDisplayFormatConfiguration;

  /**
   * @public
   * <p>The percentage display format.</p>
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
 * @public
 * <p>The comparison display configuration of a KPI or gauge chart.</p>
 */
export interface ComparisonConfiguration {
  /**
   * @public
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
   */
  ComparisonMethod?: ComparisonMethod | string;

  /**
   * @public
   * <p>The format of the comparison.</p>
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
 * @public
 * <p>The options that determine the presentation of the <code>GaugeChartVisual</code>.</p>
 */
export interface GaugeChartOptions {
  /**
   * @public
   * <p>The options that determine the primary value display type.</p>
   */
  PrimaryValueDisplayType?: PrimaryValueDisplayType | string;

  /**
   * @public
   * <p>The comparison configuration of a <code>GaugeChartVisual</code>.</p>
   */
  Comparison?: ComparisonConfiguration;

  /**
   * @public
   * <p>The arc axis configuration of a <code>GaugeChartVisual</code>.</p>
   */
  ArcAxis?: ArcAxisConfiguration;

  /**
   * @public
   * <p>The arc configuration of a <code>GaugeChartVisual</code>.</p>
   */
  Arc?: ArcConfiguration;

  /**
   * @public
   * <p>The options that determine the primary value font configuration.</p>
   */
  PrimaryValueFontConfiguration?: FontConfiguration;
}

/**
 * @public
 * <p>The configuration of a <code>GaugeChartVisual</code>.</p>
 */
export interface GaugeChartConfiguration {
  /**
   * @public
   * <p>The field well configuration of a <code>GaugeChartVisual</code>.</p>
   */
  FieldWells?: GaugeChartFieldWells;

  /**
   * @public
   * <p>The options that determine the presentation of the <code>GaugeChartVisual</code>.</p>
   */
  GaugeChartOptions?: GaugeChartOptions;

  /**
   * @public
   * <p>The data label configuration of a <code>GaugeChartVisual</code>.</p>
   */
  DataLabels?: DataLabelOptions;

  /**
   * @public
   * <p>The tooltip configuration of a <code>GaugeChartVisual</code>.</p>
   */
  TooltipOptions?: TooltipOptions;

  /**
   * @public
   * <p>The visual palette configuration of a <code>GaugeChartVisual</code>.</p>
   */
  VisualPalette?: VisualPalette;
}

/**
 * @public
 * <p>The options that determine the presentation of the arc of a <code>GaugeChartVisual</code>.</p>
 */
export interface GaugeChartArcConditionalFormatting {
  /**
   * @public
   * <p>The conditional formatting of the arc foreground color.</p>
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
 * @public
 * <p>Determines the icon display configuration.</p>
 */
export interface ConditionalFormattingIconDisplayConfiguration {
  /**
   * @public
   * <p>Determines the icon display configuration.</p>
   */
  IconDisplayOption?: ConditionalFormattingIconDisplayOption | string;
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
 * @public
 * <p>Custom icon options for an icon set.</p>
 */
export interface ConditionalFormattingCustomIconOptions {
  /**
   * @public
   * <p>Determines the type of icon.</p>
   */
  Icon?: Icon | string;

  /**
   * @public
   * <p>Determines the Unicode icon type.</p>
   */
  UnicodeIcon?: string;
}

/**
 * @public
 * <p>Determines the custom condition for an icon set.</p>
 */
export interface ConditionalFormattingCustomIconCondition {
  /**
   * @public
   * <p>The expression that determines the condition of the icon set.</p>
   */
  Expression: string | undefined;

  /**
   * @public
   * <p>Custom icon options for an icon set.</p>
   */
  IconOptions: ConditionalFormattingCustomIconOptions | undefined;

  /**
   * @public
   * <p>Determines the color of the icon.</p>
   */
  Color?: string;

  /**
   * @public
   * <p>Determines the icon display configuration.</p>
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
 * @public
 * <p>Formatting configuration for icon set.</p>
 */
export interface ConditionalFormattingIconSet {
  /**
   * @public
   * <p>The expression that determines the formatting configuration for the icon set.</p>
   */
  Expression: string | undefined;

  /**
   * @public
   * <p>Determines the icon set type.</p>
   */
  IconSetType?: ConditionalFormattingIconSetType | string;
}

/**
 * @public
 * <p>The formatting configuration for the icon.</p>
 */
export interface ConditionalFormattingIcon {
  /**
   * @public
   * <p>Formatting configuration for icon set.</p>
   */
  IconSet?: ConditionalFormattingIconSet;

  /**
   * @public
   * <p>Determines the custom condition for an icon set.</p>
   */
  CustomCondition?: ConditionalFormattingCustomIconCondition;
}

/**
 * @public
 * <p>The conditional formatting for the primary value of a <code>GaugeChartVisual</code>.</p>
 */
export interface GaugeChartPrimaryValueConditionalFormatting {
  /**
   * @public
   * <p>The conditional formatting of the primary value text color.</p>
   */
  TextColor?: ConditionalFormattingColor;

  /**
   * @public
   * <p>The conditional formatting of the primary value icon.</p>
   */
  Icon?: ConditionalFormattingIcon;
}

/**
 * @public
 * <p>Conditional formatting options of a <code>GaugeChartVisual</code>.</p>
 */
export interface GaugeChartConditionalFormattingOption {
  /**
   * @public
   * <p>The conditional formatting for the primary value of a <code>GaugeChartVisual</code>.</p>
   */
  PrimaryValue?: GaugeChartPrimaryValueConditionalFormatting;

  /**
   * @public
   * <p>The options that determine the presentation of the arc of a <code>GaugeChartVisual</code>.</p>
   */
  Arc?: GaugeChartArcConditionalFormatting;
}

/**
 * @public
 * <p>The conditional formatting of a <code>GaugeChartVisual</code>.</p>
 */
export interface GaugeChartConditionalFormatting {
  /**
   * @public
   * <p>Conditional formatting options of a <code>GaugeChartVisual</code>.</p>
   */
  ConditionalFormattingOptions?: GaugeChartConditionalFormattingOption[];
}

/**
 * @public
 * <p>A gauge chart.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/gauge-chart.html">Using gauge charts</a> in the <i>Amazon QuickSight User Guide</i>.</p>
 */
export interface GaugeChartVisual {
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
   * <p>The configuration of a <code>GaugeChartVisual</code>.</p>
   */
  ChartConfiguration?: GaugeChartConfiguration;

  /**
   * @public
   * <p>The conditional formatting of a <code>GaugeChartVisual</code>.</p>
   */
  ConditionalFormatting?: GaugeChartConditionalFormatting;

  /**
   * @public
   * <p>The list of custom actions that are configured for a visual.</p>
   */
  Actions?: VisualCustomAction[];
}

/**
 * @public
 * <p>The aggregated field wells for a geospatial map.</p>
 */
export interface GeospatialMapAggregatedFieldWells {
  /**
   * @public
   * <p>The geospatial field wells of a geospatial map. Values are grouped by geospatial fields.</p>
   */
  Geospatial?: DimensionField[];

  /**
   * @public
   * <p>The size field wells of a geospatial map. Values are aggregated based on geospatial fields.</p>
   */
  Values?: MeasureField[];

  /**
   * @public
   * <p>The color field wells of a geospatial map.</p>
   */
  Colors?: DimensionField[];
}

/**
 * @public
 * <p>The field wells of a <code>GeospatialMapVisual</code>.</p>
 *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
 */
export interface GeospatialMapFieldWells {
  /**
   * @public
   * <p>The aggregated field well for a geospatial map.</p>
   */
  GeospatialMapAggregatedFieldWells?: GeospatialMapAggregatedFieldWells;
}

/**
 * @public
 * <p>The simple cluster marker of the cluster marker.</p>
 */
export interface SimpleClusterMarker {
  /**
   * @public
   * <p>The color of the simple cluster marker.</p>
   */
  Color?: string;
}

/**
 * @public
 * <p>The cluster marker that is a part of the cluster marker
 *             configuration.</p>
 */
export interface ClusterMarker {
  /**
   * @public
   * <p>The simple cluster marker of the cluster marker.</p>
   */
  SimpleClusterMarker?: SimpleClusterMarker;
}

/**
 * @public
 * <p>The cluster marker configuration of the geospatial map selected point style.</p>
 */
export interface ClusterMarkerConfiguration {
  /**
   * @public
   * <p>The cluster marker that is a part of the cluster marker configuration.</p>
   */
  ClusterMarker?: ClusterMarker;
}

/**
 * @public
 * <p>The color to be used in the heatmap point style.</p>
 */
export interface GeospatialHeatmapDataColor {
  /**
   * @public
   * <p>The hex color to be used in the heatmap point style.</p>
   */
  Color: string | undefined;
}

/**
 * @public
 * <p>The color scale specification for the heatmap point style.</p>
 */
export interface GeospatialHeatmapColorScale {
  /**
   * @public
   * <p>The list of colors to be used in heatmap point style.</p>
   */
  Colors?: GeospatialHeatmapDataColor[];
}

/**
 * @public
 * <p>The heatmap configuration of the geospatial point style.</p>
 */
export interface GeospatialHeatmapConfiguration {
  /**
   * @public
   * <p>The color scale specification for the heatmap point style.</p>
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
 * @public
 * <p>The point style of the geospatial map.</p>
 */
export interface GeospatialPointStyleOptions {
  /**
   * @public
   * <p>The selected point styles (point, cluster) of the geospatial map.</p>
   */
  SelectedPointStyle?: GeospatialSelectedPointStyle | string;

  /**
   * @public
   * <p>The cluster marker configuration of the geospatial point style.</p>
   */
  ClusterMarkerConfiguration?: ClusterMarkerConfiguration;

  /**
   * @public
   * <p>The heatmap configuration of the geospatial point style.</p>
   */
  HeatmapConfiguration?: GeospatialHeatmapConfiguration;
}

/**
 * @public
 * <p>The configuration of a <code>GeospatialMapVisual</code>.</p>
 */
export interface GeospatialMapConfiguration {
  /**
   * @public
   * <p>The field wells of the visual.</p>
   */
  FieldWells?: GeospatialMapFieldWells;

  /**
   * @public
   * <p>The legend display setup of the visual.</p>
   */
  Legend?: LegendOptions;

  /**
   * @public
   * <p>The tooltip display setup of the visual.</p>
   */
  Tooltip?: TooltipOptions;

  /**
   * @public
   * <p>The window options of the geospatial map.</p>
   */
  WindowOptions?: GeospatialWindowOptions;

  /**
   * @public
   * <p>The map style options of the geospatial map.</p>
   */
  MapStyleOptions?: GeospatialMapStyleOptions;

  /**
   * @public
   * <p>The point style options of the geospatial map.</p>
   */
  PointStyleOptions?: GeospatialPointStyleOptions;

  /**
   * @public
   * <p>The visual display options for the visual palette.</p>
   */
  VisualPalette?: VisualPalette;
}

/**
 * @public
 * <p>A geospatial map or a points on map visual.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/point-maps.html">Creating point maps</a> in the <i>Amazon QuickSight User Guide</i>.</p>
 */
export interface GeospatialMapVisual {
  /**
   * @public
   * <p>The unique identifier of a visual. This identifier must be unique within the context of a dashboard, template, or analysis. Two dashboards, analyses, or templates can have visuals with the same identifiers..</p>
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
  ChartConfiguration?: GeospatialMapConfiguration;

  /**
   * @public
   * <p>The column hierarchy that is used during drill-downs and drill-ups.</p>
   */
  ColumnHierarchies?: ColumnHierarchy[];

  /**
   * @public
   * <p>The list of custom actions that are configured for a visual.</p>
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
 * @public
 * <p>Determines the color that is applied to a particular data value.</p>
 */
export interface DataColor {
  /**
   * @public
   * <p>The color that is applied to the data value.</p>
   */
  Color?: string;

  /**
   * @public
   * <p>The data value that the color is applied to.</p>
   */
  DataValue?: number;
}

/**
 * @public
 * <p>Determines the color scale that is applied to the visual.</p>
 */
export interface ColorScale {
  /**
   * @public
   * <p>Determines the list of colors that are applied to the visual.</p>
   */
  Colors: DataColor[] | undefined;

  /**
   * @public
   * <p>Determines the color fill type.</p>
   */
  ColorFillType: ColorFillType | string | undefined;

  /**
   * @public
   * <p>Determines the color that is applied to null values.</p>
   */
  NullValueColor?: DataColor;
}

/**
 * @public
 * <p>The aggregated field wells of a heat map.</p>
 */
export interface HeatMapAggregatedFieldWells {
  /**
   * @public
   * <p>The rows field well of a heat map.</p>
   */
  Rows?: DimensionField[];

  /**
   * @public
   * <p>The columns field well of a heat map.</p>
   */
  Columns?: DimensionField[];

  /**
   * @public
   * <p>The values field well of a heat map.</p>
   */
  Values?: MeasureField[];
}

/**
 * @public
 * <p>The field well configuration of a heat map.</p>
 *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
 */
export interface HeatMapFieldWells {
  /**
   * @public
   * <p>The aggregated field wells of a heat map.</p>
   */
  HeatMapAggregatedFieldWells?: HeatMapAggregatedFieldWells;
}

/**
 * @public
 * <p>The sort configuration of a heat map.</p>
 */
export interface HeatMapSortConfiguration {
  /**
   * @public
   * <p>The field sort configuration of the rows fields.</p>
   */
  HeatMapRowSort?: FieldSortOptions[];

  /**
   * @public
   * <p>The column sort configuration for heat map for columns that aren't a part of a field well.</p>
   */
  HeatMapColumnSort?: FieldSortOptions[];

  /**
   * @public
   * <p>The limit on the number of rows that are displayed in a heat map.</p>
   */
  HeatMapRowItemsLimitConfiguration?: ItemsLimitConfiguration;

  /**
   * @public
   * <p>The limit on the number of columns that are displayed in a heat map.</p>
   */
  HeatMapColumnItemsLimitConfiguration?: ItemsLimitConfiguration;
}

/**
 * @public
 * <p>The configuration of a heat map.</p>
 */
export interface HeatMapConfiguration {
  /**
   * @public
   * <p>The field wells of the visual.</p>
   */
  FieldWells?: HeatMapFieldWells;

  /**
   * @public
   * <p>The sort configuration of a heat map.</p>
   */
  SortConfiguration?: HeatMapSortConfiguration;

  /**
   * @public
   * <p>The label options of the row that is displayed in a <code>heat map</code>.</p>
   */
  RowLabelOptions?: ChartAxisLabelOptions;

  /**
   * @public
   * <p>The label options of the column that is displayed in a heat map.</p>
   */
  ColumnLabelOptions?: ChartAxisLabelOptions;

  /**
   * @public
   * <p>The color options (gradient color, point of divergence) in a heat map.</p>
   */
  ColorScale?: ColorScale;

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
}

/**
 * @public
 * <p>A heat map.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/heat-map.html">Using heat maps</a> in the <i>Amazon QuickSight User Guide</i>.</p>
 */
export interface HeatMapVisual {
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
   * <p>The configuration of a heat map.</p>
   */
  ChartConfiguration?: HeatMapConfiguration;

  /**
   * @public
   * <p>The column hierarchy that is used during drill-downs and drill-ups.</p>
   */
  ColumnHierarchies?: ColumnHierarchy[];

  /**
   * @public
   * <p>The list of custom actions that are configured for a visual.</p>
   */
  Actions?: VisualCustomAction[];
}

/**
 * @public
 * <p>The options that determine the bin count of a histogram.</p>
 */
export interface BinCountOptions {
  /**
   * @public
   * <p>The options that determine the bin count value.</p>
   */
  Value?: number;
}

/**
 * @public
 * <p>The options that determine the bin width of a histogram.</p>
 */
export interface BinWidthOptions {
  /**
   * @public
   * <p>The options that determine the bin width value.</p>
   */
  Value?: number;

  /**
   * @public
   * <p>The options that determine the bin count limit.</p>
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
 * @public
 * <p>The options that determine the presentation of histogram bins.</p>
 */
export interface HistogramBinOptions {
  /**
   * @public
   * <p>The options that determine the selected bin type.</p>
   */
  SelectedBinType?: HistogramBinType | string;

  /**
   * @public
   * <p>The options that determine the bin count of a histogram.</p>
   */
  BinCount?: BinCountOptions;

  /**
   * @public
   * <p>The options that determine the bin width of a histogram.</p>
   */
  BinWidth?: BinWidthOptions;

  /**
   * @public
   * <p>The options that determine the bin start value.</p>
   */
  StartValue?: number;
}

/**
 * @public
 * <p>The field well configuration of a histogram.</p>
 */
export interface HistogramAggregatedFieldWells {
  /**
   * @public
   * <p>The value field wells of a histogram. Values are aggregated by <code>COUNT</code> or <code>DISTINCT_COUNT</code>.</p>
   */
  Values?: MeasureField[];
}

/**
 * @public
 * <p>The field well configuration of a histogram.</p>
 */
export interface HistogramFieldWells {
  /**
   * @public
   * <p>The field well configuration of a histogram.</p>
   */
  HistogramAggregatedFieldWells?: HistogramAggregatedFieldWells;
}

/**
 * @public
 * <p>The configuration for a <code>HistogramVisual</code>.</p>
 */
export interface HistogramConfiguration {
  /**
   * @public
   * <p>The field well configuration of a histogram.</p>
   */
  FieldWells?: HistogramFieldWells;

  /**
   * @public
   * <p>The options that determine the presentation of the x-axis.</p>
   */
  XAxisDisplayOptions?: AxisDisplayOptions;

  /**
   * @public
   * <p>The options that determine the presentation of the x-axis label.</p>
   */
  XAxisLabelOptions?: ChartAxisLabelOptions;

  /**
   * @public
   * <p>The options that determine the presentation of the y-axis.</p>
   */
  YAxisDisplayOptions?: AxisDisplayOptions;

  /**
   * @public
   * <p>The options that determine the presentation of histogram bins.</p>
   */
  BinOptions?: HistogramBinOptions;

  /**
   * @public
   * <p>The data label configuration of a histogram.</p>
   */
  DataLabels?: DataLabelOptions;

  /**
   * @public
   * <p>The tooltip configuration of a histogram.</p>
   */
  Tooltip?: TooltipOptions;

  /**
   * @public
   * <p>The visual palette configuration of a histogram.</p>
   */
  VisualPalette?: VisualPalette;
}

/**
 * @public
 * <p>A histogram.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/histogram-charts.html">Using histograms</a> in the <i>Amazon QuickSight User Guide</i>.</p>
 */
export interface HistogramVisual {
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
   * <p>The configuration for a <code>HistogramVisual</code>.</p>
   */
  ChartConfiguration?: HistogramConfiguration;

  /**
   * @public
   * <p>The list of custom actions that are configured for a visual.</p>
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
 * @public
 * <p>The forecast computation configuration.</p>
 */
export interface ForecastComputation {
  /**
   * @public
   * <p>The ID for a computation.</p>
   */
  ComputationId: string | undefined;

  /**
   * @public
   * <p>The name of a computation.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The time field that is used in a computation.</p>
   */
  Time?: DimensionField;

  /**
   * @public
   * <p>The value field that is used in a computation.</p>
   */
  Value?: MeasureField;

  /**
   * @public
   * <p>The periods forward setup of a forecast computation.</p>
   */
  PeriodsForward?: number;

  /**
   * @public
   * <p>The periods backward setup of a forecast computation.</p>
   */
  PeriodsBackward?: number;

  /**
   * @public
   * <p>The upper boundary setup of a forecast computation.</p>
   */
  UpperBoundary?: number;

  /**
   * @public
   * <p>The lower boundary setup of a forecast computation.</p>
   */
  LowerBoundary?: number;

  /**
   * @public
   * <p>The prediction interval setup of a forecast computation.</p>
   */
  PredictionInterval?: number;

  /**
   * @public
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
   */
  Seasonality?: ForecastComputationSeasonality | string;

  /**
   * @public
   * <p>The custom seasonality value setup of a forecast computation.</p>
   */
  CustomSeasonalityValue?: number;
}

/**
 * @public
 * <p>The growth rate computation configuration.</p>
 */
export interface GrowthRateComputation {
  /**
   * @public
   * <p>The ID for a computation.</p>
   */
  ComputationId: string | undefined;

  /**
   * @public
   * <p>The name of a computation.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The time field that is used in a computation.</p>
   */
  Time?: DimensionField;

  /**
   * @public
   * <p>The value field that is used in a computation.</p>
   */
  Value?: MeasureField;

  /**
   * @public
   * <p>The period size setup of a growth rate computation.</p>
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
 * @public
 * <p>The maximum and minimum computation configuration.</p>
 */
export interface MaximumMinimumComputation {
  /**
   * @public
   * <p>The ID for a computation.</p>
   */
  ComputationId: string | undefined;

  /**
   * @public
   * <p>The name of a computation.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The time field that is used in a computation.</p>
   */
  Time?: DimensionField;

  /**
   * @public
   * <p>The value field that is used in a computation.</p>
   */
  Value?: MeasureField;

  /**
   * @public
   * <p>The type of computation. Choose one of the following options:</p>
   *          <ul>
   *             <li>
   *                <p>MAXIMUM: A maximum computation.</p>
   *             </li>
   *             <li>
   *                <p>MINIMUM: A minimum computation.</p>
   *             </li>
   *          </ul>
   */
  Type: MaximumMinimumComputationType | string | undefined;
}

/**
 * @public
 * <p>The metric comparison computation configuration.</p>
 */
export interface MetricComparisonComputation {
  /**
   * @public
   * <p>The ID for a computation.</p>
   */
  ComputationId: string | undefined;

  /**
   * @public
   * <p>The name of a computation.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The time field that is used in a computation.</p>
   */
  Time?: DimensionField;

  /**
   * @public
   * <p>The field that is used in a metric comparison from value setup.</p>
   */
  FromValue?: MeasureField;

  /**
   * @public
   * <p>The field that is used in a metric comparison to value setup.</p>
   */
  TargetValue?: MeasureField;
}

/**
 * @public
 * <p>The period over period computation configuration.</p>
 */
export interface PeriodOverPeriodComputation {
  /**
   * @public
   * <p>The ID for a computation.</p>
   */
  ComputationId: string | undefined;

  /**
   * @public
   * <p>The name of a computation.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The time field that is used in a computation.</p>
   */
  Time?: DimensionField;

  /**
   * @public
   * <p>The value field that is used in a computation.</p>
   */
  Value?: MeasureField;
}

/**
 * @public
 * <p>The period to date computation configuration.</p>
 */
export interface PeriodToDateComputation {
  /**
   * @public
   * <p>The ID for a computation.</p>
   */
  ComputationId: string | undefined;

  /**
   * @public
   * <p>The name of a computation.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The time field that is used in a computation.</p>
   */
  Time?: DimensionField;

  /**
   * @public
   * <p>The value field that is used in a computation.</p>
   */
  Value?: MeasureField;

  /**
   * @public
   * <p>The time granularity setup of period to date computation. Choose from the following options:</p>
   *          <ul>
   *             <li>
   *                <p>YEAR: Year to date.</p>
   *             </li>
   *             <li>
   *                <p>MONTH: Month to date.</p>
   *             </li>
   *          </ul>
   */
  PeriodTimeGranularity?: TimeGranularity | string;
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
 * @public
 * <p>The top movers and bottom movers computation setup.</p>
 */
export interface TopBottomMoversComputation {
  /**
   * @public
   * <p>The ID for a computation.</p>
   */
  ComputationId: string | undefined;

  /**
   * @public
   * <p>The name of a computation.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The time field that is used in a computation.</p>
   */
  Time?: DimensionField;

  /**
   * @public
   * <p>The category field that is used in a computation.</p>
   */
  Category?: DimensionField;

  /**
   * @public
   * <p>The value field that is used in a computation.</p>
   */
  Value?: MeasureField;

  /**
   * @public
   * <p>The mover size setup of the top and bottom movers computation.</p>
   */
  MoverSize?: number;

  /**
   * @public
   * <p>The sort order setup of the top and bottom movers computation.</p>
   */
  SortOrder?: TopBottomSortOrder | string;

  /**
   * @public
   * <p>The computation type. Choose from the following options:</p>
   *          <ul>
   *             <li>
   *                <p>TOP: Top movers computation.</p>
   *             </li>
   *             <li>
   *                <p>BOTTOM: Bottom movers computation.</p>
   *             </li>
   *          </ul>
   */
  Type: TopBottomComputationType | string | undefined;
}

/**
 * @public
 * <p>The top ranked and bottom ranked computation configuration.</p>
 */
export interface TopBottomRankedComputation {
  /**
   * @public
   * <p>The ID for a computation.</p>
   */
  ComputationId: string | undefined;

  /**
   * @public
   * <p>The name of a computation.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The category field that is used in a computation.</p>
   */
  Category?: DimensionField;

  /**
   * @public
   * <p>The value field that is used in a computation.</p>
   */
  Value?: MeasureField;

  /**
   * @public
   * <p>The result size of a top and bottom ranked computation.</p>
   */
  ResultSize?: number;

  /**
   * @public
   * <p>The computation type. Choose one of the following options:</p>
   *          <ul>
   *             <li>
   *                <p>TOP: A top ranked computation.</p>
   *             </li>
   *             <li>
   *                <p>BOTTOM: A bottom ranked computation.</p>
   *             </li>
   *          </ul>
   */
  Type: TopBottomComputationType | string | undefined;
}

/**
 * @public
 * <p>The total aggregation computation configuration.</p>
 */
export interface TotalAggregationComputation {
  /**
   * @public
   * <p>The ID for a computation.</p>
   */
  ComputationId: string | undefined;

  /**
   * @public
   * <p>The name of a computation.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The value field that is used in a computation.</p>
   */
  Value?: MeasureField;
}

/**
 * @public
 * <p>The unique values computation configuration.</p>
 */
export interface UniqueValuesComputation {
  /**
   * @public
   * <p>The ID for a computation.</p>
   */
  ComputationId: string | undefined;

  /**
   * @public
   * <p>The name of a computation.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The category field that is used in a computation.</p>
   */
  Category?: DimensionField;
}

/**
 * @public
 * <p>The computation union that is used in an insight visual.</p>
 *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
 */
export interface Computation {
  /**
   * @public
   * <p>The top ranked and bottom ranked computation configuration.</p>
   */
  TopBottomRanked?: TopBottomRankedComputation;

  /**
   * @public
   * <p>The top movers and bottom movers computation configuration.</p>
   */
  TopBottomMovers?: TopBottomMoversComputation;

  /**
   * @public
   * <p>The total aggregation computation configuration.</p>
   */
  TotalAggregation?: TotalAggregationComputation;

  /**
   * @public
   * <p>The maximum and minimum computation configuration.</p>
   */
  MaximumMinimum?: MaximumMinimumComputation;

  /**
   * @public
   * <p>The metric comparison computation configuration.</p>
   */
  MetricComparison?: MetricComparisonComputation;

  /**
   * @public
   * <p>The period over period computation configuration.</p>
   */
  PeriodOverPeriod?: PeriodOverPeriodComputation;

  /**
   * @public
   * <p>The period to <code>DataSetIdentifier</code> computation configuration.</p>
   */
  PeriodToDate?: PeriodToDateComputation;

  /**
   * @public
   * <p>The growth rate computation configuration.</p>
   */
  GrowthRate?: GrowthRateComputation;

  /**
   * @public
   * <p>The unique values computation configuration.</p>
   */
  UniqueValues?: UniqueValuesComputation;

  /**
   * @public
   * <p>The forecast computation configuration.</p>
   */
  Forecast?: ForecastComputation;
}

/**
 * @public
 * <p>The custom narrative options.</p>
 */
export interface CustomNarrativeOptions {
  /**
   * @public
   * <p>The string input of custom narrative.</p>
   */
  Narrative: string | undefined;
}

/**
 * @public
 * <p>The configuration of an insight visual.</p>
 */
export interface InsightConfiguration {
  /**
   * @public
   * <p>The computations configurations of the insight visual</p>
   */
  Computations?: Computation[];

  /**
   * @public
   * <p>The custom narrative of the insight visual.</p>
   */
  CustomNarrative?: CustomNarrativeOptions;
}

/**
 * @public
 * <p>An insight visual.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/computational-insights.html">Working with insights</a> in the <i>Amazon QuickSight User Guide</i>.</p>
 */
export interface InsightVisual {
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
   * <p>The configuration of an insight visual.</p>
   */
  InsightConfiguration?: InsightConfiguration;

  /**
   * @public
   * <p>The list of custom actions that are configured for a visual.</p>
   */
  Actions?: VisualCustomAction[];

  /**
   * @public
   * <p>The dataset that is used in the insight visual.</p>
   */
  DataSetIdentifier: string | undefined;
}

/**
 * @public
 * <p>The field well configuration of a KPI visual.</p>
 */
export interface KPIFieldWells {
  /**
   * @public
   * <p>The value field wells of a KPI visual.</p>
   */
  Values?: MeasureField[];

  /**
   * @public
   * <p>The target value field wells of a KPI visual.</p>
   */
  TargetValues?: MeasureField[];

  /**
   * @public
   * <p>The trend group field wells of a KPI visual.</p>
   */
  TrendGroups?: DimensionField[];
}

/**
 * @public
 * <p>The options that determine the presentation of the progress bar of a KPI visual.</p>
 */
export interface ProgressBarOptions {
  /**
   * @public
   * <p>The visibility of the progress bar.</p>
   */
  Visibility?: Visibility | string;
}

/**
 * @public
 * <p>The options that determine the presentation of the secondary value of a KPI visual.</p>
 */
export interface SecondaryValueOptions {
  /**
   * @public
   * <p>Determines the visibility of the secondary value.</p>
   */
  Visibility?: Visibility | string;
}

/**
 * @public
 * <p>The options that determine the presentation of trend arrows in a KPI visual.</p>
 */
export interface TrendArrowOptions {
  /**
   * @public
   * <p>The visibility of the trend arrows.</p>
   */
  Visibility?: Visibility | string;
}

/**
 * @public
 * <p>The options that determine the presentation of a KPI visual.</p>
 */
export interface KPIOptions {
  /**
   * @public
   * <p>The options that determine the presentation of the progress bar of a KPI visual.</p>
   */
  ProgressBar?: ProgressBarOptions;

  /**
   * @public
   * <p>The options that determine the presentation of trend arrows in a KPI visual.</p>
   */
  TrendArrows?: TrendArrowOptions;

  /**
   * @public
   * <p>The options that determine the presentation of the secondary value of a KPI visual.</p>
   */
  SecondaryValue?: SecondaryValueOptions;

  /**
   * @public
   * <p>The comparison configuration of a KPI visual.</p>
   */
  Comparison?: ComparisonConfiguration;

  /**
   * @public
   * <p>The options that determine the primary value display type.</p>
   */
  PrimaryValueDisplayType?: PrimaryValueDisplayType | string;

  /**
   * @public
   * <p>The options that determine the primary value font configuration.</p>
   */
  PrimaryValueFontConfiguration?: FontConfiguration;

  /**
   * @public
   * <p>The options that determine the secondary value font configuration.</p>
   */
  SecondaryValueFontConfiguration?: FontConfiguration;
}

/**
 * @public
 * <p>The sort configuration of a KPI visual.</p>
 */
export interface KPISortConfiguration {
  /**
   * @public
   * <p>The sort configuration of the trend group fields.</p>
   */
  TrendGroupSort?: FieldSortOptions[];
}

/**
 * @public
 * <p>The configuration of a KPI visual.</p>
 */
export interface KPIConfiguration {
  /**
   * @public
   * <p>The field well configuration of a KPI visual.</p>
   */
  FieldWells?: KPIFieldWells;

  /**
   * @public
   * <p>The sort configuration of a KPI visual.</p>
   */
  SortConfiguration?: KPISortConfiguration;

  /**
   * @public
   * <p>The options that determine the presentation of a KPI visual.</p>
   */
  KPIOptions?: KPIOptions;
}

/**
 * @public
 * <p>The conditional formatting for the primary value of a KPI visual.</p>
 */
export interface KPIPrimaryValueConditionalFormatting {
  /**
   * @public
   * <p>The conditional formatting of the  primary value's text color.</p>
   */
  TextColor?: ConditionalFormattingColor;

  /**
   * @public
   * <p>The conditional formatting of the primary value's icon.</p>
   */
  Icon?: ConditionalFormattingIcon;
}

/**
 * @public
 * <p>The conditional formatting for the progress bar of a KPI visual.</p>
 */
export interface KPIProgressBarConditionalFormatting {
  /**
   * @public
   * <p>The conditional formatting of the progress bar's foreground color.</p>
   */
  ForegroundColor?: ConditionalFormattingColor;
}

/**
 * @public
 * <p>The conditional formatting options of a KPI visual.</p>
 */
export interface KPIConditionalFormattingOption {
  /**
   * @public
   * <p>The conditional formatting for the primary value of a KPI visual.</p>
   */
  PrimaryValue?: KPIPrimaryValueConditionalFormatting;

  /**
   * @public
   * <p>The conditional formatting for the progress bar of a KPI visual.</p>
   */
  ProgressBar?: KPIProgressBarConditionalFormatting;
}

/**
 * @public
 * <p>The conditional formatting of a KPI visual.</p>
 */
export interface KPIConditionalFormatting {
  /**
   * @public
   * <p>The conditional formatting options of a KPI visual.</p>
   */
  ConditionalFormattingOptions?: KPIConditionalFormattingOption[];
}

/**
 * @public
 * <p>A key performance indicator (KPI).</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/kpi.html">Using KPIs</a> in the <i>Amazon QuickSight User Guide</i>.</p>
 */
export interface KPIVisual {
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
   * <p>The configuration of a KPI visual.</p>
   */
  ChartConfiguration?: KPIConfiguration;

  /**
   * @public
   * <p>The conditional formatting of a KPI visual.</p>
   */
  ConditionalFormatting?: KPIConditionalFormatting;

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
 * <p>Line styles options for a line series in <code>LineChartVisual</code>.</p>
 */
export interface LineChartLineStyleSettings {
  /**
   * @public
   * <p>Configuration option that determines whether to show the line for the series.</p>
   */
  LineVisibility?: Visibility | string;

  /**
   * @public
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
   */
  LineInterpolation?: LineInterpolation | string;

  /**
   * @public
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
   */
  LineStyle?: LineChartLineStyle | string;

  /**
   * @public
   * <p>Width that determines the line thickness.</p>
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
 * @public
 * <p>Marker styles options for a line series in <code>LineChartVisual</code>.</p>
 */
export interface LineChartMarkerStyleSettings {
  /**
   * @public
   * <p>Configuration option that determines whether to show the markers in the series.</p>
   */
  MarkerVisibility?: Visibility | string;

  /**
   * @public
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
   */
  MarkerShape?: LineChartMarkerShape | string;

  /**
   * @public
   * <p>Size of marker in the series.</p>
   */
  MarkerSize?: string;

  /**
   * @public
   * <p>Color of marker in the series.</p>
   */
  MarkerColor?: string;
}

/**
 * @public
 * <p>The options that determine the default presentation of all line series in <code>LineChartVisual</code>.</p>
 */
export interface LineChartDefaultSeriesSettings {
  /**
   * @public
   * <p>The axis to which you are binding all line series to.</p>
   */
  AxisBinding?: AxisBinding | string;

  /**
   * @public
   * <p>Line styles options for all line series in the visual.</p>
   */
  LineStyleSettings?: LineChartLineStyleSettings;

  /**
   * @public
   * <p>Marker styles options for all line series in the visual.</p>
   */
  MarkerStyleSettings?: LineChartMarkerStyleSettings;
}

/**
 * @public
 * <p>The field well configuration of a line chart.</p>
 */
export interface LineChartAggregatedFieldWells {
  /**
   * @public
   * <p>The category field wells of a line chart. Values are grouped by category fields.</p>
   */
  Category?: DimensionField[];

  /**
   * @public
   * <p>The value field wells of a line chart. Values are aggregated based on categories.</p>
   */
  Values?: MeasureField[];

  /**
   * @public
   * <p>The color field wells of a line chart. Values are grouped by category fields.</p>
   */
  Colors?: DimensionField[];

  /**
   * @public
   * <p>The small multiples field well of a line chart.</p>
   */
  SmallMultiples?: DimensionField[];
}

/**
 * @public
 * <p>The field well configuration of a line chart.</p>
 */
export interface LineChartFieldWells {
  /**
   * @public
   * <p>The field well configuration of a line chart.</p>
   */
  LineChartAggregatedFieldWells?: LineChartAggregatedFieldWells;
}

/**
 * @public
 * <p>The forecast properties setup of a forecast in the line chart.</p>
 */
export interface TimeBasedForecastProperties {
  /**
   * @public
   * <p>The periods forward setup of a forecast computation.</p>
   */
  PeriodsForward?: number;

  /**
   * @public
   * <p>The periods backward setup of a forecast computation.</p>
   */
  PeriodsBackward?: number;

  /**
   * @public
   * <p>The upper boundary setup of a forecast computation.</p>
   */
  UpperBoundary?: number;

  /**
   * @public
   * <p>The lower boundary setup of a forecast computation.</p>
   */
  LowerBoundary?: number;

  /**
   * @public
   * <p>The prediction interval setup of a forecast computation.</p>
   */
  PredictionInterval?: number;

  /**
   * @public
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
   */
  Seasonality?: number;
}

/**
 * @public
 * <p>Provides the forecast to meet the target for a particular date.</p>
 */
export interface WhatIfPointScenario {
  /**
   * @public
   * <p>The date that you need the forecast results for.</p>
   */
  Date: Date | undefined;

  /**
   * @public
   * <p>The target value that you want to meet for the provided date.</p>
   */
  Value: number | undefined;
}

/**
 * @public
 * <p>Provides the forecast to meet the target for a particular date range.</p>
 */
export interface WhatIfRangeScenario {
  /**
   * @public
   * <p>The start date in the date range that you need the forecast results for.</p>
   */
  StartDate: Date | undefined;

  /**
   * @public
   * <p>The end date in the date range that you need the forecast results for.</p>
   */
  EndDate: Date | undefined;

  /**
   * @public
   * <p>The target value that you want to meet for the provided date range.</p>
   */
  Value: number | undefined;
}

/**
 * @public
 * <p>The forecast scenario of a forecast in the line chart.</p>
 */
export interface ForecastScenario {
  /**
   * @public
   * <p>The what-if analysis forecast setup with the target date.</p>
   */
  WhatIfPointScenario?: WhatIfPointScenario;

  /**
   * @public
   * <p>The what-if analysis forecast setup with the date range.</p>
   */
  WhatIfRangeScenario?: WhatIfRangeScenario;
}

/**
 * @public
 * <p>The forecast configuration that is used in a line chart's display properties.</p>
 */
export interface ForecastConfiguration {
  /**
   * @public
   * <p>The forecast properties setup of a forecast in the line
   *             chart.</p>
   */
  ForecastProperties?: TimeBasedForecastProperties;

  /**
   * @public
   * <p>The forecast scenario of a forecast in the line chart.</p>
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
 * @public
 * <p>The configuration options that determine how missing data is treated during the rendering of a line chart.</p>
 */
export interface MissingDataConfiguration {
  /**
   * @public
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
   */
  TreatmentOption?: MissingDataTreatmentOption | string;
}

/**
 * @public
 * <p>The series axis configuration of a line chart.</p>
 */
export interface LineSeriesAxisDisplayOptions {
  /**
   * @public
   * <p>The options that determine the presentation of the line series axis.</p>
   */
  AxisOptions?: AxisDisplayOptions;

  /**
   * @public
   * <p>The configuration options that determine how missing data is treated during the rendering of a line chart.</p>
   */
  MissingDataConfigurations?: MissingDataConfiguration[];
}

/**
 * @public
 * <p>The options that determine the presentation of a line series in the visual</p>
 */
export interface LineChartSeriesSettings {
  /**
   * @public
   * <p>Line styles options for a line series in <code>LineChartVisual</code>.</p>
   */
  LineStyleSettings?: LineChartLineStyleSettings;

  /**
   * @public
   * <p>Marker styles options for a line series in <code>LineChartVisual</code>.</p>
   */
  MarkerStyleSettings?: LineChartMarkerStyleSettings;
}

/**
 * @public
 * <p>The data field series item configuration of a line chart.</p>
 */
export interface DataFieldSeriesItem {
  /**
   * @public
   * <p>The field ID of the field that you are setting the axis binding to.</p>
   */
  FieldId: string | undefined;

  /**
   * @public
   * <p>The field value of the field that you are setting the axis binding to.</p>
   */
  FieldValue?: string;

  /**
   * @public
   * <p>The axis that you are binding the field to.</p>
   */
  AxisBinding: AxisBinding | string | undefined;

  /**
   * @public
   * <p>The options that determine the presentation of line series associated to the field.</p>
   */
  Settings?: LineChartSeriesSettings;
}

/**
 * @public
 * <p>The field series item configuration of a line chart.</p>
 */
export interface FieldSeriesItem {
  /**
   * @public
   * <p>The field ID of the field for which you are setting the axis binding.</p>
   */
  FieldId: string | undefined;

  /**
   * @public
   * <p>The axis that you are binding the field to.</p>
   */
  AxisBinding: AxisBinding | string | undefined;

  /**
   * @public
   * <p>The options that determine the presentation of line series associated to the field.</p>
   */
  Settings?: LineChartSeriesSettings;
}

/**
 * @public
 * <p>The series item configuration of a line chart.</p>
 *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
 */
export interface SeriesItem {
  /**
   * @public
   * <p>The field series item configuration of a line chart.</p>
   */
  FieldSeriesItem?: FieldSeriesItem;

  /**
   * @public
   * <p>The data field series item configuration of a line chart.</p>
   */
  DataFieldSeriesItem?: DataFieldSeriesItem;
}

/**
 * @public
 * <p>The sort configuration of a line chart.</p>
 */
export interface LineChartSortConfiguration {
  /**
   * @public
   * <p>The sort configuration of the category fields.</p>
   */
  CategorySort?: FieldSortOptions[];

  /**
   * @public
   * <p>The limit on the number of categories that are displayed in a line chart.</p>
   */
  CategoryItemsLimitConfiguration?: ItemsLimitConfiguration;

  /**
   * @public
   * <p>The limit on the number of lines that are displayed in a line chart.</p>
   */
  ColorItemsLimitConfiguration?: ItemsLimitConfiguration;

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
 * <p>The configuration of a line chart.</p>
 */
export interface LineChartConfiguration {
  /**
   * @public
   * <p>The field well configuration of a line chart.</p>
   */
  FieldWells?: LineChartFieldWells;

  /**
   * @public
   * <p>The sort configuration of a line chart.</p>
   */
  SortConfiguration?: LineChartSortConfiguration;

  /**
   * @public
   * <p>The forecast configuration of a line chart.</p>
   */
  ForecastConfigurations?: ForecastConfiguration[];

  /**
   * @public
   * <p>Determines the type of the line chart.</p>
   */
  Type?: LineChartType | string;

  /**
   * @public
   * <p>The small multiples setup for the visual.</p>
   */
  SmallMultiplesOptions?: SmallMultiplesOptions;

  /**
   * @public
   * <p>The options that determine the presentation of the x-axis.</p>
   */
  XAxisDisplayOptions?: AxisDisplayOptions;

  /**
   * @public
   * <p>The options that determine the presentation of the x-axis label.</p>
   */
  XAxisLabelOptions?: ChartAxisLabelOptions;

  /**
   * @public
   * <p>The series axis configuration of a line chart.</p>
   */
  PrimaryYAxisDisplayOptions?: LineSeriesAxisDisplayOptions;

  /**
   * @public
   * <p>The options that determine the presentation of the y-axis label.</p>
   */
  PrimaryYAxisLabelOptions?: ChartAxisLabelOptions;

  /**
   * @public
   * <p>The series axis configuration of a line chart.</p>
   */
  SecondaryYAxisDisplayOptions?: LineSeriesAxisDisplayOptions;

  /**
   * @public
   * <p>The options that determine the presentation of the secondary y-axis label.</p>
   */
  SecondaryYAxisLabelOptions?: ChartAxisLabelOptions;

  /**
   * @public
   * <p>The options that determine the default presentation of all line series in <code>LineChartVisual</code>.</p>
   */
  DefaultSeriesSettings?: LineChartDefaultSeriesSettings;

  /**
   * @public
   * <p>The series item configuration of a line chart.</p>
   */
  Series?: SeriesItem[];

  /**
   * @public
   * <p>The legend configuration of a line chart.</p>
   */
  Legend?: LegendOptions;

  /**
   * @public
   * <p>The data label configuration of a line chart.</p>
   */
  DataLabels?: DataLabelOptions;

  /**
   * @public
   * <p>The reference lines configuration of a line chart.</p>
   */
  ReferenceLines?: ReferenceLine[];

  /**
   * @public
   * <p>The tooltip configuration of a line chart.</p>
   */
  Tooltip?: TooltipOptions;

  /**
   * @public
   * <p>The default configuration of a line chart's contribution analysis.</p>
   */
  ContributionAnalysisDefaults?: ContributionAnalysisDefault[];

  /**
   * @public
   * <p>The visual palette configuration of a line chart.</p>
   */
  VisualPalette?: VisualPalette;
}

/**
 * @public
 * <p>A line chart.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/line-charts.html">Using line charts</a> in the <i>Amazon QuickSight User Guide</i>.</p>
 */
export interface LineChartVisual {
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
   * <p>The configuration of a line chart.</p>
   */
  ChartConfiguration?: LineChartConfiguration;

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
 * <p>The options that determine the arc thickness of a <code>GaugeChartVisual</code>.</p>
 */
export interface ArcOptions {
  /**
   * @public
   * <p>The arc thickness of a <code>GaugeChartVisual</code>.</p>
   */
  ArcThickness?: ArcThickness | string;
}

/**
 * @public
 * <p>The label options of the label that is displayed in the center of a donut chart. This option isn't available for pie charts.</p>
 */
export interface DonutCenterOptions {
  /**
   * @public
   * <p>Determines the visibility of the label in a donut chart. In the Amazon QuickSight console, this option is called <code>'Show total'</code>.</p>
   */
  LabelVisibility?: Visibility | string;
}

/**
 * @public
 * <p>The options for configuring a donut chart or pie chart.</p>
 */
export interface DonutOptions {
  /**
   * @public
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
   */
  ArcOptions?: ArcOptions;

  /**
   * @public
   * <p>The label options of the label that is displayed in the center of a donut chart. This option isn't available for pie charts.</p>
   */
  DonutCenterOptions?: DonutCenterOptions;
}

/**
 * @public
 * <p>The field well configuration of a pie chart.</p>
 */
export interface PieChartAggregatedFieldWells {
  /**
   * @public
   * <p>The category (group/color) field wells of a pie chart.</p>
   */
  Category?: DimensionField[];

  /**
   * @public
   * <p>The value field wells of a pie chart. Values are aggregated based on categories.</p>
   */
  Values?: MeasureField[];

  /**
   * @public
   * <p>The small multiples field well of a pie chart.</p>
   */
  SmallMultiples?: DimensionField[];
}

/**
 * @public
 * <p>The field well configuration of a pie chart.</p>
 *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
 */
export interface PieChartFieldWells {
  /**
   * @public
   * <p>The field well configuration of a pie chart.</p>
   */
  PieChartAggregatedFieldWells?: PieChartAggregatedFieldWells;
}

/**
 * @public
 * <p>The sort configuration of a pie chart.</p>
 */
export interface PieChartSortConfiguration {
  /**
   * @public
   * <p>The sort configuration of the category fields.</p>
   */
  CategorySort?: FieldSortOptions[];

  /**
   * @public
   * <p>The limit on the number of categories that are displayed in a pie chart.</p>
   */
  CategoryItemsLimit?: ItemsLimitConfiguration;

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
 * <p>The configuration of a pie chart.</p>
 */
export interface PieChartConfiguration {
  /**
   * @public
   * <p>The field wells of the visual.</p>
   */
  FieldWells?: PieChartFieldWells;

  /**
   * @public
   * <p>The sort configuration of a pie chart.</p>
   */
  SortConfiguration?: PieChartSortConfiguration;

  /**
   * @public
   * <p>The options that determine the shape of the chart. This option determines whether the chart is a pie chart or a donut chart.</p>
   */
  DonutOptions?: DonutOptions;

  /**
   * @public
   * <p>The small multiples setup for the visual.</p>
   */
  SmallMultiplesOptions?: SmallMultiplesOptions;

  /**
   * @public
   * <p>The label options of the group/color that is displayed in a pie chart.</p>
   */
  CategoryLabelOptions?: ChartAxisLabelOptions;

  /**
   * @public
   * <p>The label options for the value that is displayed in a pie chart.</p>
   */
  ValueLabelOptions?: ChartAxisLabelOptions;

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
   * <p>The palette (chart color) display setup of the visual.</p>
   */
  VisualPalette?: VisualPalette;

  /**
   * @public
   * <p>The contribution analysis (anomaly configuration) setup of the visual.</p>
   */
  ContributionAnalysisDefaults?: ContributionAnalysisDefault[];
}

/**
 * @public
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
 */
export interface PieChartVisual {
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
   * <p>The configuration of a pie chart.</p>
   */
  ChartConfiguration?: PieChartConfiguration;

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
 * <p>The target of a pivot table field collapse state.</p>
 */
export interface PivotTableFieldCollapseStateTarget {
  /**
   * @public
   * <p>The field ID of the pivot table that the collapse state needs to be set to.</p>
   */
  FieldId?: string;

  /**
   * @public
   * <p>The data path of the pivot table's header. Used to set the collapse state.</p>
   */
  FieldDataPathValues?: DataPathValue[];
}

/**
 * @public
 * <p>The collapse state options for the pivot table field options.</p>
 */
export interface PivotTableFieldCollapseStateOption {
  /**
   * @public
   * <p>A tagged-union object that sets the collapse state.</p>
   */
  Target: PivotTableFieldCollapseStateTarget | undefined;

  /**
   * @public
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
   */
  State?: PivotTableFieldCollapseState | string;
}

/**
 * @public
 * <p>The data path options for the pivot table field options.</p>
 */
export interface PivotTableDataPathOption {
  /**
   * @public
   * <p>The list of data path values for the data path options.</p>
   */
  DataPathList: DataPathValue[] | undefined;

  /**
   * @public
   * <p>The width of the data path option.</p>
   */
  Width?: string;
}

/**
 * @public
 * <p>The selected field options for the pivot table field options.</p>
 */
export interface PivotTableFieldOption {
  /**
   * @public
   * <p>The field ID of the pivot table field.</p>
   */
  FieldId: string | undefined;

  /**
   * @public
   * <p>The custom label of the pivot table field.</p>
   */
  CustomLabel?: string;

  /**
   * @public
   * <p>The visibility of the pivot table field.</p>
   */
  Visibility?: Visibility | string;
}

/**
 * @public
 * <p>The field options for a pivot table visual.</p>
 */
export interface PivotTableFieldOptions {
  /**
   * @public
   * <p>The selected field options for the pivot table field options.</p>
   */
  SelectedFieldOptions?: PivotTableFieldOption[];

  /**
   * @public
   * <p>The data path options for the pivot table field options.</p>
   */
  DataPathOptions?: PivotTableDataPathOption[];

  /**
   * @public
   * <p>The collapse state options for the pivot table field options.</p>
   */
  CollapseStateOptions?: PivotTableFieldCollapseStateOption[];
}

/**
 * @public
 * <p>The aggregated field well for the pivot table.</p>
 */
export interface PivotTableAggregatedFieldWells {
  /**
   * @public
   * <p>The rows field well for a pivot table. Values are grouped by rows fields.</p>
   */
  Rows?: DimensionField[];

  /**
   * @public
   * <p>The columns field well for a pivot table. Values are grouped by columns fields.</p>
   */
  Columns?: DimensionField[];

  /**
   * @public
   * <p>The values field well for a pivot table. Values are aggregated based on rows and columns fields.</p>
   */
  Values?: MeasureField[];
}

/**
 * @public
 * <p>The field wells for a pivot table visual.</p>
 *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
 */
export interface PivotTableFieldWells {
  /**
   * @public
   * <p>The aggregated field well for the pivot table.</p>
   */
  PivotTableAggregatedFieldWells?: PivotTableAggregatedFieldWells;
}

/**
 * @public
 * <p>The paginated report options for a pivot table visual.</p>
 */
export interface PivotTablePaginatedReportOptions {
  /**
   * @public
   * <p>The visibility of the printing table overflow across pages.</p>
   */
  VerticalOverflowVisibility?: Visibility | string;

  /**
   * @public
   * <p>The visibility of the repeating header rows on each page.</p>
   */
  OverflowColumnHeaderVisibility?: Visibility | string;
}

/**
 * @public
 * <p>Allows data paths to be sorted by a specific data value.</p>
 */
export interface DataPathSort {
  /**
   * @public
   * <p>Determines the sort direction.</p>
   */
  Direction: SortDirection | string | undefined;

  /**
   * @public
   * <p>The list of data paths that need to be sorted.</p>
   */
  SortPaths: DataPathValue[] | undefined;
}

/**
 * @public
 * <p>The sort by field for the field sort options.</p>
 */
export interface PivotTableSortBy {
  /**
   * @public
   * <p>The field sort (field id, direction) for the pivot table sort by options.</p>
   */
  Field?: FieldSort;

  /**
   * @public
   * <p>The column sort (field id, direction) for the pivot table sort by options.</p>
   */
  Column?: ColumnSort;

  /**
   * @public
   * <p>The data path sort (data path value, direction) for the pivot table sort by options.</p>
   */
  DataPath?: DataPathSort;
}

/**
 * @public
 * <p>The field sort options for a pivot table sort configuration.</p>
 */
export interface PivotFieldSortOptions {
  /**
   * @public
   * <p>The field ID for the field sort options.</p>
   */
  FieldId: string | undefined;

  /**
   * @public
   * <p>The sort by field for the field sort options.</p>
   */
  SortBy: PivotTableSortBy | undefined;
}

/**
 * @public
 * <p>The sort configuration for a <code>PivotTableVisual</code>.</p>
 */
export interface PivotTableSortConfiguration {
  /**
   * @public
   * <p>The field sort options for a pivot table sort configuration.</p>
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
 * @public
 * <p>The border options for a table border.</p>
 */
export interface TableBorderOptions {
  /**
   * @public
   * <p>The color of a table border.</p>
   */
  Color?: string;

  /**
   * @public
   * <p>The thickness of a table border.</p>
   */
  Thickness?: number;

  /**
   * @public
   * <p>The style (none, solid) of a table border.</p>
   */
  Style?: TableBorderStyle | string;
}

/**
 * @public
 * <p>The side border options for a table.</p>
 */
export interface TableSideBorderOptions {
  /**
   * @public
   * <p>The table border options of the inner vertical border.</p>
   */
  InnerVertical?: TableBorderOptions;

  /**
   * @public
   * <p>The table border options of the inner horizontal border.</p>
   */
  InnerHorizontal?: TableBorderOptions;

  /**
   * @public
   * <p>The table border options of the left border.</p>
   */
  Left?: TableBorderOptions;

  /**
   * @public
   * <p>The table border options of the right border.</p>
   */
  Right?: TableBorderOptions;

  /**
   * @public
   * <p>The table border options of the top border.</p>
   */
  Top?: TableBorderOptions;

  /**
   * @public
   * <p>The table border options of the bottom border.</p>
   */
  Bottom?: TableBorderOptions;
}

/**
 * @public
 * <p>Determines the border options for a table visual.</p>
 */
export interface GlobalTableBorderOptions {
  /**
   * @public
   * <p>Determines the options for uniform border.</p>
   */
  UniformBorder?: TableBorderOptions;

  /**
   * @public
   * <p>Determines the options for side specific border.</p>
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
 * @public
 * <p>The table cell style for a cell in pivot table or table visual.</p>
 */
export interface TableCellStyle {
  /**
   * @public
   * <p>The visibility of the table cells.</p>
   */
  Visibility?: Visibility | string;

  /**
   * @public
   * <p>The font configuration of the table cells.</p>
   */
  FontConfiguration?: FontConfiguration;

  /**
   * @public
   * <p>The text wrap (none, wrap) for the table cells.</p>
   */
  TextWrap?: TextWrap | string;

  /**
   * @public
   * <p>The horizontal text alignment (left, center, right, auto) for the table cells.</p>
   */
  HorizontalTextAlignment?: HorizontalTextAlignment | string;

  /**
   * @public
   * <p>The vertical text alignment (top, middle, bottom) for the table cells.</p>
   */
  VerticalTextAlignment?: VerticalTextAlignment | string;

  /**
   * @public
   * <p>The background color for the table cells.</p>
   */
  BackgroundColor?: string;

  /**
   * @public
   * <p>The height color for the table cells.</p>
   */
  Height?: number;

  /**
   * @public
   * <p>The borders for the table cells.</p>
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
 * @public
 * <p>Determines the row alternate color options.</p>
 */
export interface RowAlternateColorOptions {
  /**
   * @public
   * <p>Determines the widget status.</p>
   */
  Status?: WidgetStatus | string;

  /**
   * @public
   * <p>Determines the list of row alternate colors.</p>
   */
  RowAlternateColors?: string[];

  /**
   * @public
   * <p>The primary background color options for alternate rows.</p>
   */
  UsePrimaryBackgroundColor?: WidgetStatus | string;
}

/**
 * @public
 * <p>The options for the label thta is located above the row headers. This option is only applicable when <code>RowsLayout</code> is set to <code>HIERARCHY</code>.</p>
 */
export interface PivotTableRowsLabelOptions {
  /**
   * @public
   * <p>The visibility of the rows label.</p>
   */
  Visibility?: Visibility | string;

  /**
   * @public
   * <p>The custom label string for the rows label.</p>
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
 * @public
 * <p>The table options for a pivot table visual.</p>
 */
export interface PivotTableOptions {
  /**
   * @public
   * <p>The metric placement (row, column) options.</p>
   */
  MetricPlacement?: PivotTableMetricPlacement | string;

  /**
   * @public
   * <p>The visibility of the single metric options.</p>
   */
  SingleMetricVisibility?: Visibility | string;

  /**
   * @public
   * <p>The visibility of the column names.</p>
   */
  ColumnNamesVisibility?: Visibility | string;

  /**
   * @public
   * <p>Determines the visibility of the pivot table.</p>
   */
  ToggleButtonsVisibility?: Visibility | string;

  /**
   * @public
   * <p>The table cell style of the column header.</p>
   */
  ColumnHeaderStyle?: TableCellStyle;

  /**
   * @public
   * <p>The table cell style of the row headers.</p>
   */
  RowHeaderStyle?: TableCellStyle;

  /**
   * @public
   * <p>The table cell style of cells.</p>
   */
  CellStyle?: TableCellStyle;

  /**
   * @public
   * <p>The table cell style of row field names.</p>
   */
  RowFieldNamesStyle?: TableCellStyle;

  /**
   * @public
   * <p>The row alternate color options (widget status, row alternate colors).</p>
   */
  RowAlternateColorOptions?: RowAlternateColorOptions;

  /**
   * @public
   * <p>The visibility setting of a pivot table's collapsed row dimension fields. If the value of this structure is <code>HIDDEN</code>, all collapsed columns in a pivot table are automatically hidden. The default value is <code>VISIBLE</code>.</p>
   */
  CollapsedRowDimensionsVisibility?: Visibility | string;

  /**
   * @public
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
   */
  RowsLayout?: PivotTableRowsLayout | string;

  /**
   * @public
   * <p>The options for the label that is located above the row headers. This option is only applicable when <code>RowsLayout</code> is set to <code>HIERARCHY</code>.</p>
   */
  RowsLabelOptions?: PivotTableRowsLabelOptions;

  /**
   * @public
   * <p>The default cell width of the pivot table.</p>
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
 * @public
 * <p>The optional configuration of subtotals cells.</p>
 */
export interface PivotTableFieldSubtotalOptions {
  /**
   * @public
   * <p>The field ID of the subtotal options.</p>
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
 * @public
 * <p>The table style target.</p>
 */
export interface TableStyleTarget {
  /**
   * @public
   * <p>The cell type of the table style target.</p>
   */
  CellType: StyledCellType | string | undefined;
}

/**
 * @public
 * <p>The subtotal options.</p>
 */
export interface SubtotalOptions {
  /**
   * @public
   * <p>The visibility configuration for the subtotal cells.</p>
   */
  TotalsVisibility?: Visibility | string;

  /**
   * @public
   * <p>The custom label string for the subtotal cells.</p>
   */
  CustomLabel?: string;

  /**
   * @public
   * <p>The field level (all, custom, last) for the subtotal cells.</p>
   */
  FieldLevel?: PivotTableSubtotalLevel | string;

  /**
   * @public
   * <p>The optional configuration of subtotal cells.</p>
   */
  FieldLevelOptions?: PivotTableFieldSubtotalOptions[];

  /**
   * @public
   * <p>The cell styling options for the subtotal cells.</p>
   */
  TotalCellStyle?: TableCellStyle;

  /**
   * @public
   * <p>The cell styling options for the subtotals of value cells.</p>
   */
  ValueCellStyle?: TableCellStyle;

  /**
   * @public
   * <p>The cell styling options for the subtotals of header cells.</p>
   */
  MetricHeaderCellStyle?: TableCellStyle;

  /**
   * @public
   * <p>The style targets options for subtotals.</p>
   */
  StyleTargets?: TableStyleTarget[];
}

/**
 * @public
 * @enum
 */
export const TableTotalsPlacement = {
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
 * <p>The optional configuration of totals cells in a <code>PivotTableVisual</code>.</p>
 */
export interface PivotTotalOptions {
  /**
   * @public
   * <p>The visibility configuration for the total cells.</p>
   */
  TotalsVisibility?: Visibility | string;

  /**
   * @public
   * <p>The placement (start, end) for the total cells.</p>
   */
  Placement?: TableTotalsPlacement | string;

  /**
   * @public
   * <p>The scroll status (pinned, scrolled) for the total cells.</p>
   */
  ScrollStatus?: TableTotalsScrollStatus | string;

  /**
   * @public
   * <p>The custom label string for the total cells.</p>
   */
  CustomLabel?: string;

  /**
   * @public
   * <p>The cell styling options for the total cells.</p>
   */
  TotalCellStyle?: TableCellStyle;

  /**
   * @public
   * <p>The cell styling options for the totals of value cells.</p>
   */
  ValueCellStyle?: TableCellStyle;

  /**
   * @public
   * <p>The cell styling options for the total of header cells.</p>
   */
  MetricHeaderCellStyle?: TableCellStyle;
}

/**
 * @public
 * <p>The total options for a pivot table visual.</p>
 */
export interface PivotTableTotalOptions {
  /**
   * @public
   * <p>The row subtotal options.</p>
   */
  RowSubtotalOptions?: SubtotalOptions;

  /**
   * @public
   * <p>The column subtotal options.</p>
   */
  ColumnSubtotalOptions?: SubtotalOptions;

  /**
   * @public
   * <p>The row total options.</p>
   */
  RowTotalOptions?: PivotTotalOptions;

  /**
   * @public
   * <p>The column total options.</p>
   */
  ColumnTotalOptions?: PivotTotalOptions;
}

/**
 * @public
 * <p>The configuration for a <code>PivotTableVisual</code>.</p>
 */
export interface PivotTableConfiguration {
  /**
   * @public
   * <p>The field wells of the visual.</p>
   */
  FieldWells?: PivotTableFieldWells;

  /**
   * @public
   * <p>The sort configuration for a <code>PivotTableVisual</code>.</p>
   */
  SortConfiguration?: PivotTableSortConfiguration;

  /**
   * @public
   * <p>The table options for a pivot table visual.</p>
   */
  TableOptions?: PivotTableOptions;

  /**
   * @public
   * <p>The total options for a pivot table visual.</p>
   */
  TotalOptions?: PivotTableTotalOptions;

  /**
   * @public
   * <p>The field options for a pivot table visual.</p>
   */
  FieldOptions?: PivotTableFieldOptions;

  /**
   * @public
   * <p>The paginated report options for a pivot table visual.</p>
   */
  PaginatedReportOptions?: PivotTablePaginatedReportOptions;
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
 * @public
 * <p>The scope of the cell for conditional formatting.</p>
 */
export interface PivotTableConditionalFormattingScope {
  /**
   * @public
   * <p>The role (field, field total, grand total) of the cell for conditional formatting.</p>
   */
  Role?: PivotTableConditionalFormattingScopeRole | string;
}

/**
 * @public
 * <p>The conditional formatting for the text.</p>
 */
export interface TextConditionalFormat {
  /**
   * @public
   * <p>The conditional formatting for the text background color.</p>
   */
  BackgroundColor?: ConditionalFormattingColor;

  /**
   * @public
   * <p>The conditional formatting for the text color.</p>
   */
  TextColor?: ConditionalFormattingColor;

  /**
   * @public
   * <p>The conditional formatting for the icon.</p>
   */
  Icon?: ConditionalFormattingIcon;
}

/**
 * @public
 * <p>The cell conditional formatting option for a pivot table.</p>
 */
export interface PivotTableCellConditionalFormatting {
  /**
   * @public
   * <p>The field ID of the cell for conditional formatting.</p>
   */
  FieldId: string | undefined;

  /**
   * @public
   * <p>The text format of the cell for conditional formatting.</p>
   */
  TextFormat?: TextConditionalFormat;

  /**
   * @public
   * <p>The scope of the cell for conditional formatting.</p>
   */
  Scope?: PivotTableConditionalFormattingScope;

  /**
   * @public
   * <p>A list of cell scopes for conditional formatting.</p>
   */
  Scopes?: PivotTableConditionalFormattingScope[];
}

/**
 * @public
 * <p>Conditional formatting options for a <code>PivotTableVisual</code>.</p>
 */
export interface PivotTableConditionalFormattingOption {
  /**
   * @public
   * <p>The cell conditional formatting option for a pivot table.</p>
   */
  Cell?: PivotTableCellConditionalFormatting;
}

/**
 * @public
 * <p>The conditional formatting for a <code>PivotTableVisual</code>.</p>
 */
export interface PivotTableConditionalFormatting {
  /**
   * @public
   * <p>Conditional formatting options for a <code>PivotTableVisual</code>.</p>
   */
  ConditionalFormattingOptions?: PivotTableConditionalFormattingOption[];
}

/**
 * @public
 * <p>A pivot table.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/pivot-table.html">Using pivot tables</a> in the <i>Amazon QuickSight User Guide</i>.</p>
 */
export interface PivotTableVisual {
  /**
   * @public
   * <p>The unique identifier of a visual. This identifier must be unique within the context of a dashboard, template, or analysis. Two dashboards, analyses, or templates can have visuals with the same identifiers..</p>
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
  ChartConfiguration?: PivotTableConfiguration;

  /**
   * @public
   * <p>The conditional formatting for a <code>PivotTableVisual</code>.</p>
   */
  ConditionalFormatting?: PivotTableConditionalFormatting;

  /**
   * @public
   * <p>The list of custom actions that are configured for a visual.</p>
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
 * @public
 * <p>The configured style settings of a radar chart.</p>
 */
export interface RadarChartAreaStyleSettings {
  /**
   * @public
   * <p>The visibility settings of a radar chart.</p>
   */
  Visibility?: Visibility | string;
}

/**
 * @public
 * <p>The series settings of a radar chart.</p>
 */
export interface RadarChartSeriesSettings {
  /**
   * @public
   * <p>The area style settings of a radar chart.</p>
   */
  AreaStyleSettings?: RadarChartAreaStyleSettings;
}

/**
 * @public
 * <p>The aggregated field well configuration of a <code>RadarChartVisual</code>.</p>
 */
export interface RadarChartAggregatedFieldWells {
  /**
   * @public
   * <p>The aggregated field well categories of a radar chart.</p>
   */
  Category?: DimensionField[];

  /**
   * @public
   * <p>The color that are assigned to the aggregated field wells of a radar chart.</p>
   */
  Color?: DimensionField[];

  /**
   * @public
   * <p>The values that are assigned to the aggregated field wells of a radar chart.</p>
   */
  Values?: MeasureField[];
}

/**
 * @public
 * <p>The field wells of a radar chart visual.</p>
 */
export interface RadarChartFieldWells {
  /**
   * @public
   * <p>The aggregated field wells of a radar chart visual.</p>
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
 * @public
 * <p>The sort configuration of a <code>RadarChartVisual</code>.</p>
 */
export interface RadarChartSortConfiguration {
  /**
   * @public
   * <p>The category sort options of a radar chart.</p>
   */
  CategorySort?: FieldSortOptions[];

  /**
   * @public
   * <p>The category items limit for a radar chart.</p>
   */
  CategoryItemsLimit?: ItemsLimitConfiguration;

  /**
   * @public
   * <p>The color sort configuration of a radar chart.</p>
   */
  ColorSort?: FieldSortOptions[];

  /**
   * @public
   * <p>The color items limit of a radar chart.</p>
   */
  ColorItemsLimit?: ItemsLimitConfiguration;
}

/**
 * @public
 * <p>The configuration of a <code>RadarChartVisual</code>.</p>
 */
export interface RadarChartConfiguration {
  /**
   * @public
   * <p>The field well configuration of a <code>RadarChartVisual</code>.</p>
   */
  FieldWells?: RadarChartFieldWells;

  /**
   * @public
   * <p>The sort configuration of a <code>RadarChartVisual</code>.</p>
   */
  SortConfiguration?: RadarChartSortConfiguration;

  /**
   * @public
   * <p>The shape of the radar chart.</p>
   */
  Shape?: RadarChartShape | string;

  /**
   * @public
   * <p>The base sreies settings of a radar chart.</p>
   */
  BaseSeriesSettings?: RadarChartSeriesSettings;

  /**
   * @public
   * <p>The start angle of a radar chart's axis.</p>
   */
  StartAngle?: number;

  /**
   * @public
   * <p>The palette (chart color) display setup of the visual.</p>
   */
  VisualPalette?: VisualPalette;

  /**
   * @public
   * <p>Determines the visibility of the colors of alternatign bands in a radar chart.</p>
   */
  AlternateBandColorsVisibility?: Visibility | string;

  /**
   * @public
   * <p>The color of the even-numbered alternate bands of a radar chart.</p>
   */
  AlternateBandEvenColor?: string;

  /**
   * @public
   * <p>The color of the odd-numbered alternate bands of a radar chart.</p>
   */
  AlternateBandOddColor?: string;

  /**
   * @public
   * <p>The category axis of a radar chart.</p>
   */
  CategoryAxis?: AxisDisplayOptions;

  /**
   * @public
   * <p>The category label options of a radar chart.</p>
   */
  CategoryLabelOptions?: ChartAxisLabelOptions;

  /**
   * @public
   * <p>The color axis of a radar chart.</p>
   */
  ColorAxis?: AxisDisplayOptions;

  /**
   * @public
   * <p>The color label options of a radar chart.</p>
   */
  ColorLabelOptions?: ChartAxisLabelOptions;

  /**
   * @public
   * <p>The legend display setup of the visual.</p>
   */
  Legend?: LegendOptions;

  /**
   * @public
   * <p>The axis behavior options of a radar chart.</p>
   */
  AxesRangeScale?: RadarChartAxesRangeScale | string;
}

/**
 * @public
 * <p>A radar chart visual.</p>
 */
export interface RadarChartVisual {
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
  ChartConfiguration?: RadarChartConfiguration;

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
 * <p>The field well configuration of a sankey diagram.</p>
 */
export interface SankeyDiagramAggregatedFieldWells {
  /**
   * @public
   * <p>The source field wells of a sankey diagram.</p>
   */
  Source?: DimensionField[];

  /**
   * @public
   * <p>The destination field wells of a sankey diagram.</p>
   */
  Destination?: DimensionField[];

  /**
   * @public
   * <p>The weight field wells of a sankey diagram.</p>
   */
  Weight?: MeasureField[];
}

/**
 * @public
 * <p>The field well configuration of a sankey diagram.</p>
 */
export interface SankeyDiagramFieldWells {
  /**
   * @public
   * <p>The field well configuration of a sankey diagram.</p>
   */
  SankeyDiagramAggregatedFieldWells?: SankeyDiagramAggregatedFieldWells;
}

/**
 * @public
 * <p>The sort configuration of a sankey diagram.</p>
 */
export interface SankeyDiagramSortConfiguration {
  /**
   * @public
   * <p>The sort configuration of the weight fields.</p>
   */
  WeightSort?: FieldSortOptions[];

  /**
   * @public
   * <p>The limit on the number of source nodes that are displayed in a sankey diagram.</p>
   */
  SourceItemsLimit?: ItemsLimitConfiguration;

  /**
   * @public
   * <p>The limit on the number of destination nodes that are displayed in a sankey diagram.</p>
   */
  DestinationItemsLimit?: ItemsLimitConfiguration;
}

/**
 * @public
 * <p>The configuration of a sankey diagram.</p>
 */
export interface SankeyDiagramChartConfiguration {
  /**
   * @public
   * <p>The field well configuration of a sankey diagram.</p>
   */
  FieldWells?: SankeyDiagramFieldWells;

  /**
   * @public
   * <p>The sort configuration of a sankey diagram.</p>
   */
  SortConfiguration?: SankeyDiagramSortConfiguration;

  /**
   * @public
   * <p>The data label configuration of a sankey diagram.</p>
   */
  DataLabels?: DataLabelOptions;
}

/**
 * @public
 * <p>A sankey diagram.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/sankey-diagram.html">Using Sankey diagrams</a> in the <i>Amazon QuickSight User Guide</i>.</p>
 */
export interface SankeyDiagramVisual {
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
   * <p>The configuration of a sankey diagram.</p>
   */
  ChartConfiguration?: SankeyDiagramChartConfiguration;

  /**
   * @public
   * <p>The list of custom actions that are configured for a visual.</p>
   */
  Actions?: VisualCustomAction[];
}

/**
 * @public
 * <p>The aggregated field well of a scatter plot.</p>
 */
export interface ScatterPlotCategoricallyAggregatedFieldWells {
  /**
   * @public
   * <p>The x-axis field well of a scatter plot.</p>
   *          <p>The x-axis is aggregated by category.</p>
   */
  XAxis?: MeasureField[];

  /**
   * @public
   * <p>The y-axis field well of a scatter plot.</p>
   *          <p>The y-axis is aggregated by category.</p>
   */
  YAxis?: MeasureField[];

  /**
   * @public
   * <p>The category field well of a scatter plot.</p>
   */
  Category?: DimensionField[];

  /**
   * @public
   * <p>The size field well of a scatter plot.</p>
   */
  Size?: MeasureField[];

  /**
   * @public
   * <p>The label field well of a scatter plot.</p>
   */
  Label?: DimensionField[];
}

/**
 * @public
 * <p>The unaggregated field wells of a scatter plot.</p>
 */
export interface ScatterPlotUnaggregatedFieldWells {
  /**
   * @public
   * <p>The x-axis field well of a scatter plot.</p>
   *          <p>The x-axis is a dimension field and cannot be aggregated.</p>
   */
  XAxis?: DimensionField[];

  /**
   * @public
   * <p>The y-axis field well of a scatter plot.</p>
   *          <p>The y-axis is a dimension field and cannot be aggregated.</p>
   */
  YAxis?: DimensionField[];

  /**
   * @public
   * <p>The size field well of a scatter plot.</p>
   */
  Size?: MeasureField[];

  /**
   * @public
   * <p>The category field well of a scatter plot.</p>
   */
  Category?: DimensionField[];

  /**
   * @public
   * <p>The label field well of a scatter plot.</p>
   */
  Label?: DimensionField[];
}

/**
 * @public
 * <p>The field well configuration of a scatter plot.</p>
 *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
 */
export interface ScatterPlotFieldWells {
  /**
   * @public
   * <p>The aggregated field wells of a scatter plot. The x and y-axes of scatter plots with aggregated field wells are aggregated by category, label, or both.</p>
   */
  ScatterPlotCategoricallyAggregatedFieldWells?: ScatterPlotCategoricallyAggregatedFieldWells;

  /**
   * @public
   * <p>The unaggregated field wells of a scatter plot. The x and y-axes of these scatter plots are
   *             unaggregated.</p>
   */
  ScatterPlotUnaggregatedFieldWells?: ScatterPlotUnaggregatedFieldWells;
}

/**
 * @public
 * <p>The configuration of a scatter plot.</p>
 */
export interface ScatterPlotConfiguration {
  /**
   * @public
   * <p>The field wells of the visual.</p>
   */
  FieldWells?: ScatterPlotFieldWells;

  /**
   * @public
   * <p>The label options (label text, label visibility, and sort icon visibility) of the scatter plot's x-axis.</p>
   */
  XAxisLabelOptions?: ChartAxisLabelOptions;

  /**
   * @public
   * <p>The label display options (grid line, range, scale, and axis step) of the scatter plot's x-axis.</p>
   */
  XAxisDisplayOptions?: AxisDisplayOptions;

  /**
   * @public
   * <p>The label options (label text, label visibility, and sort icon visibility) of the scatter plot's y-axis.</p>
   */
  YAxisLabelOptions?: ChartAxisLabelOptions;

  /**
   * @public
   * <p>The label display options (grid line, range, scale, and axis step) of the scatter plot's y-axis.</p>
   */
  YAxisDisplayOptions?: AxisDisplayOptions;

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
   * <p>The legend display setup of the visual.</p>
   */
  Tooltip?: TooltipOptions;

  /**
   * @public
   * <p>The palette (chart color) display setup of the visual.</p>
   */
  VisualPalette?: VisualPalette;
}

/**
 * @public
 * <p>A scatter plot.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/scatter-plot.html">Using scatter plots</a> in the <i>Amazon QuickSight User Guide</i>.</p>
 */
export interface ScatterPlotVisual {
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
  ChartConfiguration?: ScatterPlotConfiguration;

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
 * <p>The settings for the pinned columns of a table visual.</p>
 */
export interface TablePinnedFieldOptions {
  /**
   * @public
   * <p>A list of columns to be pinned to the left of a table visual.</p>
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
 * @public
 * <p>The sizing options for the table image configuration.</p>
 */
export interface TableCellImageSizingConfiguration {
  /**
   * @public
   * <p>The cell scaling configuration of the sizing options for the table image configuration.</p>
   */
  TableCellImageScalingConfiguration?: TableCellImageScalingConfiguration | string;
}

/**
 * @public
 * <p>The image configuration of a table field URL.</p>
 */
export interface TableFieldImageConfiguration {
  /**
   * @public
   * <p>The sizing options for the table image configuration.</p>
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
 * @public
 * <p>The custom icon content for the table link content configuration.</p>
 */
export interface TableFieldCustomIconContent {
  /**
   * @public
   * <p>The icon set type (link) of the custom icon content for table URL link content.</p>
   */
  Icon?: TableFieldIconSetType | string;
}

/**
 * @public
 * <p>The custom text content (value, font configuration) for the table link content configuration.</p>
 */
export interface TableFieldCustomTextContent {
  /**
   * @public
   * <p>The string value of the custom text content for the table URL link content.</p>
   */
  Value?: string;

  /**
   * @public
   * <p>The font configuration of the custom text content for the table URL link content.</p>
   */
  FontConfiguration: FontConfiguration | undefined;
}

/**
 * @public
 * <p>The URL content (text, icon) for the table link configuration.</p>
 */
export interface TableFieldLinkContentConfiguration {
  /**
   * @public
   * <p>The custom text content (value, font configuration) for the table link content configuration.</p>
   */
  CustomTextContent?: TableFieldCustomTextContent;

  /**
   * @public
   * <p>The custom icon content for the table link content configuration.</p>
   */
  CustomIconContent?: TableFieldCustomIconContent;
}

/**
 * @public
 * <p>The link configuration of a table field URL.</p>
 */
export interface TableFieldLinkConfiguration {
  /**
   * @public
   * <p>The URL target (new tab, new window, same tab) for the table link configuration.</p>
   */
  Target: URLTargetConfiguration | string | undefined;

  /**
   * @public
   * <p>The URL content (text, icon) for the table link configuration.</p>
   */
  Content: TableFieldLinkContentConfiguration | undefined;
}

/**
 * @public
 * <p>The URL configuration for a table field.</p>
 */
export interface TableFieldURLConfiguration {
  /**
   * @public
   * <p>The link configuration of a table field URL.</p>
   */
  LinkConfiguration?: TableFieldLinkConfiguration;

  /**
   * @public
   * <p>The image configuration of a table field URL.</p>
   */
  ImageConfiguration?: TableFieldImageConfiguration;
}

/**
 * @public
 * <p>The options for a table field.</p>
 */
export interface TableFieldOption {
  /**
   * @public
   * <p>The field ID for a table field.</p>
   */
  FieldId: string | undefined;

  /**
   * @public
   * <p>The width for a table field.</p>
   */
  Width?: string;

  /**
   * @public
   * <p>The custom label for a table field.</p>
   */
  CustomLabel?: string;

  /**
   * @public
   * <p>The visibility of a table field.</p>
   */
  Visibility?: Visibility | string;

  /**
   * @public
   * <p>The URL configuration for a table field.</p>
   */
  URLStyling?: TableFieldURLConfiguration;
}

/**
 * @public
 * <p>The field options of a table visual.</p>
 */
export interface TableFieldOptions {
  /**
   * @public
   * <p>The field options to be configured to a table.</p>
   */
  SelectedFieldOptions?: TableFieldOption[];

  /**
   * @public
   * <p>The order of the field IDs that are configured as field options for a table visual.</p>
   */
  Order?: string[];

  /**
   * @public
   * <p>The settings for the pinned columns of a table visual.</p>
   */
  PinnedFieldOptions?: TablePinnedFieldOptions;
}

/**
 * @public
 * <p>The aggregated field well for the table.</p>
 */
export interface TableAggregatedFieldWells {
  /**
   * @public
   * <p>The group by field well for a pivot table. Values are grouped by group by fields.</p>
   */
  GroupBy?: DimensionField[];

  /**
   * @public
   * <p>The values field well for a pivot table. Values are aggregated based on group by fields.</p>
   */
  Values?: MeasureField[];
}

/**
 * @public
 * <p>The unaggregated field for a table.</p>
 */
export interface UnaggregatedField {
  /**
   * @public
   * <p>The custom field ID.</p>
   */
  FieldId: string | undefined;

  /**
   * @public
   * <p>The column that is used in the <code>UnaggregatedField</code>.</p>
   */
  Column: ColumnIdentifier | undefined;

  /**
   * @public
   * <p>The format configuration of the field.</p>
   */
  FormatConfiguration?: FormatConfiguration;
}

/**
 * @public
 * <p>The unaggregated field well for the table.</p>
 */
export interface TableUnaggregatedFieldWells {
  /**
   * @public
   * <p>The values field well for a pivot table. Values are unaggregated for an unaggregated table.</p>
   */
  Values?: UnaggregatedField[];
}

/**
 * @public
 * <p>The field wells for a table visual.</p>
 *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
 */
export interface TableFieldWells {
  /**
   * @public
   * <p>The aggregated field well for the table.</p>
   */
  TableAggregatedFieldWells?: TableAggregatedFieldWells;

  /**
   * @public
   * <p>The unaggregated field well for the table.</p>
   */
  TableUnaggregatedFieldWells?: TableUnaggregatedFieldWells;
}

/**
 * @public
 * <p>The paginated report options for a table visual.</p>
 */
export interface TablePaginatedReportOptions {
  /**
   * @public
   * <p>The visibility of printing table overflow across pages.</p>
   */
  VerticalOverflowVisibility?: Visibility | string;

  /**
   * @public
   * <p>The visibility of repeating header rows on each page.</p>
   */
  OverflowColumnHeaderVisibility?: Visibility | string;
}

/**
 * @public
 * <p>The sort configuration for a <code>TableVisual</code>.</p>
 */
export interface TableSortConfiguration {
  /**
   * @public
   * <p>The field sort options for rows in the table.</p>
   */
  RowSort?: FieldSortOptions[];

  /**
   * @public
   * <p>The pagination configuration (page size, page number) for the table.</p>
   */
  PaginationConfiguration?: PaginationConfiguration;
}

/**
 * @public
 * <p>The options for data bars.</p>
 */
export interface DataBarsOptions {
  /**
   * @public
   * <p>The field ID for the data bars options.</p>
   */
  FieldId: string | undefined;

  /**
   * @public
   * <p>The color of the positive data bar.</p>
   */
  PositiveColor?: string;

  /**
   * @public
   * <p>The color of the negative data bar.</p>
   */
  NegativeColor?: string;
}

/**
 * @public
 * <p>The inline visualization of a specific type to display within a chart.</p>
 */
export interface TableInlineVisualization {
  /**
   * @public
   * <p>The configuration of the inline visualization of the data bars within a chart.</p>
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
 * @public
 * <p>The table options for a table visual.</p>
 */
export interface TableOptions {
  /**
   * @public
   * <p>The orientation (vertical, horizontal) for a table.</p>
   */
  Orientation?: TableOrientation | string;

  /**
   * @public
   * <p>The table cell style of a table header.</p>
   */
  HeaderStyle?: TableCellStyle;

  /**
   * @public
   * <p>The table cell style of table cells.</p>
   */
  CellStyle?: TableCellStyle;

  /**
   * @public
   * <p>The row alternate color options (widget status, row alternate colors) for a table.</p>
   */
  RowAlternateColorOptions?: RowAlternateColorOptions;
}

/**
 * @public
 * <p>The total options for a table visual.</p>
 */
export interface TotalOptions {
  /**
   * @public
   * <p>The visibility configuration for the total cells.</p>
   */
  TotalsVisibility?: Visibility | string;

  /**
   * @public
   * <p>The placement (start, end) for the total cells.</p>
   */
  Placement?: TableTotalsPlacement | string;

  /**
   * @public
   * <p>The scroll status (pinned, scrolled) for the total cells.</p>
   */
  ScrollStatus?: TableTotalsScrollStatus | string;

  /**
   * @public
   * <p>The custom label string for the total cells.</p>
   */
  CustomLabel?: string;

  /**
   * @public
   * <p>Cell styling options for the total cells.</p>
   */
  TotalCellStyle?: TableCellStyle;
}

/**
 * @public
 * <p>The configuration for a <code>TableVisual</code>.</p>
 */
export interface TableConfiguration {
  /**
   * @public
   * <p>The field wells of the visual.</p>
   */
  FieldWells?: TableFieldWells;

  /**
   * @public
   * <p>The sort configuration for a <code>TableVisual</code>.</p>
   */
  SortConfiguration?: TableSortConfiguration;

  /**
   * @public
   * <p>The table options for a table visual.</p>
   */
  TableOptions?: TableOptions;

  /**
   * @public
   * <p>The total options for a table visual.</p>
   */
  TotalOptions?: TotalOptions;

  /**
   * @public
   * <p>The field options for a table visual.</p>
   */
  FieldOptions?: TableFieldOptions;

  /**
   * @public
   * <p>The paginated report options for a table visual.</p>
   */
  PaginatedReportOptions?: TablePaginatedReportOptions;

  /**
   * @public
   * <p>A collection of inline visualizations to display within a chart.</p>
   */
  TableInlineVisualizations?: TableInlineVisualization[];
}

/**
 * @public
 * <p>The cell conditional formatting option for a table.</p>
 */
export interface TableCellConditionalFormatting {
  /**
   * @public
   * <p>The field ID of the cell for conditional formatting.</p>
   */
  FieldId: string | undefined;

  /**
   * @public
   * <p>The text format of the cell for conditional formatting.</p>
   */
  TextFormat?: TextConditionalFormat;
}

/**
 * @public
 * <p>The conditional formatting of a table row.</p>
 */
export interface TableRowConditionalFormatting {
  /**
   * @public
   * <p>The conditional formatting color (solid, gradient) of the background for a table row.</p>
   */
  BackgroundColor?: ConditionalFormattingColor;

  /**
   * @public
   * <p>The conditional formatting color (solid, gradient) of the text for a table row.</p>
   */
  TextColor?: ConditionalFormattingColor;
}

/**
 * @public
 * <p>Conditional formatting options for a <code>PivotTableVisual</code>.</p>
 */
export interface TableConditionalFormattingOption {
  /**
   * @public
   * <p>The cell conditional formatting option for a table.</p>
   */
  Cell?: TableCellConditionalFormatting;

  /**
   * @public
   * <p>The row conditional formatting option for a table.</p>
   */
  Row?: TableRowConditionalFormatting;
}

/**
 * @public
 * <p>The conditional formatting for a <code>PivotTableVisual</code>.</p>
 */
export interface TableConditionalFormatting {
  /**
   * @public
   * <p>Conditional formatting options for a <code>PivotTableVisual</code>.</p>
   */
  ConditionalFormattingOptions?: TableConditionalFormattingOption[];
}

/**
 * @public
 * <p>A table visual.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/tabular.html">Using tables as visuals</a> in the <i>Amazon QuickSight User Guide</i>.</p>
 */
export interface TableVisual {
  /**
   * @public
   * <p>The unique identifier of a visual. This identifier must be unique within the context of a dashboard, template, or analysis. Two dashboards, analyses, or templates can have visuals with the same identifiers..</p>
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
  ChartConfiguration?: TableConfiguration;

  /**
   * @public
   * <p>The conditional formatting for a <code>PivotTableVisual</code>.</p>
   */
  ConditionalFormatting?: TableConditionalFormatting;

  /**
   * @public
   * <p>The list of custom actions that are configured for a visual.</p>
   */
  Actions?: VisualCustomAction[];
}

/**
 * @public
 * <p>Aggregated field wells of a tree map.</p>
 */
export interface TreeMapAggregatedFieldWells {
  /**
   * @public
   * <p>The group by field well of a tree map. Values are grouped based on group by fields.</p>
   */
  Groups?: DimensionField[];

  /**
   * @public
   * <p>The size field well of a tree map. Values are aggregated based on group by fields.</p>
   */
  Sizes?: MeasureField[];

  /**
   * @public
   * <p>The color field well of a tree map. Values are grouped by aggregations based on group by fields.</p>
   */
  Colors?: MeasureField[];
}

/**
 * @public
 * <p>The field wells of a tree map.</p>
 *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
 */
export interface TreeMapFieldWells {
  /**
   * @public
   * <p>The aggregated field wells of a tree map.</p>
   */
  TreeMapAggregatedFieldWells?: TreeMapAggregatedFieldWells;
}

/**
 * @public
 * <p>The sort configuration of a tree map.</p>
 */
export interface TreeMapSortConfiguration {
  /**
   * @public
   * <p>The sort configuration of group by fields.</p>
   */
  TreeMapSort?: FieldSortOptions[];

  /**
   * @public
   * <p>The limit on the number of groups that are displayed.</p>
   */
  TreeMapGroupItemsLimitConfiguration?: ItemsLimitConfiguration;
}

/**
 * @public
 * <p>The configuration of a tree map.</p>
 */
export interface TreeMapConfiguration {
  /**
   * @public
   * <p>The field wells of the visual.</p>
   */
  FieldWells?: TreeMapFieldWells;

  /**
   * @public
   * <p>The sort configuration of a tree map.</p>
   */
  SortConfiguration?: TreeMapSortConfiguration;

  /**
   * @public
   * <p>The label options (label text, label visibility) of the groups that are displayed in a tree map.</p>
   */
  GroupLabelOptions?: ChartAxisLabelOptions;

  /**
   * @public
   * <p>The label options (label text, label visibility) of the sizes that are displayed in a tree map.</p>
   */
  SizeLabelOptions?: ChartAxisLabelOptions;

  /**
   * @public
   * <p>The label options (label text, label visibility) for the colors displayed in a tree map.</p>
   */
  ColorLabelOptions?: ChartAxisLabelOptions;

  /**
   * @public
   * <p>The color options (gradient color, point of divergence) of a tree map.</p>
   */
  ColorScale?: ColorScale;

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
}

/**
 * @public
 * <p>A tree map.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/tree-map.html">Using tree maps</a> in the <i>Amazon QuickSight User Guide</i>.</p>
 */
export interface TreeMapVisual {
  /**
   * @public
   * <p>The unique identifier of a visual. This identifier must be unique within the context of a dashboard, template, or analysis. Two dashboards, analyses, or templates can have visuals with the same identifiers..</p>
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
  ChartConfiguration?: TreeMapConfiguration;

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
 * <p>The field well configuration of a waterfall visual.</p>
 */
export interface WaterfallChartAggregatedFieldWells {
  /**
   * @public
   * <p>The category field wells of a waterfall visual.</p>
   */
  Categories?: DimensionField[];

  /**
   * @public
   * <p>The value field wells of a waterfall visual.</p>
   */
  Values?: MeasureField[];

  /**
   * @public
   * <p>The breakdown field wells of a waterfall visual.</p>
   */
  Breakdowns?: DimensionField[];
}

/**
 * @public
 * <p>The field well configuration of a waterfall visual.</p>
 */
export interface WaterfallChartFieldWells {
  /**
   * @public
   * <p>The field well configuration of a waterfall visual.</p>
   */
  WaterfallChartAggregatedFieldWells?: WaterfallChartAggregatedFieldWells;
}

/**
 * @public
 * <p>The sort configuration of a waterfall visual.</p>
 */
export interface WaterfallChartSortConfiguration {
  /**
   * @public
   * <p>The sort configuration of the category fields.</p>
   */
  CategorySort?: FieldSortOptions[];

  /**
   * @public
   * <p>The limit on the number of bar groups that are displayed.</p>
   */
  BreakdownItemsLimit?: ItemsLimitConfiguration;
}

/**
 * @public
 * <p>The options that determine the presentation of a waterfall visual.</p>
 */
export interface WaterfallChartOptions {
  /**
   * @public
   * <p>This option determines the total bar label of a waterfall visual.</p>
   */
  TotalBarLabel?: string;
}

/**
 * @public
 * <p>The configuration for a waterfall visual.</p>
 */
export interface WaterfallChartConfiguration {
  /**
   * @public
   * <p>The field well configuration of a waterfall visual.</p>
   */
  FieldWells?: WaterfallChartFieldWells;

  /**
   * @public
   * <p>The sort configuration of a waterfall visual.</p>
   */
  SortConfiguration?: WaterfallChartSortConfiguration;

  /**
   * @public
   * <p>The options that determine the presentation of a waterfall visual.</p>
   */
  WaterfallChartOptions?: WaterfallChartOptions;

  /**
   * @public
   * <p>The options that determine the presentation of the category axis label.</p>
   */
  CategoryAxisLabelOptions?: ChartAxisLabelOptions;

  /**
   * @public
   * <p>The options that determine the presentation of the category axis.</p>
   */
  CategoryAxisDisplayOptions?: AxisDisplayOptions;

  /**
   * @public
   * <p>The options that determine the presentation of the y-axis label.</p>
   */
  PrimaryYAxisLabelOptions?: ChartAxisLabelOptions;

  /**
   * @public
   * <p>The options that determine the presentation of the y-axis.</p>
   */
  PrimaryYAxisDisplayOptions?: AxisDisplayOptions;

  /**
   * @public
   * <p>The legend configuration of a waterfall visual.</p>
   */
  Legend?: LegendOptions;

  /**
   * @public
   * <p>The data label configuration of a waterfall visual.</p>
   */
  DataLabels?: DataLabelOptions;

  /**
   * @public
   * <p>The visual palette configuration of a waterfall visual.</p>
   */
  VisualPalette?: VisualPalette;
}

/**
 * @public
 * <p>A waterfall chart.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/waterfall-chart.html">Using waterfall charts</a> in the <i>Amazon QuickSight User Guide</i>.</p>
 */
export interface WaterfallVisual {
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
   * <p>The configuration for a waterfall visual.</p>
   */
  ChartConfiguration?: WaterfallChartConfiguration;

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
 * <p>The aggregated field wells of a word cloud.</p>
 */
export interface WordCloudAggregatedFieldWells {
  /**
   * @public
   * <p>The group by field well of a word cloud. Values are grouped by group by fields.</p>
   */
  GroupBy?: DimensionField[];

  /**
   * @public
   * <p>The size field well of a word cloud. Values are aggregated based on group by fields.</p>
   */
  Size?: MeasureField[];
}

/**
 * @public
 * <p>The field wells of a word cloud visual.</p>
 *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
 */
export interface WordCloudFieldWells {
  /**
   * @public
   * <p>The aggregated field wells of a word cloud.</p>
   */
  WordCloudAggregatedFieldWells?: WordCloudAggregatedFieldWells;
}

/**
 * @public
 * <p>The sort configuration of a word cloud visual.</p>
 */
export interface WordCloudSortConfiguration {
  /**
   * @public
   * <p>The limit on the number of groups that are displayed in a word cloud.</p>
   */
  CategoryItemsLimit?: ItemsLimitConfiguration;

  /**
   * @public
   * <p>The sort configuration of group by fields.</p>
   */
  CategorySort?: FieldSortOptions[];
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
 * @public
 * <p>The word cloud options for a word cloud visual.</p>
 */
export interface WordCloudOptions {
  /**
   * @public
   * <p>The word orientation options (horizontal, horizontal_and_vertical) for the words in a word cloud.</p>
   */
  WordOrientation?: WordCloudWordOrientation | string;

  /**
   * @public
   * <p>The word scaling options (emphasize, normal) for the words in a word cloud.</p>
   */
  WordScaling?: WordCloudWordScaling | string;

  /**
   * @public
   * <p>The cloud layout options (fluid, normal) of a word cloud.</p>
   */
  CloudLayout?: WordCloudCloudLayout | string;

  /**
   * @public
   * <p>The word casing options (lower_case, existing_case) for the words in a word cloud.</p>
   */
  WordCasing?: WordCloudWordCasing | string;

  /**
   * @public
   * <p>The word padding options (none, small, medium, large) for the words in a word cloud.</p>
   */
  WordPadding?: WordCloudWordPadding | string;

  /**
   * @public
   * <p>The length limit of each word from 1-100.</p>
   */
  MaximumStringLength?: number;
}

/**
 * @public
 * <p>The configuration of a word cloud visual.</p>
 */
export interface WordCloudChartConfiguration {
  /**
   * @public
   * <p>The field wells of the visual.</p>
   */
  FieldWells?: WordCloudFieldWells;

  /**
   * @public
   * <p>The sort configuration of a word cloud visual.</p>
   */
  SortConfiguration?: WordCloudSortConfiguration;

  /**
   * @public
   * <p>The label options (label text, label visibility, and sort icon visibility) for the word cloud category.</p>
   */
  CategoryLabelOptions?: ChartAxisLabelOptions;

  /**
   * @public
   * <p>The options for a word cloud visual.</p>
   */
  WordCloudOptions?: WordCloudOptions;
}

/**
 * @public
 * <p>A word cloud.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/word-cloud.html">Using word clouds</a> in the <i>Amazon QuickSight User Guide</i>.</p>
 */
export interface WordCloudVisual {
  /**
   * @public
   * <p>The unique identifier of a visual. This identifier must be unique within the context of a dashboard, template, or analysis. Two dashboards, analyses, or templates can have visuals with the same identifiers..</p>
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
  ChartConfiguration?: WordCloudChartConfiguration;

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
 * <p>A visual displayed on a sheet in an analysis, dashboard, or template.</p>
 *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
 */
export interface Visual {
  /**
   * @public
   * <p>A table visual.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/tabular.html">Using tables as visuals</a> in the <i>Amazon QuickSight User Guide</i>.</p>
   */
  TableVisual?: TableVisual;

  /**
   * @public
   * <p>A pivot table.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/pivot-table.html">Using pivot tables</a> in the <i>Amazon QuickSight User Guide</i>.</p>
   */
  PivotTableVisual?: PivotTableVisual;

  /**
   * @public
   * <p>A bar chart.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/bar-charts.html">Using bar charts</a> in the <i>Amazon QuickSight User Guide</i>.</p>
   */
  BarChartVisual?: BarChartVisual;

  /**
   * @public
   * <p>A key performance indicator (KPI).</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/kpi.html">Using KPIs</a> in the <i>Amazon QuickSight User Guide</i>.</p>
   */
  KPIVisual?: KPIVisual;

  /**
   * @public
   * <p>A pie or donut chart.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/pie-chart.html">Using pie charts</a> in the <i>Amazon QuickSight User Guide</i>.</p>
   */
  PieChartVisual?: PieChartVisual;

  /**
   * @public
   * <p>A gauge chart.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/gauge-chart.html">Using gauge charts</a> in the <i>Amazon QuickSight User Guide</i>.</p>
   */
  GaugeChartVisual?: GaugeChartVisual;

  /**
   * @public
   * <p>A line chart.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/line-charts.html">Using line charts</a> in the <i>Amazon QuickSight User Guide</i>.</p>
   */
  LineChartVisual?: LineChartVisual;

  /**
   * @public
   * <p>A heat map.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/heat-map.html">Using heat maps</a> in the <i>Amazon QuickSight User Guide</i>.</p>
   */
  HeatMapVisual?: HeatMapVisual;

  /**
   * @public
   * <p>A tree map.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/tree-map.html">Using tree maps</a> in the <i>Amazon QuickSight User Guide</i>.</p>
   */
  TreeMapVisual?: TreeMapVisual;

  /**
   * @public
   * <p>A geospatial map or a points on map visual.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/point-maps.html">Creating point maps</a> in the <i>Amazon QuickSight User Guide</i>.</p>
   */
  GeospatialMapVisual?: GeospatialMapVisual;

  /**
   * @public
   * <p>A filled map.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/filled-maps.html">Creating filled maps</a> in the <i>Amazon QuickSight User Guide</i>.</p>
   */
  FilledMapVisual?: FilledMapVisual;

  /**
   * @public
   * <p>A funnel chart.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/funnel-visual-content.html">Using funnel charts</a> in the <i>Amazon QuickSight User Guide</i>.</p>
   */
  FunnelChartVisual?: FunnelChartVisual;

  /**
   * @public
   * <p>A scatter plot.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/scatter-plot.html">Using scatter plots</a> in the <i>Amazon QuickSight User Guide</i>.</p>
   */
  ScatterPlotVisual?: ScatterPlotVisual;

  /**
   * @public
   * <p>A combo chart.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/combo-charts.html">Using combo charts</a> in the <i>Amazon QuickSight User Guide</i>.</p>
   */
  ComboChartVisual?: ComboChartVisual;

  /**
   * @public
   * <p>A box plot.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/box-plots.html">Using box plots</a> in the <i>Amazon QuickSight User Guide</i>.</p>
   */
  BoxPlotVisual?: BoxPlotVisual;

  /**
   * @public
   * <p>A waterfall chart.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/waterfall-chart.html">Using waterfall charts</a> in the <i>Amazon QuickSight User Guide</i>.</p>
   */
  WaterfallVisual?: WaterfallVisual;

  /**
   * @public
   * <p>A histogram.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/histogram-charts.html">Using histograms</a> in the <i>Amazon QuickSight User Guide</i>.</p>
   */
  HistogramVisual?: HistogramVisual;

  /**
   * @public
   * <p>A word cloud.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/word-cloud.html">Using word clouds</a> in the <i>Amazon QuickSight User Guide</i>.</p>
   */
  WordCloudVisual?: WordCloudVisual;

  /**
   * @public
   * <p>An insight visual.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/computational-insights.html">Working with insights</a> in the <i>Amazon QuickSight User Guide</i>.</p>
   */
  InsightVisual?: InsightVisual;

  /**
   * @public
   * <p>A sankey diagram.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/sankey-diagram.html">Using Sankey diagrams</a> in the <i>Amazon QuickSight User Guide</i>.</p>
   */
  SankeyDiagramVisual?: SankeyDiagramVisual;

  /**
   * @public
   * <p>A visual that contains custom content.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/custom-visual-content.html">Using custom visual content</a> in the <i>Amazon QuickSight User Guide</i>.</p>
   */
  CustomContentVisual?: CustomContentVisual;

  /**
   * @public
   * <p>An empty visual.</p>
   */
  EmptyVisual?: EmptyVisual;

  /**
   * @public
   * <p>A radar chart visual.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/radar-chart.html">Using radar charts</a> in the <i>Amazon QuickSight User Guide</i>.</p>
   */
  RadarChartVisual?: RadarChartVisual;
}

/**
 * @public
 * <p>A sheet is an object that contains a set of visuals that
 *             are viewed together on one page in a paginated report. Every analysis and dashboard must contain at least one sheet.</p>
 */
export interface SheetDefinition {
  /**
   * @public
   * <p>The unique identifier of a sheet.</p>
   */
  SheetId: string | undefined;

  /**
   * @public
   * <p>The title of the sheet.</p>
   */
  Title?: string;

  /**
   * @public
   * <p>A description of the sheet.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The name of the sheet. This name is displayed on the sheet's tab in the Amazon QuickSight
   *             console.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The list of parameter controls that are on a sheet.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/parameters-controls.html">Using a Control with a Parameter in Amazon QuickSight</a> in the <i>Amazon QuickSight User Guide</i>.</p>
   */
  ParameterControls?: ParameterControl[];

  /**
   * @public
   * <p>The list of filter controls that are on a sheet.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/filter-controls.html">Adding filter controls to analysis sheets</a> in the <i>Amazon QuickSight User Guide</i>.</p>
   */
  FilterControls?: FilterControl[];

  /**
   * @public
   * <p>A list of the visuals that are on a sheet. Visual placement is determined by the layout of the sheet.</p>
   */
  Visuals?: Visual[];

  /**
   * @public
   * <p>The text boxes that are on a sheet.</p>
   */
  TextBoxes?: SheetTextBox[];

  /**
   * @public
   * <p>Layouts define how the components of a sheet are arranged.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/types-of-layout.html">Types of layout</a> in the <i>Amazon QuickSight User Guide</i>.</p>
   */
  Layouts?: Layout[];

  /**
   * @public
   * <p>The control layouts of the sheet.</p>
   */
  SheetControlLayouts?: SheetControlLayout[];

  /**
   * @public
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
   */
  ContentType?: SheetContentType | string;
}

/**
 * @public
 * <p>The definition of an analysis.</p>
 */
export interface AnalysisDefinition {
  /**
   * @public
   * <p>An array of dataset identifier declarations. This mapping allows the usage of dataset identifiers instead
   *             of dataset ARNs throughout analysis sub-structures.</p>
   */
  DataSetIdentifierDeclarations: DataSetIdentifierDeclaration[] | undefined;

  /**
   * @public
   * <p>An array of sheet definitions for an analysis. Each <code>SheetDefinition</code> provides detailed information about
   *             a sheet within this analysis.</p>
   */
  Sheets?: SheetDefinition[];

  /**
   * @public
   * <p>An array of calculated field definitions for the analysis.</p>
   */
  CalculatedFields?: CalculatedField[];

  /**
   * @public
   * <p>An array of parameter declarations for an analysis.</p>
   *          <p>Parameters are named variables that can transfer a value for use by an action or an object.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/parameters-in-quicksight.html">Parameters in Amazon QuickSight</a> in the <i>Amazon QuickSight User Guide</i>.</p>
   */
  ParameterDeclarations?: ParameterDeclaration[];

  /**
   * @public
   * <p>Filter definitions for an analysis.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/adding-a-filter.html">Filtering Data in Amazon QuickSight</a> in the <i>Amazon QuickSight User Guide</i>.</p>
   */
  FilterGroups?: FilterGroup[];

  /**
   * @public
   * <p>
   *             An array of analysis-level column configurations. Column configurations can be used to set default
   *             formatting for a column to be used throughout an analysis.
   *         </p>
   */
  ColumnConfigurations?: ColumnConfiguration[];

  /**
   * @public
   * <p>The configuration for default analysis settings.</p>
   */
  AnalysisDefaults?: AnalysisDefaults;
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
 * @public
 * <p>A filter that you apply when searching for one or more analyses.</p>
 */
export interface AnalysisSearchFilter {
  /**
   * @public
   * <p>The comparison operator that you want to use as a filter, for example  <code>"Operator": "StringEquals"</code>. Valid values are  <code>"StringEquals"</code>  and  <code>"StringLike"</code>.</p>
   *          <p>If you set the operator value to <code>"StringEquals"</code>, you need to provide an ownership related filter in the <code>"NAME"</code> field and the arn of the user or group whose folders you want to search in the <code>"Value"</code> field. For example,  <code>"Name":"DIRECT_QUICKSIGHT_OWNER", "Operator": "StringEquals", "Value": "arn:aws:quicksight:us-east-1:1:user/default/UserName1"</code>.</p>
   *          <p>If you set the value to <code>"StringLike"</code>, you need to provide the name of the folders you are searching for. For example, <code>"Name":"ANALYSIS_NAME", "Operator": "StringLike", "Value": "Test"</code>. The <code>"StringLike"</code> operator only supports the <code>NAME</code> value <code>ANALYSIS_NAME</code>.</p>
   */
  Operator?: FilterOperator | string;

  /**
   * @public
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
   */
  Name?: AnalysisFilterAttribute | string;

  /**
   * @public
   * <p>The value of the named item, in this case <code>QUICKSIGHT_USER</code>, that you want
   *             to use as a filter, for example <code>"Value"</code>. An example is
   *                 <code>"arn:aws:quicksight:us-east-1:1:user/default/UserName1"</code>.</p>
   */
  Value?: string;
}

/**
 * @public
 * <p>Dataset reference.</p>
 */
export interface DataSetReference {
  /**
   * @public
   * <p>Dataset placeholder.</p>
   */
  DataSetPlaceholder: string | undefined;

  /**
   * @public
   * <p>Dataset Amazon Resource Name (ARN).</p>
   */
  DataSetArn: string | undefined;
}

/**
 * @public
 * <p>The source template of an analysis.</p>
 */
export interface AnalysisSourceTemplate {
  /**
   * @public
   * <p>The dataset references of the source template of an analysis.</p>
   */
  DataSetReferences: DataSetReference[] | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the source template of an analysis.</p>
   */
  Arn: string | undefined;
}

/**
 * @public
 * <p>The source entity of an analysis.</p>
 */
export interface AnalysisSourceEntity {
  /**
   * @public
   * <p>The source template for the source entity of the analysis.</p>
   */
  SourceTemplate?: AnalysisSourceTemplate;
}

/**
 * @public
 * <p>The summary metadata that describes an analysis.</p>
 */
export interface AnalysisSummary {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the analysis.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The ID of the analysis. This ID displays in the URL.</p>
   */
  AnalysisId?: string;

  /**
   * @public
   * <p>The name of the analysis. This name is displayed in the Amazon QuickSight console.
   *             </p>
   */
  Name?: string;

  /**
   * @public
   * <p>The last known status for the analysis.</p>
   */
  Status?: ResourceStatus | string;

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
}

/**
 * @public
 * <p>Information about the dashboard that you want to embed.</p>
 */
export interface AnonymousUserDashboardEmbeddingConfiguration {
  /**
   * @public
   * <p>The dashboard ID for the dashboard that you want the user to see first. This ID is included in the output URL. When the URL in response is accessed, Amazon QuickSight renders this dashboard.</p>
   *          <p>The Amazon Resource Name (ARN) of this dashboard must be included in the <code>AuthorizedResourceArns</code> parameter. Otherwise, the request will fail with <code>InvalidParameterValueException</code>.</p>
   */
  InitialDashboardId: string | undefined;
}

/**
 * @public
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
 */
export interface DashboardVisualId {
  /**
   * @public
   * <p>The ID of the dashboard that has the visual that you want to embed. The <code>DashboardId</code> can be found in the <code>IDs for developers</code> section of the <code>Embed visual</code> pane of the visual's on-visual menu of the Amazon QuickSight console. You can also get the <code>DashboardId</code> with a <code>ListDashboards</code> API operation.</p>
   */
  DashboardId: string | undefined;

  /**
   * @public
   * <p>The ID of the sheet that the has visual that you want to embed. The <code>SheetId</code> can be found in the <code>IDs for developers</code> section of the <code>Embed visual</code> pane of the visual's on-visual menu of the Amazon QuickSight console.</p>
   */
  SheetId: string | undefined;

  /**
   * @public
   * <p>The ID of the visual that you want to embed. The <code>VisualID</code> can be found in the <code>IDs for developers</code> section of the <code>Embed visual</code> pane of the visual's on-visual menu of the Amazon QuickSight console.</p>
   */
  VisualId: string | undefined;
}

/**
 * @public
 * <p>The experience that you are embedding. You can use this object to generate a url that embeds a visual into your application.</p>
 */
export interface AnonymousUserDashboardVisualEmbeddingConfiguration {
  /**
   * @public
   * <p>The visual ID for the visual that you want the user to see. This ID is included in the output URL. When the URL in response is accessed, Amazon QuickSight renders this visual.</p>
   *          <p>The Amazon Resource Name (ARN) of the dashboard that the visual belongs to must be included in the <code>AuthorizedResourceArns</code> parameter. Otherwise, the request will fail with <code>InvalidParameterValueException</code>.</p>
   */
  InitialDashboardVisualId: DashboardVisualId | undefined;
}

/**
 * @public
 * <p>The settings that you want to use with the Q search bar.</p>
 */
export interface AnonymousUserQSearchBarEmbeddingConfiguration {
  /**
   * @public
   * <p>The QuickSight Q topic ID of the topic that you want the anonymous user to see first. This ID is included in the output URL. When the URL in response is accessed, Amazon QuickSight renders the Q search bar with this topic pre-selected.</p>
   *          <p>The Amazon Resource Name (ARN) of this Q topic must be included in the <code>AuthorizedResourceArns</code> parameter. Otherwise, the request will fail with <code>InvalidParameterValueException</code>.</p>
   */
  InitialTopicId: string | undefined;
}

/**
 * @public
 * <p>The type of experience you want to embed. For anonymous users, you can embed Amazon QuickSight dashboards.</p>
 */
export interface AnonymousUserEmbeddingExperienceConfiguration {
  /**
   * @public
   * <p>The type of embedding experience. In this case, Amazon QuickSight dashboards.</p>
   */
  Dashboard?: AnonymousUserDashboardEmbeddingConfiguration;

  /**
   * @public
   * <p>The type of embedding experience. In this case, Amazon QuickSight visuals.</p>
   */
  DashboardVisual?: AnonymousUserDashboardVisualEmbeddingConfiguration;

  /**
   * @public
   * <p>The Q search bar that you want to use for anonymous user embedding.</p>
   */
  QSearchBar?: AnonymousUserQSearchBarEmbeddingConfiguration;
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
 * @public
 * <p>A structure that contains information that identifies the snapshot that needs to be generated.</p>
 */
export interface SnapshotFileSheetSelection {
  /**
   * @public
   * <p>The sheet ID of the dashboard to generate the snapshot artifact from. This value is required for CSV, Excel, and PDF format types.</p>
   */
  SheetId: string | undefined;

  /**
   * @public
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
   */
  SelectionScope: SnapshotFileSheetSelectionScope | string | undefined;

  /**
   * @public
   * <p>
   *             A structure that lists the IDs of the visuals in the selected sheet. Supported visual types are table, pivot table visuals. This value is required if you are generating a CSV or Excel workbook. This value supports a maximum of 1 visual ID for CSV and 5 visual IDs across up to 5 sheet selections for Excel. If you are generating an Excel workbook, the order of the visual IDs provided in this structure determines the order of the worksheets in the Excel file.
   *         </p>
   */
  VisualIds?: string[];
}

/**
 * @public
 * <p>A structure that contains the information for the snapshot that you want to generate. This information is provided by you when you start a new snapshot job.</p>
 */
export interface SnapshotFile {
  /**
   * @public
   * <p>A list of <code>SnapshotFileSheetSelection</code> objects that contain information on the dashboard sheet that is exported. These objects provide information about the snapshot artifacts that are generated during the job. This structure can hold a maximum of 5 CSV configurations, 5 Excel configurations, or 1 configuration for PDF.</p>
   */
  SheetSelections: SnapshotFileSheetSelection[] | undefined;

  /**
   * @public
   * <p>The format of the snapshot file to be generated. You can choose between <code>CSV</code>, <code>Excel</code>, or <code>PDF</code>.</p>
   */
  FormatType: SnapshotFileFormatType | string | undefined;
}

/**
 * @public
 * <p>Information on the error that caused the snapshot job to fail.</p>
 */
export interface SnapshotJobResultErrorInfo {
  /**
   * @public
   * <p>The error message.</p>
   */
  ErrorMessage?: string;

  /**
   * @public
   * <p>The error type.</p>
   */
  ErrorType?: string;
}

/**
 * @public
 * <p>An optional structure that contains the Amazon S3 bucket configuration that the generated snapshots are stored in. If you don't provide this information, generated snapshots are stored in the default Amazon QuickSight bucket.</p>
 */
export interface S3BucketConfiguration {
  /**
   * @public
   * <p>The name of an existing Amazon S3 bucket where the generated snapshot artifacts are sent.</p>
   */
  BucketName: string | undefined;

  /**
   * @public
   * <p>The prefix of the Amazon S3 bucket that the generated snapshots are stored in.</p>
   */
  BucketPrefix: string | undefined;

  /**
   * @public
   * <p>The region that the Amazon S3 bucket is located in. The bucket must be located in the same region that the <code>StartDashboardSnapshotJob</code> API call is made.</p>
   */
  BucketRegion: string | undefined;
}

/**
 * @public
 * <p>A structure that describes the Amazon S3 settings to use to save the generated dashboard snapshot.</p>
 */
export interface SnapshotS3DestinationConfiguration {
  /**
   * @public
   * <p>A structure that contains details about the Amazon S3 bucket that the generated dashboard snapshot is saved in.</p>
   */
  BucketConfiguration?: S3BucketConfiguration;
}

/**
 * @public
 * <p>The Amazon S3 result from the snapshot job. The result includes the <code>DestinationConfiguration</code> and the Amazon S3 Uri. If an error occured during the job, the result returns information on the error.</p>
 */
export interface SnapshotJobS3Result {
  /**
   * @public
   * <p>A list of Amazon S3 bucket configurations that are provided when you make a <code>StartDashboardSnapshotJob</code> API call.
   *         </p>
   */
  S3DestinationConfiguration?: SnapshotS3DestinationConfiguration;

  /**
   * @public
   * <p>The Amazon S3 Uri.</p>
   */
  S3Uri?: string;

  /**
   * @public
   * <p>An array of error records that describe any failures that occur while the dashboard snapshot job runs.</p>
   */
  ErrorInfo?: SnapshotJobResultErrorInfo[];
}

/**
 * @public
 * <p>A structure that contains information on the generated snapshot file groups.</p>
 */
export interface SnapshotJobResultFileGroup {
  /**
   * @public
   * <p> A list of <code>SnapshotFile</code> objects.</p>
   */
  Files?: SnapshotFile[];

  /**
   * @public
   * <p> A list of <code>SnapshotJobS3Result</code> objects.</p>
   */
  S3Results?: SnapshotJobS3Result[];
}

/**
 * @public
 * <p>A structure that contains the file groups that are requested for the artifact generation in a <code>StartDashboardSnapshotJob</code> API call.
 *         </p>
 */
export interface AnonymousUserSnapshotJobResult {
  /**
   * @public
   * <p>A list of <code>SnapshotJobResultFileGroup</code> objects that contain information on the files that are requested during a <code>StartDashboardSnapshotJob</code> API call. If the job succeeds, these objects contain the location where the snapshot artifacts are stored. If the job fails, the objects contain information about the error that caused the job to fail.</p>
   */
  FileGroups?: SnapshotJobResultFileGroup[];
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
 * @public
 * <p>Controls how a specific <code>Analysis</code> resource is parameterized in the returned CloudFormation template.</p>
 */
export interface AssetBundleExportJobAnalysisOverrideProperties {
  /**
   * @public
   * <p>The ARN of the specific <code>Analysis</code> resource whose override properties are configured in this structure.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>A list of <code>Analysis</code> resource properties to generate variables for in the returned CloudFormation template.</p>
   */
  Properties: (AssetBundleExportJobAnalysisPropertyToOverride | string)[] | undefined;
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
 * @public
 * <p>Controls how a specific <code>Dashboard</code> resource is parameterized in the returned CloudFormation template.</p>
 */
export interface AssetBundleExportJobDashboardOverrideProperties {
  /**
   * @public
   * <p>The ARN of the specific <code>Dashboard</code> resource whose override properties are configured in this structure.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>A list of <code>Dashboard</code> resource properties to generate variables for in the returned CloudFormation template.</p>
   */
  Properties: (AssetBundleExportJobDashboardPropertyToOverride | string)[] | undefined;
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
