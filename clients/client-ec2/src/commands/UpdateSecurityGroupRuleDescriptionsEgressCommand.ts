// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  UpdateSecurityGroupRuleDescriptionsEgressRequest,
  UpdateSecurityGroupRuleDescriptionsEgressResult,
} from "../models/models_8";
import {
  de_UpdateSecurityGroupRuleDescriptionsEgressCommand,
  se_UpdateSecurityGroupRuleDescriptionsEgressCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateSecurityGroupRuleDescriptionsEgressCommand}.
 */
export interface UpdateSecurityGroupRuleDescriptionsEgressCommandInput
  extends UpdateSecurityGroupRuleDescriptionsEgressRequest {}
/**
 * @public
 *
 * The output of {@link UpdateSecurityGroupRuleDescriptionsEgressCommand}.
 */
export interface UpdateSecurityGroupRuleDescriptionsEgressCommandOutput
  extends UpdateSecurityGroupRuleDescriptionsEgressResult,
    __MetadataBearer {}

/**
 * <p>Updates the description of an egress (outbound) security group rule. You
 * 			can replace an existing description, or add a description to a rule that did not have one
 * 			previously. You can remove a description for a security group rule by omitting the
 * 			description parameter in the request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, UpdateSecurityGroupRuleDescriptionsEgressCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, UpdateSecurityGroupRuleDescriptionsEgressCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // UpdateSecurityGroupRuleDescriptionsEgressRequest
 *   DryRun: true || false,
 *   GroupId: "STRING_VALUE",
 *   GroupName: "STRING_VALUE",
 *   IpPermissions: [ // IpPermissionList
 *     { // IpPermission
 *       IpProtocol: "STRING_VALUE",
 *       FromPort: Number("int"),
 *       ToPort: Number("int"),
 *       UserIdGroupPairs: [ // UserIdGroupPairList
 *         { // UserIdGroupPair
 *           Description: "STRING_VALUE",
 *           UserId: "STRING_VALUE",
 *           GroupName: "STRING_VALUE",
 *           GroupId: "STRING_VALUE",
 *           VpcId: "STRING_VALUE",
 *           VpcPeeringConnectionId: "STRING_VALUE",
 *           PeeringStatus: "STRING_VALUE",
 *         },
 *       ],
 *       IpRanges: [ // IpRangeList
 *         { // IpRange
 *           Description: "STRING_VALUE",
 *           CidrIp: "STRING_VALUE",
 *         },
 *       ],
 *       Ipv6Ranges: [ // Ipv6RangeList
 *         { // Ipv6Range
 *           Description: "STRING_VALUE",
 *           CidrIpv6: "STRING_VALUE",
 *         },
 *       ],
 *       PrefixListIds: [ // PrefixListIdList
 *         { // PrefixListId
 *           Description: "STRING_VALUE",
 *           PrefixListId: "STRING_VALUE",
 *         },
 *       ],
 *     },
 *   ],
 *   SecurityGroupRuleDescriptions: [ // SecurityGroupRuleDescriptionList
 *     { // SecurityGroupRuleDescription
 *       SecurityGroupRuleId: "STRING_VALUE",
 *       Description: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new UpdateSecurityGroupRuleDescriptionsEgressCommand(input);
 * const response = await client.send(command);
 * // { // UpdateSecurityGroupRuleDescriptionsEgressResult
 * //   Return: true || false,
 * // };
 *
 * ```
 *
 * @param UpdateSecurityGroupRuleDescriptionsEgressCommandInput - {@link UpdateSecurityGroupRuleDescriptionsEgressCommandInput}
 * @returns {@link UpdateSecurityGroupRuleDescriptionsEgressCommandOutput}
 * @see {@link UpdateSecurityGroupRuleDescriptionsEgressCommandInput} for command's `input` shape.
 * @see {@link UpdateSecurityGroupRuleDescriptionsEgressCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @example To update an outbound security group rule description
 * ```javascript
 * // This example updates the description for the specified security group rule.
 * const input = {
 *   GroupId: "sg-123abc12",
 *   IpPermissions: [
 *     {
 *       FromPort: 80,
 *       IpProtocol: "tcp",
 *       IpRanges: [
 *         {
 *           CidrIp: "203.0.113.0/24",
 *           Description: "Outbound HTTP access to server 2"
 *         }
 *       ],
 *       ToPort: 80
 *     }
 *   ]
 * };
 * const command = new UpdateSecurityGroupRuleDescriptionsEgressCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* empty *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class UpdateSecurityGroupRuleDescriptionsEgressCommand extends $Command
  .classBuilder<
    UpdateSecurityGroupRuleDescriptionsEgressCommandInput,
    UpdateSecurityGroupRuleDescriptionsEgressCommandOutput,
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
  .s("AmazonEC2", "UpdateSecurityGroupRuleDescriptionsEgress", {})
  .n("EC2Client", "UpdateSecurityGroupRuleDescriptionsEgressCommand")
  .f(void 0, void 0)
  .ser(se_UpdateSecurityGroupRuleDescriptionsEgressCommand)
  .de(de_UpdateSecurityGroupRuleDescriptionsEgressCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateSecurityGroupRuleDescriptionsEgressRequest;
      output: UpdateSecurityGroupRuleDescriptionsEgressResult;
    };
    sdk: {
      input: UpdateSecurityGroupRuleDescriptionsEgressCommandInput;
      output: UpdateSecurityGroupRuleDescriptionsEgressCommandOutput;
    };
  };
}
