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
   * @public
   * <p>A friendly name that you can use to refer to a key. The value must begin with <code>alias/</code>.</p>
   *          <important>
   *             <p>Do not include confidential or sensitive information in this field. This field may be displayed in plaintext in CloudTrail logs and other output.</p>
   *          </important>
   */
  AliasName: string | undefined;

  /**
   * @public
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
   * @public
   * <p>A friendly name that you can use to refer to a key. An alias must begin with <code>alias/</code> followed by a name, for example <code>alias/ExampleAlias</code>. It can contain only alphanumeric characters, forward slashes (/), underscores (_), and dashes (-).</p>
   *          <important>
   *             <p>Don't include personal, confidential or sensitive information in this field. This field may be displayed in plaintext in CloudTrail logs and other output.</p>
   *          </important>
   */
  AliasName: string | undefined;

  /**
   * @public
   * <p>The <code>KeyARN</code> of the key to associate with the alias.</p>
   */
  KeyArn?: string;
}

/**
 * @public
 */
export interface CreateAliasOutput {
  /**
   * @public
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
   * @public
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
 */
export interface DeleteAliasInput {
  /**
   * @public
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
export interface GetAliasInput {
  /**
   * @public
   * <p>The alias of the Amazon Web Services Payment Cryptography key.</p>
   */
  AliasName: string | undefined;
}

/**
 * @public
 */
export interface GetAliasOutput {
  /**
   * @public
   * <p>The alias of the Amazon Web Services Payment Cryptography key.</p>
   */
  Alias: Alias | undefined;
}

/**
 * @public
 */
export interface ListAliasesInput {
  /**
   * @public
   * <p>Use this parameter in a subsequent request after you receive a response with truncated results. Set it to the value of <code>NextToken</code> from the truncated response you just received.</p>
   */
  NextToken?: string;

  /**
   * @public
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
   * @public
   * <p>The list of aliases. Each alias describes the <code>KeyArn</code> contained within.</p>
   */
  Aliases: Alias[] | undefined;

  /**
   * @public
   * <p>The token for the next set of results, or an empty or null value if there are no more results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface UpdateAliasInput {
  /**
   * @public
   * <p>The alias whose associated key is changing.</p>
   */
  AliasName: string | undefined;

  /**
   * @public
   * <p>The <code>KeyARN</code> for the key that you are updating or removing from the alias.</p>
   */
  KeyArn?: string;
}

/**
 * @public
 */
export interface UpdateAliasOutput {
  /**
   * @public
   * <p>The alias name.</p>
   */
  Alias: Alias | undefined;
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
   * @public
   * <p>Speciﬁes whether an Amazon Web Services Payment Cryptography key can be used to encrypt data.</p>
   */
  Encrypt?: boolean;

  /**
   * @public
   * <p>Speciﬁes whether an Amazon Web Services Payment Cryptography key can be used to decrypt data.</p>
   */
  Decrypt?: boolean;

  /**
   * @public
   * <p>Speciﬁes whether an Amazon Web Services Payment Cryptography key can be used to wrap other keys.</p>
   */
  Wrap?: boolean;

  /**
   * @public
   * <p>Speciﬁes whether an Amazon Web Services Payment Cryptography key can be used to unwrap other keys.</p>
   */
  Unwrap?: boolean;

  /**
   * @public
   * <p>Speciﬁes whether an Amazon Web Services Payment Cryptography key can be used to generate and verify other card and PIN verification keys.</p>
   */
  Generate?: boolean;

  /**
   * @public
   * <p>Speciﬁes whether an Amazon Web Services Payment Cryptography key can be used for signing.</p>
   */
  Sign?: boolean;

  /**
   * @public
   * <p>Speciﬁes whether an Amazon Web Services Payment Cryptography key can be used to verify signatures.</p>
   */
  Verify?: boolean;

  /**
   * @public
   * <p>Speciﬁes whether an Amazon Web Services Payment Cryptography key can be used to derive new keys.</p>
   */
  DeriveKey?: boolean;

  /**
   * @public
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
 * @public
 * <p>The role of the key, the algorithm it supports, and the cryptographic operations allowed with the key. This data is immutable after the key is created.</p>
 */
export interface KeyAttributes {
  /**
   * @public
   * <p>The cryptographic usage of an Amazon Web Services Payment Cryptography key as deﬁned in section A.5.2 of the TR-31 spec.</p>
   */
  KeyUsage: KeyUsage | undefined;

  /**
   * @public
   * <p>The type of Amazon Web Services Payment Cryptography key to create, which determines the classiﬁcation of the cryptographic method and whether Amazon Web Services Payment Cryptography key contains a symmetric key or an asymmetric key pair.</p>
   */
  KeyClass: KeyClass | undefined;

