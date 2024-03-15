// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { TimestreamQueryServiceException as __BaseException } from "./TimestreamQueryServiceException";

/**
 * <p> You are not authorized to perform this action. </p>
 * @public
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

/**
 * @public
 */
export interface CancelQueryRequest {
  /**
   * <p> The ID of the query that needs to be cancelled. <code>QueryID</code> is returned as
   *             part of the query result. </p>
   * @public
   */
  QueryId: string | undefined;
}

/**
 * @public
 */
export interface CancelQueryResponse {
  /**
   * <p> A <code>CancellationMessage</code> is returned when a <code>CancelQuery</code>
   *             request for the query specified by <code>QueryId</code> has already been issued. </p>
   * @public
   */
  CancellationMessage?: string;
}

/**
 * <p>
 *             Timestream was unable to fully process this request because of an internal
 *             server error. </p>
 * @public
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
 * @public
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
 * @public
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
 * @public
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

/**
 * @public
 * @enum
 */
export const ScalarType = {
  BIGINT: "BIGINT",
  BOOLEAN: "BOOLEAN",
  DATE: "DATE",
  DOUBLE: "DOUBLE",
  INTEGER: "INTEGER",
  INTERVAL_DAY_TO_SECOND: "INTERVAL_DAY_TO_SECOND",
  INTERVAL_YEAR_TO_MONTH: "INTERVAL_YEAR_TO_MONTH",
  TIME: "TIME",
  TIMESTAMP: "TIMESTAMP",
  UNKNOWN: "UNKNOWN",
  VARCHAR: "VARCHAR",
} as const;

/**
 * @public
 */
export type ScalarType = (typeof ScalarType)[keyof typeof ScalarType];

/**
 * <p> Unable to poll results for a cancelled query. </p>
 * @public
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
 * <p>Details on S3 location for error reports that result from running a query. </p>
 * @public
 */
export interface S3Configuration {
  /**
   * <p> Name of the S3 bucket under which error reports will be created.</p>
   * @public
   */
  BucketName: string | undefined;

  /**
   * <p> Prefix for the error report key. Timestream by default adds the following prefix to
   *             the error report path. </p>
   * @public
   */
  ObjectKeyPrefix?: string;

  /**
   * <p> Encryption at rest options for the error reports. If no encryption option is
   *             specified, Timestream will choose SSE_S3 as default. </p>
   * @public
   */
  EncryptionOption?: S3EncryptionOption;
}

/**
 * <p>Configuration required for error reporting.</p>
 * @public
 */
export interface ErrorReportConfiguration {
  /**
   * <p>The S3 configuration for the error reports.</p>
   * @public
   */
  S3Configuration: S3Configuration | undefined;
}

/**
 * <p>Details on SNS that are required to send the notification.</p>
 * @public
 */
export interface SnsConfiguration {
  /**
   * <p>SNS topic ARN that the scheduled query status notifications will be sent to.</p>
   * @public
   */
  TopicArn: string | undefined;
}

/**
 * <p>Notification configuration for a scheduled query. A notification is sent by
 *             Timestream when a scheduled query is created, its state is updated or when it is deleted. </p>
 * @public
 */
export interface NotificationConfiguration {
  /**
   * <p>Details on SNS configuration. </p>
   * @public
   */
  SnsConfiguration: SnsConfiguration | undefined;
}

/**
 * <p>Configuration of the schedule of the query.</p>
 * @public
 */
export interface ScheduleConfiguration {
  /**
   * <p>An expression that denotes when to trigger the scheduled query run. This can be a cron
   *             expression or a rate expression. </p>
   * @public
   */
  ScheduleExpression: string | undefined;
}

/**
 * <p>A tag is a label that you assign to a Timestream database and/or table. Each tag
 *             consists of a key and an optional value, both of which you define. Tags enable you to
 *             categorize databases and/or tables, for example, by purpose, owner, or environment.
 *         </p>
 * @public
 */
