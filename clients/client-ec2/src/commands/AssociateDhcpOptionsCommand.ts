// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { AssociateDhcpOptionsRequest } from "../models/models_0";
import { de_AssociateDhcpOptionsCommand, se_AssociateDhcpOptionsCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AssociateDhcpOptionsCommand}.
 */
export interface AssociateDhcpOptionsCommandInput extends AssociateDhcpOptionsRequest {}
/**
 * @public
 *
 * The output of {@link AssociateDhcpOptionsCommand}.
 */
export interface AssociateDhcpOptionsCommandOutput extends __MetadataBearer {}

/**
 * <p>Associates a set of DHCP options (that you've previously created) with the specified VPC, or associates no DHCP options with the VPC.</p>
 *          <p>After you associate the options with the VPC, any existing instances and all new instances that you launch in that VPC use the options. You don't need to restart or relaunch the instances. They automatically pick up the changes within a few hours, depending on how frequently the instance renews its DHCP lease. You can explicitly renew the lease using the operating system on the instance.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_DHCP_Options.html">DHCP options sets</a>
 *           in the <i>Amazon VPC User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, AssociateDhcpOptionsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, AssociateDhcpOptionsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // AssociateDhcpOptionsRequest
 *   DhcpOptionsId: "STRING_VALUE", // required
 *   VpcId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new AssociateDhcpOptionsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AssociateDhcpOptionsCommandInput - {@link AssociateDhcpOptionsCommandInput}
 * @returns {@link AssociateDhcpOptionsCommandOutput}
 * @see {@link AssociateDhcpOptionsCommandInput} for command's `input` shape.
 * @see {@link AssociateDhcpOptionsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 * @example To associate a DHCP options set with a VPC
 * ```javascript
 * // This example associates the specified DHCP options set with the specified VPC.
 * const input = {
 *   "DhcpOptionsId": "dopt-d9070ebb",
 *   "VpcId": "vpc-a01106c2"
 * };
 * const command = new AssociateDhcpOptionsCommand(input);
 * await client.send(command);
 * // example id: ec2-associate-dhcp-options-1
 * ```
 *
 * @example To associate the default DHCP options set with a VPC
 * ```javascript
 * // This example associates the default DHCP options set with the specified VPC.
 * const input = {
 *   "DhcpOptionsId": "default",
 *   "VpcId": "vpc-a01106c2"
 * };
 * const command = new AssociateDhcpOptionsCommand(input);
 * await client.send(command);
 * // example id: ec2-associate-dhcp-options-2
 * ```
 *
 */
export class AssociateDhcpOptionsCommand extends $Command
  .classBuilder<
    AssociateDhcpOptionsCommandInput,
    AssociateDhcpOptionsCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonEC2", "AssociateDhcpOptions", {})
  .n("EC2Client", "AssociateDhcpOptionsCommand")
  .f(void 0, void 0)
  .ser(se_AssociateDhcpOptionsCommand)
  .de(de_AssociateDhcpOptionsCommand)
  .build() {}
