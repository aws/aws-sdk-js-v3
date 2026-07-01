// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateChimeWebhookConfigurationRequest, CreateChimeWebhookConfigurationResult } from "../models/models_0";
import { CreateChimeWebhookConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface CreateChimeWebhookConfigurationCommandOutput extends CreateChimeWebhookConfigurationResult, __MetadataBearer {}

/**
 * <p>Creates an AWS Chatbot configuration for Amazon Chime.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChatbotClient, CreateChimeWebhookConfigurationCommand } from "@aws-sdk/client-chatbot"; // ES Modules import
 * // const { ChatbotClient, CreateChimeWebhookConfigurationCommand } = require("@aws-sdk/client-chatbot"); // CommonJS import
 * // import type { ChatbotClientConfig } from "@aws-sdk/client-chatbot";
 * const config = {}; // type is ChatbotClientConfig
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
 * //     State: "STRING_VALUE",
 * //     StateReason: "STRING_VALUE",
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
 *  <p>There was an issue processing your request.</p>
 *
 * @throws {@link CreateChimeWebhookConfigurationException} (server fault)
 *  <p>We can’t process your request right now because of a server issue. Try again later.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>Your request input doesn't meet the constraints required by AWS Chatbot.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>Your request input doesn't meet the constraints required by AWS Chatbot.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>You have exceeded a service limit for AWS Chatbot.</p>
 *
 * @throws {@link ChatbotServiceException}
 * <p>Base exception class for all service exceptions from Chatbot service.</p>
 *
 *
 * @public
 */
export class CreateChimeWebhookConfigurationCommand extends command<CreateChimeWebhookConfigurationCommandInput, CreateChimeWebhookConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "CreateChimeWebhookConfiguration",
  CreateChimeWebhookConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateChimeWebhookConfigurationRequest;
      output: CreateChimeWebhookConfigurationResult;
    };
    sdk: {
      input: CreateChimeWebhookConfigurationCommandInput;
      output: CreateChimeWebhookConfigurationCommandOutput;
    };
  };
}
