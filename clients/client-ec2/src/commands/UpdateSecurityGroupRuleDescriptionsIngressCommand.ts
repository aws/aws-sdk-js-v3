// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  UpdateSecurityGroupRuleDescriptionsIngressRequest,
  UpdateSecurityGroupRuleDescriptionsIngressResult,
} from "../models/models_8";
import { UpdateSecurityGroupRuleDescriptionsIngress } from "../schemas/schemas_160_Security";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateSecurityGroupRuleDescriptionsIngressCommand}.
 */
export interface UpdateSecurityGroupRuleDescriptionsIngressCommandInput
  extends UpdateSecurityGroupRuleDescriptionsIngressRequest {}
/**
 * @public
 *
 * The output of {@link UpdateSecurityGroupRuleDescriptionsIngressCommand}.
 */
export interface UpdateSecurityGroupRuleDescriptionsIngressCommandOutput
  extends UpdateSecurityGroupRuleDescriptionsIngressResult,
    __MetadataBearer {}

/**
 * <p>Updates the description of an ingress (inbound) security group rule. You can replace an
 * 			existing description, or add a description to a rule that did not have one previously.
 * 		    You can remove a description for a security group rule by omitting the description
 * 		    parameter in the request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, UpdateSecurityGroupRuleDescriptionsIngressCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, UpdateSecurityGroupRuleDescriptionsIngressCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // UpdateSecurityGroupRuleDescriptionsIngressRequest
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
 * const command = new UpdateSecurityGroupRuleDescriptionsIngressCommand(input);
 * const response = await client.send(command);
 * // { // UpdateSecurityGroupRuleDescriptionsIngressResult
 * //   Return: true || false,
 * // };
 *
 * ```
 *
 * @param UpdateSecurityGroupRuleDescriptionsIngressCommandInput - {@link UpdateSecurityGroupRuleDescriptionsIngressCommandInput}
 * @returns {@link UpdateSecurityGroupRuleDescriptionsIngressCommandOutput}
 * @see {@link UpdateSecurityGroupRuleDescriptionsIngressCommandInput} for command's `input` shape.
 * @see {@link UpdateSecurityGroupRuleDescriptionsIngressCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @example To update an inbound security group rule description
 * ```javascript
 * // This example updates the description for the specified security group rule.
 * const input = {
 *   GroupId: "sg-123abc12",
 *   IpPermissions: [
 *     {
 *       FromPort: 22,
 *       IpProtocol: "tcp",
 *       IpRanges: [
 *         {
 *           CidrIp: "203.0.113.0/16",
 *           Description: "SSH access from the LA office"
 *         }
 *       ],
 *       ToPort: 22
 *     }
 *   ]
 * };
 * const command = new UpdateSecurityGroupRuleDescriptionsIngressCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* empty *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class UpdateSecurityGroupRuleDescriptionsIngressCommand extends $Command
  .classBuilder<
    UpdateSecurityGroupRuleDescriptionsIngressCommandInput,
    UpdateSecurityGroupRuleDescriptionsIngressCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "UpdateSecurityGroupRuleDescriptionsIngress", {})
  .n("EC2Client", "UpdateSecurityGroupRuleDescriptionsIngressCommand")
  .sc(UpdateSecurityGroupRuleDescriptionsIngress)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateSecurityGroupRuleDescriptionsIngressRequest;
      output: UpdateSecurityGroupRuleDescriptionsIngressResult;
    };
    sdk: {
      input: UpdateSecurityGroupRuleDescriptionsIngressCommandInput;
      output: UpdateSecurityGroupRuleDescriptionsIngressCommandOutput;
    };
  };
}
