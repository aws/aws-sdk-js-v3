// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateNetworkAclEntryRequest } from "../models/models_2";
import { de_CreateNetworkAclEntryCommand, se_CreateNetworkAclEntryCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateNetworkAclEntryCommand}.
 */
export interface CreateNetworkAclEntryCommandInput extends CreateNetworkAclEntryRequest {}
/**
 * @public
 *
 * The output of {@link CreateNetworkAclEntryCommand}.
 */
export interface CreateNetworkAclEntryCommandOutput extends __MetadataBearer {}

/**
 * <p>Creates an entry (a rule) in a network ACL with the specified rule number. Each network ACL has a set of numbered ingress rules
 * 		        and a separate set of numbered egress rules. When determining whether a packet should be allowed in or out of a subnet associated
 * 		        with the ACL, we process the entries in the ACL according to the rule numbers, in ascending order. Each network ACL has a set of
 * 		        ingress rules and a separate set of egress rules.</p>
 *          <p>We recommend that you leave room between the rule numbers (for example, 100, 110, 120, ...), and not number them one right after the
 * 		        other (for example, 101, 102, 103, ...). This makes it easier to add a rule between existing ones without having to renumber the rules.</p>
 *          <p>After you add an entry, you can't modify it; you must either replace it, or create an entry and delete the old one.</p>
 *          <p>For more information about network ACLs, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-network-acls.html">Network ACLs</a>
 *            in the <i>Amazon VPC User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateNetworkAclEntryCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateNetworkAclEntryCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // CreateNetworkAclEntryRequest
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
 * const command = new CreateNetworkAclEntryCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CreateNetworkAclEntryCommandInput - {@link CreateNetworkAclEntryCommandInput}
 * @returns {@link CreateNetworkAclEntryCommandOutput}
 * @see {@link CreateNetworkAclEntryCommandInput} for command's `input` shape.
 * @see {@link CreateNetworkAclEntryCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @example To create a network ACL entry
 * ```javascript
 * // This example creates an entry for the specified network ACL. The rule allows ingress traffic from anywhere (0.0.0.0/0) on UDP port 53 (DNS) into any associated subnet.
 * const input = {
 *   CidrBlock: "0.0.0.0/0",
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
 * const command = new CreateNetworkAclEntryCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class CreateNetworkAclEntryCommand extends $Command
  .classBuilder<
    CreateNetworkAclEntryCommandInput,
    CreateNetworkAclEntryCommandOutput,
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
  .s("AmazonEC2", "CreateNetworkAclEntry", {})
  .n("EC2Client", "CreateNetworkAclEntryCommand")
  .f(void 0, void 0)
  .ser(se_CreateNetworkAclEntryCommand)
  .de(de_CreateNetworkAclEntryCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateNetworkAclEntryRequest;
      output: {};
    };
    sdk: {
      input: CreateNetworkAclEntryCommandInput;
      output: CreateNetworkAclEntryCommandOutput;
    };
  };
}
