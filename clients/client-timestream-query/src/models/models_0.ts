// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@aws-sdk/smithy-client";

import { TimestreamQueryServiceException as __BaseException } from "./TimestreamQueryServiceException";

/**
 * <p> You are not authorized to perform this action. </p>
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
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

export interface CancelQueryRequest {
  /**
   * <p> The ID of the query that needs to be cancelled. <code>QueryID</code> is returned as
   *             part of the query result. </p>
   */
  QueryId: string | undefined;
}

export interface CancelQueryResponse {
  /**
   * <p> A <code>CancellationMessage</code> is returned when a <code>CancelQuery</code>
   *             request for the query specified by <code>QueryId</code> has already been issued. </p>
   */
  CancellationMessage?: string;
}

/**
 * <p>
 *             Timestream was unable to fully process this request because of an internal
 *             server error. </p>
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  Message?: string;
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
 * <p>The request was denied due to request throttling.</p>
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  Message?: string;
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
 * <p> Invalid or malformed request. </p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
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

export enum ScalarType {
  BIGINT = "BIGINT",
  BOOLEAN = "BOOLEAN",
  DATE = "DATE",
  DOUBLE = "DOUBLE",
  INTEGER = "INTEGER",
  INTERVAL_DAY_TO_SECOND = "INTERVAL_DAY_TO_SECOND",
  INTERVAL_YEAR_TO_MONTH = "INTERVAL_YEAR_TO_MONTH",
  TIME = "TIME",
  TIMESTAMP = "TIMESTAMP",
  UNKNOWN = "UNKNOWN",
  VARCHAR = "VARCHAR",
}

/**
 * <p> Unable to poll results for a cancelled query. </p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
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

export enum S3EncryptionOption {
  SSE_KMS = "SSE_KMS",
  SSE_S3 = "SSE_S3",
}

/**
 * <p>Details on S3 location for error reports that result from running a query. </p>
 */
export interface S3Configuration {
  /**
   * <p> Name of the S3 bucket under which error reports will be created.</p>
   */
  BucketName: string | undefined;

  /**
   * <p> Prefix for the error report key. Timestream by default adds the following prefix to
   *             the error report path. </p>
   */
  ObjectKeyPrefix?: string;

  /**
   * <p> Encryption at rest options for the error reports. If no encryption option is
   *             specified, Timestream will choose SSE_S3 as default. </p>
   */
  EncryptionOption?: S3EncryptionOption | string;
}

/**
 * <p>Configuration required for error reporting.</p>
 */
export interface ErrorReportConfiguration {
  /**
   * <p>The S3 configuration for the error reports.</p>
   */
  S3Configuration: S3Configuration | undefined;
}

/**
 * <p>Details on SNS that are required to send the notification.</p>
 */
export interface SnsConfiguration {
  /**
   * <p>SNS topic ARN that the scheduled query status notifications will be sent to.</p>
   */
  TopicArn: string | undefined;
}

/**
 * <p>Notification configuration for a scheduled query. A notification is sent by
 *             Timestream when a scheduled query is created, its state is updated or when it is deleted. </p>
 */
export interface NotificationConfiguration {
  /**
   * <p>Details on SNS configuration. </p>
   */
  SnsConfiguration: SnsConfiguration | undefined;
}

/**
 * <p>Configuration of the schedule of the query.</p>
 */
export interface ScheduleConfiguration {
  /**
   * <p>An expression that denotes when to trigger the scheduled query run. This can be a cron
   *             expression or a rate expression. </p>
   */
  ScheduleExpression: string | undefined;
}

/**
 * <p>A tag is a label that you assign to a Timestream database and/or table. Each tag
 *             consists of a key and an optional value, both of which you define. Tags enable you to
 *             categorize databases and/or tables, for example, by purpose, owner, or environment.
 *         </p>
 */
export interface Tag {
  /**
   * <p>The key of the tag. Tag keys are case sensitive. </p>
   */
  Key: string | undefined;

  /**
   * <p>The value of the tag. Tag values are case sensitive and can be null. </p>
   */
  Value: string | undefined;
}

export enum DimensionValueType {
  VARCHAR = "VARCHAR",
}

/**
 * <p>This type is used to map column(s) from the query result to a dimension in the
 *             destination table.</p>
 */
export interface DimensionMapping {
  /**
   * <p>Column name from query result.</p>
   */
  Name: string | undefined;

  /**
   * <p>Type for the dimension. </p>
   */
  DimensionValueType: DimensionValueType | string | undefined;
}

export enum MeasureValueType {
  BIGINT = "BIGINT",
  BOOLEAN = "BOOLEAN",
  DOUBLE = "DOUBLE",
  MULTI = "MULTI",
  VARCHAR = "VARCHAR",
}

export enum ScalarMeasureValueType {
  BIGINT = "BIGINT",
  BOOLEAN = "BOOLEAN",
  DOUBLE = "DOUBLE",
  TIMESTAMP = "TIMESTAMP",
  VARCHAR = "VARCHAR",
}

