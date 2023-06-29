// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { GlueServiceException as __BaseException } from "./GlueServiceException";

/**
 * @public
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
 * @public
 * <p>Specifies configuration properties of a notification.</p>
 */
export interface NotificationProperty {
  /**
   * <p>After a job run starts, the number of minutes to wait before
   *       sending a job run delay notification.</p>
   */
  NotifyDelayAfter?: number;
}

/**
 * @public
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

/**
 * @public
 * @enum
 */
export const AdditionalOptionKeys = {
  CacheOption: "performanceTuning.caching",
} as const;

/**
 * @public
 */
export type AdditionalOptionKeys = (typeof AdditionalOptionKeys)[keyof typeof AdditionalOptionKeys];

/**
 * @public
 * @enum
 */
export const AggFunction = {
  avg: "avg",
  count: "count",
  countDistinct: "countDistinct",
  first: "first",
  kurtosis: "kurtosis",
  last: "last",
  max: "max",
  min: "min",
  skewness: "skewness",
  stddev_pop: "stddev_pop",
  stddev_samp: "stddev_samp",
  sum: "sum",
  sumDistinct: "sumDistinct",
  var_pop: "var_pop",
  var_samp: "var_samp",
} as const;

/**
 * @public
 */
export type AggFunction = (typeof AggFunction)[keyof typeof AggFunction];

/**
 * @public
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

/**
 * @public
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

/**
 * @public
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
 * @public
 * <p>Specifies an optional value when connecting to the Redshift cluster.</p>
 */
export interface AmazonRedshiftAdvancedOption {
  /**
   * <p>The key for the additional connection option.</p>
   */
  Key?: string;

  /**
   * <p>The value for the additional connection option.</p>
   */
  Value?: string;
}

/**
 * @public
 * <p>Specifies an option value.</p>
 */
export interface Option {
  /**
   * <p>Specifies the value of the option.</p>
   */
  Value?: string;

  /**
   * <p>Specifies the label of the option.</p>
   */
  Label?: string;

  /**
   * <p>Specifies the description of the option.</p>
   */
  Description?: string;
}

/**
 * @public
 * <p>Specifies an Amazon Redshift node.</p>
 */
export interface AmazonRedshiftNodeData {
  /**
   * <p>The access type for the Redshift connection. Can be a direct connection or catalog connections.</p>
   */
  AccessType?: string;

  /**
   * <p>The source type to specify whether a specific table is the source or a custom query.</p>
   */
  SourceType?: string;

  /**
   * <p>The Glue connection to the Redshift cluster.</p>
   */
  Connection?: Option;

  /**
   * <p>The Redshift schema name when working with a direct connection.</p>
   */
  Schema?: Option;

  /**
   * <p>The Redshift table name when working with a direct connection.</p>
   */
  Table?: Option;

  /**
   * <p>The name of the Glue Data Catalog database when working with a data catalog.</p>
   */
  CatalogDatabase?: Option;

  /**
   * <p>The Glue Data Catalog table name when working with a data catalog.</p>
   */
  CatalogTable?: Option;

  /**
   * <p>The Redshift schema name when working with a data catalog.</p>
   */
  CatalogRedshiftSchema?: string;

  /**
   * <p>The database table to read from.</p>
   */
  CatalogRedshiftTable?: string;

  /**
   * <p>The Amazon S3 path where temporary data can be staged when copying out of the database.</p>
   */
  TempDir?: string;

  /**
   * <p>Optional. The role name use when connection to S3. The IAM role ill default to the role on the job when left blank.</p>
   */
  IamRole?: Option;

  /**
   * <p>Optional values when connecting to the Redshift cluster.</p>
   */
  AdvancedOptions?: AmazonRedshiftAdvancedOption[];

  /**
   * <p>The SQL used to fetch the data from a Redshift sources when the SourceType is 'query'.</p>
   */
  SampleQuery?: string;

  /**
   * <p>The SQL used before a MERGE or APPEND with upsert is run.</p>
   */
  PreAction?: string;

  /**
   * <p>The SQL used before a MERGE or APPEND with upsert is run.</p>
   */
  PostAction?: string;

  /**
   * <p>Specifies how writing to a Redshift cluser will occur.</p>
   */
  Action?: string;

  /**
   * <p>Specifies the prefix to a table.</p>
   */
  TablePrefix?: string;

  /**
   * <p>The action used on Redshift sinks when doing an APPEND.</p>
   */
  Upsert?: boolean;

  /**
   * <p>The action used when to detemine how a MERGE in a Redshift sink will be handled.</p>
   */
  MergeAction?: string;

  /**
   * <p>The action used when to detemine how a MERGE in a Redshift sink will be handled when an existing record matches a new record.</p>
   */
  MergeWhenMatched?: string;

  /**
   * <p>The action used when to detemine how a MERGE in a Redshift sink will be handled when an existing record doesn't match a new record.</p>
   */
  MergeWhenNotMatched?: string;

  /**
   * <p>The SQL used in a custom merge to deal with matching records.</p>
   */
  MergeClause?: string;

  /**
   * <p>Specifies the name of the connection that is associated with the catalog table used.</p>
   */
  CrawlerConnection?: string;

  /**
   * <p>The array of schema output for a given node.</p>
   */
  TableSchema?: Option[];

  /**
   * <p>The name of the temporary staging table that is used when doing a MERGE or APPEND with upsert.</p>
   */
  StagingTable?: string;

  /**
   * <p>The list of column names used to determine a matching record when doing a MERGE or APPEND with upsert.</p>
   */
  SelectedColumns?: Option[];
}

/**
 * @public
 * <p>Specifies an Amazon Redshift source.</p>
 */
export interface AmazonRedshiftSource {
  /**
   * <p>The name of the Amazon Redshift source.</p>
   */
  Name?: string;

  /**
   * <p>Specifies the data of the Amazon Reshift source node.</p>
   */
  Data?: AmazonRedshiftNodeData;
}

/**
 * @public
 * <p>Specifies an Amazon Redshift target.</p>
 */
export interface AmazonRedshiftTarget {
  /**
   * <p>The name of the Amazon Redshift target.</p>
   */
  Name?: string;

  /**
   * <p>Specifies the data of the Amazon Reshift target node.</p>
   */
  Data?: AmazonRedshiftNodeData;

  /**
   * <p>The nodes that are inputs to the data target.</p>
   */
  Inputs?: string[];
}

/**
 * @public
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

/**
 * @public
 * <p>Specifies a user-defined schema when a schema cannot be determined by Glue.</p>
 */
export interface GlueSchema {
  /**
   * <p>Specifies the column definitions that make up a Glue schema.</p>
   */
  Columns?: GlueStudioSchemaColumn[];
}

/**
 * @public
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

/**
 * @public
 * <p>A structure containing the Lake Formation audit context.</p>
 */
export interface AuditContext {
  /**
   * <p>A string containing the additional audit context information.</p>
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

/**
 * @public
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

/**
 * @public
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

/**
 * @public
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

/**
 * @public
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

/**
 * @public
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

/**
 * @public
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

/**
 * @public
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

  /**
   * <p>A list of locations that point to the path where a Delta table is located.</p>
   */
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
   *          <p>When creating a table, you can pass an empty list of columns for the schema, and instead use a schema reference.</p>
   */
  SchemaReference?: SchemaReference;
}

/**
 * @public
 * <p>The structure used to create and update a partition.</p>
 */
export interface PartitionInput {
  /**
   * <p>The values of the partition. Although this parameter is not required by the SDK, you must specify this parameter for a valid input.</p>
   *          <p>The values for the keys for the new partition must be passed as an array of String objects that must be ordered in the same order as the partition keys appearing in the Amazon S3 prefix. Otherwise Glue will add the values to the wrong keys.</p>
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

/**
 * @public
 */
export interface BatchCreatePartitionRequest {
  /**
   * <p>The ID of the catalog in which the partition is to be created. Currently, this should be
   *       the Amazon Web Services account ID.</p>
   */
  CatalogId?: string;

  /**
   * <p>The name of the metadata database in which the partition is
   *       to be created.</p>
   */
  DatabaseName: string | undefined;

  /**
   * <p>The name of the metadata table in which the partition is to be created.</p>
   */
  TableName: string | undefined;

  /**
   * <p>A list of <code>PartitionInput</code> structures that define
   *       the partitions to be created.</p>
   */
  PartitionInputList: PartitionInput[] | undefined;
}

/**
 * @public
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

/**
 * @public
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

/**
 * @public
 */
export interface BatchCreatePartitionResponse {
  /**
   * <p>The errors encountered when trying to create the requested partitions.</p>
   */
  Errors?: PartitionError[];
}

/**
 * @public
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
   * <p>Indicates whether or not the exception relates to a federated source.</p>
   */
  FromFederationSource?: boolean;
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
    this.FromFederationSource = opts.FromFederationSource;
  }
}

/**
 * @public
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
 * @public
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
 * @public
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
   * <p>Indicates whether or not the exception relates to a federated source.</p>
   */
  FromFederationSource?: boolean;
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
    this.FromFederationSource = opts.FromFederationSource;
  }
}

/**
 * @public
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
 * @public
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
 * @public
 */
export interface BatchDeleteConnectionRequest {
  /**
   * <p>The ID of the Data Catalog in which the connections reside. If none is provided, the Amazon Web Services
   *       account ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * <p>A list of names of the connections to delete.</p>
   */
  ConnectionNameList: string[] | undefined;
}

/**
 * @public
 */
export interface BatchDeleteConnectionResponse {
  /**
   * <p>A list of names of the connection definitions that were
   *        successfully deleted.</p>
   */
  Succeeded?: string[];

  /**
   * <p>A map of the names of connections that were not successfully
   *        deleted to error details.</p>
   */
  Errors?: Record<string, ErrorDetail>;
}

/**
 * @public
 * <p>Contains a list of values defining partitions.</p>
 */
export interface PartitionValueList {
  /**
   * <p>The list of values.</p>
   */
  Values: string[] | undefined;
}

/**
 * @public
 */
export interface BatchDeletePartitionRequest {
  /**
   * <p>The ID of the Data Catalog where the partition to be deleted resides. If none is provided,
   *       the Amazon Web Services account ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * <p>The name of the catalog database in which the table in question
   *       resides.</p>
   */
  DatabaseName: string | undefined;

  /**
   * <p>The name of the table that contains the partitions to be deleted.</p>
   */
  TableName: string | undefined;

  /**
   * <p>A list of <code>PartitionInput</code> structures that define
   *       the partitions to be deleted.</p>
   */
  PartitionsToDelete: PartitionValueList[] | undefined;
}

/**
 * @public
 */
export interface BatchDeletePartitionResponse {
  /**
   * <p>The errors encountered when trying to delete the requested partitions.</p>
   */
  Errors?: PartitionError[];
}

/**
 * @public
 */
export interface BatchDeleteTableRequest {
  /**
   * <p>The ID of the Data Catalog where the table resides. If none is provided, the Amazon Web Services account
   *       ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * <p>The name of the catalog database in which the tables to delete reside. For Hive
   *       compatibility, this name is entirely lowercase.</p>
   */
  DatabaseName: string | undefined;

  /**
   * <p>A list of the table to delete.</p>
   */
  TablesToDelete: string[] | undefined;

  /**
   * <p>The transaction ID at which to delete the table contents.</p>
   */
  TransactionId?: string;
}

/**
 * @public
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

/**
 * @public
 */
export interface BatchDeleteTableResponse {
  /**
   * <p>A list of errors encountered in attempting to delete the specified tables.</p>
   */
  Errors?: TableError[];
}

/**
 * @public
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
 * @public
 */
export interface BatchDeleteTableVersionRequest {
  /**
   * <p>The ID of the Data Catalog where the tables reside. If none is provided, the Amazon Web Services account
   *       ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * <p>The database in the catalog in which the table resides. For Hive
   *       compatibility, this name is entirely lowercase.</p>
   */
  DatabaseName: string | undefined;

  /**
   * <p>The name of the table. For Hive compatibility,
   *       this name is entirely lowercase.</p>
   */
  TableName: string | undefined;

  /**
   * <p>A list of the IDs of versions to be deleted. A <code>VersionId</code> is a string representation of an integer. Each version is incremented by 1.</p>
   */
  VersionIds: string[] | undefined;
}

/**
 * @public
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

/**
 * @public
 */
export interface BatchDeleteTableVersionResponse {
  /**
   * <p>A list of errors encountered while trying to delete
   *       the specified table versions.</p>
   */
  Errors?: TableVersionError[];
}

/**
 * @public
 */
export interface BatchGetBlueprintsRequest {
  /**
   * <p>A list of blueprint names.</p>
   */
  Names: string[] | undefined;

  /**
   * <p>Specifies whether or not to include the blueprint in the response.</p>
   */
  IncludeBlueprint?: boolean;

  /**
   * <p>Specifies whether or not to include the parameters, as a JSON string, for the blueprint in the response.</p>
   */
  IncludeParameterSpec?: boolean;
}

/**
 * @public
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

/**
 * @public
 * @enum
 */
export const BlueprintStatus = {
  ACTIVE: "ACTIVE",
  CREATING: "CREATING",
  FAILED: "FAILED",
  UPDATING: "UPDATING",
} as const;

/**
 * @public
 */
export type BlueprintStatus = (typeof BlueprintStatus)[keyof typeof BlueprintStatus];

/**
 * @public
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
   *          <ul>
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

/**
 * @public
 */
export interface BatchGetBlueprintsResponse {
  /**
   * <p>Returns a list of blueprint as a <code>Blueprints</code> object.</p>
   */
  Blueprints?: Blueprint[];

  /**
   * <p>Returns a list of <code>BlueprintNames</code> that were not found.</p>
   */
  MissingBlueprints?: string[];
}

/**
 * @public
 */
export interface BatchGetCrawlersRequest {
  /**
   * <p>A list of crawler names, which might be the names returned from the
   *         <code>ListCrawlers</code> operation.</p>
   */
  CrawlerNames: string[] | undefined;
}

/**
 * @public
 * <p>Specifies Lake Formation configuration settings for the crawler.</p>
 */
export interface LakeFormationConfiguration {
  /**
   * <p>Specifies whether to use Lake Formation credentials for the crawler instead of the IAM role credentials.</p>
   */
  UseLakeFormationCredentials?: boolean;

