// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@aws-sdk/smithy-client";

import {
  AccountCustomization,
  AccountInfo,
  AccountSettings,
  AdHocFilteringOption,
  AmazonElasticsearchParameters,
  AmazonElasticsearchParametersFilterSensitiveLog,
  AmazonOpenSearchParameters,
  AmazonOpenSearchParametersFilterSensitiveLog,
  Analysis,
  AnalysisDefaults,
  AnalysisError,
  CalculatedField,
  CalculatedFieldFilterSensitiveLog,
  ColumnConfiguration,
  ColumnConfigurationFilterSensitiveLog,
  DashboardBehavior,
  DataSetIdentifierDeclaration,
  Entity,
  FilterGroup,
  ParameterDeclaration,
  ParameterDeclarationFilterSensitiveLog,
  ResourceStatus,
  Sheet,
} from "./models_0";
import {
  _Parameters,
  _ParametersFilterSensitiveLog,
  AnalysisDefinition,
  AnalysisSummary,
  AnonymousUserEmbeddingExperienceConfiguration,
  AssignmentStatus,
  AthenaParameters,
  AthenaParametersFilterSensitiveLog,
  AuroraParameters,
  AuroraParametersFilterSensitiveLog,
  AuroraPostgreSqlParameters,
  AuroraPostgreSqlParametersFilterSensitiveLog,
  AwsIotAnalyticsParameters,
  AwsIotAnalyticsParametersFilterSensitiveLog,
  BorderStyle,
  CalculatedColumn,
  CalculatedColumnFilterSensitiveLog,
  CastColumnTypeOperation,
  CastColumnTypeOperationFilterSensitiveLog,
  ColumnDataType,
  ColumnGroup,
  ColumnGroupSchema,
  ColumnLevelPermissionRule,
  ColumnSchema,
  ColumnTag,
  ColumnTagName,
  DashboardVisualId,
  DataSetReference,
  ExceptionResourceType,
  FilterOperator,
  ResourcePermission,
  SheetDefinition,
  Tag,
} from "./models_1";
import { QuickSightServiceException as __BaseException } from "./QuickSightServiceException";

export interface CreateAnalysisResponse {
  /**
   * <p>The ARN for the analysis.</p>
   */
  Arn?: string;

  /**
   * <p>The ID of the analysis.</p>
   */
  AnalysisId?: string;

  /**
   * <p>The status of the creation of the analysis. </p>
   */
  CreationStatus?: ResourceStatus | string;

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
 * <p>A limit is exceeded.</p>
 */
export class LimitExceededException extends __BaseException {
  readonly name: "LimitExceededException" = "LimitExceededException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * <p>Limit exceeded.</p>
   */
  ResourceType?: ExceptionResourceType | string;

  /**
   * <p>The Amazon Web Services request ID for this request.</p>
   */
  RequestId?: string;
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
 */
export class UnsupportedUserEditionException extends __BaseException {
  readonly name: "UnsupportedUserEditionException" = "UnsupportedUserEditionException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * <p>The Amazon Web Services request ID for this request.</p>
   */
  RequestId?: string;
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
 */
export interface CreateColumnsOperation {
  /**
   * <p>Calculated columns to create.</p>
   */
  Columns: CalculatedColumn[] | undefined;
}

/**
 * <p>Export to .csv option.</p>
 */
export interface ExportToCSVOption {
  /**
   * <p>Availability status.</p>
   */
  AvailabilityStatus?: DashboardBehavior | string;
}

export enum DashboardUIState {
  COLLAPSED = "COLLAPSED",
  EXPANDED = "EXPANDED",
}

/**
 * <p>Sheet controls option.</p>
 */
export interface SheetControlsOption {
  /**
   * <p>Visibility state.</p>
   */
  VisibilityState?: DashboardUIState | string;
}

/**
 * <p></p>
 */
export interface ExportHiddenFieldsOption {
  /**
   * <p></p>
   */
  AvailabilityStatus?: DashboardBehavior | string;
}

/**
 * <p></p>
 */
export interface DashboardVisualPublishOptions {
  /**
   * <p></p>
   */
  ExportHiddenFieldsOption?: ExportHiddenFieldsOption;
}

/**
 * <p>Dashboard publish options.</p>
 */
export interface DashboardPublishOptions {
  /**
   * <p>Ad hoc (one-time) filtering option.</p>
   */
  AdHocFilteringOption?: AdHocFilteringOption;

  /**
   * <p>Export to .csv option.</p>
   */
  ExportToCSVOption?: ExportToCSVOption;

  /**
   * <p>Sheet controls option.</p>
   */
  SheetControlsOption?: SheetControlsOption;

  /**
   * <p></p>
   */
  VisualPublishOptions?: DashboardVisualPublishOptions;
}

/**
 * <p>The contents of a dashboard.</p>
 */
export interface DashboardVersionDefinition {
  /**
   * <p>An array of dataset identifier declarations. With
   *             this mapping,you can use dataset identifiers instead of dataset Amazon Resource Names (ARNs) throughout the dashboard's sub-structures.</p>
   */
  DataSetIdentifierDeclarations: DataSetIdentifierDeclaration[] | undefined;

  /**
   * <p>An array of sheet definitions for a dashboard.</p>
   */
  Sheets?: SheetDefinition[];

  /**
   * <p>An array of calculated field definitions for the dashboard.</p>
   */
  CalculatedFields?: CalculatedField[];

  /**
   * <p>The parameter declarations for a dashboard. Parameters are named variables that can transfer a value for use by an action or an object.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/parameters-in-quicksight.html">Parameters in Amazon QuickSight</a> in the <i>Amazon QuickSight User Guide</i>.</p>
   */
  ParameterDeclarations?: ParameterDeclaration[];

  /**
   * <p>The filter definitions for a dashboard.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/adding-a-filter.html">Filtering Data in Amazon QuickSight</a> in the <i>Amazon QuickSight User Guide</i>.</p>
   */
  FilterGroups?: FilterGroup[];

  /**
   * <p>An array of dashboard-level column configurations. Column configurations
   *             are used to set the default formatting for a column that
   *             is used throughout a dashboard. </p>
   */
  ColumnConfigurations?: ColumnConfiguration[];

  /**
   * <p>The configuration for default analysis settings.</p>
   */
  AnalysisDefaults?: AnalysisDefaults;
}

/**
 * <p>Dashboard source template.</p>
 */
export interface DashboardSourceTemplate {
  /**
   * <p>Dataset references.</p>
   */
  DataSetReferences: DataSetReference[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  Arn: string | undefined;
}

/**
 * <p>Dashboard source entity.</p>
 */
export interface DashboardSourceEntity {
  /**
   * <p>Source template.</p>
   */
  SourceTemplate?: DashboardSourceTemplate;
}

export interface CreateDashboardRequest {
  /**
   * <p>The ID of the Amazon Web Services account where you want to create the dashboard.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the dashboard, also added to the IAM policy.</p>
   */
  DashboardId: string | undefined;

  /**
   * <p>The display name of the dashboard.</p>
   */
  Name: string | undefined;

  /**
   * <p>The parameters for the creation of the dashboard, which you want to use to override
   *             the default settings. A dashboard can have any type of parameters, and some parameters
   *             might accept multiple values. </p>
   */
  Parameters?: _Parameters;

  /**
   * <p>A structure that contains the permissions of the dashboard. You can use this structure
   *             for granting permissions by providing a list of IAM action information for each
   *             principal ARN. </p>
   *          <p>To specify no permissions, omit the permissions list.</p>
   */
  Permissions?: ResourcePermission[];

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
   */
  SourceEntity?: DashboardSourceEntity;

  /**
   * <p>Contains a map of the key-value pairs for the resource tag or tags assigned to the
   *             dashboard.</p>
   */
  Tags?: Tag[];

  /**
   * <p>A description for the first version of the dashboard being created.</p>
   */
  VersionDescription?: string;

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
   */
  DashboardPublishOptions?: DashboardPublishOptions;

  /**
   * <p>The Amazon Resource Name (ARN) of the theme that is being used for this dashboard. If
   *             you add a value for this field, it overrides the value that is used in the source
   *             entity. The theme ARN must exist in the same Amazon Web Services account where you create the
   *             dashboard.</p>
   */
  ThemeArn?: string;

  /**
   * <p>The definition of a dashboard.</p>
   *          <p>A definition is the data model of all features in a Dashboard, Template, or Analysis.</p>
   */
  Definition?: DashboardVersionDefinition;
}

export interface CreateDashboardResponse {
  /**
   * <p>The ARN of the dashboard.</p>
   */
  Arn?: string;

  /**
   * <p>The ARN of the dashboard, including the version number of the first version that is
   *             created.</p>
   */
  VersionArn?: string;

  /**
   * <p>The ID for the dashboard.</p>
   */
  DashboardId?: string;

  /**
   * <p>The status of the dashboard creation request.</p>
   */
  CreationStatus?: ResourceStatus | string;

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
 * <p>The usage configuration to apply to child datasets that reference this dataset as a source.</p>
 */
export interface DataSetUsageConfiguration {
  /**
   * <p>An option that controls whether a child dataset of a direct query can use this dataset as a source.</p>
   */
  DisableUseAsDirectQuerySource?: boolean;

  /**
   * <p>An option that controls whether a child dataset that's stored in QuickSight can use this dataset as a source.</p>
   */
  DisableUseAsImportedSource?: boolean;
}

/**
 * <p>A FieldFolder element is a folder that contains fields and nested subfolders.</p>
 */
export interface FieldFolder {
  /**
   * <p>The description for a field folder.</p>
   */
  description?: string;

  /**
   * <p>A folder has a list of columns. A column can only be in one folder.</p>
   */
  columns?: string[];
}

export enum DataSetImportMode {
  DIRECT_QUERY = "DIRECT_QUERY",
  SPICE = "SPICE",
}

/**
 * <p>A transform operation that filters rows based on a condition.</p>
 */
export interface FilterOperation {
  /**
   * <p>An expression that must evaluate to a Boolean value. Rows for which the expression
   *             evaluates to true are kept in the dataset.</p>
   */
  ConditionExpression: string | undefined;
}

/**
 * <p>A transform operation that projects columns. Operations that come after a projection
 *             can only refer to projected columns.</p>
 */
export interface ProjectOperation {
  /**
   * <p>Projected columns.</p>
   */
  ProjectedColumns: string[] | undefined;
}

/**
 * <p>A transform operation that renames a column.</p>
 */
export interface RenameColumnOperation {
  /**
   * <p>The name of the column to be renamed.</p>
   */
  ColumnName: string | undefined;

  /**
   * <p>The new name for the column.</p>
   */
  NewColumnName: string | undefined;
}

/**
 * <p>A transform operation that tags a column with additional information.</p>
 */
export interface TagColumnOperation {
  /**
   * <p>The column that this operation acts on.</p>
   */
  ColumnName: string | undefined;

  /**
   * <p>The dataset column tag, currently only used for geospatial type tagging.</p>
   *          <note>
   *             <p>This is not tags for the Amazon Web Services tagging feature.</p>
   *          </note>
   */
  Tags: ColumnTag[] | undefined;
}

/**
 * <p>A transform operation that removes tags associated with a column.</p>
 */
export interface UntagColumnOperation {
  /**
   * <p>The column that this operation acts on.</p>
   */
  ColumnName: string | undefined;

  /**
   * <p>The column tags to remove from this column.</p>
   */
  TagNames: (ColumnTagName | string)[] | undefined;
}

/**
 * <p>A data transformation on a logical table. This is a variant type structure. For this
 *             structure to be valid, only one of the attributes can be non-null.</p>
 */
export type TransformOperation =
  | TransformOperation.CastColumnTypeOperationMember
  | TransformOperation.CreateColumnsOperationMember
  | TransformOperation.FilterOperationMember
  | TransformOperation.ProjectOperationMember
  | TransformOperation.RenameColumnOperationMember
  | TransformOperation.TagColumnOperationMember
  | TransformOperation.UntagColumnOperationMember
  | TransformOperation.$UnknownMember;

export namespace TransformOperation {
  /**
   * <p>An operation that projects columns. Operations that come after a projection can only
   *             refer to projected columns.</p>
   */
  export interface ProjectOperationMember {
    ProjectOperation: ProjectOperation;
    FilterOperation?: never;
    CreateColumnsOperation?: never;
    RenameColumnOperation?: never;
    CastColumnTypeOperation?: never;
    TagColumnOperation?: never;
    UntagColumnOperation?: never;
    $unknown?: never;
  }

  /**
   * <p>An operation that filters rows based on some condition.</p>
   */
  export interface FilterOperationMember {
    ProjectOperation?: never;
    FilterOperation: FilterOperation;
    CreateColumnsOperation?: never;
    RenameColumnOperation?: never;
    CastColumnTypeOperation?: never;
    TagColumnOperation?: never;
    UntagColumnOperation?: never;
    $unknown?: never;
  }

  /**
   * <p>An operation that creates calculated columns. Columns created in one such operation
   *             form a lexical closure.</p>
   */
  export interface CreateColumnsOperationMember {
    ProjectOperation?: never;
    FilterOperation?: never;
    CreateColumnsOperation: CreateColumnsOperation;
    RenameColumnOperation?: never;
    CastColumnTypeOperation?: never;
    TagColumnOperation?: never;
    UntagColumnOperation?: never;
    $unknown?: never;
  }

  /**
   * <p>An operation that renames a column.</p>
   */
  export interface RenameColumnOperationMember {
    ProjectOperation?: never;
    FilterOperation?: never;
    CreateColumnsOperation?: never;
    RenameColumnOperation: RenameColumnOperation;
    CastColumnTypeOperation?: never;
    TagColumnOperation?: never;
    UntagColumnOperation?: never;
    $unknown?: never;
  }

  /**
   * <p>A transform operation that casts a column to a different type.</p>
   */
  export interface CastColumnTypeOperationMember {
    ProjectOperation?: never;
    FilterOperation?: never;
    CreateColumnsOperation?: never;
    RenameColumnOperation?: never;
    CastColumnTypeOperation: CastColumnTypeOperation;
    TagColumnOperation?: never;
    UntagColumnOperation?: never;
    $unknown?: never;
  }

  /**
   * <p>An operation that tags a column with additional information.</p>
   */
  export interface TagColumnOperationMember {
    ProjectOperation?: never;
    FilterOperation?: never;
    CreateColumnsOperation?: never;
    RenameColumnOperation?: never;
    CastColumnTypeOperation?: never;
    TagColumnOperation: TagColumnOperation;
    UntagColumnOperation?: never;
    $unknown?: never;
  }

  /**
   * <p>A transform operation that removes tags associated with a column.</p>
   */
  export interface UntagColumnOperationMember {
    ProjectOperation?: never;
    FilterOperation?: never;
    CreateColumnsOperation?: never;
    RenameColumnOperation?: never;
    CastColumnTypeOperation?: never;
    TagColumnOperation?: never;
    UntagColumnOperation: UntagColumnOperation;
    $unknown?: never;
  }

  export interface $UnknownMember {
    ProjectOperation?: never;
    FilterOperation?: never;
    CreateColumnsOperation?: never;
    RenameColumnOperation?: never;
    CastColumnTypeOperation?: never;
    TagColumnOperation?: never;
    UntagColumnOperation?: never;
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
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>Properties associated with the columns participating in a join.</p>
 */
export interface JoinKeyProperties {
  /**
   * <p>A value that indicates that a row in a table is uniquely identified by the columns in
   *             a join key. This is used by Amazon QuickSight to optimize query performance.</p>
   */
  UniqueKey?: boolean;
}

export enum JoinType {
  INNER = "INNER",
  LEFT = "LEFT",
  OUTER = "OUTER",
  RIGHT = "RIGHT",
}

/**
 * <p>The instructions associated with a join. </p>
 */
export interface JoinInstruction {
  /**
   * <p>The operand on the left side of a join.</p>
   */
  LeftOperand: string | undefined;

  /**
   * <p>The operand on the right side of a join.</p>
   */
  RightOperand: string | undefined;

  /**
   * <p>Join key properties of the left operand.</p>
   */
  LeftJoinKeyProperties?: JoinKeyProperties;

  /**
   * <p>Join key properties of the right operand.</p>
   */
  RightJoinKeyProperties?: JoinKeyProperties;

  /**
   * <p>The type of join that it is.</p>
   */
  Type: JoinType | string | undefined;

  /**
   * <p>The join instructions provided in the <code>ON</code> clause of a join.</p>
   */
  OnClause: string | undefined;
}

/**
 * <p>Information about the source of a logical table. This is a variant type structure. For
 *             this structure to be valid, only one of the attributes can be non-null.</p>
 */
export interface LogicalTableSource {
  /**
   * <p>Specifies the result of a join of two logical tables.</p>
   */
  JoinInstruction?: JoinInstruction;

  /**
   * <p>Physical table ID.</p>
   */
  PhysicalTableId?: string;

  /**
   * <p>The Amazon Resource Number (ARN) of the parent dataset.</p>
   */
  DataSetArn?: string;
}

/**
 * <p>A <i>logical table</i> is a unit that joins and that data
 *             transformations operate on. A logical table has a source, which can be either a physical
 *             table or result of a join. When a logical table points to a physical table, the logical
 *             table acts as a mutable copy of that physical table through transform operations.</p>
 */
export interface LogicalTable {
  /**
   * <p>A display name for the logical table.</p>
   */
  Alias: string | undefined;

  /**
   * <p>Transform operations that act on this logical table. For this structure to be valid, only one of the attributes can be non-null. </p>
   */
  DataTransforms?: TransformOperation[];

  /**
   * <p>Source of this logical table.</p>
   */
  Source: LogicalTableSource | undefined;
}

export enum InputColumnDataType {
  BIT = "BIT",
  BOOLEAN = "BOOLEAN",
  DATETIME = "DATETIME",
  DECIMAL = "DECIMAL",
  INTEGER = "INTEGER",
  JSON = "JSON",
  STRING = "STRING",
}

/**
 * <p>Metadata for a column that is used as the input of a transform operation.</p>
 */
export interface InputColumn {
  /**
   * <p>The name of this column in the underlying data source.</p>
   */
  Name: string | undefined;

  /**
   * <p>The data type of the column.</p>
   */
  Type: InputColumnDataType | string | undefined;
}

/**
 * <p>A physical table type built from the results of the custom SQL query.</p>
 */
export interface CustomSql {
  /**
   * <p>The Amazon Resource Name (ARN) of the data source.</p>
   */
  DataSourceArn: string | undefined;

  /**
   * <p>A display name for the SQL query result.</p>
   */
  Name: string | undefined;

  /**
   * <p>The SQL query.</p>
   */
  SqlQuery: string | undefined;

  /**
   * <p>The column schema from the SQL query result set.</p>
   */
  Columns?: InputColumn[];
}

/**
 * <p>A physical table type for relational data sources.</p>
 */
export interface RelationalTable {
  /**
   * <p>The Amazon Resource Name (ARN) for the data source.</p>
   */
  DataSourceArn: string | undefined;

  /**
   * <p>The catalog associated with a table.</p>
   */
  Catalog?: string;

  /**
   * <p>The schema name. This name applies to certain relational database engines.</p>
   */
  Schema?: string;

  /**
   * <p>The name of the relational table.</p>
   */
  Name: string | undefined;

  /**
   * <p>The column schema of the table.</p>
   */
  InputColumns: InputColumn[] | undefined;
}

export enum FileFormat {
  CLF = "CLF",
  CSV = "CSV",
  ELF = "ELF",
  JSON = "JSON",
  TSV = "TSV",
  XLSX = "XLSX",
}

export enum TextQualifier {
  DOUBLE_QUOTE = "DOUBLE_QUOTE",
  SINGLE_QUOTE = "SINGLE_QUOTE",
}

/**
 * <p>Information about the format for a source file or files.</p>
 */
export interface UploadSettings {
  /**
   * <p>File format.</p>
   */
  Format?: FileFormat | string;

  /**
   * <p>A row number to start reading data from.</p>
   */
  StartFromRow?: number;

  /**
   * <p>Whether the file has a header row, or the files each have a header row.</p>
   */
  ContainsHeader?: boolean;

  /**
   * <p>Text qualifier.</p>
   */
  TextQualifier?: TextQualifier | string;

  /**
   * <p>The delimiter between values in the file.</p>
   */
  Delimiter?: string;
}

/**
 * <p>A physical table type for an S3 data source.</p>
 */
export interface S3Source {
  /**
   * <p>The Amazon Resource Name (ARN) for the data source.</p>
   */
  DataSourceArn: string | undefined;

  /**
   * <p>Information about the format for the S3 source file or files.</p>
   */
  UploadSettings?: UploadSettings;

  /**
   * <p>A physical table type for an S3 data source.</p>
   *          <note>
   *             <p>For files that aren't JSON, only <code>STRING</code> data types are supported in input columns.</p>
   *          </note>
   */
  InputColumns: InputColumn[] | undefined;
}

/**
 * <p>A view of a data source that contains information about the shape of the data in the
 *             underlying source. This is a variant type structure. For this structure to be valid,
 *             only one of the attributes can be non-null.</p>
 */
export type PhysicalTable =
  | PhysicalTable.CustomSqlMember
  | PhysicalTable.RelationalTableMember
  | PhysicalTable.S3SourceMember
  | PhysicalTable.$UnknownMember;

export namespace PhysicalTable {
  /**
   * <p>A physical table type for relational data sources.</p>
   */
  export interface RelationalTableMember {
    RelationalTable: RelationalTable;
    CustomSql?: never;
    S3Source?: never;
    $unknown?: never;
  }

  /**
   * <p>A physical table type built from the results of the custom SQL query.</p>
   */
  export interface CustomSqlMember {
    RelationalTable?: never;
    CustomSql: CustomSql;
    S3Source?: never;
    $unknown?: never;
  }

  /**
   * <p>A physical table type for as S3 data source.</p>
   */
  export interface S3SourceMember {
    RelationalTable?: never;
    CustomSql?: never;
    S3Source: S3Source;
    $unknown?: never;
  }

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

export enum RowLevelPermissionFormatVersion {
  VERSION_1 = "VERSION_1",
  VERSION_2 = "VERSION_2",
}

export enum RowLevelPermissionPolicy {
  DENY_ACCESS = "DENY_ACCESS",
  GRANT_ACCESS = "GRANT_ACCESS",
}

export enum Status {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

/**
 * <p>Information about a dataset that contains permissions for row-level security (RLS).
 *             The permissions dataset maps fields to users or groups. For more information, see
 *             <a href="https://docs.aws.amazon.com/quicksight/latest/user/restrict-access-to-a-data-set-using-row-level-security.html">Using Row-Level Security (RLS) to Restrict Access to a Dataset</a> in the <i>Amazon QuickSight User
 *                 Guide</i>.</p>
 *          <p>The option to deny permissions by setting <code>PermissionPolicy</code> to <code>DENY_ACCESS</code> is
 *             not supported for new RLS datasets.</p>
 */
export interface RowLevelPermissionDataSet {
  /**
   * <p>The namespace associated with the dataset that contains permissions for RLS.</p>
   */
  Namespace?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the dataset that contains permissions for RLS.</p>
   */
  Arn: string | undefined;

