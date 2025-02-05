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
import { DeleteLoadBalancerListenerInput, DeleteLoadBalancerListenerOutput } from "../models/models_0";
import { de_DeleteLoadBalancerListenersCommand, se_DeleteLoadBalancerListenersCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteLoadBalancerListenersCommand}.
 */
export interface DeleteLoadBalancerListenersCommandInput extends DeleteLoadBalancerListenerInput {}
/**
 * @public
 *
 * The output of {@link DeleteLoadBalancerListenersCommand}.
 */
export interface DeleteLoadBalancerListenersCommandOutput extends DeleteLoadBalancerListenerOutput, __MetadataBearer {}

/**
 * <p>Deletes the specified listeners from the specified load balancer.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingClient, DeleteLoadBalancerListenersCommand } from "@aws-sdk/client-elastic-load-balancing"; // ES Modules import
 * // const { ElasticLoadBalancingClient, DeleteLoadBalancerListenersCommand } = require("@aws-sdk/client-elastic-load-balancing"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new ElasticLoadBalancingClient(config);
 * const input = { // DeleteLoadBalancerListenerInput
 *   LoadBalancerName: "STRING_VALUE", // required
 *   LoadBalancerPorts: [ // Ports // required
 *     Number("int"),
 *   ],
 * };
 * const command = new DeleteLoadBalancerListenersCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteLoadBalancerListenersCommandInput - {@link DeleteLoadBalancerListenersCommandInput}
 * @returns {@link DeleteLoadBalancerListenersCommandOutput}
 * @see {@link DeleteLoadBalancerListenersCommandInput} for command's `input` shape.
 * @see {@link DeleteLoadBalancerListenersCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingClientResolvedConfig | config} for ElasticLoadBalancingClient's `config` shape.
 *
 * @throws {@link AccessPointNotFoundException} (client fault)
 *  <p>The specified load balancer does not exist.</p>
 *
 * @throws {@link ElasticLoadBalancingServiceException}
 * <p>Base exception class for all service exceptions from ElasticLoadBalancing service.</p>
 *
 * @public
 * @example To delete a listener from your load balancer
 * ```javascript
 * // This example deletes the listener for the specified port from the specified load balancer.
 * const input = {
 *   "LoadBalancerName": "my-load-balancer",
 *   "LoadBalancerPorts": [
 *     80
 *   ]
 * };
 * const command = new DeleteLoadBalancerListenersCommand(input);
 * await client.send(command);
 * // example id: elb-delete-load-balancer-listeners-1
 * ```
 *
 */
export class DeleteLoadBalancerListenersCommand extends $Command
  .classBuilder<
    DeleteLoadBalancerListenersCommandInput,
    DeleteLoadBalancerListenersCommandOutput,
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
  .s("ElasticLoadBalancing_v7", "DeleteLoadBalancerListeners", {})
  .n("ElasticLoadBalancingClient", "DeleteLoadBalancerListenersCommand")
  .f(void 0, void 0)
  .ser(se_DeleteLoadBalancerListenersCommand)
  .de(de_DeleteLoadBalancerListenersCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteLoadBalancerListenerInput;
      output: {};
    };
    sdk: {
      input: DeleteLoadBalancerListenersCommandInput;
      output: DeleteLoadBalancerListenersCommandOutput;
    };
  };
}