  /**
   * <p>Required for cross account crawls. For same account crawls as the target data, this can be left as null.</p>
   */
  AccountId?: string;
}

/**
 * @public
 * @enum
 */
export const LastCrawlStatus = {
  CANCELLED: "CANCELLED",
  FAILED: "FAILED",
  SUCCEEDED: "SUCCEEDED",
} as const;

/**
 * @public
 */
export type LastCrawlStatus = (typeof LastCrawlStatus)[keyof typeof LastCrawlStatus];

/**
 * @public
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

/**
 * @public
 * @enum
 */
export const CrawlerLineageSettings = {
  DISABLE: "DISABLE",
  ENABLE: "ENABLE",
} as const;

/**
 * @public
 */
export type CrawlerLineageSettings = (typeof CrawlerLineageSettings)[keyof typeof CrawlerLineageSettings];

/**
 * @public
 * <p>Specifies data lineage configuration settings for the crawler.</p>
 */
export interface LineageConfiguration {
  /**
   * <p>Specifies whether data lineage is enabled for the crawler. Valid values are:</p>
   *          <ul>
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

/**
 * @public
 * @enum
 */
export const RecrawlBehavior = {
  CRAWL_EVENT_MODE: "CRAWL_EVENT_MODE",
  CRAWL_EVERYTHING: "CRAWL_EVERYTHING",
  CRAWL_NEW_FOLDERS_ONLY: "CRAWL_NEW_FOLDERS_ONLY",
} as const;

/**
 * @public
 */
export type RecrawlBehavior = (typeof RecrawlBehavior)[keyof typeof RecrawlBehavior];

/**
 * @public
 * <p>When crawling an Amazon S3 data source after the first crawl is complete, specifies whether to crawl the entire dataset again or to crawl only folders that were added since the last crawler run. For more information, see <a href="https://docs.aws.amazon.com/glue/latest/dg/incremental-crawls.html">Incremental Crawls in Glue</a> in the developer guide.</p>
 */
export interface RecrawlPolicy {
  /**
   * <p>Specifies whether to crawl the entire dataset again or to crawl only folders that were added since the last crawler run.</p>
   *          <p>A value of <code>CRAWL_EVERYTHING</code> specifies crawling the entire dataset again.</p>
   *          <p>A value of <code>CRAWL_NEW_FOLDERS_ONLY</code> specifies crawling only folders that were added since the last crawler run.</p>
   *          <p>A value of <code>CRAWL_EVENT_MODE</code> specifies crawling only the changes identified by Amazon S3 events.</p>
   */
  RecrawlBehavior?: RecrawlBehavior | string;
}

/**
 * @public
 * @enum
 */
export const ScheduleState = {
  NOT_SCHEDULED: "NOT_SCHEDULED",
  SCHEDULED: "SCHEDULED",
  TRANSITIONING: "TRANSITIONING",
} as const;

/**
 * @public
 */
export type ScheduleState = (typeof ScheduleState)[keyof typeof ScheduleState];

/**
 * @public
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

/**
 * @public
 * @enum
 */
export const DeleteBehavior = {
  DELETE_FROM_DATABASE: "DELETE_FROM_DATABASE",
  DEPRECATE_IN_DATABASE: "DEPRECATE_IN_DATABASE",
  LOG: "LOG",
} as const;

/**
 * @public
 */
export type DeleteBehavior = (typeof DeleteBehavior)[keyof typeof DeleteBehavior];

/**
 * @public
 * @enum
 */
export const UpdateBehavior = {
  LOG: "LOG",
  UPDATE_IN_DATABASE: "UPDATE_IN_DATABASE",
} as const;

/**
 * @public
 */
export type UpdateBehavior = (typeof UpdateBehavior)[keyof typeof UpdateBehavior];

/**
 * @public
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

/**
 * @public
 * @enum
 */
export const CrawlerState = {
  READY: "READY",
  RUNNING: "RUNNING",
  STOPPING: "STOPPING",
} as const;

/**
 * @public
 */
export type CrawlerState = (typeof CrawlerState)[keyof typeof CrawlerState];

/**
 * @public
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

  /**
   * <p>A valid Amazon SQS ARN. For example, <code>arn:aws:sqs:region:account:sqs</code>.</p>
   */
  EventQueueArn?: string;

  /**
   * <p>A valid Amazon dead-letter SQS ARN. For example, <code>arn:aws:sqs:region:account:deadLetterQueue</code>.</p>
   */
  DlqEventQueueArn?: string;
}

/**
 * @public
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

  /**
   * <p>Specifies whether the crawler will create native tables, to allow integration with query engines that support querying of the Delta transaction log directly.</p>
   */
  CreateNativeDeltaTable?: boolean;
}

/**
 * @public
 * <p>Specifies an Amazon DynamoDB table to crawl.</p>
 */
export interface DynamoDBTarget {
  /**
   * <p>The name of the DynamoDB table to crawl.</p>
   */
  Path?: string;

  /**
   * <p>Indicates whether to scan all the records, or to sample rows from the table. Scanning all the records can take a long time when the table is not a high throughput table.</p>
   *          <p>A value of <code>true</code> means to scan all records, while a value of <code>false</code> means to sample the records. If no value is specified, the value defaults to <code>true</code>.</p>
   */
  scanAll?: boolean;

  /**
   * <p>The percentage of the configured read capacity units to use by the Glue crawler. Read capacity units is a term defined by DynamoDB, and is a numeric value that acts as rate limiter for the number of reads that can be performed on that table per second.</p>
   *          <p>The valid values are null or a value between 0.1 to 1.5. A null value is used when user does not provide a value, and defaults to 0.5 of the configured Read Capacity Unit (for provisioned tables), or 0.25 of the max configured Read Capacity Unit (for tables using on-demand mode).</p>
   */
  scanRate?: number;
}

/**
 * @public
 * <p>Specifies an Apache Iceberg data source where Iceberg tables are stored in Amazon S3.</p>
 */
export interface IcebergTarget {
  /**
   * <p>One or more Amazon S3 paths that contains Iceberg metadata folders as <code>s3://bucket/prefix</code>.</p>
   */
  Paths?: string[];

  /**
   * <p>The name of the connection to use to connect to the Iceberg target.</p>
   */
  ConnectionName?: string;

  /**
   * <p>A list of glob patterns used to exclude from the crawl.
   *       For more information, see <a href="https://docs.aws.amazon.com/glue/latest/dg/add-crawler.html">Catalog Tables with a Crawler</a>.</p>
   */
  Exclusions?: string[];

  /**
   * <p>The maximum depth of Amazon S3 paths that the crawler can traverse to discover the Iceberg metadata folder in your Amazon S3 path. Used to limit the crawler run time.</p>
   */
  MaximumTraversalDepth?: number;
}

/**
 * @public
 * @enum
 */
export const JdbcMetadataEntry = {
  COMMENTS: "COMMENTS",
  RAWTYPES: "RAWTYPES",
} as const;

/**
 * @public
 */
export type JdbcMetadataEntry = (typeof JdbcMetadataEntry)[keyof typeof JdbcMetadataEntry];

/**
 * @public
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

  /**
   * <p>Specify a value of <code>RAWTYPES</code> or <code>COMMENTS</code> to enable additional metadata in table responses. <code>RAWTYPES</code> provides the native-level datatype. <code>COMMENTS</code> provides comments associated with a column or table in the database.</p>
   *          <p>If you do not need additional metadata, keep the field empty.</p>
   */
  EnableAdditionalMetadata?: (JdbcMetadataEntry | string)[];
}

/**
 * @public
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
   *          <p>A value of <code>true</code> means to scan all records, while a value of <code>false</code> means to sample the records. If no value is specified, the value defaults to <code>true</code>.</p>
   */
  ScanAll?: boolean;
}

/**
 * @public
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

/**
 * @public
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

  /**
   * <p>Specifies Apache Iceberg data store targets.</p>
   */
  IcebergTargets?: IcebergTarget[];
}

/**
 * @public
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
   *       aspects of a crawler's behavior. For more information, see <a href="https://docs.aws.amazon.com/glue/latest/dg/crawler-configuration.html">Setting crawler configuration options</a>.</p>
   */
  Configuration?: string;

  /**
   * <p>The name of the <code>SecurityConfiguration</code> structure to be used by this
   *       crawler.</p>
   */
  CrawlerSecurityConfiguration?: string;

  /**
   * <p>Specifies whether the crawler should use Lake Formation credentials for the crawler instead of the IAM role credentials.</p>
   */
  LakeFormationConfiguration?: LakeFormationConfiguration;
}

/**
 * @public
 */
export interface BatchGetCrawlersResponse {
  /**
   * <p>A list of crawler definitions.</p>
   */
  Crawlers?: Crawler[];

  /**
   * <p>A list of names of crawlers that were not found.</p>
   */
  CrawlersNotFound?: string[];
}

/**
 * @public
 */
export interface BatchGetCustomEntityTypesRequest {
  /**
   * <p>A list of names of the custom patterns that you want to retrieve.</p>
   */
  Names: string[] | undefined;
}

/**
 * @public
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
   *          <p>If no context words are passed only a regular expression is checked.</p>
   */
  ContextWords?: string[];
}

/**
 * @public
 */
export interface BatchGetCustomEntityTypesResponse {
  /**
   * <p>A list of <code>CustomEntityType</code> objects representing the custom patterns that have been created.</p>
   */
  CustomEntityTypes?: CustomEntityType[];

  /**
   * <p>A list of the names of custom patterns that were not found.</p>
   */
  CustomEntityTypesNotFound?: string[];
}

/**
 * @public
 */
export interface BatchGetDataQualityResultRequest {
  /**
   * <p>A list of unique result IDs for the data quality results.</p>
   */
  ResultIds: string[] | undefined;
}

/**
 * @public
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

  /**
   * <p>Additional options for the table. Currently there are two keys supported:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>pushDownPredicate</code>: to filter on partitions without having to list and read all the files in your dataset.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>catalogPartitionPredicate</code>: to use server-side partition pruning using partition indexes in the Glue Data Catalog.</p>
   *             </li>
   *          </ul>
   */
  AdditionalOptions?: Record<string, string>;
}

/**
 * @public
 * <p>A data source (an Glue table) for which you want data quality results.</p>
 */
export interface DataSource {
  /**
   * <p>An Glue table.</p>
   */
  GlueTable: GlueTable | undefined;
}

/**
 * @public
 * @enum
 */
export const DataQualityRuleResultStatus = {
  ERROR: "ERROR",
  FAIL: "FAIL",
  PASS: "PASS",
} as const;

/**
 * @public
 */
export type DataQualityRuleResultStatus =
  (typeof DataQualityRuleResultStatus)[keyof typeof DataQualityRuleResultStatus];

/**
 * @public
 * <p>Describes the result of the evaluation of a data quality rule.</p>
 */
export interface DataQualityRuleResult {
  /**
   * <p>The name of the data quality rule.</p>
   */
  Name?: string;

  /**
   * <p>A description of the data quality rule.</p>
   */
  Description?: string;

  /**
   * <p>An evaluation message.</p>
   */
  EvaluationMessage?: string;

  /**
   * <p>A pass or fail status for the rule.</p>
   */
  Result?: DataQualityRuleResultStatus | string;

  /**
   * <p>A map of metrics associated with the evaluation of the rule.</p>
   */
  EvaluatedMetrics?: Record<string, number>;
}

/**
 * @public
 * <p>Describes a data quality result.</p>
 */
export interface DataQualityResult {
  /**
   * <p>A unique result ID for the data quality result.</p>
   */
  ResultId?: string;

  /**
   * <p>An aggregate data quality score. Represents the ratio of rules that passed to the total number of rules.</p>
   */
  Score?: number;

  /**
   * <p>The table associated with the data quality result, if any.</p>
   */
  DataSource?: DataSource;

  /**
   * <p>The name of the ruleset associated with the data quality result.</p>
   */
  RulesetName?: string;

  /**
   * <p>In the context of a job in Glue Studio, each node in the canvas is typically assigned some sort of name and data quality nodes will have names. In the case of multiple nodes, the <code>evaluationContext</code> can differentiate the nodes.</p>
   */
  EvaluationContext?: string;

  /**
   * <p>The date and time when this data quality run started.</p>
   */
  StartedOn?: Date;

  /**
   * <p>The date and time when this data quality run completed.</p>
   */
  CompletedOn?: Date;

  /**
   * <p>The job name associated with the data quality result, if any.</p>
   */
  JobName?: string;

  /**
   * <p>The job run ID associated with the data quality result, if any.</p>
   */
  JobRunId?: string;

  /**
   * <p>The unique run ID for the ruleset evaluation for this data quality result.</p>
   */
  RulesetEvaluationRunId?: string;

  /**
   * <p>A list of <code>DataQualityRuleResult</code> objects representing the results for each rule. </p>
   */
  RuleResults?: DataQualityRuleResult[];
}

/**
 * @public
 */
export interface BatchGetDataQualityResultResponse {
  /**
   * <p>A list of <code>DataQualityResult</code> objects representing the data quality results.</p>
   */
  Results: DataQualityResult[] | undefined;

  /**
   * <p>A list of result IDs for which results were not found.</p>
   */
  ResultsNotFound?: string[];
}

/**
 * @public
 */
export interface BatchGetDevEndpointsRequest {
  /**
   * <p>The list of <code>DevEndpoint</code> names, which might be the names returned from the
   *         <code>ListDevEndpoint</code> operation.</p>
   */
  DevEndpointNames: string[] | undefined;
}

/**
 * @public
 * @enum
 */
export const WorkerType = {
  G_025X: "G.025X",
  G_1X: "G.1X",
  G_2X: "G.2X",
  G_4X: "G.4X",
  G_8X: "G.8X",
  Standard: "Standard",
  Z_2X: "Z.2X",
} as const;

/**
 * @public
 */
export type WorkerType = (typeof WorkerType)[keyof typeof WorkerType];

