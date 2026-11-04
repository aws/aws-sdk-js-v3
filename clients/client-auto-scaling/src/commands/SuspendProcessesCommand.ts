// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ScalingProcessQuery } from "../models/models_0";
import { SuspendProcesses$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Suspends the specified auto scaling processes, or all processes, for the specified Auto Scaling group.
 *
 * If you suspend either the `Launch` or `Terminate` process types, it can prevent other process types from functioning properly. For more information, see [Suspend and resume Amazon EC2 Auto Scaling processes](https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-suspend-resume-processes.html) in the *Amazon EC2 Auto Scaling User Guide*.
 *
 * To resume processes that have been suspended, call the [ResumeProcesses](https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_ResumeProcesses.html) API.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, SuspendProcessesCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, SuspendProcessesCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * // import type { AutoScalingClientConfig } from "@aws-sdk/client-auto-scaling";
 * const config = {}; // type is AutoScalingClientConfig
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
 *
 * You already have a pending update to an Amazon EC2 Auto Scaling resource (for example, an Auto Scaling group, instance, or load balancer).
 *
 * @throws {@link ResourceInUseFault} (client fault)
 *
 * The operation can't be performed because the resource is in use.
 *
 * @throws {@link AutoScalingServiceException}
 *
 * Base exception class for all service exceptions from AutoScaling service.
 *
 * @example To suspend Auto Scaling processes
 * ```javascript
 * // This example suspends the specified scaling process for the specified Auto Scaling group.
 * const input = {
 *   AutoScalingGroupName: "my-auto-scaling-group",
 *   ScalingProcesses: [
 *     "AlarmNotification"
 *   ]
 * };
 * const command = new SuspendProcessesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class SuspendProcessesCommand extends command<SuspendProcessesCommandInput, SuspendProcessesCommandOutput>(
  _ep0,
  _mw0,
  "SuspendProcesses",
  SuspendProcesses$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ScalingProcessQuery;
      output: {};
    };
    sdk: {
      input: SuspendProcessesCommandInput;
      output: SuspendProcessesCommandOutput;
    };
  };
}
