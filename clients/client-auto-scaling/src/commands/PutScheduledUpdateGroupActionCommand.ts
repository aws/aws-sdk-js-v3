// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { PutScheduledUpdateGroupActionType } from "../models/models_0";
import {
  de_PutScheduledUpdateGroupActionCommand,
  se_PutScheduledUpdateGroupActionCommand,
} from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutScheduledUpdateGroupActionCommand}.
 */
export interface PutScheduledUpdateGroupActionCommandInput extends PutScheduledUpdateGroupActionType {}
/**
 * @public
 *
 * The output of {@link PutScheduledUpdateGroupActionCommand}.
 */
export interface PutScheduledUpdateGroupActionCommandOutput extends __MetadataBearer {}

/**
 * <p>Creates or updates a scheduled scaling action for an Auto Scaling group.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/schedule_time.html">Scheduled scaling</a> in the
 *                 <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
 *          <p>You can view the scheduled actions for an Auto Scaling group using the <a>DescribeScheduledActions</a> API call. If you are no longer using a
 *             scheduled action, you can delete it by calling the <a>DeleteScheduledAction</a> API.</p>
 *          <p>If you try to schedule your action in the past, Amazon EC2 Auto Scaling returns an error
 *             message.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, PutScheduledUpdateGroupActionCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, PutScheduledUpdateGroupActionCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const input = { // PutScheduledUpdateGroupActionType
 *   AutoScalingGroupName: "STRING_VALUE", // required
 *   ScheduledActionName: "STRING_VALUE", // required
 *   Time: new Date("TIMESTAMP"),
 *   StartTime: new Date("TIMESTAMP"),
 *   EndTime: new Date("TIMESTAMP"),
 *   Recurrence: "STRING_VALUE",
 *   MinSize: Number("int"),
 *   MaxSize: Number("int"),
 *   DesiredCapacity: Number("int"),
 *   TimeZone: "STRING_VALUE",
 * };
 * const command = new PutScheduledUpdateGroupActionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutScheduledUpdateGroupActionCommandInput - {@link PutScheduledUpdateGroupActionCommandInput}
 * @returns {@link PutScheduledUpdateGroupActionCommandOutput}
 * @see {@link PutScheduledUpdateGroupActionCommandInput} for command's `input` shape.
 * @see {@link PutScheduledUpdateGroupActionCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for AutoScalingClient's `config` shape.
 *
 * @throws {@link AlreadyExistsFault} (client fault)
 *  <p>You already have an Auto Scaling group or launch configuration with this name.</p>
 *
 * @throws {@link LimitExceededFault} (client fault)
 *  <p>You have already reached a limit for your Amazon EC2 Auto Scaling
 *             resources (for example, Auto Scaling groups, launch configurations, or lifecycle hooks). For
 *             more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_DescribeAccountLimits.html">DescribeAccountLimits</a> in the <i>Amazon EC2 Auto Scaling API
 *             Reference</i>.</p>
 *
 * @throws {@link ResourceContentionFault} (server fault)
 *  <p>You already have a pending update to an Amazon EC2 Auto Scaling resource (for example, an Auto Scaling group,
 *             instance, or load balancer).</p>
 *
 * @throws {@link AutoScalingServiceException}
 * <p>Base exception class for all service exceptions from AutoScaling service.</p>
 *
 * @public
 * @example To add a scheduled action to an Auto Scaling group
 * ```javascript
 * // This example adds the specified scheduled action to the specified Auto Scaling group.
 * const input = {
 *   "AutoScalingGroupName": "my-auto-scaling-group",
 *   "DesiredCapacity": 4,
 *   "EndTime": "2014-05-12T08:00:00Z",
 *   "MaxSize": 6,
 *   "MinSize": 2,
 *   "ScheduledActionName": "my-scheduled-action",
 *   "StartTime": "2014-05-12T08:00:00Z"
 * };
 * const command = new PutScheduledUpdateGroupActionCommand(input);
 * await client.send(command);
 * // example id: autoscaling-put-scheduled-update-group-action-1
 * ```
 *
 */
export class PutScheduledUpdateGroupActionCommand extends $Command
  .classBuilder<
    PutScheduledUpdateGroupActionCommandInput,
    PutScheduledUpdateGroupActionCommandOutput,
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
  .s("AutoScaling_2011_01_01", "PutScheduledUpdateGroupAction", {})
  .n("AutoScalingClient", "PutScheduledUpdateGroupActionCommand")
  .f(void 0, void 0)
  .ser(se_PutScheduledUpdateGroupActionCommand)
  .de(de_PutScheduledUpdateGroupActionCommand)
  .build() {}