/**
 * <p>Attribute mapping for MULTI value measures.</p>
 */
export interface MultiMeasureAttributeMapping {
  /**
   * <p>Source column from where the attribute value is to be read.</p>
   */
  SourceColumn: string | undefined;

  /**
   * <p>Custom name to be used for attribute name in derived table. If not provided, source
   *             column name would be used.</p>
   */
  TargetMultiMeasureAttributeName?: string;

  /**
   * <p>Type of the attribute to be read from the source column.</p>
   */
  MeasureValueType: ScalarMeasureValueType | string | undefined;
}

/**
 * <p>MixedMeasureMappings are mappings that can be used to ingest data into a mixture of
 *             narrow and multi measures in the derived table.</p>
 */
export interface MixedMeasureMapping {
  /**
   * <p>Refers to the value of measure_name in a result row. This field is required if
   *             MeasureNameColumn is provided.</p>
   */
  MeasureName?: string;

  /**
   * <p>This field refers to the source column from which measure-value is to be read for
   *             result materialization.</p>
   */
  SourceColumn?: string;

  /**
   * <p>Target measure name to be used. If not provided, the target measure name by default
   *             would be measure-name if provided, or sourceColumn otherwise. </p>
   */
  TargetMeasureName?: string;

  /**
   * <p>Type of the value that is to be read from sourceColumn. If the mapping is for MULTI,
   *             use MeasureValueType.MULTI.</p>
   */
  MeasureValueType: MeasureValueType | string | undefined;

  /**
   * <p>Required when measureValueType is MULTI. Attribute mappings for MULTI value
   *             measures.</p>
   */
  MultiMeasureAttributeMappings?: MultiMeasureAttributeMapping[];
}

/**
 * <p>Only one of MixedMeasureMappings or MultiMeasureMappings is to be provided.
 *             MultiMeasureMappings can be used to ingest data as multi measures in the derived
 *             table.</p>
 */
export interface MultiMeasureMappings {
  /**
   * <p>The name of the target multi-measure name in the derived table. This input is required
   *             when measureNameColumn is not provided. If MeasureNameColumn is provided, then value
   *             from that column will be used as multi-measure name.</p>
   */
  TargetMultiMeasureName?: string;

  /**
   * <p>Required. Attribute mappings to be used for mapping query results to ingest data for
   *             multi-measure attributes.</p>
   */
  MultiMeasureAttributeMappings: MultiMeasureAttributeMapping[] | undefined;
}

/**
 * <p> Configuration to write data into Timestream database and table. This configuration
 *             allows the user to map the query result select columns into the destination table
 *             columns. </p>
 */
export interface TimestreamConfiguration {
  /**
   * <p>Name of Timestream database to which the query result will be written.</p>
   */
  DatabaseName: string | undefined;

  /**
   * <p>Name of Timestream table that the query result will be written to. The table should
   *             be within the same database that is provided in Timestream configuration.</p>
   */
  TableName: string | undefined;

  /**
   * <p>Column from query result that should be used as the time column in destination table.
   *             Column type for this should be TIMESTAMP.</p>
   */
  TimeColumn: string | undefined;

  /**
   * <p> This is to allow mapping column(s) from the query result to the dimension in the
   *             destination table. </p>
   */
  DimensionMappings: DimensionMapping[] | undefined;

  /**
   * <p>Multi-measure mappings.</p>
   */
  MultiMeasureMappings?: MultiMeasureMappings;

  /**
   * <p>Specifies how to map measures to multi-measure records.</p>
   */
  MixedMeasureMappings?: MixedMeasureMapping[];

  /**
   * <p>Name of the measure column.</p>
   */
  MeasureNameColumn?: string;
}

/**
 * <p>Configuration used for writing the output of a query.</p>
 */
export interface TargetConfiguration {
  /**
   * <p>Configuration needed to write data into the Timestream database and table.</p>
   */
  TimestreamConfiguration: TimestreamConfiguration | undefined;
}

export interface CreateScheduledQueryRequest {
  /**
   * <p>Name of the scheduled query.</p>
   */
  Name: string | undefined;

  /**
   * <p>The query string to run. Parameter
   *             names can be specified in the query string <code>@</code> character followed by an
   *             identifier. The named Parameter <code>@scheduled_runtime</code> is reserved and can be used in the query to get the time at which the query is scheduled to run.</p>
   *             <p>The timestamp calculated according to the ScheduleConfiguration parameter, will be the value of <code>@scheduled_runtime</code> paramater for each query run.
   *             For example, consider an instance of a scheduled query executing on 2021-12-01 00:00:00. For this instance, the <code>@scheduled_runtime</code> parameter is
   *             initialized to the timestamp 2021-12-01 00:00:00 when invoking the query.</p>
   */
  QueryString: string | undefined;

