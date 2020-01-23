import * as _smithy from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

export enum AssignmentStatus {
  DISABLED = "DISABLED",
  DRAFT = "DRAFT",
  ENABLED = "ENABLED"
}

export enum ColumnDataType {
  DATETIME = "DATETIME",
  DECIMAL = "DECIMAL",
  INTEGER = "INTEGER",
  STRING = "STRING"
}

export enum DashboardBehavior {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED"
}

export enum DashboardErrorType {
  COLUMN_GEOGRAPHIC_ROLE_MISMATCH = "COLUMN_GEOGRAPHIC_ROLE_MISMATCH",
  COLUMN_REPLACEMENT_MISSING = "COLUMN_REPLACEMENT_MISSING",
  COLUMN_TYPE_MISMATCH = "COLUMN_TYPE_MISMATCH",
  DATA_SET_NOT_FOUND = "DATA_SET_NOT_FOUND",
  INTERNAL_FAILURE = "INTERNAL_FAILURE",
  PARAMETER_NOT_FOUND = "PARAMETER_NOT_FOUND",
  PARAMETER_TYPE_INVALID = "PARAMETER_TYPE_INVALID",
  PARAMETER_VALUE_INCOMPATIBLE = "PARAMETER_VALUE_INCOMPATIBLE"
}

export enum DashboardUIState {
  COLLAPSED = "COLLAPSED",
  EXPANDED = "EXPANDED"
}

export enum DataSetImportMode {
  DIRECT_QUERY = "DIRECT_QUERY",
  SPICE = "SPICE"
}

export enum DataSourceErrorInfoType {
  CONFLICT = "CONFLICT",
  ENGINE_VERSION_NOT_SUPPORTED = "ENGINE_VERSION_NOT_SUPPORTED",
  GENERIC_SQL_FAILURE = "GENERIC_SQL_FAILURE",
  TIMEOUT = "TIMEOUT",
  UNKNOWN = "UNKNOWN",
  UNKNOWN_HOST = "UNKNOWN_HOST"
}

export enum DataSourceType {
  ADOBE_ANALYTICS = "ADOBE_ANALYTICS",
  AMAZON_ELASTICSEARCH = "AMAZON_ELASTICSEARCH",
  ATHENA = "ATHENA",
  AURORA = "AURORA",
  AURORA_POSTGRESQL = "AURORA_POSTGRESQL",
  AWS_IOT_ANALYTICS = "AWS_IOT_ANALYTICS",
  GITHUB = "GITHUB",
  JIRA = "JIRA",
  MARIADB = "MARIADB",
  MYSQL = "MYSQL",
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
  TWITTER = "TWITTER"
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
  VPC_CONNECTION = "VPC_CONNECTION"
}

export enum FileFormat {
  CLF = "CLF",
  CSV = "CSV",
  ELF = "ELF",
  JSON = "JSON",
  TSV = "TSV",
  XLSX = "XLSX"
}

export enum GeoSpatialCountryCode {
  US = "US"
}

export enum GeoSpatialDataRole {
  CITY = "CITY",
  COUNTRY = "COUNTRY",
  COUNTY = "COUNTY",
  LATITUDE = "LATITUDE",
  LONGITUDE = "LONGITUDE",
  POSTCODE = "POSTCODE",
  STATE = "STATE"
}

export enum IdentityType {
  IAM = "IAM",
  QUICKSIGHT = "QUICKSIGHT"
}

export enum IngestionErrorType {
  ACCOUNT_CAPACITY_LIMIT_EXCEEDED = "ACCOUNT_CAPACITY_LIMIT_EXCEEDED",
  CONNECTION_FAILURE = "CONNECTION_FAILURE",
  CUSTOMER_ERROR = "CUSTOMER_ERROR",
  DATA_SET_DELETED = "DATA_SET_DELETED",
  DATA_SET_NOT_SPICE = "DATA_SET_NOT_SPICE",
  DATA_SET_SIZE_LIMIT_EXCEEDED = "DATA_SET_SIZE_LIMIT_EXCEEDED",
  DATA_SOURCE_AUTH_FAILED = "DATA_SOURCE_AUTH_FAILED",
  DATA_SOURCE_CONNECTION_FAILED = "DATA_SOURCE_CONNECTION_FAILED",
  DATA_SOURCE_NOT_FOUND = "DATA_SOURCE_NOT_FOUND",
  DATA_TOLERANCE_EXCEPTION = "DATA_TOLERANCE_EXCEPTION",
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
  QUERY_TIMEOUT = "QUERY_TIMEOUT",
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
  UNROUTABLE_HOST = "UNROUTABLE_HOST"
}

export enum IngestionRequestSource {
  MANUAL = "MANUAL",
  SCHEDULED = "SCHEDULED"
}

export enum IngestionRequestType {
  EDIT = "EDIT",
  FULL_REFRESH = "FULL_REFRESH",
  INCREMENTAL_REFRESH = "INCREMENTAL_REFRESH",
  INITIAL_INGESTION = "INITIAL_INGESTION"
}

export enum IngestionStatus {
  CANCELLED = "CANCELLED",
  COMPLETED = "COMPLETED",
  FAILED = "FAILED",
  INITIALIZED = "INITIALIZED",
  QUEUED = "QUEUED",
  RUNNING = "RUNNING"
}

export enum InputColumnDataType {
  BIT = "BIT",
  BOOLEAN = "BOOLEAN",
  DATETIME = "DATETIME",
  DECIMAL = "DECIMAL",
  INTEGER = "INTEGER",
  JSON = "JSON",
  STRING = "STRING"
}

export enum JoinType {
  INNER = "INNER",
  LEFT = "LEFT",
  OUTER = "OUTER",
  RIGHT = "RIGHT"
}

export enum ResourceStatus {
  CREATION_FAILED = "CREATION_FAILED",
  CREATION_IN_PROGRESS = "CREATION_IN_PROGRESS",
  CREATION_SUCCESSFUL = "CREATION_SUCCESSFUL",
  UPDATE_FAILED = "UPDATE_FAILED",
  UPDATE_IN_PROGRESS = "UPDATE_IN_PROGRESS",
  UPDATE_SUCCESSFUL = "UPDATE_SUCCESSFUL"
}

export enum RowLevelPermissionPolicy {
  DENY_ACCESS = "DENY_ACCESS",
  GRANT_ACCESS = "GRANT_ACCESS"
}

export enum TemplateErrorType {
  DATA_SET_NOT_FOUND = "DATA_SET_NOT_FOUND",
  INTERNAL_FAILURE = "INTERNAL_FAILURE"
}

export enum TextQualifier {
  DOUBLE_QUOTE = "DOUBLE_QUOTE",
  SINGLE_QUOTE = "SINGLE_QUOTE"
}

export enum UserRole {
  ADMIN = "ADMIN",
  AUTHOR = "AUTHOR",
  READER = "READER",
  RESTRICTED_AUTHOR = "RESTRICTED_AUTHOR",
  RESTRICTED_READER = "RESTRICTED_READER"
}

/**
 *
 * 		       <p>You don't have access to this. The provided credentials couldn't be validated.
 * 			You might not be authorized to carry out the request. Ensure that your account is
 * 			authorized to use the Amazon QuickSight service, that your policies have the correct
 * 			permissions, and that you are using the correct access keys.</p>
 *
 */
export interface AccessDeniedException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "AccessDeniedException";
  name: "AccessDeniedException";
  $fault: "client";
  Message?: string;
  /**
   *
   * 		       <p>The AWS request id for this request.</p>
   *
   */
  RequestId?: string;
}

export namespace AccessDeniedException {
  export function isa(o: any): o is AccessDeniedException {
    return _smithy.isa(o, "AccessDeniedException");
  }
}

/**
 *
 * 		       <p>The active AWS Identity and Access Management (IAM) policy assignment.</p>
 *
 */
export interface ActiveIAMPolicyAssignment {
  __type?: "ActiveIAMPolicyAssignment";
  /**
   *
   * 		       <p>A name for the IAM policy assignment.</p>
   *
   */
  AssignmentName?: string;

  /**
   *
   * 		       <p>The Amazon Resource Name (ARN) of the resource.</p>
   *
   */
  PolicyArn?: string;
}

export namespace ActiveIAMPolicyAssignment {
  export function isa(o: any): o is ActiveIAMPolicyAssignment {
    return _smithy.isa(o, "ActiveIAMPolicyAssignment");
  }
}

/**
 *
 * 		       <p>Ad hoc (one-time) filtering option.</p>
 *
 */
export interface AdHocFilteringOption {
  __type?: "AdHocFilteringOption";
  /**
   *
   * 		       <p>Availability status.</p>
   *
   */
  AvailabilityStatus?: DashboardBehavior | string;
}

export namespace AdHocFilteringOption {
  export function isa(o: any): o is AdHocFilteringOption {
    return _smithy.isa(o, "AdHocFilteringOption");
  }
}

/**
 *
 * 		       <p>Amazon Elasticsearch Service parameters.</p>
 *
 */
export interface AmazonElasticsearchParameters {
  __type?: "AmazonElasticsearchParameters";
  /**
   *
   * 		       <p>The Amazon Elasticsearch Service domain.</p>
   *
   */
  Domain: string | undefined;
}

export namespace AmazonElasticsearchParameters {
  export function isa(o: any): o is AmazonElasticsearchParameters {
    return _smithy.isa(o, "AmazonElasticsearchParameters");
  }
}

/**
 *
 * 		       <p>Amazon Athena parameters.</p>
 *
 */
export interface AthenaParameters {
  __type?: "AthenaParameters";
  /**
   *
   * 		       <p>The workgroup that Amazon Athena uses.</p>
   *
   */
  WorkGroup?: string;
}

export namespace AthenaParameters {
  export function isa(o: any): o is AthenaParameters {
    return _smithy.isa(o, "AthenaParameters");
  }
}

/**
 *
 * 		       <p>Amazon Aurora parameters.</p>
 *
 */
export interface AuroraParameters {
  __type?: "AuroraParameters";
  /**
   *
   * 		       <p>Database.</p>
   *
   */
  Database: string | undefined;

  /**
   *
   * 		       <p>Host.</p>
   *
   */
  Host: string | undefined;

  /**
   *
   * 		       <p>Port.</p>
   *
   */
  Port: number | undefined;
}

export namespace AuroraParameters {
  export function isa(o: any): o is AuroraParameters {
    return _smithy.isa(o, "AuroraParameters");
  }
}

/**
 *
 * 		       <p>Amazon Aurora with PostgreSQL compatibility parameters.</p>
 *
 */
export interface AuroraPostgreSqlParameters {
  __type?: "AuroraPostgreSqlParameters";
  /**
   *
   * 		       <p>Database.</p>
   *
   */
  Database: string | undefined;

  /**
   *
   * 		       <p>Host.</p>
   *
   */
  Host: string | undefined;

  /**
   *
   * 		       <p>Port.</p>
   *
   */
  Port: number | undefined;
}

export namespace AuroraPostgreSqlParameters {
  export function isa(o: any): o is AuroraPostgreSqlParameters {
    return _smithy.isa(o, "AuroraPostgreSqlParameters");
  }
}

/**
 *
 * 		       <p>AWS IoT Analytics parameters.</p>
 *
 */
export interface AwsIotAnalyticsParameters {
  __type?: "AwsIotAnalyticsParameters";
  /**
   *
   * 		       <p>Dataset name.</p>
   *
   */
  DataSetName: string | undefined;
}

export namespace AwsIotAnalyticsParameters {
  export function isa(o: any): o is AwsIotAnalyticsParameters {
    return _smithy.isa(o, "AwsIotAnalyticsParameters");
  }
}

/**
 *
 * 		       <p>A calculated column for a dataset.</p>
 *
 */
export interface CalculatedColumn {
  __type?: "CalculatedColumn";
  /**
   *
   * 		       <p>A unique ID to identify a calculated column. During dataset update, if the column ID of
   * 			a calculated column matches that of an existing calculated column, QuickSight preserves the
   * 			existing calculated column.</p>
   *
   */
  ColumnId: string | undefined;

  /**
   *
   * 		       <p>Column name.</p>
   *
   */
  ColumnName: string | undefined;

  /**
   *
   * 		       <p>An expression that defines the calculated column.</p>
   *
   */
  Expression: string | undefined;
}

export namespace CalculatedColumn {
  export function isa(o: any): o is CalculatedColumn {
    return _smithy.isa(o, "CalculatedColumn");
  }
}

export interface CancelIngestionRequest {
  __type?: "CancelIngestionRequest";
  /**
   *
   * 		       <p>The AWS account ID.</p>
   *
   */
  AwsAccountId: string | undefined;

  /**
   *
   * 		       <p>The ID of the dataset used in the ingestion.</p>
   *
   */
  DataSetId: string | undefined;

  /**
   *
   * 		       <p>An ID for the ingestion.</p>
   *
   */
  IngestionId: string | undefined;
}

export namespace CancelIngestionRequest {
  export function isa(o: any): o is CancelIngestionRequest {
    return _smithy.isa(o, "CancelIngestionRequest");
  }
}

export interface CancelIngestionResponse extends $MetadataBearer {
  __type?: "CancelIngestionResponse";
  /**
   *
   * 		       <p>The Amazon Resource Name (ARN) for the data ingestion.</p>
   *
   */
  Arn?: string;

  /**
   *
   * 		       <p>An ID for the ingestion.</p>
   *
   */
  IngestionId?: string;

  /**
   *
   *          <p>The AWS request ID for this operation.</p>
   *
   */
  RequestId?: string;
}

export namespace CancelIngestionResponse {
  export function isa(o: any): o is CancelIngestionResponse {
    return _smithy.isa(o, "CancelIngestionResponse");
  }
}

/**
 *
 * 		       <p>A transform operation that casts a column to a different type.</p>
 *
 */
export interface CastColumnTypeOperation {
  __type?: "CastColumnTypeOperation";
  /**
   *
   * 		       <p>Column name.</p>
   *
   */
  ColumnName: string | undefined;

  /**
   *
   * 		       <p>When casting a column from string to datetime type, you can supply a QuickSight
   * 			supported format string to denote the source data format.</p>
   *
   */
  Format?: string;

  /**
   *
   * 		       <p>New column data type.</p>
   *
   */
  NewColumnType: ColumnDataType | string | undefined;
}

export namespace CastColumnTypeOperation {
  export function isa(o: any): o is CastColumnTypeOperation {
    return _smithy.isa(o, "CastColumnTypeOperation");
  }
}

/**
 *
 * 		       <p>Groupings of columns that work together in certain QuickSight features. This is a
 * 			variant type structure. No more than one of the attributes should be non-null for this
 * 			structure to be valid.</p>
 *
 */
export interface ColumnGroup {
  __type?: "ColumnGroup";
  /**
   *
   * 		       <p>Geospatial column group that denotes a hierarchy.</p>
   *
   */
  GeoSpatialColumnGroup?: GeoSpatialColumnGroup;
}

export namespace ColumnGroup {
  export function isa(o: any): o is ColumnGroup {
    return _smithy.isa(o, "ColumnGroup");
  }
}

/**
 *
 * 		       <p>A structure describing the name, datatype, and geographic role of the columns.</p>
 *
 */
export interface ColumnGroupColumnSchema {
  __type?: "ColumnGroupColumnSchema";
  /**
   *
   * 		       <p>The name of the column group's column schema.</p>
   *
   */
  Name?: string;
}

export namespace ColumnGroupColumnSchema {
  export function isa(o: any): o is ColumnGroupColumnSchema {
    return _smithy.isa(o, "ColumnGroupColumnSchema");
  }
}

/**
 *
 * 		       <p>The column group schema.</p>
 *
 */
export interface ColumnGroupSchema {
  __type?: "ColumnGroupSchema";
  /**
   *
   * 		       <p>A structure containing the list of column group column schemas.</p>
   *
   */
  ColumnGroupColumnSchemaList?: Array<ColumnGroupColumnSchema>;

  /**
   *
   * 		       <p>The name of the column group schema.</p>
   *
   */
  Name?: string;
}

export namespace ColumnGroupSchema {
  export function isa(o: any): o is ColumnGroupSchema {
    return _smithy.isa(o, "ColumnGroupSchema");
  }
}

/**
 *
 * 		       <p>The column schema.</p>
 *
 */
export interface ColumnSchema {
  __type?: "ColumnSchema";
  /**
   *
   * 		       <p>The data type of the column schema.</p>
   *
   */
  DataType?: string;

  /**
   *
   * 		       <p>The geographic role of the column schema.</p>
   *
   */
  GeographicRole?: string;

  /**
   *
   * 		       <p>The name of the column schema.</p>
   *
   */
  Name?: string;
}

export namespace ColumnSchema {
  export function isa(o: any): o is ColumnSchema {
    return _smithy.isa(o, "ColumnSchema");
  }
}

/**
 *
 * 		       <p>A tag for a column in a TagColumnOperation. This is a variant type structure. No more
 * 			than one of the attributes should be non-null for this structure to be valid.</p>
 *
 */
export interface ColumnTag {
  __type?: "ColumnTag";
  /**
   *
   * 		       <p>A geospatial role for a column.</p>
   *
   */
  ColumnGeographicRole?: GeoSpatialDataRole | string;
}

export namespace ColumnTag {
  export function isa(o: any): o is ColumnTag {
    return _smithy.isa(o, "ColumnTag");
  }
}

/**
 *
 * 		       <p>A resource is already in an "actionable" state that must complete
 * 			before a new update can be applied.</p>
 *
 */
export interface ConcurrentUpdatingException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "ConcurrentUpdatingException";
  name: "ConcurrentUpdatingException";
  $fault: "server";
  Message?: string;
  RequestId?: string;
}

export namespace ConcurrentUpdatingException {
  export function isa(o: any): o is ConcurrentUpdatingException {
    return _smithy.isa(o, "ConcurrentUpdatingException");
  }
}

/**
 *
 * 		       <p>Updating or deleting a resource can cause an inconsistent state.</p>
 *
 */
export interface ConflictException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "ConflictException";
  name: "ConflictException";
  $fault: "client";
  Message?: string;
  /**
   *
   * 		       <p>The AWS request id for this request.</p>
   *
   */
  RequestId?: string;
}

export namespace ConflictException {
  export function isa(o: any): o is ConflictException {
    return _smithy.isa(o, "ConflictException");
  }
}

/**
 *
 * 		       <p>A transform operation that creates calculated columns. Columns created in one such
 * 			operation form a lexical closure.</p>
 *
 */
export interface CreateColumnsOperation {
  __type?: "CreateColumnsOperation";
  /**
   *
   * 		       <p>Calculated columns to create.</p>
   *
   */
  Columns: Array<CalculatedColumn> | undefined;
}

export namespace CreateColumnsOperation {
  export function isa(o: any): o is CreateColumnsOperation {
    return _smithy.isa(o, "CreateColumnsOperation");
  }
}

export interface CreateDashboardRequest {
  __type?: "CreateDashboardRequest";
  /**
   *
   * 		       <p>AWS account ID where you want to create the dashboard.</p>
   *
   */
  AwsAccountId: string | undefined;

  /**
   *
   * 		       <p>The ID for the dashboard, also added to IAM policy.</p>
   *
   */
  DashboardId: string | undefined;

  /**
   *
   * 		       <p>Publishing options when creating dashboard.</p>
   * 		       <ul>
   *             <li>
   * 					          <p>AvailabilityStatus for AdHocFilteringOption - This can be either <code>ENABLED</code> or
   * 					<code>DISABLED</code>. When This is set to set to <code>DISABLED</code>, QuickSight
   * 					disables the left filter pane on the published dashboard, which can be used for AdHoc
   * 					filtering. Enabled by default.  </p>
   * 			         </li>
   *             <li>
   * 				           <p>AvailabilityStatus for ExportToCSVOption - This can be either <code>ENABLED</code> or
   * 					<code>DISABLED</code>. The visual option to export data to CSV is disabled when this
   * 					is set to <code>DISABLED</code>. Enabled by default.  </p>
   * 			         </li>
   *             <li>
   * 				           <p>VisibilityState for SheetControlsOption - This can be either <code>COLLAPSED</code> or
   * 					<code>EXPANDED</code>. The sheet controls pane is collapsed by default when set to
   * 					true. Collapsed by default.  </p>
   * 			         </li>
   *          </ul>
   *
   */
  DashboardPublishOptions?: DashboardPublishOptions;

  /**
   *
   * 		       <p>The display name of the dashboard.</p>
   *
   */
  Name: string | undefined;

  /**
   *
   * 		       <p>A structure that contains the parameters of the dashboard.
   * 		These are parameter overrides for a dashboard.
   * 		A dashboard can have any type of parameters and some parameters might
   * 		accept multiple values. You could use the following structure to override
   * 		two string parameters that accept multiple values:</p>
   *
   */
  Parameters?: _Parameters;

  /**
   *
   * 		       <p>A structure that contains the permissions of the dashboard.
   * 		You can use this for granting permissions with principal and
   * 		action information.</p>
   *
   */
  Permissions?: Array<ResourcePermission>;

  /**
   *
   * 		       <p>Source entity from which the dashboard is created. The souce entity accepts the Amazon Resource Name (ARN) of the
   * 			source template or analysis and also references the replacement datasets for the
   * 			placeholders set when creating the template. The replacement datasets need to follow the
   * 			same schema as the datasets for which placeholders were created when creating the template.  </p>
   * 		       <p>If you are creating a dashboard from a source entity in a different AWS account, use the
   * 			ARN of the source template.</p>
   *
   */
  SourceEntity: DashboardSourceEntity | undefined;

  /**
   *
   * 		       <p>Contains a map of the key-value pairs for the resource tag or tags assigned to the dashboard.</p>
   *
   */
  Tags?: Array<Tag>;

  /**
   *
   * 		       <p>A description for the first version of the dashboard being created.</p>
   *
   */
  VersionDescription?: string;
}

export namespace CreateDashboardRequest {
  export function isa(o: any): o is CreateDashboardRequest {
    return _smithy.isa(o, "CreateDashboardRequest");
  }
}

export interface CreateDashboardResponse extends $MetadataBearer {
  __type?: "CreateDashboardResponse";
  /**
   *
   * 		       <p>The Amazon Resource Name (ARN) of the dashboard.</p>
   *
   */
  Arn?: string;

  /**
   *
   * 		       <p>The creation status of the dashboard create request.</p>
   *
   */
  CreationStatus?: ResourceStatus | string;

  /**
   *
   * 		       <p>The ID for the dashboard.</p>
   *
   */
  DashboardId?: string;

  /**
   *
   * 		       <p>The AWS request ID for this operation.</p>
   *
   */
  RequestId?: string;

  /**
   *
   * 		       <p>The ARN of the dashboard, including the version number
   * 			of the first version that is created.</p>
   *
   */
  VersionArn?: string;
}

export namespace CreateDashboardResponse {
  export function isa(o: any): o is CreateDashboardResponse {
    return _smithy.isa(o, "CreateDashboardResponse");
  }
}

export interface CreateDataSetRequest {
  __type?: "CreateDataSetRequest";
  /**
   *
   * 		       <p>The AWS Account ID.</p>
   *
   */
  AwsAccountId: string | undefined;

  /**
   *
   * 		       <p>Groupings of columns that work together in certain QuickSight features. Currently, only geospatial hierarchy is supported.</p>
   *
   */
  ColumnGroups?: Array<ColumnGroup>;

  /**
   *
   * 		       <p>An ID for the dataset that you want to create. This ID is unique per AWS Region for each AWS account.</p>
   *
   */
  DataSetId: string | undefined;

  /**
   *
   * 		       <p>Indicates whether or not you want to import the data into SPICE.</p>
   *
   */
  ImportMode: DataSetImportMode | string | undefined;

  /**
   *
   * 		       <p>Configures the combination and transformation of the data from the physical tables.</p>
   *
   */
  LogicalTableMap?: { [key: string]: LogicalTable };

  /**
   *
   * 		       <p>The display name for the dataset.</p>
   *
   */
  Name: string | undefined;

  /**
   *
   * 		       <p>A list of resource permissions on the dataset.</p>
   *
   */
  Permissions?: Array<ResourcePermission>;

  /**
   *
   * 		       <p>Declares the physical tables that are available in the underlying data sources.</p>
   *
   */
  PhysicalTableMap: { [key: string]: PhysicalTable } | undefined;

  /**
   *
   * 		       <p>Row-level security configuration on the data you want to create.</p>
   *
   */
  RowLevelPermissionDataSet?: RowLevelPermissionDataSet;

  /**
   *
   * 		       <p>Contains a map of the key-value pairs for the resource tag or tags assigned to the dataset.</p>
   *
   */
  Tags?: Array<Tag>;
}

export namespace CreateDataSetRequest {
  export function isa(o: any): o is CreateDataSetRequest {
    return _smithy.isa(o, "CreateDataSetRequest");
  }
}

