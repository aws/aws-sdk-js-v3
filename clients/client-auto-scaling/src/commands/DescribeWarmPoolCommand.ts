// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeWarmPoolAnswer, DescribeWarmPoolType } from "../models/models_0";
import { de_DescribeWarmPoolCommand, se_DescribeWarmPoolCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeWarmPoolCommand}.
 */
export interface DescribeWarmPoolCommandInput extends DescribeWarmPoolType {}
/**
 * @public
 *
 * The output of {@link DescribeWarmPoolCommand}.
 */
export interface DescribeWarmPoolCommandOutput extends DescribeWarmPoolAnswer, __MetadataBearer {}

/**
 * <p>Gets information about a warm pool and its instances.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-warm-pools.html">Warm pools for
 *                 Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, DescribeWarmPoolCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, DescribeWarmPoolCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const input = { // DescribeWarmPoolType
 *   AutoScalingGroupName: "STRING_VALUE", // required
 *   MaxRecords: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeWarmPoolCommand(input);
 * const response = await client.send(command);
 * // { // DescribeWarmPoolAnswer
 * //   WarmPoolConfiguration: { // WarmPoolConfiguration
 * //     MaxGroupPreparedCapacity: Number("int"),
 * //     MinSize: Number("int"),
 * //     PoolState: "Stopped" || "Running" || "Hibernated",
 * //     Status: "PendingDelete",
 * //     InstanceReusePolicy: { // InstanceReusePolicy
 * //       ReuseOnScaleIn: true || false,
 * //     },
 * //   },
 * //   Instances: [ // Instances
 * //     { // Instance
 * //       InstanceId: "STRING_VALUE", // required
 * //       InstanceType: "STRING_VALUE",
 * //       AvailabilityZone: "STRING_VALUE", // required
 * //       LifecycleState: "Pending" || "Pending:Wait" || "Pending:Proceed" || "Quarantined" || "InService" || "Terminating" || "Terminating:Wait" || "Terminating:Proceed" || "Terminated" || "Detaching" || "Detached" || "EnteringStandby" || "Standby" || "Warmed:Pending" || "Warmed:Pending:Wait" || "Warmed:Pending:Proceed" || "Warmed:Terminating" || "Warmed:Terminating:Wait" || "Warmed:Terminating:Proceed" || "Warmed:Terminated" || "Warmed:Stopped" || "Warmed:Running" || "Warmed:Hibernated", // required
 * //       HealthStatus: "STRING_VALUE", // required
 * //       LaunchConfigurationName: "STRING_VALUE",
 * //       LaunchTemplate: { // LaunchTemplateSpecification
 * //         LaunchTemplateId: "STRING_VALUE",
 * //         LaunchTemplateName: "STRING_VALUE",
 * //         Version: "STRING_VALUE",
 * //       },
 * //       ProtectedFromScaleIn: true || false, // required
 * //       WeightedCapacity: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeWarmPoolCommandInput - {@link DescribeWarmPoolCommandInput}
 * @returns {@link DescribeWarmPoolCommandOutput}
 * @see {@link DescribeWarmPoolCommandInput} for command's `input` shape.
 * @see {@link DescribeWarmPoolCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for AutoScalingClient's `config` shape.
 *
 * @throws {@link InvalidNextToken} (client fault)
 *  <p>The <code>NextToken</code> value is not valid.</p>
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
 */
export class DescribeWarmPoolCommand extends $Command
  .classBuilder<
    DescribeWarmPoolCommandInput,
    DescribeWarmPoolCommandOutput,
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
  .s("AutoScaling_2011_01_01", "DescribeWarmPool", {})
  .n("AutoScalingClient", "DescribeWarmPoolCommand")
  .f(void 0, void 0)
  .ser(se_DescribeWarmPoolCommand)
  .de(de_DescribeWarmPoolCommand)
  .build() {}
