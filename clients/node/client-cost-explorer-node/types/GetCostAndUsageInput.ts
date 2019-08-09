import { _DateInterval } from "./_DateInterval";
import { _Expression } from "./_Expression";
import { _GroupDefinition } from "./_GroupDefinition";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetCostAndUsageInput shape
 */
export interface GetCostAndUsageInput {
  /**
   * <p>Sets the start and end dates for retrieving AWS costs. The start date is inclusive, but the end date is exclusive. For example, if <code>start</code> is <code>2017-01-01</code> and <code>end</code> is <code>2017-05-01</code>, then the cost and usage data is retrieved from <code>2017-01-01</code> up to and including <code>2017-04-30</code> but not including <code>2017-05-01</code>.</p>
   */
  TimePeriod: _DateInterval;

  /**
   * <p>Sets the AWS cost granularity to <code>MONTHLY</code> or <code>DAILY</code>. If <code>Granularity</code> isn't set, the response object doesn't include the <code>Granularity</code>, either <code>MONTHLY</code> or <code>DAILY</code>. </p> <p>The <code>GetCostAndUsageRequest</code> operation supports only <code>DAILY</code> and <code>MONTHLY</code> granularities.</p>
   */
  Granularity?: "DAILY" | "MONTHLY" | "HOURLY" | string;

  /**
   * <p>Filters AWS costs by different dimensions. For example, you can specify <code>SERVICE</code> and <code>LINKED_ACCOUNT</code> and get the costs that are associated with that account's usage of that service. You can nest <code>Expression</code> objects to define any combination of dimension filters. For more information, see <a href="http://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_Expression.html">Expression</a>. </p>
   */
  Filter?: _Expression;

  /**
   * <p>Which metrics are returned in the query. For more information about blended and unblended rates, see <a href="https://aws.amazon.com/premiumsupport/knowledge-center/blended-rates-intro/">Why does the "blended" annotation appear on some line items in my bill?</a>. </p> <p>Valid values are <code>AmortizedCost</code>, <code>BlendedCost</code>, <code>NetAmortizedCost</code>, <code>NetUnblendedCost</code>, <code>NormalizedUsageAmount</code>, <code>UnblendedCost</code>, and <code>UsageQuantity</code>. </p> <note> <p>If you return the <code>UsageQuantity</code> metric, the service aggregates all usage numbers without taking into account the units. For example, if you aggregate <code>usageQuantity</code> across all of Amazon EC2, the results aren't meaningful because Amazon EC2 compute hours and data transfer are measured in different units (for example, hours vs. GB). To get more meaningful <code>UsageQuantity</code> metrics, filter by <code>UsageType</code> or <code>UsageTypeGroups</code>. </p> </note> <p> <code>Metrics</code> is required for <code>GetCostAndUsage</code> requests.</p>
   */
  Metrics?: Array<string> | Iterable<string>;

  /**
   * <p>You can group AWS costs using up to two different groups, either dimensions, tag keys, or both.</p> <p>When you group by tag key, you get all tag values, including empty strings.</p> <p>Valid values are <code>AZ</code>, <code>INSTANCE_TYPE</code>, <code>LEGAL_ENTITY_NAME</code>, <code>LINKED_ACCOUNT</code>, <code>OPERATION</code>, <code>PLATFORM</code>, <code>PURCHASE_TYPE</code>, <code>SERVICE</code>, <code>TAGS</code>, <code>TENANCY</code>, and <code>USAGE_TYPE</code>.</p>
   */
  GroupBy?: Array<_GroupDefinition> | Iterable<_GroupDefinition>;

  /**
   * <p>The token to retrieve the next set of results. AWS provides the token when the response from a previous call has more results than the maximum page size.</p>
   */
  NextPageToken?: string;

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
