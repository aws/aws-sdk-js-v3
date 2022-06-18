// smithy-typescript generated code
import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";

import { DataSourceParameters, RowLevelPermissionDataSet, ThemeConfiguration } from "./models_0";

export enum Edition {
  ENTERPRISE = "ENTERPRISE",
  STANDARD = "STANDARD",
}

/**
 * <p>The active Identity and Access Management (IAM) policy assignment.</p>
 */
export interface ActiveIAMPolicyAssignment {
  /**
   * <p>A name for the IAM policy assignment.</p>
   */
  AssignmentName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  PolicyArn?: string;
}

export namespace ActiveIAMPolicyAssignment {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ActiveIAMPolicyAssignment): any => ({
    ...obj,
  });
}

export enum DashboardBehavior {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

/**
 * <p>Ad hoc (one-time) filtering option.</p>
 */
export interface AdHocFilteringOption {
  /**
   * <p>Availability status.</p>
   */
  AvailabilityStatus?: DashboardBehavior | string;
}

export namespace AdHocFilteringOption {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AdHocFilteringOption): any => ({
    ...obj,
  });
}

/**
 * <p>The parameters for OpenSearch.</p>
 */
export interface AmazonElasticsearchParameters {
  /**
   * <p>The OpenSearch domain.</p>
   */
  Domain: string | undefined;
}

export namespace AmazonElasticsearchParameters {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AmazonElasticsearchParameters): any => ({
    ...obj,
  });
}

/**
 * <p>The parameters for OpenSearch.</p>
 */
export interface AmazonOpenSearchParameters {
  /**
   * <p>The OpenSearch domain.</p>
   */
  Domain: string | undefined;
}

export namespace AmazonOpenSearchParameters {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AmazonOpenSearchParameters): any => ({
    ...obj,
  });
}

export enum AnalysisErrorType {
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
 * <p>Analysis error.</p>
 */
export interface AnalysisError {
  /**
   * <p>The type of the analysis error.</p>
   */
  Type?: AnalysisErrorType | string;

  /**
   * <p>The message associated with the analysis error.</p>
   */
  Message?: string;
}

export namespace AnalysisError {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AnalysisError): any => ({
    ...obj,
  });
}

/**
 * <p>A <i>sheet</i>, which is an object that contains a set of visuals that
 *             are viewed together on one page in Amazon QuickSight. Every analysis and dashboard
 *             contains at least one sheet. Each sheet contains at least one visualization widget, for
 *             example a chart, pivot table, or narrative insight. Sheets can be associated with other
 *             components, such as controls, filters, and so on.</p>
 */
export interface Sheet {
  /**
   * <p>The unique identifier associated with a sheet.</p>
   */
  SheetId?: string;

  /**
   * <p>The name of a sheet. This name is displayed on the sheet's tab in the Amazon QuickSight
   *             console.</p>
   */
  Name?: string;
}

export namespace Sheet {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Sheet): any => ({
    ...obj,
  });
}

export enum ResourceStatus {
  CREATION_FAILED = "CREATION_FAILED",
  CREATION_IN_PROGRESS = "CREATION_IN_PROGRESS",
  CREATION_SUCCESSFUL = "CREATION_SUCCESSFUL",
  DELETED = "DELETED",
  UPDATE_FAILED = "UPDATE_FAILED",
  UPDATE_IN_PROGRESS = "UPDATE_IN_PROGRESS",
  UPDATE_SUCCESSFUL = "UPDATE_SUCCESSFUL",
}

export enum AnalysisFilterAttribute {
  QUICKSIGHT_USER = "QUICKSIGHT_USER",
}

export enum FilterOperator {
  StringEquals = "StringEquals",
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

export namespace DataSetReference {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DataSetReference): any => ({
    ...obj,
  });
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

export namespace AnalysisSourceTemplate {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AnalysisSourceTemplate): any => ({
    ...obj,
  });
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

export namespace AnalysisSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AnalysisSummary): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the dashboard that you want to embed.</p>
 */
