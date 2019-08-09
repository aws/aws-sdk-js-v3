import { _ChannelStorage } from "./_ChannelStorage";
import { _RetentionPeriod } from "./_RetentionPeriod";
import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateChannelInput shape
 */
export interface UpdateChannelInput {
  /**
   * <p>The name of the channel to be updated.</p>
   */
  channelName: string;

  /**
   * <p>Where channel data is stored.</p>
   */
  channelStorage?: _ChannelStorage;

  /**
   * <p>How long, in days, message data is kept for the channel.</p>
   */
  retentionPeriod?: _RetentionPeriod;

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
