import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Container for the parameters to the <code>Suggest</code> request.</p>
 */
export interface SuggestInput {
  /**
   * <p>Specifies the string for which you want to get suggestions.</p>
   */
  query: string;

  /**
   * <p>Specifies the name of the suggester to use to find suggested matches.</p>
   */
  suggester: string;

  /**
   * <p>Specifies the maximum number of suggestions to return. </p>
   */
  size?: number;

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
