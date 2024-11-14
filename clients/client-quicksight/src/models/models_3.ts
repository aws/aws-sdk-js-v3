// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import {
  AccountCustomization,
  AccountInfo,
  AccountSettings,
  Analysis,
  AnalysisDefaults,
  AnalysisError,
  AssetOptions,
  CalculatedField,
  CalculatedFieldFilterSensitiveLog,
  ColumnConfiguration,
  ColumnConfigurationFilterSensitiveLog,
  Entity,
  FilterGroup,
  ParameterDeclaration,
  ParameterDeclarationFilterSensitiveLog,
  QueryExecutionOptions,
  ResourceStatus,
  Sheet,
  TopicTimeGranularity,
} from "./models_0";

import {
  _Parameters,
  _ParametersFilterSensitiveLog,
  AnalysisDefinition,
  AnonymousUserSnapshotJobResult,
  AssetBundleCloudFormationOverridePropertyConfiguration,
  AssetBundleExportFormat,
  AssetBundleExportJobError,
  AssetBundleExportJobStatus,
  AssetBundleExportJobValidationStrategy,
  AssetBundleExportJobWarning,
  AssetBundleImportFailureAction,
  AssetBundleImportJobError,
  AssetBundleImportJobOverrideParameters,
  AssetBundleImportJobOverridePermissions,
  AssetBundleImportJobOverrideTags,
  AssetBundleImportJobOverrideValidationStrategy,
  AssetBundleImportJobStatus,
  AssetBundleImportJobWarning,
  AssetBundleImportSourceDescription,
  AssetBundleImportSourceDescriptionFilterSensitiveLog,
  AssignmentStatus,
  AuthorSpecifiedAggregation,
  BorderStyle,
  BrandDefinition,
  BrandDetail,
  Capabilities,
  CastColumnTypeOperation,
  CategoryFilterFunction,
  CategoryFilterType,
  CellValueSynonym,
  CollectiveConstant,
  ColumnDataRole,
  ColumnDataSubType,
  ColumnDataType,
  ColumnGroup,
  ColumnGroupSchema,
  ColumnLevelPermissionRule,
  ColumnSchema,
  ColumnTag,
  ColumnTagFilterSensitiveLog,
  ColumnTagName,
  ComparativeOrder,
  ConstantType,
  CreateColumnsOperation,
  CreateColumnsOperationFilterSensitiveLog,
  DashboardPublishOptions,
  DashboardVersionDefinition,
  DatasetParameter,
  DataSetReference,
  DataSourceParameters,
  DisplayFormat,
  DisplayFormatOptions,
  FilterClass,
  FilterOperator,
  LinkSharingConfiguration,
  ResourcePermission,
  ServiceType,
  SheetDefinition,
  SnapshotFile,
  SnapshotS3DestinationConfiguration,
  SslProperties,
  Tag,
  ValidationStrategy,
  VpcConnectionProperties,
} from "./models_2";

import { QuickSightServiceException as __BaseException } from "./QuickSightServiceException";

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
 * @public
 * @enum
 */
export const Status = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type Status = (typeof Status)[keyof typeof Status];

/**
 * <p>Information about a dataset that contains permissions for row-level security (RLS).
 *             The permissions dataset maps fields to users or groups. For more information, see
 *             <a href="https://docs.aws.amazon.com/quicksight/latest/user/restrict-access-to-a-data-set-using-row-level-security.html">Using Row-Level Security (RLS) to Restrict Access to a Dataset</a> in the <i>Amazon QuickSight User
 *                 Guide</i>.</p>
 *          <p>The option to deny permissions by setting <code>PermissionPolicy</code> to <code>DENY_ACCESS</code> is
 *             not supported for new RLS datasets.</p>
 * @public
 */
export interface RowLevelPermissionDataSet {
  /**
   * <p>The namespace associated with the dataset that contains permissions for RLS.</p>
   * @public
   */
  Namespace?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the dataset that contains permissions for RLS.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The type of permissions to use when interpreting the permissions for RLS. <code>DENY_ACCESS</code>
   *         is included for backward compatibility only.</p>
   * @public
   */
  PermissionPolicy: RowLevelPermissionPolicy | undefined;

  /**
   * <p>The user or group rules associated with the dataset that contains permissions for RLS.</p>
   *          <p>By default, <code>FormatVersion</code> is <code>VERSION_1</code>. When <code>FormatVersion</code> is <code>VERSION_1</code>, <code>UserName</code> and <code>GroupName</code> are required. When <code>FormatVersion</code> is <code>VERSION_2</code>, <code>UserARN</code> and <code>GroupARN</code> are required, and <code>Namespace</code> must not exist.</p>
   * @public
   */
  FormatVersion?: RowLevelPermissionFormatVersion | undefined;

  /**
   * <p>The status of the row-level security permission dataset. If enabled, the status is <code>ENABLED</code>. If disabled, the status is <code>DISABLED</code>.</p>
   * @public
   */
  Status?: Status | undefined;
}

/**
 * <p>A set of rules associated with a tag.</p>
 * @public
 */
export interface RowLevelPermissionTagRule {
  /**
   * <p>The unique key for a tag.</p>
   * @public
   */
  TagKey: string | undefined;

  /**
   * <p>The column name that a tag key is assigned to.</p>
   * @public
   */
  ColumnName: string | undefined;

  /**
   * <p>A string that you want to use to delimit the values when you pass the values at run time. For example, you can delimit the values with a comma.</p>
   * @public
   */
  TagMultiValueDelimiter?: string | undefined;

  /**
   * <p>A string that you want to use to filter by all the values in a column in the dataset and don’t want to list the values one by one. For example, you can use an asterisk as your match all value.</p>
   * @public
   */
  MatchAllValue?: string | undefined;
}

/**
 * <p>The configuration of tags on a dataset to set row-level security. </p>
 * @public
 */
export interface RowLevelPermissionTagConfiguration {
  /**
   * <p>The status of row-level security tags. If enabled, the status is <code>ENABLED</code>. If disabled, the status is <code>DISABLED</code>.</p>
   * @public
   */
  Status?: Status | undefined;

  /**
   * <p>A set of rules associated with row-level security, such as the tag names and columns that they are assigned to.</p>
   * @public
   */
  TagRules: RowLevelPermissionTagRule[] | undefined;

  /**
   * <p>A list of tag configuration rules to apply to a dataset. All tag configurations have the OR condition. Tags within each tile will be joined (AND). At least one rule in this structure must have all tag values assigned to it to apply Row-level security (RLS) to the dataset.</p>
   * @public
   */
  TagRuleConfigurations?: string[][] | undefined;
}

/**
 * @public
 */
export interface CreateDataSetRequest {
  /**
   * <p>The Amazon Web Services account ID.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>An ID for the dataset that you want to create. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
   * @public
   */
  DataSetId: string | undefined;

  /**
   * <p>The display name for the dataset.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>Declares the physical tables that are available in the underlying data sources.</p>
   * @public
   */
  PhysicalTableMap: Record<string, PhysicalTable> | undefined;

  /**
   * <p>Configures the combination and transformation of the data from the physical tables.</p>
   * @public
   */
  LogicalTableMap?: Record<string, LogicalTable> | undefined;

  /**
   * <p>Indicates whether you want to import the data into SPICE.</p>
   * @public
   */
  ImportMode: DataSetImportMode | undefined;

  /**
   * <p>Groupings of columns that work together in certain Amazon QuickSight features. Currently, only geospatial hierarchy is supported.</p>
   * @public
   */
  ColumnGroups?: ColumnGroup[] | undefined;

  /**
   * <p>The folder that contains fields and nested subfolders for your dataset.</p>
   * @public
   */
  FieldFolders?: Record<string, FieldFolder> | undefined;

  /**
   * <p>A list of resource permissions on the dataset.</p>
   * @public
   */
  Permissions?: ResourcePermission[] | undefined;

  /**
   * <p>The row-level security configuration for the data that you want to create.</p>
   * @public
   */
  RowLevelPermissionDataSet?: RowLevelPermissionDataSet | undefined;

  /**
   * <p>The configuration of tags on a dataset to set row-level security. Row-level security tags are currently supported for anonymous embedding only.</p>
   * @public
   */
  RowLevelPermissionTagConfiguration?: RowLevelPermissionTagConfiguration | undefined;

  /**
   * <p>A set of one or more definitions of a <code>
   *                <a href="https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ColumnLevelPermissionRule.html">ColumnLevelPermissionRule</a>
   *             </code>.</p>
   * @public
   */
  ColumnLevelPermissionRules?: ColumnLevelPermissionRule[] | undefined;

  /**
   * <p>Contains a map of the key-value pairs for the resource tag or tags assigned to the dataset.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The usage configuration to apply to child datasets that reference this dataset as a source.</p>
   * @public
   */
  DataSetUsageConfiguration?: DataSetUsageConfiguration | undefined;

  /**
   * <p>The parameter declarations of the dataset.</p>
   * @public
   */
  DatasetParameters?: DatasetParameter[] | undefined;

  /**
   * <p>When you create the dataset, Amazon QuickSight adds the dataset to these folders.</p>
   * @public
   */
  FolderArns?: string[] | undefined;
}

/**
 * @public
 */
export interface CreateDataSetResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the dataset.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The ID for the dataset that you want to create. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
   * @public
   */
  DataSetId?: string | undefined;

  /**
   * <p>The ARN for the ingestion, which is triggered as a result of dataset creation if the import
   * 			mode is SPICE.</p>
   * @public
   */
  IngestionArn?: string | undefined;

  /**
   * <p>The ID of the ingestion, which is triggered as a result of dataset creation if the import
   * 			mode is SPICE.</p>
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
 * <p>The combination of user name and password that are used as credentials.</p>
 * @public
 */
export interface CredentialPair {
  /**
   * <p>User name.</p>
   * @public
   */
  Username: string | undefined;

  /**
   * <p>Password.</p>
   * @public
   */
  Password: string | undefined;

  /**
   * <p>A set of alternate data source parameters that you want to share for these
   *             credentials. The credentials are applied in tandem with the data source parameters when
   *             you copy a data source by using a create or update request. The API operation compares
   *             the <code>DataSourceParameters</code> structure that's in the request with the
   *             structures in the <code>AlternateDataSourceParameters</code> allow list. If the
   *             structures are an exact match, the request is allowed to use the new data source with
   *             the existing credentials. If the <code>AlternateDataSourceParameters</code> list is
   *             null, the <code>DataSourceParameters</code> originally used with these
   *                 <code>Credentials</code> is automatically allowed.</p>
   * @public
   */
  AlternateDataSourceParameters?: DataSourceParameters[] | undefined;
}

/**
 * <p>Data source credentials. This is a variant type structure. For this structure to be
 *             valid, only one of the attributes can be non-null.</p>
 * @public
 */
export interface DataSourceCredentials {
  /**
   * <p>Credential pair. For more information, see
   *             <code>
   *                <a href="https://docs.aws.amazon.com/quicksight/latest/APIReference/API_CredentialPair.html">CredentialPair</a>
   *             </code>.</p>
   * @public
   */
  CredentialPair?: CredentialPair | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of a data source that has the credential pair that you
   *             want to use. When <code>CopySourceArn</code> is not null, the credential pair from the
   *             data source in the ARN is used as the credentials for the
   *             <code>DataSourceCredentials</code> structure.</p>
   * @public
   */
  CopySourceArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the secret associated with the data source in Amazon Secrets Manager.</p>
   * @public
   */
  SecretArn?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const DataSourceType = {
  ADOBE_ANALYTICS: "ADOBE_ANALYTICS",
  AMAZON_ELASTICSEARCH: "AMAZON_ELASTICSEARCH",
  AMAZON_OPENSEARCH: "AMAZON_OPENSEARCH",
  ATHENA: "ATHENA",
  AURORA: "AURORA",
  AURORA_POSTGRESQL: "AURORA_POSTGRESQL",
  AWS_IOT_ANALYTICS: "AWS_IOT_ANALYTICS",
  BIGQUERY: "BIGQUERY",
  DATABRICKS: "DATABRICKS",
  EXASOL: "EXASOL",
  GITHUB: "GITHUB",
  JIRA: "JIRA",
  MARIADB: "MARIADB",
  MYSQL: "MYSQL",
  ORACLE: "ORACLE",
  POSTGRESQL: "POSTGRESQL",
  PRESTO: "PRESTO",
  REDSHIFT: "REDSHIFT",
  S3: "S3",
  SALESFORCE: "SALESFORCE",
  SERVICENOW: "SERVICENOW",
  SNOWFLAKE: "SNOWFLAKE",
  SPARK: "SPARK",
  SQLSERVER: "SQLSERVER",
  STARBURST: "STARBURST",
  TERADATA: "TERADATA",
  TIMESTREAM: "TIMESTREAM",
  TRINO: "TRINO",
  TWITTER: "TWITTER",
} as const;

/**
 * @public
 */
export type DataSourceType = (typeof DataSourceType)[keyof typeof DataSourceType];

/**
 * @public
 */
export interface CreateDataSourceRequest {
  /**
   * <p>The Amazon Web Services account ID.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>An ID for the data source. This ID is unique per Amazon Web Services Region for each Amazon Web Services account. </p>
   * @public
   */
  DataSourceId: string | undefined;

  /**
   * <p>A display name for the data source.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The type of the data source. To return a
   * 			list of all data sources, use <code>ListDataSources</code>.</p>
   *          <p>Use <code>AMAZON_ELASTICSEARCH</code> for Amazon OpenSearch Service.</p>
   * @public
   */
  Type: DataSourceType | undefined;

  /**
   * <p>The parameters that Amazon QuickSight uses to connect to your underlying source.</p>
   * @public
   */
  DataSourceParameters?: DataSourceParameters | undefined;

  /**
   * <p>The credentials Amazon QuickSight that uses to connect to your underlying source. Currently, only
   * 			credentials based on user name and password are supported.</p>
   * @public
   */
  Credentials?: DataSourceCredentials | undefined;

  /**
   * <p>A list of resource permissions on the data source.</p>
   * @public
   */
  Permissions?: ResourcePermission[] | undefined;

  /**
   * <p>Use this parameter only when you want Amazon QuickSight to use a VPC connection when connecting to
   * 			your underlying source.</p>
   * @public
   */
  VpcConnectionProperties?: VpcConnectionProperties | undefined;

  /**
   * <p>Secure Socket Layer (SSL) properties that apply when Amazon QuickSight connects to your underlying source.</p>
   * @public
   */
  SslProperties?: SslProperties | undefined;

  /**
   * <p>Contains a map of the key-value pairs for the resource tag or tags assigned to the data source.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>When you create the data source, Amazon QuickSight adds the data source to these folders.</p>
   * @public
   */
  FolderArns?: string[] | undefined;
}

/**
 * @public
 */
export interface CreateDataSourceResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the data source.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The ID of the data source. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
   * @public
   */
  DataSourceId?: string | undefined;

