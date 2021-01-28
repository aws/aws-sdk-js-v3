import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { CreateCertificateRequest, CreateCertificateResult } from "../models/models_0";
import {
  deserializeAws_json1_1CreateCertificateCommand,
  serializeAws_json1_1CreateCertificateCommand,
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

export type CreateCertificateCommandInput = CreateCertificateRequest;
export type CreateCertificateCommandOutput = CreateCertificateResult & __MetadataBearer;

/**
 * <p>Creates an SSL/TLS certificate for a Amazon Lightsail content delivery network (CDN)
 *       distribution.</p>
 *          <p>After the certificate is created, use the <code>AttachCertificateToDistribution</code>
 *       action to attach the certificate to your distribution.</p>
 *          <important>
 *             <p>Only certificates created in the <code>us-east-1</code> AWS Region can be attached to
 *         Lightsail distributions. Lightsail distributions are global resources that can reference
 *         an origin in any AWS Region, and distribute its content globally. However, all
 *         distributions are located in the <code>us-east-1</code> Region.</p>
 *          </important>
 */
export class CreateCertificateCommand extends $Command<
  CreateCertificateCommandInput,
  CreateCertificateCommandOutput,
  LightsailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateCertificateCommandInput) {
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
  ): Handler<CreateCertificateCommandInput, CreateCertificateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "CreateCertificateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateCertificateRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateCertificateResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateCertificateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateCertificateCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateCertificateCommandOutput> {
    return deserializeAws_json1_1CreateCertificateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
