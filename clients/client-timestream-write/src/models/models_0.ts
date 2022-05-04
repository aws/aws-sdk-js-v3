// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

import { TimestreamWriteServiceException as __BaseException } from "./TimestreamWriteServiceException";

/**
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
 * <p>Timestream was unable to process this request because it contains resource that already exists.</p>
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
 * <p>
 * A tag is a label that you assign to a Timestream database and/or table. Each tag consists
 * of a key and an optional value, both of which you define. Tags enable you to
 * categorize databases and/or tables, for example, by purpose, owner, or environment.
 * </p>
 */
export interface Tag {
  /**
   * <p>
   * The key of the tag. Tag keys are case sensitive.
   * </p>
   */
  Key: string | undefined;

  /**
   * <p>
   * The value of the tag. Tag values are case-sensitive and can be null.
   * </p>
   */
  Value: string | undefined;
}

export namespace Tag {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Tag): any => ({
    ...obj,
  });
}

export interface CreateDatabaseRequest {
  /**
   * <p>The name of the Timestream database.</p>
   */
  DatabaseName: string | undefined;

  /**
   * <p>The KMS key for the database.
   *          If the KMS key is not specified, the database will be encrypted with a Timestream
   *          managed KMS key located in your account.
   *          Refer to <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-managed-cmk">Amazon Web Services managed KMS keys</a> for more info.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>
   *       A list of key-value pairs to label the table.
   *    </p>
   */
  Tags?: Tag[];
}

export namespace CreateDatabaseRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDatabaseRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A top level container for a table. Databases and tables are the
 *       fundamental management concepts in Amazon Timestream. All tables in a
 *       database are encrypted with the same KMS key.</p>
 */
export interface Database {
  /**
   * <p>The Amazon Resource Name that uniquely identifies this database.</p>
   */
  Arn?: string;

  /**
   * <p>The name of the Timestream database.</p>
   */
  DatabaseName?: string;

  /**
   * <p>The total number of tables found within a Timestream database. </p>
   */
  TableCount?: number;

  /**
   * <p>The identifier of the KMS key used to encrypt the data stored in the database.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The time when the database was created, calculated from the Unix epoch time.</p>
   */
  CreationTime?: Date;

  /**
   * <p>
   *    The last time that this database was updated.
   *    </p>
   */
  LastUpdatedTime?: Date;
}

export namespace Database {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Database): any => ({
    ...obj,
  });
}

export interface CreateDatabaseResponse {
  /**
   * <p>The newly created Timestream database.</p>
   */
  Database?: Database;
}

export namespace CreateDatabaseResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDatabaseResponse): any => ({
    ...obj,
  });
}

/**
 * <p> Timestream was unable to fully process this request because of an internal server error.</p>
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
 * <p>The requested endpoint was invalid.</p>
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
 * <p> Instance quota of resource exceeded for this account.</p>
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
 * <p> Too many requests were made by a user exceeding service quotas. The request was throttled.</p>
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
 * <p> Invalid or malformed request.</p>
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

export enum S3EncryptionOption {
  SSE_KMS = "SSE_KMS",
  SSE_S3 = "SSE_S3",
}

/**
 * <p>Configuration specifing an S3 location.</p>
 */
export interface S3Configuration {
  /**
   * <p>>Bucket name of the customer S3 bucket.</p>
   */
  BucketName?: string;

  /**
   * <p>Object key preview for the customer S3 location.</p>
   */
  ObjectKeyPrefix?: string;

  /**
   * <p>Encryption option for the customer s3 location. Options are S3 server side encryption with an S3-managed key or KMS managed key.</p>
   */
  EncryptionOption?: S3EncryptionOption | string;

  /**
   * <p>KMS key id for the customer s3 location when encrypting with a KMS managed key.</p>
   */
  KmsKeyId?: string;
}

export namespace S3Configuration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: S3Configuration): any => ({
    ...obj,
  });
}

/**
 * <p>The location to write error reports for records rejected, asynchronously, during magnetic store writes.</p>
 */
export interface MagneticStoreRejectedDataLocation {
  /**
   * <p>Configuration of an S3 location to write error reports for records rejected, asynchronously, during magnetic store writes.</p>
   */
  S3Configuration?: S3Configuration;
}

export namespace MagneticStoreRejectedDataLocation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MagneticStoreRejectedDataLocation): any => ({
    ...obj,
  });
}

/**
 * <p>The set of properties on a table for configuring magnetic store writes.</p>
 */