export interface AnonymousUserDashboardEmbeddingConfiguration {
  /**
   * <p>The dashboard ID for the dashboard that you want the user to see first. This ID is included in the output URL. When the URL in response is accessed, Amazon QuickSight renders this dashboard.</p>
   *         <p>The Amazon Resource Name (ARN) of this dashboard must be included in the <code>AuthorizedResourceArns</code> parameter. Otherwise, the request will fail with <code>InvalidParameterValueException</code>.</p>
   */
  InitialDashboardId: string | undefined;
}

export namespace AnonymousUserDashboardEmbeddingConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AnonymousUserDashboardEmbeddingConfiguration): any => ({
    ...obj,
  });
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
}

export namespace AthenaParameters {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AthenaParameters): any => ({
    ...obj,
  });
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

export namespace AuroraParameters {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AuroraParameters): any => ({
    ...obj,
  });
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

export namespace AuroraPostgreSqlParameters {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AuroraPostgreSqlParameters): any => ({
    ...obj,
  });
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

export namespace AwsIotAnalyticsParameters {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsIotAnalyticsParameters): any => ({
    ...obj,
  });
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

export namespace BorderStyle {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BorderStyle): any => ({
    ...obj,
  });
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

export namespace CalculatedColumn {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CalculatedColumn): any => ({
    ...obj,
  });
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

export namespace CastColumnTypeOperation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CastColumnTypeOperation): any => ({
    ...obj,
  });
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

export namespace ColumnDescription {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ColumnDescription): any => ({
    ...obj,
  });
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
  CountryCode: GeoSpatialCountryCode | string | undefined;

  /**
   * <p>Columns in this hierarchy.</p>
   */
  Columns: string[] | undefined;
}

export namespace GeoSpatialColumnGroup {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GeoSpatialColumnGroup): any => ({
    ...obj,
  });
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

export namespace ColumnGroupColumnSchema {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ColumnGroupColumnSchema): any => ({
    ...obj,
  });
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

export namespace ColumnGroupSchema {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ColumnGroupSchema): any => ({
    ...obj,
  });
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

export namespace ColumnSchema {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ColumnSchema): any => ({
    ...obj,
  });
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

export namespace ColumnTag {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ColumnTag): any => ({
    ...obj,
  });
}

export enum ColumnTagName {
  COLUMN_DESCRIPTION = "COLUMN_DESCRIPTION",
  COLUMN_GEOGRAPHIC_ROLE = "COLUMN_GEOGRAPHIC_ROLE",
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

export namespace DateTimeParameter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DateTimeParameter): any => ({
    ...obj,
  });
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

export namespace DecimalParameter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DecimalParameter): any => ({
    ...obj,
  });
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

export namespace IntegerParameter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: IntegerParameter): any => ({
    ...obj,
  });
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

export namespace StringParameter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StringParameter): any => ({
    ...obj,
  });
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

export namespace CreateColumnsOperation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateColumnsOperation): any => ({
    ...obj,
  });
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

export namespace ExportToCSVOption {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExportToCSVOption): any => ({
    ...obj,
  });
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

export namespace SheetControlsOption {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SheetControlsOption): any => ({
    ...obj,
  });
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

export namespace DashboardSourceTemplate {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DashboardSourceTemplate): any => ({
    ...obj,
  });
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

export namespace FilterOperation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FilterOperation): any => ({
    ...obj,
  });
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

export namespace ProjectOperation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ProjectOperation): any => ({
    ...obj,
  });
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

export namespace RenameColumnOperation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RenameColumnOperation): any => ({
    ...obj,
  });
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
   *         <note>
   *             <p>This is not tags for the Amazon Web Services tagging feature.</p>
   *         </note>
   */
  Tags: ColumnTag[] | undefined;
}

export namespace TagColumnOperation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagColumnOperation): any => ({
    ...obj,
  });
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

