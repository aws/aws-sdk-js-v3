// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";
import { StreamingBlobTypes } from "@smithy/types";

import { LexRuntimeV2ServiceException as __BaseException } from "./LexRuntimeV2ServiceException";

/**
 * @public
 * <p></p>
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessDeniedException, __BaseException>) {
    super({
      name: "AccessDeniedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessDeniedException.prototype);
  }
}

/**
 * @public
 * <p>The time that a context is active. You can specify the time to live
 *          in seconds or in conversation turns.</p>
 */
export interface ActiveContextTimeToLive {
  /**
   * @public
   * <p>The number of seconds that the context is active. You can specify
   *          between 5 and 86400 seconds (24 hours).</p>
   */
  timeToLiveInSeconds: number | undefined;

  /**
   * @public
   * <p>The number of turns that the context is active. You can specify up
   *          to 20 turns. Each request and response from the bot is a turn.</p>
   */
  turnsToLive: number | undefined;
}

/**
 * @public
 * <p>Contains information about the contexts that a user is using in a
 *          session. You can configure Amazon Lex V2 to set a context when an intent is
 *          fulfilled, or you can set a context using the , , or  operations.</p>
 *          <p>Use a context to indicate to Amazon Lex V2 intents that should be used as
 *          follow-up intents. For example, if the active context is
 *             <code>order-fulfilled</code>, only intents that have
 *             <code>order-fulfilled</code> configured as a trigger are considered
 *          for follow up.</p>
 */
export interface ActiveContext {
  /**
   * @public
   * <p>The name of the context.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>Indicates the number of turns or seconds that the context is active.
   *          Once the time to live expires, the context is no longer returned in a
   *          response.</p>
   */
  timeToLive: ActiveContextTimeToLive | undefined;

  /**
   * @public
   * <p>A list of contexts active for the request. A context can be
   *          activated when a previous intent is fulfilled, or by including the
   *          context in the request.</p>
   *          <p>If you don't specify a list of contexts, Amazon Lex V2 will use the current
   *          list of contexts for the session. If you specify an empty list, all
   *          contexts for the session are cleared. </p>
   */
  contextAttributes: Record<string, string> | undefined;
}

/**
 * @public
 * <p>Represents a chunk of audio sent from the client application to
 *          Amazon Lex V2. The audio is all or part of an utterance from the user.</p>
 *          <p>Amazon Lex V2 accumulates audio chunks until it recognizes a natural pause
 *          in speech before processing the input.</p>
 */
export interface AudioInputEvent {
  /**
   * @public
   * <p>An encoded stream of audio.</p>
   */
  audioChunk?: Uint8Array;

  /**
   * @public
   * <p>The encoding used for the audio chunk. You must use 8 KHz PCM 16-bit
   *          mono-channel little-endian format. The value of the field should
   *          be:</p>
   *          <p>
   *             <code>audio/lpcm; sample-rate=8000; sample-size-bits=16;
   *             channel-count=1; is-big-endian=false</code>
   *          </p>
   */
  contentType: string | undefined;

  /**
   * @public
   * <p>A unique identifier that your application assigns to the event. You
   *          can use this to identify events in logs.</p>
   */
  eventId?: string;

  /**
   * @public
   * <p>A timestamp set by the client of the date and time that the event
   *          was sent to Amazon Lex V2.</p>
   */
  clientTimestampMillis?: number;
}

/**
 * @public
 * <p>An event sent from Amazon Lex V2 to your client application containing audio
 *          to play to the user. </p>
 */
export interface AudioResponseEvent {
  /**
   * @public
   * <p>A chunk of the audio to play. </p>
   */
  audioChunk?: Uint8Array;

  /**
   * @public
   * <p>The encoding of the audio chunk. This is the same as the encoding
   *          configure in the <code>contentType</code> field of the
   *             <code>ConfigurationEvent</code>.</p>
   */
  contentType?: string;

  /**
   * @public
   * <p>A unique identifier of the event sent by Amazon Lex V2. The identifier is in
   *          the form <code>RESPONSE-N</code>, where N is a number starting with one
   *          and incremented for each event sent by Amazon Lex V2 in the current
   *          session.</p>
   */
  eventId?: string;
}

/**
 * @public
 * <p></p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConflictException, __BaseException>) {
    super({
      name: "ConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConflictException.prototype);
  }
}

/**
 * @public
 */
export interface DeleteSessionRequest {
  /**
   * @public
   * <p>The identifier of the bot that contains the session data.</p>
   */
  botId: string | undefined;

  /**
   * @public
   * <p>The alias identifier in use for the bot that contains the session
   *          data.</p>
   */
  botAliasId: string | undefined;

  /**
   * @public
   * <p>The locale where the session is in use.</p>
   */
  localeId: string | undefined;

  /**
   * @public
   * <p>The identifier of the session to delete.</p>
   */
  sessionId: string | undefined;
}

/**
 * @public
 */
export interface DeleteSessionResponse {
  /**
   * @public
   * <p>The identifier of the bot that contained the session data.</p>
   */
  botId?: string;

  /**
   * @public
   * <p>The alias identifier in use for the bot that contained the session
   *          data.</p>
   */
  botAliasId?: string;

  /**
   * @public
   * <p>The locale where the session was used.</p>
   */
  localeId?: string;

  /**
   * @public
   * <p>The identifier of the deleted session.</p>
   */
  sessionId?: string;
}

/**
 * @public
 * <p></p>
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerException, __BaseException>) {
    super({
      name: "InternalServerException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerException.prototype);
  }
}

/**
 * @public
 * <p></p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
  }
}

/**
 * @public
 * <p></p>
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottlingException, __BaseException>) {
    super({
      name: "ThrottlingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottlingException.prototype);
  }
}

/**
 * @public
 * <p></p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ValidationException, __BaseException>) {
    super({
      name: "ValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ValidationException.prototype);
  }
}

/**
 * @public
 */
export interface GetSessionRequest {
  /**
   * @public
   * <p>The identifier of the bot that contains the session data.</p>
   */
  botId: string | undefined;

  /**
   * @public
   * <p>The alias identifier in use for the bot that contains the session
   *          data.</p>
   */
  botAliasId: string | undefined;

  /**
   * @public
   * <p>The locale where the session is in use.</p>
   */
  localeId: string | undefined;

  /**
   * @public
   * <p>The identifier of the session to return.</p>
   */
  sessionId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ConfirmationState = {
  CONFIRMED: "Confirmed",
  DENIED: "Denied",
  NONE: "None",
} as const;

/**
 * @public
 */
export type ConfirmationState = (typeof ConfirmationState)[keyof typeof ConfirmationState];

/**
 * @public
 * @enum
 */
export const Shape = {
  COMPOSITE: "Composite",
  LIST: "List",
  SCALAR: "Scalar",
} as const;

/**
 * @public
 */
export type Shape = (typeof Shape)[keyof typeof Shape];

/**
 * @public
 * <p>The value of a slot.</p>
 */
export interface Value {
  /**
   * @public
   * <p>The text of the utterance from the user that was entered for the
   *          slot.</p>
   */
  originalValue?: string;

