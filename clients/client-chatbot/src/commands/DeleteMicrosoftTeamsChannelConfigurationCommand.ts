// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ChatbotClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChatbotClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteTeamsChannelConfigurationRequest, DeleteTeamsChannelConfigurationResult } from "../models/models_0";
import {
  de_DeleteMicrosoftTeamsChannelConfigurationCommand,
  se_DeleteMicrosoftTeamsChannelConfigurationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteMicrosoftTeamsChannelConfigurationCommand}.
 */
export interface DeleteMicrosoftTeamsChannelConfigurationCommandInput extends DeleteTeamsChannelConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteMicrosoftTeamsChannelConfigurationCommand}.
 */
export interface DeleteMicrosoftTeamsChannelConfigurationCommandOutput
  extends DeleteTeamsChannelConfigurationResult,
    __MetadataBearer {}

/**
 * <p>Deletes a Microsoft Teams channel configuration for AWS Chatbot</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChatbotClient, DeleteMicrosoftTeamsChannelConfigurationCommand } from "@aws-sdk/client-chatbot"; // ES Modules import
 * // const { ChatbotClient, DeleteMicrosoftTeamsChannelConfigurationCommand } = require("@aws-sdk/client-chatbot"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new ChatbotClient(config);
 * const input = { // DeleteTeamsChannelConfigurationRequest
 *   ChatConfigurationArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteMicrosoftTeamsChannelConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteMicrosoftTeamsChannelConfigurationCommandInput - {@link DeleteMicrosoftTeamsChannelConfigurationCommandInput}
 * @returns {@link DeleteMicrosoftTeamsChannelConfigurationCommandOutput}
 * @see {@link DeleteMicrosoftTeamsChannelConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteMicrosoftTeamsChannelConfigurationCommandOutput} for command's `response` shape.
 * @see {@link ChatbotClientResolvedConfig | config} for ChatbotClient's `config` shape.
 *
 * @throws {@link DeleteTeamsChannelConfigurationException} (server fault)
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
 * @public
 */
export class DeleteMicrosoftTeamsChannelConfigurationCommand extends $Command
  .classBuilder<
    DeleteMicrosoftTeamsChannelConfigurationCommandInput,
    DeleteMicrosoftTeamsChannelConfigurationCommandOutput,
    ChatbotClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ChatbotClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("WheatleyOrchestration_20171011", "DeleteMicrosoftTeamsChannelConfiguration", {})
  .n("ChatbotClient", "DeleteMicrosoftTeamsChannelConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_DeleteMicrosoftTeamsChannelConfigurationCommand)
  .de(de_DeleteMicrosoftTeamsChannelConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteTeamsChannelConfigurationRequest;
      output: {};
    };
    sdk: {
      input: DeleteMicrosoftTeamsChannelConfigurationCommandInput;
      output: DeleteMicrosoftTeamsChannelConfigurationCommandOutput;
    };
  };
}
