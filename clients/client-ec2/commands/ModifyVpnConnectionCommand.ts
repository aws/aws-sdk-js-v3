import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ModifyVpnConnectionRequest, ModifyVpnConnectionResult } from "../models/models_4";
import {
  deserializeAws_ec2ModifyVpnConnectionCommand,
  serializeAws_ec2ModifyVpnConnectionCommand,
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

export type ModifyVpnConnectionCommandInput = ModifyVpnConnectionRequest;
export type ModifyVpnConnectionCommandOutput = ModifyVpnConnectionResult & __MetadataBearer;

/**
 * <p>Modifies the customer gateway or the target gateway of an AWS Site-to-Site VPN connection. To modify the target gateway, the following migration
 *             options are available:</p>
 *         <ul>
 *             <li>
 *                 <p>An existing virtual private gateway to a new virtual private gateway</p>
 *             </li>
 *             <li>
 *                 <p>An existing virtual private gateway to a transit gateway</p>
 *             </li>
 *             <li>
 *                 <p>An existing transit gateway to a new transit gateway</p>
 *             </li>
 *             <li>
 *                 <p>An existing transit gateway to a virtual private gateway</p>
 *             </li>
 *          </ul>
 *         <p>Before you perform the migration to the new gateway, you must configure the new gateway. Use <a>CreateVpnGateway</a> to create a virtual private gateway, or <a>CreateTransitGateway</a> to create a transit gateway.</p>
 *         <p>This step is required when you migrate from a virtual private gateway with static routes to
 *             a transit gateway. </p>
 *         <p>You must delete the static routes before you migrate to the new gateway.</p>
 *
 *         <p>Keep a copy of the static route before you delete it. You will need to add back these
 *             routes to the transit gateway after the VPN connection migration is complete.</p>
 *
 *         <p>After you migrate to the new gateway, you might need to modify your VPC route table. Use <a>CreateRoute</a> and <a>DeleteRoute</a> to make the changes described in <a href="https://docs.aws.amazon.com/vpn/latest/s2svpn/modify-vpn-target.html#step-update-routing">VPN Gateway Target Modification Required VPC Route Table Updates</a> in the <i>AWS Site-to-Site VPN User Guide</i>.</p>
 *         <p>
 *             When the new gateway is a transit gateway, modify the transit gateway route table to allow traffic between the VPC and the  AWS Site-to-Site VPN connection. Use <a>CreateTransitGatewayRoute</a> to add the routes.</p>
 *
 *         <p> If you deleted VPN static routes, you must add the static routes to the transit gateway
 *             route table.</p>
 *         <p>After you perform this operation, the AWS VPN endpoint's IP addresses on the AWS side and
 *             the tunnel options remain intact. Your AWS Site-to-Site VPN connection will be temporarily unavailable
 *             for a brief period while we provision the new endpoints.</p>
 */
export class ModifyVpnConnectionCommand extends $Command<
  ModifyVpnConnectionCommandInput,
  ModifyVpnConnectionCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ModifyVpnConnectionCommandInput) {
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
  ): Handler<ModifyVpnConnectionCommandInput, ModifyVpnConnectionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ModifyVpnConnectionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ModifyVpnConnectionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ModifyVpnConnectionResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ModifyVpnConnectionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2ModifyVpnConnectionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ModifyVpnConnectionCommandOutput> {
    return deserializeAws_ec2ModifyVpnConnectionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
