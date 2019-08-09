import { _Filter } from "./_Filter";
import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeVolumesModificationsInput shape
 */
export interface DescribeVolumesModificationsInput {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The IDs of the volumes for which in-progress modifications will be described.</p>
   */
  VolumeIds?: Array<string> | Iterable<string>;

  /**
   * <p>The filters. Supported filters: <code>volume-id</code>, <code>modification-state</code>, <code>target-size</code>, <code>target-iops</code>, <code>target-volume-type</code>, <code>original-size</code>, <code>original-iops</code>, <code>original-volume-type</code>, <code>start-time</code>. </p>
   */
  Filters?: Array<_Filter> | Iterable<_Filter>;

  /**
   * <p>The <code>nextToken</code> value returned by a previous paginated request.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results (up to a limit of 500) to be returned in a paginated request.</p>
   */
  MaxResults?: number;

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
