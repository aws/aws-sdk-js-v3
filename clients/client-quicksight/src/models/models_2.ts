// smithy-typescript generated code
import {
  AmazonElasticsearchParameters,
  AmazonOpenSearchParameters,
  AnalysisDefaults,
  AssetOptions,
  AuthorizationCodeGrantCredentialsSource,
  CalculatedField,
  ClientCredentialsSource,
  ColumnConfiguration,
  ColumnSort,
  ConnectionAuthType,
  DataSetIdentifierDeclaration,
  FilterControl,
  FilterGroup,
  FilterOperator,
  FontConfiguration,
  Layout,
  ParameterControl,
  ParameterDeclaration,
  QueryExecutionOptions,
  ResourceStatus,
  SheetContentType,
  SheetControlLayout,
  SheetImage,
  SheetTextBox,
  SortDirection,
  TimeGranularity,
  TransformOperationSource,
  URLTargetConfiguration,
  Visibility,
  VisualCustomAction,
  VisualCustomActionDefaults,
  WidgetStatus,
} from "./models_0";

import {
  AxisDisplayOptions,
  BarChartVisual,
  BoxPlotVisual,
  ChartAxisLabelOptions,
  ColorScale,
  ColumnHierarchy,
  ComboChartVisual,
  ConditionalFormattingColor,
  ConditionalFormattingIcon,
  CustomContentVisual,
  DataLabelOptions,
  DataPathValue,
  DimensionField,
  EmptyVisual,
  FieldSort,
  FieldSortOptions,
  FilledMapVisual,
  FunnelChartVisual,
  GaugeChartVisual,
  GeospatialMapVisual,
  HeatMapVisual,
  HistogramVisual,
  HorizontalTextAlignment,
  InsightVisual,
  ItemsLimitConfiguration,
  KPIVisual,
  LayerMapVisual,
  LegendOptions,
  LineChartVisual,
  MeasureField,
  PaginationConfiguration,
  PieChartVisual,
  PivotTableDataPathOption,
  PivotTableFieldCollapseStateOption,
  PivotTableFieldOption,
  TooltipOptions,
  UnaggregatedField,
  VisualInteractionOptions,
  VisualPalette,
  VisualSubtitleLabelOptions,
  VisualTitleLabelOptions,
} from "./models_1";

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

/**
 * <p>The total options for a pivot table visual.</p>
 * @public
 */
export interface PivotTableTotalOptions {
  /**
   * <p>The row subtotal options.</p>
   * @public
   */
  RowSubtotalOptions?: SubtotalOptions | undefined;

  /**
   * <p>The column subtotal options.</p>
   * @public
   */
  ColumnSubtotalOptions?: SubtotalOptions | undefined;

  /**
   * <p>The row total options.</p>
   * @public
   */
  RowTotalOptions?: PivotTotalOptions | undefined;

  /**
   * <p>The column total options.</p>
   * @public
   */
  ColumnTotalOptions?: PivotTotalOptions | undefined;
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
  FieldWells?: PivotTableFieldWells | undefined;

  /**
   * <p>The sort configuration for a <code>PivotTableVisual</code>.</p>
   * @public
   */
  SortConfiguration?: PivotTableSortConfiguration | undefined;

  /**
   * <p>The table options for a pivot table visual.</p>
   * @public
   */
  TableOptions?: PivotTableOptions | undefined;

  /**
   * <p>The total options for a pivot table visual.</p>
   * @public
   */
  TotalOptions?: PivotTableTotalOptions | undefined;

  /**
   * <p>The field options for a pivot table visual.</p>
   * @public
   */
  FieldOptions?: PivotTableFieldOptions | undefined;

  /**
   * <p>The paginated report options for a pivot table visual.</p>
   * @public
   */
  PaginatedReportOptions?: PivotTablePaginatedReportOptions | undefined;

  /**
   * <p>The general visual interactions setup for a visual.</p>
   * @public
   */
  Interactions?: VisualInteractionOptions | undefined;
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
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/pivot-table.html">Using pivot tables</a> in the <i>Amazon Quick Suite User Guide</i>.</p>
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
 *       to create new custom charts in Quick Sight.</p>
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
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/sankey-diagram.html">Using Sankey diagrams</a> in the <i>Amazon Quick Suite User Guide</i>.</p>
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
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/scatter-plot.html">Using scatter plots</a> in the <i>Amazon Quick Suite User Guide</i>.</p>
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
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/tabular.html">Using tables as visuals</a> in the <i>Amazon Quick Suite User Guide</i>.</p>
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
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/tree-map.html">Using tree maps</a> in the <i>Amazon Quick Suite User Guide</i>.</p>
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
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/waterfall-chart.html">Using waterfall charts</a> in the <i>Amazon Quick Suite User Guide</i>.</p>
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
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/word-cloud.html">Using word clouds</a> in the <i>Amazon Quick Suite User Guide</i>.</p>
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
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/tabular.html">Using tables as visuals</a> in the <i>Amazon Quick Suite User Guide</i>.</p>
   * @public
   */
  TableVisual?: TableVisual | undefined;

  /**
   * <p>A pivot table.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/pivot-table.html">Using pivot tables</a> in the <i>Amazon Quick Suite User Guide</i>.</p>
   * @public
   */
  PivotTableVisual?: PivotTableVisual | undefined;

  /**
   * <p>A bar chart.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/bar-charts.html">Using bar charts</a> in the <i>Amazon Quick Suite User Guide</i>.</p>
   * @public
   */
  BarChartVisual?: BarChartVisual | undefined;

  /**
   * <p>A key performance indicator (KPI).</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/kpi.html">Using KPIs</a> in the <i>Amazon Quick Suite User Guide</i>.</p>
   * @public
   */
  KPIVisual?: KPIVisual | undefined;

  /**
   * <p>A pie or donut chart.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/pie-chart.html">Using pie charts</a> in the <i>Amazon Quick Suite User Guide</i>.</p>
   * @public
   */
  PieChartVisual?: PieChartVisual | undefined;

  /**
   * <p>A gauge chart.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/gauge-chart.html">Using gauge charts</a> in the <i>Amazon Quick Suite User Guide</i>.</p>
   * @public
   */
  GaugeChartVisual?: GaugeChartVisual | undefined;

  /**
   * <p>A line chart.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/line-charts.html">Using line charts</a> in the <i>Amazon Quick Suite User Guide</i>.</p>
   * @public
   */
  LineChartVisual?: LineChartVisual | undefined;

  /**
   * <p>A heat map.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/heat-map.html">Using heat maps</a> in the <i>Amazon Quick Suite User Guide</i>.</p>
   * @public
   */
  HeatMapVisual?: HeatMapVisual | undefined;

