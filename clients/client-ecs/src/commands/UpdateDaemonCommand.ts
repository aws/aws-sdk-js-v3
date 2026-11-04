// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateDaemonRequest, UpdateDaemonResponse } from "../models/models_0";
import { UpdateDaemon$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateDaemonCommand}.
 */
export interface UpdateDaemonCommandInput extends UpdateDaemonRequest {}
/**
 * @public
 *
 * The output of {@link UpdateDaemonCommand}.
 */
export interface UpdateDaemonCommandOutput extends UpdateDaemonResponse, __MetadataBearer {}

/**
 * Updates the specified daemon. When you update a daemon, a new deployment is triggered that progressively rolls out the changes to the container instances associated with the daemon's capacity providers. For more information, see [Daemon deployments](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/daemon-deployments.html) in the *Amazon Elastic Container Service Developer Guide*.
 *
 * Amazon ECS drains existing container instances and provisions new instances with the updated daemon. Amazon ECS automatically launches replacement tasks for your services.
 *
 * > **Important:** Updating a daemon triggers a rolling deployment that drains and replaces container instances. Plan updates during maintenance windows to minimize impact on running services.
 *
 * > **Note:** ECS Managed Daemons is only supported for Amazon ECS Managed Instances Capacity Providers.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, UpdateDaemonCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, UpdateDaemonCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * // import type { ECSClientConfig } from "@aws-sdk/client-ecs";
 * const config = {}; // type is ECSClientConfig
 * const client = new ECSClient(config);
 * const input = { // UpdateDaemonRequest
 *   daemonArn: "STRING_VALUE", // required
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
 *   propagateTags: "DAEMON" || "NONE",
 *   enableECSManagedTags: true || false,
 *   enableExecuteCommand: true || false,
 *   critical: true || false,
 * };
 * const command = new UpdateDaemonCommand(input);
 * const response = await client.send(command);
 * // { // UpdateDaemonResponse
 * //   daemonArn: "STRING_VALUE",
 * //   status: "ACTIVE" || "DELETE_IN_PROGRESS",
 * //   createdAt: new Date("TIMESTAMP"),
 * //   updatedAt: new Date("TIMESTAMP"),
 * //   deploymentArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateDaemonCommandInput - {@link UpdateDaemonCommandInput}
 * @returns {@link UpdateDaemonCommandOutput}
 * @see {@link UpdateDaemonCommandInput} for command's `input` shape.
 * @see {@link UpdateDaemonCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for ECSClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have authorization to perform the requested action.
 *
 * @throws {@link ClientException} (client fault)
 *
 * These errors are usually caused by a client action. This client action might be using an action or resource on behalf of a user that doesn't have permissions to use the action or resource. Or, it might be specifying an identifier that isn't valid.
 *
 * @throws {@link ClusterNotFoundException} (client fault)
 *
 * The specified cluster wasn't found. You can view your available clusters with [ListClusters](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListClusters.html). Amazon ECS clusters are Region specific.
 *
 * @throws {@link DaemonNotActiveException} (client fault)
 *
 * The specified daemon isn't active. You can't update a daemon that's inactive. If you have previously deleted a daemon, you can re-create it with [CreateDaemon](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_CreateDaemon.html).
 *
 * @throws {@link DaemonNotFoundException} (client fault)
 *
 * The specified daemon wasn't found. You can view your available daemons with [ListDaemons](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListDaemons.html). Amazon ECS daemons are cluster specific and Region specific.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * The specified parameter isn't valid. Review the available parameters for the API request.
 *
 * For more information about service event errors, see [Amazon ECS service event messages](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-event-messages-list.html).
 *
 * @throws {@link PlatformUnknownException} (client fault)
 *
 * The specified platform version doesn't exist.
 *
 * @throws {@link ServerException} (server fault)
 *
 * These errors are usually caused by a server issue.
 *
 * @throws {@link UnsupportedFeatureException} (client fault)
 *
 * The specified task isn't supported in this Region.
 *
 * @throws {@link ECSServiceException}
 *
 * Base exception class for all service exceptions from ECS service.
 *
 * @example To update a daemon
 * ```javascript
 * // This example updates the my-monitoring-daemon daemon to use a new daemon task definition revision.
 * const input = {
 *   capacityProviderArns: [
 *     "arn:aws:ecs:us-east-1:123456789012:capacity-provider/my-capacity-provider"
 *   ],
 *   daemonArn: "arn:aws:ecs:us-east-1:123456789012:daemon/my-cluster/my-monitoring-daemon",
 *   daemonTaskDefinitionArn: "arn:aws:ecs:us-east-1:123456789012:daemon-task-definition/monitoring-agent:2",
 *   deploymentConfiguration: {
 *     bakeTimeInMinutes: 5,
 *     drainPercent: 10.0
 *   }
 * };
 * const command = new UpdateDaemonCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   createdAt: "2025-03-15T12:00:00.000Z",
 *   daemonArn: "arn:aws:ecs:us-east-1:123456789012:daemon/my-cluster/my-monitoring-daemon",
 *   deploymentArn: "arn:aws:ecs:us-east-1:123456789012:daemon-deployment/my-cluster/my-monitoring-daemon/xY9zA8bC7dE6fG5h",
 *   status: "ACTIVE",
 *   updatedAt: "2025-03-20T15:30:00.000Z"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class UpdateDaemonCommand extends command<UpdateDaemonCommandInput, UpdateDaemonCommandOutput>(
  _ep0,
  _mw0,
  "UpdateDaemon",
  UpdateDaemon$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateDaemonRequest;
      output: UpdateDaemonResponse;
    };
    sdk: {
      input: UpdateDaemonCommandInput;
      output: UpdateDaemonCommandOutput;
    };
  };
}
