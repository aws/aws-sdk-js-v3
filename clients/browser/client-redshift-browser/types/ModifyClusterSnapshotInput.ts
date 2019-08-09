import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ModifyClusterSnapshotInput shape
 */
export interface ModifyClusterSnapshotInput {
  /**
   * <p>The identifier of the snapshot whose setting you want to modify.</p>
   */
  SnapshotIdentifier: string;

  /**
   * <p>The number of days that a manual snapshot is retained. If the value is -1, the manual snapshot is retained indefinitely.</p> <p>If the manual snapshot falls outside of the new retention period, you can specify the force option to immediately delete the snapshot.</p> <p>The value must be either -1 or an integer between 1 and 3,653.</p>
   */
  ManualSnapshotRetentionPeriod?: number;

  /**
   * <p>A Boolean option to override an exception if the retention period has already passed.</p>
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
