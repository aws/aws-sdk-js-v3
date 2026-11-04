// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RemoveAssistantAIAgentRequest, RemoveAssistantAIAgentResponse } from "../models/models_0";
import { RemoveAssistantAIAgent$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link RemoveAssistantAIAgentCommand}.
 */
export interface RemoveAssistantAIAgentCommandInput extends RemoveAssistantAIAgentRequest {}
/**
 * @public
 *
 * The output of {@link RemoveAssistantAIAgentCommand}.
 */
export interface RemoveAssistantAIAgentCommandOutput extends RemoveAssistantAIAgentResponse, __MetadataBearer {}

/**
 * Removes the AI Agent that is set for use by default on an Amazon Q in Connect Assistant.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QConnectClient, RemoveAssistantAIAgentCommand } from "@aws-sdk/client-qconnect"; // ES Modules import
 * // const { QConnectClient, RemoveAssistantAIAgentCommand } = require("@aws-sdk/client-qconnect"); // CommonJS import
 * // import type { QConnectClientConfig } from "@aws-sdk/client-qconnect";
 * const config = {}; // type is QConnectClientConfig
 * const client = new QConnectClient(config);
 * const input = { // RemoveAssistantAIAgentRequest
 *   assistantId: "STRING_VALUE", // required
 *   aiAgentType: "STRING_VALUE", // required
 *   orchestratorUseCase: "STRING_VALUE",
 * };
 * const command = new RemoveAssistantAIAgentCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param RemoveAssistantAIAgentCommandInput - {@link RemoveAssistantAIAgentCommandInput}
 * @returns {@link RemoveAssistantAIAgentCommandOutput}
 * @see {@link RemoveAssistantAIAgentCommandInput} for command's `input` shape.
 * @see {@link RemoveAssistantAIAgentCommandOutput} for command's `response` shape.
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
export class RemoveAssistantAIAgentCommand extends command<RemoveAssistantAIAgentCommandInput, RemoveAssistantAIAgentCommandOutput>(
  _ep0,
  _mw0,
  "RemoveAssistantAIAgent",
  RemoveAssistantAIAgent$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RemoveAssistantAIAgentRequest;
      output: {};
    };
    sdk: {
      input: RemoveAssistantAIAgentCommandInput;
      output: RemoveAssistantAIAgentCommandOutput;
    };
  };
}
