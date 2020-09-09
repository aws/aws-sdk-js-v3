import { SENSITIVE_STRING, SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>Access to a resource was denied.</p>
 */
export interface AccessDeniedException extends __SmithyException, $MetadataBearer {
  name: "AccessDeniedException";
  $fault: "client";
  /**
   * <p>A message describing the problem.</p>
   */
  Message?: string;
}

export namespace AccessDeniedException {
  export const filterSensitiveLog = (obj: AccessDeniedException): any => ({
    ...obj,
  });
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
  export const filterSensitiveLog = (obj: NotificationProperty): any => ({
    ...obj,
  });
}

/**
 * <p>Defines an action to be initiated by a trigger.</p>
 */
export interface Action {
  /**
   * <p>The <code>JobRun</code> timeout in minutes. This is the maximum time that a job run can
   *       consume resources before it is terminated and enters <code>TIMEOUT</code> status. The default
   *       is 2,880 minutes (48 hours). This overrides the timeout value set in the parent job.</p>
   */
  Timeout?: number;

  /**
   * <p>Specifies configuration properties of a job run notification.</p>
   */
  NotificationProperty?: NotificationProperty;

  /**
   * <p>The job arguments used when this trigger fires. For this job run, they replace the default arguments set in the job definition itself.</p>
   *          <p>You can specify arguments here that your own job-execution script
   *       consumes, as well as arguments that AWS Glue itself consumes.</p>
   *          <p>For information about how to specify and consume your own Job arguments, see the <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-python-calling.html">Calling AWS Glue APIs in Python</a> topic in the developer guide.</p>
   *          <p>For information about the key-value pairs that AWS Glue consumes to set up your job, see the <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-etl-glue-arguments.html">Special Parameters Used by AWS Glue</a> topic in the developer guide.</p>
   */
  Arguments?: { [key: string]: string };

  /**
   * <p>The name of the <code>SecurityConfiguration</code> structure to be used with this
   *       action.</p>
   */
  SecurityConfiguration?: string;

  /**
   * <p>The name of the crawler to be used with this action.</p>
   */
  CrawlerName?: string;

  /**
   * <p>The name of a job to be executed.</p>
   */
  JobName?: string;
}

export namespace Action {
  export const filterSensitiveLog = (obj: Action): any => ({
    ...obj,
  });
}

/**
 * <p>A resource to be created or added already exists.</p>
 */
export interface AlreadyExistsException extends __SmithyException, $MetadataBearer {
  name: "AlreadyExistsException";
  $fault: "client";
  /**
   * <p>A message describing the problem.</p>
   */
  Message?: string;
}

export namespace AlreadyExistsException {
  export const filterSensitiveLog = (obj: AlreadyExistsException): any => ({
    ...obj,
  });
}

/**
 * <p>A column in a <code>Table</code>.</p>
 */
export interface Column {
  /**
   * <p>These key-value pairs define properties associated with the column.</p>
   */
  Parameters?: { [key: string]: string };

  /**
   * <p>A free-form text comment.</p>
   */
  Comment?: string;

  /**
   * <p>The name of the <code>Column</code>.</p>
   */
  Name: string | undefined;

  /**
   * <p>The data type of the <code>Column</code>.</p>
   */
  Type?: string;
}

export namespace Column {
  export const filterSensitiveLog = (obj: Column): any => ({
    ...obj,
  });
}

/**
 * <p>Information about a serialization/deserialization program (SerDe) that serves as an
 *       extractor and loader.</p>
 */
export interface SerDeInfo {
  /**
   * <p>Usually the class that implements the SerDe. An example is
   *         <code>org.apache.hadoop.hive.serde2.columnar.ColumnarSerDe</code>.</p>
   */
  SerializationLibrary?: string;

  /**
   * <p>Name of the SerDe.</p>
   */
  Name?: string;

  /**
   * <p>These key-value pairs define initialization parameters for the SerDe.</p>
   */
  Parameters?: { [key: string]: string };
}

export namespace SerDeInfo {
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
   * <p>A mapping of skewed values to the columns that contain them.</p>
   */
  SkewedColumnValueLocationMaps?: { [key: string]: string };

  /**
   * <p>A list of values that appear so frequently as to be considered
   *       skewed.</p>
   */
  SkewedColumnValues?: string[];
}

export namespace SkewedInfo {
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
  export const filterSensitiveLog = (obj: Order): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the physical storage of table data.</p>
 */
export interface StorageDescriptor {
  /**
   * <p>The input format: <code>SequenceFileInputFormat</code> (binary),
   *       or <code>TextInputFormat</code>, or a custom format.</p>
   */
  InputFormat?: string;

  /**
   * <p>A list of the <code>Columns</code> in the table.</p>
   */
  Columns?: Column[];

  /**
   * <p>Must be specified if the table contains any dimension columns.</p>
   */
  NumberOfBuckets?: number;

  /**
   * <p>The physical location of the table. By default, this takes the form of the warehouse
   *       location, followed by the database location in the warehouse, followed by the table
   *       name.</p>
   */
  Location?: string;

  /**
   * <p>The information about values that appear frequently in a column (skewed values).</p>
   */
  SkewedInfo?: SkewedInfo;

  /**
   * <p>The output format: <code>SequenceFileOutputFormat</code> (binary),
   *       or <code>IgnoreKeyTextOutputFormat</code>, or a custom format.</p>
   */
  OutputFormat?: string;

  /**
   * <p>A list of reducer grouping columns, clustering columns, and
   *       bucketing columns in the table.</p>
   */
  BucketColumns?: string[];

  /**
   * <p>The user-supplied properties in key-value form.</p>
   */
  Parameters?: { [key: string]: string };

  /**
   * <p>
   *             <code>True</code> if the data in the table is compressed, or <code>False</code> if
   *       not.</p>
   */
  Compressed?: boolean;

  /**
   * <p>A list specifying the sort order of each bucket in the table.</p>
   */
  SortColumns?: Order[];

  /**
   * <p>The serialization/deserialization (SerDe) information.</p>
   */
  SerdeInfo?: SerDeInfo;

  /**
   * <p>
   *             <code>True</code> if the table data is stored in subdirectories, or <code>False</code> if
   *       not.</p>
   */
  StoredAsSubDirectories?: boolean;
}

export namespace StorageDescriptor {
  export const filterSensitiveLog = (obj: StorageDescriptor): any => ({
    ...obj,
  });
}

/**
 * <p>The structure used to create and update a partition.</p>
 */
export interface PartitionInput {
  /**
   * <p>The last time at which column statistics were computed for this partition.</p>
   */
  LastAnalyzedTime?: Date;

  /**
   * <p>The values of the partition. Although this parameter is not required by the SDK, you must specify this parameter for a valid input.</p>
   *
   * 	        <p>The values for the keys for the new partition must be passed as an array of String objects that must be ordered in the same order as the partition keys appearing in the Amazon S3 prefix. Otherwise AWS Glue will add the values to the wrong keys.</p>
   */
  Values?: string[];

  /**
   * <p>Provides information about the physical
   *       location where the partition is stored.</p>
   */
  StorageDescriptor?: StorageDescriptor;

  /**
   * <p>These key-value pairs define partition parameters.</p>
   */
  Parameters?: { [key: string]: string };

  /**
   * <p>The last time at which the partition was accessed.</p>
   */
  LastAccessTime?: Date;
}

export namespace PartitionInput {
  export const filterSensitiveLog = (obj: PartitionInput): any => ({
    ...obj,
  });
}

export interface BatchCreatePartitionRequest {
  /**
   * <p>The ID of the catalog in which the partition is to be created. Currently, this should be
   *       the AWS account ID.</p>
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

export namespace BatchCreatePartitionRequest {
  export const filterSensitiveLog = (obj: BatchCreatePartitionRequest): any => ({
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
  export const filterSensitiveLog = (obj: PartitionError): any => ({
    ...obj,
  });
}

export interface BatchCreatePartitionResponse {
  /**
   * <p>The errors encountered when trying to create the requested partitions.</p>
   */
  Errors?: PartitionError[];
}

export namespace BatchCreatePartitionResponse {
  export const filterSensitiveLog = (obj: BatchCreatePartitionResponse): any => ({
    ...obj,
  });
}

/**
 * <p>A specified entity does not exist</p>
 */
export interface EntityNotFoundException extends __SmithyException, $MetadataBearer {
  name: "EntityNotFoundException";
  $fault: "client";
  /**
   * <p>A message describing the problem.</p>
   */
  Message?: string;
}

export namespace EntityNotFoundException {
  export const filterSensitiveLog = (obj: EntityNotFoundException): any => ({
    ...obj,
  });
}

/**
 * <p>An encryption operation failed.</p>
 */
export interface GlueEncryptionException extends __SmithyException, $MetadataBearer {
  name: "GlueEncryptionException";
  $fault: "client";
  /**
   * <p>A message describing the problem.</p>
   */
  Message?: string;
}

export namespace GlueEncryptionException {
  export const filterSensitiveLog = (obj: GlueEncryptionException): any => ({
    ...obj,
  });
}

/**
 * <p>An internal service error occurred.</p>
 */
export interface InternalServiceException extends __SmithyException, $MetadataBearer {
  name: "InternalServiceException";
  $fault: "server";
  /**
   * <p>A message describing the problem.</p>
   */
  Message?: string;
}

export namespace InternalServiceException {
  export const filterSensitiveLog = (obj: InternalServiceException): any => ({
    ...obj,
  });
}

/**
 * <p>The input provided was not valid.</p>
 */
export interface InvalidInputException extends __SmithyException, $MetadataBearer {
  name: "InvalidInputException";
  $fault: "client";
  /**
   * <p>A message describing the problem.</p>
   */
  Message?: string;
}

export namespace InvalidInputException {
  export const filterSensitiveLog = (obj: InvalidInputException): any => ({
    ...obj,
  });
}

/**
 * <p>The operation timed out.</p>
 */
export interface OperationTimeoutException extends __SmithyException, $MetadataBearer {
  name: "OperationTimeoutException";
  $fault: "client";
  /**
   * <p>A message describing the problem.</p>
   */
  Message?: string;
}

export namespace OperationTimeoutException {
  export const filterSensitiveLog = (obj: OperationTimeoutException): any => ({
    ...obj,
  });
}

/**
 * <p>A resource numerical limit was exceeded.</p>
 */
export interface ResourceNumberLimitExceededException extends __SmithyException, $MetadataBearer {
  name: "ResourceNumberLimitExceededException";
  $fault: "client";
  /**
   * <p>A message describing the problem.</p>
   */
  Message?: string;
}

export namespace ResourceNumberLimitExceededException {
  export const filterSensitiveLog = (obj: ResourceNumberLimitExceededException): any => ({
    ...obj,
  });
}

export interface BatchDeleteConnectionRequest {
  /**
   * <p>A list of names of the connections to delete.</p>
   */
  ConnectionNameList: string[] | undefined;

  /**
   * <p>The ID of the Data Catalog in which the connections reside. If none is provided, the AWS
   *       account ID is used by default.</p>
   */
  CatalogId?: string;
}

export namespace BatchDeleteConnectionRequest {
  export const filterSensitiveLog = (obj: BatchDeleteConnectionRequest): any => ({
    ...obj,
  });
}

export interface BatchDeleteConnectionResponse {
  /**
   * <p>A map of the names of connections that were not successfully
   *        deleted to error details.</p>
   */
  Errors?: { [key: string]: ErrorDetail };

  /**
   * <p>A list of names of the connection definitions that were
   *        successfully deleted.</p>
   */
  Succeeded?: string[];
}

export namespace BatchDeleteConnectionResponse {
  export const filterSensitiveLog = (obj: BatchDeleteConnectionResponse): any => ({
    ...obj,
  });
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
  export const filterSensitiveLog = (obj: PartitionValueList): any => ({
    ...obj,
  });
}

export interface BatchDeletePartitionRequest {
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

  /**
   * <p>The ID of the Data Catalog where the partition to be deleted resides. If none is provided,
   *       the AWS account ID is used by default.</p>
   */
  CatalogId?: string;
}

export namespace BatchDeletePartitionRequest {
  export const filterSensitiveLog = (obj: BatchDeletePartitionRequest): any => ({
    ...obj,
  });
}

export interface BatchDeletePartitionResponse {
  /**
   * <p>The errors encountered when trying to delete the requested partitions.</p>
   */
  Errors?: PartitionError[];
}

export namespace BatchDeletePartitionResponse {
  export const filterSensitiveLog = (obj: BatchDeletePartitionResponse): any => ({
    ...obj,
  });
}

export interface BatchDeleteTableRequest {
  /**
   * <p>A list of the table to delete.</p>
   */
  TablesToDelete: string[] | undefined;

  /**
   * <p>The name of the catalog database in which the tables to delete reside. For Hive
   *       compatibility, this name is entirely lowercase.</p>
   */
  DatabaseName: string | undefined;

  /**
   * <p>The ID of the Data Catalog where the table resides. If none is provided, the AWS account
   *       ID is used by default.</p>
   */
  CatalogId?: string;
}

export namespace BatchDeleteTableRequest {
  export const filterSensitiveLog = (obj: BatchDeleteTableRequest): any => ({
    ...obj,
  });
}

/**
 * <p>An error record for table operations.</p>
 */
export interface TableError {
  /**
   * <p>The details about the error.</p>
   */
  ErrorDetail?: ErrorDetail;

  /**
   * <p>The name of the table. For Hive compatibility, this must be entirely lowercase.</p>
   */
  TableName?: string;
}

export namespace TableError {
  export const filterSensitiveLog = (obj: TableError): any => ({
    ...obj,
  });
}

export interface BatchDeleteTableResponse {
  /**
   * <p>A list of errors encountered in attempting to delete the specified tables.</p>
   */
  Errors?: TableError[];
}

export namespace BatchDeleteTableResponse {
  export const filterSensitiveLog = (obj: BatchDeleteTableResponse): any => ({
    ...obj,
  });
}

export interface BatchDeleteTableVersionRequest {
  /**
   * <p>The database in the catalog in which the table resides. For Hive
   *       compatibility, this name is entirely lowercase.</p>
   */
  DatabaseName: string | undefined;

  /**
   * <p>A list of the IDs of versions to be deleted. A <code>VersionId</code> is a string representation of an integer. Each version is incremented by 1.</p>
   */
  VersionIds: string[] | undefined;

  /**
   * <p>The ID of the Data Catalog where the tables reside. If none is provided, the AWS account
   *       ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * <p>The name of the table. For Hive compatibility,
   *       this name is entirely lowercase.</p>
   */
  TableName: string | undefined;
}

export namespace BatchDeleteTableVersionRequest {
  export const filterSensitiveLog = (obj: BatchDeleteTableVersionRequest): any => ({
    ...obj,
  });
}

/**
 * <p>An error record for table-version operations.</p>
 */
export interface TableVersionError {
  /**
   * <p>The details about the error.</p>
   */
  ErrorDetail?: ErrorDetail;

  /**
   * <p>The ID value of the version in question. A <code>VersionID</code> is a string representation of an integer. Each version is incremented by 1.</p>
   */
  VersionId?: string;

  /**
   * <p>The name of the table in question.</p>
   */
  TableName?: string;
}

export namespace TableVersionError {
  export const filterSensitiveLog = (obj: TableVersionError): any => ({
    ...obj,
  });
}

export interface BatchDeleteTableVersionResponse {
  /**
   * <p>A list of errors encountered while trying to delete
   *       the specified table versions.</p>
   */
  Errors?: TableVersionError[];
}

export namespace BatchDeleteTableVersionResponse {
  export const filterSensitiveLog = (obj: BatchDeleteTableVersionResponse): any => ({
    ...obj,
  });
}

export interface BatchGetCrawlersRequest {
  /**
   * <p>A list of crawler names, which might be the names returned from the
   *         <code>ListCrawlers</code> operation.</p>
   */
  CrawlerNames: string[] | undefined;
}

export namespace BatchGetCrawlersRequest {
  export const filterSensitiveLog = (obj: BatchGetCrawlersRequest): any => ({
    ...obj,
  });
}

export enum LastCrawlStatus {
  CANCELLED = "CANCELLED",
  FAILED = "FAILED",
  SUCCEEDED = "SUCCEEDED",
}

/**
 * <p>Status and error information about the most recent crawl.</p>
 */
export interface LastCrawlInfo {
  /**
   * <p>The time at which the crawl started.</p>
   */
  StartTime?: Date;

  /**
   * <p>The log group for the last crawl.</p>
   */
  LogGroup?: string;

  /**
   * <p>The prefix for a message about this crawl.</p>
   */
  MessagePrefix?: string;

  /**
   * <p>The log stream for the last crawl.</p>
   */
  LogStream?: string;

  /**
   * <p>Status of the last crawl.</p>
   */
  Status?: LastCrawlStatus | string;

  /**
   * <p>If an error occurred, the error information about the last crawl.</p>
   */
  ErrorMessage?: string;
}

export namespace LastCrawlInfo {
  export const filterSensitiveLog = (obj: LastCrawlInfo): any => ({
    ...obj,
  });
}

export enum ScheduleState {
  NOT_SCHEDULED = "NOT_SCHEDULED",
  SCHEDULED = "SCHEDULED",
  TRANSITIONING = "TRANSITIONING",
}

/**
 * <p>A scheduling object using a <code>cron</code> statement to schedule an event.</p>
 */
export interface Schedule {
  /**
   * <p>The state of the schedule.</p>
   */
  State?: ScheduleState | string;

  /**
   * <p>A <code>cron</code> expression used to specify the schedule (see <a href="https://docs.aws.amazon.com/glue/latest/dg/monitor-data-warehouse-schedule.html">Time-Based Schedules for Jobs and Crawlers</a>. For example, to run
   *       something every day at 12:15 UTC, you would specify:
   *       <code>cron(15 12 * * ? *)</code>.</p>
   */
  ScheduleExpression?: string;
}

export namespace Schedule {
  export const filterSensitiveLog = (obj: Schedule): any => ({
    ...obj,
  });
}

export enum DeleteBehavior {
  DELETE_FROM_DATABASE = "DELETE_FROM_DATABASE",
  DEPRECATE_IN_DATABASE = "DEPRECATE_IN_DATABASE",
  LOG = "LOG",
}

export enum UpdateBehavior {
  LOG = "LOG",
  UPDATE_IN_DATABASE = "UPDATE_IN_DATABASE",
}

/**
 * <p>A policy that specifies update and deletion behaviors for the crawler.</p>
 */
export interface SchemaChangePolicy {
  /**
   * <p>The deletion behavior when the crawler finds a deleted object.</p>
   */
  DeleteBehavior?: DeleteBehavior | string;

  /**
   * <p>The update behavior when the crawler finds a changed schema.</p>
   */
  UpdateBehavior?: UpdateBehavior | string;
}

export namespace SchemaChangePolicy {
  export const filterSensitiveLog = (obj: SchemaChangePolicy): any => ({
    ...obj,
  });
}

export enum CrawlerState {
  READY = "READY",
  RUNNING = "RUNNING",
  STOPPING = "STOPPING",
}

/**
 * <p>Specifies an AWS Glue Data Catalog target.</p>
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
}

export namespace CatalogTarget {
  export const filterSensitiveLog = (obj: CatalogTarget): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies an Amazon DynamoDB table to crawl.</p>
 */
export interface DynamoDBTarget {
  /**
   * <p>Indicates whether to scan all the records, or to sample rows from the table. Scanning all the records can take a long time when the table is not a high throughput table.</p>
   *
   * 	        <p>A value of <code>true</code> means to scan all records, while a value of <code>false</code> means to sample the records. If no value is specified, the value defaults to <code>true</code>.</p>
   */
  scanAll?: boolean;

  /**
   * <p>The percentage of the configured read capacity units to use by the AWS Glue crawler. Read capacity units is a term defined by DynamoDB, and is a numeric value that acts as rate limiter for the number of reads that can be performed on that table per second.</p>
   *
   * 	        <p>The valid values are null or a value between 0.1 to 1.5. A null value is used when user does not provide a value, and defaults to 0.5 of the configured Read Capacity Unit (for provisioned tables), or 0.25 of the max configured Read Capacity Unit (for tables using on-demand mode).</p>
   */
  scanRate?: number;

  /**
   * <p>The name of the DynamoDB table to crawl.</p>
   */
  Path?: string;
}

export namespace DynamoDBTarget {
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
  export const filterSensitiveLog = (obj: JdbcTarget): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies a data store in Amazon Simple Storage Service (Amazon S3).</p>
 */
export interface S3Target {
  /**
   * <p>A list of glob patterns used to exclude from the crawl.
   *       For more information, see <a href="https://docs.aws.amazon.com/glue/latest/dg/add-crawler.html">Catalog Tables with a Crawler</a>.</p>
   */
  Exclusions?: string[];

  /**
   * <p>The path to the Amazon S3 target.</p>
   */
  Path?: string;
}

export namespace S3Target {
  export const filterSensitiveLog = (obj: S3Target): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies data stores to crawl.</p>
 */
export interface CrawlerTargets {
  /**
   * <p>Specifies JDBC targets.</p>
   */
  JdbcTargets?: JdbcTarget[];

  /**
   * <p>Specifies Amazon Simple Storage Service (Amazon S3) targets.</p>
   */
  S3Targets?: S3Target[];

  /**
   * <p>Specifies AWS Glue Data Catalog targets.</p>
   */
  CatalogTargets?: CatalogTarget[];

  /**
   * <p>Specifies Amazon DynamoDB targets.</p>
   */
  DynamoDBTargets?: DynamoDBTarget[];
}

export namespace CrawlerTargets {
  export const filterSensitiveLog = (obj: CrawlerTargets): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies a crawler program that examines a data source and uses classifiers to try to
 *       determine its schema. If successful, the crawler records metadata concerning the data source
 *       in the AWS Glue Data Catalog.</p>
 */
export interface Crawler {
  /**
   * <p>The status of the last crawl, and potentially error information if
   *       an error occurred.</p>
   */
  LastCrawl?: LastCrawlInfo;

  /**
   * <p>Indicates whether the crawler is running, or whether a run is pending.</p>
   */
  State?: CrawlerState | string;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role that's used to access customer resources,
   *       such as Amazon Simple Storage Service (Amazon S3) data.</p>
   */
  Role?: string;

  /**
   * <p>The name of the crawler.</p>
   */
  Name?: string;

  /**
   * <p>For scheduled crawlers, the schedule when the crawler runs.</p>
   */
  Schedule?: Schedule;

  /**
   * <p>The name of the <code>SecurityConfiguration</code> structure to be used by this
   *       crawler.</p>
   */
  CrawlerSecurityConfiguration?: string;

  /**
   * <p>The name of the database in which the crawler's output is stored.</p>
   */
  DatabaseName?: string;

  /**
   * <p>If the crawler is running, contains the total time elapsed since the last crawl
   *       began.</p>
   */
  CrawlElapsedTime?: number;

  /**
   * <p>The policy that specifies update and delete behaviors for the crawler.</p>
   */
  SchemaChangePolicy?: SchemaChangePolicy;

  /**
   * <p>A description of the crawler.</p>
   */
  Description?: string;

  /**
   * <p>A collection of targets to crawl.</p>
   */
  Targets?: CrawlerTargets;

  /**
   * <p>The time that the crawler was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The prefix added to the names of tables that are created.</p>
   */
  TablePrefix?: string;

  /**
   * <p>Crawler configuration information. This versioned JSON string allows users
   *         to specify aspects of a crawler's behavior.
   *         For more information, see <a href="https://docs.aws.amazon.com/glue/latest/dg/crawler-configuration.html">Configuring a Crawler</a>.</p>
   */
  Configuration?: string;

  /**
   * <p>The time that the crawler was last updated.</p>
   */
  LastUpdated?: Date;

  /**
   * <p>A list of UTF-8 strings that specify the custom classifiers that are associated
   *      with the crawler.</p>
   */
  Classifiers?: string[];

  /**
   * <p>The version of the crawler.</p>
   */
  Version?: number;
}

export namespace Crawler {
  export const filterSensitiveLog = (obj: Crawler): any => ({
    ...obj,
  });
}

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

export namespace BatchGetCrawlersResponse {
  export const filterSensitiveLog = (obj: BatchGetCrawlersResponse): any => ({
    ...obj,
  });
}

export interface BatchGetDevEndpointsRequest {
  /**
   * <p>The list of <code>DevEndpoint</code> names, which might be the names returned from the
   *         <code>ListDevEndpoint</code> operation.</p>
   */
  DevEndpointNames: string[] | undefined;
}

export namespace BatchGetDevEndpointsRequest {
  export const filterSensitiveLog = (obj: BatchGetDevEndpointsRequest): any => ({
    ...obj,
  });
}

export type WorkerType = "G.1X" | "G.2X" | "Standard";

/**
 * <p>A development endpoint where a developer can remotely debug extract, transform, and load
 *       (ETL) scripts.</p>
 */
export interface DevEndpoint {
  /**
   * <p>The public key to be used by this <code>DevEndpoint</code> for authentication. This
   *       attribute is provided for backward compatibility because the recommended attribute to use is
   *       public keys.</p>
   */
  PublicKey?: string;

  /**
   * <p>A list of security group identifiers used in this <code>DevEndpoint</code>.</p>
   */
  SecurityGroupIds?: string[];

  /**
   * <p>A private IP address to access the <code>DevEndpoint</code> within a VPC if the
   *         <code>DevEndpoint</code> is created within one. The <code>PrivateAddress</code> field is
   *       present only when you create the <code>DevEndpoint</code> within your VPC.</p>
   */
  PrivateAddress?: string;

  /**
   * <p>The name of the <code>SecurityConfiguration</code> structure to be used with this
   *         <code>DevEndpoint</code>.</p>
   */
  SecurityConfiguration?: string;

  /**
   * <p>The YARN endpoint address used by this <code>DevEndpoint</code>.</p>
   */
  YarnEndpointAddress?: string;

  /**
   * <p>The path to one or more Java <code>.jar</code> files in an S3 bucket that should be loaded
   *       in your <code>DevEndpoint</code>.</p>
   *          <note>
   *             <p>You can only use pure Java/Scala libraries with a <code>DevEndpoint</code>.</p>
   *          </note>
   */
  ExtraJarsS3Path?: string;

  /**
   * <p>The number of AWS Glue Data Processing Units (DPUs) allocated to this
   *         <code>DevEndpoint</code>.</p>
   */
  NumberOfNodes?: number;

  /**
   * <p>The AWS Availability Zone where this <code>DevEndpoint</code> is located.</p>
   */
  AvailabilityZone?: string;

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
   * <p>The Amazon Resource Name (ARN) of the IAM role used in this
   *       <code>DevEndpoint</code>.</p>
   */
  RoleArn?: string;

  /**
   * <p>The Apache Zeppelin port for the remote Apache Spark interpreter.</p>
   */
  ZeppelinRemoteSparkInterpreterPort?: number;

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
   * <p>The public IP address used by this <code>DevEndpoint</code>. The
   *         <code>PublicAddress</code> field is present only when you create a non-virtual private cloud
   *       (VPC) <code>DevEndpoint</code>.</p>
   */
  PublicAddress?: string;

  /**
   * <p>The status of the last update.</p>
   */
  LastUpdateStatus?: string;

  /**
   * <p>The subnet ID for this <code>DevEndpoint</code>.</p>
   */
  SubnetId?: string;

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
   * <p>The number of workers of a defined <code>workerType</code> that are allocated to the development endpoint.</p>
   *
   * 		       <p>The maximum number of workers you can define are 299 for <code>G.1X</code>, and 149 for <code>G.2X</code>. </p>
   */
  NumberOfWorkers?: number;

  /**
   * <p>The point in time at which this DevEndpoint was created.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * <p>The ID of the virtual private cloud (VPC) used by this <code>DevEndpoint</code>.</p>
   */
  VpcId?: string;

  /**
   * <p>The name of the <code>DevEndpoint</code>.</p>
   */
  EndpointName?: string;

  /**
   * <p>Glue version determines the versions of Apache Spark and Python that AWS Glue supports. The Python version indicates the version supported for running your ETL scripts on development endpoints. </p>
   *
   *          <p>For more information about the available AWS Glue versions and corresponding Spark and Python versions, see <a href="https://docs.aws.amazon.com/glue/latest/dg/add-job.html">Glue version</a> in the developer guide.</p>
   *
   * 	        <p>Development endpoints that are created without specifying a Glue version default to Glue 0.9.</p>
   *
   * 	        <p>You can specify a version of Python support for development endpoints by using the <code>Arguments</code> parameter in the <code>CreateDevEndpoint</code> or <code>UpdateDevEndpoint</code> APIs. If no arguments are provided, the version defaults to Python 2.</p>
   */
  GlueVersion?: string;

  /**
   * <p>A map of arguments used to configure the <code>DevEndpoint</code>.</p>
   *          <p>Valid arguments are:</p>
   * 	        <ul>
   *             <li>
   *                <p>
   *                   <code>"--enable-glue-datacatalog": ""</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"GLUE_PYTHON_VERSION": "3"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"GLUE_PYTHON_VERSION": "2"</code>
   *                </p>
   *             </li>
   *          </ul>
   *
   *          <p>You can specify a version of Python support for development endpoints by using the <code>Arguments</code> parameter in the <code>CreateDevEndpoint</code> or <code>UpdateDevEndpoint</code> APIs. If no arguments are provided, the version defaults to Python 2.</p>
   */
  Arguments?: { [key: string]: string };

  /**
   * <p>The point in time at which this <code>DevEndpoint</code> was last modified.</p>
   */
  LastModifiedTimestamp?: Date;

  /**
   * <p>The current status of this <code>DevEndpoint</code>.</p>
   */
  Status?: string;

  /**
   * <p>The reason for a current failure in this <code>DevEndpoint</code>.</p>
   */
  FailureReason?: string;
}

export namespace DevEndpoint {
  export const filterSensitiveLog = (obj: DevEndpoint): any => ({
    ...obj,
  });
}

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

export namespace BatchGetDevEndpointsResponse {
  export const filterSensitiveLog = (obj: BatchGetDevEndpointsResponse): any => ({
    ...obj,
  });
}

export interface BatchGetJobsRequest {
  /**
   * <p>A list of job names, which might be the names returned from the <code>ListJobs</code>
   *       operation.</p>
   */
  JobNames: string[] | undefined;
}

export namespace BatchGetJobsRequest {
  export const filterSensitiveLog = (obj: BatchGetJobsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies code executed when a job is run.</p>
 */
export interface JobCommand {
  /**
   * <p>The name of the job command. For an Apache Spark ETL job, this must be
   *       <code>glueetl</code>. For a Python shell job, it must be <code>pythonshell</code>.
   *       For an Apache Spark streaming ETL job, this must be <code>gluestreaming</code>.</p>
   */
  Name?: string;

  /**
   * <p>Specifies the Amazon Simple Storage Service (Amazon S3) path to a script that executes a
   *       job.</p>
   */
  ScriptLocation?: string;

  /**
   * <p>The Python version being used to execute a Python shell job. Allowed values are 2 or 3.</p>
   */
  PythonVersion?: string;
}

export namespace JobCommand {
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
  export const filterSensitiveLog = (obj: ExecutionProperty): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies a job definition.</p>
 */
export interface Job {
  /**
   * <p>This field is reserved for future use.</p>
   */
  LogUri?: string;

  /**
   * <p>The <code>JobCommand</code> that executes this job.</p>
   */
  Command?: JobCommand;

  /**
   * <p>The number of workers of a defined <code>workerType</code> that are allocated when a job runs.</p>
   *
   * 		       <p>The maximum number of workers you can define are 299 for <code>G.1X</code>, and 149 for <code>G.2X</code>. </p>
   */
  NumberOfWorkers?: number;

  /**
   * <p>Glue version determines the versions of Apache Spark and Python that AWS Glue supports. The Python version indicates the version supported for jobs of type Spark. </p>
   *
   *          <p>For more information about the available AWS Glue versions and corresponding Spark and Python versions, see <a href="https://docs.aws.amazon.com/glue/latest/dg/add-job.html">Glue version</a> in the developer guide.</p>
   *
   * 	        <p>Jobs that are created without specifying a Glue version default to Glue 0.9.</p>
   */
  GlueVersion?: string;

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
   * <p>Specifies configuration properties of a job notification.</p>
   */
  NotificationProperty?: NotificationProperty;

  /**
   * <p>The name of the <code>SecurityConfiguration</code> structure to be used with this
   *       job.</p>
   */
  SecurityConfiguration?: string;

  /**
   * <p>The time and date that this job definition was created.</p>
   */
  CreatedOn?: Date;

  /**
   * <p>The name you assign to this job definition.</p>
   */
  Name?: string;

  /**
   * <p>The connections used for this job.</p>
   */
  Connections?: ConnectionsList;

  /**
   * <p>The job timeout in minutes.  This is the maximum time that a job run
   *       can consume resources before it is terminated and enters <code>TIMEOUT</code>
   *       status. The default is 2,880 minutes (48 hours).</p>
   */
  Timeout?: number;

  /**
   * <p>This field is deprecated. Use <code>MaxCapacity</code> instead.</p>
   *
   *          <p>The number of AWS Glue data processing units (DPUs) allocated to runs of this job. You can
   *       allocate from 2 to 100 DPUs; the default is 10. A DPU is a relative measure of processing
   *       power that consists of 4 vCPUs of compute capacity and 16 GB of memory. For more information,
   *       see the <a href="https://aws.amazon.com/glue/pricing/">AWS Glue pricing
   *       page</a>.</p>
   * 	        <p></p>
   */
  AllocatedCapacity?: number;

  /**
   * <p>The number of AWS Glue data processing units (DPUs) that can be allocated when this job runs. A DPU is a relative measure
   *       of processing power that consists of 4 vCPUs of compute capacity and 16 GB of memory.
   *       For more information, see the <a href="https://aws.amazon.com/glue/pricing/">AWS Glue
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
   */
  MaxCapacity?: number;

  /**
   * <p>Non-overridable arguments for this job, specified as name-value pairs.</p>
   */
  NonOverridableArguments?: { [key: string]: string };

  /**
   * <p>The maximum number of times to retry this job after a JobRun fails.</p>
   */
  MaxRetries?: number;

  /**
   * <p>An <code>ExecutionProperty</code> specifying the maximum number of concurrent runs allowed
   *       for this job.</p>
   */
  ExecutionProperty?: ExecutionProperty;

  /**
   * <p>The last point in time when this job definition was modified.</p>
   */
  LastModifiedOn?: Date;

  /**
   * <p>The default arguments for this job, specified as name-value pairs.</p>
   *          <p>You can specify arguments here that your own job-execution script
   *       consumes, as well as arguments that AWS Glue itself consumes.</p>
   *          <p>For information about how to specify and consume your own Job arguments, see the <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-python-calling.html">Calling AWS Glue APIs in Python</a> topic in the developer guide.</p>
   *          <p>For information about the key-value pairs that AWS Glue consumes to set up your job, see the <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-etl-glue-arguments.html">Special Parameters Used by AWS Glue</a> topic in the developer guide.</p>
   */
  DefaultArguments?: { [key: string]: string };

  /**
   * <p>The name or Amazon Resource Name (ARN) of the IAM role associated with this job.</p>
   */
  Role?: string;

  /**
   * <p>A description of the job.</p>
   */
  Description?: string;
}

export namespace Job {
  export const filterSensitiveLog = (obj: Job): any => ({
    ...obj,
  });
}

export interface BatchGetJobsResponse {
  /**
   * <p>A list of names of jobs not found.</p>
   */
  JobsNotFound?: string[];

  /**
   * <p>A list of job definitions.</p>
   */
  Jobs?: Job[];
}

export namespace BatchGetJobsResponse {
  export const filterSensitiveLog = (obj: BatchGetJobsResponse): any => ({
    ...obj,
  });
}

export interface BatchGetPartitionRequest {
  /**
   * <p>The ID of the Data Catalog where the partitions in question reside.
   *       If none is supplied, the AWS account ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * <p>A list of partition values identifying the partitions to retrieve.</p>
   */
  PartitionsToGet: PartitionValueList[] | undefined;

  /**
   * <p>The name of the catalog database where the partitions reside.</p>
   */
  DatabaseName: string | undefined;

  /**
   * <p>The name of the partitions' table.</p>
   */
  TableName: string | undefined;
}

export namespace BatchGetPartitionRequest {
  export const filterSensitiveLog = (obj: BatchGetPartitionRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Represents a slice of table data.</p>
 */
export interface Partition {
  /**
   * <p>The last time at which the partition was accessed.</p>
   */
  LastAccessTime?: Date;

  /**
   * <p>The name of the catalog database in which to create the partition.</p>
   */
  DatabaseName?: string;

  /**
   * <p>The last time at which column statistics were computed for this
   *       partition.</p>
   */
  LastAnalyzedTime?: Date;

  /**
   * <p>These key-value pairs define partition parameters.</p>
   */
  Parameters?: { [key: string]: string };

  /**
   * <p>The time at which the partition was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>Provides information about the physical
   *       location where the partition is stored.</p>
   */
  StorageDescriptor?: StorageDescriptor;

  /**
   * <p>The values of the partition.</p>
   */
  Values?: string[];

  /**
   * <p>The name of the database table in which to create the partition.</p>
   */
  TableName?: string;

  /**
   * <p>The ID of the Data Catalog in which the partition resides.</p>
   */
  CatalogId?: string;
}

export namespace Partition {
  export const filterSensitiveLog = (obj: Partition): any => ({
    ...obj,
  });
}

export interface BatchGetPartitionResponse {
  /**
   * <p>A list of the partition values in the request for which partitions were not
   *       returned.</p>
   */
  UnprocessedKeys?: PartitionValueList[];

  /**
   * <p>A list of the requested partitions.</p>
   */
  Partitions?: Partition[];
}

export namespace BatchGetPartitionResponse {
  export const filterSensitiveLog = (obj: BatchGetPartitionResponse): any => ({
    ...obj,
  });
}

export interface BatchGetTriggersRequest {
  /**
   * <p>A list of trigger names, which may be the names returned from the <code>ListTriggers</code> operation.</p>
   */
  TriggerNames: string[] | undefined;
}

export namespace BatchGetTriggersRequest {
  export const filterSensitiveLog = (obj: BatchGetTriggersRequest): any => ({
    ...obj,
  });
}

export enum CrawlState {
  CANCELLED = "CANCELLED",
  CANCELLING = "CANCELLING",
  FAILED = "FAILED",
  RUNNING = "RUNNING",
  SUCCEEDED = "SUCCEEDED",
}

export enum LogicalOperator {
  EQUALS = "EQUALS",
}

export enum JobRunState {
  FAILED = "FAILED",
  RUNNING = "RUNNING",
  STARTING = "STARTING",
  STOPPED = "STOPPED",
  STOPPING = "STOPPING",
  SUCCEEDED = "SUCCEEDED",
  TIMEOUT = "TIMEOUT",
}

/**
 * <p>Defines a condition under which a trigger fires.</p>
 */
export interface Condition {
  /**
   * <p>The name of the crawler to which this condition applies.</p>
   */
  CrawlerName?: string;

  /**
   * <p>The state of the crawler to which this condition applies.</p>
   */
  CrawlState?: CrawlState | string;

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
   * <p>The condition state. Currently, the values supported are <code>SUCCEEDED</code>,
   *       <code>STOPPED</code>, <code>TIMEOUT</code>, and <code>FAILED</code>.</p>
   */
  State?: JobRunState | string;
}

export namespace Condition {
  export const filterSensitiveLog = (obj: Condition): any => ({
    ...obj,
  });
}

export enum Logical {
  AND = "AND",
  ANY = "ANY",
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
  export const filterSensitiveLog = (obj: Predicate): any => ({
    ...obj,
  });
}

export enum TriggerState {
  ACTIVATED = "ACTIVATED",
  ACTIVATING = "ACTIVATING",
  CREATED = "CREATED",
  CREATING = "CREATING",
  DEACTIVATED = "DEACTIVATED",
  DEACTIVATING = "DEACTIVATING",
  DELETING = "DELETING",
  UPDATING = "UPDATING",
}

export enum TriggerType {
  CONDITIONAL = "CONDITIONAL",
  ON_DEMAND = "ON_DEMAND",
  SCHEDULED = "SCHEDULED",
}

/**
 * <p>Information about a specific trigger.</p>
 */
export interface Trigger {
  /**
   * <p>The predicate of this trigger, which defines when it will fire.</p>
   */
  Predicate?: Predicate;

  /**
   * <p>The type of trigger that this is.</p>
   */
  Type?: TriggerType | string;

  /**
   * <p>The name of the trigger.</p>
   */
  Name?: string;

  /**
   * <p>The name of the workflow associated with the trigger.</p>
   */
  WorkflowName?: string;

  /**
   * <p>The actions initiated by this trigger.</p>
   */
  Actions?: Action[];

  /**
   * <p>Reserved for future use.</p>
   */
  Id?: string;

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
   * <p>The current state of the trigger.</p>
   */
  State?: TriggerState | string;
}

export namespace Trigger {
  export const filterSensitiveLog = (obj: Trigger): any => ({
    ...obj,
  });
}

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

export namespace BatchGetTriggersResponse {
  export const filterSensitiveLog = (obj: BatchGetTriggersResponse): any => ({
    ...obj,
  });
}

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

export namespace BatchGetWorkflowsRequest {
  export const filterSensitiveLog = (obj: BatchGetWorkflowsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>An edge represents a directed connection between two AWS Glue components that are part of the workflow the
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

export namespace Edge {
  export const filterSensitiveLog = (obj: Edge): any => ({
    ...obj,
  });
}

/**
 * <p>The details of a crawl in the workflow.</p>
 */
export interface Crawl {
  /**
   * <p>The error message associated with the crawl.</p>
   */
  ErrorMessage?: string;

  /**
   * <p>The date and time on which the crawl started.</p>
   */
  StartedOn?: Date;

  /**
   * <p>The date and time on which the crawl completed.</p>
   */
  CompletedOn?: Date;

  /**
   * <p>The log stream associated with the crawl.</p>
   */
  LogStream?: string;

  /**
   * <p>The state of the crawler.</p>
   */
  State?: CrawlState | string;

  /**
   * <p>The log group associated with the crawl.</p>
   */
  LogGroup?: string;
}

export namespace Crawl {
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
  export const filterSensitiveLog = (obj: CrawlerNodeDetails): any => ({
    ...obj,
  });
}

/**
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

export namespace Predecessor {
  export const filterSensitiveLog = (obj: Predecessor): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about a job run.</p>
 */
export interface JobRun {
  /**
   * <p>The number of the attempt to run this job.</p>
   */
  Attempt?: number;

  /**
   * <p>Glue version determines the versions of Apache Spark and Python that AWS Glue supports. The Python version indicates the version supported for jobs of type Spark. </p>
   *
   *          <p>For more information about the available AWS Glue versions and corresponding Spark and Python versions, see <a href="https://docs.aws.amazon.com/glue/latest/dg/add-job.html">Glue version</a> in the developer guide.</p>
   *
   * 	        <p>Jobs that are created without specifying a Glue version default to Glue 0.9.</p>
   */
  GlueVersion?: string;

  /**
   * <p>The date and time at which this job run was started.</p>
   */
  StartedOn?: Date;

  /**
   * <p>The number of workers of a defined <code>workerType</code> that are allocated when a job runs.</p>
   *
   *          <p>The maximum number of workers you can define are 299 for <code>G.1X</code>, and 149 for <code>G.2X</code>. </p>
   */
  NumberOfWorkers?: number;

  /**
   * <p>The amount of time (in seconds) that the job run consumed resources.</p>
   */
  ExecutionTime?: number;

  /**
   * <p>This field is deprecated. Use <code>MaxCapacity</code> instead.</p>
   *
   *          <p>The number of AWS Glue data processing units (DPUs) allocated to this JobRun.
   *       From 2 to 100 DPUs can be allocated; the default is 10. A DPU is a relative measure
   *       of processing power that consists of 4 vCPUs of compute capacity and 16 GB of memory.
   *       For more information, see the <a href="https://aws.amazon.com/glue/pricing/">AWS Glue
   *         pricing page</a>.</p>
   */
  AllocatedCapacity?: number;

  /**
   * <p>A list of predecessors to this job run.</p>
   */
  PredecessorRuns?: Predecessor[];

  /**
   * <p>The <code>JobRun</code> timeout in minutes. This is the maximum time that a job run can
   *       consume resources before it is terminated and enters <code>TIMEOUT</code> status. The default
   *       is 2,880 minutes (48 hours). This overrides the timeout value set in the parent job.</p>
   */
  Timeout?: number;

  /**
   * <p>The number of AWS Glue data processing units (DPUs) that can be allocated when this job runs. A DPU is a relative measure
   *       of processing power that consists of 4 vCPUs of compute capacity and 16 GB of memory.
   *       For more information, see the <a href="https://docs.aws.amazon.com/https:/aws.amazon.com/glue/pricing/">AWS Glue
   *         pricing page</a>.</p>
   *
   *          <p>Do not set <code>Max Capacity</code> if using <code>WorkerType</code> and <code>NumberOfWorkers</code>.</p>
   *
   *          <p>The value that can be allocated for <code>MaxCapacity</code> depends on whether you are
   *       running a Python shell job or an Apache Spark ETL job:</p>
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
   * <p>The current state of the job run.</p>
   */
  JobRunState?: JobRunState | string;

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
   * <p>An error message associated with this job run.</p>
   */
  ErrorMessage?: string;

  /**
   * <p>The name of the log group for secure logging that can be server-side encrypted in Amazon
   *       CloudWatch using AWS KMS. This name can be <code>/aws-glue/jobs/</code>, in which case the
   *       default encryption is <code>NONE</code>. If you add a role name and
   *       <code>SecurityConfiguration</code> name (in other words,
   *       <code>/aws-glue/jobs-yourRoleName-yourSecurityConfigurationName/</code>), then that security
   *       configuration is used to encrypt the log group.</p>
   */
  LogGroupName?: string;

  /**
   * <p>The name of the <code>SecurityConfiguration</code> structure to be used with this job
   *       run.</p>
   */
  SecurityConfiguration?: string;

  /**
   * <p>The date and time that this job run completed.</p>
   */
  CompletedOn?: Date;

  /**
   * <p>The name of the job definition being used in this run.</p>
   */
  JobName?: string;

  /**
   * <p>The ID of this job run.</p>
   */
  Id?: string;

  /**
   * <p>The ID of the previous run of this job. For example, the <code>JobRunId</code> specified
   *       in the <code>StartJobRun</code> action.</p>
   */
  PreviousRunId?: string;

  /**
   * <p>Specifies configuration properties of a job run notification.</p>
   */
  NotificationProperty?: NotificationProperty;

  /**
   * <p>The last time that this job run was modified.</p>
   */
  LastModifiedOn?: Date;

  /**
   * <p>The job arguments associated with this run. For this job run, they replace the default arguments set in the job definition itself.</p>
   *          <p>You can specify arguments here that your own job-execution script
   *       consumes, as well as arguments that AWS Glue itself consumes.</p>
   *          <p>For information about how to specify and consume your own job arguments, see the <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-python-calling.html">Calling AWS Glue APIs in Python</a> topic in the developer guide.</p>
   *          <p>For information about the key-value pairs that AWS Glue consumes to set up your job, see the <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-etl-glue-arguments.html">Special Parameters Used by AWS Glue</a> topic in the developer guide.</p>
   */
  Arguments?: { [key: string]: string };

  /**
   * <p>The name of the trigger that started this job run.</p>
   */
  TriggerName?: string;
}

export namespace JobRun {
  export const filterSensitiveLog = (obj: JobRun): any => ({
    ...obj,
  });
}

/**
 * <p>The details of a Job node present in the workflow.</p>
 */
export interface JobNodeDetails {
  /**
   * <p>The information for the job runs represented by the job node.</p>
   */
  JobRuns?: JobRun[];
}

export namespace JobNodeDetails {
  export const filterSensitiveLog = (obj: JobNodeDetails): any => ({
    ...obj,
  });
}

/**
 * <p>The details of a Trigger node present in the workflow.</p>
 */
export interface TriggerNodeDetails {
  /**
   * <p>The information of the trigger represented by the trigger node.</p>
   */
  Trigger?: Trigger;
}

export namespace TriggerNodeDetails {
  export const filterSensitiveLog = (obj: TriggerNodeDetails): any => ({
    ...obj,
  });
}

export enum NodeType {
  CRAWLER = "CRAWLER",
  JOB = "JOB",
  TRIGGER = "TRIGGER",
}

/**
 * <p>A node represents an AWS Glue component such as a trigger, or job, etc., that is part of a workflow.</p>
 */
export interface Node {
  /**
   * <p>Details of the Job when the node represents a Job.</p>
   */
  JobDetails?: JobNodeDetails;

  /**
   * <p>Details of the Trigger when the node represents a Trigger.</p>
   */
  TriggerDetails?: TriggerNodeDetails;

  /**
   * <p>The unique Id assigned to the node within the workflow.</p>
   */
  UniqueId?: string;

  /**
   * <p>The name of the AWS Glue component represented by the node.</p>
   */
  Name?: string;

  /**
   * <p>Details of the crawler when the node represents a crawler.</p>
   */
  CrawlerDetails?: CrawlerNodeDetails;

  /**
   * <p>The type of AWS Glue component represented by the node.</p>
   */
  Type?: NodeType | string;
}

export namespace Node {
  export const filterSensitiveLog = (obj: Node): any => ({
    ...obj,
  });
}

/**
 * <p>A workflow graph represents the complete workflow containing all the AWS Glue components present in the
 *       workflow and all the directed connections between them.</p>
 */
export interface WorkflowGraph {
  /**
   * <p>A list of all the directed connections between the nodes belonging to the workflow.</p>
   */
  Edges?: Edge[];

  /**
   * <p>A list of the the AWS Glue components belong to the workflow represented as nodes.</p>
   */
  Nodes?: Node[];
}

export namespace WorkflowGraph {
  export const filterSensitiveLog = (obj: WorkflowGraph): any => ({
    ...obj,
  });
}

/**
 * <p>Workflow run statistics provides statistics about the workflow run.</p>
 */
export interface WorkflowRunStatistics {
  /**
   * <p>Total number of Actions that timed out.</p>
   */
  TimeoutActions?: number;

  /**
   * <p>Total number Actions in running state.</p>
   */
  RunningActions?: number;

  /**
   * <p>Total number of Actions that have succeeded.</p>
   */
  SucceededActions?: number;

  /**
   * <p>Total number of Actions that have failed.</p>
   */
  FailedActions?: number;

  /**
   * <p>Total number of Actions that have stopped.</p>
   */
  StoppedActions?: number;

  /**
   * <p>Total number of Actions in the workflow run.</p>
   */
  TotalActions?: number;
}

export namespace WorkflowRunStatistics {
  export const filterSensitiveLog = (obj: WorkflowRunStatistics): any => ({
    ...obj,
  });
}

export enum WorkflowRunStatus {
  COMPLETED = "COMPLETED",
  RUNNING = "RUNNING",
  STOPPED = "STOPPED",
  STOPPING = "STOPPING",
}

/**
 * <p>A workflow run is an execution of a workflow providing all the runtime information.</p>
 */
export interface WorkflowRun {
  /**
   * <p>The statistics of the run.</p>
   */
  Statistics?: WorkflowRunStatistics;

  /**
   * <p>Name of the workflow that was executed.</p>
   */
  Name?: string;

  /**
   * <p>The date and time when the workflow run completed.</p>
   */
  CompletedOn?: Date;

  /**
   * <p>The graph representing all the AWS Glue components that belong to the workflow as nodes and directed
   *       connections between them as edges.</p>
   */
  Graph?: WorkflowGraph;

  /**
   * <p>The date and time when the workflow run was started.</p>
   */
  StartedOn?: Date;

  /**
   * <p>The workflow run properties which were set during the run.</p>
   */
  WorkflowRunProperties?: { [key: string]: string };

  /**
   * <p>The ID of this workflow run.</p>
   */
  WorkflowRunId?: string;

  /**
   * <p>The ID of the previous workflow run.</p>
   */
  PreviousRunId?: string;

  /**
   * <p>The status of the workflow run.</p>
   */
  Status?: WorkflowRunStatus | string;
}

export namespace WorkflowRun {
  export const filterSensitiveLog = (obj: WorkflowRun): any => ({
    ...obj,
  });
}

/**
 * <p>A workflow represents a flow in which AWS Glue components should be executed to complete a logical
 *       task.</p>
 */
export interface Workflow {
  /**
   * <p>The graph representing all the AWS Glue components that belong to the workflow as nodes and directed
   *       connections between them as edges.</p>
   */
  Graph?: WorkflowGraph;

  /**
   * <p>A collection of properties to be used as part of each execution of the workflow.</p>
   */
  DefaultRunProperties?: { [key: string]: string };

  /**
   * <p>A description of the workflow.</p>
   */
  Description?: string;

  /**
   * <p>The name of the workflow representing the flow.</p>
   */
  Name?: string;

  /**
   * <p>The date and time when the workflow was last modified.</p>
   */
  LastModifiedOn?: Date;

  /**
   * <p>The information about the last execution of the workflow.</p>
   */
  LastRun?: WorkflowRun;

  /**
   * <p>The date and time when the workflow was created.</p>
   */
  CreatedOn?: Date;
}

export namespace Workflow {
  export const filterSensitiveLog = (obj: Workflow): any => ({
    ...obj,
  });
}

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

export namespace BatchGetWorkflowsResponse {
  export const filterSensitiveLog = (obj: BatchGetWorkflowsResponse): any => ({
    ...obj,
  });
}

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

export namespace BatchStopJobRunRequest {
  export const filterSensitiveLog = (obj: BatchStopJobRunRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Records an error that occurred when attempting to stop a
 *       specified job run.</p>
 */
export interface BatchStopJobRunError {
  /**
   * <p>The <code>JobRunId</code> of the job run in question.</p>
   */
  JobRunId?: string;

  /**
   * <p>The name of the job definition that is used in the job run in question.</p>
   */
  JobName?: string;

  /**
   * <p>Specifies details about the error that was encountered.</p>
   */
  ErrorDetail?: ErrorDetail;
}

export namespace BatchStopJobRunError {
  export const filterSensitiveLog = (obj: BatchStopJobRunError): any => ({
    ...obj,
  });
}

/**
 * <p>Records a successful request to stop a specified <code>JobRun</code>.</p>
 */
export interface BatchStopJobRunSuccessfulSubmission {
  /**
   * <p>The <code>JobRunId</code> of the job run that was stopped.</p>
   */
  JobRunId?: string;

  /**
   * <p>The name of the job definition used in the job run that was stopped.</p>
   */
  JobName?: string;
}

export namespace BatchStopJobRunSuccessfulSubmission {
  export const filterSensitiveLog = (obj: BatchStopJobRunSuccessfulSubmission): any => ({
    ...obj,
  });
}

export interface BatchStopJobRunResponse {
  /**
   * <p>A list of the errors that were encountered in trying to stop <code>JobRuns</code>,
   *       including the <code>JobRunId</code> for which each error was encountered and details about the
   *       error.</p>
   */
  Errors?: BatchStopJobRunError[];

  /**
   * <p>A list of the JobRuns that were successfully submitted for stopping.</p>
   */
  SuccessfulSubmissions?: BatchStopJobRunSuccessfulSubmission[];
}

export namespace BatchStopJobRunResponse {
  export const filterSensitiveLog = (obj: BatchStopJobRunResponse): any => ({
    ...obj,
  });
}

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

export namespace CancelMLTaskRunRequest {
  export const filterSensitiveLog = (obj: CancelMLTaskRunRequest): any => ({
    ...obj,
  });
}

export enum TaskStatusType {
  FAILED = "FAILED",
  RUNNING = "RUNNING",
  STARTING = "STARTING",
  STOPPED = "STOPPED",
  STOPPING = "STOPPING",
  SUCCEEDED = "SUCCEEDED",
  TIMEOUT = "TIMEOUT",
}

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

export namespace CancelMLTaskRunResponse {
  export const filterSensitiveLog = (obj: CancelMLTaskRunResponse): any => ({
    ...obj,
  });
}

export enum CsvHeaderOption {
  ABSENT = "ABSENT",
  PRESENT = "PRESENT",
  UNKNOWN = "UNKNOWN",
}

/**
 * <p>Specifies a custom CSV classifier for <code>CreateClassifier</code> to create.</p>
 */
export interface CreateCsvClassifierRequest {
  /**
   * <p>Specifies not to trim values before identifying the type of column values. The default value is true.</p>
   */
  DisableValueTrimming?: boolean;

  /**
   * <p>The name of the classifier.</p>
   */
  Name: string | undefined;

  /**
   * <p>Enables the processing of files that contain only one column.</p>
   */
  AllowSingleColumn?: boolean;

  /**
   * <p>A custom symbol to denote what separates each column entry in the row.</p>
   */
  Delimiter?: string;

  /**
   * <p>A list of strings representing column names.</p>
   */
  Header?: string[];

  /**
   * <p>Indicates whether the CSV file contains a header.</p>
   */
  ContainsHeader?: CsvHeaderOption | string;

  /**
   * <p>A custom symbol to denote what combines content into a single column value. Must be different from the column delimiter.</p>
   */
  QuoteSymbol?: string;
}

export namespace CreateCsvClassifierRequest {
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
   * <p>Optional custom grok patterns used by this classifier.</p>
   */
  CustomPatterns?: string;

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
}

export namespace CreateGrokClassifierRequest {
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
   *       AWS Glue supports a subset of JsonPath, as described in <a href="https://docs.aws.amazon.com/glue/latest/dg/custom-classifier.html#custom-classifier-json">Writing JsonPath Custom Classifiers</a>.</p>
   */
  JsonPath: string | undefined;
}

export namespace CreateJsonClassifierRequest {
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
  export const filterSensitiveLog = (obj: CreateXMLClassifierRequest): any => ({
    ...obj,
  });
}

export interface CreateClassifierRequest {
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

  /**
   * <p>An <code>XMLClassifier</code> object specifying the classifier
   *       to create.</p>
   */
  XMLClassifier?: CreateXMLClassifierRequest;

  /**
   * <p>A <code>GrokClassifier</code> object specifying the classifier
   *       to create.</p>
   */
  GrokClassifier?: CreateGrokClassifierRequest;
}

export namespace CreateClassifierRequest {
  export const filterSensitiveLog = (obj: CreateClassifierRequest): any => ({
    ...obj,
  });
}

export interface CreateClassifierResponse {}

export namespace CreateClassifierResponse {
  export const filterSensitiveLog = (obj: CreateClassifierResponse): any => ({
    ...obj,
  });
}

export enum ConnectionPropertyKey {
  CONFIG_FILES = "CONFIG_FILES",
  CONNECTION_URL = "CONNECTION_URL",
  CUSTOM_JDBC_CERT = "CUSTOM_JDBC_CERT",
  CUSTOM_JDBC_CERT_STRING = "CUSTOM_JDBC_CERT_STRING",
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
  KAFKA_CUSTOM_CERT = "KAFKA_CUSTOM_CERT",
  KAFKA_SKIP_CUSTOM_CERT_VALIDATION = "KAFKA_SKIP_CUSTOM_CERT_VALIDATION",
  KAFKA_SSL_ENABLED = "KAFKA_SSL_ENABLED",
  PASSWORD = "PASSWORD",
  PORT = "PORT",
  SKIP_CUSTOM_JDBC_CERT_VALIDATION = "SKIP_CUSTOM_JDBC_CERT_VALIDATION",
  USER_NAME = "USERNAME",
}

export enum ConnectionType {
  JDBC = "JDBC",
  KAFKA = "KAFKA",
  MONGODB = "MONGODB",
  SFTP = "SFTP",
}

/**
 * <p>Specifies the physical requirements for a connection.</p>
 */
export interface PhysicalConnectionRequirements {
  /**
   * <p>The security group ID list used by the connection.</p>
   */
  SecurityGroupIdList?: string[];

  /**
   * <p>The subnet ID used by the connection.</p>
   */
  SubnetId?: string;

  /**
   * <p>The connection's Availability Zone. This field is redundant because the specified subnet
   *       implies the Availability Zone to be used. Currently the field must be populated, but it will
   *       be deprecated in the future.</p>
   */
  AvailabilityZone?: string;
}

export namespace PhysicalConnectionRequirements {
  export const filterSensitiveLog = (obj: PhysicalConnectionRequirements): any => ({
    ...obj,
  });
}

/**
 * <p>A structure that is used to specify a connection to create or update.</p>
 */
export interface ConnectionInput {
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
  ConnectionProperties: { [key: string]: string } | undefined;

  /**
   * <p>A map of physical connection requirements, such as virtual private cloud (VPC) and
   *         <code>SecurityGroup</code>, that are needed to successfully make this connection.</p>
   */
  PhysicalConnectionRequirements?: PhysicalConnectionRequirements;

  /**
   * <p>The description of the connection.</p>
   */
  Description?: string;

  /**
   * <p>The name of the connection.</p>
   */
  Name: string | undefined;
}

export namespace ConnectionInput {
  export const filterSensitiveLog = (obj: ConnectionInput): any => ({
    ...obj,
  });
}

export interface CreateConnectionRequest {
  /**
   * <p>The ID of the Data Catalog in which to create the connection. If none is provided, the AWS
   *       account ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * <p>A <code>ConnectionInput</code> object defining the connection
   *       to create.</p>
   */
  ConnectionInput: ConnectionInput | undefined;
}

export namespace CreateConnectionRequest {
  export const filterSensitiveLog = (obj: CreateConnectionRequest): any => ({
    ...obj,
  });
}

export interface CreateConnectionResponse {}

export namespace CreateConnectionResponse {
  export const filterSensitiveLog = (obj: CreateConnectionResponse): any => ({
    ...obj,
  });
}

export interface CreateCrawlerRequest {
  /**
   * <p>The IAM role or Amazon Resource Name (ARN) of an IAM role used by the new crawler to
   *       access customer resources.</p>
   */
  Role: string | undefined;

  /**
   * <p>The tags to use with this crawler request. You may use tags to limit access to the
   *             crawler. For more information about tags in AWS Glue, see <a href="https://docs.aws.amazon.com/glue/latest/dg/monitor-tags.html">AWS Tags in AWS Glue</a> in the developer
   *             guide.</p>
   */
  Tags?: { [key: string]: string };

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
   * <p>The name of the <code>SecurityConfiguration</code> structure to be used by this
   *       crawler.</p>
   */
  CrawlerSecurityConfiguration?: string;

  /**
   * <p>The AWS Glue database where results are written, such as:
   *         <code>arn:aws:daylight:us-east-1::database/sometable/*</code>.</p>
   */
  DatabaseName?: string;

  /**
   * <p>A <code>cron</code> expression used to specify the schedule (see <a href="https://docs.aws.amazon.com/glue/latest/dg/monitor-data-warehouse-schedule.html">Time-Based Schedules for Jobs and Crawlers</a>. For example, to run
   *       something every day at 12:15 UTC, you would specify:
   *       <code>cron(15 12 * * ? *)</code>.</p>
   */
  Schedule?: string;

  /**
   * <p>Name of the new crawler.</p>
   */
  Name: string | undefined;

  /**
   * <p>A description of the new crawler.</p>
   */
  Description?: string;

  /**
   * <p>Crawler configuration information. This versioned JSON
   *       string allows users to specify aspects of a crawler's behavior.
   *       For more information, see <a href="https://docs.aws.amazon.com/glue/latest/dg/crawler-configuration.html">Configuring a Crawler</a>.</p>
   */
  Configuration?: string;

  /**
   * <p>A list of collection of targets to crawl.</p>
   */
  Targets: CrawlerTargets | undefined;

  /**
   * <p>The policy for the crawler's update and deletion behavior.</p>
   */
  SchemaChangePolicy?: SchemaChangePolicy;
}

export namespace CreateCrawlerRequest {
  export const filterSensitiveLog = (obj: CreateCrawlerRequest): any => ({
    ...obj,
  });
}

export interface CreateCrawlerResponse {}

export namespace CreateCrawlerResponse {
  export const filterSensitiveLog = (obj: CreateCrawlerResponse): any => ({
    ...obj,
  });
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
 * <p>The AWS Lake Formation principal.</p>
 */
export interface DataLakePrincipal {
  /**
   * <p>An identifier for the AWS Lake Formation principal.</p>
   */
  DataLakePrincipalIdentifier?: string;
}

export namespace DataLakePrincipal {
  export const filterSensitiveLog = (obj: DataLakePrincipal): any => ({
    ...obj,
  });
}

/**
 * <p>Permissions granted to a principal.</p>
 */
export interface PrincipalPermissions {
  /**
   * <p>The permissions that are granted to the principal.</p>
   */
  Permissions?: (Permission | string)[];

  /**
   * <p>The principal who is granted permissions.</p>
   */
  Principal?: DataLakePrincipal;
}

export namespace PrincipalPermissions {
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
  export const filterSensitiveLog = (obj: DatabaseIdentifier): any => ({
    ...obj,
  });
}

/**
 * <p>The structure used to create or update a database.</p>
 */
export interface DatabaseInput {
  /**
   * <p>A <code>DatabaseIdentifier</code> structure that describes a target database for resource linking.</p>
   */
  TargetDatabase?: DatabaseIdentifier;

  /**
   * <p>Creates a set of default permissions on the table for principals. </p>
   */
  CreateTableDefaultPermissions?: PrincipalPermissions[];

  /**
   * <p>The location of the database (for example, an HDFS path). </p>
   */
  LocationUri?: string;

  /**
   * <p>These key-value pairs define parameters and properties
   *       of the database.</p>
   *          <p>These key-value pairs define parameters and properties of the database.</p>
   */
  Parameters?: { [key: string]: string };

  /**
   * <p>A description of the database.</p>
   */
  Description?: string;

  /**
   * <p>The name of the database. For Hive compatibility, this is folded to lowercase when it is
   *       stored.</p>
   */
  Name: string | undefined;
}

export namespace DatabaseInput {
  export const filterSensitiveLog = (obj: DatabaseInput): any => ({
    ...obj,
  });
}

export interface CreateDatabaseRequest {
  /**
   * <p>The metadata for the database.</p>
   */
  DatabaseInput: DatabaseInput | undefined;

  /**
   * <p>The ID of the Data Catalog in which to create the database. If none is provided, the AWS
   *       account ID is used by default.</p>
   */
  CatalogId?: string;
}

export namespace CreateDatabaseRequest {
  export const filterSensitiveLog = (obj: CreateDatabaseRequest): any => ({
    ...obj,
  });
}

export interface CreateDatabaseResponse {}

export namespace CreateDatabaseResponse {
  export const filterSensitiveLog = (obj: CreateDatabaseResponse): any => ({
    ...obj,
  });
}

export interface CreateDevEndpointRequest {
  /**
   * <p>The subnet ID for the new <code>DevEndpoint</code> to use.</p>
   */
  SubnetId?: string;

  /**
   * <p>The name of the <code>SecurityConfiguration</code> structure to be used with this
   *         <code>DevEndpoint</code>.</p>
   */
  SecurityConfiguration?: string;

  /**
   * <p>The public key to be used by this <code>DevEndpoint</code> for authentication. This
   *       attribute is provided for backward compatibility because the recommended attribute to use is
   *       public keys.</p>
   */
  PublicKey?: string;

  /**
   * <p>The name to be assigned to the new <code>DevEndpoint</code>.</p>
   */
  EndpointName: string | undefined;

  /**
   * <p>A list of public keys to be used by the development endpoints for authentication. The use
   *       of this attribute is preferred over a single public key because the public keys allow you to
   *       have a different private key per client.</p>
   *
   *          <note>
   *             <p>If you previously created an endpoint with a public key, you must remove that key to be able
   *         to set a list of public keys. Call the <code>UpdateDevEndpoint</code> API with the public
   *         key content in the <code>deletePublicKeys</code> attribute, and the list of new keys in the
   *           <code>addPublicKeys</code> attribute.</p>
   *          </note>
   */
  PublicKeys?: string[];

  /**
   * <p>The IAM role for the <code>DevEndpoint</code>.</p>
   */
  RoleArn: string | undefined;

  /**
   * <p>The number of AWS Glue Data Processing Units (DPUs) to allocate to this
   *         <code>DevEndpoint</code>.</p>
   */
  NumberOfNodes?: number;

  /**
   * <p>Security group IDs for the security groups to be used by the new
   *       <code>DevEndpoint</code>.</p>
   */
  SecurityGroupIds?: string[];

  /**
   * <p>The tags to use with this DevEndpoint. You may use tags to limit access to the DevEndpoint. For more information about tags in AWS Glue, see <a href="https://docs.aws.amazon.com/glue/latest/dg/monitor-tags.html">AWS Tags in AWS Glue</a> in the developer guide.</p>
   */
  Tags?: { [key: string]: string };

  /**
   * <p>A map of arguments used to configure the <code>DevEndpoint</code>.</p>
   */
  Arguments?: { [key: string]: string };

  /**
   * <p>Glue version determines the versions of Apache Spark and Python that AWS Glue supports. The Python version indicates the version supported for running your ETL scripts on development endpoints. </p>
   *
   *          <p>For more information about the available AWS Glue versions and corresponding Spark and Python versions, see <a href="https://docs.aws.amazon.com/glue/latest/dg/add-job.html">Glue version</a> in the developer guide.</p>
   *
   * 	        <p>Development endpoints that are created without specifying a Glue version default to Glue 0.9.</p>
   *
   * 	        <p>You can specify a version of Python support for development endpoints by using the <code>Arguments</code> parameter in the <code>CreateDevEndpoint</code> or <code>UpdateDevEndpoint</code> APIs. If no arguments are provided, the version defaults to Python 2.</p>
   */
  GlueVersion?: string;

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
   * 	        <p>Known issue: when a development endpoint is created with the <code>G.2X</code>
   *             <code>WorkerType</code> configuration, the Spark drivers for the development endpoint will run on 4 vCPU, 16 GB of memory, and a 64 GB disk. </p>
   */
  WorkerType?: WorkerType | string;

  /**
   * <p>The path to one or more Java <code>.jar</code> files in an S3 bucket that should be loaded
   *       in your <code>DevEndpoint</code>.</p>
   */
  ExtraJarsS3Path?: string;

  /**
   * <p>The number of workers of a defined <code>workerType</code> that are allocated to the development endpoint.</p>
   *
   * 	        <p>The maximum number of workers you can define are 299 for <code>G.1X</code>, and 149 for <code>G.2X</code>. </p>
   */
  NumberOfWorkers?: number;
}

export namespace CreateDevEndpointRequest {
  export const filterSensitiveLog = (obj: CreateDevEndpointRequest): any => ({
    ...obj,
  });
}

export interface CreateDevEndpointResponse {
  /**
   * <p>The AWS Availability Zone where this <code>DevEndpoint</code> is located.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The number of AWS Glue Data Processing Units (DPUs) allocated to this DevEndpoint.</p>
   */
  NumberOfNodes?: number;

  /**
   * <p>The Apache Zeppelin port for the remote Apache Spark interpreter.</p>
   */
  ZeppelinRemoteSparkInterpreterPort?: number;

  /**
   * <p>The reason for a current failure in this <code>DevEndpoint</code>.</p>
   */
  FailureReason?: string;

  /**
   * <p>The paths to one or more Python libraries in an S3 bucket that will be loaded in your
   *         <code>DevEndpoint</code>.</p>
   */
  ExtraPythonLibsS3Path?: string;

  /**
   * <p>The current status of the new <code>DevEndpoint</code>.</p>
   */
  Status?: string;

  /**
   * <p>The map of arguments used to configure this <code>DevEndpoint</code>.</p>
   *
   * 	        <p>Valid arguments are:</p>
   * 	        <ul>
   *             <li>
   *                <p>
   *                   <code>"--enable-glue-datacatalog": ""</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"GLUE_PYTHON_VERSION": "3"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"GLUE_PYTHON_VERSION": "2"</code>
   *                </p>
   *             </li>
   *          </ul>
   *
   *          <p>You can specify a version of Python support for development endpoints by using the <code>Arguments</code> parameter in the <code>CreateDevEndpoint</code> or <code>UpdateDevEndpoint</code> APIs. If no arguments are provided, the version defaults to Python 2.</p>
   */
  Arguments?: { [key: string]: string };

  /**
   * <p>The ID of the virtual private cloud (VPC) used by this <code>DevEndpoint</code>.</p>
   */
  VpcId?: string;

  /**
   * <p>The point in time at which this <code>DevEndpoint</code> was created.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * <p>Glue version determines the versions of Apache Spark and Python that AWS Glue supports. The Python version indicates the version supported for running your ETL scripts on development endpoints. </p>
   */
  GlueVersion?: string;

  /**
   * <p>The number of workers of a defined <code>workerType</code> that are allocated to the development endpoint.</p>
   */
  NumberOfWorkers?: number;

  /**
   * <p>Path to one or more Java <code>.jar</code> files in an S3 bucket that will be loaded in
   *       your <code>DevEndpoint</code>.</p>
   */
  ExtraJarsS3Path?: string;

  /**
   * <p>The name of the <code>SecurityConfiguration</code> structure being used with this
   *         <code>DevEndpoint</code>.</p>
   */
  SecurityConfiguration?: string;

  /**
   * <p>The address of the YARN endpoint used by this <code>DevEndpoint</code>.</p>
   */
  YarnEndpointAddress?: string;

  /**
   * <p>The type of predefined worker that is allocated to the development endpoint. May be a value of Standard, G.1X, or G.2X.</p>
   */
  WorkerType?: WorkerType | string;

  /**
   * <p>The name assigned to the new <code>DevEndpoint</code>.</p>
   */
  EndpointName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the role assigned to the new
   *       <code>DevEndpoint</code>.</p>
   */
  RoleArn?: string;

  /**
   * <p>The subnet ID assigned to the new <code>DevEndpoint</code>.</p>
   */
  SubnetId?: string;

  /**
   * <p>The security groups assigned to the new <code>DevEndpoint</code>.</p>
   */
  SecurityGroupIds?: string[];
}

export namespace CreateDevEndpointResponse {
  export const filterSensitiveLog = (obj: CreateDevEndpointResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The same unique identifier was associated with two different records.</p>
 */
export interface IdempotentParameterMismatchException extends __SmithyException, $MetadataBearer {
  name: "IdempotentParameterMismatchException";
  $fault: "client";
  /**
   * <p>A message describing the problem.</p>
   */
  Message?: string;
}

export namespace IdempotentParameterMismatchException {
  export const filterSensitiveLog = (obj: IdempotentParameterMismatchException): any => ({
    ...obj,
  });
}

/**
 * <p>A value could not be validated.</p>
 */
export interface ValidationException extends __SmithyException, $MetadataBearer {
  name: "ValidationException";
  $fault: "client";
  /**
   * <p>A message describing the problem.</p>
   */
  Message?: string;
}

export namespace ValidationException {
  export const filterSensitiveLog = (obj: ValidationException): any => ({
    ...obj,
  });
}

/**
 * <p>Two processes are trying to modify a resource simultaneously.</p>
 */
export interface ConcurrentModificationException extends __SmithyException, $MetadataBearer {
  name: "ConcurrentModificationException";
  $fault: "client";
  /**
   * <p>A message describing the problem.</p>
   */
  Message?: string;
}

export namespace ConcurrentModificationException {
  export const filterSensitiveLog = (obj: ConcurrentModificationException): any => ({
    ...obj,
  });
}

export interface CreateJobRequest {
  /**
   * <p>The tags to use with this job. You may use tags to limit access to the job. For more information about tags in AWS Glue, see <a href="https://docs.aws.amazon.com/glue/latest/dg/monitor-tags.html">AWS Tags in AWS Glue</a> in the developer guide.</p>
   */
  Tags?: { [key: string]: string };

  /**
   * <p>Glue version determines the versions of Apache Spark and Python that AWS Glue supports. The Python version indicates the version supported for jobs of type Spark. </p>
   *
   *          <p>For more information about the available AWS Glue versions and corresponding Spark and Python versions, see <a href="https://docs.aws.amazon.com/glue/latest/dg/add-job.html">Glue version</a> in the developer guide.</p>
   *
   * 	        <p>Jobs that are created without specifying a Glue version default to Glue 0.9.</p>
   */
  GlueVersion?: string;

  /**
   * <p>The number of workers of a defined <code>workerType</code> that are allocated when a job runs.</p>
   *
   * 	        <p>The maximum number of workers you can define are 299 for <code>G.1X</code>, and 149 for <code>G.2X</code>. </p>
   */
  NumberOfWorkers?: number;

  /**
   * <p>The <code>JobCommand</code> that executes this job.</p>
   */
  Command: JobCommand | undefined;

  /**
   * <p>The default arguments for this job.</p>
   *          <p>You can specify arguments here that your own job-execution script
   *       consumes, as well as arguments that AWS Glue itself consumes.</p>
   *          <p>For information about how to specify and consume your own Job arguments, see the <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-python-calling.html">Calling AWS Glue APIs in Python</a> topic in the developer guide.</p>
   *          <p>For information about the key-value pairs that AWS Glue consumes to set up your job, see the <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-etl-glue-arguments.html">Special Parameters Used by AWS Glue</a> topic in the developer guide.</p>
   */
  DefaultArguments?: { [key: string]: string };

  /**
   * <p>The name or Amazon Resource Name (ARN) of the IAM role associated with this job.</p>
   */
  Role: string | undefined;

  /**
   * <p>The job timeout in minutes.  This is the maximum time that a job run
   *       can consume resources before it is terminated and enters <code>TIMEOUT</code>
   *       status. The default is 2,880 minutes (48 hours).</p>
   */
  Timeout?: number;

  /**
   * <p>An <code>ExecutionProperty</code> specifying the maximum number of concurrent runs allowed
   *       for this job.</p>
   */
  ExecutionProperty?: ExecutionProperty;

  /**
   * <p>This parameter is deprecated. Use <code>MaxCapacity</code> instead.</p>
   *
   *          <p>The number of AWS Glue data processing units (DPUs) to allocate to this Job. You can
   *       allocate from 2 to 100 DPUs; the default is 10. A DPU is a relative measure of processing
   *       power that consists of 4 vCPUs of compute capacity and 16 GB of memory. For more information,
   *       see the <a href="https://aws.amazon.com/glue/pricing/">AWS Glue pricing
   *       page</a>.</p>
   */
  AllocatedCapacity?: number;

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
   * <p>The maximum number of times to retry this job if it fails.</p>
   */
  MaxRetries?: number;

  /**
   * <p>This field is reserved for future use.</p>
   */
  LogUri?: string;

  /**
   * <p>The name of the <code>SecurityConfiguration</code> structure to be used with this
   *       job.</p>
   */
  SecurityConfiguration?: string;

  /**
   * <p>The connections used for this job.</p>
   */
  Connections?: ConnectionsList;

  /**
   * <p>Non-overridable arguments for this job, specified as name-value pairs.</p>
   */
  NonOverridableArguments?: { [key: string]: string };

  /**
   * <p>The number of AWS Glue data processing units (DPUs) that can be allocated when this job runs. A DPU is a relative measure
   *        of processing power that consists of 4 vCPUs of compute capacity and 16 GB of memory.
   *        For more information, see the <a href="https://aws.amazon.com/glue/pricing/">AWS Glue
   *          pricing page</a>.</p>
   *
   * 	        <p>Do not set <code>Max Capacity</code> if using <code>WorkerType</code> and <code>NumberOfWorkers</code>.</p>
   *
   *          <p>The value that can be allocated for <code>MaxCapacity</code> depends on whether you are
   *       running a Python shell job or an Apache Spark ETL job:</p>
   *          <ul>
   *             <li>
   *                <p>When you specify a Python shell job (<code>JobCommand.Name</code>="pythonshell"), you can
   *           allocate either 0.0625 or 1 DPU. The default is 0.0625 DPU.</p>
   *             </li>
   *             <li>
   *                <p>When you specify an Apache Spark ETL job (<code>JobCommand.Name</code>="glueetl") or Apache
   *          Spark streaming ETL job (<code>JobCommand.Name</code>="gluestreaming"), you can allocate from 2 to 100 DPUs.
   *          The default is 10 DPUs. This job type cannot have a fractional DPU allocation.</p>
   *             </li>
   *          </ul>
   */
  MaxCapacity?: number;

  /**
   * <p>Description of the job being defined.</p>
   */
  Description?: string;

  /**
   * <p>The name you assign to this job definition. It must be unique in your account.</p>
   */
  Name: string | undefined;

  /**
   * <p>Specifies configuration properties of a job notification.</p>
   */
  NotificationProperty?: NotificationProperty;
}

export namespace CreateJobRequest {
  export const filterSensitiveLog = (obj: CreateJobRequest): any => ({
    ...obj,
  });
}

export interface CreateJobResponse {
  /**
   * <p>The unique name that was provided for this job definition.</p>
   */
  Name?: string;
}

export namespace CreateJobResponse {
  export const filterSensitiveLog = (obj: CreateJobResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The database and table in the AWS Glue Data Catalog that is used for input or output data.</p>
 */
export interface GlueTable {
  /**
   * <p>A database name in the AWS Glue Data Catalog.</p>
   */
  DatabaseName: string | undefined;

  /**
   * <p>A unique identifier for the AWS Glue Data Catalog.</p>
   */
  CatalogId?: string;

  /**
   * <p>A table name in the AWS Glue Data Catalog.</p>
   */
  TableName: string | undefined;

  /**
   * <p>The name of the connection to the AWS Glue Data Catalog.</p>
   */
  ConnectionName?: string;
}

export namespace GlueTable {
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
   * <p>The value to switch on or off to force the output to match the provided labels from users. If the value is <code>True</code>, the <code>find matches</code> transform forces the output to match the provided labels. The results override the normal conflation results. If the value is <code>False</code>, the <code>find matches</code> transform does not ensure all the labels provided are respected, and the results rely on the trained model.</p>
   *          <p>Note that setting this value to true may increase the conflation execution time.</p>
   */
  EnforceProvidedLabels?: boolean;

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
}

export namespace FindMatchesParameters {
  export const filterSensitiveLog = (obj: FindMatchesParameters): any => ({
    ...obj,
  });
}

export enum TransformType {
  FIND_MATCHES = "FIND_MATCHES",
}

/**
 * <p>The algorithm-specific parameters that are associated with the machine learning
 *       transform.</p>
 */
export interface TransformParameters {
  /**
   * <p>The parameters for the find matches algorithm.</p>
   */
  FindMatchesParameters?: FindMatchesParameters;

  /**
   * <p>The type of machine learning transform.</p>
   * 	        <p>For information about the types of machine learning transforms, see <a href="http://docs.aws.amazon.com/glue/latest/dg/add-job-machine-learning-transform.html">Creating Machine Learning Transforms</a>.</p>
   */
  TransformType: TransformType | string | undefined;
}

export namespace TransformParameters {
  export const filterSensitiveLog = (obj: TransformParameters): any => ({
    ...obj,
  });
}

export interface CreateMLTransformRequest {
  /**
   * <p>The maximum number of times to retry a task for this transform after a task run fails.</p>
   */
  MaxRetries?: number;

  /**
   * <p>The name or Amazon Resource Name (ARN) of the IAM role with the required permissions. The required permissions include both AWS Glue service role permissions to AWS Glue resources, and Amazon S3 permissions required by the transform. </p>
   *
   * 		       <ul>
   *             <li>
   *                <p>This role needs AWS Glue service role permissions to allow access to resources in AWS Glue. See <a href="https://docs.aws.amazon.com/glue/latest/dg/attach-policy-iam-user.html">Attach a Policy to IAM Users That Access AWS Glue</a>.</p>
   *             </li>
   *             <li>
   *                <p>This role needs permission to your Amazon Simple Storage Service (Amazon S3) sources, targets, temporary directory, scripts, and any libraries used by the task run for this transform.</p>
   *             </li>
   *          </ul>
   */
  Role: string | undefined;

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
   *
   * 	        <p>
   *             <code>MaxCapacity</code> is a mutually exclusive option with <code>NumberOfWorkers</code> and <code>WorkerType</code>.</p>
   *         <ul>
   *             <li>
   *                <p>If either <code>NumberOfWorkers</code> or <code>WorkerType</code> is set, then <code>MaxCapacity</code> cannot be set.</p>
   *             </li>
   *             <li>
   *                <p>If <code>MaxCapacity</code> is set then neither <code>NumberOfWorkers</code> or <code>WorkerType</code> can be set.</p>
   *             </li>
   *             <li>
   *                <p>If <code>WorkerType</code> is set, then <code>NumberOfWorkers</code> is required (and vice versa).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MaxCapacity</code> and <code>NumberOfWorkers</code> must both be at least 1.</p>
   *             </li>
   *          </ul>
   */
  WorkerType?: WorkerType | string;

  /**
   * <p>A description of the machine learning transform that is being defined. The default is an
   *       empty string.</p>
   */
  Description?: string;

  /**
   * <p>The algorithmic parameters that are specific to the transform type used. Conditionally
   *       dependent on the transform type.</p>
   */
  Parameters: TransformParameters | undefined;

  /**
   * <p>The number of workers of a defined <code>workerType</code> that are allocated when this task runs.</p>
   *
   * 		       <p>If <code>WorkerType</code> is set, then <code>NumberOfWorkers</code> is required (and vice versa).</p>
   */
  NumberOfWorkers?: number;

  /**
   * <p>A list of AWS Glue table definitions used by the transform.</p>
   */
  InputRecordTables: GlueTable[] | undefined;

  /**
   * <p>The number of AWS Glue data processing units (DPUs) that are allocated to task runs for this transform. You can allocate from 2 to 100 DPUs; the default is 10. A DPU is a relative measure of
   *       processing power that consists of 4 vCPUs of compute capacity and 16 GB of memory. For more
   *       information, see the <a href="https://aws.amazon.com/glue/pricing/">AWS Glue pricing
   *         page</a>. </p>
   *
   * 			      <p>
   *             <code>MaxCapacity</code> is a mutually exclusive option with <code>NumberOfWorkers</code> and <code>WorkerType</code>.</p>
   *         <ul>
   *             <li>
   *                <p>If either <code>NumberOfWorkers</code> or <code>WorkerType</code> is set, then <code>MaxCapacity</code> cannot be set.</p>
   *             </li>
   *             <li>
   *                <p>If <code>MaxCapacity</code> is set then neither <code>NumberOfWorkers</code> or <code>WorkerType</code> can be set.</p>
   *             </li>
   *             <li>
   *                <p>If <code>WorkerType</code> is set, then <code>NumberOfWorkers</code> is required (and vice versa).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MaxCapacity</code> and <code>NumberOfWorkers</code> must both be at least 1.</p>
   *             </li>
   *          </ul>
   *
   * 	        <p>When the <code>WorkerType</code> field is set to a value other than <code>Standard</code>, the <code>MaxCapacity</code> field is set automatically and becomes read-only.</p>
   *
   *
   *          <p>When the <code>WorkerType</code> field is set to a value other than <code>Standard</code>, the <code>MaxCapacity</code> field is set automatically and becomes read-only.</p>
   */
  MaxCapacity?: number;

  /**
   * <p>The tags to use with this machine learning transform. You may use tags to limit access to the machine learning transform. For more information about tags in AWS Glue, see <a href="https://docs.aws.amazon.com/glue/latest/dg/monitor-tags.html">AWS Tags in AWS Glue</a> in the developer guide.</p>
   */
  Tags?: { [key: string]: string };

  /**
   * <p>The unique name that you give the transform when you create it.</p>
   */
  Name: string | undefined;

  /**
   * <p>The timeout of the task run for this transform in minutes. This is the maximum time that a task run for this transform can consume resources before it is terminated and enters <code>TIMEOUT</code> status. The default is 2,880 minutes (48 hours).</p>
   */
  Timeout?: number;

  /**
   * <p>This value determines which version of AWS Glue this machine learning transform is compatible with. Glue 1.0 is recommended for most customers. If the value is not set, the Glue compatibility defaults to Glue 0.9.  For more information, see <a href="https://docs.aws.amazon.com/glue/latest/dg/release-notes.html#release-notes-versions">AWS Glue Versions</a> in the developer guide.</p>
   */
  GlueVersion?: string;
}

export namespace CreateMLTransformRequest {
  export const filterSensitiveLog = (obj: CreateMLTransformRequest): any => ({
    ...obj,
  });
}

export interface CreateMLTransformResponse {
  /**
   * <p>A unique identifier that is generated for the transform.</p>
   */
  TransformId?: string;
}

export namespace CreateMLTransformResponse {
  export const filterSensitiveLog = (obj: CreateMLTransformResponse): any => ({
    ...obj,
  });
}

export interface CreatePartitionRequest {
  /**
   * <p>The name of the metadata table in which the partition is to be created.</p>
   */
  TableName: string | undefined;

  /**
   * <p>The name of the metadata database in which the partition is
   *       to be created.</p>
   */
  DatabaseName: string | undefined;

  /**
   * <p>The AWS account ID of the catalog in which the partition is to be created.</p>
   */
  CatalogId?: string;

  /**
   * <p>A <code>PartitionInput</code> structure defining the partition
   *       to be created.</p>
   */
  PartitionInput: PartitionInput | undefined;
}

export namespace CreatePartitionRequest {
  export const filterSensitiveLog = (obj: CreatePartitionRequest): any => ({
    ...obj,
  });
}

export interface CreatePartitionResponse {}

export namespace CreatePartitionResponse {
  export const filterSensitiveLog = (obj: CreatePartitionResponse): any => ({
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
   * <p>The target of the edge.</p>
   */
  TargetParameter?: string;

  /**
   * <p>The ID of the node at which the edge ends.</p>
   */
  Target: string | undefined;
}

export namespace CodeGenEdge {
  export const filterSensitiveLog = (obj: CodeGenEdge): any => ({
    ...obj,
  });
}

/**
 * <p>An argument or property of a node.</p>
 */
export interface CodeGenNodeArg {
  /**
   * <p>True if the value is used as a parameter.</p>
   */
  Param?: boolean;

  /**
   * <p>The name of the argument or property.</p>
   */
  Name: string | undefined;

  /**
   * <p>The value of the argument or property.</p>
   */
  Value: string | undefined;
}

export namespace CodeGenNodeArg {
  export const filterSensitiveLog = (obj: CodeGenNodeArg): any => ({
    ...obj,
  });
}

/**
 * <p>Represents a node in a directed acyclic graph (DAG)</p>
 */
export interface CodeGenNode {
  /**
   * <p>The line number of the node.</p>
   */
  LineNumber?: number;

  /**
   * <p>Properties of the node, in the form of name-value pairs.</p>
   */
  Args: CodeGenNodeArg[] | undefined;

  /**
   * <p>The type of node that this is.</p>
   */
  NodeType: string | undefined;

  /**
   * <p>A node identifier that is unique within the node's graph.</p>
   */
  Id: string | undefined;
}

export namespace CodeGenNode {
  export const filterSensitiveLog = (obj: CodeGenNode): any => ({
    ...obj,
  });
}

export enum Language {
  PYTHON = "PYTHON",
  SCALA = "SCALA",
}

export interface CreateScriptRequest {
  /**
   * <p>A list of the nodes in the DAG.</p>
   */
  DagNodes?: CodeGenNode[];

  /**
   * <p>The programming language of the resulting code from the DAG.</p>
   */
  Language?: Language | string;

  /**
   * <p>A list of the edges in the DAG.</p>
   */
  DagEdges?: CodeGenEdge[];
}

export namespace CreateScriptRequest {
  export const filterSensitiveLog = (obj: CreateScriptRequest): any => ({
    ...obj,
  });
}

export interface CreateScriptResponse {
  /**
   * <p>The Scala code generated from the DAG.</p>
   */
  ScalaCode?: string;

  /**
   * <p>The Python script generated from the DAG.</p>
   */
  PythonScript?: string;
}

export namespace CreateScriptResponse {
  export const filterSensitiveLog = (obj: CreateScriptResponse): any => ({
    ...obj,
  });
}

export enum CloudWatchEncryptionMode {
  DISABLED = "DISABLED",
  SSEKMS = "SSE-KMS",
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
  export const filterSensitiveLog = (obj: CloudWatchEncryption): any => ({
    ...obj,
  });
}

export enum JobBookmarksEncryptionMode {
  CSEKMS = "CSE-KMS",
  DISABLED = "DISABLED",
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
  export const filterSensitiveLog = (obj: JobBookmarksEncryption): any => ({
    ...obj,
  });
}

export enum S3EncryptionMode {
  DISABLED = "DISABLED",
  SSEKMS = "SSE-KMS",
  SSES3 = "SSE-S3",
}

/**
 * <p>Specifies how Amazon Simple Storage Service (Amazon S3) data should be encrypted.</p>
 */
export interface S3Encryption {
  /**
   * <p>The Amazon Resource Name (ARN) of the KMS key to be used to encrypt the data.</p>
   */
  KmsKeyArn?: string;

  /**
   * <p>The encryption mode to use for Amazon S3 data.</p>
   */
  S3EncryptionMode?: S3EncryptionMode | string;
}

export namespace S3Encryption {
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
  export const filterSensitiveLog = (obj: EncryptionConfiguration): any => ({
    ...obj,
  });
}

export interface CreateSecurityConfigurationRequest {
  /**
   * <p>The name for the new security configuration.</p>
   */
  Name: string | undefined;

  /**
   * <p>The encryption configuration for the new security configuration.</p>
   */
  EncryptionConfiguration: EncryptionConfiguration | undefined;
}

export namespace CreateSecurityConfigurationRequest {
  export const filterSensitiveLog = (obj: CreateSecurityConfigurationRequest): any => ({
    ...obj,
  });
}

export interface CreateSecurityConfigurationResponse {
  /**
   * <p>The time at which the new security configuration was created.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * <p>The name assigned to the new security configuration.</p>
   */
  Name?: string;
}

export namespace CreateSecurityConfigurationResponse {
  export const filterSensitiveLog = (obj: CreateSecurityConfigurationResponse): any => ({
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
  export const filterSensitiveLog = (obj: TableIdentifier): any => ({
    ...obj,
  });
}

/**
 * <p>A structure used to define a table.</p>
 */
export interface TableInput {
  /**
   * <p>If the table is a view, the expanded text of the view; otherwise <code>null</code>.</p>
   */
  ViewExpandedText?: string;

  /**
   * <p>The retention time for this table.</p>
   */
  Retention?: number;

  /**
   * <p>The last time that column statistics were computed for this table.</p>
   */
  LastAnalyzedTime?: Date;

  /**
   * <p>The table name. For Hive compatibility, this is folded to
   *       lowercase when it is stored.</p>
   */
  Name: string | undefined;

  /**
   * <p>A storage descriptor containing information about the physical storage
   *       of this table.</p>
   */
  StorageDescriptor?: StorageDescriptor;

  /**
   * <p>The type of this table (<code>EXTERNAL_TABLE</code>, <code>VIRTUAL_VIEW</code>, etc.).</p>
   */
  TableType?: string;

  /**
   * <p>These key-value pairs define properties associated with the table.</p>
   */
  Parameters?: { [key: string]: string };

  /**
   * <p>If the table is a view, the original text of the view; otherwise <code>null</code>.</p>
   */
  ViewOriginalText?: string;

  /**
   * <p>The table owner.</p>
   */
  Owner?: string;

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
   * <p>A <code>TableIdentifier</code> structure that describes a target table for resource linking.</p>
   */
  TargetTable?: TableIdentifier;

  /**
   * <p>The last time that the table was accessed.</p>
   */
  LastAccessTime?: Date;

  /**
   * <p>A description of the table.</p>
   */
  Description?: string;
}

export namespace TableInput {
  export const filterSensitiveLog = (obj: TableInput): any => ({
    ...obj,
  });
}

export interface CreateTableRequest {
  /**
   * <p>The ID of the Data Catalog in which to create the <code>Table</code>.
   *       If none is supplied, the AWS account ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * <p>The catalog database in which to create the new table. For Hive
   *       compatibility, this name is entirely lowercase.</p>
   */
  DatabaseName: string | undefined;

  /**
   * <p>The <code>TableInput</code> object that defines the metadata table
   *       to create in the catalog.</p>
   */
  TableInput: TableInput | undefined;
}

export namespace CreateTableRequest {
  export const filterSensitiveLog = (obj: CreateTableRequest): any => ({
    ...obj,
  });
}

export interface CreateTableResponse {}

export namespace CreateTableResponse {
  export const filterSensitiveLog = (obj: CreateTableResponse): any => ({
    ...obj,
  });
}

export interface CreateTriggerRequest {
  /**
   * <p>A description of the new trigger.</p>
   */
  Description?: string;

  /**
   * <p>Set to <code>true</code> to start <code>SCHEDULED</code> and <code>CONDITIONAL</code>
   *       triggers when created. True is not supported for <code>ON_DEMAND</code> triggers.</p>
   */
  StartOnCreation?: boolean;

  /**
   * <p>A <code>cron</code> expression used to specify the schedule (see <a href="https://docs.aws.amazon.com/glue/latest/dg/monitor-data-warehouse-schedule.html">Time-Based Schedules for Jobs and Crawlers</a>. For example, to run
   *       something every day at 12:15 UTC, you would specify:
   *       <code>cron(15 12 * * ? *)</code>.</p>
   *          <p>This field is required when the trigger type is SCHEDULED.</p>
   */
  Schedule?: string;

  /**
   * <p>The name of the workflow associated with the trigger.</p>
   */
  WorkflowName?: string;

  /**
   * <p>The actions initiated by this trigger when it fires.</p>
   */
  Actions: Action[] | undefined;

  /**
   * <p>The type of the new trigger.</p>
   */
  Type: TriggerType | string | undefined;

  /**
   * <p>The tags to use with this trigger. You may use tags to limit access to the trigger.
   *       For more information about tags in AWS Glue, see
   *       <a href="https://docs.aws.amazon.com/glue/latest/dg/monitor-tags.html">AWS Tags in AWS
   *         Glue</a> in the developer guide. </p>
   */
  Tags?: { [key: string]: string };

  /**
   * <p>The name of the trigger.</p>
   */
  Name: string | undefined;

  /**
   * <p>A predicate to specify when the new trigger should fire.</p>
   *          <p>This field is required when the trigger type is <code>CONDITIONAL</code>.</p>
   */
  Predicate?: Predicate;
}

export namespace CreateTriggerRequest {
  export const filterSensitiveLog = (obj: CreateTriggerRequest): any => ({
    ...obj,
  });
}

export interface CreateTriggerResponse {
  /**
   * <p>The name of the trigger.</p>
   */
  Name?: string;
}

export namespace CreateTriggerResponse {
  export const filterSensitiveLog = (obj: CreateTriggerResponse): any => ({
    ...obj,
  });
}

export enum PrincipalType {
  GROUP = "GROUP",
  ROLE = "ROLE",
  USER = "USER",
}

export enum ResourceType {
  ARCHIVE = "ARCHIVE",
  FILE = "FILE",
  JAR = "JAR",
}

/**
 * <p>The URIs for function resources.</p>
 */
export interface ResourceUri {
  /**
   * <p>The URI for accessing the resource.</p>
   */
  Uri?: string;

  /**
   * <p>The type of the resource.</p>
   */
  ResourceType?: ResourceType | string;
}

export namespace ResourceUri {
  export const filterSensitiveLog = (obj: ResourceUri): any => ({
    ...obj,
  });
}

/**
 * <p>A structure used to create or update a user-defined function.</p>
 */
export interface UserDefinedFunctionInput {
  /**
   * <p>The owner type.</p>
   */
  OwnerType?: PrincipalType | string;

  /**
   * <p>The name of the function.</p>
   */
  FunctionName?: string;

  /**
   * <p>The resource URIs for the function.</p>
   */
  ResourceUris?: ResourceUri[];

  /**
   * <p>The Java class that contains the function code.</p>
   */
  ClassName?: string;

  /**
   * <p>The owner of the function.</p>
   */
  OwnerName?: string;
}

export namespace UserDefinedFunctionInput {
  export const filterSensitiveLog = (obj: UserDefinedFunctionInput): any => ({
    ...obj,
  });
}

export interface CreateUserDefinedFunctionRequest {
  /**
   * <p>The name of the catalog database in which to create the function.</p>
   */
  DatabaseName: string | undefined;

  /**
   * <p>A <code>FunctionInput</code> object that defines the function
   *       to create in the Data Catalog.</p>
   */
  FunctionInput: UserDefinedFunctionInput | undefined;

  /**
   * <p>The ID of the Data Catalog in which to create the function. If none is provided, the AWS
   *       account ID is used by default.</p>
   */
  CatalogId?: string;
}

export namespace CreateUserDefinedFunctionRequest {
  export const filterSensitiveLog = (obj: CreateUserDefinedFunctionRequest): any => ({
    ...obj,
  });
}

export interface CreateUserDefinedFunctionResponse {}

export namespace CreateUserDefinedFunctionResponse {
  export const filterSensitiveLog = (obj: CreateUserDefinedFunctionResponse): any => ({
    ...obj,
  });
}

export interface CreateWorkflowRequest {
  /**
   * <p>The name to be assigned to the workflow. It should be unique within your account.</p>
   */
  Name: string | undefined;

  /**
   * <p>The tags to be used with this workflow.</p>
   */
  Tags?: { [key: string]: string };

  /**
   * <p>A description of the workflow.</p>
   */
  Description?: string;

  /**
   * <p>A collection of properties to be used as part of each execution of the workflow.</p>
   */
  DefaultRunProperties?: { [key: string]: string };
}

export namespace CreateWorkflowRequest {
  export const filterSensitiveLog = (obj: CreateWorkflowRequest): any => ({
    ...obj,
  });
}

export interface CreateWorkflowResponse {
  /**
   * <p>The name of the workflow which was provided as part of the request.</p>
   */
  Name?: string;
}

export namespace CreateWorkflowResponse {
  export const filterSensitiveLog = (obj: CreateWorkflowResponse): any => ({
    ...obj,
  });
}

export interface DeleteClassifierRequest {
  /**
   * <p>Name of the classifier to remove.</p>
   */
  Name: string | undefined;
}

export namespace DeleteClassifierRequest {
  export const filterSensitiveLog = (obj: DeleteClassifierRequest): any => ({
    ...obj,
  });
}

export interface DeleteClassifierResponse {}

export namespace DeleteClassifierResponse {
  export const filterSensitiveLog = (obj: DeleteClassifierResponse): any => ({
    ...obj,
  });
}

export interface DeleteColumnStatisticsForPartitionRequest {
  /**
   * <p>The name of the partitions' table.</p>
   */
  TableName: string | undefined;

  /**
   * <p>Name of the column.</p>
   */
  ColumnName: string | undefined;

  /**
   * <p>The name of the catalog database where the partitions reside.</p>
   */
  DatabaseName: string | undefined;

  /**
   * <p>The ID of the Data Catalog where the partitions in question reside.
   *       If none is supplied, the AWS account ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * <p>A list of partition values identifying the partition.</p>
   */
  PartitionValues: string[] | undefined;
}

export namespace DeleteColumnStatisticsForPartitionRequest {
  export const filterSensitiveLog = (obj: DeleteColumnStatisticsForPartitionRequest): any => ({
    ...obj,
  });
}

export interface DeleteColumnStatisticsForPartitionResponse {}

export namespace DeleteColumnStatisticsForPartitionResponse {
  export const filterSensitiveLog = (obj: DeleteColumnStatisticsForPartitionResponse): any => ({
    ...obj,
  });
}

export interface DeleteColumnStatisticsForTableRequest {
  /**
   * <p>The name of the partitions' table.</p>
   */
  TableName: string | undefined;

  /**
   * <p>The name of the column.</p>
   */
  ColumnName: string | undefined;

  /**
   * <p>The ID of the Data Catalog where the partitions in question reside.
   *       If none is supplied, the AWS account ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * <p>The name of the catalog database where the partitions reside.</p>
   */
  DatabaseName: string | undefined;
}

export namespace DeleteColumnStatisticsForTableRequest {
  export const filterSensitiveLog = (obj: DeleteColumnStatisticsForTableRequest): any => ({
    ...obj,
  });
}

export interface DeleteColumnStatisticsForTableResponse {}

export namespace DeleteColumnStatisticsForTableResponse {
  export const filterSensitiveLog = (obj: DeleteColumnStatisticsForTableResponse): any => ({
    ...obj,
  });
}

export interface DeleteConnectionRequest {
  /**
   * <p>The name of the connection to delete.</p>
   */
  ConnectionName: string | undefined;

  /**
   * <p>The ID of the Data Catalog in which the connection resides. If none is provided, the AWS
   *       account ID is used by default.</p>
   */
  CatalogId?: string;
}

export namespace DeleteConnectionRequest {
  export const filterSensitiveLog = (obj: DeleteConnectionRequest): any => ({
    ...obj,
  });
}

export interface DeleteConnectionResponse {}

export namespace DeleteConnectionResponse {
  export const filterSensitiveLog = (obj: DeleteConnectionResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The operation cannot be performed because the crawler is already running.</p>
 */
export interface CrawlerRunningException extends __SmithyException, $MetadataBearer {
  name: "CrawlerRunningException";
  $fault: "client";
  /**
   * <p>A message describing the problem.</p>
   */
  Message?: string;
}

export namespace CrawlerRunningException {
  export const filterSensitiveLog = (obj: CrawlerRunningException): any => ({
    ...obj,
  });
}

export interface DeleteCrawlerRequest {
  /**
   * <p>The name of the crawler to remove.</p>
   */
  Name: string | undefined;
}

export namespace DeleteCrawlerRequest {
  export const filterSensitiveLog = (obj: DeleteCrawlerRequest): any => ({
    ...obj,
  });
}

export interface DeleteCrawlerResponse {}

export namespace DeleteCrawlerResponse {
  export const filterSensitiveLog = (obj: DeleteCrawlerResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The specified scheduler is transitioning.</p>
 */
export interface SchedulerTransitioningException extends __SmithyException, $MetadataBearer {
  name: "SchedulerTransitioningException";
  $fault: "client";
  /**
   * <p>A message describing the problem.</p>
   */
  Message?: string;
}

export namespace SchedulerTransitioningException {
  export const filterSensitiveLog = (obj: SchedulerTransitioningException): any => ({
    ...obj,
  });
}

export interface DeleteDatabaseRequest {
  /**
   * <p>The ID of the Data Catalog in which the database resides. If none is provided, the AWS
   *       account ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * <p>The name of the database to delete. For Hive compatibility, this must be all
   *       lowercase.</p>
   */
  Name: string | undefined;
}

export namespace DeleteDatabaseRequest {
  export const filterSensitiveLog = (obj: DeleteDatabaseRequest): any => ({
    ...obj,
  });
}

export interface DeleteDatabaseResponse {}

export namespace DeleteDatabaseResponse {
  export const filterSensitiveLog = (obj: DeleteDatabaseResponse): any => ({
    ...obj,
  });
}

export interface DeleteDevEndpointRequest {
  /**
   * <p>The name of the <code>DevEndpoint</code>.</p>
   */
  EndpointName: string | undefined;
}

export namespace DeleteDevEndpointRequest {
  export const filterSensitiveLog = (obj: DeleteDevEndpointRequest): any => ({
    ...obj,
  });
}

export interface DeleteDevEndpointResponse {}

export namespace DeleteDevEndpointResponse {
  export const filterSensitiveLog = (obj: DeleteDevEndpointResponse): any => ({
    ...obj,
  });
}

export interface DeleteJobRequest {
  /**
   * <p>The name of the job definition to delete.</p>
   */
  JobName: string | undefined;
}

export namespace DeleteJobRequest {
  export const filterSensitiveLog = (obj: DeleteJobRequest): any => ({
    ...obj,
  });
}

export interface DeleteJobResponse {
  /**
   * <p>The name of the job definition that was deleted.</p>
   */
  JobName?: string;
}

export namespace DeleteJobResponse {
  export const filterSensitiveLog = (obj: DeleteJobResponse): any => ({
    ...obj,
  });
}

export interface DeleteMLTransformRequest {
  /**
   * <p>The unique identifier of the transform to delete.</p>
   */
  TransformId: string | undefined;
}

export namespace DeleteMLTransformRequest {
  export const filterSensitiveLog = (obj: DeleteMLTransformRequest): any => ({
    ...obj,
  });
}

export interface DeleteMLTransformResponse {
  /**
   * <p>The unique identifier of the transform that was deleted.</p>
   */
  TransformId?: string;
}

export namespace DeleteMLTransformResponse {
  export const filterSensitiveLog = (obj: DeleteMLTransformResponse): any => ({
    ...obj,
  });
}

export interface DeletePartitionRequest {
  /**
   * <p>The name of the table that contains the partition to be deleted.</p>
   */
  TableName: string | undefined;

  /**
   * <p>The values that define the partition.</p>
   */
  PartitionValues: string[] | undefined;

  /**
   * <p>The name of the catalog database in which the table in question
   *       resides.</p>
   */
  DatabaseName: string | undefined;

  /**
   * <p>The ID of the Data Catalog where the partition to be deleted resides. If none is provided,
   *       the AWS account ID is used by default.</p>
   */
  CatalogId?: string;
}

export namespace DeletePartitionRequest {
  export const filterSensitiveLog = (obj: DeletePartitionRequest): any => ({
    ...obj,
  });
}

export interface DeletePartitionResponse {}

export namespace DeletePartitionResponse {
  export const filterSensitiveLog = (obj: DeletePartitionResponse): any => ({
    ...obj,
  });
}

/**
 * <p>A specified condition was not satisfied.</p>
 */
export interface ConditionCheckFailureException extends __SmithyException, $MetadataBearer {
  name: "ConditionCheckFailureException";
  $fault: "client";
  /**
   * <p>A message describing the problem.</p>
   */
  Message?: string;
}

export namespace ConditionCheckFailureException {
  export const filterSensitiveLog = (obj: ConditionCheckFailureException): any => ({
    ...obj,
  });
}

export interface DeleteResourcePolicyRequest {
  /**
   * <p>The ARN of the AWS Glue resource for the resource policy to be deleted.</p>
   */
  ResourceArn?: string;

  /**
   * <p>The hash value returned when this policy was set.</p>
   */
  PolicyHashCondition?: string;
}

export namespace DeleteResourcePolicyRequest {
  export const filterSensitiveLog = (obj: DeleteResourcePolicyRequest): any => ({
    ...obj,
  });
}

export interface DeleteResourcePolicyResponse {}

export namespace DeleteResourcePolicyResponse {
  export const filterSensitiveLog = (obj: DeleteResourcePolicyResponse): any => ({
    ...obj,
  });
}

export interface DeleteSecurityConfigurationRequest {
  /**
   * <p>The name of the security configuration to delete.</p>
   */
  Name: string | undefined;
}

export namespace DeleteSecurityConfigurationRequest {
  export const filterSensitiveLog = (obj: DeleteSecurityConfigurationRequest): any => ({
    ...obj,
  });
}

export interface DeleteSecurityConfigurationResponse {}

export namespace DeleteSecurityConfigurationResponse {
  export const filterSensitiveLog = (obj: DeleteSecurityConfigurationResponse): any => ({
    ...obj,
  });
}

export interface DeleteTableRequest {
  /**
   * <p>The ID of the Data Catalog where the table resides. If none is provided, the AWS account
   *       ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * <p>The name of the table to be deleted. For Hive
   *       compatibility, this name is entirely lowercase.</p>
   */
  Name: string | undefined;

  /**
   * <p>The name of the catalog database in which the table resides. For Hive
   *       compatibility, this name is entirely lowercase.</p>
   */
  DatabaseName: string | undefined;
}

export namespace DeleteTableRequest {
  export const filterSensitiveLog = (obj: DeleteTableRequest): any => ({
    ...obj,
  });
}

export interface DeleteTableResponse {}

export namespace DeleteTableResponse {
  export const filterSensitiveLog = (obj: DeleteTableResponse): any => ({
    ...obj,
  });
}

export interface DeleteTableVersionRequest {
  /**
   * <p>The name of the table. For Hive compatibility,
   *       this name is entirely lowercase.</p>
   */
  TableName: string | undefined;

  /**
   * <p>The ID of the Data Catalog where the tables reside. If none is provided, the AWS account
   *       ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * <p>The ID of the table version to be deleted. A <code>VersionID</code> is a string representation of an integer. Each version is incremented by 1.</p>
   */
  VersionId: string | undefined;

  /**
   * <p>The database in the catalog in which the table resides. For Hive
   *       compatibility, this name is entirely lowercase.</p>
   */
  DatabaseName: string | undefined;
}

export namespace DeleteTableVersionRequest {
  export const filterSensitiveLog = (obj: DeleteTableVersionRequest): any => ({
    ...obj,
  });
}

export interface DeleteTableVersionResponse {}

export namespace DeleteTableVersionResponse {
  export const filterSensitiveLog = (obj: DeleteTableVersionResponse): any => ({
    ...obj,
  });
}

export interface DeleteTriggerRequest {
  /**
   * <p>The name of the trigger to delete.</p>
   */
  Name: string | undefined;
}

export namespace DeleteTriggerRequest {
  export const filterSensitiveLog = (obj: DeleteTriggerRequest): any => ({
    ...obj,
  });
}

export interface DeleteTriggerResponse {
  /**
   * <p>The name of the trigger that was deleted.</p>
   */
  Name?: string;
}

export namespace DeleteTriggerResponse {
  export const filterSensitiveLog = (obj: DeleteTriggerResponse): any => ({
    ...obj,
  });
}

export interface DeleteUserDefinedFunctionRequest {
  /**
   * <p>The ID of the Data Catalog where the function to be deleted is
   *       located. If none is supplied, the AWS account ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * <p>The name of the function definition to be deleted.</p>
   */
  FunctionName: string | undefined;

  /**
   * <p>The name of the catalog database where the function is located.</p>
   */
  DatabaseName: string | undefined;
}

export namespace DeleteUserDefinedFunctionRequest {
  export const filterSensitiveLog = (obj: DeleteUserDefinedFunctionRequest): any => ({
    ...obj,
  });
}

export interface DeleteUserDefinedFunctionResponse {}

export namespace DeleteUserDefinedFunctionResponse {
  export const filterSensitiveLog = (obj: DeleteUserDefinedFunctionResponse): any => ({
    ...obj,
  });
}

export interface DeleteWorkflowRequest {
  /**
   * <p>Name of the workflow to be deleted.</p>
   */
  Name: string | undefined;
}

export namespace DeleteWorkflowRequest {
  export const filterSensitiveLog = (obj: DeleteWorkflowRequest): any => ({
    ...obj,
  });
}

export interface DeleteWorkflowResponse {
  /**
   * <p>Name of the workflow specified in input.</p>
   */
  Name?: string;
}

export namespace DeleteWorkflowResponse {
  export const filterSensitiveLog = (obj: DeleteWorkflowResponse): any => ({
    ...obj,
  });
}

export interface GetCatalogImportStatusRequest {
  /**
   * <p>The ID of the catalog to migrate. Currently, this should be the AWS account ID.</p>
   */
  CatalogId?: string;
}

export namespace GetCatalogImportStatusRequest {
  export const filterSensitiveLog = (obj: GetCatalogImportStatusRequest): any => ({
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
  export const filterSensitiveLog = (obj: CatalogImportStatus): any => ({
    ...obj,
  });
}

export interface GetCatalogImportStatusResponse {
  /**
   * <p>The status of the specified catalog migration.</p>
   */
  ImportStatus?: CatalogImportStatus;
}

export namespace GetCatalogImportStatusResponse {
  export const filterSensitiveLog = (obj: GetCatalogImportStatusResponse): any => ({
    ...obj,
  });
}

export interface GetClassifierRequest {
  /**
   * <p>Name of the classifier to retrieve.</p>
   */
  Name: string | undefined;
}

export namespace GetClassifierRequest {
  export const filterSensitiveLog = (obj: GetClassifierRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A classifier for custom <code>CSV</code> content.</p>
 */
export interface CsvClassifier {
  /**
   * <p>The time that this classifier was registered.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The version of this classifier.</p>
   */
  Version?: number;

  /**
   * <p>Specifies not to trim values before identifying the type of column values. The default
   *       value is <code>true</code>.</p>
   */
  DisableValueTrimming?: boolean;

  /**
   * <p>Indicates whether the CSV file contains a header.</p>
   */
  ContainsHeader?: CsvHeaderOption | string;

  /**
   * <p>A custom symbol to denote what separates each column entry in the row.</p>
   */
  Delimiter?: string;

  /**
   * <p>Enables the processing of files that contain only one column.</p>
   */
  AllowSingleColumn?: boolean;

  /**
   * <p>A custom symbol to denote what combines content into a single column value. It must be
   *       different from the column delimiter.</p>
   */
  QuoteSymbol?: string;

  /**
   * <p>A list of strings representing column names.</p>
   */
  Header?: string[];

  /**
   * <p>The name of the classifier.</p>
   */
  Name: string | undefined;

  /**
   * <p>The time that this classifier was last updated.</p>
   */
  LastUpdated?: Date;
}

export namespace CsvClassifier {
  export const filterSensitiveLog = (obj: CsvClassifier): any => ({
    ...obj,
  });
}

/**
 * <p>A classifier that uses <code>grok</code> patterns.</p>
 */
export interface GrokClassifier {
  /**
   * <p>Optional custom grok patterns defined by this classifier.
   *       For more information, see custom patterns in <a href="https://docs.aws.amazon.com/glue/latest/dg/custom-classifier.html">Writing Custom Classifiers</a>.</p>
   */
  CustomPatterns?: string;

  /**
   * <p>The grok pattern applied to a data store by this classifier.
   *        For more information, see built-in patterns in <a href="https://docs.aws.amazon.com/glue/latest/dg/custom-classifier.html">Writing Custom Classifiers</a>.</p>
   */
  GrokPattern: string | undefined;

  /**
   * <p>The version of this classifier.</p>
   */
  Version?: number;

  /**
   * <p>The time that this classifier was last updated.</p>
   */
  LastUpdated?: Date;

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
   * <p>The name of the classifier.</p>
   */
  Name: string | undefined;
}

export namespace GrokClassifier {
  export const filterSensitiveLog = (obj: GrokClassifier): any => ({
    ...obj,
  });
}

/**
 * <p>A classifier for <code>JSON</code> content.</p>
 */
export interface JsonClassifier {
  /**
   * <p>A <code>JsonPath</code> string defining the JSON data for the classifier to classify.
   *       AWS Glue supports a subset of JsonPath, as described in <a href="https://docs.aws.amazon.com/glue/latest/dg/custom-classifier.html#custom-classifier-json">Writing JsonPath Custom Classifiers</a>.</p>
   */
  JsonPath: string | undefined;

  /**
   * <p>The time that this classifier was registered.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The name of the classifier.</p>
   */
  Name: string | undefined;

  /**
   * <p>The time that this classifier was last updated.</p>
   */
  LastUpdated?: Date;

  /**
   * <p>The version of this classifier.</p>
   */
  Version?: number;
}

export namespace JsonClassifier {
  export const filterSensitiveLog = (obj: JsonClassifier): any => ({
    ...obj,
  });
}

/**
 * <p>A classifier for <code>XML</code> content.</p>
 */
export interface XMLClassifier {
  /**
   * <p>The XML tag designating the element that contains each record in an XML document being
   *       parsed. This can't identify a self-closing element (closed by <code>/></code>). An empty
   *       row element that contains only attributes can be parsed as long as it ends with a closing tag
   *       (for example, <code><row item_a="A" item_b="B"></row></code> is okay, but
   *         <code><row item_a="A" item_b="B" /></code> is not).</p>
   */
  RowTag?: string;

  /**
   * <p>The version of this classifier.</p>
   */
  Version?: number;

  /**
   * <p>The time that this classifier was last updated.</p>
   */
  LastUpdated?: Date;

  /**
   * <p>The name of the classifier.</p>
   */
  Name: string | undefined;

  /**
   * <p>The time that this classifier was registered.</p>
   */
  CreationTime?: Date;

  /**
   * <p>An identifier of the data format that the classifier matches.</p>
   */
  Classification: string | undefined;
}

export namespace XMLClassifier {
  export const filterSensitiveLog = (obj: XMLClassifier): any => ({
    ...obj,
  });
}

/**
 * <p>Classifiers are triggered during a crawl task. A classifier checks whether a given file is
 *       in a format it can handle. If it is, the classifier creates a schema in the form of a
 *         <code>StructType</code> object that matches that data format.</p>
 *          <p>You can use the standard classifiers that AWS Glue provides, or you can write your own
 *       classifiers to best categorize your data sources and specify the appropriate schemas to use
 *       for them. A classifier can be a <code>grok</code> classifier, an <code>XML</code> classifier,
 *       a <code>JSON</code> classifier, or a custom <code>CSV</code> classifier, as specified in one
 *       of the fields in the <code>Classifier</code> object.</p>
 */
export interface Classifier {
  /**
   * <p>A classifier for comma-separated values (CSV).</p>
   */
  CsvClassifier?: CsvClassifier;

  /**
   * <p>A classifier that uses <code>grok</code>.</p>
   */
  GrokClassifier?: GrokClassifier;

  /**
   * <p>A classifier for JSON content.</p>
   */
  JsonClassifier?: JsonClassifier;

  /**
   * <p>A classifier for XML content.</p>
   */
  XMLClassifier?: XMLClassifier;
}

export namespace Classifier {
  export const filterSensitiveLog = (obj: Classifier): any => ({
    ...obj,
  });
}

export interface GetClassifierResponse {
  /**
   * <p>The requested classifier.</p>
   */
  Classifier?: Classifier;
}

export namespace GetClassifierResponse {
  export const filterSensitiveLog = (obj: GetClassifierResponse): any => ({
    ...obj,
  });
}

export interface GetClassifiersRequest {
  /**
   * <p>An optional continuation token.</p>
   */
  NextToken?: string;

  /**
   * <p>The size of the list to return (optional).</p>
   */
  MaxResults?: number;
}

export namespace GetClassifiersRequest {
  export const filterSensitiveLog = (obj: GetClassifiersRequest): any => ({
    ...obj,
  });
}

export interface GetClassifiersResponse {
  /**
   * <p>The requested list of classifier
   *       objects.</p>
   */
  Classifiers?: Classifier[];

  /**
   * <p>A continuation token.</p>
   */
  NextToken?: string;
}

export namespace GetClassifiersResponse {
  export const filterSensitiveLog = (obj: GetClassifiersResponse): any => ({
    ...obj,
  });
}

export interface GetColumnStatisticsForPartitionRequest {
  /**
   * <p>The name of the partitions' table.</p>
   */
  TableName: string | undefined;

  /**
   * <p>A list of the column names.</p>
   */
  ColumnNames: string[] | undefined;

  /**
   * <p>The name of the catalog database where the partitions reside.</p>
   */
  DatabaseName: string | undefined;

  /**
   * <p>A list of partition values identifying the partition.</p>
   */
  PartitionValues: string[] | undefined;

  /**
   * <p>The ID of the Data Catalog where the partitions in question reside.
   *       If none is supplied, the AWS account ID is used by default.</p>
   */
  CatalogId?: string;
}

export namespace GetColumnStatisticsForPartitionRequest {
  export const filterSensitiveLog = (obj: GetColumnStatisticsForPartitionRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Defines a binary column statistics data.</p>
 */
export interface BinaryColumnStatisticsData {
  /**
   * <p>Number of nulls.</p>
   */
  NumberOfNulls: number | undefined;

  /**
   * <p>Maximum length of the column.</p>
   */
  MaximumLength: number | undefined;

  /**
   * <p>Average length of the column.</p>
   */
  AverageLength: number | undefined;
}

export namespace BinaryColumnStatisticsData {
  export const filterSensitiveLog = (obj: BinaryColumnStatisticsData): any => ({
    ...obj,
  });
}

/**
 * <p>Defines a boolean column statistics.</p>
 */
export interface BooleanColumnStatisticsData {
  /**
   * <p>Number of true value.</p>
   */
  NumberOfTrues: number | undefined;

  /**
   * <p>Number of nulls.</p>
   */
  NumberOfNulls: number | undefined;

  /**
   * <p>Number of false value.</p>
   */
  NumberOfFalses: number | undefined;
}

export namespace BooleanColumnStatisticsData {
  export const filterSensitiveLog = (obj: BooleanColumnStatisticsData): any => ({
    ...obj,
  });
}

/**
 * <p>Defines a date column statistics data.</p>
 */
export interface DateColumnStatisticsData {
  /**
   * <p>Number of distinct values.</p>
   */
  NumberOfDistinctValues: number | undefined;

  /**
   * <p>Number of nulls.</p>
   */
  NumberOfNulls: number | undefined;

  /**
   * <p>Minimum value of the column.</p>
   */
  MinimumValue?: Date;

  /**
   * <p>Maximum value of the column.</p>
   */
  MaximumValue?: Date;
}

export namespace DateColumnStatisticsData {
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
  export const filterSensitiveLog = (obj: DecimalNumber): any => ({
    ...obj,
  });
}

/**
 * <p>Defines a decimal column statistics data.</p>
 */
export interface DecimalColumnStatisticsData {
  /**
   * <p>Minimum value of the column.</p>
   */
  MinimumValue?: DecimalNumber;

  /**
   * <p>Number of distinct values.</p>
   */
  NumberOfDistinctValues: number | undefined;

  /**
   * <p>Maximum value of the column.</p>
   */
  MaximumValue?: DecimalNumber;

  /**
   * <p>Number of nulls.</p>
   */
  NumberOfNulls: number | undefined;
}

export namespace DecimalColumnStatisticsData {
  export const filterSensitiveLog = (obj: DecimalColumnStatisticsData): any => ({
    ...obj,
  });
}

/**
 * <p>Defines a double column statistics data.</p>
 */
export interface DoubleColumnStatisticsData {
  /**
   * <p>Minimum value of the column.</p>
   */
  MinimumValue?: number;

  /**
   * <p>Number of distinct values.</p>
   */
  NumberOfDistinctValues: number | undefined;

  /**
   * <p>Number of nulls.</p>
   */
  NumberOfNulls: number | undefined;

  /**
   * <p>Maximum value of the column.</p>
   */
  MaximumValue?: number;
}

export namespace DoubleColumnStatisticsData {
  export const filterSensitiveLog = (obj: DoubleColumnStatisticsData): any => ({
    ...obj,
  });
}

/**
 * <p>Defines a long column statistics data.</p>
 */
export interface LongColumnStatisticsData {
  /**
   * <p>Number of nulls.</p>
   */
  NumberOfNulls: number | undefined;

  /**
   * <p>Maximum value of the column.</p>
   */
  MaximumValue?: number;

  /**
   * <p>Number of distinct values.</p>
   */
  NumberOfDistinctValues: number | undefined;

  /**
   * <p>Minimum value of the column.</p>
   */
  MinimumValue?: number;
}

export namespace LongColumnStatisticsData {
  export const filterSensitiveLog = (obj: LongColumnStatisticsData): any => ({
    ...obj,
  });
}

/**
 * <p>Defines a string column statistics data.</p>
 */
export interface StringColumnStatisticsData {
  /**
   * <p>Average value of the column.</p>
   */
  AverageLength: number | undefined;

  /**
   * <p>Number of distinct values.</p>
   */
  NumberOfDistinctValues: number | undefined;

  /**
   * <p>Maximum value of the column.</p>
   */
  MaximumLength: number | undefined;

  /**
   * <p>Number of nulls.</p>
   */
  NumberOfNulls: number | undefined;
}

export namespace StringColumnStatisticsData {
  export const filterSensitiveLog = (obj: StringColumnStatisticsData): any => ({
    ...obj,
  });
}

export enum ColumnStatisticsType {
  BINARY = "BINARY",
  BOOLEAN = "BOOLEAN",
  DATE = "DATE",
  DECIMAL = "DECIMAL",
  DOUBLE = "DOUBLE",
  LONG = "LONG",
  STRING = "STRING",
}

/**
 * <p>Defines a column statistics data.</p>
 */
export interface ColumnStatisticsData {
  /**
   * <p>The name of the column.</p>
   */
  Type: ColumnStatisticsType | string | undefined;

  /**
   * <p>String Column Statistics Data.</p>
   */
  StringColumnStatisticsData?: StringColumnStatisticsData;

  /**
   * <p>Double Column Statistics Data.</p>
   */
  DoubleColumnStatisticsData?: DoubleColumnStatisticsData;

  /**
   * <p>Long Column Statistics Data.</p>
   */
  LongColumnStatisticsData?: LongColumnStatisticsData;

  /**
   * <p>Boolean Column Statistics Data.</p>
   */
  BooleanColumnStatisticsData?: BooleanColumnStatisticsData;

  /**
   * <p>Decimal Column Statistics Data.</p>
   */
  DecimalColumnStatisticsData?: DecimalColumnStatisticsData;

  /**
   * <p>Date Column Statistics Data.</p>
   */
  DateColumnStatisticsData?: DateColumnStatisticsData;

  /**
   * <p>Binary Column Statistics Data.</p>
   */
  BinaryColumnStatisticsData?: BinaryColumnStatisticsData;
}

export namespace ColumnStatisticsData {
  export const filterSensitiveLog = (obj: ColumnStatisticsData): any => ({
    ...obj,
  });
}

/**
 * <p>Defines a column statistics.</p>
 */
export interface ColumnStatistics {
  /**
   * <p>The analyzed time of the column statistics.</p>
   */
  AnalyzedTime: Date | undefined;

  /**
   * <p>The statistics of the column.</p>
   */
  StatisticsData: ColumnStatisticsData | undefined;

  /**
   * <p>The type of the column.</p>
   */
  ColumnType: string | undefined;

  /**
   * <p>The name of the column.</p>
   */
  ColumnName: string | undefined;
}

export namespace ColumnStatistics {
  export const filterSensitiveLog = (obj: ColumnStatistics): any => ({
    ...obj,
  });
}

/**
 * <p>Defines a column containing error.</p>
 */
export interface ColumnError {
  /**
   * <p>The error message occurred during operation.</p>
   */
  Error?: ErrorDetail;

  /**
   * <p>The name of the column.</p>
   */
  ColumnName?: string;
}

export namespace ColumnError {
  export const filterSensitiveLog = (obj: ColumnError): any => ({
    ...obj,
  });
}

export interface GetColumnStatisticsForPartitionResponse {
  /**
   * <p>List of ColumnStatistics that failed to be retrieved.</p>
   */
  ColumnStatisticsList?: ColumnStatistics[];

  /**
   * <p>Error occurred during retrieving column statistics data.</p>
   */
  Errors?: ColumnError[];
}

export namespace GetColumnStatisticsForPartitionResponse {
  export const filterSensitiveLog = (obj: GetColumnStatisticsForPartitionResponse): any => ({
    ...obj,
  });
}

export interface GetColumnStatisticsForTableRequest {
  /**
   * <p>The name of the partitions' table.</p>
   */
  TableName: string | undefined;

  /**
   * <p>The name of the catalog database where the partitions reside.</p>
   */
  DatabaseName: string | undefined;

  /**
   * <p>A list of the column names.</p>
   */
  ColumnNames: string[] | undefined;

  /**
   * <p>The ID of the Data Catalog where the partitions in question reside.
   *       If none is supplied, the AWS account ID is used by default.</p>
   */
  CatalogId?: string;
}

export namespace GetColumnStatisticsForTableRequest {
  export const filterSensitiveLog = (obj: GetColumnStatisticsForTableRequest): any => ({
    ...obj,
  });
}

export interface GetColumnStatisticsForTableResponse {
  /**
   * <p>List of ColumnStatistics that failed to be retrieved.</p>
   */
  Errors?: ColumnError[];

  /**
   * <p>List of ColumnStatistics that failed to be retrieved.</p>
   */
  ColumnStatisticsList?: ColumnStatistics[];
}

export namespace GetColumnStatisticsForTableResponse {
  export const filterSensitiveLog = (obj: GetColumnStatisticsForTableResponse): any => ({
    ...obj,
  });
}

export interface GetConnectionRequest {
  /**
   * <p>The name of the connection definition to retrieve.</p>
   */
  Name: string | undefined;

  /**
   * <p>The ID of the Data Catalog in which the connection resides. If none is provided, the AWS
   *       account ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * <p>Allows you to retrieve the connection metadata without returning the password. For
   *       instance, the AWS Glue console uses this flag to retrieve the connection, and does not display
   *       the password. Set this parameter when the caller might not have permission to use the AWS KMS
   *       key to decrypt the password, but it does have permission to access the rest of the connection
   *       properties.</p>
   */
  HidePassword?: boolean;
}

export namespace GetConnectionRequest {
  export const filterSensitiveLog = (obj: GetConnectionRequest): any => ({
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
   * <p>A map of physical connection requirements, such as virtual private cloud (VPC) and
   *         <code>SecurityGroup</code>, that are needed to make this connection successfully.</p>
   */
  PhysicalConnectionRequirements?: PhysicalConnectionRequirements;

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
   *                   <code>CUSTOM_JDBC_CERT</code> - An Amazon S3 location specifying the customer's root certificate. AWS Glue uses this root certificate to validate the customer’s certificate when connecting to the customer database. AWS Glue only handles X.509 certificates. The certificate provided must be DER-encoded and supplied in Base64 encoding PEM format.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SKIP_CUSTOM_JDBC_CERT_VALIDATION</code> - By default, this is <code>false</code>. AWS Glue validates the Signature algorithm and Subject Public Key Algorithm for the customer certificate. The only permitted algorithms for the Signature algorithm are SHA256withRSA, SHA384withRSA or SHA512withRSA. For the Subject Public Key Algorithm, the key length must be at least 2048. You can set the value of this property to <code>true</code> to skip AWS Glue’s validation of the customer certificate.</p>
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
   *                   <code>KAFKA_SKIP_CUSTOM_CERT_VALIDATION</code> - Whether to skip the validation of the CA cert file or not. AWS Glue validates for three algorithms: SHA256withRSA, SHA384withRSA and SHA512withRSA. Default value is "false".</p>
   *             </li>
   *          </ul>
   */
  ConnectionProperties?: { [key: string]: string };

  /**
   * <p>The type of the connection. Currently, SFTP is not supported.</p>
   */
  ConnectionType?: ConnectionType | string;

  /**
   * <p>A list of criteria that can be used in selecting this connection.</p>
   */
  MatchCriteria?: string[];

  /**
   * <p>The description of the connection.</p>
   */
  Description?: string;

  /**
   * <p>The user, group, or role that last updated this connection definition.</p>
   */
  LastUpdatedBy?: string;

  /**
   * <p>The time that this connection definition was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The last time that this connection definition was updated.</p>
   */
  LastUpdatedTime?: Date;
}

export namespace Connection {
  export const filterSensitiveLog = (obj: Connection): any => ({
    ...obj,
  });
}

export interface GetConnectionResponse {
  /**
   * <p>The requested connection definition.</p>
   */
  Connection?: Connection;
}

export namespace GetConnectionResponse {
  export const filterSensitiveLog = (obj: GetConnectionResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Filters the connection definitions that are returned by the <code>GetConnections</code>
 *       API operation.</p>
 */
export interface GetConnectionsFilter {
  /**
   * <p>The type of connections to return. Currently, SFTP is not supported.</p>
   */
  ConnectionType?: ConnectionType | string;

  /**
   * <p>A criteria string that must match the criteria recorded in the
   *        connection definition for that connection definition to be returned.</p>
   */
  MatchCriteria?: string[];
}

export namespace GetConnectionsFilter {
  export const filterSensitiveLog = (obj: GetConnectionsFilter): any => ({
    ...obj,
  });
}

export interface GetConnectionsRequest {
  /**
   * <p>Allows you to retrieve the connection metadata without returning the password. For
   *       instance, the AWS Glue console uses this flag to retrieve the connection, and does not display
   *       the password. Set this parameter when the caller might not have permission to use the AWS KMS
   *       key to decrypt the password, but it does have permission to access the rest of the connection
   *       properties.</p>
   */
  HidePassword?: boolean;

  /**
   * <p>A continuation token, if this is a continuation call.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of connections to return in one response.</p>
   */
  MaxResults?: number;

  /**
   * <p>A filter that controls which connections are returned.</p>
   */
  Filter?: GetConnectionsFilter;

  /**
   * <p>The ID of the Data Catalog in which the connections reside. If none is provided, the AWS
   *       account ID is used by default.</p>
   */
  CatalogId?: string;
}

export namespace GetConnectionsRequest {
  export const filterSensitiveLog = (obj: GetConnectionsRequest): any => ({
    ...obj,
  });
}

export interface GetConnectionsResponse {
  /**
   * <p>A continuation token, if the list of connections returned does not
   *       include the last of the filtered connections.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of requested connection definitions.</p>
   */
  ConnectionList?: Connection[];
}

export namespace GetConnectionsResponse {
  export const filterSensitiveLog = (obj: GetConnectionsResponse): any => ({
    ...obj,
  });
}

export interface GetCrawlerRequest {
  /**
   * <p>The name of the crawler to retrieve metadata for.</p>
   */
  Name: string | undefined;
}

export namespace GetCrawlerRequest {
  export const filterSensitiveLog = (obj: GetCrawlerRequest): any => ({
    ...obj,
  });
}

export interface GetCrawlerResponse {
  /**
   * <p>The metadata for the specified crawler.</p>
   */
  Crawler?: Crawler;
}

export namespace GetCrawlerResponse {
  export const filterSensitiveLog = (obj: GetCrawlerResponse): any => ({
    ...obj,
  });
}

export interface GetCrawlerMetricsRequest {
  /**
   * <p>A list of the names of crawlers about which to retrieve metrics.</p>
   */
  CrawlerNameList?: string[];

  /**
   * <p>The maximum size of a list to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>A continuation token, if this is a continuation call.</p>
   */
  NextToken?: string;
}

export namespace GetCrawlerMetricsRequest {
  export const filterSensitiveLog = (obj: GetCrawlerMetricsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Metrics for a specified crawler.</p>
 */
export interface CrawlerMetrics {
  /**
   * <p>The duration of the crawler's most recent run, in seconds.</p>
   */
  LastRuntimeSeconds?: number;

  /**
   * <p>True if the crawler is still estimating how long it will take to complete this run.</p>
   */
  StillEstimating?: boolean;

  /**
   * <p>The number of tables created by this crawler.</p>
   */
  TablesCreated?: number;

  /**
   * <p>The name of the crawler.</p>
   */
  CrawlerName?: string;

  /**
   * <p>The median duration of this crawler's runs, in seconds.</p>
   */
  MedianRuntimeSeconds?: number;

  /**
   * <p>The number of tables deleted by this crawler.</p>
   */
  TablesDeleted?: number;

  /**
   * <p>The estimated time left to complete a running crawl.</p>
   */
  TimeLeftSeconds?: number;

  /**
   * <p>The number of tables updated by this crawler.</p>
   */
  TablesUpdated?: number;
}

export namespace CrawlerMetrics {
  export const filterSensitiveLog = (obj: CrawlerMetrics): any => ({
    ...obj,
  });
}

export interface GetCrawlerMetricsResponse {
  /**
   * <p>A continuation token, if the returned list does not contain the
   *       last metric available.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of metrics for the specified crawler.</p>
   */
  CrawlerMetricsList?: CrawlerMetrics[];
}

export namespace GetCrawlerMetricsResponse {
  export const filterSensitiveLog = (obj: GetCrawlerMetricsResponse): any => ({
    ...obj,
  });
}

export interface GetCrawlersRequest {
  /**
   * <p>The number of crawlers to return on each call.</p>
   */
  MaxResults?: number;

  /**
   * <p>A continuation token, if this is a continuation request.</p>
   */
  NextToken?: string;
}

export namespace GetCrawlersRequest {
  export const filterSensitiveLog = (obj: GetCrawlersRequest): any => ({
    ...obj,
  });
}

export interface GetCrawlersResponse {
  /**
   * <p>A continuation token, if the returned list has not reached the end
   *       of those defined in this customer account.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of crawler metadata.</p>
   */
  Crawlers?: Crawler[];
}

export namespace GetCrawlersResponse {
  export const filterSensitiveLog = (obj: GetCrawlersResponse): any => ({
    ...obj,
  });
}

export interface GetDatabaseRequest {
  /**
   * <p>The name of the database to retrieve. For Hive compatibility, this
   *       should be all lowercase.</p>
   */
  Name: string | undefined;

  /**
   * <p>The ID of the Data Catalog in which the database resides. If none is provided, the AWS
   *       account ID is used by default.</p>
   */
  CatalogId?: string;
}

export namespace GetDatabaseRequest {
  export const filterSensitiveLog = (obj: GetDatabaseRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The <code>Database</code> object represents a logical grouping of tables that might reside
 *       in a Hive metastore or an RDBMS.</p>
 */
export interface Database {
  /**
   * <p>The name of the database. For Hive compatibility, this is folded to lowercase when it is
   *       stored.</p>
   */
  Name: string | undefined;

  /**
   * <p>The ID of the Data Catalog in which the database resides.</p>
   */
  CatalogId?: string;

  /**
   * <p>The location of the database (for example, an HDFS path).</p>
   */
  LocationUri?: string;

  /**
   * <p>The time at which the metadata database was created in the catalog.</p>
   */
  CreateTime?: Date;

  /**
   * <p>A description of the database.</p>
   */
  Description?: string;

  /**
   * <p>These key-value pairs define parameters and properties
   *       of the database.</p>
   */
  Parameters?: { [key: string]: string };

  /**
   * <p>Creates a set of default permissions on the table for principals. </p>
   */
  CreateTableDefaultPermissions?: PrincipalPermissions[];

  /**
   * <p>A <code>DatabaseIdentifier</code> structure that describes a target database for resource linking.</p>
   */
  TargetDatabase?: DatabaseIdentifier;
}

export namespace Database {
  export const filterSensitiveLog = (obj: Database): any => ({
    ...obj,
  });
}

export interface GetDatabaseResponse {
  /**
   * <p>The definition of the specified database in the Data Catalog.</p>
   */
  Database?: Database;
}

export namespace GetDatabaseResponse {
  export const filterSensitiveLog = (obj: GetDatabaseResponse): any => ({
    ...obj,
  });
}

export enum ResourceShareType {
  ALL = "ALL",
  FOREIGN = "FOREIGN",
}

export interface GetDatabasesRequest {
  /**
   * <p>A continuation token, if this is a continuation call.</p>
   */
  NextToken?: string;

  /**
   * <p>Allows you to specify that you want to list the databases shared with your account. The allowable values are <code>FOREIGN</code> or <code>ALL</code>. </p>
   *
   * 	        <ul>
   *             <li>
   *                <p>If set to <code>FOREIGN</code>, will list the databases shared with your account. </p>
   *             </li>
   *             <li>
   *                <p>If set to <code>ALL</code>, will list the databases shared with your account, as well as the databases in yor local account. </p>
   *             </li>
   *          </ul>
   */
  ResourceShareType?: ResourceShareType | string;

  /**
   * <p>The maximum number of databases to return in one response.</p>
   */
  MaxResults?: number;

  /**
   * <p>The ID of the Data Catalog from which to retrieve <code>Databases</code>. If none is
   *       provided, the AWS account ID is used by default.</p>
   */
  CatalogId?: string;
}

export namespace GetDatabasesRequest {
  export const filterSensitiveLog = (obj: GetDatabasesRequest): any => ({
    ...obj,
  });
}

export interface GetDatabasesResponse {
  /**
   * <p>A list of <code>Database</code> objects from the specified catalog.</p>
   */
  DatabaseList: Database[] | undefined;

  /**
   * <p>A continuation token for paginating the returned list of tokens,
   *       returned if the current segment of the list is not the last.</p>
   */
  NextToken?: string;
}

export namespace GetDatabasesResponse {
  export const filterSensitiveLog = (obj: GetDatabasesResponse): any => ({
    ...obj,
  });
}

export interface GetDataCatalogEncryptionSettingsRequest {
  /**
   * <p>The ID of the Data Catalog to retrieve the security configuration for. If none is
   *       provided, the AWS account ID is used by default.</p>
   */
  CatalogId?: string;
}

export namespace GetDataCatalogEncryptionSettingsRequest {
  export const filterSensitiveLog = (obj: GetDataCatalogEncryptionSettingsRequest): any => ({
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
 *       Catalog first encrypts the password using your AWS KMS key. It then encrypts the whole
 *       connection object again if catalog encryption is also enabled.</p>
 *
 *          <p>This encryption requires that you set AWS KMS key permissions to enable or restrict access
 *       on the password key according to your security requirements. For example, you might want only
 *       administrators to have decrypt permission on the password key.</p>
 */
export interface ConnectionPasswordEncryption {
  /**
   * <p>An AWS KMS key that is used to encrypt the connection password. </p>
   *
   *          <p>If connection password protection is enabled, the caller of <code>CreateConnection</code>
   *       and <code>UpdateConnection</code> needs at least <code>kms:Encrypt</code> permission on the
   *       specified AWS KMS key, to encrypt passwords before storing them in the Data Catalog. </p>
   *
   * 	        <p>You can set the decrypt permission to enable or restrict access on the password key according to your security requirements.</p>
   */
  AwsKmsKeyId?: string;

  /**
   * <p>When the <code>ReturnConnectionPasswordEncrypted</code> flag is set to "true", passwords remain encrypted in the responses of <code>GetConnection</code> and <code>GetConnections</code>. This encryption takes effect independently from catalog encryption. </p>
   */
  ReturnConnectionPasswordEncrypted: boolean | undefined;
}

export namespace ConnectionPasswordEncryption {
  export const filterSensitiveLog = (obj: ConnectionPasswordEncryption): any => ({
    ...obj,
  });
}

export enum CatalogEncryptionMode {
  DISABLED = "DISABLED",
  SSEKMS = "SSE-KMS",
}

/**
 * <p>Specifies the encryption-at-rest configuration for the Data Catalog.</p>
 */
export interface EncryptionAtRest {
  /**
   * <p>The ID of the AWS KMS key to use for encryption at rest.</p>
   */
  SseAwsKmsKeyId?: string;

  /**
   * <p>The encryption-at-rest mode for encrypting Data Catalog data.</p>
   */
  CatalogEncryptionMode: CatalogEncryptionMode | string | undefined;
}

export namespace EncryptionAtRest {
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
  export const filterSensitiveLog = (obj: DataCatalogEncryptionSettings): any => ({
    ...obj,
  });
}

export interface GetDataCatalogEncryptionSettingsResponse {
  /**
   * <p>The requested security configuration.</p>
   */
  DataCatalogEncryptionSettings?: DataCatalogEncryptionSettings;
}

export namespace GetDataCatalogEncryptionSettingsResponse {
  export const filterSensitiveLog = (obj: GetDataCatalogEncryptionSettingsResponse): any => ({
    ...obj,
  });
}

export interface GetDataflowGraphRequest {
  /**
   * <p>The Python script to transform.</p>
   */
  PythonScript?: string;
}

export namespace GetDataflowGraphRequest {
  export const filterSensitiveLog = (obj: GetDataflowGraphRequest): any => ({
    ...obj,
  });
}

export interface GetDataflowGraphResponse {
  /**
   * <p>A list of the edges in the resulting DAG.</p>
   */
  DagEdges?: CodeGenEdge[];

  /**
   * <p>A list of the nodes in the resulting DAG.</p>
   */
  DagNodes?: CodeGenNode[];
}

export namespace GetDataflowGraphResponse {
  export const filterSensitiveLog = (obj: GetDataflowGraphResponse): any => ({
    ...obj,
  });
}

export interface GetDevEndpointRequest {
  /**
   * <p>Name of the <code>DevEndpoint</code> to retrieve information for.</p>
   */
  EndpointName: string | undefined;
}

export namespace GetDevEndpointRequest {
  export const filterSensitiveLog = (obj: GetDevEndpointRequest): any => ({
    ...obj,
  });
}

export interface GetDevEndpointResponse {
  /**
   * <p>A <code>DevEndpoint</code> definition.</p>
   */
  DevEndpoint?: DevEndpoint;
}

export namespace GetDevEndpointResponse {
  export const filterSensitiveLog = (obj: GetDevEndpointResponse): any => ({
    ...obj,
  });
}

export interface GetDevEndpointsRequest {
  /**
   * <p>The maximum size of information to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>A continuation token, if this is a continuation call.</p>
   */
  NextToken?: string;
}

export namespace GetDevEndpointsRequest {
  export const filterSensitiveLog = (obj: GetDevEndpointsRequest): any => ({
    ...obj,
  });
}

export interface GetDevEndpointsResponse {
  /**
   * <p>A list of <code>DevEndpoint</code> definitions.</p>
   */
  DevEndpoints?: DevEndpoint[];

  /**
   * <p>A continuation token, if not all <code>DevEndpoint</code> definitions have yet been
   *       returned.</p>
   */
  NextToken?: string;
}

export namespace GetDevEndpointsResponse {
  export const filterSensitiveLog = (obj: GetDevEndpointsResponse): any => ({
    ...obj,
  });
}

export interface GetJobRequest {
  /**
   * <p>The name of the job definition to retrieve.</p>
   */
  JobName: string | undefined;
}

export namespace GetJobRequest {
  export const filterSensitiveLog = (obj: GetJobRequest): any => ({
    ...obj,
  });
}

export interface GetJobResponse {
  /**
   * <p>The requested job definition.</p>
   */
  Job?: Job;
}

export namespace GetJobResponse {
  export const filterSensitiveLog = (obj: GetJobResponse): any => ({
    ...obj,
  });
}

export interface GetJobBookmarkRequest {
  /**
   * <p>The name of the job in question.</p>
   */
  JobName: string | undefined;

  /**
   * <p>The unique run identifier associated with this job run.</p>
   */
  RunId?: string;
}

export namespace GetJobBookmarkRequest {
  export const filterSensitiveLog = (obj: GetJobBookmarkRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Defines a point that a job can resume processing.</p>
 */
export interface JobBookmarkEntry {
  /**
   * <p>The bookmark itself.</p>
   */
  JobBookmark?: string;

  /**
   * <p>The run ID number.</p>
   */
  Run?: number;

  /**
   * <p>The run ID number.</p>
   */
  RunId?: string;

  /**
   * <p>The name of the job in question.</p>
   */
  JobName?: string;

  /**
   * <p>The version of the job.</p>
   */
  Version?: number;

  /**
   * <p>The unique run identifier associated with the previous job run.</p>
   */
  PreviousRunId?: string;

  /**
   * <p>The attempt ID number.</p>
   */
  Attempt?: number;
}

export namespace JobBookmarkEntry {
  export const filterSensitiveLog = (obj: JobBookmarkEntry): any => ({
    ...obj,
  });
}

export interface GetJobBookmarkResponse {
  /**
   * <p>A structure that defines a point that a job can resume processing.</p>
   */
  JobBookmarkEntry?: JobBookmarkEntry;
}

export namespace GetJobBookmarkResponse {
  export const filterSensitiveLog = (obj: GetJobBookmarkResponse): any => ({
    ...obj,
  });
}

export interface GetJobRunRequest {
  /**
   * <p>The ID of the job run.</p>
   */
  RunId: string | undefined;

  /**
   * <p>Name of the job definition being run.</p>
   */
  JobName: string | undefined;

  /**
   * <p>True if a list of predecessor runs should be returned.</p>
   */
  PredecessorsIncluded?: boolean;
}

export namespace GetJobRunRequest {
  export const filterSensitiveLog = (obj: GetJobRunRequest): any => ({
    ...obj,
  });
}

export interface GetJobRunResponse {
  /**
   * <p>The requested job-run metadata.</p>
   */
  JobRun?: JobRun;
}

export namespace GetJobRunResponse {
  export const filterSensitiveLog = (obj: GetJobRunResponse): any => ({
    ...obj,
  });
}

export interface GetJobRunsRequest {
  /**
   * <p>The name of the job definition for which to retrieve all job runs.</p>
   */
  JobName: string | undefined;

  /**
   * <p>The maximum size of the response.</p>
   */
  MaxResults?: number;

  /**
   * <p>A continuation token, if this is a continuation call.</p>
   */
  NextToken?: string;
}

export namespace GetJobRunsRequest {
  export const filterSensitiveLog = (obj: GetJobRunsRequest): any => ({
    ...obj,
  });
}

export interface GetJobRunsResponse {
  /**
   * <p>A continuation token, if not all requested job runs have been returned.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of job-run metadata objects.</p>
   */
  JobRuns?: JobRun[];
}

export namespace GetJobRunsResponse {
  export const filterSensitiveLog = (obj: GetJobRunsResponse): any => ({
    ...obj,
  });
}

export interface GetJobsRequest {
  /**
   * <p>A continuation token, if this is a continuation call.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum size of the response.</p>
   */
  MaxResults?: number;
}

export namespace GetJobsRequest {
  export const filterSensitiveLog = (obj: GetJobsRequest): any => ({
    ...obj,
  });
}

export interface GetJobsResponse {
  /**
   * <p>A list of job definitions.</p>
   */
  Jobs?: Job[];

  /**
   * <p>A continuation token, if not all job definitions have yet been returned.</p>
   */
  NextToken?: string;
}

export namespace GetJobsResponse {
  export const filterSensitiveLog = (obj: GetJobsResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The location of resources.</p>
 */
export interface Location {
  /**
   * <p>An Amazon Simple Storage Service (Amazon S3) location.</p>
   */
  S3?: CodeGenNodeArg[];

  /**
   * <p>An Amazon DynamoDB table location.</p>
   */
  DynamoDB?: CodeGenNodeArg[];

  /**
   * <p>A JDBC location.</p>
   */
  Jdbc?: CodeGenNodeArg[];
}

export namespace Location {
  export const filterSensitiveLog = (obj: Location): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies a table definition in the AWS Glue Data Catalog.</p>
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
  export const filterSensitiveLog = (obj: CatalogEntry): any => ({
    ...obj,
  });
}

export interface GetMappingRequest {
  /**
   * <p>A list of target tables.</p>
   */
  Sinks?: CatalogEntry[];

  /**
   * <p>Specifies the source table.</p>
   */
  Source: CatalogEntry | undefined;

  /**
   * <p>Parameters for the mapping.</p>
   */
  Location?: Location;
}

export namespace GetMappingRequest {
  export const filterSensitiveLog = (obj: GetMappingRequest): any => ({
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
   * <p>The target type.</p>
   */
  TargetType?: string;

  /**
   * <p>The target table.</p>
   */
  TargetTable?: string;

  /**
   * <p>The source path.</p>
   */
  SourcePath?: string;

  /**
   * <p>The target path.</p>
   */
  TargetPath?: string;

  /**
   * <p>The source type.</p>
   */
  SourceType?: string;
}

export namespace MappingEntry {
  export const filterSensitiveLog = (obj: MappingEntry): any => ({
    ...obj,
  });
}

export interface GetMappingResponse {
  /**
   * <p>A list of mappings to the specified targets.</p>
   */
  Mapping: MappingEntry[] | undefined;
}

export namespace GetMappingResponse {
  export const filterSensitiveLog = (obj: GetMappingResponse): any => ({
    ...obj,
  });
}

export interface GetMLTaskRunRequest {
  /**
   * <p>The unique identifier of the machine learning transform.</p>
   */
  TransformId: string | undefined;

  /**
   * <p>The unique identifier of the task run.</p>
   */
  TaskRunId: string | undefined;
}

export namespace GetMLTaskRunRequest {
  export const filterSensitiveLog = (obj: GetMLTaskRunRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies configuration properties for an exporting labels task run.</p>
 */
export interface ExportLabelsTaskRunProperties {
  /**
   * <p>The Amazon Simple Storage Service (Amazon S3) path where you will export the
   *       labels.</p>
   */
  OutputS3Path?: string;
}

export namespace ExportLabelsTaskRunProperties {
  export const filterSensitiveLog = (obj: ExportLabelsTaskRunProperties): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies configuration properties for a Find Matches task run.</p>
 */
export interface FindMatchesTaskRunProperties {
  /**
   * <p>The job ID for the Find Matches task run.</p>
   */
  JobId?: string;

  /**
   * <p>The job run ID for the Find Matches task run.</p>
   */
  JobRunId?: string;

  /**
   * <p>The name assigned to the job for the Find Matches task run.</p>
   */
  JobName?: string;
}

export namespace FindMatchesTaskRunProperties {
  export const filterSensitiveLog = (obj: FindMatchesTaskRunProperties): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies configuration properties for an importing labels task run.</p>
 */
export interface ImportLabelsTaskRunProperties {
  /**
   * <p>The Amazon Simple Storage Service (Amazon S3) path from where you will import the
   *       labels.</p>
   */
  InputS3Path?: string;

  /**
   * <p>Indicates whether to overwrite your existing labels.</p>
   */
  Replace?: boolean;
}

export namespace ImportLabelsTaskRunProperties {
  export const filterSensitiveLog = (obj: ImportLabelsTaskRunProperties): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies configuration properties for a labeling set generation task run.</p>
 */
export interface LabelingSetGenerationTaskRunProperties {
  /**
   * <p>The Amazon Simple Storage Service (Amazon S3) path where you will generate the labeling
   *       set.</p>
   */
  OutputS3Path?: string;
}

export namespace LabelingSetGenerationTaskRunProperties {
  export const filterSensitiveLog = (obj: LabelingSetGenerationTaskRunProperties): any => ({
    ...obj,
  });
}

export enum TaskType {
  EVALUATION = "EVALUATION",
  EXPORT_LABELS = "EXPORT_LABELS",
  FIND_MATCHES = "FIND_MATCHES",
  IMPORT_LABELS = "IMPORT_LABELS",
  LABELING_SET_GENERATION = "LABELING_SET_GENERATION",
}

/**
 * <p>The configuration properties for the task run.</p>
 */
export interface TaskRunProperties {
  /**
   * <p>The type of task run.</p>
   */
  TaskType?: TaskType | string;

  /**
   * <p>The configuration properties for a labeling set generation task run.</p>
   */
  LabelingSetGenerationTaskRunProperties?: LabelingSetGenerationTaskRunProperties;

  /**
   * <p>The configuration properties for an importing labels task run.</p>
   */
  ImportLabelsTaskRunProperties?: ImportLabelsTaskRunProperties;

  /**
   * <p>The configuration properties for a find matches task run.</p>
   */
  FindMatchesTaskRunProperties?: FindMatchesTaskRunProperties;

  /**
   * <p>The configuration properties for an exporting labels task run.</p>
   */
  ExportLabelsTaskRunProperties?: ExportLabelsTaskRunProperties;
}

export namespace TaskRunProperties {
  export const filterSensitiveLog = (obj: TaskRunProperties): any => ({
    ...obj,
  });
}

export interface GetMLTaskRunResponse {
  /**
   * <p>The amount of time (in seconds) that the task run consumed resources.</p>
   */
  ExecutionTime?: number;

  /**
   * <p>The status for this task run.</p>
   */
  Status?: TaskStatusType | string;

  /**
   * <p>The list of properties that are associated with the task run.</p>
   */
  Properties?: TaskRunProperties;

  /**
   * <p>The unique run identifier associated with this run.</p>
   */
  TaskRunId?: string;

  /**
   * <p>The date and time when this task run was last modified.</p>
   */
  LastModifiedOn?: Date;

  /**
   * <p>The names of the log groups that are associated with the task run.</p>
   */
  LogGroupName?: string;

  /**
   * <p>The date and time when this task run was completed.</p>
   */
  CompletedOn?: Date;

  /**
   * <p>The unique identifier of the task run.</p>
   */
  TransformId?: string;

  /**
   * <p>The error strings that are associated with the task run.</p>
   */
  ErrorString?: string;

  /**
   * <p>The date and time when this task run started.</p>
   */
  StartedOn?: Date;
}

export namespace GetMLTaskRunResponse {
  export const filterSensitiveLog = (obj: GetMLTaskRunResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The criteria that are used to filter the task runs for the machine learning
 *       transform.</p>
 */
export interface TaskRunFilterCriteria {
  /**
   * <p>Filter on task runs started before this date.</p>
   */
  StartedBefore?: Date;

  /**
   * <p>Filter on task runs started after this date.</p>
   */
  StartedAfter?: Date;

  /**
   * <p>The type of task run.</p>
   */
  TaskRunType?: TaskType | string;

  /**
   * <p>The current status of the task run.</p>
   */
  Status?: TaskStatusType | string;
}

export namespace TaskRunFilterCriteria {
  export const filterSensitiveLog = (obj: TaskRunFilterCriteria): any => ({
    ...obj,
  });
}

export enum TaskRunSortColumnType {
  STARTED = "STARTED",
  STATUS = "STATUS",
  TASK_RUN_TYPE = "TASK_RUN_TYPE",
}

export enum SortDirectionType {
  ASCENDING = "ASCENDING",
  DESCENDING = "DESCENDING",
}

/**
 * <p>The sorting criteria that are used to sort the list of task runs for the machine learning
 *       transform.</p>
 */
export interface TaskRunSortCriteria {
  /**
   * <p>The sort direction to be used to sort the list of task runs for the machine learning
   *       transform.</p>
   */
  SortDirection: SortDirectionType | string | undefined;

  /**
   * <p>The column to be used to sort the list of task runs for the machine learning
   *       transform.</p>
   */
  Column: TaskRunSortColumnType | string | undefined;
}

export namespace TaskRunSortCriteria {
  export const filterSensitiveLog = (obj: TaskRunSortCriteria): any => ({
    ...obj,
  });
}

export interface GetMLTaskRunsRequest {
  /**
   * <p>The sorting criteria, in the <code>TaskRunSortCriteria</code> structure, for the task run.</p>
   */
  Sort?: TaskRunSortCriteria;

  /**
   * <p>A token for pagination of the results. The default is empty.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return. </p>
   */
  MaxResults?: number;

  /**
   * <p>The filter criteria, in the <code>TaskRunFilterCriteria</code> structure, for the task run.</p>
   */
  Filter?: TaskRunFilterCriteria;

  /**
   * <p>The unique identifier of the machine learning transform.</p>
   */
  TransformId: string | undefined;
}

export namespace GetMLTaskRunsRequest {
  export const filterSensitiveLog = (obj: GetMLTaskRunsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The sampling parameters that are associated with the machine learning transform.</p>
 */
export interface TaskRun {
  /**
   * <p>The date and time that this task run started.</p>
   */
  StartedOn?: Date;

  /**
   * <p>The amount of time (in seconds) that the task run consumed resources.</p>
   */
  ExecutionTime?: number;

  /**
   * <p>The current status of the requested task run.</p>
   */
  Status?: TaskStatusType | string;

  /**
   * <p>Specifies configuration properties associated with this task run.</p>
   */
  Properties?: TaskRunProperties;

  /**
   * <p>The unique identifier for the transform.</p>
   */
  TransformId?: string;

  /**
   * <p>The last point in time that the requested task run was completed.</p>
   */
  CompletedOn?: Date;

  /**
   * <p>The list of error strings associated with this task run.</p>
   */
  ErrorString?: string;

  /**
   * <p>The names of the log group for secure logging, associated with this task run.</p>
   */
  LogGroupName?: string;

  /**
   * <p>The unique identifier for this task run.</p>
   */
  TaskRunId?: string;

  /**
   * <p>The last point in time that the requested task run was updated.</p>
   */
  LastModifiedOn?: Date;
}

export namespace TaskRun {
  export const filterSensitiveLog = (obj: TaskRun): any => ({
    ...obj,
  });
}

export interface GetMLTaskRunsResponse {
  /**
   * <p>A pagination token, if more results are available.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of task runs that are associated with the transform.</p>
   */
  TaskRuns?: TaskRun[];
}

export namespace GetMLTaskRunsResponse {
  export const filterSensitiveLog = (obj: GetMLTaskRunsResponse): any => ({
    ...obj,
  });
}

export interface GetMLTransformRequest {
  /**
   * <p>The unique identifier of the transform, generated at the time that the transform was
   *       created.</p>
   */
  TransformId: string | undefined;
}

export namespace GetMLTransformRequest {
  export const filterSensitiveLog = (obj: GetMLTransformRequest): any => ({
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
   * <p>The number of matches in the data that the transform didn't find, in the confusion matrix for your transform.</p>
   */
  NumFalseNegatives?: number;

  /**
   * <p>The number of nonmatches in the data that the transform correctly rejected, in the
   *       confusion matrix for your transform.</p>
   */
  NumTrueNegatives?: number;
}

export namespace ConfusionMatrix {
  export const filterSensitiveLog = (obj: ConfusionMatrix): any => ({
    ...obj,
  });
}

/**
 * <p>The evaluation metrics for the find matches algorithm. The quality of your machine
 *       learning transform is measured by getting your transform to predict some matches and comparing
 *       the results to known matches from the same dataset. The quality metrics are based on a subset
 *       of your data, so they are not precise.</p>
 */
export interface FindMatchesMetrics {
  /**
   * <p>The confusion matrix shows you what your transform is predicting accurately and what types of errors it is making.</p>
   * 	        <p>For more information, see <a href="https://en.wikipedia.org/wiki/Confusion_matrix">Confusion matrix</a> in Wikipedia.</p>
   */
  ConfusionMatrix?: ConfusionMatrix;

  /**
   * <p>The precision metric indicates when often your transform is correct when it predicts a match. Specifically, it measures how well the transform finds true positives from the total true positives possible.</p>
   *          <p>For more information, see <a href="https://en.wikipedia.org/wiki/Precision_and_recall">Precision and recall</a> in Wikipedia.</p>
   */
  Precision?: number;

  /**
   * <p>The area under the precision/recall curve (AUPRC) is a single number measuring the overall
   *       quality of the transform, that is independent of the choice made for precision vs. recall.
   *       Higher values indicate that you have a more attractive precision vs. recall tradeoff.</p>
   * 	        <p>For more information, see <a href="https://en.wikipedia.org/wiki/Precision_and_recall">Precision and recall</a> in Wikipedia.</p>
   */
  AreaUnderPRCurve?: number;

  /**
   * <p>The maximum F1 metric indicates the transform's accuracy between 0 and 1, where 1 is the best accuracy.</p>
   *          <p>For more information, see <a href="https://en.wikipedia.org/wiki/F1_score">F1 score</a> in Wikipedia.</p>
   */
  F1?: number;

  /**
   * <p>The recall metric indicates that for an actual match, how often your transform predicts
   *       the match. Specifically, it measures how well the transform finds true positives from the
   *       total records in the source data.</p>
   *          <p>For more information, see <a href="https://en.wikipedia.org/wiki/Precision_and_recall">Precision and recall</a> in Wikipedia.</p>
   */
  Recall?: number;
}

export namespace FindMatchesMetrics {
  export const filterSensitiveLog = (obj: FindMatchesMetrics): any => ({
    ...obj,
  });
}

/**
 * <p>Evaluation metrics provide an estimate of the quality of your machine learning transform.</p>
 */
export interface EvaluationMetrics {
  /**
   * <p>The evaluation metrics for the find matches algorithm.</p>
   */
  FindMatchesMetrics?: FindMatchesMetrics;

  /**
   * <p>The type of machine learning transform.</p>
   */
  TransformType: TransformType | string | undefined;
}

export namespace EvaluationMetrics {
  export const filterSensitiveLog = (obj: EvaluationMetrics): any => ({
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
  export const filterSensitiveLog = (obj: SchemaColumn): any => ({
    ...obj,
  });
}

export enum TransformStatusType {
  DELETING = "DELETING",
  NOT_READY = "NOT_READY",
  READY = "READY",
}

export interface GetMLTransformResponse {
  /**
   * <p>The unique name given to the transform when it was created.</p>
   */
  Name?: string;

  /**
   * <p>The date and time when the transform was last modified.</p>
   */
  LastModifiedOn?: Date;

  /**
   * <p>The number of labels available for this transform.</p>
   */
  LabelCount?: number;

  /**
   * <p>The date and time when the transform was created.</p>
   */
  CreatedOn?: Date;

  /**
   * <p>The configuration parameters that are specific to the algorithm used.</p>
   */
  Parameters?: TransformParameters;

  /**
   * <p>The maximum number of times to retry a task for this transform after a task run fails.</p>
   */
  MaxRetries?: number;

  /**
   * <p>The last known status of the transform (to indicate whether it can be used or not). One of "NOT_READY", "READY", or "DELETING".</p>
   */
  Status?: TransformStatusType | string;

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
   * <p>This value determines which version of AWS Glue this machine learning transform is compatible with. Glue 1.0 is recommended for most customers. If the value is not set, the Glue compatibility defaults to Glue 0.9.  For more information, see <a href="https://docs.aws.amazon.com/glue/latest/dg/release-notes.html#release-notes-versions">AWS Glue Versions</a> in the developer guide.</p>
   */
  GlueVersion?: string;

  /**
   * <p>The number of AWS Glue data processing units (DPUs) that are allocated to task runs for this transform. You can allocate from 2 to 100 DPUs; the default is 10. A DPU is a relative measure of
   *       processing power that consists of 4 vCPUs of compute capacity and 16 GB of memory. For more
   *       information, see the <a href="https://aws.amazon.com/glue/pricing/">AWS Glue pricing
   *         page</a>. </p>
   *
   *          <p>When the <code>WorkerType</code> field is set to a value other than <code>Standard</code>, the <code>MaxCapacity</code> field is set automatically and becomes read-only.</p>
   */
  MaxCapacity?: number;

  /**
   * <p>A description of the transform.</p>
   */
  Description?: string;

  /**
   * <p>The unique identifier of the transform, generated at the time that the transform was
   *       created.</p>
   */
  TransformId?: string;

  /**
   * <p>A list of AWS Glue table definitions used by the transform.</p>
   */
  InputRecordTables?: GlueTable[];

  /**
   * <p>The number of workers of a defined <code>workerType</code> that are allocated when this task runs.</p>
   */
  NumberOfWorkers?: number;

  /**
   * <p>The name or Amazon Resource Name (ARN) of the IAM role with the required
   *       permissions.</p>
   */
  Role?: string;

  /**
   * <p>The timeout for a task run for this transform in minutes. This is the maximum time that a task run for this transform can consume resources before it is terminated and enters <code>TIMEOUT</code> status. The default is 2,880 minutes (48 hours).</p>
   */
  Timeout?: number;

  /**
   * <p>The <code>Map<Column, Type></code> object that represents the schema that this
   *       transform accepts. Has an upper bound of 100 columns.</p>
   */
  Schema?: SchemaColumn[];

  /**
   * <p>The latest evaluation metrics.</p>
   */
  EvaluationMetrics?: EvaluationMetrics;
}

export namespace GetMLTransformResponse {
  export const filterSensitiveLog = (obj: GetMLTransformResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The criteria used to filter the machine learning transforms.</p>
 */
export interface TransformFilterCriteria {
  /**
   * <p>Filters on datasets with a specific schema. The <code>Map<Column, Type></code>
   *       object is an array of key-value pairs representing the schema this transform accepts, where
   *         <code>Column</code> is the name of a column, and <code>Type</code> is the type of the data
   *       such as an integer or string. Has an upper bound of 100 columns.</p>
   */
  Schema?: SchemaColumn[];

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
   * <p>Filter on transforms last modified before this date.</p>
   */
  LastModifiedBefore?: Date;

  /**
   * <p>The time and date after which the transforms were created.</p>
   */
  CreatedAfter?: Date;

  /**
   * <p>This value determines which version of AWS Glue this machine learning transform is compatible with. Glue 1.0 is recommended for most customers. If the value is not set, the Glue compatibility defaults to Glue 0.9.  For more information, see <a href="https://docs.aws.amazon.com/glue/latest/dg/release-notes.html#release-notes-versions">AWS Glue Versions</a> in the developer guide.</p>
   */
  GlueVersion?: string;

  /**
   * <p>The time and date before which the transforms were created.</p>
   */
  CreatedBefore?: Date;

  /**
   * <p>Filters the list of machine learning transforms by the last known status of the transforms (to indicate whether a transform can be used or not). One of "NOT_READY", "READY", or "DELETING".</p>
   */
  Status?: TransformStatusType | string;

  /**
   * <p>Filter on transforms last modified after this date.</p>
   */
  LastModifiedAfter?: Date;
}

export namespace TransformFilterCriteria {
  export const filterSensitiveLog = (obj: TransformFilterCriteria): any => ({
    ...obj,
  });
}

export enum TransformSortColumnType {
  CREATED = "CREATED",
  LAST_MODIFIED = "LAST_MODIFIED",
  NAME = "NAME",
  STATUS = "STATUS",
  TRANSFORM_TYPE = "TRANSFORM_TYPE",
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
  export const filterSensitiveLog = (obj: TransformSortCriteria): any => ({
    ...obj,
  });
}

export interface GetMLTransformsRequest {
  /**
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>The filter transformation criteria.</p>
   */
  Filter?: TransformFilterCriteria;

  /**
   * <p>A paginated token to offset the results.</p>
   */
  NextToken?: string;

  /**
   * <p>The sorting criteria.</p>
   */
  Sort?: TransformSortCriteria;
}

export namespace GetMLTransformsRequest {
  export const filterSensitiveLog = (obj: GetMLTransformsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A structure for a machine learning transform.</p>
 */
export interface MLTransform {
  /**
   * <p>A count identifier for the labeling files generated by AWS Glue for this transform. As you create a better transform, you can iteratively download, label, and upload the labeling file.</p>
   */
  LabelCount?: number;

  /**
   * <p>A timestamp. The last point in time when this machine learning transform was modified.</p>
   */
  LastModifiedOn?: Date;

  /**
   * <p>A <code>TransformParameters</code> object. You can use parameters to tune (customize) the
   *       behavior of the machine learning transform by specifying what data it learns from and your
   *       preference on various tradeoffs (such as precious vs. recall, or accuracy vs. cost).</p>
   */
  Parameters?: TransformParameters;

  /**
   * <p>This value determines which version of AWS Glue this machine learning transform is compatible with. Glue 1.0 is recommended for most customers. If the value is not set, the Glue compatibility defaults to Glue 0.9.  For more information, see <a href="https://docs.aws.amazon.com/glue/latest/dg/release-notes.html#release-notes-versions">AWS Glue Versions</a> in the developer guide.</p>
   */
  GlueVersion?: string;

  /**
   * <p>A user-defined name for the machine learning transform. Names are not guaranteed unique
   *       and can be changed at any time.</p>
   */
  Name?: string;

  /**
   * <p>An <code>EvaluationMetrics</code> object. Evaluation metrics provide an estimate of the quality of your machine learning transform.</p>
   */
  EvaluationMetrics?: EvaluationMetrics;

  /**
   * <p>A map of key-value pairs representing the columns and data types that this transform can
   *       run against. Has an upper bound of 100 columns.</p>
   */
  Schema?: SchemaColumn[];

  /**
   * <p>A user-defined, long-form description text for the machine learning transform.
   *       Descriptions are not guaranteed to be unique and can be changed at any time.</p>
   */
  Description?: string;

  /**
   * <p>The timeout in minutes of the machine learning transform.</p>
   */
  Timeout?: number;

  /**
   * <p>A list of AWS Glue table definitions used by the transform.</p>
   */
  InputRecordTables?: GlueTable[];

  /**
   * <p>The maximum number of times to retry after an <code>MLTaskRun</code> of the machine
   *       learning transform fails.</p>
   */
  MaxRetries?: number;

  /**
   * <p>The number of workers of a defined <code>workerType</code> that are allocated when a task of the transform runs.</p>
   *
   * 	        <p>If <code>WorkerType</code> is set, then <code>NumberOfWorkers</code> is required (and vice versa).</p>
   */
  NumberOfWorkers?: number;

  /**
   * <p>The name or Amazon Resource Name (ARN) of the IAM role with the required permissions. The required permissions include both AWS Glue service role permissions to AWS Glue resources, and Amazon S3 permissions required by the transform. </p>
   *
   * 		       <ul>
   *             <li>
   *                <p>This role needs AWS Glue service role permissions to allow access to resources in AWS Glue. See <a href="https://docs.aws.amazon.com/glue/latest/dg/attach-policy-iam-user.html">Attach a Policy to IAM Users That Access AWS Glue</a>.</p>
   *             </li>
   *             <li>
   *                <p>This role needs permission to your Amazon Simple Storage Service (Amazon S3) sources, targets, temporary directory, scripts, and any libraries used by the task run for this transform.</p>
   *             </li>
   *          </ul>
   */
  Role?: string;

  /**
   * <p>The current status of the machine learning transform.</p>
   */
  Status?: TransformStatusType | string;

  /**
   * <p>The unique transform ID that is generated for the machine learning transform. The ID is
   *       guaranteed to be unique and does not change.</p>
   */
  TransformId?: string;

  /**
   * <p>A timestamp. The time and date that this machine learning transform was created.</p>
   */
  CreatedOn?: Date;

  /**
   * <p>The number of AWS Glue data processing units (DPUs) that are allocated to task runs for this transform. You can allocate from 2 to 100 DPUs; the default is 10. A DPU is a relative measure of
   *       processing power that consists of 4 vCPUs of compute capacity and 16 GB of memory. For more
   *       information, see the <a href="http://aws.amazon.com/glue/pricing/">AWS Glue pricing
   *         page</a>. </p>
   *
   * 		       <p>
   *             <code>MaxCapacity</code> is a mutually exclusive option with <code>NumberOfWorkers</code> and <code>WorkerType</code>.</p>
   *         <ul>
   *             <li>
   *                <p>If either <code>NumberOfWorkers</code> or <code>WorkerType</code> is set, then <code>MaxCapacity</code> cannot be set.</p>
   *             </li>
   *             <li>
   *                <p>If <code>MaxCapacity</code> is set then neither <code>NumberOfWorkers</code> or <code>WorkerType</code> can be set.</p>
   *             </li>
   *             <li>
   *                <p>If <code>WorkerType</code> is set, then <code>NumberOfWorkers</code> is required (and vice versa).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MaxCapacity</code> and <code>NumberOfWorkers</code> must both be at least 1.</p>
   *             </li>
   *          </ul>
   *
   * 	        <p>When the <code>WorkerType</code> field is set to a value other than <code>Standard</code>, the <code>MaxCapacity</code> field is set automatically and becomes read-only.</p>
   */
  MaxCapacity?: number;

  /**
   * <p>The type of predefined worker that is allocated when a task of this transform runs. Accepts a value of Standard, G.1X, or G.2X.</p>
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
   *
   * 	        <p>
   *             <code>MaxCapacity</code> is a mutually exclusive option with <code>NumberOfWorkers</code> and <code>WorkerType</code>.</p>
   *         <ul>
   *             <li>
   *                <p>If either <code>NumberOfWorkers</code> or <code>WorkerType</code> is set, then <code>MaxCapacity</code> cannot be set.</p>
   *             </li>
   *             <li>
   *                <p>If <code>MaxCapacity</code> is set then neither <code>NumberOfWorkers</code> or <code>WorkerType</code> can be set.</p>
   *             </li>
   *             <li>
   *                <p>If <code>WorkerType</code> is set, then <code>NumberOfWorkers</code> is required (and vice versa).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MaxCapacity</code> and <code>NumberOfWorkers</code> must both be at least 1.</p>
   *             </li>
   *          </ul>
   */
  WorkerType?: WorkerType | string;
}

export namespace MLTransform {
  export const filterSensitiveLog = (obj: MLTransform): any => ({
    ...obj,
  });
}

export interface GetMLTransformsResponse {
  /**
   * <p>A list of machine learning transforms.</p>
   */
  Transforms: MLTransform[] | undefined;

  /**
   * <p>A pagination token, if more results are available.</p>
   */
  NextToken?: string;
}

export namespace GetMLTransformsResponse {
  export const filterSensitiveLog = (obj: GetMLTransformsResponse): any => ({
    ...obj,
  });
}
