import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer, SmithyException as __SmithyException } from "@aws-sdk/types";
import { Readable } from "stream";

/**
 * <p></p>
 */
export interface AccessDeniedException extends __SmithyException, $MetadataBearer {
  name: "AccessDeniedException";
  $fault: "client";
  message: string | undefined;
}

export namespace AccessDeniedException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AccessDeniedException): any => ({
    ...obj,
  });
}

/**
 * <p>The time that a context is active. You can specify the time to live
 *          in seconds or in conversation turns.</p>
 */
export interface ActiveContextTimeToLive {
  /**
   * <p>The number of seconds that the context is active. You can specify
   *          between 5 and 86400 seconds (24 hours).</p>
   */
  timeToLiveInSeconds: number | undefined;

  /**
   * <p>The number of turns that the context is active. You can specify up
   *          to 20 turns. Each request and response from the bot is a turn.</p>
   */
  turnsToLive: number | undefined;
}

export namespace ActiveContextTimeToLive {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ActiveContextTimeToLive): any => ({
    ...obj,
  });
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
 */
export interface ActiveContext {
  /**
   * <p>The name of the context.</p>
   */
  name: string | undefined;

  /**
   * <p>Indicates the number of turns or seconds that the context is active.
   *          Once the time to live expires, the context is no longer returned in a
   *          response.</p>
   */
  timeToLive: ActiveContextTimeToLive | undefined;

  /**
   * <p>A lis tof contexts active for the request. A context can be
   *          activated when a previous intent is fulfilled, or by including the
   *          context in the request.</p>
   *          <p>If you don't specify a list of contexts, Amazon Lex will use the
   *          current list of contexts for the session. If you specify an empty list,
   *          all contexts for the session are cleared. </p>
   */
  contextAttributes: { [key: string]: string } | undefined;
}

export namespace ActiveContext {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ActiveContext): any => ({
    ...obj,
    ...(obj.contextAttributes && { contextAttributes: SENSITIVE_STRING }),
  });
}

/**
 * <p>Represents a chunk of audio sent from the client application to
 *          Amazon Lex V2. The audio is all or part of an utterance from the user.</p>
 *          <p>Amazon Lex V2 accumulates audio chunks until it recognizes a natural pause
 *          in speech before processing the input.</p>
 */
export interface AudioInputEvent {
  /**
   * <p>An encoded stream of audio.</p>
   */
  audioChunk?: Uint8Array;

  /**
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
   * <p>A unique identifier that your application assigns to the event. You
   *          can use this to identify events in logs.</p>
   */
  eventId?: string;

  /**
   * <p>A timestamp set by the client of the date and time that the event
   *          was sent to Amazon Lex V2.</p>
   */
  clientTimestampMillis?: number;
}

export namespace AudioInputEvent {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AudioInputEvent): any => ({
    ...obj,
  });
}

/**
 * <p>An event sent from Amazon Lex V2 to your client application containing audio
 *          to play to the user. </p>
 */
export interface AudioResponseEvent {
  /**
   * <p>A chunk of the audio to play. </p>
   */
  audioChunk?: Uint8Array;

  /**
   * <p>The encoding of the audio chunk. This is the same as the encoding
   *          configure in the <code>contentType</code> field of the
   *             <code>ConfigurationEvent</code>.</p>
   */
  contentType?: string;

  /**
   * <p>A unique identifier of the event sent by Amazon Lex V2. The identifier is in
   *          the form <code>RESPONSE-N</code>, where N is a number starting with one
   *          and incremented for each event sent by Amazon Lex V2 in the current
   *          session.</p>
   */
  eventId?: string;
}

export namespace AudioResponseEvent {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AudioResponseEvent): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface ConflictException extends __SmithyException, $MetadataBearer {
  name: "ConflictException";
  $fault: "client";
  message: string | undefined;
}

export namespace ConflictException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConflictException): any => ({
    ...obj,
  });
}

export interface DeleteSessionRequest {
  /**
   * <p>The identifier of the bot that contains the session data.</p>
   */
  botId: string | undefined;

  /**
   * <p>The alias identifier in use for the bot that contains the session
   *          data.</p>
   */
  botAliasId: string | undefined;

  /**
   * <p>The locale where the session is in use.</p>
   */
  localeId: string | undefined;

  /**
   * <p>The identifier of the session to delete.</p>
   */
  sessionId: string | undefined;
}

export namespace DeleteSessionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteSessionRequest): any => ({
    ...obj,
  });
}

export interface DeleteSessionResponse {
  /**
   * <p>The identifier of the bot that contained the session data.</p>
   */
  botId?: string;

  /**
   * <p>The alias identifier in use for the bot that contained the session
   *          data.</p>
   */
  botAliasId?: string;

  /**
   * <p>The locale where the session was used.</p>
   */
  localeId?: string;

  /**
   * <p>The identifier of the deleted session.</p>
   */
  sessionId?: string;
}

export namespace DeleteSessionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteSessionResponse): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface InternalServerException extends __SmithyException, $MetadataBearer {
  name: "InternalServerException";
  $fault: "server";
  message: string | undefined;
}