export interface MagneticStoreWriteProperties {
  /**
   * <p>A flag to enable magnetic store writes.</p>
   */
  EnableMagneticStoreWrites: boolean | undefined;

  /**
   * <p>The location to write error reports for records rejected asynchronously during magnetic store writes.</p>
   */
  MagneticStoreRejectedDataLocation?: MagneticStoreRejectedDataLocation;
}

export namespace MagneticStoreWriteProperties {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MagneticStoreWriteProperties): any => ({
    ...obj,
  });
}

/**
 * <p>Retention properties contain the duration for which your time series data must be stored in the magnetic store and the memory store.
 *       </p>
 */
export interface RetentionProperties {
  /**
   * <p>The duration for which data must be stored in the memory store. </p>
   */
  MemoryStoreRetentionPeriodInHours: number | undefined;

  /**
   * <p>The duration for which data must be stored in the magnetic store. </p>
   */
  MagneticStoreRetentionPeriodInDays: number | undefined;
}

export namespace RetentionProperties {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RetentionProperties): any => ({
    ...obj,
  });
}

export interface CreateTableRequest {
  /**
   * <p>The name of the Timestream database.</p>
   */
  DatabaseName: string | undefined;

  /**
   * <p>The name of the Timestream table.</p>
   */
  TableName: string | undefined;

  /**
   * <p>The duration for which your time series data must be stored in the memory store and the magnetic store.</p>
   */
  RetentionProperties?: RetentionProperties;

  /**
   * <p>
   *       A list of key-value pairs to label the table.
   *    </p>
   */
  Tags?: Tag[];

  /**
   * <p>Contains properties to set on the table when enabling magnetic store writes.</p>
   */
  MagneticStoreWriteProperties?: MagneticStoreWriteProperties;
}

export namespace CreateTableRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateTableRequest): any => ({
    ...obj,
  });
}

export enum TableStatus {
  ACTIVE = "ACTIVE",
  DELETING = "DELETING",
}

/**
 * <p>Table represents a database table in Timestream. Tables contain one or more related time series. You can modify the retention duration of the memory store and the magnetic store for a table.
 *       </p>
 */
export interface Table {
  /**
   * <p>The Amazon Resource Name that uniquely identifies this table.</p>
   */
  Arn?: string;

  /**
   * <p>The name of the Timestream table.</p>
   */
  TableName?: string;

  /**
   * <p>The name of the Timestream database that contains this table.</p>
   */
  DatabaseName?: string;

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
   */
  TableStatus?: TableStatus | string;

  /**
   * <p>The retention duration for the memory store and magnetic store.</p>
   */
  RetentionProperties?: RetentionProperties;

  /**
   * <p>The time when the Timestream table was created. </p>
   */
  CreationTime?: Date;

  /**
   * <p>The time when the Timestream table was last updated.</p>
   */
  LastUpdatedTime?: Date;

  /**
   * <p>Contains properties to set on the table when enabling magnetic store writes.</p>
   */
  MagneticStoreWriteProperties?: MagneticStoreWriteProperties;
}

export namespace Table {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Table): any => ({
    ...obj,
  });
}

export interface CreateTableResponse {
  /**
   * <p>The newly created Timestream table.</p>
   */
  Table?: Table;
}

export namespace CreateTableResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateTableResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The operation tried to access a nonexistent resource. The resource might not be specified correctly, or its status might not be ACTIVE.</p>
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

export interface DeleteDatabaseRequest {
  /**
   * <p>The name of the Timestream database to be deleted.</p>
   */
  DatabaseName: string | undefined;
}

export namespace DeleteDatabaseRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteDatabaseRequest): any => ({
    ...obj,
  });
}

export interface DeleteTableRequest {
  /**
   * <p>The name of the database where the Timestream database is to be deleted.</p>
   */
  DatabaseName: string | undefined;

  /**
   * <p>The name of the Timestream table to be deleted.</p>
   */
  TableName: string | undefined;
}

export namespace DeleteTableRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteTableRequest): any => ({
    ...obj,
  });
}

export interface DescribeDatabaseRequest {
  /**
   * <p>The name of the Timestream database.</p>
   */
  DatabaseName: string | undefined;
}

export namespace DescribeDatabaseRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDatabaseRequest): any => ({
    ...obj,
  });
}

export interface DescribeDatabaseResponse {
  /**
   * <p>The name of the Timestream table.</p>
   */
  Database?: Database;
}

