// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateDaemonRequest, CreateDaemonResponse } from "../models/models_0";
import { CreateDaemon$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateDaemonCommand}.
 */
export interface CreateDaemonCommandInput extends CreateDaemonRequest {}
/**
 * @public
 *
 * The output of {@link CreateDaemonCommand}.
 */
export interface CreateDaemonCommandOutput extends CreateDaemonResponse, __MetadataBearer {}

/**
 * <p>Creates a new daemon in the specified cluster and capacity providers. A daemon deploys cross-cutting software agents such as security monitoring, telemetry, and logging independently across your Amazon ECS infrastructure.</p> <p>Amazon ECS deploys exactly one daemon task on each container instance of the specified capacity providers. When a container instance registers with the cluster, Amazon ECS automatically starts daemon tasks. Amazon ECS starts a daemon task before scheduling other tasks.</p> <p>Daemons are essential for instance health - if a daemon task stops, Amazon ECS automatically drains and replaces that container instance.</p> <note> <p>ECS Managed Daemons is only supported for Amazon ECS Managed Instances Capacity Providers.</p> </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, CreateDaemonCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, CreateDaemonCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * // import type { ECSClientConfig } from "@aws-sdk/client-ecs";
 * const config = {}; // type is ECSClientConfig
 * const client = new ECSClient(config);
 * const input = { // CreateDaemonRequest
 *   daemonName: "STRING_VALUE", // required
 *   clusterArn: "STRING_VALUE",
 *   daemonTaskDefinitionArn: "STRING_VALUE", // required
 *   capacityProviderArns: [ // StringList // required
 *     "STRING_VALUE",
 *   ],
 *   deploymentConfiguration: { // DaemonDeploymentConfiguration
 *     drainPercent: Number("double"),
 *     alarms: { // DaemonAlarmConfiguration
 *       alarmNames: [
 *         "STRING_VALUE",
 *       ],
 *       enable: true || false,
 *     },
 *     bakeTimeInMinutes: Number("int"),
 *   },
 *   tags: [ // Tags
 *     { // Tag
 *       key: "STRING_VALUE",
 *       value: "STRING_VALUE",
 *     },
 *   ],
 *   propagateTags: "DAEMON" || "NONE",
 *   enableECSManagedTags: true || false,
 *   enableExecuteCommand: true || false,
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new CreateDaemonCommand(input);
 * const response = await client.send(command);
 * // { // CreateDaemonResponse
 * //   daemonArn: "STRING_VALUE",
 * //   status: "ACTIVE" || "DELETE_IN_PROGRESS",
 * //   createdAt: new Date("TIMESTAMP"),
 * //   deploymentArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateDaemonCommandInput - {@link CreateDaemonCommandInput}
 * @returns {@link CreateDaemonCommandOutput}
 * @see {@link CreateDaemonCommandInput} for command's `input` shape.
 * @see {@link CreateDaemonCommandOutput} for command's `response` shape.
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
 * @throws {@link PlatformUnknownException} (client fault)
 *  <p>The specified platform version doesn't exist.</p>
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
 * @example To create a daemon
 * ```javascript
 * // This example creates a daemon named my-monitoring-daemon in the specified cluster that uses the monitoring-agent daemon task definition and deploys to the specified capacity provider.
 * const input = {
 *   capacityProviderArns: [
 *     "arn:aws:ecs:us-east-1:123456789012:capacity-provider/my-capacity-provider"
 *   ],
 *   clusterArn: "arn:aws:ecs:us-east-1:123456789012:cluster/my-cluster",
 *   daemonName: "my-monitoring-daemon",
 *   daemonTaskDefinitionArn: "arn:aws:ecs:us-east-1:123456789012:daemon-task-definition/monitoring-agent:1",
 *   deploymentConfiguration: {
 *     bakeTimeInMinutes: 5,
 *     drainPercent: 10.0
 *   }
 * };
 * const command = new CreateDaemonCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   createdAt: "2025-03-15T12:00:00.000Z",
 *   daemonArn: "arn:aws:ecs:us-east-1:123456789012:daemon/my-cluster/my-monitoring-daemon",
 *   deploymentArn: "arn:aws:ecs:us-east-1:123456789012:daemon-deployment/my-cluster/my-monitoring-daemon/aB1cD2eF3gH4iJ5k",
 *   status: "ACTIVE"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateDaemonCommand extends command<CreateDaemonCommandInput, CreateDaemonCommandOutput>(
  _ep0,
  _mw0,
  "CreateDaemon",
  CreateDaemon$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateDaemonRequest;
      output: CreateDaemonResponse;
    };
    sdk: {
      input: CreateDaemonCommandInput;
      output: CreateDaemonCommandOutput;
    };
  };
}