  /**
   * <p>The schedule configuration for the query.</p>
   */
  ScheduleConfiguration: ScheduleConfiguration | undefined;

  /**
   * <p>Notification configuration for the scheduled query. A notification is sent by
   *             Timestream when a query run finishes, when the state is updated or when you delete it. </p>
   */
  NotificationConfiguration: NotificationConfiguration | undefined;

  /**
   * <p>Configuration used for writing the result of a query.</p>
   */
  TargetConfiguration?: TargetConfiguration;

  /**
   * <p>Using a ClientToken makes the call to CreateScheduledQuery idempotent, in other words, making the same request repeatedly will produce the same result. Making
   *             multiple identical CreateScheduledQuery requests has the same effect as making a single request.
   *
   *  </p>
   *          <ul>
   *             <li>
   *                 <p> If CreateScheduledQuery is called without a <code>ClientToken</code>, the
   *                     Query SDK generates a <code>ClientToken</code> on your behalf.</p>
   *             </li>
   *             <li>
   *                 <p> After 8 hours, any request with the same <code>ClientToken</code> is treated
   *                     as a new request. </p>
   *             </li>
   *          </ul>
   */
  ClientToken?: string;

  /**
   * <p>The ARN for the IAM role that Timestream will assume when running the scheduled query. </p>
   */
  ScheduledQueryExecutionRoleArn: string | undefined;

  /**
   * <p>A list of key-value pairs to label the scheduled query.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The Amazon KMS key used to encrypt the scheduled query resource, at-rest. If the Amazon KMS
   *             key is not specified, the scheduled query resource will be encrypted with a Timestream
   *             owned Amazon KMS key. To specify a KMS key, use the key ID, key ARN, alias name, or alias
   *             ARN. When using an alias name, prefix the name with <i>alias/</i>
   *          </p>
   *             <p>If ErrorReportConfiguration uses <code>SSE_KMS</code> as encryption type, the same KmsKeyId is used to encrypt the error report at rest.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>Configuration for error reporting. Error reports will be generated when a problem is encountered when writing the query results. </p>
   */
  ErrorReportConfiguration: ErrorReportConfiguration | undefined;
}

export interface CreateScheduledQueryResponse {
  /**
   * <p>ARN for the created scheduled query.</p>
   */
  Arn: string | undefined;
}

/**
 * <p>You have exceeded the service quota.</p>
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

export interface DeleteScheduledQueryRequest {
  /**
   * <p>The ARN of the scheduled query. </p>
   */
  ScheduledQueryArn: string | undefined;
}

/**
 * <p>The requested resource could not be found.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * <p>The ARN of the scheduled query.</p>
   */
  ScheduledQueryArn?: string;
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
    this.ScheduledQueryArn = opts.ScheduledQueryArn;
  }
}

export interface DescribeEndpointsRequest {}

/**
 * <p>Represents an available endpoint against which to make API calls against, as well as
 *             the TTL for that endpoint.</p>
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

export interface DescribeEndpointsResponse {
  /**
   * <p>An <code>Endpoints</code> object is returned when a <code>DescribeEndpoints</code>
   *             request is made.</p>
   */
  Endpoints: Endpoint[] | undefined;
}

export interface DescribeScheduledQueryRequest {
  /**
   * <p>The ARN of the scheduled query.</p>
   */
  ScheduledQueryArn: string | undefined;
}

/**
 * <p> S3 report location for the scheduled query run.</p>
 */
export interface S3ReportLocation {
  /**
   * <p> S3 bucket name. </p>
   */
  BucketName?: string;

  /**
   * <p>S3 key. </p>
   */
  ObjectKey?: string;
}

/**
 * <p>This contains the location of the error report for a single scheduled query call.
 *         </p>
 */
export interface ErrorReportLocation {
  /**
   * <p>The S3 location where error reports are written.</p>
   */
  S3ReportLocation?: S3ReportLocation;
}

/**
 * <p>Statistics for a single scheduled query run.</p>
 */
export interface ExecutionStats {
  /**
   * <p>Total time, measured in milliseconds, that was needed for the scheduled query run to complete.</p>
   */
  ExecutionTimeInMillis?: number;

  /**
   * <p>Data writes metered for records ingested in a single scheduled query run.</p>
   */
  DataWrites?: number;

  /**
   * <p>Bytes metered for a single scheduled query run.</p>
   */
  BytesMetered?: number;

  /**
   * <p>The number of records ingested for a single scheduled query run. </p>
   */
  RecordsIngested?: number;

  /**
   * <p>Number of rows present in the output from running a query before ingestion to
   *             destination data source.</p>
   */
  QueryResultRows?: number;
}

export enum ScheduledQueryRunStatus {
  AUTO_TRIGGER_FAILURE = "AUTO_TRIGGER_FAILURE",
  AUTO_TRIGGER_SUCCESS = "AUTO_TRIGGER_SUCCESS",
  MANUAL_TRIGGER_FAILURE = "MANUAL_TRIGGER_FAILURE",
  MANUAL_TRIGGER_SUCCESS = "MANUAL_TRIGGER_SUCCESS",
}

