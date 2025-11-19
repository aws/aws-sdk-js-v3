// smithy-typescript generated code
import { StreamingBlobTypes } from "@smithy/types";

import {
  ConfirmationState,
  ConversationMode,
  DialogActionType,
  InputMode,
  IntentState,
  InterpretationSource,
  MessageContentType,
  PlaybackInterruptionReason,
  SentimentType,
  Shape,
  StyleType,
} from "./enums";

import {
  AccessDeniedException,
  BadGatewayException,
  ConflictException,
  DependencyFailedException,
  InternalServerException,
  ResourceNotFoundException,
  ThrottlingException,
  ValidationException,
} from "./errors";

/**
 * <p>The time that a context is active. You can specify the time to live
 *          in seconds or in conversation turns.</p>
 * @public
 */
export interface ActiveContextTimeToLive {
  /**
   * <p>The number of seconds that the context is active. You can specify
   *          between 5 and 86400 seconds (24 hours).</p>
   * @public
   */
  timeToLiveInSeconds: number | undefined;

  /**
   * <p>The number of turns that the context is active. You can specify up
   *          to 20 turns. Each request and response from the bot is a turn.</p>
   * @public
   */
  turnsToLive: number | undefined;
}

/**
 * <p>Contains information about the contexts that a user is using in a
 *          session. You can configure Amazon Lex V2 to set a context when an intent is
 *          fulfilled, or you can set a context using the , , or  operations.</p>
 *          <p>Use a context to indicate to Amazon Lex V2 intents that should be used as
 *          follow-up intents. For example, if the active context is
 *             <code>order-fulfilled</code>, only intents that have
 *             <code>order-fulfilled</code> configured as a trigger are considered
 *          for follow up.</p>
 * @public
 */
export interface ActiveContext {
  /**
   * <p>The name of the context.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Indicates the number of turns or seconds that the context is active.
   *          Once the time to live expires, the context is no longer returned in a
   *          response.</p>
   * @public
   */
  timeToLive: ActiveContextTimeToLive | undefined;

  /**
   * <p>A list of contexts active for the request. A context can be
   *          activated when a previous intent is fulfilled, or by including the
   *          context in the request.</p>
   *          <p>If you don't specify a list of contexts, Amazon Lex V2 will use the current
   *          list of contexts for the session. If you specify an empty list, all
   *          contexts for the session are cleared. </p>
   * @public
   */
  contextAttributes: Record<string, string> | undefined;
}

/**
 * <p>Represents a chunk of audio sent from the client application to
 *          Amazon Lex V2. The audio is all or part of an utterance from the user.</p>
 *          <p>Amazon Lex V2 accumulates audio chunks until it recognizes a natural pause
 *          in speech before processing the input.</p>
 * @public
 */
export interface AudioInputEvent {
  /**
   * <p>An encoded stream of audio.</p>
   * @public
   */
  audioChunk?: Uint8Array | undefined;

  /**
   * <p>The encoding used for the audio chunk. You must use 8 KHz PCM 16-bit
   *          mono-channel little-endian format. The value of the field should
   *          be:</p>
   *          <p>
   *             <code>audio/lpcm; sample-rate=8000; sample-size-bits=16;
   *             channel-count=1; is-big-endian=false</code>
   *          </p>
   * @public
   */
  contentType: string | undefined;

  /**
   * <p>A unique identifier that your application assigns to the event. You
   *          can use this to identify events in logs.</p>
   * @public
   */
  eventId?: string | undefined;

  /**
   * <p>A timestamp set by the client of the date and time that the event
   *          was sent to Amazon Lex V2.</p>
   * @public
   */
  clientTimestampMillis?: number | undefined;
}

/**
 * <p>An event sent from Amazon Lex V2 to your client application containing audio
 *          to play to the user. </p>
 * @public
 */
export interface AudioResponseEvent {
  /**
   * <p>A chunk of the audio to play. </p>
   * @public
   */
  audioChunk?: Uint8Array | undefined;

  /**
   * <p>The encoding of the audio chunk. This is the same as the encoding
   *          configure in the <code>contentType</code> field of the
   *             <code>ConfigurationEvent</code>.</p>
   * @public
   */
  contentType?: string | undefined;

  /**
   * <p>A unique identifier of the event sent by Amazon Lex V2. The identifier is in
   *          the form <code>RESPONSE-N</code>, where N is a number starting with one
   *          and incremented for each event sent by Amazon Lex V2 in the current
   *          session.</p>
   * @public
   */
  eventId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteSessionRequest {
  /**
   * <p>The identifier of the bot that contains the session data.</p>
   * @public
   */
  botId: string | undefined;

  /**
   * <p>The alias identifier in use for the bot that contains the session
   *          data.</p>
   * @public
   */
  botAliasId: string | undefined;

  /**
   * <p>The locale where the session is in use.</p>
   * @public
   */
  localeId: string | undefined;

  /**
   * <p>The identifier of the session to delete.</p>
   * @public
   */
  sessionId: string | undefined;
}

/**
 * @public
 */
export interface DeleteSessionResponse {
  /**
   * <p>The identifier of the bot that contained the session data.</p>
   * @public
   */
  botId?: string | undefined;

  /**
   * <p>The alias identifier in use for the bot that contained the session
   *          data.</p>
   * @public
   */
  botAliasId?: string | undefined;

  /**
   * <p>The locale where the session was used.</p>
   * @public
   */
  localeId?: string | undefined;

  /**
   * <p>The identifier of the deleted session.</p>
   * @public
   */
  sessionId?: string | undefined;
}

/**
 * @public
 */
export interface GetSessionRequest {
  /**
   * <p>The identifier of the bot that contains the session data.</p>
   * @public
   */
  botId: string | undefined;

  /**
   * <p>The alias identifier in use for the bot that contains the session
   *          data.</p>
   * @public
   */
  botAliasId: string | undefined;

  /**
   * <p>The locale where the session is in use.</p>
   * @public
   */
  localeId: string | undefined;

  /**
   * <p>The identifier of the session to return.</p>
   * @public
   */
  sessionId: string | undefined;
}

/**
 * <p>Information about the value provided for a slot and Amazon Lex V2's interpretation.</p>
 * @public
 */
export interface Value {
  /**
   * <p>The part of the user's response to the slot elicitation that Amazon Lex V2 determines is relevant to the slot value.</p>
   * @public
   */
  originalValue?: string | undefined;

  /**
   * <p>The value that Amazon Lex V2 determines for the slot, given the user input. The actual value depends on the setting of the value selection strategy for the bot. You can choose to use the value entered by the user, or you can have Amazon Lex V2 choose the first value in the <code>resolvedValues</code> list.</p>
   * @public
   */
  interpretedValue: string | undefined;

  /**
   * <p>A list of values that Amazon Lex V2 determines are possible resolutions for the user input. The first value matches the <code>interpretedValue</code>.</p>
   * @public
   */
  resolvedValues?: string[] | undefined;
}

/**
 * <p>Provides a score that indicates the confidence that Amazon Lex V2 has that
 *          an intent is the one that satisfies the user's intent.</p>
 * @public
 */
export interface ConfidenceScore {
  /**
   * <p>A score that indicates how confident Amazon Lex V2 is that an intent
   *          satisfies the user's intent. Ranges between 0.00 and 1.00. Higher
   *          scores indicate higher confidence.</p>
   * @public
   */
  score?: number | undefined;
}

/**
 * <p>The individual sentiment responses for the utterance.</p>
 * @public
 */
export interface SentimentScore {
  /**
   * <p>The level of confidence that Amazon Comprehend has in the accuracy
   *          of its detection of the <code>POSITIVE</code> sentiment.</p>
   * @public
   */
  positive?: number | undefined;

  /**
   * <p>The level of confidence that Amazon Comprehend has in the accuracy
   *          of its detection of the <code>NEGATIVE</code> sentiment.</p>
   * @public
   */
  negative?: number | undefined;

  /**
   * <p>The level of confidence that Amazon Comprehend has in the accuracy
   *          of its detection of the <code>NEUTRAL</code> sentiment.</p>
   * @public
   */
  neutral?: number | undefined;

