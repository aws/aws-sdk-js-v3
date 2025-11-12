// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { PaymentCryptographyServiceException as __BaseException } from "./PaymentCryptographyServiceException";

/**
 * <p>You do not have sufficient access to perform this action.</p> <p>This exception is thrown when the caller lacks the necessary IAM permissions to perform the requested operation. Verify that your IAM policy includes the required permissions for the specific Amazon Web Services Payment Cryptography action you're attempting.</p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessDeniedException, __BaseException>) {
    super({
      name: "AccessDeniedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessDeniedException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Input parameters for adding replication regions to a specific key.</p>
 * @public
 */
export interface AddKeyReplicationRegionsInput {
  /**
   * <p>The key identifier (ARN or alias) of the key for which to add replication regions.</p> <p>This key must exist and be in a valid state for replication operations.</p>
   * @public
   */
  KeyIdentifier: string | undefined;

  /**
   * <p>The list of Amazon Web Services Regions to add to the key's replication configuration.</p> <p>Each region must be a valid Amazon Web Services Region where Amazon Web Services Payment Cryptography is available. The key will be replicated to these regions, allowing cryptographic operations to be performed closer to your applications.</p>
   * @public
   */
  ReplicationRegions: string[] | undefined;
}

/**
 * @public
 * @enum
 */
export const DeriveKeyUsage = {
  TR31_B0_BASE_DERIVATION_KEY: "TR31_B0_BASE_DERIVATION_KEY",
  TR31_C0_CARD_VERIFICATION_KEY: "TR31_C0_CARD_VERIFICATION_KEY",
  TR31_D0_SYMMETRIC_DATA_ENCRYPTION_KEY: "TR31_D0_SYMMETRIC_DATA_ENCRYPTION_KEY",
  TR31_E0_EMV_MKEY_APP_CRYPTOGRAMS: "TR31_E0_EMV_MKEY_APP_CRYPTOGRAMS",
  TR31_E1_EMV_MKEY_CONFIDENTIALITY: "TR31_E1_EMV_MKEY_CONFIDENTIALITY",
  TR31_E2_EMV_MKEY_INTEGRITY: "TR31_E2_EMV_MKEY_INTEGRITY",
  TR31_E4_EMV_MKEY_DYNAMIC_NUMBERS: "TR31_E4_EMV_MKEY_DYNAMIC_NUMBERS",
  TR31_E5_EMV_MKEY_CARD_PERSONALIZATION: "TR31_E5_EMV_MKEY_CARD_PERSONALIZATION",
  TR31_E6_EMV_MKEY_OTHER: "TR31_E6_EMV_MKEY_OTHER",
  TR31_K0_KEY_ENCRYPTION_KEY: "TR31_K0_KEY_ENCRYPTION_KEY",
  TR31_K1_KEY_BLOCK_PROTECTION_KEY: "TR31_K1_KEY_BLOCK_PROTECTION_KEY",
  TR31_M1_ISO_9797_1_MAC_KEY: "TR31_M1_ISO_9797_1_MAC_KEY",
  TR31_M3_ISO_9797_3_MAC_KEY: "TR31_M3_ISO_9797_3_MAC_KEY",
  TR31_M6_ISO_9797_5_CMAC_KEY: "TR31_M6_ISO_9797_5_CMAC_KEY",
  TR31_M7_HMAC_KEY: "TR31_M7_HMAC_KEY",
  TR31_P0_PIN_ENCRYPTION_KEY: "TR31_P0_PIN_ENCRYPTION_KEY",
  TR31_P1_PIN_GENERATION_KEY: "TR31_P1_PIN_GENERATION_KEY",
  TR31_V1_IBM3624_PIN_VERIFICATION_KEY: "TR31_V1_IBM3624_PIN_VERIFICATION_KEY",
  TR31_V2_VISA_PIN_VERIFICATION_KEY: "TR31_V2_VISA_PIN_VERIFICATION_KEY",
} as const;

/**
 * @public
 */
export type DeriveKeyUsage = (typeof DeriveKeyUsage)[keyof typeof DeriveKeyUsage];

/**
 * @public
 * @enum
 */
export const KeyAlgorithm = {
  AES_128: "AES_128",
  AES_192: "AES_192",
  AES_256: "AES_256",
  ECC_NIST_P256: "ECC_NIST_P256",
  ECC_NIST_P384: "ECC_NIST_P384",
  ECC_NIST_P521: "ECC_NIST_P521",
  HMAC_SHA224: "HMAC_SHA224",
  HMAC_SHA256: "HMAC_SHA256",
  HMAC_SHA384: "HMAC_SHA384",
  HMAC_SHA512: "HMAC_SHA512",
  RSA_2048: "RSA_2048",
  RSA_3072: "RSA_3072",
  RSA_4096: "RSA_4096",
  TDES_2KEY: "TDES_2KEY",
  TDES_3KEY: "TDES_3KEY",
} as const;

/**
 * @public
 */
export type KeyAlgorithm = (typeof KeyAlgorithm)[keyof typeof KeyAlgorithm];

/**
 * @public
 * @enum
 */
export const KeyClass = {
  ASYMMETRIC_KEY_PAIR: "ASYMMETRIC_KEY_PAIR",
  PRIVATE_KEY: "PRIVATE_KEY",
  PUBLIC_KEY: "PUBLIC_KEY",
  SYMMETRIC_KEY: "SYMMETRIC_KEY",
} as const;

/**
 * @public
 */
export type KeyClass = (typeof KeyClass)[keyof typeof KeyClass];

/**
 * <p>The list of cryptographic operations that you can perform using the key. The modes of use are deﬁned in section A.5.3 of the TR-31 spec.</p>
 * @public
 */
export interface KeyModesOfUse {
  /**
   * <p>Speciﬁes whether an Amazon Web Services Payment Cryptography key can be used to encrypt data.</p>
   * @public
   */
  Encrypt?: boolean | undefined;

  /**
   * <p>Speciﬁes whether an Amazon Web Services Payment Cryptography key can be used to decrypt data.</p>
   * @public
   */
  Decrypt?: boolean | undefined;

  /**
   * <p>Speciﬁes whether an Amazon Web Services Payment Cryptography key can be used to wrap other keys.</p>
   * @public
   */
  Wrap?: boolean | undefined;

  /**
   * <p>Speciﬁes whether an Amazon Web Services Payment Cryptography key can be used to unwrap other keys.</p>
   * @public
   */
  Unwrap?: boolean | undefined;

  /**
   * <p>Speciﬁes whether an Amazon Web Services Payment Cryptography key can be used to generate and verify other card and PIN verification keys.</p>
   * @public
   */
  Generate?: boolean | undefined;

  /**
   * <p>Speciﬁes whether an Amazon Web Services Payment Cryptography key can be used for signing.</p>
   * @public
   */
  Sign?: boolean | undefined;

  /**
   * <p>Speciﬁes whether an Amazon Web Services Payment Cryptography key can be used to verify signatures.</p>
   * @public
   */
  Verify?: boolean | undefined;

  /**
   * <p>Speciﬁes whether an Amazon Web Services Payment Cryptography key can be used to derive new keys.</p>
   * @public
   */
  DeriveKey?: boolean | undefined;

  /**
   * <p>Speciﬁes whether an Amazon Web Services Payment Cryptography key has no special restrictions other than the restrictions implied by <code>KeyUsage</code>.</p>
   * @public
   */
  NoRestrictions?: boolean | undefined;
}

/**
 * @public
 * @enum
 */
export const KeyUsage = {
  TR31_B0_BASE_DERIVATION_KEY: "TR31_B0_BASE_DERIVATION_KEY",
  TR31_C0_CARD_VERIFICATION_KEY: "TR31_C0_CARD_VERIFICATION_KEY",
  TR31_D0_SYMMETRIC_DATA_ENCRYPTION_KEY: "TR31_D0_SYMMETRIC_DATA_ENCRYPTION_KEY",
  TR31_D1_ASYMMETRIC_KEY_FOR_DATA_ENCRYPTION: "TR31_D1_ASYMMETRIC_KEY_FOR_DATA_ENCRYPTION",
  TR31_E0_EMV_MKEY_APP_CRYPTOGRAMS: "TR31_E0_EMV_MKEY_APP_CRYPTOGRAMS",
  TR31_E1_EMV_MKEY_CONFIDENTIALITY: "TR31_E1_EMV_MKEY_CONFIDENTIALITY",
  TR31_E2_EMV_MKEY_INTEGRITY: "TR31_E2_EMV_MKEY_INTEGRITY",
  TR31_E4_EMV_MKEY_DYNAMIC_NUMBERS: "TR31_E4_EMV_MKEY_DYNAMIC_NUMBERS",
  TR31_E5_EMV_MKEY_CARD_PERSONALIZATION: "TR31_E5_EMV_MKEY_CARD_PERSONALIZATION",
  TR31_E6_EMV_MKEY_OTHER: "TR31_E6_EMV_MKEY_OTHER",
  TR31_K0_KEY_ENCRYPTION_KEY: "TR31_K0_KEY_ENCRYPTION_KEY",
  TR31_K1_KEY_BLOCK_PROTECTION_KEY: "TR31_K1_KEY_BLOCK_PROTECTION_KEY",
  TR31_K2_TR34_ASYMMETRIC_KEY: "TR31_K2_TR34_ASYMMETRIC_KEY",
  TR31_K3_ASYMMETRIC_KEY_FOR_KEY_AGREEMENT: "TR31_K3_ASYMMETRIC_KEY_FOR_KEY_AGREEMENT",
  TR31_M1_ISO_9797_1_MAC_KEY: "TR31_M1_ISO_9797_1_MAC_KEY",
  TR31_M3_ISO_9797_3_MAC_KEY: "TR31_M3_ISO_9797_3_MAC_KEY",
  TR31_M6_ISO_9797_5_CMAC_KEY: "TR31_M6_ISO_9797_5_CMAC_KEY",
  TR31_M7_HMAC_KEY: "TR31_M7_HMAC_KEY",
  TR31_P0_PIN_ENCRYPTION_KEY: "TR31_P0_PIN_ENCRYPTION_KEY",
  TR31_P1_PIN_GENERATION_KEY: "TR31_P1_PIN_GENERATION_KEY",
  TR31_S0_ASYMMETRIC_KEY_FOR_DIGITAL_SIGNATURE: "TR31_S0_ASYMMETRIC_KEY_FOR_DIGITAL_SIGNATURE",
  TR31_V1_IBM3624_PIN_VERIFICATION_KEY: "TR31_V1_IBM3624_PIN_VERIFICATION_KEY",
  TR31_V2_VISA_PIN_VERIFICATION_KEY: "TR31_V2_VISA_PIN_VERIFICATION_KEY",
} as const;

