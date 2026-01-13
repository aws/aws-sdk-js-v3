// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EKSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EKSClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateCapabilityRequest, UpdateCapabilityResponse } from "../models/models_0";
import { UpdateCapability$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateCapabilityCommand}.
 */
export interface UpdateCapabilityCommandInput extends UpdateCapabilityRequest {}
/**
 * @public
 *
 * The output of {@link UpdateCapabilityCommand}.
 */
export interface UpdateCapabilityCommandOutput extends UpdateCapabilityResponse, __MetadataBearer {}

/**
 * <p>Updates the configuration of a managed capability in your Amazon EKS cluster. You can update the IAM role, configuration settings, and delete propagation policy for a capability.</p>
 *          <p>When you update a capability, Amazon EKS applies the changes and may restart capability components as needed. The capability remains available during the update process, but some operations may be temporarily unavailable.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, UpdateCapabilityCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, UpdateCapabilityCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * // import type { EKSClientConfig } from "@aws-sdk/client-eks";
 * const config = {}; // type is EKSClientConfig
 * const client = new EKSClient(config);
 * const input = { // UpdateCapabilityRequest
 *   clusterName: "STRING_VALUE", // required
 *   capabilityName: "STRING_VALUE", // required
 *   roleArn: "STRING_VALUE",
 *   configuration: { // UpdateCapabilityConfiguration
 *     argoCd: { // UpdateArgoCdConfig
 *       rbacRoleMappings: { // UpdateRoleMappings
 *         addOrUpdateRoleMappings: [ // ArgoCdRoleMappingList
 *           { // ArgoCdRoleMapping
 *             role: "ADMIN" || "EDITOR" || "VIEWER", // required
 *             identities: [ // SsoIdentityList // required
 *               { // SsoIdentity
 *                 id: "STRING_VALUE", // required
 *                 type: "SSO_USER" || "SSO_GROUP", // required
 *               },
 *             ],
 *           },
 *         ],
 *         removeRoleMappings: [
 *           {
 *             role: "ADMIN" || "EDITOR" || "VIEWER", // required
 *             identities: [ // required
 *               {
 *                 id: "STRING_VALUE", // required
 *                 type: "SSO_USER" || "SSO_GROUP", // required
 *               },
 *             ],
 *           },
 *         ],
 *       },
 *       networkAccess: { // ArgoCdNetworkAccessConfigRequest
 *         vpceIds: [ // StringList
 *           "STRING_VALUE",
 *         ],
 *       },
 *     },
 *   },
 *   clientRequestToken: "STRING_VALUE",
 *   deletePropagationPolicy: "RETAIN",
 * };
 * const command = new UpdateCapabilityCommand(input);
 * const response = await client.send(command);
 * // { // UpdateCapabilityResponse
 * //   update: { // Update
 * //     id: "STRING_VALUE",
 * //     status: "InProgress" || "Failed" || "Cancelled" || "Successful",
 * //     type: "VersionUpdate" || "EndpointAccessUpdate" || "LoggingUpdate" || "ConfigUpdate" || "AssociateIdentityProviderConfig" || "DisassociateIdentityProviderConfig" || "AssociateEncryptionConfig" || "AddonUpdate" || "VpcConfigUpdate" || "AccessConfigUpdate" || "UpgradePolicyUpdate" || "ZonalShiftConfigUpdate" || "AutoModeUpdate" || "RemoteNetworkConfigUpdate" || "DeletionProtectionUpdate" || "ControlPlaneScalingConfigUpdate",
 * //     params: [ // UpdateParams
 * //       { // UpdateParam
 * //         type: "Version" || "PlatformVersion" || "EndpointPrivateAccess" || "EndpointPublicAccess" || "ClusterLogging" || "DesiredSize" || "LabelsToAdd" || "LabelsToRemove" || "TaintsToAdd" || "TaintsToRemove" || "MaxSize" || "MinSize" || "ReleaseVersion" || "PublicAccessCidrs" || "LaunchTemplateName" || "LaunchTemplateVersion" || "IdentityProviderConfig" || "EncryptionConfig" || "AddonVersion" || "ServiceAccountRoleArn" || "ResolveConflicts" || "MaxUnavailable" || "MaxUnavailablePercentage" || "NodeRepairEnabled" || "UpdateStrategy" || "ConfigurationValues" || "SecurityGroups" || "Subnets" || "AuthenticationMode" || "PodIdentityAssociations" || "UpgradePolicy" || "ZonalShiftConfig" || "ComputeConfig" || "StorageConfig" || "KubernetesNetworkConfig" || "RemoteNetworkConfig" || "DeletionProtection" || "NodeRepairConfig" || "UpdatedTier" || "PreviousTier",
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
 * @param UpdateCapabilityCommandInput - {@link UpdateCapabilityCommandInput}
 * @returns {@link UpdateCapabilityCommandOutput}
 * @see {@link UpdateCapabilityCommandInput} for command's `input` shape.
 * @see {@link UpdateCapabilityCommandOutput} for command's `response` shape.
 * @see {@link EKSClientResolvedConfig | config} for EKSClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permissions to perform the requested operation. The <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_terms-and-concepts.html">IAM principal</a>
 *             making the request must have at least one IAM permissions policy attached that grants
 *             the required permissions. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access.html">Access
 *                 management</a> in the <i>IAM User Guide</i>. </p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter is invalid. Review the available parameters for the API
 *             request.</p>
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
export class UpdateCapabilityCommand extends $Command
  .classBuilder<
    UpdateCapabilityCommandInput,
    UpdateCapabilityCommandOutput,
    EKSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EKSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSWesleyFrontend", "UpdateCapability", {})
  .n("EKSClient", "UpdateCapabilityCommand")
  .sc(UpdateCapability$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateCapabilityRequest;
      output: UpdateCapabilityResponse;
    };
    sdk: {
      input: UpdateCapabilityCommandInput;
      output: UpdateCapabilityCommandOutput;
    };
  };
}