export namespace UntagColumnOperation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagColumnOperation): any => ({
    ...obj,
  });
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

  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TransformOperation): any => {
    if (obj.ProjectOperation !== undefined)
      return { ProjectOperation: ProjectOperation.filterSensitiveLog(obj.ProjectOperation) };
    if (obj.FilterOperation !== undefined)
      return { FilterOperation: FilterOperation.filterSensitiveLog(obj.FilterOperation) };
    if (obj.CreateColumnsOperation !== undefined)
      return { CreateColumnsOperation: CreateColumnsOperation.filterSensitiveLog(obj.CreateColumnsOperation) };
    if (obj.RenameColumnOperation !== undefined)
      return { RenameColumnOperation: RenameColumnOperation.filterSensitiveLog(obj.RenameColumnOperation) };
    if (obj.CastColumnTypeOperation !== undefined)
      return { CastColumnTypeOperation: CastColumnTypeOperation.filterSensitiveLog(obj.CastColumnTypeOperation) };
    if (obj.TagColumnOperation !== undefined)
      return { TagColumnOperation: TagColumnOperation.filterSensitiveLog(obj.TagColumnOperation) };
    if (obj.UntagColumnOperation !== undefined)
      return { UntagColumnOperation: UntagColumnOperation.filterSensitiveLog(obj.UntagColumnOperation) };
    if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
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

export namespace JoinKeyProperties {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: JoinKeyProperties): any => ({
    ...obj,
  });
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

export namespace JoinInstruction {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: JoinInstruction): any => ({
    ...obj,
  });
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

export namespace LogicalTableSource {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LogicalTableSource): any => ({
    ...obj,
  });
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

export namespace InputColumn {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InputColumn): any => ({
    ...obj,
  });
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

export namespace CustomSql {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CustomSql): any => ({
    ...obj,
  });
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

export namespace RelationalTable {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RelationalTable): any => ({
    ...obj,
  });
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

export namespace UploadSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UploadSettings): any => ({
    ...obj,
  });
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
   *         <note>
   *             <p>For files that aren't JSON, only <code>STRING</code> data types are supported in input columns.</p>
   *         </note>
   */
  InputColumns: InputColumn[] | undefined;
}

export namespace S3Source {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: S3Source): any => ({
    ...obj,
  });
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

export namespace RowLevelPermissionTagRule {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RowLevelPermissionTagRule): any => ({
    ...obj,
    ...(obj.MatchAllValue && { MatchAllValue: SENSITIVE_STRING }),
  });
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

export namespace ExasolParameters {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExasolParameters): any => ({
    ...obj,
  });
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

export namespace JiraParameters {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: JiraParameters): any => ({
    ...obj,
  });
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

export namespace MariaDbParameters {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MariaDbParameters): any => ({
    ...obj,
  });
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

export namespace MySqlParameters {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MySqlParameters): any => ({
    ...obj,
  });
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

export namespace OracleParameters {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OracleParameters): any => ({
    ...obj,
  });
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

export namespace PostgreSqlParameters {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PostgreSqlParameters): any => ({
    ...obj,
  });
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

export namespace PrestoParameters {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PrestoParameters): any => ({
    ...obj,
  });
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

export namespace RdsParameters {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RdsParameters): any => ({
    ...obj,
  });
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

export namespace RedshiftParameters {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RedshiftParameters): any => ({
    ...obj,
  });
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

export namespace ManifestFileLocation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ManifestFileLocation): any => ({
    ...obj,
  });
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

export namespace S3Parameters {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: S3Parameters): any => ({
    ...obj,
  });
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

export namespace ServiceNowParameters {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ServiceNowParameters): any => ({
    ...obj,
  });
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

export namespace SnowflakeParameters {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SnowflakeParameters): any => ({
    ...obj,
  });
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

export namespace SparkParameters {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SparkParameters): any => ({
    ...obj,
  });
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

export namespace SqlServerParameters {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SqlServerParameters): any => ({
    ...obj,
  });
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

export namespace TeradataParameters {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TeradataParameters): any => ({
    ...obj,
  });
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

export namespace TwitterParameters {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TwitterParameters): any => ({
    ...obj,
  });
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

export namespace CredentialPair {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CredentialPair): any => ({
    ...obj,
    ...(obj.AlternateDataSourceParameters && {
      AlternateDataSourceParameters: obj.AlternateDataSourceParameters.map((item) =>
        DataSourceParameters.filterSensitiveLog(item)
      ),
    }),
  });
}