/**
 * @public
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
   *          <ul>
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
   *          <p>Known issue: when a development endpoint is created with the <code>G.2X</code>
   *             <code>WorkerType</code> configuration, the Spark drivers for the development endpoint will run on 4 vCPU, 16 GB of memory, and a 64 GB disk. </p>
   */
  WorkerType?: WorkerType | string;

  /**
   * <p>Glue version determines the versions of Apache Spark and Python that Glue supports. The Python version indicates the version supported for running your ETL scripts on development endpoints. </p>
   *          <p>For more information about the available Glue versions and corresponding Spark and Python versions, see <a href="https://docs.aws.amazon.com/glue/latest/dg/add-job.html">Glue version</a> in the developer guide.</p>
   *          <p>Development endpoints that are created without specifying a Glue version default to Glue 0.9.</p>
   *          <p>You can specify a version of Python support for development endpoints by using the <code>Arguments</code> parameter in the <code>CreateDevEndpoint</code> or <code>UpdateDevEndpoint</code> APIs. If no arguments are provided, the version defaults to Python 2.</p>
   */
  GlueVersion?: string;

  /**
   * <p>The number of workers of a defined <code>workerType</code> that are allocated to the development endpoint.</p>
   *          <p>The maximum number of workers you can define are 299 for <code>G.1X</code>, and 149 for <code>G.2X</code>. </p>
   */
  NumberOfWorkers?: number;

  /**
   * <p>The number of Glue Data Processing Units (DPUs) allocated to this
   *         <code>DevEndpoint</code>.</p>
   */
  NumberOfNodes?: number;

  /**
   * <p>The Amazon Web Services Availability Zone where this <code>DevEndpoint</code> is located.</p>
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
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>"--enable-glue-datacatalog": ""</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>You can specify a version of Python support for development endpoints by using the <code>Arguments</code> parameter in the <code>CreateDevEndpoint</code> or <code>UpdateDevEndpoint</code> APIs. If no arguments are provided, the version defaults to Python 2.</p>
   */
  Arguments?: Record<string, string>;
}

/**
 * @public
 */
export interface BatchGetDevEndpointsResponse {
  /**
   * <p>A list of <code>DevEndpoint</code> definitions.</p>
   */
  DevEndpoints?: DevEndpoint[];

  /**
   * <p>A list of <code>DevEndpoints</code> not found.</p>
   */
  DevEndpointsNotFound?: string[];
}

/**
 * @public
 */
export interface BatchGetJobsRequest {
  /**
   * <p>A list of job names, which might be the names returned from the <code>ListJobs</code>
   *       operation.</p>
   */
  JobNames: string[] | undefined;
}

/**
 * @public
 * <p>Specifies a Delta Lake data source that is registered in the Glue Data Catalog.</p>
 */
export interface CatalogDeltaSource {
  /**
   * <p>The name of the Delta Lake data source.</p>
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

  /**
   * <p>Specifies additional connection options.</p>
   */
  AdditionalDeltaOptions?: Record<string, string>;

  /**
   * <p>Specifies the data schema for the Delta Lake source.</p>
   */
  OutputSchemas?: GlueSchema[];
}

/**
 * @public
 * <p>Specifies a Hudi data source that is registered in the Glue Data Catalog.</p>
 */
export interface CatalogHudiSource {
  /**
   * <p>The name of the Hudi data source.</p>
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

  /**
   * <p>Specifies additional connection options.</p>
   */
  AdditionalHudiOptions?: Record<string, string>;

  /**
   * <p>Specifies the data schema for the Hudi source.</p>
   */
  OutputSchemas?: GlueSchema[];
}

/**
 * @public
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

/**
 * @public
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

  /**
   * <p>Whether to include the Kafka headers. When the option is set to "true", the data output will contain an additional column named "glue_streaming_kafka_headers"
   *           with type <code>Array[Struct(key: String, value: String)]</code>. The default value is "false".
   *       This option is available in Glue version 3.0 or later only.</p>
   */
  IncludeHeaders?: boolean;

  /**
   * <p>When this option is set to 'true', the data output will contain an additional column named "__src_timestamp" that indicates the time when the corresponding record received by the topic. The default value is 'false'. This option is supported in Glue  version 4.0 or later.</p>
   */
  AddRecordTimestamp?: string;

  /**
   * <p>When this option is set to 'true', for each batch, it will emit the metrics for the duration between the oldest record received by the topic and the time it arrives in Glue to CloudWatch. The metric's name is "glue.driver.streaming.maxConsumerLagInMs". The default value is 'false'. This option is supported in Glue version 4.0 or later.</p>
   */
  EmitConsumerLagMetrics?: string;

  /**
   * <p>The timestamp of the record in the Kafka topic to start reading data from. The possible values are a timestamp string in UTC format of the pattern <code>yyyy-mm-ddTHH:MM:SSZ</code> (where Z represents a UTC timezone offset with a +/-. For example: "2023-04-04T08:00:00+08:00"). </p>
   *          <p>Only one of <code>StartingTimestamp</code> or <code>StartingOffsets</code> must be set.</p>
   */
  StartingTimestamp?: Date;
}

/**
 * @public
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

/**
 * @public
 * @enum
 */
export const StartingPosition = {
  EARLIEST: "earliest",
  LATEST: "latest",
  TIMESTAMP: "timestamp",
  TRIM_HORIZON: "trim_horizon",
} as const;

/**
 * @public
 */
export type StartingPosition = (typeof StartingPosition)[keyof typeof StartingPosition];

/**
 * @public
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
   * <p>The starting position in the Kinesis data stream to read data from. The possible values are <code>"latest"</code>, <code>"trim_horizon"</code>, <code>"earliest"</code>, or a timestamp string in UTC format in the pattern <code>yyyy-mm-ddTHH:MM:SSZ</code> (where <code>Z</code> represents a UTC timezone offset with a +/-. For example: "2023-04-04T08:00:00-04:00"). The default value is <code>"latest"</code>.</p>
   *          <p>Note: Using a value that is a timestamp string in UTC format for "startingPosition" is supported only for Glue version 4.0 or later.</p>
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

  /**
   * <p>When this option is set to 'true', the data output will contain an additional column named "__src_timestamp" that indicates the time when the corresponding record received by the stream. The default value is 'false'. This option is supported in Glue version 4.0 or later.</p>
   */
  AddRecordTimestamp?: string;

  /**
   * <p>When this option is set to 'true', for each batch, it will emit the metrics for the duration between the oldest record received by the stream and the time it arrives in Glue  to CloudWatch. The metric's name is "glue.driver.streaming.maxConsumerLagInMs". The default value is 'false'. This option is supported in Glue version 4.0 or later.</p>
   */
  EmitConsumerLagMetrics?: string;

  /**
   * <p>The timestamp of the record in the Kinesis data stream to start reading data from. The possible values are a timestamp string in UTC format of the pattern <code>yyyy-mm-ddTHH:MM:SSZ</code> (where Z represents a UTC timezone offset with a +/-. For example: "2023-04-04T08:00:00+08:00"). </p>
   */
  StartingTimestamp?: Date;
}

/**
 * @public
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

/**
 * @public
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

/**
 * @public
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

/**
 * @public
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

/**
 * @public
 * @enum
 */
export const JDBCConnectionType = {
  mysql: "mysql",
  oracle: "oracle",
  postgresql: "postgresql",
  redshift: "redshift",
  sqlserver: "sqlserver",
} as const;

/**
 * @public
 */
export type JDBCConnectionType = (typeof JDBCConnectionType)[keyof typeof JDBCConnectionType];

/**
 * @public
 * <p>Specifies the direct JDBC source connection.</p>
 */
export interface DirectJDBCSource {
  /**
   * <p>The name of the JDBC source connection.</p>
   */
  Name: string | undefined;

  /**
   * <p>The database of the JDBC source connection.</p>
   */
  Database: string | undefined;

  /**
   * <p>The table of the JDBC source connection.</p>
   */
  Table: string | undefined;

  /**
   * <p>The connection name of the JDBC source.</p>
   */
  ConnectionName: string | undefined;

  /**
   * <p>The connection type of the JDBC source.</p>
   */
  ConnectionType: JDBCConnectionType | string | undefined;

  /**
   * <p>The temp directory of the JDBC Redshift source.</p>
   */
  RedshiftTmpDir?: string;
}

/**
 * @public
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

/**
 * @public
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

/**
 * @public
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

/**
 * @public
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

/**
 * @public
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

/**
 * @public
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

/**
 * @public
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

/**
 * @public
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
   *          <p>The <code>DropNullFields</code> transform removes custom null values only if both the value of the null placeholder and the datatype match the data.</p>
   */
  NullTextList?: NullValueField[];
}

/**
 * @public
 * @enum
 */
export const ParamType = {
  BOOL: "bool",
  COMPLEX: "complex",
  FLOAT: "float",
  INT: "int",
  LIST: "list",
  NULL: "null",
  STR: "str",
} as const;

/**
 * @public
 */
export type ParamType = (typeof ParamType)[keyof typeof ParamType];

/**
 * @public
 * <p>Specifies the parameters in the config file of the dynamic transform.</p>
 */
export interface TransformConfigParameter {
  /**
   * <p>Specifies the name of the parameter in the config file of the dynamic transform.</p>
   */
  Name: string | undefined;

  /**
   * <p>Specifies the parameter type in the config file of the dynamic transform.</p>
   */
  Type: ParamType | string | undefined;

  /**
   * <p>Specifies the validation rule in the config file of the dynamic transform.</p>
   */
  ValidationRule?: string;

  /**
   * <p>Specifies the validation message in the config file of the dynamic transform.</p>
   */
  ValidationMessage?: string;

  /**
   * <p>Specifies the value of the parameter in the config file of the dynamic transform.</p>
   */
  Value?: string[];

  /**
   * <p>Specifies the list type of the parameter in the config file of the dynamic transform.</p>
   */
  ListType?: ParamType | string;

  /**
   * <p>Specifies whether the parameter is optional or not in the config file of the dynamic transform.</p>
   */
  IsOptional?: boolean;
}

/**
 * @public
 * <p>Specifies the set of parameters needed to perform the dynamic transform.</p>
 */
export interface DynamicTransform {
  /**
   * <p>Specifies the name of the dynamic transform.</p>
   */
  Name: string | undefined;

  /**
   * <p>Specifies the name of the dynamic transform as it appears in the Glue Studio visual editor.</p>
   */
  TransformName: string | undefined;

  /**
   * <p>Specifies the inputs for the dynamic transform that are required.</p>
   */
  Inputs: string[] | undefined;

  /**
   * <p>Specifies the parameters of the dynamic transform.</p>
   */
  Parameters?: TransformConfigParameter[];

  /**
   * <p>Specifies the name of the function of the dynamic transform.</p>
   */
  FunctionName: string | undefined;

  /**
   * <p>Specifies the path of the dynamic transform source and config files.</p>
   */
  Path: string | undefined;

  /**
   * <p>This field is not used and will be deprecated in future release.</p>
   */
  Version?: string;

  /**
   * <p>Specifies the data schema for the dynamic transform.</p>
   */
  OutputSchemas?: GlueSchema[];
}

/**
 * @public
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

/**
 * @public
 * @enum
 */
export const DQTransformOutput = {
  EvaluationResults: "EvaluationResults",
  PrimaryInput: "PrimaryInput",
} as const;

/**
 * @public
 */
export type DQTransformOutput = (typeof DQTransformOutput)[keyof typeof DQTransformOutput];

/**
 * @public
 * <p>Options to configure how your data quality evaluation results are published.</p>
 */
export interface DQResultsPublishingOptions {
  /**
   * <p>The context of the evaluation.</p>
   */
  EvaluationContext?: string;

  /**
   * <p>The Amazon S3 prefix prepended to the results.</p>
   */
  ResultsS3Prefix?: string;

  /**
   * <p>Enable metrics for your data quality results.</p>
   */
  CloudWatchMetricsEnabled?: boolean;

  /**
   * <p>Enable publishing for your data quality results.</p>
   */
  ResultsPublishingEnabled?: boolean;
}

/**
 * @public
 * @enum
 */
export const DQStopJobOnFailureTiming = {
  AfterDataLoad: "AfterDataLoad",
  Immediate: "Immediate",
} as const;

/**
 * @public
 */
export type DQStopJobOnFailureTiming = (typeof DQStopJobOnFailureTiming)[keyof typeof DQStopJobOnFailureTiming];

/**
 * @public
 * <p>Options to configure how your job will stop if your data quality evaluation fails.</p>
 */
export interface DQStopJobOnFailureOptions {
  /**
   * <p>When to stop job if your data quality evaluation fails. Options are Immediate or AfterDataLoad.</p>
   */
  StopJobOnFailureTiming?: DQStopJobOnFailureTiming | string;
}

/**
 * @public
 * <p>Specifies your data quality evaluation criteria.</p>
 */
export interface EvaluateDataQuality {
  /**
   * <p>The name of the data quality evaluation.</p>
   */
  Name: string | undefined;

  /**
   * <p>The inputs of your data quality evaluation.</p>
   */
  Inputs: string[] | undefined;

  /**
   * <p>The ruleset for your data quality evaluation.</p>
   */
  Ruleset: string | undefined;

  /**
   * <p>The output of your data quality evaluation.</p>
   */
  Output?: DQTransformOutput | string;

  /**
   * <p>Options to configure how your results are published.</p>
   */
  PublishingOptions?: DQResultsPublishingOptions;

  /**
   * <p>Options to configure how your job will stop if your data quality evaluation fails.</p>
   */
  StopJobOnFailureOptions?: DQStopJobOnFailureOptions;
}

/**
 * @public
 * <p>Specifies your data quality evaluation criteria.</p>
 */
export interface EvaluateDataQualityMultiFrame {
  /**
   * <p>The name of the data quality evaluation.</p>
   */
  Name: string | undefined;

  /**
   * <p>The inputs of your data quality evaluation. The first input in this list is the primary data source.</p>
   */
  Inputs: string[] | undefined;

  /**
   * <p>The aliases of all data sources except primary.</p>
   */
  AdditionalDataSources?: Record<string, string>;

  /**
   * <p>The ruleset for your data quality evaluation.</p>
   */
  Ruleset: string | undefined;

  /**
   * <p>Options to configure how your results are published.</p>
   */
  PublishingOptions?: DQResultsPublishingOptions;

  /**
   * <p>Options to configure runtime behavior of the transform.</p>
   */
  AdditionalOptions?: Record<string, string>;

