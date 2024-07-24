// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeServicesRequest, DescribeServicesResponse } from "../models/models_0";
import { de_DescribeServicesCommand, se_DescribeServicesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeServicesCommand}.
 */
export interface DescribeServicesCommandInput extends DescribeServicesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeServicesCommand}.
 */
export interface DescribeServicesCommandOutput extends DescribeServicesResponse, __MetadataBearer {}

/**
 * <p>Describes the specified services running in your cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, DescribeServicesCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, DescribeServicesCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const input = { // DescribeServicesRequest
 *   cluster: "STRING_VALUE",
 *   services: [ // StringList // required
 *     "STRING_VALUE",
 *   ],
 *   include: [ // ServiceFieldList
 *     "TAGS",
 *   ],
 * };
 * const command = new DescribeServicesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeServicesResponse
 * //   services: [ // Services
 * //     { // Service
 * //       serviceArn: "STRING_VALUE",
 * //       serviceName: "STRING_VALUE",
 * //       clusterArn: "STRING_VALUE",
 * //       loadBalancers: [ // LoadBalancers
 * //         { // LoadBalancer
 * //           targetGroupArn: "STRING_VALUE",
 * //           loadBalancerName: "STRING_VALUE",
 * //           containerName: "STRING_VALUE",
 * //           containerPort: Number("int"),
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
 * //       status: "STRING_VALUE",
 * //       desiredCount: Number("int"),
 * //       runningCount: Number("int"),
 * //       pendingCount: Number("int"),
 * //       launchType: "EC2" || "FARGATE" || "EXTERNAL",
 * //       capacityProviderStrategy: [ // CapacityProviderStrategy
 * //         { // CapacityProviderStrategyItem
 * //           capacityProvider: "STRING_VALUE", // required
 * //           weight: Number("int"),
 * //           base: Number("int"),
 * //         },
 * //       ],
 * //       platformVersion: "STRING_VALUE",
 * //       platformFamily: "STRING_VALUE",
 * //       taskDefinition: "STRING_VALUE",
 * //       deploymentConfiguration: { // DeploymentConfiguration
 * //         deploymentCircuitBreaker: { // DeploymentCircuitBreaker
 * //           enable: true || false, // required
 * //           rollback: true || false, // required
 * //         },
 * //         maximumPercent: Number("int"),
 * //         minimumHealthyPercent: Number("int"),
 * //         alarms: { // DeploymentAlarms
 * //           alarmNames: [ // StringList // required
 * //             "STRING_VALUE",
 * //           ],
 * //           enable: true || false, // required
 * //           rollback: true || false, // required
 * //         },
 * //       },
 * //       taskSets: [ // TaskSets
 * //         { // TaskSet
 * //           id: "STRING_VALUE",
 * //           taskSetArn: "STRING_VALUE",
 * //           serviceArn: "STRING_VALUE",
 * //           clusterArn: "STRING_VALUE",
 * //           startedBy: "STRING_VALUE",
 * //           externalId: "STRING_VALUE",
 * //           status: "STRING_VALUE",
 * //           taskDefinition: "STRING_VALUE",
 * //           computedDesiredCount: Number("int"),
 * //           pendingCount: Number("int"),
 * //           runningCount: Number("int"),
 * //           createdAt: new Date("TIMESTAMP"),
 * //           updatedAt: new Date("TIMESTAMP"),
 * //           launchType: "EC2" || "FARGATE" || "EXTERNAL",
 * //           capacityProviderStrategy: [
 * //             {
 * //               capacityProvider: "STRING_VALUE", // required
 * //               weight: Number("int"),
 * //               base: Number("int"),
 * //             },
 * //           ],
 * //           platformVersion: "STRING_VALUE",
 * //           platformFamily: "STRING_VALUE",
 * //           networkConfiguration: { // NetworkConfiguration
 * //             awsvpcConfiguration: { // AwsVpcConfiguration
 * //               subnets: [ // required
 * //                 "STRING_VALUE",
 * //               ],
 * //               securityGroups: [
 * //                 "STRING_VALUE",
 * //               ],
 * //               assignPublicIp: "ENABLED" || "DISABLED",
 * //             },
 * //           },
 * //           loadBalancers: [
 * //             {
 * //               targetGroupArn: "STRING_VALUE",
 * //               loadBalancerName: "STRING_VALUE",
 * //               containerName: "STRING_VALUE",
 * //               containerPort: Number("int"),
 * //             },
 * //           ],
 * //           serviceRegistries: [
 * //             {
 * //               registryArn: "STRING_VALUE",
 * //               port: Number("int"),
 * //               containerName: "STRING_VALUE",
 * //               containerPort: Number("int"),
 * //             },
 * //           ],
 * //           scale: { // Scale
 * //             value: Number("double"),
 * //             unit: "PERCENT",
 * //           },
 * //           stabilityStatus: "STEADY_STATE" || "STABILIZING",
 * //           stabilityStatusAt: new Date("TIMESTAMP"),
 * //           tags: [ // Tags
 * //             { // Tag
 * //               key: "STRING_VALUE",
 * //               value: "STRING_VALUE",
 * //             },
 * //           ],
 * //           fargateEphemeralStorage: { // DeploymentEphemeralStorage
 * //             kmsKeyId: "STRING_VALUE",
 * //           },
 * //         },
 * //       ],
 * //       deployments: [ // Deployments
 * //         { // Deployment
 * //           id: "STRING_VALUE",
 * //           status: "STRING_VALUE",
 * //           taskDefinition: "STRING_VALUE",
 * //           desiredCount: Number("int"),
 * //           pendingCount: Number("int"),
 * //           runningCount: Number("int"),
 * //           failedTasks: Number("int"),
 * //           createdAt: new Date("TIMESTAMP"),
 * //           updatedAt: new Date("TIMESTAMP"),
 * //           capacityProviderStrategy: [
 * //             {
 * //               capacityProvider: "STRING_VALUE", // required
 * //               weight: Number("int"),
 * //               base: Number("int"),
 * //             },
 * //           ],
 * //           launchType: "EC2" || "FARGATE" || "EXTERNAL",
 * //           platformVersion: "STRING_VALUE",
 * //           platformFamily: "STRING_VALUE",
 * //           networkConfiguration: {
 * //             awsvpcConfiguration: {
 * //               subnets: [ // required
 * //                 "STRING_VALUE",
 * //               ],
 * //               securityGroups: [
 * //                 "STRING_VALUE",
 * //               ],
 * //               assignPublicIp: "ENABLED" || "DISABLED",
 * //             },
 * //           },
 * //           rolloutState: "COMPLETED" || "FAILED" || "IN_PROGRESS",
 * //           rolloutStateReason: "STRING_VALUE",
 * //           serviceConnectConfiguration: { // ServiceConnectConfiguration
 * //             enabled: true || false, // required
 * //             namespace: "STRING_VALUE",
 * //             services: [ // ServiceConnectServiceList
 * //               { // ServiceConnectService
 * //                 portName: "STRING_VALUE", // required
 * //                 discoveryName: "STRING_VALUE",
 * //                 clientAliases: [ // ServiceConnectClientAliasList
 * //                   { // ServiceConnectClientAlias
 * //                     port: Number("int"), // required
 * //                     dnsName: "STRING_VALUE",
 * //                   },
 * //                 ],
 * //                 ingressPortOverride: Number("int"),
 * //                 timeout: { // TimeoutConfiguration
 * //                   idleTimeoutSeconds: Number("int"),
 * //                   perRequestTimeoutSeconds: Number("int"),
 * //                 },
 * //                 tls: { // ServiceConnectTlsConfiguration
 * //                   issuerCertificateAuthority: { // ServiceConnectTlsCertificateAuthority
 * //                     awsPcaAuthorityArn: "STRING_VALUE",
 * //                   },
 * //                   kmsKey: "STRING_VALUE",
 * //                   roleArn: "STRING_VALUE",
 * //                 },
 * //               },
 * //             ],
 * //             logConfiguration: { // LogConfiguration
 * //               logDriver: "json-file" || "syslog" || "journald" || "gelf" || "fluentd" || "awslogs" || "splunk" || "awsfirelens", // required
 * //               options: { // LogConfigurationOptionsMap
 * //                 "<keys>": "STRING_VALUE",
 * //               },
 * //               secretOptions: [ // SecretList
 * //                 { // Secret
 * //                   name: "STRING_VALUE", // required
 * //                   valueFrom: "STRING_VALUE", // required
 * //                 },
 * //               ],
 * //             },
 * //           },
 * //           serviceConnectResources: [ // ServiceConnectServiceResourceList
 * //             { // ServiceConnectServiceResource
 * //               discoveryName: "STRING_VALUE",
 * //               discoveryArn: "STRING_VALUE",
 * //             },
 * //           ],
 * //           volumeConfigurations: [ // ServiceVolumeConfigurations
 * //             { // ServiceVolumeConfiguration
 * //               name: "STRING_VALUE", // required
 * //               managedEBSVolume: { // ServiceManagedEBSVolumeConfiguration
 * //                 encrypted: true || false,
 * //                 kmsKeyId: "STRING_VALUE",
 * //                 volumeType: "STRING_VALUE",
 * //                 sizeInGiB: Number("int"),
 * //                 snapshotId: "STRING_VALUE",
 * //                 iops: Number("int"),
 * //                 throughput: Number("int"),
 * //                 tagSpecifications: [ // EBSTagSpecifications
 * //                   { // EBSTagSpecification
 * //                     resourceType: "volume", // required
 * //                     tags: [
 * //                       {
 * //                         key: "STRING_VALUE",
 * //                         value: "STRING_VALUE",
 * //                       },
 * //                     ],
 * //                     propagateTags: "TASK_DEFINITION" || "SERVICE" || "NONE",
 * //                   },
 * //                 ],
 * //                 roleArn: "STRING_VALUE", // required
 * //                 filesystemType: "ext3" || "ext4" || "xfs",
 * //               },
 * //             },
 * //           ],
 * //           fargateEphemeralStorage: {
 * //             kmsKeyId: "STRING_VALUE",
 * //           },
 * //         },
 * //       ],
 * //       roleArn: "STRING_VALUE",
 * //       events: [ // ServiceEvents
 * //         { // ServiceEvent
 * //           id: "STRING_VALUE",
 * //           createdAt: new Date("TIMESTAMP"),
 * //           message: "STRING_VALUE",
 * //         },
 * //       ],
 * //       createdAt: new Date("TIMESTAMP"),
 * //       placementConstraints: [ // PlacementConstraints
 * //         { // PlacementConstraint
 * //           type: "distinctInstance" || "memberOf",
 * //           expression: "STRING_VALUE",
 * //         },
 * //       ],
 * //       placementStrategy: [ // PlacementStrategies
 * //         { // PlacementStrategy
 * //           type: "random" || "spread" || "binpack",
 * //           field: "STRING_VALUE",
 * //         },
 * //       ],
 * //       networkConfiguration: {
 * //         awsvpcConfiguration: {
 * //           subnets: "<StringList>", // required
 * //           securityGroups: "<StringList>",
 * //           assignPublicIp: "ENABLED" || "DISABLED",
 * //         },
 * //       },
 * //       healthCheckGracePeriodSeconds: Number("int"),
 * //       schedulingStrategy: "REPLICA" || "DAEMON",
 * //       deploymentController: { // DeploymentController
 * //         type: "ECS" || "CODE_DEPLOY" || "EXTERNAL", // required
 * //       },
 * //       tags: "<Tags>",
 * //       createdBy: "STRING_VALUE",
 * //       enableECSManagedTags: true || false,
 * //       propagateTags: "TASK_DEFINITION" || "SERVICE" || "NONE",
 * //       enableExecuteCommand: true || false,
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
 * @param DescribeServicesCommandInput - {@link DescribeServicesCommandInput}
 * @returns {@link DescribeServicesCommandOutput}
 * @see {@link DescribeServicesCommandInput} for command's `input` shape.
 * @see {@link DescribeServicesCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for ECSClient's `config` shape.
 *
 * @throws {@link ClientException} (client fault)
 *  <p>These errors are usually caused by a client action. This client action might be using
 * 			an action or resource on behalf of a user that doesn't have permissions to use the
 * 			action or resource. Or, it might be specifying an identifier that isn't valid.</p>
 *
 * @throws {@link ClusterNotFoundException} (client fault)
 *  <p>The specified cluster wasn't found. You can view your available clusters with <a>ListClusters</a>. Amazon ECS clusters are Region specific.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter isn't valid. Review the available parameters for the API
 * 			request.</p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server issue.</p>
 *
 * @throws {@link ECSServiceException}
 * <p>Base exception class for all service exceptions from ECS service.</p>
 *
 * @public
 */
export class DescribeServicesCommand extends $Command
  .classBuilder<
    DescribeServicesCommandInput,
    DescribeServicesCommandOutput,
    ECSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ECSClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonEC2ContainerServiceV20141113", "DescribeServices", {})
  .n("ECSClient", "DescribeServicesCommand")
  .f(void 0, void 0)
  .ser(se_DescribeServicesCommand)
  .de(de_DescribeServicesCommand)
  .build() {}
