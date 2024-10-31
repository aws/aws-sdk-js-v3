// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeInstanceRefreshesAnswer, DescribeInstanceRefreshesType } from "../models/models_0";
import { de_DescribeInstanceRefreshesCommand, se_DescribeInstanceRefreshesCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeInstanceRefreshesCommand}.
 */
export interface DescribeInstanceRefreshesCommandInput extends DescribeInstanceRefreshesType {}
/**
 * @public
 *
 * The output of {@link DescribeInstanceRefreshesCommand}.
 */
export interface DescribeInstanceRefreshesCommandOutput extends DescribeInstanceRefreshesAnswer, __MetadataBearer {}

/**
 * <p>Gets information about the instance refreshes for the specified Auto Scaling group from the
 *             previous six weeks.</p>
 *          <p>This operation is part of the <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-instance-refresh.html">instance refresh
 *                 feature</a> in Amazon EC2 Auto Scaling, which helps you update instances in your Auto Scaling group
 *             after you make configuration changes.</p>
 *          <p>To help you determine the status of an instance refresh, Amazon EC2 Auto Scaling returns information
 *             about the instance refreshes you previously initiated, including their status, start
 *             time, end time, the percentage of the instance refresh that is complete, and the number
 *             of instances remaining to update before the instance refresh is complete. If a rollback
 *             is initiated while an instance refresh is in progress, Amazon EC2 Auto Scaling also returns information
 *             about the rollback of the instance refresh.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, DescribeInstanceRefreshesCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, DescribeInstanceRefreshesCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const input = { // DescribeInstanceRefreshesType
 *   AutoScalingGroupName: "STRING_VALUE", // required
 *   InstanceRefreshIds: [ // InstanceRefreshIds
 *     "STRING_VALUE",
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxRecords: Number("int"),
 * };
 * const command = new DescribeInstanceRefreshesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeInstanceRefreshesAnswer
 * //   InstanceRefreshes: [ // InstanceRefreshes
 * //     { // InstanceRefresh
 * //       InstanceRefreshId: "STRING_VALUE",
 * //       AutoScalingGroupName: "STRING_VALUE",
 * //       Status: "Pending" || "InProgress" || "Successful" || "Failed" || "Cancelling" || "Cancelled" || "RollbackInProgress" || "RollbackFailed" || "RollbackSuccessful" || "Baking",
 * //       StatusReason: "STRING_VALUE",
 * //       StartTime: new Date("TIMESTAMP"),
 * //       EndTime: new Date("TIMESTAMP"),
 * //       PercentageComplete: Number("int"),
 * //       InstancesToUpdate: Number("int"),
 * //       ProgressDetails: { // InstanceRefreshProgressDetails
 * //         LivePoolProgress: { // InstanceRefreshLivePoolProgress
 * //           PercentageComplete: Number("int"),
 * //           InstancesToUpdate: Number("int"),
 * //         },
 * //         WarmPoolProgress: { // InstanceRefreshWarmPoolProgress
 * //           PercentageComplete: Number("int"),
 * //           InstancesToUpdate: Number("int"),
 * //         },
 * //       },
 * //       Preferences: { // RefreshPreferences
 * //         MinHealthyPercentage: Number("int"),
 * //         InstanceWarmup: Number("int"),
 * //         CheckpointPercentages: [ // CheckpointPercentages
 * //           Number("int"),
 * //         ],
 * //         CheckpointDelay: Number("int"),
 * //         SkipMatching: true || false,
 * //         AutoRollback: true || false,
 * //         ScaleInProtectedInstances: "Refresh" || "Ignore" || "Wait",
 * //         StandbyInstances: "Terminate" || "Ignore" || "Wait",
 * //         AlarmSpecification: { // AlarmSpecification
 * //           Alarms: [ // AlarmList
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //         MaxHealthyPercentage: Number("int"),
 * //         BakeTime: Number("int"),
 * //       },
 * //       DesiredConfiguration: { // DesiredConfiguration
 * //         LaunchTemplate: { // LaunchTemplateSpecification
 * //           LaunchTemplateId: "STRING_VALUE",
 * //           LaunchTemplateName: "STRING_VALUE",
 * //           Version: "STRING_VALUE",
 * //         },
 * //         MixedInstancesPolicy: { // MixedInstancesPolicy
 * //           LaunchTemplate: { // LaunchTemplate
 * //             LaunchTemplateSpecification: {
 * //               LaunchTemplateId: "STRING_VALUE",
 * //               LaunchTemplateName: "STRING_VALUE",
 * //               Version: "STRING_VALUE",
 * //             },
 * //             Overrides: [ // Overrides
 * //               { // LaunchTemplateOverrides
 * //                 InstanceType: "STRING_VALUE",
 * //                 WeightedCapacity: "STRING_VALUE",
 * //                 LaunchTemplateSpecification: "<LaunchTemplateSpecification>",
 * //                 InstanceRequirements: { // InstanceRequirements
 * //                   VCpuCount: { // VCpuCountRequest
 * //                     Min: Number("int"), // required
 * //                     Max: Number("int"),
 * //                   },
 * //                   MemoryMiB: { // MemoryMiBRequest
 * //                     Min: Number("int"), // required
 * //                     Max: Number("int"),
 * //                   },
 * //                   CpuManufacturers: [ // CpuManufacturers
 * //                     "intel" || "amd" || "amazon-web-services",
 * //                   ],
 * //                   MemoryGiBPerVCpu: { // MemoryGiBPerVCpuRequest
 * //                     Min: Number("double"),
 * //                     Max: Number("double"),
 * //                   },
 * //                   ExcludedInstanceTypes: [ // ExcludedInstanceTypes
 * //                     "STRING_VALUE",
 * //                   ],
 * //                   InstanceGenerations: [ // InstanceGenerations
 * //                     "current" || "previous",
 * //                   ],
 * //                   SpotMaxPricePercentageOverLowestPrice: Number("int"),
 * //                   MaxSpotPriceAsPercentageOfOptimalOnDemandPrice: Number("int"),
 * //                   OnDemandMaxPricePercentageOverLowestPrice: Number("int"),
 * //                   BareMetal: "included" || "excluded" || "required",
 * //                   BurstablePerformance: "included" || "excluded" || "required",
 * //                   RequireHibernateSupport: true || false,
 * //                   NetworkInterfaceCount: { // NetworkInterfaceCountRequest
 * //                     Min: Number("int"),
 * //                     Max: Number("int"),
 * //                   },
 * //                   LocalStorage: "included" || "excluded" || "required",
 * //                   LocalStorageTypes: [ // LocalStorageTypes
 * //                     "hdd" || "ssd",
 * //                   ],
 * //                   TotalLocalStorageGB: { // TotalLocalStorageGBRequest
 * //                     Min: Number("double"),
 * //                     Max: Number("double"),
 * //                   },
 * //                   BaselineEbsBandwidthMbps: { // BaselineEbsBandwidthMbpsRequest
 * //                     Min: Number("int"),
 * //                     Max: Number("int"),
 * //                   },
 * //                   AcceleratorTypes: [ // AcceleratorTypes
 * //                     "gpu" || "fpga" || "inference",
 * //                   ],
 * //                   AcceleratorCount: { // AcceleratorCountRequest
 * //                     Min: Number("int"),
 * //                     Max: Number("int"),
 * //                   },
 * //                   AcceleratorManufacturers: [ // AcceleratorManufacturers
 * //                     "nvidia" || "amd" || "amazon-web-services" || "xilinx",
 * //                   ],
 * //                   AcceleratorNames: [ // AcceleratorNames
 * //                     "a100" || "v100" || "k80" || "t4" || "m60" || "radeon-pro-v520" || "vu9p",
 * //                   ],
 * //                   AcceleratorTotalMemoryMiB: { // AcceleratorTotalMemoryMiBRequest
 * //                     Min: Number("int"),
 * //                     Max: Number("int"),
 * //                   },
 * //                   NetworkBandwidthGbps: { // NetworkBandwidthGbpsRequest
 * //                     Min: Number("double"),
 * //                     Max: Number("double"),
 * //                   },
 * //                   AllowedInstanceTypes: [ // AllowedInstanceTypes
 * //                     "STRING_VALUE",
 * //                   ],
 * //                 },
 * //               },
 * //             ],
 * //           },
 * //           InstancesDistribution: { // InstancesDistribution
 * //             OnDemandAllocationStrategy: "STRING_VALUE",
 * //             OnDemandBaseCapacity: Number("int"),
 * //             OnDemandPercentageAboveBaseCapacity: Number("int"),
 * //             SpotAllocationStrategy: "STRING_VALUE",
 * //             SpotInstancePools: Number("int"),
 * //             SpotMaxPrice: "STRING_VALUE",
 * //           },
 * //         },
 * //       },
 * //       RollbackDetails: { // RollbackDetails
 * //         RollbackReason: "STRING_VALUE",
 * //         RollbackStartTime: new Date("TIMESTAMP"),
 * //         PercentageCompleteOnRollback: Number("int"),
 * //         InstancesToUpdateOnRollback: Number("int"),
 * //         ProgressDetailsOnRollback: {
 * //           LivePoolProgress: {
 * //             PercentageComplete: Number("int"),
 * //             InstancesToUpdate: Number("int"),
 * //           },
 * //           WarmPoolProgress: {
 * //             PercentageComplete: Number("int"),
 * //             InstancesToUpdate: Number("int"),
 * //           },
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeInstanceRefreshesCommandInput - {@link DescribeInstanceRefreshesCommandInput}
 * @returns {@link DescribeInstanceRefreshesCommandOutput}
 * @see {@link DescribeInstanceRefreshesCommandInput} for command's `input` shape.
 * @see {@link DescribeInstanceRefreshesCommandOutput} for command's `response` shape.
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
 * @public
 * @example To list instance refreshes
 * ```javascript
 * // This example describes the instance refreshes for the specified Auto Scaling group.
 * const input = {
 *   "AutoScalingGroupName": "my-auto-scaling-group"
 * };
 * const command = new DescribeInstanceRefreshesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "InstanceRefreshes": [
 *     {
 *       "AutoScalingGroupName": "my-auto-scaling-group",
 *       "InstanceRefreshId": "08b91cf7-8fa6-48af-b6a6-d227f40f1b9b",
 *       "InstancesToUpdate": 0,
 *       "PercentageComplete": 50,
 *       "Preferences": {
 *         "AlarmSpecification": {
 *           "Alarms": [
 *             "my-alarm"
 *           ]
 *         },
 *         "AutoRollback": true,
 *         "InstanceWarmup": 200,
 *         "MaxHealthyPercentage": 120,
 *         "MinHealthyPercentage": 90,
 *         "ScaleInProtectedInstances": "Ignore",
 *         "SkipMatching": false,
 *         "StandbyInstances": "Ignore"
 *       },
 *       "StartTime": "2023-06-13T16:46:52+00:00",
 *       "Status": "InProgress",
 *       "StatusReason": "Waiting for instances to warm up before continuing. For example: i-0645704820a8e83ff is warming up."
 *     },
 *     {
 *       "AutoScalingGroupName": "my-auto-scaling-group",
 *       "EndTime": "2023-06-02T13:59:45+00:00",
 *       "InstanceRefreshId": "0e151305-1e57-4a32-a256-1fd14157c5ec",
 *       "InstancesToUpdate": 0,
 *       "PercentageComplete": 100,
 *       "Preferences": {
 *         "AlarmSpecification": {
 *           "Alarms": [
 *             "my-alarm"
 *           ]
 *         },
 *         "AutoRollback": true,
 *         "InstanceWarmup": 200,
 *         "MaxHealthyPercentage": 120,
 *         "MinHealthyPercentage": 90,
 *         "ScaleInProtectedInstances": "Ignore",
 *         "SkipMatching": false,
 *         "StandbyInstances": "Ignore"
 *       },
 *       "StartTime": "2023-06-02T13:53:37+00:00",
 *       "Status": "Successful"
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-list-instance-refreshes-1592959593746
 * ```
 *
 */
export class DescribeInstanceRefreshesCommand extends $Command
  .classBuilder<
    DescribeInstanceRefreshesCommandInput,
    DescribeInstanceRefreshesCommandOutput,
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
  .s("AutoScaling_2011_01_01", "DescribeInstanceRefreshes", {})
  .n("AutoScalingClient", "DescribeInstanceRefreshesCommand")
  .f(void 0, void 0)
  .ser(se_DescribeInstanceRefreshesCommand)
  .de(de_DescribeInstanceRefreshesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeInstanceRefreshesType;
      output: DescribeInstanceRefreshesAnswer;
    };
    sdk: {
      input: DescribeInstanceRefreshesCommandInput;
      output: DescribeInstanceRefreshesCommandOutput;
    };
  };
}
