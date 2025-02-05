// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ExecutePolicyType } from "../models/models_0";
import { de_ExecutePolicyCommand, se_ExecutePolicyCommand } from "../protocols/Aws_query";

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
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
 * @public
 * @example To execute a scaling policy
 * ```javascript
 * // This example executes the specified policy.
 * const input = {
 *   "AutoScalingGroupName": "my-auto-scaling-group",
 *   "BreachThreshold": 50,
 *   "MetricValue": 59,
 *   "PolicyName": "my-step-scale-out-policy"
 * };
 * const command = new ExecutePolicyCommand(input);
 * await client.send(command);
 * // example id: autoscaling-execute-policy-1
 * ```
 *
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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AutoScaling_2011_01_01", "ExecutePolicy", {})
  .n("AutoScalingClient", "ExecutePolicyCommand")
  .f(void 0, void 0)
  .ser(se_ExecutePolicyCommand)
  .de(de_ExecutePolicyCommand)
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
