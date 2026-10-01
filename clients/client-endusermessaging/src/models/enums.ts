// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const BrandProfileAttributeType = {
  DOCUMENT: "DOCUMENT",
  IMAGE: "IMAGE",
  TEXT: "TEXT",
} as const;
/**
 * @public
 */
export type BrandProfileAttributeType = (typeof BrandProfileAttributeType)[keyof typeof BrandProfileAttributeType];

/**
 * @public
 * @enum
 */
export const Status = {
  ACTIVE: "ACTIVE",
  BLOCKED: "BLOCKED",
  CANCELLED: "CANCELLED",
  FAILED: "FAILED",
  PAUSED: "PAUSED",
} as const;
/**
 * @public
 */
export type Status = (typeof Status)[keyof typeof Status];

/**
 * @public
 * @enum
 */
export const VoiceMessageBodyTextType = {
  SSML: "SSML",
  TEXT: "TEXT",
} as const;
/**
 * @public
 */
export type VoiceMessageBodyTextType = (typeof VoiceMessageBodyTextType)[keyof typeof VoiceMessageBodyTextType];

/**
 * @public
 * @enum
 */
export const CodeType = {
  /**
   * Letters A–Z (uppercase).
   */
  ALPHA: "ALPHA",
  /**
   * Letters A–Z and digits 0–9.
   */
  ALPHANUMERIC: "ALPHANUMERIC",
  /**
   * Digits 0–9.
   */
  NUMERIC: "NUMERIC",
} as const;
/**
 * @public
 */
export type CodeType = (typeof CodeType)[keyof typeof CodeType];

/**
 * @public
 * @enum
 */
export const JobResourceType = {
  BRAND_PROFILE: "BRAND_PROFILE",
  REGISTRATION: "REGISTRATION",
} as const;
/**
 * @public
 */
export type JobResourceType = (typeof JobResourceType)[keyof typeof JobResourceType];

/**
 * @public
 * @enum
 */
export const JobStatus = {
  FAILED: "FAILED",
  PROCESSING: "PROCESSING",
  SUCCESS: "SUCCESS",
} as const;
/**
 * @public
 */
export type JobStatus = (typeof JobStatus)[keyof typeof JobStatus];

/**
 * @public
 * @enum
 */
export const NotifyChannel = {
  /**
   * SMS / text message.
   */
  TEXT: "TEXT",
  /**
   * Voice call.
   */
  VOICE: "VOICE",
  /**
   * WhatsApp authentication template.
   */
  WHATSAPP: "WHATSAPP",
} as const;
/**
 * @public
 */
export type NotifyChannel = (typeof NotifyChannel)[keyof typeof NotifyChannel];

/**
 * @public
 * @enum
 */
export const OnAttributeConflict = {
  /**
   * Existing attribute value is kept; the registration value is ignored.
   */
  PRESERVE: "PRESERVE",
  /**
   * New registration value replaces the existing attribute value (default).
   */
  REPLACE: "REPLACE",
} as const;
/**
 * @public
 */
export type OnAttributeConflict = (typeof OnAttributeConflict)[keyof typeof OnAttributeConflict];

/**
 * @public
 * @enum
 */
export const VerificationStatus = {
  /**
   * The submitted code does not match, has expired, or has exceeded its attempt limit.
   */
  INVALID: "INVALID",
  /**
   * The submitted code matches an active verification within its validity window.
   */
  VALID: "VALID",
} as const;
/**
 * @public
 */
export type VerificationStatus = (typeof VerificationStatus)[keyof typeof VerificationStatus];
