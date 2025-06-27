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
import { DeleteLoadBalancerPolicyInput, DeleteLoadBalancerPolicyOutput } from "../models/models_0";
import { de_DeleteLoadBalancerPolicyCommand, se_DeleteLoadBalancerPolicyCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteLoadBalancerPolicyCommand}.
 */
export interface DeleteLoadBalancerPolicyCommandInput extends DeleteLoadBalancerPolicyInput {}
/**
 * @public
 *
 * The output of {@link DeleteLoadBalancerPolicyCommand}.
 */
export interface DeleteLoadBalancerPolicyCommandOutput extends DeleteLoadBalancerPolicyOutput, __MetadataBearer {}

/**
 * <p>Deletes the specified policy from the specified load balancer. This policy must not be enabled for any listeners.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingClient, DeleteLoadBalancerPolicyCommand } from "@aws-sdk/client-elastic-load-balancing"; // ES Modules import
 * // const { ElasticLoadBalancingClient, DeleteLoadBalancerPolicyCommand } = require("@aws-sdk/client-elastic-load-balancing"); // CommonJS import
 * const client = new ElasticLoadBalancingClient(config);
 * const input = { // DeleteLoadBalancerPolicyInput
 *   LoadBalancerName: "STRING_VALUE", // required
 *   PolicyName: "STRING_VALUE", // required
 * };
 * const command = new DeleteLoadBalancerPolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteLoadBalancerPolicyCommandInput - {@link DeleteLoadBalancerPolicyCommandInput}
 * @returns {@link DeleteLoadBalancerPolicyCommandOutput}
 * @see {@link DeleteLoadBalancerPolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteLoadBalancerPolicyCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingClientResolvedConfig | config} for ElasticLoadBalancingClient's `config` shape.
 *
 * @throws {@link AccessPointNotFoundException} (client fault)
 *  <p>The specified load balancer does not exist.</p>
 *
 * @throws {@link InvalidConfigurationRequestException} (client fault)
 *  <p>The requested configuration change is not valid.</p>
 *
 * @throws {@link ElasticLoadBalancingServiceException}
 * <p>Base exception class for all service exceptions from ElasticLoadBalancing service.</p>
 *
 *
 * @example To delete a policy from your load balancer
 * ```javascript
 * // This example deletes the specified policy from the specified load balancer. The policy must not be enabled on any listener.
 * const input = {
 *   LoadBalancerName: "my-load-balancer",
 *   PolicyName: "my-duration-cookie-policy"
 * };
 * const command = new DeleteLoadBalancerPolicyCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteLoadBalancerPolicyCommand extends $Command
  .classBuilder<
    DeleteLoadBalancerPolicyCommandInput,
    DeleteLoadBalancerPolicyCommandOutput,
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
  .s("ElasticLoadBalancing_v7", "DeleteLoadBalancerPolicy", {})
  .n("ElasticLoadBalancingClient", "DeleteLoadBalancerPolicyCommand")
  .f(void 0, void 0)
  .ser(se_DeleteLoadBalancerPolicyCommand)
  .de(de_DeleteLoadBalancerPolicyCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteLoadBalancerPolicyInput;
      output: {};
    };
    sdk: {
      input: DeleteLoadBalancerPolicyCommandInput;
      output: DeleteLoadBalancerPolicyCommandOutput;
    };
  };
}