/**
 * <p>Run summary for the scheduled query</p>
 */
export interface ScheduledQueryRunSummary {
  /**
   * <p>InvocationTime for this run. This is the time at which the query is scheduled to run.
   *             Parameter <code>@scheduled_runtime</code> can be used in the query to get the value. </p>
   */
  InvocationTime?: Date;

  /**
   * <p>The actual time when the query was run.</p>
   */
  TriggerTime?: Date;

  /**
   * <p>The status of a scheduled query run.</p>
   */
  RunStatus?: ScheduledQueryRunStatus | string;

  /**
   * <p>Runtime statistics for a scheduled run.</p>
   */
  ExecutionStats?: ExecutionStats;

  /**
   * <p>S3 location for error report.</p>
   */
  ErrorReportLocation?: ErrorReportLocation;

  /**
   * <p>Error message for the scheduled query in case of failure. You might have to look at
   *             the error report to get more detailed error reasons. </p>
   */
  FailureReason?: string;
}

export enum ScheduledQueryState {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

/**
 * <p>Structure that describes scheduled query.</p>
 */
export interface ScheduledQueryDescription {
  /**
   * <p>Scheduled query ARN.</p>
   */
  Arn: string | undefined;

  /**
   * <p>Name of the scheduled query.</p>
   */
  Name: string | undefined;

  /**
   * <p>The query to be run.</p>
   */
  QueryString: string | undefined;

  /**
   * <p>Creation time of the scheduled query.</p>
   */
  CreationTime?: Date;

  /**
   * <p>State of the scheduled query. </p>
   */
  State: ScheduledQueryState | string | undefined;

  /**
   * <p>Last time the query was run.</p>
   */
  PreviousInvocationTime?: Date;

  /**
   * <p>The next time the scheduled query is scheduled to run.</p>
   */
  NextInvocationTime?: Date;

  /**
   * <p>Schedule configuration.</p>
   */
  ScheduleConfiguration: ScheduleConfiguration | undefined;

  /**
   * <p>Notification configuration.</p>
   */
  NotificationConfiguration: NotificationConfiguration | undefined;

  /**
   * <p>Scheduled query target store configuration.</p>
   */
  TargetConfiguration?: TargetConfiguration;

  /**
   * <p>IAM role that Timestream uses to run the schedule query.</p>
   */
  ScheduledQueryExecutionRoleArn?: string;

  /**
   * <p>A customer provided KMS key used to encrypt the scheduled query resource.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>Error-reporting configuration for the scheduled query.</p>
   */
  ErrorReportConfiguration?: ErrorReportConfiguration;

  /**
   * <p>Runtime summary for the last scheduled query run. </p>
   */
  LastRunSummary?: ScheduledQueryRunSummary;

  /**
   * <p>Runtime summary for the last five failed scheduled query runs.</p>
   */
  RecentlyFailedRuns?: ScheduledQueryRunSummary[];
}

export interface DescribeScheduledQueryResponse {
  /**
   * <p>The scheduled query.</p>
   */
  ScheduledQuery: ScheduledQueryDescription | undefined;
}

export interface ExecuteScheduledQueryRequest {
  /**
   * <p>ARN of the scheduled query.</p>
   */
  ScheduledQueryArn: string | undefined;

  /**
   * <p>The timestamp in UTC. Query will be run as if it was invoked at this timestamp. </p>
   */
  InvocationTime: Date | undefined;

  /**
   * <p>Not used. </p>
   */
  ClientToken?: string;
}

export interface ListScheduledQueriesRequest {
  /**
   * <p>The maximum number of items to return in the output. If the total number of items
   *             available is more than the value specified, a <code>NextToken</code> is provided in the
   *             output. To resume pagination, provide the <code>NextToken</code> value as the argument
   *             to the subsequent call to <code>ListScheduledQueriesRequest</code>.</p>
   */
  MaxResults?: number;

  /**
   * <p> A pagination token to resume pagination.</p>
   */
  NextToken?: string;
}

/**
 * <p>Destination for scheduled query.</p>
 */
export interface TimestreamDestination {
  /**
   * <p>Timestream database name. </p>
   */
  DatabaseName?: string;

  /**
   * <p>Timestream table name. </p>
   */
  TableName?: string;
}

/**
 * <p>Destination details to write data for a target data source. Current supported data
 *             source is Timestream.</p>
 */
export interface TargetDestination {
  /**
   * <p>Query result destination details for Timestream data source.</p>
   */
  TimestreamDestination?: TimestreamDestination;
}

/**
 * <p>Scheduled Query</p>
 */
export interface ScheduledQuery {
  /**
   * <p>The Amazon Resource Name.</p>
   */
  Arn: string | undefined;

