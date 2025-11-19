// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const EntityType = {
  ANATOMY: "ANATOMY",
  BEHAVIORAL_ENVIRONMENTAL_SOCIAL: "BEHAVIORAL_ENVIRONMENTAL_SOCIAL",
  MEDICAL_CONDITION: "MEDICAL_CONDITION",
  MEDICATION: "MEDICATION",
  PROTECTED_HEALTH_INFORMATION: "PROTECTED_HEALTH_INFORMATION",
  TEST_TREATMENT_PROCEDURE: "TEST_TREATMENT_PROCEDURE",
  TIME_EXPRESSION: "TIME_EXPRESSION",
} as const;
/**
 * @public
 */
export type EntityType = (typeof EntityType)[keyof typeof EntityType];

/**
 * @public
 * @enum
 */
export const RelationshipType = {
  ACUITY: "ACUITY",
  ADMINISTERED_VIA: "ADMINISTERED_VIA",
  AMOUNT: "AMOUNT",
  DIRECTION: "DIRECTION",
  DOSAGE: "DOSAGE",
  DURATION: "DURATION",
  EVERY: "EVERY",
  FOR: "FOR",
  FORM: "FORM",
  FREQUENCY: "FREQUENCY",
  NEGATIVE: "NEGATIVE",
  OVERLAP: "OVERLAP",
  QUALITY: "QUALITY",
  RATE: "RATE",
  ROUTE_OR_MODE: "ROUTE_OR_MODE",
  STRENGTH: "STRENGTH",
  SYSTEM_ORGAN_SITE: "SYSTEM_ORGAN_SITE",
  TEST_UNIT: "TEST_UNIT",
  TEST_UNITS: "TEST_UNITS",
  TEST_VALUE: "TEST_VALUE",
  USAGE: "USAGE",
  WITH_DOSAGE: "WITH_DOSAGE",
} as const;
/**
 * @public
 */
export type RelationshipType = (typeof RelationshipType)[keyof typeof RelationshipType];

/**
 * @public
 * @enum
 */
export const AttributeName = {
  DIAGNOSIS: "DIAGNOSIS",
  FUTURE: "FUTURE",
  HYPOTHETICAL: "HYPOTHETICAL",
  LOW_CONFIDENCE: "LOW_CONFIDENCE",
  NEGATION: "NEGATION",
  PAST_HISTORY: "PAST_HISTORY",
  PERTAINS_TO_FAMILY: "PERTAINS_TO_FAMILY",
  SIGN: "SIGN",
  SYMPTOM: "SYMPTOM",
} as const;
/**
 * @public
 */
export type AttributeName = (typeof AttributeName)[keyof typeof AttributeName];

/**
 * @public
 * @enum
 */
export const EntitySubType = {
  ACUITY: "ACUITY",
  ADDRESS: "ADDRESS",
  AGE: "AGE",
  ALCOHOL_CONSUMPTION: "ALCOHOL_CONSUMPTION",
  ALLERGIES: "ALLERGIES",
  AMOUNT: "AMOUNT",
  BRAND_NAME: "BRAND_NAME",
  CONTACT_POINT: "CONTACT_POINT",
  DATE: "DATE",
  DIRECTION: "DIRECTION",
  DOSAGE: "DOSAGE",
  DURATION: "DURATION",
  DX_NAME: "DX_NAME",
  EMAIL: "EMAIL",
  FORM: "FORM",
  FREQUENCY: "FREQUENCY",
  GENDER: "GENDER",
  GENERIC_NAME: "GENERIC_NAME",
  ID: "ID",
  IDENTIFIER: "IDENTIFIER",
  NAME: "NAME",
  PHONE_OR_FAX: "PHONE_OR_FAX",
  PROCEDURE_NAME: "PROCEDURE_NAME",
  PROFESSION: "PROFESSION",
  QUALITY: "QUALITY",
  QUANTITY: "QUANTITY",
  RACE_ETHNICITY: "RACE_ETHNICITY",
  RATE: "RATE",
  REC_DRUG_USE: "REC_DRUG_USE",
  ROUTE_OR_MODE: "ROUTE_OR_MODE",
  STRENGTH: "STRENGTH",
  SYSTEM_ORGAN_SITE: "SYSTEM_ORGAN_SITE",
  TEST_NAME: "TEST_NAME",
  TEST_UNIT: "TEST_UNIT",
  TEST_UNITS: "TEST_UNITS",
  TEST_VALUE: "TEST_VALUE",
  TIME_EXPRESSION: "TIME_EXPRESSION",
  TIME_TO_DX_NAME: "TIME_TO_DX_NAME",
  TIME_TO_MEDICATION_NAME: "TIME_TO_MEDICATION_NAME",
  TIME_TO_PROCEDURE_NAME: "TIME_TO_PROCEDURE_NAME",
  TIME_TO_TEST_NAME: "TIME_TO_TEST_NAME",
  TIME_TO_TREATMENT_NAME: "TIME_TO_TREATMENT_NAME",
  TOBACCO_USE: "TOBACCO_USE",
  TREATMENT_NAME: "TREATMENT_NAME",
  URL: "URL",
} as const;
/**
 * @public
 */