/**
 * @public
 */
export type KeyUsage = (typeof KeyUsage)[keyof typeof KeyUsage];

/**
 * <p>The role of the key, the algorithm it supports, and the cryptographic operations allowed with the key. This data is immutable after the key is created.</p>
 * @public
 */
export interface KeyAttributes {
  /**
   * <p>The cryptographic usage of an Amazon Web Services Payment Cryptography key as deﬁned in section A.5.2 of the TR-31 spec.</p>
   * @public
   */
  KeyUsage: KeyUsage | undefined;

  /**
   * <p>The type of Amazon Web Services Payment Cryptography key to create, which determines the classiﬁcation of the cryptographic method and whether Amazon Web Services Payment Cryptography key contains a symmetric key or an asymmetric key pair.</p>
   * @public
   */
  KeyClass: KeyClass | undefined;

  /**
   * <p>The key algorithm to be use during creation of an Amazon Web Services Payment Cryptography key.</p> <p>For symmetric keys, Amazon Web Services Payment Cryptography supports <code>AES</code> and <code>TDES</code> algorithms. For asymmetric keys, Amazon Web Services Payment Cryptography supports <code>RSA</code> and <code>ECC_NIST</code> algorithms.</p>
   * @public
   */
  KeyAlgorithm: KeyAlgorithm | undefined;

  /**
   * <p>The list of cryptographic operations that you can perform using the key.</p>
   * @public
   */
  KeyModesOfUse: KeyModesOfUse | undefined;
}

/**
 * @public
 * @enum
 */
export const KeyCheckValueAlgorithm = {
  ANSI_X9_24: "ANSI_X9_24",
  CMAC: "CMAC",
  HMAC: "HMAC",
  SHA_1: "SHA_1",
} as const;

/**
 * @public
 */
export type KeyCheckValueAlgorithm = (typeof KeyCheckValueAlgorithm)[keyof typeof KeyCheckValueAlgorithm];

/**
 * @public
 * @enum
 */
export const KeyOrigin = {
  AWS_PAYMENT_CRYPTOGRAPHY: "AWS_PAYMENT_CRYPTOGRAPHY",
  EXTERNAL: "EXTERNAL",
} as const;

/**
 * @public
 */
export type KeyOrigin = (typeof KeyOrigin)[keyof typeof KeyOrigin];

/**
 * @public
 * @enum
 */
export const KeyState = {
  CREATE_COMPLETE: "CREATE_COMPLETE",
  CREATE_IN_PROGRESS: "CREATE_IN_PROGRESS",
  DELETE_COMPLETE: "DELETE_COMPLETE",
  DELETE_PENDING: "DELETE_PENDING",
} as const;

/**
 * @public
 */
export type KeyState = (typeof KeyState)[keyof typeof KeyState];

/**
 * @public
 * @enum
 */
export const MultiRegionKeyType = {
  PRIMARY: "PRIMARY",
  REPLICA: "REPLICA",
} as const;

/**
 * @public
 */
export type MultiRegionKeyType = (typeof MultiRegionKeyType)[keyof typeof MultiRegionKeyType];

/**
 * @public
 * @enum
 */
export const KeyReplicationState = {
  DELETE_IN_PROGRESS: "DELETE_IN_PROGRESS",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  SYNCHRONIZED: "SYNCHRONIZED",
} as const;

/**
 * @public
 */
export type KeyReplicationState = (typeof KeyReplicationState)[keyof typeof KeyReplicationState];

/**
 * <p>Represents the replication status information for a key in a replication region for <a href="https://docs.aws.amazon.com/payment-cryptography/latest/userguide/keys-multi-region-replication.html">Multi-Region key replication</a>.</p> <p>This structure contains details about the current state of key replication, including any status messages and operational information about the replication process.</p>
 * @public
 */
export interface ReplicationStatusType {
  /**
   * <p>The current status of key replication in this Amazon Web Services Region.</p> <p>This field indicates whether the key replication is in progress, completed successfully, or has encountered an error. Possible values include states such as <code>SYNCRHONIZED</code>, <code>IN_PROGRESS</code>, <code>DELETE_IN_PROGRESS</code>, or <code>FAILED</code>. This provides visibility into the replication process for monitoring and troubleshooting purposes.</p>
   * @public
   */
  Status: KeyReplicationState | undefined;

  /**
   * <p>A message that provides additional information about the current replication status of the key.</p> <p>This field contains details about any issues or progress updates related to key replication operations. It may include information about replication failures, synchronization status, or other operational details.</p>
   * @public
   */
  StatusMessage?: string | undefined;
}

/**
 * <p>Metadata about an Amazon Web Services Payment Cryptography key.</p>
 * @public
 */
export interface Key {
  /**
   * <p>The Amazon Resource Name (ARN) of the key.</p>
   * @public
   */
  KeyArn: string | undefined;

  /**
   * <p>The role of the key, the algorithm it supports, and the cryptographic operations allowed with the key. This data is immutable after the key is created.</p>
   * @public
   */
  KeyAttributes: KeyAttributes | undefined;

  /**
   * <p>The key check value (KCV) is used to check if all parties holding a given key have the same key or to detect that a key has changed.</p>
   * @public
   */
  KeyCheckValue: string | undefined;

  /**
   * <p>The algorithm that Amazon Web Services Payment Cryptography uses to calculate the key check value (KCV). It is used to validate the key integrity.</p> <p>For TDES keys, the KCV is computed by encrypting 8 bytes, each with value of zero, with the key to be checked and retaining the 3 highest order bytes of the encrypted result. For AES keys, the KCV is computed using a CMAC algorithm where the input data is 16 bytes of zero and retaining the 3 highest order bytes of the encrypted result.</p>
   * @public
   */
  KeyCheckValueAlgorithm: KeyCheckValueAlgorithm | undefined;

  /**
   * <p>Specifies whether the key is enabled. </p>
   * @public
   */
  Enabled: boolean | undefined;

  /**
   * <p>Specifies whether the key is exportable. This data is immutable after the key is created.</p>
   * @public
   */
  Exportable: boolean | undefined;

  /**
   * <p>The state of key that is being created or deleted.</p>
   * @public
   */
  KeyState: KeyState | undefined;

  /**
   * <p>The source of the key material. For keys created within Amazon Web Services Payment Cryptography, the value is <code>AWS_PAYMENT_CRYPTOGRAPHY</code>. For keys imported into Amazon Web Services Payment Cryptography, the value is <code>EXTERNAL</code>.</p>
   * @public
   */
  KeyOrigin: KeyOrigin | undefined;

  /**
   * <p>The date and time when the key was created.</p>
   * @public
   */
  CreateTimestamp: Date | undefined;

  /**
   * <p>The date and time after which Amazon Web Services Payment Cryptography will start using the key material for cryptographic operations.</p>
   * @public
   */
  UsageStartTimestamp?: Date | undefined;

  /**
   * <p>The date and time after which Amazon Web Services Payment Cryptography will stop using the key material for cryptographic operations.</p>
   * @public
   */
  UsageStopTimestamp?: Date | undefined;

  /**
   * <p>The date and time after which Amazon Web Services Payment Cryptography will delete the key. This value is present only when <code>KeyState</code> is <code>DELETE_PENDING</code> and the key is scheduled for deletion.</p>
   * @public
   */
  DeletePendingTimestamp?: Date | undefined;

  /**
   * <p>The date and time after which Amazon Web Services Payment Cryptography will delete the key. This value is present only when when the <code>KeyState</code> is <code>DELETE_COMPLETE</code> and the Amazon Web Services Payment Cryptography key is deleted.</p>
   * @public
   */
  DeleteTimestamp?: Date | undefined;

  /**
   * <p>The cryptographic usage of an ECDH derived key as deﬁned in section A.5.2 of the TR-31 spec.</p>
   * @public
   */
  DeriveKeyUsage?: DeriveKeyUsage | undefined;

  /**
   * <p>Indicates whether this key is a Multi-Region key and its role in the Multi-Region key hierarchy.</p> <p>Multi-Region replication keys allow the same key material to be used across multiple Amazon Web Services Regions. This field specifies whether the key is a Primary Region key (PRK) (which can be replicated to other Amazon Web Services Regions) or a Replica Region key (RRK) (which is a copy of a PRK in another Region). For more information, see <a href="https://docs.aws.amazon.com/payment-cryptography/latest/userguide/keys-multi-region-replication.html">Multi-Region key replication</a>.</p>
   * @public
   */
  MultiRegionKeyType?: MultiRegionKeyType | undefined;

