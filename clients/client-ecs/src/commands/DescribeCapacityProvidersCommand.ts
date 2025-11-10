// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeCapacityProvidersRequest, DescribeCapacityProvidersResponse } from "../models/models_0";
import { DescribeCapacityProviders } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeCapacityProvidersCommand}.
 */
export interface DescribeCapacityProvidersCommandInput extends DescribeCapacityProvidersRequest {}
/**
 * @public
 *
 * The output of {@link DescribeCapacityProvidersCommand}.
 */
export interface DescribeCapacityProvidersCommandOutput extends DescribeCapacityProvidersResponse, __MetadataBearer {}

/**
 * <p>Describes one or more of your capacity providers.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, DescribeCapacityProvidersCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, DescribeCapacityProvidersCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * // import type { ECSClientConfig } from "@aws-sdk/client-ecs";
 * const config = {}; // type is ECSClientConfig
 * const client = new ECSClient(config);
 * const input = { // DescribeCapacityProvidersRequest
 *   capacityProviders: [ // StringList
 *     "STRING_VALUE",
 *   ],
 *   cluster: "STRING_VALUE",
 *   include: [ // CapacityProviderFieldList
 *     "TAGS",
 *   ],
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new DescribeCapacityProvidersCommand(input);
 * const response = await client.send(command);
 * // { // DescribeCapacityProvidersResponse
 * //   capacityProviders: [ // CapacityProviders
 * //     { // CapacityProvider
 * //       capacityProviderArn: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       cluster: "STRING_VALUE",
 * //       status: "PROVISIONING" || "ACTIVE" || "DEPROVISIONING" || "INACTIVE",
 * //       autoScalingGroupProvider: { // AutoScalingGroupProvider
 * //         autoScalingGroupArn: "STRING_VALUE", // required
 * //         managedScaling: { // ManagedScaling
 * //           status: "ENABLED" || "DISABLED",
 * //           targetCapacity: Number("int"),
 * //           minimumScalingStepSize: Number("int"),
 * //           maximumScalingStepSize: Number("int"),
 * //           instanceWarmupPeriod: Number("int"),
 * //         },
 * //         managedTerminationProtection: "ENABLED" || "DISABLED",
 * //         managedDraining: "ENABLED" || "DISABLED",
 * //       },
 * //       managedInstancesProvider: { // ManagedInstancesProvider
 * //         infrastructureRoleArn: "STRING_VALUE",
 * //         instanceLaunchTemplate: { // InstanceLaunchTemplate
 * //           ec2InstanceProfileArn: "STRING_VALUE", // required
 * //           networkConfiguration: { // ManagedInstancesNetworkConfiguration
 * //             subnets: [ // StringList
 * //               "STRING_VALUE",
 * //             ],
 * //             securityGroups: [
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //           storageConfiguration: { // ManagedInstancesStorageConfiguration
 * //             storageSizeGiB: Number("int"),
 * //           },
 * //           monitoring: "BASIC" || "DETAILED",
 * //           instanceRequirements: { // InstanceRequirementsRequest
 * //             vCpuCount: { // VCpuCountRangeRequest
 * //               min: Number("int"), // required
 * //               max: Number("int"),
 * //             },
 * //             memoryMiB: { // MemoryMiBRequest
 * //               min: Number("int"), // required
 * //               max: Number("int"),
 * //             },
 * //             cpuManufacturers: [ // CpuManufacturerSet
 * //               "intel" || "amd" || "amazon-web-services",
 * //             ],
 * //             memoryGiBPerVCpu: { // MemoryGiBPerVCpuRequest
 * //               min: Number("double"),
 * //               max: Number("double"),
 * //             },
 * //             excludedInstanceTypes: [ // ExcludedInstanceTypeSet
 * //               "STRING_VALUE",
 * //             ],
 * //             instanceGenerations: [ // InstanceGenerationSet
 * //               "current" || "previous",
 * //             ],
 * //             spotMaxPricePercentageOverLowestPrice: Number("int"),
 * //             onDemandMaxPricePercentageOverLowestPrice: Number("int"),
 * //             bareMetal: "included" || "required" || "excluded",
 * //             burstablePerformance: "included" || "required" || "excluded",
 * //             requireHibernateSupport: true || false,
 * //             networkInterfaceCount: { // NetworkInterfaceCountRequest
 * //               min: Number("int"),
 * //               max: Number("int"),
 * //             },
 * //             localStorage: "included" || "required" || "excluded",
 * //             localStorageTypes: [ // LocalStorageTypeSet
 * //               "hdd" || "ssd",
 * //             ],
 * //             totalLocalStorageGB: { // TotalLocalStorageGBRequest
 * //               min: Number("double"),
 * //               max: Number("double"),
 * //             },
 * //             baselineEbsBandwidthMbps: { // BaselineEbsBandwidthMbpsRequest
 * //               min: Number("int"),
 * //               max: Number("int"),
 * //             },
 * //             acceleratorTypes: [ // AcceleratorTypeSet
 * //               "gpu" || "fpga" || "inference",
 * //             ],
 * //             acceleratorCount: { // AcceleratorCountRequest
 * //               min: Number("int"),
 * //               max: Number("int"),
 * //             },
 * //             acceleratorManufacturers: [ // AcceleratorManufacturerSet
 * //               "amazon-web-services" || "amd" || "nvidia" || "xilinx" || "habana",
 * //             ],
 * //             acceleratorNames: [ // AcceleratorNameSet
 * //               "a100" || "inferentia" || "k520" || "k80" || "m60" || "radeon-pro-v520" || "t4" || "vu9p" || "v100" || "a10g" || "h100" || "t4g",
 * //             ],
 * //             acceleratorTotalMemoryMiB: { // AcceleratorTotalMemoryMiBRequest
 * //               min: Number("int"),
 * //               max: Number("int"),
 * //             },
 * //             networkBandwidthGbps: { // NetworkBandwidthGbpsRequest
 * //               min: Number("double"),
 * //               max: Number("double"),
 * //             },
 * //             allowedInstanceTypes: [ // AllowedInstanceTypeSet
 * //               "STRING_VALUE",
 * //             ],
 * //             maxSpotPriceAsPercentageOfOptimalOnDemandPrice: Number("int"),
 * //           },
 * //         },
 * //         propagateTags: "CAPACITY_PROVIDER" || "NONE",
 * //       },
 * //       updateStatus: "CREATE_IN_PROGRESS" || "CREATE_COMPLETE" || "CREATE_FAILED" || "DELETE_IN_PROGRESS" || "DELETE_COMPLETE" || "DELETE_FAILED" || "UPDATE_IN_PROGRESS" || "UPDATE_COMPLETE" || "UPDATE_FAILED",
 * //       updateStatusReason: "STRING_VALUE",
 * //       tags: [ // Tags
 * //         { // Tag
 * //           key: "STRING_VALUE",
 * //           value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       type: "EC2_AUTOSCALING" || "MANAGED_INSTANCES" || "FARGATE" || "FARGATE_SPOT",
 * //     },
 * //   ],
 * //   failures: [ // Failures
 * //     { // Failure
 * //       arn: "STRING_VALUE",
 * //       reason: "STRING_VALUE",
 * //       detail: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeCapacityProvidersCommandInput - {@link DescribeCapacityProvidersCommandInput}
 * @returns {@link DescribeCapacityProvidersCommandOutput}
 * @see {@link DescribeCapacityProvidersCommandInput} for command's `input` shape.
 * @see {@link DescribeCapacityProvidersCommandOutput} for command's `response` shape.
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
 * @example To describe a specific capacity provider
 * ```javascript
 * // This example retrieves details about the capacity provider MyCapacityProvider
 * const input = {
 *   capacityProviders: [
 *     "MyCapacityProvider"
 *   ],
 *   include: [
 *     "TAGS"
 *   ]
 * };
 * const command = new DescribeCapacityProvidersCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   capacityProviders: [
 *     {
 *       autoScalingGroupProvider: {
 *         autoScalingGroupArn: "arn:aws:autoscaling:us-west-2:123456789012:autoScalingGroup:a1b2c3d4-5678-90ab-cdef-EXAMPLE11111:autoScalingGroupName/MyAutoScalingGroup",
 *         managedScaling: {
 *           maximumScalingStepSize: 1000,
 *           minimumScalingStepSize: 1,
 *           status: "ENABLED",
 *           targetCapacity: 100
 *         },
 *         managedTerminationProtection: "ENABLED"
 *       },
 *       capacityProviderArn: "arn:aws:ecs:us-west-2:123456789012:capacity-provider/MyCapacityProvider",
 *       name: "MyCapacityProvider",
 *       status: "ACTIVE",
 *       tags: [
 *         {
 *           key: "environment",
 *           value: "production"
 *         }
 *       ]
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @example To describe all capacity providers
 * ```javascript
 * // This example retrieves details about all capacity providers.
 * const input = { /* empty *\/ };
 * const command = new DescribeCapacityProvidersCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   capacityProviders: [
 *     {
 *       autoScalingGroupProvider: {
 *         autoScalingGroupArn: "arn:aws:autoscaling:us-west-2:123456789012:autoScalingGroup:a1b2c3d4-5678-90ab-cdef-EXAMPLE11111:autoScalingGroupName/MyAutoScalingGroup",
 *         managedScaling: {
 *           maximumScalingStepSize: 1000,
 *           minimumScalingStepSize: 1,
 *           status: "ENABLED",
 *           targetCapacity: 100
 *         },
 *         managedTerminationProtection: "ENABLED"
 *       },
 *       capacityProviderArn: "arn:aws:ecs:us-west-2:123456789012:capacity-provider/MyCapacityProvider",
 *       name: "MyCapacityProvider",
 *       status: "ACTIVE",
 *       tags:       []
 *     },
 *     {
 *       capacityProviderArn: "arn:aws:ecs:us-west-2:123456789012:capacity-provider/FARGATE",
 *       name: "FARGATE",
 *       status: "ACTIVE",
 *       tags:       []
 *     },
 *     {
 *       capacityProviderArn: "arn:aws:ecs:us-west-2:123456789012:capacity-provider/FARGATE_SPOT",
 *       name: "FARGATE_SPOT",
 *       status: "ACTIVE",
 *       tags:       []
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DescribeCapacityProvidersCommand extends $Command
  .classBuilder<
    DescribeCapacityProvidersCommandInput,
    DescribeCapacityProvidersCommandOutput,
    ECSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ECSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2ContainerServiceV20141113", "DescribeCapacityProviders", {})
  .n("ECSClient", "DescribeCapacityProvidersCommand")
  .sc(DescribeCapacityProviders)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeCapacityProvidersRequest;
      output: DescribeCapacityProvidersResponse;
    };
    sdk: {
      input: DescribeCapacityProvidersCommandInput;
      output: DescribeCapacityProvidersCommandOutput;
    };
  };
}
