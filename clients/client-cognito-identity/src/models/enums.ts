// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const AmbiguousRoleResolutionType = {
  AUTHENTICATED_ROLE: "AuthenticatedRole",
  DENY: "Deny",
} as const;
/**
 * @public
 */
export type AmbiguousRoleResolutionType =
  (typeof AmbiguousRoleResolutionType)[keyof typeof AmbiguousRoleResolutionType];

/**
 * @public
 * @enum
 */
export const ErrorCode = {
  ACCESS_DENIED: "AccessDenied",
  INTERNAL_SERVER_ERROR: "InternalServerError",
} as const;
/**
 * @public
 */
export type ErrorCode = (typeof ErrorCode)[keyof typeof ErrorCode];

/**
 * @public
 * @enum
 */
export const MappingRuleMatchType = {
  CONTAINS: "Contains",
  EQUALS: "Equals",
  NOT_EQUAL: "NotEqual",
  STARTS_WITH: "StartsWith",
} as const;
/**
 * @public
 */
export type MappingRuleMatchType = (typeof MappingRuleMatchType)[keyof typeof MappingRuleMatchType];

/**
 * @public
 * @enum
 */
export const RoleMappingType = {
  RULES: "Rules",
  TOKEN: "Token",
} as const;
/**
 * @public
 */
export type RoleMappingType = (typeof RoleMappingType)[keyof typeof RoleMappingType];