  /**
   * <p>The level of confidence that Amazon Comprehend has in the accuracy
   *          of its detection of the <code>MIXED</code> sentiment.</p>
   * @public
   */
  mixed?: number | undefined;
}

/**
 * <p>Provides information about the sentiment expressed in a user's
 *          response in a conversation. Sentiments are determined using Amazon
 *          Comprehend. Sentiments are only returned if they are enabled for the
 *          bot.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-sentiment.html">
 *             Determine Sentiment </a> in the <i>Amazon Comprehend
 *             developer guide</i>.</p>
 * @public
 */
export interface SentimentResponse {
  /**
   * <p>The overall sentiment expressed in the user's response. This is the
   *          sentiment most likely expressed by the user based on the analysis by
   *          Amazon Comprehend.</p>
   * @public
   */
  sentiment?: SentimentType | undefined;

  /**
   * <p>The individual sentiment responses for the utterance.</p>
   * @public
   */
  sentimentScore?: SentimentScore | undefined;
}

/**
 * <p>A button that appears on a response card show to the user.</p>
 * @public
 */
export interface Button {
  /**
   * <p>The text that is displayed on the button.</p>
   * @public
   */
  text: string | undefined;

  /**
   * <p>The value returned to Amazon Lex V2 when a user chooses the button.</p>
   * @public
   */
  value: string | undefined;
}

/**
 * <p>A card that is shown to the user by a messaging platform. You define
 *             the contents of the card, the card is displayed by the platform. </p>
 *          <p>When you use a response card, the response from the user is
 *             constrained to the text associated with a button on the card.</p>
 * @public
 */
export interface ImageResponseCard {
  /**
   * <p>The title to display on the response card. The format of the title
   *             is determined by the platform displaying the response card.</p>
   * @public
   */
  title: string | undefined;

  /**
   * <p>The subtitle to display on the response card. The format of the
   *             subtitle is determined by the platform displaying the response
   *             card.</p>
   * @public
   */
  subtitle?: string | undefined;

  /**
   * <p>The URL of an image to display on the response card. The image URL
   *             must be publicly available so that the platform displaying the response
   *             card has access to the image.</p>
   * @public
   */
  imageUrl?: string | undefined;

  /**
   * <p>A list of buttons that should be displayed on the response card. The
   *             arrangement of the buttons is determined by the platform that displays
   *             the button.</p>
   * @public
   */
  buttons?: Button[] | undefined;
}

/**
 * <p>Container for text that is returned to the customer..</p>
 * @public
 */
export interface Message {
  /**
   * <p>The text of the message.</p>
   * @public
   */
  content?: string | undefined;

  /**
   * <p>Indicates the type of response.</p>
   * @public
   */
  contentType: MessageContentType | undefined;

  /**
   * <p>A card that is shown to the user by a messaging platform. You define
   *             the contents of the card, the card is displayed by the platform. </p>
   *          <p>When you use a response card, the response from the user is
   *             constrained to the text associated with a button on the card.</p>
   * @public
   */
  imageResponseCard?: ImageResponseCard | undefined;
}

/**
 * <p>Provides the phrase that Amazon Lex V2 should look for in the user's input
 *          to the bot.</p>
 * @public
 */
export interface RuntimeHintValue {
  /**
   * <p>The phrase that Amazon Lex V2 should look for in the user's input to the
   *          bot.</p>
   * @public
   */
  phrase: string | undefined;
}

/**
 * @public
 */
export interface PutSessionResponse {
  /**
   * <p>The type of response. Same as the type specified in the
   *             <code>responseContentType</code> field in the request.</p>
   * @public
   */
  contentType?: string | undefined;

  /**
   * <p>A list of messages that were last sent to the user. The messages are
   *          ordered based on how you return the messages from you Lambda function
   *          or the order that the messages are defined in the bot.</p>
   * @public
   */
  messages?: string | undefined;

  /**
   * <p>A base-64-encoded gzipped field that represents the current state of
   *          the dialog between the user and the bot. Use this to determine the progress
   *          of the conversation and what the next action may be.</p>
   * @public
   */
  sessionState?: string | undefined;

  /**
   * <p>A base-64-encoded gzipped field that provides request-specific information
   *          passed between the client application and Amazon Lex V2. These are the same as the
   *          <code>requestAttribute</code> parameter in the call to the
   *          <code>PutSession</code> operation.</p>
   * @public
   */
  requestAttributes?: string | undefined;

  /**
   * <p>The identifier of the session that received the data.</p>
   * @public
   */
  sessionId?: string | undefined;

  /**
   * <p>If the requested content type was audio, the audio version of the
   *          message to convey to the user.</p>
   * @public
   */
  audioStream?: StreamingBlobTypes | undefined;
}

/**
 * <p>The bot member that processes the request.</p>
 * @public
 */
export interface RecognizedBotMember {
  /**
   * <p>The identifier of the bot member that processes the request.</p>
   * @public
   */
  botId: string | undefined;

  /**
   * <p>The name of the bot member that processes the request.</p>
   * @public
   */
  botName?: string | undefined;
}

/**
 * @public
 */
export interface RecognizeUtteranceRequest {
  /**
   * <p>The identifier of the bot that should receive the request.</p>
   * @public
   */
  botId: string | undefined;

  /**
   * <p>The alias identifier in use for the bot that should receive the
   *          request.</p>
   * @public
   */
  botAliasId: string | undefined;

  /**
   * <p>The locale where the session is in use.</p>
   * @public
   */
  localeId: string | undefined;

  /**
   * <p>The identifier of the session in use.</p>
   * @public
   */
  sessionId: string | undefined;

  /**
   * <p>Sets the state of the session with the user. You can use this to set
   *          the current intent, attributes, context, and dialog action. Use the
   *          dialog action to determine the next step that Amazon Lex V2 should use in the
   *          conversation with the user.</p>
   *          <p>The <code>sessionState</code> field must be compressed using gzip
   *          and then base64 encoded before sending to Amazon Lex V2.</p>
   * @public
   */
  sessionState?: string | undefined;

  /**
   * <p>Request-specific information passed between the client application
   *          and Amazon Lex V2 </p>
   *          <p>The namespace <code>x-amz-lex:</code> is reserved for special
   *          attributes. Don't create any request attributes for prefix
   *             <code>x-amz-lex:</code>.</p>
   *          <p>The <code>requestAttributes</code> field must be compressed using
   *          gzip and then base64 encoded before sending to Amazon Lex V2.</p>
   * @public
   */
  requestAttributes?: string | undefined;

  /**
   * <p>Indicates the format for audio input or that the content is text.
   *          The header must start with one of the following prefixes:</p>
   *          <ul>
   *             <li>
   *                <p>PCM format, audio data must be in little-endian byte
   *                order.</p>
   *                <ul>
   *                   <li>
   *                      <p>audio/l16; rate=16000; channels=1</p>
   *                   </li>
   *                   <li>
   *                      <p>audio/x-l16; sample-rate=16000; channel-count=1</p>
   *                   </li>
   *                   <li>
   *                      <p>audio/lpcm; sample-rate=8000; sample-size-bits=16;
   *                      channel-count=1; is-big-endian=false</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>Opus format</p>
   *                <ul>
   *                   <li>
   *                      <p>audio/x-cbr-opus-with-preamble;preamble-size=0;bit-rate=256000;frame-size-milliseconds=4</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>Text format</p>
   *                <ul>
   *                   <li>
   *                      <p>text/plain; charset=utf-8</p>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   * @public
   */
  requestContentType: string | undefined;