export namespace DescribeDatabaseResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDatabaseResponse): any => ({
    ...obj,
  });
}

export interface DescribeEndpointsRequest {}

export namespace DescribeEndpointsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeEndpointsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Represents an available endpoint against which to make API calls agaisnt, as well as the TTL for that endpoint.</p>
 */
export interface Endpoint {
  /**
   * <p>An endpoint address.</p>
   */
  Address: string | undefined;

  /**
   * <p>The TTL for the endpoint, in minutes.</p>
   */
  CachePeriodInMinutes: number | undefined;
}

export namespace Endpoint {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Endpoint): any => ({
    ...obj,
  });
}

export interface DescribeEndpointsResponse {
  /**
   * <p>An <code>Endpoints</code> object is returned when a <code>DescribeEndpoints</code> request is made.</p>
   */
  Endpoints: Endpoint[] | undefined;
}

export namespace DescribeEndpointsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeEndpointsResponse): any => ({
    ...obj,
  });
}

export interface DescribeTableRequest {
  /**
   * <p>The name of the Timestream database.</p>
   */
  DatabaseName: string | undefined;

  /**
   * <p>The name of the Timestream table.</p>
   */
  TableName: string | undefined;
}

export namespace DescribeTableRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeTableRequest): any => ({
    ...obj,
  });
}

export interface DescribeTableResponse {
  /**
   * <p>The Timestream table.</p>
   */
  Table?: Table;
}

export namespace DescribeTableResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeTableResponse): any => ({
    ...obj,
  });
}

export enum DimensionValueType {
  VARCHAR = "VARCHAR",
}

/**
 * <p>Dimension represents the meta data attributes of the time series. For example, the name and availability zone of an EC2 instance or the name of the manufacturer of a wind turbine are dimensions. </p>
 */
export interface Dimension {
  /**
   * <p>
   *          Dimension represents the meta data attributes of the time series.
   *          For example, the name and availability zone of an EC2 instance or
   *          the name of the manufacturer of a wind turbine are dimensions.
   *
   *       </p>
   *          <p>For constraints on Dimension names,
   *          see <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html#limits.naming">Naming Constraints</a>.</p>
   */
  Name: string | undefined;

  /**
   * <p>The value of the dimension.</p>
   */
  Value: string | undefined;

  /**
   * <p>The data type of the dimension for the time series data point.</p>
   */
  DimensionValueType?: DimensionValueType | string;
}

export namespace Dimension {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Dimension): any => ({
    ...obj,
  });
}

export interface ListDatabasesRequest {
  /**
   * <p>The pagination token. To resume pagination, provide the NextToken value as argument of a subsequent API invocation.</p>
   */
  NextToken?: string;

  /**
   * <p>The total number of items to return in the output. If the total number of items available is more than the value specified, a NextToken is provided in the output. To resume pagination, provide the NextToken value as argument of a subsequent API invocation.</p>
   */
  MaxResults?: number;
}

export namespace ListDatabasesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListDatabasesRequest): any => ({
    ...obj,
  });
}

export interface ListDatabasesResponse {
  /**
   * <p>A list of database names.</p>
   */
  Databases?: Database[];

  /**
   * <p>The pagination token. This parameter is returned when the response is truncated.</p>
   */
  NextToken?: string;
}

export namespace ListDatabasesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListDatabasesResponse): any => ({
    ...obj,
  });
}

export interface ListTablesRequest {
  /**
   * <p>The name of the Timestream database.</p>
   */
  DatabaseName?: string;

  /**
   * <p>The pagination token. To resume pagination, provide the NextToken value as argument of a subsequent API invocation.</p>
   */
  NextToken?: string;

  /**
   * <p>The total number of items to return in the output. If the total number of items available is more than the value specified, a NextToken is provided in the output. To resume pagination, provide the NextToken value as argument of a subsequent API invocation.</p>
   */
  MaxResults?: number;
}

export namespace ListTablesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTablesRequest): any => ({
    ...obj,
  });
}

export interface ListTablesResponse {
  /**
   * <p>A list of tables.</p>
   */
  Tables?: Table[];

  /**
   * <p>A token to specify where to start paginating. This is the NextToken from a previously truncated response.</p>
   */
  NextToken?: string;
}

export namespace ListTablesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTablesResponse): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceRequest {
  /**
   * <p>
   * The Timestream resource with tags to be listed. This value is an Amazon Resource Name (ARN).
   * </p>
   */
  ResourceARN: string | undefined;
}

