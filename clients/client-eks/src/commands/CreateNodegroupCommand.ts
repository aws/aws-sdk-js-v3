// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EKSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EKSClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateNodegroupRequest, CreateNodegroupResponse } from "../models/models_0";
import { CreateNodegroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateNodegroupCommand}.
 */
export interface CreateNodegroupCommandInput extends CreateNodegroupRequest {}
/**
 * @public
 *
 * The output of {@link CreateNodegroupCommand}.
 */
export interface CreateNodegroupCommandOutput extends CreateNodegroupResponse, __MetadataBearer {}

/**
 * <p>Creates a managed node group for an Amazon EKS cluster.</p>
 *          <p>You can only create a node group for your cluster that is equal to the current Kubernetes
 *             version for the cluster. All node groups are created with the latest AMI release version
 *             for the respective minor Kubernetes version of the cluster, unless you deploy a custom AMI
 *             using a launch template.</p>
 *          <p>For later updates, you will only be able to update a node group using a launch
 *             template only if it was originally deployed with a launch template. Additionally, the
 *             launch template ID or name must match what was used when the node group was created. You
 *             can update the launch template version with necessary changes. For more information
 *             about using launch templates, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html">Customizing managed nodes with
 *                 launch templates</a>.</p>
 *          <p>An Amazon EKS managed node group is an Amazon EC2 Amazon EC2 Auto Scaling group and associated Amazon EC2 instances that
 *             are managed by Amazon Web Services for an Amazon EKS cluster. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/managed-node-groups.html">Managed
 *                 node groups</a> in the <i>Amazon EKS User Guide</i>.</p>
 *          <note>
 *             <p>Windows AMI types are only supported for commercial Amazon Web Services Regions that support
 *                 Windows on Amazon EKS.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, CreateNodegroupCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, CreateNodegroupCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * // import type { EKSClientConfig } from "@aws-sdk/client-eks";
 * const config = {}; // type is EKSClientConfig
 * const client = new EKSClient(config);
 * const input = { // CreateNodegroupRequest
 *   clusterName: "STRING_VALUE", // required
 *   nodegroupName: "STRING_VALUE", // required
 *   scalingConfig: { // NodegroupScalingConfig
 *     minSize: Number("int"),
 *     maxSize: Number("int"),
 *     desiredSize: Number("int"),
 *   },
 *   diskSize: Number("int"),
 *   subnets: [ // StringList // required
 *     "STRING_VALUE",
 *   ],
 *   instanceTypes: [
 *     "STRING_VALUE",
 *   ],
 *   amiType: "AL2_x86_64" || "AL2_x86_64_GPU" || "AL2_ARM_64" || "CUSTOM" || "BOTTLEROCKET_ARM_64" || "BOTTLEROCKET_x86_64" || "BOTTLEROCKET_ARM_64_FIPS" || "BOTTLEROCKET_x86_64_FIPS" || "BOTTLEROCKET_ARM_64_NVIDIA" || "BOTTLEROCKET_x86_64_NVIDIA" || "WINDOWS_CORE_2019_x86_64" || "WINDOWS_FULL_2019_x86_64" || "WINDOWS_CORE_2022_x86_64" || "WINDOWS_FULL_2022_x86_64" || "AL2023_x86_64_STANDARD" || "AL2023_ARM_64_STANDARD" || "AL2023_x86_64_NEURON" || "AL2023_x86_64_NVIDIA" || "AL2023_ARM_64_NVIDIA",
 *   remoteAccess: { // RemoteAccessConfig
 *     ec2SshKey: "STRING_VALUE",
 *     sourceSecurityGroups: [
 *       "STRING_VALUE",
 *     ],
 *   },
 *   nodeRole: "STRING_VALUE", // required
 *   labels: { // labelsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   taints: [ // taintsList
 *     { // Taint
 *       key: "STRING_VALUE",
 *       value: "STRING_VALUE",
 *       effect: "NO_SCHEDULE" || "NO_EXECUTE" || "PREFER_NO_SCHEDULE",
 *     },
 *   ],
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   clientRequestToken: "STRING_VALUE",
 *   launchTemplate: { // LaunchTemplateSpecification
 *     name: "STRING_VALUE",
 *     version: "STRING_VALUE",
 *     id: "STRING_VALUE",
 *   },
 *   updateConfig: { // NodegroupUpdateConfig
 *     maxUnavailable: Number("int"),
 *     maxUnavailablePercentage: Number("int"),
 *     updateStrategy: "DEFAULT" || "MINIMAL",
 *   },
 *   nodeRepairConfig: { // NodeRepairConfig
 *     enabled: true || false,
 *     maxUnhealthyNodeThresholdCount: Number("int"),
 *     maxUnhealthyNodeThresholdPercentage: Number("int"),
 *     maxParallelNodesRepairedCount: Number("int"),
 *     maxParallelNodesRepairedPercentage: Number("int"),
 *     nodeRepairConfigOverrides: [ // NodeRepairConfigOverridesList
 *       { // NodeRepairConfigOverrides
 *         nodeMonitoringCondition: "STRING_VALUE",
 *         nodeUnhealthyReason: "STRING_VALUE",
 *         minRepairWaitTimeMins: Number("int"),
 *         repairAction: "Replace" || "Reboot" || "NoAction",
 *       },
 *     ],
 *   },
 *   capacityType: "ON_DEMAND" || "SPOT" || "CAPACITY_BLOCK",
 *   version: "STRING_VALUE",
 *   releaseVersion: "STRING_VALUE",
 * };
 * const command = new CreateNodegroupCommand(input);
 * const response = await client.send(command);
 * // { // CreateNodegroupResponse
 * //   nodegroup: { // Nodegroup
 * //     nodegroupName: "STRING_VALUE",
 * //     nodegroupArn: "STRING_VALUE",
 * //     clusterName: "STRING_VALUE",
 * //     version: "STRING_VALUE",
 * //     releaseVersion: "STRING_VALUE",
 * //     createdAt: new Date("TIMESTAMP"),
 * //     modifiedAt: new Date("TIMESTAMP"),
 * //     status: "CREATING" || "ACTIVE" || "UPDATING" || "DELETING" || "CREATE_FAILED" || "DELETE_FAILED" || "DEGRADED",
 * //     capacityType: "ON_DEMAND" || "SPOT" || "CAPACITY_BLOCK",
 * //     scalingConfig: { // NodegroupScalingConfig
 * //       minSize: Number("int"),
 * //       maxSize: Number("int"),
 * //       desiredSize: Number("int"),
 * //     },
 * //     instanceTypes: [ // StringList
 * //       "STRING_VALUE",
 * //     ],
 * //     subnets: [
 * //       "STRING_VALUE",
 * //     ],
 * //     remoteAccess: { // RemoteAccessConfig
 * //       ec2SshKey: "STRING_VALUE",
 * //       sourceSecurityGroups: [
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     amiType: "AL2_x86_64" || "AL2_x86_64_GPU" || "AL2_ARM_64" || "CUSTOM" || "BOTTLEROCKET_ARM_64" || "BOTTLEROCKET_x86_64" || "BOTTLEROCKET_ARM_64_FIPS" || "BOTTLEROCKET_x86_64_FIPS" || "BOTTLEROCKET_ARM_64_NVIDIA" || "BOTTLEROCKET_x86_64_NVIDIA" || "WINDOWS_CORE_2019_x86_64" || "WINDOWS_FULL_2019_x86_64" || "WINDOWS_CORE_2022_x86_64" || "WINDOWS_FULL_2022_x86_64" || "AL2023_x86_64_STANDARD" || "AL2023_ARM_64_STANDARD" || "AL2023_x86_64_NEURON" || "AL2023_x86_64_NVIDIA" || "AL2023_ARM_64_NVIDIA",
 * //     nodeRole: "STRING_VALUE",
 * //     labels: { // labelsMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     taints: [ // taintsList
 * //       { // Taint
 * //         key: "STRING_VALUE",
 * //         value: "STRING_VALUE",
 * //         effect: "NO_SCHEDULE" || "NO_EXECUTE" || "PREFER_NO_SCHEDULE",
 * //       },
 * //     ],
 * //     resources: { // NodegroupResources
 * //       autoScalingGroups: [ // AutoScalingGroupList
 * //         { // AutoScalingGroup
 * //           name: "STRING_VALUE",
 * //         },
 * //       ],
 * //       remoteAccessSecurityGroup: "STRING_VALUE",
 * //     },
 * //     diskSize: Number("int"),
 * //     health: { // NodegroupHealth
 * //       issues: [ // IssueList
 * //         { // Issue
 * //           code: "AutoScalingGroupNotFound" || "AutoScalingGroupInvalidConfiguration" || "Ec2SecurityGroupNotFound" || "Ec2SecurityGroupDeletionFailure" || "Ec2LaunchTemplateNotFound" || "Ec2LaunchTemplateVersionMismatch" || "Ec2SubnetNotFound" || "Ec2SubnetInvalidConfiguration" || "IamInstanceProfileNotFound" || "Ec2SubnetMissingIpv6Assignment" || "IamLimitExceeded" || "IamNodeRoleNotFound" || "NodeCreationFailure" || "AsgInstanceLaunchFailures" || "InstanceLimitExceeded" || "InsufficientFreeAddresses" || "AccessDenied" || "InternalFailure" || "ClusterUnreachable" || "AmiIdNotFound" || "AutoScalingGroupOptInRequired" || "AutoScalingGroupRateLimitExceeded" || "Ec2LaunchTemplateDeletionFailure" || "Ec2LaunchTemplateInvalidConfiguration" || "Ec2LaunchTemplateMaxLimitExceeded" || "Ec2SubnetListTooLong" || "IamThrottling" || "NodeTerminationFailure" || "PodEvictionFailure" || "SourceEc2LaunchTemplateNotFound" || "LimitExceeded" || "Unknown" || "AutoScalingGroupInstanceRefreshActive" || "KubernetesLabelInvalid" || "Ec2LaunchTemplateVersionMaxLimitExceeded" || "Ec2InstanceTypeDoesNotExist",
 * //           message: "STRING_VALUE",
 * //           resourceIds: "<StringList>",
 * //         },
 * //       ],
 * //     },
 * //     updateConfig: { // NodegroupUpdateConfig
 * //       maxUnavailable: Number("int"),
 * //       maxUnavailablePercentage: Number("int"),
 * //       updateStrategy: "DEFAULT" || "MINIMAL",
 * //     },
 * //     nodeRepairConfig: { // NodeRepairConfig
 * //       enabled: true || false,
 * //       maxUnhealthyNodeThresholdCount: Number("int"),
 * //       maxUnhealthyNodeThresholdPercentage: Number("int"),
 * //       maxParallelNodesRepairedCount: Number("int"),
 * //       maxParallelNodesRepairedPercentage: Number("int"),
 * //       nodeRepairConfigOverrides: [ // NodeRepairConfigOverridesList
 * //         { // NodeRepairConfigOverrides
 * //           nodeMonitoringCondition: "STRING_VALUE",
 * //           nodeUnhealthyReason: "STRING_VALUE",
 * //           minRepairWaitTimeMins: Number("int"),
 * //           repairAction: "Replace" || "Reboot" || "NoAction",
 * //         },
 * //       ],
 * //     },
 * //     launchTemplate: { // LaunchTemplateSpecification
 * //       name: "STRING_VALUE",
 * //       version: "STRING_VALUE",
 * //       id: "STRING_VALUE",
 * //     },
 * //     tags: { // TagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateNodegroupCommandInput - {@link CreateNodegroupCommandInput}
 * @returns {@link CreateNodegroupCommandOutput}
 * @see {@link CreateNodegroupCommandInput} for command's `input` shape.
 * @see {@link CreateNodegroupCommandOutput} for command's `response` shape.
 * @see {@link EKSClientResolvedConfig | config} for EKSClient's `config` shape.
 *
 * @throws {@link ClientException} (client fault)
 *  <p>These errors are usually caused by a client action. Actions can include using an
 *             action or resource on behalf of an <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_terms-and-concepts.html">IAM principal</a> that doesn't have permissions to use
 *             the action or resource or specifying an identifier that is not valid.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter is invalid. Review the available parameters for the API
 *             request.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is invalid given the state of the cluster. Check the state of the cluster
 *             and the associated operations.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The specified resource is in use.</p>
 *
 * @throws {@link ResourceLimitExceededException} (client fault)
 *  <p>You have encountered a service limit on the specified resource.</p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server-side issue.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is unavailable. Back off and retry the operation.</p>
 *
 * @throws {@link EKSServiceException}
 * <p>Base exception class for all service exceptions from EKS service.</p>
 *
 *
 * @public
 */
export class CreateNodegroupCommand extends $Command
  .classBuilder<
    CreateNodegroupCommandInput,
    CreateNodegroupCommandOutput,
    EKSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EKSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSWesleyFrontend", "CreateNodegroup", {})
  .n("EKSClient", "CreateNodegroupCommand")
  .sc(CreateNodegroup$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateNodegroupRequest;
      output: CreateNodegroupResponse;
    };
    sdk: {
      input: CreateNodegroupCommandInput;
      output: CreateNodegroupCommandOutput;
    };
  };
}