  /**
   * <p>A tree map.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/tree-map.html">Using tree maps</a> in the <i>Amazon Quick Suite User Guide</i>.</p>
   * @public
   */
  TreeMapVisual?: TreeMapVisual | undefined;

  /**
   * <p>A geospatial map or a points on map visual.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/point-maps.html">Creating point maps</a> in the <i>Amazon Quick Suite User Guide</i>.</p>
   * @public
   */
  GeospatialMapVisual?: GeospatialMapVisual | undefined;

  /**
   * <p>A filled map.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/filled-maps.html">Creating filled maps</a> in the <i>Amazon Quick Suite User Guide</i>.</p>
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
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/funnel-visual-content.html">Using funnel charts</a> in the <i>Amazon Quick Suite User Guide</i>.</p>
   * @public
   */
  FunnelChartVisual?: FunnelChartVisual | undefined;

  /**
   * <p>A scatter plot.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/scatter-plot.html">Using scatter plots</a> in the <i>Amazon Quick Suite User Guide</i>.</p>
   * @public
   */
  ScatterPlotVisual?: ScatterPlotVisual | undefined;

  /**
   * <p>A combo chart.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/combo-charts.html">Using combo charts</a> in the <i>Amazon Quick Suite User Guide</i>.</p>
   * @public
   */
  ComboChartVisual?: ComboChartVisual | undefined;

  /**
   * <p>A box plot.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/box-plots.html">Using box plots</a> in the <i>Amazon Quick Suite User Guide</i>.</p>
   * @public
   */
  BoxPlotVisual?: BoxPlotVisual | undefined;

  /**
   * <p>A waterfall chart.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/waterfall-chart.html">Using waterfall charts</a> in the <i>Amazon Quick Suite User Guide</i>.</p>
   * @public
   */
  WaterfallVisual?: WaterfallVisual | undefined;

  /**
   * <p>A histogram.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/histogram-charts.html">Using histograms</a> in the <i>Amazon Quick Suite User Guide</i>.</p>
   * @public
   */
  HistogramVisual?: HistogramVisual | undefined;

  /**
   * <p>A word cloud.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/word-cloud.html">Using word clouds</a> in the <i>Amazon Quick Suite User Guide</i>.</p>
   * @public
   */
  WordCloudVisual?: WordCloudVisual | undefined;

  /**
   * <p>An insight visual.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/computational-insights.html">Working with insights</a> in the <i>Amazon Quick Suite User Guide</i>.</p>
   * @public
   */
  InsightVisual?: InsightVisual | undefined;

  /**
   * <p>A sankey diagram.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/sankey-diagram.html">Using Sankey diagrams</a> in the <i>Amazon Quick Suite User Guide</i>.</p>
   * @public
   */
  SankeyDiagramVisual?: SankeyDiagramVisual | undefined;

  /**
   * <p>A visual that contains custom content.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/custom-visual-content.html">Using custom visual content</a> in the <i>Amazon Quick Suite User Guide</i>.</p>
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
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/radar-chart.html">Using radar charts</a> in the <i>Amazon Quick Suite User Guide</i>.</p>
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
   * <p>The name of the sheet. This name is displayed on the sheet's tab in the Quick Suite
   *             console.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The list of parameter controls that are on a sheet.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/parameters-controls.html">Using a Control with a Parameter in Amazon Quick Sight</a> in the <i>Amazon Quick Suite User Guide</i>.</p>
   * @public
   */
  ParameterControls?: ParameterControl[] | undefined;

  /**
   * <p>The list of filter controls that are on a sheet.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/filter-controls.html">Adding filter controls to analysis sheets</a> in the <i>Amazon Quick Suite User Guide</i>.</p>
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
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/types-of-layout.html">Types of layout</a> in the <i>Amazon Quick Suite User Guide</i>.</p>
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
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/parameters-in-quicksight.html">Parameters in Amazon Quick Sight</a> in the <i>Amazon Quick Suite User Guide</i>.</p>
   * @public
   */
  ParameterDeclarations?: ParameterDeclaration[] | undefined;

  /**
   * <p>Filter definitions for an analysis.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/adding-a-filter.html">Filtering Data in Amazon Quick Sight</a> in the <i>Amazon Quick Suite User Guide</i>.</p>
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
   * <p>The name of the analysis. This name is displayed in the Quick Sight console.
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
   * <p>The dashboard ID for the dashboard that you want the user to see first. This ID is
   *             included in the output URL. When the URL in response is accessed, Amazon Quick Sight
   *             renders this dashboard.</p>
   *          <p>The Amazon Resource Name (ARN) of this dashboard must be included in the
   *                 <code>AuthorizedResourceArns</code> parameter. Otherwise, the request will fail with
   *                 <code>InvalidParameterValueException</code>.</p>
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
 *                <p>The <code>DashboardId</code> of the dashboard that has the visual that you
 *                     want to embed.</p>
 *             </li>
 *             <li>
 *                <p>The <code>SheetId</code> of the sheet that has the visual that you want to
 *                     embed.</p>
 *             </li>
 *             <li>
 *                <p>The <code>VisualId</code> of the visual that you want to embed.</p>
 *             </li>
 *          </ul>
 *          <p>The <code>DashboardId</code>, <code>SheetId</code>, and <code>VisualId</code> can be
 *             found in the <code>IDs for developers</code> section of the <code>Embed visual</code>
 *             pane of the visual's on-visual menu of the Amazon Quick Sight console. You can also get
 *             the <code>DashboardId</code> with a <code>ListDashboards</code> API operation.</p>
 * @public
 */
export interface DashboardVisualId {
  /**
   * <p>The ID of the dashboard that has the visual that you want to embed. The
   *                 <code>DashboardId</code> can be found in the <code>IDs for developers</code> section
   *             of the <code>Embed visual</code> pane of the visual's on-visual menu of the Quick Suite console. You can also get the <code>DashboardId</code> with a
   *                 <code>ListDashboards</code> API operation.</p>
   * @public
   */
  DashboardId: string | undefined;

  /**
   * <p>The ID of the sheet that the has visual that you want to embed. The
   *                 <code>SheetId</code> can be found in the <code>IDs for developers</code> section of
   *             the <code>Embed visual</code> pane of the visual's on-visual menu of the Quick Suite console.</p>
   * @public
   */
  SheetId: string | undefined;

