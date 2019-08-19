import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DeleteIntentVersionInput shape
 */
export interface DeleteIntentVersionInput {
  /**
   * <p>The name of the intent.</p>
   */
  name: string;

  /**
   * <p>The version of the intent to delete. You cannot delete the <code>$LATEST</code> version of the intent. To delete the <code>$LATEST</code> version, use the <a>DeleteIntent</a> operation.</p>
   */
  version: string;

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
