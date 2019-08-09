import { _DateInterval } from "./_DateInterval";
import { _GroupDefinition } from "./_GroupDefinition";
import { _Expression } from "./_Expression";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>You can use the following request parameters to query for how much of your instance usage a reservation covered.</p>
 */
export interface GetReservationCoverageInput {
  /**
   * <p>The start and end dates of the period that you want to retrieve data about reservation coverage for. You can retrieve data for a maximum of 13 months: the last 12 months and the current month. The start date is inclusive, but the end date is exclusive. For example, if <code>start</code> is <code>2017-01-01</code> and <code>end</code> is <code>2017-05-01</code>, then the cost and usage data is retrieved from <code>2017-01-01</code> up to and including <code>2017-04-30</code> but not including <code>2017-05-01</code>. </p>
   */
  TimePeriod: _DateInterval;

  /**
   * <p>You can group the data by the following attributes:</p> <ul> <li> <p>AZ</p> </li> <li> <p>CACHE_ENGINE</p> </li> <li> <p>DATABASE_ENGINE</p> </li> <li> <p>DEPLOYMENT_OPTION</p> </li> <li> <p>INSTANCE_TYPE</p> </li> <li> <p>LINKED_ACCOUNT</p> </li> <li> <p>OPERATING_SYSTEM</p> </li> <li> <p>PLATFORM</p> </li> <li> <p>REGION</p> </li> <li> <p>TENANCY</p> </li> </ul>
   */
  GroupBy?: Array<_GroupDefinition> | Iterable<_GroupDefinition>;

  /**
   * <p>The granularity of the AWS cost data for the reservation. Valid values are <code>MONTHLY</code> and <code>DAILY</code>.</p> <p>If <code>GroupBy</code> is set, <code>Granularity</code> can't be set. If <code>Granularity</code> isn't set, the response object doesn't include <code>Granularity</code>, either <code>MONTHLY</code> or <code>DAILY</code>.</p> <p>The <code>GetReservationCoverage</code> operation supports only <code>DAILY</code> and <code>MONTHLY</code> granularities.</p>
   */
  Granularity?: "DAILY" | "MONTHLY" | "HOURLY" | string;

  /**
   * <p>Filters utilization data by dimensions. You can filter by the following dimensions:</p> <ul> <li> <p>AZ</p> </li> <li> <p>CACHE_ENGINE</p> </li> <li> <p>DATABASE_ENGINE</p> </li> <li> <p>DEPLOYMENT_OPTION</p> </li> <li> <p>INSTANCE_TYPE</p> </li> <li> <p>LINKED_ACCOUNT</p> </li> <li> <p>OPERATING_SYSTEM</p> </li> <li> <p>PLATFORM</p> </li> <li> <p>REGION</p> </li> <li> <p>SERVICE</p> </li> <li> <p>TAG</p> </li> <li> <p>TENANCY</p> </li> </ul> <p> <code>GetReservationCoverage</code> uses the same <a href="http://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_Expression.html">Expression</a> object as the other operations, but only <code>AND</code> is supported among each dimension. You can nest only one level deep. If there are multiple values for a dimension, they are OR'd together.</p> <p>If you don't provide a <code>SERVICE</code> filter, Cost Explorer defaults to EC2.</p>
   */
  Filter?: _Expression;

  /**
   * <p>The measurement that you want your reservation coverage reported in.</p> <p>Valid values are <code>Hour</code>, <code>Unit</code>, and <code>Cost</code>. You can use multiple values in a request.</p>
   */
  Metrics?: Array<string> | Iterable<string>;

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