  /**
   * <p>The type of permissions to use when interpreting the permissions for RLS. <code>DENY_ACCESS</code>
   *         is included for backward compatibility only.</p>
   */
  PermissionPolicy: RowLevelPermissionPolicy | string | undefined;

  /**
   * <p>The user or group rules associated with the dataset that contains permissions for RLS.</p>
   *          <p>By default, <code>FormatVersion</code> is <code>VERSION_1</code>. When <code>FormatVersion</code> is <code>VERSION_1</code>, <code>UserName</code> and <code>GroupName</code> are required. When <code>FormatVersion</code> is <code>VERSION_2</code>, <code>UserARN</code> and <code>GroupARN</code> are required, and <code>Namespace</code> must not exist.</p>
   */
  FormatVersion?: RowLevelPermissionFormatVersion | string;

  /**
   * <p>The status of the row-level security permission dataset. If enabled, the status is <code>ENABLED</code>. If disabled, the status is <code>DISABLED</code>.</p>
   */
  Status?: Status | string;
}

/**
 * <p>A set of rules associated with a tag.</p>
 */
export interface RowLevelPermissionTagRule {
  /**
   * <p>The unique key for a tag.</p>
   */
  TagKey: string | undefined;

  /**
   * <p>The column name that a tag key is assigned to.</p>
   */
  ColumnName: string | undefined;

  /**
   * <p>A string that you want to use to delimit the values when you pass the values at run time. For example, you can delimit the values with a comma.</p>
   */
  TagMultiValueDelimiter?: string;

  /**
   * <p>A string that you want to use to filter by all the values in a column in the dataset and don’t want to list the values one by one. For example, you can use an asterisk as your match all value.</p>
   */
  MatchAllValue?: string;
}

/**
 * <p>The configuration of tags on a dataset to set row-level security. </p>
 */
export interface RowLevelPermissionTagConfiguration {
  /**
   * <p>The status of row-level security tags. If enabled, the status is <code>ENABLED</code>. If disabled, the status is <code>DISABLED</code>.</p>
   */
  Status?: Status | string;

  /**
   * <p>A set of rules associated with row-level security, such as the tag names and columns that they are assigned to.</p>
   */
  TagRules: RowLevelPermissionTagRule[] | undefined;
}

export interface CreateDataSetRequest {
  /**
   * <p>The Amazon Web Services account ID.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>An ID for the dataset that you want to create. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
   */
  DataSetId: string | undefined;

  /**
   * <p>The display name for the dataset.</p>
   */
  Name: string | undefined;

  /**
   * <p>Declares the physical tables that are available in the underlying data sources.</p>
   */
  PhysicalTableMap: Record<string, PhysicalTable> | undefined;

  /**
   * <p>Configures the combination and transformation of the data from the physical tables.</p>
   */
  LogicalTableMap?: Record<string, LogicalTable>;

  /**
   * <p>Indicates whether you want to import the data into SPICE.</p>
   */
  ImportMode: DataSetImportMode | string | undefined;

  /**
   * <p>Groupings of columns that work together in certain Amazon QuickSight features. Currently, only geospatial hierarchy is supported.</p>
   */
  ColumnGroups?: ColumnGroup[];

  /**
   * <p>The folder that contains fields and nested subfolders for your dataset.</p>
   */
  FieldFolders?: Record<string, FieldFolder>;

  /**
   * <p>A list of resource permissions on the dataset.</p>
   */
  Permissions?: ResourcePermission[];

  /**
   * <p>The row-level security configuration for the data that you want to create.</p>
   */
  RowLevelPermissionDataSet?: RowLevelPermissionDataSet;

  /**
   * <p>The configuration of tags on a dataset to set row-level security. Row-level security tags are currently supported for anonymous embedding only.</p>
   */
  RowLevelPermissionTagConfiguration?: RowLevelPermissionTagConfiguration;

  /**
   * <p>A set of one or more definitions of a <code>
   *                <a href="https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ColumnLevelPermissionRule.html">ColumnLevelPermissionRule</a>
   *             </code>.</p>
   */
  ColumnLevelPermissionRules?: ColumnLevelPermissionRule[];

  /**
   * <p>Contains a map of the key-value pairs for the resource tag or tags assigned to the dataset.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The usage configuration to apply to child datasets that reference this dataset as a source.</p>
   */
  DataSetUsageConfiguration?: DataSetUsageConfiguration;
}

export interface CreateDataSetResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the dataset.</p>
   */
  Arn?: string;

  /**
   * <p>The ID for the dataset that you want to create. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
   */
  DataSetId?: string;

  /**
   * <p>The ARN for the ingestion, which is triggered as a result of dataset creation if the import
   * 			mode is SPICE.</p>
   */
  IngestionArn?: string;

  /**
   * <p>The ID of the ingestion, which is triggered as a result of dataset creation if the import
   * 			mode is SPICE.</p>
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
 * <p>The required parameters that are needed to connect to a Databricks data source.</p>
 */
export interface DatabricksParameters {
  /**
   * <p>The host name of the Databricks data source.</p>
   */
  Host: string | undefined;

  /**
   * <p>The port for the Databricks data source.</p>
   */
  Port: number | undefined;

  /**
   * <p>The HTTP path of the Databricks data source.</p>
   */
  SqlEndpointPath: string | undefined;
}

/**
 * <p>The required parameters for connecting to an Exasol data source.</p>
 */
export interface ExasolParameters {
  /**
   * <p>The hostname or IP address of the Exasol data source.</p>
   */
  Host: string | undefined;

  /**
   * <p>The port for the Exasol data source.</p>
   */
  Port: number | undefined;
}

/**
 * <p>The parameters for Jira.</p>
 */
export interface JiraParameters {
  /**
   * <p>The base URL of the Jira site.</p>
   */
  SiteBaseUrl: string | undefined;
}

/**
 * <p>The parameters for MariaDB.</p>
 */
export interface MariaDbParameters {
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
 * <p>The parameters for MySQL.</p>
 */
export interface MySqlParameters {
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
 * <p>The parameters for Oracle.</p>
 */
export interface OracleParameters {
  /**
   * <p>An Oracle host.</p>
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
 * <p>The parameters for PostgreSQL.</p>
 */
export interface PostgreSqlParameters {
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
 * <p>The parameters for Presto.</p>
 */
export interface PrestoParameters {
  /**
   * <p>Host.</p>
   */
  Host: string | undefined;

  /**
   * <p>Port.</p>
   */
  Port: number | undefined;

  /**
   * <p>Catalog.</p>
   */
  Catalog: string | undefined;
}

/**
 * <p>The parameters for Amazon RDS.</p>
 */
export interface RdsParameters {
  /**
   * <p>Instance ID.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>Database.</p>
   */
  Database: string | undefined;
}

/**
 * <p>The parameters for Amazon Redshift. The <code>ClusterId</code> field can be blank if
 *             <code>Host</code> and <code>Port</code> are both set. The <code>Host</code> and
 *             <code>Port</code> fields can be blank if the <code>ClusterId</code> field is set.</p>
 */
export interface RedshiftParameters {
  /**
   * <p>Host. This field can be blank if <code>ClusterId</code> is provided.</p>
   */
  Host?: string;

  /**
   * <p>Port. This field can be blank if the <code>ClusterId</code> is provided.</p>
   */
  Port?: number;

  /**
   * <p>Database.</p>
   */
  Database: string | undefined;

  /**
   * <p>Cluster ID. This field can be blank if the <code>Host</code> and <code>Port</code> are
   *             provided.</p>
   */
  ClusterId?: string;
}

/**
 * <p>Amazon S3 manifest file location.</p>
 */
export interface ManifestFileLocation {
  /**
   * <p>Amazon S3 bucket.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>Amazon S3 key that identifies an object.</p>
   */
  Key: string | undefined;
}

/**
 * <p>The parameters for S3.</p>
 */
export interface S3Parameters {
  /**
   * <p>Location of the Amazon S3 manifest file. This is NULL if the manifest file was
   *             uploaded into Amazon QuickSight.</p>
   */
  ManifestFileLocation: ManifestFileLocation | undefined;
}

/**
 * <p>The parameters for ServiceNow.</p>
 */
export interface ServiceNowParameters {
  /**
   * <p>URL of the base site.</p>
   */
  SiteBaseUrl: string | undefined;
}

/**
 * <p>The parameters for Snowflake.</p>
 */
export interface SnowflakeParameters {
  /**
   * <p>Host.</p>
   */
  Host: string | undefined;

  /**
   * <p>Database.</p>
   */
  Database: string | undefined;

  /**
   * <p>Warehouse.</p>
   */
  Warehouse: string | undefined;
}

/**
 * <p>The parameters for Spark.</p>
 */
export interface SparkParameters {
  /**
   * <p>Host.</p>
   */
  Host: string | undefined;

  /**
   * <p>Port.</p>
   */
  Port: number | undefined;
}

/**
 * <p>The parameters for SQL Server.</p>
 */
export interface SqlServerParameters {
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
 * <p>The parameters for Teradata.</p>
 */
export interface TeradataParameters {
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
 * <p>The parameters for Twitter.</p>
 */
export interface TwitterParameters {
  /**
   * <p>Twitter query string.</p>
   */
  Query: string | undefined;

  /**
   * <p>Maximum number of rows to query Twitter.</p>
   */
  MaxRows: number | undefined;
}

/**
 * <p>The parameters that Amazon QuickSight uses to connect to your underlying data source.
 *             This is a variant type structure. For this structure to be valid, only one of the
 *             attributes can be non-null.</p>
 */
export type DataSourceParameters =
  | DataSourceParameters.AmazonElasticsearchParametersMember
  | DataSourceParameters.AmazonOpenSearchParametersMember
  | DataSourceParameters.AthenaParametersMember
  | DataSourceParameters.AuroraParametersMember
  | DataSourceParameters.AuroraPostgreSqlParametersMember
  | DataSourceParameters.AwsIotAnalyticsParametersMember
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
  | DataSourceParameters.TeradataParametersMember
  | DataSourceParameters.TwitterParametersMember
  | DataSourceParameters.$UnknownMember;

export namespace DataSourceParameters {
  /**
   * <p>The parameters for OpenSearch.</p>
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
    $unknown?: never;
  }

  /**
   * <p>The parameters for Amazon Athena.</p>
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
    $unknown?: never;
  }

  /**
   * <p>The parameters for Amazon Aurora MySQL.</p>
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
    $unknown?: never;
  }

  /**
   * <p>The parameters for Amazon Aurora.</p>
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
    $unknown?: never;
  }

  /**
   * <p>The parameters for IoT Analytics.</p>
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
    $unknown?: never;
  }

  /**
   * <p>The parameters for Jira.</p>
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
    $unknown?: never;
  }

  /**
   * <p>The parameters for MariaDB.</p>
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
    $unknown?: never;
  }

  /**
   * <p>The parameters for MySQL.</p>
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
    $unknown?: never;
  }

  /**
   * <p>The parameters for Oracle.</p>
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
    $unknown?: never;
  }

  /**
   * <p>The parameters for PostgreSQL.</p>
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
    $unknown?: never;
  }

  /**
   * <p>The parameters for Presto.</p>
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
    $unknown?: never;
  }

  /**
   * <p>The parameters for Amazon RDS.</p>
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
    $unknown?: never;
  }

  /**
   * <p>The parameters for Amazon Redshift.</p>
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
    $unknown?: never;
  }

  /**
   * <p>The parameters for S3.</p>
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
    $unknown?: never;
  }

  /**
   * <p>The parameters for ServiceNow.</p>
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
    $unknown?: never;
  }

  /**
   * <p>The parameters for Snowflake.</p>
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
    $unknown?: never;
  }

  /**
   * <p>The parameters for Spark.</p>
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
    $unknown?: never;
  }

  /**
   * <p>The parameters for SQL Server.</p>
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
    $unknown?: never;
  }

  /**
   * <p>The parameters for Teradata.</p>
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
    $unknown?: never;
  }

  /**
   * <p>The parameters for Twitter.</p>
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
    $unknown?: never;
  }

  /**
   * <p>The parameters for OpenSearch.</p>
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
    $unknown?: never;
  }

  /**
   * <p>The parameters for Exasol.</p>
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
    $unknown?: never;
  }

  /**
   * <p>The required parameters that are needed to connect to a Databricks data source.</p>
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
    $unknown?: never;
  }

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
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>The combination of user name and password that are used as credentials.</p>
 */
export interface CredentialPair {
  /**
   * <p>User name.</p>
   */
  Username: string | undefined;

  /**
   * <p>Password.</p>
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
   */
  AlternateDataSourceParameters?: DataSourceParameters[];
}

/**
 * <p>Data source credentials. This is a variant type structure. For this structure to be
 *             valid, only one of the attributes can be non-null.</p>
 */
export interface DataSourceCredentials {
  /**
   * <p>Credential pair. For more information, see
   *             <code>
   *                <a href="https://docs.aws.amazon.com/quicksight/latest/APIReference/API_CredentialPair.html">CredentialPair</a>
   *             </code>.</p>
   */
  CredentialPair?: CredentialPair;

  /**
   * <p>The Amazon Resource Name (ARN) of a data source that has the credential pair that you
   *             want to use. When <code>CopySourceArn</code> is not null, the credential pair from the
   *             data source in the ARN is used as the credentials for the
   *             <code>DataSourceCredentials</code> structure.</p>
   */
  CopySourceArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the secret associated with the data source in Amazon Secrets Manager.</p>
   */
  SecretArn?: string;
}

/**
 * <p>Secure Socket Layer (SSL) properties that apply when Amazon QuickSight connects to your
 *             underlying data source.</p>
 */
export interface SslProperties {
  /**
   * <p>A Boolean option to control whether SSL should be disabled.</p>
   */
  DisableSsl?: boolean;
}

export enum DataSourceType {
  ADOBE_ANALYTICS = "ADOBE_ANALYTICS",
  AMAZON_ELASTICSEARCH = "AMAZON_ELASTICSEARCH",
  AMAZON_OPENSEARCH = "AMAZON_OPENSEARCH",
  ATHENA = "ATHENA",
  AURORA = "AURORA",
  AURORA_POSTGRESQL = "AURORA_POSTGRESQL",
  AWS_IOT_ANALYTICS = "AWS_IOT_ANALYTICS",
  DATABRICKS = "DATABRICKS",
  EXASOL = "EXASOL",
  GITHUB = "GITHUB",
  JIRA = "JIRA",
  MARIADB = "MARIADB",
  MYSQL = "MYSQL",
  ORACLE = "ORACLE",
  POSTGRESQL = "POSTGRESQL",
  PRESTO = "PRESTO",
  REDSHIFT = "REDSHIFT",
  S3 = "S3",
  SALESFORCE = "SALESFORCE",
  SERVICENOW = "SERVICENOW",
  SNOWFLAKE = "SNOWFLAKE",
  SPARK = "SPARK",
  SQLSERVER = "SQLSERVER",
  TERADATA = "TERADATA",
  TIMESTREAM = "TIMESTREAM",
  TWITTER = "TWITTER",
}

/**
 * <p>VPC connection properties.</p>
 */
export interface VpcConnectionProperties {
  /**
   * <p>The Amazon Resource Name (ARN) for the VPC connection.</p>
   */
  VpcConnectionArn: string | undefined;
}

export interface CreateDataSourceRequest {
  /**
   * <p>The Amazon Web Services account ID.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>An ID for the data source. This ID is unique per Amazon Web Services Region for each Amazon Web Services account. </p>
   */
  DataSourceId: string | undefined;

  /**
   * <p>A display name for the data source.</p>
   */
  Name: string | undefined;

  /**
   * <p>The type of the data source. To return a
   * 			list of all data sources, use <code>ListDataSources</code>.</p>
   *          <p>Use <code>AMAZON_ELASTICSEARCH</code> for Amazon OpenSearch Service.</p>
   */
  Type: DataSourceType | string | undefined;

  /**
   * <p>The parameters that Amazon QuickSight uses to connect to your underlying source.</p>
   */
  DataSourceParameters?: DataSourceParameters;

  /**
   * <p>The credentials Amazon QuickSight that uses to connect to your underlying source. Currently, only
   * 			credentials based on user name and password are supported.</p>
   */
  Credentials?: DataSourceCredentials;

  /**
   * <p>A list of resource permissions on the data source.</p>
   */
  Permissions?: ResourcePermission[];

  /**
   * <p>Use this parameter only when you want Amazon QuickSight to use a VPC connection when connecting to
   * 			your underlying source.</p>
   */
  VpcConnectionProperties?: VpcConnectionProperties;

  /**
   * <p>Secure Socket Layer (SSL) properties that apply when Amazon QuickSight connects to your underlying source.</p>
   */
  SslProperties?: SslProperties;

  /**
   * <p>Contains a map of the key-value pairs for the resource tag or tags assigned to the data source.</p>
   */
  Tags?: Tag[];
}

export interface CreateDataSourceResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the data source.</p>
   */
  Arn?: string;

  /**
   * <p>The ID of the data source. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
   */
  DataSourceId?: string;

  /**
   * <p>The status of creating the data source.</p>
   */
  CreationStatus?: ResourceStatus | string;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

export enum FolderType {
  SHARED = "SHARED",
}

export interface CreateFolderRequest {
  /**
   * <p>The ID for the Amazon Web Services account where you want to create the folder.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID of the folder.</p>
   */
  FolderId: string | undefined;

  /**
   * <p>The name of the folder.</p>
   */
  Name?: string;

  /**
   * <p>The type of folder. By default, <code>folderType</code> is <code>SHARED</code>.</p>
   */
  FolderType?: FolderType | string;

  /**
   * <p>The Amazon Resource Name (ARN) for the parent folder.</p>
   *          <p>
   *             <code>ParentFolderArn</code> can be null. An empty <code>parentFolderArn</code> creates a root-level folder.</p>
   */
  ParentFolderArn?: string;

  /**
   * <p>A structure that describes the principals and the resource-level permissions of a folder.</p>
   *          <p>To specify no permissions, omit <code>Permissions</code>.</p>
   */
  Permissions?: ResourcePermission[];

  /**
   * <p>Tags for the folder.</p>
   */
  Tags?: Tag[];
}

export interface CreateFolderResponse {
  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * <p>The Amazon Resource Name (ARN) for the newly created folder.</p>
   */
  Arn?: string;

  /**
   * <p>The folder ID for the newly created folder.</p>
   */
  FolderId?: string;

  /**
   * <p>The request ID for the newly created folder.</p>
   */
  RequestId?: string;
}

export enum MemberType {
  ANALYSIS = "ANALYSIS",
  DASHBOARD = "DASHBOARD",
  DATASET = "DATASET",
}

export interface CreateFolderMembershipRequest {
  /**
   * <p>The ID for the Amazon Web Services account that contains the folder.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID of the folder.</p>
   */
  FolderId: string | undefined;

  /**
   * <p>The ID of the asset (the dashboard, analysis, or dataset).</p>
   */
  MemberId: string | undefined;

  /**
   * <p>The type of the member, including <code>DASHBOARD</code>, <code>ANALYSIS</code>, and <code>DATASET</code>.</p>
   */
  MemberType: MemberType | string | undefined;
}

/**
 * <p>An asset in a Amazon QuickSight folder, such as a dashboard, analysis, or dataset.</p>
 */
export interface FolderMember {
  /**
   * <p>The ID of an asset in the folder.</p>
   */
  MemberId?: string;

  /**
   * <p>The type of asset that it is.</p>
   */
  MemberType?: MemberType | string;
}

export interface CreateFolderMembershipResponse {
  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * <p>Information about the member in the folder.</p>
   */
  FolderMember?: FolderMember;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;
}

/**
 * <p>The request object for this operation. </p>
 */
export interface CreateGroupRequest {
  /**
   * <p>A name for the group that you want to create.</p>
   */
  GroupName: string | undefined;

  /**
   * <p>A description for the group that you want to create.</p>
   */
  Description?: string;

  /**
   * <p>The ID for the Amazon Web Services account that the group is in. Currently, you use the ID for the
   * 			Amazon Web Services account that contains your Amazon QuickSight account.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The namespace that you want the group to be a part of.</p>
   */
  Namespace: string | undefined;
}

/**
 * <p>A <i>group</i> in Amazon QuickSight consists of a set of users. You can
 *             use groups to make it easier to manage access and security. </p>
 */
export interface Group {
  /**
   * <p>The Amazon Resource Name (ARN) for the group.</p>
   */
  Arn?: string;

  /**
   * <p>The name of the group.</p>
   */
  GroupName?: string;

  /**
   * <p>The group description.</p>
   */
  Description?: string;

  /**
   * <p>The principal ID of the group.</p>
   */
  PrincipalId?: string;
}

/**
 * <p>The response object for this operation.</p>
 */
export interface CreateGroupResponse {
  /**
   * <p>The name of the group.</p>
   */
  Group?: Group;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

export interface CreateGroupMembershipRequest {
  /**
   * <p>The name of the user that you want to add to the group membership.</p>
   */
  MemberName: string | undefined;

  /**
   * <p>The name of the group that you want to add the user to.</p>
   */
  GroupName: string | undefined;

  /**
   * <p>The ID for the Amazon Web Services account that the group is in. Currently, you use the ID for the
   * 			Amazon Web Services account that contains your Amazon QuickSight account.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The namespace that you want the user to be a part of.</p>
   */
  Namespace: string | undefined;
}

/**
 * <p>A member of an Amazon QuickSight group. Currently, group members must be users. Groups
 *             can't be members of another group. .</p>
 */
export interface GroupMember {
  /**
   * <p>The Amazon Resource Name (ARN) for the group member (user).</p>
   */
  Arn?: string;

  /**
   * <p>The name of the group member (user).</p>
   */
  MemberName?: string;
}

export interface CreateGroupMembershipResponse {
  /**
   * <p>The group member.</p>
   */
  GroupMember?: GroupMember;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

export interface CreateIAMPolicyAssignmentRequest {
  /**
   * <p>The ID of the Amazon Web Services account where you want to assign an IAM policy to Amazon QuickSight users or
   * 			groups.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The name of the assignment, also called a rule. It must be unique within an Amazon Web Services account.</p>
   */
  AssignmentName: string | undefined;

  /**
   * <p>The status of the assignment. Possible values are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ENABLED</code> - Anything specified in this assignment is used when creating the data
   * 					source.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DISABLED</code> - This assignment isn't used when creating the data source.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DRAFT</code> - This assignment is an unfinished draft and isn't used when creating the
   * 					data source.</p>
   *             </li>
   *          </ul>
   */
  AssignmentStatus: AssignmentStatus | string | undefined;

  /**
   * <p>The ARN for the IAM policy to apply to the Amazon QuickSight users and groups
   * 			specified in this assignment.</p>
   */
  PolicyArn?: string;

  /**
   * <p>The Amazon QuickSight users, groups, or both that you want to assign the policy to.</p>
   */
  Identities?: Record<string, string[]>;