  /**
   * <p>Options to configure how your job will stop if your data quality evaluation fails.</p>
   */
  StopJobOnFailureOptions?: DQStopJobOnFailureOptions;
}

/**
 * @public
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

/**
 * @public
 * @enum
 */
export const FilterOperation = {
  EQ: "EQ",
  GT: "GT",
  GTE: "GTE",
  ISNULL: "ISNULL",
  LT: "LT",
  LTE: "LTE",
  REGEX: "REGEX",
} as const;

/**
 * @public
 */
export type FilterOperation = (typeof FilterOperation)[keyof typeof FilterOperation];

/**
 * @public
 * @enum
 */
export const FilterValueType = {
  COLUMNEXTRACTED: "COLUMNEXTRACTED",
  CONSTANT: "CONSTANT",
} as const;

/**
 * @public
 */
export type FilterValueType = (typeof FilterValueType)[keyof typeof FilterValueType];

/**
 * @public
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

/**
 * @public
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

/**
 * @public
 * @enum
 */
export const FilterLogicalOperator = {
  AND: "AND",
  OR: "OR",
} as const;

/**
 * @public
 */
export type FilterLogicalOperator = (typeof FilterLogicalOperator)[keyof typeof FilterLogicalOperator];

/**
 * @public
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

/**
 * @public
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

/**
 * @public
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

/**
 * @public
 * @enum
 */
export const UpdateCatalogBehavior = {
  LOG: "LOG",
  UPDATE_IN_DATABASE: "UPDATE_IN_DATABASE",
} as const;

/**
 * @public
 */
export type UpdateCatalogBehavior = (typeof UpdateCatalogBehavior)[keyof typeof UpdateCatalogBehavior];

/**
 * @public
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

/**
 * @public
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

/**
 * @public
 * @enum
 */
export const JDBCDataType = {
  ARRAY: "ARRAY",
  BIGINT: "BIGINT",
  BINARY: "BINARY",
  BIT: "BIT",
  BLOB: "BLOB",
  BOOLEAN: "BOOLEAN",
  CHAR: "CHAR",
  CLOB: "CLOB",
  DATALINK: "DATALINK",
  DATE: "DATE",
  DECIMAL: "DECIMAL",
  DISTINCT: "DISTINCT",
  DOUBLE: "DOUBLE",
  FLOAT: "FLOAT",
  INTEGER: "INTEGER",
  JAVA_OBJECT: "JAVA_OBJECT",
  LONGNVARCHAR: "LONGNVARCHAR",
  LONGVARBINARY: "LONGVARBINARY",
  LONGVARCHAR: "LONGVARCHAR",
  NCHAR: "NCHAR",
  NCLOB: "NCLOB",
  NULL: "NULL",
  NUMERIC: "NUMERIC",
  NVARCHAR: "NVARCHAR",
  OTHER: "OTHER",
  REAL: "REAL",
  REF: "REF",
  REF_CURSOR: "REF_CURSOR",
  ROWID: "ROWID",
  SMALLINT: "SMALLINT",
  SQLXML: "SQLXML",
  STRUCT: "STRUCT",
  TIME: "TIME",
  TIMESTAMP: "TIMESTAMP",
  TIMESTAMP_WITH_TIMEZONE: "TIMESTAMP_WITH_TIMEZONE",
  TIME_WITH_TIMEZONE: "TIME_WITH_TIMEZONE",
  TINYINT: "TINYINT",
  VARBINARY: "VARBINARY",
  VARCHAR: "VARCHAR",
} as const;

/**
 * @public
 */
export type JDBCDataType = (typeof JDBCDataType)[keyof typeof JDBCDataType];

/**
 * @public
 * @enum
 */
export const GlueRecordType = {
  BIGDECIMAL: "BIGDECIMAL",
  BYTE: "BYTE",
  DATE: "DATE",
  DOUBLE: "DOUBLE",
  FLOAT: "FLOAT",
  INT: "INT",
  LONG: "LONG",
  SHORT: "SHORT",
  STRING: "STRING",
  TIMESTAMP: "TIMESTAMP",
} as const;

/**
 * @public
 */
export type GlueRecordType = (typeof GlueRecordType)[keyof typeof GlueRecordType];

/**
 * @public
 * <p>Additional connection options for the connector.</p>
 */
export interface JDBCConnectorOptions {
  /**
   * <p>Extra condition clause to filter data from source. For example:</p>
   *          <p>
   *             <code>BillingCity='Mountain View'</code>
   *          </p>
   *          <p>When using a query instead of a table name, you should validate that the query works with the specified <code>filterPredicate</code>.</p>
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
   * <p>Custom data type mapping that builds a mapping from a JDBC data type to an Glue data type. For example, the option <code>"dataTypeMapping":\{"FLOAT":"STRING"\}</code> maps data fields of JDBC type <code>FLOAT</code> into the Java <code>String</code> type by calling the <code>ResultSet.getString()</code> method of the driver, and uses it to build the Glue record. The <code>ResultSet</code> object is implemented by each driver, so the behavior is specific to the driver you use. Refer to the documentation for your JDBC driver to understand how the driver performs the conversions.</p>
   */
  DataTypeMapping?: Record<string, GlueRecordType | string>;
}

/**
 * @public
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

/**
 * @public
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

/**
 * @public
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

/**
 * @public
 * @enum
 */
export const JoinType = {
  EQUIJOIN: "equijoin",
  LEFT: "left",
  LEFT_ANTI: "leftanti",
  LEFT_SEMI: "leftsemi",
  OUTER: "outer",
  RIGHT: "right",
} as const;

/**
 * @public
 */
export type JoinType = (typeof JoinType)[keyof typeof JoinType];

/**
 * @public
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

/**
 * @public
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

/**
 * @public
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

/**
 * @public
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

/**
 * @public
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

/**
 * @public
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

/**
 * @public
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

/**
 * @public
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

/**
 * @public
 * @enum
 */
export const PiiType = {
  ColumnAudit: "ColumnAudit",
  ColumnMasking: "ColumnMasking",
  RowAudit: "RowAudit",
  RowMasking: "RowMasking",
} as const;

/**
 * @public
 */
export type PiiType = (typeof PiiType)[keyof typeof PiiType];

/**
 * @public
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

/**
 * @public
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

/**
 * @public
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

/**
 * @public
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

/**
 * @public
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

/**
 * @public
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

/**
 * @public
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

/**
 * @public
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

/**
 * @public
 * <p>Specifies a Delta Lake data source that is registered in the Glue Data Catalog. The data source must be stored in Amazon S3.</p>
 */
export interface S3CatalogDeltaSource {
  /**
   * <p>The name of the Delta Lake data source.</p>
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

  /**
   * <p>Specifies additional connection options.</p>
   */
  AdditionalDeltaOptions?: Record<string, string>;

  /**
   * <p>Specifies the data schema for the Delta Lake source.</p>
   */
  OutputSchemas?: GlueSchema[];
}

/**
 * @public
 * <p>Specifies a Hudi data source that is registered in the Glue Data Catalog. The Hudi data source must be stored in Amazon S3.</p>
 */
export interface S3CatalogHudiSource {
  /**
   * <p>The name of the Hudi data source.</p>
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

  /**
   * <p>Specifies additional connection options.</p>
   */
  AdditionalHudiOptions?: Record<string, string>;

  /**
   * <p>Specifies the data schema for the Hudi source.</p>
   */
  OutputSchemas?: GlueSchema[];
}

/**
 * @public
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

/**
 * @public
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

/**
 * @public
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

/**
 * @public
 * @enum
 */
export const CompressionType = {
  BZIP2: "bzip2",
  GZIP: "gzip",
} as const;

/**
 * @public
 */
export type CompressionType = (typeof CompressionType)[keyof typeof CompressionType];

/**
 * @public
 * @enum
 */
export const QuoteChar = {
  DISABLED: "disabled",
  QUILLEMET: "quillemet",
  QUOTE: "quote",
  SINGLE_QUOTE: "single_quote",
} as const;

/**
 * @public
 */
export type QuoteChar = (typeof QuoteChar)[keyof typeof QuoteChar];

/**
 * @public
 * @enum
 */
export const Separator = {
  COMMA: "comma",
  CTRLA: "ctrla",
  PIPE: "pipe",
  SEMICOLON: "semicolon",
  TAB: "tab",
} as const;

/**
 * @public
 */
export type Separator = (typeof Separator)[keyof typeof Separator];

/**
 * @public
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

/**
 * @public
 * <p>Specifies a target that writes to a Delta Lake data source in the Glue Data Catalog.</p>
 */
export interface S3DeltaCatalogTarget {
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
   * <p>Specifies additional connection options for the connector.</p>
   */
  AdditionalOptions?: Record<string, string>;

  /**
   * <p>A policy that specifies update behavior for the crawler.</p>
   */
  SchemaChangePolicy?: CatalogSchemaChangePolicy;
}

/**
 * @public
 * @enum
 */
export const DeltaTargetCompressionType = {
  SNAPPY: "snappy",
  UNCOMPRESSED: "uncompressed",
} as const;

/**
 * @public
 */
export type DeltaTargetCompressionType = (typeof DeltaTargetCompressionType)[keyof typeof DeltaTargetCompressionType];

/**
 * @public
 * @enum
 */
export const TargetFormat = {
  AVRO: "avro",
  CSV: "csv",
  DELTA: "delta",
  HUDI: "hudi",
  JSON: "json",
  ORC: "orc",
  PARQUET: "parquet",
} as const;

/**
 * @public
 */
export type TargetFormat = (typeof TargetFormat)[keyof typeof TargetFormat];

/**
 * @public
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

/**
 * @public
 * <p>Specifies a target that writes to a Delta Lake data source in Amazon S3.</p>
 */
export interface S3DeltaDirectTarget {
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
   * <p>The Amazon S3 path of your Delta Lake data source to write to.</p>
   */
  Path: string | undefined;

  /**
   * <p>Specifies how the data is compressed. This is generally not necessary if the data has a standard file extension. Possible values are <code>"gzip"</code> and <code>"bzip"</code>).</p>
   */
  Compression: DeltaTargetCompressionType | string | undefined;

  /**
   * <p>Specifies the data output format for the target.</p>
   */
  Format: TargetFormat | string | undefined;

  /**
   * <p>Specifies additional connection options for the connector.</p>
   */
  AdditionalOptions?: Record<string, string>;

  /**
   * <p>A policy that specifies update behavior for the crawler.</p>
   */
  SchemaChangePolicy?: DirectSchemaChangePolicy;
}

/**
 * @public
 * <p>Specifies a Delta Lake data source stored in Amazon S3.</p>
 */
export interface S3DeltaSource {
  /**
   * <p>The name of the Delta Lake source.</p>
   */
  Name: string | undefined;

  /**
   * <p>A list of the Amazon S3 paths to read from.</p>
   */
  Paths: string[] | undefined;

  /**
   * <p>Specifies additional connection options.</p>
   */
  AdditionalDeltaOptions?: Record<string, string>;

  /**
   * <p>Specifies additional options for the connector.</p>
   */
  AdditionalOptions?: S3DirectSourceAdditionalOptions;

  /**
   * <p>Specifies the data schema for the Delta Lake source.</p>
   */
  OutputSchemas?: GlueSchema[];
}

/**
 * @public
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

/**
 * @public
 * @enum
 */
export const ParquetCompressionType = {
  GZIP: "gzip",
  LZO: "lzo",
  NONE: "none",
  SNAPPY: "snappy",
  UNCOMPRESSED: "uncompressed",
} as const;

/**
 * @public
 */
export type ParquetCompressionType = (typeof ParquetCompressionType)[keyof typeof ParquetCompressionType];

/**
 * @public
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

/**
 * @public
 * <p>Specifies a target that writes to a Hudi data source in the Glue Data Catalog.</p>
 */
export interface S3HudiCatalogTarget {
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
   * <p>Specifies additional connection options for the connector.</p>
   */
  AdditionalOptions: Record<string, string> | undefined;

  /**
   * <p>A policy that specifies update behavior for the crawler.</p>
   */
  SchemaChangePolicy?: CatalogSchemaChangePolicy;
}

/**
 * @public
 * @enum
 */
export const HudiTargetCompressionType = {
  GZIP: "gzip",
  LZO: "lzo",
  SNAPPY: "snappy",
  UNCOMPRESSED: "uncompressed",
} as const;

/**
 * @public
 */
export type HudiTargetCompressionType = (typeof HudiTargetCompressionType)[keyof typeof HudiTargetCompressionType];

/**
 * @public
 * <p>Specifies a target that writes to a Hudi data source in Amazon S3.</p>
 */
export interface S3HudiDirectTarget {
  /**
   * <p>The name of the data target.</p>
   */
  Name: string | undefined;

  /**
   * <p>The nodes that are inputs to the data target.</p>
   */
  Inputs: string[] | undefined;

  /**
   * <p>The Amazon S3 path of your Hudi data source to write to.</p>
   */
  Path: string | undefined;

  /**
   * <p>Specifies how the data is compressed. This is generally not necessary if the data has a standard file extension. Possible values are <code>"gzip"</code> and <code>"bzip"</code>).</p>
   */
  Compression: HudiTargetCompressionType | string | undefined;

  /**
   * <p>Specifies native partitioning using a sequence of keys.</p>
   */
  PartitionKeys?: string[][];

  /**
   * <p>Specifies the data output format for the target.</p>
   */
  Format: TargetFormat | string | undefined;

  /**
   * <p>Specifies additional connection options for the connector.</p>
   */
  AdditionalOptions: Record<string, string> | undefined;

  /**
   * <p>A policy that specifies update behavior for the crawler.</p>
   */
  SchemaChangePolicy?: DirectSchemaChangePolicy;
}

/**
 * @public
 * <p>Specifies a Hudi data source stored in Amazon S3.</p>
 */
export interface S3HudiSource {
  /**
   * <p>The name of the Hudi source.</p>
   */
  Name: string | undefined;

  /**
   * <p>A list of the Amazon S3 paths to read from.</p>
   */
  Paths: string[] | undefined;

  /**
   * <p>Specifies additional connection options.</p>
   */
  AdditionalHudiOptions?: Record<string, string>;

  /**
   * <p>Specifies additional options for the connector.</p>
   */
  AdditionalOptions?: S3DirectSourceAdditionalOptions;