export enum DataSourceType {
  ADOBE_ANALYTICS = "ADOBE_ANALYTICS",
  AMAZON_ELASTICSEARCH = "AMAZON_ELASTICSEARCH",
  AMAZON_OPENSEARCH = "AMAZON_OPENSEARCH",
  ATHENA = "ATHENA",
  AURORA = "AURORA",
  AURORA_POSTGRESQL = "AURORA_POSTGRESQL",
  AWS_IOT_ANALYTICS = "AWS_IOT_ANALYTICS",
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

export enum FolderType {
  SHARED = "SHARED",
}

export enum MemberType {
  ANALYSIS = "ANALYSIS",
  DASHBOARD = "DASHBOARD",
  DATASET = "DATASET",
}

export enum IngestionType {
  FULL_REFRESH = "FULL_REFRESH",
  INCREMENTAL_REFRESH = "INCREMENTAL_REFRESH",
}

export enum IngestionStatus {
  CANCELLED = "CANCELLED",
  COMPLETED = "COMPLETED",
  FAILED = "FAILED",
  INITIALIZED = "INITIALIZED",
  QUEUED = "QUEUED",
  RUNNING = "RUNNING",
}

export enum IdentityStore {
  QUICKSIGHT = "QUICKSIGHT",
}

export enum NamespaceStatus {
  CREATED = "CREATED",
  CREATING = "CREATING",
  DELETING = "DELETING",
  NON_RETRYABLE_FAILURE = "NON_RETRYABLE_FAILURE",
  RETRYABLE_FAILURE = "RETRYABLE_FAILURE",
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

export namespace TemplateSourceAnalysis {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TemplateSourceAnalysis): any => ({
    ...obj,
  });
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

export namespace TemplateSourceTemplate {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TemplateSourceTemplate): any => ({
    ...obj,
  });
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

export namespace DataColorPalette {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DataColorPalette): any => ({
    ...obj,
  });
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

export namespace TileStyle {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TileStyle): any => ({
    ...obj,
  });
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

export namespace GutterStyle {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GutterStyle): any => ({
    ...obj,
  });
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

export namespace MarginStyle {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MarginStyle): any => ({
    ...obj,
  });
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

export namespace TileLayoutStyle {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TileLayoutStyle): any => ({
    ...obj,
  });
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

export namespace SheetStyle {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SheetStyle): any => ({
    ...obj,
  });
}

/**
 * <p>The theme colors that apply to UI and to charts, excluding data colors. The colors
 *             description is a hexadecimal color code that consists of six alphanumerical characters,
 *             prefixed with <code>#</code>, for example #37BFF5. For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/themes-in-quicksight.html">Using Themes in Amazon QuickSight</a> in the <i>Amazon QuickSight User
 *                 Guide.</i>
 *         </p>
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

export namespace UIColorPalette {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UIColorPalette): any => ({
    ...obj,
  });
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
}

export namespace DashboardError {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DashboardError): any => ({
    ...obj,
  });
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

export namespace DashboardVersion {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DashboardVersion): any => ({
    ...obj,
  });
}

export enum DashboardFilterAttribute {
  QUICKSIGHT_USER = "QUICKSIGHT_USER",
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

export namespace DashboardSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DashboardSummary): any => ({
    ...obj,
  });
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

export namespace DashboardVersionSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DashboardVersionSummary): any => ({
    ...obj,
  });
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

export namespace OutputColumn {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OutputColumn): any => ({
    ...obj,
  });
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

export namespace DataSetSchema {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DataSetSchema): any => ({
    ...obj,
  });
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

export namespace DataSetConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DataSetConfiguration): any => ({
    ...obj,
  });
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

export namespace DataSetSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DataSetSummary): any => ({
    ...obj,
  });
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

export namespace DataSourceErrorInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DataSourceErrorInfo): any => ({
    ...obj,
  });
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

export namespace ErrorInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ErrorInfo): any => ({
    ...obj,
  });
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

export namespace QueueInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: QueueInfo): any => ({
    ...obj,
  });
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

export namespace RowInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RowInfo): any => ({
    ...obj,
  });
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

export namespace NamespaceError {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NamespaceError): any => ({
    ...obj,
  });
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
}

export namespace TemplateError {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TemplateError): any => ({
    ...obj,
  });
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
   * <p>The HTTP status of the request.</p>
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

export namespace TemplateVersion {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TemplateVersion): any => ({
    ...obj,
  });
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

export namespace ThemeError {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ThemeError): any => ({
    ...obj,
  });
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

export namespace ThemeVersion {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ThemeVersion): any => ({
    ...obj,
  });
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

export enum EmbeddingIdentityType {
  ANONYMOUS = "ANONYMOUS",
  IAM = "IAM",
  QUICKSIGHT = "QUICKSIGHT",
}

export enum FolderFilterAttribute {
  PARENT_FOLDER_ARN = "PARENT_FOLDER_ARN",
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

export namespace MemberIdArnPair {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MemberIdArnPair): any => ({
    ...obj,
  });
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

export namespace FolderSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FolderSummary): any => ({
    ...obj,
  });
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

export namespace RegisteredUserDashboardEmbeddingConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RegisteredUserDashboardEmbeddingConfiguration): any => ({
    ...obj,
  });
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

export namespace RegisteredUserQSearchBarEmbeddingConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RegisteredUserQSearchBarEmbeddingConfiguration): any => ({
    ...obj,
  });
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

export namespace RegisteredUserQuickSightConsoleEmbeddingConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RegisteredUserQuickSightConsoleEmbeddingConfiguration): any => ({
    ...obj,
  });
}

export enum GroupFilterAttribute {
  GROUP_NAME = "GROUP_NAME",
}

export enum GroupFilterOperator {
  StartsWith = "StartsWith",
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

export namespace IAMPolicyAssignmentSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: IAMPolicyAssignmentSummary): any => ({
    ...obj,
  });
}

/**
 * <p>The template summary.</p>
 */
export interface TemplateSummary {
  /**
   * <p>A summary of a template.</p>
   */
  Arn?: string;

