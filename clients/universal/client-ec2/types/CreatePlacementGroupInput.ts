import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreatePlacementGroupInput shape
 */
export interface CreatePlacementGroupInput {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>A name for the placement group. Must be unique within the scope of your account for the Region.</p> <p>Constraints: Up to 255 ASCII characters</p>
   */
  GroupName?: string;

  /**
   * <p>The placement strategy.</p>
   */
  Strategy?: "cluster" | "spread" | "partition" | string;

  /**
   * <p>The number of partitions. Valid only when <b>Strategy</b> is set to <code>partition</code>.</p>
   */
  PartitionCount?: number;

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
