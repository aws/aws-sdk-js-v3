// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateCapacityProviderRequest, UpdateCapacityProviderResponse } from "../models/models_1";
import { UpdateCapacityProvider } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateCapacityProviderCommand}.
 */
export interface UpdateCapacityProviderCommandInput extends UpdateCapacityProviderRequest {}
/**
 * @public
 *
 * The output of {@link UpdateCapacityProviderCommand}.
 */
export interface UpdateCapacityProviderCommandOutput extends UpdateCapacityProviderResponse, __MetadataBearer {}

/**
 * <p>Modifies the parameters for a capacity provider.</p>
 *          <p>These changes only apply to new Amazon ECS Managed Instances, or EC2 instances, not
 * 			existing ones.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, UpdateCapacityProviderCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, UpdateCapacityProviderCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * // import type { ECSClientConfig } from "@aws-sdk/client-ecs";
 * const config = {}; // type is ECSClientConfig
 * const client = new ECSClient(config);
 * const input = { // UpdateCapacityProviderRequest
 *   name: "STRING_VALUE", // required
 *   cluster: "STRING_VALUE",
 *   autoScalingGroupProvider: { // AutoScalingGroupProviderUpdate
 *     managedScaling: { // ManagedScaling
 *       status: "ENABLED" || "DISABLED",
 *       targetCapacity: Number("int"),
 *       minimumScalingStepSize: Number("int"),
 *       maximumScalingStepSize: Number("int"),
 *       instanceWarmupPeriod: Number("int"),
 *     },
 *     managedTerminationProtection: "ENABLED" || "DISABLED",
 *     managedDraining: "ENABLED" || "DISABLED",
 *   },
 *   managedInstancesProvider: { // UpdateManagedInstancesProviderConfiguration
 *     infrastructureRoleArn: "STRING_VALUE", // required
 *     instanceLaunchTemplate: { // InstanceLaunchTemplateUpdate
 *       ec2InstanceProfileArn: "STRING_VALUE",
 *       networkConfiguration: { // ManagedInstancesNetworkConfiguration
 *         subnets: [ // StringList
 *           "STRING_VALUE",
 *         ],
 *         securityGroups: [
 *           "STRING_VALUE",
 *         ],
 *       },
 *       storageConfiguration: { // ManagedInstancesStorageConfiguration
 *         storageSizeGiB: Number("int"),
 *       },
 *       monitoring: "BASIC" || "DETAILED",
 *       instanceRequirements: { // InstanceRequirementsRequest
 *         vCpuCount: { // VCpuCountRangeRequest
 *           min: Number("int"), // required
 *           max: Number("int"),
 *         },
 *         memoryMiB: { // MemoryMiBRequest
 *           min: Number("int"), // required
 *           max: Number("int"),
 *         },
 *         cpuManufacturers: [ // CpuManufacturerSet
 *           "intel" || "amd" || "amazon-web-services",
 *         ],
 *         memoryGiBPerVCpu: { // MemoryGiBPerVCpuRequest
 *           min: Number("double"),
 *           max: Number("double"),
 *         },
 *         excludedInstanceTypes: [ // ExcludedInstanceTypeSet
 *           "STRING_VALUE",
 *         ],
 *         instanceGenerations: [ // InstanceGenerationSet
 *           "current" || "previous",
 *         ],
 *         spotMaxPricePercentageOverLowestPrice: Number("int"),
 *         onDemandMaxPricePercentageOverLowestPrice: Number("int"),
 *         bareMetal: "included" || "required" || "excluded",
 *         burstablePerformance: "included" || "required" || "excluded",
 *         requireHibernateSupport: true || false,
 *         networkInterfaceCount: { // NetworkInterfaceCountRequest
 *           min: Number("int"),
 *           max: Number("int"),
 *         },
 *         localStorage: "included" || "required" || "excluded",
 *         localStorageTypes: [ // LocalStorageTypeSet
 *           "hdd" || "ssd",
 *         ],
 *         totalLocalStorageGB: { // TotalLocalStorageGBRequest
 *           min: Number("double"),
 *           max: Number("double"),
 *         },
 *         baselineEbsBandwidthMbps: { // BaselineEbsBandwidthMbpsRequest
 *           min: Number("int"),
 *           max: Number("int"),
 *         },
 *         acceleratorTypes: [ // AcceleratorTypeSet
 *           "gpu" || "fpga" || "inference",
 *         ],
 *         acceleratorCount: { // AcceleratorCountRequest
 *           min: Number("int"),
 *           max: Number("int"),
 *         },
 *         acceleratorManufacturers: [ // AcceleratorManufacturerSet
 *           "amazon-web-services" || "amd" || "nvidia" || "xilinx" || "habana",
 *         ],
 *         acceleratorNames: [ // AcceleratorNameSet
 *           "a100" || "inferentia" || "k520" || "k80" || "m60" || "radeon-pro-v520" || "t4" || "vu9p" || "v100" || "a10g" || "h100" || "t4g",
 *         ],
 *         acceleratorTotalMemoryMiB: { // AcceleratorTotalMemoryMiBRequest
 *           min: Number("int"),
 *           max: Number("int"),
 *         },
 *         networkBandwidthGbps: { // NetworkBandwidthGbpsRequest
 *           min: Number("double"),
 *           max: Number("double"),
 *         },
 *         allowedInstanceTypes: [ // AllowedInstanceTypeSet
 *           "STRING_VALUE",
 *         ],
 *         maxSpotPriceAsPercentageOfOptimalOnDemandPrice: Number("int"),
 *       },
 *     },
 *     propagateTags: "CAPACITY_PROVIDER" || "NONE",
 *   },
 * };
 * const command = new UpdateCapacityProviderCommand(input);
 * const response = await client.send(command);
 * // { // UpdateCapacityProviderResponse
 * //   capacityProvider: { // CapacityProvider
 * //     capacityProviderArn: "STRING_VALUE",
 * //     name: "STRING_VALUE",
 * //     cluster: "STRING_VALUE",
 * //     status: "PROVISIONING" || "ACTIVE" || "DEPROVISIONING" || "INACTIVE",
 * //     autoScalingGroupProvider: { // AutoScalingGroupProvider
 * //       autoScalingGroupArn: "STRING_VALUE", // required
 * //       managedScaling: { // ManagedScaling
 * //         status: "ENABLED" || "DISABLED",
 * //         targetCapacity: Number("int"),
 * //         minimumScalingStepSize: Number("int"),
 * //         maximumScalingStepSize: Number("int"),
 * //         instanceWarmupPeriod: Number("int"),
 * //       },
 * //       managedTerminationProtection: "ENABLED" || "DISABLED",
 * //       managedDraining: "ENABLED" || "DISABLED",
 * //     },
 * //     managedInstancesProvider: { // ManagedInstancesProvider
 * //       infrastructureRoleArn: "STRING_VALUE",
 * //       instanceLaunchTemplate: { // InstanceLaunchTemplate
 * //         ec2InstanceProfileArn: "STRING_VALUE", // required
 * //         networkConfiguration: { // ManagedInstancesNetworkConfiguration
 * //           subnets: [ // StringList
 * //             "STRING_VALUE",
 * //           ],
 * //           securityGroups: [
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //         storageConfiguration: { // ManagedInstancesStorageConfiguration
 * //           storageSizeGiB: Number("int"),
 * //         },
 * //         monitoring: "BASIC" || "DETAILED",
 * //         instanceRequirements: { // InstanceRequirementsRequest
 * //           vCpuCount: { // VCpuCountRangeRequest
 * //             min: Number("int"), // required
 * //             max: Number("int"),
 * //           },
 * //           memoryMiB: { // MemoryMiBRequest
 * //             min: Number("int"), // required
 * //             max: Number("int"),
 * //           },
 * //           cpuManufacturers: [ // CpuManufacturerSet
 * //             "intel" || "amd" || "amazon-web-services",
 * //           ],
 * //           memoryGiBPerVCpu: { // MemoryGiBPerVCpuRequest
 * //             min: Number("double"),
 * //             max: Number("double"),
 * //           },
 * //           excludedInstanceTypes: [ // ExcludedInstanceTypeSet
 * //             "STRING_VALUE",
 * //           ],
 * //           instanceGenerations: [ // InstanceGenerationSet
 * //             "current" || "previous",
 * //           ],
 * //           spotMaxPricePercentageOverLowestPrice: Number("int"),
 * //           onDemandMaxPricePercentageOverLowestPrice: Number("int"),
 * //           bareMetal: "included" || "required" || "excluded",
 * //           burstablePerformance: "included" || "required" || "excluded",
 * //           requireHibernateSupport: true || false,
 * //           networkInterfaceCount: { // NetworkInterfaceCountRequest
 * //             min: Number("int"),
 * //             max: Number("int"),
 * //           },
 * //           localStorage: "included" || "required" || "excluded",
 * //           localStorageTypes: [ // LocalStorageTypeSet
 * //             "hdd" || "ssd",
 * //           ],
 * //           totalLocalStorageGB: { // TotalLocalStorageGBRequest
 * //             min: Number("double"),
 * //             max: Number("double"),
 * //           },
 * //           baselineEbsBandwidthMbps: { // BaselineEbsBandwidthMbpsRequest
 * //             min: Number("int"),
 * //             max: Number("int"),
 * //           },
 * //           acceleratorTypes: [ // AcceleratorTypeSet
 * //             "gpu" || "fpga" || "inference",
 * //           ],
 * //           acceleratorCount: { // AcceleratorCountRequest
 * //             min: Number("int"),
 * //             max: Number("int"),
 * //           },
 * //           acceleratorManufacturers: [ // AcceleratorManufacturerSet
 * //             "amazon-web-services" || "amd" || "nvidia" || "xilinx" || "habana",
 * //           ],
 * //           acceleratorNames: [ // AcceleratorNameSet
 * //             "a100" || "inferentia" || "k520" || "k80" || "m60" || "radeon-pro-v520" || "t4" || "vu9p" || "v100" || "a10g" || "h100" || "t4g",
 * //           ],
 * //           acceleratorTotalMemoryMiB: { // AcceleratorTotalMemoryMiBRequest
 * //             min: Number("int"),
 * //             max: Number("int"),
 * //           },
 * //           networkBandwidthGbps: { // NetworkBandwidthGbpsRequest
 * //             min: Number("double"),
 * //             max: Number("double"),
 * //           },
 * //           allowedInstanceTypes: [ // AllowedInstanceTypeSet
 * //             "STRING_VALUE",
 * //           ],
 * //           maxSpotPriceAsPercentageOfOptimalOnDemandPrice: Number("int"),
 * //         },
 * //       },
 * //       propagateTags: "CAPACITY_PROVIDER" || "NONE",
 * //     },
 * //     updateStatus: "CREATE_IN_PROGRESS" || "CREATE_COMPLETE" || "CREATE_FAILED" || "DELETE_IN_PROGRESS" || "DELETE_COMPLETE" || "DELETE_FAILED" || "UPDATE_IN_PROGRESS" || "UPDATE_COMPLETE" || "UPDATE_FAILED",
 * //     updateStatusReason: "STRING_VALUE",
 * //     tags: [ // Tags
 * //       { // Tag
 * //         key: "STRING_VALUE",
 * //         value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     type: "EC2_AUTOSCALING" || "MANAGED_INSTANCES" || "FARGATE" || "FARGATE_SPOT",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateCapacityProviderCommandInput - {@link UpdateCapacityProviderCommandInput}
 * @returns {@link UpdateCapacityProviderCommandOutput}
 * @see {@link UpdateCapacityProviderCommandInput} for command's `input` shape.
 * @see {@link UpdateCapacityProviderCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for ECSClient's `config` shape.
 *
 * @throws {@link ClientException} (client fault)
 *  <p>These errors are usually caused by a client action. This client action might be using
 * 			an action or resource on behalf of a user that doesn't have permissions to use the
 * 			action or resource. Or, it might be specifying an identifier that isn't valid.</p>
 *
 * @throws {@link ClusterNotFoundException} (client fault)
 *  <p>The specified cluster wasn't found. You can view your available clusters with <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListClusters.html">ListClusters</a>. Amazon ECS clusters are Region specific.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter isn't valid. Review the available parameters for the API
 * 			request.</p>
 *          <p>For more information about service event errors, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-event-messages-list.html">Amazon ECS
 * 				service event messages</a>. </p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server issue.</p>
 *
 * @throws {@link UnsupportedFeatureException} (client fault)
 *  <p>The specified task isn't supported in this Region.</p>
 *
 * @throws {@link ECSServiceException}
 * <p>Base exception class for all service exceptions from ECS service.</p>
 *
 *
 * @example To update a capacity provider's parameters
 * ```javascript
 * // This example updates the targetCapacity and instanceWarmupPeriod parameters for the capacity provider MyCapacityProvider to 90 and 150 respectively.
 * const input = {
 *   autoScalingGroupProvider: {
 *     managedScaling: {
 *       instanceWarmupPeriod: 150,
 *       status: "ENABLED",
 *       targetCapacity: 90
 *     }
 *   },
 *   name: "MyCapacityProvider"
 * };
 * const command = new UpdateCapacityProviderCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   capacityProvider: {
 *     autoScalingGroupProvider: {
 *       autoScalingGroupArn: "arn:aws:autoscaling:us-east-1:132456789012:autoScalingGroup:57ffcb94-11f0-4d6d-bf60-3bac5EXAMPLE:autoScalingGroupName/MyASG",
 *       managedScaling: {
 *         instanceWarmupPeriod: 150,
 *         maximumScalingStepSize: 10000,
 *         minimumScalingStepSize: 1,
 *         status: "ENABLED",
 *         targetCapacity: 90
 *       },
 *       managedTerminationProtection: "ENABLED"
 *     },
 *     capacityProviderArn: "arn:aws:ecs:us-east-1:123456789012:capacity-provider/MyCapacityProvider",
 *     name: "MyCapacityProvider",
 *     status: "ACTIVE",
 *     tags:     [],
 *     updateStatus: "UPDATE_COMPLETE"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class UpdateCapacityProviderCommand extends $Command
  .classBuilder<
    UpdateCapacityProviderCommandInput,
    UpdateCapacityProviderCommandOutput,
    ECSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ECSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2ContainerServiceV20141113", "UpdateCapacityProvider", {})
  .n("ECSClient", "UpdateCapacityProviderCommand")
  .sc(UpdateCapacityProvider)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateCapacityProviderRequest;
      output: UpdateCapacityProviderResponse;
    };
    sdk: {
      input: UpdateCapacityProviderCommandInput;
      output: UpdateCapacityProviderCommandOutput;
    };
  };
}
