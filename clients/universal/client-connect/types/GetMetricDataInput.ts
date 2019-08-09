import { _Filters } from "./_Filters";
import { _HistoricalMetric } from "./_HistoricalMetric";
import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetMetricDataInput shape
 */
export interface GetMetricDataInput {
  /**
   * <p>The identifier for your Amazon Connect instance. To find the ID of your instance, open the AWS console and select Amazon Connect. Select the alias of the instance in the Instance alias column. The instance ID is displayed in the Overview section of your instance settings. For example, the instance ID is the set of characters at the end of the instance ARN, after instance/, such as 10a4c4eb-f57e-4d4c-b602-bf39176ced07.</p>
   */
  InstanceId: string;

  /**
   * <p>The timestamp, in UNIX Epoch time format, at which to start the reporting interval for the retrieval of historical metrics data. The time must be specified using a multiple of 5 minutes, such as 10:05, 10:10, 10:15.</p> <p> <code>StartTime</code> cannot be earlier than 24 hours before the time of the request. Historical metrics are available in Amazon Connect only for 24 hours.</p>
   */
  StartTime: Date | string | number;

  /**
   * <p>The timestamp, in UNIX Epoch time format, at which to end the reporting interval for the retrieval of historical metrics data. The time must be specified using an interval of 5 minutes, such as 11:00, 11:05, 11:10, and must be later than the <code>StartTime</code> timestamp.</p> <p>The time range between <code>StartTime</code> and <code>EndTime</code> must be less than 24 hours.</p>
   */
  EndTime: Date | string | number;

  /**
   * <p>A <code>Filters</code> object that contains a list of queue IDs or queue ARNs, up to 100, or a list of Channels to use to filter the metrics returned in the response. Metric data is retrieved only for the resources associated with the IDs, ARNs, or Channels included in the filter. You can use both IDs and ARNs together in a request. Only VOICE is supported for Channel.</p> <p>To find the ARN for a queue, open the queue you want to use in the Amazon Connect Queue editor. The ARN for the queue is displayed in the address bar as part of the URL. For example, the queue ARN is the set of characters at the end of the URL, after 'id=' such as <code>arn:aws:connect:us-east-1:270923740243:instance/78fb859d-1b7d-44b1-8aa3-12f0835c5855/queue/1d1a4575-9618-40ab-bbeb-81e45795fe61</code>. The queue ID is also included in the URL, and is the string after 'queue/'.</p>
   */
  Filters: _Filters;

  /**
   * <p>The grouping applied to the metrics returned. For example, when results are grouped by queueId, the metrics returned are grouped by queue. The values returned apply to the metrics for each queue rather than aggregated for all queues.</p> <p>The current version supports grouping by Queue</p> <p>If no <code>Grouping</code> is included in the request, a summary of <code>HistoricalMetrics</code> for all queues is returned.</p>
   */
  Groupings?:
    | Array<"QUEUE" | "CHANNEL" | string>
    | Iterable<"QUEUE" | "CHANNEL" | string>;

