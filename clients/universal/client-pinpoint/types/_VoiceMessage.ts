/**
 * <p>Specifies the settings for a one-time voice message that's sent directly to an endpoint through the voice channel.</p>
 */
export interface _VoiceMessage {
  /**
   * <p>The text script for the voice message.</p>
   */
  Body?: string;

  /**
   * <p>The language to use when delivering the message. For a list of supported languages, see the <a href="AmazonPollyDG.html">Amazon Polly Developer Guide</a>.</p>
   */
  LanguageCode?: string;

  /**
   * <p>The phone number from the pool or messaging service to send the message from. Although it isn't required, we recommend that you specify the phone number in E.164 format to ensure prompt and accurate delivery.</p>
   */
  OriginationNumber?: string;

  /**
   * <p>The default message variables to use in the voice message. You can override the default variables with individual address variables.</p>
   */
  Substitutions?:
    | { [key: string]: Array<string> | Iterable<string> }
    | Iterable<[string, Array<string> | Iterable<string>]>;

  /**
   * <p>The name of the voice to use when delivering the message. For a list of supported voices, see the <a href="AmazonPollyDG.html">Amazon Polly Developer Guide</a>.</p>
   */
  VoiceId?: string;
}

export interface _UnmarshalledVoiceMessage extends _VoiceMessage {
  /**
   * <p>The default message variables to use in the voice message. You can override the default variables with individual address variables.</p>
   */
  Substitutions?: { [key: string]: Array<string> };
}