export interface CreateDataSetResponse extends $MetadataBearer {
  __type?: "CreateDataSetResponse";
  /**
   *
   * 		       <p>The Amazon Resource Name (ARN) of the dataset.</p>
   *
   */
  Arn?: string;

  /**
   *
   * 		       <p>The ID for the dataset that you want to create. This ID is unique per AWS Region for each AWS account.</p>
   *
   */
  DataSetId?: string;

  /**
   *
   * 		       <p>The ARN for the ingestion, which is triggered as a result of dataset creation if the import mode is SPICE</p>
   *
   */
  IngestionArn?: string;

  /**
   *
   * 		       <p>The ID of the ingestion, which is triggered as a result of dataset creation if the import mode is SPICE</p>
   *
   */
  IngestionId?: string;

  /**
   *
   * 		       <p>The AWS request ID for this operation.</p>
   *
   */
  RequestId?: string;
}

export namespace CreateDataSetResponse {
  export function isa(o: any): o is CreateDataSetResponse {
    return _smithy.isa(o, "CreateDataSetResponse");
  }
}

export interface CreateDataSourceRequest {
  __type?: "CreateDataSourceRequest";
  /**
   *
   * 		       <p>The AWS account ID.</p>
   *
   */
  AwsAccountId: string | undefined;

  /**
   *
   * 		       <p>The credentials QuickSight that uses to connect to your underlying source. Currently, only
   * 			credentials based on user name and password are supported.</p>
   *
   */
  Credentials?: DataSourceCredentials;

  /**
   *
   * 		       <p>An ID for the data source. This ID is unique per AWS Region for each AWS account. </p>
   *
   */
  DataSourceId: string | undefined;

  /**
   *
   * 		       <p>The parameters that QuickSight uses to connect to your underlying source.</p>
   *
   */
  DataSourceParameters?: DataSourceParameters;

  /**
   *
   * 		       <p>A display name for the data source.</p>
   *
   */
  Name: string | undefined;

  /**
   *
   * 		       <p>A list of resource permissions on the data source.</p>
   *
   */
  Permissions?: Array<ResourcePermission>;

  /**
   *
   * 		       <p>Secure Socket Layer (SSL) properties that apply when QuickSight connects to your underlying source.</p>
   *
   */
  SslProperties?: SslProperties;

  /**
   *
   * 		       <p>Contains a map of the key-value pairs for the resource tag or tags assigned to the data source.</p>
   *
   */
  Tags?: Array<Tag>;

  /**
   *
   * 		       <p>The type of the data source. Currently, the supported types for this operation are:
   * 			<code>ATHENA, AURORA, AURORA_POSTGRESQL, MARIADB, MYSQL, POSTGRESQL, PRESTO, REDSHIFT, S3,
   * 			SNOWFLAKE, SPARK, SQLSERVER, TERADATA</code>.
   * 			Use <code>ListDataSources</code> to return a
   * 			list of all data sources.</p>
   *
   */
  Type: DataSourceType | string | undefined;

  /**
   *
   * 		       <p>Use this parameter only when you want QuickSight to use a VPC connection when connecting to
   * 			your underlying source.</p>
   *
   */
  VpcConnectionProperties?: VpcConnectionProperties;
}

export namespace CreateDataSourceRequest {
  export function isa(o: any): o is CreateDataSourceRequest {
    return _smithy.isa(o, "CreateDataSourceRequest");
  }
}

export interface CreateDataSourceResponse extends $MetadataBearer {
  __type?: "CreateDataSourceResponse";
  /**
   *
   * 		       <p>The Amazon Resource Name (ARN) of the data source.</p>
   *
   */
  Arn?: string;

  /**
   *
   * 		       <p>The status of creating the data source.</p>
   *
   */
  CreationStatus?: ResourceStatus | string;

  /**
   *
   * 		       <p>The ID of the data source. This ID is unique per AWS Region for each AWS account.</p>
   *
   */
  DataSourceId?: string;

  /**
   *
   * 		       <p>The AWS request ID for this operation.</p>
   *
   */
  RequestId?: string;
}

export namespace CreateDataSourceResponse {
  export function isa(o: any): o is CreateDataSourceResponse {
    return _smithy.isa(o, "CreateDataSourceResponse");
  }
}

export interface CreateGroupMembershipRequest {
  __type?: "CreateGroupMembershipRequest";
  /**
   *
   * 		       <p>The ID for the AWS account that the group is in. Currently, you use the ID for the AWS
   * 			account that contains your Amazon QuickSight account.</p>
   *
   */
  AwsAccountId: string | undefined;

  /**
   *
   * 		       <p>The name of the group that you want to add the user to.</p>
   *
   */
  GroupName: string | undefined;

  /**
   *
   * 		       <p>The name of the user that you want to add to the group membership.</p>
   *
   */
  MemberName: string | undefined;

  /**
   *
   * 		       <p>The namespace. Currently, you should set this to <code>default</code>.</p>
   *
   */
  Namespace: string | undefined;
}

export namespace CreateGroupMembershipRequest {
  export function isa(o: any): o is CreateGroupMembershipRequest {
    return _smithy.isa(o, "CreateGroupMembershipRequest");
  }
}

export interface CreateGroupMembershipResponse extends $MetadataBearer {
  __type?: "CreateGroupMembershipResponse";
  /**
   *
   * 		       <p>The group member.</p>
   *
   */
  GroupMember?: GroupMember;

  /**
   *
   * 		       <p>The AWS request ID for this operation.</p>
   *
   */
  RequestId?: string;
}

export namespace CreateGroupMembershipResponse {
  export function isa(o: any): o is CreateGroupMembershipResponse {
    return _smithy.isa(o, "CreateGroupMembershipResponse");
  }
}

/**
 *
 * 		       <p>The request object for this operation. </p>
 *
 */
export interface CreateGroupRequest {
  __type?: "CreateGroupRequest";
  /**
   *
   * 		       <p>The ID for the AWS account that the group is in. Currently, you use the ID for the AWS
   * 			account that contains your Amazon QuickSight account.</p>
   *
   */
  AwsAccountId: string | undefined;

  /**
   *
   * 		       <p>A description for the group that you want to create.</p>
   *
   */
  Description?: string;

  /**
   *
   * 		       <p>A name for the group that you want to create.</p>
   *
   */
  GroupName: string | undefined;

  /**
   *
   * 		       <p>The namespace. Currently, you should set this to <code>default</code>.</p>
   *
   */
  Namespace: string | undefined;
}

export namespace CreateGroupRequest {
  export function isa(o: any): o is CreateGroupRequest {
    return _smithy.isa(o, "CreateGroupRequest");
  }
}

/**
 *
 * 		       <p>The response object for this operation.</p>
 *
 */
export interface CreateGroupResponse extends $MetadataBearer {
  __type?: "CreateGroupResponse";
  /**
   *
   * 		       <p>The name of the group.</p>
   *
   */
  Group?: Group;

  /**
   *
   * 		       <p>The AWS request ID for this operation.</p>
   *
   */
  RequestId?: string;
}

export namespace CreateGroupResponse {
  export function isa(o: any): o is CreateGroupResponse {
    return _smithy.isa(o, "CreateGroupResponse");
  }
}

export interface CreateIAMPolicyAssignmentRequest {
  __type?: "CreateIAMPolicyAssignmentRequest";
  /**
   *
   * 		       <p>The name of the assignment. It must be unique within an AWS account.</p>
   *
   */
  AssignmentName: string | undefined;

  /**
   *
   * 		       <p>The status of an assignment:</p>
   * 		       <ul>
   *             <li>
   *                <p>ENABLED - Anything specified in this assignment is used while creating the data source.</p>
   *             </li>
   *             <li>
   *                <p>DISABLED - This assignment isn't used while creating the data source.</p>
   *             </li>
   *             <li>
   *                <p>DRAFT - Assignment is an unfinished draft and isn't used while creating the data
   * 					source.</p>
   *             </li>
   *          </ul>
   *
   */
  AssignmentStatus: AssignmentStatus | string | undefined;

  /**
   *
   * 		       <p>The AWS Account ID where you want to assign QuickSight users or groups to an IAM policy.</p>
   *
   */
  AwsAccountId: string | undefined;

  /**
   *
   * 		       <p>QuickSight users and/or groups that you want to assign the policy to.</p>
   *
   */
  Identities?: { [key: string]: Array<string> };

  /**
   *
   * 		       <p>The namespace that contains the assignment.</p>
   *
   */
  Namespace: string | undefined;

  /**
   *
   * 		       <p>An IAM policy Amazon Resource Name (ARN) that you want to apply to the QuickSight users and groups specified in this assignment.</p>
   *
   */
  PolicyArn?: string;
}

export namespace CreateIAMPolicyAssignmentRequest {
  export function isa(o: any): o is CreateIAMPolicyAssignmentRequest {
    return _smithy.isa(o, "CreateIAMPolicyAssignmentRequest");
  }
}

export interface CreateIAMPolicyAssignmentResponse extends $MetadataBearer {
  __type?: "CreateIAMPolicyAssignmentResponse";
  /**
   *
   * 		       <p>An ID for the assignment.</p>
   *
   */
  AssignmentId?: string;

  /**
   *
   * 		       <p>The name of the assignment. Must be unique within an AWS account.</p>
   *
   */
  AssignmentName?: string;

  /**
   *
   * 		       <p>The status of an assignment:</p>
   * 		       <ul>
   *             <li>
   *                <p>ENABLED - Anything specified in this assignment is used while creating the data source.</p>
   *             </li>
   *             <li>
   *                <p>DISABLED - This assignment isn't used while creating the data source.</p>
   *             </li>
   *             <li>
   *                <p>DRAFT - Assignment is an unfinished draft and isn't used while creating the data
   * 					source.</p>
   *             </li>
   *          </ul>
   *
   */
  AssignmentStatus?: AssignmentStatus | string;

  /**
   *
   * 		       <p>QuickSight users and/or groups that are assigned to the IAM policy.</p>
   *
   */
  Identities?: { [key: string]: Array<string> };

  /**
   *
   * 		       <p>An IAM policy Amazon Resource Name (ARN) that is applied to the QuickSight users and groups specified in this assignment.</p>
   *
   */
  PolicyArn?: string;

  /**
   *
   * 		       <p>The AWS request ID for this operation.</p>
   *
   */
  RequestId?: string;
}

export namespace CreateIAMPolicyAssignmentResponse {
  export function isa(o: any): o is CreateIAMPolicyAssignmentResponse {
    return _smithy.isa(o, "CreateIAMPolicyAssignmentResponse");
  }
}

export interface CreateIngestionRequest {
  __type?: "CreateIngestionRequest";
  /**
   *
   * 		       <p>The AWS account ID.</p>
   *
   */
  AwsAccountId: string | undefined;

  /**
   *
   * 		       <p>The ID of the dataset used in the ingestion.</p>
   *
   */
  DataSetId: string | undefined;

  /**
   *
   * 		       <p>An ID for the ingestion.</p>
   *
   */
  IngestionId: string | undefined;
}

export namespace CreateIngestionRequest {
  export function isa(o: any): o is CreateIngestionRequest {
    return _smithy.isa(o, "CreateIngestionRequest");
  }
}

export interface CreateIngestionResponse extends $MetadataBearer {
  __type?: "CreateIngestionResponse";
  /**
   *
   * 		       <p>The Amazon Resource Name (ARN) for the data ingestion.</p>
   *
   */
  Arn?: string;

  /**
   *
   * 		       <p>An ID for the ingestion.</p>
   *
   */
  IngestionId?: string;

  /**
   *
   * 		       <p>The ingestion status.</p>
   *
   */
  IngestionStatus?: IngestionStatus | string;

  /**
   *
   *          <p>The AWS request ID for this operation.</p>
   *
   */
  RequestId?: string;
}

export namespace CreateIngestionResponse {
  export function isa(o: any): o is CreateIngestionResponse {
    return _smithy.isa(o, "CreateIngestionResponse");
  }
}

export interface CreateTemplateAliasRequest {
  __type?: "CreateTemplateAliasRequest";
  /**
   *
   * 		       <p>The name that you want to give to the template alias that you're creating.
   * 			Aliases that start with <code>$</code> are reserved by QuickSight. </p>
   *
   */
  AliasName: string | undefined;

  /**
   *
   * 		       <p>AWS account ID that contains the template you are aliasing.</p>
   *
   */
  AwsAccountId: string | undefined;

  /**
   *
   * 		       <p>An ID for the template.</p>
   *
   */
  TemplateId: string | undefined;

  /**
   *
   * 		       <p>The version number of the template.</p>
   *
   */
  TemplateVersionNumber: number | undefined;
}

export namespace CreateTemplateAliasRequest {
  export function isa(o: any): o is CreateTemplateAliasRequest {
    return _smithy.isa(o, "CreateTemplateAliasRequest");
  }
}

export interface CreateTemplateAliasResponse extends $MetadataBearer {
  __type?: "CreateTemplateAliasResponse";
  /**
   *
   * 		       <p>The AWS request ID for this operation.</p>
   *
   */
  RequestId?: string;

  /**
   *
   * 		       <p>Information on the template alias.</p>
   *
   */
  TemplateAlias?: TemplateAlias;
}

export namespace CreateTemplateAliasResponse {
  export function isa(o: any): o is CreateTemplateAliasResponse {
    return _smithy.isa(o, "CreateTemplateAliasResponse");
  }
}

export interface CreateTemplateRequest {
  __type?: "CreateTemplateRequest";
  /**
   *
   * 		       <p>The ID for the AWS account that the group is in. Currently, you use the ID for the AWS
   * 			account that contains your Amazon QuickSight account.</p>
   *
   */
  AwsAccountId: string | undefined;

  /**
   *
   * 		       <p>A display name for the template.</p>
   *
   */
  Name?: string;

  /**
   *
   * 		       <p>A list of resource permissions to be set on the template. </p>
   *
   */
  Permissions?: Array<ResourcePermission>;

  /**
   *
   * 		       <p>The Amazon Resource Name (ARN) of the source entity from which this template is being created. Templates can be
   * 			currently created from an analysis or another template. If the ARN is for an analysis, you
   * 			must include its dataset references. </p>
   *
   */
  SourceEntity: TemplateSourceEntity | undefined;

  /**
   *
   * 		       <p>Contains a map of the key-value pairs for the resource tag or tags assigned to the resource.</p>
   *
   */
  Tags?: Array<Tag>;

  /**
   *
   * 		       <p>An ID for the template you want to create. This is unique per AWS region per AWS
   * 			account.</p>
   *
   */
  TemplateId: string | undefined;

  /**
   *
   * 		       <p>A description of the current template version being created. This API created the first
   * 			version of the template. Every time UpdateTemplate is called a new version is created. Each
   * 			version of the template maintains a description of the version in the VersionDescription
   * 			field.</p>
   *
   */
  VersionDescription?: string;
}

export namespace CreateTemplateRequest {
  export function isa(o: any): o is CreateTemplateRequest {
    return _smithy.isa(o, "CreateTemplateRequest");
  }
}

export interface CreateTemplateResponse extends $MetadataBearer {
  __type?: "CreateTemplateResponse";
  /**
   *
   * 		       <p>The Amazon Resource Name (ARN) for the template.</p>
   *
   */
  Arn?: string;

  /**
   *
   * 		       <p>The template creation status.</p>
   *
   */
  CreationStatus?: ResourceStatus | string;

  /**
   *
   * 		       <p>The AWS request ID for this operation.</p>
   *
   */
  RequestId?: string;

  /**
   *
   * 		       <p>The ID of the template.</p>
   *
   */
  TemplateId?: string;

  /**
   *
   * 		       <p>The ARN for the template, including the version information of
   * 			the first version.</p>
   *
   */
  VersionArn?: string;
}

export namespace CreateTemplateResponse {
  export function isa(o: any): o is CreateTemplateResponse {
    return _smithy.isa(o, "CreateTemplateResponse");
  }
}

/**
 *
 * 		       <p>The combination of username and password that are used as credentials.</p>
 *
 */
export interface CredentialPair {
  __type?: "CredentialPair";
  /**
   *
   * 		       <p>Password.</p>
   *
   */
  Password: string | undefined;

  /**
   *
   * 		       <p>Username.</p>
   *
   */
  Username: string | undefined;
}

export namespace CredentialPair {
  export function isa(o: any): o is CredentialPair {
    return _smithy.isa(o, "CredentialPair");
  }
}

/**
 *
 * 		       <p>A physical table type built from the results of the custom SQL query.</p>
 *
 */
export interface CustomSql {
  __type?: "CustomSql";
  /**
   *
   * 		       <p>The column schema from the SQL query result set.</p>
   *
   */
  Columns?: Array<InputColumn>;

  /**
   *
   * 		       <p>The Amazon Resource Name (ARN) of the data source.</p>
   *
   */
  DataSourceArn: string | undefined;

  /**
   *
   * 		       <p>A display name for the SQL query result.</p>
   *
   */
  Name: string | undefined;

  /**
   *
   * 		       <p>The SQL query.</p>
   *
   */
  SqlQuery: string | undefined;
}

export namespace CustomSql {
  export function isa(o: any): o is CustomSql {
    return _smithy.isa(o, "CustomSql");
  }
}

/**
 *
 * 		       <p>Dashboard.</p>
 *
 */
export interface Dashboard {
  __type?: "Dashboard";
  /**
   *
   * 		       <p>The Amazon Resource name (ARN) of the resource.</p>
   *
   */
  Arn?: string;

  /**
   *
   * 		       <p>The time this was created.</p>
   *
   */
  CreatedTime?: Date;

  /**
   *
   * 		       <p>Dashboard ID.</p>
   *
   */
  DashboardId?: string;

  /**
   *
   * 		       <p>The last time this was published.</p>
   *
   */
  LastPublishedTime?: Date;

  /**
   *
   * 		       <p>The last time this was updated.</p>
   *
   */
  LastUpdatedTime?: Date;

  /**
   *
   * 		       <p>A display name for the dataset.</p>
   *
   */
  Name?: string;

  /**
   *
   * 		       <p>Version.</p>
   *
   */
  Version?: DashboardVersion;
}

export namespace Dashboard {
  export function isa(o: any): o is Dashboard {
    return _smithy.isa(o, "Dashboard");
  }
}

/**
 *
 * 		       <p>Dashboard error.</p>
 *
 */
export interface DashboardError {
  __type?: "DashboardError";
  /**
   *
   * 		       <p>Message.</p>
   *
   */
  Message?: string;

  /**
   *
   * 		       <p>Type.</p>
   *
   */
  Type?: DashboardErrorType | string;
}

export namespace DashboardError {
  export function isa(o: any): o is DashboardError {
    return _smithy.isa(o, "DashboardError");
  }
}

/**
 *
 * 		       <p>Dashboard publish options.</p>
 *
 */
export interface DashboardPublishOptions {
  __type?: "DashboardPublishOptions";
  /**
   *
   * 		       <p>Ad hoc filtering option.</p>
   *
   */
  AdHocFilteringOption?: AdHocFilteringOption;

  /**
   *
   * 		       <p>Export to CSV option.</p>
   *
   */
  ExportToCSVOption?: ExportToCSVOption;

  /**
   *
   * 		       <p>Sheet controls option.</p>
   *
   */
  SheetControlsOption?: SheetControlsOption;
}

export namespace DashboardPublishOptions {
  export function isa(o: any): o is DashboardPublishOptions {
    return _smithy.isa(o, "DashboardPublishOptions");
  }
}

/**
 *
 * 		       <p>Dashboard source entity.</p>
 *
 */
export interface DashboardSourceEntity {
  __type?: "DashboardSourceEntity";
  /**
   *
   * 		       <p>Source template.</p>
   *
   */
  SourceTemplate?: DashboardSourceTemplate;
}

export namespace DashboardSourceEntity {
  export function isa(o: any): o is DashboardSourceEntity {
    return _smithy.isa(o, "DashboardSourceEntity");
  }
}

/**
 *
 * 		       <p>Dashboard source template.</p>
 *
 */
export interface DashboardSourceTemplate {
  __type?: "DashboardSourceTemplate";
  /**
   *
   * 		       <p>The Amazon Resource name (ARN) of the resource.</p>
   *
   */
  Arn: string | undefined;

  /**
   *
   * 		       <p>Dataset references.</p>
   *
   */
  DataSetReferences: Array<DataSetReference> | undefined;
}

export namespace DashboardSourceTemplate {
  export function isa(o: any): o is DashboardSourceTemplate {
    return _smithy.isa(o, "DashboardSourceTemplate");
  }
}

/**
 *
 * 		       <p>Dashboard summary.</p>
 *
 */
export interface DashboardSummary {
  __type?: "DashboardSummary";
  /**
   *
   * 		       <p>The Amazon Resource name (ARN) of the resource.</p>
   *
   */
  Arn?: string;

  /**
   *
   * 		       <p>The time this was created.</p>
   *
   */
  CreatedTime?: Date;

  /**
   *
   * 		       <p>Dashboard ID.</p>
   *
   */
  DashboardId?: string;

  /**
   *
   * 		       <p>The last time this was published.</p>
   *
   */
  LastPublishedTime?: Date;

  /**
   *
   * 		       <p>The last time this was updated.</p>
   *
   */
  LastUpdatedTime?: Date;

  /**
   *
   * 		       <p>A display name for the dataset.</p>
   *
   */
  Name?: string;

  /**
   *
   * 		       <p>Published version number.</p>
   *
   */
  PublishedVersionNumber?: number;
}

export namespace DashboardSummary {
  export function isa(o: any): o is DashboardSummary {
    return _smithy.isa(o, "DashboardSummary");
  }
}

/**
 *
 * 		       <p>Dashboard version.</p>
 *
 */
export interface DashboardVersion {
  __type?: "DashboardVersion";
  /**
   *
   * 		       <p>The Amazon Resource name (ARN) of the resource.</p>
   *
   */
  Arn?: string;

  /**
   *
   * 		       <p>The time this was created.</p>
   *
   */
  CreatedTime?: Date;

  /**
   *
   * 		       <p>Description.</p>
   *
   */
  Description?: string;

  /**
   *
   * 		       <p>Errors.</p>
   *
   */
  Errors?: Array<DashboardError>;

  /**
   *
   * 		       <p>Source entity ARN.</p>
   *
   */
  SourceEntityArn?: string;

  /**
   *
   * 		       <p>The HTTP status of the request.</p>
   *
   */
  Status?: ResourceStatus | string;

  /**
   *
   * 		       <p>Version number.</p>
   *
   */
  VersionNumber?: number;
}

export namespace DashboardVersion {
  export function isa(o: any): o is DashboardVersion {
    return _smithy.isa(o, "DashboardVersion");
  }
}

/**
 *
 * 		       <p>Dashboard version summary.</p>
 *
 */
export interface DashboardVersionSummary {
  __type?: "DashboardVersionSummary";
  /**
   *
   * 		       <p>The Amazon Resource name (ARN) of the resource.</p>
   *
   */
  Arn?: string;

  /**
   *
   * 		       <p>The time this was created.</p>
   *
   */
  CreatedTime?: Date;

  /**
   *
   * 		       <p>Description.</p>
   *
   */
  Description?: string;

  /**
   *
   * 		       <p>Source entity ARN.</p>
   *
   */
  SourceEntityArn?: string;

  /**
   *
   * 		       <p>The HTTP status of the request.</p>
   *
   */
  Status?: ResourceStatus | string;

  /**
   *
   * 		       <p>Version number.</p>
   *
   */
  VersionNumber?: number;
}

export namespace DashboardVersionSummary {
  export function isa(o: any): o is DashboardVersionSummary {
    return _smithy.isa(o, "DashboardVersionSummary");
  }
}

/**
 *
 * 		       <p>Dataset.</p>
 *
 */
export interface DataSet {
  __type?: "DataSet";
  /**
   *
   * 		       <p>The Amazon Resource name (ARN) of the resource.</p>
   *
   */
  Arn?: string;

  /**
   *
   * 		       <p>Groupings of columns that work together in certain QuickSight features. Currently, only
   * 			geospatial hierarchy is supported.</p>
   *
   */
  ColumnGroups?: Array<ColumnGroup>;

  /**
   *
   * 		       <p>The amount of SPICE capacity used by this dataset. This is 0 if the dataset isn't
   * 			imported into SPICE.</p>
   *
   */
  ConsumedSpiceCapacityInBytes?: number;

  /**
   *
   * 		       <p>The time this was created.</p>
   *
   */
  CreatedTime?: Date;

  /**
   *
   * 		       <p>The ID of the dataset.</p>
   *
   */
  DataSetId?: string;

  /**
   *
   * 		       <p>Indicates whether or not you want to import the data into SPICE.</p>
   *
   */
  ImportMode?: DataSetImportMode | string;

  /**
   *
   * 		       <p>The last time this was updated.</p>
   *
   */
  LastUpdatedTime?: Date;

  /**
   *
   * 		       <p>Configures the combination and transformation of the data from the physical
   * 			tables.</p>
   *
   */
  LogicalTableMap?: { [key: string]: LogicalTable };

