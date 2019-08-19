import { _Filter } from "./_Filter";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeFlowLogsInput shape
 */
export interface DescribeFlowLogsInput {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>One or more filters.</p> <ul> <li> <p> <code>deliver-log-status</code> - The status of the logs delivery (<code>SUCCESS</code> | <code>FAILED</code>).</p> </li> <li> <p> <code>log-destination-type</code> - The type of destination to which the flow log publishes data. Possible destination types include <code>cloud-watch-logs</code> and <code>S3</code>.</p> </li> <li> <p> <code>flow-log-id</code> - The ID of the flow log.</p> </li> <li> <p> <code>log-group-name</code> - The name of the log group.</p> </li> <li> <p> <code>resource-id</code> - The ID of the VPC, subnet, or network interface.</p> </li> <li> <p> <code>traffic-type</code> - The type of traffic (<code>ACCEPT</code> | <code>REJECT</code> | <code>ALL</code>).</p> </li> </ul>
   */
  Filter?: Array<_Filter> | Iterable<_Filter>;

  /**
   * <p>One or more flow log IDs.</p> <p>Constraint: Maximum of 1000 flow log IDs.</p>
   */
  FlowLogIds?: Array<string> | Iterable<string>;

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