  /**
   * <p>The namespace that contains the assignment.</p>
   */
  Namespace: string | undefined;
}

export interface CreateIAMPolicyAssignmentResponse {
  /**
   * <p>The name of the assignment. This name must be unique within the Amazon Web Services account.</p>
   */
  AssignmentName?: string;

  /**
   * <p>The ID for the assignment.</p>
   */
  AssignmentId?: string;

  /**
   * <p>The status of the assignment. Possible values are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ENABLED</code> - Anything specified in this assignment is used when creating the data
   * 				source.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DISABLED</code> - This assignment isn't used when creating the data source.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DRAFT</code> - This assignment is an unfinished draft and isn't used when creating the
   * 				data source.</p>
   *             </li>
   *          </ul>
   */
  AssignmentStatus?: AssignmentStatus | string;

  /**
   * <p>The ARN for the IAM policy that is applied to the Amazon QuickSight users and groups specified in this assignment.</p>
   */
  PolicyArn?: string;

  /**
   * <p>The Amazon QuickSight users, groups, or both that the IAM policy is assigned to.</p>
   */
  Identities?: Record<string, string[]>;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

export enum IngestionType {
  FULL_REFRESH = "FULL_REFRESH",
  INCREMENTAL_REFRESH = "INCREMENTAL_REFRESH",
}

export interface CreateIngestionRequest {
  /**
   * <p>The ID of the dataset used in the ingestion.</p>
   */
  DataSetId: string | undefined;

  /**
   * <p>An ID for the ingestion.</p>
   */
  IngestionId: string | undefined;

  /**
   * <p>The Amazon Web Services account ID.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The type of ingestion that you want to create.</p>
   */
  IngestionType?: IngestionType | string;
}

export enum IngestionStatus {
  CANCELLED = "CANCELLED",
  COMPLETED = "COMPLETED",
  FAILED = "FAILED",
  INITIALIZED = "INITIALIZED",
  QUEUED = "QUEUED",
  RUNNING = "RUNNING",
}

export interface CreateIngestionResponse {
  /**
   * <p>The Amazon Resource Name (ARN) for the data ingestion.</p>
   */
  Arn?: string;

  /**
   * <p>An ID for the ingestion.</p>
   */
  IngestionId?: string;

  /**
   * <p>The ingestion status.</p>
   */
  IngestionStatus?: IngestionStatus | string;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

export enum IdentityStore {
  QUICKSIGHT = "QUICKSIGHT",
}

export interface CreateNamespaceRequest {
  /**
   * <p>The ID for the Amazon Web Services account that you want to create the Amazon QuickSight namespace in.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The name that you want to use to describe the new namespace.</p>
   */
  Namespace: string | undefined;

  /**
   * <p>Specifies the type of your user identity directory. Currently, this supports users
   *             with an identity type of <code>QUICKSIGHT</code>.</p>
   */
  IdentityStore: IdentityStore | string | undefined;

  /**
   * <p>The tags that you want to associate with the namespace that you're creating.</p>
   */
  Tags?: Tag[];
}

export enum NamespaceStatus {
  CREATED = "CREATED",
  CREATING = "CREATING",
  DELETING = "DELETING",
  NON_RETRYABLE_FAILURE = "NON_RETRYABLE_FAILURE",
  RETRYABLE_FAILURE = "RETRYABLE_FAILURE",
}

export interface CreateNamespaceResponse {
  /**
   * <p>The ARN of the Amazon QuickSight namespace you created. </p>
   */
  Arn?: string;

  /**
   * <p>The name of the new namespace that you created.</p>
   */
  Name?: string;

  /**
   * <p>The Amazon Web Services Region; that you want to use for the free SPICE capacity for the new namespace.
   *             This is set to the region that you run CreateNamespace in. </p>
   */
  CapacityRegion?: string;

  /**
   * <p>The status of the creation of the namespace. This is an asynchronous process. A status
   *             of <code>CREATED</code> means that your namespace is ready to use. If an error occurs,
   *             it indicates if the process is <code>retryable</code> or <code>non-retryable</code>. In
   *             the case of a non-retryable error, refer to the error message for follow-up
   *             tasks.</p>
   */
  CreationStatus?: NamespaceStatus | string;

  /**
   * <p>Specifies the type of your user identity directory. Currently, this supports users
   *             with an identity type of <code>QUICKSIGHT</code>.</p>
   */
  IdentityStore?: IdentityStore | string;

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
 * <p>Dataset schema.</p>
 */
export interface DataSetSchema {
  /**
   * <p>A structure containing the list of column schemas.</p>
   */
  ColumnSchemaList?: ColumnSchema[];
}

/**
 * <p>Dataset configuration.</p>
 */
export interface DataSetConfiguration {
  /**
   * <p>Placeholder.</p>
   */
  Placeholder?: string;

  /**
   * <p>Dataset schema.</p>
   */
  DataSetSchema?: DataSetSchema;

  /**
   * <p>A structure containing the list of column group schemas.</p>
   */
  ColumnGroupSchemaList?: ColumnGroupSchema[];
}

/**
 * <p>The detailed definition of a template.</p>
 */
export interface TemplateVersionDefinition {
  /**
   * <p>An array of dataset configurations. These configurations define the required columns for each dataset used within a template.</p>
   */
  DataSetConfigurations: DataSetConfiguration[] | undefined;

  /**
   * <p>An array of sheet definitions for a template.</p>
   */
  Sheets?: SheetDefinition[];

  /**
   * <p>An array of calculated field definitions for the template.</p>
   */
  CalculatedFields?: CalculatedField[];

  /**
   * <p>An array of parameter declarations for a template.</p>
   *          <p>
   *             <i>Parameters</i> are named variables that can transfer a value for use by an action or an object.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/parameters-in-quicksight.html">Parameters in Amazon QuickSight</a> in the
   *             <i>Amazon QuickSight User Guide</i>.
   *         </p>
   */
  ParameterDeclarations?: ParameterDeclaration[];

  /**
   * <p>Filter definitions for a template.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/filtering-visual-data.html">Filtering Data</a> in the <i>Amazon QuickSight User Guide</i>.
   *         </p>
   */
  FilterGroups?: FilterGroup[];

  /**
   * <p> An array of template-level column
   *             configurations. Column configurations are used to set default formatting for a column that's used throughout a template. </p>
   */
  ColumnConfigurations?: ColumnConfiguration[];

  /**
   * <p>The configuration for default analysis settings.</p>
   */
  AnalysisDefaults?: AnalysisDefaults;
}

/**
 * <p>The source analysis of the template.</p>
 */
export interface TemplateSourceAnalysis {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  Arn: string | undefined;

  /**
   * <p>A structure containing information about the dataset references used as placeholders
   *             in the template.</p>
   */
  DataSetReferences: DataSetReference[] | undefined;
}

/**
 * <p>The source template of the template.</p>
 */
export interface TemplateSourceTemplate {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  Arn: string | undefined;
}

/**
 * <p>The source entity of the template.</p>
 */
export interface TemplateSourceEntity {
  /**
   * <p>The source analysis, if it is based on an analysis.</p>
   */
  SourceAnalysis?: TemplateSourceAnalysis;

  /**
   * <p>The source template, if it is based on an template.</p>
   */
  SourceTemplate?: TemplateSourceTemplate;
}

export interface CreateTemplateRequest {
  /**
   * <p>The ID for the Amazon Web Services account that the group is in. You use the ID for the Amazon Web Services account that contains your Amazon QuickSight account.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>An ID for the template that you want to create. This template is unique per Amazon Web Services Region; in
   * 			each Amazon Web Services account.</p>
   */
  TemplateId: string | undefined;

  /**
   * <p>A display name for the template.</p>
   */
  Name?: string;

  /**
   * <p>A list of resource permissions to be set on the template. </p>
   */
  Permissions?: ResourcePermission[];

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
   */
  SourceEntity?: TemplateSourceEntity;

  /**
   * <p>Contains a map of the key-value pairs for the resource tag or tags assigned to the resource.</p>
   */
  Tags?: Tag[];

  /**
   * <p>A description of the current template version being created. This API operation creates the
   * 			first version of the template. Every time <code>UpdateTemplate</code> is called, a new
   * 			version is created. Each version of the template maintains a description of the version
   * 			in the <code>VersionDescription</code> field.</p>
   */
  VersionDescription?: string;

  /**
   * <p>The definition of a template.</p>
   *          <p>A definition is the data model of all features in a Dashboard, Template, or Analysis.</p>
   */
  Definition?: TemplateVersionDefinition;
}

export interface CreateTemplateResponse {
  /**
   * <p>The ARN for the template.</p>
   */
  Arn?: string;

  /**
   * <p>The ARN for the template, including the version information of
   * 			the first version.</p>
   */
  VersionArn?: string;

  /**
   * <p>The ID of the template.</p>
   */
  TemplateId?: string;

  /**
   * <p>The template creation status.</p>
   */
  CreationStatus?: ResourceStatus | string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;
}

export interface CreateTemplateAliasRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the template that you creating an alias for.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>An ID for the template.</p>
   */
  TemplateId: string | undefined;

  /**
   * <p>The name that you want to give to the template alias that you're creating. Don't start the
   * 			alias name with the <code>$</code> character. Alias names that start with <code>$</code>
   * 			are reserved by Amazon QuickSight. </p>
   */
  AliasName: string | undefined;

  /**
   * <p>The version number of the template.</p>
   */
  TemplateVersionNumber: number | undefined;
}

/**
 * <p>The template alias.</p>
 */
export interface TemplateAlias {
  /**
   * <p>The display name of the template alias.</p>
   */
  AliasName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the template alias.</p>
   */
  Arn?: string;

  /**
   * <p>The version number of the template alias.</p>
   */
  TemplateVersionNumber?: number;
}

export interface CreateTemplateAliasResponse {
  /**
   * <p>Information about the template alias.</p>
   */
  TemplateAlias?: TemplateAlias;

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
 * <p>The theme colors that are used for data colors in charts. The colors description is a
 *             hexadecimal color code that consists of six alphanumerical characters, prefixed with
 *                 <code>#</code>, for example #37BFF5. </p>
 */
export interface DataColorPalette {
  /**
   * <p>The hexadecimal codes for the colors.</p>
   */
  Colors?: string[];

  /**
   * <p>The minimum and maximum hexadecimal codes that describe a color gradient. </p>
   */
  MinMaxGradient?: string[];

  /**
   * <p>The hexadecimal code of a color that applies to charts where a lack of data is
   *             highlighted.</p>
   */
  EmptyFillColor?: string;
}

/**
 * <p>Display options related to tiles on a sheet.</p>
 */
export interface TileStyle {
  /**
   * <p>The border around a tile.</p>
   */
  Border?: BorderStyle;
}

/**
 * <p>The display options for gutter spacing between tiles on a sheet.</p>
 */
export interface GutterStyle {
  /**
   * <p>This Boolean value controls whether to display a gutter space between sheet tiles.
   *         </p>
   */
  Show?: boolean;
}

/**
 * <p>The display options for margins around the outside edge of sheets.</p>
 */
export interface MarginStyle {
  /**
   * <p>This Boolean value controls whether to display sheet margins.</p>
   */
  Show?: boolean;
}

/**
 * <p>The display options for the layout of tiles on a sheet.</p>
 */
export interface TileLayoutStyle {
  /**
   * <p>The gutter settings that apply between tiles. </p>
   */
  Gutter?: GutterStyle;

  /**
   * <p>The margin settings that apply around the outside edge of sheets.</p>
   */
  Margin?: MarginStyle;
}

/**
 * <p>The theme display options for sheets. </p>
 */
export interface SheetStyle {
  /**
   * <p>The display options for tiles.</p>
   */
  Tile?: TileStyle;

  /**
   * <p>The layout options for tiles.</p>
   */
  TileLayout?: TileLayoutStyle;
}

/**
 * <p>Determines the font settings.</p>
 */
export interface Font {
  /**
   * <p>Determines the font family settings.</p>
   */
  FontFamily?: string;
}

/**
 * <p>Determines the typography options.</p>
 */
export interface Typography {
  /**
   * <p>Determines the list of font families.</p>
   */
  FontFamilies?: Font[];
}

/**
 * <p>The theme colors that apply to UI and to charts, excluding data colors. The colors
 *             description is a hexadecimal color code that consists of six alphanumerical characters,
 *             prefixed with <code>#</code>, for example #37BFF5. For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/themes-in-quicksight.html">Using Themes in Amazon QuickSight</a> in the <i>Amazon QuickSight User
 *                 Guide.</i>
 *          </p>
 */
export interface UIColorPalette {
  /**
   * <p>The color of text and other foreground elements that appear over the primary
   *             background regions, such as grid lines, borders, table banding, icons, and so on.</p>
   */
  PrimaryForeground?: string;

  /**
   * <p>The background color that applies to visuals and other high emphasis UI.</p>
   */
  PrimaryBackground?: string;

  /**
   * <p>The foreground color that applies to any sheet title, sheet control text, or UI that
   *             appears over the secondary background.</p>
   */
  SecondaryForeground?: string;

  /**
   * <p>The background color that applies to the sheet background and sheet controls.</p>
   */
  SecondaryBackground?: string;

  /**
   * <p>This color is that applies to selected states and buttons.</p>
   */
  Accent?: string;

  /**
   * <p>The foreground color that applies to any text or other elements that appear over the
   *             accent color.</p>
   */
  AccentForeground?: string;

  /**
   * <p>The color that applies to error messages.</p>
   */
  Danger?: string;

  /**
   * <p>The foreground color that applies to any text or other elements that appear over the
   *             error color.</p>
   */
  DangerForeground?: string;

  /**
   * <p>This color that applies to warning and informational messages.</p>
   */
  Warning?: string;

  /**
   * <p>The foreground color that applies to any text or other elements that appear over the
   *             warning color.</p>
   */
  WarningForeground?: string;

  /**
   * <p>The color that applies to success messages, for example the check mark for a
   *             successful download.</p>
   */
  Success?: string;

  /**
   * <p>The foreground color that applies to any text or other elements that appear over the
   *             success color.</p>
   */
  SuccessForeground?: string;

  /**
   * <p>The color that applies to the names of fields that are identified as
   *             dimensions.</p>
   */
  Dimension?: string;

  /**
   * <p>The foreground color that applies to any text or other elements that appear over the
   *             dimension color.</p>
   */
  DimensionForeground?: string;

  /**
   * <p>The color that applies to the names of fields that are identified as measures.</p>
   */
  Measure?: string;

  /**
   * <p>The foreground color that applies to any text or other elements that appear over the
   *             measure color.</p>
   */
  MeasureForeground?: string;
}

/**
 * <p>The theme configuration. This configuration contains all of the display properties for
 *             a theme.</p>
 */
export interface ThemeConfiguration {
  /**
   * <p>Color properties that apply to chart data colors.</p>
   */
  DataColorPalette?: DataColorPalette;

  /**
   * <p>Color properties that apply to the UI and to charts, excluding the colors that apply
   *             to data. </p>
   */
  UIColorPalette?: UIColorPalette;

  /**
   * <p>Display options related to sheets.</p>
   */
  Sheet?: SheetStyle;

  /**
   * <p>Determines the typography options.</p>
   */
  Typography?: Typography;
}

export interface CreateThemeRequest {
  /**
   * <p>The ID of the Amazon Web Services account where you want to store the new theme. </p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>An ID for the theme that you want to create. The theme ID is unique per Amazon Web Services Region in
   * 			each Amazon Web Services account.</p>
   */
  ThemeId: string | undefined;

  /**
   * <p>A display name for the theme.</p>
   */
  Name: string | undefined;

  /**
   * <p>The ID of the theme that a custom theme will inherit from. All themes inherit from one of
   * 			the starting themes defined by Amazon QuickSight. For a list of the starting themes, use
   * 				<code>ListThemes</code> or choose <b>Themes</b> from
   * 			within an analysis. </p>
   */
  BaseThemeId: string | undefined;

  /**
   * <p>A description of the first version of the theme that you're creating. Every time
   * 				<code>UpdateTheme</code> is called, a new version is created. Each version of the
   * 			theme has a description of the version in the <code>VersionDescription</code>
   * 			field.</p>
   */
  VersionDescription?: string;

  /**
   * <p>The theme configuration, which contains the theme display properties.</p>
   */
  Configuration: ThemeConfiguration | undefined;

  /**
   * <p>A valid grouping of resource permissions to apply to the new theme.
   * 			</p>
   */
  Permissions?: ResourcePermission[];

  /**
   * <p>A map of the key-value pairs for the resource tag or tags that you want to add to the
   * 			resource.</p>
   */
  Tags?: Tag[];
}

export interface CreateThemeResponse {
  /**
   * <p>The Amazon Resource Name (ARN) for the theme.</p>
   */
  Arn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) for the new theme.</p>
   */
  VersionArn?: string;

  /**
   * <p>The ID of the theme.</p>
   */
  ThemeId?: string;

  /**
   * <p>The theme creation status.</p>
   */
  CreationStatus?: ResourceStatus | string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;
}

export interface CreateThemeAliasRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the theme for the new theme alias.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>An ID for the theme alias.</p>
   */
  ThemeId: string | undefined;

  /**
   * <p>The name that you want to give to the theme alias that you are creating. The
   * 			alias name can't begin with a <code>$</code>. Alias names that start with <code>$</code>
   * 			are reserved by Amazon QuickSight. </p>
   */
  AliasName: string | undefined;

  /**
   * <p>The version number of the theme.</p>
   */
  ThemeVersionNumber: number | undefined;
}

/**
 * <p>An alias for a theme.</p>
 */
export interface ThemeAlias {
  /**
   * <p>The Amazon Resource Name (ARN) of the theme alias.</p>
   */
  Arn?: string;

  /**
   * <p>The display name of the theme alias.</p>
   */
  AliasName?: string;

  /**
   * <p>The version number of the theme alias.</p>
   */
  ThemeVersionNumber?: number;
}

export interface CreateThemeAliasResponse {
  /**
   * <p>Information about the theme alias.</p>
   */
  ThemeAlias?: ThemeAlias;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;
}

export enum DashboardErrorType {
  ACCESS_DENIED = "ACCESS_DENIED",
  COLUMN_GEOGRAPHIC_ROLE_MISMATCH = "COLUMN_GEOGRAPHIC_ROLE_MISMATCH",
  COLUMN_REPLACEMENT_MISSING = "COLUMN_REPLACEMENT_MISSING",
  COLUMN_TYPE_MISMATCH = "COLUMN_TYPE_MISMATCH",
  DATA_SET_NOT_FOUND = "DATA_SET_NOT_FOUND",
  INTERNAL_FAILURE = "INTERNAL_FAILURE",
  PARAMETER_NOT_FOUND = "PARAMETER_NOT_FOUND",
  PARAMETER_TYPE_INVALID = "PARAMETER_TYPE_INVALID",
  PARAMETER_VALUE_INCOMPATIBLE = "PARAMETER_VALUE_INCOMPATIBLE",
  SOURCE_NOT_FOUND = "SOURCE_NOT_FOUND",
}

/**
 * <p>Dashboard error.</p>
 */
export interface DashboardError {
  /**
   * <p>Type.</p>
   */
  Type?: DashboardErrorType | string;

  /**
   * <p>Message.</p>
   */
  Message?: string;

  /**
   * <p></p>
   */
  ViolatedEntities?: Entity[];
}

/**
 * <p>Dashboard version.</p>
 */
export interface DashboardVersion {
  /**
   * <p>The time that this dashboard version was created.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>Errors associated with this dashboard version.</p>
   */
  Errors?: DashboardError[];

  /**
   * <p>Version number for this version of the dashboard.</p>
   */
  VersionNumber?: number;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: ResourceStatus | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  Arn?: string;

  /**
   * <p>Source entity ARN.</p>
   */
  SourceEntityArn?: string;

  /**
   * <p>The Amazon Resource Numbers (ARNs) for the datasets that are associated with this
   *             version of the dashboard.</p>
   */
  DataSetArns?: string[];

  /**
   * <p>Description.</p>
   */
  Description?: string;

  /**
   * <p>The ARN of the theme associated with a version of the dashboard.</p>
   */
  ThemeArn?: string;

  /**
   * <p>A list of the associated sheets with the unique identifier and name of each sheet.</p>
   */
  Sheets?: Sheet[];
}

/**
 * <p>Dashboard.</p>
 */
export interface Dashboard {
  /**
   * <p>Dashboard ID.</p>
   */
  DashboardId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  Arn?: string;

  /**
   * <p>A display name for the dashboard.</p>
   */
  Name?: string;

  /**
   * <p>Version.</p>
   */
  Version?: DashboardVersion;

  /**
   * <p>The time that this dashboard was created.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>The last time that this dashboard was published.</p>
   */
  LastPublishedTime?: Date;

  /**
   * <p>The last time that this dashboard was updated.</p>
   */
  LastUpdatedTime?: Date;
}

export enum DashboardFilterAttribute {
  DASHBOARD_NAME = "DASHBOARD_NAME",
  DIRECT_QUICKSIGHT_OWNER = "DIRECT_QUICKSIGHT_OWNER",
  DIRECT_QUICKSIGHT_SOLE_OWNER = "DIRECT_QUICKSIGHT_SOLE_OWNER",
  DIRECT_QUICKSIGHT_VIEWER_OR_OWNER = "DIRECT_QUICKSIGHT_VIEWER_OR_OWNER",
  QUICKSIGHT_OWNER = "QUICKSIGHT_OWNER",
  QUICKSIGHT_USER = "QUICKSIGHT_USER",
  QUICKSIGHT_VIEWER_OR_OWNER = "QUICKSIGHT_VIEWER_OR_OWNER",
}

/**
 * <p>A filter that you apply when searching for dashboards. </p>
 */
export interface DashboardSearchFilter {
  /**
   * <p>The comparison operator that you want to use as a filter, for example  <code>"Operator": "StringEquals"</code>. Valid values are <code>"StringEquals"</code> and  <code>"StringLike"</code>.</p>
   *          <p>If you set the operator value to <code>"StringEquals"</code>, you need to provide an ownership related filter in the <code>"NAME"</code> field and the arn of the user or group whose folders you want to search in the <code>"Value"</code> field. For example,  <code>"Name":"DIRECT_QUICKSIGHT_OWNER", "Operator": "StringEquals", "Value": "arn:aws:quicksight:us-east-1:1:user/default/UserName1"</code>.</p>
   *          <p>If you set the value to <code>"StringLike"</code>, you need to provide the name of the folders you are searching for. For example, <code>"Name":"DASHBOARD_NAME", "Operator": "StringLike", "Value": "Test"</code>. The <code>"StringLike"</code> operator only supports the <code>NAME</code> value <code>DASHBOARD_NAME</code>.</p>
   */
  Operator: FilterOperator | string | undefined;

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
   */
  Name?: DashboardFilterAttribute | string;

  /**
   * <p>The value of the named item, in this case <code>QUICKSIGHT_USER</code>, that you want
   *             to use as a filter, for example, <code>"Value":
   *             "arn:aws:quicksight:us-east-1:1:user/default/UserName1"</code>. </p>
   */
  Value?: string;
}

/**
 * <p>Dashboard summary.</p>
 */
export interface DashboardSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  Arn?: string;