  /**
   *
   * 		       <p>A display name for the dataset.</p>
   *
   */
  Name?: string;

  /**
   *
   * 		       <p>The list of columns after all transforms. These columns are available in templates,
   * 			analyses, and dashboards.</p>
   *
   */
  OutputColumns?: Array<OutputColumn>;

  /**
   *
   * 		       <p>Declares the physical tables that are available in the underlying data sources.</p>
   *
   */
  PhysicalTableMap?: { [key: string]: PhysicalTable };

  /**
   *
   * 		       <p>Row-level security configuration on the dataset.</p>
   *
   */
  RowLevelPermissionDataSet?: RowLevelPermissionDataSet;
}

export namespace DataSet {
  export function isa(o: any): o is DataSet {
    return _smithy.isa(o, "DataSet");
  }
}

/**
 *
 * 		       <p>Dataset configuration.</p>
 *
 */
export interface DataSetConfiguration {
  __type?: "DataSetConfiguration";
  /**
   *
   * 		       <p>A structure containing the list of column group schemas.</p>
   *
   */
  ColumnGroupSchemaList?: Array<ColumnGroupSchema>;

  /**
   *
   * 		       <p>Dataset schema.</p>
   *
   */
  DataSetSchema?: DataSetSchema;

  /**
   *
   * 		       <p>Placeholder.</p>
   *
   */
  Placeholder?: string;
}

export namespace DataSetConfiguration {
  export function isa(o: any): o is DataSetConfiguration {
    return _smithy.isa(o, "DataSetConfiguration");
  }
}

/**
 *
 * 		       <p>Dataset reference.</p>
 *
 */
export interface DataSetReference {
  __type?: "DataSetReference";
  /**
   *
   * 		       <p>Dataset ARN.</p>
   *
   */
  DataSetArn: string | undefined;

  /**
   *
   * 		       <p>Dataset placeholder.</p>
   *
   */
  DataSetPlaceholder: string | undefined;
}

export namespace DataSetReference {
  export function isa(o: any): o is DataSetReference {
    return _smithy.isa(o, "DataSetReference");
  }
}

/**
 *
 * 		       <p>Dataset schema.</p>
 *
 */
export interface DataSetSchema {
  __type?: "DataSetSchema";
  /**
   *
   * 		       <p>A structure containing the list of column schemas.</p>
   *
   */
  ColumnSchemaList?: Array<ColumnSchema>;
}

export namespace DataSetSchema {
  export function isa(o: any): o is DataSetSchema {
    return _smithy.isa(o, "DataSetSchema");
  }
}

/**
 *
 * 		       <p>Dataset summary.</p>
 *
 */
export interface DataSetSummary {
  __type?: "DataSetSummary";
  /**
   *
   * 		       <p>The Amazon Resource name (ARN) of the dataset.</p>
   *
   */
  Arn?: string;

  /**
   *
   * 		       <p>The time this was created.</p>
   *
   */
  CreatedTime?: Date;

  /**
   *
   * 		       <p>The ID of the dataset.</p>
   *
   */
  DataSetId?: string;

  /**
   *
   * 		       <p>Indicates whether or not you want to import the data into SPICE.</p>
   *
   */
  ImportMode?: DataSetImportMode | string;

  /**
   *
   * 		       <p>The last time this was updated.</p>
   *
   */
  LastUpdatedTime?: Date;

  /**
   *
   * 		       <p>A display name for the dataset.</p>
   *
   */
  Name?: string;

  /**
   *
   * 		       <p>Row-level security configuration on the dataset.</p>
   *
   */
  RowLevelPermissionDataSet?: RowLevelPermissionDataSet;
}

export namespace DataSetSummary {
  export function isa(o: any): o is DataSetSummary {
    return _smithy.isa(o, "DataSetSummary");
  }
}

/**
 *
 * 		       <p>The structure of a data source.</p>
 *
 */
export interface DataSource {
  __type?: "DataSource";
  /**
   *
   * 		       <p>The Amazon Resource name (ARN) of the data source.</p>
   *
   */
  Arn?: string;

  /**
   *
   * 		       <p>The time this was created.</p>
   *
   */
  CreatedTime?: Date;

  /**
   *
   * 		       <p>The ID of the data source. This ID is unique per AWS Region for each AWS account.</p>
   *
   */
  DataSourceId?: string;

  /**
   *
   * 		       <p>The parameters that QuickSight uses to connect to your underlying source. This is a
   * 			variant type structure. At most one of the attributes should be non-null for this structure
   * 			to be valid.</p>
   *
   */
  DataSourceParameters?: DataSourceParameters;

  /**
   *
   * 		       <p>Error information from the last update or the creation of the data source.</p>
   *
   */
  ErrorInfo?: DataSourceErrorInfo;

  /**
   *
   * 		       <p>The last time this was updated.</p>
   *
   */
  LastUpdatedTime?: Date;

  /**
   *
   * 		       <p>A display name for the data source.</p>
   *
   */
  Name?: string;

  /**
   *
   * 		       <p>Secure Socket Layer (SSL) properties that apply when QuickSight connects to your
   * 			underlying source.</p>
   *
   */
  SslProperties?: SslProperties;

  /**
   *
   * 		       <p>The HTTP status of the request.</p>
   *
   */
  Status?: ResourceStatus | string;

  /**
   *
   * 		       <p>The type of the data source. This indicates which database engine the data source
   * 			connects to.</p>
   *
   */
  Type?: DataSourceType | string;

  /**
   *
   * 		       <p>The VPC connection information. You need to use this parameter only when you want
   * 			QuickSight to use a VPC connection when connecting to your underlying source.</p>
   *
   */
  VpcConnectionProperties?: VpcConnectionProperties;
}

export namespace DataSource {
  export function isa(o: any): o is DataSource {
    return _smithy.isa(o, "DataSource");
  }
}

/**
 *
 * 		       <p>Data source credentials.</p>
 *
 */
export interface DataSourceCredentials {
  __type?: "DataSourceCredentials";
  /**
   *
   * 		       <p>Credential pair.</p>
   *
   */
  CredentialPair?: CredentialPair;
}

export namespace DataSourceCredentials {
  export function isa(o: any): o is DataSourceCredentials {
    return _smithy.isa(o, "DataSourceCredentials");
  }
}

/**
 *
 * 		       <p>Error information on data source creation or update.</p>
 *
 */
export interface DataSourceErrorInfo {
  __type?: "DataSourceErrorInfo";
  /**
   *
   * 		       <p>Error message.</p>
   *
   */
  Message?: string;

  /**
   *
   * 		       <p>Error type.</p>
   *
   */
  Type?: DataSourceErrorInfoType | string;
}

export namespace DataSourceErrorInfo {
  export function isa(o: any): o is DataSourceErrorInfo {
    return _smithy.isa(o, "DataSourceErrorInfo");
  }
}

/**
 *
 * 		       <p>The parameters that QuickSight uses to connect to your underlying source. This is a
 * 			variant type structure. At most one of the attributes should be non-null for this structure
 * 			to be valid.</p>
 *
 */
export interface DataSourceParameters {
  __type?: "DataSourceParameters";
  /**
   *
   * 		       <p>Amazon Elasticsearch parameters.</p>
   *
   */
  AmazonElasticsearchParameters?: AmazonElasticsearchParameters;

  /**
   *
   * 		       <p>Athena parameters.</p>
   *
   */
  AthenaParameters?: AthenaParameters;

  /**
   *
   * 		       <p>Aurora MySQL parameters.</p>
   *
   */
  AuroraParameters?: AuroraParameters;

  /**
   *
   * 		       <p>Aurora PostgreSQL parameters.</p>
   *
   */
  AuroraPostgreSqlParameters?: AuroraPostgreSqlParameters;

  /**
   *
   * 		       <p>AWS IoT Analytics parameters.</p>
   *
   */
  AwsIotAnalyticsParameters?: AwsIotAnalyticsParameters;

  /**
   *
   * 		       <p>Jira parameters.</p>
   *
   */
  JiraParameters?: JiraParameters;

  /**
   *
   * 		       <p>MariaDB parameters.</p>
   *
   */
  MariaDbParameters?: MariaDbParameters;

  /**
   *
   * 		       <p>MySQL parameters.</p>
   *
   */
  MySqlParameters?: MySqlParameters;

  /**
   *
   * 		       <p>PostgreSQL parameters.</p>
   *
   */
  PostgreSqlParameters?: PostgreSqlParameters;

  /**
   *
   * 		       <p>Presto parameters.</p>
   *
   */
  PrestoParameters?: PrestoParameters;

  /**
   *
   * 		       <p>RDS parameters.</p>
   *
   */
  RdsParameters?: RdsParameters;

  /**
   *
   * 		       <p>Redshift parameters.</p>
   *
   */
  RedshiftParameters?: RedshiftParameters;

  /**
   *
   * 		       <p>S3 parameters.</p>
   *
   */
  S3Parameters?: S3Parameters;

  /**
   *
   * 		       <p>ServiceNow parameters.</p>
   *
   */
  ServiceNowParameters?: ServiceNowParameters;

  /**
   *
   * 		       <p>Snowflake parameters.</p>
   *
   */
  SnowflakeParameters?: SnowflakeParameters;

  /**
   *
   * 		       <p>Spark parameters.</p>
   *
   */
  SparkParameters?: SparkParameters;

  /**
   *
   * 		       <p>SQL Server parameters.</p>
   *
   */
  SqlServerParameters?: SqlServerParameters;

  /**
   *
   * 		       <p>Teradata parameters.</p>
   *
   */
  TeradataParameters?: TeradataParameters;

  /**
   *
   * 		       <p>Twitter parameters.</p>
   *
   */
  TwitterParameters?: TwitterParameters;
}

export namespace DataSourceParameters {
  export function isa(o: any): o is DataSourceParameters {
    return _smithy.isa(o, "DataSourceParameters");
  }
}

/**
 *
 * 		       <p>Date time parameter.</p>
 *
 */
export interface DateTimeParameter {
  __type?: "DateTimeParameter";
  /**
   *
   * 		       <p>A display name for the dataset.</p>
   *
   */
  Name: string | undefined;

  /**
   *
   * 		       <p>Values.</p>
   *
   */
  Values: Array<Date> | undefined;
}

export namespace DateTimeParameter {
  export function isa(o: any): o is DateTimeParameter {
    return _smithy.isa(o, "DateTimeParameter");
  }
}

/**
 *
 * 		       <p>Decimal parameter.</p>
 *
 */
export interface DecimalParameter {
  __type?: "DecimalParameter";
  /**
   *
   * 		       <p>A display name for the dataset.</p>
   *
   */
  Name: string | undefined;

  /**
   *
   * 		       <p>Values.</p>
   *
   */
  Values: Array<number> | undefined;
}

export namespace DecimalParameter {
  export function isa(o: any): o is DecimalParameter {
    return _smithy.isa(o, "DecimalParameter");
  }
}

export interface DeleteDashboardRequest {
  __type?: "DeleteDashboardRequest";
  /**
   *
   * 		       <p>AWS account ID that contains the dashboard you are deleting.</p>
   *
   */
  AwsAccountId: string | undefined;

  /**
   *
   * 		       <p>The ID for the dashboard.</p>
   *
   */
  DashboardId: string | undefined;

  /**
   *
   * 		       <p>The version number of the dashboard. If version number property is provided, only the
   * 			specified version of the dashboard is deleted.</p>
   *
   */
  VersionNumber?: number;
}

export namespace DeleteDashboardRequest {
  export function isa(o: any): o is DeleteDashboardRequest {
    return _smithy.isa(o, "DeleteDashboardRequest");
  }
}

export interface DeleteDashboardResponse extends $MetadataBearer {
  __type?: "DeleteDashboardResponse";
  /**
   *
   * 		       <p>The Secure Socket Layer (SSL) properties that apply. of the resource.</p>
   *
   */
  Arn?: string;

  /**
   *
   * 		       <p>The ID of the dashboard.</p>
   *
   */
  DashboardId?: string;

  /**
   *
   * 		       <p>The AWS request ID for this operation.</p>
   *
   */
  RequestId?: string;
}

export namespace DeleteDashboardResponse {
  export function isa(o: any): o is DeleteDashboardResponse {
    return _smithy.isa(o, "DeleteDashboardResponse");
  }
}

export interface DeleteDataSetRequest {
  __type?: "DeleteDataSetRequest";
  /**
   *
   * 		       <p>The AWS account ID.</p>
   *
   */
  AwsAccountId: string | undefined;

  /**
   *
   * 		       <p>The ID for the dataset that you want to create. This ID is unique per AWS Region for each AWS account.</p>
   *
   */
  DataSetId: string | undefined;
}

export namespace DeleteDataSetRequest {
  export function isa(o: any): o is DeleteDataSetRequest {
    return _smithy.isa(o, "DeleteDataSetRequest");
  }
}

export interface DeleteDataSetResponse extends $MetadataBearer {
  __type?: "DeleteDataSetResponse";
  /**
   *
   * 		       <p>The Amazon Resource Name (ARN) of the dataset.</p>
   *
   */
  Arn?: string;

  /**
   *
   * 		       <p>The ID for the dataset that you want to create. This ID is unique per AWS Region for each AWS account.</p>
   *
   */
  DataSetId?: string;

  /**
   *
   * 		       <p>The AWS request ID for this operation.</p>
   *
   */
  RequestId?: string;
}

export namespace DeleteDataSetResponse {
  export function isa(o: any): o is DeleteDataSetResponse {
    return _smithy.isa(o, "DeleteDataSetResponse");
  }
}

export interface DeleteDataSourceRequest {
  __type?: "DeleteDataSourceRequest";
  /**
   *
   * 		       <p>The AWS account ID.</p>
   *
   */
  AwsAccountId: string | undefined;

  /**
   *
   * 		       <p>The ID of the data source. This ID is unique per AWS Region for each AWS account.</p>
   *
   */
  DataSourceId: string | undefined;
}

export namespace DeleteDataSourceRequest {
  export function isa(o: any): o is DeleteDataSourceRequest {
    return _smithy.isa(o, "DeleteDataSourceRequest");
  }
}

export interface DeleteDataSourceResponse extends $MetadataBearer {
  __type?: "DeleteDataSourceResponse";
  /**
   *
   * 		       <p>The Amazon Resource Name (ARN) of the data source that you deleted.</p>
   *
   */
  Arn?: string;

  /**
   *
   * 		       <p>The ID of the data source. This ID is unique per AWS Region for each AWS account.</p>
   *
   */
  DataSourceId?: string;

  /**
   *
   * 		       <p>The AWS request ID for this operation.</p>
   *
   */
  RequestId?: string;
}

export namespace DeleteDataSourceResponse {
  export function isa(o: any): o is DeleteDataSourceResponse {
    return _smithy.isa(o, "DeleteDataSourceResponse");
  }
}

export interface DeleteGroupMembershipRequest {
  __type?: "DeleteGroupMembershipRequest";
  /**
   *
   * 		       <p>The ID for the AWS account that the group is in. Currently, you use the ID for the AWS
   * 			account that contains your Amazon QuickSight account.</p>
   *
   */
  AwsAccountId: string | undefined;

  /**
   *
   * 		       <p>The name of the group that you want to delete the user from.</p>
   *
   */
  GroupName: string | undefined;

  /**
   *
   * 		       <p>The name of the user that you want to delete from the group membership.</p>
   *
   */
  MemberName: string | undefined;

  /**
   *
   * 		       <p>The namespace. Currently, you should set this to <code>default</code>.</p>
   *
   */
  Namespace: string | undefined;
}

export namespace DeleteGroupMembershipRequest {
  export function isa(o: any): o is DeleteGroupMembershipRequest {
    return _smithy.isa(o, "DeleteGroupMembershipRequest");
  }
}

export interface DeleteGroupMembershipResponse extends $MetadataBearer {
  __type?: "DeleteGroupMembershipResponse";
  /**
   *
   * 		       <p>The AWS request ID for this operation.</p>
   *
   */
  RequestId?: string;
}

export namespace DeleteGroupMembershipResponse {
  export function isa(o: any): o is DeleteGroupMembershipResponse {
    return _smithy.isa(o, "DeleteGroupMembershipResponse");
  }
}

export interface DeleteGroupRequest {
  __type?: "DeleteGroupRequest";
  /**
   *
   * 		       <p>The ID for the AWS account that the group is in. Currently, you use the ID for the AWS
   * 			account that contains your Amazon QuickSight account.</p>
   *
   */
  AwsAccountId: string | undefined;

  /**
   *
   * 		       <p>The name of the group that you want to delete.</p>
   *
   */
  GroupName: string | undefined;

  /**
   *
   * 		       <p>The namespace. Currently, you should set this to <code>default</code>.</p>
   *
   */
  Namespace: string | undefined;
}

export namespace DeleteGroupRequest {
  export function isa(o: any): o is DeleteGroupRequest {
    return _smithy.isa(o, "DeleteGroupRequest");
  }
}

export interface DeleteGroupResponse extends $MetadataBearer {
  __type?: "DeleteGroupResponse";
  /**
   *
   * 		       <p>The AWS request ID for this operation.</p>
   *
   */
  RequestId?: string;
}

export namespace DeleteGroupResponse {
  export function isa(o: any): o is DeleteGroupResponse {
    return _smithy.isa(o, "DeleteGroupResponse");
  }
}

export interface DeleteIAMPolicyAssignmentRequest {
  __type?: "DeleteIAMPolicyAssignmentRequest";
  /**
   *
   * 		       <p>The name of the assignment. </p>
   *
   */
  AssignmentName: string | undefined;

  /**
   *
   * 		       <p>The AWS account ID where you want to delete an IAM policy assignment.</p>
   *
   */
  AwsAccountId: string | undefined;

  /**
   *
   * 		       <p>The namespace that contains the assignment.</p>
   *
   */
  Namespace: string | undefined;
}

export namespace DeleteIAMPolicyAssignmentRequest {
  export function isa(o: any): o is DeleteIAMPolicyAssignmentRequest {
    return _smithy.isa(o, "DeleteIAMPolicyAssignmentRequest");
  }
}

export interface DeleteIAMPolicyAssignmentResponse extends $MetadataBearer {
  __type?: "DeleteIAMPolicyAssignmentResponse";
  /**
   *
   * 		       <p>The name of the assignment. </p>
   *
   */
  AssignmentName?: string;

  /**
   *
   * 		       <p>The AWS request ID for this operation.</p>
   *
   */
  RequestId?: string;
}

export namespace DeleteIAMPolicyAssignmentResponse {
  export function isa(o: any): o is DeleteIAMPolicyAssignmentResponse {
    return _smithy.isa(o, "DeleteIAMPolicyAssignmentResponse");
  }
}

export interface DeleteTemplateAliasRequest {
  __type?: "DeleteTemplateAliasRequest";
  /**
   *
   * 		       <p>The alias of the template that you want to delete. If you provide a specific alias,
   * 			you delete the version that the alias points to.
   * 			You can specify the latest version of the template by providing the keyword
   * 			<code>$LATEST</code> in the <code>AliasName</code> parameter. </p>
   *
   */
  AliasName: string | undefined;

  /**
   *
   * 		       <p>AWS account ID that contains the template alias you are deleting.</p>
   *
   */
  AwsAccountId: string | undefined;

  /**
   *
   * 		       <p>An ID for the template.</p>
   *
   */
  TemplateId: string | undefined;
}

export namespace DeleteTemplateAliasRequest {
  export function isa(o: any): o is DeleteTemplateAliasRequest {
    return _smithy.isa(o, "DeleteTemplateAliasRequest");
  }
}

export interface DeleteTemplateAliasResponse extends $MetadataBearer {
  __type?: "DeleteTemplateAliasResponse";
  /**
   *
   * 		       <p>The name of the alias.</p>
   *
   */
  AliasName?: string;

  /**
   *
   * 		       <p>The Amazon Resource Name (ARN) of the resource.</p>
   *
   */
  Arn?: string;

  /**
   *
   * 		       <p>The AWS request ID for this operation.</p>
   *
   */
  RequestId?: string;

  /**
   *
   * 		       <p>An ID for the template.</p>
   *
   */
  TemplateId?: string;
}

export namespace DeleteTemplateAliasResponse {
  export function isa(o: any): o is DeleteTemplateAliasResponse {
    return _smithy.isa(o, "DeleteTemplateAliasResponse");
  }
}

export interface DeleteTemplateRequest {
  __type?: "DeleteTemplateRequest";
  /**
   *
   * 		       <p>AWS account ID that contains the template you are deleting.</p>
   *
   */
  AwsAccountId: string | undefined;

  /**
   *
   * 		       <p>An ID for the template you want to delete.</p>
   *
   */
  TemplateId: string | undefined;

  /**
   *
   * 		       <p>Specifies the version of the template that you want to delete.
   * 			If you don't provide a version number, <code>DeleteTemplate</code> deletes all versions of the template.
   * 	 </p>
   *
   */
  VersionNumber?: number;
}

export namespace DeleteTemplateRequest {
  export function isa(o: any): o is DeleteTemplateRequest {
    return _smithy.isa(o, "DeleteTemplateRequest");
  }
}

export interface DeleteTemplateResponse extends $MetadataBearer {
  __type?: "DeleteTemplateResponse";
  /**
   *
   * 		       <p>The Amazon Resource Name (ARN) of the resource.</p>
   *
   */
  Arn?: string;

  /**
   *
   * 		       <p>The AWS request ID for this operation.</p>
   *
   */
  RequestId?: string;

  /**
   *
   * 		       <p>An ID for the template.</p>
   *
   */
  TemplateId?: string;
}

export namespace DeleteTemplateResponse {
  export function isa(o: any): o is DeleteTemplateResponse {
    return _smithy.isa(o, "DeleteTemplateResponse");
  }
}

/**
 *
 * 		       <p></p>
 *
 */
export interface DeleteUserByPrincipalIdRequest {
  __type?: "DeleteUserByPrincipalIdRequest";
  /**
   *
   * 		       <p>The ID for the AWS account that the user is in. Currently, you use the ID for the AWS
   * 			account that contains your Amazon QuickSight account.</p>
   *
   */
  AwsAccountId: string | undefined;

  /**
   *
   * 		       <p>The namespace. Currently, you should set this to <code>default</code>.</p>
   *
   */
  Namespace: string | undefined;

  /**
   *
   * 		       <p>The principal ID of the user.</p>
   *
   */
  PrincipalId: string | undefined;
}

export namespace DeleteUserByPrincipalIdRequest {
  export function isa(o: any): o is DeleteUserByPrincipalIdRequest {
    return _smithy.isa(o, "DeleteUserByPrincipalIdRequest");
  }
}

export interface DeleteUserByPrincipalIdResponse extends $MetadataBearer {
  __type?: "DeleteUserByPrincipalIdResponse";
  /**
   *
   * 		       <p>The AWS request ID for this operation.</p>
   *
   */
  RequestId?: string;
}

export namespace DeleteUserByPrincipalIdResponse {
  export function isa(o: any): o is DeleteUserByPrincipalIdResponse {
    return _smithy.isa(o, "DeleteUserByPrincipalIdResponse");
  }
}

export interface DeleteUserRequest {
  __type?: "DeleteUserRequest";
  /**
   *
   * 		       <p>The ID for the AWS account that the user is in. Currently, you use the ID for the AWS
   * 			account that contains your Amazon QuickSight account.</p>
   *
   */
  AwsAccountId: string | undefined;

  /**
   *
   * 		       <p>The namespace. Currently, you should set this to <code>default</code>.</p>
   *
   */
  Namespace: string | undefined;

  /**
   *
   * 		       <p>The name of the user that you want to delete.</p>
   *
   */
  UserName: string | undefined;
}

export namespace DeleteUserRequest {
  export function isa(o: any): o is DeleteUserRequest {
    return _smithy.isa(o, "DeleteUserRequest");
  }
}

export interface DeleteUserResponse extends $MetadataBearer {
  __type?: "DeleteUserResponse";
  /**
   *
   * 		       <p>The AWS request ID for this operation.</p>
   *
   */
  RequestId?: string;
}

export namespace DeleteUserResponse {
  export function isa(o: any): o is DeleteUserResponse {
    return _smithy.isa(o, "DeleteUserResponse");
  }
}

export interface DescribeDashboardPermissionsRequest {
  __type?: "DescribeDashboardPermissionsRequest";
  /**
   *
   * 		       <p>AWS account ID that contains the dashboard you are describing permissions of.</p>
   *
   */
  AwsAccountId: string | undefined;

  /**
   *
   * 		       <p>The ID for the dashboard, also added to IAM policy.</p>
   *
   */
  DashboardId: string | undefined;
}

export namespace DescribeDashboardPermissionsRequest {
  export function isa(o: any): o is DescribeDashboardPermissionsRequest {
    return _smithy.isa(o, "DescribeDashboardPermissionsRequest");
  }
}