  /**
   * <p>The ID of the visual that you want to embed. The <code>VisualID</code> can be found in
   *             the <code>IDs for developers</code> section of the <code>Embed visual</code> pane of the
   *             visual's on-visual menu of the Amazon Quick Sight console.</p>
   * @public
   */
  VisualId: string | undefined;
}

/**
 * <p>The experience that you are embedding. You can use this object to generate a url that
 *             embeds a visual into your application.</p>
 * @public
 */
export interface AnonymousUserDashboardVisualEmbeddingConfiguration {
  /**
   * <p>The visual ID for the visual that you want the user to see. This ID is included in the
   *             output URL. When the URL in response is accessed, Amazon Quick Sight renders this
   *             visual.</p>
   *          <p>The Amazon Resource Name (ARN) of the dashboard that the visual belongs to must be
   *             included in the <code>AuthorizedResourceArns</code> parameter. Otherwise, the request
   *             will fail with <code>InvalidParameterValueException</code>.</p>
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
   * <p>The Quick Sight Q topic ID of the new reader experience topic that you want the anonymous user to see first. This ID is included in the output URL. When the URL in response is accessed, Quick Sight renders the Generative Q&A experience with this new reader experience topic pre selected.</p>
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
   * <p>The Quick Sight Q topic ID of the legacy topic that you want the anonymous user to see first. This ID is included in the output URL. When the URL in response is accessed, Quick Sight renders the Q search bar with this legacy topic pre-selected.</p>
   *          <p>The Amazon Resource Name (ARN) of this Q legacy topic must be included in the <code>AuthorizedResourceArns</code> parameter. Otherwise, the request fails with an <code>InvalidParameterValueException</code> error.</p>
   * @public
   */
  InitialTopicId: string | undefined;
}

/**
 * <p>The type of experience you want to embed. For anonymous users, you can embed Quick Suite dashboards.</p>
 * @public
 */
export interface AnonymousUserEmbeddingExperienceConfiguration {
  /**
   * <p>The type of embedding experience. In this case, Amazon Quick Sight dashboards.</p>
   * @public
   */
  Dashboard?: AnonymousUserDashboardEmbeddingConfiguration | undefined;

  /**
   * <p>The type of embedding experience. In this case, Amazon Quick Sight visuals.</p>
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
 * <p>An optional structure that contains the Amazon S3 bucket configuration that the generated snapshots are stored in. If you don't provide this information, generated snapshots are stored in the default Amazon Quick Sight bucket.</p>
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
 * <p>Configuration for API key-based authentication to external services.</p>
 * @public
 */
export interface APIKeyConnectionMetadata {
  /**
   * <p>The base URL endpoint for the external service.</p>
   * @public
   */
  BaseEndpoint: string | undefined;

  /**
   * <p>The API key used for authentication.</p>
   * @public
   */
  ApiKey: string | undefined;

  /**
   * <p>The email address associated with the API key, if required.</p>
   * @public
   */
  Email?: string | undefined;
}

/**
 * <p>Represents a column that will be included in the result of an append operation, combining data from multiple sources.</p>
 * @public
 */
export interface AppendedColumn {
  /**
   * <p>The name of the column to include in the appended result.</p>
   * @public
   */
  ColumnName: string | undefined;

  /**
   * <p>A unique identifier for the column in the appended result.</p>
   * @public
   */
  NewColumnId: string | undefined;
}

/**
 * <p>A transform operation that combines rows from two data sources by stacking them vertically (union operation).</p>
 * @public
 */
export interface AppendOperation {
  /**
   * <p>Alias for this operation.</p>
   * @public
   */
  Alias: string | undefined;

  /**
   * <p>The first data source to be included in the append operation.</p>
   * @public
   */
  FirstSource?: TransformOperationSource | undefined;

  /**
   * <p>The second data source to be appended to the first source.</p>
   * @public
   */
  SecondSource?: TransformOperationSource | undefined;

  /**
   * <p>The list of columns to include in the appended result, mapping columns from both sources.</p>
   * @public
   */
  AppendedColumns: AppendedColumn[] | undefined;
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
 * <p>The contextual accent palette.</p>
 * @public
 */
export interface ContextualAccentPalette {
  /**
   * <p>The color palette.</p>
   * @public
   */
  Connection?: Palette | undefined;

  /**
   * <p>The color palette.</p>
   * @public
   */
  Visualization?: Palette | undefined;

  /**
   * <p>The color palette.</p>
   * @public
   */
  Insight?: Palette | undefined;

  /**
   * <p>The color palette.</p>
   * @public
   */
  Automation?: Palette | undefined;
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
   * <p>The contextual accent palette.</p>
   * @public
   */
  ContextualAccentPalette?: ContextualAccentPalette | undefined;

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
 * <p>Controls how a specific <code>Analysis</code> resource is parameterized in the returned
 *             CloudFormation template.</p>
 * @public
 */
export interface AssetBundleExportJobAnalysisOverrideProperties {
  /**
   * <p>The ARN of the specific <code>Analysis</code> resource whose override properties are
   *          configured in this structure.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>A list of <code>Analysis</code> resource properties to generate variables for in the
   *          returned CloudFormation template.</p>
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
 * <p>Controls how a specific <code>Dashboard</code> resource is parameterized in the returned
 *             CloudFormation template.</p>
 * @public
 */
export interface AssetBundleExportJobDashboardOverrideProperties {
  /**
   * <p>The ARN of the specific <code>Dashboard</code> resource whose override properties are
   *          configured in this structure.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>A list of <code>Dashboard</code> resource properties to generate variables for in the
   *          returned CloudFormation template.</p>
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
 * <p>Controls how a specific <code>DataSet</code> resource is parameterized in the returned
 *             CloudFormation template.</p>
 * @public
 */
export interface AssetBundleExportJobDataSetOverrideProperties {
  /**
   * <p>The ARN of the specific <code>DataSet</code> resource whose override properties are
   *          configured in this structure.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>A list of <code>DataSet</code> resource properties to generate variables for in the
   *          returned CloudFormation template.</p>
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
 * <p>Controls how a specific <code>DataSource</code> resource is parameterized in the
 *          returned CloudFormation template.</p>
 * @public
 */
export interface AssetBundleExportJobDataSourceOverrideProperties {
  /**
   * <p>The ARN of the specific <code>DataSource</code> resource whose override properties are
   *          configured in this structure.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>A list of <code>DataSource</code> resource properties to generate variables for in the
   *          returned CloudFormation template.</p>
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
 * <p>Controls how a specific <code>Folder</code> resource is parameterized in the returned
 *             CloudFormation template.</p>
 * @public
 */
export interface AssetBundleExportJobFolderOverrideProperties {
  /**
   * <p>The ARN of the specific <code>Folder</code> resource whose override properties are
   *          configured in this structure.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>A list of <code>Folder</code> resource properties to generate variables for in the
   *          returned CloudFormation template.</p>
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
 * <p>Controls how a specific <code>RefreshSchedule</code> resource is parameterized in the
 *          returned CloudFormation template.</p>
 * @public
 */
export interface AssetBundleExportJobRefreshScheduleOverrideProperties {
  /**
   * <p>The ARN of the specific <code>RefreshSchedule</code> resource whose override properties
   *          are configured in this structure.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>A list of <code>RefreshSchedule</code> resource properties to generate variables for in
   *          the returned CloudFormation template.</p>
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
   * <p>An option to request a CloudFormation variable for a prefix to be prepended to each
   *          resource's ID before import. The prefix is only added to the asset IDs and does not
   *          change the name of the asset.</p>
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
 * <p>Controls how a specific <code>Theme</code> resource is parameterized in the returned
 *             CloudFormation template.</p>
 * @public
 */
export interface AssetBundleExportJobThemeOverrideProperties {
  /**
   * <p>The ARN of the specific <code>Theme</code> resource whose override properties are
   *          configured in this structure.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>A list of <code>Theme</code> resource properties to generate variables for in the
   *          returned CloudFormation template.</p>
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
 * <p>Controls how a specific <code>VPCConnection</code> resource is parameterized in the
 *          outputted CloudFormation template.</p>
 * @public
 */
export interface AssetBundleExportJobVPCConnectionOverrideProperties {
  /**
   * <p>The ARN of the specific <code>VPCConnection</code> resource whose override properties
   *          are configured in this structure.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>A list of <code>VPCConnection</code> resource properties to generate variables for in
   *          the returned CloudFormation template.</p>
   * @public
   */
  Properties: AssetBundleExportJobVPCConnectionPropertyToOverride[] | undefined;
}

/**
 * <p>An optional collection of CloudFormation property configurations that control how
 *          the export job is generated.</p>
 * @public
 */
export interface AssetBundleCloudFormationOverridePropertyConfiguration {
  /**
   * <p>An optional list of structures that control how resource IDs are parameterized in the
   *          returned CloudFormation template.</p>
   * @public
   */
  ResourceIdOverrideConfiguration?: AssetBundleExportJobResourceIdOverrideConfiguration | undefined;