  /**
   * <p>Specifies the data schema for the Hudi source.</p>
   */
  OutputSchemas?: GlueSchema[];
}

/**
 * @public
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

/**
 * @public
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

/**
 * @public
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

/**
 * @public
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

/**
 * @public
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

/**
 * @public
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

/**
 * @public
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

/**
 * @public
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
   *          <p>
   *             <code>select *
   * from SqlName</code>
   *          </p>
   *          <p>and that gets data from MyDataSource.</p>
   */
  SqlAliases: SqlAlias[] | undefined;

  /**
   * <p>Specifies the data schema for the SparkSQL transform.</p>
   */
  OutputSchemas?: GlueSchema[];
}

/**
 * @public
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

/**
 * @public
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

/**
 * @public
 * @enum
 */
export const UnionType = {
  ALL: "ALL",
  DISTINCT: "DISTINCT",
} as const;

/**
 * @public
 */
export type UnionType = (typeof UnionType)[keyof typeof UnionType];

/**
 * @public
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
   *          <p>Specify <code>ALL</code> to join all rows from data sources to the resulting DynamicFrame. The resulting union does not remove duplicate rows.</p>
   *          <p>Specify <code>DISTINCT</code> to remove duplicate rows in the resulting DynamicFrame.</p>
   */
  UnionType: UnionType | string | undefined;
}

/**
 * @public
 * <p>Specifies code that runs when a job is run.</p>
 */
export interface JobCommand {
  /**
   * <p>The name of the job command. For an Apache Spark ETL job, this must be
   *       <code>glueetl</code>. For a Python shell job, it must be <code>pythonshell</code>.
   *       For an Apache Spark streaming ETL job, this must be <code>gluestreaming</code>. For a Ray job,
   *       this must be <code>glueray</code>.</p>
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

  /**
   * <p>In Ray jobs, Runtime is used to specify the versions of Ray, Python and additional
   *       libraries available in your environment. This field is not used in other job types. For
   *       supported runtime environment values, see <a href="https://docs.aws.amazon.com/glue/latest/dg/author-job-ray-runtimes.html">Working with Ray jobs</a>
   *       in the Glue Developer Guide.</p>
   */
  Runtime?: string;
}

/**
 * @public
 * <p>Specifies the connections used by a job.</p>
 */
export interface ConnectionsList {
  /**
   * <p>A list of connections used by the job.</p>
   */
  Connections?: string[];
}

/**
 * @public
 * @enum
 */
export const ExecutionClass = {
  FLEX: "FLEX",
  STANDARD: "STANDARD",
} as const;

/**
 * @public
 */
export type ExecutionClass = (typeof ExecutionClass)[keyof typeof ExecutionClass];

/**
 * @public
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

/**
 * @public
 * @enum
 */
export const SourceControlAuthStrategy = {
  AWS_SECRETS_MANAGER: "AWS_SECRETS_MANAGER",
  PERSONAL_ACCESS_TOKEN: "PERSONAL_ACCESS_TOKEN",
} as const;

/**
 * @public
 */
export type SourceControlAuthStrategy = (typeof SourceControlAuthStrategy)[keyof typeof SourceControlAuthStrategy];

/**
 * @public
 * @enum
 */
export const SourceControlProvider = {
  AWS_CODE_COMMIT: "AWS_CODE_COMMIT",
  GITHUB: "GITHUB",
} as const;

/**
 * @public
 */
export type SourceControlProvider = (typeof SourceControlProvider)[keyof typeof SourceControlProvider];

/**
 * @public
 * <p>The details for a source control configuration for a job, allowing synchronization of job artifacts to or from a remote repository.</p>
 */
export interface SourceControlDetails {
  /**
   * <p>The provider for the remote repository.</p>
   */
  Provider?: SourceControlProvider | string;

  /**
   * <p>The name of the remote repository that contains the job artifacts.</p>
   */
  Repository?: string;

  /**
   * <p>The owner of the remote repository that contains the job artifacts.</p>
   */
  Owner?: string;

  /**
   * <p>An optional branch in the remote repository.</p>
   */
  Branch?: string;

  /**
   * <p>An optional folder in the remote repository.</p>
   */
  Folder?: string;

  /**
   * <p>The last commit ID for a commit in the remote repository.</p>
   */
  LastCommitId?: string;

  /**
   * <p>The type of authentication, which can be an authentication token stored in Amazon Web Services Secrets Manager, or a personal access token.</p>
   */
  AuthStrategy?: SourceControlAuthStrategy | string;

  /**
   * <p>The value of an authorization token.</p>
   */
  AuthToken?: string;
}

/**
 * @public
 */
export interface BatchGetPartitionRequest {
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
   * <p>A list of partition values identifying the partitions to retrieve.</p>
   */
  PartitionsToGet: PartitionValueList[] | undefined;
}

/**
 * @public
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

/**
 * @public
 */
export interface BatchGetPartitionResponse {
  /**
   * <p>A list of the requested partitions.</p>
   */
  Partitions?: Partition[];

  /**
   * <p>A list of the partition values in the request for which partitions were not
   *       returned.</p>
   */
  UnprocessedKeys?: PartitionValueList[];
}

/**
 * @public
 * @enum
 */
export const FederationSourceErrorCode = {
  InternalServiceException: "InternalServiceException",
  InvalidResponseException: "InvalidResponseException",
  OperationNotSupportedException: "OperationNotSupportedException",
  OperationTimeoutException: "OperationTimeoutException",
  ThrottlingException: "ThrottlingException",
} as const;

/**
 * @public
 */
export type FederationSourceErrorCode = (typeof FederationSourceErrorCode)[keyof typeof FederationSourceErrorCode];

/**
 * @public
 * <p>A federation source failed.</p>
 */
export class FederationSourceException extends __BaseException {
  readonly name: "FederationSourceException" = "FederationSourceException";
  readonly $fault: "client" = "client";
  /**
   * <p>The error code of the problem.</p>
   */
  FederationSourceErrorCode?: FederationSourceErrorCode | string;

  /**
   * <p>The message describing the problem.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<FederationSourceException, __BaseException>) {
    super({
      name: "FederationSourceException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, FederationSourceException.prototype);
    this.FederationSourceErrorCode = opts.FederationSourceErrorCode;
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export class FederationSourceRetryableException extends __BaseException {
  readonly name: "FederationSourceRetryableException" = "FederationSourceRetryableException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<FederationSourceRetryableException, __BaseException>) {
    super({
      name: "FederationSourceRetryableException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, FederationSourceRetryableException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
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
 * @public
 */
export interface BatchGetTriggersRequest {
  /**
   * <p>A list of trigger names, which may be the names returned from the <code>ListTriggers</code> operation.</p>
   */
  TriggerNames: string[] | undefined;
}

/**
 * @public
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

/**
 * @public
 * @enum
 */
export const CrawlState = {
  CANCELLED: "CANCELLED",
  CANCELLING: "CANCELLING",
  ERROR: "ERROR",
  FAILED: "FAILED",
  RUNNING: "RUNNING",
  SUCCEEDED: "SUCCEEDED",
} as const;

/**
 * @public
 */
export type CrawlState = (typeof CrawlState)[keyof typeof CrawlState];

/**
 * @public
 * @enum
 */
export const LogicalOperator = {
  EQUALS: "EQUALS",
} as const;

/**
 * @public
 */
export type LogicalOperator = (typeof LogicalOperator)[keyof typeof LogicalOperator];

/**
 * @public
 * @enum
 */
export const JobRunState = {
  ERROR: "ERROR",
  FAILED: "FAILED",
  RUNNING: "RUNNING",
  STARTING: "STARTING",
  STOPPED: "STOPPED",
  STOPPING: "STOPPING",
  SUCCEEDED: "SUCCEEDED",
  TIMEOUT: "TIMEOUT",
  WAITING: "WAITING",
} as const;

/**
 * @public
 */
export type JobRunState = (typeof JobRunState)[keyof typeof JobRunState];

/**
 * @public
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

/**
 * @public
 * @enum
 */
export const Logical = {
  AND: "AND",
  ANY: "ANY",
} as const;

/**
 * @public
 */
export type Logical = (typeof Logical)[keyof typeof Logical];

/**
 * @public
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

/**
 * @public
 * @enum
 */
export const TriggerState = {
  ACTIVATED: "ACTIVATED",
  ACTIVATING: "ACTIVATING",
  CREATED: "CREATED",
  CREATING: "CREATING",
  DEACTIVATED: "DEACTIVATED",
  DEACTIVATING: "DEACTIVATING",
  DELETING: "DELETING",
  UPDATING: "UPDATING",
} as const;

/**
 * @public
 */
export type TriggerState = (typeof TriggerState)[keyof typeof TriggerState];

/**
 * @public
 * @enum
 */
export const TriggerType = {
  CONDITIONAL: "CONDITIONAL",
  EVENT: "EVENT",
  ON_DEMAND: "ON_DEMAND",
  SCHEDULED: "SCHEDULED",
} as const;

/**
 * @public
 */
export type TriggerType = (typeof TriggerType)[keyof typeof TriggerType];

/**
 * @public
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

/**
 * @public
 */
export interface BatchGetTriggersResponse {
  /**
   * <p>A list of trigger definitions.</p>
   */
  Triggers?: Trigger[];

  /**
   * <p>A list of names of triggers not found.</p>
   */
  TriggersNotFound?: string[];
}

/**
 * @public
 */
export interface BatchGetWorkflowsRequest {
  /**
   * <p>A list of workflow names, which may be the names returned from the <code>ListWorkflows</code> operation.</p>
   */
  Names: string[] | undefined;

  /**
   * <p>Specifies whether to include a graph when returning the workflow resource metadata.</p>
   */
  IncludeGraph?: boolean;
}

/**
 * @public
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

/**
 * @public
 * <p>An edge represents a directed connection between two Glue components that are part of the workflow the
 *       edge belongs to.</p>
 */
export interface Edge {
  /**
   * <p>The unique of the node within the workflow where the edge starts.</p>
   */
  SourceId?: string;

  /**
   * <p>The unique of the node within the workflow where the edge ends.</p>
   */
  DestinationId?: string;
}

/**
 * @public
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

/**
 * @public
 * <p>The details of a Crawler node present in the workflow.</p>
 */
export interface CrawlerNodeDetails {
  /**
   * <p>A list of crawls represented by the crawl node.</p>
   */
  Crawls?: Crawl[];
}

/**
 * @public
 * <p>A job run that was used in the predicate of a conditional trigger
 *       that triggered this job run.</p>
 */
export interface Predecessor {
  /**
   * <p>The name of the job definition used by the predecessor job run.</p>
   */
  JobName?: string;

  /**
   * <p>The job-run ID of the predecessor job run.</p>
   */
  RunId?: string;
}

/**
 * @public
 * <p>Contains information about a job run.</p>
 */
export interface JobRun {
  /**
   * <p>The ID of this job run.</p>
   */
  Id?: string;

  /**
   * <p>The number of the attempt to run this job.</p>
   */
  Attempt?: number;

  /**
   * <p>The ID of the previous run of this job. For example, the <code>JobRunId</code> specified
   *       in the <code>StartJobRun</code> action.</p>
   */
  PreviousRunId?: string;

  /**
   * <p>The name of the trigger that started this job run.</p>
   */
  TriggerName?: string;

  /**
   * <p>The name of the job definition being used in this run.</p>
   */
  JobName?: string;

  /**
   * <p>The date and time at which this job run was started.</p>
   */
  StartedOn?: Date;

  /**
   * <p>The last time that this job run was modified.</p>
   */
  LastModifiedOn?: Date;

  /**
   * <p>The date and time that this job run completed.</p>
   */
  CompletedOn?: Date;

  /**
   * <p>The current state of the job run. For more information about the statuses of jobs that have terminated abnormally, see <a href="https://docs.aws.amazon.com/glue/latest/dg/job-run-statuses.html">Glue Job Run Statuses</a>.</p>
   */
  JobRunState?: JobRunState | string;

  /**
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
   * <p>An error message associated with this job run.</p>
   */
  ErrorMessage?: string;

  /**
   * <p>A list of predecessors to this job run.</p>
   */
  PredecessorRuns?: Predecessor[];

  /**
   * @deprecated
   *
   * <p>This field is deprecated. Use <code>MaxCapacity</code> instead.</p>
   *          <p>The number of Glue data processing units (DPUs) allocated to this JobRun.
   *       From 2 to 100 DPUs can be allocated; the default is 10. A DPU is a relative measure
   *       of processing power that consists of 4 vCPUs of compute capacity and 16 GB of memory.
   *       For more information, see the <a href="https://aws.amazon.com/glue/pricing/">Glue
   *         pricing page</a>.</p>
   */
  AllocatedCapacity?: number;

  /**
   * <p>The amount of time (in seconds) that the job run consumed resources.</p>
   */
  ExecutionTime?: number;

  /**
   * <p>The <code>JobRun</code> timeout in minutes. This is the maximum time that a job run can
   *       consume resources before it is terminated and enters <code>TIMEOUT</code> status. This value overrides the timeout value set in the parent job.</p>
   *          <p>Streaming jobs do not have a timeout. The default for non-streaming jobs is 2,880 minutes (48 hours).</p>
   */
  Timeout?: number;

  /**
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
   * <p>The type of predefined worker that is allocated when a job runs. Accepts a value of
   *       Standard, G.1X, G.2X, or G.025X for Spark jobs. Accepts the value Z.2X for Ray jobs.</p>
   *          <ul>
   *             <li>
   *                <p>For the <code>Standard</code> worker type, each worker provides 4 vCPU, 16 GB of memory and a 50GB disk, and 2 executors per worker.</p>
   *             </li>
   *             <li>
   *                <p>For the <code>G.1X</code> worker type, each worker maps to 1 DPU (4 vCPU, 16 GB of memory, 64 GB disk), and provides 1 executor per worker. We recommend this worker type for memory-intensive jobs.</p>
   *             </li>
   *             <li>
   *                <p>For the <code>G.2X</code> worker type, each worker maps to 2 DPU (8 vCPU, 32 GB of memory, 128 GB disk), and provides 1 executor per worker. We recommend this worker type for memory-intensive jobs.</p>
   *             </li>
   *             <li>
   *                <p>For the <code>G.025X</code> worker type, each worker maps to 0.25 DPU (2 vCPU, 4 GB of memory, 64 GB disk), and provides 1 executor per worker. We recommend this worker type for low volume streaming jobs. This worker type is only available for Glue version 3.0 streaming jobs.</p>
   *             </li>
   *             <li>
   *                <p>For the <code>Z.2X</code> worker type, each worker maps to 2 M-DPU (8vCPU, 64 GB of m
   *           emory, 128 GB disk), and provides up to 8 Ray workers (one per vCPU) based on the
   *           autoscaler.</p>
   *             </li>
   *          </ul>
   */
  WorkerType?: WorkerType | string;

