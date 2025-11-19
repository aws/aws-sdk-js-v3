// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const ChannelRole = {
  ASKER: "ASKER",
  EXPERT: "EXPERT",
  MODERATOR: "MODERATOR",
  SUPPORTREQUESTOR: "SUPPORTREQUESTOR",
} as const;
/**
 * @public
 */
export type ChannelRole = (typeof ChannelRole)[keyof typeof ChannelRole];

/**
 * @public
 * @enum
 */
export const ValidationExceptionReason = {
  CANNOT_PARSE: "cannotParse",
  FIELD_VALIDATION_FAILED: "fieldValidationFailed",
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
export const Role = {
  ADMINISTRATOR: "ADMINISTRATOR",
  EXPERT: "EXPERT",
  MODERATOR: "MODERATOR",
  SUPPORTREQUESTOR: "SUPPORTREQUESTOR",
} as const;
/**
 * @public
 */
export type Role = (typeof Role)[keyof typeof Role];

/**
 * @public
 * @enum
 */
export const ChannelStatus = {
  CREATED: "CREATED",
  CREATE_FAILED: "CREATE_FAILED",
  CREATING: "CREATING",
  DELETED: "DELETED",
  DELETE_FAILED: "DELETE_FAILED",
  DELETING: "DELETING",
} as const;
/**
 * @public
 */
export type ChannelStatus = (typeof ChannelStatus)[keyof typeof ChannelStatus];

/**
 * @public
 * @enum
 */
export const ConfigurationStatus = {
  CONFIGURED: "CONFIGURED",
  UNCONFIGURED: "UNCONFIGURED",
} as const;
/**
 * @public
 */
export type ConfigurationStatus = (typeof ConfigurationStatus)[keyof typeof ConfigurationStatus];

/**
 * @public
 * @enum
 */
export const FeatureEnableParameter = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type FeatureEnableParameter = (typeof FeatureEnableParameter)[keyof typeof FeatureEnableParameter];

/**
 * @public
 * @enum
 */
export const TierLevel = {
  BASIC: "BASIC",
  STANDARD: "STANDARD",
} as const;
/**
 * @public
 */
export type TierLevel = (typeof TierLevel)[keyof typeof TierLevel];

/**
 * @public
 * @enum
 */
export const FeatureEnableStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
  NOT_ALLOWED: "NOT_ALLOWED",
} as const;
/**
 * @public
 */
export type FeatureEnableStatus = (typeof FeatureEnableStatus)[keyof typeof FeatureEnableStatus];

/**
 * @public
 * @enum
 */
export const VanityDomainStatus = {
  APPROVED: "APPROVED",
  PENDING: "PENDING",
  UNAPPROVED: "UNAPPROVED",
} as const;
/**
 * @public
 */
export type VanityDomainStatus = (typeof VanityDomainStatus)[keyof typeof VanityDomainStatus];
