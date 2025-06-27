// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ReplaceRouteRequest } from "../models/models_8";
import { de_ReplaceRouteCommand, se_ReplaceRouteCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 *   DestinationPrefixListId: "STRING_VALUE",
 *   VpcEndpointId: "STRING_VALUE",
 *   LocalTarget: true || false,
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
 *
 * @example To replace a route
 * ```javascript
 * // This example replaces the specified route in the specified table table. The new route matches the specified CIDR and sends the traffic to the specified virtual private gateway.
 * const input = {
 *   DestinationCidrBlock: "10.0.0.0/16",
 *   GatewayId: "vgw-9a4cacf3",
 *   RouteTableId: "rtb-22574640"
 * };
 * const command = new ReplaceRouteCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class ReplaceRouteCommand extends $Command
  .classBuilder<
    ReplaceRouteCommandInput,
    ReplaceRouteCommandOutput,
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
  .s("AmazonEC2", "ReplaceRoute", {})
  .n("EC2Client", "ReplaceRouteCommand")
  .f(void 0, void 0)
  .ser(se_ReplaceRouteCommand)
  .de(de_ReplaceRouteCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ReplaceRouteRequest;
      output: {};
    };
    sdk: {
      input: ReplaceRouteCommandInput;
      output: ReplaceRouteCommandOutput;
    };
  };
}