  /**
   * @public
   * <p>The key algorithm to be use during creation of an Amazon Web Services Payment Cryptography key.</p>
   *          <p>For symmetric keys, Amazon Web Services Payment Cryptography supports <code>AES</code> and <code>TDES</code> algorithms. For asymmetric keys, Amazon Web Services Payment Cryptography supports <code>RSA</code> and <code>ECC_NIST</code> algorithms.</p>
   */
  KeyAlgorithm: KeyAlgorithm | undefined;

  /**
   * @public
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
   * @public
   * <p>The key of the tag.</p>
   */
  Key: string | undefined;

  /**
   * @public
   * <p>The value of the tag.</p>
   */
  Value?: string;
}

/**
 * @public
 */
export interface CreateKeyInput {
  /**
   * @public
   * <p>The role of the key, the algorithm it supports, and the cryptographic operations allowed with the key. This data is immutable after the key is created.</p>
   */
  KeyAttributes: KeyAttributes | undefined;

  /**
   * @public
   * <p>The algorithm that Amazon Web Services Payment Cryptography uses to calculate the key check value (KCV). It is used to validate the key integrity.</p>
   *          <p>For TDES keys, the KCV is computed by encrypting 8 bytes, each with value of zero, with the key to be checked and retaining the 3 highest order bytes of the encrypted result. For AES keys, the KCV is computed using a CMAC algorithm where the input data is 16 bytes of zero and retaining the 3 highest order bytes of the encrypted result.</p>
   */
  KeyCheckValueAlgorithm?: KeyCheckValueAlgorithm;

  /**
   * @public
   * <p>Specifies whether the key is exportable from the service.</p>
   */
  Exportable: boolean | undefined;

  /**
   * @public
   * <p>Specifies whether to enable the key. If the key is enabled, it is activated for use within the service. If the key is not enabled, then it is created but not activated. The default value is enabled.</p>
   */
  Enabled?: boolean;

  /**
   * @public
   * <p>Assigns one or more tags to the Amazon Web Services Payment Cryptography key. Use this parameter to tag a key when it is created. To tag an existing Amazon Web Services Payment Cryptography key, use the <a>TagResource</a> operation.</p>
   *          <p>Each tag consists of a tag key and a tag value. Both the tag key and the tag value are required, but the tag value can be an empty (null) string. You can't have more than one tag on an Amazon Web Services Payment Cryptography key with the same tag key. </p>
   *          <important>
   *             <p>Don't include personal, confidential or sensitive information in this field. This field may be displayed in plaintext in CloudTrail logs and other output.</p>
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
   * @public
   * <p>The Amazon Resource Name (ARN) of the key.</p>
   */
  KeyArn: string | undefined;

  /**
   * @public
   * <p>The role of the key, the algorithm it supports, and the cryptographic operations allowed with the key. This data is immutable after the key is created.</p>
   */
  KeyAttributes: KeyAttributes | undefined;

  /**
   * @public
   * <p>The key check value (KCV) is used to check if all parties holding a given key have the same key or to detect that a key has changed.</p>
   */
  KeyCheckValue: string | undefined;

  /**
   * @public
   * <p>The algorithm that Amazon Web Services Payment Cryptography uses to calculate the key check value (KCV). It is used to validate the key integrity.</p>
   *          <p>For TDES keys, the KCV is computed by encrypting 8 bytes, each with value of zero, with the key to be checked and retaining the 3 highest order bytes of the encrypted result. For AES keys, the KCV is computed using a CMAC algorithm where the input data is 16 bytes of zero and retaining the 3 highest order bytes of the encrypted result.</p>
   */
  KeyCheckValueAlgorithm: KeyCheckValueAlgorithm | undefined;

  /**
   * @public
   * <p>Specifies whether the key is enabled. </p>
   */
  Enabled: boolean | undefined;

  /**
   * @public
   * <p>Specifies whether the key is exportable. This data is immutable after the key is created.</p>
   */
  Exportable: boolean | undefined;

  /**
   * @public
   * <p>The state of key that is being created or deleted.</p>
   */
  KeyState: KeyState | undefined;

  /**
   * @public
   * <p>The source of the key material. For keys created within Amazon Web Services Payment Cryptography, the value is <code>AWS_PAYMENT_CRYPTOGRAPHY</code>. For keys imported into Amazon Web Services Payment Cryptography, the value is <code>EXTERNAL</code>.</p>
   */
  KeyOrigin: KeyOrigin | undefined;

  /**
   * @public
   * <p>The date and time when the key was created.</p>
   */
  CreateTimestamp: Date | undefined;

  /**
   * @public
   * <p>The date and time after which Amazon Web Services Payment Cryptography will start using the key material for cryptographic operations.</p>
   */
  UsageStartTimestamp?: Date;

  /**
   * @public
   * <p>The date and time after which Amazon Web Services Payment Cryptography will stop using the key material for cryptographic operations.</p>
   */
  UsageStopTimestamp?: Date;

