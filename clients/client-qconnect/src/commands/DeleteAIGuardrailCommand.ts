// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteAIGuardrailRequest, DeleteAIGuardrailResponse } from "../models/models_0";
import { QConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QConnectClient";
import { DeleteAIGuardrail } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Deletes an Amazon Q in Connect AI Guardrail.</p>
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
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be processed because of conflict in the current state of the resource. For example, if you're using a <code>Create</code> API (such as <code>CreateAssistant</code>) that accepts name, a conflicting resource (usually with the same name) is being created or mutated.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You do not have permission to perform this action.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by a service.</p>
 *
 * @throws {@link QConnectServiceException}
 * <p>Base exception class for all service exceptions from QConnect service.</p>
 *
 *
 * @public
 */
export class DeleteAIGuardrailCommand extends $Command
  .classBuilder<
    DeleteAIGuardrailCommandInput,
    DeleteAIGuardrailCommandOutput,
    QConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WisdomService", "DeleteAIGuardrail", {})
  .n("QConnectClient", "DeleteAIGuardrailCommand")
  .sc(DeleteAIGuardrail)
  .build() {
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
