// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ReplaceNetworkAclEntryRequest } from "../models/models_8";
import { ReplaceNetworkAclEntry } from "../schemas/schemas_97_Network";

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
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // ReplaceNetworkAclEntryRequest
 *   DryRun: true || false,
 *   NetworkAclId: "STRING_VALUE", // required
 *   RuleNumber: Number("int"), // required
 *   Protocol: "STRING_VALUE", // required
 *   RuleAction: "allow" || "deny", // required
 *   Egress: true || false, // required
 *   CidrBlock: "STRING_VALUE",
 *   Ipv6CidrBlock: "STRING_VALUE",
 *   IcmpTypeCode: { // IcmpTypeCode
 *     Code: Number("int"),
 *     Type: Number("int"),
 *   },
 *   PortRange: { // PortRange
 *     From: Number("int"),
 *     To: Number("int"),
 *   },
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
 *
 * @example To replace a network ACL entry
 * ```javascript
 * // This example replaces an entry for the specified network ACL. The new rule 100 allows ingress traffic from 203.0.113.12/24 on UDP port 53 (DNS) into any associated subnet.
 * const input = {
 *   CidrBlock: "203.0.113.12/24",
 *   Egress: false,
 *   NetworkAclId: "acl-5fb85d36",
 *   PortRange: {
 *     From: 53,
 *     To: 53
 *   },
 *   Protocol: "17",
 *   RuleAction: "allow",
 *   RuleNumber: 100
 * };
 * const command = new ReplaceNetworkAclEntryCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class ReplaceNetworkAclEntryCommand extends $Command
  .classBuilder<
    ReplaceNetworkAclEntryCommandInput,
    ReplaceNetworkAclEntryCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "ReplaceNetworkAclEntry", {})
  .n("EC2Client", "ReplaceNetworkAclEntryCommand")
  .sc(ReplaceNetworkAclEntry)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ReplaceNetworkAclEntryRequest;
      output: {};
    };
    sdk: {
      input: ReplaceNetworkAclEntryCommandInput;
      output: ReplaceNetworkAclEntryCommandOutput;
    };
  };
}
