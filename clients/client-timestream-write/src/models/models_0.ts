// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { TimestreamWriteServiceException as __BaseException } from "./TimestreamWriteServiceException";

/**
 * @public
 * <p>You are not authorized to perform this action.</p>
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
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
 * @enum
 */
export const BatchLoadDataFormat = {
  CSV: "CSV",
} as const;

/**
 * @public
 */
export type BatchLoadDataFormat = (typeof BatchLoadDataFormat)[keyof typeof BatchLoadDataFormat];

/**
 * @public
 * <p>Details about the progress of a batch load task.</p>
 */
export interface BatchLoadProgressReport {
  /**
   * @public
   * <p></p>
   */
  RecordsProcessed?: number;

  /**
   * @public
   * <p></p>
   */
  RecordsIngested?: number;

  /**
   * @public
   * <p></p>
   */
  ParseFailures?: number;

  /**
   * @public
   * <p></p>
   */
  RecordIngestionFailures?: number;

  /**
   * @public
   * <p></p>
   */
  FileFailures?: number;

  /**
   * @public
   * <p></p>
   */
  BytesMetered?: number;
}

/**
 * @public
 * @enum
 */
export const BatchLoadStatus = {
  CREATED: "CREATED",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  PENDING_RESUME: "PENDING_RESUME",
  PROGRESS_STOPPED: "PROGRESS_STOPPED",
  SUCCEEDED: "SUCCEEDED",
} as const;

/**
 * @public
 */
export type BatchLoadStatus = (typeof BatchLoadStatus)[keyof typeof BatchLoadStatus];

/**
 * @public
 * <p>Details about a batch load task.</p>
 */
export interface BatchLoadTask {
  /**
   * @public
   * <p>The ID of the batch load task.</p>
   */
  TaskId?: string;

  /**
   * @public
   * <p>Status of the batch load task.</p>
   */
  TaskStatus?: BatchLoadStatus;

  /**
   * @public
   * <p>Database name for the database into which a batch load task loads data.</p>
   */
  DatabaseName?: string;

  /**
   * @public
   * <p>Table name for the table into which a batch load task loads data.</p>
   */
  TableName?: string;

  /**
   * @public
   * <p>The time when the Timestream batch load task was created.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>The time when the Timestream batch load task was last updated.</p>
   */
  LastUpdatedTime?: Date;

  /**
   * @public
   * <p>
   *       </p>
   */
  ResumableUntil?: Date;
}

/**
 * @public
 * <p></p>
 */
export interface DimensionMapping {
  /**
   * @public
   * <p></p>
   */
  SourceColumn?: string;

  /**
   * @public
   * <p>
   *       </p>
   */
  DestinationColumn?: string;
}

/**
 * @public
 * @enum
 */
export const MeasureValueType = {
  BIGINT: "BIGINT",
  BOOLEAN: "BOOLEAN",
  DOUBLE: "DOUBLE",
  MULTI: "MULTI",
  TIMESTAMP: "TIMESTAMP",
  VARCHAR: "VARCHAR",
} as const;

/**
 * @public
 */
export type MeasureValueType = (typeof MeasureValueType)[keyof typeof MeasureValueType];

/**
 * @public
 * @enum
 */
export const ScalarMeasureValueType = {
  BIGINT: "BIGINT",
  BOOLEAN: "BOOLEAN",
  DOUBLE: "DOUBLE",
  TIMESTAMP: "TIMESTAMP",
  VARCHAR: "VARCHAR",
} as const;

/**
 * @public
 */
export type ScalarMeasureValueType = (typeof ScalarMeasureValueType)[keyof typeof ScalarMeasureValueType];

/**
 * @public
 * <p></p>
 */
export interface MultiMeasureAttributeMapping {
  /**
   * @public
   * <p></p>
   */
  SourceColumn: string | undefined;

  /**
   * @public
   * <p></p>
   */
  TargetMultiMeasureAttributeName?: string;

  /**
   * @public
   * <p></p>
   */
  MeasureValueType?: ScalarMeasureValueType;
}

/**
 * @public
 * <p></p>
 */
export interface MixedMeasureMapping {
  /**
   * @public
   * <p></p>
   */
  MeasureName?: string;

  /**
   * @public
   * <p></p>
   */
  SourceColumn?: string;

  /**
   * @public
   * <p></p>
   */
  TargetMeasureName?: string;

  /**
   * @public
   * <p></p>
   */
  MeasureValueType: MeasureValueType | undefined;

  /**
   * @public
   * <p></p>
   */
  MultiMeasureAttributeMappings?: MultiMeasureAttributeMapping[];
}

/**
 * @public
 * <p></p>
 */
export interface MultiMeasureMappings {
  /**
   * @public
   * <p></p>
   */
  TargetMultiMeasureName?: string;