  /**
   * <p>The number of workers of a defined <code>workerType</code> that are allocated when a job runs.</p>
   */
  NumberOfWorkers?: number;

  /**
   * <p>The name of the <code>SecurityConfiguration</code> structure to be used with this job
   *       run.</p>
   */
  SecurityConfiguration?: string;

  /**
   * <p>The name of the log group for secure logging that can be server-side encrypted in Amazon
   *       CloudWatch using KMS. This name can be <code>/aws-glue/jobs/</code>, in which case the
   *       default encryption is <code>NONE</code>. If you add a role name and
   *       <code>SecurityConfiguration</code> name (in other words,
   *       <code>/aws-glue/jobs-yourRoleName-yourSecurityConfigurationName/</code>), then that security
   *       configuration is used to encrypt the log group.</p>
   */
  LogGroupName?: string;

  /**
   * <p>Specifies configuration properties of a job run notification.</p>
   */
  NotificationProperty?: NotificationProperty;

  /**
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
   * <p>This field populates only for Auto Scaling job runs, and represents the total time each executor ran during the lifecycle of a job run in seconds, multiplied by a DPU factor (1 for <code>G.1X</code>, 2 for <code>G.2X</code>, or 0.25 for <code>G.025X</code> workers). This value may be different than the <code>executionEngineRuntime</code> * <code>MaxCapacity</code> as in the case of Auto Scaling jobs, as the number of executors running at a given time may be less than the <code>MaxCapacity</code>. Therefore, it is possible that the value of <code>DPUSeconds</code> is less than <code>executionEngineRuntime</code> * <code>MaxCapacity</code>.</p>
   */
  DPUSeconds?: number;

  /**
   * <p>Indicates whether the job is run with a standard or flexible execution class. The standard execution-class is ideal for time-sensitive workloads that require fast job startup and dedicated resources.</p>
   *          <p>The flexible execution class is appropriate for time-insensitive jobs whose start and completion times may vary. </p>
   *          <p>Only jobs with Glue version 3.0 and above and command type <code>glueetl</code> will be allowed to set <code>ExecutionClass</code> to <code>FLEX</code>. The flexible execution class is available for Spark jobs.</p>
   */
  ExecutionClass?: ExecutionClass | string;
}

/**
 * @public
 * <p>The details of a Job node present in the workflow.</p>
 */
export interface JobNodeDetails {
  /**
   * <p>The information for the job runs represented by the job node.</p>
   */
  JobRuns?: JobRun[];
}

/**
 * @public
 * <p>The details of a Trigger node present in the workflow.</p>
 */
export interface TriggerNodeDetails {
  /**
   * <p>The information of the trigger represented by the trigger node.</p>
   */
  Trigger?: Trigger;
}

/**
 * @public
 * @enum
 */
export const NodeType = {
  CRAWLER: "CRAWLER",
  JOB: "JOB",
  TRIGGER: "TRIGGER",
} as const;

/**
 * @public
 */
export type NodeType = (typeof NodeType)[keyof typeof NodeType];

/**
 * @public
 * <p>A node represents an Glue component (trigger, crawler, or job) on a workflow graph.</p>
 */
export interface Node {
  /**
   * <p>The type of Glue component represented by the node.</p>
   */
  Type?: NodeType | string;

  /**
   * <p>The name of the Glue component represented by the node.</p>
   */
  Name?: string;

  /**
   * <p>The unique Id assigned to the node within the workflow.</p>
   */
  UniqueId?: string;

  /**
   * <p>Details of the Trigger when the node represents a Trigger.</p>
   */
  TriggerDetails?: TriggerNodeDetails;

  /**
   * <p>Details of the Job when the node represents a Job.</p>
   */
  JobDetails?: JobNodeDetails;

  /**
   * <p>Details of the crawler when the node represents a crawler.</p>
   */
  CrawlerDetails?: CrawlerNodeDetails;
}

/**
 * @public
 * <p>A workflow graph represents the complete workflow containing all the Glue components present in the
 *       workflow and all the directed connections between them.</p>
 */
export interface WorkflowGraph {
  /**
   * <p>A list of the the Glue components belong to the workflow represented as nodes.</p>
   */
  Nodes?: Node[];

  /**
   * <p>A list of all the directed connections between the nodes belonging to the workflow.</p>
   */
  Edges?: Edge[];
}

/**
 * @public
 * <p>The batch condition that started the workflow run. Either the number of events in the batch size arrived,
 *       in which case the BatchSize member is non-zero, or the batch window expired, in which case the BatchWindow
 *       member is non-zero.</p>
 */
export interface StartingEventBatchCondition {
  /**
   * <p>Number of events in the batch.</p>
   */
  BatchSize?: number;

  /**
   * <p>Duration of the batch window in seconds.</p>
   */
  BatchWindow?: number;
}

/**
 * @public
 * <p>Workflow run statistics provides statistics about the workflow run.</p>
 */
export interface WorkflowRunStatistics {
  /**
   * <p>Total number of Actions in the workflow run.</p>
   */
  TotalActions?: number;

  /**
   * <p>Total number of Actions that timed out.</p>
   */
  TimeoutActions?: number;

  /**
   * <p>Total number of Actions that have failed.</p>
   */
  FailedActions?: number;

  /**
   * <p>Total number of Actions that have stopped.</p>
   */
  StoppedActions?: number;

  /**
   * <p>Total number of Actions that have succeeded.</p>
   */
  SucceededActions?: number;

  /**
   * <p>Total number Actions in running state.</p>
   */
  RunningActions?: number;

  /**
   * <p>Indicates the count of job runs in the ERROR state in the workflow run.</p>
   */
  ErroredActions?: number;

  /**
   * <p>Indicates the count of job runs in WAITING state in the workflow run.</p>
   */
  WaitingActions?: number;
}

/**
 * @public
 * @enum
 */
export const WorkflowRunStatus = {
  COMPLETED: "COMPLETED",
  ERROR: "ERROR",
  RUNNING: "RUNNING",
  STOPPED: "STOPPED",
  STOPPING: "STOPPING",
} as const;

/**
 * @public
 */
export type WorkflowRunStatus = (typeof WorkflowRunStatus)[keyof typeof WorkflowRunStatus];

/**
 * @public
 * <p>A workflow run is an execution of a workflow providing all the runtime information.</p>
 */
export interface WorkflowRun {
  /**
   * <p>Name of the workflow that was run.</p>
   */
  Name?: string;

  /**
   * <p>The ID of this workflow run.</p>
   */
  WorkflowRunId?: string;

  /**
   * <p>The ID of the previous workflow run.</p>
   */
  PreviousRunId?: string;

  /**
   * <p>The workflow run properties which were set during the run.</p>
   */
  WorkflowRunProperties?: Record<string, string>;

  /**
   * <p>The date and time when the workflow run was started.</p>
   */
  StartedOn?: Date;

  /**
   * <p>The date and time when the workflow run completed.</p>
   */
  CompletedOn?: Date;

  /**
   * <p>The status of the workflow run.</p>
   */
  Status?: WorkflowRunStatus | string;

  /**
   * <p>This error message describes any error that may have occurred in starting the workflow run. Currently the only error message is "Concurrent runs exceeded for workflow: <code>foo</code>."</p>
   */
  ErrorMessage?: string;

  /**
   * <p>The statistics of the run.</p>
   */
  Statistics?: WorkflowRunStatistics;

  /**
   * <p>The graph representing all the Glue components that belong to the workflow as nodes and directed
   *       connections between them as edges.</p>
   */
  Graph?: WorkflowGraph;

  /**
   * <p>The batch condition that started the workflow run.</p>
   */
  StartingEventBatchCondition?: StartingEventBatchCondition;
}

/**
 * @public
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

/**
 * @public
 */
export interface BatchGetWorkflowsResponse {
  /**
   * <p>A list of workflow resource metadata.</p>
   */
  Workflows?: Workflow[];

  /**
   * <p>A list of names of workflows not found.</p>
   */
  MissingWorkflows?: string[];
}

/**
 * @public
 */
export interface BatchStopJobRunRequest {
  /**
   * <p>The name of the job definition for which to stop job runs.</p>
   */
  JobName: string | undefined;

  /**
   * <p>A list of the <code>JobRunIds</code> that should be stopped for that job
   *       definition.</p>
   */
  JobRunIds: string[] | undefined;
}

/**
 * @public
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

/**
 * @public
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

/**
 * @public
 */
export interface BatchStopJobRunResponse {
  /**
   * <p>A list of the JobRuns that were successfully submitted for stopping.</p>
   */
  SuccessfulSubmissions?: BatchStopJobRunSuccessfulSubmission[];

  /**
   * <p>A list of the errors that were encountered in trying to stop <code>JobRuns</code>,
   *       including the <code>JobRunId</code> for which each error was encountered and details about the
   *       error.</p>
   */
  Errors?: BatchStopJobRunError[];
}

/**
 * @public
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

/**
 * @public
 */
export interface BatchUpdatePartitionRequest {
  /**
   * <p>The ID of the catalog in which the partition is to be updated. Currently, this should be
   *       the Amazon Web Services account ID.</p>
   */
  CatalogId?: string;

  /**
   * <p>The name of the metadata database in which the partition is
   *       to be updated.</p>
   */
  DatabaseName: string | undefined;

  /**
   * <p>The name of the metadata table in which the partition is to be updated.</p>
   */
  TableName: string | undefined;

  /**
   * <p>A list of up to 100 <code>BatchUpdatePartitionRequestEntry</code> objects to update.</p>
   */
  Entries: BatchUpdatePartitionRequestEntry[] | undefined;
}

/**
 * @public
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

/**
 * @public
 */
export interface BatchUpdatePartitionResponse {
  /**
   * <p>The errors encountered when trying to update the requested partitions. A list of <code>BatchUpdatePartitionFailureEntry</code> objects.</p>
   */
  Errors?: BatchUpdatePartitionFailureEntry[];
}

/**
 * @public
 */
export interface CancelDataQualityRuleRecommendationRunRequest {
  /**
   * <p>The unique run identifier associated with this run.</p>
   */
  RunId: string | undefined;
}

/**
 * @public
 */
export interface CancelDataQualityRuleRecommendationRunResponse {}

/**
 * @public
 */
export interface CancelDataQualityRulesetEvaluationRunRequest {
  /**
   * <p>The unique run identifier associated with this run.</p>
   */
  RunId: string | undefined;
}

/**
 * @public
 */
export interface CancelDataQualityRulesetEvaluationRunResponse {}

/**
 * @public
 */
export interface CancelMLTaskRunRequest {
  /**
   * <p>The unique identifier of the machine learning transform.</p>
   */
  TransformId: string | undefined;

  /**
   * <p>A unique identifier for the task run.</p>
   */
  TaskRunId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const TaskStatusType = {
  FAILED: "FAILED",
  RUNNING: "RUNNING",
  STARTING: "STARTING",
  STOPPED: "STOPPED",
  STOPPING: "STOPPING",
  SUCCEEDED: "SUCCEEDED",
  TIMEOUT: "TIMEOUT",
} as const;

/**
 * @public
 */
export type TaskStatusType = (typeof TaskStatusType)[keyof typeof TaskStatusType];

/**
 * @public
 */
export interface CancelMLTaskRunResponse {
  /**
   * <p>The unique identifier of the machine learning transform.</p>
   */
  TransformId?: string;

  /**
   * <p>The unique identifier for the task run.</p>
   */
  TaskRunId?: string;

  /**
   * <p>The status for this run.</p>
   */
  Status?: TaskStatusType | string;
}

/**
 * @public
 */
export interface CancelStatementRequest {
  /**
   * <p>The Session ID of the statement to be cancelled.</p>
   */
  SessionId: string | undefined;

  /**
   * <p>The ID of the statement to be cancelled.</p>
   */
  Id: number | undefined;

  /**
   * <p>The origin of the request to cancel the statement.</p>
   */
  RequestOrigin?: string;
}

/**
 * @public
 */
export interface CancelStatementResponse {}

/**
 * @public
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
 * @public
 * @enum
 */
export const DataFormat = {
  AVRO: "AVRO",
  JSON: "JSON",
  PROTOBUF: "PROTOBUF",
} as const;

/**
 * @public
 */
export type DataFormat = (typeof DataFormat)[keyof typeof DataFormat];

/**
 * @public
 */
export interface CheckSchemaVersionValidityInput {
  /**
   * <p>The data format of the schema definition. Currently <code>AVRO</code>, <code>JSON</code> and <code>PROTOBUF</code> are supported.</p>
   */
  DataFormat: DataFormat | string | undefined;

  /**
   * <p>The definition of the schema that has to be validated.</p>
   */
  SchemaDefinition: string | undefined;
}

/**
 * @public
 */
export interface CheckSchemaVersionValidityResponse {
  /**
   * <p>Return true, if the schema is valid and false otherwise.</p>
   */
  Valid?: boolean;

  /**
   * <p>A validation failure error message.</p>
   */
  Error?: string;
}

/**
 * @public
 */
export interface CreateBlueprintRequest {
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

  /**
   * <p>The tags to be applied to this blueprint.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateBlueprintResponse {
  /**
   * <p>Returns the name of the blueprint that was registered.</p>
   */
  Name?: string;
}

/**
 * @public
 * @enum
 */
export const CsvHeaderOption = {
  ABSENT: "ABSENT",
  PRESENT: "PRESENT",
  UNKNOWN: "UNKNOWN",
} as const;

/**
 * @public
 */
export type CsvHeaderOption = (typeof CsvHeaderOption)[keyof typeof CsvHeaderOption];

/**
 * @public
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

  /**
   * <p>Enables the configuration of custom datatypes.</p>
   */
  CustomDatatypeConfigured?: boolean;