export interface DescribeDashboardPermissionsResponse extends $MetadataBearer {
  __type?: "DescribeDashboardPermissionsResponse";
  /**
   *
   * 		       <p>The Amazon Resource Name (ARN) of the dashboard.</p>
   *
   */
  DashboardArn?: string;

  /**
   *
   * 		       <p>The ID for the dashboard.</p>
   *
   */
  DashboardId?: string;

  /**
   *
   * 		       <p>A structure that contains the permissions of the dashboard.</p>
   *
   */
  Permissions?: Array<ResourcePermission>;

  /**
   *
   * 		       <p>The AWS request ID for this operation.</p>
   *
   */
  RequestId?: string;
}

export namespace DescribeDashboardPermissionsResponse {
  export function isa(o: any): o is DescribeDashboardPermissionsResponse {
    return _smithy.isa(o, "DescribeDashboardPermissionsResponse");
  }
}

export interface DescribeDashboardRequest {
  __type?: "DescribeDashboardRequest";
  /**
   *
   * 		       <p>The alias name.</p>
   *
   */
  AliasName?: string;

  /**
   *
   * 		       <p>AWS account ID that contains the dashboard you are describing.</p>
   *
   */
  AwsAccountId: string | undefined;

  /**
   *
   * 		       <p>The ID for the dashboard.</p>
   *
   */
  DashboardId: string | undefined;

  /**
   *
   * 		       <p>The version number for the dashboard. If version number isn’t passed the latest
   * 			published dashboard version is described. </p>
   *
   */
  VersionNumber?: number;
}

export namespace DescribeDashboardRequest {
  export function isa(o: any): o is DescribeDashboardRequest {
    return _smithy.isa(o, "DescribeDashboardRequest");
  }
}

export interface DescribeDashboardResponse extends $MetadataBearer {
  __type?: "DescribeDashboardResponse";
  /**
   *
   * 		       <p>Information about the dashboard.</p>
   *
   */
  Dashboard?: Dashboard;

  /**
   *
   * 		       <p>The AWS request ID for this operation.</p>
   *
   */
  RequestId?: string;
}

export namespace DescribeDashboardResponse {
  export function isa(o: any): o is DescribeDashboardResponse {
    return _smithy.isa(o, "DescribeDashboardResponse");
  }
}

export interface DescribeDataSetPermissionsRequest {
  __type?: "DescribeDataSetPermissionsRequest";
  /**
   *
   * 		       <p>The AWS Account ID.</p>
   *
   */
  AwsAccountId: string | undefined;

  /**
   *
   * 		       <p>The ID for the dataset that you want to create. This ID is unique per AWS Region for each AWS account.</p>
   *
   */
  DataSetId: string | undefined;
}

export namespace DescribeDataSetPermissionsRequest {
  export function isa(o: any): o is DescribeDataSetPermissionsRequest {
    return _smithy.isa(o, "DescribeDataSetPermissionsRequest");
  }
}

export interface DescribeDataSetPermissionsResponse extends $MetadataBearer {
  __type?: "DescribeDataSetPermissionsResponse";
  /**
   *
   * 		       <p>The Amazon Resource Name (ARN) of the dataset.</p>
   *
   */
  DataSetArn?: string;

  /**
   *
   * 		       <p>The ID for the dataset that you want to create. This ID is unique per AWS Region for each AWS account.</p>
   *
   */
  DataSetId?: string;

  /**
   *
   * 		       <p>A list of resource permissions on the dataset.</p>
   *
   */
  Permissions?: Array<ResourcePermission>;

  /**
   *
   * 		       <p>The AWS request ID for this operation.</p>
   *
   */
  RequestId?: string;
}

export namespace DescribeDataSetPermissionsResponse {
  export function isa(o: any): o is DescribeDataSetPermissionsResponse {
    return _smithy.isa(o, "DescribeDataSetPermissionsResponse");
  }
}

export interface DescribeDataSetRequest {
  __type?: "DescribeDataSetRequest";
  /**
   *
   * 		       <p>The AWS Account ID.</p>
   *
   */
  AwsAccountId: string | undefined;

  /**
   *
   * 		       <p>The ID for the dataset that you want to create. This ID is unique per AWS Region for each AWS account.</p>
   *
   */
  DataSetId: string | undefined;
}

export namespace DescribeDataSetRequest {
  export function isa(o: any): o is DescribeDataSetRequest {
    return _smithy.isa(o, "DescribeDataSetRequest");
  }
}

export interface DescribeDataSetResponse extends $MetadataBearer {
  __type?: "DescribeDataSetResponse";
  /**
   *
   * 		       <p>Information on the dataset.</p>
   *
   */
  DataSet?: DataSet;

  /**
   *
   * 		       <p>The AWS request ID for this operation.</p>
   *
   */
  RequestId?: string;
}

export namespace DescribeDataSetResponse {
  export function isa(o: any): o is DescribeDataSetResponse {
    return _smithy.isa(o, "DescribeDataSetResponse");
  }
}

export interface DescribeDataSourcePermissionsRequest {
  __type?: "DescribeDataSourcePermissionsRequest";
  /**
   *
   * 		       <p>The AWS account ID.</p>
   *
   */
  AwsAccountId: string | undefined;

  /**
   *
   * 		       <p>The ID of the data source. This ID is unique per AWS Region for each AWS account.</p>
   *
   */
  DataSourceId: string | undefined;
}

export namespace DescribeDataSourcePermissionsRequest {
  export function isa(o: any): o is DescribeDataSourcePermissionsRequest {
    return _smithy.isa(o, "DescribeDataSourcePermissionsRequest");
  }
}

export interface DescribeDataSourcePermissionsResponse extends $MetadataBearer {
  __type?: "DescribeDataSourcePermissionsResponse";
  /**
   *
   * 		       <p>The Amazon Resource Name (ARN) of the data source.</p>
   *
   */
  DataSourceArn?: string;

  /**
   *
   * 		       <p>The ID of the data source. This ID is unique per AWS Region for each AWS account.</p>
   *
   */
  DataSourceId?: string;

  /**
   *
   * 		       <p>A list of resource permissions on the data source.</p>
   *
   */
  Permissions?: Array<ResourcePermission>;

  /**
   *
   * 		       <p>The AWS request ID for this operation.</p>
   *
   */
  RequestId?: string;
}

export namespace DescribeDataSourcePermissionsResponse {
  export function isa(o: any): o is DescribeDataSourcePermissionsResponse {
    return _smithy.isa(o, "DescribeDataSourcePermissionsResponse");
  }
}

export interface DescribeDataSourceRequest {
  __type?: "DescribeDataSourceRequest";
  /**
   *
   * 		       <p>The AWS account ID.</p>
   *
   */
  AwsAccountId: string | undefined;

  /**
   *
   * 		       <p>The ID of the data source. This ID is unique per AWS Region for each AWS account.</p>
   *
   */
  DataSourceId: string | undefined;
}

export namespace DescribeDataSourceRequest {
  export function isa(o: any): o is DescribeDataSourceRequest {
    return _smithy.isa(o, "DescribeDataSourceRequest");
  }
}

export interface DescribeDataSourceResponse extends $MetadataBearer {
  __type?: "DescribeDataSourceResponse";
  /**
   *
   * 		       <p>The information on the data source.</p>
   *
   */
  DataSource?: DataSource;

  /**
   *
   * 		       <p>The AWS request ID for this operation.</p>
   *
   */
  RequestId?: string;
}

export namespace DescribeDataSourceResponse {
  export function isa(o: any): o is DescribeDataSourceResponse {
    return _smithy.isa(o, "DescribeDataSourceResponse");
  }
}

export interface DescribeGroupRequest {
  __type?: "DescribeGroupRequest";
  /**
   *
   * 		       <p>The ID for the AWS account that the group is in. Currently, you use the ID for the AWS
   * 			account that contains your Amazon QuickSight account.</p>
   *
   */
  AwsAccountId: string | undefined;

  /**
   *
   * 		       <p>The name of the group that you want to describe.</p>
   *
   */
  GroupName: string | undefined;

  /**
   *
   * 		       <p>The namespace. Currently, you should set this to <code>default</code>.</p>
   *
   */
  Namespace: string | undefined;
}

export namespace DescribeGroupRequest {
  export function isa(o: any): o is DescribeGroupRequest {
    return _smithy.isa(o, "DescribeGroupRequest");
  }
}

export interface DescribeGroupResponse extends $MetadataBearer {
  __type?: "DescribeGroupResponse";
  /**
   *
   * 		       <p>The name of the group.</p>
   *
   */
  Group?: Group;

  /**
   *
   * 		       <p>The AWS request ID for this operation.</p>
   *
   */
  RequestId?: string;
}

export namespace DescribeGroupResponse {
  export function isa(o: any): o is DescribeGroupResponse {
    return _smithy.isa(o, "DescribeGroupResponse");
  }
}

export interface DescribeIAMPolicyAssignmentRequest {
  __type?: "DescribeIAMPolicyAssignmentRequest";
  /**
   *
   * 		       <p>The name of the assignment. </p>
   *
   */
  AssignmentName: string | undefined;

  /**
   *
   * 		       <p>The AWS account ID that contains the assignment you want to describe.</p>
   *
   */
  AwsAccountId: string | undefined;

  /**
   *
   * 		       <p>The namespace that contains the assignment.</p>
   *
   */
  Namespace: string | undefined;
}

export namespace DescribeIAMPolicyAssignmentRequest {
  export function isa(o: any): o is DescribeIAMPolicyAssignmentRequest {
    return _smithy.isa(o, "DescribeIAMPolicyAssignmentRequest");
  }
}

export interface DescribeIAMPolicyAssignmentResponse extends $MetadataBearer {
  __type?: "DescribeIAMPolicyAssignmentResponse";
  /**
   *
   * 		       <p>Information describing the IAM policy assignment.</p>
   *
   */
  IAMPolicyAssignment?: IAMPolicyAssignment;

  /**
   *
   * 		       <p>The AWS request ID for this operation.</p>
   *
   */
  RequestId?: string;
}

export namespace DescribeIAMPolicyAssignmentResponse {
  export function isa(o: any): o is DescribeIAMPolicyAssignmentResponse {
    return _smithy.isa(o, "DescribeIAMPolicyAssignmentResponse");
  }
}

export interface DescribeIngestionRequest {
  __type?: "DescribeIngestionRequest";
  /**
   *
   * 		       <p>The AWS account ID.</p>
   *
   */
  AwsAccountId: string | undefined;

  /**
   *
   * 		       <p>The ID of the dataset used in the ingestion.</p>
   *
   */
  DataSetId: string | undefined;

  /**
   *
   * 		       <p>An ID for the ingestion.</p>
   *
   */
  IngestionId: string | undefined;
}

export namespace DescribeIngestionRequest {
  export function isa(o: any): o is DescribeIngestionRequest {
    return _smithy.isa(o, "DescribeIngestionRequest");
  }
}

export interface DescribeIngestionResponse extends $MetadataBearer {
  __type?: "DescribeIngestionResponse";
  /**
   *
   * 		       <p>Information about the ingestion.</p>
   *
   */
  Ingestion?: Ingestion;

  /**
   *
   * 		       <p>The AWS request ID for this operation.</p>
   *
   */
  RequestId?: string;
}

export namespace DescribeIngestionResponse {
  export function isa(o: any): o is DescribeIngestionResponse {
    return _smithy.isa(o, "DescribeIngestionResponse");
  }
}

export interface DescribeTemplateAliasRequest {
  __type?: "DescribeTemplateAliasRequest";
  /**
   *
   * 		       <p>The alias of the template that you want to describe. If you provide a specific alias,
   * 			you describe the version that the alias points to.
   * 			You can specify the latest version of the template by providing the keyword
   * 			<code>$LATEST</code> in the <code>AliasName</code> parameter.
   * 			The keyword <code>$PUBLISHED</code> doesn't apply to templates.</p>
   *
   */
  AliasName: string | undefined;

  /**
   *
   * 		       <p>AWS account ID that contains the template alias you are describing.</p>
   *
   */
  AwsAccountId: string | undefined;

  /**
   *
   * 		       <p>An ID for the template.</p>
   *
   */
  TemplateId: string | undefined;
}

export namespace DescribeTemplateAliasRequest {
  export function isa(o: any): o is DescribeTemplateAliasRequest {
    return _smithy.isa(o, "DescribeTemplateAliasRequest");
  }
}

export interface DescribeTemplateAliasResponse extends $MetadataBearer {
  __type?: "DescribeTemplateAliasResponse";
  /**
   *
   * 		       <p>The AWS request ID for this operation.</p>
   *
   */
  RequestId?: string;

  /**
   *
   * 		       <p>Information about the template alias.</p>
   *
   */
  TemplateAlias?: TemplateAlias;
}

export namespace DescribeTemplateAliasResponse {
  export function isa(o: any): o is DescribeTemplateAliasResponse {
    return _smithy.isa(o, "DescribeTemplateAliasResponse");
  }
}

export interface DescribeTemplatePermissionsRequest {
  __type?: "DescribeTemplatePermissionsRequest";
  /**
   *
   * 		       <p>AWS account ID that contains the template you are describing.</p>
   *
   */
  AwsAccountId: string | undefined;

  /**
   *
   * 		       <p>The ID for the template.</p>
   *
   */
  TemplateId: string | undefined;
}

export namespace DescribeTemplatePermissionsRequest {
  export function isa(o: any): o is DescribeTemplatePermissionsRequest {
    return _smithy.isa(o, "DescribeTemplatePermissionsRequest");
  }
}

export interface DescribeTemplatePermissionsResponse extends $MetadataBearer {
  __type?: "DescribeTemplatePermissionsResponse";
  /**
   *
   * 		       <p>A list of resource permissions to be set on the template. </p>
   *
   */
  Permissions?: Array<ResourcePermission>;

  /**
   *
   * 		       <p>The AWS request ID for this operation.</p>
   *
   */
  RequestId?: string;

  /**
   *
   * 		       <p>The Amazon Resource Name (ARN) of the template.</p>
   *
   */
  TemplateArn?: string;

  /**
   *
   * 		       <p>The ID for the template.</p>
   *
   */
  TemplateId?: string;
}

export namespace DescribeTemplatePermissionsResponse {
  export function isa(o: any): o is DescribeTemplatePermissionsResponse {
    return _smithy.isa(o, "DescribeTemplatePermissionsResponse");
  }
}

export interface DescribeTemplateRequest {
  __type?: "DescribeTemplateRequest";
  /**
   *
   * 		       <p>The alias of the template that you want to describe. If you provide a specific alias,
   * 			you describe the version that the alias points to.
   * 			You can specify the latest version of the template by providing the keyword
   * 			<code>$LATEST</code> in the <code>AliasName</code> parameter.
   * 			The keyword <code>$PUBLISHED</code> doesn't apply to templates.</p>
   *
   */
  AliasName?: string;

  /**
   *
   * 		       <p>AWS account ID that contains the template you are describing.</p>
   *
   */
  AwsAccountId: string | undefined;

  /**
   *
   * 		       <p>An ID for the template.</p>
   *
   */
  TemplateId: string | undefined;

  /**
   *
   * 		       <p>This is an optional field, when a version number is provided the corresponding version
   * 			is describe, if it's not provided the latest version of the template is described.</p>
   *
   */
  VersionNumber?: number;
}

export namespace DescribeTemplateRequest {
  export function isa(o: any): o is DescribeTemplateRequest {
    return _smithy.isa(o, "DescribeTemplateRequest");
  }
}

export interface DescribeTemplateResponse extends $MetadataBearer {
  __type?: "DescribeTemplateResponse";
  /**
   *
   * 		       <p>The template structure of the object you want to describe.</p>
   *
   */
  Template?: Template;
}

export namespace DescribeTemplateResponse {
  export function isa(o: any): o is DescribeTemplateResponse {
    return _smithy.isa(o, "DescribeTemplateResponse");
  }
}

export interface DescribeUserRequest {
  __type?: "DescribeUserRequest";
  /**
   *
   * 		       <p>The ID for the AWS account that the user is in. Currently, you use the ID for the AWS
   * 			account that contains your Amazon QuickSight account.</p>
   *
   */
  AwsAccountId: string | undefined;

  /**
   *
   * 		       <p>The namespace. Currently, you should set this to <code>default</code>.</p>
   *
   */
  Namespace: string | undefined;

  /**
   *
   * 		       <p>The name of the user that you want to describe.</p>
   *
   */
  UserName: string | undefined;
}

export namespace DescribeUserRequest {
  export function isa(o: any): o is DescribeUserRequest {
    return _smithy.isa(o, "DescribeUserRequest");
  }
}

export interface DescribeUserResponse extends $MetadataBearer {
  __type?: "DescribeUserResponse";
  /**
   *
   * 		       <p>The AWS request ID for this operation.</p>
   *
   */
  RequestId?: string;

  /**
   *
   * 		       <p>The user name.</p>
   *
   */
  User?: User;
}

export namespace DescribeUserResponse {
  export function isa(o: any): o is DescribeUserResponse {
    return _smithy.isa(o, "DescribeUserResponse");
  }
}

/**
 *
 * 		       <p>The domain specified is not on the allowlist. All domains for embedded dashboards must
 * 			be added to the approved list by an Amazon QuickSight admin.</p>
 *
 */
export interface DomainNotWhitelistedException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "DomainNotWhitelistedException";
  name: "DomainNotWhitelistedException";
  $fault: "client";
  Message?: string;
  /**
   *
   * 		       <p>The AWS request ID for this request.</p>
   *
   */
  RequestId?: string;
}

export namespace DomainNotWhitelistedException {
  export function isa(o: any): o is DomainNotWhitelistedException {
    return _smithy.isa(o, "DomainNotWhitelistedException");
  }
}

/**
 *
 * 		       <p>Error information on a data set SPICE ingestion.</p>
 *
 */
export interface ErrorInfo {
  __type?: "ErrorInfo";
  /**
   *
   * 		       <p>Error essage.</p>
   *
   */
  Message?: string;

  /**
   *
   * 		       <p>Error type.</p>
   *
   */
  Type?: IngestionErrorType | string;
}

export namespace ErrorInfo {
  export function isa(o: any): o is ErrorInfo {
    return _smithy.isa(o, "ErrorInfo");
  }
}

/**
 *
 * 		       <p>Export to CSV option.</p>
 *
 */
export interface ExportToCSVOption {
  __type?: "ExportToCSVOption";
  /**
   *
   * 		       <p>Availability status.</p>
   *
   */
  AvailabilityStatus?: DashboardBehavior | string;
}

export namespace ExportToCSVOption {
  export function isa(o: any): o is ExportToCSVOption {
    return _smithy.isa(o, "ExportToCSVOption");
  }
}

/**
 *
 * 		       <p>A transform operation that filters rows based on some condition.</p>
 *
 */
export interface FilterOperation {
  __type?: "FilterOperation";
  /**
   *
   * 		       <p>An expression that must evaluate to a boolean value. Rows for which the expression is
   * 			evaluated to true are kept in the dataset.</p>
   *
   */
  ConditionExpression: string | undefined;
}

export namespace FilterOperation {
  export function isa(o: any): o is FilterOperation {
    return _smithy.isa(o, "FilterOperation");
  }
}

/**
 *
 * 		       <p>Geospatial column group that denotes a hierarchy.</p>
 *
 */
export interface GeoSpatialColumnGroup {
  __type?: "GeoSpatialColumnGroup";
  /**
   *
   * 		       <p>Columns in this hierarchy.</p>
   *
   */
  Columns: Array<string> | undefined;

  /**
   *
   * 		       <p>Country code.</p>
   *
   */
  CountryCode: GeoSpatialCountryCode | string | undefined;

  /**
   *
   * 		       <p>A display name for the hierarchy.</p>
   *
   */
  Name: string | undefined;
}

export namespace GeoSpatialColumnGroup {
  export function isa(o: any): o is GeoSpatialColumnGroup {
    return _smithy.isa(o, "GeoSpatialColumnGroup");
  }
}

export interface GetDashboardEmbedUrlRequest {
  __type?: "GetDashboardEmbedUrlRequest";
  /**
   *
   * 		       <p>AWS account ID that contains the dashboard you are embedding.</p>
   *
   */
  AwsAccountId: string | undefined;

  /**
   *
   * 		       <p>The ID for the dashboard, also added to IAM policy</p>
   *
   */
  DashboardId: string | undefined;

  /**
   *
   * 		       <p>The authentication method the user uses to sign in.</p>
   *
   */
  IdentityType: IdentityType | string | undefined;

  /**
   *
   * 		       <p>Remove the reset button on embedded dashboard. The default is FALSE, which allows the
   * 			reset button.</p>
   *
   */
  ResetDisabled?: boolean;

  /**
   *
   * 		       <p>How many minutes the session is valid. The session lifetime must be between 15 and 600
   * 			minutes.</p>
   *
   */
  SessionLifetimeInMinutes?: number;

  /**
   *
   * 		       <p>Remove the undo/redo button on embedded dashboard. The default is FALSE, which enables
   * 			the undo/redo button.</p>
   *
   */
  UndoRedoDisabled?: boolean;

  /**
   *
   * 		       <p>The Amazon QuickSight user's Amazon Resource Name (ARN), for use with <code>QUICKSIGHT</code> identity type.
   * 			You can use this for any Amazon QuickSight users in your account (readers, authors, or
   * 			admins) authenticated as one of the following:</p>
   * 		       <ul>
   *             <li>
   * 				           <p>Active Directory (AD) users or group members</p>
   * 			         </li>
   *             <li>
   * 				           <p>Invited non-federated users</p>
   * 			         </li>
   *             <li>
   * 				           <p>IAM users and IAM role-based sessions authenticated through Federated Single
   * 					Sign-On using SAML, OpenID Connect, or IAM Federation</p>
   * 			         </li>
   *          </ul>
   *
   */
  UserArn?: string;
}

export namespace GetDashboardEmbedUrlRequest {
  export function isa(o: any): o is GetDashboardEmbedUrlRequest {
    return _smithy.isa(o, "GetDashboardEmbedUrlRequest");
  }
}

export interface GetDashboardEmbedUrlResponse extends $MetadataBearer {
  __type?: "GetDashboardEmbedUrlResponse";
  /**
   *
   * 		       <p>URL that you can put into your server-side webpage to embed your dashboard. This URL is
   * 			valid for 5 minutes, and the resulting session is valid for 10 hours. The API provides the
   * 			URL with an auth_code that enables a single-signon session. </p>
   *
   */
  EmbedUrl?: string;

  /**
   *
   * 		       <p>The AWS request ID for this operation.</p>
   *
   */
  RequestId?: string;
}

export namespace GetDashboardEmbedUrlResponse {
  export function isa(o: any): o is GetDashboardEmbedUrlResponse {
    return _smithy.isa(o, "GetDashboardEmbedUrlResponse");
  }
}

/**
 *
 * 		       <p>A <i>group</i> in Amazon QuickSight consists of a set of users. You can
 * 			use groups to make it easier to manage access and security. Currently, an Amazon QuickSight
 * 			subscription can't contain more than 500 Amazon QuickSight groups.</p>
 *
 */
export interface Group {
  __type?: "Group";
  /**
   *
   * 		       <p>The Amazon Resource name (ARN) for the group.</p>
   *
   */
  Arn?: string;

  /**
   *
   * 		       <p>The group description.</p>
   *
   */
  Description?: string;

  /**
   *
   * 		       <p>The name of the group.</p>
   *
   */
  GroupName?: string;

  /**
   *
   * 		       <p>The principal ID of the group.</p>
   *
   */
  PrincipalId?: string;
}

export namespace Group {
  export function isa(o: any): o is Group {
    return _smithy.isa(o, "Group");
  }
}

/**
 *
 * 		       <p>A member of an Amazon QuickSight group. Currently, group members must be users. Groups
 * 			can't be members of another group. .</p>
 *
 */
export interface GroupMember {
  __type?: "GroupMember";
  /**
   *
   * 		       <p>The Amazon Resource name (ARN) for the group member (user).</p>
   *
   */
  Arn?: string;

  /**
   *
   * 		       <p>The name of the group member (user).</p>
   *
   */
  MemberName?: string;
}

export namespace GroupMember {
  export function isa(o: any): o is GroupMember {
    return _smithy.isa(o, "GroupMember");
  }
}

/**
 *
 * 		       <p>IAM policy assignment.</p>
 *
 */
export interface IAMPolicyAssignment {
  __type?: "IAMPolicyAssignment";
  /**
   *
   * 		       <p>Assignment ID.</p>
   *
   */
  AssignmentId?: string;

  /**
   *
   * 		       <p>Assignment name.</p>
   *
   */
  AssignmentName?: string;

  /**
   *
   * 		       <p>Assignment status.</p>
   *
   */
  AssignmentStatus?: AssignmentStatus | string;

  /**
   *
   * 		       <p>AWS account ID.</p>
   *
   */
  AwsAccountId?: string;

  /**
   *
   * 		       <p>Identities.</p>
   *
   */
  Identities?: { [key: string]: Array<string> };