  /**
   * <p>Dashboard ID.</p>
   */
  DashboardId?: string;

  /**
   * <p>A display name for the dashboard.</p>
   */
  Name?: string;

  /**
   * <p>The time that this dashboard was created.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>The last time that this dashboard was updated.</p>
   */
  LastUpdatedTime?: Date;

  /**
   * <p>Published version number.</p>
   */
  PublishedVersionNumber?: number;

  /**
   * <p>The last time that this dashboard was published.</p>
   */
  LastPublishedTime?: Date;
}

/**
 * <p>Dashboard version summary.</p>
 */
export interface DashboardVersionSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  Arn?: string;

  /**
   * <p>The time that this dashboard version was created.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>Version number.</p>
   */
  VersionNumber?: number;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: ResourceStatus | string;

  /**
   * <p>Source entity ARN.</p>
   */
  SourceEntityArn?: string;

  /**
   * <p>Description.</p>
   */
  Description?: string;
}

/**
 * <p>Output column.</p>
 */
export interface OutputColumn {
  /**
   * <p>A display name for the dataset.</p>
   */
  Name?: string;

  /**
   * <p>A description for a column.</p>
   */
  Description?: string;

  /**
   * <p>Type.</p>
   */
  Type?: ColumnDataType | string;
}

/**
 * <p>Dataset.</p>
 */
export interface DataSet {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  Arn?: string;

  /**
   * <p>The ID of the dataset.</p>
   */
  DataSetId?: string;

  /**
   * <p>A display name for the dataset.</p>
   */
  Name?: string;

  /**
   * <p>The time that this dataset was created.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>The last time that this dataset was updated.</p>
   */
  LastUpdatedTime?: Date;

  /**
   * <p>Declares the physical tables that are available in the underlying data sources.</p>
   */
  PhysicalTableMap?: Record<string, PhysicalTable>;

  /**
   * <p>Configures the combination and transformation of the data from the physical
   *             tables.</p>
   */
  LogicalTableMap?: Record<string, LogicalTable>;

  /**
   * <p>The list of columns after all transforms. These columns are available in templates,
   *             analyses, and dashboards.</p>
   */
  OutputColumns?: OutputColumn[];

  /**
   * <p>A value that indicates whether you want to import the data into SPICE.</p>
   */
  ImportMode?: DataSetImportMode | string;

  /**
   * <p>The amount of SPICE capacity used by this dataset. This is 0 if the dataset isn't
   *             imported into SPICE.</p>
   */
  ConsumedSpiceCapacityInBytes?: number;

  /**
   * <p>Groupings of columns that work together in certain Amazon QuickSight features.
   *             Currently, only geospatial hierarchy is supported.</p>
   */
  ColumnGroups?: ColumnGroup[];

  /**
   * <p>The folder that contains fields and nested subfolders for your dataset.</p>
   */
  FieldFolders?: Record<string, FieldFolder>;

  /**
   * <p>The row-level security configuration for the dataset.</p>
   */
  RowLevelPermissionDataSet?: RowLevelPermissionDataSet;

  /**
   * <p>The element you can use to define tags for row-level security.</p>
   */
  RowLevelPermissionTagConfiguration?: RowLevelPermissionTagConfiguration;

  /**
   * <p>A set of one or more definitions of a <code>
   *                <a href="https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ColumnLevelPermissionRule.html">ColumnLevelPermissionRule</a>
   *             </code>.</p>
   */
  ColumnLevelPermissionRules?: ColumnLevelPermissionRule[];

  /**
   * <p>The usage configuration to apply to child datasets that reference this dataset as a source.</p>
   */
  DataSetUsageConfiguration?: DataSetUsageConfiguration;
}

export enum DataSetFilterAttribute {
  DATASET_NAME = "DATASET_NAME",
  DIRECT_QUICKSIGHT_OWNER = "DIRECT_QUICKSIGHT_OWNER",
  DIRECT_QUICKSIGHT_SOLE_OWNER = "DIRECT_QUICKSIGHT_SOLE_OWNER",
  DIRECT_QUICKSIGHT_VIEWER_OR_OWNER = "DIRECT_QUICKSIGHT_VIEWER_OR_OWNER",
  QUICKSIGHT_OWNER = "QUICKSIGHT_OWNER",
  QUICKSIGHT_VIEWER_OR_OWNER = "QUICKSIGHT_VIEWER_OR_OWNER",
}

/**
 * <p>A filter that you apply when searching for datasets.</p>
 */
export interface DataSetSearchFilter {
  /**
   * <p>The comparison operator that you want to use as a filter, for example <code>"Operator": "StringEquals"</code>. Valid values are <code>"StringEquals"</code> and <code>"StringLike"</code>.</p>
   *          <p>If you set the operator value to <code>"StringEquals"</code>, you need to provide an ownership related filter in the <code>"NAME"</code> field and the arn of the user or group whose datasets you want to search in the <code>"Value"</code> field. For example, <code>"Name":"QUICKSIGHT_OWNER", "Operator": "StringEquals", "Value": "arn:aws:quicksight:us-east- 1:1:user/default/UserName1"</code>.</p>
   *          <p>If you set the value to <code>"StringLike"</code>, you need to provide the name of the datasets you are searching for. For example, <code>"Name":"DATASET_NAME", "Operator": "StringLike", "Value": "Test"</code>. The <code>"StringLike"</code> operator only supports the <code>NAME</code> value <code>DATASET_NAME</code>.</p>
   */
  Operator: FilterOperator | string | undefined;

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
   */
  Name: DataSetFilterAttribute | string | undefined;

  /**
   * <p>The value of the named item, in this case <code>QUICKSIGHT_OWNER</code>, that you want
   *             to use as a filter, for example, <code>"Value":
   *             "arn:aws:quicksight:us-east-1:1:user/default/UserName1"</code>.</p>
   */
  Value: string | undefined;
}

/**
 * <p>Dataset summary.</p>
 */
export interface DataSetSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the dataset.</p>
   */
  Arn?: string;

  /**
   * <p>The ID of the dataset.</p>
   */
  DataSetId?: string;

  /**
   * <p>A display name for the dataset.</p>
   */
  Name?: string;

  /**
   * <p>The time that this dataset was created.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>The last time that this dataset was updated.</p>
   */
  LastUpdatedTime?: Date;

  /**
   * <p>A value that indicates whether you want to import the data into SPICE.</p>
   */
  ImportMode?: DataSetImportMode | string;

  /**
   * <p>The row-level security configuration for the dataset.</p>
   */
  RowLevelPermissionDataSet?: RowLevelPermissionDataSet;

  /**
   * <p>Whether or not the row level permission tags are applied.</p>
   */
  RowLevelPermissionTagConfigurationApplied?: boolean;

  /**
   * <p>A value that indicates if the dataset has column level permission configured.</p>
   */
  ColumnLevelPermissionRulesApplied?: boolean;
}

export enum DataSourceErrorInfoType {
  ACCESS_DENIED = "ACCESS_DENIED",
  CONFLICT = "CONFLICT",
  COPY_SOURCE_NOT_FOUND = "COPY_SOURCE_NOT_FOUND",
  ENGINE_VERSION_NOT_SUPPORTED = "ENGINE_VERSION_NOT_SUPPORTED",
  GENERIC_SQL_FAILURE = "GENERIC_SQL_FAILURE",
  TIMEOUT = "TIMEOUT",
  UNKNOWN = "UNKNOWN",
  UNKNOWN_HOST = "UNKNOWN_HOST",
}

/**
 * <p>Error information for the data source creation or update.</p>
 */
export interface DataSourceErrorInfo {
  /**
   * <p>Error type.</p>
   */
  Type?: DataSourceErrorInfoType | string;

  /**
   * <p>Error message.</p>
   */
  Message?: string;
}

/**
 * <p>The structure of a data source.</p>
 */
export interface DataSource {
  /**
   * <p>The Amazon Resource Name (ARN) of the data source.</p>
   */
  Arn?: string;

  /**
   * <p>The ID of the data source. This ID is unique per Amazon Web Services Region for each
   *             Amazon Web Services account.</p>
   */
  DataSourceId?: string;

  /**
   * <p>A display name for the data source.</p>
   */
  Name?: string;

  /**
   * <p>The type of the data source. This type indicates which database engine the data source
   *             connects to.</p>
   */
  Type?: DataSourceType | string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: ResourceStatus | string;

  /**
   * <p>The time that this data source was created.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>The last time that this data source was updated.</p>
   */
  LastUpdatedTime?: Date;

  /**
   * <p>The parameters that Amazon QuickSight uses to connect to your underlying source. This
   *             is a variant type structure. For this structure to be valid, only one of the attributes
   *             can be non-null.</p>
   */
  DataSourceParameters?: DataSourceParameters;

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
   */
  AlternateDataSourceParameters?: DataSourceParameters[];

  /**
   * <p>The VPC connection information. You need to use this parameter only when you want
   *             Amazon QuickSight to use a VPC connection when connecting to your underlying source.</p>
   */
  VpcConnectionProperties?: VpcConnectionProperties;

  /**
   * <p>Secure Socket Layer (SSL) properties that apply when Amazon QuickSight connects to your
   *             underlying source.</p>
   */
  SslProperties?: SslProperties;

  /**
   * <p>Error information from the last update or the creation of the data source.</p>
   */
  ErrorInfo?: DataSourceErrorInfo;

  /**
   * <p>The Amazon Resource Name (ARN) of the secret associated with the data source in Amazon Secrets Manager.</p>
   */
  SecretArn?: string;
}

export enum DataSourceFilterAttribute {
  DATASOURCE_NAME = "DATASOURCE_NAME",
  DIRECT_QUICKSIGHT_OWNER = "DIRECT_QUICKSIGHT_OWNER",
  DIRECT_QUICKSIGHT_SOLE_OWNER = "DIRECT_QUICKSIGHT_SOLE_OWNER",
  DIRECT_QUICKSIGHT_VIEWER_OR_OWNER = "DIRECT_QUICKSIGHT_VIEWER_OR_OWNER",
}

/**
 * <p>A filter that you apply when searching for data sources.</p>
 */
export interface DataSourceSearchFilter {
  /**
   * <p>The comparison operator that you want to use as a filter, for example <code>"Operator": "StringEquals"</code>. Valid values are <code>"StringEquals"</code> and <code>"StringLike"</code>.</p>
   *          <p>If you set the operator value to <code>"StringEquals"</code>, you need to provide an ownership related filter in the <code>"NAME"</code> field and the arn of the user or group whose data sources you want to search in the <code>"Value"</code> field. For example, <code>"Name":"DIRECT_QUICKSIGHT_OWNER", "Operator": "StringEquals", "Value": "arn:aws:quicksight:us-east-1:1:user/default/UserName1"</code>.</p>
   *          <p>If you set the value to <code>"StringLike"</code>, you need to provide the name of the data sources you are searching for. For example, <code>"Name":"DATASOURCE_NAME", "Operator": "StringLike", "Value": "Test"</code>. The <code>"StringLike"</code> operator only supports the <code>NAME</code> value <code>DATASOURCE_NAME</code>.</p>
   */
  Operator: FilterOperator | string | undefined;

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
   */
  Name: DataSourceFilterAttribute | string | undefined;

  /**
   * <p>The value of the named item, for example <code>DIRECT_QUICKSIGHT_OWNER</code>, that you want
   *             to use as a filter, for example, <code>"Value":
   *             "arn:aws:quicksight:us-east-1:1:user/default/UserName1"</code>.</p>
   */
  Value: string | undefined;
}

/**
 * <p>A <code>DataSourceSummary</code> object that returns a summary of a data source.</p>
 */
export interface DataSourceSummary {
  /**
   * <p>The arn of the datasource.</p>
   */
  Arn?: string;

  /**
   * <p>The unique ID of the data source.</p>
   */
  DataSourceId?: string;

  /**
   * <p>The name of the data source.</p>
   */
  Name?: string;

  /**
   * <p>The type of the data source.</p>
   */
  Type?: DataSourceType | string;

  /**
   * <p>The date and time that the data source was created. This value is expressed in MM-DD-YYYY HH:MM:SS format.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>The date and time the data source was last updated. This value is expressed in MM-DD-YYYY HH:MM:SS format.</p>
   */
  LastUpdatedTime?: Date;
}

export interface DeleteAccountCustomizationRequest {
  /**
   * <p>The ID for the Amazon Web Services account that you want to delete Amazon QuickSight customizations from in
   *             this Amazon Web Services Region.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The Amazon QuickSight namespace that you're deleting the customizations from.</p>
   */
  Namespace?: string;
}

export interface DeleteAccountCustomizationResponse {
  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

export interface DeleteAccountSubscriptionRequest {
  /**
   * <p>The Amazon Web Services account ID of the account that you want to delete.</p>
   */
  AwsAccountId: string | undefined;
}

export interface DeleteAccountSubscriptionResponse {
  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

export interface DeleteAnalysisRequest {
  /**
   * <p>The ID of the Amazon Web Services account where you want to delete an analysis.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID of the analysis that you're deleting.</p>
   */
  AnalysisId: string | undefined;

  /**
   * <p>A value that specifies the number of days that Amazon QuickSight waits before it deletes the
   *             analysis. You can't use this parameter with the <code>ForceDeleteWithoutRecovery</code>
   *             option in the same API call. The default value is 30.</p>
   */
  RecoveryWindowInDays?: number;

  /**
   * <p>This option defaults to the value <code>NoForceDeleteWithoutRecovery</code>. To
   *             immediately delete the analysis, add the <code>ForceDeleteWithoutRecovery</code> option.
   *             You can't restore an analysis after it's deleted. </p>
   */
  ForceDeleteWithoutRecovery?: boolean;
}

export interface DeleteAnalysisResponse {
  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * <p>The Amazon Resource Name (ARN) of the deleted analysis.</p>
   */
  Arn?: string;

  /**
   * <p>The ID of the deleted analysis.</p>
   */
  AnalysisId?: string;

  /**
   * <p>The date and time that the analysis is scheduled to be deleted.</p>
   */
  DeletionTime?: Date;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;
}

export interface DeleteDashboardRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the dashboard that you're
   *             deleting.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the dashboard.</p>
   */
  DashboardId: string | undefined;

  /**
   * <p>The version number of the dashboard. If the version number property is provided, only
   *             the specified version of the dashboard is deleted.</p>
   */
  VersionNumber?: number;
}

export interface DeleteDashboardResponse {
  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * <p>The Secure Socket Layer (SSL) properties that apply for the resource.</p>
   */
  Arn?: string;

  /**
   * <p>The ID of the dashboard.</p>
   */
  DashboardId?: string;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;
}

export interface DeleteDataSetRequest {
  /**
   * <p>The Amazon Web Services account ID.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the dataset that you want to create. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
   */
  DataSetId: string | undefined;
}

export interface DeleteDataSetResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the dataset.</p>
   */
  Arn?: string;

  /**
   * <p>The ID for the dataset that you want to create. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
   */
  DataSetId?: string;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

export interface DeleteDataSourceRequest {
  /**
   * <p>The Amazon Web Services account ID.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID of the data source. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
   */
  DataSourceId: string | undefined;
}

export interface DeleteDataSourceResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the data source that you deleted.</p>
   */
  Arn?: string;

  /**
   * <p>The ID of the data source. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
   */
  DataSourceId?: string;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

export interface DeleteFolderRequest {
  /**
   * <p>The ID for the Amazon Web Services account that contains the folder.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID of the folder.</p>
   */
  FolderId: string | undefined;
}

export interface DeleteFolderResponse {
  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * <p>The Amazon Resource Name of the deleted folder.</p>
   */
  Arn?: string;

  /**
   * <p>The ID of the folder.</p>
   */
  FolderId?: string;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;
}

export interface DeleteFolderMembershipRequest {
  /**
   * <p>The ID for the Amazon Web Services account that contains the folder.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The Folder ID.</p>
   */
  FolderId: string | undefined;

  /**
   * <p>The ID of the asset (the dashboard, analysis, or dataset) that you want to delete.</p>
   */
  MemberId: string | undefined;

  /**
   * <p>The type of the member, including <code>DASHBOARD</code>, <code>ANALYSIS</code>, and <code>DATASET</code>
   *          </p>
   */
  MemberType: MemberType | string | undefined;
}

export interface DeleteFolderMembershipResponse {
  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;
}

export interface DeleteGroupRequest {
  /**
   * <p>The name of the group that you want to delete.</p>
   */
  GroupName: string | undefined;

  /**
   * <p>The ID for the Amazon Web Services account that the group is in. Currently, you use the ID for the
   * 			Amazon Web Services account that contains your Amazon QuickSight account.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The namespace of the group that you want to delete.</p>
   */
  Namespace: string | undefined;
}

export interface DeleteGroupResponse {
  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

export interface DeleteGroupMembershipRequest {
  /**
   * <p>The name of the user that you want to delete from the group membership.</p>
   */
  MemberName: string | undefined;

  /**
   * <p>The name of the group that you want to delete the user from.</p>
   */
  GroupName: string | undefined;

  /**
   * <p>The ID for the Amazon Web Services account that the group is in. Currently, you use the ID for the
   * 			Amazon Web Services account that contains your Amazon QuickSight account.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The namespace of the group that you want to remove a user from.</p>
   */
  Namespace: string | undefined;
}

export interface DeleteGroupMembershipResponse {
  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

export interface DeleteIAMPolicyAssignmentRequest {
  /**
   * <p>The Amazon Web Services account ID where you want to delete the IAM policy assignment.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The name of the assignment. </p>
   */
  AssignmentName: string | undefined;

  /**
   * <p>The namespace that contains the assignment.</p>
   */
  Namespace: string | undefined;
}

export interface DeleteIAMPolicyAssignmentResponse {
  /**
   * <p>The name of the assignment. </p>
   */
  AssignmentName?: string;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

export interface DeleteNamespaceRequest {
  /**
   * <p>The ID for the Amazon Web Services account that you want to delete the Amazon QuickSight namespace from.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The namespace that you want to delete.</p>
   */
  Namespace: string | undefined;
}

export interface DeleteNamespaceResponse {
  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

export interface DeleteTemplateRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the template that you're deleting.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>An ID for the template you want to delete.</p>
   */
  TemplateId: string | undefined;

  /**
   * <p>Specifies the version of the template that you want to delete.
   * 			If you don't provide a version number, <code>DeleteTemplate</code> deletes all versions of the template.
   * 	 </p>
   */
  VersionNumber?: number;
}

export interface DeleteTemplateResponse {
  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  Arn?: string;

  /**
   * <p>An ID for the template.</p>
   */
  TemplateId?: string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

export interface DeleteTemplateAliasRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the item to delete.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the template that the specified alias is for.</p>
   */
  TemplateId: string | undefined;

  /**
   * <p>The name for the template alias. To delete a specific alias, you delete the version that the
   * 			alias points to. You can specify the alias name, or specify the latest version of the
   * 			template by providing the keyword <code>$LATEST</code> in the <code>AliasName</code>
   * 			parameter. </p>
   */
  AliasName: string | undefined;
}

export interface DeleteTemplateAliasResponse {
  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * <p>An ID for the template associated with the deletion.</p>
   */
  TemplateId?: string;

  /**
   * <p>The name for the template alias.</p>
   */
  AliasName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the template you want to delete.</p>
   */
  Arn?: string;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;
}

export interface DeleteThemeRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the theme that you're deleting.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>An ID for the theme that you want to delete.</p>
   */
  ThemeId: string | undefined;

  /**
   * <p>The version of the theme that you want to delete. </p>
   *          <p>
   *             <b>Note:</b> If you don't provide a version number, you're
   * 			using this call to <code>DeleteTheme</code> to delete all versions of the theme.</p>
   */
  VersionNumber?: number;
}

export interface DeleteThemeResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  Arn?: string;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * <p>An ID for the theme.</p>
   */
  ThemeId?: string;
}

export interface DeleteThemeAliasRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the theme alias to delete.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the theme that the specified alias is for.</p>
   */
  ThemeId: string | undefined;

  /**
   * <p>The unique name for the theme alias to delete.</p>
   */
  AliasName: string | undefined;
}

export interface DeleteThemeAliasResponse {
  /**
   * <p>The name for the theme alias.</p>
   */
  AliasName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the theme resource using the deleted alias.</p>
   */
  Arn?: string;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * <p>An ID for the theme associated with the deletion.</p>
   */
  ThemeId?: string;
}

export interface DeleteUserRequest {
  /**
   * <p>The name of the user that you want to delete.</p>
   */
  UserName: string | undefined;

  /**
   * <p>The ID for the Amazon Web Services account that the user is in. Currently, you use the ID for the
   * 			Amazon Web Services account that contains your Amazon QuickSight account.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The namespace. Currently, you should set this to <code>default</code>.</p>
   */
  Namespace: string | undefined;
}

export interface DeleteUserResponse {
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
 * <p></p>
 */
export interface DeleteUserByPrincipalIdRequest {
  /**
   * <p>The principal ID of the user.</p>
   */
  PrincipalId: string | undefined;

  /**
   * <p>The ID for the Amazon Web Services account that the user is in. Currently, you use the ID for the
   * 			Amazon Web Services account that contains your Amazon QuickSight account.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The namespace. Currently, you should set this to <code>default</code>.</p>
   */
  Namespace: string | undefined;
}

export interface DeleteUserByPrincipalIdResponse {
  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

export interface DescribeAccountCustomizationRequest {
  /**
   * <p>The ID for the Amazon Web Services account that you want to describe Amazon QuickSight customizations
   *             for.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The Amazon QuickSight namespace that you want to describe Amazon QuickSight customizations
   *             for.</p>
   */
  Namespace?: string;

  /**
   * <p>The <code>Resolved</code> flag works with the other parameters to determine which view
   *             of Amazon QuickSight customizations is returned. You can add this flag to your command to use
   *             the same view that Amazon QuickSight uses to identify which customizations to apply to the
   *             console. Omit this flag, or set it to <code>no-resolved</code>, to reveal customizations
   *             that are configured at different levels. </p>
   */
  Resolved?: boolean;
}

export interface DescribeAccountCustomizationResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the customization that's associated with this Amazon Web Services account.</p>
   */
  Arn?: string;

  /**
   * <p>The ID for the Amazon Web Services account that you're describing.</p>
   */
  AwsAccountId?: string;

  /**
   * <p>The Amazon QuickSight namespace that you're describing. </p>
   */
  Namespace?: string;

