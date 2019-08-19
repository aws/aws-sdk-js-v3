import { _Filter } from "./_Filter";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeTrafficMirrorSessionsInput shape
 */
export interface DescribeTrafficMirrorSessionsInput {
  /**
   * <p>The ID of the Traffic Mirror session.</p>
   */
  TrafficMirrorSessionIds?: Array<string> | Iterable<string>;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>One or more filters. The possible values are:</p> <ul> <li> <p> <code>description</code>: The Traffic Mirror session description.</p> </li> <li> <p> <code>network-interface-id</code>: The ID of the Traffic Mirror session network interface.</p> </li> <li> <p> <code>owner-id</code>: The ID of the account that owns the Traffic Mirror session.</p> </li> <li> <p> <code>packet-length</code>: The assigned number of packets to mirror. </p> </li> <li> <p> <code>session-number</code>: The assigned session number. </p> </li> <li> <p> <code>traffic-mirror-filter-id</code>: The ID of the Traffic Mirror filter.</p> </li> <li> <p> <code>traffic-mirror-session-id</code>: The ID of the Traffic Mirror session.</p> </li> <li> <p> <code>traffic-mirror-target-id</code>: The ID of the Traffic Mirror target.</p> </li> <li> <p> <code>virtual-network-id</code>: The virtual network ID of the Traffic Mirror session.</p> </li> </ul>
   */
  Filters?: Array<_Filter> | Iterable<_Filter>;

  /**
   * <p>The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

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
