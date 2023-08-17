// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { GlueServiceException as __BaseException } from "./GlueServiceException";
import {
  Action,
  Aggregate,
  AmazonRedshiftSource,
  AmazonRedshiftTarget,
  AthenaConnectorSource,
  AuditContext,
  BasicCatalogTarget,
  CatalogDeltaSource,
  CatalogHudiSource,
  CatalogKafkaSource,
  CatalogKinesisSource,
  CatalogSource,
  ConnectionInput,
  ConnectionsList,
  CrawlerTargets,
  CsvHeaderOption,
  CsvSerdeOption,
  CustomCode,
  CustomEntityType,
  DatabaseInput,
  DataQualityTargetTable,
  DataSource,
  DirectJDBCSource,
  DirectKafkaSource,
  DirectKinesisSource,
  DropDuplicates,
  DropFields,
  DropNullFields,
  DynamicTransform,
  DynamoDBCatalogSource,
  ErrorDetail,
  EvaluateDataQuality,
  EvaluateDataQualityMultiFrame,
  EventBatchingCondition,
  ExecutionClass,
  ExecutionProperty,
  FillMissingValues,
  Filter,
  GovernedCatalogSource,
  GovernedCatalogTarget,
  JDBCConnectorSource,
  JDBCConnectorTarget,
  JobCommand,
  Join,
  LakeFormationConfiguration,
  LineageConfiguration,
  Merge,
  MicrosoftSQLServerCatalogSource,
  MicrosoftSQLServerCatalogTarget,
  MySQLCatalogSource,
  MySQLCatalogTarget,
  NotificationProperty,
  OracleSQLCatalogSource,
  OracleSQLCatalogTarget,
  Partition,
  PartitionInput,
  PIIDetection,
  PostgreSQLCatalogSource,
  PostgreSQLCatalogTarget,
  Predicate,
  Recipe,
  RecrawlPolicy,
  RedshiftSource,
  RedshiftTarget,
  RelationalCatalogSource,
  RenameField,
  S3CatalogDeltaSource,
  S3CatalogHudiSource,
  S3CatalogSource,
  S3CatalogTarget,
  S3CsvSource,
  S3DeltaCatalogTarget,
  S3DeltaDirectTarget,
  S3DeltaSource,
  S3DirectTarget,
  S3GlueParquetTarget,
  S3HudiCatalogTarget,
  S3HudiDirectTarget,
  S3HudiSource,
  S3JsonSource,
  S3ParquetSource,
  SchemaChangePolicy,
  SchemaId,
  SelectFields,
  SelectFromCollection,
  SnowflakeSource,
  SnowflakeTarget,
  SourceControlAuthStrategy,
  SourceControlDetails,
  SourceControlProvider,
  SparkConnectorSource,
  SparkConnectorTarget,
  SparkSQL,
  Spigot,
  SplitFields,
  TaskStatusType,
  Trigger,
  Union,
  WorkerType,
  Workflow,
  WorkflowRun,
} from "./models_0";
import {
  ColumnStatistics,
  Compatibility,
  DataCatalogEncryptionSettings,
  DataQualityEvaluationRunAdditionalRunOptions,
  JobBookmarkEntry,
  PermissionType,
  PrincipalType,
  RegistryId,
  RegistryStatus,
  ResourceShareType,
  ResourceUri,
  SchemaStatus,
  SchemaVersionNumber,
  SchemaVersionStatus,
  Segment,
  Session,
  Statement,
  Table,
  TableInput,
  TransformFilterCriteria,
  TransformParameters,
  TransformSortCriteria,
  UserDefinedFunctionInput,
} from "./models_1";

/**
 * @public
 */
export interface GetUnfilteredPartitionMetadataRequest {
  /**
   * @public
   * <p>The catalog ID where the partition resides.</p>
   */
  CatalogId: string | undefined;

  /**
   * @public
   * <p>(Required) Specifies the name of a database that contains the partition.</p>
   */
  DatabaseName: string | undefined;

  /**
   * @public
   * <p>(Required) Specifies the name of a table that contains the partition.</p>
   */
  TableName: string | undefined;

  /**
   * @public
   * <p>(Required) A list of partition key values.</p>
   */
  PartitionValues: string[] | undefined;

  /**
   * @public
   * <p>A structure containing Lake Formation audit context information.</p>
   */
  AuditContext?: AuditContext;

  /**
   * @public
   * <p>(Required) A list of supported permission types. </p>
   */
  SupportedPermissionTypes: (PermissionType | string)[] | undefined;
}

/**
 * @public
 */
export interface GetUnfilteredPartitionMetadataResponse {
  /**
   * @public
   * <p>A Partition object containing the partition metadata.</p>
   */
  Partition?: Partition;

  /**
   * @public
   * <p>A list of column names that the user has been granted access to.</p>
   */
  AuthorizedColumns?: string[];

  /**
   * @public
   * <p>A Boolean value that indicates whether the partition location is registered
   *           with Lake Formation.</p>
   */
  IsRegisteredWithLakeFormation?: boolean;
}

/**
 * @public
 * <p>The operation timed out.</p>
 */