  /**
   * <p>The Amazon QuickSight customizations that exist in the current Amazon Web Services Region. </p>
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

export interface DescribeAccountSettingsRequest {
  /**
   * <p>The ID for the Amazon Web Services account that contains the settings that you want to list.</p>
   */
  AwsAccountId: string | undefined;
}

export interface DescribeAccountSettingsResponse {
  /**
   * <p>The Amazon QuickSight settings for this Amazon Web Services account. This information
   *             includes the edition of Amazon Amazon QuickSight that you subscribed to (Standard or
   *             Enterprise) and the notification email for the Amazon QuickSight subscription. </p>
   *          <p>In the QuickSight console, the Amazon QuickSight subscription is sometimes referred to
   *             as a QuickSight "account" even though it's technically not an account by
   *             itself. Instead, it's a subscription to the Amazon QuickSight service for your
   *                 Amazon Web Services account. The edition that you subscribe to applies to Amazon QuickSight in every Amazon Web Services Region where you use it.</p>
   */
  AccountSettings?: AccountSettings;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

export interface DescribeAccountSubscriptionRequest {
  /**
   * <p>The Amazon Web Services account ID associated with your Amazon QuickSight account.</p>
   */
  AwsAccountId: string | undefined;
}

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
   */
  AccountInfo?: AccountInfo;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;
}

export interface DescribeAnalysisRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the analysis. You must be using the
   *             Amazon Web Services account that the analysis is in.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID of the analysis that you're describing. The ID is part of the URL of the
   *             analysis.</p>
   */
  AnalysisId: string | undefined;
}

export interface DescribeAnalysisResponse {
  /**
   * <p>A metadata structure that contains summary information for the analysis that you're
   *             describing.</p>
   */
  Analysis?: Analysis;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;
}

export interface DescribeAnalysisDefinitionRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the analysis. You must be using the
   *             Amazon Web Services account that the analysis is in.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID of the analysis that you're describing. The ID is part of the URL of the
   *             analysis.</p>
   */
  AnalysisId: string | undefined;
}

export interface DescribeAnalysisDefinitionResponse {
  /**
   * <p>The ID of the analysis described.</p>
   */
  AnalysisId?: string;

  /**
   * <p>The descriptive name of the analysis.</p>
   */
  Name?: string;

  /**
   * <p>Errors associated with the analysis.</p>
   */
  Errors?: AnalysisError[];

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
   */
  ResourceStatus?: ResourceStatus | string;

  /**
   * <p>The ARN of the theme of the analysis.</p>
   */
  ThemeArn?: string;

  /**
   * <p>The definition of an analysis.</p>
   *          <p>A definition is the data model of all features in a Dashboard, Template, or Analysis.</p>
   */
  Definition?: AnalysisDefinition;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;
}

export interface DescribeAnalysisPermissionsRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the analysis whose permissions you're
   *             describing. You must be using the Amazon Web Services account that the analysis is in.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID of the analysis whose permissions you're describing. The ID is part of the
   *             analysis URL.</p>
   */
  AnalysisId: string | undefined;
}

export interface DescribeAnalysisPermissionsResponse {
  /**
   * <p>The ID of the analysis whose permissions you're describing.</p>
   */
  AnalysisId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the analysis whose permissions you're
   *             describing.</p>
   */
  AnalysisArn?: string;

  /**
   * <p>A structure that describes the principals and the resource-level permissions on an
   *             analysis.</p>
   */
  Permissions?: ResourcePermission[];

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;
}

export interface DescribeDashboardRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the dashboard that you're
   *             describing.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the dashboard.</p>
   */
  DashboardId: string | undefined;

  /**
   * <p>The version number for the dashboard. If a version number isn't passed, the
   *             latest published dashboard version is described. </p>
   */
  VersionNumber?: number;

  /**
   * <p>The alias name.</p>
   */
  AliasName?: string;
}

export interface DescribeDashboardResponse {
  /**
   * <p>Information about the dashboard.</p>
   */
  Dashboard?: Dashboard;

  /**
   * <p>The HTTP status of this request.</p>
   */
  Status?: number;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;
}

export interface DescribeDashboardDefinitionRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the dashboard that you're
   *             describing.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the dashboard.</p>
   */
  DashboardId: string | undefined;

  /**
   * <p>The version number for the dashboard. If a version number isn't passed, the
   *             latest published dashboard version is described. </p>
   */
  VersionNumber?: number;

  /**
   * <p>The alias name.</p>
   */
  AliasName?: string;
}

export interface DescribeDashboardDefinitionResponse {
  /**
   * <p>The ID of the dashboard described.</p>
   */
  DashboardId?: string;

  /**
   * <p>Errors associated with this dashboard version.</p>
   */
  Errors?: DashboardError[];

  /**
   * <p>The display name of the dashboard.</p>
   */
  Name?: string;

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
   */
  ResourceStatus?: ResourceStatus | string;

  /**
   * <p>The ARN of the theme of the dashboard.</p>
   */
  ThemeArn?: string;

  /**
   * <p>The definition of a dashboard.</p>
   *          <p>A definition is the data model of all features in a Dashboard, Template, or Analysis.</p>
   */
  Definition?: DashboardVersionDefinition;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;
}

export interface DescribeDashboardPermissionsRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the dashboard that you're describing
   *             permissions for.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the dashboard, also added to the IAM policy.</p>
   */
  DashboardId: string | undefined;
}

/**
 * <p>A structure that contains the configuration of a shareable link to the dashboard.</p>
 */
export interface LinkSharingConfiguration {
  /**
   * <p>A structure that contains the permissions of a shareable link.</p>
   */
  Permissions?: ResourcePermission[];
}

export interface DescribeDashboardPermissionsResponse {
  /**
   * <p>The ID for the dashboard.</p>
   */
  DashboardId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the dashboard.</p>
   */
  DashboardArn?: string;

  /**
   * <p>A structure that contains the permissions for the dashboard.</p>
   */
  Permissions?: ResourcePermission[];

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>A structure that contains the configuration of a shareable link that grants access to
   *             the dashboard. Your users can use the link to view and interact with the dashboard, if
   *             the dashboard has been shared with them. For more information about sharing dashboards,
   *             see <a href="https://docs.aws.amazon.com/quicksight/latest/user/sharing-a-dashboard.html">Sharing Dashboards</a>.</p>
   */
  LinkSharingConfiguration?: LinkSharingConfiguration;
}

export interface DescribeDataSetRequest {
  /**
   * <p>The Amazon Web Services account ID.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the dataset that you want to create. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
   */
  DataSetId: string | undefined;
}

export interface DescribeDataSetResponse {
  /**
   * <p>Information on the dataset.</p>
   */
  DataSet?: DataSet;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

export interface DescribeDataSetPermissionsRequest {
  /**
   * <p>The Amazon Web Services account ID.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the dataset that you want to create. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
   */
  DataSetId: string | undefined;
}

export interface DescribeDataSetPermissionsResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the dataset.</p>
   */
  DataSetArn?: string;

  /**
   * <p>The ID for the dataset that you want to create. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
   */
  DataSetId?: string;

  /**
   * <p>A list of resource permissions on the dataset.</p>
   */
  Permissions?: ResourcePermission[];

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

export interface DescribeDataSourceRequest {
  /**
   * <p>The Amazon Web Services account ID.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID of the data source. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
   */
  DataSourceId: string | undefined;
}

export interface DescribeDataSourceResponse {
  /**
   * <p>The information on the data source.</p>
   */
  DataSource?: DataSource;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

export interface DescribeDataSourcePermissionsRequest {
  /**
   * <p>The Amazon Web Services account ID.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID of the data source. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
   */
  DataSourceId: string | undefined;
}

export interface DescribeDataSourcePermissionsResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the data source.</p>
   */
  DataSourceArn?: string;

  /**
   * <p>The ID of the data source. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
   */
  DataSourceId?: string;

  /**
   * <p>A list of resource permissions on the data source.</p>
   */
  Permissions?: ResourcePermission[];

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

export interface DescribeFolderRequest {
  /**
   * <p>The ID for the Amazon Web Services account that contains the folder.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID of the folder.</p>
   */
  FolderId: string | undefined;
}

/**
 * <p>A folder in Amazon QuickSight.</p>
 */
export interface Folder {
  /**
   * <p>The ID of the folder.</p>
   */
  FolderId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) for the folder.</p>
   */
  Arn?: string;

  /**
   * <p>A display name for the folder.</p>
   */
  Name?: string;

  /**
   * <p>The type of folder it is.</p>
   */
  FolderType?: FolderType | string;

  /**
   * <p>An array of ancestor ARN strings for the folder.</p>
   */
  FolderPath?: string[];

  /**
   * <p>The time that the folder was created.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>The time that the folder was last updated.</p>
   */
  LastUpdatedTime?: Date;
}

export interface DescribeFolderResponse {
  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * <p>Information about the folder.</p>
   */
  Folder?: Folder;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;
}

export interface DescribeFolderPermissionsRequest {
  /**
   * <p>The ID for the Amazon Web Services account that contains the folder.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID of the folder.</p>
   */
  FolderId: string | undefined;
}

export interface DescribeFolderPermissionsResponse {
  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * <p>The ID of the folder.</p>
   */
  FolderId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) for the folder.</p>
   */
  Arn?: string;

  /**
   * <p>Information about the permissions on the folder.</p>
   */
  Permissions?: ResourcePermission[];

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;
}

export interface DescribeFolderResolvedPermissionsRequest {
  /**
   * <p>The ID for the Amazon Web Services account that contains the folder.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID of the folder.</p>
   */
  FolderId: string | undefined;
}

export interface DescribeFolderResolvedPermissionsResponse {
  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * <p>The ID of the folder.</p>
   */
  FolderId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the folder.</p>
   */
  Arn?: string;

  /**
   * <p>Information about the permissions for the folder.</p>
   */
  Permissions?: ResourcePermission[];

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;
}

export interface DescribeGroupRequest {
  /**
   * <p>The name of the group that you want to describe.</p>
   */
  GroupName: string | undefined;

  /**
   * <p>The ID for the Amazon Web Services account that the group is in. Currently, you use the ID for the
   * 			Amazon Web Services account that contains your Amazon QuickSight account.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The namespace of the group that you want described.</p>
   */
  Namespace: string | undefined;
}

export interface DescribeGroupResponse {
  /**
   * <p>The name of the group.</p>
   */
  Group?: Group;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

export interface DescribeGroupMembershipRequest {
  /**
   * <p>The user name of the user that you want to search for.</p>
   */
  MemberName: string | undefined;

  /**
   * <p>The name of the group that you want to search.</p>
   */
  GroupName: string | undefined;

  /**
   * <p>The ID for the Amazon Web Services account that the group is in. Currently, you use the ID for the
   *          Amazon Web Services account that contains your Amazon QuickSight account.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The namespace that includes the group you are searching within.</p>
   */
  Namespace: string | undefined;
}

export interface DescribeGroupMembershipResponse {
  /**
   * <p>A member of an Amazon QuickSight group. Currently, group members must be users. Groups
   *             can't be members of another group. .</p>
   */
  GroupMember?: GroupMember;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

export interface DescribeIAMPolicyAssignmentRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the assignment that you want to describe.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The name of the assignment, also called a rule.</p>
   */
  AssignmentName: string | undefined;

  /**
   * <p>The namespace that contains the assignment.</p>
   */
  Namespace: string | undefined;
}

/**
 * <p>An Identity and Access Management (IAM) policy assignment.</p>
 */
export interface IAMPolicyAssignment {
  /**
   * <p>The Amazon Web Services account ID.</p>
   */
  AwsAccountId?: string;

  /**
   * <p>Assignment ID.</p>
   */
  AssignmentId?: string;

  /**
   * <p>Assignment name.</p>
   */
  AssignmentName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) for the IAM policy.</p>
   */
  PolicyArn?: string;

  /**
   * <p>Identities.</p>
   */
  Identities?: Record<string, string[]>;

  /**
   * <p>Assignment status.</p>
   */
  AssignmentStatus?: AssignmentStatus | string;
}

export interface DescribeIAMPolicyAssignmentResponse {
  /**
   * <p>Information describing the IAM policy assignment.</p>
   */
  IAMPolicyAssignment?: IAMPolicyAssignment;

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
 * <p>The <code>NextToken</code> value isn't valid.</p>
 */
export class InvalidNextTokenException extends __BaseException {
  readonly name: "InvalidNextTokenException" = "InvalidNextTokenException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * <p>The Amazon Web Services request ID for this request.</p>
   */
  RequestId?: string;
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

export interface DescribeIngestionRequest {
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

export enum IngestionErrorType {
  ACCOUNT_CAPACITY_LIMIT_EXCEEDED = "ACCOUNT_CAPACITY_LIMIT_EXCEEDED",
  CONNECTION_FAILURE = "CONNECTION_FAILURE",
  CURSOR_NOT_ENABLED = "CURSOR_NOT_ENABLED",
  CUSTOMER_ERROR = "CUSTOMER_ERROR",
  DATA_SET_DELETED = "DATA_SET_DELETED",
  DATA_SET_NOT_SPICE = "DATA_SET_NOT_SPICE",
  DATA_SET_SIZE_LIMIT_EXCEEDED = "DATA_SET_SIZE_LIMIT_EXCEEDED",
  DATA_SOURCE_AUTH_FAILED = "DATA_SOURCE_AUTH_FAILED",
  DATA_SOURCE_CONNECTION_FAILED = "DATA_SOURCE_CONNECTION_FAILED",
  DATA_SOURCE_NOT_FOUND = "DATA_SOURCE_NOT_FOUND",
  DATA_TOLERANCE_EXCEPTION = "DATA_TOLERANCE_EXCEPTION",
  ELASTICSEARCH_CURSOR_NOT_ENABLED = "ELASTICSEARCH_CURSOR_NOT_ENABLED",
  FAILURE_TO_ASSUME_ROLE = "FAILURE_TO_ASSUME_ROLE",
  FAILURE_TO_PROCESS_JSON_FILE = "FAILURE_TO_PROCESS_JSON_FILE",
  IAM_ROLE_NOT_AVAILABLE = "IAM_ROLE_NOT_AVAILABLE",
  INGESTION_CANCELED = "INGESTION_CANCELED",
  INGESTION_SUPERSEDED = "INGESTION_SUPERSEDED",
  INTERNAL_SERVICE_ERROR = "INTERNAL_SERVICE_ERROR",
  INVALID_DATAPREP_SYNTAX = "INVALID_DATAPREP_SYNTAX",
  INVALID_DATA_SOURCE_CONFIG = "INVALID_DATA_SOURCE_CONFIG",
  INVALID_DATE_FORMAT = "INVALID_DATE_FORMAT",
  IOT_DATA_SET_FILE_EMPTY = "IOT_DATA_SET_FILE_EMPTY",
  IOT_FILE_NOT_FOUND = "IOT_FILE_NOT_FOUND",
  OAUTH_TOKEN_FAILURE = "OAUTH_TOKEN_FAILURE",
  PASSWORD_AUTHENTICATION_FAILURE = "PASSWORD_AUTHENTICATION_FAILURE",
  PERMISSION_DENIED = "PERMISSION_DENIED",
  PERMISSION_NOT_FOUND = "PERMISSION_NOT_FOUND",
  QUERY_TIMEOUT = "QUERY_TIMEOUT",
  REFRESH_SUPPRESSED_BY_EDIT = "REFRESH_SUPPRESSED_BY_EDIT",
  ROW_SIZE_LIMIT_EXCEEDED = "ROW_SIZE_LIMIT_EXCEEDED",
  S3_FILE_INACCESSIBLE = "S3_FILE_INACCESSIBLE",
  S3_MANIFEST_ERROR = "S3_MANIFEST_ERROR",
  S3_UPLOADED_FILE_DELETED = "S3_UPLOADED_FILE_DELETED",
  SOURCE_API_LIMIT_EXCEEDED_FAILURE = "SOURCE_API_LIMIT_EXCEEDED_FAILURE",
  SOURCE_RESOURCE_LIMIT_EXCEEDED = "SOURCE_RESOURCE_LIMIT_EXCEEDED",
  SPICE_TABLE_NOT_FOUND = "SPICE_TABLE_NOT_FOUND",
  SQL_EXCEPTION = "SQL_EXCEPTION",
  SQL_INVALID_PARAMETER_VALUE = "SQL_INVALID_PARAMETER_VALUE",
  SQL_NUMERIC_OVERFLOW = "SQL_NUMERIC_OVERFLOW",
  SQL_SCHEMA_MISMATCH_ERROR = "SQL_SCHEMA_MISMATCH_ERROR",
  SQL_TABLE_NOT_FOUND = "SQL_TABLE_NOT_FOUND",
  SSL_CERTIFICATE_VALIDATION_FAILURE = "SSL_CERTIFICATE_VALIDATION_FAILURE",
  UNRESOLVABLE_HOST = "UNRESOLVABLE_HOST",
  UNROUTABLE_HOST = "UNROUTABLE_HOST",
}

/**
 * <p>Error information for the SPICE ingestion of a dataset.</p>
 */
export interface ErrorInfo {
  /**
   * <p>Error type.</p>
   */
  Type?: IngestionErrorType | string;

  /**
   * <p>Error message.</p>
   */
  Message?: string;
}

/**
 * <p>Information about a queued dataset SPICE ingestion.</p>
 */
export interface QueueInfo {
  /**
   * <p>The ID of the queued ingestion.</p>
   */
  WaitingOnIngestion: string | undefined;

  /**
   * <p>The ID of the ongoing ingestion. The queued ingestion is waiting for the ongoing
   *             ingestion to complete.</p>
   */
  QueuedIngestion: string | undefined;
}

export enum IngestionRequestSource {
  MANUAL = "MANUAL",
  SCHEDULED = "SCHEDULED",
}

export enum IngestionRequestType {
  EDIT = "EDIT",
  FULL_REFRESH = "FULL_REFRESH",
  INCREMENTAL_REFRESH = "INCREMENTAL_REFRESH",
  INITIAL_INGESTION = "INITIAL_INGESTION",
}

/**
 * <p>Information about rows for a data set SPICE ingestion.</p>
 */
export interface RowInfo {
  /**
   * <p>The number of rows that were ingested.</p>
   */
  RowsIngested?: number;

  /**
   * <p>The number of rows that were not ingested.</p>
   */
  RowsDropped?: number;

  /**
   * <p>The total number of rows in the dataset.</p>
   */
  TotalRowsInDataset?: number;
}

/**
 * <p>Information about the SPICE ingestion for a dataset.</p>
 */
export interface Ingestion {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  Arn: string | undefined;

  /**
   * <p>Ingestion ID.</p>
   */
  IngestionId?: string;

  /**
   * <p>Ingestion status.</p>
   */
  IngestionStatus: IngestionStatus | string | undefined;

  /**
   * <p>Error information for this ingestion.</p>
   */
  ErrorInfo?: ErrorInfo;

  /**
   * <p>Information about rows for a data set SPICE ingestion.</p>
   */
  RowInfo?: RowInfo;

  /**
   * <p>Information about a queued dataset SPICE ingestion.</p>
   */
  QueueInfo?: QueueInfo;

  /**
   * <p>The time that this ingestion started.</p>
   */
  CreatedTime: Date | undefined;

  /**
   * <p>The time that this ingestion took, measured in seconds.</p>
   */
  IngestionTimeInSeconds?: number;

  /**
   * <p>The size of the data ingested, in bytes.</p>
   */
  IngestionSizeInBytes?: number;

  /**
   * <p>Event source for this ingestion.</p>
   */
  RequestSource?: IngestionRequestSource | string;

  /**
   * <p>Type of this ingestion.</p>
   */
  RequestType?: IngestionRequestType | string;
}

export interface DescribeIngestionResponse {
  /**
   * <p>Information about the ingestion.</p>
   */
  Ingestion?: Ingestion;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

export interface DescribeIpRestrictionRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the IP rules.</p>
   */
  AwsAccountId: string | undefined;
}

export interface DescribeIpRestrictionResponse {
  /**
   * <p>The ID of the Amazon Web Services account that contains the IP rules.</p>
   */
  AwsAccountId?: string;

  /**
   * <p>A map that describes the IP rules with CIDR range and description.</p>
   */
  IpRestrictionRuleMap?: Record<string, string>;

  /**
   * <p>A value that specifies whether IP rules are turned on.</p>
   */
  Enabled?: boolean;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The HTTP status of the request. </p>
   */
  Status?: number;
}

export interface DescribeNamespaceRequest {
  /**
   * <p>The ID for the Amazon Web Services account that contains the Amazon QuickSight namespace that you want to describe.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The namespace that you want to describe.</p>
   */
  Namespace: string | undefined;
}

export enum NamespaceErrorType {
  INTERNAL_SERVICE_ERROR = "INTERNAL_SERVICE_ERROR",
  PERMISSION_DENIED = "PERMISSION_DENIED",
}

/**
 * <p>Errors that occur during namespace creation.</p>
 */
export interface NamespaceError {
  /**
   * <p>The error type.</p>
   */
  Type?: NamespaceErrorType | string;

  /**
   * <p>The message for the error.</p>
   */
  Message?: string;
}

/**
 * <p>The error type.</p>
 */
export interface NamespaceInfoV2 {
  /**
   * <p>The name of the error.</p>
   */
  Name?: string;

  /**
   * <p>The namespace ARN.</p>
   */
  Arn?: string;

  /**
   * <p>The namespace Amazon Web Services Region.</p>
   */
  CapacityRegion?: string;

  /**
   * <p>The creation status of a namespace that is not yet completely created.</p>
   */
  CreationStatus?: NamespaceStatus | string;

  /**
   * <p>The identity store used for the namespace.</p>
   */
  IdentityStore?: IdentityStore | string;

  /**
   * <p>An error that occurred when the namespace was created.</p>
   */
  NamespaceError?: NamespaceError;
}

export interface DescribeNamespaceResponse {
  /**
   * <p>The information about the namespace that you're describing. The response includes
   *         the namespace ARN, name, Amazon Web Services Region, creation status, and identity store. <code>DescribeNamespace</code> also
   *         works for namespaces that are in the process of being created. For incomplete namespaces,
   *         this API operation lists the namespace error types and messages associated with the creation process.</p>
   */
  Namespace?: NamespaceInfoV2;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

export interface DescribeTemplateRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the template that you're describing.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the template.</p>
   */
  TemplateId: string | undefined;

  /**
   * <p>(Optional) The number for the version to describe. If a <code>VersionNumber</code> parameter
   * 			value isn't provided, the latest version of the template is described.</p>
   */
  VersionNumber?: number;

  /**
   * <p>The alias of the template that you want to describe. If you name a specific alias, you
   * 			describe the version that the alias points to. You can specify the latest version of the
   * 			template by providing the keyword <code>$LATEST</code> in the <code>AliasName</code>
   * 			parameter. The keyword <code>$PUBLISHED</code> doesn't apply to templates.</p>
   */
  AliasName?: string;
}

export enum TemplateErrorType {
  ACCESS_DENIED = "ACCESS_DENIED",
  DATA_SET_NOT_FOUND = "DATA_SET_NOT_FOUND",
  INTERNAL_FAILURE = "INTERNAL_FAILURE",
  SOURCE_NOT_FOUND = "SOURCE_NOT_FOUND",
}

/**
 * <p>List of errors that occurred when the template version creation failed.</p>
 */
export interface TemplateError {
  /**
   * <p>Type of error.</p>
   */
  Type?: TemplateErrorType | string;

  /**
   * <p>Description of the error type.</p>
   */
  Message?: string;

  /**
   * <p>An error path that shows which entities caused the template error.</p>
   */
  ViolatedEntities?: Entity[];
}

/**
 * <p>A version of a template.</p>
 */
export interface TemplateVersion {
  /**
   * <p>The time that this template version was created.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>Errors associated with this template version.</p>
   */
  Errors?: TemplateError[];

