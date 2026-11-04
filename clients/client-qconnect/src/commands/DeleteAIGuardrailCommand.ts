// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteAIGuardrailRequest, DeleteAIGuardrailResponse } from "../models/models_0";
import { DeleteAIGuardrail$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteAIGuardrailCommand}.
 */
export interface DeleteAIGuardrailCommandInput extends DeleteAIGuardrailRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAIGuardrailCommand}.
 */
export interface DeleteAIGuardrailCommandOutput extends DeleteAIGuardrailResponse, __MetadataBearer {}

/**
 * Deletes an Amazon Q in Connect AI Guardrail.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QConnectClient, DeleteAIGuardrailCommand } from "@aws-sdk/client-qconnect"; // ES Modules import
 * // const { QConnectClient, DeleteAIGuardrailCommand } = require("@aws-sdk/client-qconnect"); // CommonJS import
 * // import type { QConnectClientConfig } from "@aws-sdk/client-qconnect";
 * const config = {}; // type is QConnectClientConfig
 * const client = new QConnectClient(config);
 * const input = { // DeleteAIGuardrailRequest
 *   assistantId: "STRING_VALUE", // required
 *   aiGuardrailId: "STRING_VALUE", // required
 * };
 * const command = new DeleteAIGuardrailCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAIGuardrailCommandInput - {@link DeleteAIGuardrailCommandInput}
 * @returns {@link DeleteAIGuardrailCommandOutput}
 * @see {@link DeleteAIGuardrailCommandInput} for command's `input` shape.
 * @see {@link DeleteAIGuardrailCommandOutput} for command's `response` shape.
 * @see {@link QConnectClientResolvedConfig | config} for QConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request could not be processed because of conflict in the current state of the resource. For example, if you're using a `Create` API (such as `CreateAssistant`) that accepts name, a conflicting resource (usually with the same name) is being created or mutated.
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
export class DeleteAIGuardrailCommand extends command<DeleteAIGuardrailCommandInput, DeleteAIGuardrailCommandOutput>(
  _ep0,
  _mw0,
  "DeleteAIGuardrail",
  DeleteAIGuardrail$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAIGuardrailRequest;
      output: {};
    };
    sdk: {
      input: DeleteAIGuardrailCommandInput;
      output: DeleteAIGuardrailCommandOutput;
    };
  };
}
