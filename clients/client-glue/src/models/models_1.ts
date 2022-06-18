// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@aws-sdk/smithy-client";

import { GlueServiceException as __BaseException } from "./GlueServiceException";
import {
  AggFunction,
  BackfillErrorCode,
  BlueprintRunState,
  BlueprintStatus,
  CatalogEncryptionMode,
  CloudWatchEncryptionMode,
  ColumnStatisticsType,
  Comparator,
  Compatibility,
  CompressionType,
  ConnectionType,
  CrawlerLineageSettings,
  CrawlerState,
  CrawlState,
  CsvHeaderOption,
  DeleteBehavior,
  FilterLogicalOperator,
  FilterOperation,
  FilterValueType,
  JobBookmarksEncryptionMode,
  JobRunState,
  JoinType,
  LastCrawlStatus,
  Logical,
  LogicalOperator,
  MLUserDataEncryptionModeString,
  ParquetCompressionType,
  PiiType,
  PrincipalType,
  QuoteChar,
  RecrawlBehavior,
  ResourceType,
  S3EncryptionMode,
  ScheduleState,
  Separator,
  Sort,
  SortDirectionType,
  StartingPosition,
  TargetFormat,
  TaskRunSortColumnType,
  TaskStatusType,
  TaskType,
  TransformSortColumnType,
  TransformStatusType,
  TransformType,
  TriggerState,
  TriggerType,
  UnionType,
  UpdateBehavior,
  UpdateCatalogBehavior,
  WorkerType,
  WorkflowGraph,
  WorkflowRun,
} from "./models_2";

/**
 * <p>Access to a resource was denied.</p>
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  /**
   * <p>A message describing the problem.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessDeniedException, __BaseException>) {
    super({
      name: "AccessDeniedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessDeniedException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Specifies configuration properties of a notification.</p>
 */
export interface NotificationProperty {
  /**
   * <p>After a job run starts, the number of minutes to wait before
   *       sending a job run delay notification.</p>
   */
  NotifyDelayAfter?: number;
}

export namespace NotificationProperty {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NotificationProperty): any => ({
    ...obj,
  });
}

/**
 * <p>Defines an action to be initiated by a trigger.</p>
 */
export interface Action {
  /**
   * <p>The name of a job to be run.</p>
   */
  JobName?: string;

  /**
   * <p>The job arguments used when this trigger fires. For this job run, they replace the default arguments set in the job definition itself.</p>
   *          <p>You can specify arguments here that your own job-execution script
   *       consumes, as well as arguments that Glue itself consumes.</p>
   *          <p>For information about how to specify and consume your own Job arguments, see the <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-python-calling.html">Calling Glue APIs in Python</a> topic in the developer guide.</p>
   *          <p>For information about the key-value pairs that Glue consumes to set up your job, see the <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-etl-glue-arguments.html">Special Parameters Used by Glue</a> topic in the developer guide.</p>
   */
  Arguments?: Record<string, string>;

  /**
   * <p>The <code>JobRun</code> timeout in minutes. This is the maximum time that a job run can
   *       consume resources before it is terminated and enters <code>TIMEOUT</code> status. The default
   *       is 2,880 minutes (48 hours). This overrides the timeout value set in the parent job.</p>
   */
  Timeout?: number;

  /**
   * <p>The name of the <code>SecurityConfiguration</code> structure to be used with this
   *       action.</p>
   */
  SecurityConfiguration?: string;

  /**
   * <p>Specifies configuration properties of a job run notification.</p>
   */
  NotificationProperty?: NotificationProperty;

  /**
   * <p>The name of the crawler to be used with this action.</p>
   */
  CrawlerName?: string;
}

export namespace Action {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Action): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies the set of parameters needed to perform aggregation in the aggregate transform.</p>
 */
export interface AggregateOperation {
  /**
   * <p>Specifies the column on the data set on which the aggregation function will be applied.</p>
   */
  Column: string[] | undefined;

  /**
   * <p>Specifies the aggregation function to apply.</p>
   *          <p>Possible aggregation functions include: avg countDistinct, count, first, last, kurtosis, max, min, skewness,
   *       stddev_samp, stddev_pop, sum, sumDistinct, var_samp, var_pop</p>
   */
  AggFunc: AggFunction | string | undefined;
}

export namespace AggregateOperation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AggregateOperation): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies a transform that groups rows by chosen fields and computes the aggregated value by specified function.</p>
 */
export interface Aggregate {
  /**
   * <p>The name of the transform node.</p>
   */
  Name: string | undefined;

  /**
   * <p>Specifies the fields and rows to use as inputs for the aggregate transform.</p>
   */
  Inputs: string[] | undefined;

  /**
   * <p>Specifies the fields to group by.</p>
   */
  Groups: string[][] | undefined;

  /**
   * <p>Specifies the aggregate functions to be performed on specified fields. </p>
   */
  Aggs: AggregateOperation[] | undefined;
}

export namespace Aggregate {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Aggregate): any => ({
    ...obj,
  });
}

/**
 * <p>A resource to be created or added already exists.</p>
 */
export class AlreadyExistsException extends __BaseException {
  readonly name: "AlreadyExistsException" = "AlreadyExistsException";
  readonly $fault: "client" = "client";
  /**
   * <p>A message describing the problem.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AlreadyExistsException, __BaseException>) {
    super({
      name: "AlreadyExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AlreadyExistsException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Specifies a single column in a Glue schema definition.</p>
 */
export interface GlueStudioSchemaColumn {
  /**
   * <p>The name of the column in the Glue Studio schema.</p>
   */
  Name: string | undefined;

  /**
   * <p>The hive type for this column in the Glue Studio schema.</p>
   */
  Type?: string;
}

export namespace GlueStudioSchemaColumn {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GlueStudioSchemaColumn): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies a user-defined schema when a schema cannot be determined by AWS Glue.</p>
 */
export interface GlueSchema {
  /**
   * <p>Specifies the column definitions that make up a Glue schema.</p>
   */
  Columns?: GlueStudioSchemaColumn[];
}

export namespace GlueSchema {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GlueSchema): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies a connector to an Amazon Athena data source.</p>
 */
export interface AthenaConnectorSource {
  /**
   * <p>The name of the data source.</p>
   */
  Name: string | undefined;

  /**
   * <p>The name of the connection that is associated with the connector.</p>
   */
  ConnectionName: string | undefined;

  /**
   * <p>The name of a connector that assists with accessing the data store in Glue Studio.</p>
   */
  ConnectorName: string | undefined;

  /**
   * <p>The type of connection, such as marketplace.athena or custom.athena, designating a connection to an Amazon Athena data store.</p>
   */
  ConnectionType: string | undefined;

  /**
   * <p>The name of the table in the data source.</p>
   */
  ConnectionTable?: string;

  /**
   * <p>The name of the Cloudwatch log group to read from. For example, <code>/aws-glue/jobs/output</code>.</p>
   */
  SchemaName: string | undefined;

  /**
   * <p>Specifies the data schema for the custom Athena source.</p>
   */
  OutputSchemas?: GlueSchema[];
}

export namespace AthenaConnectorSource {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AthenaConnectorSource): any => ({
    ...obj,
  });
}

/**
 * <p>A structure containing information for audit.</p>
 */
export interface AuditContext {
  /**
   * <p>The context for the audit..</p>
   */
  AdditionalAuditContext?: string;

  /**
   * <p>The requested columns for audit.</p>
   */
  RequestedColumns?: string[];

  /**
   * <p>All columns request for audit.</p>
   */
  AllColumnsRequested?: boolean;
}

export namespace AuditContext {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AuditContext): any => ({
    ...obj,
  });
}

/**
 * <p>A column in a <code>Table</code>.</p>
 */
export interface Column {
  /**
   * <p>The name of the <code>Column</code>.</p>
   */
  Name: string | undefined;

  /**
   * <p>The data type of the <code>Column</code>.</p>
   */
  Type?: string;

  /**
   * <p>A free-form text comment.</p>
   */
  Comment?: string;

  /**
   * <p>These key-value pairs define properties associated with the column.</p>
   */
  Parameters?: Record<string, string>;
}

export namespace Column {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Column): any => ({
    ...obj,
  });
}

/**
 * <p>The unique ID of the schema in the Glue schema registry.</p>
 */
export interface SchemaId {
  /**
   * <p>The Amazon Resource Name (ARN) of the schema. One of <code>SchemaArn</code> or <code>SchemaName</code> has to be provided.</p>
   */
  SchemaArn?: string;

  /**
   * <p>The name of the schema. One of <code>SchemaArn</code> or <code>SchemaName</code> has to be provided.</p>
   */
  SchemaName?: string;

  /**
   * <p>The name of the schema registry that contains the schema.</p>
   */
  RegistryName?: string;
}

export namespace SchemaId {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SchemaId): any => ({
    ...obj,
  });
}

/**
 * <p>An object that references a schema stored in the Glue Schema Registry.</p>
 */
export interface SchemaReference {
  /**
   * <p>A structure that contains schema identity fields. Either this or the <code>SchemaVersionId</code> has to be provided.</p>
   */
  SchemaId?: SchemaId;

  /**
   * <p>The unique ID assigned to a version of the schema. Either this or the <code>SchemaId</code> has to be provided.</p>
   */
  SchemaVersionId?: string;

  /**
   * <p>The version number of the schema.</p>
   */
  SchemaVersionNumber?: number;
}

export namespace SchemaReference {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SchemaReference): any => ({
    ...obj,
  });
}

/**
 * <p>Information about a serialization/deserialization program (SerDe) that serves as an
 *       extractor and loader.</p>
 */
export interface SerDeInfo {
  /**
   * <p>Name of the SerDe.</p>
   */
  Name?: string;

  /**
   * <p>Usually the class that implements the SerDe. An example is
   *         <code>org.apache.hadoop.hive.serde2.columnar.ColumnarSerDe</code>.</p>
   */
  SerializationLibrary?: string;

  /**
   * <p>These key-value pairs define initialization parameters for the SerDe.</p>
   */
  Parameters?: Record<string, string>;
}

export namespace SerDeInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SerDeInfo): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies skewed values in a table. Skewed values are those that occur with very high
 *       frequency.</p>
 */
export interface SkewedInfo {
  /**
   * <p>A list of names of columns that contain skewed values.</p>
   */
  SkewedColumnNames?: string[];

  /**
   * <p>A list of values that appear so frequently as to be considered
   *       skewed.</p>
   */
  SkewedColumnValues?: string[];

  /**
   * <p>A mapping of skewed values to the columns that contain them.</p>
   */
  SkewedColumnValueLocationMaps?: Record<string, string>;
}

export namespace SkewedInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SkewedInfo): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies the sort order of a sorted column.</p>
 */
export interface Order {
  /**
   * <p>The name of the column.</p>
   */
  Column: string | undefined;

  /**
   * <p>Indicates that the column is sorted in ascending order
   *       (<code>== 1</code>), or in descending order (<code>==0</code>).</p>
   */
  SortOrder: number | undefined;
}

export namespace Order {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Order): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the physical storage of table data.</p>
 */
export interface StorageDescriptor {
  /**
   * <p>A list of the <code>Columns</code> in the table.</p>
   */
  Columns?: Column[];

  /**
   * <p>The physical location of the table. By default, this takes the form of the warehouse
   *       location, followed by the database location in the warehouse, followed by the table
   *       name.</p>
   */
  Location?: string;

  AdditionalLocations?: string[];
  /**
   * <p>The input format: <code>SequenceFileInputFormat</code> (binary),
   *       or <code>TextInputFormat</code>, or a custom format.</p>
   */
  InputFormat?: string;

  /**
   * <p>The output format: <code>SequenceFileOutputFormat</code> (binary),
   *       or <code>IgnoreKeyTextOutputFormat</code>, or a custom format.</p>
   */
  OutputFormat?: string;

  /**
   * <p>
   *             <code>True</code> if the data in the table is compressed, or <code>False</code> if
   *       not.</p>
   */
  Compressed?: boolean;

  /**
   * <p>Must be specified if the table contains any dimension columns.</p>
   */
  NumberOfBuckets?: number;

  /**
   * <p>The serialization/deserialization (SerDe) information.</p>
   */
  SerdeInfo?: SerDeInfo;

  /**
   * <p>A list of reducer grouping columns, clustering columns, and
   *       bucketing columns in the table.</p>
   */
  BucketColumns?: string[];

  /**
   * <p>A list specifying the sort order of each bucket in the table.</p>
   */
  SortColumns?: Order[];

  /**
   * <p>The user-supplied properties in key-value form.</p>
   */
  Parameters?: Record<string, string>;

  /**
   * <p>The information about values that appear frequently in a column (skewed values).</p>
   */
  SkewedInfo?: SkewedInfo;

  /**
   * <p>
   *             <code>True</code> if the table data is stored in subdirectories, or <code>False</code> if
   *       not.</p>
   */
  StoredAsSubDirectories?: boolean;

  /**
   * <p>An object that references a schema stored in the Glue Schema Registry.</p>
   *
   * 	        <p>When creating a table, you can pass an empty list of columns for the schema, and instead use a schema reference.</p>
   */
  SchemaReference?: SchemaReference;
}

export namespace StorageDescriptor {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StorageDescriptor): any => ({
    ...obj,
  });
}

/**
 * <p>The structure used to create and update a partition.</p>
 */
export interface PartitionInput {
  /**
   * <p>The values of the partition. Although this parameter is not required by the SDK, you must specify this parameter for a valid input.</p>
   *
   * 	        <p>The values for the keys for the new partition must be passed as an array of String objects that must be ordered in the same order as the partition keys appearing in the Amazon S3 prefix. Otherwise Glue will add the values to the wrong keys.</p>
   */
  Values?: string[];

  /**
   * <p>The last time at which the partition was accessed.</p>
   */
  LastAccessTime?: Date;

  /**
   * <p>Provides information about the physical
   *       location where the partition is stored.</p>
   */
  StorageDescriptor?: StorageDescriptor;

  /**
   * <p>These key-value pairs define partition parameters.</p>
   */
  Parameters?: Record<string, string>;

  /**
   * <p>The last time at which column statistics were computed for this partition.</p>
   */
  LastAnalyzedTime?: Date;
}

export namespace PartitionInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PartitionInput): any => ({
    ...obj,
  });
}

/**
 * <p>Contains details about an error.</p>
 */
export interface ErrorDetail {
  /**
   * <p>The code associated with this error.</p>
   */
  ErrorCode?: string;

  /**
   * <p>A message describing the error.</p>
   */
  ErrorMessage?: string;
}

export namespace ErrorDetail {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ErrorDetail): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about a partition error.</p>
 */
export interface PartitionError {
  /**
   * <p>The values that define the partition.</p>
   */
  PartitionValues?: string[];

  /**
   * <p>The details about the partition error.</p>
   */
  ErrorDetail?: ErrorDetail;
}

export namespace PartitionError {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PartitionError): any => ({
    ...obj,
  });
}

/**
 * <p>A specified entity does not exist</p>
 */
export class EntityNotFoundException extends __BaseException {
  readonly name: "EntityNotFoundException" = "EntityNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * <p>A message describing the problem.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<EntityNotFoundException, __BaseException>) {
    super({
      name: "EntityNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, EntityNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>An encryption operation failed.</p>
 */
export class GlueEncryptionException extends __BaseException {
  readonly name: "GlueEncryptionException" = "GlueEncryptionException";
  readonly $fault: "client" = "client";
  /**
   * <p>The message describing the problem.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<GlueEncryptionException, __BaseException>) {
    super({
      name: "GlueEncryptionException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, GlueEncryptionException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>An internal service error occurred.</p>
 */
export class InternalServiceException extends __BaseException {
  readonly name: "InternalServiceException" = "InternalServiceException";
  readonly $fault: "server" = "server";
  /**
   * <p>A message describing the problem.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServiceException, __BaseException>) {
    super({
      name: "InternalServiceException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServiceException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The input provided was not valid.</p>
 */
export class InvalidInputException extends __BaseException {
  readonly name: "InvalidInputException" = "InvalidInputException";
  readonly $fault: "client" = "client";
  /**
   * <p>A message describing the problem.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidInputException, __BaseException>) {
    super({
      name: "InvalidInputException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidInputException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The operation timed out.</p>
 */
export class OperationTimeoutException extends __BaseException {
  readonly name: "OperationTimeoutException" = "OperationTimeoutException";
  readonly $fault: "client" = "client";
  /**
   * <p>A message describing the problem.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<OperationTimeoutException, __BaseException>) {
    super({
      name: "OperationTimeoutException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, OperationTimeoutException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>A resource numerical limit was exceeded.</p>
 */
export class ResourceNumberLimitExceededException extends __BaseException {
  readonly name: "ResourceNumberLimitExceededException" = "ResourceNumberLimitExceededException";
  readonly $fault: "client" = "client";
  /**
   * <p>A message describing the problem.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNumberLimitExceededException, __BaseException>) {
    super({
      name: "ResourceNumberLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNumberLimitExceededException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Contains a list of values defining partitions.</p>
 */
export interface PartitionValueList {
  /**
   * <p>The list of values.</p>
   */
  Values: string[] | undefined;
}

export namespace PartitionValueList {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PartitionValueList): any => ({
    ...obj,
  });
}

/**
 * <p>An error record for table operations.</p>
 */
export interface TableError {
  /**
   * <p>The name of the table. For Hive compatibility, this must be entirely lowercase.</p>
   */
  TableName?: string;

  /**
   * <p>The details about the error.</p>
   */
  ErrorDetail?: ErrorDetail;
}

export namespace TableError {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TableError): any => ({
    ...obj,
  });
}

/**
 * <p>A resource was not ready for a transaction.</p>
 */
export class ResourceNotReadyException extends __BaseException {
  readonly name: "ResourceNotReadyException" = "ResourceNotReadyException";
  readonly $fault: "client" = "client";
  /**
   * <p>A message describing the problem.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotReadyException, __BaseException>) {
    super({
      name: "ResourceNotReadyException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotReadyException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>An error record for table-version operations.</p>
 */
export interface TableVersionError {
  /**
   * <p>The name of the table in question.</p>
   */
  TableName?: string;

  /**
   * <p>The ID value of the version in question. A <code>VersionID</code> is a string representation of an integer. Each version is incremented by 1.</p>
   */
  VersionId?: string;

  /**
   * <p>The details about the error.</p>
   */
  ErrorDetail?: ErrorDetail;
}

export namespace TableVersionError {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TableVersionError): any => ({
    ...obj,
  });
}

/**
 * <p>When there are multiple versions of a blueprint and the latest version has some errors, this attribute indicates the last successful blueprint definition that is available with the service.</p>
 */
export interface LastActiveDefinition {
  /**
   * <p>The description of the blueprint.</p>
   */
  Description?: string;

  /**
   * <p>The date and time the blueprint was last modified.</p>
   */
  LastModifiedOn?: Date;

  /**
   * <p>A JSON string specifying the parameters for the blueprint.</p>
   */
  ParameterSpec?: string;

  /**
   * <p>Specifies a path in Amazon S3 where the blueprint is published by the Glue developer.</p>
   */
  BlueprintLocation?: string;

  /**
   * <p>Specifies a path in Amazon S3 where the blueprint is copied when you create or update the blueprint.</p>
   */
  BlueprintServiceLocation?: string;
}

export namespace LastActiveDefinition {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LastActiveDefinition): any => ({
    ...obj,
  });
}

/**
 * <p>The details of a blueprint.</p>
 */
export interface Blueprint {
  /**
   * <p>The name of the blueprint.</p>
   */
  Name?: string;

  /**
   * <p>The description of the blueprint.</p>
   */
  Description?: string;

  /**
   * <p>The date and time the blueprint was registered.</p>
   */
  CreatedOn?: Date;

  /**
   * <p>The date and time the blueprint was last modified.</p>
   */
  LastModifiedOn?: Date;

  /**
   * <p>A JSON string that indicates the list of parameter specifications for the blueprint.</p>
   */
  ParameterSpec?: string;

  /**
   * <p>Specifies the path in Amazon S3 where the blueprint is published.</p>
   */
  BlueprintLocation?: string;

  /**
   * <p>Specifies a path in Amazon S3 where the blueprint is copied when you call <code>CreateBlueprint/UpdateBlueprint</code> to register the blueprint in Glue.</p>
   */
  BlueprintServiceLocation?: string;

  /**
   * <p>The status of the blueprint registration.</p>
   *
   * 	        <ul>
   *             <li>
   *                <p>Creating — The blueprint registration is in progress.</p>
   *             </li>
   *             <li>
   *                <p>Active — The blueprint has been successfully registered.</p>
   *             </li>
   *             <li>
   *                <p>Updating — An update to the blueprint registration is in progress.</p>
   *             </li>
   *             <li>
   *                <p>Failed — The blueprint registration failed.</p>
   *             </li>
   *          </ul>
   */
  Status?: BlueprintStatus | string;

  /**
   * <p>An error message.</p>
   */
  ErrorMessage?: string;

  /**
   * <p>When there are multiple versions of a blueprint and the latest version has some errors, this attribute indicates the last successful blueprint definition that is available with the service.</p>
   */
  LastActiveDefinition?: LastActiveDefinition;
}

export namespace Blueprint {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Blueprint): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies AWS Lake Formation configuration settings for the crawler.</p>
 */
export interface LakeFormationConfiguration {
  /**
   * <p>Specifies whether to use AWS Lake Formation credentials for the crawler instead of the IAM role credentials.</p>
   */
  UseLakeFormationCredentials?: boolean;

  /**
   * <p>Required for cross account crawls. For same account crawls as the target data, this can be left as null.</p>
   */
  AccountId?: string;
}

export namespace LakeFormationConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LakeFormationConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>Status and error information about the most recent crawl.</p>
 */
export interface LastCrawlInfo {
  /**
   * <p>Status of the last crawl.</p>
   */
  Status?: LastCrawlStatus | string;

  /**
   * <p>If an error occurred, the error information about the last crawl.</p>
   */
  ErrorMessage?: string;

  /**
   * <p>The log group for the last crawl.</p>
   */
  LogGroup?: string;

  /**
   * <p>The log stream for the last crawl.</p>
   */
  LogStream?: string;

  /**
   * <p>The prefix for a message about this crawl.</p>
   */
  MessagePrefix?: string;

  /**
   * <p>The time at which the crawl started.</p>
   */
  StartTime?: Date;
}

export namespace LastCrawlInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LastCrawlInfo): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies data lineage configuration settings for the crawler.</p>
 */
export interface LineageConfiguration {
  /**
   * <p>Specifies whether data lineage is enabled for the crawler. Valid values are:</p>
   *
   * 	        <ul>
   *             <li>
   *                <p>ENABLE: enables data lineage for the crawler</p>
   *             </li>
   *             <li>
   *                <p>DISABLE: disables data lineage for the crawler</p>
   *             </li>
   *          </ul>
   */
  CrawlerLineageSettings?: CrawlerLineageSettings | string;
}

export namespace LineageConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LineageConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>When crawling an Amazon S3 data source after the first crawl is complete, specifies whether to crawl the entire dataset again or to crawl only folders that were added since the last crawler run. For more information, see <a href="https://docs.aws.amazon.com/glue/latest/dg/incremental-crawls.html">Incremental Crawls in Glue</a> in the developer guide.</p>
 */
export interface RecrawlPolicy {
  /**
   * <p>Specifies whether to crawl the entire dataset again or to crawl only folders that were added since the last crawler run.</p>
   *
   * 	        <p>A value of <code>CRAWL_EVERYTHING</code> specifies crawling the entire dataset again.</p>
   *
   *          <p>A value of <code>CRAWL_NEW_FOLDERS_ONLY</code> specifies crawling only folders that were added since the last crawler run.</p>
   *
   * 	        <p>A value of <code>CRAWL_EVENT_MODE</code> specifies crawling only the changes identified by Amazon S3 events.</p>
   */
  RecrawlBehavior?: RecrawlBehavior | string;
}

export namespace RecrawlPolicy {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RecrawlPolicy): any => ({
    ...obj,
  });
}

/**
 * <p>A scheduling object using a <code>cron</code> statement to schedule an event.</p>
 */
export interface Schedule {
  /**
   * <p>A <code>cron</code> expression used to specify the schedule (see <a href="https://docs.aws.amazon.com/glue/latest/dg/monitor-data-warehouse-schedule.html">Time-Based Schedules for Jobs and Crawlers</a>. For example, to run
   *       something every day at 12:15 UTC, you would specify:
   *       <code>cron(15 12 * * ? *)</code>.</p>
   */
  ScheduleExpression?: string;

  /**
   * <p>The state of the schedule.</p>
   */
  State?: ScheduleState | string;
}

export namespace Schedule {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Schedule): any => ({
    ...obj,
  });
}

/**
 * <p>A policy that specifies update and deletion behaviors for the crawler.</p>
 */
export interface SchemaChangePolicy {
  /**
   * <p>The update behavior when the crawler finds a changed schema.</p>
   */
  UpdateBehavior?: UpdateBehavior | string;

  /**
   * <p>The deletion behavior when the crawler finds a deleted object.</p>
   */
  DeleteBehavior?: DeleteBehavior | string;
}

export namespace SchemaChangePolicy {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SchemaChangePolicy): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies an Glue Data Catalog target.</p>
 */
export interface CatalogTarget {
  /**
   * <p>The name of the database to be synchronized.</p>
   */
  DatabaseName: string | undefined;

  /**
   * <p>A list of the tables to be synchronized.</p>
   */
  Tables: string[] | undefined;

  /**
   * <p>The name of the connection for an Amazon S3-backed Data Catalog table to be a target of the crawl when using a <code>Catalog</code> connection type paired with a <code>NETWORK</code> Connection type.</p>
   */
  ConnectionName?: string;
}

export namespace CatalogTarget {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CatalogTarget): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies a Delta data store to crawl one or more Delta tables.</p>
 */
export interface DeltaTarget {
  /**
   * <p>A list of the Amazon S3 paths to the Delta tables.</p>
   */
  DeltaTables?: string[];

  /**
   * <p>The name of the connection to use to connect to the Delta table target.</p>
   */
  ConnectionName?: string;

  /**
   * <p>Specifies whether to write the manifest files to the Delta table path.</p>
   */
  WriteManifest?: boolean;
}

export namespace DeltaTarget {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeltaTarget): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies an Amazon DynamoDB table to crawl.</p>
 */
export interface DynamoDBTarget {
  /**
   * <p>The name of the DynamoDB table to crawl.</p>
   */
  Path?: string;

  /**
   * <p>Indicates whether to scan all the records, or to sample rows from the table. Scanning all the records can take a long time when the table is not a high throughput table.</p>
   *
   * 	        <p>A value of <code>true</code> means to scan all records, while a value of <code>false</code> means to sample the records. If no value is specified, the value defaults to <code>true</code>.</p>
   */
  scanAll?: boolean;

  /**
   * <p>The percentage of the configured read capacity units to use by the Glue crawler. Read capacity units is a term defined by DynamoDB, and is a numeric value that acts as rate limiter for the number of reads that can be performed on that table per second.</p>
   *
   * 	        <p>The valid values are null or a value between 0.1 to 1.5. A null value is used when user does not provide a value, and defaults to 0.5 of the configured Read Capacity Unit (for provisioned tables), or 0.25 of the max configured Read Capacity Unit (for tables using on-demand mode).</p>
   */
  scanRate?: number;
}

export namespace DynamoDBTarget {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DynamoDBTarget): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies a JDBC data store to crawl.</p>
 */
export interface JdbcTarget {
  /**
   * <p>The name of the connection to use to connect to the JDBC target.</p>
   */
  ConnectionName?: string;

  /**
   * <p>The path of the JDBC target.</p>
   */
  Path?: string;

  /**
   * <p>A list of glob patterns used to exclude from the crawl.
   *       For more information, see <a href="https://docs.aws.amazon.com/glue/latest/dg/add-crawler.html">Catalog Tables with a Crawler</a>.</p>
   */
  Exclusions?: string[];
}

export namespace JdbcTarget {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: JdbcTarget): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies an Amazon DocumentDB or MongoDB data store to crawl.</p>
 */
export interface MongoDBTarget {
  /**
   * <p>The name of the connection to use to connect to the Amazon DocumentDB or MongoDB target.</p>
   */
  ConnectionName?: string;

  /**
   * <p>The path of the Amazon DocumentDB or MongoDB target (database/collection).</p>
   */
  Path?: string;

  /**
   * <p>Indicates whether to scan all the records, or to sample rows from the table. Scanning all the records can take a long time when the table is not a high throughput table.</p>
   *
   * 	        <p>A value of <code>true</code> means to scan all records, while a value of <code>false</code> means to sample the records. If no value is specified, the value defaults to <code>true</code>.</p>
   */
  ScanAll?: boolean;
}

export namespace MongoDBTarget {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MongoDBTarget): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies a data store in Amazon Simple Storage Service (Amazon S3).</p>
 */
export interface S3Target {
  /**
   * <p>The path to the Amazon S3 target.</p>
   */
  Path?: string;

  /**
   * <p>A list of glob patterns used to exclude from the crawl.
   *       For more information, see <a href="https://docs.aws.amazon.com/glue/latest/dg/add-crawler.html">Catalog Tables with a Crawler</a>.</p>
   */
  Exclusions?: string[];

  /**
   * <p>The name of a connection which allows a job or crawler to access data in Amazon S3 within an Amazon Virtual Private Cloud environment (Amazon VPC).</p>
   */
  ConnectionName?: string;

  /**
   * <p>Sets the number of files in each leaf folder to be crawled when crawling sample files in a dataset. If not set, all the files are crawled. A valid value is an integer between 1 and 249.</p>
   */
  SampleSize?: number;

  /**
   * <p>A valid Amazon SQS ARN. For example, <code>arn:aws:sqs:region:account:sqs</code>.</p>
   */
  EventQueueArn?: string;

  /**
   * <p>A valid Amazon dead-letter SQS ARN. For example, <code>arn:aws:sqs:region:account:deadLetterQueue</code>.</p>
   */
  DlqEventQueueArn?: string;
}

export namespace S3Target {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: S3Target): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies data stores to crawl.</p>
 */
export interface CrawlerTargets {
  /**
   * <p>Specifies Amazon Simple Storage Service (Amazon S3) targets.</p>
   */
  S3Targets?: S3Target[];

  /**
   * <p>Specifies JDBC targets.</p>
   */
  JdbcTargets?: JdbcTarget[];

  /**
   * <p>Specifies Amazon DocumentDB or MongoDB targets.</p>
   */
  MongoDBTargets?: MongoDBTarget[];

  /**
   * <p>Specifies Amazon DynamoDB targets.</p>
   */
  DynamoDBTargets?: DynamoDBTarget[];

  /**
   * <p>Specifies Glue Data Catalog targets.</p>
   */
  CatalogTargets?: CatalogTarget[];

  /**
   * <p>Specifies Delta data store targets.</p>
   */
  DeltaTargets?: DeltaTarget[];
}

export namespace CrawlerTargets {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CrawlerTargets): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies a crawler program that examines a data source and uses classifiers to try to
 *       determine its schema. If successful, the crawler records metadata concerning the data source
 *       in the Glue Data Catalog.</p>
 */
export interface Crawler {
  /**
   * <p>The name of the crawler.</p>
   */
  Name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role that's used to access customer resources,
   *       such as Amazon Simple Storage Service (Amazon S3) data.</p>
   */
  Role?: string;

  /**
   * <p>A collection of targets to crawl.</p>
   */
  Targets?: CrawlerTargets;

  /**
   * <p>The name of the database in which the crawler's output is stored.</p>
   */
  DatabaseName?: string;

  /**
   * <p>A description of the crawler.</p>
   */
  Description?: string;

  /**
   * <p>A list of UTF-8 strings that specify the custom classifiers that are associated
   *      with the crawler.</p>
   */
  Classifiers?: string[];

  /**
   * <p>A policy that specifies whether to crawl the entire dataset again, or to crawl only folders that were added since the last crawler run.</p>
   */
  RecrawlPolicy?: RecrawlPolicy;

  /**
   * <p>The policy that specifies update and delete behaviors for the crawler.</p>
   */
  SchemaChangePolicy?: SchemaChangePolicy;

  /**
   * <p>A configuration that specifies whether data lineage is enabled for the crawler.</p>
   */
  LineageConfiguration?: LineageConfiguration;

  /**
   * <p>Indicates whether the crawler is running, or whether a run is pending.</p>
   */
  State?: CrawlerState | string;

  /**
   * <p>The prefix added to the names of tables that are created.</p>
   */
  TablePrefix?: string;

  /**
   * <p>For scheduled crawlers, the schedule when the crawler runs.</p>
   */
  Schedule?: Schedule;

  /**
   * <p>If the crawler is running, contains the total time elapsed since the last crawl
   *       began.</p>
   */
  CrawlElapsedTime?: number;

  /**
   * <p>The time that the crawler was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The time that the crawler was last updated.</p>
   */
  LastUpdated?: Date;

  /**
   * <p>The status of the last crawl, and potentially error information if
   *       an error occurred.</p>
   */
  LastCrawl?: LastCrawlInfo;

  /**
   * <p>The version of the crawler.</p>
   */
  Version?: number;

  /**
   * <p>Crawler configuration information. This versioned JSON string allows users to specify
   *       aspects of a crawler's behavior. For more information, see <a href="https://docs.aws.amazon.com/glue/latest/dg/define-crawler.html#crawler-data-stores-exclude">Include and Exclude
   *         Patterns</a>.</p>
   */
  Configuration?: string;

  /**
   * <p>The name of the <code>SecurityConfiguration</code> structure to be used by this
   *       crawler.</p>
   */
  CrawlerSecurityConfiguration?: string;

  /**
   * <p>Specifies whether the crawler should use AWS Lake Formation credentials for the crawler instead of the IAM role credentials.</p>
   */
  LakeFormationConfiguration?: LakeFormationConfiguration;
}

export namespace Crawler {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Crawler): any => ({
    ...obj,
  });
}

/**
 * <p>An object representing a custom pattern for detecting sensitive data across the columns and rows of your structured data.</p>
 */
export interface CustomEntityType {
  /**
   * <p>A name for the custom pattern that allows it to be retrieved or deleted later. This name must be unique per Amazon Web Services account.</p>
   */
  Name: string | undefined;

