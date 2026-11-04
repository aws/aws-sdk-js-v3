// smithy-typescript generated code
import type { DocumentType as __DocumentType } from "@smithy/types";

import type {
  AssignmentStatus,
  AuthorSpecifiedAggregation,
  CategoryFilterFunction,
  CategoryFilterType,
  ColumnDataRole,
  ColumnDataSubType,
  ColumnDataType,
  ColumnTagName,
  ConstantType,
  CredentialStatus,
  DashboardErrorType,
  DashboardFilterAttribute,
  DataSetDateComparisonFilterOperator,
  DataSetFilterAttribute,
  DataSetImportMode,
  DataSetNumericComparisonFilterOperator,
  DatasetParameterValueType,
  DataSetStatus,
  DataSetStringComparisonFilterOperator,
  DataSetStringListFilterOperator,
  DataSetUseAs,
  DataSourceErrorInfoType,
  DataSourceFilterAttribute,
  DataSourceType,
  DayOfWeek,
  DefaultAggregation,
  DisplayFormat,
  DlpAction,
  DlpProviderType,
  FileFormat,
  FilterClass,
  FilterOperator,
  FolderType,
  HorizontalTextAlignment,
  IdentityStore,
  ImageExtractionStatus,
  IngestionStatus,
  IngestionType,
  InputColumnDataType,
  JoinOperationType,
  JoinType,
  LimitUnit,
  MemberType,
  NamedEntityAggType,
  NamedFilterAggType,
  NamedFilterType,
  NamespaceStatus,
  NullFilterType,
  OAuthClientAuthenticationType,
  PropertyRole,
  PropertyUsage,
  RefreshInterval,
  ResourceStatus,
  ResourceType,
  Role,
  RowLevelPermissionFormatVersion,
  RowLevelPermissionPolicy,
  ServiceType,
  SharingModel,
  Status,
  TextQualifier,
  TextTransform,
  TimeGranularity,
  TopicRelativeDateFilterFunction,
  TopicScheduleType,
  TopicSortDirection,
  TopicTimeGranularity,
  TopicUserExperienceVersion,
  VideoExtractionStatus,
  VideoExtractionType,
  VPCConnectionAvailabilityStatus,
  VPCConnectionResourceStatus,
} from "./enums";
import type {
  AccessControlConfiguration,
  AggregateOperation,
  DataPrepAggregationFunction,
  DataSetColumnIdMapping,
  Entity,
  FontConfiguration,
  Sheet,
  TransformOperationSource,
} from "./models_0";
import type {
  AppendOperation,
  AudioExtractionConfiguration,
  BorderStyle,
  Capabilities,
  CastColumnTypeOperation,
  CastColumnTypesOperation,
  CellValueSynonym,
  CollectiveConstant,
  ColumnGroup,
  ColumnGroupSchema,
  ColumnLevelPermissionRule,
  ColumnSchema,
  ColumnSemanticProperty,
  ColumnTag,
  ColumnToUnpivot,
  ComparativeOrder,
  ControlTitleFontConfiguration,
  CreateColumnsOperation,
  DataSetReference,
  DataSourceParameters,
  DisplayFormatOptions,
  Governance,
  ResourcePermission,
  SslProperties,
  Tag,
  TopicReference,
  VpcConnectionProperties,
} from "./models_2";

/**
 * Specifies the source of data for a destination table, including the transform operation and column mappings.
 *
 * @public
 */
export interface DestinationTableSource {
  /**
   * The identifier of the transform operation that provides data to the destination table.
   *
   * @public
   */
  TransformOperationId: string | undefined;
}

/**
 * Defines a destination table in data preparation that receives the final transformed data.
 *
 * @public
 */
export interface DestinationTable {
  /**
   * Alias for the destination table.
   *
   * @public
   */
  Alias: string | undefined;

  /**
   * The source configuration that specifies which transform operation provides data to this destination table.
   *
   * @public
   */
  Source: DestinationTableSource | undefined;
}

/**
 * Metadata for a column that is used as the input of a transform operation.
 *
 * @public
 */
export interface InputColumn {
  /**
   * The name of this column in the underlying data source.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A unique identifier for the input column.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The data type of the column.
   *
   * **Note:** `SEMISTRUCT` represents Athena's map, row, and struct data types. It is supported when using the new data preparation experience.
   *
   * @public
   */
  Type: InputColumnDataType | undefined;

  /**
   * The sub data type of the column. Sub types are only available for decimal columns that are part of a SPICE dataset.
   *
   * @public
   */
  SubType?: ColumnDataSubType | undefined;
}

/**
 * References a parent dataset that serves as a data source, including its columns and metadata.
 *
 * @public
 */
export interface ParentDataSet {
  /**
   * The Amazon Resource Name (ARN) of the parent dataset.
   *
   * @public
   */
  DataSetArn: string | undefined;

  /**
   * The list of input columns available from the parent dataset.
   *
   * @public
   */
  InputColumns: InputColumn[] | undefined;
}

/**
 * A source table that provides initial data from either a physical table or parent dataset.
 *
 * @public
 */
export interface SourceTable {
  /**
   * The identifier of the physical table that serves as the data source.
   *
   * @public
   */
  PhysicalTableId?: string | undefined;

  /**
   * A parent dataset that serves as the data source instead of a physical table.
   *
   * @public
   */
  DataSet?: ParentDataSet | undefined;
}

/**
 * Represents a date value used in filter conditions.
 *
 * @public
 */
export interface DataSetDateFilterValue {
  /**
   * A static date value used for filtering.
   *
   * @public
   */
  StaticValue?: Date | undefined;
}

/**
 * A filter condition that compares date values using operators like `BEFORE`, `AFTER`, or their inclusive variants.
 *
 * @public
 */
export interface DataSetDateComparisonFilterCondition {
  /**
   * The comparison operator to use, such as `BEFORE`, `BEFORE_OR_EQUALS_TO`, `AFTER`, or `AFTER_OR_EQUALS_TO`.
   *
   * @public
   */
  Operator: DataSetDateComparisonFilterOperator | undefined;

  /**
   * The date value to compare against.
   *
   * @public
   */
  Value?: DataSetDateFilterValue | undefined;
}

/**
 * A filter condition that filters date values within a specified range.
 *
 * @public
 */
export interface DataSetDateRangeFilterCondition {
  /**
   * The minimum date value for the range filter.
   *
   * @public
   */
  RangeMinimum?: DataSetDateFilterValue | undefined;

  /**
   * The maximum date value for the range filter.
   *
   * @public
   */
  RangeMaximum?: DataSetDateFilterValue | undefined;

  /**
   * Whether to include the minimum value in the filter range.
   *
   * @public
   */
  IncludeMinimum?: boolean | undefined;

  /**
   * Whether to include the maximum value in the filter range.
   *
   * @public
   */
  IncludeMaximum?: boolean | undefined;
}

/**
 * A filter condition for date columns, supporting both comparison and range-based filtering.
 *
 * @public
 */
export interface DataSetDateFilterCondition {
  /**
   * The name of the date column to filter.
   *
   * @public
   */
  ColumnName?: string | undefined;

  /**
   * A comparison-based filter condition for the date column.
   *
   * @public
   */
  ComparisonFilterCondition?: DataSetDateComparisonFilterCondition | undefined;

  /**
   * A range-based filter condition for the date column, filtering values between minimum and maximum dates.
   *
   * @public
   */
  RangeFilterCondition?: DataSetDateRangeFilterCondition | undefined;
}

/**
 * Represents a numeric value used in filter conditions.
 *
 * @public
 */
export interface DataSetNumericFilterValue {
  /**
   * A static numeric value used for filtering.
   *
   * @public
   */
  StaticValue?: number | undefined;
}

/**
 * A filter condition that compares numeric values using operators like `EQUALS`, `GREATER_THAN`, or `LESS_THAN`.
 *
 * @public
 */
export interface DataSetNumericComparisonFilterCondition {
  /**
   * The comparison operator to use, such as `EQUALS`, `GREATER_THAN`, `LESS_THAN`, or their variants.
   *
   * @public
   */
  Operator: DataSetNumericComparisonFilterOperator | undefined;

  /**
   * The numeric value to compare against.
   *
   * @public
   */
  Value?: DataSetNumericFilterValue | undefined;
}

/**
 * A filter condition that filters numeric values within a specified range.
 *
 * @public
 */
export interface DataSetNumericRangeFilterCondition {
  /**
   * The minimum numeric value for the range filter.
   *
   * @public
   */
  RangeMinimum?: DataSetNumericFilterValue | undefined;

  /**
   * The maximum numeric value for the range filter.
   *
   * @public
   */
  RangeMaximum?: DataSetNumericFilterValue | undefined;

  /**
   * Whether to include the minimum value in the filter range.
   *
   * @public
   */
  IncludeMinimum?: boolean | undefined;

  /**
   * Whether to include the maximum value in the filter range.
   *
   * @public
   */
  IncludeMaximum?: boolean | undefined;
}

/**
 * A filter condition for numeric columns, supporting both comparison and range-based filtering.
 *
 * @public
 */
export interface DataSetNumericFilterCondition {
  /**
   * The name of the numeric column to filter.
   *
   * @public
   */
  ColumnName?: string | undefined;

  /**
   * A comparison-based filter condition for the numeric column.
   *
   * @public
   */
  ComparisonFilterCondition?: DataSetNumericComparisonFilterCondition | undefined;

  /**
   * A range-based filter condition for the numeric column, filtering values between minimum and maximum numbers.
   *
   * @public
   */
  RangeFilterCondition?: DataSetNumericRangeFilterCondition | undefined;
}

/**
 * Represents a string value used in filter conditions.
 *
 * @public
 */
export interface DataSetStringFilterValue {
  /**
   * A static string value used for filtering.
   *
   * @public
   */
  StaticValue?: string | undefined;
}

/**
 * A filter condition that compares string values using operators like `EQUALS`, `CONTAINS`, or `STARTS_WITH`.
 *
 * @public
 */
export interface DataSetStringComparisonFilterCondition {
  /**
   * The comparison operator to use, such as `EQUALS`, `CONTAINS`, `STARTS_WITH`, `ENDS_WITH`, or their negations.
   *
   * @public
   */
  Operator: DataSetStringComparisonFilterOperator | undefined;

  /**
   * The string value to compare against.
   *
   * @public
   */
  Value?: DataSetStringFilterValue | undefined;
}

/**
 * Represents a list of string values used in filter conditions.
 *
 * @public
 */
export interface DataSetStringListFilterValue {
  /**
   * A list of static string values used for filtering.
   *
   * @public
   */
  StaticValues?: string[] | undefined;
}

/**
 * A filter condition that includes or excludes string values from a specified list.
 *
 * @public
 */
export interface DataSetStringListFilterCondition {
  /**
   * The list operator to use, either `INCLUDE` to match values in the list or `EXCLUDE` to filter out values in the list.
   *
   * @public
   */
  Operator: DataSetStringListFilterOperator | undefined;

  /**
   * The list of string values to include or exclude in the filter.
   *
   * @public
   */
  Values?: DataSetStringListFilterValue | undefined;
}

/**
 * A filter condition for string columns, supporting both comparison and list-based filtering.
 *
 * @public
 */
export interface DataSetStringFilterCondition {
  /**
   * The name of the string column to filter.
   *
   * @public
   */
  ColumnName?: string | undefined;

  /**
   * A comparison-based filter condition for the string column.
   *
   * @public
   */
  ComparisonFilterCondition?: DataSetStringComparisonFilterCondition | undefined;

  /**
   * A list-based filter condition that includes or excludes values from a specified list.
   *
   * @public
   */
  ListFilterCondition?: DataSetStringListFilterCondition | undefined;
}

/**
 * A transform operation that filters rows based on a condition.
 *
 * @public
 */
export interface FilterOperation {
  /**
   * An expression that must evaluate to a Boolean value. Rows for which the expression evaluates to true are kept in the dataset.
   *
   * @public
   */
  ConditionExpression?: string | undefined;

  /**
   * A string-based filter condition within a filter operation.
   *
   * @public
   */
  StringFilterCondition?: DataSetStringFilterCondition | undefined;

  /**
   * A numeric-based filter condition within a filter operation.
   *
   * @public
   */
  NumericFilterCondition?: DataSetNumericFilterCondition | undefined;

  /**
   * A date-based filter condition within a filter operation.
   *
   * @public
   */
  DateFilterCondition?: DataSetDateFilterCondition | undefined;
}

/**
 * A transform operation that applies one or more filter conditions.
 *
 * @public
 */
export interface FiltersOperation {
  /**
   * Alias for this operation.
   *
   * @public
   */
  Alias: string | undefined;

  /**
   * The source transform operation that provides input data for filtering.
   *
   * @public
   */
  Source: TransformOperationSource | undefined;

  /**
   * The list of filter operations to apply.
   *
   * @public
   */
  FilterOperations: FilterOperation[] | undefined;
}

/**
 * Specifies the source table and column mappings for an import table operation.
 *
 * @public
 */
export interface ImportTableOperationSource {
  /**
   * The identifier of the source table to import data from.
   *
   * @public
   */
  SourceTableId: string | undefined;

  /**
   * The mappings between source column identifiers and target column identifiers during the import.
   *
   * @public
   */
  ColumnIdMappings?: DataSetColumnIdMapping[] | undefined;
}

/**
 * A transform operation that imports data from a source table.
 *
 * @public
 */
export interface ImportTableOperation {
  /**
   * Alias for this operation.
   *
   * @public
   */
  Alias: string | undefined;

  /**
   * The source configuration that specifies which source table to import and any column mappings.
   *
   * @public
   */
  Source: ImportTableOperationSource | undefined;
}

/**
 * Specifies a mapping to override the name of an output column from a transform operation.
 *
 * @public
 */
export interface OutputColumnNameOverride {
  /**
   * The original name of the column from the source transform operation.
   *
   * @public
   */
  SourceColumnName?: string | undefined;

  /**
   * The new name to assign to the column in the output.
   *
   * @public
   */
  OutputColumnName: string | undefined;
}

/**
 * Properties that control how columns are handled for a join operand, including column name overrides.
 *
 * @public
 */
export interface JoinOperandProperties {
  /**
   * A list of column name overrides to apply to the join operand's output columns.
   *
   * @public
   */
  OutputColumnNameOverrides: OutputColumnNameOverride[] | undefined;
}

/**
 * A transform operation that combines data from two sources based on specified join conditions.
 *
 * @public
 */
export interface JoinOperation {
  /**
   * Alias for this operation.
   *
   * @public
   */
  Alias: string | undefined;

  /**
   * The left operand for the join operation.
   *
   * @public
   */
  LeftOperand: TransformOperationSource | undefined;

  /**
   * The right operand for the join operation.
   *
   * @public
   */
  RightOperand: TransformOperationSource | undefined;

  /**
   * The type of join to perform, such as `INNER`, `LEFT`, `RIGHT`, or `OUTER`.
   *
   * @public
   */
  Type: JoinOperationType | undefined;

  /**
   * The join condition that specifies how to match rows between the left and right operands.
   *
   * @public
   */
  OnClause: string | undefined;

  /**
   * Properties that control how the left operand's columns are handled in the join result.
   *
   * @public
   */
  LeftOperandProperties?: JoinOperandProperties | undefined;

  /**
   * Properties that control how the right operand's columns are handled in the join result.
   *
   * @public
   */
  RightOperandProperties?: JoinOperandProperties | undefined;
}

/**
 * Specifies a label value to be pivoted into a separate column, including the new column name and identifier.
 *
 * @public
 */
export interface PivotedLabel {
  /**
   * The label value from the source data to be pivoted.
   *
   * @public
   */
  LabelName: string | undefined;

  /**
   * The name for the new column created from this pivoted label.
   *
   * @public
   */
  NewColumnName: string | undefined;

  /**
   * A unique identifier for the new column created from this pivoted label.
   *
   * @public
   */
  NewColumnId: string | undefined;
}

/**
 * Configuration for a pivot operation, specifying which column contains labels and how to pivot them.
 *
 * @public
 */
export interface PivotConfiguration {
  /**
   * The name of the column that contains the labels to be pivoted into separate columns.
   *
   * @public
   */
  LabelColumnName?: string | undefined;

  /**
   * The list of specific label values to pivot into separate columns.
   *
   * @public
   */
  PivotedLabels: PivotedLabel[] | undefined;
}

/**
 * Configuration for how to handle value columns in pivot operations, including aggregation settings.
 *
 * @public
 */
export interface ValueColumnConfiguration {
  /**
   * The aggregation function to apply when multiple values map to the same pivoted cell.
   *
   * @public
   */
  AggregationFunction?: DataPrepAggregationFunction | undefined;
}

/**
 * A transform operation that pivots data by converting row values into columns.
 *
 * @public
 */
export interface PivotOperation {
  /**
   * Alias for this operation.
   *
   * @public
   */
  Alias: string | undefined;

  /**
   * The source transform operation that provides input data for pivoting.
   *
   * @public
   */
  Source: TransformOperationSource | undefined;

  /**
   * The list of column names to group by when performing the pivot operation.
   *
   * @public
   */
  GroupByColumnNames?: string[] | undefined;

  /**
   * Configuration for how to aggregate values when multiple rows map to the same pivoted column.
   *
   * @public
   */
  ValueColumnConfiguration: ValueColumnConfiguration | undefined;

  /**
   * Configuration that specifies which labels to pivot and how to structure the resulting columns.
   *
   * @public
   */
  PivotConfiguration: PivotConfiguration | undefined;
}

/**
 * A transform operation that projects columns. Operations that come after a projection can only refer to projected columns.
 *
 * @public
 */
export interface ProjectOperation {
  /**
   * Alias for this operation.
   *
   * @public
   */
  Alias?: string | undefined;

  /**
   * The source transform operation that provides input data for column projection.
   *
   * @public
   */
  Source?: TransformOperationSource | undefined;

  /**
   * Projected columns.
   *
   * @public
   */
  ProjectedColumns: string[] | undefined;
}

/**
 * A transform operation that renames a column.
 *
 * @public
 */
export interface RenameColumnOperation {
  /**
   * The name of the column to be renamed.
   *
   * @public
   */
  ColumnName: string | undefined;

  /**
   * The new name for the column.
   *
   * @public
   */
  NewColumnName: string | undefined;
}

/**
 * A transform operation that renames one or more columns in the dataset.
 *
 * @public
 */
export interface RenameColumnsOperation {
  /**
   * Alias for this operation.
   *
   * @public
   */
  Alias: string | undefined;

  /**
   * The source transform operation that provides input data for column renaming.
   *
   * @public
   */
  Source: TransformOperationSource | undefined;

  /**
   * The list of column rename operations to perform, specifying old and new column names.
   *
   * @public
   */
  RenameColumnOperations: RenameColumnOperation[] | undefined;
}

/**
 * A transform operation that converts columns into rows, normalizing the data structure.
 *
 * @public
 */
export interface UnpivotOperation {
  /**
   * Alias for this operation.
   *
   * @public
   */
  Alias: string | undefined;

  /**
   * The source transform operation that provides input data for unpivoting.
   *
   * @public
   */
  Source: TransformOperationSource | undefined;

  /**
   * The list of columns to unpivot from the source data.
   *
   * @public
   */
  ColumnsToUnpivot: ColumnToUnpivot[] | undefined;

  /**
   * The name for the new column that will contain the unpivoted column names.
   *
   * @public
   */
  UnpivotedLabelColumnName: string | undefined;

  /**
   * A unique identifier for the new column that will contain the unpivoted column names.
   *
   * @public
   */
  UnpivotedLabelColumnId: string | undefined;

  /**
   * The name for the new column that will contain the unpivoted values.
   *
   * @public
   */
  UnpivotedValueColumnName: string | undefined;

  /**
   * A unique identifier for the new column that will contain the unpivoted values.
   *
   * @public
   */
  UnpivotedValueColumnId: string | undefined;
}

/**
 * A step in data preparation that performs a specific operation on the data.
 *
 * @public
 */
export interface TransformStep {
  /**
   * A transform step that brings data from a source table.
   *
   * @public
   */
  ImportTableStep?: ImportTableOperation | undefined;

  /**
   * A transform operation that projects columns. Operations that come after a projection can only refer to projected columns.
   *
   * @public
   */
  ProjectStep?: ProjectOperation | undefined;

  /**
   * A transform step that applies filter conditions.
   *
   * @public
   */
  FiltersStep?: FiltersOperation | undefined;

  /**
   * A transform operation that creates calculated columns. Columns created in one such operation form a lexical closure.
   *
   * @public
   */
  CreateColumnsStep?: CreateColumnsOperation | undefined;

  /**
   * A transform step that changes the names of one or more columns.
   *
   * @public
   */
  RenameColumnsStep?: RenameColumnsOperation | undefined;

  /**
   * A transform step that changes the data types of one or more columns.
   *
   * @public
   */
  CastColumnTypesStep?: CastColumnTypesOperation | undefined;

  /**
   * A transform step that combines data from two sources based on specified join conditions.
   *
   * @public
   */
  JoinStep?: JoinOperation | undefined;

  /**
   * A transform step that groups data and applies aggregation functions to calculate summary values.
   *
   * @public
   */
  AggregateStep?: AggregateOperation | undefined;

  /**
   * A transform step that converts row values into columns to reshape the data structure.
   *
   * @public
   */
  PivotStep?: PivotOperation | undefined;

  /**
   * A transform step that converts columns into rows to normalize the data structure.
   *
   * @public
   */
  UnpivotStep?: UnpivotOperation | undefined;

  /**
   * A transform step that combines rows from multiple sources by stacking them vertically.
   *
   * @public
   */
  AppendStep?: AppendOperation | undefined;
}

/**
 * Configuration for data preparation operations, defining the complete pipeline from source tables through transformations to destination tables.
 *
 * @public
 */
export interface DataPrepConfiguration {
  /**
   * A map of source tables that provide information about underlying sources.
   *
   * @public
   */
  SourceTableMap: Record<string, SourceTable> | undefined;

  /**
   * A map of transformation steps that process the data.
   *
   * @public
   */
  TransformStepMap: Record<string, TransformStep> | undefined;

  /**
   * A map of destination tables that receive the final prepared data.
   *
   * @public
   */
  DestinationTableMap: Record<string, DestinationTable> | undefined;
}

/**
 * The default values of a date time parameter.
 *
 * @public
 */
