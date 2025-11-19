// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const EncryptionConfigurationType = {
  AWS_OWNED_KEY: "AWS_OWNED_KEY",
  CUSTOMER_MANAGED_KMS_KEY: "CUSTOMER_MANAGED_KMS_KEY",
} as const;
/**
 * @public
 */
export type EncryptionConfigurationType =
  (typeof EncryptionConfigurationType)[keyof typeof EncryptionConfigurationType];
