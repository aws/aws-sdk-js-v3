// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@aws-sdk/smithy-client";

import {
  AccountCustomization,
  AnalysisDefaults,
  AxisBinding,
  AxisDisplayOptions,
  BarChartVisual,
  BoxPlotVisual,
  CalculatedField,
  CalculatedFieldFilterSensitiveLog,
  ChartAxisLabelOptions,
  ColumnConfiguration,
  ColumnConfigurationFilterSensitiveLog,
  ColumnHierarchy,
  ColumnIdentifier,
  ColumnSort,
  ComboChartConfiguration,
  ContributionAnalysisDefault,
  DataLabelOptions,
  DataLabelOptionsFilterSensitiveLog,
  DataLabelPosition,
  DataPathValue,
  DataPathValueFilterSensitiveLog,
  DataSetIdentifierDeclaration,
  DimensionField,
  Edition,
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

export enum CustomContentType {
  IMAGE = "IMAGE",
  OTHER_EMBEDDED_CONTENT = "OTHER_EMBEDDED_CONTENT",
}

export enum CustomContentImageScalingConfiguration {
  DO_NOT_SCALE = "DO_NOT_SCALE",
  FIT_TO_HEIGHT = "FIT_TO_HEIGHT",
  FIT_TO_WIDTH = "FIT_TO_WIDTH",
  SCALE_TO_VISUAL = "SCALE_TO_VISUAL",
}

/**
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
 * <p>The field wells of a <code>FilledMapVisual</code>.</p>
 *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
 */
export interface FilledMapFieldWells {
  /**
   * <p>The aggregated field well of the filled map.</p>
   */
  FilledMapAggregatedFieldWells?: FilledMapAggregatedFieldWells;
}

export enum BaseMapStyleType {
  DARK_GRAY = "DARK_GRAY",
  IMAGERY = "IMAGERY",
  LIGHT_GRAY = "LIGHT_GRAY",
  STREET = "STREET",
}

/**
 * <p>The map style options of the geospatial map.</p>
 */
export interface GeospatialMapStyleOptions {
  /**
   * <p>The base map style of the geospatial map.</p>
   */
  BaseMapStyle?: BaseMapStyleType | string;
}

/**
 * <p>The sort configuration of a <code>FilledMapVisual</code>.</p>
 */
export interface FilledMapSortConfiguration {
  /**
   * <p>The sort configuration of the location fields.</p>
   */
  CategorySort?: FieldSortOptions[];
}

/**
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

export enum MapZoomMode {
  AUTO = "AUTO",
  MANUAL = "MANUAL",
}

/**
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
 * <p>Determines the gradient color settings.</p>
 */
export interface GradientColor {
  /**
   * <p>The list of gradient color stops.</p>
   */
  Stops?: GradientStop[];
}

/**
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
 * <p>The shape conditional formatting of a filled map visual.</p>
 */
export interface ShapeConditionalFormat {
  /**
   * <p>The conditional formatting for the shape background color of a filled map visual.</p>
   */
  BackgroundColor: ConditionalFormattingColor | undefined;
}

/**
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
 * <p>Conditional formatting options of a <code>FilledMapVisual</code>.</p>
 */
export interface FilledMapConditionalFormattingOption {
  /**
   * <p>The conditional formatting that determines the shape of the filled map.</p>
   */
  Shape: FilledMapShapeConditionalFormatting | undefined;
}

/**
 * <p>The conditional formatting of a <code>FilledMapVisual</code>.</p>
 */
export interface FilledMapConditionalFormatting {
  /**
   * <p>Conditional formatting options of a <code>FilledMapVisual</code>.</p>
   */
  ConditionalFormattingOptions: FilledMapConditionalFormattingOption[] | undefined;
}

/**
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

export enum FunnelChartMeasureDataLabelStyle {
  PERCENTAGE_BY_FIRST_STAGE = "PERCENTAGE_BY_FIRST_STAGE",
  PERCENTAGE_BY_PREVIOUS_STAGE = "PERCENTAGE_BY_PREVIOUS_STAGE",
  VALUE_AND_PERCENTAGE_BY_FIRST_STAGE = "VALUE_AND_PERCENTAGE_BY_FIRST_STAGE",
  VALUE_AND_PERCENTAGE_BY_PREVIOUS_STAGE = "VALUE_AND_PERCENTAGE_BY_PREVIOUS_STAGE",
  VALUE_ONLY = "VALUE_ONLY",
}

/**
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

export enum ArcThicknessOptions {
  LARGE = "LARGE",
  MEDIUM = "MEDIUM",
  SMALL = "SMALL",
}

/**
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

export enum ComparisonMethod {
  DIFFERENCE = "DIFFERENCE",
  PERCENT = "PERCENT",
  PERCENT_DIFFERENCE = "PERCENT_DIFFERENCE",
}

/**
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

export enum PrimaryValueDisplayType {
  ACTUAL = "ACTUAL",
  COMPARISON = "COMPARISON",
  HIDDEN = "HIDDEN",
}

/**
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
 * <p>The options that determine the presentation of the arc of a <code>GaugeChartVisual</code>.</p>
 */
export interface GaugeChartArcConditionalFormatting {
  /**
   * <p>The conditional formatting of the arc foreground color.</p>
   */
  ForegroundColor?: ConditionalFormattingColor;
}

export enum ConditionalFormattingIconDisplayOption {
  ICON_ONLY = "ICON_ONLY",
}

/**
 * <p>Determines the icon display configuration.</p>
 */
export interface ConditionalFormattingIconDisplayConfiguration {
  /**
   * <p>Determines the icon display configuration.</p>
   */
  IconDisplayOption?: ConditionalFormattingIconDisplayOption | string;
}

export enum Icon {
  ARROW_DOWN = "ARROW_DOWN",
  ARROW_DOWN_LEFT = "ARROW_DOWN_LEFT",
  ARROW_DOWN_RIGHT = "ARROW_DOWN_RIGHT",
  ARROW_LEFT = "ARROW_LEFT",
  ARROW_RIGHT = "ARROW_RIGHT",
  ARROW_UP = "ARROW_UP",
  ARROW_UP_LEFT = "ARROW_UP_LEFT",
  ARROW_UP_RIGHT = "ARROW_UP_RIGHT",
  CARET_DOWN = "CARET_DOWN",
  CARET_UP = "CARET_UP",
  CHECKMARK = "CHECKMARK",
  CIRCLE = "CIRCLE",
  FACE_DOWN = "FACE_DOWN",
  FACE_FLAT = "FACE_FLAT",
  FACE_UP = "FACE_UP",
  FLAG = "FLAG",
  MINUS = "MINUS",
  ONE_BAR = "ONE_BAR",
  PLUS = "PLUS",
  SQUARE = "SQUARE",
  THREE_BAR = "THREE_BAR",
  THUMBS_DOWN = "THUMBS_DOWN",
  THUMBS_UP = "THUMBS_UP",
  TRIANGLE = "TRIANGLE",
  TWO_BAR = "TWO_BAR",
  X = "X",
}

/**
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

export enum ConditionalFormattingIconSetType {
  BARS = "BARS",
  CARET_UP_MINUS_DOWN = "CARET_UP_MINUS_DOWN",
  CHECK_X = "CHECK_X",
  FLAGS = "FLAGS",
  FOUR_COLOR_ARROW = "FOUR_COLOR_ARROW",
  FOUR_GRAY_ARROW = "FOUR_GRAY_ARROW",
  PLUS_MINUS = "PLUS_MINUS",
  THREE_CIRCLE = "THREE_CIRCLE",
  THREE_COLOR_ARROW = "THREE_COLOR_ARROW",
  THREE_GRAY_ARROW = "THREE_GRAY_ARROW",
  THREE_SHAPE = "THREE_SHAPE",
}

/**
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
 * <p>The conditional formatting of a <code>GaugeChartVisual</code>.</p>
 */
export interface GaugeChartConditionalFormatting {
  /**
   * <p>Conditional formatting options of a <code>GaugeChartVisual</code>.</p>
   */
  ConditionalFormattingOptions?: GaugeChartConditionalFormattingOption[];
}

/**
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
 * <p>The simple cluster marker of the cluster marker.</p>
 */
export interface SimpleClusterMarker {
  /**
   * <p>The color of the simple cluster marker.</p>
   */
  Color?: string;
}

/**
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
 * <p>The cluster marker configuration of the geospatial map selected point style.</p>
 */
export interface ClusterMarkerConfiguration {
  /**
   * <p>The cluster marker that is a part of the cluster marker configuration</p>
   */
  ClusterMarker?: ClusterMarker;
}

export enum GeospatialSelectedPointStyle {
  CLUSTER = "CLUSTER",
  POINT = "POINT",
}

/**
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

export enum ColorFillType {
  DISCRETE = "DISCRETE",
  GRADIENT = "GRADIENT",
}

/**
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
 * <p>The options that determine the bin count of a histogram.</p>
 */
export interface BinCountOptions {
  /**
   * <p>The options that determine the bin count value.</p>
   */
  Value?: number;
}

/**
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

export enum HistogramBinType {
  BIN_COUNT = "BIN_COUNT",
  BIN_WIDTH = "BIN_WIDTH",
}

/**
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
 * <p>The field well configuration of a histogram.</p>
 */
export interface HistogramAggregatedFieldWells {
  /**
   * <p>The value field wells of a histogram. Values are aggregated by <code>COUNT</code> or <code>DISTINCT_COUNT</code>.</p>
   */
  Values?: MeasureField[];
}

/**
 * <p>The field well configuration of a histogram.</p>
 */
export interface HistogramFieldWells {
  /**
   * <p>The field well configuration of a histogram.</p>
   */
  HistogramAggregatedFieldWells?: HistogramAggregatedFieldWells;
}

/**
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

export enum ForecastComputationSeasonality {
  AUTOMATIC = "AUTOMATIC",
  CUSTOM = "CUSTOM",
}

/**
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

export enum MaximumMinimumComputationType {
  MAXIMUM = "MAXIMUM",
  MINIMUM = "MINIMUM",
}

/**
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

export enum TopBottomSortOrder {
  ABSOLUTE_DIFFERENCE = "ABSOLUTE_DIFFERENCE",
  PERCENT_DIFFERENCE = "PERCENT_DIFFERENCE",
}

export enum TopBottomComputationType {
  BOTTOM = "BOTTOM",
  TOP = "TOP",
}

/**
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
 * <p>The custom narrative options.</p>
 */
export interface CustomNarrativeOptions {
  /**
   * <p>The string input of custom narrative.</p>
   */
  Narrative: string | undefined;
}

/**
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
 * <p>The options that determine the presentation of the progress bar of a KPI visual.</p>
 */
export interface ProgressBarOptions {
  /**
   * <p>The visibility of the progress bar.</p>
   */
  Visibility?: Visibility | string;
}

/**
 * <p>The options that determine the presentation of the secondary value of a KPI visual.</p>
 */
export interface SecondaryValueOptions {
  /**
   * <p>Determines the visibility of the secondary value.</p>
   */
  Visibility?: Visibility | string;
}

/**
 * <p>The options that determine the presentation of trend arrows in a KPI visual.</p>
 */
export interface TrendArrowOptions {
  /**
   * <p>The visibility of the trend arrows.</p>
   */
  Visibility?: Visibility | string;
}

/**
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
 * <p>The sort configuration of a KPI visual.</p>
 */
export interface KPISortConfiguration {
  /**
   * <p>The sort configuration of the trend group fields.</p>
   */
  TrendGroupSort?: FieldSortOptions[];
}

/**
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
 * <p>The conditional formatting for the progress bar of a KPI visual.</p>
 */
export interface KPIProgressBarConditionalFormatting {
  /**
   * <p>The conditional formatting of the progress bar's foreground color.</p>
   */
  ForegroundColor?: ConditionalFormattingColor;
}

/**
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
 * <p>The conditional formatting of a KPI visual.</p>
 */
export interface KPIConditionalFormatting {
  /**
   * <p>The conditional formatting options of a KPI visual.</p>
   */
  ConditionalFormattingOptions?: KPIConditionalFormattingOption[];
}

/**
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

export enum LineInterpolation {
  LINEAR = "LINEAR",
  SMOOTH = "SMOOTH",
  STEPPED = "STEPPED",
}

export enum LineChartLineStyle {
  DASHED = "DASHED",
  DOTTED = "DOTTED",
  SOLID = "SOLID",
}

/**
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

export enum LineChartMarkerShape {
  CIRCLE = "CIRCLE",
  DIAMOND = "DIAMOND",
  ROUNDED_SQUARE = "ROUNDED_SQUARE",
  SQUARE = "SQUARE",
  TRIANGLE = "TRIANGLE",
}

/**
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
 * <p>The field well configuration of a line chart.</p>
 */
export interface LineChartFieldWells {
  /**
   * <p>The field well configuration of a line chart.</p>
   */
  LineChartAggregatedFieldWells?: LineChartAggregatedFieldWells;
}

/**
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

export enum MissingDataTreatmentOption {
  INTERPOLATE = "INTERPOLATE",
  SHOW_AS_BLANK = "SHOW_AS_BLANK",
  SHOW_AS_ZERO = "SHOW_AS_ZERO",
}

/**
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

export enum LineChartType {
  AREA = "AREA",
  LINE = "LINE",
  STACKED_AREA = "STACKED_AREA",
}

/**
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

export enum ArcThickness {
  LARGE = "LARGE",
  MEDIUM = "MEDIUM",
  SMALL = "SMALL",
  WHOLE = "WHOLE",
}

/**
 * <p>The options that determine the arc thickness of a <code>GaugeChartVisual</code>.</p>
 */
export interface ArcOptions {
  /**
   * <p>The arc thickness of a <code>GaugeChartVisual</code>.</p>
   */
  ArcThickness?: ArcThickness | string;
}

/**
 * <p>The label options of the label that is displayed in the center of a donut chart. This option isn't available for pie charts.</p>
 */
export interface DonutCenterOptions {
  /**
   * <p>Determines the visibility of the label in a donut chart. In the Amazon QuickSight console, this option is called <code>'Show total'</code>.</p>
   */
  LabelVisibility?: Visibility | string;
}

/**
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
 * <p>The sort configuration for a <code>PivotTableVisual</code>.</p>
 */
export interface PivotTableSortConfiguration {
  /**
   * <p>The field sort options for a pivot table sort configuration.</p>
   */
  FieldSortOptions?: PivotFieldSortOptions[];
}

export enum TableBorderStyle {
  NONE = "NONE",
  SOLID = "SOLID",
}

/**
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

export enum TextWrap {
  NONE = "NONE",
  WRAP = "WRAP",
}

export enum VerticalTextAlignment {
  BOTTOM = "BOTTOM",
  MIDDLE = "MIDDLE",
  TOP = "TOP",
}

/**
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

export enum PivotTableMetricPlacement {
  COLUMN = "COLUMN",
  ROW = "ROW",
}

/**
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
}

export enum PivotTableSubtotalLevel {
  ALL = "ALL",
  CUSTOM = "CUSTOM",
  LAST = "LAST",
}

/**
 * <p>The optional configuration of subtotals cells.</p>
 */
export interface PivotTableFieldSubtotalOptions {
  /**
   * <p>The field ID of the subtotal options.</p>
   */
  FieldId?: string;
}

/**
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

export enum TableTotalsPlacement {
  END = "END",
  START = "START",
}

export enum TableTotalsScrollStatus {
  PINNED = "PINNED",
  SCROLLED = "SCROLLED",
}

/**
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

export enum PivotTableConditionalFormattingScopeRole {
  FIELD = "FIELD",
  FIELD_TOTAL = "FIELD_TOTAL",
  GRAND_TOTAL = "GRAND_TOTAL",
}

/**
 * <p>The scope of the cell for conditional formatting.</p>
 */
export interface PivotTableConditionalFormattingScope {
  /**
   * <p>The role (field, field total, grand total) of the cell for conditional formatting.</p>
   */
  Role?: PivotTableConditionalFormattingScopeRole | string;
}

/**
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
 * <p>Conditional formatting options for a <code>PivotTableVisual</code>.</p>
 */
export interface PivotTableConditionalFormattingOption {
  /**
   * <p>The cell conditional formatting option for a pivot table.</p>
   */
  Cell?: PivotTableCellConditionalFormatting;
}

/**
 * <p>The conditional formatting for a <code>PivotTableVisual</code>.</p>
 */
export interface PivotTableConditionalFormatting {
  /**
   * <p>Conditional formatting options for a <code>PivotTableVisual</code>.</p>
   */
  ConditionalFormattingOptions?: PivotTableConditionalFormattingOption[];
}

/**
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
 * <p>The field well configuration of a sankey diagram.</p>
 */
export interface SankeyDiagramFieldWells {
  /**
   * <p>The field well configuration of a sankey diagram.</p>
   */
  SankeyDiagramAggregatedFieldWells?: SankeyDiagramAggregatedFieldWells;
}

/**
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
}

/**
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
}

/**
 * <p>The field well configuration of a scatter plot.</p>
 *          <p>This is a union type structure. For this structure to be valid, only one of the attributes can be defined.</p>
 */
export interface ScatterPlotFieldWells {
  /**
   * <p>The aggregated field wells of a scatter plot. Scatter plots that have a field in the category (group/color) field will have aggregated field wells. The x and y-axes of these scatter plots are aggregated by category.</p>
   */
  ScatterPlotCategoricallyAggregatedFieldWells?: ScatterPlotCategoricallyAggregatedFieldWells;

  /**
   * <p>The unaggregated field wells of a scatter plot. Scatter plots without a category field
   *             well have unaggregated field wells. The x and y-axes of these scatter plots are
   *             unaggregated.</p>
   */
  ScatterPlotUnaggregatedFieldWells?: ScatterPlotUnaggregatedFieldWells;
}

/**
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

export enum TableCellImageScalingConfiguration {
  DO_NOT_SCALE = "DO_NOT_SCALE",
  FIT_TO_CELL_HEIGHT = "FIT_TO_CELL_HEIGHT",
  FIT_TO_CELL_WIDTH = "FIT_TO_CELL_WIDTH",
}

/**
 * <p>The sizing options for the table image configuration.</p>
 */
export interface TableCellImageSizingConfiguration {
  /**
   * <p>The cell scaling configuration of the sizing options for the table image configuration.</p>
   */
  TableCellImageScalingConfiguration?: TableCellImageScalingConfiguration | string;
}

/**
 * <p>The image configuration of a table field URL.</p>
 */
export interface TableFieldImageConfiguration {
  /**
   * <p>The sizing options for the table image configuration.</p>
   */
  SizingOptions?: TableCellImageSizingConfiguration;
}

export enum TableFieldIconSetType {
  LINK = "LINK",
}

/**
 * <p>The custom icon content for the table link content configuration.</p>
 */
export interface TableFieldCustomIconContent {
  /**
   * <p>The icon set type (link) of the custom icon content for table URL link content.</p>
   */
  Icon?: TableFieldIconSetType | string;
}

/**
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
 * <p>The unaggregated field well for the table.</p>
 */
export interface TableUnaggregatedFieldWells {
  /**
   * <p>The values field well for a pivot table. Values are unaggregated for an unaggregated table.</p>
   */
  Values?: UnaggregatedField[];
}

/**
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
 * <p>The inline visualization of a specific type to display within a chart.</p>
 */
export interface TableInlineVisualization {
  /**
   * <p>The configuration of the inline visualization of the data bars within a chart.</p>
   */
  DataBars?: DataBarsOptions;
}

export enum TableOrientation {
  HORIZONTAL = "HORIZONTAL",
  VERTICAL = "VERTICAL",
}

/**
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
 * <p>The conditional formatting for a <code>PivotTableVisual</code>.</p>
 */
export interface TableConditionalFormatting {
  /**
   * <p>Conditional formatting options for a <code>PivotTableVisual</code>.</p>
   */
  ConditionalFormattingOptions?: TableConditionalFormattingOption[];
}

/**
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
 * <p>The field well configuration of a waterfall visual.</p>
 */
export interface WaterfallChartFieldWells {
  /**
   * <p>The field well configuration of a waterfall visual.</p>
   */
  WaterfallChartAggregatedFieldWells?: WaterfallChartAggregatedFieldWells;
}

/**
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
 * <p>The options that determine the presentation of a waterfall visual.</p>
 */
export interface WaterfallChartOptions {
  /**
   * <p>This option determines the total bar label of a waterfall visual.</p>
   */
  TotalBarLabel?: string;
}

/**
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

export enum WordCloudCloudLayout {
  FLUID = "FLUID",
  NORMAL = "NORMAL",
}

export enum WordCloudWordCasing {
  EXISTING_CASE = "EXISTING_CASE",
  LOWER_CASE = "LOWER_CASE",
}

export enum WordCloudWordOrientation {
  HORIZONTAL = "HORIZONTAL",
  HORIZONTAL_AND_VERTICAL = "HORIZONTAL_AND_VERTICAL",
}

export enum WordCloudWordPadding {
  LARGE = "LARGE",
  MEDIUM = "MEDIUM",
  NONE = "NONE",
  SMALL = "SMALL",
}

export enum WordCloudWordScaling {
  EMPHASIZE = "EMPHASIZE",
  NORMAL = "NORMAL",
}

/**
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
}

/**
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

export enum AnalysisFilterAttribute {
  ANALYSIS_NAME = "ANALYSIS_NAME",
  DIRECT_QUICKSIGHT_OWNER = "DIRECT_QUICKSIGHT_OWNER",
  DIRECT_QUICKSIGHT_SOLE_OWNER = "DIRECT_QUICKSIGHT_SOLE_OWNER",
  DIRECT_QUICKSIGHT_VIEWER_OR_OWNER = "DIRECT_QUICKSIGHT_VIEWER_OR_OWNER",
  QUICKSIGHT_OWNER = "QUICKSIGHT_OWNER",
  QUICKSIGHT_USER = "QUICKSIGHT_USER",
  QUICKSIGHT_VIEWER_OR_OWNER = "QUICKSIGHT_VIEWER_OR_OWNER",
}

export enum FilterOperator {
  StringEquals = "StringEquals",
  StringLike = "StringLike",
}

/**
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
 * <p>The source entity of an analysis.</p>
 */
export interface AnalysisSourceEntity {
  /**
   * <p>The source template for the source entity of the analysis.</p>
   */
  SourceTemplate?: AnalysisSourceTemplate;
}

/**
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

export enum AssignmentStatus {
  DISABLED = "DISABLED",
  DRAFT = "DRAFT",
  ENABLED = "ENABLED",
}

/**
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

export enum AuthenticationMethodOption {
  ACTIVE_DIRECTORY = "ACTIVE_DIRECTORY",
  IAM_AND_QUICKSIGHT = "IAM_AND_QUICKSIGHT",
  IAM_ONLY = "IAM_ONLY",
}

/**
 * <p>The parameters for IoT Analytics.</p>
 */
export interface AwsIotAnalyticsParameters {
  /**
   * <p>Dataset name.</p>
   */
  DataSetName: string | undefined;
}

/**
 * <p>The display options for tile borders for visuals.</p>
 */
export interface BorderStyle {
  /**
   * <p>The option to enable display of borders for visuals.</p>
   */
  Show?: boolean;
}

/**
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

export enum ExceptionResourceType {
  ACCOUNT_SETTINGS = "ACCOUNT_SETTINGS",
  DATA_SET = "DATA_SET",
  DATA_SOURCE = "DATA_SOURCE",
  GROUP = "GROUP",
  IAMPOLICY_ASSIGNMENT = "IAMPOLICY_ASSIGNMENT",
  INGESTION = "INGESTION",
  NAMESPACE = "NAMESPACE",
  USER = "USER",
  VPC_CONNECTION = "VPC_CONNECTION",
}

/**
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

export enum ColumnDataType {
  DATETIME = "DATETIME",
  DECIMAL = "DECIMAL",
  INTEGER = "INTEGER",
  STRING = "STRING",
}

/**
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
 * <p>Metadata that contains a description for a column.</p>
 */
export interface ColumnDescription {
  /**
   * <p>The text of a description for a column.</p>
   */
  Text?: string;
}

export enum GeoSpatialCountryCode {
  US = "US",
}

/**
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
 * <p>A structure describing the name, data type, and geographic role of the columns.</p>
 */
export interface ColumnGroupColumnSchema {
  /**
   * <p>The name of the column group's column schema.</p>
   */
  Name?: string;
}

/**
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

export enum GeoSpatialDataRole {
  CITY = "CITY",
  COUNTRY = "COUNTRY",
  COUNTY = "COUNTY",
  LATITUDE = "LATITUDE",
  LONGITUDE = "LONGITUDE",
  POSTCODE = "POSTCODE",
  STATE = "STATE",
}

/**
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

export enum ColumnTagName {
  COLUMN_DESCRIPTION = "COLUMN_DESCRIPTION",
  COLUMN_GEOGRAPHIC_ROLE = "COLUMN_GEOGRAPHIC_ROLE",
}

/**
 * <p>A resource is already in a state that indicates an operation is happening that must complete
 * 			before a new update can be applied.</p>
 */
export class ConcurrentUpdatingException extends __BaseException {
  readonly name: "ConcurrentUpdatingException" = "ConcurrentUpdatingException";
  readonly $fault: "server" = "server";
  Message?: string;
  RequestId?: string;
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
 * <p>Updating or deleting a resource can cause an inconsistent state.</p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * <p>The Amazon Web Services request ID for this request.</p>
   */
  RequestId?: string;
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
 * <p>The key or keys of the key-value pairs for the resource tag or tags assigned to the
 *             resource.</p>
 */
export interface Tag {
  /**
   * <p>Tag key.</p>
   */
  Key: string | undefined;

  /**
   * <p>Tag value.</p>
   */
  Value: string | undefined;
}

export interface CreateAccountCustomizationRequest {
  /**
   * <p>The ID for the Amazon Web Services account that you want to customize Amazon QuickSight for.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The Amazon QuickSight namespace that you want to add customizations to.</p>
   */
  Namespace?: string;

  /**
   * <p>The Amazon QuickSight customizations you're adding in the current Amazon Web Services Region. You can add
   *             these to an Amazon Web Services account and a QuickSight namespace. </p>
   *          <p>For example, you can add a default theme by setting <code>AccountCustomization</code>
   *             to the midnight theme: <code>"AccountCustomization": { "DefaultTheme":
   *                 "arn:aws:quicksight::aws:theme/MIDNIGHT" }</code>. Or, you can add a custom theme by
   *             specifying <code>"AccountCustomization": { "DefaultTheme":
   *                 "arn:aws:quicksight:us-west-2:111122223333:theme/bdb844d0-0fe9-4d9d-b520-0fe602d93639"
   *                 }</code>. </p>
   */
  AccountCustomization: AccountCustomization | undefined;

  /**
   * <p>A list of the tags that you want to attach to this resource.</p>
   */
  Tags?: Tag[];
}

export interface CreateAccountCustomizationResponse {
  /**
   * <p>The Amazon Resource Name (ARN) for the customization that you created for this Amazon Web Services account.</p>
   */
  Arn?: string;

  /**
   * <p>The ID for the Amazon Web Services account that you want to customize Amazon QuickSight for.</p>
   */
  AwsAccountId?: string;

  /**
   * <p>The namespace associated with the customization you're creating. </p>
   */
  Namespace?: string;

  /**
   * <p>The Amazon QuickSight customizations you're adding in the current Amazon Web Services Region. </p>
   */
  AccountCustomization?: AccountCustomization;

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
 * <p>This resource is currently unavailable.</p>
 */
export class ResourceUnavailableException extends __BaseException {
  readonly name: "ResourceUnavailableException" = "ResourceUnavailableException";
  readonly $fault: "server" = "server";
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
   */
  Edition: Edition | string | undefined;

  /**
   * <p>The method that you want to use to authenticate your Amazon QuickSight account. Currently, the valid values for this parameter are <code>IAM_AND_QUICKSIGHT</code>, <code>IAM_ONLY</code>, and <code>ACTIVE_DIRECTORY</code>.</p>
   *          <p>If you choose <code>ACTIVE_DIRECTORY</code>, provide an <code>ActiveDirectoryName</code>
   *             and an <code>AdminGroup</code> associated with your Active Directory.</p>
   */
  AuthenticationMethod: AuthenticationMethodOption | string | undefined;

  /**
   * <p>The Amazon Web Services account ID of the account that you're using to create your Amazon QuickSight account.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The name of your Amazon QuickSight account. This name is unique over all of Amazon Web Services, and it appears only when users sign in. You can't change
   *                 <code>AccountName</code> value after the Amazon QuickSight account is
   *             created.</p>
   */
  AccountName: string | undefined;

  /**
   * <p>The email address that you want Amazon QuickSight to send notifications to regarding your Amazon QuickSight account or Amazon QuickSight subscription.</p>
   */
  NotificationEmail: string | undefined;

  /**
   * <p>The name of your Active Directory. This field is required if <code>ACTIVE_DIRECTORY</code> is the selected authentication method of the new Amazon QuickSight account.</p>
   */
  ActiveDirectoryName?: string;

  /**
   * <p>The realm of the Active Directory that is associated with your Amazon QuickSight account. This field is required if <code>ACTIVE_DIRECTORY</code> is the selected authentication method of the new Amazon QuickSight account.</p>
   */
  Realm?: string;

  /**
   * <p>The ID of the Active Directory that is associated with your Amazon QuickSight account.</p>
   */
  DirectoryId?: string;

  /**
   * <p>The admin group associated with your Active Directory. This field is required if <code>ACTIVE_DIRECTORY</code> is the selected authentication method of the new Amazon QuickSight account. For more information about using
   *             Active Directory in Amazon QuickSight, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/aws-directory-service.html">Using Active Directory with
   *                     Amazon QuickSight Enterprise Edition</a> in the Amazon QuickSight
   *                 User Guide.</p>
   */
  AdminGroup?: string[];

  /**
   * <p>The author group associated with your Active Directory. For more information about using
   *             Active Directory in Amazon QuickSight, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/aws-directory-service.html">Using Active Directory with
   *                     Amazon QuickSight Enterprise Edition</a> in the Amazon QuickSight
   *                 User Guide.</p>
   */
  AuthorGroup?: string[];

  /**
   * <p>The reader group associated with your Active Direcrtory. For more information about
   *             using Active Directory in Amazon QuickSight, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/aws-directory-service.html">Using Active Directory with
   *                     Amazon QuickSight Enterprise Edition</a> in the <i>Amazon QuickSight
   *                 User Guide</i>.</p>
   */
  ReaderGroup?: string[];

  /**
   * <p>The first name of the author of the Amazon QuickSight account to use for future
   *             communications. This field is required if <code>ENTERPPRISE_AND_Q</code> is the selected
   *             edition of the new Amazon QuickSight account.</p>
   */
  FirstName?: string;

  /**
   * <p>The last name of the author of the Amazon QuickSight account to use for future
   *             communications. This field is required if <code>ENTERPPRISE_AND_Q</code> is the selected
   *             edition of the new Amazon QuickSight account.</p>
   */
  LastName?: string;

  /**
   * <p>The email address of the author of the Amazon QuickSight account to use for future
   *             communications. This field is required if <code>ENTERPPRISE_AND_Q</code> is the selected
   *             edition of the new Amazon QuickSight account.</p>
   */
  EmailAddress?: string;

  /**
   * <p>A 10-digit phone number for the author of the Amazon QuickSight account to use for
   *             future communications. This field is required if <code>ENTERPPRISE_AND_Q</code> is the
   *             selected edition of the new Amazon QuickSight account.</p>
   */
  ContactNumber?: string;
}

/**
 * <p>A <code>SignupResponse</code> object that contains a summary of a newly created account.</p>
 */
export interface SignupResponse {
  /**
   * <p>A Boolean that is <code>TRUE</code> if the Amazon QuickSight uses IAM as an
   *             authentication method.</p>
   */
  IAMUser?: boolean;

  /**
   * <p>The user login name for your Amazon QuickSight account.</p>
   */
  userLoginName?: string;

  /**
   * <p>The name of your Amazon QuickSight account.</p>
   */
  accountName?: string;

  /**
   * <p>The type of Active Directory that is being used to authenticate the Amazon QuickSight
   *             account. Valid values are <code>SIMPLE_AD</code>, <code>AD_CONNECTOR</code>, and
   *                 <code>MICROSOFT_AD</code>.</p>
   */
  directoryType?: string;
}

export interface CreateAccountSubscriptionResponse {
  /**
   * <p>A <code>SignupResponse</code> object that returns information about a newly created Amazon QuickSight account.</p>
   */
  SignupResponse?: SignupResponse;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;
}

/**
 * <p>One or more preconditions aren't met.</p>
 */
export class PreconditionNotMetException extends __BaseException {
  readonly name: "PreconditionNotMetException" = "PreconditionNotMetException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * <p>The Amazon Web Services request ID for this request.</p>
   */
  RequestId?: string;
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
 */
export interface DateTimeParameter {
  /**
   * <p>A display name for the date-time parameter.</p>
   */
  Name: string | undefined;

  /**
   * <p>The values for the date-time parameter.</p>
   */
  Values: Date[] | undefined;
}

/**
 * <p>A decimal parameter.</p>
 */
export interface DecimalParameter {
  /**
   * <p>A display name for the decimal parameter.</p>
   */
  Name: string | undefined;

  /**
   * <p>The values for the decimal parameter.</p>
   */
  Values: number[] | undefined;
}

/**
 * <p>An integer parameter.</p>
 */
export interface IntegerParameter {
  /**
   * <p>The name of the integer parameter.</p>
   */
  Name: string | undefined;

  /**
   * <p>The values for the integer parameter.</p>
   */
  Values: number[] | undefined;
}

/**
 * <p>A string parameter.</p>
 */
export interface StringParameter {
  /**
   * <p>A display name for a string parameter.</p>
   */
  Name: string | undefined;

  /**
   * <p>The values of a string parameter.</p>
   */
  Values: string[] | undefined;
}

/**
 * <p>A list of Amazon QuickSight parameters and the list's override values.</p>
 */
export interface _Parameters {
  /**
   * <p>The parameters that have a data type of string.</p>
   */
  StringParameters?: StringParameter[];

  /**
   * <p>The parameters that have a data type of integer.</p>
   */
  IntegerParameters?: IntegerParameter[];

  /**
   * <p>The parameters that have a data type of decimal.</p>
   */
  DecimalParameters?: DecimalParameter[];

  /**
   * <p>The parameters that have a data type of date-time.</p>
   */
  DateTimeParameters?: DateTimeParameter[];
}

/**
 * <p>Permission for the resource.</p>
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
   */
  Principal: string | undefined;

  /**
   * <p>The IAM action to grant or revoke permissions on.</p>
   */
  Actions: string[] | undefined;
}

export interface CreateAnalysisRequest {
  /**
   * <p>The ID of the Amazon Web Services account where you are creating an analysis.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the analysis that you're creating. This ID displays in the URL of the
   *             analysis.</p>
   */
  AnalysisId: string | undefined;

  /**
   * <p>A descriptive name for the analysis that you're creating. This name displays for the
   *             analysis in the Amazon QuickSight console. </p>
   */
  Name: string | undefined;

  /**
   * <p>The parameter names and override values that you want to use. An analysis can have
   *             any parameter type, and some parameters might accept multiple values. </p>
   */
  Parameters?: _Parameters;

  /**
   * <p>A structure that describes the principals and the resource-level permissions on an
   *             analysis. You can use the <code>Permissions</code> structure to grant permissions by
   *             providing a list of Identity and Access Management (IAM) action information for each
   *             principal listed by Amazon Resource Name (ARN). </p>
   *          <p>To specify no permissions, omit <code>Permissions</code>.</p>
   */
  Permissions?: ResourcePermission[];

  /**
   * <p>A source entity to use for the analysis that you're creating. This metadata structure
   *             contains details that describe a source template and one or more datasets.</p>
   */
  SourceEntity?: AnalysisSourceEntity;

  /**
   * <p>The ARN for the theme to apply to the analysis that you're creating. To see the theme
   *             in the Amazon QuickSight console, make sure that you have access to it.</p>
   */
  ThemeArn?: string;

  /**
   * <p>Contains a map of the key-value pairs for the resource tag or tags assigned to the
   *             analysis.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The definition of an analysis.</p>
   *          <p>A definition is the data model of all features in a Dashboard, Template, or Analysis.</p>
   */
  Definition?: AnalysisDefinition;
}

/**
 * @internal
 */
export const ComboChartVisualFilterSensitiveLog = (obj: ComboChartVisual): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CustomContentConfigurationFilterSensitiveLog = (obj: CustomContentConfiguration): any => ({
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
export const GeospatialMapStyleOptionsFilterSensitiveLog = (obj: GeospatialMapStyleOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FilledMapSortConfigurationFilterSensitiveLog = (obj: FilledMapSortConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GeospatialCoordinateBoundsFilterSensitiveLog = (obj: GeospatialCoordinateBounds): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GeospatialWindowOptionsFilterSensitiveLog = (obj: GeospatialWindowOptions): any => ({
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
export const GradientStopFilterSensitiveLog = (obj: GradientStop): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GradientColorFilterSensitiveLog = (obj: GradientColor): any => ({
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
export const FunnelChartDataLabelOptionsFilterSensitiveLog = (obj: FunnelChartDataLabelOptions): any => ({
  ...obj,
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
export const FunnelChartSortConfigurationFilterSensitiveLog = (obj: FunnelChartSortConfiguration): any => ({
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
export const ArcConfigurationFilterSensitiveLog = (obj: ArcConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ArcAxisDisplayRangeFilterSensitiveLog = (obj: ArcAxisDisplayRange): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ArcAxisConfigurationFilterSensitiveLog = (obj: ArcAxisConfiguration): any => ({
  ...obj,
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
export const ConditionalFormattingIconDisplayConfigurationFilterSensitiveLog = (
  obj: ConditionalFormattingIconDisplayConfiguration
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ConditionalFormattingCustomIconOptionsFilterSensitiveLog = (
  obj: ConditionalFormattingCustomIconOptions
): any => ({
  ...obj,
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
export const SimpleClusterMarkerFilterSensitiveLog = (obj: SimpleClusterMarker): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ClusterMarkerFilterSensitiveLog = (obj: ClusterMarker): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ClusterMarkerConfigurationFilterSensitiveLog = (obj: ClusterMarkerConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GeospatialPointStyleOptionsFilterSensitiveLog = (obj: GeospatialPointStyleOptions): any => ({
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
export const DataColorFilterSensitiveLog = (obj: DataColor): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ColorScaleFilterSensitiveLog = (obj: ColorScale): any => ({
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
export const HeatMapSortConfigurationFilterSensitiveLog = (obj: HeatMapSortConfiguration): any => ({
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
export const BinCountOptionsFilterSensitiveLog = (obj: BinCountOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BinWidthOptionsFilterSensitiveLog = (obj: BinWidthOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const HistogramBinOptionsFilterSensitiveLog = (obj: HistogramBinOptions): any => ({
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
export const CustomNarrativeOptionsFilterSensitiveLog = (obj: CustomNarrativeOptions): any => ({
  ...obj,
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
export const ProgressBarOptionsFilterSensitiveLog = (obj: ProgressBarOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SecondaryValueOptionsFilterSensitiveLog = (obj: SecondaryValueOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TrendArrowOptionsFilterSensitiveLog = (obj: TrendArrowOptions): any => ({
  ...obj,
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
export const KPISortConfigurationFilterSensitiveLog = (obj: KPISortConfiguration): any => ({
  ...obj,
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
export const LineChartLineStyleSettingsFilterSensitiveLog = (obj: LineChartLineStyleSettings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LineChartMarkerStyleSettingsFilterSensitiveLog = (obj: LineChartMarkerStyleSettings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LineChartDefaultSeriesSettingsFilterSensitiveLog = (obj: LineChartDefaultSeriesSettings): any => ({
  ...obj,
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
export const TimeBasedForecastPropertiesFilterSensitiveLog = (obj: TimeBasedForecastProperties): any => ({
  ...obj,
});

/**
 * @internal
 */
export const WhatIfPointScenarioFilterSensitiveLog = (obj: WhatIfPointScenario): any => ({
  ...obj,
});

/**
 * @internal
 */
export const WhatIfRangeScenarioFilterSensitiveLog = (obj: WhatIfRangeScenario): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ForecastScenarioFilterSensitiveLog = (obj: ForecastScenario): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ForecastConfigurationFilterSensitiveLog = (obj: ForecastConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MissingDataConfigurationFilterSensitiveLog = (obj: MissingDataConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LineSeriesAxisDisplayOptionsFilterSensitiveLog = (obj: LineSeriesAxisDisplayOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LineChartSeriesSettingsFilterSensitiveLog = (obj: LineChartSeriesSettings): any => ({
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
export const FieldSeriesItemFilterSensitiveLog = (obj: FieldSeriesItem): any => ({
  ...obj,
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
export const LineChartSortConfigurationFilterSensitiveLog = (obj: LineChartSortConfiguration): any => ({
  ...obj,
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
export const ArcOptionsFilterSensitiveLog = (obj: ArcOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DonutCenterOptionsFilterSensitiveLog = (obj: DonutCenterOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DonutOptionsFilterSensitiveLog = (obj: DonutOptions): any => ({
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
export const PieChartSortConfigurationFilterSensitiveLog = (obj: PieChartSortConfiguration): any => ({
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
export const PivotTableFieldOptionFilterSensitiveLog = (obj: PivotTableFieldOption): any => ({
  ...obj,
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
export const PivotTablePaginatedReportOptionsFilterSensitiveLog = (obj: PivotTablePaginatedReportOptions): any => ({
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
export const TableBorderOptionsFilterSensitiveLog = (obj: TableBorderOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TableSideBorderOptionsFilterSensitiveLog = (obj: TableSideBorderOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GlobalTableBorderOptionsFilterSensitiveLog = (obj: GlobalTableBorderOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TableCellStyleFilterSensitiveLog = (obj: TableCellStyle): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RowAlternateColorOptionsFilterSensitiveLog = (obj: RowAlternateColorOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PivotTableOptionsFilterSensitiveLog = (obj: PivotTableOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PivotTableFieldSubtotalOptionsFilterSensitiveLog = (obj: PivotTableFieldSubtotalOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SubtotalOptionsFilterSensitiveLog = (obj: SubtotalOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PivotTotalOptionsFilterSensitiveLog = (obj: PivotTotalOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PivotTableTotalOptionsFilterSensitiveLog = (obj: PivotTableTotalOptions): any => ({
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
export const PivotTableConditionalFormattingScopeFilterSensitiveLog = (
  obj: PivotTableConditionalFormattingScope
): any => ({
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
export const SankeyDiagramSortConfigurationFilterSensitiveLog = (obj: SankeyDiagramSortConfiguration): any => ({
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
export const TableCellImageSizingConfigurationFilterSensitiveLog = (obj: TableCellImageSizingConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TableFieldImageConfigurationFilterSensitiveLog = (obj: TableFieldImageConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TableFieldCustomIconContentFilterSensitiveLog = (obj: TableFieldCustomIconContent): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TableFieldCustomTextContentFilterSensitiveLog = (obj: TableFieldCustomTextContent): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TableFieldLinkContentConfigurationFilterSensitiveLog = (obj: TableFieldLinkContentConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TableFieldLinkConfigurationFilterSensitiveLog = (obj: TableFieldLinkConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TableFieldURLConfigurationFilterSensitiveLog = (obj: TableFieldURLConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TableFieldOptionFilterSensitiveLog = (obj: TableFieldOption): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TableFieldOptionsFilterSensitiveLog = (obj: TableFieldOptions): any => ({
  ...obj,
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
export const TablePaginatedReportOptionsFilterSensitiveLog = (obj: TablePaginatedReportOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TableSortConfigurationFilterSensitiveLog = (obj: TableSortConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DataBarsOptionsFilterSensitiveLog = (obj: DataBarsOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TableInlineVisualizationFilterSensitiveLog = (obj: TableInlineVisualization): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TableOptionsFilterSensitiveLog = (obj: TableOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TotalOptionsFilterSensitiveLog = (obj: TotalOptions): any => ({
  ...obj,
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
export const TreeMapSortConfigurationFilterSensitiveLog = (obj: TreeMapSortConfiguration): any => ({
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
export const WaterfallChartSortConfigurationFilterSensitiveLog = (obj: WaterfallChartSortConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const WaterfallChartOptionsFilterSensitiveLog = (obj: WaterfallChartOptions): any => ({
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
export const WordCloudSortConfigurationFilterSensitiveLog = (obj: WordCloudSortConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const WordCloudOptionsFilterSensitiveLog = (obj: WordCloudOptions): any => ({
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
export const AnalysisSearchFilterFilterSensitiveLog = (obj: AnalysisSearchFilter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DataSetReferenceFilterSensitiveLog = (obj: DataSetReference): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AnalysisSourceTemplateFilterSensitiveLog = (obj: AnalysisSourceTemplate): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AnalysisSourceEntityFilterSensitiveLog = (obj: AnalysisSourceEntity): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AnalysisSummaryFilterSensitiveLog = (obj: AnalysisSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AnonymousUserDashboardEmbeddingConfigurationFilterSensitiveLog = (
  obj: AnonymousUserDashboardEmbeddingConfiguration
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DashboardVisualIdFilterSensitiveLog = (obj: DashboardVisualId): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AnonymousUserDashboardVisualEmbeddingConfigurationFilterSensitiveLog = (
  obj: AnonymousUserDashboardVisualEmbeddingConfiguration
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AnonymousUserQSearchBarEmbeddingConfigurationFilterSensitiveLog = (
  obj: AnonymousUserQSearchBarEmbeddingConfiguration
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AnonymousUserEmbeddingExperienceConfigurationFilterSensitiveLog = (
  obj: AnonymousUserEmbeddingExperienceConfiguration
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AthenaParametersFilterSensitiveLog = (obj: AthenaParameters): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AuroraParametersFilterSensitiveLog = (obj: AuroraParameters): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AuroraPostgreSqlParametersFilterSensitiveLog = (obj: AuroraPostgreSqlParameters): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsIotAnalyticsParametersFilterSensitiveLog = (obj: AwsIotAnalyticsParameters): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BorderStyleFilterSensitiveLog = (obj: BorderStyle): any => ({
  ...obj,
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
export const CancelIngestionRequestFilterSensitiveLog = (obj: CancelIngestionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CancelIngestionResponseFilterSensitiveLog = (obj: CancelIngestionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CastColumnTypeOperationFilterSensitiveLog = (obj: CastColumnTypeOperation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ColumnDescriptionFilterSensitiveLog = (obj: ColumnDescription): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GeoSpatialColumnGroupFilterSensitiveLog = (obj: GeoSpatialColumnGroup): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ColumnGroupFilterSensitiveLog = (obj: ColumnGroup): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ColumnGroupColumnSchemaFilterSensitiveLog = (obj: ColumnGroupColumnSchema): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ColumnGroupSchemaFilterSensitiveLog = (obj: ColumnGroupSchema): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ColumnLevelPermissionRuleFilterSensitiveLog = (obj: ColumnLevelPermissionRule): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ColumnSchemaFilterSensitiveLog = (obj: ColumnSchema): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ColumnTagFilterSensitiveLog = (obj: ColumnTag): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagFilterSensitiveLog = (obj: Tag): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateAccountCustomizationRequestFilterSensitiveLog = (obj: CreateAccountCustomizationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateAccountCustomizationResponseFilterSensitiveLog = (obj: CreateAccountCustomizationResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateAccountSubscriptionRequestFilterSensitiveLog = (obj: CreateAccountSubscriptionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SignupResponseFilterSensitiveLog = (obj: SignupResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateAccountSubscriptionResponseFilterSensitiveLog = (obj: CreateAccountSubscriptionResponse): any => ({
  ...obj,
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
export const ResourcePermissionFilterSensitiveLog = (obj: ResourcePermission): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateAnalysisRequestFilterSensitiveLog = (obj: CreateAnalysisRequest): any => ({
  ...obj,
  ...(obj.Parameters && { Parameters: _ParametersFilterSensitiveLog(obj.Parameters) }),
});