  /**
   * @public
   * <p>The date and time after which Amazon Web Services Payment Cryptography will delete the key. This value is present only when <code>KeyState</code> is <code>DELETE_PENDING</code> and the key is scheduled for deletion.</p>
   */
  DeletePendingTimestamp?: Date;

  /**
   * @public
   * <p>The date and time after which Amazon Web Services Payment Cryptography will delete the key. This value is present only when when the <code>KeyState</code> is <code>DELETE_COMPLETE</code> and the Amazon Web Services Payment Cryptography key is deleted.</p>
   */
  DeleteTimestamp?: Date;
}

/**
 * @public
 */
export interface CreateKeyOutput {
  /**
   * @public
   * <p>The key material that contains all the key attributes.</p>
   */
  Key: Key | undefined;
}

/**
 * @public
 */
export interface DeleteKeyInput {
  /**
   * @public
   * <p>The <code>KeyARN</code> of the key that is scheduled for deletion.</p>
   */
  KeyIdentifier: string | undefined;

  /**
   * @public
   * <p>The waiting period for key deletion. The default value is seven days.</p>
   */
  DeleteKeyInDays?: number;
}

/**
 * @public
 */
export interface DeleteKeyOutput {
  /**
   * @public
   * <p>The <code>KeyARN</code> of the key that is scheduled for deletion.</p>
   */
  Key: Key | undefined;
}

/**
 * @public
 * <p>Parameter information for IPEK generation during export.</p>
 */
export interface ExportDukptInitialKey {
  /**
   * @public
   * <p>The KSN for IPEK generation using DUKPT. </p>
   *          <p>KSN must be padded before sending to Amazon Web Services Payment Cryptography. KSN hex length should be 20 for a TDES_2KEY key or 24 for an AES key.</p>
   */
  KeySerialNumber: string | undefined;
}

/**
 * @public
 * <p>The attributes for IPEK generation during export.</p>
 */
export interface ExportAttributes {
  /**
   * @public
   * <p>Parameter information for IPEK export.</p>
   */
  ExportDukptInitialKey?: ExportDukptInitialKey;

  /**
   * @public
   * <p>The algorithm that Amazon Web Services Payment Cryptography uses to calculate the key check value (KCV). It is used to validate the key integrity. Specify KCV for IPEK export only.</p>
   *          <p>For TDES keys, the KCV is computed by encrypting 8 bytes, each with value of zero, with the key to be checked and retaining the 3 highest order bytes of the encrypted result. For AES keys, the KCV is computed using a CMAC algorithm where the input data is 16 bytes of zero and retaining the 3 highest order bytes of the encrypted result.</p>
   */
  KeyCheckValueAlgorithm?: KeyCheckValueAlgorithm;
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
 * @public
 * <p>Parameter information for key material export using asymmetric RSA wrap and unwrap key exchange method.</p>
 */
export interface ExportKeyCryptogram {
  /**
   * @public
   * <p>The <code>KeyARN</code> of the certificate chain that signs the wrapping key certificate during RSA wrap and unwrap key export.</p>
   */
  CertificateAuthorityPublicKeyIdentifier: string | undefined;

  /**
   * @public
   * <p>The wrapping key certificate in PEM format (base64 encoded). Amazon Web Services Payment Cryptography uses this certificate to wrap the key under export.</p>
   */
  WrappingKeyCertificate: string | undefined;

  /**
   * @public
   * <p>The wrapping spec for the key under export.</p>
   */
  WrappingSpec?: WrappingKeySpec;
}

/**
 * @public
 * <p>Parameter information for key material export using symmetric TR-31 key exchange method.</p>
 */
export interface ExportTr31KeyBlock {
  /**
   * @public
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
 * <p>Parameter information for key material export using the asymmetric TR-34 key exchange method.</p>
 */
export interface ExportTr34KeyBlock {
  /**
   * @public
   * <p>The <code>KeyARN</code> of the certificate chain that signs the wrapping key certificate during TR-34 key export.</p>
   */
  CertificateAuthorityPublicKeyIdentifier: string | undefined;

  /**
   * @public
   * <p>The <code>KeyARN</code> of the wrapping key certificate. Amazon Web Services Payment Cryptography uses this certificate to wrap the key under export.</p>
   */
  WrappingKeyCertificate: string | undefined;

  /**
   * @public
   * <p>The export token to initiate key export from Amazon Web Services Payment Cryptography. It also contains the signing key certificate that will sign the wrapped key during TR-34 key block generation. Call <a>GetParametersForExport</a> to receive an export token. It expires after 7 days. You can use the same export token to export multiple keys from the same service account.</p>
   */
  ExportToken: string | undefined;

  /**
   * @public
   * <p>The format of key block that Amazon Web Services Payment Cryptography will use during key export.</p>
   */
  KeyBlockFormat: Tr34KeyBlockFormat | undefined;

