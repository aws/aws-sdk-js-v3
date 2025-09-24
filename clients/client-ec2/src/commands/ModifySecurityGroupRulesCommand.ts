// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ModifySecurityGroupRulesRequest, ModifySecurityGroupRulesResult } from "../models/models_7";
import { ModifySecurityGroupRules } from "../schemas/schemas_172_Group";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ModifySecurityGroupRulesCommand}.
 */
export interface ModifySecurityGroupRulesCommandInput extends ModifySecurityGroupRulesRequest {}
/**
 * @public
 *
 * The output of {@link ModifySecurityGroupRulesCommand}.
 */
export interface ModifySecurityGroupRulesCommandOutput extends ModifySecurityGroupRulesResult, __MetadataBearer {}

/**
 * <p>Modifies the rules of a security group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifySecurityGroupRulesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifySecurityGroupRulesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // ModifySecurityGroupRulesRequest
 *   GroupId: "STRING_VALUE", // required
 *   SecurityGroupRules: [ // SecurityGroupRuleUpdateList // required
 *     { // SecurityGroupRuleUpdate
 *       SecurityGroupRuleId: "STRING_VALUE", // required
 *       SecurityGroupRule: { // SecurityGroupRuleRequest
 *         IpProtocol: "STRING_VALUE",
 *         FromPort: Number("int"),
 *         ToPort: Number("int"),
 *         CidrIpv4: "STRING_VALUE",
 *         CidrIpv6: "STRING_VALUE",
 *         PrefixListId: "STRING_VALUE",
 *         ReferencedGroupId: "STRING_VALUE",
 *         Description: "STRING_VALUE",
 *       },
 *     },
 *   ],
 *   DryRun: true || false,
 * };
 * const command = new ModifySecurityGroupRulesCommand(input);
 * const response = await client.send(command);
 * // { // ModifySecurityGroupRulesResult
 * //   Return: true || false,
 * // };
 *
 * ```
 *
 * @param ModifySecurityGroupRulesCommandInput - {@link ModifySecurityGroupRulesCommandInput}
 * @returns {@link ModifySecurityGroupRulesCommandOutput}
 * @see {@link ModifySecurityGroupRulesCommandInput} for command's `input` shape.
 * @see {@link ModifySecurityGroupRulesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class ModifySecurityGroupRulesCommand extends $Command
  .classBuilder<
    ModifySecurityGroupRulesCommandInput,
    ModifySecurityGroupRulesCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "ModifySecurityGroupRules", {})
  .n("EC2Client", "ModifySecurityGroupRulesCommand")
  .sc(ModifySecurityGroupRules)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifySecurityGroupRulesRequest;
      output: ModifySecurityGroupRulesResult;
    };
    sdk: {
      input: ModifySecurityGroupRulesCommandInput;
      output: ModifySecurityGroupRulesCommandOutput;
    };
  };
}
