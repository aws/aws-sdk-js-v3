// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  ElasticLoadBalancingClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticLoadBalancingClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteAccessPointInput, DeleteAccessPointOutput } from "../models/models_0";
import { DeleteLoadBalancer } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteLoadBalancerCommand}.
 */
export interface DeleteLoadBalancerCommandInput extends DeleteAccessPointInput {}
/**
 * @public
 *
 * The output of {@link DeleteLoadBalancerCommand}.
 */
export interface DeleteLoadBalancerCommandOutput extends DeleteAccessPointOutput, __MetadataBearer {}

/**
 * <p>Deletes the specified load balancer.</p>
 *         <p>If you are attempting to recreate a load balancer, you must reconfigure all settings. The DNS name associated with a deleted load balancer are no longer usable. The name and associated DNS record of the deleted load balancer no longer exist and traffic sent to any of its IP addresses is no longer delivered to your instances.</p>
 *         <p>If the load balancer does not exist or has already been deleted, the call to
 *             <code>DeleteLoadBalancer</code> still succeeds.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingClient, DeleteLoadBalancerCommand } from "@aws-sdk/client-elastic-load-balancing"; // ES Modules import
 * // const { ElasticLoadBalancingClient, DeleteLoadBalancerCommand } = require("@aws-sdk/client-elastic-load-balancing"); // CommonJS import
 * // import type { ElasticLoadBalancingClientConfig } from "@aws-sdk/client-elastic-load-balancing";
 * const config = {}; // type is ElasticLoadBalancingClientConfig
 * const client = new ElasticLoadBalancingClient(config);
 * const input = { // DeleteAccessPointInput
 *   LoadBalancerName: "STRING_VALUE", // required
 * };
 * const command = new DeleteLoadBalancerCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteLoadBalancerCommandInput - {@link DeleteLoadBalancerCommandInput}
 * @returns {@link DeleteLoadBalancerCommandOutput}
 * @see {@link DeleteLoadBalancerCommandInput} for command's `input` shape.
 * @see {@link DeleteLoadBalancerCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingClientResolvedConfig | config} for ElasticLoadBalancingClient's `config` shape.
 *
 * @throws {@link ElasticLoadBalancingServiceException}
 * <p>Base exception class for all service exceptions from ElasticLoadBalancing service.</p>
 *
 *
 * @example To delete a load balancer
 * ```javascript
 * // This example deletes the specified load balancer.
 * const input = {
 *   LoadBalancerName: "my-load-balancer"
 * };
 * const command = new DeleteLoadBalancerCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteLoadBalancerCommand extends $Command
  .classBuilder<
    DeleteLoadBalancerCommandInput,
    DeleteLoadBalancerCommandOutput,
    ElasticLoadBalancingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ElasticLoadBalancingClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ElasticLoadBalancing_v7", "DeleteLoadBalancer", {})
  .n("ElasticLoadBalancingClient", "DeleteLoadBalancerCommand")
  .sc(DeleteLoadBalancer)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAccessPointInput;
      output: {};
    };
    sdk: {
      input: DeleteLoadBalancerCommandInput;
      output: DeleteLoadBalancerCommandOutput;
    };
  };
}
