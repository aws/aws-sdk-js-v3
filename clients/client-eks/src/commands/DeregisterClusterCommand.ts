// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EKSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EKSClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeregisterClusterRequest, DeregisterClusterResponse } from "../models/models_0";
import { de_DeregisterClusterCommand, se_DeregisterClusterCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeregisterClusterCommand}.
 */
export interface DeregisterClusterCommandInput extends DeregisterClusterRequest {}
/**
 * @public
 *
 * The output of {@link DeregisterClusterCommand}.
 */
export interface DeregisterClusterCommandOutput extends DeregisterClusterResponse, __MetadataBearer {}

/**
 * <p>Deregisters a connected cluster to remove it from the Amazon EKS control
 *             plane.</p>
 *          <p>A connected cluster is a Kubernetes cluster that you've connected to your control plane
 *             using the <a href="https://docs.aws.amazon.com/eks/latest/userguide/eks-connector.html">Amazon EKS Connector</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, DeregisterClusterCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, DeregisterClusterCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * const client = new EKSClient(config);
 * const input = { // DeregisterClusterRequest
 *   name: "STRING_VALUE", // required
 * };
 * const command = new DeregisterClusterCommand(input);
 * const response = await client.send(command);
 * // { // DeregisterClusterResponse
 * //   cluster: { // Cluster
 * //     name: "STRING_VALUE",
 * //     arn: "STRING_VALUE",
 * //     createdAt: new Date("TIMESTAMP"),
 * //     version: "STRING_VALUE",
 * //     endpoint: "STRING_VALUE",
 * //     roleArn: "STRING_VALUE",
 * //     resourcesVpcConfig: { // VpcConfigResponse
 * //       subnetIds: [ // StringList
 * //         "STRING_VALUE",
 * //       ],
 * //       securityGroupIds: [
 * //         "STRING_VALUE",
 * //       ],
 * //       clusterSecurityGroupId: "STRING_VALUE",
 * //       vpcId: "STRING_VALUE",
 * //       endpointPublicAccess: true || false,
 * //       endpointPrivateAccess: true || false,
 * //       publicAccessCidrs: [
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     kubernetesNetworkConfig: { // KubernetesNetworkConfigResponse
 * //       serviceIpv4Cidr: "STRING_VALUE",
 * //       serviceIpv6Cidr: "STRING_VALUE",
 * //       ipFamily: "ipv4" || "ipv6",
 * //       elasticLoadBalancing: { // ElasticLoadBalancing
 * //         enabled: true || false,
 * //       },
 * //     },
 * //     logging: { // Logging
 * //       clusterLogging: [ // LogSetups
 * //         { // LogSetup
 * //           types: [ // LogTypes
 * //             "api" || "audit" || "authenticator" || "controllerManager" || "scheduler",
 * //           ],
 * //           enabled: true || false,
 * //         },
 * //       ],
 * //     },
 * //     identity: { // Identity
 * //       oidc: { // OIDC
 * //         issuer: "STRING_VALUE",
 * //       },
 * //     },
 * //     status: "CREATING" || "ACTIVE" || "DELETING" || "FAILED" || "UPDATING" || "PENDING",
 * //     certificateAuthority: { // Certificate
 * //       data: "STRING_VALUE",
 * //     },
 * //     clientRequestToken: "STRING_VALUE",
 * //     platformVersion: "STRING_VALUE",
 * //     tags: { // TagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     encryptionConfig: [ // EncryptionConfigList
 * //       { // EncryptionConfig
 * //         resources: [
 * //           "STRING_VALUE",
 * //         ],
 * //         provider: { // Provider
 * //           keyArn: "STRING_VALUE",
 * //         },
 * //       },
 * //     ],
 * //     connectorConfig: { // ConnectorConfigResponse
 * //       activationId: "STRING_VALUE",
 * //       activationCode: "STRING_VALUE",
 * //       activationExpiry: new Date("TIMESTAMP"),
 * //       provider: "STRING_VALUE",
 * //       roleArn: "STRING_VALUE",
 * //     },
 * //     id: "STRING_VALUE",
 * //     health: { // ClusterHealth
 * //       issues: [ // ClusterIssueList
 * //         { // ClusterIssue
 * //           code: "AccessDenied" || "ClusterUnreachable" || "ConfigurationConflict" || "InternalFailure" || "ResourceLimitExceeded" || "ResourceNotFound" || "IamRoleNotFound" || "VpcNotFound" || "InsufficientFreeAddresses" || "Ec2ServiceNotSubscribed" || "Ec2SubnetNotFound" || "Ec2SecurityGroupNotFound" || "KmsGrantRevoked" || "KmsKeyNotFound" || "KmsKeyMarkedForDeletion" || "KmsKeyDisabled" || "StsRegionalEndpointDisabled" || "UnsupportedVersion" || "Other",
 * //           message: "STRING_VALUE",
 * //           resourceIds: "<StringList>",
 * //         },
 * //       ],
 * //     },
 * //     outpostConfig: { // OutpostConfigResponse
 * //       outpostArns: "<StringList>", // required
 * //       controlPlaneInstanceType: "STRING_VALUE", // required
 * //       controlPlanePlacement: { // ControlPlanePlacementResponse
 * //         groupName: "STRING_VALUE",
 * //       },
 * //     },
 * //     accessConfig: { // AccessConfigResponse
 * //       bootstrapClusterCreatorAdminPermissions: true || false,
 * //       authenticationMode: "API" || "API_AND_CONFIG_MAP" || "CONFIG_MAP",
 * //     },
 * //     upgradePolicy: { // UpgradePolicyResponse
 * //       supportType: "STANDARD" || "EXTENDED",
 * //     },
 * //     zonalShiftConfig: { // ZonalShiftConfigResponse
 * //       enabled: true || false,
 * //     },
 * //     remoteNetworkConfig: { // RemoteNetworkConfigResponse
 * //       remoteNodeNetworks: [ // RemoteNodeNetworkList
 * //         { // RemoteNodeNetwork
 * //           cidrs: "<StringList>",
 * //         },
 * //       ],
 * //       remotePodNetworks: [ // RemotePodNetworkList
 * //         { // RemotePodNetwork
 * //           cidrs: "<StringList>",
 * //         },
 * //       ],
 * //     },
 * //     computeConfig: { // ComputeConfigResponse
 * //       enabled: true || false,
 * //       nodePools: "<StringList>",
 * //       nodeRoleArn: "STRING_VALUE",
 * //     },
 * //     storageConfig: { // StorageConfigResponse
 * //       blockStorage: { // BlockStorage
 * //         enabled: true || false,
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DeregisterClusterCommandInput - {@link DeregisterClusterCommandInput}
 * @returns {@link DeregisterClusterCommandOutput}
 * @see {@link DeregisterClusterCommandInput} for command's `input` shape.
 * @see {@link DeregisterClusterCommandOutput} for command's `response` shape.
 * @see {@link EKSClientResolvedConfig | config} for EKSClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permissions to perform the requested operation. The <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_terms-and-concepts.html">IAM principal</a>
 *             making the request must have at least one IAM permissions policy attached
 *             that grants the required permissions. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access.html">Access
 *                 management</a> in the <i>IAM User Guide</i>.
 *         </p>
 *
 * @throws {@link ClientException} (client fault)
 *  <p>These errors are usually caused by a client action. Actions can include using an
 *             action or resource on behalf of an <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_terms-and-concepts.html">IAM principal</a> that doesn't have permissions to use
 *             the action or resource or specifying an identifier that is not valid.</p>
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
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is unavailable. Back off and retry the operation.</p>
 *
 * @throws {@link EKSServiceException}
 * <p>Base exception class for all service exceptions from EKS service.</p>
 *
 * @public
 */
export class DeregisterClusterCommand extends $Command
  .classBuilder<
    DeregisterClusterCommandInput,
    DeregisterClusterCommandOutput,
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
  .s("AWSWesleyFrontend", "DeregisterCluster", {})
  .n("EKSClient", "DeregisterClusterCommand")
  .f(void 0, void 0)
  .ser(se_DeregisterClusterCommand)
  .de(de_DeregisterClusterCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeregisterClusterRequest;
      output: DeregisterClusterResponse;
    };
    sdk: {
      input: DeregisterClusterCommandInput;
      output: DeregisterClusterCommandOutput;
    };
  };
}
