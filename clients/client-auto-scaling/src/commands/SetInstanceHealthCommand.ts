// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { SetInstanceHealthQuery } from "../models/models_0";
import { de_SetInstanceHealthCommand, se_SetInstanceHealthCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SetInstanceHealthCommand}.
 */
export interface SetInstanceHealthCommandInput extends SetInstanceHealthQuery {}
/**
 * @public
 *
 * The output of {@link SetInstanceHealthCommand}.
 */
export interface SetInstanceHealthCommandOutput extends __MetadataBearer {}

/**
 * <p>Sets the health status of the specified instance.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/healthcheck.html">Health checks for Auto Scaling
 *                 instances</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, SetInstanceHealthCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, SetInstanceHealthCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const input = { // SetInstanceHealthQuery
 *   InstanceId: "STRING_VALUE", // required
 *   HealthStatus: "STRING_VALUE", // required
 *   ShouldRespectGracePeriod: true || false,
 * };
 * const command = new SetInstanceHealthCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param SetInstanceHealthCommandInput - {@link SetInstanceHealthCommandInput}
 * @returns {@link SetInstanceHealthCommandOutput}
 * @see {@link SetInstanceHealthCommandInput} for command's `input` shape.
 * @see {@link SetInstanceHealthCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for AutoScalingClient's `config` shape.
 *
 * @throws {@link ResourceContentionFault} (server fault)
 *  <p>You already have a pending update to an Amazon EC2 Auto Scaling resource (for example, an Auto Scaling group,
 *             instance, or load balancer).</p>
 *
 * @throws {@link AutoScalingServiceException}
 * <p>Base exception class for all service exceptions from AutoScaling service.</p>
 *
 * @public
 * @example To set the health status of an instance
 * ```javascript
 * // This example sets the health status of the specified instance to Unhealthy.
 * const input = {
 *   "HealthStatus": "Unhealthy",
 *   "InstanceId": "i-93633f9b"
 * };
 * const command = new SetInstanceHealthCommand(input);
 * await client.send(command);
 * // example id: autoscaling-set-instance-health-1
 * ```
 *
 */
export class SetInstanceHealthCommand extends $Command
  .classBuilder<
    SetInstanceHealthCommandInput,
    SetInstanceHealthCommandOutput,
    AutoScalingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: AutoScalingClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AutoScaling_2011_01_01", "SetInstanceHealth", {})
  .n("AutoScalingClient", "SetInstanceHealthCommand")
  .f(void 0, void 0)
  .ser(se_SetInstanceHealthCommand)
  .de(de_SetInstanceHealthCommand)
  .build() {}