  /**
   * <p>A regular expression string that is used for detecting sensitive data in a custom pattern.</p>
   */
  RegexString: string | undefined;

  /**
   * <p>A list of context words. If none of these context words are found within the vicinity of the regular expression the data will not be detected as sensitive data.</p>
   *
   * 	        <p>If no context words are passed only a regular expression is checked.</p>
   */
  ContextWords?: string[];
}

export namespace CustomEntityType {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CustomEntityType): any => ({
    ...obj,
  });
}

/**
 * <p>A development endpoint where a developer can remotely debug extract, transform, and load
 *       (ETL) scripts.</p>
 */
export interface DevEndpoint {
  /**
   * <p>The name of the <code>DevEndpoint</code>.</p>
   */
  EndpointName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role used in this
   *       <code>DevEndpoint</code>.</p>
   */
  RoleArn?: string;

  /**
   * <p>A list of security group identifiers used in this <code>DevEndpoint</code>.</p>
   */
  SecurityGroupIds?: string[];

  /**
   * <p>The subnet ID for this <code>DevEndpoint</code>.</p>
   */
  SubnetId?: string;

  /**
   * <p>The YARN endpoint address used by this <code>DevEndpoint</code>.</p>
   */
  YarnEndpointAddress?: string;

  /**
   * <p>A private IP address to access the <code>DevEndpoint</code> within a VPC if the
   *         <code>DevEndpoint</code> is created within one. The <code>PrivateAddress</code> field is
   *       present only when you create the <code>DevEndpoint</code> within your VPC.</p>
   */
  PrivateAddress?: string;

  /**
   * <p>The Apache Zeppelin port for the remote Apache Spark interpreter.</p>
   */
  ZeppelinRemoteSparkInterpreterPort?: number;

  /**
   * <p>The public IP address used by this <code>DevEndpoint</code>. The
   *         <code>PublicAddress</code> field is present only when you create a non-virtual private cloud
   *       (VPC) <code>DevEndpoint</code>.</p>
   */
  PublicAddress?: string;

  /**
   * <p>The current status of this <code>DevEndpoint</code>.</p>
   */
  Status?: string;

  /**
   * <p>The type of predefined worker that is allocated to the development endpoint. Accepts a value of Standard, G.1X, or G.2X.</p>
   * 	        <ul>
   *             <li>
   *                <p>For the <code>Standard</code> worker type, each worker provides 4 vCPU, 16 GB of memory and a 50GB disk, and 2 executors per worker.</p>
   *             </li>
   *             <li>
   *                <p>For the <code>G.1X</code> worker type, each worker maps to 1 DPU (4 vCPU, 16 GB of memory, 64 GB disk), and provides 1 executor per worker. We recommend this worker type for memory-intensive jobs.</p>
   *             </li>
   *             <li>
   *                <p>For the <code>G.2X</code> worker type, each worker maps to 2 DPU (8 vCPU, 32 GB of memory, 128 GB disk), and provides 1 executor per worker. We recommend this worker type for memory-intensive jobs.</p>
   *             </li>
   *          </ul>
   *
   * 	        <p>Known issue: when a development endpoint is created with the <code>G.2X</code>
   *             <code>WorkerType</code> configuration, the Spark drivers for the development endpoint will run on 4 vCPU, 16 GB of memory, and a 64 GB disk. </p>
   */
  WorkerType?: WorkerType | string;

  /**
   * <p>Glue version determines the versions of Apache Spark and Python that Glue supports. The Python version indicates the version supported for running your ETL scripts on development endpoints. </p>
   *
   *          <p>For more information about the available Glue versions and corresponding Spark and Python versions, see <a href="https://docs.aws.amazon.com/glue/latest/dg/add-job.html">Glue version</a> in the developer guide.</p>
   *
   * 	        <p>Development endpoints that are created without specifying a Glue version default to Glue 0.9.</p>
   *
   * 	        <p>You can specify a version of Python support for development endpoints by using the <code>Arguments</code> parameter in the <code>CreateDevEndpoint</code> or <code>UpdateDevEndpoint</code> APIs. If no arguments are provided, the version defaults to Python 2.</p>
   */
  GlueVersion?: string;

  /**
   * <p>The number of workers of a defined <code>workerType</code> that are allocated to the development endpoint.</p>
   *
   * 		       <p>The maximum number of workers you can define are 299 for <code>G.1X</code>, and 149 for <code>G.2X</code>. </p>
   */
  NumberOfWorkers?: number;

  /**
   * <p>The number of Glue Data Processing Units (DPUs) allocated to this
   *         <code>DevEndpoint</code>.</p>
   */
  NumberOfNodes?: number;

  /**
   * <p>The AWS Availability Zone where this <code>DevEndpoint</code> is located.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The ID of the virtual private cloud (VPC) used by this <code>DevEndpoint</code>.</p>
   */
  VpcId?: string;

  /**
   * <p>The paths to one or more Python libraries in an Amazon S3 bucket that should be loaded in
   *       your <code>DevEndpoint</code>. Multiple values must be complete paths separated by a
   *       comma.</p>
   *
   *          <note>
   *             <p>You can only use pure Python libraries with a <code>DevEndpoint</code>. Libraries that rely on
   *         C extensions, such as the <a href="http://pandas.pydata.org/">pandas</a> Python data
   *         analysis library, are not currently supported.</p>
   *          </note>
   */
  ExtraPythonLibsS3Path?: string;

  /**
   * <p>The path to one or more Java <code>.jar</code> files in an S3 bucket that should be loaded
   *       in your <code>DevEndpoint</code>.</p>
   *          <note>
   *             <p>You can only use pure Java/Scala libraries with a <code>DevEndpoint</code>.</p>
   *          </note>
   */
  ExtraJarsS3Path?: string;

  /**
   * <p>The reason for a current failure in this <code>DevEndpoint</code>.</p>
   */
  FailureReason?: string;

  /**
   * <p>The status of the last update.</p>
   */
  LastUpdateStatus?: string;

  /**
   * <p>The point in time at which this DevEndpoint was created.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * <p>The point in time at which this <code>DevEndpoint</code> was last modified.</p>
   */
  LastModifiedTimestamp?: Date;

  /**
   * <p>The public key to be used by this <code>DevEndpoint</code> for authentication. This
   *       attribute is provided for backward compatibility because the recommended attribute to use is
   *       public keys.</p>
   */
  PublicKey?: string;

  /**
   * <p>A list of public keys to be used by the <code>DevEndpoints</code> for authentication.
   *       Using this attribute is preferred over a single public key because the public keys allow you
   *       to have a different private key per client.</p>
   *          <note>
   *             <p>If you previously created an endpoint with a public key, you must remove that key to be
   *         able to set a list of public keys. Call the <code>UpdateDevEndpoint</code> API operation
   *         with the public key content in the <code>deletePublicKeys</code> attribute, and the list of
   *         new keys in the <code>addPublicKeys</code> attribute.</p>
   *          </note>
   */
  PublicKeys?: string[];

  /**
   * <p>The name of the <code>SecurityConfiguration</code> structure to be used with this
   *         <code>DevEndpoint</code>.</p>
   */
  SecurityConfiguration?: string;

  /**
   * <p>A map of arguments used to configure the <code>DevEndpoint</code>.</p>
   *          <p>Valid arguments are:</p>
   * 	        <ul>
   *             <li>
   *                <p>
   *                   <code>"--enable-glue-datacatalog": ""</code>
   *                </p>
   *             </li>
   *          </ul>
   *
   *          <p>You can specify a version of Python support for development endpoints by using the <code>Arguments</code> parameter in the <code>CreateDevEndpoint</code> or <code>UpdateDevEndpoint</code> APIs. If no arguments are provided, the version defaults to Python 2.</p>
   */
  Arguments?: Record<string, string>;
}

export namespace DevEndpoint {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DevEndpoint): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies options related to data preview for viewing a sample of your data.</p>
 */
export interface StreamingDataPreviewOptions {
  /**
   * <p>The polling time in milliseconds.</p>
   */
  PollingTime?: number;

  /**
   * <p>The limit to the number of records polled.</p>
   */
  RecordPollingLimit?: number;
}

export namespace StreamingDataPreviewOptions {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StreamingDataPreviewOptions): any => ({
    ...obj,
  });
}

/**
 * <p>Additional options for streaming.</p>
 */
export interface KafkaStreamingSourceOptions {
  /**
   * <p>A list of bootstrap server URLs, for example, as <code>b-1.vpc-test-2.o4q88o.c6.kafka.us-east-1.amazonaws.com:9094</code>. This option must be specified in the API call or defined in the table metadata in the Data Catalog.</p>
   */
  BootstrapServers?: string;

  /**
   * <p>The protocol used to communicate with brokers. The possible values are <code>"SSL"</code> or <code>"PLAINTEXT"</code>.</p>
   */
  SecurityProtocol?: string;

  /**
   * <p>The name of the connection.</p>
   */
  ConnectionName?: string;

  /**
   * <p>The topic name as specified in Apache Kafka. You must specify at least one of <code>"topicName"</code>, <code>"assign"</code> or <code>"subscribePattern"</code>.</p>
   */
  TopicName?: string;

  /**
   * <p>The specific <code>TopicPartitions</code> to consume. You must specify at least one of <code>"topicName"</code>, <code>"assign"</code> or <code>"subscribePattern"</code>.</p>
   */
  Assign?: string;

  /**
   * <p>A Java regex string that identifies the topic list to subscribe to. You must specify at least one of <code>"topicName"</code>, <code>"assign"</code> or <code>"subscribePattern"</code>.</p>
   */
  SubscribePattern?: string;

  /**
   * <p>An optional classification.</p>
   */
  Classification?: string;

  /**
   * <p>Specifies the delimiter character.</p>
   */
  Delimiter?: string;

  /**
   * <p>The starting position in the Kafka topic to read data from. The possible values are <code>"earliest"</code> or <code>"latest"</code>. The default value is <code>"latest"</code>.</p>
   */
  StartingOffsets?: string;

  /**
   * <p>The end point when a batch query is ended. Possible values are either <code>"latest"</code> or a JSON string that specifies an ending offset for each <code>TopicPartition</code>.</p>
   */
  EndingOffsets?: string;

  /**
   * <p>The timeout in milliseconds to poll data from Kafka in Spark job executors. The default value is <code>512</code>.</p>
   */
  PollTimeoutMs?: number;

  /**
   * <p>The number of times to retry before failing to fetch Kafka offsets. The default value is <code>3</code>.</p>
   */
  NumRetries?: number;

  /**
   * <p>The time in milliseconds to wait before retrying to fetch Kafka offsets. The default value is <code>10</code>.</p>
   */
  RetryIntervalMs?: number;

  /**
   * <p>The rate limit on the maximum number of offsets that are processed per trigger interval. The specified total number of offsets is proportionally split across <code>topicPartitions</code> of different volumes. The default value is null, which means that the consumer reads all offsets until the known latest offset.</p>
   */
  MaxOffsetsPerTrigger?: number;

  /**
   * <p>The desired minimum number of partitions to read from Kafka. The default value is null, which means that the number of spark partitions is equal to the number of Kafka partitions.</p>
   */
  MinPartitions?: number;
}

export namespace KafkaStreamingSourceOptions {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: KafkaStreamingSourceOptions): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies an Apache Kafka data store in the Data Catalog.</p>
 */
export interface CatalogKafkaSource {
  /**
   * <p>The name of the data store.</p>
   */
  Name: string | undefined;

  /**
   * <p>The amount of time to spend processing each micro batch.</p>
   */
  WindowSize?: number;

  /**
   * <p>Whether to automatically determine the schema from the incoming data.</p>
   */
  DetectSchema?: boolean;

  /**
   * <p>The name of the table in the database to read from.</p>
   */
  Table: string | undefined;

  /**
   * <p>The name of the database to read from.</p>
   */
  Database: string | undefined;

  /**
   * <p>Specifies the streaming options.</p>
   */
  StreamingOptions?: KafkaStreamingSourceOptions;

  /**
   * <p>Specifies options related to data preview for viewing a sample of your data.</p>
   */
  DataPreviewOptions?: StreamingDataPreviewOptions;
}

export namespace CatalogKafkaSource {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CatalogKafkaSource): any => ({
    ...obj,
  });
}

/**
 * <p>Additional options for the Amazon Kinesis streaming data source.</p>
 */
export interface KinesisStreamingSourceOptions {
  /**
   * <p>The URL of the Kinesis endpoint.</p>
   */
  EndpointUrl?: string;

  /**
   * <p>The name of the Kinesis data stream.</p>
   */
  StreamName?: string;

  /**
   * <p>An optional classification.</p>
   */
  Classification?: string;

  /**
   * <p>Specifies the delimiter character.</p>
   */
  Delimiter?: string;

  /**
   * <p>The starting position in the Kinesis data stream to read data from. The possible values are <code>"latest"</code>, <code>"trim_horizon"</code>, or <code>"earliest"</code>. The default value is <code>"latest"</code>.</p>
   */
  StartingPosition?: StartingPosition | string;

  /**
   * <p>The maximum time spent in the job executor to fetch a record from the Kinesis data stream per shard, specified in milliseconds (ms). The default value is <code>1000</code>.</p>
   */
  MaxFetchTimeInMs?: number;

  /**
   * <p>The maximum number of records to fetch per shard in the Kinesis data stream. The default value is <code>100000</code>.</p>
   */
  MaxFetchRecordsPerShard?: number;

  /**
   * <p>The maximum number of records to fetch from the Kinesis data stream in each getRecords operation. The default value is <code>10000</code>.</p>
   */
  MaxRecordPerRead?: number;

  /**
   * <p>Adds a time delay between two consecutive getRecords operations. The default value is <code>"False"</code>. This option is only configurable for Glue version 2.0 and above.</p>
   */
  AddIdleTimeBetweenReads?: boolean;

  /**
   * <p>The minimum time delay between two consecutive getRecords operations, specified in ms. The default value is <code>1000</code>. This option is only configurable for Glue version 2.0 and above.</p>
   */
  IdleTimeBetweenReadsInMs?: number;

  /**
   * <p>The minimum time interval between two ListShards API calls for your script to consider resharding. The default value is <code>1s</code>.</p>
   */
  DescribeShardInterval?: number;

  /**
   * <p>The maximum number of retries for Kinesis Data Streams API requests. The default value is <code>3</code>.</p>
   */
  NumRetries?: number;

  /**
   * <p>The cool-off time period (specified in ms) before retrying the Kinesis Data Streams API call. The default value is <code>1000</code>.</p>
   */
  RetryIntervalMs?: number;

  /**
   * <p>The maximum cool-off time period (specified in ms) between two retries of a Kinesis Data Streams API call. The default value is <code>10000</code>.</p>
   */
  MaxRetryIntervalMs?: number;

  /**
   * <p>Avoids creating an empty microbatch job by checking for unread data in the Kinesis data stream before the batch is started. The default value is <code>"False"</code>.</p>
   */
  AvoidEmptyBatches?: boolean;

  /**
   * <p>The Amazon Resource Name (ARN) of the Kinesis data stream.</p>
   */
  StreamArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the role to assume using AWS Security Token Service (AWS STS). This role must have permissions for describe or read record operations for the Kinesis data stream. You must use this parameter when accessing a data stream in a different account. Used in conjunction with <code>"awsSTSSessionName"</code>.</p>
   */
  RoleArn?: string;

  /**
   * <p>An identifier for the session assuming the role using AWS STS. You must use this parameter when accessing a data stream in a different account. Used in conjunction with <code>"awsSTSRoleARN"</code>.</p>
   */
  RoleSessionName?: string;
}

export namespace KinesisStreamingSourceOptions {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: KinesisStreamingSourceOptions): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies a Kinesis data source in the Glue Data Catalog.</p>
 */
export interface CatalogKinesisSource {
  /**
   * <p>The name of the data source.</p>
   */
  Name: string | undefined;

  /**
   * <p>The amount of time to spend processing each micro batch.</p>
   */
  WindowSize?: number;

  /**
   * <p>Whether to automatically determine the schema from the incoming data.</p>
   */
  DetectSchema?: boolean;

  /**
   * <p>The name of the table in the database to read from.</p>
   */
  Table: string | undefined;

  /**
   * <p>The name of the database to read from.</p>
   */
  Database: string | undefined;

  /**
   * <p>Additional options for the Kinesis streaming data source.</p>
   */
  StreamingOptions?: KinesisStreamingSourceOptions;

  /**
   * <p>Additional options for data preview.</p>
   */
  DataPreviewOptions?: StreamingDataPreviewOptions;
}

export namespace CatalogKinesisSource {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CatalogKinesisSource): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies a data store in the Glue Data Catalog.</p>
 */
export interface CatalogSource {
  /**
   * <p>The name of the data store.</p>
   */
  Name: string | undefined;

  /**
   * <p>The name of the database to read from.</p>
   */
  Database: string | undefined;

  /**
   * <p>The name of the table in the database to read from.</p>
   */
  Table: string | undefined;
}

export namespace CatalogSource {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CatalogSource): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies a target that uses a Glue Data Catalog table.</p>
 */
export interface BasicCatalogTarget {
  /**
   * <p>The name of your data target.</p>
   */
  Name: string | undefined;

  /**
   * <p>The nodes that are inputs to the data target.</p>
   */
  Inputs: string[] | undefined;

  /**
   * <p>The database that contains the table you want to use as the target. This database must already exist in the Data Catalog.</p>
   */
  Database: string | undefined;

  /**
   * <p>The table that defines the schema of your output data. This table must already exist in the Data Catalog.</p>
   */
  Table: string | undefined;
}

export namespace BasicCatalogTarget {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BasicCatalogTarget): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies a transform that uses custom code you provide to perform the data transformation. The output is a collection of DynamicFrames.</p>
 */
export interface CustomCode {
  /**
   * <p>The name of the transform node.</p>
   */
  Name: string | undefined;

  /**
   * <p>The data inputs identified by their node names.</p>
   */
  Inputs: string[] | undefined;

  /**
   * <p>The custom code that is used to perform the data transformation.</p>
   */
  Code: string | undefined;

  /**
   * <p>The name defined for the custom code node class.</p>
   */
  ClassName: string | undefined;

  /**
   * <p>Specifies the data schema for the custom code transform.</p>
   */
  OutputSchemas?: GlueSchema[];
}

export namespace CustomCode {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CustomCode): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies an Apache Kafka data store.</p>
 */
export interface DirectKafkaSource {
  /**
   * <p>The name of the data store.</p>
   */
  Name: string | undefined;

  /**
   * <p>Specifies the streaming options.</p>
   */
  StreamingOptions?: KafkaStreamingSourceOptions;

  /**
   * <p>The amount of time to spend processing each micro batch.</p>
   */
  WindowSize?: number;

  /**
   * <p>Whether to automatically determine the schema from the incoming data.</p>
   */
  DetectSchema?: boolean;

  /**
   * <p>Specifies options related to data preview for viewing a sample of your data.</p>
   */
  DataPreviewOptions?: StreamingDataPreviewOptions;
}

export namespace DirectKafkaSource {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DirectKafkaSource): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies a direct Amazon Kinesis data source.</p>
 */
export interface DirectKinesisSource {
  /**
   * <p>The name of the data source.</p>
   */
  Name: string | undefined;

  /**
   * <p>The amount of time to spend processing each micro batch.</p>
   */
  WindowSize?: number;

  /**
   * <p>Whether to automatically determine the schema from the incoming data.</p>
   */
  DetectSchema?: boolean;

  /**
   * <p>Additional options for the Kinesis streaming data source.</p>
   */
  StreamingOptions?: KinesisStreamingSourceOptions;

  /**
   * <p>Additional options for data preview.</p>
   */
  DataPreviewOptions?: StreamingDataPreviewOptions;
}

export namespace DirectKinesisSource {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DirectKinesisSource): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies a transform that removes rows of repeating data from a data set. </p>
 */
export interface DropDuplicates {
  /**
   * <p>The name of the transform node.</p>
   */
  Name: string | undefined;

  /**
   * <p>The data inputs identified by their node names.</p>
   */
  Inputs: string[] | undefined;

  /**
   * <p>The name of the columns to be merged or removed if repeating.</p>
   */
  Columns?: string[][];
}

export namespace DropDuplicates {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DropDuplicates): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies a transform that chooses the data property keys that you want to drop.</p>
 */
export interface DropFields {
  /**
   * <p>The name of the transform node.</p>
   */
  Name: string | undefined;

  /**
   * <p>The data inputs identified by their node names.</p>
   */
  Inputs: string[] | undefined;

  /**
   * <p>A JSON path to a variable in the data structure.</p>
   */
  Paths: string[][] | undefined;
}

export namespace DropFields {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DropFields): any => ({
    ...obj,
  });
}

/**
 * <p>Represents whether certain values are recognized as null values for removal.</p>
 */
export interface NullCheckBoxList {
  /**
   * <p>Specifies that an empty string is considered as a null value.</p>
   */
  IsEmpty?: boolean;

  /**
   * <p>Specifies that a value spelling out the word 'null' is considered as a null value.</p>
   */
  IsNullString?: boolean;

  /**
   * <p>Specifies that an integer value of -1 is considered as a null value.</p>
   */
  IsNegOne?: boolean;
}

export namespace NullCheckBoxList {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NullCheckBoxList): any => ({
    ...obj,
  });
}

/**
 * <p>A structure representing the datatype of the value.</p>
 */
export interface Datatype {
  /**
   * <p>The datatype of the value.</p>
   */
  Id: string | undefined;

  /**
   * <p>A label assigned to the datatype.</p>
   */
  Label: string | undefined;
}

export namespace Datatype {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Datatype): any => ({
    ...obj,
  });
}

/**
 * <p>Represents a custom null value such as a zeros or other value being used as a null placeholder unique to the dataset.</p>
 */
export interface NullValueField {
  /**
   * <p>The value of the null placeholder.</p>
   */
  Value: string | undefined;

  /**
   * <p>The datatype of the value.</p>
   */
  Datatype: Datatype | undefined;
}

export namespace NullValueField {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NullValueField): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies a transform that removes columns from the dataset if all values in the column are 'null'. By default, Glue Studio will recognize null objects, but some values such as empty strings, strings that are "null", -1 integers or other placeholders such as zeros, are not automatically recognized as nulls.</p>
 */
export interface DropNullFields {
  /**
   * <p>The name of the transform node.</p>
   */
  Name: string | undefined;

  /**
   * <p>The data inputs identified by their node names.</p>
   */
  Inputs: string[] | undefined;

  /**
   * <p>A structure that represents whether certain values are recognized as null values for removal.</p>
   */
  NullCheckBoxList?: NullCheckBoxList;

  /**
   * <p>A structure that specifies a list of NullValueField structures that represent a custom null value such as zero or other value being used as a null placeholder unique to the dataset.</p>
   *
   *          <p>The <code>DropNullFields</code> transform removes custom null values only if both the value of the null placeholder and the datatype match the data.</p>
   */
  NullTextList?: NullValueField[];
}

export namespace DropNullFields {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DropNullFields): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies a DynamoDB data source in the Glue Data Catalog.</p>
 */
export interface DynamoDBCatalogSource {
  /**
   * <p>The name of the data source.</p>
   */
  Name: string | undefined;

  /**
   * <p>The name of the database to read from.</p>
   */
  Database: string | undefined;

  /**
   * <p>The name of the table in the database to read from.</p>
   */
  Table: string | undefined;
}

export namespace DynamoDBCatalogSource {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DynamoDBCatalogSource): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies a transform that locates records in the dataset that have missing values and adds a new field with a value determined by imputation. The input data set is used to train the machine learning model that determines what the missing value should be.</p>
 */
export interface FillMissingValues {
  /**
   * <p>The name of the transform node.</p>
   */
  Name: string | undefined;

  /**
   * <p>The data inputs identified by their node names.</p>
   */
  Inputs: string[] | undefined;

  /**
   * <p>A JSON path to a variable in the data structure for the dataset that is imputed.</p>
   */
  ImputedPath: string | undefined;

  /**
   * <p>A JSON path to a variable in the data structure for the dataset that is filled.</p>
   */
  FilledPath?: string;
}

export namespace FillMissingValues {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FillMissingValues): any => ({
    ...obj,
  });
}

/**
 * <p>Represents a single entry in the list of values for a <code>FilterExpression</code>. </p>
 */
export interface FilterValue {
  /**
   * <p>The type of filter value.</p>
   */
  Type: FilterValueType | string | undefined;

  /**
   * <p>The value to be associated.</p>
   */
  Value: string[] | undefined;
}

export namespace FilterValue {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FilterValue): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies a filter expression.</p>
 */
export interface FilterExpression {
  /**
   * <p>The type of operation to perform in the expression.</p>
   */
  Operation: FilterOperation | string | undefined;

  /**
   * <p>Whether the expression is to be negated.</p>
   */
  Negated?: boolean;

  /**
   * <p>A list of filter values.</p>
   */
  Values: FilterValue[] | undefined;
}

export namespace FilterExpression {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FilterExpression): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies a transform that splits a dataset into two, based on a filter condition.</p>
 */
export interface Filter {
  /**
   * <p>The name of the transform node.</p>
   */
  Name: string | undefined;

  /**
   * <p>The data inputs identified by their node names.</p>
   */
  Inputs: string[] | undefined;

  /**
   * <p>The operator used to filter rows by comparing the key value to a specified value.</p>
   */
  LogicalOperator: FilterLogicalOperator | string | undefined;

