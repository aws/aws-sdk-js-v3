// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ChatbotClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChatbotClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListMicrosoftTeamsConfiguredTeamsRequest, ListMicrosoftTeamsConfiguredTeamsResult } from "../models/models_0";
import {
  de_ListMicrosoftTeamsConfiguredTeamsCommand,
  se_ListMicrosoftTeamsConfiguredTeamsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListMicrosoftTeamsConfiguredTeamsCommand}.
 */
export interface ListMicrosoftTeamsConfiguredTeamsCommandInput extends ListMicrosoftTeamsConfiguredTeamsRequest {}
/**
 * @public
 *
 * The output of {@link ListMicrosoftTeamsConfiguredTeamsCommand}.
 */
export interface ListMicrosoftTeamsConfiguredTeamsCommandOutput
  extends ListMicrosoftTeamsConfiguredTeamsResult,
    __MetadataBearer {}

/**
 * Lists all authorized MS teams for AWS Account
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChatbotClient, ListMicrosoftTeamsConfiguredTeamsCommand } from "@aws-sdk/client-chatbot"; // ES Modules import
 * // const { ChatbotClient, ListMicrosoftTeamsConfiguredTeamsCommand } = require("@aws-sdk/client-chatbot"); // CommonJS import
 * const client = new ChatbotClient(config);
 * const input = { // ListMicrosoftTeamsConfiguredTeamsRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListMicrosoftTeamsConfiguredTeamsCommand(input);
 * const response = await client.send(command);
 * // { // ListMicrosoftTeamsConfiguredTeamsResult
 * //   ConfiguredTeams: [ // ConfiguredTeamsList
 * //     { // ConfiguredTeam
 * //       TenantId: "STRING_VALUE", // required
 * //       TeamId: "STRING_VALUE", // required
 * //       TeamName: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListMicrosoftTeamsConfiguredTeamsCommandInput - {@link ListMicrosoftTeamsConfiguredTeamsCommandInput}
 * @returns {@link ListMicrosoftTeamsConfiguredTeamsCommandOutput}
 * @see {@link ListMicrosoftTeamsConfiguredTeamsCommandInput} for command's `input` shape.
 * @see {@link ListMicrosoftTeamsConfiguredTeamsCommandOutput} for command's `response` shape.
 * @see {@link ChatbotClientResolvedConfig | config} for ChatbotClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  Your request input doesn't meet the constraints that AWS Chatbot requires.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  Your request input doesn't meet the constraints that AWS Chatbot requires.
 *
 * @throws {@link ListMicrosoftTeamsConfiguredTeamsException} (server fault)
 *  We can’t process your request right now because of a server issue. Try again later.
 *
 * @throws {@link ChatbotServiceException}
 * <p>Base exception class for all service exceptions from Chatbot service.</p>
 *
 * @public
 */
export class ListMicrosoftTeamsConfiguredTeamsCommand extends $Command
  .classBuilder<
    ListMicrosoftTeamsConfiguredTeamsCommandInput,
    ListMicrosoftTeamsConfiguredTeamsCommandOutput,
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
  .s("WheatleyOrchestration_20171011", "ListMicrosoftTeamsConfiguredTeams", {})
  .n("ChatbotClient", "ListMicrosoftTeamsConfiguredTeamsCommand")
  .f(void 0, void 0)
  .ser(se_ListMicrosoftTeamsConfiguredTeamsCommand)
  .de(de_ListMicrosoftTeamsConfiguredTeamsCommand)
  .build() {}
