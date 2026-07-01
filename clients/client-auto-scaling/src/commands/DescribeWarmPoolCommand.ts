// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeWarmPoolAnswer, DescribeWarmPoolType } from "../models/models_0";
import { DescribeWarmPool$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * // import type { AutoScalingClientConfig } from "@aws-sdk/client-auto-scaling";
 * const config = {}; // type is AutoScalingClientConfig
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
 * //       AvailabilityZoneId: "STRING_VALUE",
 * //       LifecycleState: "Pending" || "Pending:Wait" || "Pending:Proceed" || "Quarantined" || "InService" || "Terminating" || "Terminating:Wait" || "Terminating:Proceed" || "Terminating:Retained" || "Terminated" || "Detaching" || "Detached" || "EnteringStandby" || "Standby" || "ReplacingRootVolume" || "ReplacingRootVolume:Wait" || "ReplacingRootVolume:Proceed" || "RootVolumeReplaced" || "Warmed:Pending" || "Warmed:Pending:Wait" || "Warmed:Pending:Proceed" || "Warmed:Pending:Retained" || "Warmed:Terminating" || "Warmed:Terminating:Wait" || "Warmed:Terminating:Proceed" || "Warmed:Terminating:Retained" || "Warmed:Terminated" || "Warmed:Stopped" || "Warmed:Running" || "Warmed:Hibernated", // required
 * //       HealthStatus: "STRING_VALUE", // required
 * //       LaunchConfigurationName: "STRING_VALUE",
 * //       LaunchTemplate: { // LaunchTemplateSpecification
 * //         LaunchTemplateId: "STRING_VALUE",
 * //         LaunchTemplateName: "STRING_VALUE",
 * //         Version: "STRING_VALUE",
 * //       },
 * //       ImageId: "STRING_VALUE",
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
 *
 * @public
 */
export class DescribeWarmPoolCommand extends command<DescribeWarmPoolCommandInput, DescribeWarmPoolCommandOutput>(
  _ep0,
  _mw0,
  "DescribeWarmPool",
  DescribeWarmPool$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeWarmPoolType;
      output: DescribeWarmPoolAnswer;
    };
    sdk: {
      input: DescribeWarmPoolCommandInput;
      output: DescribeWarmPoolCommandOutput;
    };
  };
}
