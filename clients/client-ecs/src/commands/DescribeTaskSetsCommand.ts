// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeTaskSetsRequest, DescribeTaskSetsResponse } from "../models/models_0";
import { de_DescribeTaskSetsCommand, se_DescribeTaskSetsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeTaskSetsCommand}.
 */
export interface DescribeTaskSetsCommandInput extends DescribeTaskSetsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeTaskSetsCommand}.
 */
export interface DescribeTaskSetsCommandOutput extends DescribeTaskSetsResponse, __MetadataBearer {}

/**
 * <p>Describes the task sets in the specified cluster and service. This is used when a
 * 			service uses the <code>EXTERNAL</code> deployment controller type. For more information,
 * 			see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-types.html">Amazon ECS Deployment
 * 				Types</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, DescribeTaskSetsCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, DescribeTaskSetsCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const input = { // DescribeTaskSetsRequest
 *   cluster: "STRING_VALUE", // required
 *   service: "STRING_VALUE", // required
 *   taskSets: [ // StringList
 *     "STRING_VALUE",
 *   ],
 *   include: [ // TaskSetFieldList
 *     "TAGS",
 *   ],
 * };
 * const command = new DescribeTaskSetsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeTaskSetsResponse
 * //   taskSets: [ // TaskSets
 * //     { // TaskSet
 * //       id: "STRING_VALUE",
 * //       taskSetArn: "STRING_VALUE",
 * //       serviceArn: "STRING_VALUE",
 * //       clusterArn: "STRING_VALUE",
 * //       startedBy: "STRING_VALUE",
 * //       externalId: "STRING_VALUE",
 * //       status: "STRING_VALUE",
 * //       taskDefinition: "STRING_VALUE",
 * //       computedDesiredCount: Number("int"),
 * //       pendingCount: Number("int"),
 * //       runningCount: Number("int"),
 * //       createdAt: new Date("TIMESTAMP"),
 * //       updatedAt: new Date("TIMESTAMP"),
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
 * //       scale: { // Scale
 * //         value: Number("double"),
 * //         unit: "PERCENT",
 * //       },
 * //       stabilityStatus: "STEADY_STATE" || "STABILIZING",
 * //       stabilityStatusAt: new Date("TIMESTAMP"),
 * //       tags: [ // Tags
 * //         { // Tag
 * //           key: "STRING_VALUE",
 * //           value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       fargateEphemeralStorage: { // DeploymentEphemeralStorage
 * //         kmsKeyId: "STRING_VALUE",
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
 * @param DescribeTaskSetsCommandInput - {@link DescribeTaskSetsCommandInput}
 * @returns {@link DescribeTaskSetsCommandOutput}
 * @see {@link DescribeTaskSetsCommandInput} for command's `input` shape.
 * @see {@link DescribeTaskSetsCommandOutput} for command's `response` shape.
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
 *          <p>For more information about service event errors, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-event-messages-list.html">Amazon ECS service
 * 				event messages</a>. </p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server issue.</p>
 *
 * @throws {@link ServiceNotActiveException} (client fault)
 *  <p>The specified service isn't active. You can't update a service that's inactive. If you
 * 			have previously deleted a service, you can re-create it with <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_CreateService.html">CreateService</a>.</p>
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
 * @example To describe a task set
 * ```javascript
 * // This example describes a task set in service MyService that uses an EXTERNAL deployment controller.
 * const input = {
 *   cluster: "MyCluster",
 *   service: "MyService",
 *   taskSets: [
 *     "arn:aws:ecs:us-west-2:123456789012:task-set/MyCluster/MyService/ecs-svc/1234567890123456789"
 *   ]
 * };
 * const command = new DescribeTaskSetsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   failures:   [],
 *   taskSets: [
 *     {
 *       computedDesiredCount: 0,
 *       createdAt: 1.557207715195E9,
 *       id: "ecs-svc/1234567890123456789",
 *       launchType: "EC2",
 *       loadBalancers:       [],
 *       networkConfiguration: {
 *         awsvpcConfiguration: {
 *           assignPublicIp: "DISABLED",
 *           securityGroups: [
 *             "sg-1234431"
 *           ],
 *           subnets: [
 *             "subnet-12344321"
 *           ]
 *         }
 *       },
 *       pendingCount: 0,
 *       runningCount: 0,
 *       scale: {
 *         unit: "PERCENT",
 *         value: 0
 *       },
 *       serviceRegistries:       [],
 *       stabilityStatus: "STEADY_STATE",
 *       stabilityStatusAt: 1.557207740014E9,
 *       status: "ACTIVE",
 *       taskDefinition: "arn:aws:ecs:us-west-2:123456789012:task-definition/sample-fargate:2",
 *       taskSetArn: "arn:aws:ecs:us-west-2:123456789012:task-set/MyCluster/MyService/ecs-svc/1234567890123456789",
 *       updatedAt: 1.557207740014E9
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DescribeTaskSetsCommand extends $Command
  .classBuilder<
    DescribeTaskSetsCommandInput,
    DescribeTaskSetsCommandOutput,
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
  .s("AmazonEC2ContainerServiceV20141113", "DescribeTaskSets", {})
  .n("ECSClient", "DescribeTaskSetsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeTaskSetsCommand)
  .de(de_DescribeTaskSetsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeTaskSetsRequest;
      output: DescribeTaskSetsResponse;
    };
    sdk: {
      input: DescribeTaskSetsCommandInput;
      output: DescribeTaskSetsCommandOutput;
    };
  };
}
