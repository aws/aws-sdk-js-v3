import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DeleteApplicationSnapshotInput shape
 */
export interface DeleteApplicationSnapshotInput {
  /**
   * <p>The name of an existing application.</p>
   */
  ApplicationName: string;

  /**
   * <p>The identifier for the snapshot delete.</p>
   */
  SnapshotName: string;

  /**
   * <p>The creation timestamp of the application snapshot to delete. You can retrieve this value using or .</p>
   */
  SnapshotCreationTimestamp: Date | string | number;

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