  /**
   * <p>The message that Amazon Lex V2 returns in the response can be either text or
   *          speech based on the <code>responseContentType</code> value.</p>
   *          <ul>
   *             <li>
   *                <p>If the value is <code>text/plain;charset=utf-8</code>, Amazon Lex V2
   *                returns text in the response.</p>
   *             </li>
   *             <li>
   *                <p>If the value begins with <code>audio/</code>, Amazon Lex V2 returns
   *                speech in the response. Amazon Lex V2 uses Amazon Polly to generate the speech
   *                using the configuration that you specified in the
   *                   <code>responseContentType</code> parameter. For example, if you
   *                specify <code>audio/mpeg</code> as the value, Amazon Lex V2 returns
   *                speech in the MPEG format.</p>
   *             </li>
   *             <li>
   *                <p>If the value is <code>audio/pcm</code>, the speech returned is
   *                   <code>audio/pcm</code> at 16 KHz in 16-bit, little-endian
   *                format.</p>
   *             </li>
   *             <li>
   *                <p>The following are the accepted values:</p>
   *                <ul>
   *                   <li>
   *                      <p>audio/mpeg</p>
   *                   </li>
   *                   <li>
   *                      <p>audio/ogg</p>
   *                   </li>
   *                   <li>
   *                      <p>audio/pcm (16 KHz)</p>
   *                   </li>
   *                   <li>
   *                      <p>audio/* (defaults to mpeg)</p>
   *                   </li>
   *                   <li>
   *                      <p>text/plain; charset=utf-8</p>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   * @public
   */
  responseContentType?: string | undefined;

  /**
   * <p>User input in PCM or Opus audio format or text format as described
   *          in the <code>requestContentType</code> parameter.</p>
   * @public
   */
  inputStream?: StreamingBlobTypes | undefined;
}

/**
 * @public
 */
export interface RecognizeUtteranceResponse {
  /**
   * <p>Indicates whether the input mode to the operation was text, speech, or from a touch-tone keypad.
   *       </p>
   * @public
   */
  inputMode?: string | undefined;

  /**
   * <p>Content type as specified in the <code>responseContentType</code> in
   *          the request.</p>
   * @public
   */
  contentType?: string | undefined;

  /**
   * <p>A list of messages that were last sent to the user. The messages are
   *          ordered based on the order that you returned the messages from your
   *          Lambda function or the order that the messages are defined in the
   *          bot.</p>
   *          <p>The <code>messages</code> field is compressed with gzip and then
   *          base64 encoded. Before you can use the contents of the field, you must
   *          decode and decompress the contents. See the example for a simple
   *          function to decode and decompress the contents.</p>
   * @public
   */
  messages?: string | undefined;

  /**
   * <p>A list of intents that Amazon Lex V2 determined might satisfy the user's
   *          utterance.</p>
   *          <p>Each interpretation includes the intent, a score that indicates how
   *          confident Amazon Lex V2 is that the interpretation is the correct one, and an
   *          optional sentiment response that indicates the sentiment expressed in
   *          the utterance.</p>
   *          <p>The <code>interpretations</code> field is compressed with gzip and
   *          then base64 encoded. Before you can use the contents of the field, you
   *          must decode and decompress the contents. See the example for a simple
   *          function to decode and decompress the contents.</p>
   * @public
   */
  interpretations?: string | undefined;

  /**
   * <p>Represents the current state of the dialog between the user and the
   *          bot.</p>
   *          <p>Use this to determine the progress of the conversation and what the
   *          next action might be.</p>
   *          <p>The <code>sessionState</code> field is compressed with gzip and then
   *          base64 encoded. Before you can use the contents of the field, you must
   *          decode and decompress the contents. See the example for a simple
   *          function to decode and decompress the contents.</p>
   * @public
   */
  sessionState?: string | undefined;

  /**
   * <p>The attributes sent in the request.</p>
   *          <p>The <code>requestAttributes</code> field is compressed with gzip and
   *          then base64 encoded. Before you can use the contents of the field, you
   *          must decode and decompress the contents.</p>
   * @public
   */
  requestAttributes?: string | undefined;

  /**
   * <p>The identifier of the session in use.</p>
   * @public
   */
  sessionId?: string | undefined;

  /**
   * <p>The text used to process the request.</p>
   *          <p>If the input was an audio stream, the <code>inputTranscript</code>
   *          field contains the text extracted from the audio stream. This is the
   *          text that is actually processed to recognize intents and slot values.
   *          You can use this information to determine if Amazon Lex V2 is correctly
   *          processing the audio that you send.</p>
   *          <p>The <code>inputTranscript</code> field is compressed with gzip and
   *          then base64 encoded. Before you can use the contents of the field, you
   *          must decode and decompress the contents. See the example for a simple
   *          function to decode and decompress the contents.</p>
   * @public
   */
  inputTranscript?: string | undefined;

  /**
   * <p>The prompt or statement to send to the user. This is based on the
   *          bot configuration and context. For example, if Amazon Lex V2 did not understand
   *          the user intent, it sends the <code>clarificationPrompt</code>
   *          configured for the bot. If the intent requires confirmation before
   *          taking the fulfillment action, it sends the
   *             <code>confirmationPrompt</code>. Another example: Suppose that the
   *          Lambda function successfully fulfilled the intent, and sent a message
   *          to convey to the user. Then Amazon Lex V2 sends that message in the
   *          response.</p>
   * @public
   */
  audioStream?: StreamingBlobTypes | undefined;

  /**
   * <p>The bot member that recognized the utterance.</p>
   * @public
   */
  recognizedBotMember?: string | undefined;
}

/**
 * <p>A notification from the client that it is disconnecting from Amazon Lex V2.
 *          Sending a <code>DisconnectionEvent</code> event is optional, but can
 *          help identify a conversation in logs.</p>
 * @public
 */
export interface DisconnectionEvent {
  /**
   * <p>A unique identifier that your application assigns to the event. You
   *          can use this to identify events in logs.</p>
   * @public
   */
  eventId?: string | undefined;

  /**
   * <p>A timestamp set by the client of the date and time that the event
   *          was sent to Amazon Lex V2.</p>
   * @public
   */
  clientTimestampMillis?: number | undefined;
}

/**
 * <p>A DTMF character sent from the client application. DTMF characters
 *          are typically sent from a phone keypad to represent numbers. For
 *          example, you can have Amazon Lex V2 process a credit card number input from a
 *          phone.</p>
 * @public
 */
export interface DTMFInputEvent {
  /**
   * <p>The DTMF character that the user pressed. The allowed characters are
   *          A - D, 0 - 9, # and *.</p>
   * @public
   */
  inputCharacter: string | undefined;

  /**
   * <p>A unique identifier that your application assigns to the event. You
   *          can use this to identify events in logs.</p>
   * @public
   */
  eventId?: string | undefined;

  /**
   * <p>A timestamp set by the client of the date and time that the event
   *          was sent to Amazon Lex V2.</p>
   * @public
   */
  clientTimestampMillis?: number | undefined;
}

/**
 * <p>Event sent from the client application to Amazon Lex V2 to indicate that
 *          playback of audio is complete and that Amazon Lex V2 should start processing
 *          the user's input.</p>
 * @public
 */
export interface PlaybackCompletionEvent {
  /**
   * <p>A unique identifier that your application assigns to the event. You
   *          can use this to identify events in logs.</p>
   * @public
   */
  eventId?: string | undefined;

  /**
   * <p>A timestamp set by the client of the date and time that the event
   *          was sent to Amazon Lex V2.</p>
   * @public
   */
  clientTimestampMillis?: number | undefined;
}

/**
 * <p>The event sent from your client application to Amazon Lex V2 with text input
 *          from the user.</p>
 * @public
 */
export interface TextInputEvent {
  /**
   * <p>The text from the user. Amazon Lex V2 processes this as a complete
   *          statement.</p>
   * @public
   */
  text: string | undefined;

  /**
   * <p>A unique identifier that your application assigns to the event. You
   *          can use this to identify events in logs.</p>
   * @public
   */
  eventId?: string | undefined;

  /**
   * <p>A timestamp set by the client of the date and time that the event
   *          was sent to Amazon Lex V2.</p>
   * @public
   */
  clientTimestampMillis?: number | undefined;
}

/**
 * <p>Event that Amazon Lex V2 sends to indicate that the stream is still open
 *          between the client application and Amazon Lex V2 </p>
 * @public
 */
export interface HeartbeatEvent {
  /**
   * <p>A unique identifier of the event sent by Amazon Lex V2. The identifier is in
   *          the form <code>RESPONSE-N</code>, where N is a number starting with one
   *          and incremented for each event sent by Amazon Lex V2 in the current
   *          session.</p>
   * @public
   */
  eventId?: string | undefined;
}

/**
 * <p>Event sent from Amazon Lex V2 to indicate to the client application should
 *          stop playback of audio. For example, if the client is playing a prompt
 *          that asks for the user's telephone number, the user might start to say
 *          the phone number before the prompt is complete. Amazon Lex V2 sends this event
 *          to the client application to indicate that the user is responding and
 *          that Amazon Lex V2 is processing their input.</p>
 * @public
 */
export interface PlaybackInterruptionEvent {
  /**
   * <p>Indicates the type of user input that Amazon Lex V2 detected.</p>
   * @public
   */
  eventReason?: PlaybackInterruptionReason | undefined;