export namespace ListTagsForResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceResponse {
  /**
   * <p>
   * The tags currently associated with the Timestream resource.
   * </p>
   */
  Tags?: Tag[];
}

export namespace ListTagsForResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
  });
}

export enum MeasureValueType {
  BIGINT = "BIGINT",
  BOOLEAN = "BOOLEAN",
  DOUBLE = "DOUBLE",
  MULTI = "MULTI",
  TIMESTAMP = "TIMESTAMP",
  VARCHAR = "VARCHAR",
}

/**
 * <p> MeasureValue represents the data attribute of the time series. For example, the CPU utilization of an EC2 instance or the RPM of a wind turbine are measures. MeasureValue has both name and value. </p>
 *          <p> MeasureValue is only allowed for type <code>MULTI</code>. Using <code>MULTI</code> type, you can pass multiple data attributes associated with the same time series in a single record </p>
 */
export interface MeasureValue {
  /**
   * <p> Name of the MeasureValue.  </p>
   *          <p> For constraints on MeasureValue names, refer to <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html#limits.naming">
   *       Naming Constraints</a> in the Timestream developer guide.</p>
   */
  Name: string | undefined;

  /**
   * <p> Value for the MeasureValue. </p>
   */
  Value: string | undefined;

  /**
   * <p>Contains the data type of the MeasureValue for the time series data point.</p>
   */
  Type: MeasureValueType | string | undefined;
}

export namespace MeasureValue {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MeasureValue): any => ({
    ...obj,
  });
}

export enum TimeUnit {
  MICROSECONDS = "MICROSECONDS",
  MILLISECONDS = "MILLISECONDS",
  NANOSECONDS = "NANOSECONDS",
  SECONDS = "SECONDS",
}

/**
 * <p>Record represents a time series data point being written into
 *        Timestream. Each record contains an array of dimensions. Dimensions
 *        represent the meta data attributes of a time series data point such as
 *        the instance name or availability zone of an EC2 instance. A record also
 *        contains the measure name which is the name of the measure being collected
 *        for example the CPU utilization of an EC2 instance. A record also contains
 *        the measure value and the value type which is the data type of the measure value.
 *        In addition, the record contains the timestamp when the measure was collected that
 *        the timestamp unit which represents the granularity of the timestamp.
 *        </p>
 *          <p>
 *         Records have a <code>Version</code> field, which is a 64-bit <code>long</code> that you can use for updating data points.
 *         Writes of a duplicate record with the same dimension,
 *         timestamp, and measure name
 *         but different measure value will only succeed if the <code>Version</code> attribute of the record in the write request
 *         is higher than that of the existing record.
 *         Timestream defaults to a <code>Version</code> of <code>1</code> for records without the <code>Version</code> field.
 *      </p>
 */
export interface _Record {
  /**
   * <p>Contains the list of dimensions for time series data points.</p>
   */
  Dimensions?: Dimension[];

  /**
   * <p>Measure represents the data attribute of the time series. For example, the CPU utilization of an EC2 instance or the RPM of a wind turbine are measures. </p>
   */
  MeasureName?: string;

  /**
   * <p>
   * Contains the measure value for the time series data point.
   * </p>
   */
  MeasureValue?: string;

  /**
   * <p>
   * Contains the data type of the measure value for the time series data point. Default type is <code>DOUBLE</code>.
   * </p>
   */
  MeasureValueType?: MeasureValueType | string;

  /**
   * <p>
   * Contains the time at which the measure value for the data point was collected.
   * The time value plus the unit provides the time elapsed since the epoch.
   * For example, if the time value is <code>12345</code> and the unit is <code>ms</code>,
   *    then <code>12345 ms</code> have elapsed since the epoch.
   * </p>
   */
  Time?: string;

  /**
   * <p>
   * The granularity of the timestamp unit. It indicates if the time value is in seconds, milliseconds, nanoseconds or other supported values.
   * Default is <code>MILLISECONDS</code>.
   * </p>
   */
  TimeUnit?: TimeUnit | string;

  /**
   * <p>64-bit attribute used for record updates.
   *          Write requests for duplicate data with a higher version number will update the existing measure value and version.
   *          In cases where the measure value is the same, <code>Version</code> will still be updated . Default value is <code>1</code>.</p>
   *
   *          <note>
   *             <p>
   *                <code>Version</code> must be <code>1</code> or greater, or you will receive a <code>ValidationException</code> error.</p>
   *          </note>
   */
  Version?: number;

