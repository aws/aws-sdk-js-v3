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

import { ACMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ACMClient";
import {
  ExportCertificateRequest,
  ExportCertificateRequestFilterSensitiveLog,
  ExportCertificateResponse,
  ExportCertificateResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_ExportCertificateCommand, se_ExportCertificateCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ExportCertificateCommand}.
 */
export interface ExportCertificateCommandInput extends ExportCertificateRequest {}
/**
 * @public
 *
 * The output of {@link ExportCertificateCommand}.
 */
export interface ExportCertificateCommandOutput extends ExportCertificateResponse, __MetadataBearer {}

/**
 * @public
 * <p>Exports a private certificate issued by a private certificate authority (CA) for use
 *       anywhere. The exported file contains the certificate, the certificate chain, and the encrypted
 *       private 2048-bit RSA key associated with the public key that is embedded in the certificate.
 *       For security, you must assign a passphrase for the private key when exporting it. </p>
 *          <p>For information about exporting and formatting a certificate using the ACM console or
 *       CLI, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/gs-acm-export-private.html">Export a
 *         Private Certificate</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ACMClient, ExportCertificateCommand } from "@aws-sdk/client-acm"; // ES Modules import
 * // const { ACMClient, ExportCertificateCommand } = require("@aws-sdk/client-acm"); // CommonJS import
 * const client = new ACMClient(config);
 * const input = { // ExportCertificateRequest
 *   CertificateArn: "STRING_VALUE", // required
 *   Passphrase: "BLOB_VALUE", // required
 * };
 * const command = new ExportCertificateCommand(input);
 * const response = await client.send(command);
 * // { // ExportCertificateResponse
 * //   Certificate: "STRING_VALUE",
 * //   CertificateChain: "STRING_VALUE",
 * //   PrivateKey: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ExportCertificateCommandInput - {@link ExportCertificateCommandInput}
 * @returns {@link ExportCertificateCommandOutput}
 * @see {@link ExportCertificateCommandInput} for command's `input` shape.
 * @see {@link ExportCertificateCommandOutput} for command's `response` shape.
 * @see {@link ACMClientResolvedConfig | config} for ACMClient's `config` shape.
 *
 * @throws {@link InvalidArnException} (client fault)
 *  <p>The requested Amazon Resource Name (ARN) does not refer to an existing resource.</p>
 *
 * @throws {@link RequestInProgressException} (client fault)
 *  <p>The certificate request is in process and the certificate in your account has not yet been
 *       issued.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified certificate cannot be found in the caller's account or the caller's account
 *       cannot be found.</p>
 *
 * @throws {@link ACMServiceException}
 * <p>Base exception class for all service exceptions from ACM service.</p>
 *
 */
export class ExportCertificateCommand extends $Command<
  ExportCertificateCommandInput,
  ExportCertificateCommandOutput,
  ACMClientResolvedConfig
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
  constructor(readonly input: ExportCertificateCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ACMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ExportCertificateCommandInput, ExportCertificateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ExportCertificateCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ACMClient";
    const commandName = "ExportCertificateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ExportCertificateRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ExportCertificateResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "CertificateManager",
        operation: "ExportCertificate",
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
  private serialize(input: ExportCertificateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ExportCertificateCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ExportCertificateCommandOutput> {
    return de_ExportCertificateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
