import { _Tag } from "./_Tag";
import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateInstanceSnapshotInput shape
 */
export interface CreateInstanceSnapshotInput {
  /**
   * <p>The name for your new snapshot.</p>
   */
  instanceSnapshotName: string;

  /**
   * <p>The Lightsail instance on which to base your snapshot.</p>
   */
  instanceName: string;

  /**
   * <p>The tag keys and optional values to add to the resource during create.</p> <p>To tag a resource after it has been created, see the <code>tag resource</code> operation.</p>
   */
  tags?: Array<_Tag> | Iterable<_Tag>;

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
