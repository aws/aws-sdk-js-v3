// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ImportKeyInput, ImportKeyOutput } from "../models/models_0";
import { ImportKey$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ImportKeyCommand}.
 */
export interface ImportKeyCommandInput extends ImportKeyInput {}
/**
 * @public
 *
 * The output of {@link ImportKeyCommand}.
 */
export interface ImportKeyCommandOutput extends ImportKeyOutput, __MetadataBearer {}

/**
 * Imports symmetric keys and public key certificates in PEM format (base64 encoded) into Amazon Web Services Payment Cryptography.
 *
 * Amazon Web Services Payment Cryptography simplifies key exchange by replacing the existing paper-based approach with a modern electronic approach. With `ImportKey` you can import symmetric keys using either symmetric and asymmetric key exchange mechanisms.
 *
 * For symmetric key exchange, Amazon Web Services Payment Cryptography uses the ANSI X9 TR-31 norm in accordance with PCI PIN guidelines. And for asymmetric key exchange, Amazon Web Services Payment Cryptography supports ANSI X9 TR-34 norm, RSA unwrap, and ECDH (Elliptic Curve Diffie-Hellman) key exchange mechanisms. Asymmetric key exchange methods are typically used to establish bi-directional trust between the two parties exhanging keys and are used for initial key exchange such as Key Encryption Key (KEK) or Zone Master Key (ZMK). After which you can import working keys using symmetric method to perform various cryptographic operations within Amazon Web Services Payment Cryptography.
 *
 * PCI requires specific minimum key strength of wrapping keys used to protect the keys being exchanged electronically. These requirements can change when PCI standards are revised. The rules specify that wrapping keys used for transport must be at least as strong as the key being protected. For more information on recommended key strength of wrapping keys and key exchange mechanism, see [Importing and exporting keys](https://docs.aws.amazon.com/payment-cryptography/latest/userguide/keys-importexport.html) in the *Amazon Web Services Payment Cryptography User Guide*.
 *
 * You can also import a *root public key certificate*, used to sign other public key certificates, or a *trusted public key certificate* under an already established root public key certificate.
 *
 * **To import a public root key certificate**
 *
 * Using this operation, you can import the public component (in PEM cerificate format) of your private root key. You can use the imported public root key certificate for digital signatures, for example signing wrapping key or signing key in TR-34, within your Amazon Web Services Payment Cryptography account.
 *
 * Set the following parameters:
 *
 * - `KeyMaterial`: `RootCertificatePublicKey`
 * - `KeyClass`: `PUBLIC_KEY`
 * - `KeyModesOfUse`: `Verify`
 * - `KeyUsage`: `TR31_S0_ASYMMETRIC_KEY_FOR_DIGITAL_SIGNATURE`
 * - `PublicKeyCertificate`: The public key certificate in PEM format (base64 encoded) of the private root key under import.
 *
 * **To import a trusted public key certificate**
 *
 * The root public key certificate must be in place and operational before you import a trusted public key certificate. Set the following parameters:
 *
 * - `KeyMaterial`: `TrustedCertificatePublicKey`
 * - `CertificateAuthorityPublicKeyIdentifier`: `KeyArn` of the `RootCertificatePublicKey`.
 * - `KeyModesOfUse` and `KeyUsage`: Corresponding to the cryptographic operations such as wrap, sign, or encrypt that you will allow the trusted public key certificate to perform.
 * - `PublicKeyCertificate`: The trusted public key certificate in PEM format (base64 encoded) under import.
 *
 * **To import initial keys (KEK or ZMK or similar) using TR-34**
 *
 * Using this operation, you can import initial key using TR-34 asymmetric key exchange. In TR-34 terminology, the sending party of the key is called Key Distribution Host (KDH) and the receiving party of the key is called Key Receiving Device (KRD). During the key import process, KDH is the user who initiates the key import and KRD is Amazon Web Services Payment Cryptography who receives the key.
 *
 * To initiate TR-34 key import, the KDH must obtain an import token by calling [GetParametersForImport](https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_GetParametersForImport.html). This operation generates an encryption keypair for the purpose of key import, signs the key and returns back the wrapping key certificate (also known as KRD wrapping certificate) and the root certificate chain. The KDH must trust and install the KRD wrapping certificate on its HSM and use it to encrypt (wrap) the KDH key during TR-34 WrappedKeyBlock generation. The import token and associated KRD wrapping certificate expires after 30 days.
 *
 * Next the KDH generates a key pair for the purpose of signing the encrypted KDH key and provides the public certificate of the signing key to Amazon Web Services Payment Cryptography. The KDH will also need to import the root certificate chain of the KDH signing certificate by calling `ImportKey` for `RootCertificatePublicKey`. For more information on TR-34 key import, see section [Importing symmetric keys](https://docs.aws.amazon.com/payment-cryptography/latest/userguide/keys-import.html) in the *Amazon Web Services Payment Cryptography User Guide*.
 *
 * Set the following parameters:
 *
 * - `KeyMaterial`: Use `Tr34KeyBlock` parameters.
 * - `CertificateAuthorityPublicKeyIdentifier`: The `KeyARN` of the certificate chain that signed the KDH signing key certificate.
 * - `ImportToken`: Obtained from KRD by calling [GetParametersForImport](https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_GetParametersForImport.html).
 * - `WrappedKeyBlock`: The TR-34 wrapped key material from KDH. It contains the KDH key under import, wrapped with KRD wrapping certificate and signed by KDH signing private key. This TR-34 key block is typically generated by the KDH Hardware Security Module (HSM) outside of Amazon Web Services Payment Cryptography.
 * - `SigningKeyCertificate`: The public key certificate in PEM format (base64 encoded) of the KDH signing key generated under the root certificate (CertificateAuthorityPublicKeyIdentifier) imported in Amazon Web Services Payment Cryptography.
 *
 * **To import initial keys (KEK or ZMK or similar) using RSA Wrap and Unwrap**
 *
 * Using this operation, you can import initial key using asymmetric RSA wrap and unwrap key exchange method. To initiate import, call [GetParametersForImport](https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_GetParametersForImport.html) with `KeyMaterial` set to `KEY_CRYPTOGRAM` to generate an import token. This operation also generates an encryption keypair for the purpose of key import, signs the key and returns back the wrapping key certificate in PEM format (base64 encoded) and its root certificate chain. The import token and associated KRD wrapping certificate expires after 30 days.
 *
 * You must trust and install the wrapping certificate and its certificate chain on the sending HSM and use it to wrap the key under export for WrappedKeyCryptogram generation. Next call `ImportKey` with `KeyMaterial` set to `KEY_CRYPTOGRAM` and provide the `ImportToken` and `KeyAttributes` for the key under import.
 *
 * **To import working keys using TR-31**
 *
 * Amazon Web Services Payment Cryptography uses TR-31 symmetric key exchange norm to import working keys. A KEK must be established within Amazon Web Services Payment Cryptography by using TR-34 key import or by using [CreateKey](https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_CreateKey.html). To initiate a TR-31 key import, set the following parameters:
 *
 * - `KeyMaterial`: Use `Tr31KeyBlock` parameters.
 * - `WrappedKeyBlock`: The TR-31 wrapped key material. It contains the key under import, encrypted using KEK. The TR-31 key block is typically generated by a HSM outside of Amazon Web Services Payment Cryptography.
 * - `WrappingKeyIdentifier`: The `KeyArn` of the KEK that Amazon Web Services Payment Cryptography uses to decrypt or unwrap the key under import.
 *
 * **To import working keys using ECDH**
 *
 * You can also use ECDH key agreement to import working keys as a TR-31 keyblock, where the wrapping key is an ECDH derived key.
 *
 * To initiate a TR-31 key import using ECDH, both sides must create an ECC key pair with key usage K3 and exchange public key certificates. In Amazon Web Services Payment Cryptography, you can do this by calling `CreateKey` and then `GetPublicKeyCertificate` to retrieve its public key certificate. Next, you can then generate a TR-31 WrappedKeyBlock using your own ECC key pair, the public certificate of the service's ECC key pair, and the key derivation parameters including key derivation function, hash algorithm, derivation data, and key algorithm. If you have not already done so, you must import the CA chain that issued the receiving public key certificate by calling `ImportKey` with input `RootCertificatePublicKey` for root CA or `TrustedPublicKey` for intermediate CA. To complete the TR-31 key import, you can use the following parameters. It is important that the ECDH key derivation parameters you use should match those used during import to derive the same shared wrapping key within Amazon Web Services Payment Cryptography.
 *
 * - `KeyMaterial`: Use `DiffieHellmanTr31KeyBlock` parameters.
 * - `PrivateKeyIdentifier`: The `KeyArn` of the ECC key pair created within Amazon Web Services Payment Cryptography to derive a shared KEK.
 * - `PublicKeyCertificate`: The public key certificate of the receiving ECC key pair in PEM format (base64 encoded) to derive a shared KEK.
 * - `CertificateAuthorityPublicKeyIdentifier`: The `keyARN` of the CA that signed the public key certificate of the receiving ECC key pair.
 *
 * **Cross-account use:** This operation supports cross-account use when the key has a resource-based policy that grants access. For more information, see [Resource-based policies](https://docs.aws.amazon.com/payment-cryptography/latest/userguide/security_iam_resource-based-policies.html).
 *
 * **Related operations:**
 *
 * - [ExportKey](https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_ExportKey.html)
 * - [GetParametersForImport](https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_GetParametersForImport.html)
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PaymentCryptographyClient, ImportKeyCommand } from "@aws-sdk/client-payment-cryptography"; // ES Modules import
 * // const { PaymentCryptographyClient, ImportKeyCommand } = require("@aws-sdk/client-payment-cryptography"); // CommonJS import
 * // import type { PaymentCryptographyClientConfig } from "@aws-sdk/client-payment-cryptography";
 * const config = {}; // type is PaymentCryptographyClientConfig
 * const client = new PaymentCryptographyClient(config);
 * const input = { // ImportKeyInput
 *   KeyMaterial: { // ImportKeyMaterial Union: only one key present
 *     RootCertificatePublicKey: { // RootCertificatePublicKey
 *       KeyAttributes: { // KeyAttributes
 *         KeyUsage: "STRING_VALUE", // required
 *         KeyClass: "STRING_VALUE", // required
 *         KeyAlgorithm: "STRING_VALUE", // required
 *         KeyModesOfUse: { // KeyModesOfUse
 *           Encrypt: true || false,
 *           Decrypt: true || false,
 *           Wrap: true || false,
 *           Unwrap: true || false,
 *           Generate: true || false,
 *           Sign: true || false,
 *           Verify: true || false,
 *           DeriveKey: true || false,
 *           NoRestrictions: true || false,
 *         },
 *       },
 *       PublicKeyCertificate: "STRING_VALUE", // required
 *     },
 *     TrustedCertificatePublicKey: { // TrustedCertificatePublicKey
 *       KeyAttributes: {
 *         KeyUsage: "STRING_VALUE", // required
 *         KeyClass: "STRING_VALUE", // required
 *         KeyAlgorithm: "STRING_VALUE", // required
 *         KeyModesOfUse: {
 *           Encrypt: true || false,
 *           Decrypt: true || false,
 *           Wrap: true || false,
 *           Unwrap: true || false,
 *           Generate: true || false,
 *           Sign: true || false,
 *           Verify: true || false,
 *           DeriveKey: true || false,
 *           NoRestrictions: true || false,
 *         },
 *       },
 *       PublicKeyCertificate: "STRING_VALUE", // required
 *       CertificateAuthorityPublicKeyIdentifier: "STRING_VALUE", // required
 *     },
 *     Tr31KeyBlock: { // ImportTr31KeyBlock
 *       WrappingKeyIdentifier: "STRING_VALUE", // required
 *       WrappedKeyBlock: "STRING_VALUE", // required
 *     },
 *     Tr34KeyBlock: { // ImportTr34KeyBlock
 *       CertificateAuthorityPublicKeyIdentifier: "STRING_VALUE", // required
 *       SigningKeyCertificate: "STRING_VALUE", // required
 *       ImportToken: "STRING_VALUE",
 *       WrappingKeyIdentifier: "STRING_VALUE",
 *       WrappingKeyCertificate: "STRING_VALUE",
 *       WrappedKeyBlock: "STRING_VALUE", // required
 *       KeyBlockFormat: "STRING_VALUE", // required
 *       RandomNonce: "STRING_VALUE",
 *     },
 *     KeyCryptogram: { // ImportKeyCryptogram
 *       KeyAttributes: {
 *         KeyUsage: "STRING_VALUE", // required
 *         KeyClass: "STRING_VALUE", // required
 *         KeyAlgorithm: "STRING_VALUE", // required
 *         KeyModesOfUse: {
 *           Encrypt: true || false,
 *           Decrypt: true || false,
 *           Wrap: true || false,
 *           Unwrap: true || false,
 *           Generate: true || false,
 *           Sign: true || false,
 *           Verify: true || false,
 *           DeriveKey: true || false,
 *           NoRestrictions: true || false,
 *         },
 *       },
 *       Exportable: true || false, // required
 *       WrappedKeyCryptogram: "STRING_VALUE", // required
 *       ImportToken: "STRING_VALUE", // required
 *       WrappingSpec: "STRING_VALUE",
 *     },
 *     DiffieHellmanTr31KeyBlock: { // ImportDiffieHellmanTr31KeyBlock
 *       PrivateKeyIdentifier: "STRING_VALUE", // required
 *       CertificateAuthorityPublicKeyIdentifier: "STRING_VALUE", // required
 *       PublicKeyCertificate: "STRING_VALUE", // required
 *       DeriveKeyAlgorithm: "TDES_2KEY" || "TDES_3KEY" || "AES_128" || "AES_192" || "AES_256" || "HMAC_SHA256" || "HMAC_SHA384" || "HMAC_SHA512" || "HMAC_SHA224", // required
 *       KeyDerivationFunction: "NIST_SP800" || "ANSI_X963", // required
 *       KeyDerivationHashAlgorithm: "SHA_256" || "SHA_384" || "SHA_512", // required
 *       DerivationData: { // DiffieHellmanDerivationData Union: only one key present
 *         SharedInformation: "STRING_VALUE",
 *       },
 *       WrappedKeyBlock: "STRING_VALUE", // required
 *     },
 *     As2805KeyCryptogram: { // ImportAs2805KeyCryptogram
 *       As2805KeyVariant: "TERMINAL_MAJOR_KEY_VARIANT_00" || "PIN_ENCRYPTION_KEY_VARIANT_28" || "MESSAGE_AUTHENTICATION_KEY_VARIANT_24" || "DATA_ENCRYPTION_KEY_VARIANT_22", // required
 *       KeyModesOfUse: {
 *         Encrypt: true || false,
 *         Decrypt: true || false,
 *         Wrap: true || false,
 *         Unwrap: true || false,
 *         Generate: true || false,
 *         Sign: true || false,
 *         Verify: true || false,
 *         DeriveKey: true || false,
 *         NoRestrictions: true || false,
 *       },
 *       KeyAlgorithm: "STRING_VALUE", // required
 *       Exportable: true || false, // required
 *       WrappingKeyIdentifier: "STRING_VALUE", // required
 *       WrappedKeyCryptogram: "STRING_VALUE", // required
 *     },
 *   },
 *   KeyCheckValueAlgorithm: "STRING_VALUE",
 *   Enabled: true || false,
 *   Tags: [ // Tags
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   ReplicationRegions: [ // Regions
 *     "STRING_VALUE",
 *   ],
 *   RequesterComment: "STRING_VALUE",
 * };
 * const command = new ImportKeyCommand(input);
 * const response = await client.send(command);
 * // { // ImportKeyOutput
 * //   Key: { // Key
 * //     KeyArn: "STRING_VALUE", // required
 * //     KeyAttributes: { // KeyAttributes
 * //       KeyUsage: "STRING_VALUE", // required
 * //       KeyClass: "STRING_VALUE", // required
 * //       KeyAlgorithm: "STRING_VALUE", // required
 * //       KeyModesOfUse: { // KeyModesOfUse
 * //         Encrypt: true || false,
 * //         Decrypt: true || false,
 * //         Wrap: true || false,
 * //         Unwrap: true || false,
 * //         Generate: true || false,
 * //         Sign: true || false,
 * //         Verify: true || false,
 * //         DeriveKey: true || false,
 * //         NoRestrictions: true || false,
 * //       },
 * //     },
 * //     KeyCheckValue: "STRING_VALUE", // required
 * //     KeyCheckValueAlgorithm: "STRING_VALUE", // required
 * //     Enabled: true || false, // required
 * //     Exportable: true || false, // required
 * //     KeyState: "STRING_VALUE", // required
 * //     KeyOrigin: "STRING_VALUE", // required
 * //     CreateTimestamp: new Date("TIMESTAMP"), // required
 * //     UsageStartTimestamp: new Date("TIMESTAMP"),
 * //     UsageStopTimestamp: new Date("TIMESTAMP"),
 * //     DeletePendingTimestamp: new Date("TIMESTAMP"),
 * //     DeleteTimestamp: new Date("TIMESTAMP"),
 * //     DeriveKeyUsage: "STRING_VALUE",
 * //     MultiRegionKeyType: "STRING_VALUE",
 * //     PrimaryRegion: "STRING_VALUE",
 * //     ReplicationStatus: { // ReplicationStatus
 * //       "<keys>": { // ReplicationStatusType
 * //         Status: "STRING_VALUE", // required
 * //         StatusMessage: "STRING_VALUE",
 * //       },
 * //     },
 * //     UsingDefaultReplicationRegions: true || false,
 * //     MpaStatus: { // MpaStatus
 * //       MpaSessionArn: "STRING_VALUE", // required
 * //       Status: "STRING_VALUE", // required
 * //       InitiationDate: new Date("TIMESTAMP"), // required
 * //       StatusMessage: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param ImportKeyCommandInput - {@link ImportKeyCommandInput}
 * @returns {@link ImportKeyCommandOutput}
 * @see {@link ImportKeyCommandInput} for command's `input` shape.
 * @see {@link ImportKeyCommandOutput} for command's `response` shape.
 * @see {@link PaymentCryptographyClientResolvedConfig | config} for PaymentCryptographyClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * This exception is thrown when the caller lacks the necessary IAM permissions to perform the requested operation. Verify that your IAM policy includes the required permissions for the specific Amazon Web Services Payment Cryptography action you're attempting.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * This request can cause an inconsistent state for the resource.
 *
 * The requested operation conflicts with the current state of the resource. For example, attempting to delete a key that is currently being used, or trying to create a resource that already exists.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request processing has failed because of an unknown error, exception, or failure.
 *
 * This indicates a server-side error within the Amazon Web Services Payment Cryptography service. If this error persists, contact support for assistance.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The request was denied due to resource not found.
 *
 * The specified key, alias, or other resource does not exist in your account or region. Verify that the resource identifier is correct and that the resource exists in the expected region.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * This request would cause a service quota to be exceeded.
 *
 * You have reached the maximum number of keys, aliases, or other resources allowed in your account. Review your current usage and consider deleting unused resources or requesting a quota increase.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The service cannot complete the request.
 *
 * The Amazon Web Services Payment Cryptography service is temporarily unavailable. This is typically a temporary condition - retry your request after a brief delay.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * You have exceeded the rate limits for Amazon Web Services Payment Cryptography API calls. Implement exponential backoff and retry logic in your application to handle throttling gracefully.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request was denied due to an invalid request error.
 *
 * One or more parameters in your request are invalid. Check the parameter values, formats, and constraints specified in the API documentation.
 *
 * @throws {@link PaymentCryptographyServiceException}
 *
 * Base exception class for all service exceptions from PaymentCryptography service.
 *
 * @public
 */
export class ImportKeyCommand extends command<ImportKeyCommandInput, ImportKeyCommandOutput>(
  _ep0,
  _mw0,
  "ImportKey",
  ImportKey$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ImportKeyInput;
      output: ImportKeyOutput;
    };
    sdk: {
      input: ImportKeyCommandInput;
      output: ImportKeyCommandOutput;
    };
  };
}
