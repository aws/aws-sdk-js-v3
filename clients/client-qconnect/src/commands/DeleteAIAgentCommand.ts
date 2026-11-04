// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteAIAgentRequest, DeleteAIAgentResponse } from "../models/models_0";
import { DeleteAIAgent$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteAIAgentCommand}.
 */
export interface DeleteAIAgentCommandInput extends DeleteAIAgentRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAIAgentCommand}.
 */
export interface DeleteAIAgentCommandOutput extends DeleteAIAgentResponse, __MetadataBearer {}

/**
 * Deletes an Amazon Q in Connect AI Agent.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QConnectClient, DeleteAIAgentCommand } from "@aws-sdk/client-qconnect"; // ES Modules import
 * // const { QConnectClient, DeleteAIAgentCommand } = require("@aws-sdk/client-qconnect"); // CommonJS import
 * // import type { QConnectClientConfig } from "@aws-sdk/client-qconnect";
 * const config = {}; // type is QConnectClientConfig
 * const client = new QConnectClient(config);
 * const input = { // DeleteAIAgentRequest
 *   assistantId: "STRING_VALUE", // required
 *   aiAgentId: "STRING_VALUE", // required
 * };
 * const command = new DeleteAIAgentCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAIAgentCommandInput - {@link DeleteAIAgentCommandInput}
 * @returns {@link DeleteAIAgentCommandOutput}
 * @see {@link DeleteAIAgentCommandInput} for command's `input` shape.
 * @see {@link DeleteAIAgentCommandOutput} for command's `response` shape.
 * @see {@link QConnectClientResolvedConfig | config} for QConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource does not exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The throttling limit has been exceeded.
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * You do not have permission to perform this action.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by a service.
 *
 * @throws {@link QConnectServiceException}
 *
 * Base exception class for all service exceptions from QConnect service.
 *
 * @public
 */
export class DeleteAIAgentCommand extends command<DeleteAIAgentCommandInput, DeleteAIAgentCommandOutput>(
  _ep0,
  _mw0,
  "DeleteAIAgent",
  DeleteAIAgent$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAIAgentRequest;
      output: {};
    };
    sdk: {
      input: DeleteAIAgentCommandInput;
      output: DeleteAIAgentCommandOutput;
    };
  };
}