export namespace InternalServerException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InternalServerException): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  message: string | undefined;
}

export namespace ResourceNotFoundException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface ThrottlingException extends __SmithyException, $MetadataBearer {
  name: "ThrottlingException";
  $fault: "client";
  message: string | undefined;
}

export namespace ThrottlingException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ThrottlingException): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface ValidationException extends __SmithyException, $MetadataBearer {
  name: "ValidationException";
  $fault: "client";
  message: string | undefined;
}

export namespace ValidationException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ValidationException): any => ({
    ...obj,
  });
}

export interface GetSessionRequest {
  /**
   * <p>The identifier of the bot that contains the session data.</p>
   */
  botId: string | undefined;

  /**
   * <p>The alias identifier in use for the bot that contains the session
   *          data.</p>
   */
  botAliasId: string | undefined;

  /**
   * <p>The locale where the session is in use.</p>
   */
  localeId: string | undefined;

  /**
   * <p>The identifier of the session to return.</p>
   */
  sessionId: string | undefined;
}

export namespace GetSessionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetSessionRequest): any => ({
    ...obj,
  });
}

export enum ConfirmationState {
  CONFIRMED = "Confirmed",
  DENIED = "Denied",
  NONE = "None",
}

export enum Shape {
  LIST = "List",
  SCALAR = "Scalar",
}

/**
 * <p>The value of a slot.</p>
 */
export interface Value {
  /**
   * <p>The text of the utterance from the user that was entered for the
   *          slot.</p>
   */
  originalValue?: string;

  /**
   * <p>The value that Amazon Lex V2 determines for the slot. The actual value
   *          depends on the setting of the value selection strategy for the bot. You
   *          can choose to use the value entered by the user, or you can have Amazon Lex V2
   *          choose the first value in the <code>resolvedValues</code> list.</p>
   */
  interpretedValue: string | undefined;

  /**
   * <p>A list of additional values that have been recognized for the
   *          slot.</p>
   */
  resolvedValues?: string[];
}

export namespace Value {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Value): any => ({
    ...obj,
  });
}

export enum IntentState {
  FAILED = "Failed",
  FULFILLED = "Fulfilled",
  IN_PROGRESS = "InProgress",
  READY_FOR_FULFILLMENT = "ReadyForFulfillment",
  WAITING = "Waiting",
}

/**
 * <p>Provides a score that indicates the confidence that Amazon Lex V2 has that
 *          an intent is the one that satisfies the user's intent.</p>
 */
export interface ConfidenceScore {
  /**
   * <p>A score that indicates how confident Amazon Lex V2 is that an intent
   *          satisfies the user's intent. Ranges between 0.00 and 1.00. Higher
   *          scores indicate higher confidence.</p>
   */
  score?: number;
}

export namespace ConfidenceScore {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConfidenceScore): any => ({
    ...obj,
  });
}

export enum SentimentType {
  MIXED = "MIXED",
  NEGATIVE = "NEGATIVE",
  NEUTRAL = "NEUTRAL",
  POSITIVE = "POSITIVE",
}

/**
 * <p>The individual sentiment responses for the utterance.</p>
 */
export interface SentimentScore {
  /**
   * <p>The level of confidence that Amazon Comprehend has in the accuracy
   *          of its detection of the <code>POSITIVE</code> sentiment.</p>
   */
  positive?: number;

  /**
   * <p>The level of confidence that Amazon Comprehend has in the accuracy
   *          of its detection of the <code>NEGATIVE</code> sentiment.</p>
   */
  negative?: number;

  /**
   * <p>The level of confidence that Amazon Comprehend has in the accuracy
   *          of its detection of the <code>NEUTRAL</code> sentiment.</p>
   */
  neutral?: number;

  /**
   * <p>The level of confidence that Amazon Comprehend has in the accuracy
   *          of its detection of the <code>MIXED</code> sentiment.</p>
   */
  mixed?: number;
}

export namespace SentimentScore {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SentimentScore): any => ({
    ...obj,
  });
}

/**
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
   * <p>The overall sentiment expressed in the user's response. This is the
   *          sentiment most likely expressed by the user based on the analysis by
   *          Amazon Comprehend.</p>
   */
  sentiment?: SentimentType | string;

  /**
   * <p>The individual sentiment responses for the utterance.</p>
   */
  sentimentScore?: SentimentScore;
}

export namespace SentimentResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SentimentResponse): any => ({
    ...obj,
  });
}

export enum MessageContentType {
  CUSTOM_PAYLOAD = "CustomPayload",
  IMAGE_RESPONSE_CARD = "ImageResponseCard",
  PLAIN_TEXT = "PlainText",
  SSML = "SSML",
}

/**
 * <p>A button that appears on a response card show to the user.</p>
 */
export interface Button {
  /**
   * <p>The text that is displayed on the button.</p>
   */
  text: string | undefined;

  /**
   * <p>The value returned to Amazon Lex V2 when a user chooses the button.</p>
   */
  value: string | undefined;
}

export namespace Button {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Button): any => ({
    ...obj,
  });
}