  /**
   * <p>Creates a list of supported custom datatypes.</p>
   */
  CustomDatatypes?: string[];
}

/**
 * @public
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

/**
 * @public
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

/**
 * @public
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

/**
 * @public
 */
export interface CreateClassifierRequest {
  /**
   * <p>A <code>GrokClassifier</code> object specifying the classifier
   *       to create.</p>
   */
  GrokClassifier?: CreateGrokClassifierRequest;

  /**
   * <p>An <code>XMLClassifier</code> object specifying the classifier
   *       to create.</p>
   */
  XMLClassifier?: CreateXMLClassifierRequest;

  /**
   * <p>A <code>JsonClassifier</code> object specifying the classifier
   *       to create.</p>
   */
  JsonClassifier?: CreateJsonClassifierRequest;

  /**
   * <p>A <code>CsvClassifier</code> object specifying the classifier
   *       to create.</p>
   */
  CsvClassifier?: CreateCsvClassifierRequest;
}

/**
 * @public
 */
export interface CreateClassifierResponse {}

/**
 * @public
 * @enum
 */
export const ConnectionPropertyKey = {
  CONFIG_FILES: "CONFIG_FILES",
  CONNECTION_URL: "CONNECTION_URL",
  CONNECTOR_CLASS_NAME: "CONNECTOR_CLASS_NAME",
  CONNECTOR_TYPE: "CONNECTOR_TYPE",
  CONNECTOR_URL: "CONNECTOR_URL",
  CUSTOM_JDBC_CERT: "CUSTOM_JDBC_CERT",
  CUSTOM_JDBC_CERT_STRING: "CUSTOM_JDBC_CERT_STRING",
  ENCRYPTED_KAFKA_CLIENT_KEYSTORE_PASSWORD: "ENCRYPTED_KAFKA_CLIENT_KEYSTORE_PASSWORD",
  ENCRYPTED_KAFKA_CLIENT_KEY_PASSWORD: "ENCRYPTED_KAFKA_CLIENT_KEY_PASSWORD",
  ENCRYPTED_PASSWORD: "ENCRYPTED_PASSWORD",
  HOST: "HOST",
  INSTANCE_ID: "INSTANCE_ID",
  JDBC_CONNECTION_URL: "JDBC_CONNECTION_URL",
  JDBC_DRIVER_CLASS_NAME: "JDBC_DRIVER_CLASS_NAME",
  JDBC_DRIVER_JAR_URI: "JDBC_DRIVER_JAR_URI",
  JDBC_ENFORCE_SSL: "JDBC_ENFORCE_SSL",
  JDBC_ENGINE: "JDBC_ENGINE",
  JDBC_ENGINE_VERSION: "JDBC_ENGINE_VERSION",
  KAFKA_BOOTSTRAP_SERVERS: "KAFKA_BOOTSTRAP_SERVERS",
  KAFKA_CLIENT_KEYSTORE: "KAFKA_CLIENT_KEYSTORE",
  KAFKA_CLIENT_KEYSTORE_PASSWORD: "KAFKA_CLIENT_KEYSTORE_PASSWORD",
  KAFKA_CLIENT_KEY_PASSWORD: "KAFKA_CLIENT_KEY_PASSWORD",
  KAFKA_CUSTOM_CERT: "KAFKA_CUSTOM_CERT",
  KAFKA_SKIP_CUSTOM_CERT_VALIDATION: "KAFKA_SKIP_CUSTOM_CERT_VALIDATION",
  KAFKA_SSL_ENABLED: "KAFKA_SSL_ENABLED",
  PASSWORD: "PASSWORD",
  PORT: "PORT",
  SECRET_ID: "SECRET_ID",
  SKIP_CUSTOM_JDBC_CERT_VALIDATION: "SKIP_CUSTOM_JDBC_CERT_VALIDATION",
  USER_NAME: "USERNAME",
} as const;

/**
 * @public
 */
export type ConnectionPropertyKey = (typeof ConnectionPropertyKey)[keyof typeof ConnectionPropertyKey];

/**
 * @public
 * @enum
 */
export const ConnectionType = {
  CUSTOM: "CUSTOM",
  JDBC: "JDBC",
  KAFKA: "KAFKA",
  MARKETPLACE: "MARKETPLACE",
  MONGODB: "MONGODB",
  NETWORK: "NETWORK",
  SFTP: "SFTP",
} as const;

/**
 * @public
 */
export type ConnectionType = (typeof ConnectionType)[keyof typeof ConnectionType];

/**
 * @public
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

/**
 * @public
 * <p>A structure that is used to specify a connection to create or update.</p>
 */
export interface ConnectionInput {
  /**
   * <p>The name of the connection. Connection will not function as expected without a name.</p>
   */
  Name: string | undefined;

  /**
   * <p>The description of the connection.</p>
   */
  Description?: string;

  /**
   * <p>The type of the connection. Currently, these types are supported:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>JDBC</code> - Designates a connection to a database through Java Database Connectivity (JDBC).</p>
   *                <p>
   *                   <code>JDBC</code> Connections use the following ConnectionParameters.</p>
   *                <ul>
   *                   <li>
   *                      <p>Required: All of (<code>HOST</code>, <code>PORT</code>, <code>JDBC_ENGINE</code>) or <code>JDBC_CONNECTION_URL</code>.</p>
   *                   </li>
   *                   <li>
   *                      <p>Required: All of (<code>USERNAME</code>, <code>PASSWORD</code>) or <code>SECRET_ID</code>.</p>
   *                   </li>
   *                   <li>
   *                      <p>Optional: <code>JDBC_ENFORCE_SSL</code>, <code>CUSTOM_JDBC_CERT</code>, <code>CUSTOM_JDBC_CERT_STRING</code>, <code>SKIP_CUSTOM_JDBC_CERT_VALIDATION</code>.  These parameters are used to configure SSL with JDBC.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>KAFKA</code> - Designates a connection to an Apache Kafka streaming platform.</p>
   *                <p>
   *                   <code>KAFKA</code> Connections use the following ConnectionParameters.</p>
   *                <ul>
   *                   <li>
   *                      <p>Required: <code>KAFKA_BOOTSTRAP_SERVERS</code>.</p>
   *                   </li>
   *                   <li>
   *                      <p>Optional: <code>KAFKA_SSL_ENABLED</code>, <code>KAFKA_CUSTOM_CERT</code>, <code>KAFKA_SKIP_CUSTOM_CERT_VALIDATION</code>. These parameters are used to configure SSL with <code>KAFKA</code>.</p>
   *                   </li>
   *                   <li>
   *                      <p>Optional: <code>KAFKA_CLIENT_KEYSTORE</code>, <code>KAFKA_CLIENT_KEYSTORE_PASSWORD</code>, <code>KAFKA_CLIENT_KEY_PASSWORD</code>, <code>ENCRYPTED_KAFKA_CLIENT_KEYSTORE_PASSWORD</code>, <code>ENCRYPTED_KAFKA_CLIENT_KEY_PASSWORD</code>. These parameters are used to configure TLS client configuration with SSL in <code>KAFKA</code>.</p>
   *                   </li>
   *                   <li>
   *                      <p>Optional: <code>KAFKA_SASL_MECHANISM</code>. Can be specified as <code>SCRAM-SHA-512</code>, <code>GSSAPI</code>, or <code>AWS_MSK_IAM</code>.</p>
   *                   </li>
   *                   <li>
   *                      <p>Optional: <code>KAFKA_SASL_SCRAM_USERNAME</code>, <code>KAFKA_SASL_SCRAM_PASSWORD</code>, <code>ENCRYPTED_KAFKA_SASL_SCRAM_PASSWORD</code>. These parameters are used to configure SASL/SCRAM-SHA-512 authentication with <code>KAFKA</code>.</p>
   *                   </li>
   *                   <li>
   *                      <p>Optional: <code>KAFKA_SASL_GSSAPI_KEYTAB</code>, <code>KAFKA_SASL_GSSAPI_KRB5_CONF</code>, <code>KAFKA_SASL_GSSAPI_SERVICE</code>, <code>KAFKA_SASL_GSSAPI_PRINCIPAL</code>. These parameters are used to configure SASL/GSSAPI authentication with <code>KAFKA</code>.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MONGODB</code> - Designates a connection to a MongoDB document database.</p>
   *                <p>
   *                   <code>MONGODB</code> Connections use the following ConnectionParameters.</p>
   *                <ul>
   *                   <li>
   *                      <p>Required: <code>CONNECTION_URL</code>.</p>
   *                   </li>
   *                   <li>
   *                      <p>Required: All of (<code>USERNAME</code>, <code>PASSWORD</code>) or <code>SECRET_ID</code>.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NETWORK</code> - Designates a network connection to a data source within an Amazon Virtual Private Cloud environment (Amazon VPC).</p>
   *                <p>
   *                   <code>NETWORK</code> Connections do not require ConnectionParameters. Instead, provide a PhysicalConnectionRequirements.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MARKETPLACE</code> - Uses configuration settings contained in a connector purchased from Amazon Web Services Marketplace to read from and write to data stores that are not natively supported by Glue.</p>
   *                <p>
   *                   <code>MARKETPLACE</code> Connections use the following ConnectionParameters.</p>
   *                <ul>
   *                   <li>
   *                      <p>Required: <code>CONNECTOR_TYPE</code>, <code>CONNECTOR_URL</code>, <code>CONNECTOR_CLASS_NAME</code>, <code>CONNECTION_URL</code>.</p>
   *                   </li>
   *                   <li>
   *                      <p>Required for <code>JDBC</code>
   *                         <code>CONNECTOR_TYPE</code> connections: All of (<code>USERNAME</code>, <code>PASSWORD</code>) or <code>SECRET_ID</code>.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CUSTOM</code> - Uses configuration settings contained in a custom connector to read from and write to data stores that are not natively supported by Glue.</p>
   *             </li>
   *          </ul>
   *          <p>
   *             <code>SFTP</code> is not supported.</p>
   *          <p>For more information about how optional ConnectionProperties are used to configure features in Glue, consult <a href="https://docs.aws.amazon.com/glue/latest/dg/connection-defining.html">Glue connection properties</a>.</p>
   *          <p>For more information about how optional ConnectionProperties are used to configure features in Glue Studio, consult <a href="https://docs.aws.amazon.com/glue/latest/ug/connectors-chapter.html">Using connectors and connections</a>.</p>
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

/**
 * @public
 */
export interface CreateConnectionRequest {
  /**
   * <p>The ID of the Data Catalog in which to create the connection. If none is provided, the Amazon Web Services
   *       account ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * <p>A <code>ConnectionInput</code> object defining the connection
   *       to create.</p>
   */
  ConnectionInput: ConnectionInput | undefined;

  /**
   * <p>The tags you assign to the connection.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateConnectionResponse {}

/**
 * @public
 */
export interface CreateCrawlerRequest {
  /**
   * <p>Name of the new crawler.</p>
   */
  Name: string | undefined;

  /**
   * <p>The IAM role or Amazon Resource Name (ARN) of an IAM role used by the new crawler to
   *       access customer resources.</p>
   */
  Role: string | undefined;

  /**
   * <p>The Glue database where results are written, such as:
   *         <code>arn:aws:daylight:us-east-1::database/sometable/*</code>.</p>
   */
  DatabaseName?: string;

  /**
   * <p>A description of the new crawler.</p>
   */
  Description?: string;

  /**
   * <p>A list of collection of targets to crawl.</p>
   */
  Targets: CrawlerTargets | undefined;

  /**
   * <p>A <code>cron</code> expression used to specify the schedule (see <a href="https://docs.aws.amazon.com/glue/latest/dg/monitor-data-warehouse-schedule.html">Time-Based Schedules for Jobs and Crawlers</a>. For example, to run
   *       something every day at 12:15 UTC, you would specify:
   *       <code>cron(15 12 * * ? *)</code>.</p>
   */
  Schedule?: string;

  /**
   * <p>A list of custom classifiers that the user has registered. By default, all built-in
   *       classifiers are included in a crawl, but these custom classifiers always override the default
   *       classifiers for a given classification.</p>
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
   * <p>Specifies Lake Formation configuration settings for the crawler.</p>
   */
  LakeFormationConfiguration?: LakeFormationConfiguration;

  /**
   * <p>Crawler configuration information. This versioned JSON
   *       string allows users to specify aspects of a crawler's behavior.
   *       For more information, see <a href="https://docs.aws.amazon.com/glue/latest/dg/crawler-configuration.html">Setting crawler configuration options</a>.</p>
   */
  Configuration?: string;

  /**
   * <p>The name of the <code>SecurityConfiguration</code> structure to be used by this
   *       crawler.</p>
   */
  CrawlerSecurityConfiguration?: string;

  /**
   * <p>The tags to use with this crawler request. You may use tags to limit access to the
   *             crawler. For more information about tags in Glue, see <a href="https://docs.aws.amazon.com/glue/latest/dg/monitor-tags.html">Amazon Web Services Tags in Glue</a> in the developer
   *             guide.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateCrawlerResponse {}

/**
 * @public
 */
export interface CreateCustomEntityTypeRequest {
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
   *          <p>If no context words are passed only a regular expression is checked.</p>
   */
  ContextWords?: string[];

  /**
   * <p>A list of tags applied to the custom entity type.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateCustomEntityTypeResponse {
  /**
   * <p>The name of the custom pattern you created.</p>
   */
  Name?: string;
}

/**
 * @public
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
 * @public
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

/**
 * @public
 * @enum
 */
export const Permission = {
  ALL: "ALL",
  ALTER: "ALTER",
  CREATE_DATABASE: "CREATE_DATABASE",
  CREATE_TABLE: "CREATE_TABLE",
  DATA_LOCATION_ACCESS: "DATA_LOCATION_ACCESS",
  DELETE: "DELETE",
  DROP: "DROP",
  INSERT: "INSERT",
  SELECT: "SELECT",
} as const;

/**
 * @public
 */
export type Permission = (typeof Permission)[keyof typeof Permission];

/**
 * @public
 * <p>The Lake Formation principal.</p>
 */
export interface DataLakePrincipal {
  /**
   * <p>An identifier for the Lake Formation principal.</p>
   */
  DataLakePrincipalIdentifier?: string;
}

/**
 * @public
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

/**
 * @public
 * <p>A database that points to an entity outside the Glue Data Catalog.</p>
 */
export interface FederatedDatabase {
  /**
   * <p>A unique identifier for the federated database.</p>
   */
  Identifier?: string;