  /**
   * @public
   * <p>The value that Amazon Lex V2 determines for the slot. The actual value
   *          depends on the setting of the value selection strategy for the bot. You
   *          can choose to use the value entered by the user, or you can have Amazon Lex V2
   *          choose the first value in the <code>resolvedValues</code> list.</p>
   */
  interpretedValue: string | undefined;

  /**
   * @public
   * <p>A list of additional values that have been recognized for the
   *          slot.</p>
   */
  resolvedValues?: string[];
}

/**
 * @public
 * @enum
 */
export const IntentState = {
  FAILED: "Failed",
  FULFILLED: "Fulfilled",
  FULFILLMENT_IN_PROGRESS: "FulfillmentInProgress",
  IN_PROGRESS: "InProgress",
  READY_FOR_FULFILLMENT: "ReadyForFulfillment",
  WAITING: "Waiting",
} as const;

/**
 * @public
 */
export type IntentState = (typeof IntentState)[keyof typeof IntentState];

/**
 * @public
 * <p>Provides a score that indicates the confidence that Amazon Lex V2 has that
 *          an intent is the one that satisfies the user's intent.</p>
 */
export interface ConfidenceScore {
  /**
   * @public
   * <p>A score that indicates how confident Amazon Lex V2 is that an intent
   *          satisfies the user's intent. Ranges between 0.00 and 1.00. Higher
   *          scores indicate higher confidence.</p>
   */
  score?: number;
}

/**
 * @public
 * @enum
 */
export const SentimentType = {
  MIXED: "MIXED",
  NEGATIVE: "NEGATIVE",
  NEUTRAL: "NEUTRAL",
  POSITIVE: "POSITIVE",
} as const;

/**
 * @public
 */
export type SentimentType = (typeof SentimentType)[keyof typeof SentimentType];

/**
 * @public
 * <p>The individual sentiment responses for the utterance.</p>
 */
export interface SentimentScore {
  /**
   * @public
   * <p>The level of confidence that Amazon Comprehend has in the accuracy
   *          of its detection of the <code>POSITIVE</code> sentiment.</p>
   */
  positive?: number;

  /**
   * @public
   * <p>The level of confidence that Amazon Comprehend has in the accuracy
   *          of its detection of the <code>NEGATIVE</code> sentiment.</p>
   */
  negative?: number;

  /**
   * @public
   * <p>The level of confidence that Amazon Comprehend has in the accuracy
   *          of its detection of the <code>NEUTRAL</code> sentiment.</p>
   */
  neutral?: number;

  /**
   * @public
   * <p>The level of confidence that Amazon Comprehend has in the accuracy
   *          of its detection of the <code>MIXED</code> sentiment.</p>
   */
  mixed?: number;
}

/**
 * @public
 * <p>Provides information about the sentiment expressed in a user's
 *          response in a conversation. Sentiments are determined using Amazon
 *          Comprehend. Sentiments are only returned if they are enabled for the
 *          bot.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-sentiment.html">
 *             Determine Sentiment </a> in the <i>Amazon Comprehend
 *             developer guide</i>.</p>
 */
export interface SentimentResponse {
  /**
   * @public
   * <p>The overall sentiment expressed in the user's response. This is the
   *          sentiment most likely expressed by the user based on the analysis by
   *          Amazon Comprehend.</p>
   */
  sentiment?: SentimentType;

  /**
   * @public
   * <p>The individual sentiment responses for the utterance.</p>
   */
  sentimentScore?: SentimentScore;
}

/**
 * @public
 * @enum
 */
export const MessageContentType = {
  CUSTOM_PAYLOAD: "CustomPayload",
  IMAGE_RESPONSE_CARD: "ImageResponseCard",
  PLAIN_TEXT: "PlainText",
  SSML: "SSML",
} as const;

/**
 * @public
 */
export type MessageContentType = (typeof MessageContentType)[keyof typeof MessageContentType];

/**
 * @public
 * <p>A button that appears on a response card show to the user.</p>
 */
export interface Button {
  /**
   * @public
   * <p>The text that is displayed on the button.</p>
   */
  text: string | undefined;

  /**
   * @public
   * <p>The value returned to Amazon Lex V2 when a user chooses the button.</p>
   */
  value: string | undefined;
}

/**
 * @public
 * <p>A card that is shown to the user by a messaging platform. You define
 *          the contents of the card, the card is displayed by the platform. </p>
 *          <p>When you use a response card, the response from the user is
 *          constrained to the text associated with a button on the card.</p>
 */
export interface ImageResponseCard {
  /**
   * @public
   * <p>The title to display on the response card. The format of the title
   *          is determined by the platform displaying the response card.</p>
   */
  title: string | undefined;

  /**
   * @public
   * <p>The subtitle to display on the response card. The format of the
   *          subtitle is determined by the platform displaying the response
   *          card.</p>
   */
  subtitle?: string;

  /**
   * @public
   * <p>The URL of an image to display on the response card. The image URL
   *          must be publicly available so that the platform displaying the response
   *          card has access to the image.</p>
   */
  imageUrl?: string;

  /**
   * @public
   * <p>A list of buttons that should be displayed on the response card. The
   *          arrangement of the buttons is determined by the platform that displays
   *          the button.</p>
   */
  buttons?: Button[];
}

/**
 * @public
 * <p>Container for text that is returned to the customer..</p>
 */
export interface Message {
  /**
   * @public
   * <p>The text of the message.</p>
   */
  content?: string;

  /**
   * @public
   * <p>Indicates the type of response.</p>
   */
  contentType: MessageContentType | undefined;

