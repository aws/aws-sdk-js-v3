// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeScheduledActionsType, ScheduledActionsType } from "../models/models_0";
import { de_DescribeScheduledActionsCommand, se_DescribeScheduledActionsCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeScheduledActionsCommand}.
 */
export interface DescribeScheduledActionsCommandInput extends DescribeScheduledActionsType {}
/**
 * @public
 *
 * The output of {@link DescribeScheduledActionsCommand}.
 */
export interface DescribeScheduledActionsCommandOutput extends ScheduledActionsType, __MetadataBearer {}

/**
 * <p>Gets information about the scheduled actions that haven't run or that have not reached
 *             their end time.</p>
 *          <p>To describe the scaling activities for scheduled actions that have already run, call
 *             the <a href="https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_DescribeScalingActivities.html">DescribeScalingActivities</a> API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, DescribeScheduledActionsCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, DescribeScheduledActionsCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * // import type { AutoScalingClientConfig } from "@aws-sdk/client-auto-scaling";
 * const config = {}; // type is AutoScalingClientConfig
 * const client = new AutoScalingClient(config);
 * const input = { // DescribeScheduledActionsType
 *   AutoScalingGroupName: "STRING_VALUE",
 *   ScheduledActionNames: [ // ScheduledActionNames
 *     "STRING_VALUE",
 *   ],
 *   StartTime: new Date("TIMESTAMP"),
 *   EndTime: new Date("TIMESTAMP"),
 *   NextToken: "STRING_VALUE",
 *   MaxRecords: Number("int"),
 * };
 * const command = new DescribeScheduledActionsCommand(input);
 * const response = await client.send(command);
 * // { // ScheduledActionsType
 * //   ScheduledUpdateGroupActions: [ // ScheduledUpdateGroupActions
 * //     { // ScheduledUpdateGroupAction
 * //       AutoScalingGroupName: "STRING_VALUE",
 * //       ScheduledActionName: "STRING_VALUE",
 * //       ScheduledActionARN: "STRING_VALUE",
 * //       Time: new Date("TIMESTAMP"),
 * //       StartTime: new Date("TIMESTAMP"),
 * //       EndTime: new Date("TIMESTAMP"),
 * //       Recurrence: "STRING_VALUE",
 * //       MinSize: Number("int"),
 * //       MaxSize: Number("int"),
 * //       DesiredCapacity: Number("int"),
 * //       TimeZone: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeScheduledActionsCommandInput - {@link DescribeScheduledActionsCommandInput}
 * @returns {@link DescribeScheduledActionsCommandOutput}
 * @see {@link DescribeScheduledActionsCommandInput} for command's `input` shape.
 * @see {@link DescribeScheduledActionsCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for AutoScalingClient's `config` shape.
 *
 * @throws {@link InvalidNextToken} (client fault)
 *  <p>The <code>NextToken</code> value is not valid.</p>
 *
 * @throws {@link ResourceContentionFault} (server fault)
 *  <p>You already have a pending update to an Amazon EC2 Auto Scaling resource (for example, an Auto Scaling group,
 *             instance, or load balancer).</p>
 *
 * @throws {@link AutoScalingServiceException}
 * <p>Base exception class for all service exceptions from AutoScaling service.</p>
 *
 *
 * @example To describe scheduled actions
 * ```javascript
 * // This example describes the scheduled actions for the specified Auto Scaling group.
 * const input = {
 *   AutoScalingGroupName: "my-auto-scaling-group"
 * };
 * const command = new DescribeScheduledActionsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ScheduledUpdateGroupActions: [
 *     {
 *       AutoScalingGroupName: "my-auto-scaling-group",
 *       DesiredCapacity: 4,
 *       MaxSize: 6,
 *       MinSize: 2,
 *       Recurrence: "30 0 1 12 0",
 *       ScheduledActionARN: "arn:aws:autoscaling:us-west-2:123456789012:scheduledUpdateGroupAction:8e86b655-b2e6-4410-8f29-b4f094d6871c:autoScalingGroupName/my-auto-scaling-group:scheduledActionName/my-scheduled-action",
 *       ScheduledActionName: "my-scheduled-action",
 *       StartTime: "2016-12-01T00:30:00Z",
 *       Time: "2016-12-01T00:30:00Z"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DescribeScheduledActionsCommand extends $Command
  .classBuilder<
    DescribeScheduledActionsCommandInput,
    DescribeScheduledActionsCommandOutput,
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
  .s("AutoScaling_2011_01_01", "DescribeScheduledActions", {})
  .n("AutoScalingClient", "DescribeScheduledActionsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeScheduledActionsCommand)
  .de(de_DescribeScheduledActionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeScheduledActionsType;
      output: ScheduledActionsType;
    };
    sdk: {
      input: DescribeScheduledActionsCommandInput;
      output: DescribeScheduledActionsCommandOutput;
    };
  };
}
