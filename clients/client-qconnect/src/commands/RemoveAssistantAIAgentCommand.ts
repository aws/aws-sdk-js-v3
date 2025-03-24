// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { RemoveAssistantAIAgentRequest, RemoveAssistantAIAgentResponse } from "../models/models_0";
import { de_RemoveAssistantAIAgentCommand, se_RemoveAssistantAIAgentCommand } from "../protocols/Aws_restJson1";
import { QConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QConnectClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Removes the AI Agent that is set for use by default on an Amazon Q in Connect
 *       Assistant.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QConnectClient, RemoveAssistantAIAgentCommand } from "@aws-sdk/client-qconnect"; // ES Modules import
 * // const { QConnectClient, RemoveAssistantAIAgentCommand } = require("@aws-sdk/client-qconnect"); // CommonJS import
 * const client = new QConnectClient(config);
 * const input = { // RemoveAssistantAIAgentRequest
 *   assistantId: "STRING_VALUE", // required
 *   aiAgentType: "STRING_VALUE", // required
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
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by a service.</p>
 *
 * @throws {@link QConnectServiceException}
 * <p>Base exception class for all service exceptions from QConnect service.</p>
 *
 * @public
 */
export class RemoveAssistantAIAgentCommand extends $Command
  .classBuilder<
    RemoveAssistantAIAgentCommandInput,
    RemoveAssistantAIAgentCommandOutput,
    QConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QConnectClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("WisdomService", "RemoveAssistantAIAgent", {})
  .n("QConnectClient", "RemoveAssistantAIAgentCommand")
  .f(void 0, void 0)
  .ser(se_RemoveAssistantAIAgentCommand)
  .de(de_RemoveAssistantAIAgentCommand)
  .build() {
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
