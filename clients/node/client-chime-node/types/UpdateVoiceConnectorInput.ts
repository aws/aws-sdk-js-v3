import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateVoiceConnectorInput shape
 */
export interface UpdateVoiceConnectorInput {
  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId: string;

  /**
   * <p>The name of the Amazon Chime Voice Connector.</p>
   */
  Name: string;

  /**
   * <p>When enabled, requires encryption for the Amazon Chime Voice Connector.</p>
   */
  RequireEncryption: boolean;

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