export interface DateTimeDatasetParameterDefaultValues {
  /**
   * A list of static default values for a given date time parameter.
   *
   * @public
   */
  StaticValues?: Date[] | undefined;
}

/**
 * A date time parameter for a dataset.
 *
 * @public
 */
export interface DateTimeDatasetParameter {
  /**
   * An identifier for the parameter that is created in the dataset.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The name of the date time parameter that is created in the dataset.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The value type of the dataset parameter. Valid values are `single value` or `multi value`.
   *
   * @public
   */
  ValueType: DatasetParameterValueType | undefined;

  /**
   * The time granularity of the date time parameter.
   *
   * @public
   */
  TimeGranularity?: TimeGranularity | undefined;

  /**
   * A list of default values for a given date time parameter. This structure only accepts static values.
   *
   * @public
   */
  DefaultValues?: DateTimeDatasetParameterDefaultValues | undefined;
}

/**
 * The default values of a decimal parameter.
 *
 * @public
 */
export interface DecimalDatasetParameterDefaultValues {
  /**
   * A list of static default values for a given decimal parameter.
   *
   * @public
   */
  StaticValues?: number[] | undefined;
}

/**
 * A decimal parameter for a dataset.
 *
 * @public
 */
export interface DecimalDatasetParameter {
  /**
   * An identifier for the decimal parameter created in the dataset.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The name of the decimal parameter that is created in the dataset.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The value type of the dataset parameter. Valid values are `single value` or `multi value`.
   *
   * @public
   */
  ValueType: DatasetParameterValueType | undefined;

  /**
   * A list of default values for a given decimal parameter. This structure only accepts static values.
   *
   * @public
   */
  DefaultValues?: DecimalDatasetParameterDefaultValues | undefined;
}

/**
 * The default values of an integer parameter.
 *
 * @public
 */
export interface IntegerDatasetParameterDefaultValues {
  /**
   * A list of static default values for a given integer parameter.
   *
   * @public
   */
  StaticValues?: number[] | undefined;
}

/**
 * An integer parameter for a dataset.
 *
 * @public
 */
export interface IntegerDatasetParameter {
  /**
   * An identifier for the integer parameter created in the dataset.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The name of the integer parameter that is created in the dataset.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The value type of the dataset parameter. Valid values are `single value` or `multi value`.
   *
   * @public
   */
  ValueType: DatasetParameterValueType | undefined;

  /**
   * A list of default values for a given integer parameter. This structure only accepts static values.
   *
   * @public
   */
  DefaultValues?: IntegerDatasetParameterDefaultValues | undefined;
}

/**
 * The default values of a string parameter.
 *
 * @public
 */
export interface StringDatasetParameterDefaultValues {
  /**
   * A list of static default values for a given string parameter.
   *
   * @public
   */
  StaticValues?: string[] | undefined;
}

/**
 * A string parameter for a dataset.
 *
 * @public
 */
export interface StringDatasetParameter {
  /**
   * An identifier for the string parameter that is created in the dataset.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The name of the string parameter that is created in the dataset.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The value type of the dataset parameter. Valid values are `single value` or `multi value`.
   *
   * @public
   */
  ValueType: DatasetParameterValueType | undefined;

  /**
   * A list of default values for a given string dataset parameter type. This structure only accepts static values.
   *
   * @public
   */
  DefaultValues?: StringDatasetParameterDefaultValues | undefined;
}

/**
 * A parameter that is created in a dataset. The parameter can be a string, integer, decimal, or datetime data type.
 *
 * @public
 */
export interface DatasetParameter {
  /**
   * A string parameter that is created in the dataset.
   *
   * @public
   */
  StringDatasetParameter?: StringDatasetParameter | undefined;

  /**
   * A decimal parameter that is created in the dataset.
   *
   * @public
   */
  DecimalDatasetParameter?: DecimalDatasetParameter | undefined;

  /**
   * An integer parameter that is created in the dataset.
   *
   * @public
   */
  IntegerDatasetParameter?: IntegerDatasetParameter | undefined;

  /**
   * A date time parameter that is created in the dataset.
   *
   * @public
   */
  DateTimeDatasetParameter?: DateTimeDatasetParameter | undefined;
}

/**
 * The usage configuration to apply to child datasets that reference this dataset as a source.
 *
 * @public
 */
export interface DataSetUsageConfiguration {
  /**
   * An option that controls whether a child dataset of a direct query can use this dataset as a source.
   *
   * @public
   */
  DisableUseAsDirectQuerySource?: boolean | undefined;

  /**
   * An option that controls whether a child dataset that's stored in Quick Sight can use this dataset as a source.
   *
   * @public
   */
  DisableUseAsImportedSource?: boolean | undefined;
}

/**
 * A FieldFolder element is a folder that contains fields and nested subfolders.
 *
 * @public
 */
export interface FieldFolder {
  /**
   * The description for a field folder.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * A folder has a list of columns. A column can only be in one folder.
   *
   * @public
   */
  columns?: string[] | undefined;
}

/**
 * The configuration that overrides the existing default values for a dataset parameter that is inherited from another dataset.
 *
 * @public
 */
export interface NewDefaultValues {
  /**
   * A list of static default values for a given string parameter.
   *
   * @public
   */
  StringStaticValues?: string[] | undefined;

  /**
   * A list of static default values for a given decimal parameter.
   *
   * @public
   */
  DecimalStaticValues?: number[] | undefined;

  /**
   * A list of static default values for a given date time parameter.
   *
   * @public
   */
  DateTimeStaticValues?: Date[] | undefined;

  /**
   * A list of static default values for a given integer parameter.
   *
   * @public
   */
  IntegerStaticValues?: number[] | undefined;
}

/**
 * A transform operation that overrides the dataset parameter values that are defined in another dataset.
 *
 * @public
 */
export interface OverrideDatasetParameterOperation {
  /**
   * The name of the parameter to be overridden with different values.
   *
   * @public
   */
  ParameterName: string | undefined;

  /**
   * The new name for the parameter.
   *
   * @public
   */
  NewParameterName?: string | undefined;

  /**
   * The new default values for the parameter.
   *
   * @public
   */
  NewDefaultValues?: NewDefaultValues | undefined;
}

/**
 * A transform operation that tags a column with additional information.
 *
 * @public
 */
export interface TagColumnOperation {
  /**
   * The column that this operation acts on.
   *
   * @public
   */
  ColumnName: string | undefined;

  /**
   * The dataset column tag, currently only used for geospatial type tagging.
   *
   * > **Note:** This is not tags for the Amazon Web Services tagging feature.
   *
   * @public
   */
  Tags: ColumnTag[] | undefined;
}

/**
 * A transform operation that removes tags associated with a column.
 *
 * @public
 */
export interface UntagColumnOperation {
  /**
   * The column that this operation acts on.
   *
   * @public
   */
  ColumnName: string | undefined;

  /**
   * The column tags to remove from this column.
   *
   * @public
   */
  TagNames: ColumnTagName[] | undefined;
}

/**
 * A data transformation on a logical table. This is a variant type structure. For this structure to be valid, only one of the attributes can be non-null.
 *
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
   * An operation that projects columns. Operations that come after a projection can only refer to projected columns.
   *
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
   * An operation that filters rows based on some condition.
   *
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
   * An operation that creates calculated columns. Columns created in one such operation form a lexical closure.
   *
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
   * An operation that renames a column.
   *
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
   * A transform operation that casts a column to a different type.
   *
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
   * An operation that tags a column with additional information.
   *
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
   * A transform operation that removes tags associated with a column.
   *
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
   * A transform operation that overrides the dataset parameter values that are defined in another dataset.
   *
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
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
}

/**
 * Properties associated with the columns participating in a join.
 *
 * @public
 */
export interface JoinKeyProperties {
  /**
   * A value that indicates that a row in a table is uniquely identified by the columns in a join key. This is used by Quick Sight to optimize query performance.
   *
   * @public
   */
  UniqueKey?: boolean | undefined;
}

/**
 * The instructions associated with a join.
 *
 * @public
 */
export interface JoinInstruction {
  /**
   * The operand on the left side of a join.
   *
   * @public
   */
  LeftOperand: string | undefined;

  /**
   * The operand on the right side of a join.
   *
   * @public
   */
  RightOperand: string | undefined;

  /**
   * Join key properties of the left operand.
   *
   * @public
   */
  LeftJoinKeyProperties?: JoinKeyProperties | undefined;

  /**
   * Join key properties of the right operand.
   *
   * @public
   */
  RightJoinKeyProperties?: JoinKeyProperties | undefined;

  /**
   * The type of join that it is.
   *
   * @public
   */
  Type: JoinType | undefined;

  /**
   * The join instructions provided in the `ON` clause of a join.
   *
   * @public
   */
  OnClause: string | undefined;
}

/**
 * Information about the source of a logical table. This is a variant type structure. For this structure to be valid, only one of the attributes can be non-null.
 *
 * @public
 */
export interface LogicalTableSource {
  /**
   * Specifies the result of a join of two logical tables.
   *
   * @public
   */
  JoinInstruction?: JoinInstruction | undefined;

  /**
   * Physical table ID.
   *
   * @public
   */
  PhysicalTableId?: string | undefined;

  /**
   * The Amazon Resource Number (ARN) of the parent dataset.
   *
   * @public
   */
  DataSetArn?: string | undefined;
}

/**
 * A *logical table* is a unit that joins and that data transformations operate on. A logical table has a source, which can be either a physical table or result of a join. When a logical table points to a physical table, the logical table acts as a mutable copy of that physical table through transform operations.
 *
 * @public
 */
export interface LogicalTable {
  /**
   * A display name for the logical table.
   *
   * @public
   */
  Alias: string | undefined;

  /**
   * Transform operations that act on this logical table. For this structure to be valid, only one of the attributes can be non-null.
   *
   * @public
   */
  DataTransforms?: TransformOperation[] | undefined;

  /**
   * Source of this logical table.
   *
   * @public
   */
  Source: LogicalTableSource | undefined;
}

/**
 * A `UniqueKey` configuration that references a dataset column.
 *
 * @public
 */
export interface UniqueKey {
  /**
   * The name of the column that is referenced in the `UniqueKey` configuration.
   *
   * @public
   */
  ColumnNames: string[] | undefined;
}

/**
 * The configuration for the performance optimization of the dataset that contains a `UniqueKey` configuration.
 *
 * @public
 */
export interface PerformanceConfiguration {
  /**
   * A `UniqueKey` configuration.
   *
   * @public
   */
  UniqueKeys?: UniqueKey[] | undefined;
}

/**
 * A physical table type built from the results of the custom SQL query.
 *
 * @public
 */
export interface CustomSql {
  /**
   * The Amazon Resource Name (ARN) of the data source.
   *
   * @public
   */
  DataSourceArn: string | undefined;

  /**
   * A display name for the SQL query result.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The SQL query.
   *
   * @public
   */
  SqlQuery: string | undefined;

  /**
   * The column schema from the SQL query result set.
   *
   * @public
   */
  Columns?: InputColumn[] | undefined;
}

/**
 * Information about the format for a source file or files.
 *
 * @public
 */
export interface UploadSettings {
  /**
   * File format.
   *
   * @public
   */
  Format?: FileFormat | undefined;

  /**
   * A row number to start reading data from.
   *
   * @public
   */
  StartFromRow?: number | undefined;

  /**
   * Whether the file has a header row, or the files each have a header row.
   *
   * @public
   */
  ContainsHeader?: boolean | undefined;

  /**
   * Text qualifier.
   *
   * @public
   */
  TextQualifier?: TextQualifier | undefined;

  /**
   * The delimiter between values in the file.
   *
   * @public
   */
  Delimiter?: string | undefined;

  /**
   * A custom cell address range for Excel files, specifying which cells to import from the spreadsheet.
   *
   * @public
   */
  CustomCellAddressRange?: string | undefined;
}

/**
 * A physical table type that contains the schema and upload settings for a file-based data source.
 *
 * @public
 */
export interface FileSource {
  /**
   * The Amazon Resource Name (ARN) for the data source.
   *
   * @public
   */
  DataSourceArn: string | undefined;

  /**
   * Information about the format for the source file.
   *
   * @public
   */
  UploadSettings?: UploadSettings | undefined;

  /**
   * The zero-based index of the sheet to use within the file. For files that contain multiple sheets, this identifies which sheet to read. Files that contain a single sheet, or that have no concept of sheets, use sheet 0.
   *
   * @public
   */
  SheetIndex: number | undefined;

  /**
   * The column schema of the file.
   *
   * @public
   */
  InputColumns: InputColumn[] | undefined;
}

/**
 * A physical table type for relational data sources.
 *
 * @public
 */
export interface RelationalTable {
  /**
   * The Amazon Resource Name (ARN) for the data source.
   *
   * @public
   */
  DataSourceArn: string | undefined;

  /**
   * The catalog associated with a table.
   *
   * @public
   */
  Catalog?: string | undefined;

  /**
   * The schema name. This name applies to certain relational database engines.
   *
   * @public
   */
  Schema?: string | undefined;

  /**
   * The name of the relational table.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The column schema of the table.
   *
   * @public
   */
  InputColumns: InputColumn[] | undefined;
}

/**
 * A physical table type for an S3 data source.
 *
 * @public
 */
export interface S3Source {
  /**
   * The Amazon Resource Name (ARN) for the data source.
   *
   * @public
   */
  DataSourceArn: string | undefined;

  /**
   * Information about the format for the S3 source file or files.
   *
   * @public
   */
  UploadSettings?: UploadSettings | undefined;

  /**
   * A physical table type for an S3 data source.
   *
   * > **Note:** For files that aren't JSON, only `STRING` data types are supported in input columns.
   *
   * @public
   */
  InputColumns: InputColumn[] | undefined;
}

/**
 * An element in the hierarchical path to a table within a data source, containing both name and identifier.
 *
 * @public
 */
export interface TablePathElement {
  /**
   * The name of the path element.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The unique identifier of the path element.
   *
   * @public
   */
  Id?: string | undefined;
}

/**
 * A table from a Software-as-a-Service (SaaS) data source, including connection details and column definitions.
 *
 * @public
 */
export interface SaaSTable {
  /**
   * The Amazon Resource Name (ARN) of the SaaS data source.
   *
   * @public
   */
  DataSourceArn: string | undefined;

  /**
   * The hierarchical path to the table within the SaaS data source.
   *
   * @public
   */
  TablePath: TablePathElement[] | undefined;

  /**
   * The list of input columns available from the SaaS table.
   *
   * @public
   */
  InputColumns: InputColumn[] | undefined;
}

/**
 * A view of a data source that contains information about the shape of the data in the underlying source. This is a variant type structure. For this structure to be valid, only one of the attributes can be non-null.
 *
 * @public
 */
export type PhysicalTable =
  | PhysicalTable.CustomSqlMember
  | PhysicalTable.FileSourceMember
  | PhysicalTable.RelationalTableMember
  | PhysicalTable.S3SourceMember
  | PhysicalTable.SaaSTableMember
  | PhysicalTable.$UnknownMember;

/**
 * @public
 */
export namespace PhysicalTable {
  /**
   * A physical table type for relational data sources.
   *
   * @public
   */
  export interface RelationalTableMember {
    RelationalTable: RelationalTable;
    CustomSql?: never;
    S3Source?: never;
    SaaSTable?: never;
    FileSource?: never;
    $unknown?: never;
  }

  /**
   * A physical table type built from the results of the custom SQL query.
   *
   * @public
   */
  export interface CustomSqlMember {
    RelationalTable?: never;
    CustomSql: CustomSql;
    S3Source?: never;
    SaaSTable?: never;
    FileSource?: never;
    $unknown?: never;
  }

  /**
   * A physical table type for an S3 data source.
   *
   * @public
   */
  export interface S3SourceMember {
    RelationalTable?: never;
    CustomSql?: never;
    S3Source: S3Source;
    SaaSTable?: never;
    FileSource?: never;
    $unknown?: never;
  }

  /**
   * A physical table type for Software-as-a-Service (SaaS) sources.
   *
   * @public
   */
  export interface SaaSTableMember {
    RelationalTable?: never;
    CustomSql?: never;
    S3Source?: never;
    SaaSTable: SaaSTable;
    FileSource?: never;
    $unknown?: never;
  }

