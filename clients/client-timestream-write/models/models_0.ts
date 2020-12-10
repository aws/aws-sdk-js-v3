import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>You are not authorized to perform this action.</p>
 */
export interface AccessDeniedException extends __SmithyException, $MetadataBearer {
  name: "AccessDeniedException";
  $fault: "client";
  Message: string | undefined;
}

export namespace AccessDeniedException {
  export const filterSensitiveLog = (obj: AccessDeniedException): any => ({
    ...obj,
  });
}

/**
 * <p>Timestream was unable to process this request because it contains resource that already exists.</p>
 */
export interface ConflictException extends __SmithyException, $MetadataBearer {
  name: "ConflictException";
  $fault: "client";
  Message: string | undefined;
}

export namespace ConflictException {
  export const filterSensitiveLog = (obj: ConflictException): any => ({
    ...obj,
  });
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
   * <p>The KMS key for the database. If the KMS key is not specified, the database will be encrypted with a Timestream
   *          managed KMS key located in your account. Refer to <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-managed-cmk">AWS managed KMS keys</a> for more info.</p>
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
  export const filterSensitiveLog = (obj: CreateDatabaseResponse): any => ({
    ...obj,
  });
}

/**
 * <p> Timestream was unable to fully process this request because of an internal server error.</p>
 */
export interface InternalServerException extends __SmithyException, $MetadataBearer {
  name: "InternalServerException";
  $fault: "server";
  Message: string | undefined;
}

export namespace InternalServerException {
  export const filterSensitiveLog = (obj: InternalServerException): any => ({
    ...obj,
  });
}

/**
 * <p>The requested endpoint was invalid.</p>
 */
export interface InvalidEndpointException extends __SmithyException, $MetadataBearer {
  name: "InvalidEndpointException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidEndpointException {
  export const filterSensitiveLog = (obj: InvalidEndpointException): any => ({
    ...obj,
  });
}

/**
 * <p> Instance quota of resource exceeded for this account.</p>
 */
export interface ServiceQuotaExceededException extends __SmithyException, $MetadataBearer {
  name: "ServiceQuotaExceededException";
  $fault: "client";
  Message?: string;
}

export namespace ServiceQuotaExceededException {
  export const filterSensitiveLog = (obj: ServiceQuotaExceededException): any => ({
    ...obj,
  });
}

/**
 * <p> Too many requests were made by a user exceeding service quotas. The request was throttled.</p>
 */
export interface ThrottlingException extends __SmithyException, $MetadataBearer {
  name: "ThrottlingException";
  $fault: "client";
  Message: string | undefined;
}

export namespace ThrottlingException {
  export const filterSensitiveLog = (obj: ThrottlingException): any => ({
    ...obj,
  });
}

/**
 * <p> Invalid or malformed request.</p>
 */
export interface ValidationException extends __SmithyException, $MetadataBearer {
  name: "ValidationException";
  $fault: "client";
  Message: string | undefined;
}

export namespace ValidationException {
  export const filterSensitiveLog = (obj: ValidationException): any => ({
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
}

export namespace CreateTableRequest {
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
}

export namespace Table {
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
  export const filterSensitiveLog = (obj: CreateTableResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The operation tried to access a nonexistent resource. The resource might not be specified correctly, or its status might not be ACTIVE.</p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace ResourceNotFoundException {
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj,
  });
}

export interface DeleteDatabaseRequest {
  /**
   * <p>The name of the Timestream database to be deleted.</p>
   */
  DatabaseName: string | undefined;
}

export namespace DeleteDatabaseRequest {
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
  export const filterSensitiveLog = (obj: DescribeDatabaseResponse): any => ({
    ...obj,
  });
}

export interface DescribeEndpointsRequest {}

export namespace DescribeEndpointsRequest {
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
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
  });
}

export enum MeasureValueType {
  BIGINT = "BIGINT",
  BOOLEAN = "BOOLEAN",
  DOUBLE = "DOUBLE",
  VARCHAR = "VARCHAR",
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
   * Contains the data type of the measure value for the time series data point.
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
   * </p>
   */
  TimeUnit?: TimeUnit | string;

  /**
   * <p>64-bit attribute used for record updates.
   *          Write requests for duplicate data with a higher version number will update the existing measure value and version.
   *          In cases where the measure value is the same, <code>Version</code> will still be updated . Default value is to 1.</p>
   */
  Version?: number;
}

export namespace _Record {
  export const filterSensitiveLog = (obj: _Record): any => ({
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
   *                <p>
   *                  Records with duplicate data where there are multiple records with the same dimensions,
   *          timestamps, and measure names but different measure values.
   *                </p>
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
 *                <p>
 *                  Records with duplicate data where there are multiple records with the same dimensions,
 *          timestamps, and measure names but different measure values.
 *                </p>
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
 *          For more information, see <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html">Access Management</a> in the Timestream Developer Guide.
 *          </p>
 */
export interface RejectedRecordsException extends __SmithyException, $MetadataBearer {
  name: "RejectedRecordsException";
  $fault: "client";
  Message?: string;
  RejectedRecords?: RejectedRecord[];
}

export namespace RejectedRecordsException {
  export const filterSensitiveLog = (obj: RejectedRecordsException): any => ({
    ...obj,
  });
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
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
}

export interface TagResourceResponse {}

export namespace TagResourceResponse {
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
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
}

export interface UntagResourceResponse {}

export namespace UntagResourceResponse {
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
   * <p>The name of the Timesream table.</p>
   */
  TableName: string | undefined;

  /**
   * <p>The retention duration of the memory store and the magnetic store.</p>
   */
  RetentionProperties: RetentionProperties | undefined;
}

export namespace UpdateTableRequest {
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
   * <p>The name of the Timesream table.</p>
   */
  TableName: string | undefined;

  /**
   * <p>A record containing the common measure and dimension attributes
   *        shared across all the records in the request. The measure and dimension
   *        attributes specified in here will be merged with the measure and dimension
   *        attributes in the records object when the data is written into Timestream.
   *        </p>
   */
  CommonAttributes?: _Record;

  /**
   * <p>An array of records containing the unique dimension and measure
   *        attributes for each time series data point.
   *        </p>
   */
  Records: _Record[] | undefined;
}

export namespace WriteRecordsRequest {
  export const filterSensitiveLog = (obj: WriteRecordsRequest): any => ({
    ...obj,
  });
}
