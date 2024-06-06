// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ProcessesType } from "../models/models_0";
import { de_DescribeScalingProcessTypesCommand, se_DescribeScalingProcessTypesCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeScalingProcessTypesCommand}.
 */
export interface DescribeScalingProcessTypesCommandInput {}
/**
 * @public
 *
 * The output of {@link DescribeScalingProcessTypesCommand}.
 */
export interface DescribeScalingProcessTypesCommandOutput extends ProcessesType, __MetadataBearer {}

/**
 * <p>Describes the scaling process types for use with the <a>ResumeProcesses</a>
 *             and <a>SuspendProcesses</a> APIs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, DescribeScalingProcessTypesCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, DescribeScalingProcessTypesCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const input = {};
 * const command = new DescribeScalingProcessTypesCommand(input);
 * const response = await client.send(command);
 * // { // ProcessesType
 * //   Processes: [ // Processes
 * //     { // ProcessType
 * //       ProcessName: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeScalingProcessTypesCommandInput - {@link DescribeScalingProcessTypesCommandInput}
 * @returns {@link DescribeScalingProcessTypesCommandOutput}
 * @see {@link DescribeScalingProcessTypesCommandInput} for command's `input` shape.
 * @see {@link DescribeScalingProcessTypesCommandOutput} for command's `response` shape.
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
 * @example To describe the Auto Scaling process types
 * ```javascript
 * // This example describes the Auto Scaling process types.
 * const input = {};
 * const command = new DescribeScalingProcessTypesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Processes": [
 *     {
 *       "ProcessName": "AZRebalance"
 *     },
 *     {
 *       "ProcessName": "AddToLoadBalancer"
 *     },
 *     {
 *       "ProcessName": "AlarmNotification"
 *     },
 *     {
 *       "ProcessName": "HealthCheck"
 *     },
 *     {
 *       "ProcessName": "Launch"
 *     },
 *     {
 *       "ProcessName": "ReplaceUnhealthy"
 *     },
 *     {
 *       "ProcessName": "ScheduledActions"
 *     },
 *     {
 *       "ProcessName": "Terminate"
 *     }
 *   ]
 * }
 * *\/
 * // example id: autoscaling-describe-scaling-process-types-1
 * ```
 *
 */
export class DescribeScalingProcessTypesCommand extends $Command
  .classBuilder<
    DescribeScalingProcessTypesCommandInput,
    DescribeScalingProcessTypesCommandOutput,
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
  .s("AutoScaling_2011_01_01", "DescribeScalingProcessTypes", {})
  .n("AutoScalingClient", "DescribeScalingProcessTypesCommand")
  .f(void 0, void 0)
  .ser(se_DescribeScalingProcessTypesCommand)
  .de(de_DescribeScalingProcessTypesCommand)
  .build() {}