  /**
   * @public
   * <p>A card that is shown to the user by a messaging platform. You define
   *          the contents of the card, the card is displayed by the platform. </p>
   *          <p>When you use a response card, the response from the user is
   *          constrained to the text associated with a button on the card.</p>
   */
  imageResponseCard?: ImageResponseCard;
}

/**
 * @public
 * @enum
 */
export const StyleType = {
  DEFAULT: "Default",
  SPELL_BY_LETTER: "SpellByLetter",
  SPELL_BY_WORD: "SpellByWord",
} as const;

/**
 * @public
 */
export type StyleType = (typeof StyleType)[keyof typeof StyleType];

/**
 * @public
 * @enum
 */
export const DialogActionType = {
  CLOSE: "Close",
  CONFIRM_INTENT: "ConfirmIntent",
  DELEGATE: "Delegate",
  ELICIT_INTENT: "ElicitIntent",
  ELICIT_SLOT: "ElicitSlot",
  NONE: "None",
} as const;

/**
 * @public
 */
export type DialogActionType = (typeof DialogActionType)[keyof typeof DialogActionType];

/**
 * @public
 * <p>Provides the phrase that Amazon Lex V2 should look for in the user's input
 *          to the bot.</p>
 */
export interface RuntimeHintValue {
  /**
   * @public
   * <p>The phrase that Amazon Lex V2 should look for in the user's input to the
   *          bot.</p>
   */
  phrase: string | undefined;
}

/**
 * @public
 * <p></p>
 */
export class BadGatewayException extends __BaseException {
  readonly name: "BadGatewayException" = "BadGatewayException";
  readonly $fault: "server" = "server";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<BadGatewayException, __BaseException>) {
    super({
      name: "BadGatewayException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, BadGatewayException.prototype);
  }
}

/**
 * @public
 * <p></p>
 */
export class DependencyFailedException extends __BaseException {
  readonly name: "DependencyFailedException" = "DependencyFailedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DependencyFailedException, __BaseException>) {
    super({
      name: "DependencyFailedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DependencyFailedException.prototype);
  }
}

/**
 * @public
 */
export interface PutSessionResponse {
  /**
   * @public
   * <p>The type of response. Same as the type specified in the
   *             <code>responseContentType</code> field in the request.</p>
   */
  contentType?: string;

  /**
   * @public
   * <p>A list of messages that were last sent to the user. The messages are
   *          ordered based on how you return the messages from you Lambda function
   *          or the order that the messages are defined in the bot.</p>
   */
  messages?: string;

  /**
   * @public
   * <p>Represents the current state of the dialog between the user and the
   *          bot.</p>
   *          <p>Use this to determine the progress of the conversation and what the
   *          next action may be.</p>
   */
  sessionState?: string;

  /**
   * @public
   * <p>Request-specific information passed between the client application
   *          and Amazon Lex V2. These are the same as the <code>requestAttribute</code>
   *          parameter in the call to the <code>PutSession</code> operation.</p>
   */
  requestAttributes?: string;

  /**
   * @public
   * <p>The identifier of the session that received the data.</p>
   */
  sessionId?: string;

  /**
   * @public
   * <p>If the requested content type was audio, the audio version of the
   *          message to convey to the user.</p>
   */
  audioStream?: StreamingBlobTypes;
}

/**
 * @public
 * <p>The bot member that processes the request.</p>
 */
export interface RecognizedBotMember {
  /**
   * @public
   * <p>The identifier of the bot member that processes the request.</p>
   */
  botId: string | undefined;

  /**
   * @public
   * <p>The name of the bot member that processes the request.</p>
   */
  botName?: string;
}

/**
 * @public
 */
export interface RecognizeUtteranceRequest {
  /**
   * @public
   * <p>The identifier of the bot that should receive the request.</p>
   */
  botId: string | undefined;

  /**
   * @public
   * <p>The alias identifier in use for the bot that should receive the
   *          request.</p>
   */
  botAliasId: string | undefined;

  /**
   * @public
   * <p>The locale where the session is in use.</p>
   */
  localeId: string | undefined;

  /**
   * @public
   * <p>The identifier of the session in use.</p>
   */
  sessionId: string | undefined;

  /**
   * @public
   * <p>Sets the state of the session with the user. You can use this to set
   *          the current intent, attributes, context, and dialog action. Use the
   *          dialog action to determine the next step that Amazon Lex V2 should use in the
   *          conversation with the user.</p>
   *          <p>The <code>sessionState</code> field must be compressed using gzip
   *          and then base64 encoded before sending to Amazon Lex V2.</p>
   */
  sessionState?: string;

  /**
   * @public
   * <p>Request-specific information passed between the client application
   *          and Amazon Lex V2 </p>
   *          <p>The namespace <code>x-amz-lex:</code> is reserved for special
   *          attributes. Don't create any request attributes for prefix
   *             <code>x-amz-lex:</code>.</p>
   *          <p>The <code>requestAttributes</code> field must be compressed using
   *          gzip and then base64 encoded before sending to Amazon Lex V2.</p>
   */
  requestAttributes?: string;

  /**
   * @public
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
   */
  requestContentType: string | undefined;

  /**
   * @public
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
   */
  responseContentType?: string;

  /**
   * @public
   * <p>User input in PCM or Opus audio format or text format as described
   *          in the <code>requestContentType</code> parameter.</p>
   */
  inputStream?: StreamingBlobTypes;
}

/**
 * @public
 */
export interface RecognizeUtteranceResponse {
  /**
   * @public
   * <p>Indicates whether the input mode to the operation was text or
   *          speech.
   *       </p>
   */
  inputMode?: string;

  /**
   * @public
   * <p>Content type as specified in the <code>responseContentType</code> in
   *          the request.</p>
   */
  contentType?: string;

  /**
   * @public
   * <p>A list of messages that were last sent to the user. The messages are
   *          ordered based on the order that you returned the messages from your
   *          Lambda function or the order that the messages are defined in the
   *          bot.</p>
   *          <p>The <code>messages</code> field is compressed with gzip and then
   *          base64 encoded. Before you can use the contents of the field, you must
   *          decode and decompress the contents. See the example for a simple
   *          function to decode and decompress the contents.</p>
   */
  messages?: string;

  /**
   * @public
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
   */
  interpretations?: string;

  /**
   * @public
   * <p>Represents the current state of the dialog between the user and the
   *          bot.</p>
   *          <p>Use this to determine the progress of the conversation and what the
   *          next action might be.</p>
   *          <p>The <code>sessionState</code> field is compressed with gzip and then
   *          base64 encoded. Before you can use the contents of the field, you must
   *          decode and decompress the contents. See the example for a simple
   *          function to decode and decompress the contents.</p>
   */
  sessionState?: string;

  /**
   * @public
   * <p>The attributes sent in the request.</p>
   *          <p>The <code>requestAttributes</code> field is compressed with gzip and
   *          then base64 encoded. Before you can use the contents of the field, you
   *          must decode and decompress the contents.</p>
   */
  requestAttributes?: string;

  /**
   * @public
   * <p>The identifier of the session in use.</p>
   */
  sessionId?: string;

  /**
   * @public
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
   */
  inputTranscript?: string;

  /**
   * @public
   * <p>The prompt or statement to send to the user. This is based on the
   *          bot configuration and context. For example, if Amazon Lex V2 did not understand
   *          the user intent, it sends the <code>clarificationPrompt</code>
   *          configured for the bot. If the intent requires confirmation before
   *          taking the fulfillment action, it sends the
   *             <code>confirmationPrompt</code>. Another example: Suppose that the
   *          Lambda function successfully fulfilled the intent, and sent a message
   *          to convey to the user. Then Amazon Lex V2 sends that message in the
   *          response.</p>
   */
  audioStream?: StreamingBlobTypes;

  /**
   * @public
   * <p>The bot member that recognized the utterance.</p>
   */
  recognizedBotMember?: string;
}

/**
 * @public
 * @enum
 */
export const ConversationMode = {
  AUDIO: "AUDIO",
  TEXT: "TEXT",
} as const;

/**
 * @public
 */
export type ConversationMode = (typeof ConversationMode)[keyof typeof ConversationMode];

/**
 * @public
 * <p>A notification from the client that it is disconnecting from Amazon Lex V2.
 *          Sending a <code>DisconnectionEvent</code> event is optional, but can
 *          help identify a conversation in logs.</p>
 */
export interface DisconnectionEvent {
  /**
   * @public
   * <p>A unique identifier that your application assigns to the event. You
   *          can use this to identify events in logs.</p>
   */
  eventId?: string;

  /**
   * @public
   * <p>A timestamp set by the client of the date and time that the event
   *          was sent to Amazon Lex V2.</p>
   */
  clientTimestampMillis?: number;
}

/**
 * @public
 * <p>A DTMF character sent from the client application. DTMF characters
 *          are typically sent from a phone keypad to represent numbers. For
 *          example, you can have Amazon Lex V2 process a credit card number input from a
 *          phone.</p>
 */
export interface DTMFInputEvent {
  /**
   * @public
   * <p>The DTMF character that the user pressed. The allowed characters are
   *          A - D, 0 - 9, # and *.</p>
   */
  inputCharacter: string | undefined;

  /**
   * @public
   * <p>A unique identifier that your application assigns to the event. You
   *          can use this to identify events in logs.</p>
   */
  eventId?: string;

  /**
   * @public
   * <p>A timestamp set by the client of the date and time that the event
   *          was sent to Amazon Lex V2.</p>
   */
  clientTimestampMillis?: number;
}

/**
 * @public
 * <p>Event sent from the client application to Amazon Lex V2 to indicate that
 *          playback of audio is complete and that Amazon Lex V2 should start processing
 *          the user's input.</p>
 */
export interface PlaybackCompletionEvent {
  /**
   * @public
   * <p>A unique identifier that your application assigns to the event. You
   *          can use this to identify events in logs.</p>
   */
  eventId?: string;

  /**
   * @public
   * <p>A timestamp set by the client of the date and time that the event
   *          was sent to Amazon Lex V2.</p>
   */
  clientTimestampMillis?: number;
}

/**
 * @public
 * <p>The event sent from your client application to Amazon Lex V2 with text input
 *          from the user.</p>
 */
export interface TextInputEvent {
  /**
   * @public
   * <p>The text from the user. Amazon Lex V2 processes this as a complete
   *          statement.</p>
   */
  text: string | undefined;

  /**
   * @public
   * <p>A unique identifier that your application assigns to the event. You
   *          can use this to identify events in logs.</p>
   */
  eventId?: string;

  /**
   * @public
   * <p>A timestamp set by the client of the date and time that the event
   *          was sent to Amazon Lex V2.</p>
   */
  clientTimestampMillis?: number;
}

/**
 * @public
 * <p>Event that Amazon Lex V2 sends to indicate that the stream is still open
 *          between the client application and Amazon Lex V2 </p>
 */
export interface HeartbeatEvent {
  /**
   * @public
   * <p>A unique identifier of the event sent by Amazon Lex V2. The identifier is in
   *          the form <code>RESPONSE-N</code>, where N is a number starting with one
   *          and incremented for each event sent by Amazon Lex V2 in the current
   *          session.</p>
   */
  eventId?: string;
}

/**
 * @public
 * @enum
 */
export const InputMode = {
  DTMF: "DTMF",
  SPEECH: "Speech",
  TEXT: "Text",
} as const;

/**
 * @public
 */
export type InputMode = (typeof InputMode)[keyof typeof InputMode];

/**
 * @public
 * @enum
 */
export const PlaybackInterruptionReason = {
  DTMF_START_DETECTED: "DTMF_START_DETECTED",
  TEXT_DETECTED: "TEXT_DETECTED",
  VOICE_START_DETECTED: "VOICE_START_DETECTED",
} as const;

/**
 * @public
 */
export type PlaybackInterruptionReason = (typeof PlaybackInterruptionReason)[keyof typeof PlaybackInterruptionReason];

/**
 * @public
 * <p>Event sent from Amazon Lex V2 to indicate to the client application should
 *          stop playback of audio. For example, if the client is playing a prompt
 *          that asks for the user's telephone number, the user might start to say
 *          the phone number before the prompt is complete. Amazon Lex V2 sends this event
 *          to the client application to indicate that the user is responding and
 *          that Amazon Lex V2 is processing their input.</p>
 */
export interface PlaybackInterruptionEvent {
  /**
   * @public
   * <p>Indicates the type of user input that Amazon Lex V2 detected.</p>
   */
  eventReason?: PlaybackInterruptionReason;

  /**
   * @public
   * <p>The identifier of the event that contained the audio, DTMF, or text
   *          that caused the interruption.</p>
   */
  causedByEventId?: string;

  /**
   * @public
   * <p>A unique identifier of the event sent by Amazon Lex V2. The identifier is in
   *          the form <code>RESPONSE-N</code>, where N is a number starting with one
   *          and incremented for each event sent by Amazon Lex V2 in the current
   *          session.</p>
   */
  eventId?: string;
}

/**
 * @public
 * <p>The event sent from Amazon Lex V2 to your application with text to present
 *          to the user.</p>
 */
export interface TextResponseEvent {
  /**
   * @public
   * <p>A list of messages to send to the user. Messages are ordered based
   *          on the order that you returned the messages from your Lambda function
   *          or the order that the messages are defined in the bot.</p>
   */
  messages?: Message[];

  /**
   * @public
   * <p>A unique identifier of the event sent by Amazon Lex V2. The identifier is in
   *          the form <code>RESPONSE-N</code>, where N is a number starting with one
   *          and incremented for each event sent by Amazon Lex V2 in the current
   *          session.</p>
   */
  eventId?: string;
}

/**
 * @public
 * <p>Event sent from Amazon Lex V2 to your client application that contains a
 *          transcript of voice audio. </p>
 */
export interface TranscriptEvent {
  /**
   * @public
   * <p>The transcript of the voice audio from the user.</p>
   */
  transcript?: string;

  /**
   * @public
   * <p>A unique identifier of the event sent by Amazon Lex V2. The identifier is in
   *          the form <code>RESPONSE-N</code>, where N is a number starting with one
   *          and incremented for each event sent by Amazon Lex V2 in the current
   *          session.</p>
   */
  eventId?: string;
}

/**
 * @public
 * <p>The specific constituent sub slot of the composite slot to elicit in dialog action.</p>
 */
export interface ElicitSubSlot {
  /**
   * @public
   * <p>The name of the slot that should be elicited from the user.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The field is not supported.</p>
   */
  subSlotToElicit?: ElicitSubSlot;
}

/**
 * @public
 * <p>The next action that Amazon Lex V2 should take.</p>
 */
export interface DialogAction {
  /**
   * @public
   * <p>The next action that the bot should take in its interaction with the
   *          user. The possible values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Close</code> - Indicates that there will not be a
   *                response from the user. For example, the statement "Your order
   *                has been placed" does not require a response.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ConfirmIntent</code> - The next action is asking the
   *                user if the intent is complete and ready to be fulfilled. This is
   *                a yes/no question such as "Place the order?"</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Delegate</code> - The next action is determined by
   *                Amazon Lex V2.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ElicitIntent</code> - The next action is to elicit an
   *                intent from the user.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ElicitSlot</code> - The next action is to elicit a slot
   *                value from the user.</p>
   *             </li>
   *          </ul>
   */
  type: DialogActionType | undefined;

  /**
   * @public
   * <p>The name of the slot that should be elicited from the user.</p>
   */
  slotToElicit?: string;

  /**
   * @public
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
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/using-spelling.html">
   *             Using spelling to enter slot values </a>.</p>
   */
  slotElicitationStyle?: StyleType;

  /**
   * @public
   * <p>The name of the constituent sub slot of the composite slot
   *       specified in slotToElicit that should be elicited from the user.</p>
   */
  subSlotToElicit?: ElicitSubSlot;
}

/**
 * @public
 * <p>Provides an array of phrases that should be given preference when
 *          resolving values for a slot.</p>
 */
export interface RuntimeHintDetails {
  /**
   * @public
   * <p>One or more strings that Amazon Lex V2 should look for in the input to the
   *          bot. Each phrase is given preference when deciding on slot
   *          values.</p>
   */
  runtimeHintValues?: RuntimeHintValue[];

  /**
   * @public
   * <p>A map of constituent sub slot names inside a composite slot in the intent and the phrases
   *       that should be added for each sub slot. Inside each composite slot hints, this structure provides
   *       a mechanism to add granular sub slot phrases. Only sub slot hints are supported for composite slots.
   *       The intent name, composite slot name and the constituent sub slot names must exist.</p>
   */
  subSlotHints?: Record<string, RuntimeHintDetails>;
}

/**
 * @public
 * <p>You can provide Amazon Lex V2 with hints to the phrases that a customer is
 *          likely to use for a slot. When a slot with hints is resolved, the
 *          phrases in the runtime hints are preferred in the resolution. You can
 *          provide hints for a maximum of 100 intents. You can provide a maximum
 *          of 100 slots.</p>
 *          <p>Before you can use runtime hints with an existing bot, you must
 *          first rebuild the bot.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/using-hints.html">Using runtime hints to
 *             improve recognition of slot values</a>.</p>
 */
export interface RuntimeHints {
  /**
   * @public
   * <p>A list of the slots in the intent that should have runtime hints
   *          added, and the phrases that should be added for each slot.</p>
   *          <p>The first level of the <code>slotHints</code> map is the name of the
   *          intent. The second level is the name of the slot within the intent. For
   *          more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/using-hints.html">Using hints to improve
   *             accuracy</a>.</p>
   *          <p>The intent name and slot name must exist.</p>
   */
  slotHints?: Record<string, Record<string, RuntimeHintDetails>>;
}

/**
 * @public
 * <p>A value that Amazon Lex V2 uses to fulfill an intent. </p>
 */
export interface Slot {
  /**
   * @public
   * <p>The current value of the slot.</p>
   */
  value?: Value;

  /**
   * @public
   * <p>When the <code>shape</code> value is <code>List</code>, it indicates
   *          that the <code>values</code> field contains a list of slot values. When
   *          the value is <code>Scalar</code>, it indicates that the
   *             <code>value</code> field contains a single value.</p>
   */
  shape?: Shape;

  /**
   * @public
   * <p>A list of one or more values that the user provided for the slot.
   *          For example, if a for a slot that elicits pizza toppings, the values
   *          might be "pepperoni" and "pineapple." </p>
   */
  values?: Slot[];

  /**
   * @public
   * <p>The constituent sub slots of a composite slot.</p>
   */
  subSlots?: Record<string, Slot>;
}

/**
 * @public
 * <p>The current intent that Amazon Lex V2 is attempting to fulfill.</p>
 */
export interface Intent {
  /**
   * @public
   * <p>The name of the intent.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>A map of all of the slots for the intent. The name of the slot maps
   *          to the value of the slot. If a slot has not been filled, the value is
   *          null.</p>
   */
  slots?: Record<string, Slot>;

  /**
   * @public
   * <p>Contains fulfillment information for the intent. </p>
   */
  state?: IntentState;

  /**
   * @public
   * <p>Contains information about whether fulfillment of the intent has
   *          been confirmed.</p>
   */
  confirmationState?: ConfirmationState;
}

/**
 * @public
 * <p>An intent that Amazon Lex V2 determined might satisfy the user's utterance.
 *          The intents are ordered by the confidence score. </p>
 */
export interface Interpretation {
  /**
   * @public
   * <p>Determines the threshold where Amazon Lex V2 will insert the
   *             <code>AMAZON.FallbackIntent</code>,
   *             <code>AMAZON.KendraSearchIntent</code>, or both when returning
   *          alternative intents in a response. <code>AMAZON.FallbackIntent</code>
   *          and <code>AMAZON.KendraSearchIntent</code> are only inserted if they
   *          are configured for the bot.</p>
   */
  nluConfidence?: ConfidenceScore;

  /**
   * @public
   * <p>The sentiment expressed in an utterance. </p>
   *          <p>When the bot is configured to send utterances to Amazon Comprehend
   *          for sentiment analysis, this field contains the result of the
   *          analysis.</p>
   */
  sentimentResponse?: SentimentResponse;

  /**
   * @public
   * <p>A list of intents that might satisfy the user's utterance. The
   *          intents are ordered by the confidence score.</p>
   */
  intent?: Intent;
}

/**
 * @public
 * <p>The state of the user's session with Amazon Lex V2.</p>
 */
export interface SessionState {
  /**
   * @public
   * <p>The next step that Amazon Lex V2 should take in the conversation with a
   *          user.</p>
   */
  dialogAction?: DialogAction;

  /**
   * @public
   * <p>The active intent that Amazon Lex V2 is processing.</p>
   */
  intent?: Intent;

  /**
   * @public
   * <p>One or more contexts that indicate to Amazon Lex V2 the context of a
   *          request. When a context is active, Amazon Lex V2 considers intents with the
   *          matching context as a trigger as the next intent in a session.</p>
   */
  activeContexts?: ActiveContext[];

  /**
   * @public
   * <p>Map of key/value pairs representing session-specific context
   *          information. It contains application information passed between Amazon Lex V2
   *          and a client application.</p>
   */
  sessionAttributes?: Record<string, string>;

  /**
   * @public
   * <p>A unique identifier for a specific request.</p>
   */
  originatingRequestId?: string;

  /**
   * @public
   * <p>Hints for phrases that a customer is likely to use for a slot. Amazon Lex V2
   *          uses the hints to help determine the correct value of a slot.</p>
   */
  runtimeHints?: RuntimeHints;
}

/**
 * @public
 * <p>The initial event sent from the application to Amazon Lex V2 to configure
 *          the conversation, including session and request attributes and the
 *          response content type.</p>
 */
export interface ConfigurationEvent {
  /**
   * @public
   * <p>Request-specific information passed between the client application
   *          and Amazon Lex V2.</p>
   *          <p>The namespace <code>x-amz-lex:</code> is reserved for special
   *          attributes. Don't create any request attributes for prefix
   *             <code>x-amz-lex:</code>.</p>
   */
  requestAttributes?: Record<string, string>;

  /**
   * @public
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
   */
  responseContentType: string | undefined;

  /**
   * @public
   * <p>The state of the user's session with Amazon Lex V2.</p>
   */
  sessionState?: SessionState;

  /**
   * @public
   * <p>A list of messages to send to the user.</p>
   *          <p>If you set the <code>welcomeMessage</code> field, you must also set
   *          the <a href="https://docs.aws.amazon.com/lexv2/latest/dg/API_runtime_DialogAction.html">
   *                <code>DialogAction</code>
   *             </a> structure's <a href="https://docs.aws.amazon.com/lexv2/latest/dg/API_runtime_DialogAction.html#lexv2-Type-runtime_DialogAction-type">
   *                <code>type</code>
   *             </a> field.</p>
   */
  welcomeMessages?: Message[];

  /**
   * @public
   * <p>Determines whether Amazon Lex V2 should send audio responses to the client
   *          application.
   *       </p>
   *          <p>Set this field to false when the client is operating in a playback
   *          mode where audio responses are played to the user. If the client isn't
   *          operating in playback mode, such as a text chat application, set this
   *          to true so that Amazon Lex V2 doesn't wait for the prompt to finish playing on
   *          the client.</p>
   */
  disablePlayback?: boolean;

  /**
   * @public
   * <p>A unique identifier that your application assigns to the event. You
   *          can use this to identify events in logs.</p>
   */
  eventId?: string;

  /**
   * @public
   * <p>A timestamp set by the client of the date and time that the event
   *          was sent to Amazon Lex V2.</p>
   */
  clientTimestampMillis?: number;
}

/**
 * @public
 */
export interface PutSessionRequest {
  /**
   * @public
   * <p>The identifier of the bot that receives the session data.</p>
   */
  botId: string | undefined;

  /**
   * @public
   * <p>The alias identifier of the bot that receives the session
   *          data.</p>
   */
  botAliasId: string | undefined;

  /**
   * @public
   * <p>The locale where the session is in use.</p>
   */
  localeId: string | undefined;

  /**
   * @public
   * <p>The identifier of the session that receives the session data.</p>
   */
  sessionId: string | undefined;

  /**
   * @public
   * <p>A list of messages to send to the user. Messages are sent in the
   *          order that they are defined in the list.</p>
   */
  messages?: Message[];

  /**
   * @public
   * <p>Sets the state of the session with the user. You can use this to set
   *          the current intent, attributes, context, and dialog action. Use the
   *          dialog action to determine the next step that Amazon Lex V2 should use in the
   *          conversation with the user.</p>
   */
  sessionState: SessionState | undefined;

  /**
   * @public
   * <p>Request-specific information passed between Amazon Lex V2 and the client
   *          application.</p>
   *          <p>The namespace <code>x-amz-lex:</code> is reserved for special
   *          attributes. Don't create any request attributes with the prefix
   *             <code>x-amz-lex:</code>.</p>
   */
  requestAttributes?: Record<string, string>;

  /**
   * @public
   * <p>The message that Amazon Lex V2 returns in the response can be either text or
   *          speech depending on the value of this parameter. </p>
   *          <ul>
   *             <li>
   *                <p>If the value is <code>text/plain; charset=utf-8</code>, Amazon Lex V2
   *                returns text in the response.</p>
   *             </li>
   *          </ul>
   */
  responseContentType?: string;
}

/**
 * @public
 */
export interface RecognizeTextRequest {
  /**
   * @public
   * <p>The identifier of the bot that processes the request.</p>
   */
  botId: string | undefined;

  /**
   * @public
   * <p>The alias identifier in use for the bot that processes the
   *          request.</p>
   */
  botAliasId: string | undefined;

  /**
   * @public
   * <p>The locale where the session is in use.</p>
   */
  localeId: string | undefined;

  /**
   * @public
   * <p>The identifier of the user session that is having the
   *          conversation.</p>
   */
  sessionId: string | undefined;

  /**
   * @public
   * <p>The text that the user entered. Amazon Lex V2 interprets this text.</p>
   */
  text: string | undefined;

  /**
   * @public
   * <p>The current state of the dialog between the user and the bot.</p>
   */
  sessionState?: SessionState;

  /**
   * @public
   * <p>Request-specific information passed between the client application
   *          and Amazon Lex V2 </p>
   *          <p>The namespace <code>x-amz-lex:</code> is reserved for special
   *          attributes. Don't create any request attributes with the prefix
   *             <code>x-amz-lex:</code>.</p>
   */
  requestAttributes?: Record<string, string>;
}

/**
 * @public
 * <p>Represents a stream of events between your application and
 *          Amazon Lex V2.</p>
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
   * @public
   * <p>Configuration information sent from your client application to
   *          Amazon Lex V2</p>
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
   * @public
   * <p>Speech audio sent from your client application to Amazon Lex V2. Audio
   *          starts accumulating when Amazon Lex V2 identifies a voice and continues until a
   *          natural pause in the speech is found before processing.</p>
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
   * @public
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
   * @public
   * <p>Text sent from your client application to Amazon Lex V2. Each
   *             <code>TextInputEvent</code> is processed individually.</p>
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
   * @public
   * <p>Event sent from the client application to Amazon Lex V2 to indicate that it
   *          has finished playing audio and that Amazon Lex V2 should start listening for
   *          user input.</p>
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
   * @public
   * <p>Event sent from the client application to indicate to Amazon Lex V2 that the
   *          conversation is over.</p>
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

  export interface Visitor<T> {
    ConfigurationEvent: (value: ConfigurationEvent) => T;
    AudioInputEvent: (value: AudioInputEvent) => T;
    DTMFInputEvent: (value: DTMFInputEvent) => T;
    TextInputEvent: (value: TextInputEvent) => T;
    PlaybackCompletionEvent: (value: PlaybackCompletionEvent) => T;
    DisconnectionEvent: (value: DisconnectionEvent) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: StartConversationRequestEventStream, visitor: Visitor<T>): T => {
    if (value.ConfigurationEvent !== undefined) return visitor.ConfigurationEvent(value.ConfigurationEvent);
    if (value.AudioInputEvent !== undefined) return visitor.AudioInputEvent(value.AudioInputEvent);
    if (value.DTMFInputEvent !== undefined) return visitor.DTMFInputEvent(value.DTMFInputEvent);
    if (value.TextInputEvent !== undefined) return visitor.TextInputEvent(value.TextInputEvent);
    if (value.PlaybackCompletionEvent !== undefined)
      return visitor.PlaybackCompletionEvent(value.PlaybackCompletionEvent);
    if (value.DisconnectionEvent !== undefined) return visitor.DisconnectionEvent(value.DisconnectionEvent);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface StartConversationRequest {
  /**
   * @public
   * <p>The identifier of the bot to process the request.</p>
   */
  botId: string | undefined;

  /**
   * @public
   * <p>The alias identifier in use for the bot that processes the
   *          request.</p>
   */
  botAliasId: string | undefined;

  /**
   * @public
   * <p>The locale where the session is in use.</p>
   */
  localeId: string | undefined;

  /**
   * @public
   * <p>The identifier of the user session that is having the
   *          conversation.</p>
   */
  sessionId: string | undefined;

  /**
   * @public
   * <p>The conversation type that you are using the Amazon Lex V2. If the
   *          conversation mode is <code>AUDIO</code> you can send both audio and
   *          DTMF information. If the mode is <code>TEXT</code> you can only send
   *          text.</p>
   */
  conversationMode?: ConversationMode;

  /**
   * @public
   * <p>Represents the stream of events to Amazon Lex V2 from your application. The
   *          events are encoded as HTTP/2 data frames.</p>
   */
  requestEventStream: AsyncIterable<StartConversationRequestEventStream> | undefined;
}

/**
 * @public
 */
export interface GetSessionResponse {
  /**
   * @public
   * <p>The identifier of the returned session.</p>
   */
  sessionId?: string;

  /**
   * @public
   * <p>A list of messages that were last sent to the user. The messages are
   *          ordered based on the order that your returned the messages from your
   *          Lambda function or the order that messages are defined in the bot.
   *       </p>
   */
  messages?: Message[];

  /**
   * @public
   * <p>A list of intents that Amazon Lex V2 determined might satisfy the user's
   *          utterance. </p>
   *          <p>Each interpretation includes the intent, a score that indicates how
   *          confident Amazon Lex V2 is that the interpretation is the correct one, and an
   *          optional sentiment response that indicates the sentiment expressed in
   *          the utterance.</p>
   */
  interpretations?: Interpretation[];

  /**
   * @public
   * <p>Represents the current state of the dialog between the user and the
   *          bot.</p>
   *          <p>You can use this to determine the progress of the conversation and
   *          what the next action might be.</p>
   */
  sessionState?: SessionState;
}

/**
 * @public
 * <p>Contains the current state of the conversation between the client
 *          application and Amazon Lex V2.</p>
 */
export interface IntentResultEvent {
  /**
   * @public
   * <p>Indicates whether the input to the operation was text or
   *          speech.</p>
   */
  inputMode?: InputMode;

  /**
   * @public
   * <p>A list of intents that Amazon Lex V2 determined might satisfy the user's
   *          utterance.</p>
   *          <p>Each interpretation includes the intent, a score that indicates how
   *          confident Amazon Lex V2 is that the interpretation is the correct one, and an
   *          optional sentiment response that indicates the sentiment expressed in
   *          the utterance.</p>
   */
  interpretations?: Interpretation[];

  /**
   * @public
   * <p>The state of the user's session with Amazon Lex V2.</p>
   */
  sessionState?: SessionState;

  /**
   * @public
   * <p>The attributes sent in the request.</p>
   */
  requestAttributes?: Record<string, string>;

  /**
   * @public
   * <p>The identifier of the session in use.</p>
   */
  sessionId?: string;

  /**
   * @public
   * <p>A unique identifier of the event sent by Amazon Lex V2. The identifier is in
   *          the form <code>RESPONSE-N</code>, where N is a number starting with one
   *          and incremented for each event sent by Amazon Lex V2 in the current
   *          session.</p>
   */
  eventId?: string;

  /**
   * @public
   * <p>The bot member that is processing the intent.</p>
   */
  recognizedBotMember?: RecognizedBotMember;
}

/**
 * @public
 */
export interface RecognizeTextResponse {
  /**
   * @public
   * <p>A list of messages last sent to the user. The messages are ordered
   *          based on the order that you returned the messages from your Lambda
   *          function or the order that the messages are defined in the bot.</p>
   */
  messages?: Message[];

  /**
   * @public
   * <p>Represents the current state of the dialog between the user and the
   *          bot. </p>
   *          <p>Use this to determine the progress of the conversation and what the
   *          next action may be.</p>
   */
  sessionState?: SessionState;

  /**
   * @public
   * <p>A list of intents that Amazon Lex V2 determined might satisfy the user's
   *          utterance. </p>
   *          <p>Each interpretation includes the intent, a score that indicates now
   *          confident Amazon Lex V2 is that the interpretation is the correct one, and an
   *          optional sentiment response that indicates the sentiment expressed in
   *          the utterance.</p>
   */
  interpretations?: Interpretation[];

  /**
   * @public
   * <p>The attributes sent in the request.</p>
   */
  requestAttributes?: Record<string, string>;

  /**
   * @public
   * <p>The identifier of the session in use.</p>
   */
  sessionId?: string;

  /**
   * @public
   * <p>The bot member that recognized the text.</p>
   */
  recognizedBotMember?: RecognizedBotMember;
}

/**
 * @public
 * <p>Represents a stream of events between Amazon Lex V2 and your
 *          application.</p>
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
   * @public
   * <p>Event sent from Amazon Lex V2 to indicate to the client application should
   *          stop playback of audio. For example, if the client is playing a prompt
   *          that asks for the user's telephone number, the user might start to say
   *          the phone number before the prompt is complete. Amazon Lex V2 sends this event
   *          to the client application to indicate that the user is responding and
   *          that Amazon Lex V2 is processing their input.</p>
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
   * @public
   * <p>Event sent from Amazon Lex V2 to your client application that contains a
   *          transcript of voice audio. </p>
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
   * @public
   * <p>Event sent from Amazon Lex V2 to the client application containing the
   *          current state of the conversation between the user and Amazon Lex V2.</p>
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
   * @public
   * <p>The event sent from Amazon Lex V2 to your application with text to present
   *          to the user.</p>
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
   * @public
   * <p>An event sent from Amazon Lex V2 to your client application containing audio
   *          to play to the user. </p>
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
   * @public
   * <p>Event that Amazon Lex V2 sends to indicate that the stream is still open
   *          between the client application and Amazon Lex V2 </p>
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
   * @public
   * <p>Exception thrown when the credentials passed with the request are
   *          invalid or expired. Also thrown when the credentials in the request do
   *          not have permission to access the <code>StartConversation</code>
   *          operation.</p>
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
   * @public
   * <p>Exception thrown if one of the input parameters points to a resource
   *          that does not exist. For example, if the bot ID specified does not
   *          exist.</p>
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
   * @public
   * <p>Exception thrown when one or more parameters could not be validated.
   *          The <code>message</code> contains the name of the field that isn't
   *          valid.</p>
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
   * @public
   * <p>Exception thrown when your application exceeds the maximum number of
   *          concurrent requests. </p>
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
   * @public
   * <p>An error occurred with Amazon Lex V2.</p>
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
   * @public
   * <p>Exception thrown when two clients are using the same AWS account,
   *          Amazon Lex V2 bot, and session ID.</p>
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
   * @public
   * <p></p>
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
   * @public
   * <p></p>
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

  export const visit = <T>(value: StartConversationResponseEventStream, visitor: Visitor<T>): T => {
    if (value.PlaybackInterruptionEvent !== undefined)
      return visitor.PlaybackInterruptionEvent(value.PlaybackInterruptionEvent);
    if (value.TranscriptEvent !== undefined) return visitor.TranscriptEvent(value.TranscriptEvent);
    if (value.IntentResultEvent !== undefined) return visitor.IntentResultEvent(value.IntentResultEvent);
    if (value.TextResponseEvent !== undefined) return visitor.TextResponseEvent(value.TextResponseEvent);
    if (value.AudioResponseEvent !== undefined) return visitor.AudioResponseEvent(value.AudioResponseEvent);
    if (value.HeartbeatEvent !== undefined) return visitor.HeartbeatEvent(value.HeartbeatEvent);
    if (value.AccessDeniedException !== undefined) return visitor.AccessDeniedException(value.AccessDeniedException);
    if (value.ResourceNotFoundException !== undefined)
      return visitor.ResourceNotFoundException(value.ResourceNotFoundException);
    if (value.ValidationException !== undefined) return visitor.ValidationException(value.ValidationException);
    if (value.ThrottlingException !== undefined) return visitor.ThrottlingException(value.ThrottlingException);
    if (value.InternalServerException !== undefined)
      return visitor.InternalServerException(value.InternalServerException);
    if (value.ConflictException !== undefined) return visitor.ConflictException(value.ConflictException);
    if (value.DependencyFailedException !== undefined)
      return visitor.DependencyFailedException(value.DependencyFailedException);
    if (value.BadGatewayException !== undefined) return visitor.BadGatewayException(value.BadGatewayException);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface StartConversationResponse {
  /**
   * @public
   * <p>Represents the stream of events from Amazon Lex V2 to your application. The
   *          events are encoded as HTTP/2 data frames.</p>
   */
  responseEventStream?: AsyncIterable<StartConversationResponseEventStream>;
}

/**
 * @internal
 */
export const ActiveContextFilterSensitiveLog = (obj: ActiveContext): any => ({
  ...obj,
  ...(obj.contextAttributes && { contextAttributes: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const MessageFilterSensitiveLog = (obj: Message): any => ({
  ...obj,
  ...(obj.content && { content: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const PutSessionResponseFilterSensitiveLog = (obj: PutSessionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RecognizeUtteranceRequestFilterSensitiveLog = (obj: RecognizeUtteranceRequest): any => ({
  ...obj,
  ...(obj.sessionState && { sessionState: SENSITIVE_STRING }),
  ...(obj.requestAttributes && { requestAttributes: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RecognizeUtteranceResponseFilterSensitiveLog = (obj: RecognizeUtteranceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DTMFInputEventFilterSensitiveLog = (obj: DTMFInputEvent): any => ({
  ...obj,
  ...(obj.inputCharacter && { inputCharacter: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const TextInputEventFilterSensitiveLog = (obj: TextInputEvent): any => ({
  ...obj,
  ...(obj.text && { text: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const TextResponseEventFilterSensitiveLog = (obj: TextResponseEvent): any => ({
  ...obj,
  ...(obj.messages && { messages: obj.messages.map((item) => MessageFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const SessionStateFilterSensitiveLog = (obj: SessionState): any => ({
  ...obj,
  ...(obj.activeContexts && {
    activeContexts: obj.activeContexts.map((item) => ActiveContextFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const ConfigurationEventFilterSensitiveLog = (obj: ConfigurationEvent): any => ({
  ...obj,
  ...(obj.welcomeMessages && { welcomeMessages: obj.welcomeMessages.map((item) => MessageFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const PutSessionRequestFilterSensitiveLog = (obj: PutSessionRequest): any => ({
  ...obj,
  ...(obj.messages && { messages: obj.messages.map((item) => MessageFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const RecognizeTextRequestFilterSensitiveLog = (obj: RecognizeTextRequest): any => ({
  ...obj,
  ...(obj.text && { text: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const StartConversationRequestEventStreamFilterSensitiveLog = (
  obj: StartConversationRequestEventStream
): any => {
  if (obj.ConfigurationEvent !== undefined)
    return { ConfigurationEvent: ConfigurationEventFilterSensitiveLog(obj.ConfigurationEvent) };
  if (obj.AudioInputEvent !== undefined) return { AudioInputEvent: obj.AudioInputEvent };
  if (obj.DTMFInputEvent !== undefined) return { DTMFInputEvent: DTMFInputEventFilterSensitiveLog(obj.DTMFInputEvent) };
  if (obj.TextInputEvent !== undefined) return { TextInputEvent: TextInputEventFilterSensitiveLog(obj.TextInputEvent) };
  if (obj.PlaybackCompletionEvent !== undefined) return { PlaybackCompletionEvent: obj.PlaybackCompletionEvent };
  if (obj.DisconnectionEvent !== undefined) return { DisconnectionEvent: obj.DisconnectionEvent };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const StartConversationRequestFilterSensitiveLog = (obj: StartConversationRequest): any => ({
  ...obj,
  ...(obj.requestEventStream && { requestEventStream: "STREAMING_CONTENT" }),
});

/**
 * @internal
 */
export const GetSessionResponseFilterSensitiveLog = (obj: GetSessionResponse): any => ({
  ...obj,
  ...(obj.messages && { messages: obj.messages.map((item) => MessageFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const IntentResultEventFilterSensitiveLog = (obj: IntentResultEvent): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RecognizeTextResponseFilterSensitiveLog = (obj: RecognizeTextResponse): any => ({
  ...obj,
  ...(obj.messages && { messages: obj.messages.map((item) => MessageFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const StartConversationResponseEventStreamFilterSensitiveLog = (
  obj: StartConversationResponseEventStream
): any => {
  if (obj.PlaybackInterruptionEvent !== undefined) return { PlaybackInterruptionEvent: obj.PlaybackInterruptionEvent };
  if (obj.TranscriptEvent !== undefined) return { TranscriptEvent: obj.TranscriptEvent };
  if (obj.IntentResultEvent !== undefined)
    return { IntentResultEvent: IntentResultEventFilterSensitiveLog(obj.IntentResultEvent) };
  if (obj.TextResponseEvent !== undefined)
    return { TextResponseEvent: TextResponseEventFilterSensitiveLog(obj.TextResponseEvent) };
  if (obj.AudioResponseEvent !== undefined) return { AudioResponseEvent: obj.AudioResponseEvent };
  if (obj.HeartbeatEvent !== undefined) return { HeartbeatEvent: obj.HeartbeatEvent };
  if (obj.AccessDeniedException !== undefined) return { AccessDeniedException: obj.AccessDeniedException };
  if (obj.ResourceNotFoundException !== undefined) return { ResourceNotFoundException: obj.ResourceNotFoundException };
  if (obj.ValidationException !== undefined) return { ValidationException: obj.ValidationException };
  if (obj.ThrottlingException !== undefined) return { ThrottlingException: obj.ThrottlingException };
  if (obj.InternalServerException !== undefined) return { InternalServerException: obj.InternalServerException };
  if (obj.ConflictException !== undefined) return { ConflictException: obj.ConflictException };
  if (obj.DependencyFailedException !== undefined) return { DependencyFailedException: obj.DependencyFailedException };
  if (obj.BadGatewayException !== undefined) return { BadGatewayException: obj.BadGatewayException };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const StartConversationResponseFilterSensitiveLog = (obj: StartConversationResponse): any => ({
  ...obj,
  ...(obj.responseEventStream && { responseEventStream: "STREAMING_CONTENT" }),
});