  /**
   * <p>Specifies a filter expression.</p>
   */
  Filters: FilterExpression[] | undefined;
}

export namespace Filter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Filter): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies additional connection options for the Amazon S3 data store.</p>
 */
export interface S3SourceAdditionalOptions {
  /**
   * <p>Sets the upper limit for the target size of the dataset in bytes that will be processed.</p>
   */
  BoundedSize?: number;

  /**
   * <p>Sets the upper limit for the target number of files that will be processed.</p>
   */
  BoundedFiles?: number;
}

export namespace S3SourceAdditionalOptions {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: S3SourceAdditionalOptions): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies the data store in the governed Glue Data Catalog.</p>
 */
export interface GovernedCatalogSource {
  /**
   * <p>The name of the data store.</p>
   */
  Name: string | undefined;

  /**
   * <p>The database to read from.</p>
   */
  Database: string | undefined;

  /**
   * <p>The database table to read from.</p>
   */
  Table: string | undefined;

  /**
   * <p>Partitions satisfying this predicate are deleted. Files within the retention period in these partitions are not deleted. Set to <code>""</code> – empty by default.</p>
   */
  PartitionPredicate?: string;

  /**
   * <p>Specifies additional connection options.</p>
   */
  AdditionalOptions?: S3SourceAdditionalOptions;
}

export namespace GovernedCatalogSource {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GovernedCatalogSource): any => ({
    ...obj,
  });
}

/**
 * <p>A policy that specifies update behavior for the crawler.</p>
 */
export interface CatalogSchemaChangePolicy {
  /**
   * <p>Whether to use the specified update behavior when the crawler finds a changed schema.</p>
   */
  EnableUpdateCatalog?: boolean;

  /**
   * <p>The update behavior when the crawler finds a changed schema.</p>
   */
  UpdateBehavior?: UpdateCatalogBehavior | string;
}

export namespace CatalogSchemaChangePolicy {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CatalogSchemaChangePolicy): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies a data target that writes to Amazon S3 using the Glue Data Catalog.</p>
 */
export interface GovernedCatalogTarget {
  /**
   * <p>The name of the data target.</p>
   */
  Name: string | undefined;

  /**
   * <p>The nodes that are inputs to the data target.</p>
   */
  Inputs: string[] | undefined;

  /**
   * <p>Specifies native partitioning using a sequence of keys.</p>
   */
  PartitionKeys?: string[][];

  /**
   * <p>The name of the table in the database to write to.</p>
   */
  Table: string | undefined;

  /**
   * <p>The name of the database to write to.</p>
   */
  Database: string | undefined;

  /**
   * <p>A policy that specifies update behavior for the governed catalog.</p>
   */
  SchemaChangePolicy?: CatalogSchemaChangePolicy;
}

export namespace GovernedCatalogTarget {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GovernedCatalogTarget): any => ({
    ...obj,
  });
}

export enum JDBCDataType {
  ARRAY = "ARRAY",
  BIGINT = "BIGINT",
  BINARY = "BINARY",
  BIT = "BIT",
  BLOB = "BLOB",
  BOOLEAN = "BOOLEAN",
  CHAR = "CHAR",
  CLOB = "CLOB",
  DATALINK = "DATALINK",
  DATE = "DATE",
  DECIMAL = "DECIMAL",
  DISTINCT = "DISTINCT",
  DOUBLE = "DOUBLE",
  FLOAT = "FLOAT",
  INTEGER = "INTEGER",
  JAVA_OBJECT = "JAVA_OBJECT",
  LONGNVARCHAR = "LONGNVARCHAR",
  LONGVARBINARY = "LONGVARBINARY",
  LONGVARCHAR = "LONGVARCHAR",
  NCHAR = "NCHAR",
  NCLOB = "NCLOB",
  NULL = "NULL",
  NUMERIC = "NUMERIC",
  NVARCHAR = "NVARCHAR",
  OTHER = "OTHER",
  REAL = "REAL",
  REF = "REF",
  REF_CURSOR = "REF_CURSOR",
  ROWID = "ROWID",
  SMALLINT = "SMALLINT",
  SQLXML = "SQLXML",
  STRUCT = "STRUCT",
  TIME = "TIME",
  TIMESTAMP = "TIMESTAMP",
  TIMESTAMP_WITH_TIMEZONE = "TIMESTAMP_WITH_TIMEZONE",
  TIME_WITH_TIMEZONE = "TIME_WITH_TIMEZONE",
  TINYINT = "TINYINT",
  VARBINARY = "VARBINARY",
  VARCHAR = "VARCHAR",
}

export enum GlueRecordType {
  BIGDECIMAL = "BIGDECIMAL",
  BYTE = "BYTE",
  DATE = "DATE",
  DOUBLE = "DOUBLE",
  FLOAT = "FLOAT",
  INT = "INT",
  LONG = "LONG",
  SHORT = "SHORT",
  STRING = "STRING",
  TIMESTAMP = "TIMESTAMP",
}

/**
 * <p>Additional connection options for the connector.</p>
 */
export interface JDBCConnectorOptions {
  /**
   * <p>Extra condition clause to filter data from source. For example:</p>
   *
   * 	        <p>
   *             <code>BillingCity='Mountain View'</code>
   *          </p>
   *
   * 	        <p>When using a query instead of a table name, you should validate that the query works with the specified <code>filterPredicate</code>.</p>
   */
  FilterPredicate?: string;

  /**
   * <p>The name of an integer column that is used for partitioning. This option works only when it's included with <code>lowerBound</code>, <code>upperBound</code>, and <code>numPartitions</code>. This option works the same way as in the Spark SQL JDBC reader.</p>
   */
  PartitionColumn?: string;

  /**
   * <p>The minimum value of <code>partitionColumn</code> that is used to decide partition stride.</p>
   */
  LowerBound?: number;

  /**
   * <p>The maximum value of <code>partitionColumn</code> that is used to decide partition stride.</p>
   */
  UpperBound?: number;

  /**
   * <p>The number of partitions. This value, along with <code>lowerBound</code> (inclusive) and <code>upperBound</code> (exclusive), form partition strides for generated <code>WHERE</code> clause expressions that are used to split the <code>partitionColumn</code>.</p>
   */
  NumPartitions?: number;

  /**
   * <p>The name of the job bookmark keys on which to sort.</p>
   */
  JobBookmarkKeys?: string[];

  /**
   * <p>Specifies an ascending or descending sort order.</p>
   */
  JobBookmarkKeysSortOrder?: string;

  /**
   * <p>Custom data type mapping that builds a mapping from a JDBC data type to an Glue data type. For example, the option <code>"dataTypeMapping":{"FLOAT":"STRING"}</code> maps data fields of JDBC type <code>FLOAT</code> into the Java <code>String</code> type by calling the <code>ResultSet.getString()</code> method of the driver, and uses it to build the Glue record. The <code>ResultSet</code> object is implemented by each driver, so the behavior is specific to the driver you use. Refer to the documentation for your JDBC driver to understand how the driver performs the conversions.</p>
   */
  DataTypeMapping?: Record<string, GlueRecordType | string>;
}

export namespace JDBCConnectorOptions {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: JDBCConnectorOptions): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies a connector to a JDBC data source.</p>
 */
export interface JDBCConnectorSource {
  /**
   * <p>The name of the data source.</p>
   */
  Name: string | undefined;

  /**
   * <p>The name of the connection that is associated with the connector.</p>
   */
  ConnectionName: string | undefined;

  /**
   * <p>The name of a connector that assists with accessing the data store in Glue Studio.</p>
   */
  ConnectorName: string | undefined;

  /**
   * <p>The type of connection, such as marketplace.jdbc or custom.jdbc, designating a connection to a JDBC data store.</p>
   */
  ConnectionType: string | undefined;

  /**
   * <p>Additional connection options for the connector.</p>
   */
  AdditionalOptions?: JDBCConnectorOptions;

  /**
   * <p>The name of the table in the data source.</p>
   */
  ConnectionTable?: string;

  /**
   * <p>The table or SQL query to get the data from. You can specify either <code>ConnectionTable</code> or <code>query</code>, but not both.</p>
   */
  Query?: string;

  /**
   * <p>Specifies the data schema for the custom JDBC source.</p>
   */
  OutputSchemas?: GlueSchema[];
}

export namespace JDBCConnectorSource {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: JDBCConnectorSource): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies a data target that writes to Amazon S3 in Apache Parquet columnar storage.</p>
 */
export interface JDBCConnectorTarget {
  /**
   * <p>The name of the data target.</p>
   */
  Name: string | undefined;

  /**
   * <p>The nodes that are inputs to the data target.</p>
   */
  Inputs: string[] | undefined;

  /**
   * <p>The name of the connection that is associated with the connector.</p>
   */
  ConnectionName: string | undefined;

  /**
   * <p>The name of the table in the data target.</p>
   */
  ConnectionTable: string | undefined;

  /**
   * <p>The name of a connector that will be used.</p>
   */
  ConnectorName: string | undefined;

  /**
   * <p>The type of connection, such as marketplace.jdbc or custom.jdbc, designating a connection to a JDBC data target.</p>
   */
  ConnectionType: string | undefined;

  /**
   * <p>Additional connection options for the connector.</p>
   */
  AdditionalOptions?: Record<string, string>;

  /**
   * <p>Specifies the data schema for the JDBC target.</p>
   */
  OutputSchemas?: GlueSchema[];
}

export namespace JDBCConnectorTarget {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: JDBCConnectorTarget): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies a column to be joined.</p>
 */
export interface JoinColumn {
  /**
   * <p>The column to be joined.</p>
   */
  From: string | undefined;

  /**
   * <p>The key of the column to be joined.</p>
   */
  Keys: string[][] | undefined;
}

export namespace JoinColumn {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: JoinColumn): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies a transform that joins two datasets into one dataset using a comparison phrase on the specified data property keys. You can use inner, outer, left, right, left semi, and left anti joins.</p>
 */
export interface Join {
  /**
   * <p>The name of the transform node.</p>
   */
  Name: string | undefined;

  /**
   * <p>The data inputs identified by their node names.</p>
   */
  Inputs: string[] | undefined;

  /**
   * <p>Specifies the type of join to be performed on the datasets.</p>
   */
  JoinType: JoinType | string | undefined;

  /**
   * <p>A list of the two columns to be joined.</p>
   */
  Columns: JoinColumn[] | undefined;
}

export namespace Join {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Join): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies a transform that merges a <code>DynamicFrame</code> with a staging <code>DynamicFrame</code> based on the specified primary keys to identify records. Duplicate records (records with the same primary keys) are not de-duplicated. </p>
 */
export interface Merge {
  /**
   * <p>The name of the transform node.</p>
   */
  Name: string | undefined;

  /**
   * <p>The data inputs identified by their node names.</p>
   */
  Inputs: string[] | undefined;

  /**
   * <p>The source <code>DynamicFrame</code> that will be merged with a staging <code>DynamicFrame</code>.</p>
   */
  Source: string | undefined;

  /**
   * <p>The list of primary key fields to match records from the source and staging dynamic frames.</p>
   */
  PrimaryKeys: string[][] | undefined;
}

export namespace Merge {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Merge): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies a Microsoft SQL server data source in the Glue Data Catalog.</p>
 */
export interface MicrosoftSQLServerCatalogSource {
  /**
   * <p>The name of the data source.</p>
   */
  Name: string | undefined;

  /**
   * <p>The name of the database to read from.</p>
   */
  Database: string | undefined;

  /**
   * <p>The name of the table in the database to read from.</p>
   */
  Table: string | undefined;
}

export namespace MicrosoftSQLServerCatalogSource {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MicrosoftSQLServerCatalogSource): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies a target that uses Microsoft SQL.</p>
 */
export interface MicrosoftSQLServerCatalogTarget {
  /**
   * <p>The name of the data target.</p>
   */
  Name: string | undefined;

  /**
   * <p>The nodes that are inputs to the data target.</p>
   */
  Inputs: string[] | undefined;

  /**
   * <p>The name of the database to write to.</p>
   */
  Database: string | undefined;

  /**
   * <p>The name of the table in the database to write to.</p>
   */
  Table: string | undefined;
}

export namespace MicrosoftSQLServerCatalogTarget {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MicrosoftSQLServerCatalogTarget): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies a MySQL data source in the Glue Data Catalog.</p>
 */
export interface MySQLCatalogSource {
  /**
   * <p>The name of the data source.</p>
   */
  Name: string | undefined;

  /**
   * <p>The name of the database to read from.</p>
   */
  Database: string | undefined;

  /**
   * <p>The name of the table in the database to read from.</p>
   */
  Table: string | undefined;
}

export namespace MySQLCatalogSource {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MySQLCatalogSource): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies a target that uses MySQL.</p>
 */
export interface MySQLCatalogTarget {
  /**
   * <p>The name of the data target.</p>
   */
  Name: string | undefined;

  /**
   * <p>The nodes that are inputs to the data target.</p>
   */
  Inputs: string[] | undefined;

  /**
   * <p>The name of the database to write to.</p>
   */
  Database: string | undefined;

  /**
   * <p>The name of the table in the database to write to.</p>
   */
  Table: string | undefined;
}

export namespace MySQLCatalogTarget {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MySQLCatalogTarget): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies an Oracle data source in the Glue Data Catalog.</p>
 */
export interface OracleSQLCatalogSource {
  /**
   * <p>The name of the data source.</p>
   */
  Name: string | undefined;

  /**
   * <p>The name of the database to read from.</p>
   */
  Database: string | undefined;

  /**
   * <p>The name of the table in the database to read from.</p>
   */
  Table: string | undefined;
}

export namespace OracleSQLCatalogSource {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OracleSQLCatalogSource): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies a target that uses Oracle SQL.</p>
 */
export interface OracleSQLCatalogTarget {
  /**
   * <p>The name of the data target.</p>
   */
  Name: string | undefined;

  /**
   * <p>The nodes that are inputs to the data target.</p>
   */
  Inputs: string[] | undefined;

  /**
   * <p>The name of the database to write to.</p>
   */
  Database: string | undefined;

  /**
   * <p>The name of the table in the database to write to.</p>
   */
  Table: string | undefined;
}

export namespace OracleSQLCatalogTarget {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OracleSQLCatalogTarget): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies a transform that identifies, removes or masks PII data.</p>
 */
export interface PIIDetection {
  /**
   * <p>The name of the transform node.</p>
   */
  Name: string | undefined;

  /**
   * <p>The node ID inputs to the transform.</p>
   */
  Inputs: string[] | undefined;

  /**
   * <p>Indicates the type of PIIDetection transform. </p>
   */
  PiiType: PiiType | string | undefined;

  /**
   * <p>Indicates the types of entities the PIIDetection transform will identify as PII data. </p>
   *          <p>
   *        PII type entities include: PERSON_NAME, DATE, USA_SNN, EMAIL, USA_ITIN, USA_PASSPORT_NUMBER, PHONE_NUMBER, BANK_ACCOUNT,
   *        IP_ADDRESS, MAC_ADDRESS, USA_CPT_CODE, USA_HCPCS_CODE, USA_NATIONAL_DRUG_CODE, USA_MEDICARE_BENEFICIARY_IDENTIFIER,
   *        USA_HEALTH_INSURANCE_CLAIM_NUMBER,CREDIT_CARD,USA_NATIONAL_PROVIDER_IDENTIFIER,USA_DEA_NUMBER,USA_DRIVING_LICENSE
   *     </p>
   */
  EntityTypesToDetect: string[] | undefined;

  /**
   * <p>Indicates the output column name that will contain any entity type detected in that row. </p>
   */
  OutputColumnName?: string;

  /**
   * <p>Indicates the fraction of the data to sample when scanning for PII entities. </p>
   */
  SampleFraction?: number;

  /**
   * <p>Indicates the fraction of the data that must be met in order for a column to be identified as PII data. </p>
   */
  ThresholdFraction?: number;

  /**
   * <p>Indicates the value that will replace the detected entity. </p>
   */
  MaskValue?: string;
}

export namespace PIIDetection {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PIIDetection): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies a PostgresSQL data source in the Glue Data Catalog.</p>
 */
export interface PostgreSQLCatalogSource {
  /**
   * <p>The name of the data source.</p>
   */
  Name: string | undefined;

  /**
   * <p>The name of the database to read from.</p>
   */
  Database: string | undefined;

  /**
   * <p>The name of the table in the database to read from.</p>
   */
  Table: string | undefined;
}

export namespace PostgreSQLCatalogSource {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PostgreSQLCatalogSource): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies a target that uses Postgres SQL.</p>
 */
export interface PostgreSQLCatalogTarget {
  /**
   * <p>The name of the data target.</p>
   */
  Name: string | undefined;

  /**
   * <p>The nodes that are inputs to the data target.</p>
   */
  Inputs: string[] | undefined;

  /**
   * <p>The name of the database to write to.</p>
   */
  Database: string | undefined;

  /**
   * <p>The name of the table in the database to write to.</p>
   */
  Table: string | undefined;
}

export namespace PostgreSQLCatalogTarget {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PostgreSQLCatalogTarget): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies an Amazon Redshift data store.</p>
 */
export interface RedshiftSource {
  /**
   * <p>The name of the Amazon Redshift data store.</p>
   */
  Name: string | undefined;

  /**
   * <p>The database to read from.</p>
   */
  Database: string | undefined;

  /**
   * <p>The database table to read from.</p>
   */
  Table: string | undefined;

  /**
   * <p>The Amazon S3 path where temporary data can be staged when copying out of the database.</p>
   */
  RedshiftTmpDir?: string;

  /**
   * <p>The IAM role with permissions.</p>
   */
  TmpDirIAMRole?: string;
}

export namespace RedshiftSource {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RedshiftSource): any => ({
    ...obj,
  });
}

/**
 * <p>The options to configure an upsert operation when writing to a Redshift target .</p>
 */
export interface UpsertRedshiftTargetOptions {
  /**
   * <p>The physical location of the Redshift table.</p>
   */
  TableLocation?: string;

  /**
   * <p>The name of the connection to use to write to Redshift.</p>
   */
  ConnectionName?: string;

  /**
   * <p>The keys used to determine whether to perform an update or insert.</p>
   */
  UpsertKeys?: string[];
}

export namespace UpsertRedshiftTargetOptions {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpsertRedshiftTargetOptions): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies a target that uses Amazon Redshift.</p>
 */
export interface RedshiftTarget {
  /**
   * <p>The name of the data target.</p>
   */
  Name: string | undefined;

  /**
   * <p>The nodes that are inputs to the data target.</p>
   */
  Inputs: string[] | undefined;

  /**
   * <p>The name of the database to write to.</p>
   */
  Database: string | undefined;

  /**
   * <p>The name of the table in the database to write to.</p>
   */
  Table: string | undefined;

  /**
   * <p>The Amazon S3 path where temporary data can be staged when copying out of the database.</p>
   */
  RedshiftTmpDir?: string;

  /**
   * <p>The IAM role with permissions.</p>
   */
  TmpDirIAMRole?: string;

  /**
   * <p>The set of options to configure an upsert operation when writing to a Redshift target.</p>
   */
  UpsertRedshiftOptions?: UpsertRedshiftTargetOptions;
}

export namespace RedshiftTarget {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RedshiftTarget): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies a Relational database data source in the Glue Data Catalog.</p>
 */
export interface RelationalCatalogSource {
  /**
   * <p>The name of the data source.</p>
   */
  Name: string | undefined;

  /**
   * <p>The name of the database to read from.</p>
   */
  Database: string | undefined;

  /**
   * <p>The name of the table in the database to read from.</p>
   */
  Table: string | undefined;
}

export namespace RelationalCatalogSource {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RelationalCatalogSource): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies a transform that renames a single data property key.</p>
 */
export interface RenameField {
  /**
   * <p>The name of the transform node.</p>
   */
  Name: string | undefined;

  /**
   * <p>The data inputs identified by their node names.</p>
   */
  Inputs: string[] | undefined;

  /**
   * <p>A JSON path to a variable in the data structure for the source data.</p>
   */
  SourcePath: string[] | undefined;

  /**
   * <p>A JSON path to a variable in the data structure for the target data.</p>
   */
  TargetPath: string[] | undefined;
}

export namespace RenameField {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RenameField): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies an Amazon S3 data store in the Glue Data Catalog.</p>
 */
export interface S3CatalogSource {
  /**
   * <p>The name of the data store.</p>
   */
  Name: string | undefined;

  /**
   * <p>The database to read from.</p>
   */
  Database: string | undefined;

  /**
   * <p>The database table to read from.</p>
   */
  Table: string | undefined;

  /**
   * <p>Partitions satisfying this predicate are deleted. Files within the retention period in these partitions are not deleted. Set to <code>""</code> – empty by default.</p>
   */
  PartitionPredicate?: string;

  /**
   * <p>Specifies additional connection options.</p>
   */
  AdditionalOptions?: S3SourceAdditionalOptions;
}

export namespace S3CatalogSource {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: S3CatalogSource): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies a data target that writes to Amazon S3 using the Glue Data Catalog.</p>
 */
export interface S3CatalogTarget {
  /**
   * <p>The name of the data target.</p>
   */
  Name: string | undefined;

  /**
   * <p>The nodes that are inputs to the data target.</p>
   */
  Inputs: string[] | undefined;

  /**
   * <p>Specifies native partitioning using a sequence of keys.</p>
   */
  PartitionKeys?: string[][];

  /**
   * <p>The name of the table in the database to write to.</p>
   */
  Table: string | undefined;

  /**
   * <p>The name of the database to write to.</p>
   */
  Database: string | undefined;

  /**
   * <p>A policy that specifies update behavior for the crawler.</p>
   */
  SchemaChangePolicy?: CatalogSchemaChangePolicy;
}

export namespace S3CatalogTarget {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: S3CatalogTarget): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies additional connection options for the Amazon S3 data store.</p>
 */
export interface S3DirectSourceAdditionalOptions {
  /**
   * <p>Sets the upper limit for the target size of the dataset in bytes that will be processed.</p>
   */
  BoundedSize?: number;

  /**
   * <p>Sets the upper limit for the target number of files that will be processed.</p>
   */
  BoundedFiles?: number;

  /**
   * <p>Sets option to enable a sample path.</p>
   */
  EnableSamplePath?: boolean;

  /**
   * <p>If enabled, specifies the sample path.</p>
   */
  SamplePath?: string;
}

export namespace S3DirectSourceAdditionalOptions {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: S3DirectSourceAdditionalOptions): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies a command-separated value (CSV) data store stored in Amazon S3.</p>
 */
export interface S3CsvSource {
  /**
   * <p>The name of the data store.</p>
   */
  Name: string | undefined;

  /**
   * <p>A list of the Amazon S3 paths to read from.</p>
   */
  Paths: string[] | undefined;

  /**
   * <p>Specifies how the data is compressed. This is generally not necessary if the data has a standard file extension. Possible values are <code>"gzip"</code> and <code>"bzip"</code>).</p>
   */
  CompressionType?: CompressionType | string;

  /**
   * <p>A string containing a JSON list of Unix-style glob patterns to exclude. For example, "[\"**.pdf\"]" excludes all PDF files. </p>
   */
  Exclusions?: string[];

  /**
   * <p>The target group size in bytes. The default is computed based on the input data size and the size of your cluster. When there are fewer than 50,000 input files, <code>"groupFiles"</code> must be set to <code>"inPartition"</code> for this to take effect.</p>
   */
  GroupSize?: string;

  /**
   * <p>Grouping files is turned on by default when the input contains more than 50,000 files. To turn on grouping with fewer than 50,000 files, set this parameter to "inPartition". To disable grouping when there are more than 50,000 files, set this parameter to <code>"none"</code>.</p>
   */
  GroupFiles?: string;

  /**
   * <p>If set to true, recursively reads files in all subdirectories under the specified paths.</p>
   */
  Recurse?: boolean;

  /**
   * <p>This option controls the duration in milliseconds after which the s3 listing is likely to be consistent. Files with modification timestamps falling within the last maxBand milliseconds are tracked specially when using JobBookmarks to account for Amazon S3 eventual consistency. Most users don't need to set this option. The default is 900000 milliseconds, or 15 minutes.</p>
   */
  MaxBand?: number;

  /**
   * <p>This option specifies the maximum number of files to save from the last maxBand seconds. If this number is exceeded, extra files are skipped and only processed in the next job run.</p>
   */
  MaxFilesInBand?: number;

  /**
   * <p>Specifies additional connection options.</p>
   */
  AdditionalOptions?: S3DirectSourceAdditionalOptions;

  /**
   * <p>Specifies the delimiter character. The default is a comma: ",", but any other character can be specified.</p>
   */
  Separator: Separator | string | undefined;

  /**
   * <p>Specifies a character to use for escaping. This option is used only when reading CSV files. The default value is <code>none</code>. If enabled, the character which immediately follows is used as-is, except for a small set of well-known escapes (<code>\n</code>, <code>\r</code>, <code>\t</code>, and <code>\0</code>).</p>
   */
  Escaper?: string;

  /**
   * <p>Specifies the character to use for quoting. The default is a double quote: <code>'"'</code>. Set this to <code>-1</code> to turn off quoting entirely.</p>
   */
  QuoteChar: QuoteChar | string | undefined;

  /**
   * <p>A Boolean value that specifies whether a single record can span multiple lines. This can occur when a field contains a quoted new-line character. You must set this option to True if any record spans multiple lines. The default value is <code>False</code>, which allows for more aggressive file-splitting during parsing.</p>
   */
  Multiline?: boolean;

  /**
   * <p>A Boolean value that specifies whether to treat the first line as a header. The default value is <code>False</code>.</p>
   */
  WithHeader?: boolean;

  /**
   * <p>A Boolean value that specifies whether to write the header to output. The default value is <code>True</code>. </p>
   */
  WriteHeader?: boolean;

  /**
   * <p>A Boolean value that specifies whether to skip the first data line. The default value is <code>False</code>.</p>
   */
  SkipFirst?: boolean;

  /**
   * <p>A Boolean value that specifies whether to use the advanced SIMD CSV reader along with Apache Arrow based columnar memory formats. Only available in Glue version 3.0.</p>
   */
  OptimizePerformance?: boolean;

  /**
   * <p>Specifies the data schema for the S3 CSV source.</p>
   */
  OutputSchemas?: GlueSchema[];
}

export namespace S3CsvSource {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: S3CsvSource): any => ({
    ...obj,
  });
}

/**
 * <p>A policy that specifies update behavior for the crawler.</p>
 */
export interface DirectSchemaChangePolicy {
  /**
   * <p>Whether to use the specified update behavior when the crawler finds a changed schema.</p>
   */
  EnableUpdateCatalog?: boolean;

  /**
   * <p>The update behavior when the crawler finds a changed schema.</p>
   */
  UpdateBehavior?: UpdateCatalogBehavior | string;

  /**
   * <p>Specifies the table in the database that the schema change policy applies to.</p>
   */
  Table?: string;

  /**
   * <p>Specifies the database that the schema change policy applies to.</p>
   */
  Database?: string;
}

export namespace DirectSchemaChangePolicy {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DirectSchemaChangePolicy): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies a data target that writes to Amazon S3.</p>
 */
export interface S3DirectTarget {
  /**
   * <p>The name of the data target.</p>
   */
  Name: string | undefined;

  /**
   * <p>The nodes that are inputs to the data target.</p>
   */
  Inputs: string[] | undefined;

  /**
   * <p>Specifies native partitioning using a sequence of keys.</p>
   */
  PartitionKeys?: string[][];

  /**
   * <p>A single Amazon S3 path to write to.</p>
   */
  Path: string | undefined;

  /**
   * <p>Specifies how the data is compressed. This is generally not necessary if the data has a standard file extension. Possible values are <code>"gzip"</code> and <code>"bzip"</code>).</p>
   */
  Compression?: string;

  /**
   * <p>Specifies the data output format for the target.</p>
   */
  Format: TargetFormat | string | undefined;

  /**
   * <p>A policy that specifies update behavior for the crawler.</p>
   */
  SchemaChangePolicy?: DirectSchemaChangePolicy;
}

export namespace S3DirectTarget {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: S3DirectTarget): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies a data target that writes to Amazon S3 in Apache Parquet columnar storage.</p>
 */
export interface S3GlueParquetTarget {
  /**
   * <p>The name of the data target.</p>
   */
  Name: string | undefined;

  /**
   * <p>The nodes that are inputs to the data target.</p>
   */
  Inputs: string[] | undefined;

  /**
   * <p>Specifies native partitioning using a sequence of keys.</p>
   */
  PartitionKeys?: string[][];

  /**
   * <p>A single Amazon S3 path to write to.</p>
   */
  Path: string | undefined;

  /**
   * <p>Specifies how the data is compressed. This is generally not necessary if the data has a standard file extension. Possible values are <code>"gzip"</code> and <code>"bzip"</code>).</p>
   */
  Compression?: ParquetCompressionType | string;

  /**
   * <p>A policy that specifies update behavior for the crawler.</p>
   */
  SchemaChangePolicy?: DirectSchemaChangePolicy;
}

export namespace S3GlueParquetTarget {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: S3GlueParquetTarget): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies a JSON data store stored in Amazon S3.</p>
 */
export interface S3JsonSource {
  /**
   * <p>The name of the data store.</p>
   */
  Name: string | undefined;

  /**
   * <p>A list of the Amazon S3 paths to read from.</p>
   */
  Paths: string[] | undefined;

  /**
   * <p>Specifies how the data is compressed. This is generally not necessary if the data has a standard file extension. Possible values are <code>"gzip"</code> and <code>"bzip"</code>).</p>
   */
  CompressionType?: CompressionType | string;

  /**
   * <p>A string containing a JSON list of Unix-style glob patterns to exclude. For example, "[\"**.pdf\"]" excludes all PDF files. </p>
   */
  Exclusions?: string[];