  /**
   * @public
   * <p></p>
   */
  MultiMeasureAttributeMappings: MultiMeasureAttributeMapping[] | undefined;
}

/**
 * @public
 * @enum
 */
export const TimeUnit = {
  MICROSECONDS: "MICROSECONDS",
  MILLISECONDS: "MILLISECONDS",
  NANOSECONDS: "NANOSECONDS",
  SECONDS: "SECONDS",
} as const;

/**
 * @public
 */
export type TimeUnit = (typeof TimeUnit)[keyof typeof TimeUnit];

/**
 * @public
 * <p>Data model for a batch load task.</p>
 */
export interface DataModel {
  /**
   * @public
   * <p>Source column to be mapped to time.</p>
   */
  TimeColumn?: string;

  /**
   * @public
   * <p> The granularity of the timestamp unit. It indicates if the time value is in seconds,
   *          milliseconds, nanoseconds, or other supported values. Default is <code>MILLISECONDS</code>.
   *       </p>
   */
  TimeUnit?: TimeUnit;

  /**
   * @public
   * <p>Source to target mappings for dimensions.</p>
   */
  DimensionMappings: DimensionMapping[] | undefined;

  /**
   * @public
   * <p>Source to target mappings for multi-measure records.</p>
   */
  MultiMeasureMappings?: MultiMeasureMappings;

  /**
   * @public
   * <p>Source to target mappings for measures.</p>
   */
  MixedMeasureMappings?: MixedMeasureMapping[];

  /**
   * @public
   * <p></p>
   */
  MeasureNameColumn?: string;
}

/**
 * @public
 * <p></p>
 */
export interface DataModelS3Configuration {
  /**
   * @public
   * <p></p>
   */
  BucketName?: string;

  /**
   * @public
   * <p></p>
   */
  ObjectKey?: string;
}

/**
 * @public
 * <p></p>
 */
export interface DataModelConfiguration {
  /**
   * @public
   * <p></p>
   */
  DataModel?: DataModel;

  /**
   * @public
   * <p></p>
   */
  DataModelS3Configuration?: DataModelS3Configuration;
}

/**
 * @public
 * <p>A delimited data format where the column separator can be a comma and the record
 *          separator is a newline character.</p>
 */
export interface CsvConfiguration {
  /**
   * @public
   * <p>Column separator can be one of comma (','), pipe ('|), semicolon (';'), tab('/t'), or
   *          blank space (' '). </p>
   */
  ColumnSeparator?: string;

  /**
   * @public
   * <p>Escape character can be one of </p>
   */
  EscapeChar?: string;

  /**
   * @public
   * <p>Can be single quote (') or double quote (").</p>
   */
  QuoteChar?: string;

  /**
   * @public
   * <p>Can be blank space (' ').</p>
   */
  NullValue?: string;

  /**
   * @public
   * <p>Specifies to trim leading and trailing white space.</p>
   */
  TrimWhiteSpace?: boolean;
}

/**
 * @public
 * <p>
 *       </p>
 */
export interface DataSourceS3Configuration {
  /**
   * @public
   * <p>The bucket name of the customer S3 bucket.</p>
   */
  BucketName: string | undefined;

  /**
   * @public
   * <p>
   *       </p>
   */
  ObjectKeyPrefix?: string;
}

/**
 * @public
 * <p>Defines configuration details about the data source.</p>
 */
export interface DataSourceConfiguration {
  /**
   * @public
   * <p>Configuration of an S3 location for a file which contains data to load.</p>
   */
  DataSourceS3Configuration: DataSourceS3Configuration | undefined;

  /**
   * @public
   * <p>A delimited data format where the column separator can be a comma and the record
   *          separator is a newline character.</p>
   */
  CsvConfiguration?: CsvConfiguration;

  /**
   * @public
   * <p>This is currently CSV.</p>
   */
  DataFormat: BatchLoadDataFormat | undefined;
}

/**
 * @public
 * @enum
 */
export const S3EncryptionOption = {
  SSE_KMS: "SSE_KMS",
  SSE_S3: "SSE_S3",
} as const;

/**
 * @public
 */
export type S3EncryptionOption = (typeof S3EncryptionOption)[keyof typeof S3EncryptionOption];

/**
 * @public
 * <p></p>
 */
export interface ReportS3Configuration {
  /**
   * @public
   * <p></p>
   */
  BucketName: string | undefined;

  /**
   * @public
   * <p></p>
   */
  ObjectKeyPrefix?: string;

  /**
   * @public
   * <p></p>
   */
  EncryptionOption?: S3EncryptionOption;

  /**
   * @public
   * <p></p>
   */
  KmsKeyId?: string;
}