export interface Tag {
  /**
   * <p>The key of the tag. Tag keys are case sensitive. </p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>The value of the tag. Tag values are case sensitive and can be null. </p>
   * @public
   */
  Value: string | undefined;
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
 * <p>This type is used to map column(s) from the query result to a dimension in the
 *             destination table.</p>
 * @public
 */
export interface DimensionMapping {
  /**
   * <p>Column name from query result.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>Type for the dimension. </p>
   * @public
   */
  DimensionValueType: DimensionValueType | undefined;
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
 * <p>Attribute mapping for MULTI value measures.</p>
 * @public
 */
export interface MultiMeasureAttributeMapping {
  /**
   * <p>Source column from where the attribute value is to be read.</p>
   * @public
   */
  SourceColumn: string | undefined;

  /**
   * <p>Custom name to be used for attribute name in derived table. If not provided, source
   *             column name would be used.</p>
   * @public
   */
  TargetMultiMeasureAttributeName?: string;

  /**
   * <p>Type of the attribute to be read from the source column.</p>
   * @public
   */
  MeasureValueType: ScalarMeasureValueType | undefined;
}

/**
 * <p>MixedMeasureMappings are mappings that can be used to ingest data into a mixture of
 *             narrow and multi measures in the derived table.</p>
 * @public
 */
export interface MixedMeasureMapping {
  /**
   * <p>Refers to the value of measure_name in a result row. This field is required if
   *             MeasureNameColumn is provided.</p>
   * @public
   */
  MeasureName?: string;

  /**
   * <p>This field refers to the source column from which measure-value is to be read for
   *             result materialization.</p>
   * @public
   */
  SourceColumn?: string;

  /**
   * <p>Target measure name to be used. If not provided, the target measure name by default
   *             would be measure-name if provided, or sourceColumn otherwise. </p>
   * @public
   */
  TargetMeasureName?: string;

  /**
   * <p>Type of the value that is to be read from sourceColumn. If the mapping is for MULTI,
   *             use MeasureValueType.MULTI.</p>
   * @public
   */
  MeasureValueType: MeasureValueType | undefined;

  /**
   * <p>Required when measureValueType is MULTI. Attribute mappings for MULTI value
   *             measures.</p>
   * @public
   */
  MultiMeasureAttributeMappings?: MultiMeasureAttributeMapping[];
}

/**
 * <p>Only one of MixedMeasureMappings or MultiMeasureMappings is to be provided.
 *             MultiMeasureMappings can be used to ingest data as multi measures in the derived
 *             table.</p>
 * @public
 */
export interface MultiMeasureMappings {
  /**
   * <p>The name of the target multi-measure name in the derived table. This input is required
   *             when measureNameColumn is not provided. If MeasureNameColumn is provided, then value
   *             from that column will be used as multi-measure name.</p>
   * @public
   */
  TargetMultiMeasureName?: string;

  /**
   * <p>Required. Attribute mappings to be used for mapping query results to ingest data for
   *             multi-measure attributes.</p>
   * @public
   */
  MultiMeasureAttributeMappings: MultiMeasureAttributeMapping[] | undefined;
}

/**
 * <p> Configuration to write data into Timestream database and table. This configuration
 *             allows the user to map the query result select columns into the destination table
 *             columns. </p>
 * @public
 */
export interface TimestreamConfiguration {
  /**
   * <p>Name of Timestream database to which the query result will be written.</p>
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * <p>Name of Timestream table that the query result will be written to. The table should
   *             be within the same database that is provided in Timestream configuration.</p>
   * @public
   */
  TableName: string | undefined;

  /**
   * <p>Column from query result that should be used as the time column in destination table.
   *             Column type for this should be TIMESTAMP.</p>
   * @public
   */
  TimeColumn: string | undefined;

  /**
   * <p> This is to allow mapping column(s) from the query result to the dimension in the
   *             destination table. </p>
   * @public
   */
  DimensionMappings: DimensionMapping[] | undefined;

  /**
   * <p>Multi-measure mappings.</p>
   * @public
   */
  MultiMeasureMappings?: MultiMeasureMappings;

  /**
   * <p>Specifies how to map measures to multi-measure records.</p>
   * @public
   */
  MixedMeasureMappings?: MixedMeasureMapping[];

