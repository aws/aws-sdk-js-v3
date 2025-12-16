// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ChatbotClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChatbotClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListTeamsChannelConfigurationsRequest, ListTeamsChannelConfigurationsResult } from "../models/models_0";
import { ListMicrosoftTeamsChannelConfigurations$ } from "../schemas/schemas_0";

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
 * <p>Lists all AWS Chatbot Microsoft Teams channel configurations in an AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChatbotClient, ListMicrosoftTeamsChannelConfigurationsCommand } from "@aws-sdk/client-chatbot"; // ES Modules import
 * // const { ChatbotClient, ListMicrosoftTeamsChannelConfigurationsCommand } = require("@aws-sdk/client-chatbot"); // CommonJS import
 * // import type { ChatbotClientConfig } from "@aws-sdk/client-chatbot";
 * const config = {}; // type is ChatbotClientConfig
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
 * //       State: "STRING_VALUE",
 * //       StateReason: "STRING_VALUE",
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
 *  <p>Your request input doesn't meet the constraints required by AWS Chatbot.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>Your request input doesn't meet the constraints required by AWS Chatbot.</p>
 *
 * @throws {@link ListTeamsChannelConfigurationsException} (server fault)
 *  <p>We can’t process your request right now because of a server issue. Try again later.</p>
 *
 * @throws {@link ChatbotServiceException}
 * <p>Base exception class for all service exceptions from Chatbot service.</p>
 *
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
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ChatbotClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WheatleyOrchestration_20171011", "ListMicrosoftTeamsChannelConfigurations", {})
  .n("ChatbotClient", "ListMicrosoftTeamsChannelConfigurationsCommand")
  .sc(ListMicrosoftTeamsChannelConfigurations$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTeamsChannelConfigurationsRequest;
      output: ListTeamsChannelConfigurationsResult;
    };
    sdk: {
      input: ListMicrosoftTeamsChannelConfigurationsCommandInput;
      output: ListMicrosoftTeamsChannelConfigurationsCommandOutput;
    };
  };
}