  /**
   * <p>The identifier of the event that contained the audio, DTMF, or text
   *          that caused the interruption.</p>
   * @public
   */
  causedByEventId?: string | undefined;

  /**
   * <p>A unique identifier of the event sent by Amazon Lex V2. The identifier is in
   *          the form <code>RESPONSE-N</code>, where N is a number starting with one
   *          and incremented for each event sent by Amazon Lex V2 in the current
   *          session.</p>
   * @public
   */
  eventId?: string | undefined;
}

/**
 * <p>The event sent from Amazon Lex V2 to your application with text to present
 *          to the user.</p>
 * @public
 */
export interface TextResponseEvent {
  /**
   * <p>A list of messages to send to the user. Messages are ordered based
   *          on the order that you returned the messages from your Lambda function
   *          or the order that the messages are defined in the bot.</p>
   * @public
   */
  messages?: Message[] | undefined;

  /**
   * <p>A unique identifier of the event sent by Amazon Lex V2. The identifier is in
   *          the form <code>RESPONSE-N</code>, where N is a number starting with one
   *          and incremented for each event sent by Amazon Lex V2 in the current
   *          session.</p>
   * @public
   */
  eventId?: string | undefined;
}

/**
 * <p>Event sent from Amazon Lex V2 to your client application that contains a
 *          transcript of voice audio. </p>
 * @public
 */
export interface TranscriptEvent {
  /**
   * <p>The transcript of the voice audio from the user.</p>
   * @public
   */
  transcript?: string | undefined;

  /**
   * <p>A unique identifier of the event sent by Amazon Lex V2. The identifier is in
   *          the form <code>RESPONSE-N</code>, where N is a number starting with one
   *          and incremented for each event sent by Amazon Lex V2 in the current
   *          session.</p>
   * @public
   */
  eventId?: string | undefined;
}

/**
 * <p>The specific constituent sub slot of the composite slot to elicit in dialog action.</p>
 * @public
 */
export interface ElicitSubSlot {
  /**
   * <p>The name of the slot that should be elicited from the user.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The field is not supported.</p>
   * @public
   */
  subSlotToElicit?: ElicitSubSlot | undefined;
}

/**
 * <p>The next action that Amazon Lex V2 should take.</p>
 * @public
 */
export interface DialogAction {
  /**
   * <p>The next action that the bot should take in its interaction with the
   *          user. The following values are possible:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Close</code> – Indicates that there will not be a
   *                response from the user. For example, the statement "Your order
   *                has been placed" does not require a response.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ConfirmIntent</code> – The next action is asking the
   *                user if the intent is complete and ready to be fulfilled. This is
   *                a yes/no question such as "Place the order?"</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Delegate</code> – The next action is determined by
   *                Amazon Lex V2.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ElicitIntent</code> – The next action is to elicit an
   *                intent from the user.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ElicitSlot</code> – The next action is to elicit a slot
   *                value from the user.</p>
   *             </li>
   *          </ul>
   * @public
   */
  type: DialogActionType | undefined;

  /**
   * <p>The name of the slot that should be elicited from the user.</p>
   * @public
   */
  slotToElicit?: string | undefined;

  /**
   * <p>Configures the slot to use spell-by-letter or spell-by-word style.
   *          When you use a style on a slot, users can spell out their input to make
   *          it clear to your bot.</p>
   *          <ul>
   *             <li>
   *                <p>Spell by letter - "b" "o" "b"</p>
   *             </li>
   *             <li>
   *                <p>Spell by word - "b as in boy" "o as in oscar" "b as in
   *                boy"</p>
   *             </li>
   *          </ul>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/spelling-styles.html">
   *             Using spelling to enter slot values </a>.</p>
   * @public
   */
  slotElicitationStyle?: StyleType | undefined;

  /**
   * <p>The name of the constituent sub slot of the composite slot
   *       specified in slotToElicit that should be elicited from the user.</p>
   * @public
   */
  subSlotToElicit?: ElicitSubSlot | undefined;
}

/**
 * <p>Provides an array of phrases that should be given preference when
 *          resolving values for a slot.</p>
 * @public
 */
export interface RuntimeHintDetails {
  /**
   * <p>One or more strings that Amazon Lex V2 should look for in the input to the
   *          bot. Each phrase is given preference when deciding on slot
   *          values.</p>
   * @public
   */
  runtimeHintValues?: RuntimeHintValue[] | undefined;

  /**
   * <p>A map of constituent sub slot names inside a composite slot in the intent and the phrases
   *       that should be added for each sub slot. Inside each composite slot hints, this structure provides
   *       a mechanism to add granular sub slot phrases. Only sub slot hints are supported for composite slots.
   *       The intent name, composite slot name and the constituent sub slot names must exist.</p>
   * @public
   */
  subSlotHints?: Record<string, RuntimeHintDetails> | undefined;
}

/**
 * <p>You can provide Amazon Lex V2 with hints to the phrases that a customer is
 *          likely to use for a slot. When a slot with hints is resolved, the
 *          phrases in the runtime hints are preferred in the resolution. You can
 *          provide hints for a maximum of 100 intents. You can provide a maximum
 *          of 100 slots.</p>
 *          <p>Before you can use runtime hints with an existing bot, you must
 *          first rebuild the bot.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/using-hints.html">Using runtime hints to
 *             improve recognition of slot values</a>.</p>
 * @public
 */
export interface RuntimeHints {
  /**
   * <p>A list of the slots in the intent that should have runtime hints
   *          added, and the phrases that should be added for each slot.</p>
   *          <p>The first level of the <code>slotHints</code> map is the name of the
   *          intent. The second level is the name of the slot within the intent. For
   *          more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/using-hints.html">Using hints to improve
   *             accuracy</a>.</p>
   *          <p>The intent name and slot name must exist.</p>
   * @public
   */
  slotHints?: Record<string, Record<string, RuntimeHintDetails>> | undefined;
}

/**
 * <p>A value that Amazon Lex V2 uses to fulfill an intent. </p>
 * @public
 */
export interface Slot {
  /**
   * <p>The current value of the slot.</p>
   * @public
   */
  value?: Value | undefined;

  /**
   * <p>When the <code>shape</code> value is <code>List</code>, it indicates
   *          that the <code>values</code> field contains a list of slot values. When
   *          the value is <code>Scalar</code>, it indicates that the
   *             <code>value</code> field contains a single value.</p>
   * @public
   */
  shape?: Shape | undefined;

  /**
   * <p>A list of one or more values that the user provided for the slot.
   *          For example, if a for a slot that elicits pizza toppings, the values
   *          might be "pepperoni" and "pineapple." </p>
   * @public
   */
  values?: Slot[] | undefined;

  /**
   * <p>The constituent sub slots of a composite slot.</p>
   * @public
   */
  subSlots?: Record<string, Slot> | undefined;
}

/**
 * <p>The current intent that Amazon Lex V2 is attempting to fulfill.</p>
 * @public
 */
export interface Intent {
  /**
   * <p>The name of the intent.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A map of all of the slots for the intent. The name of the slot maps
   *          to the value of the slot. If a slot has not been filled, the value is
   *          null.</p>
   * @public
   */
  slots?: Record<string, Slot> | undefined;

  /**
   * <p>Indicates the fulfillment state for the intent. The meanings of each value are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Failed</code> – The bot failed to fulfill the intent.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Fulfilled</code> – The bot has completed fulfillment of the intent.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FulfillmentInProgress</code> – The bot is in the middle of fulfilling the intent.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>InProgress</code> – The bot is in the middle of eliciting the slot values that are necessary to fulfill the intent.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ReadyForFulfillment</code> – The bot has elicited all the slot values for the intent and is ready to fulfill the intent.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Waiting</code> – The bot is waiting for a response from the user (limited to streaming conversations).</p>
   *             </li>
   *          </ul>
   * @public
   */
  state?: IntentState | undefined;