  /**
   * <p>The version number of the template version.</p>
   */
  VersionNumber?: number;

  /**
   * <p>The status that is associated with the template.</p>
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
   */
  Status?: ResourceStatus | string;

  /**
   * <p>Schema of the dataset identified by the placeholder. Any dashboard created from this
   *             template should be bound to new datasets matching the same schema described through this
   *             API operation.</p>
   */
  DataSetConfigurations?: DataSetConfiguration[];

  /**
   * <p>The description of the template.</p>
   */
  Description?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of an analysis or template that was used to create this
   *             template.</p>
   */
  SourceEntityArn?: string;

  /**
   * <p>The ARN of the theme associated with this version of the template.</p>
   */
  ThemeArn?: string;

  /**
   * <p>A list of the associated sheets with the unique identifier and name of each sheet.</p>
   */
  Sheets?: Sheet[];
}

/**
 * <p>A template object. A <i>template</i> is an entity in Amazon QuickSight that
 *             encapsulates the metadata required to create an analysis and that you can use to create
 *             a dashboard. A template adds a layer of abstraction by using placeholders to replace the
 *             dataset associated with an analysis. You can use templates to create dashboards by
 *             replacing dataset placeholders with datasets that follow the same schema that was used
 *             to create the source analysis and template.</p>
 *          <p>You can share templates across Amazon Web Services accounts by allowing users in other Amazon Web Services accounts to
 *             create a template or a dashboard from an existing template.</p>
 */
export interface Template {
  /**
   * <p>The Amazon Resource Name (ARN) of the template.</p>
   */
  Arn?: string;

  /**
   * <p>The display name of the template.</p>
   */
  Name?: string;

  /**
   * <p>A structure describing the versions of the template.</p>
   */
  Version?: TemplateVersion;

  /**
   * <p>The ID for the template. This is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
   */
  TemplateId?: string;

  /**
   * <p>Time when this was last updated.</p>
   */
  LastUpdatedTime?: Date;

  /**
   * <p>Time when this was created.</p>
   */
  CreatedTime?: Date;
}

export interface DescribeTemplateResponse {
  /**
   * <p>The template structure for the object you want to describe.</p>
   */
  Template?: Template;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;
}

export interface DescribeTemplateAliasRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the template alias that you're
   * 			describing.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the template.</p>
   */
  TemplateId: string | undefined;

  /**
   * <p>The name of the template alias that you want to describe. If you name a specific alias, you
   * 			describe the version that the alias points to. You can specify the latest version of the
   * 			template by providing the keyword <code>$LATEST</code> in the <code>AliasName</code>
   * 			parameter. The keyword <code>$PUBLISHED</code> doesn't apply to templates.</p>
   */
  AliasName: string | undefined;
}

export interface DescribeTemplateAliasResponse {
  /**
   * <p>Information about the template alias.</p>
   */
  TemplateAlias?: TemplateAlias;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;
}

export interface DescribeTemplateDefinitionRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the template. You must be using the
   * 			 Amazon Web Services account that the template is in.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID of the template that you're describing.</p>
   */
  TemplateId: string | undefined;

  /**
   * <p>The version number of the template.</p>
   */
  VersionNumber?: number;

  /**
   * <p>The alias of the template that you want to describe. If you name a specific alias, you
   * 			 describe the version that the alias points to. You can specify the latest version of the
   * 			 template by providing the keyword <code>$LATEST</code> in the <code>AliasName</code>
   * 			 parameter. The keyword <code>$PUBLISHED</code> doesn't apply to templates.</p>
   */
  AliasName?: string;
}

export interface DescribeTemplateDefinitionResponse {
  /**
   * <p>The descriptive name of the template.</p>
   */
  Name?: string;

  /**
   * <p>The ID of the template described.</p>
   */
  TemplateId?: string;

  /**
   * <p>Errors associated with the template version.</p>
   */
  Errors?: TemplateError[];

  /**
   * <p>Status associated with the template.</p>
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
   */
  ResourceStatus?: ResourceStatus | string;

  /**
   * <p>The ARN of the theme of the template.</p>
   */
  ThemeArn?: string;

  /**
   * <p>The definition of the template.</p>
   *          <p>A definition is the data model of all features in a Dashboard, Template, or Analysis.</p>
   */
  Definition?: TemplateVersionDefinition;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;
}

export interface DescribeTemplatePermissionsRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the template that you're describing.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the template.</p>
   */
  TemplateId: string | undefined;
}

export interface DescribeTemplatePermissionsResponse {
  /**
   * <p>The ID for the template.</p>
   */
  TemplateId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the template.</p>
   */
  TemplateArn?: string;

  /**
   * <p>A list of resource permissions to be set on the template. </p>
   */
  Permissions?: ResourcePermission[];

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

export interface DescribeThemeRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the theme that you're describing.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the theme.</p>
   */
  ThemeId: string | undefined;

  /**
   * <p>The version number for the version to describe. If a <code>VersionNumber</code> parameter
   * 			value isn't provided, the latest version of the theme is described.</p>
   */
  VersionNumber?: number;

  /**
   * <p>The alias of the theme that you want to describe. If you name a specific alias, you
   * 			describe the version that the alias points to. You can specify the latest version of the
   * 			theme by providing the keyword <code>$LATEST</code> in the <code>AliasName</code>
   * 			parameter. The keyword <code>$PUBLISHED</code> doesn't apply to themes.</p>
   */
  AliasName?: string;
}

export enum ThemeType {
  ALL = "ALL",
  CUSTOM = "CUSTOM",
  QUICKSIGHT = "QUICKSIGHT",
}

export enum ThemeErrorType {
  INTERNAL_FAILURE = "INTERNAL_FAILURE",
}

/**
 * <p>Theme error.</p>
 */
export interface ThemeError {
  /**
   * <p>The type of error.</p>
   */
  Type?: ThemeErrorType | string;

  /**
   * <p>The error message.</p>
   */
  Message?: string;
}

/**
 * <p>A version of a theme.</p>
 */
export interface ThemeVersion {
  /**
   * <p>The version number of the theme.</p>
   */
  VersionNumber?: number;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  Arn?: string;

  /**
   * <p>The description of the theme.</p>
   */
  Description?: string;

  /**
   * <p>The Amazon QuickSight-defined ID of the theme that a custom theme inherits from. All
   *             themes initially inherit from a default Amazon QuickSight theme.</p>
   */
  BaseThemeId?: string;

  /**
   * <p>The date and time that this theme version was created.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>The theme configuration, which contains all the theme display properties.</p>
   */
  Configuration?: ThemeConfiguration;

  /**
   * <p>Errors associated with the theme.</p>
   */
  Errors?: ThemeError[];

  /**
   * <p>The status of the theme version.</p>
   */
  Status?: ResourceStatus | string;
}

/**
 * <p>Summary information about a theme.</p>
 */
export interface Theme {
  /**
   * <p>The Amazon Resource Name (ARN) of the theme.</p>
   */
  Arn?: string;

  /**
   * <p>The name that the user gives to the theme.</p>
   */
  Name?: string;

  /**
   * <p>The identifier that the user gives to the theme.</p>
   */
  ThemeId?: string;

  /**
   * <p>A version of a theme.</p>
   */
  Version?: ThemeVersion;

  /**
   * <p>The date and time that the theme was created.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>The date and time that the theme was last updated.</p>
   */
  LastUpdatedTime?: Date;

  /**
   * <p>The type of theme, based on how it was created. Valid values include:
   *             <code>QUICKSIGHT</code> and <code>CUSTOM</code>.</p>
   */
  Type?: ThemeType | string;
}

export interface DescribeThemeResponse {
  /**
   * <p>The information about the theme that you are describing.</p>
   */
  Theme?: Theme;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;
}

export interface DescribeThemeAliasRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the theme alias that you're
   * 			describing.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the theme.</p>
   */
  ThemeId: string | undefined;

  /**
   * <p>The name of the theme alias that you want to describe.</p>
   */
  AliasName: string | undefined;
}

export interface DescribeThemeAliasResponse {
  /**
   * <p>Information about the theme alias.</p>
   */
  ThemeAlias?: ThemeAlias;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;
}

export interface DescribeThemePermissionsRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the theme that you're describing.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the theme that you want to describe permissions for.</p>
   */
  ThemeId: string | undefined;
}

export interface DescribeThemePermissionsResponse {
  /**
   * <p>The ID for the theme.</p>
   */
  ThemeId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the theme.</p>
   */
  ThemeArn?: string;

  /**
   * <p>A list of resource permissions set on the theme. </p>
   */
  Permissions?: ResourcePermission[];

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

export interface DescribeUserRequest {
  /**
   * <p>The name of the user that you want to describe.</p>
   */
  UserName: string | undefined;

  /**
   * <p>The ID for the Amazon Web Services account that the user is in. Currently, you use the ID for the
   * 			Amazon Web Services account that contains your Amazon QuickSight account.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The namespace. Currently, you should set this to <code>default</code>.</p>
   */
  Namespace: string | undefined;
}

export enum IdentityType {
  IAM = "IAM",
  QUICKSIGHT = "QUICKSIGHT",
}

export enum UserRole {
  ADMIN = "ADMIN",
  AUTHOR = "AUTHOR",
  READER = "READER",
  RESTRICTED_AUTHOR = "RESTRICTED_AUTHOR",
  RESTRICTED_READER = "RESTRICTED_READER",
}

/**
 * <p>A registered user of Amazon QuickSight. </p>
 */
export interface User {
  /**
   * <p>The Amazon Resource Name (ARN) for the user.</p>
   */
  Arn?: string;

  /**
   * <p>The user's user name. This value is required if you are registering a user that will be managed in Amazon QuickSight. In the output, the value for <code>UserName</code> is
   *                 <code>N/A</code> when the value for <code>IdentityType</code> is <code>IAM</code>
   *             and the corresponding IAM user is deleted.</p>
   */
  UserName?: string;

  /**
   * <p>The user's email address.</p>
   */
  Email?: string;

  /**
   * <p>The Amazon QuickSight role for the user. The user role can be one of the
   *             following:.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>READER</code>: A user who has read-only access to dashboards.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AUTHOR</code>: A user who can create data sources, datasets, analyses,
   *                     and dashboards.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ADMIN</code>: A user who is an author, who can also manage Amazon
   *                     Amazon QuickSight settings.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RESTRICTED_READER</code>: This role isn't currently available for
   *                     use.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RESTRICTED_AUTHOR</code>: This role isn't currently available for
   *                     use.</p>
   *             </li>
   *          </ul>
   */
  Role?: UserRole | string;

  /**
   * <p>The type of identity authentication used by the user.</p>
   */
  IdentityType?: IdentityType | string;

  /**
   * <p>The active status of user. When you create an Amazon QuickSight user that’s not an IAM
   *             user or an Active Directory user, that user is inactive until they sign in and provide a
   *             password.</p>
   */
  Active?: boolean;

  /**
   * <p>The principal ID of the user.</p>
   */
  PrincipalId?: string;

  /**
   * <p>The custom permissions profile associated with this user.</p>
   */
  CustomPermissionsName?: string;

  /**
   * <p>The type of supported external login provider that provides identity to let the user
   *             federate into Amazon QuickSight with an associated IAM role. The type can be one of the following.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>COGNITO</code>: Amazon Cognito. The provider URL is cognito-identity.amazonaws.com.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CUSTOM_OIDC</code>: Custom OpenID Connect (OIDC) provider.</p>
   *             </li>
   *          </ul>
   */
  ExternalLoginFederationProviderType?: string;

  /**
   * <p>The URL of the external login provider.</p>
   */
  ExternalLoginFederationProviderUrl?: string;

