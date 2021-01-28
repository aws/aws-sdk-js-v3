import {
  ElasticLoadBalancingClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticLoadBalancingClient";
import {
  SetLoadBalancerListenerSSLCertificateInput,
  SetLoadBalancerListenerSSLCertificateOutput,
} from "../models/models_0";
import {
  deserializeAws_querySetLoadBalancerListenerSSLCertificateCommand,
  serializeAws_querySetLoadBalancerListenerSSLCertificateCommand,
} from "../protocols/Aws_query";
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

export type SetLoadBalancerListenerSSLCertificateCommandInput = SetLoadBalancerListenerSSLCertificateInput;
export type SetLoadBalancerListenerSSLCertificateCommandOutput = SetLoadBalancerListenerSSLCertificateOutput &
  __MetadataBearer;

/**
 * <p>Sets the certificate that terminates the specified listener's SSL connections. The specified certificate replaces any prior certificate that was used on the same load balancer and port.</p>
 *
 *         <p>For more information about updating your SSL certificate, see
 *             <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-update-ssl-cert.html">Replace the SSL Certificate for Your Load Balancer</a>
 *                 in the <i>Classic Load Balancers Guide</i>.</p>
 */
export class SetLoadBalancerListenerSSLCertificateCommand extends $Command<
  SetLoadBalancerListenerSSLCertificateCommandInput,
  SetLoadBalancerListenerSSLCertificateCommandOutput,
  ElasticLoadBalancingClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: SetLoadBalancerListenerSSLCertificateCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElasticLoadBalancingClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SetLoadBalancerListenerSSLCertificateCommandInput, SetLoadBalancerListenerSSLCertificateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticLoadBalancingClient";
    const commandName = "SetLoadBalancerListenerSSLCertificateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SetLoadBalancerListenerSSLCertificateInput.filterSensitiveLog,
      outputFilterSensitiveLog: SetLoadBalancerListenerSSLCertificateOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: SetLoadBalancerListenerSSLCertificateCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_querySetLoadBalancerListenerSSLCertificateCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<SetLoadBalancerListenerSSLCertificateCommandOutput> {
    return deserializeAws_querySetLoadBalancerListenerSSLCertificateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