  /**
   * <p>Indicates whether the intent has been <code>Confirmed</code>, <code>Denied</code>, or <code>None</code> if the confirmation stage has not yet been reached.</p>
   * @public
   */
  confirmationState?: ConfirmationState | undefined;
}

/**
 * <p>An object containing information about an intent that Amazon Lex V2 determined might satisfy the user's utterance.
 *          The intents are ordered by the confidence score. </p>
 * @public
 */
export interface Interpretation {
  /**
   * <p>Determines the threshold where Amazon Lex V2 will insert the
   *             <code>AMAZON.FallbackIntent</code>,
   *             <code>AMAZON.KendraSearchIntent</code>, or both when returning
   *          alternative intents in a response. <code>AMAZON.FallbackIntent</code>
   *          and <code>AMAZON.KendraSearchIntent</code> are only inserted if they
   *          are configured for the bot.</p>
   * @public
   */
  nluConfidence?: ConfidenceScore | undefined;

  /**
   * <p>The sentiment expressed in an utterance. </p>
   *          <p>When the bot is configured to send utterances to Amazon Comprehend
   *          for sentiment analysis, this field contains the result of the
   *          analysis.</p>
   * @public
   */
  sentimentResponse?: SentimentResponse | undefined;

  /**
   * <p>A list of intents that might satisfy the user's utterance. The
   *          intents are ordered by the confidence score.</p>
   * @public
   */
  intent?: Intent | undefined;

  /**
   * <p>Specifies the service that interpreted the input.</p>
   * @public
   */
  interpretationSource?: InterpretationSource | undefined;
}

/**
 * <p>The state of the user's session with Amazon Lex V2.</p>
 * @public
 */
export interface SessionState {
  /**
   * <p>The next step that Amazon Lex V2 should take in the conversation with a
   *          user.</p>
   * @public
   */
  dialogAction?: DialogAction | undefined;

  /**
   * <p>The active intent that Amazon Lex V2 is processing.</p>
   * @public
   */
  intent?: Intent | undefined;

  /**
   * <p>One or more contexts that indicate to Amazon Lex V2 the context of a
   *          request. When a context is active, Amazon Lex V2 considers intents with the
   *          matching context as a trigger as the next intent in a session.</p>
   * @public
   */
  activeContexts?: ActiveContext[] | undefined;

  /**
   * <p>Map of key/value pairs representing session-specific context
   *          information. It contains application information passed between Amazon Lex V2
   *          and a client application.</p>
   * @public
   */
  sessionAttributes?: Record<string, string> | undefined;

  /**
   * <p>A unique identifier for a specific request.</p>
   * @public
   */
  originatingRequestId?: string | undefined;

  /**
   * <p>Hints for phrases that a customer is likely to use for a slot. Amazon Lex V2
   *          uses the hints to help determine the correct value of a slot.</p>
   * @public
   */
  runtimeHints?: RuntimeHints | undefined;
}

/**
 * <p>The initial event sent from the application to Amazon Lex V2 to configure
 *          the conversation, including session and request attributes and the
 *          response content type.</p>
 * @public
 */
export interface ConfigurationEvent {
  /**
   * <p>Request-specific information passed between the client application
   *          and Amazon Lex V2.</p>
   *          <p>The namespace <code>x-amz-lex:</code> is reserved for special
   *          attributes. Don't create any request attributes for prefix
   *             <code>x-amz-lex:</code>.</p>
   * @public
   */
  requestAttributes?: Record<string, string> | undefined;

  /**
   * <p>The message that Amazon Lex V2 returns in the response can be either text or
   *          speech based on the <code>responseContentType</code> value.</p>
   *          <ul>
   *             <li>
   *                <p>If the value is <code>text/plain;charset=utf-8</code>, Amazon Lex V2
   *                returns text in the response.</p>
   *             </li>
   *             <li>
   *                <p>If the value begins with <code>audio/</code>, Amazon Lex V2 returns
   *                speech in the response. Amazon Lex V2 uses Amazon Polly to generate the speech
   *                using the configuration that you specified in the
   *                   <code>requestContentType</code> parameter. For example, if you
   *                specify <code>audio/mpeg</code> as the value, Amazon Lex V2 returns
   *                speech in the MPEG format.</p>
   *             </li>
   *             <li>
   *                <p>If the value is <code>audio/pcm</code>, the speech returned is
   *                audio/pcm in 16-bit, little-endian format.</p>
   *             </li>
   *             <li>
   *                <p>The following are the accepted values:</p>
   *                <ul>
   *                   <li>
   *                      <p>audio/mpeg</p>
   *                   </li>
   *                   <li>
   *                      <p>audio/ogg</p>
   *                   </li>
   *                   <li>
   *                      <p>audio/pcm</p>
   *                   </li>
   *                   <li>
   *                      <p>audio/* (defaults to mpeg)</p>
   *                   </li>
   *                   <li>
   *                      <p>text/plain; charset=utf-8</p>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   * @public
   */
  responseContentType: string | undefined;

  /**
   * <p>The state of the user's session with Amazon Lex V2.</p>
   * @public
   */
  sessionState?: SessionState | undefined;

  /**
   * <p>A list of messages to send to the user.</p>
   *          <p>If you set the <code>welcomeMessage</code> field, you must also set
   *          the <a href="https://docs.aws.amazon.com/lexv2/latest/dg/API_runtime_DialogAction.html">
   *                <code>DialogAction</code>
   *             </a> structure's <a href="https://docs.aws.amazon.com/lexv2/latest/dg/API_runtime_DialogAction.html#lexv2-Type-runtime_DialogAction-type">
   *                <code>type</code>
   *             </a> field.</p>
   * @public
   */
  welcomeMessages?: Message[] | undefined;

  /**
   * <p>Determines whether Amazon Lex V2 should send audio responses to the client
   *          application.
   *       </p>
   *          <p>Set this field to false when the client is operating in a playback
   *          mode where audio responses are played to the user. If the client isn't
   *          operating in playback mode, such as a text chat application, set this
   *          to true so that Amazon Lex V2 doesn't wait for the prompt to finish playing on
   *          the client.</p>
   * @public
   */
  disablePlayback?: boolean | undefined;

  /**
   * <p>A unique identifier that your application assigns to the event. You
   *          can use this to identify events in logs.</p>
   * @public
   */
  eventId?: string | undefined;

  /**
   * <p>A timestamp set by the client of the date and time that the event
   *          was sent to Amazon Lex V2.</p>
   * @public
   */
  clientTimestampMillis?: number | undefined;
}

/**
 * @public
 */
export interface PutSessionRequest {
  /**
   * <p>The identifier of the bot that receives the session data.</p>
   * @public
   */
  botId: string | undefined;

  /**
   * <p>The alias identifier of the bot that receives the session
   *          data.</p>
   * @public
   */
  botAliasId: string | undefined;

  /**
   * <p>The locale where the session is in use.</p>
   * @public
   */
  localeId: string | undefined;

  /**
   * <p>The identifier of the session that receives the session data.</p>
   * @public
   */
  sessionId: string | undefined;

  /**
   * <p>A list of messages to send to the user. Messages are sent in the
   *          order that they are defined in the list.</p>
   * @public
   */
  messages?: Message[] | undefined;

  /**
   * <p>Sets the state of the session with the user. You can use this to set
   *          the current intent, attributes, context, and dialog action. Use the
   *          dialog action to determine the next step that Amazon Lex V2 should use in the
   *          conversation with the user.</p>
   * @public
   */
  sessionState: SessionState | undefined;

  /**
   * <p>Request-specific information passed between Amazon Lex V2 and the client
   *          application.</p>
   *          <p>The namespace <code>x-amz-lex:</code> is reserved for special
   *          attributes. Don't create any request attributes with the prefix
   *             <code>x-amz-lex:</code>.</p>
   * @public
   */
  requestAttributes?: Record<string, string> | undefined;

