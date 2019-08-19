import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeClusterDbRevisionsInput shape
 */
export interface DescribeClusterDbRevisionsInput {
  /**
   * <p>A unique identifier for a cluster whose <code>ClusterDbRevisions</code> you are requesting. This parameter is case sensitive. All clusters defined for an account are returned by default.</p>
   */
  ClusterIdentifier?: string;

  /**
   * <p>The maximum number of response records to return in each call. If the number of remaining response records exceeds the specified MaxRecords value, a value is returned in the <code>marker</code> field of the response. You can retrieve the next set of response records by providing the returned <code>marker</code> value in the <code>marker</code> parameter and retrying the request. </p> <p>Default: 100</p> <p>Constraints: minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p>An optional parameter that specifies the starting point for returning a set of response records. When the results of a <code>DescribeClusterDbRevisions</code> request exceed the value specified in <code>MaxRecords</code>, Amazon Redshift returns a value in the <code>marker</code> field of the response. You can retrieve the next set of response records by providing the returned <code>marker</code> value in the <code>marker</code> parameter and retrying the request. </p> <p>Constraints: You can specify either the <code>ClusterIdentifier</code> parameter, or the <code>marker</code> parameter, but not both.</p>
   */
  Marker?: string;

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