  /**
   * <p>The ID of the template. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
   */
  TemplateId?: string;

  /**
   * <p>A display name for the template.</p>
   */
  Name?: string;

  /**
   * <p>A structure containing a list of version numbers for the template summary.</p>
   */
  LatestVersionNumber?: number;

  /**
   * <p>The last time that this template was created.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>The last time that this template was updated.</p>
   */
  LastUpdatedTime?: Date;
}

export namespace TemplateSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TemplateSummary): any => ({
    ...obj,
  });
}

/**
 * <p>The template version.</p>
 */
export interface TemplateVersionSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the template version.</p>
   */
  Arn?: string;

  /**
   * <p>The version number of the template version.</p>
   */
  VersionNumber?: number;

  /**
   * <p>The time that this template version was created.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>The status of the template version.</p>
   */
  Status?: ResourceStatus | string;

  /**
   * <p>The description of the template version.</p>
   */
  Description?: string;
}

export namespace TemplateVersionSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TemplateVersionSummary): any => ({
    ...obj,
  });
}

/**
 * <p>The theme summary.</p>
 */
export interface ThemeSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  Arn?: string;

  /**
   * <p>the display name for the theme.</p>
   */
  Name?: string;

  /**
   * <p>The ID of the theme. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
   */
  ThemeId?: string;

  /**
   * <p>The latest version number for the theme. </p>
   */
  LatestVersionNumber?: number;

  /**
   * <p>The date and time that this theme was created.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>The last date and time that this theme was updated.</p>
   */
  LastUpdatedTime?: Date;
}

export namespace ThemeSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ThemeSummary): any => ({
    ...obj,
  });
}

/**
 * <p>The theme version.</p>
 */
export interface ThemeVersionSummary {
  /**
   * <p>The version number of the theme version.</p>
   */
  VersionNumber?: number;

  /**
   * <p>The Amazon Resource Name (ARN) of the theme version.</p>
   */
  Arn?: string;

  /**
   * <p>The description of the theme version.</p>
   */
  Description?: string;

  /**
   * <p>The date and time that this theme version was created.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>The status of the theme version.</p>
   */
  Status?: ResourceStatus | string;
}

export namespace ThemeVersionSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ThemeVersionSummary): any => ({
    ...obj,
  });
}
