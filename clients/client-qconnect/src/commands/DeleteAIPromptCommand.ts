// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteAIPromptRequest, DeleteAIPromptResponse } from "../models/models_0";
import { QConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QConnectClient";
import { DeleteAIPrompt } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteAIPromptCommand}.
 */
export interface DeleteAIPromptCommandInput extends DeleteAIPromptRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAIPromptCommand}.
 */
export interface DeleteAIPromptCommandOutput extends DeleteAIPromptResponse, __MetadataBearer {}

/**
 * <p>Deletes an Amazon Q in Connect AI Prompt.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QConnectClient, DeleteAIPromptCommand } from "@aws-sdk/client-qconnect"; // ES Modules import
 * // const { QConnectClient, DeleteAIPromptCommand } = require("@aws-sdk/client-qconnect"); // CommonJS import
 * // import type { QConnectClientConfig } from "@aws-sdk/client-qconnect";
 * const config = {}; // type is QConnectClientConfig
 * const client = new QConnectClient(config);
 * const input = { // DeleteAIPromptRequest
 *   assistantId: "STRING_VALUE", // required
 *   aiPromptId: "STRING_VALUE", // required
 * };
 * const command = new DeleteAIPromptCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAIPromptCommandInput - {@link DeleteAIPromptCommandInput}
 * @returns {@link DeleteAIPromptCommandOutput}
 * @see {@link DeleteAIPromptCommandInput} for command's `input` shape.
 * @see {@link DeleteAIPromptCommandOutput} for command's `response` shape.
 * @see {@link QConnectClientResolvedConfig | config} for QConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
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
export class DeleteAIPromptCommand extends $Command
  .classBuilder<
    DeleteAIPromptCommandInput,
    DeleteAIPromptCommandOutput,
    QConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WisdomService", "DeleteAIPrompt", {})
  .n("QConnectClient", "DeleteAIPromptCommand")
  .sc(DeleteAIPrompt)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAIPromptRequest;
      output: {};
    };
    sdk: {
      input: DeleteAIPromptCommandInput;
      output: DeleteAIPromptCommandOutput;
    };
  };
}
