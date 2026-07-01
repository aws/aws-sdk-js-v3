// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListDaemonTaskDefinitionsRequest, ListDaemonTaskDefinitionsResponse } from "../models/models_0";
import { ListDaemonTaskDefinitions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListDaemonTaskDefinitionsCommand}.
 */
export interface ListDaemonTaskDefinitionsCommandInput extends ListDaemonTaskDefinitionsRequest {}
/**
 * @public
 *
 * The output of {@link ListDaemonTaskDefinitionsCommand}.
 */
export interface ListDaemonTaskDefinitionsCommandOutput extends ListDaemonTaskDefinitionsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of daemon task definitions that are registered to your account. You can filter the results by family name, status, or both to find daemon task definitions that match your criteria.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, ListDaemonTaskDefinitionsCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, ListDaemonTaskDefinitionsCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * // import type { ECSClientConfig } from "@aws-sdk/client-ecs";
 * const config = {}; // type is ECSClientConfig
 * const client = new ECSClient(config);
 * const input = { // ListDaemonTaskDefinitionsRequest
 *   familyPrefix: "STRING_VALUE",
 *   family: "STRING_VALUE",
 *   revision: "LAST_REGISTERED",
 *   status: "ACTIVE" || "DELETE_IN_PROGRESS" || "ALL",
 *   sort: "ASC" || "DESC",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListDaemonTaskDefinitionsCommand(input);
 * const response = await client.send(command);
 * // { // ListDaemonTaskDefinitionsResponse
 * //   daemonTaskDefinitions: [ // DaemonTaskDefinitionSummaries
 * //     { // DaemonTaskDefinitionSummary
 * //       arn: "STRING_VALUE",
 * //       registeredAt: new Date("TIMESTAMP"),
 * //       registeredBy: "STRING_VALUE",
 * //       deleteRequestedAt: new Date("TIMESTAMP"),
 * //       status: "ACTIVE" || "DELETE_IN_PROGRESS" || "DELETED",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDaemonTaskDefinitionsCommandInput - {@link ListDaemonTaskDefinitionsCommandInput}
 * @returns {@link ListDaemonTaskDefinitionsCommandOutput}
 * @see {@link ListDaemonTaskDefinitionsCommandInput} for command's `input` shape.
 * @see {@link ListDaemonTaskDefinitionsCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for ECSClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have authorization to perform the requested action.</p>
 *
 * @throws {@link ClientException} (client fault)
 *  <p>These errors are usually caused by a client action. This client action might be using an action or resource on behalf of a user that doesn't have permissions to use the action or resource. Or, it might be specifying an identifier that isn't valid.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter isn't valid. Review the available parameters for the API request.</p> <p>For more information about service event errors, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-event-messages-list.html">Amazon ECS service event messages</a>. </p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server issue.</p>
 *
 * @throws {@link ECSServiceException}
 * <p>Base exception class for all service exceptions from ECS service.</p>
 *
 *
 * @example To list daemon task definitions
 * ```javascript
 * // This example lists all daemon task definitions in your account that start with the monitoring prefix.
 * const input = {
 *   familyPrefix: "monitoring"
 * };
 * const command = new ListDaemonTaskDefinitionsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   daemonTaskDefinitions: [
 *     {
 *       arn: "arn:aws:ecs:us-east-1:123456789012:daemon-task-definition/monitoring-agent:2",
 *       registeredAt: "2025-03-20T14:00:00.000Z",
 *       registeredBy: "arn:aws:iam::123456789012:user/admin",
 *       status: "ACTIVE"
 *     },
 *     {
 *       arn: "arn:aws:ecs:us-east-1:123456789012:daemon-task-definition/monitoring-agent:1",
 *       registeredAt: "2025-03-15T10:30:00.000Z",
 *       registeredBy: "arn:aws:iam::123456789012:user/admin",
 *       status: "ACTIVE"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListDaemonTaskDefinitionsCommand extends command<ListDaemonTaskDefinitionsCommandInput, ListDaemonTaskDefinitionsCommandOutput>(
  _ep0,
  _mw0,
  "ListDaemonTaskDefinitions",
  ListDaemonTaskDefinitions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDaemonTaskDefinitionsRequest;
      output: ListDaemonTaskDefinitionsResponse;
    };
    sdk: {
      input: ListDaemonTaskDefinitionsCommandInput;
      output: ListDaemonTaskDefinitionsCommandOutput;
    };
  };
}
