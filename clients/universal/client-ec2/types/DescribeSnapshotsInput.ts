import { _Filter } from "./_Filter";
import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeSnapshotsInput shape
 */
export interface DescribeSnapshotsInput {
  /**
   * <p>The filters.</p> <ul> <li> <p> <code>description</code> - A description of the snapshot.</p> </li> <li> <p> <code>encrypted</code> - Indicates whether the snapshot is encrypted (<code>true</code> | <code>false</code>)</p> </li> <li> <p> <code>owner-alias</code> - Value from an Amazon-maintained list (<code>amazon</code> | <code>self</code> | <code>all</code> | <code>aws-marketplace</code> | <code>microsoft</code>) of snapshot owners. Not to be confused with the user-configured AWS account alias, which is set from the IAM console.</p> </li> <li> <p> <code>owner-id</code> - The ID of the AWS account that owns the snapshot.</p> </li> <li> <p> <code>progress</code> - The progress of the snapshot, as a percentage (for example, 80%).</p> </li> <li> <p> <code>snapshot-id</code> - The snapshot ID.</p> </li> <li> <p> <code>start-time</code> - The time stamp when the snapshot was initiated.</p> </li> <li> <p> <code>status</code> - The status of the snapshot (<code>pending</code> | <code>completed</code> | <code>error</code>).</p> </li> <li> <p> <code>tag</code>:&lt;key&gt; - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p> </li> <li> <p> <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</p> </li> <li> <p> <code>volume-id</code> - The ID of the volume the snapshot is for.</p> </li> <li> <p> <code>volume-size</code> - The size of the volume, in GiB.</p> </li> </ul>
   */
  Filters?: Array<_Filter> | Iterable<_Filter>;

  /**
   * <p>The maximum number of snapshot results returned by <code>DescribeSnapshots</code> in paginated output. When this parameter is used, <code>DescribeSnapshots</code> only returns <code>MaxResults</code> results in a single page along with a <code>NextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>DescribeSnapshots</code> request with the returned <code>NextToken</code> value. This value can be between 5 and 1000; if <code>MaxResults</code> is given a value larger than 1000, only 1000 results are returned. If this parameter is not used, then <code>DescribeSnapshots</code> returns all results. You cannot specify this parameter and the snapshot IDs parameter in the same request.</p>
   */
  MaxResults?: number;

  /**
   * <p>The <code>NextToken</code> value returned from a previous paginated <code>DescribeSnapshots</code> request where <code>MaxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>NextToken</code> value. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>Describes the snapshots owned by these owners.</p>
   */
  OwnerIds?: Array<string> | Iterable<string>;

  /**
   * <p>The IDs of the AWS accounts that can create volumes from the snapshot.</p>
   */
  RestorableByUserIds?: Array<string> | Iterable<string>;

  /**
   * <p>The snapshot IDs.</p> <p>Default: Describes the snapshots for which you have create volume permissions.</p>
   */
  SnapshotIds?: Array<string> | Iterable<string>;

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
