import { _Filter } from "./_Filter";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeVolumeStatusInput shape
 */
export interface DescribeVolumeStatusInput {
  /**
   * <p>The filters.</p> <ul> <li> <p> <code>action.code</code> - The action code for the event (for example, <code>enable-volume-io</code>).</p> </li> <li> <p> <code>action.description</code> - A description of the action.</p> </li> <li> <p> <code>action.event-id</code> - The event ID associated with the action.</p> </li> <li> <p> <code>availability-zone</code> - The Availability Zone of the instance.</p> </li> <li> <p> <code>event.description</code> - A description of the event.</p> </li> <li> <p> <code>event.event-id</code> - The event ID.</p> </li> <li> <p> <code>event.event-type</code> - The event type (for <code>io-enabled</code>: <code>passed</code> | <code>failed</code>; for <code>io-performance</code>: <code>io-performance:degraded</code> | <code>io-performance:severely-degraded</code> | <code>io-performance:stalled</code>).</p> </li> <li> <p> <code>event.not-after</code> - The latest end time for the event.</p> </li> <li> <p> <code>event.not-before</code> - The earliest start time for the event.</p> </li> <li> <p> <code>volume-status.details-name</code> - The cause for <code>volume-status.status</code> (<code>io-enabled</code> | <code>io-performance</code>).</p> </li> <li> <p> <code>volume-status.details-status</code> - The status of <code>volume-status.details-name</code> (for <code>io-enabled</code>: <code>passed</code> | <code>failed</code>; for <code>io-performance</code>: <code>normal</code> | <code>degraded</code> | <code>severely-degraded</code> | <code>stalled</code>).</p> </li> <li> <p> <code>volume-status.status</code> - The status of the volume (<code>ok</code> | <code>impaired</code> | <code>warning</code> | <code>insufficient-data</code>).</p> </li> </ul>
   */
  Filters?: Array<_Filter> | Iterable<_Filter>;

  /**
   * <p>The maximum number of volume results returned by <code>DescribeVolumeStatus</code> in paginated output. When this parameter is used, the request only returns <code>MaxResults</code> results in a single page along with a <code>NextToken</code> response element. The remaining results of the initial request can be seen by sending another request with the returned <code>NextToken</code> value. This value can be between 5 and 1000; if <code>MaxResults</code> is given a value larger than 1000, only 1000 results are returned. If this parameter is not used, then <code>DescribeVolumeStatus</code> returns all results. You cannot specify this parameter and the volume IDs parameter in the same request.</p>
   */
  MaxResults?: number;

  /**
   * <p>The <code>NextToken</code> value to include in a future <code>DescribeVolumeStatus</code> request. When the results of the request exceed <code>MaxResults</code>, this value can be used to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>The IDs of the volumes.</p> <p>Default: Describes all your volumes.</p>
   */
  VolumeIds?: Array<string> | Iterable<string>;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

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
