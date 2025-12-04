// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { StartInstanceRefreshAnswer, StartInstanceRefreshType } from "../models/models_0";
import { StartInstanceRefresh } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartInstanceRefreshCommand}.
 */
export interface StartInstanceRefreshCommandInput extends StartInstanceRefreshType {}
/**
 * @public
 *
 * The output of {@link StartInstanceRefreshCommand}.
 */
export interface StartInstanceRefreshCommandOutput extends StartInstanceRefreshAnswer, __MetadataBearer {}

/**
 * <p>Starts an instance refresh.</p>
 *          <p>This operation is part of the <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-instance-refresh.html">instance refresh
 *                 feature</a> in Amazon EC2 Auto Scaling, which helps you update instances in your Auto Scaling group.
 *             This feature is helpful, for example, when you have a new AMI or a new user data script.
 *             You just need to create a new launch template that specifies the new AMI or user data
 *             script. Then start an instance refresh to immediately begin the process of updating
 *             instances in the group. </p>
 *          <p>If successful, the request's response contains a unique ID that you can use to track
 *             the progress of the instance refresh. To query its status, call the <a href="https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_DescribeInstanceRefreshes.html">DescribeInstanceRefreshes</a> API.
 *             To describe the instance refreshes that
 *             have already run, call the <a href="https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_DescribeInstanceRefreshes.html">DescribeInstanceRefreshes</a> API. To cancel an
 *             instance refresh that is in progress, use the <a href="https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_CancelInstanceRefresh.html">CancelInstanceRefresh</a>
 *             API. </p>
 *          <p>An instance refresh might fail for several reasons, such as EC2 launch failures,
 *             misconfigured health checks, or not ignoring or allowing the termination of instances
 *             that are in <code>Standby</code> state or protected from scale in. You can monitor for
 *             failed EC2 launches using the scaling activities. To find the scaling activities, call
 *             the <a href="https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_DescribeScalingActivities.html">DescribeScalingActivities</a> API.</p>
 *          <p>If you enable auto rollback, your Auto Scaling group will be rolled back automatically when
 *             the instance refresh fails. You can enable this feature before starting an instance
 *             refresh by specifying the <code>AutoRollback</code> property in the instance refresh
 *             preferences. Otherwise, to roll back an instance refresh before it finishes, use the
 *             <a href="https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_RollbackInstanceRefresh.html">RollbackInstanceRefresh</a> API. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, StartInstanceRefreshCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, StartInstanceRefreshCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * // import type { AutoScalingClientConfig } from "@aws-sdk/client-auto-scaling";
 * const config = {}; // type is AutoScalingClientConfig
 * const client = new AutoScalingClient(config);
 * const input = { // StartInstanceRefreshType
 *   AutoScalingGroupName: "STRING_VALUE", // required
 *   Strategy: "Rolling" || "ReplaceRootVolume",
 *   DesiredConfiguration: { // DesiredConfiguration
 *     LaunchTemplate: { // LaunchTemplateSpecification
 *       LaunchTemplateId: "STRING_VALUE",
 *       LaunchTemplateName: "STRING_VALUE",
 *       Version: "STRING_VALUE",
 *     },
 *     MixedInstancesPolicy: { // MixedInstancesPolicy
 *       LaunchTemplate: { // LaunchTemplate
 *         LaunchTemplateSpecification: {
 *           LaunchTemplateId: "STRING_VALUE",
 *           LaunchTemplateName: "STRING_VALUE",
 *           Version: "STRING_VALUE",
 *         },
 *         Overrides: [ // Overrides
 *           { // LaunchTemplateOverrides
 *             InstanceType: "STRING_VALUE",
 *             WeightedCapacity: "STRING_VALUE",
 *             LaunchTemplateSpecification: "<LaunchTemplateSpecification>",
 *             InstanceRequirements: { // InstanceRequirements
 *               VCpuCount: { // VCpuCountRequest
 *                 Min: Number("int"), // required
 *                 Max: Number("int"),
 *               },
 *               MemoryMiB: { // MemoryMiBRequest
 *                 Min: Number("int"), // required
 *                 Max: Number("int"),
 *               },
 *               CpuManufacturers: [ // CpuManufacturers
 *                 "intel" || "amd" || "amazon-web-services" || "apple",
 *               ],
 *               MemoryGiBPerVCpu: { // MemoryGiBPerVCpuRequest
 *                 Min: Number("double"),
 *                 Max: Number("double"),
 *               },
 *               ExcludedInstanceTypes: [ // ExcludedInstanceTypes
 *                 "STRING_VALUE",
 *               ],
 *               InstanceGenerations: [ // InstanceGenerations
 *                 "current" || "previous",
 *               ],
 *               SpotMaxPricePercentageOverLowestPrice: Number("int"),
 *               MaxSpotPriceAsPercentageOfOptimalOnDemandPrice: Number("int"),
 *               OnDemandMaxPricePercentageOverLowestPrice: Number("int"),
 *               BareMetal: "included" || "excluded" || "required",
 *               BurstablePerformance: "included" || "excluded" || "required",
 *               RequireHibernateSupport: true || false,
 *               NetworkInterfaceCount: { // NetworkInterfaceCountRequest
 *                 Min: Number("int"),
 *                 Max: Number("int"),
 *               },
 *               LocalStorage: "included" || "excluded" || "required",
 *               LocalStorageTypes: [ // LocalStorageTypes
 *                 "hdd" || "ssd",
 *               ],
 *               TotalLocalStorageGB: { // TotalLocalStorageGBRequest
 *                 Min: Number("double"),
 *                 Max: Number("double"),
 *               },
 *               BaselineEbsBandwidthMbps: { // BaselineEbsBandwidthMbpsRequest
 *                 Min: Number("int"),
 *                 Max: Number("int"),
 *               },
 *               AcceleratorTypes: [ // AcceleratorTypes
 *                 "gpu" || "fpga" || "inference",
 *               ],
 *               AcceleratorCount: { // AcceleratorCountRequest
 *                 Min: Number("int"),
 *                 Max: Number("int"),
 *               },
 *               AcceleratorManufacturers: [ // AcceleratorManufacturers
 *                 "nvidia" || "amd" || "amazon-web-services" || "xilinx",
 *               ],
 *               AcceleratorNames: [ // AcceleratorNames
 *                 "a100" || "v100" || "k80" || "t4" || "m60" || "radeon-pro-v520" || "vu9p",
 *               ],
 *               AcceleratorTotalMemoryMiB: { // AcceleratorTotalMemoryMiBRequest
 *                 Min: Number("int"),
 *                 Max: Number("int"),
 *               },
 *               NetworkBandwidthGbps: { // NetworkBandwidthGbpsRequest
 *                 Min: Number("double"),
 *                 Max: Number("double"),
 *               },
 *               AllowedInstanceTypes: [ // AllowedInstanceTypes
 *                 "STRING_VALUE",
 *               ],
 *               BaselinePerformanceFactors: { // BaselinePerformanceFactorsRequest
 *                 Cpu: { // CpuPerformanceFactorRequest
 *                   References: [ // PerformanceFactorReferenceSetRequest
 *                     { // PerformanceFactorReferenceRequest
 *                       InstanceFamily: "STRING_VALUE",
 *                     },
 *                   ],
 *                 },
 *               },
 *             },
 *             ImageId: "STRING_VALUE",
 *           },
 *         ],
 *       },
 *       InstancesDistribution: { // InstancesDistribution
 *         OnDemandAllocationStrategy: "STRING_VALUE",
 *         OnDemandBaseCapacity: Number("int"),
 *         OnDemandPercentageAboveBaseCapacity: Number("int"),
 *         SpotAllocationStrategy: "STRING_VALUE",
 *         SpotInstancePools: Number("int"),
 *         SpotMaxPrice: "STRING_VALUE",
 *       },
 *     },
 *   },
 *   Preferences: { // RefreshPreferences
 *     MinHealthyPercentage: Number("int"),
 *     InstanceWarmup: Number("int"),
 *     CheckpointPercentages: [ // CheckpointPercentages
 *       Number("int"),
 *     ],
 *     CheckpointDelay: Number("int"),
 *     SkipMatching: true || false,
 *     AutoRollback: true || false,
 *     ScaleInProtectedInstances: "Refresh" || "Ignore" || "Wait",
 *     StandbyInstances: "Terminate" || "Ignore" || "Wait",
 *     AlarmSpecification: { // AlarmSpecification
 *       Alarms: [ // AlarmList
 *         "STRING_VALUE",
 *       ],
 *     },
 *     MaxHealthyPercentage: Number("int"),
 *     BakeTime: Number("int"),
 *   },
 * };
 * const command = new StartInstanceRefreshCommand(input);
 * const response = await client.send(command);
 * // { // StartInstanceRefreshAnswer
 * //   InstanceRefreshId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartInstanceRefreshCommandInput - {@link StartInstanceRefreshCommandInput}
 * @returns {@link StartInstanceRefreshCommandOutput}
 * @see {@link StartInstanceRefreshCommandInput} for command's `input` shape.
 * @see {@link StartInstanceRefreshCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for AutoScalingClient's `config` shape.
 *
 * @throws {@link InstanceRefreshInProgressFault} (client fault)
 *  <p>The request failed because an active instance refresh already exists for the specified
 *             Auto Scaling group.</p>
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
 * @example To start an instance refresh
 * ```javascript
 * // This example starts an instance refresh for the specified Auto Scaling group.
 * const input = {
 *   AutoScalingGroupName: "my-auto-scaling-group",
 *   DesiredConfiguration: {
 *     LaunchTemplate: {
 *       LaunchTemplateName: "my-template-for-auto-scaling",
 *       Version: "$Latest"
 *     }
 *   },
 *   Preferences: {
 *     AlarmSpecification: {
 *       Alarms: [
 *         "my-alarm"
 *       ]
 *     },
 *     AutoRollback: true,
 *     InstanceWarmup: 200,
 *     MaxHealthyPercentage: 120,
 *     MinHealthyPercentage: 90
 *   }
 * };
 * const command = new StartInstanceRefreshCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   InstanceRefreshId: "08b91cf7-8fa6-48af-b6a6-d227f40f1b9b"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class StartInstanceRefreshCommand extends $Command
  .classBuilder<
    StartInstanceRefreshCommandInput,
    StartInstanceRefreshCommandOutput,
    AutoScalingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AutoScalingClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AutoScaling_2011_01_01", "StartInstanceRefresh", {})
  .n("AutoScalingClient", "StartInstanceRefreshCommand")
  .sc(StartInstanceRefresh)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartInstanceRefreshType;
      output: StartInstanceRefreshAnswer;
    };
    sdk: {
      input: StartInstanceRefreshCommandInput;
      output: StartInstanceRefreshCommandOutput;
    };
  };
}
