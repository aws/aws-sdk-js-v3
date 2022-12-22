// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import {
  ModifyVpnConnectionRequest,
  ModifyVpnConnectionRequestFilterSensitiveLog,
  ModifyVpnConnectionResult,
  ModifyVpnConnectionResultFilterSensitiveLog,
} from "../models/models_6";
import {
  deserializeAws_ec2ModifyVpnConnectionCommand,
  serializeAws_ec2ModifyVpnConnectionCommand,
} from "../protocols/Aws_ec2";

export interface ModifyVpnConnectionCommandInput extends ModifyVpnConnectionRequest {}
export interface ModifyVpnConnectionCommandOutput extends ModifyVpnConnectionResult, __MetadataBearer {}

/**
 * <p>Modifies the customer gateway or the target gateway of an Amazon Web Services Site-to-Site VPN connection. To
 *             modify the target gateway, the following migration options are available:</p>
 *          <ul>
 *             <li>
 *                <p>An existing virtual private gateway to a new virtual private gateway</p>
 *             </li>
 *             <li>
 *                <p>An existing virtual private gateway to a transit gateway</p>
 *             </li>
 *             <li>
 *                <p>An existing transit gateway to a new transit gateway</p>
 *             </li>
 *             <li>
 *                <p>An existing transit gateway to a virtual private gateway</p>
 *             </li>
 *          </ul>
 *          <p>Before you perform the migration to the new gateway, you must configure the new
 *             gateway. Use <a>CreateVpnGateway</a> to create a virtual private gateway, or
 *                 <a>CreateTransitGateway</a> to create a transit gateway.</p>
 *          <p>This step is required when you migrate from a virtual private gateway with static
 *             routes to a transit gateway. </p>
 *          <p>You must delete the static routes before you migrate to the new gateway.</p>
 *          <p>Keep a copy of the static route before you delete it. You will need to add back these
 *             routes to the transit gateway after the VPN connection migration is complete.</p>
 *          <p>After you migrate to the new gateway, you might need to modify your VPC route table.
 *             Use <a>CreateRoute</a> and <a>DeleteRoute</a> to make the changes
 *             described in <a href="https://docs.aws.amazon.com/vpn/latest/s2svpn/modify-vpn-target.html#step-update-routing">Update VPC route
 *                 tables</a> in the <i>Amazon Web Services Site-to-Site VPN User Guide</i>.</p>
 *          <p>When the new gateway is a transit gateway, modify the transit gateway route table to
 *             allow traffic between the VPC and the Amazon Web Services Site-to-Site VPN connection.
 *             Use <a>CreateTransitGatewayRoute</a> to add the routes.</p>
 *          <p> If you deleted VPN static routes, you must add the static routes to the transit
 *             gateway route table.</p>
 *          <p>After you perform this operation, the VPN endpoint's IP addresses on the Amazon Web Services side and the tunnel options remain intact. Your Amazon Web Services Site-to-Site VPN connection will
 *             be temporarily unavailable for a brief period while we provision the new
 *             endpoints.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyVpnConnectionCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyVpnConnectionCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ModifyVpnConnectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyVpnConnectionCommandInput} for command's `input` shape.
 * @see {@link ModifyVpnConnectionCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class ModifyVpnConnectionCommand extends $Command<
  ModifyVpnConnectionCommandInput,
  ModifyVpnConnectionCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ModifyVpnConnectionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ModifyVpnConnectionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ModifyVpnConnectionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ModifyVpnConnectionResultFilterSensitiveLog,
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
