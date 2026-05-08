// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeDaemonDeploymentsRequest, DescribeDaemonDeploymentsResponse } from "../models/models_0";
import { DescribeDaemonDeployments$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeDaemonDeploymentsCommand}.
 */
export interface DescribeDaemonDeploymentsCommandInput extends DescribeDaemonDeploymentsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeDaemonDeploymentsCommand}.
 */
export interface DescribeDaemonDeploymentsCommandOutput extends DescribeDaemonDeploymentsResponse, __MetadataBearer {}

/**
 * <p>Describes one or more of your daemon deployments.</p> <p>A daemon deployment orchestrates the progressive rollout of daemon task updates across container instances managed by the daemon's capacity providers. Each deployment includes circuit breaker and alarm-based rollback capabilities.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, DescribeDaemonDeploymentsCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, DescribeDaemonDeploymentsCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * // import type { ECSClientConfig } from "@aws-sdk/client-ecs";
 * const config = {}; // type is ECSClientConfig
 * const client = new ECSClient(config);
 * const input = { // DescribeDaemonDeploymentsRequest
 *   daemonDeploymentArns: [ // StringList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DescribeDaemonDeploymentsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeDaemonDeploymentsResponse
 * //   failures: [ // Failures
 * //     { // Failure
 * //       arn: "STRING_VALUE",
 * //       reason: "STRING_VALUE",
 * //       detail: "STRING_VALUE",
 * //     },
 * //   ],
 * //   daemonDeployments: [ // DaemonDeploymentList
 * //     { // DaemonDeployment
 * //       daemonDeploymentArn: "STRING_VALUE",
 * //       clusterArn: "STRING_VALUE",
 * //       status: "PENDING" || "SUCCESSFUL" || "STOPPED" || "STOP_REQUESTED" || "IN_PROGRESS" || "ROLLBACK_IN_PROGRESS" || "ROLLBACK_SUCCESSFUL" || "ROLLBACK_FAILED",
 * //       statusReason: "STRING_VALUE",
 * //       targetDaemonRevision: { // DaemonDeploymentRevisionDetail
 * //         arn: "STRING_VALUE",
 * //         capacityProviders: [ // DaemonDeploymentCapacityProviderList
 * //           { // DaemonDeploymentCapacityProvider
 * //             arn: "STRING_VALUE",
 * //             runningInstanceCount: Number("int"),
 * //             drainingInstanceCount: Number("int"),
 * //           },
 * //         ],
 * //         totalRunningInstanceCount: Number("int"),
 * //         totalDrainingInstanceCount: Number("int"),
 * //       },
 * //       sourceDaemonRevisions: [ // DaemonDeploymentRevisionDetailList
 * //         {
 * //           arn: "STRING_VALUE",
 * //           capacityProviders: [
 * //             {
 * //               arn: "STRING_VALUE",
 * //               runningInstanceCount: Number("int"),
 * //               drainingInstanceCount: Number("int"),
 * //             },
 * //           ],
 * //           totalRunningInstanceCount: Number("int"),
 * //           totalDrainingInstanceCount: Number("int"),
 * //         },
 * //       ],
 * //       circuitBreaker: { // DaemonCircuitBreaker
 * //         failureCount: Number("int"),
 * //         status: "TRIGGERED" || "MONITORING" || "MONITORING_COMPLETE" || "DISABLED",
 * //         threshold: Number("int"),
 * //       },
 * //       alarms: { // DaemonDeploymentAlarms
 * //         status: "TRIGGERED" || "MONITORING" || "MONITORING_COMPLETE" || "DISABLED",
 * //         alarmNames: [ // StringList
 * //           "STRING_VALUE",
 * //         ],
 * //         triggeredAlarmNames: [
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       rollback: { // DaemonRollback
 * //         reason: "STRING_VALUE",
 * //         startedAt: new Date("TIMESTAMP"),
 * //         rollbackTargetDaemonRevisionArn: "STRING_VALUE",
 * //         rollbackCapacityProviders: [
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       deploymentConfiguration: { // DaemonDeploymentConfiguration
 * //         drainPercent: Number("double"),
 * //         alarms: { // DaemonAlarmConfiguration
 * //           alarmNames: [
 * //             "STRING_VALUE",
 * //           ],
 * //           enable: true || false,
 * //         },
 * //         bakeTimeInMinutes: Number("int"),
 * //       },
 * //       createdAt: new Date("TIMESTAMP"),
 * //       startedAt: new Date("TIMESTAMP"),
 * //       stoppedAt: new Date("TIMESTAMP"),
 * //       finishedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeDaemonDeploymentsCommandInput - {@link DescribeDaemonDeploymentsCommandInput}
 * @returns {@link DescribeDaemonDeploymentsCommandOutput}
 * @see {@link DescribeDaemonDeploymentsCommandInput} for command's `input` shape.
 * @see {@link DescribeDaemonDeploymentsCommandOutput} for command's `response` shape.
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
 * @throws {@link UnsupportedFeatureException} (client fault)
 *  <p>The specified task isn't supported in this Region.</p>
 *
 * @throws {@link ECSServiceException}
 * <p>Base exception class for all service exceptions from ECS service.</p>
 *
 *
 * @example To describe daemon deployments
 * ```javascript
 * // This example describes a daemon deployment for the my-monitoring-daemon daemon.
 * const input = {
 *   daemonDeploymentArns: [
 *     "arn:aws:ecs:us-east-1:123456789012:daemon-deployment/my-cluster/my-monitoring-daemon/aB1cD2eF3gH4iJ5k"
 *   ]
 * };
 * const command = new DescribeDaemonDeploymentsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   daemonDeployments: [
 *     {
 *       alarms: {
 *         alarmNames:         [],
 *         status: "DISABLED",
 *         triggeredAlarmNames:         []
 *       },
 *       circuitBreaker: {
 *         failureCount: 0,
 *         status: "MONITORING_COMPLETE",
 *         threshold: 10
 *       },
 *       clusterArn: "arn:aws:ecs:us-east-1:123456789012:cluster/my-cluster",
 *       createdAt: "2025-03-15T12:00:00.000Z",
 *       daemonDeploymentArn: "arn:aws:ecs:us-east-1:123456789012:daemon-deployment/my-cluster/my-monitoring-daemon/aB1cD2eF3gH4iJ5k",
 *       deploymentConfiguration: {
 *         alarms: {
 *           alarmNames:           [],
 *           enable: false
 *         },
 *         bakeTimeInMinutes: 5,
 *         drainPercent: 10.0
 *       },
 *       finishedAt: "2025-03-15T12:15:00.000Z",
 *       sourceDaemonRevisions:       [],
 *       startedAt: "2025-03-15T12:00:05.000Z",
 *       status: "SUCCESSFUL",
 *       statusReason: "Deployment completed successfully.",
 *       targetDaemonRevision: {
 *         arn: "arn:aws:ecs:us-east-1:123456789012:daemon-revision/my-cluster/my-monitoring-daemon/4980306466373577095",
 *         capacityProviders: [
 *           {
 *             arn: "arn:aws:ecs:us-east-1:123456789012:capacity-provider/my-capacity-provider",
 *             drainingInstanceCount: 0,
 *             runningInstanceCount: 3
 *           }
 *         ],
 *         totalDrainingInstanceCount: 0,
 *         totalRunningInstanceCount: 3
 *       }
 *     }
 *   ],
 *   failures:   []
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DescribeDaemonDeploymentsCommand extends $Command
  .classBuilder<
    DescribeDaemonDeploymentsCommandInput,
    DescribeDaemonDeploymentsCommandOutput,
    ECSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ECSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2ContainerServiceV20141113", "DescribeDaemonDeployments", {})
  .n("ECSClient", "DescribeDaemonDeploymentsCommand")
  .sc(DescribeDaemonDeployments$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeDaemonDeploymentsRequest;
      output: DescribeDaemonDeploymentsResponse;
    };
    sdk: {
      input: DescribeDaemonDeploymentsCommandInput;
      output: DescribeDaemonDeploymentsCommandOutput;
    };
  };
}
