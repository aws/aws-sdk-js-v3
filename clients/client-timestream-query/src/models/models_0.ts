// smithy-typescript generated code
import type {
  ComputeMode,
  DimensionValueType,
  LastUpdateStatus,
  MeasureValueType,
  QueryInsightsMode,
  QueryPricingModel,
  S3EncryptionOption,
  ScalarMeasureValueType,
  ScalarType,
  ScheduledQueryInsightsMode,
  ScheduledQueryRunStatus,
  ScheduledQueryState,
} from "./enums";

/**
 * Details on SNS that are required to send the notification.
 *
 * @public
 */
export interface SnsConfiguration {
  /**
   * SNS topic ARN that the scheduled query status notifications will be sent to.
   *
   * @public
   */
  TopicArn: string | undefined;
}

/**
 * Configuration settings for notifications related to account settings.
 *
 * @public
 */
export interface AccountSettingsNotificationConfiguration {
  /**
   * Details on SNS that are required to send the notification.
   *
   * @public
   */
  SnsConfiguration?: SnsConfiguration | undefined;

  /**
   * An Amazon Resource Name (ARN) that grants Timestream permission to publish notifications. This field is only visible if SNS Topic is provided when updating the account settings.
   *
   * @public
   */
  RoleArn: string | undefined;
}

/**
 * @public
 */
export interface CancelQueryRequest {
  /**
   * The ID of the query that needs to be cancelled. `QueryID` is returned as part of the query result.
   *
   * @public
   */
  QueryId: string | undefined;
}

/**
 * @public
 */
export interface CancelQueryResponse {
  /**
   * A `CancellationMessage` is returned when a `CancelQuery` request for the query specified by `QueryId` has already been issued.
   *
   * @public
   */
  CancellationMessage?: string | undefined;
}

/**
 * Details on S3 location for error reports that result from running a query.
 *
 * @public
 */
export interface S3Configuration {
  /**
   * Name of the S3 bucket under which error reports will be created.
   *
   * @public
   */
  BucketName: string | undefined;

  /**
   * Prefix for the error report key. Timestream by default adds the following prefix to the error report path.
   *
   * @public
   */
  ObjectKeyPrefix?: string | undefined;

  /**
   * Encryption at rest options for the error reports. If no encryption option is specified, Timestream will choose SSE_S3 as default.
   *
   * @public
   */
  EncryptionOption?: S3EncryptionOption | undefined;
}

/**
 * Configuration required for error reporting.
 *
 * @public
 */
export interface ErrorReportConfiguration {
  /**
   * The S3 configuration for the error reports.
   *
   * @public
   */
  S3Configuration: S3Configuration | undefined;
}

/**
 * Notification configuration for a scheduled query. A notification is sent by Timestream when a scheduled query is created, its state is updated or when it is deleted.
 *
 * @public
 */
export interface NotificationConfiguration {
  /**
   * Details about the Amazon Simple Notification Service (SNS) configuration. This field is visible only when SNS Topic is provided when updating the account settings.
   *
   * @public
   */
  SnsConfiguration: SnsConfiguration | undefined;
}

/**
 * Configuration of the schedule of the query.
 *
 * @public
 */
export interface ScheduleConfiguration {
  /**
   * An expression that denotes when to trigger the scheduled query run. This can be a cron expression or a rate expression.
   *
   * @public
   */
  ScheduleExpression: string | undefined;
}

/**
 * A tag is a label that you assign to a Timestream database and/or table. Each tag consists of a key and an optional value, both of which you define. Tags enable you to categorize databases and/or tables, for example, by purpose, owner, or environment.
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
   * The value of the tag. Tag values are case sensitive and can be null.
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * This type is used to map column(s) from the query result to a dimension in the destination table.
 *
 * @public
 */
export interface DimensionMapping {
  /**
   * Column name from query result.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * Type for the dimension.
   *
   * @public
   */
  DimensionValueType: DimensionValueType | undefined;
}

/**
 * Attribute mapping for MULTI value measures.
 *
 * @public
 */
export interface MultiMeasureAttributeMapping {
  /**
   * Source column from where the attribute value is to be read.
   *
   * @public
   */
  SourceColumn: string | undefined;

  /**
   * Custom name to be used for attribute name in derived table. If not provided, source column name would be used.
   *
   * @public
   */
  TargetMultiMeasureAttributeName?: string | undefined;

  /**
   * Type of the attribute to be read from the source column.
   *
   * @public
   */
  MeasureValueType: ScalarMeasureValueType | undefined;
}

/**
 * MixedMeasureMappings are mappings that can be used to ingest data into a mixture of narrow and multi measures in the derived table.
 *
 * @public
 */
export interface MixedMeasureMapping {
  /**
   * Refers to the value of measure_name in a result row. This field is required if MeasureNameColumn is provided.
   *
   * @public
   */
  MeasureName?: string | undefined;

  /**
   * This field refers to the source column from which measure-value is to be read for result materialization.
   *
   * @public
   */
  SourceColumn?: string | undefined;

  /**
   * Target measure name to be used. If not provided, the target measure name by default would be measure-name if provided, or sourceColumn otherwise.
   *
   * @public
   */
  TargetMeasureName?: string | undefined;

  /**
   * Type of the value that is to be read from sourceColumn. If the mapping is for MULTI, use MeasureValueType.MULTI.
   *
   * @public
   */
  MeasureValueType: MeasureValueType | undefined;

