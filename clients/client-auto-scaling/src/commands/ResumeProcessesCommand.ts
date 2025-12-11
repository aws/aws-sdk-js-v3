// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ScalingProcessQuery } from "../models/models_0";
import { ResumeProcesses } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ResumeProcessesCommand}.
 */
export interface ResumeProcessesCommandInput extends ScalingProcessQuery {}
/**
 * @public
 *
 * The output of {@link ResumeProcessesCommand}.
 */
export interface ResumeProcessesCommandOutput extends __MetadataBearer {}

/**
 * <p>Resumes the specified suspended auto scaling processes, or all suspended process, for
 *             the specified Auto Scaling group.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-suspend-resume-processes.html">Suspend and resume
 *                 Amazon EC2 Auto Scaling processes</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, ResumeProcessesCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, ResumeProcessesCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * // import type { AutoScalingClientConfig } from "@aws-sdk/client-auto-scaling";
 * const config = {}; // type is AutoScalingClientConfig
 * const client = new AutoScalingClient(config);
 * const input = { // ScalingProcessQuery
 *   AutoScalingGroupName: "STRING_VALUE", // required
 *   ScalingProcesses: [ // ProcessNames
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new ResumeProcessesCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param ResumeProcessesCommandInput - {@link ResumeProcessesCommandInput}
 * @returns {@link ResumeProcessesCommandOutput}
 * @see {@link ResumeProcessesCommandInput} for command's `input` shape.
 * @see {@link ResumeProcessesCommandOutput} for command's `response` shape.
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
 *
 * @example To resume Auto Scaling processes
 * ```javascript
 * // This example resumes the specified suspended scaling process for the specified Auto Scaling group.
 * const input = {
 *   AutoScalingGroupName: "my-auto-scaling-group",
 *   ScalingProcesses: [
 *     "AlarmNotification"
 *   ]
 * };
 * const command = new ResumeProcessesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class ResumeProcessesCommand extends $Command
  .classBuilder<
    ResumeProcessesCommandInput,
    ResumeProcessesCommandOutput,
    AutoScalingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AutoScalingClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AutoScaling_2011_01_01", "ResumeProcesses", {})
  .n("AutoScalingClient", "ResumeProcessesCommand")
  .sc(ResumeProcesses)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ScalingProcessQuery;
      output: {};
    };
    sdk: {
      input: ResumeProcessesCommandInput;
      output: ResumeProcessesCommandOutput;
    };
  };
}