  /**
   * <p>The message that Amazon Lex V2 returns in the response can be either text or
   *          speech depending on the value of this parameter. </p>
   *          <ul>
   *             <li>
   *                <p>If the value is <code>text/plain; charset=utf-8</code>, Amazon Lex V2
   *                returns text in the response.</p>
   *             </li>
   *          </ul>
   * @public
   */
  responseContentType?: string | undefined;
}

/**
 * @public
 */
export interface RecognizeTextRequest {
  /**
   * <p>The identifier of the bot that processes the request.</p>
   * @public
   */
  botId: string | undefined;

  /**
   * <p>The alias identifier in use for the bot that processes the
   *          request.</p>
   * @public
   */
  botAliasId: string | undefined;

  /**
   * <p>The locale where the session is in use.</p>
   * @public
   */
  localeId: string | undefined;

  /**
   * <p>The identifier of the user session that is having the
   *          conversation.</p>
   * @public
   */
  sessionId: string | undefined;

  /**
   * <p>The text that the user entered. Amazon Lex V2 interprets this text.</p>
   * @public
   */
  text: string | undefined;

  /**
   * <p>The current state of the dialog between the user and the bot.</p>
   * @public
   */
  sessionState?: SessionState | undefined;

  /**
   * <p>Request-specific information passed between the client application
   *          and Amazon Lex V2 </p>
   *          <p>The namespace <code>x-amz-lex:</code> is reserved for special
   *          attributes. Don't create any request attributes with the prefix
   *             <code>x-amz-lex:</code>.</p>
   * @public
   */
  requestAttributes?: Record<string, string> | undefined;
}

/**
 * <p>Represents a stream of events between your application and
 *          Amazon Lex V2.</p>
 * @public
 */
export type StartConversationRequestEventStream =
  | StartConversationRequestEventStream.AudioInputEventMember
  | StartConversationRequestEventStream.ConfigurationEventMember
  | StartConversationRequestEventStream.DTMFInputEventMember
  | StartConversationRequestEventStream.DisconnectionEventMember
  | StartConversationRequestEventStream.PlaybackCompletionEventMember
  | StartConversationRequestEventStream.TextInputEventMember
  | StartConversationRequestEventStream.$UnknownMember;

/**
 * @public
 */
export namespace StartConversationRequestEventStream {
  /**
   * <p>Configuration information sent from your client application to
   *          Amazon Lex V2</p>
   * @public
   */
  export interface ConfigurationEventMember {
    ConfigurationEvent: ConfigurationEvent;
    AudioInputEvent?: never;
    DTMFInputEvent?: never;
    TextInputEvent?: never;
    PlaybackCompletionEvent?: never;
    DisconnectionEvent?: never;
    $unknown?: never;
  }

  /**
   * <p>Speech audio sent from your client application to Amazon Lex V2. Audio
   *          starts accumulating when Amazon Lex V2 identifies a voice and continues until a
   *          natural pause in the speech is found before processing.</p>
   * @public
   */
  export interface AudioInputEventMember {
    ConfigurationEvent?: never;
    AudioInputEvent: AudioInputEvent;
    DTMFInputEvent?: never;
    TextInputEvent?: never;
    PlaybackCompletionEvent?: never;
    DisconnectionEvent?: never;
    $unknown?: never;
  }

  /**
   * <p>DTMF information sent to Amazon Lex V2 by your application. Amazon Lex V2
   *          accumulates the DMTF information from when the user sends the first
   *          character and ends</p>
   *          <ul>
   *             <li>
   *                <p>when there's a pause longer that the value configured for the
   *                end timeout.</p>
   *             </li>
   *             <li>
   *                <p>when there's a digit that is the configured end
   *                character.</p>
   *             </li>
   *             <li>
   *                <p>when Amazon Lex V2 accumulates characters equal to the maximum DTMF
   *                character configuration.</p>
   *             </li>
   *          </ul>
   * @public
   */
  export interface DTMFInputEventMember {
    ConfigurationEvent?: never;
    AudioInputEvent?: never;
    DTMFInputEvent: DTMFInputEvent;
    TextInputEvent?: never;
    PlaybackCompletionEvent?: never;
    DisconnectionEvent?: never;
    $unknown?: never;
  }

  /**
   * <p>Text sent from your client application to Amazon Lex V2. Each
   *             <code>TextInputEvent</code> is processed individually.</p>
   * @public
   */
  export interface TextInputEventMember {
    ConfigurationEvent?: never;
    AudioInputEvent?: never;
    DTMFInputEvent?: never;
    TextInputEvent: TextInputEvent;
    PlaybackCompletionEvent?: never;
    DisconnectionEvent?: never;
    $unknown?: never;
  }

  /**
   * <p>Event sent from the client application to Amazon Lex V2 to indicate that it
   *          has finished playing audio and that Amazon Lex V2 should start listening for
   *          user input.</p>
   * @public
   */
  export interface PlaybackCompletionEventMember {
    ConfigurationEvent?: never;
    AudioInputEvent?: never;
    DTMFInputEvent?: never;
    TextInputEvent?: never;
    PlaybackCompletionEvent: PlaybackCompletionEvent;
    DisconnectionEvent?: never;
    $unknown?: never;
  }

  /**
   * <p>Event sent from the client application to indicate to Amazon Lex V2 that the
   *          conversation is over.</p>
   * @public
   */
  export interface DisconnectionEventMember {
    ConfigurationEvent?: never;
    AudioInputEvent?: never;
    DTMFInputEvent?: never;
    TextInputEvent?: never;
    PlaybackCompletionEvent?: never;
    DisconnectionEvent: DisconnectionEvent;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    ConfigurationEvent?: never;
    AudioInputEvent?: never;
    DTMFInputEvent?: never;
    TextInputEvent?: never;
    PlaybackCompletionEvent?: never;
    DisconnectionEvent?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    ConfigurationEvent: (value: ConfigurationEvent) => T;
    AudioInputEvent: (value: AudioInputEvent) => T;
    DTMFInputEvent: (value: DTMFInputEvent) => T;
    TextInputEvent: (value: TextInputEvent) => T;
    PlaybackCompletionEvent: (value: PlaybackCompletionEvent) => T;
    DisconnectionEvent: (value: DisconnectionEvent) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface StartConversationRequest {
  /**
   * <p>The identifier of the bot to process the request.</p>
   * @public
   */
  botId: string | undefined;

  /**
   * <p>The alias identifier in use for the bot that processes the
   *          request.</p>
   * @public
   */
  botAliasId: string | undefined;

  /**
   * <p>The locale where the session is in use.</p>
   * @public
   */
  localeId: string | undefined;

  /**
   * <p>The identifier of the user session that is having the
   *          conversation.</p>
   * @public
   */
  sessionId: string | undefined;

  /**
   * <p>The conversation type that you are using the Amazon Lex V2. If the
   *          conversation mode is <code>AUDIO</code> you can send both audio and
   *          DTMF information. If the mode is <code>TEXT</code> you can only send
   *          text.</p>
   * @public
   */
  conversationMode?: ConversationMode | undefined;

  /**
   * <p>Represents the stream of events to Amazon Lex V2 from your application. The
   *          events are encoded as HTTP/2 data frames.</p>
   * @public
   */
  requestEventStream: AsyncIterable<StartConversationRequestEventStream> | undefined;
}

/**
 * @public
 */
export interface GetSessionResponse {
  /**
   * <p>The identifier of the returned session.</p>
   * @public
   */
  sessionId?: string | undefined;

  /**
   * <p>A list of messages that were last sent to the user. The messages are
   *          ordered based on the order that your returned the messages from your
   *          Lambda function or the order that messages are defined in the bot.
   *       </p>
   * @public
   */
  messages?: Message[] | undefined;

  /**
   * <p>A list of intents that Amazon Lex V2 determined might satisfy the user's
   *          utterance. </p>
   *          <p>Each interpretation includes the intent, a score that indicates how
   *          confident Amazon Lex V2 is that the interpretation is the correct one, and an
   *          optional sentiment response that indicates the sentiment expressed in
   *          the utterance.</p>
   * @public
   */
  interpretations?: Interpretation[] | undefined;