  /**
   * <p>The name of the connection to the external metastore.</p>
   */
  ConnectionName?: string;
}

/**
 * @public
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

  /**
   * <p>Region of the target database.</p>
   */
  Region?: string;
}

/**
 * @public
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
   * <p>Creates a set of default permissions on the table for principals. Used by Lake Formation. Not used in the normal course of Glue operations.</p>
   */
  CreateTableDefaultPermissions?: PrincipalPermissions[];

  /**
   * <p>A <code>DatabaseIdentifier</code> structure that describes a target database for resource linking.</p>
   */
  TargetDatabase?: DatabaseIdentifier;

  /**
   * <p>A <code>FederatedDatabase</code> structure that references an entity outside the Glue Data Catalog.</p>
   */
  FederatedDatabase?: FederatedDatabase;
}

/**
 * @public
 */
export interface CreateDatabaseRequest {
  /**
   * <p>The ID of the Data Catalog in which to create the database. If none is provided, the Amazon Web Services
   *       account ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * <p>The metadata for the database.</p>
   */
  DatabaseInput: DatabaseInput | undefined;

  /**
   * <p>The tags you assign to the database.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateDatabaseResponse {}

/**
 * @public
 * <p>A federated resource already exists.</p>
 */
export class FederatedResourceAlreadyExistsException extends __BaseException {
  readonly name: "FederatedResourceAlreadyExistsException" = "FederatedResourceAlreadyExistsException";
  readonly $fault: "client" = "client";
  /**
   * <p>The message describing the problem.</p>
   */
  Message?: string;

  /**
   * <p>The associated Glue resource already exists.</p>
   */
  AssociatedGlueResource?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<FederatedResourceAlreadyExistsException, __BaseException>) {
    super({
      name: "FederatedResourceAlreadyExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, FederatedResourceAlreadyExistsException.prototype);
    this.Message = opts.Message;
    this.AssociatedGlueResource = opts.AssociatedGlueResource;
  }
}

/**
 * @public
 * <p>An object representing an Glue table.</p>
 */
export interface DataQualityTargetTable {
  /**
   * <p>The name of the Glue table.</p>
   */
  TableName: string | undefined;

  /**
   * <p>The name of the database where the Glue table exists.</p>
   */
  DatabaseName: string | undefined;

  /**
   * <p>The catalog id where the Glue table exists.</p>
   */
  CatalogId?: string;
}

/**
 * @public
 */
export interface CreateDataQualityRulesetRequest {
  /**
   * <p>A unique name for the data quality ruleset.</p>
   */
  Name: string | undefined;

  /**
   * <p>A description of the data quality ruleset.</p>
   */
  Description?: string;

  /**
   * <p>A Data Quality Definition Language (DQDL) ruleset. For more information, see the Glue developer guide.</p>
   */
  Ruleset: string | undefined;

  /**
   * <p>A list of tags applied to the data quality ruleset.</p>
   */
  Tags?: Record<string, string>;

  /**
   * <p>A target table associated with the data quality ruleset.</p>
   */
  TargetTable?: DataQualityTargetTable;

  /**
   * <p>Used for idempotency and is recommended to be set to a random ID (such as a UUID) to avoid creating or starting multiple instances of the same resource.</p>
   */
  ClientToken?: string;
}

/**
 * @public
 */
export interface CreateDataQualityRulesetResponse {
  /**
   * <p>A unique name for the data quality ruleset.</p>
   */
  Name?: string;
}

/**
 * @public
 */
export interface CreateDevEndpointRequest {
  /**
   * <p>The name to be assigned to the new <code>DevEndpoint</code>.</p>
   */
  EndpointName: string | undefined;

  /**
   * <p>The IAM role for the <code>DevEndpoint</code>.</p>
   */
  RoleArn: string | undefined;

  /**
   * <p>Security group IDs for the security groups to be used by the new
   *       <code>DevEndpoint</code>.</p>
   */
  SecurityGroupIds?: string[];

  /**
   * <p>The subnet ID for the new <code>DevEndpoint</code> to use.</p>
   */
  SubnetId?: string;

  /**
   * <p>The public key to be used by this <code>DevEndpoint</code> for authentication. This
   *       attribute is provided for backward compatibility because the recommended attribute to use is
   *       public keys.</p>
   */
  PublicKey?: string;

  /**
   * <p>A list of public keys to be used by the development endpoints for authentication. The use
   *       of this attribute is preferred over a single public key because the public keys allow you to
   *       have a different private key per client.</p>
   *          <note>
   *             <p>If you previously created an endpoint with a public key, you must remove that key to be able
   *         to set a list of public keys. Call the <code>UpdateDevEndpoint</code> API with the public
   *         key content in the <code>deletePublicKeys</code> attribute, and the list of new keys in the
   *           <code>addPublicKeys</code> attribute.</p>
   *          </note>
   */
  PublicKeys?: string[];

  /**
   * <p>The number of Glue Data Processing Units (DPUs) to allocate to this
   *         <code>DevEndpoint</code>.</p>
   */
  NumberOfNodes?: number;

  /**
   * <p>The type of predefined worker that is allocated to the development endpoint. Accepts a value of Standard, G.1X, or G.2X.</p>
   *          <ul>
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
   *          <p>Known issue: when a development endpoint is created with the <code>G.2X</code>
   *             <code>WorkerType</code> configuration, the Spark drivers for the development endpoint will run on 4 vCPU, 16 GB of memory, and a 64 GB disk. </p>
   */
  WorkerType?: WorkerType | string;

  /**
   * <p>Glue version determines the versions of Apache Spark and Python that Glue supports. The Python version indicates the version supported for running your ETL scripts on development endpoints. </p>
   *          <p>For more information about the available Glue versions and corresponding Spark and Python versions, see <a href="https://docs.aws.amazon.com/glue/latest/dg/add-job.html">Glue version</a> in the developer guide.</p>
   *          <p>Development endpoints that are created without specifying a Glue version default to Glue 0.9.</p>
   *          <p>You can specify a version of Python support for development endpoints by using the <code>Arguments</code> parameter in the <code>CreateDevEndpoint</code> or <code>UpdateDevEndpoint</code> APIs. If no arguments are provided, the version defaults to Python 2.</p>
   */
  GlueVersion?: string;

  /**
   * <p>The number of workers of a defined <code>workerType</code> that are allocated to the development endpoint.</p>
   *          <p>The maximum number of workers you can define are 299 for <code>G.1X</code>, and 149 for <code>G.2X</code>. </p>
   */
  NumberOfWorkers?: number;

  /**
   * <p>The paths to one or more Python libraries in an Amazon S3 bucket that should be loaded in
   *       your <code>DevEndpoint</code>. Multiple values must be complete paths separated by a
   *       comma.</p>
   *          <note>
   *             <p>You can only use pure Python libraries with a <code>DevEndpoint</code>. Libraries that rely on
   *         C extensions, such as the <a href="http://pandas.pydata.org/">pandas</a> Python data
   *         analysis library, are not yet supported.</p>
   *          </note>
   */
  ExtraPythonLibsS3Path?: string;

  /**
   * <p>The path to one or more Java <code>.jar</code> files in an S3 bucket that should be loaded
   *       in your <code>DevEndpoint</code>.</p>
   */
  ExtraJarsS3Path?: string;

  /**
   * <p>The name of the <code>SecurityConfiguration</code> structure to be used with this
   *         <code>DevEndpoint</code>.</p>
   */
  SecurityConfiguration?: string;

  /**
   * <p>The tags to use with this DevEndpoint. You may use tags to limit access to the DevEndpoint. For more information about tags in Glue, see <a href="https://docs.aws.amazon.com/glue/latest/dg/monitor-tags.html">Amazon Web Services Tags in Glue</a> in the developer guide.</p>
   */
  Tags?: Record<string, string>;

  /**
   * <p>A map of arguments used to configure the <code>DevEndpoint</code>.</p>
   */
  Arguments?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateDevEndpointResponse {
  /**
   * <p>The name assigned to the new <code>DevEndpoint</code>.</p>
   */
  EndpointName?: string;

  /**
   * <p>The current status of the new <code>DevEndpoint</code>.</p>
   */
  Status?: string;

  /**
   * <p>The security groups assigned to the new <code>DevEndpoint</code>.</p>
   */
  SecurityGroupIds?: string[];

  /**
   * <p>The subnet ID assigned to the new <code>DevEndpoint</code>.</p>
   */
  SubnetId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the role assigned to the new
   *       <code>DevEndpoint</code>.</p>
   */
  RoleArn?: string;

  /**
   * <p>The address of the YARN endpoint used by this <code>DevEndpoint</code>.</p>
   */
  YarnEndpointAddress?: string;

  /**
   * <p>The Apache Zeppelin port for the remote Apache Spark interpreter.</p>
   */
  ZeppelinRemoteSparkInterpreterPort?: number;

  /**
   * <p>The number of Glue Data Processing Units (DPUs) allocated to this DevEndpoint.</p>
   */
  NumberOfNodes?: number;

  /**
   * <p>The type of predefined worker that is allocated to the development endpoint. May be a value of Standard, G.1X, or G.2X.</p>
   */
  WorkerType?: WorkerType | string;

  /**
   * <p>Glue version determines the versions of Apache Spark and Python that Glue supports. The Python version indicates the version supported for running your ETL scripts on development endpoints. </p>
   *          <p>For more information about the available Glue versions and corresponding Spark and Python versions, see <a href="https://docs.aws.amazon.com/glue/latest/dg/add-job.html">Glue version</a> in the developer guide.</p>
   */
  GlueVersion?: string;

  /**
   * <p>The number of workers of a defined <code>workerType</code> that are allocated to the development endpoint.</p>
   */
  NumberOfWorkers?: number;

  /**
   * <p>The Amazon Web Services Availability Zone where this <code>DevEndpoint</code> is located.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The ID of the virtual private cloud (VPC) used by this <code>DevEndpoint</code>.</p>
   */
  VpcId?: string;

  /**
   * <p>The paths to one or more Python libraries in an S3 bucket that will be loaded in your
   *         <code>DevEndpoint</code>.</p>
   */
  ExtraPythonLibsS3Path?: string;

  /**
   * <p>Path to one or more Java <code>.jar</code> files in an S3 bucket that will be loaded in
   *       your <code>DevEndpoint</code>.</p>
   */
  ExtraJarsS3Path?: string;

  /**
   * <p>The reason for a current failure in this <code>DevEndpoint</code>.</p>
   */
  FailureReason?: string;

  /**
   * <p>The name of the <code>SecurityConfiguration</code> structure being used with this
   *         <code>DevEndpoint</code>.</p>
   */
  SecurityConfiguration?: string;

  /**
   * <p>The point in time at which this <code>DevEndpoint</code> was created.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * <p>The map of arguments used to configure this <code>DevEndpoint</code>.</p>
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
  Arguments?: Record<string, string>;
}

/**
 * @public
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
 * @public
 */
export interface CreateJobResponse {
  /**
   * <p>The unique name that was provided for this job definition.</p>
   */
  Name?: string;
}

/**
 * @public
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
   *          <p>The precision metric indicates how often your model is correct when it predicts a match. </p>
   *          <p>The recall metric indicates that for an actual match, how often your model predicts the
   *       match.</p>
   */
  PrecisionRecallTradeoff?: number;

  /**
   * <p>The value that is selected when tuning your transform for a balance between accuracy and
   *       cost. A value of 0.5 means that the system balances accuracy and cost concerns. A value of 1.0
   *       means a bias purely for accuracy, which typically results in a higher cost, sometimes
   *       substantially higher. A value of 0.0 means a bias purely for cost, which results in a less
   *       accurate <code>FindMatches</code> transform, sometimes with unacceptable accuracy.</p>
   *          <p>Accuracy measures how well the transform finds true positives and true negatives. Increasing accuracy requires more machine resources and cost. But it also results in increased recall. </p>
   *          <p>Cost measures how many compute resources, and thus money, are consumed to run the
   *       transform.</p>
   */
  AccuracyCostTradeoff?: number;

  /**
   * <p>The value to switch on or off to force the output to match the provided labels from users. If the value is <code>True</code>, the <code>find matches</code> transform forces the output to match the provided labels. The results override the normal conflation results. If the value is <code>False</code>, the <code>find matches</code> transform does not ensure all the labels provided are respected, and the results rely on the trained model.</p>
   *          <p>Note that setting this value to true may increase the conflation execution time.</p>
   */
  EnforceProvidedLabels?: boolean;
}

/**
 * @public
 * @enum
 */
export const TransformType = {
  FIND_MATCHES: "FIND_MATCHES",
} as const;

/**
 * @public
 */
export type TransformType = (typeof TransformType)[keyof typeof TransformType];

/**
 * @public
 * <p>The algorithm-specific parameters that are associated with the machine learning
 *       transform.</p>
 */
export interface TransformParameters {
  /**
   * <p>The type of machine learning transform.</p>
   *          <p>For information about the types of machine learning transforms, see <a href="https://docs.aws.amazon.com/glue/latest/dg/add-job-machine-learning-transform.html">Creating Machine Learning Transforms</a>.</p>
   */
  TransformType: TransformType | string | undefined;

  /**
   * <p>The parameters for the find matches algorithm.</p>
   */
  FindMatchesParameters?: FindMatchesParameters;
}

/**
 * @public
 * @enum
 */
export const MLUserDataEncryptionModeString = {
  DISABLED: "DISABLED",
  SSEKMS: "SSE-KMS",
} as const;

/**
 * @public
 */
export type MLUserDataEncryptionModeString =
  (typeof MLUserDataEncryptionModeString)[keyof typeof MLUserDataEncryptionModeString];

/**
 * @public
 * <p>The encryption-at-rest settings of the transform that apply to accessing user data.</p>
 */
export interface MLUserDataEncryption {
  /**
   * <p>The encryption mode applied to user data. Valid values are:</p>
   *          <ul>
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
