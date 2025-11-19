// smithy-typescript generated code
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
 * @enum
 */
export const InterpretationSource = {
  BEDROCK: "Bedrock",
  LEX: "Lex",
} as const;
/**
 * @public
 */
export type InterpretationSource = (typeof InterpretationSource)[keyof typeof InterpretationSource];

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
