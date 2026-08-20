// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateComputeEnvironmentRequest, CreateComputeEnvironmentResponse } from "../models/models_0";
import { CreateComputeEnvironment$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateComputeEnvironmentCommand}.
 */
export interface CreateComputeEnvironmentCommandInput extends CreateComputeEnvironmentRequest {}
/**
 * @public
 *
 * The output of {@link CreateComputeEnvironmentCommand}.
 */
export interface CreateComputeEnvironmentCommandOutput extends CreateComputeEnvironmentResponse, __MetadataBearer {}

/**
 * <p>Creates an Batch compute environment. You can create <code>MANAGED</code> or
 *         <code>UNMANAGED</code> compute environments. <code>MANAGED</code> compute environments can
 *       use Amazon EC2 or Fargate resources. <code>UNMANAGED</code> compute environments can only use
 *       EC2 resources.</p>
 *          <p>In a managed compute environment, Batch manages the capacity and instance types of the
 *       compute resources within the environment. This is based on the compute resource specification
 *       that you define or the <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-launch-templates.html">launch template</a> that you
 *       specify when you create the compute environment. Either, you can choose to use EC2 On-Demand
 *       Instances and EC2 Spot Instances. Or, you can use Fargate and Fargate Spot capacity in
 *       your managed compute environment. You can optionally set a maximum price so that Spot
 *       Instances only launch when the Spot Instance price is less than a specified percentage of the
 *       On-Demand price.</p>
 *          <p>In an unmanaged compute environment, you can manage your own EC2 compute resources and
 *       have flexibility with how you configure your compute resources. For example, you can use
 *       custom AMIs. However, you must verify that each of your AMIs meet the Amazon ECS container instance
 *       AMI specification. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/container_instance_AMIs.html">container instance AMIs</a> in the
 *         <i>Amazon Elastic Container Service Developer Guide</i>. After you created your unmanaged compute environment,
 *       you can use the <a>DescribeComputeEnvironments</a> operation to find the Amazon ECS
 *       cluster that's associated with it. Then, launch your container instances into that Amazon ECS
 *       cluster. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/launch_container_instance.html">Launching an Amazon ECS container
 *         instance</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
 *          <note>
 *             <p>Batch doesn't automatically upgrade the AMIs in a compute environment after it's
 *       created. For more information on how to update a compute environment's AMI, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html">Updating compute environments</a> in the <i>Batch User Guide</i>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BatchClient, CreateComputeEnvironmentCommand } from "@aws-sdk/client-batch"; // ES Modules import
 * // const { BatchClient, CreateComputeEnvironmentCommand } = require("@aws-sdk/client-batch"); // CommonJS import
 * // import type { BatchClientConfig } from "@aws-sdk/client-batch";
 * const config = {}; // type is BatchClientConfig
 * const client = new BatchClient(config);
 * const input = { // CreateComputeEnvironmentRequest
 *   computeEnvironmentName: "STRING_VALUE", // required
 *   type: "MANAGED" || "UNMANAGED", // required
 *   state: "ENABLED" || "DISABLED",
 *   unmanagedvCpus: Number("int"),
 *   computeResources: { // ComputeResource
 *     type: "EC2" || "SPOT" || "FARGATE" || "FARGATE_SPOT" || "ECS_MANAGED_INSTANCES", // required
 *     allocationStrategy: "BEST_FIT" || "BEST_FIT_PROGRESSIVE" || "BEST_FIT_PROGRESSIVE_ORDERED" || "SPOT_CAPACITY_OPTIMIZED" || "SPOT_PRICE_CAPACITY_OPTIMIZED" || "SPOT_CAPACITY_OPTIMIZED_PRIORITIZED",
 *     minvCpus: Number("int"),
 *     maxvCpus: Number("int"), // required
 *     desiredvCpus: Number("int"),
 *     instanceTypes: [ // StringList
 *       "STRING_VALUE",
 *     ],
 *     imageId: "STRING_VALUE",
 *     subnets: [
 *       "STRING_VALUE",
 *     ],
 *     securityGroupIds: [
 *       "STRING_VALUE",
 *     ],
 *     ec2KeyPair: "STRING_VALUE",
 *     instanceRole: "STRING_VALUE",
 *     tags: { // TagsMap
 *       "<keys>": "STRING_VALUE",
 *     },
 *     placementGroup: "STRING_VALUE",
 *     bidPercentage: Number("int"),
 *     spotIamFleetRole: "STRING_VALUE",
 *     launchTemplate: { // LaunchTemplateSpecification
 *       launchTemplateId: "STRING_VALUE",
 *       launchTemplateName: "STRING_VALUE",
 *       version: "STRING_VALUE",
 *       overrides: [ // LaunchTemplateSpecificationOverrideList
 *         { // LaunchTemplateSpecificationOverride
 *           launchTemplateId: "STRING_VALUE",
 *           launchTemplateName: "STRING_VALUE",
 *           version: "STRING_VALUE",
 *           targetInstanceTypes: [
 *             "STRING_VALUE",
 *           ],
 *           userdataType: "EKS_BOOTSTRAP_SH" || "EKS_NODEADM",
 *         },
 *       ],
 *       userdataType: "EKS_BOOTSTRAP_SH" || "EKS_NODEADM",
 *     },
 *     ec2Configuration: [ // Ec2ConfigurationList
 *       { // Ec2Configuration
 *         imageType: "STRING_VALUE", // required
 *         imageIdOverride: "STRING_VALUE",
 *         batchImageStatus: "STRING_VALUE",
 *         imageKubernetesVersion: "STRING_VALUE",
 *       },
 *     ],
 *     scalingPolicy: { // ComputeScalingPolicy
 *       minScaleDownDelayMinutes: Number("int"),
 *     },
 *     managedInstancesProvider: { // ManagedInstancesProvider
 *       propagateTags: "STRING_VALUE",
 *       infrastructureRoleArn: "STRING_VALUE", // required
 *       instanceLaunchTemplate: { // InstanceLaunchTemplate
 *         ec2InstanceProfileArn: "STRING_VALUE", // required
 *         networkConfiguration: { // ManagedInstancesNetworkConfiguration
 *           subnets: [ // required
 *             "STRING_VALUE",
 *           ],
 *           securityGroups: "<StringList>", // required
 *         },
 *         instanceRequirements: { // InstanceRequirementsRequest
 *           allowedInstanceTypes: "<StringList>",
 *         },
 *         capacityOptionType: "STRING_VALUE",
 *         storageConfiguration: { // ManagedInstancesStorageConfiguration
 *           storageSizeGiB: Number("int"),
 *         },
 *         monitoring: "STRING_VALUE",
 *         fipsEnabled: true || false,
 *         capacityReservations: { // CapacityReservationRequest
 *           reservationGroupArn: "STRING_VALUE",
 *           reservationPreference: "STRING_VALUE",
 *         },
 *         instanceMetadataTagsPropagation: true || false,
 *         localStorageConfiguration: { // ManagedInstancesLocalStorageConfiguration
 *           useLocalStorage: true || false,
 *         },
 *       },
 *       infrastructureOptimization: { // InfrastructureOptimization
 *         scaleInAfter: Number("int"),
 *       },
 *     },
 *     capacityTags: { // TagrisTagsMap
 *       "<keys>": "STRING_VALUE",
 *     },
 *   },
 *   serviceRole: "STRING_VALUE",
 *   tags: {
 *     "<keys>": "STRING_VALUE",
 *   },
 *   eksConfiguration: { // EksConfiguration
 *     eksClusterArn: "STRING_VALUE", // required
 *     kubernetesNamespace: "STRING_VALUE", // required
 *   },
 *   context: "STRING_VALUE",
 *   ecsSettings: { // EcsSettings
 *     containerInsights: "ENABLED" || "ENHANCED" || "DISABLED",
 *   },
 * };
 * const command = new CreateComputeEnvironmentCommand(input);
 * const response = await client.send(command);
 * // { // CreateComputeEnvironmentResponse
 * //   computeEnvironmentName: "STRING_VALUE",
 * //   computeEnvironmentArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateComputeEnvironmentCommandInput - {@link CreateComputeEnvironmentCommandInput}
 * @returns {@link CreateComputeEnvironmentCommandOutput}
 * @see {@link CreateComputeEnvironmentCommandInput} for command's `input` shape.
 * @see {@link CreateComputeEnvironmentCommandOutput} for command's `response` shape.
 * @see {@link BatchClientResolvedConfig | config} for BatchClient's `config` shape.
 *
 * @throws {@link ClientException} (client fault)
 *  <p>These errors are usually caused by a client action. One example cause is using an action or resource on behalf
 *    of a user that doesn't have permissions to use the action or resource. Another cause is specifying an identifier
 *    that's not valid.</p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server issue.</p>
 *
 * @throws {@link BatchServiceException}
 * <p>Base exception class for all service exceptions from Batch service.</p>
 *
 *
 * @example To create a managed EC2 compute environment
 * ```javascript
 * // This example creates a managed compute environment with specific C4 instance types that are launched on demand. The compute environment is called C4OnDemand.
 * const input = {
 *   computeEnvironmentName: "C4OnDemand",
 *   computeResources: {
 *     desiredvCpus: 48,
 *     ec2KeyPair: "id_rsa",
 *     instanceRole: "ecsInstanceRole",
 *     instanceTypes: [
 *       "c4.large",
 *       "c4.xlarge",
 *       "c4.2xlarge",
 *       "c4.4xlarge",
 *       "c4.8xlarge"
 *     ],
 *     maxvCpus: 128,
 *     minvCpus: 0,
 *     securityGroupIds: [
 *       "sg-cf5093b2"
 *     ],
 *     subnets: [
 *       "subnet-220c0e0a",
 *       "subnet-1a95556d",
 *       "subnet-978f6dce"
 *     ],
 *     tags: {
 *       Name: "Batch Instance - C4OnDemand"
 *     },
 *     type: "EC2"
 *   },
 *   serviceRole: "arn:aws:iam::012345678910:role/AWSBatchServiceRole",
 *   state: "ENABLED",
 *   type: "MANAGED"
 * };
 * const command = new CreateComputeEnvironmentCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   computeEnvironmentArn: "arn:aws:batch:us-east-1:012345678910:compute-environment/C4OnDemand",
 *   computeEnvironmentName: "C4OnDemand"
 * }
 * *\/
 * ```
 *
 * @example To create a managed EC2 Spot compute environment
 * ```javascript
 * // This example creates a managed compute environment with the M4 instance type that is launched when the Spot bid price is at or below 20% of the On-Demand price for the instance type. The compute environment is called M4Spot.
 * const input = {
 *   computeEnvironmentName: "M4Spot",
 *   computeResources: {
 *     bidPercentage: 20,
 *     desiredvCpus: 4,
 *     ec2KeyPair: "id_rsa",
 *     instanceRole: "ecsInstanceRole",
 *     instanceTypes: [
 *       "m4"
 *     ],
 *     maxvCpus: 128,
 *     minvCpus: 0,
 *     securityGroupIds: [
 *       "sg-cf5093b2"
 *     ],
 *     spotIamFleetRole: "arn:aws:iam::012345678910:role/aws-ec2-spot-fleet-role",
 *     subnets: [
 *       "subnet-220c0e0a",
 *       "subnet-1a95556d",
 *       "subnet-978f6dce"
 *     ],
 *     tags: {
 *       Name: "Batch Instance - M4Spot"
 *     },
 *     type: "SPOT"
 *   },
 *   serviceRole: "arn:aws:iam::012345678910:role/AWSBatchServiceRole",
 *   state: "ENABLED",
 *   type: "MANAGED"
 * };
 * const command = new CreateComputeEnvironmentCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   computeEnvironmentArn: "arn:aws:batch:us-east-1:012345678910:compute-environment/M4Spot",
 *   computeEnvironmentName: "M4Spot"
 * }
 * *\/
 * ```
 *
 * @example To create an ECS Managed Instances compute environment with capacity reservations
 * ```javascript
 * // This example creates an ECS Managed Instances compute environment that targets On-Demand Capacity Reservations for predictable capacity.
 * const input = {
 *   computeEnvironmentName: "my-reserved-managed-instances-ce",
 *   computeResources: {
 *     managedInstancesProvider: {
 *       infrastructureRoleArn: "arn:aws:iam::123456789012:role/ecsInfrastructureRole",
 *       instanceLaunchTemplate: {
 *         capacityReservations: {
 *           reservationGroupArn: "arn:aws:ec2:us-east-1:123456789012:capacity-reservation-group/my-reservation-group",
 *           reservationPreference: "RESERVATIONS_FIRST"
 *         },
 *         ec2InstanceProfileArn: "arn:aws:iam::123456789012:instance-profile/ecsInstanceProfile",
 *         instanceRequirements: {
 *           allowedInstanceTypes: [
 *             "m5.xlarge",
 *             "m5.2xlarge"
 *           ]
 *         },
 *         networkConfiguration: {
 *           securityGroups: [
 *             "sg-abcde012"
 *           ],
 *           subnets: [
 *             "subnet-abcde012",
 *             "subnet-bcde012a"
 *           ]
 *         }
 *       }
 *     },
 *     maxvCpus: 512,
 *     type: "ECS_MANAGED_INSTANCES"
 *   },
 *   state: "ENABLED",
 *   type: "MANAGED"
 * };
 * const command = new CreateComputeEnvironmentCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   computeEnvironmentArn: "arn:aws:batch:us-east-1:123456789012:compute-environment/my-reserved-managed-instances-ce",
 *   computeEnvironmentName: "my-reserved-managed-instances-ce"
 * }
 * *\/
 * ```
 *
 * @example To create an ECS Managed Instances compute environment
 * ```javascript
 * // This example creates a managed compute environment that uses ECS Managed Instances.
 * const input = {
 *   computeEnvironmentName: "my-managed-instances-ce",
 *   computeResources: {
 *     managedInstancesProvider: {
 *       infrastructureRoleArn: "arn:aws:iam::123456789012:role/ecsInfrastructureRole",
 *       instanceLaunchTemplate: {
 *         ec2InstanceProfileArn: "arn:aws:iam::123456789012:instance-profile/ecsInstanceProfile",
 *         networkConfiguration: {
 *           securityGroups: [
 *             "sg-abcde012"
 *           ],
 *           subnets: [
 *             "subnet-abcde012",
 *             "subnet-bcde012a"
 *           ]
 *         }
 *       }
 *     },
 *     maxvCpus: 256,
 *     type: "ECS_MANAGED_INSTANCES"
 *   },
 *   state: "ENABLED",
 *   type: "MANAGED"
 * };
 * const command = new CreateComputeEnvironmentCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   computeEnvironmentArn: "arn:aws:batch:us-east-1:123456789012:compute-environment/my-managed-instances-ce",
 *   computeEnvironmentName: "my-managed-instances-ce"
 * }
 * *\/
 * ```
 *
 * @example To create an ECS Managed Instances Spot compute environment
 * ```javascript
 * // This example creates a Spot-backed ECS Managed Instances compute environment constrained to specific instance types.
 * const input = {
 *   computeEnvironmentName: "my-spot-managed-instances-ce",
 *   computeResources: {
 *     managedInstancesProvider: {
 *       infrastructureRoleArn: "arn:aws:iam::123456789012:role/ecsInfrastructureRole",
 *       instanceLaunchTemplate: {
 *         capacityOptionType: "SPOT",
 *         ec2InstanceProfileArn: "arn:aws:iam::123456789012:instance-profile/ecsInstanceProfile",
 *         instanceRequirements: {
 *           allowedInstanceTypes: [
 *             "m5.large",
 *             "m5.xlarge",
 *             "m6i.large",
 *             "m6i.xlarge"
 *           ]
 *         },
 *         networkConfiguration: {
 *           securityGroups: [
 *             "sg-abcde012"
 *           ],
 *           subnets: [
 *             "subnet-abcde012",
 *             "subnet-bcde012a"
 *           ]
 *         }
 *       }
 *     },
 *     maxvCpus: 1000,
 *     type: "ECS_MANAGED_INSTANCES"
 *   },
 *   state: "ENABLED",
 *   type: "MANAGED"
 * };
 * const command = new CreateComputeEnvironmentCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   computeEnvironmentArn: "arn:aws:batch:us-east-1:123456789012:compute-environment/my-spot-managed-instances-ce",
 *   computeEnvironmentName: "my-spot-managed-instances-ce"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateComputeEnvironmentCommand extends command<CreateComputeEnvironmentCommandInput, CreateComputeEnvironmentCommandOutput>(
  _ep0,
  _mw0,
  "CreateComputeEnvironment",
  CreateComputeEnvironment$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateComputeEnvironmentRequest;
      output: CreateComputeEnvironmentResponse;
    };
    sdk: {
      input: CreateComputeEnvironmentCommandInput;
      output: CreateComputeEnvironmentCommandOutput;
    };
  };
}
