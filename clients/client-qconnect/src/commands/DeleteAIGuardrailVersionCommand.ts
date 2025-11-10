// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteAIGuardrailVersionRequest, DeleteAIGuardrailVersionResponse } from "../models/models_0";
import { QConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QConnectClient";
import { DeleteAIGuardrailVersion } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteAIGuardrailVersionCommand}.
 */
export interface DeleteAIGuardrailVersionCommandInput extends DeleteAIGuardrailVersionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAIGuardrailVersionCommand}.
 */
export interface DeleteAIGuardrailVersionCommandOutput extends DeleteAIGuardrailVersionResponse, __MetadataBearer {}

/**
 * <p>Delete and Amazon Q in Connect AI Guardrail version.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QConnectClient, DeleteAIGuardrailVersionCommand } from "@aws-sdk/client-qconnect"; // ES Modules import
 * // const { QConnectClient, DeleteAIGuardrailVersionCommand } = require("@aws-sdk/client-qconnect"); // CommonJS import
 * // import type { QConnectClientConfig } from "@aws-sdk/client-qconnect";
 * const config = {}; // type is QConnectClientConfig
 * const client = new QConnectClient(config);
 * const input = { // DeleteAIGuardrailVersionRequest
 *   assistantId: "STRING_VALUE", // required
 *   aiGuardrailId: "STRING_VALUE", // required
 *   versionNumber: Number("long"), // required
 * };
 * const command = new DeleteAIGuardrailVersionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAIGuardrailVersionCommandInput - {@link DeleteAIGuardrailVersionCommandInput}
 * @returns {@link DeleteAIGuardrailVersionCommandOutput}
 * @see {@link DeleteAIGuardrailVersionCommandInput} for command's `input` shape.
 * @see {@link DeleteAIGuardrailVersionCommandOutput} for command's `response` shape.
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
export class DeleteAIGuardrailVersionCommand extends $Command
  .classBuilder<
    DeleteAIGuardrailVersionCommandInput,
    DeleteAIGuardrailVersionCommandOutput,
    QConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WisdomService", "DeleteAIGuardrailVersion", {})
  .n("QConnectClient", "DeleteAIGuardrailVersionCommand")
  .sc(DeleteAIGuardrailVersion)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAIGuardrailVersionRequest;
      output: {};
    };
    sdk: {
      input: DeleteAIGuardrailVersionCommandInput;
      output: DeleteAIGuardrailVersionCommandOutput;
    };
  };
}
