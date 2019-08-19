import { _VoiceMessageContent } from "./_VoiceMessageContent";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * SendVoiceMessageRequest
 */
export interface SendVoiceMessageInput {
  /**
   * The phone number that appears on recipients' devices when they receive the message.
   */
  CallerId?: string;

  /**
   * The name of the configuration set that you want to use to send the message.
   */
  ConfigurationSetName?: string;

  /**
   * An object that contains a voice message and information about the recipient that you want to send it to.
   */
  Content?: _VoiceMessageContent;

  /**
   * The phone number that you want to send the voice message to.
   */
  DestinationPhoneNumber?: string;

  /**
   * The phone number that Amazon Pinpoint should use to send the voice message. This isn't necessarily the phone number that appears on recipients' devices when they receive the message, because you can specify a CallerId parameter in the request.
   */
  OriginationPhoneNumber?: string;

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