export class PermissionTypeMismatchException extends __BaseException {
  readonly name: "PermissionTypeMismatchException" = "PermissionTypeMismatchException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>There is a mismatch between the SupportedPermissionType used in the query request
   *           and the permissions defined on the target table.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PermissionTypeMismatchException, __BaseException>) {
    super({
      name: "PermissionTypeMismatchException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PermissionTypeMismatchException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface GetUnfilteredPartitionsMetadataRequest {
  /**
   * @public
   * <p>The ID of the Data Catalog where the partitions in question reside. If none is provided,
   *           the AWS account ID is used by default. </p>
   */
  CatalogId: string | undefined;

  /**
   * @public
   * <p>The name of the catalog database where the partitions reside.</p>
   */
  DatabaseName: string | undefined;

  /**
   * @public
   * <p>The name of the table that contains the partition.</p>
   */
  TableName: string | undefined;

  /**
   * @public
   * <p>An expression that filters the partitions to be returned.</p>
   *          <p>The expression uses SQL syntax similar to the SQL <code>WHERE</code> filter clause. The
   *       SQL statement parser <a href="http://jsqlparser.sourceforge.net/home.php">JSQLParser</a> parses the expression. </p>
   *          <p>
   *             <i>Operators</i>: The following are the operators that you can use in the
   *         <code>Expression</code> API call:</p>
   *          <dl>
   *             <dt>=</dt>
   *             <dd>
   *                <p>Checks whether the values of the two operands are equal; if yes, then the condition becomes
   *             true.</p>
   *                <p>Example: Assume 'variable a' holds 10 and 'variable b' holds 20. </p>
   *                <p>(a = b) is not true.</p>
   *             </dd>
   *             <dt>< ></dt>
   *             <dd>
   *                <p>Checks whether the values of two operands are equal; if the values are not equal,
   *             then the condition becomes true.</p>
   *                <p>Example: (a < > b) is true.</p>
   *             </dd>
   *             <dt>></dt>
   *             <dd>
   *                <p>Checks whether the value of the left operand is greater than the value of the right
   *             operand; if yes, then the condition becomes true.</p>
   *                <p>Example: (a > b) is not true.</p>
   *             </dd>
   *             <dt><</dt>
   *             <dd>
   *                <p>Checks whether the value of the left operand is less than the value of the right
   *             operand; if yes, then the condition becomes true.</p>
   *                <p>Example: (a < b) is true.</p>
   *             </dd>
   *             <dt>>=</dt>
   *             <dd>
   *                <p>Checks whether the value of the left operand is greater than or equal to the value
   *             of the right operand; if yes, then the condition becomes true.</p>
   *                <p>Example: (a >= b) is not true.</p>
   *             </dd>
   *             <dt><=</dt>
   *             <dd>
   *                <p>Checks whether the value of the left operand is less than or equal to the value of
   *             the right operand; if yes, then the condition becomes true.</p>
   *                <p>Example: (a <= b) is true.</p>
   *             </dd>
   *             <dt>AND, OR, IN, BETWEEN, LIKE, NOT, IS NULL</dt>
   *             <dd>
   *                <p>Logical operators.</p>
   *             </dd>
   *          </dl>
   *          <p>
   *             <i>Supported Partition Key Types</i>: The following are the supported
   *       partition keys.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>string</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>date</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>timestamp</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>int</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>bigint</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>long</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tinyint</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>smallint</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>decimal</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>If an type is encountered that is not valid, an exception is thrown. </p>
   */
  Expression?: string;

  /**
   * @public
   * <p>A structure containing Lake Formation audit context information.</p>
   */
  AuditContext?: AuditContext;

  /**
   * @public
   * <p>A list of supported permission types. </p>
   */
  SupportedPermissionTypes: (PermissionType | string)[] | undefined;

  /**
   * @public
   * <p>A continuation token, if this is not the first call to retrieve
   *       these partitions.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The segment of the table's partitions to scan in this request.</p>
   */
  Segment?: Segment;

  /**
   * @public
   * <p>The maximum number of partitions to return in a single response.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>A partition that contains unfiltered metadata.</p>
 */
export interface UnfilteredPartition {
  /**
   * @public
   * <p>The partition object.</p>
   */
  Partition?: Partition;

  /**
   * @public
   * <p>The list of columns the user has permissions to access.</p>
   */
  AuthorizedColumns?: string[];

  /**
   * @public
   * <p>A Boolean value indicating that the partition location is registered with Lake Formation.</p>
   */
  IsRegisteredWithLakeFormation?: boolean;
}

/**
 * @public
 */
export interface GetUnfilteredPartitionsMetadataResponse {
  /**
   * @public
   * <p>A list of requested partitions.</p>
   */
  UnfilteredPartitions?: UnfilteredPartition[];

  /**
   * @public
   * <p>A continuation token, if the returned list of partitions does not include the last
   *       one.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetUnfilteredTableMetadataRequest {
  /**
   * @public
   * <p>The catalog ID where the table resides.</p>
   */
  CatalogId: string | undefined;

  /**
   * @public
   * <p>(Required) Specifies the name of a database that contains the table.</p>
   */
  DatabaseName: string | undefined;

  /**
   * @public
   * <p>(Required) Specifies the name of a table for which you are requesting metadata.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>A structure containing Lake Formation audit context information.</p>
   */
  AuditContext?: AuditContext;

  /**
   * @public
   * <p>(Required) A list of supported permission types. </p>
   */
  SupportedPermissionTypes: (PermissionType | string)[] | undefined;
}

/**
 * @public
 * <p>A filter that uses both column-level and row-level filtering.</p>
 */
export interface ColumnRowFilter {
  /**
   * @public
   * <p>A string containing the name of the column.</p>
   */
  ColumnName?: string;

  /**
   * @public
   * <p>A string containing the row-level filter expression.</p>
   */
  RowFilterExpression?: string;
}

/**
 * @public
 */
export interface GetUnfilteredTableMetadataResponse {
  /**
   * @public
   * <p>A Table object containing the table metadata.</p>
   */
  Table?: Table;

  /**
   * @public
   * <p>A list of column names that the user has been granted access to.</p>
   */
  AuthorizedColumns?: string[];

  /**
   * @public
   * <p>A Boolean value that indicates whether the partition location is registered
   *           with Lake Formation.</p>
   */
  IsRegisteredWithLakeFormation?: boolean;

  /**
   * @public
   * <p>A list of column row filters.</p>
   */
  CellFilters?: ColumnRowFilter[];
}

/**
 * @public
 */
export interface GetUserDefinedFunctionRequest {
  /**
   * @public
   * <p>The ID of the Data Catalog where the function to be retrieved is located. If none is
   *       provided, the Amazon Web Services account ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * @public
   * <p>The name of the catalog database where the function is located.</p>
   */
  DatabaseName: string | undefined;

  /**
   * @public
   * <p>The name of the function.</p>
   */
  FunctionName: string | undefined;
}

/**
 * @public
 * <p>Represents the equivalent of a Hive user-defined function
 *       (<code>UDF</code>) definition.</p>
 */
export interface UserDefinedFunction {
  /**
   * @public
   * <p>The name of the function.</p>
   */
  FunctionName?: string;

  /**
   * @public
   * <p>The name of the catalog database that contains the function.</p>
   */
  DatabaseName?: string;

  /**
   * @public
   * <p>The Java class that contains the function code.</p>
   */
  ClassName?: string;

  /**
   * @public
   * <p>The owner of the function.</p>
   */
  OwnerName?: string;

  /**
   * @public
   * <p>The owner type.</p>
   */
  OwnerType?: PrincipalType | string;

  /**
   * @public
   * <p>The time at which the function was created.</p>
   */
  CreateTime?: Date;

  /**
   * @public
   * <p>The resource URIs for the function.</p>
   */
  ResourceUris?: ResourceUri[];

  /**
   * @public
   * <p>The ID of the Data Catalog in which the function resides.</p>
   */
  CatalogId?: string;
}

/**
 * @public
 */
export interface GetUserDefinedFunctionResponse {
  /**
   * @public
   * <p>The requested function definition.</p>
   */
  UserDefinedFunction?: UserDefinedFunction;
}

/**
 * @public
 */
export interface GetUserDefinedFunctionsRequest {
  /**
   * @public
   * <p>The ID of the Data Catalog where the functions to be retrieved are located. If none is
   *       provided, the Amazon Web Services account ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * @public
   * <p>The name of the catalog database where the functions are located. If none is provided, functions from all the
   *       databases across the catalog will be returned.</p>
   */
  DatabaseName?: string;

  /**
   * @public
   * <p>An optional function-name pattern string that filters the function
   *       definitions returned.</p>
   */
  Pattern: string | undefined;

  /**
   * @public
   * <p>A continuation token, if this is a continuation call.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of functions to return in one response.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface GetUserDefinedFunctionsResponse {
  /**
   * @public
   * <p>A list of requested function definitions.</p>
   */
  UserDefinedFunctions?: UserDefinedFunction[];

  /**
   * @public
   * <p>A continuation token, if the list of functions returned does
   *       not include the last requested function.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetWorkflowRequest {
  /**
   * @public
   * <p>The name of the workflow to retrieve.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>Specifies whether to include a graph when returning the workflow resource metadata.</p>
   */
  IncludeGraph?: boolean;
}

/**
 * @public
 */
export interface GetWorkflowResponse {
  /**
   * @public
   * <p>The resource metadata for the workflow.</p>
   */
  Workflow?: Workflow;
}

/**
 * @public
 */
export interface GetWorkflowRunRequest {
  /**
   * @public
   * <p>Name of the workflow being run.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The ID of the workflow run.</p>
   */
  RunId: string | undefined;

  /**
   * @public
   * <p>Specifies whether to include the workflow graph in response or not.</p>
   */
  IncludeGraph?: boolean;
}

/**
 * @public
 */
export interface GetWorkflowRunResponse {
  /**
   * @public
   * <p>The requested workflow run metadata.</p>
   */
  Run?: WorkflowRun;
}

/**
 * @public
 */
export interface GetWorkflowRunPropertiesRequest {
  /**
   * @public
   * <p>Name of the workflow which was run.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The ID of the workflow run whose run properties should be returned.</p>
   */
  RunId: string | undefined;
}

/**
 * @public
 */
export interface GetWorkflowRunPropertiesResponse {
  /**
   * @public
   * <p>The workflow run properties which were set during the specified run.</p>
   */
  RunProperties?: Record<string, string>;
}

/**
 * @public
 */
export interface GetWorkflowRunsRequest {
  /**
   * @public
   * <p>Name of the workflow whose metadata of runs should be returned.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>Specifies whether to include the workflow graph in response or not.</p>
   */
  IncludeGraph?: boolean;

  /**
   * @public
   * <p>The maximum size of the response.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of workflow runs to be included in the response.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface GetWorkflowRunsResponse {
  /**
   * @public
   * <p>A list of workflow run metadata objects.</p>
   */
  Runs?: WorkflowRun[];

  /**
   * @public
   * <p>A continuation token, if not all requested workflow runs have been returned.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ImportCatalogToGlueRequest {
  /**
   * @public
   * <p>The ID of the catalog to import. Currently, this should be the Amazon Web Services account ID.</p>
   */
  CatalogId?: string;
}

/**
 * @public
 */
export interface ImportCatalogToGlueResponse {}

/**
 * @public
 */
export interface ListBlueprintsRequest {
  /**
   * @public
   * <p>A continuation token, if this is a continuation request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum size of a list to return.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>Filters the list by an Amazon Web Services resource tag.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface ListBlueprintsResponse {
  /**
   * @public
   * <p>List of names of blueprints in the account.</p>
   */
  Blueprints?: string[];

  /**
   * @public
   * <p>A continuation token, if not all blueprint names have been returned.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListCrawlersRequest {
  /**
   * @public
   * <p>The maximum size of a list to return.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>A continuation token, if this is a continuation request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Specifies to return only these tagged resources.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface ListCrawlersResponse {
  /**
   * @public
   * <p>The names of all crawlers in the account, or the crawlers with the specified tags.</p>
   */
  CrawlerNames?: string[];

  /**
   * @public
   * <p>A continuation token, if the returned list does not contain the
   *       last metric available.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const FieldName = {
  CRAWL_ID: "CRAWL_ID",
  DPU_HOUR: "DPU_HOUR",
  END_TIME: "END_TIME",
  START_TIME: "START_TIME",
  STATE: "STATE",
} as const;

/**
 * @public
 */
export type FieldName = (typeof FieldName)[keyof typeof FieldName];

/**
 * @public
 * @enum
 */
export const FilterOperator = {
  EQ: "EQ",
  GE: "GE",
  GT: "GT",
  LE: "LE",
  LT: "LT",
  NE: "NE",
} as const;

/**
 * @public
 */
export type FilterOperator = (typeof FilterOperator)[keyof typeof FilterOperator];

/**
 * @public
 * <p>A list of fields, comparators and value that you can use to filter the crawler runs for a specified crawler.</p>
 */
export interface CrawlsFilter {
  /**
   * @public
   * <p>A key used to filter the crawler runs for a specified crawler. Valid values for each of the field names are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CRAWL_ID</code>: A string representing the UUID identifier for a crawl.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>STATE</code>: A string representing the state of the crawl.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>START_TIME</code> and <code>END_TIME</code>: The epoch timestamp in milliseconds.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DPU_HOUR</code>: The number of data processing unit (DPU) hours used for the crawl.</p>
   *             </li>
   *          </ul>
   */
  FieldName?: FieldName | string;

  /**
   * @public
   * <p>A defined comparator that operates on the value. The available operators are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>GT</code>: Greater than.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>GE</code>: Greater than or equal to.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LT</code>: Less than.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LE</code>: Less than or equal to.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>EQ</code>: Equal to.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NE</code>: Not equal to.</p>
   *             </li>
   *          </ul>
   */
  FilterOperator?: FilterOperator | string;

  /**
   * @public
   * <p>The value provided for comparison on the crawl field. </p>
   */
  FieldValue?: string;
}

/**
 * @public
 */
export interface ListCrawlsRequest {
  /**
   * @public
   * <p>The name of the crawler whose runs you want to retrieve.</p>
   */
  CrawlerName: string | undefined;

  /**
   * @public
   * <p>The maximum number of results to return. The default is 20, and maximum is 100.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>Filters the crawls by the criteria you specify in a list of <code>CrawlsFilter</code> objects.</p>
   */
  Filters?: CrawlsFilter[];

  /**
   * @public
   * <p>A continuation token, if this is a continuation call.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const CrawlerHistoryState = {
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  RUNNING: "RUNNING",
  STOPPED: "STOPPED",
} as const;

/**
 * @public
 */
export type CrawlerHistoryState = (typeof CrawlerHistoryState)[keyof typeof CrawlerHistoryState];

/**
 * @public
 * <p>Contains the information for a run of a crawler.</p>
 */
export interface CrawlerHistory {
  /**
   * @public
   * <p>A UUID identifier for each crawl.</p>
   */
  CrawlId?: string;

  /**
   * @public
   * <p>The state of the crawl.</p>
   */
  State?: CrawlerHistoryState | string;

  /**
   * @public
   * <p>The date and time on which the crawl started.</p>
   */
  StartTime?: Date;

  /**
   * @public
   * <p>The date and time on which the crawl ended.</p>
   */
  EndTime?: Date;

  /**
   * @public
   * <p>A run summary for the specific crawl in JSON. Contains the catalog tables and partitions that were added, updated, or deleted.</p>
   */
  Summary?: string;

  /**
   * @public
   * <p>If an error occurred, the error message associated with the crawl.</p>
   */
  ErrorMessage?: string;

  /**
   * @public
   * <p>The log group associated with the crawl.</p>
   */
  LogGroup?: string;

  /**
   * @public
   * <p>The log stream associated with the crawl.</p>
   */
  LogStream?: string;

  /**
   * @public
   * <p>The prefix for a CloudWatch message about this crawl.</p>
   */
  MessagePrefix?: string;

  /**
   * @public
   * <p>The number of data processing units (DPU) used in hours for the crawl.</p>
   */
  DPUHour?: number;
}

/**
 * @public
 */
export interface ListCrawlsResponse {
  /**
   * @public
   * <p>A list of <code>CrawlerHistory</code> objects representing the crawl runs that meet your criteria.</p>
   */
  Crawls?: CrawlerHistory[];

  /**
   * @public
   * <p>A continuation token for paginating the returned list of tokens, returned if the current segment of the list is not the last.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListCustomEntityTypesRequest {
  /**
   * @public
   * <p>A paginated token to offset the results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>A list of key-value pair tags.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface ListCustomEntityTypesResponse {
  /**
   * @public
   * <p>A list of <code>CustomEntityType</code> objects representing custom patterns.</p>
   */
  CustomEntityTypes?: CustomEntityType[];

  /**
   * @public
   * <p>A pagination token, if more results are available.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Criteria used to return data quality results.</p>
 */
export interface DataQualityResultFilterCriteria {
  /**
   * @public
   * <p>Filter results by the specified data source. For example, retrieving all results for an Glue table.</p>
   */
  DataSource?: DataSource;

  /**
   * @public
   * <p>Filter results by the specified job name.</p>
   */
  JobName?: string;

  /**
   * @public
   * <p>Filter results by the specified job run ID.</p>
   */
  JobRunId?: string;

  /**
   * @public
   * <p>Filter results by runs that started after this time.</p>
   */
  StartedAfter?: Date;

  /**
   * @public
   * <p>Filter results by runs that started before this time.</p>
   */
  StartedBefore?: Date;
}

/**
 * @public
 */
export interface ListDataQualityResultsRequest {
  /**
   * @public
   * <p>The filter criteria.</p>
   */
  Filter?: DataQualityResultFilterCriteria;

  /**
   * @public
   * <p>A paginated token to offset the results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>Describes a data quality result.</p>
 */
export interface DataQualityResultDescription {
  /**
   * @public
   * <p>The unique result ID for this data quality result.</p>
   */
  ResultId?: string;

  /**
   * @public
   * <p>The table name associated with the data quality result.</p>
   */
  DataSource?: DataSource;

  /**
   * @public
   * <p>The job name associated with the data quality result.</p>
   */
  JobName?: string;

  /**
   * @public
   * <p>The job run ID associated with the data quality result.</p>
   */
  JobRunId?: string;

  /**
   * @public
   * <p>The time that the run started for this data quality result.</p>
   */
  StartedOn?: Date;
}

/**
 * @public
 */
export interface ListDataQualityResultsResponse {
  /**
   * @public
   * <p>A list of <code>DataQualityResultDescription</code> objects.</p>
   */
  Results: DataQualityResultDescription[] | undefined;

  /**
   * @public
   * <p>A pagination token, if more results are available.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>A filter for listing data quality recommendation runs.</p>
 */
export interface DataQualityRuleRecommendationRunFilter {
  /**
   * @public
   * <p>Filter based on a specified data source (Glue table).</p>
   */
  DataSource: DataSource | undefined;

  /**
   * @public
   * <p>Filter based on time for results started before provided time.</p>
   */
  StartedBefore?: Date;

  /**
   * @public
   * <p>Filter based on time for results started after provided time.</p>
   */
  StartedAfter?: Date;
}

/**
 * @public
 */
export interface ListDataQualityRuleRecommendationRunsRequest {
  /**
   * @public
   * <p>The filter criteria.</p>
   */
  Filter?: DataQualityRuleRecommendationRunFilter;

  /**
   * @public
   * <p>A paginated token to offset the results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>Describes the result of a data quality rule recommendation run.</p>
 */
export interface DataQualityRuleRecommendationRunDescription {
  /**
   * @public
   * <p>The unique run identifier associated with this run.</p>
   */
  RunId?: string;

  /**
   * @public
   * <p>The status for this run.</p>
   */
  Status?: TaskStatusType | string;

  /**
   * @public
   * <p>The date and time when this run started.</p>
   */
  StartedOn?: Date;

  /**
   * @public
   * <p>The data source (Glue table) associated with the recommendation run.</p>
   */
  DataSource?: DataSource;
}

/**
 * @public
 */
export interface ListDataQualityRuleRecommendationRunsResponse {
  /**
   * @public
   * <p>A list of <code>DataQualityRuleRecommendationRunDescription</code> objects.</p>
   */
  Runs?: DataQualityRuleRecommendationRunDescription[];

  /**
   * @public
   * <p>A pagination token, if more results are available.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>The filter criteria.</p>
 */
export interface DataQualityRulesetEvaluationRunFilter {
  /**
   * @public
   * <p>Filter based on a data source (an Glue table) associated with the run.</p>
   */
  DataSource: DataSource | undefined;

  /**
   * @public
   * <p>Filter results by runs that started before this time.</p>
   */
  StartedBefore?: Date;

  /**
   * @public
   * <p>Filter results by runs that started after this time.</p>
   */
  StartedAfter?: Date;
}

/**
 * @public
 */
export interface ListDataQualityRulesetEvaluationRunsRequest {
  /**
   * @public
   * <p>The filter criteria.</p>
   */
  Filter?: DataQualityRulesetEvaluationRunFilter;

  /**
   * @public
   * <p>A paginated token to offset the results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>Describes the result of a data quality ruleset evaluation run.</p>
 */
export interface DataQualityRulesetEvaluationRunDescription {
  /**
   * @public
   * <p>The unique run identifier associated with this run.</p>
   */
  RunId?: string;

  /**
   * @public
   * <p>The status for this run.</p>
   */
  Status?: TaskStatusType | string;

  /**
   * @public
   * <p>The date and time when the run started.</p>
   */
  StartedOn?: Date;

  /**
   * @public
   * <p>The data source (an Glue table) associated with the run.</p>
   */
  DataSource?: DataSource;
}

/**
 * @public
 */
export interface ListDataQualityRulesetEvaluationRunsResponse {
  /**
   * @public
   * <p>A list of <code>DataQualityRulesetEvaluationRunDescription</code> objects representing data quality ruleset runs.</p>
   */
  Runs?: DataQualityRulesetEvaluationRunDescription[];

  /**
   * @public
   * <p>A pagination token, if more results are available.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>The criteria used to filter data quality rulesets.</p>
 */
export interface DataQualityRulesetFilterCriteria {
  /**
   * @public
   * <p>The name of the ruleset filter criteria.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The description of the ruleset filter criteria.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>Filter on rulesets created before this date.</p>
   */
  CreatedBefore?: Date;

  /**
   * @public
   * <p>Filter on rulesets created after this date.</p>
   */
  CreatedAfter?: Date;

  /**
   * @public
   * <p>Filter on rulesets last modified before this date.</p>
   */
  LastModifiedBefore?: Date;

  /**
   * @public
   * <p>Filter on rulesets last modified after this date.</p>
   */
  LastModifiedAfter?: Date;

  /**
   * @public
   * <p>The name and database name of the target table.</p>
   */
  TargetTable?: DataQualityTargetTable;
}

/**
 * @public
 */
export interface ListDataQualityRulesetsRequest {
  /**
   * @public
   * <p>A paginated token to offset the results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The filter criteria. </p>
   */
  Filter?: DataQualityRulesetFilterCriteria;

  /**
   * @public
   * <p>A list of key-value pair tags.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 * <p>Describes a data quality ruleset returned by <code>GetDataQualityRuleset</code>.</p>
 */
export interface DataQualityRulesetListDetails {
  /**
   * @public
   * <p>The name of the data quality ruleset.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>A description of the data quality ruleset.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The date and time the data quality ruleset was created.</p>
   */
  CreatedOn?: Date;

  /**
   * @public
   * <p>The date and time the data quality ruleset was last modified.</p>
   */
  LastModifiedOn?: Date;

  /**
   * @public
   * <p>An object representing an Glue table.</p>
   */
  TargetTable?: DataQualityTargetTable;

  /**
   * @public
   * <p>When a ruleset was created from a recommendation run, this run ID is generated to link the two together.</p>
   */
  RecommendationRunId?: string;

  /**
   * @public
   * <p>The number of rules in the ruleset.</p>
   */
  RuleCount?: number;
}

/**
 * @public
 */
export interface ListDataQualityRulesetsResponse {
  /**
   * @public
   * <p>A paginated list of rulesets for the specified list of Glue tables.</p>
   */
  Rulesets?: DataQualityRulesetListDetails[];

  /**
   * @public
   * <p>A pagination token, if more results are available.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListDevEndpointsRequest {
  /**
   * @public
   * <p>A continuation token, if this is a continuation request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum size of a list to return.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>Specifies to return only these tagged resources.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface ListDevEndpointsResponse {
  /**
   * @public
   * <p>The names of all the <code>DevEndpoint</code>s in the account, or the
   *         <code>DevEndpoint</code>s with the specified tags.</p>
   */
  DevEndpointNames?: string[];

  /**
   * @public
   * <p>A continuation token, if the returned list does not contain the
   *       last metric available.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListJobsRequest {
  /**
   * @public
   * <p>A continuation token, if this is a continuation request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum size of a list to return.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>Specifies to return only these tagged resources.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface ListJobsResponse {
  /**
   * @public
   * <p>The names of all jobs in the account, or the jobs with the specified tags.</p>
   */
  JobNames?: string[];

  /**
   * @public
   * <p>A continuation token, if the returned list does not contain the
   *       last metric available.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListMLTransformsRequest {
  /**
   * @public
   * <p>A continuation token, if this is a continuation request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum size of a list to return.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>A <code>TransformFilterCriteria</code> used to filter the machine learning transforms.</p>
   */
  Filter?: TransformFilterCriteria;

  /**
   * @public
   * <p>A <code>TransformSortCriteria</code> used to sort the machine learning transforms.</p>
   */
  Sort?: TransformSortCriteria;

  /**
   * @public
   * <p>Specifies to return only these tagged resources.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface ListMLTransformsResponse {
  /**
   * @public
   * <p>The identifiers of all the machine learning transforms in the account, or the
   *         machine learning transforms with the specified tags.</p>
   */
  TransformIds: string[] | undefined;

  /**
   * @public
   * <p>A continuation token, if the returned list does not contain the
   *       last metric available.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListRegistriesInput {
  /**
   * @public
   * <p>Maximum number of results required per page. If the value is not supplied, this will be defaulted to 25 per page.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>A continuation token, if this is a continuation call.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>A structure containing the details for a registry.</p>
 */
export interface RegistryListItem {
  /**
   * @public
   * <p>The name of the registry.</p>
   */
  RegistryName?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the registry.</p>
   */
  RegistryArn?: string;

  /**
   * @public
   * <p>A description of the registry.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The status of the registry.</p>
   */
  Status?: RegistryStatus | string;

  /**
   * @public
   * <p>The data the registry was created.</p>
   */
  CreatedTime?: string;

  /**
   * @public
   * <p>The date the registry was updated.</p>
   */
  UpdatedTime?: string;
}

/**
 * @public
 */
export interface ListRegistriesResponse {
  /**
   * @public
   * <p>An array of <code>RegistryDetailedListItem</code> objects containing minimal details of each registry.</p>
   */
  Registries?: RegistryListItem[];

  /**
   * @public
   * <p>A continuation token for paginating the returned list of tokens, returned if the current segment of the list is not the last.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListSchemasInput {
  /**
   * @public
   * <p>A wrapper structure that may contain the registry name and Amazon Resource Name (ARN).</p>
   */
  RegistryId?: RegistryId;

  /**
   * @public
   * <p>Maximum number of results required per page. If the value is not supplied, this will be defaulted to 25 per page.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>A continuation token, if this is a continuation call.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>An object that contains minimal details for a schema.</p>
 */
export interface SchemaListItem {
  /**
   * @public
   * <p>the name of the registry where the schema resides.</p>
   */
  RegistryName?: string;

  /**
   * @public
   * <p>The name of the schema.</p>
   */
  SchemaName?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the schema.</p>
   */
  SchemaArn?: string;

  /**
   * @public
   * <p>A description for the schema.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The status of the schema.</p>
   */
  SchemaStatus?: SchemaStatus | string;

  /**
   * @public
   * <p>The date and time that a schema was created.</p>
   */
  CreatedTime?: string;

  /**
   * @public
   * <p>The date and time that a schema was updated.</p>
   */
  UpdatedTime?: string;
}

/**
 * @public
 */
export interface ListSchemasResponse {
  /**
   * @public
   * <p>An array of <code>SchemaListItem</code> objects containing details of each schema.</p>
   */
  Schemas?: SchemaListItem[];

  /**
   * @public
   * <p>A continuation token for paginating the returned list of tokens, returned if the current segment of the list is not the last.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListSchemaVersionsInput {
  /**
   * @public
   * <p>This is a wrapper structure to contain schema identity fields. The structure contains:</p>
   *          <ul>
   *             <li>
   *                <p>SchemaId$SchemaArn: The Amazon Resource Name (ARN) of the schema. Either <code>SchemaArn</code> or <code>SchemaName</code> and <code>RegistryName</code> has to be provided.</p>
   *             </li>
   *             <li>
   *                <p>SchemaId$SchemaName: The name of the schema. Either <code>SchemaArn</code> or <code>SchemaName</code> and <code>RegistryName</code> has to be provided.</p>
   *             </li>
   *          </ul>
   */
  SchemaId: SchemaId | undefined;

  /**
   * @public
   * <p>Maximum number of results required per page. If the value is not supplied, this will be defaulted to 25 per page.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>A continuation token, if this is a continuation call.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>An object containing the details about a schema version.</p>
 */
export interface SchemaVersionListItem {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the schema.</p>
   */
  SchemaArn?: string;

  /**
   * @public
   * <p>The unique identifier of the schema version.</p>
   */
  SchemaVersionId?: string;

  /**
   * @public
   * <p>The version number of the schema.</p>
   */
  VersionNumber?: number;

  /**
   * @public
   * <p>The status of the schema version.</p>
   */
  Status?: SchemaVersionStatus | string;

  /**
   * @public
   * <p>The date and time the schema version was created.</p>
   */
  CreatedTime?: string;
}

/**
 * @public
 */
export interface ListSchemaVersionsResponse {
  /**
   * @public
   * <p>An array of <code>SchemaVersionList</code> objects containing details of each schema version.</p>
   */
  Schemas?: SchemaVersionListItem[];

  /**
   * @public
   * <p>A continuation token for paginating the returned list of tokens, returned if the current segment of the list is not the last.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListSessionsRequest {
  /**
   * @public
   * <p>The token for the next set of results, or null if there are no more result. </p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results. </p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>Tags belonging to the session. </p>
   */
  Tags?: Record<string, string>;

  /**
   * @public
   * <p>The origin of the request. </p>
   */
  RequestOrigin?: string;
}

/**
 * @public
 */
export interface ListSessionsResponse {
  /**
   * @public
   * <p>Returns the ID of the session. </p>
   */
  Ids?: string[];

  /**
   * @public
   * <p>Returns the session object. </p>
   */
  Sessions?: Session[];

  /**
   * @public
   * <p>The token for the next set of results, or null if there are no more result. </p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListStatementsRequest {
  /**
   * @public
   * <p>The Session ID of the statements.</p>
   */
  SessionId: string | undefined;

  /**
   * @public
   * <p>The origin of the request to list statements.</p>
   */
  RequestOrigin?: string;

  /**
   * @public
   * <p>A continuation token, if this is a continuation call.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListStatementsResponse {
  /**
   * @public
   * <p>Returns the list of statements.</p>
   */
  Statements?: Statement[];

  /**
   * @public
   * <p>A continuation token, if not all statements have yet been returned.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListTriggersRequest {
  /**
   * @public
   * <p>A continuation token, if this is a continuation request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p> The name of the job for which to retrieve triggers. The trigger that can start this job
   *       is returned. If there is no such trigger, all triggers are returned.</p>
   */
  DependentJobName?: string;

  /**
   * @public
   * <p>The maximum size of a list to return.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>Specifies to return only these tagged resources.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface ListTriggersResponse {
  /**
   * @public
   * <p>The names of all triggers in the account, or the triggers with the specified tags.</p>
   */
  TriggerNames?: string[];

  /**
   * @public
   * <p>A continuation token, if the returned list does not contain the
   *       last metric available.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListWorkflowsRequest {
  /**
   * @public
   * <p>A continuation token, if this is a continuation request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum size of a list to return.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListWorkflowsResponse {
  /**
   * @public
   * <p>List of names of workflows in the account.</p>
   */
  Workflows?: string[];

  /**
   * @public
   * <p>A continuation token, if not all workflow names have been returned.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface PutDataCatalogEncryptionSettingsRequest {
  /**
   * @public
   * <p>The ID of the Data Catalog to set the security configuration for. If none is provided, the
   *       Amazon Web Services account ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * @public
   * <p>The security configuration to set.</p>
   */
  DataCatalogEncryptionSettings: DataCatalogEncryptionSettings | undefined;
}

/**
 * @public
 */
export interface PutDataCatalogEncryptionSettingsResponse {}

/**
 * @public
 * @enum
 */
export const EnableHybridValues = {
  FALSE: "FALSE",
  TRUE: "TRUE",
} as const;

/**
 * @public
 */
export type EnableHybridValues = (typeof EnableHybridValues)[keyof typeof EnableHybridValues];

/**
 * @public
 * @enum
 */
export const ExistCondition = {
  MUST_EXIST: "MUST_EXIST",
  NONE: "NONE",
  NOT_EXIST: "NOT_EXIST",
} as const;

/**
 * @public
 */
export type ExistCondition = (typeof ExistCondition)[keyof typeof ExistCondition];

/**
 * @public
 */
export interface PutResourcePolicyRequest {
  /**
   * @public
   * <p>Contains the policy document to set, in JSON format.</p>
   */
  PolicyInJson: string | undefined;

  /**
   * @public
   * <p>Do not use. For internal use only.</p>
   */
  ResourceArn?: string;

  /**
   * @public
   * <p>The hash value returned when the previous policy was set using
   *         <code>PutResourcePolicy</code>. Its purpose is to prevent concurrent modifications of a
   *       policy. Do not use this parameter if no previous policy has been set.</p>
   */
  PolicyHashCondition?: string;

  /**
   * @public
   * <p>A value of <code>MUST_EXIST</code> is used to update a policy. A value of
   *         <code>NOT_EXIST</code> is used to create a new policy. If a value of <code>NONE</code> or a
   *       null value is used, the call does not depend on the existence of a policy.</p>
   */
  PolicyExistsCondition?: ExistCondition | string;

  /**
   * @public
   * <p>If <code>'TRUE'</code>, indicates that you are using both methods to grant cross-account
   *       access to Data Catalog resources:</p>
   *          <ul>
   *             <li>
   *                <p>By directly updating the resource policy with <code>PutResourePolicy</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>By using the <b>Grant permissions</b> command on the Amazon Web Services Management Console.</p>
   *             </li>
   *          </ul>
   *          <p>Must be set to <code>'TRUE'</code> if you have already used the Management Console to
   *       grant cross-account access, otherwise the call fails. Default is 'FALSE'.</p>
   */
  EnableHybrid?: EnableHybridValues | string;
}

/**
 * @public
 */
export interface PutResourcePolicyResponse {
  /**
   * @public
   * <p>A hash of the policy that has just been set. This must
   *       be included in a subsequent call that overwrites or updates
   *       this policy.</p>
   */
  PolicyHash?: string;
}

/**
 * @public
 * <p>A structure containing a key value pair for metadata.</p>
 */
export interface MetadataKeyValuePair {
  /**
   * @public
   * <p>A metadata key.</p>
   */
  MetadataKey?: string;

  /**
   * @public
   * <p>A metadata key’s corresponding value.</p>
   */
  MetadataValue?: string;
}

/**
 * @public
 */
export interface PutSchemaVersionMetadataInput {
  /**
   * @public
   * <p>The unique ID for the schema.</p>
   */
  SchemaId?: SchemaId;

  /**
   * @public
   * <p>The version number of the schema.</p>
   */
  SchemaVersionNumber?: SchemaVersionNumber;

  /**
   * @public
   * <p>The unique version ID of the schema version.</p>
   */
  SchemaVersionId?: string;

  /**
   * @public
   * <p>The metadata key's corresponding value.</p>
   */
  MetadataKeyValue: MetadataKeyValuePair | undefined;
}

/**
 * @public
 */
export interface PutSchemaVersionMetadataResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the schema.</p>
   */
  SchemaArn?: string;

  /**
   * @public
   * <p>The name for the schema.</p>
   */
  SchemaName?: string;

  /**
   * @public
   * <p>The name for the registry.</p>
   */
  RegistryName?: string;

  /**
   * @public
   * <p>The latest version of the schema.</p>
   */
  LatestVersion?: boolean;

  /**
   * @public
   * <p>The version number of the schema.</p>
   */
  VersionNumber?: number;

  /**
   * @public
   * <p>The unique version ID of the schema version.</p>
   */
  SchemaVersionId?: string;

  /**
   * @public
   * <p>The metadata key.</p>
   */
  MetadataKey?: string;

  /**
   * @public
   * <p>The value of the metadata key.</p>
   */
  MetadataValue?: string;
}

/**
 * @public
 */
export interface PutWorkflowRunPropertiesRequest {
  /**
   * @public
   * <p>Name of the workflow which was run.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The ID of the workflow run for which the run properties should be updated.</p>
   */
  RunId: string | undefined;

  /**
   * @public
   * <p>The properties to put for the specified run.</p>
   */
  RunProperties: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface PutWorkflowRunPropertiesResponse {}

/**
 * @public
 */
export interface QuerySchemaVersionMetadataInput {
  /**
   * @public
   * <p>A wrapper structure that may contain the schema name and Amazon Resource Name (ARN).</p>
   */
  SchemaId?: SchemaId;

  /**
   * @public
   * <p>The version number of the schema.</p>
   */
  SchemaVersionNumber?: SchemaVersionNumber;

  /**
   * @public
   * <p>The unique version ID of the schema version.</p>
   */
  SchemaVersionId?: string;

  /**
   * @public
   * <p>Search key-value pairs for metadata, if they are not provided all the metadata information will be fetched.</p>
   */
  MetadataList?: MetadataKeyValuePair[];

  /**
   * @public
   * <p>Maximum number of results required per page. If the value is not supplied, this will be defaulted to 25 per page.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>A continuation token, if this is a continuation call.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>A structure containing other metadata for a schema version belonging to the same metadata key.</p>
 */
export interface OtherMetadataValueListItem {
  /**
   * @public
   * <p>The metadata key’s corresponding value for the other metadata belonging to the same metadata key.</p>
   */
  MetadataValue?: string;

  /**
   * @public
   * <p>The time at which the entry was created.</p>
   */
  CreatedTime?: string;
}

/**
 * @public
 * <p>A structure containing metadata information for a schema version.</p>
 */
export interface MetadataInfo {
  /**
   * @public
   * <p>The metadata key’s corresponding value.</p>
   */
  MetadataValue?: string;

  /**
   * @public
   * <p>The time at which the entry was created.</p>
   */
  CreatedTime?: string;

  /**
   * @public
   * <p>Other metadata belonging to the same metadata key.</p>
   */
  OtherMetadataValueList?: OtherMetadataValueListItem[];
}

/**
 * @public
 */
export interface QuerySchemaVersionMetadataResponse {
  /**
   * @public
   * <p>A map of a metadata key and associated values.</p>
   */
  MetadataInfoMap?: Record<string, MetadataInfo>;

  /**
   * @public
   * <p>The unique version ID of the schema version.</p>
   */
  SchemaVersionId?: string;

  /**
   * @public
   * <p>A continuation token for paginating the returned list of tokens, returned if the current segment of the list is not the last.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface RegisterSchemaVersionInput {
  /**
   * @public
   * <p>This is a wrapper structure to contain schema identity fields. The structure contains:</p>
   *          <ul>
   *             <li>
   *                <p>SchemaId$SchemaArn: The Amazon Resource Name (ARN) of the schema. Either <code>SchemaArn</code> or <code>SchemaName</code> and <code>RegistryName</code> has to be provided.</p>
   *             </li>
   *             <li>
   *                <p>SchemaId$SchemaName: The name of the schema. Either <code>SchemaArn</code> or <code>SchemaName</code> and <code>RegistryName</code> has to be provided.</p>
   *             </li>
   *          </ul>
   */
  SchemaId: SchemaId | undefined;

  /**
   * @public
   * <p>The schema definition using the <code>DataFormat</code> setting for the <code>SchemaName</code>.</p>
   */
  SchemaDefinition: string | undefined;
}

/**
 * @public
 */
export interface RegisterSchemaVersionResponse {
  /**
   * @public
   * <p>The unique ID that represents the version of this schema.</p>
   */
  SchemaVersionId?: string;

  /**
   * @public
   * <p>The version of this schema (for sync flow only, in case this is the first version).</p>
   */
  VersionNumber?: number;

  /**
   * @public
   * <p>The status of the schema version.</p>
   */
  Status?: SchemaVersionStatus | string;
}

/**
 * @public
 */
export interface RemoveSchemaVersionMetadataInput {
  /**
   * @public
   * <p>A wrapper structure that may contain the schema name and Amazon Resource Name (ARN).</p>
   */
  SchemaId?: SchemaId;

  /**
   * @public
   * <p>The version number of the schema.</p>
   */
  SchemaVersionNumber?: SchemaVersionNumber;

  /**
   * @public
   * <p>The unique version ID of the schema version.</p>
   */
  SchemaVersionId?: string;

  /**
   * @public
   * <p>The value of the metadata key.</p>
   */
  MetadataKeyValue: MetadataKeyValuePair | undefined;
}

/**
 * @public
 */
export interface RemoveSchemaVersionMetadataResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the schema.</p>
   */
  SchemaArn?: string;

  /**
   * @public
   * <p>The name of the schema.</p>
   */
  SchemaName?: string;

  /**
   * @public
   * <p>The name of the registry.</p>
   */
  RegistryName?: string;

  /**
   * @public
   * <p>The latest version of the schema.</p>
   */
  LatestVersion?: boolean;

  /**
   * @public
   * <p>The version number of the schema.</p>
   */
  VersionNumber?: number;

  /**
   * @public
   * <p>The version ID for the schema version.</p>
   */
  SchemaVersionId?: string;

  /**
   * @public
   * <p>The metadata key.</p>
   */
  MetadataKey?: string;

  /**
   * @public
   * <p>The value of the metadata key.</p>
   */
  MetadataValue?: string;
}

/**
 * @public
 */
export interface ResetJobBookmarkRequest {
  /**
   * @public
   * <p>The name of the job in question.</p>
   */
  JobName: string | undefined;

  /**
   * @public
   * <p>The unique run identifier associated with this job run.</p>
   */
  RunId?: string;
}

/**
 * @public
 */
export interface ResetJobBookmarkResponse {
  /**
   * @public
   * <p>The reset bookmark entry.</p>
   */
  JobBookmarkEntry?: JobBookmarkEntry;
}

/**
 * @public
 * <p>Too many jobs are being run concurrently.</p>
 */
export class ConcurrentRunsExceededException extends __BaseException {
  readonly name: "ConcurrentRunsExceededException" = "ConcurrentRunsExceededException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>A message describing the problem.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConcurrentRunsExceededException, __BaseException>) {
    super({
      name: "ConcurrentRunsExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConcurrentRunsExceededException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>The workflow is in an invalid state to perform a requested operation.</p>
 */
export class IllegalWorkflowStateException extends __BaseException {
  readonly name: "IllegalWorkflowStateException" = "IllegalWorkflowStateException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>A message describing the problem.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<IllegalWorkflowStateException, __BaseException>) {
    super({
      name: "IllegalWorkflowStateException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, IllegalWorkflowStateException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface ResumeWorkflowRunRequest {
  /**
   * @public
   * <p>The name of the workflow to resume.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The ID of the workflow run to resume.</p>
   */
  RunId: string | undefined;

  /**
   * @public
   * <p>A list of the node IDs for the nodes you want to restart. The nodes that are to be restarted must have a run attempt in the original run.</p>
   */
  NodeIds: string[] | undefined;
}

/**
 * @public
 */
export interface ResumeWorkflowRunResponse {
  /**
   * @public
   * <p>The new ID assigned to the resumed workflow run. Each resume of a workflow run will have a new run ID.</p>
   */
  RunId?: string;

  /**
   * @public
   * <p>A list of the node IDs for the nodes that were actually restarted.</p>
   */
  NodeIds?: string[];
}

/**
 * @public
 */
export interface RunStatementRequest {
  /**
   * @public
   * <p>The Session Id of the statement to be run.</p>
   */
  SessionId: string | undefined;

  /**
   * @public
   * <p>The statement code to be run.</p>
   */
  Code: string | undefined;

  /**
   * @public
   * <p>The origin of the request.</p>
   */
  RequestOrigin?: string;
}

/**
 * @public
 */
export interface RunStatementResponse {
  /**
   * @public
   * <p>Returns the Id of the statement that was run.</p>
   */
  Id?: number;
}

/**
 * @public
 * @enum
 */
export const Comparator = {
  EQUALS: "EQUALS",
  GREATER_THAN: "GREATER_THAN",
  GREATER_THAN_EQUALS: "GREATER_THAN_EQUALS",
  LESS_THAN: "LESS_THAN",
  LESS_THAN_EQUALS: "LESS_THAN_EQUALS",
} as const;

/**
 * @public
 */
export type Comparator = (typeof Comparator)[keyof typeof Comparator];

/**
 * @public
 * <p>Defines a property predicate.</p>
 */
export interface PropertyPredicate {
  /**
   * @public
   * <p>The key of the property.</p>
   */
  Key?: string;

  /**
   * @public
   * <p>The value of the property.</p>
   */
  Value?: string;

  /**
   * @public
   * <p>The comparator used to compare this property to others.</p>
   */
  Comparator?: Comparator | string;
}

/**
 * @public
 * @enum
 */
export const Sort = {
  ASCENDING: "ASC",
  DESCENDING: "DESC",
} as const;

/**
 * @public
 */
export type Sort = (typeof Sort)[keyof typeof Sort];

/**
 * @public
 * <p>Specifies a field to sort by and a sort order.</p>
 */
export interface SortCriterion {
  /**
   * @public
   * <p>The name of the field on which to sort.</p>
   */
  FieldName?: string;

  /**
   * @public
   * <p>An ascending or descending sort.</p>
   */
  Sort?: Sort | string;
}

/**
 * @public
 */
export interface SearchTablesRequest {
  /**
   * @public
   * <p>A unique identifier, consisting of <code>
   *                <i>account_id</i>
   *             </code>.</p>
   */
  CatalogId?: string;

  /**
   * @public
   * <p>A continuation token, included if this is a continuation call.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>A list of key-value pairs, and a comparator used to filter the search results. Returns all entities matching the predicate.</p>
   *          <p>The <code>Comparator</code> member of the <code>PropertyPredicate</code> struct is used only for time fields, and can be omitted for other field types. Also, when comparing string values, such as when <code>Key=Name</code>, a fuzzy match algorithm is used. The <code>Key</code> field (for example, the value of the <code>Name</code> field) is split on certain punctuation characters, for example, -, :, #, etc. into tokens. Then each token is exact-match compared with the <code>Value</code> member of <code>PropertyPredicate</code>. For example, if <code>Key=Name</code> and <code>Value=link</code>, tables named <code>customer-link</code> and <code>xx-link-yy</code> are returned, but <code>xxlinkyy</code> is not returned.</p>
   */
  Filters?: PropertyPredicate[];

  /**
   * @public
   * <p>A string used for a text search.</p>
   *          <p>Specifying a value in quotes filters based on an exact match to the value.</p>
   */
  SearchText?: string;

  /**
   * @public
   * <p>A list of criteria for sorting the results by a field name, in an ascending or descending order.</p>
   */
  SortCriteria?: SortCriterion[];

  /**
   * @public
   * <p>The maximum number of tables to return in a single response.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>Allows you to specify that you want to search the tables shared with your account. The allowable values are <code>FOREIGN</code> or <code>ALL</code>. </p>
   *          <ul>
   *             <li>
   *                <p>If set to <code>FOREIGN</code>, will search the tables shared with your account. </p>
   *             </li>
   *             <li>
   *                <p>If set to <code>ALL</code>, will search the tables shared with your account, as well as the tables in yor local account. </p>
   *             </li>
   *          </ul>
   */
  ResourceShareType?: ResourceShareType | string;
}

/**
 * @public
 */
export interface SearchTablesResponse {
  /**
   * @public
   * <p>A continuation token, present if the current list segment is not the last.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>A list of the requested <code>Table</code> objects. The <code>SearchTables</code> response returns only the tables that you have access to.</p>
   */
  TableList?: Table[];
}

/**
 * @public
 * <p>The blueprint is in an invalid state to perform a requested operation.</p>
 */
export class IllegalBlueprintStateException extends __BaseException {
  readonly name: "IllegalBlueprintStateException" = "IllegalBlueprintStateException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>A message describing the problem.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<IllegalBlueprintStateException, __BaseException>) {
    super({
      name: "IllegalBlueprintStateException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, IllegalBlueprintStateException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface StartBlueprintRunRequest {
  /**
   * @public
   * <p>The name of the blueprint.</p>
   */
  BlueprintName: string | undefined;

  /**
   * @public
   * <p>Specifies the parameters as a <code>BlueprintParameters</code> object.</p>
   */
  Parameters?: string;

  /**
   * @public
   * <p>Specifies the IAM role used to create the workflow.</p>
   */
  RoleArn: string | undefined;
}

/**
 * @public
 */
export interface StartBlueprintRunResponse {
  /**
   * @public
   * <p>The run ID for this blueprint run.</p>
   */
  RunId?: string;
}

/**
 * @public
 */
export interface StartCrawlerRequest {
  /**
   * @public
   * <p>Name of the crawler to start.</p>
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface StartCrawlerResponse {}

/**
 * @public
 * <p>There is no applicable schedule.</p>
 */
export class NoScheduleException extends __BaseException {
  readonly name: "NoScheduleException" = "NoScheduleException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>A message describing the problem.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NoScheduleException, __BaseException>) {
    super({
      name: "NoScheduleException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NoScheduleException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>The specified scheduler is already running.</p>
 */
export class SchedulerRunningException extends __BaseException {
  readonly name: "SchedulerRunningException" = "SchedulerRunningException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>A message describing the problem.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SchedulerRunningException, __BaseException>) {
    super({
      name: "SchedulerRunningException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SchedulerRunningException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface StartCrawlerScheduleRequest {
  /**
   * @public
   * <p>Name of the crawler to schedule.</p>
   */
  CrawlerName: string | undefined;
}

/**
 * @public
 */
export interface StartCrawlerScheduleResponse {}

/**
 * @public
 */
export interface StartDataQualityRuleRecommendationRunRequest {
  /**
   * @public
   * <p>The data source (Glue table) associated with this run.</p>
   */
  DataSource: DataSource | undefined;

  /**
   * @public
   * <p>An IAM role supplied to encrypt the results of the run.</p>
   */
  Role: string | undefined;

  /**
   * @public
   * <p>The number of <code>G.1X</code> workers to be used in the run. The default is 5.</p>
   */
  NumberOfWorkers?: number;

  /**
   * @public
   * <p>The timeout for a run in minutes. This is the maximum time that a run can consume resources before it is terminated and enters <code>TIMEOUT</code> status. The default is 2,880 minutes (48 hours).</p>
   */
  Timeout?: number;

  /**
   * @public
   * <p>A name for the ruleset.</p>
   */
  CreatedRulesetName?: string;

  /**
   * @public
   * <p>Used for idempotency and is recommended to be set to a random ID (such as a UUID) to avoid creating or starting multiple instances of the same resource.</p>
   */
  ClientToken?: string;
}

/**
 * @public
 */
export interface StartDataQualityRuleRecommendationRunResponse {
  /**
   * @public
   * <p>The unique run identifier associated with this run.</p>
   */
  RunId?: string;
}

/**
 * @public
 */
export interface StartDataQualityRulesetEvaluationRunRequest {
  /**
   * @public
   * <p>The data source (Glue table) associated with this run.</p>
   */
  DataSource: DataSource | undefined;

  /**
   * @public
   * <p>An IAM role supplied to encrypt the results of the run.</p>
   */
  Role: string | undefined;

  /**
   * @public
   * <p>The number of <code>G.1X</code> workers to be used in the run. The default is 5.</p>
   */
  NumberOfWorkers?: number;

  /**
   * @public
   * <p>The timeout for a run in minutes. This is the maximum time that a run can consume resources before it is terminated and enters <code>TIMEOUT</code> status. The default is 2,880 minutes (48 hours).</p>
   */
  Timeout?: number;

  /**
   * @public
   * <p>Used for idempotency and is recommended to be set to a random ID (such as a UUID) to avoid creating or starting multiple instances of the same resource.</p>
   */
  ClientToken?: string;

  /**
   * @public
   * <p>Additional run options you can specify for an evaluation run.</p>
   */
  AdditionalRunOptions?: DataQualityEvaluationRunAdditionalRunOptions;

  /**
   * @public
   * <p>A list of ruleset names.</p>
   */
  RulesetNames: string[] | undefined;

  /**
   * @public
   * <p>A map of reference strings to additional data sources you can specify for an evaluation run.</p>
   */
  AdditionalDataSources?: Record<string, DataSource>;
}

/**
 * @public
 */
export interface StartDataQualityRulesetEvaluationRunResponse {
  /**
   * @public
   * <p>The unique run identifier associated with this run.</p>
   */
  RunId?: string;
}

/**
 * @public
 */
export interface StartExportLabelsTaskRunRequest {
  /**
   * @public
   * <p>The unique identifier of the machine learning transform.</p>
   */
  TransformId: string | undefined;

  /**
   * @public
   * <p>The Amazon S3 path where you export the labels.</p>
   */
  OutputS3Path: string | undefined;
}

/**
 * @public
 */
export interface StartExportLabelsTaskRunResponse {
  /**
   * @public
   * <p>The unique identifier for the task run.</p>
   */
  TaskRunId?: string;
}

/**
 * @public
 */
export interface StartImportLabelsTaskRunRequest {
  /**
   * @public
   * <p>The unique identifier of the machine learning transform.</p>
   */
  TransformId: string | undefined;

  /**
   * @public
   * <p>The Amazon Simple Storage Service (Amazon S3) path from where you import the
   *       labels.</p>
   */
  InputS3Path: string | undefined;

  /**
   * @public
   * <p>Indicates whether to overwrite your existing labels.</p>
   */
  ReplaceAllLabels?: boolean;
}

/**
 * @public
 */
export interface StartImportLabelsTaskRunResponse {
  /**
   * @public
   * <p>The unique identifier for the task run.</p>
   */
  TaskRunId?: string;
}

/**
 * @public
 */
export interface StartJobRunRequest {
  /**
   * @public
   * <p>The name of the job definition to use.</p>
   */
  JobName: string | undefined;

  /**
   * @public
   * <p>The ID of a previous <code>JobRun</code> to retry.</p>
   */
  JobRunId?: string;

  /**
   * @public
   * <p>The job arguments associated with this run. For this job run, they replace the default
   *       arguments set in the job definition itself.</p>
   *          <p>You can specify arguments here that your own job-execution script
   *       consumes, as well as arguments that Glue itself consumes.</p>
   *          <p>Job arguments may be logged. Do not pass plaintext secrets as arguments. Retrieve secrets
   *       from a Glue Connection, Secrets Manager or other secret management
   *       mechanism if you intend to keep them within the Job. </p>
   *          <p>For information about how to specify and consume your own Job arguments, see the <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-python-calling.html">Calling Glue APIs in Python</a> topic in the developer guide.</p>
   *          <p>For information about the arguments you can provide to this field when configuring Spark jobs,
   *      see the <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-etl-glue-arguments.html">Special Parameters Used by Glue</a> topic in the developer guide.</p>
   *          <p>For information about the arguments you can provide to this field when configuring Ray
   *       jobs, see <a href="https://docs.aws.amazon.com/glue/latest/dg/author-job-ray-job-parameters.html">Using
   *       job parameters in Ray jobs</a> in the developer guide.</p>
   */
  Arguments?: Record<string, string>;

  /**
   * @public
   * @deprecated
   *
   * <p>This field is deprecated. Use <code>MaxCapacity</code> instead.</p>
   *          <p>The number of Glue data processing units (DPUs) to allocate to this JobRun.
   *       You can allocate a minimum of 2 DPUs; the default is 10. A DPU is a relative measure
   *       of processing power that consists of 4 vCPUs of compute capacity and 16 GB of memory.
   *       For more information, see the <a href="https://aws.amazon.com/glue/pricing/">Glue
   *         pricing page</a>.</p>
   */
  AllocatedCapacity?: number;

  /**
   * @public
   * <p>The <code>JobRun</code> timeout in minutes. This is the maximum time that a job run can
   *       consume resources before it is terminated and enters <code>TIMEOUT</code> status. This value overrides the timeout value set in the parent job.</p>
   *          <p>Streaming jobs do not have a timeout. The default for non-streaming jobs is 2,880 minutes (48 hours).</p>
   */
  Timeout?: number;

  /**
   * @public
   * <p>For Glue version 1.0 or earlier jobs, using the standard worker type, the number of
   *       Glue data processing units (DPUs) that can be allocated when this job runs. A DPU is
   *       a relative measure of processing power that consists of 4 vCPUs of compute capacity and 16 GB
   *       of memory. For more information, see the <a href="https://aws.amazon.com/glue/pricing/">
   *         Glue pricing page</a>.</p>
   *          <p>For Glue version 2.0+ jobs, you cannot specify a <code>Maximum capacity</code>.
   *       Instead, you should specify a <code>Worker type</code> and the <code>Number of workers</code>.</p>
   *          <p>Do not set <code>MaxCapacity</code> if using <code>WorkerType</code> and <code>NumberOfWorkers</code>.</p>
   *          <p>The value that can be allocated for <code>MaxCapacity</code> depends on whether you are
   *       running a Python shell job, an Apache Spark ETL job, or an Apache Spark streaming ETL
   *       job:</p>
   *          <ul>
   *             <li>
   *                <p>When you specify a Python shell job (<code>JobCommand.Name</code>="pythonshell"), you can
   *           allocate either 0.0625 or 1 DPU. The default is 0.0625 DPU.</p>
   *             </li>
   *             <li>
   *                <p>When you specify an Apache Spark ETL job (<code>JobCommand.Name</code>="glueetl") or Apache
   *         Spark streaming ETL job (<code>JobCommand.Name</code>="gluestreaming"), you can allocate from 2 to 100 DPUs.
   *         The default is 10 DPUs. This job type cannot have a fractional DPU allocation.</p>
   *             </li>
   *          </ul>
   */
  MaxCapacity?: number;

  /**
   * @public
   * <p>The name of the <code>SecurityConfiguration</code> structure to be used with this job
   *       run.</p>
   */
  SecurityConfiguration?: string;

  /**
   * @public
   * <p>Specifies configuration properties of a job run notification.</p>
   */
  NotificationProperty?: NotificationProperty;

  /**
   * @public
   * <p>The type of predefined worker that is allocated when a job runs. Accepts a value of
   *           G.1X, G.2X, G.4X, G.8X or G.025X for Spark jobs. Accepts the value Z.2X for Ray jobs.</p>
   *          <ul>
   *             <li>
   *                <p>For the <code>G.1X</code> worker type, each worker maps to 1 DPU (4 vCPUs, 16 GB of memory) with 84GB disk (approximately 34GB free), and provides 1 executor per worker. We recommend this worker type for workloads such as data transforms, joins, and queries, to offers a scalable and cost effective way to run most jobs.</p>
   *             </li>
   *             <li>
   *                <p>For the <code>G.2X</code> worker type, each worker maps to 2 DPU (8 vCPUs, 32 GB of memory) with 128GB disk (approximately 77GB free), and provides 1 executor per worker. We recommend this worker type for workloads such as data transforms, joins, and queries, to offers a scalable and cost effective way to run most jobs.</p>
   *             </li>
   *             <li>
   *                <p>For the <code>G.4X</code> worker type, each worker maps to 4 DPU (16 vCPUs, 64 GB of memory) with 256GB disk (approximately 235GB free), and provides 1 executor per worker. We recommend this worker type for jobs whose workloads contain your most demanding transforms, aggregations, joins, and queries. This worker type is available only for Glue version 3.0 or later Spark ETL jobs in the following Amazon Web Services Regions: US East (Ohio), US East (N. Virginia), US West (Oregon), Asia Pacific (Singapore), Asia Pacific (Sydney), Asia Pacific (Tokyo), Canada (Central), Europe (Frankfurt), Europe (Ireland), and Europe (Stockholm).</p>
   *             </li>
   *             <li>
   *                <p>For the <code>G.8X</code> worker type, each worker maps to 8 DPU (32 vCPUs, 128 GB of memory) with 512GB disk (approximately 487GB free), and provides 1 executor per worker. We recommend this worker type for jobs whose workloads contain your most demanding transforms, aggregations, joins, and queries. This worker type is available only for Glue version 3.0 or later Spark ETL jobs, in the same Amazon Web Services Regions as supported for the <code>G.4X</code> worker type.</p>
   *             </li>
   *             <li>
   *                <p>For the <code>G.025X</code> worker type, each worker maps to 0.25 DPU (2 vCPUs, 4 GB of memory) with 84GB disk (approximately 34GB free), and provides 1 executor per worker. We recommend this worker type for low volume streaming jobs. This worker type is only available for Glue version 3.0 streaming jobs.</p>
   *             </li>
   *             <li>
   *                <p>For the <code>Z.2X</code> worker type, each worker maps to 2 M-DPU (8vCPUs, 64 GB of memory) with 128 GB disk (approximately 120GB free), and provides up to 8 Ray workers based on the autoscaler.</p>
   *             </li>
   *          </ul>
   */
  WorkerType?: WorkerType | string;

  /**
   * @public
   * <p>The number of workers of a defined <code>workerType</code> that are allocated when a job runs.</p>
   */
  NumberOfWorkers?: number;

  /**
   * @public
   * <p>Indicates whether the job is run with a standard or flexible execution class. The standard execution-class is ideal for time-sensitive workloads that require fast job startup and dedicated resources.</p>
   *          <p>The flexible execution class is appropriate for time-insensitive jobs whose start and completion times may vary. </p>
   *          <p>Only jobs with Glue version 3.0 and above and command type <code>glueetl</code> will be allowed to set <code>ExecutionClass</code> to <code>FLEX</code>. The flexible execution class is available for Spark jobs.</p>
   */
  ExecutionClass?: ExecutionClass | string;
}

/**
 * @public
 */
export interface StartJobRunResponse {
  /**
   * @public
   * <p>The ID assigned to this job run.</p>
   */
  JobRunId?: string;
}

/**
 * @public
 * <p>The machine learning transform is not ready to run.</p>
 */
export class MLTransformNotReadyException extends __BaseException {
  readonly name: "MLTransformNotReadyException" = "MLTransformNotReadyException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>A message describing the problem.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MLTransformNotReadyException, __BaseException>) {
    super({
      name: "MLTransformNotReadyException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MLTransformNotReadyException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface StartMLEvaluationTaskRunRequest {
  /**
   * @public
   * <p>The unique identifier of the machine learning transform.</p>
   */
  TransformId: string | undefined;
}

/**
 * @public
 */
export interface StartMLEvaluationTaskRunResponse {
  /**
   * @public
   * <p>The unique identifier associated with this run.</p>
   */
  TaskRunId?: string;
}

/**
 * @public
 */
export interface StartMLLabelingSetGenerationTaskRunRequest {
  /**
   * @public
   * <p>The unique identifier of the machine learning transform.</p>
   */
  TransformId: string | undefined;

  /**
   * @public
   * <p>The Amazon Simple Storage Service (Amazon S3) path where you generate the labeling
   *       set.</p>
   */
  OutputS3Path: string | undefined;
}

/**
 * @public
 */
export interface StartMLLabelingSetGenerationTaskRunResponse {
  /**
   * @public
   * <p>The unique run identifier that is associated with this task run.</p>
   */
  TaskRunId?: string;
}

/**
 * @public
 */
export interface StartTriggerRequest {
  /**
   * @public
   * <p>The name of the trigger to start.</p>
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface StartTriggerResponse {
  /**
   * @public
   * <p>The name of the trigger that was started.</p>
   */
  Name?: string;
}

/**
 * @public
 */
export interface StartWorkflowRunRequest {
  /**
   * @public
   * <p>The name of the workflow to start.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The workflow run properties for the new workflow run.</p>
   */
  RunProperties?: Record<string, string>;
}

/**
 * @public
 */
export interface StartWorkflowRunResponse {
  /**
   * @public
   * <p>An Id for the new run.</p>
   */
  RunId?: string;
}

/**
 * @public
 * <p>The specified crawler is not running.</p>
 */
export class CrawlerNotRunningException extends __BaseException {
  readonly name: "CrawlerNotRunningException" = "CrawlerNotRunningException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>A message describing the problem.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CrawlerNotRunningException, __BaseException>) {
    super({
      name: "CrawlerNotRunningException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CrawlerNotRunningException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>The specified crawler is stopping.</p>
 */
export class CrawlerStoppingException extends __BaseException {
  readonly name: "CrawlerStoppingException" = "CrawlerStoppingException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>A message describing the problem.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CrawlerStoppingException, __BaseException>) {
    super({
      name: "CrawlerStoppingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CrawlerStoppingException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface StopCrawlerRequest {
  /**
   * @public
   * <p>Name of the crawler to stop.</p>
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface StopCrawlerResponse {}

/**
 * @public
 * <p>The specified scheduler is not running.</p>
 */
export class SchedulerNotRunningException extends __BaseException {
  readonly name: "SchedulerNotRunningException" = "SchedulerNotRunningException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>A message describing the problem.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SchedulerNotRunningException, __BaseException>) {
    super({
      name: "SchedulerNotRunningException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SchedulerNotRunningException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface StopCrawlerScheduleRequest {
  /**
   * @public
   * <p>Name of the crawler whose schedule state to set.</p>
   */
  CrawlerName: string | undefined;
}

/**
 * @public
 */
export interface StopCrawlerScheduleResponse {}

/**
 * @public
 */
export interface StopSessionRequest {
  /**
   * @public
   * <p>The ID of the session to be stopped.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>The origin of the request.</p>
   */
  RequestOrigin?: string;
}

/**
 * @public
 */
export interface StopSessionResponse {
  /**
   * @public
   * <p>Returns the Id of the stopped session.</p>
   */
  Id?: string;
}

/**
 * @public
 */
export interface StopTriggerRequest {
  /**
   * @public
   * <p>The name of the trigger to stop.</p>
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface StopTriggerResponse {
  /**
   * @public
   * <p>The name of the trigger that was stopped.</p>
   */
  Name?: string;
}

/**
 * @public
 */
export interface StopWorkflowRunRequest {
  /**
   * @public
   * <p>The name of the workflow to stop.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The ID of the workflow run to stop.</p>
   */
  RunId: string | undefined;
}

/**
 * @public
 */
export interface StopWorkflowRunResponse {}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * @public
   * <p>The ARN of the Glue resource to which to add the tags. For more
   *       information about Glue resource ARNs, see the <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-common.html#aws-glue-api-regex-aws-glue-arn-id">Glue ARN string pattern</a>.</p>
   */
  ResourceArn: string | undefined;

  /**
   * @public
   * <p>Tags to add to this resource.</p>
   */
  TagsToAdd: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource from which to remove the tags.</p>
   */
  ResourceArn: string | undefined;

  /**
   * @public
   * <p>Tags to remove from this resource.</p>
   */
  TagsToRemove: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 */
export interface UpdateBlueprintRequest {
  /**
   * @public
   * <p>The name of the blueprint.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>A description of the blueprint.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>Specifies a path in Amazon S3 where the blueprint is published.</p>
   */
  BlueprintLocation: string | undefined;
}

/**
 * @public
 */
export interface UpdateBlueprintResponse {
  /**
   * @public
   * <p>Returns the name of the blueprint that was updated.</p>
   */
  Name?: string;
}

/**
 * @public
 * <p>Specifies a custom CSV classifier to be updated.</p>
 */
export interface UpdateCsvClassifierRequest {
  /**
   * @public
   * <p>The name of the classifier.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>A custom symbol to denote what separates each column entry in the row.</p>
   */
  Delimiter?: string;

  /**
   * @public
   * <p>A custom symbol to denote what combines content into a single column value. It must be
   *       different from the column delimiter.</p>
   */
  QuoteSymbol?: string;

  /**
   * @public
   * <p>Indicates whether the CSV file contains a header.</p>
   */
  ContainsHeader?: CsvHeaderOption | string;

  /**
   * @public
   * <p>A list of strings representing column names.</p>
   */
  Header?: string[];

  /**
   * @public
   * <p>Specifies not to trim values before identifying the type of column values. The default value is true.</p>
   */
  DisableValueTrimming?: boolean;

  /**
   * @public
   * <p>Enables the processing of files that contain only one column.</p>
   */
  AllowSingleColumn?: boolean;

  /**
   * @public
   * <p>Specifies the configuration of custom datatypes.</p>
   */
  CustomDatatypeConfigured?: boolean;

  /**
   * @public
   * <p>Specifies a list of supported custom datatypes.</p>
   */
  CustomDatatypes?: string[];

  /**
   * @public
   * <p>Sets the SerDe for processing CSV in the classifier, which will be applied in the Data Catalog. Valid values are <code>OpenCSVSerDe</code>, <code>LazySimpleSerDe</code>, and <code>None</code>. You can specify the <code>None</code> value when you want the crawler to do the detection.</p>
   */
  Serde?: CsvSerdeOption | string;
}

/**
 * @public
 * <p>Specifies a grok classifier to update when passed to
 *       <code>UpdateClassifier</code>.</p>
 */
export interface UpdateGrokClassifierRequest {
  /**
   * @public
   * <p>The name of the <code>GrokClassifier</code>.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>An identifier of the data format that the classifier matches, such as Twitter, JSON, Omniture logs,
   *       Amazon CloudWatch Logs, and so on.</p>
   */
  Classification?: string;

  /**
   * @public
   * <p>The grok pattern used by this classifier.</p>
   */
  GrokPattern?: string;

  /**
   * @public
   * <p>Optional custom grok patterns used by this classifier.</p>
   */
  CustomPatterns?: string;
}

/**
 * @public
 * <p>Specifies a JSON classifier to be updated.</p>
 */
export interface UpdateJsonClassifierRequest {
  /**
   * @public
   * <p>The name of the classifier.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>A <code>JsonPath</code> string defining the JSON data for the classifier to classify.
   *       Glue supports a subset of JsonPath, as described in <a href="https://docs.aws.amazon.com/glue/latest/dg/custom-classifier.html#custom-classifier-json">Writing JsonPath Custom Classifiers</a>.</p>
   */
  JsonPath?: string;
}

/**
 * @public
 * <p>Specifies an XML classifier to be updated.</p>
 */
export interface UpdateXMLClassifierRequest {
  /**
   * @public
   * <p>The name of the classifier.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>An identifier of the data format that the classifier matches.</p>
   */
  Classification?: string;

  /**
   * @public
   * <p>The XML tag designating the element that contains each record in an XML document being
   *       parsed. This cannot identify a self-closing element (closed by <code>/></code>). An empty
   *       row element that contains only attributes can be parsed as long as it ends with a closing tag
   *       (for example, <code><row item_a="A" item_b="B"></row></code> is okay, but
   *         <code><row item_a="A" item_b="B" /></code> is not).</p>
   */
  RowTag?: string;
}

/**
 * @public
 */
export interface UpdateClassifierRequest {
  /**
   * @public
   * <p>A <code>GrokClassifier</code> object with updated fields.</p>
   */
  GrokClassifier?: UpdateGrokClassifierRequest;

  /**
   * @public
   * <p>An <code>XMLClassifier</code> object with updated fields.</p>
   */
  XMLClassifier?: UpdateXMLClassifierRequest;

  /**
   * @public
   * <p>A <code>JsonClassifier</code> object with updated fields.</p>
   */
  JsonClassifier?: UpdateJsonClassifierRequest;

  /**
   * @public
   * <p>A <code>CsvClassifier</code> object with updated fields.</p>
   */
  CsvClassifier?: UpdateCsvClassifierRequest;
}

/**
 * @public
 */
export interface UpdateClassifierResponse {}

/**
 * @public
 * <p>There was a version conflict.</p>
 */
export class VersionMismatchException extends __BaseException {
  readonly name: "VersionMismatchException" = "VersionMismatchException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>A message describing the problem.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<VersionMismatchException, __BaseException>) {
    super({
      name: "VersionMismatchException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, VersionMismatchException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface UpdateColumnStatisticsForPartitionRequest {
  /**
   * @public
   * <p>The ID of the Data Catalog where the partitions in question reside.
   *       If none is supplied, the Amazon Web Services account ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * @public
   * <p>The name of the catalog database where the partitions reside.</p>
   */
  DatabaseName: string | undefined;

  /**
   * @public
   * <p>The name of the partitions' table.</p>
   */
  TableName: string | undefined;

  /**
   * @public
   * <p>A list of partition values identifying the partition.</p>
   */
  PartitionValues: string[] | undefined;

  /**
   * @public
   * <p>A list of the column statistics.</p>
   */
  ColumnStatisticsList: ColumnStatistics[] | undefined;
}

/**
 * @public
 * <p>Encapsulates a <code>ColumnStatistics</code> object that failed and the reason for failure.</p>
 */
export interface ColumnStatisticsError {
  /**
   * @public
   * <p>The <code>ColumnStatistics</code> of the column.</p>
   */
  ColumnStatistics?: ColumnStatistics;

  /**
   * @public
   * <p>An error message with the reason for the failure of an operation.</p>
   */
  Error?: ErrorDetail;
}

/**
 * @public
 */
export interface UpdateColumnStatisticsForPartitionResponse {
  /**
   * @public
   * <p>Error occurred during updating column statistics data.</p>
   */
  Errors?: ColumnStatisticsError[];
}

/**
 * @public
 */
export interface UpdateColumnStatisticsForTableRequest {
  /**
   * @public
   * <p>The ID of the Data Catalog where the partitions in question reside.
   *       If none is supplied, the Amazon Web Services account ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * @public
   * <p>The name of the catalog database where the partitions reside.</p>
   */
  DatabaseName: string | undefined;

  /**
   * @public
   * <p>The name of the partitions' table.</p>
   */
  TableName: string | undefined;

  /**
   * @public
   * <p>A list of the column statistics.</p>
   */
  ColumnStatisticsList: ColumnStatistics[] | undefined;
}

/**
 * @public
 */
export interface UpdateColumnStatisticsForTableResponse {
  /**
   * @public
   * <p>List of ColumnStatisticsErrors.</p>
   */
  Errors?: ColumnStatisticsError[];
}

/**
 * @public
 */
export interface UpdateConnectionRequest {
  /**
   * @public
   * <p>The ID of the Data Catalog in which the connection resides. If none is provided, the Amazon Web Services
   *       account ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * @public
   * <p>The name of the connection definition to update.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>A <code>ConnectionInput</code> object that redefines the connection
   *       in question.</p>
   */
  ConnectionInput: ConnectionInput | undefined;
}

/**
 * @public
 */
export interface UpdateConnectionResponse {}

/**
 * @public
 */
export interface UpdateCrawlerRequest {
  /**
   * @public
   * <p>Name of the new crawler.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The IAM role or Amazon Resource Name (ARN) of an IAM role that is used by the new crawler
   *       to access customer resources.</p>
   */
  Role?: string;

  /**
   * @public
   * <p>The Glue database where results are stored, such as:
   *         <code>arn:aws:daylight:us-east-1::database/sometable/*</code>.</p>
   */
  DatabaseName?: string;

  /**
   * @public
   * <p>A description of the new crawler.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>A list of targets to crawl.</p>
   */
  Targets?: CrawlerTargets;

  /**
   * @public
   * <p>A <code>cron</code> expression used to specify the schedule (see <a href="https://docs.aws.amazon.com/glue/latest/dg/monitor-data-warehouse-schedule.html">Time-Based Schedules for Jobs and Crawlers</a>. For example, to run
   *       something every day at 12:15 UTC, you would specify:
   *       <code>cron(15 12 * * ? *)</code>.</p>
   */
  Schedule?: string;

  /**
   * @public
   * <p>A list of custom classifiers that the user
   *       has registered. By default, all built-in classifiers are included in a crawl,
   *       but these custom classifiers always override the default classifiers
   *       for a given classification.</p>
   */
  Classifiers?: string[];

  /**
   * @public
   * <p>The table prefix used for catalog tables that are created.</p>
   */
  TablePrefix?: string;

  /**
   * @public
   * <p>The policy for the crawler's update and deletion behavior.</p>
   */
  SchemaChangePolicy?: SchemaChangePolicy;

  /**
   * @public
   * <p>A policy that specifies whether to crawl the entire dataset again, or to crawl only folders that were added since the last crawler run.</p>
   */
  RecrawlPolicy?: RecrawlPolicy;

  /**
   * @public
   * <p>Specifies data lineage configuration settings for the crawler.</p>
   */
  LineageConfiguration?: LineageConfiguration;

  /**
   * @public
   * <p>Specifies Lake Formation configuration settings for the crawler.</p>
   */
  LakeFormationConfiguration?: LakeFormationConfiguration;

  /**
   * @public
   * <p>Crawler configuration information. This versioned JSON string allows users
   *         to specify aspects of a crawler's behavior.
   *         For more information, see <a href="https://docs.aws.amazon.com/glue/latest/dg/crawler-configuration.html">Setting crawler configuration options</a>.</p>
   */
  Configuration?: string;

  /**
   * @public
   * <p>The name of the <code>SecurityConfiguration</code> structure to be used by this
   *       crawler.</p>
   */
  CrawlerSecurityConfiguration?: string;
}

/**
 * @public
 */
export interface UpdateCrawlerResponse {}

/**
 * @public
 */
export interface UpdateCrawlerScheduleRequest {
  /**
   * @public
   * <p>The name of the crawler whose schedule to update.</p>
   */
  CrawlerName: string | undefined;

  /**
   * @public
   * <p>The updated <code>cron</code> expression used to specify the schedule (see <a href="https://docs.aws.amazon.com/glue/latest/dg/monitor-data-warehouse-schedule.html">Time-Based Schedules for Jobs and Crawlers</a>. For example, to run
   *       something every day at 12:15 UTC, you would specify:
   *       <code>cron(15 12 * * ? *)</code>.</p>
   */
  Schedule?: string;
}

/**
 * @public
 */
export interface UpdateCrawlerScheduleResponse {}

/**
 * @public
 */
export interface UpdateDatabaseRequest {
  /**
   * @public
   * <p>The ID of the Data Catalog in which the metadata database resides. If none is provided,
   *       the Amazon Web Services account ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * @public
   * <p>The name of the database to update in the catalog. For Hive
   *       compatibility, this is folded to lowercase.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>A <code>DatabaseInput</code> object specifying the new definition
   *       of the metadata database in the catalog.</p>
   */
  DatabaseInput: DatabaseInput | undefined;
}

/**
 * @public
 */
export interface UpdateDatabaseResponse {}

/**
 * @public
 */
export interface UpdateDataQualityRulesetRequest {
  /**
   * @public
   * <p>The name of the data quality ruleset.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>A description of the ruleset.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>A Data Quality Definition Language (DQDL) ruleset. For more information, see the Glue developer guide.</p>
   */
  Ruleset?: string;
}

/**
 * @public
 */
export interface UpdateDataQualityRulesetResponse {
  /**
   * @public
   * <p>The name of the data quality ruleset.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>A description of the ruleset.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>A Data Quality Definition Language (DQDL) ruleset. For more information, see the Glue developer guide.</p>
   */
  Ruleset?: string;
}

/**
 * @public
 * <p>Custom libraries to be loaded into a development endpoint.</p>
 */
export interface DevEndpointCustomLibraries {
  /**
   * @public
   * <p>The paths to one or more Python libraries in an Amazon Simple Storage Service (Amazon S3)
   *       bucket that should be loaded in your <code>DevEndpoint</code>. Multiple values must be
   *       complete paths separated by a comma.</p>
   *          <note>
   *             <p>You can only use pure Python libraries with a <code>DevEndpoint</code>. Libraries that rely on
   *         C extensions, such as the <a href="http://pandas.pydata.org/">pandas</a> Python data
   *         analysis library, are not currently supported.</p>
   *          </note>
   */
  ExtraPythonLibsS3Path?: string;

  /**
   * @public
   * <p>The path to one or more Java <code>.jar</code> files in an S3 bucket that should be loaded
   *       in your <code>DevEndpoint</code>.</p>
   *          <note>
   *             <p>You can only use pure Java/Scala libraries with a <code>DevEndpoint</code>.</p>
   *          </note>
   */
  ExtraJarsS3Path?: string;
}

/**
 * @public
 */
export interface UpdateDevEndpointRequest {
  /**
   * @public
   * <p>The name of the <code>DevEndpoint</code> to be updated.</p>
   */
  EndpointName: string | undefined;

  /**
   * @public
   * <p>The public key for the <code>DevEndpoint</code> to use.</p>
   */
  PublicKey?: string;

  /**
   * @public
   * <p>The list of public keys for the <code>DevEndpoint</code> to use.</p>
   */
  AddPublicKeys?: string[];

  /**
   * @public
   * <p>The list of public keys to be deleted from the <code>DevEndpoint</code>.</p>
   */
  DeletePublicKeys?: string[];

  /**
   * @public
   * <p>Custom Python or Java libraries to be loaded in the <code>DevEndpoint</code>.</p>
   */
  CustomLibraries?: DevEndpointCustomLibraries;

  /**
   * @public
   * <p>
   *             <code>True</code> if the list of custom libraries to be loaded in the development endpoint
   *       needs to be updated, or <code>False</code> if otherwise.</p>
   */
  UpdateEtlLibraries?: boolean;

  /**
   * @public
   * <p>The list of argument keys to be deleted from the map of arguments used to configure the
   *         <code>DevEndpoint</code>.</p>
   */
  DeleteArguments?: string[];

  /**
   * @public
   * <p>The map of arguments to add the map of arguments used to configure the
   *         <code>DevEndpoint</code>.</p>
   *          <p>Valid arguments are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>"--enable-glue-datacatalog": ""</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>You can specify a version of Python support for development endpoints by using the <code>Arguments</code> parameter in the <code>CreateDevEndpoint</code> or <code>UpdateDevEndpoint</code> APIs. If no arguments are provided, the version defaults to Python 2.</p>
   */
  AddArguments?: Record<string, string>;
}

/**
 * @public
 */
export interface UpdateDevEndpointResponse {}

/**
 * @public
 */
export interface UpdateJobResponse {
  /**
   * @public
   * <p>Returns the name of the updated job definition.</p>
   */
  JobName?: string;
}

/**
 * @public
 */
export interface UpdateJobFromSourceControlRequest {
  /**
   * @public
   * <p>The name of the Glue job to be synchronized to or from the remote repository.</p>
   */
  JobName?: string;

  /**
   * @public
   * <p>The provider for the remote repository.</p>
   */
  Provider?: SourceControlProvider | string;

  /**
   * @public
   * <p>The name of the remote repository that contains the job artifacts.</p>
   */
  RepositoryName?: string;

  /**
   * @public
   * <p>The owner of the remote repository that contains the job artifacts.</p>
   */
  RepositoryOwner?: string;

  /**
   * @public
   * <p>An optional branch in the remote repository.</p>
   */
  BranchName?: string;

  /**
   * @public
   * <p>An optional folder in the remote repository.</p>
   */
  Folder?: string;

  /**
   * @public
   * <p>A commit ID for a commit in the remote repository.</p>
   */
  CommitId?: string;

  /**
   * @public
   * <p>The type of authentication, which can be an authentication token stored in Amazon Web Services Secrets Manager, or a personal access token.</p>
   */
  AuthStrategy?: SourceControlAuthStrategy | string;

  /**
   * @public
   * <p>The value of the authorization token.</p>
   */
  AuthToken?: string;
}

/**
 * @public
 */
export interface UpdateJobFromSourceControlResponse {
  /**
   * @public
   * <p>The name of the Glue job.</p>
   */
  JobName?: string;
}

/**
 * @public
 */
export interface UpdateMLTransformRequest {
  /**
   * @public
   * <p>A unique identifier that was generated when the transform was created.</p>
   */
  TransformId: string | undefined;

  /**
   * @public
   * <p>The unique name that you gave the transform when you created it.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>A description of the transform. The default is an empty string.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The configuration parameters that are specific to the transform type (algorithm) used.
   *       Conditionally dependent on the transform type.</p>
   */
  Parameters?: TransformParameters;

  /**
   * @public
   * <p>The name or Amazon Resource Name (ARN) of the IAM role with the required
   *       permissions.</p>
   */
  Role?: string;

  /**
   * @public
   * <p>This value determines which version of Glue this machine learning transform is compatible with. Glue 1.0 is recommended for most customers. If the value is not set, the Glue compatibility defaults to Glue 0.9.  For more information, see <a href="https://docs.aws.amazon.com/glue/latest/dg/release-notes.html#release-notes-versions">Glue Versions</a> in the developer guide.</p>
   */
  GlueVersion?: string;

  /**
   * @public
   * <p>The number of Glue data processing units (DPUs) that are allocated to task runs for this transform. You can allocate from 2 to 100 DPUs; the default is 10. A DPU is a relative measure of
   *       processing power that consists of 4 vCPUs of compute capacity and 16 GB of memory. For more
   *       information, see the <a href="https://aws.amazon.com/glue/pricing/">Glue pricing
   *         page</a>. </p>
   *          <p>When the <code>WorkerType</code> field is set to a value other than <code>Standard</code>, the <code>MaxCapacity</code> field is set automatically and becomes read-only.</p>
   */
  MaxCapacity?: number;

  /**
   * @public
   * <p>The type of predefined worker that is allocated when this task runs. Accepts a value of Standard, G.1X, or G.2X.</p>
   *          <ul>
   *             <li>
   *                <p>For the <code>Standard</code> worker type, each worker provides 4 vCPU, 16 GB of memory and a 50GB disk, and 2 executors per worker.</p>
   *             </li>
   *             <li>
   *                <p>For the <code>G.1X</code> worker type, each worker provides 4 vCPU, 16 GB of memory and a 64GB disk, and 1 executor per worker.</p>
   *             </li>
   *             <li>
   *                <p>For the <code>G.2X</code> worker type, each worker provides 8 vCPU, 32 GB of memory and a 128GB disk, and 1 executor per worker.</p>
   *             </li>
   *          </ul>
   */
  WorkerType?: WorkerType | string;

  /**
   * @public
   * <p>The number of workers of a defined <code>workerType</code> that are allocated when this task runs.</p>
   */
  NumberOfWorkers?: number;

  /**
   * @public
   * <p>The timeout for a task run for this transform in minutes. This is the maximum time that a task run for this transform can consume resources before it is terminated and enters <code>TIMEOUT</code> status. The default is 2,880 minutes (48 hours).</p>
   */
  Timeout?: number;

  /**
   * @public
   * <p>The maximum number of times to retry a task for this transform after a task run fails.</p>
   */
  MaxRetries?: number;
}

/**
 * @public
 */
export interface UpdateMLTransformResponse {
  /**
   * @public
   * <p>The unique identifier for the transform that was updated.</p>
   */
  TransformId?: string;
}

/**
 * @public
 */
export interface UpdatePartitionRequest {
  /**
   * @public
   * <p>The ID of the Data Catalog where the partition to be updated resides. If none is provided,
   *       the Amazon Web Services account ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * @public
   * <p>The name of the catalog database in which the table in question
   *       resides.</p>
   */
  DatabaseName: string | undefined;

  /**
   * @public
   * <p>The name of the table in which the partition to be updated is located.</p>
   */
  TableName: string | undefined;

  /**
   * @public
   * <p>List of partition key values that define the partition to update.</p>
   */
  PartitionValueList: string[] | undefined;

  /**
   * @public
   * <p>The new partition object to update the partition to.</p>
   *          <p>The <code>Values</code> property can't be changed. If you want to change the partition key values for a partition, delete and recreate the partition.</p>
   */
  PartitionInput: PartitionInput | undefined;
}

/**
 * @public
 */
export interface UpdatePartitionResponse {}

/**
 * @public
 */
export interface UpdateRegistryInput {
  /**
   * @public
   * <p>This is a wrapper structure that may contain the registry name and Amazon Resource Name (ARN).</p>
   */
  RegistryId: RegistryId | undefined;

  /**
   * @public
   * <p>A description of the registry. If description is not provided, this field will not be updated.</p>
   */
  Description: string | undefined;
}

/**
 * @public
 */
export interface UpdateRegistryResponse {
  /**
   * @public
   * <p>The name of the updated registry.</p>
   */
  RegistryName?: string;

  /**
   * @public
   * <p>The Amazon Resource name (ARN) of the updated registry.</p>
   */
  RegistryArn?: string;
}

/**
 * @public
 */
export interface UpdateSchemaInput {
  /**
   * @public
   * <p>This is a wrapper structure to contain schema identity fields. The structure contains:</p>
   *          <ul>
   *             <li>
   *                <p>SchemaId$SchemaArn: The Amazon Resource Name (ARN) of the schema. One of <code>SchemaArn</code> or <code>SchemaName</code> has to be provided.</p>
   *             </li>
   *             <li>
   *                <p>SchemaId$SchemaName: The name of the schema. One of <code>SchemaArn</code> or <code>SchemaName</code> has to be provided.</p>
   *             </li>
   *          </ul>
   */
  SchemaId: SchemaId | undefined;

  /**
   * @public
   * <p>Version number required for check pointing. One of <code>VersionNumber</code> or <code>Compatibility</code> has to be provided.</p>
   */
  SchemaVersionNumber?: SchemaVersionNumber;

  /**
   * @public
   * <p>The new compatibility setting for the schema.</p>
   */
  Compatibility?: Compatibility | string;

  /**
   * @public
   * <p>The new description for the schema.</p>
   */
  Description?: string;
}

/**
 * @public
 */
export interface UpdateSchemaResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the schema.</p>
   */
  SchemaArn?: string;

  /**
   * @public
   * <p>The name of the schema.</p>
   */
  SchemaName?: string;

  /**
   * @public
   * <p>The name of the registry that contains the schema.</p>
   */
  RegistryName?: string;
}

/**
 * @public
 */
export interface UpdateSourceControlFromJobRequest {
  /**
   * @public
   * <p>The name of the Glue job to be synchronized to or from the remote repository.</p>
   */
  JobName?: string;

  /**
   * @public
   * <p>The provider for the remote repository.</p>
   */
  Provider?: SourceControlProvider | string;

  /**
   * @public
   * <p>The name of the remote repository that contains the job artifacts.</p>
   */
  RepositoryName?: string;

  /**
   * @public
   * <p>The owner of the remote repository that contains the job artifacts.</p>
   */
  RepositoryOwner?: string;

  /**
   * @public
   * <p>An optional branch in the remote repository.</p>
   */
  BranchName?: string;

  /**
   * @public
   * <p>An optional folder in the remote repository.</p>
   */
  Folder?: string;

  /**
   * @public
   * <p>A commit ID for a commit in the remote repository.</p>
   */
  CommitId?: string;

  /**
   * @public
   * <p>The type of authentication, which can be an authentication token stored in Amazon Web Services Secrets Manager, or a personal access token.</p>
   */
  AuthStrategy?: SourceControlAuthStrategy | string;

  /**
   * @public
   * <p>The value of the authorization token.</p>
   */
  AuthToken?: string;
}

/**
 * @public
 */
export interface UpdateSourceControlFromJobResponse {
  /**
   * @public
   * <p>The name of the Glue job.</p>
   */
  JobName?: string;
}

/**
 * @public
 */
export interface UpdateTableRequest {
  /**
   * @public
   * <p>The ID of the Data Catalog where the table resides. If none is provided, the Amazon Web Services account
   *       ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * @public
   * <p>The name of the catalog database in which the table resides. For Hive
   *       compatibility, this name is entirely lowercase.</p>
   */
  DatabaseName: string | undefined;

  /**
   * @public
   * <p>An updated <code>TableInput</code> object to define the metadata table
   *       in the catalog.</p>
   */
  TableInput: TableInput | undefined;

  /**
   * @public
   * <p>By default, <code>UpdateTable</code> always creates an archived version of the table
   *       before updating it. However, if <code>skipArchive</code> is set to true,
   *         <code>UpdateTable</code> does not create the archived version.</p>
   */
  SkipArchive?: boolean;

  /**
   * @public
   * <p>The transaction ID at which to update the table contents. </p>
   */
  TransactionId?: string;

  /**
   * @public
   * <p>The version ID at which to update the table contents. </p>
   */
  VersionId?: string;
}

/**
 * @public
 */
export interface UpdateTableResponse {}

/**
 * @public
 * <p>A structure used to provide information used to update a trigger. This object updates the
 *       previous trigger definition by overwriting it completely.</p>
 */
export interface TriggerUpdate {
  /**
   * @public
   * <p>Reserved for future use.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>A description of this trigger.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>A <code>cron</code> expression used to specify the schedule (see <a href="https://docs.aws.amazon.com/glue/latest/dg/monitor-data-warehouse-schedule.html">Time-Based
   *       Schedules for Jobs and Crawlers</a>. For example, to run
   *       something every day at 12:15 UTC, you would specify:
   *       <code>cron(15 12 * * ? *)</code>.</p>
   */
  Schedule?: string;

  /**
   * @public
   * <p>The actions initiated by this trigger.</p>
   */
  Actions?: Action[];

  /**
   * @public
   * <p>The predicate of this trigger, which defines when it will fire.</p>
   */
  Predicate?: Predicate;

  /**
   * @public
   * <p>Batch condition that must be met (specified number of events received or batch time window expired)
   *       before EventBridge event trigger fires.</p>
   */
  EventBatchingCondition?: EventBatchingCondition;
}

/**
 * @public
 */
export interface UpdateTriggerRequest {
  /**
   * @public
   * <p>The name of the trigger to update.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The new values with which to update the trigger.</p>
   */
  TriggerUpdate: TriggerUpdate | undefined;
}

/**
 * @public
 */
export interface UpdateTriggerResponse {
  /**
   * @public
   * <p>The resulting trigger definition.</p>
   */
  Trigger?: Trigger;
}

/**
 * @public
 */
export interface UpdateUserDefinedFunctionRequest {
  /**
   * @public
   * <p>The ID of the Data Catalog where the function to be updated is located. If none is
   *       provided, the Amazon Web Services account ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * @public
   * <p>The name of the catalog database where the function to be updated is
   *       located.</p>
   */
  DatabaseName: string | undefined;

  /**
   * @public
   * <p>The name of the function.</p>
   */
  FunctionName: string | undefined;

  /**
   * @public
   * <p>A <code>FunctionInput</code> object that redefines the function in the Data
   *       Catalog.</p>
   */
  FunctionInput: UserDefinedFunctionInput | undefined;
}

/**
 * @public
 */
export interface UpdateUserDefinedFunctionResponse {}

/**
 * @public
 */
export interface UpdateWorkflowRequest {
  /**
   * @public
   * <p>Name of the workflow to be updated.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The description of the workflow.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>A collection of properties to be used as part of each execution of the workflow.</p>
   */
  DefaultRunProperties?: Record<string, string>;

  /**
   * @public
   * <p>You can use this parameter to prevent unwanted multiple updates to data, to control costs, or in some cases, to prevent exceeding the maximum number of concurrent runs of any of the component jobs. If you leave this parameter blank, there is no limit to the number of concurrent workflow runs.</p>
   */
  MaxConcurrentRuns?: number;
}

/**
 * @public
 */
export interface UpdateWorkflowResponse {
  /**
   * @public
   * <p>The name of the workflow which was specified in input.</p>
   */
  Name?: string;
}

/**
 * @public
 * <p>Specifies the mapping of data property keys.</p>
 */
export interface Mapping {
  /**
   * @public
   * <p>After the apply mapping, what the name of the column should be. Can be the same as <code>FromPath</code>.</p>
   */
  ToKey?: string;

  /**
   * @public
   * <p>The table or column to be modified.</p>
   */
  FromPath?: string[];

  /**
   * @public
   * <p>The type of the data to be modified.</p>
   */
  FromType?: string;

  /**
   * @public
   * <p>The data type that the data is to be modified to.</p>
   */
  ToType?: string;

  /**
   * @public
   * <p>If true, then the column is removed.</p>
   */
  Dropped?: boolean;

  /**
   * @public
   * <p>Only applicable to nested data structures. If you want to change the parent structure, but also one of its children, you can fill out this data strucutre. It is also <code>Mapping</code>, but its <code>FromPath</code> will be the parent's <code>FromPath</code> plus the <code>FromPath</code> from this structure.</p>
   *          <p>For the children part, suppose you have the structure:</p>
   *          <p>
   *             <code>\{
   *   "FromPath": "OuterStructure",
   *   "ToKey": "OuterStructure",
   *   "ToType": "Struct",
   *   "Dropped": false,
   *   "Chidlren": [\{
   *        "FromPath": "inner",
   *        "ToKey": "inner",
   *        "ToType": "Double",
   *       "Dropped": false,
   *   \}]
   * \}</code>
   *          </p>
   *          <p>You can specify a <code>Mapping</code> that looks like:</p>
   *          <p>
   *             <code>\{
   *   "FromPath": "OuterStructure",
   *   "ToKey": "OuterStructure",
   *   "ToType": "Struct",
   *   "Dropped": false,
   *   "Chidlren": [\{
   *        "FromPath": "inner",
   *        "ToKey": "inner",
   *        "ToType": "Double",
   *       "Dropped": false,
   *   \}]
   * \}</code>
   *          </p>
   */
  Children?: Mapping[];
}

/**
 * @public
 * <p>Specifies a transform that maps data property keys in the data source to data property keys in the data target. You can rename keys, modify the data types for keys, and choose which keys to drop from the dataset.</p>
 */
export interface ApplyMapping {
  /**
   * @public
   * <p>The name of the transform node.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The data inputs identified by their node names.</p>
   */
  Inputs: string[] | undefined;

  /**
   * @public
   * <p>Specifies the mapping of data property keys in the data source to data property keys in the data target.</p>
   */
  Mapping: Mapping[] | undefined;
}

/**
 * @public
 * <p>
 *             <code>CodeGenConfigurationNode</code> enumerates all valid Node types. One and only one of its member variables can be populated.</p>
 */
export interface CodeGenConfigurationNode {
  /**
   * @public
   * <p>Specifies a connector to an Amazon Athena data source.</p>
   */
  AthenaConnectorSource?: AthenaConnectorSource;

  /**
   * @public
   * <p>Specifies a connector to a JDBC data source.</p>
   */
  JDBCConnectorSource?: JDBCConnectorSource;

  /**
   * @public
   * <p>Specifies a connector to an Apache Spark data source.</p>
   */
  SparkConnectorSource?: SparkConnectorSource;

  /**
   * @public
   * <p>Specifies a data store in the Glue Data Catalog.</p>
   */
  CatalogSource?: CatalogSource;

  /**
   * @public
   * <p>Specifies an Amazon Redshift data store.</p>
   */
  RedshiftSource?: RedshiftSource;

  /**
   * @public
   * <p>Specifies an Amazon S3 data store in the Glue Data Catalog.</p>
   */
  S3CatalogSource?: S3CatalogSource;

  /**
   * @public
   * <p>Specifies a command-separated value (CSV) data store stored in Amazon S3.</p>
   */
  S3CsvSource?: S3CsvSource;

  /**
   * @public
   * <p>Specifies a JSON data store stored in Amazon S3.</p>
   */
  S3JsonSource?: S3JsonSource;

  /**
   * @public
   * <p>Specifies an Apache Parquet data store stored in Amazon S3.</p>
   */
  S3ParquetSource?: S3ParquetSource;

  /**
   * @public
   * <p>Specifies a relational catalog data store in the Glue Data Catalog.</p>
   */
  RelationalCatalogSource?: RelationalCatalogSource;

  /**
   * @public
   * <p>Specifies a DynamoDBC Catalog data store in the Glue Data Catalog.</p>
   */
  DynamoDBCatalogSource?: DynamoDBCatalogSource;

  /**
   * @public
   * <p>Specifies a data target that writes to Amazon S3 in Apache Parquet columnar storage.</p>
   */
  JDBCConnectorTarget?: JDBCConnectorTarget;

  /**
   * @public
   * <p>Specifies a target that uses an Apache Spark connector.</p>
   */
  SparkConnectorTarget?: SparkConnectorTarget;

  /**
   * @public
   * <p>Specifies a target that uses a Glue Data Catalog table.</p>
   */
  CatalogTarget?: BasicCatalogTarget;

  /**
   * @public
   * <p>Specifies a target that uses Amazon Redshift.</p>
   */
  RedshiftTarget?: RedshiftTarget;

  /**
   * @public
   * <p>Specifies a data target that writes to Amazon S3 using the Glue Data Catalog.</p>
   */
  S3CatalogTarget?: S3CatalogTarget;

  /**
   * @public
   * <p>Specifies a data target that writes to Amazon S3 in Apache Parquet columnar storage.</p>
   */
  S3GlueParquetTarget?: S3GlueParquetTarget;

  /**
   * @public
   * <p>Specifies a data target that writes to Amazon S3.</p>
   */
  S3DirectTarget?: S3DirectTarget;

  /**
   * @public
   * <p>Specifies a transform that maps data property keys in the data source to data property keys in the data target. You can rename keys, modify the data types for keys, and choose which keys to drop from the dataset.</p>
   */
  ApplyMapping?: ApplyMapping;

  /**
   * @public
   * <p>Specifies a transform that chooses the data property keys that you want to keep.</p>
   */
  SelectFields?: SelectFields;

  /**
   * @public
   * <p>Specifies a transform that chooses the data property keys that you want to drop.</p>
   */
  DropFields?: DropFields;

  /**
   * @public
   * <p>Specifies a transform that renames a single data property key.</p>
   */
  RenameField?: RenameField;

  /**
   * @public
   * <p>Specifies a transform that writes samples of the data to an Amazon S3 bucket.</p>
   */
  Spigot?: Spigot;

  /**
   * @public
   * <p>Specifies a transform that joins two datasets into one dataset using a comparison phrase on the specified data property keys. You can use inner, outer, left, right, left semi, and left anti joins.</p>
   */
  Join?: Join;

  /**
   * @public
   * <p>Specifies a transform that splits data property keys into two <code>DynamicFrames</code>. The output is a collection of <code>DynamicFrames</code>: one with selected data property keys, and one with the remaining data property keys.</p>
   */
  SplitFields?: SplitFields;

  /**
   * @public
   * <p>Specifies a transform that chooses one <code>DynamicFrame</code> from a collection of <code>DynamicFrames</code>. The output is the selected <code>DynamicFrame</code>
   *          </p>
   */
  SelectFromCollection?: SelectFromCollection;

  /**
   * @public
   * <p>Specifies a transform that locates records in the dataset that have missing values and adds a new field with a value determined by imputation. The input data set is used to train the machine learning model that determines what the missing value should be.</p>
   */
  FillMissingValues?: FillMissingValues;

  /**
   * @public
   * <p>Specifies a transform that splits a dataset into two, based on a filter condition.</p>
   */
  Filter?: Filter;

  /**
   * @public
   * <p>Specifies a transform that uses custom code you provide to perform the data transformation. The output is a collection of DynamicFrames.</p>
   */
  CustomCode?: CustomCode;

  /**
   * @public
   * <p>Specifies a transform where you enter a SQL query using Spark SQL syntax to transform the data. The output is a single <code>DynamicFrame</code>.</p>
   */
  SparkSQL?: SparkSQL;

  /**
   * @public
   * <p>Specifies a direct Amazon Kinesis data source.</p>
   */
  DirectKinesisSource?: DirectKinesisSource;

  /**
   * @public
   * <p>Specifies an Apache Kafka data store.</p>
   */
  DirectKafkaSource?: DirectKafkaSource;

  /**
   * @public
   * <p>Specifies a Kinesis data source in the Glue Data Catalog.</p>
   */
  CatalogKinesisSource?: CatalogKinesisSource;

  /**
   * @public
   * <p>Specifies an Apache Kafka data store in the Data Catalog.</p>
   */
  CatalogKafkaSource?: CatalogKafkaSource;

  /**
   * @public
   * <p>Specifies a transform that removes columns from the dataset if all values in the column are 'null'. By default, Glue Studio will recognize null objects, but some values such as empty strings, strings that are "null", -1 integers or other placeholders such as zeros, are not automatically recognized as nulls.</p>
   */
  DropNullFields?: DropNullFields;

  /**
   * @public
   * <p>Specifies a transform that merges a <code>DynamicFrame</code> with a staging <code>DynamicFrame</code> based on the specified primary keys to identify records. Duplicate records (records with the same primary keys) are not de-duplicated. </p>
   */
  Merge?: Merge;

  /**
   * @public
   * <p>Specifies a transform that combines the rows from two or more datasets into a single result.</p>
   */
  Union?: Union;

  /**
   * @public
   * <p>Specifies a transform that identifies, removes or masks PII data.</p>
   */
  PIIDetection?: PIIDetection;

  /**
   * @public
   * <p>Specifies a transform that groups rows by chosen fields and computes the aggregated value by specified function.</p>
   */
  Aggregate?: Aggregate;

  /**
   * @public
   * <p>Specifies a transform that removes rows of repeating data from a data set.</p>
   */
  DropDuplicates?: DropDuplicates;

  /**
   * @public
   * <p>Specifies a data target that writes to a goverened catalog.</p>
   */
  GovernedCatalogTarget?: GovernedCatalogTarget;

  /**
   * @public
   * <p>Specifies a data source in a goverened Data Catalog.</p>
   */
  GovernedCatalogSource?: GovernedCatalogSource;

  /**
   * @public
   * <p>Specifies a Microsoft SQL server data source in the Glue Data Catalog.</p>
   */
  MicrosoftSQLServerCatalogSource?: MicrosoftSQLServerCatalogSource;

  /**
   * @public
   * <p>Specifies a MySQL data source in the Glue Data Catalog.</p>
   */
  MySQLCatalogSource?: MySQLCatalogSource;

  /**
   * @public
   * <p>Specifies an Oracle data source in the Glue Data Catalog.</p>
   */
  OracleSQLCatalogSource?: OracleSQLCatalogSource;

  /**
   * @public
   * <p>Specifies a PostgresSQL data source in the Glue Data Catalog.</p>
   */
  PostgreSQLCatalogSource?: PostgreSQLCatalogSource;

  /**
   * @public
   * <p>Specifies a target that uses Microsoft SQL.</p>
   */
  MicrosoftSQLServerCatalogTarget?: MicrosoftSQLServerCatalogTarget;

  /**
   * @public
   * <p>Specifies a target that uses MySQL.</p>
   */
  MySQLCatalogTarget?: MySQLCatalogTarget;

  /**
   * @public
   * <p>Specifies a target that uses Oracle SQL.</p>
   */
  OracleSQLCatalogTarget?: OracleSQLCatalogTarget;

  /**
   * @public
   * <p>Specifies a target that uses Postgres SQL.</p>
   */
  PostgreSQLCatalogTarget?: PostgreSQLCatalogTarget;

  /**
   * @public
   * <p>Specifies a custom visual transform created by a user.</p>
   */
  DynamicTransform?: DynamicTransform;

  /**
   * @public
   * <p>Specifies your data quality evaluation criteria.</p>
   */
  EvaluateDataQuality?: EvaluateDataQuality;

  /**
   * @public
   * <p>Specifies a Hudi data source that is registered in the Glue Data Catalog. The data source must be stored in Amazon S3.</p>
   */
  S3CatalogHudiSource?: S3CatalogHudiSource;

  /**
   * @public
   * <p>Specifies a Hudi data source that is registered in the Glue Data Catalog.</p>
   */
  CatalogHudiSource?: CatalogHudiSource;

  /**
   * @public
   * <p>Specifies a Hudi data source stored in Amazon S3.</p>
   */
  S3HudiSource?: S3HudiSource;

  /**
   * @public
   * <p>Specifies a target that writes to a Hudi data source in the Glue Data Catalog.</p>
   */
  S3HudiCatalogTarget?: S3HudiCatalogTarget;

  /**
   * @public
   * <p>Specifies a target that writes to a Hudi data source in Amazon S3.</p>
   */
  S3HudiDirectTarget?: S3HudiDirectTarget;

  /**
   * @public
   * <p>Specifies the direct JDBC source connection.</p>
   */
  DirectJDBCSource?: DirectJDBCSource;

  /**
   * @public
   * <p>Specifies a Delta Lake data source that is registered in the Glue Data Catalog. The data source must be stored in Amazon S3.</p>
   */
  S3CatalogDeltaSource?: S3CatalogDeltaSource;

  /**
   * @public
   * <p>Specifies a Delta Lake data source that is registered in the Glue Data Catalog.</p>
   */
  CatalogDeltaSource?: CatalogDeltaSource;

  /**
   * @public
   * <p>Specifies a Delta Lake data source stored in Amazon S3.</p>
   */
  S3DeltaSource?: S3DeltaSource;

  /**
   * @public
   * <p>Specifies a target that writes to a Delta Lake data source in the Glue Data Catalog.</p>
   */
  S3DeltaCatalogTarget?: S3DeltaCatalogTarget;

  /**
   * @public
   * <p>Specifies a target that writes to a Delta Lake data source in Amazon S3.</p>
   */
  S3DeltaDirectTarget?: S3DeltaDirectTarget;

  /**
   * @public
   * <p>Specifies a target that writes to a data source in Amazon Redshift.</p>
   */
  AmazonRedshiftSource?: AmazonRedshiftSource;

  /**
   * @public
   * <p>Specifies a target that writes to a data target in Amazon Redshift.</p>
   */
  AmazonRedshiftTarget?: AmazonRedshiftTarget;

  /**
   * @public
   * <p>Specifies your data quality evaluation criteria. Allows multiple input data and returns a collection of Dynamic Frames.</p>
   */
  EvaluateDataQualityMultiFrame?: EvaluateDataQualityMultiFrame;

  /**
   * @public
   * <p>Specifies a Glue DataBrew recipe node.</p>
   */
  Recipe?: Recipe;

  /**
   * @public
   * <p>Specifies a Snowflake data source.</p>
   */
  SnowflakeSource?: SnowflakeSource;

  /**
   * @public
   * <p>Specifies a target that writes to a Snowflake data source.</p>
   */
  SnowflakeTarget?: SnowflakeTarget;
}

/**
 * @public
 */
export interface CreateJobRequest {
  /**
   * @public
   * <p>The name you assign to this job definition. It must be unique in your account.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>Description of the job being defined.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>This field is reserved for future use.</p>
   */
  LogUri?: string;

  /**
   * @public
   * <p>The name or Amazon Resource Name (ARN) of the IAM role associated with this job.</p>
   */
  Role: string | undefined;

  /**
   * @public
   * <p>An <code>ExecutionProperty</code> specifying the maximum number of concurrent runs allowed
   *       for this job.</p>
   */
  ExecutionProperty?: ExecutionProperty;

  /**
   * @public
   * <p>The <code>JobCommand</code> that runs this job.</p>
   */
  Command: JobCommand | undefined;

  /**
   * @public
   * <p>The default arguments for every run of this job, specified as name-value pairs.</p>
   *          <p>You can specify arguments here that your own job-execution script
   *       consumes, as well as arguments that Glue itself consumes.</p>
   *          <p>Job arguments may be logged. Do not pass plaintext secrets as arguments. Retrieve secrets
   *       from a Glue Connection, Secrets Manager or other secret management
   *       mechanism if you intend to keep them within the Job. </p>
   *          <p>For information about how to specify and consume your own Job arguments, see the <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-python-calling.html">Calling Glue APIs in Python</a> topic in the developer guide.</p>
   *          <p>For information about the arguments you can provide to this field when configuring Spark jobs,
   *      see the <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-etl-glue-arguments.html">Special Parameters Used by Glue</a> topic in the developer guide.</p>
   *          <p>For information about the arguments you can provide to this field when configuring Ray
   *       jobs, see <a href="https://docs.aws.amazon.com/glue/latest/dg/author-job-ray-job-parameters.html">Using
   *       job parameters in Ray jobs</a> in the developer guide.</p>
   */
  DefaultArguments?: Record<string, string>;

  /**
   * @public
   * <p>Arguments for this job that are not overridden when providing job arguments
   *       in a job run, specified as name-value pairs.</p>
   */
  NonOverridableArguments?: Record<string, string>;

  /**
   * @public
   * <p>The connections used for this job.</p>
   */
  Connections?: ConnectionsList;

  /**
   * @public
   * <p>The maximum number of times to retry this job if it fails.</p>
   */
  MaxRetries?: number;

  /**
   * @public
   * @deprecated
   *
   * <p>This parameter is deprecated. Use <code>MaxCapacity</code> instead.</p>
   *          <p>The number of Glue data processing units (DPUs) to allocate to this Job. You can
   *       allocate a minimum of 2 DPUs; the default is 10. A DPU is a relative measure of processing
   *       power that consists of 4 vCPUs of compute capacity and 16 GB of memory. For more information,
   *       see the <a href="https://aws.amazon.com/glue/pricing/">Glue pricing
   *       page</a>.</p>
   */
  AllocatedCapacity?: number;

  /**
   * @public
   * <p>The job timeout in minutes.  This is the maximum time that a job run
   *       can consume resources before it is terminated and enters <code>TIMEOUT</code>
   *       status. The default is 2,880 minutes (48 hours).</p>
   */
  Timeout?: number;

  /**
   * @public
   * <p>For Glue version 1.0 or earlier jobs, using the standard worker type, the number of
   *       Glue data processing units (DPUs) that can be allocated when this job runs. A DPU is
   *       a relative measure of processing power that consists of 4 vCPUs of compute capacity and 16 GB
   *       of memory. For more information, see the <a href="https://aws.amazon.com/glue/pricing/">
   *       Glue pricing page</a>.</p>
   *          <p>For Glue version 2.0+ jobs, you cannot specify a <code>Maximum capacity</code>.
   *       Instead, you should specify a <code>Worker type</code> and the <code>Number of workers</code>.</p>
   *          <p>Do not set <code>MaxCapacity</code> if using <code>WorkerType</code> and <code>NumberOfWorkers</code>.</p>
   *          <p>The value that can be allocated for <code>MaxCapacity</code> depends on whether you are
   *       running a Python shell job, an Apache Spark ETL job, or an Apache Spark streaming ETL
   *       job:</p>
   *          <ul>
   *             <li>
   *                <p>When you specify a Python shell job (<code>JobCommand.Name</code>="pythonshell"), you can
   *           allocate either 0.0625 or 1 DPU. The default is 0.0625 DPU.</p>
   *             </li>
   *             <li>
   *                <p>When you specify an Apache Spark ETL job (<code>JobCommand.Name</code>="glueetl") or Apache
   *         Spark streaming ETL job (<code>JobCommand.Name</code>="gluestreaming"), you can allocate from 2 to 100 DPUs.
   *         The default is 10 DPUs. This job type cannot have a fractional DPU allocation.</p>
   *             </li>
   *          </ul>
   */
  MaxCapacity?: number;

  /**
   * @public
   * <p>The name of the <code>SecurityConfiguration</code> structure to be used with this
   *       job.</p>
   */
  SecurityConfiguration?: string;

  /**
   * @public
   * <p>The tags to use with this job. You may use tags to limit access to the job. For more information about tags in Glue, see <a href="https://docs.aws.amazon.com/glue/latest/dg/monitor-tags.html">Amazon Web Services Tags in Glue</a> in the developer guide.</p>
   */
  Tags?: Record<string, string>;

  /**
   * @public
   * <p>Specifies configuration properties of a job notification.</p>
   */
  NotificationProperty?: NotificationProperty;

  /**
   * @public
   * <p>In Spark jobs, <code>GlueVersion</code> determines the versions of Apache Spark and Python
   *       that Glue available in a job. The Python version indicates the version
   *       supported for jobs of type Spark. </p>
   *          <p>Ray jobs should set <code>GlueVersion</code> to <code>4.0</code> or greater. However,
   *     the versions of Ray, Python and additional libraries available in your Ray job are determined
   *     by the <code>Runtime</code> parameter of the Job command.</p>
   *          <p>For more information about the available Glue versions and corresponding
   *       Spark and Python versions, see <a href="https://docs.aws.amazon.com/glue/latest/dg/add-job.html">Glue version</a> in the developer
   *       guide.</p>
   *          <p>Jobs that are created without specifying a Glue version default to Glue 0.9.</p>
   */
  GlueVersion?: string;

  /**
   * @public
   * <p>The number of workers of a defined <code>workerType</code> that are allocated when a job runs.</p>
   */
  NumberOfWorkers?: number;

  /**
   * @public
   * <p>The type of predefined worker that is allocated when a job runs. Accepts a value of
   *       G.1X, G.2X, G.4X, G.8X or G.025X for Spark jobs. Accepts the value Z.2X for Ray jobs.</p>
   *          <ul>
   *             <li>
   *                <p>For the <code>G.1X</code> worker type, each worker maps to 1 DPU (4 vCPUs, 16 GB of memory) with 84GB disk (approximately 34GB free), and provides 1 executor per worker. We recommend this worker type for workloads such as data transforms, joins, and queries, to offers a scalable and cost effective way to run most jobs.</p>
   *             </li>
   *             <li>
   *                <p>For the <code>G.2X</code> worker type, each worker maps to 2 DPU (8 vCPUs, 32 GB of memory) with 128GB disk (approximately 77GB free), and provides 1 executor per worker. We recommend this worker type for workloads such as data transforms, joins, and queries, to offers a scalable and cost effective way to run most jobs.</p>
   *             </li>
   *             <li>
   *                <p>For the <code>G.4X</code> worker type, each worker maps to 4 DPU (16 vCPUs, 64 GB of memory) with 256GB disk (approximately 235GB free), and provides 1 executor per worker. We recommend this worker type for jobs whose workloads contain your most demanding transforms, aggregations, joins, and queries. This worker type is available only for Glue version 3.0 or later Spark ETL jobs in the following Amazon Web Services Regions: US East (Ohio), US East (N. Virginia), US West (Oregon), Asia Pacific (Singapore), Asia Pacific (Sydney), Asia Pacific (Tokyo), Canada (Central), Europe (Frankfurt), Europe (Ireland), and Europe (Stockholm).</p>
   *             </li>
   *             <li>
   *                <p>For the <code>G.8X</code> worker type, each worker maps to 8 DPU (32 vCPUs, 128 GB of memory) with 512GB disk (approximately 487GB free), and provides 1 executor per worker. We recommend this worker type for jobs whose workloads contain your most demanding transforms, aggregations, joins, and queries. This worker type is available only for Glue version 3.0 or later Spark ETL jobs, in the same Amazon Web Services Regions as supported for the <code>G.4X</code> worker type.</p>
   *             </li>
   *             <li>
   *                <p>For the <code>G.025X</code> worker type, each worker maps to 0.25 DPU (2 vCPUs, 4 GB of memory) with 84GB disk (approximately 34GB free), and provides 1 executor per worker. We recommend this worker type for low volume streaming jobs. This worker type is only available for Glue version 3.0 streaming jobs.</p>
   *             </li>
   *             <li>
   *                <p>For the <code>Z.2X</code> worker type, each worker maps to 2 M-DPU (8vCPUs, 64 GB of memory) with 128 GB disk (approximately 120GB free), and provides up to 8 Ray workers based on the autoscaler.</p>
   *             </li>
   *          </ul>
   */
  WorkerType?: WorkerType | string;

  /**
   * @public
   * <p>The representation of a directed acyclic graph on which both the Glue Studio visual component and Glue Studio code generation is based.</p>
   */
  CodeGenConfigurationNodes?: Record<string, CodeGenConfigurationNode>;

  /**
   * @public
   * <p>Indicates whether the job is run with a standard or flexible execution class. The standard execution-class is ideal for time-sensitive workloads that require fast job startup and dedicated resources.</p>
   *          <p>The flexible execution class is appropriate for time-insensitive jobs whose start and completion times may vary. </p>
   *          <p>Only jobs with Glue version 3.0 and above and command type <code>glueetl</code> will be allowed to set <code>ExecutionClass</code> to <code>FLEX</code>. The flexible execution class is available for Spark jobs.</p>
   */
  ExecutionClass?: ExecutionClass | string;

  /**
   * @public
   * <p>The details for a source control configuration for a job, allowing synchronization of job artifacts to or from a remote repository.</p>
   */
  SourceControlDetails?: SourceControlDetails;
}

/**
 * @public
 * <p>Specifies a job definition.</p>
 */
export interface Job {
  /**
   * @public
   * <p>The name you assign to this job definition.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>A description of the job.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>This field is reserved for future use.</p>
   */
  LogUri?: string;

  /**
   * @public
   * <p>The name or Amazon Resource Name (ARN) of the IAM role associated with this job.</p>
   */
  Role?: string;

  /**
   * @public
   * <p>The time and date that this job definition was created.</p>
   */
  CreatedOn?: Date;

  /**
   * @public
   * <p>The last point in time when this job definition was modified.</p>
   */
  LastModifiedOn?: Date;

  /**
   * @public
   * <p>An <code>ExecutionProperty</code> specifying the maximum number of concurrent runs allowed
   *       for this job.</p>
   */
  ExecutionProperty?: ExecutionProperty;

  /**
   * @public
   * <p>The <code>JobCommand</code> that runs this job.</p>
   */
  Command?: JobCommand;

  /**
   * @public
   * <p>The default arguments for every run of this job, specified as name-value pairs.</p>
   *          <p>You can specify arguments here that your own job-execution script
   *       consumes, as well as arguments that Glue itself consumes.</p>
   *          <p>Job arguments may be logged. Do not pass plaintext secrets as arguments. Retrieve secrets
   *       from a Glue Connection, Secrets Manager or other secret management
   *       mechanism if you intend to keep them within the Job. </p>
   *          <p>For information about how to specify and consume your own Job arguments, see the <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-python-calling.html">Calling Glue APIs in Python</a> topic in the developer guide.</p>
   *          <p>For information about the arguments you can provide to this field when configuring Spark jobs,
   *      see the <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-etl-glue-arguments.html">Special Parameters Used by Glue</a> topic in the developer guide.</p>
   *          <p>For information about the arguments you can provide to this field when configuring Ray
   *       jobs, see <a href="https://docs.aws.amazon.com/glue/latest/dg/author-job-ray-job-parameters.html">Using
   *       job parameters in Ray jobs</a> in the developer guide.</p>
   */
  DefaultArguments?: Record<string, string>;

  /**
   * @public
   * <p>Arguments for this job that are not overridden when providing job arguments
   *       in a job run, specified as name-value pairs.</p>
   */
  NonOverridableArguments?: Record<string, string>;

  /**
   * @public
   * <p>The connections used for this job.</p>
   */
  Connections?: ConnectionsList;

  /**
   * @public
   * <p>The maximum number of times to retry this job after a JobRun fails.</p>
   */
  MaxRetries?: number;

  /**
   * @public
   * @deprecated
   *
   * <p>This field is deprecated. Use <code>MaxCapacity</code> instead.</p>
   *          <p>The number of Glue data processing units (DPUs) allocated to runs of this job. You can
   *       allocate a minimum of 2 DPUs; the default is 10. A DPU is a relative measure of processing
   *       power that consists of 4 vCPUs of compute capacity and 16 GB of memory. For more information,
   *       see the <a href="https://aws.amazon.com/glue/pricing/">Glue pricing
   *       page</a>.</p>
   *          <p></p>
   */
  AllocatedCapacity?: number;

  /**
   * @public
   * <p>The job timeout in minutes.  This is the maximum time that a job run
   *       can consume resources before it is terminated and enters <code>TIMEOUT</code>
   *       status. The default is 2,880 minutes (48 hours).</p>
   */
  Timeout?: number;

  /**
   * @public
   * <p>For Glue version 1.0 or earlier jobs, using the standard worker type, the number of
   *       Glue data processing units (DPUs) that can be allocated when this job runs. A DPU is
   *       a relative measure of processing power that consists of 4 vCPUs of compute capacity and 16 GB
   *       of memory. For more information, see the <a href="https://aws.amazon.com/glue/pricing/">
   *         Glue pricing page</a>.</p>
   *          <p>For Glue version 2.0 or later jobs, you cannot specify a <code>Maximum capacity</code>.
   *       Instead, you should specify a <code>Worker type</code> and the <code>Number of workers</code>.</p>
   *          <p>Do not set <code>MaxCapacity</code> if using <code>WorkerType</code> and <code>NumberOfWorkers</code>.</p>
   *          <p>The value that can be allocated for <code>MaxCapacity</code> depends on whether you are
   *       running a Python shell job, an Apache Spark ETL job, or an Apache Spark streaming ETL
   *       job:</p>
   *          <ul>
   *             <li>
   *                <p>When you specify a Python shell job (<code>JobCommand.Name</code>="pythonshell"), you can
   *           allocate either 0.0625 or 1 DPU. The default is 0.0625 DPU.</p>
   *             </li>
   *             <li>
   *                <p>When you specify an Apache Spark ETL job (<code>JobCommand.Name</code>="glueetl") or Apache
   *             Spark streaming ETL job (<code>JobCommand.Name</code>="gluestreaming"), you can allocate from 2 to 100 DPUs.
   *             The default is 10 DPUs. This job type cannot have a fractional DPU allocation.</p>
   *             </li>
   *          </ul>
   */
  MaxCapacity?: number;

  /**
   * @public
   * <p>The type of predefined worker that is allocated when a job runs. Accepts a value of
   *       G.1X, G.2X, G.4X, G.8X or G.025X for Spark jobs. Accepts the value Z.2X for Ray jobs.</p>
   *          <ul>
   *             <li>
   *                <p>For the <code>G.1X</code> worker type, each worker maps to 1 DPU (4 vCPUs, 16 GB of memory) with 84GB disk (approximately 34GB free), and provides 1 executor per worker. We recommend this worker type for workloads such as data transforms, joins, and queries, to offers a scalable and cost effective way to run most jobs.</p>
   *             </li>
   *             <li>
   *                <p>For the <code>G.2X</code> worker type, each worker maps to 2 DPU (8 vCPUs, 32 GB of memory) with 128GB disk (approximately 77GB free), and provides 1 executor per worker. We recommend this worker type for workloads such as data transforms, joins, and queries, to offers a scalable and cost effective way to run most jobs.</p>
   *             </li>
   *             <li>
   *                <p>For the <code>G.4X</code> worker type, each worker maps to 4 DPU (16 vCPUs, 64 GB of memory) with 256GB disk (approximately 235GB free), and provides 1 executor per worker. We recommend this worker type for jobs whose workloads contain your most demanding transforms, aggregations, joins, and queries. This worker type is available only for Glue version 3.0 or later Spark ETL jobs in the following Amazon Web Services Regions: US East (Ohio), US East (N. Virginia), US West (Oregon), Asia Pacific (Singapore), Asia Pacific (Sydney), Asia Pacific (Tokyo), Canada (Central), Europe (Frankfurt), Europe (Ireland), and Europe (Stockholm).</p>
   *             </li>
   *             <li>
   *                <p>For the <code>G.8X</code> worker type, each worker maps to 8 DPU (32 vCPUs, 128 GB of memory) with 512GB disk (approximately 487GB free), and provides 1 executor per worker. We recommend this worker type for jobs whose workloads contain your most demanding transforms, aggregations, joins, and queries. This worker type is available only for Glue version 3.0 or later Spark ETL jobs, in the same Amazon Web Services Regions as supported for the <code>G.4X</code> worker type.</p>
   *             </li>
   *             <li>
   *                <p>For the <code>G.025X</code> worker type, each worker maps to 0.25 DPU (2 vCPUs, 4 GB of memory) with 84GB disk (approximately 34GB free), and provides 1 executor per worker. We recommend this worker type for low volume streaming jobs. This worker type is only available for Glue version 3.0 streaming jobs.</p>
   *             </li>
   *             <li>
   *                <p>For the <code>Z.2X</code> worker type, each worker maps to 2 M-DPU (8vCPUs, 64 GB of memory) with 128 GB disk (approximately 120GB free), and provides up to 8 Ray workers based on the autoscaler.</p>
   *             </li>
   *          </ul>
   */
  WorkerType?: WorkerType | string;

  /**
   * @public
   * <p>The number of workers of a defined <code>workerType</code> that are allocated when a job runs.</p>
   */
  NumberOfWorkers?: number;

  /**
   * @public
   * <p>The name of the <code>SecurityConfiguration</code> structure to be used with this
   *       job.</p>
   */
  SecurityConfiguration?: string;

  /**
   * @public
   * <p>Specifies configuration properties of a job notification.</p>
   */
  NotificationProperty?: NotificationProperty;

  /**
   * @public
   * <p>In Spark jobs, <code>GlueVersion</code> determines the versions of Apache Spark and Python
   *       that Glue available in a job. The Python version indicates the version
   *       supported for jobs of type Spark. </p>
   *          <p>Ray jobs should set <code>GlueVersion</code> to <code>4.0</code> or greater. However,
   *     the versions of Ray, Python and additional libraries available in your Ray job are determined
   *     by the <code>Runtime</code> parameter of the Job command.</p>
   *          <p>For more information about the available Glue versions and corresponding
   *       Spark and Python versions, see <a href="https://docs.aws.amazon.com/glue/latest/dg/add-job.html">Glue version</a> in the developer
   *       guide.</p>
   *          <p>Jobs that are created without specifying a Glue version default to Glue 0.9.</p>
   */
  GlueVersion?: string;

  /**
   * @public
   * <p>The representation of a directed acyclic graph on which both the Glue Studio visual component and Glue Studio code generation is based.</p>
   */
  CodeGenConfigurationNodes?: Record<string, CodeGenConfigurationNode>;

  /**
   * @public
   * <p>Indicates whether the job is run with a standard or flexible execution class. The standard execution class is ideal for time-sensitive workloads that require fast job startup and dedicated resources.</p>
   *          <p>The flexible execution class is appropriate for time-insensitive jobs whose start and completion times may vary. </p>
   *          <p>Only jobs with Glue version 3.0 and above and command type <code>glueetl</code> will be allowed to set <code>ExecutionClass</code> to <code>FLEX</code>. The flexible execution class is available for Spark jobs.</p>
   */
  ExecutionClass?: ExecutionClass | string;

  /**
   * @public
   * <p>The details for a source control configuration for a job, allowing synchronization of job artifacts to or from a remote repository.</p>
   */
  SourceControlDetails?: SourceControlDetails;
}

/**
 * @public
 * <p>Specifies information used to update an existing job definition. The previous job
 *       definition is completely overwritten by this information.</p>
 */
export interface JobUpdate {
  /**
   * @public
   * <p>Description of the job being defined.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>This field is reserved for future use.</p>
   */
  LogUri?: string;

  /**
   * @public
   * <p>The name or Amazon Resource Name (ARN) of the IAM role associated with this job
   *       (required).</p>
   */
  Role?: string;

  /**
   * @public
   * <p>An <code>ExecutionProperty</code> specifying the maximum number of concurrent runs allowed
   *       for this job.</p>
   */
  ExecutionProperty?: ExecutionProperty;

  /**
   * @public
   * <p>The <code>JobCommand</code> that runs this job (required).</p>
   */
  Command?: JobCommand;

  /**
   * @public
   * <p>The default arguments for every run of this job, specified as name-value pairs.</p>
   *          <p>You can specify arguments here that your own job-execution script
   *       consumes, as well as arguments that Glue itself consumes.</p>
   *          <p>Job arguments may be logged. Do not pass plaintext secrets as arguments. Retrieve secrets
   *       from a Glue Connection, Secrets Manager or other secret management
   *       mechanism if you intend to keep them within the Job. </p>
   *          <p>For information about how to specify and consume your own Job arguments, see the <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-python-calling.html">Calling Glue APIs in Python</a> topic in the developer guide.</p>
   *          <p>For information about the arguments you can provide to this field when configuring Spark jobs,
   *      see the <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-etl-glue-arguments.html">Special Parameters Used by Glue</a> topic in the developer guide.</p>
   *          <p>For information about the arguments you can provide to this field when configuring Ray
   *       jobs, see <a href="https://docs.aws.amazon.com/glue/latest/dg/author-job-ray-job-parameters.html">Using
   *       job parameters in Ray jobs</a> in the developer guide.</p>
   */
  DefaultArguments?: Record<string, string>;

  /**
   * @public
   * <p>Arguments for this job that are not overridden when providing job arguments
   *       in a job run, specified as name-value pairs.</p>
   */
  NonOverridableArguments?: Record<string, string>;

  /**
   * @public
   * <p>The connections used for this job.</p>
   */
  Connections?: ConnectionsList;

  /**
   * @public
   * <p>The maximum number of times to retry this job if it fails.</p>
   */
  MaxRetries?: number;

  /**
   * @public
   * @deprecated
   *
   * <p>This field is deprecated. Use <code>MaxCapacity</code> instead.</p>
   *          <p>The number of Glue data processing units (DPUs) to allocate to this job. You can
   *       allocate a minimum of 2 DPUs; the default is 10. A DPU is a relative measure of processing
   *       power that consists of 4 vCPUs of compute capacity and 16 GB of memory. For more information,
   *       see the <a href="https://aws.amazon.com/glue/pricing/">Glue pricing
   *       page</a>.</p>
   */
  AllocatedCapacity?: number;

  /**
   * @public
   * <p>The job timeout in minutes.  This is the maximum time that a job run
   *       can consume resources before it is terminated and enters <code>TIMEOUT</code>
   *       status. The default is 2,880 minutes (48 hours).</p>
   */
  Timeout?: number;

  /**
   * @public
   * <p>For Glue version 1.0 or earlier jobs, using the standard worker type, the number of
   *       Glue data processing units (DPUs) that can be allocated when this job runs. A DPU is
   *       a relative measure of processing power that consists of 4 vCPUs of compute capacity and 16 GB
   *       of memory. For more information, see the <a href="https://aws.amazon.com/glue/pricing/">
   *       Glue pricing page</a>.</p>
   *          <p>For Glue version 2.0+ jobs, you cannot specify a <code>Maximum capacity</code>.
   *       Instead, you should specify a <code>Worker type</code> and the <code>Number of workers</code>.</p>
   *          <p>Do not set <code>MaxCapacity</code> if using <code>WorkerType</code> and <code>NumberOfWorkers</code>.</p>
   *          <p>The value that can be allocated for <code>MaxCapacity</code> depends on whether you are
   *       running a Python shell job, an Apache Spark ETL job, or an Apache Spark streaming ETL
   *       job:</p>
   *          <ul>
   *             <li>
   *                <p>When you specify a Python shell job (<code>JobCommand.Name</code>="pythonshell"), you can
   *           allocate either 0.0625 or 1 DPU. The default is 0.0625 DPU.</p>
   *             </li>
   *             <li>
   *                <p>When you specify an Apache Spark ETL job (<code>JobCommand.Name</code>="glueetl") or Apache
   *         Spark streaming ETL job (<code>JobCommand.Name</code>="gluestreaming"), you can allocate from 2 to 100 DPUs.
   *         The default is 10 DPUs. This job type cannot have a fractional DPU allocation.</p>
   *             </li>
   *          </ul>
   */
  MaxCapacity?: number;

  /**
   * @public
   * <p>The type of predefined worker that is allocated when a job runs. Accepts a value of
   *       G.1X, G.2X, G.4X, G.8X or G.025X for Spark jobs. Accepts the value Z.2X for Ray jobs.</p>
   *          <ul>
   *             <li>
   *                <p>For the <code>G.1X</code> worker type, each worker maps to 1 DPU (4 vCPUs, 16 GB of memory) with 84GB disk (approximately 34GB free), and provides 1 executor per worker. We recommend this worker type for workloads such as data transforms, joins, and queries, to offers a scalable and cost effective way to run most jobs.</p>
   *             </li>
   *             <li>
   *                <p>For the <code>G.2X</code> worker type, each worker maps to 2 DPU (8 vCPUs, 32 GB of memory) with 128GB disk (approximately 77GB free), and provides 1 executor per worker. We recommend this worker type for workloads such as data transforms, joins, and queries, to offers a scalable and cost effective way to run most jobs.</p>
   *             </li>
   *             <li>
   *                <p>For the <code>G.4X</code> worker type, each worker maps to 4 DPU (16 vCPUs, 64 GB of memory) with 256GB disk (approximately 235GB free), and provides 1 executor per worker. We recommend this worker type for jobs whose workloads contain your most demanding transforms, aggregations, joins, and queries. This worker type is available only for Glue version 3.0 or later Spark ETL jobs in the following Amazon Web Services Regions: US East (Ohio), US East (N. Virginia), US West (Oregon), Asia Pacific (Singapore), Asia Pacific (Sydney), Asia Pacific (Tokyo), Canada (Central), Europe (Frankfurt), Europe (Ireland), and Europe (Stockholm).</p>
   *             </li>
   *             <li>
   *                <p>For the <code>G.8X</code> worker type, each worker maps to 8 DPU (32 vCPUs, 128 GB of memory) with 512GB disk (approximately 487GB free), and provides 1 executor per worker. We recommend this worker type for jobs whose workloads contain your most demanding transforms, aggregations, joins, and queries. This worker type is available only for Glue version 3.0 or later Spark ETL jobs, in the same Amazon Web Services Regions as supported for the <code>G.4X</code> worker type.</p>
   *             </li>
   *             <li>
   *                <p>For the <code>G.025X</code> worker type, each worker maps to 0.25 DPU (2 vCPUs, 4 GB of memory) with 84GB disk (approximately 34GB free), and provides 1 executor per worker. We recommend this worker type for low volume streaming jobs. This worker type is only available for Glue version 3.0 streaming jobs.</p>
   *             </li>
   *             <li>
   *                <p>For the <code>Z.2X</code> worker type, each worker maps to 2 M-DPU (8vCPUs, 64 GB of memory) with 128 GB disk (approximately 120GB free), and provides up to 8 Ray workers based on the autoscaler.</p>
   *             </li>
   *          </ul>
   */
  WorkerType?: WorkerType | string;

  /**
   * @public
   * <p>The number of workers of a defined <code>workerType</code> that are allocated when a job runs.</p>
   */
  NumberOfWorkers?: number;

  /**
   * @public
   * <p>The name of the <code>SecurityConfiguration</code> structure to be used with this
   *       job.</p>
   */
  SecurityConfiguration?: string;

  /**
   * @public
   * <p>Specifies the configuration properties of a job notification.</p>
   */
  NotificationProperty?: NotificationProperty;

  /**
   * @public
   * <p>In Spark jobs, <code>GlueVersion</code> determines the versions of Apache Spark and Python
   *       that Glue available in a job. The Python version indicates the version
   *       supported for jobs of type Spark. </p>
   *          <p>Ray jobs should set <code>GlueVersion</code> to <code>4.0</code> or greater. However,
   *     the versions of Ray, Python and additional libraries available in your Ray job are determined
   *     by the <code>Runtime</code> parameter of the Job command.</p>
   *          <p>For more information about the available Glue versions and corresponding
   *       Spark and Python versions, see <a href="https://docs.aws.amazon.com/glue/latest/dg/add-job.html">Glue version</a> in the developer
   *       guide.</p>
   *          <p>Jobs that are created without specifying a Glue version default to Glue 0.9.</p>
   */
  GlueVersion?: string;

  /**
   * @public
   * <p>The representation of a directed acyclic graph on which both the Glue Studio visual component and Glue Studio code generation is based.</p>
   */
  CodeGenConfigurationNodes?: Record<string, CodeGenConfigurationNode>;

  /**
   * @public
   * <p>Indicates whether the job is run with a standard or flexible execution class. The standard execution-class is ideal for time-sensitive workloads that require fast job startup and dedicated resources.</p>
   *          <p>The flexible execution class is appropriate for time-insensitive jobs whose start and completion times may vary. </p>
   *          <p>Only jobs with Glue version 3.0 and above and command type <code>glueetl</code> will be allowed to set <code>ExecutionClass</code> to <code>FLEX</code>. The flexible execution class is available for Spark jobs.</p>
   */
  ExecutionClass?: ExecutionClass | string;

  /**
   * @public
   * <p>The details for a source control configuration for a job, allowing synchronization of job artifacts to or from a remote repository.</p>
   */
  SourceControlDetails?: SourceControlDetails;
}

/**
 * @public
 */
export interface GetJobResponse {
  /**
   * @public
   * <p>The requested job definition.</p>
   */
  Job?: Job;
}

/**
 * @public
 */
export interface UpdateJobRequest {
  /**
   * @public
   * <p>The name of the job definition to update.</p>
   */
  JobName: string | undefined;

  /**
   * @public
   * <p>Specifies the values with which to update the job definition. Unspecified configuration is removed or reset to default values.</p>
   */
  JobUpdate: JobUpdate | undefined;
}

/**
 * @public
 */
export interface BatchGetJobsResponse {
  /**
   * @public
   * <p>A list of job definitions.</p>
   */
  Jobs?: Job[];

  /**
   * @public
   * <p>A list of names of jobs not found.</p>
   */
  JobsNotFound?: string[];
}

/**
 * @public
 */
export interface GetJobsResponse {
  /**
   * @public
   * <p>A list of job definitions.</p>
   */
  Jobs?: Job[];

  /**
   * @public
   * <p>A continuation token, if not all job definitions have yet been returned.</p>
   */
  NextToken?: string;
}

/**
 * @internal
 */
export const CreateJobRequestFilterSensitiveLog = (obj: CreateJobRequest): any => ({
  ...obj,
  ...(obj.CodeGenConfigurationNodes && { CodeGenConfigurationNodes: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const JobFilterSensitiveLog = (obj: Job): any => ({
  ...obj,
  ...(obj.CodeGenConfigurationNodes && { CodeGenConfigurationNodes: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const JobUpdateFilterSensitiveLog = (obj: JobUpdate): any => ({
  ...obj,
  ...(obj.CodeGenConfigurationNodes && { CodeGenConfigurationNodes: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetJobResponseFilterSensitiveLog = (obj: GetJobResponse): any => ({
  ...obj,
  ...(obj.Job && { Job: JobFilterSensitiveLog(obj.Job) }),
});

/**
 * @internal
 */
export const UpdateJobRequestFilterSensitiveLog = (obj: UpdateJobRequest): any => ({
  ...obj,
  ...(obj.JobUpdate && { JobUpdate: JobUpdateFilterSensitiveLog(obj.JobUpdate) }),
});

/**
 * @internal
 */
export const BatchGetJobsResponseFilterSensitiveLog = (obj: BatchGetJobsResponse): any => ({
  ...obj,
  ...(obj.Jobs && { Jobs: obj.Jobs.map((item) => JobFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const GetJobsResponseFilterSensitiveLog = (obj: GetJobsResponse): any => ({
  ...obj,
  ...(obj.Jobs && { Jobs: obj.Jobs.map((item) => JobFilterSensitiveLog(item)) }),
});