  /**
   * <p>The name of the scheduled query.</p>
   */
  Name: string | undefined;

  /**
   * <p>The creation time of the scheduled query.</p>
   */
  CreationTime?: Date;

  /**
   * <p>State of scheduled query. </p>
   */
  State: ScheduledQueryState | string | undefined;

  /**
   * <p>The last time the scheduled query was run.</p>
   */
  PreviousInvocationTime?: Date;

  /**
   * <p>The next time the scheduled query is to be run.</p>
   */
  NextInvocationTime?: Date;

  /**
   * <p>Configuration for scheduled query error reporting.</p>
   */
  ErrorReportConfiguration?: ErrorReportConfiguration;

  /**
   * <p>Target data source where final scheduled query result will be written.</p>
   */
  TargetDestination?: TargetDestination;

  /**
   * <p>Status of the last scheduled query run.</p>
   */
  LastRunStatus?: ScheduledQueryRunStatus | string;
}

export interface ListScheduledQueriesResponse {
  /**
   * <p>A list of scheduled queries.</p>
   */
  ScheduledQueries: ScheduledQuery[] | undefined;

  /**
   * <p>A token to specify where to start paginating. This is the NextToken from a previously
   *             truncated response.</p>
   */
  NextToken?: string;
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The Timestream resource with tags to be listed. This value is an Amazon Resource Name
   *             (ARN).</p>
   */
  ResourceARN: string | undefined;

  /**
   * <p>The maximum number of tags to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>A pagination token to resume pagination.</p>
   */
  NextToken?: string;
}

export interface ListTagsForResourceResponse {
  /**
   * <p>The tags currently associated with the Timestream resource. </p>
   */
  Tags: Tag[] | undefined;

  /**
   * <p>A pagination token to resume pagination with a subsequent call to
   *                 <code>ListTagsForResourceResponse</code>.</p>
   */
  NextToken?: string;
}

export interface PrepareQueryRequest {
  /**
   * <p>The Timestream query string that you want to use as a prepared statement. Parameter
   *             names can be specified in the query string <code>@</code> character followed by an
   *             identifier. </p>
   */
  QueryString: string | undefined;

  /**
   * <p>By setting this value to <code>true</code>, Timestream will only validate that the
   *             query string is a valid Timestream query, and not store the prepared query for later
   *             use.</p>
   */
  ValidateOnly?: boolean;
}

/**
 * <p>
 *             Timestream was unable to run the query successfully. </p>
 */
export class QueryExecutionException extends __BaseException {
  readonly name: "QueryExecutionException" = "QueryExecutionException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<QueryExecutionException, __BaseException>) {
    super({
      name: "QueryExecutionException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, QueryExecutionException.prototype);
    this.Message = opts.Message;
  }
}

export interface QueryRequest {
  /**
   * <p> The query to be run by Timestream. </p>
   */
  QueryString: string | undefined;

  /**
   * <p> Unique, case-sensitive string of up to 64 ASCII characters specified when a
   *                 <code>Query</code> request is made. Providing a <code>ClientToken</code> makes the
   *             call to <code>Query</code>
   *             <i>idempotent</i>. This means that running the same query repeatedly will
   *             produce the same result. In other words, making multiple identical <code>Query</code>
   *             requests has the same effect as making a single request. When using
   *                 <code>ClientToken</code> in a query, note the following: </p>
   *         <ul>
   *             <li>
   *                 <p> If the Query API is instantiated without a <code>ClientToken</code>, the
   *                     Query SDK generates a <code>ClientToken</code> on your behalf.</p>
   *             </li>
   *             <li>
   *                 <p>If the <code>Query</code> invocation only contains the
   *                         <code>ClientToken</code> but does not include a <code>NextToken</code>, that
   *                     invocation of <code>Query</code> is assumed to be a new query run.</p>
   *             </li>
   *             <li>
   *                 <p>If the invocation contains <code>NextToken</code>, that particular invocation
   *                     is assumed to be a subsequent invocation of a prior call to the Query API, and a
   *                     result set is returned.</p>
   *             </li>
   *             <li>
   *                 <p> After 4 hours, any request with the same <code>ClientToken</code> is treated
   *                     as a new request. </p>
   *             </li>
   *          </ul>
   */
  ClientToken?: string;

