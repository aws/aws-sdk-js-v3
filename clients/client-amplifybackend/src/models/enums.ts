// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const AdditionalConstraintsElement = {
  REQUIRE_DIGIT: "REQUIRE_DIGIT",
  REQUIRE_LOWERCASE: "REQUIRE_LOWERCASE",
  REQUIRE_SYMBOL: "REQUIRE_SYMBOL",
  REQUIRE_UPPERCASE: "REQUIRE_UPPERCASE",
} as const;
/**
 * @public
 */
export type AdditionalConstraintsElement =
  (typeof AdditionalConstraintsElement)[keyof typeof AdditionalConstraintsElement];

/**
 * @public
 * @enum
 */
export const Mode = {
  AMAZON_COGNITO_USER_POOLS: "AMAZON_COGNITO_USER_POOLS",
  API_KEY: "API_KEY",
  AWS_IAM: "AWS_IAM",
  OPENID_CONNECT: "OPENID_CONNECT",
} as const;
/**
 * @public
 */
export type Mode = (typeof Mode)[keyof typeof Mode];

/**
 * @public
 * @enum
 */
export const ResolutionStrategy = {
  AUTOMERGE: "AUTOMERGE",
  LAMBDA: "LAMBDA",
  NONE: "NONE",
  OPTIMISTIC_CONCURRENCY: "OPTIMISTIC_CONCURRENCY",
} as const;
/**
 * @public
 */
export type ResolutionStrategy = (typeof ResolutionStrategy)[keyof typeof ResolutionStrategy];

/**
 * @public
 * @enum
 */
export const AuthResources = {
  IDENTITY_POOL_AND_USER_POOL: "IDENTITY_POOL_AND_USER_POOL",
  USER_POOL_ONLY: "USER_POOL_ONLY",
} as const;
/**
 * @public
 */
export type AuthResources = (typeof AuthResources)[keyof typeof AuthResources];

/**
 * @public
 * @enum
 */
export const Service = {
  COGNITO: "COGNITO",
} as const;
/**
 * @public
 */
export type Service = (typeof Service)[keyof typeof Service];

/**
 * @public
 * @enum
 */
export const DeliveryMethod = {
  EMAIL: "EMAIL",
  SMS: "SMS",
} as const;
/**
 * @public
 */
export type DeliveryMethod = (typeof DeliveryMethod)[keyof typeof DeliveryMethod];

/**
 * @public
 * @enum
 */
export const MFAMode = {
  OFF: "OFF",
  ON: "ON",
  OPTIONAL: "OPTIONAL",
} as const;
/**
 * @public
 */
export type MFAMode = (typeof MFAMode)[keyof typeof MFAMode];

/**
 * @public
 * @enum
 */
export const MfaTypesElement = {
  SMS: "SMS",
  TOTP: "TOTP",
} as const;
/**
 * @public
 */
export type MfaTypesElement = (typeof MfaTypesElement)[keyof typeof MfaTypesElement];

/**
 * @public
 * @enum
 */
export const OAuthGrantType = {
  CODE: "CODE",
  IMPLICIT: "IMPLICIT",
} as const;
/**
 * @public
 */
export type OAuthGrantType = (typeof OAuthGrantType)[keyof typeof OAuthGrantType];

/**
 * @public
 * @enum
 */
export const OAuthScopesElement = {
  AWS_COGNITO_SIGNIN_USER_ADMIN: "AWS_COGNITO_SIGNIN_USER_ADMIN",
  EMAIL: "EMAIL",
  OPENID: "OPENID",
  PHONE: "PHONE",
  PROFILE: "PROFILE",
} as const;
/**
 * @public
 */
export type OAuthScopesElement = (typeof OAuthScopesElement)[keyof typeof OAuthScopesElement];

/**
 * @public
 * @enum
 */
export const RequiredSignUpAttributesElement = {
  ADDRESS: "ADDRESS",
  BIRTHDATE: "BIRTHDATE",
  EMAIL: "EMAIL",
  FAMILY_NAME: "FAMILY_NAME",
  GENDER: "GENDER",
  GIVEN_NAME: "GIVEN_NAME",
  LOCALE: "LOCALE",
  MIDDLE_NAME: "MIDDLE_NAME",
  NAME: "NAME",
  NICKNAME: "NICKNAME",
  PHONE_NUMBER: "PHONE_NUMBER",
  PICTURE: "PICTURE",
  PREFERRED_USERNAME: "PREFERRED_USERNAME",
  PROFILE: "PROFILE",
  UPDATED_AT: "UPDATED_AT",
  WEBSITE: "WEBSITE",
  ZONE_INFO: "ZONE_INFO",
} as const;
/**
 * @public
 */
export type RequiredSignUpAttributesElement =
  (typeof RequiredSignUpAttributesElement)[keyof typeof RequiredSignUpAttributesElement];

/**
 * @public
 * @enum
 */
export const SignInMethod = {
  EMAIL: "EMAIL",
  EMAIL_AND_PHONE_NUMBER: "EMAIL_AND_PHONE_NUMBER",
  PHONE_NUMBER: "PHONE_NUMBER",
  USERNAME: "USERNAME",
} as const;
/**
 * @public
 */
export type SignInMethod = (typeof SignInMethod)[keyof typeof SignInMethod];

/**
 * @public
 * @enum
 */
export const AuthenticatedElement = {
  CREATE_AND_UPDATE: "CREATE_AND_UPDATE",
  DELETE: "DELETE",
  READ: "READ",
} as const;
/**
 * @public
 */
export type AuthenticatedElement = (typeof AuthenticatedElement)[keyof typeof AuthenticatedElement];

/**
 * @public
 * @enum
 */
export const UnAuthenticatedElement = {
  CREATE_AND_UPDATE: "CREATE_AND_UPDATE",
  DELETE: "DELETE",
  READ: "READ",
} as const;
/**
 * @public
 */
export type UnAuthenticatedElement = (typeof UnAuthenticatedElement)[keyof typeof UnAuthenticatedElement];

/**
 * @public
 * @enum
 */
export const ServiceName = {
  S3: "S3",
} as const;
/**
 * @public
 */
export type ServiceName = (typeof ServiceName)[keyof typeof ServiceName];

/**
 * @public
 * @enum
 */
export const Status = {
  LATEST: "LATEST",
  STALE: "STALE",
} as const;
/**
 * @public
 */
export type Status = (typeof Status)[keyof typeof Status];
