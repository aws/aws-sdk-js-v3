// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { CloudWatchLogsServiceException as __BaseException } from "./CloudWatchLogsServiceException";

import {
  DestinationConfiguration,
  EvaluationFrequency,
  ExecutionStatus,
  Processor,
  QueryLanguage,
  S3DeliveryConfiguration,
  ScheduledQueryState,
} from "./models_0";

/**
 * <p>A resource can have no more than 50 tags.</p>
 * @public
 */
export class TooManyTagsException extends __BaseException {
  readonly name: "TooManyTagsException" = "TooManyTagsException";
  readonly $fault: "client" = "client";
  /**
   * <p>The name of the resource.</p>
   * @public
   */
  resourceName?: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyTagsException, __BaseException>) {
    super({
      name: "TooManyTagsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyTagsException.prototype);
    this.resourceName = opts.resourceName;
  }
}

/**
 * @public
 */
export interface TestMetricFilterRequest {
  /**
   * <p>A symbolic description of how CloudWatch Logs should interpret the data in each log
   *       event. For example, a log event can contain timestamps, IP addresses, strings, and so on. You
   *       use the filter pattern to specify what to look for in the log event message.</p>
   * @public
   */
  filterPattern: string | undefined;

  /**
   * <p>The log event messages to test.</p>
   * @public
   */
  logEventMessages: string[] | undefined;
}

/**
 * <p>Represents a matched event.</p>
 * @public
 */
export interface MetricFilterMatchRecord {
  /**
   * <p>The event number.</p>
   * @public
   */
  eventNumber?: number | undefined;

  /**
   * <p>The raw event data.</p>
   * @public
   */
  eventMessage?: string | undefined;

  /**
   * <p>The values extracted from the event data by the filter.</p>
   * @public
   */
  extractedValues?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TestMetricFilterResponse {
  /**
   * <p>The matched events.</p>
   * @public
   */
  matches?: MetricFilterMatchRecord[] | undefined;
}

/**
 * @public
 */
export interface TestTransformerRequest {
  /**
   * <p>This structure contains the configuration of this log transformer that you want to test. A
   *       log transformer is an array of processors, where each processor applies one type of
   *       transformation to the log events that are ingested.</p>
   * @public
   */
  transformerConfig: Processor[] | undefined;

  /**
   * <p>An array of the raw log events that you want to use to test this transformer.</p>
   * @public
   */
  logEventMessages: string[] | undefined;
}

/**
 * <p>This structure contains information for one log event that has been processed by a log
 *       transformer.</p>
 * @public
 */
export interface TransformedLogRecord {
  /**
   * <p>The event number.</p>
   * @public
   */
  eventNumber?: number | undefined;

  /**
   * <p>The original log event message before it was transformed.</p>
   * @public
   */
  eventMessage?: string | undefined;

  /**
   * <p>The log event message after being transformed.</p>
   * @public
   */
  transformedEventMessage?: string | undefined;
}

/**
 * @public
 */
export interface TestTransformerResponse {
  /**
   * <p>An array where each member of the array includes both the original version and the
   *       transformed version of one of the log events that you input.</p>
   * @public
   */
  transformedLogs?: TransformedLogRecord[] | undefined;
}

/**
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
 * @public
 * @enum
 */
export const SuppressionUnit = {
  HOURS: "HOURS",
  MINUTES: "MINUTES",
  SECONDS: "SECONDS",
} as const;

/**
 * @public
 */
export type SuppressionUnit = (typeof SuppressionUnit)[keyof typeof SuppressionUnit];

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
 * @enum
 */
export const SuppressionType = {
  INFINITE: "INFINITE",
  LIMITED: "LIMITED",
} as const;

/**
 * @public
 */
export type SuppressionType = (typeof SuppressionType)[keyof typeof SuppressionType];

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
export interface UpdateScheduledQueryRequest {
  /**
   * <p>The name or ARN of the scheduled query to update.</p>
   * @public
   */
  identifier: string | undefined;

  /**
   * <p>Updated description for the scheduled query.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Updated query language to use (LogsQL, PPL, or SQL).</p>
   * @public
   */
  queryLanguage: QueryLanguage | undefined;

  /**
   * <p>Updated CloudWatch Logs Insights query string to execute.</p>
   * @public
   */
  queryString: string | undefined;

  /**
   * <p>Updated log group identifiers to query.</p>
   * @public
   */
  logGroupIdentifiers?: string[] | undefined;

  /**
   * <p>Updated cron expression that defines when the scheduled query runs.</p>
   * @public
   */
  scheduleExpression: string | undefined;

  /**
   * <p>Updated timezone in which the schedule expression is evaluated.</p>
   * @public
   */
  timezone?: string | undefined;

  /**
   * <p>Updated time offset in seconds from the execution time for the start of the query time range.</p>
   * @public
   */
  startTimeOffset?: number | undefined;

  /**
   * <p>Updated configuration for destinations where the query results will be delivered.</p>
   * @public
   */
  destinationConfiguration?: DestinationConfiguration | undefined;

  /**
   * <p>Updated start time for the query schedule in Unix epoch time.</p>
   * @public
   */
  scheduleStartTime?: number | undefined;

  /**
   * <p>Updated end time for the query schedule in Unix epoch time.</p>
   * @public
   */
  scheduleEndTime?: number | undefined;

  /**
   * <p>Updated ARN of the IAM role that CloudWatch Logs will assume to execute the scheduled query.</p>
   * @public
   */
  executionRoleArn: string | undefined;

  /**
   * <p>Updated state of the scheduled query (ENABLED or DISABLED).</p>
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
   * <p>The query language used by the updated scheduled query.</p>
   * @public
   */
  queryLanguage?: QueryLanguage | undefined;

  /**
   * <p>The query string of the updated scheduled query.</p>
   * @public
   */
  queryString?: string | undefined;

  /**
   * <p>The log group identifiers of the updated scheduled query.</p>
   * @public
   */
  logGroupIdentifiers?: string[] | undefined;

  /**
   * <p>The schedule expression of the updated scheduled query.</p>
   * @public
   */
  scheduleExpression?: string | undefined;

  /**
   * <p>The timezone of the updated scheduled query.</p>
   * @public
   */
  timezone?: string | undefined;

  /**
   * <p>The start time offset of the updated scheduled query.</p>
   * @public
   */
  startTimeOffset?: number | undefined;

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
   * <p>The time when the updated scheduled query was last executed.</p>
   * @public
   */
  lastTriggeredTime?: number | undefined;

  /**
   * <p>The status of the last execution of the updated scheduled query (Running, Complete, Failed, Timeout, or InvalidQuery).</p>
   * @public
   */
  lastExecutionStatus?: ExecutionStatus | undefined;

  /**
   * <p>The schedule start time of the updated scheduled query.</p>
   * @public
   */
  scheduleStartTime?: number | undefined;

  /**
   * <p>The schedule end time of the updated scheduled query.</p>
   * @public
   */
  scheduleEndTime?: number | undefined;

  /**
   * <p>The execution role ARN of the updated scheduled query.</p>
   * @public
   */
  executionRoleArn?: string | undefined;

  /**
   * <p>The creation time of the updated scheduled query.</p>
   * @public
   */
  creationTime?: number | undefined;

  /**
   * <p>The last updated time of the scheduled query.</p>
   * @public
   */
  lastUpdatedTime?: number | undefined;
}
