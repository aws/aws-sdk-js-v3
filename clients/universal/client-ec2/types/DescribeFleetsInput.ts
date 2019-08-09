import { _Filter } from "./_Filter";
import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeFleetsInput shape
 */
export interface DescribeFleetsInput {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The maximum number of results to return in a single call. Specify a value between 1 and 1000. The default value is 1000. To retrieve the remaining results, make another call with the returned <code>NextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The ID of the EC2 Fleets.</p>
   */
  FleetIds?: Array<string> | Iterable<string>;

  /**
   * <p>The filters.</p> <ul> <li> <p> <code>activity-status</code> - The progress of the EC2 Fleet ( <code>error</code> | <code>pending-fulfillment</code> | <code>pending-termination</code> | <code>fulfilled</code>).</p> </li> <li> <p> <code>excess-capacity-termination-policy</code> - Indicates whether to terminate running instances if the target capacity is decreased below the current EC2 Fleet size (<code>true</code> | <code>false</code>).</p> </li> <li> <p> <code>fleet-state</code> - The state of the EC2 Fleet (<code>submitted</code> | <code>active</code> | <code>deleted</code> | <code>failed</code> | <code>deleted-running</code> | <code>deleted-terminating</code> | <code>modifying</code>).</p> </li> <li> <p> <code>replace-unhealthy-instances</code> - Indicates whether EC2 Fleet should replace unhealthy instances (<code>true</code> | <code>false</code>).</p> </li> <li> <p> <code>type</code> - The type of request (<code>instant</code> | <code>request</code> | <code>maintain</code>).</p> </li> </ul>
   */
  Filters?: Array<_Filter> | Iterable<_Filter>;

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
