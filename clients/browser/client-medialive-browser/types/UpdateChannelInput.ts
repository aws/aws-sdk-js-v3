import { _OutputDestination } from "./_OutputDestination";
import { _EncoderSettings } from "./_EncoderSettings";
import { _InputAttachment } from "./_InputAttachment";
import { _InputSpecification } from "./_InputSpecification";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * A request to update a channel.
 */
export interface UpdateChannelInput {
  /**
   * channel ID
   */
  ChannelId: string;

  /**
   * A list of output destinations for this channel.
   */
  Destinations?: Array<_OutputDestination> | Iterable<_OutputDestination>;

  /**
   * The encoder settings for this channel.
   */
  EncoderSettings?: _EncoderSettings;

  /**
   * Placeholder documentation for __listOfInputAttachment
   */
  InputAttachments?: Array<_InputAttachment> | Iterable<_InputAttachment>;

  /**
   * Specification of input for this channel (max. bitrate, resolution, codec, etc.)
   */
  InputSpecification?: _InputSpecification;

  /**
   * The log level to write to CloudWatch Logs.
   */
  LogLevel?: "ERROR" | "WARNING" | "INFO" | "DEBUG" | "DISABLED" | string;

  /**
   * The name of the channel.
   */
  Name?: string;

  /**
   * An optional Amazon Resource Name (ARN) of the role to assume when running the Channel. If you do not specify this on an update call but the role was previously set that role will be removed.
   */
  RoleArn?: string;

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