  /**
   * Required when measureValueType is MULTI. Attribute mappings for MULTI value measures.
   *
   * @public
   */
  MultiMeasureAttributeMappings?: MultiMeasureAttributeMapping[] | undefined;
}

/**
 * Only one of MixedMeasureMappings or MultiMeasureMappings is to be provided. MultiMeasureMappings can be used to ingest data as multi measures in the derived table.
 *
 * @public
 */
export interface MultiMeasureMappings {
  /**
   * The name of the target multi-measure name in the derived table. This input is required when measureNameColumn is not provided. If MeasureNameColumn is provided, then value from that column will be used as multi-measure name.
   *
   * @public
   */
  TargetMultiMeasureName?: string | undefined;

  /**
   * Required. Attribute mappings to be used for mapping query results to ingest data for multi-measure attributes.
   *
   * @public
   */
  MultiMeasureAttributeMappings: MultiMeasureAttributeMapping[] | undefined;
}

/**
 * Configuration to write data into Timestream database and table. This configuration allows the user to map the query result select columns into the destination table columns.
 *
 * @public
 */
export interface TimestreamConfiguration {
  /**
   * Name of Timestream database to which the query result will be written.
   *
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * Name of Timestream table that the query result will be written to. The table should be within the same database that is provided in Timestream configuration.
   *
   * @public
   */
  TableName: string | undefined;

  /**
   * Column from query result that should be used as the time column in destination table. Column type for this should be TIMESTAMP.
   *
   * @public
   */
  TimeColumn: string | undefined;

  /**
   * This is to allow mapping column(s) from the query result to the dimension in the destination table.
   *
   * @public
   */
  DimensionMappings: DimensionMapping[] | undefined;

  /**
   * Multi-measure mappings.
   *
   * @public
   */
  MultiMeasureMappings?: MultiMeasureMappings | undefined;

  /**
   * Specifies how to map measures to multi-measure records.
   *
   * @public
   */
  MixedMeasureMappings?: MixedMeasureMapping[] | undefined;

  /**
   * Name of the measure column.
   *
   * @public
   */
  MeasureNameColumn?: string | undefined;
}

/**
 * Configuration used for writing the output of a query.
 *
 * @public
 */
