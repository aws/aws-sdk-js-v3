// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateClusterRequest, CreateClusterResponse } from "../models/models_0";
import { CreateCluster$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateClusterCommand}.
 */
export interface CreateClusterCommandInput extends CreateClusterRequest {}
/**
 * @public
 *
 * The output of {@link CreateClusterCommand}.
 */
export interface CreateClusterCommandOutput extends CreateClusterResponse, __MetadataBearer {}

/**
 * Creates an Amazon EKS control plane.
 *
 * The Amazon EKS control plane consists of control plane instances that run the Kubernetes software, such as `etcd` and the API server. The control plane runs in an account managed by Amazon Web Services, and the Kubernetes API is exposed by the Amazon EKS API server endpoint. Each Amazon EKS cluster control plane is single tenant and unique. It runs on its own set of Amazon EC2 instances.
 *
 * The cluster control plane is provisioned across multiple Availability Zones and fronted by an Elastic Load Balancing Network Load Balancer. Amazon EKS also provisions elastic network interfaces in your VPC subnets to provide connectivity from the control plane instances to the nodes (for example, to support `kubectl exec`, `logs`, and `proxy` data flows).
 *
 * Amazon EKS nodes run in your Amazon Web Services account and connect to your cluster's control plane over the Kubernetes API server endpoint and a certificate file that is created for your cluster.
 *
 * You can use the `endpointPublicAccess` and `endpointPrivateAccess` parameters to enable or disable public and private access to your cluster's Kubernetes API server endpoint. By default, public access is enabled, and private access is disabled. The endpoint domain name and IP address family depends on the value of the `ipFamily` for the cluster. For more information, see [Amazon EKS Cluster Endpoint Access Control](https://docs.aws.amazon.com/eks/latest/userguide/cluster-endpoint.html) in the **Amazon EKS User Guide** .
 *
 * You can use the `logging` parameter to enable or disable exporting the Kubernetes control plane logs for your cluster to CloudWatch Logs. By default, cluster control plane logs aren't exported to CloudWatch Logs. For more information, see [Amazon EKS Cluster Control Plane Logs](https://docs.aws.amazon.com/eks/latest/userguide/control-plane-logs.html) in the **Amazon EKS User Guide** .
 *
 * > **Note:** CloudWatch Logs ingestion, archive storage, and data scanning rates apply to exported control plane logs. For more information, see [CloudWatch Pricing](http://aws.amazon.com/cloudwatch/pricing/).
 *
 * In most cases, it takes several minutes to create a cluster. After you create an Amazon EKS cluster, you must configure your Kubernetes tooling to communicate with the API server and launch nodes into your cluster. For more information, see [Allowing users to access your cluster](https://docs.aws.amazon.com/eks/latest/userguide/cluster-auth.html) and [Launching Amazon EKS nodes](https://docs.aws.amazon.com/eks/latest/userguide/launch-workers.html) in the *Amazon EKS User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, CreateClusterCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, CreateClusterCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * // import type { EKSClientConfig } from "@aws-sdk/client-eks";
 * const config = {}; // type is EKSClientConfig
 * const client = new EKSClient(config);
 * const input = { // CreateClusterRequest
 *   name: "STRING_VALUE", // required
 *   version: "STRING_VALUE",
 *   roleArn: "STRING_VALUE", // required
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
 *     controlPlaneEgressMode: "AWS_MANAGED" || "CUSTOMER_ROUTED" || "CUSTOMER_ISOLATED",
 *   },
 *   kubernetesNetworkConfig: { // KubernetesNetworkConfigRequest
 *     serviceIpv4Cidr: "STRING_VALUE",
 *     ipFamily: "ipv4" || "ipv6",
 *     elasticLoadBalancing: { // ElasticLoadBalancing
 *       enabled: true || false,
 *       gatewayApi: { // GatewayApiConfiguration
 *         crds: { // CrdManagementConfiguration
 *           managed: true || false,
 *         },
 *       },
 *     },
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
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   encryptionConfig: [ // EncryptionConfigList
 *     { // EncryptionConfig
 *       resources: [
 *         "STRING_VALUE",
 *       ],
 *       provider: { // Provider
 *         keyArn: "STRING_VALUE",
 *       },
 *     },
 *   ],
 *   outpostConfig: { // OutpostConfigRequest
 *     outpostArns: [ // required
 *       "STRING_VALUE",
 *     ],
 *     controlPlaneInstanceType: "STRING_VALUE", // required
 *     controlPlanePlacement: { // ControlPlanePlacementRequest
 *       groupName: "STRING_VALUE",
 *       spreadLevel: "host" || "rack",
 *     },
 *     etcdInstanceType: "STRING_VALUE",
 *     etcdPlacement: { // EtcdPlacementRequest
 *       spreadLevel: "host" || "rack",
 *     },
 *   },
 *   accessConfig: { // CreateAccessConfigRequest
 *     bootstrapClusterCreatorAdminPermissions: true || false,
 *     authenticationMode: "API" || "API_AND_CONFIG_MAP" || "CONFIG_MAP",
 *   },
 *   bootstrapSelfManagedAddons: true || false,
 *   upgradePolicy: { // UpgradePolicyRequest
 *     supportType: "STANDARD" || "EXTENDED",
 *   },
 *   zonalShiftConfig: { // ZonalShiftConfigRequest
 *     enabled: true || false,
 *   },
 *   remoteNetworkConfig: { // RemoteNetworkConfigRequest
 *     remoteNodeNetworks: [ // RemoteNodeNetworkList
 *       { // RemoteNodeNetwork
 *         cidrs: "<StringList>",
 *       },
 *     ],
 *     remotePodNetworks: [ // RemotePodNetworkList
 *       { // RemotePodNetwork
 *         cidrs: "<StringList>",
 *       },
 *     ],
 *   },
 *   computeConfig: { // ComputeConfigRequest
 *     enabled: true || false,
 *     nodePools: "<StringList>",
 *     nodeRoleArn: "STRING_VALUE",
 *   },
 *   storageConfig: { // StorageConfigRequest
 *     blockStorage: { // BlockStorage
 *       enabled: true || false,
 *     },
 *   },
 *   deletionProtection: true || false,
 *   controlPlaneScalingConfig: { // ControlPlaneScalingConfig
 *     tier: "standard" || "tier-xl" || "tier-2xl" || "tier-4xl" || "tier-8xl",
 *   },
 *   kubeApiServerConfig: { // KubeApiServerConfigRequest
 *     eventTtl: "STRING_VALUE",
 *     serviceNodePortRange: { // ServiceNodePortRange
 *       minPort: Number("int"),
 *       maxPort: Number("int"),
 *     },
 *   },
 *   kubeSchedulerConfig: { // KubeSchedulerConfigRequest
 *     nodeResourcesFit: { // NodeResourcesFitConfig
 *       scoringStrategy: { // ScoringStrategy
 *         type: "LeastAllocated" || "MostAllocated",
 *         resources: [ // ResourceWeightList
 *           { // ResourceWeight
 *             name: "STRING_VALUE",
 *             weight: Number("int"),
 *           },
 *         ],
 *       },
 *     },
 *   },
 *   kubeControllerManagerConfig: { // KubeControllerManagerConfigRequest
 *     podGcControllerConfig: { // PodGcControllerConfigRequest
 *       terminatedPodGcThreshold: Number("int"),
 *     },
 *     horizontalPodAutoscalerControllerConfig: { // HorizontalPodAutoscalerControllerConfigRequest
 *       horizontalPodAutoscalerSyncPeriod: "STRING_VALUE",
 *     },
 *   },
 * };
 * const command = new CreateClusterCommand(input);
 * const response = await client.send(command);
 * // { // CreateClusterResponse
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
 * @param CreateClusterCommandInput - {@link CreateClusterCommandInput}
 * @returns {@link CreateClusterCommandOutput}
 * @see {@link CreateClusterCommandInput} for command's `input` shape.
 * @see {@link CreateClusterCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceInUseException} (client fault)
 *
 * The specified resource is in use.
 *
 * @throws {@link ResourceLimitExceededException} (client fault)
 *
 * You have encountered a service limit on the specified resource.
 *
 * @throws {@link ServerException} (server fault)
 *
 * These errors are usually caused by a server-side issue.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The service is unavailable. Back off and retry the operation.
 *
 * @throws {@link UnsupportedAvailabilityZoneException} (client fault)
 *
 * At least one of your specified cluster subnets is in an Availability Zone that does not support Amazon EKS. The exception output specifies the supported Availability Zones for your account, from which you can choose subnets for your cluster.
 *
 * @throws {@link EKSServiceException}
 *
 * Base exception class for all service exceptions from EKS service.
 *
 * @example To create a new cluster
 * ```javascript
 * // The following example creates an Amazon EKS cluster called prod.
 * const input = {
 *   clientRequestToken: "1d2129a1-3d38-460a-9756-e5b91fddb951",
 *   name: "prod",
 *   resourcesVpcConfig: {
 *     securityGroupIds: [
 *       "sg-6979fe18"
 *     ],
 *     subnetIds: [
 *       "subnet-6782e71e",
 *       "subnet-e7e761ac"
 *     ]
 *   },
 *   roleArn: "arn:aws:iam::012345678910:role/eks-service-role-AWSServiceRoleForAmazonEKS-J7ONKE3BQ4PI",
 *   version: "1.10"
 * };
 * const command = new CreateClusterCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* empty *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class CreateClusterCommand extends command<CreateClusterCommandInput, CreateClusterCommandOutput>(
  _ep0,
  _mw0,
  "CreateCluster",
  CreateCluster$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateClusterRequest;
      output: CreateClusterResponse;
    };
    sdk: {
      input: CreateClusterCommandInput;
      output: CreateClusterCommandOutput;
    };
  };
}