  /**
   * @public
   * <p>A random number value that is unique to the TR-34 key block generated using 2 pass. The operation will fail, if a random nonce value is not provided for a TR-34 key block generated using 2 pass.</p>
   */
  RandomNonce?: string;
}

/**
 * @public
 * <p>Parameter information for key material export from Amazon Web Services Payment Cryptography using TR-31 or TR-34 or RSA wrap and unwrap key exchange method.</p>
 */
export type ExportKeyMaterial =
  | ExportKeyMaterial.KeyCryptogramMember
  | ExportKeyMaterial.Tr31KeyBlockMember
  | ExportKeyMaterial.Tr34KeyBlockMember
  | ExportKeyMaterial.$UnknownMember;

/**
 * @public
 */
export namespace ExportKeyMaterial {
  /**
   * @public
   * <p>Parameter information for key material export using symmetric TR-31 key exchange method.</p>
   */
  export interface Tr31KeyBlockMember {
    Tr31KeyBlock: ExportTr31KeyBlock;
    Tr34KeyBlock?: never;
    KeyCryptogram?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>Parameter information for key material export using the asymmetric TR-34 key exchange method.</p>
   */
  export interface Tr34KeyBlockMember {
    Tr31KeyBlock?: never;
    Tr34KeyBlock: ExportTr34KeyBlock;
    KeyCryptogram?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>Parameter information for key material export using asymmetric RSA wrap and unwrap key exchange method</p>
   */
  export interface KeyCryptogramMember {
    Tr31KeyBlock?: never;
    Tr34KeyBlock?: never;
    KeyCryptogram: ExportKeyCryptogram;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    Tr31KeyBlock?: never;
    Tr34KeyBlock?: never;
    KeyCryptogram?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    Tr31KeyBlock: (value: ExportTr31KeyBlock) => T;
    Tr34KeyBlock: (value: ExportTr34KeyBlock) => T;
    KeyCryptogram: (value: ExportKeyCryptogram) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ExportKeyMaterial, visitor: Visitor<T>): T => {
    if (value.Tr31KeyBlock !== undefined) return visitor.Tr31KeyBlock(value.Tr31KeyBlock);
    if (value.Tr34KeyBlock !== undefined) return visitor.Tr34KeyBlock(value.Tr34KeyBlock);
    if (value.KeyCryptogram !== undefined) return visitor.KeyCryptogram(value.KeyCryptogram);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface ExportKeyInput {
  /**
   * @public
   * <p>The key block format type, for example, TR-34 or TR-31, to use during key material export.</p>
   */
  KeyMaterial: ExportKeyMaterial | undefined;

  /**
   * @public
   * <p>The <code>KeyARN</code> of the key under export from Amazon Web Services Payment Cryptography.</p>
   */
  ExportKeyIdentifier: string | undefined;

  /**
   * @public
   * <p>The attributes for IPEK generation during export.</p>
   */
  ExportAttributes?: ExportAttributes;
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
 * <p>Parameter information for generating a WrappedKeyBlock for key exchange.</p>
 */
export interface WrappedKey {
  /**
   * @public
   * <p>The <code>KeyARN</code> of the wrapped key.</p>
   */
  WrappingKeyArn: string | undefined;

  /**
   * @public
   * <p>The key block format of a wrapped key.</p>
   */
  WrappedKeyMaterialFormat: WrappedKeyMaterialFormat | undefined;

  /**
   * @public
   * <p>Parameter information for generating a wrapped key using TR-31 or TR-34 skey exchange method.</p>
   */
  KeyMaterial: string | undefined;

  /**
   * @public
   * <p>The key check value (KCV) is used to check if all parties holding a given key have the same key or to detect that a key has changed.</p>
   */
  KeyCheckValue?: string;

  /**
   * @public
   * <p>The algorithm that Amazon Web Services Payment Cryptography uses to calculate the key check value (KCV). It is used to validate the key integrity.</p>
   *          <p>For TDES keys, the KCV is computed by encrypting 8 bytes, each with value of zero, with the key to be checked and retaining the 3 highest order bytes of the encrypted result. For AES keys, the KCV is computed using a CMAC algorithm where the input data is 16 bytes of zero and retaining the 3 highest order bytes of the encrypted result.</p>
   */
  KeyCheckValueAlgorithm?: KeyCheckValueAlgorithm;
}

/**
 * @public
 */
export interface ExportKeyOutput {
  /**
   * @public
   * <p>The key material under export as a TR-34 WrappedKeyBlock or a TR-31 WrappedKeyBlock. or a RSA WrappedKeyCryptogram.</p>
   */
  WrappedKey?: WrappedKey;
}

/**
 * @public
 */
export interface GetKeyInput {
  /**
   * @public
   * <p>The <code>KeyARN</code> of the Amazon Web Services Payment Cryptography key.</p>
   */
  KeyIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetKeyOutput {
  /**
   * @public
   * <p>The key material, including the immutable and mutable data for the key.</p>
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
   * @public
   * <p>The key block format type (for example, TR-34 or TR-31) to use during key material export. Export token is only required for a TR-34 key export, <code>TR34_KEY_BLOCK</code>. Export token is not required for TR-31 key export.</p>
   */
  KeyMaterialType: KeyMaterialType | undefined;

  /**
   * @public
   * <p>The signing key algorithm to generate a signing key certificate. This certificate signs the wrapped key under export within the TR-34 key block. <code>RSA_2048</code> is the only signing key algorithm allowed.</p>
   */
  SigningKeyAlgorithm: KeyAlgorithm | undefined;
}

/**
 * @public
 */
export interface GetParametersForExportOutput {
  /**
   * @public
   * <p>The signing key certificate in PEM format (base64 encoded) of the public key for signature within the TR-34 key block. The certificate expires after 7 days.</p>
   */
  SigningKeyCertificate: string | undefined;

  /**
   * @public
   * <p>The root certificate authority (CA) that signed the signing key certificate in PEM format (base64 encoded).</p>
   */
  SigningKeyCertificateChain: string | undefined;

  /**
   * @public
   * <p>The algorithm of the signing key certificate for use in TR-34 key block generation. <code>RSA_2048</code> is the only signing key algorithm allowed.</p>
   */
  SigningKeyAlgorithm: KeyAlgorithm | undefined;

  /**
   * @public
   * <p>The export token to initiate key export from Amazon Web Services Payment Cryptography. The export token expires after 7 days. You can use the same export token to export multiple keys from the same service account.</p>
   */
  ExportToken: string | undefined;

  /**
   * @public
   * <p>The validity period of the export token.</p>
   */
  ParametersValidUntilTimestamp: Date | undefined;
}

/**
 * @public
 */
export interface GetParametersForImportInput {
  /**
   * @public
   * <p>The method to use for key material import. Import token is only required for TR-34 WrappedKeyBlock (<code>TR34_KEY_BLOCK</code>) and RSA WrappedKeyCryptogram (<code>KEY_CRYPTOGRAM</code>).</p>
   *          <p>Import token is not required for TR-31, root public key cerificate or trusted public key certificate.</p>
   */
  KeyMaterialType: KeyMaterialType | undefined;

  /**
   * @public
   * <p>The wrapping key algorithm to generate a wrapping key certificate. This certificate wraps the key under import.</p>
   *          <p>At this time, <code>RSA_2048</code> is the allowed algorithm for TR-34 WrappedKeyBlock import. Additionally, <code>RSA_2048</code>, <code>RSA_3072</code>, <code>RSA_4096</code> are the allowed algorithms for RSA WrappedKeyCryptogram import.</p>
   */
  WrappingKeyAlgorithm: KeyAlgorithm | undefined;
}

/**
 * @public
 */
export interface GetParametersForImportOutput {
  /**
   * @public
   * <p>The wrapping key certificate in PEM format (base64 encoded) of the wrapping key for use within the TR-34 key block. The certificate expires in 7 days.</p>
   */
  WrappingKeyCertificate: string | undefined;

  /**
   * @public
   * <p>The Amazon Web Services Payment Cryptography root certificate authority (CA) that signed the wrapping key certificate in PEM format (base64 encoded).</p>
   */
  WrappingKeyCertificateChain: string | undefined;

  /**
   * @public
   * <p>The algorithm of the wrapping key for use within TR-34 WrappedKeyBlock or RSA WrappedKeyCryptogram.</p>
   */
  WrappingKeyAlgorithm: KeyAlgorithm | undefined;

  /**
   * @public
   * <p>The import token to initiate key import into Amazon Web Services Payment Cryptography. The import token expires after 7 days. You can use the same import token to import multiple keys to the same service account.</p>
   */
  ImportToken: string | undefined;

  /**
   * @public
   * <p>The validity period of the import token.</p>
   */
  ParametersValidUntilTimestamp: Date | undefined;
}

/**
 * @public
 */
export interface GetPublicKeyCertificateInput {
  /**
   * @public
   * <p>The <code>KeyARN</code> of the asymmetric key pair.</p>
   */
  KeyIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetPublicKeyCertificateOutput {
  /**
   * @public
   * <p>The public key component of the asymmetric key pair in a certificate PEM format (base64 encoded). It is signed by the root certificate authority (CA). The certificate expires in 90 days.</p>
   */
  KeyCertificate: string | undefined;

  /**
   * @public
   * <p>The root certificate authority (CA) that signed the public key certificate in PEM format (base64 encoded) of the asymmetric key pair.</p>
   */
  KeyCertificateChain: string | undefined;
}

/**
 * @public
 * <p>Parameter information for key material import using asymmetric RSA wrap and unwrap key exchange method.</p>
 */
export interface ImportKeyCryptogram {
  /**
   * @public
   * <p>The role of the key, the algorithm it supports, and the cryptographic operations allowed with the key. This data is immutable after the key is created.</p>
   */
  KeyAttributes: KeyAttributes | undefined;

  /**
   * @public
   * <p>Specifies whether the key is exportable from the service.</p>
   */
  Exportable: boolean | undefined;

  /**
   * @public
   * <p>The RSA wrapped key cryptogram under import.</p>
   */
  WrappedKeyCryptogram: string | undefined;

  /**
   * @public
   * <p>The import token that initiates key import using the asymmetric RSA wrap and unwrap key exchange method into AWS Payment Cryptography. It expires after 7 days. You can use the same import token to import multiple keys to the same service account.</p>
   */
  ImportToken: string | undefined;

  /**
   * @public
   * <p>The wrapping spec for the wrapped key cryptogram.</p>
   */
  WrappingSpec?: WrappingKeySpec;
}

/**
 * @public
 * <p>Parameter information for root public key certificate import.</p>
 */
export interface RootCertificatePublicKey {
  /**
   * @public
   * <p>The role of the key, the algorithm it supports, and the cryptographic operations allowed with the key. This data is immutable after the root public key is imported.</p>
   */
  KeyAttributes: KeyAttributes | undefined;

  /**
   * @public
   * <p>Parameter information for root public key certificate import.</p>
   */
  PublicKeyCertificate: string | undefined;
}

/**
 * @public
 * <p>Parameter information for key material import using symmetric TR-31 key exchange method.</p>
 */
export interface ImportTr31KeyBlock {
  /**
   * @public
   * <p>The <code>KeyARN</code> of the key that will decrypt or unwrap a TR-31 key block during import.</p>
   */
  WrappingKeyIdentifier: string | undefined;

  /**
   * @public
   * <p>The TR-31 wrapped key block to import.</p>
   */
  WrappedKeyBlock: string | undefined;
}

/**
 * @public
 * <p>Parameter information for key material import using the asymmetric TR-34 key exchange method.</p>
 */
export interface ImportTr34KeyBlock {
  /**
   * @public
   * <p>The <code>KeyARN</code> of the certificate chain that signs the signing key certificate during TR-34 key import.</p>
   */
  CertificateAuthorityPublicKeyIdentifier: string | undefined;

  /**
   * @public
   * <p>The public key component in PEM certificate format of the private key that signs the KDH TR-34 WrappedKeyBlock.</p>
   */
  SigningKeyCertificate: string | undefined;

  /**
   * @public
   * <p>The import token that initiates key import using the asymmetric TR-34 key exchange method into Amazon Web Services Payment Cryptography. It expires after 7 days. You can use the same import token to import multiple keys to the same service account.</p>
   */
  ImportToken: string | undefined;

  /**
   * @public
   * <p>The TR-34 wrapped key block to import.</p>
   */
  WrappedKeyBlock: string | undefined;

  /**
   * @public
   * <p>The key block format to use during key import. The only value allowed is <code>X9_TR34_2012</code>.</p>
   */
  KeyBlockFormat: Tr34KeyBlockFormat | undefined;

  /**
   * @public
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
   * @public
   * <p>The role of the key, the algorithm it supports, and the cryptographic operations allowed with the key. This data is immutable after a trusted public key is imported.</p>
   */
  KeyAttributes: KeyAttributes | undefined;

  /**
   * @public
   * <p>Parameter information for trusted public key certificate import.</p>
   */
  PublicKeyCertificate: string | undefined;

  /**
   * @public
   * <p>The <code>KeyARN</code> of the root public key certificate or certificate chain that signs the trusted public key certificate import.</p>
   */
  CertificateAuthorityPublicKeyIdentifier: string | undefined;
}

/**
 * @public
 * <p>Parameter information for key material import into Amazon Web Services Payment Cryptography using TR-31 or TR-34 or RSA wrap and unwrap key exchange method.</p>
 */
export type ImportKeyMaterial =
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
   * @public
   * <p>Parameter information for root public key certificate import.</p>
   */
  export interface RootCertificatePublicKeyMember {
    RootCertificatePublicKey: RootCertificatePublicKey;
    TrustedCertificatePublicKey?: never;
    Tr31KeyBlock?: never;
    Tr34KeyBlock?: never;
    KeyCryptogram?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>Parameter information for trusted public key certificate import.</p>
   */
  export interface TrustedCertificatePublicKeyMember {
    RootCertificatePublicKey?: never;
    TrustedCertificatePublicKey: TrustedCertificatePublicKey;
    Tr31KeyBlock?: never;
    Tr34KeyBlock?: never;
    KeyCryptogram?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>Parameter information for key material import using symmetric TR-31 key exchange method.</p>
   */
  export interface Tr31KeyBlockMember {
    RootCertificatePublicKey?: never;
    TrustedCertificatePublicKey?: never;
    Tr31KeyBlock: ImportTr31KeyBlock;
    Tr34KeyBlock?: never;
    KeyCryptogram?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>Parameter information for key material import using the asymmetric TR-34 key exchange method.</p>
   */
  export interface Tr34KeyBlockMember {
    RootCertificatePublicKey?: never;
    TrustedCertificatePublicKey?: never;
    Tr31KeyBlock?: never;
    Tr34KeyBlock: ImportTr34KeyBlock;
    KeyCryptogram?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>Parameter information for key material import using asymmetric RSA wrap and unwrap key exchange method.</p>
   */
  export interface KeyCryptogramMember {
    RootCertificatePublicKey?: never;
    TrustedCertificatePublicKey?: never;
    Tr31KeyBlock?: never;
    Tr34KeyBlock?: never;
    KeyCryptogram: ImportKeyCryptogram;
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
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    RootCertificatePublicKey: (value: RootCertificatePublicKey) => T;
    TrustedCertificatePublicKey: (value: TrustedCertificatePublicKey) => T;
    Tr31KeyBlock: (value: ImportTr31KeyBlock) => T;
    Tr34KeyBlock: (value: ImportTr34KeyBlock) => T;
    KeyCryptogram: (value: ImportKeyCryptogram) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ImportKeyMaterial, visitor: Visitor<T>): T => {
    if (value.RootCertificatePublicKey !== undefined)
      return visitor.RootCertificatePublicKey(value.RootCertificatePublicKey);
    if (value.TrustedCertificatePublicKey !== undefined)
      return visitor.TrustedCertificatePublicKey(value.TrustedCertificatePublicKey);
    if (value.Tr31KeyBlock !== undefined) return visitor.Tr31KeyBlock(value.Tr31KeyBlock);
    if (value.Tr34KeyBlock !== undefined) return visitor.Tr34KeyBlock(value.Tr34KeyBlock);
    if (value.KeyCryptogram !== undefined) return visitor.KeyCryptogram(value.KeyCryptogram);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface ImportKeyInput {
  /**
   * @public
   * <p>The key or public key certificate type to use during key material import, for example TR-34 or RootCertificatePublicKey.</p>
   */
  KeyMaterial: ImportKeyMaterial | undefined;

  /**
   * @public
   * <p>The algorithm that Amazon Web Services Payment Cryptography uses to calculate the key check value (KCV). It is used to validate the key integrity.</p>
   *          <p>For TDES keys, the KCV is computed by encrypting 8 bytes, each with value of zero, with the key to be checked and retaining the 3 highest order bytes of the encrypted result. For AES keys, the KCV is computed using a CMAC algorithm where the input data is 16 bytes of zero and retaining the 3 highest order bytes of the encrypted result.</p>
   */
  KeyCheckValueAlgorithm?: KeyCheckValueAlgorithm;

  /**
   * @public
   * <p>Specifies whether import key is enabled.</p>
   */
  Enabled?: boolean;

  /**
   * @public
   * <p>Assigns one or more tags to the Amazon Web Services Payment Cryptography key. Use this parameter to tag a key when it is imported. To tag an existing Amazon Web Services Payment Cryptography key, use the <a>TagResource</a> operation.</p>
   *          <p>Each tag consists of a tag key and a tag value. Both the tag key and the tag value are required, but the tag value can be an empty (null) string. You can't have more than one tag on an Amazon Web Services Payment Cryptography key with the same tag key. If you specify an existing tag key with a different tag value, Amazon Web Services Payment Cryptography replaces the current tag value with the specified one.</p>
   *          <important>
   *             <p>Don't include personal, confidential or sensitive information in this field. This field may be displayed in plaintext in CloudTrail logs and other output.</p>
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
   * @public
   * <p>The <code>KeyARN</code> of the key material imported within Amazon Web Services Payment Cryptography.</p>
   */
  Key: Key | undefined;
}

/**
 * @public
 */
export interface ListKeysInput {
  /**
   * @public
   * <p>The key state of the keys you want to list.</p>
   */
  KeyState?: KeyState;

  /**
   * @public
   * <p>Use this parameter in a subsequent request after you receive a response with truncated results. Set it to the value of <code>NextToken</code> from the truncated response you just received.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Use this parameter to specify the maximum number of items to return. When this value is present, Amazon Web Services Payment Cryptography does not return more than the specified number of items, but it might return fewer.</p>
   *          <p>This value is optional. If you include a value, it must be between 1 and 100, inclusive. If you do not include a value, it defaults to 50.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>Metadata about an Amazon Web Services Payment Cryptography key.</p>
 */
export interface KeySummary {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the key.</p>
   */
  KeyArn: string | undefined;

  /**
   * @public
   * <p>The state of an Amazon Web Services Payment Cryptography that is being created or deleted.</p>
   */
  KeyState: KeyState | undefined;

  /**
   * @public
   * <p>The role of the key, the algorithm it supports, and the cryptographic operations allowed with the key. This data is immutable after the key is created.</p>
   */
  KeyAttributes: KeyAttributes | undefined;

  /**
   * @public
   * <p>The key check value (KCV) is used to check if all parties holding a given key have the same key or to detect that a key has changed.</p>
   */
  KeyCheckValue: string | undefined;

  /**
   * @public
   * <p>Specifies whether the key is exportable. This data is immutable after the key is created.</p>
   */
  Exportable: boolean | undefined;

  /**
   * @public
   * <p>Specifies whether the key is enabled. </p>
   */
  Enabled: boolean | undefined;
}

/**
 * @public
 */
export interface ListKeysOutput {
  /**
   * @public
   * <p>The list of keys created within the caller's Amazon Web Services account and Amazon Web Services Region.</p>
   */
  Keys: KeySummary[] | undefined;

  /**
   * @public
   * <p>The token for the next set of results, or an empty or null value if there are no more results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface RestoreKeyInput {
  /**
   * @public
   * <p>The <code>KeyARN</code> of the key to be restored within Amazon Web Services Payment Cryptography.</p>
   */
  KeyIdentifier: string | undefined;
}

/**
 * @public
 */
export interface RestoreKeyOutput {
  /**
   * @public
   * <p>The key material of the restored key. The <code>KeyState</code> will change to <code>CREATE_COMPLETE</code> and value for <code>DeletePendingTimestamp</code> gets removed. </p>
   */
  Key: Key | undefined;
}

/**
 * @public
 */
export interface StartKeyUsageInput {
  /**
   * @public
   * <p>The <code>KeyArn</code> of the key.</p>
   */
  KeyIdentifier: string | undefined;
}

/**
 * @public
 */
export interface StartKeyUsageOutput {
  /**
   * @public
   * <p>The <code>KeyARN</code> of the Amazon Web Services Payment Cryptography key activated for use.</p>
   */
  Key: Key | undefined;
}

/**
 * @public
 */
export interface StopKeyUsageInput {
  /**
   * @public
   * <p>The <code>KeyArn</code> of the key.</p>
   */
  KeyIdentifier: string | undefined;
}

/**
 * @public
 */
export interface StopKeyUsageOutput {
  /**
   * @public
   * <p>The <code>KeyARN</code> of the key.</p>
   */
  Key: Key | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceInput {
  /**
   * @public
   * <p>The <code>KeyARN</code> of the key whose tags you are getting.</p>
   */
  ResourceArn: string | undefined;

  /**
   * @public
   * <p>Use this parameter in a subsequent request after you receive a response with truncated results. Set it to the value of <code>NextToken</code> from the truncated response you just received.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Use this parameter to specify the maximum number of items to return. When this value is present, Amazon Web Services Payment Cryptography does not return more than the specified number of items, but it might return fewer.</p>
   *          <p>This value is optional. If you include a value, it must be between 1 and 100, inclusive. If you do not include a value, it defaults to 50.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListTagsForResourceOutput {
  /**
   * @public
   * <p>The list of tags associated with a <code>ResourceArn</code>. Each tag will list the key-value pair contained within that tag.</p>
   */
  Tags: Tag[] | undefined;

  /**
   * @public
   * <p>The token for the next set of results, or an empty or null value if there are no more results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface TagResourceInput {
  /**
   * @public
   * <p>The <code>KeyARN</code> of the key whose tags are being updated.</p>
   */
  ResourceArn: string | undefined;

  /**
   * @public
   * <p>One or more tags. Each tag consists of a tag key and a tag value. The tag value can be an empty (null) string. You can't have more than one tag on an Amazon Web Services Payment Cryptography key with the same tag key. If you specify an existing tag key with a different tag value, Amazon Web Services Payment Cryptography replaces the current tag value with the new one.</p>
   *          <important>
   *             <p>Don't include personal, confidential or sensitive information in this field. This field may be displayed in plaintext in CloudTrail logs and other output.</p>
   *          </important>
   *          <p>To use this parameter, you must have <a>TagResource</a> permission in an IAM policy.</p>
   *          <important>
   *             <p>Don't include personal, confidential or sensitive information in this field. This field may be displayed in plaintext in CloudTrail logs and other output.</p>
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
   * @public
   * <p>The <code>KeyARN</code> of the key whose tags are being removed.</p>
   */
  ResourceArn: string | undefined;

  /**
   * @public
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
 * @internal
 */
export const ExportKeyCryptogramFilterSensitiveLog = (obj: ExportKeyCryptogram): any => ({
  ...obj,
  ...(obj.WrappingKeyCertificate && { WrappingKeyCertificate: SENSITIVE_STRING }),
});

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
  if (obj.KeyCryptogram !== undefined)
    return { KeyCryptogram: ExportKeyCryptogramFilterSensitiveLog(obj.KeyCryptogram) };
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
  if (obj.KeyCryptogram !== undefined) return { KeyCryptogram: obj.KeyCryptogram };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const ImportKeyInputFilterSensitiveLog = (obj: ImportKeyInput): any => ({
  ...obj,
  ...(obj.KeyMaterial && { KeyMaterial: ImportKeyMaterialFilterSensitiveLog(obj.KeyMaterial) }),
});