  /**
   * <p>Name of the measure column.</p>
   * @public
   */
  MeasureNameColumn?: string;
}

/**
 * <p>Configuration used for writing the output of a query.</p>
 * @public
 */
export interface TargetConfiguration {
  /**
   * <p>Configuration needed to write data into the Timestream database and table.</p>
   * @public
   */
  TimestreamConfiguration: TimestreamConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateScheduledQueryRequest {
  /**
   * <p>Name of the scheduled query.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The query string to run. Parameter
   *             names can be specified in the query string <code>@</code> character followed by an
   *             identifier. The named Parameter <code>@scheduled_runtime</code> is reserved and can be used in the query to get the time at which the query is scheduled to run.</p>
   *          <p>The timestamp calculated according to the ScheduleConfiguration parameter, will be the value of <code>@scheduled_runtime</code> paramater for each query run.
   *             For example, consider an instance of a scheduled query executing on 2021-12-01 00:00:00. For this instance, the <code>@scheduled_runtime</code> parameter is
   *             initialized to the timestamp 2021-12-01 00:00:00 when invoking the query.</p>
   * @public
   */
  QueryString: string | undefined;

  /**
   * <p>The schedule configuration for the query.</p>
   * @public
   */
  ScheduleConfiguration: ScheduleConfiguration | undefined;

  /**
   * <p>Notification configuration for the scheduled query. A notification is sent by
   *             Timestream when a query run finishes, when the state is updated or when you delete it. </p>
   * @public
   */
  NotificationConfiguration: NotificationConfiguration | undefined;

  /**
   * <p>Configuration used for writing the result of a query.</p>
   * @public
   */
  TargetConfiguration?: TargetConfiguration;

  /**
   * <p>Using a ClientToken makes the call to CreateScheduledQuery idempotent, in other words, making the same request repeatedly will produce the same result. Making
   *             multiple identical CreateScheduledQuery requests has the same effect as making a single request.
   *
   *  </p>
   *          <ul>
   *             <li>
   *                <p> If CreateScheduledQuery is called without a <code>ClientToken</code>, the
   *                     Query SDK generates a <code>ClientToken</code> on your behalf.</p>
   *             </li>
   *             <li>
   *                <p> After 8 hours, any request with the same <code>ClientToken</code> is treated
   *                     as a new request. </p>
   *             </li>
   *          </ul>
   * @public
   */
  ClientToken?: string;

  /**
   * <p>The ARN for the IAM role that Timestream will assume when running the scheduled query. </p>
   * @public
   */
  ScheduledQueryExecutionRoleArn: string | undefined;

  /**
   * <p>A list of key-value pairs to label the scheduled query.</p>
   * @public
   */
  Tags?: Tag[];

  /**
   * <p>The Amazon KMS key used to encrypt the scheduled query resource, at-rest. If the Amazon KMS
   *             key is not specified, the scheduled query resource will be encrypted with a Timestream
   *             owned Amazon KMS key. To specify a KMS key, use the key ID, key ARN, alias name, or alias
   *             ARN. When using an alias name, prefix the name with <i>alias/</i>
   *          </p>
   *          <p>If ErrorReportConfiguration uses <code>SSE_KMS</code> as encryption type, the same KmsKeyId is used to encrypt the error report at rest.</p>
   * @public
   */
  KmsKeyId?: string;

  /**
   * <p>Configuration for error reporting. Error reports will be generated when a problem is encountered when writing the query results. </p>
   * @public
   */
  ErrorReportConfiguration: ErrorReportConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateScheduledQueryResponse {
  /**
   * <p>ARN for the created scheduled query.</p>
   * @public
   */
  Arn: string | undefined;
}

/**
 * <p>You have exceeded the service quota.</p>
 * @public
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
 */
export interface DeleteScheduledQueryRequest {
  /**
   * <p>The ARN of the scheduled query. </p>
   * @public
   */
  ScheduledQueryArn: string | undefined;
}

/**
 * <p>The requested resource could not be found.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * <p>The ARN of the scheduled query.</p>
   * @public
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

/**
 * @public
 */
export interface DescribeEndpointsRequest {}

/**
 * <p>Represents an available endpoint against which to make API calls against, as well as
 *             the TTL for that endpoint.</p>
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
   *             request is made.</p>
   * @public
   */
  Endpoints: Endpoint[] | undefined;
}

/**
 * @public
 */
export interface DescribeScheduledQueryRequest {
  /**
   * <p>The ARN of the scheduled query.</p>
   * @public
   */
  ScheduledQueryArn: string | undefined;
}

/**
 * <p> S3 report location for the scheduled query run.</p>
 * @public
 */
export interface S3ReportLocation {
  /**
   * <p> S3 bucket name. </p>
   * @public
   */
  BucketName?: string;