/**
 * <p>A card that is shown to the user by a messaging platform. You define
 *          the contents of the card, the card is displayed by the platform. </p>
 *          <p>When you use a response card, the response from the user is
 *          constrained to the text associated with a button on the card.</p>
 */
export interface ImageResponseCard {
  /**
   * <p>The title to display on the response card. The format of the title
   *          is determined by the platform displaying the response card.</p>
   */
  title: string | undefined;

  /**
   * <p>The subtitle to display on the response card. The format of the
   *          subtitle is determined by the platform displaying the response
   *          card.</p>
   */
  subtitle?: string;

  /**
   * <p>The URL of an image to display on the response card. The image URL
   *          must be publicly available so that the platform displaying the response
   *          card has access to the image.</p>
   */
  imageUrl?: string;

  /**
   * <p>A list of buttons that should be displayed on the response card. The
   *          arrangement of the buttons is determined by the platform that displays
   *          the button.</p>
   */
  buttons?: Button[];
}

export namespace ImageResponseCard {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ImageResponseCard): any => ({
    ...obj,
  });
}

/**
 * <p>Container for text that is returned to the customer..</p>
 */
export interface Message {
  /**
   * <p>The text of the message.</p>
   */
  content?: string;

  /**
   * <p>Indicates the type of response.</p>
   */
  contentType: MessageContentType | string | undefined;

  /**
   * <p>A card that is shown to the user by a messaging platform. You define
   *          the contents of the card, the card is displayed by the platform. </p>
   *          <p>When you use a response card, the response from the user is
   *          constrained to the text associated with a button on the card.</p>
   */
  imageResponseCard?: ImageResponseCard;
}

export namespace Message {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Message): any => ({
    ...obj,
    ...(obj.content && { content: SENSITIVE_STRING }),
  });
}

export enum DialogActionType {
  CLOSE = "Close",
  CONFIRM_INTENT = "ConfirmIntent",
  DELEGATE = "Delegate",
  ELICIT_INTENT = "ElicitIntent",
  ELICIT_SLOT = "ElicitSlot",
}

/**
 * <p>The next action that Amazon Lex V2 should take.</p>
 */
export interface DialogAction {
  /**
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
   *                   <code>ElicitSlot</code> - The next action is to elicit a slot
   *                value from the user.</p>
   *             </li>
   *          </ul>
   */
  type: DialogActionType | string | undefined;

  /**
   * <p>The name of the slot that should be elicited from the user.</p>
   */
  slotToElicit?: string;
}

export namespace DialogAction {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DialogAction): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface BadGatewayException extends __SmithyException, $MetadataBearer {
  name: "BadGatewayException";
  $fault: "server";
  message: string | undefined;
}

export namespace BadGatewayException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BadGatewayException): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DependencyFailedException extends __SmithyException, $MetadataBearer {
  name: "DependencyFailedException";
  $fault: "client";
  message: string | undefined;
}

export namespace DependencyFailedException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DependencyFailedException): any => ({
    ...obj,
  });
}

export interface PutSessionResponse {
  /**
   * <p>The type of response. Same as the type specified in the
   *             <code>responseContentType</code> field in the request.</p>
   */
  contentType?: string;

  /**
   * <p>A list of messages that were last sent to the user. The messages are
   *          ordered based on how you return the messages from you Lambda function
   *          or the order that the messages are defined in the bot.</p>
   */
  messages?: string;

  /**
   * <p>Represents the current state of the dialog between the user and the
   *          bot.</p>
   *          <p>Use this to determine the progress of the conversation and what the
   *          next action may be.</p>
   */
  sessionState?: string;

  /**
   * <p>Request-specific information passed between the client application
   *          and Amazon Lex V2. These are the same as the <code>requestAttribute</code>
   *          parameter in the call to the <code>PutSession</code> operation.</p>
   */
  requestAttributes?: string;

  /**
   * <p>The identifier of the session that received the data.</p>
   */
  sessionId?: string;

  /**
   * <p>If the requested content type was audio, the audio version of the
   *          message to convey to the user.</p>
   */
  audioStream?: Readable | ReadableStream | Blob;
}

export namespace PutSessionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutSessionResponse): any => ({
    ...obj,
  });
}

export interface RecognizeUtteranceRequest {
  /**
   * <p>The identifier of the bot that should receive the request.</p>
   */
  botId: string | undefined;

  /**
   * <p>The alias identifier in use for the bot that should receive the
   *          request.</p>
   */
  botAliasId: string | undefined;

  /**
   * <p>The locale where the session is in use.</p>
   */
  localeId: string | undefined;

  /**
   * <p>The identifier of the session in use.</p>
   */
  sessionId: string | undefined;

  /**
   * <p>Sets the state of the session with the user. You can use this to set
   *          the current intent, attributes, context, and dialog action. Use the
   *          dialog action to determine the next step that Amazon Lex V2 should use in the
   *          conversation with the user.</p>
   *          <p>The <code>sessionState</code> field must be compressed using gzip
   *          and then base64 encoded before sending to Amazon Lex V2.</p>
   */
  sessionState?: string;