  /**
   *
   * 		       <p>Policy Amazon Resource Name (ARN).</p>
   *
   */
  PolicyArn?: string;
}

export namespace IAMPolicyAssignment {
  export function isa(o: any): o is IAMPolicyAssignment {
    return _smithy.isa(o, "IAMPolicyAssignment");
  }
}

/**
 *
 * 		       <p>IAM policy assignment Summary.</p>
 *
 */
export interface IAMPolicyAssignmentSummary {
  __type?: "IAMPolicyAssignmentSummary";
  /**
   *
   * 		       <p>Assignment name.</p>
   *
   */
  AssignmentName?: string;

  /**
   *
   * 		       <p>Assignment status.</p>
   *
   */
  AssignmentStatus?: AssignmentStatus | string;
}

export namespace IAMPolicyAssignmentSummary {
  export function isa(o: any): o is IAMPolicyAssignmentSummary {
    return _smithy.isa(o, "IAMPolicyAssignmentSummary");
  }
}

/**
 *
 * 		       <p>The identity type specified is not supported. Supported identity types include IAM and
 * 			QUICKSIGHT.</p>
 *
 */
export interface IdentityTypeNotSupportedException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "IdentityTypeNotSupportedException";
  name: "IdentityTypeNotSupportedException";
  $fault: "client";
  Message?: string;
  /**
   *
   * 		       <p>The AWS request ID for this request.</p>
   *
   */
  RequestId?: string;
}

export namespace IdentityTypeNotSupportedException {
  export function isa(o: any): o is IdentityTypeNotSupportedException {
    return _smithy.isa(o, "IdentityTypeNotSupportedException");
  }
}

/**
 *
 * 		       <p>Information on the SPICE ingestion for a dataset.</p>
 *
 */
export interface Ingestion {
  __type?: "Ingestion";
  /**
   *
   * 		       <p>The Amazon Resource name (ARN) of the resource.</p>
   *
   */
  Arn: string | undefined;

  /**
   *
   * 		       <p>The time this ingestion started.</p>
   *
   */
  CreatedTime: Date | undefined;

  /**
   *
   * 		       <p>Error information for this ingestion.</p>
   *
   */
  ErrorInfo?: ErrorInfo;

  /**
   *
   * 		       <p>Ingestion ID.</p>
   *
   */
  IngestionId?: string;

  /**
   *
   * 		       <p>Size of the data ingested in bytes.</p>
   *
   */
  IngestionSizeInBytes?: number;

  /**
   *
   * 		       <p>Ingestion status.</p>
   *
   */
  IngestionStatus: IngestionStatus | string | undefined;

  /**
   *
   * 		       <p>The time this ingestion took, measured in seconds.</p>
   *
   */
  IngestionTimeInSeconds?: number;

  /**
   *
   * 		       <p>Information on queued dataset SPICE ingestion.</p>
   *
   */
  QueueInfo?: QueueInfo;

  /**
   *
   * 		       <p>Event source for this ingestion.</p>
   *
   */
  RequestSource?: IngestionRequestSource | string;

  /**
   *
   * 		       <p>Type of this ingestion.</p>
   *
   */
  RequestType?: IngestionRequestType | string;

  /**
   *
   * 		       <p>Information on rows during a data set SPICE ingestion.</p>
   *
   */
  RowInfo?: RowInfo;
}

export namespace Ingestion {
  export function isa(o: any): o is Ingestion {
    return _smithy.isa(o, "Ingestion");
  }
}

/**
 *
 * 		       <p>Metadata on a column that is used as the input of a transform operation.</p>
 *
 */
export interface InputColumn {
  __type?: "InputColumn";
  /**
   *
   * 		       <p>The name of this column in the underlying data source.</p>
   *
   */
  Name: string | undefined;

  /**
   *
   * 		       <p>The data type of the column.</p>
   *
   */
  Type: InputColumnDataType | string | undefined;
}

export namespace InputColumn {
  export function isa(o: any): o is InputColumn {
    return _smithy.isa(o, "InputColumn");
  }
}

/**
 *
 * 		       <p>Integer parameter.</p>
 *
 */
export interface IntegerParameter {
  __type?: "IntegerParameter";
  /**
   *
   * 		       <p>A display name for the dataset.</p>
   *
   */
  Name: string | undefined;

  /**
   *
   * 		       <p>Values.</p>
   *
   */
  Values: Array<number> | undefined;
}

export namespace IntegerParameter {
  export function isa(o: any): o is IntegerParameter {
    return _smithy.isa(o, "IntegerParameter");
  }
}

/**
 *
 * 		       <p>An internal failure occurred.</p>
 *
 */
export interface InternalFailureException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "InternalFailureException";
  name: "InternalFailureException";
  $fault: "server";
  Message?: string;
  /**
   *
   * 		       <p>The AWS request ID for this request.</p>
   *
   */
  RequestId?: string;
}

export namespace InternalFailureException {
  export function isa(o: any): o is InternalFailureException {
    return _smithy.isa(o, "InternalFailureException");
  }
}

/**
 *
 * 		       <p>The <code>NextToken</code> value isn't valid.</p>
 *
 */
export interface InvalidNextTokenException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "InvalidNextTokenException";
  name: "InvalidNextTokenException";
  $fault: "client";
  Message?: string;
  /**
   *
   * 		       <p>The AWS request ID for this request.</p>
   *
   */
  RequestId?: string;
}

export namespace InvalidNextTokenException {
  export function isa(o: any): o is InvalidNextTokenException {
    return _smithy.isa(o, "InvalidNextTokenException");
  }
}

/**
 *
 * 		       <p>One or more parameters don't have a valid value.</p>
 *
 */
export interface InvalidParameterValueException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "InvalidParameterValueException";
  name: "InvalidParameterValueException";
  $fault: "client";
  Message?: string;
  /**
   *
   * 		       <p>The AWS request ID for this request.</p>
   *
   */
  RequestId?: string;
}

export namespace InvalidParameterValueException {
  export function isa(o: any): o is InvalidParameterValueException {
    return _smithy.isa(o, "InvalidParameterValueException");
  }
}

/**
 *
 * 		       <p>Jira parameters.</p>
 *
 */
export interface JiraParameters {
  __type?: "JiraParameters";
  /**
   *
   * 		       <p>The base URL of the Jira site.</p>
   *
   */
  SiteBaseUrl: string | undefined;
}

export namespace JiraParameters {
  export function isa(o: any): o is JiraParameters {
    return _smithy.isa(o, "JiraParameters");
  }
}

/**
 *
 * 		       <p>Join instruction.</p>
 *
 */
export interface JoinInstruction {
  __type?: "JoinInstruction";
  /**
   *
   * 		       <p>Left operand.</p>
   *
   */
  LeftOperand: string | undefined;

  /**
   *
   * 		       <p>On Clause.</p>
   *
   */
  OnClause: string | undefined;

  /**
   *
   * 		       <p>Right operand.</p>
   *
   */
  RightOperand: string | undefined;

  /**
   *
   * 		       <p>Type.</p>
   *
   */
  Type: JoinType | string | undefined;
}

export namespace JoinInstruction {
  export function isa(o: any): o is JoinInstruction {
    return _smithy.isa(o, "JoinInstruction");
  }
}

/**
 *
 * 		       <p>A limit is exceeded.</p>
 *
 */
export interface LimitExceededException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "LimitExceededException";
  name: "LimitExceededException";
  $fault: "client";
  Message?: string;
  /**
   *
   * 		       <p>The AWS request ID for this request.</p>
   *
   */
  RequestId?: string;

  /**
   *
   * 		       <p>Limit exceeded.</p>
   *
   */
  ResourceType?: ExceptionResourceType | string;
}

export namespace LimitExceededException {
  export function isa(o: any): o is LimitExceededException {
    return _smithy.isa(o, "LimitExceededException");
  }
}

export interface ListDashboardVersionsRequest {
  __type?: "ListDashboardVersionsRequest";
  /**
   *
   * 		       <p>AWS account ID that contains the dashboard you are listing.</p>
   *
   */
  AwsAccountId: string | undefined;

  /**
   *
   * 		       <p>The ID for the dashboard.</p>
   *
   */
  DashboardId: string | undefined;

  /**
   *
   * 		       <p>The maximum number of results to be returned per request.</p>
   *
   */
  MaxResults?: number;

  /**
   *
   * 		       <p>The token for the next set of results, or null if there are no more results.</p>
   *
   */
  NextToken?: string;
}

export namespace ListDashboardVersionsRequest {
  export function isa(o: any): o is ListDashboardVersionsRequest {
    return _smithy.isa(o, "ListDashboardVersionsRequest");
  }
}

export interface ListDashboardVersionsResponse extends $MetadataBearer {
  __type?: "ListDashboardVersionsResponse";
  /**
   *
   * 		       <p>A structure that contains information about each version of the dashboard.</p>
   *
   */
  DashboardVersionSummaryList?: Array<DashboardVersionSummary>;

  /**
   *
   * 		       <p>The token for the next set of results, or null if there are no more results.</p>
   *
   */
  NextToken?: string;

  /**
   *
   * 		       <p>The AWS request ID for this operation.</p>
   *
   */
  RequestId?: string;
}

export namespace ListDashboardVersionsResponse {
  export function isa(o: any): o is ListDashboardVersionsResponse {
    return _smithy.isa(o, "ListDashboardVersionsResponse");
  }
}

export interface ListDashboardsRequest {
  __type?: "ListDashboardsRequest";
  /**
   *
   * 		       <p>AWS account ID that contains the dashboards you are listing.</p>
   *
   */
  AwsAccountId: string | undefined;

  /**
   *
   * 		       <p>The maximum number of results to be returned per request.</p>
   *
   */
  MaxResults?: number;

  /**
   *
   * 		       <p>The token for the next set of results, or null if there are no more results.</p>
   *
   */
  NextToken?: string;
}

export namespace ListDashboardsRequest {
  export function isa(o: any): o is ListDashboardsRequest {
    return _smithy.isa(o, "ListDashboardsRequest");
  }
}

export interface ListDashboardsResponse extends $MetadataBearer {
  __type?: "ListDashboardsResponse";
  /**
   *
   * 		       <p>A structure that contains all of the dashboards shared with the user. Provides basic information about the dashboards.</p>
   *
   */
  DashboardSummaryList?: Array<DashboardSummary>;

  /**
   *
   * 		       <p>The token for the next set of results, or null if there are no more results.</p>
   *
   */
  NextToken?: string;

  /**
   *
   * 		       <p>The AWS request ID for this operation.</p>
   *
   */
  RequestId?: string;
}

export namespace ListDashboardsResponse {
  export function isa(o: any): o is ListDashboardsResponse {
    return _smithy.isa(o, "ListDashboardsResponse");
  }
}

export interface ListDataSetsRequest {
  __type?: "ListDataSetsRequest";
  /**
   *
   * 		       <p>The AWS Account ID.</p>
   *
   */
  AwsAccountId: string | undefined;

  /**
   *
   * 		       <p>The maximum number of results to be returned per request.</p>
   *
   */
  MaxResults?: number;

  /**
   *
   * 		       <p>The token for the next set of results, or null if there are no more results.</p>
   *
   */
  NextToken?: string;
}

export namespace ListDataSetsRequest {
  export function isa(o: any): o is ListDataSetsRequest {
    return _smithy.isa(o, "ListDataSetsRequest");
  }
}

export interface ListDataSetsResponse extends $MetadataBearer {
  __type?: "ListDataSetsResponse";
  /**
   *
   * 		       <p>The list of dataset summaries.</p>
   *
   */
  DataSetSummaries?: Array<DataSetSummary>;

  /**
   *
   * 		       <p>The token for the next set of results, or null if there are no more results.</p>
   *
   */
  NextToken?: string;

  /**
   *
   * 		       <p>The AWS request ID for this operation.</p>
   *
   */
  RequestId?: string;
}

export namespace ListDataSetsResponse {
  export function isa(o: any): o is ListDataSetsResponse {
    return _smithy.isa(o, "ListDataSetsResponse");
  }
}

export interface ListDataSourcesRequest {
  __type?: "ListDataSourcesRequest";
  /**
   *
   * 		       <p>The AWS account ID.</p>
   *
   */
  AwsAccountId: string | undefined;

  /**
   *
   * 		       <p>The maximum number of results to be returned per request.</p>
   *
   */
  MaxResults?: number;

  /**
   *
   * 		       <p>The token for the next set of results, or null if there are no more results.</p>
   *
   */
  NextToken?: string;
}

export namespace ListDataSourcesRequest {
  export function isa(o: any): o is ListDataSourcesRequest {
    return _smithy.isa(o, "ListDataSourcesRequest");
  }
}

export interface ListDataSourcesResponse extends $MetadataBearer {
  __type?: "ListDataSourcesResponse";
  /**
   *
   * 		       <p>A list of data sources.</p>
   *
   */
  DataSources?: Array<DataSource>;

  /**
   *
   * 		       <p>The token for the next set of results, or null if there are no more results.</p>
   *
   */
  NextToken?: string;

  /**
   *
   * 		       <p>The AWS request ID for this operation.</p>
   *
   */
  RequestId?: string;
}

export namespace ListDataSourcesResponse {
  export function isa(o: any): o is ListDataSourcesResponse {
    return _smithy.isa(o, "ListDataSourcesResponse");
  }
}

export interface ListGroupMembershipsRequest {
  __type?: "ListGroupMembershipsRequest";
  /**
   *
   * 		       <p>The ID for the AWS account that the group is in. Currently, you use the ID for the AWS
   * 			account that contains your Amazon QuickSight account.</p>
   *
   */
  AwsAccountId: string | undefined;

  /**
   *
   * 		       <p>The name of the group that you want to see a membership list of.</p>
   *
   */
  GroupName: string | undefined;

  /**
   *
   * 		       <p>The maximum number of results to return from this request.</p>
   *
   */
  MaxResults?: number;

  /**
   *
   * 		       <p>The namespace. Currently, you should set this to <code>default</code>.</p>
   *
   */
  Namespace: string | undefined;

  /**
   *
   * 		       <p>A pagination token that can be used in a subsequent request.</p>
   *
   */
  NextToken?: string;
}

export namespace ListGroupMembershipsRequest {
  export function isa(o: any): o is ListGroupMembershipsRequest {
    return _smithy.isa(o, "ListGroupMembershipsRequest");
  }
}

export interface ListGroupMembershipsResponse extends $MetadataBearer {
  __type?: "ListGroupMembershipsResponse";
  /**
   *
   * 		       <p>The list of the members of the group.</p>
   *
   */
  GroupMemberList?: Array<GroupMember>;

  /**
   *
   * 		       <p>A pagination token that can be used in a subsequent request.</p>
   *
   */
  NextToken?: string;

  /**
   *
   * 		       <p>The AWS request ID for this operation.</p>
   *
   */
  RequestId?: string;
}

export namespace ListGroupMembershipsResponse {
  export function isa(o: any): o is ListGroupMembershipsResponse {
    return _smithy.isa(o, "ListGroupMembershipsResponse");
  }
}

export interface ListGroupsRequest {
  __type?: "ListGroupsRequest";
  /**
   *
   * 		       <p>The ID for the AWS account that the group is in. Currently, you use the ID for the AWS
   * 			account that contains your Amazon QuickSight account.</p>
   *
   */
  AwsAccountId: string | undefined;

  /**
   *
   * 		       <p>The maximum number of results to return.</p>
   *
   */
  MaxResults?: number;

  /**
   *
   * 		       <p>The namespace. Currently, you should set this to <code>default</code>.</p>
   *
   */
  Namespace: string | undefined;

  /**
   *
   * 		       <p>A pagination token that can be used in a subsequent request.</p>
   *
   */
  NextToken?: string;
}

export namespace ListGroupsRequest {
  export function isa(o: any): o is ListGroupsRequest {
    return _smithy.isa(o, "ListGroupsRequest");
  }
}

export interface ListGroupsResponse extends $MetadataBearer {
  __type?: "ListGroupsResponse";
  /**
   *
   * 		       <p>The list of the groups.</p>
   *
   */
  GroupList?: Array<Group>;

  /**
   *
   * 		       <p>A pagination token that can be used in a subsequent request.</p>
   *
   */
  NextToken?: string;

  /**
   *
   * 		       <p>The AWS request ID for this operation.</p>
   *
   */
  RequestId?: string;
}

export namespace ListGroupsResponse {
  export function isa(o: any): o is ListGroupsResponse {
    return _smithy.isa(o, "ListGroupsResponse");
  }
}

export interface ListIAMPolicyAssignmentsForUserRequest {
  __type?: "ListIAMPolicyAssignmentsForUserRequest";
  /**
   *
   * 		       <p>The AWS account ID that contains the assignment.</p>
   *
   */
  AwsAccountId: string | undefined;

  /**
   *
   * 		       <p>The maximum number of results to be returned per request.</p>
   *
   */
  MaxResults?: number;

  /**
   *
   * 		       <p>The namespace of the assignment.</p>
   *
   */
  Namespace: string | undefined;

  /**
   *
   * 		       <p>The token for the next set of results, or null if there are no more results.</p>
   *
   */
  NextToken?: string;

  /**
   *
   * 		       <p>The name of the user.</p>
   *
   */
  UserName: string | undefined;
}

export namespace ListIAMPolicyAssignmentsForUserRequest {
  export function isa(o: any): o is ListIAMPolicyAssignmentsForUserRequest {
    return _smithy.isa(o, "ListIAMPolicyAssignmentsForUserRequest");
  }
}

export interface ListIAMPolicyAssignmentsForUserResponse
  extends $MetadataBearer {
  __type?: "ListIAMPolicyAssignmentsForUserResponse";
  /**
   *
   * 		       <p>Active assignments for this user.</p>
   *
   */
  ActiveAssignments?: Array<ActiveIAMPolicyAssignment>;

  /**
   *
   * 		       <p>The token for the next set of results, or null if there are no more results.</p>
   *
   */
  NextToken?: string;

  /**
   *
   * 		       <p>The AWS request ID for this operation.</p>
   *
   */
  RequestId?: string;
}

export namespace ListIAMPolicyAssignmentsForUserResponse {
  export function isa(o: any): o is ListIAMPolicyAssignmentsForUserResponse {
    return _smithy.isa(o, "ListIAMPolicyAssignmentsForUserResponse");
  }
}

export interface ListIAMPolicyAssignmentsRequest {
  __type?: "ListIAMPolicyAssignmentsRequest";
  /**
   *
   * 		       <p>The status of the assignment.</p>
   *
   */
  AssignmentStatus?: AssignmentStatus | string;

  /**
   *
   * 		       <p>The AWS account ID that contains this IAM policy assignment.</p>
   *
   */
  AwsAccountId: string | undefined;

  /**
   *
   * 		       <p>The maximum number of results to be returned per request.</p>
   *
   */
  MaxResults?: number;

  /**
   *
   * 		       <p>The namespace for this assignment.</p>
   *
   */
  Namespace: string | undefined;

  /**
   *
   * 		       <p>The token for the next set of results, or null if there are no more results.</p>
   *
   */
  NextToken?: string;
}

export namespace ListIAMPolicyAssignmentsRequest {
  export function isa(o: any): o is ListIAMPolicyAssignmentsRequest {
    return _smithy.isa(o, "ListIAMPolicyAssignmentsRequest");
  }
}

export interface ListIAMPolicyAssignmentsResponse extends $MetadataBearer {
  __type?: "ListIAMPolicyAssignmentsResponse";
  /**
   *
   * 		       <p>Information describing the IAM policy assignments.</p>
   *
   */
  IAMPolicyAssignments?: Array<IAMPolicyAssignmentSummary>;

  /**
   *
   * 		       <p>The token for the next set of results, or null if there are no more results.</p>
   *
   */
  NextToken?: string;

  /**
   *
   * 		       <p>The AWS request ID for this operation.</p>
   *
   */
  RequestId?: string;
}

export namespace ListIAMPolicyAssignmentsResponse {
  export function isa(o: any): o is ListIAMPolicyAssignmentsResponse {
    return _smithy.isa(o, "ListIAMPolicyAssignmentsResponse");
  }
}

export interface ListIngestionsRequest {
  __type?: "ListIngestionsRequest";
  /**
   *
   * 		       <p>The AWS account ID.</p>
   *
   */
  AwsAccountId: string | undefined;

  /**
   *
   * 		       <p>The ID of the dataset used in the ingestion.</p>
   *
   */
  DataSetId: string | undefined;

  /**
   *
   * 		       <p>The maximum number of results to be returned per request.</p>
   *
   */
  MaxResults?: number;

  /**
   *
   * 		       <p>The token for the next set of results, or null if there are no more results.</p>
   *
   */
  NextToken?: string;
}

export namespace ListIngestionsRequest {
  export function isa(o: any): o is ListIngestionsRequest {
    return _smithy.isa(o, "ListIngestionsRequest");
  }
}

export interface ListIngestionsResponse extends $MetadataBearer {
  __type?: "ListIngestionsResponse";
  /**
   *
   * 		       <p>A list of the ingestions.</p>
   *
   */
  Ingestions?: Array<Ingestion>;

  /**
   *
   * 		       <p>The token for the next set of results, or null if there are no more results.</p>
   *
   */
  NextToken?: string;

  /**
   *
   * 		       <p>The AWS request ID for this operation.</p>
   *
   */
  RequestId?: string;
}

export namespace ListIngestionsResponse {
  export function isa(o: any): o is ListIngestionsResponse {
    return _smithy.isa(o, "ListIngestionsResponse");
  }
}

export interface ListTagsForResourceRequest {
  __type?: "ListTagsForResourceRequest";
  /**
   *
   * 		       <p>The Amazon Resource Name (ARN) of the resource that you want a list of tags for.</p>
   *
   */
  ResourceArn: string | undefined;
}

export namespace ListTagsForResourceRequest {
  export function isa(o: any): o is ListTagsForResourceRequest {
    return _smithy.isa(o, "ListTagsForResourceRequest");
  }
}

export interface ListTagsForResourceResponse extends $MetadataBearer {
  __type?: "ListTagsForResourceResponse";
  /**
   *
   * 		       <p>The AWS request ID for this operation.</p>
   *
   */
  RequestId?: string;

  /**
   *
   * 		       <p>Contains a map of the key-value pairs for the resource tag or tags assigned to the
   * 			resource.</p>
   *
   */
  Tags?: Array<Tag>;
}

export namespace ListTagsForResourceResponse {
  export function isa(o: any): o is ListTagsForResourceResponse {
    return _smithy.isa(o, "ListTagsForResourceResponse");
  }
}

export interface ListTemplateAliasesRequest {
  __type?: "ListTemplateAliasesRequest";
  /**
   *
   * 		       <p>AWS account ID that contains the template aliases you are listing.</p>
   *
   */
  AwsAccountId: string | undefined;

  /**
   *
   * 		       <p>The maximum number of results to be returned per request.</p>
   *
   */
  MaxResults?: number;

  /**
   *
   * 		       <p>The token for the next set of results, or null if there are no more results.</p>
   *
   */
  NextToken?: string;

  /**
   *
   * 		       <p>The ID for the template.</p>
   *
   */
  TemplateId: string | undefined;
}

export namespace ListTemplateAliasesRequest {
  export function isa(o: any): o is ListTemplateAliasesRequest {
    return _smithy.isa(o, "ListTemplateAliasesRequest");
  }
}

export interface ListTemplateAliasesResponse extends $MetadataBearer {
  __type?: "ListTemplateAliasesResponse";
  /**
   *
   * 		       <p>The token for the next set of results, or null if there are no more results.</p>
   *
   */
  NextToken?: string;

  /**
   *
   * 		       <p>The AWS request ID for this operation.</p>
   *
   */
  RequestId?: string;

  /**
   *
   * 		       <p>A structure containing the list of the template's aliases.</p>
   *
   */
  TemplateAliasList?: Array<TemplateAlias>;
}

export namespace ListTemplateAliasesResponse {
  export function isa(o: any): o is ListTemplateAliasesResponse {
    return _smithy.isa(o, "ListTemplateAliasesResponse");
  }
}

export interface ListTemplateVersionsRequest {
  __type?: "ListTemplateVersionsRequest";
  /**
   *
   * 		       <p>AWS account ID that contains the templates you are listing.</p>
   *
   */
  AwsAccountId: string | undefined;

  /**
   *
   * 		       <p>The maximum number of results to be returned per request.</p>
   *
   */
  MaxResults?: number;

  /**
   *
   * 		       <p>The token for the next set of results, or null if there are no more results.</p>
   *
   */
  NextToken?: string;

  /**
   *
   * 		       <p>The ID for the template.</p>
   *
   */
  TemplateId: string | undefined;
}

export namespace ListTemplateVersionsRequest {
  export function isa(o: any): o is ListTemplateVersionsRequest {
    return _smithy.isa(o, "ListTemplateVersionsRequest");
  }
}

