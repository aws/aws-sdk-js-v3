// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ExecutePolicyType } from "../models/models_0";
import { ExecutePolicy } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ExecutePolicyCommand}.
 */
export interface ExecutePolicyCommandInput extends ExecutePolicyType {}
/**
 * @public
 *
 * The output of {@link ExecutePolicyCommand}.
 */
export interface ExecutePolicyCommandOutput extends __MetadataBearer {}

/**
 * <p>Executes the specified policy. This can be useful for testing the design of your
 *             scaling policy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, ExecutePolicyCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, ExecutePolicyCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * // import type { AutoScalingClientConfig } from "@aws-sdk/client-auto-scaling";
 * const config = {}; // type is AutoScalingClientConfig
 * const client = new AutoScalingClient(config);
 * const input = { // ExecutePolicyType
 *   AutoScalingGroupName: "STRING_VALUE",
 *   PolicyName: "STRING_VALUE", // required
 *   HonorCooldown: true || false,
 *   MetricValue: Number("double"),
 *   BreachThreshold: Number("double"),
 * };
 * const command = new ExecutePolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param ExecutePolicyCommandInput - {@link ExecutePolicyCommandInput}
 * @returns {@link ExecutePolicyCommandOutput}
 * @see {@link ExecutePolicyCommandInput} for command's `input` shape.
 * @see {@link ExecutePolicyCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for AutoScalingClient's `config` shape.
 *
 * @throws {@link ResourceContentionFault} (server fault)
 *  <p>You already have a pending update to an Amazon EC2 Auto Scaling resource (for example, an Auto Scaling group,
 *             instance, or load balancer).</p>
 *
 * @throws {@link ScalingActivityInProgressFault} (client fault)
 *  <p>The operation can't be performed because there are scaling activities in
 *             progress.</p>
 *
 * @throws {@link AutoScalingServiceException}
 * <p>Base exception class for all service exceptions from AutoScaling service.</p>
 *
 *
 * @example To execute a scaling policy
 * ```javascript
 * // This example executes the specified policy.
 * const input = {
 *   AutoScalingGroupName: "my-auto-scaling-group",
 *   BreachThreshold: 50.0,
 *   MetricValue: 59.0,
 *   PolicyName: "my-step-scale-out-policy"
 * };
 * const command = new ExecutePolicyCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class ExecutePolicyCommand extends $Command
  .classBuilder<
    ExecutePolicyCommandInput,
    ExecutePolicyCommandOutput,
    AutoScalingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AutoScalingClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AutoScaling_2011_01_01", "ExecutePolicy", {})
  .n("AutoScalingClient", "ExecutePolicyCommand")
  .sc(ExecutePolicy)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ExecutePolicyType;
      output: {};
    };
    sdk: {
      input: ExecutePolicyCommandInput;
      output: ExecutePolicyCommandOutput;
    };
  };
}
