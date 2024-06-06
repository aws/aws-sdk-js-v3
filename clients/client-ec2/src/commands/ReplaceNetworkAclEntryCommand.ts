// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ReplaceNetworkAclEntryRequest } from "../models/models_7";
import { de_ReplaceNetworkAclEntryCommand, se_ReplaceNetworkAclEntryCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ReplaceNetworkAclEntryCommand}.
 */
export interface ReplaceNetworkAclEntryCommandInput extends ReplaceNetworkAclEntryRequest {}
/**
 * @public
 *
 * The output of {@link ReplaceNetworkAclEntryCommand}.
 */
export interface ReplaceNetworkAclEntryCommandOutput extends __MetadataBearer {}

/**
 * <p>Replaces an entry (rule) in a network ACL. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-network-acls.html">Network ACLs</a> in the
 * 				<i>Amazon VPC User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ReplaceNetworkAclEntryCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ReplaceNetworkAclEntryCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // ReplaceNetworkAclEntryRequest
 *   CidrBlock: "STRING_VALUE",
 *   DryRun: true || false,
 *   Egress: true || false, // required
 *   IcmpTypeCode: { // IcmpTypeCode
 *     Code: Number("int"),
 *     Type: Number("int"),
 *   },
 *   Ipv6CidrBlock: "STRING_VALUE",
 *   NetworkAclId: "STRING_VALUE", // required
 *   PortRange: { // PortRange
 *     From: Number("int"),
 *     To: Number("int"),
 *   },
 *   Protocol: "STRING_VALUE", // required
 *   RuleAction: "allow" || "deny", // required
 *   RuleNumber: Number("int"), // required
 * };
 * const command = new ReplaceNetworkAclEntryCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param ReplaceNetworkAclEntryCommandInput - {@link ReplaceNetworkAclEntryCommandInput}
 * @returns {@link ReplaceNetworkAclEntryCommandOutput}
 * @see {@link ReplaceNetworkAclEntryCommandInput} for command's `input` shape.
 * @see {@link ReplaceNetworkAclEntryCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 * @example To replace a network ACL entry
 * ```javascript
 * // This example replaces an entry for the specified network ACL. The new rule 100 allows ingress traffic from 203.0.113.12/24 on UDP port 53 (DNS) into any associated subnet.
 * const input = {
 *   "CidrBlock": "203.0.113.12/24",
 *   "Egress": false,
 *   "NetworkAclId": "acl-5fb85d36",
 *   "PortRange": {
 *     "From": 53,
 *     "To": 53
 *   },
 *   "Protocol": "17",
 *   "RuleAction": "allow",
 *   "RuleNumber": 100
 * };
 * const command = new ReplaceNetworkAclEntryCommand(input);
 * await client.send(command);
 * // example id: ec2-replace-network-acl-entry-1
 * ```
 *
 */
export class ReplaceNetworkAclEntryCommand extends $Command
  .classBuilder<
    ReplaceNetworkAclEntryCommandInput,
    ReplaceNetworkAclEntryCommandOutput,
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
  .s("AmazonEC2", "ReplaceNetworkAclEntry", {})
  .n("EC2Client", "ReplaceNetworkAclEntryCommand")
  .f(void 0, void 0)
  .ser(se_ReplaceNetworkAclEntryCommand)
  .de(de_ReplaceNetworkAclEntryCommand)
  .build() {}