  /**
   * <p>An Amazon Web Services Region identifier in the standard format (e.g., <code>us-east-1</code>, <code>eu-west-1</code>).</p> <p>Used to specify regions for key replication operations. The region must be a valid Amazon Web Services Region where Amazon Web Services Payment Cryptography is available.</p>
   * @public
   */
  PrimaryRegion?: string | undefined;

  /**
   * <p>Information about the replication status of the key across different Amazon Web Services Regions.</p> <p>This field provides details about the current state of key replication, including any status messages or operational information. It helps track the progress and health of key replication operations.</p>
   * @public
   */
  ReplicationStatus?: Record<string, ReplicationStatusType> | undefined;

  /**
   * <p>Indicates whether this key is using the account's default replication regions configuration for <a href="https://docs.aws.amazon.com/payment-cryptography/latest/userguide/keys-multi-region-replication.html">Multi-Region key replication</a>.</p> <p>When set to <code>true</code>, the key automatically replicates to the regions specified in the account's default replication settings. When set to <code>false</code>, the key has a custom replication configuration that overrides the account defaults.</p>
   * @public
   */
  UsingDefaultReplicationRegions?: boolean | undefined;
}

/**
 * <p>Output from adding replication regions to a key.</p>
 * @public
 */
export interface AddKeyReplicationRegionsOutput {
  /**
   * <p>The updated key metadata after adding the replication regions.</p> <p>This includes the current state of the key and its replication configuration.</p>
   * @public
   */
  Key: Key | undefined;
}

/**
 * <p>This request can cause an inconsistent state for the resource.</p> <p>The requested operation conflicts with the current state of the resource. For example, attempting to delete a key that is currently being used, or trying to create a resource that already exists.</p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConflictException, __BaseException>) {
    super({
      name: "ConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConflictException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The request processing has failed because of an unknown error, exception, or failure.</p> <p>This indicates a server-side error within the Amazon Web Services Payment Cryptography service. If this error persists, contact support for assistance.</p>
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerException, __BaseException>) {
    super({
      name: "InternalServerException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The request was denied due to resource not found.</p> <p>The specified key, alias, or other resource does not exist in your account or region. Verify that the resource identifier is correct and that the resource exists in the expected region.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * <p>The identifier of the resource that was not found.</p> <p>This field contains the specific resource identifier (such as a key ARN or alias name) that could not be located.</p>
   * @public
   */
  ResourceId?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
    this.ResourceId = opts.ResourceId;
  }
}

/**
 * <p>This request would cause a service quota to be exceeded.</p> <p>You have reached the maximum number of keys, aliases, or other resources allowed in your account. Review your current usage and consider deleting unused resources or requesting a quota increase.</p>
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceQuotaExceededException, __BaseException>) {
    super({
      name: "ServiceQuotaExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceQuotaExceededException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The request was denied due to request throttling.</p> <p>You have exceeded the rate limits for Amazon Web Services Payment Cryptography API calls. Implement exponential backoff and retry logic in your application to handle throttling gracefully.</p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottlingException, __BaseException>) {
    super({
      name: "ThrottlingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottlingException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The request was denied due to an invalid request error.</p> <p>One or more parameters in your request are invalid. Check the parameter values, formats, and constraints specified in the API documentation.</p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ValidationException, __BaseException>) {
    super({
      name: "ValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ValidationException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Contains information about an alias.</p>
 * @public
 */
export interface Alias {
  /**
   * <p>A friendly name that you can use to refer to a key. The value must begin with <code>alias/</code>.</p> <important> <p>Do not include confidential or sensitive information in this field. This field may be displayed in plaintext in CloudTrail logs and other output.</p> </important>
   * @public
   */
  AliasName: string | undefined;

