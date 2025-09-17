// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteAIAgentVersionRequest, DeleteAIAgentVersionResponse } from "../models/models_0";
import { de_DeleteAIAgentVersionCommand, se_DeleteAIAgentVersionCommand } from "../protocols/Aws_restJson1";
import { QConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QConnectClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteAIAgentVersionCommand}.
 */
export interface DeleteAIAgentVersionCommandInput extends DeleteAIAgentVersionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAIAgentVersionCommand}.
 */
export interface DeleteAIAgentVersionCommandOutput extends DeleteAIAgentVersionResponse, __MetadataBearer {}

/**
 * <p>Deletes an Amazon Q in Connect AI Agent Version.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QConnectClient, DeleteAIAgentVersionCommand } from "@aws-sdk/client-qconnect"; // ES Modules import
 * // const { QConnectClient, DeleteAIAgentVersionCommand } = require("@aws-sdk/client-qconnect"); // CommonJS import
 * // import type { QConnectClientConfig } from "@aws-sdk/client-qconnect";
 * const config = {}; // type is QConnectClientConfig
 * const client = new QConnectClient(config);
 * const input = { // DeleteAIAgentVersionRequest
 *   assistantId: "STRING_VALUE", // required
 *   aiAgentId: "STRING_VALUE", // required
 *   versionNumber: Number("long"), // required
 * };
 * const command = new DeleteAIAgentVersionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAIAgentVersionCommandInput - {@link DeleteAIAgentVersionCommandInput}
 * @returns {@link DeleteAIAgentVersionCommandOutput}
 * @see {@link DeleteAIAgentVersionCommandInput} for command's `input` shape.
 * @see {@link DeleteAIAgentVersionCommandOutput} for command's `response` shape.
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
export class DeleteAIAgentVersionCommand extends $Command
  .classBuilder<
    DeleteAIAgentVersionCommandInput,
    DeleteAIAgentVersionCommandOutput,
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
  .s("WisdomService", "DeleteAIAgentVersion", {})
  .n("QConnectClient", "DeleteAIAgentVersionCommand")
  .f(void 0, void 0)
  .ser(se_DeleteAIAgentVersionCommand)
  .de(de_DeleteAIAgentVersionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAIAgentVersionRequest;
      output: {};
    };
    sdk: {
      input: DeleteAIAgentVersionCommandInput;
      output: DeleteAIAgentVersionCommandOutput;
    };
  };
}
