// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteSlackChannelConfigurationRequest, DeleteSlackChannelConfigurationResult } from "../models/models_0";
import { DeleteSlackChannelConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface DeleteSlackChannelConfigurationCommandOutput extends DeleteSlackChannelConfigurationResult, __MetadataBearer {}

/**
 * Deletes a Slack channel configuration for AWS Chatbot
 *
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
 *
 * We can’t process your request right now because of a server issue. Try again later.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * Your request input doesn't meet the constraints required by AWS Chatbot.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * Your request input doesn't meet the constraints required by AWS Chatbot.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * We were unable to find the resource for your request
 *
 * @throws {@link ChatbotServiceException}
 *
 * Base exception class for all service exceptions from Chatbot service.
 *
 * @public
 */
export class DeleteSlackChannelConfigurationCommand extends command<DeleteSlackChannelConfigurationCommandInput, DeleteSlackChannelConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "DeleteSlackChannelConfiguration",
  DeleteSlackChannelConfiguration$
) {
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
