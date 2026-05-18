// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeServiceDeploymentsRequest, DescribeServiceDeploymentsResponse } from "../models/models_0";
import { DescribeServiceDeployments$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeServiceDeploymentsCommand}.
 */
export interface DescribeServiceDeploymentsCommandInput extends DescribeServiceDeploymentsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeServiceDeploymentsCommand}.
 */
export interface DescribeServiceDeploymentsCommandOutput extends DescribeServiceDeploymentsResponse, __MetadataBearer {}

/**
 * <p>Describes one or more of your service deployments.</p> <p>A service deployment happens when you release a software update for the service. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-deployment.html">View service history using Amazon ECS service deployments</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, DescribeServiceDeploymentsCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, DescribeServiceDeploymentsCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * // import type { ECSClientConfig } from "@aws-sdk/client-ecs";
 * const config = {}; // type is ECSClientConfig
 * const client = new ECSClient(config);
 * const input = { // DescribeServiceDeploymentsRequest
 *   serviceDeploymentArns: [ // StringList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DescribeServiceDeploymentsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeServiceDeploymentsResponse
 * //   serviceDeployments: [ // ServiceDeployments
 * //     { // ServiceDeployment
 * //       serviceDeploymentArn: "STRING_VALUE",
 * //       serviceArn: "STRING_VALUE",
 * //       clusterArn: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       startedAt: new Date("TIMESTAMP"),
 * //       finishedAt: new Date("TIMESTAMP"),
 * //       stoppedAt: new Date("TIMESTAMP"),
 * //       updatedAt: new Date("TIMESTAMP"),
 * //       sourceServiceRevisions: [ // ServiceRevisionsSummaryList
 * //         { // ServiceRevisionSummary
 * //           arn: "STRING_VALUE",
 * //           requestedTaskCount: Number("int"),
 * //           runningTaskCount: Number("int"),
 * //           pendingTaskCount: Number("int"),
 * //           requestedTestTrafficWeight: Number("double"),
 * //           requestedProductionTrafficWeight: Number("double"),
 * //         },
 * //       ],
 * //       targetServiceRevision: {
 * //         arn: "STRING_VALUE",
 * //         requestedTaskCount: Number("int"),
 * //         runningTaskCount: Number("int"),
 * //         pendingTaskCount: Number("int"),
 * //         requestedTestTrafficWeight: Number("double"),
 * //         requestedProductionTrafficWeight: Number("double"),
 * //       },
 * //       status: "PENDING" || "SUCCESSFUL" || "STOPPED" || "STOP_REQUESTED" || "IN_PROGRESS" || "ROLLBACK_REQUESTED" || "ROLLBACK_IN_PROGRESS" || "ROLLBACK_SUCCESSFUL" || "ROLLBACK_FAILED",
 * //       statusReason: "STRING_VALUE",
 * //       lifecycleStage: "RECONCILE_SERVICE" || "PRE_SCALE_UP" || "SCALE_UP" || "POST_SCALE_UP" || "TEST_TRAFFIC_SHIFT" || "POST_TEST_TRAFFIC_SHIFT" || "PRODUCTION_TRAFFIC_SHIFT" || "POST_PRODUCTION_TRAFFIC_SHIFT" || "BAKE_TIME" || "CLEAN_UP",
 * //       lifecycleHookDetails: [ // DeploymentLifecycleHookDetailList
 * //         { // DeploymentLifecycleHookDetail
 * //           hookId: "STRING_VALUE",
 * //           targetType: "AWS_LAMBDA" || "PAUSE",
 * //           targetArn: "STRING_VALUE",
 * //           status: "AWAITING_ACTION" || "IN_PROGRESS" || "SUCCEEDED" || "FAILED" || "TIMED_OUT",
 * //           expiresAt: new Date("TIMESTAMP"),
 * //           timeoutAction: "ROLLBACK" || "CONTINUE",
 * //         },
 * //       ],
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
 * //           rollback: true || false, // required
 * //           enable: true || false, // required
 * //         },
 * //         strategy: "ROLLING" || "BLUE_GREEN" || "LINEAR" || "CANARY",
 * //         bakeTimeInMinutes: Number("int"),
 * //         lifecycleHooks: [ // DeploymentLifecycleHookList
 * //           { // DeploymentLifecycleHook
 * //             targetType: "AWS_LAMBDA" || "PAUSE",
 * //             hookTargetArn: "STRING_VALUE",
 * //             roleArn: "STRING_VALUE",
 * //             lifecycleStages: [ // DeploymentLifecycleHookStageList
 * //               "RECONCILE_SERVICE" || "PRE_SCALE_UP" || "POST_SCALE_UP" || "TEST_TRAFFIC_SHIFT" || "POST_TEST_TRAFFIC_SHIFT" || "PRE_PRODUCTION_TRAFFIC_SHIFT" || "PRODUCTION_TRAFFIC_SHIFT" || "POST_PRODUCTION_TRAFFIC_SHIFT",
 * //             ],
 * //             hookDetails: "DOCUMENT_VALUE",
 * //             timeoutConfiguration: { // DeploymentLifecycleHookTimeoutConfiguration
 * //               timeoutInMinutes: Number("int"),
 * //               action: "ROLLBACK" || "CONTINUE",
 * //             },
 * //           },
 * //         ],
 * //         linearConfiguration: { // LinearConfiguration
 * //           stepPercent: Number("double"),
 * //           stepBakeTimeInMinutes: Number("int"),
 * //         },
 * //         canaryConfiguration: { // CanaryConfiguration
 * //           canaryPercent: Number("double"),
 * //           canaryBakeTimeInMinutes: Number("int"),
 * //         },
 * //       },
 * //       rollback: { // Rollback
 * //         reason: "STRING_VALUE",
 * //         startedAt: new Date("TIMESTAMP"),
 * //         serviceRevisionArn: "STRING_VALUE",
 * //       },
 * //       deploymentCircuitBreaker: { // ServiceDeploymentCircuitBreaker
 * //         status: "TRIGGERED" || "MONITORING" || "MONITORING_COMPLETE" || "DISABLED",
 * //         failureCount: Number("int"),
 * //         threshold: Number("int"),
 * //       },
 * //       alarms: { // ServiceDeploymentAlarms
 * //         status: "TRIGGERED" || "MONITORING" || "MONITORING_COMPLETE" || "DISABLED",
 * //         alarmNames: [
 * //           "STRING_VALUE",
 * //         ],
 * //         triggeredAlarmNames: [
 * //           "STRING_VALUE",
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
 * @param DescribeServiceDeploymentsCommandInput - {@link DescribeServiceDeploymentsCommandInput}
 * @returns {@link DescribeServiceDeploymentsCommandOutput}
 * @see {@link DescribeServiceDeploymentsCommandInput} for command's `input` shape.
 * @see {@link DescribeServiceDeploymentsCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for ECSClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have authorization to perform the requested action.</p>
 *
 * @throws {@link ClientException} (client fault)
 *  <p>These errors are usually caused by a client action. This client action might be using an action or resource on behalf of a user that doesn't have permissions to use the action or resource. Or, it might be specifying an identifier that isn't valid.</p>
 *
 * @throws {@link ClusterNotFoundException} (client fault)
 *  <p>The specified cluster wasn't found. You can view your available clusters with <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListClusters.html">ListClusters</a>. Amazon ECS clusters are Region specific.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter isn't valid. Review the available parameters for the API request.</p> <p>For more information about service event errors, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-event-messages-list.html">Amazon ECS service event messages</a>. </p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server issue.</p>
 *
 * @throws {@link ServiceNotFoundException} (client fault)
 *  <p>The specified service wasn't found. You can view your available services with <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListServices.html">ListServices</a>. Amazon ECS services are cluster specific and Region specific.</p>
 *
 * @throws {@link UnsupportedFeatureException} (client fault)
 *  <p>The specified task isn't supported in this Region.</p>
 *
 * @throws {@link ECSServiceException}
 * <p>Base exception class for all service exceptions from ECS service.</p>
 *
 *
 * @example To describe a service deployment
 * ```javascript
 * // This example describes a service deployment for the service sd-example in the example cluster.
 * const input = {
 *   serviceDeploymentArns: [
 *     "arn:aws:ecs:us-west-2:123456789012:service-deployment/example/sd-example/NCWGC2ZR-taawPAYrIaU5"
 *   ]
 * };
 * const command = new DescribeServiceDeploymentsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   failures:   [],
 *   serviceDeployments: [
 *     {
 *       clusterArn: "arn:aws:ecs:us-west-2:123456789012:cluster/example",
 *       deploymentConfiguration: {
 *         deploymentCircuitBreaker: {
 *           enable: false,
 *           rollback: false
 *         },
 *         maximumPercent: 200,
 *         minimumHealthyPercent: 100
 *       },
 *       serviceArn: "arn:aws:ecs:us-west-2:123456789012:service/example/sd-example",
 *       serviceDeploymentArn: "arn:aws:ecs:us-west-2:123456789012:service-deployment/example/sd-example/NCWGC2ZR-taawPAYrIaU5",
 *       status: "PENDING",
 *       targetServiceRevision: {
 *         arn: "arn:aws:ecs:us-west-2:123456789012:service-revision/example/sd-example/4980306466373577095",
 *         pendingTaskCount: 0,
 *         requestedTaskCount: 0,
 *         runningTaskCount: 0
 *       },
 *       updatedAt: "2024-09-10T16:49:35.57Z"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @example To describe a service deployment with a paused lifecycle hook
 * ```javascript
 * // This example describes a service deployment that is currently paused at a lifecycle hook. The lifecycleHookDetails field shows the status of the pause hook, including when it will expire and what action will be taken if the timeout is reached.
 * const input = {
 *   serviceDeploymentArns: [
 *     "arn:aws:ecs:us-east-1:123456789012:service-deployment/MyCluster/MyService/r9i43YFjvgF_xlg7m2eJ1r"
 *   ]
 * };
 * const command = new DescribeServiceDeploymentsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   failures:   [],
 *   serviceDeployments: [
 *     {
 *       clusterArn: "arn:aws:ecs:us-east-1:123456789012:cluster/MyCluster",
 *       deploymentConfiguration: {
 *         deploymentCircuitBreaker: {
 *           enable: false,
 *           rollback: false
 *         },
 *         lifecycleHooks: [
 *           {
 *             lifecycleStages: [
 *               "POST_PRODUCTION_TRAFFIC_SHIFT"
 *             ],
 *             targetType: "PAUSE",
 *             timeoutConfiguration: {
 *               action: "ROLLBACK",
 *               timeoutInMinutes: 60
 *             }
 *           }
 *         ],
 *         maximumPercent: 200,
 *         minimumHealthyPercent: 100,
 *         strategy: "BLUE_GREEN"
 *       },
 *       lifecycleHookDetails: [
 *         {
 *           expiresAt: "2026-05-06T17:00:00.000Z",
 *           hookId: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
 *           status: "AWAITING_ACTION",
 *           targetType: "PAUSE",
 *           timeoutAction: "ROLLBACK"
 *         }
 *       ],
 *       lifecycleStage: "POST_PRODUCTION_TRAFFIC_SHIFT",
 *       serviceArn: "arn:aws:ecs:us-east-1:123456789012:service/MyCluster/MyService",
 *       serviceDeploymentArn: "arn:aws:ecs:us-east-1:123456789012:service-deployment/MyCluster/MyService/r9i43YFjvgF_xlg7m2eJ1r",
 *       status: "IN_PROGRESS",
 *       targetServiceRevision: {
 *         arn: "arn:aws:ecs:us-east-1:123456789012:service-revision/MyCluster/MyService/1234567890123456789",
 *         pendingTaskCount: 1,
 *         requestedTaskCount: 2,
 *         runningTaskCount: 1
 *       },
 *       updatedAt: "2026-05-06T16:00:00.000Z"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DescribeServiceDeploymentsCommand extends $Command
  .classBuilder<
    DescribeServiceDeploymentsCommandInput,
    DescribeServiceDeploymentsCommandOutput,
    ECSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ECSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2ContainerServiceV20141113", "DescribeServiceDeployments", {})
  .n("ECSClient", "DescribeServiceDeploymentsCommand")
  .sc(DescribeServiceDeployments$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeServiceDeploymentsRequest;
      output: DescribeServiceDeploymentsResponse;
    };
    sdk: {
      input: DescribeServiceDeploymentsCommandInput;
      output: DescribeServiceDeploymentsCommandOutput;
    };
  };
}