  /**
   * <p>An optional list of structures that control how <code>VPCConnection</code> resources are
   *          parameterized in the returned CloudFormation template.</p>
   * @public
   */
  VPCConnections?: AssetBundleExportJobVPCConnectionOverrideProperties[] | undefined;

  /**
   * <p>An optional list of structures that control how <code>RefreshSchedule</code> resources
   *          are parameterized in the returned CloudFormation template.</p>
   * @public
   */
  RefreshSchedules?: AssetBundleExportJobRefreshScheduleOverrideProperties[] | undefined;

  /**
   * <p>An optional list of structures that control how <code>DataSource</code> resources are
   *          parameterized in the returned CloudFormation template.</p>
   * @public
   */
  DataSources?: AssetBundleExportJobDataSourceOverrideProperties[] | undefined;

  /**
   * <p>An optional list of structures that control how <code>DataSet</code> resources are
   *          parameterized in the returned CloudFormation template.</p>
   * @public
   */
  DataSets?: AssetBundleExportJobDataSetOverrideProperties[] | undefined;

  /**
   * <p>An optional list of structures that control how <code>Theme</code> resources are
   *          parameterized in the returned CloudFormation template.</p>
   * @public
   */
  Themes?: AssetBundleExportJobThemeOverrideProperties[] | undefined;

  /**
   * <p>An optional list of structures that control how <code>Analysis</code> resources are
   *          parameterized in the returned CloudFormation template.</p>
   * @public
   */
  Analyses?: AssetBundleExportJobAnalysisOverrideProperties[] | undefined;

  /**
   * <p>An optional list of structures that control how <code>Dashboard</code> resources are
   *          parameterized in the returned CloudFormation template.</p>
   * @public
   */
  Dashboards?: AssetBundleExportJobDashboardOverrideProperties[] | undefined;

  /**
   * <p>An optional list of structures that controls how <code>Folder</code> resources are
   *          parameterized in the returned CloudFormation template.</p>
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
 * <p>A summary of the export job that includes details of the job's configuration and
 *          its current status.</p>
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
   * <p>The flag that determines the inclusion of resource dependencies in the returned asset
   *          bundle.</p>
   * @public
   */
  IncludeAllDependencies?: boolean | undefined;

  /**
   * <p>The format for the export job.</p>
   * @public
   */
  ExportFormat?: AssetBundleExportFormat | undefined;

  /**
   * <p>The flag that determines the inclusion of permissions associated with each resource
   *          ARN.</p>
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
 * <p>The option to relax the validation that is required to export each asset. When
 *             <code>StrictModeForAllResource</code> is set to <code>false</code>, validation is
 *          skipped for specific UI errors.</p>
 * @public
 */
export interface AssetBundleExportJobValidationStrategy {
  /**
   * <p>A Boolean value that indicates whether to export resources under strict or lenient
   *          mode.</p>
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
 * <p>A structure that contains the permissions for the resource that you want to override in
 *          an asset bundle import job.</p>
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
 * <p>An object that contains a list of permissions to be applied to a list of analysis
 *          IDs.</p>
 * @public
 */
export interface AssetBundleImportJobAnalysisOverridePermissions {
  /**
   * <p>A list of analysis IDs that you want to apply overrides to. You can use <code>*</code>
   *          to override all analyses in this asset bundle.</p>
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
   * <p>A list of analysis IDs that you want to apply overrides to. You can use <code>*</code>
   *          to override all analyses in this asset bundle.</p>
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
 * <p>A structure that contains the configuration of a shared link to an Amazon Quick Sight
 *          dashboard.</p>
 * @public
 */
export interface AssetBundleResourceLinkSharingConfiguration {
  /**
   * <p>A list of link sharing permissions for the dashboards that you want to apply overrides
   *          to.</p>
   * @public
   */
  Permissions?: AssetBundleResourcePermissions | undefined;
}

/**
 * <p>An object that contains a list of permissions to be applied to a list of dashboard
 *          IDs.</p>
 * @public
 */
export interface AssetBundleImportJobDashboardOverridePermissions {
  /**
   * <p>A list of dashboard IDs that you want to apply overrides to. You can use <code>*</code>
   *          to override all dashboards in this asset bundle.</p>
   * @public
   */
  DashboardIds: string[] | undefined;

  /**
   * <p>A list of permissions for the dashboards that you want to apply overrides to.</p>
   * @public
   */
  Permissions?: AssetBundleResourcePermissions | undefined;

  /**
   * <p>A structure that contains the link sharing configurations that you want to apply
   *          overrides to.</p>
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
   * <p>A list of dashboard IDs that you want to apply overrides to. You can use <code>*</code>
   *          to override all dashboards in this asset bundle.</p>
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
 * <p>An object that contains a list of permissions to be applied to a list of dataset
 *          IDs.</p>
 * @public
 */
export interface AssetBundleImportJobDataSetOverridePermissions {
  /**
   * <p>A list of dataset IDs that you want to apply overrides to. You can use <code>*</code> to
   *          override all datasets in this asset bundle.</p>
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
   * <p>A list of dataset IDs that you want to apply overrides to. You can use <code>*</code> to
   *          override all datasets in this asset bundle.</p>
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
   * <p>A username and password credential pair to be used to create the imported data source.
   *          Keep this field blank if you are using a Secrets Manager secret to provide
   *          credentials.</p>
   * @public
   */
  CredentialPair?: AssetBundleImportJobDataSourceCredentialPair | undefined;