  /**
   * <p> Contains the list of MeasureValue for time series data points. </p>
   *          <p> This is only allowed for type <code>MULTI</code>. For scalar values, use <code>MeasureValue</code> attribute of the Record directly. </p>
   */
  MeasureValues?: MeasureValue[];
}

export namespace _Record {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: _Record): any => ({
    ...obj,
  });
}

/**
 * <p>Information on the records ingested by this request.</p>
 */
export interface RecordsIngested {
  /**
   * <p>Total count of successfully ingested records.</p>
   */
  Total?: number;

  /**
   * <p>Count of records ingested into the memory store.</p>
   */
  MemoryStore?: number;

  /**
   * <p>Count of records ingested into the magnetic store.</p>
   */
  MagneticStore?: number;
}

export namespace RecordsIngested {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RecordsIngested): any => ({
    ...obj,
  });
}

/**
 * <p>
 * Records that were not successfully inserted into Timestream due to data validation issues
 * that must be resolved prior to reinserting time series data into the system.
 * </p>
 */
export interface RejectedRecord {
  /**
   * <p>
   * The index of the record in the input request for WriteRecords. Indexes begin with 0.
   * </p>
   */
  RecordIndex?: number;

  /**
   * <p>
   *          The reason why a record was not successfully inserted into Timestream. Possible causes of failure include:
   *       </p>
   *          <ul>
   *             <li>
   *                <p>Records with duplicate data where there are multiple records with the same dimensions,
   *                   timestamps, and measure names but:
   *                </p>
   *                <ul>
   *                   <li>
   *                      <p>Measure values are different</p>
   *                   </li>
   *                   <li>
   *                      <p>Version is not present in the request <i>or</i>
   *                      the value of version in the new record is equal to or lower than the existing value</p>
   *                   </li>
   *                </ul>
   *                <p>
   *                   If Timestream rejects data for this case, the <code>ExistingVersion</code> field in the <code>RejectedRecords</code>
   *                   response will indicate the current record’s version.
   *                   To force an update, you can resend the request with a version for the record set to a value greater than the <code>ExistingVersion</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                  Records with timestamps that lie outside the retention duration of the memory store
   *                </p>
   *                <note>
   *                   <p>When the retention window is updated, you will receive a <code>RejectedRecords</code> exception
   *                   if you immediately try to ingest data within the new window.
   *                   To avoid a <code>RejectedRecords</code> exception,
   *                   wait until the duration of the new window to ingest new data.
   *                   For further information,
   *                   see
   *                   <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/best-practices.html#configuration">
   *                      Best Practices for Configuring Timestream</a>
   *                   and
   *                   <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/storage.html">the explanation of how storage works in Timestream</a>.</p>
   *                </note>
   *             </li>
   *             <li>
   *                <p>
   *                  Records with dimensions or measures that exceed the Timestream defined limits.
   *                </p>
   *             </li>
   *          </ul>
   *          <p>
   *             For more information, see <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html">Access Management</a> in the Timestream Developer Guide.
   *          </p>
   */
  Reason?: string;

  /**
   * <p>The existing version of the record.
   *          This value is populated in scenarios where an identical record exists with a higher version than the version in the write request.</p>
   */
  ExistingVersion?: number;
}

export namespace RejectedRecord {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RejectedRecord): any => ({
    ...obj,
  });
}

/**
 * <p>
 *          WriteRecords would throw this exception in the following cases:
 *       </p>
 *          <ul>
 *             <li>
 *                <p>Records with duplicate data where there are multiple records with the same dimensions,
 *                   timestamps, and measure names but:
 *                   </p>
 *                   <ul>
 *                   <li>
 *                      <p>Measure values are different</p>
 *                   </li>
 *                   <li>
 *                      <p>Version is not present in the request <i>or</i>
 *                         the value of version in the new record is equal to or lower than the existing value</p>
 *                   </li>
 *                </ul>
 *                   <p>
 *                   In this case, if Timestream rejects data, the <code>ExistingVersion</code> field in the <code>RejectedRecords</code>
 *                   response will indicate the current record’s version.
 *                   To force an update, you can resend the request with a version for the record set to a value greater than the <code>ExistingVersion</code>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                  Records with timestamps that lie outside the retention duration of the memory store
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                  Records with dimensions or measures that exceed the Timestream defined limits.
 *                </p>
 *             </li>
 *          </ul>
 *          <p>
 *          For more information, see <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html">Quotas</a> in the Timestream Developer Guide.
 *          </p>
 */
