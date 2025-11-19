// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const AcceptCodeValidation = {
  ENFORCE: "ENFORCE",
  IGNORE: "IGNORE",
} as const;
/**
 * @public
 */
export type AcceptCodeValidation = (typeof AcceptCodeValidation)[keyof typeof AcceptCodeValidation];

/**
 * @public
 * @enum
 */
export const AcceptType = {
  DELIVERED: "DELIVERED",
  READ: "READ",
} as const;
/**
 * @public
 */
export type AcceptType = (typeof AcceptType)[keyof typeof AcceptType];

/**
 * @public
 * @enum
 */
export const ValidationExceptionReason = {
  CANNOT_PARSE: "CANNOT_PARSE",
  FIELD_VALIDATION_FAILED: "FIELD_VALIDATION_FAILED",
  OTHER: "OTHER",
  UNKNOWN_OPERATION: "UNKNOWN_OPERATION",
} as const;
/**
 * @public
 */
export type ValidationExceptionReason = (typeof ValidationExceptionReason)[keyof typeof ValidationExceptionReason];

/**
 * @public
 * @enum
 */
export const ActivationStatus = {
  ACTIVATED: "ACTIVATED",
  NOT_ACTIVATED: "NOT_ACTIVATED",
} as const;
/**
 * @public
 */
export type ActivationStatus = (typeof ActivationStatus)[keyof typeof ActivationStatus];

/**
 * @public
 * @enum
 */
export const ChannelType = {
  EMAIL: "EMAIL",
  SMS: "SMS",
  VOICE: "VOICE",
} as const;
/**
 * @public
 */
export type ChannelType = (typeof ChannelType)[keyof typeof ChannelType];

/**
 * @public
 * @enum
 */
export const ContactType = {
  ESCALATION: "ESCALATION",
  ONCALL_SCHEDULE: "ONCALL_SCHEDULE",
  PERSONAL: "PERSONAL",
} as const;
/**
 * @public
 */
export type ContactType = (typeof ContactType)[keyof typeof ContactType];

/**
 * @public
 * @enum
 */
export const DayOfWeek = {
  FRI: "FRI",
  MON: "MON",
  SAT: "SAT",
  SUN: "SUN",
  THU: "THU",
  TUE: "TUE",
  WED: "WED",
} as const;
/**
 * @public
 */
export type DayOfWeek = (typeof DayOfWeek)[keyof typeof DayOfWeek];

/**
 * @public
 * @enum
 */
export const ReceiptType = {
  DELIVERED: "DELIVERED",
  ERROR: "ERROR",
  READ: "READ",
  SENT: "SENT",
  STOP: "STOP",
} as const;
/**
 * @public
 */
export type ReceiptType = (typeof ReceiptType)[keyof typeof ReceiptType];

/**
 * @public
 * @enum
 */
export const ShiftType = {
  OVERRIDDEN: "OVERRIDDEN",
  REGULAR: "REGULAR",
} as const;
/**
 * @public
 */
export type ShiftType = (typeof ShiftType)[keyof typeof ShiftType];
