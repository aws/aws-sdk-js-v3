// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ChatbotClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChatbotClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteSlackChannelConfigurationRequest, DeleteSlackChannelConfigurationResult } from "../models/models_0";
import { DeleteSlackChannelConfiguration } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteSlackChannelConfigurationCommand}.
 */
export interface DeleteSlackChannelConfigurationCommandInput extends DeleteSlackChannelConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteSlackChannelConfigurationCommand}.
 */
export interface DeleteSlackChannelConfigurationCommandOutput
  extends DeleteSlackChannelConfigurationResult,
    __MetadataBearer {}

/**
 * <p>Deletes a Slack channel configuration for AWS Chatbot</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChatbotClient, DeleteSlackChannelConfigurationCommand } from "@aws-sdk/client-chatbot"; // ES Modules import
 * // const { ChatbotClient, DeleteSlackChannelConfigurationCommand } = require("@aws-sdk/client-chatbot"); // CommonJS import
 * // import type { ChatbotClientConfig } from "@aws-sdk/client-chatbot";
 * const config = {}; // type is ChatbotClientConfig
 * const client = new ChatbotClient(config);
 * const input = { // DeleteSlackChannelConfigurationRequest
 *   ChatConfigurationArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteSlackChannelConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteSlackChannelConfigurationCommandInput - {@link DeleteSlackChannelConfigurationCommandInput}
 * @returns {@link DeleteSlackChannelConfigurationCommandOutput}
 * @see {@link DeleteSlackChannelConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteSlackChannelConfigurationCommandOutput} for command's `response` shape.
 * @see {@link ChatbotClientResolvedConfig | config} for ChatbotClient's `config` shape.
 *
 * @throws {@link DeleteSlackChannelConfigurationException} (server fault)
 *  <p>We can’t process your request right now because of a server issue. Try again later.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>Your request input doesn't meet the constraints required by AWS Chatbot.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>Your request input doesn't meet the constraints required by AWS Chatbot.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>We were unable to find the resource for your request</p>
 *
 * @throws {@link ChatbotServiceException}
 * <p>Base exception class for all service exceptions from Chatbot service.</p>
 *
 *
 * @public
 */
export class DeleteSlackChannelConfigurationCommand extends $Command
  .classBuilder<
    DeleteSlackChannelConfigurationCommandInput,
    DeleteSlackChannelConfigurationCommandOutput,
    ChatbotClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ChatbotClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WheatleyOrchestration_20171011", "DeleteSlackChannelConfiguration", {})
  .n("ChatbotClient", "DeleteSlackChannelConfigurationCommand")
  .sc(DeleteSlackChannelConfiguration)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteSlackChannelConfigurationRequest;
      output: {};
    };
    sdk: {
      input: DeleteSlackChannelConfigurationCommandInput;
      output: DeleteSlackChannelConfigurationCommandOutput;
    };
  };
}