  /**
   * <p>The ARN of the Secrets Manager secret that's used to create the imported data source.
   *          Keep this field blank, unless you are using a secret in place of a credential pair.</p>
   * @public
   */
  SecretArn?: string | undefined;
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

  /**
   * <p>An optional parameter that configures IAM Identity Center authentication to grant Quick Sight access to your workgroup.</p>
   *          <p>This parameter can only be specified if your Quick Sight account is configured with IAM Identity Center.</p>
   * @public
   */
  IdentityCenterConfiguration?: IdentityCenterConfiguration | undefined;
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
 * <p>The parameters that are required to connect to a Confluence data source</p>
 * @public
 */
export interface ConfluenceParameters {
  /**
   * <p>The URL of the Confluence site to connect to.</p>
   * @public
   */
  ConfluenceUrl: string | undefined;
}

/**
 * <p>The parameters that are required to connect to a custom connection data source.</p>
 * @public
 */
export interface CustomConnectionParameters {
  /**
   * <p>The type of custom connector.</p>
   * @public
   */
  ConnectionType?: string | undefined;
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
 * <p>The parameters that are required to connect to a Impala data source.</p>
 * @public
 */
export interface ImpalaParameters {
  /**
   * <p>The host name of the Impala data source.</p>
   * @public
   */
  Host: string | undefined;

  /**
   * <p>The port of the Impala data source.</p>
   * @public
   */
  Port: number | undefined;

  /**
   * <p>The database of the Impala data source.</p>
   * @public
   */
  Database?: string | undefined;

  /**
   * <p>The HTTP path of the Impala data source.</p>
   * @public
   */
  SqlEndpointPath: string | undefined;
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
 * <p>The parameters that are required to connect to an Amazon Q Business data source.</p>
 * @public
 */
export interface QBusinessParameters {
  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Q Business application.</p>
   * @public
   */
  ApplicationArn: string | undefined;
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
 * <p>A structure that grants Quick Sight access to your cluster and make a call to the <code>redshift:GetClusterCredentials</code> API. For more information on the <code>redshift:GetClusterCredentials</code> API, see <a href="https://docs.aws.amazon.com/redshift/latest/APIReference/API_GetClusterCredentials.html">
 *                <code>GetClusterCredentials</code>
 *             </a>.</p>
 * @public
 */
export interface RedshiftIAMParameters {
  /**
   * <p>Use the <code>RoleArn</code> structure to allow Quick Sight to call <code>redshift:GetClusterCredentials</code> on your cluster. The calling principal must have <code>iam:PassRole</code> access to pass the role to Quick Sight. The role's trust policy must allow the Quick Sight service principal to assume the role.</p>
   * @public
   */
  RoleArn: string | undefined;

  /**
   * <p>The user whose permissions and group memberships will be used by Quick Sight to access the cluster. If this user already exists in your database, Amazon Quick Sight is granted the same permissions that the user has. If the user doesn't exist, set the value of <code>AutoCreateDatabaseUser</code> to <code>True</code> to create a new user with PUBLIC permissions.</p>
   * @public
   */
  DatabaseUser?: string | undefined;

  /**
   * <p>A list of groups whose permissions will be granted to Quick Sight to access the cluster. These permissions are combined with the permissions granted to Quick Sight by the <code>DatabaseUser</code>. If you choose to include this parameter, the <code>RoleArn</code> must grant access to <code>redshift:JoinGroup</code>.</p>
   * @public
   */
  DatabaseGroups?: string[] | undefined;

  /**
   * <p>Automatically creates a database user. If your database doesn't have a <code>DatabaseUser</code>, set this parameter to <code>True</code>. If there is no <code>DatabaseUser</code>, Quick Sight can't connect to your cluster. The <code>RoleArn</code> that you use for this operation must grant access to <code>redshift:CreateClusterUser</code> to successfully create the user.</p>
   * @public
   */
  AutoCreateDatabaseUser?: boolean | undefined;
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
   * <p>An optional parameter that uses IAM authentication to grant Quick Sight access to your cluster. This parameter can be used instead of <a href="https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DataSourceCredentials.html">DataSourceCredentials</a>.</p>
   * @public
   */
  IAMParameters?: RedshiftIAMParameters | undefined;

  /**
   * <p>An optional parameter that configures IAM Identity Center authentication to grant Quick Sight access to your cluster.</p>
   *          <p>This parameter can only be specified if your Quick Sight account is configured with IAM Identity Center.</p>
   * @public
   */
  IdentityCenterConfiguration?: IdentityCenterConfiguration | undefined;
}

/**
 * <p>The parameters that are required to connect to a S3 Knowledge Base data source.</p>
 * @public
 */
export interface S3KnowledgeBaseParameters {
  /**
   * <p>Use the <code>RoleArn</code> structure to override an account-wide role for a specific S3 Knowledge Base data source. For example, say an account administrator has turned off all S3 access with an account-wide role. The administrator can then use <code>RoleArn</code> to bypass the account-wide role and allow S3 access for the single S3 Knowledge Base data source that is specified in the structure, even if the account-wide role forbidding S3 access is still active.</p>
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * <p>The URL of the S3 bucket that contains the knowledge base data.</p>
   * @public
   */
  BucketUrl: string | undefined;

  /**
   * <p>The location of metadata files within the S3 bucket that describe the structure and content of the knowledge base.</p>
   * @public
   */
  MetadataFilesLocation?: string | undefined;
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
   *             uploaded into Quick Sight.</p>
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
   * <p>An object that contains information needed to create a data source connection between an Quick Sight account and Snowflake.</p>
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
   * <p>An object that contains information needed to create a data source connection between an Quick Sight account and Starburst.</p>
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
 * @public
 * @enum
 */
export const WebCrawlerAuthType = {
  BASIC_AUTH: "BASIC_AUTH",
  FORM: "FORM",
  NO_AUTH: "NO_AUTH",
  SAML: "SAML",
} as const;

/**
 * @public
 */
export type WebCrawlerAuthType = (typeof WebCrawlerAuthType)[keyof typeof WebCrawlerAuthType];

/**
 * <p>The parameters for a web crawler data source.</p>
 * @public
 */
export interface WebCrawlerParameters {
  /**
   * <p>The authentication type for the web crawler. The type can be one of the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>NO_AUTH</code>: No authentication required.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>BASIC_AUTH</code>: Basic authentication using username and password.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SAML</code>: SAML-based authentication.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FORM</code>: Form-based authentication.</p>
   *             </li>
   *          </ul>
   * @public
   */
  WebCrawlerAuthType: WebCrawlerAuthType | undefined;

