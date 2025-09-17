// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { AssociateRouteTableRequest, AssociateRouteTableResult } from "../models/models_0";
import { de_AssociateRouteTableCommand, se_AssociateRouteTableCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AssociateRouteTableCommand}.
 */
export interface AssociateRouteTableCommandInput extends AssociateRouteTableRequest {}
/**
 * @public
 *
 * The output of {@link AssociateRouteTableCommand}.
 */
export interface AssociateRouteTableCommandOutput extends AssociateRouteTableResult, __MetadataBearer {}

/**
 * <p>Associates a subnet in your VPC or an internet gateway or virtual private gateway
 *             attached to your VPC with a route table in your VPC. This association causes traffic
 *             from the subnet or gateway to be routed according to the routes in the route table. The
 *             action returns an association ID, which you need in order to disassociate the route
 *             table later. A route table can be associated with multiple subnets.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Route_Tables.html">Route tables</a> in the
 *                 <i>Amazon VPC User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, AssociateRouteTableCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, AssociateRouteTableCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // AssociateRouteTableRequest
 *   GatewayId: "STRING_VALUE",
 *   PublicIpv4Pool: "STRING_VALUE",
 *   DryRun: true || false,
 *   SubnetId: "STRING_VALUE",
 *   RouteTableId: "STRING_VALUE", // required
 * };
 * const command = new AssociateRouteTableCommand(input);
 * const response = await client.send(command);
 * // { // AssociateRouteTableResult
 * //   AssociationId: "STRING_VALUE",
 * //   AssociationState: { // RouteTableAssociationState
 * //     State: "associating" || "associated" || "disassociating" || "disassociated" || "failed",
 * //     StatusMessage: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param AssociateRouteTableCommandInput - {@link AssociateRouteTableCommandInput}
 * @returns {@link AssociateRouteTableCommandOutput}
 * @see {@link AssociateRouteTableCommandInput} for command's `input` shape.
 * @see {@link AssociateRouteTableCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @example To associate a route table with a subnet
 * ```javascript
 * // This example associates the specified route table with the specified subnet.
 * const input = {
 *   RouteTableId: "rtb-22574640",
 *   SubnetId: "subnet-9d4a7b6"
 * };
 * const command = new AssociateRouteTableCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   AssociationId: "rtbassoc-781d0d1a"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class AssociateRouteTableCommand extends $Command
  .classBuilder<
    AssociateRouteTableCommandInput,
    AssociateRouteTableCommandOutput,
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
  .s("AmazonEC2", "AssociateRouteTable", {})
  .n("EC2Client", "AssociateRouteTableCommand")
  .f(void 0, void 0)
  .ser(se_AssociateRouteTableCommand)
  .de(de_AssociateRouteTableCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateRouteTableRequest;
      output: AssociateRouteTableResult;
    };
    sdk: {
      input: AssociateRouteTableCommandInput;
      output: AssociateRouteTableCommandOutput;
    };
  };
}
