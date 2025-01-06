// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeServiceRevisionsRequest, DescribeServiceRevisionsResponse } from "../models/models_0";
import { de_DescribeServiceRevisionsCommand, se_DescribeServiceRevisionsCommand } from "../protocols/Aws_json1_1";

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
 * //       launchType: "EC2" || "FARGATE" || "EXTERNAL",
 * //       platformVersion: "STRING_VALUE",
 * //       platformFamily: "STRING_VALUE",
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
 *          <p>The following list includes additional causes for the error:</p>
 *          <ul>
 *             <li>
 *                <p>The <code>RunTask</code> could not be processed because you use managed
 * 					scaling and there is a capacity error because the quota of tasks in the
 * 						<code>PROVISIONING</code> per cluster has been reached. For information
 * 					about the service quotas, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-quotas.html">Amazon ECS
 * 						service quotas</a>.</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link ClusterNotFoundException} (client fault)
 *  <p>The specified cluster wasn't found. You can view your available clusters with <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListClusters.html">ListClusters</a>. Amazon ECS clusters are Region specific.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter isn't valid. Review the available parameters for the API
 * 			request.</p>
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
 * @public
 * @example To describe a service revision
 * ```javascript
 * // This example describes a service revision with the specified ARN
 * const input = {
 *   "serviceRevisionArns": [
 *     "arn:aws:ecs:us-west-2:123456789012:service-revision/testc/sd1/4980306466373577095"
 *   ]
 * };
 * const command = new DescribeServiceRevisionsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "failures": [],
 *   "serviceRevisions": [
 *     {
 *       "clusterArn": "arn:aws:ecs:us-west-2:123456789012:cluster/example",
 *       "createdAt": "2024-09-10T16:49:26.388000+00:00",
 *       "launchType": "FARGATE",
 *       "networkConfiguration": {
 *         "awsvpcConfiguration": {
 *           "assignPublicIp": "ENABLED",
 *           "securityGroups": [
 *             "sg-09605d60a6bc1b296"
 *           ],
 *           "subnets": [
 *             "subnet-0a4040e73895f04e1"
 *           ]
 *         }
 *       },
 *       "platformFamily": "DockerLinux",
 *       "platformVersion": "1.4.0",
 *       "serviceArn": "arn:aws:ecs:us-west-2:123456789012:service/example/sd-example",
 *       "serviceRevisionArn": "arn:aws:ecs:us-west-2:123456789012:service-revision/example/sd-example/4980306466373577095",
 *       "taskDefinition": "arn:aws:ecs:us-west-2:123456789012:task-definition/large-ngingx:1"
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-describe-a-service-revision--1734033215738
 * ```
 *
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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonEC2ContainerServiceV20141113", "DescribeServiceRevisions", {})
  .n("ECSClient", "DescribeServiceRevisionsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeServiceRevisionsCommand)
  .de(de_DescribeServiceRevisionsCommand)
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
