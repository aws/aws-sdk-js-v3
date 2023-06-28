// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { PaymentCryptographyServiceException as __BaseException } from "./PaymentCryptographyServiceException";

/**
 * @public
 * <p>You do not have sufficient access to perform this action.</p>
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  Message?: string;
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
 * @public
 * <p>Contains information about an alias.</p>
 */
export interface Alias {
  /**
   * <p>A friendly name that you can use to refer to a key. The value must begin with <code>alias/</code>.</p>
   *          <important>
   *             <p>Do not include confidential or sensitive information in this field. This field may be displayed in plaintext in CloudTrail logs and other output.</p>
   *          </important>
   */
  AliasName: string | undefined;

  /**
   * <p>The <code>KeyARN</code> of the key associated with the alias.</p>
   */
  KeyArn?: string;
}

/**
 * @public
 * <p>This request can cause an inconsistent state for the resource.</p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  Message?: string;
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
 * @public
 */
export interface CreateAliasInput {
  /**
   * <p>A friendly name that you can use to refer a key. An alias must begin with <code>alias/</code> followed by a name, for example <code>alias/ExampleAlias</code>. It can contain only alphanumeric characters, forward slashes (/), underscores (_), and dashes (-).</p>
   *          <important>
   *             <p>Don't include confidential or sensitive information in this field. This field may be displayed in plaintext in CloudTrail logs and other output.</p>
   *          </important>
   */
  AliasName: string | undefined;

  /**
   * <p>The <code>KeyARN</code> of the key to associate with the alias.</p>
   */
  KeyArn?: string;
}

/**
 * @public
 */
export interface CreateAliasOutput {
  /**
   * <p>The alias for the key.</p>
   */
  Alias: Alias | undefined;
}

/**
 * @public
 * <p>The request processing has failed because of an unknown error, exception, or failure.</p>
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  Message?: string;
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
 * @public
 * <p>The request was denied due to an invalid resource error.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * <p>The string for the exception.</p>
   */
  ResourceId?: string;
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
 * @public
 * <p>This request would cause a service quota to be exceeded.</p>
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  Message?: string;
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
 * @public
 * <p>The service cannot complete the request.</p>
 */