  /**
   * <p>The target group size in bytes. The default is computed based on the input data size and the size of your cluster. When there are fewer than 50,000 input files, <code>"groupFiles"</code> must be set to <code>"inPartition"</code> for this to take effect.</p>
   */
  GroupSize?: string;

  /**
   * <p>Grouping files is turned on by default when the input contains more than 50,000 files. To turn on grouping with fewer than 50,000 files, set this parameter to "inPartition". To disable grouping when there are more than 50,000 files, set this parameter to <code>"none"</code>.</p>
   */
  GroupFiles?: string;

  /**
   * <p>If set to true, recursively reads files in all subdirectories under the specified paths.</p>
   */
  Recurse?: boolean;

  /**
   * <p>This option controls the duration in milliseconds after which the s3 listing is likely to be consistent. Files with modification timestamps falling within the last maxBand milliseconds are tracked specially when using JobBookmarks to account for Amazon S3 eventual consistency. Most users don't need to set this option. The default is 900000 milliseconds, or 15 minutes.</p>
   */
  MaxBand?: number;

  /**
   * <p>This option specifies the maximum number of files to save from the last maxBand seconds. If this number is exceeded, extra files are skipped and only processed in the next job run.</p>
   */
  MaxFilesInBand?: number;

  /**
   * <p>Specifies additional connection options.</p>
   */
  AdditionalOptions?: S3DirectSourceAdditionalOptions;

  /**
   * <p>A JsonPath string defining the JSON data.</p>
   */
  JsonPath?: string;

  /**
   * <p>A Boolean value that specifies whether a single record can span multiple lines. This can occur when a field contains a quoted new-line character. You must set this option to True if any record spans multiple lines. The default value is <code>False</code>, which allows for more aggressive file-splitting during parsing.</p>
   */
  Multiline?: boolean;

  /**
   * <p>Specifies the data schema for the S3 JSON source.</p>
   */
  OutputSchemas?: GlueSchema[];
}

export namespace S3JsonSource {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: S3JsonSource): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies an Apache Parquet data store stored in Amazon S3.</p>
 */
export interface S3ParquetSource {
  /**
   * <p>The name of the data store.</p>
   */
  Name: string | undefined;

  /**
   * <p>A list of the Amazon S3 paths to read from.</p>
   */
  Paths: string[] | undefined;

  /**
   * <p>Specifies how the data is compressed. This is generally not necessary if the data has a standard file extension. Possible values are <code>"gzip"</code> and <code>"bzip"</code>).</p>
   */
  CompressionType?: ParquetCompressionType | string;

  /**
   * <p>A string containing a JSON list of Unix-style glob patterns to exclude. For example, "[\"**.pdf\"]" excludes all PDF files. </p>
   */
  Exclusions?: string[];

  /**
   * <p>The target group size in bytes. The default is computed based on the input data size and the size of your cluster. When there are fewer than 50,000 input files, <code>"groupFiles"</code> must be set to <code>"inPartition"</code> for this to take effect.</p>
   */
  GroupSize?: string;

  /**
   * <p>Grouping files is turned on by default when the input contains more than 50,000 files. To turn on grouping with fewer than 50,000 files, set this parameter to "inPartition". To disable grouping when there are more than 50,000 files, set this parameter to <code>"none"</code>.</p>
   */
  GroupFiles?: string;

  /**
   * <p>If set to true, recursively reads files in all subdirectories under the specified paths.</p>
   */
  Recurse?: boolean;

  /**
   * <p>This option controls the duration in milliseconds after which the s3 listing is likely to be consistent. Files with modification timestamps falling within the last maxBand milliseconds are tracked specially when using JobBookmarks to account for Amazon S3 eventual consistency. Most users don't need to set this option. The default is 900000 milliseconds, or 15 minutes.</p>
   */
  MaxBand?: number;

  /**
   * <p>This option specifies the maximum number of files to save from the last maxBand seconds. If this number is exceeded, extra files are skipped and only processed in the next job run.</p>
   */
  MaxFilesInBand?: number;

  /**
   * <p>Specifies additional connection options.</p>
   */
  AdditionalOptions?: S3DirectSourceAdditionalOptions;

  /**
   * <p>Specifies the data schema for the S3 Parquet source.</p>
   */
  OutputSchemas?: GlueSchema[];
}

export namespace S3ParquetSource {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: S3ParquetSource): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies a transform that chooses the data property keys that you want to keep.</p>
 */
export interface SelectFields {
  /**
   * <p>The name of the transform node.</p>
   */
  Name: string | undefined;

  /**
   * <p>The data inputs identified by their node names.</p>
   */
  Inputs: string[] | undefined;

  /**
   * <p>A JSON path to a variable in the data structure.</p>
   */
  Paths: string[][] | undefined;
}

export namespace SelectFields {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SelectFields): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies a transform that chooses one <code>DynamicFrame</code> from a collection of <code>DynamicFrames</code>. The output is the selected <code>DynamicFrame</code>
 *          </p>
 */
export interface SelectFromCollection {
  /**
   * <p>The name of the transform node.</p>
   */
  Name: string | undefined;

  /**
   * <p>The data inputs identified by their node names.</p>
   */
  Inputs: string[] | undefined;

  /**
   * <p>The index for the DynamicFrame to be selected.</p>
   */
  Index: number | undefined;
}

export namespace SelectFromCollection {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SelectFromCollection): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies a connector to an Apache Spark data source.</p>
 */
export interface SparkConnectorSource {
  /**
   * <p>The name of the data source.</p>
   */
  Name: string | undefined;

  /**
   * <p>The name of the connection that is associated with the connector.</p>
   */
  ConnectionName: string | undefined;

  /**
   * <p>The name of a connector that assists with accessing the data store in Glue Studio.</p>
   */
  ConnectorName: string | undefined;

  /**
   * <p>The type of connection, such as marketplace.spark or custom.spark, designating a connection to an Apache Spark data store.</p>
   */
  ConnectionType: string | undefined;

  /**
   * <p>Additional connection options for the connector.</p>
   */
  AdditionalOptions?: Record<string, string>;

  /**
   * <p>Specifies data schema for the custom spark source.</p>
   */
  OutputSchemas?: GlueSchema[];
}

export namespace SparkConnectorSource {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SparkConnectorSource): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies a target that uses an Apache Spark connector.</p>
 */
export interface SparkConnectorTarget {
  /**
   * <p>The name of the data target.</p>
   */
  Name: string | undefined;

  /**
   * <p>The nodes that are inputs to the data target.</p>
   */
  Inputs: string[] | undefined;

  /**
   * <p>The name of a connection for an Apache Spark connector.</p>
   */
  ConnectionName: string | undefined;

  /**
   * <p>The name of an Apache Spark connector.</p>
   */
  ConnectorName: string | undefined;

  /**
   * <p>The type of connection, such as marketplace.spark or custom.spark, designating a connection to an Apache Spark data store.</p>
   */
  ConnectionType: string | undefined;

  /**
   * <p>Additional connection options for the connector.</p>
   */
  AdditionalOptions?: Record<string, string>;

  /**
   * <p>Specifies the data schema for the custom spark target.</p>
   */
  OutputSchemas?: GlueSchema[];
}

export namespace SparkConnectorTarget {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SparkConnectorTarget): any => ({
    ...obj,
  });
}

/**
 * <p>Represents a single entry in the list of values for <code>SqlAliases</code>. </p>
 */
export interface SqlAlias {
  /**
   * <p>A table, or a column in a table.</p>
   */
  From: string | undefined;

  /**
   * <p>A temporary name given to a table, or a column in a table.</p>
   */
  Alias: string | undefined;
}

export namespace SqlAlias {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SqlAlias): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies a transform where you enter a SQL query using Spark SQL syntax to transform the data. The output is a single <code>DynamicFrame</code>.</p>
 */
export interface SparkSQL {
  /**
   * <p>The name of the transform node.</p>
   */
  Name: string | undefined;

  /**
   * <p>The data inputs identified by their node names. You can associate a table name with each input node to use in the SQL query. The name you choose must meet the Spark SQL naming restrictions.</p>
   */
  Inputs: string[] | undefined;

  /**
   * <p>A SQL query that must use Spark SQL syntax and return a single data set.</p>
   */
  SqlQuery: string | undefined;

  /**
   * <p>A list of aliases. An alias allows you to specify what name to use in the SQL for a given input. For example, you have a datasource named "MyDataSource". If you specify <code>From</code> as MyDataSource, and <code>Alias</code> as SqlName, then in your SQL you can do:</p>
   *
   *          <p>
   *             <code>select *
   * from SqlName</code>
   *          </p>
   *
   *          <p>and that gets data from MyDataSource.</p>
   */
  SqlAliases: SqlAlias[] | undefined;

  /**
   * <p>Specifies the data schema for the SparkSQL transform.</p>
   */
  OutputSchemas?: GlueSchema[];
}

export namespace SparkSQL {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SparkSQL): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies a transform that writes samples of the data to an Amazon S3 bucket.</p>
 */
export interface Spigot {
  /**
   * <p>The name of the transform node.</p>
   */
  Name: string | undefined;

  /**
   * <p>The data inputs identified by their node names.</p>
   */
  Inputs: string[] | undefined;

  /**
   * <p>A path in Amazon S3 where the transform will write a subset of records from the dataset to a JSON file in an Amazon S3 bucket.</p>
   */
  Path: string | undefined;

  /**
   * <p>Specifies a number of records to write starting from the beginning of the dataset.</p>
   */
  Topk?: number;

  /**
   * <p>The probability (a decimal value with a maximum value of 1) of picking any given record. A value of 1 indicates that each row read from the dataset should be included in the sample output.</p>
   */
  Prob?: number;
}

export namespace Spigot {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Spigot): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies a transform that splits data property keys into two <code>DynamicFrames</code>. The output is a collection of <code>DynamicFrames</code>: one with selected data property keys, and one with the remaining data property keys.</p>
 */
export interface SplitFields {
  /**
   * <p>The name of the transform node.</p>
   */
  Name: string | undefined;

  /**
   * <p>The data inputs identified by their node names.</p>
   */
  Inputs: string[] | undefined;

  /**
   * <p>A JSON path to a variable in the data structure.</p>
   */
  Paths: string[][] | undefined;
}

export namespace SplitFields {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SplitFields): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies a transform that combines the rows from two or more datasets into a single result.</p>
 */
export interface Union {
  /**
   * <p>The name of the transform node.</p>
   */
  Name: string | undefined;

  /**
   * <p>The node ID inputs to the transform.</p>
   */
  Inputs: string[] | undefined;

  /**
   * <p>Indicates the type of Union transform. </p>
   *
   * 	        <p>Specify <code>ALL</code> to join all rows from data sources to the resulting DynamicFrame. The resulting union does not remove duplicate rows.</p>
   *
   *          <p>Specify <code>DISTINCT</code> to remove duplicate rows in the resulting DynamicFrame.</p>
   */
  UnionType: UnionType | string | undefined;
}

export namespace Union {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Union): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies code that runs when a job is run.</p>
 */
export interface JobCommand {
  /**
   * <p>The name of the job command. For an Apache Spark ETL job, this must be
   *       <code>glueetl</code>. For a Python shell job, it must be <code>pythonshell</code>.
   *       For an Apache Spark streaming ETL job, this must be <code>gluestreaming</code>.</p>
   */
  Name?: string;

  /**
   * <p>Specifies the Amazon Simple Storage Service (Amazon S3) path to a script that runs a
   *       job.</p>
   */
  ScriptLocation?: string;

  /**
   * <p>The Python version being used to run a Python shell job. Allowed values are 2 or 3.</p>
   */
  PythonVersion?: string;
}

export namespace JobCommand {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: JobCommand): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies the connections used by a job.</p>
 */
export interface ConnectionsList {
  /**
   * <p>A list of connections used by the job.</p>
   */
  Connections?: string[];
}

export namespace ConnectionsList {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConnectionsList): any => ({
    ...obj,
  });
}

/**
 * <p>An execution property of a job.</p>
 */
export interface ExecutionProperty {
  /**
   * <p>The maximum number of concurrent runs allowed for the job.
   *       The default is 1. An error is returned when this threshold is reached.
   *       The maximum value you can specify is controlled by a service limit.</p>
   */
  MaxConcurrentRuns?: number;
}

export namespace ExecutionProperty {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExecutionProperty): any => ({
    ...obj,
  });
}

/**
 * <p>Represents a slice of table data.</p>
 */
export interface Partition {
  /**
   * <p>The values of the partition.</p>
   */
  Values?: string[];

  /**
   * <p>The name of the catalog database in which to create the partition.</p>
   */
  DatabaseName?: string;

  /**
   * <p>The name of the database table in which to create the partition.</p>
   */
  TableName?: string;

  /**
   * <p>The time at which the partition was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The last time at which the partition was accessed.</p>
   */
  LastAccessTime?: Date;

  /**
   * <p>Provides information about the physical
   *       location where the partition is stored.</p>
   */
  StorageDescriptor?: StorageDescriptor;

  /**
   * <p>These key-value pairs define partition parameters.</p>
   */
  Parameters?: Record<string, string>;

  /**
   * <p>The last time at which column statistics were computed for this
   *       partition.</p>
   */
  LastAnalyzedTime?: Date;

  /**
   * <p>The ID of the Data Catalog in which the partition resides.</p>
   */
  CatalogId?: string;
}

export namespace Partition {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Partition): any => ({
    ...obj,
  });
}

/**
 * <p>An error that indicates your data is in an invalid state.</p>
 */
export class InvalidStateException extends __BaseException {
  readonly name: "InvalidStateException" = "InvalidStateException";
  readonly $fault: "client" = "client";
  /**
   * <p>A message describing the problem.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidStateException, __BaseException>) {
    super({
      name: "InvalidStateException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidStateException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Batch condition that must be met (specified number of events received or batch time window expired)
 *       before EventBridge event trigger fires.</p>
 */
export interface EventBatchingCondition {
  /**
   * <p>Number of events that must be received from Amazon EventBridge before EventBridge event trigger fires.</p>
   */
  BatchSize: number | undefined;

  /**
   * <p>Window of time in seconds after which EventBridge event trigger fires. Window starts when first event is received.</p>
   */
  BatchWindow?: number;
}

export namespace EventBatchingCondition {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EventBatchingCondition): any => ({
    ...obj,
  });
}

/**
 * <p>Defines a condition under which a trigger fires.</p>
 */
export interface Condition {
  /**
   * <p>A logical operator.</p>
   */
  LogicalOperator?: LogicalOperator | string;

  /**
   * <p>The name of the job whose <code>JobRuns</code> this condition applies to, and on which
   *       this trigger waits.</p>
   */
  JobName?: string;

  /**
   * <p>The condition state. Currently, the only job states that a trigger can listen for are <code>SUCCEEDED</code>, <code>STOPPED</code>, <code>FAILED</code>, and <code>TIMEOUT</code>. The only crawler states that a trigger can listen for are <code>SUCCEEDED</code>, <code>FAILED</code>, and <code>CANCELLED</code>.</p>
   */
  State?: JobRunState | string;

  /**
   * <p>The name of the crawler to which this condition applies.</p>
   */
  CrawlerName?: string;

  /**
   * <p>The state of the crawler to which this condition applies.</p>
   */
  CrawlState?: CrawlState | string;
}

export namespace Condition {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Condition): any => ({
    ...obj,
  });
}

/**
 * <p>Defines the predicate of the trigger, which determines when it fires.</p>
 */
export interface Predicate {
  /**
   * <p>An optional field if only one condition is listed. If multiple conditions are listed, then
   *       this field is required.</p>
   */
  Logical?: Logical | string;

  /**
   * <p>A list of the conditions that determine when the trigger will fire.</p>
   */
  Conditions?: Condition[];
}

export namespace Predicate {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Predicate): any => ({
    ...obj,
  });
}

/**
 * <p>Information about a specific trigger.</p>
 */
export interface Trigger {
  /**
   * <p>The name of the trigger.</p>
   */
  Name?: string;

  /**
   * <p>The name of the workflow associated with the trigger.</p>
   */
  WorkflowName?: string;

  /**
   * <p>Reserved for future use.</p>
   */
  Id?: string;

  /**
   * <p>The type of trigger that this is.</p>
   */
  Type?: TriggerType | string;

  /**
   * <p>The current state of the trigger.</p>
   */
  State?: TriggerState | string;

  /**
   * <p>A description of this trigger.</p>
   */
  Description?: string;

  /**
   * <p>A <code>cron</code> expression used to specify the schedule (see <a href="https://docs.aws.amazon.com/glue/latest/dg/monitor-data-warehouse-schedule.html">Time-Based
   *       Schedules for Jobs and Crawlers</a>. For example, to run
   *       something every day at 12:15 UTC, you would specify:
   *       <code>cron(15 12 * * ? *)</code>.</p>
   */
  Schedule?: string;

  /**
   * <p>The actions initiated by this trigger.</p>
   */
  Actions?: Action[];

  /**
   * <p>The predicate of this trigger, which defines when it will fire.</p>
   */
  Predicate?: Predicate;

  /**
   * <p>Batch condition that must be met (specified number of events received or batch time window expired)
   *       before EventBridge event trigger fires.</p>
   */
  EventBatchingCondition?: EventBatchingCondition;
}

export namespace Trigger {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Trigger): any => ({
    ...obj,
  });
}

/**
 * <p>The details of a blueprint.</p>
 */
export interface BlueprintDetails {
  /**
   * <p>The name of the blueprint.</p>
   */
  BlueprintName?: string;

  /**
   * <p>The run ID for this blueprint.</p>
   */
  RunId?: string;
}

export namespace BlueprintDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BlueprintDetails): any => ({
    ...obj,
  });
}

/**
 * <p>The details of a crawl in the workflow.</p>
 */
export interface Crawl {
  /**
   * <p>The state of the crawler.</p>
   */
  State?: CrawlState | string;

  /**
   * <p>The date and time on which the crawl started.</p>
   */
  StartedOn?: Date;

  /**
   * <p>The date and time on which the crawl completed.</p>
   */
  CompletedOn?: Date;

  /**
   * <p>The error message associated with the crawl.</p>
   */
  ErrorMessage?: string;

  /**
   * <p>The log group associated with the crawl.</p>
   */
  LogGroup?: string;

  /**
   * <p>The log stream associated with the crawl.</p>
   */
  LogStream?: string;
}

export namespace Crawl {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Crawl): any => ({
    ...obj,
  });
}

/**
 * <p>The details of a Crawler node present in the workflow.</p>
 */
export interface CrawlerNodeDetails {
  /**
   * <p>A list of crawls represented by the crawl node.</p>
   */
  Crawls?: Crawl[];
}

export namespace CrawlerNodeDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CrawlerNodeDetails): any => ({
    ...obj,
  });
}

/**
 * <p>A workflow is a collection of multiple dependent Glue
 *       jobs and crawlers that are run to complete a complex ETL task. A
 *       workflow manages the execution and monitoring of all its jobs and crawlers.</p>
 */
export interface Workflow {
  /**
   * <p>The name of the workflow.</p>
   */
  Name?: string;

  /**
   * <p>A description of the workflow.</p>
   */
  Description?: string;

  /**
   * <p>A collection of properties to be used as part of each execution of the workflow.
   *     The run properties are made available to each job in the workflow. A job can modify
   *     the properties for the next jobs in the flow.</p>
   */
  DefaultRunProperties?: Record<string, string>;

  /**
   * <p>The date and time when the workflow was created.</p>
   */
  CreatedOn?: Date;

  /**
   * <p>The date and time when the workflow was last modified.</p>
   */
  LastModifiedOn?: Date;

  /**
   * <p>The information about the last execution of the workflow.</p>
   */
  LastRun?: WorkflowRun;

  /**
   * <p>The graph representing all the Glue components that belong to the workflow as nodes and directed
   *       connections between them as edges.</p>
   */
  Graph?: WorkflowGraph;

  /**
   * <p>You can use this parameter to prevent unwanted multiple updates to data, to control costs, or in some cases, to prevent exceeding the maximum number of concurrent runs of any of the component jobs. If you leave this parameter blank, there is no limit to the number of concurrent workflow runs.</p>
   */
  MaxConcurrentRuns?: number;

  /**
   * <p>This structure indicates the details of the blueprint that this particular workflow is created from.</p>
   */
  BlueprintDetails?: BlueprintDetails;
}

export namespace Workflow {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Workflow): any => ({
    ...obj,
  });
}

/**
 * <p>Records an error that occurred when attempting to stop a
 *       specified job run.</p>
 */
export interface BatchStopJobRunError {
  /**
   * <p>The name of the job definition that is used in the job run in question.</p>
   */
  JobName?: string;

  /**
   * <p>The <code>JobRunId</code> of the job run in question.</p>
   */
  JobRunId?: string;

  /**
   * <p>Specifies details about the error that was encountered.</p>
   */
  ErrorDetail?: ErrorDetail;
}

export namespace BatchStopJobRunError {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchStopJobRunError): any => ({
    ...obj,
  });
}

/**
 * <p>Records a successful request to stop a specified <code>JobRun</code>.</p>
 */
export interface BatchStopJobRunSuccessfulSubmission {
  /**
   * <p>The name of the job definition used in the job run that was stopped.</p>
   */
  JobName?: string;

  /**
   * <p>The <code>JobRunId</code> of the job run that was stopped.</p>
   */
  JobRunId?: string;
}

export namespace BatchStopJobRunSuccessfulSubmission {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchStopJobRunSuccessfulSubmission): any => ({
    ...obj,
  });
}

/**
 * <p>A structure that contains the values and structure used to update a partition.</p>
 */
export interface BatchUpdatePartitionRequestEntry {
  /**
   * <p>A list of values defining the partitions.</p>
   */
  PartitionValueList: string[] | undefined;

  /**
   * <p>The structure used to update a partition.</p>
   */
  PartitionInput: PartitionInput | undefined;
}

export namespace BatchUpdatePartitionRequestEntry {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchUpdatePartitionRequestEntry): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about a batch update partition error.</p>
 */
export interface BatchUpdatePartitionFailureEntry {
  /**
   * <p>A list of values defining the partitions.</p>
   */
  PartitionValueList?: string[];

  /**
   * <p>The details about the batch update partition error.</p>
   */
  ErrorDetail?: ErrorDetail;
}

export namespace BatchUpdatePartitionFailureEntry {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchUpdatePartitionFailureEntry): any => ({
    ...obj,
  });
}

/**
 * <p>The session is in an invalid state to perform a requested operation.</p>
 */
export class IllegalSessionStateException extends __BaseException {
  readonly name: "IllegalSessionStateException" = "IllegalSessionStateException";
  readonly $fault: "client" = "client";
  /**
   * <p>A message describing the problem.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<IllegalSessionStateException, __BaseException>) {
    super({
      name: "IllegalSessionStateException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, IllegalSessionStateException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Specifies a custom CSV classifier for <code>CreateClassifier</code> to create.</p>
 */
export interface CreateCsvClassifierRequest {
  /**
   * <p>The name of the classifier.</p>
   */
  Name: string | undefined;

  /**
   * <p>A custom symbol to denote what separates each column entry in the row.</p>
   */
  Delimiter?: string;

  /**
   * <p>A custom symbol to denote what combines content into a single column value. Must be different from the column delimiter.</p>
   */
  QuoteSymbol?: string;

  /**
   * <p>Indicates whether the CSV file contains a header.</p>
   */
  ContainsHeader?: CsvHeaderOption | string;

  /**
   * <p>A list of strings representing column names.</p>
   */
  Header?: string[];

  /**
   * <p>Specifies not to trim values before identifying the type of column values. The default value is true.</p>
   */
  DisableValueTrimming?: boolean;

  /**
   * <p>Enables the processing of files that contain only one column.</p>
   */
  AllowSingleColumn?: boolean;
}

export namespace CreateCsvClassifierRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateCsvClassifierRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies a <code>grok</code> classifier for <code>CreateClassifier</code>
 *       to create.</p>
 */
export interface CreateGrokClassifierRequest {
  /**
   * <p>An identifier of the data format that the classifier matches,
   *       such as Twitter, JSON, Omniture logs, Amazon CloudWatch Logs, and so on.</p>
   */
  Classification: string | undefined;

  /**
   * <p>The name of the new classifier.</p>
   */
  Name: string | undefined;

  /**
   * <p>The grok pattern used by this classifier.</p>
   */
  GrokPattern: string | undefined;

  /**
   * <p>Optional custom grok patterns used by this classifier.</p>
   */
  CustomPatterns?: string;
}

export namespace CreateGrokClassifierRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateGrokClassifierRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies a JSON classifier for <code>CreateClassifier</code> to create.</p>
 */
export interface CreateJsonClassifierRequest {
  /**
   * <p>The name of the classifier.</p>
   */
  Name: string | undefined;

  /**
   * <p>A <code>JsonPath</code> string defining the JSON data for the classifier to classify.
   *       Glue supports a subset of JsonPath, as described in <a href="https://docs.aws.amazon.com/glue/latest/dg/custom-classifier.html#custom-classifier-json">Writing JsonPath Custom Classifiers</a>.</p>
   */
  JsonPath: string | undefined;
}

export namespace CreateJsonClassifierRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateJsonClassifierRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies an XML classifier for <code>CreateClassifier</code> to create.</p>
 */
export interface CreateXMLClassifierRequest {
  /**
   * <p>An identifier of the data format that the classifier matches.</p>
   */
  Classification: string | undefined;

  /**
   * <p>The name of the classifier.</p>
   */
  Name: string | undefined;

  /**
   * <p>The XML tag designating the element that contains each record in an XML document being
   *       parsed. This can't identify a self-closing element (closed by <code>/></code>). An empty
   *       row element that contains only attributes can be parsed as long as it ends with a closing tag
   *       (for example, <code><row item_a="A" item_b="B"></row></code> is okay, but
   *         <code><row item_a="A" item_b="B" /></code> is not).</p>
   */
  RowTag?: string;
}

export namespace CreateXMLClassifierRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateXMLClassifierRequest): any => ({
    ...obj,
  });
}

export enum ConnectionPropertyKey {
  CONFIG_FILES = "CONFIG_FILES",
  CONNECTION_URL = "CONNECTION_URL",
  CONNECTOR_CLASS_NAME = "CONNECTOR_CLASS_NAME",
  CONNECTOR_TYPE = "CONNECTOR_TYPE",
  CONNECTOR_URL = "CONNECTOR_URL",
  CUSTOM_JDBC_CERT = "CUSTOM_JDBC_CERT",
  CUSTOM_JDBC_CERT_STRING = "CUSTOM_JDBC_CERT_STRING",
  ENCRYPTED_KAFKA_CLIENT_KEYSTORE_PASSWORD = "ENCRYPTED_KAFKA_CLIENT_KEYSTORE_PASSWORD",
  ENCRYPTED_KAFKA_CLIENT_KEY_PASSWORD = "ENCRYPTED_KAFKA_CLIENT_KEY_PASSWORD",
  ENCRYPTED_PASSWORD = "ENCRYPTED_PASSWORD",
  HOST = "HOST",
  INSTANCE_ID = "INSTANCE_ID",
  JDBC_CONNECTION_URL = "JDBC_CONNECTION_URL",
  JDBC_DRIVER_CLASS_NAME = "JDBC_DRIVER_CLASS_NAME",
  JDBC_DRIVER_JAR_URI = "JDBC_DRIVER_JAR_URI",
  JDBC_ENFORCE_SSL = "JDBC_ENFORCE_SSL",
  JDBC_ENGINE = "JDBC_ENGINE",
  JDBC_ENGINE_VERSION = "JDBC_ENGINE_VERSION",
  KAFKA_BOOTSTRAP_SERVERS = "KAFKA_BOOTSTRAP_SERVERS",
  KAFKA_CLIENT_KEYSTORE = "KAFKA_CLIENT_KEYSTORE",
  KAFKA_CLIENT_KEYSTORE_PASSWORD = "KAFKA_CLIENT_KEYSTORE_PASSWORD",
  KAFKA_CLIENT_KEY_PASSWORD = "KAFKA_CLIENT_KEY_PASSWORD",
  KAFKA_CUSTOM_CERT = "KAFKA_CUSTOM_CERT",
  KAFKA_SKIP_CUSTOM_CERT_VALIDATION = "KAFKA_SKIP_CUSTOM_CERT_VALIDATION",
  KAFKA_SSL_ENABLED = "KAFKA_SSL_ENABLED",
  PASSWORD = "PASSWORD",
  PORT = "PORT",
  SECRET_ID = "SECRET_ID",
  SKIP_CUSTOM_JDBC_CERT_VALIDATION = "SKIP_CUSTOM_JDBC_CERT_VALIDATION",
  USER_NAME = "USERNAME",
}

/**
 * <p>Specifies the physical requirements for a connection.</p>
 */
export interface PhysicalConnectionRequirements {
  /**
   * <p>The subnet ID used by the connection.</p>
   */
  SubnetId?: string;

  /**
   * <p>The security group ID list used by the connection.</p>
   */
  SecurityGroupIdList?: string[];

  /**
   * <p>The connection's Availability Zone. This field is redundant because the specified subnet
   *       implies the Availability Zone to be used. Currently the field must be populated, but it will
   *       be deprecated in the future.</p>
   */
  AvailabilityZone?: string;
}

export namespace PhysicalConnectionRequirements {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PhysicalConnectionRequirements): any => ({
    ...obj,
  });
}

/**
 * <p>A structure that is used to specify a connection to create or update.</p>
 */
export interface ConnectionInput {
  /**
   * <p>The name of the connection.</p>
   */
  Name: string | undefined;

  /**
   * <p>The description of the connection.</p>
   */
  Description?: string;

