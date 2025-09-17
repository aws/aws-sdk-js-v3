// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  ElasticLoadBalancingV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticLoadBalancingV2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { SetSecurityGroupsInput, SetSecurityGroupsOutput } from "../models/models_0";
import { de_SetSecurityGroupsCommand, se_SetSecurityGroupsCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SetSecurityGroupsCommand}.
 */
export interface SetSecurityGroupsCommandInput extends SetSecurityGroupsInput {}
/**
 * @public
 *
 * The output of {@link SetSecurityGroupsCommand}.
 */
export interface SetSecurityGroupsCommandOutput extends SetSecurityGroupsOutput, __MetadataBearer {}

/**
 * <p>Associates the specified security groups with the specified Application Load Balancer or
 *       Network Load Balancer. The specified security groups override the previously associated
 *       security groups.</p>
 *          <p>You can't perform this operation on a Network Load Balancer unless you specified a
 *       security group for the load balancer when you created it.</p>
 *          <p>You can't associate a security group with a Gateway Load Balancer.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingV2Client, SetSecurityGroupsCommand } from "@aws-sdk/client-elastic-load-balancing-v2"; // ES Modules import
 * // const { ElasticLoadBalancingV2Client, SetSecurityGroupsCommand } = require("@aws-sdk/client-elastic-load-balancing-v2"); // CommonJS import
 * // import type { ElasticLoadBalancingV2ClientConfig } from "@aws-sdk/client-elastic-load-balancing-v2";
 * const config = {}; // type is ElasticLoadBalancingV2ClientConfig
 * const client = new ElasticLoadBalancingV2Client(config);
 * const input = { // SetSecurityGroupsInput
 *   LoadBalancerArn: "STRING_VALUE", // required
 *   SecurityGroups: [ // SecurityGroups // required
 *     "STRING_VALUE",
 *   ],
 *   EnforceSecurityGroupInboundRulesOnPrivateLinkTraffic: "on" || "off",
 * };
 * const command = new SetSecurityGroupsCommand(input);
 * const response = await client.send(command);
 * // { // SetSecurityGroupsOutput
 * //   SecurityGroupIds: [ // SecurityGroups
 * //     "STRING_VALUE",
 * //   ],
 * //   EnforceSecurityGroupInboundRulesOnPrivateLinkTraffic: "on" || "off",
 * // };
 *
 * ```
 *
 * @param SetSecurityGroupsCommandInput - {@link SetSecurityGroupsCommandInput}
 * @returns {@link SetSecurityGroupsCommandOutput}
 * @see {@link SetSecurityGroupsCommandInput} for command's `input` shape.
 * @see {@link SetSecurityGroupsCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingV2ClientResolvedConfig | config} for ElasticLoadBalancingV2Client's `config` shape.
 *
 * @throws {@link InvalidConfigurationRequestException} (client fault)
 *  <p>The requested configuration is not valid.</p>
 *
 * @throws {@link InvalidSecurityGroupException} (client fault)
 *  <p>The specified security group does not exist.</p>
 *
 * @throws {@link LoadBalancerNotFoundException} (client fault)
 *  <p>The specified load balancer does not exist.</p>
 *
 * @throws {@link ElasticLoadBalancingV2ServiceException}
 * <p>Base exception class for all service exceptions from ElasticLoadBalancingV2 service.</p>
 *
 *
 * @example To associate a security group with a load balancer
 * ```javascript
 * // This example associates the specified security group with the specified load balancer.
 * const input = {
 *   LoadBalancerArn: "arn:aws:elasticloadbalancing:us-west-2:123456789012:loadbalancer/app/my-load-balancer/50dc6c495c0c9188",
 *   SecurityGroups: [
 *     "sg-5943793c"
 *   ]
 * };
 * const command = new SetSecurityGroupsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   SecurityGroupIds: [
 *     "sg-5943793c"
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class SetSecurityGroupsCommand extends $Command
  .classBuilder<
    SetSecurityGroupsCommandInput,
    SetSecurityGroupsCommandOutput,
    ElasticLoadBalancingV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ElasticLoadBalancingV2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ElasticLoadBalancing_v10", "SetSecurityGroups", {})
  .n("ElasticLoadBalancingV2Client", "SetSecurityGroupsCommand")
  .f(void 0, void 0)
  .ser(se_SetSecurityGroupsCommand)
  .de(de_SetSecurityGroupsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SetSecurityGroupsInput;
      output: SetSecurityGroupsOutput;
    };
    sdk: {
      input: SetSecurityGroupsCommandInput;
      output: SetSecurityGroupsCommandOutput;
    };
  };
}