export interface TargetConfiguration {
  /**
   * Configuration needed to write data into the Timestream database and table.
   *
   * @public
   */
  TimestreamConfiguration: TimestreamConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateScheduledQueryRequest {
  /**
   * Name of the scheduled query.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The query string to run. Parameter names can be specified in the query string `@` character followed by an identifier. The named Parameter `@scheduled_runtime` is reserved and can be used in the query to get the time at which the query is scheduled to run.
   *
   * The timestamp calculated according to the ScheduleConfiguration parameter, will be the value of `@scheduled_runtime` paramater for each query run. For example, consider an instance of a scheduled query executing on 2021-12-01 00:00:00. For this instance, the `@scheduled_runtime` parameter is initialized to the timestamp 2021-12-01 00:00:00 when invoking the query.
   *
   * @public
   */
  QueryString: string | undefined;

  /**
   * The schedule configuration for the query.
   *
   * @public
   */
  ScheduleConfiguration: ScheduleConfiguration | undefined;

  /**
   * Notification configuration for the scheduled query. A notification is sent by Timestream when a query run finishes, when the state is updated or when you delete it.
   *
   * @public
   */
  NotificationConfiguration: NotificationConfiguration | undefined;

  /**
   * Configuration used for writing the result of a query.
   *
   * @public
   */
  TargetConfiguration?: TargetConfiguration | undefined;

  /**
   * Using a ClientToken makes the call to CreateScheduledQuery idempotent, in other words, making the same request repeatedly will produce the same result. Making multiple identical CreateScheduledQuery requests has the same effect as making a single request.
   *
   * - If CreateScheduledQuery is called without a `ClientToken`, the Query SDK generates a `ClientToken` on your behalf.
   * - After 8 hours, any request with the same `ClientToken` is treated as a new request.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The ARN for the IAM role that Timestream will assume when running the scheduled query.
   *
   * @public
   */
  ScheduledQueryExecutionRoleArn: string | undefined;

  /**
   * A list of key-value pairs to label the scheduled query.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The Amazon KMS key used to encrypt the scheduled query resource, at-rest. If the Amazon KMS key is not specified, the scheduled query resource will be encrypted with a Timestream owned Amazon KMS key. To specify a KMS key, use the key ID, key ARN, alias name, or alias ARN. When using an alias name, prefix the name with *alias/*
   *
   * If ErrorReportConfiguration uses `SSE_KMS` as encryption type, the same KmsKeyId is used to encrypt the error report at rest.
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * Configuration for error reporting. Error reports will be generated when a problem is encountered when writing the query results.
   *
   * @public
   */
  ErrorReportConfiguration: ErrorReportConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateScheduledQueryResponse {
  /**
   * ARN for the created scheduled query.
   *
   * @public
   */
  Arn: string | undefined;
}

/**
 * @public
 */
export interface DeleteScheduledQueryRequest {
  /**
   * The ARN of the scheduled query.
   *
   * @public
   */
  ScheduledQueryArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeAccountSettingsRequest {}

/**
 * Configuration object that contains the most recent account settings update, visible only if settings have been updated previously.
 *
 * @public
 */
export interface LastUpdate {
  /**
   * The number of TimeStream Compute Units (TCUs) requested in the last account settings update.
   *
   * @public
   */
  TargetQueryTCU?: number | undefined;

  /**
   * The status of the last update. Can be either `PENDING`, `FAILED`, or `SUCCEEDED`.
   *
   * @public
   */
  Status?: LastUpdateStatus | undefined;

  /**
   * Error message describing the last account settings update status, visible only if an error occurred.
   *
   * @public
   */
  StatusMessage?: string | undefined;
}

/**
 * The response to a request to update the provisioned capacity settings for querying data.
 *
 * @public
 */
export interface ProvisionedCapacityResponse {
  /**
   * The number of Timestream Compute Units (TCUs) provisioned in the account. This field is only visible when the compute mode is `PROVISIONED`.
   *
   * @public
   */
  ActiveQueryTCU?: number | undefined;

  /**
   * An object that contains settings for notifications that are sent whenever the provisioned capacity settings are modified. This field is only visible when the compute mode is `PROVISIONED`.
   *
   * @public
   */
  NotificationConfiguration?: AccountSettingsNotificationConfiguration | undefined;

  /**
   * Information about the last update to the provisioned capacity settings.
   *
   * @public
   */
  LastUpdate?: LastUpdate | undefined;
}

/**
 * The response to a request to retrieve or update the compute capacity settings for querying data.
 *
 * @public
 */
export interface QueryComputeResponse {
  /**
   * The mode in which Timestream Compute Units (TCUs) are allocated and utilized within an account. Note that in the Asia Pacific (Mumbai) region, the API operation only recognizes the value `PROVISIONED`.
   *
   * @public
   */
  ComputeMode?: ComputeMode | undefined;

  /**
   * Configuration object that contains settings for provisioned Timestream Compute Units (TCUs) in your account.
   *
   * @public
   */
  ProvisionedCapacity?: ProvisionedCapacityResponse | undefined;
}

/**
 * @public
 */
export interface DescribeAccountSettingsResponse {
  /**
   * The maximum number of [Timestream compute units](https://docs.aws.amazon.com/timestream/latest/developerguide/tcu.html) (TCUs) the service will use at any point in time to serve your queries. To run queries, you must set a minimum capacity of 4 TCU. You can set the maximum number of TCU in multiples of 4, for example, 4, 8, 16, 32, and so on. This configuration is applicable only for on-demand usage of (TCUs).
   *
   * @public
   */
  MaxQueryTCU?: number | undefined;

  /**
   * The pricing model for queries in your account.
   *
   * > **Note:** The `QueryPricingModel` parameter is used by several Timestream operations; however, the `UpdateAccountSettings` API operation doesn't recognize any values other than `COMPUTE_UNITS`.
   *
   * @public
   */
  QueryPricingModel?: QueryPricingModel | undefined;

  /**
   * An object that contains the usage settings for Timestream Compute Units (TCUs) in your account for the query workload.
   *
   * @public
   */
  QueryCompute?: QueryComputeResponse | undefined;
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
export interface DescribeScheduledQueryRequest {
  /**
   * The ARN of the scheduled query.
   *
   * @public
   */
  ScheduledQueryArn: string | undefined;
}

/**
 * S3 report location for the scheduled query run.
 *
 * @public
 */
export interface S3ReportLocation {
  /**
   * S3 bucket name.
   *
   * @public
   */
  BucketName?: string | undefined;

  /**
   * S3 key.
   *
   * @public
   */
  ObjectKey?: string | undefined;
}

/**
 * This contains the location of the error report for a single scheduled query call.
 *
 * @public
 */
export interface ErrorReportLocation {
  /**
   * The S3 location where error reports are written.
   *
   * @public
   */
  S3ReportLocation?: S3ReportLocation | undefined;
}

/**
 * Statistics for a single scheduled query run.
 *
 * @public
 */
export interface ExecutionStats {
  /**
   * Total time, measured in milliseconds, that was needed for the scheduled query run to complete.
   *
   * @public
   */
  ExecutionTimeInMillis?: number | undefined;

  /**
   * Data writes metered for records ingested in a single scheduled query run.
   *
   * @public
   */
  DataWrites?: number | undefined;

  /**
   * Bytes metered for a single scheduled query run.
   *
   * @public
   */
  BytesMetered?: number | undefined;

  /**
   * Bytes scanned for a single scheduled query run.
   *
   * @public
   */
  CumulativeBytesScanned?: number | undefined;

  /**
   * The number of records ingested for a single scheduled query run.
   *
   * @public
   */
  RecordsIngested?: number | undefined;

  /**
   * Number of rows present in the output from running a query before ingestion to destination data source.
   *
   * @public
   */
  QueryResultRows?: number | undefined;
}

/**
 * Provides insights into the table with the most sub-optimal spatial range scanned by your query.
 *
 * @public
 */
export interface QuerySpatialCoverageMax {
  /**
   * The maximum ratio of spatial coverage.
   *
   * @public
   */
  Value?: number | undefined;

  /**
   * The Amazon Resource Name (ARN) of the table with the most sub-optimal spatial pruning.
   *
   * @public
   */
  TableArn?: string | undefined;

  /**
   * The partition key used for partitioning, which can be a default `measure_name` or a [customer defined partition key](https://docs.aws.amazon.com/timestream/latest/developerguide/customer-defined-partition-keys.html).
   *
   * @public
   */
  PartitionKey?: string[] | undefined;
}

/**
 * Provides insights into the spatial coverage of the query, including the table with sub-optimal (max) spatial pruning. This information can help you identify areas for improvement in your partitioning strategy to enhance spatial pruning
 *
 * For example, you can do the following with the `QuerySpatialCoverage` information:
 *
 * - Add measure_name or use [customer-defined partition key](https://docs.aws.amazon.com/timestream/latest/developerguide/customer-defined-partition-keys.html) (CDPK) predicates.
 * - If you've already done the preceding action, remove functions around them or clauses, such as `LIKE`.
 *
 * @public
 */
export interface QuerySpatialCoverage {
  /**
   * Provides insights into the spatial coverage of the executed query and the table with the most inefficient spatial pruning.
   *
   * - `Value` – The maximum ratio of spatial coverage.
   * - `TableArn` – The Amazon Resource Name (ARN) of the table with sub-optimal spatial pruning.
   * - `PartitionKey` – The partition key used for partitioning, which can be a default `measure_name` or a CDPK.
   *
   * @public
   */
  Max?: QuerySpatialCoverageMax | undefined;
}

/**
 * Provides insights into the table with the most sub-optimal temporal pruning scanned by your query.
 *
 * @public
 */
export interface QueryTemporalRangeMax {
  /**
   * The maximum duration in nanoseconds between the start and end of the query.
   *
   * @public
   */
  Value?: number | undefined;

  /**
   * The Amazon Resource Name (ARN) of the table which is queried with the largest time range.
   *
   * @public
   */
  TableArn?: string | undefined;
}

/**
 * Provides insights into the temporal range of the query, including the table with the largest (max) time range.
 *
 * @public
 */
export interface QueryTemporalRange {
  /**
   * Encapsulates the following properties that provide insights into the most sub-optimal performing table on the temporal axis:
   *
   * - `Value` – The maximum duration in nanoseconds between the start and end of the query.
   * - `TableArn` – The Amazon Resource Name (ARN) of the table which is queried with the largest time range.
   *
   * @public
   */
  Max?: QueryTemporalRangeMax | undefined;
}

/**
 * Provides various insights and metrics related to the `ExecuteScheduledQueryRequest` that was executed.
 *
 * @public
 */
export interface ScheduledQueryInsightsResponse {
  /**
   * Provides insights into the spatial coverage of the query, including the table with sub-optimal (max) spatial pruning. This information can help you identify areas for improvement in your partitioning strategy to enhance spatial pruning.
   *
   * @public
   */
  QuerySpatialCoverage?: QuerySpatialCoverage | undefined;

  /**
   * Provides insights into the temporal range of the query, including the table with the largest (max) time range. Following are some of the potential options for optimizing time-based pruning:
   *
   * - Add missing time-predicates.
   * - Remove functions around the time predicates.
   * - Add time predicates to all the sub-queries.
   *
   * @public
   */
  QueryTemporalRange?: QueryTemporalRange | undefined;

  /**
   * Indicates the number of tables in the query.
   *
   * @public
   */
  QueryTableCount?: number | undefined;

  /**
   * Indicates the total number of rows returned as part of the query result set. You can use this data to validate if the number of rows in the result set have changed as part of the query tuning exercise.
   *
   * @public
   */
  OutputRows?: number | undefined;

  /**
   * Indicates the size of query result set in bytes. You can use this data to validate if the result set has changed as part of the query tuning exercise.
   *
   * @public
   */
  OutputBytes?: number | undefined;
}

/**
 * Run summary for the scheduled query
 *
 * @public
 */
export interface ScheduledQueryRunSummary {
  /**
   * InvocationTime for this run. This is the time at which the query is scheduled to run. Parameter `@scheduled_runtime` can be used in the query to get the value.
   *
   * @public
   */
  InvocationTime?: Date | undefined;

  /**
   * The actual time when the query was run.
   *
   * @public
   */
  TriggerTime?: Date | undefined;

  /**
   * The status of a scheduled query run.
   *
   * @public
   */
  RunStatus?: ScheduledQueryRunStatus | undefined;

  /**
   * Runtime statistics for a scheduled run.
   *
   * @public
   */
  ExecutionStats?: ExecutionStats | undefined;

  /**
   * Provides various insights and metrics related to the run summary of the scheduled query.
   *
   * @public
   */
  QueryInsightsResponse?: ScheduledQueryInsightsResponse | undefined;

  /**
   * S3 location for error report.
   *
   * @public
   */
  ErrorReportLocation?: ErrorReportLocation | undefined;

  /**
   * Error message for the scheduled query in case of failure. You might have to look at the error report to get more detailed error reasons.
   *
   * @public
   */
  FailureReason?: string | undefined;
}

/**
 * Structure that describes scheduled query.
 *
 * @public
 */
export interface ScheduledQueryDescription {
  /**
   * Scheduled query ARN.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * Name of the scheduled query.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The query to be run.
   *
   * @public
   */
  QueryString: string | undefined;

  /**
   * Creation time of the scheduled query.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * State of the scheduled query.
   *
   * @public
   */
  State: ScheduledQueryState | undefined;

  /**
   * Last time the query was run.
   *
   * @public
   */
  PreviousInvocationTime?: Date | undefined;

  /**
   * The next time the scheduled query is scheduled to run.
   *
   * @public
   */
  NextInvocationTime?: Date | undefined;

  /**
   * Schedule configuration.
   *
   * @public
   */
  ScheduleConfiguration: ScheduleConfiguration | undefined;

  /**
   * Notification configuration.
   *
   * @public
   */
  NotificationConfiguration: NotificationConfiguration | undefined;

  /**
   * Scheduled query target store configuration.
   *
   * @public
   */
  TargetConfiguration?: TargetConfiguration | undefined;

  /**
   * IAM role that Timestream uses to run the schedule query.
   *
   * @public
   */
  ScheduledQueryExecutionRoleArn?: string | undefined;

  /**
   * A customer provided KMS key used to encrypt the scheduled query resource.
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * Error-reporting configuration for the scheduled query.
   *
   * @public
   */
  ErrorReportConfiguration?: ErrorReportConfiguration | undefined;

  /**
   * Runtime summary for the last scheduled query run.
   *
   * @public
   */
  LastRunSummary?: ScheduledQueryRunSummary | undefined;

  /**
   * Runtime summary for the last five failed scheduled query runs.
   *
   * @public
   */
  RecentlyFailedRuns?: ScheduledQueryRunSummary[] | undefined;
}

/**
 * @public
 */
export interface DescribeScheduledQueryResponse {
  /**
   * The scheduled query.
   *
   * @public
   */
  ScheduledQuery: ScheduledQueryDescription | undefined;
}

/**
 * Encapsulates settings for enabling `QueryInsights` on an `ExecuteScheduledQueryRequest`.
 *
 * @public
 */
export interface ScheduledQueryInsights {
  /**
   * Provides the following modes to enable `ScheduledQueryInsights`:
   *
   * - `ENABLED_WITH_RATE_CONTROL` – Enables `ScheduledQueryInsights` for the queries being processed. This mode also includes a rate control mechanism, which limits the `QueryInsights` feature to 1 query per second (QPS).
   * - `DISABLED` – Disables `ScheduledQueryInsights`.
   *
   * @public
   */
  Mode: ScheduledQueryInsightsMode | undefined;
}

/**
 * @public
 */
export interface ExecuteScheduledQueryRequest {
  /**
   * ARN of the scheduled query.
   *
   * @public
   */
  ScheduledQueryArn: string | undefined;

  /**
   * The timestamp in UTC. Query will be run as if it was invoked at this timestamp.
   *
   * @public
   */
  InvocationTime: Date | undefined;

  /**
   * Not used.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * Encapsulates settings for enabling `QueryInsights`.
   *
   * Enabling `QueryInsights` returns insights and metrics as a part of the Amazon SNS notification for the query that you executed. You can use `QueryInsights` to tune your query performance and cost.
   *
   * @public
   */
  QueryInsights?: ScheduledQueryInsights | undefined;
}

/**
 * @public
 */
export interface ListScheduledQueriesRequest {
  /**
   * The maximum number of items to return in the output. If the total number of items available is more than the value specified, a `NextToken` is provided in the output. To resume pagination, provide the `NextToken` value as the argument to the subsequent call to `ListScheduledQueriesRequest`.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A pagination token to resume pagination.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Destination for scheduled query.
 *
 * @public
 */
export interface TimestreamDestination {
  /**
   * Timestream database name.
   *
   * @public
   */
  DatabaseName?: string | undefined;

  /**
   * Timestream table name.
   *
   * @public
   */
  TableName?: string | undefined;
}

/**
 * Destination details to write data for a target data source. Current supported data source is Timestream.
 *
 * @public
 */
export interface TargetDestination {
  /**
   * Query result destination details for Timestream data source.
   *
   * @public
   */
  TimestreamDestination?: TimestreamDestination | undefined;
}

/**
 * Scheduled Query
 *
 * @public
 */
export interface ScheduledQuery {
  /**
   * The Amazon Resource Name.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The name of the scheduled query.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The creation time of the scheduled query.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * State of scheduled query.
   *
   * @public
   */
  State: ScheduledQueryState | undefined;

  /**
   * The last time the scheduled query was run.
   *
   * @public
   */
  PreviousInvocationTime?: Date | undefined;

  /**
   * The next time the scheduled query is to be run.
   *
   * @public
   */
  NextInvocationTime?: Date | undefined;

  /**
   * Configuration for scheduled query error reporting.
   *
   * @public
   */
  ErrorReportConfiguration?: ErrorReportConfiguration | undefined;

  /**
   * Target data source where final scheduled query result will be written.
   *
   * @public
   */
  TargetDestination?: TargetDestination | undefined;

  /**
   * Status of the last scheduled query run.
   *
   * @public
   */
  LastRunStatus?: ScheduledQueryRunStatus | undefined;
}

/**
 * @public
 */
export interface ListScheduledQueriesResponse {
  /**
   * A list of scheduled queries.
   *
   * @public
   */
  ScheduledQueries: ScheduledQuery[] | undefined;

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

  /**
   * The maximum number of tags to return.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A pagination token to resume pagination.
   *
   * @public
   */
  NextToken?: string | undefined;
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
  Tags: Tag[] | undefined;

  /**
   * A pagination token to resume pagination with a subsequent call to `ListTagsForResourceResponse`.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface PrepareQueryRequest {
  /**
   * The Timestream query string that you want to use as a prepared statement. Parameter names can be specified in the query string `@` character followed by an identifier.
   *
   * @public
   */
  QueryString: string | undefined;

  /**
   * By setting this value to `true`, Timestream will only validate that the query string is a valid Timestream query, and not store the prepared query for later use.
   *
   * @public
   */
  ValidateOnly?: boolean | undefined;
}

/**
 * A request to update the provisioned capacity settings for querying data.
 *
 * @public
 */
export interface ProvisionedCapacityRequest {
  /**
   * The target compute capacity for querying data, specified in Timestream Compute Units (TCUs).
   *
   * @public
   */
  TargetQueryTCU: number | undefined;

  /**
   * Configuration settings for notifications related to the provisioned capacity update.
   *
   * @public
   */
  NotificationConfiguration?: AccountSettingsNotificationConfiguration | undefined;
}

/**
 * `QueryInsights` is a performance tuning feature that helps you optimize your queries, reducing costs and improving performance. With `QueryInsights`, you can assess the pruning efficiency of your queries and identify areas for improvement to enhance query performance. With `QueryInsights`, you can also analyze the effectiveness of your queries in terms of temporal and spatial pruning, and identify opportunities to improve performance. Specifically, you can evaluate how well your queries use time-based and partition key-based indexing strategies to optimize data retrieval. To optimize query performance, it's essential that you fine-tune both the temporal and spatial parameters that govern query execution.
 *
 * The key metrics provided by `QueryInsights` are `QuerySpatialCoverage` and `QueryTemporalRange`. `QuerySpatialCoverage` indicates how much of the spatial axis the query scans, with lower values being more efficient. `QueryTemporalRange` shows the time range scanned, with narrower ranges being more performant.
 *
 * **Benefits of QueryInsights**
 *
 * The following are the key benefits of using `QueryInsights`:
 *
 * - **Identifying inefficient queries** – `QueryInsights` provides information on the time-based and attribute-based pruning of the tables accessed by the query. This information helps you identify the tables that are sub-optimally accessed.
 * - **Optimizing your data model and partitioning** – You can use the `QueryInsights` information to access and fine-tune your data model and partitioning strategy.
 * - **Tuning queries** – `QueryInsights` highlights opportunities to use indexes more effectively.
 *
 * > **Note:** The maximum number of `Query` API requests you're allowed to make with `QueryInsights` enabled is 1 query per second (QPS). If you exceed this query rate, it might result in throttling.
 *
 * @public
 */
export interface QueryInsights {
  /**
   * Provides the following modes to enable `QueryInsights`:
   *
   * - `ENABLED_WITH_RATE_CONTROL` – Enables `QueryInsights` for the queries being processed. This mode also includes a rate control mechanism, which limits the `QueryInsights` feature to 1 query per second (QPS).
   * - `DISABLED` – Disables `QueryInsights`.
   *
   * @public
   */
  Mode: QueryInsightsMode | undefined;
}

/**
 * @public
 */
export interface QueryRequest {
  /**
   * The query to be run by Timestream.
   *
   * @public
   */
  QueryString: string | undefined;

  /**
   * Unique, case-sensitive string of up to 64 ASCII characters specified when a `Query` request is made. Providing a `ClientToken` makes the call to `Query` *idempotent*. This means that running the same query repeatedly will produce the same result. In other words, making multiple identical `Query` requests has the same effect as making a single request. When using `ClientToken` in a query, note the following:
   *
   * - If the Query API is instantiated without a `ClientToken`, the Query SDK generates a `ClientToken` on your behalf.
   * - If the `Query` invocation only contains the `ClientToken` but does not include a `NextToken`, that invocation of `Query` is assumed to be a new query run.
   * - If the invocation contains `NextToken`, that particular invocation is assumed to be a subsequent invocation of a prior call to the Query API, and a result set is returned.
   * - After 4 hours, any request with the same `ClientToken` is treated as a new request.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * A pagination token used to return a set of results. When the `Query` API is invoked using `NextToken`, that particular invocation is assumed to be a subsequent invocation of a prior call to `Query`, and a result set is returned. However, if the `Query` invocation only contains the `ClientToken`, that invocation of `Query` is assumed to be a new query run.
   *
   * Note the following when using NextToken in a query:
   *
   * - A pagination token can be used for up to five `Query` invocations, OR for a duration of up to 1 hour – whichever comes first.
   * - Using the same `NextToken` will return the same set of records. To keep paginating through the result set, you must to use the most recent `nextToken`.
   * - Suppose a `Query` invocation returns two `NextToken` values, `TokenA` and `TokenB`. If `TokenB` is used in a subsequent `Query` invocation, then `TokenA` is invalidated and cannot be reused.
   * - To request a previous result set from a query after pagination has begun, you must re-invoke the Query API.
   * - The latest `NextToken` should be used to paginate until `null` is returned, at which point a new `NextToken` should be used.
   * - If the IAM principal of the query initiator and the result reader are not the same and/or the query initiator and the result reader do not have the same query string in the query requests, the query will fail with an `Invalid pagination token` error.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The total number of rows to be returned in the `Query` output. The initial run of `Query` with a `MaxRows` value specified will return the result set of the query in two cases:
   *
   * - The size of the result is less than `1MB`.
   * - The number of rows in the result set is less than the value of `maxRows`.
   *
   * Otherwise, the initial invocation of `Query` only returns a `NextToken`, which can then be used in subsequent calls to fetch the result set. To resume pagination, provide the `NextToken` value in the subsequent command.
   *
   * If the row size is large (e.g. a row has many columns), Timestream may return fewer rows to keep the response size from exceeding the 1 MB limit. If `MaxRows` is not provided, Timestream will send the necessary number of rows to meet the 1 MB limit.
   *
   * @public
   */
  MaxRows?: number | undefined;

  /**
   * Encapsulates settings for enabling `QueryInsights`.
   *
   * Enabling `QueryInsights` returns insights and metrics in addition to query results for the query that you executed. You can use `QueryInsights` to tune your query performance.
   *
   * @public
   */
  QueryInsights?: QueryInsights | undefined;
}

/**
 * Provides various insights and metrics related to the query that you executed.
 *
 * @public
 */
export interface QueryInsightsResponse {
  /**
   * Provides insights into the spatial coverage of the query, including the table with sub-optimal (max) spatial pruning. This information can help you identify areas for improvement in your partitioning strategy to enhance spatial pruning.
   *
   * @public
   */
  QuerySpatialCoverage?: QuerySpatialCoverage | undefined;

  /**
   * Provides insights into the temporal range of the query, including the table with the largest (max) time range. Following are some of the potential options for optimizing time-based pruning:
   *
   * - Add missing time-predicates.
   * - Remove functions around the time predicates.
   * - Add time predicates to all the sub-queries.
   *
   * @public
   */
  QueryTemporalRange?: QueryTemporalRange | undefined;

  /**
   * Indicates the number of tables in the query.
   *
   * @public
   */
  QueryTableCount?: number | undefined;

  /**
   * Indicates the total number of rows returned as part of the query result set. You can use this data to validate if the number of rows in the result set have changed as part of the query tuning exercise.
   *
   * @public
   */
  OutputRows?: number | undefined;

  /**
   * Indicates the size of query result set in bytes. You can use this data to validate if the result set has changed as part of the query tuning exercise.
   *
   * @public
   */
  OutputBytes?: number | undefined;

  /**
   * Indicates the partitions created by the `Unload` operation.
   *
   * @public
   */
  UnloadPartitionCount?: number | undefined;

  /**
   * Indicates the rows written by the `Unload` query.
   *
   * @public
   */
  UnloadWrittenRows?: number | undefined;

  /**
   * Indicates the size, in bytes, written by the `Unload` operation.
   *
   * @public
   */
  UnloadWrittenBytes?: number | undefined;
}

/**
 * Information about the status of the query, including progress and bytes scanned.
 *
 * @public
 */
export interface QueryStatus {
  /**
   * The progress of the query, expressed as a percentage.
   *
   * @public
   */
  ProgressPercentage?: number | undefined;

  /**
   * The amount of data scanned by the query in bytes. This is a cumulative sum and represents the total amount of bytes scanned since the query was started.
   *
   * @public
   */
  CumulativeBytesScanned?: number | undefined;

  /**
   * The amount of data scanned by the query in bytes that you will be charged for. This is a cumulative sum and represents the total amount of data that you will be charged for since the query was started. The charge is applied only once and is either applied when the query completes running or when the query is cancelled.
   *
   * @public
   */
  CumulativeBytesMetered?: number | undefined;
}

/**
 * A request to retrieve or update the compute capacity settings for querying data.
 *
 * @public
 */
export interface QueryComputeRequest {
  /**
   * The mode in which Timestream Compute Units (TCUs) are allocated and utilized within an account. Note that in the Asia Pacific (Mumbai) region, the API operation only recognizes the value `PROVISIONED`.
   *
   * @public
   */
  ComputeMode?: ComputeMode | undefined;

  /**
   * Configuration object that contains settings for provisioned Timestream Compute Units (TCUs) in your account.
   *
   * @public
   */
  ProvisionedCapacity?: ProvisionedCapacityRequest | undefined;
}

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
export interface UpdateAccountSettingsRequest {
  /**
   * The maximum number of compute units the service will use at any point in time to serve your queries. To run queries, you must set a minimum capacity of 4 TCU. You can set the maximum number of TCU in multiples of 4, for example, 4, 8, 16, 32, and so on. The maximum value supported for `MaxQueryTCU` is 1000. To request an increase to this soft limit, contact Amazon Web Services Support. For information about the default quota for maxQueryTCU, see Default quotas. This configuration is applicable only for on-demand usage of Timestream Compute Units (TCUs).
   *
   * The maximum value supported for `MaxQueryTCU` is 1000. To request an increase to this soft limit, contact Amazon Web Services Support. For information about the default quota for `maxQueryTCU`, see [Default quotas](https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html#limits.default).
   *
   * @public
   */
  MaxQueryTCU?: number | undefined;

  /**
   * The pricing model for queries in an account.
   *
   * > **Note:** The `QueryPricingModel` parameter is used by several Timestream operations; however, the `UpdateAccountSettings` API operation doesn't recognize any values other than `COMPUTE_UNITS`.
   *
   * @public
   */
  QueryPricingModel?: QueryPricingModel | undefined;

  /**
   * Modifies the query compute settings configured in your account, including the query pricing model and provisioned Timestream Compute Units (TCUs) in your account.
   *
   * > **Note:** This API is idempotent, meaning that making the same request multiple times will have the same effect as making the request once.
   *
   * @public
   */
  QueryCompute?: QueryComputeRequest | undefined;
}

/**
 * @public
 */
export interface UpdateAccountSettingsResponse {
  /**
   * The configured maximum number of compute units the service will use at any point in time to serve your queries.
   *
   * @public
   */
  MaxQueryTCU?: number | undefined;

  /**
   * The pricing model for an account.
   *
   * @public
   */
  QueryPricingModel?: QueryPricingModel | undefined;

  /**
   * Confirms the updated account settings for querying data in your account.
   *
   * @public
   */
  QueryCompute?: QueryComputeResponse | undefined;
}

/**
 * @public
 */
export interface UpdateScheduledQueryRequest {
  /**
   * ARN of the scheuled query.
   *
   * @public
   */
  ScheduledQueryArn: string | undefined;

  /**
   * State of the scheduled query.
   *
   * @public
   */
  State: ScheduledQueryState | undefined;
}

/**
 * Contains the metadata for query results such as the column names, data types, and other attributes.
 *
 * @public
 */
export interface ColumnInfo {
  /**
   * The name of the result set column. The name of the result set is available for columns of all data types except for arrays.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The data type of the result set column. The data type can be a scalar or complex. Scalar data types are integers, strings, doubles, Booleans, and others. Complex data types are types such as arrays, rows, and others.
   *
   * @public
   */
  Type: Type | undefined;
}

/**
 * Contains the data type of a column in a query result set. The data type can be scalar or complex. The supported scalar data types are integers, Boolean, string, double, timestamp, date, time, and intervals. The supported complex data types are arrays, rows, and timeseries.
 *
 * @public
 */
export interface Type {
  /**
   * Indicates if the column is of type string, integer, Boolean, double, timestamp, date, time. For more information, see [Supported data types](https://docs.aws.amazon.com/timestream/latest/developerguide/supported-data-types.html).
   *
   * @public
   */
  ScalarType?: ScalarType | undefined;

  /**
   * Indicates if the column is an array.
   *
   * @public
   */
  ArrayColumnInfo?: ColumnInfo | undefined;

  /**
   * Indicates if the column is a timeseries data type.
   *
   * @public
   */
  TimeSeriesMeasureValueColumnInfo?: ColumnInfo | undefined;

  /**
   * Indicates if the column is a row.
   *
   * @public
   */
  RowColumnInfo?: ColumnInfo[] | undefined;
}

/**
 * Datum represents a single data point in a query result.
 *
 * @public
 */
export interface Datum {
  /**
   * Indicates if the data point is a scalar value such as integer, string, double, or Boolean.
   *
   * @public
   */
  ScalarValue?: string | undefined;

  /**
   * Indicates if the data point is a timeseries data type.
   *
   * @public
   */
  TimeSeriesValue?: TimeSeriesDataPoint[] | undefined;

  /**
   * Indicates if the data point is an array.
   *
   * @public
   */
  ArrayValue?: Datum[] | undefined;

  /**
   * Indicates if the data point is a row.
   *
   * @public
   */
  RowValue?: Row | undefined;

  /**
   * Indicates if the data point is null.
   *
   * @public
   */
  NullValue?: boolean | undefined;
}

/**
 * Mapping for named parameters.
 *
 * @public
 */
export interface ParameterMapping {
  /**
   * Parameter name.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * Contains the data type of a column in a query result set. The data type can be scalar or complex. The supported scalar data types are integers, Boolean, string, double, timestamp, date, time, and intervals. The supported complex data types are arrays, rows, and timeseries.
   *
   * @public
   */
  Type: Type | undefined;
}

/**
 * Details of the column that is returned by the query.
 *
 * @public
 */
export interface SelectColumn {
  /**
   * Name of the column.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * Contains the data type of a column in a query result set. The data type can be scalar or complex. The supported scalar data types are integers, Boolean, string, double, timestamp, date, time, and intervals. The supported complex data types are arrays, rows, and timeseries.
   *
   * @public
   */
  Type?: Type | undefined;

  /**
   * Database that has this column.
   *
   * @public
   */
  DatabaseName?: string | undefined;

  /**
   * Table within the database that has this column.
   *
   * @public
   */
  TableName?: string | undefined;

  /**
   * True, if the column name was aliased by the query. False otherwise.
   *
   * @public
   */
  Aliased?: boolean | undefined;
}

/**
 * The timeseries data type represents the values of a measure over time. A time series is an array of rows of timestamps and measure values, with rows sorted in ascending order of time. A TimeSeriesDataPoint is a single data point in the time series. It represents a tuple of (time, measure value) in a time series.
 *
 * @public
 */
export interface TimeSeriesDataPoint {
  /**
   * The timestamp when the measure value was collected.
   *
   * @public
   */
  Time: string | undefined;

  /**
   * The measure value for the data point.
   *
   * @public
   */
  Value: Datum | undefined;
}

/**
 * Represents a single row in the query results.
 *
 * @public
 */
export interface Row {
  /**
   * List of data points in a single row of the result set.
   *
   * @public
   */
  Data: Datum[] | undefined;
}

/**
 * @public
 */
export interface QueryResponse {
  /**
   * A unique ID for the given query.
   *
   * @public
   */
  QueryId: string | undefined;

  /**
   * A pagination token that can be used again on a `Query` call to get the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The result set rows returned by the query.
   *
   * @public
   */
  Rows: Row[] | undefined;

  /**
   * The column data types of the returned result set.
   *
   * @public
   */
  ColumnInfo: ColumnInfo[] | undefined;

  /**
   * Information about the status of the query, including progress and bytes scanned.
   *
   * @public
   */
  QueryStatus?: QueryStatus | undefined;

  /**
   * Encapsulates `QueryInsights` containing insights and metrics related to the query that you executed.
   *
   * @public
   */
  QueryInsightsResponse?: QueryInsightsResponse | undefined;
}

/**
 * @public
 */
export interface PrepareQueryResponse {
  /**
   * The query string that you want prepare.
   *
   * @public
   */
  QueryString: string | undefined;

  /**
   * A list of SELECT clause columns of the submitted query string.
   *
   * @public
   */
  Columns: SelectColumn[] | undefined;

  /**
   * A list of parameters used in the submitted query string.
   *
   * @public
   */
  Parameters: ParameterMapping[] | undefined;
}
