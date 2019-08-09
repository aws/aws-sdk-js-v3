import {
  _CallInstructionsMessageType,
  _UnmarshalledCallInstructionsMessageType
} from "./_CallInstructionsMessageType";
import {
  _PlainTextMessageType,
  _UnmarshalledPlainTextMessageType
} from "./_PlainTextMessageType";
import {
  _SSMLMessageType,
  _UnmarshalledSSMLMessageType
} from "./_SSMLMessageType";

/**
 * An object that contains a voice message and information about the recipient that you want to send it to.
 */
export interface _VoiceMessageContent {
  /**
   * An object that defines a message that contains text formatted using Amazon Pinpoint Voice Instructions markup.
   */
  CallInstructionsMessage?: _CallInstructionsMessageType;

  /**
   * An object that defines a message that contains unformatted text.
   */
  PlainTextMessage?: _PlainTextMessageType;

  /**
   * An object that defines a message that contains SSML-formatted text.
   */
  SSMLMessage?: _SSMLMessageType;
}

export interface _UnmarshalledVoiceMessageContent extends _VoiceMessageContent {
  /**
   * An object that defines a message that contains text formatted using Amazon Pinpoint Voice Instructions markup.
   */
  CallInstructionsMessage?: _UnmarshalledCallInstructionsMessageType;

  /**
   * An object that defines a message that contains unformatted text.
   */
  PlainTextMessage?: _UnmarshalledPlainTextMessageType;

  /**
   * An object that defines a message that contains SSML-formatted text.
   */
  SSMLMessage?: _UnmarshalledSSMLMessageType;
}
