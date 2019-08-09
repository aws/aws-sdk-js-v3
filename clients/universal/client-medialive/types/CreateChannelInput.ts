import { _OutputDestination } from "./_OutputDestination";
import { _EncoderSettings } from "./_EncoderSettings";
import { _InputAttachment } from "./_InputAttachment";
import { _InputSpecification } from "./_InputSpecification";
import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * A request to create a channel
 */
export interface CreateChannelInput {
  /**
   * The class for this channel. STANDARD for a channel with two pipelines or SINGLE_PIPELINE for a channel with one pipeline.
   */
  ChannelClass?: "STANDARD" | "SINGLE_PIPELINE" | string;

  /**
   * Placeholder documentation for __listOfOutputDestination
   */
  Destinations?: Array<_OutputDestination> | Iterable<_OutputDestination>;

  /**
   * Encoder Settings
   */
  EncoderSettings?: _EncoderSettings;

  /**
   * List of input attachments for channel.
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
   * Name of channel.
   */
  Name?: string;

  /**
   * Unique request ID to be specified. This is needed to prevent retries from
   * creating multiple resources.
   *
   */
  RequestId?: string;

  /**
   * Deprecated field that's only usable by whitelisted customers.
   */
  Reserved?: string;

  /**
   * An optional Amazon Resource Name (ARN) of the role to assume when running the Channel.
   */
  RoleArn?: string;

  /**
   * A collection of key-value pairs.
   */
  Tags?: { [key: string]: string } | Iterable<[string, string]>;

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
