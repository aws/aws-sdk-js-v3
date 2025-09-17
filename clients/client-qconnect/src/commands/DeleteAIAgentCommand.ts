// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteAIAgentRequest, DeleteAIAgentResponse } from "../models/models_0";
import { de_DeleteAIAgentCommand, se_DeleteAIAgentCommand } from "../protocols/Aws_restJson1";
import { QConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QConnectClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Deletes an Amazon Q in Connect AI Agent.</p>
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
export class DeleteAIAgentCommand extends $Command
  .classBuilder<
    DeleteAIAgentCommandInput,
    DeleteAIAgentCommandOutput,
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
  .s("WisdomService", "DeleteAIAgent", {})
  .n("QConnectClient", "DeleteAIAgentCommand")
  .f(void 0, void 0)
  .ser(se_DeleteAIAgentCommand)
  .de(de_DeleteAIAgentCommand)
  .build() {
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