/**
 * @public
 * <p>Report configuration for a batch load task. This contains details about where error
 *          reports are stored.</p>
 */
export interface ReportConfiguration {
  /**
   * @public
   * <p>Configuration of an S3 location to write error reports and events for a batch
   *          load.</p>
   */
  ReportS3Configuration?: ReportS3Configuration;
}

/**
 * @public
 * <p>Details about a batch load task.</p>
 */
export interface BatchLoadTaskDescription {
  /**
   * @public
   * <p>The ID of the batch load task.</p>
   */
  TaskId?: string;

  /**
   * @public
   * <p></p>
   */
  ErrorMessage?: string;

  /**
   * @public
   * <p>Configuration details about the data source for a batch load task.</p>
   */
  DataSourceConfiguration?: DataSourceConfiguration;

  /**
   * @public
   * <p></p>
   */
  ProgressReport?: BatchLoadProgressReport;

  /**
   * @public
   * <p>Report configuration for a batch load task. This contains details about where error
   *          reports are stored.</p>
   */
  ReportConfiguration?: ReportConfiguration;

  /**
   * @public
   * <p>Data model configuration for a batch load task. This contains details about where a data
   *          model for a batch load task is stored.</p>
   */
  DataModelConfiguration?: DataModelConfiguration;

  /**
   * @public
   * <p></p>
   */
  TargetDatabaseName?: string;

  /**
   * @public
   * <p></p>
   */
  TargetTableName?: string;

  /**
   * @public
   * <p>Status of the batch load task.</p>
   */
  TaskStatus?: BatchLoadStatus;

  /**
   * @public
   * <p></p>
   */
  RecordVersion?: number;

  /**
   * @public
   * <p>The time when the Timestream batch load task was created.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>The time when the Timestream batch load task was last updated.</p>
   */
  LastUpdatedTime?: Date;

  /**
   * @public
   * <p>
   *       </p>
   */
  ResumableUntil?: Date;
}

/**
 * @public
 * <p>Timestream was unable to process this request because it contains resource that
 *          already exists.</p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
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
 * @public
 */
export interface CreateBatchLoadTaskRequest {
  /**
   * @public
   * <p></p>
   */
  ClientToken?: string;

  /**
   * @public
   * <p></p>
   */
  DataModelConfiguration?: DataModelConfiguration;

  /**
   * @public
   * <p>Defines configuration details about the data source for a batch load task.</p>
   */
  DataSourceConfiguration: DataSourceConfiguration | undefined;

  /**
   * @public
   * <p>Report configuration for a batch load task. This contains details about where error
   *          reports are stored.</p>
   */
  ReportConfiguration: ReportConfiguration | undefined;

  /**
   * @public
   * <p>Target Timestream database for a batch load task.</p>
   */
  TargetDatabaseName: string | undefined;

  /**
   * @public
   * <p>Target Timestream table for a batch load task.</p>
   */
  TargetTableName: string | undefined;

  /**
   * @public
   * <p></p>
   */
  RecordVersion?: number;
}

/**
 * @public
 */
export interface CreateBatchLoadTaskResponse {
  /**
   * @public
   * <p>The ID of the batch load task.</p>
   */
  TaskId: string | undefined;
}

/**
 * @public
 * <p>
 *          Timestream was unable to fully process this request because of an internal server
 *          error.</p>
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  Message: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerException, __BaseException>) {
    super({
      name: "InternalServerException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>The requested endpoint was not valid.</p>
 */