  /**
   * <p> A pagination token used to return a set of results. When the <code>Query</code> API
   *             is invoked using <code>NextToken</code>, that particular invocation is assumed to be a
   *             subsequent invocation of a prior call to <code>Query</code>, and a result set is
   *             returned. However, if the <code>Query</code> invocation only contains the
   *                 <code>ClientToken</code>, that invocation of <code>Query</code> is assumed to be a
   *             new query run. </p>
   *         <p>Note the following when using NextToken in a query:</p>
   *         <ul>
   *             <li>
   *                 <p>A pagination token can be used for up to five <code>Query</code> invocations,
   *                     OR for a duration of up to 1 hour – whichever comes first.</p>
   *             </li>
   *             <li>
   *                 <p>Using the same <code>NextToken</code> will return the same set of records. To
   *                     keep paginating through the result set, you must to use the most recent
   *                         <code>nextToken</code>.</p>
   *             </li>
   *             <li>
   *                 <p>Suppose a <code>Query</code> invocation returns two <code>NextToken</code>
   *                     values, <code>TokenA</code> and <code>TokenB</code>. If <code>TokenB</code> is
   *                     used in a subsequent <code>Query</code> invocation, then <code>TokenA</code> is
   *                     invalidated and cannot be reused.</p>
   *             </li>
   *             <li>
   *                 <p>To request a previous result set from a query after pagination has begun, you
   *                     must re-invoke the Query API.</p>
   *             </li>
   *             <li>
   *                 <p>The latest <code>NextToken</code> should be used to paginate until
   *                         <code>null</code> is returned, at which point a new <code>NextToken</code>
   *                     should be used.</p>
   *             </li>
   *             <li>
   *                 <p> If the IAM principal of the query initiator and the result reader are not the
   *                     same and/or the query initiator and the result reader do not have the same query
   *                     string in the query requests, the query will fail with an <code>Invalid
   *                         pagination token</code> error. </p>
   *             </li>
   *          </ul>
   */
  NextToken?: string;

  /**
   * <p> The total number of rows to be returned in the <code>Query</code> output. The initial
   *             run of <code>Query</code> with a <code>MaxRows</code> value specified will return the
   *             result set of the query in two cases: </p>
   *         <ul>
   *             <li>
   *                 <p>The size of the result is less than <code>1MB</code>.</p>
   *             </li>
   *             <li>
   *                 <p>The number of rows in the result set is less than the value of
   *                         <code>maxRows</code>.</p>
   *             </li>
   *          </ul>
   *         <p>Otherwise, the initial invocation of <code>Query</code> only returns a
   *                 <code>NextToken</code>, which can then be used in subsequent calls to fetch the
   *             result set. To resume pagination, provide the <code>NextToken</code> value in the
   *             subsequent command.</p>
   *         <p>If the row size is large (e.g. a row has many columns), Timestream may return
   *             fewer rows to keep the response size from exceeding the 1 MB limit. If
   *                 <code>MaxRows</code> is not provided, Timestream will send the necessary
   *             number of rows to meet the 1 MB limit.</p>
   */
  MaxRows?: number;
}

/**
 * <p>Information about the status of the query, including progress and bytes
 *             scanned.</p>
 */
export interface QueryStatus {
  /**
   * <p>The progress of the query, expressed as a percentage.</p>
   */
  ProgressPercentage?: number;

  /**
   * <p>The amount of data scanned by the query in bytes. This is a cumulative sum and
   *             represents the total amount of bytes scanned since the query was started. </p>
   */
  CumulativeBytesScanned?: number;

  /**
   * <p>The amount of data scanned by the query in bytes that you will be charged for. This is
   *             a cumulative sum and represents the total amount of data that you will be charged for
   *             since the query was started. The charge is applied only once and is either applied when
   *             the query completes running or when the query is cancelled. </p>
   */
  CumulativeBytesMetered?: number;
}

export interface TagResourceRequest {
  /**
   * <p>Identifies the Timestream resource to which tags should be added. This value is an
   *             Amazon Resource Name (ARN).</p>
   */
  ResourceARN: string | undefined;

  /**
   * <p>The tags to be assigned to the Timestream resource.</p>
   */
  Tags: Tag[] | undefined;
}

export interface TagResourceResponse {}

export interface UntagResourceRequest {
  /**
   * <p>The Timestream resource that the tags will be removed from. This value is an Amazon
   *             Resource Name (ARN). </p>
   */
  ResourceARN: string | undefined;

  /**
   * <p>A list of tags keys. Existing tags of the resource whose keys are members of this list
   *             will be removed from the Timestream resource. </p>
   */
  TagKeys: string[] | undefined;
}

export interface UntagResourceResponse {}

export interface UpdateScheduledQueryRequest {
  /**
   * <p>ARN of the scheuled query.</p>
   */
  ScheduledQueryArn: string | undefined;

  /**
   * <p>State of the scheduled query. </p>
   */
  State: ScheduledQueryState | string | undefined;
}

/**
 * <p> Contains the metadata for query results such as the column names, data types, and
 *             other attributes. </p>
 */
export interface ColumnInfo {
  /**
   * <p> The name of the result set column. The name of the result set is available for
   *             columns of all data types except for arrays. </p>
   */
  Name?: string;

