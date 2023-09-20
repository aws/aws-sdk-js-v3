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
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import {
  GetPublicKeyCertificateInput,
  GetPublicKeyCertificateOutput,
  GetPublicKeyCertificateOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  PaymentCryptographyClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PaymentCryptographyClient";
import { de_GetPublicKeyCertificateCommand, se_GetPublicKeyCertificateCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetPublicKeyCertificateCommand}.
 */
export interface GetPublicKeyCertificateCommandInput extends GetPublicKeyCertificateInput {}
/**
 * @public
 *
 * The output of {@link GetPublicKeyCertificateCommand}.
 */
export interface GetPublicKeyCertificateCommandOutput extends GetPublicKeyCertificateOutput, __MetadataBearer {}

/**
 * @public
 * <p>Gets the public key certificate of the asymmetric key pair that exists within Amazon Web Services Payment Cryptography.</p>
 *          <p>Unlike the private key of an asymmetric key, which never leaves Amazon Web Services Payment Cryptography unencrypted, callers with <code>GetPublicKeyCertificate</code> permission can download the public key certificate of the asymmetric key. You can share the public key certificate to allow others to encrypt messages and verify signatures outside of Amazon Web Services Payment Cryptography</p>
 *          <p>
 *             <b>Cross-account use:</b> This operation can't be used across different Amazon Web Services accounts.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PaymentCryptographyClient, GetPublicKeyCertificateCommand } from "@aws-sdk/client-payment-cryptography"; // ES Modules import
 * // const { PaymentCryptographyClient, GetPublicKeyCertificateCommand } = require("@aws-sdk/client-payment-cryptography"); // CommonJS import
 * const client = new PaymentCryptographyClient(config);
 * const input = { // GetPublicKeyCertificateInput
 *   KeyIdentifier: "STRING_VALUE", // required
 * };
 * const command = new GetPublicKeyCertificateCommand(input);
 * const response = await client.send(command);
 * // { // GetPublicKeyCertificateOutput
 * //   KeyCertificate: "STRING_VALUE", // required
 * //   KeyCertificateChain: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param GetPublicKeyCertificateCommandInput - {@link GetPublicKeyCertificateCommandInput}
 * @returns {@link GetPublicKeyCertificateCommandOutput}
 * @see {@link GetPublicKeyCertificateCommandInput} for command's `input` shape.
 * @see {@link GetPublicKeyCertificateCommandOutput} for command's `response` shape.
 * @see {@link PaymentCryptographyClientResolvedConfig | config} for PaymentCryptographyClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
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
export class GetPublicKeyCertificateCommand extends $Command<
  GetPublicKeyCertificateCommandInput,
  GetPublicKeyCertificateCommandOutput,
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
  constructor(readonly input: GetPublicKeyCertificateCommandInput) {
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
  ): Handler<GetPublicKeyCertificateCommandInput, GetPublicKeyCertificateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetPublicKeyCertificateCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PaymentCryptographyClient";
    const commandName = "GetPublicKeyCertificateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: GetPublicKeyCertificateOutputFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "PaymentCryptographyControlPlane",
        operation: "GetPublicKeyCertificate",
      },
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
  private serialize(input: GetPublicKeyCertificateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetPublicKeyCertificateCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetPublicKeyCertificateCommandOutput> {
    return de_GetPublicKeyCertificateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
