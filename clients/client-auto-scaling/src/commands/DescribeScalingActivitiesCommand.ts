// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ActivitiesType, DescribeScalingActivitiesType } from "../models/models_0";
import { de_DescribeScalingActivitiesCommand, se_DescribeScalingActivitiesCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeScalingActivitiesCommand}.
 */
export interface DescribeScalingActivitiesCommandInput extends DescribeScalingActivitiesType {}
/**
 * @public
 *
 * The output of {@link DescribeScalingActivitiesCommand}.
 */
export interface DescribeScalingActivitiesCommandOutput extends ActivitiesType, __MetadataBearer {}

/**
 * <p>Gets information about the scaling activities in the account and Region.</p>
 *          <p>When scaling events occur, you see a record of the scaling activity in the scaling
 *             activities. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-verify-scaling-activity.html">Verify a scaling
 *                 activity for an Auto Scaling group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
 *          <p>If the scaling event succeeds, the value of the <code>StatusCode</code> element in the
 *             response is <code>Successful</code>. If an attempt to launch instances failed, the
 *                 <code>StatusCode</code> value is <code>Failed</code> or <code>Cancelled</code> and
 *             the <code>StatusMessage</code> element in the response indicates the cause of the
 *             failure. For help interpreting the <code>StatusMessage</code>, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/CHAP_Troubleshooting.html">Troubleshooting Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, DescribeScalingActivitiesCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, DescribeScalingActivitiesCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * // import type { AutoScalingClientConfig } from "@aws-sdk/client-auto-scaling";
 * const config = {}; // type is AutoScalingClientConfig
 * const client = new AutoScalingClient(config);
 * const input = { // DescribeScalingActivitiesType
 *   ActivityIds: [ // ActivityIds
 *     "STRING_VALUE",
 *   ],
 *   AutoScalingGroupName: "STRING_VALUE",
 *   IncludeDeletedGroups: true || false,
 *   MaxRecords: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeScalingActivitiesCommand(input);
 * const response = await client.send(command);
 * // { // ActivitiesType
 * //   Activities: [ // Activities // required
 * //     { // Activity
 * //       ActivityId: "STRING_VALUE", // required
 * //       AutoScalingGroupName: "STRING_VALUE", // required
 * //       Description: "STRING_VALUE",
 * //       Cause: "STRING_VALUE", // required
 * //       StartTime: new Date("TIMESTAMP"), // required
 * //       EndTime: new Date("TIMESTAMP"),
 * //       StatusCode: "PendingSpotBidPlacement" || "WaitingForSpotInstanceRequestId" || "WaitingForSpotInstanceId" || "WaitingForInstanceId" || "PreInService" || "InProgress" || "WaitingForELBConnectionDraining" || "MidLifecycleAction" || "WaitingForInstanceWarmup" || "Successful" || "Failed" || "Cancelled" || "WaitingForConnectionDraining", // required
 * //       StatusMessage: "STRING_VALUE",
 * //       Progress: Number("int"),
 * //       Details: "STRING_VALUE",
 * //       AutoScalingGroupState: "STRING_VALUE",
 * //       AutoScalingGroupARN: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeScalingActivitiesCommandInput - {@link DescribeScalingActivitiesCommandInput}
 * @returns {@link DescribeScalingActivitiesCommandOutput}
 * @see {@link DescribeScalingActivitiesCommandInput} for command's `input` shape.
 * @see {@link DescribeScalingActivitiesCommandOutput} for command's `response` shape.
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
 * @example To describe the scaling activities for an Auto Scaling group
 * ```javascript
 * // This example describes the scaling activities for the specified Auto Scaling group.
 * const input = {
 *   AutoScalingGroupName: "my-auto-scaling-group"
 * };
 * const command = new DescribeScalingActivitiesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Activities: [
 *     {
 *       ActivityId: "f9f2d65b-f1f2-43e7-b46d-d86756459699",
 *       AutoScalingGroupARN: "arn:aws:autoscaling:us-east-1:123456789012:autoScalingGroup:12345678-1234-1234-1234-123456789012:autoScalingGroupName/my-auto-scaling-group",
 *       AutoScalingGroupName: "my-auto-scaling-group",
 *       Cause: "At 2013-08-19T20:53:25Z a user request created an AutoScalingGroup changing the desired capacity from 0 to 1.  At 2013-08-19T20:53:29Z an instance was started in response to a difference between desired and actual capacity, increasing the capacity from 0 to 1.",
 *       Description: "Launching a new EC2 instance: i-4ba0837f",
 *       Details: "details",
 *       EndTime: "2013-08-19T20:54:02Z",
 *       Progress: 100,
 *       StartTime: "2013-08-19T20:53:29.930Z",
 *       StatusCode: "Successful"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DescribeScalingActivitiesCommand extends $Command
  .classBuilder<
    DescribeScalingActivitiesCommandInput,
    DescribeScalingActivitiesCommandOutput,
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
  .s("AutoScaling_2011_01_01", "DescribeScalingActivities", {})
  .n("AutoScalingClient", "DescribeScalingActivitiesCommand")
  .f(void 0, void 0)
  .ser(se_DescribeScalingActivitiesCommand)
  .de(de_DescribeScalingActivitiesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeScalingActivitiesType;
      output: ActivitiesType;
    };
    sdk: {
      input: DescribeScalingActivitiesCommandInput;
      output: DescribeScalingActivitiesCommandOutput;
    };
  };
}
