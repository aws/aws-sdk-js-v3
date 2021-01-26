import {
  ElasticLoadBalancingV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticLoadBalancingV2Client";
import { AddListenerCertificatesInput, AddListenerCertificatesOutput } from "../models/models_0";
import {
  deserializeAws_queryAddListenerCertificatesCommand,
  serializeAws_queryAddListenerCertificatesCommand,
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

export type AddListenerCertificatesCommandInput = AddListenerCertificatesInput;
export type AddListenerCertificatesCommandOutput = AddListenerCertificatesOutput & __MetadataBearer;

/**
 * <p>Adds the specified SSL server certificate to the certificate list for the specified HTTPS or TLS listener.</p>
 *          <p>If the certificate in already in the certificate list, the call is successful but the certificate
 *       is not added again.</p>
 *
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/create-https-listener.html">HTTPS listeners</a> in the <i>Application Load Balancers Guide</i> or <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/create-tls-listener.html">TLS listeners</a> in the
 *       <i>Network Load Balancers Guide</i>.</p>
 */
export class AddListenerCertificatesCommand extends $Command<
  AddListenerCertificatesCommandInput,
  AddListenerCertificatesCommandOutput,
  ElasticLoadBalancingV2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AddListenerCertificatesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElasticLoadBalancingV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AddListenerCertificatesCommandInput, AddListenerCertificatesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticLoadBalancingV2Client";
    const commandName = "AddListenerCertificatesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AddListenerCertificatesInput.filterSensitiveLog,
      outputFilterSensitiveLog: AddListenerCertificatesOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AddListenerCertificatesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryAddListenerCertificatesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AddListenerCertificatesCommandOutput> {
    return deserializeAws_queryAddListenerCertificatesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
