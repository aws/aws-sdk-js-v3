// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const AcceptanceType = {
  /**
   * Require explicit click-through acceptance of the
   * Term associated with this Report.
   */
  EXPLICIT: "EXPLICIT",
  /**
   * Do not require explicit click-through acceptance
   * of the Term associated with this Report
   */
  PASSTHROUGH: "PASSTHROUGH",
} as const;
/**
 * @public
 */
export type AcceptanceType = (typeof AcceptanceType)[keyof typeof AcceptanceType];

/**
 * @public
 * @enum
 */
export const NotificationSubscriptionStatus = {
  NOT_SUBSCRIBED: "NOT_SUBSCRIBED",
  SUBSCRIBED: "SUBSCRIBED",
} as const;
/**
 * @public
 */
export type NotificationSubscriptionStatus =
  (typeof NotificationSubscriptionStatus)[keyof typeof NotificationSubscriptionStatus];

/**
 * @public
 * @enum
 */
export const ValidationExceptionReason = {
  CANNOT_PARSE: "cannotParse",
  FIELD_VALIDATION_FAILED: "fieldValidationFailed",
  INVALID_TOKEN: "invalidToken",
  OTHER: "other",
  UNKNOWN_OPERATION: "unknownOperation",
} as const;
/**
 * @public
 */
export type ValidationExceptionReason = (typeof ValidationExceptionReason)[keyof typeof ValidationExceptionReason];

/**
 * @public
 * @enum
 */
export const AgreementType = {
  CUSTOM: "CUSTOM",
  DEFAULT: "DEFAULT",
  MODIFIED: "MODIFIED",
} as const;
/**
 * @public
 */
export type AgreementType = (typeof AgreementType)[keyof typeof AgreementType];

/**
 * @public
 * @enum
 */
export const InquirySupportMode = {
  AI_ONLY: "AI_ONLY",
  FULL_SUPPORT: "FULL_SUPPORT",
} as const;
/**
 * @public
 */
export type InquirySupportMode = (typeof InquirySupportMode)[keyof typeof InquirySupportMode];

/**
 * @public
 * @enum
 */
export const InputSource = {
  FILE: "FILE",
  TEXT: "TEXT",
} as const;
/**
 * @public
 */
export type InputSource = (typeof InputSource)[keyof typeof InputSource];

/**
 * @public
 * @enum
 */
export const InquiryStatus = {
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  HUMAN_REVIEW: "HUMAN_REVIEW",
  PROCESSING: "PROCESSING",
} as const;
/**
 * @public
 */
export type InquiryStatus = (typeof InquiryStatus)[keyof typeof InquiryStatus];

/**
 * @public
 * @enum
 */
export const InquiryStatusMessage = {
  COMPLETED_WITH_ERRORS: "Compliance inquiry processing is complete. One or more queries encountered errors during processing.",
  HUMAN_REVIEW_IN_PROGRESS: "Human review is in progress.",
  INTERNAL_ERROR: "An internal error occurred while processing the inquiry. Try again at a later time.",
  IN_PROGRESS: "Compliance inquiry processing is in-progress.",
  MALWARE_DETECTED_ERROR: "Malware was detected on the file. Provide a new file and try again.",
  SUCCESS: "Compliance inquiry processing is complete.",
} as const;
/**
 * @public
 */
export type InquiryStatusMessage = (typeof InquiryStatusMessage)[keyof typeof InquiryStatusMessage];

/**
 * @public
 * @enum
 */
export const ReviewType = {
  AI: "AI",
  HUMAN: "HUMAN",
} as const;
/**
 * @public
 */
export type ReviewType = (typeof ReviewType)[keyof typeof ReviewType];

/**
 * @public
 * @enum
 */
export const QueryStatus = {
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  PROCESSING: "PROCESSING",
} as const;
/**
 * @public
 */
export type QueryStatus = (typeof QueryStatus)[keyof typeof QueryStatus];

/**
 * @public
 * @enum
 */
export const QueryStatusMessage = {
  INTERNAL_ERROR: "An internal error occurred while processing the query. Try again at a later time.",
  IN_PROGRESS: "Query processing is in-progress.",
  PENDING_HUMAN_REVIEW: "Query is pending human review.",
  RESTRICTED: "Query contains restricted or unsupported content.",
  SUCCESS: "Query processing is complete.",
} as const;
/**
 * @public
 */
export type QueryStatusMessage = (typeof QueryStatusMessage)[keyof typeof QueryStatusMessage];

/**
 * @public
 * @enum
 */
export const FeedbackRating = {
  THUMBS_DOWN: "THUMBS_DOWN",
  THUMBS_UP: "THUMBS_UP",
} as const;
/**
 * @public
 */
export type FeedbackRating = (typeof FeedbackRating)[keyof typeof FeedbackRating];

/**
 * @public
 * @enum
 */
export const FeedbackReasonCode = {
  IRRELEVANT_RESPONSE: "IRRELEVANT_RESPONSE",
  OTHER: "OTHER",
  PARTIAL_RESPONSE: "PARTIAL_RESPONSE",
} as const;
/**
 * @public
 */
export type FeedbackReasonCode = (typeof FeedbackReasonCode)[keyof typeof FeedbackReasonCode];

/**
 * @public
 * @enum
 */
export const CustomerAgreementState = {
  ACTIVE: "ACTIVE",
  AWS_TERMINATED: "AWS_TERMINATED",
  CUSTOMER_TERMINATED: "CUSTOMER_TERMINATED",
} as const;
/**
 * @public
 */
export type CustomerAgreementState = (typeof CustomerAgreementState)[keyof typeof CustomerAgreementState];

/**
 * @public
 * @enum
 */
export const PublishedState = {
  PUBLISHED: "PUBLISHED",
  UNPUBLISHED: "UNPUBLISHED",
} as const;
/**
 * @public
 */
export type PublishedState = (typeof PublishedState)[keyof typeof PublishedState];

/**
 * @public
 * @enum
 */
export const UploadState = {
  COMPLETE: "COMPLETE",
  FAILED: "FAILED",
  FAULT: "FAULT",
  PROCESSING: "PROCESSING",
} as const;
/**
 * @public
 */
export type UploadState = (typeof UploadState)[keyof typeof UploadState];
