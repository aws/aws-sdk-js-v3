import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the input for a request action.</p>
 */
export interface UpdateBuildInput {
  /**
   * <p>Unique identifier for a build to update.</p>
   */
  BuildId: string;

  /**
   * <p>Descriptive label that is associated with a build. Build names do not need to be unique. </p>
   */
  Name?: string;

  /**
   * <p>Version that is associated with a build or script. Version strings do not need to be unique.</p>
   */
  Version?: string;

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
