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
export { __MetadataBearer, $Command };
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
 * @public
 * <p>Exports a key from Amazon Web Services Payment Cryptography using either ANSI X9 TR-34 or TR-31 key export standard.</p>
 *          <p>Amazon Web Services Payment Cryptography simplifies main or root key exchange process by eliminating the need of a paper-based key exchange process. It takes a modern and secure approach based of the ANSI X9 TR-34 key exchange standard.</p>
 *          <p>You can use <code>ExportKey</code> to export main or root keys such as KEK (Key Encryption Key), using asymmetric key exchange technique following ANSI X9 TR-34 standard. The ANSI X9 TR-34 standard uses asymmetric keys to establishes bi-directional trust between the two parties exchanging keys. After which you can export working keys using the ANSI X9 TR-31 symmetric key exchange standard as mandated by PCI PIN. Using this operation, you can share your Amazon Web Services Payment Cryptography generated keys with other service partners to perform cryptographic operations outside of Amazon Web Services Payment Cryptography </p>
 *          <p>
 *             <b>TR-34 key export</b>
 *          </p>
 *          <p>Amazon Web Services Payment Cryptography uses TR-34 asymmetric key exchange standard to export main keys such as KEK. In TR-34 terminology, the sending party of the key is called Key Distribution Host (KDH) and the receiving party of the key is called Key Receiving Host (KRH). In key export process, KDH is Amazon Web Services Payment Cryptography which initiates key export. KRH is the user receiving the key. Before you initiate TR-34 key export, you must obtain an export token by calling <a>GetParametersForExport</a>. This operation also returns the signing key certificate that KDH uses to sign the wrapped key to generate a TR-34 wrapped key block. The export token expires after 7 days.</p>
 *          <p>Set the following parameters:</p>
 *          <dl>
 *             <dt>CertificateAuthorityPublicKeyIdentifier</dt>
 *             <dd>
 *                <p>The <code>KeyARN</code> of the certificate chain that will sign the wrapping key certificate. This must exist within Amazon Web Services Payment Cryptography before you initiate TR-34 key export. If it does not exist, you can import it by calling <a>ImportKey</a> for <code>RootCertificatePublicKey</code>.</p>
 *             </dd>
 *             <dt>ExportToken</dt>
 *             <dd>
 *                <p>Obtained from KDH by calling <a>GetParametersForExport</a>.</p>
 *             </dd>
 *             <dt>WrappingKeyCertificate</dt>
 *             <dd>
 *                <p>Amazon Web Services Payment Cryptography uses this to wrap the key under export.</p>
 *             </dd>
 *          </dl>
 *          <p>When this operation is successful, Amazon Web Services Payment Cryptography returns the TR-34 wrapped key block. </p>
 *          <p>
 *             <b>TR-31 key export</b>
 *          </p>
 *          <p>Amazon Web Services Payment Cryptography uses TR-31 symmetric key exchange standard to export working keys. In TR-31, you must use a main key such as KEK to encrypt or wrap the key under export. To establish a KEK, you can use <a>CreateKey</a> or <a>ImportKey</a>. When this operation is successful, Amazon Web Services Payment Cryptography returns a TR-31 wrapped key block. </p>
 *          <p>
 *             <b>Cross-account use:</b> This operation can't be used across different Amazon Web Services accounts.</p>
 *          <p>
 *             <b>Related operations:</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>GetParametersForExport</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ImportKey</a>
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
 *     },
 *     Tr34KeyBlock: { // ExportTr34KeyBlock
 *       CertificateAuthorityPublicKeyIdentifier: "STRING_VALUE", // required
 *       WrappingKeyCertificate: "STRING_VALUE", // required
 *       ExportToken: "STRING_VALUE", // required
 *       KeyBlockFormat: "STRING_VALUE", // required
 *       RandomNonce: "STRING_VALUE",
 *     },
 *   },
 *   ExportKeyIdentifier: "STRING_VALUE", // required
 * };
 * const command = new ExportKeyCommand(input);
 * const response = await client.send(command);
 * // { // ExportKeyOutput
 * //   WrappedKey: { // WrappedKey
 * //     WrappingKeyArn: "STRING_VALUE", // required
 * //     WrappedKeyMaterialFormat: "STRING_VALUE", // required
 * //     KeyMaterial: "STRING_VALUE", // required
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
 */
export class ExportKeyCommand extends $Command<
  ExportKeyCommandInput,
  ExportKeyCommandOutput,
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
  constructor(readonly input: ExportKeyCommandInput) {
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
  ): Handler<ExportKeyCommandInput, ExportKeyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ExportKeyCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PaymentCryptographyClient";
    const commandName = "ExportKeyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ExportKeyInputFilterSensitiveLog,
      outputFilterSensitiveLog: ExportKeyOutputFilterSensitiveLog,
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
  private serialize(input: ExportKeyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ExportKeyCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ExportKeyCommandOutput> {
    return de_ExportKeyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
