// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListDaemonsRequest, ListDaemonsResponse } from "../models/models_0";
import { ListDaemons$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListDaemonsCommand}.
 */
export interface ListDaemonsCommandInput extends ListDaemonsRequest {}
/**
 * @public
 *
 * The output of {@link ListDaemonsCommand}.
 */
export interface ListDaemonsCommandOutput extends ListDaemonsResponse, __MetadataBearer {}

/**
 * Returns a list of daemons. You can filter the results by cluster or capacity provider.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, ListDaemonsCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, ListDaemonsCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * // import type { ECSClientConfig } from "@aws-sdk/client-ecs";
 * const config = {}; // type is ECSClientConfig
 * const client = new ECSClient(config);
 * const input = { // ListDaemonsRequest
 *   clusterArn: "STRING_VALUE",
 *   capacityProviderArns: [ // StringList
 *     "STRING_VALUE",
 *   ],
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListDaemonsCommand(input);
 * const response = await client.send(command);
 * // { // ListDaemonsResponse
 * //   daemonSummariesList: [ // DaemonSummariesList
 * //     { // DaemonSummary
 * //       daemonArn: "STRING_VALUE",
 * //       status: "ACTIVE" || "DELETE_IN_PROGRESS",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       updatedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDaemonsCommandInput - {@link ListDaemonsCommandInput}
 * @returns {@link ListDaemonsCommandOutput}
 * @see {@link ListDaemonsCommandInput} for command's `input` shape.
 * @see {@link ListDaemonsCommandOutput} for command's `response` shape.
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
 * @example To list daemons in a cluster
 * ```javascript
 * // This example lists all daemons in the specified cluster.
 * const input = {
 *   clusterArn: "arn:aws:ecs:us-east-1:123456789012:cluster/my-cluster"
 * };
 * const command = new ListDaemonsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   daemonSummariesList: [
 *     {
 *       createdAt: "2025-03-15T12:00:00.000Z",
 *       daemonArn: "arn:aws:ecs:us-east-1:123456789012:daemon/my-cluster/my-monitoring-daemon",
 *       status: "ACTIVE",
 *       updatedAt: "2025-03-20T15:30:00.000Z"
 *     },
 *     {
 *       createdAt: "2025-03-16T09:00:00.000Z",
 *       daemonArn: "arn:aws:ecs:us-east-1:123456789012:daemon/my-cluster/my-logging-daemon",
 *       status: "ACTIVE",
 *       updatedAt: "2025-03-16T09:00:00.000Z"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListDaemonsCommand extends command<ListDaemonsCommandInput, ListDaemonsCommandOutput>(
  _ep0,
  _mw0,
  "ListDaemons",
  ListDaemons$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDaemonsRequest;
      output: ListDaemonsResponse;
    };
    sdk: {
      input: ListDaemonsCommandInput;
      output: ListDaemonsCommandOutput;
    };
  };
}