  /**
   * <p>The XPath expression for locating the username field on the login page.</p>
   * @public
   */
  UsernameFieldXpath?: string | undefined;

  /**
   * <p>The XPath expression for locating the password field on the login page.</p>
   * @public
   */
  PasswordFieldXpath?: string | undefined;

  /**
   * <p>The XPath expression for locating the username submit button on the login page.</p>
   * @public
   */
  UsernameButtonXpath?: string | undefined;

  /**
   * <p>The XPath expression for locating the password submit button on the login page.</p>
   * @public
   */
  PasswordButtonXpath?: string | undefined;

  /**
   * <p>The URL of the login page for the web crawler to authenticate.</p>
   * @public
   */
  LoginPageUrl?: string | undefined;

  /**
   * <p>The hostname of the web proxy server for the web crawler.</p>
   * @public
   */
  WebProxyHostName?: string | undefined;

  /**
   * <p>The port number of the web proxy server for the web crawler.</p>
   * @public
   */
  WebProxyPortNumber?: number | undefined;
}

/**
 * <p>The parameters that Quick Sight uses to connect to your underlying data source.
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
  | DataSourceParameters.ConfluenceParametersMember
  | DataSourceParameters.CustomConnectionParametersMember
  | DataSourceParameters.DatabricksParametersMember
  | DataSourceParameters.ExasolParametersMember
  | DataSourceParameters.ImpalaParametersMember
  | DataSourceParameters.JiraParametersMember
  | DataSourceParameters.MariaDbParametersMember
  | DataSourceParameters.MySqlParametersMember
  | DataSourceParameters.OracleParametersMember
  | DataSourceParameters.PostgreSqlParametersMember
  | DataSourceParameters.PrestoParametersMember
  | DataSourceParameters.QBusinessParametersMember
  | DataSourceParameters.RdsParametersMember
  | DataSourceParameters.RedshiftParametersMember
  | DataSourceParameters.S3KnowledgeBaseParametersMember
  | DataSourceParameters.S3ParametersMember
  | DataSourceParameters.ServiceNowParametersMember
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
    $unknown?: never;
  }

  /**
   * <p>The parameters for S3 Knowledge Base.</p>
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
    $unknown?: never;
  }

  /**
   * <p>The parameters for Impala.</p>
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
    $unknown?: never;
  }

  /**
   * <p>The parameters for custom connectors.</p>
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
    $unknown?: never;
  }

  /**
   * <p>The parameters for Web Crawler.</p>
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
    $unknown?: never;
  }

  /**
   * <p>The parameters for Confluence.</p>
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
    $unknown?: never;
  }

  /**
   * <p>The parameters for Amazon Q Business.</p>
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
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>Secure Socket Layer (SSL) properties that apply when Quick Sight connects to your
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
   * <p>The parameters that Quick Sight uses to connect to your underlying data source.
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
   * <p>Secure Socket Layer (SSL) properties that apply when Quick Sight connects to your
   *             underlying data source.</p>
   * @public
   */
  SslProperties?: SslProperties | undefined;

  /**
   * <p>An optional structure that provides the credentials to be used to create the imported
   *          data source.</p>
   * @public
   */
  Credentials?: AssetBundleImportJobDataSourceCredentials | undefined;
}

/**
 * <p>An object that contains a list of permissions to be applied to a list of data source
 *          IDs.</p>
 * @public
 */
export interface AssetBundleImportJobDataSourceOverridePermissions {
  /**
   * <p>A list of data source IDs that you want to apply overrides to. You can use
   *             <code>*</code> to override all data sources in this asset bundle.</p>
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
 * <p>An object that contains a list of tags to be assigned to a list of data source
 *          IDs.</p>
 * @public
 */
export interface AssetBundleImportJobDataSourceOverrideTags {
  /**
   * <p>A list of data source IDs that you want to apply overrides to. You can use
   *             <code>*</code> to override all data sources in this asset bundle.</p>
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
   * <p>A new parent folder arn. This change can only be applied if the import creates a brand
   *          new folder. Existing folders cannot be moved.</p>
   * @public
   */
  ParentFolderArn?: string | undefined;
}

/**
 * <p>An object that contains a list of permissions to be applied to a list of folder
 *          IDs.</p>
 * @public
 */
export interface AssetBundleImportJobFolderOverridePermissions {
  /**
   * <p>A list of folder IDs that you want to apply overrides to. You can use <code>*</code> to
   *          override all folders in this asset bundle.</p>
   * @public
   */
  FolderIds: string[] | undefined;

  /**
   * <p>A structure that contains the permissions for the resource that you want to override in
   *          an asset bundle import job.</p>
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
   * <p>A list of folder IDs that you want to apply overrides to. You can use <code>*</code> to
   *          override all folders in this asset bundle.</p>
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
 * <p>A list of overrides for a specific <code>RefreshsSchedule</code> resource that is
 *          present in the asset bundle that is imported.</p>
 * @public
 */
export interface AssetBundleImportJobRefreshScheduleOverrideParameters {
  /**
   * <p>A partial identifier for the specific <code>RefreshSchedule</code> resource that is
   *          being overridden. This structure is used together with the <code>ScheduleID</code>
   *          structure.</p>
   * @public
   */
  DataSetId: string | undefined;

  /**
   * <p>A partial identifier for the specific <code>RefreshSchedule</code> resource being
   *          overridden. This structure is used together with the <code>DataSetId</code>
   *          structure.</p>
   * @public
   */
  ScheduleId: string | undefined;

  /**
   * <p>An override for the <code>StartAfterDateTime</code> of a <code>RefreshSchedule</code>.
   *          Make sure that the <code>StartAfterDateTime</code> is set to a time that takes place in the
   *          future.</p>
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
   * <p>An option to request a CloudFormation variable for a prefix to be prepended to each
   *          resource's ID before import. The prefix is only added to the asset IDs and does not
   *          change the name of the asset.</p>
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
   *          required if you are importing the VPC connection from another Amazon Web Services account or
   *          Region.</p>
   * @public
   */
  SubnetIds?: string[] | undefined;

  /**
   * <p>A new security group ID for the VPC connection you are importing. This field is required
   *          if you are importing the VPC connection from another Amazon Web Services account or
   *          Region.</p>
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
 * <p>A list of overrides that modify the asset bundle resource configuration before the
 *          resource is imported.</p>
 * @public
 */
export interface AssetBundleImportJobOverrideParameters {
  /**
   * <p>An optional structure that configures resource ID overrides to be applied within the
   *          import job.</p>
   * @public
   */
  ResourceIdOverrideConfiguration?: AssetBundleImportJobResourceIdOverrideConfiguration | undefined;

