// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ImportKeyInput, ImportKeyOutput } from "../models/models_0";
import type {
  PaymentCryptographyClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PaymentCryptographyClient";
import { ImportKey$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Imports symmetric keys and public key certificates in PEM format (base64 encoded) into Amazon Web Services Payment Cryptography.</p> <p>Amazon Web Services Payment Cryptography simplifies key exchange by replacing the existing paper-based approach with a modern electronic approach. With <code>ImportKey</code> you can import symmetric keys using either symmetric and asymmetric key exchange mechanisms.</p> <p>For symmetric key exchange, Amazon Web Services Payment Cryptography uses the ANSI X9 TR-31 norm in accordance with PCI PIN guidelines. And for asymmetric key exchange, Amazon Web Services Payment Cryptography supports ANSI X9 TR-34 norm, RSA unwrap, and ECDH (Elliptic Curve Diffie-Hellman) key exchange mechanisms. Asymmetric key exchange methods are typically used to establish bi-directional trust between the two parties exhanging keys and are used for initial key exchange such as Key Encryption Key (KEK) or Zone Master Key (ZMK). After which you can import working keys using symmetric method to perform various cryptographic operations within Amazon Web Services Payment Cryptography.</p> <p>PCI requires specific minimum key strength of wrapping keys used to protect the keys being exchanged electronically. These requirements can change when PCI standards are revised. The rules specify that wrapping keys used for transport must be at least as strong as the key being protected. For more information on recommended key strength of wrapping keys and key exchange mechanism, see <a href="https://docs.aws.amazon.com/payment-cryptography/latest/userguide/keys-importexport.html">Importing and exporting keys</a> in the <i>Amazon Web Services Payment Cryptography User Guide</i>.</p> <p>You can also import a <i>root public key certificate</i>, used to sign other public key certificates, or a <i>trusted public key certificate</i> under an already established root public key certificate.</p> <p> <b>To import a public root key certificate</b> </p> <p>Using this operation, you can import the public component (in PEM cerificate format) of your private root key. You can use the imported public root key certificate for digital signatures, for example signing wrapping key or signing key in TR-34, within your Amazon Web Services Payment Cryptography account.</p> <p>Set the following parameters:</p> <ul> <li> <p> <code>KeyMaterial</code>: <code>RootCertificatePublicKey</code> </p> </li> <li> <p> <code>KeyClass</code>: <code>PUBLIC_KEY</code> </p> </li> <li> <p> <code>KeyModesOfUse</code>: <code>Verify</code> </p> </li> <li> <p> <code>KeyUsage</code>: <code>TR31_S0_ASYMMETRIC_KEY_FOR_DIGITAL_SIGNATURE</code> </p> </li> <li> <p> <code>PublicKeyCertificate</code>: The public key certificate in PEM format (base64 encoded) of the private root key under import.</p> </li> </ul> <p> <b>To import a trusted public key certificate</b> </p> <p>The root public key certificate must be in place and operational before you import a trusted public key certificate. Set the following parameters:</p> <ul> <li> <p> <code>KeyMaterial</code>: <code>TrustedCertificatePublicKey</code> </p> </li> <li> <p> <code>CertificateAuthorityPublicKeyIdentifier</code>: <code>KeyArn</code> of the <code>RootCertificatePublicKey</code>.</p> </li> <li> <p> <code>KeyModesOfUse</code> and <code>KeyUsage</code>: Corresponding to the cryptographic operations such as wrap, sign, or encrypt that you will allow the trusted public key certificate to perform.</p> </li> <li> <p> <code>PublicKeyCertificate</code>: The trusted public key certificate in PEM format (base64 encoded) under import.</p> </li> </ul> <p> <b>To import initial keys (KEK or ZMK or similar) using TR-34</b> </p> <p>Using this operation, you can import initial key using TR-34 asymmetric key exchange. In TR-34 terminology, the sending party of the key is called Key Distribution Host (KDH) and the receiving party of the key is called Key Receiving Device (KRD). During the key import process, KDH is the user who initiates the key import and KRD is Amazon Web Services Payment Cryptography who receives the key.</p> <p>To initiate TR-34 key import, the KDH must obtain an import token by calling <a href="https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_GetParametersForImport.html">GetParametersForImport</a>. This operation generates an encryption keypair for the purpose of key import, signs the key and returns back the wrapping key certificate (also known as KRD wrapping certificate) and the root certificate chain. The KDH must trust and install the KRD wrapping certificate on its HSM and use it to encrypt (wrap) the KDH key during TR-34 WrappedKeyBlock generation. The import token and associated KRD wrapping certificate expires after 30 days.</p> <p>Next the KDH generates a key pair for the purpose of signing the encrypted KDH key and provides the public certificate of the signing key to Amazon Web Services Payment Cryptography. The KDH will also need to import the root certificate chain of the KDH signing certificate by calling <code>ImportKey</code> for <code>RootCertificatePublicKey</code>. For more information on TR-34 key import, see section <a href="https://docs.aws.amazon.com/payment-cryptography/latest/userguide/keys-import.html">Importing symmetric keys</a> in the <i>Amazon Web Services Payment Cryptography User Guide</i>.</p> <p>Set the following parameters:</p> <ul> <li> <p> <code>KeyMaterial</code>: Use <code>Tr34KeyBlock</code> parameters.</p> </li> <li> <p> <code>CertificateAuthorityPublicKeyIdentifier</code>: The <code>KeyARN</code> of the certificate chain that signed the KDH signing key certificate.</p> </li> <li> <p> <code>ImportToken</code>: Obtained from KRD by calling <a href="https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_GetParametersForImport.html">GetParametersForImport</a>.</p> </li> <li> <p> <code>WrappedKeyBlock</code>: The TR-34 wrapped key material from KDH. It contains the KDH key under import, wrapped with KRD wrapping certificate and signed by KDH signing private key. This TR-34 key block is typically generated by the KDH Hardware Security Module (HSM) outside of Amazon Web Services Payment Cryptography.</p> </li> <li> <p> <code>SigningKeyCertificate</code>: The public key certificate in PEM format (base64 encoded) of the KDH signing key generated under the root certificate (CertificateAuthorityPublicKeyIdentifier) imported in Amazon Web Services Payment Cryptography.</p> </li> </ul> <p> <b>To import initial keys (KEK or ZMK or similar) using RSA Wrap and Unwrap</b> </p> <p>Using this operation, you can import initial key using asymmetric RSA wrap and unwrap key exchange method. To initiate import, call <a href="https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_GetParametersForImport.html">GetParametersForImport</a> with <code>KeyMaterial</code> set to <code>KEY_CRYPTOGRAM</code> to generate an import token. This operation also generates an encryption keypair for the purpose of key import, signs the key and returns back the wrapping key certificate in PEM format (base64 encoded) and its root certificate chain. The import token and associated KRD wrapping certificate expires after 30 days. </p> <p>You must trust and install the wrapping certificate and its certificate chain on the sending HSM and use it to wrap the key under export for WrappedKeyCryptogram generation. Next call <code>ImportKey</code> with <code>KeyMaterial</code> set to <code>KEY_CRYPTOGRAM</code> and provide the <code>ImportToken</code> and <code>KeyAttributes</code> for the key under import.</p> <p> <b>To import working keys using TR-31</b> </p> <p>Amazon Web Services Payment Cryptography uses TR-31 symmetric key exchange norm to import working keys. A KEK must be established within Amazon Web Services Payment Cryptography by using TR-34 key import or by using <a href="https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_CreateKey.html">CreateKey</a>. To initiate a TR-31 key import, set the following parameters:</p> <ul> <li> <p> <code>KeyMaterial</code>: Use <code>Tr31KeyBlock</code> parameters.</p> </li> <li> <p> <code>WrappedKeyBlock</code>: The TR-31 wrapped key material. It contains the key under import, encrypted using KEK. The TR-31 key block is typically generated by a HSM outside of Amazon Web Services Payment Cryptography. </p> </li> <li> <p> <code>WrappingKeyIdentifier</code>: The <code>KeyArn</code> of the KEK that Amazon Web Services Payment Cryptography uses to decrypt or unwrap the key under import.</p> </li> </ul> <p> <b>To import working keys using ECDH</b> </p> <p>You can also use ECDH key agreement to import working keys as a TR-31 keyblock, where the wrapping key is an ECDH derived key.</p> <p>To initiate a TR-31 key import using ECDH, both sides must create an ECC key pair with key usage K3 and exchange public key certificates. In Amazon Web Services Payment Cryptography, you can do this by calling <code>CreateKey</code> and then <code>GetPublicKeyCertificate</code> to retrieve its public key certificate. Next, you can then generate a TR-31 WrappedKeyBlock using your own ECC key pair, the public certificate of the service's ECC key pair, and the key derivation parameters including key derivation function, hash algorithm, derivation data, and key algorithm. If you have not already done so, you must import the CA chain that issued the receiving public key certificate by calling <code>ImportKey</code> with input <code>RootCertificatePublicKey</code> for root CA or <code>TrustedPublicKey</code> for intermediate CA. To complete the TR-31 key import, you can use the following parameters. It is important that the ECDH key derivation parameters you use should match those used during import to derive the same shared wrapping key within Amazon Web Services Payment Cryptography.</p> <ul> <li> <p> <code>KeyMaterial</code>: Use <code>DiffieHellmanTr31KeyBlock</code> parameters.</p> </li> <li> <p> <code>PrivateKeyIdentifier</code>: The <code>KeyArn</code> of the ECC key pair created within Amazon Web Services Payment Cryptography to derive a shared KEK.</p> </li> <li> <p> <code>PublicKeyCertificate</code>: The public key certificate of the receiving ECC key pair in PEM format (base64 encoded) to derive a shared KEK.</p> </li> <li> <p> <code>CertificateAuthorityPublicKeyIdentifier</code>: The <code>keyARN</code> of the CA that signed the public key certificate of the receiving ECC key pair.</p> </li> </ul> <p> <b>Cross-account use:</b> This operation can't be used across different Amazon Web Services accounts.</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_ExportKey.html">ExportKey</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_GetParametersForImport.html">GetParametersForImport</a> </p> </li> </ul>
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
 *  <p>You do not have sufficient access to perform this action.</p> <p>This exception is thrown when the caller lacks the necessary IAM permissions to perform the requested operation. Verify that your IAM policy includes the required permissions for the specific Amazon Web Services Payment Cryptography action you're attempting.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>This request can cause an inconsistent state for the resource.</p> <p>The requested operation conflicts with the current state of the resource. For example, attempting to delete a key that is currently being used, or trying to create a resource that already exists.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception, or failure.</p> <p>This indicates a server-side error within the Amazon Web Services Payment Cryptography service. If this error persists, contact support for assistance.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request was denied due to resource not found.</p> <p>The specified key, alias, or other resource does not exist in your account or region. Verify that the resource identifier is correct and that the resource exists in the expected region.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>This request would cause a service quota to be exceeded.</p> <p>You have reached the maximum number of keys, aliases, or other resources allowed in your account. Review your current usage and consider deleting unused resources or requesting a quota increase.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service cannot complete the request.</p> <p>The Amazon Web Services Payment Cryptography service is temporarily unavailable. This is typically a temporary condition - retry your request after a brief delay.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p> <p>You have exceeded the rate limits for Amazon Web Services Payment Cryptography API calls. Implement exponential backoff and retry logic in your application to handle throttling gracefully.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request was denied due to an invalid request error.</p> <p>One or more parameters in your request are invalid. Check the parameter values, formats, and constraints specified in the API documentation.</p>
 *
 * @throws {@link PaymentCryptographyServiceException}
 * <p>Base exception class for all service exceptions from PaymentCryptography service.</p>
 *
 *
 * @public
 */
export class ImportKeyCommand extends $Command
  .classBuilder<
    ImportKeyCommandInput,
    ImportKeyCommandOutput,
    PaymentCryptographyClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PaymentCryptographyClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("PaymentCryptographyControlPlane", "ImportKey", {})
  .n("PaymentCryptographyClient", "ImportKeyCommand")
  .sc(ImportKey$)
  .build() {
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
