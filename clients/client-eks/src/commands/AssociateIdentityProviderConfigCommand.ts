// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EKSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EKSClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { AssociateIdentityProviderConfigRequest, AssociateIdentityProviderConfigResponse } from "../models/models_0";
import {
  de_AssociateIdentityProviderConfigCommand,
  se_AssociateIdentityProviderConfigCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AssociateIdentityProviderConfigCommand}.
 */
export interface AssociateIdentityProviderConfigCommandInput extends AssociateIdentityProviderConfigRequest {}
/**
 * @public
 *
 * The output of {@link AssociateIdentityProviderConfigCommand}.
 */
export interface AssociateIdentityProviderConfigCommandOutput
  extends AssociateIdentityProviderConfigResponse,
    __MetadataBearer {}

/**
 * <p>Associates an identity provider configuration to a cluster.</p>
 *          <p>If you want to authenticate identities using an identity provider, you can create an
 *             identity provider configuration and associate it to your cluster. After configuring
 *             authentication to your cluster you can create Kubernetes <code>Role</code> and
 *                 <code>ClusterRole</code> objects, assign permissions to them, and then bind them to
 *             the identities using Kubernetes <code>RoleBinding</code> and <code>ClusterRoleBinding</code>
 *             objects. For more information see <a href="https://kubernetes.io/docs/reference/access-authn-authz/rbac/">Using RBAC
 *                 Authorization</a> in the Kubernetes documentation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, AssociateIdentityProviderConfigCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, AssociateIdentityProviderConfigCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * const client = new EKSClient(config);
 * const input = { // AssociateIdentityProviderConfigRequest
 *   clusterName: "STRING_VALUE", // required
 *   oidc: { // OidcIdentityProviderConfigRequest
 *     identityProviderConfigName: "STRING_VALUE", // required
 *     issuerUrl: "STRING_VALUE", // required
 *     clientId: "STRING_VALUE", // required
 *     usernameClaim: "STRING_VALUE",
 *     usernamePrefix: "STRING_VALUE",
 *     groupsClaim: "STRING_VALUE",
 *     groupsPrefix: "STRING_VALUE",
 *     requiredClaims: { // requiredClaimsMap
 *       "<keys>": "STRING_VALUE",
 *     },
 *   },
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   clientRequestToken: "STRING_VALUE",
 * };
 * const command = new AssociateIdentityProviderConfigCommand(input);
 * const response = await client.send(command);
 * // { // AssociateIdentityProviderConfigResponse
 * //   update: { // Update
 * //     id: "STRING_VALUE",
 * //     status: "InProgress" || "Failed" || "Cancelled" || "Successful",
 * //     type: "VersionUpdate" || "EndpointAccessUpdate" || "LoggingUpdate" || "ConfigUpdate" || "AssociateIdentityProviderConfig" || "DisassociateIdentityProviderConfig" || "AssociateEncryptionConfig" || "AddonUpdate" || "VpcConfigUpdate" || "AccessConfigUpdate" || "UpgradePolicyUpdate" || "ZonalShiftConfigUpdate" || "AutoModeUpdate" || "RemoteNetworkConfigUpdate",
 * //     params: [ // UpdateParams
 * //       { // UpdateParam
 * //         type: "Version" || "PlatformVersion" || "EndpointPrivateAccess" || "EndpointPublicAccess" || "ClusterLogging" || "DesiredSize" || "LabelsToAdd" || "LabelsToRemove" || "TaintsToAdd" || "TaintsToRemove" || "MaxSize" || "MinSize" || "ReleaseVersion" || "PublicAccessCidrs" || "LaunchTemplateName" || "LaunchTemplateVersion" || "IdentityProviderConfig" || "EncryptionConfig" || "AddonVersion" || "ServiceAccountRoleArn" || "ResolveConflicts" || "MaxUnavailable" || "MaxUnavailablePercentage" || "NodeRepairEnabled" || "UpdateStrategy" || "ConfigurationValues" || "SecurityGroups" || "Subnets" || "AuthenticationMode" || "PodIdentityAssociations" || "UpgradePolicy" || "ZonalShiftConfig" || "ComputeConfig" || "StorageConfig" || "KubernetesNetworkConfig" || "RemoteNetworkConfig",
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
 * //   tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param AssociateIdentityProviderConfigCommandInput - {@link AssociateIdentityProviderConfigCommandInput}
 * @returns {@link AssociateIdentityProviderConfigCommandOutput}
 * @see {@link AssociateIdentityProviderConfigCommandInput} for command's `input` shape.
 * @see {@link AssociateIdentityProviderConfigCommandOutput} for command's `response` shape.
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
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request or operation couldn't be performed because a service is throttling
 *             requests.</p>
 *
 * @throws {@link EKSServiceException}
 * <p>Base exception class for all service exceptions from EKS service.</p>
 *
 *
 * @public
 */
export class AssociateIdentityProviderConfigCommand extends $Command
  .classBuilder<
    AssociateIdentityProviderConfigCommandInput,
    AssociateIdentityProviderConfigCommandOutput,
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
  .s("AWSWesleyFrontend", "AssociateIdentityProviderConfig", {})
  .n("EKSClient", "AssociateIdentityProviderConfigCommand")
  .f(void 0, void 0)
  .ser(se_AssociateIdentityProviderConfigCommand)
  .de(de_AssociateIdentityProviderConfigCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateIdentityProviderConfigRequest;
      output: AssociateIdentityProviderConfigResponse;
    };
    sdk: {
      input: AssociateIdentityProviderConfigCommandInput;
      output: AssociateIdentityProviderConfigCommandOutput;
    };
  };
}
