/**
 * An object that defines a message that contains SSML-formatted text.
 */
export interface _SSMLMessageType {
  /**
   * The language to use when delivering the message. For a complete list of supported languages, see the Amazon Polly Developer Guide.
   */
  LanguageCode?: string;

  /**
   * The SSML-formatted text to deliver to the recipient.
   */
  Text?: string;

  /**
   * The name of the voice that you want to use to deliver the message. For a complete list of supported voices, see the Amazon Polly Developer Guide.
   */
  VoiceId?: string;
}

export type _UnmarshalledSSMLMessageType = _SSMLMessageType;
