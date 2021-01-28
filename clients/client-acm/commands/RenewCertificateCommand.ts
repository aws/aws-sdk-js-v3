import { ACMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ACMClient";
import { RenewCertificateRequest } from "../models/models_0";
import {
  deserializeAws_json1_1RenewCertificateCommand,
  serializeAws_json1_1RenewCertificateCommand,
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

export type RenewCertificateCommandInput = RenewCertificateRequest;
export type RenewCertificateCommandOutput = __MetadataBearer;

/**
 * <p>Renews an eligable ACM certificate. At this time, only exported private certificates can
 *       be renewed with this operation. In order to renew your ACM PCA certificates with ACM, you must
 *       first <a href="https://docs.aws.amazon.com/acm-pca/latest/userguide/PcaPermissions.html">grant the ACM
 *         service principal permission to do so</a>. For more information, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/manual-renewal.html">Testing Managed Renewal</a>
 *       in the ACM User Guide.</p>
 */
export class RenewCertificateCommand extends $Command<
  RenewCertificateCommandInput,
  RenewCertificateCommandOutput,
  ACMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RenewCertificateCommandInput) {
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
  ): Handler<RenewCertificateCommandInput, RenewCertificateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ACMClient";
    const commandName = "RenewCertificateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RenewCertificateRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RenewCertificateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1RenewCertificateCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RenewCertificateCommandOutput> {
    return deserializeAws_json1_1RenewCertificateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
