// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  ExportKeyInput,
  ExportKeyInputFilterSensitiveLog,
  ExportKeyOutput,
  ExportKeyOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  PaymentCryptographyClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PaymentCryptographyClient";
import { de_ExportKeyCommand, se_ExportKeyCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Exports a key from Amazon Web Services Payment Cryptography.</p>
 *          <p>Amazon Web Services Payment Cryptography simplifies key exchange by replacing the existing paper-based approach with a modern electronic approach. With <code>ExportKey</code> you can export symmetric keys using either symmetric and asymmetric key exchange mechanisms. Using this operation, you can share your Amazon Web Services Payment Cryptography generated keys with other service partners to perform cryptographic operations outside of Amazon Web Services Payment Cryptography </p>
 *          <p>For symmetric key exchange, Amazon Web Services Payment Cryptography uses the ANSI X9 TR-31 norm in accordance with PCI PIN guidelines. And for asymmetric key exchange, Amazon Web Services Payment Cryptography supports ANSI X9 TR-34 norm and RSA wrap and unwrap key exchange mechanism. Asymmetric key exchange methods are typically used to establish bi-directional trust between the two parties exhanging keys and are used for initial key exchange such as Key Encryption Key (KEK). After which you can export working keys using symmetric method to perform various cryptographic operations within Amazon Web Services Payment Cryptography.</p>
 *          <p>The TR-34 norm is intended for exchanging 3DES keys only and keys are imported in a WrappedKeyBlock format. Key attributes (such as KeyUsage, KeyAlgorithm, KeyModesOfUse, Exportability) are contained within the key block. With RSA wrap and unwrap, you can exchange both 3DES and AES-128 keys. The keys are imported in a WrappedKeyCryptogram format and you will need to specify the key attributes during import. </p>
 *          <p>You can also use <code>ExportKey</code> functionality to generate and export an IPEK (Initial Pin Encryption Key) from Amazon Web Services Payment Cryptography using either TR-31 or TR-34 export key exchange. IPEK is generated from BDK (Base Derivation Key) and <code>ExportDukptInitialKey</code> attribute KSN (<code>KeySerialNumber</code>). The generated IPEK does not persist within Amazon Web Services Payment Cryptography and has to be re-generated each time during export.</p>
 *          <p>For key exchange using TR-31 or TR-34 key blocks, you can also export optional blocks within the key block header which contain additional attribute information about the key. The <code>KeyVersion</code> within <code>KeyBlockHeaders</code> indicates the version of the key within the key block. Furthermore, <code>KeyExportability</code> within <code>KeyBlockHeaders</code> can be used to further restrict exportability of the key after export from Amazon Web Services Payment Cryptography.</p>
 *          <p>The <code>OptionalBlocks</code> contain the additional data related to the key. For information on data type that can be included within optional blocks, refer to <a href="https://webstore.ansi.org/standards/ascx9/ansix91432022">ASC X9.143-2022</a>.</p>
 *          <note>
 *             <p>Data included in key block headers is signed but transmitted in clear text. Sensitive or confidential information should not be included in optional blocks. Refer to ASC X9.143-2022 standard for information on allowed data type.</p>
 *          </note>
 *          <p>
 *             <b>To export initial keys (KEK) or IPEK using TR-34</b>
 *          </p>
 *          <p>Using this operation, you can export initial key using TR-34 asymmetric key exchange. You can only export KEK generated within Amazon Web Services Payment Cryptography. In TR-34 terminology, the sending party of the key is called Key Distribution Host (KDH) and the receiving party of the key is called Key Receiving Device (KRD). During key export process, KDH is Amazon Web Services Payment Cryptography which initiates key export and KRD is the user receiving the key.</p>
 *          <p>To initiate TR-34 key export, the KRD must obtain an export token by calling <a href="https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_GetParametersForExport.html">GetParametersForExport</a>. This operation also generates a key pair for the purpose of key export, signs the key and returns back the signing public key certificate (also known as KDH signing certificate) and root certificate chain. The KDH uses the private key to sign the the export payload and the signing public key certificate is provided to KRD to verify the signature. The KRD can import the root certificate into its Hardware Security Module (HSM), as required. The export token and the associated KDH signing certificate expires after 7 days. </p>
 *          <p>Next the KRD generates a key pair for the the purpose of encrypting the KDH key and provides the public key cerificate (also known as KRD wrapping certificate) back to KDH. The KRD will also import the root cerificate chain into Amazon Web Services Payment Cryptography by calling <a href="https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_ImportKey.html">ImportKey</a> for <code>RootCertificatePublicKey</code>. The KDH, Amazon Web Services Payment Cryptography, will use the KRD wrapping cerificate to encrypt (wrap) the key under export and signs it with signing private key to generate a TR-34 WrappedKeyBlock. For more information on TR-34 key export, see section <a href="https://docs.aws.amazon.com/payment-cryptography/latest/userguide/keys-export.html">Exporting symmetric keys</a> in the <i>Amazon Web Services Payment Cryptography User Guide</i>. </p>
 *          <p>Set the following parameters:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>ExportAttributes</code>: Specify export attributes in case of IPEK export. This parameter is optional for KEK export.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ExportKeyIdentifier</code>: The <code>KeyARN</code> of the KEK or BDK (in case of IPEK) under export.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>KeyMaterial</code>: Use <code>Tr34KeyBlock</code> parameters.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>CertificateAuthorityPublicKeyIdentifier</code>: The <code>KeyARN</code> of the certificate chain that signed the KRD wrapping key certificate.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ExportToken</code>: Obtained from KDH by calling <a href="https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_GetParametersForImport.html">GetParametersForImport</a>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>WrappingKeyCertificate</code>: The public key certificate in PEM format (base64 encoded) of the KRD wrapping key Amazon Web Services Payment Cryptography uses for encryption of the TR-34 export payload. This certificate must be signed by the root certificate (CertificateAuthorityPublicKeyIdentifier) imported into Amazon Web Services Payment Cryptography.</p>
 *             </li>
 *          </ul>
 *          <p>When this operation is successful, Amazon Web Services Payment Cryptography returns the KEK or IPEK as a TR-34 WrappedKeyBlock. </p>
 *          <p>
 *             <b>To export initial keys (KEK) or IPEK using RSA Wrap and Unwrap</b>
 *          </p>
 *          <p>Using this operation, you can export initial key using asymmetric RSA wrap and unwrap key exchange method. To initiate export, generate an asymmetric key pair on the receiving HSM and obtain the public key certificate in PEM format (base64 encoded) for the purpose of wrapping and the root certifiate chain. Import the root certificate into Amazon Web Services Payment Cryptography by calling <a href="https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_ImportKey.html">ImportKey</a> for <code>RootCertificatePublicKey</code>.</p>
 *          <p>Next call <code>ExportKey</code> and set the following parameters:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>CertificateAuthorityPublicKeyIdentifier</code>: The <code>KeyARN</code> of the certificate chain that signed wrapping key certificate.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>KeyMaterial</code>: Set to <code>KeyCryptogram</code>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>WrappingKeyCertificate</code>: The public key certificate in PEM format (base64 encoded) obtained by the receiving HSM and signed by the root certificate (CertificateAuthorityPublicKeyIdentifier) imported into Amazon Web Services Payment Cryptography. The receiving HSM uses its private key component to unwrap the WrappedKeyCryptogram.</p>
 *             </li>
 *          </ul>
 *          <p>When this operation is successful, Amazon Web Services Payment Cryptography returns the WrappedKeyCryptogram. </p>
 *          <p>
 *             <b>To export working keys or IPEK using TR-31</b>
 *          </p>
 *          <p>Using this operation, you can export working keys or IPEK using TR-31 symmetric key exchange. In TR-31, you must use an initial key such as KEK to encrypt or wrap the key under export. To establish a KEK, you can use <a href="https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_CreateKey.html">CreateKey</a> or <a href="https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_ImportKey.html">ImportKey</a>. </p>
 *          <p>Set the following parameters:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>ExportAttributes</code>: Specify export attributes in case of IPEK export. This parameter is optional for KEK export.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ExportKeyIdentifier</code>: The <code>KeyARN</code> of the KEK or BDK (in case of IPEK) under export.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>KeyMaterial</code>: Use <code>Tr31KeyBlock</code> parameters.</p>
 *             </li>
 *          </ul>
 *          <p>When this operation is successful, Amazon Web Services Payment Cryptography returns the working key or IPEK as a TR-31 WrappedKeyBlock.</p>
 *          <p>
 *             <b>Cross-account use:</b> This operation can't be used across different Amazon Web Services accounts.</p>
 *          <p>
 *             <b>Related operations:</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_GetParametersForExport.html">GetParametersForExport</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_ImportKey.html">ImportKey</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PaymentCryptographyClient, ExportKeyCommand } from "@aws-sdk/client-payment-cryptography"; // ES Modules import
 * // const { PaymentCryptographyClient, ExportKeyCommand } = require("@aws-sdk/client-payment-cryptography"); // CommonJS import
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
 *       ExportToken: "STRING_VALUE", // required
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
 * @public
 */
export class ExportKeyCommand extends $Command
  .classBuilder<
    ExportKeyCommandInput,
    ExportKeyCommandOutput,
    PaymentCryptographyClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: PaymentCryptographyClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("PaymentCryptographyControlPlane", "ExportKey", {})
  .n("PaymentCryptographyClient", "ExportKeyCommand")
  .f(ExportKeyInputFilterSensitiveLog, ExportKeyOutputFilterSensitiveLog)
  .ser(se_ExportKeyCommand)
  .de(de_ExportKeyCommand)
  .build() {}