  /**
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
   * <p>User input in PCM or Opus audio format or text format as described
   *          in the <code>requestContentType</code> parameter.</p>
   */
  inputStream?: Readable | ReadableStream | Blob;
}

export namespace RecognizeUtteranceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RecognizeUtteranceRequest): any => ({
    ...obj,
    ...(obj.sessionState && { sessionState: SENSITIVE_STRING }),
    ...(obj.requestAttributes && { requestAttributes: SENSITIVE_STRING }),
  });
}

export interface RecognizeUtteranceResponse {
  /**
   * <p>Indicates whether the input mode to the operation was text or
   *          speech.
   *       </p>
   */
  inputMode?: string;

  /**
   * <p>Content type as specified in the <code>responseContentType</code> in
   *          the request.</p>
   */
  contentType?: string;

  /**
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
   * <p>The attributes sent in the request.</p>
   *          <p>The <code>requestAttributes</code> field is compressed with gzip and
   *          then base64 encoded. Before you can use the contents of the field, you
   *          must decode and decompress the contents.</p>
   */
  requestAttributes?: string;

  /**
   * <p>The identifier of the session in use.</p>
   */
  sessionId?: string;

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
   */
  inputTranscript?: string;

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
   */
  audioStream?: Readable | ReadableStream | Blob;
}

export namespace RecognizeUtteranceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RecognizeUtteranceResponse): any => ({
    ...obj,
  });
}

export enum ConversationMode {
  AUDIO = "AUDIO",
  TEXT = "TEXT",
}

/**
 * <p>A notification from the client that it is disconnecting from Amazon Lex V2.
 *          Sending a <code>DisconnectionEvent</code> event is optional, but can
 *          help identify a conversation in logs.</p>
 */
export interface DisconnectionEvent {
  /**
   * <p>A unique identifier that your application assigns to the event. You
   *          can use this to identify events in logs.</p>
   */
  eventId?: string;

  /**
   * <p>A timestamp set by the client of the date and time that the event
   *          was sent to Amazon Lex V2.</p>
   */
  clientTimestampMillis?: number;
}

export namespace DisconnectionEvent {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisconnectionEvent): any => ({
    ...obj,
  });
}

/**
 * <p>A DTMF character sent from the client application. DTMF characters
 *          are typically sent from a phone keypad to represent numbers. For
 *          example, you can have Amazon Lex V2 process a credit card number input from a
 *          phone.</p>
 */
export interface DTMFInputEvent {
  /**
   * <p>The DTMF character that the user pressed. The allowed characters are
   *          A - D, 0 - 9, # and *.</p>
   */
  inputCharacter: string | undefined;

  /**
   * <p>A unique identifier that your application assigns to the event. You
   *          can use this to identify events in logs.</p>
   */
  eventId?: string;

  /**
   * <p>A timestamp set by the client of the date and time that the event
   *          was sent to Amazon Lex V2.</p>
   */
  clientTimestampMillis?: number;
}

export namespace DTMFInputEvent {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DTMFInputEvent): any => ({
    ...obj,
    ...(obj.inputCharacter && { inputCharacter: SENSITIVE_STRING }),
  });
}

/**
 * <p>Event sent from the client application to Amazon Lex V2 to indicate that
 *          playback of audio is complete and that Amazon Lex V2 should start processing
 *          the user's input.</p>
 */
export interface PlaybackCompletionEvent {
  /**
   * <p>A unique identifier that your application assigns to the event. You
   *          can use this to identify events in logs.</p>
   */
  eventId?: string;

  /**
   * <p>A timestamp set by the client of the date and time that the event
   *          was sent to Amazon Lex V2.</p>
   */
  clientTimestampMillis?: number;
}

export namespace PlaybackCompletionEvent {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PlaybackCompletionEvent): any => ({
    ...obj,
  });
}

/**
 * <p>The event sent from your client application to Amazon Lex V2 with text input
 *          from the user.</p>
 */
export interface TextInputEvent {
  /**
   * <p>The text from the user. Amazon Lex V2 processes this as a complete
   *          statement.</p>
   */
  text: string | undefined;

  /**
   * <p>A unique identifier that your application assigns to the event. You
   *          can use this to identify events in logs.</p>
   */
  eventId?: string;

  /**
   * <p>A timestamp set by the client of the date and time that the event
   *          was sent to Amazon Lex V2.</p>
   */
  clientTimestampMillis?: number;
}

export namespace TextInputEvent {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TextInputEvent): any => ({
    ...obj,
    ...(obj.text && { text: SENSITIVE_STRING }),
  });
}

/**
 * <p>Event that Amazon Lex V2 sends to indicate that the stream is still open
 *          between the client application and Amazon Lex V2 </p>
 */
export interface HeartbeatEvent {
  /**
   * <p>A unique identifier of the event sent by Amazon Lex V2. The identifier is in
   *          the form <code>RESPONSE-N</code>, where N is a number starting with one
   *          and incremented for each event sent by Amazon Lex V2 in the current
   *          session.</p>
   */
  eventId?: string;
}

export namespace HeartbeatEvent {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HeartbeatEvent): any => ({
    ...obj,
  });
}

