// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateCertificateAuthorityRequest, CreateCertificateAuthorityResponse } from "../models/models_0";
import { CreateCertificateAuthority$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateCertificateAuthorityCommand}.
 */
export interface CreateCertificateAuthorityCommandInput extends CreateCertificateAuthorityRequest {}
/**
 * @public
 *
 * The output of {@link CreateCertificateAuthorityCommand}.
 */
export interface CreateCertificateAuthorityCommandOutput extends CreateCertificateAuthorityResponse, __MetadataBearer {}

/**
 * Appends a successor certificate authority (CA) to your cluster, beginning the CA rotation process.
 *
 * A cluster certificate authority is the root of trust for your cluster's control plane. It signs the certificates that secure communication between the Kubernetes API server and its clients, and its public certificate is distributed to your cluster's trust bundle so that worker nodes and clients can verify the API server's identity. Each cluster can have at most two certificate authorities at a time: the outgoing CA that's currently signing (its `signingStatus` is `IN_USE`) and one successor CA (`signingStatus` of `NOT_USED`) that you can later activate to complete the rotation.
 *
 * Appending a successor CA adds its public certificate to the cluster's trust bundle so that the cluster trusts both CAs simultaneously (the dual trust period), but it doesn't begin signing certificates. Amazon EKS then distributes the successor CA to the Amazon Web Services managed components in your cluster; you can track this through the CA's `distributionStatus`. The successor CA can't be activated until its `distributionStatus` is `COMPLETE`. To activate it as the cluster's signer, use [`ActivateCertificateAuthority`](https://docs.aws.amazon.com/eks/latest/APIReference/API_ActivateCertificateAuthority.html). This is an asynchronous operation that returns an `update` object. If you don't append a successor CA yourself, Amazon EKS appends one automatically before the outgoing CA approaches expiration.
 *
 * For more information, see [Rotate the Amazon EKS cluster certificate authority](https://docs.aws.amazon.com/eks/latest/userguide/certificate-authority-rotation.html) in the *Amazon EKS User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, CreateCertificateAuthorityCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, CreateCertificateAuthorityCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * // import type { EKSClientConfig } from "@aws-sdk/client-eks";
 * const config = {}; // type is EKSClientConfig
 * const client = new EKSClient(config);
 * const input = { // CreateCertificateAuthorityRequest
 *   clusterName: "STRING_VALUE", // required
 *   clientRequestToken: "STRING_VALUE",
 * };
 * const command = new CreateCertificateAuthorityCommand(input);
 * const response = await client.send(command);
 * // { // CreateCertificateAuthorityResponse
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
 * @param CreateCertificateAuthorityCommandInput - {@link CreateCertificateAuthorityCommandInput}
 * @returns {@link CreateCertificateAuthorityCommandOutput}
 * @see {@link CreateCertificateAuthorityCommandInput} for command's `input` shape.
 * @see {@link CreateCertificateAuthorityCommandOutput} for command's `response` shape.
 * @see {@link EKSClientResolvedConfig | config} for EKSClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * The specified parameter is invalid. Review the available parameters for the API request.
 *
 * @throws {@link ResourceInUseException} (client fault)
 *
 * The specified resource is in use.
 *
 * @throws {@link ResourceLimitExceededException} (client fault)
 *
 * You have encountered a service limit on the specified resource.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource could not be found. You can view your available clusters with `ListClusters`. You can view your available managed node groups with `ListNodegroups`. Amazon EKS clusters and node groups are Amazon Web Services Region specific.
 *
 * @throws {@link ServerException} (server fault)
 *
 * These errors are usually caused by a server-side issue.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The service is unavailable. Back off and retry the operation.
 *
 * @throws {@link EKSServiceException}
 *
 * Base exception class for all service exceptions from EKS service.
 *
 * @public
 */
export class CreateCertificateAuthorityCommand extends command<CreateCertificateAuthorityCommandInput, CreateCertificateAuthorityCommandOutput>(
  _ep0,
  _mw0,
  "CreateCertificateAuthority",
  CreateCertificateAuthority$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateCertificateAuthorityRequest;
      output: CreateCertificateAuthorityResponse;
    };
    sdk: {
      input: CreateCertificateAuthorityCommandInput;
      output: CreateCertificateAuthorityCommandOutput;
    };
  };
}
