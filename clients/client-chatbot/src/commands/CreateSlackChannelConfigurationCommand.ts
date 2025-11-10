// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ChatbotClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChatbotClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateSlackChannelConfigurationRequest, CreateSlackChannelConfigurationResult } from "../models/models_0";
import { CreateSlackChannelConfiguration } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateSlackChannelConfigurationCommand}.
 */
export interface CreateSlackChannelConfigurationCommandInput extends CreateSlackChannelConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link CreateSlackChannelConfigurationCommand}.
 */
export interface CreateSlackChannelConfigurationCommandOutput
  extends CreateSlackChannelConfigurationResult,
    __MetadataBearer {}

/**
 * <p>Creates an AWS Chatbot confugration for Slack.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChatbotClient, CreateSlackChannelConfigurationCommand } from "@aws-sdk/client-chatbot"; // ES Modules import
 * // const { ChatbotClient, CreateSlackChannelConfigurationCommand } = require("@aws-sdk/client-chatbot"); // CommonJS import
 * // import type { ChatbotClientConfig } from "@aws-sdk/client-chatbot";
 * const config = {}; // type is ChatbotClientConfig
 * const client = new ChatbotClient(config);
 * const input = { // CreateSlackChannelConfigurationRequest
 *   SlackTeamId: "STRING_VALUE", // required
 *   SlackChannelId: "STRING_VALUE", // required
 *   SlackChannelName: "STRING_VALUE",
 *   SnsTopicArns: [ // SnsTopicArnList
 *     "STRING_VALUE",
 *   ],
 *   IamRoleArn: "STRING_VALUE", // required
 *   ConfigurationName: "STRING_VALUE", // required
 *   LoggingLevel: "STRING_VALUE",
 *   GuardrailPolicyArns: [ // GuardrailPolicyArnList
 *     "STRING_VALUE",
 *   ],
 *   UserAuthorizationRequired: true || false,
 *   Tags: [ // Tags
 *     { // Tag
 *       TagKey: "STRING_VALUE", // required
 *       TagValue: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateSlackChannelConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // CreateSlackChannelConfigurationResult
 * //   ChannelConfiguration: { // SlackChannelConfiguration
 * //     SlackTeamName: "STRING_VALUE", // required
 * //     SlackTeamId: "STRING_VALUE", // required
 * //     SlackChannelId: "STRING_VALUE", // required
 * //     SlackChannelName: "STRING_VALUE", // required
 * //     ChatConfigurationArn: "STRING_VALUE", // required
 * //     IamRoleArn: "STRING_VALUE", // required
 * //     SnsTopicArns: [ // SnsTopicArnList // required
 * //       "STRING_VALUE",
 * //     ],
 * //     ConfigurationName: "STRING_VALUE",
 * //     LoggingLevel: "STRING_VALUE",
 * //     GuardrailPolicyArns: [ // GuardrailPolicyArnList
 * //       "STRING_VALUE",
 * //     ],
 * //     UserAuthorizationRequired: true || false,
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
 * @param CreateSlackChannelConfigurationCommandInput - {@link CreateSlackChannelConfigurationCommandInput}
 * @returns {@link CreateSlackChannelConfigurationCommandOutput}
 * @see {@link CreateSlackChannelConfigurationCommandInput} for command's `input` shape.
 * @see {@link CreateSlackChannelConfigurationCommandOutput} for command's `response` shape.
 * @see {@link ChatbotClientResolvedConfig | config} for ChatbotClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There was an issue processing your request.</p>
 *
 * @throws {@link CreateSlackChannelConfigurationException} (server fault)
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
export class CreateSlackChannelConfigurationCommand extends $Command
  .classBuilder<
    CreateSlackChannelConfigurationCommandInput,
    CreateSlackChannelConfigurationCommandOutput,
    ChatbotClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ChatbotClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WheatleyOrchestration_20171011", "CreateSlackChannelConfiguration", {})
  .n("ChatbotClient", "CreateSlackChannelConfigurationCommand")
  .sc(CreateSlackChannelConfiguration)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateSlackChannelConfigurationRequest;
      output: CreateSlackChannelConfigurationResult;
    };
    sdk: {
      input: CreateSlackChannelConfigurationCommandInput;
      output: CreateSlackChannelConfigurationCommandOutput;
    };
  };
}
