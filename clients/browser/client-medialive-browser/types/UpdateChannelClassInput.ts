import { _OutputDestination } from "./_OutputDestination";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * Channel class that the channel should be updated to.
 */
export interface UpdateChannelClassInput {
  /**
   * The channel class that you wish to update this channel to use.
   */
  ChannelClass: "STANDARD" | "SINGLE_PIPELINE" | string;

  /**
   * Channel Id of the channel whose class should be updated.
   */
  ChannelId: string;

  /**
   * A list of output destinations for this channel.
   */
  Destinations?: Array<_OutputDestination> | Iterable<_OutputDestination>;

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