export enum InputMode {
  DTMF = "DTMF",
  SPEECH = "Speech",
  TEXT = "Text",
}

export enum PlaybackInterruptionReason {
  DTMF_START_DETECTED = "DTMF_START_DETECTED",
  TEXT_DETECTED = "TEXT_DETECTED",
  VOICE_START_DETECTED = "VOICE_START_DETECTED",
}

/**
 * <p>Event sent from Amazon Lex V2 to indicate to the client application should
 *          stop playback of audio. For example, if the client is playing a prompt
 *          that asks for the user's telephone number, the user might start to say
 *          the phone number before the prompt is complete. Amazon Lex V2 sends this event
 *          to the client application to indicate that the user is responding and
 *          that Amazon Lex V2 is processing their input.</p>
 */
export interface PlaybackInterruptionEvent {
  /**
   * <p>Indicates the type of user input that Amazon Lex V2 detected.</p>
   */
  eventReason?: PlaybackInterruptionReason | string;

  /**
   * <p>The identifier of the event that contained the audio, DTMF, or text
   *          that caused the interruption.</p>
   */
  causedByEventId?: string;

  /**
   * <p>A unique identifier of the event sent by Amazon Lex V2. The identifier is in
   *          the form <code>RESPONSE-N</code>, where N is a number starting with one
   *          and incremented for each event sent by Amazon Lex V2 in the current
   *          session.</p>
   */
  eventId?: string;
}

export namespace PlaybackInterruptionEvent {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PlaybackInterruptionEvent): any => ({
    ...obj,
  });
}

/**
 * <p>The event sent from Amazon Lex V2 to your application with text to present
 *          to the user.</p>
 */
export interface TextResponseEvent {
  /**
   * <p>A list of messages to send to the user. Messages are ordered based
   *          on the order that you returned the messages from your Lambda function
   *          or the order that the messages are defined in the bot.</p>
   */
  messages?: Message[];

  /**
   * <p>A unique identifier of the event sent by Amazon Lex V2. The identifier is in
   *          the form <code>RESPONSE-N</code>, where N is a number starting with one
   *          and incremented for each event sent by Amazon Lex V2 in the current
   *          session.</p>
   */
  eventId?: string;
}

export namespace TextResponseEvent {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TextResponseEvent): any => ({
    ...obj,
    ...(obj.messages && { messages: obj.messages.map((item) => Message.filterSensitiveLog(item)) }),
  });
}

/**
 * <p>Event sent from Amazon Lex V2 to your client application that contains a
 *          transcript of voice audio. </p>
 */
export interface TranscriptEvent {
  /**
   * <p>The transcript of the voice audio from the user.</p>
   */
  transcript?: string;

  /**
   * <p>A unique identifier of the event sent by Amazon Lex V2. The identifier is in
   *          the form <code>RESPONSE-N</code>, where N is a number starting with one
   *          and incremented for each event sent by Amazon Lex V2 in the current
   *          session.</p>
   */
  eventId?: string;
}

export namespace TranscriptEvent {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TranscriptEvent): any => ({
    ...obj,
  });
}

/**
 * <p>A value that Amazon Lex V2 uses to fulfill an intent. </p>
 */
export interface Slot {
  /**
   * <p>The current value of the slot.</p>
   */
  value?: Value;

  /**
   * <p>When the <code>shape</code> value is <code>List</code>, it indicates
   *          that the <code>values</code> field contains a list of slot values. When
   *          the value is <code>Scalar</code>, it indicates that the
   *             <code>value</code> field contains a single value.</p>
   */
  shape?: Shape | string;

  /**
   * <p>A list of one or more values that the user provided for the slot.
   *       For example, if a for a slot that elicits pizza toppings, the values might
   *       be "pepperoni" and "pineapple." </p>
   */
  values?: Slot[];
}

export namespace Slot {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Slot): any => ({
    ...obj,
  });
}

/**
 * <p>The current intent that Amazon Lex V2 is attempting to fulfill.</p>
 */
export interface Intent {
  /**
   * <p>The name of the intent.</p>
   */
  name: string | undefined;

  /**
   * <p>A map of all of the slots for the intent. The name of the slot maps
   *          to the value of the slot. If a slot has not been filled, the value is
   *          null.</p>
   */
  slots?: { [key: string]: Slot };

  /**
   * <p>Contains fulfillment information for the intent. </p>
   */
  state?: IntentState | string;

  /**
   * <p>Contains information about whether fulfillment of the intent has
   *          been confirmed.</p>
   */
  confirmationState?: ConfirmationState | string;
}

export namespace Intent {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Intent): any => ({
    ...obj,
  });
}

/**
 * <p>An intent that Amazon Lex V2 determined might satisfy the user's utterance.
 *          The intents are ordered by the confidence score. </p>
 */
export interface Interpretation {
  /**
   * <p>Determines the threshold where Amazon Lex V2 will insert the
   *             <code>AMAZON.FallbackIntent</code>,
   *             <code>AMAZON.KendraSearchIntent</code>, or both when returning
   *          alternative intents in a response. <code>AMAZON.FallbackIntent</code>
   *          and <code>AMAZON.KendraSearchIntent</code> are only inserted if they
   *          are configured for the bot.</p>
   */
  nluConfidence?: ConfidenceScore;

