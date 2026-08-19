// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteCertificateAuthorityRequest, DeleteCertificateAuthorityResponse } from "../models/models_0";
import { DeleteCertificateAuthority$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteCertificateAuthorityCommand}.
 */
export interface DeleteCertificateAuthorityCommandInput extends DeleteCertificateAuthorityRequest {}
/**
 * @public
 *
 * The output of {@link DeleteCertificateAuthorityCommand}.
 */
export interface DeleteCertificateAuthorityCommandOutput extends DeleteCertificateAuthorityResponse, __MetadataBearer {}

/**
 * <p>Deletes a certificate authority (CA) from your cluster.</p>
 *          <p>Deleting a certificate authority removes its public certificate from the cluster's
 *             trust bundle. You can't delete the certificate authority that's currently signing
 *             certificates for the cluster (its <code>signingStatus</code> is <code>IN_USE</code>) — to
 *             remove the outgoing CA, first activate the successor CA with <a href="https://docs.aws.amazon.com/eks/latest/APIReference/API_ActivateCertificateAuthority.html">
 *                <code>ActivateCertificateAuthority</code>
 *             </a>. Amazon EKS also protects a successor CA
 *             from deletion in certain cases to keep a valid rotation path — for example, a successor
 *             that Amazon EKS appended can't be deleted while it's the only successor on the cluster. This is
 *             an asynchronous operation that returns an <code>update</code> object.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, DeleteCertificateAuthorityCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, DeleteCertificateAuthorityCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * // import type { EKSClientConfig } from "@aws-sdk/client-eks";
 * const config = {}; // type is EKSClientConfig
 * const client = new EKSClient(config);
 * const input = { // DeleteCertificateAuthorityRequest
 *   clusterName: "STRING_VALUE", // required
 *   certificateAuthorityId: "STRING_VALUE", // required
 *   clientRequestToken: "STRING_VALUE",
 * };
 * const command = new DeleteCertificateAuthorityCommand(input);
 * const response = await client.send(command);
 * // { // DeleteCertificateAuthorityResponse
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
 * @param DeleteCertificateAuthorityCommandInput - {@link DeleteCertificateAuthorityCommandInput}
 * @returns {@link DeleteCertificateAuthorityCommandOutput}
 * @see {@link DeleteCertificateAuthorityCommandInput} for command's `input` shape.
 * @see {@link DeleteCertificateAuthorityCommandOutput} for command's `response` shape.
 * @see {@link EKSClientResolvedConfig | config} for EKSClient's `config` shape.
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
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is unavailable. Back off and retry the operation.</p>
 *
 * @throws {@link EKSServiceException}
 * <p>Base exception class for all service exceptions from EKS service.</p>
 *
 *
 * @public
 */
export class DeleteCertificateAuthorityCommand extends command<DeleteCertificateAuthorityCommandInput, DeleteCertificateAuthorityCommandOutput>(
  _ep0,
  _mw0,
  "DeleteCertificateAuthority",
  DeleteCertificateAuthority$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteCertificateAuthorityRequest;
      output: DeleteCertificateAuthorityResponse;
    };
    sdk: {
      input: DeleteCertificateAuthorityCommandInput;
      output: DeleteCertificateAuthorityCommandOutput;
    };
  };
}
