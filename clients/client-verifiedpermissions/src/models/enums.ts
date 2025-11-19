// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const BatchGetPolicyErrorCode = {
  POLICY_NOT_FOUND: "POLICY_NOT_FOUND",
  POLICY_STORE_NOT_FOUND: "POLICY_STORE_NOT_FOUND",
} as const;
/**
 * @public
 */
export type BatchGetPolicyErrorCode = (typeof BatchGetPolicyErrorCode)[keyof typeof BatchGetPolicyErrorCode];

/**
 * @public
 * @enum
 */
export const PolicyType = {
  STATIC: "STATIC",
  TEMPLATE_LINKED: "TEMPLATE_LINKED",
} as const;
/**
 * @public
 */
export type PolicyType = (typeof PolicyType)[keyof typeof PolicyType];

/**
 * @public
 * @enum
 */
export const Decision = {
  ALLOW: "ALLOW",
  DENY: "DENY",
} as const;
/**
 * @public
 */
export type Decision = (typeof Decision)[keyof typeof Decision];

/**
 * @public
 * @enum
 */
export const ResourceType = {
  IDENTITY_SOURCE: "IDENTITY_SOURCE",
  POLICY: "POLICY",
  POLICY_STORE: "POLICY_STORE",
  POLICY_TEMPLATE: "POLICY_TEMPLATE",
  SCHEMA: "SCHEMA",
} as const;
/**
 * @public
 */
export type ResourceType = (typeof ResourceType)[keyof typeof ResourceType];

/**
 * @public
 * @enum
 */
export const CedarVersion = {
  CEDAR_2: "CEDAR_2",
  CEDAR_4: "CEDAR_4",
} as const;
/**
 * @public
 */
export type CedarVersion = (typeof CedarVersion)[keyof typeof CedarVersion];

/**
 * @public
 * @enum
 */
export const PolicyEffect = {
  FORBID: "Forbid",
  PERMIT: "Permit",
} as const;
/**
 * @public
 */
export type PolicyEffect = (typeof PolicyEffect)[keyof typeof PolicyEffect];

/**
 * @public
 * @enum
 */
export const DeletionProtection = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type DeletionProtection = (typeof DeletionProtection)[keyof typeof DeletionProtection];

/**
 * @public
 * @enum
 */
export const ValidationMode = {
  OFF: "OFF",
  STRICT: "STRICT",
} as const;
/**
 * @public
 */
export type ValidationMode = (typeof ValidationMode)[keyof typeof ValidationMode];

/**
 * @public
 * @enum
 */
export const OpenIdIssuer = {
  COGNITO: "COGNITO",
} as const;
/**
 * @public
 */
export type OpenIdIssuer = (typeof OpenIdIssuer)[keyof typeof OpenIdIssuer];
