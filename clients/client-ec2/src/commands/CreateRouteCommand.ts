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
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CreateRouteRequest, CreateRouteResult } from "../models/models_2";
import { de_CreateRouteCommand, se_CreateRouteCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateRouteCommand}.
 */
export interface CreateRouteCommandInput extends CreateRouteRequest {}
/**
 * @public
 *
 * The output of {@link CreateRouteCommand}.
 */
export interface CreateRouteCommandOutput extends CreateRouteResult, __MetadataBearer {}

/**
 * @public
 * <p>Creates a route in a route table within a VPC.</p>
 *          <p>You must specify either a destination CIDR block or a prefix list ID. You must also specify
 *          exactly one of the resources from the parameter list.</p>
 *          <p>When determining how to route traffic, we use the route with the most specific match.
 *             For example, traffic is destined for the IPv4 address <code>192.0.2.3</code>, and the
 *             route table includes the following two IPv4 routes:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>192.0.2.0/24</code> (goes to some target A)</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>192.0.2.0/28</code> (goes to some target B)</p>
 *             </li>
 *          </ul>
 *          <p>Both routes apply to the traffic destined for <code>192.0.2.3</code>. However, the second route
 * 				in the list covers a smaller number of IP addresses and is therefore more specific,
 * 				so we use that route to determine where to target the traffic.</p>
 *          <p>For more information about route tables, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Route_Tables.html">Route tables</a> in the
 *          <i>Amazon VPC User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateRouteCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateRouteCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // CreateRouteRequest
 *   DestinationCidrBlock: "STRING_VALUE",
 *   DestinationIpv6CidrBlock: "STRING_VALUE",
 *   DestinationPrefixListId: "STRING_VALUE",
 *   DryRun: true || false,
 *   VpcEndpointId: "STRING_VALUE",
 *   EgressOnlyInternetGatewayId: "STRING_VALUE",
 *   GatewayId: "STRING_VALUE",
 *   InstanceId: "STRING_VALUE",
 *   NatGatewayId: "STRING_VALUE",
 *   TransitGatewayId: "STRING_VALUE",
 *   LocalGatewayId: "STRING_VALUE",
 *   CarrierGatewayId: "STRING_VALUE",
 *   NetworkInterfaceId: "STRING_VALUE",
 *   RouteTableId: "STRING_VALUE", // required
 *   VpcPeeringConnectionId: "STRING_VALUE",
 *   CoreNetworkArn: "STRING_VALUE",
 * };
 * const command = new CreateRouteCommand(input);
 * const response = await client.send(command);
 * // { // CreateRouteResult
 * //   Return: true || false,
 * // };
 *
 * ```
 *
 * @param CreateRouteCommandInput - {@link CreateRouteCommandInput}
 * @returns {@link CreateRouteCommandOutput}
 * @see {@link CreateRouteCommandInput} for command's `input` shape.
 * @see {@link CreateRouteCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @example To create a route
 * ```javascript
 * // This example creates a route for the specified route table. The route matches all traffic (0.0.0.0/0) and routes it to the specified Internet gateway.
 * const input = {
 *   "DestinationCidrBlock": "0.0.0.0/0",
 *   "GatewayId": "igw-c0a643a9",
 *   "RouteTableId": "rtb-22574640"
 * };
 * const command = new CreateRouteCommand(input);
 * await client.send(command);
 * // example id: ec2-create-route-1
 * ```
 *
 */
export class CreateRouteCommand extends $Command<
  CreateRouteCommandInput,
  CreateRouteCommandOutput,
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
  constructor(readonly input: CreateRouteCommandInput) {
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
  ): Handler<CreateRouteCommandInput, CreateRouteCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateRouteCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "CreateRouteCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "CreateRoute",
      },
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
  private serialize(input: CreateRouteCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateRouteCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateRouteCommandOutput> {
    return de_CreateRouteCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
