// smithy-typescript generated code
import type {
  EvaluationFrequency,
  ExecutionStatus,
  QueryLanguage,
  ScheduledQueryState,
  ScheduleType,
  SuppressionType,
  SuppressionUnit,
} from "./enums";
import type { DestinationConfiguration, Processor, S3DeliveryConfiguration } from "./models_0";

/**
 * @deprecated Please use the generic tagging API model TagResourceRequest.
 * @public
 */
export interface TagLogGroupRequest {
  /**
   * The name of the log group.
   *
   * @public
   */
  logGroupName: string | undefined;

  /**
   * The key-value pairs to use for the tags.
   *
   * @public
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The ARN of the resource that you're adding tags to.
   *
   * The ARN format of a log group is `arn:aws:logs:Region:account-id:log-group:log-group-name`
   *
   * The ARN format of a destination is `arn:aws:logs:Region:account-id:destination:destination-name`
   *
   * For more information about ARN format, see [CloudWatch Logs resources and operations](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/iam-access-control-overview-cwl.html).
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The list of key-value pairs to associate with the resource.
   *
   * @public
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TestMetricFilterRequest {
  /**
   * A symbolic description of how CloudWatch Logs should interpret the data in each log event. For example, a log event can contain timestamps, IP addresses, strings, and so on. You use the filter pattern to specify what to look for in the log event message.
   *
   * @public
   */
  filterPattern: string | undefined;

  /**
   * The log event messages to test.
   *
   * @public
   */
  logEventMessages: string[] | undefined;
}

/**
 * Represents a matched event.
 *
 * @public
 */
export interface MetricFilterMatchRecord {
  /**
   * The event number.
   *
   * @public
   */
  eventNumber?: number | undefined;

  /**
   * The raw event data.
   *
   * @public
   */
  eventMessage?: string | undefined;

  /**
   * The values extracted from the event data by the filter.
   *
   * @public
   */
  extractedValues?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TestMetricFilterResponse {
  /**
   * The matched events.
   *
   * @public
   */
  matches?: MetricFilterMatchRecord[] | undefined;
}

/**
 * @public
 */
export interface TestTransformerRequest {
  /**
   * This structure contains the configuration of this log transformer that you want to test. A log transformer is an array of processors, where each processor applies one type of transformation to the log events that are ingested.
   *
   * @public
   */
  transformerConfig: Processor[] | undefined;

  /**
   * An array of the raw log events that you want to use to test this transformer.
   *
   * @public
   */
  logEventMessages: string[] | undefined;
}

/**
 * This structure contains information for one log event that has been processed by a log transformer.
 *
 * @public
 */
export interface TransformedLogRecord {
  /**
   * The event number.
   *
   * @public
   */
  eventNumber?: number | undefined;

  /**
   * The original log event message before it was transformed.
   *
   * @public
   */
  eventMessage?: string | undefined;

  /**
   * The log event message after being transformed.
   *
   * @public
   */
  transformedEventMessage?: string | undefined;
}

/**
 * @public
 */
export interface TestTransformerResponse {
  /**
   * An array where each member of the array includes both the original version and the transformed version of one of the log events that you input.
   *
   * @public
   */
  transformedLogs?: TransformedLogRecord[] | undefined;
}

/**
 * @deprecated Please use the generic tagging API model UntagResourceRequest.
 * @public
 */
export interface UntagLogGroupRequest {
  /**
   * The name of the log group.
   *
   * @public
   */
  logGroupName: string | undefined;

  /**
   * The tag keys. The corresponding tags are removed from the log group.
   *
   * @public
   */
  tags: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * The ARN of the CloudWatch Logs resource that you're removing tags from.
   *
   * The ARN format of a log group is `arn:aws:logs:Region:account-id:log-group:log-group-name`
   *
   * The ARN format of a destination is `arn:aws:logs:Region:account-id:destination:destination-name`
   *
   * For more information about ARN format, see [CloudWatch Logs resources and operations](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/iam-access-control-overview-cwl.html).
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The list of tag keys to remove from the resource.
   *
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * If you are suppressing an anomaly temporariliy, this structure defines how long the suppression period is to be.
 *
 * @public
 */
export interface SuppressionPeriod {
  /**
   * Specifies the number of seconds, minutes or hours to suppress this anomaly. There is no maximum.
   *
   * @public
   */
  value?: number | undefined;

  /**
   * Specifies whether the value of `value` is in seconds, minutes, or hours.
   *
   * @public
   */
  suppressionUnit?: SuppressionUnit | undefined;
}

/**
 * @public
 */
export interface UpdateAnomalyRequest {
  /**
   * If you are suppressing or unsuppressing an anomaly, specify its unique ID here. You can find anomaly IDs by using the [ListAnomalies](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_ListAnomalies.html) operation.
   *
   * @public
   */
  anomalyId?: string | undefined;

  /**
   * If you are suppressing or unsuppressing an pattern, specify its unique ID here. You can find pattern IDs by using the [ListAnomalies](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_ListAnomalies.html) operation.
   *
   * @public
   */
  patternId?: string | undefined;

