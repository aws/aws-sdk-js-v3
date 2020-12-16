import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { AttachLoadBalancerTlsCertificateRequest, AttachLoadBalancerTlsCertificateResult } from "../models/models_0";
import {
  deserializeAws_json1_1AttachLoadBalancerTlsCertificateCommand,
  serializeAws_json1_1AttachLoadBalancerTlsCertificateCommand,
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

export type AttachLoadBalancerTlsCertificateCommandInput = AttachLoadBalancerTlsCertificateRequest;
export type AttachLoadBalancerTlsCertificateCommandOutput = AttachLoadBalancerTlsCertificateResult & __MetadataBearer;

/**
 * <p>Attaches a Transport Layer Security (TLS) certificate to your load balancer. TLS is just
 *       an updated, more secure version of Secure Socket Layer (SSL).</p>
 *          <p>Once you create and validate your certificate, you can attach it to your load balancer.
 *       You can also use this API to rotate the certificates on your account. Use the
 *         <code>AttachLoadBalancerTlsCertificate</code> action with the non-attached certificate, and
 *       it will replace the existing one and become the attached certificate.</p>
 *          <p>The <code>AttachLoadBalancerTlsCertificate</code> operation supports tag-based access
 *       control via resource tags applied to the resource identified by <code>load balancer
 *         name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
 */
export class AttachLoadBalancerTlsCertificateCommand extends $Command<
  AttachLoadBalancerTlsCertificateCommandInput,
  AttachLoadBalancerTlsCertificateCommandOutput,
  LightsailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AttachLoadBalancerTlsCertificateCommandInput) {
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
  ): Handler<AttachLoadBalancerTlsCertificateCommandInput, AttachLoadBalancerTlsCertificateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "AttachLoadBalancerTlsCertificateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AttachLoadBalancerTlsCertificateRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AttachLoadBalancerTlsCertificateResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: AttachLoadBalancerTlsCertificateCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1AttachLoadBalancerTlsCertificateCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AttachLoadBalancerTlsCertificateCommandOutput> {
    return deserializeAws_json1_1AttachLoadBalancerTlsCertificateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
