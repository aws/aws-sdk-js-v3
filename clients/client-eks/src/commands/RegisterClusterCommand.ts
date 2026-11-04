// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RegisterClusterRequest, RegisterClusterResponse } from "../models/models_0";
import { RegisterCluster$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link RegisterClusterCommand}.
 */
export interface RegisterClusterCommandInput extends RegisterClusterRequest {}
/**
 * @public
 *
 * The output of {@link RegisterClusterCommand}.
 */
export interface RegisterClusterCommandOutput extends RegisterClusterResponse, __MetadataBearer {}

/**
 * Connects a Kubernetes cluster to the Amazon EKS control plane.
 *
 * Any Kubernetes cluster can be connected to the Amazon EKS control plane to view current information about the cluster and its nodes.
 *
 * Cluster connection requires two steps. First, send a [`RegisterClusterRequest`](https://docs.aws.amazon.com/eks/latest/APIReference/API_RegisterClusterRequest.html) to add it to the Amazon EKS control plane.
 *
 * Second, a [Manifest](https://amazon-eks.s3.us-west-2.amazonaws.com/eks-connector/manifests/eks-connector/latest/eks-connector.yaml) containing the `activationID` and `activationCode` must be applied to the Kubernetes cluster through it's native provider to provide visibility.
 *
 * After the manifest is updated and applied, the connected cluster is visible to the Amazon EKS control plane. If the manifest isn't applied within three days, the connected cluster will no longer be visible and must be deregistered using `DeregisterCluster`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, RegisterClusterCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, RegisterClusterCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * // import type { EKSClientConfig } from "@aws-sdk/client-eks";
 * const config = {}; // type is EKSClientConfig
 * const client = new EKSClient(config);
 * const input = { // RegisterClusterRequest
 *   name: "STRING_VALUE", // required
 *   connectorConfig: { // ConnectorConfigRequest
 *     roleArn: "STRING_VALUE", // required
 *     provider: "EKS_ANYWHERE" || "ANTHOS" || "GKE" || "AKS" || "OPENSHIFT" || "TANZU" || "RANCHER" || "EC2" || "OTHER", // required
 *   },
 *   clientRequestToken: "STRING_VALUE",
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new RegisterClusterCommand(input);
 * const response = await client.send(command);
 * // { // RegisterClusterResponse
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
 * //       controlPlaneEgressMode: "AWS_MANAGED" || "CUSTOMER_ROUTED" || "CUSTOMER_ISOLATED",
 * //     },
 * //     kubernetesNetworkConfig: { // KubernetesNetworkConfigResponse
 * //       serviceIpv4Cidr: "STRING_VALUE",
 * //       serviceIpv6Cidr: "STRING_VALUE",
 * //       ipFamily: "ipv4" || "ipv6",
 * //       elasticLoadBalancing: { // ElasticLoadBalancing
 * //         enabled: true || false,
 * //         gatewayApi: { // GatewayApiConfiguration
 * //           crds: { // CrdManagementConfiguration
 * //             managed: true || false,
 * //           },
 * //         },
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
 * //       active: { // ActiveCertificateAuthority
 * //         id: "STRING_VALUE",
 * //         activatedBy: "EKS" || "CUSTOMER",
 * //       },
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
 * //         spreadLevel: "host" || "rack",
 * //       },
 * //       etcdInstanceType: "STRING_VALUE",
 * //       etcdPlacement: { // EtcdPlacementResponse
 * //         spreadLevel: "host" || "rack",
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
 * //     deletionProtection: true || false,
 * //     controlPlaneScalingConfig: { // ControlPlaneScalingConfig
 * //       tier: "standard" || "tier-xl" || "tier-2xl" || "tier-4xl" || "tier-8xl",
 * //     },
 * //     kubeApiServerConfig: { // KubeApiServerConfigResponse
 * //       eventTtl: "STRING_VALUE",
 * //       serviceNodePortRange: { // ServiceNodePortRange
 * //         minPort: Number("int"),
 * //         maxPort: Number("int"),
 * //       },
 * //     },
 * //     kubeSchedulerConfig: { // KubeSchedulerConfigResponse
 * //       nodeResourcesFit: { // NodeResourcesFitConfig
 * //         scoringStrategy: { // ScoringStrategy
 * //           type: "LeastAllocated" || "MostAllocated",
 * //           resources: [ // ResourceWeightList
 * //             { // ResourceWeight
 * //               name: "STRING_VALUE",
 * //               weight: Number("int"),
 * //             },
 * //           ],
 * //         },
 * //       },
 * //     },
 * //     kubeControllerManagerConfig: { // KubeControllerManagerConfigResponse
 * //       podGcControllerConfig: { // PodGcControllerConfigResponse
 * //         terminatedPodGcThreshold: Number("int"),
 * //       },
 * //       horizontalPodAutoscalerControllerConfig: { // HorizontalPodAutoscalerControllerConfigResponse
 * //         horizontalPodAutoscalerSyncPeriod: "STRING_VALUE",
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param RegisterClusterCommandInput - {@link RegisterClusterCommandInput}
 * @returns {@link RegisterClusterCommandOutput}
 * @see {@link RegisterClusterCommandInput} for command's `input` shape.
 * @see {@link RegisterClusterCommandOutput} for command's `response` shape.
 * @see {@link EKSClientResolvedConfig | config} for EKSClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have permissions to perform the requested operation. The [IAM principal](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_terms-and-concepts.html) making the request must have at least one IAM permissions policy attached that grants the required permissions. For more information, see [Access management](https://docs.aws.amazon.com/IAM/latest/UserGuide/access.html) in the *IAM User Guide*.
 *
 * @throws {@link ClientException} (client fault)
 *
 * These errors are usually caused by a client action. Actions can include using an action or resource on behalf of an [IAM principal](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_terms-and-concepts.html) that doesn't have permissions to use the action or resource or specifying an identifier that is not valid.
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
 * @throws {@link ResourcePropagationDelayException} (client fault)
 *
 * Required resources (such as service-linked roles) were created and are still propagating. Retry later.
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
export class RegisterClusterCommand extends command<RegisterClusterCommandInput, RegisterClusterCommandOutput>(
  _ep0,
  _mw0,
  "RegisterCluster",
  RegisterCluster$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RegisterClusterRequest;
      output: RegisterClusterResponse;
    };
    sdk: {
      input: RegisterClusterCommandInput;
      output: RegisterClusterCommandOutput;
    };
  };
}