  /**
   * <p>S3 key. </p>
   * @public
   */
  ObjectKey?: string;
}

/**
 * <p>This contains the location of the error report for a single scheduled query call.
 *         </p>
 * @public
 */
export interface ErrorReportLocation {
  /**
   * <p>The S3 location where error reports are written.</p>
   * @public
   */
  S3ReportLocation?: S3ReportLocation;
}

/**
 * <p>Statistics for a single scheduled query run.</p>
 * @public
 */
export interface ExecutionStats {
  /**
   * <p>Total time, measured in milliseconds, that was needed for the scheduled query run to complete.</p>
   * @public
   */
  ExecutionTimeInMillis?: number;

  /**
   * <p>Data writes metered for records ingested in a single scheduled query run.</p>
   * @public
   */
  DataWrites?: number;

  /**
   * <p>Bytes metered for a single scheduled query run.</p>
   * @public
   */
  BytesMetered?: number;

  /**
   * <p>The number of records ingested for a single scheduled query run. </p>
   * @public
   */
  RecordsIngested?: number;

  /**
   * <p>Number of rows present in the output from running a query before ingestion to
   *             destination data source.</p>
   * @public
   */
  QueryResultRows?: number;
}

/**
 * @public
 * @enum
 */
export const ScheduledQueryRunStatus = {
  AUTO_TRIGGER_FAILURE: "AUTO_TRIGGER_FAILURE",
  AUTO_TRIGGER_SUCCESS: "AUTO_TRIGGER_SUCCESS",
  MANUAL_TRIGGER_FAILURE: "MANUAL_TRIGGER_FAILURE",
  MANUAL_TRIGGER_SUCCESS: "MANUAL_TRIGGER_SUCCESS",
} as const;

/**
 * @public
 */
export type ScheduledQueryRunStatus = (typeof ScheduledQueryRunStatus)[keyof typeof ScheduledQueryRunStatus];

/**
 * <p>Run summary for the scheduled query</p>
 * @public
 */
export interface ScheduledQueryRunSummary {
  /**
   * <p>InvocationTime for this run. This is the time at which the query is scheduled to run.
   *             Parameter <code>@scheduled_runtime</code> can be used in the query to get the value. </p>
   * @public
   */
  InvocationTime?: Date;

  /**
   * <p>The actual time when the query was run.</p>
   * @public
   */
  TriggerTime?: Date;

  /**
   * <p>The status of a scheduled query run.</p>
   * @public
   */
  RunStatus?: ScheduledQueryRunStatus;

  /**
   * <p>Runtime statistics for a scheduled run.</p>
   * @public
   */
  ExecutionStats?: ExecutionStats;

  /**
   * <p>S3 location for error report.</p>
   * @public
   */
  ErrorReportLocation?: ErrorReportLocation;

  /**
   * <p>Error message for the scheduled query in case of failure. You might have to look at
   *             the error report to get more detailed error reasons. </p>
   * @public
   */
  FailureReason?: string;
}

/**
 * @public
 * @enum
 */
export const ScheduledQueryState = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type ScheduledQueryState = (typeof ScheduledQueryState)[keyof typeof ScheduledQueryState];

/**
 * <p>Structure that describes scheduled query.</p>
 * @public
 */
export interface ScheduledQueryDescription {
  /**
   * <p>Scheduled query ARN.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>Name of the scheduled query.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The query to be run.</p>
   * @public
   */
  QueryString: string | undefined;

  /**
   * <p>Creation time of the scheduled query.</p>
   * @public
   */
  CreationTime?: Date;

  /**
   * <p>State of the scheduled query. </p>
   * @public
   */
  State: ScheduledQueryState | undefined;

  /**
   * <p>Last time the query was run.</p>
   * @public
   */
  PreviousInvocationTime?: Date;

  /**
   * <p>The next time the scheduled query is scheduled to run.</p>
   * @public
   */
  NextInvocationTime?: Date;

