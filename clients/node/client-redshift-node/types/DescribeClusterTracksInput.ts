import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeClusterTracksInput shape
 */
export interface DescribeClusterTracksInput {
  /**
   * <p>The name of the maintenance track. </p>
   */
  MaintenanceTrackName?: string;

  /**
   * <p>An integer value for the maximum number of maintenance tracks to return.</p>
   */
  MaxRecords?: number;

  /**
   * <p>An optional parameter that specifies the starting point to return a set of response records. When the results of a <code>DescribeClusterTracks</code> request exceed the value specified in <code>MaxRecords</code>, Amazon Redshift returns a value in the <code>Marker</code> field of the response. You can retrieve the next set of response records by providing the returned marker value in the <code>Marker</code> parameter and retrying the request. </p>
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
