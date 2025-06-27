// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  ElasticLoadBalancingClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticLoadBalancingClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ApplySecurityGroupsToLoadBalancerInput, ApplySecurityGroupsToLoadBalancerOutput } from "../models/models_0";
import {
  de_ApplySecurityGroupsToLoadBalancerCommand,
  se_ApplySecurityGroupsToLoadBalancerCommand,
} from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ApplySecurityGroupsToLoadBalancerCommand}.
 */
export interface ApplySecurityGroupsToLoadBalancerCommandInput extends ApplySecurityGroupsToLoadBalancerInput {}
/**
 * @public
 *
 * The output of {@link ApplySecurityGroupsToLoadBalancerCommand}.
 */
export interface ApplySecurityGroupsToLoadBalancerCommandOutput
  extends ApplySecurityGroupsToLoadBalancerOutput,
    __MetadataBearer {}

/**
 * <p>Associates one or more security groups with your load balancer in a virtual private cloud (VPC). The specified security groups override the previously associated security groups.</p>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-security-groups.html#elb-vpc-security-groups">Security Groups for Load Balancers in a VPC</a>
 *             in the <i>Classic Load Balancers Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingClient, ApplySecurityGroupsToLoadBalancerCommand } from "@aws-sdk/client-elastic-load-balancing"; // ES Modules import
 * // const { ElasticLoadBalancingClient, ApplySecurityGroupsToLoadBalancerCommand } = require("@aws-sdk/client-elastic-load-balancing"); // CommonJS import
 * const client = new ElasticLoadBalancingClient(config);
 * const input = { // ApplySecurityGroupsToLoadBalancerInput
 *   LoadBalancerName: "STRING_VALUE", // required
 *   SecurityGroups: [ // SecurityGroups // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new ApplySecurityGroupsToLoadBalancerCommand(input);
 * const response = await client.send(command);
 * // { // ApplySecurityGroupsToLoadBalancerOutput
 * //   SecurityGroups: [ // SecurityGroups
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param ApplySecurityGroupsToLoadBalancerCommandInput - {@link ApplySecurityGroupsToLoadBalancerCommandInput}
 * @returns {@link ApplySecurityGroupsToLoadBalancerCommandOutput}
 * @see {@link ApplySecurityGroupsToLoadBalancerCommandInput} for command's `input` shape.
 * @see {@link ApplySecurityGroupsToLoadBalancerCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingClientResolvedConfig | config} for ElasticLoadBalancingClient's `config` shape.
 *
 * @throws {@link AccessPointNotFoundException} (client fault)
 *  <p>The specified load balancer does not exist.</p>
 *
 * @throws {@link InvalidConfigurationRequestException} (client fault)
 *  <p>The requested configuration change is not valid.</p>
 *
 * @throws {@link InvalidSecurityGroupException} (client fault)
 *  <p>One or more of the specified security groups do not exist.</p>
 *
 * @throws {@link ElasticLoadBalancingServiceException}
 * <p>Base exception class for all service exceptions from ElasticLoadBalancing service.</p>
 *
 *
 * @example To associate a security group with a load balancer in a VPC
 * ```javascript
 * // This example associates a security group with the specified load balancer in a VPC.
 * const input = {
 *   LoadBalancerName: "my-load-balancer",
 *   SecurityGroups: [
 *     "sg-fc448899"
 *   ]
 * };
 * const command = new ApplySecurityGroupsToLoadBalancerCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   SecurityGroups: [
 *     "sg-fc448899"
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ApplySecurityGroupsToLoadBalancerCommand extends $Command
  .classBuilder<
    ApplySecurityGroupsToLoadBalancerCommandInput,
    ApplySecurityGroupsToLoadBalancerCommandOutput,
    ElasticLoadBalancingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ElasticLoadBalancingClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ElasticLoadBalancing_v7", "ApplySecurityGroupsToLoadBalancer", {})
  .n("ElasticLoadBalancingClient", "ApplySecurityGroupsToLoadBalancerCommand")
  .f(void 0, void 0)
  .ser(se_ApplySecurityGroupsToLoadBalancerCommand)
  .de(de_ApplySecurityGroupsToLoadBalancerCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ApplySecurityGroupsToLoadBalancerInput;
      output: ApplySecurityGroupsToLoadBalancerOutput;
    };
    sdk: {
      input: ApplySecurityGroupsToLoadBalancerCommandInput;
      output: ApplySecurityGroupsToLoadBalancerCommandOutput;
    };
  };
}
