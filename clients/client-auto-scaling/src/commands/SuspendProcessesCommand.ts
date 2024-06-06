// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ScalingProcessQuery } from "../models/models_0";
import { de_SuspendProcessesCommand, se_SuspendProcessesCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SuspendProcessesCommand}.
 */
export interface SuspendProcessesCommandInput extends ScalingProcessQuery {}
/**
 * @public
 *
 * The output of {@link SuspendProcessesCommand}.
 */
export interface SuspendProcessesCommandOutput extends __MetadataBearer {}

/**
 * <p>Suspends the specified auto scaling processes, or all processes, for the specified
 *             Auto Scaling group.</p>
 *          <p>If you suspend either the <code>Launch</code> or <code>Terminate</code> process types,
 *             it can prevent other process types from functioning properly. For more information, see
 *                 <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-suspend-resume-processes.html">Suspending and
 *                 resuming scaling processes</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
 *          <p>To resume processes that have been suspended, call the <a>ResumeProcesses</a> API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, SuspendProcessesCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, SuspendProcessesCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const input = { // ScalingProcessQuery
 *   AutoScalingGroupName: "STRING_VALUE", // required
 *   ScalingProcesses: [ // ProcessNames
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new SuspendProcessesCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param SuspendProcessesCommandInput - {@link SuspendProcessesCommandInput}
 * @returns {@link SuspendProcessesCommandOutput}
 * @see {@link SuspendProcessesCommandInput} for command's `input` shape.
 * @see {@link SuspendProcessesCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for AutoScalingClient's `config` shape.
 *
 * @throws {@link ResourceContentionFault} (server fault)
 *  <p>You already have a pending update to an Amazon EC2 Auto Scaling resource (for example, an Auto Scaling group,
 *             instance, or load balancer).</p>
 *
 * @throws {@link ResourceInUseFault} (client fault)
 *  <p>The operation can't be performed because the resource is in use.</p>
 *
 * @throws {@link AutoScalingServiceException}
 * <p>Base exception class for all service exceptions from AutoScaling service.</p>
 *
 * @public
 * @example To suspend Auto Scaling processes
 * ```javascript
 * // This example suspends the specified scaling process for the specified Auto Scaling group.
 * const input = {
 *   "AutoScalingGroupName": "my-auto-scaling-group",
 *   "ScalingProcesses": [
 *     "AlarmNotification"
 *   ]
 * };
 * const command = new SuspendProcessesCommand(input);
 * await client.send(command);
 * // example id: autoscaling-suspend-processes-1
 * ```
 *
 */
export class SuspendProcessesCommand extends $Command
  .classBuilder<
    SuspendProcessesCommandInput,
    SuspendProcessesCommandOutput,
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
  .s("AutoScaling_2011_01_01", "SuspendProcesses", {})
  .n("AutoScalingClient", "SuspendProcessesCommand")
  .f(void 0, void 0)
  .ser(se_SuspendProcessesCommand)
  .de(de_SuspendProcessesCommand)
  .build() {}
