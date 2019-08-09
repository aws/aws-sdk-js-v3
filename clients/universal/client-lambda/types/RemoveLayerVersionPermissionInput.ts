import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * RemoveLayerVersionPermissionInput shape
 */
export interface RemoveLayerVersionPermissionInput {
  /**
   * <p>The name or Amazon Resource Name (ARN) of the layer.</p>
   */
  LayerName: string;

  /**
   * <p>The version number.</p>
   */
  VersionNumber: number;

  /**
   * <p>The identifier that was specified when the statement was added.</p>
   */
  StatementId: string;

  /**
   * <p>Only update the policy if the revision ID matches the ID specified. Use this option to avoid modifying a policy that has changed since you last read it.</p>
   */
  RevisionId?: string;

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
