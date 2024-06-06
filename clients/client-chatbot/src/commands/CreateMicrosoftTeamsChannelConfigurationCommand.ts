// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ChatbotClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChatbotClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateTeamsChannelConfigurationRequest, CreateTeamsChannelConfigurationResult } from "../models/models_0";
import {
  de_CreateMicrosoftTeamsChannelConfigurationCommand,
  se_CreateMicrosoftTeamsChannelConfigurationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateMicrosoftTeamsChannelConfigurationCommand}.
 */
export interface CreateMicrosoftTeamsChannelConfigurationCommandInput extends CreateTeamsChannelConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link CreateMicrosoftTeamsChannelConfigurationCommand}.
 */
export interface CreateMicrosoftTeamsChannelConfigurationCommandOutput
  extends CreateTeamsChannelConfigurationResult,
    __MetadataBearer {}

/**
 * Creates MS Teams Channel Configuration
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChatbotClient, CreateMicrosoftTeamsChannelConfigurationCommand } from "@aws-sdk/client-chatbot"; // ES Modules import
 * // const { ChatbotClient, CreateMicrosoftTeamsChannelConfigurationCommand } = require("@aws-sdk/client-chatbot"); // CommonJS import
 * const client = new ChatbotClient(config);
 * const input = { // CreateTeamsChannelConfigurationRequest
 *   ChannelId: "STRING_VALUE", // required
 *   ChannelName: "STRING_VALUE",
 *   TeamId: "STRING_VALUE", // required
 *   TeamName: "STRING_VALUE",
 *   TenantId: "STRING_VALUE", // required
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
 * const command = new CreateMicrosoftTeamsChannelConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // CreateTeamsChannelConfigurationResult
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
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateMicrosoftTeamsChannelConfigurationCommandInput - {@link CreateMicrosoftTeamsChannelConfigurationCommandInput}
 * @returns {@link CreateMicrosoftTeamsChannelConfigurationCommandOutput}
 * @see {@link CreateMicrosoftTeamsChannelConfigurationCommandInput} for command's `input` shape.
 * @see {@link CreateMicrosoftTeamsChannelConfigurationCommandOutput} for command's `response` shape.
 * @see {@link ChatbotClientResolvedConfig | config} for ChatbotClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  There was an issue processing your request.
 *
 * @throws {@link CreateTeamsChannelConfigurationException} (server fault)
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
export class CreateMicrosoftTeamsChannelConfigurationCommand extends $Command
  .classBuilder<
    CreateMicrosoftTeamsChannelConfigurationCommandInput,
    CreateMicrosoftTeamsChannelConfigurationCommandOutput,
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
  .s("WheatleyOrchestration_20171011", "CreateMicrosoftTeamsChannelConfiguration", {})
  .n("ChatbotClient", "CreateMicrosoftTeamsChannelConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_CreateMicrosoftTeamsChannelConfigurationCommand)
  .de(de_CreateMicrosoftTeamsChannelConfigurationCommand)
  .build() {}
