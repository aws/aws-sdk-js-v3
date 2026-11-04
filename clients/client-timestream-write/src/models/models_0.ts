// smithy-typescript generated code
import type {
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
 * Details about the progress of a batch load task.
 *
 * @public
 */
export interface BatchLoadProgressReport {
  /**
   * @public
   */
  RecordsProcessed?: number | undefined;

  /**
   * @public
   */
  RecordsIngested?: number | undefined;

  /**
   * @public
   */
  ParseFailures?: number | undefined;

  /**
   * @public
   */
  RecordIngestionFailures?: number | undefined;

  /**
   * @public
   */
  FileFailures?: number | undefined;

  /**
   * @public
   */
  BytesMetered?: number | undefined;
}

/**
 * Details about a batch load task.
 *
 * @public
 */
export interface BatchLoadTask {
  /**
   * The ID of the batch load task.
   *
   * @public
   */
  TaskId?: string | undefined;

  /**
   * Status of the batch load task.
   *
   * @public
   */
  TaskStatus?: BatchLoadStatus | undefined;

  /**
   * Database name for the database into which a batch load task loads data.
   *
   * @public
   */
  DatabaseName?: string | undefined;

  /**
   * Table name for the table into which a batch load task loads data.
   *
   * @public
   */
  TableName?: string | undefined;

  /**
   * The time when the Timestream batch load task was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The time when the Timestream batch load task was last updated.
   *
   * @public
   */
  LastUpdatedTime?: Date | undefined;

  /**
   * @public
   */
  ResumableUntil?: Date | undefined;
}

/**
 * @public
 */
export interface DimensionMapping {
  /**
   * @public
   */
  SourceColumn?: string | undefined;

  /**
   * @public
   */
  DestinationColumn?: string | undefined;
}

/**
 * @public
 */
export interface MultiMeasureAttributeMapping {
  /**
   * @public
   */
  SourceColumn: string | undefined;

  /**
   * @public
   */
  TargetMultiMeasureAttributeName?: string | undefined;

  /**
   * @public
   */
  MeasureValueType?: ScalarMeasureValueType | undefined;
}

/**
 * @public
 */
export interface MixedMeasureMapping {
  /**
   * @public
   */
  MeasureName?: string | undefined;

  /**
   * @public
   */
  SourceColumn?: string | undefined;

  /**
   * @public
   */
  TargetMeasureName?: string | undefined;

  /**
   * @public
   */
  MeasureValueType: MeasureValueType | undefined;

  /**
   * @public
   */
  MultiMeasureAttributeMappings?: MultiMeasureAttributeMapping[] | undefined;
}

/**
 * @public
 */
export interface MultiMeasureMappings {
  /**
   * @public
   */
  TargetMultiMeasureName?: string | undefined;

  /**
   * @public
   */
  MultiMeasureAttributeMappings: MultiMeasureAttributeMapping[] | undefined;
}

/**
 * Data model for a batch load task.
 *
 * @public
 */
export interface DataModel {
  /**
   * Source column to be mapped to time.
   *
   * @public
   */
  TimeColumn?: string | undefined;

  /**
   * The granularity of the timestamp unit. It indicates if the time value is in seconds, milliseconds, nanoseconds, or other supported values. Default is `MILLISECONDS`.
   *
   * @public
   */
  TimeUnit?: TimeUnit | undefined;

  /**
   * Source to target mappings for dimensions.
   *
   * @public
   */
  DimensionMappings: DimensionMapping[] | undefined;

  /**
   * Source to target mappings for multi-measure records.
   *
   * @public
   */
  MultiMeasureMappings?: MultiMeasureMappings | undefined;

  /**
   * Source to target mappings for measures.
   *
   * @public
   */
  MixedMeasureMappings?: MixedMeasureMapping[] | undefined;

  /**
   * @public
   */
  MeasureNameColumn?: string | undefined;
}

/**
 * @public
 */
export interface DataModelS3Configuration {
  /**
   * @public
   */
  BucketName?: string | undefined;

  /**
   * @public
   */
  ObjectKey?: string | undefined;
}

/**
 * @public
 */
export interface DataModelConfiguration {
  /**
   * @public
   */
  DataModel?: DataModel | undefined;

  /**
   * @public
   */
  DataModelS3Configuration?: DataModelS3Configuration | undefined;
}

/**
 * A delimited data format where the column separator can be a comma and the record separator is a newline character.
 *
 * @public
 */
export interface CsvConfiguration {
  /**
   * Column separator can be one of comma (','), pipe ('|), semicolon (';'), tab('/t'), or blank space (' ').
   *
   * @public
   */
  ColumnSeparator?: string | undefined;

  /**
   * Escape character can be one of
   *
   * @public
   */
  EscapeChar?: string | undefined;

  /**
   * Can be single quote (') or double quote (").
   *
   * @public
   */
  QuoteChar?: string | undefined;

  /**
   * Can be blank space (' ').
   *
   * @public
   */
  NullValue?: string | undefined;

  /**
   * Specifies to trim leading and trailing white space.
   *
   * @public
   */
  TrimWhiteSpace?: boolean | undefined;
}

/**
 * @public
 */
export interface DataSourceS3Configuration {
  /**
   * The bucket name of the customer S3 bucket.
   *
   * @public
   */
  BucketName: string | undefined;

  /**
   * @public
   */
  ObjectKeyPrefix?: string | undefined;
}

/**
 * Defines configuration details about the data source.
 *
 * @public
 */
export interface DataSourceConfiguration {
  /**
   * Configuration of an S3 location for a file which contains data to load.
   *
   * @public
   */
  DataSourceS3Configuration: DataSourceS3Configuration | undefined;

  /**
   * A delimited data format where the column separator can be a comma and the record separator is a newline character.
   *
   * @public
   */
  CsvConfiguration?: CsvConfiguration | undefined;

  /**
   * This is currently CSV.
   *
   * @public
   */
  DataFormat: BatchLoadDataFormat | undefined;
}

/**
 * @public
 */
export interface ReportS3Configuration {
  /**
   * @public
   */
  BucketName: string | undefined;

  /**
   * @public
   */
  ObjectKeyPrefix?: string | undefined;

  /**
   * @public
   */
  EncryptionOption?: S3EncryptionOption | undefined;

  /**
   * @public
   */
  KmsKeyId?: string | undefined;
}

/**
 * Report configuration for a batch load task. This contains details about where error reports are stored.
 *
 * @public
 */
export interface ReportConfiguration {
  /**
   * Configuration of an S3 location to write error reports and events for a batch load.
   *
   * @public
   */
  ReportS3Configuration?: ReportS3Configuration | undefined;
}

/**
 * Details about a batch load task.
 *
 * @public
 */
export interface BatchLoadTaskDescription {
  /**
   * The ID of the batch load task.
   *
   * @public
   */
  TaskId?: string | undefined;

  /**
   * @public
   */
  ErrorMessage?: string | undefined;

  /**
   * Configuration details about the data source for a batch load task.
   *
   * @public
   */
  DataSourceConfiguration?: DataSourceConfiguration | undefined;

  /**
   * @public
   */
  ProgressReport?: BatchLoadProgressReport | undefined;

  /**
   * Report configuration for a batch load task. This contains details about where error reports are stored.
   *
   * @public
   */
  ReportConfiguration?: ReportConfiguration | undefined;

  /**
   * Data model configuration for a batch load task. This contains details about where a data model for a batch load task is stored.
   *
   * @public
   */
  DataModelConfiguration?: DataModelConfiguration | undefined;

  /**
   * @public
   */
  TargetDatabaseName?: string | undefined;

  /**
   * @public
   */
  TargetTableName?: string | undefined;

  /**
   * Status of the batch load task.
   *
   * @public
   */
  TaskStatus?: BatchLoadStatus | undefined;

  /**
   * @public
   */
  RecordVersion?: number | undefined;

  /**
   * The time when the Timestream batch load task was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The time when the Timestream batch load task was last updated.
   *
   * @public
   */
  LastUpdatedTime?: Date | undefined;

  /**
   * @public
   */
  ResumableUntil?: Date | undefined;
}

/**
 * @public
 */
export interface CreateBatchLoadTaskRequest {
  /**
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * @public
   */
  DataModelConfiguration?: DataModelConfiguration | undefined;

  /**
   * Defines configuration details about the data source for a batch load task.
   *
   * @public
   */
  DataSourceConfiguration: DataSourceConfiguration | undefined;

  /**
   * Report configuration for a batch load task. This contains details about where error reports are stored.
   *
   * @public
   */
  ReportConfiguration: ReportConfiguration | undefined;

  /**
   * Target Timestream database for a batch load task.
   *
   * @public
   */
  TargetDatabaseName: string | undefined;

  /**
   * Target Timestream table for a batch load task.
   *
   * @public
   */
  TargetTableName: string | undefined;

  /**
   * @public
   */
  RecordVersion?: number | undefined;
}

/**
 * @public
 */
export interface CreateBatchLoadTaskResponse {
  /**
   * The ID of the batch load task.
   *
   * @public
   */
  TaskId: string | undefined;
}

/**
 * A tag is a label that you assign to a Timestream database and/or table. Each tag consists of a key and an optional value, both of which you define. With tags, you can categorize databases and/or tables, for example, by purpose, owner, or environment.
 *
 * @public
 */
export interface Tag {
  /**
   * The key of the tag. Tag keys are case sensitive.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * The value of the tag. Tag values are case-sensitive and can be null.
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface CreateDatabaseRequest {
  /**
   * The name of the Timestream database.
   *
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * The KMS key for the database. If the KMS key is not specified, the database will be encrypted with a Timestream managed KMS key located in your account. For more information, see [Amazon Web Services managed keys](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-managed-cmk).
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * A list of key-value pairs to label the table.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * A top-level container for a table. Databases and tables are the fundamental management concepts in Amazon Timestream. All tables in a database are encrypted with the same KMS key.
 *
 * @public
 */
export interface Database {
  /**
   * The Amazon Resource Name that uniquely identifies this database.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The name of the Timestream database.
   *
   * @public
   */
  DatabaseName?: string | undefined;

  /**
   * The total number of tables found within a Timestream database.
   *
   * @public
   */
  TableCount?: number | undefined;

  /**
   * The identifier of the KMS key used to encrypt the data stored in the database.
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * The time when the database was created, calculated from the Unix epoch time.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The last time that this database was updated.
   *
   * @public
   */
  LastUpdatedTime?: Date | undefined;
}

/**
 * @public
 */
export interface CreateDatabaseResponse {
  /**
   * The newly created Timestream database.
   *
   * @public
   */
  Database?: Database | undefined;
}

/**
 * The configuration that specifies an S3 location.
 *
 * @public
 */
export interface S3Configuration {
  /**
   * The bucket name of the customer S3 bucket.
   *
   * @public
   */
  BucketName?: string | undefined;

  /**
   * The object key preview for the customer S3 location.
   *
   * @public
   */
  ObjectKeyPrefix?: string | undefined;

  /**
   * The encryption option for the customer S3 location. Options are S3 server-side encryption with an S3 managed key or Amazon Web Services managed key.
   *
   * @public
   */
  EncryptionOption?: S3EncryptionOption | undefined;

  /**
   * The KMS key ID for the customer S3 location when encrypting with an Amazon Web Services managed key.
   *
   * @public
   */
  KmsKeyId?: string | undefined;
}

/**
 * The location to write error reports for records rejected, asynchronously, during magnetic store writes.
 *
 * @public
 */
export interface MagneticStoreRejectedDataLocation {
  /**
   * Configuration of an S3 location to write error reports for records rejected, asynchronously, during magnetic store writes.
   *
   * @public
   */
  S3Configuration?: S3Configuration | undefined;
}

/**
 * The set of properties on a table for configuring magnetic store writes.
 *
 * @public
 */
export interface MagneticStoreWriteProperties {
  /**
   * A flag to enable magnetic store writes.
   *
   * @public
   */
  EnableMagneticStoreWrites: boolean | undefined;

  /**
   * The location to write error reports for records rejected asynchronously during magnetic store writes.
   *
   * @public
   */
  MagneticStoreRejectedDataLocation?: MagneticStoreRejectedDataLocation | undefined;
}

/**
 * Retention properties contain the duration for which your time-series data must be stored in the magnetic store and the memory store.
 *
 * @public
 */
export interface RetentionProperties {
  /**
   * The duration for which data must be stored in the memory store.
   *
   * @public
   */
  MemoryStoreRetentionPeriodInHours: number | undefined;

  /**
   * The duration for which data must be stored in the magnetic store.
   *
   * @public
   */
  MagneticStoreRetentionPeriodInDays: number | undefined;
}

/**
 * An attribute used in partitioning data in a table. A dimension key partitions data using the values of the dimension specified by the dimension-name as partition key, while a measure key partitions data using measure names (values of the 'measure_name' column).
 *
 * @public
 */
export interface PartitionKey {
  /**
   * The type of the partition key. Options are DIMENSION (dimension key) and MEASURE (measure key).
   *
   * @public
   */
  Type: PartitionKeyType | undefined;

  /**
   * The name of the attribute used for a dimension key.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The level of enforcement for the specification of a dimension key in ingested records. Options are REQUIRED (dimension key must be specified) and OPTIONAL (dimension key does not have to be specified).
   *
   * @public
   */
  EnforcementInRecord?: PartitionKeyEnforcementLevel | undefined;
}

/**
 * A Schema specifies the expected data model of the table.
 *
 * @public
 */
export interface Schema {
  /**
   * A non-empty list of partition keys defining the attributes used to partition the table data. The order of the list determines the partition hierarchy. The name and type of each partition key as well as the partition key order cannot be changed after the table is created. However, the enforcement level of each partition key can be changed.
   *
   * @public
   */
  CompositePartitionKey?: PartitionKey[] | undefined;
}

/**
 * @public
 */
export interface CreateTableRequest {
  /**
   * The name of the Timestream database.
   *
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * The name of the Timestream table.
   *
   * @public
   */
  TableName: string | undefined;

  /**
   * The duration for which your time-series data must be stored in the memory store and the magnetic store.
   *
   * @public
   */
  RetentionProperties?: RetentionProperties | undefined;

  /**
   * A list of key-value pairs to label the table.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * Contains properties to set on the table when enabling magnetic store writes.
   *
   * @public
   */
  MagneticStoreWriteProperties?: MagneticStoreWriteProperties | undefined;

  /**
   * The schema of the table.
   *
   * @public
   */
  Schema?: Schema | undefined;
}

/**
 * Represents a database table in Timestream. Tables contain one or more related time series. You can modify the retention duration of the memory store and the magnetic store for a table.
 *
 * @public
 */
export interface Table {
  /**
   * The Amazon Resource Name that uniquely identifies this table.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The name of the Timestream table.
   *
   * @public
   */
  TableName?: string | undefined;

  /**
   * The name of the Timestream database that contains this table.
   *
   * @public
   */
  DatabaseName?: string | undefined;

  /**
   * The current state of the table:
   *
   * - `DELETING` - The table is being deleted.
   * - `ACTIVE` - The table is ready for use.
   *
   * @public
   */
  TableStatus?: TableStatus | undefined;

  /**
   * The retention duration for the memory store and magnetic store.
   *
   * @public
   */
  RetentionProperties?: RetentionProperties | undefined;

  /**
   * The time when the Timestream table was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The time when the Timestream table was last updated.
   *
   * @public
   */
  LastUpdatedTime?: Date | undefined;

  /**
   * Contains properties to set on the table when enabling magnetic store writes.
   *
   * @public
   */
  MagneticStoreWriteProperties?: MagneticStoreWriteProperties | undefined;

  /**
   * The schema of the table.
   *
   * @public
   */
  Schema?: Schema | undefined;
}

/**
 * @public
 */
export interface CreateTableResponse {
  /**
   * The newly created Timestream table.
   *
   * @public
   */
  Table?: Table | undefined;
}

/**
 * @public
 */
export interface DeleteDatabaseRequest {
  /**
   * The name of the Timestream database to be deleted.
   *
   * @public
   */
  DatabaseName: string | undefined;
}

/**
 * @public
 */
export interface DeleteTableRequest {
  /**
   * The name of the database where the Timestream database is to be deleted.
   *
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * The name of the Timestream table to be deleted.
   *
   * @public
   */
  TableName: string | undefined;
}

/**
 * @public
 */
export interface DescribeBatchLoadTaskRequest {
  /**
   * The ID of the batch load task.
   *
   * @public
   */
  TaskId: string | undefined;
}

/**
 * @public
 */
export interface DescribeBatchLoadTaskResponse {
  /**
   * Description of the batch load task.
   *
   * @public
   */
  BatchLoadTaskDescription: BatchLoadTaskDescription | undefined;
}

/**
 * @public
 */
export interface DescribeDatabaseRequest {
  /**
   * The name of the Timestream database.
   *
   * @public
   */
  DatabaseName: string | undefined;
}

/**
 * @public
 */
export interface DescribeDatabaseResponse {
  /**
   * The name of the Timestream table.
   *
   * @public
   */
  Database?: Database | undefined;
}

/**
 * @public
 */
export interface DescribeEndpointsRequest {}

/**
 * Represents an available endpoint against which to make API calls against, as well as the TTL for that endpoint.
 *
 * @public
 */
export interface Endpoint {
  /**
   * An endpoint address.
   *
   * @public
   */
  Address: string | undefined;

  /**
   * The TTL for the endpoint, in minutes.
   *
   * @public
   */
  CachePeriodInMinutes: number | undefined;
}

/**
 * @public
 */
export interface DescribeEndpointsResponse {
  /**
   * An `Endpoints` object is returned when a `DescribeEndpoints` request is made.
   *
   * @public
   */
  Endpoints: Endpoint[] | undefined;
}

/**
 * @public
 */
export interface DescribeTableRequest {
  /**
   * The name of the Timestream database.
   *
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * The name of the Timestream table.
   *
   * @public
   */
  TableName: string | undefined;
}

/**
 * @public
 */
export interface DescribeTableResponse {
  /**
   * The Timestream table.
   *
   * @public
   */
  Table?: Table | undefined;
}

/**
 * Represents the metadata attributes of the time series. For example, the name and Availability Zone of an EC2 instance or the name of the manufacturer of a wind turbine are dimensions.
 *
 * @public
 */
export interface Dimension {
  /**
   * Dimension represents the metadata attributes of the time series. For example, the name and Availability Zone of an EC2 instance or the name of the manufacturer of a wind turbine are dimensions.
   *
   * For constraints on dimension names, see [Naming Constraints](https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html#limits.naming).
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The value of the dimension.
   *
   * @public
   */
  Value: string | undefined;

  /**
   * The data type of the dimension for the time-series data point.
   *
   * @public
   */
  DimensionValueType?: DimensionValueType | undefined;
}

/**
 * @public
 */
export interface ListBatchLoadTasksRequest {
  /**
   * A token to specify where to start paginating. This is the NextToken from a previously truncated response.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The total number of items to return in the output. If the total number of items available is more than the value specified, a NextToken is provided in the output. To resume pagination, provide the NextToken value as argument of a subsequent API invocation.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Status of the batch load task.
   *
   * @public
   */
  TaskStatus?: BatchLoadStatus | undefined;
}

/**
 * @public
 */
export interface ListBatchLoadTasksResponse {
  /**
   * A token to specify where to start paginating. Provide the next ListBatchLoadTasksRequest.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * A list of batch load task details.
   *
   * @public
   */
  BatchLoadTasks?: BatchLoadTask[] | undefined;
}

/**
 * @public
 */
export interface ListDatabasesRequest {
  /**
   * The pagination token. To resume pagination, provide the NextToken value as argument of a subsequent API invocation.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The total number of items to return in the output. If the total number of items available is more than the value specified, a NextToken is provided in the output. To resume pagination, provide the NextToken value as argument of a subsequent API invocation.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListDatabasesResponse {
  /**
   * A list of database names.
   *
   * @public
   */
  Databases?: Database[] | undefined;

  /**
   * The pagination token. This parameter is returned when the response is truncated.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTablesRequest {
  /**
   * The name of the Timestream database.
   *
   * @public
   */
  DatabaseName?: string | undefined;

  /**
   * The pagination token. To resume pagination, provide the NextToken value as argument of a subsequent API invocation.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The total number of items to return in the output. If the total number of items available is more than the value specified, a NextToken is provided in the output. To resume pagination, provide the NextToken value as argument of a subsequent API invocation.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListTablesResponse {
  /**
   * A list of tables.
   *
   * @public
   */
  Tables?: Table[] | undefined;

  /**
   * A token to specify where to start paginating. This is the NextToken from a previously truncated response.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The Timestream resource with tags to be listed. This value is an Amazon Resource Name (ARN).
   *
   * @public
   */
  ResourceARN: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * The tags currently associated with the Timestream resource.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * Represents the data attribute of the time series. For example, the CPU utilization of an EC2 instance or the RPM of a wind turbine are measures. MeasureValue has both name and value.
 *
 * MeasureValue is only allowed for type `MULTI`. Using `MULTI` type, you can pass multiple data attributes associated with the same time series in a single record
 *
 * @public
 */
export interface MeasureValue {
  /**
   * The name of the MeasureValue.
   *
   * For constraints on MeasureValue names, see [Naming Constraints](https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html#limits.naming) in the Amazon Timestream Developer Guide.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The value for the MeasureValue. For information, see [Data types](https://docs.aws.amazon.com/timestream/latest/developerguide/writes.html#writes.data-types).
   *
   * @public
   */
  Value: string | undefined;

  /**
   * Contains the data type of the MeasureValue for the time-series data point.
   *
   * @public
   */
  Type: MeasureValueType | undefined;
}

/**
 * Represents a time-series data point being written into Timestream. Each record contains an array of dimensions. Dimensions represent the metadata attributes of a time-series data point, such as the instance name or Availability Zone of an EC2 instance. A record also contains the measure name, which is the name of the measure being collected (for example, the CPU utilization of an EC2 instance). Additionally, a record contains the measure value and the value type, which is the data type of the measure value. Also, the record contains the timestamp of when the measure was collected and the timestamp unit, which represents the granularity of the timestamp.
 *
 * Records have a `Version` field, which is a 64-bit `long` that you can use for updating data points. Writes of a duplicate record with the same dimension, timestamp, and measure name but different measure value will only succeed if the `Version` attribute of the record in the write request is higher than that of the existing record. Timestream defaults to a `Version` of `1` for records without the `Version` field.
 *
 * @public
 */
export interface _Record {
  /**
   * Contains the list of dimensions for time-series data points.
   *
   * @public
   */
  Dimensions?: Dimension[] | undefined;

  /**
   * Measure represents the data attribute of the time series. For example, the CPU utilization of an EC2 instance or the RPM of a wind turbine are measures.
   *
   * @public
   */
  MeasureName?: string | undefined;

  /**
   * Contains the measure value for the time-series data point.
   *
   * @public
   */
  MeasureValue?: string | undefined;

  /**
   * Contains the data type of the measure value for the time-series data point. Default type is `DOUBLE`. For more information, see [Data types](https://docs.aws.amazon.com/timestream/latest/developerguide/writes.html#writes.data-types).
   *
   * @public
   */
  MeasureValueType?: MeasureValueType | undefined;

  /**
   * Contains the time at which the measure value for the data point was collected. The time value plus the unit provides the time elapsed since the epoch. For example, if the time value is `12345` and the unit is `ms`, then `12345 ms` have elapsed since the epoch.
   *
   * @public
   */
  Time?: string | undefined;

  /**
   * The granularity of the timestamp unit. It indicates if the time value is in seconds, milliseconds, nanoseconds, or other supported values. Default is `MILLISECONDS`.
   *
   * @public
   */
  TimeUnit?: TimeUnit | undefined;

  /**
   * 64-bit attribute used for record updates. Write requests for duplicate data with a higher version number will update the existing measure value and version. In cases where the measure value is the same, `Version` will still be updated. Default value is `1`.
   *
   * > **Note:** `Version` must be `1` or greater, or you will receive a `ValidationException` error.
   *
   * @public
   */
  Version?: number | undefined;

  /**
   * Contains the list of MeasureValue for time-series data points.
   *
   * This is only allowed for type `MULTI`. For scalar values, use `MeasureValue` attribute of the record directly.
   *
   * @public
   */
  MeasureValues?: MeasureValue[] | undefined;
}

/**
 * Information on the records ingested by this request.
 *
 * @public
 */
export interface RecordsIngested {
  /**
   * Total count of successfully ingested records.
   *
   * @public
   */
  Total?: number | undefined;

  /**
   * Count of records ingested into the memory store.
   *
   * @public
   */
  MemoryStore?: number | undefined;

  /**
   * Count of records ingested into the magnetic store.
   *
   * @public
   */
  MagneticStore?: number | undefined;
}

/**
 * Represents records that were not successfully inserted into Timestream due to data validation issues that must be resolved before reinserting time-series data into the system.
 *
 * @public
 */
export interface RejectedRecord {
  /**
   * The index of the record in the input request for WriteRecords. Indexes begin with 0.
   *
   * @public
   */
  RecordIndex?: number | undefined;

  /**
   * The reason why a record was not successfully inserted into Timestream. Possible causes of failure include:
   *
   * - Records with duplicate data where there are multiple records with the same dimensions, timestamps, and measure names but:
   *
   *   - Measure values are different
   *   - Version is not present in the request, *or* the value of version in the new record is equal to or lower than the existing value
   *
   *   If Timestream rejects data for this case, the `ExistingVersion` field in the `RejectedRecords` response will indicate the current record’s version. To force an update, you can resend the request with a version for the record set to a value greater than the `ExistingVersion`.
   * - Records with timestamps that lie outside the retention duration of the memory store.
   *
   *   > **Note:** When the retention window is updated, you will receive a `RejectedRecords` exception if you immediately try to ingest data within the new window. To avoid a `RejectedRecords` exception, wait until the duration of the new window to ingest new data. For further information, see [Best Practices for Configuring Timestream](https://docs.aws.amazon.com/timestream/latest/developerguide/best-practices.html#configuration) and [the explanation of how storage works in Timestream](https://docs.aws.amazon.com/timestream/latest/developerguide/storage.html).
   * - Records with dimensions or measures that exceed the Timestream defined limits.
   *
   * For more information, see [Access Management](https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html) in the Timestream Developer Guide.
   *
   * @public
   */
  Reason?: string | undefined;

  /**
   * The existing version of the record. This value is populated in scenarios where an identical record exists with a higher version than the version in the write request.
   *
   * @public
   */
  ExistingVersion?: number | undefined;
}

/**
 * @public
 */
export interface ResumeBatchLoadTaskRequest {
  /**
   * The ID of the batch load task to resume.
   *
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
   * Identifies the Timestream resource to which tags should be added. This value is an Amazon Resource Name (ARN).
   *
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * The tags to be assigned to the Timestream resource.
   *
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
   * The Timestream resource that the tags will be removed from. This value is an Amazon Resource Name (ARN).
   *
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * A list of tags keys. Existing tags of the resource whose keys are members of this list will be removed from the Timestream resource.
   *
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
   * The name of the database.
   *
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * The identifier of the new KMS key (`KmsKeyId`) to be used to encrypt the data stored in the database. If the `KmsKeyId` currently registered with the database is the same as the `KmsKeyId` in the request, there will not be any update.
   *
   * You can specify the `KmsKeyId` using any of the following:
   *
   * - Key ID: `1234abcd-12ab-34cd-56ef-1234567890ab`
   * - Key ARN: `arn:aws:kms:us-east-1:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab`
   * - Alias name: `alias/ExampleAlias`
   * - Alias ARN: `arn:aws:kms:us-east-1:111122223333:alias/ExampleAlias`
   *
   * @public
   */
  KmsKeyId: string | undefined;
}

/**
 * @public
 */
export interface UpdateDatabaseResponse {
  /**
   * A top-level container for a table. Databases and tables are the fundamental management concepts in Amazon Timestream. All tables in a database are encrypted with the same KMS key.
   *
   * @public
   */
  Database?: Database | undefined;
}

/**
 * @public
 */
export interface UpdateTableRequest {
  /**
   * The name of the Timestream database.
   *
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * The name of the Timestream table.
   *
   * @public
   */
  TableName: string | undefined;

  /**
   * The retention duration of the memory store and the magnetic store.
   *
   * @public
   */
  RetentionProperties?: RetentionProperties | undefined;

  /**
   * Contains properties to set on the table when enabling magnetic store writes.
   *
   * @public
   */
  MagneticStoreWriteProperties?: MagneticStoreWriteProperties | undefined;

  /**
   * The schema of the table.
   *
   * @public
   */
  Schema?: Schema | undefined;
}

/**
 * @public
 */
export interface UpdateTableResponse {
  /**
   * The updated Timestream table.
   *
   * @public
   */
  Table?: Table | undefined;
}

/**
 * @public
 */
export interface WriteRecordsRequest {
  /**
   * The name of the Timestream database.
   *
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * The name of the Timestream table.
   *
   * @public
   */
  TableName: string | undefined;

  /**
   * A record that contains the common measure, dimension, time, and version attributes shared across all the records in the request. The measure and dimension attributes specified will be merged with the measure and dimension attributes in the records object when the data is written into Timestream. Dimensions may not overlap, or a `ValidationException` will be thrown. In other words, a record must contain dimensions with unique names.
   *
   * @public
   */
  CommonAttributes?: _Record | undefined;

  /**
   * An array of records that contain the unique measure, dimension, time, and version attributes for each time-series data point.
   *
   * @public
   */
  Records: _Record[] | undefined;
}

/**
 * @public
 */
export interface WriteRecordsResponse {
  /**
   * Information on the records ingested by this request.
   *
   * @public
   */
  RecordsIngested?: RecordsIngested | undefined;
}
