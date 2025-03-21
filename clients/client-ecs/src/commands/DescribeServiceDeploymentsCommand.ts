// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeServiceDeploymentsRequest, DescribeServiceDeploymentsResponse } from "../models/models_0";
import { de_DescribeServiceDeploymentsCommand, se_DescribeServiceDeploymentsCommand } from "../protocols/Aws_json1_1";

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
 * <p>Describes one or more of your service deployments.</p>
 *          <p>A service deployment happens when you release a software update for the service. For
 * 			more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-deployments.html">Amazon ECS service
 * 				deployments</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, DescribeServiceDeploymentsCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, DescribeServiceDeploymentsCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
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
 * //         },
 * //       ],
 * //       targetServiceRevision: {
 * //         arn: "STRING_VALUE",
 * //         requestedTaskCount: Number("int"),
 * //         runningTaskCount: Number("int"),
 * //         pendingTaskCount: Number("int"),
 * //       },
 * //       status: "PENDING" || "SUCCESSFUL" || "STOPPED" || "STOP_REQUESTED" || "IN_PROGRESS" || "ROLLBACK_IN_PROGRESS" || "ROLLBACK_SUCCESSFUL" || "ROLLBACK_FAILED",
 * //       statusReason: "STRING_VALUE",
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
 *          <p>For more information about service event errors, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-event-messages-list.html">Amazon ECS service event messages</a>. </p>
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
 * @example To describe a service deployment
 * ```javascript
 * // This example describes a service deployment for the service sd-example in the example cluster.
 * const input = {
 *   "serviceDeploymentArns": [
 *     "arn:aws:ecs:us-west-2:123456789012:service-deployment/example/sd-example/NCWGC2ZR-taawPAYrIaU5"
 *   ]
 * };
 * const command = new DescribeServiceDeploymentsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "failures": [],
 *   "serviceDeployments": [
 *     {
 *       "clusterArn": "arn:aws:ecs:us-west-2:123456789012:cluster/example",
 *       "deploymentConfiguration": {
 *         "deploymentCircuitBreaker": {
 *           "enable": false,
 *           "rollback": false
 *         },
 *         "maximumPercent": 200,
 *         "minimumHealthyPercent": 100
 *       },
 *       "serviceArn": "arn:aws:ecs:us-west-2:123456789012:service/example/sd-example",
 *       "serviceDeploymentArn": "arn:aws:ecs:us-west-2:123456789012:service-deployment/example/sd-example/NCWGC2ZR-taawPAYrIaU5",
 *       "status": "PENDING",
 *       "targetServiceRevision": {
 *         "arn": "arn:aws:ecs:us-west-2:123456789012:service-revision/example/sd-example/4980306466373577095",
 *         "pendingTaskCount": 0,
 *         "requestedTaskCount": 0,
 *         "runningTaskCount": 0
 *       },
 *       "updatedAt": "2024-09-10T16:49:35.572000+00:00"
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-describe-a-service-deployment--1733954961143
 * ```
 *
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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonEC2ContainerServiceV20141113", "DescribeServiceDeployments", {})
  .n("ECSClient", "DescribeServiceDeploymentsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeServiceDeploymentsCommand)
  .de(de_DescribeServiceDeploymentsCommand)
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
