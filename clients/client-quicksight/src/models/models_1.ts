// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@aws-sdk/smithy-client";

import {
  AnalysisDefaults,
  AxisBinding,
  AxisDisplayOptions,
  BarChartVisual,
  BarsArrangement,
  BoxPlotVisual,
  CalculatedField,
  CalculatedFieldFilterSensitiveLog,
  ChartAxisLabelOptions,
  ColumnConfiguration,
  ColumnConfigurationFilterSensitiveLog,
  ColumnHierarchy,
  ColumnIdentifier,
  ColumnSort,
  ComboChartFieldWells,
  ComboChartSortConfiguration,
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
  PaginationConfiguration,
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
import { QuickSightServiceException as __BaseException } from "./QuickSightServiceException";

/**
 * @public
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
 * @public
 * <p>A combo chart.</p>
 *          <p>The <code>ComboChartVisual</code> includes stacked bar combo charts and clustered bar combo charts</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/combo-charts.html">Using combo charts</a> in the <i>Amazon QuickSight User Guide</i>.</p>
 */
export interface ComboChartVisual {
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
  ChartConfiguration?: ComboChartConfiguration;

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
   * <p>The input URL that links to the custom content that you want in the custom visual.</p>
   */
  ContentUrl?: string;

  /**
   * <p>The content type of the custom content visual. You can use this to have the visual render as an image.</p>
   */
  ContentType?: CustomContentType | string;

  /**
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
   * <p>The configuration of a <code>CustomContentVisual</code>.</p>
   */
  ChartConfiguration?: CustomContentConfiguration;

  /**
   * <p>The list of custom actions that are configured for a visual.</p>
   */
  Actions?: VisualCustomAction[];

  /**
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
   * <p>The unique identifier of a visual. This identifier must be unique within the context of a dashboard, template, or analysis. Two dashboards, analyses, or templates can have visuals with the same identifiers.</p>
   */
  VisualId: string | undefined;

  /**
   * <p>The data set that is used in the empty visual. Every visual requires a dataset to render.</p>
   */
  DataSetIdentifier: string | undefined;

  /**
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
   * <p>The aggregated location field well of the filled map. Values are grouped by location fields.</p>
   */
  Geospatial?: DimensionField[];

  /**
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
   * <p>The latitude of the north bound of the geospatial coordinate bounds.</p>
   */
  North: number | undefined;

  /**
   * <p>The latitude of the south bound of the geospatial coordinate bounds.</p>
   */
  South: number | undefined;

  /**
   * <p>The longitude of the west bound of the geospatial coordinate bounds.</p>
   */
  West: number | undefined;

  /**
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
   * <p>The bounds options (north, south, west, east) of the geospatial window options.</p>
   */
  Bounds?: GeospatialCoordinateBounds;

  /**
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
   * <p>The field wells of the visual.</p>
   */
  FieldWells?: FilledMapFieldWells;

  /**
   * <p>The sort configuration of a <code>FilledMapVisual</code>.</p>
   */
  SortConfiguration?: FilledMapSortConfiguration;

  /**
   * <p>The legend display setup of the visual.</p>
   */
  Legend?: LegendOptions;

  /**
   * <p>The tooltip display setup of the visual.</p>
   */
  Tooltip?: TooltipOptions;

  /**
   * <p>The window options of the filled map visual.</p>
   */
  WindowOptions?: GeospatialWindowOptions;

  /**
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
   * <p>Determines gradient offset value.</p>
   */
  GradientOffset: number | undefined;

  /**
   * <p>Determines the data value.</p>
   */
  DataValue?: number;

  /**
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
   * <p>The expression that determines the formatting configuration for gradient color.</p>
   */
  Expression: string | undefined;

  /**
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
   * <p>The expression that determines the formatting configuration for solid color.</p>
   */
  Expression: string | undefined;

  /**
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
   * <p>Formatting configuration for solid color.</p>
   */
  Solid?: ConditionalFormattingSolidColor;

  /**
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
   * <p>The field ID of the filled map shape.</p>
   */
  FieldId: string | undefined;

  /**
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
  ChartConfiguration?: FilledMapConfiguration;

  /**
   * <p>The conditional formatting of a <code>FilledMapVisual</code>.</p>
   */
  ConditionalFormatting?: FilledMapConditionalFormatting;

  /**
   * <p>The column hierarchy that is used during drill-downs and drill-ups.</p>
   */
  ColumnHierarchies?: ColumnHierarchy[];

  /**
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
   * <p>The visibility option that determines if data labels are displayed.</p>
   */
  Visibility?: Visibility | string;

  /**
   * <p>The visibility of the category labels within the data labels.</p>
   */
  CategoryLabelVisibility?: Visibility | string;

  /**
   * <p>The visibility of the measure labels within the data labels.</p>
   */
  MeasureLabelVisibility?: Visibility | string;

  /**
   * <p>Determines the positioning of the data label relative to a section of the funnel.</p>
   */
  Position?: DataLabelPosition | string;

  /**
   * <p>The font configuration for the data labels.</p>
   *          <p>Only the <code>FontSize</code> attribute of the font configuration is used for data labels.</p>
   */
  LabelFontConfiguration?: FontConfiguration;

  /**
   * <p>The color of the data label text.</p>
   */
  LabelColor?: string;

  /**
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
   * <p>The category field wells of a funnel chart. Values are grouped by category fields.</p>
   */
  Category?: DimensionField[];

  /**
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
   * <p>The sort configuration of the category fields.</p>
   */
  CategorySort?: FieldSortOptions[];

  /**
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
   * <p>The field well configuration of a <code>FunnelChartVisual</code>.</p>
   */
  FieldWells?: FunnelChartFieldWells;

  /**
   * <p>The sort configuration of a <code>FunnelChartVisual</code>.</p>
   */
  SortConfiguration?: FunnelChartSortConfiguration;

  /**
   * <p>The label options of the categories that are displayed in a <code>FunnelChartVisual</code>.</p>
   */
  CategoryLabelOptions?: ChartAxisLabelOptions;

  /**
   * <p>The label options for the values that are displayed in a <code>FunnelChartVisual</code>.</p>
   */
  ValueLabelOptions?: ChartAxisLabelOptions;

  /**
   * <p>The tooltip configuration of a <code>FunnelChartVisual</code>.</p>
   */
  Tooltip?: TooltipOptions;

  /**
   * <p>The options that determine the presentation of the data labels.</p>
   */
  DataLabelOptions?: FunnelChartDataLabelOptions;

  /**
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
   * <p>The configuration of a <code>FunnelChartVisual</code>.</p>
   */
  ChartConfiguration?: FunnelChartConfiguration;

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
 * @public
 * <p>The field well configuration of a <code>GaugeChartVisual</code>.</p>
 */
export interface GaugeChartFieldWells {
  /**
   * <p>The value field wells of a <code>GaugeChartVisual</code>.</p>
   */
  Values?: MeasureField[];

  /**
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
   * <p>The option that determines the arc angle of a <code>GaugeChartVisual</code>.</p>
   */
  ArcAngle?: number;

  /**
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
   * <p>The minimum value of the arc axis range.</p>
   */
  Min?: number;

  /**
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
   * <p>The arc axis range of a <code>GaugeChartVisual</code>.</p>
   */
  Range?: ArcAxisDisplayRange;

  /**
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
   * <p>The number display format.</p>
   */
  NumberDisplayFormatConfiguration?: NumberDisplayFormatConfiguration;

  /**
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
   * <p>The options that determine the primary value display type.</p>
   */
  PrimaryValueDisplayType?: PrimaryValueDisplayType | string;

  /**
   * <p>The comparison configuration of a <code>GaugeChartVisual</code>.</p>
   */
  Comparison?: ComparisonConfiguration;

  /**
   * <p>The arc axis configuration of a <code>GaugeChartVisual</code>.</p>
   */
  ArcAxis?: ArcAxisConfiguration;

  /**
   * <p>The arc configuration of a <code>GaugeChartVisual</code>.</p>
   */
  Arc?: ArcConfiguration;

  /**
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
   * <p>The field well configuration of a <code>GaugeChartVisual</code>.</p>
   */
  FieldWells?: GaugeChartFieldWells;

  /**
   * <p>The options that determine the presentation of the <code>GaugeChartVisual</code>.</p>
   */
  GaugeChartOptions?: GaugeChartOptions;

  /**
   * <p>The data label configuration of a <code>GaugeChartVisual</code>.</p>
   */
  DataLabels?: DataLabelOptions;

  /**
   * <p>The tooltip configuration of a <code>GaugeChartVisual</code>.</p>
   */
  TooltipOptions?: TooltipOptions;

  /**
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
   * <p>Determines the type of icon.</p>
   */
  Icon?: Icon | string;

  /**
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
   * <p>The expression that determines the condition of the icon set.</p>
   */
  Expression: string | undefined;

  /**
   * <p>Custom icon options for an icon set.</p>
   */
  IconOptions: ConditionalFormattingCustomIconOptions | undefined;

  /**
   * <p>Determines the color of the icon.</p>
   */
  Color?: string;

  /**
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
   * <p>The expression that determines the formatting configuration for the icon set.</p>
   */
  Expression: string | undefined;

  /**
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
   * <p>Formatting configuration for icon set.</p>
   */
  IconSet?: ConditionalFormattingIconSet;

  /**
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
   * <p>The conditional formatting of the primary value text color.</p>
   */
  TextColor?: ConditionalFormattingColor;

  /**
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
   * <p>The conditional formatting for the primary value of a <code>GaugeChartVisual</code>.</p>
   */
  PrimaryValue?: GaugeChartPrimaryValueConditionalFormatting;

  /**
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
   * <p>The configuration of a <code>GaugeChartVisual</code>.</p>
   */
  ChartConfiguration?: GaugeChartConfiguration;

  /**
   * <p>The conditional formatting of a <code>GaugeChartVisual</code>.</p>
   */
  ConditionalFormatting?: GaugeChartConditionalFormatting;

  /**
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
   * <p>The geospatial field wells of a geospatial map. Values are grouped by geospatial fields.</p>
   */
  Geospatial?: DimensionField[];

  /**
   * <p>The size field wells of a geospatial map. Values are aggregated based on geospatial fields.</p>
   */
  Values?: MeasureField[];

  /**
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
   * <p>The cluster marker that is a part of the cluster marker configuration</p>
   */
  ClusterMarker?: ClusterMarker;
}

/**
 * @public
 * @enum
 */
export const GeospatialSelectedPointStyle = {
  CLUSTER: "CLUSTER",
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
   * <p>The selected point styles (point, cluster) of the geospatial map.</p>
   */
  SelectedPointStyle?: GeospatialSelectedPointStyle | string;

  /**
   * <p>The cluster marker configuration of the geospatial point style.</p>
   */
  ClusterMarkerConfiguration?: ClusterMarkerConfiguration;
}

/**
 * @public
 * <p>The configuration of a <code>GeospatialMapVisual</code>.</p>
 */
export interface GeospatialMapConfiguration {
  /**
   * <p>The field wells of the visual.</p>
   */
  FieldWells?: GeospatialMapFieldWells;

  /**
   * <p>The legend display setup of the visual.</p>
   */
  Legend?: LegendOptions;

  /**
   * <p>The tooltip display setup of the visual.</p>
   */
  Tooltip?: TooltipOptions;

  /**
   * <p>The window options of the geospatial map.</p>
   */
  WindowOptions?: GeospatialWindowOptions;

  /**
   * <p>The map style options of the geospatial map.</p>
   */
  MapStyleOptions?: GeospatialMapStyleOptions;

  /**
   * <p>The point style options of the geospatial map.</p>
   */
  PointStyleOptions?: GeospatialPointStyleOptions;

  /**
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
  ChartConfiguration?: GeospatialMapConfiguration;

  /**
   * <p>The column hierarchy that is used during drill-downs and drill-ups.</p>
   */
  ColumnHierarchies?: ColumnHierarchy[];

  /**
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
   * <p>The color that is applied to the data value.</p>
   */
  Color?: string;

  /**
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
   * <p>Determines the list of colors that are applied to the visual.</p>
   */
  Colors: DataColor[] | undefined;

  /**
   * <p>Determines the color fill type.</p>
   */
  ColorFillType: ColorFillType | string | undefined;

  /**
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
   * <p>The rows field well of a heat map.</p>
   */
  Rows?: DimensionField[];

  /**
   * <p>The columns field well of a heat map.</p>
   */
  Columns?: DimensionField[];

  /**
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
   * <p>The field sort configuration of the rows fields.</p>
   */
  HeatMapRowSort?: FieldSortOptions[];

  /**
   * <p>The column sort configuration for heat map for columns that aren't a part of a field well.</p>
   */
  HeatMapColumnSort?: FieldSortOptions[];

  /**
   * <p>The limit on the number of rows that are displayed in a heat map.</p>
   */
  HeatMapRowItemsLimitConfiguration?: ItemsLimitConfiguration;

  /**
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
   * <p>The field wells of the visual.</p>
   */
  FieldWells?: HeatMapFieldWells;

  /**
   * <p>The sort configuration of a heat map.</p>
   */
  SortConfiguration?: HeatMapSortConfiguration;

  /**
   * <p>The label options of the row that is displayed in a <code>heat map</code>.</p>
   */
  RowLabelOptions?: ChartAxisLabelOptions;

  /**
   * <p>The label options of the column that is displayed in a heat map.</p>
   */
  ColumnLabelOptions?: ChartAxisLabelOptions;

  /**
   * <p>The color options (gradient color, point of divergence) in a heat map.</p>
   */
  ColorScale?: ColorScale;

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
}

/**
 * @public
 * <p>A heat map.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/heat-map.html">Using heat maps</a> in the <i>Amazon QuickSight User Guide</i>.</p>
 */
export interface HeatMapVisual {
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
   * <p>The configuration of a heat map.</p>
   */
  ChartConfiguration?: HeatMapConfiguration;

  /**
   * <p>The column hierarchy that is used during drill-downs and drill-ups.</p>
   */
  ColumnHierarchies?: ColumnHierarchy[];

  /**
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
   * <p>The options that determine the bin width value.</p>
   */
  Value?: number;

  /**
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
   * <p>The options that determine the selected bin type.</p>
   */
  SelectedBinType?: HistogramBinType | string;

  /**
   * <p>The options that determine the bin count of a histogram.</p>
   */
  BinCount?: BinCountOptions;

  /**
   * <p>The options that determine the bin width of a histogram.</p>
   */
  BinWidth?: BinWidthOptions;

  /**
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
   * <p>The field well configuration of a histogram.</p>
   */
  FieldWells?: HistogramFieldWells;

  /**
   * <p>The options that determine the presentation of the x-axis.</p>
   */
  XAxisDisplayOptions?: AxisDisplayOptions;

  /**
   * <p>The options that determine the presentation of the x-axis label.</p>
   */
  XAxisLabelOptions?: ChartAxisLabelOptions;

  /**
   * <p>The options that determine the presentation of the y-axis.</p>
   */
  YAxisDisplayOptions?: AxisDisplayOptions;

  /**
   * <p>The options that determine the presentation of histogram bins.</p>
   */
  BinOptions?: HistogramBinOptions;

  /**
   * <p>The data label configuration of a histogram.</p>
   */
  DataLabels?: DataLabelOptions;

  /**
   * <p>The tooltip configuration of a histogram.</p>
   */
  Tooltip?: TooltipOptions;

  /**
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
   * <p>The configuration for a <code>HistogramVisual</code>.</p>
   */
  ChartConfiguration?: HistogramConfiguration;

  /**
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
   * <p>The ID for a computation.</p>
   */
  ComputationId: string | undefined;

  /**
   * <p>The name of a computation.</p>
   */
  Name?: string;

  /**
   * <p>The time field that is used in a computation.</p>
   */
  Time: DimensionField | undefined;

  /**
   * <p>The value field that is used in a computation.</p>
   */
  Value?: MeasureField;

  /**
   * <p>The periods forward setup of a forecast computation.</p>
   */
  PeriodsForward?: number;

  /**
   * <p>The periods backward setup of a forecast computation.</p>
   */
  PeriodsBackward?: number;

  /**
   * <p>The upper boundary setup of a forecast computation.</p>
   */
  UpperBoundary?: number;

  /**
   * <p>The lower boundary setup of a forecast computation.</p>
   */
  LowerBoundary?: number;

  /**
   * <p>The prediction interval setup of a forecast computation.</p>
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
   */
  Seasonality?: ForecastComputationSeasonality | string;

  /**
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
   * <p>The ID for a computation.</p>
   */
  ComputationId: string | undefined;

  /**
   * <p>The name of a computation.</p>
   */
  Name?: string;

  /**
   * <p>The time field that is used in a computation.</p>
   */
  Time: DimensionField | undefined;

  /**
   * <p>The value field that is used in a computation.</p>
   */
  Value?: MeasureField;

  /**
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
   * <p>The ID for a computation.</p>
   */
  ComputationId: string | undefined;

  /**
   * <p>The name of a computation.</p>
   */
  Name?: string;

  /**
   * <p>The time field that is used in a computation.</p>
   */
  Time: DimensionField | undefined;

  /**
   * <p>The value field that is used in a computation.</p>
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
   */
  Type: MaximumMinimumComputationType | string | undefined;
}

/**
 * @public
 * <p>The metric comparison computation configuration.</p>
 */
export interface MetricComparisonComputation {
  /**
   * <p>The ID for a computation.</p>
   */
  ComputationId: string | undefined;

  /**
   * <p>The name of a computation.</p>
   */
  Name?: string;

  /**
   * <p>The time field that is used in a computation.</p>
   */
  Time: DimensionField | undefined;

  /**
   * <p>The field that is used in a metric comparison from value setup.</p>
   */
  FromValue: MeasureField | undefined;

  /**
   * <p>The field that is used in a metric comparison to value setup.</p>
   */
  TargetValue: MeasureField | undefined;
}

/**
 * @public
 * <p>The period over period computation configuration.</p>
 */
export interface PeriodOverPeriodComputation {
  /**
   * <p>The ID for a computation.</p>
   */
  ComputationId: string | undefined;

  /**
   * <p>The name of a computation.</p>
   */
  Name?: string;

  /**
   * <p>The time field that is used in a computation.</p>
   */
  Time: DimensionField | undefined;

  /**
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
   * <p>The ID for a computation.</p>
   */
  ComputationId: string | undefined;

  /**
   * <p>The name of a computation.</p>
   */
  Name?: string;

  /**
   * <p>The time field that is used in a computation.</p>
   */
  Time: DimensionField | undefined;

  /**
   * <p>The value field that is used in a computation.</p>
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
   * <p>The ID for a computation.</p>
   */
  ComputationId: string | undefined;

  /**
   * <p>The name of a computation.</p>
   */
  Name?: string;

  /**
   * <p>The time field that is used in a computation.</p>
   */
  Time: DimensionField | undefined;

  /**
   * <p>The category field that is used in a computation.</p>
   */
  Category: DimensionField | undefined;

  /**
   * <p>The value field that is used in a computation.</p>
   */
  Value?: MeasureField;

  /**
   * <p>The mover size setup of the top and bottom movers computation.</p>
   */
  MoverSize?: number;

  /**
   * <p>The sort order setup of the top and bottom movers computation.</p>
   */
  SortOrder?: TopBottomSortOrder | string;

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
   */
  Type: TopBottomComputationType | string | undefined;
}

/**
 * @public
 * <p>The top ranked and bottom ranked computation configuration.</p>
 */
export interface TopBottomRankedComputation {
  /**
   * <p>The ID for a computation.</p>
   */
  ComputationId: string | undefined;

  /**
   * <p>The name of a computation.</p>
   */
  Name?: string;

  /**
   * <p>The category field that is used in a computation.</p>
   */
  Category: DimensionField | undefined;

  /**
   * <p>The value field that is used in a computation.</p>
   */
  Value?: MeasureField;

  /**
   * <p>The result size of a top and bottom ranked computation.</p>
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
   */
  Type: TopBottomComputationType | string | undefined;
}

/**
 * @public
 * <p>The total aggregation computation configuration.</p>
 */
export interface TotalAggregationComputation {
  /**
   * <p>The ID for a computation.</p>
   */
  ComputationId: string | undefined;

  /**
   * <p>The name of a computation.</p>
   */
  Name?: string;

  /**
   * <p>The value field that is used in a computation.</p>
   */
  Value: MeasureField | undefined;
}

/**
 * @public
 * <p>The unique values computation configuration.</p>
 */
export interface UniqueValuesComputation {
  /**
   * <p>The ID for a computation.</p>
   */
  ComputationId: string | undefined;

  /**
   * <p>The name of a computation.</p>
   */
  Name?: string;

  /**
   * <p>The category field that is used in a computation.</p>
   */
  Category: DimensionField | undefined;
}

/**
 * @public
 * <p>The computation union that is used in an insight visual.</p>
 *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
 */
export interface Computation {
  /**
   * <p>The top ranked and bottom ranked computation configuration.</p>
   */
  TopBottomRanked?: TopBottomRankedComputation;

  /**
   * <p>The top movers and bottom movers computation configuration.</p>
   */
  TopBottomMovers?: TopBottomMoversComputation;

  /**
   * <p>The total aggregation computation configuration.</p>
   */
  TotalAggregation?: TotalAggregationComputation;

  /**
   * <p>The maximum and minimum computation configuration.</p>
   */
  MaximumMinimum?: MaximumMinimumComputation;

  /**
   * <p>The metric comparison computation configuration.</p>
   */
  MetricComparison?: MetricComparisonComputation;

  /**
   * <p>The period over period computation configuration.</p>
   */
  PeriodOverPeriod?: PeriodOverPeriodComputation;

  /**
   * <p>The period to <code>DataSetIdentifier</code> computation configuration.</p>
   */
  PeriodToDate?: PeriodToDateComputation;

  /**
   * <p>The growth rate computation configuration.</p>
   */
  GrowthRate?: GrowthRateComputation;

  /**
   * <p>The unique values computation configuration.</p>
   */
  UniqueValues?: UniqueValuesComputation;

  /**
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
   * <p>The computations configurations of the insight visual</p>
   */
  Computations?: Computation[];

  /**
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
   * <p>The configuration of an insight visual.</p>
   */
  InsightConfiguration?: InsightConfiguration;

  /**
   * <p>The list of custom actions that are configured for a visual.</p>
   */
  Actions?: VisualCustomAction[];

  /**
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
   * <p>The value field wells of a KPI visual.</p>
   */
  Values?: MeasureField[];

  /**
   * <p>The target value field wells of a KPI visual.</p>
   */
  TargetValues?: MeasureField[];

  /**
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
   * <p>The options that determine the presentation of the progress bar of a KPI visual.</p>
   */
  ProgressBar?: ProgressBarOptions;

  /**
   * <p>The options that determine the presentation of trend arrows in a KPI visual.</p>
   */
  TrendArrows?: TrendArrowOptions;

  /**
   * <p>The options that determine the presentation of the secondary value of a KPI visual.</p>
   */
  SecondaryValue?: SecondaryValueOptions;

  /**
   * <p>The comparison configuration of a KPI visual.</p>
   */
  Comparison?: ComparisonConfiguration;

  /**
   * <p>The options that determine the primary value display type.</p>
   */
  PrimaryValueDisplayType?: PrimaryValueDisplayType | string;

  /**
   * <p>The options that determine the primary value font configuration.</p>
   */
  PrimaryValueFontConfiguration?: FontConfiguration;

  /**
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
   * <p>The field well configuration of a KPI visual.</p>
   */
  FieldWells?: KPIFieldWells;

  /**
   * <p>The sort configuration of a KPI visual.</p>
   */
  SortConfiguration?: KPISortConfiguration;

  /**
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
   * <p>The conditional formatting of the  primary value's text color.</p>
   */
  TextColor?: ConditionalFormattingColor;

  /**
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
   * <p>The conditional formatting for the primary value of a KPI visual.</p>
   */
  PrimaryValue?: KPIPrimaryValueConditionalFormatting;

  /**
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
   * <p>The configuration of a KPI visual.</p>
   */
  ChartConfiguration?: KPIConfiguration;

  /**
   * <p>The conditional formatting of a KPI visual.</p>
   */
  ConditionalFormatting?: KPIConditionalFormatting;

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
   * <p>Configuration option that determines whether to show the line for the series.</p>
   */
  LineVisibility?: Visibility | string;

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
   */
  LineInterpolation?: LineInterpolation | string;

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
   */
  LineStyle?: LineChartLineStyle | string;

  /**
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
   * <p>Configuration option that determines whether to show the markers in the series.</p>
   */
  MarkerVisibility?: Visibility | string;

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
   */
  MarkerShape?: LineChartMarkerShape | string;

  /**
   * <p>Size of marker in the series.</p>
   */
  MarkerSize?: string;

  /**
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
   * <p>The axis to which you are binding all line series to.</p>
   */
  AxisBinding?: AxisBinding | string;

  /**
   * <p>Line styles options for all line series in the visual.</p>
   */
  LineStyleSettings?: LineChartLineStyleSettings;

  /**
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
   * <p>The category field wells of a line chart. Values are grouped by category fields.</p>
   */
  Category?: DimensionField[];

  /**
   * <p>The value field wells of a line chart. Values are aggregated based on categories.</p>
   */
  Values?: MeasureField[];

  /**
   * <p>The color field wells of a line chart. Values are grouped by category fields.</p>
   */
  Colors?: DimensionField[];

  /**
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
   * <p>The periods forward setup of a forecast computation.</p>
   */
  PeriodsForward?: number;

  /**
   * <p>The periods backward setup of a forecast computation.</p>
   */
  PeriodsBackward?: number;

  /**
   * <p>The upper boundary setup of a forecast computation.</p>
   */
  UpperBoundary?: number;

  /**
   * <p>The lower boundary setup of a forecast computation.</p>
   */
  LowerBoundary?: number;

  /**
   * <p>The prediction interval setup of a forecast computation.</p>
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
   */
  Seasonality?: number;
}

/**
 * @public
 * <p>Provides the forecast to meet the target for a particular date.</p>
 */
export interface WhatIfPointScenario {
  /**
   * <p>The date that you need the forecast results for.</p>
   */
  Date: Date | undefined;

  /**
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
   * <p>The start date in the date range that you need the forecast results for.</p>
   */
  StartDate: Date | undefined;

  /**
   * <p>The end date in the date range that you need the forecast results for.</p>
   */
  EndDate: Date | undefined;

  /**
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
   * <p>The what-if analysis forecast setup with the target date.</p>
   */
  WhatIfPointScenario?: WhatIfPointScenario;

  /**
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
   * <p>The forecast properties setup of a forecast in the line
   *             chart.</p>
   */
  ForecastProperties?: TimeBasedForecastProperties;

  /**
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
   * <p>The options that determine the presentation of the line series axis.</p>
   */
  AxisOptions?: AxisDisplayOptions;

  /**
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
   * <p>Line styles options for a line series in <code>LineChartVisual</code>.</p>
   */
  LineStyleSettings?: LineChartLineStyleSettings;

  /**
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
   * <p>The field ID of the field that you are setting the axis binding to.</p>
   */
  FieldId: string | undefined;

  /**
   * <p>The field value of the field that you are setting the axis binding to.</p>
   */
  FieldValue?: string;

  /**
   * <p>The axis that you are binding the field to.</p>
   */
  AxisBinding: AxisBinding | string | undefined;

  /**
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
   * <p>The field ID of the field for which you are setting the axis binding.</p>
   */
  FieldId: string | undefined;

  /**
   * <p>The axis that you are binding the field to.</p>
   */
  AxisBinding: AxisBinding | string | undefined;

  /**
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
   * <p>The field series item configuration of a line chart.</p>
   */
  FieldSeriesItem?: FieldSeriesItem;

  /**
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
   * <p>The sort configuration of the category fields.</p>
   */
  CategorySort?: FieldSortOptions[];

  /**
   * <p>The limit on the number of categories that are displayed in a line chart.</p>
   */
  CategoryItemsLimitConfiguration?: ItemsLimitConfiguration;

  /**
   * <p>The limit on the number of lines that are displayed in a line chart.</p>
   */
  ColorItemsLimitConfiguration?: ItemsLimitConfiguration;

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
   * <p>The field well configuration of a line chart.</p>
   */
  FieldWells?: LineChartFieldWells;

  /**
   * <p>The sort configuration of a line chart.</p>
   */
  SortConfiguration?: LineChartSortConfiguration;

  /**
   * <p>The forecast configuration of a line chart.</p>
   */
  ForecastConfigurations?: ForecastConfiguration[];

  /**
   * <p>Determines the type of the line chart.</p>
   */
  Type?: LineChartType | string;

  /**
   * <p>The small multiples setup for the visual.</p>
   */
  SmallMultiplesOptions?: SmallMultiplesOptions;

  /**
   * <p>The options that determine the presentation of the x-axis.</p>
   */
  XAxisDisplayOptions?: AxisDisplayOptions;

  /**
   * <p>The options that determine the presentation of the x-axis label.</p>
   */
  XAxisLabelOptions?: ChartAxisLabelOptions;

  /**
   * <p>The series axis configuration of a line chart.</p>
   */
  PrimaryYAxisDisplayOptions?: LineSeriesAxisDisplayOptions;

  /**
   * <p>The options that determine the presentation of the y-axis label.</p>
   */
  PrimaryYAxisLabelOptions?: ChartAxisLabelOptions;

  /**
   * <p>The series axis configuration of a line chart.</p>
   */
  SecondaryYAxisDisplayOptions?: LineSeriesAxisDisplayOptions;

  /**
   * <p>The options that determine the presentation of the secondary y-axis label.</p>
   */
  SecondaryYAxisLabelOptions?: ChartAxisLabelOptions;

  /**
   * <p>The options that determine the default presentation of all line series in <code>LineChartVisual</code>.</p>
   */
  DefaultSeriesSettings?: LineChartDefaultSeriesSettings;

  /**
   * <p>The series item configuration of a line chart.</p>
   */
  Series?: SeriesItem[];

  /**
   * <p>The legend configuration of a line chart.</p>
   */
  Legend?: LegendOptions;

  /**
   * <p>The data label configuration of a line chart.</p>
   */
  DataLabels?: DataLabelOptions;

  /**
   * <p>The reference lines configuration of a line chart.</p>
   */
  ReferenceLines?: ReferenceLine[];

  /**
   * <p>The tooltip configuration of a line chart.</p>
   */
  Tooltip?: TooltipOptions;

  /**
   * <p>The default configuration of a line chart's contribution analysis.</p>
   */
  ContributionAnalysisDefaults?: ContributionAnalysisDefault[];

  /**
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
   * <p>The configuration of a line chart.</p>
   */
  ChartConfiguration?: LineChartConfiguration;

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
   * <p>The category (group/color) field wells of a pie chart.</p>
   */
  Category?: DimensionField[];

  /**
   * <p>The value field wells of a pie chart. Values are aggregated based on categories.</p>
   */
  Values?: MeasureField[];

  /**
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
   * <p>The sort configuration of the category fields.</p>
   */
  CategorySort?: FieldSortOptions[];

  /**
   * <p>The limit on the number of categories that are displayed in a pie chart.</p>
   */
  CategoryItemsLimit?: ItemsLimitConfiguration;

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
 * @public
 * <p>The configuration of a pie chart.</p>
 */
export interface PieChartConfiguration {
  /**
   * <p>The field wells of the visual.</p>
   */
  FieldWells?: PieChartFieldWells;

  /**
   * <p>The sort configuration of a pie chart.</p>
   */
  SortConfiguration?: PieChartSortConfiguration;

  /**
   * <p>The options that determine the shape of the chart. This option determines whether the chart is a pie chart or a donut chart.</p>
   */
  DonutOptions?: DonutOptions;

  /**
   * <p>The small multiples setup for the visual.</p>
   */
  SmallMultiplesOptions?: SmallMultiplesOptions;

  /**
   * <p>The label options of the group/color that is displayed in a pie chart.</p>
   */
  CategoryLabelOptions?: ChartAxisLabelOptions;

  /**
   * <p>The label options for the value that is displayed in a pie chart.</p>
   */
  ValueLabelOptions?: ChartAxisLabelOptions;

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
   * <p>The palette (chart color) display setup of the visual.</p>
   */
  VisualPalette?: VisualPalette;

  /**
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
   * <p>The configuration of a pie chart.</p>
   */
  ChartConfiguration?: PieChartConfiguration;

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
 * @public
 * <p>The data path options for the pivot table field options.</p>
 */
export interface PivotTableDataPathOption {
  /**
   * <p>The list of data path values for the data path options.</p>
   */
  DataPathList: DataPathValue[] | undefined;

  /**
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
   * <p>The field ID of the pivot table field.</p>
   */
  FieldId: string | undefined;

  /**
   * <p>The custom label of the pivot table field.</p>
   */
  CustomLabel?: string;

  /**
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
   * <p>The selected field options for the pivot table field options.</p>
   */
  SelectedFieldOptions?: PivotTableFieldOption[];

  /**
   * <p>The data path options for the pivot table field options.</p>
   */
  DataPathOptions?: PivotTableDataPathOption[];
}

/**
 * @public
 * <p>The aggregated field well for the pivot table.</p>
 */
export interface PivotTableAggregatedFieldWells {
  /**
   * <p>The rows field well for a pivot table. Values are grouped by rows fields.</p>
   */
  Rows?: DimensionField[];

  /**
   * <p>The columns field well for a pivot table. Values are grouped by columns fields.</p>
   */
  Columns?: DimensionField[];

  /**
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
   * <p>The visibility of the printing table overflow across pages.</p>
   */
  VerticalOverflowVisibility?: Visibility | string;

  /**
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
   * <p>Determines the sort direction.</p>
   */
  Direction: SortDirection | string | undefined;

  /**
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
   * <p>The field sort (field id, direction) for the pivot table sort by options.</p>
   */
  Field?: FieldSort;

  /**
   * <p>The column sort (field id, direction) for the pivot table sort by options.</p>
   */
  Column?: ColumnSort;

  /**
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
   * <p>The field ID for the field sort options.</p>
   */
  FieldId: string | undefined;

  /**
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
   * <p>The color of a table border.</p>
   */
  Color?: string;

  /**
   * <p>The thickness of a table border.</p>
   */
  Thickness?: number;

  /**
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
   * <p>The table border options of the inner vertical border.</p>
   */
  InnerVertical?: TableBorderOptions;

  /**
   * <p>The table border options of the inner horizontal border.</p>
   */
  InnerHorizontal?: TableBorderOptions;

  /**
   * <p>The table border options of the left border.</p>
   */
  Left?: TableBorderOptions;

  /**
   * <p>The table border options of the right border.</p>
   */
  Right?: TableBorderOptions;

  /**
   * <p>The table border options of the top border.</p>
   */
  Top?: TableBorderOptions;

  /**
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
   * <p>Determines the options for uniform border.</p>
   */
  UniformBorder?: TableBorderOptions;

  /**
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
   * <p>The visibility of the table cells.</p>
   */
  Visibility?: Visibility | string;

  /**
   * <p>The font configuration of the table cells.</p>
   */
  FontConfiguration?: FontConfiguration;

  /**
   * <p>The text wrap (none, wrap) for the table cells.</p>
   */
  TextWrap?: TextWrap | string;

  /**
   * <p>The horizontal text alignment (left, center, right, auto) for the table cells.</p>
   */
  HorizontalTextAlignment?: HorizontalTextAlignment | string;

  /**
   * <p>The vertical text alignment (top, middle, bottom) for the table cells.</p>
   */
  VerticalTextAlignment?: VerticalTextAlignment | string;

  /**
   * <p>The background color for the table cells.</p>
   */
  BackgroundColor?: string;

  /**
   * <p>The height color for the table cells.</p>
   */
  Height?: number;

  /**
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
   * <p>Determines the widget status.</p>
   */
  Status?: WidgetStatus | string;

  /**
   * <p>Determines the list of row alternate colors.</p>
   */
  RowAlternateColors?: string[];
}

/**
 * @public
 * <p>The table options for a pivot table visual.</p>
 */
export interface PivotTableOptions {
  /**
   * <p>The metric placement (row, column) options.</p>
   */
  MetricPlacement?: PivotTableMetricPlacement | string;

  /**
   * <p>The visibility of the single metric options.</p>
   */
  SingleMetricVisibility?: Visibility | string;

  /**
   * <p>The visibility of the column names.</p>
   */
  ColumnNamesVisibility?: Visibility | string;

  /**
   * <p>Determines the visibility of the pivot table.</p>
   */
  ToggleButtonsVisibility?: Visibility | string;

  /**
   * <p>The table cell style of the column header.</p>
   */
  ColumnHeaderStyle?: TableCellStyle;

  /**
   * <p>The table cell style of the row headers.</p>
   */
  RowHeaderStyle?: TableCellStyle;

  /**
   * <p>The table cell style of cells.</p>
   */
  CellStyle?: TableCellStyle;

  /**
   * <p>The table cell style of row field names.</p>
   */
  RowFieldNamesStyle?: TableCellStyle;

  /**
   * <p>The row alternate color options (widget status, row alternate colors).</p>
   */
  RowAlternateColorOptions?: RowAlternateColorOptions;

  /**
   * <p>The visibility setting of a pivot table's collapsed row dimension fields. If the value of this structure is <code>HIDDEN</code>, all collapsed columns in a pivot table are automatically hidden. The default value is <code>VISIBLE</code>.</p>
   */
  CollapsedRowDimensionsVisibility?: Visibility | string;
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
   * <p>The field ID of the subtotal options.</p>
   */
  FieldId?: string;
}

/**
 * @public
 * <p>The subtotal options.</p>
 */
export interface SubtotalOptions {
  /**
   * <p>The visibility configuration for the subtotal cells.</p>
   */
  TotalsVisibility?: Visibility | string;

  /**
   * <p>The custom label string for the subtotal cells.</p>
   */
  CustomLabel?: string;

  /**
   * <p>The field level (all, custom, last) for the subtotal cells.</p>
   */
  FieldLevel?: PivotTableSubtotalLevel | string;

  /**
   * <p>The optional configuration of subtotal cells.</p>
   */
  FieldLevelOptions?: PivotTableFieldSubtotalOptions[];

  /**
   * <p>The cell styling options for the subtotal cells.</p>
   */
  TotalCellStyle?: TableCellStyle;

  /**
   * <p>The cell styling options for the subtotals of value cells.</p>
   */
  ValueCellStyle?: TableCellStyle;

  /**
   * <p>The cell styling options for the subtotals of header cells.</p>
   */
  MetricHeaderCellStyle?: TableCellStyle;
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
   * <p>The visibility configuration for the total cells.</p>
   */
  TotalsVisibility?: Visibility | string;

  /**
   * <p>The placement (start, end) for the total cells.</p>
   */
  Placement?: TableTotalsPlacement | string;

  /**
   * <p>The scroll status (pinned, scrolled) for the total cells.</p>
   */
  ScrollStatus?: TableTotalsScrollStatus | string;

  /**
   * <p>The custom label string for the total cells.</p>
   */
  CustomLabel?: string;

  /**
   * <p>The cell styling options for the total cells.</p>
   */
  TotalCellStyle?: TableCellStyle;

  /**
   * <p>The cell styling options for the totals of value cells.</p>
   */
  ValueCellStyle?: TableCellStyle;

  /**
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
   * <p>The row subtotal options.</p>
   */
  RowSubtotalOptions?: SubtotalOptions;

  /**
   * <p>The column subtotal options.</p>
   */
  ColumnSubtotalOptions?: SubtotalOptions;

  /**
   * <p>The row total options.</p>
   */
  RowTotalOptions?: PivotTotalOptions;

  /**
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
   * <p>The field wells of the visual.</p>
   */
  FieldWells?: PivotTableFieldWells;

  /**
   * <p>The sort configuration for a <code>PivotTableVisual</code>.</p>
   */
  SortConfiguration?: PivotTableSortConfiguration;

  /**
   * <p>The table options for a pivot table visual.</p>
   */
  TableOptions?: PivotTableOptions;

  /**
   * <p>The total options for a pivot table visual.</p>
   */
  TotalOptions?: PivotTableTotalOptions;

  /**
   * <p>The field options for a pivot table visual.</p>
   */
  FieldOptions?: PivotTableFieldOptions;

  /**
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
   * <p>The conditional formatting for the text background color.</p>
   */
  BackgroundColor?: ConditionalFormattingColor;

  /**
   * <p>The conditional formatting for the text color.</p>
   */
  TextColor?: ConditionalFormattingColor;

  /**
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
   * <p>The field ID of the cell for conditional formatting.</p>
   */
  FieldId: string | undefined;

  /**
   * <p>The text format of the cell for conditional formatting.</p>
   */
  TextFormat?: TextConditionalFormat;

  /**
   * <p>The scope of the cell for conditional formatting.</p>
   */
  Scope?: PivotTableConditionalFormattingScope;
}

/**
 * @public
 * <p>Conditional formatting options for a <code>PivotTableVisual</code>.</p>
 */
export interface PivotTableConditionalFormattingOption {
  /**
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
  ChartConfiguration?: PivotTableConfiguration;

  /**
   * <p>The conditional formatting for a <code>PivotTableVisual</code>.</p>
   */
  ConditionalFormatting?: PivotTableConditionalFormatting;

  /**
   * <p>The list of custom actions that are configured for a visual.</p>
   */
  Actions?: VisualCustomAction[];
}

/**
 * @public
 * <p>The configured style settings of a radar chart.</p>
 */
export interface RadarChartAreaStyleSettings {
  /**
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
   * <p>The aggregated field well categories of a radar chart.</p>
   */
  Category?: DimensionField[];

  /**
   * <p>The color that are assigned to the aggregated field wells of a radar chart.</p>
   */
  Color?: DimensionField[];

  /**
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
   * <p>The category sort options of a radar chart.</p>
   */
  CategorySort?: FieldSortOptions[];

  /**
   * <p>The category items limit for a radar chart.</p>
   */
  CategoryItemsLimit?: ItemsLimitConfiguration;

  /**
   * <p>The color sort configuration of a radar chart.</p>
   */
  ColorSort?: FieldSortOptions[];

  /**
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
   * <p>The field well configuration of a <code>RadarChartVisual</code>.</p>
   */
  FieldWells?: RadarChartFieldWells;

  /**
   * <p>The sort configuration of a <code>RadarChartVisual</code>.</p>
   */
  SortConfiguration?: RadarChartSortConfiguration;

  /**
   * <p>The shape of the radar chart.</p>
   */
  Shape?: RadarChartShape | string;

  /**
   * <p>The base sreies settings of a radar chart.</p>
   */
  BaseSeriesSettings?: RadarChartSeriesSettings;

  /**
   * <p>The start angle of a radar chart's axis.</p>
   */
  StartAngle?: number;

  /**
   * <p>The palette (chart color) display setup of the visual.</p>
   */
  VisualPalette?: VisualPalette;

  /**
   * <p>Determines the visibility of the colors of alternatign bands in a radar chart.</p>
   */
  AlternateBandColorsVisibility?: Visibility | string;

  /**
   * <p>The color of the even-numbered alternate bands of a radar chart.</p>
   */
  AlternateBandEvenColor?: string;

  /**
   * <p>The color of the odd-numbered alternate bands of a radar chart.</p>
   */
  AlternateBandOddColor?: string;

  /**
   * <p>The category axis of a radar chart.</p>
   */
  CategoryAxis?: AxisDisplayOptions;

  /**
   * <p>The category label options of a radar chart.</p>
   */
  CategoryLabelOptions?: ChartAxisLabelOptions;

  /**
   * <p>The color axis of a radar chart.</p>
   */
  ColorAxis?: AxisDisplayOptions;

  /**
   * <p>The color label options of a radar chart.</p>
   */
  ColorLabelOptions?: ChartAxisLabelOptions;

  /**
   * <p>The legend display setup of the visual.</p>
   */
  Legend?: LegendOptions;
}

/**
 * @public
 * <p>A radar chart visual.</p>
 */
export interface RadarChartVisual {
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
  ChartConfiguration?: RadarChartConfiguration;

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
 * @public
 * <p>The field well configuration of a sankey diagram.</p>
 */
export interface SankeyDiagramAggregatedFieldWells {
  /**
   * <p>The source field wells of a sankey diagram.</p>
   */
  Source?: DimensionField[];

  /**
   * <p>The destination field wells of a sankey diagram.</p>
   */
  Destination?: DimensionField[];

  /**
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
   * <p>The sort configuration of the weight fields.</p>
   */
  WeightSort?: FieldSortOptions[];

  /**
   * <p>The limit on the number of source nodes that are displayed in a sankey diagram.</p>
   */
  SourceItemsLimit?: ItemsLimitConfiguration;

  /**
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
   * <p>The field well configuration of a sankey diagram.</p>
   */
  FieldWells?: SankeyDiagramFieldWells;

  /**
   * <p>The sort configuration of a sankey diagram.</p>
   */
  SortConfiguration?: SankeyDiagramSortConfiguration;

  /**
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
   * <p>The configuration of a sankey diagram.</p>
   */
  ChartConfiguration?: SankeyDiagramChartConfiguration;

  /**
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
   * <p>The x-axis field well of a scatter plot.</p>
   *          <p>The x-axis is aggregated by category.</p>
   */
  XAxis?: MeasureField[];

  /**
   * <p>The y-axis field well of a scatter plot.</p>
   *          <p>The y-axis is aggregated by category.</p>
   */
  YAxis?: MeasureField[];

  /**
   * <p>The category field well of a scatter plot.</p>
   */
  Category?: DimensionField[];

  /**
   * <p>The size field well of a scatter plot.</p>
   */
  Size?: MeasureField[];

  /**
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
   * <p>The x-axis field well of a scatter plot.</p>
   *          <p>The x-axis is a dimension field and cannot be aggregated.</p>
   */
  XAxis?: DimensionField[];

  /**
   * <p>The y-axis field well of a scatter plot.</p>
   *          <p>The y-axis is a dimension field and cannot be aggregated.</p>
   */
  YAxis?: DimensionField[];

  /**
   * <p>The size field well of a scatter plot.</p>
   */
  Size?: MeasureField[];

  /**
   * <p>The category field well of a scatter plot.</p>
   */
  Category?: DimensionField[];

  /**
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
   * <p>The aggregated field wells of a scatter plot. The x and y-axes of scatter plots with aggregated field wells are aggregated by category, label, or both.</p>
   */
  ScatterPlotCategoricallyAggregatedFieldWells?: ScatterPlotCategoricallyAggregatedFieldWells;

  /**
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
   * <p>The field wells of the visual.</p>
   */
  FieldWells?: ScatterPlotFieldWells;

  /**
   * <p>The label options (label text, label visibility, and sort icon visibility) of the scatter plot's x-axis.</p>
   */
  XAxisLabelOptions?: ChartAxisLabelOptions;

  /**
   * <p>The label display options (grid line, range, scale, and axis step) of the scatter plot's x-axis.</p>
   */
  XAxisDisplayOptions?: AxisDisplayOptions;

  /**
   * <p>The label options (label text, label visibility, and sort icon visibility) of the scatter plot's y-axis.</p>
   */
  YAxisLabelOptions?: ChartAxisLabelOptions;

  /**
   * <p>The label display options (grid line, range, scale, and axis step) of the scatter plot's y-axis.</p>
   */
  YAxisDisplayOptions?: AxisDisplayOptions;

  /**
   * <p>The legend display setup of the visual.</p>
   */
  Legend?: LegendOptions;

  /**
   * <p>The options that determine if visual data labels are displayed.</p>
   */
  DataLabels?: DataLabelOptions;

  /**
   * <p>The legend display setup of the visual.</p>
   */
  Tooltip?: TooltipOptions;

  /**
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
  ChartConfiguration?: ScatterPlotConfiguration;

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
   * <p>The string value of the custom text content for the table URL link content.</p>
   */
  Value?: string;

  /**
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
   * <p>The custom text content (value, font configuration) for the table link content configuration.</p>
   */
  CustomTextContent?: TableFieldCustomTextContent;

  /**
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
   * <p>The URL target (new tab, new window, same tab) for the table link configuration.</p>
   */
  Target: URLTargetConfiguration | string | undefined;

  /**
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
   * <p>The link configuration of a table field URL.</p>
   */
  LinkConfiguration?: TableFieldLinkConfiguration;

  /**
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
   * <p>The field ID for a table field.</p>
   */
  FieldId: string | undefined;

  /**
   * <p>The width for a table field.</p>
   */
  Width?: string;

  /**
   * <p>The custom label for a table field.</p>
   */
  CustomLabel?: string;

  /**
   * <p>The visibility of a table field.</p>
   */
  Visibility?: Visibility | string;

  /**
   * <p>The URL configuration for a table field.</p>
   */
  URLStyling?: TableFieldURLConfiguration;
}

/**
 * @public
 * <p>The field options for a table visual.</p>
 */
export interface TableFieldOptions {
  /**
   * <p>The selected field options for the table field options.</p>
   */
  SelectedFieldOptions?: TableFieldOption[];

  /**
   * <p>The order of field IDs of the field options for a table visual.</p>
   */
  Order?: string[];
}

/**
 * @public
 * <p>The aggregated field well for the table.</p>
 */
export interface TableAggregatedFieldWells {
  /**
   * <p>The group by field well for a pivot table. Values are grouped by group by fields.</p>
   */
  GroupBy?: DimensionField[];

  /**
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
   * <p>The custom field ID.</p>
   */
  FieldId: string | undefined;

  /**
   * <p>The column that is used in the <code>UnaggregatedField</code>.</p>
   */
  Column: ColumnIdentifier | undefined;

  /**
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
   * <p>The aggregated field well for the table.</p>
   */
  TableAggregatedFieldWells?: TableAggregatedFieldWells;

  /**
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
   * <p>The visibility of printing table overflow across pages.</p>
   */
  VerticalOverflowVisibility?: Visibility | string;

  /**
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
   * <p>The field sort options for rows in the table.</p>
   */
  RowSort?: FieldSortOptions[];

  /**
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
   * <p>The field ID for the data bars options.</p>
   */
  FieldId: string | undefined;

  /**
   * <p>The color of the positive data bar.</p>
   */
  PositiveColor?: string;

  /**
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
   * <p>The orientation (vertical, horizontal) for a table.</p>
   */
  Orientation?: TableOrientation | string;

  /**
   * <p>The table cell style of a table header.</p>
   */
  HeaderStyle?: TableCellStyle;

  /**
   * <p>The table cell style of table cells.</p>
   */
  CellStyle?: TableCellStyle;

  /**
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
   * <p>The visibility configuration for the total cells.</p>
   */
  TotalsVisibility?: Visibility | string;

  /**
   * <p>The placement (start, end) for the total cells.</p>
   */
  Placement?: TableTotalsPlacement | string;

  /**
   * <p>The scroll status (pinned, scrolled) for the total cells.</p>
   */
  ScrollStatus?: TableTotalsScrollStatus | string;

  /**
   * <p>The custom label string for the total cells.</p>
   */
  CustomLabel?: string;

  /**
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
   * <p>The field wells of the visual.</p>
   */
  FieldWells?: TableFieldWells;

  /**
   * <p>The sort configuration for a <code>TableVisual</code>.</p>
   */
  SortConfiguration?: TableSortConfiguration;

  /**
   * <p>The table options for a table visual.</p>
   */
  TableOptions?: TableOptions;

  /**
   * <p>The total options for a table visual.</p>
   */
  TotalOptions?: TotalOptions;

  /**
   * <p>The field options for a table visual.</p>
   */
  FieldOptions?: TableFieldOptions;

  /**
   * <p>The paginated report options for a table visual.</p>
   */
  PaginatedReportOptions?: TablePaginatedReportOptions;

  /**
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
   * <p>The field ID of the cell for conditional formatting.</p>
   */
  FieldId: string | undefined;

  /**
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
   * <p>The conditional formatting color (solid, gradient) of the background for a table row.</p>
   */
  BackgroundColor?: ConditionalFormattingColor;

  /**
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
   * <p>The cell conditional formatting option for a table.</p>
   */
  Cell?: TableCellConditionalFormatting;

  /**
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
  ChartConfiguration?: TableConfiguration;

  /**
   * <p>The conditional formatting for a <code>PivotTableVisual</code>.</p>
   */
  ConditionalFormatting?: TableConditionalFormatting;

  /**
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
   * <p>The group by field well of a tree map. Values are grouped based on group by fields.</p>
   */
  Groups?: DimensionField[];

  /**
   * <p>The size field well of a tree map. Values are aggregated based on group by fields.</p>
   */
  Sizes?: MeasureField[];

  /**
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
   * <p>The sort configuration of group by fields.</p>
   */
  TreeMapSort?: FieldSortOptions[];

  /**
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
   * <p>The field wells of the visual.</p>
   */
  FieldWells?: TreeMapFieldWells;

  /**
   * <p>The sort configuration of a tree map.</p>
   */
  SortConfiguration?: TreeMapSortConfiguration;

  /**
   * <p>The label options (label text, label visibility) of the groups that are displayed in a tree map.</p>
   */
  GroupLabelOptions?: ChartAxisLabelOptions;

  /**
   * <p>The label options (label text, label visibility) of the sizes that are displayed in a tree map.</p>
   */
  SizeLabelOptions?: ChartAxisLabelOptions;

  /**
   * <p>The label options (label text, label visibility) for the colors displayed in a tree map.</p>
   */
  ColorLabelOptions?: ChartAxisLabelOptions;

  /**
   * <p>The color options (gradient color, point of divergence) of a tree map.</p>
   */
  ColorScale?: ColorScale;

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
}

/**
 * @public
 * <p>A tree map.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/tree-map.html">Using tree maps</a> in the <i>Amazon QuickSight User Guide</i>.</p>
 */
export interface TreeMapVisual {
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
  ChartConfiguration?: TreeMapConfiguration;

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
 * @public
 * <p>The field well configuration of a waterfall visual.</p>
 */
export interface WaterfallChartAggregatedFieldWells {
  /**
   * <p>The category field wells of a waterfall visual.</p>
   */
  Categories?: DimensionField[];

  /**
   * <p>The value field wells of a waterfall visual.</p>
   */
  Values?: MeasureField[];

  /**
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
   * <p>The sort configuration of the category fields.</p>
   */
  CategorySort?: FieldSortOptions[];

  /**
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
   * <p>The field well configuration of a waterfall visual.</p>
   */
  FieldWells?: WaterfallChartFieldWells;

  /**
   * <p>The sort configuration of a waterfall visual.</p>
   */
  SortConfiguration?: WaterfallChartSortConfiguration;

  /**
   * <p>The options that determine the presentation of a waterfall visual.</p>
   */
  WaterfallChartOptions?: WaterfallChartOptions;

  /**
   * <p>The options that determine the presentation of the category axis label.</p>
   */
  CategoryAxisLabelOptions?: ChartAxisLabelOptions;

  /**
   * <p>The options that determine the presentation of the category axis.</p>
   */
  CategoryAxisDisplayOptions?: AxisDisplayOptions;

  /**
   * <p>The options that determine the presentation of the y-axis label.</p>
   */
  PrimaryYAxisLabelOptions?: ChartAxisLabelOptions;

  /**
   * <p>The options that determine the presentation of the y-axis.</p>
   */
  PrimaryYAxisDisplayOptions?: AxisDisplayOptions;

  /**
   * <p>The legend configuration of a waterfall visual.</p>
   */
  Legend?: LegendOptions;

  /**
   * <p>The data label configuration of a waterfall visual.</p>
   */
  DataLabels?: DataLabelOptions;

  /**
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
   * <p>The configuration for a waterfall visual.</p>
   */
  ChartConfiguration?: WaterfallChartConfiguration;

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
 * @public
 * <p>The aggregated field wells of a word cloud.</p>
 */
export interface WordCloudAggregatedFieldWells {
  /**
   * <p>The group by field well of a word cloud. Values are grouped by group by fields.</p>
   */
  GroupBy?: DimensionField[];

  /**
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
   * <p>The limit on the number of groups that are displayed in a word cloud.</p>
   */
  CategoryItemsLimit?: ItemsLimitConfiguration;

  /**
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
   * <p>The word orientation options (horizontal, horizontal_and_vertical) for the words in a word cloud.</p>
   */
  WordOrientation?: WordCloudWordOrientation | string;

  /**
   * <p>The word scaling options (emphasize, normal) for the words in a word cloud.</p>
   */
  WordScaling?: WordCloudWordScaling | string;

  /**
   * <p>The cloud layout options (fluid, normal) of a word cloud.</p>
   */
  CloudLayout?: WordCloudCloudLayout | string;

  /**
   * <p>The word casing options (lower_case, existing_case) for the words in a word cloud.</p>
   */
  WordCasing?: WordCloudWordCasing | string;

  /**
   * <p>The word padding options (none, small, medium, large) for the words in a word cloud.</p>
   */
  WordPadding?: WordCloudWordPadding | string;

  /**
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
   * <p>The field wells of the visual.</p>
   */
  FieldWells?: WordCloudFieldWells;

  /**
   * <p>The sort configuration of a word cloud visual.</p>
   */
  SortConfiguration?: WordCloudSortConfiguration;

  /**
   * <p>The label options (label text, label visibility, and sort icon visibility) for the word cloud category.</p>
   */
  CategoryLabelOptions?: ChartAxisLabelOptions;

  /**
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
  ChartConfiguration?: WordCloudChartConfiguration;

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
 * @public
 * <p>A visual displayed on a sheet in an analysis, dashboard, or template.</p>
 *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
 */
export interface Visual {
  /**
   * <p>A table visual.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/tabular.html">Using tables as visuals</a> in the <i>Amazon QuickSight User Guide</i>.</p>
   */
  TableVisual?: TableVisual;

  /**
   * <p>A pivot table.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/pivot-table.html">Using pivot tables</a> in the <i>Amazon QuickSight User Guide</i>.</p>
   */
  PivotTableVisual?: PivotTableVisual;

  /**
   * <p>A bar chart.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/bar-charts.html">Using bar charts</a> in the <i>Amazon QuickSight User Guide</i>.</p>
   */
  BarChartVisual?: BarChartVisual;

  /**
   * <p>A key performance indicator (KPI).</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/kpi.html">Using KPIs</a> in the <i>Amazon QuickSight User Guide</i>.</p>
   */
  KPIVisual?: KPIVisual;

  /**
   * <p>A pie or donut chart.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/pie-chart.html">Using pie charts</a> in the <i>Amazon QuickSight User Guide</i>.</p>
   */
  PieChartVisual?: PieChartVisual;

  /**
   * <p>A gauge chart.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/gauge-chart.html">Using gauge charts</a> in the <i>Amazon QuickSight User Guide</i>.</p>
   */
  GaugeChartVisual?: GaugeChartVisual;

  /**
   * <p>A line chart.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/line-charts.html">Using line charts</a> in the <i>Amazon QuickSight User Guide</i>.</p>
   */
  LineChartVisual?: LineChartVisual;

  /**
   * <p>A heat map.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/heat-map.html">Using heat maps</a> in the <i>Amazon QuickSight User Guide</i>.</p>
   */
  HeatMapVisual?: HeatMapVisual;

  /**
   * <p>A tree map.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/tree-map.html">Using tree maps</a> in the <i>Amazon QuickSight User Guide</i>.</p>
   */
  TreeMapVisual?: TreeMapVisual;

  /**
   * <p>A geospatial map or a points on map visual.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/point-maps.html">Creating point maps</a> in the <i>Amazon QuickSight User Guide</i>.</p>
   */
  GeospatialMapVisual?: GeospatialMapVisual;

  /**
   * <p>A filled map.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/filled-maps.html">Creating filled maps</a> in the <i>Amazon QuickSight User Guide</i>.</p>
   */
  FilledMapVisual?: FilledMapVisual;

  /**
   * <p>A funnel chart.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/funnel-visual-content.html">Using funnel charts</a> in the <i>Amazon QuickSight User Guide</i>.</p>
   */
  FunnelChartVisual?: FunnelChartVisual;

  /**
   * <p>A scatter plot.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/scatter-plot.html">Using scatter plots</a> in the <i>Amazon QuickSight User Guide</i>.</p>
   */
  ScatterPlotVisual?: ScatterPlotVisual;

  /**
   * <p>A combo chart.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/combo-charts.html">Using combo charts</a> in the <i>Amazon QuickSight User Guide</i>.</p>
   */
  ComboChartVisual?: ComboChartVisual;

  /**
   * <p>A box plot.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/box-plots.html">Using box plots</a> in the <i>Amazon QuickSight User Guide</i>.</p>
   */
  BoxPlotVisual?: BoxPlotVisual;

  /**
   * <p>A waterfall chart.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/waterfall-chart.html">Using waterfall charts</a> in the <i>Amazon QuickSight User Guide</i>.</p>
   */
  WaterfallVisual?: WaterfallVisual;

  /**
   * <p>A histogram.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/histogram-charts.html">Using histograms</a> in the <i>Amazon QuickSight User Guide</i>.</p>
   */
  HistogramVisual?: HistogramVisual;

  /**
   * <p>A word cloud.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/word-cloud.html">Using word clouds</a> in the <i>Amazon QuickSight User Guide</i>.</p>
   */
  WordCloudVisual?: WordCloudVisual;

  /**
   * <p>An insight visual.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/computational-insights.html">Working with insights</a> in the <i>Amazon QuickSight User Guide</i>.</p>
   */
  InsightVisual?: InsightVisual;

  /**
   * <p>A sankey diagram.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/sankey-diagram.html">Using Sankey diagrams</a> in the <i>Amazon QuickSight User Guide</i>.</p>
   */
  SankeyDiagramVisual?: SankeyDiagramVisual;

  /**
   * <p>A visual that contains custom content.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/custom-visual-content.html">Using custom visual content</a> in the <i>Amazon QuickSight User Guide</i>.</p>
   */
  CustomContentVisual?: CustomContentVisual;

  /**
   * <p>An empty visual.</p>
   */
  EmptyVisual?: EmptyVisual;

  /**
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
   * <p>The unique identifier of a sheet.</p>
   */
  SheetId: string | undefined;

  /**
   * <p>The title of the sheet.</p>
   */
  Title?: string;

  /**
   * <p>A description of the sheet.</p>
   */
  Description?: string;

  /**
   * <p>The name of the sheet. This name is displayed on the sheet's tab in the Amazon QuickSight
   *             console.</p>
   */
  Name?: string;

  /**
   * <p>The list of parameter controls that are on a sheet.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/parameters-controls.html">Using a Control with a Parameter in Amazon QuickSight</a> in the <i>Amazon QuickSight User Guide</i>.</p>
   */
  ParameterControls?: ParameterControl[];

  /**
   * <p>The list of filter controls that are on a sheet.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/filter-controls.html">Adding filter controls to analysis sheets</a> in the <i>Amazon QuickSight User Guide</i>.</p>
   */
  FilterControls?: FilterControl[];

  /**
   * <p>A list of the visuals that are on a sheet. Visual placement is determined by the layout of the sheet.</p>
   */
  Visuals?: Visual[];

  /**
   * <p>The text boxes that are on a sheet.</p>
   */
  TextBoxes?: SheetTextBox[];

  /**
   * <p>Layouts define how the components of a sheet are arranged.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/types-of-layout.html">Types of layout</a> in the <i>Amazon QuickSight User Guide</i>.</p>
   */
  Layouts?: Layout[];

  /**
   * <p>The control layouts of the sheet.</p>
   */
  SheetControlLayouts?: SheetControlLayout[];

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
   */
  ContentType?: SheetContentType | string;
}

/**
 * @public
 * <p>The definition of an analysis.</p>
 */
export interface AnalysisDefinition {
  /**
   * <p>An array of dataset identifier declarations. This mapping allows the usage of dataset identifiers instead
   *             of dataset ARNs throughout analysis sub-structures.</p>
   */
  DataSetIdentifierDeclarations: DataSetIdentifierDeclaration[] | undefined;

  /**
   * <p>An array of sheet definitions for an analysis. Each <code>SheetDefinition</code> provides detailed information about
   *             a sheet within this analysis.</p>
   */
  Sheets?: SheetDefinition[];

  /**
   * <p>An array of calculated field definitions for the analysis.</p>
   */
  CalculatedFields?: CalculatedField[];

  /**
   * <p>An array of parameter declarations for an analysis.</p>
   *          <p>Parameters are named variables that can transfer a value for use by an action or an object.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/parameters-in-quicksight.html">Parameters in Amazon QuickSight</a> in the <i>Amazon QuickSight User Guide</i>.</p>
   */
  ParameterDeclarations?: ParameterDeclaration[];

  /**
   * <p>Filter definitions for an analysis.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/adding-a-filter.html">Filtering Data in Amazon QuickSight</a> in the <i>Amazon QuickSight User Guide</i>.</p>
   */
  FilterGroups?: FilterGroup[];

  /**
   * <p>
   *             An array of analysis-level column configurations. Column configurations can be used to set default
   *             formatting for a column to be used throughout an analysis.
   *         </p>
   */
  ColumnConfigurations?: ColumnConfiguration[];

  /**
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
   * <p>The comparison operator that you want to use as a filter, for example  <code>"Operator": "StringEquals"</code>. Valid values are  <code>"StringEquals"</code>  and  <code>"StringLike"</code>.</p>
   *          <p>If you set the operator value to <code>"StringEquals"</code>, you need to provide an ownership related filter in the <code>"NAME"</code> field and the arn of the user or group whose folders you want to search in the <code>"Value"</code> field. For example,  <code>"Name":"DIRECT_QUICKSIGHT_OWNER", "Operator": "StringEquals", "Value": "arn:aws:quicksight:us-east-1:1:user/default/UserName1"</code>.</p>
   *          <p>If you set the value to <code>"StringLike"</code>, you need to provide the name of the folders you are searching for. For example, <code>"Name":"ANALYSIS_NAME", "Operator": "StringLike", "Value": "Test"</code>. The <code>"StringLike"</code> operator only supports the <code>NAME</code> value <code>ANALYSIS_NAME</code>.</p>
   */
  Operator?: FilterOperator | string;

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
   */
  Name?: AnalysisFilterAttribute | string;

  /**
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
   * <p>Dataset placeholder.</p>
   */
  DataSetPlaceholder: string | undefined;

  /**
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
   * <p>The dataset references of the source template of an analysis.</p>
   */
  DataSetReferences: DataSetReference[] | undefined;

  /**
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
   * <p>The Amazon Resource Name (ARN) for the analysis.</p>
   */
  Arn?: string;

  /**
   * <p>The ID of the analysis. This ID displays in the URL.</p>
   */
  AnalysisId?: string;

  /**
   * <p>The name of the analysis. This name is displayed in the Amazon QuickSight console.
   *             </p>
   */
  Name?: string;

  /**
   * <p>The last known status for the analysis.</p>
   */
  Status?: ResourceStatus | string;

  /**
   * <p>The time that the analysis was created.</p>
   */
  CreatedTime?: Date;

  /**
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
   * <p>The ID of the dashboard that has the visual that you want to embed. The <code>DashboardId</code> can be found in the <code>IDs for developers</code> section of the <code>Embed visual</code> pane of the visual's on-visual menu of the Amazon QuickSight console. You can also get the <code>DashboardId</code> with a <code>ListDashboards</code> API operation.</p>
   */
  DashboardId: string | undefined;

  /**
   * <p>The ID of the sheet that the has visual that you want to embed. The <code>SheetId</code> can be found in the <code>IDs for developers</code> section of the <code>Embed visual</code> pane of the visual's on-visual menu of the Amazon QuickSight console.</p>
   */
  SheetId: string | undefined;

  /**
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
   * <p>The type of embedding experience. In this case, Amazon QuickSight dashboards.</p>
   */
  Dashboard?: AnonymousUserDashboardEmbeddingConfiguration;

  /**
   * <p>The type of embedding experience. In this case, Amazon QuickSight visuals.</p>
   */
  DashboardVisual?: AnonymousUserDashboardVisualEmbeddingConfiguration;

  /**
   * <p>The Q search bar that you want to use for anonymous user embedding.</p>
   */
  QSearchBar?: AnonymousUserQSearchBarEmbeddingConfiguration;
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
 * <p>Parameters for Amazon Athena.</p>
 */
export interface AthenaParameters {
  /**
   * <p>The workgroup that Amazon Athena uses.</p>
   */
  WorkGroup?: string;

  /**
   * <p>Use the <code>RoleArn</code> structure to override an account-wide role for a specific Athena data source. For example, say an account administrator has turned off all Athena access with an account-wide role. The administrator can then use <code>RoleArn</code> to bypass the account-wide role and allow Athena access for the single Athena data source that is specified in the structure, even if the account-wide role forbidding Athena access is still active.</p>
   */
  RoleArn?: string;
}

/**
 * @public
 * <p>Parameters for Amazon Aurora.</p>
 */
export interface AuroraParameters {
  /**
   * <p>Host.</p>
   */
  Host: string | undefined;

  /**
   * <p>Port.</p>
   */
  Port: number | undefined;

  /**
   * <p>Database.</p>
   */
  Database: string | undefined;
}

/**
 * @public
 * <p>Parameters for Amazon Aurora PostgreSQL-Compatible Edition.</p>
 */
export interface AuroraPostgreSqlParameters {
  /**
   * <p>The Amazon Aurora PostgreSQL-Compatible host to connect to.</p>
   */
  Host: string | undefined;

  /**
   * <p>The port that Amazon Aurora PostgreSQL is listening on.</p>
   */
  Port: number | undefined;

  /**
   * <p>The Amazon Aurora PostgreSQL database to connect to.</p>
   */
  Database: string | undefined;
}

/**
 * @public
 * @enum
 */
export const AuthenticationMethodOption = {
  ACTIVE_DIRECTORY: "ACTIVE_DIRECTORY",
  IAM_AND_QUICKSIGHT: "IAM_AND_QUICKSIGHT",
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
 * <p>The parameters for IoT Analytics.</p>
 */
export interface AwsIotAnalyticsParameters {
  /**
   * <p>Dataset name.</p>
   */
  DataSetName: string | undefined;
}

/**
 * @public
 * <p>The bookmarks configuration of an embedded dashboard.</p>
 */
export interface BookmarksConfigurations {
  /**
   * <p>A Boolean value that determines whether a user
   *             can bookmark an embedded dashboard.</p>
   */
  Enabled: boolean | undefined;
}

/**
 * @public
 * <p>The display options for tile borders for visuals.</p>
 */
export interface BorderStyle {
  /**
   * <p>The option to enable display of borders for visuals.</p>
   */
  Show?: boolean;
}

/**
 * @public
 * <p>A calculated column for a dataset.</p>
 */
export interface CalculatedColumn {
  /**
   * <p>Column name.</p>
   */
  ColumnName: string | undefined;

  /**
   * <p>A unique ID to identify a calculated column. During a dataset update, if the column ID
   *             of a calculated column matches that of an existing calculated column, Amazon QuickSight
   *             preserves the existing calculated column.</p>
   */
  ColumnId: string | undefined;

  /**
   * <p>An expression that defines the calculated column.</p>
   */
  Expression: string | undefined;
}

/**
 * @public
 */
export interface CancelIngestionRequest {
  /**
   * <p>The Amazon Web Services account ID.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID of the dataset used in the ingestion.</p>
   */
  DataSetId: string | undefined;

  /**
   * <p>An ID for the ingestion.</p>
   */
  IngestionId: string | undefined;
}

/**
 * @public
 */
export interface CancelIngestionResponse {
  /**
   * <p>The Amazon Resource Name (ARN) for the data ingestion.</p>
   */
  Arn?: string;

  /**
   * <p>An ID for the ingestion.</p>
   */
  IngestionId?: string;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

/**
 * @public
 * <p>An internal failure occurred.</p>
 */
export class InternalFailureException extends __BaseException {
  readonly name: "InternalFailureException" = "InternalFailureException";
  readonly $fault: "server" = "server";
  Message?: string;
  /**
   * <p>The Amazon Web Services request ID for this request.</p>
   */
  RequestId?: string;
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
 * @public
 * <p>One or more parameters has a value that isn't valid.</p>
 */
export class InvalidParameterValueException extends __BaseException {
  readonly name: "InvalidParameterValueException" = "InvalidParameterValueException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * <p>The Amazon Web Services request ID for this request.</p>
   */
  RequestId?: string;
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
 * @public
 * <p>The resource specified already exists. </p>
 */
export class ResourceExistsException extends __BaseException {
  readonly name: "ResourceExistsException" = "ResourceExistsException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * <p>The resource type for this request.</p>
   */
  ResourceType?: ExceptionResourceType | string;

  /**
   * <p>The Amazon Web Services request ID for this request.</p>
   */
  RequestId?: string;
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
 * <p>One or more resources can't be found.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * <p>The resource type for this request.</p>
   */
  ResourceType?: ExceptionResourceType | string;

  /**
   * <p>The Amazon Web Services request ID for this request.</p>
   */
  RequestId?: string;
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
 * @public
 * <p>Access is throttled.</p>
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * <p>The Amazon Web Services request ID for this request.</p>
   */
  RequestId?: string;
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
 * <p>A transform operation that casts a column to a different type.</p>
 */
export interface CastColumnTypeOperation {
  /**
   * <p>Column name.</p>
   */
  ColumnName: string | undefined;

  /**
   * <p>New column data type.</p>
   */
  NewColumnType: ColumnDataType | string | undefined;

  /**
   * <p>When casting a column from string to datetime type, you can supply a string in a
   *             format supported by Amazon QuickSight to denote the source data format.</p>
   */
  Format?: string;
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
 * @public
 * <p>A structure that represents the cell value synonym.</p>
 */
export interface CellValueSynonym {
  /**
   * <p>The cell value.</p>
   */
  CellValue?: string;

  /**
   * <p>Other names or aliases for the cell value.</p>
   */
  Synonyms?: string[];
}

/**
 * @public
 * <p>A structure that represents a collective constant.</p>
 */
export interface CollectiveConstant {
  /**
   * <p>A list of values for the collective constant.</p>
   */
  ValueList?: string[];
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
 * @public
 * <p>Metadata that contains a description for a column.</p>
 */
export interface ColumnDescription {
  /**
   * <p>The text of a description for a column.</p>
   */
  Text?: string;
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
 * @public
 * <p>Geospatial column group that denotes a hierarchy.</p>
 */
export interface GeoSpatialColumnGroup {
  /**
   * <p>A display name for the hierarchy.</p>
   */
  Name: string | undefined;

  /**
   * <p>Country code.</p>
   */
  CountryCode?: GeoSpatialCountryCode | string;

  /**
   * <p>Columns in this hierarchy.</p>
   */
  Columns: string[] | undefined;
}

/**
 * @public
 * <p>Groupings of columns that work together in certain Amazon QuickSight features. This is
 *             a variant type structure. For this structure to be valid, only one of the attributes can
 *             be non-null.</p>
 */
export interface ColumnGroup {
  /**
   * <p>Geospatial column group that denotes a hierarchy.</p>
   */
  GeoSpatialColumnGroup?: GeoSpatialColumnGroup;
}

/**
 * @public
 * <p>A structure describing the name, data type, and geographic role of the columns.</p>
 */
export interface ColumnGroupColumnSchema {
  /**
   * <p>The name of the column group's column schema.</p>
   */
  Name?: string;
}

/**
 * @public
 * <p>The column group schema.</p>
 */
export interface ColumnGroupSchema {
  /**
   * <p>The name of the column group schema.</p>
   */
  Name?: string;

  /**
   * <p>A structure containing the list of schemas for column group columns.</p>
   */
  ColumnGroupColumnSchemaList?: ColumnGroupColumnSchema[];
}

/**
 * @public
 * <p>A rule defined to grant access on one or more restricted columns.
 *             Each dataset can have multiple rules.
 *             To create a restricted column, you add it to one or more rules.
 *             Each rule must contain at least one column and at least one user or group.
 *             To be able to see a restricted column, a user or group needs to be added
 *             to a rule for that column.</p>
 */
export interface ColumnLevelPermissionRule {
  /**
   * <p>An array of Amazon Resource Names (ARNs) for Amazon QuickSight users or groups.</p>
   */
  Principals?: string[];

  /**
   * <p>An array of column names.</p>
   */
  ColumnNames?: string[];
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
 * @public
 * <p>The column schema.</p>
 */
export interface ColumnSchema {
  /**
   * <p>The name of the column schema.</p>
   */
  Name?: string;

  /**
   * <p>The data type of the column schema.</p>
   */
  DataType?: string;

  /**
   * <p>The geographic role of the column schema.</p>
   */
  GeographicRole?: string;
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
 * @public
 * <p>A tag for a column in a
 *             <code>
 *                <a href="https://docs.aws.amazon.com/quicksight/latest/APIReference/API_TagColumnOperation.html">TagColumnOperation</a>
 *             </code>
 *             structure. This is a
 *             variant type structure. For this structure to be valid, only one of the attributes can
 *             be non-null.</p>
 */
export interface ColumnTag {
  /**
   * <p>A geospatial role for a column.</p>
   */
  ColumnGeographicRole?: GeoSpatialDataRole | string;

  /**
   * <p>A description for a column.</p>
   */
  ColumnDescription?: ColumnDescription;
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
export const CalculatedColumnFilterSensitiveLog = (obj: CalculatedColumn): any => ({
  ...obj,
  ...(obj.Expression && { Expression: SENSITIVE_STRING }),
});
