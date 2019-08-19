import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetUtterancesViewInput shape
 */
export interface GetUtterancesViewInput {
  /**
   * <p>The name of the bot for which utterance information should be returned.</p>
   */
  botName: string;

  /**
   * <p>An array of bot versions for which utterance information should be returned. The limit is 5 versions per request.</p>
   */
  botVersions: Array<string> | Iterable<string>;

  /**
   * <p>To return utterances that were recognized and handled, use<code>Detected</code>. To return utterances that were not recognized, use <code>Missed</code>.</p>
   */
  statusType: "Detected" | "Missed" | string;

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
