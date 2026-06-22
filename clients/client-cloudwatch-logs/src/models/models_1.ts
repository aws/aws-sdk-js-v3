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
import type { DestinationConfiguration, S3DeliveryConfiguration } from "./models_0";

/**
 * @deprecated Please use the generic tagging API model UntagResourceRequest.
 * @public
 */
export interface UntagLogGroupRequest {
  /**
   * <p>The name of the log group.</p>
   * @public
   */
  logGroupName: string | undefined;

  /**
   * <p>The tag keys. The corresponding tags are removed from the log group.</p>
   * @public
   */
  tags: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p>The ARN of the CloudWatch Logs resource that you're removing tags from.</p>
   *          <p>The ARN format of a log group is
   *           <code>arn:aws:logs:<i>Region</i>:<i>account-id</i>:log-group:<i>log-group-name</i>
   *             </code>
   *          </p>
   *          <p>The ARN format of a destination is
   *           <code>arn:aws:logs:<i>Region</i>:<i>account-id</i>:destination:<i>destination-name</i>
   *             </code>
   *          </p>
   *          <p>For more information about ARN format, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/iam-access-control-overview-cwl.html">CloudWatch Logs
   *         resources and operations</a>.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The list of tag keys to remove from the resource.</p>
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * <p>If you are suppressing an anomaly temporariliy, this structure defines how long the
 *       suppression period is to be.</p>
 * @public
 */
export interface SuppressionPeriod {
  /**
   * <p>Specifies the number of seconds, minutes or hours to suppress this anomaly. There is no
   *       maximum.</p>
   * @public
   */
  value?: number | undefined;

  /**
   * <p>Specifies whether the value of <code>value</code> is in seconds, minutes, or hours.</p>
   * @public
   */
  suppressionUnit?: SuppressionUnit | undefined;
}

/**
 * @public
 */
export interface UpdateAnomalyRequest {
  /**
   * <p>If you are suppressing or unsuppressing an anomaly, specify its unique ID here. You can
   *       find anomaly IDs by using the <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_ListAnomalies.html">ListAnomalies</a>
   *       operation.</p>
   * @public
   */
  anomalyId?: string | undefined;

  /**
   * <p>If you are suppressing or unsuppressing an pattern, specify its unique ID here. You can
   *       find pattern IDs by using the <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_ListAnomalies.html">ListAnomalies</a>
   *       operation.</p>
   * @public
   */
  patternId?: string | undefined;

  /**
   * <p>The ARN of the anomaly detector that this operation is to act on.</p>
   * @public
   */
  anomalyDetectorArn: string | undefined;

  /**
   * <p>Use this to specify whether the suppression to be temporary or infinite. If you specify
   *         <code>LIMITED</code>, you must also specify a <code>suppressionPeriod</code>. If you specify
   *         <code>INFINITE</code>, any value for <code>suppressionPeriod</code> is ignored. </p>
   * @public
   */
  suppressionType?: SuppressionType | undefined;

  /**
   * <p>If you are temporarily suppressing an anomaly or pattern, use this structure to specify
   *       how long the suppression is to last.</p>
   * @public
   */
  suppressionPeriod?: SuppressionPeriod | undefined;