  /**
   * <p>Schedule configuration.</p>
   * @public
   */
  ScheduleConfiguration: ScheduleConfiguration | undefined;

  /**
   * <p>Notification configuration.</p>
   * @public
   */
  NotificationConfiguration: NotificationConfiguration | undefined;

  /**
   * <p>Scheduled query target store configuration.</p>
   * @public
   */
  TargetConfiguration?: TargetConfiguration;

  /**
   * <p>IAM role that Timestream uses to run the schedule query.</p>
   * @public
   */
  ScheduledQueryExecutionRoleArn?: string;

  /**
   * <p>A customer provided KMS key used to encrypt the scheduled query resource.</p>
   * @public
   */
  KmsKeyId?: string;

  /**
   * <p>Error-reporting configuration for the scheduled query.</p>
   * @public
   */
  ErrorReportConfiguration?: ErrorReportConfiguration;

  /**
   * <p>Runtime summary for the last scheduled query run. </p>
   * @public
   */
  LastRunSummary?: ScheduledQueryRunSummary;

  /**
   * <p>Runtime summary for the last five failed scheduled query runs.</p>
   * @public
   */
  RecentlyFailedRuns?: ScheduledQueryRunSummary[];
}

/**
 * @public
 */
export interface DescribeScheduledQueryResponse {
  /**
   * <p>The scheduled query.</p>
   * @public
   */
  ScheduledQuery: ScheduledQueryDescription | undefined;
}

/**
 * @public
 */
export interface ExecuteScheduledQueryRequest {
  /**
   * <p>ARN of the scheduled query.</p>
   * @public
   */
  ScheduledQueryArn: string | undefined;

  /**
   * <p>The timestamp in UTC. Query will be run as if it was invoked at this timestamp. </p>
   * @public
   */
  InvocationTime: Date | undefined;

  /**
   * <p>Not used. </p>
   * @public
   */
  ClientToken?: string;
}

/**
 * @public
 */
export interface ListScheduledQueriesRequest {
  /**
   * <p>The maximum number of items to return in the output. If the total number of items
   *             available is more than the value specified, a <code>NextToken</code> is provided in the
   *             output. To resume pagination, provide the <code>NextToken</code> value as the argument
   *             to the subsequent call to <code>ListScheduledQueriesRequest</code>.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p> A pagination token to resume pagination.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * <p>Destination for scheduled query.</p>
 * @public
 */
export interface TimestreamDestination {
  /**
   * <p>Timestream database name. </p>
   * @public
   */
  DatabaseName?: string;

  /**
   * <p>Timestream table name. </p>
   * @public
   */
  TableName?: string;
}

/**
 * <p>Destination details to write data for a target data source. Current supported data
 *             source is Timestream.</p>
 * @public
 */
export interface TargetDestination {
  /**
   * <p>Query result destination details for Timestream data source.</p>
   * @public
   */
  TimestreamDestination?: TimestreamDestination;
}

/**
 * <p>Scheduled Query</p>
 * @public
 */
export interface ScheduledQuery {
  /**
   * <p>The Amazon Resource Name.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The name of the scheduled query.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The creation time of the scheduled query.</p>
   * @public
   */
  CreationTime?: Date;

  /**
   * <p>State of scheduled query. </p>
   * @public
   */
  State: ScheduledQueryState | undefined;

  /**
   * <p>The last time the scheduled query was run.</p>
   * @public
   */
  PreviousInvocationTime?: Date;

  /**
   * <p>The next time the scheduled query is to be run.</p>
   * @public
   */
  NextInvocationTime?: Date;

  /**
   * <p>Configuration for scheduled query error reporting.</p>
   * @public
   */
  ErrorReportConfiguration?: ErrorReportConfiguration;

  /**
   * <p>Target data source where final scheduled query result will be written.</p>
   * @public
   */
  TargetDestination?: TargetDestination;

  /**
   * <p>Status of the last scheduled query run.</p>
   * @public
   */
  LastRunStatus?: ScheduledQueryRunStatus;
}

/**
 * @public
 */
export interface ListScheduledQueriesResponse {
  /**
   * <p>A list of scheduled queries.</p>
   * @public
   */
  ScheduledQueries: ScheduledQuery[] | undefined;

