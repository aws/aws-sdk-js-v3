// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ExportKeyInput, ExportKeyOutput } from "../models/models_0";
import { ExportKey$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ExportKeyCommand}.
 */
export interface ExportKeyCommandInput extends ExportKeyInput {}
/**
 * @public
 *
 * The output of {@link ExportKeyCommand}.
 */
export interface ExportKeyCommandOutput extends ExportKeyOutput, __MetadataBearer {}

/**
 * Exports a key from Amazon Web Services Payment Cryptography.
 *
 * Amazon Web Services Payment Cryptography simplifies key exchange by replacing the existing paper-based approach with a modern electronic approach. With `ExportKey` you can export symmetric keys using either symmetric and asymmetric key exchange mechanisms. Using this operation, you can share your Amazon Web Services Payment Cryptography generated keys with other service partners to perform cryptographic operations outside of Amazon Web Services Payment Cryptography
 *
 * For symmetric key exchange, Amazon Web Services Payment Cryptography uses the ANSI X9 TR-31 norm in accordance with PCI PIN guidelines. And for asymmetric key exchange, Amazon Web Services Payment Cryptography supports ANSI X9 TR-34 norm, RSA unwrap, and ECDH (Elliptic Curve Diffie-Hellman) key exchange mechanisms. Asymmetric key exchange methods are typically used to establish bi-directional trust between the two parties exhanging keys and are used for initial key exchange such as Key Encryption Key (KEK). After which you can export working keys using symmetric method to perform various cryptographic operations within Amazon Web Services Payment Cryptography.
 *
 * PCI requires specific minimum key strength of wrapping keys used to protect the keys being exchanged electronically. These requirements can change when PCI standards are revised. The rules specify that wrapping keys used for transport must be at least as strong as the key being protected. For more information on recommended key strength of wrapping keys and key exchange mechanism, see [Importing and exporting keys](https://docs.aws.amazon.com/payment-cryptography/latest/userguide/keys-importexport.html) in the *Amazon Web Services Payment Cryptography User Guide*.
 *
 * You can also use `ExportKey` functionality to generate and export an IPEK (Initial Pin Encryption Key) from Amazon Web Services Payment Cryptography using either TR-31 or TR-34 export key exchange. IPEK is generated from BDK (Base Derivation Key) and `ExportDukptInitialKey` attribute KSN (`KeySerialNumber`). The generated IPEK does not persist within Amazon Web Services Payment Cryptography and has to be re-generated each time during export.
 *
 * For key exchange using TR-31 or TR-34 key blocks, you can also export optional blocks within the key block header which contain additional attribute information about the key. The `KeyVersion` within `KeyBlockHeaders` indicates the version of the key within the key block. Furthermore, `KeyExportability` within `KeyBlockHeaders` can be used to further restrict exportability of the key after export from Amazon Web Services Payment Cryptography.
 *
 * The `OptionalBlocks` contain the additional data related to the key. For information on data type that can be included within optional blocks, refer to [ASC X9.143-2022](https://webstore.ansi.org/standards/ascx9/ansix91432022).
 *
 * > **Note:** Data included in key block headers is signed but transmitted in clear text. Sensitive or confidential information should not be included in optional blocks. Refer to ASC X9.143-2022 standard for information on allowed data type.
 *
 * **To export initial keys (KEK) or IPEK using TR-34**
 *
 * Using this operation, you can export initial key using TR-34 asymmetric key exchange. You can only export KEK generated within Amazon Web Services Payment Cryptography. In TR-34 terminology, the sending party of the key is called Key Distribution Host (KDH) and the receiving party of the key is called Key Receiving Device (KRD). During key export process, KDH is Amazon Web Services Payment Cryptography which initiates key export and KRD is the user receiving the key.
 *
 * To initiate TR-34 key export, the KRD must obtain an export token by calling [GetParametersForExport](https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_GetParametersForExport.html). This operation also generates a key pair for the purpose of key export, signs the key and returns back the signing public key certificate (also known as KDH signing certificate) and root certificate chain. The KDH uses the private key to sign the the export payload and the signing public key certificate is provided to KRD to verify the signature. The KRD can import the root certificate into its Hardware Security Module (HSM), as required. The export token and the associated KDH signing certificate expires after 30 days.
 *
 * Next the KRD generates a key pair for the the purpose of encrypting the KDH key and provides the public key cerificate (also known as KRD wrapping certificate) back to KDH. The KRD will also import the root cerificate chain into Amazon Web Services Payment Cryptography by calling [ImportKey](https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_ImportKey.html) for `RootCertificatePublicKey`. The KDH, Amazon Web Services Payment Cryptography, will use the KRD wrapping cerificate to encrypt (wrap) the key under export and signs it with signing private key to generate a TR-34 WrappedKeyBlock. For more information on TR-34 key export, see section [Exporting symmetric keys](https://docs.aws.amazon.com/payment-cryptography/latest/userguide/keys-export.html) in the *Amazon Web Services Payment Cryptography User Guide*.
 *
 * Set the following parameters:
 *
 * - `ExportAttributes`: Specify export attributes in case of IPEK export. This parameter is optional for KEK export.
 * - `ExportKeyIdentifier`: The `KeyARN` of the KEK or BDK (in case of IPEK) under export.
 * - `KeyMaterial`: Use `Tr34KeyBlock` parameters.
 * - `CertificateAuthorityPublicKeyIdentifier`: The `KeyARN` of the certificate chain that signed the KRD wrapping key certificate.
 * - `ExportToken`: Obtained from KDH by calling [GetParametersForImport](https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_GetParametersForImport.html).
 * - `WrappingKeyCertificate`: The public key certificate in PEM format (base64 encoded) of the KRD wrapping key Amazon Web Services Payment Cryptography uses for encryption of the TR-34 export payload. This certificate must be signed by the root certificate (CertificateAuthorityPublicKeyIdentifier) imported into Amazon Web Services Payment Cryptography.
 *
 * When this operation is successful, Amazon Web Services Payment Cryptography returns the KEK or IPEK as a TR-34 WrappedKeyBlock.
 *
 * **To export initial keys (KEK) or IPEK using RSA Wrap and Unwrap**
 *
 * Using this operation, you can export initial key using asymmetric RSA wrap and unwrap key exchange method. To initiate export, generate an asymmetric key pair on the receiving HSM and obtain the public key certificate in PEM format (base64 encoded) for the purpose of wrapping and the root certifiate chain. Import the root certificate into Amazon Web Services Payment Cryptography by calling [ImportKey](https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_ImportKey.html) for `RootCertificatePublicKey`.
 *
 * Next call `ExportKey` and set the following parameters:
 *
 * - `CertificateAuthorityPublicKeyIdentifier`: The `KeyARN` of the certificate chain that signed wrapping key certificate.
 * - `KeyMaterial`: Set to `KeyCryptogram`.
 * - `WrappingKeyCertificate`: The public key certificate in PEM format (base64 encoded) obtained by the receiving HSM and signed by the root certificate (CertificateAuthorityPublicKeyIdentifier) imported into Amazon Web Services Payment Cryptography. The receiving HSM uses its private key component to unwrap the WrappedKeyCryptogram.
 *
 * When this operation is successful, Amazon Web Services Payment Cryptography returns the WrappedKeyCryptogram.
 *
 * **To export working keys or IPEK using TR-31**
 *
 * Using this operation, you can export working keys or IPEK using TR-31 symmetric key exchange. In TR-31, you must use an initial key such as KEK to encrypt or wrap the key under export. To establish a KEK, you can use [CreateKey](https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_CreateKey.html) or [ImportKey](https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_ImportKey.html).
 *
 * Set the following parameters:
 *
 * - `ExportAttributes`: Specify export attributes in case of IPEK export. This parameter is optional for KEK export.
 * - `ExportKeyIdentifier`: The `KeyARN` of the KEK or BDK (in case of IPEK) under export.
 * - `KeyMaterial`: Use `Tr31KeyBlock` parameters.
 *
 * **To export working keys using ECDH**
 *
 * You can also use ECDH key agreement to export working keys in a TR-31 keyblock, where the wrapping key is an ECDH derived key.
 *
 * To initiate a TR-31 key export using ECDH, both sides must create an ECC key pair with key usage K3 and exchange public key certificates. In Amazon Web Services Payment Cryptography, you can do this by calling `CreateKey`. If you have not already done so, you must import the CA chain that issued the receiving public key certificate by calling `ImportKey` with input `RootCertificatePublicKey` for root CA or `TrustedPublicKey` for intermediate CA. You can then complete a TR-31 key export by deriving a shared wrapping key using the service ECC key pair, public certificate of your ECC key pair outside of Amazon Web Services Payment Cryptography, and the key derivation parameters including key derivation function, hash algorithm, derivation data, key algorithm.
 *
 * - `KeyMaterial`: Use `DiffieHellmanTr31KeyBlock` parameters.
 * - `PrivateKeyIdentifier`: The `KeyArn` of the ECC key pair created within Amazon Web Services Payment Cryptography to derive a shared KEK.
 * - `PublicKeyCertificate`: The public key certificate of the receiving ECC key pair in PEM format (base64 encoded) to derive a shared KEK.
 * - `CertificateAuthorityPublicKeyIdentifier`: The `keyARN` of the CA that signed the public key certificate of the receiving ECC key pair.
 *
 * When this operation is successful, Amazon Web Services Payment Cryptography returns the working key as a TR-31 WrappedKeyBlock, where the wrapping key is the ECDH derived key.
 *
 * **Cross-account use:** This operation supports cross-account use when the key has a resource-based policy that grants access. For more information, see [Resource-based policies](https://docs.aws.amazon.com/payment-cryptography/latest/userguide/security_iam_resource-based-policies.html).
 *
 * **Related operations:**
 *
 * - [GetParametersForExport](https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_GetParametersForExport.html)
 * - [ImportKey](https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_ImportKey.html)
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PaymentCryptographyClient, ExportKeyCommand } from "@aws-sdk/client-payment-cryptography"; // ES Modules import
 * // const { PaymentCryptographyClient, ExportKeyCommand } = require("@aws-sdk/client-payment-cryptography"); // CommonJS import
 * // import type { PaymentCryptographyClientConfig } from "@aws-sdk/client-payment-cryptography";
 * const config = {}; // type is PaymentCryptographyClientConfig
 * const client = new PaymentCryptographyClient(config);
 * const input = { // ExportKeyInput
 *   KeyMaterial: { // ExportKeyMaterial Union: only one key present
 *     Tr31KeyBlock: { // ExportTr31KeyBlock
 *       WrappingKeyIdentifier: "STRING_VALUE", // required
 *       KeyBlockHeaders: { // KeyBlockHeaders
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
 *         KeyExportability: "STRING_VALUE",
 *         KeyVersion: "STRING_VALUE",
 *         OptionalBlocks: { // OptionalBlocks
 *           "<keys>": "STRING_VALUE",
 *         },
 *       },
 *     },
 *     Tr34KeyBlock: { // ExportTr34KeyBlock
 *       CertificateAuthorityPublicKeyIdentifier: "STRING_VALUE", // required
 *       WrappingKeyCertificate: "STRING_VALUE", // required
 *       ExportToken: "STRING_VALUE",
 *       SigningKeyIdentifier: "STRING_VALUE",
 *       SigningKeyCertificate: "STRING_VALUE",
 *       KeyBlockFormat: "STRING_VALUE", // required
 *       RandomNonce: "STRING_VALUE",
 *       KeyBlockHeaders: {
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
 *         KeyExportability: "STRING_VALUE",
 *         KeyVersion: "STRING_VALUE",
 *         OptionalBlocks: {
 *           "<keys>": "STRING_VALUE",
 *         },
 *       },
 *     },
 *     KeyCryptogram: { // ExportKeyCryptogram
 *       CertificateAuthorityPublicKeyIdentifier: "STRING_VALUE", // required
 *       WrappingKeyCertificate: "STRING_VALUE", // required
 *       WrappingSpec: "STRING_VALUE",
 *     },
 *     DiffieHellmanTr31KeyBlock: { // ExportDiffieHellmanTr31KeyBlock
 *       PrivateKeyIdentifier: "STRING_VALUE", // required
 *       CertificateAuthorityPublicKeyIdentifier: "STRING_VALUE", // required
 *       PublicKeyCertificate: "STRING_VALUE", // required
 *       DeriveKeyAlgorithm: "TDES_2KEY" || "TDES_3KEY" || "AES_128" || "AES_192" || "AES_256" || "HMAC_SHA256" || "HMAC_SHA384" || "HMAC_SHA512" || "HMAC_SHA224", // required
 *       KeyDerivationFunction: "NIST_SP800" || "ANSI_X963", // required
 *       KeyDerivationHashAlgorithm: "SHA_256" || "SHA_384" || "SHA_512", // required
 *       DerivationData: { // DiffieHellmanDerivationData Union: only one key present
 *         SharedInformation: "STRING_VALUE",
 *       },
 *       KeyBlockHeaders: {
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
 *         KeyExportability: "STRING_VALUE",
 *         KeyVersion: "STRING_VALUE",
 *         OptionalBlocks: {
 *           "<keys>": "STRING_VALUE",
 *         },
 *       },
 *     },
 *     As2805KeyCryptogram: { // ExportAs2805KeyCryptogram
 *       WrappingKeyIdentifier: "STRING_VALUE", // required
 *       As2805KeyVariant: "TERMINAL_MAJOR_KEY_VARIANT_00" || "PIN_ENCRYPTION_KEY_VARIANT_28" || "MESSAGE_AUTHENTICATION_KEY_VARIANT_24" || "DATA_ENCRYPTION_KEY_VARIANT_22", // required
 *     },
 *   },
 *   ExportKeyIdentifier: "STRING_VALUE", // required
 *   ExportAttributes: { // ExportAttributes
 *     ExportDukptInitialKey: { // ExportDukptInitialKey
 *       KeySerialNumber: "STRING_VALUE", // required
 *     },
 *     KeyCheckValueAlgorithm: "STRING_VALUE",
 *   },
 * };
 * const command = new ExportKeyCommand(input);
 * const response = await client.send(command);
 * // { // ExportKeyOutput
 * //   WrappedKey: { // WrappedKey
 * //     WrappingKeyArn: "STRING_VALUE", // required
 * //     WrappedKeyMaterialFormat: "STRING_VALUE", // required
 * //     KeyMaterial: "STRING_VALUE", // required
 * //     KeyCheckValue: "STRING_VALUE",
 * //     KeyCheckValueAlgorithm: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param ExportKeyCommandInput - {@link ExportKeyCommandInput}
 * @returns {@link ExportKeyCommandOutput}
 * @see {@link ExportKeyCommandInput} for command's `input` shape.
 * @see {@link ExportKeyCommandOutput} for command's `response` shape.
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
export class ExportKeyCommand extends command<ExportKeyCommandInput, ExportKeyCommandOutput>(
  _ep0,
  _mw0,
  "ExportKey",
  ExportKey$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ExportKeyInput;
      output: ExportKeyOutput;
    };
    sdk: {
      input: ExportKeyCommandInput;
      output: ExportKeyCommandOutput;
    };
  };
}
