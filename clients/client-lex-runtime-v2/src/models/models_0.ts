// smithy-typescript generated code
import type { StreamingBlobTypes } from "@smithy/types";

import type {
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
import type {
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
 * The time that a context is active. You can specify the time to live in seconds or in conversation turns.
 *
 * @public
 */
export interface ActiveContextTimeToLive {
  /**
   * The number of seconds that the context is active. You can specify between 5 and 86400 seconds (24 hours).
   *
   * @public
   */
  timeToLiveInSeconds: number | undefined;

  /**
   * The number of turns that the context is active. You can specify up to 20 turns. Each request and response from the bot is a turn.
   *
   * @public
   */
  turnsToLive: number | undefined;
}

/**
 * Contains information about the contexts that a user is using in a session. You can configure Amazon Lex V2 to set a context when an intent is fulfilled, or you can set a context using the , , or operations.
 *
 * Use a context to indicate to Amazon Lex V2 intents that should be used as follow-up intents. For example, if the active context is `order-fulfilled`, only intents that have `order-fulfilled` configured as a trigger are considered for follow up.
 *
 * @public
 */
export interface ActiveContext {
  /**
   * The name of the context.
   *
   * @public
   */
  name: string | undefined;

  /**
   * Indicates the number of turns or seconds that the context is active. Once the time to live expires, the context is no longer returned in a response.
   *
   * @public
   */
  timeToLive: ActiveContextTimeToLive | undefined;

  /**
   * A list of contexts active for the request. A context can be activated when a previous intent is fulfilled, or by including the context in the request.
   *
   * If you don't specify a list of contexts, Amazon Lex V2 will use the current list of contexts for the session. If you specify an empty list, all contexts for the session are cleared.
   *
   * @public
   */
  contextAttributes: Record<string, string> | undefined;
}

/**
 * Represents a chunk of audio sent from the client application to Amazon Lex V2. The audio is all or part of an utterance from the user.
 *
 * Amazon Lex V2 accumulates audio chunks until it recognizes a natural pause in speech before processing the input.
 *
 * @public
 */
export interface AudioInputEvent {
  /**
   * An encoded stream of audio.
   *
   * @public
   */
  audioChunk?: Uint8Array | undefined;

  /**
   * The encoding used for the audio chunk. You must use 8 KHz PCM 16-bit mono-channel little-endian format. The value of the field should be:
   *
   * `audio/lpcm; sample-rate=8000; sample-size-bits=16; channel-count=1; is-big-endian=false`
   *
   * @public
   */
  contentType: string | undefined;

  /**
   * A unique identifier that your application assigns to the event. You can use this to identify events in logs.
   *
   * @public
   */
  eventId?: string | undefined;

  /**
   * A timestamp set by the client of the date and time that the event was sent to Amazon Lex V2.
   *
   * @public
   */
  clientTimestampMillis?: number | undefined;
}

/**
 * An event sent from Amazon Lex V2 to your client application containing audio to play to the user.
 *
 * @public
 */
export interface AudioResponseEvent {
  /**
   * A chunk of the audio to play.
   *
   * @public
   */
  audioChunk?: Uint8Array | undefined;

  /**
   * The encoding of the audio chunk. This is the same as the encoding configure in the `contentType` field of the `ConfigurationEvent`.
   *
   * @public
   */
  contentType?: string | undefined;

  /**
   * A unique identifier of the event sent by Amazon Lex V2. The identifier is in the form `RESPONSE-N`, where N is a number starting with one and incremented for each event sent by Amazon Lex V2 in the current session.
   *
   * @public
   */
  eventId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteSessionRequest {
  /**
   * The identifier of the bot that contains the session data.
   *
   * @public
   */
  botId: string | undefined;

  /**
   * The alias identifier in use for the bot that contains the session data.
   *
   * @public
   */
  botAliasId: string | undefined;

  /**
   * The locale where the session is in use.
   *
   * @public
   */
  localeId: string | undefined;

  /**
   * The identifier of the session to delete.
   *
   * @public
   */
  sessionId: string | undefined;
}

/**
 * @public
 */
export interface DeleteSessionResponse {
  /**
   * The identifier of the bot that contained the session data.
   *
   * @public
   */
  botId?: string | undefined;

  /**
   * The alias identifier in use for the bot that contained the session data.
   *
   * @public
   */
  botAliasId?: string | undefined;

  /**
   * The locale where the session was used.
   *
   * @public
   */
  localeId?: string | undefined;

  /**
   * The identifier of the deleted session.
   *
   * @public
   */
  sessionId?: string | undefined;
}

/**
 * @public
 */
export interface GetSessionRequest {
  /**
   * The identifier of the bot that contains the session data.
   *
   * @public
   */
  botId: string | undefined;

  /**
   * The alias identifier in use for the bot that contains the session data.
   *
   * @public
   */
  botAliasId: string | undefined;

  /**
   * The locale where the session is in use.
   *
   * @public
   */
  localeId: string | undefined;

  /**
   * The identifier of the session to return.
   *
   * @public
   */
  sessionId: string | undefined;
}

/**
 * Information about the value provided for a slot and Amazon Lex V2's interpretation.
 *
 * @public
 */
export interface Value {
  /**
   * The part of the user's response to the slot elicitation that Amazon Lex V2 determines is relevant to the slot value.
   *
   * @public
   */
  originalValue?: string | undefined;

  /**
   * The value that Amazon Lex V2 determines for the slot, given the user input. The actual value depends on the setting of the value selection strategy for the bot. You can choose to use the value entered by the user, or you can have Amazon Lex V2 choose the first value in the `resolvedValues` list.
   *
   * @public
   */
  interpretedValue: string | undefined;

  /**
   * A list of values that Amazon Lex V2 determines are possible resolutions for the user input. The first value matches the `interpretedValue`.
   *
   * @public
   */
  resolvedValues?: string[] | undefined;
}

/**
 * Provides a score that indicates the confidence that Amazon Lex V2 has that an intent is the one that satisfies the user's intent.
 *
 * @public
 */
export interface ConfidenceScore {
  /**
   * A score that indicates how confident Amazon Lex V2 is that an intent satisfies the user's intent. Ranges between 0.00 and 1.00. Higher scores indicate higher confidence.
   *
   * @public
   */
  score?: number | undefined;
}

/**
 * The individual sentiment responses for the utterance.
 *
 * @public
 */
export interface SentimentScore {
  /**
   * The level of confidence that Amazon Comprehend has in the accuracy of its detection of the `POSITIVE` sentiment.
   *
   * @public
   */
  positive?: number | undefined;

  /**
   * The level of confidence that Amazon Comprehend has in the accuracy of its detection of the `NEGATIVE` sentiment.
   *
   * @public
   */
  negative?: number | undefined;

  /**
   * The level of confidence that Amazon Comprehend has in the accuracy of its detection of the `NEUTRAL` sentiment.
   *
   * @public
   */
  neutral?: number | undefined;

  /**
   * The level of confidence that Amazon Comprehend has in the accuracy of its detection of the `MIXED` sentiment.
   *
   * @public
   */
  mixed?: number | undefined;
}

/**
 * Provides information about the sentiment expressed in a user's response in a conversation. Sentiments are determined using Amazon Comprehend. Sentiments are only returned if they are enabled for the bot.
 *
 * For more information, see [Determine Sentiment](https://docs.aws.amazon.com/comprehend/latest/dg/how-sentiment.html) in the *Amazon Comprehend developer guide*.
 *
 * @public
 */
export interface SentimentResponse {
  /**
   * The overall sentiment expressed in the user's response. This is the sentiment most likely expressed by the user based on the analysis by Amazon Comprehend.
   *
   * @public
   */
  sentiment?: SentimentType | undefined;

  /**
   * The individual sentiment responses for the utterance.
   *
   * @public
   */
  sentimentScore?: SentimentScore | undefined;
}

/**
 * A button that appears on a response card show to the user.
 *
 * @public
 */
export interface Button {
  /**
   * The text that is displayed on the button.
   *
   * @public
   */
  text: string | undefined;

  /**
   * The value returned to Amazon Lex V2 when a user chooses the button.
   *
   * @public
   */
  value: string | undefined;
}

/**
 * A card that is shown to the user by a messaging platform. You define the contents of the card, the card is displayed by the platform.
 *
 * When you use a response card, the response from the user is constrained to the text associated with a button on the card.
 *
 * @public
 */
export interface ImageResponseCard {
  /**
   * The title to display on the response card. The format of the title is determined by the platform displaying the response card.
   *
   * @public
   */
  title: string | undefined;

  /**
   * The subtitle to display on the response card. The format of the subtitle is determined by the platform displaying the response card.
   *
   * @public
   */
  subtitle?: string | undefined;

  /**
   * The URL of an image to display on the response card. The image URL must be publicly available so that the platform displaying the response card has access to the image.
   *
   * @public
   */
  imageUrl?: string | undefined;

  /**
   * A list of buttons that should be displayed on the response card. The arrangement of the buttons is determined by the platform that displays the button.
   *
   * @public
   */
  buttons?: Button[] | undefined;
}

/**
 * Container for text that is returned to the customer..
 *
 * @public
 */
export interface Message {
  /**
   * The text of the message.
   *
   * @public
   */
  content?: string | undefined;

  /**
   * Indicates the type of response.
   *
   * @public
   */
  contentType: MessageContentType | undefined;

  /**
   * A card that is shown to the user by a messaging platform. You define the contents of the card, the card is displayed by the platform.
   *
   * When you use a response card, the response from the user is constrained to the text associated with a button on the card.
   *
   * @public
   */
  imageResponseCard?: ImageResponseCard | undefined;
}

/**
 * Provides the phrase that Amazon Lex V2 should look for in the user's input to the bot.
 *
 * @public
 */
export interface RuntimeHintValue {
  /**
   * The phrase that Amazon Lex V2 should look for in the user's input to the bot.
   *
   * @public
   */
  phrase: string | undefined;
}

/**
 * @public
 */
export interface PutSessionResponse {
  /**
   * The type of response. Same as the type specified in the `responseContentType` field in the request.
   *
   * @public
   */
  contentType?: string | undefined;

  /**
   * A list of messages that were last sent to the user. The messages are ordered based on how you return the messages from you Lambda function or the order that the messages are defined in the bot.
   *
   * @public
   */
  messages?: string | undefined;

  /**
   * A base-64-encoded gzipped field that represents the current state of the dialog between the user and the bot. Use this to determine the progress of the conversation and what the next action may be.
   *
   * @public
   */
  sessionState?: string | undefined;

  /**
   * A base-64-encoded gzipped field that provides request-specific information passed between the client application and Amazon Lex V2. These are the same as the `requestAttribute` parameter in the call to the `PutSession` operation.
   *
   * @public
   */
  requestAttributes?: string | undefined;

  /**
   * The identifier of the session that received the data.
   *
   * @public
   */
  sessionId?: string | undefined;

  /**
   * If the requested content type was audio, the audio version of the message to convey to the user.
   *
   * @public
   */
  audioStream?: StreamingBlobTypes | undefined;
}

/**
 * The bot member that processes the request.
 *
 * @public
 */
export interface RecognizedBotMember {
  /**
   * The identifier of the bot member that processes the request.
   *
   * @public
   */
  botId: string | undefined;

  /**
   * The name of the bot member that processes the request.
   *
   * @public
   */
  botName?: string | undefined;
}

/**
 * @public
 */
export interface RecognizeUtteranceRequest {
  /**
   * The identifier of the bot that should receive the request.
   *
   * @public
   */
  botId: string | undefined;

  /**
   * The alias identifier in use for the bot that should receive the request.
   *
   * @public
   */
  botAliasId: string | undefined;

  /**
   * The locale where the session is in use.
   *
   * @public
   */
  localeId: string | undefined;

  /**
   * The identifier of the session in use.
   *
   * @public
   */
  sessionId: string | undefined;

  /**
   * Sets the state of the session with the user. You can use this to set the current intent, attributes, context, and dialog action. Use the dialog action to determine the next step that Amazon Lex V2 should use in the conversation with the user.
   *
   * The `sessionState` field must be compressed using gzip and then base64 encoded before sending to Amazon Lex V2.
   *
   * @public
   */
  sessionState?: string | undefined;

  /**
   * Request-specific information passed between the client application and Amazon Lex V2
   *
   * The namespace `x-amz-lex:` is reserved for special attributes. Don't create any request attributes for prefix `x-amz-lex:`.
   *
   * The `requestAttributes` field must be compressed using gzip and then base64 encoded before sending to Amazon Lex V2.
   *
   * @public
   */
  requestAttributes?: string | undefined;

  /**
   * Indicates the format for audio input or that the content is text. The header must start with one of the following prefixes:
   *
   * - PCM format, audio data must be in little-endian byte order.
   *
   *   - audio/l16; rate=16000; channels=1
   *   - audio/x-l16; sample-rate=16000; channel-count=1
   *   - audio/lpcm; sample-rate=8000; sample-size-bits=16; channel-count=1; is-big-endian=false
   * - Opus format
   *
   *   - audio/x-cbr-opus-with-preamble;preamble-size=0;bit-rate=256000;frame-size-milliseconds=4
   * - Text format
   *
   *   - text/plain; charset=utf-8
   *
   * @public
   */
  requestContentType: string | undefined;

  /**
   * The message that Amazon Lex V2 returns in the response can be either text or speech based on the `responseContentType` value.
   *
   * - If the value is `text/plain;charset=utf-8`, Amazon Lex V2 returns text in the response.
   * - If the value begins with `audio/`, Amazon Lex V2 returns speech in the response. Amazon Lex V2 uses Amazon Polly to generate the speech using the configuration that you specified in the `responseContentType` parameter. For example, if you specify `audio/mpeg` as the value, Amazon Lex V2 returns speech in the MPEG format.
   * - If the value is `audio/pcm`, the speech returned is `audio/pcm` at 16 KHz in 16-bit, little-endian format.
   * - The following are the accepted values:
   *
   *   - audio/mpeg
   *   - audio/ogg
   *   - audio/pcm (16 KHz)
   *   - audio/* (defaults to mpeg)
   *   - text/plain; charset=utf-8
   *
   * @public
   */
  responseContentType?: string | undefined;

  /**
   * User input in PCM or Opus audio format or text format as described in the `requestContentType` parameter.
   *
   * @public
   */
  inputStream?: StreamingBlobTypes | undefined;
}

/**
 * @public
 */
export interface RecognizeUtteranceResponse {
  /**
   * Indicates whether the input mode to the operation was text, speech, or from a touch-tone keypad.
   *
   * @public
   */
  inputMode?: string | undefined;

  /**
   * Content type as specified in the `responseContentType` in the request.
   *
   * @public
   */
  contentType?: string | undefined;

  /**
   * A list of messages that were last sent to the user. The messages are ordered based on the order that you returned the messages from your Lambda function or the order that the messages are defined in the bot.
   *
   * The `messages` field is compressed with gzip and then base64 encoded. Before you can use the contents of the field, you must decode and decompress the contents. See the example for a simple function to decode and decompress the contents.
   *
   * @public
   */
  messages?: string | undefined;

  /**
   * A list of intents that Amazon Lex V2 determined might satisfy the user's utterance.
   *
   * Each interpretation includes the intent, a score that indicates how confident Amazon Lex V2 is that the interpretation is the correct one, and an optional sentiment response that indicates the sentiment expressed in the utterance.
   *
   * The `interpretations` field is compressed with gzip and then base64 encoded. Before you can use the contents of the field, you must decode and decompress the contents. See the example for a simple function to decode and decompress the contents.
   *
   * @public
   */
  interpretations?: string | undefined;

  /**
   * Represents the current state of the dialog between the user and the bot.
   *
   * Use this to determine the progress of the conversation and what the next action might be.
   *
   * The `sessionState` field is compressed with gzip and then base64 encoded. Before you can use the contents of the field, you must decode and decompress the contents. See the example for a simple function to decode and decompress the contents.
   *
   * @public
   */
  sessionState?: string | undefined;

  /**
   * The attributes sent in the request.
   *
   * The `requestAttributes` field is compressed with gzip and then base64 encoded. Before you can use the contents of the field, you must decode and decompress the contents.
   *
   * @public
   */
  requestAttributes?: string | undefined;

  /**
   * The identifier of the session in use.
   *
   * @public
   */
  sessionId?: string | undefined;

  /**
   * The text used to process the request.
   *
   * If the input was an audio stream, the `inputTranscript` field contains the text extracted from the audio stream. This is the text that is actually processed to recognize intents and slot values. You can use this information to determine if Amazon Lex V2 is correctly processing the audio that you send.
   *
   * The `inputTranscript` field is compressed with gzip and then base64 encoded. Before you can use the contents of the field, you must decode and decompress the contents. See the example for a simple function to decode and decompress the contents.
   *
   * @public
   */
  inputTranscript?: string | undefined;

  /**
   * The prompt or statement to send to the user. This is based on the bot configuration and context. For example, if Amazon Lex V2 did not understand the user intent, it sends the `clarificationPrompt` configured for the bot. If the intent requires confirmation before taking the fulfillment action, it sends the `confirmationPrompt`. Another example: Suppose that the Lambda function successfully fulfilled the intent, and sent a message to convey to the user. Then Amazon Lex V2 sends that message in the response.
   *
   * @public
   */
  audioStream?: StreamingBlobTypes | undefined;

  /**
   * The bot member that recognized the utterance.
   *
   * @public
   */
  recognizedBotMember?: string | undefined;
}

/**
 * A notification from the client that it is disconnecting from Amazon Lex V2. Sending a `DisconnectionEvent` event is optional, but can help identify a conversation in logs.
 *
 * @public
 */
export interface DisconnectionEvent {
  /**
   * A unique identifier that your application assigns to the event. You can use this to identify events in logs.
   *
   * @public
   */
  eventId?: string | undefined;

  /**
   * A timestamp set by the client of the date and time that the event was sent to Amazon Lex V2.
   *
   * @public
   */
  clientTimestampMillis?: number | undefined;
}

/**
 * A DTMF character sent from the client application. DTMF characters are typically sent from a phone keypad to represent numbers. For example, you can have Amazon Lex V2 process a credit card number input from a phone.
 *
 * @public
 */
export interface DTMFInputEvent {
  /**
   * The DTMF character that the user pressed. The allowed characters are A - D, 0 - 9, # and *.
   *
   * @public
   */
  inputCharacter: string | undefined;

  /**
   * A unique identifier that your application assigns to the event. You can use this to identify events in logs.
   *
   * @public
   */
  eventId?: string | undefined;

  /**
   * A timestamp set by the client of the date and time that the event was sent to Amazon Lex V2.
   *
   * @public
   */
  clientTimestampMillis?: number | undefined;
}

/**
 * Event sent from the client application to Amazon Lex V2 to indicate that playback of audio is complete and that Amazon Lex V2 should start processing the user's input.
 *
 * @public
 */
export interface PlaybackCompletionEvent {
  /**
   * A unique identifier that your application assigns to the event. You can use this to identify events in logs.
   *
   * @public
   */
  eventId?: string | undefined;

  /**
   * A timestamp set by the client of the date and time that the event was sent to Amazon Lex V2.
   *
   * @public
   */
  clientTimestampMillis?: number | undefined;
}

/**
 * The event sent from your client application to Amazon Lex V2 with text input from the user.
 *
 * @public
 */
export interface TextInputEvent {
  /**
   * The text from the user. Amazon Lex V2 processes this as a complete statement.
   *
   * @public
   */
  text: string | undefined;

  /**
   * A unique identifier that your application assigns to the event. You can use this to identify events in logs.
   *
   * @public
   */
  eventId?: string | undefined;

  /**
   * A timestamp set by the client of the date and time that the event was sent to Amazon Lex V2.
   *
   * @public
   */
  clientTimestampMillis?: number | undefined;
}

/**
 * Event that Amazon Lex V2 sends to indicate that the stream is still open between the client application and Amazon Lex V2
 *
 * @public
 */
export interface HeartbeatEvent {
  /**
   * A unique identifier of the event sent by Amazon Lex V2. The identifier is in the form `RESPONSE-N`, where N is a number starting with one and incremented for each event sent by Amazon Lex V2 in the current session.
   *
   * @public
   */
  eventId?: string | undefined;
}

/**
 * Event sent from Amazon Lex V2 to indicate to the client application should stop playback of audio. For example, if the client is playing a prompt that asks for the user's telephone number, the user might start to say the phone number before the prompt is complete. Amazon Lex V2 sends this event to the client application to indicate that the user is responding and that Amazon Lex V2 is processing their input.
 *
 * @public
 */
export interface PlaybackInterruptionEvent {
  /**
   * Indicates the type of user input that Amazon Lex V2 detected.
   *
   * @public
   */
  eventReason?: PlaybackInterruptionReason | undefined;

  /**
   * The identifier of the event that contained the audio, DTMF, or text that caused the interruption.
   *
   * @public
   */
  causedByEventId?: string | undefined;

  /**
   * A unique identifier of the event sent by Amazon Lex V2. The identifier is in the form `RESPONSE-N`, where N is a number starting with one and incremented for each event sent by Amazon Lex V2 in the current session.
   *
   * @public
   */
  eventId?: string | undefined;
}

/**
 * The event sent from Amazon Lex V2 to your application with text to present to the user.
 *
 * @public
 */
export interface TextResponseEvent {
  /**
   * A list of messages to send to the user. Messages are ordered based on the order that you returned the messages from your Lambda function or the order that the messages are defined in the bot.
   *
   * @public
   */
  messages?: Message[] | undefined;

  /**
   * A unique identifier of the event sent by Amazon Lex V2. The identifier is in the form `RESPONSE-N`, where N is a number starting with one and incremented for each event sent by Amazon Lex V2 in the current session.
   *
   * @public
   */
  eventId?: string | undefined;
}

/**
 * Event sent from Amazon Lex V2 to your client application that contains a transcript of voice audio.
 *
 * @public
 */
export interface TranscriptEvent {
  /**
   * The transcript of the voice audio from the user.
   *
   * @public
   */
  transcript?: string | undefined;

  /**
   * A unique identifier of the event sent by Amazon Lex V2. The identifier is in the form `RESPONSE-N`, where N is a number starting with one and incremented for each event sent by Amazon Lex V2 in the current session.
   *
   * @public
   */
  eventId?: string | undefined;
}

/**
 * The specific constituent sub slot of the composite slot to elicit in dialog action.
 *
 * @public
 */
export interface ElicitSubSlot {
  /**
   * The name of the slot that should be elicited from the user.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The field is not supported.
   *
   * @public
   */
  subSlotToElicit?: ElicitSubSlot | undefined;
}

/**
 * The next action that Amazon Lex V2 should take.
 *
 * @public
 */
export interface DialogAction {
  /**
   * The next action that the bot should take in its interaction with the user. The following values are possible:
   *
   * - `Close` – Indicates that there will not be a response from the user. For example, the statement "Your order has been placed" does not require a response.
   * - `ConfirmIntent` – The next action is asking the user if the intent is complete and ready to be fulfilled. This is a yes/no question such as "Place the order?"
   * - `Delegate` – The next action is determined by Amazon Lex V2.
   * - `ElicitIntent` – The next action is to elicit an intent from the user.
   * - `ElicitSlot` – The next action is to elicit a slot value from the user.
   *
   * @public
   */
  type: DialogActionType | undefined;

  /**
   * The name of the slot that should be elicited from the user.
   *
   * @public
   */
  slotToElicit?: string | undefined;

  /**
   * Configures the slot to use spell-by-letter or spell-by-word style. When you use a style on a slot, users can spell out their input to make it clear to your bot.
   *
   * - Spell by letter - "b" "o" "b"
   * - Spell by word - "b as in boy" "o as in oscar" "b as in boy"
   *
   * For more information, see [Using spelling to enter slot values](https://docs.aws.amazon.com/lexv2/latest/dg/spelling-styles.html).
   *
   * @public
   */
  slotElicitationStyle?: StyleType | undefined;

  /**
   * The name of the constituent sub slot of the composite slot specified in slotToElicit that should be elicited from the user.
   *
   * @public
   */
  subSlotToElicit?: ElicitSubSlot | undefined;
}

/**
 * Provides an array of phrases that should be given preference when resolving values for a slot.
 *
 * @public
 */
export interface RuntimeHintDetails {
  /**
   * One or more strings that Amazon Lex V2 should look for in the input to the bot. Each phrase is given preference when deciding on slot values.
   *
   * @public
   */
  runtimeHintValues?: RuntimeHintValue[] | undefined;

  /**
   * A map of constituent sub slot names inside a composite slot in the intent and the phrases that should be added for each sub slot. Inside each composite slot hints, this structure provides a mechanism to add granular sub slot phrases. Only sub slot hints are supported for composite slots. The intent name, composite slot name and the constituent sub slot names must exist.
   *
   * @public
   */
  subSlotHints?: Record<string, RuntimeHintDetails> | undefined;
}

/**
 * You can provide Amazon Lex V2 with hints to the phrases that a customer is likely to use for a slot. When a slot with hints is resolved, the phrases in the runtime hints are preferred in the resolution. You can provide hints for a maximum of 100 intents. You can provide a maximum of 100 slots.
 *
 * Before you can use runtime hints with an existing bot, you must first rebuild the bot.
 *
 * For more information, see [Using runtime hints to improve recognition of slot values](https://docs.aws.amazon.com/lexv2/latest/dg/using-hints.html).
 *
 * @public
 */
export interface RuntimeHints {
  /**
   * A list of the slots in the intent that should have runtime hints added, and the phrases that should be added for each slot.
   *
   * The first level of the `slotHints` map is the name of the intent. The second level is the name of the slot within the intent. For more information, see [Using hints to improve accuracy](https://docs.aws.amazon.com/lexv2/latest/dg/using-hints.html).
   *
   * The intent name and slot name must exist.
   *
   * @public
   */
  slotHints?: Record<string, Record<string, RuntimeHintDetails>> | undefined;
}

/**
 * A value that Amazon Lex V2 uses to fulfill an intent.
 *
 * @public
 */
export interface Slot {
  /**
   * The current value of the slot.
   *
   * @public
   */
  value?: Value | undefined;

  /**
   * When the `shape` value is `List`, it indicates that the `values` field contains a list of slot values. When the value is `Scalar`, it indicates that the `value` field contains a single value.
   *
   * @public
   */
  shape?: Shape | undefined;

  /**
   * A list of one or more values that the user provided for the slot. For example, if a for a slot that elicits pizza toppings, the values might be "pepperoni" and "pineapple."
   *
   * @public
   */
  values?: Slot[] | undefined;

  /**
   * The constituent sub slots of a composite slot.
   *
   * @public
   */
  subSlots?: Record<string, Slot> | undefined;
}

/**
 * The current intent that Amazon Lex V2 is attempting to fulfill.
 *
 * @public
 */
export interface Intent {
  /**
   * The name of the intent.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A map of all of the slots for the intent. The name of the slot maps to the value of the slot. If a slot has not been filled, the value is null.
   *
   * @public
   */
  slots?: Record<string, Slot> | undefined;

  /**
   * Indicates the fulfillment state for the intent. The meanings of each value are as follows:
   *
   * - `Failed` – The bot failed to fulfill the intent.
   * - `Fulfilled` – The bot has completed fulfillment of the intent.
   * - `FulfillmentInProgress` – The bot is in the middle of fulfilling the intent.
   * - `InProgress` – The bot is in the middle of eliciting the slot values that are necessary to fulfill the intent.
   * - `ReadyForFulfillment` – The bot has elicited all the slot values for the intent and is ready to fulfill the intent.
   * - `Waiting` – The bot is waiting for a response from the user (limited to streaming conversations).
   *
   * @public
   */
  state?: IntentState | undefined;

  /**
   * Indicates whether the intent has been `Confirmed`, `Denied`, or `None` if the confirmation stage has not yet been reached.
   *
   * @public
   */
  confirmationState?: ConfirmationState | undefined;
}

/**
 * An object containing information about an intent that Amazon Lex V2 determined might satisfy the user's utterance. The intents are ordered by the confidence score.
 *
 * @public
 */
export interface Interpretation {
  /**
   * Determines the threshold where Amazon Lex V2 will insert the `AMAZON.FallbackIntent`, `AMAZON.KendraSearchIntent`, or both when returning alternative intents in a response. `AMAZON.FallbackIntent` and `AMAZON.KendraSearchIntent` are only inserted if they are configured for the bot.
   *
   * @public
   */
  nluConfidence?: ConfidenceScore | undefined;

  /**
   * The sentiment expressed in an utterance.
   *
   * When the bot is configured to send utterances to Amazon Comprehend for sentiment analysis, this field contains the result of the analysis.
   *
   * @public
   */
  sentimentResponse?: SentimentResponse | undefined;

  /**
   * A list of intents that might satisfy the user's utterance. The intents are ordered by the confidence score.
   *
   * @public
   */
  intent?: Intent | undefined;

  /**
   * Specifies the service that interpreted the input.
   *
   * @public
   */
  interpretationSource?: InterpretationSource | undefined;
}

/**
 * The state of the user's session with Amazon Lex V2.
 *
 * @public
 */
export interface SessionState {
  /**
   * The next step that Amazon Lex V2 should take in the conversation with a user.
   *
   * @public
   */
  dialogAction?: DialogAction | undefined;

  /**
   * The active intent that Amazon Lex V2 is processing.
   *
   * @public
   */
  intent?: Intent | undefined;

  /**
   * One or more contexts that indicate to Amazon Lex V2 the context of a request. When a context is active, Amazon Lex V2 considers intents with the matching context as a trigger as the next intent in a session.
   *
   * @public
   */
  activeContexts?: ActiveContext[] | undefined;

  /**
   * Map of key/value pairs representing session-specific context information. It contains application information passed between Amazon Lex V2 and a client application.
   *
   * @public
   */
  sessionAttributes?: Record<string, string> | undefined;

  /**
   * A unique identifier for a specific request.
   *
   * @public
   */
  originatingRequestId?: string | undefined;

  /**
   * Hints for phrases that a customer is likely to use for a slot. Amazon Lex V2 uses the hints to help determine the correct value of a slot.
   *
   * @public
   */
  runtimeHints?: RuntimeHints | undefined;
}

/**
 * The initial event sent from the application to Amazon Lex V2 to configure the conversation, including session and request attributes and the response content type.
 *
 * @public
 */
export interface ConfigurationEvent {
  /**
   * Request-specific information passed between the client application and Amazon Lex V2.
   *
   * The namespace `x-amz-lex:` is reserved for special attributes. Don't create any request attributes for prefix `x-amz-lex:`.
   *
   * @public
   */
  requestAttributes?: Record<string, string> | undefined;

  /**
   * The message that Amazon Lex V2 returns in the response can be either text or speech based on the `responseContentType` value.
   *
   * - If the value is `text/plain;charset=utf-8`, Amazon Lex V2 returns text in the response.
   * - If the value begins with `audio/`, Amazon Lex V2 returns speech in the response. Amazon Lex V2 uses Amazon Polly to generate the speech using the configuration that you specified in the `requestContentType` parameter. For example, if you specify `audio/mpeg` as the value, Amazon Lex V2 returns speech in the MPEG format.
   * - If the value is `audio/pcm`, the speech returned is audio/pcm in 16-bit, little-endian format.
   * - The following are the accepted values:
   *
   *   - audio/mpeg
   *   - audio/ogg
   *   - audio/pcm
   *   - audio/* (defaults to mpeg)
   *   - text/plain; charset=utf-8
   *
   * @public
   */
  responseContentType: string | undefined;

  /**
   * The state of the user's session with Amazon Lex V2.
   *
   * @public
   */
  sessionState?: SessionState | undefined;

  /**
   * A list of messages to send to the user.
   *
   * If you set the `welcomeMessage` field, you must also set the [`DialogAction`](https://docs.aws.amazon.com/lexv2/latest/dg/API_runtime_DialogAction.html) structure's [`type`](https://docs.aws.amazon.com/lexv2/latest/dg/API_runtime_DialogAction.html#lexv2-Type-runtime_DialogAction-type) field.
   *
   * @public
   */
  welcomeMessages?: Message[] | undefined;

  /**
   * Determines whether Amazon Lex V2 should send audio responses to the client application.
   *
   * Set this field to false when the client is operating in a playback mode where audio responses are played to the user. If the client isn't operating in playback mode, such as a text chat application, set this to true so that Amazon Lex V2 doesn't wait for the prompt to finish playing on the client.
   *
   * @public
   */
  disablePlayback?: boolean | undefined;

  /**
   * A unique identifier that your application assigns to the event. You can use this to identify events in logs.
   *
   * @public
   */
  eventId?: string | undefined;

  /**
   * A timestamp set by the client of the date and time that the event was sent to Amazon Lex V2.
   *
   * @public
   */
  clientTimestampMillis?: number | undefined;
}

/**
 * @public
 */
export interface PutSessionRequest {
  /**
   * The identifier of the bot that receives the session data.
   *
   * @public
   */
  botId: string | undefined;

  /**
   * The alias identifier of the bot that receives the session data.
   *
   * @public
   */
  botAliasId: string | undefined;

  /**
   * The locale where the session is in use.
   *
   * @public
   */
  localeId: string | undefined;

  /**
   * The identifier of the session that receives the session data.
   *
   * @public
   */
  sessionId: string | undefined;

  /**
   * A list of messages to send to the user. Messages are sent in the order that they are defined in the list.
   *
   * @public
   */
  messages?: Message[] | undefined;

  /**
   * Sets the state of the session with the user. You can use this to set the current intent, attributes, context, and dialog action. Use the dialog action to determine the next step that Amazon Lex V2 should use in the conversation with the user.
   *
   * @public
   */
  sessionState: SessionState | undefined;

  /**
   * Request-specific information passed between Amazon Lex V2 and the client application.
   *
   * The namespace `x-amz-lex:` is reserved for special attributes. Don't create any request attributes with the prefix `x-amz-lex:`.
   *
   * @public
   */
  requestAttributes?: Record<string, string> | undefined;

  /**
   * The message that Amazon Lex V2 returns in the response can be either text or speech depending on the value of this parameter.
   *
   * - If the value is `text/plain; charset=utf-8`, Amazon Lex V2 returns text in the response.
   *
   * @public
   */
  responseContentType?: string | undefined;
}

/**
 * @public
 */
export interface RecognizeTextRequest {
  /**
   * The identifier of the bot that processes the request.
   *
   * @public
   */
  botId: string | undefined;

  /**
   * The alias identifier in use for the bot that processes the request.
   *
   * @public
   */
  botAliasId: string | undefined;

  /**
   * The locale where the session is in use.
   *
   * @public
   */
  localeId: string | undefined;

  /**
   * The identifier of the user session that is having the conversation.
   *
   * @public
   */
  sessionId: string | undefined;

  /**
   * The text that the user entered. Amazon Lex V2 interprets this text.
   *
   * @public
   */
  text: string | undefined;

  /**
   * The current state of the dialog between the user and the bot.
   *
   * @public
   */
  sessionState?: SessionState | undefined;

  /**
   * Request-specific information passed between the client application and Amazon Lex V2
   *
   * The namespace `x-amz-lex:` is reserved for special attributes. Don't create any request attributes with the prefix `x-amz-lex:`.
   *
   * @public
   */
  requestAttributes?: Record<string, string> | undefined;
}

/**
 * Represents a stream of events between your application and Amazon Lex V2.
 *
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
   * Configuration information sent from your client application to Amazon Lex V2
   *
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
   * Speech audio sent from your client application to Amazon Lex V2. Audio starts accumulating when Amazon Lex V2 identifies a voice and continues until a natural pause in the speech is found before processing.
   *
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
   * DTMF information sent to Amazon Lex V2 by your application. Amazon Lex V2 accumulates the DMTF information from when the user sends the first character and ends
   *
   * - when there's a pause longer that the value configured for the end timeout.
   * - when there's a digit that is the configured end character.
   * - when Amazon Lex V2 accumulates characters equal to the maximum DTMF character configuration.
   *
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
   * Text sent from your client application to Amazon Lex V2. Each `TextInputEvent` is processed individually.
   *
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
   * Event sent from the client application to Amazon Lex V2 to indicate that it has finished playing audio and that Amazon Lex V2 should start listening for user input.
   *
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
   * Event sent from the client application to indicate to Amazon Lex V2 that the conversation is over.
   *
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
   * The identifier of the bot to process the request.
   *
   * @public
   */
  botId: string | undefined;

  /**
   * The alias identifier in use for the bot that processes the request.
   *
   * @public
   */
  botAliasId: string | undefined;

  /**
   * The locale where the session is in use.
   *
   * @public
   */
  localeId: string | undefined;

  /**
   * The identifier of the user session that is having the conversation.
   *
   * @public
   */
  sessionId: string | undefined;

  /**
   * The conversation type that you are using the Amazon Lex V2. If the conversation mode is `AUDIO` you can send both audio and DTMF information. If the mode is `TEXT` you can only send text.
   *
   * @public
   */
  conversationMode?: ConversationMode | undefined;

  /**
   * Represents the stream of events to Amazon Lex V2 from your application. The events are encoded as HTTP/2 data frames.
   *
   * @public
   */
  requestEventStream: AsyncIterable<StartConversationRequestEventStream> | undefined;
}

/**
 * @public
 */
export interface GetSessionResponse {
  /**
   * The identifier of the returned session.
   *
   * @public
   */
  sessionId?: string | undefined;

  /**
   * A list of messages that were last sent to the user. The messages are ordered based on the order that your returned the messages from your Lambda function or the order that messages are defined in the bot.
   *
   * @public
   */
  messages?: Message[] | undefined;

  /**
   * A list of intents that Amazon Lex V2 determined might satisfy the user's utterance.
   *
   * Each interpretation includes the intent, a score that indicates how confident Amazon Lex V2 is that the interpretation is the correct one, and an optional sentiment response that indicates the sentiment expressed in the utterance.
   *
   * @public
   */
  interpretations?: Interpretation[] | undefined;

  /**
   * Represents the current state of the dialog between the user and the bot.
   *
   * You can use this to determine the progress of the conversation and what the next action might be.
   *
   * @public
   */
  sessionState?: SessionState | undefined;
}

/**
 * Contains the current state of the conversation between the client application and Amazon Lex V2.
 *
 * @public
 */
export interface IntentResultEvent {
  /**
   * Indicates whether the input to the operation was text, speech, or from a touch-tone keypad.
   *
   * @public
   */
  inputMode?: InputMode | undefined;

  /**
   * A list of intents that Amazon Lex V2 determined might satisfy the user's utterance.
   *
   * Each interpretation includes the intent, a score that indicates how confident Amazon Lex V2 is that the interpretation is the correct one, and an optional sentiment response that indicates the sentiment expressed in the utterance.
   *
   * @public
   */
  interpretations?: Interpretation[] | undefined;

  /**
   * The state of the user's session with Amazon Lex V2.
   *
   * @public
   */
  sessionState?: SessionState | undefined;

  /**
   * The attributes sent in the request.
   *
   * @public
   */
  requestAttributes?: Record<string, string> | undefined;

  /**
   * The identifier of the session in use.
   *
   * @public
   */
  sessionId?: string | undefined;

  /**
   * A unique identifier of the event sent by Amazon Lex V2. The identifier is in the form `RESPONSE-N`, where N is a number starting with one and incremented for each event sent by Amazon Lex V2 in the current session.
   *
   * @public
   */
  eventId?: string | undefined;

  /**
   * The bot member that is processing the intent.
   *
   * @public
   */
  recognizedBotMember?: RecognizedBotMember | undefined;
}

/**
 * @public
 */
export interface RecognizeTextResponse {
  /**
   * A list of messages last sent to the user. The messages are ordered based on the order that you returned the messages from your Lambda function or the order that the messages are defined in the bot.
   *
   * @public
   */
  messages?: Message[] | undefined;

  /**
   * Represents the current state of the dialog between the user and the bot.
   *
   * Use this to determine the progress of the conversation and what the next action may be.
   *
   * @public
   */
  sessionState?: SessionState | undefined;

  /**
   * A list of intents that Amazon Lex V2 determined might satisfy the user's utterance.
   *
   * Each interpretation includes the intent, a score that indicates now confident Amazon Lex V2 is that the interpretation is the correct one, and an optional sentiment response that indicates the sentiment expressed in the utterance.
   *
   * @public
   */
  interpretations?: Interpretation[] | undefined;

  /**
   * The attributes sent in the request.
   *
   * @public
   */
  requestAttributes?: Record<string, string> | undefined;

  /**
   * The identifier of the session in use.
   *
   * @public
   */
  sessionId?: string | undefined;

  /**
   * The bot member that recognized the text.
   *
   * @public
   */
  recognizedBotMember?: RecognizedBotMember | undefined;
}

/**
 * Represents a stream of events between Amazon Lex V2 and your application.
 *
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
   * Event sent from Amazon Lex V2 to indicate to the client application should stop playback of audio. For example, if the client is playing a prompt that asks for the user's telephone number, the user might start to say the phone number before the prompt is complete. Amazon Lex V2 sends this event to the client application to indicate that the user is responding and that Amazon Lex V2 is processing their input.
   *
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
   * Event sent from Amazon Lex V2 to your client application that contains a transcript of voice audio.
   *
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
   * Event sent from Amazon Lex V2 to the client application containing the current state of the conversation between the user and Amazon Lex V2.
   *
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
   * The event sent from Amazon Lex V2 to your application with text to present to the user.
   *
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
   * An event sent from Amazon Lex V2 to your client application containing audio to play to the user.
   *
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
   * Event that Amazon Lex V2 sends to indicate that the stream is still open between the client application and Amazon Lex V2
   *
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
   * Exception thrown when the credentials passed with the request are invalid or expired. Also thrown when the credentials in the request do not have permission to access the `StartConversation` operation.
   *
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
   * Exception thrown if one of the input parameters points to a resource that does not exist. For example, if the bot ID specified does not exist.
   *
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
   * Exception thrown when one or more parameters could not be validated. The `message` contains the name of the field that isn't valid.
   *
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
   * Exception thrown when your application exceeds the maximum number of concurrent requests.
   *
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
   * An error occurred with Amazon Lex V2.
   *
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
   * Exception thrown when two clients are using the same AWS account, Amazon Lex V2 bot, and session ID.
   *
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
   * Represents the stream of events from Amazon Lex V2 to your application. The events are encoded as HTTP/2 data frames.
   *
   * @public
   */
  responseEventStream?: AsyncIterable<StartConversationResponseEventStream> | undefined;
}