  /**
   * <p>A token to specify where to start paginating. This is the NextToken from a previously
   *             truncated response.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The Timestream resource with tags to be listed. This value is an Amazon Resource Name
   *             (ARN).</p>
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * <p>The maximum number of tags to return.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>A pagination token to resume pagination.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>The tags currently associated with the Timestream resource. </p>
   * @public
   */
  Tags: Tag[] | undefined;

  /**
   * <p>A pagination token to resume pagination with a subsequent call to
   *                 <code>ListTagsForResourceResponse</code>.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface PrepareQueryRequest {
  /**
   * <p>The Timestream query string that you want to use as a prepared statement. Parameter
   *             names can be specified in the query string <code>@</code> character followed by an
   *             identifier. </p>
   * @public
   */
  QueryString: string | undefined;

  /**
   * <p>By setting this value to <code>true</code>, Timestream will only validate that the
   *             query string is a valid Timestream query, and not store the prepared query for later
   *             use.</p>
   * @public
   */
  ValidateOnly?: boolean;
}

/**
 * <p>
 *             Timestream was unable to run the query successfully. </p>
 * @public
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

/**
 * @public
 */
export interface QueryRequest {
  /**
   * <p> The query to be run by Timestream. </p>
   * @public
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
   *          <ul>
   *             <li>
   *                <p> If the Query API is instantiated without a <code>ClientToken</code>, the
   *                     Query SDK generates a <code>ClientToken</code> on your behalf.</p>
   *             </li>
   *             <li>
   *                <p>If the <code>Query</code> invocation only contains the
   *                         <code>ClientToken</code> but does not include a <code>NextToken</code>, that
   *                     invocation of <code>Query</code> is assumed to be a new query run.</p>
   *             </li>
   *             <li>
   *                <p>If the invocation contains <code>NextToken</code>, that particular invocation
   *                     is assumed to be a subsequent invocation of a prior call to the Query API, and a
   *                     result set is returned.</p>
   *             </li>
   *             <li>
   *                <p> After 4 hours, any request with the same <code>ClientToken</code> is treated
   *                     as a new request. </p>
   *             </li>
   *          </ul>
   * @public
   */
  ClientToken?: string;

  /**
   * <p> A pagination token used to return a set of results. When the <code>Query</code> API
   *             is invoked using <code>NextToken</code>, that particular invocation is assumed to be a
   *             subsequent invocation of a prior call to <code>Query</code>, and a result set is
   *             returned. However, if the <code>Query</code> invocation only contains the
   *                 <code>ClientToken</code>, that invocation of <code>Query</code> is assumed to be a
   *             new query run. </p>
   *          <p>Note the following when using NextToken in a query:</p>
   *          <ul>
   *             <li>
   *                <p>A pagination token can be used for up to five <code>Query</code> invocations,
   *                     OR for a duration of up to 1 hour – whichever comes first.</p>
   *             </li>
   *             <li>
   *                <p>Using the same <code>NextToken</code> will return the same set of records. To
   *                     keep paginating through the result set, you must to use the most recent
   *                         <code>nextToken</code>.</p>
   *             </li>
   *             <li>
   *                <p>Suppose a <code>Query</code> invocation returns two <code>NextToken</code>
   *                     values, <code>TokenA</code> and <code>TokenB</code>. If <code>TokenB</code> is
   *                     used in a subsequent <code>Query</code> invocation, then <code>TokenA</code> is
   *                     invalidated and cannot be reused.</p>
   *             </li>
   *             <li>
   *                <p>To request a previous result set from a query after pagination has begun, you
   *                     must re-invoke the Query API.</p>
   *             </li>
   *             <li>
   *                <p>The latest <code>NextToken</code> should be used to paginate until
   *                         <code>null</code> is returned, at which point a new <code>NextToken</code>
   *                     should be used.</p>
   *             </li>
   *             <li>
   *                <p> If the IAM principal of the query initiator and the result reader are not the
   *                     same and/or the query initiator and the result reader do not have the same query
   *                     string in the query requests, the query will fail with an <code>Invalid
   *                         pagination token</code> error. </p>
   *             </li>
   *          </ul>
   * @public
   */
  NextToken?: string;

