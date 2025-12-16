// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteCapacityProviderRequest, DeleteCapacityProviderResponse } from "../models/models_0";
import { DeleteCapacityProvider$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteCapacityProviderCommand}.
 */
export interface DeleteCapacityProviderCommandInput extends DeleteCapacityProviderRequest {}
/**
 * @public
 *
 * The output of {@link DeleteCapacityProviderCommand}.
 */
export interface DeleteCapacityProviderCommandOutput extends DeleteCapacityProviderResponse, __MetadataBearer {}

/**
 * <p>Deletes the specified capacity provider.</p>
 *          <note>
 *             <p>The <code>FARGATE</code> and <code>FARGATE_SPOT</code> capacity providers are
 * 				reserved and can't be deleted. You can disassociate them from a cluster using either
 * 					<a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_PutClusterCapacityProviders.html">PutClusterCapacityProviders</a> or by deleting the cluster.</p>
 *          </note>
 *          <p>Prior to a capacity provider being deleted, the capacity provider must be removed from
 * 			the capacity provider strategy from all services. The <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_UpdateService.html">UpdateService</a> API
 * 			can be used to remove a capacity provider from a service's capacity provider strategy.
 * 			When updating a service, the <code>forceNewDeployment</code> option can be used to
 * 			ensure that any tasks using the Amazon EC2 instance capacity provided by the capacity
 * 			provider are transitioned to use the capacity from the remaining capacity providers.
 * 			Only capacity providers that aren't associated with a cluster can be deleted. To remove
 * 			a capacity provider from a cluster, you can either use <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_PutClusterCapacityProviders.html">PutClusterCapacityProviders</a> or delete the cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, DeleteCapacityProviderCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, DeleteCapacityProviderCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * // import type { ECSClientConfig } from "@aws-sdk/client-ecs";
 * const config = {}; // type is ECSClientConfig
 * const client = new ECSClient(config);
 * const input = { // DeleteCapacityProviderRequest
 *   capacityProvider: "STRING_VALUE", // required
 *   cluster: "STRING_VALUE",
 * };
 * const command = new DeleteCapacityProviderCommand(input);
 * const response = await client.send(command);
 * // { // DeleteCapacityProviderResponse
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
 * //       infrastructureOptimization: { // InfrastructureOptimization
 * //         scaleInAfter: Number("int"),
 * //       },
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
 * @param DeleteCapacityProviderCommandInput - {@link DeleteCapacityProviderCommandInput}
 * @returns {@link DeleteCapacityProviderCommandOutput}
 * @see {@link DeleteCapacityProviderCommandInput} for command's `input` shape.
 * @see {@link DeleteCapacityProviderCommandOutput} for command's `response` shape.
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
 * @example To delete a specified capacity provider
 * ```javascript
 * // This example deletes a specified capacity provider.
 * const input = {
 *   capacityProvider: "arn:aws:ecs:us-west-2:123456789012:capacity-provider/ExampleCapacityProvider"
 * };
 * const command = new DeleteCapacityProviderCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   capacityProvider: {
 *     autoScalingGroupProvider: {
 *       autoScalingGroupArn: "arn:aws:autoscaling:us-west-2:123456789012:autoScalingGroup:a1b2c3d4-5678-90ab-cdef-EXAMPLE11111:autoScalingGroupName/MyAutoScalingGroup",
 *       managedScaling: {
 *         maximumScalingStepSize: 10000,
 *         minimumScalingStepSize: 1,
 *         status: "ENABLED",
 *         targetCapacity: 100
 *       },
 *       managedTerminationProtection: "DISABLED"
 *     },
 *     capacityProviderArn: "arn:aws:ecs:us-west-2:123456789012:capacity-provider/ExampleCapacityProvider",
 *     name: "ExampleCapacityProvider",
 *     status: "ACTIVE",
 *     tags:     [],
 *     updateStatus: "DELETE_IN_PROGRESS"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteCapacityProviderCommand extends $Command
  .classBuilder<
    DeleteCapacityProviderCommandInput,
    DeleteCapacityProviderCommandOutput,
    ECSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ECSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2ContainerServiceV20141113", "DeleteCapacityProvider", {})
  .n("ECSClient", "DeleteCapacityProviderCommand")
  .sc(DeleteCapacityProvider$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteCapacityProviderRequest;
      output: DeleteCapacityProviderResponse;
    };
    sdk: {
      input: DeleteCapacityProviderCommandInput;
      output: DeleteCapacityProviderCommandOutput;
    };
  };
}