export interface ListTemplateVersionsResponse extends $MetadataBearer {
  __type?: "ListTemplateVersionsResponse";
  /**
   *
   * 		       <p>The token for the next set of results, or null if there are no more results.</p>
   *
   */
  NextToken?: string;

  /**
   *
   * 		       <p>The AWS request ID for this operation.</p>
   *
   */
  RequestId?: string;

  /**
   *
   * 		       <p>A structure containing a list of all the versions of the specified template.</p>
   *
   */
  TemplateVersionSummaryList?: Array<TemplateVersionSummary>;
}

export namespace ListTemplateVersionsResponse {
  export function isa(o: any): o is ListTemplateVersionsResponse {
    return _smithy.isa(o, "ListTemplateVersionsResponse");
  }
}

export interface ListTemplatesRequest {
  __type?: "ListTemplatesRequest";
  /**
   *
   * 		       <p>AWS account ID that contains the templates you are listing.</p>
   *
   */
  AwsAccountId: string | undefined;

  /**
   *
   * 		       <p>The maximum number of results to be returned per request.</p>
   *
   */
  MaxResults?: number;

  /**
   *
   * 		       <p>The token for the next set of results, or null if there are no more results.</p>
   *
   */
  NextToken?: string;
}

export namespace ListTemplatesRequest {
  export function isa(o: any): o is ListTemplatesRequest {
    return _smithy.isa(o, "ListTemplatesRequest");
  }
}

export interface ListTemplatesResponse extends $MetadataBearer {
  __type?: "ListTemplatesResponse";
  /**
   *
   * 		       <p>The token for the next set of results, or null if there are no more results.</p>
   *
   */
  NextToken?: string;

  /**
   *
   * 		       <p>The AWS request ID for this operation.</p>
   *
   */
  RequestId?: string;

  /**
   *
   * 		       <p>A structure containing information about the templates in the list.</p>
   *
   */
  TemplateSummaryList?: Array<TemplateSummary>;
}

export namespace ListTemplatesResponse {
  export function isa(o: any): o is ListTemplatesResponse {
    return _smithy.isa(o, "ListTemplatesResponse");
  }
}

export interface ListUserGroupsRequest {
  __type?: "ListUserGroupsRequest";
  /**
   *
   * 		       <p>The AWS Account ID that the user is in. Currently, you use the ID for the AWS account
   * 			that contains your Amazon QuickSight account.</p>
   *
   */
  AwsAccountId: string | undefined;

  /**
   *
   * 		       <p>The maximum number of results to return from this request.</p>
   *
   */
  MaxResults?: number;

  /**
   *
   * 		       <p>The namespace. Currently, you should set this to <code>default</code>.</p>
   *
   */
  Namespace: string | undefined;

  /**
   *
   * 		       <p>A pagination token that can be used in a subsequent request.</p>
   *
   */
  NextToken?: string;

  /**
   *
   * 		       <p>The Amazon QuickSight user name that you want to list group memberships for.</p>
   *
   */
  UserName: string | undefined;
}

export namespace ListUserGroupsRequest {
  export function isa(o: any): o is ListUserGroupsRequest {
    return _smithy.isa(o, "ListUserGroupsRequest");
  }
}

export interface ListUserGroupsResponse extends $MetadataBearer {
  __type?: "ListUserGroupsResponse";
  /**
   *
   * 		       <p>The list of groups the user is a member of.</p>
   *
   */
  GroupList?: Array<Group>;

  /**
   *
   * 		       <p>A pagination token that can be used in a subsequent request.</p>
   *
   */
  NextToken?: string;

  /**
   *
   * 		       <p>The AWS request ID for this operation.</p>
   *
   */
  RequestId?: string;
}

export namespace ListUserGroupsResponse {
  export function isa(o: any): o is ListUserGroupsResponse {
    return _smithy.isa(o, "ListUserGroupsResponse");
  }
}

export interface ListUsersRequest {
  __type?: "ListUsersRequest";
  /**
   *
   * 		       <p>The ID for the AWS account that the user is in. Currently, you use the ID for the AWS
   * 			account that contains your Amazon QuickSight account.</p>
   *
   */
  AwsAccountId: string | undefined;

  /**
   *
   * 		       <p>The maximum number of results to return from this request.</p>
   *
   */
  MaxResults?: number;

  /**
   *
   * 		       <p>The namespace. Currently, you should set this to <code>default</code>.</p>
   *
   */
  Namespace: string | undefined;

  /**
   *
   * 		       <p>A pagination token that can be used in a subsequent request.</p>
   *
   */
  NextToken?: string;
}

export namespace ListUsersRequest {
  export function isa(o: any): o is ListUsersRequest {
    return _smithy.isa(o, "ListUsersRequest");
  }
}

export interface ListUsersResponse extends $MetadataBearer {
  __type?: "ListUsersResponse";
  /**
   *
   * 		       <p>A pagination token that can be used in a subsequent request.</p>
   *
   */
  NextToken?: string;

  /**
   *
   * 		       <p>The AWS request ID for this operation.</p>
   *
   */
  RequestId?: string;

  /**
   *
   * 		       <p>The list of users.</p>
   *
   */
  UserList?: Array<User>;
}

export namespace ListUsersResponse {
  export function isa(o: any): o is ListUsersResponse {
    return _smithy.isa(o, "ListUsersResponse");
  }
}

/**
 *
 * 		       <p>A unit that joins and data transformations operate on. A logical table has a source,
 * 			which can be either a physical table or result of a join. When it points to a physical
 * 			table, a logical table acts as a mutable copy of that table through transform
 * 			operations.</p>
 *
 */
export interface LogicalTable {
  __type?: "LogicalTable";
  /**
   *
   * 		       <p>A display name for the logical table.</p>
   *
   */
  Alias: string | undefined;

  /**
   *
   * 		       <p>Transform operations that act on this logical table.</p>
   *
   */
  DataTransforms?: Array<TransformOperation>;

  /**
   *
   * 		       <p>Source of this logical table.</p>
   *
   */
  Source: LogicalTableSource | undefined;
}

export namespace LogicalTable {
  export function isa(o: any): o is LogicalTable {
    return _smithy.isa(o, "LogicalTable");
  }
}

/**
 *
 * 		       <p>Information on the source of a logical table. This is a variant type structure. No more
 * 			than one of the attributes should be non-null for this structure to be valid.</p>
 *
 */
export interface LogicalTableSource {
  __type?: "LogicalTableSource";
  /**
   *
   * 		       <p>Specifies the result of a join of two logical tables.</p>
   *
   */
  JoinInstruction?: JoinInstruction;

  /**
   *
   * 		       <p>Physical table ID.</p>
   *
   */
  PhysicalTableId?: string;
}

export namespace LogicalTableSource {
  export function isa(o: any): o is LogicalTableSource {
    return _smithy.isa(o, "LogicalTableSource");
  }
}

/**
 *
 * 		       <p>Amazon S3 manifest file location.</p>
 *
 */
export interface ManifestFileLocation {
  __type?: "ManifestFileLocation";
  /**
   *
   * 		       <p>Amazon S3 bucket.</p>
   *
   */
  Bucket: string | undefined;

  /**
   *
   * 		       <p>Amazon S3 key that identifies an object.</p>
   *
   */
  Key: string | undefined;
}

export namespace ManifestFileLocation {
  export function isa(o: any): o is ManifestFileLocation {
    return _smithy.isa(o, "ManifestFileLocation");
  }
}

/**
 *
 * 		       <p>MariaDB parameters.</p>
 *
 */
export interface MariaDbParameters {
  __type?: "MariaDbParameters";
  /**
   *
   * 		       <p>Database.</p>
   *
   */
  Database: string | undefined;

  /**
   *
   * 		       <p>Host.</p>
   *
   */
  Host: string | undefined;

  /**
   *
   * 		       <p>Port.</p>
   *
   */
  Port: number | undefined;
}

export namespace MariaDbParameters {
  export function isa(o: any): o is MariaDbParameters {
    return _smithy.isa(o, "MariaDbParameters");
  }
}

/**
 *
 * 		       <p>MySQL parameters.</p>
 *
 */
export interface MySqlParameters {
  __type?: "MySqlParameters";
  /**
   *
   * 		       <p>Database.</p>
   *
   */
  Database: string | undefined;

  /**
   *
   * 		       <p>Host.</p>
   *
   */
  Host: string | undefined;

  /**
   *
   * 		       <p>Port.</p>
   *
   */
  Port: number | undefined;
}

export namespace MySqlParameters {
  export function isa(o: any): o is MySqlParameters {
    return _smithy.isa(o, "MySqlParameters");
  }
}

/**
 *
 * 		       <p>Output column.</p>
 *
 */
export interface OutputColumn {
  __type?: "OutputColumn";
  /**
   *
   * 		       <p>A display name for the dataset.</p>
   *
   */
  Name?: string;

  /**
   *
   * 		       <p>Type.</p>
   *
   */
  Type?: ColumnDataType | string;
}

export namespace OutputColumn {
  export function isa(o: any): o is OutputColumn {
    return _smithy.isa(o, "OutputColumn");
  }
}

/**
 *
 * 		       <p>Parameters.</p>
 *
 */
export interface _Parameters {
  __type?: "Parameters";
  /**
   *
   * 		       <p>DateTime parameters.</p>
   *
   */
  DateTimeParameters?: Array<DateTimeParameter>;

  /**
   *
   * 		       <p>Decimal parameters.</p>
   *
   */
  DecimalParameters?: Array<DecimalParameter>;

  /**
   *
   * 		       <p>Integer parameters.</p>
   *
   */
  IntegerParameters?: Array<IntegerParameter>;

  /**
   *
   * 		       <p>String parameters.</p>
   *
   */
  StringParameters?: Array<StringParameter>;
}

export namespace _Parameters {
  export function isa(o: any): o is _Parameters {
    return _smithy.isa(o, "Parameters");
  }
}

/**
 *
 * 		       <p>A view of a data source. Contains information on the shape of the data in the underlying
 * 			source. This is a variant type structure. No more than one of the attributes can be
 * 			non-null for this structure to be valid.</p>
 *
 */
export interface PhysicalTable {
  __type?: "PhysicalTable";
  /**
   *
   * 		       <p>A physical table type built from the results of the custom SQL query.</p>
   *
   */
  CustomSql?: CustomSql;

  /**
   *
   * 		       <p>A physical table type for relational data sources.</p>
   *
   */
  RelationalTable?: RelationalTable;

  /**
   *
   * 		       <p>A physical table type for as S3 data source.</p>
   *
   */
  S3Source?: S3Source;
}

export namespace PhysicalTable {
  export function isa(o: any): o is PhysicalTable {
    return _smithy.isa(o, "PhysicalTable");
  }
}

/**
 *
 * 		       <p>PostgreSQL parameters.</p>
 *
 */
export interface PostgreSqlParameters {
  __type?: "PostgreSqlParameters";
  /**
   *
   * 		       <p>Database.</p>
   *
   */
  Database: string | undefined;

  /**
   *
   * 		       <p>Host.</p>
   *
   */
  Host: string | undefined;

  /**
   *
   * 		       <p>Port.</p>
   *
   */
  Port: number | undefined;
}

export namespace PostgreSqlParameters {
  export function isa(o: any): o is PostgreSqlParameters {
    return _smithy.isa(o, "PostgreSqlParameters");
  }
}

/**
 *
 * 		       <p>One or more preconditions aren't met.</p>
 *
 */
export interface PreconditionNotMetException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "PreconditionNotMetException";
  name: "PreconditionNotMetException";
  $fault: "client";
  Message?: string;
  /**
   *
   * 		       <p>The AWS request ID for this request.</p>
   *
   */
  RequestId?: string;
}

export namespace PreconditionNotMetException {
  export function isa(o: any): o is PreconditionNotMetException {
    return _smithy.isa(o, "PreconditionNotMetException");
  }
}

/**
 *
 * 		       <p>Presto parameters.</p>
 *
 */
export interface PrestoParameters {
  __type?: "PrestoParameters";
  /**
   *
   * 		       <p>Catalog.</p>
   *
   */
  Catalog: string | undefined;

  /**
   *
   * 		       <p>Host.</p>
   *
   */
  Host: string | undefined;

  /**
   *
   * 		       <p>Port.</p>
   *
   */
  Port: number | undefined;
}

export namespace PrestoParameters {
  export function isa(o: any): o is PrestoParameters {
    return _smithy.isa(o, "PrestoParameters");
  }
}

/**
 *
 * 		       <p>A transform operation that projects columns. Operations that come after a projection can
 * 			only refer to projected columns.</p>
 *
 */
export interface ProjectOperation {
  __type?: "ProjectOperation";
  /**
   *
   * 		       <p>Projected columns.</p>
   *
   */
  ProjectedColumns: Array<string> | undefined;
}

export namespace ProjectOperation {
  export function isa(o: any): o is ProjectOperation {
    return _smithy.isa(o, "ProjectOperation");
  }
}

/**
 *
 * 		       <p>Information on queued dataset SPICE ingestion.</p>
 *
 */
export interface QueueInfo {
  __type?: "QueueInfo";
  /**
   *
   * 		       <p>The ID of the ongoing ingestion. The queued ingestion is waiting for the ongoing
   * 			ingestion to complete.</p>
   *
   */
  QueuedIngestion: string | undefined;

  /**
   *
   * 		       <p>The ID of the queued ingestion.</p>
   *
   */
  WaitingOnIngestion: string | undefined;
}

export namespace QueueInfo {
  export function isa(o: any): o is QueueInfo {
    return _smithy.isa(o, "QueueInfo");
  }
}

/**
 *
 * 		       <p>The user is not found. This error can happen in any operation that requires finding a
 * 			user based on a provided user name, such as <code>DeleteUser</code>,
 * 			<code>DescribeUser</code>, and so on.</p>
 *
 */
export interface QuickSightUserNotFoundException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "QuickSightUserNotFoundException";
  name: "QuickSightUserNotFoundException";
  $fault: "client";
  Message?: string;
  /**
   *
   * 		       <p>The AWS request ID for this request.</p>
   *
   */
  RequestId?: string;
}

export namespace QuickSightUserNotFoundException {
  export function isa(o: any): o is QuickSightUserNotFoundException {
    return _smithy.isa(o, "QuickSightUserNotFoundException");
  }
}

/**
 *
 * 		       <p>RDS parameters.</p>
 *
 */
export interface RdsParameters {
  __type?: "RdsParameters";
  /**
   *
   * 		       <p>Database.</p>
   *
   */
  Database: string | undefined;

  /**
   *
   * 		       <p>Instance ID.</p>
   *
   */
  InstanceId: string | undefined;
}

export namespace RdsParameters {
  export function isa(o: any): o is RdsParameters {
    return _smithy.isa(o, "RdsParameters");
  }
}

/**
 *
 * 		       <p>Redshift parameters. The <code>ClusterId</code> field can be blank if <code>Host</code>
 * 			and <code>Port</code> are both set, and the other way around.</p>
 *
 */
export interface RedshiftParameters {
  __type?: "RedshiftParameters";
  /**
   *
   * 		       <p>Cluster ID. This can be blank if the <code>Host</code> and <code>Port</code> are
   * 			provided.</p>
   *
   */
  ClusterId?: string;

  /**
   *
   * 		       <p>Database.</p>
   *
   */
  Database: string | undefined;

  /**
   *
   * 		       <p>Host. This can be blank if the <code>ClusterId</code> is provided.</p>
   *
   */
  Host?: string;

  /**
   *
   * 		       <p>Port. This can be blank if the <code>ClusterId</code> is provided.</p>
   *
   */
  Port?: number;
}

export namespace RedshiftParameters {
  export function isa(o: any): o is RedshiftParameters {
    return _smithy.isa(o, "RedshiftParameters");
  }
}

export interface RegisterUserRequest {
  __type?: "RegisterUserRequest";
  /**
   *
   * 		       <p>The ID for the AWS account that the user is in. Currently, you use the ID for the AWS
   * 			account that contains your Amazon QuickSight account.</p>
   *
   */
  AwsAccountId: string | undefined;

  /**
   *
   * 		       <p>The email address of the user that you want to register.</p>
   *
   */
  Email: string | undefined;

  /**
   *
   * 		       <p>The ARN of the IAM user or role that you are registering with Amazon QuickSight. </p>
   *
   */
  IamArn?: string;

  /**
   *
   * 		       <p>Amazon QuickSight supports several ways of managing the identity of users. This
   * 			parameter accepts two values:</p>
   * 		       <ul>
   *             <li>
   * 				           <p>
   *                   <code>IAM</code>: A user whose identity maps to an existing IAM user or role.
   * 				</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>QUICKSIGHT</code>: A user whose identity is owned and managed internally by
   * 					Amazon QuickSight. </p>
   * 			         </li>
   *          </ul>
   *
   */
  IdentityType: IdentityType | string | undefined;

  /**
   *
   * 		       <p>The namespace. Currently, you should set this to <code>default</code>.</p>
   *
   */
  Namespace: string | undefined;

  /**
   *
   * 		       <p>You need to use this parameter only when you register one or more users using an assumed
   * 			IAM role. You don't need to provide the session name for other scenarios, for example when
   * 			you are registering an IAM user or an Amazon QuickSight user. You can register multiple
   * 			users using the same IAM role if each user has a different session name. For more
   * 			information on assuming IAM roles, see <a href="https://docs.aws.example.com/cli/latest/reference/sts/assume-role.html">
   *                <code>assume-role</code>
   *             </a> in the <i>AWS CLI Reference.</i>
   *          </p>
   *
   */
  SessionName?: string;

  /**
   *
   * 		       <p>The Amazon QuickSight user name that you want to create for the user you are
   * 			registering.</p>
   *
   */
  UserName?: string;

  /**
   *
   * 		       <p>The Amazon QuickSight role for the user. The user role can be one of the
   * 			following:</p>
   * 		       <ul>
   *             <li>
   * 				           <p>
   *                   <code>READER</code>: A user who has read-only access to dashboards.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>AUTHOR</code>: A user who can create data sources, datasets, analyses, and
   * 					dashboards.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>ADMIN</code>: A user who is an author, who can also manage Amazon QuickSight
   * 					settings.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>RESTRICTED_READER</code>: This role isn't currently available for
   * 					use.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>RESTRICTED_AUTHOR</code>: This role isn't currently available for
   * 					use.</p>
   * 			         </li>
   *          </ul>
   *
   */
  UserRole: UserRole | string | undefined;
}

export namespace RegisterUserRequest {
  export function isa(o: any): o is RegisterUserRequest {
    return _smithy.isa(o, "RegisterUserRequest");
  }
}

export interface RegisterUserResponse extends $MetadataBearer {
  __type?: "RegisterUserResponse";
  /**
   *
   * 		       <p>The AWS request ID for this operation.</p>
   *
   */
  RequestId?: string;

  /**
   *
   * 		       <p>The user name.</p>
   *
   */
  User?: User;

  /**
   *
   * 		       <p>The URL the user visits to complete registration and provide a password. This is
   * 			returned only for users with an identity type of <code>QUICKSIGHT</code>.</p>
   *
   */
  UserInvitationUrl?: string;
}

export namespace RegisterUserResponse {
  export function isa(o: any): o is RegisterUserResponse {
    return _smithy.isa(o, "RegisterUserResponse");
  }
}

/**
 *
 * 		       <p>A physical table type for relational data sources.</p>
 *
 */
export interface RelationalTable {
  __type?: "RelationalTable";
  /**
   *
   * 		       <p>The Amazon Resource Name (ARN) for the data source.</p>
   *
   */
  DataSourceArn: string | undefined;

  /**
   *
   * 		       <p>The column schema of the table.</p>
   *
   */
  InputColumns: Array<InputColumn> | undefined;

  /**
   *
   * 		       <p>Name of the relational table.</p>
   *
   */
  Name: string | undefined;

  /**
   *
   * 		       <p>The schema name. Applies to certain relational database engines.</p>
   *
   */
  Schema?: string;
}

export namespace RelationalTable {
  export function isa(o: any): o is RelationalTable {
    return _smithy.isa(o, "RelationalTable");
  }
}

/**
 *
 * 		       <p>A transform operation that renames a column.</p>
 *
 */
export interface RenameColumnOperation {
  __type?: "RenameColumnOperation";
  /**
   *
   * 		       <p>Name of the column to be renamed.</p>
   *
   */
  ColumnName: string | undefined;

  /**
   *
   * 		       <p>New name for the column.</p>
   *
   */
  NewColumnName: string | undefined;
}

export namespace RenameColumnOperation {
  export function isa(o: any): o is RenameColumnOperation {
    return _smithy.isa(o, "RenameColumnOperation");
  }
}

/**
 *
 * 		       <p>The resource specified already exists. </p>
 *
 */
export interface ResourceExistsException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "ResourceExistsException";
  name: "ResourceExistsException";
  $fault: "client";
  Message?: string;
  /**
   *
   * 		       <p>The AWS request ID for this request.</p>
   *
   */
  RequestId?: string;

  /**
   *
   * 		       <p>The AWS request ID for this request.</p>
   *
   */
  ResourceType?: ExceptionResourceType | string;
}

export namespace ResourceExistsException {
  export function isa(o: any): o is ResourceExistsException {
    return _smithy.isa(o, "ResourceExistsException");
  }
}

/**
 *
 * 		       <p>One or more resources can't be found.</p>
 *
 */
export interface ResourceNotFoundException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "ResourceNotFoundException";
  name: "ResourceNotFoundException";
  $fault: "client";
  Message?: string;
  /**
   *
   * 		       <p>The AWS request ID for this request.</p>
   *
   */
  RequestId?: string;

  /**
   *
   * 		       <p>The AWS request ID for this request.</p>
   *
   */
  ResourceType?: ExceptionResourceType | string;
}

export namespace ResourceNotFoundException {
  export function isa(o: any): o is ResourceNotFoundException {
    return _smithy.isa(o, "ResourceNotFoundException");
  }
}

/**
 *
 * 		       <p>Permission for the resource.</p>
 *
 */
export interface ResourcePermission {
  __type?: "ResourcePermission";
  /**
   *
   * 		       <p>The action to grant or revoke permissions on. For example,
   * 			"quicksight:DescribeDashboard".</p>
   *
   */
  Actions: Array<string> | undefined;

  /**
   *
   * 		       <p>The Amazon Resource Name (ARN) of a QuickSight user or group, or an IAM ARN. If you are
   * 			using cross-account resource sharing, this is the IAM ARN of an account root. Otherwise, it
   * 			is the ARN of a QuickSight user or group. .</p>
   *
   */
  Principal: string | undefined;
}

export namespace ResourcePermission {
  export function isa(o: any): o is ResourcePermission {
    return _smithy.isa(o, "ResourcePermission");
  }
}

/**
 *
 * 		       <p>This resource is currently unavailable.</p>
 *
 */
export interface ResourceUnavailableException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "ResourceUnavailableException";
  name: "ResourceUnavailableException";
  $fault: "server";
  Message?: string;
  /**
   *
   * 		       <p>The AWS request ID for this request.</p>
   *
   */
  RequestId?: string;

  /**
   *
   * 		       <p>The resource type for this request.</p>
   *
   */
  ResourceType?: ExceptionResourceType | string;
}

export namespace ResourceUnavailableException {
  export function isa(o: any): o is ResourceUnavailableException {
    return _smithy.isa(o, "ResourceUnavailableException");
  }
}

/**
 *
 * 		       <p>Information on rows during a data set SPICE ingestion.</p>
 *
 */
export interface RowInfo {
  __type?: "RowInfo";
  /**
   *
   * 		       <p>The number of rows that were not ingested.</p>
   *
   */
  RowsDropped?: number;

  /**
   *
   * 		       <p>The number of rows that were ingested.</p>
   *
   */
  RowsIngested?: number;
}

export namespace RowInfo {
  export function isa(o: any): o is RowInfo {
    return _smithy.isa(o, "RowInfo");
  }
}

/**
 *
 * 		       <p>Row-level security configuration on the dataset.</p>
 *
 */
export interface RowLevelPermissionDataSet {
  __type?: "RowLevelPermissionDataSet";
  /**
   *
   * 		       <p>The Amazon Resource name (ARN) of the permission dataset.</p>
   *
   */
  Arn: string | undefined;

  /**
   *
   * 		       <p>Permission policy.</p>
   *
   */
  PermissionPolicy: RowLevelPermissionPolicy | string | undefined;
}

export namespace RowLevelPermissionDataSet {
  export function isa(o: any): o is RowLevelPermissionDataSet {
    return _smithy.isa(o, "RowLevelPermissionDataSet");
  }
}

/**
 *
 * 		       <p>S3 parameters.</p>
 *
 */
export interface S3Parameters {
  __type?: "S3Parameters";
  /**
   *
   * 		       <p>Location of the Amazon S3 manifest file. This is NULL if the manifest file was uploaded
   * 			in the console.</p>
   *
   */
  ManifestFileLocation: ManifestFileLocation | undefined;
}

