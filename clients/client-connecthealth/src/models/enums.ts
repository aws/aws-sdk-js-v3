// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const SubscriptionStatus = {
  ACTIVE: "ACTIVE",
  DELETED: "DELETED",
  INACTIVE: "INACTIVE",
} as const;
/**
 * @public
 */
export type SubscriptionStatus = (typeof SubscriptionStatus)[keyof typeof SubscriptionStatus];

/**
 * @public
 * @enum
 */
export const PostStreamArtifactGenerationStatus = {
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
} as const;
/**
 * @public
 */
export type PostStreamArtifactGenerationStatus =
  (typeof PostStreamArtifactGenerationStatus)[keyof typeof PostStreamArtifactGenerationStatus];

/**
 * @public
 * @enum
 */
export const CustomTemplateBase = {
  BEHAVIORAL_SOAP: "BEHAVIORAL_SOAP",
  BIRP: "BIRP",
  DAP: "DAP",
  GIRPP: "GIRPP",
  HISTORY_AND_PHYSICAL: "HISTORY_AND_PHYSICAL",
  SIRP: "SIRP",
} as const;
/**
 * @public
 */
export type CustomTemplateBase = (typeof CustomTemplateBase)[keyof typeof CustomTemplateBase];

/**
 * @public
 * @enum
 */
export const ManagedNoteTemplate = {
  BEHAVIORAL_SOAP: "BEHAVIORAL_SOAP",
  BIRP: "BIRP",
  DAP: "DAP",
  GIRPP: "GIRPP",
  HISTORY_AND_PHYSICAL: "HISTORY_AND_PHYSICAL",
  PHYSICAL_SOAP: "PHYSICAL_SOAP",
  SIRP: "SIRP",
} as const;
/**
 * @public
 */
export type ManagedNoteTemplate = (typeof ManagedNoteTemplate)[keyof typeof ManagedNoteTemplate];

/**
 * @public
 * @enum
 */
export const EncryptionType = {
  AWS_OWNED_KEY: "AWS_OWNED_KEY",
  CUSTOMER_MANAGED_KEY: "CUSTOMER_MANAGED_KEY",
} as const;
/**
 * @public
 */
export type EncryptionType = (typeof EncryptionType)[keyof typeof EncryptionType];

/**
 * @public
 * @enum
 */
export const DomainStatus = {
  ACTIVE: "ACTIVE",
  DELETED: "DELETED",
  DELETING: "DELETING",
} as const;
/**
 * @public
 */
export type DomainStatus = (typeof DomainStatus)[keyof typeof DomainStatus];

/**
 * @public
 * @enum
 */
export const MedicalScribeParticipantRole = {
  CLINICIAN: "CLINICIAN",
  PATIENT: "PATIENT",
} as const;
/**
 * @public
 */
export type MedicalScribeParticipantRole =
  (typeof MedicalScribeParticipantRole)[keyof typeof MedicalScribeParticipantRole];

/**
 * @public
 * @enum
 */
export const MedicalScribeLanguageCode = {
  EN_US: "en-US",
} as const;
/**
 * @public
 */
export type MedicalScribeLanguageCode = (typeof MedicalScribeLanguageCode)[keyof typeof MedicalScribeLanguageCode];

/**
 * @public
 * @enum
 */
export const MedicalScribeMediaEncoding = {
  FLAC: "flac",
  PCM: "pcm",
} as const;
/**
 * @public
 */
export type MedicalScribeMediaEncoding = (typeof MedicalScribeMediaEncoding)[keyof typeof MedicalScribeMediaEncoding];

/**
 * @public
 * @enum
 */
export const MedicalScribeStreamStatus = {
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  PAUSED: "PAUSED",
} as const;
/**
 * @public
 */
export type MedicalScribeStreamStatus = (typeof MedicalScribeStreamStatus)[keyof typeof MedicalScribeStreamStatus];

/**
 * @public
 * @enum
 */
export const InsightsType = {
  PRE_VISIT: "PRE_VISIT",
} as const;
/**
 * @public
 */
export type InsightsType = (typeof InsightsType)[keyof typeof InsightsType];

/**
 * @public
 * @enum
 */
export const JobStatus = {
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  SUBMITTED: "SUBMITTED",
  SUCCEEDED: "SUCCEEDED",
} as const;
/**
 * @public
 */
export type JobStatus = (typeof JobStatus)[keyof typeof JobStatus];

/**
 * @public
 * @enum
 */
export const Pronouns = {
  HE_HIM: "HE_HIM",
  SHE_HER: "SHE_HER",
  THEY_THEM: "THEY_THEM",
} as const;
/**
 * @public
 */
export type Pronouns = (typeof Pronouns)[keyof typeof Pronouns];

/**
 * @public
 * @enum
 */
export const ProviderRole = {
  CLINICIAN: "CLINICIAN",
} as const;
/**
 * @public
 */
export type ProviderRole = (typeof ProviderRole)[keyof typeof ProviderRole];

/**
 * @public
 * @enum
 */
export const Specialty = {
  PRIMARY_CARE: "PRIMARY_CARE",
} as const;
/**
 * @public
 */
export type Specialty = (typeof Specialty)[keyof typeof Specialty];

/**
 * @public
 * @enum
 */
export const MedicalScribeSessionControlEventType = {
  END_OF_SESSION: "END_OF_SESSION",
} as const;
/**
 * @public
 */
export type MedicalScribeSessionControlEventType =
  (typeof MedicalScribeSessionControlEventType)[keyof typeof MedicalScribeSessionControlEventType];