  /**
   * <p>The data type of the result set column. The data type can be a scalar or complex.
   *             Scalar data types are integers, strings, doubles, Booleans, and others. Complex data
   *             types are types such as arrays, rows, and others. </p>
   */
  Type: Type | undefined;
}

/**
 * <p>Contains the data type of a column in a query result set. The data type can be scalar
 *             or complex. The supported scalar data types are integers, Boolean, string, double,
 *             timestamp, date, time, and intervals. The supported complex data types are arrays, rows,
 *             and timeseries.</p>
 */
export interface Type {
  /**
   * <p>Indicates if the column is of type string, integer, Boolean, double, timestamp, date,
   *             time. </p>
   */
  ScalarType?: ScalarType | string;

  /**
   * <p>Indicates if the column is an array.</p>
   */
  ArrayColumnInfo?: ColumnInfo;

  /**
   * <p>Indicates if the column is a timeseries data type.</p>
   */
  TimeSeriesMeasureValueColumnInfo?: ColumnInfo;

  /**
   * <p>Indicates if the column is a row.</p>
   */
  RowColumnInfo?: ColumnInfo[];
}

/**
 * <p> Datum represents a single data point in a query result. </p>
 */
export interface Datum {
  /**
   * <p> Indicates if the data point is a scalar value such as integer, string, double, or
   *             Boolean. </p>
   */
  ScalarValue?: string;

  /**
   * <p> Indicates if the data point is a timeseries data type. </p>
   */
  TimeSeriesValue?: TimeSeriesDataPoint[];

  /**
   * <p> Indicates if the data point is an array. </p>
   */
  ArrayValue?: Datum[];

  /**
   * <p> Indicates if the data point is a row. </p>
   */
  RowValue?: Row;

  /**
   * <p> Indicates if the data point is null. </p>
   */
  NullValue?: boolean;
}

/**
 * <p>Mapping for named parameters.</p>
 */
export interface ParameterMapping {
  /**
   * <p>Parameter name.</p>
   */
  Name: string | undefined;

  /**
   * <p>Contains the data type of a column in a query result set. The data type can be scalar
   *             or complex. The supported scalar data types are integers, Boolean, string, double,
   *             timestamp, date, time, and intervals. The supported complex data types are arrays, rows,
   *             and timeseries.</p>
   */
  Type: Type | undefined;
}

/**
 * <p>Details of the column that is returned by the query. </p>
 */
export interface SelectColumn {
  /**
   * <p>Name of the column.</p>
   */
  Name?: string;

  /**
   * <p>Contains the data type of a column in a query result set. The data type can be scalar
   *             or complex. The supported scalar data types are integers, Boolean, string, double,
   *             timestamp, date, time, and intervals. The supported complex data types are arrays, rows,
   *             and timeseries.</p>
   */
  Type?: Type;

  /**
   * <p> Database that has this column.</p>
   */
  DatabaseName?: string;

  /**
   * <p>Table within the database that has this column. </p>
   */
  TableName?: string;

  /**
   * <p>True, if the column name was aliased by the query. False otherwise.</p>
   */
  Aliased?: boolean;
}

/**
 * <p>The timeseries data type represents the values of a measure over time. A time series
 *             is an array of rows of timestamps and measure values, with rows sorted in ascending
 *             order of time. A TimeSeriesDataPoint is a single data point in the time series. It
 *             represents a tuple of (time, measure value) in a time series. </p>
 */
export interface TimeSeriesDataPoint {
  /**
   * <p>The timestamp when the measure value was collected.</p>
   */
  Time: string | undefined;

  /**
   * <p>The measure value for the data point.</p>
   */
  Value: Datum | undefined;
}

/**
 * <p>Represents a single row in the query results.</p>
 */
export interface Row {
  /**
   * <p>List of data points in a single row of the result set.</p>
   */
  Data: Datum[] | undefined;
}

export interface QueryResponse {
  /**
   * <p> A unique ID for the given query. </p>
   */
  QueryId: string | undefined;

  /**
   * <p> A pagination token that can be used again on a <code>Query</code> call to get the
   *             next set of results. </p>
   */
  NextToken?: string;

  /**
   * <p> The result set rows returned by the query. </p>
   */
  Rows: Row[] | undefined;

  /**
   * <p> The column data types of the returned result set. </p>
   */
  ColumnInfo: ColumnInfo[] | undefined;

  /**
   * <p>Information about the status of the query, including progress and bytes
   *             scanned.</p>
   */
  QueryStatus?: QueryStatus;
}

export interface PrepareQueryResponse {
  /**
   * <p>The query string that you want prepare.</p>
   */
  QueryString: string | undefined;

  /**
   * <p>A list of SELECT clause columns of the submitted query string. </p>
   */
  Columns: SelectColumn[] | undefined;