export namespace S3Parameters {
  export function isa(o: any): o is S3Parameters {
    return _smithy.isa(o, "S3Parameters");
  }
}

/**
 *
 * 		       <p>A physical table type for as S3 data source.</p>
 *
 */
export interface S3Source {
  __type?: "S3Source";
  /**
   *
   * 		       <p>Data source ARN.</p>
   *
   */
  DataSourceArn: string | undefined;

  /**
   *
   * 		       <p>A physical table type for as S3 data source.</p>
   *
   */
  InputColumns: Array<InputColumn> | undefined;

  /**
   *
   * 		       <p>Information on the S3 source file(s) format.</p>
   *
   */
  UploadSettings?: UploadSettings;
}

export namespace S3Source {
  export function isa(o: any): o is S3Source {
    return _smithy.isa(o, "S3Source");
  }
}

/**
 *
 * 		       <p>ServiceNow parameters.</p>
 *
 */
export interface ServiceNowParameters {
  __type?: "ServiceNowParameters";
  /**
   *
   * 		       <p>URL of the base site.</p>
   *
   */
  SiteBaseUrl: string | undefined;
}

export namespace ServiceNowParameters {
  export function isa(o: any): o is ServiceNowParameters {
    return _smithy.isa(o, "ServiceNowParameters");
  }
}

/**
 *
 * 		       <p>The number of minutes specified for the lifetime of a session is not valid. The session
 * 			lifetime must be from 15 to 600 minutes.</p>
 *
 */
export interface SessionLifetimeInMinutesInvalidException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "SessionLifetimeInMinutesInvalidException";
  name: "SessionLifetimeInMinutesInvalidException";
  $fault: "client";
  Message?: string;
  /**
   *
   * 		       <p>The AWS request ID for this request.</p>
   *
   */
  RequestId?: string;
}

export namespace SessionLifetimeInMinutesInvalidException {
  export function isa(o: any): o is SessionLifetimeInMinutesInvalidException {
    return _smithy.isa(o, "SessionLifetimeInMinutesInvalidException");
  }
}

/**
 *
 * 		       <p>Sheet controls option.</p>
 *
 */
export interface SheetControlsOption {
  __type?: "SheetControlsOption";
  /**
   *
   * 		       <p>Visibility state.</p>
   *
   */
  VisibilityState?: DashboardUIState | string;
}

export namespace SheetControlsOption {
  export function isa(o: any): o is SheetControlsOption {
    return _smithy.isa(o, "SheetControlsOption");
  }
}

/**
 *
 * 		       <p>Snowflake parameters.</p>
 *
 */
export interface SnowflakeParameters {
  __type?: "SnowflakeParameters";
  /**
   *
   * 		       <p>Database.</p>
   *
   */
  Database: string | undefined;

  /**
   *
   * 		       <p>Host.</p>
   *
   */
  Host: string | undefined;

  /**
   *
   * 		       <p>Warehouse.</p>
   *
   */
  Warehouse: string | undefined;
}

export namespace SnowflakeParameters {
  export function isa(o: any): o is SnowflakeParameters {
    return _smithy.isa(o, "SnowflakeParameters");
  }
}

/**
 *
 * 		       <p>Spark parameters.</p>
 *
 */
export interface SparkParameters {
  __type?: "SparkParameters";
  /**
   *
   * 		       <p>Host.</p>
   *
   */
  Host: string | undefined;

  /**
   *
   * 		       <p>Port.</p>
   *
   */
  Port: number | undefined;
}

export namespace SparkParameters {
  export function isa(o: any): o is SparkParameters {
    return _smithy.isa(o, "SparkParameters");
  }
}

/**
 *
 * 		       <p>SQL Server parameters.</p>
 *
 */
export interface SqlServerParameters {
  __type?: "SqlServerParameters";
  /**
   *
   * 		       <p>Database.</p>
   *
   */
  Database: string | undefined;

  /**
   *
   * 		       <p>Host.</p>
   *
   */
  Host: string | undefined;

  /**
   *
   * 		       <p>Port.</p>
   *
   */
  Port: number | undefined;
}

export namespace SqlServerParameters {
  export function isa(o: any): o is SqlServerParameters {
    return _smithy.isa(o, "SqlServerParameters");
  }
}

/**
 *
 * 		       <p>Secure Socket Layer (SSL) properties that apply when QuickSight connects to your
 * 			underlying data source.</p>
 *
 */
export interface SslProperties {
  __type?: "SslProperties";
  /**
   *
   * 		       <p>A boolean flag to control whether SSL should be disabled.</p>
   *
   */
  DisableSsl?: boolean;
}

export namespace SslProperties {
  export function isa(o: any): o is SslProperties {
    return _smithy.isa(o, "SslProperties");
  }
}

/**
 *
 * 		       <p>String parameter.</p>
 *
 */
export interface StringParameter {
  __type?: "StringParameter";
  /**
   *
   * 		       <p>A display name for the dataset.</p>
   *
   */
  Name: string | undefined;

  /**
   *
   * 		       <p>Values.</p>
   *
   */
  Values: Array<string> | undefined;
}

export namespace StringParameter {
  export function isa(o: any): o is StringParameter {
    return _smithy.isa(o, "StringParameter");
  }
}

/**
 *
 * 		       <p>The keys of the key-value pairs for the resource tag or tags assigned to the
 * 			resource.</p>
 *
 */
export interface Tag {
  __type?: "Tag";
  /**
   *
   * 		       <p>Tag key.</p>
   *
   */
  Key: string | undefined;

  /**
   *
   * 		       <p>Tag value.</p>
   *
   */
  Value: string | undefined;
}

export namespace Tag {
  export function isa(o: any): o is Tag {
    return _smithy.isa(o, "Tag");
  }
}

/**
 *
 * 		       <p>A transform operation that tags a column with additional information.</p>
 *
 */
export interface TagColumnOperation {
  __type?: "TagColumnOperation";
  /**
   *
   * 		       <p>The column that this operation acts on.</p>
   *
   */
  ColumnName: string | undefined;

  /**
   *
   * 		       <p>The dataset column tag, currently only used for geospatial type tagging. .</p>
   * 		       <note>
   * 			         <p>This is not tags for the AWS tagging feature. .</p>
   * 		       </note>
   *
   */
  Tags: Array<ColumnTag> | undefined;
}

export namespace TagColumnOperation {
  export function isa(o: any): o is TagColumnOperation {
    return _smithy.isa(o, "TagColumnOperation");
  }
}

export interface TagResourceRequest {
  __type?: "TagResourceRequest";
  /**
   *
   * 		       <p>The Amazon Resource Name (ARN) of the resource that you want to tag.</p>
   *
   */
  ResourceArn: string | undefined;

  /**
   *
   * 		       <p>Contains a map of the key-value pairs for the resource tag or tags assigned to the resource.</p>
   *
   */
  Tags: Array<Tag> | undefined;
}

export namespace TagResourceRequest {
  export function isa(o: any): o is TagResourceRequest {
    return _smithy.isa(o, "TagResourceRequest");
  }
}

export interface TagResourceResponse extends $MetadataBearer {
  __type?: "TagResourceResponse";
  /**
   *
   * 		       <p>The AWS request ID for this operation.</p>
   *
   */
  RequestId?: string;
}

export namespace TagResourceResponse {
  export function isa(o: any): o is TagResourceResponse {
    return _smithy.isa(o, "TagResourceResponse");
  }
}

/**
 *
 * 		       <p>A template object. A template is an entity in QuickSight which encapsulates the metadata
 * 			required to create an analysis that can be used to create dashboard. It adds a layer of
 * 			abstraction by replacing the dataset associated with the analysis with placeholders.
 * 			Templates can be used to create dashboards by replacing dataset placeholders with datasets
 * 			which follow the same schema that was used to create the source analysis and
 * 			template.</p>
 * 		       <p>You can share templates across AWS accounts by allowing users in other AWS accounts to
 * 			create a template or a dashboard from an existing template.</p>
 *
 */
export interface Template {
  __type?: "Template";
  /**
   *
   * 		       <p>The Amazon Resource Name (ARN) of the template.</p>
   *
   */
  Arn?: string;

  /**
   *
   * 		       <p>Time when this was created.</p>
   *
   */
  CreatedTime?: Date;

  /**
   *
   * 		       <p>Time when this was last updated.</p>
   *
   */
  LastUpdatedTime?: Date;

  /**
   *
   * 		       <p>The display name of the template.</p>
   *
   */
  Name?: string;

  /**
   *
   * 		       <p>The ID for the template. This is unique per AWS Region for each AWS account.</p>
   *
   */
  TemplateId?: string;

  /**
   *
   * 		       <p>A structure describing the versions of the template.</p>
   *
   */
  Version?: TemplateVersion;
}

export namespace Template {
  export function isa(o: any): o is Template {
    return _smithy.isa(o, "Template");
  }
}

/**
 *
 * 		       <p>The template alias.</p>
 *
 */
export interface TemplateAlias {
  __type?: "TemplateAlias";
  /**
   *
   * 		       <p>The display name of the template alias.</p>
   *
   */
  AliasName?: string;

  /**
   *
   * 		       <p>The ARN of the template alias.</p>
   *
   */
  Arn?: string;

  /**
   *
   * 		       <p>The version number of the template alias.</p>
   *
   */
  TemplateVersionNumber?: number;
}

export namespace TemplateAlias {
  export function isa(o: any): o is TemplateAlias {
    return _smithy.isa(o, "TemplateAlias");
  }
}

/**
 *
 * 		       <p>List of errors that occurred when the template version creation failed.</p>
 *
 */
export interface TemplateError {
  __type?: "TemplateError";
  /**
   *
   * 		       <p>Description of the error type.</p>
   *
   */
  Message?: string;

  /**
   *
   * 		       <p>Type of error.</p>
   *
   */
  Type?: TemplateErrorType | string;
}

export namespace TemplateError {
  export function isa(o: any): o is TemplateError {
    return _smithy.isa(o, "TemplateError");
  }
}

/**
 *
 * 		       <p>The source analysis of the template.</p>
 *
 */
export interface TemplateSourceAnalysis {
  __type?: "TemplateSourceAnalysis";
  /**
   *
   * 		       <p>The Amazon Resource name (ARN) of the resource.</p>
   *
   */
  Arn: string | undefined;

  /**
   *
   * 		       <p>A structure containing information about the dataset references used as placeholders in
   * 			the template.</p>
   *
   */
  DataSetReferences: Array<DataSetReference> | undefined;
}

export namespace TemplateSourceAnalysis {
  export function isa(o: any): o is TemplateSourceAnalysis {
    return _smithy.isa(o, "TemplateSourceAnalysis");
  }
}

/**
 *
 * 		       <p>The source entity of the template.</p>
 *
 */
export interface TemplateSourceEntity {
  __type?: "TemplateSourceEntity";
  /**
   *
   * 		       <p>The source analysis, if it is based on an analysis.</p>
   *
   */
  SourceAnalysis?: TemplateSourceAnalysis;

  /**
   *
   * 		       <p>The source template, if it is based on an template.</p>
   *
   */
  SourceTemplate?: TemplateSourceTemplate;
}

export namespace TemplateSourceEntity {
  export function isa(o: any): o is TemplateSourceEntity {
    return _smithy.isa(o, "TemplateSourceEntity");
  }
}

/**
 *
 * 		       <p>The source template of the template.</p>
 *
 */
export interface TemplateSourceTemplate {
  __type?: "TemplateSourceTemplate";
  /**
   *
   * 		       <p>The Amazon Resource name (ARN) of the resource.</p>
   *
   */
  Arn: string | undefined;
}

export namespace TemplateSourceTemplate {
  export function isa(o: any): o is TemplateSourceTemplate {
    return _smithy.isa(o, "TemplateSourceTemplate");
  }
}

/**
 *
 * 		       <p>The template summary.</p>
 *
 */
export interface TemplateSummary {
  __type?: "TemplateSummary";
  /**
   *
   * 		       <p>A summary of a template.</p>
   *
   */
  Arn?: string;

  /**
   *
   * 		       <p>The last time this was created.</p>
   *
   */
  CreatedTime?: Date;

  /**
   *
   * 		       <p>The last time this was updated.</p>
   *
   */
  LastUpdatedTime?: Date;

  /**
   *
   * 		       <p>A structure containing a list of version numbers for the template summary.</p>
   *
   */
  LatestVersionNumber?: number;

  /**
   *
   * 		       <p>A display name for the template.</p>
   *
   */
  Name?: string;

  /**
   *
   * 		       <p>The ID of the template. This is unique per AWS Region for each AWS account.</p>
   *
   */
  TemplateId?: string;
}

export namespace TemplateSummary {
  export function isa(o: any): o is TemplateSummary {
    return _smithy.isa(o, "TemplateSummary");
  }
}

/**
 *
 * 		       <p>A version of a template.</p>
 *
 */
export interface TemplateVersion {
  __type?: "TemplateVersion";
  /**
   *
   * 		       <p>The time this was created.</p>
   *
   */
  CreatedTime?: Date;

  /**
   *
   * 		       <p>Schema of the dataset identified by the placeholder. The idea is that any dashboard
   * 			created from the template should be bound to new datasets matching the same schema
   * 			described through this API. .</p>
   *
   */
  DataSetConfigurations?: Array<DataSetConfiguration>;

  /**
   *
   * 		       <p>The description of the template.</p>
   *
   */
  Description?: string;

  /**
   *
   * 		       <p>Errors associated with the template.</p>
   *
   */
  Errors?: Array<TemplateError>;

  /**
   *
   * 		       <p>The Amazon Resource Name (ARN) of the analysis or template which was used to create this
   * 			template.</p>
   *
   */
  SourceEntityArn?: string;

  /**
   *
   * 		       <p>The HTTP status of the request.</p>
   *
   */
  Status?: ResourceStatus | string;

  /**
   *
   * 		       <p>The version number of the template.</p>
   *
   */
  VersionNumber?: number;
}

export namespace TemplateVersion {
  export function isa(o: any): o is TemplateVersion {
    return _smithy.isa(o, "TemplateVersion");
  }
}

/**
 *
 * 		       <p>The template version.</p>
 *
 */
export interface TemplateVersionSummary {
  __type?: "TemplateVersionSummary";
  /**
   *
   * 		       <p>The ARN of the template version.</p>
   *
   */
  Arn?: string;

  /**
   *
   * 		       <p>The time this was created.</p>
   *
   */
  CreatedTime?: Date;

  /**
   *
   * 		       <p>The desription of the template version.</p>
   *
   */
  Description?: string;

  /**
   *
   * 		       <p>The status of the template version.</p>
   *
   */
  Status?: ResourceStatus | string;

  /**
   *
   * 		       <p>The version number of the template version.</p>
   *
   */
  VersionNumber?: number;
}

export namespace TemplateVersionSummary {
  export function isa(o: any): o is TemplateVersionSummary {
    return _smithy.isa(o, "TemplateVersionSummary");
  }
}

/**
 *
 * 		       <p>Teradata parameters.</p>
 *
 */
export interface TeradataParameters {
  __type?: "TeradataParameters";
  /**
   *
   * 		       <p>Database.</p>
   *
   */
  Database: string | undefined;

  /**
   *
   * 		       <p>Host.</p>
   *
   */
  Host: string | undefined;

  /**
   *
   * 		       <p>Port.</p>
   *
   */
  Port: number | undefined;
}

export namespace TeradataParameters {
  export function isa(o: any): o is TeradataParameters {
    return _smithy.isa(o, "TeradataParameters");
  }
}

/**
 *
 * 		       <p>Access is throttled.</p>
 *
 */
export interface ThrottlingException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "ThrottlingException";
  name: "ThrottlingException";
  $fault: "client";
  Message?: string;
  /**
   *
   * 		       <p>The AWS request ID for this request.</p>
   *
   */
  RequestId?: string;
}

export namespace ThrottlingException {
  export function isa(o: any): o is ThrottlingException {
    return _smithy.isa(o, "ThrottlingException");
  }
}

/**
 *
 * 		       <p>A data transformation on a logical table. This is a variant type structure. No more than
 * 			one of the attributes should be non-null for this structure to be valid.</p>
 *
 */
export interface TransformOperation {
  __type?: "TransformOperation";
  /**
   *
   * 		       <p>A transform operation that casts a column to a different type.</p>
   *
   */
  CastColumnTypeOperation?: CastColumnTypeOperation;

  /**
   *
   * 		       <p>An operation that creates calculated columns. Columns created in one such operation form
   * 			a lexical closure.</p>
   *
   */
  CreateColumnsOperation?: CreateColumnsOperation;

  /**
   *
   * 		       <p>An operation that filters rows based on some condition.</p>
   *
   */
  FilterOperation?: FilterOperation;

  /**
   *
   * 		       <p>An operation that projects columns. Operations that come after a projection can only
   * 			refer to projected columns.</p>
   *
   */
  ProjectOperation?: ProjectOperation;

  /**
   *
   * 		       <p>An operation that renames a column.</p>
   *
   */
  RenameColumnOperation?: RenameColumnOperation;

  /**
   *
   * 		       <p>An operation that tags a column with additional information.</p>
   *
   */
  TagColumnOperation?: TagColumnOperation;
}

export namespace TransformOperation {
  export function isa(o: any): o is TransformOperation {
    return _smithy.isa(o, "TransformOperation");
  }
}

/**
 *
 * 		       <p>Twitter parameters.</p>
 *
 */
export interface TwitterParameters {
  __type?: "TwitterParameters";
  /**
   *
   * 		       <p>Maximum number of rows to query Twitter.</p>
   *
   */
  MaxRows: number | undefined;

  /**
   *
   * 		       <p>Twitter query string.</p>
   *
   */
  Query: string | undefined;
}

export namespace TwitterParameters {
  export function isa(o: any): o is TwitterParameters {
    return _smithy.isa(o, "TwitterParameters");
  }
}

/**
 *
 * 		       <p>This error indicates that you are calling an operation on an Amazon QuickSight
 * 			subscription where the edition doesn't include support for that operation. Amazon
 * 			QuickSight currently has Standard Edition and Enterprise Edition. Not every operation and
 * 			capability is available in every edition.</p>
 *
 */
export interface UnsupportedUserEditionException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "UnsupportedUserEditionException";
  name: "UnsupportedUserEditionException";
  $fault: "client";
  Message?: string;
  /**
   *
   * 		       <p>The AWS request ID for this request.</p>
   *
   */
  RequestId?: string;
}

export namespace UnsupportedUserEditionException {
  export function isa(o: any): o is UnsupportedUserEditionException {
    return _smithy.isa(o, "UnsupportedUserEditionException");
  }
}

export interface UntagResourceRequest {
  __type?: "UntagResourceRequest";
  /**
   *
   * 		       <p>The Amazon Resource Name (ARN) of the resource that you want to untag.</p>
   *
   */
  ResourceArn: string | undefined;

  /**
   *
   * 		       <p>The keys of the key-value pairs for the resource tag or tags assigned to the resource.</p>
   *
   */
  TagKeys: Array<string> | undefined;
}

export namespace UntagResourceRequest {
  export function isa(o: any): o is UntagResourceRequest {
    return _smithy.isa(o, "UntagResourceRequest");
  }
}

export interface UntagResourceResponse extends $MetadataBearer {
  __type?: "UntagResourceResponse";
  /**
   *
   * 		       <p>The AWS request ID for this operation.</p>
   *
   */
  RequestId?: string;
}

export namespace UntagResourceResponse {
  export function isa(o: any): o is UntagResourceResponse {
    return _smithy.isa(o, "UntagResourceResponse");
  }
}

export interface UpdateDashboardPermissionsRequest {
  __type?: "UpdateDashboardPermissionsRequest";
  /**
   *
   * 		       <p>AWS account ID that contains the dashboard you are updating.</p>
   *
   */
  AwsAccountId: string | undefined;

  /**
   *
   * 		       <p>The ID for the dashboard.</p>
   *
   */
  DashboardId: string | undefined;

  /**
   *
   * 		       <p>The permissions that you want to grant on this resource.</p>
   *
   */
  GrantPermissions?: Array<ResourcePermission>;

  /**
   *
   * 		       <p>The permissions that you want to revoke from this resource.</p>
   *
   */
  RevokePermissions?: Array<ResourcePermission>;
}

export namespace UpdateDashboardPermissionsRequest {
  export function isa(o: any): o is UpdateDashboardPermissionsRequest {
    return _smithy.isa(o, "UpdateDashboardPermissionsRequest");
  }
}

export interface UpdateDashboardPermissionsResponse extends $MetadataBearer {
  __type?: "UpdateDashboardPermissionsResponse";
  /**
   *
   * 		       <p>The Amazon Resource Name (ARN) of the dashboard.</p>
   *
   */
  DashboardArn?: string;

  /**
   *
   * 		       <p>The ID for the dashboard.</p>
   *
   */
  DashboardId?: string;

  /**
   *
   * 		       <p>Information about the permissions on the dashboard.</p>
   *
   */
  Permissions?: Array<ResourcePermission>;

  /**
   *
   * 		       <p>The AWS request ID for this operation.</p>
   *
   */
  RequestId?: string;
}

export namespace UpdateDashboardPermissionsResponse {
  export function isa(o: any): o is UpdateDashboardPermissionsResponse {
    return _smithy.isa(o, "UpdateDashboardPermissionsResponse");
  }
}

export interface UpdateDashboardPublishedVersionRequest {
  __type?: "UpdateDashboardPublishedVersionRequest";
  /**
   *
   * 		       <p>AWS account ID that contains the dashboard you are updating.</p>
   *
   */
  AwsAccountId: string | undefined;

  /**
   *
   * 		       <p>The ID for the dashboard.</p>
   *
   */
  DashboardId: string | undefined;

  /**
   *
   * 		       <p>The version number of the dashboard.</p>
   *
   */
  VersionNumber: number | undefined;
}

export namespace UpdateDashboardPublishedVersionRequest {
  export function isa(o: any): o is UpdateDashboardPublishedVersionRequest {
    return _smithy.isa(o, "UpdateDashboardPublishedVersionRequest");
  }
}

export interface UpdateDashboardPublishedVersionResponse
  extends $MetadataBearer {
  __type?: "UpdateDashboardPublishedVersionResponse";
  /**
   *
   * 		       <p>The Amazon Resource Name (ARN) of the dashboard.</p>
   *
   */
  DashboardArn?: string;

  /**
   *
   * 		       <p>The ID for the dashboard.</p>
   *
   */
  DashboardId?: string;

  /**
   *
   * 		       <p>The AWS request ID for this operation.</p>
   *
   */
  RequestId?: string;
}

export namespace UpdateDashboardPublishedVersionResponse {
  export function isa(o: any): o is UpdateDashboardPublishedVersionResponse {
    return _smithy.isa(o, "UpdateDashboardPublishedVersionResponse");
  }
}

export interface UpdateDashboardRequest {
  __type?: "UpdateDashboardRequest";
  /**
   *
   * 		       <p>AWS account ID that contains the dashboard you are updating.</p>
   *
   */
  AwsAccountId: string | undefined;

  /**
   *
   * 		       <p>The ID for the dashboard.</p>
   *
   */
  DashboardId: string | undefined;

  /**
   *
   * 		       <p>Publishing options when creating a dashboard.</p>
   * 		       <ul>
   *             <li>
   * 				           <p>AvailabilityStatus for AdHocFilteringOption - This can be either
   * 					<code>ENABLED</code> or <code>DISABLED</code>. When This is set to set to
   * 					<code>DISABLED</code>, QuickSight disables the left filter pane on the published
   * 					dashboard, which can be used for AdHoc filtering. Enabled by default.  </p>
   * 			         </li>
   *             <li>
   * 				           <p>AvailabilityStatus for ExportToCSVOption - This can be either <code>ENABLED</code>
   * 					or <code>DISABLED</code>. The visual option to export data to CSV is disabled when
   * 					this is set to <code>DISABLED</code>. Enabled by default.  </p>
   * 			         </li>
   *             <li>
   * 				           <p>VisibilityState for SheetControlsOption - This can be either
   * 					<code>COLLAPSED</code> or <code>EXPANDED</code>. The sheet controls pane is collapsed
   * 					by default when set to true. Collapsed by default.  </p>
   * 			         </li>
   *          </ul>
   *
   */
  DashboardPublishOptions?: DashboardPublishOptions;

  /**
   *
   * 		       <p>The display name of the dashboard.</p>
   *
   */
  Name: string | undefined;

  /**
   *
   * 		       <p>A structure that contains the parameters of the dashboard.</p>
   *
   */
  Parameters?: _Parameters;

  /**
   *
   * 		       <p>The template or analysis from which the dashboard is
   * 		created. The SouceTemplate entity accepts the Arn of the template
   * 		and also references to replacement datasets for the placeholders
   * 		set when creating the template. The replacement datasets need to follow
   * 		the same schema as the datasets for which placeholders were created
   * 		when creating the template.</p>
   *
   */
  SourceEntity: DashboardSourceEntity | undefined;