  /**
   * A physical table type for a file data source.
   *
   * @public
   */
  export interface FileSourceMember {
    RelationalTable?: never;
    CustomSql?: never;
    S3Source?: never;
    SaaSTable?: never;
    FileSource: FileSource;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    RelationalTable?: never;
    CustomSql?: never;
    S3Source?: never;
    SaaSTable?: never;
    FileSource?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    RelationalTable: (value: RelationalTable) => T;
    CustomSql: (value: CustomSql) => T;
    S3Source: (value: S3Source) => T;
    SaaSTable: (value: SaaSTable) => T;
    FileSource: (value: FileSource) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Information about a dataset that contains permissions for row-level security (RLS). The permissions dataset maps fields to users or groups. For more information, see [Using Row-Level Security (RLS) to Restrict Access to a Dataset](https://docs.aws.amazon.com/quicksight/latest/user/restrict-access-to-a-data-set-using-row-level-security.html) in the *Quick Sight User Guide*.
 *
 * The option to deny permissions by setting `PermissionPolicy` to `DENY_ACCESS` is not supported for new RLS datasets.
 *
 * @public
 */
export interface RowLevelPermissionDataSet {
  /**
   * The namespace associated with the dataset that contains permissions for RLS.
   *
   * @public
   */
  Namespace?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the dataset that contains permissions for RLS.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The type of permissions to use when interpreting the permissions for RLS. `DENY_ACCESS` is included for backward compatibility only.
   *
   * @public
   */
  PermissionPolicy: RowLevelPermissionPolicy | undefined;

  /**
   * The user or group rules associated with the dataset that contains permissions for RLS.
   *
   * By default, `FormatVersion` is `VERSION_1`. When `FormatVersion` is `VERSION_1`, `UserName` and `GroupName` are required. When `FormatVersion` is `VERSION_2`, `UserARN` and `GroupARN` are required, and `Namespace` must not exist.
   *
   * @public
   */
  FormatVersion?: RowLevelPermissionFormatVersion | undefined;

  /**
   * The status of the row-level security permission dataset. If enabled, the status is `ENABLED`. If disabled, the status is `DISABLED`.
   *
   * @public
   */
  Status?: Status | undefined;
}

/**
 * A set of rules associated with a tag.
 *
 * @public
 */
export interface RowLevelPermissionTagRule {
  /**
   * The unique key for a tag.
   *
   * @public
   */
  TagKey: string | undefined;

  /**
   * The column name that a tag key is assigned to.
   *
   * @public
   */
  ColumnName: string | undefined;

  /**
   * A string that you want to use to delimit the values when you pass the values at run time. For example, you can delimit the values with a comma.
   *
   * @public
   */
  TagMultiValueDelimiter?: string | undefined;

  /**
   * A string that you want to use to filter by all the values in a column in the dataset and don’t want to list the values one by one. For example, you can use an asterisk as your match all value.
   *
   * @public
   */
  MatchAllValue?: string | undefined;
}

/**
 * The configuration of tags on a dataset to set row-level security.
 *
 * @public
 */
export interface RowLevelPermissionTagConfiguration {
  /**
   * The status of row-level security tags. If enabled, the status is `ENABLED`. If disabled, the status is `DISABLED`.
   *
   * @public
   */
  Status?: Status | undefined;

  /**
   * A set of rules associated with row-level security, such as the tag names and columns that they are assigned to.
   *
   * @public
   */
  TagRules: RowLevelPermissionTagRule[] | undefined;

  /**
   * A list of tag configuration rules to apply to a dataset. All tag configurations have the OR condition. Tags within each tile will be joined (AND). At least one rule in this structure must have all tag values assigned to it to apply Row-level security (RLS) to the dataset.
   *
   * @public
   */
  TagRuleConfigurations?: string[][] | undefined;
}

/**
 * Metadata for an uploaded document associated with a custom instruction.
 *
 * @public
 */
export interface UploadedDocumentMetadata {
  /**
   * The name of the uploaded document.
   *
   * @public
   */
  Name?: string | undefined;
}

/**
 * An inline custom instruction with text content and optional file upload metadata.
 *
 * @public
 */
export interface InlineCustomInstruction {
  /**
   * The instruction text content.
   *
   * @public
   */
  InstructionText: string | undefined;

  /**
   * Metadata about an uploaded document associated with this instruction.
   *
   * @public
   */
  UploadedDocumentMetadata?: UploadedDocumentMetadata | undefined;
}

/**
 * A custom instruction that provides guidance on how the dataset should be consumed.
 *
 * @public
 */
export interface CustomInstruction {
  /**
   * An inline custom instruction containing text and optional uploaded document metadata.
   *
   * @public
   */
  InlineCustomInstruction?: InlineCustomInstruction | undefined;
}

/**
 * A description structure for dataset-level semantic metadata.
 *
 * @public
 */
export interface DataSetSemanticDescription {
  /**
   * The descriptive text for the dataset.
   *
   * @public
   */
  Text: string | undefined;
}

/**
 * Semantic metadata for a dataset, including a description and custom instructions.
 *
 * @public
 */
export interface DataSetSemanticMetadata {
  /**
   * A description of the dataset.
   *
   * @public
   */
  Description?: DataSetSemanticDescription | undefined;

  /**
   * A list of custom instructions that guide how the dataset should be consumed.
   *
   * @public
   */
  CustomInstructions?: CustomInstruction[] | undefined;
}

/**
 * Configuration for row level security.
 *
 * @public
 */
export interface RowLevelPermissionConfiguration {
  /**
   * The configuration of tags on a dataset to set row-level security.
   *
   * @public
   */
  TagConfiguration?: RowLevelPermissionTagConfiguration | undefined;

  /**
   * Information about a dataset that contains permissions for row-level security (RLS). The permissions dataset maps fields to users or groups. For more information, see [Using Row-Level Security (RLS) to Restrict Access to a Dataset](https://docs.aws.amazon.com/quicksight/latest/user/restrict-access-to-a-data-set-using-row-level-security.html) in the *Quick Sight User Guide*.
   *
   * The option to deny permissions by setting `PermissionPolicy` to `DENY_ACCESS` is not supported for new RLS datasets.
   *
   * @public
   */
  RowLevelPermissionDataSet?: RowLevelPermissionDataSet | undefined;
}

/**
 * Semantic metadata shared across one or more columns.
 *
 * @public
 */
export interface SharedColumnSemanticMetadata {
  /**
   * The names of the columns this metadata applies to.
   *
   * @public
   */
  ColumnNames?: string[] | undefined;

  /**
   * The semantic properties for the specified columns.
   *
   * @public
   */
  ColumnProperties: ColumnSemanticProperty[] | undefined;
}

/**
 * Column-level semantic metadata for a semantic table.
 *
 * @public
 */
export interface TableSemanticMetadata {
  /**
   * A list of column semantic metadata entries.
   *
   * @public
   */
  ColumnMetadata?: SharedColumnSemanticMetadata[] | undefined;
}

/**
 * A semantic table that represents the final analytical structure of the data.
 *
 * @public
 */
export interface SemanticTable {
  /**
   * Alias for the semantic table.
   *
   * @public
   */
  Alias: string | undefined;

  /**
   * The identifier of the destination table from data preparation that provides data to this semantic table.
   *
   * @public
   */
  DestinationTableId: string | undefined;

  /**
   * Configuration for row level security that control data access for this semantic table.
   *
   * @public
   */
  RowLevelPermissionConfiguration?: RowLevelPermissionConfiguration | undefined;

  /**
   * The column-level semantic metadata for this semantic table.
   *
   * @public
   */
  SemanticMetadata?: TableSemanticMetadata | undefined;
}

/**
 * Configuration for the semantic model that defines how prepared data is structured for analysis and reporting.
 *
 * @public
 */
export interface SemanticModelConfiguration {
  /**
   * A map of semantic tables that define the analytical structure.
   *
   * @public
   */
  TableMap?: Record<string, SemanticTable> | undefined;

  /**
   * The dataset-level semantic metadata, including a description and custom instructions.
   *
   * @public
   */
  SemanticMetadata?: DataSetSemanticMetadata[] | undefined;
}

/**
 * @public
 */
export interface CreateDataSetRequest {
  /**
   * The Amazon Web Services account ID.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * An ID for the dataset that you want to create. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.
   *
   * @public
   */
  DataSetId: string | undefined;

  /**
   * The display name for the dataset.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * Declares the physical tables that are available in the underlying data sources.
   *
   * @public
   */
  PhysicalTableMap: Record<string, PhysicalTable> | undefined;

  /**
   * Configures the combination and transformation of the data from the physical tables. This parameter is used with the legacy data preparation experience.
   *
   * @deprecated (since 2025-10-23) Only used in the legacy data preparation experience.
   * @public
   */
  LogicalTableMap?: Record<string, LogicalTable> | undefined;

  /**
   * Indicates whether you want to import the data into SPICE.
   *
   * @public
   */
  ImportMode: DataSetImportMode | undefined;

  /**
   * Groupings of columns that work together in certain Amazon Quick Sight features. Currently, only geospatial hierarchy is supported.
   *
   * @public
   */
  ColumnGroups?: ColumnGroup[] | undefined;

  /**
   * The folder that contains fields and nested subfolders for your dataset.
   *
   * @public
   */
  FieldFolders?: Record<string, FieldFolder> | undefined;

  /**
   * A list of resource permissions on the dataset.
   *
   * @public
   */
  Permissions?: ResourcePermission[] | undefined;

  /**
   * The row-level security configuration for the data that you want to create. This parameter is used with the legacy data preparation experience.
   *
   * @deprecated (since 2025-10-23) Only used in the legacy data preparation experience.
   * @public
   */
  RowLevelPermissionDataSet?: RowLevelPermissionDataSet | undefined;

  /**
   * The configuration of tags on a dataset to set row-level security. Row-level security tags are currently supported for anonymous embedding only. This parameter is used with the legacy data preparation experience.
   *
   * @deprecated (since 2025-10-23) Only used in the legacy data preparation experience.
   * @public
   */
  RowLevelPermissionTagConfiguration?: RowLevelPermissionTagConfiguration | undefined;

  /**
   * A set of one or more definitions of a `ColumnLevelPermissionRule`.
   *
   * @public
   */
  ColumnLevelPermissionRules?: ColumnLevelPermissionRule[] | undefined;

  /**
   * Contains a map of the key-value pairs for the resource tag or tags assigned to the dataset.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The usage configuration to apply to child datasets that reference this dataset as a source.
   *
   * @public
   */
  DataSetUsageConfiguration?: DataSetUsageConfiguration | undefined;

  /**
   * The parameter declarations of the dataset.
   *
   * @public
   */
  DatasetParameters?: DatasetParameter[] | undefined;

  /**
   * When you create the dataset, Amazon Quick Sight adds the dataset to these folders.
   *
   * @public
   */
  FolderArns?: string[] | undefined;

  /**
   * The configuration for the performance optimization of the dataset that contains a `UniqueKey` configuration.
   *
   * @public
   */
  PerformanceConfiguration?: PerformanceConfiguration | undefined;

  /**
   * The usage of the dataset. `RLS_RULES` must be specified for RLS permission datasets.
   *
   * @public
   */
  UseAs?: DataSetUseAs | undefined;

  /**
   * The data preparation configuration for the dataset. This configuration defines the source tables, transformation steps, and destination tables used to prepare the data. Required when using the new data preparation experience.
   *
   * @public
   */
  DataPrepConfiguration?: DataPrepConfiguration | undefined;

  /**
   * The semantic model configuration for the dataset. This configuration defines how the prepared data is structured for an analysis, including table mappings and row-level security configurations. Required when using the new data preparation experience.
   *
   * @public
   */
  SemanticModelConfiguration?: SemanticModelConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateDataSetResponse {
  /**
   * The Amazon Resource Name (ARN) of the dataset.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The ID for the dataset that you want to create. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.
   *
   * @public
   */
  DataSetId?: string | undefined;

  /**
   * The ARN for the ingestion, which is triggered as a result of dataset creation if the import mode is SPICE.
   *
   * @public
   */
  IngestionArn?: string | undefined;

  /**
   * The ID of the ingestion, which is triggered as a result of dataset creation if the import mode is SPICE.
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
 * The combination of user name and password that are used as credentials.
 *
 * @public
 */
export interface CredentialPair {
  /**
   * User name.
   *
   * @public
   */
  Username: string | undefined;

  /**
   * Password.
   *
   * @public
   */
  Password: string | undefined;

  /**
   * A set of alternate data source parameters that you want to share for these credentials. The credentials are applied in tandem with the data source parameters when you copy a data source by using a create or update request. The API operation compares the `DataSourceParameters` structure that's in the request with the structures in the `AlternateDataSourceParameters` allow list. If the structures are an exact match, the request is allowed to use the new data source with the existing credentials. If the `AlternateDataSourceParameters` list is null, the `DataSourceParameters` originally used with these `Credentials` is automatically allowed.
   *
   * @public
   */
  AlternateDataSourceParameters?: DataSourceParameters[] | undefined;
}

/**
 * The combination of username, private key and passphrase that are used as credentials.
 *
 * @public
 */
export interface KeyPairCredentials {
  /**
   * Username
   *
   * @public
   */
  KeyPairUsername: string | undefined;

  /**
   * PrivateKey
   *
   * @public
   */
  PrivateKey: string | undefined;

  /**
   * PrivateKeyPassphrase
   *
   * @public
   */
  PrivateKeyPassphrase?: string | undefined;
}

/**
 * The OAuth 2.0 client credentials used for authenticating a data source connection. Use this structure to provide a client ID, client secret, and username directly instead of referencing a secret stored in Amazon Secrets Manager. This structure supports data sources that use two-legged OAuth (2LO) authentication, such as Snowflake.
 *
 * @public
 */
export interface OAuthClientCredentials {
  /**
   * The client ID of the OAuth 2.0 application that is registered with the data source provider.
   *
   * @public
   */
  ClientId?: string | undefined;

  /**
   * The client secret of the OAuth 2.0 application that is registered with the data source provider.
   *
   * @public
   */
  ClientSecret?: string | undefined;

  /**
   * The username of the account that is used for OAuth 2.0 client credentials authentication with the data source provider.
   *
   * @public
   */
  Username?: string | undefined;
}

/**
 * The client credentials for connecting to a Microsoft OneDrive data source using two-legged OAuth (2LO) certificate-based authentication. OneDrive connections access files stored in your OneDrive storage. The tenant ID and client ID are supplied through `OneDriveParameters`.
 *
 * @public
 */
export interface OneDriveClientCredentials {
  /**
   * The Amazon Resource Name (ARN) of the AWS Key Management Service (AWS KMS) key used to encrypt the OneDrive certificate credentials. This field is required.
   *
   * @public
   */
  KmsKeyArn: string | undefined;

  /**
   * The thumbprint of the certificate used for two-legged OAuth (2LO) authentication to OneDrive. This field is required.
   *
   * @public
   */
  CertThumbprint: string | undefined;
}

/**
 * The service account credentials used for Google Workspace domain-wide delegation. Use this structure when you authenticate a data source connection using domain-wide delegation across your Google Workspace domain.
 *
 * @public
 */
export interface ServiceAccountCredentials {
  /**
   * The email address of the Google Workspace administrator account that the service account impersonates through domain-wide delegation. This field is required.
   *
   * @public
   */
  AdminAccountEmail: string | undefined;

  /**
   * The private key of the Google service account used for domain-wide delegation. This field is required.
   *
   * @public
   */
  ServiceAccountPrivateKey: string | undefined;

  /**
   * The client email address of the Google service account used for domain-wide delegation. This field is required.
   *
   * @public
   */
  ClientEmail: string | undefined;
}

/**
 * The client credentials for connecting to a Microsoft SharePoint data source using two-legged OAuth (2LO) certificate-based authentication. SharePoint connections access documents stored in SharePoint sites and libraries. The tenant ID and client ID are supplied through `SharePointParameters`.
 *
 * @public
 */
export interface SharePointClientCredentials {
  /**
   * The Amazon Resource Name (ARN) of the AWS Key Management Service (AWS KMS) key used to encrypt the SharePoint certificate credentials. This field is required.
   *
   * @public
   */
  KmsKeyArn: string | undefined;

  /**
   * The thumbprint of the certificate used for two-legged OAuth (2LO) authentication to SharePoint. This field is required.
   *
   * @public
   */
  CertThumbprint: string | undefined;
}

/**
 * The credentials for authenticating with a web proxy server.
 *
 * @public
 */
export interface WebProxyCredentials {
  /**
   * The username for authenticating with the web proxy server.
   *
   * @public
   */
  WebProxyUsername: string | undefined;

  /**
   * The password for authenticating with the web proxy server.
   *
   * @public
   */
  WebProxyPassword: string | undefined;
}

/**
 * Data source credentials. This is a variant type structure. For this structure to be valid, only one of the attributes can be non-null.
 *
 * @public
 */
export interface DataSourceCredentials {
  /**
   * Credential pair. For more information, see `CredentialPair`.
   *
   * @public
   */
  CredentialPair?: CredentialPair | undefined;

  /**
   * The Amazon Resource Name (ARN) of a data source that has the credential pair that you want to use. When `CopySourceArn` is not null, the credential pair from the data source in the ARN is used as the credentials for the `DataSourceCredentials` structure.
   *
   * @public
   */
  CopySourceArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the secret associated with the data source in Amazon Secrets Manager.
   *
   * @public
   */
  SecretArn?: string | undefined;

  /**
   * The credentials for connecting using key-pair.
   *
   * @public
   */
  KeyPairCredentials?: KeyPairCredentials | undefined;

  /**
   * The credentials for connecting through a web proxy server.
   *
   * @public
   */
  WebProxyCredentials?: WebProxyCredentials | undefined;

  /**
   * The OAuth client credentials for connecting to a data source using OAuth 2.0 client credentials (2LO) authentication. For more information, see `OAuthClientCredentials`.
   *
   * @public
   */
  OAuthClientCredentials?: OAuthClientCredentials | undefined;

  /**
   * The service account credentials for connecting to a data source that uses Google Workspace domain-wide delegation.
   *
   * @public
   */
  ServiceAccountCredentials?: ServiceAccountCredentials | undefined;

  /**
   * The client credentials for connecting to a Microsoft SharePoint data source using two-legged OAuth (2LO) certificate-based authentication.
   *
   * @public
   */
  SharePointClientCredentials?: SharePointClientCredentials | undefined;

  /**
   * The client credentials for connecting to a Microsoft OneDrive data source using two-legged OAuth (2LO) certificate-based authentication.
   *
   * @public
   */
  OneDriveClientCredentials?: OneDriveClientCredentials | undefined;
}

/**
 * @public
 */
export interface CreateDataSourceRequest {
  /**
   * The Amazon Web Services account ID.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * An ID for the data source. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.
   *
   * @public
   */
  DataSourceId: string | undefined;

  /**
   * A display name for the data source.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The type of the data source. To return a list of all data sources, use `ListDataSources`.
   *
   * Use `AMAZON_ELASTICSEARCH` for Amazon OpenSearch Service.
   *
   * @public
   */
  Type: DataSourceType | undefined;

  /**
   * The parameters that Amazon Quick Sight uses to connect to your underlying source.
   *
   * @public
   */
  DataSourceParameters?: DataSourceParameters | undefined;

  /**
   * The credentials Amazon Quick Sight that uses to connect to your underlying source. Currently, only credentials based on user name and password are supported.
   *
   * @public
   */
  Credentials?: DataSourceCredentials | undefined;

  /**
   * A list of resource permissions on the data source.
   *
   * @public
   */
  Permissions?: ResourcePermission[] | undefined;

  /**
   * Use this parameter only when you want Amazon Quick Sight to use a VPC connection when connecting to your underlying source.
   *
   * @public
   */
  VpcConnectionProperties?: VpcConnectionProperties | undefined;

  /**
   * Secure Socket Layer (SSL) properties that apply when Amazon Quick Sight connects to your underlying source.
   *
   * @public
   */
  SslProperties?: SslProperties | undefined;

  /**
   * Contains a map of the key-value pairs for the resource tag or tags assigned to the data source.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * When you create the data source, Amazon Quick Sight adds the data source to these folders.
   *
   * @public
   */
  FolderArns?: string[] | undefined;
}

/**
 * @public
 */
export interface CreateDataSourceResponse {
  /**
   * The Amazon Resource Name (ARN) of the data source.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The ID of the data source. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.
   *
   * @public
   */
  DataSourceId?: string | undefined;

  /**
   * The status of creating the data source.
   *
   * @public
   */
  CreationStatus?: ResourceStatus | undefined;

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
 * The credentials for Microsoft Purview DLP integration. The credentials are stored in Amazon Web Services Secrets Manager and referenced by ARN.
 *
 * @public
 */
export interface MicrosoftPurviewCredentials {
  /**
   * The ARN of the Amazon Web Services Secrets Manager secret that contains the Microsoft Purview OAuth credentials. The secret includes the Azure tenant ID, client ID, and client secret or certificate.
   *
   * @public
   */
  SecretArn: string | undefined;
}

/**
 * Maps a sensitivity label from Microsoft Purview to an enforcement action.
 *
 * @public
 */
export interface LabelActionMapping {
  /**
   * The identifier of the sensitivity label from the DLP provider.
   *
   * @public
   */
  LabelId: string | undefined;

  /**
   * The display name of the sensitivity label from the DLP provider.
   *
   * @public
   */
  LabelName: string | undefined;

  /**
   * The enforcement action to apply when content with this sensitivity label is detected. Valid values are `ALLOW`, `BLOCK`, and `WARN`.
   *
   * @public
   */
  Action: DlpAction | undefined;
}

/**
 * The full configuration for Microsoft Purview DLP integration, including the provider credentials and the label-action mappings that define the enforcement policy.
 *
 * @public
 */
export interface MicrosoftPurviewProviderConfig {
  /**
   * The credentials used to authenticate with Microsoft Purview.
   *
   * @public
   */
  Credentials: MicrosoftPurviewCredentials | undefined;

  /**
   * The mappings from Microsoft Purview sensitivity labels to enforcement actions.
   *
   * @public
   */
  LabelActionMappings: LabelActionMapping[] | undefined;

  /**
   * The default action to apply to content that has no sensitivity label or whose label is not mapped. Valid values are `ALLOW`, `BLOCK`, and `WARN`.
   *
   * @public
   */
  UnmappedAction: DlpAction | undefined;
}

/**
 * The provider-specific configuration for a DLP integration. This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 *
 * @public
 */
export type ProviderConfig =
  | ProviderConfig.MicrosoftPurviewMember
  | ProviderConfig.$UnknownMember;

/**
 * @public
 */
export namespace ProviderConfig {
  /**
   * The configuration for a Microsoft Purview DLP integration.
   *
   * @public
   */
  export interface MicrosoftPurviewMember {
    MicrosoftPurview: MicrosoftPurviewProviderConfig;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    MicrosoftPurview?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    MicrosoftPurview: (value: MicrosoftPurviewProviderConfig) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface CreateDlpSettingRequest {
  /**
   * The ID of the Amazon Web Services account in which to create the DLP setting.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * A unique identifier for the DLP setting.
   *
   * @public
   */
  DlpSettingId: string | undefined;

  /**
   * A human-readable display name for the DLP setting.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The type of external DLP provider to use for sensitivity label classification. Currently, the only supported value is `MICROSOFT_PURVIEW`.
   *
   * @public
   */
  ProviderType: DlpProviderType | undefined;

  /**
   * The provider-specific configuration for the DLP integration. This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
   *
   * @public
   */
  ProviderConfig: ProviderConfig | undefined;

  /**
   * The behavior to apply when the DLP provider is unreachable. Valid values are `ALLOW`, `WARN`, and `BLOCK`.
   *
   * @public
   */
  ProviderOutageAction: DlpAction | undefined;

  /**
   * Specifies whether DLP enforcement is active for this setting. Set to `true` to enable enforcement, or `false` to disable it at time of setting creation.
   *
   * @public
   */
  Enabled: boolean | undefined;

  /**
   * A list of resource tags to apply to the DLP setting. You can use tags to manage access to your Amazon Web Services resources.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateDlpSettingResponse {
  /**
   * The Amazon Resource Name (ARN) of the created DLP setting.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The ID of the created DLP setting.
   *
   * @public
   */
  DlpSettingId: string | undefined;

  /**
   * The Amazon Web Services request ID for this operation.
   *
   * @public
   */
  RequestId?: string | undefined;
}

/**
 * A structure that contains the permission information for one principal against one flow.
 *
 * @public
 */
export interface Permission {
  /**
   * A list of actions that the principal can perform against the flow.
   *
   * The following are the list of values to set a principal as a flow owner:
   *
   * - quicksight:PublishFlow
   * - quicksight:GetFlow
   * - quicksight:UpdateFlowPermissions
   * - quicksight:GetFlowSession
   * - quicksight:StartFlowSession
   * - quicksight:StopFlowSession
   * - quicksight:UpdateFlowSession
   * - quicksight:UnpublishFlow
   * - quicksight:GetFlowStages
   * - quicksight:DeleteFlow
   * - quicksight:DescribeFlowPermissions
   * - quicksight:UpdateFlow
   * - quicksight:CreatePresignedUrl
   *
   * The following are the list of values to set a principal as a flow viewer:
   *
   * - quicksight:GetFlow
   * - quicksight:UpdateFlowSession
   * - quicksight:StartFlowSession
   * - quicksight:StopFlowSession
   * - quicksight:GetFlowSession
   * - quicksight:CreatePresignedUrl
   * - quicksight:GetFlowStages
   *
   * @public
   */
  Actions: string[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of the principal. This can be an Amazon Quick user, group or namespace associated with the flow. Namespace principal can only be set as a viewer and will grant everyone in the same namespace viewer permissions.
   *
   * @public
   */
  Principal: string | undefined;
}

/**
 * @public
 */
export interface CreateFlowRequest {
  /**
   * The ID of the Amazon Web Services account where you want to create the flow.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The display name for the flow.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The description for the flow.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The definition of the flow, specifying the steps and configurations. This is the flow definition in Quick Flow's internal format. The format is subject to change.
   *
   * > **Note:** Always derive or depend on the flow definition from the `DescribeFlow` operation to ensure you are working with the latest format.
   *
   * @public
   */
  FlowDefinition: __DocumentType | undefined;

  /**
   * Initial permissions for the flow. If omitted, the flow is created without any permissions.
   *
   * @public
   */
  Permissions?: Permission[] | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateFlowResponse {
  /**
   * The Amazon Resource Name (ARN) of the flow.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The unique identifier of the flow.
   *
   * @public
   */
  FlowId: string | undefined;

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
export interface CreateFolderRequest {
  /**
   * The ID for the Amazon Web Services account where you want to create the folder.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The ID of the folder.
   *
   * @public
   */
  FolderId: string | undefined;

  /**
   * The name of the folder.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The type of folder. By default, `folderType` is `SHARED`.
   *
   * @public
   */
  FolderType?: FolderType | undefined;

  /**
   * The Amazon Resource Name (ARN) for the parent folder.
   *
   * `ParentFolderArn` can be null. An empty `parentFolderArn` creates a root-level folder.
   *
   * @public
   */
  ParentFolderArn?: string | undefined;

  /**
   * A structure that describes the principals and the resource-level permissions of a folder.
   *
   * To specify no permissions, omit `Permissions`.
   *
   * @public
   */
  Permissions?: ResourcePermission[] | undefined;

  /**
   * Tags for the folder.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * An optional parameter that determines the sharing scope of the folder. The default value for this parameter is `ACCOUNT`.
   *
   * @public
   */
  SharingModel?: SharingModel | undefined;
}

/**
 * @public
 */
export interface CreateFolderResponse {
  /**
   * The HTTP status of the request.
   *
   * @public
   */
  Status?: number | undefined;

  /**
   * The Amazon Resource Name (ARN) for the newly created folder.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The folder ID for the newly created folder.
   *
   * @public
   */
  FolderId?: string | undefined;

  /**
   * The request ID for the newly created folder.
   *
   * @public
   */
  RequestId?: string | undefined;
}

/**
 * @public
 */
export interface CreateFolderMembershipRequest {
  /**
   * The ID for the Amazon Web Services account that contains the folder.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The ID of the folder.
   *
   * @public
   */
  FolderId: string | undefined;

  /**
   * The ID of the asset that you want to add to the folder.
   *
   * @public
   */
  MemberId: string | undefined;

  /**
   * The member type of the asset that you want to add to a folder.
   *
   * @public
   */
  MemberType: MemberType | undefined;
}

/**
 * An asset in a Quick Sight folder, such as a dashboard, analysis, or dataset.
 *
 * @public
 */
export interface FolderMember {
  /**
   * The ID of an asset in the folder.
   *
   * @public
   */
  MemberId?: string | undefined;

  /**
   * The type of asset that it is.
   *
   * @public
   */
  MemberType?: MemberType | undefined;
}

/**
 * @public
 */
export interface CreateFolderMembershipResponse {
  /**
   * The HTTP status of the request.
   *
   * @public
   */
  Status?: number | undefined;

  /**
   * Information about the member in the folder.
   *
   * @public
   */
  FolderMember?: FolderMember | undefined;

  /**
   * The Amazon Web Services request ID for this operation.
   *
   * @public
   */
  RequestId?: string | undefined;
}

/**
 * The request object for this operation.
 *
 * @public
 */
export interface CreateGroupRequest {
  /**
   * A name for the group that you want to create.
   *
   * @public
   */
  GroupName: string | undefined;

  /**
   * A description for the group that you want to create.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The ID for the Amazon Web Services account that the group is in. Currently, you use the ID for the Amazon Web Services account that contains your Amazon Quick Sight account.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The namespace that you want the group to be a part of.
   *
   * @public
   */
  Namespace: string | undefined;
}

/**
 * A *group* in Quick Sight consists of a set of users. You can use groups to make it easier to manage access and security.
 *
 * @public
 */
export interface Group {
  /**
   * The Amazon Resource Name (ARN) for the group.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The name of the group.
   *
   * @public
   */
  GroupName?: string | undefined;

  /**
   * The group description.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The principal ID of the group.
   *
   * @public
   */
  PrincipalId?: string | undefined;
}

/**
 * The response object for this operation.
 *
 * @public
 */
export interface CreateGroupResponse {
  /**
   * The name of the group.
   *
   * @public
   */
  Group?: Group | undefined;

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
export interface CreateGroupMembershipRequest {
  /**
   * The name of the user that you want to add to the group membership.
   *
   * @public
   */
  MemberName: string | undefined;

  /**
   * The name of the group that you want to add the user to.
   *
   * @public
   */
  GroupName: string | undefined;

  /**
   * The ID for the Amazon Web Services account that the group is in. Currently, you use the ID for the Amazon Web Services account that contains your Amazon Quick Sight account.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The namespace that you want the user to be a part of.
   *
   * @public
   */
  Namespace: string | undefined;
}

/**
 * A member of an Quick Sight group. Currently, group members must be users. Groups can't be members of another group. .
 *
 * @public
 */
export interface GroupMember {
  /**
   * The Amazon Resource Name (ARN) for the group member (user).
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The name of the group member (user).
   *
   * @public
   */
  MemberName?: string | undefined;
}

/**
 * @public
 */
export interface CreateGroupMembershipResponse {
  /**
   * The group member.
   *
   * @public
   */
  GroupMember?: GroupMember | undefined;

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
export interface CreateIAMPolicyAssignmentRequest {
  /**
   * The ID of the Amazon Web Services account where you want to assign an IAM policy to Amazon Quick Sight users or groups.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The name of the assignment, also called a rule. The name must be unique within the Amazon Web Services account.
   *
   * @public
   */
  AssignmentName: string | undefined;

  /**
   * The status of the assignment. Possible values are as follows:
   *
   * - `ENABLED` - Anything specified in this assignment is used when creating the data source.
   * - `DISABLED` - This assignment isn't used when creating the data source.
   * - `DRAFT` - This assignment is an unfinished draft and isn't used when creating the data source.
   *
   * @public
   */
  AssignmentStatus: AssignmentStatus | undefined;

  /**
   * The ARN for the IAM policy to apply to the Amazon Quick Sight users and groups specified in this assignment.
   *
   * @public
   */
  PolicyArn?: string | undefined;

  /**
   * The Amazon Quick Sight users, groups, or both that you want to assign the policy to.
   *
   * @public
   */
  Identities?: Record<string, string[]> | undefined;

  /**
   * The namespace that contains the assignment.
   *
   * @public
   */
  Namespace: string | undefined;
}

/**
 * @public
 */
export interface CreateIAMPolicyAssignmentResponse {
  /**
   * The name of the assignment. The name must be unique within the Amazon Web Services account.
   *
   * @public
   */
  AssignmentName?: string | undefined;

  /**
   * The ID for the assignment.
   *
   * @public
   */
  AssignmentId?: string | undefined;

  /**
   * The status of the assignment. Possible values are as follows:
   *
   * - `ENABLED` - Anything specified in this assignment is used when creating the data source.
   * - `DISABLED` - This assignment isn't used when creating the data source.
   * - `DRAFT` - This assignment is an unfinished draft and isn't used when creating the data source.
   *
   * @public
   */
  AssignmentStatus?: AssignmentStatus | undefined;

  /**
   * The ARN for the IAM policy that is applied to the Amazon Quick Sight users and groups specified in this assignment.
   *
   * @public
   */
  PolicyArn?: string | undefined;

  /**
   * The Amazon Quick Sight users, groups, or both that the IAM policy is assigned to.
   *
   * @public
   */
  Identities?: Record<string, string[]> | undefined;

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
export interface CreateIngestionRequest {
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

  /**
   * The Amazon Web Services account ID.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The type of ingestion that you want to create.
   *
   * @public
   */
  IngestionType?: IngestionType | undefined;
}

/**
 * @public
 */
export interface CreateIngestionResponse {
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
   * The ingestion status.
   *
   * @public
   */
  IngestionStatus?: IngestionStatus | undefined;

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
 * The template configuration for a knowledge base. This object contains connector-specific configuration that defines how data is crawled and indexed.
 *
 * @public
 */
export interface KbTemplateConfiguration {
  /**
   * The connector configuration for the knowledge base data source. The structure depends on the connector type of the data source referenced by `DataSourceArn`.
   *
   * The template must be a JSON object. All connector types share the following top-level keys. The value of `type` and the contents of `connectionConfiguration` vary by connector type.
   *
   * - `type` – (Required) The connector type of the data source. This value identifies the connector. Valid values: `S3V2`, `WEBCRAWLERV3`, `GOOGLEDRIVEV3`, `ONEDRIVEV3`, `SHAREPOINTV3`. For the fields required by each connector, see the connector-specific list that follows.
   * - `connectionConfiguration` – (Required) The connection details for the data source. The keys in this object vary by connector type; see the connector-specific list that follows.
   * - `filterConfiguration` – (Optional) Rules that determine which content is crawled, such as inclusion and exclusion prefixes, patterns, or file-size limits.
   * - `accessControlConfiguration` – (Optional) Document-level access control (ACL) settings. Supported by all connector types except Web Crawler (`WEBCRAWLERV3`). The available fields depend on the connector type.
   * - `deletionProtectionConfiguration` – (Optional) Deletion-protection settings, supported by all connector types. Contains `enableDeletionProtection` (Boolean) and `deletionProtectionThreshold` (String; a value from 1 to 100).
   *
   * The following list describes the valid `type` value, the `connectionConfiguration` contents, and any connector-specific fields for each connector type:
   *
   * - **Amazon S3** (`type`: `S3V2`) – The `type` value must be `S3V2`. `connectionConfiguration` is required and contains:
   *
   *   - `bucketName` – (Required) The name of the Amazon S3 bucket to crawl. Type: String. Length: 3–63 characters. Pattern: `^[a-z0-9][.\-a-z0-9]\{1,61\}[a-z0-9]$`.
   *   - `bucketOwnerAccountId` – (Required) The ID of the AWS account that owns the bucket. Type: String. Pattern: `^\d\{12\}$`.
   *
   *   Amazon S3 supports the following optional `filterConfiguration` fields:
   *
   *   - `inclusionPrefixes` or `exclusionPrefixes` – Amazon S3 key prefixes to include or exclude. Type: Array of String. Up to 350 items, each 1–1,024 characters.
   *   - `inclusionPatterns` or `exclusionPatterns` – Patterns to include or exclude objects. Type: Array of String. Up to 350 items, each 1–1,024 characters.
   *   - `maxFileSizeInMegaBytes` – The maximum size, in MB, of a file to ingest. Type: String. Pattern: `^\d+$`.
   *
   *   For Amazon S3, `accessControlConfiguration` supports the following fields:
   *
   *   - `crawlAcl` – Specifies whether the connector crawls and enforces document access control lists (ACLs). Type: Boolean. When set to `true`, provide ACLs either in a global ACL configuration file (`aclConfigurationFilePath`) or in per-document metadata files.
   *   - `aclConfigurationFilePath` – The Amazon S3 URI of the global ACL configuration file. Type: String. Length: 1–1,024 characters. Optional. If you don't provide a global ACL configuration file, define ACLs in per-document metadata files.
   *   - `defaultAccessType` – The access behavior applied to Amazon S3 prefixes that are not listed in the ACL configuration. Type: String. The only supported value is `ALLOW`.
   *
   *   `metadataFilesPrefix` – (Optional) The Amazon S3 prefix under which per-document metadata files are stored. Each metadata file describes a single source document and its indexable attributes. This is not the global ACL configuration file. For a single global ACL file, use `accessControlConfiguration.aclConfigurationFilePath`. Type: String. Length: 1–1,024 characters.
   * - **Google Drive** (`type`: `GOOGLEDRIVEV3`) – Requires `connectionConfiguration` with `authType` set to `SERVICE_ACCOUNT`. Supports `dataEntityConfiguration` with `crawlMyDrive`, `crawlSharedWithMe`, and `crawlSharedDrives`.
   * - **OneDrive** (`type`: `ONEDRIVEV3`) – Requires `authType` at the template root level set to `TWO_LEGGED_OAUTH`. Requires `connectionConfiguration` with `tenantId` in UUID format. Supports `dataEntityConfiguration` with `crawlPersonalDrives` and `crawlSharedWithMe`.
   * - **SharePoint** (`type`: `SHAREPOINTV3`) – Requires `connectionConfiguration` with `tenantId` in UUID format. Supports `dataEntityConfiguration` with `siteUrls`, `crawlFiles`, and `crawlPages`.
   * - **Web Crawler** (`type`: `WEBCRAWLERV3`) – Requires `connectionConfiguration` with `seedUrls` or `siteMapUrls` (mutually exclusive) and `authType`. Supports `crawlConfiguration` for crawl depth, rate limits, and scope. Supports `filterConfiguration` for file size limits and URL patterns. Valid values for `authType`: `NO_AUTH`, `BASIC_AUTH`, `FORM`, `SAML`.
   *
   * **Enabling document-level access control for Amazon S3**
   *
   * For an Amazon S3 (`S3V2`) knowledge base, document-level access control is governed by two settings that must both be enabled:
   *
   * 1. In this template, set `accessControlConfiguration.crawlAcl` to `true`. Define ACLs either in a global ACL configuration file, referenced by `accessControlConfiguration.aclConfigurationFilePath`, or in per-document metadata files. To control access for prefixes that are not listed in the ACL file, you can also set `accessControlConfiguration.defaultAccessType`.
   * 2. In the `CreateKnowledgeBase` or `UpdateKnowledgeBase` request, set the top-level `AccessControlConfiguration.isACLEnabled` to `true`.
   *
   * @public
   */
  template?: __DocumentType | undefined;
}

/**
 * The configuration settings for a knowledge base.
 *
 * @public
 */
export interface KnowledgeBaseConfiguration {
  /**
   * The template configuration that defines how the data source connector crawls and indexes data for the knowledge base. The template structure varies by connector type. See `KbTemplateConfiguration` for connector-specific details.
   *
   * @public
   */
  templateConfiguration?: KbTemplateConfiguration | undefined;
}

/**
 * The configuration for image extraction from knowledge base documents.
 *
 * @public
 */
export interface ImageExtractionConfiguration {
  /**
   * The status of image extraction. Valid values are ENABLED and DISABLED.
   *
   * @public
   */
  imageExtractionStatus: ImageExtractionStatus | undefined;
}

/**
 * The configuration for video extraction from knowledge base documents.
 *
 * @public
 */
export interface VideoExtractionConfiguration {
  /**
   * The status of video extraction. Valid values are ENABLED and DISABLED.
   *
   * @public
   */
  videoExtractionStatus: VideoExtractionStatus | undefined;

  /**
   * The type of video extraction to perform.
   *
   * @public
   */
  videoExtractionType?: VideoExtractionType | undefined;
}

/**
 * The configuration for media extraction from knowledge base documents.
 *
 * @public
 */
export interface MediaExtractionConfiguration {
  /**
   * The configuration for image extraction.
   *
   * @public
   */
  imageExtractionConfiguration?: ImageExtractionConfiguration | undefined;

  /**
   * The configuration for audio extraction.
   *
   * @public
   */
  audioExtractionConfiguration?: AudioExtractionConfiguration | undefined;

  /**
   * The configuration for video extraction.
   *
   * @public
   */
  videoExtractionConfiguration?: VideoExtractionConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateKnowledgeBaseRequest {
  /**
   * The ID of the Amazon Web Services account that contains the knowledge base.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The unique identifier for the knowledge base.
   *
   * @public
   */
  KnowledgeBaseId: string | undefined;

  /**
   * The name of the knowledge base.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the data source for the knowledge base.
   *
   * @public
   */
  DataSourceArn: string | undefined;

  /**
   * The configuration settings for a knowledge base.
   *
   * @public
   */
  KnowledgeBaseConfiguration: KnowledgeBaseConfiguration | undefined;

  /**
   * A description for the knowledge base. If you don't specify a description, the knowledge base is created without one.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * A list of resource permissions on the knowledge base. Each entry grants a specified Amazon QuickSight principal either owner or viewer access. If you don't specify permissions, only the primary owner (if provided) receives owner access.
   *
   * @public
   */
  Permissions?: ResourcePermission[] | undefined;

  /**
   * The configuration for media extraction from knowledge base documents.
   *
   * @public
   */
  MediaExtractionConfiguration?: MediaExtractionConfiguration | undefined;

  /**
   * The access control configuration for the knowledge base. If you don't specify this parameter, document-level ACLs are disabled.
   *
   * @public
   */
  AccessControlConfiguration?: AccessControlConfiguration | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Amazon QuickSight user or group to set as the primary owner of the knowledge base. The specified principal is always granted owner access, regardless of what is specified in the `Permissions` field.
   *
   * This must be an Amazon QuickSight principal ARN, not an IAM user or role ARN. The API caller is never assigned as the owner automatically. If you don't specify a primary owner and don't grant owner access in `Permissions`, the knowledge base is created without an owner, even when you call the operation as an Amazon QuickSight user.
   *
   * When you call `CreateKnowledgeBase` as an IAM user or an assumed IAM role, specify `PrimaryOwnerArn` (as an Amazon QuickSight principal ARN) or an owner entry in `Permissions` so that the knowledge base has an owner. Although optional, specifying a primary owner is recommended.
   *
   * @public
   */
  PrimaryOwnerArn?: string | undefined;

  /**
   * The tags to assign to the knowledge base. If you don't specify tags, the knowledge base is created without tags.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateKnowledgeBaseResponse {
  /**
   * The Amazon Resource Name (ARN) of the knowledge base.
   *
   * @public
   */
  KnowledgeBaseArn: string | undefined;

  /**
   * The unique identifier for the knowledge base.
   *
   * @public
   */
  KnowledgeBaseId: string | undefined;

  /**
   * The creation status of the knowledge base.
   *
   * @public
   */
  CreationStatus: DataSetStatus | undefined;

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
 * A value that defines a resource usage limit, consisting of a maximum value and a unit of measurement.
 *
 * @public
 */
export interface ProfileLimitValue {
  /**
   * The maximum allowed value for the resource.
   *
   * @public
   */
  maxValue: number | undefined;

  /**
   * The unit of measurement for the limit value.
   *
   * @public
   */
  unit: LimitUnit | undefined;
}

/**
 * @public
 */
export interface CreateLimitsProfileRequest {
  /**
   * The ID of the Amazon Web Services account that contains the limits profile.
   *
   * @public
   */
  accountId: string | undefined;

  /**
   * A display name for the limits profile.
   *
   * @public
   */
  profileName: string | undefined;

  /**
   * A description for the limits profile.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * A map of resource types to their limit values for this profile.
   *
   * @public
   */
  resourceLimits: Partial<Record<ResourceType, ProfileLimitValue>> | undefined;

  /**
   * A unique, case-sensitive identifier to ensure that the operation completes no more than one time. If this token matches a previous request, the service ignores the request, but does not return an error.
   *
   * @public
   */
  clientToken: string | undefined;
}

/**
 * @public
 */
export interface CreateLimitsProfileResponse {
  /**
   * The Amazon Resource Name (ARN) of the created limits profile.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The unique identifier for the created limits profile.
   *
   * @public
   */
  profileId: string | undefined;
}

/**
 * @public
 */
export interface CreateNamespaceRequest {
  /**
   * The ID for the Amazon Web Services account that you want to create the Quick Sight namespace in.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The name that you want to use to describe the new namespace.
   *
   * @public
   */
  Namespace: string | undefined;

  /**
   * Specifies the type of your user identity directory. Currently, this supports users with an identity type of `QUICKSIGHT`.
   *
   * @public
   */
  IdentityStore: IdentityStore | undefined;

  /**
   * The tags that you want to associate with the namespace that you're creating.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateNamespaceResponse {
  /**
   * The ARN of the Quick Sight namespace you created.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The name of the new namespace that you created.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The Amazon Web Services Region; that you want to use for the free SPICE capacity for the new namespace. This is set to the region that you run CreateNamespace in.
   *
   * @public
   */
  CapacityRegion?: string | undefined;

  /**
   * The status of the creation of the namespace. This is an asynchronous process. A status of `CREATED` means that your namespace is ready to use. If an error occurs, it indicates if the process is `retryable` or `non-retryable`. In the case of a non-retryable error, refer to the error message for follow-up tasks.
   *
   * @public
   */
  CreationStatus?: NamespaceStatus | undefined;

  /**
   * Specifies the type of your user identity directory. Currently, this supports users with an identity type of `QUICKSIGHT`.
   *
   * @public
   */
  IdentityStore?: IdentityStore | undefined;

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
export interface CreateOAuthClientApplicationRequest {
  /**
   * The Amazon Web Services account ID.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * An ID for the OAuthClientApplication that you want to create. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.
   *
   * @public
   */
  OAuthClientApplicationId: string | undefined;

  /**
   * The display name for the OAuthClientApplication.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The authentication type to use for the OAuthClientApplication. This determines the OAuth 2.0 grant flow that is used when the data source connects to the identity provider. Valid values are `TOKEN`.
   *
   * @public
   */
  OAuthClientAuthenticationType: OAuthClientAuthenticationType | undefined;

  /**
   * The client ID of the OAuth application that is registered with the identity provider.
   *
   * @public
   */
  ClientId: string | undefined;

  /**
   * The client secret of the OAuth application that is registered with the identity provider.
   *
   * @public
   */
  ClientSecret: string | undefined;

  /**
   * The token endpoint URL of the identity provider that is used to obtain access tokens.
   *
   * @public
   */
  OAuthTokenEndpointUrl: string | undefined;

  /**
   * The authorization endpoint URL of the identity provider that is used to obtain authorization codes.
   *
   * @public
   */
  OAuthAuthorizationEndpointUrl?: string | undefined;

  /**
   * The OAuth scopes that are requested when the OAuthClientApplication obtains an access token from the identity provider.
   *
   * @public
   */
  OAuthScopes?: string | undefined;

  /**
   * The type of data source that the OAuthClientApplication is used with. Valid values are `SNOWFLAKE`.
   *
   * @public
   */
  DataSourceType?: DataSourceType | undefined;

  /**
   * VPC connection properties.
   *
   * @public
   */
  IdentityProviderVpcConnectionProperties?: VpcConnectionProperties | undefined;

  /**
   * Contains a map of the key-value pairs for the resource tag or tags assigned to the OAuthClientApplication.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateOAuthClientApplicationResponse {
  /**
   * The Amazon Resource Name (ARN) of the OAuthClientApplication.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The ID of the OAuthClientApplication. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.
   *
   * @public
   */
  OAuthClientApplicationId?: string | undefined;

  /**
   * The status of creating the OAuthClientApplication.
   *
   * @public
   */
  CreationStatus?: ResourceStatus | undefined;

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
 * The refresh on entity for weekly or monthly schedules.
 *
 * @public
 */
export interface ScheduleRefreshOnEntity {
  /**
   * The day of the week that you want to schedule a refresh on.
   *
   * @public
   */
  DayOfWeek?: DayOfWeek | undefined;

  /**
   * The day of the month that you want to schedule refresh on.
   *
   * @public
   */
  DayOfMonth?: string | undefined;
}

/**
 * Specifies the interval between each scheduled refresh of a dataset.
 *
 * @public
 */
export interface RefreshFrequency {
  /**
   * The interval between scheduled refreshes. Valid values are as follows:
   *
   * - `MINUTE15`: The dataset refreshes every 15 minutes. This value is only supported for incremental refreshes. This interval can only be used for one schedule per dataset.
   * - `MINUTE30`:The dataset refreshes every 30 minutes. This value is only supported for incremental refreshes. This interval can only be used for one schedule per dataset.
   * - `HOURLY`: The dataset refreshes every hour. This interval can only be used for one schedule per dataset.
   * - `DAILY`: The dataset refreshes every day.
   * - `WEEKLY`: The dataset refreshes every week.
   * - `MONTHLY`: The dataset refreshes every month.
   *
   * @public
   */
  Interval: RefreshInterval | undefined;

  /**
   * The day of the week that you want to schedule the refresh on. This value is required for weekly and monthly refresh intervals.
   *
   * @public
   */
  RefreshOnDay?: ScheduleRefreshOnEntity | undefined;

  /**
   * The timezone that you want the refresh schedule to use. The timezone ID must match a corresponding ID found on `java.util.time.getAvailableIDs()`.
   *
   * @public
   */
  Timezone?: string | undefined;

  /**
   * The time of day that you want the datset to refresh. This value is expressed in HH:MM format. This field is not required for schedules that refresh hourly.
   *
   * @public
   */
  TimeOfTheDay?: string | undefined;
}

/**
 * The refresh schedule of a dataset.
 *
 * @public
 */
export interface RefreshSchedule {
  /**
   * An identifier for the refresh schedule.
   *
   * @public
   */
  ScheduleId: string | undefined;

  /**
   * The frequency for the refresh schedule.
   *
   * @public
   */
  ScheduleFrequency: RefreshFrequency | undefined;

  /**
   * Time after which the refresh schedule can be started, expressed in `YYYY-MM-DDTHH:MM:SS` format.
   *
   * @public
   */
  StartAfterDateTime?: Date | undefined;

  /**
   * The type of refresh that a datset undergoes. Valid values are as follows:
   *
   * - `FULL_REFRESH`: A complete refresh of a dataset.
   * - `INCREMENTAL_REFRESH`: A partial refresh of some rows of a dataset, based on the time window specified.
   *
   * For more information on full and incremental refreshes, see [Refreshing SPICE data](https://docs.aws.amazon.com/quicksight/latest/user/refreshing-imported-data.html) in the *Amazon Quick Suite User Guide*.
   *
   * @public
   */
  RefreshType: IngestionType | undefined;

  /**
   * The Amazon Resource Name (ARN) for the refresh schedule.
   *
   * @public
   */
  Arn?: string | undefined;
}

/**
 * @public
 */
export interface CreateRefreshScheduleRequest {
  /**
   * The ID of the dataset.
   *
   * @public
   */
  DataSetId: string | undefined;

  /**
   * The Amazon Web Services account ID.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The refresh schedule.
   *
   * @public
   */
  Schedule: RefreshSchedule | undefined;
}

/**
 * @public
 */
export interface CreateRefreshScheduleResponse {
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

  /**
   * The ID of the refresh schedule.
   *
   * @public
   */
  ScheduleId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for the refresh schedule.
   *
   * @public
   */
  Arn?: string | undefined;
}

/**
 * @public
 */
export interface CreateRoleMembershipRequest {
  /**
   * The name of the group that you want to add to the role.
   *
   * @public
   */
  MemberName: string | undefined;

  /**
   * The ID for the Amazon Web Services account that you want to create a group in. The Amazon Web Services account ID that you provide must be the same Amazon Web Services account that contains your Amazon Quick Sight account.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The namespace that the role belongs to.
   *
   * @public
   */
  Namespace: string | undefined;

  /**
   * The role that you want to add a group to.
   *
   * @public
   */
  Role: Role | undefined;
}

/**
 * @public
 */
export interface CreateRoleMembershipResponse {
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
export interface CreateSpaceRequest {
  /**
   * The ID of the Amazon Web Services account that contains the space.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The ID of the space. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.
   *
   * @public
   */
  SpaceId: string | undefined;

  /**
   * A display name for the space.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A description of the space.
   *
   * @public
   */
  Description?: string | undefined;
}

/**
 * @public
 */
export interface CreateSpaceResponse {
  /**
   * The ID of the space.
   *
   * @public
   */
  spaceId: string | undefined;

  /**
   * The ARN of the space.
   *
   * @public
   */
  spaceArn?: string | undefined;

  /**
   * The Amazon Web Services request ID for this operation.
   *
   * @public
   */
  RequestId?: string | undefined;
}

/**
 * Dataset schema.
 *
 * @public
 */
export interface DataSetSchema {
  /**
   * A structure containing the list of column schemas.
   *
   * @public
   */
  ColumnSchemaList?: ColumnSchema[] | undefined;
}

/**
 * Dataset configuration.
 *
 * @public
 */
export interface DataSetConfiguration {
  /**
   * Placeholder.
   *
   * @public
   */
  Placeholder?: string | undefined;

  /**
   * Dataset schema.
   *
   * @public
   */
  DataSetSchema?: DataSetSchema | undefined;

  /**
   * A structure containing the list of column group schemas.
   *
   * @public
   */
  ColumnGroupSchemaList?: ColumnGroupSchema[] | undefined;
}

/**
 * The configuration of a topic.
 *
 * @public
 */
export interface TopicConfiguration {
  /**
   * The placeholder for the topic configuration.
   *
   * @public
   */
  Placeholder?: string | undefined;

  /**
   * Topic schema.
   *
   * @public
   */
  DataSetSchema?: DataSetSchema | undefined;

  /**
   * The list of column group schemas in the topic configuration.
   *
   * @public
   */
  ColumnGroupSchemaList?: ColumnGroupSchema[] | undefined;
}

/**
 * The source analysis of the template.
 *
 * @public
 */
export interface TemplateSourceAnalysis {
  /**
   * The Amazon Resource Name (ARN) of the resource.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * A structure containing information about the dataset references used as placeholders in the template.
   *
   * @public
   */
  DataSetReferences: DataSetReference[] | undefined;

  /**
   * A structure containing information about the topic references used as placeholders in the template.
   *
   * @public
   */
  TopicReferences?: TopicReference[] | undefined;
}

/**
 * The source template of the template.
 *
 * @public
 */
export interface TemplateSourceTemplate {
  /**
   * The Amazon Resource Name (ARN) of the resource.
   *
   * @public
   */
  Arn: string | undefined;
}

/**
 * The source entity of the template.
 *
 * @public
 */
export interface TemplateSourceEntity {
  /**
   * The source analysis, if it is based on an analysis.
   *
   * @public
   */
  SourceAnalysis?: TemplateSourceAnalysis | undefined;

  /**
   * The source template, if it is based on an template.
   *
   * @public
   */
  SourceTemplate?: TemplateSourceTemplate | undefined;
}

/**
 * @public
 */
export interface CreateTemplateResponse {
  /**
   * The ARN for the template.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The ARN for the template, including the version information of the first version.
   *
   * @public
   */
  VersionArn?: string | undefined;

  /**
   * The ID of the template.
   *
   * @public
   */
  TemplateId?: string | undefined;

  /**
   * The template creation status.
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
export interface CreateTemplateAliasRequest {
  /**
   * The ID of the Amazon Web Services account that contains the template that you creating an alias for.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * An ID for the template.
   *
   * @public
   */
  TemplateId: string | undefined;

  /**
   * The name that you want to give to the template alias that you're creating. Don't start the alias name with the `$` character. Alias names that start with `$` are reserved by Quick Sight.
   *
   * @public
   */
  AliasName: string | undefined;

  /**
   * The version number of the template.
   *
   * @public
   */
  TemplateVersionNumber: number | undefined;
}

/**
 * The template alias.
 *
 * @public
 */
export interface TemplateAlias {
  /**
   * The display name of the template alias.
   *
   * @public
   */
  AliasName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the template alias.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The version number of the template alias.
   *
   * @public
   */
  TemplateVersionNumber?: number | undefined;
}

/**
 * @public
 */
export interface CreateTemplateAliasResponse {
  /**
   * Information about the template alias.
   *
   * @public
   */
  TemplateAlias?: TemplateAlias | undefined;

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
 * The theme colors that are used for data colors in charts. The colors description is a hexadecimal color code that consists of six alphanumerical characters, prefixed with `#`, for example #37BFF5.
 *
 * @public
 */
export interface DataColorPalette {
  /**
   * The hexadecimal codes for the colors.
   *
   * @public
   */
  Colors?: string[] | undefined;

  /**
   * The minimum and maximum hexadecimal codes that describe a color gradient.
   *
   * @public
   */
  MinMaxGradient?: string[] | undefined;

  /**
   * The hexadecimal code of a color that applies to charts where a lack of data is highlighted.
   *
   * @public
   */
  EmptyFillColor?: string | undefined;
}

/**
 * The background configuration for sheets.
 *
 * @public
 */
export interface SheetBackgroundStyle {
  /**
   * The solid color background option for sheets.
   *
   * @public
   */
  Color?: string | undefined;

  /**
   * The gradient background option for sheets.
   *
   * @public
   */
  Gradient?: string | undefined;
}

/**
 * Display options related to tiles on a sheet.
 *
 * @public
 */
export interface TileStyle {
  /**
   * The background color of a tile.
   *
   * @public
   */
  BackgroundColor?: string | undefined;

  /**
   * The border around a tile.
   *
   * @public
   */
  Border?: BorderStyle | undefined;

  /**
   * The border radius of a tile.
   *
   * @public
   */
  BorderRadius?: string | undefined;

  /**
   * The padding of a tile.
   *
   * @public
   */
  Padding?: string | undefined;
}

/**
 * The display options for gutter spacing between tiles on a sheet.
 *
 * @public
 */
export interface GutterStyle {
  /**
   * This Boolean value controls whether to display a gutter space between sheet tiles.
   *
   * @public
   */
  Show?: boolean | undefined;
}

/**
 * The display options for margins around the outside edge of sheets.
 *
 * @public
 */
export interface MarginStyle {
  /**
   * This Boolean value controls whether to display sheet margins.
   *
   * @public
   */
  Show?: boolean | undefined;
}

/**
 * The display options for the layout of tiles on a sheet.
 *
 * @public
 */
export interface TileLayoutStyle {
  /**
   * The gutter settings that apply between tiles.
   *
   * @public
   */
  Gutter?: GutterStyle | undefined;

  /**
   * The margin settings that apply around the outside edge of sheets.
   *
   * @public
   */
  Margin?: MarginStyle | undefined;
}

/**
 * The theme display options for sheets.
 *
 * @public
 */
export interface SheetStyle {
  /**
   * The display options for tiles.
   *
   * @public
   */
  Tile?: TileStyle | undefined;

  /**
   * The layout options for tiles.
   *
   * @public
   */
  TileLayout?: TileLayoutStyle | undefined;

  /**
   * The background for sheets.
   *
   * @public
   */
  Background?: SheetBackgroundStyle | undefined;
}

/**
 * Determines the font settings.
 *
 * @public
 */
export interface Font {
  /**
   * Determines the font family settings.
   *
   * @public
   */
  FontFamily?: string | undefined;
}

/**
 * Configures the display properties of the visual sub-title.
 *
 * @public
 */
export interface VisualSubtitleFontConfiguration {
  /**
   * Configures the display properties of the given text.
   *
   * @public
   */
  FontConfiguration?: FontConfiguration | undefined;

  /**
   * Determines the alignment of visual sub-title.
   *
   * @public
   */
  TextAlignment?: HorizontalTextAlignment | undefined;

  /**
   * Determines the text transformation of visual sub-title.
   *
   * @public
   */
  TextTransform?: TextTransform | undefined;
}

/**
 * Configures the display properties of the visual title.
 *
 * @public
 */
export interface VisualTitleFontConfiguration {
  /**
   * Configures the display properties of the given text.
   *
   * @public
   */
  FontConfiguration?: FontConfiguration | undefined;

  /**
   * Determines the alignment of visual title.
   *
   * @public
   */
  TextAlignment?: HorizontalTextAlignment | undefined;

  /**
   * Determines the text transformation of visual title.
   *
   * @public
   */
  TextTransform?: TextTransform | undefined;
}

/**
 * Determines the typography options.
 *
 * @public
 */
export interface Typography {
  /**
   * Determines the list of font families.
   *
   * @public
   */
  FontFamilies?: Font[] | undefined;

  /**
   * Configures the display properties of the given text.
   *
   * @public
   */
  AxisTitleFontConfiguration?: FontConfiguration | undefined;

  /**
   * Configures the display properties of the given text.
   *
   * @public
   */
  AxisLabelFontConfiguration?: FontConfiguration | undefined;

  /**
   * Configures the display properties of the given text.
   *
   * @public
   */
  LegendTitleFontConfiguration?: FontConfiguration | undefined;

  /**
   * Configures the display properties of the given text.
   *
   * @public
   */
  LegendValueFontConfiguration?: FontConfiguration | undefined;

  /**
   * Configures the display properties of the given text.
   *
   * @public
   */
  DataLabelFontConfiguration?: FontConfiguration | undefined;

  /**
   * Configures the display properties of the visual title.
   *
   * @public
   */
  VisualTitleFontConfiguration?: VisualTitleFontConfiguration | undefined;

  /**
   * Configures the display properties of the visual sub-title.
   *
   * @public
   */
  VisualSubtitleFontConfiguration?: VisualSubtitleFontConfiguration | undefined;

  /**
   * Configures the display properties of the control title.
   *
   * @public
   */
  ControlTitleFontConfiguration?: ControlTitleFontConfiguration | undefined;
}

/**
 * The theme colors that apply to UI and to charts, excluding data colors. The colors description is a hexadecimal color code that consists of six alphanumerical characters, prefixed with `#`, for example #37BFF5. For more information, see [Using Themes in Quick Sight](https://docs.aws.amazon.com/quicksight/latest/user/themes-in-quicksight.html) in the *Quick Sight User Guide.*
 *
 * @public
 */
export interface UIColorPalette {
  /**
   * The color of text and other foreground elements that appear over the primary background regions, such as grid lines, borders, table banding, icons, and so on.
   *
   * @public
   */
  PrimaryForeground?: string | undefined;

  /**
   * The background color that applies to visuals and other high emphasis UI.
   *
   * @public
   */
  PrimaryBackground?: string | undefined;

  /**
   * The foreground color that applies to any sheet title, sheet control text, or UI that appears over the secondary background.
   *
   * @public
   */
  SecondaryForeground?: string | undefined;

  /**
   * The background color that applies to the sheet background and sheet controls.
   *
   * @public
   */
  SecondaryBackground?: string | undefined;

  /**
   * This color is that applies to selected states and buttons.
   *
   * @public
   */
  Accent?: string | undefined;

  /**
   * The foreground color that applies to any text or other elements that appear over the accent color.
   *
   * @public
   */
  AccentForeground?: string | undefined;

  /**
   * The color that applies to error messages.
   *
   * @public
   */
  Danger?: string | undefined;

  /**
   * The foreground color that applies to any text or other elements that appear over the error color.
   *
   * @public
   */
  DangerForeground?: string | undefined;

  /**
   * This color that applies to warning and informational messages.
   *
   * @public
   */
  Warning?: string | undefined;

  /**
   * The foreground color that applies to any text or other elements that appear over the warning color.
   *
   * @public
   */
  WarningForeground?: string | undefined;

  /**
   * The color that applies to success messages, for example the check mark for a successful download.
   *
   * @public
   */
  Success?: string | undefined;

  /**
   * The foreground color that applies to any text or other elements that appear over the success color.
   *
   * @public
   */
  SuccessForeground?: string | undefined;

  /**
   * The color that applies to the names of fields that are identified as dimensions.
   *
   * @public
   */
  Dimension?: string | undefined;

  /**
   * The foreground color that applies to any text or other elements that appear over the dimension color.
   *
   * @public
   */
  DimensionForeground?: string | undefined;

  /**
   * The color that applies to the names of fields that are identified as measures.
   *
   * @public
   */
  Measure?: string | undefined;

  /**
   * The foreground color that applies to any text or other elements that appear over the measure color.
   *
   * @public
   */
  MeasureForeground?: string | undefined;
}

/**
 * The theme configuration. This configuration contains all of the display properties for a theme.
 *
 * @public
 */
export interface ThemeConfiguration {
  /**
   * Color properties that apply to chart data colors.
   *
   * @public
   */
  DataColorPalette?: DataColorPalette | undefined;

  /**
   * Color properties that apply to the UI and to charts, excluding the colors that apply to data.
   *
   * @public
   */
  UIColorPalette?: UIColorPalette | undefined;

  /**
   * Display options related to sheets.
   *
   * @public
   */
  Sheet?: SheetStyle | undefined;

  /**
   * Determines the typography options.
   *
   * @public
   */
  Typography?: Typography | undefined;
}

/**
 * @public
 */
export interface CreateThemeRequest {
  /**
   * The ID of the Amazon Web Services account where you want to store the new theme.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * An ID for the theme that you want to create. The theme ID is unique per Amazon Web Services Region in each Amazon Web Services account.
   *
   * @public
   */
  ThemeId: string | undefined;

  /**
   * A display name for the theme.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The ID of the theme that a custom theme will inherit from. All themes inherit from one of the starting themes defined by Amazon Quick Sight. For a list of the starting themes, use `ListThemes` or choose **Themes** from within an analysis.
   *
   * @public
   */
  BaseThemeId: string | undefined;

  /**
   * A description of the first version of the theme that you're creating. Every time `UpdateTheme` is called, a new version is created. Each version of the theme has a description of the version in the `VersionDescription` field.
   *
   * @public
   */
  VersionDescription?: string | undefined;

  /**
   * The theme configuration, which contains the theme display properties.
   *
   * @public
   */
  Configuration: ThemeConfiguration | undefined;

  /**
   * A valid grouping of resource permissions to apply to the new theme.
   *
   * @public
   */
  Permissions?: ResourcePermission[] | undefined;

  /**
   * A map of the key-value pairs for the resource tag or tags that you want to add to the resource.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateThemeResponse {
  /**
   * The Amazon Resource Name (ARN) for the theme.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for the new theme.
   *
   * @public
   */
  VersionArn?: string | undefined;

  /**
   * The ID of the theme.
   *
   * @public
   */
  ThemeId?: string | undefined;

  /**
   * The theme creation status.
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
export interface CreateThemeAliasRequest {
  /**
   * The ID of the Amazon Web Services account that contains the theme for the new theme alias.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * An ID for the theme alias.
   *
   * @public
   */
  ThemeId: string | undefined;

  /**
   * The name that you want to give to the theme alias that you are creating. The alias name can't begin with a `$`. Alias names that start with `$` are reserved by Amazon Quick Sight.
   *
   * @public
   */
  AliasName: string | undefined;

  /**
   * The version number of the theme.
   *
   * @public
   */
  ThemeVersionNumber: number | undefined;
}

/**
 * An alias for a theme.
 *
 * @public
 */
export interface ThemeAlias {
  /**
   * The Amazon Resource Name (ARN) of the theme alias.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The display name of the theme alias.
   *
   * @public
   */
  AliasName?: string | undefined;

  /**
   * The version number of the theme alias.
   *
   * @public
   */
  ThemeVersionNumber?: number | undefined;
}

/**
 * @public
 */
export interface CreateThemeAliasResponse {
  /**
   * Information about the theme alias.
   *
   * @public
   */
  ThemeAlias?: ThemeAlias | undefined;

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
 * Instructions that provide additional guidance and context for response generation.
 *
 * @public
 */
export interface CustomInstructions {
  /**
   * A text field for providing additional guidance or context for response generation.
   *
   * @public
   */
  CustomInstructionsString: string | undefined;
}

/**
 * Configuration options for a `Topic`.
 *
 * @public
 */
export interface TopicConfigOptions {
  /**
   * Enables Amazon Q Business Insights for a `Topic`.
   *
   * @public
   */
  QBusinessInsightsEnabled?: boolean | undefined;
}

/**
 * A structure that represents a default formatting definition.
 *
 * @public
 */
export interface DefaultFormatting {
  /**
   * The display format. Valid values for this structure are `AUTO`, `PERCENT`, `CURRENCY`, `NUMBER`, `DATE`, and `STRING`.
   *
   * @public
   */
  DisplayFormat?: DisplayFormat | undefined;

  /**
   * The additional options for display formatting.
   *
   * @public
   */
  DisplayFormatOptions?: DisplayFormatOptions | undefined;
}

/**
 * A structure that represents a semantic type.
 *
 * @public
 */
export interface SemanticType {
  /**
   * The semantic type name.
   *
   * @public
   */
  TypeName?: string | undefined;

  /**
   * The semantic type sub type name.
   *
   * @public
   */
  SubTypeName?: string | undefined;

  /**
   * The semantic type parameters.
   *
   * @public
   */
  TypeParameters?: Record<string, string> | undefined;

  /**
   * The semantic type truthy cell value.
   *
   * @public
   */
  TruthyCellValue?: string | undefined;

  /**
   * The other names or aliases for the true cell value.
   *
   * @public
   */
  TruthyCellValueSynonyms?: string[] | undefined;

  /**
   * The semantic type falsey cell value.
   *
   * @public
   */
  FalseyCellValue?: string | undefined;

  /**
   * The other names or aliases for the false cell value.
   *
   * @public
   */
  FalseyCellValueSynonyms?: string[] | undefined;
}

/**
 * A structure that represents a calculated field.
 *
 * @public
 */
export interface TopicCalculatedField {
  /**
   * The calculated field name.
   *
   * @public
   */
  CalculatedFieldName: string | undefined;

  /**
   * The calculated field description.
   *
   * @public
   */
  CalculatedFieldDescription?: string | undefined;

  /**
   * The calculated field expression.
   *
   * @public
   */
  Expression: string | undefined;

  /**
   * The other names or aliases for the calculated field.
   *
   * @public
   */
  CalculatedFieldSynonyms?: string[] | undefined;

  /**
   * A boolean value that indicates if a calculated field is included in the topic.
   *
   * @public
   */
  IsIncludedInTopic?: boolean | undefined;

  /**
   * A Boolean value that indicates if a calculated field is visible in the autocomplete.
   *
   * @public
   */
  DisableIndexing?: boolean | undefined;

  /**
   * The column data role for a calculated field. Valid values for this structure are `DIMENSION` and `MEASURE`.
   *
   * @public
   */
  ColumnDataRole?: ColumnDataRole | undefined;

  /**
   * The level of time precision that is used to aggregate `DateTime` values.
   *
   * @public
   */
  TimeGranularity?: TopicTimeGranularity | undefined;

  /**
   * The default formatting definition.
   *
   * @public
   */
  DefaultFormatting?: DefaultFormatting | undefined;

  /**
   * The default aggregation. Valid values for this structure are `SUM`, `MAX`, `MIN`, `COUNT`, `DISTINCT_COUNT`, and `AVERAGE`.
   *
   * @public
   */
  Aggregation?: DefaultAggregation | undefined;

  /**
   * The order in which data is displayed for the calculated field when it's used in a comparative context.
   *
   * @public
   */
  ComparativeOrder?: ComparativeOrder | undefined;

  /**
   * The semantic type.
   *
   * @public
   */
  SemanticType?: SemanticType | undefined;

  /**
   * The list of aggregation types that are allowed for the calculated field. Valid values for this structure are `COUNT`, `DISTINCT_COUNT`, `MIN`, `MAX`, `MEDIAN`, `SUM`, `AVERAGE`, `STDEV`, `STDEVP`, `VAR`, `VARP`, and `PERCENTILE`.
   *
   * @public
   */
  AllowedAggregations?: AuthorSpecifiedAggregation[] | undefined;

  /**
   * The list of aggregation types that are not allowed for the calculated field. Valid values for this structure are `COUNT`, `DISTINCT_COUNT`, `MIN`, `MAX`, `MEDIAN`, `SUM`, `AVERAGE`, `STDEV`, `STDEVP`, `VAR`, `VARP`, and `PERCENTILE`.
   *
   * @public
   */
  NotAllowedAggregations?: AuthorSpecifiedAggregation[] | undefined;

  /**
   * A Boolean value that indicates whether to never aggregate calculated field in filters.
   *
   * @public
   */
  NeverAggregateInFilter?: boolean | undefined;

  /**
   * The other names or aliases for the calculated field cell value.
   *
   * @public
   */
  CellValueSynonyms?: CellValueSynonym[] | undefined;

  /**
   * The non additive for the table style target.
   *
   * @public
   */
  NonAdditive?: boolean | undefined;
}

/**
 * Represents a column in a dataset.
 *
 * @public
 */
export interface TopicColumn {
  /**
   * The name of the column.
   *
   * @public
   */
  ColumnName: string | undefined;

  /**
   * A user-friendly name for the column.
   *
   * @public
   */
  ColumnFriendlyName?: string | undefined;

  /**
   * A description of the column and its contents.
   *
   * @public
   */
  ColumnDescription?: string | undefined;

  /**
   * The other names or aliases for the column.
   *
   * @public
   */
  ColumnSynonyms?: string[] | undefined;

  /**
   * The role of the column in the data. Valid values are `DIMENSION` and `MEASURE`.
   *
   * @public
   */
  ColumnDataRole?: ColumnDataRole | undefined;

  /**
   * The type of aggregation that is performed on the column data when it's queried.
   *
   * @public
   */
  Aggregation?: DefaultAggregation | undefined;

  /**
   * A Boolean value that indicates whether the column is included in the query results.
   *
   * @public
   */
  IsIncludedInTopic?: boolean | undefined;

  /**
   * A Boolean value that indicates whether the column shows in the autocomplete functionality.
   *
   * @public
   */
  DisableIndexing?: boolean | undefined;

  /**
   * The order in which data is displayed for the column when it's used in a comparative context.
   *
   * @public
   */
  ComparativeOrder?: ComparativeOrder | undefined;

  /**
   * The semantic type of data contained in the column.
   *
   * @public
   */
  SemanticType?: SemanticType | undefined;

  /**
   * The level of time precision that is used to aggregate `DateTime` values.
   *
   * @public
   */
  TimeGranularity?: TopicTimeGranularity | undefined;

  /**
   * The list of aggregation types that are allowed for the column. Valid values for this structure are `COUNT`, `DISTINCT_COUNT`, `MIN`, `MAX`, `MEDIAN`, `SUM`, `AVERAGE`, `STDEV`, `STDEVP`, `VAR`, `VARP`, and `PERCENTILE`.
   *
   * @public
   */
  AllowedAggregations?: AuthorSpecifiedAggregation[] | undefined;

  /**
   * The list of aggregation types that are not allowed for the column. Valid values for this structure are `COUNT`, `DISTINCT_COUNT`, `MIN`, `MAX`, `MEDIAN`, `SUM`, `AVERAGE`, `STDEV`, `STDEVP`, `VAR`, `VARP`, and `PERCENTILE`.
   *
   * @public
   */
  NotAllowedAggregations?: AuthorSpecifiedAggregation[] | undefined;

  /**
   * The default formatting used for values in the column.
   *
   * @public
   */
  DefaultFormatting?: DefaultFormatting | undefined;

  /**
   * A Boolean value that indicates whether to aggregate the column data when it's used in a filter context.
   *
   * @public
   */
  NeverAggregateInFilter?: boolean | undefined;

  /**
   * The other names or aliases for the column cell value.
   *
   * @public
   */
  CellValueSynonyms?: CellValueSynonym[] | undefined;

  /**
   * The non additive value for the column.
   *
   * @public
   */
  NonAdditive?: boolean | undefined;
}

/**
 * A structure that represents a data aggregation.
 *
 * @public
 */
export interface DataAggregation {
  /**
   * The level of time precision that is used to aggregate `DateTime` values.
   *
   * @public
   */
  DatasetRowDateGranularity?: TopicTimeGranularity | undefined;

  /**
   * The column name for the default date.
   *
   * @public
   */
  DefaultDateColumnName?: string | undefined;
}

/**
 * A constant used in a category filter.
 *
 * @public
 */
export interface TopicCategoryFilterConstant {
  /**
   * The type of category filter constant. This element is used to specify whether a constant is a singular or collective. Valid values are `SINGULAR` and `COLLECTIVE`.
   *
   * @public
   */
  ConstantType?: ConstantType | undefined;

  /**
   * A singular constant used in a category filter. This element is used to specify a single value for the constant.
   *
   * @public
   */
  SingularConstant?: string | undefined;

  /**
   * A collective constant used in a category filter. This element is used to specify a list of values for the constant.
   *
   * @public
   */
  CollectiveConstant?: CollectiveConstant | undefined;
}

/**
 * A structure that represents a category filter.
 *
 * @public
 */
export interface TopicCategoryFilter {
  /**
   * The category filter function. Valid values for this structure are `EXACT` and `CONTAINS`.
   *
   * @public
   */
  CategoryFilterFunction?: CategoryFilterFunction | undefined;

  /**
   * The category filter type. This element is used to specify whether a filter is a simple category filter or an inverse category filter.
   *
   * @public
   */
  CategoryFilterType?: CategoryFilterType | undefined;

  /**
   * The constant used in a category filter.
   *
   * @public
   */
  Constant?: TopicCategoryFilterConstant | undefined;

  /**
   * A Boolean value that indicates if the filter is inverse.
   *
   * @public
   */
  Inverse?: boolean | undefined;

  /**
   * The `null` filter that is applied to the category filter.
   *
   * @public
   */
  NullFilter?: NullFilterType | undefined;
}

/**
 * A structure that represents a range constant.
 *
 * @public
 */
export interface RangeConstant {
  /**
   * The minimum value for a range constant.
   *
   * @public
   */
  Minimum?: string | undefined;

  /**
   * The maximum value for a range constant.
   *
   * @public
   */
  Maximum?: string | undefined;
}

/**
 * A constant value that is used in a range filter to specify the endpoints of the range.
 *
 * @public
 */
export interface TopicRangeFilterConstant {
  /**
   * The data type of the constant value that is used in a range filter. Valid values for this structure are `RANGE`.
   *
   * @public
   */
  ConstantType?: ConstantType | undefined;

  /**
   * The value of the constant that is used to specify the endpoints of a range filter.
   *
   * @public
   */
  RangeConstant?: RangeConstant | undefined;
}

/**
 * A filter used to restrict data based on a range of dates or times.
 *
 * @public
 */
export interface TopicDateRangeFilter {
  /**
   * A Boolean value that indicates whether the date range filter should include the boundary values. If set to true, the filter includes the start and end dates. If set to false, the filter excludes them.
   *
   * @public
   */
  Inclusive?: boolean | undefined;

  /**
   * The constant used in a date range filter.
   *
   * @public
   */
  Constant?: TopicRangeFilterConstant | undefined;

  /**
   * The `null` filter that is applied to the date range filter.
   *
   * @public
   */
  NullFilter?: NullFilterType | undefined;
}

/**
 * A structure that represents a singular filter constant, used in filters to specify a single value to match against.
 *
 * @public
 */
export interface TopicSingularFilterConstant {
  /**
   * The type of the singular filter constant. Valid values for this structure are `SINGULAR`.
   *
   * @public
   */
  ConstantType?: ConstantType | undefined;

  /**
   * The value of the singular filter constant.
   *
   * @public
   */
  SingularConstant?: string | undefined;
}

/**
 * The structure that represents a null filter.
 *
 * @public
 */
export interface TopicNullFilter {
  /**
   * The type of the null filter. Valid values for this type are `NULLS_ONLY`, `NON_NULLS_ONLY`, and `ALL_VALUES`.
   *
   * @public
   */
  NullFilterType?: NullFilterType | undefined;

  /**
   * A structure that represents a singular filter constant, used in filters to specify a single value to match against.
   *
   * @public
   */
  Constant?: TopicSingularFilterConstant | undefined;

  /**
   * A Boolean value that indicates if the filter is inverse.
   *
   * @public
   */
  Inverse?: boolean | undefined;
}

/**
 * A filter that filters topics based on the value of a numeric field. The filter includes only topics whose numeric field value matches the specified value.
 *
 * @public
 */
export interface TopicNumericEqualityFilter {
  /**
   * The constant used in a numeric equality filter.
   *
   * @public
   */
  Constant?: TopicSingularFilterConstant | undefined;

  /**
   * An aggregation function that specifies how to calculate the value of a numeric field for a topic. Valid values for this structure are `NO_AGGREGATION`, `SUM`, `AVERAGE`, `COUNT`, `DISTINCT_COUNT`, `MAX`, `MEDIAN`, `MIN`, `STDEV`, `STDEVP`, `VAR`, and `VARP`.
   *
   * @public
   */
  Aggregation?: NamedFilterAggType | undefined;

  /**
   * A Boolean value that indicates if the filter is inverse.
   *
   * @public
   */
  Inverse?: boolean | undefined;

  /**
   * The `null` filter that is applied to the numeric equality filter.
   *
   * @public
   */
  NullFilter?: NullFilterType | undefined;
}

/**
 * A filter that filters topics based on the value of a numeric field. The filter includes only topics whose numeric field value falls within the specified range.
 *
 * @public
 */
export interface TopicNumericRangeFilter {
  /**
   * A Boolean value that indicates whether the endpoints of the numeric range are included in the filter. If set to true, topics whose numeric field value is equal to the endpoint values will be included in the filter. If set to false, topics whose numeric field value is equal to the endpoint values will be excluded from the filter.
   *
   * @public
   */
  Inclusive?: boolean | undefined;

  /**
   * The constant used in a numeric range filter.
   *
   * @public
   */
  Constant?: TopicRangeFilterConstant | undefined;

  /**
   * An aggregation function that specifies how to calculate the value of a numeric field for a topic, Valid values for this structure are `NO_AGGREGATION`, `SUM`, `AVERAGE`, `COUNT`, `DISTINCT_COUNT`, `MAX`, `MEDIAN`, `MIN`, `STDEV`, `STDEVP`, `VAR`, and `VARP`.
   *
   * @public
   */
  Aggregation?: NamedFilterAggType | undefined;

  /**
   * A Boolean value that indicates if the filter is inverse.
   *
   * @public
   */
  Inverse?: boolean | undefined;

  /**
   * The `null` filter that is applied to the numeric range filter.
   *
   * @public
   */
  NullFilter?: NullFilterType | undefined;
}

/**
 * A structure that represents a relative date filter.
 *
 * @public
 */
export interface TopicRelativeDateFilter {
  /**
   * The level of time precision that is used to aggregate `DateTime` values.
   *
   * @public
   */
  TimeGranularity?: TopicTimeGranularity | undefined;

  /**
   * The function to be used in a relative date filter to determine the range of dates to include in the results. Valid values for this structure are `BEFORE`, `AFTER`, and `BETWEEN`.
   *
   * @public
   */
  RelativeDateFilterFunction?: TopicRelativeDateFilterFunction | undefined;

  /**
   * The constant used in a relative date filter.
   *
   * @public
   */
  Constant?: TopicSingularFilterConstant | undefined;

  /**
   * The `null` filter that is applied to the relative date filter.
   *
   * @public
   */
  NullFilter?: NullFilterType | undefined;
}

/**
 * A structure that represents a filter used to select items for a topic.
 *
 * @public
 */
export interface TopicFilter {
  /**
   * A description of the filter used to select items for a topic.
   *
   * @public
   */
  FilterDescription?: string | undefined;

  /**
   * The class of the filter. Valid values for this structure are `ENFORCED_VALUE_FILTER`, `CONDITIONAL_VALUE_FILTER`, and `NAMED_VALUE_FILTER`.
   *
   * @public
   */
  FilterClass?: FilterClass | undefined;

  /**
   * The name of the filter.
   *
   * @public
   */
  FilterName: string | undefined;

  /**
   * The other names or aliases for the filter.
   *
   * @public
   */
  FilterSynonyms?: string[] | undefined;

  /**
   * The name of the field that the filter operates on.
   *
   * @public
   */
  OperandFieldName: string | undefined;

  /**
   * The type of the filter. Valid values for this structure are `CATEGORY_FILTER`, `NUMERIC_EQUALITY_FILTER`, `NUMERIC_RANGE_FILTER`, `DATE_RANGE_FILTER`, and `RELATIVE_DATE_FILTER`.
   *
   * @public
   */
  FilterType?: NamedFilterType | undefined;

  /**
   * The category filter that is associated with this filter.
   *
   * @public
   */
  CategoryFilter?: TopicCategoryFilter | undefined;

  /**
   * The numeric equality filter.
   *
   * @public
   */
  NumericEqualityFilter?: TopicNumericEqualityFilter | undefined;

  /**
   * The numeric range filter.
   *
   * @public
   */
  NumericRangeFilter?: TopicNumericRangeFilter | undefined;

  /**
   * The date range filter.
   *
   * @public
   */
  DateRangeFilter?: TopicDateRangeFilter | undefined;

  /**
   * The relative date filter.
   *
   * @public
   */
  RelativeDateFilter?: TopicRelativeDateFilter | undefined;

  /**
   * The null filter.
   *
   * @public
   */
  NullFilter?: TopicNullFilter | undefined;
}

/**
 * A structure that represents a metric.
 *
 * @public
 */
export interface NamedEntityDefinitionMetric {
  /**
   * The aggregation of a named entity. Valid values for this structure are `SUM`, `MIN`, `MAX`, `COUNT`, `AVERAGE`, `DISTINCT_COUNT`, `STDEV`, `STDEVP`, `VAR`, `VARP`, `PERCENTILE`, `MEDIAN`, and `CUSTOM`.
   *
   * @public
   */
  Aggregation?: NamedEntityAggType | undefined;

  /**
   * The additional parameters for an aggregation function.
   *
   * @public
   */
  AggregationFunctionParameters?: Record<string, string> | undefined;
}

/**
 * A structure that represents a named entity.
 *
 * @public
 */
export interface NamedEntityDefinition {
  /**
   * The name of the entity.
   *
   * @public
   */
  FieldName?: string | undefined;

  /**
   * The property name to be used for the named entity.
   *
   * @public
   */
  PropertyName?: string | undefined;

  /**
   * The property role. Valid values for this structure are `PRIMARY` and `ID`.
   *
   * @public
   */
  PropertyRole?: PropertyRole | undefined;

  /**
   * The property usage. Valid values for this structure are `INHERIT`, `DIMENSION`, and `MEASURE`.
   *
   * @public
   */
  PropertyUsage?: PropertyUsage | undefined;

  /**
   * The definition of a metric.
   *
   * @public
   */
  Metric?: NamedEntityDefinitionMetric | undefined;

  /**
   * The rank order of the named entity definition.
   *
   * @public
   */
  RankOrder?: number | undefined;

  /**
   * The presentation order of the named entity definition.
   *
   * @public
   */
  PresentationOrder?: number | undefined;

  /**
   * A Boolean value that indicates whether the named entity definition is hidden.
   *
   * @public
   */
  IsHidden?: boolean | undefined;
}

/**
 * A structure that represents a semantic entity type.
 *
 * @public
 */
export interface SemanticEntityType {
  /**
   * The semantic entity type name.
   *
   * @public
   */
  TypeName?: string | undefined;

  /**
   * The semantic entity sub type name.
   *
   * @public
   */
  SubTypeName?: string | undefined;

  /**
   * The semantic entity type parameters.
   *
   * @public
   */
  TypeParameters?: Record<string, string> | undefined;
}

/**
 * A structure that represents a sort for a named entity.
 *
 * @public
 */
export interface NamedEntitySort {
  /**
   * The name of the field that is used for the sort.
   *
   * @public
   */
  FieldName: string | undefined;

  /**
   * The direction of the sort. Valid values are `ASCENDING` and `DESCENDING`.
   *
   * @public
   */
  Direction: TopicSortDirection | undefined;
}

/**
 * A structure that represents a named entity.
 *
 * @public
 */
export interface TopicNamedEntity {
  /**
   * The name of the named entity.
   *
   * @public
   */
  EntityName: string | undefined;

  /**
   * The description of the named entity.
   *
   * @public
   */
  EntityDescription?: string | undefined;

  /**
   * The other names or aliases for the named entity.
   *
   * @public
   */
  EntitySynonyms?: string[] | undefined;

  /**
   * The type of named entity that a topic represents.
   *
   * @public
   */
  SemanticEntityType?: SemanticEntityType | undefined;

  /**
   * The definition of a named entity.
   *
   * @public
   */
  Definition?: NamedEntityDefinition[] | undefined;

  /**
   * The sort configuration of the named entity.
   *
   * @public
   */
  Sort?: NamedEntitySort[] | undefined;

  /**
   * The rank order of the named entity.
   *
   * @public
   */
  RankOrder?: number | undefined;

  /**
   * The presentation order of the named entity.
   *
   * @public
   */
  PresentationOrder?: number | undefined;
}

/**
 * A structure that represents a dataset.
 *
 * @public
 */
export interface DatasetMetadata {
  /**
   * The Amazon Resource Name (ARN) of the dataset.
   *
   * @public
   */
  DatasetArn: string | undefined;

  /**
   * The name of the dataset.
   *
   * @public
   */
  DatasetName?: string | undefined;

  /**
   * The description of the dataset.
   *
   * @public
   */
  DatasetDescription?: string | undefined;

  /**
   * The definition of a data aggregation.
   *
   * @public
   */
  DataAggregation?: DataAggregation | undefined;

  /**
   * The list of filter definitions.
   *
   * @public
   */
  Filters?: TopicFilter[] | undefined;

  /**
   * The list of column definitions.
   *
   * @public
   */
  Columns?: TopicColumn[] | undefined;

  /**
   * The list of calculated field definitions.
   *
   * @public
   */
  CalculatedFields?: TopicCalculatedField[] | undefined;

  /**
   * The list of named entities definitions.
   *
   * @public
   */
  NamedEntities?: TopicNamedEntity[] | undefined;
}

/**
 * A structure that describes the details of a topic, such as its name, description, and associated data sets.
 *
 * @public
 */
export interface TopicDetails {
  /**
   * The name of the topic.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The description of the topic.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The user experience version of a topic.
   *
   * @public
   */
  UserExperienceVersion?: TopicUserExperienceVersion | undefined;

  /**
   * The data sets that the topic is associated with.
   *
   * @public
   */
  DataSets?: DatasetMetadata[] | undefined;

  /**
   * Configuration options for a `Topic`.
   *
   * @public
   */
  ConfigOptions?: TopicConfigOptions | undefined;
}

/**
 * @public
 */
export interface CreateTopicRequest {
  /**
   * The ID of the Amazon Web Services account that you want to create a topic in.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The ID for the topic that you want to create. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.
   *
   * @public
   */
  TopicId: string | undefined;

  /**
   * The definition of a topic to create.
   *
   * @public
   */
  Topic: TopicDetails | undefined;

  /**
   * Contains a map of the key-value pairs for the resource tag or tags that are assigned to the dataset.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The Folder ARN of the folder that you want the topic to reside in.
   *
   * @public
   */
  FolderArns?: string[] | undefined;

  /**
   * Custom instructions for the topic.
   *
   * @public
   */
  CustomInstructions?: CustomInstructions | undefined;
}

/**
 * @public
 */
export interface CreateTopicResponse {
  /**
   * The Amazon Resource Name (ARN) of the topic.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The ID for the topic that you want to create. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.
   *
   * @public
   */
  TopicId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the topic refresh.
   *
   * @public
   */
  RefreshArn?: string | undefined;

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
 * A structure that represents a topic refresh schedule.
 *
 * @public
 */
export interface TopicRefreshSchedule {
  /**
   * A Boolean value that controls whether to schedule is enabled.
   *
   * @public
   */
  IsEnabled: boolean | undefined;

  /**
   * A Boolean value that controls whether to schedule runs at the same schedule that is specified in SPICE dataset.
   *
   * @public
   */
  BasedOnSpiceSchedule: boolean | undefined;

  /**
   * The starting date and time for the refresh schedule.
   *
   * @public
   */
  StartingAt?: Date | undefined;

  /**
   * The timezone that you want the refresh schedule to use.
   *
   * @public
   */
  Timezone?: string | undefined;

  /**
   * The time of day when the refresh should run, for example, Monday-Sunday.
   *
   * @public
   */
  RepeatAt?: string | undefined;

  /**
   * The type of refresh schedule. Valid values for this structure are `HOURLY`, `DAILY`, `WEEKLY`, and `MONTHLY`.
   *
   * @public
   */
  TopicScheduleType?: TopicScheduleType | undefined;
}

/**
 * @public
 */
export interface CreateTopicRefreshScheduleRequest {
  /**
   * The ID of the Amazon Web Services account that contains the topic you're creating a refresh schedule for.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The ID of the topic that you want to modify. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.
   *
   * @public
   */
  TopicId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the dataset.
   *
   * @public
   */
  DatasetArn: string | undefined;

  /**
   * The name of the dataset.
   *
   * @public
   */
  DatasetName?: string | undefined;

  /**
   * The definition of a refresh schedule.
   *
   * @public
   */
  RefreshSchedule: TopicRefreshSchedule | undefined;
}

/**
 * @public
 */
export interface CreateTopicRefreshScheduleResponse {
  /**
   * The ID of the topic that you want to modify. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.
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
   * The Amazon Resource Name (ARN) of the dataset.
   *
   * @public
   */
  DatasetArn?: string | undefined;

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
 * A structure that represents an endpoint of a data set relation of a topic.
 *
 * @public
 */
export interface TopicV2DataSetRelationEndpoint {
  /**
   * The Amazon Resource Name (ARN) of the data set at this endpoint of the relation.
   *
   * @public
   */
  DataSetArn: string | undefined;

  /**
   * The names of the columns that are used in the data set relation.
   *
   * @public
   */
  ColumnNames: string[] | undefined;
}

/**
 * A structure that represents a relation between two data sets of a topic.
 *
 * @public
 */
export interface TopicV2DataSetRelation {
  /**
   * The left endpoint of the data set relation.
   *
   * @public
   */
  Left: TopicV2DataSetRelationEndpoint | undefined;

  /**
   * The right endpoint of the data set relation.
   *
   * @public
   */
  Right: TopicV2DataSetRelationEndpoint | undefined;
}

/**
 * A structure that represents a data set reference of a topic.
 *
 * @public
 */
export interface TopicV2DataSetReference {
  /**
   * The Amazon Resource Name (ARN) of the data set.
   *
   * @public
   */
  DataSetArn: string | undefined;

  /**
   * The name of the data set.
   *
   * @public
   */
  DataSetName?: string | undefined;
}

/**
 * The definition of a topic.
 *
 * @public
 */
export interface TopicV2Details {
  /**
   * The name of the topic.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The description of the topic.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The data sets that the topic is associated with.
   *
   * @public
   */
  DataSets?: TopicV2DataSetReference[] | undefined;

  /**
   * The relations between the data sets that the topic is associated with.
   *
   * @public
   */
  DataSetRelations?: TopicV2DataSetRelation[] | undefined;
}

/**
 * @public
 */
export interface CreateTopicV2Request {
  /**
   * The ID of the Amazon Web Services account that you want to create a topic in.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The ID for the topic that you want to create. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.
   *
   * @public
   */
  TopicId: string | undefined;

  /**
   * The definition of a topic to create.
   *
   * @public
   */
  Topic: TopicV2Details | undefined;

  /**
   * Contains a map of the key-value pairs for the resource tag or tags that are assigned to the topic.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The Amazon Resource Names (ARNs) of the folders that you want the topic to reside in.
   *
   * @public
   */
  FolderArns?: string[] | undefined;

  /**
   * Instructions that provide additional guidance and context for response generation.
   *
   * @public
   */
  CustomInstructions?: CustomInstructions | undefined;
}

/**
 * @public
 */
export interface CreateTopicV2Response {
  /**
   * The Amazon Resource Name (ARN) of the topic.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The ID for the topic that you want to create. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.
   *
   * @public
   */
  TopicId?: string | undefined;

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
export interface CreateVPCConnectionRequest {
  /**
   * The Amazon Web Services account ID of the account where you want to create a new VPC connection.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The ID of the VPC connection that you're creating. This ID is a unique identifier for each Amazon Web Services Region in an Amazon Web Services account.
   *
   * @public
   */
  VPCConnectionId: string | undefined;

  /**
   * The display name for the VPC connection.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A list of subnet IDs for the VPC connection.
   *
   * @public
   */
  SubnetIds: string[] | undefined;

  /**
   * A list of security group IDs for the VPC connection.
   *
   * @public
   */
  SecurityGroupIds: string[] | undefined;

  /**
   * A list of IP addresses of DNS resolver endpoints for the VPC connection.
   *
   * @public
   */
  DnsResolvers?: string[] | undefined;

  /**
   * The IAM role to associate with the VPC connection.
   *
   * @public
   */
  RoleArn: string | undefined;

  /**
   * A map of the key-value pairs for the resource tag or tags assigned to the VPC connection.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateVPCConnectionResponse {
  /**
   * The Amazon Resource Name (ARN) of the VPC connection.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The ID for the VPC connection that you're creating. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.
   *
   * @public
   */
  VPCConnectionId?: string | undefined;

  /**
   * The status of the creation of the VPC connection.
   *
   * @public
   */
  CreationStatus?: VPCConnectionResourceStatus | undefined;

  /**
   * The availability status of the VPC connection.
   *
   * @public
   */
  AvailabilityStatus?: VPCConnectionAvailabilityStatus | undefined;

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
 * The custom permissions profile.
 *
 * @public
 */
export interface CustomPermissions {
  /**
   * The Amazon Resource Name (ARN) of the custom permissions profile.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The name of the custom permissions profile.
   *
   * @public
   */
  CustomPermissionsName?: string | undefined;

  /**
   * A set of actions in the custom permissions profile.
   *
   * @public
   */
  Capabilities?: Capabilities | undefined;

  /**
   * The governance configuration for the custom permissions profile. When you enable governance for a category, Amazon Quick denies access to any current or new capability in that category unless you explicitly set that capability to `ALLOW` in `Capabilities`.
   *
   * @public
   */
  Governance?: Governance | undefined;
}

/**
 * Dashboard error.
 *
 * @public
 */
export interface DashboardError {
  /**
   * Type.
   *
   * @public
   */
  Type?: DashboardErrorType | undefined;

  /**
   * Message.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * Lists the violated entities that caused the dashboard error.
   *
   * @public
   */
  ViolatedEntities?: Entity[] | undefined;
}

/**
 * Dashboard version.
 *
 * @public
 */
export interface DashboardVersion {
  /**
   * The time that this dashboard version was created.
   *
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * Errors associated with this dashboard version.
   *
   * @public
   */
  Errors?: DashboardError[] | undefined;

  /**
   * Version number for this version of the dashboard.
   *
   * @public
   */
  VersionNumber?: number | undefined;

  /**
   * The HTTP status of the request.
   *
   * @public
   */
  Status?: ResourceStatus | undefined;

  /**
   * The Amazon Resource Name (ARN) of the resource.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * Source entity ARN.
   *
   * @public
   */
  SourceEntityArn?: string | undefined;

  /**
   * The Amazon Resource Names (ARNs) for the datasets that are associated with this version of the dashboard.
   *
   * @public
   */
  DataSetArns?: string[] | undefined;

  /**
   * The Amazon Resource Names (ARNs) for the topics that are associated with this version of the dashboard.
   *
   * @public
   */
  TopicArns?: string[] | undefined;

  /**
   * Description.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The ARN of the theme associated with a version of the dashboard.
   *
   * @public
   */
  ThemeArn?: string | undefined;

  /**
   * A list of the associated sheets with the unique identifier and name of each sheet.
   *
   * @public
   */
  Sheets?: Sheet[] | undefined;
}

/**
 * Dashboard.
 *
 * @public
 */
export interface Dashboard {
  /**
   * Dashboard ID.
   *
   * @public
   */
  DashboardId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the resource.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * A display name for the dashboard.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * Version.
   *
   * @public
   */
  Version?: DashboardVersion | undefined;

  /**
   * The time that this dashboard was created.
   *
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * The last time that this dashboard was published.
   *
   * @public
   */
  LastPublishedTime?: Date | undefined;

  /**
   * The last time that this dashboard was updated.
   *
   * @public
   */
  LastUpdatedTime?: Date | undefined;

  /**
   * A list of analysis Amazon Resource Names (ARNs) to be linked to the dashboard.
   *
   * @public
   */
  LinkEntities?: string[] | undefined;
}

/**
 * The dashboard customization summary configuration for an embedded Quick Sight dashboard.
 *
 * @public
 */
export interface DashboardCustomizationSummaryConfigurations {
  /**
   * The enabled status of the dashboard customization summary configuration for an embedded Quick Sight dashboard.
   *
   * @public
   */
  Enabled: boolean | undefined;
}

/**
 * A filter that you apply when searching for dashboards.
 *
 * @public
 */
export interface DashboardSearchFilter {
  /**
   * The comparison operator that you want to use as a filter, for example `"Operator": "StringEquals"`. Valid values are `"StringEquals"` and `"StringLike"`.
   *
   * If you set the operator value to `"StringEquals"`, you need to provide an ownership related filter in the `"NAME"` field and the arn of the user or group whose folders you want to search in the `"Value"` field. For example, `"Name":"DIRECT_QUICKSIGHT_OWNER", "Operator": "StringEquals", "Value": "arn:aws:quicksight:us-east-1:1:user/default/UserName1"`.
   *
   * If you set the value to `"StringLike"`, you need to provide the name of the folders you are searching for. For example, `"Name":"DASHBOARD_NAME", "Operator": "StringLike", "Value": "Test"`. The `"StringLike"` operator only supports the `NAME` value `DASHBOARD_NAME`.
   *
   * @public
   */
  Operator: FilterOperator | undefined;

  /**
   * The name of the value that you want to use as a filter, for example, `"Name": "QUICKSIGHT_OWNER"`.
   *
   * Valid values are defined as follows:
   *
   * - `QUICKSIGHT_VIEWER_OR_OWNER`: Provide an ARN of a user or group, and any dashboards with that ARN listed as one of the dashboards's owners or viewers are returned. Implicit permissions from folders or groups are considered.
   * - `QUICKSIGHT_OWNER`: Provide an ARN of a user or group, and any dashboards with that ARN listed as one of the owners of the dashboards are returned. Implicit permissions from folders or groups are considered.
   * - `DIRECT_QUICKSIGHT_SOLE_OWNER`: Provide an ARN of a user or group, and any dashboards with that ARN listed as the only owner of the dashboard are returned. Implicit permissions from folders or groups are not considered.
   * - `DIRECT_QUICKSIGHT_OWNER`: Provide an ARN of a user or group, and any dashboards with that ARN listed as one of the owners of the dashboards are returned. Implicit permissions from folders or groups are not considered.
   * - `DIRECT_QUICKSIGHT_VIEWER_OR_OWNER`: Provide an ARN of a user or group, and any dashboards with that ARN listed as one of the owners or viewers of the dashboards are returned. Implicit permissions from folders or groups are not considered.
   * - `DASHBOARD_NAME`: Any dashboards whose names have a substring match to this value will be returned.
   *
   * @public
   */
  Name?: DashboardFilterAttribute | undefined;

  /**
   * The value of the named item, in this case `QUICKSIGHT_USER`, that you want to use as a filter, for example, `"Value": "arn:aws:quicksight:us-east-1:1:user/default/UserName1"`.
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * Dashboard summary.
 *
 * @public
 */
export interface DashboardSummary {
  /**
   * The Amazon Resource Name (ARN) of the resource.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * Dashboard ID.
   *
   * @public
   */
  DashboardId?: string | undefined;

  /**
   * A display name for the dashboard.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The time that this dashboard was created.
   *
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * The last time that this dashboard was updated.
   *
   * @public
   */
  LastUpdatedTime?: Date | undefined;

  /**
   * Published version number.
   *
   * @public
   */
  PublishedVersionNumber?: number | undefined;

  /**
   * The last time that this dashboard was published.
   *
   * @public
   */
  LastPublishedTime?: Date | undefined;
}

/**
 * Dashboard version summary.
 *
 * @public
 */
export interface DashboardVersionSummary {
  /**
   * The Amazon Resource Name (ARN) of the resource.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The time that this dashboard version was created.
   *
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * Version number.
   *
   * @public
   */
  VersionNumber?: number | undefined;

  /**
   * The HTTP status of the request.
   *
   * @public
   */
  Status?: ResourceStatus | undefined;

  /**
   * Source entity ARN.
   *
   * @public
   */
  SourceEntityArn?: string | undefined;

  /**
   * Description.
   *
   * @public
   */
  Description?: string | undefined;
}

/**
 * The QA result that is made from dashboard visual.
 *
 * @public
 */
export interface DashboardVisualResult {
  /**
   * The ID of the dashboard.
   *
   * @public
   */
  DashboardId?: string | undefined;

  /**
   * The name of the dashboard.
   *
   * @public
   */
  DashboardName?: string | undefined;

  /**
   * The ID of the sheet.
   *
   * @public
   */
  SheetId?: string | undefined;

  /**
   * The name of the sheet.
   *
   * @public
   */
  SheetName?: string | undefined;

  /**
   * The ID of the visual.
   *
   * @public
   */
  VisualId?: string | undefined;

  /**
   * The title of the visual.
   *
   * @public
   */
  VisualTitle?: string | undefined;

  /**
   * The subtitle of the visual.
   *
   * @public
   */
  VisualSubtitle?: string | undefined;

  /**
   * The URL of the dashboard.
   *
   * @public
   */
  DashboardUrl?: string | undefined;
}

/**
 * Output column.
 *
 * @public
 */
export interface OutputColumn {
  /**
   * The display name of the column..
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * A unique identifier for the output column.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * A description for a column.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The data type of the column.
   *
   * @public
   */
  Type?: ColumnDataType | undefined;

  /**
   * The sub data type of the column.
   *
   * @public
   */
  SubType?: ColumnDataSubType | undefined;
}

/**
 * Dataset.
 *
 * @public
 */
export interface DataSet {
  /**
   * The Amazon Resource Name (ARN) of the resource.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The ID of the dataset. Limited to 96 characters.
   *
   * @public
   */
  DataSetId?: string | undefined;

  /**
   * A display name for the dataset.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The time that this dataset was created.
   *
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * The last time that this dataset was updated.
   *
   * @public
   */
  LastUpdatedTime?: Date | undefined;

  /**
   * Declares the physical tables that are available in the underlying data sources.
   *
   * @public
   */
  PhysicalTableMap?: Record<string, PhysicalTable> | undefined;

  /**
   * Configures the combination and transformation of the data from the physical tables.
   *
   * @public
   */
  LogicalTableMap?: Record<string, LogicalTable> | undefined;

  /**
   * The list of columns after all transforms. These columns are available in templates, analyses, and dashboards.
   *
   * @public
   */
  OutputColumns?: OutputColumn[] | undefined;

  /**
   * A value that indicates whether you want to import the data into SPICE.
   *
   * @public
   */
  ImportMode?: DataSetImportMode | undefined;

  /**
   * The amount of SPICE capacity used by this dataset. This is 0 if the dataset isn't imported into SPICE.
   *
   * @public
   */
  ConsumedSpiceCapacityInBytes?: number | undefined;

  /**
   * Groupings of columns that work together in certain Quick Sight features. Currently, only geospatial hierarchy is supported.
   *
   * @public
   */
  ColumnGroups?: ColumnGroup[] | undefined;

  /**
   * The folder that contains fields and nested subfolders for your dataset.
   *
   * @public
   */
  FieldFolders?: Record<string, FieldFolder> | undefined;

  /**
   * The row-level security configuration for the dataset.
   *
   * @public
   */
  RowLevelPermissionDataSet?: RowLevelPermissionDataSet | undefined;

  /**
   * The element you can use to define tags for row-level security.
   *
   * @public
   */
  RowLevelPermissionTagConfiguration?: RowLevelPermissionTagConfiguration | undefined;

  /**
   * A set of one or more definitions of a `ColumnLevelPermissionRule`.
   *
   * @public
   */
  ColumnLevelPermissionRules?: ColumnLevelPermissionRule[] | undefined;

  /**
   * The usage configuration to apply to child datasets that reference this dataset as a source.
   *
   * @public
   */
  DataSetUsageConfiguration?: DataSetUsageConfiguration | undefined;

  /**
   * The parameters that are declared in a dataset.
   *
   * @public
   */
  DatasetParameters?: DatasetParameter[] | undefined;

  /**
   * The performance optimization configuration of a dataset.
   *
   * @public
   */
  PerformanceConfiguration?: PerformanceConfiguration | undefined;

  /**
   * The usage of the dataset.
   *
   * @public
   */
  UseAs?: DataSetUseAs | undefined;

  /**
   * The data preparation configuration associated with this dataset.
   *
   * @public
   */
  DataPrepConfiguration?: DataPrepConfiguration | undefined;

  /**
   * The semantic model configuration associated with this dataset.
   *
   * @public
   */
  SemanticModelConfiguration?: SemanticModelConfiguration | undefined;
}

/**
 * A filter that you apply when searching for datasets.
 *
 * @public
 */
export interface DataSetSearchFilter {
  /**
   * The comparison operator that you want to use as a filter, for example `"Operator": "StringEquals"`. Valid values are `"StringEquals"` and `"StringLike"`.
   *
   * If you set the operator value to `"StringEquals"`, you need to provide an ownership related filter in the `"NAME"` field and the arn of the user or group whose datasets you want to search in the `"Value"` field. For example, `"Name":"QUICKSIGHT_OWNER", "Operator": "StringEquals", "Value": "arn:aws:quicksight:us-east- 1:1:user/default/UserName1"`.
   *
   * If you set the value to `"StringLike"`, you need to provide the name of the datasets you are searching for. For example, `"Name":"DATASET_NAME", "Operator": "StringLike", "Value": "Test"`. The `"StringLike"` operator only supports the `NAME` value `DATASET_NAME`.
   *
   * @public
   */
  Operator: FilterOperator | undefined;

  /**
   * The name of the value that you want to use as a filter, for example, `"Name": "QUICKSIGHT_OWNER"`.
   *
   * Valid values are defined as follows:
   *
   * - `QUICKSIGHT_VIEWER_OR_OWNER`: Provide an ARN of a user or group, and any datasets with that ARN listed as one of the dataset owners or viewers are returned. Implicit permissions from folders or groups are considered.
   * - `QUICKSIGHT_OWNER`: Provide an ARN of a user or group, and any datasets with that ARN listed as one of the owners of the dataset are returned. Implicit permissions from folders or groups are considered.
   * - `DIRECT_QUICKSIGHT_SOLE_OWNER`: Provide an ARN of a user or group, and any datasets with that ARN listed as the only owner of the dataset are returned. Implicit permissions from folders or groups are not considered.
   * - `DIRECT_QUICKSIGHT_OWNER`: Provide an ARN of a user or group, and any datasets with that ARN listed as one of the owners if the dataset are returned. Implicit permissions from folders or groups are not considered.
   * - `DIRECT_QUICKSIGHT_VIEWER_OR_OWNER`: Provide an ARN of a user or group, and any datasets with that ARN listed as one of the owners or viewers of the dataset are returned. Implicit permissions from folders or groups are not considered.
   * - `DATASET_NAME`: Any datasets whose names have a substring match to this value will be returned.
   *
   * @public
   */
  Name: DataSetFilterAttribute | undefined;

  /**
   * The value of the named item, in this case `QUICKSIGHT_OWNER`, that you want to use as a filter, for example, `"Value": "arn:aws:quicksight:us-east-1:1:user/default/UserName1"`.
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * Dataset summary.
 *
 * @public
 */
export interface DataSetSummary {
  /**
   * The Amazon Resource Name (ARN) of the dataset.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The ID of the dataset.
   *
   * @public
   */
  DataSetId?: string | undefined;

  /**
   * A display name for the dataset.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The time that this dataset was created.
   *
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * The last time that this dataset was updated.
   *
   * @public
   */
  LastUpdatedTime?: Date | undefined;

  /**
   * A value that indicates whether you want to import the data into SPICE.
   *
   * @public
   */
  ImportMode?: DataSetImportMode | undefined;

  /**
   * The row-level security configuration for the dataset in the legacy data preparation experience.
   *
   * @public
   */
  RowLevelPermissionDataSet?: RowLevelPermissionDataSet | undefined;

  /**
   * The row-level security configuration for the dataset in the new data preparation experience.
   *
   * @public
   */
  RowLevelPermissionDataSetMap?: Record<string, RowLevelPermissionDataSet> | undefined;

  /**
   * Whether or not the row level permission tags are applied.
   *
   * @public
   */
  RowLevelPermissionTagConfigurationApplied?: boolean | undefined;

  /**
   * A value that indicates if the dataset has column level permission configured.
   *
   * @public
   */
  ColumnLevelPermissionRulesApplied?: boolean | undefined;

  /**
   * The usage of the dataset.
   *
   * @public
   */
  UseAs?: DataSetUseAs | undefined;
}

/**
 * Error information for the data source creation or update.
 *
 * @public
 */
export interface DataSourceErrorInfo {
  /**
   * Error type.
   *
   * @public
   */
  Type?: DataSourceErrorInfoType | undefined;

  /**
   * Error message.
   *
   * @public
   */
  Message?: string | undefined;
}

/**
 * The structure of a data source.
 *
 * @public
 */
export interface DataSource {
  /**
   * The Amazon Resource Name (ARN) of the data source.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The ID of the data source. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.
   *
   * @public
   */
  DataSourceId?: string | undefined;

  /**
   * A display name for the data source.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The type of the data source. This type indicates which database engine the data source connects to.
   *
   * @public
   */
  Type?: DataSourceType | undefined;

  /**
   * The HTTP status of the request.
   *
   * @public
   */
  Status?: ResourceStatus | undefined;

  /**
   * The time that this data source was created.
   *
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * The last time that this data source was updated.
   *
   * @public
   */
  LastUpdatedTime?: Date | undefined;

  /**
   * The parameters that Quick Sight uses to connect to your underlying source. This is a variant type structure. For this structure to be valid, only one of the attributes can be non-null.
   *
   * @public
   */
  DataSourceParameters?: DataSourceParameters | undefined;

  /**
   * A set of alternate data source parameters that you want to share for the credentials stored with this data source. The credentials are applied in tandem with the data source parameters when you copy a data source by using a create or update request. The API operation compares the `DataSourceParameters` structure that's in the request with the structures in the `AlternateDataSourceParameters` allow list. If the structures are an exact match, the request is allowed to use the credentials from this existing data source. If the `AlternateDataSourceParameters` list is null, the `Credentials` originally used with this `DataSourceParameters` are automatically allowed.
   *
   * @public
   */
  AlternateDataSourceParameters?: DataSourceParameters[] | undefined;

  /**
   * The VPC connection information. You need to use this parameter only when you want Quick Sight to use a VPC connection when connecting to your underlying source.
   *
   * @public
   */
  VpcConnectionProperties?: VpcConnectionProperties | undefined;

  /**
   * Secure Socket Layer (SSL) properties that apply when Quick Sight connects to your underlying source.
   *
   * @public
   */
  SslProperties?: SslProperties | undefined;

  /**
   * Error information from the last update or the creation of the data source.
   *
   * @public
   */
  ErrorInfo?: DataSourceErrorInfo | undefined;

  /**
   * The Amazon Resource Name (ARN) of the secret associated with the data source in Amazon Secrets Manager.
   *
   * @public
   */
  SecretArn?: string | undefined;

  /**
   * The credential verification status of the data source. Valid values include:
   *
   * - `CONNECTED` – Credential validation succeeded.
   * - `AUTH_FAILED` – Credential validation failed.
   * - `NOT_VERIFIED` – Credential validation has not been performed.
   *
   * @public
   */
  CredentialStatus?: CredentialStatus | undefined;

  /**
   * The time that the credentials were last verified.
   *
   * @public
   */
  LastCredentialVerifiedAt?: Date | undefined;
}

/**
 * A filter that you apply when searching for data sources.
 *
 * @public
 */
export interface DataSourceSearchFilter {
  /**
   * The comparison operator that you want to use as a filter, for example `"Operator": "StringEquals"`. Valid values are `"StringEquals"` and `"StringLike"`.
   *
   * If you set the operator value to `"StringEquals"`, you need to provide an ownership related filter in the `"NAME"` field and the arn of the user or group whose data sources you want to search in the `"Value"` field. For example, `"Name":"DIRECT_QUICKSIGHT_OWNER", "Operator": "StringEquals", "Value": "arn:aws:quicksight:us-east-1:1:user/default/UserName1"`.
   *
   * If you set the value to `"StringLike"`, you need to provide the name of the data sources you are searching for. For example, `"Name":"DATASOURCE_NAME", "Operator": "StringLike", "Value": "Test"`. The `"StringLike"` operator only supports the `NAME` value `DATASOURCE_NAME`.
   *
   * @public
   */
  Operator: FilterOperator | undefined;

  /**
   * The name of the value that you want to use as a filter, for example, `"Name": "DIRECT_QUICKSIGHT_OWNER"`.
   *
   * Valid values are defined as follows:
   *
   * - `DIRECT_QUICKSIGHT_VIEWER_OR_OWNER`: Provide an ARN of a user or group, and any data sources with that ARN listed as one of the owners or viewers of the data sources are returned. Implicit permissions from folders or groups are not considered.
   * - `DIRECT_QUICKSIGHT_OWNER`: Provide an ARN of a user or group, and any data sources with that ARN listed as one of the owners if the data source are returned. Implicit permissions from folders or groups are not considered.
   * - `DIRECT_QUICKSIGHT_SOLE_OWNER`: Provide an ARN of a user or group, and any data sources with that ARN listed as the only owner of the data source are returned. Implicit permissions from folders or groups are not considered.
   * - `DATASOURCE_NAME`: Any data sources whose names have a substring match to the provided value are returned.
   *
   * @public
   */
  Name: DataSourceFilterAttribute | undefined;

  /**
   * The value of the named item, for example `DIRECT_QUICKSIGHT_OWNER`, that you want to use as a filter, for example, `"Value": "arn:aws:quicksight:us-east-1:1:user/default/UserName1"`.
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * A `DataSourceSummary` object that returns a summary of a data source.
 *
 * @public
 */
export interface DataSourceSummary {
  /**
   * The arn of the datasource.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The unique ID of the data source.
   *
   * @public
   */
  DataSourceId?: string | undefined;

  /**
   * The name of the data source.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The type of the data source.
   *
   * @public
   */
  Type?: DataSourceType | undefined;

  /**
   * The date and time that the data source was created. This value is expressed in MM-DD-YYYY HH:MM:SS format.
   *
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * The date and time the data source was last updated. This value is expressed in MM-DD-YYYY HH:MM:SS format.
   *
   * @public
   */
  LastUpdatedTime?: Date | undefined;
}

/**
 * @public
 */
export interface DeleteAccountCustomizationRequest {
  /**
   * The ID for the Amazon Web Services account that you want to delete Quick Sight customizations from.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The Quick Sight namespace that you're deleting the customizations from.
   *
   * @public
   */
  Namespace?: string | undefined;
}

/**
 * @public
 */
export interface DeleteAccountCustomizationResponse {
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
export interface DeleteAccountCustomPermissionRequest {
  /**
   * The ID of the Amazon Web Services account from which you want to unapply the custom permissions profile.
   *
   * @public
   */
  AwsAccountId: string | undefined;
}

/**
 * @public
 */
export interface DeleteAccountCustomPermissionResponse {
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
export interface DeleteAccountSubscriptionRequest {
  /**
   * The Amazon Web Services account ID of the account that you want to delete.
   *
   * @public
   */
  AwsAccountId: string | undefined;
}

/**
 * @public
 */
export interface DeleteAccountSubscriptionResponse {
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
export interface DeleteActionConnectorRequest {
  /**
   * The Amazon Web Services account ID that contains the action connector to delete.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The unique identifier of the action connector to delete.
   *
   * @public
   */
  ActionConnectorId: string | undefined;
}

/**
 * @public
 */
export interface DeleteActionConnectorResponse {
  /**
   * The Amazon Resource Name (ARN) of the deleted action connector.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The unique identifier of the deleted action connector.
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
 * @public
 */
export interface DeleteAgentRequest {
  /**
   * The unique identifier for the agent to delete.
   *
   * @public
   */
  AgentId: string | undefined;

  /**
   * The ID of the Amazon Web Services account that contains the agent.
   *
   * @public
   */
  AwsAccountId: string | undefined;
}

/**
 * @public
 */
export interface DeleteAgentResponse {
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
export interface DeleteAnalysisRequest {
  /**
   * The ID of the Amazon Web Services account where you want to delete an analysis.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The ID of the analysis that you're deleting.
   *
   * @public
   */
  AnalysisId: string | undefined;

  /**
   * A value that specifies the number of days that Amazon Quick Sight waits before it deletes the analysis. You can't use this parameter with the `ForceDeleteWithoutRecovery` option in the same API call. The default value is 30.
   *
   * @public
   */
  RecoveryWindowInDays?: number | undefined;

  /**
   * This option defaults to the value `NoForceDeleteWithoutRecovery`. To immediately delete the analysis, add the `ForceDeleteWithoutRecovery` option. You can't restore an analysis after it's deleted.
   *
   * @public
   */
  ForceDeleteWithoutRecovery?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteAnalysisResponse {
  /**
   * The HTTP status of the request.
   *
   * @public
   */
  Status?: number | undefined;

  /**
   * The Amazon Resource Name (ARN) of the deleted analysis.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The ID of the deleted analysis.
   *
   * @public
   */
  AnalysisId?: string | undefined;

  /**
   * The date and time that the analysis is scheduled to be deleted.
   *
   * @public
   */
  DeletionTime?: Date | undefined;

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
export interface DeleteAppRequest {
  /**
   * The ID of the Amazon Web Services account that contains the app.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The ID of the app that you want to delete.
   *
   * @public
   */
  AppId: string | undefined;
}

/**
 * @public
 */
export interface DeleteAppResponse {
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
export interface DeleteApprovalPolicyRequest {
  /**
   * The unique identifier of the approval policy to delete.
   *
   * @public
   */
  PolicyId: string | undefined;
}

/**
 * @public
 */
export interface DeleteApprovalPolicyResponse {}

/**
 * @public
 */
export interface DeleteBrandRequest {
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
}

/**
 * @public
 */
export interface DeleteBrandResponse {
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
export interface DeleteBrandAssignmentRequest {
  /**
   * The ID of the Amazon Web Services account that owns the brand assignment.
   *
   * @public
   */
  AwsAccountId: string | undefined;
}

/**
 * @public
 */
export interface DeleteBrandAssignmentResponse {
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
export interface DeleteCustomPermissionsRequest {
  /**
   * The ID of the Amazon Web Services account that contains the custom permissions profile that you want to delete.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The name of the custom permissions profile that you want to delete.
   *
   * @public
   */
  CustomPermissionsName: string | undefined;
}

/**
 * @public
 */
export interface DeleteCustomPermissionsResponse {
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
 * @public
 */
export interface DeleteDashboardRequest {
  /**
   * The ID of the Amazon Web Services account that contains the dashboard that you're deleting.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The ID for the dashboard.
   *
   * @public
   */
  DashboardId: string | undefined;

  /**
   * The version number of the dashboard. If the version number property is provided, only the specified version of the dashboard is deleted.
   *
   * @public
   */
  VersionNumber?: number | undefined;
}

/**
 * @public
 */
export interface DeleteDashboardResponse {
  /**
   * The HTTP status of the request.
   *
   * @public
   */
  Status?: number | undefined;

  /**
   * The Secure Socket Layer (SSL) properties that apply for the resource.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The ID of the dashboard.
   *
   * @public
   */
  DashboardId?: string | undefined;

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
export interface DeleteDataSetRequest {
  /**
   * The Amazon Web Services account ID.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The ID for the dataset that you want to delete. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.
   *
   * @public
   */
  DataSetId: string | undefined;
}

/**
 * @public
 */
export interface DeleteDataSetResponse {
  /**
   * The Amazon Resource Name (ARN) of the dataset.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The ID for the dataset that you want to delete. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.
   *
   * @public
   */
  DataSetId?: string | undefined;

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
export interface DeleteDataSetRefreshPropertiesRequest {
  /**
   * The Amazon Web Services account ID.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The ID of the dataset.
   *
   * @public
   */
  DataSetId: string | undefined;
}

/**
 * @public
 */
export interface DeleteDataSetRefreshPropertiesResponse {
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
export interface DeleteDataSourceRequest {
  /**
   * The Amazon Web Services account ID.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The ID of the data source. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.
   *
   * @public
   */
  DataSourceId: string | undefined;
}

/**
 * @public
 */
export interface DeleteDataSourceResponse {
  /**
   * The Amazon Resource Name (ARN) of the data source that you deleted.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The ID of the data source. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.
   *
   * @public
   */
  DataSourceId?: string | undefined;

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
export interface DeleteDefaultQBusinessApplicationRequest {
  /**
   * The ID of the Quick Sight account that you want to disconnect from a Amazon Q Business application.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The Quick Sight namespace that you want to delete a linked Amazon Q Business application from. If this field is left blank, the Amazon Q Business application is deleted from the default namespace. Currently, the default namespace is the only valid value for this parameter.
   *
   * @public
   */
  Namespace?: string | undefined;
}

/**
 * @public
 */
export interface DeleteDefaultQBusinessApplicationResponse {
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
export interface DeleteDlpSettingRequest {
  /**
   * The ID of the Amazon Web Services account that contains the DLP setting that you want to delete.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The ID of the DLP setting that you want to delete.
   *
   * @public
   */
  DlpSettingId: string | undefined;
}

/**
 * @public
 */
export interface DeleteDlpSettingResponse {
  /**
   * The Amazon Resource Name (ARN) of the deleted DLP setting.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The ID of the deleted DLP setting.
   *
   * @public
   */
  DlpSettingId: string | undefined;

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
export interface DeleteFlowRequest {
  /**
   * The ID of the Amazon Web Services account that contains the flow that you are deleting.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The unique identifier of the flow to delete.
   *
   * @public
   */
  FlowId: string | undefined;
}

/**
 * @public
 */
export interface DeleteFlowResponse {
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
export interface DeleteFolderRequest {
  /**
   * The ID for the Amazon Web Services account that contains the folder.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The ID of the folder.
   *
   * @public
   */
  FolderId: string | undefined;
}

/**
 * @public
 */
export interface DeleteFolderResponse {
  /**
   * The HTTP status of the request.
   *
   * @public
   */
  Status?: number | undefined;

  /**
   * The Amazon Resource Name of the deleted folder.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The ID of the folder.
   *
   * @public
   */
  FolderId?: string | undefined;

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
export interface DeleteFolderMembershipRequest {
  /**
   * The ID for the Amazon Web Services account that contains the folder.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The Folder ID.
   *
   * @public
   */
  FolderId: string | undefined;

  /**
   * The ID of the asset that you want to delete.
   *
   * @public
   */
  MemberId: string | undefined;

  /**
   * The member type of the asset that you want to delete from a folder.
   *
   * @public
   */
  MemberType: MemberType | undefined;
}

/**
 * @public
 */
export interface DeleteFolderMembershipResponse {
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
export interface DeleteGroupRequest {
  /**
   * The name of the group that you want to delete.
   *
   * @public
   */
  GroupName: string | undefined;

  /**
   * The ID for the Amazon Web Services account that the group is in. Currently, you use the ID for the Amazon Web Services account that contains your Amazon Quick Sight account.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The namespace of the group that you want to delete.
   *
   * @public
   */
  Namespace: string | undefined;
}

/**
 * @public
 */
export interface DeleteGroupResponse {
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
export interface DeleteGroupMembershipRequest {
  /**
   * The name of the user that you want to delete from the group membership.
   *
   * @public
   */
  MemberName: string | undefined;

  /**
   * The name of the group that you want to delete the user from.
   *
   * @public
   */
  GroupName: string | undefined;

  /**
   * The ID for the Amazon Web Services account that the group is in. Currently, you use the ID for the Amazon Web Services account that contains your Amazon Quick Sight account.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The namespace of the group that you want to remove a user from.
   *
   * @public
   */
  Namespace: string | undefined;
}

/**
 * @public
 */
export interface DeleteGroupMembershipResponse {
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
export interface DeleteIAMPolicyAssignmentRequest {
  /**
   * The Amazon Web Services account ID where you want to delete the IAM policy assignment.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The name of the assignment.
   *
   * @public
   */
  AssignmentName: string | undefined;

  /**
   * The namespace that contains the assignment.
   *
   * @public
   */
  Namespace: string | undefined;
}

/**
 * @public
 */
export interface DeleteIAMPolicyAssignmentResponse {
  /**
   * The name of the assignment.
   *
   * @public
   */
  AssignmentName?: string | undefined;

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
export interface DeleteIdentityPropagationConfigRequest {
  /**
   * The ID of the Amazon Web Services account that you want to delete an identity propagation configuration from.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The name of the Amazon Web Services service that you want to delete the associated access scopes and authorized targets from.
   *
   * @public
   */
  Service: ServiceType | undefined;
}

/**
 * @public
 */
export interface DeleteIdentityPropagationConfigResponse {
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
export interface DeleteKnowledgeBaseRequest {
  /**
   * The ID of the Amazon Web Services account that contains the knowledge base.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The unique identifier for the knowledge base.
   *
   * @public
   */
  KnowledgeBaseId: string | undefined;
}

/**
 * @public
 */
export interface DeleteKnowledgeBaseResponse {
  /**
   * The ARN of the deleted knowledge base.
   *
   * @public
   */
  KnowledgeBaseArn: string | undefined;

  /**
   * The ID of the deleted knowledge base.
   *
   * @public
   */
  KnowledgeBaseId: string | undefined;

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
export interface DeleteLimitsProfileRequest {
  /**
   * The unique identifier for the limits profile to delete.
   *
   * @public
   */
  profileId: string | undefined;

  /**
   * The ID of the Amazon Web Services account that contains the limits profile.
   *
   * @public
   */
  accountId: string | undefined;
}

/**
 * @public
 */
export interface DeleteLimitsProfileResponse {
  /**
   * The Amazon Resource Name (ARN) of the deleted limits profile.
   *
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface DeleteNamespaceRequest {
  /**
   * The ID for the Amazon Web Services account that you want to delete the Quick Sight namespace from.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The namespace that you want to delete.
   *
   * @public
   */
  Namespace: string | undefined;
}

/**
 * @public
 */
export interface DeleteNamespaceResponse {
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
export interface DeleteOAuthClientApplicationRequest {
  /**
   * The Amazon Web Services account ID.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The ID of the OAuthClientApplication that you want to delete.
   *
   * @public
   */
  OAuthClientApplicationId: string | undefined;
}

/**
 * @public
 */
export interface DeleteOAuthClientApplicationResponse {
  /**
   * The Amazon Resource Name (ARN) of the OAuthClientApplication that you deleted.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The ID of the OAuthClientApplication. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.
   *
   * @public
   */
  OAuthClientApplicationId?: string | undefined;

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
export interface DeleteRefreshScheduleRequest {
  /**
   * The ID of the dataset.
   *
   * @public
   */
  DataSetId: string | undefined;

  /**
   * The Amazon Web Services account ID.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The ID of the refresh schedule.
   *
   * @public
   */
  ScheduleId: string | undefined;
}

/**
 * @public
 */
export interface DeleteRefreshScheduleResponse {
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

  /**
   * The ID of the refresh schedule.
   *
   * @public
   */
  ScheduleId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for the refresh schedule.
   *
   * @public
   */
  Arn?: string | undefined;
}

/**
 * @public
 */
export interface DeleteRoleCustomPermissionRequest {
  /**
   * The role that you want to remove permissions from.
   *
   * @public
   */
  Role: Role | undefined;

  /**
   * The ID for the Amazon Web Services account that the group is in. Currently, you use the ID for the Amazon Web Services account that contains your Amazon Quick Sight account.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The namespace that includes the role.
   *
   * @public
   */
  Namespace: string | undefined;
}

/**
 * @public
 */
export interface DeleteRoleCustomPermissionResponse {
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
export interface DeleteRoleMembershipRequest {
  /**
   * The name of the group.
   *
   * @public
   */
  MemberName: string | undefined;

  /**
   * The role that you want to remove permissions from.
   *
   * @public
   */
  Role: Role | undefined;

  /**
   * The ID for the Amazon Web Services account that you want to create a group in. The Amazon Web Services account ID that you provide must be the same Amazon Web Services account that contains your Amazon Quick Sight account.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The namespace that contains the role.
   *
   * @public
   */
  Namespace: string | undefined;
}

/**
 * @public
 */
export interface DeleteRoleMembershipResponse {
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
export interface DeleteSpaceRequest {
  /**
   * The ID of the Amazon Web Services account that contains the space.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The ID of the space that you want to delete.
   *
   * @public
   */
  SpaceId: string | undefined;
}

/**
 * @public
 */
export interface DeleteSpaceResponse {
  /**
   * The ID of the space.
   *
   * @public
   */
  spaceId: string | undefined;

  /**
   * The ARN of the space.
   *
   * @public
   */
  spaceArn?: string | undefined;

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
export interface DeleteTemplateRequest {
  /**
   * The ID of the Amazon Web Services account that contains the template that you're deleting.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * An ID for the template you want to delete.
   *
   * @public
   */
  TemplateId: string | undefined;

  /**
   * Specifies the version of the template that you want to delete. If you don't provide a version number, `DeleteTemplate` deletes all versions of the template.
   *
   * @public
   */
  VersionNumber?: number | undefined;
}

/**
 * @public
 */
export interface DeleteTemplateResponse {
  /**
   * The Amazon Web Services request ID for this operation.
   *
   * @public
   */
  RequestId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the resource.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * An ID for the template.
   *
   * @public
   */
  TemplateId?: string | undefined;

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
export interface DeleteTemplateAliasRequest {
  /**
   * The ID of the Amazon Web Services account that contains the item to delete.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The ID for the template that the specified alias is for.
   *
   * @public
   */
  TemplateId: string | undefined;

  /**
   * The name for the template alias. To delete a specific alias, you delete the version that the alias points to. You can specify the alias name, or specify the latest version of the template by providing the keyword `$LATEST` in the `AliasName` parameter.
   *
   * @public
   */
  AliasName: string | undefined;
}

/**
 * @public
 */
export interface DeleteTemplateAliasResponse {
  /**
   * The HTTP status of the request.
   *
   * @public
   */
  Status?: number | undefined;

  /**
   * An ID for the template associated with the deletion.
   *
   * @public
   */
  TemplateId?: string | undefined;

  /**
   * The name for the template alias.
   *
   * @public
   */
  AliasName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the template you want to delete.
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
 * @public
 */
export interface DeleteThemeRequest {
  /**
   * The ID of the Amazon Web Services account that contains the theme that you're deleting.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * An ID for the theme that you want to delete.
   *
   * @public
   */
  ThemeId: string | undefined;

  /**
   * The version of the theme that you want to delete.
   *
   * **Note:** If you don't provide a version number, you're using this call to `DeleteTheme` to delete all versions of the theme.
   *
   * @public
   */
  VersionNumber?: number | undefined;
}

/**
 * @public
 */
export interface DeleteThemeResponse {
  /**
   * The Amazon Resource Name (ARN) of the resource.
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

  /**
   * The HTTP status of the request.
   *
   * @public
   */
  Status?: number | undefined;

  /**
   * An ID for the theme.
   *
   * @public
   */
  ThemeId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteThemeAliasRequest {
  /**
   * The ID of the Amazon Web Services account that contains the theme alias to delete.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The ID for the theme that the specified alias is for.
   *
   * @public
   */
  ThemeId: string | undefined;

  /**
   * The unique name for the theme alias to delete.
   *
   * @public
   */
  AliasName: string | undefined;
}

/**
 * @public
 */
export interface DeleteThemeAliasResponse {
  /**
   * The name for the theme alias.
   *
   * @public
   */
  AliasName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the theme resource using the deleted alias.
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

  /**
   * The HTTP status of the request.
   *
   * @public
   */
  Status?: number | undefined;

  /**
   * An ID for the theme associated with the deletion.
   *
   * @public
   */
  ThemeId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteTopicRequest {
  /**
   * The ID of the Amazon Web Services account that contains the topic that you want to delete.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The ID of the topic that you want to delete. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.
   *
   * @public
   */
  TopicId: string | undefined;
}

/**
 * @public
 */
export interface DeleteTopicResponse {
  /**
   * The Amazon Resource Name (ARN) of the topic.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The ID of the topic that you want to delete. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.
   *
   * @public
   */
  TopicId?: string | undefined;

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
export interface DeleteTopicRefreshScheduleRequest {
  /**
   * The Amazon Web Services account ID.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The ID of the topic that you want to modify. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.
   *
   * @public
   */
  TopicId: string | undefined;

  /**
   * The ID of the dataset.
   *
   * @public
   */
  DatasetId: string | undefined;
}

/**
 * @public
 */
export interface DeleteTopicRefreshScheduleResponse {
  /**
   * The ID of the topic that you want to modify. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.
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
   * The Amazon Resource Name (ARN) of the dataset.
   *
   * @public
   */
  DatasetArn?: string | undefined;

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
export interface DeleteTopicV2Request {
  /**
   * The ID of the Amazon Web Services account that contains the topic that you want to delete.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The ID of the topic that you want to delete. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.
   *
   * @public
   */
  TopicId: string | undefined;
}

/**
 * @public
 */
export interface DeleteTopicV2Response {
  /**
   * The Amazon Resource Name (ARN) of the topic.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The ID of the topic that you want to delete. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.
   *
   * @public
   */
  TopicId?: string | undefined;

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
export interface DeleteUserRequest {
  /**
   * The name of the user that you want to delete.
   *
   * @public
   */
  UserName: string | undefined;

  /**
   * The ID for the Amazon Web Services account that the user is in. Currently, you use the ID for the Amazon Web Services account that contains your Amazon Quick Sight account.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The namespace. Currently, you should set this to `default`.
   *
   * @public
   */
  Namespace: string | undefined;
}

/**
 * @public
 */
export interface DeleteUserResponse {
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