  /**
   * <p> The total number of rows to be returned in the <code>Query</code> output. The initial
   *             run of <code>Query</code> with a <code>MaxRows</code> value specified will return the
   *             result set of the query in two cases: </p>
   *          <ul>
   *             <li>
   *                <p>The size of the result is less than <code>1MB</code>.</p>
   *             </li>
   *             <li>
   *                <p>The number of rows in the result set is less than the value of
   *                         <code>maxRows</code>.</p>
   *             </li>
   *          </ul>
   *          <p>Otherwise, the initial invocation of <code>Query</code> only returns a
   *                 <code>NextToken</code>, which can then be used in subsequent calls to fetch the
   *             result set. To resume pagination, provide the <code>NextToken</code> value in the
   *             subsequent command.</p>
   *          <p>If the row size is large (e.g. a row has many columns), Timestream may return
   *             fewer rows to keep the response size from exceeding the 1 MB limit. If
   *                 <code>MaxRows</code> is not provided, Timestream will send the necessary
   *             number of rows to meet the 1 MB limit.</p>
   * @public
   */
  MaxRows?: number;
}

/**
 * <p>Information about the status of the query, including progress and bytes
 *             scanned.</p>
 * @public
 */
export interface QueryStatus {
  /**
   * <p>The progress of the query, expressed as a percentage.</p>
   * @public
   */
  ProgressPercentage?: number;

  /**
   * <p>The amount of data scanned by the query in bytes. This is a cumulative sum and
   *             represents the total amount of bytes scanned since the query was started. </p>
   * @public
   */
  CumulativeBytesScanned?: number;

  /**
   * <p>The amount of data scanned by the query in bytes that you will be charged for. This is
   *             a cumulative sum and represents the total amount of data that you will be charged for
   *             since the query was started. The charge is applied only once and is either applied when
   *             the query completes running or when the query is cancelled. </p>
   * @public
   */
  CumulativeBytesMetered?: number;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>Identifies the Timestream resource to which tags should be added. This value is an
   *             Amazon Resource Name (ARN).</p>
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * <p>The tags to be assigned to the Timestream resource.</p>
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
   * <p>The Timestream resource that the tags will be removed from. This value is an Amazon
   *             Resource Name (ARN). </p>
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * <p>A list of tags keys. Existing tags of the resource whose keys are members of this list
   *             will be removed from the Timestream resource. </p>
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
export interface UpdateScheduledQueryRequest {
  /**
   * <p>ARN of the scheuled query.</p>
   * @public
   */
  ScheduledQueryArn: string | undefined;

  /**
   * <p>State of the scheduled query. </p>
   * @public
   */
  State: ScheduledQueryState | undefined;
}

/**
 * <p> Contains the metadata for query results such as the column names, data types, and
 *             other attributes. </p>
 * @public
 */
export interface ColumnInfo {
  /**
   * <p> The name of the result set column. The name of the result set is available for
   *             columns of all data types except for arrays. </p>
   * @public
   */
  Name?: string;

  /**
   * <p>The data type of the result set column. The data type can be a scalar or complex.
   *             Scalar data types are integers, strings, doubles, Booleans, and others. Complex data
   *             types are types such as arrays, rows, and others. </p>
   * @public
   */
  Type: Type | undefined;
}

/**
 * <p>Contains the data type of a column in a query result set. The data type can be scalar
 *             or complex. The supported scalar data types are integers, Boolean, string, double,
 *             timestamp, date, time, and intervals. The supported complex data types are arrays, rows,
 *             and timeseries.</p>
 * @public
 */
export interface Type {
  /**
   * <p>Indicates if the column is of type string, integer, Boolean, double, timestamp, date,
   *             time. </p>
   * @public
   */
  ScalarType?: ScalarType;

  /**
   * <p>Indicates if the column is an array.</p>
   * @public
   */
  ArrayColumnInfo?: ColumnInfo;

  /**
   * <p>Indicates if the column is a timeseries data type.</p>
   * @public
   */
  TimeSeriesMeasureValueColumnInfo?: ColumnInfo;

