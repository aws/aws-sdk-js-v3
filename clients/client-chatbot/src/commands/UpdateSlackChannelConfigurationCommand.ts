// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ChatbotClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChatbotClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateSlackChannelConfigurationRequest, UpdateSlackChannelConfigurationResult } from "../models/models_0";
import { UpdateSlackChannelConfiguration } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateSlackChannelConfigurationCommand}.
 */
export interface UpdateSlackChannelConfigurationCommandInput extends UpdateSlackChannelConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateSlackChannelConfigurationCommand}.
 */
export interface UpdateSlackChannelConfigurationCommandOutput
  extends UpdateSlackChannelConfigurationResult,
    __MetadataBearer {}

/**
 * <p>Updates a Slack channel configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChatbotClient, UpdateSlackChannelConfigurationCommand } from "@aws-sdk/client-chatbot"; // ES Modules import
 * // const { ChatbotClient, UpdateSlackChannelConfigurationCommand } = require("@aws-sdk/client-chatbot"); // CommonJS import
 * // import type { ChatbotClientConfig } from "@aws-sdk/client-chatbot";
 * const config = {}; // type is ChatbotClientConfig
 * const client = new ChatbotClient(config);
 * const input = { // UpdateSlackChannelConfigurationRequest
 *   ChatConfigurationArn: "STRING_VALUE", // required
 *   SlackChannelId: "STRING_VALUE", // required
 *   SlackChannelName: "STRING_VALUE",
 *   SnsTopicArns: [ // SnsTopicArnList
 *     "STRING_VALUE",
 *   ],
 *   IamRoleArn: "STRING_VALUE",
 *   LoggingLevel: "STRING_VALUE",
 *   GuardrailPolicyArns: [ // GuardrailPolicyArnList
 *     "STRING_VALUE",
 *   ],
 *   UserAuthorizationRequired: true || false,
 * };
 * const command = new UpdateSlackChannelConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateSlackChannelConfigurationResult
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
 * @param UpdateSlackChannelConfigurationCommandInput - {@link UpdateSlackChannelConfigurationCommandInput}
 * @returns {@link UpdateSlackChannelConfigurationCommandOutput}
 * @see {@link UpdateSlackChannelConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateSlackChannelConfigurationCommandOutput} for command's `response` shape.
 * @see {@link ChatbotClientResolvedConfig | config} for ChatbotClient's `config` shape.
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
 * @throws {@link UpdateSlackChannelConfigurationException} (server fault)
 *  <p>We can’t process your request right now because of a server issue. Try again later.</p>
 *
 * @throws {@link ChatbotServiceException}
 * <p>Base exception class for all service exceptions from Chatbot service.</p>
 *
 *
 * @public
 */
export class UpdateSlackChannelConfigurationCommand extends $Command
  .classBuilder<
    UpdateSlackChannelConfigurationCommandInput,
    UpdateSlackChannelConfigurationCommandOutput,
    ChatbotClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ChatbotClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WheatleyOrchestration_20171011", "UpdateSlackChannelConfiguration", {})
  .n("ChatbotClient", "UpdateSlackChannelConfigurationCommand")
  .sc(UpdateSlackChannelConfiguration)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateSlackChannelConfigurationRequest;
      output: UpdateSlackChannelConfigurationResult;
    };
    sdk: {
      input: UpdateSlackChannelConfigurationCommandInput;
      output: UpdateSlackChannelConfigurationCommandOutput;
    };
  };
}
