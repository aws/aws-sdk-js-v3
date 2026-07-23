// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateClusterRequest, CreateClusterResponse } from "../models/models_1";
import { CreateCluster$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateClusterCommand}.
 */
export interface CreateClusterCommandInput extends CreateClusterRequest {}
/**
 * @public
 *
 * The output of {@link CreateClusterCommand}.
 */
export interface CreateClusterCommandOutput extends CreateClusterResponse, __MetadataBearer {}

/**
 * <p>Creates an Amazon SageMaker HyperPod cluster. SageMaker HyperPod is a capability of SageMaker for creating and managing persistent clusters for developing large machine learning models, such as large language models (LLMs) and diffusion models. To learn more, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sagemaker-hyperpod.html">Amazon SageMaker HyperPod</a> in the <i>Amazon SageMaker Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreateClusterCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, CreateClusterCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // CreateClusterRequest
 *   ClusterName: "STRING_VALUE", // required
 *   InstanceGroups: [ // ClusterInstanceGroupSpecifications
 *     { // ClusterInstanceGroupSpecification
 *       InstanceCount: Number("int"), // required
 *       MinInstanceCount: Number("int"),
 *       InstanceGroupName: "STRING_VALUE", // required
 *       InstanceType: "ml.p4d.24xlarge" || "ml.p4de.24xlarge" || "ml.p5.48xlarge" || "ml.p5.4xlarge" || "ml.p6e-gb200.36xlarge" || "ml.trn1.32xlarge" || "ml.trn1n.32xlarge" || "ml.g5.xlarge" || "ml.g5.2xlarge" || "ml.g5.4xlarge" || "ml.g5.8xlarge" || "ml.g5.12xlarge" || "ml.g5.16xlarge" || "ml.g5.24xlarge" || "ml.g5.48xlarge" || "ml.c5.large" || "ml.c5.xlarge" || "ml.c5.2xlarge" || "ml.c5.4xlarge" || "ml.c5.9xlarge" || "ml.c5.12xlarge" || "ml.c5.18xlarge" || "ml.c5.24xlarge" || "ml.c5n.large" || "ml.c5n.2xlarge" || "ml.c5n.4xlarge" || "ml.c5n.9xlarge" || "ml.c5n.18xlarge" || "ml.m5.large" || "ml.m5.xlarge" || "ml.m5.2xlarge" || "ml.m5.4xlarge" || "ml.m5.8xlarge" || "ml.m5.12xlarge" || "ml.m5.16xlarge" || "ml.m5.24xlarge" || "ml.t3.medium" || "ml.t3.large" || "ml.t3.xlarge" || "ml.t3.2xlarge" || "ml.g6.xlarge" || "ml.g6.2xlarge" || "ml.g6.4xlarge" || "ml.g6.8xlarge" || "ml.g6.16xlarge" || "ml.g6.12xlarge" || "ml.g6.24xlarge" || "ml.g6.48xlarge" || "ml.gr6.4xlarge" || "ml.gr6.8xlarge" || "ml.g6e.xlarge" || "ml.g6e.2xlarge" || "ml.g6e.4xlarge" || "ml.g6e.8xlarge" || "ml.g6e.16xlarge" || "ml.g6e.12xlarge" || "ml.g6e.24xlarge" || "ml.g6e.48xlarge" || "ml.p5e.48xlarge" || "ml.p5en.48xlarge" || "ml.p6-b200.48xlarge" || "ml.trn2.3xlarge" || "ml.trn2.48xlarge" || "ml.c6i.large" || "ml.c6i.xlarge" || "ml.c6i.2xlarge" || "ml.c6i.4xlarge" || "ml.c6i.8xlarge" || "ml.c6i.12xlarge" || "ml.c6i.16xlarge" || "ml.c6i.24xlarge" || "ml.c6i.32xlarge" || "ml.m6i.large" || "ml.m6i.xlarge" || "ml.m6i.2xlarge" || "ml.m6i.4xlarge" || "ml.m6i.8xlarge" || "ml.m6i.12xlarge" || "ml.m6i.16xlarge" || "ml.m6i.24xlarge" || "ml.m6i.32xlarge" || "ml.r6i.large" || "ml.r6i.xlarge" || "ml.r6i.2xlarge" || "ml.r6i.4xlarge" || "ml.r6i.8xlarge" || "ml.r6i.12xlarge" || "ml.r6i.16xlarge" || "ml.r6i.24xlarge" || "ml.r6i.32xlarge" || "ml.i3en.large" || "ml.i3en.xlarge" || "ml.i3en.2xlarge" || "ml.i3en.3xlarge" || "ml.i3en.6xlarge" || "ml.i3en.12xlarge" || "ml.i3en.24xlarge" || "ml.m7i.large" || "ml.m7i.xlarge" || "ml.m7i.2xlarge" || "ml.m7i.4xlarge" || "ml.m7i.8xlarge" || "ml.m7i.12xlarge" || "ml.m7i.16xlarge" || "ml.m7i.24xlarge" || "ml.m7i.48xlarge" || "ml.r7i.large" || "ml.r7i.xlarge" || "ml.r7i.2xlarge" || "ml.r7i.4xlarge" || "ml.r7i.8xlarge" || "ml.r7i.12xlarge" || "ml.r7i.16xlarge" || "ml.r7i.24xlarge" || "ml.r7i.48xlarge" || "ml.r5d.16xlarge" || "ml.g7e.2xlarge" || "ml.g7e.4xlarge" || "ml.g7e.8xlarge" || "ml.g7e.12xlarge" || "ml.g7e.24xlarge" || "ml.g7e.48xlarge" || "ml.p6-b300.48xlarge" || "ml.g4dn.xlarge" || "ml.g4dn.2xlarge" || "ml.g4dn.4xlarge" || "ml.g4dn.8xlarge" || "ml.g4dn.12xlarge" || "ml.g4dn.16xlarge" || "ml.c6g.medium" || "ml.c6g.large" || "ml.c6g.xlarge" || "ml.c6g.2xlarge" || "ml.c6g.4xlarge" || "ml.c6g.8xlarge" || "ml.c6g.12xlarge" || "ml.c6g.16xlarge" || "ml.c7g.medium" || "ml.c7g.large" || "ml.c7g.xlarge" || "ml.c7g.2xlarge" || "ml.c7g.4xlarge" || "ml.c7g.8xlarge" || "ml.c7g.12xlarge" || "ml.c7g.16xlarge" || "ml.c8g.medium" || "ml.c8g.large" || "ml.c8g.xlarge" || "ml.c8g.2xlarge" || "ml.c8g.4xlarge" || "ml.c8g.8xlarge" || "ml.c8g.12xlarge" || "ml.c8g.16xlarge" || "ml.c8g.24xlarge" || "ml.c8g.48xlarge" || "ml.c6a.large" || "ml.c6a.xlarge" || "ml.c6a.2xlarge" || "ml.c6a.4xlarge" || "ml.c6a.8xlarge" || "ml.c6a.12xlarge" || "ml.c6a.16xlarge" || "ml.c6a.24xlarge" || "ml.c6a.32xlarge" || "ml.c6a.48xlarge" || "ml.m6a.large" || "ml.m6a.xlarge" || "ml.m6a.2xlarge" || "ml.m6a.4xlarge" || "ml.m6a.8xlarge" || "ml.m6a.12xlarge" || "ml.m6a.16xlarge" || "ml.m6a.24xlarge" || "ml.m6a.32xlarge" || "ml.m6a.48xlarge" || "ml.m6g.medium" || "ml.m6g.large" || "ml.m6g.xlarge" || "ml.m6g.2xlarge" || "ml.m6g.4xlarge" || "ml.m6g.8xlarge" || "ml.m6g.12xlarge" || "ml.m6g.16xlarge" || "ml.m7g.medium" || "ml.m7g.large" || "ml.m7g.xlarge" || "ml.m7g.2xlarge" || "ml.m7g.4xlarge" || "ml.m7g.8xlarge" || "ml.m7g.12xlarge" || "ml.m7g.16xlarge" || "ml.m8g.medium" || "ml.m8g.large" || "ml.m8g.xlarge" || "ml.m8g.2xlarge" || "ml.m8g.4xlarge" || "ml.m8g.8xlarge" || "ml.m8g.12xlarge" || "ml.m8g.16xlarge" || "ml.m8g.24xlarge" || "ml.m8g.48xlarge",
 *       InstanceRequirements: { // ClusterInstanceRequirements
 *         InstanceTypes: [ // ClusterInstanceTypes // required
 *           "ml.p4d.24xlarge" || "ml.p4de.24xlarge" || "ml.p5.48xlarge" || "ml.p5.4xlarge" || "ml.p6e-gb200.36xlarge" || "ml.trn1.32xlarge" || "ml.trn1n.32xlarge" || "ml.g5.xlarge" || "ml.g5.2xlarge" || "ml.g5.4xlarge" || "ml.g5.8xlarge" || "ml.g5.12xlarge" || "ml.g5.16xlarge" || "ml.g5.24xlarge" || "ml.g5.48xlarge" || "ml.c5.large" || "ml.c5.xlarge" || "ml.c5.2xlarge" || "ml.c5.4xlarge" || "ml.c5.9xlarge" || "ml.c5.12xlarge" || "ml.c5.18xlarge" || "ml.c5.24xlarge" || "ml.c5n.large" || "ml.c5n.2xlarge" || "ml.c5n.4xlarge" || "ml.c5n.9xlarge" || "ml.c5n.18xlarge" || "ml.m5.large" || "ml.m5.xlarge" || "ml.m5.2xlarge" || "ml.m5.4xlarge" || "ml.m5.8xlarge" || "ml.m5.12xlarge" || "ml.m5.16xlarge" || "ml.m5.24xlarge" || "ml.t3.medium" || "ml.t3.large" || "ml.t3.xlarge" || "ml.t3.2xlarge" || "ml.g6.xlarge" || "ml.g6.2xlarge" || "ml.g6.4xlarge" || "ml.g6.8xlarge" || "ml.g6.16xlarge" || "ml.g6.12xlarge" || "ml.g6.24xlarge" || "ml.g6.48xlarge" || "ml.gr6.4xlarge" || "ml.gr6.8xlarge" || "ml.g6e.xlarge" || "ml.g6e.2xlarge" || "ml.g6e.4xlarge" || "ml.g6e.8xlarge" || "ml.g6e.16xlarge" || "ml.g6e.12xlarge" || "ml.g6e.24xlarge" || "ml.g6e.48xlarge" || "ml.p5e.48xlarge" || "ml.p5en.48xlarge" || "ml.p6-b200.48xlarge" || "ml.trn2.3xlarge" || "ml.trn2.48xlarge" || "ml.c6i.large" || "ml.c6i.xlarge" || "ml.c6i.2xlarge" || "ml.c6i.4xlarge" || "ml.c6i.8xlarge" || "ml.c6i.12xlarge" || "ml.c6i.16xlarge" || "ml.c6i.24xlarge" || "ml.c6i.32xlarge" || "ml.m6i.large" || "ml.m6i.xlarge" || "ml.m6i.2xlarge" || "ml.m6i.4xlarge" || "ml.m6i.8xlarge" || "ml.m6i.12xlarge" || "ml.m6i.16xlarge" || "ml.m6i.24xlarge" || "ml.m6i.32xlarge" || "ml.r6i.large" || "ml.r6i.xlarge" || "ml.r6i.2xlarge" || "ml.r6i.4xlarge" || "ml.r6i.8xlarge" || "ml.r6i.12xlarge" || "ml.r6i.16xlarge" || "ml.r6i.24xlarge" || "ml.r6i.32xlarge" || "ml.i3en.large" || "ml.i3en.xlarge" || "ml.i3en.2xlarge" || "ml.i3en.3xlarge" || "ml.i3en.6xlarge" || "ml.i3en.12xlarge" || "ml.i3en.24xlarge" || "ml.m7i.large" || "ml.m7i.xlarge" || "ml.m7i.2xlarge" || "ml.m7i.4xlarge" || "ml.m7i.8xlarge" || "ml.m7i.12xlarge" || "ml.m7i.16xlarge" || "ml.m7i.24xlarge" || "ml.m7i.48xlarge" || "ml.r7i.large" || "ml.r7i.xlarge" || "ml.r7i.2xlarge" || "ml.r7i.4xlarge" || "ml.r7i.8xlarge" || "ml.r7i.12xlarge" || "ml.r7i.16xlarge" || "ml.r7i.24xlarge" || "ml.r7i.48xlarge" || "ml.r5d.16xlarge" || "ml.g7e.2xlarge" || "ml.g7e.4xlarge" || "ml.g7e.8xlarge" || "ml.g7e.12xlarge" || "ml.g7e.24xlarge" || "ml.g7e.48xlarge" || "ml.p6-b300.48xlarge" || "ml.g4dn.xlarge" || "ml.g4dn.2xlarge" || "ml.g4dn.4xlarge" || "ml.g4dn.8xlarge" || "ml.g4dn.12xlarge" || "ml.g4dn.16xlarge" || "ml.c6g.medium" || "ml.c6g.large" || "ml.c6g.xlarge" || "ml.c6g.2xlarge" || "ml.c6g.4xlarge" || "ml.c6g.8xlarge" || "ml.c6g.12xlarge" || "ml.c6g.16xlarge" || "ml.c7g.medium" || "ml.c7g.large" || "ml.c7g.xlarge" || "ml.c7g.2xlarge" || "ml.c7g.4xlarge" || "ml.c7g.8xlarge" || "ml.c7g.12xlarge" || "ml.c7g.16xlarge" || "ml.c8g.medium" || "ml.c8g.large" || "ml.c8g.xlarge" || "ml.c8g.2xlarge" || "ml.c8g.4xlarge" || "ml.c8g.8xlarge" || "ml.c8g.12xlarge" || "ml.c8g.16xlarge" || "ml.c8g.24xlarge" || "ml.c8g.48xlarge" || "ml.c6a.large" || "ml.c6a.xlarge" || "ml.c6a.2xlarge" || "ml.c6a.4xlarge" || "ml.c6a.8xlarge" || "ml.c6a.12xlarge" || "ml.c6a.16xlarge" || "ml.c6a.24xlarge" || "ml.c6a.32xlarge" || "ml.c6a.48xlarge" || "ml.m6a.large" || "ml.m6a.xlarge" || "ml.m6a.2xlarge" || "ml.m6a.4xlarge" || "ml.m6a.8xlarge" || "ml.m6a.12xlarge" || "ml.m6a.16xlarge" || "ml.m6a.24xlarge" || "ml.m6a.32xlarge" || "ml.m6a.48xlarge" || "ml.m6g.medium" || "ml.m6g.large" || "ml.m6g.xlarge" || "ml.m6g.2xlarge" || "ml.m6g.4xlarge" || "ml.m6g.8xlarge" || "ml.m6g.12xlarge" || "ml.m6g.16xlarge" || "ml.m7g.medium" || "ml.m7g.large" || "ml.m7g.xlarge" || "ml.m7g.2xlarge" || "ml.m7g.4xlarge" || "ml.m7g.8xlarge" || "ml.m7g.12xlarge" || "ml.m7g.16xlarge" || "ml.m8g.medium" || "ml.m8g.large" || "ml.m8g.xlarge" || "ml.m8g.2xlarge" || "ml.m8g.4xlarge" || "ml.m8g.8xlarge" || "ml.m8g.12xlarge" || "ml.m8g.16xlarge" || "ml.m8g.24xlarge" || "ml.m8g.48xlarge",
 *         ],
 *       },
 *       LifeCycleConfig: { // ClusterLifeCycleConfig
 *         SourceS3Uri: "STRING_VALUE",
 *         OnCreate: "STRING_VALUE",
 *         OnInitComplete: "STRING_VALUE",
 *       },
 *       ExecutionRole: "STRING_VALUE", // required
 *       ThreadsPerCore: Number("int"),
 *       InstanceStorageConfigs: [ // ClusterInstanceStorageConfigs
 *         { // ClusterInstanceStorageConfig Union: only one key present
 *           EbsVolumeConfig: { // ClusterEbsVolumeConfig
 *             VolumeSizeInGB: Number("int"),
 *             VolumeKmsKeyId: "STRING_VALUE",
 *             RootVolume: true || false,
 *           },
 *           FsxLustreConfig: { // ClusterFsxLustreConfig
 *             DnsName: "STRING_VALUE", // required
 *             MountName: "STRING_VALUE", // required
 *             MountPath: "STRING_VALUE",
 *           },
 *           FsxOpenZfsConfig: { // ClusterFsxOpenZfsConfig
 *             DnsName: "STRING_VALUE", // required
 *             MountPath: "STRING_VALUE",
 *           },
 *         },
 *       ],
 *       OnStartDeepHealthChecks: [ // OnStartDeepHealthChecks
 *         "InstanceStress" || "InstanceConnectivity",
 *       ],
 *       TrainingPlanArn: "STRING_VALUE",
 *       OverrideVpcConfig: { // VpcConfig
 *         SecurityGroupIds: [ // VpcSecurityGroupIds // required
 *           "STRING_VALUE",
 *         ],
 *         Subnets: [ // Subnets // required
 *           "STRING_VALUE",
 *         ],
 *       },
 *       ScheduledUpdateConfig: { // ScheduledUpdateConfig
 *         ScheduleExpression: "STRING_VALUE", // required
 *         DeploymentConfig: { // DeploymentConfiguration
 *           RollingUpdatePolicy: { // RollingDeploymentPolicy
 *             MaximumBatchSize: { // CapacitySizeConfig
 *               Type: "INSTANCE_COUNT" || "CAPACITY_PERCENTAGE", // required
 *               Value: Number("int"), // required
 *             },
 *             RollbackMaximumBatchSize: {
 *               Type: "INSTANCE_COUNT" || "CAPACITY_PERCENTAGE", // required
 *               Value: Number("int"), // required
 *             },
 *           },
 *           WaitIntervalInSeconds: Number("int"),
 *           AutoRollbackConfiguration: [ // AutoRollbackAlarms
 *             { // AlarmDetails
 *               AlarmName: "STRING_VALUE", // required
 *             },
 *           ],
 *         },
 *       },
 *       ImageId: "STRING_VALUE",
 *       AutoPatchConfig: { // ClusterAutoPatchConfig
 *         PatchingStrategy: "WhenIdle" || "WhenAllIdle", // required
 *         PatchSchedule: { // ClusterPatchSchedule
 *           NextPatchDate: new Date("TIMESTAMP"),
 *         },
 *         DeploymentConfig: {
 *           RollingUpdatePolicy: {
 *             MaximumBatchSize: {
 *               Type: "INSTANCE_COUNT" || "CAPACITY_PERCENTAGE", // required
 *               Value: Number("int"), // required
 *             },
 *             RollbackMaximumBatchSize: {
 *               Type: "INSTANCE_COUNT" || "CAPACITY_PERCENTAGE", // required
 *               Value: Number("int"), // required
 *             },
 *           },
 *           WaitIntervalInSeconds: Number("int"),
 *           AutoRollbackConfiguration: [
 *             {
 *               AlarmName: "STRING_VALUE", // required
 *             },
 *           ],
 *         },
 *       },
 *       ImageReleaseVersion: "STRING_VALUE",
 *       KubernetesConfig: { // ClusterKubernetesConfig
 *         Labels: { // ClusterKubernetesLabels
 *           "<keys>": "STRING_VALUE",
 *         },
 *         Taints: [ // ClusterKubernetesTaints
 *           { // ClusterKubernetesTaint
 *             Key: "STRING_VALUE", // required
 *             Value: "STRING_VALUE",
 *             Effect: "NoSchedule" || "PreferNoSchedule" || "NoExecute", // required
 *           },
 *         ],
 *       },
 *       SlurmConfig: { // ClusterSlurmConfig
 *         NodeType: "Controller" || "Login" || "Compute", // required
 *         PartitionNames: [ // ClusterPartitionNames
 *           "STRING_VALUE",
 *         ],
 *       },
 *       CapacityRequirements: { // ClusterCapacityRequirements
 *         Spot: {},
 *         OnDemand: {},
 *       },
 *       NetworkInterface: { // ClusterNetworkInterface
 *         InterfaceType: "efa" || "efa-only",
 *       },
 *     },
 *   ],
 *   RestrictedInstanceGroups: [ // ClusterRestrictedInstanceGroupSpecifications
 *     { // ClusterRestrictedInstanceGroupSpecification
 *       InstanceCount: Number("int"), // required
 *       InstanceGroupName: "STRING_VALUE", // required
 *       InstanceType: "ml.p4d.24xlarge" || "ml.p4de.24xlarge" || "ml.p5.48xlarge" || "ml.p5.4xlarge" || "ml.p6e-gb200.36xlarge" || "ml.trn1.32xlarge" || "ml.trn1n.32xlarge" || "ml.g5.xlarge" || "ml.g5.2xlarge" || "ml.g5.4xlarge" || "ml.g5.8xlarge" || "ml.g5.12xlarge" || "ml.g5.16xlarge" || "ml.g5.24xlarge" || "ml.g5.48xlarge" || "ml.c5.large" || "ml.c5.xlarge" || "ml.c5.2xlarge" || "ml.c5.4xlarge" || "ml.c5.9xlarge" || "ml.c5.12xlarge" || "ml.c5.18xlarge" || "ml.c5.24xlarge" || "ml.c5n.large" || "ml.c5n.2xlarge" || "ml.c5n.4xlarge" || "ml.c5n.9xlarge" || "ml.c5n.18xlarge" || "ml.m5.large" || "ml.m5.xlarge" || "ml.m5.2xlarge" || "ml.m5.4xlarge" || "ml.m5.8xlarge" || "ml.m5.12xlarge" || "ml.m5.16xlarge" || "ml.m5.24xlarge" || "ml.t3.medium" || "ml.t3.large" || "ml.t3.xlarge" || "ml.t3.2xlarge" || "ml.g6.xlarge" || "ml.g6.2xlarge" || "ml.g6.4xlarge" || "ml.g6.8xlarge" || "ml.g6.16xlarge" || "ml.g6.12xlarge" || "ml.g6.24xlarge" || "ml.g6.48xlarge" || "ml.gr6.4xlarge" || "ml.gr6.8xlarge" || "ml.g6e.xlarge" || "ml.g6e.2xlarge" || "ml.g6e.4xlarge" || "ml.g6e.8xlarge" || "ml.g6e.16xlarge" || "ml.g6e.12xlarge" || "ml.g6e.24xlarge" || "ml.g6e.48xlarge" || "ml.p5e.48xlarge" || "ml.p5en.48xlarge" || "ml.p6-b200.48xlarge" || "ml.trn2.3xlarge" || "ml.trn2.48xlarge" || "ml.c6i.large" || "ml.c6i.xlarge" || "ml.c6i.2xlarge" || "ml.c6i.4xlarge" || "ml.c6i.8xlarge" || "ml.c6i.12xlarge" || "ml.c6i.16xlarge" || "ml.c6i.24xlarge" || "ml.c6i.32xlarge" || "ml.m6i.large" || "ml.m6i.xlarge" || "ml.m6i.2xlarge" || "ml.m6i.4xlarge" || "ml.m6i.8xlarge" || "ml.m6i.12xlarge" || "ml.m6i.16xlarge" || "ml.m6i.24xlarge" || "ml.m6i.32xlarge" || "ml.r6i.large" || "ml.r6i.xlarge" || "ml.r6i.2xlarge" || "ml.r6i.4xlarge" || "ml.r6i.8xlarge" || "ml.r6i.12xlarge" || "ml.r6i.16xlarge" || "ml.r6i.24xlarge" || "ml.r6i.32xlarge" || "ml.i3en.large" || "ml.i3en.xlarge" || "ml.i3en.2xlarge" || "ml.i3en.3xlarge" || "ml.i3en.6xlarge" || "ml.i3en.12xlarge" || "ml.i3en.24xlarge" || "ml.m7i.large" || "ml.m7i.xlarge" || "ml.m7i.2xlarge" || "ml.m7i.4xlarge" || "ml.m7i.8xlarge" || "ml.m7i.12xlarge" || "ml.m7i.16xlarge" || "ml.m7i.24xlarge" || "ml.m7i.48xlarge" || "ml.r7i.large" || "ml.r7i.xlarge" || "ml.r7i.2xlarge" || "ml.r7i.4xlarge" || "ml.r7i.8xlarge" || "ml.r7i.12xlarge" || "ml.r7i.16xlarge" || "ml.r7i.24xlarge" || "ml.r7i.48xlarge" || "ml.r5d.16xlarge" || "ml.g7e.2xlarge" || "ml.g7e.4xlarge" || "ml.g7e.8xlarge" || "ml.g7e.12xlarge" || "ml.g7e.24xlarge" || "ml.g7e.48xlarge" || "ml.p6-b300.48xlarge" || "ml.g4dn.xlarge" || "ml.g4dn.2xlarge" || "ml.g4dn.4xlarge" || "ml.g4dn.8xlarge" || "ml.g4dn.12xlarge" || "ml.g4dn.16xlarge" || "ml.c6g.medium" || "ml.c6g.large" || "ml.c6g.xlarge" || "ml.c6g.2xlarge" || "ml.c6g.4xlarge" || "ml.c6g.8xlarge" || "ml.c6g.12xlarge" || "ml.c6g.16xlarge" || "ml.c7g.medium" || "ml.c7g.large" || "ml.c7g.xlarge" || "ml.c7g.2xlarge" || "ml.c7g.4xlarge" || "ml.c7g.8xlarge" || "ml.c7g.12xlarge" || "ml.c7g.16xlarge" || "ml.c8g.medium" || "ml.c8g.large" || "ml.c8g.xlarge" || "ml.c8g.2xlarge" || "ml.c8g.4xlarge" || "ml.c8g.8xlarge" || "ml.c8g.12xlarge" || "ml.c8g.16xlarge" || "ml.c8g.24xlarge" || "ml.c8g.48xlarge" || "ml.c6a.large" || "ml.c6a.xlarge" || "ml.c6a.2xlarge" || "ml.c6a.4xlarge" || "ml.c6a.8xlarge" || "ml.c6a.12xlarge" || "ml.c6a.16xlarge" || "ml.c6a.24xlarge" || "ml.c6a.32xlarge" || "ml.c6a.48xlarge" || "ml.m6a.large" || "ml.m6a.xlarge" || "ml.m6a.2xlarge" || "ml.m6a.4xlarge" || "ml.m6a.8xlarge" || "ml.m6a.12xlarge" || "ml.m6a.16xlarge" || "ml.m6a.24xlarge" || "ml.m6a.32xlarge" || "ml.m6a.48xlarge" || "ml.m6g.medium" || "ml.m6g.large" || "ml.m6g.xlarge" || "ml.m6g.2xlarge" || "ml.m6g.4xlarge" || "ml.m6g.8xlarge" || "ml.m6g.12xlarge" || "ml.m6g.16xlarge" || "ml.m7g.medium" || "ml.m7g.large" || "ml.m7g.xlarge" || "ml.m7g.2xlarge" || "ml.m7g.4xlarge" || "ml.m7g.8xlarge" || "ml.m7g.12xlarge" || "ml.m7g.16xlarge" || "ml.m8g.medium" || "ml.m8g.large" || "ml.m8g.xlarge" || "ml.m8g.2xlarge" || "ml.m8g.4xlarge" || "ml.m8g.8xlarge" || "ml.m8g.12xlarge" || "ml.m8g.16xlarge" || "ml.m8g.24xlarge" || "ml.m8g.48xlarge", // required
 *       ExecutionRole: "STRING_VALUE", // required
 *       ThreadsPerCore: Number("int"),
 *       InstanceStorageConfigs: [
 *         {//  Union: only one key present
 *           EbsVolumeConfig: {
 *             VolumeSizeInGB: Number("int"),
 *             VolumeKmsKeyId: "STRING_VALUE",
 *             RootVolume: true || false,
 *           },
 *           FsxLustreConfig: {
 *             DnsName: "STRING_VALUE", // required
 *             MountName: "STRING_VALUE", // required
 *             MountPath: "STRING_VALUE",
 *           },
 *           FsxOpenZfsConfig: {
 *             DnsName: "STRING_VALUE", // required
 *             MountPath: "STRING_VALUE",
 *           },
 *         },
 *       ],
 *       OnStartDeepHealthChecks: [
 *         "InstanceStress" || "InstanceConnectivity",
 *       ],
 *       TrainingPlanArn: "STRING_VALUE",
 *       OverrideVpcConfig: {
 *         SecurityGroupIds: [ // required
 *           "STRING_VALUE",
 *         ],
 *         Subnets: [ // required
 *           "STRING_VALUE",
 *         ],
 *       },
 *       ScheduledUpdateConfig: {
 *         ScheduleExpression: "STRING_VALUE", // required
 *         DeploymentConfig: {
 *           RollingUpdatePolicy: {
 *             MaximumBatchSize: {
 *               Type: "INSTANCE_COUNT" || "CAPACITY_PERCENTAGE", // required
 *               Value: Number("int"), // required
 *             },
 *             RollbackMaximumBatchSize: "<CapacitySizeConfig>",
 *           },
 *           WaitIntervalInSeconds: Number("int"),
 *           AutoRollbackConfiguration: [
 *             {
 *               AlarmName: "STRING_VALUE", // required
 *             },
 *           ],
 *         },
 *       },
 *       EnvironmentConfig: { // EnvironmentConfig
 *         FSxLustreConfig: { // FSxLustreConfig
 *           SizeInGiB: Number("int"), // required
 *           PerUnitStorageThroughput: Number("int"), // required
 *         },
 *       },
 *     },
 *   ],
 *   RestrictedInstanceGroupsConfig: { // ClusterRestrictedInstanceGroupsConfig
 *     SharedEnvironmentConfig: { // ClusterSharedEnvironmentConfig
 *       FSxLustreDeletionPolicy: "DeleteIfNotUsed" || "Keep", // required
 *       FSxLustreConfig: {
 *         SizeInGiB: Number("int"), // required
 *         PerUnitStorageThroughput: Number("int"), // required
 *       },
 *     },
 *   },
 *   VpcConfig: {
 *     SecurityGroupIds: [ // required
 *       "STRING_VALUE",
 *     ],
 *     Subnets: [ // required
 *       "STRING_VALUE",
 *     ],
 *   },
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   Orchestrator: { // ClusterOrchestrator
 *     Eks: { // ClusterOrchestratorEksConfig
 *       ClusterArn: "STRING_VALUE", // required
 *     },
 *     Slurm: { // ClusterOrchestratorSlurmConfig
 *       SlurmConfigStrategy: "Overwrite" || "Managed" || "Merge",
 *     },
 *   },
 *   NodeRecovery: "Automatic" || "None",
 *   TieredStorageConfig: { // ClusterTieredStorageConfig
 *     Mode: "Enable" || "Disable", // required
 *     InstanceMemoryAllocationPercentage: Number("int"),
 *   },
 *   NodeProvisioningMode: "Continuous",
 *   ClusterRole: "STRING_VALUE",
 *   AutoScaling: { // ClusterAutoScalingConfig
 *     Mode: "Enable" || "Disable", // required
 *     AutoScalerType: "Karpenter",
 *   },
 * };
 * const command = new CreateClusterCommand(input);
 * const response = await client.send(command);
 * // { // CreateClusterResponse
 * //   ClusterArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateClusterCommandInput - {@link CreateClusterCommandInput}
 * @returns {@link CreateClusterCommandOutput}
 * @see {@link CreateClusterCommandInput} for command's `input` shape.
 * @see {@link CreateClusterCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceInUse} (client fault)
 *  <p>Resource being accessed is in use.</p>
 *
 * @throws {@link ResourceLimitExceeded} (client fault)
 *  <p> You have exceeded an SageMaker resource limit. For example, you might have too many training jobs created. </p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 *
 * @public
 */
export class CreateClusterCommand extends command<CreateClusterCommandInput, CreateClusterCommandOutput>(
  _ep0,
  _mw0,
  "CreateCluster",
  CreateCluster$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateClusterRequest;
      output: CreateClusterResponse;
    };
    sdk: {
      input: CreateClusterCommandInput;
      output: CreateClusterCommandOutput;
    };
  };
}
