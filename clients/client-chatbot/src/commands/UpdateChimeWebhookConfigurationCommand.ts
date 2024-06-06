// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ChatbotClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChatbotClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateChimeWebhookConfigurationRequest, UpdateChimeWebhookConfigurationResult } from "../models/models_0";
import {
  de_UpdateChimeWebhookConfigurationCommand,
  se_UpdateChimeWebhookConfigurationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateChimeWebhookConfigurationCommand}.
 */
export interface UpdateChimeWebhookConfigurationCommandInput extends UpdateChimeWebhookConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateChimeWebhookConfigurationCommand}.
 */
export interface UpdateChimeWebhookConfigurationCommandOutput
  extends UpdateChimeWebhookConfigurationResult,
    __MetadataBearer {}

/**
 * Updates a Chime Webhook Configuration
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChatbotClient, UpdateChimeWebhookConfigurationCommand } from "@aws-sdk/client-chatbot"; // ES Modules import
 * // const { ChatbotClient, UpdateChimeWebhookConfigurationCommand } = require("@aws-sdk/client-chatbot"); // CommonJS import
 * const client = new ChatbotClient(config);
 * const input = { // UpdateChimeWebhookConfigurationRequest
 *   ChatConfigurationArn: "STRING_VALUE", // required
 *   WebhookDescription: "STRING_VALUE",
 *   WebhookUrl: "STRING_VALUE",
 *   SnsTopicArns: [ // SnsTopicArnList
 *     "STRING_VALUE",
 *   ],
 *   IamRoleArn: "STRING_VALUE",
 *   LoggingLevel: "STRING_VALUE",
 * };
 * const command = new UpdateChimeWebhookConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateChimeWebhookConfigurationResult
 * //   WebhookConfiguration: { // ChimeWebhookConfiguration
 * //     WebhookDescription: "STRING_VALUE", // required
 * //     ChatConfigurationArn: "STRING_VALUE", // required
 * //     IamRoleArn: "STRING_VALUE", // required
 * //     SnsTopicArns: [ // SnsTopicArnList // required
 * //       "STRING_VALUE",
 * //     ],
 * //     ConfigurationName: "STRING_VALUE",
 * //     LoggingLevel: "STRING_VALUE",
 * //     Tags: [ // Tags
 * //       { // Tag
 * //         TagKey: "STRING_VALUE", // required
 * //         TagValue: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateChimeWebhookConfigurationCommandInput - {@link UpdateChimeWebhookConfigurationCommandInput}
 * @returns {@link UpdateChimeWebhookConfigurationCommandOutput}
 * @see {@link UpdateChimeWebhookConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateChimeWebhookConfigurationCommandOutput} for command's `response` shape.
 * @see {@link ChatbotClientResolvedConfig | config} for ChatbotClient's `config` shape.
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
 * @throws {@link UpdateChimeWebhookConfigurationException} (server fault)
 *  We can’t process your request right now because of a server issue. Try again later.
 *
 * @throws {@link ChatbotServiceException}
 * <p>Base exception class for all service exceptions from Chatbot service.</p>
 *
 * @public
 */
export class UpdateChimeWebhookConfigurationCommand extends $Command
  .classBuilder<
    UpdateChimeWebhookConfigurationCommandInput,
    UpdateChimeWebhookConfigurationCommandOutput,
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
  .s("WheatleyOrchestration_20171011", "UpdateChimeWebhookConfiguration", {})
  .n("ChatbotClient", "UpdateChimeWebhookConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_UpdateChimeWebhookConfigurationCommand)
  .de(de_UpdateChimeWebhookConfigurationCommand)
  .build() {}
