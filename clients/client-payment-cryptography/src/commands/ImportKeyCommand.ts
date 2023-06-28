// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

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
export { __MetadataBearer, $Command };
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
 * @public
 * <p>Imports keys and public key certificates into Amazon Web Services Payment Cryptography.</p>
 *          <p>Amazon Web Services Payment Cryptography simplifies main or root key exchange process by eliminating the need of a paper-based key exchange process. It takes a modern and secure approach based of the ANSI X9 TR-34 key exchange standard. </p>
 *          <p>You can use <code>ImportKey</code> to import main or root keys such as KEK (Key Encryption Key) using asymmetric key exchange technique following the ANSI X9 TR-34 standard. The ANSI X9 TR-34 standard uses asymmetric keys to establishes bi-directional trust between the two parties exchanging keys. </p>
 *          <p>After you have imported a main or root key, you can import working keys to perform various cryptographic operations within Amazon Web Services Payment Cryptography using the ANSI X9 TR-31 symmetric key exchange standard as mandated by PCI PIN.</p>
 *          <p>You can also import a <i>root public key certificate</i>, a self-signed certificate used to sign other public key certificates, or a <i>trusted public key certificate</i> under an already established root public key certificate. </p>
 *          <p>
 *             <b>To import a public root key certificate</b>
 *          </p>
 *          <p>Using this operation, you can import the public component (in PEM cerificate format) of your private root key. You can use the imported public root key certificate for digital signatures, for example signing wrapping key or signing key in TR-34, within your Amazon Web Services Payment Cryptography account.  </p>
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
 *                   <code>PublicKeyCertificate</code>: The certificate authority used to sign the root public key certificate.</p>
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
 *                   <code>PublicKeyCertificate</code>: The certificate authority used to sign the trusted public key certificate.</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Import main keys</b>
 *          </p>
 *          <p>Amazon Web Services Payment Cryptography uses TR-34 asymmetric key exchange standard to import main keys such as KEK. In TR-34 terminology, the sending party of the key is called Key Distribution Host (KDH) and the receiving party of the key is called Key Receiving Host (KRH). During the key import process, KDH is the user who initiates the key import and KRH is Amazon Web Services Payment Cryptography who receives the key. Before initiating TR-34 key import, you must obtain an import token by calling <a>GetParametersForImport</a>. This operation also returns the wrapping key certificate that KDH uses wrap key under import to generate a TR-34 wrapped key block. The import token expires after 7 days.</p>
 *          <p>Set the following parameters:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>CertificateAuthorityPublicKeyIdentifier</code>: The <code>KeyArn</code> of the certificate chain that will sign the signing key certificate and should exist within Amazon Web Services Payment Cryptography before initiating TR-34 key import. If it does not exist, you can import it by calling by calling <code>ImportKey</code> for <code>RootCertificatePublicKey</code>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ImportToken</code>: Obtained from KRH by calling <a>GetParametersForImport</a>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>WrappedKeyBlock</code>: The TR-34 wrapped key block from KDH. It contains the KDH key under import, wrapped with KRH provided wrapping key certificate and signed by the KDH private signing key. This TR-34 key block is generated by the KDH Hardware Security Module (HSM) outside of Amazon Web Services Payment Cryptography.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>SigningKeyCertificate</code>: The public component of the private key that signed the KDH TR-34 wrapped key block. In PEM certificate format.</p>
 *             </li>
 *          </ul>
 *          <note>
 *             <p>TR-34 is intended primarily to exchange 3DES keys. Your ability to export AES-128 and larger AES keys may be dependent on your source system.</p>
 *          </note>
 *          <p>
 *             <b>Import working keys</b>
 *          </p>
 *          <p>Amazon Web Services Payment Cryptography uses TR-31 symmetric key exchange standard to import working keys. A KEK must be established within Amazon Web Services Payment Cryptography by using TR-34 key import. To initiate a TR-31 key import, set the following parameters:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>WrappedKeyBlock</code>: The key under import and encrypted using KEK. The TR-31 key block generated by your HSM outside of Amazon Web Services Payment Cryptography. </p>
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
 *                   <a>ExportKey</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>GetParametersForImport</a>
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
 *   },
 *   KeyCheckValueAlgorithm: "STRING_VALUE",
 *   Enabled: true || false,
 *   Tags: [ // Tags
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE",
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
 */
export class ImportKeyCommand extends $Command<
  ImportKeyCommandInput,
  ImportKeyCommandOutput,
  PaymentCryptographyClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: ImportKeyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PaymentCryptographyClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ImportKeyCommandInput, ImportKeyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ImportKeyCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PaymentCryptographyClient";
    const commandName = "ImportKeyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ImportKeyInputFilterSensitiveLog,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: ImportKeyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ImportKeyCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ImportKeyCommandOutput> {
    return de_ImportKeyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
