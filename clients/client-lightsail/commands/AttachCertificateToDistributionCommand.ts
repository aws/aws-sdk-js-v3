import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { AttachCertificateToDistributionRequest, AttachCertificateToDistributionResult } from "../models/models_0";
import {
  deserializeAws_json1_1AttachCertificateToDistributionCommand,
  serializeAws_json1_1AttachCertificateToDistributionCommand,
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

export type AttachCertificateToDistributionCommandInput = AttachCertificateToDistributionRequest;
export type AttachCertificateToDistributionCommandOutput = AttachCertificateToDistributionResult & __MetadataBearer;

/**
 * <p>Attaches an SSL/TLS certificate to your Amazon Lightsail content delivery network (CDN)
 *       distribution.</p>
 *          <p>After the certificate is attached, your distribution accepts HTTPS traffic for all of the
 *       domains that are associated with the certificate.</p>
 *          <p>Use the <code>CreateCertificate</code> action to create a certificate that you can attach
 *       to your distribution.</p>
 *          <important>
 *             <p>Only certificates created in the <code>us-east-1</code> AWS Region can be attached to
 *         Lightsail distributions. Lightsail distributions are global resources that can reference
 *         an origin in any AWS Region, and distribute its content globally. However, all
 *         distributions are located in the <code>us-east-1</code> Region.</p>
 *          </important>
 */
export class AttachCertificateToDistributionCommand extends $Command<
  AttachCertificateToDistributionCommandInput,
  AttachCertificateToDistributionCommandOutput,
  LightsailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AttachCertificateToDistributionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LightsailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AttachCertificateToDistributionCommandInput, AttachCertificateToDistributionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "AttachCertificateToDistributionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AttachCertificateToDistributionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AttachCertificateToDistributionResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: AttachCertificateToDistributionCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1AttachCertificateToDistributionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AttachCertificateToDistributionCommandOutput> {
    return deserializeAws_json1_1AttachCertificateToDistributionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
