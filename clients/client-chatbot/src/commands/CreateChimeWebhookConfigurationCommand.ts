// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ChatbotClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChatbotClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateChimeWebhookConfigurationRequest, CreateChimeWebhookConfigurationResult } from "../models/models_0";
import {
  de_CreateChimeWebhookConfigurationCommand,
  se_CreateChimeWebhookConfigurationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateChimeWebhookConfigurationCommand}.
 */
export interface CreateChimeWebhookConfigurationCommandInput extends CreateChimeWebhookConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link CreateChimeWebhookConfigurationCommand}.
 */
export interface CreateChimeWebhookConfigurationCommandOutput
  extends CreateChimeWebhookConfigurationResult,
    __MetadataBearer {}

/**
 * Creates Chime Webhook Configuration
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChatbotClient, CreateChimeWebhookConfigurationCommand } from "@aws-sdk/client-chatbot"; // ES Modules import
 * // const { ChatbotClient, CreateChimeWebhookConfigurationCommand } = require("@aws-sdk/client-chatbot"); // CommonJS import
 * const client = new ChatbotClient(config);
 * const input = { // CreateChimeWebhookConfigurationRequest
 *   WebhookDescription: "STRING_VALUE", // required
 *   WebhookUrl: "STRING_VALUE", // required
 *   SnsTopicArns: [ // SnsTopicArnList // required
 *     "STRING_VALUE",
 *   ],
 *   IamRoleArn: "STRING_VALUE", // required
 *   ConfigurationName: "STRING_VALUE", // required
 *   LoggingLevel: "STRING_VALUE",
 *   Tags: [ // Tags
 *     { // Tag
 *       TagKey: "STRING_VALUE", // required
 *       TagValue: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateChimeWebhookConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // CreateChimeWebhookConfigurationResult
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
 * @param CreateChimeWebhookConfigurationCommandInput - {@link CreateChimeWebhookConfigurationCommandInput}
 * @returns {@link CreateChimeWebhookConfigurationCommandOutput}
 * @see {@link CreateChimeWebhookConfigurationCommandInput} for command's `input` shape.
 * @see {@link CreateChimeWebhookConfigurationCommandOutput} for command's `response` shape.
 * @see {@link ChatbotClientResolvedConfig | config} for ChatbotClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  There was an issue processing your request.
 *
 * @throws {@link CreateChimeWebhookConfigurationException} (server fault)
 *  We can’t process your request right now because of a server issue. Try again later.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  Your request input doesn't meet the constraints that AWS Chatbot requires.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  Your request input doesn't meet the constraints that AWS Chatbot requires.
 *
 * @throws {@link LimitExceededException} (client fault)
 *  You have exceeded a service limit for AWS Chatbot.
 *
 * @throws {@link ChatbotServiceException}
 * <p>Base exception class for all service exceptions from Chatbot service.</p>
 *
 * @public
 */
export class CreateChimeWebhookConfigurationCommand extends $Command
  .classBuilder<
    CreateChimeWebhookConfigurationCommandInput,
    CreateChimeWebhookConfigurationCommandOutput,
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
  .s("WheatleyOrchestration_20171011", "CreateChimeWebhookConfiguration", {})
  .n("ChatbotClient", "CreateChimeWebhookConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_CreateChimeWebhookConfigurationCommand)
  .de(de_CreateChimeWebhookConfigurationCommand)
  .build() {}