  /**
   * <p>The status of creating the data source.</p>
   * @public
   */
  CreationStatus?: ResourceStatus | undefined;

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
 * <p>The customer managed key that is registered to your Amazon QuickSight account is unavailable.</p>
 * @public
 */
export class CustomerManagedKeyUnavailableException extends __BaseException {
  readonly name: "CustomerManagedKeyUnavailableException" = "CustomerManagedKeyUnavailableException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   * @public
   */
  RequestId?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CustomerManagedKeyUnavailableException, __BaseException>) {
    super({
      name: "CustomerManagedKeyUnavailableException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CustomerManagedKeyUnavailableException.prototype);
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

/**
 * @public
 * @enum
 */
export const FolderType = {
  RESTRICTED: "RESTRICTED",
  SHARED: "SHARED",
} as const;

/**
 * @public
 */
export type FolderType = (typeof FolderType)[keyof typeof FolderType];

/**
 * @public
 * @enum
 */
export const SharingModel = {
  ACCOUNT: "ACCOUNT",
  NAMESPACE: "NAMESPACE",
} as const;

/**
 * @public
 */
export type SharingModel = (typeof SharingModel)[keyof typeof SharingModel];

/**
 * @public
 */
export interface CreateFolderRequest {
  /**
   * <p>The ID for the Amazon Web Services account where you want to create the folder.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID of the folder.</p>
   * @public
   */
  FolderId: string | undefined;

  /**
   * <p>The name of the folder.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The type of folder. By default, <code>folderType</code> is <code>SHARED</code>.</p>
   * @public
   */
  FolderType?: FolderType | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the parent folder.</p>
   *          <p>
   *             <code>ParentFolderArn</code> can be null. An empty <code>parentFolderArn</code> creates a root-level folder.</p>
   * @public
   */
  ParentFolderArn?: string | undefined;

  /**
   * <p>A structure that describes the principals and the resource-level permissions of a folder.</p>
   *          <p>To specify no permissions, omit <code>Permissions</code>.</p>
   * @public
   */
  Permissions?: ResourcePermission[] | undefined;

  /**
   * <p>Tags for the folder.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>An optional parameter that determines the sharing scope of the folder. The default value for this parameter is <code>ACCOUNT</code>.</p>
   * @public
   */
  SharingModel?: SharingModel | undefined;
}

/**
 * @public
 */
export interface CreateFolderResponse {
  /**
   * <p>The HTTP status of the request.</p>
   * @public
   */
  Status?: number | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the newly created folder.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The folder ID for the newly created folder.</p>
   * @public
   */
  FolderId?: string | undefined;

  /**
   * <p>The request ID for the newly created folder.</p>
   * @public
   */
  RequestId?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const MemberType = {
  ANALYSIS: "ANALYSIS",
  DASHBOARD: "DASHBOARD",
  DATASET: "DATASET",
  DATASOURCE: "DATASOURCE",
  TOPIC: "TOPIC",
} as const;

/**
 * @public
 */
export type MemberType = (typeof MemberType)[keyof typeof MemberType];

/**
 * @public
 */
export interface CreateFolderMembershipRequest {
  /**
   * <p>The ID for the Amazon Web Services account that contains the folder.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID of the folder.</p>
   * @public
   */
  FolderId: string | undefined;

  /**
   * <p>The ID of the asset that you want to add to the folder.</p>
   * @public
   */
  MemberId: string | undefined;

  /**
   * <p>The member type of the asset that you want to add to a folder.</p>
   * @public
   */
  MemberType: MemberType | undefined;
}

/**
 * <p>An asset in a Amazon QuickSight folder, such as a dashboard, analysis, or dataset.</p>
 * @public
 */
export interface FolderMember {
  /**
   * <p>The ID of an asset in the folder.</p>
   * @public
   */
  MemberId?: string | undefined;

  /**
   * <p>The type of asset that it is.</p>
   * @public
   */
  MemberType?: MemberType | undefined;
}

/**
 * @public
 */
export interface CreateFolderMembershipResponse {
  /**
   * <p>The HTTP status of the request.</p>
   * @public
   */
  Status?: number | undefined;

  /**
   * <p>Information about the member in the folder.</p>
   * @public
   */
  FolderMember?: FolderMember | undefined;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   * @public
   */
  RequestId?: string | undefined;
}

/**
 * <p>The request object for this operation. </p>
 * @public
 */
export interface CreateGroupRequest {
  /**
   * <p>A name for the group that you want to create.</p>
   * @public
   */
  GroupName: string | undefined;

  /**
   * <p>A description for the group that you want to create.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The ID for the Amazon Web Services account that the group is in. Currently, you use the ID for the
   * 			Amazon Web Services account that contains your Amazon QuickSight account.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The namespace that you want the group to be a part of.</p>
   * @public
   */
  Namespace: string | undefined;
}

/**
 * <p>A <i>group</i> in Amazon QuickSight consists of a set of users. You can
 *             use groups to make it easier to manage access and security. </p>
 * @public
 */
export interface Group {
  /**
   * <p>The Amazon Resource Name (ARN) for the group.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The name of the group.</p>
   * @public
   */
  GroupName?: string | undefined;

  /**
   * <p>The group description.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The principal ID of the group.</p>
   * @public
   */
  PrincipalId?: string | undefined;
}

/**
 * <p>The response object for this operation.</p>
 * @public
 */
export interface CreateGroupResponse {
  /**
   * <p>The name of the group.</p>
   * @public
   */
  Group?: Group | undefined;

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
 * @public
 */
export interface CreateGroupMembershipRequest {
  /**
   * <p>The name of the user that you want to add to the group membership.</p>
   * @public
   */
  MemberName: string | undefined;

  /**
   * <p>The name of the group that you want to add the user to.</p>
   * @public
   */
  GroupName: string | undefined;

  /**
   * <p>The ID for the Amazon Web Services account that the group is in. Currently, you use the ID for the
   * 			Amazon Web Services account that contains your Amazon QuickSight account.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The namespace that you want the user to be a part of.</p>
   * @public
   */
  Namespace: string | undefined;
}

/**
 * <p>A member of an Amazon QuickSight group. Currently, group members must be users. Groups
 *             can't be members of another group. .</p>
 * @public
 */
export interface GroupMember {
  /**
   * <p>The Amazon Resource Name (ARN) for the group member (user).</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The name of the group member (user).</p>
   * @public
   */
  MemberName?: string | undefined;
}

/**
 * @public
 */
export interface CreateGroupMembershipResponse {
  /**
   * <p>The group member.</p>
   * @public
   */
  GroupMember?: GroupMember | undefined;

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
 * @public
 */
export interface CreateIAMPolicyAssignmentRequest {
  /**
   * <p>The ID of the Amazon Web Services account where you want to assign an IAM policy to Amazon QuickSight users or groups.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The name of the assignment, also called a rule.
   * 			The
   * 			name
   * 			must be unique within the
   * 			Amazon Web Services account.</p>
   * @public
   */
  AssignmentName: string | undefined;

  /**
   * <p>The status of the assignment. Possible values are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ENABLED</code> - Anything specified in this assignment is used when
   * 					creating the data source.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DISABLED</code> - This assignment isn't used when creating the data
   * 					source.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DRAFT</code> - This assignment is an unfinished draft and isn't used
   * 					when creating the data source.</p>
   *             </li>
   *          </ul>
   * @public
   */
  AssignmentStatus: AssignmentStatus | undefined;

  /**
   * <p>The ARN for the IAM policy to apply to the Amazon QuickSight users and
   * 			groups specified in this assignment.</p>
   * @public
   */
  PolicyArn?: string | undefined;

  /**
   * <p>The Amazon QuickSight users, groups, or both that you want to assign the policy
   * 			to.</p>
   * @public
   */
  Identities?: Record<string, string[]> | undefined;

  /**
   * <p>The namespace that contains the assignment.</p>
   * @public
   */
  Namespace: string | undefined;
}

/**
 * @public
 */
export interface CreateIAMPolicyAssignmentResponse {
  /**
   * <p>The name of the assignment.
   * 			The
   * 			name must be unique within the Amazon Web Services account.</p>
   * @public
   */
  AssignmentName?: string | undefined;

  /**
   * <p>The ID for the assignment.</p>
   * @public
   */
  AssignmentId?: string | undefined;

  /**
   * <p>The status of the assignment. Possible values are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ENABLED</code> - Anything specified in this assignment is used when
   * 					creating the data source.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DISABLED</code> - This assignment isn't used when creating the data
   * 					source.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DRAFT</code> - This assignment is an unfinished draft and isn't used
   * 					when creating the data source.</p>
   *             </li>
   *          </ul>
   * @public
   */
  AssignmentStatus?: AssignmentStatus | undefined;

  /**
   * <p>The ARN for the IAM policy that is applied to the Amazon QuickSight
   * 			users and groups specified in this assignment.</p>
   * @public
   */
  PolicyArn?: string | undefined;

  /**
   * <p>The Amazon QuickSight users, groups, or both that the IAM policy is
   * 			assigned to.</p>
   * @public
   */
  Identities?: Record<string, string[]> | undefined;

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
 * @public
 * @enum
 */
export const IngestionType = {
  FULL_REFRESH: "FULL_REFRESH",
  INCREMENTAL_REFRESH: "INCREMENTAL_REFRESH",
} as const;

/**
 * @public
 */
export type IngestionType = (typeof IngestionType)[keyof typeof IngestionType];

/**
 * @public
 */
export interface CreateIngestionRequest {
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

  /**
   * <p>The Amazon Web Services account ID.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The type of ingestion that you want to create.</p>
   * @public
   */
  IngestionType?: IngestionType | undefined;
}

/**
 * @public
 * @enum
 */
export const IngestionStatus = {
  CANCELLED: "CANCELLED",
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  INITIALIZED: "INITIALIZED",
  QUEUED: "QUEUED",
  RUNNING: "RUNNING",
} as const;

/**
 * @public
 */
export type IngestionStatus = (typeof IngestionStatus)[keyof typeof IngestionStatus];

/**
 * @public
 */
export interface CreateIngestionResponse {
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
   * <p>The ingestion status.</p>
   * @public
   */
  IngestionStatus?: IngestionStatus | undefined;

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
 * @public
 * @enum
 */
export const IdentityStore = {
  QUICKSIGHT: "QUICKSIGHT",
} as const;

/**
 * @public
 */
export type IdentityStore = (typeof IdentityStore)[keyof typeof IdentityStore];

/**
 * @public
 */
export interface CreateNamespaceRequest {
  /**
   * <p>The ID for the Amazon Web Services account that you want to create the Amazon QuickSight namespace in.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The name that you want to use to describe the new namespace.</p>
   * @public
   */
  Namespace: string | undefined;

  /**
   * <p>Specifies the type of your user identity directory. Currently, this supports users
   *             with an identity type of <code>QUICKSIGHT</code>.</p>
   * @public
   */
  IdentityStore: IdentityStore | undefined;

  /**
   * <p>The tags that you want to associate with the namespace that you're creating.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 * @enum
 */
export const NamespaceStatus = {
  CREATED: "CREATED",
  CREATING: "CREATING",
  DELETING: "DELETING",
  NON_RETRYABLE_FAILURE: "NON_RETRYABLE_FAILURE",
  RETRYABLE_FAILURE: "RETRYABLE_FAILURE",
} as const;

/**
 * @public
 */
export type NamespaceStatus = (typeof NamespaceStatus)[keyof typeof NamespaceStatus];

/**
 * @public
 */
export interface CreateNamespaceResponse {
  /**
   * <p>The ARN of the Amazon QuickSight namespace you created. </p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The name of the new namespace that you created.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The Amazon Web Services Region; that you want to use for the free SPICE capacity for the new namespace.
   *             This is set to the region that you run CreateNamespace in. </p>
   * @public
   */
  CapacityRegion?: string | undefined;

  /**
   * <p>The status of the creation of the namespace. This is an asynchronous process. A status
   *             of <code>CREATED</code> means that your namespace is ready to use. If an error occurs,
   *             it indicates if the process is <code>retryable</code> or <code>non-retryable</code>. In
   *             the case of a non-retryable error, refer to the error message for follow-up
   *             tasks.</p>
   * @public
   */
  CreationStatus?: NamespaceStatus | undefined;

  /**
   * <p>Specifies the type of your user identity directory. Currently, this supports users
   *             with an identity type of <code>QUICKSIGHT</code>.</p>
   * @public
   */
  IdentityStore?: IdentityStore | undefined;

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
 * @public
 * @enum
 */
export const RefreshInterval = {
  DAILY: "DAILY",
  HOURLY: "HOURLY",
  MINUTE15: "MINUTE15",
  MINUTE30: "MINUTE30",
  MONTHLY: "MONTHLY",
  WEEKLY: "WEEKLY",
} as const;

/**
 * @public
 */
export type RefreshInterval = (typeof RefreshInterval)[keyof typeof RefreshInterval];

/**
 * @public
 * @enum
 */
export const DayOfWeek = {
  FRIDAY: "FRIDAY",
  MONDAY: "MONDAY",
  SATURDAY: "SATURDAY",
  SUNDAY: "SUNDAY",
  THURSDAY: "THURSDAY",
  TUESDAY: "TUESDAY",
  WEDNESDAY: "WEDNESDAY",
} as const;

/**
 * @public
 */
export type DayOfWeek = (typeof DayOfWeek)[keyof typeof DayOfWeek];

/**
 * <p>The refresh on entity for weekly or monthly schedules.</p>
 * @public
 */
export interface ScheduleRefreshOnEntity {
  /**
   * <p>The day of the week that you want to schedule a refresh on.</p>
   * @public
   */
  DayOfWeek?: DayOfWeek | undefined;

  /**
   * <p>The day of the month that you want to schedule refresh on.</p>
   * @public
   */
  DayOfMonth?: string | undefined;
}

/**
 * <p>Specifies the interval between each scheduled refresh of a dataset.</p>
 * @public
 */
export interface RefreshFrequency {
  /**
   * <p>The interval between scheduled refreshes. Valid values are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>MINUTE15</code>: The dataset refreshes every 15 minutes. This value is only supported for incremental refreshes. This interval can only be used for one schedule per dataset.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MINUTE30</code>:The dataset refreshes every 30 minutes. This value is only supported for incremental refreshes. This interval can only be used for one schedule per dataset.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>HOURLY</code>: The dataset refreshes every hour. This interval can only be used for one schedule per dataset.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DAILY</code>: The dataset refreshes every day.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>WEEKLY</code>: The dataset refreshes every week.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MONTHLY</code>: The dataset refreshes every month.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Interval: RefreshInterval | undefined;

  /**
   * <p>The day of the week that you want to schedule the refresh on. This value is required for weekly and monthly refresh intervals.</p>
   * @public
   */
  RefreshOnDay?: ScheduleRefreshOnEntity | undefined;

  /**
   * <p>The timezone that you want the refresh schedule to use. The timezone ID must match a corresponding ID found on <code>java.util.time.getAvailableIDs()</code>.</p>
   * @public
   */
  Timezone?: string | undefined;

  /**
   * <p>The time of day that you want the datset to refresh. This value is expressed in HH:MM format. This field is not required for schedules that refresh hourly.</p>
   * @public
   */
  TimeOfTheDay?: string | undefined;
}

/**
 * <p>The refresh schedule of a dataset.</p>
 * @public
 */
export interface RefreshSchedule {
  /**
   * <p>An identifier for the refresh schedule.</p>
   * @public
   */
  ScheduleId: string | undefined;

  /**
   * <p>The frequency for the refresh schedule.</p>
   * @public
   */
  ScheduleFrequency: RefreshFrequency | undefined;

  /**
   * <p>Time after which the refresh schedule can be started, expressed in <code>YYYY-MM-DDTHH:MM:SS</code> format.</p>
   * @public
   */
  StartAfterDateTime?: Date | undefined;

  /**
   * <p>The type of refresh that a datset undergoes. Valid values are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>FULL_REFRESH</code>: A complete refresh of a dataset.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INCREMENTAL_REFRESH</code>: A partial refresh of some rows of a dataset, based on the time window specified.</p>
   *             </li>
   *          </ul>
   *          <p>For more information on full and incremental refreshes, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/refreshing-imported-data.html">Refreshing SPICE data</a> in the <i>Amazon QuickSight User Guide</i>.</p>
   * @public
   */
  RefreshType: IngestionType | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the refresh schedule.</p>
   * @public
   */
  Arn?: string | undefined;
}

/**
 * @public
 */
export interface CreateRefreshScheduleRequest {
  /**
   * <p>The ID of the dataset.</p>
   * @public
   */
  DataSetId: string | undefined;

  /**
   * <p>The Amazon Web Services account ID.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The refresh schedule.</p>
   * @public
   */
  Schedule: RefreshSchedule | undefined;
}

/**
 * @public
 */
export interface CreateRefreshScheduleResponse {
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

  /**
   * <p>The ID of the refresh schedule.</p>
   * @public
   */
  ScheduleId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the refresh schedule.</p>
   * @public
   */
  Arn?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const Role = {
  ADMIN: "ADMIN",
  ADMIN_PRO: "ADMIN_PRO",
  AUTHOR: "AUTHOR",
  AUTHOR_PRO: "AUTHOR_PRO",
  READER: "READER",
  READER_PRO: "READER_PRO",
} as const;

/**
 * @public
 */
export type Role = (typeof Role)[keyof typeof Role];

/**
 * @public
 */
export interface CreateRoleMembershipRequest {
  /**
   * <p>The name of the group that you want to add to the role.</p>
   * @public
   */
  MemberName: string | undefined;

  /**
   * <p>The ID for the Amazon Web Services account that you want to create a group in. The Amazon Web Services account ID that you provide must be the same Amazon Web Services account that contains your Amazon QuickSight account.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The namespace that the role belongs to.</p>
   * @public
   */
  Namespace: string | undefined;

  /**
   * <p>The role that you want to add a group to.</p>
   * @public
   */
  Role: Role | undefined;
}

/**
 * @public
 */
export interface CreateRoleMembershipResponse {
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
 * <p>Dataset schema.</p>
 * @public
 */
export interface DataSetSchema {
  /**
   * <p>A structure containing the list of column schemas.</p>
   * @public
   */
  ColumnSchemaList?: ColumnSchema[] | undefined;
}

/**
 * <p>Dataset configuration.</p>
 * @public
 */
export interface DataSetConfiguration {
  /**
   * <p>Placeholder.</p>
   * @public
   */
  Placeholder?: string | undefined;

  /**
   * <p>Dataset schema.</p>
   * @public
   */
  DataSetSchema?: DataSetSchema | undefined;

  /**
   * <p>A structure containing the list of column group schemas.</p>
   * @public
   */
  ColumnGroupSchemaList?: ColumnGroupSchema[] | undefined;
}

/**
 * <p>The detailed definition of a template.</p>
 * @public
 */
export interface TemplateVersionDefinition {
  /**
   * <p>An array of dataset configurations. These configurations define the required columns for each dataset used within a template.</p>
   * @public
   */
  DataSetConfigurations: DataSetConfiguration[] | undefined;

  /**
   * <p>An array of sheet definitions for a template.</p>
   * @public
   */
  Sheets?: SheetDefinition[] | undefined;

  /**
   * <p>An array of calculated field definitions for the template.</p>
   * @public
   */
  CalculatedFields?: CalculatedField[] | undefined;

  /**
   * <p>An array of parameter declarations for a template.</p>
   *          <p>
   *             <i>Parameters</i> are named variables that can transfer a value for use by an action or an object.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/parameters-in-quicksight.html">Parameters in Amazon QuickSight</a> in the
   *             <i>Amazon QuickSight User Guide</i>.
   *         </p>
   * @public
   */
  ParameterDeclarations?: ParameterDeclaration[] | undefined;

  /**
   * <p>Filter definitions for a template.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/filtering-visual-data.html">Filtering Data</a> in the <i>Amazon QuickSight User Guide</i>.
   *         </p>
   * @public
   */
  FilterGroups?: FilterGroup[] | undefined;

  /**
   * <p> An array of template-level column
   *             configurations. Column configurations are used to set default formatting for a column that's used throughout a template. </p>
   * @public
   */
  ColumnConfigurations?: ColumnConfiguration[] | undefined;

  /**
   * <p>The configuration for default analysis settings.</p>
   * @public
   */
  AnalysisDefaults?: AnalysisDefaults | undefined;

  /**
   * <p>An array of option definitions for a template.</p>
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
 * <p>The source analysis of the template.</p>
 * @public
 */
export interface TemplateSourceAnalysis {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>A structure containing information about the dataset references used as placeholders
   *             in the template.</p>
   * @public
   */
  DataSetReferences: DataSetReference[] | undefined;
}

/**
 * <p>The source template of the template.</p>
 * @public
 */
export interface TemplateSourceTemplate {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   * @public
   */
  Arn: string | undefined;
}

/**
 * <p>The source entity of the template.</p>
 * @public
 */
export interface TemplateSourceEntity {
  /**
   * <p>The source analysis, if it is based on an analysis.</p>
   * @public
   */
  SourceAnalysis?: TemplateSourceAnalysis | undefined;

  /**
   * <p>The source template, if it is based on an template.</p>
   * @public
   */
  SourceTemplate?: TemplateSourceTemplate | undefined;
}

/**
 * @public
 */
export interface CreateTemplateRequest {
  /**
   * <p>The ID for the Amazon Web Services account that the group is in. You use the ID for the Amazon Web Services account that contains your Amazon QuickSight account.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>An ID for the template that you want to create. This template is unique per Amazon Web Services Region; in
   * 			each Amazon Web Services account.</p>
   * @public
   */
  TemplateId: string | undefined;

  /**
   * <p>A display name for the template.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>A list of resource permissions to be set on the template. </p>
   * @public
   */
  Permissions?: ResourcePermission[] | undefined;

  /**
   * <p>The entity that you are using as a source when you create the template. In
   * 			<code>SourceEntity</code>, you specify the type of object you're using as source:
   * 			<code>SourceTemplate</code> for a template or <code>SourceAnalysis</code> for an
   * 			analysis. Both of these require an Amazon Resource Name (ARN). For
   * 			<code>SourceTemplate</code>, specify the ARN of the source template. For
   * 			<code>SourceAnalysis</code>, specify the ARN of the source analysis. The <code>SourceTemplate</code>
   * 			ARN can contain any Amazon Web Services account and any Amazon QuickSight-supported Amazon Web Services Region. </p>
   *          <p>Use the <code>DataSetReferences</code> entity within <code>SourceTemplate</code> or
   * 			<code>SourceAnalysis</code> to list the replacement datasets for the placeholders listed
   * 			in the original. The schema in each dataset must match its placeholder. </p>
   *          <p>Either a <code>SourceEntity</code> or a <code>Definition</code> must be provided in
   * 			order for the request to be valid.</p>
   * @public
   */
  SourceEntity?: TemplateSourceEntity | undefined;

  /**
   * <p>Contains a map of the key-value pairs for the resource tag or tags assigned to the resource.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>A description of the current template version being created. This API operation creates the
   * 			first version of the template. Every time <code>UpdateTemplate</code> is called, a new
   * 			version is created. Each version of the template maintains a description of the version
   * 			in the <code>VersionDescription</code> field.</p>
   * @public
   */
  VersionDescription?: string | undefined;

  /**
   * <p>The definition of a template.</p>
   *          <p>A definition is the data model of all features in a Dashboard, Template, or Analysis.</p>
   *          <p>Either a <code>SourceEntity</code> or a <code>Definition</code> must be provided in
   * 			order for the request to be valid.</p>
   * @public
   */
  Definition?: TemplateVersionDefinition | undefined;

  /**
   * <p>TThe option to relax the validation needed to create a template with definition objects. This skips the validation step for specific errors.</p>
   * @public
   */
  ValidationStrategy?: ValidationStrategy | undefined;
}

/**
 * @public
 */
export interface CreateTemplateResponse {
  /**
   * <p>The ARN for the template.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The ARN for the template, including the version information of
   * 			the first version.</p>
   * @public
   */
  VersionArn?: string | undefined;

  /**
   * <p>The ID of the template.</p>
   * @public
   */
  TemplateId?: string | undefined;

  /**
   * <p>The template creation status.</p>
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
 * @public
 */
export interface CreateTemplateAliasRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the template that you creating an alias for.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>An ID for the template.</p>
   * @public
   */
  TemplateId: string | undefined;

  /**
   * <p>The name that you want to give to the template alias that you're creating. Don't start the
   * 			alias name with the <code>$</code> character. Alias names that start with <code>$</code>
   * 			are reserved by Amazon QuickSight. </p>
   * @public
   */
  AliasName: string | undefined;

  /**
   * <p>The version number of the template.</p>
   * @public
   */
  TemplateVersionNumber: number | undefined;
}

/**
 * <p>The template alias.</p>
 * @public
 */
export interface TemplateAlias {
  /**
   * <p>The display name of the template alias.</p>
   * @public
   */
  AliasName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the template alias.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The version number of the template alias.</p>
   * @public
   */
  TemplateVersionNumber?: number | undefined;
}

/**
 * @public
 */
export interface CreateTemplateAliasResponse {
  /**
   * <p>Information about the template alias.</p>
   * @public
   */
  TemplateAlias?: TemplateAlias | undefined;

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
 * <p>The theme colors that are used for data colors in charts. The colors description is a
 *             hexadecimal color code that consists of six alphanumerical characters, prefixed with
 *                 <code>#</code>, for example #37BFF5. </p>
 * @public
 */
export interface DataColorPalette {
  /**
   * <p>The hexadecimal codes for the colors.</p>
   * @public
   */
  Colors?: string[] | undefined;

  /**
   * <p>The minimum and maximum hexadecimal codes that describe a color gradient. </p>
   * @public
   */
  MinMaxGradient?: string[] | undefined;

  /**
   * <p>The hexadecimal code of a color that applies to charts where a lack of data is
   *             highlighted.</p>
   * @public
   */
  EmptyFillColor?: string | undefined;
}

/**
 * <p>Display options related to tiles on a sheet.</p>
 * @public
 */
export interface TileStyle {
  /**
   * <p>The border around a tile.</p>
   * @public
   */
  Border?: BorderStyle | undefined;
}

/**
 * <p>The display options for gutter spacing between tiles on a sheet.</p>
 * @public
 */
export interface GutterStyle {
  /**
   * <p>This Boolean value controls whether to display a gutter space between sheet tiles.
   *         </p>
   * @public
   */
  Show?: boolean | undefined;
}

/**
 * <p>The display options for margins around the outside edge of sheets.</p>
 * @public
 */
export interface MarginStyle {
  /**
   * <p>This Boolean value controls whether to display sheet margins.</p>
   * @public
   */
  Show?: boolean | undefined;
}

/**
 * <p>The display options for the layout of tiles on a sheet.</p>
 * @public
 */
export interface TileLayoutStyle {
  /**
   * <p>The gutter settings that apply between tiles. </p>
   * @public
   */
  Gutter?: GutterStyle | undefined;

  /**
   * <p>The margin settings that apply around the outside edge of sheets.</p>
   * @public
   */
  Margin?: MarginStyle | undefined;
}

/**
 * <p>The theme display options for sheets. </p>
 * @public
 */
export interface SheetStyle {
  /**
   * <p>The display options for tiles.</p>
   * @public
   */
  Tile?: TileStyle | undefined;

  /**
   * <p>The layout options for tiles.</p>
   * @public
   */
  TileLayout?: TileLayoutStyle | undefined;
}

/**
 * <p>Determines the font settings.</p>
 * @public
 */
export interface Font {
  /**
   * <p>Determines the font family settings.</p>
   * @public
   */
  FontFamily?: string | undefined;
}

/**
 * <p>Determines the typography options.</p>
 * @public
 */
export interface Typography {
  /**
   * <p>Determines the list of font families.</p>
   * @public
   */
  FontFamilies?: Font[] | undefined;
}

/**
 * <p>The theme colors that apply to UI and to charts, excluding data colors. The colors
 *             description is a hexadecimal color code that consists of six alphanumerical characters,
 *             prefixed with <code>#</code>, for example #37BFF5. For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/themes-in-quicksight.html">Using Themes in Amazon QuickSight</a> in the <i>Amazon QuickSight User
 *                 Guide.</i>
 *          </p>
 * @public
 */
export interface UIColorPalette {
  /**
   * <p>The color of text and other foreground elements that appear over the primary
   *             background regions, such as grid lines, borders, table banding, icons, and so on.</p>
   * @public
   */
  PrimaryForeground?: string | undefined;

  /**
   * <p>The background color that applies to visuals and other high emphasis UI.</p>
   * @public
   */
  PrimaryBackground?: string | undefined;

  /**
   * <p>The foreground color that applies to any sheet title, sheet control text, or UI that
   *             appears over the secondary background.</p>
   * @public
   */
  SecondaryForeground?: string | undefined;

  /**
   * <p>The background color that applies to the sheet background and sheet controls.</p>
   * @public
   */
  SecondaryBackground?: string | undefined;

  /**
   * <p>This color is that applies to selected states and buttons.</p>
   * @public
   */
  Accent?: string | undefined;

  /**
   * <p>The foreground color that applies to any text or other elements that appear over the
   *             accent color.</p>
   * @public
   */
  AccentForeground?: string | undefined;

  /**
   * <p>The color that applies to error messages.</p>
   * @public
   */
  Danger?: string | undefined;

  /**
   * <p>The foreground color that applies to any text or other elements that appear over the
   *             error color.</p>
   * @public
   */
  DangerForeground?: string | undefined;

  /**
   * <p>This color that applies to warning and informational messages.</p>
   * @public
   */
  Warning?: string | undefined;

  /**
   * <p>The foreground color that applies to any text or other elements that appear over the
   *             warning color.</p>
   * @public
   */
  WarningForeground?: string | undefined;

  /**
   * <p>The color that applies to success messages, for example the check mark for a
   *             successful download.</p>
   * @public
   */
  Success?: string | undefined;

  /**
   * <p>The foreground color that applies to any text or other elements that appear over the
   *             success color.</p>
   * @public
   */
  SuccessForeground?: string | undefined;

  /**
   * <p>The color that applies to the names of fields that are identified as
   *             dimensions.</p>
   * @public
   */
  Dimension?: string | undefined;

  /**
   * <p>The foreground color that applies to any text or other elements that appear over the
   *             dimension color.</p>
   * @public
   */
  DimensionForeground?: string | undefined;

  /**
   * <p>The color that applies to the names of fields that are identified as measures.</p>
   * @public
   */
  Measure?: string | undefined;

  /**
   * <p>The foreground color that applies to any text or other elements that appear over the
   *             measure color.</p>
   * @public
   */
  MeasureForeground?: string | undefined;
}

/**
 * <p>The theme configuration. This configuration contains all of the display properties for
 *             a theme.</p>
 * @public
 */
export interface ThemeConfiguration {
  /**
   * <p>Color properties that apply to chart data colors.</p>
   * @public
   */
  DataColorPalette?: DataColorPalette | undefined;

  /**
   * <p>Color properties that apply to the UI and to charts, excluding the colors that apply
   *             to data. </p>
   * @public
   */
  UIColorPalette?: UIColorPalette | undefined;

  /**
   * <p>Display options related to sheets.</p>
   * @public
   */
  Sheet?: SheetStyle | undefined;

  /**
   * <p>Determines the typography options.</p>
   * @public
   */
  Typography?: Typography | undefined;
}

/**
 * @public
 */
export interface CreateThemeRequest {
  /**
   * <p>The ID of the Amazon Web Services account where you want to store the new theme. </p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>An ID for the theme that you want to create. The theme ID is unique per Amazon Web Services Region in
   * 			each Amazon Web Services account.</p>
   * @public
   */
  ThemeId: string | undefined;

  /**
   * <p>A display name for the theme.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The ID of the theme that a custom theme will inherit from. All themes inherit from one of
   * 			the starting themes defined by Amazon QuickSight. For a list of the starting themes, use
   * 				<code>ListThemes</code> or choose <b>Themes</b> from
   * 			within an analysis. </p>
   * @public
   */
  BaseThemeId: string | undefined;

  /**
   * <p>A description of the first version of the theme that you're creating. Every time
   * 				<code>UpdateTheme</code> is called, a new version is created. Each version of the
   * 			theme has a description of the version in the <code>VersionDescription</code>
   * 			field.</p>
   * @public
   */
  VersionDescription?: string | undefined;

  /**
   * <p>The theme configuration, which contains the theme display properties.</p>
   * @public
   */
  Configuration: ThemeConfiguration | undefined;

  /**
   * <p>A valid grouping of resource permissions to apply to the new theme.
   * 			</p>
   * @public
   */
  Permissions?: ResourcePermission[] | undefined;

  /**
   * <p>A map of the key-value pairs for the resource tag or tags that you want to add to the
   * 			resource.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateThemeResponse {
  /**
   * <p>The Amazon Resource Name (ARN) for the theme.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the new theme.</p>
   * @public
   */
  VersionArn?: string | undefined;

  /**
   * <p>The ID of the theme.</p>
   * @public
   */
  ThemeId?: string | undefined;

  /**
   * <p>The theme creation status.</p>
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
 * @public
 */
export interface CreateThemeAliasRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the theme for the new theme alias.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>An ID for the theme alias.</p>
   * @public
   */
  ThemeId: string | undefined;

  /**
   * <p>The name that you want to give to the theme alias that you are creating. The
   * 			alias name can't begin with a <code>$</code>. Alias names that start with <code>$</code>
   * 			are reserved by Amazon QuickSight. </p>
   * @public
   */
  AliasName: string | undefined;

  /**
   * <p>The version number of the theme.</p>
   * @public
   */
  ThemeVersionNumber: number | undefined;
}

/**
 * <p>An alias for a theme.</p>
 * @public
 */
export interface ThemeAlias {
  /**
   * <p>The Amazon Resource Name (ARN) of the theme alias.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The display name of the theme alias.</p>
   * @public
   */
  AliasName?: string | undefined;

  /**
   * <p>The version number of the theme alias.</p>
   * @public
   */
  ThemeVersionNumber?: number | undefined;
}

/**
 * @public
 */
export interface CreateThemeAliasResponse {
  /**
   * <p>Information about the theme alias.</p>
   * @public
   */
  ThemeAlias?: ThemeAlias | undefined;

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
 * <p>Configuration options for a <code>Topic</code>.</p>
 * @public
 */
export interface TopicConfigOptions {
  /**
   * <p>Enables Amazon Q Business Insights for a <code>Topic</code>.</p>
   * @public
   */
  QBusinessInsightsEnabled?: boolean | undefined;
}

/**
 * @public
 * @enum
 */
export const DefaultAggregation = {
  AVERAGE: "AVERAGE",
  COUNT: "COUNT",
  DISTINCT_COUNT: "DISTINCT_COUNT",
  MAX: "MAX",
  MEDIAN: "MEDIAN",
  MIN: "MIN",
  STDEV: "STDEV",
  STDEVP: "STDEVP",
  SUM: "SUM",
  VAR: "VAR",
  VARP: "VARP",
} as const;

/**
 * @public
 */
export type DefaultAggregation = (typeof DefaultAggregation)[keyof typeof DefaultAggregation];

/**
 * <p>A structure that represents a default formatting definition.</p>
 * @public
 */
export interface DefaultFormatting {
  /**
   * <p>The display format. Valid values for this structure are <code>AUTO</code>,
   *             <code>PERCENT</code>, <code>CURRENCY</code>, <code>NUMBER</code>, <code>DATE</code>, and
   *             <code>STRING</code>.</p>
   * @public
   */
  DisplayFormat?: DisplayFormat | undefined;

  /**
   * <p>The additional options for display formatting.</p>
   * @public
   */
  DisplayFormatOptions?: DisplayFormatOptions | undefined;
}

/**
 * <p>A structure that represents a semantic type.</p>
 * @public
 */
export interface SemanticType {
  /**
   * <p>The semantic type name.</p>
   * @public
   */
  TypeName?: string | undefined;

  /**
   * <p>The semantic type sub type name.</p>
   * @public
   */
  SubTypeName?: string | undefined;

  /**
   * <p>The semantic type parameters.</p>
   * @public
   */
  TypeParameters?: Record<string, string> | undefined;

  /**
   * <p>The semantic type truthy cell value.</p>
   * @public
   */
  TruthyCellValue?: string | undefined;

  /**
   * <p>The other names or aliases for the true cell value.</p>
   * @public
   */
  TruthyCellValueSynonyms?: string[] | undefined;

  /**
   * <p>The semantic type falsey cell value.</p>
   * @public
   */
  FalseyCellValue?: string | undefined;

  /**
   * <p>The other names or aliases for the false cell value.</p>
   * @public
   */
  FalseyCellValueSynonyms?: string[] | undefined;
}

/**
 * <p>A structure that represents a calculated field.</p>
 * @public
 */
export interface TopicCalculatedField {
  /**
   * <p>The calculated field name.</p>
   * @public
   */
  CalculatedFieldName: string | undefined;

  /**
   * <p>The calculated field description.</p>
   * @public
   */
  CalculatedFieldDescription?: string | undefined;

  /**
   * <p>The calculated field expression.</p>
   * @public
   */
  Expression: string | undefined;

  /**
   * <p>The other names or aliases for the calculated field.</p>
   * @public
   */
  CalculatedFieldSynonyms?: string[] | undefined;

  /**
   * <p>A boolean value that indicates if a calculated field is included in the topic.</p>
   * @public
   */
  IsIncludedInTopic?: boolean | undefined;

  /**
   * <p>A Boolean value that indicates if a calculated field is visible in the autocomplete.</p>
   * @public
   */
  DisableIndexing?: boolean | undefined;

  /**
   * <p>The column data role for a calculated field. Valid values for this structure are <code>DIMENSION</code> and <code>MEASURE</code>.</p>
   * @public
   */
  ColumnDataRole?: ColumnDataRole | undefined;

  /**
   * <p>The level of time precision that is used to aggregate <code>DateTime</code> values.</p>
   * @public
   */
  TimeGranularity?: TopicTimeGranularity | undefined;

  /**
   * <p>The default formatting definition.</p>
   * @public
   */
  DefaultFormatting?: DefaultFormatting | undefined;

  /**
   * <p>The default aggregation. Valid values for this structure are <code>SUM</code>,
   *             <code>MAX</code>, <code>MIN</code>, <code>COUNT</code>,
   *          <code>DISTINCT_COUNT</code>,
   *          and <code>AVERAGE</code>.</p>
   * @public
   */
  Aggregation?: DefaultAggregation | undefined;

  /**
   * <p>The order in which data is displayed for the calculated field when
   *          it's used in a comparative context.</p>
   * @public
   */
  ComparativeOrder?: ComparativeOrder | undefined;

  /**
   * <p>The semantic type.</p>
   * @public
   */
  SemanticType?: SemanticType | undefined;

  /**
   * <p>The list of aggregation types that are allowed for the calculated field. Valid values
   *          for this structure are <code>COUNT</code>, <code>DISTINCT_COUNT</code>, <code>MIN</code>,
   *             <code>MAX</code>, <code>MEDIAN</code>, <code>SUM</code>, <code>AVERAGE</code>,
   *             <code>STDEV</code>, <code>STDEVP</code>, <code>VAR</code>,
   *          <code>VARP</code>, and <code>PERCENTILE</code>.</p>
   * @public
   */
  AllowedAggregations?: AuthorSpecifiedAggregation[] | undefined;

  /**
   * <p>The list of aggregation types that are not allowed for the calculated field. Valid
   *          values for this structure are <code>COUNT</code>, <code>DISTINCT_COUNT</code>,
   *             <code>MIN</code>, <code>MAX</code>, <code>MEDIAN</code>, <code>SUM</code>,
   *             <code>AVERAGE</code>, <code>STDEV</code>, <code>STDEVP</code>, <code>VAR</code>,
   *             <code>VARP</code>, and <code>PERCENTILE</code>.</p>
   * @public
   */
  NotAllowedAggregations?: AuthorSpecifiedAggregation[] | undefined;

  /**
   * <p>A Boolean value that indicates whether to never aggregate calculated field in filters.</p>
   * @public
   */
  NeverAggregateInFilter?: boolean | undefined;

  /**
   * <p>The other
   *          names or aliases for the calculated field cell value.</p>
   * @public
   */
  CellValueSynonyms?: CellValueSynonym[] | undefined;

  /**
   * <p>The non additive for the table style target.</p>
   * @public
   */
  NonAdditive?: boolean | undefined;
}

/**
 * <p>Represents a column in a dataset.</p>
 * @public
 */
export interface TopicColumn {
  /**
   * <p>The name of the column.</p>
   * @public
   */
  ColumnName: string | undefined;

  /**
   * <p>A user-friendly name for the column.</p>
   * @public
   */
  ColumnFriendlyName?: string | undefined;

  /**
   * <p>A description of the column and its contents.</p>
   * @public
   */
  ColumnDescription?: string | undefined;

  /**
   * <p>The other names or aliases for the column.</p>
   * @public
   */
  ColumnSynonyms?: string[] | undefined;

  /**
   * <p>The role of the column in the data. Valid values are <code>DIMENSION</code> and <code>MEASURE</code>.</p>
   * @public
   */
  ColumnDataRole?: ColumnDataRole | undefined;

  /**
   * <p>The type of aggregation that is performed on the column data when
   *          it's queried.</p>
   * @public
   */
  Aggregation?: DefaultAggregation | undefined;

  /**
   * <p>A Boolean value that indicates whether the column is included in the query results.</p>
   * @public
   */
  IsIncludedInTopic?: boolean | undefined;

  /**
   * <p>A Boolean value that indicates whether the column shows in the autocomplete functionality.</p>
   * @public
   */
  DisableIndexing?: boolean | undefined;

  /**
   * <p>The order in which data is displayed for the column when
   *          it's used in a comparative context.</p>
   * @public
   */
  ComparativeOrder?: ComparativeOrder | undefined;

  /**
   * <p>The semantic type of data contained in the column.</p>
   * @public
   */
  SemanticType?: SemanticType | undefined;

  /**
   * <p>The level of time precision that is used to aggregate <code>DateTime</code> values.</p>
   * @public
   */
  TimeGranularity?: TopicTimeGranularity | undefined;

  /**
   * <p>The list of aggregation types that are allowed for the column. Valid values for this
   *          structure are <code>COUNT</code>, <code>DISTINCT_COUNT</code>, <code>MIN</code>,
   *             <code>MAX</code>, <code>MEDIAN</code>, <code>SUM</code>, <code>AVERAGE</code>,
   *             <code>STDEV</code>, <code>STDEVP</code>, <code>VAR</code>,
   *          <code>VARP</code>,
   *          and <code>PERCENTILE</code>.</p>
   * @public
   */
  AllowedAggregations?: AuthorSpecifiedAggregation[] | undefined;

  /**
   * <p>The list of aggregation types that are not allowed for the column. Valid values for this
   *          structure are <code>COUNT</code>, <code>DISTINCT_COUNT</code>, <code>MIN</code>,
   *             <code>MAX</code>, <code>MEDIAN</code>, <code>SUM</code>, <code>AVERAGE</code>,
   *             <code>STDEV</code>, <code>STDEVP</code>, <code>VAR</code>,
   *          <code>VARP</code>,
   *          and <code>PERCENTILE</code>.</p>
   * @public
   */
  NotAllowedAggregations?: AuthorSpecifiedAggregation[] | undefined;

  /**
   * <p>The default formatting used for values in the column.</p>
   * @public
   */
  DefaultFormatting?: DefaultFormatting | undefined;

  /**
   * <p>A Boolean
   *          value that indicates whether to aggregate the column data when
   *          it's used in a filter context.</p>
   * @public
   */
  NeverAggregateInFilter?: boolean | undefined;

  /**
   * <p>The other names or aliases for the column cell value.</p>
   * @public
   */
  CellValueSynonyms?: CellValueSynonym[] | undefined;

  /**
   * <p>The non additive value for the column.</p>
   * @public
   */
  NonAdditive?: boolean | undefined;
}

/**
 * <p>A structure that represents a data aggregation.</p>
 * @public
 */
export interface DataAggregation {
  /**
   * <p>The level of time precision that is used to aggregate <code>DateTime</code> values.</p>
   * @public
   */
  DatasetRowDateGranularity?: TopicTimeGranularity | undefined;

  /**
   * <p>The column name for the default date.</p>
   * @public
   */
  DefaultDateColumnName?: string | undefined;
}

/**
 * <p>A constant used in a category filter.</p>
 * @public
 */
export interface TopicCategoryFilterConstant {
  /**
   * <p>The type of category filter constant. This element is used to specify whether a constant is a singular or collective. Valid values are <code>SINGULAR</code> and <code>COLLECTIVE</code>.</p>
   * @public
   */
  ConstantType?: ConstantType | undefined;

  /**
   * <p>A singular constant used in a category filter. This element is used to specify a single value for the constant.</p>
   * @public
   */
  SingularConstant?: string | undefined;

  /**
   * <p>A collective constant used in a category filter. This element is used to specify a list of values for the constant.</p>
   * @public
   */
  CollectiveConstant?: CollectiveConstant | undefined;
}

/**
 * <p>A structure that represents a category filter.</p>
 * @public
 */
export interface TopicCategoryFilter {
  /**
   * <p>The category filter function. Valid values for this structure are <code>EXACT</code> and <code>CONTAINS</code>.</p>
   * @public
   */
  CategoryFilterFunction?: CategoryFilterFunction | undefined;

  /**
   * <p>The category filter type. This element is used to specify whether a filter is a simple category filter or an inverse category filter.</p>
   * @public
   */
  CategoryFilterType?: CategoryFilterType | undefined;

  /**
   * <p>The constant used in a category filter.</p>
   * @public
   */
  Constant?: TopicCategoryFilterConstant | undefined;

  /**
   * <p>A Boolean value that indicates if the filter is inverse.</p>
   * @public
   */
  Inverse?: boolean | undefined;
}

/**
 * <p>A structure that represents a range constant.</p>
 * @public
 */
export interface RangeConstant {
  /**
   * <p>The minimum value for a range constant.</p>
   * @public
   */
  Minimum?: string | undefined;

  /**
   * <p>The maximum value for a range constant.</p>
   * @public
   */
  Maximum?: string | undefined;
}

/**
 * <p>A constant value that is used in a range filter to specify the endpoints of the range.</p>
 * @public
 */
export interface TopicRangeFilterConstant {
  /**
   * <p>The data type of the constant value that is used in a range filter. Valid values for this structure are <code>RANGE</code>.</p>
   * @public
   */
  ConstantType?: ConstantType | undefined;

  /**
   * <p>The value of the constant that is used to specify the endpoints of a range filter.</p>
   * @public
   */
  RangeConstant?: RangeConstant | undefined;
}

/**
 * <p>A filter used to restrict data based on a range of dates or times.</p>
 * @public
 */
export interface TopicDateRangeFilter {
  /**
   * <p>A Boolean value that indicates whether the date range filter should include the boundary values. If
   *          set to true, the filter includes the start and end dates. If set to false, the filter
   *          excludes them.</p>
   * @public
   */
  Inclusive?: boolean | undefined;

  /**
   * <p>The constant used in a date range filter.</p>
   * @public
   */
  Constant?: TopicRangeFilterConstant | undefined;
}

/**
 * @public
 * @enum
 */
export const NamedFilterType = {
  CATEGORY_FILTER: "CATEGORY_FILTER",
  DATE_RANGE_FILTER: "DATE_RANGE_FILTER",
  NUMERIC_EQUALITY_FILTER: "NUMERIC_EQUALITY_FILTER",
  NUMERIC_RANGE_FILTER: "NUMERIC_RANGE_FILTER",
  RELATIVE_DATE_FILTER: "RELATIVE_DATE_FILTER",
} as const;

/**
 * @public
 */
export type NamedFilterType = (typeof NamedFilterType)[keyof typeof NamedFilterType];

/**
 * @public
 * @enum
 */
export const NamedFilterAggType = {
  AVERAGE: "AVERAGE",
  COUNT: "COUNT",
  DISTINCT_COUNT: "DISTINCT_COUNT",
  MAX: "MAX",
  MEDIAN: "MEDIAN",
  MIN: "MIN",
  NO_AGGREGATION: "NO_AGGREGATION",
  STDEV: "STDEV",
  STDEVP: "STDEVP",
  SUM: "SUM",
  VAR: "VAR",
  VARP: "VARP",
} as const;

/**
 * @public
 */
export type NamedFilterAggType = (typeof NamedFilterAggType)[keyof typeof NamedFilterAggType];

/**
 * <p>A structure that represents a singular filter constant, used in filters to specify a single value to match against.</p>
 * @public
 */
export interface TopicSingularFilterConstant {
  /**
   * <p>The type of the singular filter constant. Valid values for this structure are <code>SINGULAR</code>.</p>
   * @public
   */
  ConstantType?: ConstantType | undefined;

  /**
   * <p>The value of the singular filter constant.</p>
   * @public
   */
  SingularConstant?: string | undefined;
}

/**
 * <p>A filter that filters topics based on the value of a numeric field. The filter includes only topics whose numeric field value matches the specified value.</p>
 * @public
 */
export interface TopicNumericEqualityFilter {
  /**
   * <p>The constant used in a numeric equality filter.</p>
   * @public
   */
  Constant?: TopicSingularFilterConstant | undefined;

  /**
   * <p>An aggregation function that specifies how to calculate the value of a numeric field for
   *          a topic. Valid values for this structure are <code>NO_AGGREGATION</code>, <code>SUM</code>,
   *             <code>AVERAGE</code>, <code>COUNT</code>, <code>DISTINCT_COUNT</code>, <code>MAX</code>,
   *             <code>MEDIAN</code>, <code>MIN</code>, <code>STDEV</code>, <code>STDEVP</code>,
   *             <code>VAR</code>,
   *          and <code>VARP</code>.</p>
   * @public
   */
  Aggregation?: NamedFilterAggType | undefined;
}

/**
 * <p>A filter that filters topics based on the value of a numeric field. The filter includes only topics whose numeric field value falls within the specified range.</p>
 * @public
 */
export interface TopicNumericRangeFilter {
  /**
   * <p>A Boolean value that indicates whether the endpoints of the numeric range are included in the filter.
   *          If set to true, topics whose numeric field value is equal to the endpoint values will be
   *          included in the filter. If set to false, topics whose numeric field value is equal to the
   *          endpoint values will be excluded from the filter.</p>
   * @public
   */
  Inclusive?: boolean | undefined;

  /**
   * <p>The constant used in a
   *          numeric range filter.</p>
   * @public
   */
  Constant?: TopicRangeFilterConstant | undefined;

  /**
   * <p>An aggregation function that specifies how to calculate the value of a numeric field for
   *          a topic, Valid values for this structure are <code>NO_AGGREGATION</code>, <code>SUM</code>,
   *             <code>AVERAGE</code>, <code>COUNT</code>, <code>DISTINCT_COUNT</code>, <code>MAX</code>,
   *             <code>MEDIAN</code>, <code>MIN</code>, <code>STDEV</code>, <code>STDEVP</code>,
   *             <code>VAR</code>,
   *          and <code>VARP</code>.</p>
   * @public
   */
  Aggregation?: NamedFilterAggType | undefined;
}

/**
 * @public
 * @enum
 */
export const TopicRelativeDateFilterFunction = {
  LAST: "LAST",
  NEXT: "NEXT",
  NOW: "NOW",
  PREVIOUS: "PREVIOUS",
  THIS: "THIS",
} as const;

/**
 * @public
 */
export type TopicRelativeDateFilterFunction =
  (typeof TopicRelativeDateFilterFunction)[keyof typeof TopicRelativeDateFilterFunction];

/**
 * <p>A structure that represents a relative date filter.</p>
 * @public
 */
export interface TopicRelativeDateFilter {
  /**
   * <p>The level of time precision that is used to aggregate <code>DateTime</code> values.</p>
   * @public
   */
  TimeGranularity?: TopicTimeGranularity | undefined;

  /**
   * <p>The function to be used in a relative date filter to determine the range of dates to include in the results. Valid values for this structure are <code>BEFORE</code>, <code>AFTER</code>, and <code>BETWEEN</code>.</p>
   * @public
   */
  RelativeDateFilterFunction?: TopicRelativeDateFilterFunction | undefined;

  /**
   * <p>The constant used in a
   *          relative date filter.</p>
   * @public
   */
  Constant?: TopicSingularFilterConstant | undefined;
}

/**
 * <p>A structure that represents a filter used to select items for a topic.</p>
 * @public
 */
export interface TopicFilter {
  /**
   * <p>A description of the filter used to select items for a topic.</p>
   * @public
   */
  FilterDescription?: string | undefined;

  /**
   * <p>The class of the filter. Valid values for this structure are
   *             <code>ENFORCED_VALUE_FILTER</code>,
   *          <code>CONDITIONAL_VALUE_FILTER</code>,
   *          and <code>NAMED_VALUE_FILTER</code>.</p>
   * @public
   */
  FilterClass?: FilterClass | undefined;

  /**
   * <p>The name of the filter.</p>
   * @public
   */
  FilterName: string | undefined;

  /**
   * <p>The other names or aliases for the filter.</p>
   * @public
   */
  FilterSynonyms?: string[] | undefined;

  /**
   * <p>The name of the field that the filter operates on.</p>
   * @public
   */
  OperandFieldName: string | undefined;

  /**
   * <p>The type of the filter. Valid values for this structure are
   *          <code>CATEGORY_FILTER</code>, <code>NUMERIC_EQUALITY_FILTER</code>,
   *             <code>NUMERIC_RANGE_FILTER</code>,
   *          <code>DATE_RANGE_FILTER</code>,
   *          and <code>RELATIVE_DATE_FILTER</code>.</p>
   * @public
   */
  FilterType?: NamedFilterType | undefined;

  /**
   * <p>The category filter that is associated with this filter.</p>
   * @public
   */
  CategoryFilter?: TopicCategoryFilter | undefined;

  /**
   * <p>The numeric equality filter.</p>
   * @public
   */
  NumericEqualityFilter?: TopicNumericEqualityFilter | undefined;

  /**
   * <p>The numeric range filter.</p>
   * @public
   */
  NumericRangeFilter?: TopicNumericRangeFilter | undefined;

  /**
   * <p>The date range filter.</p>
   * @public
   */
  DateRangeFilter?: TopicDateRangeFilter | undefined;

  /**
   * <p>The relative date filter.</p>
   * @public
   */
  RelativeDateFilter?: TopicRelativeDateFilter | undefined;
}

/**
 * @public
 * @enum
 */
export const NamedEntityAggType = {
  AVERAGE: "AVERAGE",
  COUNT: "COUNT",
  CUSTOM: "CUSTOM",
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
export type NamedEntityAggType = (typeof NamedEntityAggType)[keyof typeof NamedEntityAggType];

/**
 * <p>A structure that represents a metric.</p>
 * @public
 */
export interface NamedEntityDefinitionMetric {
  /**
   * <p>The aggregation of a named entity. Valid values for this structure are <code>SUM</code>,
   *             <code>MIN</code>, <code>MAX</code>, <code>COUNT</code>, <code>AVERAGE</code>,
   *             <code>DISTINCT_COUNT</code>, <code>STDEV</code>, <code>STDEVP</code>, <code>VAR</code>,
   *             <code>VARP</code>, <code>PERCENTILE</code>,
   *          <code>MEDIAN</code>,
   *          and <code>CUSTOM</code>.</p>
   * @public
   */
  Aggregation?: NamedEntityAggType | undefined;

  /**
   * <p>The additional parameters for an aggregation function.</p>
   * @public
   */
  AggregationFunctionParameters?: Record<string, string> | undefined;
}

/**
 * @public
 * @enum
 */
export const PropertyRole = {
  ID: "ID",
  PRIMARY: "PRIMARY",
} as const;

/**
 * @public
 */
export type PropertyRole = (typeof PropertyRole)[keyof typeof PropertyRole];

/**
 * @public
 * @enum
 */
export const PropertyUsage = {
  DIMENSION: "DIMENSION",
  INHERIT: "INHERIT",
  MEASURE: "MEASURE",
} as const;

/**
 * @public
 */
export type PropertyUsage = (typeof PropertyUsage)[keyof typeof PropertyUsage];

/**
 * <p>A structure that represents a named entity.</p>
 * @public
 */
export interface NamedEntityDefinition {
  /**
   * <p>The name of the entity.</p>
   * @public
   */
  FieldName?: string | undefined;

  /**
   * <p>The property name to be used for the named entity.</p>
   * @public
   */
  PropertyName?: string | undefined;

  /**
   * <p>The property role. Valid values for this structure are <code>PRIMARY</code> and <code>ID</code>.</p>
   * @public
   */
  PropertyRole?: PropertyRole | undefined;

  /**
   * <p>The property usage. Valid values for this structure are <code>INHERIT</code>,
   *             <code>DIMENSION</code>,
   *          and <code>MEASURE</code>.</p>
   * @public
   */
  PropertyUsage?: PropertyUsage | undefined;

  /**
   * <p>The definition of a metric.</p>
   * @public
   */
  Metric?: NamedEntityDefinitionMetric | undefined;
}

/**
 * <p>A structure that represents a semantic entity type.</p>
 * @public
 */
export interface SemanticEntityType {
  /**
   * <p>The semantic entity type name.</p>
   * @public
   */
  TypeName?: string | undefined;

  /**
   * <p>The semantic entity sub type name.</p>
   * @public
   */
  SubTypeName?: string | undefined;

  /**
   * <p>The semantic entity type parameters.</p>
   * @public
   */
  TypeParameters?: Record<string, string> | undefined;
}

/**
 * <p>A structure that represents a named entity.</p>
 * @public
 */
export interface TopicNamedEntity {
  /**
   * <p>The name of the named entity.</p>
   * @public
   */
  EntityName: string | undefined;

  /**
   * <p>The description of the named entity.</p>
   * @public
   */
  EntityDescription?: string | undefined;

  /**
   * <p>The other
   *          names or aliases for the named entity.</p>
   * @public
   */
  EntitySynonyms?: string[] | undefined;

  /**
   * <p>The type of named entity that a topic represents.</p>
   * @public
   */
  SemanticEntityType?: SemanticEntityType | undefined;

  /**
   * <p>The definition of a named entity.</p>
   * @public
   */
  Definition?: NamedEntityDefinition[] | undefined;
}

/**
 * <p>A structure that represents a dataset.</p>
 * @public
 */
export interface DatasetMetadata {
  /**
   * <p>The Amazon Resource Name (ARN) of the dataset.</p>
   * @public
   */
  DatasetArn: string | undefined;

  /**
   * <p>The name of the dataset.</p>
   * @public
   */
  DatasetName?: string | undefined;

  /**
   * <p>The description of the dataset.</p>
   * @public
   */
  DatasetDescription?: string | undefined;

  /**
   * <p>The definition of a data aggregation.</p>
   * @public
   */
  DataAggregation?: DataAggregation | undefined;

  /**
   * <p>The list of filter definitions.</p>
   * @public
   */
  Filters?: TopicFilter[] | undefined;

  /**
   * <p>The list of column definitions.</p>
   * @public
   */
  Columns?: TopicColumn[] | undefined;

  /**
   * <p>The list of calculated field definitions.</p>
   * @public
   */
  CalculatedFields?: TopicCalculatedField[] | undefined;

  /**
   * <p>The list of named entities definitions.</p>
   * @public
   */
  NamedEntities?: TopicNamedEntity[] | undefined;
}

/**
 * @public
 * @enum
 */
export const TopicUserExperienceVersion = {
  LEGACY: "LEGACY",
  NEW_READER_EXPERIENCE: "NEW_READER_EXPERIENCE",
} as const;

/**
 * @public
 */
export type TopicUserExperienceVersion = (typeof TopicUserExperienceVersion)[keyof typeof TopicUserExperienceVersion];

/**
 * <p>A structure that describes the details of a topic, such as its name, description, and associated data sets.</p>
 * @public
 */
export interface TopicDetails {
  /**
   * <p>The name of the topic.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The description of the topic.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The user experience version of a topic.</p>
   * @public
   */
  UserExperienceVersion?: TopicUserExperienceVersion | undefined;

  /**
   * <p>The data sets that the topic is associated with.</p>
   * @public
   */
  DataSets?: DatasetMetadata[] | undefined;

  /**
   * <p>Configuration options for a <code>Topic</code>.</p>
   * @public
   */
  ConfigOptions?: TopicConfigOptions | undefined;
}

/**
 * @public
 */
export interface CreateTopicRequest {
  /**
   * <p>The ID of the Amazon Web Services account that you want to create a topic in.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the topic that you want to create. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
   * @public
   */
  TopicId: string | undefined;

  /**
   * <p>The definition of a topic to create.</p>
   * @public
   */
  Topic: TopicDetails | undefined;

  /**
   * <p>Contains a map of the key-value pairs for the resource tag or tags that are assigned to
   *          the dataset.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateTopicResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the topic.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The ID for the topic that you want to create. This ID is unique per Amazon Web Services Region
   *          for each Amazon Web Services account.</p>
   * @public
   */
  TopicId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the topic refresh.</p>
   * @public
   */
  RefreshArn?: string | undefined;

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
 * @public
 * @enum
 */
export const TopicScheduleType = {
  DAILY: "DAILY",
  HOURLY: "HOURLY",
  MONTHLY: "MONTHLY",
  WEEKLY: "WEEKLY",
} as const;

/**
 * @public
 */
export type TopicScheduleType = (typeof TopicScheduleType)[keyof typeof TopicScheduleType];

/**
 * <p>A structure that represents a topic refresh schedule.</p>
 * @public
 */
export interface TopicRefreshSchedule {
  /**
   * <p>A Boolean value that controls whether to schedule is enabled.</p>
   * @public
   */
  IsEnabled: boolean | undefined;

  /**
   * <p>A Boolean value that controls whether to schedule runs at the same schedule that is specified in
   *          SPICE dataset.</p>
   * @public
   */
  BasedOnSpiceSchedule: boolean | undefined;

  /**
   * <p>The starting date and time for the refresh schedule.</p>
   * @public
   */
  StartingAt?: Date | undefined;

  /**
   * <p>The timezone that you want the refresh schedule to use.</p>
   * @public
   */
  Timezone?: string | undefined;

  /**
   * <p>The time of day when the refresh should run, for
   *          example, Monday-Sunday.</p>
   * @public
   */
  RepeatAt?: string | undefined;

  /**
   * <p>The type of refresh schedule. Valid values for this structure are <code>HOURLY</code>,
   *             <code>DAILY</code>,
   *          <code>WEEKLY</code>,
   *          and <code>MONTHLY</code>.</p>
   * @public
   */
  TopicScheduleType?: TopicScheduleType | undefined;
}

/**
 * @public
 */
export interface CreateTopicRefreshScheduleRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the topic
   *          you're creating a refresh schedule for.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID of the topic that you want to modify. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
   * @public
   */
  TopicId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the dataset.</p>
   * @public
   */
  DatasetArn: string | undefined;

  /**
   * <p>The name of the dataset.</p>
   * @public
   */
  DatasetName?: string | undefined;

  /**
   * <p>The definition of a refresh schedule.</p>
   * @public
   */
  RefreshSchedule: TopicRefreshSchedule | undefined;
}

/**
 * @public
 */
export interface CreateTopicRefreshScheduleResponse {
  /**
   * <p>The ID of the topic that you want to modify. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
   * @public
   */
  TopicId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the topic.</p>
   * @public
   */
  TopicArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the dataset.</p>
   * @public
   */
  DatasetArn?: string | undefined;

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
 * @public
 */
export interface CreateVPCConnectionRequest {
  /**
   * <p>The Amazon Web Services account ID of the account where you want to create a new VPC
   * 			connection.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID of the VPC connection that
   * 			you're creating. This ID is a unique identifier for each Amazon Web Services Region in an
   * 				Amazon Web Services account.</p>
   * @public
   */
  VPCConnectionId: string | undefined;

  /**
   * <p>The display name for the VPC connection.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>A list of subnet IDs for the VPC connection.</p>
   * @public
   */
  SubnetIds: string[] | undefined;

  /**
   * <p>A list of security group IDs for the VPC connection.</p>
   * @public
   */
  SecurityGroupIds: string[] | undefined;

  /**
   * <p>A list of IP addresses of DNS resolver endpoints for the VPC connection.</p>
   * @public
   */
  DnsResolvers?: string[] | undefined;

  /**
   * <p>The IAM role to associate with the VPC connection.</p>
   * @public
   */
  RoleArn: string | undefined;

  /**
   * <p>A map of the key-value pairs for the resource tag or tags assigned to the VPC
   * 			connection.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 * @enum
 */
export const VPCConnectionAvailabilityStatus = {
  AVAILABLE: "AVAILABLE",
  PARTIALLY_AVAILABLE: "PARTIALLY_AVAILABLE",
  UNAVAILABLE: "UNAVAILABLE",
} as const;

/**
 * @public
 */
export type VPCConnectionAvailabilityStatus =
  (typeof VPCConnectionAvailabilityStatus)[keyof typeof VPCConnectionAvailabilityStatus];

/**
 * @public
 * @enum
 */
export const VPCConnectionResourceStatus = {
  CREATION_FAILED: "CREATION_FAILED",
  CREATION_IN_PROGRESS: "CREATION_IN_PROGRESS",
  CREATION_SUCCESSFUL: "CREATION_SUCCESSFUL",
  DELETED: "DELETED",
  DELETION_FAILED: "DELETION_FAILED",
  DELETION_IN_PROGRESS: "DELETION_IN_PROGRESS",
  UPDATE_FAILED: "UPDATE_FAILED",
  UPDATE_IN_PROGRESS: "UPDATE_IN_PROGRESS",
  UPDATE_SUCCESSFUL: "UPDATE_SUCCESSFUL",
} as const;

/**
 * @public
 */
export type VPCConnectionResourceStatus =
  (typeof VPCConnectionResourceStatus)[keyof typeof VPCConnectionResourceStatus];

/**
 * @public
 */
export interface CreateVPCConnectionResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the VPC connection.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The ID for the VPC connection that
   * 			you're creating. This ID is unique per Amazon Web Services Region for each Amazon Web Services
   * 			account.</p>
   * @public
   */
  VPCConnectionId?: string | undefined;

  /**
   * <p>The status of the creation of the VPC connection.</p>
   * @public
   */
  CreationStatus?: VPCConnectionResourceStatus | undefined;

  /**
   * <p>The availability status of the VPC connection.</p>
   * @public
   */
  AvailabilityStatus?: VPCConnectionAvailabilityStatus | undefined;

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
 * <p>The custom permissions profile.</p>
 * @public
 */
export interface CustomPermissions {
  /**
   * <p>The Amazon Resource Name (ARN) of the custom permissions profile.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The name of the custom permissions profile.</p>
   * @public
   */
  CustomPermissionsName?: string | undefined;

  /**
   * <p>A set of actions in the custom permissions profile.</p>
   * @public
   */
  Capabilities?: Capabilities | undefined;
}

/**
 * @public
 * @enum
 */
export const DashboardErrorType = {
  ACCESS_DENIED: "ACCESS_DENIED",
  COLUMN_GEOGRAPHIC_ROLE_MISMATCH: "COLUMN_GEOGRAPHIC_ROLE_MISMATCH",
  COLUMN_REPLACEMENT_MISSING: "COLUMN_REPLACEMENT_MISSING",
  COLUMN_TYPE_MISMATCH: "COLUMN_TYPE_MISMATCH",
  DATA_SET_NOT_FOUND: "DATA_SET_NOT_FOUND",
  INTERNAL_FAILURE: "INTERNAL_FAILURE",
  PARAMETER_NOT_FOUND: "PARAMETER_NOT_FOUND",
  PARAMETER_TYPE_INVALID: "PARAMETER_TYPE_INVALID",
  PARAMETER_VALUE_INCOMPATIBLE: "PARAMETER_VALUE_INCOMPATIBLE",
  SOURCE_NOT_FOUND: "SOURCE_NOT_FOUND",
} as const;

/**
 * @public
 */
export type DashboardErrorType = (typeof DashboardErrorType)[keyof typeof DashboardErrorType];

/**
 * <p>Dashboard error.</p>
 * @public
 */
export interface DashboardError {
  /**
   * <p>Type.</p>
   * @public
   */
  Type?: DashboardErrorType | undefined;

  /**
   * <p>Message.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>Lists the violated entities that caused the dashboard error.</p>
   * @public
   */
  ViolatedEntities?: Entity[] | undefined;
}

/**
 * <p>Dashboard version.</p>
 * @public
 */
export interface DashboardVersion {
  /**
   * <p>The time that this dashboard version was created.</p>
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * <p>Errors associated with this dashboard version.</p>
   * @public
   */
  Errors?: DashboardError[] | undefined;

  /**
   * <p>Version number for this version of the dashboard.</p>
   * @public
   */
  VersionNumber?: number | undefined;

  /**
   * <p>The HTTP status of the request.</p>
   * @public
   */
  Status?: ResourceStatus | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>Source entity ARN.</p>
   * @public
   */
  SourceEntityArn?: string | undefined;

  /**
   * <p>The Amazon Resource Numbers (ARNs) for the datasets that are associated with this
   *             version of the dashboard.</p>
   * @public
   */
  DataSetArns?: string[] | undefined;

  /**
   * <p>Description.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The ARN of the theme associated with a version of the dashboard.</p>
   * @public
   */
  ThemeArn?: string | undefined;

  /**
   * <p>A list of the associated sheets with the unique identifier and name of each sheet.</p>
   * @public
   */
  Sheets?: Sheet[] | undefined;
}

/**
 * <p>Dashboard.</p>
 * @public
 */
export interface Dashboard {
  /**
   * <p>Dashboard ID.</p>
   * @public
   */
  DashboardId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>A display name for the dashboard.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>Version.</p>
   * @public
   */
  Version?: DashboardVersion | undefined;

  /**
   * <p>The time that this dashboard was created.</p>
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * <p>The last time that this dashboard was published.</p>
   * @public
   */
  LastPublishedTime?: Date | undefined;

  /**
   * <p>The last time that this dashboard was updated.</p>
   * @public
   */
  LastUpdatedTime?: Date | undefined;

  /**
   * <p>A list of analysis Amazon Resource Names (ARNs) to be linked to the dashboard.</p>
   * @public
   */
  LinkEntities?: string[] | undefined;
}

/**
 * @public
 * @enum
 */
export const DashboardFilterAttribute = {
  DASHBOARD_NAME: "DASHBOARD_NAME",
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
export type DashboardFilterAttribute = (typeof DashboardFilterAttribute)[keyof typeof DashboardFilterAttribute];

/**
 * <p>A filter that you apply when searching for dashboards. </p>
 * @public
 */
export interface DashboardSearchFilter {
  /**
   * <p>The comparison operator that you want to use as a filter, for example  <code>"Operator": "StringEquals"</code>. Valid values are <code>"StringEquals"</code> and  <code>"StringLike"</code>.</p>
   *          <p>If you set the operator value to <code>"StringEquals"</code>, you need to provide an ownership related filter in the <code>"NAME"</code> field and the arn of the user or group whose folders you want to search in the <code>"Value"</code> field. For example,  <code>"Name":"DIRECT_QUICKSIGHT_OWNER", "Operator": "StringEquals", "Value": "arn:aws:quicksight:us-east-1:1:user/default/UserName1"</code>.</p>
   *          <p>If you set the value to <code>"StringLike"</code>, you need to provide the name of the folders you are searching for. For example, <code>"Name":"DASHBOARD_NAME", "Operator": "StringLike", "Value": "Test"</code>. The <code>"StringLike"</code> operator only supports the <code>NAME</code> value <code>DASHBOARD_NAME</code>.</p>
   * @public
   */
  Operator: FilterOperator | undefined;

  /**
   * <p>The name of the value that you want to use as a filter, for example, <code>"Name":
   *             "QUICKSIGHT_OWNER"</code>.</p>
   *          <p>Valid values are defined as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>QUICKSIGHT_VIEWER_OR_OWNER</code>: Provide an ARN of a user or group, and any dashboards with that ARN listed as one of the dashboards's owners or viewers are returned. Implicit permissions from folders or groups are considered.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>QUICKSIGHT_OWNER</code>: Provide an ARN of a user or group, and any dashboards with that ARN listed as one of the owners of the dashboards are returned. Implicit permissions from folders or groups are considered.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DIRECT_QUICKSIGHT_SOLE_OWNER</code>: Provide an ARN of a user or group, and any dashboards with that ARN listed as the only owner of the dashboard are returned. Implicit permissions from folders or groups are not considered.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DIRECT_QUICKSIGHT_OWNER</code>: Provide an ARN of a user or group, and any dashboards with that ARN listed as one of the owners of the dashboards are returned. Implicit permissions from folders or groups are not considered.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DIRECT_QUICKSIGHT_VIEWER_OR_OWNER</code>: Provide an ARN of a user or group, and any dashboards with that ARN listed as one of the owners or viewers of the dashboards are returned. Implicit permissions from folders or groups are not considered.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DASHBOARD_NAME</code>: Any dashboards whose names have a substring match to this value will be returned.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Name?: DashboardFilterAttribute | undefined;

  /**
   * <p>The value of the named item, in this case <code>QUICKSIGHT_USER</code>, that you want
   *             to use as a filter, for example, <code>"Value":
   *             "arn:aws:quicksight:us-east-1:1:user/default/UserName1"</code>. </p>
   * @public
   */
  Value?: string | undefined;
}

/**
 * <p>Dashboard summary.</p>
 * @public
 */
export interface DashboardSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>Dashboard ID.</p>
   * @public
   */
  DashboardId?: string | undefined;

  /**
   * <p>A display name for the dashboard.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The time that this dashboard was created.</p>
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * <p>The last time that this dashboard was updated.</p>
   * @public
   */
  LastUpdatedTime?: Date | undefined;

  /**
   * <p>Published version number.</p>
   * @public
   */
  PublishedVersionNumber?: number | undefined;

  /**
   * <p>The last time that this dashboard was published.</p>
   * @public
   */
  LastPublishedTime?: Date | undefined;
}

/**
 * <p>Dashboard version summary.</p>
 * @public
 */
export interface DashboardVersionSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The time that this dashboard version was created.</p>
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * <p>Version number.</p>
   * @public
   */
  VersionNumber?: number | undefined;

  /**
   * <p>The HTTP status of the request.</p>
   * @public
   */
  Status?: ResourceStatus | undefined;

  /**
   * <p>Source entity ARN.</p>
   * @public
   */
  SourceEntityArn?: string | undefined;

  /**
   * <p>Description.</p>
   * @public
   */
  Description?: string | undefined;
}

/**
 * <p>Output column.</p>
 * @public
 */
export interface OutputColumn {
  /**
   * <p>The display name of the column..</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>A description for a column.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The data type of the column.</p>
   * @public
   */
  Type?: ColumnDataType | undefined;

  /**
   * <p>The sub data type of the column.</p>
   * @public
   */
  SubType?: ColumnDataSubType | undefined;
}

/**
 * <p>Dataset.</p>
 * @public
 */
export interface DataSet {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The ID of the dataset.</p>
   * @public
   */
  DataSetId?: string | undefined;

  /**
   * <p>A display name for the dataset.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The time that this dataset was created.</p>
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * <p>The last time that this dataset was updated.</p>
   * @public
   */
  LastUpdatedTime?: Date | undefined;

  /**
   * <p>Declares the physical tables that are available in the underlying data sources.</p>
   * @public
   */
  PhysicalTableMap?: Record<string, PhysicalTable> | undefined;

  /**
   * <p>Configures the combination and transformation of the data from the physical
   *             tables.</p>
   * @public
   */
  LogicalTableMap?: Record<string, LogicalTable> | undefined;

  /**
   * <p>The list of columns after all transforms. These columns are available in templates,
   *             analyses, and dashboards.</p>
   * @public
   */
  OutputColumns?: OutputColumn[] | undefined;

  /**
   * <p>A value that indicates whether you want to import the data into SPICE.</p>
   * @public
   */
  ImportMode?: DataSetImportMode | undefined;

  /**
   * <p>The amount of SPICE capacity used by this dataset. This is 0 if the dataset isn't
   *             imported into SPICE.</p>
   * @public
   */
  ConsumedSpiceCapacityInBytes?: number | undefined;

  /**
   * <p>Groupings of columns that work together in certain Amazon QuickSight features.
   *             Currently, only geospatial hierarchy is supported.</p>
   * @public
   */
  ColumnGroups?: ColumnGroup[] | undefined;

  /**
   * <p>The folder that contains fields and nested subfolders for your dataset.</p>
   * @public
   */
  FieldFolders?: Record<string, FieldFolder> | undefined;

  /**
   * <p>The row-level security configuration for the dataset.</p>
   * @public
   */
  RowLevelPermissionDataSet?: RowLevelPermissionDataSet | undefined;

  /**
   * <p>The element you can use to define tags for row-level security.</p>
   * @public
   */
  RowLevelPermissionTagConfiguration?: RowLevelPermissionTagConfiguration | undefined;

  /**
   * <p>A set of one or more definitions of a <code>
   *                <a href="https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ColumnLevelPermissionRule.html">ColumnLevelPermissionRule</a>
   *             </code>.</p>
   * @public
   */
  ColumnLevelPermissionRules?: ColumnLevelPermissionRule[] | undefined;

  /**
   * <p>The usage configuration to apply to child datasets that reference this dataset as a source.</p>
   * @public
   */
  DataSetUsageConfiguration?: DataSetUsageConfiguration | undefined;

  /**
   * <p>The parameters that are declared in a dataset.</p>
   * @public
   */
  DatasetParameters?: DatasetParameter[] | undefined;
}

/**
 * @public
 * @enum
 */
export const DataSetFilterAttribute = {
  DATASET_NAME: "DATASET_NAME",
  DIRECT_QUICKSIGHT_OWNER: "DIRECT_QUICKSIGHT_OWNER",
  DIRECT_QUICKSIGHT_SOLE_OWNER: "DIRECT_QUICKSIGHT_SOLE_OWNER",
  DIRECT_QUICKSIGHT_VIEWER_OR_OWNER: "DIRECT_QUICKSIGHT_VIEWER_OR_OWNER",
  QUICKSIGHT_OWNER: "QUICKSIGHT_OWNER",
  QUICKSIGHT_VIEWER_OR_OWNER: "QUICKSIGHT_VIEWER_OR_OWNER",
} as const;

/**
 * @public
 */
export type DataSetFilterAttribute = (typeof DataSetFilterAttribute)[keyof typeof DataSetFilterAttribute];

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
  RefreshConfiguration: RefreshConfiguration | undefined;
}

/**
 * <p>A filter that you apply when searching for datasets.</p>
 * @public
 */
export interface DataSetSearchFilter {
  /**
   * <p>The comparison operator that you want to use as a filter, for example <code>"Operator": "StringEquals"</code>. Valid values are <code>"StringEquals"</code> and <code>"StringLike"</code>.</p>
   *          <p>If you set the operator value to <code>"StringEquals"</code>, you need to provide an ownership related filter in the <code>"NAME"</code> field and the arn of the user or group whose datasets you want to search in the <code>"Value"</code> field. For example, <code>"Name":"QUICKSIGHT_OWNER", "Operator": "StringEquals", "Value": "arn:aws:quicksight:us-east- 1:1:user/default/UserName1"</code>.</p>
   *          <p>If you set the value to <code>"StringLike"</code>, you need to provide the name of the datasets you are searching for. For example, <code>"Name":"DATASET_NAME", "Operator": "StringLike", "Value": "Test"</code>. The <code>"StringLike"</code> operator only supports the <code>NAME</code> value <code>DATASET_NAME</code>.</p>
   * @public
   */
  Operator: FilterOperator | undefined;

  /**
   * <p>The name of the value that you want to use as a filter, for example, <code>"Name":
   *             "QUICKSIGHT_OWNER"</code>.</p>
   *          <p>Valid values are defined as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>QUICKSIGHT_VIEWER_OR_OWNER</code>: Provide an ARN of a user or group, and any datasets with that ARN listed as one of the dataset owners or viewers are returned. Implicit permissions from folders or groups are considered.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>QUICKSIGHT_OWNER</code>: Provide an ARN of a user or group, and any datasets with that ARN listed as one of the owners of the dataset are returned. Implicit permissions from folders or groups are considered.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DIRECT_QUICKSIGHT_SOLE_OWNER</code>: Provide an ARN of a user or group, and any datasets with that ARN listed as the only owner of the dataset are returned. Implicit permissions from folders or groups are not considered.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DIRECT_QUICKSIGHT_OWNER</code>: Provide an ARN of a user or group, and any datasets with that ARN listed as one of the owners if the dataset are returned. Implicit permissions from folders or groups are not considered.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DIRECT_QUICKSIGHT_VIEWER_OR_OWNER</code>: Provide an ARN of a user or group, and any datasets with that ARN listed as one of the owners or viewers of the dataset are returned. Implicit permissions from folders or groups are not considered.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DATASET_NAME</code>: Any datasets whose names have a substring match to this value will be returned.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Name: DataSetFilterAttribute | undefined;

  /**
   * <p>The value of the named item, in this case <code>QUICKSIGHT_OWNER</code>, that you want
   *             to use as a filter, for example, <code>"Value":
   *             "arn:aws:quicksight:us-east-1:1:user/default/UserName1"</code>.</p>
   * @public
   */
  Value: string | undefined;
}

/**
 * <p>Dataset summary.</p>
 * @public
 */
export interface DataSetSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the dataset.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The ID of the dataset.</p>
   * @public
   */
  DataSetId?: string | undefined;

  /**
   * <p>A display name for the dataset.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The time that this dataset was created.</p>
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * <p>The last time that this dataset was updated.</p>
   * @public
   */
  LastUpdatedTime?: Date | undefined;

  /**
   * <p>A value that indicates whether you want to import the data into SPICE.</p>
   * @public
   */
  ImportMode?: DataSetImportMode | undefined;

  /**
   * <p>The row-level security configuration for the dataset.</p>
   * @public
   */
  RowLevelPermissionDataSet?: RowLevelPermissionDataSet | undefined;

  /**
   * <p>Whether or not the row level permission tags are applied.</p>
   * @public
   */
  RowLevelPermissionTagConfigurationApplied?: boolean | undefined;

  /**
   * <p>A value that indicates if the dataset has column level permission configured.</p>
   * @public
   */
  ColumnLevelPermissionRulesApplied?: boolean | undefined;
}

/**
 * @public
 * @enum
 */
export const DataSourceErrorInfoType = {
  ACCESS_DENIED: "ACCESS_DENIED",
  CONFLICT: "CONFLICT",
  COPY_SOURCE_NOT_FOUND: "COPY_SOURCE_NOT_FOUND",
  ENGINE_VERSION_NOT_SUPPORTED: "ENGINE_VERSION_NOT_SUPPORTED",
  GENERIC_SQL_FAILURE: "GENERIC_SQL_FAILURE",
  TIMEOUT: "TIMEOUT",
  UNKNOWN: "UNKNOWN",
  UNKNOWN_HOST: "UNKNOWN_HOST",
} as const;

/**
 * @public
 */
export type DataSourceErrorInfoType = (typeof DataSourceErrorInfoType)[keyof typeof DataSourceErrorInfoType];

/**
 * <p>Error information for the data source creation or update.</p>
 * @public
 */
export interface DataSourceErrorInfo {
  /**
   * <p>Error type.</p>
   * @public
   */
  Type?: DataSourceErrorInfoType | undefined;

  /**
   * <p>Error message.</p>
   * @public
   */
  Message?: string | undefined;
}

/**
 * <p>The structure of a data source.</p>
 * @public
 */
export interface DataSource {
  /**
   * <p>The Amazon Resource Name (ARN) of the data source.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The ID of the data source. This ID is unique per Amazon Web Services Region for each
   *             Amazon Web Services account.</p>
   * @public
   */
  DataSourceId?: string | undefined;

  /**
   * <p>A display name for the data source.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The type of the data source. This type indicates which database engine the data source
   *             connects to.</p>
   * @public
   */
  Type?: DataSourceType | undefined;

  /**
   * <p>The HTTP status of the request.</p>
   * @public
   */
  Status?: ResourceStatus | undefined;

  /**
   * <p>The time that this data source was created.</p>
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * <p>The last time that this data source was updated.</p>
   * @public
   */
  LastUpdatedTime?: Date | undefined;

  /**
   * <p>The parameters that Amazon QuickSight uses to connect to your underlying source. This
   *             is a variant type structure. For this structure to be valid, only one of the attributes
   *             can be non-null.</p>
   * @public
   */
  DataSourceParameters?: DataSourceParameters | undefined;

  /**
   * <p>A set of alternate data source parameters that you want to share for the credentials
   *             stored with this data source. The credentials are applied in tandem with the data source
   *             parameters when you copy a data source by using a create or update request. The API
   *             operation compares the <code>DataSourceParameters</code> structure that's in the request
   *             with the structures in the <code>AlternateDataSourceParameters</code> allow list. If the
   *             structures are an exact match, the request is allowed to use the credentials from this
   *             existing data source. If the <code>AlternateDataSourceParameters</code> list is null,
   *             the <code>Credentials</code> originally used with this <code>DataSourceParameters</code>
   *             are automatically allowed.</p>
   * @public
   */
  AlternateDataSourceParameters?: DataSourceParameters[] | undefined;

  /**
   * <p>The VPC connection information. You need to use this parameter only when you want
   *             Amazon QuickSight to use a VPC connection when connecting to your underlying source.</p>
   * @public
   */
  VpcConnectionProperties?: VpcConnectionProperties | undefined;

  /**
   * <p>Secure Socket Layer (SSL) properties that apply when Amazon QuickSight connects to your
   *             underlying source.</p>
   * @public
   */
  SslProperties?: SslProperties | undefined;

  /**
   * <p>Error information from the last update or the creation of the data source.</p>
   * @public
   */
  ErrorInfo?: DataSourceErrorInfo | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the secret associated with the data source in Amazon Secrets Manager.</p>
   * @public
   */
  SecretArn?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const DataSourceFilterAttribute = {
  DATASOURCE_NAME: "DATASOURCE_NAME",
  DIRECT_QUICKSIGHT_OWNER: "DIRECT_QUICKSIGHT_OWNER",
  DIRECT_QUICKSIGHT_SOLE_OWNER: "DIRECT_QUICKSIGHT_SOLE_OWNER",
  DIRECT_QUICKSIGHT_VIEWER_OR_OWNER: "DIRECT_QUICKSIGHT_VIEWER_OR_OWNER",
} as const;

/**
 * @public
 */
export type DataSourceFilterAttribute = (typeof DataSourceFilterAttribute)[keyof typeof DataSourceFilterAttribute];

/**
 * <p>A filter that you apply when searching for data sources.</p>
 * @public
 */
export interface DataSourceSearchFilter {
  /**
   * <p>The comparison operator that you want to use as a filter, for example <code>"Operator": "StringEquals"</code>. Valid values are <code>"StringEquals"</code> and <code>"StringLike"</code>.</p>
   *          <p>If you set the operator value to <code>"StringEquals"</code>, you need to provide an ownership related filter in the <code>"NAME"</code> field and the arn of the user or group whose data sources you want to search in the <code>"Value"</code> field. For example, <code>"Name":"DIRECT_QUICKSIGHT_OWNER", "Operator": "StringEquals", "Value": "arn:aws:quicksight:us-east-1:1:user/default/UserName1"</code>.</p>
   *          <p>If you set the value to <code>"StringLike"</code>, you need to provide the name of the data sources you are searching for. For example, <code>"Name":"DATASOURCE_NAME", "Operator": "StringLike", "Value": "Test"</code>. The <code>"StringLike"</code> operator only supports the <code>NAME</code> value <code>DATASOURCE_NAME</code>.</p>
   * @public
   */
  Operator: FilterOperator | undefined;

  /**
   * <p>The name of the value that you want to use as a filter, for example, <code>"Name":
   *             "DIRECT_QUICKSIGHT_OWNER"</code>.</p>
   *          <p>Valid values are defined as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>DIRECT_QUICKSIGHT_VIEWER_OR_OWNER</code>: Provide an ARN of a user or group, and any data sources with that ARN listed as one of the owners or viewers of the data sources are returned. Implicit permissions from folders or groups are not considered.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DIRECT_QUICKSIGHT_OWNER</code>: Provide an ARN of a user or group, and any data sources with that ARN listed as one of the owners if the data source are returned. Implicit permissions from folders or groups are not considered.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DIRECT_QUICKSIGHT_SOLE_OWNER</code>: Provide an ARN of a user or group, and any data sources with that ARN listed as the only owner of the data source are returned. Implicit permissions from folders or groups are not considered.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DATASOURCE_NAME</code>: Any data sources whose names have a substring match to the provided value are returned.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Name: DataSourceFilterAttribute | undefined;

  /**
   * <p>The value of the named item, for example <code>DIRECT_QUICKSIGHT_OWNER</code>, that you want
   *             to use as a filter, for example, <code>"Value":
   *             "arn:aws:quicksight:us-east-1:1:user/default/UserName1"</code>.</p>
   * @public
   */
  Value: string | undefined;
}

/**
 * <p>A <code>DataSourceSummary</code> object that returns a summary of a data source.</p>
 * @public
 */
export interface DataSourceSummary {
  /**
   * <p>The arn of the datasource.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The unique ID of the data source.</p>
   * @public
   */
  DataSourceId?: string | undefined;

  /**
   * <p>The name of the data source.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The type of the data source.</p>
   * @public
   */
  Type?: DataSourceType | undefined;

  /**
   * <p>The date and time that the data source was created. This value is expressed in MM-DD-YYYY HH:MM:SS format.</p>
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * <p>The date and time the data source was last updated. This value is expressed in MM-DD-YYYY HH:MM:SS format.</p>
   * @public
   */
  LastUpdatedTime?: Date | undefined;
}

/**
 * @public
 */
export interface DeleteAccountCustomizationRequest {
  /**
   * <p>The ID for the Amazon Web Services account that you want to delete Amazon QuickSight customizations from in
   *             this Amazon Web Services Region.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The Amazon QuickSight namespace that you're deleting the customizations from.</p>
   * @public
   */
  Namespace?: string | undefined;
}

/**
 * @public
 */
export interface DeleteAccountCustomizationResponse {
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
 * @public
 */
export interface DeleteAccountSubscriptionRequest {
  /**
   * <p>The Amazon Web Services account ID of the account that you want to delete.</p>
   * @public
   */
  AwsAccountId: string | undefined;
}

/**
 * @public
 */
export interface DeleteAccountSubscriptionResponse {
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
 * @public
 */
export interface DeleteAnalysisRequest {
  /**
   * <p>The ID of the Amazon Web Services account where you want to delete an analysis.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID of the analysis that you're deleting.</p>
   * @public
   */
  AnalysisId: string | undefined;

  /**
   * <p>A value that specifies the number of days that Amazon QuickSight waits before it deletes the
   *             analysis. You can't use this parameter with the <code>ForceDeleteWithoutRecovery</code>
   *             option in the same API call. The default value is 30.</p>
   * @public
   */
  RecoveryWindowInDays?: number | undefined;

  /**
   * <p>This option defaults to the value <code>NoForceDeleteWithoutRecovery</code>. To
   *             immediately delete the analysis, add the <code>ForceDeleteWithoutRecovery</code> option.
   *             You can't restore an analysis after it's deleted. </p>
   * @public
   */
  ForceDeleteWithoutRecovery?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteAnalysisResponse {
  /**
   * <p>The HTTP status of the request.</p>
   * @public
   */
  Status?: number | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the deleted analysis.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The ID of the deleted analysis.</p>
   * @public
   */
  AnalysisId?: string | undefined;

  /**
   * <p>The date and time that the analysis is scheduled to be deleted.</p>
   * @public
   */
  DeletionTime?: Date | undefined;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   * @public
   */
  RequestId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteBrandRequest {
  /**
   * <p>The ID of the Amazon Web Services account that owns the brand.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID of the Amazon QuickSight brand.</p>
   * @public
   */
  BrandId: string | undefined;
}

/**
 * @public
 */
export interface DeleteBrandResponse {
  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   * @public
   */
  RequestId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteBrandAssignmentRequest {
  /**
   * <p>The ID of the Amazon Web Services account that owns the brand assignment.</p>
   * @public
   */
  AwsAccountId: string | undefined;
}

/**
 * @public
 */
export interface DeleteBrandAssignmentResponse {
  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   * @public
   */
  RequestId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteCustomPermissionsRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the custom permissions profile that you want to delete.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The name of the custom permissions profile that you want to delete.</p>
   * @public
   */
  CustomPermissionsName: string | undefined;
}

/**
 * @public
 */
export interface DeleteCustomPermissionsResponse {
  /**
   * <p>The HTTP status of the request.</p>
   * @public
   */
  Status?: number | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the custom permissions profile.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   * @public
   */
  RequestId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteDashboardRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the dashboard that you're
   *             deleting.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the dashboard.</p>
   * @public
   */
  DashboardId: string | undefined;

  /**
   * <p>The version number of the dashboard. If the version number property is provided, only
   *             the specified version of the dashboard is deleted.</p>
   * @public
   */
  VersionNumber?: number | undefined;
}

/**
 * @public
 */
export interface DeleteDashboardResponse {
  /**
   * <p>The HTTP status of the request.</p>
   * @public
   */
  Status?: number | undefined;

  /**
   * <p>The Secure Socket Layer (SSL) properties that apply for the resource.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The ID of the dashboard.</p>
   * @public
   */
  DashboardId?: string | undefined;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   * @public
   */
  RequestId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteDataSetRequest {
  /**
   * <p>The Amazon Web Services account ID.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the dataset that you want to create. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
   * @public
   */
  DataSetId: string | undefined;
}

/**
 * @public
 */
export interface DeleteDataSetResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the dataset.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The ID for the dataset that you want to create. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
   * @public
   */
  DataSetId?: string | undefined;

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
 * @public
 */
export interface DeleteDataSetRefreshPropertiesRequest {
  /**
   * <p>The Amazon Web Services account ID.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID of the dataset.</p>
   * @public
   */
  DataSetId: string | undefined;
}

/**
 * @public
 */
export interface DeleteDataSetRefreshPropertiesResponse {
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
 * @public
 */
export interface DeleteDataSourceRequest {
  /**
   * <p>The Amazon Web Services account ID.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID of the data source. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
   * @public
   */
  DataSourceId: string | undefined;
}

/**
 * @public
 */
export interface DeleteDataSourceResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the data source that you deleted.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The ID of the data source. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
   * @public
   */
  DataSourceId?: string | undefined;

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
 * @public
 */
export interface DeleteFolderRequest {
  /**
   * <p>The ID for the Amazon Web Services account that contains the folder.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID of the folder.</p>
   * @public
   */
  FolderId: string | undefined;
}

/**
 * @public
 */
export interface DeleteFolderResponse {
  /**
   * <p>The HTTP status of the request.</p>
   * @public
   */
  Status?: number | undefined;

  /**
   * <p>The Amazon Resource Name of the deleted folder.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The ID of the folder.</p>
   * @public
   */
  FolderId?: string | undefined;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   * @public
   */
  RequestId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteFolderMembershipRequest {
  /**
   * <p>The ID for the Amazon Web Services account that contains the folder.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The Folder ID.</p>
   * @public
   */
  FolderId: string | undefined;

  /**
   * <p>The ID of the asset that you want to delete.</p>
   * @public
   */
  MemberId: string | undefined;

  /**
   * <p>The member type of the asset that you want to delete from a folder.</p>
   * @public
   */
  MemberType: MemberType | undefined;
}

/**
 * @public
 */
export interface DeleteFolderMembershipResponse {
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
 * @public
 */
export interface DeleteGroupRequest {
  /**
   * <p>The name of the group that you want to delete.</p>
   * @public
   */
  GroupName: string | undefined;

  /**
   * <p>The ID for the Amazon Web Services account that the group is in. Currently, you use the ID for the
   * 			Amazon Web Services account that contains your Amazon QuickSight account.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The namespace of the group that you want to delete.</p>
   * @public
   */
  Namespace: string | undefined;
}

/**
 * @public
 */
export interface DeleteGroupResponse {
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
 * @public
 */
export interface DeleteGroupMembershipRequest {
  /**
   * <p>The name of the user that you want to delete from the group membership.</p>
   * @public
   */
  MemberName: string | undefined;

  /**
   * <p>The name of the group that you want to delete the user from.</p>
   * @public
   */
  GroupName: string | undefined;

  /**
   * <p>The ID for the Amazon Web Services account that the group is in. Currently, you use the ID for the
   * 			Amazon Web Services account that contains your Amazon QuickSight account.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The namespace of the group that you want to remove a user from.</p>
   * @public
   */
  Namespace: string | undefined;
}

/**
 * @public
 */
export interface DeleteGroupMembershipResponse {
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
 * @public
 */
export interface DeleteIAMPolicyAssignmentRequest {
  /**
   * <p>The Amazon Web Services account ID where you want to delete the IAM
   * 			policy assignment.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The name of the assignment. </p>
   * @public
   */
  AssignmentName: string | undefined;

  /**
   * <p>The namespace that contains the assignment.</p>
   * @public
   */
  Namespace: string | undefined;
}

/**
 * @public
 */
export interface DeleteIAMPolicyAssignmentResponse {
  /**
   * <p>The name of the assignment. </p>
   * @public
   */
  AssignmentName?: string | undefined;

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
 * @public
 */
export interface DeleteIdentityPropagationConfigRequest {
  /**
   * <p>The ID of the Amazon Web Services account that you want to delete an identity propagation configuration from.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The name of the Amazon Web Services service that you want to delete the associated access scopes and authorized targets from.</p>
   * @public
   */
  Service: ServiceType | undefined;
}

/**
 * @public
 */
export interface DeleteIdentityPropagationConfigResponse {
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
 * @public
 */
export interface DeleteNamespaceRequest {
  /**
   * <p>The ID for the Amazon Web Services account that you want to delete the Amazon QuickSight namespace from.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The namespace that you want to delete.</p>
   * @public
   */
  Namespace: string | undefined;
}

/**
 * @public
 */
export interface DeleteNamespaceResponse {
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
 * @public
 */
export interface DeleteRefreshScheduleRequest {
  /**
   * <p>The ID of the dataset.</p>
   * @public
   */
  DataSetId: string | undefined;

  /**
   * <p>The Amazon Web Services account ID.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID of the refresh schedule.</p>
   * @public
   */
  ScheduleId: string | undefined;
}

/**
 * @public
 */
export interface DeleteRefreshScheduleResponse {
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

  /**
   * <p>The ID of the refresh schedule.</p>
   * @public
   */
  ScheduleId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the refresh schedule.</p>
   * @public
   */
  Arn?: string | undefined;
}

/**
 * @public
 */
export interface DeleteRoleCustomPermissionRequest {
  /**
   * <p>The role that you want to remove permissions from.</p>
   * @public
   */
  Role: Role | undefined;

  /**
   * <p>The ID for the Amazon Web Services account that the group is in. Currently, you use the ID for the
   *             Amazon Web Services account that contains your Amazon QuickSight account.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The namespace that includes the role.</p>
   * @public
   */
  Namespace: string | undefined;
}

/**
 * @public
 */
export interface DeleteRoleCustomPermissionResponse {
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
 * @public
 */
export interface DeleteRoleMembershipRequest {
  /**
   * <p>The name of the group.</p>
   * @public
   */
  MemberName: string | undefined;

  /**
   * <p>The role that you want to remove permissions from.</p>
   * @public
   */
  Role: Role | undefined;

  /**
   * <p>The ID for the Amazon Web Services account that you want to create a group in. The Amazon Web Services account ID that you provide must be the same Amazon Web Services account that contains your Amazon QuickSight account.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The namespace that contains the role.</p>
   * @public
   */
  Namespace: string | undefined;
}

/**
 * @public
 */
export interface DeleteRoleMembershipResponse {
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
 * @public
 */
export interface DeleteTemplateRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the template that you're deleting.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>An ID for the template you want to delete.</p>
   * @public
   */
  TemplateId: string | undefined;

  /**
   * <p>Specifies the version of the template that you want to delete.
   * 			If you don't provide a version number, <code>DeleteTemplate</code> deletes all versions of the template.
   * 	 </p>
   * @public
   */
  VersionNumber?: number | undefined;
}

/**
 * @public
 */
export interface DeleteTemplateResponse {
  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   * @public
   */
  RequestId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>An ID for the template.</p>
   * @public
   */
  TemplateId?: string | undefined;

  /**
   * <p>The HTTP status of the request.</p>
   * @public
   */
  Status?: number | undefined;
}

/**
 * @public
 */
export interface DeleteTemplateAliasRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the item to delete.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the template that the specified alias is for.</p>
   * @public
   */
  TemplateId: string | undefined;

  /**
   * <p>The name for the template alias. To delete a specific alias, you delete the version that the
   * 			alias points to. You can specify the alias name, or specify the latest version of the
   * 			template by providing the keyword <code>$LATEST</code> in the <code>AliasName</code>
   * 			parameter. </p>
   * @public
   */
  AliasName: string | undefined;
}

/**
 * @public
 */
export interface DeleteTemplateAliasResponse {
  /**
   * <p>The HTTP status of the request.</p>
   * @public
   */
  Status?: number | undefined;

  /**
   * <p>An ID for the template associated with the deletion.</p>
   * @public
   */
  TemplateId?: string | undefined;

  /**
   * <p>The name for the template alias.</p>
   * @public
   */
  AliasName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the template you want to delete.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   * @public
   */
  RequestId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteThemeRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the theme that you're deleting.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>An ID for the theme that you want to delete.</p>
   * @public
   */
  ThemeId: string | undefined;

  /**
   * <p>The version of the theme that you want to delete. </p>
   *          <p>
   *             <b>Note:</b> If you don't provide a version number, you're
   * 			using this call to <code>DeleteTheme</code> to delete all versions of the theme.</p>
   * @public
   */
  VersionNumber?: number | undefined;
}

/**
 * @public
 */
export interface DeleteThemeResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   * @public
   */
  Arn?: string | undefined;

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

  /**
   * <p>An ID for the theme.</p>
   * @public
   */
  ThemeId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteThemeAliasRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the theme alias to delete.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the theme that the specified alias is for.</p>
   * @public
   */
  ThemeId: string | undefined;

  /**
   * <p>The unique name for the theme alias to delete.</p>
   * @public
   */
  AliasName: string | undefined;
}

/**
 * @public
 */
export interface DeleteThemeAliasResponse {
  /**
   * <p>The name for the theme alias.</p>
   * @public
   */
  AliasName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the theme resource using the deleted alias.</p>
   * @public
   */
  Arn?: string | undefined;

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

  /**
   * <p>An ID for the theme associated with the deletion.</p>
   * @public
   */
  ThemeId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteTopicRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the topic that you want to
   *          delete.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID of the topic that you want to delete. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
   * @public
   */
  TopicId: string | undefined;
}

/**
 * @public
 */
export interface DeleteTopicResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the topic.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The ID of the topic that you want to delete. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
   * @public
   */
  TopicId?: string | undefined;

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
 * @public
 */
export interface DeleteTopicRefreshScheduleRequest {
  /**
   * <p>The Amazon Web Services account ID.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID of the topic that you want to modify. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
   * @public
   */
  TopicId: string | undefined;

  /**
   * <p>The ID of the dataset.</p>
   * @public
   */
  DatasetId: string | undefined;
}

/**
 * @public
 */
export interface DeleteTopicRefreshScheduleResponse {
  /**
   * <p>The ID of the topic that you want to modify. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
   * @public
   */
  TopicId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the topic.</p>
   * @public
   */
  TopicArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the dataset.</p>
   * @public
   */
  DatasetArn?: string | undefined;

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
 * @public
 */
export interface DeleteUserRequest {
  /**
   * <p>The name of the user that you want to delete.</p>
   * @public
   */
  UserName: string | undefined;

  /**
   * <p>The ID for the Amazon Web Services account that the user is in. Currently, you use the ID for the
   * 			Amazon Web Services account that contains your Amazon QuickSight account.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The namespace. Currently, you should set this to <code>default</code>.</p>
   * @public
   */
  Namespace: string | undefined;
}

/**
 * @public
 */
export interface DeleteUserResponse {
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
 * <p></p>
 * @public
 */
export interface DeleteUserByPrincipalIdRequest {
  /**
   * <p>The principal ID of the user.</p>
   * @public
   */
  PrincipalId: string | undefined;

  /**
   * <p>The ID for the Amazon Web Services account that the user is in. Currently, you use the ID for the
   * 			Amazon Web Services account that contains your Amazon QuickSight account.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The namespace. Currently, you should set this to <code>default</code>.</p>
   * @public
   */
  Namespace: string | undefined;
}

/**
 * @public
 */
export interface DeleteUserByPrincipalIdResponse {
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
 * @public
 */
export interface DeleteUserCustomPermissionRequest {
  /**
   * <p>The username of the user that you want to remove custom permissions from.</p>
   * @public
   */
  UserName: string | undefined;

  /**
   * <p>The ID of the Amazon Web Services account that contains the custom permission configuration that you want to delete.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The namespace that the user belongs to.</p>
   * @public
   */
  Namespace: string | undefined;
}

/**
 * @public
 */
export interface DeleteUserCustomPermissionResponse {
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
 * @public
 */
export interface DeleteVPCConnectionRequest {
  /**
   * <p>The Amazon Web Services account ID of the account where you want to delete a VPC
   * 			connection.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID of the VPC connection that you're creating. This ID is a unique identifier for each Amazon Web Services Region in an
   * 				Amazon Web Services account.</p>
   * @public
   */
  VPCConnectionId: string | undefined;
}

/**
 * @public
 */
export interface DeleteVPCConnectionResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the deleted VPC connection.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The ID of the VPC connection that
   * 			you're creating. This ID is a unique identifier for each Amazon Web Services Region in an
   * 				Amazon Web Services account.</p>
   * @public
   */
  VPCConnectionId?: string | undefined;

  /**
   * <p>The deletion status of the VPC connection.</p>
   * @public
   */
  DeletionStatus?: VPCConnectionResourceStatus | undefined;

  /**
   * <p>The availability status of the VPC connection.</p>
   * @public
   */
  AvailabilityStatus?: VPCConnectionAvailabilityStatus | undefined;

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
 * @public
 */
export interface DescribeAccountCustomizationRequest {
  /**
   * <p>The ID for the Amazon Web Services account that you want to describe Amazon QuickSight customizations
   *             for.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The Amazon QuickSight namespace that you want to describe Amazon QuickSight customizations
   *             for.</p>
   * @public
   */
  Namespace?: string | undefined;

  /**
   * <p>The <code>Resolved</code> flag works with the other parameters to determine which view
   *             of Amazon QuickSight customizations is returned. You can add this flag to your command to use
   *             the same view that Amazon QuickSight uses to identify which customizations to apply to the
   *             console. Omit this flag, or set it to <code>no-resolved</code>, to reveal customizations
   *             that are configured at different levels. </p>
   * @public
   */
  Resolved?: boolean | undefined;
}

/**
 * @public
 */
export interface DescribeAccountCustomizationResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the customization that's associated with this Amazon Web Services account.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The ID for the Amazon Web Services account that you're describing.</p>
   * @public
   */
  AwsAccountId?: string | undefined;

  /**
   * <p>The Amazon QuickSight namespace that you're describing. </p>
   * @public
   */
  Namespace?: string | undefined;

  /**
   * <p>The Amazon QuickSight customizations that exist in the current Amazon Web Services Region. </p>
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
 * @public
 */
export interface DescribeAccountSettingsRequest {
  /**
   * <p>The ID for the Amazon Web Services account that contains the settings that you want to list.</p>
   * @public
   */
  AwsAccountId: string | undefined;
}

/**
 * @public
 */
export interface DescribeAccountSettingsResponse {
  /**
   * <p>The Amazon QuickSight settings for this Amazon Web Services account. This information
   *             includes the edition of Amazon Amazon QuickSight that you subscribed to (Standard or
   *             Enterprise) and the notification email for the Amazon QuickSight subscription. </p>
   *          <p>In the QuickSight console, the Amazon QuickSight subscription is sometimes referred to
   *             as a QuickSight "account" even though it's technically not an account by
   *             itself. Instead, it's a subscription to the Amazon QuickSight service for your
   *                 Amazon Web Services account. The edition that you subscribe to applies to Amazon QuickSight in every Amazon Web Services Region where you use it.</p>
   * @public
   */
  AccountSettings?: AccountSettings | undefined;

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
 * @public
 */
export interface DescribeAccountSubscriptionRequest {
  /**
   * <p>The Amazon Web Services account ID associated with your Amazon QuickSight account.</p>
   * @public
   */
  AwsAccountId: string | undefined;
}

/**
 * @public
 */
export interface DescribeAccountSubscriptionResponse {
  /**
   * <p>A structure that contains the following elements:</p>
   *          <ul>
   *             <li>
   *                <p>Your Amazon QuickSight account name.</p>
   *             </li>
   *             <li>
   *                <p>The edition of Amazon QuickSight that your account is using.</p>
   *             </li>
   *             <li>
   *                <p>The notification email address that is associated with the Amazon QuickSight
   *                     account.
   *             </p>
   *             </li>
   *             <li>
   *                <p>The authentication type of the Amazon QuickSight account.</p>
   *             </li>
   *             <li>
   *                <p>The status of the Amazon QuickSight account's subscription.</p>
   *             </li>
   *          </ul>
   * @public
   */
  AccountInfo?: AccountInfo | undefined;

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
 * @public
 */
export interface DescribeAnalysisRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the analysis. You must be using the
   *             Amazon Web Services account that the analysis is in.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID of the analysis that you're describing. The ID is part of the URL of the
   *             analysis.</p>
   * @public
   */
  AnalysisId: string | undefined;
}

/**
 * @public
 */
export interface DescribeAnalysisResponse {
  /**
   * <p>A metadata structure that contains summary information for the analysis that you're
   *             describing.</p>
   * @public
   */
  Analysis?: Analysis | undefined;

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
 * @public
 */
export interface DescribeAnalysisDefinitionRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the analysis. You must be using the
   *             Amazon Web Services account that the analysis is in.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID of the analysis that you're describing. The ID is part of the URL of the
   *             analysis.</p>
   * @public
   */
  AnalysisId: string | undefined;
}

/**
 * @public
 */
export interface DescribeAnalysisDefinitionResponse {
  /**
   * <p>The ID of the analysis described.</p>
   * @public
   */
  AnalysisId?: string | undefined;

  /**
   * <p>The descriptive name of the analysis.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>Errors associated with the analysis.</p>
   * @public
   */
  Errors?: AnalysisError[] | undefined;

  /**
   * <p>Status associated with the analysis.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CREATION_IN_PROGRESS</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATION_SUCCESSFUL</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATION_FAILED</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UPDATE_IN_PROGRESS</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UPDATE_SUCCESSFUL</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UPDATE_FAILED</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETED</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  ResourceStatus?: ResourceStatus | undefined;

  /**
   * <p>The ARN of the theme of the analysis.</p>
   * @public
   */
  ThemeArn?: string | undefined;

  /**
   * <p>The definition of an analysis.</p>
   *          <p>A definition is the data model of all features in a Dashboard, Template, or Analysis.</p>
   * @public
   */
  Definition?: AnalysisDefinition | undefined;

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
 * @public
 */
export interface DescribeAnalysisPermissionsRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the analysis whose permissions you're
   *             describing. You must be using the Amazon Web Services account that the analysis is in.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID of the analysis whose permissions you're describing. The ID is part of the
   *             analysis URL.</p>
   * @public
   */
  AnalysisId: string | undefined;
}

/**
 * @public
 */
export interface DescribeAnalysisPermissionsResponse {
  /**
   * <p>The ID of the analysis whose permissions you're describing.</p>
   * @public
   */
  AnalysisId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the analysis whose permissions you're
   *             describing.</p>
   * @public
   */
  AnalysisArn?: string | undefined;

  /**
   * <p>A structure that describes the principals and the resource-level permissions on an
   *             analysis.</p>
   * @public
   */
  Permissions?: ResourcePermission[] | undefined;

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
 * @public
 */
export interface DescribeAssetBundleExportJobRequest {
  /**
   * <p>The ID of the Amazon Web Services account the export job is executed in. </p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID of the job that you want described. The job ID is set when you start a new job with a <code>StartAssetBundleExportJob</code> API call.</p>
   * @public
   */
  AssetBundleExportJobId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const IncludeFolderMembers = {
  NONE: "NONE",
  ONE_LEVEL: "ONE_LEVEL",
  RECURSE: "RECURSE",
} as const;

/**
 * @public
 */
export type IncludeFolderMembers = (typeof IncludeFolderMembers)[keyof typeof IncludeFolderMembers];

/**
 * @public
 */
export interface DescribeAssetBundleExportJobResponse {
  /**
   * <p>Indicates the status of a job through its queuing and execution.</p>
   *          <p>Poll this <code>DescribeAssetBundleExportApi</code> until <code>JobStatus</code> is either <code>SUCCESSFUL</code> or <code>FAILED</code>.</p>
   * @public
   */
  JobStatus?: AssetBundleExportJobStatus | undefined;

  /**
   * <p>The URL to download the exported asset bundle data from.</p>
   *          <p>This URL is available only after the job has succeeded. This URL is valid for 5 minutes after issuance. Call <code>DescribeAssetBundleExportJob</code> again for a fresh URL if needed.</p>
   *          <p>The downloaded asset bundle is a zip file named <code>assetbundle-\{jobId\}.qs</code>. The file has a <code>.qs</code> extension.</p>
   *          <p>This URL can't be used in a <code>StartAssetBundleImportJob</code> API call and should only be used for download purposes.</p>
   * @public
   */
  DownloadUrl?: string | undefined;

  /**
   * <p>An array of error records that describes any failures that occurred during the export job processing.</p>
   *          <p>Error records accumulate while the job runs. The complete set of error records is available after the job has completed and failed.</p>
   * @public
   */
  Errors?: AssetBundleExportJobError[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the export job.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The time that the export job was created.</p>
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * <p>The ID of the job. The job ID is set when you start a new job with a <code>StartAssetBundleExportJob</code> API call.</p>
   * @public
   */
  AssetBundleExportJobId?: string | undefined;

  /**
   * <p>The ID of the Amazon Web Services account that the export job was executed in. </p>
   * @public
   */
  AwsAccountId?: string | undefined;

  /**
   * <p>A list of resource ARNs that exported with the job.</p>
   * @public
   */
  ResourceArns?: string[] | undefined;

  /**
   * <p>The include dependencies flag.</p>
   * @public
   */
  IncludeAllDependencies?: boolean | undefined;

  /**
   * <p>The format of the exported asset bundle. A <code>QUICKSIGHT_JSON</code> formatted file can be used to make a <code>StartAssetBundleImportJob</code> API call. A <code>CLOUDFORMATION_JSON</code> formatted file can be used in the CloudFormation console and with the CloudFormation APIs.</p>
   * @public
   */
  ExportFormat?: AssetBundleExportFormat | undefined;

  /**
   * <p>The CloudFormation override property configuration for the export job.</p>
   * @public
   */
  CloudFormationOverridePropertyConfiguration?: AssetBundleCloudFormationOverridePropertyConfiguration | undefined;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   * @public
   */
  RequestId?: string | undefined;

  /**
   * <p>The HTTP status of the response.</p>
   * @public
   */
  Status?: number | undefined;

  /**
   * <p>The include permissions flag.</p>
   * @public
   */
  IncludePermissions?: boolean | undefined;

  /**
   * <p>The include tags flag.</p>
   * @public
   */
  IncludeTags?: boolean | undefined;

  /**
   * <p>The validation strategy that is used to export the analysis or dashboard.</p>
   * @public
   */
  ValidationStrategy?: AssetBundleExportJobValidationStrategy | undefined;

  /**
   * <p>An array of warning records that describe the analysis or dashboard that is exported. This array includes UI errors that can be skipped during the validation process.</p>
   *          <p>This property only appears if <code>StrictModeForAllResources</code> in <code>ValidationStrategy</code> is set to <code>FALSE</code>.</p>
   * @public
   */
  Warnings?: AssetBundleExportJobWarning[] | undefined;

  /**
   * <p>The include folder memberships flag.</p>
   * @public
   */
  IncludeFolderMemberships?: boolean | undefined;

  /**
   * <p>A setting that determines whether folder members are included.</p>
   * @public
   */
  IncludeFolderMembers?: IncludeFolderMembers | undefined;
}

/**
 * @public
 */
export interface DescribeAssetBundleImportJobRequest {
  /**
   * <p>The ID of the Amazon Web Services account the import job was executed in. </p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID of the job. The job ID is set when you start a new job with a <code>StartAssetBundleImportJob</code> API call.</p>
   * @public
   */
  AssetBundleImportJobId: string | undefined;
}

/**
 * @public
 */
export interface DescribeAssetBundleImportJobResponse {
  /**
   * <p>Indicates the status of a job through its queuing and execution.</p>
   *          <p>Poll the <code>DescribeAssetBundleImport</code> API until <code>JobStatus</code> returns one of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>SUCCESSFUL</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED_ROLLBACK_COMPLETED</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED_ROLLBACK_ERROR</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  JobStatus?: AssetBundleImportJobStatus | undefined;

  /**
   * <p>An array of error records that describes any failures that occurred during the export job processing.</p>
   *          <p>Error records accumulate while the job is still running. The complete set of error records is available after the job has completed and failed.</p>
   * @public
   */
  Errors?: AssetBundleImportJobError[] | undefined;

  /**
   * <p>An array of error records that describes any failures that occurred while an import job was attempting a rollback.</p>
   *          <p>Error records accumulate while the job is still running. The complete set of error records is available after the job has completed and failed.</p>
   * @public
   */
  RollbackErrors?: AssetBundleImportJobError[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the import job.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The time that the import job was created.</p>
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * <p>The ID of the job. The job ID is set when you start a new job with a <code>StartAssetBundleImportJob</code> API call.</p>
   * @public
   */
  AssetBundleImportJobId?: string | undefined;

  /**
   * <p>The ID of the Amazon Web Services account the import job was executed in. </p>
   * @public
   */
  AwsAccountId?: string | undefined;

  /**
   * <p>The source of the asset bundle zip file that contains the data that is imported by the job.</p>
   * @public
   */
  AssetBundleImportSource?: AssetBundleImportSourceDescription | undefined;

  /**
   * <p>Optional overrides that are applied to the resource configuration before import.</p>
   * @public
   */
  OverrideParameters?: AssetBundleImportJobOverrideParameters | undefined;

  /**
   * <p>The failure action for the import job.</p>
   * @public
   */
  FailureAction?: AssetBundleImportFailureAction | undefined;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   * @public
   */
  RequestId?: string | undefined;

  /**
   * <p>The HTTP status of the response.</p>
   * @public
   */
  Status?: number | undefined;

  /**
   * <p>Optional permission overrides that are applied to the resource configuration before import.</p>
   * @public
   */
  OverridePermissions?: AssetBundleImportJobOverridePermissions | undefined;

  /**
   * <p>Optional tag overrides that are applied to the resource configuration before import.</p>
   * @public
   */
  OverrideTags?: AssetBundleImportJobOverrideTags | undefined;

  /**
   * <p>An optional validation strategy override for all analyses and dashboards to be applied to the resource configuration before import.</p>
   * @public
   */
  OverrideValidationStrategy?: AssetBundleImportJobOverrideValidationStrategy | undefined;

  /**
   * <p>An array of warning records that describe all permitted errors that are encountered during the import job.</p>
   * @public
   */
  Warnings?: AssetBundleImportJobWarning[] | undefined;
}

/**
 * @public
 */
export interface DescribeBrandRequest {
  /**
   * <p>The ID of the Amazon Web Services account that owns the brand.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID of the Amazon QuickSight brand.</p>
   * @public
   */
  BrandId: string | undefined;

  /**
   * <p>The ID of the specific version. The default value is the latest version.</p>
   * @public
   */
  VersionId?: string | undefined;
}

/**
 * @public
 */
export interface DescribeBrandResponse {
  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   * @public
   */
  RequestId?: string | undefined;

  /**
   * <p>The details of the brand.</p>
   * @public
   */
  BrandDetail?: BrandDetail | undefined;

  /**
   * <p>The definition of the brand.</p>
   * @public
   */
  BrandDefinition?: BrandDefinition | undefined;
}

/**
 * @public
 */
export interface DescribeBrandAssignmentRequest {
  /**
   * <p>The ID of the Amazon Web Services account that owns the brand assignment.</p>
   * @public
   */
  AwsAccountId: string | undefined;
}

/**
 * @public
 */
export interface DescribeBrandAssignmentResponse {
  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   * @public
   */
  RequestId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the brand.</p>
   * @public
   */
  BrandArn?: string | undefined;
}

/**
 * @public
 */
export interface DescribeBrandPublishedVersionRequest {
  /**
   * <p>The ID of the Amazon Web Services account that owns the brand.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID of the Amazon QuickSight brand.</p>
   * @public
   */
  BrandId: string | undefined;
}

/**
 * @public
 */
export interface DescribeBrandPublishedVersionResponse {
  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   * @public
   */
  RequestId?: string | undefined;

  /**
   * <p>The details of the brand.</p>
   * @public
   */
  BrandDetail?: BrandDetail | undefined;

  /**
   * <p>The definition of the brand.</p>
   * @public
   */
  BrandDefinition?: BrandDefinition | undefined;
}

/**
 * @public
 */
export interface DescribeCustomPermissionsRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the custom permissions profile that you want described.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The name of the custom permissions profile to describe.</p>
   * @public
   */
  CustomPermissionsName: string | undefined;
}

/**
 * @public
 */
export interface DescribeCustomPermissionsResponse {
  /**
   * <p>The HTTP status of the request.</p>
   * @public
   */
  Status?: number | undefined;

  /**
   * <p>The custom permissions profile.</p>
   * @public
   */
  CustomPermissions?: CustomPermissions | undefined;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   * @public
   */
  RequestId?: string | undefined;
}

/**
 * @public
 */
export interface DescribeDashboardRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the dashboard that you're
   *             describing.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the dashboard.</p>
   * @public
   */
  DashboardId: string | undefined;

  /**
   * <p>The version number for the dashboard. If a version number isn't passed, the
   *             latest published dashboard version is described. </p>
   * @public
   */
  VersionNumber?: number | undefined;

  /**
   * <p>The alias name.</p>
   * @public
   */
  AliasName?: string | undefined;
}

/**
 * @public
 */
export interface DescribeDashboardResponse {
  /**
   * <p>Information about the dashboard.</p>
   * @public
   */
  Dashboard?: Dashboard | undefined;

  /**
   * <p>The HTTP status of this request.</p>
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
 * @public
 */
export interface DescribeDashboardDefinitionRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the dashboard that you're
   *             describing.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the dashboard.</p>
   * @public
   */
  DashboardId: string | undefined;

  /**
   * <p>The version number for the dashboard. If a version number isn't passed, the
   *             latest published dashboard version is described. </p>
   * @public
   */
  VersionNumber?: number | undefined;

  /**
   * <p>The alias name.</p>
   * @public
   */
  AliasName?: string | undefined;
}

/**
 * @public
 */
export interface DescribeDashboardDefinitionResponse {
  /**
   * <p>The ID of the dashboard described.</p>
   * @public
   */
  DashboardId?: string | undefined;

  /**
   * <p>Errors associated with this dashboard version.</p>
   * @public
   */
  Errors?: DashboardError[] | undefined;

  /**
   * <p>The display name of the dashboard.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>Status associated with the dashboard version.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CREATION_IN_PROGRESS</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATION_SUCCESSFUL</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATION_FAILED</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UPDATE_IN_PROGRESS</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UPDATE_SUCCESSFUL</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UPDATE_FAILED</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETED</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  ResourceStatus?: ResourceStatus | undefined;

  /**
   * <p>The ARN of the theme of the dashboard.</p>
   * @public
   */
  ThemeArn?: string | undefined;

  /**
   * <p>The definition of a dashboard.</p>
   *          <p>A definition is the data model of all features in a Dashboard, Template, or Analysis.</p>
   * @public
   */
  Definition?: DashboardVersionDefinition | undefined;

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

  /**
   * <p>Options for publishing the dashboard:</p>
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
}

/**
 * @public
 */
export interface DescribeDashboardPermissionsRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the dashboard that you're describing
   *             permissions for.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the dashboard, also added to the IAM policy.</p>
   * @public
   */
  DashboardId: string | undefined;
}

/**
 * @public
 */
export interface DescribeDashboardPermissionsResponse {
  /**
   * <p>The ID for the dashboard.</p>
   * @public
   */
  DashboardId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the dashboard.</p>
   * @public
   */
  DashboardArn?: string | undefined;

  /**
   * <p>A structure that contains the permissions for the dashboard.</p>
   * @public
   */
  Permissions?: ResourcePermission[] | undefined;

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

  /**
   * <p>A structure that contains the configuration of a shareable link that grants access to
   *             the dashboard. Your users can use the link to view and interact with the dashboard, if
   *             the dashboard has been shared with them. For more information about sharing dashboards,
   *             see <a href="https://docs.aws.amazon.com/quicksight/latest/user/sharing-a-dashboard.html">Sharing Dashboards</a>.</p>
   * @public
   */
  LinkSharingConfiguration?: LinkSharingConfiguration | undefined;
}

/**
 * @public
 */
export interface DescribeDashboardSnapshotJobRequest {
  /**
   * <p>The ID of the Amazon Web Services account that the dashboard snapshot job is executed in.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID of the dashboard that you have started a snapshot job for.</p>
   * @public
   */
  DashboardId: string | undefined;

  /**
   * <p>The ID of the job to be described. The job ID is set when you start a new job with a <code>StartDashboardSnapshotJob</code> API call.</p>
   * @public
   */
  SnapshotJobId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const SnapshotJobStatus = {
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  QUEUED: "QUEUED",
  RUNNING: "RUNNING",
} as const;

/**
 * @public
 */
export type SnapshotJobStatus = (typeof SnapshotJobStatus)[keyof typeof SnapshotJobStatus];

/**
 * <p>A structure that contains information on the Amazon S3 destinations of the generated snapshot.</p>
 * @public
 */
export interface SnapshotDestinationConfiguration {
  /**
   * <p>
   *             A list of <code>SnapshotS3DestinationConfiguration</code> objects that contain Amazon S3 destination configurations. This structure can hold a maximum of 1 <code>S3DestinationConfiguration</code>.
   *         </p>
   * @public
   */
  S3Destinations?: SnapshotS3DestinationConfiguration[] | undefined;
}

/**
 * <p>A structure that contains the information on the snapshot files.</p>
 * @public
 */
export interface SnapshotFileGroup {
  /**
   * <p>A list of <code>SnapshotFile</code> objects that contain the information on the snapshot files that need to be generated. This structure can hold 1 configuration at a time.</p>
   * @public
   */
  Files?: SnapshotFile[] | undefined;
}

/**
 * <p>Describes the configuration of the dashboard snapshot.</p>
 * @public
 */
export interface SnapshotConfiguration {
  /**
   * <p>A list of <code>SnapshotJobResultFileGroup</code> objects that contain information about the snapshot that is generated. This list can hold a maximum of 6 <code>FileGroup</code> configurations.</p>
   * @public
   */
  FileGroups: SnapshotFileGroup[] | undefined;

  /**
   * <p>A structure that contains information on the Amazon S3 bucket that the generated snapshot is stored in.</p>
   * @public
   */
  DestinationConfiguration?: SnapshotDestinationConfiguration | undefined;

  /**
   * <p>A list of Amazon QuickSight parameters and the list's override values.</p>
   * @public
   */
  Parameters?: _Parameters | undefined;
}

/**
 * <p>Use this structure to redact sensitive information that you provide about an anonymous user from the snapshot.</p>
 * @public
 */
export interface SnapshotAnonymousUserRedacted {
  /**
   * <p>The tag keys for the <code>RowLevelPermissionTags</code>.</p>
   * @public
   */
  RowLevelPermissionTagKeys?: string[] | undefined;
}

/**
 * <p>A structure that contains information about the users that the dashboard snapshot is generated for. Sensitive user information is excluded.
 *         </p>
 * @public
 */
export interface SnapshotUserConfigurationRedacted {
  /**
   * <p>
   *             An array of records that describe anonymous users that the dashboard snapshot is generated for. Sensitive user information is excluded.
   *         </p>
   * @public
   */
  AnonymousUsers?: SnapshotAnonymousUserRedacted[] | undefined;
}

/**
 * @public
 */
export interface DescribeDashboardSnapshotJobResponse {
  /**
   * <p>
   *             The ID of the Amazon Web Services account that the dashboard snapshot job is executed in.
   *         </p>
   * @public
   */
  AwsAccountId?: string | undefined;

  /**
   * <p>The ID of the dashboard that you have started a snapshot job for.</p>
   * @public
   */
  DashboardId?: string | undefined;

  /**
   * <p>The ID of the job to be described. The job ID is set when you start a new job with a <code>StartDashboardSnapshotJob</code> API call.</p>
   * @public
   */
  SnapshotJobId?: string | undefined;

  /**
   * <p>The user configuration for the snapshot job. This information is provided when you make a <code>StartDashboardSnapshotJob</code> API call.</p>
   * @public
   */
  UserConfiguration?: SnapshotUserConfigurationRedacted | undefined;

  /**
   * <p>The snapshot configuration of the job. This information is provided when you make a <code>StartDashboardSnapshotJob</code> API call.</p>
   * @public
   */
  SnapshotConfiguration?: SnapshotConfiguration | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the snapshot job. The job ARN is generated when you start a new job with a <code>StartDashboardSnapshotJob</code> API call.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>Indicates the status of a job. The status updates as the job executes. This shows one of the following values.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>COMPLETED</code> - The job was completed successfully.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED</code> - The job failed to execute.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>QUEUED</code> - The job is queued and hasn't started yet.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RUNNING</code> - The job is still running.</p>
   *             </li>
   *          </ul>
   * @public
   */
  JobStatus?: SnapshotJobStatus | undefined;

  /**
   * <p>
   *             The time that the snapshot job was created.
   *         </p>
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * <p>
   *             The time that the snapshot job status was last updated.
   *         </p>
   * @public
   */
  LastUpdatedTime?: Date | undefined;

  /**
   * <p>
   *             The Amazon Web Services request ID for this operation.
   *         </p>
   * @public
   */
  RequestId?: string | undefined;

  /**
   * <p>The HTTP status of the request</p>
   * @public
   */
  Status?: number | undefined;
}

/**
 * @public
 */
export interface DescribeDashboardSnapshotJobResultRequest {
  /**
   * <p>The ID of the Amazon Web Services account that the dashboard snapshot job is executed in.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID of the dashboard that you have started a snapshot job for.</p>
   * @public
   */
  DashboardId: string | undefined;

  /**
   * <p>The ID of the job to be described. The job ID is set when you start a new job with a <code>StartDashboardSnapshotJob</code> API call.</p>
   * @public
   */
  SnapshotJobId: string | undefined;
}

/**
 * <p>An object that contains information on the error that caused the snapshot job to fail.</p>
 * @public
 */
export interface SnapshotJobErrorInfo {
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
 * <p>An object that provides information on the result of a snapshot job. This object provides information about the job, the job status, and the location of the generated file.</p>
 * @public
 */
export interface SnapshotJobResult {
  /**
   * <p> A list of <code>AnonymousUserSnapshotJobResult</code> objects that contain information on anonymous users and their user configurations. This data provided by you when you make a <code>StartDashboardSnapshotJob</code> API call.</p>
   * @public
   */
  AnonymousUsers?: AnonymousUserSnapshotJobResult[] | undefined;
}

/**
 * @public
 */
export interface DescribeDashboardSnapshotJobResultResponse {
  /**
   * <p>The Amazon Resource Name (ARN) for the snapshot job. The job ARN is generated when you start a new job with a <code>StartDashboardSnapshotJob</code> API call.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>Indicates the status of a job after it has reached a terminal state. A finished snapshot job will retuen a <code>COMPLETED</code> or <code>FAILED</code> status.</p>
   * @public
   */
  JobStatus?: SnapshotJobStatus | undefined;

  /**
   * <p>The time that a snapshot job was created.</p>
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * <p>The time that a snapshot job status was last updated.</p>
   * @public
   */
  LastUpdatedTime?: Date | undefined;

  /**
   * <p>The result of the snapshot job. Jobs that have successfully completed will return the S3Uri where they are located. Jobs that have failedwill return information on the error that caused the job to fail.</p>
   * @public
   */
  Result?: SnapshotJobResult | undefined;

  /**
   * <p>Displays information for the error that caused a job to fail.</p>
   * @public
   */
  ErrorInfo?: SnapshotJobErrorInfo | undefined;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   * @public
   */
  RequestId?: string | undefined;

  /**
   * <p>The HTTP status of the request</p>
   * @public
   */
  Status?: number | undefined;
}

/**
 * @public
 */
export interface DescribeDataSetRequest {
  /**
   * <p>The Amazon Web Services account ID.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the dataset that you want to create. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
   * @public
   */
  DataSetId: string | undefined;
}

/**
 * @public
 */
export interface DescribeDataSetResponse {
  /**
   * <p>Information on the dataset.</p>
   * @public
   */
  DataSet?: DataSet | undefined;

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
 * @public
 */
export interface DescribeDataSetPermissionsRequest {
  /**
   * <p>The Amazon Web Services account ID.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the dataset that you want to create. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
   * @public
   */
  DataSetId: string | undefined;
}

/**
 * @public
 */
export interface DescribeDataSetPermissionsResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the dataset.</p>
   * @public
   */
  DataSetArn?: string | undefined;

  /**
   * <p>The ID for the dataset that you want to create. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
   * @public
   */
  DataSetId?: string | undefined;

  /**
   * <p>A list of resource permissions on the dataset.</p>
   * @public
   */
  Permissions?: ResourcePermission[] | undefined;

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
 * @public
 */
export interface DescribeDataSetRefreshPropertiesRequest {
  /**
   * <p>The Amazon Web Services account ID.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID of the dataset.</p>
   * @public
   */
  DataSetId: string | undefined;
}

/**
 * @public
 */
export interface DescribeDataSetRefreshPropertiesResponse {
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

  /**
   * <p>The dataset refresh properties.</p>
   * @public
   */
  DataSetRefreshProperties?: DataSetRefreshProperties | undefined;
}

/**
 * @public
 */
export interface DescribeDataSourceRequest {
  /**
   * <p>The Amazon Web Services account ID.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID of the data source. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
   * @public
   */
  DataSourceId: string | undefined;
}

/**
 * @public
 */
export interface DescribeDataSourceResponse {
  /**
   * <p>The information on the data source.</p>
   * @public
   */
  DataSource?: DataSource | undefined;

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
 * @public
 */
export interface DescribeDataSourcePermissionsRequest {
  /**
   * <p>The Amazon Web Services account ID.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID of the data source. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
   * @public
   */
  DataSourceId: string | undefined;
}

/**
 * @public
 */
export interface DescribeDataSourcePermissionsResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the data source.</p>
   * @public
   */
  DataSourceArn?: string | undefined;

  /**
   * <p>The ID of the data source. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
   * @public
   */
  DataSourceId?: string | undefined;

  /**
   * <p>A list of resource permissions on the data source.</p>
   * @public
   */
  Permissions?: ResourcePermission[] | undefined;

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
 * @public
 */
export interface DescribeFolderRequest {
  /**
   * <p>The ID for the Amazon Web Services account that contains the folder.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID of the folder.</p>
   * @public
   */
  FolderId: string | undefined;
}

/**
 * <p>A folder in Amazon QuickSight.</p>
 * @public
 */
export interface Folder {
  /**
   * <p>The ID of the folder.</p>
   * @public
   */
  FolderId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the folder.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>A display name for the folder.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The type of folder it is.</p>
   * @public
   */
  FolderType?: FolderType | undefined;

  /**
   * <p>An array of ancestor ARN strings for the folder.</p>
   * @public
   */
  FolderPath?: string[] | undefined;

  /**
   * <p>The time that the folder was created.</p>
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * <p>The time that the folder was last updated.</p>
   * @public
   */
  LastUpdatedTime?: Date | undefined;

  /**
   * <p>The sharing scope of the folder.</p>
   * @public
   */
  SharingModel?: SharingModel | undefined;
}

/**
 * @public
 */
export interface DescribeFolderResponse {
  /**
   * <p>The HTTP status of the request.</p>
   * @public
   */
  Status?: number | undefined;

  /**
   * <p>Information about the folder.</p>
   * @public
   */
  Folder?: Folder | undefined;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   * @public
   */
  RequestId?: string | undefined;
}

/**
 * @public
 */
export interface DescribeFolderPermissionsRequest {
  /**
   * <p>The ID for the Amazon Web Services account that contains the folder.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID of the folder.</p>
   * @public
   */
  FolderId: string | undefined;

  /**
   * <p>The namespace of the folder whose permissions you want described.</p>
   * @public
   */
  Namespace?: string | undefined;

  /**
   * <p>The maximum number of results to be returned per request.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A pagination token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeFolderPermissionsResponse {
  /**
   * <p>The HTTP status of the request.</p>
   * @public
   */
  Status?: number | undefined;

  /**
   * <p>The ID of the folder.</p>
   * @public
   */
  FolderId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the folder.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>Information about the permissions on the folder.</p>
   * @public
   */
  Permissions?: ResourcePermission[] | undefined;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   * @public
   */
  RequestId?: string | undefined;

  /**
   * <p>The pagination token for the next set of results, or null if there are no more results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>The <code>NextToken</code> value isn't valid.</p>
 * @public
 */
export class InvalidNextTokenException extends __BaseException {
  readonly name: "InvalidNextTokenException" = "InvalidNextTokenException";
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
  constructor(opts: __ExceptionOptionType<InvalidNextTokenException, __BaseException>) {
    super({
      name: "InvalidNextTokenException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidNextTokenException.prototype);
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

/**
 * @public
 */
export interface DescribeFolderResolvedPermissionsRequest {
  /**
   * <p>The ID for the Amazon Web Services account that contains the folder.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID of the folder.</p>
   * @public
   */
  FolderId: string | undefined;

  /**
   * <p>The namespace of the folder whose permissions you want described.</p>
   * @public
   */
  Namespace?: string | undefined;

  /**
   * <p>The maximum number of results to be returned per request.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A pagination token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeFolderResolvedPermissionsResponse {
  /**
   * <p>The HTTP status of the request.</p>
   * @public
   */
  Status?: number | undefined;

  /**
   * <p>The ID of the folder.</p>
   * @public
   */
  FolderId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the folder.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>Information about the permissions for the folder.</p>
   * @public
   */
  Permissions?: ResourcePermission[] | undefined;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   * @public
   */
  RequestId?: string | undefined;

  /**
   * <p>A pagination token for the next set of results, or null if there are no more results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeGroupRequest {
  /**
   * <p>The name of the group that you want to describe.</p>
   * @public
   */
  GroupName: string | undefined;

  /**
   * <p>The ID for the Amazon Web Services account that the group is in. Currently, you use the ID for the
   * 			Amazon Web Services account that contains your Amazon QuickSight account.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The namespace of the group that you want described.</p>
   * @public
   */
  Namespace: string | undefined;
}

/**
 * @public
 */
export interface DescribeGroupResponse {
  /**
   * <p>The name of the group.</p>
   * @public
   */
  Group?: Group | undefined;

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
 * @public
 */
export interface DescribeGroupMembershipRequest {
  /**
   * <p>The user name of the user that you want to search for.</p>
   * @public
   */
  MemberName: string | undefined;

  /**
   * <p>The name of the group that you want to search.</p>
   * @public
   */
  GroupName: string | undefined;

  /**
   * <p>The ID for the Amazon Web Services account that the group is in. Currently, you use the ID for the
   *          Amazon Web Services account that contains your Amazon QuickSight account.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The namespace that includes the group you are searching within.</p>
   * @public
   */
  Namespace: string | undefined;
}

/**
 * @public
 */
export interface DescribeGroupMembershipResponse {
  /**
   * <p>A member of an Amazon QuickSight group. Currently, group members must be users. Groups
   *             can't be members of another group. .</p>
   * @public
   */
  GroupMember?: GroupMember | undefined;

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
 * @public
 */
export interface DescribeIAMPolicyAssignmentRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the assignment that you want to
   * 			describe.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The name of the assignment, also called a rule.</p>
   * @public
   */
  AssignmentName: string | undefined;

  /**
   * <p>The namespace that contains the assignment.</p>
   * @public
   */
  Namespace: string | undefined;
}

/**
 * <p>An Identity and Access Management (IAM) policy assignment.</p>
 * @public
 */
export interface IAMPolicyAssignment {
  /**
   * <p>The Amazon Web Services account ID.</p>
   * @public
   */
  AwsAccountId?: string | undefined;

  /**
   * <p>Assignment ID.</p>
   * @public
   */
  AssignmentId?: string | undefined;

  /**
   * <p>Assignment name.</p>
   * @public
   */
  AssignmentName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the IAM policy.</p>
   * @public
   */
  PolicyArn?: string | undefined;

  /**
   * <p>Identities.</p>
   * @public
   */
  Identities?: Record<string, string[]> | undefined;

  /**
   * <p>Assignment status.</p>
   * @public
   */
  AssignmentStatus?: AssignmentStatus | undefined;
}

/**
 * @public
 */
export interface DescribeIAMPolicyAssignmentResponse {
  /**
   * <p>Information describing the IAM policy assignment.</p>
   * @public
   */
  IAMPolicyAssignment?: IAMPolicyAssignment | undefined;

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
 * @public
 */
export interface DescribeIngestionRequest {
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
 * @enum
 */
export const IngestionErrorType = {
  ACCOUNT_CAPACITY_LIMIT_EXCEEDED: "ACCOUNT_CAPACITY_LIMIT_EXCEEDED",
  CONNECTION_FAILURE: "CONNECTION_FAILURE",
  CURSOR_NOT_ENABLED: "CURSOR_NOT_ENABLED",
  CUSTOMER_ERROR: "CUSTOMER_ERROR",
  DATA_SET_DELETED: "DATA_SET_DELETED",
  DATA_SET_NOT_SPICE: "DATA_SET_NOT_SPICE",
  DATA_SET_SIZE_LIMIT_EXCEEDED: "DATA_SET_SIZE_LIMIT_EXCEEDED",
  DATA_SOURCE_AUTH_FAILED: "DATA_SOURCE_AUTH_FAILED",
  DATA_SOURCE_CONNECTION_FAILED: "DATA_SOURCE_CONNECTION_FAILED",
  DATA_SOURCE_NOT_FOUND: "DATA_SOURCE_NOT_FOUND",
  DATA_TOLERANCE_EXCEPTION: "DATA_TOLERANCE_EXCEPTION",
  DUPLICATE_COLUMN_NAMES_FOUND: "DUPLICATE_COLUMN_NAMES_FOUND",
  ELASTICSEARCH_CURSOR_NOT_ENABLED: "ELASTICSEARCH_CURSOR_NOT_ENABLED",
  FAILURE_TO_ASSUME_ROLE: "FAILURE_TO_ASSUME_ROLE",
  FAILURE_TO_PROCESS_JSON_FILE: "FAILURE_TO_PROCESS_JSON_FILE",
  IAM_ROLE_NOT_AVAILABLE: "IAM_ROLE_NOT_AVAILABLE",
  INGESTION_CANCELED: "INGESTION_CANCELED",
  INGESTION_SUPERSEDED: "INGESTION_SUPERSEDED",
  INTERNAL_SERVICE_ERROR: "INTERNAL_SERVICE_ERROR",
  INVALID_DATAPREP_SYNTAX: "INVALID_DATAPREP_SYNTAX",
  INVALID_DATA_SOURCE_CONFIG: "INVALID_DATA_SOURCE_CONFIG",
  INVALID_DATE_FORMAT: "INVALID_DATE_FORMAT",
  IOT_DATA_SET_FILE_EMPTY: "IOT_DATA_SET_FILE_EMPTY",
  IOT_FILE_NOT_FOUND: "IOT_FILE_NOT_FOUND",
  OAUTH_TOKEN_FAILURE: "OAUTH_TOKEN_FAILURE",
  PASSWORD_AUTHENTICATION_FAILURE: "PASSWORD_AUTHENTICATION_FAILURE",
  PERMISSION_DENIED: "PERMISSION_DENIED",
  PERMISSION_NOT_FOUND: "PERMISSION_NOT_FOUND",
  QUERY_TIMEOUT: "QUERY_TIMEOUT",
  REFRESH_SUPPRESSED_BY_EDIT: "REFRESH_SUPPRESSED_BY_EDIT",
  ROW_SIZE_LIMIT_EXCEEDED: "ROW_SIZE_LIMIT_EXCEEDED",
  S3_FILE_INACCESSIBLE: "S3_FILE_INACCESSIBLE",
  S3_MANIFEST_ERROR: "S3_MANIFEST_ERROR",
  S3_UPLOADED_FILE_DELETED: "S3_UPLOADED_FILE_DELETED",
  SOURCE_API_LIMIT_EXCEEDED_FAILURE: "SOURCE_API_LIMIT_EXCEEDED_FAILURE",
  SOURCE_RESOURCE_LIMIT_EXCEEDED: "SOURCE_RESOURCE_LIMIT_EXCEEDED",
  SPICE_TABLE_NOT_FOUND: "SPICE_TABLE_NOT_FOUND",
  SQL_EXCEPTION: "SQL_EXCEPTION",
  SQL_INVALID_PARAMETER_VALUE: "SQL_INVALID_PARAMETER_VALUE",
  SQL_NUMERIC_OVERFLOW: "SQL_NUMERIC_OVERFLOW",
  SQL_SCHEMA_MISMATCH_ERROR: "SQL_SCHEMA_MISMATCH_ERROR",
  SQL_TABLE_NOT_FOUND: "SQL_TABLE_NOT_FOUND",
  SSL_CERTIFICATE_VALIDATION_FAILURE: "SSL_CERTIFICATE_VALIDATION_FAILURE",
  UNRESOLVABLE_HOST: "UNRESOLVABLE_HOST",
  UNROUTABLE_HOST: "UNROUTABLE_HOST",
} as const;

/**
 * @public
 */
export type IngestionErrorType = (typeof IngestionErrorType)[keyof typeof IngestionErrorType];

/**
 * <p>Error information for the SPICE ingestion of a dataset.</p>
 * @public
 */
export interface ErrorInfo {
  /**
   * <p>Error type.</p>
   * @public
   */
  Type?: IngestionErrorType | undefined;

  /**
   * <p>Error message.</p>
   * @public
   */
  Message?: string | undefined;
}

/**
 * <p>Information about a queued dataset SPICE ingestion.</p>
 * @public
 */
export interface QueueInfo {
  /**
   * <p>The ID of the queued ingestion.</p>
   * @public
   */
  WaitingOnIngestion: string | undefined;

  /**
   * <p>The ID of the ongoing ingestion. The queued ingestion is waiting for the ongoing
   *             ingestion to complete.</p>
   * @public
   */
  QueuedIngestion: string | undefined;
}

/**
 * @public
 * @enum
 */
export const IngestionRequestSource = {
  MANUAL: "MANUAL",
  SCHEDULED: "SCHEDULED",
} as const;

/**
 * @public
 */
export type IngestionRequestSource = (typeof IngestionRequestSource)[keyof typeof IngestionRequestSource];

/**
 * @public
 * @enum
 */
export const IngestionRequestType = {
  EDIT: "EDIT",
  FULL_REFRESH: "FULL_REFRESH",
  INCREMENTAL_REFRESH: "INCREMENTAL_REFRESH",
  INITIAL_INGESTION: "INITIAL_INGESTION",
} as const;

/**
 * @public
 */
export type IngestionRequestType = (typeof IngestionRequestType)[keyof typeof IngestionRequestType];

/**
 * <p>Information about rows for a data set SPICE ingestion.</p>
 * @public
 */
export interface RowInfo {
  /**
   * <p>The number of rows that were ingested.</p>
   * @public
   */
  RowsIngested?: number | undefined;

  /**
   * <p>The number of rows that were not ingested.</p>
   * @public
   */
  RowsDropped?: number | undefined;

  /**
   * <p>The total number of rows in the dataset.</p>
   * @public
   */
  TotalRowsInDataset?: number | undefined;
}

/**
 * <p>Information about the SPICE ingestion for a dataset.</p>
 * @public
 */
export interface Ingestion {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>Ingestion ID.</p>
   * @public
   */
  IngestionId?: string | undefined;

  /**
   * <p>Ingestion status.</p>
   * @public
   */
  IngestionStatus: IngestionStatus | undefined;

  /**
   * <p>Error information for this ingestion.</p>
   * @public
   */
  ErrorInfo?: ErrorInfo | undefined;

  /**
   * <p>Information about rows for a data set SPICE ingestion.</p>
   * @public
   */
  RowInfo?: RowInfo | undefined;

  /**
   * <p>Information about a queued dataset SPICE ingestion.</p>
   * @public
   */
  QueueInfo?: QueueInfo | undefined;

  /**
   * <p>The time that this ingestion started.</p>
   * @public
   */
  CreatedTime: Date | undefined;

  /**
   * <p>The time that this ingestion took, measured in seconds.</p>
   * @public
   */
  IngestionTimeInSeconds?: number | undefined;

  /**
   * <p>The size of the data ingested, in bytes.</p>
   * @public
   */
  IngestionSizeInBytes?: number | undefined;

  /**
   * <p>Event source for this ingestion.</p>
   * @public
   */
  RequestSource?: IngestionRequestSource | undefined;

  /**
   * <p>Type of this ingestion.</p>
   * @public
   */
  RequestType?: IngestionRequestType | undefined;
}

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

/**
 * @internal
 */
export const RowLevelPermissionTagRuleFilterSensitiveLog = (obj: RowLevelPermissionTagRule): any => ({
  ...obj,
  ...(obj.MatchAllValue && { MatchAllValue: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RowLevelPermissionTagConfigurationFilterSensitiveLog = (obj: RowLevelPermissionTagConfiguration): any => ({
  ...obj,
  ...(obj.TagRules && { TagRules: obj.TagRules.map((item) => RowLevelPermissionTagRuleFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const CreateDataSetRequestFilterSensitiveLog = (obj: CreateDataSetRequest): any => ({
  ...obj,
  ...(obj.PhysicalTableMap && {
    PhysicalTableMap: Object.entries(obj.PhysicalTableMap).reduce(
      (acc: any, [key, value]: [string, PhysicalTable]) => ((acc[key] = value), acc),
      {}
    ),
  }),
  ...(obj.LogicalTableMap && {
    LogicalTableMap: Object.entries(obj.LogicalTableMap).reduce(
      (acc: any, [key, value]: [string, LogicalTable]) => ((acc[key] = LogicalTableFilterSensitiveLog(value)), acc),
      {}
    ),
  }),
  ...(obj.RowLevelPermissionTagConfiguration && {
    RowLevelPermissionTagConfiguration: RowLevelPermissionTagConfigurationFilterSensitiveLog(
      obj.RowLevelPermissionTagConfiguration
    ),
  }),
});

/**
 * @internal
 */
export const DataSourceCredentialsFilterSensitiveLog = (obj: DataSourceCredentials): any => ({
  ...obj,
  ...(obj.CredentialPair && { CredentialPair: obj.CredentialPair }),
});

/**
 * @internal
 */
export const CreateDataSourceRequestFilterSensitiveLog = (obj: CreateDataSourceRequest): any => ({
  ...obj,
  ...(obj.DataSourceParameters && { DataSourceParameters: obj.DataSourceParameters }),
  ...(obj.Credentials && { Credentials: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const TemplateVersionDefinitionFilterSensitiveLog = (obj: TemplateVersionDefinition): any => ({
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
export const CreateTemplateRequestFilterSensitiveLog = (obj: CreateTemplateRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SemanticTypeFilterSensitiveLog = (obj: SemanticType): any => ({
  ...obj,
  ...(obj.TruthyCellValue && { TruthyCellValue: SENSITIVE_STRING }),
  ...(obj.TruthyCellValueSynonyms && { TruthyCellValueSynonyms: SENSITIVE_STRING }),
  ...(obj.FalseyCellValue && { FalseyCellValue: SENSITIVE_STRING }),
  ...(obj.FalseyCellValueSynonyms && { FalseyCellValueSynonyms: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const TopicCalculatedFieldFilterSensitiveLog = (obj: TopicCalculatedField): any => ({
  ...obj,
  ...(obj.Expression && { Expression: SENSITIVE_STRING }),
  ...(obj.SemanticType && { SemanticType: SemanticTypeFilterSensitiveLog(obj.SemanticType) }),
});

/**
 * @internal
 */
export const TopicColumnFilterSensitiveLog = (obj: TopicColumn): any => ({
  ...obj,
  ...(obj.SemanticType && { SemanticType: SemanticTypeFilterSensitiveLog(obj.SemanticType) }),
});

/**
 * @internal
 */
export const TopicCategoryFilterConstantFilterSensitiveLog = (obj: TopicCategoryFilterConstant): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TopicCategoryFilterFilterSensitiveLog = (obj: TopicCategoryFilter): any => ({
  ...obj,
  ...(obj.Constant && { Constant: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const TopicRangeFilterConstantFilterSensitiveLog = (obj: TopicRangeFilterConstant): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TopicDateRangeFilterFilterSensitiveLog = (obj: TopicDateRangeFilter): any => ({
  ...obj,
  ...(obj.Constant && { Constant: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const TopicSingularFilterConstantFilterSensitiveLog = (obj: TopicSingularFilterConstant): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TopicNumericEqualityFilterFilterSensitiveLog = (obj: TopicNumericEqualityFilter): any => ({
  ...obj,
  ...(obj.Constant && { Constant: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const TopicNumericRangeFilterFilterSensitiveLog = (obj: TopicNumericRangeFilter): any => ({
  ...obj,
  ...(obj.Constant && { Constant: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const TopicRelativeDateFilterFilterSensitiveLog = (obj: TopicRelativeDateFilter): any => ({
  ...obj,
  ...(obj.Constant && { Constant: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const TopicFilterFilterSensitiveLog = (obj: TopicFilter): any => ({
  ...obj,
  ...(obj.CategoryFilter && { CategoryFilter: TopicCategoryFilterFilterSensitiveLog(obj.CategoryFilter) }),
  ...(obj.NumericEqualityFilter && {
    NumericEqualityFilter: TopicNumericEqualityFilterFilterSensitiveLog(obj.NumericEqualityFilter),
  }),
  ...(obj.NumericRangeFilter && {
    NumericRangeFilter: TopicNumericRangeFilterFilterSensitiveLog(obj.NumericRangeFilter),
  }),
  ...(obj.DateRangeFilter && { DateRangeFilter: TopicDateRangeFilterFilterSensitiveLog(obj.DateRangeFilter) }),
  ...(obj.RelativeDateFilter && {
    RelativeDateFilter: TopicRelativeDateFilterFilterSensitiveLog(obj.RelativeDateFilter),
  }),
});

/**
 * @internal
 */
export const DatasetMetadataFilterSensitiveLog = (obj: DatasetMetadata): any => ({
  ...obj,
  ...(obj.Filters && { Filters: obj.Filters.map((item) => TopicFilterFilterSensitiveLog(item)) }),
  ...(obj.Columns && { Columns: obj.Columns.map((item) => TopicColumnFilterSensitiveLog(item)) }),
  ...(obj.CalculatedFields && {
    CalculatedFields: obj.CalculatedFields.map((item) => TopicCalculatedFieldFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const TopicDetailsFilterSensitiveLog = (obj: TopicDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateTopicRequestFilterSensitiveLog = (obj: CreateTopicRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OutputColumnFilterSensitiveLog = (obj: OutputColumn): any => ({
  ...obj,
  ...(obj.Description && { Description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DataSetFilterSensitiveLog = (obj: DataSet): any => ({
  ...obj,
  ...(obj.PhysicalTableMap && {
    PhysicalTableMap: Object.entries(obj.PhysicalTableMap).reduce(
      (acc: any, [key, value]: [string, PhysicalTable]) => ((acc[key] = value), acc),
      {}
    ),
  }),
  ...(obj.LogicalTableMap && {
    LogicalTableMap: Object.entries(obj.LogicalTableMap).reduce(
      (acc: any, [key, value]: [string, LogicalTable]) => ((acc[key] = LogicalTableFilterSensitiveLog(value)), acc),
      {}
    ),
  }),
  ...(obj.OutputColumns && { OutputColumns: obj.OutputColumns.map((item) => OutputColumnFilterSensitiveLog(item)) }),
  ...(obj.RowLevelPermissionTagConfiguration && {
    RowLevelPermissionTagConfiguration: RowLevelPermissionTagConfigurationFilterSensitiveLog(
      obj.RowLevelPermissionTagConfiguration
    ),
  }),
});

/**
 * @internal
 */
export const DescribeAnalysisDefinitionResponseFilterSensitiveLog = (obj: DescribeAnalysisDefinitionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAssetBundleExportJobResponseFilterSensitiveLog = (
  obj: DescribeAssetBundleExportJobResponse
): any => ({
  ...obj,
  ...(obj.DownloadUrl && { DownloadUrl: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DescribeAssetBundleImportJobResponseFilterSensitiveLog = (
  obj: DescribeAssetBundleImportJobResponse
): any => ({
  ...obj,
  ...(obj.AssetBundleImportSource && {
    AssetBundleImportSource: AssetBundleImportSourceDescriptionFilterSensitiveLog(obj.AssetBundleImportSource),
  }),
});

/**
 * @internal
 */
export const DescribeDashboardDefinitionResponseFilterSensitiveLog = (
  obj: DescribeDashboardDefinitionResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SnapshotConfigurationFilterSensitiveLog = (obj: SnapshotConfiguration): any => ({
  ...obj,
  ...(obj.Parameters && { Parameters: _ParametersFilterSensitiveLog(obj.Parameters) }),
});

/**
 * @internal
 */
export const DescribeDashboardSnapshotJobResponseFilterSensitiveLog = (
  obj: DescribeDashboardSnapshotJobResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SnapshotJobResultFilterSensitiveLog = (obj: SnapshotJobResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeDashboardSnapshotJobResultResponseFilterSensitiveLog = (
  obj: DescribeDashboardSnapshotJobResultResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeDataSetResponseFilterSensitiveLog = (obj: DescribeDataSetResponse): any => ({
  ...obj,
  ...(obj.DataSet && { DataSet: DataSetFilterSensitiveLog(obj.DataSet) }),
});