  /**
   * <p>A list of parameters used in the submitted query string. </p>
   */
  Parameters: ParameterMapping[] | undefined;
}

/**
 * @internal
 */
export const CancelQueryRequestFilterSensitiveLog = (obj: CancelQueryRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CancelQueryResponseFilterSensitiveLog = (obj: CancelQueryResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const S3ConfigurationFilterSensitiveLog = (obj: S3Configuration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ErrorReportConfigurationFilterSensitiveLog = (obj: ErrorReportConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SnsConfigurationFilterSensitiveLog = (obj: SnsConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NotificationConfigurationFilterSensitiveLog = (obj: NotificationConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ScheduleConfigurationFilterSensitiveLog = (obj: ScheduleConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagFilterSensitiveLog = (obj: Tag): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DimensionMappingFilterSensitiveLog = (obj: DimensionMapping): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MultiMeasureAttributeMappingFilterSensitiveLog = (obj: MultiMeasureAttributeMapping): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MixedMeasureMappingFilterSensitiveLog = (obj: MixedMeasureMapping): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MultiMeasureMappingsFilterSensitiveLog = (obj: MultiMeasureMappings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TimestreamConfigurationFilterSensitiveLog = (obj: TimestreamConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TargetConfigurationFilterSensitiveLog = (obj: TargetConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateScheduledQueryRequestFilterSensitiveLog = (obj: CreateScheduledQueryRequest): any => ({
  ...obj,
  ...(obj.QueryString && { QueryString: SENSITIVE_STRING }),
  ...(obj.ClientToken && { ClientToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateScheduledQueryResponseFilterSensitiveLog = (obj: CreateScheduledQueryResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteScheduledQueryRequestFilterSensitiveLog = (obj: DeleteScheduledQueryRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeEndpointsRequestFilterSensitiveLog = (obj: DescribeEndpointsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EndpointFilterSensitiveLog = (obj: Endpoint): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeEndpointsResponseFilterSensitiveLog = (obj: DescribeEndpointsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeScheduledQueryRequestFilterSensitiveLog = (obj: DescribeScheduledQueryRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const S3ReportLocationFilterSensitiveLog = (obj: S3ReportLocation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ErrorReportLocationFilterSensitiveLog = (obj: ErrorReportLocation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ExecutionStatsFilterSensitiveLog = (obj: ExecutionStats): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ScheduledQueryRunSummaryFilterSensitiveLog = (obj: ScheduledQueryRunSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ScheduledQueryDescriptionFilterSensitiveLog = (obj: ScheduledQueryDescription): any => ({
  ...obj,
  ...(obj.QueryString && { QueryString: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DescribeScheduledQueryResponseFilterSensitiveLog = (obj: DescribeScheduledQueryResponse): any => ({
  ...obj,
  ...(obj.ScheduledQuery && { ScheduledQuery: ScheduledQueryDescriptionFilterSensitiveLog(obj.ScheduledQuery) }),
});

/**
 * @internal
 */
export const ExecuteScheduledQueryRequestFilterSensitiveLog = (obj: ExecuteScheduledQueryRequest): any => ({
  ...obj,
  ...(obj.ClientToken && { ClientToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListScheduledQueriesRequestFilterSensitiveLog = (obj: ListScheduledQueriesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TimestreamDestinationFilterSensitiveLog = (obj: TimestreamDestination): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TargetDestinationFilterSensitiveLog = (obj: TargetDestination): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ScheduledQueryFilterSensitiveLog = (obj: ScheduledQuery): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListScheduledQueriesResponseFilterSensitiveLog = (obj: ListScheduledQueriesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceRequestFilterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceResponseFilterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PrepareQueryRequestFilterSensitiveLog = (obj: PrepareQueryRequest): any => ({
  ...obj,
  ...(obj.QueryString && { QueryString: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const QueryRequestFilterSensitiveLog = (obj: QueryRequest): any => ({
  ...obj,
  ...(obj.QueryString && { QueryString: SENSITIVE_STRING }),
  ...(obj.ClientToken && { ClientToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const QueryStatusFilterSensitiveLog = (obj: QueryStatus): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceRequestFilterSensitiveLog = (obj: TagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceResponseFilterSensitiveLog = (obj: TagResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceRequestFilterSensitiveLog = (obj: UntagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceResponseFilterSensitiveLog = (obj: UntagResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateScheduledQueryRequestFilterSensitiveLog = (obj: UpdateScheduledQueryRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ColumnInfoFilterSensitiveLog = (obj: ColumnInfo): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TypeFilterSensitiveLog = (obj: Type): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DatumFilterSensitiveLog = (obj: Datum): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ParameterMappingFilterSensitiveLog = (obj: ParameterMapping): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SelectColumnFilterSensitiveLog = (obj: SelectColumn): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TimeSeriesDataPointFilterSensitiveLog = (obj: TimeSeriesDataPoint): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RowFilterSensitiveLog = (obj: Row): any => ({
  ...obj,
});

/**
 * @internal
 */
export const QueryResponseFilterSensitiveLog = (obj: QueryResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PrepareQueryResponseFilterSensitiveLog = (obj: PrepareQueryResponse): any => ({
  ...obj,
  ...(obj.QueryString && { QueryString: SENSITIVE_STRING }),
});
