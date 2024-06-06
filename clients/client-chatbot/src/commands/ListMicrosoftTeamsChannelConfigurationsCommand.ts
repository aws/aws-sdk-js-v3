// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ChatbotClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChatbotClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListTeamsChannelConfigurationsRequest, ListTeamsChannelConfigurationsResult } from "../models/models_0";
import {
  de_ListMicrosoftTeamsChannelConfigurationsCommand,
  se_ListMicrosoftTeamsChannelConfigurationsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListMicrosoftTeamsChannelConfigurationsCommand}.
 */
export interface ListMicrosoftTeamsChannelConfigurationsCommandInput extends ListTeamsChannelConfigurationsRequest {}
/**
 * @public
 *
 * The output of {@link ListMicrosoftTeamsChannelConfigurationsCommand}.
 */
export interface ListMicrosoftTeamsChannelConfigurationsCommandOutput
  extends ListTeamsChannelConfigurationsResult,
    __MetadataBearer {}

/**
 * Lists MS Teams Channel Configurations optionally filtered by TeamId
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChatbotClient, ListMicrosoftTeamsChannelConfigurationsCommand } from "@aws-sdk/client-chatbot"; // ES Modules import
 * // const { ChatbotClient, ListMicrosoftTeamsChannelConfigurationsCommand } = require("@aws-sdk/client-chatbot"); // CommonJS import
 * const client = new ChatbotClient(config);
 * const input = { // ListTeamsChannelConfigurationsRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   TeamId: "STRING_VALUE",
 * };
 * const command = new ListMicrosoftTeamsChannelConfigurationsCommand(input);
 * const response = await client.send(command);
 * // { // ListTeamsChannelConfigurationsResult
 * //   NextToken: "STRING_VALUE",
 * //   TeamChannelConfigurations: [ // TeamChannelConfigurationsList
 * //     { // TeamsChannelConfiguration
 * //       ChannelId: "STRING_VALUE", // required
 * //       ChannelName: "STRING_VALUE",
 * //       TeamId: "STRING_VALUE", // required
 * //       TeamName: "STRING_VALUE",
 * //       TenantId: "STRING_VALUE", // required
 * //       ChatConfigurationArn: "STRING_VALUE", // required
 * //       IamRoleArn: "STRING_VALUE", // required
 * //       SnsTopicArns: [ // SnsTopicArnList // required
 * //         "STRING_VALUE",
 * //       ],
 * //       ConfigurationName: "STRING_VALUE",
 * //       LoggingLevel: "STRING_VALUE",
 * //       GuardrailPolicyArns: [ // GuardrailPolicyArnList
 * //         "STRING_VALUE",
 * //       ],
 * //       UserAuthorizationRequired: true || false,
 * //       Tags: [ // Tags
 * //         { // Tag
 * //           TagKey: "STRING_VALUE", // required
 * //           TagValue: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListMicrosoftTeamsChannelConfigurationsCommandInput - {@link ListMicrosoftTeamsChannelConfigurationsCommandInput}
 * @returns {@link ListMicrosoftTeamsChannelConfigurationsCommandOutput}
 * @see {@link ListMicrosoftTeamsChannelConfigurationsCommandInput} for command's `input` shape.
 * @see {@link ListMicrosoftTeamsChannelConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link ChatbotClientResolvedConfig | config} for ChatbotClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  Your request input doesn't meet the constraints that AWS Chatbot requires.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  Your request input doesn't meet the constraints that AWS Chatbot requires.
 *
 * @throws {@link ListTeamsChannelConfigurationsException} (server fault)
 *  We can’t process your request right now because of a server issue. Try again later.
 *
 * @throws {@link ChatbotServiceException}
 * <p>Base exception class for all service exceptions from Chatbot service.</p>
 *
 * @public
 */
export class ListMicrosoftTeamsChannelConfigurationsCommand extends $Command
  .classBuilder<
    ListMicrosoftTeamsChannelConfigurationsCommandInput,
    ListMicrosoftTeamsChannelConfigurationsCommandOutput,
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
  .s("WheatleyOrchestration_20171011", "ListMicrosoftTeamsChannelConfigurations", {})
  .n("ChatbotClient", "ListMicrosoftTeamsChannelConfigurationsCommand")
  .f(void 0, void 0)
  .ser(se_ListMicrosoftTeamsChannelConfigurationsCommand)
  .de(de_ListMicrosoftTeamsChannelConfigurationsCommand)
  .build() {}
