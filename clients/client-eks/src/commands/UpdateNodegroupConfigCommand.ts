// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EKSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EKSClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateNodegroupConfigRequest, UpdateNodegroupConfigResponse } from "../models/models_0";
import { UpdateNodegroupConfig } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateNodegroupConfigCommand}.
 */
export interface UpdateNodegroupConfigCommandInput extends UpdateNodegroupConfigRequest {}
/**
 * @public
 *
 * The output of {@link UpdateNodegroupConfigCommand}.
 */
export interface UpdateNodegroupConfigCommandOutput extends UpdateNodegroupConfigResponse, __MetadataBearer {}

/**
 * <p>Updates an Amazon EKS managed node group configuration. Your node group continues to
 *             function during the update. The response output includes an update ID that you can use
 *             to track the status of your node group update with the <a href="https://docs.aws.amazon.com/eks/latest/APIReference/API_DescribeUpdate.html">
 *                <code>DescribeUpdate</code>
 *             </a> API operation. You can update the Kubernetes labels
 *             and taints for a node group and the scaling and version update configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, UpdateNodegroupConfigCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, UpdateNodegroupConfigCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * // import type { EKSClientConfig } from "@aws-sdk/client-eks";
 * const config = {}; // type is EKSClientConfig
 * const client = new EKSClient(config);
 * const input = { // UpdateNodegroupConfigRequest
 *   clusterName: "STRING_VALUE", // required
 *   nodegroupName: "STRING_VALUE", // required
 *   labels: { // UpdateLabelsPayload
 *     addOrUpdateLabels: { // labelsMap
 *       "<keys>": "STRING_VALUE",
 *     },
 *     removeLabels: [ // labelsKeyList
 *       "STRING_VALUE",
 *     ],
 *   },
 *   taints: { // UpdateTaintsPayload
 *     addOrUpdateTaints: [ // taintsList
 *       { // Taint
 *         key: "STRING_VALUE",
 *         value: "STRING_VALUE",
 *         effect: "NO_SCHEDULE" || "NO_EXECUTE" || "PREFER_NO_SCHEDULE",
 *       },
 *     ],
 *     removeTaints: [
 *       {
 *         key: "STRING_VALUE",
 *         value: "STRING_VALUE",
 *         effect: "NO_SCHEDULE" || "NO_EXECUTE" || "PREFER_NO_SCHEDULE",
 *       },
 *     ],
 *   },
 *   scalingConfig: { // NodegroupScalingConfig
 *     minSize: Number("int"),
 *     maxSize: Number("int"),
 *     desiredSize: Number("int"),
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
 *   clientRequestToken: "STRING_VALUE",
 * };
 * const command = new UpdateNodegroupConfigCommand(input);
 * const response = await client.send(command);
 * // { // UpdateNodegroupConfigResponse
 * //   update: { // Update
 * //     id: "STRING_VALUE",
 * //     status: "InProgress" || "Failed" || "Cancelled" || "Successful",
 * //     type: "VersionUpdate" || "EndpointAccessUpdate" || "LoggingUpdate" || "ConfigUpdate" || "AssociateIdentityProviderConfig" || "DisassociateIdentityProviderConfig" || "AssociateEncryptionConfig" || "AddonUpdate" || "VpcConfigUpdate" || "AccessConfigUpdate" || "UpgradePolicyUpdate" || "ZonalShiftConfigUpdate" || "AutoModeUpdate" || "RemoteNetworkConfigUpdate" || "DeletionProtectionUpdate",
 * //     params: [ // UpdateParams
 * //       { // UpdateParam
 * //         type: "Version" || "PlatformVersion" || "EndpointPrivateAccess" || "EndpointPublicAccess" || "ClusterLogging" || "DesiredSize" || "LabelsToAdd" || "LabelsToRemove" || "TaintsToAdd" || "TaintsToRemove" || "MaxSize" || "MinSize" || "ReleaseVersion" || "PublicAccessCidrs" || "LaunchTemplateName" || "LaunchTemplateVersion" || "IdentityProviderConfig" || "EncryptionConfig" || "AddonVersion" || "ServiceAccountRoleArn" || "ResolveConflicts" || "MaxUnavailable" || "MaxUnavailablePercentage" || "NodeRepairEnabled" || "UpdateStrategy" || "ConfigurationValues" || "SecurityGroups" || "Subnets" || "AuthenticationMode" || "PodIdentityAssociations" || "UpgradePolicy" || "ZonalShiftConfig" || "ComputeConfig" || "StorageConfig" || "KubernetesNetworkConfig" || "RemoteNetworkConfig" || "DeletionProtection" || "NodeRepairConfig",
 * //         value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     createdAt: new Date("TIMESTAMP"),
 * //     errors: [ // ErrorDetails
 * //       { // ErrorDetail
 * //         errorCode: "SubnetNotFound" || "SecurityGroupNotFound" || "EniLimitReached" || "IpNotAvailable" || "AccessDenied" || "OperationNotPermitted" || "VpcIdNotFound" || "Unknown" || "NodeCreationFailure" || "PodEvictionFailure" || "InsufficientFreeAddresses" || "ClusterUnreachable" || "InsufficientNumberOfReplicas" || "ConfigurationConflict" || "AdmissionRequestDenied" || "UnsupportedAddonModification" || "K8sResourceNotFound",
 * //         errorMessage: "STRING_VALUE",
 * //         resourceIds: [ // StringList
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateNodegroupConfigCommandInput - {@link UpdateNodegroupConfigCommandInput}
 * @returns {@link UpdateNodegroupConfigCommandOutput}
 * @see {@link UpdateNodegroupConfigCommandInput} for command's `input` shape.
 * @see {@link UpdateNodegroupConfigCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource could not be found. You can view your available clusters with
 *                 <code>ListClusters</code>. You can view your available managed node groups with
 *                 <code>ListNodegroups</code>. Amazon EKS clusters and node groups are Amazon Web Services Region
 *             specific.</p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server-side issue.</p>
 *
 * @throws {@link EKSServiceException}
 * <p>Base exception class for all service exceptions from EKS service.</p>
 *
 *
 * @public
 */
export class UpdateNodegroupConfigCommand extends $Command
  .classBuilder<
    UpdateNodegroupConfigCommandInput,
    UpdateNodegroupConfigCommandOutput,
    EKSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EKSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSWesleyFrontend", "UpdateNodegroupConfig", {})
  .n("EKSClient", "UpdateNodegroupConfigCommand")
  .sc(UpdateNodegroupConfig)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateNodegroupConfigRequest;
      output: UpdateNodegroupConfigResponse;
    };
    sdk: {
      input: UpdateNodegroupConfigCommandInput;
      output: UpdateNodegroupConfigCommandOutput;
    };
  };
}