  /**
   * <p>A list of overrides for any <code>VPCConnection</code> resources that are present in the
   *          asset bundle that is imported.</p>
   * @public
   */
  VPCConnections?: AssetBundleImportJobVPCConnectionOverrideParameters[] | undefined;

  /**
   * <p>A list of overrides for any <code>RefreshSchedule</code> resources that are present in
   *          the asset bundle that is imported.</p>
   * @public
   */
  RefreshSchedules?: AssetBundleImportJobRefreshScheduleOverrideParameters[] | undefined;

  /**
   * <p> A list of overrides for any <code>DataSource</code> resources that are present in the
   *          asset bundle that is imported.</p>
   * @public
   */
  DataSources?: AssetBundleImportJobDataSourceOverrideParameters[] | undefined;

  /**
   * <p>A list of overrides for any <code>DataSet</code> resources that are present in the asset
   *          bundle that is imported.</p>
   * @public
   */
  DataSets?: AssetBundleImportJobDataSetOverrideParameters[] | undefined;

  /**
   * <p>A list of overrides for any <code>Theme</code> resources that are present in the asset
   *          bundle that is imported.</p>
   * @public
   */
  Themes?: AssetBundleImportJobThemeOverrideParameters[] | undefined;

  /**
   * <p>A list of overrides for any <code>Analysis</code> resources that are present in the
   *          asset bundle that is imported.</p>
   * @public
   */
  Analyses?: AssetBundleImportJobAnalysisOverrideParameters[] | undefined;

  /**
   * <p>A list of overrides for any <code>Dashboard</code> resources that are present in the
   *          asset bundle that is imported.</p>
   * @public
   */
  Dashboards?: AssetBundleImportJobDashboardOverrideParameters[] | undefined;

  /**
   * <p>A list of overrides for any <code>Folder</code> resources that are present in the asset
   *          bundle that is imported.</p>
   * @public
   */
  Folders?: AssetBundleImportJobFolderOverrideParameters[] | undefined;
}

/**
 * <p>An object that contains a list of permissions to be applied to a list of theme
 *          IDs.</p>
 * @public
 */
export interface AssetBundleImportJobThemeOverridePermissions {
  /**
   * <p>A list of theme IDs that you want to apply overrides to. You can use <code>*</code> to
   *          override all themes in this asset bundle.</p>
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
 * <p>A structure that contains the override permission configurations that modify the
 *          permissions for specified resources before the resource is imported.</p>
 * @public
 */
export interface AssetBundleImportJobOverridePermissions {
  /**
   * <p>A list of permissions overrides for any <code>DataSource</code> resources that are
   *          present in the asset bundle that is imported.</p>
   * @public
   */
  DataSources?: AssetBundleImportJobDataSourceOverridePermissions[] | undefined;

  /**
   * <p>A list of permissions overrides for any <code>DataSet</code> resources that are present
   *          in the asset bundle that is imported.</p>
   * @public
   */
  DataSets?: AssetBundleImportJobDataSetOverridePermissions[] | undefined;

  /**
   * <p>A list of permissions overrides for any <code>Theme</code> resources that are present in
   *          the asset bundle that is imported.</p>
   * @public
   */
  Themes?: AssetBundleImportJobThemeOverridePermissions[] | undefined;

  /**
   * <p>A list of permissions overrides for any <code>Analysis</code> resources that are present
   *          in the asset bundle that is imported.</p>
   * @public
   */
  Analyses?: AssetBundleImportJobAnalysisOverridePermissions[] | undefined;

  /**
   * <p>A list of permissions overrides for any <code>Dashboard</code> resources that are
   *          present in the asset bundle that is imported.</p>
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
   * <p>A list of theme IDs that you want to apply overrides to. You can use <code>*</code> to
   *          override all themes in this asset bundle.</p>
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
 * <p>An object that contains a list of tags to be assigned to a list of VPC connection
 *          IDs.</p>
 * @public
 */
export interface AssetBundleImportJobVPCConnectionOverrideTags {
  /**
   * <p>A list of VPC connection IDs that you want to apply overrides to. You can use
   *             <code>*</code> to override all VPC connections in this asset bundle.</p>
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
 * <p>A structure that contains the override tag configuration that modify the tags that are
 *          assigned to specified resources before the resource is imported.</p>
 * @public
 */
export interface AssetBundleImportJobOverrideTags {
  /**
   * <p>A list of tag overrides for any <code>VPCConnection</code> resources that are present in
   *          the asset bundle that is imported.</p>
   * @public
   */
  VPCConnections?: AssetBundleImportJobVPCConnectionOverrideTags[] | undefined;

  /**
   * <p>A list of tag overrides for any <code>DataSource</code> resources that are present in
   *          the asset bundle that is imported.</p>
   * @public
   */
  DataSources?: AssetBundleImportJobDataSourceOverrideTags[] | undefined;

  /**
   * <p>A list of tag overrides for any <code>DataSet</code> resources that are present in the
   *          asset bundle that is imported.</p>
   * @public
   */
  DataSets?: AssetBundleImportJobDataSetOverrideTags[] | undefined;

  /**
   * <p>A list of tag overrides for any <code>Theme</code> resources that are present in the
   *          asset bundle that is imported.</p>
   * @public
   */
  Themes?: AssetBundleImportJobThemeOverrideTags[] | undefined;

  /**
   * <p>A list of tag overrides for any <code>Analysis</code> resources that are present in the
   *          asset bundle that is imported.</p>
   * @public
   */
  Analyses?: AssetBundleImportJobAnalysisOverrideTags[] | undefined;

  /**
   * <p>A list of tag overrides for any <code>Dashboard</code> resources that are present in the
   *          asset bundle that is imported.</p>
   * @public
   */
  Dashboards?: AssetBundleImportJobDashboardOverrideTags[] | undefined;

  /**
   * <p>A list of tag overrides for any <code>Folder</code> resources that are present in the
   *          asset bundle that is imported.</p>
   * @public
   */
  Folders?: AssetBundleImportJobFolderOverrideTags[] | undefined;
}

/**
 * <p>An optional parameter that overrides the validation strategy for all analyses and
 *          dashboards before the resource is imported.</p>
 * @public
 */
export interface AssetBundleImportJobOverrideValidationStrategy {
  /**
   * <p>A Boolean value that indicates whether to import all analyses and dashboards under
   *          strict or lenient mode.</p>
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
 * <p>A summary of the import job that includes details of the requested job's
 *          configuration and its current status.</p>
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
   * <p>The ID of the job. This ID is unique while the job is running. After the job is
   *          completed, you can reuse this ID for another job.</p>
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
 * <p>The source of the asset bundle zip file that contains the data that you want to import.
 *          The file must be in <code>QUICKSIGHT_JSON</code> format.</p>
 * @public
 */
export interface AssetBundleImportSource {
  /**
   * <p>The bytes of the base64 encoded asset bundle import zip file. This file can't
   *          exceed 20 MB. If the size of the file that you want to upload is more than 20 MB, add the
   *          file to your Amazon S3 bucket and use <code>S3Uri</code> of the file for this
   *          operation.</p>
   *          <p>If you are calling the API operations from the Amazon Web Services SDK for Java,
   *          JavaScript, Python, or PHP, the SDK encodes base64 automatically to allow the direct
   *          setting of the zip file's bytes. If you are using an SDK for a different language or
   *          receiving related errors, try to base64 encode your data.</p>
   * @public
   */
  Body?: Uint8Array | undefined;