export type EntitySubType = (typeof EntitySubType)[keyof typeof EntitySubType];

/**
 * @public
 * @enum
 */
export const JobStatus = {
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  PARTIAL_SUCCESS: "PARTIAL_SUCCESS",
  STOPPED: "STOPPED",
  STOP_REQUESTED: "STOP_REQUESTED",
  SUBMITTED: "SUBMITTED",
} as const;
/**
 * @public
 */
export type JobStatus = (typeof JobStatus)[keyof typeof JobStatus];

/**
 * @public
 * @enum
 */
export const LanguageCode = {
  EN: "en",
} as const;
/**
 * @public
 */
export type LanguageCode = (typeof LanguageCode)[keyof typeof LanguageCode];

/**
 * @public
 * @enum
 */
export const ICD10CMEntityType = {
  DX_NAME: "DX_NAME",
  TIME_EXPRESSION: "TIME_EXPRESSION",
} as const;
/**
 * @public
 */
export type ICD10CMEntityType = (typeof ICD10CMEntityType)[keyof typeof ICD10CMEntityType];

/**
 * @public
 * @enum
 */
export const ICD10CMRelationshipType = {
  OVERLAP: "OVERLAP",
  QUALITY: "QUALITY",
  SYSTEM_ORGAN_SITE: "SYSTEM_ORGAN_SITE",
} as const;
/**
 * @public
 */
export type ICD10CMRelationshipType = (typeof ICD10CMRelationshipType)[keyof typeof ICD10CMRelationshipType];

/**
 * @public
 * @enum
 */
export const ICD10CMTraitName = {
  DIAGNOSIS: "DIAGNOSIS",
  HYPOTHETICAL: "HYPOTHETICAL",
  LOW_CONFIDENCE: "LOW_CONFIDENCE",
  NEGATION: "NEGATION",
  PERTAINS_TO_FAMILY: "PERTAINS_TO_FAMILY",
  SIGN: "SIGN",
  SYMPTOM: "SYMPTOM",
} as const;
/**
 * @public
 */
export type ICD10CMTraitName = (typeof ICD10CMTraitName)[keyof typeof ICD10CMTraitName];

/**
 * @public
 * @enum
 */
export const ICD10CMAttributeType = {
  ACUITY: "ACUITY",
  DIRECTION: "DIRECTION",
  QUALITY: "QUALITY",
  QUANTITY: "QUANTITY",
  SYSTEM_ORGAN_SITE: "SYSTEM_ORGAN_SITE",
  TIME_EXPRESSION: "TIME_EXPRESSION",
  TIME_TO_DX_NAME: "TIME_TO_DX_NAME",
} as const;
/**
 * @public
 */
export type ICD10CMAttributeType = (typeof ICD10CMAttributeType)[keyof typeof ICD10CMAttributeType];

/**
 * @public
 * @enum
 */
export const ICD10CMEntityCategory = {
  MEDICAL_CONDITION: "MEDICAL_CONDITION",
} as const;
/**
 * @public
 */
export type ICD10CMEntityCategory = (typeof ICD10CMEntityCategory)[keyof typeof ICD10CMEntityCategory];

/**
 * @public
 * @enum
 */
export const RxNormTraitName = {
  NEGATION: "NEGATION",
  PAST_HISTORY: "PAST_HISTORY",
} as const;
/**
 * @public
 */
