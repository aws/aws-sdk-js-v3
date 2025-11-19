// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const FulfillmentState = {
  FAILED: "Failed",
  FULFILLED: "Fulfilled",
  READY_FOR_FULFILLMENT: "ReadyForFulfillment",
} as const;
/**
 * @public
 */
export type FulfillmentState = (typeof FulfillmentState)[keyof typeof FulfillmentState];

/**
 * @public
 * @enum
 */
export const MessageFormatType = {
  COMPOSITE: "Composite",
  CUSTOM_PAYLOAD: "CustomPayload",
  PLAIN_TEXT: "PlainText",
  SSML: "SSML",
} as const;
/**
 * @public
 */
export type MessageFormatType = (typeof MessageFormatType)[keyof typeof MessageFormatType];

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
} as const;
/**
 * @public
 */
export type DialogActionType = (typeof DialogActionType)[keyof typeof DialogActionType];

/**
 * @public
 * @enum
 */
export const ConfirmationStatus = {
  CONFIRMED: "Confirmed",
  DENIED: "Denied",
  NONE: "None",
} as const;
/**
 * @public
 */
export type ConfirmationStatus = (typeof ConfirmationStatus)[keyof typeof ConfirmationStatus];

/**
 * @public
 * @enum
 */
export const DialogState = {
  CONFIRM_INTENT: "ConfirmIntent",
  ELICIT_INTENT: "ElicitIntent",
  ELICIT_SLOT: "ElicitSlot",
  FAILED: "Failed",
  FULFILLED: "Fulfilled",
  READY_FOR_FULFILLMENT: "ReadyForFulfillment",
} as const;
/**
 * @public
 */
export type DialogState = (typeof DialogState)[keyof typeof DialogState];

/**
 * @public
 * @enum
 */
export const ContentType = {
  GENERIC: "application/vnd.amazonaws.card.generic",
} as const;
/**
 * @public
 */
export type ContentType = (typeof ContentType)[keyof typeof ContentType];
