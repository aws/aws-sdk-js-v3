// smithy-typescript generated code
import {
  BatchLoadDataFormat,
  BatchLoadStatus,
  DimensionValueType,
  MeasureValueType,
  PartitionKeyEnforcementLevel,
  PartitionKeyType,
  S3EncryptionOption,
  ScalarMeasureValueType,
  TableStatus,
  TimeUnit,
} from "./enums";

/**
 * <p>Details about the progress of a batch load task.</p>
 * @public
 */
export interface BatchLoadProgressReport {
  /**
   * <p></p>
   * @public
   */
  RecordsProcessed?: number | undefined;

  /**
   * <p></p>
   * @public
   */
  RecordsIngested?: number | undefined;

  /**
   * <p></p>
   * @public
   */
  ParseFailures?: number | undefined;

  /**
   * <p></p>
   * @public
   */
  RecordIngestionFailures?: number | undefined;

  /**
   * <p></p>
   * @public
   */
  FileFailures?: number | undefined;

  /**
   * <p></p>
   * @public
   */
  BytesMetered?: number | undefined;
}

/**
 * <p>Details about a batch load task.</p>
 * @public
 */
export interface BatchLoadTask {
  /**
   * <p>The ID of the batch load task.</p>
   * @public
   */
  TaskId?: string | undefined;

  /**
   * <p>Status of the batch load task.</p>
   * @public
   */
  TaskStatus?: BatchLoadStatus | undefined;

  /**
   * <p>Database name for the database into which a batch load task loads data.</p>
   * @public
   */
  DatabaseName?: string | undefined;

  /**
   * <p>Table name for the table into which a batch load task loads data.</p>
   * @public
   */
  TableName?: string | undefined;

  /**
   * <p>The time when the Timestream batch load task was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The time when the Timestream batch load task was last updated.</p>
   * @public
   */
  LastUpdatedTime?: Date | undefined;

