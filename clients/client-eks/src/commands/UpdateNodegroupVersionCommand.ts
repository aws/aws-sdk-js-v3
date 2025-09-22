// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EKSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EKSClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateNodegroupVersionRequest, UpdateNodegroupVersionResponse } from "../models/models_0";
import { de_UpdateNodegroupVersionCommand, se_UpdateNodegroupVersionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateNodegroupVersionCommand}.
 */
export interface UpdateNodegroupVersionCommandInput extends UpdateNodegroupVersionRequest {}
/**
 * @public
 *
 * The output of {@link UpdateNodegroupVersionCommand}.
 */
export interface UpdateNodegroupVersionCommandOutput extends UpdateNodegroupVersionResponse, __MetadataBearer {}

/**
 * <p>Updates the Kubernetes version or AMI version of an Amazon EKS managed node group.</p>
 *          <p>You can update a node group using a launch template only if the node group was
 *             originally deployed with a launch template. Additionally, the launch template ID or name
 *             must match what was used when the node group was created. You can update the launch
 *             template version with necessary changes.</p>
 *          <p>If you need to update a custom AMI in a node group that was deployed with a launch
 *             template, then update your custom AMI, specify the new ID in a new version of the launch
 *             template, and then update the node group to the new version of the launch
 *             template.</p>
 *          <p>If you update without a launch template, then you can update to the latest available
 *             AMI version of a node group's current Kubernetes version by not specifying a Kubernetes version in
 *             the request. You can update to the latest AMI version of your cluster's current Kubernetes
 *             version by specifying your cluster's Kubernetes version in the request. For information about
 *             Linux versions, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/eks-linux-ami-versions.html">Amazon EKS optimized Amazon Linux AMI versions</a> in the
 *             <i>Amazon EKS User Guide</i>. For information about Windows versions, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/eks-ami-versions-windows.html">Amazon EKS
 *                 optimized Windows AMI versions</a> in the <i>Amazon EKS User Guide</i>. </p>
 *          <p>You cannot roll back a node group to an earlier Kubernetes version or AMI version.</p>
 *          <p>When a node in a managed node group is terminated due to a scaling action or update,
 *             every <code>Pod</code> on that node is drained first. Amazon EKS attempts to drain the nodes
 *             gracefully and will fail if it is unable to do so. You can <code>force</code> the update
 *             if Amazon EKS is unable to drain the nodes as a result of a <code>Pod</code> disruption
 *             budget issue.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, UpdateNodegroupVersionCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, UpdateNodegroupVersionCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * // import type { EKSClientConfig } from "@aws-sdk/client-eks";
 * const config = {}; // type is EKSClientConfig
 * const client = new EKSClient(config);
 * const input = { // UpdateNodegroupVersionRequest
 *   clusterName: "STRING_VALUE", // required
 *   nodegroupName: "STRING_VALUE", // required
 *   version: "STRING_VALUE",
 *   releaseVersion: "STRING_VALUE",
 *   launchTemplate: { // LaunchTemplateSpecification
 *     name: "STRING_VALUE",
 *     version: "STRING_VALUE",
 *     id: "STRING_VALUE",
 *   },
 *   force: true || false,
 *   clientRequestToken: "STRING_VALUE",
 * };
 * const command = new UpdateNodegroupVersionCommand(input);
 * const response = await client.send(command);
 * // { // UpdateNodegroupVersionResponse
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
 * @param UpdateNodegroupVersionCommandInput - {@link UpdateNodegroupVersionCommandInput}
 * @returns {@link UpdateNodegroupVersionCommandOutput}
 * @see {@link UpdateNodegroupVersionCommandInput} for command's `input` shape.
 * @see {@link UpdateNodegroupVersionCommandOutput} for command's `response` shape.
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
export class UpdateNodegroupVersionCommand extends $Command
  .classBuilder<
    UpdateNodegroupVersionCommandInput,
    UpdateNodegroupVersionCommandOutput,
    EKSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EKSClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSWesleyFrontend", "UpdateNodegroupVersion", {})
  .n("EKSClient", "UpdateNodegroupVersionCommand")
  .f(void 0, void 0)
  .ser(se_UpdateNodegroupVersionCommand)
  .de(de_UpdateNodegroupVersionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateNodegroupVersionRequest;
      output: UpdateNodegroupVersionResponse;
    };
    sdk: {
      input: UpdateNodegroupVersionCommandInput;
      output: UpdateNodegroupVersionCommandOutput;
    };
  };
}