  /**
   * <p>Represents the current state of the dialog between the user and the
   *          bot.</p>
   *          <p>You can use this to determine the progress of the conversation and
   *          what the next action might be.</p>
   * @public
   */
  sessionState?: SessionState | undefined;
}

/**
 * <p>Contains the current state of the conversation between the client
 *          application and Amazon Lex V2.</p>
 * @public
 */
export interface IntentResultEvent {
  /**
   * <p>Indicates whether the input to the operation was text, speech, or from a touch-tone keypad.</p>
   * @public
   */
  inputMode?: InputMode | undefined;

  /**
   * <p>A list of intents that Amazon Lex V2 determined might satisfy the user's
   *          utterance.</p>
   *          <p>Each interpretation includes the intent, a score that indicates how
   *          confident Amazon Lex V2 is that the interpretation is the correct one, and an
   *          optional sentiment response that indicates the sentiment expressed in
   *          the utterance.</p>
   * @public
   */
  interpretations?: Interpretation[] | undefined;

  /**
   * <p>The state of the user's session with Amazon Lex V2.</p>
   * @public
   */
  sessionState?: SessionState | undefined;

  /**
   * <p>The attributes sent in the request.</p>
   * @public
   */
  requestAttributes?: Record<string, string> | undefined;

  /**
   * <p>The identifier of the session in use.</p>
   * @public
   */
  sessionId?: string | undefined;

  /**
   * <p>A unique identifier of the event sent by Amazon Lex V2. The identifier is in
   *          the form <code>RESPONSE-N</code>, where N is a number starting with one
   *          and incremented for each event sent by Amazon Lex V2 in the current
   *          session.</p>
   * @public
   */
  eventId?: string | undefined;

  /**
   * <p>The bot member that is processing the intent.</p>
   * @public
   */
  recognizedBotMember?: RecognizedBotMember | undefined;
}

/**
 * @public
 */
export interface RecognizeTextResponse {
  /**
   * <p>A list of messages last sent to the user. The messages are ordered
   *          based on the order that you returned the messages from your Lambda
   *          function or the order that the messages are defined in the bot.</p>
   * @public
   */
  messages?: Message[] | undefined;

  /**
   * <p>Represents the current state of the dialog between the user and the
   *          bot. </p>
   *          <p>Use this to determine the progress of the conversation and what the
   *          next action may be.</p>
   * @public
   */
  sessionState?: SessionState | undefined;

  /**
   * <p>A list of intents that Amazon Lex V2 determined might satisfy the user's
   *          utterance. </p>
   *          <p>Each interpretation includes the intent, a score that indicates now
   *          confident Amazon Lex V2 is that the interpretation is the correct one, and an
   *          optional sentiment response that indicates the sentiment expressed in
   *          the utterance.</p>
   * @public
   */
  interpretations?: Interpretation[] | undefined;

  /**
   * <p>The attributes sent in the request.</p>
   * @public
   */
  requestAttributes?: Record<string, string> | undefined;

  /**
   * <p>The identifier of the session in use.</p>
   * @public
   */
  sessionId?: string | undefined;

  /**
   * <p>The bot member that recognized the text.</p>
   * @public
   */
  recognizedBotMember?: RecognizedBotMember | undefined;
}

/**
 * <p>Represents a stream of events between Amazon Lex V2 and your
 *          application.</p>
 * @public
 */
export type StartConversationResponseEventStream =
  | StartConversationResponseEventStream.AccessDeniedExceptionMember
  | StartConversationResponseEventStream.AudioResponseEventMember
  | StartConversationResponseEventStream.BadGatewayExceptionMember
  | StartConversationResponseEventStream.ConflictExceptionMember
  | StartConversationResponseEventStream.DependencyFailedExceptionMember
  | StartConversationResponseEventStream.HeartbeatEventMember
  | StartConversationResponseEventStream.IntentResultEventMember
  | StartConversationResponseEventStream.InternalServerExceptionMember
  | StartConversationResponseEventStream.PlaybackInterruptionEventMember
  | StartConversationResponseEventStream.ResourceNotFoundExceptionMember
  | StartConversationResponseEventStream.TextResponseEventMember
  | StartConversationResponseEventStream.ThrottlingExceptionMember
  | StartConversationResponseEventStream.TranscriptEventMember
  | StartConversationResponseEventStream.ValidationExceptionMember
  | StartConversationResponseEventStream.$UnknownMember;

/**
 * @public
 */
export namespace StartConversationResponseEventStream {
  /**
   * <p>Event sent from Amazon Lex V2 to indicate to the client application should
   *          stop playback of audio. For example, if the client is playing a prompt
   *          that asks for the user's telephone number, the user might start to say
   *          the phone number before the prompt is complete. Amazon Lex V2 sends this event
   *          to the client application to indicate that the user is responding and
   *          that Amazon Lex V2 is processing their input.</p>
   * @public
   */
  export interface PlaybackInterruptionEventMember {
    PlaybackInterruptionEvent: PlaybackInterruptionEvent;
    TranscriptEvent?: never;
    IntentResultEvent?: never;
    TextResponseEvent?: never;
    AudioResponseEvent?: never;
    HeartbeatEvent?: never;
    AccessDeniedException?: never;
    ResourceNotFoundException?: never;
    ValidationException?: never;
    ThrottlingException?: never;
    InternalServerException?: never;
    ConflictException?: never;
    DependencyFailedException?: never;
    BadGatewayException?: never;
    $unknown?: never;
  }

  /**
   * <p>Event sent from Amazon Lex V2 to your client application that contains a
   *          transcript of voice audio. </p>
   * @public
   */
  export interface TranscriptEventMember {
    PlaybackInterruptionEvent?: never;
    TranscriptEvent: TranscriptEvent;
    IntentResultEvent?: never;
    TextResponseEvent?: never;
    AudioResponseEvent?: never;
    HeartbeatEvent?: never;
    AccessDeniedException?: never;
    ResourceNotFoundException?: never;
    ValidationException?: never;
    ThrottlingException?: never;
    InternalServerException?: never;
    ConflictException?: never;
    DependencyFailedException?: never;
    BadGatewayException?: never;
    $unknown?: never;
  }

  /**
   * <p>Event sent from Amazon Lex V2 to the client application containing the
   *          current state of the conversation between the user and Amazon Lex V2.</p>
   * @public
   */
  export interface IntentResultEventMember {
    PlaybackInterruptionEvent?: never;
    TranscriptEvent?: never;
    IntentResultEvent: IntentResultEvent;
    TextResponseEvent?: never;
    AudioResponseEvent?: never;
    HeartbeatEvent?: never;
    AccessDeniedException?: never;
    ResourceNotFoundException?: never;
    ValidationException?: never;
    ThrottlingException?: never;
    InternalServerException?: never;
    ConflictException?: never;
    DependencyFailedException?: never;
    BadGatewayException?: never;
    $unknown?: never;
  }

  /**
   * <p>The event sent from Amazon Lex V2 to your application with text to present
   *          to the user.</p>
   * @public
   */
  export interface TextResponseEventMember {
    PlaybackInterruptionEvent?: never;
    TranscriptEvent?: never;
    IntentResultEvent?: never;
    TextResponseEvent: TextResponseEvent;
    AudioResponseEvent?: never;
    HeartbeatEvent?: never;
    AccessDeniedException?: never;
    ResourceNotFoundException?: never;
    ValidationException?: never;
    ThrottlingException?: never;
    InternalServerException?: never;
    ConflictException?: never;
    DependencyFailedException?: never;
    BadGatewayException?: never;
    $unknown?: never;
  }

  /**
   * <p>An event sent from Amazon Lex V2 to your client application containing audio
   *          to play to the user. </p>
   * @public
   */
  export interface AudioResponseEventMember {
    PlaybackInterruptionEvent?: never;
    TranscriptEvent?: never;
    IntentResultEvent?: never;
    TextResponseEvent?: never;
    AudioResponseEvent: AudioResponseEvent;
    HeartbeatEvent?: never;
    AccessDeniedException?: never;
    ResourceNotFoundException?: never;
    ValidationException?: never;
    ThrottlingException?: never;
    InternalServerException?: never;
    ConflictException?: never;
    DependencyFailedException?: never;
    BadGatewayException?: never;
    $unknown?: never;
  }

