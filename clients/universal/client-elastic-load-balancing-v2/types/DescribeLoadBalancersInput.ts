import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeLoadBalancersInput shape
 */
export interface DescribeLoadBalancersInput {
  /**
   * <p>The Amazon Resource Names (ARN) of the load balancers. You can specify up to 20 load balancers in a single call.</p>
   */
  LoadBalancerArns?: Array<string> | Iterable<string>;

  /**
   * <p>The names of the load balancers.</p>
   */
  Names?: Array<string> | Iterable<string>;

  /**
   * <p>The marker for the next set of results. (You received this marker from a previous call.)</p>
   */
  Marker?: string;

  /**
   * <p>The maximum number of results to return with this call.</p>
   */
  PageSize?: number;

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