  /**
   * <p>The type of the connection. Currently, these types are supported:</p>
   * 	        <ul>
   *             <li>
   *                <p>
   *                   <code>JDBC</code> - Designates a connection to a database through Java Database Connectivity (JDBC).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>KAFKA</code> - Designates a connection to an Apache Kafka streaming platform.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MONGODB</code> - Designates a connection to a MongoDB document database.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NETWORK</code> - Designates a network connection to a data source within an Amazon Virtual Private Cloud environment (Amazon VPC).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MARKETPLACE</code> - Uses configuration settings contained in a connector purchased from Amazon Web Services Marketplace to read from and write to data stores that are not natively supported by Glue.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CUSTOM</code> - Uses configuration settings contained in a custom connector to read from and write to data stores that are not natively supported by Glue.</p>
   *             </li>
   *          </ul>
   *          <p>SFTP is not supported.</p>
   */
  ConnectionType: ConnectionType | string | undefined;

  /**
   * <p>A list of criteria that can be used in selecting this connection.</p>
   */
  MatchCriteria?: string[];

  /**
   * <p>These key-value pairs define parameters for the connection.</p>
   */
  ConnectionProperties: Record<string, string> | undefined;

  /**
   * <p>A map of physical connection requirements, such as virtual private cloud (VPC) and
   *         <code>SecurityGroup</code>, that are needed to successfully make this connection.</p>
   */
  PhysicalConnectionRequirements?: PhysicalConnectionRequirements;
}

export namespace ConnectionInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConnectionInput): any => ({
    ...obj,
  });
}

/**
 * <p>The same unique identifier was associated with two different records.</p>
 */
export class IdempotentParameterMismatchException extends __BaseException {
  readonly name: "IdempotentParameterMismatchException" = "IdempotentParameterMismatchException";
  readonly $fault: "client" = "client";
  /**
   * <p>A message describing the problem.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<IdempotentParameterMismatchException, __BaseException>) {
    super({
      name: "IdempotentParameterMismatchException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, IdempotentParameterMismatchException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Two processes are trying to modify a resource simultaneously.</p>
 */
export class ConcurrentModificationException extends __BaseException {
  readonly name: "ConcurrentModificationException" = "ConcurrentModificationException";
  readonly $fault: "client" = "client";
  /**
   * <p>A message describing the problem.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConcurrentModificationException, __BaseException>) {
    super({
      name: "ConcurrentModificationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConcurrentModificationException.prototype);
    this.Message = opts.Message;
  }
}

export enum Permission {
  ALL = "ALL",
  ALTER = "ALTER",
  CREATE_DATABASE = "CREATE_DATABASE",
  CREATE_TABLE = "CREATE_TABLE",
  DATA_LOCATION_ACCESS = "DATA_LOCATION_ACCESS",
  DELETE = "DELETE",
  DROP = "DROP",
  INSERT = "INSERT",
  SELECT = "SELECT",
}

/**
 * <p>The Lake Formation principal.</p>
 */
export interface DataLakePrincipal {
  /**
   * <p>An identifier for the Lake Formation principal.</p>
   */
  DataLakePrincipalIdentifier?: string;
}

export namespace DataLakePrincipal {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DataLakePrincipal): any => ({
    ...obj,
  });
}

/**
 * <p>Permissions granted to a principal.</p>
 */
export interface PrincipalPermissions {
  /**
   * <p>The principal who is granted permissions.</p>
   */
  Principal?: DataLakePrincipal;

  /**
   * <p>The permissions that are granted to the principal.</p>
   */
  Permissions?: (Permission | string)[];
}

export namespace PrincipalPermissions {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PrincipalPermissions): any => ({
    ...obj,
  });
}

/**
 * <p>A structure that describes a target database for resource linking.</p>
 */
export interface DatabaseIdentifier {
  /**
   * <p>The ID of the Data Catalog in which the database resides.</p>
   */
  CatalogId?: string;

  /**
   * <p>The name of the catalog database.</p>
   */
  DatabaseName?: string;
}

export namespace DatabaseIdentifier {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DatabaseIdentifier): any => ({
    ...obj,
  });
}

/**
 * <p>The structure used to create or update a database.</p>
 */
export interface DatabaseInput {
  /**
   * <p>The name of the database. For Hive compatibility, this is folded to lowercase when it is
   *       stored.</p>
   */
  Name: string | undefined;

  /**
   * <p>A description of the database.</p>
   */
  Description?: string;

  /**
   * <p>The location of the database (for example, an HDFS path). </p>
   */
  LocationUri?: string;

  /**
   * <p>These key-value pairs define parameters and properties
   *       of the database.</p>
   *          <p>These key-value pairs define parameters and properties of the database.</p>
   */
  Parameters?: Record<string, string>;

  /**
   * <p>Creates a set of default permissions on the table for principals. </p>
   */
  CreateTableDefaultPermissions?: PrincipalPermissions[];

  /**
   * <p>A <code>DatabaseIdentifier</code> structure that describes a target database for resource linking.</p>
   */
  TargetDatabase?: DatabaseIdentifier;
}

export namespace DatabaseInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DatabaseInput): any => ({
    ...obj,
  });
}

/**
 * <p>A value could not be validated.</p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * <p>A message describing the problem.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ValidationException, __BaseException>) {
    super({
      name: "ValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ValidationException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The database and table in the Glue Data Catalog that is used for input or output data.</p>
 */
export interface GlueTable {
  /**
   * <p>A database name in the Glue Data Catalog.</p>
   */
  DatabaseName: string | undefined;

  /**
   * <p>A table name in the Glue Data Catalog.</p>
   */
  TableName: string | undefined;

  /**
   * <p>A unique identifier for the Glue Data Catalog.</p>
   */
  CatalogId?: string;

  /**
   * <p>The name of the connection to the Glue Data Catalog.</p>
   */
  ConnectionName?: string;
}

export namespace GlueTable {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GlueTable): any => ({
    ...obj,
  });
}

/**
 * <p>The parameters to configure the find matches transform.</p>
 */
export interface FindMatchesParameters {
  /**
   * <p>The name of a column that uniquely identifies rows in the source table. Used to help identify matching records.</p>
   */
  PrimaryKeyColumnName?: string;

  /**
   * <p>The value selected when tuning your transform for a balance between precision and recall.
   *       A value of 0.5 means no preference; a value of 1.0 means a bias purely for precision, and a
   *       value of 0.0 means a bias for recall. Because this is a tradeoff, choosing values close to 1.0
   *       means very low recall, and choosing values close to 0.0 results in very low precision.</p>
   *
   * 	        <p>The precision metric indicates how often your model is correct when it predicts a match. </p>
   *
   * 	        <p>The recall metric indicates that for an actual match, how often your model predicts the
   *       match.</p>
   */
  PrecisionRecallTradeoff?: number;

  /**
   * <p>The value that is selected when tuning your transform for a balance between accuracy and
   *       cost. A value of 0.5 means that the system balances accuracy and cost concerns. A value of 1.0
   *       means a bias purely for accuracy, which typically results in a higher cost, sometimes
   *       substantially higher. A value of 0.0 means a bias purely for cost, which results in a less
   *       accurate <code>FindMatches</code> transform, sometimes with unacceptable accuracy.</p>
   *
   * 	        <p>Accuracy measures how well the transform finds true positives and true negatives. Increasing accuracy requires more machine resources and cost. But it also results in increased recall. </p>
   *
   * 	        <p>Cost measures how many compute resources, and thus money, are consumed to run the
   *       transform.</p>
   */
  AccuracyCostTradeoff?: number;

  /**
   * <p>The value to switch on or off to force the output to match the provided labels from users. If the value is <code>True</code>, the <code>find matches</code> transform forces the output to match the provided labels. The results override the normal conflation results. If the value is <code>False</code>, the <code>find matches</code> transform does not ensure all the labels provided are respected, and the results rely on the trained model.</p>
   *          <p>Note that setting this value to true may increase the conflation execution time.</p>
   */
  EnforceProvidedLabels?: boolean;
}

export namespace FindMatchesParameters {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FindMatchesParameters): any => ({
    ...obj,
  });
}

/**
 * <p>The algorithm-specific parameters that are associated with the machine learning
 *       transform.</p>
 */
export interface TransformParameters {
  /**
   * <p>The type of machine learning transform.</p>
   * 	        <p>For information about the types of machine learning transforms, see <a href="https://docs.aws.amazon.com/glue/latest/dg/add-job-machine-learning-transform.html">Creating Machine Learning Transforms</a>.</p>
   */
  TransformType: TransformType | string | undefined;

  /**
   * <p>The parameters for the find matches algorithm.</p>
   */
  FindMatchesParameters?: FindMatchesParameters;
}

export namespace TransformParameters {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TransformParameters): any => ({
    ...obj,
  });
}

/**
 * <p>The encryption-at-rest settings of the transform that apply to accessing user data.</p>
 */
export interface MLUserDataEncryption {
  /**
   * <p>The encryption mode applied to user data. Valid values are:</p>
   *
   * 	        <ul>
   *             <li>
   *                <p>DISABLED: encryption is disabled</p>
   *             </li>
   *             <li>
   *                <p>SSEKMS: use of server-side encryption with Key Management Service (SSE-KMS) for user data stored in Amazon S3.</p>
   *             </li>
   *          </ul>
   */
  MlUserDataEncryptionMode: MLUserDataEncryptionModeString | string | undefined;

  /**
   * <p>The ID for the customer-provided KMS key.</p>
   */
  KmsKeyId?: string;
}

export namespace MLUserDataEncryption {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MLUserDataEncryption): any => ({
    ...obj,
  });
}

/**
 * <p>The encryption-at-rest settings of the transform that apply to accessing user data. Machine learning transforms can access user data encrypted in Amazon S3 using KMS.</p>
 *
 * 	        <p>Additionally, imported labels and trained transforms can now be encrypted using a customer provided KMS key.</p>
 */
export interface TransformEncryption {
  /**
   * <p>An <code>MLUserDataEncryption</code> object containing the encryption mode and customer-provided KMS key ID.</p>
   */
  MlUserDataEncryption?: MLUserDataEncryption;

  /**
   * <p>The name of the security configuration.</p>
   */
  TaskRunSecurityConfigurationName?: string;
}

export namespace TransformEncryption {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TransformEncryption): any => ({
    ...obj,
  });
}

/**
 * <p>A structure for a partition index.</p>
 */
export interface PartitionIndex {
  /**
   * <p>The keys for the partition index.</p>
   */
  Keys: string[] | undefined;

  /**
   * <p>The name of the partition index.</p>
   */
  IndexName: string | undefined;
}

export namespace PartitionIndex {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PartitionIndex): any => ({
    ...obj,
  });
}

/**
 * <p>A wrapper structure that may contain the registry name and Amazon Resource Name (ARN).</p>
 */
export interface RegistryId {
  /**
   * <p>Name of the registry. Used only for lookup. One of <code>RegistryArn</code> or <code>RegistryName</code> has to be provided. </p>
   */
  RegistryName?: string;

  /**
   * <p>Arn of the registry to be updated. One of <code>RegistryArn</code> or <code>RegistryName</code> has to be provided.</p>
   */
  RegistryArn?: string;
}

export namespace RegistryId {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RegistryId): any => ({
    ...obj,
  });
}

/**
 * <p>Represents a directional edge in a directed acyclic graph (DAG).</p>
 */
export interface CodeGenEdge {
  /**
   * <p>The ID of the node at which the edge starts.</p>
   */
  Source: string | undefined;

  /**
   * <p>The ID of the node at which the edge ends.</p>
   */
  Target: string | undefined;

  /**
   * <p>The target of the edge.</p>
   */
  TargetParameter?: string;
}

export namespace CodeGenEdge {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CodeGenEdge): any => ({
    ...obj,
  });
}

/**
 * <p>An argument or property of a node.</p>
 */
export interface CodeGenNodeArg {
  /**
   * <p>The name of the argument or property.</p>
   */
  Name: string | undefined;

  /**
   * <p>The value of the argument or property.</p>
   */
  Value: string | undefined;

  /**
   * <p>True if the value is used as a parameter.</p>
   */
  Param?: boolean;
}

export namespace CodeGenNodeArg {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CodeGenNodeArg): any => ({
    ...obj,
  });
}

/**
 * <p>Represents a node in a directed acyclic graph (DAG)</p>
 */
export interface CodeGenNode {
  /**
   * <p>A node identifier that is unique within the node's graph.</p>
   */
  Id: string | undefined;

  /**
   * <p>The type of node that this is.</p>
   */
  NodeType: string | undefined;

  /**
   * <p>Properties of the node, in the form of name-value pairs.</p>
   */
  Args: CodeGenNodeArg[] | undefined;

  /**
   * <p>The line number of the node.</p>
   */
  LineNumber?: number;
}

export namespace CodeGenNode {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CodeGenNode): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies how Amazon CloudWatch data should be encrypted.</p>
 */
export interface CloudWatchEncryption {
  /**
   * <p>The encryption mode to use for CloudWatch data.</p>
   */
  CloudWatchEncryptionMode?: CloudWatchEncryptionMode | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the KMS key to be used to encrypt the data.</p>
   */
  KmsKeyArn?: string;
}

export namespace CloudWatchEncryption {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CloudWatchEncryption): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies how job bookmark data should be encrypted.</p>
 */
export interface JobBookmarksEncryption {
  /**
   * <p>The encryption mode to use for job bookmarks data.</p>
   */
  JobBookmarksEncryptionMode?: JobBookmarksEncryptionMode | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the KMS key to be used to encrypt the data.</p>
   */
  KmsKeyArn?: string;
}

export namespace JobBookmarksEncryption {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: JobBookmarksEncryption): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies how Amazon Simple Storage Service (Amazon S3) data should be encrypted.</p>
 */
export interface S3Encryption {
  /**
   * <p>The encryption mode to use for Amazon S3 data.</p>
   */
  S3EncryptionMode?: S3EncryptionMode | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the KMS key to be used to encrypt the data.</p>
   */
  KmsKeyArn?: string;
}

export namespace S3Encryption {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: S3Encryption): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies an encryption configuration.</p>
 */
export interface EncryptionConfiguration {
  /**
   * <p>The encryption configuration for Amazon Simple Storage Service (Amazon S3) data.</p>
   */
  S3Encryption?: S3Encryption[];

  /**
   * <p>The encryption configuration for Amazon CloudWatch.</p>
   */
  CloudWatchEncryption?: CloudWatchEncryption;

  /**
   * <p>The encryption configuration for job bookmarks.</p>
   */
  JobBookmarksEncryption?: JobBookmarksEncryption;
}

export namespace EncryptionConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EncryptionConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>The <code>SessionCommand</code> that runs the job.</p>
 */
export interface SessionCommand {
  /**
   * <p>Specifies the name of the SessionCommand.Can be 'glueetl' or 'gluestreaming'.</p>
   */
  Name?: string;

  /**
   * <p>Specifies the Python version. The Python version indicates the version supported for jobs of type Spark.</p>
   */
  PythonVersion?: string;
}

export namespace SessionCommand {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SessionCommand): any => ({
    ...obj,
  });
}

/**
 * <p>A structure that describes a target table for resource linking.</p>
 */
export interface TableIdentifier {
  /**
   * <p>The ID of the Data Catalog in which the table resides.</p>
   */
  CatalogId?: string;

  /**
   * <p>The name of the catalog database that contains the target table.</p>
   */
  DatabaseName?: string;

  /**
   * <p>The name of the target table.</p>
   */
  Name?: string;
}

export namespace TableIdentifier {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TableIdentifier): any => ({
    ...obj,
  });
}

/**
 * <p>A structure used to define a table.</p>
 */
export interface TableInput {
  /**
   * <p>The table name. For Hive compatibility, this is folded to
   *       lowercase when it is stored.</p>
   */
  Name: string | undefined;

  /**
   * <p>A description of the table.</p>
   */
  Description?: string;

  /**
   * <p>The table owner.</p>
   */
  Owner?: string;

  /**
   * <p>The last time that the table was accessed.</p>
   */
  LastAccessTime?: Date;

  /**
   * <p>The last time that column statistics were computed for this table.</p>
   */
  LastAnalyzedTime?: Date;

  /**
   * <p>The retention time for this table.</p>
   */
  Retention?: number;

  /**
   * <p>A storage descriptor containing information about the physical storage
   *       of this table.</p>
   */
  StorageDescriptor?: StorageDescriptor;

  /**
   * <p>A list of columns by which the table is partitioned. Only primitive
   *       types are supported as partition keys.</p>
   * 	        <p>When you create a table used by Amazon Athena, and you do not specify any
   *         <code>partitionKeys</code>, you must at least set the value of <code>partitionKeys</code> to
   *       an empty list. For example:</p>
   *          <p>
   *             <code>"PartitionKeys": []</code>
   *          </p>
   */
  PartitionKeys?: Column[];

  /**
   * <p>If the table is a view, the original text of the view; otherwise <code>null</code>.</p>
   */
  ViewOriginalText?: string;

  /**
   * <p>If the table is a view, the expanded text of the view; otherwise <code>null</code>.</p>
   */
  ViewExpandedText?: string;

  /**
   * <p>The type of this table (<code>EXTERNAL_TABLE</code>, <code>VIRTUAL_VIEW</code>, etc.).</p>
   */
  TableType?: string;

  /**
   * <p>These key-value pairs define properties associated with the table.</p>
   */
  Parameters?: Record<string, string>;

  /**
   * <p>A <code>TableIdentifier</code> structure that describes a target table for resource linking.</p>
   */
  TargetTable?: TableIdentifier;
}

export namespace TableInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TableInput): any => ({
    ...obj,
  });
}

/**
 * <p>The URIs for function resources.</p>
 */
export interface ResourceUri {
  /**
   * <p>The type of the resource.</p>
   */
  ResourceType?: ResourceType | string;

  /**
   * <p>The URI for accessing the resource.</p>
   */
  Uri?: string;
}

export namespace ResourceUri {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceUri): any => ({
    ...obj,
  });
}

/**
 * <p>A structure used to create or update a user-defined function.</p>
 */
export interface UserDefinedFunctionInput {
  /**
   * <p>The name of the function.</p>
   */
  FunctionName?: string;

  /**
   * <p>The Java class that contains the function code.</p>
   */
  ClassName?: string;

  /**
   * <p>The owner of the function.</p>
   */
  OwnerName?: string;

  /**
   * <p>The owner type.</p>
   */
  OwnerType?: PrincipalType | string;

  /**
   * <p>The resource URIs for the function.</p>
   */
  ResourceUris?: ResourceUri[];
}

export namespace UserDefinedFunctionInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UserDefinedFunctionInput): any => ({
    ...obj,
  });
}

/**
 * <p>The operation cannot be performed because the crawler is already running.</p>
 */
export class CrawlerRunningException extends __BaseException {
  readonly name: "CrawlerRunningException" = "CrawlerRunningException";
  readonly $fault: "client" = "client";
  /**
   * <p>A message describing the problem.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CrawlerRunningException, __BaseException>) {
    super({
      name: "CrawlerRunningException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CrawlerRunningException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified scheduler is transitioning.</p>
 */
export class SchedulerTransitioningException extends __BaseException {
  readonly name: "SchedulerTransitioningException" = "SchedulerTransitioningException";
  readonly $fault: "client" = "client";
  /**
   * <p>A message describing the problem.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SchedulerTransitioningException, __BaseException>) {
    super({
      name: "SchedulerTransitioningException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SchedulerTransitioningException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The <code>CreatePartitions</code> API was called on a table that has indexes enabled.	</p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * <p>A message describing the problem.</p>
   */
  Message?: string;
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
  }
}

/**
 * <p>A specified condition was not satisfied.</p>
 */
export class ConditionCheckFailureException extends __BaseException {
  readonly name: "ConditionCheckFailureException" = "ConditionCheckFailureException";
  readonly $fault: "client" = "client";
  /**
   * <p>A message describing the problem.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConditionCheckFailureException, __BaseException>) {
    super({
      name: "ConditionCheckFailureException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConditionCheckFailureException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The details of a blueprint run.</p>
 */
export interface BlueprintRun {
  /**
   * <p>The name of the blueprint.</p>
   */
  BlueprintName?: string;

  /**
   * <p>The run ID for this blueprint run.</p>
   */
  RunId?: string;

  /**
   * <p>The name of a workflow that is created as a result of a successful blueprint run. If a blueprint run has an error, there will not be a workflow created.</p>
   */
  WorkflowName?: string;

  /**
   * <p>The state of the blueprint run. Possible values are:</p>
   *
   * 	        <ul>
   *             <li>
   *                <p>Running — The blueprint run is in progress.</p>
   *             </li>
   *             <li>
   *                <p>Succeeded — The blueprint run completed successfully.</p>
   *             </li>
   *             <li>
   *                <p>Failed — The blueprint run failed and rollback is complete.</p>
   *             </li>
   *             <li>
   *                <p>Rolling Back — The blueprint run failed and rollback is in progress.</p>
   *             </li>
   *          </ul>
   */
  State?: BlueprintRunState | string;

  /**
   * <p>The date and time that the blueprint run started.</p>
   */
  StartedOn?: Date;

  /**
   * <p>The date and time that the blueprint run completed.</p>
   */
  CompletedOn?: Date;

  /**
   * <p>Indicates any errors that are seen while running the blueprint.</p>
   */
  ErrorMessage?: string;

  /**
   * <p>If there are any errors while creating the entities of a workflow, we try to roll back the created entities until that point and delete them. This attribute indicates the errors seen while trying to delete the entities that are created.</p>
   */
  RollbackErrorMessage?: string;

  /**
   * <p>The blueprint parameters as a string. You will have to provide a value for each key that is required from the parameter spec that is defined in the <code>Blueprint$ParameterSpec</code>.</p>
   */
  Parameters?: string;

  /**
   * <p>The role ARN. This role will be assumed by the Glue service and will be used to create the workflow and other entities of a workflow.</p>
   */
  RoleArn?: string;
}

export namespace BlueprintRun {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BlueprintRun): any => ({
    ...obj,
  });
}

/**
 * <p>A structure containing migration status information.</p>
 */
export interface CatalogImportStatus {
  /**
   * <p>
   *             <code>True</code> if the migration has completed, or <code>False</code> otherwise.</p>
   */
  ImportCompleted?: boolean;

  /**
   * <p>The time that the migration was started.</p>
   */
  ImportTime?: Date;

  /**
   * <p>The name of the person who initiated the migration.</p>
   */
  ImportedBy?: string;
}

export namespace CatalogImportStatus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CatalogImportStatus): any => ({
    ...obj,
  });
}

/**
 * <p>A classifier for custom <code>CSV</code> content.</p>
 */
export interface CsvClassifier {
  /**
   * <p>The name of the classifier.</p>
   */
  Name: string | undefined;

  /**
   * <p>The time that this classifier was registered.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The time that this classifier was last updated.</p>
   */
  LastUpdated?: Date;

  /**
   * <p>The version of this classifier.</p>
   */
  Version?: number;

  /**
   * <p>A custom symbol to denote what separates each column entry in the row.</p>
   */
  Delimiter?: string;

  /**
   * <p>A custom symbol to denote what combines content into a single column value. It must be
   *       different from the column delimiter.</p>
   */
  QuoteSymbol?: string;

  /**
   * <p>Indicates whether the CSV file contains a header.</p>
   */
  ContainsHeader?: CsvHeaderOption | string;

  /**
   * <p>A list of strings representing column names.</p>
   */
  Header?: string[];

  /**
   * <p>Specifies not to trim values before identifying the type of column values. The default
   *       value is <code>true</code>.</p>
   */
  DisableValueTrimming?: boolean;

  /**
   * <p>Enables the processing of files that contain only one column.</p>
   */
  AllowSingleColumn?: boolean;
}

export namespace CsvClassifier {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CsvClassifier): any => ({
    ...obj,
  });
}

/**
 * <p>A classifier that uses <code>grok</code> patterns.</p>
 */
export interface GrokClassifier {
  /**
   * <p>The name of the classifier.</p>
   */
  Name: string | undefined;

  /**
   * <p>An identifier of the data format that the classifier matches, such as Twitter, JSON, Omniture logs, and
   *       so on.</p>
   */
  Classification: string | undefined;

  /**
   * <p>The time that this classifier was registered.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The time that this classifier was last updated.</p>
   */
  LastUpdated?: Date;

  /**
   * <p>The version of this classifier.</p>
   */
  Version?: number;

  /**
   * <p>The grok pattern applied to a data store by this classifier.
   *        For more information, see built-in patterns in <a href="https://docs.aws.amazon.com/glue/latest/dg/custom-classifier.html">Writing Custom Classifiers</a>.</p>
   */
  GrokPattern: string | undefined;

  /**
   * <p>Optional custom grok patterns defined by this classifier.
   *       For more information, see custom patterns in <a href="https://docs.aws.amazon.com/glue/latest/dg/custom-classifier.html">Writing Custom Classifiers</a>.</p>
   */
  CustomPatterns?: string;
}

export namespace GrokClassifier {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GrokClassifier): any => ({
    ...obj,
  });
}

/**
 * <p>A classifier for <code>JSON</code> content.</p>
 */
export interface JsonClassifier {
  /**
   * <p>The name of the classifier.</p>
   */
  Name: string | undefined;

  /**
   * <p>The time that this classifier was registered.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The time that this classifier was last updated.</p>
   */
  LastUpdated?: Date;

  /**
   * <p>The version of this classifier.</p>
   */
  Version?: number;

  /**
   * <p>A <code>JsonPath</code> string defining the JSON data for the classifier to classify.
   *       Glue supports a subset of JsonPath, as described in <a href="https://docs.aws.amazon.com/glue/latest/dg/custom-classifier.html#custom-classifier-json">Writing JsonPath Custom Classifiers</a>.</p>
   */
  JsonPath: string | undefined;
}

export namespace JsonClassifier {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: JsonClassifier): any => ({
    ...obj,
  });
}

/**
 * <p>A classifier for <code>XML</code> content.</p>
 */
export interface XMLClassifier {
  /**
   * <p>The name of the classifier.</p>
   */
  Name: string | undefined;

  /**
   * <p>An identifier of the data format that the classifier matches.</p>
   */
  Classification: string | undefined;

  /**
   * <p>The time that this classifier was registered.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The time that this classifier was last updated.</p>
   */
  LastUpdated?: Date;

  /**
   * <p>The version of this classifier.</p>
   */
  Version?: number;

  /**
   * <p>The XML tag designating the element that contains each record in an XML document being
   *       parsed. This can't identify a self-closing element (closed by <code>/></code>). An empty
   *       row element that contains only attributes can be parsed as long as it ends with a closing tag
   *       (for example, <code><row item_a="A" item_b="B"></row></code> is okay, but
   *         <code><row item_a="A" item_b="B" /></code> is not).</p>
   */
  RowTag?: string;
}

export namespace XMLClassifier {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: XMLClassifier): any => ({
    ...obj,
  });
}

/**
 * <p>Classifiers are triggered during a crawl task. A classifier checks whether a given file is
 *       in a format it can handle. If it is, the classifier creates a schema in the form of a
 *         <code>StructType</code> object that matches that data format.</p>
 *          <p>You can use the standard classifiers that Glue provides, or you can write your own
 *       classifiers to best categorize your data sources and specify the appropriate schemas to use
 *       for them. A classifier can be a <code>grok</code> classifier, an <code>XML</code> classifier,
 *       a <code>JSON</code> classifier, or a custom <code>CSV</code> classifier, as specified in one
 *       of the fields in the <code>Classifier</code> object.</p>
 */
export interface Classifier {
  /**
   * <p>A classifier that uses <code>grok</code>.</p>
   */
  GrokClassifier?: GrokClassifier;

  /**
   * <p>A classifier for XML content.</p>
   */
  XMLClassifier?: XMLClassifier;

  /**
   * <p>A classifier for JSON content.</p>
   */
  JsonClassifier?: JsonClassifier;

  /**
   * <p>A classifier for comma-separated values (CSV).</p>
   */
  CsvClassifier?: CsvClassifier;
}

export namespace Classifier {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Classifier): any => ({
    ...obj,
  });
}

/**
 * <p>Defines column statistics supported for bit sequence data values.</p>
 */
export interface BinaryColumnStatisticsData {
  /**
   * <p>The size of the longest bit sequence in the column.</p>
   */
  MaximumLength: number | undefined;

  /**
   * <p>The average bit sequence length in the column.</p>
   */
  AverageLength: number | undefined;

  /**
   * <p>The number of null values in the column.</p>
   */
  NumberOfNulls: number | undefined;
}

export namespace BinaryColumnStatisticsData {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BinaryColumnStatisticsData): any => ({
    ...obj,
  });
}

/**
 * <p>Defines column statistics supported for Boolean data columns.</p>
 */
export interface BooleanColumnStatisticsData {
  /**
   * <p>The number of true values in the column.</p>
   */
  NumberOfTrues: number | undefined;

  /**
   * <p>The number of false values in the column.</p>
   */
  NumberOfFalses: number | undefined;

  /**
   * <p>The number of null values in the column.</p>
   */
  NumberOfNulls: number | undefined;
}

export namespace BooleanColumnStatisticsData {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BooleanColumnStatisticsData): any => ({
    ...obj,
  });
}

/**
 * <p>Defines column statistics supported for timestamp data columns.</p>
 */
export interface DateColumnStatisticsData {
  /**
   * <p>The lowest value in the column.</p>
   */
  MinimumValue?: Date;

  /**
   * <p>The highest value in the column.</p>
   */
  MaximumValue?: Date;

  /**
   * <p>The number of null values in the column.</p>
   */
  NumberOfNulls: number | undefined;

  /**
   * <p>The number of distinct values in a column.</p>
   */
  NumberOfDistinctValues: number | undefined;
}

export namespace DateColumnStatisticsData {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DateColumnStatisticsData): any => ({
    ...obj,
  });
}

/**
 * <p>Contains a numeric value in decimal format.</p>
 */
export interface DecimalNumber {
  /**
   * <p>The unscaled numeric value.</p>
   */
  UnscaledValue: Uint8Array | undefined;

