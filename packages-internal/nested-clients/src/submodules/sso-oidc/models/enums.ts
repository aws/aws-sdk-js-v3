// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const AccessDeniedExceptionReason = {
  KMS_ACCESS_DENIED: "KMS_AccessDeniedException",
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
export const InvalidRequestExceptionReason = {
  KMS_DISABLED_KEY: "KMS_DisabledException",
  KMS_INVALID_KEY_USAGE: "KMS_InvalidKeyUsageException",
  KMS_INVALID_STATE: "KMS_InvalidStateException",
  KMS_KEY_NOT_FOUND: "KMS_NotFoundException",
} as const;
/**
 * @public
 */
export type InvalidRequestExceptionReason =
  (typeof InvalidRequestExceptionReason)[keyof typeof InvalidRequestExceptionReason];
