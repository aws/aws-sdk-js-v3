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
  PENDING: "PENDING",
  SKIPPED: "SKIPPED",
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
export const ChecklistItemStatus = {
  DISCUSSED: "DISCUSSED",
  NOT_DISCUSSED: "NOT_DISCUSSED",
  PARTIALLY_DISCUSSED: "PARTIALLY_DISCUSSED",
} as const;
/**
 * @public
 */
export type ChecklistItemStatus = (typeof ChecklistItemStatus)[keyof typeof ChecklistItemStatus];

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
export const DatasetStatus = {
  /**
   * The dataset is ready and can be referenced by feature requests.
   */
  ACTIVE: "ACTIVE",
  /**
   * Building the dataset failed. Nothing usable was built; delete the dataset to free its quota slot. See statusDetails.
   */
  CREATE_FAILED: "CREATE_FAILED",
  /**
   * The dataset is being built.
   */
  CREATING: "CREATING",
  /**
   * The dataset and its provisioned resources have been deleted. Not returned by GetDataset or ListDatasets.
   */
  DELETED: "DELETED",
  /**
   * Deleting the dataset failed partway, so some provisioned resources may remain. Call DeleteDataset again to finish. See statusDetails.
   */
  DELETE_FAILED: "DELETE_FAILED",
  /**
   * The dataset and its provisioned resources are being deleted.
   */
  DELETING: "DELETING",
} as const;
/**
 * @public
 */
export type DatasetStatus = (typeof DatasetStatus)[keyof typeof DatasetStatus];

/**
 * @public
 * @enum
 */
export const DatasetType = {
  /**
   * Coded examples used to tailor medical coding.
   */
  MEDICAL_CODING: "MEDICAL_CODING",
} as const;
/**
 * @public
 */
export type DatasetType = (typeof DatasetType)[keyof typeof DatasetType];

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
export const EncounterType = {
  IN_PERSON: "IN_PERSON",
  TELEHEALTH: "TELEHEALTH",
} as const;
/**
 * @public
 */
export type EncounterType = (typeof EncounterType)[keyof typeof EncounterType];

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
export const Sex = {
  FEMALE: "FEMALE",
  MALE: "MALE",
  NON_BINARY: "NON_BINARY",
  UNKNOWN: "UNKNOWN",
} as const;
/**
 * @public
 */
export type Sex = (typeof Sex)[keyof typeof Sex];

/**
 * @public
 * @enum
 */
export const PatientStatus = {
  ESTABLISHED: "ESTABLISHED",
  NEW: "NEW",
} as const;
/**
 * @public
 */
export type PatientStatus = (typeof PatientStatus)[keyof typeof PatientStatus];

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
  MULTI: "multi",
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

/**
 * @public
 * @enum
 */
export const PeriodontalReviewReason = {
  LINE_UNCLEAR: "LINE_UNCLEAR",
  MEASUREMENT_NOT_CHARTED: "MEASUREMENT_NOT_CHARTED",
  MISSING_TOOTH_CONFLICT: "MISSING_TOOTH_CONFLICT",
  READING_COUNT_MISMATCH: "READING_COUNT_MISMATCH",
  SESSION_ISSUE: "SESSION_ISSUE",
  SITE_NOT_CHARTED: "SITE_NOT_CHARTED",
  TOOTH_UNCLEAR: "TOOTH_UNCLEAR",
  VALUE_NOT_CHARTED: "VALUE_NOT_CHARTED",
} as const;
/**
 * @public
 */
export type PeriodontalReviewReason = (typeof PeriodontalReviewReason)[keyof typeof PeriodontalReviewReason];

/**
 * @public
 * @enum
 */
export const PeriodontalSiteName = {
  BUCCAL: "B",
  DISTOBUCCAL: "DB",
  DISTOLINGUAL: "DL",
  LINGUAL: "L",
  MESIOBUCCAL: "MB",
  MESIOLINGUAL: "ML",
} as const;
/**
 * @public
 */
export type PeriodontalSiteName = (typeof PeriodontalSiteName)[keyof typeof PeriodontalSiteName];

/**
 * @public
 * @enum
 */
export const FeedbackArtifactType = {
  CLINICAL_DOC: "CLINICAL_DOC",
  MEDICAL_CODES: "MEDICAL_CODES",
} as const;
/**
 * @public
 */
export type FeedbackArtifactType = (typeof FeedbackArtifactType)[keyof typeof FeedbackArtifactType];
