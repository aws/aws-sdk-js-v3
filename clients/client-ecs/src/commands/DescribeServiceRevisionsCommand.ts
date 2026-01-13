// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeServiceRevisionsRequest, DescribeServiceRevisionsResponse } from "../models/models_0";
import { DescribeServiceRevisions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeServiceRevisionsCommand}.
 */
export interface DescribeServiceRevisionsCommandInput extends DescribeServiceRevisionsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeServiceRevisionsCommand}.
 */
export interface DescribeServiceRevisionsCommandOutput extends DescribeServiceRevisionsResponse, __MetadataBearer {}

/**
 * <p>Describes one or more service revisions.</p>
 *          <p>A service revision is a version of the service that includes the values for the Amazon
 * 			ECS resources (for example, task definition) and the environment resources (for example,
 * 			load balancers, subnets, and security groups). For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-revision.html">Amazon ECS service revisions</a>.</p>
 *          <p>You can't describe a service revision that was created before October 25, 2024.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, DescribeServiceRevisionsCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, DescribeServiceRevisionsCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * // import type { ECSClientConfig } from "@aws-sdk/client-ecs";
 * const config = {}; // type is ECSClientConfig
 * const client = new ECSClient(config);
 * const input = { // DescribeServiceRevisionsRequest
 *   serviceRevisionArns: [ // StringList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DescribeServiceRevisionsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeServiceRevisionsResponse
 * //   serviceRevisions: [ // ServiceRevisions
 * //     { // ServiceRevision
 * //       serviceRevisionArn: "STRING_VALUE",
 * //       serviceArn: "STRING_VALUE",
 * //       clusterArn: "STRING_VALUE",
 * //       taskDefinition: "STRING_VALUE",
 * //       capacityProviderStrategy: [ // CapacityProviderStrategy
 * //         { // CapacityProviderStrategyItem
 * //           capacityProvider: "STRING_VALUE", // required
 * //           weight: Number("int"),
 * //           base: Number("int"),
 * //         },
 * //       ],
 * //       launchType: "EC2" || "FARGATE" || "EXTERNAL" || "MANAGED_INSTANCES",
 * //       platformVersion: "STRING_VALUE",
 * //       platformFamily: "STRING_VALUE",
 * //       loadBalancers: [ // LoadBalancers
 * //         { // LoadBalancer
 * //           targetGroupArn: "STRING_VALUE",
 * //           loadBalancerName: "STRING_VALUE",
 * //           containerName: "STRING_VALUE",
 * //           containerPort: Number("int"),
 * //           advancedConfiguration: { // AdvancedConfiguration
 * //             alternateTargetGroupArn: "STRING_VALUE",
 * //             productionListenerRule: "STRING_VALUE",
 * //             testListenerRule: "STRING_VALUE",
 * //             roleArn: "STRING_VALUE",
 * //           },
 * //         },
 * //       ],
 * //       serviceRegistries: [ // ServiceRegistries
 * //         { // ServiceRegistry
 * //           registryArn: "STRING_VALUE",
 * //           port: Number("int"),
 * //           containerName: "STRING_VALUE",
 * //           containerPort: Number("int"),
 * //         },
 * //       ],
 * //       networkConfiguration: { // NetworkConfiguration
 * //         awsvpcConfiguration: { // AwsVpcConfiguration
 * //           subnets: [ // StringList // required
 * //             "STRING_VALUE",
 * //           ],
 * //           securityGroups: [
 * //             "STRING_VALUE",
 * //           ],
 * //           assignPublicIp: "ENABLED" || "DISABLED",
 * //         },
 * //       },
 * //       containerImages: [ // ContainerImages
 * //         { // ContainerImage
 * //           containerName: "STRING_VALUE",
 * //           imageDigest: "STRING_VALUE",
 * //           image: "STRING_VALUE",
 * //         },
 * //       ],
 * //       guardDutyEnabled: true || false,
 * //       serviceConnectConfiguration: { // ServiceConnectConfiguration
 * //         enabled: true || false, // required
 * //         namespace: "STRING_VALUE",
 * //         services: [ // ServiceConnectServiceList
 * //           { // ServiceConnectService
 * //             portName: "STRING_VALUE", // required
 * //             discoveryName: "STRING_VALUE",
 * //             clientAliases: [ // ServiceConnectClientAliasList
 * //               { // ServiceConnectClientAlias
 * //                 port: Number("int"), // required
 * //                 dnsName: "STRING_VALUE",
 * //                 testTrafficRules: { // ServiceConnectTestTrafficRules
 * //                   header: { // ServiceConnectTestTrafficHeaderRules
 * //                     name: "STRING_VALUE", // required
 * //                     value: { // ServiceConnectTestTrafficHeaderMatchRules
 * //                       exact: "STRING_VALUE", // required
 * //                     },
 * //                   },
 * //                 },
 * //               },
 * //             ],
 * //             ingressPortOverride: Number("int"),
 * //             timeout: { // TimeoutConfiguration
 * //               idleTimeoutSeconds: Number("int"),
 * //               perRequestTimeoutSeconds: Number("int"),
 * //             },
 * //             tls: { // ServiceConnectTlsConfiguration
 * //               issuerCertificateAuthority: { // ServiceConnectTlsCertificateAuthority
 * //                 awsPcaAuthorityArn: "STRING_VALUE",
 * //               },
 * //               kmsKey: "STRING_VALUE",
 * //               roleArn: "STRING_VALUE",
 * //             },
 * //           },
 * //         ],
 * //         logConfiguration: { // LogConfiguration
 * //           logDriver: "json-file" || "syslog" || "journald" || "gelf" || "fluentd" || "awslogs" || "splunk" || "awsfirelens", // required
 * //           options: { // LogConfigurationOptionsMap
 * //             "<keys>": "STRING_VALUE",
 * //           },
 * //           secretOptions: [ // SecretList
 * //             { // Secret
 * //               name: "STRING_VALUE", // required
 * //               valueFrom: "STRING_VALUE", // required
 * //             },
 * //           ],
 * //         },
 * //         accessLogConfiguration: { // ServiceConnectAccessLogConfiguration
 * //           format: "TEXT" || "JSON", // required
 * //           includeQueryParameters: "DISABLED" || "ENABLED",
 * //         },
 * //       },
 * //       volumeConfigurations: [ // ServiceVolumeConfigurations
 * //         { // ServiceVolumeConfiguration
 * //           name: "STRING_VALUE", // required
 * //           managedEBSVolume: { // ServiceManagedEBSVolumeConfiguration
 * //             encrypted: true || false,
 * //             kmsKeyId: "STRING_VALUE",
 * //             volumeType: "STRING_VALUE",
 * //             sizeInGiB: Number("int"),
 * //             snapshotId: "STRING_VALUE",
 * //             volumeInitializationRate: Number("int"),
 * //             iops: Number("int"),
 * //             throughput: Number("int"),
 * //             tagSpecifications: [ // EBSTagSpecifications
 * //               { // EBSTagSpecification
 * //                 resourceType: "volume", // required
 * //                 tags: [ // Tags
 * //                   { // Tag
 * //                     key: "STRING_VALUE",
 * //                     value: "STRING_VALUE",
 * //                   },
 * //                 ],
 * //                 propagateTags: "TASK_DEFINITION" || "SERVICE" || "NONE",
 * //               },
 * //             ],
 * //             roleArn: "STRING_VALUE", // required
 * //             filesystemType: "ext3" || "ext4" || "xfs" || "ntfs",
 * //           },
 * //         },
 * //       ],
 * //       fargateEphemeralStorage: { // DeploymentEphemeralStorage
 * //         kmsKeyId: "STRING_VALUE",
 * //       },
 * //       createdAt: new Date("TIMESTAMP"),
 * //       vpcLatticeConfigurations: [ // VpcLatticeConfigurations
 * //         { // VpcLatticeConfiguration
 * //           roleArn: "STRING_VALUE", // required
 * //           targetGroupArn: "STRING_VALUE", // required
 * //           portName: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       resolvedConfiguration: { // ResolvedConfiguration
 * //         loadBalancers: [ // ServiceRevisionLoadBalancers
 * //           { // ServiceRevisionLoadBalancer
 * //             targetGroupArn: "STRING_VALUE",
 * //             productionListenerRule: "STRING_VALUE",
 * //           },
 * //         ],
 * //       },
 * //       ecsManagedResources: { // ECSManagedResources
 * //         ingressPaths: [ // ManagedIngressPaths
 * //           { // ManagedIngressPath
 * //             accessType: "PUBLIC" || "PRIVATE", // required
 * //             endpoint: "STRING_VALUE", // required
 * //             loadBalancer: { // ManagedLoadBalancer
 * //               arn: "STRING_VALUE",
 * //               status: "PROVISIONING" || "ACTIVE" || "DEPROVISIONING" || "DELETED" || "FAILED", // required
 * //               statusReason: "STRING_VALUE",
 * //               updatedAt: new Date("TIMESTAMP"), // required
 * //               scheme: "STRING_VALUE", // required
 * //               subnetIds: [
 * //                 "STRING_VALUE",
 * //               ],
 * //               securityGroupIds: [
 * //                 "STRING_VALUE",
 * //               ],
 * //             },
 * //             loadBalancerSecurityGroups: [ // ManagedSecurityGroups
 * //               { // ManagedSecurityGroup
 * //                 arn: "STRING_VALUE",
 * //                 status: "PROVISIONING" || "ACTIVE" || "DEPROVISIONING" || "DELETED" || "FAILED", // required
 * //                 statusReason: "STRING_VALUE",
 * //                 updatedAt: new Date("TIMESTAMP"), // required
 * //               },
 * //             ],
 * //             certificate: { // ManagedCertificate
 * //               arn: "STRING_VALUE",
 * //               status: "PROVISIONING" || "ACTIVE" || "DEPROVISIONING" || "DELETED" || "FAILED", // required
 * //               statusReason: "STRING_VALUE",
 * //               updatedAt: new Date("TIMESTAMP"), // required
 * //               domainName: "STRING_VALUE", // required
 * //             },
 * //             listener: { // ManagedListener
 * //               arn: "STRING_VALUE",
 * //               status: "PROVISIONING" || "ACTIVE" || "DEPROVISIONING" || "DELETED" || "FAILED", // required
 * //               statusReason: "STRING_VALUE",
 * //               updatedAt: new Date("TIMESTAMP"), // required
 * //             },
 * //             rule: { // ManagedListenerRule
 * //               arn: "STRING_VALUE",
 * //               status: "PROVISIONING" || "ACTIVE" || "DEPROVISIONING" || "DELETED" || "FAILED", // required
 * //               statusReason: "STRING_VALUE",
 * //               updatedAt: new Date("TIMESTAMP"), // required
 * //             },
 * //             targetGroups: [ // ManagedTargetGroups
 * //               { // ManagedTargetGroup
 * //                 arn: "STRING_VALUE",
 * //                 status: "PROVISIONING" || "ACTIVE" || "DEPROVISIONING" || "DELETED" || "FAILED", // required
 * //                 statusReason: "STRING_VALUE",
 * //                 updatedAt: new Date("TIMESTAMP"), // required
 * //                 healthCheckPath: "STRING_VALUE", // required
 * //                 healthCheckPort: Number("int"), // required
 * //                 port: Number("int"), // required
 * //               },
 * //             ],
 * //           },
 * //         ],
 * //         autoScaling: { // ManagedAutoScaling
 * //           scalableTarget: { // ManagedScalableTarget
 * //             arn: "STRING_VALUE",
 * //             status: "PROVISIONING" || "ACTIVE" || "DEPROVISIONING" || "DELETED" || "FAILED", // required
 * //             statusReason: "STRING_VALUE",
 * //             updatedAt: new Date("TIMESTAMP"), // required
 * //             minCapacity: Number("int"), // required
 * //             maxCapacity: Number("int"), // required
 * //           },
 * //           applicationAutoScalingPolicies: [ // ManagedApplicationAutoScalingPolicies
 * //             { // ManagedApplicationAutoScalingPolicy
 * //               arn: "STRING_VALUE",
 * //               status: "PROVISIONING" || "ACTIVE" || "DEPROVISIONING" || "DELETED" || "FAILED", // required
 * //               statusReason: "STRING_VALUE",
 * //               updatedAt: new Date("TIMESTAMP"), // required
 * //               policyType: "STRING_VALUE", // required
 * //               targetValue: Number("double"), // required
 * //               metric: "STRING_VALUE", // required
 * //             },
 * //           ],
 * //         },
 * //         metricAlarms: [ // ManagedMetricAlarms
 * //           { // ManagedMetricAlarm
 * //             arn: "STRING_VALUE",
 * //             status: "PROVISIONING" || "ACTIVE" || "DEPROVISIONING" || "DELETED" || "FAILED", // required
 * //             statusReason: "STRING_VALUE",
 * //             updatedAt: new Date("TIMESTAMP"), // required
 * //           },
 * //         ],
 * //         serviceSecurityGroups: [
 * //           {
 * //             arn: "STRING_VALUE",
 * //             status: "PROVISIONING" || "ACTIVE" || "DEPROVISIONING" || "DELETED" || "FAILED", // required
 * //             statusReason: "STRING_VALUE",
 * //             updatedAt: new Date("TIMESTAMP"), // required
 * //           },
 * //         ],
 * //         logGroups: [ // ManagedLogGroups
 * //           { // ManagedLogGroup
 * //             arn: "STRING_VALUE",
 * //             status: "PROVISIONING" || "ACTIVE" || "DEPROVISIONING" || "DELETED" || "FAILED", // required
 * //             statusReason: "STRING_VALUE",
 * //             updatedAt: new Date("TIMESTAMP"), // required
 * //             logGroupName: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //       },
 * //     },
 * //   ],
 * //   failures: [ // Failures
 * //     { // Failure
 * //       arn: "STRING_VALUE",
 * //       reason: "STRING_VALUE",
 * //       detail: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeServiceRevisionsCommandInput - {@link DescribeServiceRevisionsCommandInput}
 * @returns {@link DescribeServiceRevisionsCommandOutput}
 * @see {@link DescribeServiceRevisionsCommandInput} for command's `input` shape.
 * @see {@link DescribeServiceRevisionsCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for ECSClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have authorization to perform the requested action.</p>
 *
 * @throws {@link ClientException} (client fault)
 *  <p>These errors are usually caused by a client action. This client action might be using
 * 			an action or resource on behalf of a user that doesn't have permissions to use the
 * 			action or resource. Or, it might be specifying an identifier that isn't valid.</p>
 *
 * @throws {@link ClusterNotFoundException} (client fault)
 *  <p>The specified cluster wasn't found. You can view your available clusters with <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListClusters.html">ListClusters</a>. Amazon ECS clusters are Region specific.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter isn't valid. Review the available parameters for the API
 * 			request.</p>
 *          <p>For more information about service event errors, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-event-messages-list.html">Amazon ECS
 * 				service event messages</a>. </p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server issue.</p>
 *
 * @throws {@link ServiceNotFoundException} (client fault)
 *  <p>The specified service wasn't found. You can view your available services with <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListServices.html">ListServices</a>. Amazon ECS services are cluster specific and Region
 * 			specific.</p>
 *
 * @throws {@link UnsupportedFeatureException} (client fault)
 *  <p>The specified task isn't supported in this Region.</p>
 *
 * @throws {@link ECSServiceException}
 * <p>Base exception class for all service exceptions from ECS service.</p>
 *
 *
 * @public
 */
export class DescribeServiceRevisionsCommand extends $Command
  .classBuilder<
    DescribeServiceRevisionsCommandInput,
    DescribeServiceRevisionsCommandOutput,
    ECSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ECSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2ContainerServiceV20141113", "DescribeServiceRevisions", {})
  .n("ECSClient", "DescribeServiceRevisionsCommand")
  .sc(DescribeServiceRevisions$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeServiceRevisionsRequest;
      output: DescribeServiceRevisionsResponse;
    };
    sdk: {
      input: DescribeServiceRevisionsCommandInput;
      output: DescribeServiceRevisionsCommandOutput;
    };
  };
}