export type RxNormTraitName = (typeof RxNormTraitName)[keyof typeof RxNormTraitName];

/**
 * @public
 * @enum
 */
export const RxNormAttributeType = {
  DOSAGE: "DOSAGE",
  DURATION: "DURATION",
  FORM: "FORM",
  FREQUENCY: "FREQUENCY",
  RATE: "RATE",
  ROUTE_OR_MODE: "ROUTE_OR_MODE",
  STRENGTH: "STRENGTH",
} as const;
/**
 * @public
 */
export type RxNormAttributeType = (typeof RxNormAttributeType)[keyof typeof RxNormAttributeType];

/**
 * @public
 * @enum
 */
export const RxNormEntityCategory = {
  MEDICATION: "MEDICATION",
} as const;
/**
 * @public
 */
export type RxNormEntityCategory = (typeof RxNormEntityCategory)[keyof typeof RxNormEntityCategory];

/**
 * @public
 * @enum
 */
export const RxNormEntityType = {
  BRAND_NAME: "BRAND_NAME",
  GENERIC_NAME: "GENERIC_NAME",
} as const;
/**
 * @public
 */
export type RxNormEntityType = (typeof RxNormEntityType)[keyof typeof RxNormEntityType];

/**
 * @public
 * @enum
 */
export const SNOMEDCTEntityCategory = {
  ANATOMY: "ANATOMY",
  MEDICAL_CONDITION: "MEDICAL_CONDITION",
  TEST_TREATMENT_PROCEDURE: "TEST_TREATMENT_PROCEDURE",
} as const;
/**
 * @public
 */
export type SNOMEDCTEntityCategory = (typeof SNOMEDCTEntityCategory)[keyof typeof SNOMEDCTEntityCategory];

/**
 * @public
 * @enum
 */
export const SNOMEDCTRelationshipType = {
  ACUITY: "ACUITY",
  DIRECTION: "DIRECTION",
  QUALITY: "QUALITY",
  SYSTEM_ORGAN_SITE: "SYSTEM_ORGAN_SITE",
  TEST_UNIT: "TEST_UNIT",
  TEST_UNITS: "TEST_UNITS",
  TEST_VALUE: "TEST_VALUE",
} as const;
/**
 * @public
 */
export type SNOMEDCTRelationshipType = (typeof SNOMEDCTRelationshipType)[keyof typeof SNOMEDCTRelationshipType];

/**
 * @public
 * @enum
 */
export const SNOMEDCTTraitName = {
  DIAGNOSIS: "DIAGNOSIS",
  FUTURE: "FUTURE",
  HYPOTHETICAL: "HYPOTHETICAL",
  LOW_CONFIDENCE: "LOW_CONFIDENCE",
  NEGATION: "NEGATION",
  PAST_HISTORY: "PAST_HISTORY",
  PERTAINS_TO_FAMILY: "PERTAINS_TO_FAMILY",
  SIGN: "SIGN",
  SYMPTOM: "SYMPTOM",
} as const;
/**
 * @public
 */
export type SNOMEDCTTraitName = (typeof SNOMEDCTTraitName)[keyof typeof SNOMEDCTTraitName];

/**
 * @public
 * @enum
 */
export const SNOMEDCTAttributeType = {
  ACUITY: "ACUITY",
  DIRECTION: "DIRECTION",
  QUALITY: "QUALITY",
  SYSTEM_ORGAN_SITE: "SYSTEM_ORGAN_SITE",
  TEST_UNIT: "TEST_UNIT",
  TEST_VALUE: "TEST_VALUE",
} as const;
/**
 * @public
 */
export type SNOMEDCTAttributeType = (typeof SNOMEDCTAttributeType)[keyof typeof SNOMEDCTAttributeType];

/**
 * @public
 * @enum
 */
export const SNOMEDCTEntityType = {
  DX_NAME: "DX_NAME",
  PROCEDURE_NAME: "PROCEDURE_NAME",
  TEST_NAME: "TEST_NAME",
  TREATMENT_NAME: "TREATMENT_NAME",
} as const;
/**
 * @public
 */
export type SNOMEDCTEntityType = (typeof SNOMEDCTEntityType)[keyof typeof SNOMEDCTEntityType];
