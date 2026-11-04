// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep1, _mw0, command } from "../commandBuilder";
import type { DeleteAgentGoalRequest, DeleteAgentGoalResponse } from "../models/models_0";
import { DeleteAgentGoal$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteAgentGoalCommand}.
 */
export interface DeleteAgentGoalCommandInput extends DeleteAgentGoalRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAgentGoalCommand}.
 */
export interface DeleteAgentGoalCommandOutput extends DeleteAgentGoalResponse, __MetadataBearer {}

/**
 * Deletes an optimization goal from a profile.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, DeleteAgentGoalCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, DeleteAgentGoalCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * // import type { WellArchitectedClientConfig } from "@aws-sdk/client-wellarchitected";
 * const config = {}; // type is WellArchitectedClientConfig
 * const client = new WellArchitectedClient(config);
 * const input = { // DeleteAgentGoalRequest
 *   profileArn: "STRING_VALUE", // required
 *   id: "STRING_VALUE", // required
 * };
 * const command = new DeleteAgentGoalCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAgentGoalCommandInput - {@link DeleteAgentGoalCommandInput}
 * @returns {@link DeleteAgentGoalCommandOutput}
 * @see {@link DeleteAgentGoalCommandInput} for command's `input` shape.
 * @see {@link DeleteAgentGoalCommandOutput} for command's `response` shape.
 * @see {@link WellArchitectedClientResolvedConfig | config} for WellArchitectedClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * User does not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * There is a problem with the Well-Architected Tool API service.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The requested resource was not found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The user input is not valid.
 *
 * @throws {@link WellArchitectedServiceException}
 *
 * Base exception class for all service exceptions from WellArchitected service.
 *
 * @public
 */
export class DeleteAgentGoalCommand extends command<DeleteAgentGoalCommandInput, DeleteAgentGoalCommandOutput>(
  _ep1,
  _mw0,
  "DeleteAgentGoal",
  DeleteAgentGoal$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAgentGoalRequest;
      output: {};
    };
    sdk: {
      input: DeleteAgentGoalCommandInput;
      output: DeleteAgentGoalCommandOutput;
    };
  };
}
