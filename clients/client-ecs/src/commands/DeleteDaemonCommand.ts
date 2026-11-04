// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteDaemonRequest, DeleteDaemonResponse } from "../models/models_0";
import { DeleteDaemon$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteDaemonCommand}.
 */
export interface DeleteDaemonCommandInput extends DeleteDaemonRequest {}
/**
 * @public
 *
 * The output of {@link DeleteDaemonCommand}.
 */
export interface DeleteDaemonCommandOutput extends DeleteDaemonResponse, __MetadataBearer {}

/**
 * Deletes the specified daemon. The daemon must be in an `ACTIVE` state to be deleted. Deleting a daemon stops all running daemon tasks on the associated container instances. Amazon ECS drains existing container instances and provisions new instances without the deleted daemon. Amazon ECS automatically launches replacement tasks for your Amazon ECS services.
 *
 * > **Note:** ECS Managed Daemons is only supported for Amazon ECS Managed Instances Capacity Providers.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, DeleteDaemonCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, DeleteDaemonCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * // import type { ECSClientConfig } from "@aws-sdk/client-ecs";
 * const config = {}; // type is ECSClientConfig
 * const client = new ECSClient(config);
 * const input = { // DeleteDaemonRequest
 *   daemonArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteDaemonCommand(input);
 * const response = await client.send(command);
 * // { // DeleteDaemonResponse
 * //   daemonArn: "STRING_VALUE",
 * //   status: "ACTIVE" || "DELETE_IN_PROGRESS",
 * //   createdAt: new Date("TIMESTAMP"),
 * //   updatedAt: new Date("TIMESTAMP"),
 * //   deploymentArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteDaemonCommandInput - {@link DeleteDaemonCommandInput}
 * @returns {@link DeleteDaemonCommandOutput}
 * @see {@link DeleteDaemonCommandInput} for command's `input` shape.
 * @see {@link DeleteDaemonCommandOutput} for command's `response` shape.
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
 * @example To delete a daemon
 * ```javascript
 * // This example deletes the my-monitoring-daemon daemon.
 * const input = {
 *   daemonArn: "arn:aws:ecs:us-east-1:123456789012:daemon/my-cluster/my-monitoring-daemon"
 * };
 * const command = new DeleteDaemonCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   createdAt: "2025-03-15T12:00:00.000Z",
 *   daemonArn: "arn:aws:ecs:us-east-1:123456789012:daemon/my-cluster/my-monitoring-daemon",
 *   deploymentArn: "arn:aws:ecs:us-east-1:123456789012:daemon-deployment/my-cluster/my-monitoring-daemon/mN3oP4qR5sT6uV7w",
 *   status: "DELETE_IN_PROGRESS",
 *   updatedAt: "2025-03-25T09:00:00.000Z"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteDaemonCommand extends command<DeleteDaemonCommandInput, DeleteDaemonCommandOutput>(
  _ep0,
  _mw0,
  "DeleteDaemon",
  DeleteDaemon$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteDaemonRequest;
      output: DeleteDaemonResponse;
    };
    sdk: {
      input: DeleteDaemonCommandInput;
      output: DeleteDaemonCommandOutput;
    };
  };
}
