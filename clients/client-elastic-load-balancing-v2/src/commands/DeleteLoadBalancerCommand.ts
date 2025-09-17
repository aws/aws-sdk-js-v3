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
import { DeleteLoadBalancerInput, DeleteLoadBalancerOutput } from "../models/models_0";
import { de_DeleteLoadBalancerCommand, se_DeleteLoadBalancerCommand } from "../protocols/Aws_query";

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
export interface DeleteLoadBalancerCommandInput extends DeleteLoadBalancerInput {}
/**
 * @public
 *
 * The output of {@link DeleteLoadBalancerCommand}.
 */
export interface DeleteLoadBalancerCommandOutput extends DeleteLoadBalancerOutput, __MetadataBearer {}

/**
 * <p>Deletes the specified Application Load Balancer, Network Load Balancer, or Gateway Load
 *       Balancer. Deleting a load balancer also deletes its listeners.</p>
 *          <p>You can't delete a load balancer if deletion protection is enabled. If the load balancer
 *       does not exist or has already been deleted, the call succeeds.</p>
 *          <p>Deleting a load balancer does not affect its registered targets. For example, your EC2
 *       instances continue to run and are still registered to their target groups. If you no longer
 *       need these EC2 instances, you can stop or terminate them.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingV2Client, DeleteLoadBalancerCommand } from "@aws-sdk/client-elastic-load-balancing-v2"; // ES Modules import
 * // const { ElasticLoadBalancingV2Client, DeleteLoadBalancerCommand } = require("@aws-sdk/client-elastic-load-balancing-v2"); // CommonJS import
 * // import type { ElasticLoadBalancingV2ClientConfig } from "@aws-sdk/client-elastic-load-balancing-v2";
 * const config = {}; // type is ElasticLoadBalancingV2ClientConfig
 * const client = new ElasticLoadBalancingV2Client(config);
 * const input = { // DeleteLoadBalancerInput
 *   LoadBalancerArn: "STRING_VALUE", // required
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
 * @see {@link ElasticLoadBalancingV2ClientResolvedConfig | config} for ElasticLoadBalancingV2Client's `config` shape.
 *
 * @throws {@link LoadBalancerNotFoundException} (client fault)
 *  <p>The specified load balancer does not exist.</p>
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *  <p>This operation is not allowed.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>A specified resource is in use.</p>
 *
 * @throws {@link ElasticLoadBalancingV2ServiceException}
 * <p>Base exception class for all service exceptions from ElasticLoadBalancingV2 service.</p>
 *
 *
 * @example To delete a load balancer
 * ```javascript
 * // This example deletes the specified load balancer.
 * const input = {
 *   LoadBalancerArn: "arn:aws:elasticloadbalancing:us-west-2:123456789012:loadbalancer/app/my-load-balancer/50dc6c495c0c9188"
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
  .s("ElasticLoadBalancing_v10", "DeleteLoadBalancer", {})
  .n("ElasticLoadBalancingV2Client", "DeleteLoadBalancerCommand")
  .f(void 0, void 0)
  .ser(se_DeleteLoadBalancerCommand)
  .de(de_DeleteLoadBalancerCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteLoadBalancerInput;
      output: {};
    };
    sdk: {
      input: DeleteLoadBalancerCommandInput;
      output: DeleteLoadBalancerCommandOutput;
    };
  };
}