  /**
   * <p>The scale that determines where the decimal point falls in the
   *       unscaled value.</p>
   */
  Scale: number | undefined;
}

export namespace DecimalNumber {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DecimalNumber): any => ({
    ...obj,
  });
}

/**
 * <p>Defines column statistics supported for fixed-point number data columns.</p>
 */
export interface DecimalColumnStatisticsData {
  /**
   * <p>The lowest value in the column.</p>
   */
  MinimumValue?: DecimalNumber;

  /**
   * <p>The highest value in the column.</p>
   */
  MaximumValue?: DecimalNumber;

  /**
   * <p>The number of null values in the column.</p>
   */
  NumberOfNulls: number | undefined;

  /**
   * <p>The number of distinct values in a column.</p>
   */
  NumberOfDistinctValues: number | undefined;
}

export namespace DecimalColumnStatisticsData {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DecimalColumnStatisticsData): any => ({
    ...obj,
  });
}

/**
 * <p>Defines column statistics supported for floating-point number data columns.</p>
 */
export interface DoubleColumnStatisticsData {
  /**
   * <p>The lowest value in the column.</p>
   */
  MinimumValue?: number;

  /**
   * <p>The highest value in the column.</p>
   */
  MaximumValue?: number;

  /**
   * <p>The number of null values in the column.</p>
   */
  NumberOfNulls: number | undefined;

  /**
   * <p>The number of distinct values in a column.</p>
   */
  NumberOfDistinctValues: number | undefined;
}

export namespace DoubleColumnStatisticsData {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DoubleColumnStatisticsData): any => ({
    ...obj,
  });
}

/**
 * <p>Defines column statistics supported for integer data columns.</p>
 */
export interface LongColumnStatisticsData {
  /**
   * <p>The lowest value in the column.</p>
   */
  MinimumValue?: number;

  /**
   * <p>The highest value in the column.</p>
   */
  MaximumValue?: number;

  /**
   * <p>The number of null values in the column.</p>
   */
  NumberOfNulls: number | undefined;

  /**
   * <p>The number of distinct values in a column.</p>
   */
  NumberOfDistinctValues: number | undefined;
}

export namespace LongColumnStatisticsData {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LongColumnStatisticsData): any => ({
    ...obj,
  });
}

/**
 * <p>Defines column statistics supported for character sequence data values.</p>
 */
export interface StringColumnStatisticsData {
  /**
   * <p>The size of the longest string in the column.</p>
   */
  MaximumLength: number | undefined;

  /**
   * <p>The average string length in the column.</p>
   */
  AverageLength: number | undefined;

  /**
   * <p>The number of null values in the column.</p>
   */
  NumberOfNulls: number | undefined;

  /**
   * <p>The number of distinct values in a column.</p>
   */
  NumberOfDistinctValues: number | undefined;
}

export namespace StringColumnStatisticsData {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StringColumnStatisticsData): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the individual types of column statistics data. Only one data object should be set and indicated by the <code>Type</code> attribute.</p>
 */
export interface ColumnStatisticsData {
  /**
   * <p>The type of column statistics data.</p>
   */
  Type: ColumnStatisticsType | string | undefined;

  /**
   * <p>Boolean column statistics data.</p>
   */
  BooleanColumnStatisticsData?: BooleanColumnStatisticsData;

  /**
   * <p>Date column statistics data.</p>
   */
  DateColumnStatisticsData?: DateColumnStatisticsData;

  /**
   * <p>Decimal column statistics data.</p>
   */
  DecimalColumnStatisticsData?: DecimalColumnStatisticsData;

  /**
   * <p>Double column statistics data.</p>
   */
  DoubleColumnStatisticsData?: DoubleColumnStatisticsData;

  /**
   * <p>Long column statistics data.</p>
   */
  LongColumnStatisticsData?: LongColumnStatisticsData;

  /**
   * <p>String column statistics data.</p>
   */
  StringColumnStatisticsData?: StringColumnStatisticsData;

  /**
   * <p>Binary column statistics data.</p>
   */
  BinaryColumnStatisticsData?: BinaryColumnStatisticsData;
}

export namespace ColumnStatisticsData {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ColumnStatisticsData): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the generated column-level statistics for a table or partition.</p>
 */
export interface ColumnStatistics {
  /**
   * <p>Name of column which statistics belong to.</p>
   */
  ColumnName: string | undefined;

  /**
   * <p>The data type of the column.</p>
   */
  ColumnType: string | undefined;

  /**
   * <p>The timestamp of when column statistics were generated.</p>
   */
  AnalyzedTime: Date | undefined;

  /**
   * <p>A <code>ColumnStatisticData</code> object that contains the statistics data values.</p>
   */
  StatisticsData: ColumnStatisticsData | undefined;
}

export namespace ColumnStatistics {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ColumnStatistics): any => ({
    ...obj,
  });
}

/**
 * <p>Encapsulates a column name that failed and the reason for failure.</p>
 */
export interface ColumnError {
  /**
   * <p>The name of the column that failed.</p>
   */
  ColumnName?: string;

  /**
   * <p>An error message with the reason for the failure of an operation.</p>
   */
  Error?: ErrorDetail;
}

export namespace ColumnError {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ColumnError): any => ({
    ...obj,
  });
}

/**
 * <p>Defines a connection to a data source.</p>
 */
export interface Connection {
  /**
   * <p>The name of the connection definition.</p>
   */
  Name?: string;

  /**
   * <p>The description of the connection.</p>
   */
  Description?: string;

  /**
   * <p>The type of the connection. Currently, SFTP is not supported.</p>
   */
  ConnectionType?: ConnectionType | string;

  /**
   * <p>A list of criteria that can be used in selecting this connection.</p>
   */
  MatchCriteria?: string[];

  /**
   * <p>These key-value pairs define parameters for the connection:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>HOST</code> - The host URI: either the
   *         fully qualified domain name (FQDN) or the IPv4 address of
   *         the database host.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PORT</code> - The port number, between
   *         1024 and 65535, of the port on which the database host is
   *         listening for database connections.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>USER_NAME</code> -  The name under which
   *         to log in to the database. The value string for <code>USER_NAME</code> is "<code>USERNAME</code>".</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PASSWORD</code> - A password,
   *         if one is used, for the user name.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ENCRYPTED_PASSWORD</code> - When you enable connection password protection by setting <code>ConnectionPasswordEncryption</code> in the Data Catalog encryption settings, this field stores the encrypted password.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>JDBC_DRIVER_JAR_URI</code> - The Amazon Simple Storage Service (Amazon S3) path of the
   *           JAR file that contains the JDBC driver to use.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>JDBC_DRIVER_CLASS_NAME</code> - The class name of the JDBC driver to use.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>JDBC_ENGINE</code> - The name of the JDBC engine to use.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>JDBC_ENGINE_VERSION</code> - The version of the JDBC engine to use.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CONFIG_FILES</code> - (Reserved for future use.)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INSTANCE_ID</code> - The instance ID to use.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>JDBC_CONNECTION_URL</code> - The URL for connecting to a JDBC data source.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>JDBC_ENFORCE_SSL</code> - A Boolean string (true, false) specifying whether Secure
   *           Sockets Layer (SSL) with hostname matching is enforced for the JDBC connection on the
   *           client. The default is false.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CUSTOM_JDBC_CERT</code> - An Amazon S3 location specifying the customer's root certificate. Glue uses this root certificate to validate the customer’s certificate when connecting to the customer database. Glue only handles X.509 certificates. The certificate provided must be DER-encoded and supplied in Base64 encoding PEM format.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SKIP_CUSTOM_JDBC_CERT_VALIDATION</code> - By default, this is <code>false</code>. Glue validates the Signature algorithm and Subject Public Key Algorithm for the customer certificate. The only permitted algorithms for the Signature algorithm are SHA256withRSA, SHA384withRSA or SHA512withRSA. For the Subject Public Key Algorithm, the key length must be at least 2048. You can set the value of this property to <code>true</code> to skip Glue’s validation of the customer certificate.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CUSTOM_JDBC_CERT_STRING</code> - A custom JDBC certificate string which is used for domain match or distinguished name match to prevent a man-in-the-middle attack. In Oracle database, this is used as the <code>SSL_SERVER_CERT_DN</code>; in Microsoft SQL Server, this is used as the <code>hostNameInCertificate</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CONNECTION_URL</code> - The URL for connecting to a general (non-JDBC) data source.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>KAFKA_BOOTSTRAP_SERVERS</code> - A comma-separated list of host and port pairs that are the addresses of the Apache Kafka brokers in a Kafka cluster to which a Kafka client will connect to and bootstrap itself.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>KAFKA_SSL_ENABLED</code> - Whether to enable or disable SSL on an Apache Kafka connection. Default value is "true".</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>KAFKA_CUSTOM_CERT</code> - The Amazon S3 URL for the private CA cert file (.pem format). The default is an empty string.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>KAFKA_SKIP_CUSTOM_CERT_VALIDATION</code> - Whether to skip the validation of the CA cert file or not. Glue validates for three algorithms: SHA256withRSA, SHA384withRSA and SHA512withRSA. Default value is "false".</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SECRET_ID</code> - The secret ID used for the secret manager of credentials.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CONNECTOR_URL</code> - The connector URL for a MARKETPLACE or CUSTOM connection.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CONNECTOR_TYPE</code> - The connector type for a MARKETPLACE or CUSTOM connection.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CONNECTOR_CLASS_NAME</code> - The connector class name for a MARKETPLACE or CUSTOM connection.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>KAFKA_CLIENT_KEYSTORE</code> - The Amazon S3 location of the client keystore file for Kafka client side authentication (Optional).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>KAFKA_CLIENT_KEYSTORE_PASSWORD</code> - The password to access the provided keystore (Optional).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>KAFKA_CLIENT_KEY_PASSWORD</code> - A keystore can consist of multiple keys, so this is the password to access the client key to be used with the Kafka server side key (Optional).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ENCRYPTED_KAFKA_CLIENT_KEYSTORE_PASSWORD</code> - The encrypted version of the Kafka client keystore password (if the user has the Glue encrypt passwords setting selected).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ENCRYPTED_KAFKA_CLIENT_KEY_PASSWORD</code> - The encrypted version of the Kafka client key password (if the user has the Glue encrypt passwords setting selected).</p>
   *             </li>
   *          </ul>
   */
  ConnectionProperties?: Record<string, string>;

  /**
   * <p>A map of physical connection requirements, such as virtual private cloud (VPC) and
   *         <code>SecurityGroup</code>, that are needed to make this connection successfully.</p>
   */
  PhysicalConnectionRequirements?: PhysicalConnectionRequirements;

  /**
   * <p>The time that this connection definition was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The last time that this connection definition was updated.</p>
   */
  LastUpdatedTime?: Date;

  /**
   * <p>The user, group, or role that last updated this connection definition.</p>
   */
  LastUpdatedBy?: string;
}

export namespace Connection {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Connection): any => ({
    ...obj,
  });
}

/**
 * <p>Filters the connection definitions that are returned by the <code>GetConnections</code>
 *       API operation.</p>
 */
export interface GetConnectionsFilter {
  /**
   * <p>A criteria string that must match the criteria recorded in the
   *        connection definition for that connection definition to be returned.</p>
   */
  MatchCriteria?: string[];

  /**
   * <p>The type of connections to return. Currently, SFTP is not supported.</p>
   */
  ConnectionType?: ConnectionType | string;
}

export namespace GetConnectionsFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetConnectionsFilter): any => ({
    ...obj,
  });
}

/**
 * <p>Metrics for a specified crawler.</p>
 */
export interface CrawlerMetrics {
  /**
   * <p>The name of the crawler.</p>
   */
  CrawlerName?: string;

  /**
   * <p>The estimated time left to complete a running crawl.</p>
   */
  TimeLeftSeconds?: number;

  /**
   * <p>True if the crawler is still estimating how long it will take to complete this run.</p>
   */
  StillEstimating?: boolean;

  /**
   * <p>The duration of the crawler's most recent run, in seconds.</p>
   */
  LastRuntimeSeconds?: number;

  /**
   * <p>The median duration of this crawler's runs, in seconds.</p>
   */
  MedianRuntimeSeconds?: number;

  /**
   * <p>The number of tables created by this crawler.</p>
   */
  TablesCreated?: number;

  /**
   * <p>The number of tables updated by this crawler.</p>
   */
  TablesUpdated?: number;

  /**
   * <p>The number of tables deleted by this crawler.</p>
   */
  TablesDeleted?: number;
}

export namespace CrawlerMetrics {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CrawlerMetrics): any => ({
    ...obj,
  });
}

/**
 * <p>The data structure used by the Data Catalog to encrypt the password as part of
 *         <code>CreateConnection</code> or <code>UpdateConnection</code> and store it in the
 *         <code>ENCRYPTED_PASSWORD</code> field in the connection properties. You can enable catalog
 *       encryption or only password encryption.</p>
 *
 * 	        <p>When a <code>CreationConnection</code> request arrives containing a password, the Data
 *       Catalog first encrypts the password using your KMS key. It then encrypts the whole
 *       connection object again if catalog encryption is also enabled.</p>
 *
 *          <p>This encryption requires that you set KMS key permissions to enable or restrict access
 *       on the password key according to your security requirements. For example, you might want only
 *       administrators to have decrypt permission on the password key.</p>
 */
export interface ConnectionPasswordEncryption {
  /**
   * <p>When the <code>ReturnConnectionPasswordEncrypted</code> flag is set to "true", passwords remain encrypted in the responses of <code>GetConnection</code> and <code>GetConnections</code>. This encryption takes effect independently from catalog encryption. </p>
   */
  ReturnConnectionPasswordEncrypted: boolean | undefined;

  /**
   * <p>An KMS key that is used to encrypt the connection password. </p>
   *
   *          <p>If connection password protection is enabled, the caller of <code>CreateConnection</code>
   *       and <code>UpdateConnection</code> needs at least <code>kms:Encrypt</code> permission on the
   *       specified KMS key, to encrypt passwords before storing them in the Data Catalog. </p>
   *
   * 	        <p>You can set the decrypt permission to enable or restrict access on the password key according to your security requirements.</p>
   */
  AwsKmsKeyId?: string;
}

export namespace ConnectionPasswordEncryption {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConnectionPasswordEncryption): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies the encryption-at-rest configuration for the Data Catalog.</p>
 */
export interface EncryptionAtRest {
  /**
   * <p>The encryption-at-rest mode for encrypting Data Catalog data.</p>
   */
  CatalogEncryptionMode: CatalogEncryptionMode | string | undefined;

  /**
   * <p>The ID of the KMS key to use for encryption at rest.</p>
   */
  SseAwsKmsKeyId?: string;
}

export namespace EncryptionAtRest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EncryptionAtRest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains configuration information for maintaining Data Catalog security.</p>
 */
export interface DataCatalogEncryptionSettings {
  /**
   * <p>Specifies the encryption-at-rest configuration for the Data Catalog.</p>
   */
  EncryptionAtRest?: EncryptionAtRest;

  /**
   * <p>When connection password protection is enabled, the Data Catalog uses a customer-provided
   *       key to encrypt the password as part of <code>CreateConnection</code> or
   *         <code>UpdateConnection</code> and store it in the <code>ENCRYPTED_PASSWORD</code> field in
   *       the connection properties. You can enable catalog encryption or only password
   *       encryption.</p>
   */
  ConnectionPasswordEncryption?: ConnectionPasswordEncryption;
}

export namespace DataCatalogEncryptionSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DataCatalogEncryptionSettings): any => ({
    ...obj,
  });
}

/**
 * <p>The location of resources.</p>
 */
export interface Location {
  /**
   * <p>A JDBC location.</p>
   */
  Jdbc?: CodeGenNodeArg[];

  /**
   * <p>An Amazon Simple Storage Service (Amazon S3) location.</p>
   */
  S3?: CodeGenNodeArg[];

  /**
   * <p>An Amazon DynamoDB table location.</p>
   */
  DynamoDB?: CodeGenNodeArg[];
}

export namespace Location {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Location): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies a table definition in the Glue Data Catalog.</p>
 */
export interface CatalogEntry {
  /**
   * <p>The database in which the table metadata resides.</p>
   */
  DatabaseName: string | undefined;

  /**
   * <p>The name of the table in question.</p>
   */
  TableName: string | undefined;
}

export namespace CatalogEntry {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CatalogEntry): any => ({
    ...obj,
  });
}

/**
 * <p>Defines a mapping.</p>
 */
export interface MappingEntry {
  /**
   * <p>The name of the source table.</p>
   */
  SourceTable?: string;

  /**
   * <p>The source path.</p>
   */
  SourcePath?: string;

  /**
   * <p>The source type.</p>
   */
  SourceType?: string;

  /**
   * <p>The target table.</p>
   */
  TargetTable?: string;

  /**
   * <p>The target path.</p>
   */
  TargetPath?: string;

  /**
   * <p>The target type.</p>
   */
  TargetType?: string;
}

export namespace MappingEntry {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MappingEntry): any => ({
    ...obj,
  });
}

/**
 * <p>The criteria that are used to filter the task runs for the machine learning
 *       transform.</p>
 */
export interface TaskRunFilterCriteria {
  /**
   * <p>The type of task run.</p>
   */
  TaskRunType?: TaskType | string;

  /**
   * <p>The current status of the task run.</p>
   */
  Status?: TaskStatusType | string;

  /**
   * <p>Filter on task runs started before this date.</p>
   */
  StartedBefore?: Date;

  /**
   * <p>Filter on task runs started after this date.</p>
   */
  StartedAfter?: Date;
}

export namespace TaskRunFilterCriteria {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TaskRunFilterCriteria): any => ({
    ...obj,
  });
}

/**
 * <p>The sorting criteria that are used to sort the list of task runs for the machine learning
 *       transform.</p>
 */
export interface TaskRunSortCriteria {
  /**
   * <p>The column to be used to sort the list of task runs for the machine learning
   *       transform.</p>
   */
  Column: TaskRunSortColumnType | string | undefined;

  /**
   * <p>The sort direction to be used to sort the list of task runs for the machine learning
   *       transform.</p>
   */
  SortDirection: SortDirectionType | string | undefined;
}

export namespace TaskRunSortCriteria {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TaskRunSortCriteria): any => ({
    ...obj,
  });
}

/**
 * <p>A structure containing the column name and column importance score for a column. </p>
 *
 * 	        <p>Column importance helps you understand how columns contribute to your model, by identifying which columns in your records are more important than others.</p>
 */
export interface ColumnImportance {
  /**
   * <p>The name of a column.</p>
   */
  ColumnName?: string;

  /**
   * <p>The column importance score for the column, as a decimal.</p>
   */
  Importance?: number;
}

export namespace ColumnImportance {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ColumnImportance): any => ({
    ...obj,
  });
}

/**
 * <p>The confusion matrix shows you what your transform is predicting accurately and what types of errors it is making.</p>
 *
 * 	        <p>For more information, see <a href="https://en.wikipedia.org/wiki/Confusion_matrix">Confusion matrix</a> in Wikipedia.</p>
 */
export interface ConfusionMatrix {
  /**
   * <p>The number of matches in the data that the transform correctly found, in the confusion matrix for your transform.</p>
   */
  NumTruePositives?: number;

  /**
   * <p>The number of nonmatches in the data that the transform incorrectly classified as a match,
   *       in the confusion matrix for your transform.</p>
   */
  NumFalsePositives?: number;

  /**
   * <p>The number of nonmatches in the data that the transform correctly rejected, in the
   *       confusion matrix for your transform.</p>
   */
  NumTrueNegatives?: number;

  /**
   * <p>The number of matches in the data that the transform didn't find, in the confusion matrix for your transform.</p>
   */
  NumFalseNegatives?: number;
}

export namespace ConfusionMatrix {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConfusionMatrix): any => ({
    ...obj,
  });
}

/**
 * <p>A key-value pair representing a column and data type that this transform can
 *       run against. The <code>Schema</code> parameter of the <code>MLTransform</code> may contain up to 100 of these structures.</p>
 */
export interface SchemaColumn {
  /**
   * <p>The name of the column.</p>
   */
  Name?: string;

  /**
   * <p>The type of data in the column.</p>
   */
  DataType?: string;
}

export namespace SchemaColumn {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SchemaColumn): any => ({
    ...obj,
  });
}

/**
 * <p>The criteria used to filter the machine learning transforms.</p>
 */
export interface TransformFilterCriteria {
  /**
   * <p>A unique transform name that is used to filter the machine learning transforms.</p>
   */
  Name?: string;

  /**
   * <p>The type of machine learning transform that is used to filter the machine learning
   *       transforms.</p>
   */
  TransformType?: TransformType | string;

  /**
   * <p>Filters the list of machine learning transforms by the last known status of the transforms (to indicate whether a transform can be used or not). One of "NOT_READY", "READY", or "DELETING".</p>
   */
  Status?: TransformStatusType | string;

  /**
   * <p>This value determines which version of Glue this machine learning transform is compatible with. Glue 1.0 is recommended for most customers. If the value is not set, the Glue compatibility defaults to Glue 0.9.  For more information, see <a href="https://docs.aws.amazon.com/glue/latest/dg/release-notes.html#release-notes-versions">Glue Versions</a> in the developer guide.</p>
   */
  GlueVersion?: string;

  /**
   * <p>The time and date before which the transforms were created.</p>
   */
  CreatedBefore?: Date;

  /**
   * <p>The time and date after which the transforms were created.</p>
   */
  CreatedAfter?: Date;

  /**
   * <p>Filter on transforms last modified before this date.</p>
   */
  LastModifiedBefore?: Date;

  /**
   * <p>Filter on transforms last modified after this date.</p>
   */
  LastModifiedAfter?: Date;

  /**
   * <p>Filters on datasets with a specific schema. The <code>Map<Column, Type></code>
   *       object is an array of key-value pairs representing the schema this transform accepts, where
   *         <code>Column</code> is the name of a column, and <code>Type</code> is the type of the data
   *       such as an integer or string. Has an upper bound of 100 columns.</p>
   */
  Schema?: SchemaColumn[];
}

export namespace TransformFilterCriteria {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TransformFilterCriteria): any => ({
    ...obj,
  });
}

/**
 * <p>The sorting criteria that are associated with the machine learning transform.</p>
 */
export interface TransformSortCriteria {
  /**
   * <p>The column to be used in the sorting criteria that are associated with the machine
   *       learning transform.</p>
   */
  Column: TransformSortColumnType | string | undefined;

  /**
   * <p>The sort direction to be used in the sorting criteria that are associated with the machine
   *       learning transform.</p>
   */
  SortDirection: SortDirectionType | string | undefined;
}

export namespace TransformSortCriteria {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TransformSortCriteria): any => ({
    ...obj,
  });
}

/**
 * <p>A list of errors that can occur when registering partition indexes for an existing table.</p>
 *
 * 	        <p>These errors give the details about why an index registration failed and provide a limited number of partitions in the response, so that you can fix the partitions at fault and try registering the index again. The most common set of errors that can occur are categorized as follows:</p>
 *
 * 	        <ul>
 *             <li>
 *                <p>EncryptedPartitionError: The partitions are encrypted.</p>
 *             </li>
 *             <li>
 *                <p>InvalidPartitionTypeDataError: The partition value doesn't match the data type for that partition column.</p>
 *             </li>
 *             <li>
 *                <p>MissingPartitionValueError: The partitions are encrypted.</p>
 *             </li>
 *             <li>
 *                <p>UnsupportedPartitionCharacterError: Characters inside the partition value are not supported. For example: U+0000 , U+0001, U+0002.</p>
 *             </li>
 *             <li>
 *                <p>InternalError: Any error which does not belong to other error codes.</p>
 *             </li>
 *          </ul>
 */
export interface BackfillError {
  /**
   * <p>The error code for an error that occurred when registering partition indexes for an existing table.</p>
   */
  Code?: BackfillErrorCode | string;

  /**
   * <p>A list of a limited number of partitions in the response.</p>
   */
  Partitions?: PartitionValueList[];
}

export namespace BackfillError {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BackfillError): any => ({
    ...obj,
  });
}

/**
 * <p>Defines a non-overlapping region of a table's partitions, allowing
 *       multiple requests to be run in parallel.</p>
 */
export interface Segment {
  /**
   * <p>The zero-based index number of the segment. For example, if the total number of segments
   *       is 4, <code>SegmentNumber</code> values range from 0 through 3.</p>
   */
  SegmentNumber: number | undefined;

  /**
   * <p>The total number of segments.</p>
   */
  TotalSegments: number | undefined;
}

export namespace Segment {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Segment): any => ({
    ...obj,
  });
}

/**
 * <p>A structure containing the schema version information.</p>
 */
export interface SchemaVersionNumber {
  /**
   * <p>The latest version available for the schema.</p>
   */
  LatestVersion?: boolean;

  /**
   * <p>The version number of the schema.</p>
   */
  VersionNumber?: number;
}

export namespace SchemaVersionNumber {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SchemaVersionNumber): any => ({
    ...obj,
  });
}

export enum PermissionType {
  CELL_FILTER_PERMISSION = "CELL_FILTER_PERMISSION",
  COLUMN_PERMISSION = "COLUMN_PERMISSION",
}

export class PermissionTypeMismatchException extends __BaseException {
  readonly name: "PermissionTypeMismatchException" = "PermissionTypeMismatchException";
  readonly $fault: "client" = "client";
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

export interface ColumnRowFilter {
  ColumnName?: string;
  RowFilterExpression?: string;
}

export namespace ColumnRowFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ColumnRowFilter): any => ({
    ...obj,
  });
}

/**
 * <p>A structure containing a key value pair for metadata.</p>
 */
export interface MetadataKeyValuePair {
  /**
   * <p>A metadata key.</p>
   */
  MetadataKey?: string;

  /**
   * <p>A metadata key’s corresponding value.</p>
   */
  MetadataValue?: string;
}

export namespace MetadataKeyValuePair {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MetadataKeyValuePair): any => ({
    ...obj,
  });
}

/**
 * <p>Too many jobs are being run concurrently.</p>
 */
export class ConcurrentRunsExceededException extends __BaseException {
  readonly name: "ConcurrentRunsExceededException" = "ConcurrentRunsExceededException";
  readonly $fault: "client" = "client";
  /**
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
 * <p>The workflow is in an invalid state to perform a requested operation.</p>
 */
export class IllegalWorkflowStateException extends __BaseException {
  readonly name: "IllegalWorkflowStateException" = "IllegalWorkflowStateException";
  readonly $fault: "client" = "client";
  /**
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
 * <p>Defines a property predicate.</p>
 */
export interface PropertyPredicate {
  /**
   * <p>The key of the property.</p>
   */
  Key?: string;

  /**
   * <p>The value of the property.</p>
   */
  Value?: string;

  /**
   * <p>The comparator used to compare this property to others.</p>
   */
  Comparator?: Comparator | string;
}

export namespace PropertyPredicate {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PropertyPredicate): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies a field to sort by and a sort order.</p>
 */
export interface SortCriterion {
  /**
   * <p>The name of the field on which to sort.</p>
   */
  FieldName?: string;

  /**
   * <p>An ascending or descending sort.</p>
   */
  Sort?: Sort | string;
}

export namespace SortCriterion {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SortCriterion): any => ({
    ...obj,
  });
}

export class IllegalBlueprintStateException extends __BaseException {
  readonly name: "IllegalBlueprintStateException" = "IllegalBlueprintStateException";
  readonly $fault: "client" = "client";
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
 * <p>There is no applicable schedule.</p>
 */
export class NoScheduleException extends __BaseException {
  readonly name: "NoScheduleException" = "NoScheduleException";
  readonly $fault: "client" = "client";
  /**
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
 * <p>The specified scheduler is already running.</p>
 */
export class SchedulerRunningException extends __BaseException {
  readonly name: "SchedulerRunningException" = "SchedulerRunningException";
  readonly $fault: "client" = "client";
  /**
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

export interface StartCrawlerScheduleRequest {
  /**
   * <p>Name of the crawler to schedule.</p>
   */
  CrawlerName: string | undefined;
}

export namespace StartCrawlerScheduleRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartCrawlerScheduleRequest): any => ({
    ...obj,
  });
}

export interface StartCrawlerScheduleResponse {}

export namespace StartCrawlerScheduleResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartCrawlerScheduleResponse): any => ({
    ...obj,
  });
}

export interface StartExportLabelsTaskRunRequest {
  /**
   * <p>The unique identifier of the machine learning transform.</p>
   */
  TransformId: string | undefined;

  /**
   * <p>The Amazon S3 path where you export the labels.</p>
   */
  OutputS3Path: string | undefined;
}

export namespace StartExportLabelsTaskRunRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartExportLabelsTaskRunRequest): any => ({
    ...obj,
  });
}

export interface StartExportLabelsTaskRunResponse {
  /**
   * <p>The unique identifier for the task run.</p>
   */
  TaskRunId?: string;
}

export namespace StartExportLabelsTaskRunResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartExportLabelsTaskRunResponse): any => ({
    ...obj,
  });
}

export interface StartImportLabelsTaskRunRequest {
  /**
   * <p>The unique identifier of the machine learning transform.</p>
   */
  TransformId: string | undefined;

  /**
   * <p>The Amazon Simple Storage Service (Amazon S3) path from where you import the
   *       labels.</p>
   */
  InputS3Path: string | undefined;

  /**
   * <p>Indicates whether to overwrite your existing labels.</p>
   */
  ReplaceAllLabels?: boolean;
}

export namespace StartImportLabelsTaskRunRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartImportLabelsTaskRunRequest): any => ({
    ...obj,
  });
}

export interface StartImportLabelsTaskRunResponse {
  /**
   * <p>The unique identifier for the task run.</p>
   */
  TaskRunId?: string;
}

export namespace StartImportLabelsTaskRunResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartImportLabelsTaskRunResponse): any => ({
    ...obj,
  });
}

export interface StartJobRunRequest {
  /**
   * <p>The name of the job definition to use.</p>
   */
  JobName: string | undefined;

