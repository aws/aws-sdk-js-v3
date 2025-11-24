// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const ConflictType = {
  ANOTHER_ACTIVE_STREAM: "ANOTHER_ACTIVE_STREAM",
  CANNOT_CHANGE_SPEAKER_AFTER_ENROLLMENT: "CANNOT_CHANGE_SPEAKER_AFTER_ENROLLMENT",
  CANNOT_DELETE_NON_EMPTY_WATCHLIST: "CANNOT_DELETE_NON_EMPTY_WATCHLIST",
  CONCURRENT_CHANGES: "CONCURRENT_CHANGES",
  DOMAIN_LOCKED_FROM_ENCRYPTION_UPDATES: "DOMAIN_LOCKED_FROM_ENCRYPTION_UPDATES",
  DOMAIN_NOT_ACTIVE: "DOMAIN_NOT_ACTIVE",
  ENROLLMENT_ALREADY_EXISTS: "ENROLLMENT_ALREADY_EXISTS",
  FRAUDSTER_MUST_BELONG_TO_AT_LEAST_ONE_WATCHLIST: "FRAUDSTER_MUST_BELONG_TO_AT_LEAST_ONE_WATCHLIST",
  SPEAKER_NOT_SET: "SPEAKER_NOT_SET",
  SPEAKER_OPTED_OUT: "SPEAKER_OPTED_OUT",
} as const;
/**
 * @public
 */
export type ConflictType = (typeof ConflictType)[keyof typeof ConflictType];

/**
 * @public
 * @enum
 */
export const ResourceType = {
  BATCH_JOB: "BATCH_JOB",
  COMPLIANCE_CONSENT: "COMPLIANCE_CONSENT",
  DOMAIN: "DOMAIN",
  FRAUDSTER: "FRAUDSTER",
  SESSION: "SESSION",
  SPEAKER: "SPEAKER",
  WATCHLIST: "WATCHLIST",
} as const;
/**
 * @public
 */
export type ResourceType = (typeof ResourceType)[keyof typeof ResourceType];

/**
 * @public
 * @enum
 */
export const AuthenticationDecision = {
  ACCEPT: "ACCEPT",
  NOT_ENOUGH_SPEECH: "NOT_ENOUGH_SPEECH",
  REJECT: "REJECT",
  SPEAKER_EXPIRED: "SPEAKER_EXPIRED",
  SPEAKER_ID_NOT_PROVIDED: "SPEAKER_ID_NOT_PROVIDED",
  SPEAKER_NOT_ENROLLED: "SPEAKER_NOT_ENROLLED",
  SPEAKER_OPTED_OUT: "SPEAKER_OPTED_OUT",
} as const;
/**
 * @public
 */
export type AuthenticationDecision = (typeof AuthenticationDecision)[keyof typeof AuthenticationDecision];

/**
 * @public
 * @enum
 */
export const DomainStatus = {
  ACTIVE: "ACTIVE",
  PENDING: "PENDING",
  SUSPENDED: "SUSPENDED",
} as const;
/**
 * @public
 */
export type DomainStatus = (typeof DomainStatus)[keyof typeof DomainStatus];

/**
 * @public
 * @enum
 */
export const ServerSideEncryptionUpdateStatus = {
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
} as const;
/**
 * @public
 */
export type ServerSideEncryptionUpdateStatus =
  (typeof ServerSideEncryptionUpdateStatus)[keyof typeof ServerSideEncryptionUpdateStatus];

/**
 * @public
 * @enum
 */
export const FraudsterRegistrationJobStatus = {
  COMPLETED: "COMPLETED",
  COMPLETED_WITH_ERRORS: "COMPLETED_WITH_ERRORS",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  SUBMITTED: "SUBMITTED",
} as const;
/**
 * @public
 */
export type FraudsterRegistrationJobStatus =
  (typeof FraudsterRegistrationJobStatus)[keyof typeof FraudsterRegistrationJobStatus];

/**
 * @public
 * @enum
 */
export const DuplicateRegistrationAction = {
  REGISTER_AS_NEW: "REGISTER_AS_NEW",
  SKIP: "SKIP",
} as const;
/**
 * @public
 */
export type DuplicateRegistrationAction =
  (typeof DuplicateRegistrationAction)[keyof typeof DuplicateRegistrationAction];

/**
 * @public
 * @enum
 */
export const SpeakerStatus = {
  ENROLLED: "ENROLLED",
  EXPIRED: "EXPIRED",
  OPTED_OUT: "OPTED_OUT",
  PENDING: "PENDING",
} as const;
/**
 * @public
 */
export type SpeakerStatus = (typeof SpeakerStatus)[keyof typeof SpeakerStatus];

/**
 * @public
 * @enum
 */
export const ExistingEnrollmentAction = {
  OVERWRITE: "OVERWRITE",
  SKIP: "SKIP",
} as const;
/**
 * @public
 */
export type ExistingEnrollmentAction = (typeof ExistingEnrollmentAction)[keyof typeof ExistingEnrollmentAction];

/**
 * @public
 * @enum
 */
export const FraudDetectionAction = {
  FAIL: "FAIL",
  IGNORE: "IGNORE",
} as const;
/**
 * @public
 */
export type FraudDetectionAction = (typeof FraudDetectionAction)[keyof typeof FraudDetectionAction];

/**
 * @public
 * @enum
 */
export const SpeakerEnrollmentJobStatus = {
  COMPLETED: "COMPLETED",
  COMPLETED_WITH_ERRORS: "COMPLETED_WITH_ERRORS",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  SUBMITTED: "SUBMITTED",
} as const;
/**
 * @public
 */
export type SpeakerEnrollmentJobStatus = (typeof SpeakerEnrollmentJobStatus)[keyof typeof SpeakerEnrollmentJobStatus];

/**
 * @public
 * @enum
 */
export const FraudDetectionDecision = {
  HIGH_RISK: "HIGH_RISK",
  LOW_RISK: "LOW_RISK",
  NOT_ENOUGH_SPEECH: "NOT_ENOUGH_SPEECH",
} as const;
/**
 * @public
 */
export type FraudDetectionDecision = (typeof FraudDetectionDecision)[keyof typeof FraudDetectionDecision];

/**
 * @public
 * @enum
 */
export const FraudDetectionReason = {
  KNOWN_FRAUDSTER: "KNOWN_FRAUDSTER",
  VOICE_SPOOFING: "VOICE_SPOOFING",
} as const;
/**
 * @public
 */
export type FraudDetectionReason = (typeof FraudDetectionReason)[keyof typeof FraudDetectionReason];

/**
 * @public
 * @enum
 */
export const StreamingStatus = {
  ENDED: "ENDED",
  ONGOING: "ONGOING",
  PENDING_CONFIGURATION: "PENDING_CONFIGURATION",
} as const;
/**
 * @public
 */
export type StreamingStatus = (typeof StreamingStatus)[keyof typeof StreamingStatus];
