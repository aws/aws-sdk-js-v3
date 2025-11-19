// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const AccessDeniedExceptionReason = {
  KMS_ACCESS_DENIED_EXCEPTION: "KMS_AccessDeniedException",
} as const;
/**
 * @public
 */
export type AccessDeniedExceptionReason =
  (typeof AccessDeniedExceptionReason)[keyof typeof AccessDeniedExceptionReason];

/**
 * @public
 * @enum
 */
export const PrincipalType = {
  GROUP: "GROUP",
  USER: "USER",
} as const;
/**
 * @public
 */
export type PrincipalType = (typeof PrincipalType)[keyof typeof PrincipalType];

/**
 * @public
 * @enum
 */
export const StatusValues = {
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  SUCCEEDED: "SUCCEEDED",
} as const;
/**
 * @public
 */
export type StatusValues = (typeof StatusValues)[keyof typeof StatusValues];

/**
 * @public
 * @enum
 */
export const TargetType = {
  AWS_ACCOUNT: "AWS_ACCOUNT",
} as const;
/**
 * @public
 */
export type TargetType = (typeof TargetType)[keyof typeof TargetType];

/**
 * @public
 * @enum
 */
export const SignInOrigin = {
  APPLICATION: "APPLICATION",
  IDENTITY_CENTER: "IDENTITY_CENTER",
} as const;
/**
 * @public
 */
export type SignInOrigin = (typeof SignInOrigin)[keyof typeof SignInOrigin];

/**
 * @public
 * @enum
 */
export const ApplicationVisibility = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type ApplicationVisibility = (typeof ApplicationVisibility)[keyof typeof ApplicationVisibility];

/**
 * @public
 * @enum
 */
export const ApplicationStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type ApplicationStatus = (typeof ApplicationStatus)[keyof typeof ApplicationStatus];

/**
 * @public
 * @enum
 */
export const ResourceNotFoundExceptionReason = {
  KMS_NOT_FOUND_EXCEPTION: "KMS_NotFoundException",
} as const;
/**
 * @public
 */
export type ResourceNotFoundExceptionReason =
  (typeof ResourceNotFoundExceptionReason)[keyof typeof ResourceNotFoundExceptionReason];

/**
 * @public
 * @enum
 */
export const ThrottlingExceptionReason = {
  KMS_THROTTLING_EXCEPTION: "KMS_ThrottlingException",
} as const;
/**
 * @public
 */
export type ThrottlingExceptionReason = (typeof ThrottlingExceptionReason)[keyof typeof ThrottlingExceptionReason];

/**
 * @public
 * @enum
 */
export const ValidationExceptionReason = {
  KMS_DISABLED_EXCEPTION: "KMS_DisabledException",
  KMS_INVALID_KEY_USAGE_EXCEPTION: "KMS_InvalidKeyUsageException",
  KMS_INVALID_STATE_EXCEPTION: "KMS_InvalidStateException",
} as const;
/**
 * @public
 */
export type ValidationExceptionReason = (typeof ValidationExceptionReason)[keyof typeof ValidationExceptionReason];

/**
 * @public
 * @enum
 */
export const AuthenticationMethodType = {
  IAM: "IAM",
} as const;
/**
 * @public
 */
export type AuthenticationMethodType = (typeof AuthenticationMethodType)[keyof typeof AuthenticationMethodType];

/**
 * @public
 * @enum
 */
export const GrantType = {
  AUTHORIZATION_CODE: "authorization_code",
  JWT_BEARER: "urn:ietf:params:oauth:grant-type:jwt-bearer",
  REFRESH_TOKEN: "refresh_token",
  TOKEN_EXCHANGE: "urn:ietf:params:oauth:grant-type:token-exchange",
} as const;
/**
 * @public
 */
export type GrantType = (typeof GrantType)[keyof typeof GrantType];

/**
 * @public
 * @enum
 */
export const FederationProtocol = {
  OAUTH: "OAUTH",
  SAML: "SAML",
} as const;
/**
 * @public
 */
export type FederationProtocol = (typeof FederationProtocol)[keyof typeof FederationProtocol];

/**
 * @public
 * @enum
 */
export const JwksRetrievalOption = {
  OPEN_ID_DISCOVERY: "OPEN_ID_DISCOVERY",
} as const;
/**
 * @public
 */
export type JwksRetrievalOption = (typeof JwksRetrievalOption)[keyof typeof JwksRetrievalOption];

/**
 * @public
 * @enum
 */
export const TrustedTokenIssuerType = {
  OIDC_JWT: "OIDC_JWT",
} as const;
/**
 * @public
 */
export type TrustedTokenIssuerType = (typeof TrustedTokenIssuerType)[keyof typeof TrustedTokenIssuerType];

/**
 * @public
 * @enum
 */
export const KmsKeyStatus = {
  ENABLED: "ENABLED",
  UPDATE_FAILED: "UPDATE_FAILED",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type KmsKeyStatus = (typeof KmsKeyStatus)[keyof typeof KmsKeyStatus];

/**
 * @public
 * @enum
 */
export const KmsKeyType = {
  AWS_OWNED_KMS_KEY: "AWS_OWNED_KMS_KEY",
  CUSTOMER_MANAGED_KEY: "CUSTOMER_MANAGED_KEY",
} as const;
/**
 * @public
 */
export type KmsKeyType = (typeof KmsKeyType)[keyof typeof KmsKeyType];

/**
 * @public
 * @enum
 */
export const InstanceStatus = {
  ACTIVE: "ACTIVE",
  CREATE_FAILED: "CREATE_FAILED",
  CREATE_IN_PROGRESS: "CREATE_IN_PROGRESS",
  DELETE_IN_PROGRESS: "DELETE_IN_PROGRESS",
} as const;
/**
 * @public
 */
export type InstanceStatus = (typeof InstanceStatus)[keyof typeof InstanceStatus];

/**
 * @public
 * @enum
 */
export const InstanceAccessControlAttributeConfigurationStatus = {
  CREATION_FAILED: "CREATION_FAILED",
  CREATION_IN_PROGRESS: "CREATION_IN_PROGRESS",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type InstanceAccessControlAttributeConfigurationStatus =
  (typeof InstanceAccessControlAttributeConfigurationStatus)[keyof typeof InstanceAccessControlAttributeConfigurationStatus];

/**
 * @public
 * @enum
 */
export const UserBackgroundSessionApplicationStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type UserBackgroundSessionApplicationStatus =
  (typeof UserBackgroundSessionApplicationStatus)[keyof typeof UserBackgroundSessionApplicationStatus];

/**
 * @public
 * @enum
 */
export const ProvisioningStatus = {
  LATEST_PERMISSION_SET_NOT_PROVISIONED: "LATEST_PERMISSION_SET_NOT_PROVISIONED",
  LATEST_PERMISSION_SET_PROVISIONED: "LATEST_PERMISSION_SET_PROVISIONED",
} as const;
/**
 * @public
 */
export type ProvisioningStatus = (typeof ProvisioningStatus)[keyof typeof ProvisioningStatus];

/**
 * @public
 * @enum
 */
export const ProvisionTargetType = {
  ALL_PROVISIONED_ACCOUNTS: "ALL_PROVISIONED_ACCOUNTS",
  AWS_ACCOUNT: "AWS_ACCOUNT",
} as const;
/**
 * @public
 */
export type ProvisionTargetType = (typeof ProvisionTargetType)[keyof typeof ProvisionTargetType];