  /**
   * <p>The ID of a previous <code>JobRun</code> to retry.</p>
   */
  JobRunId?: string;

  /**
   * <p>The job arguments specifically for this run. For this job run, they replace the default arguments set in the job definition itself.</p>
   *          <p>You can specify arguments here that your own job-execution script
   *       consumes, as well as arguments that Glue itself consumes.</p>
   *          <p>For information about how to specify and consume your own Job arguments, see the <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-python-calling.html">Calling Glue APIs in Python</a> topic in the developer guide.</p>
   *          <p>For information about the key-value pairs that Glue consumes to set up your job, see the <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-etl-glue-arguments.html">Special Parameters Used by Glue</a> topic in the developer guide.</p>
   */
  Arguments?: Record<string, string>;

  /**
   * @deprecated
   *
   * <p>This field is deprecated. Use <code>MaxCapacity</code> instead.</p>
   *
   *          <p>The number of Glue data processing units (DPUs) to allocate to this JobRun.
   *       From 2 to 100 DPUs can be allocated; the default is 10. A DPU is a relative measure
   *       of processing power that consists of 4 vCPUs of compute capacity and 16 GB of memory.
   *       For more information, see the <a href="https://aws.amazon.com/glue/pricing/">Glue
   *         pricing page</a>.</p>
   */
  AllocatedCapacity?: number;

  /**
   * <p>The <code>JobRun</code> timeout in minutes. This is the maximum time that a job run can
   *       consume resources before it is terminated and enters <code>TIMEOUT</code> status. The default
   *       is 2,880 minutes (48 hours). This overrides the timeout value set in the parent job.</p>
   */
  Timeout?: number;

  /**
   * <p>The number of Glue data processing units (DPUs) that can be allocated when this job runs. A DPU is a relative measure
   *       of processing power that consists of 4 vCPUs of compute capacity and 16 GB of memory.
   *       For more information, see the <a href="https://aws.amazon.com/glue/pricing/">Glue
   *         pricing page</a>.</p>
   *
   *          <p>Do not set <code>Max Capacity</code> if using <code>WorkerType</code> and <code>NumberOfWorkers</code>.</p>
   *
   *          <p>The value that can be allocated for <code>MaxCapacity</code> depends on whether you are
   *       running a Python shell job, or an Apache Spark ETL job:</p>
   *          <ul>
   *             <li>
   *                <p>When you specify a Python shell job (<code>JobCommand.Name</code>="pythonshell"), you can
   *         allocate either 0.0625 or 1 DPU. The default is 0.0625 DPU.</p>
   *             </li>
   *             <li>
   *                <p>When you specify an Apache Spark ETL job (<code>JobCommand.Name</code>="glueetl"), you can allocate from 2 to 100 DPUs. The default is 10 DPUs. This job type cannot have a fractional DPU allocation.</p>
   *             </li>
   *          </ul>
   */
  MaxCapacity?: number;

  /**
   * <p>The name of the <code>SecurityConfiguration</code> structure to be used with this job
   *       run.</p>
   */
  SecurityConfiguration?: string;

  /**
   * <p>Specifies configuration properties of a job run notification.</p>
   */
  NotificationProperty?: NotificationProperty;

  /**
   * <p>The type of predefined worker that is allocated when a job runs. Accepts a value of Standard, G.1X, or G.2X.</p>
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
   * <p>The number of workers of a defined <code>workerType</code> that are allocated when a job runs.</p>
   *
   *          <p>The maximum number of workers you can define are 299 for <code>G.1X</code>, and 149 for <code>G.2X</code>. </p>
   */
  NumberOfWorkers?: number;
}

export namespace StartJobRunRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartJobRunRequest): any => ({
    ...obj,
  });
}

export interface StartJobRunResponse {
  /**
   * <p>The ID assigned to this job run.</p>
   */
  JobRunId?: string;
}

export namespace StartJobRunResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartJobRunResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The machine learning transform is not ready to run.</p>
 */
export class MLTransformNotReadyException extends __BaseException {
  readonly name: "MLTransformNotReadyException" = "MLTransformNotReadyException";
  readonly $fault: "client" = "client";
  /**
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

export interface StartMLEvaluationTaskRunRequest {
  /**
   * <p>The unique identifier of the machine learning transform.</p>
   */
  TransformId: string | undefined;
}

export namespace StartMLEvaluationTaskRunRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartMLEvaluationTaskRunRequest): any => ({
    ...obj,
  });
}

export interface StartMLEvaluationTaskRunResponse {
  /**
   * <p>The unique identifier associated with this run.</p>
   */
  TaskRunId?: string;
}

export namespace StartMLEvaluationTaskRunResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartMLEvaluationTaskRunResponse): any => ({
    ...obj,
  });
}

export interface StartMLLabelingSetGenerationTaskRunRequest {
  /**
   * <p>The unique identifier of the machine learning transform.</p>
   */
  TransformId: string | undefined;

  /**
   * <p>The Amazon Simple Storage Service (Amazon S3) path where you generate the labeling
   *       set.</p>
   */
  OutputS3Path: string | undefined;
}

export namespace StartMLLabelingSetGenerationTaskRunRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartMLLabelingSetGenerationTaskRunRequest): any => ({
    ...obj,
  });
}

export interface StartMLLabelingSetGenerationTaskRunResponse {
  /**
   * <p>The unique run identifier that is associated with this task run.</p>
   */
  TaskRunId?: string;
}

export namespace StartMLLabelingSetGenerationTaskRunResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartMLLabelingSetGenerationTaskRunResponse): any => ({
    ...obj,
  });
}

export interface StartTriggerRequest {
  /**
   * <p>The name of the trigger to start.</p>
   */
  Name: string | undefined;
}

export namespace StartTriggerRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartTriggerRequest): any => ({
    ...obj,
  });
}

export interface StartTriggerResponse {
  /**
   * <p>The name of the trigger that was started.</p>
   */
  Name?: string;
}

export namespace StartTriggerResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartTriggerResponse): any => ({
    ...obj,
  });
}

export interface StartWorkflowRunRequest {
  /**
   * <p>The name of the workflow to start.</p>
   */
  Name: string | undefined;

  /**
   * <p>The workflow run properties for the new workflow run.</p>
   */
  RunProperties?: Record<string, string>;
}

export namespace StartWorkflowRunRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartWorkflowRunRequest): any => ({
    ...obj,
  });
}

export interface StartWorkflowRunResponse {
  /**
   * <p>An Id for the new run.</p>
   */
  RunId?: string;
}

export namespace StartWorkflowRunResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartWorkflowRunResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The specified crawler is not running.</p>
 */
export class CrawlerNotRunningException extends __BaseException {
  readonly name: "CrawlerNotRunningException" = "CrawlerNotRunningException";
  readonly $fault: "client" = "client";
  /**
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
 * <p>The specified crawler is stopping.</p>
 */
export class CrawlerStoppingException extends __BaseException {
  readonly name: "CrawlerStoppingException" = "CrawlerStoppingException";
  readonly $fault: "client" = "client";
  /**
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

export interface StopCrawlerRequest {
  /**
   * <p>Name of the crawler to stop.</p>
   */
  Name: string | undefined;
}

export namespace StopCrawlerRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopCrawlerRequest): any => ({
    ...obj,
  });
}

export interface StopCrawlerResponse {}

export namespace StopCrawlerResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopCrawlerResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The specified scheduler is not running.</p>
 */
export class SchedulerNotRunningException extends __BaseException {
  readonly name: "SchedulerNotRunningException" = "SchedulerNotRunningException";
  readonly $fault: "client" = "client";
  /**
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

export interface StopCrawlerScheduleRequest {
  /**
   * <p>Name of the crawler whose schedule state to set.</p>
   */
  CrawlerName: string | undefined;
}

export namespace StopCrawlerScheduleRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopCrawlerScheduleRequest): any => ({
    ...obj,
  });
}

export interface StopCrawlerScheduleResponse {}

export namespace StopCrawlerScheduleResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopCrawlerScheduleResponse): any => ({
    ...obj,
  });
}

export interface StopSessionRequest {
  /**
   * <p>The ID of the session to be stopped.</p>
   */
  Id: string | undefined;

  /**
   * <p>The origin of the request.</p>
   */
  RequestOrigin?: string;
}

export namespace StopSessionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopSessionRequest): any => ({
    ...obj,
  });
}

export interface StopSessionResponse {
  /**
   * <p>Returns the Id of the stopped session.</p>
   */
  Id?: string;
}

export namespace StopSessionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopSessionResponse): any => ({
    ...obj,
  });
}

export interface StopTriggerRequest {
  /**
   * <p>The name of the trigger to stop.</p>
   */
  Name: string | undefined;
}

export namespace StopTriggerRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopTriggerRequest): any => ({
    ...obj,
  });
}

export interface StopTriggerResponse {
  /**
   * <p>The name of the trigger that was stopped.</p>
   */
  Name?: string;
}

export namespace StopTriggerResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopTriggerResponse): any => ({
    ...obj,
  });
}

export interface StopWorkflowRunRequest {
  /**
   * <p>The name of the workflow to stop.</p>
   */
  Name: string | undefined;

  /**
   * <p>The ID of the workflow run to stop.</p>
   */
  RunId: string | undefined;
}

export namespace StopWorkflowRunRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopWorkflowRunRequest): any => ({
    ...obj,
  });
}

export interface StopWorkflowRunResponse {}

export namespace StopWorkflowRunResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopWorkflowRunResponse): any => ({
    ...obj,
  });
}

export interface TagResourceRequest {
  /**
   * <p>The ARN of the Glue resource to which to add the tags. For more
   *       information about Glue resource ARNs, see the <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-common.html#aws-glue-api-regex-aws-glue-arn-id">Glue ARN string pattern</a>.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>Tags to add to this resource.</p>
   */
  TagsToAdd: Record<string, string> | undefined;
}

export namespace TagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
}

export interface TagResourceResponse {}

export namespace TagResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceResponse): any => ({
    ...obj,
  });
}

export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource from which to remove the tags.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>Tags to remove from this resource.</p>
   */
  TagsToRemove: string[] | undefined;
}

export namespace UntagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
}

export interface UntagResourceResponse {}

export namespace UntagResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceResponse): any => ({
    ...obj,
  });
}

export interface UpdateBlueprintRequest {
  /**
   * <p>The name of the blueprint.</p>
   */
  Name: string | undefined;

  /**
   * <p>A description of the blueprint.</p>
   */
  Description?: string;

  /**
   * <p>Specifies a path in Amazon S3 where the blueprint is published.</p>
   */
  BlueprintLocation: string | undefined;
}

export namespace UpdateBlueprintRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateBlueprintRequest): any => ({
    ...obj,
  });
}

export interface UpdateBlueprintResponse {
  /**
   * <p>Returns the name of the blueprint that was updated.</p>
   */
  Name?: string;
}

export namespace UpdateBlueprintResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateBlueprintResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies a custom CSV classifier to be updated.</p>
 */
export interface UpdateCsvClassifierRequest {
  /**
   * <p>The name of the classifier.</p>
   */
  Name: string | undefined;

  /**
   * <p>A custom symbol to denote what separates each column entry in the row.</p>
   */
  Delimiter?: string;

  /**
   * <p>A custom symbol to denote what combines content into a single column value. It must be
   *       different from the column delimiter.</p>
   */
  QuoteSymbol?: string;

  /**
   * <p>Indicates whether the CSV file contains a header.</p>
   */
  ContainsHeader?: CsvHeaderOption | string;

  /**
   * <p>A list of strings representing column names.</p>
   */
  Header?: string[];

  /**
   * <p>Specifies not to trim values before identifying the type of column values. The default value is true.</p>
   */
  DisableValueTrimming?: boolean;

  /**
   * <p>Enables the processing of files that contain only one column.</p>
   */
  AllowSingleColumn?: boolean;
}

export namespace UpdateCsvClassifierRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateCsvClassifierRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies a grok classifier to update when passed to
 *       <code>UpdateClassifier</code>.</p>
 */
export interface UpdateGrokClassifierRequest {
  /**
   * <p>The name of the <code>GrokClassifier</code>.</p>
   */
  Name: string | undefined;

  /**
   * <p>An identifier of the data format that the classifier matches, such as Twitter, JSON, Omniture logs,
   *       Amazon CloudWatch Logs, and so on.</p>
   */
  Classification?: string;

  /**
   * <p>The grok pattern used by this classifier.</p>
   */
  GrokPattern?: string;

  /**
   * <p>Optional custom grok patterns used by this classifier.</p>
   */
  CustomPatterns?: string;
}

export namespace UpdateGrokClassifierRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateGrokClassifierRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies a JSON classifier to be updated.</p>
 */
export interface UpdateJsonClassifierRequest {
  /**
   * <p>The name of the classifier.</p>
   */
  Name: string | undefined;

  /**
   * <p>A <code>JsonPath</code> string defining the JSON data for the classifier to classify.
   *       Glue supports a subset of JsonPath, as described in <a href="https://docs.aws.amazon.com/glue/latest/dg/custom-classifier.html#custom-classifier-json">Writing JsonPath Custom Classifiers</a>.</p>
   */
  JsonPath?: string;
}

export namespace UpdateJsonClassifierRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateJsonClassifierRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies an XML classifier to be updated.</p>
 */
export interface UpdateXMLClassifierRequest {
  /**
   * <p>The name of the classifier.</p>
   */
  Name: string | undefined;

  /**
   * <p>An identifier of the data format that the classifier matches.</p>
   */
  Classification?: string;

  /**
   * <p>The XML tag designating the element that contains each record in an XML document being
   *       parsed. This cannot identify a self-closing element (closed by <code>/></code>). An empty
   *       row element that contains only attributes can be parsed as long as it ends with a closing tag
   *       (for example, <code><row item_a="A" item_b="B"></row></code> is okay, but
   *         <code><row item_a="A" item_b="B" /></code> is not).</p>
   */
  RowTag?: string;
}

export namespace UpdateXMLClassifierRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateXMLClassifierRequest): any => ({
    ...obj,
  });
}

export interface UpdateClassifierRequest {
  /**
   * <p>A <code>GrokClassifier</code> object with updated fields.</p>
   */
  GrokClassifier?: UpdateGrokClassifierRequest;

  /**
   * <p>An <code>XMLClassifier</code> object with updated fields.</p>
   */
  XMLClassifier?: UpdateXMLClassifierRequest;

  /**
   * <p>A <code>JsonClassifier</code> object with updated fields.</p>
   */
  JsonClassifier?: UpdateJsonClassifierRequest;

  /**
   * <p>A <code>CsvClassifier</code> object with updated fields.</p>
   */
  CsvClassifier?: UpdateCsvClassifierRequest;
}

export namespace UpdateClassifierRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateClassifierRequest): any => ({
    ...obj,
  });
}

export interface UpdateClassifierResponse {}

export namespace UpdateClassifierResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateClassifierResponse): any => ({
    ...obj,
  });
}

/**
 * <p>There was a version conflict.</p>
 */
export class VersionMismatchException extends __BaseException {
  readonly name: "VersionMismatchException" = "VersionMismatchException";
  readonly $fault: "client" = "client";
  /**
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

export interface UpdateColumnStatisticsForPartitionRequest {
  /**
   * <p>The ID of the Data Catalog where the partitions in question reside.
   *       If none is supplied, the Amazon Web Services account ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * <p>The name of the catalog database where the partitions reside.</p>
   */
  DatabaseName: string | undefined;

  /**
   * <p>The name of the partitions' table.</p>
   */
  TableName: string | undefined;

  /**
   * <p>A list of partition values identifying the partition.</p>
   */
  PartitionValues: string[] | undefined;

  /**
   * <p>A list of the column statistics.</p>
   */
  ColumnStatisticsList: ColumnStatistics[] | undefined;
}

export namespace UpdateColumnStatisticsForPartitionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateColumnStatisticsForPartitionRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Encapsulates a <code>ColumnStatistics</code> object that failed and the reason for failure.</p>
 */
export interface ColumnStatisticsError {
  /**
   * <p>The <code>ColumnStatistics</code> of the column.</p>
   */
  ColumnStatistics?: ColumnStatistics;

  /**
   * <p>An error message with the reason for the failure of an operation.</p>
   */
  Error?: ErrorDetail;
}

export namespace ColumnStatisticsError {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ColumnStatisticsError): any => ({
    ...obj,
  });
}

export interface UpdateColumnStatisticsForPartitionResponse {
  /**
   * <p>Error occurred during updating column statistics data.</p>
   */
  Errors?: ColumnStatisticsError[];
}

export namespace UpdateColumnStatisticsForPartitionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateColumnStatisticsForPartitionResponse): any => ({
    ...obj,
  });
}

export interface UpdateColumnStatisticsForTableRequest {
  /**
   * <p>The ID of the Data Catalog where the partitions in question reside.
   *       If none is supplied, the Amazon Web Services account ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * <p>The name of the catalog database where the partitions reside.</p>
   */
  DatabaseName: string | undefined;

  /**
   * <p>The name of the partitions' table.</p>
   */
  TableName: string | undefined;

  /**
   * <p>A list of the column statistics.</p>
   */
  ColumnStatisticsList: ColumnStatistics[] | undefined;
}

export namespace UpdateColumnStatisticsForTableRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateColumnStatisticsForTableRequest): any => ({
    ...obj,
  });
}

export interface UpdateColumnStatisticsForTableResponse {
  /**
   * <p>List of ColumnStatisticsErrors.</p>
   */
  Errors?: ColumnStatisticsError[];
}

export namespace UpdateColumnStatisticsForTableResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateColumnStatisticsForTableResponse): any => ({
    ...obj,
  });
}

export interface UpdateConnectionRequest {
  /**
   * <p>The ID of the Data Catalog in which the connection resides. If none is provided, the Amazon Web Services
   *       account ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * <p>The name of the connection definition to update.</p>
   */
  Name: string | undefined;

  /**
   * <p>A <code>ConnectionInput</code> object that redefines the connection
   *       in question.</p>
   */
  ConnectionInput: ConnectionInput | undefined;
}

export namespace UpdateConnectionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateConnectionRequest): any => ({
    ...obj,
  });
}

export interface UpdateConnectionResponse {}

export namespace UpdateConnectionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateConnectionResponse): any => ({
    ...obj,
  });
}

export interface UpdateCrawlerRequest {
  /**
   * <p>Name of the new crawler.</p>
   */
  Name: string | undefined;

  /**
   * <p>The IAM role or Amazon Resource Name (ARN) of an IAM role that is used by the new crawler
   *       to access customer resources.</p>
   */
  Role?: string;

  /**
   * <p>The Glue database where results are stored, such as:
   *         <code>arn:aws:daylight:us-east-1::database/sometable/*</code>.</p>
   */
  DatabaseName?: string;

  /**
   * <p>A description of the new crawler.</p>
   */
  Description?: string;

  /**
   * <p>A list of targets to crawl.</p>
   */
  Targets?: CrawlerTargets;

  /**
   * <p>A <code>cron</code> expression used to specify the schedule (see <a href="https://docs.aws.amazon.com/glue/latest/dg/monitor-data-warehouse-schedule.html">Time-Based Schedules for Jobs and Crawlers</a>. For example, to run
   *       something every day at 12:15 UTC, you would specify:
   *       <code>cron(15 12 * * ? *)</code>.</p>
   */
  Schedule?: string;

  /**
   * <p>A list of custom classifiers that the user
   *       has registered. By default, all built-in classifiers are included in a crawl,
   *       but these custom classifiers always override the default classifiers
   *       for a given classification.</p>
   */
  Classifiers?: string[];

  /**
   * <p>The table prefix used for catalog tables that are created.</p>
   */
  TablePrefix?: string;

  /**
   * <p>The policy for the crawler's update and deletion behavior.</p>
   */
  SchemaChangePolicy?: SchemaChangePolicy;

  /**
   * <p>A policy that specifies whether to crawl the entire dataset again, or to crawl only folders that were added since the last crawler run.</p>
   */
  RecrawlPolicy?: RecrawlPolicy;

  /**
   * <p>Specifies data lineage configuration settings for the crawler.</p>
   */
  LineageConfiguration?: LineageConfiguration;

  /**
   * <p>Specifies AWS Lake Formation configuration settings for the crawler.</p>
   */
  LakeFormationConfiguration?: LakeFormationConfiguration;

  /**
   * <p>Crawler configuration information. This versioned JSON string allows users
   *         to specify aspects of a crawler's behavior.
   *         For more information, see <a href="https://docs.aws.amazon.com/glue/latest/dg/crawler-configuration.html">Configuring a Crawler</a>.</p>
   */
  Configuration?: string;

  /**
   * <p>The name of the <code>SecurityConfiguration</code> structure to be used by this
   *       crawler.</p>
   */
  CrawlerSecurityConfiguration?: string;
}

export namespace UpdateCrawlerRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateCrawlerRequest): any => ({
    ...obj,
  });
}

export interface UpdateCrawlerResponse {}

export namespace UpdateCrawlerResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateCrawlerResponse): any => ({
    ...obj,
  });
}

export interface UpdateCrawlerScheduleRequest {
  /**
   * <p>The name of the crawler whose schedule to update.</p>
   */
  CrawlerName: string | undefined;

  /**
   * <p>The updated <code>cron</code> expression used to specify the schedule (see <a href="https://docs.aws.amazon.com/glue/latest/dg/monitor-data-warehouse-schedule.html">Time-Based Schedules for Jobs and Crawlers</a>. For example, to run
   *       something every day at 12:15 UTC, you would specify:
   *       <code>cron(15 12 * * ? *)</code>.</p>
   */
  Schedule?: string;
}

export namespace UpdateCrawlerScheduleRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateCrawlerScheduleRequest): any => ({
    ...obj,
  });
}

export interface UpdateCrawlerScheduleResponse {}

export namespace UpdateCrawlerScheduleResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateCrawlerScheduleResponse): any => ({
    ...obj,
  });
}

export interface UpdateDatabaseRequest {
  /**
   * <p>The ID of the Data Catalog in which the metadata database resides. If none is provided,
   *       the Amazon Web Services account ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * <p>The name of the database to update in the catalog. For Hive
   *       compatibility, this is folded to lowercase.</p>
   */
  Name: string | undefined;

  /**
   * <p>A <code>DatabaseInput</code> object specifying the new definition
   *       of the metadata database in the catalog.</p>
   */
  DatabaseInput: DatabaseInput | undefined;
}

export namespace UpdateDatabaseRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateDatabaseRequest): any => ({
    ...obj,
  });
}

export interface UpdateDatabaseResponse {}

export namespace UpdateDatabaseResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateDatabaseResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Custom libraries to be loaded into a development endpoint.</p>
 */
export interface DevEndpointCustomLibraries {
  /**
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
   * <p>The path to one or more Java <code>.jar</code> files in an S3 bucket that should be loaded
   *       in your <code>DevEndpoint</code>.</p>
   *          <note>
   *             <p>You can only use pure Java/Scala libraries with a <code>DevEndpoint</code>.</p>
   *          </note>
   */
  ExtraJarsS3Path?: string;
}

export namespace DevEndpointCustomLibraries {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DevEndpointCustomLibraries): any => ({
    ...obj,
  });
}

export interface UpdateDevEndpointRequest {
  /**
   * <p>The name of the <code>DevEndpoint</code> to be updated.</p>
   */
  EndpointName: string | undefined;

  /**
   * <p>The public key for the <code>DevEndpoint</code> to use.</p>
   */
  PublicKey?: string;

  /**
   * <p>The list of public keys for the <code>DevEndpoint</code> to use.</p>
   */
  AddPublicKeys?: string[];

  /**
   * <p>The list of public keys to be deleted from the <code>DevEndpoint</code>.</p>
   */
  DeletePublicKeys?: string[];

  /**
   * <p>Custom Python or Java libraries to be loaded in the <code>DevEndpoint</code>.</p>
   */
  CustomLibraries?: DevEndpointCustomLibraries;

  /**
   * <p>
   *             <code>True</code> if the list of custom libraries to be loaded in the development endpoint
   *       needs to be updated, or <code>False</code> if otherwise.</p>
   */
  UpdateEtlLibraries?: boolean;

  /**
   * <p>The list of argument keys to be deleted from the map of arguments used to configure the
   *         <code>DevEndpoint</code>.</p>
   */
  DeleteArguments?: string[];

  /**
   * <p>The map of arguments to add the map of arguments used to configure the
   *         <code>DevEndpoint</code>.</p>
   *
   * 	        <p>Valid arguments are:</p>
   * 	        <ul>
   *             <li>
   *                <p>
   *                   <code>"--enable-glue-datacatalog": ""</code>
   *                </p>
   *             </li>
   *          </ul>
   *
   *          <p>You can specify a version of Python support for development endpoints by using the <code>Arguments</code> parameter in the <code>CreateDevEndpoint</code> or <code>UpdateDevEndpoint</code> APIs. If no arguments are provided, the version defaults to Python 2.</p>
   */
  AddArguments?: Record<string, string>;
}

export namespace UpdateDevEndpointRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateDevEndpointRequest): any => ({
    ...obj,
  });
}

export interface UpdateDevEndpointResponse {}

export namespace UpdateDevEndpointResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateDevEndpointResponse): any => ({
    ...obj,
  });
}

export interface UpdateJobResponse {
  /**
   * <p>Returns the name of the updated job definition.</p>
   */
  JobName?: string;
}

export namespace UpdateJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateJobResponse): any => ({
    ...obj,
  });
}

export interface UpdateMLTransformRequest {
  /**
   * <p>A unique identifier that was generated when the transform was created.</p>
   */
  TransformId: string | undefined;

  /**
   * <p>The unique name that you gave the transform when you created it.</p>
   */
  Name?: string;

  /**
   * <p>A description of the transform. The default is an empty string.</p>
   */
  Description?: string;

  /**
   * <p>The configuration parameters that are specific to the transform type (algorithm) used.
   *       Conditionally dependent on the transform type.</p>
   */
  Parameters?: TransformParameters;

  /**
   * <p>The name or Amazon Resource Name (ARN) of the IAM role with the required
   *       permissions.</p>
   */
  Role?: string;

  /**
   * <p>This value determines which version of Glue this machine learning transform is compatible with. Glue 1.0 is recommended for most customers. If the value is not set, the Glue compatibility defaults to Glue 0.9.  For more information, see <a href="https://docs.aws.amazon.com/glue/latest/dg/release-notes.html#release-notes-versions">Glue Versions</a> in the developer guide.</p>
   */
  GlueVersion?: string;

  /**
   * <p>The number of Glue data processing units (DPUs) that are allocated to task runs for this transform. You can allocate from 2 to 100 DPUs; the default is 10. A DPU is a relative measure of
   *       processing power that consists of 4 vCPUs of compute capacity and 16 GB of memory. For more
   *       information, see the <a href="https://aws.amazon.com/glue/pricing/">Glue pricing
   *         page</a>. </p>
   *
   *          <p>When the <code>WorkerType</code> field is set to a value other than <code>Standard</code>, the <code>MaxCapacity</code> field is set automatically and becomes read-only.</p>
   */
  MaxCapacity?: number;

  /**
   * <p>The type of predefined worker that is allocated when this task runs. Accepts a value of Standard, G.1X, or G.2X.</p>
   * 	        <ul>
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
   * <p>The number of workers of a defined <code>workerType</code> that are allocated when this task runs.</p>
   */
  NumberOfWorkers?: number;

  /**
   * <p>The timeout for a task run for this transform in minutes. This is the maximum time that a task run for this transform can consume resources before it is terminated and enters <code>TIMEOUT</code> status. The default is 2,880 minutes (48 hours).</p>
   */
  Timeout?: number;

  /**
   * <p>The maximum number of times to retry a task for this transform after a task run fails.</p>
   */
  MaxRetries?: number;
}

export namespace UpdateMLTransformRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateMLTransformRequest): any => ({
    ...obj,
  });
}

export interface UpdateMLTransformResponse {
  /**
   * <p>The unique identifier for the transform that was updated.</p>
   */
  TransformId?: string;
}

export namespace UpdateMLTransformResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateMLTransformResponse): any => ({
    ...obj,
  });
}

export interface UpdatePartitionRequest {
  /**
   * <p>The ID of the Data Catalog where the partition to be updated resides. If none is provided,
   *       the Amazon Web Services account ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * <p>The name of the catalog database in which the table in question
   *       resides.</p>
   */
  DatabaseName: string | undefined;

  /**
   * <p>The name of the table in which the partition to be updated is located.</p>
   */
  TableName: string | undefined;

  /**
   * <p>List of partition key values that define the partition to update.</p>
   */
  PartitionValueList: string[] | undefined;

  /**
   * <p>The new partition object to update the partition to.</p>
   *
   * 	        <p>The <code>Values</code> property can't be changed. If you want to change the partition key values for a partition, delete and recreate the partition.</p>
   */
  PartitionInput: PartitionInput | undefined;
}

export namespace UpdatePartitionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdatePartitionRequest): any => ({
    ...obj,
  });
}

export interface UpdatePartitionResponse {}

export namespace UpdatePartitionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdatePartitionResponse): any => ({
    ...obj,
  });
}

export interface UpdateRegistryInput {
  /**
   * <p>This is a wrapper structure that may contain the registry name and Amazon Resource Name (ARN).</p>
   */
  RegistryId: RegistryId | undefined;

  /**
   * <p>A description of the registry. If description is not provided, this field will not be updated.</p>
   */
  Description: string | undefined;
}

export namespace UpdateRegistryInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateRegistryInput): any => ({
    ...obj,
  });
}

export interface UpdateRegistryResponse {
  /**
   * <p>The name of the updated registry.</p>
   */
  RegistryName?: string;

  /**
   * <p>The Amazon Resource name (ARN) of the updated registry.</p>
   */
  RegistryArn?: string;
}