  /**
   * <p>A list of <code>HistoricalMetric</code> objects that contain the metrics to retrieve with the request.</p> <p>A <code>HistoricalMetric</code> object contains: <code>HistoricalMetricName</code>, <code>Statistic</code>, <code>Threshold</code>, and <code>Unit</code>.</p> <p>You must list each metric to retrieve data for in the request. For each historical metric you include in the request, you must include a <code>Unit</code> and a <code>Statistic</code>. </p> <p>The following historical metrics are available:</p> <dl> <dt>CONTACTS_QUEUED</dt> <dd> <p>Unit: COUNT</p> <p>Statistic: SUM</p> </dd> <dt>CONTACTS_HANDLED</dt> <dd> <p>Unit: COUNT</p> <p>Statistics: SUM</p> </dd> <dt>CONTACTS_ABANDONED</dt> <dd> <p>Unit: COUNT</p> <p>Statistics: SUM</p> </dd> <dt>CONTACTS_CONSULTED</dt> <dd> <p>Unit: COUNT</p> <p>Statistics: SUM</p> </dd> <dt>CONTACTS_AGENT_HUNG_UP_FIRST</dt> <dd> <p>Unit: COUNT</p> <p>Statistics: SUM</p> </dd> <dt>CONTACTS_HANDLED_INCOMING</dt> <dd> <p>Unit: COUNT</p> <p>Statistics: SUM</p> </dd> <dt>CONTACTS_HANDLED_OUTBOUND</dt> <dd> <p>Unit: COUNT</p> <p>Statistics: SUM</p> </dd> <dt>CONTACTS_HOLD_ABANDONS</dt> <dd> <p>Unit: COUNT</p> <p>Statistics: SUM</p> </dd> <dt>CONTACTS_TRANSFERRED_IN</dt> <dd> <p>Unit: COUNT</p> <p>Statistics: SUM</p> </dd> <dt>CONTACTS_TRANSFERRED_OUT</dt> <dd> <p>Unit: COUNT</p> <p>Statistics: SUM</p> </dd> <dt>CONTACTS_TRANSFERRED_IN_FROM_QUEUE</dt> <dd> <p>Unit: COUNT</p> <p>Statistics: SUM</p> </dd> <dt>CONTACTS_TRANSFERRED_OUT_FROM_QUEUE</dt> <dd> <p>Unit: COUNT</p> <p>Statistics: SUM</p> </dd> <dt>CALLBACK_CONTACTS_HANDLED</dt> <dd> <p>Unit: COUNT</p> <p>Statistics: SUM</p> </dd> <dt>CALLBACK_CONTACTS_HANDLED</dt> <dd> <p>Unit: COUNT</p> <p>Statistics: SUM</p> </dd> <dt>API_CONTACTS_HANDLED</dt> <dd> <p>Unit: COUNT</p> <p>Statistics: SUM</p> </dd> <dt>CONTACTS_MISSED</dt> <dd> <p>Unit: COUNT</p> <p>Statistics: SUM</p> </dd> <dt>OCCUPANCY</dt> <dd> <p>Unit: PERCENT</p> <p>Statistics: AVG</p> </dd> <dt>HANDLE_TIME</dt> <dd> <p>Unit: SECONDS</p> <p>Statistics: AVG</p> </dd> <dt>AFTER_CONTACT_WORK_TIME</dt> <dd> <p>Unit: SECONDS</p> <p>Statistics: AVG</p> </dd> <dt>QUEUED_TIME</dt> <dd> <p>Unit: SECONDS</p> <p>Statistics: MAX</p> </dd> <dt>ABANDON_TIME</dt> <dd> <p>Unit: COUNT</p> <p>Statistics: SUM</p> </dd> <dt>QUEUE_ANSWER_TIME</dt> <dd> <p>Unit: SECONDS</p> <p>Statistics: AVG</p> </dd> <dt>HOLD_TIME</dt> <dd> <p>Unit: SECONDS</p> <p>Statistics: AVG</p> </dd> <dt>INTERACTION_TIME</dt> <dd> <p>Unit: SECONDS</p> <p>Statistics: AVG</p> </dd> <dt>INTERACTION_AND_HOLD_TIME</dt> <dd> <p>Unit: SECONDS</p> <p>Statistics: AVG</p> </dd> <dt>SERVICE_LEVEL</dt> <dd> <p>Unit: PERCENT</p> <p>Statistics: AVG</p> <p>Threshold: Only "Less than" comparisons are supported, with the following service level thresholds: 15, 20, 25, 30, 45, 60, 90, 120, 180, 240, 300, 600</p> </dd> </dl>
   */
  HistoricalMetrics: Array<_HistoricalMetric> | Iterable<_HistoricalMetric>;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>Indicates the maximum number of results to return per page in the response, between 1-100.</p>
   */
  MaxResults?: number;

  /**
   * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
   */
  $maxRetries?: number;

  /**
   * An object that may be queried to determine if the underlying operation has been aborted.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
   */
  $abortSignal?: __aws_sdk_types.AbortSignal;

  /**
   * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
   */
  $httpOptions?: __HttpOptions__;
}
