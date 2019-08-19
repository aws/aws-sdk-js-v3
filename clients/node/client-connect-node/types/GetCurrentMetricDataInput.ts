import { _Filters } from "./_Filters";
import { _CurrentMetric } from "./_CurrentMetric";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetCurrentMetricDataInput shape
 */
export interface GetCurrentMetricDataInput {
  /**
   * <p>The identifier for your Amazon Connect instance. To find the ID of your instance, open the AWS console and select Amazon Connect. Select the alias of the instance in the Instance alias column. The instance ID is displayed in the Overview section of your instance settings. For example, the instance ID is the set of characters at the end of the instance ARN, after instance/, such as 10a4c4eb-f57e-4d4c-b602-bf39176ced07.</p>
   */
  InstanceId: string;

  /**
   * <p>A <code>Filters</code> object that contains a list of queue IDs or queue ARNs, up to 100, or list of Channels to use to filter the metrics returned in the response. Metric data is retrieved only for the resources associated with the queue IDs, ARNs, or Channels included in the filter. You can include both IDs and ARNs in the same request. To retrieve metrics for all queues, add the queue ID or ARN for each queue in your instance. Only VOICE is supported for Channels.</p> <p>To find the ARN for a queue, open the queue you want to use in the Amazon Connect Queue editor. The ARN for the queue is displayed in the address bar as part of the URL. For example, the queue ARN is the set of characters at the end of the URL, after 'id=' such as <code>arn:aws:connect:us-east-1:270923740243:instance/78fb859d-1b7d-44b1-8aa3-12f0835c5855/queue/1d1a4575-9618-40ab-bbeb-81e45795fe61</code>. The queue ID is also included in the URL, and is the string after 'queue/'.</p>
   */
  Filters: _Filters;

  /**
   * <p>The grouping applied to the metrics returned. For example, when grouped by QUEUE, the metrics returned apply to each queue rather than aggregated for all queues. If you group by CHANNEL, you should include a Channels filter. The only supported channel is VOICE.</p> <p>If no <code>Grouping</code> is included in the request, a summary of <code>CurrentMetrics</code> is returned.</p>
   */
  Groupings?:
    | Array<"QUEUE" | "CHANNEL" | string>
    | Iterable<"QUEUE" | "CHANNEL" | string>;

  /**
   * <p>A list of <code>CurrentMetric</code> objects for the metrics to retrieve. Each <code>CurrentMetric</code> includes a name of a metric to retrieve and the unit to use for it. You must list each metric to retrieve data for in the request.</p> <p>The following metrics are available:</p> <dl> <dt>AGENTS_AVAILABLE</dt> <dd> <p>Unit: COUNT</p> </dd> <dt>AGENTS_ONLINE</dt> <dd> <p>Unit: COUNT</p> </dd> <dt>AGENTS_ON_CALL</dt> <dd> <p>Unit: COUNT</p> </dd> <dt>AGENTS_STAFFED</dt> <dd> <p>Unit: COUNT</p> </dd> <dt>AGENTS_AFTER_CONTACT_WORK</dt> <dd> <p>Unit: COUNT</p> </dd> <dt>AGENTS_NON_PRODUCTIVE</dt> <dd> <p>Unit: COUNT</p> </dd> <dt>AGENTS_ERROR</dt> <dd> <p>Unit: COUNT</p> </dd> <dt>CONTACTS_IN_QUEUE</dt> <dd> <p>Unit: COUNT</p> </dd> <dt>OLDEST_CONTACT_AGE</dt> <dd> <p>Unit: SECONDS</p> </dd> <dt>CONTACTS_SCHEDULED</dt> <dd> <p>Unit: COUNT</p> </dd> </dl>
   */
  CurrentMetrics: Array<_CurrentMetric> | Iterable<_CurrentMetric>;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.</p> <p>The token expires after 5 minutes from the time it is created. Subsequent requests that use the <a href="">NextToken</a> must use the same request parameters as the request that generated the token.</p>
   */
  NextToken?: string;

  /**
   * <p> <code>MaxResults</code> indicates the maximum number of results to return per page in the response, between 1 and 100.</p>
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
