// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateRouteRequest, CreateRouteResult } from "../models/models_2";
import { de_CreateRouteCommand, se_CreateRouteCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // CreateRouteRequest
 *   DestinationPrefixListId: "STRING_VALUE",
 *   VpcEndpointId: "STRING_VALUE",
 *   TransitGatewayId: "STRING_VALUE",
 *   LocalGatewayId: "STRING_VALUE",
 *   CarrierGatewayId: "STRING_VALUE",
 *   CoreNetworkArn: "STRING_VALUE",
 *   OdbNetworkArn: "STRING_VALUE",
 *   DryRun: true || false,
 *   RouteTableId: "STRING_VALUE", // required
 *   DestinationCidrBlock: "STRING_VALUE",
 *   GatewayId: "STRING_VALUE",
 *   DestinationIpv6CidrBlock: "STRING_VALUE",
 *   EgressOnlyInternetGatewayId: "STRING_VALUE",
 *   InstanceId: "STRING_VALUE",
 *   NetworkInterfaceId: "STRING_VALUE",
 *   VpcPeeringConnectionId: "STRING_VALUE",
 *   NatGatewayId: "STRING_VALUE",
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
 *
 * @example To create a route
 * ```javascript
 * // This example creates a route for the specified route table. The route matches all traffic (0.0.0.0/0) and routes it to the specified Internet gateway.
 * const input = {
 *   DestinationCidrBlock: "0.0.0.0/0",
 *   GatewayId: "igw-c0a643a9",
 *   RouteTableId: "rtb-22574640"
 * };
 * const command = new CreateRouteCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class CreateRouteCommand extends $Command
  .classBuilder<
    CreateRouteCommandInput,
    CreateRouteCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonEC2", "CreateRoute", {})
  .n("EC2Client", "CreateRouteCommand")
  .f(void 0, void 0)
  .ser(se_CreateRouteCommand)
  .de(de_CreateRouteCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateRouteRequest;
      output: CreateRouteResult;
    };
    sdk: {
      input: CreateRouteCommandInput;
      output: CreateRouteCommandOutput;
    };
  };
}
