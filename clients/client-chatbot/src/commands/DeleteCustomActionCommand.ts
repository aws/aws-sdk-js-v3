// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ChatbotClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChatbotClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteCustomActionRequest, DeleteCustomActionResult } from "../models/models_0";
import { DeleteCustomAction } from "../schemas/schemas_3_Custom";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteCustomActionCommand}.
 */
export interface DeleteCustomActionCommandInput extends DeleteCustomActionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteCustomActionCommand}.
 */
export interface DeleteCustomActionCommandOutput extends DeleteCustomActionResult, __MetadataBearer {}

/**
 * <p>Deletes a custom action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChatbotClient, DeleteCustomActionCommand } from "@aws-sdk/client-chatbot"; // ES Modules import
 * // const { ChatbotClient, DeleteCustomActionCommand } = require("@aws-sdk/client-chatbot"); // CommonJS import
 * // import type { ChatbotClientConfig } from "@aws-sdk/client-chatbot";
 * const config = {}; // type is ChatbotClientConfig
 * const client = new ChatbotClient(config);
 * const input = { // DeleteCustomActionRequest
 *   CustomActionArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteCustomActionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteCustomActionCommandInput - {@link DeleteCustomActionCommandInput}
 * @returns {@link DeleteCustomActionCommandOutput}
 * @see {@link DeleteCustomActionCommandInput} for command's `input` shape.
 * @see {@link DeleteCustomActionCommandOutput} for command's `response` shape.
 * @see {@link ChatbotClientResolvedConfig | config} for ChatbotClient's `config` shape.
 *
 * @throws {@link InternalServiceError} (server fault)
 *  <p>Unexpected error during processing of request.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>Your request input doesn't meet the constraints required by AWS Chatbot.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>We were unable to find the resource for your request</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>The request was rejected because it doesn't have valid credentials for the target resource.</p>
 *
 * @throws {@link ChatbotServiceException}
 * <p>Base exception class for all service exceptions from Chatbot service.</p>
 *
 *
 * @example Delete a custom action
 * ```javascript
 * //
 * const input = {
 *   CustomActionArn: "arn:aws:chatbot::1234567890:custom-action/my-custom-action"
 * };
 * const command = new DeleteCustomActionCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* empty *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteCustomActionCommand extends $Command
  .classBuilder<
    DeleteCustomActionCommandInput,
    DeleteCustomActionCommandOutput,
    ChatbotClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ChatbotClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WheatleyOrchestration_20171011", "DeleteCustomAction", {})
  .n("ChatbotClient", "DeleteCustomActionCommand")
  .sc(DeleteCustomAction)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteCustomActionRequest;
      output: {};
    };
    sdk: {
      input: DeleteCustomActionCommandInput;
      output: DeleteCustomActionCommandOutput;
    };
  };
}
