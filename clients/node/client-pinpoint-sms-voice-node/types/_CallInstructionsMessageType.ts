/**
 * An object that defines a message that contains text formatted using Amazon Pinpoint Voice Instructions markup.
 */
export interface _CallInstructionsMessageType {
  /**
   * The language to use when delivering the message. For a complete list of supported languages, see the Amazon Polly Developer Guide.
   */
  Text?: string;
}

export type _UnmarshalledCallInstructionsMessageType = _CallInstructionsMessageType;
