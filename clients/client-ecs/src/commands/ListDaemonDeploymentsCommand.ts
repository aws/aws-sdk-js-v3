// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListDaemonDeploymentsRequest, ListDaemonDeploymentsResponse } from "../models/models_0";
import { ListDaemonDeployments$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListDaemonDeploymentsCommand}.
 */
export interface ListDaemonDeploymentsCommandInput extends ListDaemonDeploymentsRequest {}
/**
 * @public
 *
 * The output of {@link ListDaemonDeploymentsCommand}.
 */
export interface ListDaemonDeploymentsCommandOutput extends ListDaemonDeploymentsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of daemon deployments for a specified daemon. You can filter the results by status or creation time.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, ListDaemonDeploymentsCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, ListDaemonDeploymentsCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * // import type { ECSClientConfig } from "@aws-sdk/client-ecs";
 * const config = {}; // type is ECSClientConfig
 * const client = new ECSClient(config);
 * const input = { // ListDaemonDeploymentsRequest
 *   daemonArn: "STRING_VALUE", // required
 *   status: [ // DaemonDeploymentStatusList
 *     "PENDING" || "SUCCESSFUL" || "STOPPED" || "STOP_REQUESTED" || "IN_PROGRESS" || "ROLLBACK_IN_PROGRESS" || "ROLLBACK_SUCCESSFUL" || "ROLLBACK_FAILED",
 *   ],
 *   createdAt: { // CreatedAt
 *     before: new Date("TIMESTAMP"),
 *     after: new Date("TIMESTAMP"),
 *   },
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListDaemonDeploymentsCommand(input);
 * const response = await client.send(command);
 * // { // ListDaemonDeploymentsResponse
 * //   nextToken: "STRING_VALUE",
 * //   daemonDeployments: [ // DaemonDeploymentSummaryList
 * //     { // DaemonDeploymentSummary
 * //       daemonDeploymentArn: "STRING_VALUE",
 * //       daemonArn: "STRING_VALUE",
 * //       clusterArn: "STRING_VALUE",
 * //       status: "PENDING" || "SUCCESSFUL" || "STOPPED" || "STOP_REQUESTED" || "IN_PROGRESS" || "ROLLBACK_IN_PROGRESS" || "ROLLBACK_SUCCESSFUL" || "ROLLBACK_FAILED",
 * //       statusReason: "STRING_VALUE",
 * //       targetDaemonRevisionArn: "STRING_VALUE",
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
 * @param ListDaemonDeploymentsCommandInput - {@link ListDaemonDeploymentsCommandInput}
 * @returns {@link ListDaemonDeploymentsCommandOutput}
 * @see {@link ListDaemonDeploymentsCommandInput} for command's `input` shape.
 * @see {@link ListDaemonDeploymentsCommandOutput} for command's `response` shape.
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
 * @example To list daemon deployments
 * ```javascript
 * // This example lists all successful daemon deployments for the my-monitoring-daemon daemon.
 * const input = {
 *   daemonArn: "arn:aws:ecs:us-east-1:123456789012:daemon/my-cluster/my-monitoring-daemon",
 *   status: [
 *     "SUCCESSFUL"
 *   ]
 * };
 * const command = new ListDaemonDeploymentsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   daemonDeployments: [
 *     {
 *       clusterArn: "arn:aws:ecs:us-east-1:123456789012:cluster/my-cluster",
 *       createdAt: "2025-03-15T12:00:00.000Z",
 *       daemonArn: "arn:aws:ecs:us-east-1:123456789012:daemon/my-cluster/my-monitoring-daemon",
 *       daemonDeploymentArn: "arn:aws:ecs:us-east-1:123456789012:daemon-deployment/my-cluster/my-monitoring-daemon/aB1cD2eF3gH4iJ5k",
 *       finishedAt: "2025-03-15T12:15:00.000Z",
 *       startedAt: "2025-03-15T12:00:05.000Z",
 *       status: "SUCCESSFUL",
 *       statusReason: "Deployment completed successfully.",
 *       targetDaemonRevisionArn: "arn:aws:ecs:us-east-1:123456789012:daemon-revision/my-cluster/my-monitoring-daemon/4980306466373577095"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListDaemonDeploymentsCommand extends command<ListDaemonDeploymentsCommandInput, ListDaemonDeploymentsCommandOutput>(
  _ep0,
  _mw0,
  "ListDaemonDeployments",
  ListDaemonDeployments$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDaemonDeploymentsRequest;
      output: ListDaemonDeploymentsResponse;
    };
    sdk: {
      input: ListDaemonDeploymentsCommandInput;
      output: ListDaemonDeploymentsCommandOutput;
    };
  };
}
