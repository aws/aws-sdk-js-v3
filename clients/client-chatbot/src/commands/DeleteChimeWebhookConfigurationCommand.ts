// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteChimeWebhookConfigurationRequest, DeleteChimeWebhookConfigurationResult } from "../models/models_0";
import { DeleteChimeWebhookConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface DeleteChimeWebhookConfigurationCommandOutput extends DeleteChimeWebhookConfigurationResult, __MetadataBearer {}

/**
 * Deletes a Amazon Chime webhook configuration for AWS Chatbot.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChatbotClient, DeleteChimeWebhookConfigurationCommand } from "@aws-sdk/client-chatbot"; // ES Modules import
 * // const { ChatbotClient, DeleteChimeWebhookConfigurationCommand } = require("@aws-sdk/client-chatbot"); // CommonJS import
 * // import type { ChatbotClientConfig } from "@aws-sdk/client-chatbot";
 * const config = {}; // type is ChatbotClientConfig
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
export class DeleteChimeWebhookConfigurationCommand extends command<DeleteChimeWebhookConfigurationCommandInput, DeleteChimeWebhookConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "DeleteChimeWebhookConfiguration",
  DeleteChimeWebhookConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteChimeWebhookConfigurationRequest;
      output: {};
    };
    sdk: {
      input: DeleteChimeWebhookConfigurationCommandInput;
      output: DeleteChimeWebhookConfigurationCommandOutput;
    };
  };
}
