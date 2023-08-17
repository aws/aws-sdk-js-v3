// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ReplaceRouteRequest } from "../models/models_6";
import { de_ReplaceRouteCommand, se_ReplaceRouteCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ReplaceRouteCommand}.
 */
export interface ReplaceRouteCommandInput extends ReplaceRouteRequest {}
/**
 * @public
 *
 * The output of {@link ReplaceRouteCommand}.
 */
export interface ReplaceRouteCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Replaces an existing route within a route table in a VPC.</p>
 *          <p>You must specify either a destination CIDR block or a prefix list ID. You must also specify
 *            exactly one of the resources from the parameter list, or reset the local route to its default
 *            target.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Route_Tables.html">Route tables</a> in the
 *                 <i>Amazon VPC User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ReplaceRouteCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ReplaceRouteCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // ReplaceRouteRequest
 *   DestinationCidrBlock: "STRING_VALUE",
 *   DestinationIpv6CidrBlock: "STRING_VALUE",
 *   DestinationPrefixListId: "STRING_VALUE",
 *   DryRun: true || false,
 *   VpcEndpointId: "STRING_VALUE",
 *   EgressOnlyInternetGatewayId: "STRING_VALUE",
 *   GatewayId: "STRING_VALUE",
 *   InstanceId: "STRING_VALUE",
 *   LocalTarget: true || false,
 *   NatGatewayId: "STRING_VALUE",
 *   TransitGatewayId: "STRING_VALUE",
 *   LocalGatewayId: "STRING_VALUE",
 *   CarrierGatewayId: "STRING_VALUE",
 *   NetworkInterfaceId: "STRING_VALUE",
 *   RouteTableId: "STRING_VALUE", // required
 *   VpcPeeringConnectionId: "STRING_VALUE",
 *   CoreNetworkArn: "STRING_VALUE",
 * };
 * const command = new ReplaceRouteCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param ReplaceRouteCommandInput - {@link ReplaceRouteCommandInput}
 * @returns {@link ReplaceRouteCommandOutput}
 * @see {@link ReplaceRouteCommandInput} for command's `input` shape.
 * @see {@link ReplaceRouteCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @example To replace a route
 * ```javascript
 * // This example replaces the specified route in the specified table table. The new route matches the specified CIDR and sends the traffic to the specified virtual private gateway.
 * const input = {
 *   "DestinationCidrBlock": "10.0.0.0/16",
 *   "GatewayId": "vgw-9a4cacf3",
 *   "RouteTableId": "rtb-22574640"
 * };
 * const command = new ReplaceRouteCommand(input);
 * await client.send(command);
 * // example id: ec2-replace-route-1
 * ```
 *
 */
export class ReplaceRouteCommand extends $Command<
  ReplaceRouteCommandInput,
  ReplaceRouteCommandOutput,
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

  /**
   * @public
   */
  constructor(readonly input: ReplaceRouteCommandInput) {
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
  ): Handler<ReplaceRouteCommandInput, ReplaceRouteCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ReplaceRouteCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ReplaceRouteCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: ReplaceRouteCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ReplaceRouteCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ReplaceRouteCommandOutput> {
    return de_ReplaceRouteCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