  /**
   * <p>
   *       </p>
   * @public
   */
  ResumableUntil?: Date | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface DimensionMapping {
  /**
   * <p></p>
   * @public
   */
  SourceColumn?: string | undefined;

  /**
   * <p>
   *       </p>
   * @public
   */
  DestinationColumn?: string | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface MultiMeasureAttributeMapping {
  /**
   * <p></p>
   * @public
   */
  SourceColumn: string | undefined;

  /**
   * <p></p>
   * @public
   */
  TargetMultiMeasureAttributeName?: string | undefined;

  /**
   * <p></p>
   * @public
   */
  MeasureValueType?: ScalarMeasureValueType | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface MixedMeasureMapping {
  /**
   * <p></p>
   * @public
   */
  MeasureName?: string | undefined;

  /**
   * <p></p>
   * @public
   */
  SourceColumn?: string | undefined;

  /**
   * <p></p>
   * @public
   */
  TargetMeasureName?: string | undefined;

  /**
   * <p></p>
   * @public
   */
  MeasureValueType: MeasureValueType | undefined;

  /**
   * <p></p>
   * @public
   */
  MultiMeasureAttributeMappings?: MultiMeasureAttributeMapping[] | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface MultiMeasureMappings {
  /**
   * <p></p>
   * @public
   */
  TargetMultiMeasureName?: string | undefined;

  /**
   * <p></p>
   * @public
   */
  MultiMeasureAttributeMappings: MultiMeasureAttributeMapping[] | undefined;
}

/**
 * <p>Data model for a batch load task.</p>
 * @public
 */
export interface DataModel {
  /**
   * <p>Source column to be mapped to time.</p>
   * @public
   */
  TimeColumn?: string | undefined;

  /**
   * <p> The granularity of the timestamp unit. It indicates if the time value is in seconds,
   *          milliseconds, nanoseconds, or other supported values. Default is <code>MILLISECONDS</code>.
   *       </p>
   * @public
   */
  TimeUnit?: TimeUnit | undefined;

  /**
   * <p>Source to target mappings for dimensions.</p>
   * @public
   */
  DimensionMappings: DimensionMapping[] | undefined;

  /**
   * <p>Source to target mappings for multi-measure records.</p>
   * @public
   */
  MultiMeasureMappings?: MultiMeasureMappings | undefined;

  /**
   * <p>Source to target mappings for measures.</p>
   * @public
   */
  MixedMeasureMappings?: MixedMeasureMapping[] | undefined;

  /**
   * <p></p>
   * @public
   */
  MeasureNameColumn?: string | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface DataModelS3Configuration {
  /**
   * <p></p>
   * @public
   */
  BucketName?: string | undefined;

  /**
   * <p></p>
   * @public
   */
  ObjectKey?: string | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface DataModelConfiguration {
  /**
   * <p></p>
   * @public
   */
  DataModel?: DataModel | undefined;

  /**
   * <p></p>
   * @public
   */
  DataModelS3Configuration?: DataModelS3Configuration | undefined;
}

/**
 * <p>A delimited data format where the column separator can be a comma and the record
 *          separator is a newline character.</p>
 * @public
 */
export interface CsvConfiguration {
  /**
   * <p>Column separator can be one of comma (','), pipe ('|), semicolon (';'), tab('/t'), or
   *          blank space (' '). </p>
   * @public
   */
  ColumnSeparator?: string | undefined;

  /**
   * <p>Escape character can be one of </p>
   * @public
   */
  EscapeChar?: string | undefined;

  /**
   * <p>Can be single quote (') or double quote (").</p>
   * @public
   */
  QuoteChar?: string | undefined;

  /**
   * <p>Can be blank space (' ').</p>
   * @public
   */
  NullValue?: string | undefined;

  /**
   * <p>Specifies to trim leading and trailing white space.</p>
   * @public
   */
  TrimWhiteSpace?: boolean | undefined;
}

/**
 * <p>
 *       </p>
 * @public
 */
export interface DataSourceS3Configuration {
  /**
   * <p>The bucket name of the customer S3 bucket.</p>
   * @public
   */
  BucketName: string | undefined;

  /**
   * <p>
   *       </p>
   * @public
   */
  ObjectKeyPrefix?: string | undefined;
}

/**
 * <p>Defines configuration details about the data source.</p>
 * @public
 */
export interface DataSourceConfiguration {
  /**
   * <p>Configuration of an S3 location for a file which contains data to load.</p>
   * @public
   */
  DataSourceS3Configuration: DataSourceS3Configuration | undefined;

  /**
   * <p>A delimited data format where the column separator can be a comma and the record
   *          separator is a newline character.</p>
   * @public
   */
  CsvConfiguration?: CsvConfiguration | undefined;

  /**
   * <p>This is currently CSV.</p>
   * @public
   */
  DataFormat: BatchLoadDataFormat | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface ReportS3Configuration {
  /**
   * <p></p>
   * @public
   */
  BucketName: string | undefined;

  /**
   * <p></p>
   * @public
   */
  ObjectKeyPrefix?: string | undefined;

  /**
   * <p></p>
   * @public
   */
  EncryptionOption?: S3EncryptionOption | undefined;

  /**
   * <p></p>
   * @public
   */
  KmsKeyId?: string | undefined;
}

/**
 * <p>Report configuration for a batch load task. This contains details about where error
 *          reports are stored.</p>
 * @public
 */
export interface ReportConfiguration {
  /**
   * <p>Configuration of an S3 location to write error reports and events for a batch
   *          load.</p>
   * @public
   */
  ReportS3Configuration?: ReportS3Configuration | undefined;
}

/**
 * <p>Details about a batch load task.</p>
 * @public
 */
export interface BatchLoadTaskDescription {
  /**
   * <p>The ID of the batch load task.</p>
   * @public
   */
  TaskId?: string | undefined;

  /**
   * <p></p>
   * @public
   */
  ErrorMessage?: string | undefined;

  /**
   * <p>Configuration details about the data source for a batch load task.</p>
   * @public
   */
  DataSourceConfiguration?: DataSourceConfiguration | undefined;

  /**
   * <p></p>
   * @public
   */
  ProgressReport?: BatchLoadProgressReport | undefined;

  /**
   * <p>Report configuration for a batch load task. This contains details about where error
   *          reports are stored.</p>
   * @public
   */
  ReportConfiguration?: ReportConfiguration | undefined;

  /**
   * <p>Data model configuration for a batch load task. This contains details about where a data
   *          model for a batch load task is stored.</p>
   * @public
   */
  DataModelConfiguration?: DataModelConfiguration | undefined;

  /**
   * <p></p>
   * @public
   */
  TargetDatabaseName?: string | undefined;

  /**
   * <p></p>
   * @public
   */
  TargetTableName?: string | undefined;

  /**
   * <p>Status of the batch load task.</p>
   * @public
   */
  TaskStatus?: BatchLoadStatus | undefined;

  /**
   * <p></p>
   * @public
   */
  RecordVersion?: number | undefined;

  /**
   * <p>The time when the Timestream batch load task was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The time when the Timestream batch load task was last updated.</p>
   * @public
   */
  LastUpdatedTime?: Date | undefined;

  /**
   * <p>
   *       </p>
   * @public
   */
  ResumableUntil?: Date | undefined;
}

/**
 * @public
 */
export interface CreateBatchLoadTaskRequest {
  /**
   * <p></p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p></p>
   * @public
   */
  DataModelConfiguration?: DataModelConfiguration | undefined;

  /**
   * <p>Defines configuration details about the data source for a batch load task.</p>
   * @public
   */
  DataSourceConfiguration: DataSourceConfiguration | undefined;

  /**
   * <p>Report configuration for a batch load task. This contains details about where error
   *          reports are stored.</p>
   * @public
   */
  ReportConfiguration: ReportConfiguration | undefined;

  /**
   * <p>Target Timestream database for a batch load task.</p>
   * @public
   */
  TargetDatabaseName: string | undefined;

  /**
   * <p>Target Timestream table for a batch load task.</p>
   * @public
   */
  TargetTableName: string | undefined;

  /**
   * <p></p>
   * @public
   */
  RecordVersion?: number | undefined;
}

/**
 * @public
 */
export interface CreateBatchLoadTaskResponse {
  /**
   * <p>The ID of the batch load task.</p>
   * @public
   */
  TaskId: string | undefined;
}

/**
 * <p> A tag is a label that you assign to a Timestream database and/or table. Each
 *          tag consists of a key and an optional value, both of which you define. With tags, you can
 *          categorize databases and/or tables, for example, by purpose, owner, or environment. </p>
 * @public
 */
export interface Tag {
  /**
   * <p> The key of the tag. Tag keys are case sensitive. </p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p> The value of the tag. Tag values are case-sensitive and can be null. </p>
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface CreateDatabaseRequest {
  /**
   * <p>The name of the Timestream database.</p>
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * <p>The KMS key for the database. If the KMS key is not
   *          specified, the database will be encrypted with a Timestream managed KMS key located in your account. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-managed-cmk">Amazon Web Services managed keys</a>.</p>
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * <p> A list of key-value pairs to label the table. </p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * <p>A top-level container for a table. Databases and tables are the fundamental management
 *          concepts in Amazon Timestream. All tables in a database are encrypted with the
 *          same KMS key.</p>
 * @public
 */
export interface Database {
  /**
   * <p>The Amazon Resource Name that uniquely identifies this database.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The name of the Timestream database.</p>
   * @public
   */
  DatabaseName?: string | undefined;

  /**
   * <p>The total number of tables found within a Timestream database. </p>
   * @public
   */
  TableCount?: number | undefined;

  /**
   * <p>The identifier of the KMS key used to encrypt the data stored in the
   *          database.</p>
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * <p>The time when the database was created, calculated from the Unix epoch time.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p> The last time that this database was updated. </p>
   * @public
   */
  LastUpdatedTime?: Date | undefined;
}

/**
 * @public
 */
export interface CreateDatabaseResponse {
  /**
   * <p>The newly created Timestream database.</p>
   * @public
   */
  Database?: Database | undefined;
}

/**
 * <p>The configuration that specifies an S3 location.</p>
 * @public
 */
export interface S3Configuration {
  /**
   * <p>The bucket name of the customer S3 bucket.</p>
   * @public
   */
  BucketName?: string | undefined;

  /**
   * <p>The object key preview for the customer S3 location.</p>
   * @public
   */
  ObjectKeyPrefix?: string | undefined;

  /**
   * <p>The encryption option for the customer S3 location. Options are S3 server-side
   *          encryption with an S3 managed key or Amazon Web Services managed key.</p>
   * @public
   */
  EncryptionOption?: S3EncryptionOption | undefined;

  /**
   * <p>The KMS key ID for the customer S3 location when encrypting with an
   *             Amazon Web Services managed key.</p>
   * @public
   */
  KmsKeyId?: string | undefined;
}

/**
 * <p>The location to write error reports for records rejected, asynchronously, during
 *          magnetic store writes.</p>
 * @public
 */
export interface MagneticStoreRejectedDataLocation {
  /**
   * <p>Configuration of an S3 location to write error reports for records rejected,
   *          asynchronously, during magnetic store writes.</p>
   * @public
   */
  S3Configuration?: S3Configuration | undefined;
}

/**
 * <p>The set of properties on a table for configuring magnetic store writes.</p>
 * @public
 */
export interface MagneticStoreWriteProperties {
  /**
   * <p>A flag to enable magnetic store writes.</p>
   * @public
   */
  EnableMagneticStoreWrites: boolean | undefined;

  /**
   * <p>The location to write error reports for records rejected asynchronously during magnetic
   *          store writes.</p>
   * @public
   */
  MagneticStoreRejectedDataLocation?: MagneticStoreRejectedDataLocation | undefined;
}

/**
 * <p>Retention properties contain the duration for which your time-series data must be stored
 *          in the magnetic store and the memory store. </p>
 * @public
 */
export interface RetentionProperties {
  /**
   * <p>The duration for which data must be stored in the memory store. </p>
   * @public
   */
  MemoryStoreRetentionPeriodInHours: number | undefined;

  /**
   * <p>The duration for which data must be stored in the magnetic store. </p>
   * @public
   */
  MagneticStoreRetentionPeriodInDays: number | undefined;
}

/**
 * <p> An attribute used in partitioning data in a table. A dimension key partitions data
 *          using the values of the dimension specified by the dimension-name as partition key, while a
 *          measure key partitions data using measure names (values of the 'measure_name' column).
 *       </p>
 * @public
 */
export interface PartitionKey {
  /**
   * <p> The type of the partition key. Options are DIMENSION (dimension key) and MEASURE
   *          (measure key). </p>
   * @public
   */
  Type: PartitionKeyType | undefined;

  /**
   * <p> The name of the attribute used for a dimension key. </p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p> The level of enforcement for the specification of a dimension key in ingested records.
   *          Options are REQUIRED (dimension key must be specified) and OPTIONAL (dimension key does not
   *          have to be specified). </p>
   * @public
   */
  EnforcementInRecord?: PartitionKeyEnforcementLevel | undefined;
}

/**
 * <p> A Schema specifies the expected data model of the table. </p>
 * @public
 */
export interface Schema {
  /**
   * <p>A non-empty list of partition keys defining the attributes used to partition the table
   *          data. The order of the list determines the partition hierarchy. The name and type of each
   *          partition key as well as the partition key order cannot be changed after the table is
   *          created. However, the enforcement level of each partition key can be changed. </p>
   * @public
   */
  CompositePartitionKey?: PartitionKey[] | undefined;
}

/**
 * @public
 */
export interface CreateTableRequest {
  /**
   * <p>The name of the Timestream database.</p>
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * <p>The name of the Timestream table.</p>
   * @public
   */
  TableName: string | undefined;

  /**
   * <p>The duration for which your time-series data must be stored in the memory store and the
   *          magnetic store.</p>
   * @public
   */
  RetentionProperties?: RetentionProperties | undefined;

  /**
   * <p> A list of key-value pairs to label the table. </p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>Contains properties to set on the table when enabling magnetic store writes.</p>
   * @public
   */
  MagneticStoreWriteProperties?: MagneticStoreWriteProperties | undefined;

  /**
   * <p> The schema of the table. </p>
   * @public
   */
  Schema?: Schema | undefined;
}

/**
 * <p>Represents a database table in Timestream. Tables contain one or more related
 *          time series. You can modify the retention duration of the memory store and the magnetic
 *          store for a table. </p>
 * @public
 */
export interface Table {
  /**
   * <p>The Amazon Resource Name that uniquely identifies this table.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The name of the Timestream table.</p>
   * @public
   */
  TableName?: string | undefined;

  /**
   * <p>The name of the Timestream database that contains this table.</p>
   * @public
   */
  DatabaseName?: string | undefined;

  /**
   * <p>The current state of the table:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>DELETING</code> - The table is being deleted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ACTIVE</code> - The table is ready for use.</p>
   *             </li>
   *          </ul>
   * @public
   */
  TableStatus?: TableStatus | undefined;

  /**
   * <p>The retention duration for the memory store and magnetic store.</p>
   * @public
   */
  RetentionProperties?: RetentionProperties | undefined;

  /**
   * <p>The time when the Timestream table was created. </p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The time when the Timestream table was last updated.</p>
   * @public
   */
  LastUpdatedTime?: Date | undefined;

  /**
   * <p>Contains properties to set on the table when enabling magnetic store writes.</p>
   * @public
   */
  MagneticStoreWriteProperties?: MagneticStoreWriteProperties | undefined;

  /**
   * <p> The schema of the table. </p>
   * @public
   */
  Schema?: Schema | undefined;
}

/**
 * @public
 */
export interface CreateTableResponse {
  /**
   * <p>The newly created Timestream table.</p>
   * @public
   */
  Table?: Table | undefined;
}

/**
 * @public
 */
export interface DeleteDatabaseRequest {
  /**
   * <p>The name of the Timestream database to be deleted.</p>
   * @public
   */
  DatabaseName: string | undefined;
}

/**
 * @public
 */
export interface DeleteTableRequest {
  /**
   * <p>The name of the database where the Timestream database is to be deleted.</p>
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * <p>The name of the Timestream table to be deleted.</p>
   * @public
   */
  TableName: string | undefined;
}

/**
 * @public
 */
export interface DescribeBatchLoadTaskRequest {
  /**
   * <p>The ID of the batch load task.</p>
   * @public
   */
  TaskId: string | undefined;
}

/**
 * @public
 */
export interface DescribeBatchLoadTaskResponse {
  /**
   * <p>Description of the batch load task.</p>
   * @public
   */
  BatchLoadTaskDescription: BatchLoadTaskDescription | undefined;
}

/**
 * @public
 */
export interface DescribeDatabaseRequest {
  /**
   * <p>The name of the Timestream database.</p>
   * @public
   */
  DatabaseName: string | undefined;
}

/**
 * @public
 */
export interface DescribeDatabaseResponse {
  /**
   * <p>The name of the Timestream table.</p>
   * @public
   */
  Database?: Database | undefined;
}

/**
 * @public
 */
export interface DescribeEndpointsRequest {}

/**
 * <p>Represents an available endpoint against which to make API calls against, as well as the
 *          TTL for that endpoint.</p>
 * @public
 */
export interface Endpoint {
  /**
   * <p>An endpoint address.</p>
   * @public
   */
  Address: string | undefined;

  /**
   * <p>The TTL for the endpoint, in minutes.</p>
   * @public
   */
  CachePeriodInMinutes: number | undefined;
}

/**
 * @public
 */
export interface DescribeEndpointsResponse {
  /**
   * <p>An <code>Endpoints</code> object is returned when a <code>DescribeEndpoints</code>
   *          request is made.</p>
   * @public
   */
  Endpoints: Endpoint[] | undefined;
}

/**
 * @public
 */
export interface DescribeTableRequest {
  /**
   * <p>The name of the Timestream database.</p>
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * <p>The name of the Timestream table.</p>
   * @public
   */
  TableName: string | undefined;
}

/**
 * @public
 */
export interface DescribeTableResponse {
  /**
   * <p>The Timestream table.</p>
   * @public
   */
  Table?: Table | undefined;
}

/**
 * <p>Represents the metadata attributes of the time series. For example, the name and
 *          Availability Zone of an EC2 instance or the name of the manufacturer of a wind turbine are
 *          dimensions. </p>
 * @public
 */
export interface Dimension {
  /**
   * <p> Dimension represents the metadata attributes of the time series. For example, the name
   *          and Availability Zone of an EC2 instance or the name of the manufacturer of a wind turbine
   *          are dimensions. </p>
   *          <p>For constraints on dimension names, see <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html#limits.naming">Naming
   *             Constraints</a>.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The value of the dimension.</p>
   * @public
   */
  Value: string | undefined;

  /**
   * <p>The data type of the dimension for the time-series data point.</p>
   * @public
   */
  DimensionValueType?: DimensionValueType | undefined;
}

/**
 * @public
 */
export interface ListBatchLoadTasksRequest {
  /**
   * <p>A token to specify where to start paginating. This is the NextToken from a previously
   *          truncated response.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The total number of items to return in the output. If the total number of items
   *          available is more than the value specified, a NextToken is provided in the output. To
   *          resume pagination, provide the NextToken value as argument of a subsequent API
   *          invocation.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Status of the batch load task.</p>
   * @public
   */
  TaskStatus?: BatchLoadStatus | undefined;
}

/**
 * @public
 */
export interface ListBatchLoadTasksResponse {
  /**
   * <p>A token to specify where to start paginating. Provide the next
   *          ListBatchLoadTasksRequest.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>A list of batch load task details.</p>
   * @public
   */
  BatchLoadTasks?: BatchLoadTask[] | undefined;
}

/**
 * @public
 */
export interface ListDatabasesRequest {
  /**
   * <p>The pagination token. To resume pagination, provide the NextToken value as argument of a
   *          subsequent API invocation.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The total number of items to return in the output. If the total number of items
   *          available is more than the value specified, a NextToken is provided in the output. To
   *          resume pagination, provide the NextToken value as argument of a subsequent API
   *          invocation.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListDatabasesResponse {
  /**
   * <p>A list of database names.</p>
   * @public
   */
  Databases?: Database[] | undefined;

  /**
   * <p>The pagination token. This parameter is returned when the response is truncated.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTablesRequest {
  /**
   * <p>The name of the Timestream database.</p>
   * @public
   */
  DatabaseName?: string | undefined;

  /**
   * <p>The pagination token. To resume pagination, provide the NextToken value as argument of a
   *          subsequent API invocation.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The total number of items to return in the output. If the total number of items
   *          available is more than the value specified, a NextToken is provided in the output. To
   *          resume pagination, provide the NextToken value as argument of a subsequent API
   *          invocation.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListTablesResponse {
  /**
   * <p>A list of tables.</p>
   * @public
   */
  Tables?: Table[] | undefined;

  /**
   * <p>A token to specify where to start paginating. This is the NextToken from a previously
   *          truncated response.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p> The Timestream resource with tags to be listed. This value is an Amazon
   *          Resource Name (ARN). </p>
   * @public
   */
  ResourceARN: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p> The tags currently associated with the Timestream resource. </p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * <p> Represents the data attribute of the time series. For example, the CPU utilization of
 *          an EC2 instance or the RPM of a wind turbine are measures. MeasureValue has both name and
 *          value. </p>
 *          <p> MeasureValue is only allowed for type <code>MULTI</code>. Using <code>MULTI</code>
 *          type, you can pass multiple data attributes associated with the same time series in a
 *          single record </p>
 * @public
 */
export interface MeasureValue {
  /**
   * <p> The name of the MeasureValue. </p>
   *          <p> For constraints on MeasureValue names, see <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html#limits.naming"> Naming Constraints</a> in the Amazon Timestream Developer Guide.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p> The value for the MeasureValue. For information, see <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/writes.html#writes.data-types">Data
   *          types</a>.</p>
   * @public
   */
  Value: string | undefined;

  /**
   * <p>Contains the data type of the MeasureValue for the time-series data point.</p>
   * @public
   */
  Type: MeasureValueType | undefined;
}

/**
 * <p>Represents a time-series data point being written into Timestream. Each record
 *          contains an array of dimensions. Dimensions represent the metadata attributes of a
 *          time-series data point, such as the instance name or Availability Zone of an EC2 instance.
 *          A record also contains the measure name, which is the name of the measure being collected
 *          (for example, the CPU utilization of an EC2 instance). Additionally, a record contains the
 *          measure value and the value type, which is the data type of the measure value. Also, the
 *          record contains the timestamp of when the measure was collected and the timestamp unit,
 *          which represents the granularity of the timestamp. </p>
 *          <p> Records have a <code>Version</code> field, which is a 64-bit <code>long</code> that you
 *          can use for updating data points. Writes of a duplicate record with the same dimension,
 *          timestamp, and measure name but different measure value will only succeed if the
 *             <code>Version</code> attribute of the record in the write request is higher than that of
 *          the existing record. Timestream defaults to a <code>Version</code> of
 *             <code>1</code> for records without the <code>Version</code> field. </p>
 * @public
 */
export interface _Record {
  /**
   * <p>Contains the list of dimensions for time-series data points.</p>
   * @public
   */
  Dimensions?: Dimension[] | undefined;

  /**
   * <p>Measure represents the data attribute of the time series. For example, the CPU
   *          utilization of an EC2 instance or the RPM of a wind turbine are measures. </p>
   * @public
   */
  MeasureName?: string | undefined;

  /**
   * <p> Contains the measure value for the time-series data point. </p>
   * @public
   */
  MeasureValue?: string | undefined;

  /**
   * <p> Contains the data type of the measure value for the time-series data point. Default
   *          type is <code>DOUBLE</code>. For more information, see <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/writes.html#writes.data-types">Data
   *          types</a>.</p>
   * @public
   */
  MeasureValueType?: MeasureValueType | undefined;

  /**
   * <p> Contains the time at which the measure value for the data point was collected. The time
   *          value plus the unit provides the time elapsed since the epoch. For example, if the time
   *          value is <code>12345</code> and the unit is <code>ms</code>, then <code>12345 ms</code>
   *          have elapsed since the epoch. </p>
   * @public
   */
  Time?: string | undefined;

  /**
   * <p> The granularity of the timestamp unit. It indicates if the time value is in seconds,
   *          milliseconds, nanoseconds, or other supported values. Default is <code>MILLISECONDS</code>.
   *       </p>
   * @public
   */
  TimeUnit?: TimeUnit | undefined;

  /**
   * <p>64-bit attribute used for record updates. Write requests for duplicate data with a
   *          higher version number will update the existing measure value and version. In cases where
   *          the measure value is the same, <code>Version</code> will still be updated. Default value is
   *             <code>1</code>.</p>
   *          <note>
   *             <p>
   *                <code>Version</code> must be <code>1</code> or greater, or you will receive a
   *                <code>ValidationException</code> error.</p>
   *          </note>
   * @public
   */
  Version?: number | undefined;

  /**
   * <p> Contains the list of MeasureValue for time-series data points. </p>
   *          <p> This is only allowed for type <code>MULTI</code>. For scalar values, use
   *             <code>MeasureValue</code> attribute of the record directly. </p>
   * @public
   */
  MeasureValues?: MeasureValue[] | undefined;
}

/**
 * <p>Information on the records ingested by this request.</p>
 * @public
 */
export interface RecordsIngested {
  /**
   * <p>Total count of successfully ingested records.</p>
   * @public
   */
  Total?: number | undefined;

  /**
   * <p>Count of records ingested into the memory store.</p>
   * @public
   */
  MemoryStore?: number | undefined;

  /**
   * <p>Count of records ingested into the magnetic store.</p>
   * @public
   */
  MagneticStore?: number | undefined;
}

/**
 * <p> Represents records that were not successfully inserted into Timestream due to
 *          data validation issues that must be resolved before reinserting time-series data into the
 *          system. </p>
 * @public
 */
export interface RejectedRecord {
  /**
   * <p> The index of the record in the input request for WriteRecords. Indexes begin with 0.
   *       </p>
   * @public
   */
  RecordIndex?: number | undefined;

  /**
   * <p> The reason why a record was not successfully inserted into Timestream.
   *          Possible causes of failure include: </p>
   *          <ul>
   *             <li>
   *                <p>Records with duplicate data where there are multiple records with the same
   *                dimensions, timestamps, and measure names but: </p>
   *                <ul>
   *                   <li>
   *                      <p>Measure values are different</p>
   *                   </li>
   *                   <li>
   *                      <p>Version is not present in the request, <i>or</i> the value of
   *                      version in the new record is equal to or lower than the existing value</p>
   *                   </li>
   *                </ul>
   *                <p>If Timestream rejects data for this case, the
   *                   <code>ExistingVersion</code> field in the <code>RejectedRecords</code> response
   *                will indicate the current record’s version. To force an update, you can resend the
   *                request with a version for the record set to a value greater than the
   *                   <code>ExistingVersion</code>.</p>
   *             </li>
   *             <li>
   *                <p> Records with timestamps that lie outside the retention duration of the memory
   *                store. </p>
   *                <note>
   *                   <p>When the retention window is updated, you will receive a
   *                      <code>RejectedRecords</code> exception if you immediately try to ingest data
   *                   within the new window. To avoid a <code>RejectedRecords</code> exception, wait
   *                   until the duration of the new window to ingest new data. For further information,
   *                   see <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/best-practices.html#configuration"> Best
   *                      Practices for Configuring Timestream</a> and <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/storage.html">the
   *                      explanation of how storage works in Timestream</a>.</p>
   *                </note>
   *             </li>
   *             <li>
   *                <p> Records with dimensions or measures that exceed the Timestream defined
   *                limits. </p>
   *             </li>
   *          </ul>
   *          <p> For more information, see <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html">Access Management</a> in the
   *             Timestream Developer Guide. </p>
   * @public
   */
  Reason?: string | undefined;

  /**
   * <p>The existing version of the record. This value is populated in scenarios where an
   *          identical record exists with a higher version than the version in the write request.</p>
   * @public
   */
  ExistingVersion?: number | undefined;
}

/**
 * @public
 */
export interface ResumeBatchLoadTaskRequest {
  /**
   * <p>The ID of the batch load task to resume.</p>
   * @public
   */
  TaskId: string | undefined;
}

/**
 * @public
 */
export interface ResumeBatchLoadTaskResponse {}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p> Identifies the Timestream resource to which tags should be added. This value
   *          is an Amazon Resource Name (ARN). </p>
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * <p> The tags to be assigned to the Timestream resource. </p>
   * @public
   */
  Tags: Tag[] | undefined;
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
   * <p> The Timestream resource that the tags will be removed from. This value is an
   *          Amazon Resource Name (ARN). </p>
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * <p> A list of tags keys. Existing tags of the resource whose keys are members of this list
   *          will be removed from the Timestream resource. </p>
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 */
export interface UpdateDatabaseRequest {
  /**
   * <p> The name of the database. </p>
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * <p> The identifier of the new KMS key (<code>KmsKeyId</code>) to be used to
   *          encrypt the data stored in the database. If the <code>KmsKeyId</code> currently registered
   *          with the database is the same as the <code>KmsKeyId</code> in the request, there will not
   *          be any update. </p>
   *          <p>You can specify the <code>KmsKeyId</code> using any of the following:</p>
   *          <ul>
   *             <li>
   *                <p>Key ID: <code>1234abcd-12ab-34cd-56ef-1234567890ab</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Key ARN:
   *                   <code>arn:aws:kms:us-east-1:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Alias name: <code>alias/ExampleAlias</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Alias ARN:
   *                <code>arn:aws:kms:us-east-1:111122223333:alias/ExampleAlias</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  KmsKeyId: string | undefined;
}

/**
 * @public
 */
export interface UpdateDatabaseResponse {
  /**
   * <p>A top-level container for a table. Databases and tables are the fundamental management
   *          concepts in Amazon Timestream. All tables in a database are encrypted with the
   *          same KMS key.</p>
   * @public
   */
  Database?: Database | undefined;
}

/**
 * @public
 */
export interface UpdateTableRequest {
  /**
   * <p>The name of the Timestream database.</p>
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * <p>The name of the Timestream table.</p>
   * @public
   */
  TableName: string | undefined;

  /**
   * <p>The retention duration of the memory store and the magnetic store.</p>
   * @public
   */
  RetentionProperties?: RetentionProperties | undefined;

  /**
   * <p>Contains properties to set on the table when enabling magnetic store writes.</p>
   * @public
   */
  MagneticStoreWriteProperties?: MagneticStoreWriteProperties | undefined;

  /**
   * <p> The schema of the table. </p>
   * @public
   */
  Schema?: Schema | undefined;
}

/**
 * @public
 */
export interface UpdateTableResponse {
  /**
   * <p>The updated Timestream table.</p>
   * @public
   */
  Table?: Table | undefined;
}

/**
 * @public
 */
export interface WriteRecordsRequest {
  /**
   * <p>The name of the Timestream database.</p>
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * <p>The name of the Timestream table.</p>
   * @public
   */
  TableName: string | undefined;

  /**
   * <p>A record that contains the common measure, dimension, time, and version attributes
   *          shared across all the records in the request. The measure and dimension attributes
   *          specified will be merged with the measure and dimension attributes in the records object
   *          when the data is written into Timestream. Dimensions may not overlap, or a
   *             <code>ValidationException</code> will be thrown. In other words, a record must contain
   *          dimensions with unique names. </p>
   * @public
   */
  CommonAttributes?: _Record | undefined;

  /**
   * <p>An array of records that contain the unique measure, dimension, time, and version
   *          attributes for each time-series data point. </p>
   * @public
   */
  Records: _Record[] | undefined;
}

/**
 * @public
 */
export interface WriteRecordsResponse {
  /**
   * <p>Information on the records ingested by this request.</p>
   * @public
   */
  RecordsIngested?: RecordsIngested | undefined;
}