  /**
   * <p>The sentiment expressed in an utterance. </p>
   *          <p>When the bot is configured to send utterances to Amazon Comprehend
   *          for sentiment analysis, this field contains the result of the
   *          analysis.</p>
   */
  sentimentResponse?: SentimentResponse;

  /**
   * <p>A list of intents that might satisfy the user's utterance. The
   *          intents are ordered by the confidence score.</p>
   */
  intent?: Intent;
}

export namespace Interpretation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Interpretation): any => ({
    ...obj,
  });
}

/**
 * <p>The state of the user's session with Amazon Lex V2.</p>
 */
export interface SessionState {
  /**
   * <p>The next step that Amazon Lex V2 should take in the conversation with a
   *          user.</p>
   */
  dialogAction?: DialogAction;

  /**
   * <p>The active intent that Amazon Lex V2 is processing.</p>
   */
  intent?: Intent;

  /**
   * <p>One or more contexts that indicate to Amazon Lex V2 the context of a
   *          request. When a context is active, Amazon Lex V2 considers intents with the
   *          matching context as a trigger as the next intent in a session.</p>
   */
  activeContexts?: ActiveContext[];

  /**
   * <p>Map of key/value pairs representing session-specific context
   *          information. It contains application information passed between Amazon Lex V2
   *          and a client application.</p>
   */
  sessionAttributes?: { [key: string]: string };

  /**
   * <p></p>
   */
  originatingRequestId?: string;
}

export namespace SessionState {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SessionState): any => ({
    ...obj,
    ...(obj.activeContexts && {
      activeContexts: obj.activeContexts.map((item) => ActiveContext.filterSensitiveLog(item)),
    }),
  });
}

/**
 * <p>The initial event sent from the application to Amazon Lex V2 to configure
 *          the conversation, including session and request attributes and the
 *          response content type.</p>
 */
export interface ConfigurationEvent {
  /**
   * <p>Request-specific information passed between the client application
   *          and Amazon Lex V2.</p>
   *          <p>The namespace <code>x-amz-lex:</code> is reserved for special
   *          attributes. Don't create any request attributes for prefix
   *             <code>x-amz-lex:</code>.</p>
   */
  requestAttributes?: { [key: string]: string };

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
   */
  responseContentType: string | undefined;

  /**
   * <p>The state of the user's session with Amazon Lex V2.</p>
   */
  sessionState?: SessionState;

  /**
   * <p>A list of messages to send to the user.</p>
   */
  welcomeMessages?: Message[];

  /**
   * <p>Determines whether Amazon Lex V2 should send audio responses to the client
   *          application. When this parameter if <code>false</code>, the client
   *          application needs to create responses for the user.
   *       </p>
   */
  disablePlayback?: boolean;

  /**
   * <p>A unique identifier that your application assigns to the event. You
   *          can use this to identify events in logs.</p>
   */
  eventId?: string;

  /**
   * <p>A timestamp set by the client of the date and time that the event
   *          was sent to Amazon Lex V2.</p>
   */
  clientTimestampMillis?: number;
}

export namespace ConfigurationEvent {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConfigurationEvent): any => ({
    ...obj,
    ...(obj.welcomeMessages && {
      welcomeMessages: obj.welcomeMessages.map((item) => Message.filterSensitiveLog(item)),
    }),
  });
}

export interface PutSessionRequest {
  /**
   * <p>The identifier of the bot that receives the session data.</p>
   */
  botId: string | undefined;

  /**
   * <p>The alias identifier of the bot that receives the session
   *          data.</p>
   */
  botAliasId: string | undefined;

  /**
   * <p>The locale where the session is in use.</p>
   */
  localeId: string | undefined;

  /**
   * <p>The identifier of the session that receives the session data.</p>
   */
  sessionId: string | undefined;

  /**
   * <p>A list of messages to send to the user. Messages are sent in the
   *          order that they are defined in the list.</p>
   */
  messages?: Message[];

  /**
   * <p>Sets the state of the session with the user. You can use this to set
   *          the current intent, attributes, context, and dialog action. Use the
   *          dialog action to determine the next step that Amazon Lex V2 should use in the
   *          conversation with the user.</p>
   */
  sessionState: SessionState | undefined;

  /**
   * <p>Request-specific information passed between Amazon Lex V2 and the client
   *          application.</p>
   *          <p>The namespace <code>x-amz-lex:</code> is reserved for special
   *          attributes. Don't create any request attributes with the prefix
   *             <code>x-amz-lex:</code>.</p>
   */
  requestAttributes?: { [key: string]: string };

  /**
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

export namespace PutSessionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutSessionRequest): any => ({
    ...obj,
    ...(obj.messages && { messages: obj.messages.map((item) => Message.filterSensitiveLog(item)) }),
  });
}

export interface RecognizeTextRequest {
  /**
   * <p>The identifier of the bot that processes the request.</p>
   */
  botId: string | undefined;

  /**
   * <p>The alias identifier in use for the bot that processes the
   *          request.</p>
   */
  botAliasId: string | undefined;

