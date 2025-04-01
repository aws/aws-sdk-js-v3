// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteAssistantRequest, DeleteAssistantResponse } from "../models/models_0";
import { de_DeleteAssistantCommand, se_DeleteAssistantCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WisdomClientResolvedConfig } from "../WisdomClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteAssistantCommand}.
 */
export interface DeleteAssistantCommandInput extends DeleteAssistantRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAssistantCommand}.
 */
export interface DeleteAssistantCommandOutput extends DeleteAssistantResponse, __MetadataBearer {}

/**
 * <p>Deletes an assistant.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WisdomClient, DeleteAssistantCommand } from "@aws-sdk/client-wisdom"; // ES Modules import
 * // const { WisdomClient, DeleteAssistantCommand } = require("@aws-sdk/client-wisdom"); // CommonJS import
 * const client = new WisdomClient(config);
 * const input = { // DeleteAssistantRequest
 *   assistantId: "STRING_VALUE", // required
 * };
 * const command = new DeleteAssistantCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAssistantCommandInput - {@link DeleteAssistantCommandInput}
 * @returns {@link DeleteAssistantCommandOutput}
 * @see {@link DeleteAssistantCommandInput} for command's `input` shape.
 * @see {@link DeleteAssistantCommandOutput} for command's `response` shape.
 * @see {@link WisdomClientResolvedConfig | config} for WisdomClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by a service.</p>
 *
 * @throws {@link WisdomServiceException}
 * <p>Base exception class for all service exceptions from Wisdom service.</p>
 *
 *
 * @public
 */
export class DeleteAssistantCommand extends $Command
  .classBuilder<
    DeleteAssistantCommandInput,
    DeleteAssistantCommandOutput,
    WisdomClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WisdomClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("WisdomService", "DeleteAssistant", {})
  .n("WisdomClient", "DeleteAssistantCommand")
  .f(void 0, void 0)
  .ser(se_DeleteAssistantCommand)
  .de(de_DeleteAssistantCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAssistantRequest;
      output: {};
    };
    sdk: {
      input: DeleteAssistantCommandInput;
      output: DeleteAssistantCommandOutput;
    };
  };
}
