import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import {
  RegisterTransitGatewayMulticastGroupSourcesRequest,
  RegisterTransitGatewayMulticastGroupSourcesResult,
} from "../models/models_4";
import {
  deserializeAws_ec2RegisterTransitGatewayMulticastGroupSourcesCommand,
  serializeAws_ec2RegisterTransitGatewayMulticastGroupSourcesCommand,
} from "../protocols/Aws_ec2";
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

export type RegisterTransitGatewayMulticastGroupSourcesCommandInput = RegisterTransitGatewayMulticastGroupSourcesRequest;
export type RegisterTransitGatewayMulticastGroupSourcesCommandOutput = RegisterTransitGatewayMulticastGroupSourcesResult &
  __MetadataBearer;

/**
 * <p>Registers sources (network interfaces) with the specified  transit gateway multicast group.</p>
 *         <p>A multicast source is a network interface attached to a supported instance that sends
 *             multicast traffic. For information about supported instances, see <a href="https://docs.aws.amazon.com/vpc/latest/tgw/transit-gateway-limits.html#multicast-limits">Multicast
 *                 Considerations</a> in <i>Amazon VPC Transit Gateways</i>.</p>
 *         <p>After you add the source, use <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_SearchTransitGatewayMulticastGroups.html">SearchTransitGatewayMulticastGroups</a> to verify that the source was added to the multicast
 *             group.</p>
 */
export class RegisterTransitGatewayMulticastGroupSourcesCommand extends $Command<
  RegisterTransitGatewayMulticastGroupSourcesCommandInput,
  RegisterTransitGatewayMulticastGroupSourcesCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RegisterTransitGatewayMulticastGroupSourcesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    RegisterTransitGatewayMulticastGroupSourcesCommandInput,
    RegisterTransitGatewayMulticastGroupSourcesCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "RegisterTransitGatewayMulticastGroupSourcesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RegisterTransitGatewayMulticastGroupSourcesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: RegisterTransitGatewayMulticastGroupSourcesResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: RegisterTransitGatewayMulticastGroupSourcesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2RegisterTransitGatewayMulticastGroupSourcesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RegisterTransitGatewayMulticastGroupSourcesCommandOutput> {
    return deserializeAws_ec2RegisterTransitGatewayMulticastGroupSourcesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