  /**
   * <p>Set this to <code>true</code> to prevent CloudWatch Logs from displaying this behavior
   *       as an anomaly in the future. The behavior is then treated as baseline behavior. However, if
   *       similar but more severe occurrences of this behavior occur in the future, those will still be
   *       reported as anomalies. </p>
   *          <p>The default is <code>false</code>
   *          </p>
   * @public
   */
  baseline?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateDeliveryConfigurationRequest {
  /**
   * <p>The ID of the delivery to be updated by this request.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The list of record fields to be delivered to the destination, in order. If the delivery's
   *       log source has mandatory fields, they must be included in this list.</p>
   * @public
   */
  recordFields?: string[] | undefined;

  /**
   * <p>The field delimiter to use between record fields when the final output format of a
   *       delivery is in <code>Plain</code>, <code>W3C</code>, or <code>Raw</code> format.</p>
   * @public
   */
  fieldDelimiter?: string | undefined;

  /**
   * <p>This structure contains parameters that are valid only when the delivery's delivery
   *       destination is an S3 bucket.</p>
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
   * <p>The ARN of the anomaly detector that you want to update.</p>
   * @public
   */
  anomalyDetectorArn: string | undefined;

  /**
   * <p>Specifies how often the anomaly detector runs and look for anomalies. Set this value
   *       according to the frequency that the log group receives new logs. For example, if the log group
   *       receives new log events every 10 minutes, then setting <code>evaluationFrequency</code> to
   *         <code>FIFTEEN_MIN</code> might be appropriate.</p>
   * @public
   */
  evaluationFrequency?: EvaluationFrequency | undefined;

  /**
   * <p>A symbolic description of how CloudWatch Logs should interpret the data in each log
   *       event. For example, a log event can contain timestamps, IP addresses, strings, and so on. You
   *       use the filter pattern to specify what to look for in the log event message.</p>
   * @public
   */
  filterPattern?: string | undefined;

  /**
   * <p>The number of days to use as the life cycle of anomalies. After this time, anomalies are
   *       automatically baselined and the anomaly detector model will treat new occurrences of similar
   *       event as normal. Therefore, if you do not correct the cause of an anomaly during this time, it
   *       will be considered normal going forward and will not be detected.</p>
   * @public
   */
  anomalyVisibilityTime?: number | undefined;

  /**
   * <p>Use this parameter to pause or restart the anomaly detector. </p>
   * @public
   */
  enabled: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateLookupTableRequest {
  /**
   * <p>The ARN of the lookup table to update.</p>
   * @public
   */
  lookupTableArn: string | undefined;

  /**
   * <p>An updated description of the lookup table.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The new CSV content to replace the existing data. The first row must be a header row
   *       with column names. The content must use UTF-8 encoding and not exceed 10 MB.</p>
   * @public
   */
  tableBody: string | undefined;

  /**
   * <p>The ARN of the KMS key to use to encrypt the lookup table data. You can
   *       use this parameter to add, update, or remove the KMS key. To remove the KMS key and use an
   *       Amazon Web Services-owned key instead, specify an empty string.</p>
   * @public
   */
  kmsKeyId?: string | undefined;
}

/**
 * @public
 */
export interface UpdateLookupTableResponse {
  /**
   * <p>The ARN of the lookup table that was updated.</p>
   * @public
   */
  lookupTableArn?: string | undefined;

  /**
   * <p>The time when the lookup table was last updated, expressed as the number of
   *       milliseconds after <code>Jan 1, 1970 00:00:00 UTC</code>.</p>
   * @public
   */
  lastUpdatedTime?: number | undefined;
}

/**
 * @public
 */
export interface UpdateScheduledQueryRequest {
  /**
   * <p>The ARN or name of the scheduled query to update.</p>
   * @public
   */
  identifier: string | undefined;

  /**
   * <p>An updated description for the scheduled query.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The updated query language for the scheduled query.</p>
   * @public
   */
  queryLanguage: QueryLanguage | undefined;

  /**
   * <p>The updated query string to execute.</p>
   * @public
   */
  queryString: string | undefined;

  /**
   * <p>The updated array of log group names or ARNs to query.</p>
   * @public
   */
  logGroupIdentifiers?: string[] | undefined;

  /**
   * <p>The updated cron expression that defines when the scheduled query runs.</p>
   * @public
   */
  scheduleExpression: string | undefined;

  /**
   * <p>The updated timezone for evaluating the schedule expression.</p>
   * @public
   */
  timezone?: string | undefined;

  /**
   * <p>The updated time offset in seconds that defines the lookback period for the query.</p>
   * @public
   */
  startTimeOffset?: number | undefined;

  /**
   * <p>The updated time offset in seconds that defines the end of the lookback period for
   *       the query.</p>
   * @public
   */
  endTimeOffset?: number | undefined;

  /**
   * <p>The updated configuration for where to deliver query results.</p>
   * @public
   */
  destinationConfiguration?: DestinationConfiguration | undefined;

  /**
   * <p>The updated start time for the scheduled query in Unix epoch format.</p>
   * @public
   */
  scheduleStartTime?: number | undefined;

  /**
   * <p>The updated end time for the scheduled query in Unix epoch format.</p>
   * @public
   */
  scheduleEndTime?: number | undefined;

  /**
   * <p>The updated ARN of the IAM role that grants permissions to execute the query and deliver
   *       results.</p>
   * @public
   */
  executionRoleArn: string | undefined;

  /**
   * <p>The updated state of the scheduled query.</p>
   * @public
   */
  state?: ScheduledQueryState | undefined;
}

/**
 * @public
 */
export interface UpdateScheduledQueryResponse {
  /**
   * <p>The ARN of the updated scheduled query.</p>
   * @public
   */
  scheduledQueryArn?: string | undefined;

  /**
   * <p>The name of the updated scheduled query.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The description of the updated scheduled query.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The query language of the updated scheduled query.</p>
   * @public
   */
  queryLanguage?: QueryLanguage | undefined;

  /**
   * <p>The query string of the updated scheduled query.</p>
   * @public
   */
  queryString?: string | undefined;

  /**
   * <p>The log groups queried by the updated scheduled query.</p>
   * @public
   */
  logGroupIdentifiers?: string[] | undefined;

  /**
   * <p>The cron expression of the updated scheduled query.</p>
   * @public
   */
  scheduleExpression?: string | undefined;

  /**
   * <p>The timezone of the updated scheduled query.</p>
   * @public
   */
  timezone?: string | undefined;

  /**
   * <p>The time offset of the updated scheduled query.</p>
   * @public
   */
  startTimeOffset?: number | undefined;

  /**
   * <p>The end time offset in seconds of the updated scheduled query.</p>
   * @public
   */
  endTimeOffset?: number | undefined;

  /**
   * <p>The destination configuration of the updated scheduled query.</p>
   * @public
   */
  destinationConfiguration?: DestinationConfiguration | undefined;

  /**
   * <p>The state of the updated scheduled query.</p>
   * @public
   */
  state?: ScheduledQueryState | undefined;

  /**
   * <p>The schedule type of the updated scheduled query.</p>
   * @public
   */
  scheduleType?: ScheduleType | undefined;

  /**
   * <p>The timestamp when the updated scheduled query was last executed.</p>
   * @public
   */
  lastTriggeredTime?: number | undefined;

  /**
   * <p>The status of the most recent execution of the updated scheduled query.</p>
   * @public
   */
  lastExecutionStatus?: ExecutionStatus | undefined;

  /**
   * <p>The start time of the updated scheduled query.</p>
   * @public
   */
  scheduleStartTime?: number | undefined;

  /**
   * <p>The end time of the updated scheduled query.</p>
   * @public
   */
  scheduleEndTime?: number | undefined;

  /**
   * <p>The execution role ARN of the updated scheduled query.</p>
   * @public
   */
  executionRoleArn?: string | undefined;

  /**
   * <p>The timestamp when the scheduled query was originally created.</p>
   * @public
   */
  creationTime?: number | undefined;

  /**
   * <p>The timestamp when the scheduled query was last updated.</p>
   * @public
   */
  lastUpdatedTime?: number | undefined;
}

/**
 * <p>Defines the data type structure for a log field, including the type, element information,
 *       and nested fields for complex types.</p>
 * @public
 */
export interface LogFieldType {
  /**
   * <p>The data type of the log field.</p>
   * @public
   */
  type?: string | undefined;

  /**
   * <p>For array or collection types, specifies the element type information.</p>
   * @public
   */
  element?: LogFieldType | undefined;

  /**
   * <p>For complex types, contains the nested field definitions.</p>
   * @public
   */
  fields?: LogFieldsListItem[] | undefined;
}

/**
 * <p>Represents a log field with its name and data type information for a specific data
 *       source.</p>
 * @public
 */
export interface LogFieldsListItem {
  /**
   * <p>The name of the log field.</p>
   * @public
   */
  logFieldName?: string | undefined;

  /**
   * <p>The data type information for the log field.</p>
   * @public
   */
  logFieldType?: LogFieldType | undefined;
}

/**
 * @public
 */
export interface GetLogFieldsResponse {
  /**
   * <p>The list of log fields for the specified data source, including field names and their data
   *       types.</p>
   * @public
   */
  logFields?: LogFieldsListItem[] | undefined;
}
