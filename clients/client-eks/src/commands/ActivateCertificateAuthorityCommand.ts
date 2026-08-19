// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ActivateCertificateAuthorityRequest, ActivateCertificateAuthorityResponse } from "../models/models_0";
import { ActivateCertificateAuthority$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ActivateCertificateAuthorityCommand}.
 */
export interface ActivateCertificateAuthorityCommandInput extends ActivateCertificateAuthorityRequest {}
/**
 * @public
 *
 * The output of {@link ActivateCertificateAuthorityCommand}.
 */
export interface ActivateCertificateAuthorityCommandOutput extends ActivateCertificateAuthorityResponse, __MetadataBearer {}

/**
 * <p>Activates a successor certificate authority (CA) as the signing certificate authority
 *             for your cluster, completing a CA rotation.</p>
 *          <p>When you activate a successor CA, Amazon EKS promotes it to be the cluster's signer (its
 *                 <code>signingStatus</code> becomes <code>IN_USE</code>) and the outgoing CA is
 *             retired (<code>NOT_USED</code>). The outgoing CA remains in the cluster's trust bundle but
 *             no longer signs certificates. The successor CA you activate must already be present on
 *             the cluster and fully distributed (its <code>distributionStatus</code> must be
 *                 <code>COMPLETE</code>). This is an asynchronous operation that returns an
 *                 <code>update</code> object you can track with <a href="https://docs.aws.amazon.com/eks/latest/APIReference/API_DescribeUpdate.html">
 *                <code>DescribeUpdate</code>
 *             </a>.</p>
 *          <p>Before you activate the successor CA, make sure the worker nodes you manage and your
 *             external clients have been updated to trust it, so they maintain connectivity to the API
 *             server after activation. For a limited period after activation, CA rollback is available
 *             to revert to the outgoing CA if needed. If you don't activate the successor CA yourself,
 *             Amazon EKS activates it automatically as the expiration deadline approaches. For more
 *             information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/certificate-authority-rotation.html">Rotate the Amazon EKS
 *                 cluster certificate authority</a> in the <i>Amazon EKS User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, ActivateCertificateAuthorityCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, ActivateCertificateAuthorityCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * // import type { EKSClientConfig } from "@aws-sdk/client-eks";
 * const config = {}; // type is EKSClientConfig
 * const client = new EKSClient(config);
 * const input = { // ActivateCertificateAuthorityRequest
 *   clusterName: "STRING_VALUE", // required
 *   certificateAuthorityId: "STRING_VALUE", // required
 *   clientRequestToken: "STRING_VALUE",
 * };
 * const command = new ActivateCertificateAuthorityCommand(input);
 * const response = await client.send(command);
 * // { // ActivateCertificateAuthorityResponse
 * //   update: { // Update
 * //     id: "STRING_VALUE",
 * //     status: "InProgress" || "Failed" || "Cancelled" || "Successful",
 * //     type: "VersionUpdate" || "EndpointAccessUpdate" || "LoggingUpdate" || "ConfigUpdate" || "AssociateIdentityProviderConfig" || "DisassociateIdentityProviderConfig" || "AssociateEncryptionConfig" || "AddonUpdate" || "VpcConfigUpdate" || "AccessConfigUpdate" || "UpgradePolicyUpdate" || "ZonalShiftConfigUpdate" || "AutoModeUpdate" || "RemoteNetworkConfigUpdate" || "DeletionProtectionUpdate" || "CapabilityUpdate" || "ControlPlaneScalingConfigUpdate" || "VendedLogsUpdate" || "ControlPlaneEgressUpdate" || "VersionRollback" || "ControlPlaneComponentConfigUpdate" || "CertificateAuthorityUpdate",
 * //     params: [ // UpdateParams
 * //       { // UpdateParam
 * //         type: "Version" || "PlatformVersion" || "EndpointPrivateAccess" || "EndpointPublicAccess" || "ClusterLogging" || "DesiredSize" || "LabelsToAdd" || "LabelsToRemove" || "TaintsToAdd" || "TaintsToRemove" || "MaxSize" || "MinSize" || "ReleaseVersion" || "PublicAccessCidrs" || "LaunchTemplateName" || "LaunchTemplateVersion" || "IdentityProviderConfig" || "EncryptionConfig" || "AddonVersion" || "ServiceAccountRoleArn" || "ResolveConflicts" || "MaxUnavailable" || "MaxUnavailablePercentage" || "NodeRepairEnabled" || "UpdateStrategy" || "ConfigurationValues" || "SecurityGroups" || "Subnets" || "AuthenticationMode" || "PodIdentityAssociations" || "UpgradePolicy" || "ZonalShiftConfig" || "ComputeConfig" || "StorageConfig" || "KubernetesNetworkConfig" || "RemoteNetworkConfig" || "DeletionProtection" || "NodeRepairConfig" || "RoleArn" || "RoleMappingsToAddOrUpdate" || "RoleMappingsToRemove" || "NetworkAccess" || "VendedLogs" || "UpdatedTier" || "PreviousTier" || "WarmPoolEnabled" || "WarmPoolMaxGroupPreparedCapacity" || "WarmPoolMinSize" || "WarmPoolState" || "WarmPoolReuseOnScaleIn" || "ControlPlaneEgressMode" || "KubeApiServerConfig" || "KubeSchedulerConfig" || "KubeControllerManagerConfig" || "ActiveCertificateAuthority" || "TrustedCertificateAuthorities" || "CertificateAuthorityId" || "SigningStatus",
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
 * //   certificateAuthority: { // CertificateAuthoritySummary
 * //     id: "STRING_VALUE",
 * //     createdAt: new Date("TIMESTAMP"),
 * //     createdBy: "EKS" || "CUSTOMER",
 * //     activatedAt: new Date("TIMESTAMP"),
 * //     activatedBy: "EKS" || "CUSTOMER",
 * //     signingStatus: "NOT_USED" || "ACTIVATING" || "IN_USE",
 * //     distributionStatus: "IN_PROGRESS" || "COMPLETE" || "FAILED" || "DELETING",
 * //   },
 * // };
 *
 * ```
 *
 * @param ActivateCertificateAuthorityCommandInput - {@link ActivateCertificateAuthorityCommandInput}
 * @returns {@link ActivateCertificateAuthorityCommandOutput}
 * @see {@link ActivateCertificateAuthorityCommandInput} for command's `input` shape.
 * @see {@link ActivateCertificateAuthorityCommandOutput} for command's `response` shape.
 * @see {@link EKSClientResolvedConfig | config} for EKSClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter is invalid. Review the available parameters for the API
 *             request.</p>
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
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is unavailable. Back off and retry the operation.</p>
 *
 * @throws {@link EKSServiceException}
 * <p>Base exception class for all service exceptions from EKS service.</p>
 *
 *
 * @public
 */
export class ActivateCertificateAuthorityCommand extends command<ActivateCertificateAuthorityCommandInput, ActivateCertificateAuthorityCommandOutput>(
  _ep0,
  _mw0,
  "ActivateCertificateAuthority",
  ActivateCertificateAuthority$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ActivateCertificateAuthorityRequest;
      output: ActivateCertificateAuthorityResponse;
    };
    sdk: {
      input: ActivateCertificateAuthorityCommandInput;
      output: ActivateCertificateAuthorityCommandOutput;
    };
  };
}