export class RejectedRecordsException extends __BaseException {
  readonly name: "RejectedRecordsException" = "RejectedRecordsException";
  readonly $fault: "client" = "client";
  Message?: string;
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

export interface TagResourceRequest {
  /**
   * <p>
   *     Identifies the Timestream resource to which tags should be added. This value is an
   *     Amazon Resource Name (ARN).
   * </p>
   */
  ResourceARN: string | undefined;

  /**
   * <p>
   * The tags to be assigned to the Timestream resource.
   * </p>
   */
  Tags: Tag[] | undefined;
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
   * <p>
   *     The Timestream resource that the tags will be removed from. This value
   *     is an Amazon Resource Name (ARN).
   * </p>
   */
  ResourceARN: string | undefined;

  /**
   * <p>
   *     A list of tags keys. Existing tags of the resource whose keys are members of this
   *     list will be removed from the Timestream resource.
   * </p>
   */
  TagKeys: string[] | undefined;
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

export interface UpdateDatabaseRequest {
  /**
   * <p>
   *      The name of the database.
   *    </p>
   */
  DatabaseName: string | undefined;

  /**
   * <p>
   *       The identifier of the new KMS key (<code>KmsKeyId</code>) to be used to encrypt the data stored in the database.
   *       If the <code>KmsKeyId</code> currently registered with the database is the same as the <code>KmsKeyId</code> in the
   *       request, there will not be any update.
   *    </p>
   *          <p>You can specify the <code>KmsKeyId</code> using any of the following:</p>
   *          <ul>
   *             <li>
   *                <p>Key ID: <code>1234abcd-12ab-34cd-56ef-1234567890ab</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Key ARN: <code>arn:aws:kms:us-east-1:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Alias name: <code>alias/ExampleAlias</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Alias ARN: <code>arn:aws:kms:us-east-1:111122223333:alias/ExampleAlias</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  KmsKeyId: string | undefined;
}

export namespace UpdateDatabaseRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateDatabaseRequest): any => ({
    ...obj,
  });
}

export interface UpdateDatabaseResponse {
  /**
   * <p>A top level container for a table. Databases and tables are the
   *       fundamental management concepts in Amazon Timestream. All tables in a
   *       database are encrypted with the same KMS key.</p>
   */
  Database?: Database;
}

export namespace UpdateDatabaseResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateDatabaseResponse): any => ({
    ...obj,
  });
}

export interface UpdateTableRequest {
  /**
   * <p>The name of the Timestream database.</p>
   */
  DatabaseName: string | undefined;

  /**
   * <p>The name of the Timestream table.</p>
   */
  TableName: string | undefined;

  /**
   * <p>The retention duration of the memory store and the magnetic store.</p>
   */
  RetentionProperties?: RetentionProperties;

  /**
   * <p>Contains properties to set on the table when enabling magnetic store writes.</p>
   */
  MagneticStoreWriteProperties?: MagneticStoreWriteProperties;
}

export namespace UpdateTableRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateTableRequest): any => ({
    ...obj,
  });
}

export interface UpdateTableResponse {
  /**
   * <p>The updated Timestream table.</p>
   */
  Table?: Table;
}

export namespace UpdateTableResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateTableResponse): any => ({
    ...obj,
  });
}

export interface WriteRecordsRequest {
  /**
   * <p>The name of the Timestream database.</p>
   */
  DatabaseName: string | undefined;

  /**
   * <p>The name of the Timestream table.</p>
   */
  TableName: string | undefined;

  /**
   * <p>A record containing the common measure, dimension, time,
   *          and version attributes
   *        shared across all the records in the request. The measure and dimension
   *        attributes specified will be merged with the measure and dimension
   *        attributes in the records object when the data is written into Timestream.
   *        Dimensions may not overlap,
   *        or a <code>ValidationException</code> will be thrown.
   *          In other words, a record must contain dimensions with unique names.
   *        </p>
   */
  CommonAttributes?: _Record;

  /**
   * <p>An array of records containing the unique measure, dimension, time, and version
   *        attributes for each time series data point.
   *        </p>
   */
  Records: _Record[] | undefined;
}

export namespace WriteRecordsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: WriteRecordsRequest): any => ({
    ...obj,
  });
}

export interface WriteRecordsResponse {
  /**
   * <p>Information on the records ingested by this request.</p>
   */
  RecordsIngested?: RecordsIngested;
}

export namespace WriteRecordsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: WriteRecordsResponse): any => ({
    ...obj,
  });
}