  /**
   * The ARN of the anomaly detector that this operation is to act on.
   *
   * @public
   */
  anomalyDetectorArn: string | undefined;

  /**
   * Use this to specify whether the suppression to be temporary or infinite. If you specify `LIMITED`, you must also specify a `suppressionPeriod`. If you specify `INFINITE`, any value for `suppressionPeriod` is ignored.
   *
   * @public
   */
  suppressionType?: SuppressionType | undefined;

  /**
   * If you are temporarily suppressing an anomaly or pattern, use this structure to specify how long the suppression is to last.
   *
   * @public
   */
  suppressionPeriod?: SuppressionPeriod | undefined;

  /**
   * Set this to `true` to prevent CloudWatch Logs from displaying this behavior as an anomaly in the future. The behavior is then treated as baseline behavior. However, if similar but more severe occurrences of this behavior occur in the future, those will still be reported as anomalies.
   *
   * The default is `false`
   *
   * @public
   */
  baseline?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateDeliveryConfigurationRequest {
  /**
   * The ID of the delivery to be updated by this request.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The list of record fields to be delivered to the destination, in order. If the delivery's log source has mandatory fields, they must be included in this list.
   *
   * @public
   */
  recordFields?: string[] | undefined;

  /**
   * The field delimiter to use between record fields when the final output format of a delivery is in `Plain`, `W3C`, or `Raw` format.
   *
   * @public
   */
  fieldDelimiter?: string | undefined;

  /**
   * This structure contains parameters that are valid only when the delivery's delivery destination is an S3 bucket.
   *
   * @public
   */
  s3DeliveryConfiguration?: S3DeliveryConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateDeliveryConfigurationResponse {}

/**
 * @public
 */
export interface UpdateLogAnomalyDetectorRequest {
  /**
   * The ARN of the anomaly detector that you want to update.
   *
   * @public
   */
  anomalyDetectorArn: string | undefined;

  /**
   * Specifies how often the anomaly detector runs and look for anomalies. Set this value according to the frequency that the log group receives new logs. For example, if the log group receives new log events every 10 minutes, then setting `evaluationFrequency` to `FIFTEEN_MIN` might be appropriate.
   *
   * @public
   */
  evaluationFrequency?: EvaluationFrequency | undefined;

  /**
   * A symbolic description of how CloudWatch Logs should interpret the data in each log event. For example, a log event can contain timestamps, IP addresses, strings, and so on. You use the filter pattern to specify what to look for in the log event message.
   *
   * @public
   */
  filterPattern?: string | undefined;

  /**
   * The number of days to use as the life cycle of anomalies. After this time, anomalies are automatically baselined and the anomaly detector model will treat new occurrences of similar event as normal. Therefore, if you do not correct the cause of an anomaly during this time, it will be considered normal going forward and will not be detected.
   *
   * @public
   */
  anomalyVisibilityTime?: number | undefined;

  /**
   * Use this parameter to pause or restart the anomaly detector.
   *
   * @public
   */
  enabled: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateLookupTableRequest {
  /**
   * The ARN of the lookup table to update.
   *
   * @public
   */
  lookupTableArn: string | undefined;

  /**
   * An updated description of the lookup table.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The new CSV content to replace the existing data. The first row must be a header row with column names. The content must use UTF-8 encoding and not exceed 10 MB.
   *
   * You must specify either `tableBody` or `queryId`, but not both.
   *
   * @public
   */
  tableBody?: string | undefined;

  /**
   * The ID of a completed or cancelled CloudWatch Logs query whose results replace the lookup table content. A cancelled query replaces the content with the partial results that were available when the query was stopped.
   *
   * You must specify either `tableBody` or `queryId`, but not both.
   *
   * @public
   */
  queryId?: string | undefined;

  /**
   * The ARN of the KMS key to use to encrypt the lookup table data. You can use this parameter to add, update, or remove the KMS key. To remove the KMS key and use an Amazon Web Services-owned key instead, specify an empty string.
   *
   * @public
   */
  kmsKeyId?: string | undefined;
}

/**
 * @public
 */
export interface UpdateLookupTableResponse {
  /**
   * The ARN of the lookup table that was updated.
   *
   * @public
   */
  lookupTableArn?: string | undefined;

  /**
   * The time when the lookup table was last updated, expressed as the number of milliseconds after `Jan 1, 1970 00:00:00 UTC`.
   *
   * @public
   */
  lastUpdatedTime?: number | undefined;
}

/**
 * @public
 */
export interface UpdateScheduledQueryRequest {
  /**
   * The ARN or name of the scheduled query to update.
   *
   * @public
   */
  identifier: string | undefined;

  /**
   * An updated description for the scheduled query.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The updated query language for the scheduled query.
   *
   * @public
   */
  queryLanguage: QueryLanguage | undefined;

  /**
   * The updated query string to execute.
   *
   * @public
   */
  queryString: string | undefined;

  /**
   * The updated array of log group names or ARNs to query.
   *
   * @public
   */
  logGroupIdentifiers?: string[] | undefined;

  /**
   * The updated cron expression that defines when the scheduled query runs.
   *
   * @public
   */
  scheduleExpression: string | undefined;

  /**
   * The updated timezone for evaluating the schedule expression.
   *
   * @public
   */
  timezone?: string | undefined;

  /**
   * The updated time offset in seconds that defines the lookback period for the query.
   *
   * @public
   */
  startTimeOffset?: number | undefined;

  /**
   * The updated time offset in seconds that defines the end of the lookback period for the query.
   *
   * @public
   */
  endTimeOffset?: number | undefined;

  /**
   * The updated configuration for where to deliver query results.
   *
   * @public
   */
  destinationConfiguration?: DestinationConfiguration | undefined;

  /**
   * The updated start time for the scheduled query in Unix epoch format.
   *
   * @public
   */
  scheduleStartTime?: number | undefined;

  /**
   * The updated end time for the scheduled query in Unix epoch format.
   *
   * @public
   */
  scheduleEndTime?: number | undefined;

  /**
   * The updated ARN of the IAM role that grants permissions to execute the query and deliver results.
   *
   * @public
   */
  executionRoleArn: string | undefined;

  /**
   * The updated state of the scheduled query.
   *
   * @public
   */
  state?: ScheduledQueryState | undefined;
}

/**
 * @public
 */
export interface UpdateScheduledQueryResponse {
  /**
   * The ARN of the updated scheduled query.
   *
   * @public
   */
  scheduledQueryArn?: string | undefined;

  /**
   * The name of the updated scheduled query.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The description of the updated scheduled query.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The query language of the updated scheduled query.
   *
   * @public
   */
  queryLanguage?: QueryLanguage | undefined;

  /**
   * The query string of the updated scheduled query.
   *
   * @public
   */
  queryString?: string | undefined;

  /**
   * The log groups queried by the updated scheduled query.
   *
   * @public
   */
  logGroupIdentifiers?: string[] | undefined;

  /**
   * The cron expression of the updated scheduled query.
   *
   * @public
   */
  scheduleExpression?: string | undefined;

  /**
   * The timezone of the updated scheduled query.
   *
   * @public
   */
  timezone?: string | undefined;

  /**
   * The time offset of the updated scheduled query.
   *
   * @public
   */
  startTimeOffset?: number | undefined;

  /**
   * The end time offset in seconds of the updated scheduled query.
   *
   * @public
   */
  endTimeOffset?: number | undefined;

  /**
   * The destination configuration of the updated scheduled query.
   *
   * @public
   */
  destinationConfiguration?: DestinationConfiguration | undefined;

  /**
   * The state of the updated scheduled query.
   *
   * @public
   */
  state?: ScheduledQueryState | undefined;

  /**
   * The schedule type of the updated scheduled query.
   *
   * @public
   */
  scheduleType?: ScheduleType | undefined;

  /**
   * The timestamp when the updated scheduled query was last executed.
   *
   * @public
   */
  lastTriggeredTime?: number | undefined;

  /**
   * The status of the most recent execution of the updated scheduled query.
   *
   * @public
   */
  lastExecutionStatus?: ExecutionStatus | undefined;

  /**
   * The start time of the updated scheduled query.
   *
   * @public
   */
  scheduleStartTime?: number | undefined;

  /**
   * The end time of the updated scheduled query.
   *
   * @public
   */
  scheduleEndTime?: number | undefined;

  /**
   * The execution role ARN of the updated scheduled query.
   *
   * @public
   */
  executionRoleArn?: string | undefined;

  /**
   * The timestamp when the scheduled query was originally created.
   *
   * @public
   */
  creationTime?: number | undefined;

  /**
   * The timestamp when the scheduled query was last updated.
   *
   * @public
   */
  lastUpdatedTime?: number | undefined;
}

/**
 * Defines the data type structure for a log field, including the type, element information, and nested fields for complex types.
 *
 * @public
 */
export interface LogFieldType {
  /**
   * The data type of the log field.
   *
   * @public
   */
  type?: string | undefined;

  /**
   * For array or collection types, specifies the element type information.
   *
   * @public
   */
  element?: LogFieldType | undefined;

  /**
   * For complex types, contains the nested field definitions.
   *
   * @public
   */
  fields?: LogFieldsListItem[] | undefined;
}

/**
 * Represents a log field with its name and data type information for a specific data source.
 *
 * @public
 */
export interface LogFieldsListItem {
  /**
   * The name of the log field.
   *
   * @public
   */
  logFieldName?: string | undefined;

  /**
   * The data type information for the log field.
   *
   * @public
   */
  logFieldType?: LogFieldType | undefined;
}

/**
 * @public
 */
export interface GetLogFieldsResponse {
  /**
   * The list of log fields for the specified data source, including field names and their data types.
   *
   * @public
   */
  logFields?: LogFieldsListItem[] | undefined;
}
