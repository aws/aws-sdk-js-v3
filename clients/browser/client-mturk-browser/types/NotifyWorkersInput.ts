import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * NotifyWorkersInput shape
 */
export interface NotifyWorkersInput {
  /**
   * <p>The subject line of the email message to send. Can include up to 200 characters.</p>
   */
  Subject: string;

  /**
   * <p>The text of the email message to send. Can include up to 4,096 characters</p>
   */
  MessageText: string;

  /**
   * <p>A list of Worker IDs you wish to notify. You can notify upto 100 Workers at a time.</p>
   */
  WorkerIds: Array<string> | Iterable<string>;

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
