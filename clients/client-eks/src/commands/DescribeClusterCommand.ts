// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EKSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EKSClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeClusterRequest, DescribeClusterResponse } from "../models/models_0";
import { DescribeCluster } from "../schemas/schemas_2_Cluster";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeClusterCommand}.
 */
export interface DescribeClusterCommandInput extends DescribeClusterRequest {}
/**
 * @public
 *
 * The output of {@link DescribeClusterCommand}.
 */
export interface DescribeClusterCommandOutput extends DescribeClusterResponse, __MetadataBearer {}

/**
 * <p>Describes an Amazon EKS cluster.</p>
 *          <p>The API server endpoint and certificate authority data returned by this operation are
 *             required for <code>kubelet</code> and <code>kubectl</code> to communicate with your
 *             Kubernetes API server. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/create-kubeconfig.html">Creating or
 *                 updating a <code>kubeconfig</code> file for an Amazon EKS cluster</a>.</p>
 *          <note>
 *             <p>The API server endpoint and certificate authority data aren't available until the
 *                 cluster reaches the <code>ACTIVE</code> state.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, DescribeClusterCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, DescribeClusterCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * // import type { EKSClientConfig } from "@aws-sdk/client-eks";
 * const config = {}; // type is EKSClientConfig
 * const client = new EKSClient(config);
 * const input = { // DescribeClusterRequest
 *   name: "STRING_VALUE", // required
 * };
 * const command = new DescribeClusterCommand(input);
 * const response = await client.send(command);
 * // { // DescribeClusterResponse
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
 * //     deletionProtection: true || false,
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeClusterCommandInput - {@link DescribeClusterCommandInput}
 * @returns {@link DescribeClusterCommandOutput}
 * @see {@link DescribeClusterCommandInput} for command's `input` shape.
 * @see {@link DescribeClusterCommandOutput} for command's `response` shape.
 * @see {@link EKSClientResolvedConfig | config} for EKSClient's `config` shape.
 *
 * @throws {@link ClientException} (client fault)
 *  <p>These errors are usually caused by a client action. Actions can include using an
 *             action or resource on behalf of an <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_terms-and-concepts.html">IAM principal</a> that doesn't have permissions to use
 *             the action or resource or specifying an identifier that is not valid.</p>
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
 * @example To describe a cluster
 * ```javascript
 * // This example command provides a description of the specified cluster in your default region.
 * const input = {
 *   name: "devel"
 * };
 * const command = new DescribeClusterCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   cluster: {
 *     arn: "arn:aws:eks:us-west-2:012345678910:cluster/devel",
 *     certificateAuthority: {
 *       data: "LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSUN5RENDQWJDZ0F3SUJBZ0lCQURBTkJna3Foa2lHOXcwQkFRc0ZBREFWTVJNd0VRWURWUVFERXdwcmRXSmwKY201bGRHVnpNQjRYRFRFNE1EVXpNVEl6TVRFek1Wb1hEVEk0TURVeU9ESXpNVEV6TVZvd0ZURVRNQkVHQTFVRQpBeE1LYTNWaVpYSnVaWFJsY3pDQ0FTSXdEUVlKS29aSWh2Y05BUUVCQlFBRGdnRVBBRENDQVFvQ2dnRUJBTTZWCjVUaG4rdFcySm9Xa2hQMzRlVUZMNitaRXJOZGIvWVdrTmtDdWNGS2RaaXl2TjlMVmdvUmV2MjlFVFZlN1ZGbSsKUTJ3ZURyRXJiQyt0dVlibkFuN1ZLYmE3ay9hb1BHekZMdmVnb0t6b0M1N2NUdGVwZzRIazRlK2tIWHNaME10MApyb3NzcjhFM1ROeExETnNJTThGL1cwdjhsTGNCbWRPcjQyV2VuTjFHZXJnaDNSZ2wzR3JIazBnNTU0SjFWenJZCm9hTi8zODFUczlOTFF2QTBXb0xIcjBFRlZpTFdSZEoyZ3lXaC9ybDVyOFNDOHZaQXg1YW1BU0hVd01aTFpWRC8KTDBpOW4wRVM0MkpVdzQyQmxHOEdpd3NhTkJWV3lUTHZKclNhRXlDSHFtVVZaUTFDZkFXUjl0L3JleVVOVXM3TApWV1FqM3BFbk9RMitMSWJrc0RzQ0F3RUFBYU1qTUNFd0RnWURWUjBQQVFIL0JBUURBZ0trTUE4R0ExVWRFd0VCCi93UUZNQU1CQWY4d0RRWUpLb1pJaHZjTkFRRUxCUUFEZ2dFQkFNZ3RsQ1dIQ2U2YzVHMXl2YlFTS0Q4K2hUalkKSm1NSG56L2EvRGt0WG9YUjFVQzIrZUgzT1BZWmVjRVZZZHVaSlZCckNNQ2VWR0ZkeWdBYlNLc1FxWDg0S2RXbAp1MU5QaERDSmEyRHliN2pVMUV6VThTQjFGZUZ5ZFE3a0hNS1E1blpBRVFQOTY4S01hSGUrSm0yQ2x1UFJWbEJVCjF4WlhTS1gzTVZ0K1Q0SU1EV2d6c3JRSjVuQkRjdEtLcUZtM3pKdVVubHo5ZEpVckdscEltMjVJWXJDckxYUFgKWkUwRUtRNWEzMHhkVWNrTHRGQkQrOEtBdFdqSS9yZUZPNzM1YnBMdVoyOTBaNm42QlF3elRrS0p4cnhVc3QvOAppNGsxcnlsaUdWMm5SSjBUYjNORkczNHgrYWdzYTRoSTFPbU90TFM0TmgvRXJxT3lIUXNDc2hEQUtKUT0KLS0tLS1FTkQgQ0VSVElGSUNBVEUtLS0tLQo="
 *     },
 *     createdAt: 1.527807879988E9,
 *     endpoint: "https://A0DCCD80A04F01705DD065655C30CC3D.yl4.us-west-2.eks.amazonaws.com",
 *     name: "devel",
 *     resourcesVpcConfig: {
 *       securityGroupIds: [
 *         "sg-6979fe18"
 *       ],
 *       subnetIds: [
 *         "subnet-6782e71e",
 *         "subnet-e7e761ac"
 *       ],
 *       vpcId: "vpc-950809ec"
 *     },
 *     roleArn: "arn:aws:iam::012345678910:role/eks-service-role-AWSServiceRoleForAmazonEKS-J7ONKE3BQ4PI",
 *     status: "ACTIVE",
 *     version: "1.10"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DescribeClusterCommand extends $Command
  .classBuilder<
    DescribeClusterCommandInput,
    DescribeClusterCommandOutput,
    EKSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EKSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSWesleyFrontend", "DescribeCluster", {})
  .n("EKSClient", "DescribeClusterCommand")
  .sc(DescribeCluster)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeClusterRequest;
      output: DescribeClusterResponse;
    };
    sdk: {
      input: DescribeClusterCommandInput;
      output: DescribeClusterCommandOutput;
    };
  };
}
