// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const StatementEffect = {
  Allow: "Allow",
  Deny: "Deny",
} as const;
/**
 * @public
 */
export type StatementEffect = (typeof StatementEffect)[keyof typeof StatementEffect];

/**
 * @public
 * @enum
 */
export const AttributeMatchingModel = {
  MANY_TO_MANY: "MANY_TO_MANY",
  ONE_TO_ONE: "ONE_TO_ONE",
} as const;
/**
 * @public
 */
export type AttributeMatchingModel = (typeof AttributeMatchingModel)[keyof typeof AttributeMatchingModel];

/**
 * @public
 * @enum
 */
export const DeleteUniqueIdErrorType = {
  SERVICE_ERROR: "SERVICE_ERROR",
  VALIDATION_ERROR: "VALIDATION_ERROR",
} as const;
/**
 * @public
 */
export type DeleteUniqueIdErrorType = (typeof DeleteUniqueIdErrorType)[keyof typeof DeleteUniqueIdErrorType];

/**
 * @public
 * @enum
 */
export const DeleteUniqueIdStatus = {
  ACCEPTED: "ACCEPTED",
  COMPLETED: "COMPLETED",
} as const;
/**
 * @public
 */
export type DeleteUniqueIdStatus = (typeof DeleteUniqueIdStatus)[keyof typeof DeleteUniqueIdStatus];

/**
 * @public
 * @enum
 */
export const IdMappingType = {
  PROVIDER: "PROVIDER",
  RULE_BASED: "RULE_BASED",
} as const;
/**
 * @public
 */
export type IdMappingType = (typeof IdMappingType)[keyof typeof IdMappingType];

/**
 * @public
 * @enum
 */
export const RecordMatchingModel = {
  MANY_SOURCE_TO_ONE_TARGET: "MANY_SOURCE_TO_ONE_TARGET",
  ONE_SOURCE_TO_ONE_TARGET: "ONE_SOURCE_TO_ONE_TARGET",
} as const;
/**
 * @public
 */
export type RecordMatchingModel = (typeof RecordMatchingModel)[keyof typeof RecordMatchingModel];

/**
 * @public
 * @enum
 */
export const IdMappingWorkflowRuleDefinitionType = {
  SOURCE: "SOURCE",
  TARGET: "TARGET",
} as const;
/**
 * @public
 */
export type IdMappingWorkflowRuleDefinitionType =
  (typeof IdMappingWorkflowRuleDefinitionType)[keyof typeof IdMappingWorkflowRuleDefinitionType];

/**
 * @public
 * @enum
 */
export const IdMappingIncrementalRunType = {
  ON_DEMAND: "ON_DEMAND",
} as const;
/**
 * @public
 */
export type IdMappingIncrementalRunType =
  (typeof IdMappingIncrementalRunType)[keyof typeof IdMappingIncrementalRunType];

/**
 * @public
 * @enum
 */
export const IdNamespaceType = {
  SOURCE: "SOURCE",
  TARGET: "TARGET",
} as const;
/**
 * @public
 */
export type IdNamespaceType = (typeof IdNamespaceType)[keyof typeof IdNamespaceType];

/**
 * @public
 * @enum
 */
export const IncrementalRunType = {
  IMMEDIATE: "IMMEDIATE",
} as const;
/**
 * @public
 */
export type IncrementalRunType = (typeof IncrementalRunType)[keyof typeof IncrementalRunType];

/**
 * @public
 * @enum
 */
export const ResolutionType = {
  ML_MATCHING: "ML_MATCHING",
  PROVIDER: "PROVIDER",
  RULE_MATCHING: "RULE_MATCHING",
} as const;
/**
 * @public
 */
export type ResolutionType = (typeof ResolutionType)[keyof typeof ResolutionType];

/**
 * @public
 * @enum
 */
export const MatchPurpose = {
  IDENTIFIER_GENERATION: "IDENTIFIER_GENERATION",
  INDEXING: "INDEXING",
} as const;
/**
 * @public
 */
export type MatchPurpose = (typeof MatchPurpose)[keyof typeof MatchPurpose];

/**
 * @public
 * @enum
 */
export const SchemaAttributeType = {
  ADDRESS: "ADDRESS",
  ADDRESS_CITY: "ADDRESS_CITY",
  ADDRESS_COUNTRY: "ADDRESS_COUNTRY",
  ADDRESS_POSTALCODE: "ADDRESS_POSTALCODE",
  ADDRESS_STATE: "ADDRESS_STATE",
  ADDRESS_STREET1: "ADDRESS_STREET1",
  ADDRESS_STREET2: "ADDRESS_STREET2",
  ADDRESS_STREET3: "ADDRESS_STREET3",
  DATE: "DATE",
  EMAIL_ADDRESS: "EMAIL_ADDRESS",
  IPV4: "IPV4",
  IPV6: "IPV6",
  MAID: "MAID",
  NAME: "NAME",
  NAME_FIRST: "NAME_FIRST",
  NAME_LAST: "NAME_LAST",
  NAME_MIDDLE: "NAME_MIDDLE",
  PHONE: "PHONE",
  PHONE_COUNTRYCODE: "PHONE_COUNTRYCODE",
  PHONE_NUMBER: "PHONE_NUMBER",
  PROVIDER_ID: "PROVIDER_ID",
  STRING: "STRING",
  UNIQUE_ID: "UNIQUE_ID",
} as const;
/**
 * @public
 */
export type SchemaAttributeType = (typeof SchemaAttributeType)[keyof typeof SchemaAttributeType];

/**
 * @public
 * @enum
 */
export const ProcessingType = {
  CONSISTENT: "CONSISTENT",
  EVENTUAL: "EVENTUAL",
  EVENTUAL_NO_LOOKUP: "EVENTUAL_NO_LOOKUP",
} as const;
/**
 * @public
 */
export type ProcessingType = (typeof ProcessingType)[keyof typeof ProcessingType];

/**
 * @public
 * @enum
 */
export const JobType = {
  BATCH: "BATCH",
  DELETE_ONLY: "DELETE_ONLY",
  INCREMENTAL: "INCREMENTAL",
} as const;
/**
 * @public
 */
export type JobType = (typeof JobType)[keyof typeof JobType];

/**
 * @public
 * @enum
 */
export const JobStatus = {
  FAILED: "FAILED",
  QUEUED: "QUEUED",
  RUNNING: "RUNNING",
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
export const ServiceType = {
  ASSIGNMENT: "ASSIGNMENT",
  ID_MAPPING: "ID_MAPPING",
} as const;
/**
 * @public
 */
export type ServiceType = (typeof ServiceType)[keyof typeof ServiceType];