  /**
   * <p>The Amazon S3 URI for an asset bundle import file that exists in an Amazon S3 bucket that the caller has read access to. The file must be a zip format file
   *          and can't exceed 1 GB.</p>
   * @public
   */
  S3Uri?: string | undefined;
}

/**
 * <p>A description of the import source that you provide at the start of an import job. This
 *          value is set to either <code>Body</code> or <code>S3Uri</code>, depending on how the
 *             <code>StartAssetBundleImportJobRequest</code> is configured.</p>
 * @public
 */
export interface AssetBundleImportSourceDescription {
  /**
   * <p>An HTTPS download URL for the provided asset bundle that you optionally provided at the
   *          start of the import job. This URL is valid for five minutes after issuance. Call
   *             <code>DescribeAssetBundleExportJob</code> again for a fresh URL if needed. The
   *          downloaded asset bundle is a <code>.qs</code> zip file.</p>
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
 * <p>Configuration details for OAuth 2.0 authorization code grant flow.</p>
 * @public
 */
export interface AuthorizationCodeGrantDetails {
  /**
   * <p>The client ID for the OAuth application.</p>
   * @public
   */
  ClientId: string | undefined;

  /**
   * <p>The client secret for the OAuth application.</p>
   * @public
   */
  ClientSecret: string | undefined;

  /**
   * <p>The token endpoint URL for obtaining access tokens.</p>
   * @public
   */
  TokenEndpoint: string | undefined;

  /**
   * <p>The authorization endpoint URL for the OAuth flow.</p>
   * @public
   */
  AuthorizationEndpoint: string | undefined;
}

/**
 * <p>Details for OAuth 2.0 authorization code grant credentials.</p>
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
   * <p>The authorization code grant configuration details.</p>
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
 * <p>Metadata for OAuth 2.0 authorization code grant authentication.</p>
 * @public
 */
export interface AuthorizationCodeGrantMetadata {
  /**
   * <p>The base URL endpoint for the external service.</p>
   * @public
   */
  BaseEndpoint: string | undefined;

  /**
   * <p>The redirect URL for the OAuth authorization flow.</p>
   * @public
   */
  RedirectUrl: string | undefined;

  /**
   * <p>The source of the authorization code grant credentials.</p>
   * @public
   */
  AuthorizationCodeGrantCredentialsSource?: AuthorizationCodeGrantCredentialsSource | undefined;

  /**
   * <p>The detailed credentials configuration for authorization code grant.</p>
   * @public
   */
  AuthorizationCodeGrantCredentialsDetails?: AuthorizationCodeGrantCredentialsDetails | undefined;
}

/**
 * <p>Metadata for basic authentication using username and password.</p>
 * @public
 */
export interface BasicAuthConnectionMetadata {
  /**
   * <p>The base URL endpoint for the external service.</p>
   * @public
   */
  BaseEndpoint: string | undefined;

  /**
   * <p>The username for basic authentication.</p>
   * @public
   */
  Username: string | undefined;

  /**
   * <p>The password for basic authentication.</p>
   * @public
   */
  Password: string | undefined;
}

/**
 * <p>Configuration details for OAuth2 client credentials grant flow, including client ID, client secret, token endpoint, and optional scopes.</p>
 * @public
 */
export interface ClientCredentialsGrantDetails {
  /**
   * <p>The client identifier issued to the client during the registration process with the authorization server.</p>
   * @public
   */
  ClientId: string | undefined;

  /**
   * <p>The client secret issued to the client during the registration process with the authorization server.</p>
   * @public
   */
  ClientSecret: string | undefined;

  /**
   * <p>The authorization server endpoint used to obtain access tokens via the client credentials grant flow.</p>
   * @public
   */
  TokenEndpoint: string | undefined;
}

/**
 * <p>Details for OAuth 2.0 client credentials grant authentication.</p>
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
   * <p>The OAuth2 client credentials grant configuration details for authentication.</p>
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
 * <p>Configuration for OAuth 2.0 client credentials grant authentication, including client ID, client secret, token endpoint, and optional scopes.</p>
 * @public
 */
export interface ClientCredentialsGrantMetadata {
  /**
   * <p>The base endpoint URL for the external service.</p>
   * @public
   */
  BaseEndpoint: string | undefined;

  /**
   * <p>The source of the client credentials configuration.</p>
   * @public
   */
  ClientCredentialsSource?: ClientCredentialsSource | undefined;

  /**
   * <p>The detailed client credentials configuration including client ID, client secret, and token endpoint.</p>
   * @public
   */
  ClientCredentialsDetails?: ClientCredentialsDetails | undefined;
}

/**
 * <p>Authentication metadata for IAM-based connections, used for first-party Amazon Web Services service integrations.</p>
 * @public
 */
export interface IAMConnectionMetadata {
  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role to assume for authentication with Amazon Web Services services. This IAM role should be in the same account as Quick Sight.</p>
   * @public
   */
  RoleArn: string | undefined;
}

/**
 * <p>Authentication metadata for connections that do not require authentication credentials.</p>
 * @public
 */
export interface NoneConnectionMetadata {
  /**
   * <p>The base endpoint URL for connections that do not require authentication.</p>
   * @public
   */
  BaseEndpoint: string | undefined;
}

/**
 * <p>Union type containing authentication metadata for different authentication methods.</p>
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
   * <p>OAuth 2.0 authorization code grant authentication metadata.</p>
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
   * <p>OAuth 2.0 client credentials grant authentication metadata.</p>
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
   * <p>Basic authentication metadata using username and password.</p>
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
   * <p>API key authentication metadata.</p>
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
   * <p>No authentication metadata for services that don't require authentication.</p>
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
   * <p>IAM role-based authentication metadata for Amazon Web Services services.</p>
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
 * <p>Authentication configuration for connecting to external services.</p>
 * @public
 */
export interface AuthConfig {
  /**
   * <p>The type of authentication method.</p>
   * @public
   */
  AuthenticationType: ConnectionAuthType | undefined;

  /**
   * <p>The authentication metadata containing the specific configuration for the chosen authentication type.</p>
   * @public
   */
  AuthenticationMetadata: AuthenticationMetadata | undefined;
}

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
  ATHENA: "ATHENA",
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