  /**
   * <p>The locale where the session is in use.</p>
   */
  localeId: string | undefined;

  /**
   * <p>The identifier of the user session that is having the
   *          conversation.</p>
   */
  sessionId: string | undefined;

  /**
   * <p>The text that the user entered. Amazon Lex V2 interprets this text.</p>
   */
  text: string | undefined;

  /**
   * <p>The current state of the dialog between the user and the bot.</p>
   */
  sessionState?: SessionState;

  /**
   * <p>Request-specific information passed between the client application
   *          and Amazon Lex V2 </p>
   *          <p>The namespace <code>x-amz-lex:</code> is reserved for special
   *          attributes. Don't create any request attributes with the prefix
   *             <code>x-amz-lex:</code>.</p>
   */
  requestAttributes?: { [key: string]: string };
}

export namespace RecognizeTextRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RecognizeTextRequest): any => ({
    ...obj,
    ...(obj.text && { text: SENSITIVE_STRING }),
  });
}

/**
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

export namespace StartConversationRequestEventStream {
  /**
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

  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartConversationRequestEventStream): any => {
    if (obj.ConfigurationEvent !== undefined)
      return { ConfigurationEvent: ConfigurationEvent.filterSensitiveLog(obj.ConfigurationEvent) };
    if (obj.AudioInputEvent !== undefined)
      return { AudioInputEvent: AudioInputEvent.filterSensitiveLog(obj.AudioInputEvent) };
    if (obj.DTMFInputEvent !== undefined)
      return { DTMFInputEvent: DTMFInputEvent.filterSensitiveLog(obj.DTMFInputEvent) };
    if (obj.TextInputEvent !== undefined)
      return { TextInputEvent: TextInputEvent.filterSensitiveLog(obj.TextInputEvent) };
    if (obj.PlaybackCompletionEvent !== undefined)
      return { PlaybackCompletionEvent: PlaybackCompletionEvent.filterSensitiveLog(obj.PlaybackCompletionEvent) };
    if (obj.DisconnectionEvent !== undefined)
      return { DisconnectionEvent: DisconnectionEvent.filterSensitiveLog(obj.DisconnectionEvent) };
    if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
  };
}

export interface StartConversationRequest {
  /**
   * <p>The identifier of the bot to process the request.</p>
   */
  botId: string | undefined;

  /**
   * <p>The alias identifier in use for the bot that processes the
   *          request.</p>
   */
  botAliasId: string | undefined;

  /**
   * <p>The locale where the session is in use.</p>
   */
  localeId: string | undefined;

  /**
   * <p>The identifier of the user session that is having the
   *          conversation.</p>
   */
  sessionId: string | undefined;

  /**
   * <p>The conversation type that you are using the Amazon Lex V2. If the
   *          conversation mode is <code>AUDIO</code> you can send both audio and
   *          DTMF information. If the mode is <code>TEXT</code> you can only send
   *          text.</p>
   */
  conversationMode?: ConversationMode | string;

  /**
   * <p>Represents the stream of events to Amazon Lex V2 from your application. The
   *          events are encoded as HTTP/2 data frames.</p>
   */
  requestEventStream: AsyncIterable<StartConversationRequestEventStream> | undefined;
}

export namespace StartConversationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartConversationRequest): any => ({
    ...obj,
    ...(obj.requestEventStream && { requestEventStream: "STREAMING_CONTENT" }),
  });
}

export interface GetSessionResponse {
  /**
   * <p>The identifier of the returned session.</p>
   */
  sessionId?: string;

  /**
   * <p>A list of messages that were last sent to the user. The messages are
   *          ordered based on the order that your returned the messages from your
   *          Lambda function or the order that messages are defined in the bot.
   *       </p>
   */
  messages?: Message[];

  /**
   * <p>A list of intents that Amazon Lex V2 determined might satisfy the user's
   *          utterance. </p>
   *          <p>Each interpretation includes the intent, a score that indicates how
   *          confident Amazon Lex V2 is that the interpretation is the correct one, and an
   *          optional sentiment response that indicates the sentiment expressed in
   *          the utterance.</p>
   */
  interpretations?: Interpretation[];

  /**
   * <p>Represents the current state of the dialog between the user and the
   *          bot.</p>
   *          <p>You can use this to determine the progress of the conversation and
   *          what the next action might be.</p>
   */
  sessionState?: SessionState;
}

export namespace GetSessionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetSessionResponse): any => ({
    ...obj,
    ...(obj.messages && { messages: obj.messages.map((item) => Message.filterSensitiveLog(item)) }),
  });
}

/**
 * <p>Contains the current state of the conversation between the client
 *          application and Amazon Lex V2.</p>
 */
export interface IntentResultEvent {
  /**
   * <p>Indicates whether the input to the operation was text or
   *          speech.</p>
   */
  inputMode?: InputMode | string;

  /**
   * <p>A list of intents that Amazon Lex V2 determined might satisfy the user's
   *          utterance.</p>
   *
   *          <p>Each interpretation includes the intent, a score that indicates how
   *          confident Amazon Lex V2 is that the interpretation is the correct one, and an
   *          optional sentiment response that indicates the sentiment expressed in
   *          the utterance.</p>
   */
  interpretations?: Interpretation[];

