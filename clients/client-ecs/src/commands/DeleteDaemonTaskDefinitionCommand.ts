// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteDaemonTaskDefinitionRequest, DeleteDaemonTaskDefinitionResponse } from "../models/models_0";
import { DeleteDaemonTaskDefinition$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteDaemonTaskDefinitionCommand}.
 */
export interface DeleteDaemonTaskDefinitionCommandInput extends DeleteDaemonTaskDefinitionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteDaemonTaskDefinitionCommand}.
 */
export interface DeleteDaemonTaskDefinitionCommandOutput extends DeleteDaemonTaskDefinitionResponse, __MetadataBearer {}

/**
 * <p>Deletes the specified daemon task definition. After a daemon task definition is deleted, no new daemons can be created using this definition. Existing daemons that reference the deleted daemon task definition continue to run.</p> <p>A daemon task definition must be in an <code>ACTIVE</code> state to be deleted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, DeleteDaemonTaskDefinitionCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, DeleteDaemonTaskDefinitionCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * // import type { ECSClientConfig } from "@aws-sdk/client-ecs";
 * const config = {}; // type is ECSClientConfig
 * const client = new ECSClient(config);
 * const input = { // DeleteDaemonTaskDefinitionRequest
 *   daemonTaskDefinition: "STRING_VALUE", // required
 * };
 * const command = new DeleteDaemonTaskDefinitionCommand(input);
 * const response = await client.send(command);
 * // { // DeleteDaemonTaskDefinitionResponse
 * //   daemonTaskDefinitionArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteDaemonTaskDefinitionCommandInput - {@link DeleteDaemonTaskDefinitionCommandInput}
 * @returns {@link DeleteDaemonTaskDefinitionCommandOutput}
 * @see {@link DeleteDaemonTaskDefinitionCommandInput} for command's `input` shape.
 * @see {@link DeleteDaemonTaskDefinitionCommandOutput} for command's `response` shape.
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
 * @example To delete a daemon task definition
 * ```javascript
 * // This example deletes the first revision of the monitoring-agent daemon task definition.
 * const input = {
 *   daemonTaskDefinition: "monitoring-agent:1"
 * };
 * const command = new DeleteDaemonTaskDefinitionCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   daemonTaskDefinitionArn: "arn:aws:ecs:us-east-1:123456789012:daemon-task-definition/monitoring-agent:1"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteDaemonTaskDefinitionCommand extends command<DeleteDaemonTaskDefinitionCommandInput, DeleteDaemonTaskDefinitionCommandOutput>(
  _ep0,
  _mw0,
  "DeleteDaemonTaskDefinition",
  DeleteDaemonTaskDefinition$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteDaemonTaskDefinitionRequest;
      output: DeleteDaemonTaskDefinitionResponse;
    };
    sdk: {
      input: DeleteDaemonTaskDefinitionCommandInput;
      output: DeleteDaemonTaskDefinitionCommandOutput;
    };
  };
}