  /**
   *
   * 		       <p>A description for the first version of the dashboard being created.</p>
   *
   */
  VersionDescription?: string;
}

export namespace UpdateDashboardRequest {
  export function isa(o: any): o is UpdateDashboardRequest {
    return _smithy.isa(o, "UpdateDashboardRequest");
  }
}

export interface UpdateDashboardResponse extends $MetadataBearer {
  __type?: "UpdateDashboardResponse";
  /**
   *
   * 		       <p>The Amazon Resource Name (ARN) of the resource.</p>
   *
   */
  Arn?: string;

  /**
   *
   * 		       <p>The creation status of the request.</p>
   *
   */
  CreationStatus?: ResourceStatus | string;

  /**
   *
   * 		       <p>The ID for the dashboard.</p>
   *
   */
  DashboardId?: string;

  /**
   *
   * 		       <p>The AWS request ID for this operation.</p>
   *
   */
  RequestId?: string;

  /**
   *
   * 		       <p>The HTTP status of the request.</p>
   *
   */
  Status?: number;

  /**
   *
   * 		       <p>The ARN of the dashboard, including the version number.</p>
   *
   */
  VersionArn?: string;
}

export namespace UpdateDashboardResponse {
  export function isa(o: any): o is UpdateDashboardResponse {
    return _smithy.isa(o, "UpdateDashboardResponse");
  }
}

export interface UpdateDataSetPermissionsRequest {
  __type?: "UpdateDataSetPermissionsRequest";
  /**
   *
   * 		       <p>The AWS Account ID.</p>
   *
   */
  AwsAccountId: string | undefined;

  /**
   *
   * 		       <p>The ID for the dataset that you want to create. This ID is unique per AWS Region for each AWS account.</p>
   *
   */
  DataSetId: string | undefined;

  /**
   *
   * 		       <p>The resource permissions that you want to grant to the dataset.</p>
   *
   */
  GrantPermissions?: Array<ResourcePermission>;

  /**
   *
   * 		       <p>The resource permissions that you want to revoke from the dataset.</p>
   *
   */
  RevokePermissions?: Array<ResourcePermission>;
}

export namespace UpdateDataSetPermissionsRequest {
  export function isa(o: any): o is UpdateDataSetPermissionsRequest {
    return _smithy.isa(o, "UpdateDataSetPermissionsRequest");
  }
}

export interface UpdateDataSetPermissionsResponse extends $MetadataBearer {
  __type?: "UpdateDataSetPermissionsResponse";
  /**
   *
   * 		       <p>The Amazon Resource Name (ARN) of the dataset.</p>
   *
   */
  DataSetArn?: string;

  /**
   *
   * 		       <p>The ID for the dataset that you want to create. This ID is unique per AWS Region for each AWS account.</p>
   *
   */
  DataSetId?: string;

  /**
   *
   * 		       <p>The AWS request ID for this operation.</p>
   *
   */
  RequestId?: string;
}

export namespace UpdateDataSetPermissionsResponse {
  export function isa(o: any): o is UpdateDataSetPermissionsResponse {
    return _smithy.isa(o, "UpdateDataSetPermissionsResponse");
  }
}

export interface UpdateDataSetRequest {
  __type?: "UpdateDataSetRequest";
  /**
   *
   * 		       <p>The AWS Account ID.</p>
   *
   */
  AwsAccountId: string | undefined;

  /**
   *
   * 		       <p>Groupings of columns that work together in certain QuickSight features. Currently, only geospatial hierarchy is supported.</p>
   *
   */
  ColumnGroups?: Array<ColumnGroup>;

  /**
   *
   * 		       <p>The ID for the dataset that you want to create. This ID is unique per AWS Region for each AWS account.</p>
   *
   */
  DataSetId: string | undefined;

  /**
   *
   * 		       <p>Indicates whether or not you want to import the data into SPICE.</p>
   *
   */
  ImportMode: DataSetImportMode | string | undefined;

  /**
   *
   * 		       <p>Configures the combination and transformation of the data from the physical tables.</p>
   *
   */
  LogicalTableMap?: { [key: string]: LogicalTable };

  /**
   *
   * 		       <p>The display name for the dataset.</p>
   *
   */
  Name: string | undefined;

  /**
   *
   * 		       <p>Declares the physical tables that are available in the underlying data sources.</p>
   *
   */
  PhysicalTableMap: { [key: string]: PhysicalTable } | undefined;

  /**
   *
   * 		       <p>Row-level security configuration on the data you want to create.</p>
   *
   */
  RowLevelPermissionDataSet?: RowLevelPermissionDataSet;
}

export namespace UpdateDataSetRequest {
  export function isa(o: any): o is UpdateDataSetRequest {
    return _smithy.isa(o, "UpdateDataSetRequest");
  }
}

export interface UpdateDataSetResponse extends $MetadataBearer {
  __type?: "UpdateDataSetResponse";
  /**
   *
   * 		       <p>The Amazon Resource Name (ARN) of the dataset.</p>
   *
   */
  Arn?: string;

  /**
   *
   * 		       <p>The ID for the dataset that you want to create. This ID is unique per AWS Region for each AWS account.</p>
   *
   */
  DataSetId?: string;

  /**
   *
   * 		       <p>The ARN for the ingestion, which is triggered as a result of dataset creation if the import mode is SPICE</p>
   *
   */
  IngestionArn?: string;

  /**
   *
   * 		       <p>The ID of the ingestion, which is triggered as a result of dataset creation if the import mode is SPICE</p>
   *
   */
  IngestionId?: string;

  /**
   *
   * 		       <p>The AWS request ID for this operation.</p>
   *
   */
  RequestId?: string;
}

export namespace UpdateDataSetResponse {
  export function isa(o: any): o is UpdateDataSetResponse {
    return _smithy.isa(o, "UpdateDataSetResponse");
  }
}

export interface UpdateDataSourcePermissionsRequest {
  __type?: "UpdateDataSourcePermissionsRequest";
  /**
   *
   * 		       <p>The AWS account ID.</p>
   *
   */
  AwsAccountId: string | undefined;

  /**
   *
   * 		       <p>The ID of the data source. This ID is unique per AWS Region for each AWS account. </p>
   *
   */
  DataSourceId: string | undefined;

  /**
   *
   * 		       <p>A list of resource permissions that you want to grant on the data source.</p>
   *
   */
  GrantPermissions?: Array<ResourcePermission>;

  /**
   *
   * 		       <p>A list of resource permissions that you want to revoke on the data source.</p>
   *
   */
  RevokePermissions?: Array<ResourcePermission>;
}

export namespace UpdateDataSourcePermissionsRequest {
  export function isa(o: any): o is UpdateDataSourcePermissionsRequest {
    return _smithy.isa(o, "UpdateDataSourcePermissionsRequest");
  }
}

export interface UpdateDataSourcePermissionsResponse extends $MetadataBearer {
  __type?: "UpdateDataSourcePermissionsResponse";
  /**
   *
   * 		       <p>The Amazon Resource Name (ARN) of the data source.</p>
   *
   */
  DataSourceArn?: string;

  /**
   *
   * 		       <p>The ID of the data source. This ID is unique per AWS Region for each AWS account.</p>
   *
   */
  DataSourceId?: string;

  /**
   *
   * 		       <p>The AWS request ID for this operation.</p>
   *
   */
  RequestId?: string;
}

export namespace UpdateDataSourcePermissionsResponse {
  export function isa(o: any): o is UpdateDataSourcePermissionsResponse {
    return _smithy.isa(o, "UpdateDataSourcePermissionsResponse");
  }
}

export interface UpdateDataSourceRequest {
  __type?: "UpdateDataSourceRequest";
  /**
   *
   * 		       <p>The AWS account ID.</p>
   *
   */
  AwsAccountId: string | undefined;

  /**
   *
   * 		       <p>The credentials that QuickSight that uses to connect to your underlying source. Currently,
   * 			only credentials based on user name and password are supported.</p>
   *
   */
  Credentials?: DataSourceCredentials;

  /**
   *
   * 		       <p>The ID of the data source. This ID is unique per AWS Region for each AWS account. </p>
   *
   */
  DataSourceId: string | undefined;

  /**
   *
   * 		       <p>The parameters that QuickSight uses to connect to your underlying source.</p>
   *
   */
  DataSourceParameters?: DataSourceParameters;

  /**
   *
   * 		       <p>A display name for the data source.</p>
   *
   */
  Name: string | undefined;

  /**
   *
   * 		       <p>Secure Socket Layer (SSL) properties that apply when QuickSight connects to your underlying
   * 			source.</p>
   *
   */
  SslProperties?: SslProperties;

  /**
   *
   * 		       <p>Use this parameter only when you want QuickSight to use a VPC connection when connecting to
   * 			your underlying source.</p>
   *
   */
  VpcConnectionProperties?: VpcConnectionProperties;
}

export namespace UpdateDataSourceRequest {
  export function isa(o: any): o is UpdateDataSourceRequest {
    return _smithy.isa(o, "UpdateDataSourceRequest");
  }
}

export interface UpdateDataSourceResponse extends $MetadataBearer {
  __type?: "UpdateDataSourceResponse";
  /**
   *
   * 		       <p>The Amazon Resource Name (ARN) of the data source.</p>
   *
   */
  Arn?: string;

  /**
   *
   * 		       <p>The ID of the data source. This ID is unique per AWS Region for each AWS account.</p>
   *
   */
  DataSourceId?: string;

  /**
   *
   * 		       <p>The AWS request ID for this operation.</p>
   *
   */
  RequestId?: string;

  /**
   *
   * 		       <p>The update status of the data source's last update.</p>
   *
   */
  UpdateStatus?: ResourceStatus | string;
}

export namespace UpdateDataSourceResponse {
  export function isa(o: any): o is UpdateDataSourceResponse {
    return _smithy.isa(o, "UpdateDataSourceResponse");
  }
}

export interface UpdateGroupRequest {
  __type?: "UpdateGroupRequest";
  /**
   *
   * 		       <p>The ID for the AWS account that the group is in. Currently, you use the ID for the AWS
   * 			account that contains your Amazon QuickSight account.</p>
   *
   */
  AwsAccountId: string | undefined;

  /**
   *
   * 		       <p>The description for the group that you want to update.</p>
   *
   */
  Description?: string;

  /**
   *
   * 		       <p>The name of the group that you want to update.</p>
   *
   */
  GroupName: string | undefined;

  /**
   *
   * 		       <p>The namespace. Currently, you should set this to <code>default</code>.</p>
   *
   */
  Namespace: string | undefined;
}

export namespace UpdateGroupRequest {
  export function isa(o: any): o is UpdateGroupRequest {
    return _smithy.isa(o, "UpdateGroupRequest");
  }
}

export interface UpdateGroupResponse extends $MetadataBearer {
  __type?: "UpdateGroupResponse";
  /**
   *
   * 		       <p>The name of the group.</p>
   *
   */
  Group?: Group;

  /**
   *
   * 		       <p>The AWS request ID for this operation.</p>
   *
   */
  RequestId?: string;
}

export namespace UpdateGroupResponse {
  export function isa(o: any): o is UpdateGroupResponse {
    return _smithy.isa(o, "UpdateGroupResponse");
  }
}

export interface UpdateIAMPolicyAssignmentRequest {
  __type?: "UpdateIAMPolicyAssignmentRequest";
  /**
   *
   * 		       <p>The name of the assignment. It must be unique within an AWS account.</p>
   *
   */
  AssignmentName: string | undefined;

  /**
   *
   * 		       <p>The status of an assignment:</p>
   * 		       <ul>
   *             <li>
   *                <p>ENABLED - Anything specified in this assignment is used while creating the data source.</p>
   *             </li>
   *             <li>
   *                <p>DISABLED - This assignment isn't used while creating the data source.</p>
   *             </li>
   *             <li>
   *                <p>DRAFT - Assignment is an unfinished draft and isn't used while creating the data
   * 					source.</p>
   *             </li>
   *          </ul>
   *
   */
  AssignmentStatus?: AssignmentStatus | string;

  /**
   *
   * 		       <p>The AWS account ID that contains the IAM policy assignment.</p>
   *
   */
  AwsAccountId: string | undefined;

  /**
   *
   * 		       <p>QuickSight users and/or groups that you want to assign to the specified IAM policy.</p>
   *
   */
  Identities?: { [key: string]: Array<string> };

  /**
   *
   * 		       <p>The namespace of the assignment.</p>
   *
   */
  Namespace: string | undefined;

  /**
   *
   * 		       <p>An IAM policy Amazon Resource Name (ARN) that will be applied to specified QuickSight users and groups in this assignment.</p>
   *
   */
  PolicyArn?: string;
}

export namespace UpdateIAMPolicyAssignmentRequest {
  export function isa(o: any): o is UpdateIAMPolicyAssignmentRequest {
    return _smithy.isa(o, "UpdateIAMPolicyAssignmentRequest");
  }
}

export interface UpdateIAMPolicyAssignmentResponse extends $MetadataBearer {
  __type?: "UpdateIAMPolicyAssignmentResponse";
  /**
   *
   * 		       <p>The ID of the assignment.</p>
   *
   */
  AssignmentId?: string;

  /**
   *
   * 		       <p>The name of the assignment. </p>
   *
   */
  AssignmentName?: string;

  /**
   *
   * 		       <p>The status of the assignment:</p>
   * 		       <ul>
   *             <li>
   *                <p>ENABLED - Anything specified in this assignment is used while creating the data source.</p>
   *             </li>
   *             <li>
   *                <p>DISABLED - This assignment isn't used while creating the data source.</p>
   *             </li>
   *             <li>
   *                <p>DRAFT - Assignment is an unfinished draft and isn't used while creating the data
   * 					source.</p>
   *             </li>
   *          </ul>
   *
   */
  AssignmentStatus?: AssignmentStatus | string;

  /**
   *
   * 		       <p>QuickSight users and/or groups that are assigned to this IAM policy.</p>
   *
   */
  Identities?: { [key: string]: Array<string> };

  /**
   *
   * 		       <p>The IAM policy ARN assigned to the QuickSight users and groups specified in this request.</p>
   *
   */
  PolicyArn?: string;

  /**
   *
   * 		       <p>The AWS request ID for this operation.</p>
   *
   */
  RequestId?: string;
}

export namespace UpdateIAMPolicyAssignmentResponse {
  export function isa(o: any): o is UpdateIAMPolicyAssignmentResponse {
    return _smithy.isa(o, "UpdateIAMPolicyAssignmentResponse");
  }
}

export interface UpdateTemplateAliasRequest {
  __type?: "UpdateTemplateAliasRequest";
  /**
   *
   * 		       <p>The alias of the template that you want to update. If you provide a specific alias,
   * 			you update the version that the alias points to.
   * 			You can specify the latest version of the template by providing the keyword
   * 			<code>$LATEST</code> in the <code>AliasName</code> parameter.
   * 			The keyword <code>$PUBLISHED</code> doesn't apply to templates.</p>
   *
   */
  AliasName: string | undefined;

  /**
   *
   * 		       <p>AWS account ID that contains the template aliases you are updating.</p>
   *
   */
  AwsAccountId: string | undefined;

  /**
   *
   * 		       <p>The ID for the template.</p>
   *
   */
  TemplateId: string | undefined;

  /**
   *
   * 		       <p>The version number of the template.</p>
   *
   */
  TemplateVersionNumber: number | undefined;
}

export namespace UpdateTemplateAliasRequest {
  export function isa(o: any): o is UpdateTemplateAliasRequest {
    return _smithy.isa(o, "UpdateTemplateAliasRequest");
  }
}

export interface UpdateTemplateAliasResponse extends $MetadataBearer {
  __type?: "UpdateTemplateAliasResponse";
  /**
   *
   * 		       <p>The AWS request ID for this operation.</p>
   *
   */
  RequestId?: string;

  /**
   *
   * 		       <p>The template alias.</p>
   *
   */
  TemplateAlias?: TemplateAlias;
}

export namespace UpdateTemplateAliasResponse {
  export function isa(o: any): o is UpdateTemplateAliasResponse {
    return _smithy.isa(o, "UpdateTemplateAliasResponse");
  }
}

export interface UpdateTemplatePermissionsRequest {
  __type?: "UpdateTemplatePermissionsRequest";
  /**
   *
   * 		       <p>AWS account ID that contains the template.</p>
   *
   */
  AwsAccountId: string | undefined;

  /**
   *
   * 		       <p>A list of resource permissions to be granted on the template. </p>
   *
   */
  GrantPermissions?: Array<ResourcePermission>;

  /**
   *
   * 		       <p>A list of resource permissions to be revoked from the template. </p>
   *
   */
  RevokePermissions?: Array<ResourcePermission>;

  /**
   *
   * 		       <p>The ID for the template.</p>
   *
   */
  TemplateId: string | undefined;
}

export namespace UpdateTemplatePermissionsRequest {
  export function isa(o: any): o is UpdateTemplatePermissionsRequest {
    return _smithy.isa(o, "UpdateTemplatePermissionsRequest");
  }
}

export interface UpdateTemplatePermissionsResponse extends $MetadataBearer {
  __type?: "UpdateTemplatePermissionsResponse";
  /**
   *
   * 		       <p>A list of resource permissions to be set on the template.</p>
   *
   */
  Permissions?: Array<ResourcePermission>;

  /**
   *
   * 		       <p>The AWS request ID for this operation.</p>
   *
   */
  RequestId?: string;

  /**
   *
   * 		       <p>The Amazon Resource Name (ARN) of the template.</p>
   *
   */
  TemplateArn?: string;

  /**
   *
   * 		       <p>The ID for the template.</p>
   *
   */
  TemplateId?: string;
}

export namespace UpdateTemplatePermissionsResponse {
  export function isa(o: any): o is UpdateTemplatePermissionsResponse {
    return _smithy.isa(o, "UpdateTemplatePermissionsResponse");
  }
}

export interface UpdateTemplateRequest {
  __type?: "UpdateTemplateRequest";
  /**
   *
   * 		       <p>AWS account ID that contains the template you are updating.</p>
   *
   */
  AwsAccountId: string | undefined;

  /**
   *
   * 		       <p>The name for the template.</p>
   *
   */
  Name?: string;

  /**
   *
   * 		       <p>The source QuickSight entity from which this template is being created. Templates can be
   * 			currently created from an Analysis or another template.</p>
   *
   */
  SourceEntity: TemplateSourceEntity | undefined;

  /**
   *
   * 		       <p>The ID for the template.</p>
   *
   */
  TemplateId: string | undefined;

  /**
   *
   * 		       <p>A description of the current template version being updated.
   * 			Every time you cal <code>UpdateTemplate</code> you create a new version. Each
   * 			version of the template maintains a description of the version in the <code>VersionDescription</code>
   * 			field.</p>
   *
   */
  VersionDescription?: string;
}

export namespace UpdateTemplateRequest {
  export function isa(o: any): o is UpdateTemplateRequest {
    return _smithy.isa(o, "UpdateTemplateRequest");
  }
}

export interface UpdateTemplateResponse extends $MetadataBearer {
  __type?: "UpdateTemplateResponse";
  /**
   *
   * 		       <p>The Amazon Resource Name (ARN) for the template.</p>
   *
   */
  Arn?: string;

  /**
   *
   * 		       <p>The creation status of the template.</p>
   *
   */
  CreationStatus?: ResourceStatus | string;

  /**
   *
   * 		       <p>The AWS request ID for this operation.</p>
   *
   */
  RequestId?: string;

  /**
   *
   * 		       <p>The ID for the template.</p>
   *
   */
  TemplateId?: string;

  /**
   *
   * 		       <p>The Amazon Resource Name (ARN) for the template, including the version information of
   * 			the first version.</p>
   *
   */
  VersionArn?: string;
}

export namespace UpdateTemplateResponse {
  export function isa(o: any): o is UpdateTemplateResponse {
    return _smithy.isa(o, "UpdateTemplateResponse");
  }
}

export interface UpdateUserRequest {
  __type?: "UpdateUserRequest";
  /**
   *
   * 		       <p>The ID for the AWS account that the user is in. Currently, you use the ID for the AWS
   * 			account that contains your Amazon QuickSight account.</p>
   *
   */
  AwsAccountId: string | undefined;

  /**
   *
   * 		       <p>The email address of the user that you want to update.</p>
   *
   */
  Email: string | undefined;

  /**
   *
   * 		       <p>The namespace. Currently, you should set this to <code>default</code>.</p>
   *
   */
  Namespace: string | undefined;

  /**
   *
   * 		       <p>The Amazon QuickSight role of the user. The user role can be one of the
   * 			following:</p>
   * 		       <ul>
   *             <li>
   * 				           <p>
   *                   <code>READER</code>: A user who has read-only access to dashboards.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>AUTHOR</code>: A user who can create data sources, datasets, analyses, and
   * 					dashboards.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>ADMIN</code>: A user who is an author, who can also manage Amazon QuickSight
   * 					settings.</p>
   * 			         </li>
   *          </ul>
   *
   */
  Role: UserRole | string | undefined;

  /**
   *
   * 		       <p>The Amazon QuickSight user name that you want to update.</p>
   *
   */
  UserName: string | undefined;
}

export namespace UpdateUserRequest {
  export function isa(o: any): o is UpdateUserRequest {
    return _smithy.isa(o, "UpdateUserRequest");
  }
}

export interface UpdateUserResponse extends $MetadataBearer {
  __type?: "UpdateUserResponse";
  /**
   *
   * 		       <p>The AWS request ID for this operation.</p>
   *
   */
  RequestId?: string;

  /**
   *
   * 		       <p>The Amazon QuickSight user.</p>
   *
   */
  User?: User;
}

export namespace UpdateUserResponse {
  export function isa(o: any): o is UpdateUserResponse {
    return _smithy.isa(o, "UpdateUserResponse");
  }
}

/**
 *
 * 		       <p>Information on source file(s) format.</p>
 *
 */
export interface UploadSettings {
  __type?: "UploadSettings";
  /**
   *
   * 		       <p>Whether or not the file(s) has a header row.</p>
   *
   */
  ContainsHeader?: boolean;

  /**
   *
   * 		       <p>The delimiter between values in the file.</p>
   *
   */
  Delimiter?: string;

  /**
   *
   * 		       <p>File format.</p>
   *
   */
  Format?: FileFormat | string;

  /**
   *
   * 		       <p>A row number to start reading data from.</p>
   *
   */
  StartFromRow?: number;

  /**
   *
   * 		       <p>Text qualifier.</p>
   *
   */
  TextQualifier?: TextQualifier | string;
}

export namespace UploadSettings {
  export function isa(o: any): o is UploadSettings {
    return _smithy.isa(o, "UploadSettings");
  }
}

/**
 *
 * 		       <p>A registered user of Amazon QuickSight. Currently, an Amazon QuickSight subscription
 * 			can't contain more than 20 million users.</p>
 *
 */
export interface User {
  __type?: "User";
  /**
   *
   * 		       <p>Active status of user. When you create an Amazon QuickSight user that’s not an IAM user
   * 			or an AD user, that user is inactive until they sign in and provide a password.</p>
   *
   */
  Active?: boolean;

  /**
   *
   * 		       <p>The Amazon Resource name (ARN) for the user.</p>
   *
   */
  Arn?: string;

  /**
   *
   * 		       <p>The user's email address.</p>
   *
   */
  Email?: string;

  /**
   *
   * 		       <p>The type of identity authentication used by the user.</p>
   *
   */
  IdentityType?: IdentityType | string;

  /**
   *
   * 		       <p>The principal ID of the user.</p>
   *
   */
  PrincipalId?: string;

  /**
   *
   * 		       <p>The Amazon QuickSight role for the user. The user role can be one of the
   * 			following:.</p>
   * 		       <ul>
   *             <li>
   * 				           <p>
   *                   <code>READER</code>: A user who has read-only access to dashboards.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>AUTHOR</code>: A user who can create data sources, datasets, analyses, and
   * 					dashboards.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>ADMIN</code>: A user who is an author, who can also manage Amazon QuickSight
   * 					settings.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>RESTRICTED_READER</code>: This role isn't currently available for
   * 					use.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>RESTRICTED_AUTHOR</code>: This role isn't currently available for
   * 					use.</p>
   * 			         </li>
   *          </ul>
   *
   */
  Role?: UserRole | string;

  /**
   *
   * 		       <p>The user's user name.</p>
   *
   */
  UserName?: string;
}

export namespace User {
  export function isa(o: any): o is User {
    return _smithy.isa(o, "User");
  }
}

/**
 *
 * 		       <p>VPC connection properties.</p>
 *
 */
export interface VpcConnectionProperties {
  __type?: "VpcConnectionProperties";
  /**
   *
   * 		       <p>The Amazon Resource Name (ARN) for the VPC connection.</p>
   *
   */
  VpcConnectionArn: string | undefined;
}

export namespace VpcConnectionProperties {
  export function isa(o: any): o is VpcConnectionProperties {
    return _smithy.isa(o, "VpcConnectionProperties");
  }
}