  /**
   * <p>The identity ID for the user in the external login provider.</p>
   */
  ExternalLoginId?: string;
}

export interface DescribeUserResponse {
  /**
   * <p>The user name.</p>
   */
  User?: User;

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
 * <p>The domain specified isn't on the allow list. All domains for embedded dashboards must be
 * 			added to the approved list by an Amazon QuickSight admin.</p>
 */
export class DomainNotWhitelistedException extends __BaseException {
  readonly name: "DomainNotWhitelistedException" = "DomainNotWhitelistedException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * <p>The Amazon Web Services request ID for this request.</p>
   */
  RequestId?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DomainNotWhitelistedException, __BaseException>) {
    super({
      name: "DomainNotWhitelistedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DomainNotWhitelistedException.prototype);
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

export enum EmbeddingIdentityType {
  ANONYMOUS = "ANONYMOUS",
  IAM = "IAM",
  QUICKSIGHT = "QUICKSIGHT",
}

export enum FolderFilterAttribute {
  DIRECT_QUICKSIGHT_OWNER = "DIRECT_QUICKSIGHT_OWNER",
  DIRECT_QUICKSIGHT_SOLE_OWNER = "DIRECT_QUICKSIGHT_SOLE_OWNER",
  DIRECT_QUICKSIGHT_VIEWER_OR_OWNER = "DIRECT_QUICKSIGHT_VIEWER_OR_OWNER",
  FOLDER_NAME = "FOLDER_NAME",
  PARENT_FOLDER_ARN = "PARENT_FOLDER_ARN",
  QUICKSIGHT_OWNER = "QUICKSIGHT_OWNER",
  QUICKSIGHT_VIEWER_OR_OWNER = "QUICKSIGHT_VIEWER_OR_OWNER",
}

/**
 * <p>An object that consists of a member Amazon Resource Name (ARN) and a member ID.</p>
 */
export interface MemberIdArnPair {
  /**
   * <p>The ID of the member.</p>
   */
  MemberId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the member.</p>
   */
  MemberArn?: string;
}

/**
 * <p>A filter to use to search an Amazon QuickSight folder.</p>
 */
export interface FolderSearchFilter {
  /**
   * <p>The comparison operator that you want to use as a filter, for example  <code>"Operator": "StringEquals"</code>. Valid values are  <code>"StringEquals"</code>  and  <code>"StringLike"</code>.</p>
   *          <p>If you set the operator value to <code>"StringEquals"</code>, you need to provide an ownership related filter in the <code>"NAME"</code> field and the arn of the user or group whose folders you want to search in the <code>"Value"</code> field. For example,  <code>"Name":"DIRECT_QUICKSIGHT_OWNER", "Operator": "StringEquals", "Value": "arn:aws:quicksight:us-east-1:1:user/default/UserName1"</code>.</p>
   *          <p>If you set the value to <code>"StringLike"</code>, you need to provide the name of the folders you are searching for. For example, <code>"Name":"FOLDER_NAME", "Operator": "StringLike", "Value": "Test"</code>. The <code>"StringLike"</code> operator only supports the <code>NAME</code> value <code>FOLDER_NAME</code>.</p>
   */
  Operator?: FilterOperator | string;

  /**
   * <p>The name of a value that you want to use in the filter. For example, <code>"Name": "QUICKSIGHT_OWNER"</code>.</p>
   *          <p>Valid values are defined as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>QUICKSIGHT_VIEWER_OR_OWNER</code>: Provide an ARN of a user or group, and any folders with that ARN listed as one of the folder's owners or viewers are returned. Implicit permissions from folders or groups are considered.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>QUICKSIGHT_OWNER</code>: Provide an ARN of a user or group, and any folders with that ARN listed as one of the owners of the folders are returned. Implicit permissions from folders or groups are considered.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DIRECT_QUICKSIGHT_SOLE_OWNER</code>: Provide an ARN of a user or group, and any folders with that ARN listed as the only owner of the folder are returned. Implicit permissions from folders or groups are not considered.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DIRECT_QUICKSIGHT_OWNER</code>: Provide an ARN of a user or group, and any folders with that ARN listed as one of the owners of the folders are returned. Implicit permissions from folders or groups are not considered.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DIRECT_QUICKSIGHT_VIEWER_OR_OWNER</code>: Provide an ARN of a user or group, and any folders with that ARN listed as one of the owners or viewers of the folders are returned. Implicit permissions from folders or groups are not considered. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FOLDER_NAME</code>: Any folders whose names have a substring match to this value will be returned.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PARENT_FOLDER_ARN</code>: Provide an ARN of a folder, and any folders that are directly under that parent folder are returned. If you choose to use this option and leave the value blank, all root-level folders in the account are returned. </p>
   *             </li>
   *          </ul>
   */
  Name?: FolderFilterAttribute | string;

  /**
   * <p>The value of the named item (in this example, <code>PARENT_FOLDER_ARN</code>), that you want to use as a filter. For example, <code>"Value": "arn:aws:quicksight:us-east-1:1:folder/folderId"</code>.</p>
   */
  Value?: string;
}

/**
 * <p>A summary of information about an existing Amazon QuickSight folder. </p>
 */
export interface FolderSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the folder.</p>
   */
  Arn?: string;

  /**
   * <p>The ID of the folder.</p>
   */
  FolderId?: string;

  /**
   * <p>The display name of the folder.</p>
   */
  Name?: string;

  /**
   * <p>The type of folder.</p>
   */
  FolderType?: FolderType | string;

  /**
   * <p>The time that the folder was created.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>The time that the folder was last updated.</p>
   */
  LastUpdatedTime?: Date;
}

/**
 * <p>The key-value pair used for the row-level security tags feature.</p>
 */
export interface SessionTag {
  /**
   * <p>The key for the tag.</p>
   */
  Key: string | undefined;

  /**
   * <p>The value that you want to assign the tag.</p>
   */
  Value: string | undefined;
}

export interface GenerateEmbedUrlForAnonymousUserRequest {
  /**
   * <p>The ID for the Amazon Web Services account that contains the dashboard that you're embedding.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>How many minutes the session is valid. The session lifetime must be in [15-600] minutes range.</p>
   */
  SessionLifetimeInMinutes?: number;

  /**
   * <p>The Amazon QuickSight namespace that the anonymous user virtually belongs to. If you are not using an Amazon QuickSight custom namespace, set this to <code>default</code>.</p>
   */
  Namespace: string | undefined;

  /**
   * <p>The session tags used for row-level security. Before you use this parameter, make sure that you have configured the relevant datasets using the <code>DataSet$RowLevelPermissionTagConfiguration</code> parameter so that session tags can be used to provide row-level security.</p>
   *          <p>These are not the tags used for the Amazon Web Services resource tagging feature. For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/quicksight-dev-rls-tags.html">Using Row-Level Security (RLS) with Tags</a>in the <i>Amazon QuickSight User Guide</i>.</p>
   */
  SessionTags?: SessionTag[];

  /**
   * <p>The Amazon Resource Names (ARNs) for the Amazon QuickSight resources that the user
   *             is authorized to access during the lifetime of the session. If you choose
   *                 <code>Dashboard</code> embedding experience, pass the list of dashboard ARNs in the
   *             account that you want the user to be able to view. Currently, you can pass up to 25
   *             dashboard ARNs in each API call.</p>
   */
  AuthorizedResourceArns: string[] | undefined;

  /**
   * <p>The configuration of the experience that you are embedding.</p>
   */
  ExperienceConfiguration: AnonymousUserEmbeddingExperienceConfiguration | undefined;

  /**
   * <p>The domains that you want to add to the allow list for access to the generated URL that
   *             is then embedded. This optional parameter overrides the static domains that are
   *             configured in the Manage QuickSight menu in the Amazon QuickSight console. Instead, it
   *             allows only the domains that you include in this parameter. You can list up to three
   *             domains or subdomains in each API call.</p>
   *          <p>To include all subdomains under a specific domain to the allow list, use <code>*</code>.
   *             For example, <code>https://*.sapp.amazon.com</code> includes all subdomains under
   *             <code>https://sapp.amazon.com</code>.</p>
   */
  AllowedDomains?: string[];
}

export interface GenerateEmbedUrlForAnonymousUserResponse {
  /**
   * <p>The embed URL for the dashboard.</p>
   */
  EmbedUrl: string | undefined;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status: number | undefined;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) to use for the anonymous Amazon QuickSight user.</p>
   */
  AnonymousUserArn: string | undefined;
}

/**
 * <p>The number of minutes specified for the lifetime of a session isn't valid. The session
 * 			lifetime must be 15-600 minutes.</p>
 */
export class SessionLifetimeInMinutesInvalidException extends __BaseException {
  readonly name: "SessionLifetimeInMinutesInvalidException" = "SessionLifetimeInMinutesInvalidException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * <p>The Amazon Web Services request ID for this request.</p>
   */
  RequestId?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SessionLifetimeInMinutesInvalidException, __BaseException>) {
    super({
      name: "SessionLifetimeInMinutesInvalidException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SessionLifetimeInMinutesInvalidException.prototype);
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

/**
 * <p>This error indicates that you are calling an embedding operation in Amazon QuickSight
 * 			without the required pricing plan on your Amazon Web Services account. Before you can use embedding
 * 			for anonymous users, a QuickSight administrator needs to add capacity pricing to Amazon QuickSight. You
 * 		    can do this on the <b>Manage Amazon QuickSight</b> page. </p>
 *          <p>After capacity pricing is added, you can use the
 *             <code>
 *                <a href="https://docs.aws.amazon.com/quicksight/latest/APIReference/API_GetDashboardEmbedUrl.html">GetDashboardEmbedUrl</a>
 *             </code> API operation with the
 *             <code>--identity-type ANONYMOUS</code> option.</p>
 */
export class UnsupportedPricingPlanException extends __BaseException {
  readonly name: "UnsupportedPricingPlanException" = "UnsupportedPricingPlanException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * <p>The Amazon Web Services request ID for this request.</p>
   */
  RequestId?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnsupportedPricingPlanException, __BaseException>) {
    super({
      name: "UnsupportedPricingPlanException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnsupportedPricingPlanException.prototype);
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

/**
 * <p>Information about the dashboard you want to embed.</p>
 */
export interface RegisteredUserDashboardEmbeddingConfiguration {
  /**
   * <p>The dashboard ID for the dashboard that you want the user to see first. This ID is included in the output URL. When the URL in response is accessed, Amazon QuickSight renders this dashboard if the user has permissions to view it.</p>
   *          <p>If the user does not have permission to view this dashboard, they see a permissions error message.</p>
   */
  InitialDashboardId: string | undefined;
}

/**
 * <p>The experience that you are embedding. You can use this object to generate a url that embeds a visual into your application.</p>
 */
export interface RegisteredUserDashboardVisualEmbeddingConfiguration {
  /**
   * <p>The visual ID for the visual that you want the user to embed. This ID is included in the output URL. When the URL in response is accessed, Amazon QuickSight renders this visual.</p>
   *          <p>The Amazon Resource Name (ARN) of the dashboard that the visual belongs to must be included in the <code>AuthorizedResourceArns</code> parameter. Otherwise, the request will fail with <code>InvalidParameterValueException</code>.</p>
   */
  InitialDashboardVisualId: DashboardVisualId | undefined;
}

/**
 * <p>Information about the Q search bar embedding experience.</p>
 */
export interface RegisteredUserQSearchBarEmbeddingConfiguration {
  /**
   * <p>The ID of the Q topic that you want to make the starting topic in the Q search bar.
   *       You can find a topic ID by navigating to the Topics pane in the Amazon QuickSight application and opening
   *       a topic. The ID is in the URL for the topic that you open.</p>
   *          <p>If you don't specify an initial topic, a list of all shared topics is shown in the Q bar
   *       for your readers. When you select an initial topic, you can specify whether or not readers
   *       are allowed to select other topics from the available ones in the list.</p>
   */
  InitialTopicId?: string;
}

/**
 * <p>Information about the Amazon QuickSight console that you want to embed.</p>
 */
export interface RegisteredUserQuickSightConsoleEmbeddingConfiguration {
  /**
   * <p>The initial URL path for the Amazon QuickSight console. <code>InitialPath</code> is required.</p>
   *          <p>The entry point URL is constrained to the following paths:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>/start</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>/start/analyses</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>/start/dashboards</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>/start/favorites</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>/dashboards/DashboardId</code>. <i>DashboardId</i> is the actual ID key from the Amazon QuickSight console URL of the dashboard.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>/analyses/AnalysisId</code>. <i>AnalysisId</i> is the actual ID key from the Amazon QuickSight console URL of the analysis.</p>
   *             </li>
   *          </ul>
   */
  InitialPath?: string;
}

/**
 * <p>The type of experience you want to embed. For registered users, you can embed Amazon QuickSight dashboards or the Amazon QuickSight console.</p>
 *          <note>
 *             <p>Exactly one of the experience configurations is required. You can choose
 *                     <code>Dashboard</code> or <code>QuickSightConsole</code>. You cannot choose more
 *                 than one experience configuration.</p>
 *          </note>
 */
export interface RegisteredUserEmbeddingExperienceConfiguration {
  /**
   * <p>The configuration details for providing a dashboard embedding experience.</p>
   */
  Dashboard?: RegisteredUserDashboardEmbeddingConfiguration;

  /**
   * <p>The configuration details for providing each Amazon QuickSight console embedding experience. This can be used along with custom permissions to restrict access to certain features. For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/customizing-permissions-to-the-quicksight-console.html">Customizing Access to the Amazon QuickSight Console</a> in the <i>Amazon QuickSight User
   *             Guide</i>.</p>
   *          <p>Use <code>
   *                <a href="https://docs.aws.amazon.com/quicksight/latest/APIReference/API_GenerateEmbedUrlForRegisteredUser.html">GenerateEmbedUrlForRegisteredUser</a>
   *             </code>
   *             where
   *             you want to provide an authoring portal that allows users to create data sources,
   *             datasets, analyses, and dashboards. The users who accesses an embedded Amazon QuickSight console
   *             needs to belong to the author or admin security cohort. If you want to restrict permissions
   *             to some of these features, add a custom permissions profile to the user with the
   *             <code>
   *                <a href="https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateUser.html">UpdateUser</a>
   *             </code> API operation. Use the <code>
   *                <a href="https://docs.aws.amazon.com/quicksight/latest/APIReference/API_RegisterUser.html">RegisterUser</a>
   *             </code> API operation to add a new user with a custom permission profile attached. For more
   *             information, see the following sections in the <i>Amazon QuickSight User
   *             Guide</i>:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/quicksight/latest/user/embedded-analytics-full-console-for-authenticated-users.html">Embedding the Full Functionality of the Amazon QuickSight Console for Authenticated Users</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/quicksight/latest/user/customizing-permissions-to-the-quicksight-console.html">Customizing Access to the Amazon QuickSight Console</a>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>For more information about the high-level steps for embedding and for an interactive demo of the ways you can customize embedding, visit the <a href="https://docs.aws.amazon.com/quicksight/latest/user/quicksight-dev-portal.html">Amazon QuickSight Developer Portal</a>.</p>
   */
  QuickSightConsole?: RegisteredUserQuickSightConsoleEmbeddingConfiguration;

  /**
   * <p>The configuration details for embedding the Q search bar.</p>
   *          <p>For more information about embedding the Q search bar, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/embedding-overview.html">Embedding Overview</a> in
   *             the <i>Amazon QuickSight User Guide</i>.</p>
   */
  QSearchBar?: RegisteredUserQSearchBarEmbeddingConfiguration;

  /**
   * <p>The type of embedding experience. In this case, Amazon QuickSight visuals.</p>
   */
  DashboardVisual?: RegisteredUserDashboardVisualEmbeddingConfiguration;
}

export interface GenerateEmbedUrlForRegisteredUserRequest {
  /**
   * <p>The ID for the Amazon Web Services account that contains the dashboard that you're embedding.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>How many minutes the session is valid. The session lifetime must be in [15-600] minutes range.</p>
   */
  SessionLifetimeInMinutes?: number;

  /**
   * <p>The Amazon Resource Name for the registered user.</p>
   */
  UserArn: string | undefined;

  /**
   * <p>The experience you are embedding. For registered users, you can embed Amazon QuickSight dashboards, Amazon QuickSight visuals, the Amazon QuickSight Q search bar, or the entire Amazon QuickSight console.</p>
   */
  ExperienceConfiguration: RegisteredUserEmbeddingExperienceConfiguration | undefined;

  /**
   * <p>The domains that you want to add to the allow list for access to the generated URL that
   *           is then embedded. This optional parameter overrides the static domains that are
   *           configured in the Manage QuickSight menu in the Amazon QuickSight console. Instead, it
   *           allows only the domains that you include in this parameter. You can list up to three
   *           domains or subdomains in each API call.</p>
   *          <p>To include all subdomains under a specific domain to the allow list, use <code>*</code>.
   *             For example, <code>https://*.sapp.amazon.com</code> includes all subdomains under
   *             <code>https://sapp.amazon.com</code>.</p>
   */
  AllowedDomains?: string[];
}

export interface GenerateEmbedUrlForRegisteredUserResponse {
  /**
   * <p>The embed URL for the Amazon QuickSight dashboard, visual, Q search bar, or console.</p>
   */
  EmbedUrl: string | undefined;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status: number | undefined;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId: string | undefined;
}

/**
 * <p>The user with the provided name isn't found. This error can happen in any operation
 * 			that requires finding a user based on a provided user name, such as
 * 				<code>DeleteUser</code>, <code>DescribeUser</code>, and so on.</p>
 */
export class QuickSightUserNotFoundException extends __BaseException {
  readonly name: "QuickSightUserNotFoundException" = "QuickSightUserNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * <p>The Amazon Web Services request ID for this request.</p>
   */
  RequestId?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<QuickSightUserNotFoundException, __BaseException>) {
    super({
      name: "QuickSightUserNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, QuickSightUserNotFoundException.prototype);
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

export interface GetDashboardEmbedUrlRequest {
  /**
   * <p>The ID for the Amazon Web Services account that contains the dashboard that you're embedding.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the dashboard, also added to the Identity and Access Management (IAM)
   *             policy.</p>
   */
  DashboardId: string | undefined;

  /**
   * <p>The authentication method that the user uses to sign in.</p>
   */
  IdentityType: EmbeddingIdentityType | string | undefined;

  /**
   * <p>How many minutes the session is valid. The session lifetime must be 15-600 minutes.</p>
   */
  SessionLifetimeInMinutes?: number;

  /**
   * <p>Remove the undo/redo button on the embedded dashboard. The default is FALSE, which enables
   * 			the undo/redo button.</p>
   */
  UndoRedoDisabled?: boolean;

  /**
   * <p>Remove the reset button on the embedded dashboard. The default is FALSE, which enables the
   * 			reset button.</p>
   */
  ResetDisabled?: boolean;

  /**
   * <p>Adds persistence of state for the user session in an embedded dashboard. Persistence
   *             applies to the sheet and the parameter settings. These are control settings that the
   *             dashboard subscriber (Amazon QuickSight reader) chooses while viewing the dashboard. If this is
   *             set to <code>TRUE</code>, the settings are the same when the subscriber reopens the same
   *             dashboard URL. The state is stored in Amazon QuickSight, not in a browser cookie. If this is
   *             set to FALSE, the state of the user session is not persisted. The default is
   *                 <code>FALSE</code>.</p>
   */
  StatePersistenceEnabled?: boolean;

  /**
   * <p>The Amazon QuickSight user's Amazon Resource Name (ARN), for use with <code>QUICKSIGHT</code> identity type.
   * 			You can use this for any Amazon QuickSight users in your account (readers, authors, or
   * 			admins) authenticated as one of the following:</p>
   *          <ul>
   *             <li>
   *                <p>Active Directory (AD) users or group members</p>
   *             </li>
   *             <li>
   *                <p>Invited nonfederated users</p>
   *             </li>
   *             <li>
   *                <p>IAM users and IAM role-based sessions authenticated through Federated Single Sign-On using
   * 					SAML, OpenID Connect, or IAM federation.</p>
   *             </li>
   *          </ul>
   *          <p>Omit this parameter for users in the third group – IAM users and IAM
   *             role-based sessions.</p>
   */
  UserArn?: string;

  /**
   * <p>The Amazon QuickSight namespace that contains the dashboard IDs in this request.
   *     	   If you're not using a custom namespace, set <code>Namespace = default</code>.</p>
   */
  Namespace?: string;

  /**
   * <p>A list of one or more dashboard IDs that you want anonymous users to have tempporary access to. Currently, the <code>IdentityType</code> parameter must be set to <code>ANONYMOUS</code> because other identity types authenticate as Amazon QuickSight or IAM users. For example, if you set "<code>--dashboard-id dash_id1 --dashboard-id dash_id2 dash_id3 identity-type ANONYMOUS</code>", the session can access all three dashboards.</p>
   */
  AdditionalDashboardIds?: string[];
}

/**
 * <p>Output returned from the <code>GetDashboardEmbedUrl</code> operation.</p>
 */
export interface GetDashboardEmbedUrlResponse {
  /**
   * <p>A single-use URL that you can put into your server-side webpage to embed your
   * 			dashboard. This URL is valid for 5 minutes. The API operation provides the URL with an
   * 			<code>auth_code</code> value that enables one (and only one) sign-on to a user session
   * 			that is valid for 10 hours. </p>
   */
  EmbedUrl?: string;

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
 * <p>The identity type specified isn't supported. Supported identity types include
 * 				<code>IAM</code> and <code>QUICKSIGHT</code>.</p>
 */
export class IdentityTypeNotSupportedException extends __BaseException {
  readonly name: "IdentityTypeNotSupportedException" = "IdentityTypeNotSupportedException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * <p>The Amazon Web Services request ID for this request.</p>
   */
  RequestId?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<IdentityTypeNotSupportedException, __BaseException>) {
    super({
      name: "IdentityTypeNotSupportedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, IdentityTypeNotSupportedException.prototype);
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

export interface GetSessionEmbedUrlRequest {
  /**
   * <p>The ID for the Amazon Web Services account associated with your Amazon QuickSight subscription.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The URL you use to access the embedded session. The entry point URL is constrained to
   *           the following paths:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>/start</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>/start/analyses</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>/start/dashboards</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>/start/favorites</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>/dashboards/<i>DashboardId</i>
   *                   </code> - where <code>DashboardId</code> is the actual ID key from the Amazon QuickSight console URL of the dashboard</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>/analyses/<i>AnalysisId</i>
   *                   </code> - where <code>AnalysisId</code> is the actual ID key from the Amazon QuickSight console URL of the analysis</p>
   *             </li>
   *          </ul>
   */
  EntryPoint?: string;

  /**
   * <p>How many minutes the session is valid. The session lifetime must be 15-600 minutes.</p>
   */
  SessionLifetimeInMinutes?: number;

  /**
   * <p>The Amazon QuickSight user's Amazon Resource Name (ARN), for use with <code>QUICKSIGHT</code> identity type.
   * 			You can use this for any type of Amazon QuickSight users in your account (readers, authors, or
   * 			admins). They need to be authenticated as one of the following:</p>
   *          <ol>
   *             <li>
   *                <p>Active Directory (AD) users or group members</p>
   *             </li>
   *             <li>
   *                <p>Invited nonfederated users</p>
   *             </li>
   *             <li>
   *                <p>Identity and Access Management (IAM) users and IAM role-based sessions authenticated
   *                     through Federated Single Sign-On using SAML, OpenID Connect, or IAM
   *                     federation</p>
   *             </li>
   *          </ol>
   *          <p>Omit this parameter for users in the third group, IAM users and IAM role-based
   *             sessions.</p>
   */
  UserArn?: string;
}

export interface GetSessionEmbedUrlResponse {
  /**
   * <p>A single-use URL that you can put into your server-side web page to embed your
   * 			Amazon QuickSight session. This URL is valid for 5 minutes. The API operation provides the URL with an
   * 			<code>auth_code</code> value that enables one (and only one) sign-on to a user session
   * 			that is valid for 10 hours. </p>
   */
  EmbedUrl?: string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;
}

export enum GroupFilterAttribute {
  GROUP_NAME = "GROUP_NAME",
}

export enum GroupFilterOperator {
  StartsWith = "StartsWith",
}

/**
 * <p>A <code>GroupSearchFilter</code> object that you want to apply to your search.</p>
 */
export interface GroupSearchFilter {
  /**
   * <p>The comparison operator that you want to use as a filter, for example <code>"Operator":
   *                 "StartsWith"</code>. Currently, the only supported operator is
   *                 <code>StartsWith</code>.</p>
   */
  Operator: GroupFilterOperator | string | undefined;

  /**
   * <p>The name of the value that you want to use as a filter, for example <code>"Name":
   *                 "GROUP_NAME"</code>. Currently, the only supported name is
   *             <code>GROUP_NAME</code>.</p>
   */
  Name: GroupFilterAttribute | string | undefined;

  /**
   * <p>The value of the named item, in this case <code>GROUP_NAME</code>, that you want to use as a filter.</p>
   */
  Value: string | undefined;
}

/**
 * <p>IAM policy assignment summary.</p>
 */
export interface IAMPolicyAssignmentSummary {
  /**
   * <p>Assignment name.</p>
   */
  AssignmentName?: string;

  /**
   * <p>Assignment status.</p>
   */
  AssignmentStatus?: AssignmentStatus | string;
}

/**
 * <p>You don't have this feature activated for your account. To fix this issue, contact Amazon Web Services support.</p>
 */
export class InvalidRequestException extends __BaseException {
  readonly name: "InvalidRequestException" = "InvalidRequestException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * <p>The Amazon Web Services request ID for this request.</p>
   */
  RequestId?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidRequestException, __BaseException>) {
    super({
      name: "InvalidRequestException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidRequestException.prototype);
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

export interface ListAnalysesRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the analyses.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>A pagination token that can be used in a subsequent request.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;
}

export interface ListAnalysesResponse {
  /**
   * <p>Metadata describing each of the analyses that are listed.</p>
   */
  AnalysisSummaryList?: AnalysisSummary[];

  /**
   * <p>A pagination token that can be used in a subsequent request.</p>
   */
  NextToken?: string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;
}

export interface ListDashboardsRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the dashboards that you're
   *             listing.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to be returned per request.</p>
   */
  MaxResults?: number;
}

export interface ListDashboardsResponse {
  /**
   * <p>A structure that contains all of the dashboards in your Amazon Web Services account. This structure
   *             provides basic information about the dashboards.</p>
   */
  DashboardSummaryList?: DashboardSummary[];

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;
}

export interface ListDashboardVersionsRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the dashboard that you're listing versions
   *             for.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the dashboard.</p>
   */
  DashboardId: string | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to be returned per request.</p>
   */
  MaxResults?: number;
}

export interface ListDashboardVersionsResponse {
  /**
   * <p>A structure that contains information about each version of the dashboard.</p>
   */
  DashboardVersionSummaryList?: DashboardVersionSummary[];

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;
}

export interface ListDataSetsRequest {
  /**
   * <p>The Amazon Web Services account ID.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to be returned per request.</p>
   */
  MaxResults?: number;
}

export interface ListDataSetsResponse {
  /**
   * <p>The list of dataset summaries.</p>
   */
  DataSetSummaries?: DataSetSummary[];

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

export interface ListDataSourcesRequest {
  /**
   * <p>The Amazon Web Services account ID.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to be returned per request.</p>
   */
  MaxResults?: number;
}

/**
 * @internal
 */
export const CreateAnalysisResponseFilterSensitiveLog = (obj: CreateAnalysisResponse): any => ({
  ...obj,
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
export const ExportToCSVOptionFilterSensitiveLog = (obj: ExportToCSVOption): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SheetControlsOptionFilterSensitiveLog = (obj: SheetControlsOption): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ExportHiddenFieldsOptionFilterSensitiveLog = (obj: ExportHiddenFieldsOption): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DashboardVisualPublishOptionsFilterSensitiveLog = (obj: DashboardVisualPublishOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DashboardPublishOptionsFilterSensitiveLog = (obj: DashboardPublishOptions): any => ({
  ...obj,
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
export const DashboardSourceTemplateFilterSensitiveLog = (obj: DashboardSourceTemplate): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DashboardSourceEntityFilterSensitiveLog = (obj: DashboardSourceEntity): any => ({
  ...obj,
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
export const CreateDashboardResponseFilterSensitiveLog = (obj: CreateDashboardResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DataSetUsageConfigurationFilterSensitiveLog = (obj: DataSetUsageConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FieldFolderFilterSensitiveLog = (obj: FieldFolder): any => ({
  ...obj,
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
export const ProjectOperationFilterSensitiveLog = (obj: ProjectOperation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RenameColumnOperationFilterSensitiveLog = (obj: RenameColumnOperation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagColumnOperationFilterSensitiveLog = (obj: TagColumnOperation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagColumnOperationFilterSensitiveLog = (obj: UntagColumnOperation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TransformOperationFilterSensitiveLog = (obj: TransformOperation): any => {
  if (obj.ProjectOperation !== undefined)
    return { ProjectOperation: ProjectOperationFilterSensitiveLog(obj.ProjectOperation) };
  if (obj.FilterOperation !== undefined)
    return { FilterOperation: FilterOperationFilterSensitiveLog(obj.FilterOperation) };
  if (obj.CreateColumnsOperation !== undefined)
    return { CreateColumnsOperation: CreateColumnsOperationFilterSensitiveLog(obj.CreateColumnsOperation) };
  if (obj.RenameColumnOperation !== undefined)
    return { RenameColumnOperation: RenameColumnOperationFilterSensitiveLog(obj.RenameColumnOperation) };
  if (obj.CastColumnTypeOperation !== undefined)
    return { CastColumnTypeOperation: CastColumnTypeOperationFilterSensitiveLog(obj.CastColumnTypeOperation) };
  if (obj.TagColumnOperation !== undefined)
    return { TagColumnOperation: TagColumnOperationFilterSensitiveLog(obj.TagColumnOperation) };
  if (obj.UntagColumnOperation !== undefined)
    return { UntagColumnOperation: UntagColumnOperationFilterSensitiveLog(obj.UntagColumnOperation) };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const JoinKeyPropertiesFilterSensitiveLog = (obj: JoinKeyProperties): any => ({
  ...obj,
});

/**
 * @internal
 */
export const JoinInstructionFilterSensitiveLog = (obj: JoinInstruction): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LogicalTableSourceFilterSensitiveLog = (obj: LogicalTableSource): any => ({
  ...obj,
});

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
export const InputColumnFilterSensitiveLog = (obj: InputColumn): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CustomSqlFilterSensitiveLog = (obj: CustomSql): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RelationalTableFilterSensitiveLog = (obj: RelationalTable): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UploadSettingsFilterSensitiveLog = (obj: UploadSettings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const S3SourceFilterSensitiveLog = (obj: S3Source): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PhysicalTableFilterSensitiveLog = (obj: PhysicalTable): any => {
  if (obj.RelationalTable !== undefined)
    return { RelationalTable: RelationalTableFilterSensitiveLog(obj.RelationalTable) };
  if (obj.CustomSql !== undefined) return { CustomSql: CustomSqlFilterSensitiveLog(obj.CustomSql) };
  if (obj.S3Source !== undefined) return { S3Source: S3SourceFilterSensitiveLog(obj.S3Source) };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const RowLevelPermissionDataSetFilterSensitiveLog = (obj: RowLevelPermissionDataSet): any => ({
  ...obj,
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
      (acc: any, [key, value]: [string, PhysicalTable]) => ((acc[key] = PhysicalTableFilterSensitiveLog(value)), acc),
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
export const CreateDataSetResponseFilterSensitiveLog = (obj: CreateDataSetResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DatabricksParametersFilterSensitiveLog = (obj: DatabricksParameters): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ExasolParametersFilterSensitiveLog = (obj: ExasolParameters): any => ({
  ...obj,
});

/**
 * @internal
 */
export const JiraParametersFilterSensitiveLog = (obj: JiraParameters): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MariaDbParametersFilterSensitiveLog = (obj: MariaDbParameters): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MySqlParametersFilterSensitiveLog = (obj: MySqlParameters): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OracleParametersFilterSensitiveLog = (obj: OracleParameters): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PostgreSqlParametersFilterSensitiveLog = (obj: PostgreSqlParameters): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PrestoParametersFilterSensitiveLog = (obj: PrestoParameters): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RdsParametersFilterSensitiveLog = (obj: RdsParameters): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RedshiftParametersFilterSensitiveLog = (obj: RedshiftParameters): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ManifestFileLocationFilterSensitiveLog = (obj: ManifestFileLocation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const S3ParametersFilterSensitiveLog = (obj: S3Parameters): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ServiceNowParametersFilterSensitiveLog = (obj: ServiceNowParameters): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SnowflakeParametersFilterSensitiveLog = (obj: SnowflakeParameters): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SparkParametersFilterSensitiveLog = (obj: SparkParameters): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SqlServerParametersFilterSensitiveLog = (obj: SqlServerParameters): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TeradataParametersFilterSensitiveLog = (obj: TeradataParameters): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TwitterParametersFilterSensitiveLog = (obj: TwitterParameters): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DataSourceParametersFilterSensitiveLog = (obj: DataSourceParameters): any => {
  if (obj.AmazonElasticsearchParameters !== undefined)
    return {
      AmazonElasticsearchParameters: AmazonElasticsearchParametersFilterSensitiveLog(obj.AmazonElasticsearchParameters),
    };
  if (obj.AthenaParameters !== undefined)
    return { AthenaParameters: AthenaParametersFilterSensitiveLog(obj.AthenaParameters) };
  if (obj.AuroraParameters !== undefined)
    return { AuroraParameters: AuroraParametersFilterSensitiveLog(obj.AuroraParameters) };
  if (obj.AuroraPostgreSqlParameters !== undefined)
    return { AuroraPostgreSqlParameters: AuroraPostgreSqlParametersFilterSensitiveLog(obj.AuroraPostgreSqlParameters) };
  if (obj.AwsIotAnalyticsParameters !== undefined)
    return { AwsIotAnalyticsParameters: AwsIotAnalyticsParametersFilterSensitiveLog(obj.AwsIotAnalyticsParameters) };
  if (obj.JiraParameters !== undefined) return { JiraParameters: JiraParametersFilterSensitiveLog(obj.JiraParameters) };
  if (obj.MariaDbParameters !== undefined)
    return { MariaDbParameters: MariaDbParametersFilterSensitiveLog(obj.MariaDbParameters) };
  if (obj.MySqlParameters !== undefined)
    return { MySqlParameters: MySqlParametersFilterSensitiveLog(obj.MySqlParameters) };
  if (obj.OracleParameters !== undefined)
    return { OracleParameters: OracleParametersFilterSensitiveLog(obj.OracleParameters) };
  if (obj.PostgreSqlParameters !== undefined)
    return { PostgreSqlParameters: PostgreSqlParametersFilterSensitiveLog(obj.PostgreSqlParameters) };
  if (obj.PrestoParameters !== undefined)
    return { PrestoParameters: PrestoParametersFilterSensitiveLog(obj.PrestoParameters) };
  if (obj.RdsParameters !== undefined) return { RdsParameters: RdsParametersFilterSensitiveLog(obj.RdsParameters) };
  if (obj.RedshiftParameters !== undefined)
    return { RedshiftParameters: RedshiftParametersFilterSensitiveLog(obj.RedshiftParameters) };
  if (obj.S3Parameters !== undefined) return { S3Parameters: S3ParametersFilterSensitiveLog(obj.S3Parameters) };
  if (obj.ServiceNowParameters !== undefined)
    return { ServiceNowParameters: ServiceNowParametersFilterSensitiveLog(obj.ServiceNowParameters) };
  if (obj.SnowflakeParameters !== undefined)
    return { SnowflakeParameters: SnowflakeParametersFilterSensitiveLog(obj.SnowflakeParameters) };
  if (obj.SparkParameters !== undefined)
    return { SparkParameters: SparkParametersFilterSensitiveLog(obj.SparkParameters) };
  if (obj.SqlServerParameters !== undefined)
    return { SqlServerParameters: SqlServerParametersFilterSensitiveLog(obj.SqlServerParameters) };
  if (obj.TeradataParameters !== undefined)
    return { TeradataParameters: TeradataParametersFilterSensitiveLog(obj.TeradataParameters) };
  if (obj.TwitterParameters !== undefined)
    return { TwitterParameters: TwitterParametersFilterSensitiveLog(obj.TwitterParameters) };
  if (obj.AmazonOpenSearchParameters !== undefined)
    return { AmazonOpenSearchParameters: AmazonOpenSearchParametersFilterSensitiveLog(obj.AmazonOpenSearchParameters) };
  if (obj.ExasolParameters !== undefined)
    return { ExasolParameters: ExasolParametersFilterSensitiveLog(obj.ExasolParameters) };
  if (obj.DatabricksParameters !== undefined)
    return { DatabricksParameters: DatabricksParametersFilterSensitiveLog(obj.DatabricksParameters) };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const CredentialPairFilterSensitiveLog = (obj: CredentialPair): any => ({
  ...obj,
  ...(obj.AlternateDataSourceParameters && {
    AlternateDataSourceParameters: obj.AlternateDataSourceParameters.map((item) =>
      DataSourceParametersFilterSensitiveLog(item)
    ),
  }),
});

/**
 * @internal
 */
export const DataSourceCredentialsFilterSensitiveLog = (obj: DataSourceCredentials): any => ({
  ...obj,
  ...(obj.CredentialPair && { CredentialPair: CredentialPairFilterSensitiveLog(obj.CredentialPair) }),
});

/**
 * @internal
 */
export const SslPropertiesFilterSensitiveLog = (obj: SslProperties): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VpcConnectionPropertiesFilterSensitiveLog = (obj: VpcConnectionProperties): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateDataSourceRequestFilterSensitiveLog = (obj: CreateDataSourceRequest): any => ({
  ...obj,
  ...(obj.DataSourceParameters && {
    DataSourceParameters: DataSourceParametersFilterSensitiveLog(obj.DataSourceParameters),
  }),
  ...(obj.Credentials && { Credentials: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateDataSourceResponseFilterSensitiveLog = (obj: CreateDataSourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateFolderRequestFilterSensitiveLog = (obj: CreateFolderRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateFolderResponseFilterSensitiveLog = (obj: CreateFolderResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateFolderMembershipRequestFilterSensitiveLog = (obj: CreateFolderMembershipRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FolderMemberFilterSensitiveLog = (obj: FolderMember): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateFolderMembershipResponseFilterSensitiveLog = (obj: CreateFolderMembershipResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateGroupRequestFilterSensitiveLog = (obj: CreateGroupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GroupFilterSensitiveLog = (obj: Group): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateGroupResponseFilterSensitiveLog = (obj: CreateGroupResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateGroupMembershipRequestFilterSensitiveLog = (obj: CreateGroupMembershipRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GroupMemberFilterSensitiveLog = (obj: GroupMember): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateGroupMembershipResponseFilterSensitiveLog = (obj: CreateGroupMembershipResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateIAMPolicyAssignmentRequestFilterSensitiveLog = (obj: CreateIAMPolicyAssignmentRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateIAMPolicyAssignmentResponseFilterSensitiveLog = (obj: CreateIAMPolicyAssignmentResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateIngestionRequestFilterSensitiveLog = (obj: CreateIngestionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateIngestionResponseFilterSensitiveLog = (obj: CreateIngestionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateNamespaceRequestFilterSensitiveLog = (obj: CreateNamespaceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateNamespaceResponseFilterSensitiveLog = (obj: CreateNamespaceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DataSetSchemaFilterSensitiveLog = (obj: DataSetSchema): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DataSetConfigurationFilterSensitiveLog = (obj: DataSetConfiguration): any => ({
  ...obj,
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
export const TemplateSourceAnalysisFilterSensitiveLog = (obj: TemplateSourceAnalysis): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TemplateSourceTemplateFilterSensitiveLog = (obj: TemplateSourceTemplate): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TemplateSourceEntityFilterSensitiveLog = (obj: TemplateSourceEntity): any => ({
  ...obj,
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
export const CreateTemplateResponseFilterSensitiveLog = (obj: CreateTemplateResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateTemplateAliasRequestFilterSensitiveLog = (obj: CreateTemplateAliasRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TemplateAliasFilterSensitiveLog = (obj: TemplateAlias): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateTemplateAliasResponseFilterSensitiveLog = (obj: CreateTemplateAliasResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DataColorPaletteFilterSensitiveLog = (obj: DataColorPalette): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TileStyleFilterSensitiveLog = (obj: TileStyle): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GutterStyleFilterSensitiveLog = (obj: GutterStyle): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MarginStyleFilterSensitiveLog = (obj: MarginStyle): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TileLayoutStyleFilterSensitiveLog = (obj: TileLayoutStyle): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SheetStyleFilterSensitiveLog = (obj: SheetStyle): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FontFilterSensitiveLog = (obj: Font): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TypographyFilterSensitiveLog = (obj: Typography): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UIColorPaletteFilterSensitiveLog = (obj: UIColorPalette): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ThemeConfigurationFilterSensitiveLog = (obj: ThemeConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateThemeRequestFilterSensitiveLog = (obj: CreateThemeRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateThemeResponseFilterSensitiveLog = (obj: CreateThemeResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateThemeAliasRequestFilterSensitiveLog = (obj: CreateThemeAliasRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ThemeAliasFilterSensitiveLog = (obj: ThemeAlias): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateThemeAliasResponseFilterSensitiveLog = (obj: CreateThemeAliasResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DashboardErrorFilterSensitiveLog = (obj: DashboardError): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DashboardVersionFilterSensitiveLog = (obj: DashboardVersion): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DashboardFilterSensitiveLog = (obj: Dashboard): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DashboardSearchFilterFilterSensitiveLog = (obj: DashboardSearchFilter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DashboardSummaryFilterSensitiveLog = (obj: DashboardSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DashboardVersionSummaryFilterSensitiveLog = (obj: DashboardVersionSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OutputColumnFilterSensitiveLog = (obj: OutputColumn): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DataSetFilterSensitiveLog = (obj: DataSet): any => ({
  ...obj,
  ...(obj.PhysicalTableMap && {
    PhysicalTableMap: Object.entries(obj.PhysicalTableMap).reduce(
      (acc: any, [key, value]: [string, PhysicalTable]) => ((acc[key] = PhysicalTableFilterSensitiveLog(value)), acc),
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
export const DataSetSearchFilterFilterSensitiveLog = (obj: DataSetSearchFilter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DataSetSummaryFilterSensitiveLog = (obj: DataSetSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DataSourceErrorInfoFilterSensitiveLog = (obj: DataSourceErrorInfo): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DataSourceFilterSensitiveLog = (obj: DataSource): any => ({
  ...obj,
  ...(obj.DataSourceParameters && {
    DataSourceParameters: DataSourceParametersFilterSensitiveLog(obj.DataSourceParameters),
  }),
  ...(obj.AlternateDataSourceParameters && {
    AlternateDataSourceParameters: obj.AlternateDataSourceParameters.map((item) =>
      DataSourceParametersFilterSensitiveLog(item)
    ),
  }),
});

/**
 * @internal
 */
export const DataSourceSearchFilterFilterSensitiveLog = (obj: DataSourceSearchFilter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DataSourceSummaryFilterSensitiveLog = (obj: DataSourceSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteAccountCustomizationRequestFilterSensitiveLog = (obj: DeleteAccountCustomizationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteAccountCustomizationResponseFilterSensitiveLog = (obj: DeleteAccountCustomizationResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteAccountSubscriptionRequestFilterSensitiveLog = (obj: DeleteAccountSubscriptionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteAccountSubscriptionResponseFilterSensitiveLog = (obj: DeleteAccountSubscriptionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteAnalysisRequestFilterSensitiveLog = (obj: DeleteAnalysisRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteAnalysisResponseFilterSensitiveLog = (obj: DeleteAnalysisResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteDashboardRequestFilterSensitiveLog = (obj: DeleteDashboardRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteDashboardResponseFilterSensitiveLog = (obj: DeleteDashboardResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteDataSetRequestFilterSensitiveLog = (obj: DeleteDataSetRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteDataSetResponseFilterSensitiveLog = (obj: DeleteDataSetResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteDataSourceRequestFilterSensitiveLog = (obj: DeleteDataSourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteDataSourceResponseFilterSensitiveLog = (obj: DeleteDataSourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteFolderRequestFilterSensitiveLog = (obj: DeleteFolderRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteFolderResponseFilterSensitiveLog = (obj: DeleteFolderResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteFolderMembershipRequestFilterSensitiveLog = (obj: DeleteFolderMembershipRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteFolderMembershipResponseFilterSensitiveLog = (obj: DeleteFolderMembershipResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteGroupRequestFilterSensitiveLog = (obj: DeleteGroupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteGroupResponseFilterSensitiveLog = (obj: DeleteGroupResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteGroupMembershipRequestFilterSensitiveLog = (obj: DeleteGroupMembershipRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteGroupMembershipResponseFilterSensitiveLog = (obj: DeleteGroupMembershipResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteIAMPolicyAssignmentRequestFilterSensitiveLog = (obj: DeleteIAMPolicyAssignmentRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteIAMPolicyAssignmentResponseFilterSensitiveLog = (obj: DeleteIAMPolicyAssignmentResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteNamespaceRequestFilterSensitiveLog = (obj: DeleteNamespaceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteNamespaceResponseFilterSensitiveLog = (obj: DeleteNamespaceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteTemplateRequestFilterSensitiveLog = (obj: DeleteTemplateRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteTemplateResponseFilterSensitiveLog = (obj: DeleteTemplateResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteTemplateAliasRequestFilterSensitiveLog = (obj: DeleteTemplateAliasRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteTemplateAliasResponseFilterSensitiveLog = (obj: DeleteTemplateAliasResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteThemeRequestFilterSensitiveLog = (obj: DeleteThemeRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteThemeResponseFilterSensitiveLog = (obj: DeleteThemeResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteThemeAliasRequestFilterSensitiveLog = (obj: DeleteThemeAliasRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteThemeAliasResponseFilterSensitiveLog = (obj: DeleteThemeAliasResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteUserRequestFilterSensitiveLog = (obj: DeleteUserRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteUserResponseFilterSensitiveLog = (obj: DeleteUserResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteUserByPrincipalIdRequestFilterSensitiveLog = (obj: DeleteUserByPrincipalIdRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteUserByPrincipalIdResponseFilterSensitiveLog = (obj: DeleteUserByPrincipalIdResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAccountCustomizationRequestFilterSensitiveLog = (
  obj: DescribeAccountCustomizationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAccountCustomizationResponseFilterSensitiveLog = (
  obj: DescribeAccountCustomizationResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAccountSettingsRequestFilterSensitiveLog = (obj: DescribeAccountSettingsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAccountSettingsResponseFilterSensitiveLog = (obj: DescribeAccountSettingsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAccountSubscriptionRequestFilterSensitiveLog = (obj: DescribeAccountSubscriptionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAccountSubscriptionResponseFilterSensitiveLog = (
  obj: DescribeAccountSubscriptionResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAnalysisRequestFilterSensitiveLog = (obj: DescribeAnalysisRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAnalysisResponseFilterSensitiveLog = (obj: DescribeAnalysisResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAnalysisDefinitionRequestFilterSensitiveLog = (obj: DescribeAnalysisDefinitionRequest): any => ({
  ...obj,
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
export const DescribeAnalysisPermissionsRequestFilterSensitiveLog = (obj: DescribeAnalysisPermissionsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAnalysisPermissionsResponseFilterSensitiveLog = (
  obj: DescribeAnalysisPermissionsResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeDashboardRequestFilterSensitiveLog = (obj: DescribeDashboardRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeDashboardResponseFilterSensitiveLog = (obj: DescribeDashboardResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeDashboardDefinitionRequestFilterSensitiveLog = (obj: DescribeDashboardDefinitionRequest): any => ({
  ...obj,
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
export const DescribeDashboardPermissionsRequestFilterSensitiveLog = (
  obj: DescribeDashboardPermissionsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LinkSharingConfigurationFilterSensitiveLog = (obj: LinkSharingConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeDashboardPermissionsResponseFilterSensitiveLog = (
  obj: DescribeDashboardPermissionsResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeDataSetRequestFilterSensitiveLog = (obj: DescribeDataSetRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeDataSetResponseFilterSensitiveLog = (obj: DescribeDataSetResponse): any => ({
  ...obj,
  ...(obj.DataSet && { DataSet: DataSetFilterSensitiveLog(obj.DataSet) }),
});

/**
 * @internal
 */
export const DescribeDataSetPermissionsRequestFilterSensitiveLog = (obj: DescribeDataSetPermissionsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeDataSetPermissionsResponseFilterSensitiveLog = (obj: DescribeDataSetPermissionsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeDataSourceRequestFilterSensitiveLog = (obj: DescribeDataSourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeDataSourceResponseFilterSensitiveLog = (obj: DescribeDataSourceResponse): any => ({
  ...obj,
  ...(obj.DataSource && { DataSource: DataSourceFilterSensitiveLog(obj.DataSource) }),
});

/**
 * @internal
 */
export const DescribeDataSourcePermissionsRequestFilterSensitiveLog = (
  obj: DescribeDataSourcePermissionsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeDataSourcePermissionsResponseFilterSensitiveLog = (
  obj: DescribeDataSourcePermissionsResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeFolderRequestFilterSensitiveLog = (obj: DescribeFolderRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FolderFilterSensitiveLog = (obj: Folder): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeFolderResponseFilterSensitiveLog = (obj: DescribeFolderResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeFolderPermissionsRequestFilterSensitiveLog = (obj: DescribeFolderPermissionsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeFolderPermissionsResponseFilterSensitiveLog = (obj: DescribeFolderPermissionsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeFolderResolvedPermissionsRequestFilterSensitiveLog = (
  obj: DescribeFolderResolvedPermissionsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeFolderResolvedPermissionsResponseFilterSensitiveLog = (
  obj: DescribeFolderResolvedPermissionsResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeGroupRequestFilterSensitiveLog = (obj: DescribeGroupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeGroupResponseFilterSensitiveLog = (obj: DescribeGroupResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeGroupMembershipRequestFilterSensitiveLog = (obj: DescribeGroupMembershipRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeGroupMembershipResponseFilterSensitiveLog = (obj: DescribeGroupMembershipResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeIAMPolicyAssignmentRequestFilterSensitiveLog = (obj: DescribeIAMPolicyAssignmentRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const IAMPolicyAssignmentFilterSensitiveLog = (obj: IAMPolicyAssignment): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeIAMPolicyAssignmentResponseFilterSensitiveLog = (
  obj: DescribeIAMPolicyAssignmentResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeIngestionRequestFilterSensitiveLog = (obj: DescribeIngestionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ErrorInfoFilterSensitiveLog = (obj: ErrorInfo): any => ({
  ...obj,
});

/**
 * @internal
 */
export const QueueInfoFilterSensitiveLog = (obj: QueueInfo): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RowInfoFilterSensitiveLog = (obj: RowInfo): any => ({
  ...obj,
});

/**
 * @internal
 */
export const IngestionFilterSensitiveLog = (obj: Ingestion): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeIngestionResponseFilterSensitiveLog = (obj: DescribeIngestionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeIpRestrictionRequestFilterSensitiveLog = (obj: DescribeIpRestrictionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeIpRestrictionResponseFilterSensitiveLog = (obj: DescribeIpRestrictionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeNamespaceRequestFilterSensitiveLog = (obj: DescribeNamespaceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NamespaceErrorFilterSensitiveLog = (obj: NamespaceError): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NamespaceInfoV2FilterSensitiveLog = (obj: NamespaceInfoV2): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeNamespaceResponseFilterSensitiveLog = (obj: DescribeNamespaceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeTemplateRequestFilterSensitiveLog = (obj: DescribeTemplateRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TemplateErrorFilterSensitiveLog = (obj: TemplateError): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TemplateVersionFilterSensitiveLog = (obj: TemplateVersion): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TemplateFilterSensitiveLog = (obj: Template): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeTemplateResponseFilterSensitiveLog = (obj: DescribeTemplateResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeTemplateAliasRequestFilterSensitiveLog = (obj: DescribeTemplateAliasRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeTemplateAliasResponseFilterSensitiveLog = (obj: DescribeTemplateAliasResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeTemplateDefinitionRequestFilterSensitiveLog = (obj: DescribeTemplateDefinitionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeTemplateDefinitionResponseFilterSensitiveLog = (obj: DescribeTemplateDefinitionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeTemplatePermissionsRequestFilterSensitiveLog = (obj: DescribeTemplatePermissionsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeTemplatePermissionsResponseFilterSensitiveLog = (
  obj: DescribeTemplatePermissionsResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeThemeRequestFilterSensitiveLog = (obj: DescribeThemeRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ThemeErrorFilterSensitiveLog = (obj: ThemeError): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ThemeVersionFilterSensitiveLog = (obj: ThemeVersion): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ThemeFilterSensitiveLog = (obj: Theme): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeThemeResponseFilterSensitiveLog = (obj: DescribeThemeResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeThemeAliasRequestFilterSensitiveLog = (obj: DescribeThemeAliasRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeThemeAliasResponseFilterSensitiveLog = (obj: DescribeThemeAliasResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeThemePermissionsRequestFilterSensitiveLog = (obj: DescribeThemePermissionsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeThemePermissionsResponseFilterSensitiveLog = (obj: DescribeThemePermissionsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeUserRequestFilterSensitiveLog = (obj: DescribeUserRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UserFilterSensitiveLog = (obj: User): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeUserResponseFilterSensitiveLog = (obj: DescribeUserResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MemberIdArnPairFilterSensitiveLog = (obj: MemberIdArnPair): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FolderSearchFilterFilterSensitiveLog = (obj: FolderSearchFilter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FolderSummaryFilterSensitiveLog = (obj: FolderSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SessionTagFilterSensitiveLog = (obj: SessionTag): any => ({
  ...obj,
  ...(obj.Value && { Value: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GenerateEmbedUrlForAnonymousUserRequestFilterSensitiveLog = (
  obj: GenerateEmbedUrlForAnonymousUserRequest
): any => ({
  ...obj,
  ...(obj.SessionTags && { SessionTags: obj.SessionTags.map((item) => SessionTagFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const GenerateEmbedUrlForAnonymousUserResponseFilterSensitiveLog = (
  obj: GenerateEmbedUrlForAnonymousUserResponse
): any => ({
  ...obj,
  ...(obj.EmbedUrl && { EmbedUrl: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RegisteredUserDashboardEmbeddingConfigurationFilterSensitiveLog = (
  obj: RegisteredUserDashboardEmbeddingConfiguration
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RegisteredUserDashboardVisualEmbeddingConfigurationFilterSensitiveLog = (
  obj: RegisteredUserDashboardVisualEmbeddingConfiguration
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RegisteredUserQSearchBarEmbeddingConfigurationFilterSensitiveLog = (
  obj: RegisteredUserQSearchBarEmbeddingConfiguration
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RegisteredUserQuickSightConsoleEmbeddingConfigurationFilterSensitiveLog = (
  obj: RegisteredUserQuickSightConsoleEmbeddingConfiguration
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RegisteredUserEmbeddingExperienceConfigurationFilterSensitiveLog = (
  obj: RegisteredUserEmbeddingExperienceConfiguration
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GenerateEmbedUrlForRegisteredUserRequestFilterSensitiveLog = (
  obj: GenerateEmbedUrlForRegisteredUserRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GenerateEmbedUrlForRegisteredUserResponseFilterSensitiveLog = (
  obj: GenerateEmbedUrlForRegisteredUserResponse
): any => ({
  ...obj,
  ...(obj.EmbedUrl && { EmbedUrl: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetDashboardEmbedUrlRequestFilterSensitiveLog = (obj: GetDashboardEmbedUrlRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetDashboardEmbedUrlResponseFilterSensitiveLog = (obj: GetDashboardEmbedUrlResponse): any => ({
  ...obj,
  ...(obj.EmbedUrl && { EmbedUrl: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetSessionEmbedUrlRequestFilterSensitiveLog = (obj: GetSessionEmbedUrlRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetSessionEmbedUrlResponseFilterSensitiveLog = (obj: GetSessionEmbedUrlResponse): any => ({
  ...obj,
  ...(obj.EmbedUrl && { EmbedUrl: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GroupSearchFilterFilterSensitiveLog = (obj: GroupSearchFilter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const IAMPolicyAssignmentSummaryFilterSensitiveLog = (obj: IAMPolicyAssignmentSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAnalysesRequestFilterSensitiveLog = (obj: ListAnalysesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAnalysesResponseFilterSensitiveLog = (obj: ListAnalysesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDashboardsRequestFilterSensitiveLog = (obj: ListDashboardsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDashboardsResponseFilterSensitiveLog = (obj: ListDashboardsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDashboardVersionsRequestFilterSensitiveLog = (obj: ListDashboardVersionsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDashboardVersionsResponseFilterSensitiveLog = (obj: ListDashboardVersionsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDataSetsRequestFilterSensitiveLog = (obj: ListDataSetsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDataSetsResponseFilterSensitiveLog = (obj: ListDataSetsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDataSourcesRequestFilterSensitiveLog = (obj: ListDataSourcesRequest): any => ({
  ...obj,
});
