// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const AccessDeniedReason = {
  DATA_DISABLED: "DATA_DISABLED",
  DIRECTORY_AUTH: "DIRECTORY_AUTH",
  IAM_AUTH: "IAM_AUTH",
} as const;
/**
 * @public
 */
export type AccessDeniedReason = (typeof AccessDeniedReason)[keyof typeof AccessDeniedReason];

/**
 * @public
 * @enum
 */
export const DirectoryUnavailableReason = {
  DIRECTORY_RESOURCES_EXCEEDED: "DIRECTORY_RESOURCES_EXCEEDED",
  DIRECTORY_TIMEOUT: "DIRECTORY_TIMEOUT",
  INVALID_DIRECTORY_STATE: "INVALID_DIRECTORY_STATE",
  NO_DISK_SPACE: "NO_DISK_SPACE",
  TRUST_AUTH_FAILURE: "TRUST_AUTH_FAILURE",
} as const;
/**
 * @public
 */
export type DirectoryUnavailableReason = (typeof DirectoryUnavailableReason)[keyof typeof DirectoryUnavailableReason];

/**
 * @public
 * @enum
 */
export const ValidationExceptionReason = {
  ATTRIBUTE_EXISTS: "ATTRIBUTE_EXISTS",
  DUPLICATE_ATTRIBUTE: "DUPLICATE_ATTRIBUTE",
  INVALID_ATTRIBUTE_FOR_GROUP: "INVALID_ATTRIBUTE_FOR_GROUP",
  INVALID_ATTRIBUTE_FOR_MODIFY: "INVALID_ATTRIBUTE_FOR_MODIFY",
  INVALID_ATTRIBUTE_FOR_SEARCH: "INVALID_ATTRIBUTE_FOR_SEARCH",
  INVALID_ATTRIBUTE_FOR_USER: "INVALID_ATTRIBUTE_FOR_USER",
  INVALID_ATTRIBUTE_NAME: "INVALID_ATTRIBUTE_NAME",
  INVALID_ATTRIBUTE_VALUE: "INVALID_ATTRIBUTE_VALUE",
  INVALID_DIRECTORY_TYPE: "INVALID_DIRECTORY_TYPE",
  INVALID_NEXT_TOKEN: "INVALID_NEXT_TOKEN",
  INVALID_REALM: "INVALID_REALM",
  INVALID_SECONDARY_REGION: "INVALID_SECONDARY_REGION",
  LDAP_SIZE_LIMIT_EXCEEDED: "LDAP_SIZE_LIMIT_EXCEEDED",
  LDAP_UNSUPPORTED_OPERATION: "LDAP_UNSUPPORTED_OPERATION",
  MISSING_ATTRIBUTE: "MISSING_ATTRIBUTE",
} as const;
/**
 * @public
 */
export type ValidationExceptionReason = (typeof ValidationExceptionReason)[keyof typeof ValidationExceptionReason];

/**
 * @public
 * @enum
 */
export const GroupScope = {
  BUILTIN_LOCAL: "BuiltinLocal",
  DOMAIN_LOCAL: "DomainLocal",
  GLOBAL: "Global",
  UNIVERSAL: "Universal",
} as const;
/**
 * @public
 */
export type GroupScope = (typeof GroupScope)[keyof typeof GroupScope];

/**
 * @public
 * @enum
 */
export const GroupType = {
  DISTRIBUTION: "Distribution",
  SECURITY: "Security",
} as const;
/**
 * @public
 */
export type GroupType = (typeof GroupType)[keyof typeof GroupType];

/**
 * @public
 * @enum
 */
export const MemberType = {
  COMPUTER: "COMPUTER",
  GROUP: "GROUP",
  USER: "USER",
} as const;
/**
 * @public
 */
export type MemberType = (typeof MemberType)[keyof typeof MemberType];

/**
 * @public
 * @enum
 */
export const UpdateType = {
  ADD: "ADD",
  REMOVE: "REMOVE",
  REPLACE: "REPLACE",
} as const;
/**
 * @public
 */
export type UpdateType = (typeof UpdateType)[keyof typeof UpdateType];