  /**
   * <p>Event that Amazon Lex V2 sends to indicate that the stream is still open
   *          between the client application and Amazon Lex V2 </p>
   * @public
   */
  export interface HeartbeatEventMember {
    PlaybackInterruptionEvent?: never;
    TranscriptEvent?: never;
    IntentResultEvent?: never;
    TextResponseEvent?: never;
    AudioResponseEvent?: never;
    HeartbeatEvent: HeartbeatEvent;
    AccessDeniedException?: never;
    ResourceNotFoundException?: never;
    ValidationException?: never;
    ThrottlingException?: never;
    InternalServerException?: never;
    ConflictException?: never;
    DependencyFailedException?: never;
    BadGatewayException?: never;
    $unknown?: never;
  }

  /**
   * <p>Exception thrown when the credentials passed with the request are
   *          invalid or expired. Also thrown when the credentials in the request do
   *          not have permission to access the <code>StartConversation</code>
   *          operation.</p>
   * @public
   */
  export interface AccessDeniedExceptionMember {
    PlaybackInterruptionEvent?: never;
    TranscriptEvent?: never;
    IntentResultEvent?: never;
    TextResponseEvent?: never;
    AudioResponseEvent?: never;
    HeartbeatEvent?: never;
    AccessDeniedException: AccessDeniedException;
    ResourceNotFoundException?: never;
    ValidationException?: never;
    ThrottlingException?: never;
    InternalServerException?: never;
    ConflictException?: never;
    DependencyFailedException?: never;
    BadGatewayException?: never;
    $unknown?: never;
  }

  /**
   * <p>Exception thrown if one of the input parameters points to a resource
   *          that does not exist. For example, if the bot ID specified does not
   *          exist.</p>
   * @public
   */
  export interface ResourceNotFoundExceptionMember {
    PlaybackInterruptionEvent?: never;
    TranscriptEvent?: never;
    IntentResultEvent?: never;
    TextResponseEvent?: never;
    AudioResponseEvent?: never;
    HeartbeatEvent?: never;
    AccessDeniedException?: never;
    ResourceNotFoundException: ResourceNotFoundException;
    ValidationException?: never;
    ThrottlingException?: never;
    InternalServerException?: never;
    ConflictException?: never;
    DependencyFailedException?: never;
    BadGatewayException?: never;
    $unknown?: never;
  }

  /**
   * <p>Exception thrown when one or more parameters could not be validated.
   *          The <code>message</code> contains the name of the field that isn't
   *          valid.</p>
   * @public
   */
  export interface ValidationExceptionMember {
    PlaybackInterruptionEvent?: never;
    TranscriptEvent?: never;
    IntentResultEvent?: never;
    TextResponseEvent?: never;
    AudioResponseEvent?: never;
    HeartbeatEvent?: never;
    AccessDeniedException?: never;
    ResourceNotFoundException?: never;
    ValidationException: ValidationException;
    ThrottlingException?: never;
    InternalServerException?: never;
    ConflictException?: never;
    DependencyFailedException?: never;
    BadGatewayException?: never;
    $unknown?: never;
  }

  /**
   * <p>Exception thrown when your application exceeds the maximum number of
   *          concurrent requests. </p>
   * @public
   */
  export interface ThrottlingExceptionMember {
    PlaybackInterruptionEvent?: never;
    TranscriptEvent?: never;
    IntentResultEvent?: never;
    TextResponseEvent?: never;
    AudioResponseEvent?: never;
    HeartbeatEvent?: never;
    AccessDeniedException?: never;
    ResourceNotFoundException?: never;
    ValidationException?: never;
    ThrottlingException: ThrottlingException;
    InternalServerException?: never;
    ConflictException?: never;
    DependencyFailedException?: never;
    BadGatewayException?: never;
    $unknown?: never;
  }

  /**
   * <p>An error occurred with Amazon Lex V2.</p>
   * @public
   */
  export interface InternalServerExceptionMember {
    PlaybackInterruptionEvent?: never;
    TranscriptEvent?: never;
    IntentResultEvent?: never;
    TextResponseEvent?: never;
    AudioResponseEvent?: never;
    HeartbeatEvent?: never;
    AccessDeniedException?: never;
    ResourceNotFoundException?: never;
    ValidationException?: never;
    ThrottlingException?: never;
    InternalServerException: InternalServerException;
    ConflictException?: never;
    DependencyFailedException?: never;
    BadGatewayException?: never;
    $unknown?: never;
  }

  /**
   * <p>Exception thrown when two clients are using the same AWS account,
   *          Amazon Lex V2 bot, and session ID.</p>
   * @public
   */
  export interface ConflictExceptionMember {
    PlaybackInterruptionEvent?: never;
    TranscriptEvent?: never;
    IntentResultEvent?: never;
    TextResponseEvent?: never;
    AudioResponseEvent?: never;
    HeartbeatEvent?: never;
    AccessDeniedException?: never;
    ResourceNotFoundException?: never;
    ValidationException?: never;
    ThrottlingException?: never;
    InternalServerException?: never;
    ConflictException: ConflictException;
    DependencyFailedException?: never;
    BadGatewayException?: never;
    $unknown?: never;
  }

  /**
   * <p></p>
   * @public
   */
  export interface DependencyFailedExceptionMember {
    PlaybackInterruptionEvent?: never;
    TranscriptEvent?: never;
    IntentResultEvent?: never;
    TextResponseEvent?: never;
    AudioResponseEvent?: never;
    HeartbeatEvent?: never;
    AccessDeniedException?: never;
    ResourceNotFoundException?: never;
    ValidationException?: never;
    ThrottlingException?: never;
    InternalServerException?: never;
    ConflictException?: never;
    DependencyFailedException: DependencyFailedException;
    BadGatewayException?: never;
    $unknown?: never;
  }

  /**
   * <p></p>
   * @public
   */
  export interface BadGatewayExceptionMember {
    PlaybackInterruptionEvent?: never;
    TranscriptEvent?: never;
    IntentResultEvent?: never;
    TextResponseEvent?: never;
    AudioResponseEvent?: never;
    HeartbeatEvent?: never;
    AccessDeniedException?: never;
    ResourceNotFoundException?: never;
    ValidationException?: never;
    ThrottlingException?: never;
    InternalServerException?: never;
    ConflictException?: never;
    DependencyFailedException?: never;
    BadGatewayException: BadGatewayException;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    PlaybackInterruptionEvent?: never;
    TranscriptEvent?: never;
    IntentResultEvent?: never;
    TextResponseEvent?: never;
    AudioResponseEvent?: never;
    HeartbeatEvent?: never;
    AccessDeniedException?: never;
    ResourceNotFoundException?: never;
    ValidationException?: never;
    ThrottlingException?: never;
    InternalServerException?: never;
    ConflictException?: never;
    DependencyFailedException?: never;
    BadGatewayException?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    PlaybackInterruptionEvent: (value: PlaybackInterruptionEvent) => T;
    TranscriptEvent: (value: TranscriptEvent) => T;
    IntentResultEvent: (value: IntentResultEvent) => T;
    TextResponseEvent: (value: TextResponseEvent) => T;
    AudioResponseEvent: (value: AudioResponseEvent) => T;
    HeartbeatEvent: (value: HeartbeatEvent) => T;
    AccessDeniedException: (value: AccessDeniedException) => T;
    ResourceNotFoundException: (value: ResourceNotFoundException) => T;
    ValidationException: (value: ValidationException) => T;
    ThrottlingException: (value: ThrottlingException) => T;
    InternalServerException: (value: InternalServerException) => T;
    ConflictException: (value: ConflictException) => T;
    DependencyFailedException: (value: DependencyFailedException) => T;
    BadGatewayException: (value: BadGatewayException) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface StartConversationResponse {
  /**
   * <p>Represents the stream of events from Amazon Lex V2 to your application. The
   *          events are encoded as HTTP/2 data frames.</p>
   * @public
   */
  responseEventStream?: AsyncIterable<StartConversationResponseEventStream> | undefined;
}
