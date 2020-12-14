import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import {
  RegisterTransitGatewayMulticastGroupMembersRequest,
  RegisterTransitGatewayMulticastGroupMembersResult,
} from "../models/models_4";
import {
  deserializeAws_ec2RegisterTransitGatewayMulticastGroupMembersCommand,
  serializeAws_ec2RegisterTransitGatewayMulticastGroupMembersCommand,
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

export type RegisterTransitGatewayMulticastGroupMembersCommandInput = RegisterTransitGatewayMulticastGroupMembersRequest;
export type RegisterTransitGatewayMulticastGroupMembersCommandOutput = RegisterTransitGatewayMulticastGroupMembersResult &
  __MetadataBearer;

/**
 * <p>Registers members (network interfaces) with the  transit gateway multicast group. A member is a network interface associated
 *             with a supported EC2 instance that receives multicast traffic. For information about
 *             supported instances, see <a href="https://docs.aws.amazon.com/vpc/latest/tgw/transit-gateway-limits.html#multicast-limits">Multicast
 *                 Consideration</a> in <i>Amazon VPC Transit Gateways</i>.</p>
 *         <p>After you add the members, use <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_SearchTransitGatewayMulticastGroups.html">SearchTransitGatewayMulticastGroups</a> to verify that the members were added
 *             to the  transit gateway multicast group.</p>
 */
export class RegisterTransitGatewayMulticastGroupMembersCommand extends $Command<
  RegisterTransitGatewayMulticastGroupMembersCommandInput,
  RegisterTransitGatewayMulticastGroupMembersCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RegisterTransitGatewayMulticastGroupMembersCommandInput) {
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
    RegisterTransitGatewayMulticastGroupMembersCommandInput,
    RegisterTransitGatewayMulticastGroupMembersCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "RegisterTransitGatewayMulticastGroupMembersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RegisterTransitGatewayMulticastGroupMembersRequest.filterSensitiveLog,
      outputFilterSensitiveLog: RegisterTransitGatewayMulticastGroupMembersResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: RegisterTransitGatewayMulticastGroupMembersCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2RegisterTransitGatewayMulticastGroupMembersCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RegisterTransitGatewayMulticastGroupMembersCommandOutput> {
    return deserializeAws_ec2RegisterTransitGatewayMulticastGroupMembersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
