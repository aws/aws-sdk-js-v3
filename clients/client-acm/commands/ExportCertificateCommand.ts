import { ACMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ACMClient";
import { ExportCertificateRequest, ExportCertificateResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ExportCertificateCommand,
  serializeAws_json1_1ExportCertificateCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type ExportCertificateCommandInput = ExportCertificateRequest;
export type ExportCertificateCommandOutput = ExportCertificateResponse & __MetadataBearer;

/**
 * <p>Exports a private certificate issued by a private certificate authority (CA) for use
 *       anywhere. The exported file contains the certificate, the certificate chain, and the encrypted
 *       private 2048-bit RSA key associated with the public key that is embedded in the certificate.
 *       For security, you must assign a passphrase for the private key when exporting it. </p>
 *          <p>For information about exporting and formatting a certificate using the ACM console or
 *       CLI, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/gs-acm-export-private.html">Export a
 *         Private Certificate</a>.</p>
 */
export class ExportCertificateCommand extends $Command<
  ExportCertificateCommandInput,
  ExportCertificateCommandOutput,
  ACMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

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

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ACMClient";
    const commandName = "ExportCertificateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ExportCertificateRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ExportCertificateResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ExportCertificateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ExportCertificateCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ExportCertificateCommandOutput> {
    return deserializeAws_json1_1ExportCertificateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