  /**
   * <p>The state of the user's session with Amazon Lex V2.</p>
   */
  sessionState?: SessionState;

  /**
   * <p>The attributes sent in the request.</p>
   */
  requestAttributes?: { [key: string]: string };

  /**
   * <p>The identifier of the session in use.</p>
   */
  sessionId?: string;

  /**
   * <p>A unique identifier of the event sent by Amazon Lex V2. The identifier is in
   *          the form <code>RESPONSE-N</code>, where N is a number starting with one
   *          and incremented for each event sent by Amazon Lex V2 in the current
   *          session.</p>
   */
  eventId?: string;
}

export namespace IntentResultEvent {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: IntentResultEvent): any => ({
    ...obj,
  });
}

export interface RecognizeTextResponse {
  /**
   * <p>A list of messages last sent to the user. The messages are ordered
   *          based on the order that you returned the messages from your Lambda
   *          function or the order that the messages are defined in the bot.</p>
   */
  messages?: Message[];

  /**
   * <p>Represents the current state of the dialog between the user and the
   *          bot. </p>
   *          <p>Use this to determine the progress of the conversation and what the
   *          next action may be.</p>
   */
  sessionState?: SessionState;

  /**
   * <p>A list of intents that Amazon Lex V2 determined might satisfy the user's
   *          utterance. </p>
   *          <p>Each interpretation includes the intent, a score that indicates now
   *          confident Amazon Lex V2 is that the interpretation is the correct one, and an
   *          optional sentiment response that indicates the sentiment expressed in
   *          the utterance.</p>
   */
  interpretations?: Interpretation[];

  /**
   * <p>The attributes sent in the request.</p>
   */
  requestAttributes?: { [key: string]: string };

  /**
   * <p>The identifier of the session in use.</p>
   */
  sessionId?: string;
}

export namespace RecognizeTextResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RecognizeTextResponse): any => ({
    ...obj,
    ...(obj.messages && { messages: obj.messages.map((item) => Message.filterSensitiveLog(item)) }),
  });
}

/**
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

export namespace StartConversationResponseEventStream {
  /**
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

  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartConversationResponseEventStream): any => {
    if (obj.PlaybackInterruptionEvent !== undefined)
      return { PlaybackInterruptionEvent: PlaybackInterruptionEvent.filterSensitiveLog(obj.PlaybackInterruptionEvent) };
    if (obj.TranscriptEvent !== undefined)
      return { TranscriptEvent: TranscriptEvent.filterSensitiveLog(obj.TranscriptEvent) };
    if (obj.IntentResultEvent !== undefined)
      return { IntentResultEvent: IntentResultEvent.filterSensitiveLog(obj.IntentResultEvent) };
    if (obj.TextResponseEvent !== undefined)
      return { TextResponseEvent: TextResponseEvent.filterSensitiveLog(obj.TextResponseEvent) };
    if (obj.AudioResponseEvent !== undefined)
      return { AudioResponseEvent: AudioResponseEvent.filterSensitiveLog(obj.AudioResponseEvent) };
    if (obj.HeartbeatEvent !== undefined)
      return { HeartbeatEvent: HeartbeatEvent.filterSensitiveLog(obj.HeartbeatEvent) };
    if (obj.AccessDeniedException !== undefined)
      return { AccessDeniedException: AccessDeniedException.filterSensitiveLog(obj.AccessDeniedException) };
    if (obj.ResourceNotFoundException !== undefined)
      return { ResourceNotFoundException: ResourceNotFoundException.filterSensitiveLog(obj.ResourceNotFoundException) };
    if (obj.ValidationException !== undefined)
      return { ValidationException: ValidationException.filterSensitiveLog(obj.ValidationException) };
    if (obj.ThrottlingException !== undefined)
      return { ThrottlingException: ThrottlingException.filterSensitiveLog(obj.ThrottlingException) };
    if (obj.InternalServerException !== undefined)
      return { InternalServerException: InternalServerException.filterSensitiveLog(obj.InternalServerException) };
    if (obj.ConflictException !== undefined)
      return { ConflictException: ConflictException.filterSensitiveLog(obj.ConflictException) };
    if (obj.DependencyFailedException !== undefined)
      return { DependencyFailedException: DependencyFailedException.filterSensitiveLog(obj.DependencyFailedException) };
    if (obj.BadGatewayException !== undefined)
      return { BadGatewayException: BadGatewayException.filterSensitiveLog(obj.BadGatewayException) };
    if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
  };
}

export interface StartConversationResponse {
  /**
   * <p>Represents the stream of events from Amazon Lex V2 to your application. The
   *          events are encoded as HTTP/2 data frames.</p>
   */
  responseEventStream?: AsyncIterable<StartConversationResponseEventStream>;
}

export namespace StartConversationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartConversationResponse): any => ({
    ...obj,
    ...(obj.responseEventStream && { responseEventStream: "STREAMING_CONTENT" }),
  });
}
