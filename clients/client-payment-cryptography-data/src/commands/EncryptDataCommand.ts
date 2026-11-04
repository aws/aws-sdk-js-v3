// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { EncryptDataInput, EncryptDataOutput } from "../models/models_0";
import { EncryptData$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link EncryptDataCommand}.
 */
export interface EncryptDataCommandInput extends EncryptDataInput {}
/**
 * @public
 *
 * The output of {@link EncryptDataCommand}.
 */
export interface EncryptDataCommandOutput extends EncryptDataOutput, __MetadataBearer {}

/**
 * Encrypts plaintext data to ciphertext using a symmetric (TDES, AES), asymmetric (RSA), or derived (DUKPT or EMV) encryption key scheme. For more information, see [Encrypt data](https://docs.aws.amazon.com/payment-cryptography/latest/userguide/encrypt-data.html) in the *Amazon Web Services Payment Cryptography User Guide*.
 *
 * You can generate an encryption key within Amazon Web Services Payment Cryptography by calling [CreateKey](https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_CreateKey.html). You can import your own encryption key by calling [ImportKey](https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_ImportKey.html).
 *
 * For this operation, the key must have `KeyModesOfUse` set to `Encrypt`. In asymmetric encryption, plaintext is encrypted using public component. You can import the public component of an asymmetric key pair created outside Amazon Web Services Payment Cryptography by calling [ImportKey](https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_ImportKey.html).
 *
 * This operation also supports dynamic keys, allowing you to pass a dynamic encryption key as a TR-31 WrappedKeyBlock. This can be used when key material is frequently rotated, such as during every card transaction, and there is need to avoid importing short-lived keys into Amazon Web Services Payment Cryptography. To encrypt using dynamic keys, the `keyARN` is the Key Encryption Key (KEK) of the TR-31 wrapped encryption key material. The incoming wrapped key shall have a key purpose of D0 with a mode of use of B or D. For more information, see [Using Dynamic Keys](https://docs.aws.amazon.com/payment-cryptography/latest/userguide/use-cases-acquirers-dynamickeys.html) in the *Amazon Web Services Payment Cryptography User Guide*.
 *
 * For symmetric and DUKPT encryption, Amazon Web Services Payment Cryptography supports `TDES` and `AES` algorithms. For EMV encryption, Amazon Web Services Payment Cryptography supports `TDES` algorithms.For asymmetric encryption, Amazon Web Services Payment Cryptography supports `RSA`.
 *
 * When you use TDES or TDES DUKPT, the plaintext data length must be a multiple of 8 bytes. For AES or AES DUKPT, the plaintext data length must be a multiple of 16 bytes. For RSA, it sould be equal to the key size unless padding is enabled.
 *
 * To encrypt using DUKPT, you must already have a BDK (Base Derivation Key) key in your account with `KeyModesOfUse` set to `DeriveKey`, or you can generate a new DUKPT key by calling [CreateKey](https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_CreateKey.html). To encrypt using EMV, you must already have an IMK (Issuer Master Key) key in your account with `KeyModesOfUse` set to `DeriveKey`.
 *
 * For information about valid keys for this operation, see [Understanding key attributes](https://docs.aws.amazon.com/payment-cryptography/latest/userguide/keys-validattributes.html) and [Key types for specific data operations](https://docs.aws.amazon.com/payment-cryptography/latest/userguide/crypto-ops-validkeys-ops.html) in the *Amazon Web Services Payment Cryptography User Guide*.
 *
 * **Cross-account use**: This operation supports cross-account use when the key has a resource-based policy that grants access. For more information, see [Resource-based policies](https://docs.aws.amazon.com/payment-cryptography/latest/userguide/security_iam_resource-based-policies.html).
 *
 * **Related operations:**
 *
 * - DecryptData
 * - [GetPublicCertificate](https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_GetPublicKeyCertificate.html)
 * - [ImportKey](https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_ImportKey.html)
 * - ReEncryptData
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PaymentCryptographyDataClient, EncryptDataCommand } from "@aws-sdk/client-payment-cryptography-data"; // ES Modules import
 * // const { PaymentCryptographyDataClient, EncryptDataCommand } = require("@aws-sdk/client-payment-cryptography-data"); // CommonJS import
 * // import type { PaymentCryptographyDataClientConfig } from "@aws-sdk/client-payment-cryptography-data";
 * const config = {}; // type is PaymentCryptographyDataClientConfig
 * const client = new PaymentCryptographyDataClient(config);
 * const input = { // EncryptDataInput
 *   KeyIdentifier: "STRING_VALUE", // required
 *   PlainText: "STRING_VALUE", // required
 *   EncryptionAttributes: { // EncryptionDecryptionAttributes Union: only one key present
 *     Symmetric: { // SymmetricEncryptionAttributes
 *       Mode: "ECB" || "CBC" || "CFB" || "CFB1" || "CFB8" || "CFB64" || "CFB128" || "OFB", // required
 *       InitializationVector: "STRING_VALUE",
 *       PaddingType: "PKCS1" || "OAEP_SHA1" || "OAEP_SHA256" || "OAEP_SHA512",
 *     },
 *     Asymmetric: { // AsymmetricEncryptionAttributes
 *       PaddingType: "PKCS1" || "OAEP_SHA1" || "OAEP_SHA256" || "OAEP_SHA512",
 *     },
 *     Dukpt: { // DukptEncryptionAttributes
 *       KeySerialNumber: "STRING_VALUE", // required
 *       Mode: "ECB" || "CBC",
 *       DukptKeyDerivationType: "TDES_2KEY" || "TDES_3KEY" || "AES_128" || "AES_192" || "AES_256",
 *       DukptKeyVariant: "BIDIRECTIONAL" || "REQUEST" || "RESPONSE",
 *       InitializationVector: "STRING_VALUE",
 *     },
 *     Emv: { // EmvEncryptionAttributes
 *       MajorKeyDerivationMode: "EMV_OPTION_A" || "EMV_OPTION_B", // required
 *       PrimaryAccountNumber: "STRING_VALUE", // required
 *       PanSequenceNumber: "STRING_VALUE", // required
 *       SessionDerivationData: "STRING_VALUE", // required
 *       Mode: "ECB" || "CBC",
 *       InitializationVector: "STRING_VALUE",
 *     },
 *   },
 *   WrappedKey: { // WrappedKey
 *     WrappedKeyMaterial: { // WrappedKeyMaterial Union: only one key present
 *       Tr31KeyBlock: "STRING_VALUE",
 *       DiffieHellmanSymmetricKey: { // EcdhDerivationAttributes
 *         CertificateAuthorityPublicKeyIdentifier: "STRING_VALUE", // required
 *         PublicKeyCertificate: "STRING_VALUE", // required
 *         KeyAlgorithm: "TDES_2KEY" || "TDES_3KEY" || "AES_128" || "AES_192" || "AES_256" || "HMAC_SHA256" || "HMAC_SHA384" || "HMAC_SHA512" || "HMAC_SHA224", // required
 *         KeyDerivationFunction: "NIST_SP800" || "ANSI_X963", // required
 *         KeyDerivationHashAlgorithm: "SHA_256" || "SHA_384" || "SHA_512", // required
 *         SharedInformation: "STRING_VALUE", // required
 *       },
 *     },
 *     KeyCheckValueAlgorithm: "STRING_VALUE",
 *   },
 * };
 * const command = new EncryptDataCommand(input);
 * const response = await client.send(command);
 * // { // EncryptDataOutput
 * //   KeyArn: "STRING_VALUE", // required
 * //   KeyCheckValue: "STRING_VALUE",
 * //   CipherText: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param EncryptDataCommandInput - {@link EncryptDataCommandInput}
 * @returns {@link EncryptDataCommandOutput}
 * @see {@link EncryptDataCommandInput} for command's `input` shape.
 * @see {@link EncryptDataCommandOutput} for command's `response` shape.
 * @see {@link PaymentCryptographyDataClientResolvedConfig | config} for PaymentCryptographyDataClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request processing has failed because of an unknown error, exception, or failure.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The request was denied due to an invalid resource error.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request was denied due to an invalid request error.
 *
 * @throws {@link PaymentCryptographyDataServiceException}
 *
 * Base exception class for all service exceptions from PaymentCryptographyData service.
 *
 * @public
 */
export class EncryptDataCommand extends command<EncryptDataCommandInput, EncryptDataCommandOutput>(
  _ep0,
  _mw0,
  "EncryptData",
  EncryptData$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: EncryptDataInput;
      output: EncryptDataOutput;
    };
    sdk: {
      input: EncryptDataCommandInput;
      output: EncryptDataCommandOutput;
    };
  };
}
