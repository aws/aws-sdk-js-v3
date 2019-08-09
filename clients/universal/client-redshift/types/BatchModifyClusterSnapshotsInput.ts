import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * BatchModifyClusterSnapshotsInput shape
 */
export interface BatchModifyClusterSnapshotsInput {
  /**
   * <p>A list of snapshot identifiers you want to modify.</p>
   */
  SnapshotIdentifierList: Array<string> | Iterable<string>;

  /**
   * <p>The number of days that a manual snapshot is retained. If you specify the value -1, the manual snapshot is retained indefinitely.</p> <p>The number must be either -1 or an integer between 1 and 3,653.</p> <p>If you decrease the manual snapshot retention period from its current value, existing manual snapshots that fall outside of the new retention period will return an error. If you want to suppress the errors and delete the snapshots, use the force option. </p>
   */
  ManualSnapshotRetentionPeriod?: number;

  /**
   * <p>A boolean value indicating whether to override an exception if the retention period has passed. </p>
   */
  Force?: boolean;

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
