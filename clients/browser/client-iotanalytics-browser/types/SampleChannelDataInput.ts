import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * SampleChannelDataInput shape
 */
export interface SampleChannelDataInput {
  /**
   * <p>The name of the channel whose message samples are retrieved.</p>
   */
  channelName: string;

  /**
   * <p>The number of sample messages to be retrieved. The limit is 10, the default is also 10.</p>
   */
  maxMessages?: number;

  /**
   * <p>The start of the time window from which sample messages are retrieved.</p>
   */
  startTime?: Date | string | number;

  /**
   * <p>The end of the time window from which sample messages are retrieved.</p>
   */
  endTime?: Date | string | number;

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