export class ServiceUnavailableException extends __BaseException {
  readonly name: "ServiceUnavailableException" = "ServiceUnavailableException";
  readonly $fault: "server" = "server";
  Message?: string;
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
 * <p>The request was denied due to request throttling.</p>
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  Message?: string;
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
 * @public
 * <p>The request was denied due to an invalid request error.</p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  Message?: string;
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
 * @public
 * @enum
 */
export const KeyAlgorithm = {
  AES_128: "AES_128",
  AES_192: "AES_192",
  AES_256: "AES_256",
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
 * @public
 * <p>The list of cryptographic operations that you can perform using the key. The modes of use are deﬁned in section A.5.3 of the TR-31 spec.</p>
 */
export interface KeyModesOfUse {
  /**
   * <p>Speciﬁes whether an Amazon Web Services Payment Cryptography key can be used to encrypt data.</p>
   */
  Encrypt?: boolean;

  /**
   * <p>Speciﬁes whether an Amazon Web Services Payment Cryptography key can be used to decrypt data.</p>
   */
  Decrypt?: boolean;

  /**
   * <p>Speciﬁes whether an Amazon Web Services Payment Cryptography key can be used to wrap other keys.</p>
   */
  Wrap?: boolean;

  /**
   * <p>Speciﬁes whether an Amazon Web Services Payment Cryptography key can be used to unwrap other keys.</p>
   */
  Unwrap?: boolean;

  /**
   * <p>Speciﬁes whether an Amazon Web Services Payment Cryptography key can be used to generate and verify other card and PIN verification keys.</p>
   */
  Generate?: boolean;

  /**
   * <p>Speciﬁes whether an Amazon Web Services Payment Cryptography key can be used for signing.</p>
   */
  Sign?: boolean;

  /**
   * <p>Speciﬁes whether an Amazon Web Services Payment Cryptography key can be used to verify signatures.</p>
   */
  Verify?: boolean;

  /**
   * <p>Speciﬁes whether an Amazon Web Services Payment Cryptography key can be used to derive new keys.</p>
   */
  DeriveKey?: boolean;

  /**
   * <p>Speciﬁes whether an Amazon Web Services Payment Cryptography key has no special restrictions other than the restrictions implied by <code>KeyUsage</code>.</p>
   */
  NoRestrictions?: boolean;
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
 * @public
 * <p>The role of the key, the algorithm it supports, and the cryptographic operations allowed with the key. This data is immutable after the key is created.</p>
 */
export interface KeyAttributes {
  /**
   * <p>The cryptographic usage of an Amazon Web Services Payment Cryptography key as deﬁned in section A.5.2 of the TR-31 spec.</p>
   */
  KeyUsage: KeyUsage | string | undefined;

  /**
   * <p>The type of Amazon Web Services Payment Cryptography key to create, which determines the classiﬁcation of the cryptographic method and whether Amazon Web Services Payment Cryptography key contains a symmetric key or an asymmetric key pair.</p>
   */
  KeyClass: KeyClass | string | undefined;

  /**
   * <p>The key algorithm to be use during creation of an Amazon Web Services Payment Cryptography key.</p>
   *          <p>For symmetric keys, Amazon Web Services Payment Cryptography supports <code>AES</code> and <code>TDES</code> algorithms. For asymmetric keys, Amazon Web Services Payment Cryptography supports <code>RSA</code> and <code>ECC_NIST</code> algorithms.</p>
   */
  KeyAlgorithm: KeyAlgorithm | string | undefined;

  /**
   * <p>The list of cryptographic operations that you can perform using the key.</p>
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
} as const;

/**
 * @public
 */
export type KeyCheckValueAlgorithm = (typeof KeyCheckValueAlgorithm)[keyof typeof KeyCheckValueAlgorithm];

/**
 * @public
 * <p>A structure that contains information about a tag.</p>
 */
export interface Tag {
  /**
   * <p>The key of the tag.</p>
   */
  Key: string | undefined;

  /**
   * <p>The value of the tag.</p>
   */
  Value?: string;
}

/**
 * @public
 */
export interface CreateKeyInput {
  /**
   * <p>The role of the key, the algorithm it supports, and the cryptographic operations allowed with the key. This data is immutable after the key is created.</p>
   */
  KeyAttributes: KeyAttributes | undefined;

  /**
   * <p>The algorithm that Amazon Web Services Payment Cryptography uses to calculate the key check value (KCV) for DES and AES keys.</p>
   *          <p>For DES key, the KCV is computed by encrypting 8 bytes, each with value '00', with the key to be checked and retaining the 3 highest order bytes of the encrypted result. For AES key, the KCV is computed by encrypting 8 bytes, each with value '01', with the key to be checked and retaining the 3 highest order bytes of the encrypted result.</p>
   */
  KeyCheckValueAlgorithm?: KeyCheckValueAlgorithm | string;

  /**
   * <p>Specifies whether the key is exportable from the service.</p>
   */
  Exportable: boolean | undefined;

  /**
   * <p>Specifies whether to enable the key. If the key is enabled, it is activated for use within the service. If the key not enabled, then it is created but not activated. The default value is enabled.</p>
   */
  Enabled?: boolean;

  /**
   * <p>The tags to attach to the key. Each tag consists of a tag key and a tag value. Both the tag key and the tag value are required, but the tag value can be an empty (null) string. You can't have more than one tag on an Amazon Web Services Payment Cryptography key with the same tag key. </p>
   *          <p>To use this parameter, you must have <code>TagResource</code> permission.</p>
   *          <important>
   *             <p>Don't include confidential or sensitive information in this field. This field may be displayed in plaintext in CloudTrail logs and other output.</p>
   *          </important>
   *          <note>
   *             <p>Tagging or untagging an Amazon Web Services Payment Cryptography key can allow or deny permission to the key.</p>
   *          </note>
   */
  Tags?: Tag[];
}

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
 * <p>Metadata about an Amazon Web Services Payment Cryptography key.</p>
 */
export interface Key {
  /**
   * <p>The Amazon Resource Name (ARN) of the key.</p>
   */
  KeyArn: string | undefined;

  /**
   * <p>The role of the key, the algorithm it supports, and the cryptographic operations allowed with the key. This data is immutable after the key is created.</p>
   */
  KeyAttributes: KeyAttributes | undefined;

  /**
   * <p>The key check value (KCV) is used to check if all parties holding a given key have the same key or to detect that a key has changed. Amazon Web Services Payment Cryptography calculates the KCV by using standard algorithms, typically by encrypting 8 or 16 bytes or "00" or "01" and then truncating the result to the first 3 bytes, or 6 hex digits, of the resulting cryptogram.</p>
   */
  KeyCheckValue: string | undefined;

  /**
   * <p>The algorithm used for calculating key check value (KCV) for DES and AES keys. For a DES key, Amazon Web Services Payment Cryptography computes the KCV by encrypting 8 bytes, each with value '00', with the key to be checked and retaining the 3 highest order bytes of the encrypted result. For an AES key, Amazon Web Services Payment Cryptography computes the KCV by encrypting 8 bytes, each with value '01', with the key to be checked and retaining the 3 highest order bytes of the encrypted result.</p>
   */
  KeyCheckValueAlgorithm: KeyCheckValueAlgorithm | string | undefined;

  /**
   * <p>Specifies whether the key is enabled. </p>
   */
  Enabled: boolean | undefined;

  /**
   * <p>Specifies whether the key is exportable. This data is immutable after the key is created.</p>
   */
  Exportable: boolean | undefined;

  /**
   * <p>The state of key that is being created or deleted.</p>
   */
  KeyState: KeyState | string | undefined;

  /**
   * <p>The source of the key material. For keys created within Amazon Web Services Payment Cryptography, the value is <code>AWS_PAYMENT_CRYPTOGRAPHY</code>. For keys imported into Amazon Web Services Payment Cryptography, the value is <code>EXTERNAL</code>.</p>
   */
  KeyOrigin: KeyOrigin | string | undefined;

  /**
   * <p>The date and time when the key was created.</p>
   */
  CreateTimestamp: Date | undefined;

  /**
   * <p>The date and time after which Amazon Web Services Payment Cryptography will start using the key material for cryptographic operations.</p>
   */
  UsageStartTimestamp?: Date;

  /**
   * <p>The date and time after which Amazon Web Services Payment Cryptography will stop using the key material for cryptographic operations.</p>
   */
  UsageStopTimestamp?: Date;

  /**
   * <p>The date and time after which Amazon Web Services Payment Cryptography will delete the key. This value is present only when <code>KeyState</code> is <code>DELETE_PENDING</code> and the key is scheduled for deletion.</p>
   */
  DeletePendingTimestamp?: Date;

  /**
   * <p>The date and time after which Amazon Web Services Payment Cryptography will delete the key. This value is present only when when the <code>KeyState</code> is <code>DELETE_COMPLETE</code> and the Amazon Web Services Payment Cryptography key is deleted.</p>
   */
  DeleteTimestamp?: Date;
}

/**
 * @public
 */
export interface CreateKeyOutput {
  /**
   * <p>The key material that contains all the key attributes.</p>
   */
  Key: Key | undefined;
}

/**
 * @public
 */
export interface DeleteAliasInput {
  /**
   * <p>A friendly name that you can use to refer Amazon Web Services Payment Cryptography key. This value must begin with <code>alias/</code> followed by a name, such as <code>alias/ExampleAlias</code>.</p>
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
export interface DeleteKeyInput {
  /**
   * <p>The <code>KeyARN</code> of the key that is scheduled for deletion.</p>
   */
  KeyIdentifier: string | undefined;

  /**
   * <p>The waiting period for key deletion. The default value is seven days.</p>
   */
  DeleteKeyInDays?: number;
}

/**
 * @public
 */
export interface DeleteKeyOutput {
  /**
   * <p>The <code>KeyARN</code> of the key that is scheduled for deletion.</p>
   */
  Key: Key | undefined;
}

/**
 * @public
 * <p>Parameter information for key material export using TR-31 standard.</p>
 */
export interface ExportTr31KeyBlock {
  /**
   * <p>The <code>KeyARN</code> of the the wrapping key. This key encrypts or wraps the key under export for TR-31 key block generation.</p>
   */
  WrappingKeyIdentifier: string | undefined;
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
 * @public
 * <p>Parameter information for key material export using TR-34 standard.</p>
 */
export interface ExportTr34KeyBlock {
  /**
   * <p>The <code>KeyARN</code> of the certificate chain that signs the wrapping key certificate during TR-34 key export.</p>
   */
  CertificateAuthorityPublicKeyIdentifier: string | undefined;

  /**
   * <p>The <code>KeyARN</code> of the wrapping key certificate. Amazon Web Services Payment Cryptography uses this certificate to wrap the key under export.</p>
   */
  WrappingKeyCertificate: string | undefined;

  /**
   * <p>The export token to initiate key export from Amazon Web Services Payment Cryptography. It also contains the signing key certificate that will sign the wrapped key during TR-34 key block generation. Call <a>GetParametersForExport</a> to receive an export token. It expires after 7 days. You can use the same export token to export multiple keys from the same service account.</p>
   */
  ExportToken: string | undefined;

  /**
   * <p>The format of key block that Amazon Web Services Payment Cryptography will use during key export.</p>
   */
  KeyBlockFormat: Tr34KeyBlockFormat | string | undefined;

  /**
   * <p>A random number value that is unique to the TR-34 key block generated using 2 pass. The operation will fail, if a random nonce value is not provided for a TR-34 key block generated using 2 pass.</p>
   */
  RandomNonce?: string;
}

/**
 * @public
 * <p>Parameter information for key material export from Amazon Web Services Payment Cryptography.</p>
 */
export type ExportKeyMaterial =
  | ExportKeyMaterial.Tr31KeyBlockMember
  | ExportKeyMaterial.Tr34KeyBlockMember
  | ExportKeyMaterial.$UnknownMember;

/**
 * @public
 */
export namespace ExportKeyMaterial {
  /**
   * <p>Parameter information for key material export using TR-31 standard.</p>
   */
  export interface Tr31KeyBlockMember {
    Tr31KeyBlock: ExportTr31KeyBlock;
    Tr34KeyBlock?: never;
    $unknown?: never;
  }

  /**
   * <p>Parameter information for key material export using TR-34 standard.</p>
   */
  export interface Tr34KeyBlockMember {
    Tr31KeyBlock?: never;
    Tr34KeyBlock: ExportTr34KeyBlock;
    $unknown?: never;
  }

  export interface $UnknownMember {
    Tr31KeyBlock?: never;
    Tr34KeyBlock?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    Tr31KeyBlock: (value: ExportTr31KeyBlock) => T;
    Tr34KeyBlock: (value: ExportTr34KeyBlock) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ExportKeyMaterial, visitor: Visitor<T>): T => {
    if (value.Tr31KeyBlock !== undefined) return visitor.Tr31KeyBlock(value.Tr31KeyBlock);
    if (value.Tr34KeyBlock !== undefined) return visitor.Tr34KeyBlock(value.Tr34KeyBlock);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface ExportKeyInput {
  /**
   * <p>The key block format type, for example, TR-34 or TR-31, to use during key material export.</p>
   */
  KeyMaterial: ExportKeyMaterial | undefined;

  /**
   * <p>The <code>KeyARN</code> of the key under export from Amazon Web Services Payment Cryptography.</p>
   */
  ExportKeyIdentifier: string | undefined;
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
 * @public
 * <p>Parameter information for generating a wrapped key using TR-31 or TR-34 standard.</p>
 */
export interface WrappedKey {
  /**
   * <p>The <code>KeyARN</code> of the wrapped key.</p>
   */
  WrappingKeyArn: string | undefined;

  /**
   * <p>The key block format of a wrapped key.</p>
   */
  WrappedKeyMaterialFormat: WrappedKeyMaterialFormat | string | undefined;

  /**
   * <p>Parameter information for generating a wrapped key using TR-31 or TR-34 standard.</p>
   */
  KeyMaterial: string | undefined;
}

/**
 * @public
 */
export interface ExportKeyOutput {
  /**
   * <p>The key material under export as a TR-34 or TR-31 wrapped key block.</p>
   */
  WrappedKey?: WrappedKey;
}

/**
 * @public
 */
export interface GetAliasInput {
  /**
   * <p>The alias of the Amazon Web Services Payment Cryptography key.</p>
   */
  AliasName: string | undefined;
}

/**
 * @public
 */
export interface GetAliasOutput {
  /**
   * <p>The alias of the Amazon Web Services Payment Cryptography key.</p>
   */
  Alias: Alias | undefined;
}

/**
 * @public
 */
export interface GetKeyInput {
  /**
   * <p>The <code>KeyARN</code> of the Amazon Web Services Payment Cryptography key.</p>
   */
  KeyIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetKeyOutput {
  /**
   * <p>The key material, including the immutable and mutable data for the key.</p>
   */
  Key: Key | undefined;
}

/**
 * @public
 * @enum
 */
export const KeyMaterialType = {
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
   */
  KeyMaterialType: KeyMaterialType | string | undefined;

  /**
   * <p>The signing key algorithm to generate a signing key certificate. This certificate signs the wrapped key under export within the TR-34 key block cryptogram. <code>RSA_2048</code> is the only signing key algorithm allowed.</p>
   */
  SigningKeyAlgorithm: KeyAlgorithm | string | undefined;
}

/**
 * @public
 */
export interface GetParametersForExportOutput {
  /**
   * <p>The signing key certificate of the public key for signature within the TR-34 key block cryptogram. The certificate expires after 7 days.</p>
   */
  SigningKeyCertificate: string | undefined;

  /**
   * <p>The certificate chain that signed the signing key certificate. This is the root certificate authority (CA) within your service account.</p>
   */
  SigningKeyCertificateChain: string | undefined;

  /**
   * <p>The algorithm of the signing key certificate for use in TR-34 key block generation. <code>RSA_2048</code> is the only signing key algorithm allowed.</p>
   */
  SigningKeyAlgorithm: KeyAlgorithm | string | undefined;

  /**
   * <p>The export token to initiate key export from Amazon Web Services Payment Cryptography. The export token expires after 7 days. You can use the same export token to export multiple keys from the same service account.</p>
   */
  ExportToken: string | undefined;

  /**
   * <p>The validity period of the export token.</p>
   */
  ParametersValidUntilTimestamp: Date | undefined;
}

/**
 * @public
 */
export interface GetParametersForImportInput {
  /**
   * <p>The key block format type such as TR-34 or TR-31 to use during key material import. Import token is only required for TR-34 key import <code>TR34_KEY_BLOCK</code>. Import token is not required for TR-31 key import.</p>
   */
  KeyMaterialType: KeyMaterialType | string | undefined;

  /**
   * <p>The wrapping key algorithm to generate a wrapping key certificate. This certificate wraps the key under import within the TR-34 key block cryptogram. <code>RSA_2048</code> is the only wrapping key algorithm allowed.</p>
   */
  WrappingKeyAlgorithm: KeyAlgorithm | string | undefined;
}

/**
 * @public
 */
export interface GetParametersForImportOutput {
  /**
   * <p>The wrapping key certificate of the wrapping key for use within the TR-34 key block. The certificate expires in 7 days.</p>
   */
  WrappingKeyCertificate: string | undefined;

  /**
   * <p>The Amazon Web Services Payment Cryptography certificate chain that signed the wrapping key certificate. This is the root certificate authority (CA) within your service account.</p>
   */
  WrappingKeyCertificateChain: string | undefined;

  /**
   * <p>The algorithm of the wrapping key for use within TR-34 key block. <code>RSA_2048</code> is the only wrapping key algorithm allowed.</p>
   */
  WrappingKeyAlgorithm: KeyAlgorithm | string | undefined;

  /**
   * <p>The import token to initiate key import into Amazon Web Services Payment Cryptography. The import token expires after 7 days. You can use the same import token to import multiple keys to the same service account.</p>
   */
  ImportToken: string | undefined;

  /**
   * <p>The validity period of the import token.</p>
   */
  ParametersValidUntilTimestamp: Date | undefined;
}

/**
 * @public
 */
export interface GetPublicKeyCertificateInput {
  /**
   * <p>The <code>KeyARN</code> of the asymmetric key pair.</p>
   */
  KeyIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetPublicKeyCertificateOutput {
  /**
   * <p>The public key component of the asymmetric key pair in a certificate (PEM) format. It is signed by the root certificate authority (CA) within your service account. The certificate expires in 90 days.</p>
   */
  KeyCertificate: string | undefined;

  /**
   * <p>The certificate chain that signed the public key certificate of the asymmetric key pair. This is the root certificate authority (CA) within your service account.</p>
   */
  KeyCertificateChain: string | undefined;
}

/**
 * @public
 * <p>Parameter information for root public key certificate import.</p>
 */
export interface RootCertificatePublicKey {
  /**
   * <p>The role of the key, the algorithm it supports, and the cryptographic operations allowed with the key. This data is immutable after the root public key is imported.</p>
   */
  KeyAttributes: KeyAttributes | undefined;

  /**
   * <p>Parameter information for root public key certificate import.</p>
   */
  PublicKeyCertificate: string | undefined;
}

/**
 * @public
 * <p>Parameter information for key material import using TR-31 standard.</p>
 */
export interface ImportTr31KeyBlock {
  /**
   * <p>The <code>KeyARN</code> of the key that will decrypt or unwrap a TR-31 key block during import.</p>
   */
  WrappingKeyIdentifier: string | undefined;

  /**
   * <p>The TR-34 wrapped key block to import.</p>
   */
  WrappedKeyBlock: string | undefined;
}

/**
 * @public
 * <p>Parameter information for key material import using TR-34 standard.</p>
 */
export interface ImportTr34KeyBlock {
  /**
   * <p>The <code>KeyARN</code> of the certificate chain that signs the signing key certificate during TR-34 key import.</p>
   */
  CertificateAuthorityPublicKeyIdentifier: string | undefined;

  /**
   * <p>The public key component in PEM certificate format of the private key that signs the KDH TR-34 wrapped key block.</p>
   */
  SigningKeyCertificate: string | undefined;

  /**
   * <p>The import token that initiates key import into Amazon Web Services Payment Cryptography. It expires after 7 days. You can use the same import token to import multiple keys to the same service account.</p>
   */
  ImportToken: string | undefined;

  /**
   * <p>The TR-34 wrapped key block to import.</p>
   */
  WrappedKeyBlock: string | undefined;

  /**
   * <p>The key block format to use during key import. The only value allowed is <code>X9_TR34_2012</code>.</p>
   */
  KeyBlockFormat: Tr34KeyBlockFormat | string | undefined;

  /**
   * <p>A random number value that is unique to the TR-34 key block generated using 2 pass. The operation will fail, if a random nonce value is not provided for a TR-34 key block generated using 2 pass.</p>
   */
  RandomNonce?: string;
}

/**
 * @public
 * <p>Parameter information for trusted public key certificate import.</p>
 */
export interface TrustedCertificatePublicKey {
  /**
   * <p>The role of the key, the algorithm it supports, and the cryptographic operations allowed with the key. This data is immutable after a trusted public key is imported.</p>
   */
  KeyAttributes: KeyAttributes | undefined;

  /**
   * <p>Parameter information for trusted public key certificate import.</p>
   */
  PublicKeyCertificate: string | undefined;

  /**
   * <p>The <code>KeyARN</code> of the root public key certificate or certificate chain that signs the trusted public key certificate import.</p>
   */
  CertificateAuthorityPublicKeyIdentifier: string | undefined;
}

/**
 * @public
 * <p>Parameter information for key material import.</p>
 */
export type ImportKeyMaterial =
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
   */
  export interface RootCertificatePublicKeyMember {
    RootCertificatePublicKey: RootCertificatePublicKey;
    TrustedCertificatePublicKey?: never;
    Tr31KeyBlock?: never;
    Tr34KeyBlock?: never;
    $unknown?: never;
  }

  /**
   * <p>Parameter information for trusted public key certificate import.</p>
   */
  export interface TrustedCertificatePublicKeyMember {
    RootCertificatePublicKey?: never;
    TrustedCertificatePublicKey: TrustedCertificatePublicKey;
    Tr31KeyBlock?: never;
    Tr34KeyBlock?: never;
    $unknown?: never;
  }

  /**
   * <p>Parameter information for key material import using TR-31 standard.</p>
   */
  export interface Tr31KeyBlockMember {
    RootCertificatePublicKey?: never;
    TrustedCertificatePublicKey?: never;
    Tr31KeyBlock: ImportTr31KeyBlock;
    Tr34KeyBlock?: never;
    $unknown?: never;
  }

  /**
   * <p>Parameter information for key material import using TR-34 standard.</p>
   */
  export interface Tr34KeyBlockMember {
    RootCertificatePublicKey?: never;
    TrustedCertificatePublicKey?: never;
    Tr31KeyBlock?: never;
    Tr34KeyBlock: ImportTr34KeyBlock;
    $unknown?: never;
  }

  export interface $UnknownMember {
    RootCertificatePublicKey?: never;
    TrustedCertificatePublicKey?: never;
    Tr31KeyBlock?: never;
    Tr34KeyBlock?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    RootCertificatePublicKey: (value: RootCertificatePublicKey) => T;
    TrustedCertificatePublicKey: (value: TrustedCertificatePublicKey) => T;
    Tr31KeyBlock: (value: ImportTr31KeyBlock) => T;
    Tr34KeyBlock: (value: ImportTr34KeyBlock) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ImportKeyMaterial, visitor: Visitor<T>): T => {
    if (value.RootCertificatePublicKey !== undefined)
      return visitor.RootCertificatePublicKey(value.RootCertificatePublicKey);
    if (value.TrustedCertificatePublicKey !== undefined)
      return visitor.TrustedCertificatePublicKey(value.TrustedCertificatePublicKey);
    if (value.Tr31KeyBlock !== undefined) return visitor.Tr31KeyBlock(value.Tr31KeyBlock);
    if (value.Tr34KeyBlock !== undefined) return visitor.Tr34KeyBlock(value.Tr34KeyBlock);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface ImportKeyInput {
  /**
   * <p>The key or public key certificate type to use during key material import, for example TR-34 or RootCertificatePublicKey.</p>
   */
  KeyMaterial: ImportKeyMaterial | undefined;

  /**
   * <p>The algorithm that Amazon Web Services Payment Cryptography uses to calculate the key check value (KCV) for DES and AES keys.</p>
   *          <p>For DES key, the KCV is computed by encrypting 8 bytes, each with value '00', with the key to be checked and retaining the 3 highest order bytes of the encrypted result. For AES key, the KCV is computed by encrypting 8 bytes, each with value '01', with the key to be checked and retaining the 3 highest order bytes of the encrypted result.</p>
   */
  KeyCheckValueAlgorithm?: KeyCheckValueAlgorithm | string;

  /**
   * <p>Specifies whether import key is enabled.</p>
   */
  Enabled?: boolean;

  /**
   * <p>The tags to attach to the key. Each tag consists of a tag key and a tag value. Both the tag key and the tag value are required, but the tag value can be an empty (null) string. You can't have more than one tag on an Amazon Web Services Payment Cryptography key with the same tag key. </p>
   *          <p>You can't have more than one tag on an Amazon Web Services Payment Cryptography key with the same tag key. If you specify an existing tag key with a different tag value, Amazon Web Services Payment Cryptography replaces the current tag value with the specified one.</p>
   *          <p>To use this parameter, you must have <code>TagResource</code> permission.</p>
   *          <important>
   *             <p>Don't include confidential or sensitive information in this field. This field may be displayed in plaintext in CloudTrail logs and other output.</p>
   *          </important>
   *          <note>
   *             <p>Tagging or untagging an Amazon Web Services Payment Cryptography key can allow or deny permission to the key.</p>
   *          </note>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface ImportKeyOutput {
  /**
   * <p>The <code>KeyARN</code> of the key material imported within Amazon Web Services Payment Cryptography.</p>
   */
  Key: Key | undefined;
}

/**
 * @public
 * <p>Metadata about an Amazon Web Services Payment Cryptography key.</p>
 */
export interface KeySummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the key.</p>
   */
  KeyArn: string | undefined;

  /**
   * <p>The state of an Amazon Web Services Payment Cryptography that is being created or deleted.</p>
   */
  KeyState: KeyState | string | undefined;

  /**
   * <p>The role of the key, the algorithm it supports, and the cryptographic operations allowed with the key. This data is immutable after the key is created.</p>
   */
  KeyAttributes: KeyAttributes | undefined;

  /**
   * <p>The key check value (KCV) is used to check if all parties holding a given key have the same key or to detect that a key has changed. Amazon Web Services Payment Cryptography calculates the KCV by using standard algorithms, typically by encrypting 8 or 16 bytes or "00" or "01" and then truncating the result to the first 3 bytes, or 6 hex digits, of the resulting cryptogram.</p>
   */
  KeyCheckValue: string | undefined;

  /**
   * <p>Specifies whether the key is exportable. This data is immutable after the key is created.</p>
   */
  Exportable: boolean | undefined;

  /**
   * <p>Specifies whether the key is enabled. </p>
   */
  Enabled: boolean | undefined;
}

/**
 * @public
 */
export interface ListAliasesInput {
  /**
   * <p>Use this parameter in a subsequent request after you receive a response with truncated results. Set it to the value of <code>NextToken</code> from the truncated response you just received.</p>
   */
  NextToken?: string;

  /**
   * <p>Use this parameter to specify the maximum number of items to return. When this value is present, Amazon Web Services Payment Cryptography does not return more than the specified number of items, but it might return fewer.</p>
   *          <p>This value is optional. If you include a value, it must be between 1 and 100, inclusive. If you do not include a value, it defaults to 50.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListAliasesOutput {
  /**
   * <p>The list of aliases. Each alias describes the <code>KeyArn</code> contained within.</p>
   */
  Aliases: Alias[] | undefined;

  /**
   * <p>The token for the next set of results, or an empty or null value if there are no more results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListKeysInput {
  /**
   * <p>The key state of the keys you want to list.</p>
   */
  KeyState?: KeyState | string;

  /**
   * <p>Use this parameter in a subsequent request after you receive a response with truncated results. Set it to the value of <code>NextToken</code> from the truncated response you just received.</p>
   */
  NextToken?: string;

  /**
   * <p>Use this parameter to specify the maximum number of items to return. When this value is present, Amazon Web Services Payment Cryptography does not return more than the specified number of items, but it might return fewer.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListKeysOutput {
  /**
   * <p>The list of keys created within the caller's Amazon Web Services account and Amazon Web Services Region.</p>
   */
  Keys: KeySummary[] | undefined;

  /**
   * <p>The token for the next set of results, or an empty or null value if there are no more results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceInput {
  /**
   * <p>The <code>KeyARN</code> of the key whose tags you are getting.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>Use this parameter in a subsequent request after you receive a response with truncated results. Set it to the value of <code>NextToken</code> from the truncated response you just received.</p>
   */
  NextToken?: string;

  /**
   * <p>Use this parameter to specify the maximum number of items to return. When this value is present, Amazon Web Services Payment Cryptography does not return more than the specified number of items, but it might return fewer.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListTagsForResourceOutput {
  /**
   * <p>The list of tags associated with a <code>ResourceArn</code>. Each tag will list the key-value pair contained within that tag.</p>
   */
  Tags: Tag[] | undefined;

  /**
   * <p>The token for the next set of results, or an empty or null value if there are no more results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface RestoreKeyInput {
  /**
   * <p>The <code>KeyARN</code> of the key to be restored within Amazon Web Services Payment Cryptography.</p>
   */
  KeyIdentifier: string | undefined;
}

/**
 * @public
 */
export interface RestoreKeyOutput {
  /**
   * <p>The key material of the restored key. The <code>KeyState</code> will change to <code>CREATE_COMPLETE</code> and value for <code>DeletePendingTimestamp</code> gets removed. </p>
   */
  Key: Key | undefined;
}

/**
 * @public
 */
export interface StartKeyUsageInput {
  /**
   * <p>The <code>KeyArn</code> of the key.</p>
   */
  KeyIdentifier: string | undefined;
}

/**
 * @public
 */
export interface StartKeyUsageOutput {
  /**
   * <p>The <code>KeyARN</code> of the Amazon Web Services Payment Cryptography key activated for use.</p>
   */
  Key: Key | undefined;
}

/**
 * @public
 */
export interface StopKeyUsageInput {
  /**
   * <p>The <code>KeyArn</code> of the key.</p>
   */
  KeyIdentifier: string | undefined;
}

/**
 * @public
 */
export interface StopKeyUsageOutput {
  /**
   * <p>The <code>KeyARN</code> of the key.</p>
   */
  Key: Key | undefined;
}

/**
 * @public
 */
export interface TagResourceInput {
  /**
   * <p>The <code>KeyARN</code> of the key whose tags are being updated.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>One or more tags. Each tag consists of a tag key and a tag value. The tag value can be an empty (null) string. You can't have more than one tag on an Amazon Web Services Payment Cryptography key with the same tag key. If you specify an existing tag key with a different tag value, Amazon Web Services Payment Cryptography replaces the current tag value with the new one.</p>
   *          <important>
   *             <p>Don't include confidential or sensitive information in this field. This field may be displayed in plaintext in CloudTrail logs and other output.</p>
   *          </important>
   *          <p>To use this parameter, you must have <a>TagResource</a> permission in an IAM policy.</p>
   *          <important>
   *             <p>Don't include confidential or sensitive information in this field. This field may be displayed in plaintext in CloudTrail logs and other output.</p>
   *          </important>
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
   */
  ResourceArn: string | undefined;

  /**
   * <p>One or more tag keys. Don't include the tag values.</p>
   *          <p>If the Amazon Web Services Payment Cryptography key doesn't have the specified tag key, Amazon Web Services Payment Cryptography doesn't throw an exception or return a response. To confirm that the operation succeeded, use the <a>ListTagsForResource</a> operation.</p>
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceOutput {}

/**
 * @public
 */
export interface UpdateAliasInput {
  /**
   * <p>The alias whose associated key is changing.</p>
   */
  AliasName: string | undefined;

  /**
   * <p>The <code>KeyARN</code> for the key that you are updating or removing from the alias.</p>
   */
  KeyArn?: string;
}

/**
 * @public
 */
export interface UpdateAliasOutput {
  /**
   * <p>The alias name.</p>
   */
  Alias: Alias | undefined;
}

/**
 * @internal
 */
export const ExportTr34KeyBlockFilterSensitiveLog = (obj: ExportTr34KeyBlock): any => ({
  ...obj,
  ...(obj.WrappingKeyCertificate && { WrappingKeyCertificate: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ExportKeyMaterialFilterSensitiveLog = (obj: ExportKeyMaterial): any => {
  if (obj.Tr31KeyBlock !== undefined) return { Tr31KeyBlock: obj.Tr31KeyBlock };
  if (obj.Tr34KeyBlock !== undefined) return { Tr34KeyBlock: ExportTr34KeyBlockFilterSensitiveLog(obj.Tr34KeyBlock) };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const ExportKeyInputFilterSensitiveLog = (obj: ExportKeyInput): any => ({
  ...obj,
  ...(obj.KeyMaterial && { KeyMaterial: ExportKeyMaterialFilterSensitiveLog(obj.KeyMaterial) }),
});

/**
 * @internal
 */
export const WrappedKeyFilterSensitiveLog = (obj: WrappedKey): any => ({
  ...obj,
  ...(obj.KeyMaterial && { KeyMaterial: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ExportKeyOutputFilterSensitiveLog = (obj: ExportKeyOutput): any => ({
  ...obj,
  ...(obj.WrappedKey && { WrappedKey: WrappedKeyFilterSensitiveLog(obj.WrappedKey) }),
});

/**
 * @internal
 */
export const GetParametersForExportOutputFilterSensitiveLog = (obj: GetParametersForExportOutput): any => ({
  ...obj,
  ...(obj.SigningKeyCertificate && { SigningKeyCertificate: SENSITIVE_STRING }),
  ...(obj.SigningKeyCertificateChain && { SigningKeyCertificateChain: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetParametersForImportOutputFilterSensitiveLog = (obj: GetParametersForImportOutput): any => ({
  ...obj,
  ...(obj.WrappingKeyCertificate && { WrappingKeyCertificate: SENSITIVE_STRING }),
  ...(obj.WrappingKeyCertificateChain && { WrappingKeyCertificateChain: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetPublicKeyCertificateOutputFilterSensitiveLog = (obj: GetPublicKeyCertificateOutput): any => ({
  ...obj,
  ...(obj.KeyCertificate && { KeyCertificate: SENSITIVE_STRING }),
  ...(obj.KeyCertificateChain && { KeyCertificateChain: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RootCertificatePublicKeyFilterSensitiveLog = (obj: RootCertificatePublicKey): any => ({
  ...obj,
  ...(obj.PublicKeyCertificate && { PublicKeyCertificate: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ImportTr34KeyBlockFilterSensitiveLog = (obj: ImportTr34KeyBlock): any => ({
  ...obj,
  ...(obj.SigningKeyCertificate && { SigningKeyCertificate: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const TrustedCertificatePublicKeyFilterSensitiveLog = (obj: TrustedCertificatePublicKey): any => ({
  ...obj,
  ...(obj.PublicKeyCertificate && { PublicKeyCertificate: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ImportKeyMaterialFilterSensitiveLog = (obj: ImportKeyMaterial): any => {
  if (obj.RootCertificatePublicKey !== undefined)
    return { RootCertificatePublicKey: RootCertificatePublicKeyFilterSensitiveLog(obj.RootCertificatePublicKey) };
  if (obj.TrustedCertificatePublicKey !== undefined)
    return {
      TrustedCertificatePublicKey: TrustedCertificatePublicKeyFilterSensitiveLog(obj.TrustedCertificatePublicKey),
    };
  if (obj.Tr31KeyBlock !== undefined) return { Tr31KeyBlock: obj.Tr31KeyBlock };
  if (obj.Tr34KeyBlock !== undefined) return { Tr34KeyBlock: ImportTr34KeyBlockFilterSensitiveLog(obj.Tr34KeyBlock) };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const ImportKeyInputFilterSensitiveLog = (obj: ImportKeyInput): any => ({
  ...obj,
  ...(obj.KeyMaterial && { KeyMaterial: ImportKeyMaterialFilterSensitiveLog(obj.KeyMaterial) }),
});