export class InvalidEndpointException extends __BaseException {
  readonly name: "InvalidEndpointException" = "InvalidEndpointException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidEndpointException, __BaseException>) {
    super({
      name: "InvalidEndpointException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidEndpointException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>The operation tried to access a nonexistent resource. The resource might not be
 *          specified correctly, or its status might not be ACTIVE.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p> The instance quota of resource exceeded for this account.</p>
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceQuotaExceededException, __BaseException>) {
    super({
      name: "ServiceQuotaExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceQuotaExceededException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p> Too many requests were made by a user and they exceeded the service quotas. The request
 *          was throttled.</p>
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottlingException, __BaseException>) {
    super({
      name: "ThrottlingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottlingException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p> An invalid or malformed request.</p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
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
 * <p> A tag is a label that you assign to a Timestream database and/or table. Each
 *          tag consists of a key and an optional value, both of which you define. With tags, you can
 *          categorize databases and/or tables, for example, by purpose, owner, or environment. </p>
 */
export interface Tag {
  /**
   * @public
   * <p> The key of the tag. Tag keys are case sensitive. </p>
   */
  Key: string | undefined;

  /**
   * @public
   * <p> The value of the tag. Tag values are case-sensitive and can be null. </p>
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface CreateDatabaseRequest {
  /**
   * @public
   * <p>The name of the Timestream database.</p>
   */
  DatabaseName: string | undefined;

  /**
   * @public
   * <p>The KMS key for the database. If the KMS key is not
   *          specified, the database will be encrypted with a Timestream managed KMS key located in your account. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-managed-cmk">Amazon Web Services managed keys</a>.</p>
   */
  KmsKeyId?: string;

  /**
   * @public
   * <p> A list of key-value pairs to label the table. </p>
   */
  Tags?: Tag[];
}

/**
 * @public
 * <p>A top-level container for a table. Databases and tables are the fundamental management
 *          concepts in Amazon Timestream. All tables in a database are encrypted with the
 *          same KMS key.</p>
 */
export interface Database {
  /**
   * @public
   * <p>The Amazon Resource Name that uniquely identifies this database.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The name of the Timestream database.</p>
   */
  DatabaseName?: string;

  /**
   * @public
   * <p>The total number of tables found within a Timestream database. </p>
   */
  TableCount?: number;

  /**
   * @public
   * <p>The identifier of the KMS key used to encrypt the data stored in the
   *          database.</p>
   */
  KmsKeyId?: string;

  /**
   * @public
   * <p>The time when the database was created, calculated from the Unix epoch time.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p> The last time that this database was updated. </p>
   */
  LastUpdatedTime?: Date;
}

/**
 * @public
 */
export interface CreateDatabaseResponse {
  /**
   * @public
   * <p>The newly created Timestream database.</p>
   */
  Database?: Database;
}

/**
 * @public
 * <p>The configuration that specifies an S3 location.</p>
 */
export interface S3Configuration {
  /**
   * @public
   * <p>The bucket name of the customer S3 bucket.</p>
   */
  BucketName?: string;

  /**
   * @public
   * <p>The object key preview for the customer S3 location.</p>
   */
  ObjectKeyPrefix?: string;

  /**
   * @public
   * <p>The encryption option for the customer S3 location. Options are S3 server-side
   *          encryption with an S3 managed key or Amazon Web Services managed key.</p>
   */
  EncryptionOption?: S3EncryptionOption;

  /**
   * @public
   * <p>The KMS key ID for the customer S3 location when encrypting with an
   *             Amazon Web Services managed key.</p>
   */
  KmsKeyId?: string;
}

/**
 * @public
 * <p>The location to write error reports for records rejected, asynchronously, during
 *          magnetic store writes.</p>
 */
export interface MagneticStoreRejectedDataLocation {
  /**
   * @public
   * <p>Configuration of an S3 location to write error reports for records rejected,
   *          asynchronously, during magnetic store writes.</p>
   */
  S3Configuration?: S3Configuration;
}

/**
 * @public
 * <p>The set of properties on a table for configuring magnetic store writes.</p>
 */
export interface MagneticStoreWriteProperties {
  /**
   * @public
   * <p>A flag to enable magnetic store writes.</p>
   */
  EnableMagneticStoreWrites: boolean | undefined;

  /**
   * @public
   * <p>The location to write error reports for records rejected asynchronously during magnetic
   *          store writes.</p>
   */
  MagneticStoreRejectedDataLocation?: MagneticStoreRejectedDataLocation;
}

/**
 * @public
 * <p>Retention properties contain the duration for which your time-series data must be stored
 *          in the magnetic store and the memory store. </p>
 */
export interface RetentionProperties {
  /**
   * @public
   * <p>The duration for which data must be stored in the memory store. </p>
   */
  MemoryStoreRetentionPeriodInHours: number | undefined;

  /**
   * @public
   * <p>The duration for which data must be stored in the magnetic store. </p>
   */
  MagneticStoreRetentionPeriodInDays: number | undefined;
}

/**
 * @public
 * @enum
 */
export const PartitionKeyEnforcementLevel = {
  OPTIONAL: "OPTIONAL",
  REQUIRED: "REQUIRED",
} as const;

/**
 * @public
 */
export type PartitionKeyEnforcementLevel =
  (typeof PartitionKeyEnforcementLevel)[keyof typeof PartitionKeyEnforcementLevel];

/**
 * @public
 * @enum
 */
export const PartitionKeyType = {
  DIMENSION: "DIMENSION",
  MEASURE: "MEASURE",
} as const;

/**
 * @public
 */
export type PartitionKeyType = (typeof PartitionKeyType)[keyof typeof PartitionKeyType];

/**
 * @public
 * <p> An attribute used in partitioning data in a table. A dimension key partitions data
 *          using the values of the dimension specified by the dimension-name as partition key, while a
 *          measure key partitions data using measure names (values of the 'measure_name' column).
 *       </p>
 */
export interface PartitionKey {
  /**
   * @public
   * <p> The type of the partition key. Options are DIMENSION (dimension key) and MEASURE
   *          (measure key). </p>
   */
  Type: PartitionKeyType | undefined;

  /**
   * @public
   * <p> The name of the attribute used for a dimension key. </p>
   */
  Name?: string;

  /**
   * @public
   * <p> The level of enforcement for the specification of a dimension key in ingested records.
   *          Options are REQUIRED (dimension key must be specified) and OPTIONAL (dimension key does not
   *          have to be specified). </p>
   */
  EnforcementInRecord?: PartitionKeyEnforcementLevel;
}

/**
 * @public
 * <p> A Schema specifies the expected data model of the table. </p>
 */
export interface Schema {
  /**
   * @public
   * <p>A non-empty list of partition keys defining the attributes used to partition the table
   *          data. The order of the list determines the partition hierarchy. The name and type of each
   *          partition key as well as the partition key order cannot be changed after the table is
   *          created. However, the enforcement level of each partition key can be changed. </p>
   */
  CompositePartitionKey?: PartitionKey[];
}

/**
 * @public
 */
export interface CreateTableRequest {
  /**
   * @public
   * <p>The name of the Timestream database.</p>
   */
  DatabaseName: string | undefined;

  /**
   * @public
   * <p>The name of the Timestream table.</p>
   */
  TableName: string | undefined;

  /**
   * @public
   * <p>The duration for which your time-series data must be stored in the memory store and the
   *          magnetic store.</p>
   */
  RetentionProperties?: RetentionProperties;

  /**
   * @public
   * <p> A list of key-value pairs to label the table. </p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>Contains properties to set on the table when enabling magnetic store writes.</p>
   */
  MagneticStoreWriteProperties?: MagneticStoreWriteProperties;

  /**
   * @public
   * <p> The schema of the table. </p>
   */
  Schema?: Schema;
}

/**
 * @public
 * @enum
 */
export const TableStatus = {
  ACTIVE: "ACTIVE",
  DELETING: "DELETING",
  RESTORING: "RESTORING",
} as const;

/**
 * @public
 */
export type TableStatus = (typeof TableStatus)[keyof typeof TableStatus];

/**
 * @public
 * <p>Represents a database table in Timestream. Tables contain one or more related
 *          time series. You can modify the retention duration of the memory store and the magnetic
 *          store for a table. </p>
 */
export interface Table {
  /**
   * @public
   * <p>The Amazon Resource Name that uniquely identifies this table.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The name of the Timestream table.</p>
   */
  TableName?: string;

  /**
   * @public
   * <p>The name of the Timestream database that contains this table.</p>
   */
  DatabaseName?: string;

  /**
   * @public
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
   */
  TableStatus?: TableStatus;

  /**
   * @public
   * <p>The retention duration for the memory store and magnetic store.</p>
   */
  RetentionProperties?: RetentionProperties;

  /**
   * @public
   * <p>The time when the Timestream table was created. </p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>The time when the Timestream table was last updated.</p>
   */
  LastUpdatedTime?: Date;

  /**
   * @public
   * <p>Contains properties to set on the table when enabling magnetic store writes.</p>
   */
  MagneticStoreWriteProperties?: MagneticStoreWriteProperties;

  /**
   * @public
   * <p> The schema of the table. </p>
   */
  Schema?: Schema;
}

/**
 * @public
 */
export interface CreateTableResponse {
  /**
   * @public
   * <p>The newly created Timestream table.</p>
   */
  Table?: Table;
}

/**
 * @public
 */
export interface DeleteDatabaseRequest {
  /**
   * @public
   * <p>The name of the Timestream database to be deleted.</p>
   */
  DatabaseName: string | undefined;
}

/**
 * @public
 */
export interface DeleteTableRequest {
  /**
   * @public
   * <p>The name of the database where the Timestream database is to be deleted.</p>
   */
  DatabaseName: string | undefined;

  /**
   * @public
   * <p>The name of the Timestream table to be deleted.</p>
   */
  TableName: string | undefined;
}

/**
 * @public
 */
export interface DescribeBatchLoadTaskRequest {
  /**
   * @public
   * <p>The ID of the batch load task.</p>
   */
  TaskId: string | undefined;
}

/**
 * @public
 */
export interface DescribeBatchLoadTaskResponse {
  /**
   * @public
   * <p>Description of the batch load task.</p>
   */
  BatchLoadTaskDescription: BatchLoadTaskDescription | undefined;
}

/**
 * @public
 */
export interface DescribeDatabaseRequest {
  /**
   * @public
   * <p>The name of the Timestream database.</p>
   */
  DatabaseName: string | undefined;
}

/**
 * @public
 */
export interface DescribeDatabaseResponse {
  /**
   * @public
   * <p>The name of the Timestream table.</p>
   */
  Database?: Database;
}

/**
 * @public
 */
export interface DescribeEndpointsRequest {}

/**
 * @public
 * <p>Represents an available endpoint against which to make API calls against, as well as the
 *          TTL for that endpoint.</p>
 */
export interface Endpoint {
  /**
   * @public
   * <p>An endpoint address.</p>
   */
  Address: string | undefined;

  /**
   * @public
   * <p>The TTL for the endpoint, in minutes.</p>
   */
  CachePeriodInMinutes: number | undefined;
}

/**
 * @public
 */
export interface DescribeEndpointsResponse {
  /**
   * @public
   * <p>An <code>Endpoints</code> object is returned when a <code>DescribeEndpoints</code>
   *          request is made.</p>
   */
  Endpoints: Endpoint[] | undefined;
}

/**
 * @public
 */
export interface DescribeTableRequest {
  /**
   * @public
   * <p>The name of the Timestream database.</p>
   */
  DatabaseName: string | undefined;

  /**
   * @public
   * <p>The name of the Timestream table.</p>
   */
  TableName: string | undefined;
}

/**
 * @public
 */
export interface DescribeTableResponse {
  /**
   * @public
   * <p>The Timestream table.</p>
   */
  Table?: Table;
}

/**
 * @public
 * @enum
 */
export const DimensionValueType = {
  VARCHAR: "VARCHAR",
} as const;

/**
 * @public
 */
export type DimensionValueType = (typeof DimensionValueType)[keyof typeof DimensionValueType];

/**
 * @public
 * <p>Represents the metadata attributes of the time series. For example, the name and
 *          Availability Zone of an EC2 instance or the name of the manufacturer of a wind turbine are
 *          dimensions. </p>
 */
export interface Dimension {
  /**
   * @public
   * <p> Dimension represents the metadata attributes of the time series. For example, the name
   *          and Availability Zone of an EC2 instance or the name of the manufacturer of a wind turbine
   *          are dimensions. </p>
   *          <p>For constraints on dimension names, see <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html#limits.naming">Naming
   *             Constraints</a>.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The value of the dimension.</p>
   */
  Value: string | undefined;

  /**
   * @public
   * <p>The data type of the dimension for the time-series data point.</p>
   */
  DimensionValueType?: DimensionValueType;
}

/**
 * @public
 */
export interface ListBatchLoadTasksRequest {
  /**
   * @public
   * <p>A token to specify where to start paginating. This is the NextToken from a previously
   *          truncated response.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The total number of items to return in the output. If the total number of items
   *          available is more than the value specified, a NextToken is provided in the output. To
   *          resume pagination, provide the NextToken value as argument of a subsequent API
   *          invocation.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>Status of the batch load task.</p>
   */
  TaskStatus?: BatchLoadStatus;
}

/**
 * @public
 */
export interface ListBatchLoadTasksResponse {
  /**
   * @public
   * <p>A token to specify where to start paginating. Provide the next
   *          ListBatchLoadTasksRequest.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>A list of batch load task details.</p>
   */
  BatchLoadTasks?: BatchLoadTask[];
}

/**
 * @public
 */
export interface ListDatabasesRequest {
  /**
   * @public
   * <p>The pagination token. To resume pagination, provide the NextToken value as argument of a
   *          subsequent API invocation.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The total number of items to return in the output. If the total number of items
   *          available is more than the value specified, a NextToken is provided in the output. To
   *          resume pagination, provide the NextToken value as argument of a subsequent API
   *          invocation.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListDatabasesResponse {
  /**
   * @public
   * <p>A list of database names.</p>
   */
  Databases?: Database[];

  /**
   * @public
   * <p>The pagination token. This parameter is returned when the response is truncated.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListTablesRequest {
  /**
   * @public
   * <p>The name of the Timestream database.</p>
   */
  DatabaseName?: string;

  /**
   * @public
   * <p>The pagination token. To resume pagination, provide the NextToken value as argument of a
   *          subsequent API invocation.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The total number of items to return in the output. If the total number of items
   *          available is more than the value specified, a NextToken is provided in the output. To
   *          resume pagination, provide the NextToken value as argument of a subsequent API
   *          invocation.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListTablesResponse {
  /**
   * @public
   * <p>A list of tables.</p>
   */
  Tables?: Table[];

  /**
   * @public
   * <p>A token to specify where to start paginating. This is the NextToken from a previously
   *          truncated response.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * @public
   * <p> The Timestream resource with tags to be listed. This value is an Amazon
   *          Resource Name (ARN). </p>
   */
  ResourceARN: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * @public
   * <p> The tags currently associated with the Timestream resource. </p>
   */
  Tags?: Tag[];
}

/**
 * @public
 * <p> Represents the data attribute of the time series. For example, the CPU utilization of
 *          an EC2 instance or the RPM of a wind turbine are measures. MeasureValue has both name and
 *          value. </p>
 *          <p> MeasureValue is only allowed for type <code>MULTI</code>. Using <code>MULTI</code>
 *          type, you can pass multiple data attributes associated with the same time series in a
 *          single record </p>
 */
export interface MeasureValue {
  /**
   * @public
   * <p> The name of the MeasureValue. </p>
   *          <p> For constraints on MeasureValue names, see <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html#limits.naming"> Naming Constraints</a> in the Amazon Timestream Developer Guide.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p> The value for the MeasureValue. For information, see <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/writes.html#writes.data-types">Data
   *          types</a>.</p>
   */
  Value: string | undefined;

  /**
   * @public
   * <p>Contains the data type of the MeasureValue for the time-series data point.</p>
   */
  Type: MeasureValueType | undefined;
}

/**
 * @public
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
 */
export interface _Record {
  /**
   * @public
   * <p>Contains the list of dimensions for time-series data points.</p>
   */
  Dimensions?: Dimension[];

  /**
   * @public
   * <p>Measure represents the data attribute of the time series. For example, the CPU
   *          utilization of an EC2 instance or the RPM of a wind turbine are measures. </p>
   */
  MeasureName?: string;

  /**
   * @public
   * <p> Contains the measure value for the time-series data point. </p>
   */
  MeasureValue?: string;

  /**
   * @public
   * <p> Contains the data type of the measure value for the time-series data point. Default
   *          type is <code>DOUBLE</code>. For more information, see <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/writes.html#writes.data-types">Data
   *          types</a>.</p>
   */
  MeasureValueType?: MeasureValueType;

  /**
   * @public
   * <p> Contains the time at which the measure value for the data point was collected. The time
   *          value plus the unit provides the time elapsed since the epoch. For example, if the time
   *          value is <code>12345</code> and the unit is <code>ms</code>, then <code>12345 ms</code>
   *          have elapsed since the epoch. </p>
   */
  Time?: string;

  /**
   * @public
   * <p> The granularity of the timestamp unit. It indicates if the time value is in seconds,
   *          milliseconds, nanoseconds, or other supported values. Default is <code>MILLISECONDS</code>.
   *       </p>
   */
  TimeUnit?: TimeUnit;

  /**
   * @public
   * <p>64-bit attribute used for record updates. Write requests for duplicate data with a
   *          higher version number will update the existing measure value and version. In cases where
   *          the measure value is the same, <code>Version</code> will still be updated. Default value is
   *             <code>1</code>.</p>
   *          <note>
   *             <p>
   *                <code>Version</code> must be <code>1</code> or greater, or you will receive a
   *                <code>ValidationException</code> error.</p>
   *          </note>
   */
  Version?: number;

  /**
   * @public
   * <p> Contains the list of MeasureValue for time-series data points. </p>
   *          <p> This is only allowed for type <code>MULTI</code>. For scalar values, use
   *             <code>MeasureValue</code> attribute of the record directly. </p>
   */
  MeasureValues?: MeasureValue[];
}

/**
 * @public
 * <p>Information on the records ingested by this request.</p>
 */
export interface RecordsIngested {
  /**
   * @public
   * <p>Total count of successfully ingested records.</p>
   */
  Total?: number;

  /**
   * @public
   * <p>Count of records ingested into the memory store.</p>
   */
  MemoryStore?: number;

  /**
   * @public
   * <p>Count of records ingested into the magnetic store.</p>
   */
  MagneticStore?: number;
}

/**
 * @public
 * <p> Represents records that were not successfully inserted into Timestream due to
 *          data validation issues that must be resolved before reinserting time-series data into the
 *          system. </p>
 */
export interface RejectedRecord {
  /**
   * @public
   * <p> The index of the record in the input request for WriteRecords. Indexes begin with 0.
   *       </p>
   */
  RecordIndex?: number;

  /**
   * @public
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
   */
  Reason?: string;

  /**
   * @public
   * <p>The existing version of the record. This value is populated in scenarios where an
   *          identical record exists with a higher version than the version in the write request.</p>
   */
  ExistingVersion?: number;
}

/**
 * @public
 * <p> WriteRecords would throw this exception in the following cases: </p>
 *          <ul>
 *             <li>
 *                <p>Records with duplicate data where there are multiple records with the same
 *                dimensions, timestamps, and measure names but: </p>
 *                <ul>
 *                   <li>
 *                      <p>Measure values are different</p>
 *                   </li>
 *                   <li>
 *                      <p>Version is not present in the request <i>or</i> the value of
 *                      version in the new record is equal to or lower than the existing value</p>
 *                   </li>
 *                </ul>
 *                <p> In this case, if Timestream rejects data, the
 *                   <code>ExistingVersion</code> field in the <code>RejectedRecords</code> response
 *                will indicate the current record’s version. To force an update, you can resend the
 *                request with a version for the record set to a value greater than the
 *                   <code>ExistingVersion</code>.</p>
 *             </li>
 *             <li>
 *                <p> Records with timestamps that lie outside the retention duration of the memory
 *                store. </p>
 *             </li>
 *             <li>
 *                <p> Records with dimensions or measures that exceed the Timestream defined
 *                limits. </p>
 *             </li>
 *          </ul>
 *          <p> For more information, see <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html">Quotas</a> in the Amazon Timestream Developer Guide. </p>
 */
export class RejectedRecordsException extends __BaseException {
  readonly name: "RejectedRecordsException" = "RejectedRecordsException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @public
   * <p>
   *       </p>
   */
  RejectedRecords?: RejectedRecord[];
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<RejectedRecordsException, __BaseException>) {
    super({
      name: "RejectedRecordsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, RejectedRecordsException.prototype);
    this.Message = opts.Message;
    this.RejectedRecords = opts.RejectedRecords;
  }
}

/**
 * @public
 */
export interface ResumeBatchLoadTaskRequest {
  /**
   * @public
   * <p>The ID of the batch load task to resume.</p>
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
   * @public
   * <p> Identifies the Timestream resource to which tags should be added. This value
   *          is an Amazon Resource Name (ARN). </p>
   */
  ResourceARN: string | undefined;

  /**
   * @public
   * <p> The tags to be assigned to the Timestream resource. </p>
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
   * @public
   * <p> The Timestream resource that the tags will be removed from. This value is an
   *          Amazon Resource Name (ARN). </p>
   */
  ResourceARN: string | undefined;

  /**
   * @public
   * <p> A list of tags keys. Existing tags of the resource whose keys are members of this list
   *          will be removed from the Timestream resource. </p>
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
   * @public
   * <p> The name of the database. </p>
   */
  DatabaseName: string | undefined;

  /**
   * @public
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
   */
  KmsKeyId: string | undefined;
}

/**
 * @public
 */
export interface UpdateDatabaseResponse {
  /**
   * @public
   * <p>A top-level container for a table. Databases and tables are the fundamental management
   *          concepts in Amazon Timestream. All tables in a database are encrypted with the
   *          same KMS key.</p>
   */
  Database?: Database;
}

/**
 * @public
 */
export interface UpdateTableRequest {
  /**
   * @public
   * <p>The name of the Timestream database.</p>
   */
  DatabaseName: string | undefined;

  /**
   * @public
   * <p>The name of the Timestream table.</p>
   */
  TableName: string | undefined;

  /**
   * @public
   * <p>The retention duration of the memory store and the magnetic store.</p>
   */
  RetentionProperties?: RetentionProperties;

  /**
   * @public
   * <p>Contains properties to set on the table when enabling magnetic store writes.</p>
   */
  MagneticStoreWriteProperties?: MagneticStoreWriteProperties;

  /**
   * @public
   * <p> The schema of the table. </p>
   */
  Schema?: Schema;
}

/**
 * @public
 */
export interface UpdateTableResponse {
  /**
   * @public
   * <p>The updated Timestream table.</p>
   */
  Table?: Table;
}

/**
 * @public
 */
export interface WriteRecordsRequest {
  /**
   * @public
   * <p>The name of the Timestream database.</p>
   */
  DatabaseName: string | undefined;

  /**
   * @public
   * <p>The name of the Timestream table.</p>
   */
  TableName: string | undefined;

  /**
   * @public
   * <p>A record that contains the common measure, dimension, time, and version attributes
   *          shared across all the records in the request. The measure and dimension attributes
   *          specified will be merged with the measure and dimension attributes in the records object
   *          when the data is written into Timestream. Dimensions may not overlap, or a
   *             <code>ValidationException</code> will be thrown. In other words, a record must contain
   *          dimensions with unique names. </p>
   */
  CommonAttributes?: _Record;

  /**
   * @public
   * <p>An array of records that contain the unique measure, dimension, time, and version
   *          attributes for each time-series data point. </p>
   */
  Records: _Record[] | undefined;
}

/**
 * @public
 */
export interface WriteRecordsResponse {
  /**
   * @public
   * <p>Information on the records ingested by this request.</p>
   */
  RecordsIngested?: RecordsIngested;
}

/**
 * @internal
 */
export const CreateBatchLoadTaskRequestFilterSensitiveLog = (obj: CreateBatchLoadTaskRequest): any => ({
  ...obj,
  ...(obj.ClientToken && { ClientToken: SENSITIVE_STRING }),
});
