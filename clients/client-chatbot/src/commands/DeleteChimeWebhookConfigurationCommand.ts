// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ChatbotClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChatbotClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteChimeWebhookConfigurationRequest, DeleteChimeWebhookConfigurationResult } from "../models/models_0";
import {
  de_DeleteChimeWebhookConfigurationCommand,
  se_DeleteChimeWebhookConfigurationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteChimeWebhookConfigurationCommand}.
 */
export interface DeleteChimeWebhookConfigurationCommandInput extends DeleteChimeWebhookConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteChimeWebhookConfigurationCommand}.
 */
export interface DeleteChimeWebhookConfigurationCommandOutput
  extends DeleteChimeWebhookConfigurationResult,
    __MetadataBearer {}

/**
 * Deletes a Chime Webhook Configuration
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChatbotClient, DeleteChimeWebhookConfigurationCommand } from "@aws-sdk/client-chatbot"; // ES Modules import
 * // const { ChatbotClient, DeleteChimeWebhookConfigurationCommand } = require("@aws-sdk/client-chatbot"); // CommonJS import
 * const client = new ChatbotClient(config);
 * const input = { // DeleteChimeWebhookConfigurationRequest
 *   ChatConfigurationArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteChimeWebhookConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteChimeWebhookConfigurationCommandInput - {@link DeleteChimeWebhookConfigurationCommandInput}
 * @returns {@link DeleteChimeWebhookConfigurationCommandOutput}
 * @see {@link DeleteChimeWebhookConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteChimeWebhookConfigurationCommandOutput} for command's `response` shape.
 * @see {@link ChatbotClientResolvedConfig | config} for ChatbotClient's `config` shape.
 *
 * @throws {@link DeleteChimeWebhookConfigurationException} (server fault)
 *  We can’t process your request right now because of a server issue. Try again later.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  Your request input doesn't meet the constraints that AWS Chatbot requires.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  Your request input doesn't meet the constraints that AWS Chatbot requires.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  We were not able to find the resource for your request.
 *
 * @throws {@link ChatbotServiceException}
 * <p>Base exception class for all service exceptions from Chatbot service.</p>
 *
 * @public
 */
export class DeleteChimeWebhookConfigurationCommand extends $Command
  .classBuilder<
    DeleteChimeWebhookConfigurationCommandInput,
    DeleteChimeWebhookConfigurationCommandOutput,
    ChatbotClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ChatbotClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("WheatleyOrchestration_20171011", "DeleteChimeWebhookConfiguration", {})
  .n("ChatbotClient", "DeleteChimeWebhookConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_DeleteChimeWebhookConfigurationCommand)
  .de(de_DeleteChimeWebhookConfigurationCommand)
  .build() {}
