import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { CreateLoadBalancerTlsCertificateRequest, CreateLoadBalancerTlsCertificateResult } from "../models/models_0";
import {
  deserializeAws_json1_1CreateLoadBalancerTlsCertificateCommand,
  serializeAws_json1_1CreateLoadBalancerTlsCertificateCommand,
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

export type CreateLoadBalancerTlsCertificateCommandInput = CreateLoadBalancerTlsCertificateRequest;
export type CreateLoadBalancerTlsCertificateCommandOutput = CreateLoadBalancerTlsCertificateResult & __MetadataBearer;

/**
 * <p>Creates a Lightsail load balancer TLS certificate.</p>
 *          <p>TLS is just an updated, more secure version of Secure Socket Layer (SSL).</p>
 *          <p>The <code>CreateLoadBalancerTlsCertificate</code> operation supports tag-based access
 *       control via resource tags applied to the resource identified by <code>load balancer
 *         name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
 */
export class CreateLoadBalancerTlsCertificateCommand extends $Command<
  CreateLoadBalancerTlsCertificateCommandInput,
  CreateLoadBalancerTlsCertificateCommandOutput,
  LightsailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateLoadBalancerTlsCertificateCommandInput) {
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
  ): Handler<CreateLoadBalancerTlsCertificateCommandInput, CreateLoadBalancerTlsCertificateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "CreateLoadBalancerTlsCertificateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateLoadBalancerTlsCertificateRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateLoadBalancerTlsCertificateResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: CreateLoadBalancerTlsCertificateCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateLoadBalancerTlsCertificateCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateLoadBalancerTlsCertificateCommandOutput> {
    return deserializeAws_json1_1CreateLoadBalancerTlsCertificateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