  /**
   * <p>Indicates if the column is a row.</p>
   * @public
   */
  RowColumnInfo?: ColumnInfo[];
}

/**
 * <p> Datum represents a single data point in a query result. </p>
 * @public
 */
export interface Datum {
  /**
   * <p> Indicates if the data point is a scalar value such as integer, string, double, or
   *             Boolean. </p>
   * @public
   */
  ScalarValue?: string;

  /**
   * <p> Indicates if the data point is a timeseries data type. </p>
   * @public
   */
  TimeSeriesValue?: TimeSeriesDataPoint[];

  /**
   * <p> Indicates if the data point is an array. </p>
   * @public
   */
  ArrayValue?: Datum[];

  /**
   * <p> Indicates if the data point is a row. </p>
   * @public
   */
  RowValue?: Row;

  /**
   * <p> Indicates if the data point is null. </p>
   * @public
   */
  NullValue?: boolean;
}

/**
 * <p>Mapping for named parameters.</p>
 * @public
 */
export interface ParameterMapping {
  /**
   * <p>Parameter name.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>Contains the data type of a column in a query result set. The data type can be scalar
   *             or complex. The supported scalar data types are integers, Boolean, string, double,
   *             timestamp, date, time, and intervals. The supported complex data types are arrays, rows,
   *             and timeseries.</p>
   * @public
   */
  Type: Type | undefined;
}

/**
 * <p>Details of the column that is returned by the query. </p>
 * @public
 */
export interface SelectColumn {
  /**
   * <p>Name of the column.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>Contains the data type of a column in a query result set. The data type can be scalar
   *             or complex. The supported scalar data types are integers, Boolean, string, double,
   *             timestamp, date, time, and intervals. The supported complex data types are arrays, rows,
   *             and timeseries.</p>
   * @public
   */
  Type?: Type;

  /**
   * <p> Database that has this column.</p>
   * @public
   */
  DatabaseName?: string;

  /**
   * <p>Table within the database that has this column. </p>
   * @public
   */
  TableName?: string;

  /**
   * <p>True, if the column name was aliased by the query. False otherwise.</p>
   * @public
   */
  Aliased?: boolean;
}

/**
 * <p>The timeseries data type represents the values of a measure over time. A time series
 *             is an array of rows of timestamps and measure values, with rows sorted in ascending
 *             order of time. A TimeSeriesDataPoint is a single data point in the time series. It
 *             represents a tuple of (time, measure value) in a time series. </p>
 * @public
 */
export interface TimeSeriesDataPoint {
  /**
   * <p>The timestamp when the measure value was collected.</p>
   * @public
   */
  Time: string | undefined;

  /**
   * <p>The measure value for the data point.</p>
   * @public
   */
  Value: Datum | undefined;
}

/**
 * <p>Represents a single row in the query results.</p>
 * @public
 */
export interface Row {
  /**
   * <p>List of data points in a single row of the result set.</p>
   * @public
   */
  Data: Datum[] | undefined;
}

/**
 * @public
 */
export interface QueryResponse {
  /**
   * <p> A unique ID for the given query. </p>
   * @public
   */
  QueryId: string | undefined;

  /**
   * <p> A pagination token that can be used again on a <code>Query</code> call to get the
   *             next set of results. </p>
   * @public
   */
  NextToken?: string;

  /**
   * <p> The result set rows returned by the query. </p>
   * @public
   */
  Rows: Row[] | undefined;

  /**
   * <p> The column data types of the returned result set. </p>
   * @public
   */
  ColumnInfo: ColumnInfo[] | undefined;

  /**
   * <p>Information about the status of the query, including progress and bytes
   *             scanned.</p>
   * @public
   */
  QueryStatus?: QueryStatus;
}

/**
 * @public
 */
export interface PrepareQueryResponse {
  /**
   * <p>The query string that you want prepare.</p>
   * @public
   */
  QueryString: string | undefined;

  /**
   * <p>A list of SELECT clause columns of the submitted query string. </p>
   * @public
   */
  Columns: SelectColumn[] | undefined;

  /**
   * <p>A list of parameters used in the submitted query string. </p>
   * @public
   */
  Parameters: ParameterMapping[] | undefined;
}

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
export const PrepareQueryResponseFilterSensitiveLog = (obj: PrepareQueryResponse): any => ({
  ...obj,
  ...(obj.QueryString && { QueryString: SENSITIVE_STRING }),
});