  /**
   * <p>The <code>KeyARN</code> of the key associated with the alias.</p>
   * @public
   */
  KeyArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateAliasInput {
  /**
   * <p>A friendly name that you can use to refer to a key. An alias must begin with <code>alias/</code> followed by a name, for example <code>alias/ExampleAlias</code>. It can contain only alphanumeric characters, forward slashes (/), underscores (_), and dashes (-).</p> <important> <p>Don't include personal, confidential or sensitive information in this field. This field may be displayed in plaintext in CloudTrail logs and other output.</p> </important>
   * @public
   */
  AliasName: string | undefined;

  /**
   * <p>The <code>KeyARN</code> of the key to associate with the alias.</p>
   * @public
   */
  KeyArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateAliasOutput {
  /**
   * <p>The alias for the key.</p>
   * @public
   */
  Alias: Alias | undefined;
}

/**
 * <p>The service cannot complete the request.</p> <p>The Amazon Web Services Payment Cryptography service is temporarily unavailable. This is typically a temporary condition - retry your request after a brief delay.</p>
 * @public
 */
export class ServiceUnavailableException extends __BaseException {
  readonly name: "ServiceUnavailableException" = "ServiceUnavailableException";
  readonly $fault: "server" = "server";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceUnavailableException, __BaseException>) {
    super({
      name: "ServiceUnavailableException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceUnavailableException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface DeleteAliasInput {
  /**
   * <p>A friendly name that you can use to refer Amazon Web Services Payment Cryptography key. This value must begin with <code>alias/</code> followed by a name, such as <code>alias/ExampleAlias</code>.</p>
   * @public
   */
  AliasName: string | undefined;
}

/**
 * @public
 */
export interface DeleteAliasOutput {}

/**
 * @public
 */
export interface GetAliasInput {
  /**
   * <p>The alias of the Amazon Web Services Payment Cryptography key.</p>
   * @public
   */
  AliasName: string | undefined;
}

/**
 * @public
 */
export interface GetAliasOutput {
  /**
   * <p>The alias of the Amazon Web Services Payment Cryptography key.</p>
   * @public
   */
  Alias: Alias | undefined;
}

/**
 * @public
 */
export interface ListAliasesInput {
  /**
   * <p>The <code>keyARN</code> for which you want to list all aliases.</p>
   * @public
   */
  KeyArn?: string | undefined;

  /**
   * <p>Use this parameter in a subsequent request after you receive a response with truncated results. Set it to the value of <code>NextToken</code> from the truncated response you just received.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Use this parameter to specify the maximum number of items to return. When this value is present, Amazon Web Services Payment Cryptography does not return more than the specified number of items, but it might return fewer.</p> <p>This value is optional. If you include a value, it must be between 1 and 100, inclusive. If you do not include a value, it defaults to 50.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListAliasesOutput {
  /**
   * <p>The list of aliases. Each alias describes the <code>KeyArn</code> contained within.</p>
   * @public
   */
  Aliases: Alias[] | undefined;

  /**
   * <p>The token for the next set of results, or an empty or null value if there are no more results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateAliasInput {
  /**
   * <p>The alias whose associated key is changing.</p>
   * @public
   */
  AliasName: string | undefined;

  /**
   * <p>The <code>KeyARN</code> for the key that you are updating or removing from the alias.</p>
   * @public
   */
  KeyArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateAliasOutput {
  /**
   * <p>The alias name.</p>
   * @public
   */
  Alias: Alias | undefined;
}

/**
 * <p>The metadata used to create the certificate signing request.</p>
 * @public
 */
export interface CertificateSubjectType {
  /**
   * <p>The name you provide to create the certificate signing request.</p>
   * @public
   */
  CommonName: string | undefined;

  /**
   * <p>The organization unit you provide to create the certificate signing request.</p>
   * @public
   */
  OrganizationUnit?: string | undefined;

  /**
   * <p>The organization you provide to create the certificate signing request.</p>
   * @public
   */
  Organization?: string | undefined;

  /**
   * <p>The city you provide to create the certificate signing request.</p>
   * @public
   */
  City?: string | undefined;

  /**
   * <p>The city you provide to create the certificate signing request.</p>
   * @public
   */
  Country?: string | undefined;

  /**
   * <p>The state or province you provide to create the certificate signing request.</p>
   * @public
   */
  StateOrProvince?: string | undefined;

  /**
   * <p>The email address you provide to create the certificate signing request.</p>
   * @public
   */
  EmailAddress?: string | undefined;
}

/**
 * <p>A structure that contains information about a tag.</p>
 * @public
 */
export interface Tag {
  /**
   * <p>The key of the tag.</p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>The value of the tag.</p>
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface CreateKeyInput {
  /**
   * <p>The role of the key, the algorithm it supports, and the cryptographic operations allowed with the key. This data is immutable after the key is created.</p>
   * @public
   */
  KeyAttributes: KeyAttributes | undefined;

  /**
   * <p>The algorithm that Amazon Web Services Payment Cryptography uses to calculate the key check value (KCV). It is used to validate the key integrity.</p> <p>For TDES keys, the KCV is computed by encrypting 8 bytes, each with value of zero, with the key to be checked and retaining the 3 highest order bytes of the encrypted result. For AES keys, the KCV is computed using a CMAC algorithm where the input data is 16 bytes of zero and retaining the 3 highest order bytes of the encrypted result.</p>
   * @public
   */
  KeyCheckValueAlgorithm?: KeyCheckValueAlgorithm | undefined;

  /**
   * <p>Specifies whether the key is exportable from the service.</p>
   * @public
   */
  Exportable: boolean | undefined;

  /**
   * <p>Specifies whether to enable the key. If the key is enabled, it is activated for use within the service. If the key is not enabled, then it is created but not activated. The default value is enabled.</p>
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * <p>Assigns one or more tags to the Amazon Web Services Payment Cryptography key. Use this parameter to tag a key when it is created. To tag an existing Amazon Web Services Payment Cryptography key, use the <a href="https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_TagResource.html">TagResource</a> operation.</p> <p>Each tag consists of a tag key and a tag value. Both the tag key and the tag value are required, but the tag value can be an empty (null) string. You can't have more than one tag on an Amazon Web Services Payment Cryptography key with the same tag key. </p> <important> <p>Don't include personal, confidential or sensitive information in this field. This field may be displayed in plaintext in CloudTrail logs and other output.</p> </important> <note> <p>Tagging or untagging an Amazon Web Services Payment Cryptography key can allow or deny permission to the key.</p> </note>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The intended cryptographic usage of keys derived from the ECC key pair to be created.</p> <p>After creating an ECC key pair, you cannot change the intended cryptographic usage of keys derived from it using ECDH.</p>
   * @public
   */
  DeriveKeyUsage?: DeriveKeyUsage | undefined;

  /**
   * <p>A list of Amazon Web Services Regions for key replication operations.</p> <p>Each region in the list must be a valid Amazon Web Services Region identifier where Amazon Web Services Payment Cryptography is available. This list is used to specify which regions should be added to or removed from a key's replication configuration.</p>
   * @public
   */
  ReplicationRegions?: string[] | undefined;
}

/**
 * @public
 */
export interface CreateKeyOutput {
  /**
   * <p>The key material that contains all the key attributes.</p>
   * @public
   */
  Key: Key | undefined;
}

/**
 * @public
 */
export interface DeleteKeyInput {
  /**
   * <p>The <code>KeyARN</code> of the key that is scheduled for deletion.</p>
   * @public
   */
  KeyIdentifier: string | undefined;

  /**
   * <p>The waiting period for key deletion. The default value is seven days.</p>
   * @public
   */
  DeleteKeyInDays?: number | undefined;
}

/**
 * @public
 */
export interface DeleteKeyOutput {
  /**
   * <p>The <code>KeyARN</code> of the key that is scheduled for deletion.</p>
   * @public
   */
  Key: Key | undefined;
}

/**
 * <p>The shared information used when deriving a key using ECDH.</p>
 * @public
 */
export type DiffieHellmanDerivationData =
  | DiffieHellmanDerivationData.SharedInformationMember
  | DiffieHellmanDerivationData.$UnknownMember;

/**
 * @public
 */
export namespace DiffieHellmanDerivationData {
  /**
   * <p>A string containing information that binds the ECDH derived key to the two parties involved or to the context of the key.</p> <p>It may include details like identities of the two parties deriving the key, context of the operation, session IDs, and optionally a nonce. It must not contain zero bytes. It is not recommended to reuse shared information for multiple ECDH key derivations, as it could result in derived key material being the same across different derivations.</p>
   * @public
   */
  export interface SharedInformationMember {
    SharedInformation: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    SharedInformation?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    SharedInformation: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>Input parameters for disabling default key replication regions for the account.</p>
 * @public
 */
export interface DisableDefaultKeyReplicationRegionsInput {
  /**
   * <p>The list of Amazon Web Services Regions to remove from the account's default replication regions.</p> <p>New keys created after this operation will not automatically be replicated to these regions, though existing keys with replication to these regions will be unaffected.</p>
   * @public
   */
  ReplicationRegions: string[] | undefined;
}

/**
 * <p>Output from disabling default key replication regions for the account.</p>
 * @public
 */
export interface DisableDefaultKeyReplicationRegionsOutput {
  /**
   * <p>The remaining list of regions where default key replication is still enabled for the account.</p> <p>This reflects the account's default replication configuration after removing the specified regions.</p>
   * @public
   */
  EnabledReplicationRegions: string[] | undefined;
}

/**
 * <p>Input parameters for enabling default key replication regions for the account.</p>
 * @public
 */
export interface EnableDefaultKeyReplicationRegionsInput {
  /**
   * <p>The list of Amazon Web Services Regions to enable as default replication regions for the Amazon Web Services account for <a href="https://docs.aws.amazon.com/payment-cryptography/latest/userguide/keys-multi-region-replication.html">Multi-Region key replication</a>.</p> <p>New keys created in this account will automatically be replicated to these regions unless explicitly overridden during key creation.</p>
   * @public
   */
  ReplicationRegions: string[] | undefined;
}

/**
 * <p>Output from enabling default key replication regions for the account.</p>
 * @public
 */
export interface EnableDefaultKeyReplicationRegionsOutput {
  /**
   * <p>The complete list of regions where default key replication is now enabled for the account.</p> <p>This includes both previously enabled regions and the newly added regions from this operation.</p>
   * @public
   */
  EnabledReplicationRegions: string[] | undefined;
}

/**
 * <p>Parameter information for IPEK generation during export.</p>
 * @public
 */
export interface ExportDukptInitialKey {
  /**
   * <p>The KSN for IPEK generation using DUKPT. </p> <p>KSN must be padded before sending to Amazon Web Services Payment Cryptography. KSN hex length should be 20 for a TDES_2KEY key or 24 for an AES key.</p>
   * @public
   */
  KeySerialNumber: string | undefined;
}

/**
 * <p>The attributes for IPEK generation during export.</p>
 * @public
 */
export interface ExportAttributes {
  /**
   * <p>Parameter information for IPEK export.</p>
   * @public
   */
  ExportDukptInitialKey?: ExportDukptInitialKey | undefined;

  /**
   * <p>The algorithm that Amazon Web Services Payment Cryptography uses to calculate the key check value (KCV). It is used to validate the key integrity. Specify KCV for IPEK export only.</p> <p>For TDES keys, the KCV is computed by encrypting 8 bytes, each with value of zero, with the key to be checked and retaining the 3 highest order bytes of the encrypted result. For AES keys, the KCV is computed using a CMAC algorithm where the input data is 16 bytes of zero and retaining the 3 highest order bytes of the encrypted result.</p>
   * @public
   */
  KeyCheckValueAlgorithm?: KeyCheckValueAlgorithm | undefined;
}

/**
 * @public
 * @enum
 */
export const SymmetricKeyAlgorithm = {
  AES_128: "AES_128",
  AES_192: "AES_192",
  AES_256: "AES_256",
  HMAC_SHA224: "HMAC_SHA224",
  HMAC_SHA256: "HMAC_SHA256",
  HMAC_SHA384: "HMAC_SHA384",
  HMAC_SHA512: "HMAC_SHA512",
  TDES_2KEY: "TDES_2KEY",
  TDES_3KEY: "TDES_3KEY",
} as const;

/**
 * @public
 */
export type SymmetricKeyAlgorithm = (typeof SymmetricKeyAlgorithm)[keyof typeof SymmetricKeyAlgorithm];

/**
 * @public
 * @enum
 */
export const KeyExportability = {
  EXPORTABLE: "EXPORTABLE",
  NON_EXPORTABLE: "NON_EXPORTABLE",
  SENSITIVE: "SENSITIVE",
} as const;

/**
 * @public
 */
export type KeyExportability = (typeof KeyExportability)[keyof typeof KeyExportability];

/**
 * <p>Optional metadata for export associated with the key material. This data is signed but transmitted in clear text.</p>
 * @public
 */
export interface KeyBlockHeaders {
  /**
   * <p>The list of cryptographic operations that you can perform using the key. The modes of use are deﬁned in section A.5.3 of the TR-31 spec.</p>
   * @public
   */
  KeyModesOfUse?: KeyModesOfUse | undefined;

  /**
   * <p>Specifies subsequent exportability of the key within the key block after it is received by the receiving party. It can be used to further restrict exportability of the key after export from Amazon Web Services Payment Cryptography.</p> <p>When set to <code>EXPORTABLE</code>, the key can be subsequently exported by the receiver under a KEK using TR-31 or TR-34 key block export only. When set to <code>NON_EXPORTABLE</code>, the key cannot be subsequently exported by the receiver. When set to <code>SENSITIVE</code>, the key can be exported by the receiver under a KEK using TR-31, TR-34, RSA wrap and unwrap cryptogram or using a symmetric cryptogram key export method. For further information refer to <a href="https://webstore.ansi.org/standards/ascx9/ansix91432022">ANSI X9.143-2022</a>.</p>
   * @public
   */
  KeyExportability?: KeyExportability | undefined;

  /**
   * <p>Parameter used to indicate the version of the key carried in the key block or indicate the value carried in the key block is a component of a key.</p>
   * @public
   */
  KeyVersion?: string | undefined;

  /**
   * <p>Parameter used to indicate the type of optional data in key block headers. Refer to <a href="https://webstore.ansi.org/standards/ascx9/ansix91432022">ANSI X9.143-2022</a> for information on allowed data type for optional blocks.</p> <p>Optional block character limit is 112 characters. For each optional block, 2 characters are reserved for optional block ID and 2 characters reserved for optional block length. More than one optional blocks can be included as long as the combined length does not increase 112 characters.</p>
   * @public
   */
  OptionalBlocks?: Record<string, string> | undefined;
}

/**
 * @public
 * @enum
 */
export const KeyDerivationFunction = {
  ANSI_X963: "ANSI_X963",
  NIST_SP800: "NIST_SP800",
} as const;

/**
 * @public
 */
export type KeyDerivationFunction = (typeof KeyDerivationFunction)[keyof typeof KeyDerivationFunction];

/**
 * @public
 * @enum
 */
export const KeyDerivationHashAlgorithm = {
  SHA_256: "SHA_256",
  SHA_384: "SHA_384",
  SHA_512: "SHA_512",
} as const;

/**
 * @public
 */
export type KeyDerivationHashAlgorithm = (typeof KeyDerivationHashAlgorithm)[keyof typeof KeyDerivationHashAlgorithm];

/**
 * <p>Key derivation parameter information for key material export using asymmetric ECDH key exchange method.</p>
 * @public
 */
export interface ExportDiffieHellmanTr31KeyBlock {
  /**
   * <p>The <code>keyARN</code> of the asymmetric ECC key created within Amazon Web Services Payment Cryptography.</p>
   * @public
   */
  PrivateKeyIdentifier: string | undefined;

  /**
   * <p>The <code>keyARN</code> of the CA that signed the <code>PublicKeyCertificate</code> for the client's receiving ECC key pair.</p>
   * @public
   */
  CertificateAuthorityPublicKeyIdentifier: string | undefined;

  /**
   * <p>The public key certificate of the client's receiving ECC key pair, in PEM format (base64 encoded), to use for ECDH key derivation.</p>
   * @public
   */
  PublicKeyCertificate: string | undefined;

  /**
   * <p>The key algorithm of the shared derived ECDH key.</p>
   * @public
   */
  DeriveKeyAlgorithm: SymmetricKeyAlgorithm | undefined;

  /**
   * <p>The key derivation function to use when deriving a key using ECDH.</p>
   * @public
   */
  KeyDerivationFunction: KeyDerivationFunction | undefined;

  /**
   * <p>The hash type to use when deriving a key using ECDH.</p>
   * @public
   */
  KeyDerivationHashAlgorithm: KeyDerivationHashAlgorithm | undefined;

  /**
   * <p>The shared information used when deriving a key using ECDH.</p>
   * @public
   */
  DerivationData: DiffieHellmanDerivationData | undefined;

  /**
   * <p>Optional metadata for export associated with the key material. This data is signed but transmitted in clear text.</p>
   * @public
   */
  KeyBlockHeaders?: KeyBlockHeaders | undefined;
}

/**
 * @public
 * @enum
 */
export const WrappingKeySpec = {
  RSA_OAEP_SHA_256: "RSA_OAEP_SHA_256",
  RSA_OAEP_SHA_512: "RSA_OAEP_SHA_512",
} as const;

/**
 * @public
 */
export type WrappingKeySpec = (typeof WrappingKeySpec)[keyof typeof WrappingKeySpec];

/**
 * <p>Parameter information for key material export using asymmetric RSA wrap and unwrap key exchange method.</p>
 * @public
 */
export interface ExportKeyCryptogram {
  /**
   * <p>The <code>KeyARN</code> of the certificate chain that signs the wrapping key certificate during RSA wrap and unwrap key export.</p>
   * @public
   */
  CertificateAuthorityPublicKeyIdentifier: string | undefined;

  /**
   * <p>The wrapping key certificate in PEM format (base64 encoded). Amazon Web Services Payment Cryptography uses this certificate to wrap the key under export.</p>
   * @public
   */
  WrappingKeyCertificate: string | undefined;

  /**
   * <p>The wrapping spec for the key under export.</p>
   * @public
   */
  WrappingSpec?: WrappingKeySpec | undefined;
}

/**
 * <p>Parameter information for key material export using symmetric TR-31 key exchange method.</p>
 * @public
 */
export interface ExportTr31KeyBlock {
  /**
   * <p>The <code>KeyARN</code> of the the wrapping key. This key encrypts or wraps the key under export for TR-31 key block generation.</p>
   * @public
   */
  WrappingKeyIdentifier: string | undefined;

  /**
   * <p>Optional metadata for export associated with the key material. This data is signed but transmitted in clear text.</p>
   * @public
   */
  KeyBlockHeaders?: KeyBlockHeaders | undefined;
}

/**
 * @public
 * @enum
 */
export const Tr34KeyBlockFormat = {
  X9_TR34_2012: "X9_TR34_2012",
} as const;

/**
 * @public
 */
export type Tr34KeyBlockFormat = (typeof Tr34KeyBlockFormat)[keyof typeof Tr34KeyBlockFormat];

/**
 * <p>Parameter information for key material export using the asymmetric TR-34 key exchange method.</p>
 * @public
 */
export interface ExportTr34KeyBlock {
  /**
   * <p>The <code>KeyARN</code> of the certificate chain that signs the wrapping key certificate during TR-34 key export.</p>
   * @public
   */
  CertificateAuthorityPublicKeyIdentifier: string | undefined;

  /**
   * <p>The <code>KeyARN</code> of the wrapping key certificate. Amazon Web Services Payment Cryptography uses this certificate to wrap the key under export.</p>
   * @public
   */
  WrappingKeyCertificate: string | undefined;

  /**
   * <p>The export token to initiate key export from Amazon Web Services Payment Cryptography. It also contains the signing key certificate that will sign the wrapped key during TR-34 key block generation. Call <a href="https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_GetParametersForExport.html">GetParametersForExport</a> to receive an export token. It expires after 30 days. You can use the same export token to export multiple keys from the same service account.</p>
   * @public
   */
  ExportToken?: string | undefined;

  /**
   * <p>Key Identifier used for signing the export key</p>
   * @public
   */
  SigningKeyIdentifier?: string | undefined;

  /**
   * <p>The certificate used to sign the TR-34 key block.</p>
   * @public
   */
  SigningKeyCertificate?: string | undefined;

  /**
   * <p>The format of key block that Amazon Web Services Payment Cryptography will use during key export.</p>
   * @public
   */
  KeyBlockFormat: Tr34KeyBlockFormat | undefined;

  /**
   * <p>A random number value that is unique to the TR-34 key block generated using 2 pass. The operation will fail, if a random nonce value is not provided for a TR-34 key block generated using 2 pass.</p>
   * @public
   */
  RandomNonce?: string | undefined;

  /**
   * <p>Optional metadata for export associated with the key material. This data is signed but transmitted in clear text.</p>
   * @public
   */
  KeyBlockHeaders?: KeyBlockHeaders | undefined;
}

/**
 * <p>Parameter information for key material export from Amazon Web Services Payment Cryptography using TR-31 or TR-34 or RSA wrap and unwrap key exchange method.</p>
 * @public
 */
export type ExportKeyMaterial =
  | ExportKeyMaterial.DiffieHellmanTr31KeyBlockMember
  | ExportKeyMaterial.KeyCryptogramMember
  | ExportKeyMaterial.Tr31KeyBlockMember
  | ExportKeyMaterial.Tr34KeyBlockMember
  | ExportKeyMaterial.$UnknownMember;

/**
 * @public
 */
export namespace ExportKeyMaterial {
  /**
   * <p>Parameter information for key material export using symmetric TR-31 key exchange method.</p>
   * @public
   */
  export interface Tr31KeyBlockMember {
    Tr31KeyBlock: ExportTr31KeyBlock;
    Tr34KeyBlock?: never;
    KeyCryptogram?: never;
    DiffieHellmanTr31KeyBlock?: never;
    $unknown?: never;
  }

  /**
   * <p>Parameter information for key material export using the asymmetric TR-34 key exchange method.</p>
   * @public
   */
  export interface Tr34KeyBlockMember {
    Tr31KeyBlock?: never;
    Tr34KeyBlock: ExportTr34KeyBlock;
    KeyCryptogram?: never;
    DiffieHellmanTr31KeyBlock?: never;
    $unknown?: never;
  }

  /**
   * <p>Parameter information for key material export using asymmetric RSA wrap and unwrap key exchange method</p>
   * @public
   */
  export interface KeyCryptogramMember {
    Tr31KeyBlock?: never;
    Tr34KeyBlock?: never;
    KeyCryptogram: ExportKeyCryptogram;
    DiffieHellmanTr31KeyBlock?: never;
    $unknown?: never;
  }

  /**
   * <p>Key derivation parameter information for key material export using asymmetric ECDH key exchange method.</p>
   * @public
   */
  export interface DiffieHellmanTr31KeyBlockMember {
    Tr31KeyBlock?: never;
    Tr34KeyBlock?: never;
    KeyCryptogram?: never;
    DiffieHellmanTr31KeyBlock: ExportDiffieHellmanTr31KeyBlock;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    Tr31KeyBlock?: never;
    Tr34KeyBlock?: never;
    KeyCryptogram?: never;
    DiffieHellmanTr31KeyBlock?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    Tr31KeyBlock: (value: ExportTr31KeyBlock) => T;
    Tr34KeyBlock: (value: ExportTr34KeyBlock) => T;
    KeyCryptogram: (value: ExportKeyCryptogram) => T;
    DiffieHellmanTr31KeyBlock: (value: ExportDiffieHellmanTr31KeyBlock) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface ExportKeyInput {
  /**
   * <p>The key block format type, for example, TR-34 or TR-31, to use during key material export.</p>
   * @public
   */
  KeyMaterial: ExportKeyMaterial | undefined;

  /**
   * <p>The <code>KeyARN</code> of the key under export from Amazon Web Services Payment Cryptography.</p>
   * @public
   */
  ExportKeyIdentifier: string | undefined;

  /**
   * <p>The attributes for IPEK generation during export.</p>
   * @public
   */
  ExportAttributes?: ExportAttributes | undefined;
}

/**
 * @public
 * @enum
 */
export const WrappedKeyMaterialFormat = {
  KEY_CRYPTOGRAM: "KEY_CRYPTOGRAM",
  TR31_KEY_BLOCK: "TR31_KEY_BLOCK",
  TR34_KEY_BLOCK: "TR34_KEY_BLOCK",
} as const;

/**
 * @public
 */
export type WrappedKeyMaterialFormat = (typeof WrappedKeyMaterialFormat)[keyof typeof WrappedKeyMaterialFormat];

/**
 * <p>Parameter information for generating a WrappedKeyBlock for key exchange.</p>
 * @public
 */
export interface WrappedKey {
  /**
   * <p>The <code>KeyARN</code> of the wrapped key.</p>
   * @public
   */
  WrappingKeyArn: string | undefined;

  /**
   * <p>The key block format of a wrapped key.</p>
   * @public
   */
  WrappedKeyMaterialFormat: WrappedKeyMaterialFormat | undefined;

  /**
   * <p>Parameter information for generating a wrapped key using TR-31 or TR-34 skey exchange method.</p>
   * @public
   */
  KeyMaterial: string | undefined;

  /**
   * <p>The key check value (KCV) is used to check if all parties holding a given key have the same key or to detect that a key has changed.</p>
   * @public
   */
  KeyCheckValue?: string | undefined;

  /**
   * <p>The algorithm that Amazon Web Services Payment Cryptography uses to calculate the key check value (KCV). It is used to validate the key integrity.</p> <p>For TDES keys, the KCV is computed by encrypting 8 bytes, each with value of zero, with the key to be checked and retaining the 3 highest order bytes of the encrypted result. For AES keys, the KCV is computed using a CMAC algorithm where the input data is 16 bytes of zero and retaining the 3 highest order bytes of the encrypted result.</p>
   * @public
   */
  KeyCheckValueAlgorithm?: KeyCheckValueAlgorithm | undefined;
}

/**
 * @public
 */
export interface ExportKeyOutput {
  /**
   * <p>The key material under export as a TR-34 WrappedKeyBlock or a TR-31 WrappedKeyBlock. or a RSA WrappedKeyCryptogram.</p>
   * @public
   */
  WrappedKey?: WrappedKey | undefined;
}

/**
 * @public
 * @enum
 */
export const SigningAlgorithmType = {
  SHA224: "SHA224",
  SHA256: "SHA256",
  SHA384: "SHA384",
  SHA512: "SHA512",
} as const;

/**
 * @public
 */
export type SigningAlgorithmType = (typeof SigningAlgorithmType)[keyof typeof SigningAlgorithmType];

/**
 * @public
 */
export interface GetCertificateSigningRequestInput {
  /**
   * <p>Asymmetric key used for generating the certificate signing request</p>
   * @public
   */
  KeyIdentifier: string | undefined;

  /**
   * <p>The cryptographic algorithm used to sign your CSR.</p>
   * @public
   */
  SigningAlgorithm: SigningAlgorithmType | undefined;

  /**
   * <p>The metadata used to create the CSR.</p>
   * @public
   */
  CertificateSubject: CertificateSubjectType | undefined;
}

/**
 * @public
 */
export interface GetCertificateSigningRequestOutput {
  /**
   * <p>The certificate signing request generated using the key pair associated with the key identifier.</p>
   * @public
   */
  CertificateSigningRequest: string | undefined;
}

/**
 * <p>Input parameters for retrieving the account's default key replication regions. This operation requires no input parameters.</p>
 * @public
 */
export interface GetDefaultKeyReplicationRegionsInput {}

/**
 * <p>Output containing the account's current default key replication configuration.</p>
 * @public
 */
export interface GetDefaultKeyReplicationRegionsOutput {
  /**
   * <p>The list of regions where default key replication is currently enabled for the account.</p> <p>New keys created in this account will automatically be replicated to these regions unless explicitly configured otherwise during key creation.</p>
   * @public
   */
  EnabledReplicationRegions: string[] | undefined;
}

/**
 * @public
 */
export interface GetKeyInput {
  /**
   * <p>The <code>KeyARN</code> of the Amazon Web Services Payment Cryptography key.</p>
   * @public
   */
  KeyIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetKeyOutput {
  /**
   * <p>Contains the key metadata, including both immutable and mutable attributes for the key, but does not include actual cryptographic key material.</p>
   * @public
   */
  Key: Key | undefined;
}

/**
 * @public
 * @enum
 */
export const KeyMaterialType = {
  KEY_CRYPTOGRAM: "KEY_CRYPTOGRAM",
  ROOT_PUBLIC_KEY_CERTIFICATE: "ROOT_PUBLIC_KEY_CERTIFICATE",
  TR31_KEY_BLOCK: "TR31_KEY_BLOCK",
  TR34_KEY_BLOCK: "TR34_KEY_BLOCK",
  TRUSTED_PUBLIC_KEY_CERTIFICATE: "TRUSTED_PUBLIC_KEY_CERTIFICATE",
} as const;

/**
 * @public
 */
export type KeyMaterialType = (typeof KeyMaterialType)[keyof typeof KeyMaterialType];

/**
 * @public
 */
export interface GetParametersForExportInput {
  /**
   * <p>The key block format type (for example, TR-34 or TR-31) to use during key material export. Export token is only required for a TR-34 key export, <code>TR34_KEY_BLOCK</code>. Export token is not required for TR-31 key export.</p>
   * @public
   */
  KeyMaterialType: KeyMaterialType | undefined;

  /**
   * <p>The signing key algorithm to generate a signing key certificate. This certificate signs the wrapped key under export within the TR-34 key block. <code>RSA_2048</code> is the only signing key algorithm allowed.</p>
   * @public
   */
  SigningKeyAlgorithm: KeyAlgorithm | undefined;
}

/**
 * @public
 */
export interface GetParametersForExportOutput {
  /**
   * <p>The signing key certificate in PEM format (base64 encoded) of the public key for signature within the TR-34 key block. The certificate expires after 30 days.</p>
   * @public
   */
  SigningKeyCertificate: string | undefined;

  /**
   * <p>The root certificate authority (CA) that signed the signing key certificate in PEM format (base64 encoded).</p>
   * @public
   */
  SigningKeyCertificateChain: string | undefined;

  /**
   * <p>The algorithm of the signing key certificate for use in TR-34 key block generation. <code>RSA_2048</code> is the only signing key algorithm allowed.</p>
   * @public
   */
  SigningKeyAlgorithm: KeyAlgorithm | undefined;

  /**
   * <p>The export token to initiate key export from Amazon Web Services Payment Cryptography. The export token expires after 30 days. You can use the same export token to export multiple keys from the same service account.</p>
   * @public
   */
  ExportToken: string | undefined;

  /**
   * <p>The validity period of the export token.</p>
   * @public
   */
  ParametersValidUntilTimestamp: Date | undefined;
}

/**
 * @public
 */
export interface GetParametersForImportInput {
  /**
   * <p>The method to use for key material import. Import token is only required for TR-34 WrappedKeyBlock (<code>TR34_KEY_BLOCK</code>) and RSA WrappedKeyCryptogram (<code>KEY_CRYPTOGRAM</code>).</p> <p>Import token is not required for TR-31, root public key cerificate or trusted public key certificate.</p>
   * @public
   */
  KeyMaterialType: KeyMaterialType | undefined;

  /**
   * <p>The wrapping key algorithm to generate a wrapping key certificate. This certificate wraps the key under import.</p> <p>At this time, <code>RSA_2048</code> is the allowed algorithm for TR-34 WrappedKeyBlock import. Additionally, <code>RSA_2048</code>, <code>RSA_3072</code>, <code>RSA_4096</code> are the allowed algorithms for RSA WrappedKeyCryptogram import.</p>
   * @public
   */
  WrappingKeyAlgorithm: KeyAlgorithm | undefined;
}

/**
 * @public
 */
export interface GetParametersForImportOutput {
  /**
   * <p>The wrapping key certificate in PEM format (base64 encoded) of the wrapping key for use within the TR-34 key block. The certificate expires in 30 days.</p>
   * @public
   */
  WrappingKeyCertificate: string | undefined;

  /**
   * <p>The Amazon Web Services Payment Cryptography root certificate authority (CA) that signed the wrapping key certificate in PEM format (base64 encoded).</p>
   * @public
   */
  WrappingKeyCertificateChain: string | undefined;

  /**
   * <p>The algorithm of the wrapping key for use within TR-34 WrappedKeyBlock or RSA WrappedKeyCryptogram.</p>
   * @public
   */
  WrappingKeyAlgorithm: KeyAlgorithm | undefined;

  /**
   * <p>The import token to initiate key import into Amazon Web Services Payment Cryptography. The import token expires after 30 days. You can use the same import token to import multiple keys to the same service account.</p>
   * @public
   */
  ImportToken: string | undefined;

  /**
   * <p>The validity period of the import token.</p>
   * @public
   */
  ParametersValidUntilTimestamp: Date | undefined;
}

/**
 * @public
 */
export interface GetPublicKeyCertificateInput {
  /**
   * <p>The <code>KeyARN</code> of the asymmetric key pair.</p>
   * @public
   */
  KeyIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetPublicKeyCertificateOutput {
  /**
   * <p>The public key component of the asymmetric key pair in a certificate PEM format (base64 encoded). It is signed by the root certificate authority (CA). The certificate expires in 90 days.</p>
   * @public
   */
  KeyCertificate: string | undefined;

  /**
   * <p>The root certificate authority (CA) that signed the public key certificate in PEM format (base64 encoded) of the asymmetric key pair.</p>
   * @public
   */
  KeyCertificateChain: string | undefined;
}

/**
 * <p>Key derivation parameter information for key material import using asymmetric ECDH key exchange method.</p>
 * @public
 */
export interface ImportDiffieHellmanTr31KeyBlock {
  /**
   * <p>The <code>keyARN</code> of the asymmetric ECC key created within Amazon Web Services Payment Cryptography.</p>
   * @public
   */
  PrivateKeyIdentifier: string | undefined;

  /**
   * <p>The <code>keyARN</code> of the CA that signed the <code>PublicKeyCertificate</code> for the client's receiving ECC key pair.</p>
   * @public
   */
  CertificateAuthorityPublicKeyIdentifier: string | undefined;

  /**
   * <p>The public key certificate of the client's receiving ECC key pair, in PEM format (base64 encoded), to use for ECDH key derivation.</p>
   * @public
   */
  PublicKeyCertificate: string | undefined;

  /**
   * <p>The key algorithm of the shared derived ECDH key.</p>
   * @public
   */
  DeriveKeyAlgorithm: SymmetricKeyAlgorithm | undefined;

  /**
   * <p>The key derivation function to use when deriving a key using ECDH.</p>
   * @public
   */
  KeyDerivationFunction: KeyDerivationFunction | undefined;

  /**
   * <p>The hash type to use when deriving a key using ECDH.</p>
   * @public
   */
  KeyDerivationHashAlgorithm: KeyDerivationHashAlgorithm | undefined;

  /**
   * <p>The shared information used when deriving a key using ECDH.</p>
   * @public
   */
  DerivationData: DiffieHellmanDerivationData | undefined;

  /**
   * <p>The ECDH wrapped key block to import.</p>
   * @public
   */
  WrappedKeyBlock: string | undefined;
}

/**
 * <p>Parameter information for key material import using asymmetric RSA wrap and unwrap key exchange method.</p>
 * @public
 */
export interface ImportKeyCryptogram {
  /**
   * <p>The role of the key, the algorithm it supports, and the cryptographic operations allowed with the key. This data is immutable after the key is created.</p>
   * @public
   */
  KeyAttributes: KeyAttributes | undefined;

  /**
   * <p>Specifies whether the key is exportable from the service.</p>
   * @public
   */
  Exportable: boolean | undefined;

  /**
   * <p>The RSA wrapped key cryptogram under import.</p>
   * @public
   */
  WrappedKeyCryptogram: string | undefined;

  /**
   * <p>The import token that initiates key import using the asymmetric RSA wrap and unwrap key exchange method into AWS Payment Cryptography. It expires after 30 days. You can use the same import token to import multiple keys to the same service account.</p>
   * @public
   */
  ImportToken: string | undefined;

  /**
   * <p>The wrapping spec for the wrapped key cryptogram.</p>
   * @public
   */
  WrappingSpec?: WrappingKeySpec | undefined;
}

/**
 * <p>Parameter information for root public key certificate import.</p>
 * @public
 */
export interface RootCertificatePublicKey {
  /**
   * <p>The role of the key, the algorithm it supports, and the cryptographic operations allowed with the key. This data is immutable after the root public key is imported.</p>
   * @public
   */
  KeyAttributes: KeyAttributes | undefined;

  /**
   * <p>Parameter information for root public key certificate import.</p>
   * @public
   */
  PublicKeyCertificate: string | undefined;
}

/**
 * <p>Parameter information for key material import using symmetric TR-31 key exchange method.</p>
 * @public
 */
export interface ImportTr31KeyBlock {
  /**
   * <p>The <code>KeyARN</code> of the key that will decrypt or unwrap a TR-31 key block during import.</p>
   * @public
   */
  WrappingKeyIdentifier: string | undefined;

  /**
   * <p>The TR-31 wrapped key block to import.</p>
   * @public
   */
  WrappedKeyBlock: string | undefined;
}

/**
 * <p>Parameter information for key material import using the asymmetric TR-34 key exchange method.</p>
 * @public
 */
export interface ImportTr34KeyBlock {
  /**
   * <p>The <code>KeyARN</code> of the certificate chain that signs the signing key certificate during TR-34 key import.</p>
   * @public
   */
  CertificateAuthorityPublicKeyIdentifier: string | undefined;

  /**
   * <p>The public key component in PEM certificate format of the private key that signs the KDH TR-34 WrappedKeyBlock.</p>
   * @public
   */
  SigningKeyCertificate: string | undefined;

  /**
   * <p>The import token that initiates key import using the asymmetric TR-34 key exchange method into Amazon Web Services Payment Cryptography. It expires after 30 days. You can use the same import token to import multiple keys to the same service account.</p>
   * @public
   */
  ImportToken?: string | undefined;

  /**
   * <p>Key Identifier used for unwrapping the import key</p>
   * @public
   */
  WrappingKeyIdentifier?: string | undefined;

  /**
   * <p>The certificate used to wrap the TR-34 key block.</p>
   * @public
   */
  WrappingKeyCertificate?: string | undefined;

  /**
   * <p>The TR-34 wrapped key block to import.</p>
   * @public
   */
  WrappedKeyBlock: string | undefined;

  /**
   * <p>The key block format to use during key import. The only value allowed is <code>X9_TR34_2012</code>.</p>
   * @public
   */
  KeyBlockFormat: Tr34KeyBlockFormat | undefined;

  /**
   * <p>A random number value that is unique to the TR-34 key block generated using 2 pass. The operation will fail, if a random nonce value is not provided for a TR-34 key block generated using 2 pass.</p>
   * @public
   */
  RandomNonce?: string | undefined;
}

/**
 * <p>Parameter information for trusted public key certificate import.</p>
 * @public
 */
export interface TrustedCertificatePublicKey {
  /**
   * <p>The role of the key, the algorithm it supports, and the cryptographic operations allowed with the key. This data is immutable after a trusted public key is imported.</p>
   * @public
   */
  KeyAttributes: KeyAttributes | undefined;

  /**
   * <p>Parameter information for trusted public key certificate import.</p>
   * @public
   */
  PublicKeyCertificate: string | undefined;

  /**
   * <p>The <code>KeyARN</code> of the root public key certificate or certificate chain that signs the trusted public key certificate import.</p>
   * @public
   */
  CertificateAuthorityPublicKeyIdentifier: string | undefined;
}

/**
 * <p>Parameter information for key material import into Amazon Web Services Payment Cryptography using TR-31 or TR-34 or RSA wrap and unwrap key exchange method.</p>
 * @public
 */
export type ImportKeyMaterial =
  | ImportKeyMaterial.DiffieHellmanTr31KeyBlockMember
  | ImportKeyMaterial.KeyCryptogramMember
  | ImportKeyMaterial.RootCertificatePublicKeyMember
  | ImportKeyMaterial.Tr31KeyBlockMember
  | ImportKeyMaterial.Tr34KeyBlockMember
  | ImportKeyMaterial.TrustedCertificatePublicKeyMember
  | ImportKeyMaterial.$UnknownMember;

/**
 * @public
 */
export namespace ImportKeyMaterial {
  /**
   * <p>Parameter information for root public key certificate import.</p>
   * @public
   */
  export interface RootCertificatePublicKeyMember {
    RootCertificatePublicKey: RootCertificatePublicKey;
    TrustedCertificatePublicKey?: never;
    Tr31KeyBlock?: never;
    Tr34KeyBlock?: never;
    KeyCryptogram?: never;
    DiffieHellmanTr31KeyBlock?: never;
    $unknown?: never;
  }

  /**
   * <p>Parameter information for trusted public key certificate import.</p>
   * @public
   */
  export interface TrustedCertificatePublicKeyMember {
    RootCertificatePublicKey?: never;
    TrustedCertificatePublicKey: TrustedCertificatePublicKey;
    Tr31KeyBlock?: never;
    Tr34KeyBlock?: never;
    KeyCryptogram?: never;
    DiffieHellmanTr31KeyBlock?: never;
    $unknown?: never;
  }

  /**
   * <p>Parameter information for key material import using symmetric TR-31 key exchange method.</p>
   * @public
   */
  export interface Tr31KeyBlockMember {
    RootCertificatePublicKey?: never;
    TrustedCertificatePublicKey?: never;
    Tr31KeyBlock: ImportTr31KeyBlock;
    Tr34KeyBlock?: never;
    KeyCryptogram?: never;
    DiffieHellmanTr31KeyBlock?: never;
    $unknown?: never;
  }

  /**
   * <p>Parameter information for key material import using the asymmetric TR-34 key exchange method.</p>
   * @public
   */
  export interface Tr34KeyBlockMember {
    RootCertificatePublicKey?: never;
    TrustedCertificatePublicKey?: never;
    Tr31KeyBlock?: never;
    Tr34KeyBlock: ImportTr34KeyBlock;
    KeyCryptogram?: never;
    DiffieHellmanTr31KeyBlock?: never;
    $unknown?: never;
  }

  /**
   * <p>Parameter information for key material import using asymmetric RSA wrap and unwrap key exchange method.</p>
   * @public
   */
  export interface KeyCryptogramMember {
    RootCertificatePublicKey?: never;
    TrustedCertificatePublicKey?: never;
    Tr31KeyBlock?: never;
    Tr34KeyBlock?: never;
    KeyCryptogram: ImportKeyCryptogram;
    DiffieHellmanTr31KeyBlock?: never;
    $unknown?: never;
  }

  /**
   * <p>Key derivation parameter information for key material import using asymmetric ECDH key exchange method.</p>
   * @public
   */
  export interface DiffieHellmanTr31KeyBlockMember {
    RootCertificatePublicKey?: never;
    TrustedCertificatePublicKey?: never;
    Tr31KeyBlock?: never;
    Tr34KeyBlock?: never;
    KeyCryptogram?: never;
    DiffieHellmanTr31KeyBlock: ImportDiffieHellmanTr31KeyBlock;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    RootCertificatePublicKey?: never;
    TrustedCertificatePublicKey?: never;
    Tr31KeyBlock?: never;
    Tr34KeyBlock?: never;
    KeyCryptogram?: never;
    DiffieHellmanTr31KeyBlock?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    RootCertificatePublicKey: (value: RootCertificatePublicKey) => T;
    TrustedCertificatePublicKey: (value: TrustedCertificatePublicKey) => T;
    Tr31KeyBlock: (value: ImportTr31KeyBlock) => T;
    Tr34KeyBlock: (value: ImportTr34KeyBlock) => T;
    KeyCryptogram: (value: ImportKeyCryptogram) => T;
    DiffieHellmanTr31KeyBlock: (value: ImportDiffieHellmanTr31KeyBlock) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface ImportKeyInput {
  /**
   * <p>The key or public key certificate type to use during key material import, for example TR-34 or RootCertificatePublicKey.</p>
   * @public
   */
  KeyMaterial: ImportKeyMaterial | undefined;

  /**
   * <p>The algorithm that Amazon Web Services Payment Cryptography uses to calculate the key check value (KCV). It is used to validate the key integrity.</p> <p>For TDES keys, the KCV is computed by encrypting 8 bytes, each with value of zero, with the key to be checked and retaining the 3 highest order bytes of the encrypted result. For AES keys, the KCV is computed using a CMAC algorithm where the input data is 16 bytes of zero and retaining the 3 highest order bytes of the encrypted result.</p>
   * @public
   */
  KeyCheckValueAlgorithm?: KeyCheckValueAlgorithm | undefined;

  /**
   * <p>Specifies whether import key is enabled.</p>
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * <p>Assigns one or more tags to the Amazon Web Services Payment Cryptography key. Use this parameter to tag a key when it is imported. To tag an existing Amazon Web Services Payment Cryptography key, use the <a href="https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_TagResource.html">TagResource</a> operation.</p> <p>Each tag consists of a tag key and a tag value. Both the tag key and the tag value are required, but the tag value can be an empty (null) string. You can't have more than one tag on an Amazon Web Services Payment Cryptography key with the same tag key. If you specify an existing tag key with a different tag value, Amazon Web Services Payment Cryptography replaces the current tag value with the specified one.</p> <important> <p>Don't include personal, confidential or sensitive information in this field. This field may be displayed in plaintext in CloudTrail logs and other output.</p> </important> <note> <p>Tagging or untagging an Amazon Web Services Payment Cryptography key can allow or deny permission to the key.</p> </note>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>A list of Amazon Web Services Regions for key replication operations.</p> <p>Each region in the list must be a valid Amazon Web Services Region identifier where Amazon Web Services Payment Cryptography is available. This list is used to specify which regions should be added to or removed from a key's replication configuration.</p>
   * @public
   */
  ReplicationRegions?: string[] | undefined;
}

/**
 * @public
 */
export interface ImportKeyOutput {
  /**
   * <p>The <code>KeyARN</code> of the key material imported within Amazon Web Services Payment Cryptography.</p>
   * @public
   */
  Key: Key | undefined;
}

/**
 * @public
 */
export interface ListKeysInput {
  /**
   * <p>The key state of the keys you want to list.</p>
   * @public
   */
  KeyState?: KeyState | undefined;

  /**
   * <p>Use this parameter in a subsequent request after you receive a response with truncated results. Set it to the value of <code>NextToken</code> from the truncated response you just received.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Use this parameter to specify the maximum number of items to return. When this value is present, Amazon Web Services Payment Cryptography does not return more than the specified number of items, but it might return fewer.</p> <p>This value is optional. If you include a value, it must be between 1 and 100, inclusive. If you do not include a value, it defaults to 50.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Metadata about an Amazon Web Services Payment Cryptography key.</p>
 * @public
 */
export interface KeySummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the key.</p>
   * @public
   */
  KeyArn: string | undefined;

  /**
   * <p>The state of an Amazon Web Services Payment Cryptography that is being created or deleted.</p>
   * @public
   */
  KeyState: KeyState | undefined;

  /**
   * <p>The role of the key, the algorithm it supports, and the cryptographic operations allowed with the key. This data is immutable after the key is created.</p>
   * @public
   */
  KeyAttributes: KeyAttributes | undefined;

  /**
   * <p>The key check value (KCV) is used to check if all parties holding a given key have the same key or to detect that a key has changed.</p>
   * @public
   */
  KeyCheckValue: string | undefined;

  /**
   * <p>Specifies whether the key is exportable. This data is immutable after the key is created.</p>
   * @public
   */
  Exportable: boolean | undefined;

  /**
   * <p>Specifies whether the key is enabled. </p>
   * @public
   */
  Enabled: boolean | undefined;

  /**
   * <p>Indicates whether this key is a Multi-Region key and its role in the Multi-Region key hierarchy.</p> <p>Multi-Region replication keys allow the same key material to be used across multiple Amazon Web Services Regions. This field specifies whether the key is a Primary Region key (PRK) (which can be replicated to other Amazon Web Services Regions) or a Replica Region key (RRK) (which is a copy of a PRK in another Region). For more information, see <a href="https://docs.aws.amazon.com/payment-cryptography/latest/userguide/keys-multi-region-replication.html">Multi-Region key replication</a>.</p>
   * @public
   */
  MultiRegionKeyType?: MultiRegionKeyType | undefined;

  /**
   * <p>An Amazon Web Services Region identifier in the standard format (e.g., <code>us-east-1</code>, <code>eu-west-1</code>).</p> <p>Used to specify regions for key replication operations. The region must be a valid Amazon Web Services Region where Amazon Web Services Payment Cryptography is available.</p>
   * @public
   */
  PrimaryRegion?: string | undefined;
}

/**
 * @public
 */
export interface ListKeysOutput {
  /**
   * <p>The list of keys created within the caller's Amazon Web Services account and Amazon Web Services Region.</p>
   * @public
   */
  Keys: KeySummary[] | undefined;

  /**
   * <p>The token for the next set of results, or an empty or null value if there are no more results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Input parameters for removing replication regions from a specific key.</p>
 * @public
 */
export interface RemoveKeyReplicationRegionsInput {
  /**
   * <p>The key identifier (ARN or alias) of the key from which to remove replication regions.</p> <p>This key must exist and have replication enabled in the specified regions.</p>
   * @public
   */
  KeyIdentifier: string | undefined;

  /**
   * <p>The list of Amazon Web Services Regions to remove from the key's replication configuration.</p> <p>The key will no longer be available for cryptographic operations in these regions after removal. Ensure no active operations depend on the key in these regions before removal.</p>
   * @public
   */
  ReplicationRegions: string[] | undefined;
}

/**
 * <p>Output from removing replication regions from a key.</p>
 * @public
 */
export interface RemoveKeyReplicationRegionsOutput {
  /**
   * <p>The updated key metadata after removing the replication regions.</p> <p>This reflects the current state of the key and its updated replication configuration.</p>
   * @public
   */
  Key: Key | undefined;
}

/**
 * @public
 */
export interface RestoreKeyInput {
  /**
   * <p>The <code>KeyARN</code> of the key to be restored within Amazon Web Services Payment Cryptography.</p>
   * @public
   */
  KeyIdentifier: string | undefined;
}

/**
 * @public
 */
export interface RestoreKeyOutput {
  /**
   * <p>The key material of the restored key. The <code>KeyState</code> will change to <code>CREATE_COMPLETE</code> and value for <code>DeletePendingTimestamp</code> gets removed. </p>
   * @public
   */
  Key: Key | undefined;
}

/**
 * @public
 */
export interface StartKeyUsageInput {
  /**
   * <p>The <code>KeyArn</code> of the key.</p>
   * @public
   */
  KeyIdentifier: string | undefined;
}

/**
 * @public
 */
export interface StartKeyUsageOutput {
  /**
   * <p>The <code>KeyARN</code> of the Amazon Web Services Payment Cryptography key activated for use.</p>
   * @public
   */
  Key: Key | undefined;
}

/**
 * @public
 */
export interface StopKeyUsageInput {
  /**
   * <p>The <code>KeyArn</code> of the key.</p>
   * @public
   */
  KeyIdentifier: string | undefined;
}

/**
 * @public
 */
export interface StopKeyUsageOutput {
  /**
   * <p>The <code>KeyARN</code> of the key.</p>
   * @public
   */
  Key: Key | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceInput {
  /**
   * <p>The <code>KeyARN</code> of the key whose tags you are getting.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>Use this parameter in a subsequent request after you receive a response with truncated results. Set it to the value of <code>NextToken</code> from the truncated response you just received.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Use this parameter to specify the maximum number of items to return. When this value is present, Amazon Web Services Payment Cryptography does not return more than the specified number of items, but it might return fewer.</p> <p>This value is optional. If you include a value, it must be between 1 and 100, inclusive. If you do not include a value, it defaults to 50.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceOutput {
  /**
   * <p>The list of tags associated with a <code>ResourceArn</code>. Each tag will list the key-value pair contained within that tag.</p>
   * @public
   */
  Tags: Tag[] | undefined;

  /**
   * <p>The token for the next set of results, or an empty or null value if there are no more results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface TagResourceInput {
  /**
   * <p>The <code>KeyARN</code> of the key whose tags are being updated.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>One or more tags. Each tag consists of a tag key and a tag value. The tag value can be an empty (null) string. You can't have more than one tag on an Amazon Web Services Payment Cryptography key with the same tag key. If you specify an existing tag key with a different tag value, Amazon Web Services Payment Cryptography replaces the current tag value with the new one.</p> <important> <p>Don't include personal, confidential or sensitive information in this field. This field may be displayed in plaintext in CloudTrail logs and other output.</p> </important> <p>To use this parameter, you must have <a href="https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_TagResource.html">TagResource</a> permission in an IAM policy.</p> <important> <p>Don't include personal, confidential or sensitive information in this field. This field may be displayed in plaintext in CloudTrail logs and other output.</p> </important>
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface TagResourceOutput {}

/**
 * @public
 */
export interface UntagResourceInput {
  /**
   * <p>The <code>KeyARN</code> of the key whose tags are being removed.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>One or more tag keys. Don't include the tag values.</p> <p>If the Amazon Web Services Payment Cryptography key doesn't have the specified tag key, Amazon Web Services Payment Cryptography doesn't throw an exception or return a response. To confirm that the operation succeeded, use the <a href="https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_ListTagsForResource.html">ListTagsForResource</a> operation.</p>
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceOutput {}