export namespace UpdateRegistryResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateRegistryResponse): any => ({
    ...obj,
  });
}

export interface UpdateSchemaInput {
  /**
   * <p>This is a wrapper structure to contain schema identity fields. The structure contains:</p>
   * 	        <ul>
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
   * <p>Version number required for check pointing. One of <code>VersionNumber</code> or <code>Compatibility</code> has to be provided.</p>
   */
  SchemaVersionNumber?: SchemaVersionNumber;

  /**
   * <p>The new compatibility setting for the schema.</p>
   */
  Compatibility?: Compatibility | string;

  /**
   * <p>The new description for the schema.</p>
   */
  Description?: string;
}

export namespace UpdateSchemaInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateSchemaInput): any => ({
    ...obj,
  });
}

export interface UpdateSchemaResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the schema.</p>
   */
  SchemaArn?: string;

  /**
   * <p>The name of the schema.</p>
   */
  SchemaName?: string;

  /**
   * <p>The name of the registry that contains the schema.</p>
   */
  RegistryName?: string;
}

export namespace UpdateSchemaResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateSchemaResponse): any => ({
    ...obj,
  });
}

export interface UpdateTableRequest {
  /**
   * <p>The ID of the Data Catalog where the table resides. If none is provided, the Amazon Web Services account
   *       ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * <p>The name of the catalog database in which the table resides. For Hive
   *       compatibility, this name is entirely lowercase.</p>
   */
  DatabaseName: string | undefined;

  /**
   * <p>An updated <code>TableInput</code> object to define the metadata table
   *       in the catalog.</p>
   */
  TableInput: TableInput | undefined;

  /**
   * <p>By default, <code>UpdateTable</code> always creates an archived version of the table
   *       before updating it. However, if <code>skipArchive</code> is set to true,
   *         <code>UpdateTable</code> does not create the archived version.</p>
   */
  SkipArchive?: boolean;

  /**
   * <p>The transaction ID at which to update the table contents. </p>
   */
  TransactionId?: string;

  VersionId?: string;
}

export namespace UpdateTableRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateTableRequest): any => ({
    ...obj,
  });
}

export interface UpdateTableResponse {}

export namespace UpdateTableResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateTableResponse): any => ({
    ...obj,
  });
}

/**
 * <p>A structure used to provide information used to update a trigger. This object updates the
 *       previous trigger definition by overwriting it completely.</p>
 */
export interface TriggerUpdate {
  /**
   * <p>Reserved for future use.</p>
   */
  Name?: string;

  /**
   * <p>A description of this trigger.</p>
   */
  Description?: string;

  /**
   * <p>A <code>cron</code> expression used to specify the schedule (see <a href="https://docs.aws.amazon.com/glue/latest/dg/monitor-data-warehouse-schedule.html">Time-Based
   *       Schedules for Jobs and Crawlers</a>. For example, to run
   *       something every day at 12:15 UTC, you would specify:
   *       <code>cron(15 12 * * ? *)</code>.</p>
   */
  Schedule?: string;

  /**
   * <p>The actions initiated by this trigger.</p>
   */
  Actions?: Action[];

  /**
   * <p>The predicate of this trigger, which defines when it will fire.</p>
   */
  Predicate?: Predicate;

  /**
   * <p>Batch condition that must be met (specified number of events received or batch time window expired)
   *       before EventBridge event trigger fires.</p>
   */
  EventBatchingCondition?: EventBatchingCondition;
}

export namespace TriggerUpdate {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TriggerUpdate): any => ({
    ...obj,
  });
}

export interface UpdateTriggerRequest {
  /**
   * <p>The name of the trigger to update.</p>
   */
  Name: string | undefined;

  /**
   * <p>The new values with which to update the trigger.</p>
   */
  TriggerUpdate: TriggerUpdate | undefined;
}

export namespace UpdateTriggerRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateTriggerRequest): any => ({
    ...obj,
  });
}

export interface UpdateTriggerResponse {
  /**
   * <p>The resulting trigger definition.</p>
   */
  Trigger?: Trigger;
}

export namespace UpdateTriggerResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateTriggerResponse): any => ({
    ...obj,
  });
}

export interface UpdateUserDefinedFunctionRequest {
  /**
   * <p>The ID of the Data Catalog where the function to be updated is located. If none is
   *       provided, the Amazon Web Services account ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * <p>The name of the catalog database where the function to be updated is
   *       located.</p>
   */
  DatabaseName: string | undefined;

  /**
   * <p>The name of the function.</p>
   */
  FunctionName: string | undefined;

  /**
   * <p>A <code>FunctionInput</code> object that redefines the function in the Data
   *       Catalog.</p>
   */
  FunctionInput: UserDefinedFunctionInput | undefined;
}

export namespace UpdateUserDefinedFunctionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateUserDefinedFunctionRequest): any => ({
    ...obj,
  });
}

export interface UpdateUserDefinedFunctionResponse {}

export namespace UpdateUserDefinedFunctionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateUserDefinedFunctionResponse): any => ({
    ...obj,
  });
}

export interface UpdateWorkflowRequest {
  /**
   * <p>Name of the workflow to be updated.</p>
   */
  Name: string | undefined;

  /**
   * <p>The description of the workflow.</p>
   */
  Description?: string;

  /**
   * <p>A collection of properties to be used as part of each execution of the workflow.</p>
   */
  DefaultRunProperties?: Record<string, string>;

  /**
   * <p>You can use this parameter to prevent unwanted multiple updates to data, to control costs, or in some cases, to prevent exceeding the maximum number of concurrent runs of any of the component jobs. If you leave this parameter blank, there is no limit to the number of concurrent workflow runs.</p>
   */
  MaxConcurrentRuns?: number;
}

export namespace UpdateWorkflowRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateWorkflowRequest): any => ({
    ...obj,
  });
}

export interface UpdateWorkflowResponse {
  /**
   * <p>The name of the workflow which was specified in input.</p>
   */
  Name?: string;
}

export namespace UpdateWorkflowResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateWorkflowResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies the mapping of data property keys.</p>
 */
export interface Mapping {
  /**
   * <p>After the apply mapping, what the name of the column should be. Can be the same as <code>FromPath</code>.</p>
   */
  ToKey?: string;

  /**
   * <p>The table or column to be modified.</p>
   */
  FromPath?: string[];

  /**
   * <p>The type of the data to be modified.</p>
   */
  FromType?: string;

  /**
   * <p>The data type that the data is to be modified to.</p>
   */
  ToType?: string;

  /**
   * <p>If true, then the column is removed.</p>
   */
  Dropped?: boolean;

  /**
   * <p>Only applicable to nested data structures. If you want to change the parent structure, but also one of its children, you can fill out this data strucutre. It is also <code>Mapping</code>, but its <code>FromPath</code> will be the parent's <code>FromPath</code> plus the <code>FromPath</code> from this structure.</p>
   *
   *          <p>For the children part, suppose you have the structure:</p>
   *
   * 	        <p>
   *             <code>{
   *   "FromPath": "OuterStructure",
   *   "ToKey": "OuterStructure",
   *   "ToType": "Struct",
   *   "Dropped": false,
   *   "Chidlren": [{
   *        "FromPath": "inner",
   *        "ToKey": "inner",
   *        "ToType": "Double",
   *       "Dropped": false,
   *   }]
   * }</code>
   *          </p>
   *
   *          <p>You can specify a <code>Mapping</code> that looks like:</p>
   *
   * 	        <p>
   *             <code>{
   *   "FromPath": "OuterStructure",
   *   "ToKey": "OuterStructure",
   *   "ToType": "Struct",
   *   "Dropped": false,
   *   "Chidlren": [{
   *        "FromPath": "inner",
   *        "ToKey": "inner",
   *        "ToType": "Double",
   *       "Dropped": false,
   *   }]
   * }</code>
   *          </p>
   */
  Children?: Mapping[];
}

export namespace Mapping {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Mapping): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies a transform that maps data property keys in the data source to data property keys in the data target. You can rename keys, modify the data types for keys, and choose which keys to drop from the dataset.</p>
 */
export interface ApplyMapping {
  /**
   * <p>The name of the transform node.</p>
   */
  Name: string | undefined;

  /**
   * <p>The data inputs identified by their node names.</p>
   */
  Inputs: string[] | undefined;

  /**
   * <p>Specifies the mapping of data property keys in the data source to data property keys in the data target.</p>
   */
  Mapping: Mapping[] | undefined;
}

export namespace ApplyMapping {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ApplyMapping): any => ({
    ...obj,
  });
}

/**
 * <p>
 *             <code>CodeGenConfigurationNode</code> enumerates all valid Node types. One and only one of its member variables can be populated.</p>
 */
export interface CodeGenConfigurationNode {
  /**
   * <p>Specifies a connector to an Amazon Athena data source.</p>
   */
  AthenaConnectorSource?: AthenaConnectorSource;

  /**
   * <p>Specifies a connector to a JDBC data source.</p>
   */
  JDBCConnectorSource?: JDBCConnectorSource;

  /**
   * <p>Specifies a connector to an Apache Spark data source.</p>
   */
  SparkConnectorSource?: SparkConnectorSource;

  /**
   * <p>Specifies a data store in the Glue Data Catalog.</p>
   */
  CatalogSource?: CatalogSource;

  /**
   * <p>Specifies an Amazon Redshift data store.</p>
   */
  RedshiftSource?: RedshiftSource;

  /**
   * <p>Specifies an Amazon S3 data store in the Glue Data Catalog.</p>
   */
  S3CatalogSource?: S3CatalogSource;

  /**
   * <p>Specifies a command-separated value (CSV) data store stored in Amazon S3.</p>
   */
  S3CsvSource?: S3CsvSource;

  /**
   * <p>Specifies a JSON data store stored in Amazon S3.</p>
   */
  S3JsonSource?: S3JsonSource;

  /**
   * <p>Specifies an Apache Parquet data store stored in Amazon S3.</p>
   */
  S3ParquetSource?: S3ParquetSource;

  /**
   * <p>Specifies a Relational database data source in the Glue Data Catalog.</p>
   */
  RelationalCatalogSource?: RelationalCatalogSource;

  /**
   * <p>Specifies a DynamoDB data source in the Glue Data Catalog.</p>
   */
  DynamoDBCatalogSource?: DynamoDBCatalogSource;

  /**
   * <p>Specifies a data target that writes to Amazon S3 in Apache Parquet columnar storage.</p>
   */
  JDBCConnectorTarget?: JDBCConnectorTarget;

  /**
   * <p>Specifies a target that uses an Apache Spark connector.</p>
   */
  SparkConnectorTarget?: SparkConnectorTarget;

  /**
   * <p>Specifies a target that uses a Glue Data Catalog table.</p>
   */
  CatalogTarget?: BasicCatalogTarget;

  /**
   * <p>Specifies a target that uses Amazon Redshift.</p>
   */
  RedshiftTarget?: RedshiftTarget;

  /**
   * <p>Specifies a data target that writes to Amazon S3 using the Glue Data Catalog.</p>
   */
  S3CatalogTarget?: S3CatalogTarget;

  /**
   * <p>Specifies a data target that writes to Amazon S3 in Apache Parquet columnar storage.</p>
   */
  S3GlueParquetTarget?: S3GlueParquetTarget;

  /**
   * <p>Specifies a data target that writes to Amazon S3.</p>
   */
  S3DirectTarget?: S3DirectTarget;

  /**
   * <p>Specifies a transform that maps data property keys in the data source to data property keys in the data target. You can rename keys, modify the data types for keys, and choose which keys to drop from the dataset.</p>
   */
  ApplyMapping?: ApplyMapping;

  /**
   * <p>Specifies a transform that chooses the data property keys that you want to keep.</p>
   */
  SelectFields?: SelectFields;

  /**
   * <p>Specifies a transform that chooses the data property keys that you want to drop.</p>
   */
  DropFields?: DropFields;

  /**
   * <p>Specifies a transform that renames a single data property key.</p>
   */
  RenameField?: RenameField;

  /**
   * <p>Specifies a transform that writes samples of the data to an Amazon S3 bucket.</p>
   */
  Spigot?: Spigot;

  /**
   * <p>Specifies a transform that joins two datasets into one dataset using a comparison phrase on the specified data property keys. You can use inner, outer, left, right, left semi, and left anti joins.</p>
   */
  Join?: Join;

  /**
   * <p>Specifies a transform that splits data property keys into two <code>DynamicFrames</code>. The output is a collection of <code>DynamicFrames</code>: one with selected data property keys, and one with the remaining data property keys.</p>
   */
  SplitFields?: SplitFields;

  /**
   * <p>Specifies a transform that chooses one <code>DynamicFrame</code> from a collection of <code>DynamicFrames</code>. The output is the selected <code>DynamicFrame</code>
   *          </p>
   */
  SelectFromCollection?: SelectFromCollection;

  /**
   * <p>Specifies a transform that locates records in the dataset that have missing values and adds a new field with a value determined by imputation. The input data set is used to train the machine learning model that determines what the missing value should be.</p>
   */
  FillMissingValues?: FillMissingValues;

  /**
   * <p>Specifies a transform that splits a dataset into two, based on a filter condition.</p>
   */
  Filter?: Filter;

  /**
   * <p>Specifies a transform that uses custom code you provide to perform the data transformation. The output is a collection of DynamicFrames.</p>
   */
  CustomCode?: CustomCode;

  /**
   * <p>Specifies a transform where you enter a SQL query using Spark SQL syntax to transform the data. The output is a single <code>DynamicFrame</code>.</p>
   */
  SparkSQL?: SparkSQL;

  /**
   * <p>Specifies a direct Amazon Kinesis data source.</p>
   */
  DirectKinesisSource?: DirectKinesisSource;

  /**
   * <p>Specifies an Apache Kafka data store.</p>
   */
  DirectKafkaSource?: DirectKafkaSource;

  /**
   * <p>Specifies a Kinesis data source in the Glue Data Catalog.</p>
   */
  CatalogKinesisSource?: CatalogKinesisSource;

  /**
   * <p>Specifies an Apache Kafka data store in the Data Catalog.</p>
   */
  CatalogKafkaSource?: CatalogKafkaSource;

  /**
   * <p>Specifies a transform that removes columns from the dataset if all values in the column are 'null'. By default, Glue Studio will recognize null objects, but some values such as empty strings, strings that are "null", -1 integers or other placeholders such as zeros, are not automatically recognized as nulls.</p>
   */
  DropNullFields?: DropNullFields;

  /**
   * <p>Specifies a transform that merges a <code>DynamicFrame</code> with a staging <code>DynamicFrame</code> based on the specified primary keys to identify records. Duplicate records (records with the same primary keys) are not de-duplicated. </p>
   */
  Merge?: Merge;

  /**
   * <p>Specifies a transform that combines the rows from two or more datasets into a single result.</p>
   */
  Union?: Union;

  /**
   * <p>Specifies a transform that identifies, removes or masks PII data.</p>
   */
  PIIDetection?: PIIDetection;

  /**
   * <p>Specifies a transform that groups rows by chosen fields and computes the aggregated value by specified function.</p>
   */
  Aggregate?: Aggregate;

  /**
   * <p>Specifies a transform that removes rows of repeating data from a data set.</p>
   */
  DropDuplicates?: DropDuplicates;

  /**
   * <p>Specifies a data target that writes to a goverened catalog.</p>
   */
  GovernedCatalogTarget?: GovernedCatalogTarget;

  /**
   * <p>Specifies a data source in a goverened Data Catalog.</p>
   */
  GovernedCatalogSource?: GovernedCatalogSource;

  /**
   * <p>Specifies a Microsoft SQL server data source in the Glue Data Catalog.</p>
   */
  MicrosoftSQLServerCatalogSource?: MicrosoftSQLServerCatalogSource;

  /**
   * <p>Specifies a MySQL data source in the Glue Data Catalog.</p>
   */
  MySQLCatalogSource?: MySQLCatalogSource;

  /**
   * <p>Specifies an Oracle data source in the Glue Data Catalog.</p>
   */
  OracleSQLCatalogSource?: OracleSQLCatalogSource;

  /**
   * <p>Specifies a PostgresSQL data source in the Glue Data Catalog.</p>
   */
  PostgreSQLCatalogSource?: PostgreSQLCatalogSource;

  /**
   * <p>Specifies a target that uses Microsoft SQL.</p>
   */
  MicrosoftSQLServerCatalogTarget?: MicrosoftSQLServerCatalogTarget;

  /**
   * <p>Specifies a target that uses MySQL.</p>
   */
  MySQLCatalogTarget?: MySQLCatalogTarget;

  /**
   * <p>Specifies a target that uses Oracle SQL.</p>
   */
  OracleSQLCatalogTarget?: OracleSQLCatalogTarget;

  /**
   * <p>Specifies a target that uses Postgres SQL.</p>
   */
  PostgreSQLCatalogTarget?: PostgreSQLCatalogTarget;
}

export namespace CodeGenConfigurationNode {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CodeGenConfigurationNode): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies a job definition.</p>
 */
export interface Job {
  /**
   * <p>The name you assign to this job definition.</p>
   */
  Name?: string;

  /**
   * <p>A description of the job.</p>
   */
  Description?: string;

  /**
   * <p>This field is reserved for future use.</p>
   */
  LogUri?: string;

  /**
   * <p>The name or Amazon Resource Name (ARN) of the IAM role associated with this job.</p>
   */
  Role?: string;

  /**
   * <p>The time and date that this job definition was created.</p>
   */
  CreatedOn?: Date;

  /**
   * <p>The last point in time when this job definition was modified.</p>
   */
  LastModifiedOn?: Date;

  /**
   * <p>An <code>ExecutionProperty</code> specifying the maximum number of concurrent runs allowed
   *       for this job.</p>
   */
  ExecutionProperty?: ExecutionProperty;

  /**
   * <p>The <code>JobCommand</code> that runs this job.</p>
   */
  Command?: JobCommand;

  /**
   * <p>The default arguments for this job, specified as name-value pairs.</p>
   *          <p>You can specify arguments here that your own job-execution script
   *       consumes, as well as arguments that Glue itself consumes.</p>
   *          <p>For information about how to specify and consume your own Job arguments, see the <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-python-calling.html">Calling Glue APIs in Python</a> topic in the developer guide.</p>
   *          <p>For information about the key-value pairs that Glue consumes to set up your job, see the <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-etl-glue-arguments.html">Special Parameters Used by Glue</a> topic in the developer guide.</p>
   */
  DefaultArguments?: Record<string, string>;

  /**
   * <p>Non-overridable arguments for this job, specified as name-value pairs.</p>
   */
  NonOverridableArguments?: Record<string, string>;

  /**
   * <p>The connections used for this job.</p>
   */
  Connections?: ConnectionsList;

  /**
   * <p>The maximum number of times to retry this job after a JobRun fails.</p>
   */
  MaxRetries?: number;

  /**
   * @deprecated
   *
   * <p>This field is deprecated. Use <code>MaxCapacity</code> instead.</p>
   *
   *          <p>The number of Glue data processing units (DPUs) allocated to runs of this job. You can
   *       allocate from 2 to 100 DPUs; the default is 10. A DPU is a relative measure of processing
   *       power that consists of 4 vCPUs of compute capacity and 16 GB of memory. For more information,
   *       see the <a href="https://aws.amazon.com/glue/pricing/">Glue pricing
   *       page</a>.</p>
   * 	        <p></p>
   */
  AllocatedCapacity?: number;

  /**
   * <p>The job timeout in minutes.  This is the maximum time that a job run
   *       can consume resources before it is terminated and enters <code>TIMEOUT</code>
   *       status. The default is 2,880 minutes (48 hours).</p>
   */
  Timeout?: number;

  /**
   * <p>For Glue version 1.0 or earlier jobs, using the standard worker type, the number of Glue data processing units (DPUs) that can be allocated when this job runs. A DPU is a relative measure
   *       of processing power that consists of 4 vCPUs of compute capacity and 16 GB of memory.
   *       For more information, see the <a href="https://aws.amazon.com/glue/pricing/">Glue
   *       pricing page</a>.</p>
   *
   * 	        <p>Do not set <code>Max Capacity</code> if using <code>WorkerType</code> and <code>NumberOfWorkers</code>.</p>
   *
   * 	        <p>The value that can be allocated for <code>MaxCapacity</code> depends on whether you are
   *       running a Python shell job, an Apache Spark ETL job, or an Apache Spark streaming ETL
   *       job:</p>
   *         <ul>
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
   *          <p>For Glue version 2.0 jobs, you cannot instead specify a <code>Maximum capacity</code>. Instead, you should specify a <code>Worker type</code> and the <code>Number of workers</code>.</p>
   */
  MaxCapacity?: number;

  /**
   * <p>The type of predefined worker that is allocated when a job runs. Accepts a value of Standard, G.1X, or G.2X.</p>
   * 	        <ul>
   *             <li>
   *                <p>For the <code>Standard</code> worker type, each worker provides 4 vCPU, 16 GB of memory and a 50GB disk, and 2 executors per worker.</p>
   *             </li>
   *             <li>
   *                <p>For the <code>G.1X</code> worker type, each worker maps to 1 DPU (4 vCPU, 16 GB of memory, 64 GB disk), and provides 1 executor per worker. We recommend this worker type for memory-intensive jobs.</p>
   *             </li>
   *             <li>
   *                <p>For the <code>G.2X</code> worker type, each worker maps to 2 DPU (8 vCPU, 32 GB of memory, 128 GB disk), and provides 1 executor per worker. We recommend this worker type for memory-intensive jobs.</p>
   *             </li>
   *          </ul>
   */
  WorkerType?: WorkerType | string;

  /**
   * <p>The number of workers of a defined <code>workerType</code> that are allocated when a job runs.</p>
   *
   * 		       <p>The maximum number of workers you can define are 299 for <code>G.1X</code>, and 149 for <code>G.2X</code>. </p>
   */
  NumberOfWorkers?: number;

  /**
   * <p>The name of the <code>SecurityConfiguration</code> structure to be used with this
   *       job.</p>
   */
  SecurityConfiguration?: string;

  /**
   * <p>Specifies configuration properties of a job notification.</p>
   */
  NotificationProperty?: NotificationProperty;

  /**
   * <p>Glue version determines the versions of Apache Spark and Python that Glue supports. The Python version indicates the version supported for jobs of type Spark. </p>
   *
   *          <p>For more information about the available Glue versions and corresponding Spark and Python versions, see <a href="https://docs.aws.amazon.com/glue/latest/dg/add-job.html">Glue version</a> in the developer guide.</p>
   *
   * 	        <p>Jobs that are created without specifying a Glue version default to Glue 0.9.</p>
   */
  GlueVersion?: string;

  /**
   * <p>The representation of a directed acyclic graph on which both the Glue Studio visual component and Glue Studio code generation is based.</p>
   */
  CodeGenConfigurationNodes?: Record<string, CodeGenConfigurationNode>;
}

export namespace Job {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Job): any => ({
    ...obj,
    ...(obj.CodeGenConfigurationNodes && { CodeGenConfigurationNodes: SENSITIVE_STRING }),
  });
}

/**
 * <p>Specifies information used to update an existing job definition. The previous job
 *       definition is completely overwritten by this information.</p>
 */
export interface JobUpdate {
  /**
   * <p>Description of the job being defined.</p>
   */
  Description?: string;

  /**
   * <p>This field is reserved for future use.</p>
   */
  LogUri?: string;

  /**
   * <p>The name or Amazon Resource Name (ARN) of the IAM role associated with this job
   *       (required).</p>
   */
  Role?: string;

  /**
   * <p>An <code>ExecutionProperty</code> specifying the maximum number of concurrent runs allowed
   *       for this job.</p>
   */
  ExecutionProperty?: ExecutionProperty;

  /**
   * <p>The <code>JobCommand</code> that runs this job (required).</p>
   */
  Command?: JobCommand;

  /**
   * <p>The default arguments for this job.</p>
   *          <p>You can specify arguments here that your own job-execution script
   *       consumes, as well as arguments that Glue itself consumes.</p>
   *          <p>For information about how to specify and consume your own Job arguments, see the <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-python-calling.html">Calling Glue APIs in Python</a> topic in the developer guide.</p>
   *          <p>For information about the key-value pairs that Glue consumes to set up your job, see the <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-etl-glue-arguments.html">Special Parameters Used by Glue</a> topic in the developer guide.</p>
   */
  DefaultArguments?: Record<string, string>;

  /**
   * <p>Non-overridable arguments for this job, specified as name-value pairs.</p>
   */
  NonOverridableArguments?: Record<string, string>;

  /**
   * <p>The connections used for this job.</p>
   */
  Connections?: ConnectionsList;

  /**
   * <p>The maximum number of times to retry this job if it fails.</p>
   */
  MaxRetries?: number;

  /**
   * @deprecated
   *
   * <p>This field is deprecated. Use <code>MaxCapacity</code> instead.</p>
   *
   *          <p>The number of Glue data processing units (DPUs) to allocate to this job. You can
   *       allocate from 2 to 100 DPUs; the default is 10. A DPU is a relative measure of processing
   *       power that consists of 4 vCPUs of compute capacity and 16 GB of memory. For more information,
   *       see the <a href="https://aws.amazon.com/glue/pricing/">Glue pricing
   *       page</a>.</p>
   */
  AllocatedCapacity?: number;

  /**
   * <p>The job timeout in minutes.  This is the maximum time that a job run
   *       can consume resources before it is terminated and enters <code>TIMEOUT</code>
   *       status. The default is 2,880 minutes (48 hours).</p>
   */
  Timeout?: number;

  /**
   * <p>For Glue version 1.0 or earlier jobs, using the standard worker type, the number of Glue data processing units (DPUs) that can be allocated when this job runs. A DPU is a relative measure
   *      of processing power that consists of 4 vCPUs of compute capacity and 16 GB of memory. For more information, see the <a href="https://aws.amazon.com/glue/pricing/">Glue pricing page</a>.</p>
   *
   * 	        <p>Do not set <code>Max Capacity</code> if using <code>WorkerType</code> and <code>NumberOfWorkers</code>.</p>
   *
   *          <p>The value that can be allocated for <code>MaxCapacity</code> depends on whether you are
   *       running a Python shell job or an Apache Spark ETL job:</p>
   *
   *          <ul>
   *             <li>
   *                <p>When you specify a Python shell job (<code>JobCommand.Name</code>="pythonshell"), you can
   *           allocate either 0.0625 or 1 DPU. The default is 0.0625 DPU.</p>
   *             </li>
   *             <li>
   *                <p>When you specify an Apache Spark ETL job (<code>JobCommand.Name</code>="glueetl") or Apache
   *            Spark streaming ETL job (<code>JobCommand.Name</code>="gluestreaming"), you can allocate from 2 to 100 DPUs.
   *            The default is 10 DPUs. This job type cannot have a fractional DPU allocation.</p>
   *             </li>
   *          </ul>
   * 	        <p>For Glue version 2.0 jobs, you cannot instead specify a <code>Maximum capacity</code>. Instead, you should specify a <code>Worker type</code> and the <code>Number of workers</code>.</p>
   */
  MaxCapacity?: number;

  /**
   * <p>The type of predefined worker that is allocated when a job runs. Accepts a value of Standard, G.1X, or G.2X.</p>
   * 	        <ul>
   *             <li>
   *                <p>For the <code>Standard</code> worker type, each worker provides 4 vCPU, 16 GB of memory and a 50GB disk, and 2 executors per worker.</p>
   *             </li>
   *             <li>
   *                <p>For the <code>G.1X</code> worker type, each worker maps to 1 DPU (4 vCPU, 16 GB of memory, 64 GB disk), and provides 1 executor per worker. We recommend this worker type for memory-intensive jobs.</p>
   *             </li>
   *             <li>
   *                <p>For the <code>G.2X</code> worker type, each worker maps to 2 DPU (8 vCPU, 32 GB of memory, 128 GB disk), and provides 1 executor per worker. We recommend this worker type for memory-intensive jobs.</p>
   *             </li>
   *          </ul>
   */
  WorkerType?: WorkerType | string;

  /**
   * <p>The number of workers of a defined <code>workerType</code> that are allocated when a job runs.</p>
   *
   *          <p>The maximum number of workers you can define are 299 for <code>G.1X</code>, and 149 for <code>G.2X</code>. </p>
   */
  NumberOfWorkers?: number;

  /**
   * <p>The name of the <code>SecurityConfiguration</code> structure to be used with this
   *       job.</p>
   */
  SecurityConfiguration?: string;

  /**
   * <p>Specifies the configuration properties of a job notification.</p>
   */
  NotificationProperty?: NotificationProperty;

  /**
   * <p>Glue version determines the versions of Apache Spark and Python that Glue supports. The Python version indicates the version supported for jobs of type Spark. </p>
   *
   *          <p>For more information about the available Glue versions and corresponding Spark and Python versions, see <a href="https://docs.aws.amazon.com/glue/latest/dg/add-job.html">Glue version</a> in the developer guide.</p>
   */
  GlueVersion?: string;

  /**
   * <p>The representation of a directed acyclic graph on which both the Glue Studio visual component and Glue Studio code generation is based.</p>
   */
  CodeGenConfigurationNodes?: Record<string, CodeGenConfigurationNode>;
}

export namespace JobUpdate {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: JobUpdate): any => ({
    ...obj,
    ...(obj.CodeGenConfigurationNodes && { CodeGenConfigurationNodes: SENSITIVE_STRING }),
  });
}

export interface UpdateJobRequest {
  /**
   * <p>The name of the job definition to update.</p>
   */
  JobName: string | undefined;

  /**
   * <p>Specifies the values with which to update the job definition.</p>
   */
  JobUpdate: JobUpdate | undefined;
}

export namespace UpdateJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateJobRequest): any => ({
    ...obj,
    ...(obj.JobUpdate && { JobUpdate: JobUpdate.filterSensitiveLog(obj.JobUpdate) }),
  });
}
