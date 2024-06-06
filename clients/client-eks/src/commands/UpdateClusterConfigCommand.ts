// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EKSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EKSClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateClusterConfigRequest, UpdateClusterConfigResponse } from "../models/models_0";
import { de_UpdateClusterConfigCommand, se_UpdateClusterConfigCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateClusterConfigCommand}.
 */
export interface UpdateClusterConfigCommandInput extends UpdateClusterConfigRequest {}
/**
 * @public
 *
 * The output of {@link UpdateClusterConfigCommand}.
 */
export interface UpdateClusterConfigCommandOutput extends UpdateClusterConfigResponse, __MetadataBearer {}

/**
 * <p>Updates an Amazon EKS cluster configuration. Your cluster continues to
 *             function during the update. The response output includes an update ID that you can use
 *             to track the status of your cluster update with <code>DescribeUpdate</code>"/>.</p>
 *          <p>You can use this API operation to enable or disable exporting the Kubernetes control plane
 *             logs for your cluster to CloudWatch Logs. By default, cluster control plane logs
 *             aren't exported to CloudWatch Logs. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/control-plane-logs.html">Amazon EKS Cluster control plane logs</a> in the
 *                 <i>
 *                <i>Amazon EKS User Guide</i>
 *             </i>.</p>
 *          <note>
 *             <p>CloudWatch Logs ingestion, archive storage, and data scanning rates apply to
 *                 exported control plane logs. For more information, see <a href="http://aws.amazon.com/cloudwatch/pricing/">CloudWatch
 *                 Pricing</a>.</p>
 *          </note>
 *          <p>You can also use this API operation to enable or disable public and private access to
 *             your cluster's Kubernetes API server endpoint. By default, public access is enabled, and
 *             private access is disabled. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/cluster-endpoint.html">Amazon EKS cluster endpoint access control</a> in the
 *                 <i>
 *                <i>Amazon EKS User Guide</i>
 *             </i>.</p>
 *          <p>You can also use this API operation to choose different subnets and security groups
 *             for the cluster. You must specify at least two subnets that are in different
 *             Availability Zones. You can't change which VPC the subnets are from, the subnets must be
 *             in the same VPC as the subnets that the cluster was created with. For more information
 *             about the VPC requirements, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/network_reqs.html">https://docs.aws.amazon.com/eks/latest/userguide/network_reqs.html</a> in the <i>
 *                <i>Amazon EKS User Guide</i>
 *             </i>.</p>
 *          <p>Cluster updates are asynchronous, and they should finish within a few minutes. During
 *             an update, the cluster status moves to <code>UPDATING</code> (this status transition is
 *             eventually consistent). When the update is complete (either <code>Failed</code> or
 *                 <code>Successful</code>), the cluster status moves to <code>Active</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, UpdateClusterConfigCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, UpdateClusterConfigCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * const client = new EKSClient(config);
 * const input = { // UpdateClusterConfigRequest
 *   name: "STRING_VALUE", // required
 *   resourcesVpcConfig: { // VpcConfigRequest
 *     subnetIds: [ // StringList
 *       "STRING_VALUE",
 *     ],
 *     securityGroupIds: [
 *       "STRING_VALUE",
 *     ],
 *     endpointPublicAccess: true || false,
 *     endpointPrivateAccess: true || false,
 *     publicAccessCidrs: [
 *       "STRING_VALUE",
 *     ],
 *   },
 *   logging: { // Logging
 *     clusterLogging: [ // LogSetups
 *       { // LogSetup
 *         types: [ // LogTypes
 *           "api" || "audit" || "authenticator" || "controllerManager" || "scheduler",
 *         ],
 *         enabled: true || false,
 *       },
 *     ],
 *   },
 *   clientRequestToken: "STRING_VALUE",
 *   accessConfig: { // UpdateAccessConfigRequest
 *     authenticationMode: "API" || "API_AND_CONFIG_MAP" || "CONFIG_MAP",
 *   },
 * };
 * const command = new UpdateClusterConfigCommand(input);
 * const response = await client.send(command);
 * // { // UpdateClusterConfigResponse
 * //   update: { // Update
 * //     id: "STRING_VALUE",
 * //     status: "InProgress" || "Failed" || "Cancelled" || "Successful",
 * //     type: "VersionUpdate" || "EndpointAccessUpdate" || "LoggingUpdate" || "ConfigUpdate" || "AssociateIdentityProviderConfig" || "DisassociateIdentityProviderConfig" || "AssociateEncryptionConfig" || "AddonUpdate" || "VpcConfigUpdate" || "AccessConfigUpdate",
 * //     params: [ // UpdateParams
 * //       { // UpdateParam
 * //         type: "Version" || "PlatformVersion" || "EndpointPrivateAccess" || "EndpointPublicAccess" || "ClusterLogging" || "DesiredSize" || "LabelsToAdd" || "LabelsToRemove" || "TaintsToAdd" || "TaintsToRemove" || "MaxSize" || "MinSize" || "ReleaseVersion" || "PublicAccessCidrs" || "LaunchTemplateName" || "LaunchTemplateVersion" || "IdentityProviderConfig" || "EncryptionConfig" || "AddonVersion" || "ServiceAccountRoleArn" || "ResolveConflicts" || "MaxUnavailable" || "MaxUnavailablePercentage" || "ConfigurationValues" || "SecurityGroups" || "Subnets" || "AuthenticationMode" || "PodIdentityAssociations",
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
 * @param UpdateClusterConfigCommandInput - {@link UpdateClusterConfigCommandInput}
 * @returns {@link UpdateClusterConfigCommandOutput}
 * @see {@link UpdateClusterConfigCommandInput} for command's `input` shape.
 * @see {@link UpdateClusterConfigCommandOutput} for command's `response` shape.
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
 *                 <code>ListNodegroups</code>. Amazon EKS clusters and node groups are Amazon Web Services Region specific.</p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server-side issue.</p>
 *
 * @throws {@link EKSServiceException}
 * <p>Base exception class for all service exceptions from EKS service.</p>
 *
 * @public
 */
export class UpdateClusterConfigCommand extends $Command
  .classBuilder<
    UpdateClusterConfigCommandInput,
    UpdateClusterConfigCommandOutput,
    EKSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: EKSClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSWesleyFrontend", "UpdateClusterConfig", {})
  .n("EKSClient", "UpdateClusterConfigCommand")
  .f(void 0, void 0)
  .ser(se_UpdateClusterConfigCommand)
  .de(de_UpdateClusterConfigCommand)
  .build() {}
