// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ImportKeyInput, ImportKeyInputFilterSensitiveLog, ImportKeyOutput } from "../models/models_0";
import {
  PaymentCryptographyClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PaymentCryptographyClient";
import { de_ImportKeyCommand, se_ImportKeyCommand } from "../protocols/Aws_json1_0";

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
 * <p>Imports symmetric keys and public key certificates in PEM format (base64 encoded) into Amazon Web Services Payment Cryptography.</p>
 *          <p>Amazon Web Services Payment Cryptography simplifies key exchange by replacing the existing paper-based approach with a modern electronic approach. With <code>ImportKey</code> you can import symmetric keys using either symmetric and asymmetric key exchange mechanisms.</p>
 *          <p>For symmetric key exchange, Amazon Web Services Payment Cryptography uses the ANSI X9 TR-31 norm in accordance with PCI PIN guidelines. And for asymmetric key exchange, Amazon Web Services Payment Cryptography supports ANSI X9 TR-34 norm and RSA wrap and unwrap key exchange mechanisms. Asymmetric key exchange methods are typically used to establish bi-directional trust between the two parties exhanging keys and are used for initial key exchange such as Key Encryption Key (KEK) or Zone Master Key (ZMK). After which you can import working keys using symmetric method to perform various cryptographic operations within Amazon Web Services Payment Cryptography.</p>
 *          <p>The TR-34 norm is intended for exchanging 3DES keys only and keys are imported in a WrappedKeyBlock format. Key attributes (such as KeyUsage, KeyAlgorithm, KeyModesOfUse, Exportability) are contained within the key block. With RSA wrap and unwrap, you can exchange both 3DES and AES-128 keys. The keys are imported in a WrappedKeyCryptogram format and you will need to specify the key attributes during import. </p>
 *          <p>You can also import a <i>root public key certificate</i>, used to sign other public key certificates, or a <i>trusted public key certificate</i> under an already established root public key certificate.</p>
 *          <p>
 *             <b>To import a public root key certificate</b>
 *          </p>
 *          <p>Using this operation, you can import the public component (in PEM cerificate format) of your private root key. You can use the imported public root key certificate for digital signatures, for example signing wrapping key or signing key in TR-34, within your Amazon Web Services Payment Cryptography account.</p>
 *          <p>Set the following parameters:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>KeyMaterial</code>: <code>RootCertificatePublicKey</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>KeyClass</code>: <code>PUBLIC_KEY</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>KeyModesOfUse</code>: <code>Verify</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>KeyUsage</code>: <code>TR31_S0_ASYMMETRIC_KEY_FOR_DIGITAL_SIGNATURE</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>PublicKeyCertificate</code>: The public key certificate in PEM format (base64 encoded) of the private root key under import.</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>To import a trusted public key certificate</b>
 *          </p>
 *          <p>The root public key certificate must be in place and operational before you import a trusted public key certificate. Set the following parameters:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>KeyMaterial</code>: <code>TrustedCertificatePublicKey</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>CertificateAuthorityPublicKeyIdentifier</code>: <code>KeyArn</code> of the <code>RootCertificatePublicKey</code>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>KeyModesOfUse</code> and <code>KeyUsage</code>: Corresponding to the cryptographic operations such as wrap, sign, or encrypt that you will allow the trusted public key certificate to perform.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>PublicKeyCertificate</code>: The trusted public key certificate in PEM format (base64 encoded) under import.</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>To import initial keys (KEK or ZMK or similar) using TR-34</b>
 *          </p>
 *          <p>Using this operation, you can import initial key using TR-34 asymmetric key exchange. In TR-34 terminology, the sending party of the key is called Key Distribution Host (KDH) and the receiving party of the key is called Key Receiving Device (KRD). During the key import process, KDH is the user who initiates the key import and KRD is Amazon Web Services Payment Cryptography who receives the key.</p>
 *          <p>To initiate TR-34 key import, the KDH must obtain an import token by calling <a href="https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_GetParametersForImport.html">GetParametersForImport</a>. This operation generates an encryption keypair for the purpose of key import, signs the key and returns back the wrapping key certificate (also known as KRD wrapping certificate) and the root certificate chain. The KDH must trust and install the KRD wrapping certificate on its HSM and use it to encrypt (wrap) the KDH key during TR-34 WrappedKeyBlock generation. The import token and associated KRD wrapping certificate expires after 7 days.</p>
 *          <p>Next the KDH generates a key pair for the purpose of signing the encrypted KDH key and provides the public certificate of the signing key to Amazon Web Services Payment Cryptography. The KDH will also need to import the root certificate chain of the KDH signing certificate by calling <code>ImportKey</code> for <code>RootCertificatePublicKey</code>. For more information on TR-34 key import, see section <a href="https://docs.aws.amazon.com/payment-cryptography/latest/userguide/keys-import.html">Importing symmetric keys</a> in the <i>Amazon Web Services Payment Cryptography User Guide</i>.</p>
 *          <p>Set the following parameters:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>KeyMaterial</code>: Use <code>Tr34KeyBlock</code> parameters.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>CertificateAuthorityPublicKeyIdentifier</code>: The <code>KeyARN</code> of the certificate chain that signed the KDH signing key certificate.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ImportToken</code>: Obtained from KRD by calling <a href="https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_GetParametersForImport.html">GetParametersForImport</a>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>WrappedKeyBlock</code>: The TR-34 wrapped key material from KDH. It contains the KDH key under import, wrapped with KRD wrapping certificate and signed by KDH signing private key. This TR-34 key block is typically generated by the KDH Hardware Security Module (HSM) outside of Amazon Web Services Payment Cryptography.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>SigningKeyCertificate</code>: The public key certificate in PEM format (base64 encoded) of the KDH signing key generated under the root certificate (CertificateAuthorityPublicKeyIdentifier) imported in Amazon Web Services Payment Cryptography.</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>To import initial keys (KEK or ZMK or similar) using RSA Wrap and Unwrap</b>
 *          </p>
 *          <p>Using this operation, you can import initial key using asymmetric RSA wrap and unwrap key exchange method. To initiate import, call <a href="https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_GetParametersForImport.html">GetParametersForImport</a> with <code>KeyMaterial</code> set to <code>KEY_CRYPTOGRAM</code> to generate an import token. This operation also generates an encryption keypair for the purpose of key import, signs the key and returns back the wrapping key certificate in PEM format (base64 encoded) and its root certificate chain. The import token and associated KRD wrapping certificate expires after 7 days. </p>
 *          <p>You must trust and install the wrapping certificate and its certificate chain on the sending HSM and use it to wrap the key under export for WrappedKeyCryptogram generation. Next call <code>ImportKey</code> with <code>KeyMaterial</code> set to <code>KEY_CRYPTOGRAM</code> and provide the <code>ImportToken</code> and <code>KeyAttributes</code> for the key under import.</p>
 *          <p>
 *             <b>To import working keys using TR-31</b>
 *          </p>
 *          <p>Amazon Web Services Payment Cryptography uses TR-31 symmetric key exchange norm to import working keys. A KEK must be established within Amazon Web Services Payment Cryptography by using TR-34 key import or by using <a href="https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_CreateKey.html">CreateKey</a>. To initiate a TR-31 key import, set the following parameters:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>KeyMaterial</code>: Use <code>Tr31KeyBlock</code> parameters.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>WrappedKeyBlock</code>: The TR-31 wrapped key material. It contains the key under import, encrypted using KEK. The TR-31 key block is typically generated by a HSM outside of Amazon Web Services Payment Cryptography. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>WrappingKeyIdentifier</code>: The <code>KeyArn</code> of the KEK that Amazon Web Services Payment Cryptography uses to decrypt or unwrap the key under import.</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Cross-account use:</b> This operation can't be used across different Amazon Web Services accounts.</p>
 *          <p>
 *             <b>Related operations:</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_ExportKey.html">ExportKey</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_GetParametersForImport.html">GetParametersForImport</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PaymentCryptographyClient, ImportKeyCommand } from "@aws-sdk/client-payment-cryptography"; // ES Modules import
 * // const { PaymentCryptographyClient, ImportKeyCommand } = require("@aws-sdk/client-payment-cryptography"); // CommonJS import
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
 *       ImportToken: "STRING_VALUE", // required
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
 *       DeriveKeyAlgorithm: "TDES_2KEY" || "TDES_3KEY" || "AES_128" || "AES_192" || "AES_256", // required
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
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>This request can cause an inconsistent state for the resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception, or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request was denied due to an invalid resource error.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>This request would cause a service quota to be exceeded.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service cannot complete the request.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request was denied due to an invalid request error.</p>
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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("PaymentCryptographyControlPlane", "ImportKey", {})
  .n("PaymentCryptographyClient", "ImportKeyCommand")
  .f(ImportKeyInputFilterSensitiveLog, void 0)
  .ser(se_ImportKeyCommand)
  .de(de_ImportKeyCommand)
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
