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
import { ModifyIpPoolsInput, ModifyIpPoolsOutput } from "../models/models_0";
import { de_ModifyIpPoolsCommand, se_ModifyIpPoolsCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ModifyIpPoolsCommand}.
 */
export interface ModifyIpPoolsCommandInput extends ModifyIpPoolsInput {}
/**
 * @public
 *
 * The output of {@link ModifyIpPoolsCommand}.
 */
export interface ModifyIpPoolsCommandOutput extends ModifyIpPoolsOutput, __MetadataBearer {}

/**
 * <p>[Application Load Balancers] Modify the IP pool associated to a load balancer.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingV2Client, ModifyIpPoolsCommand } from "@aws-sdk/client-elastic-load-balancing-v2"; // ES Modules import
 * // const { ElasticLoadBalancingV2Client, ModifyIpPoolsCommand } = require("@aws-sdk/client-elastic-load-balancing-v2"); // CommonJS import
 * const client = new ElasticLoadBalancingV2Client(config);
 * const input = { // ModifyIpPoolsInput
 *   LoadBalancerArn: "STRING_VALUE", // required
 *   IpamPools: { // IpamPools
 *     Ipv4IpamPoolId: "STRING_VALUE",
 *   },
 *   RemoveIpamPools: [ // RemoveIpamPools
 *     "ipv4",
 *   ],
 * };
 * const command = new ModifyIpPoolsCommand(input);
 * const response = await client.send(command);
 * // { // ModifyIpPoolsOutput
 * //   IpamPools: { // IpamPools
 * //     Ipv4IpamPoolId: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param ModifyIpPoolsCommandInput - {@link ModifyIpPoolsCommandInput}
 * @returns {@link ModifyIpPoolsCommandOutput}
 * @see {@link ModifyIpPoolsCommandInput} for command's `input` shape.
 * @see {@link ModifyIpPoolsCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingV2ClientResolvedConfig | config} for ElasticLoadBalancingV2Client's `config` shape.
 *
 * @throws {@link LoadBalancerNotFoundException} (client fault)
 *  <p>The specified load balancer does not exist.</p>
 *
 * @throws {@link ElasticLoadBalancingV2ServiceException}
 * <p>Base exception class for all service exceptions from ElasticLoadBalancingV2 service.</p>
 *
 *
 * @public
 */
export class ModifyIpPoolsCommand extends $Command
  .classBuilder<
    ModifyIpPoolsCommandInput,
    ModifyIpPoolsCommandOutput,
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
  .s("ElasticLoadBalancing_v10", "ModifyIpPools", {})
  .n("ElasticLoadBalancingV2Client", "ModifyIpPoolsCommand")
  .f(void 0, void 0)
  .ser(se_ModifyIpPoolsCommand)
  .de(de_ModifyIpPoolsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifyIpPoolsInput;
      output: ModifyIpPoolsOutput;
    };
    sdk: {
      input: ModifyIpPoolsCommandInput;
      output: ModifyIpPoolsCommandOutput;
    };
  };
}
