// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ChatbotClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChatbotClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetTeamsChannelConfigurationRequest, GetTeamsChannelConfigurationResult } from "../models/models_0";
import { GetMicrosoftTeamsChannelConfiguration } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetMicrosoftTeamsChannelConfigurationCommand}.
 */
export interface GetMicrosoftTeamsChannelConfigurationCommandInput extends GetTeamsChannelConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link GetMicrosoftTeamsChannelConfigurationCommand}.
 */
export interface GetMicrosoftTeamsChannelConfigurationCommandOutput
  extends GetTeamsChannelConfigurationResult,
    __MetadataBearer {}

/**
 * <p>Returns a Microsoft Teams channel configuration in an AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChatbotClient, GetMicrosoftTeamsChannelConfigurationCommand } from "@aws-sdk/client-chatbot"; // ES Modules import
 * // const { ChatbotClient, GetMicrosoftTeamsChannelConfigurationCommand } = require("@aws-sdk/client-chatbot"); // CommonJS import
 * // import type { ChatbotClientConfig } from "@aws-sdk/client-chatbot";
 * const config = {}; // type is ChatbotClientConfig
 * const client = new ChatbotClient(config);
 * const input = { // GetTeamsChannelConfigurationRequest
 *   ChatConfigurationArn: "STRING_VALUE", // required
 * };
 * const command = new GetMicrosoftTeamsChannelConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetTeamsChannelConfigurationResult
 * //   ChannelConfiguration: { // TeamsChannelConfiguration
 * //     ChannelId: "STRING_VALUE", // required
 * //     ChannelName: "STRING_VALUE",
 * //     TeamId: "STRING_VALUE", // required
 * //     TeamName: "STRING_VALUE",
 * //     TenantId: "STRING_VALUE", // required
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
 * @param GetMicrosoftTeamsChannelConfigurationCommandInput - {@link GetMicrosoftTeamsChannelConfigurationCommandInput}
 * @returns {@link GetMicrosoftTeamsChannelConfigurationCommandOutput}
 * @see {@link GetMicrosoftTeamsChannelConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetMicrosoftTeamsChannelConfigurationCommandOutput} for command's `response` shape.
 * @see {@link ChatbotClientResolvedConfig | config} for ChatbotClient's `config` shape.
 *
 * @throws {@link GetTeamsChannelConfigurationException} (server fault)
 *  <p>We can’t process your request right now because of a server issue. Try again later.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>Your request input doesn't meet the constraints required by AWS Chatbot.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>Your request input doesn't meet the constraints required by AWS Chatbot.</p>
 *
 * @throws {@link ChatbotServiceException}
 * <p>Base exception class for all service exceptions from Chatbot service.</p>
 *
 *
 * @public
 */
export class GetMicrosoftTeamsChannelConfigurationCommand extends $Command
  .classBuilder<
    GetMicrosoftTeamsChannelConfigurationCommandInput,
    GetMicrosoftTeamsChannelConfigurationCommandOutput,
    ChatbotClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ChatbotClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WheatleyOrchestration_20171011", "GetMicrosoftTeamsChannelConfiguration", {})
  .n("ChatbotClient", "GetMicrosoftTeamsChannelConfigurationCommand")
  .sc(GetMicrosoftTeamsChannelConfiguration)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetTeamsChannelConfigurationRequest;
      output: GetTeamsChannelConfigurationResult;
    };
    sdk: {
      input: GetMicrosoftTeamsChannelConfigurationCommandInput;
      output: GetMicrosoftTeamsChannelConfigurationCommandOutput;
    };
  };
}
