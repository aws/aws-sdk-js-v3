// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ChatbotClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChatbotClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateTeamsChannelConfigurationRequest, UpdateTeamsChannelConfigurationResult } from "../models/models_0";
import {
  de_UpdateMicrosoftTeamsChannelConfigurationCommand,
  se_UpdateMicrosoftTeamsChannelConfigurationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateMicrosoftTeamsChannelConfigurationCommand}.
 */
export interface UpdateMicrosoftTeamsChannelConfigurationCommandInput extends UpdateTeamsChannelConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateMicrosoftTeamsChannelConfigurationCommand}.
 */
export interface UpdateMicrosoftTeamsChannelConfigurationCommandOutput
  extends UpdateTeamsChannelConfigurationResult,
    __MetadataBearer {}

/**
 * Updates MS Teams Channel Configuration
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChatbotClient, UpdateMicrosoftTeamsChannelConfigurationCommand } from "@aws-sdk/client-chatbot"; // ES Modules import
 * // const { ChatbotClient, UpdateMicrosoftTeamsChannelConfigurationCommand } = require("@aws-sdk/client-chatbot"); // CommonJS import
 * const client = new ChatbotClient(config);
 * const input = { // UpdateTeamsChannelConfigurationRequest
 *   ChatConfigurationArn: "STRING_VALUE", // required
 *   ChannelId: "STRING_VALUE", // required
 *   ChannelName: "STRING_VALUE",
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
 * const command = new UpdateMicrosoftTeamsChannelConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateTeamsChannelConfigurationResult
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
 * @param UpdateMicrosoftTeamsChannelConfigurationCommandInput - {@link UpdateMicrosoftTeamsChannelConfigurationCommandInput}
 * @returns {@link UpdateMicrosoftTeamsChannelConfigurationCommandOutput}
 * @see {@link UpdateMicrosoftTeamsChannelConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateMicrosoftTeamsChannelConfigurationCommandOutput} for command's `response` shape.
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
 * @throws {@link UpdateTeamsChannelConfigurationException} (server fault)
 *  We can’t process your request right now because of a server issue. Try again later.
 *
 * @throws {@link ChatbotServiceException}
 * <p>Base exception class for all service exceptions from Chatbot service.</p>
 *
 * @public
 */
export class UpdateMicrosoftTeamsChannelConfigurationCommand extends $Command
  .classBuilder<
    UpdateMicrosoftTeamsChannelConfigurationCommandInput,
    UpdateMicrosoftTeamsChannelConfigurationCommandOutput,
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
  .s("WheatleyOrchestration_20171011", "UpdateMicrosoftTeamsChannelConfiguration", {})
  .n("ChatbotClient", "UpdateMicrosoftTeamsChannelConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_UpdateMicrosoftTeamsChannelConfigurationCommand)
  .de(de_UpdateMicrosoftTeamsChannelConfigurationCommand)
  .build() {}
