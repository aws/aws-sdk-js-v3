// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateClusterVersionRequest, UpdateClusterVersionResponse } from "../models/models_0";
import { UpdateClusterVersion$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateClusterVersionCommand}.
 */
export interface UpdateClusterVersionCommandInput extends UpdateClusterVersionRequest {}
/**
 * @public
 *
 * The output of {@link UpdateClusterVersionCommand}.
 */
export interface UpdateClusterVersionCommandOutput extends UpdateClusterVersionResponse, __MetadataBearer {}

/**
 * Updates an Amazon EKS cluster to the specified Kubernetes version. Your cluster continues to function during the update. The response output includes an update ID that you can use to track the status of your cluster update with the [`DescribeUpdate`](https://docs.aws.amazon.com/eks/latest/APIReference/API_DescribeUpdate.html) API operation.
 *
 * Cluster updates are asynchronous, and they should finish within a few minutes. During an update, the cluster status moves to `UPDATING` (this status transition is eventually consistent). When the update is complete (either `Failed` or `Successful`), the cluster status moves to `Active`.
 *
 * If your cluster has managed node groups attached to it, all of your node groups' Kubernetes versions must match the cluster's Kubernetes version in order to update the cluster to a new Kubernetes version.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, UpdateClusterVersionCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, UpdateClusterVersionCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * // import type { EKSClientConfig } from "@aws-sdk/client-eks";
 * const config = {}; // type is EKSClientConfig
 * const client = new EKSClient(config);
 * const input = { // UpdateClusterVersionRequest
 *   name: "STRING_VALUE", // required
 *   version: "STRING_VALUE", // required
 *   clientRequestToken: "STRING_VALUE",
 *   force: true || false,
 *   rollbackConfig: { // RollbackConfig
 *     timeoutMinutes: Number("int"),
 *   },
 * };
 * const command = new UpdateClusterVersionCommand(input);
 * const response = await client.send(command);
 * // { // UpdateClusterVersionResponse
 * //   update: { // Update
 * //     id: "STRING_VALUE",
 * //     status: "InProgress" || "Failed" || "Cancelled" || "Successful",
 * //     type: "VersionUpdate" || "EndpointAccessUpdate" || "LoggingUpdate" || "ConfigUpdate" || "AssociateIdentityProviderConfig" || "DisassociateIdentityProviderConfig" || "AssociateEncryptionConfig" || "AddonUpdate" || "VpcConfigUpdate" || "AccessConfigUpdate" || "UpgradePolicyUpdate" || "ZonalShiftConfigUpdate" || "AutoModeUpdate" || "RemoteNetworkConfigUpdate" || "DeletionProtectionUpdate" || "CapabilityUpdate" || "ControlPlaneScalingConfigUpdate" || "VendedLogsUpdate" || "ControlPlaneEgressUpdate" || "VersionRollback" || "ControlPlaneComponentConfigUpdate" || "CertificateAuthorityUpdate",
 * //     params: [ // UpdateParams
 * //       { // UpdateParam
 * //         type: "Version" || "PlatformVersion" || "EndpointPrivateAccess" || "EndpointPublicAccess" || "ClusterLogging" || "DesiredSize" || "LabelsToAdd" || "LabelsToRemove" || "TaintsToAdd" || "TaintsToRemove" || "MaxSize" || "MinSize" || "ReleaseVersion" || "PublicAccessCidrs" || "LaunchTemplateName" || "LaunchTemplateVersion" || "IdentityProviderConfig" || "EncryptionConfig" || "AddonVersion" || "ServiceAccountRoleArn" || "ResolveConflicts" || "MaxUnavailable" || "MaxUnavailablePercentage" || "NodeRepairEnabled" || "UpdateStrategy" || "ConfigurationValues" || "SecurityGroups" || "Subnets" || "AuthenticationMode" || "PodIdentityAssociations" || "UpgradePolicy" || "ZonalShiftConfig" || "ComputeConfig" || "StorageConfig" || "KubernetesNetworkConfig" || "RemoteNetworkConfig" || "DeletionProtection" || "NodeRepairConfig" || "RoleArn" || "RoleMappingsToAddOrUpdate" || "RoleMappingsToRemove" || "NetworkAccess" || "VendedLogs" || "UpdatedTier" || "PreviousTier" || "EnableCrossNamespace" || "DisabledServices" || "WarmPoolEnabled" || "WarmPoolMaxGroupPreparedCapacity" || "WarmPoolMinSize" || "WarmPoolState" || "WarmPoolReuseOnScaleIn" || "ControlPlaneEgressMode" || "KubeApiServerConfig" || "KubeSchedulerConfig" || "KubeControllerManagerConfig" || "ActiveCertificateAuthority" || "TrustedCertificateAuthorities" || "CertificateAuthorityId" || "SigningStatus",
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
 * //     cancellation: { // Cancellation
 * //       status: "InProgress" || "Failed" || "Successful",
 * //       reason: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateClusterVersionCommandInput - {@link UpdateClusterVersionCommandInput}
 * @returns {@link UpdateClusterVersionCommandOutput}
 * @see {@link UpdateClusterVersionCommandInput} for command's `input` shape.
 * @see {@link UpdateClusterVersionCommandOutput} for command's `response` shape.
 * @see {@link EKSClientResolvedConfig | config} for EKSClient's `config` shape.
 *
 * @throws {@link ClientException} (client fault)
 *
 * These errors are usually caused by a client action. Actions can include using an action or resource on behalf of an [IAM principal](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_terms-and-concepts.html) that doesn't have permissions to use the action or resource or specifying an identifier that is not valid.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * The specified parameter is invalid. Review the available parameters for the API request.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is invalid given the state of the cluster. Check the state of the cluster and the associated operations.
 *
 * @throws {@link InvalidStateException} (client fault)
 *
 * Amazon EKS detected upgrade readiness issues. Call the [`ListInsights`](https://docs.aws.amazon.com/eks/latest/APIReference/API_ListInsights.html) API to view detected upgrade blocking issues. Pass the [`force`](https://docs.aws.amazon.com/eks/latest/APIReference/API_UpdateClusterVersion.html#API_UpdateClusterVersion_RequestBody) flag when updating to override upgrade readiness errors.
 *
 * @throws {@link ResourceInUseException} (client fault)
 *
 * The specified resource is in use.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource could not be found. You can view your available clusters with `ListClusters`. You can view your available managed node groups with `ListNodegroups`. Amazon EKS clusters and node groups are Amazon Web Services Region specific.
 *
 * @throws {@link ServerException} (server fault)
 *
 * These errors are usually caused by a server-side issue.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request or operation couldn't be performed because a service is throttling requests.
 *
 * @throws {@link EKSServiceException}
 *
 * Base exception class for all service exceptions from EKS service.
 *
 * @public
 */
export class UpdateClusterVersionCommand extends command<UpdateClusterVersionCommandInput, UpdateClusterVersionCommandOutput>(
  _ep0,
  _mw0,
  "UpdateClusterVersion",
  UpdateClusterVersion$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateClusterVersionRequest;
      output: UpdateClusterVersionResponse;
    };
    sdk: {
      input: UpdateClusterVersionCommandInput;
      output: UpdateClusterVersionCommandOutput;
    };
  };
}
