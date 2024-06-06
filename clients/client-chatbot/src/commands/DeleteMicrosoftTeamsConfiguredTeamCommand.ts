// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ChatbotClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChatbotClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteTeamsConfiguredTeamRequest, DeleteTeamsConfiguredTeamResult } from "../models/models_0";
import {
  de_DeleteMicrosoftTeamsConfiguredTeamCommand,
  se_DeleteMicrosoftTeamsConfiguredTeamCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteMicrosoftTeamsConfiguredTeamCommand}.
 */
export interface DeleteMicrosoftTeamsConfiguredTeamCommandInput extends DeleteTeamsConfiguredTeamRequest {}
/**
 * @public
 *
 * The output of {@link DeleteMicrosoftTeamsConfiguredTeamCommand}.
 */
export interface DeleteMicrosoftTeamsConfiguredTeamCommandOutput
  extends DeleteTeamsConfiguredTeamResult,
    __MetadataBearer {}

/**
 * Deletes the Microsoft Teams team authorization allowing for channels to be configured in that Microsoft Teams team. Note that the Microsoft Teams team must have no channels configured to remove it.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChatbotClient, DeleteMicrosoftTeamsConfiguredTeamCommand } from "@aws-sdk/client-chatbot"; // ES Modules import
 * // const { ChatbotClient, DeleteMicrosoftTeamsConfiguredTeamCommand } = require("@aws-sdk/client-chatbot"); // CommonJS import
 * const client = new ChatbotClient(config);
 * const input = { // DeleteTeamsConfiguredTeamRequest
 *   TeamId: "STRING_VALUE", // required
 * };
 * const command = new DeleteMicrosoftTeamsConfiguredTeamCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteMicrosoftTeamsConfiguredTeamCommandInput - {@link DeleteMicrosoftTeamsConfiguredTeamCommandInput}
 * @returns {@link DeleteMicrosoftTeamsConfiguredTeamCommandOutput}
 * @see {@link DeleteMicrosoftTeamsConfiguredTeamCommandInput} for command's `input` shape.
 * @see {@link DeleteMicrosoftTeamsConfiguredTeamCommandOutput} for command's `response` shape.
 * @see {@link ChatbotClientResolvedConfig | config} for ChatbotClient's `config` shape.
 *
 * @throws {@link DeleteTeamsConfiguredTeamException} (server fault)
 *  We can’t process your request right now because of a server issue. Try again later.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  Your request input doesn't meet the constraints that AWS Chatbot requires.
 *
 * @throws {@link ChatbotServiceException}
 * <p>Base exception class for all service exceptions from Chatbot service.</p>
 *
 * @public
 */
export class DeleteMicrosoftTeamsConfiguredTeamCommand extends $Command
  .classBuilder<
    DeleteMicrosoftTeamsConfiguredTeamCommandInput,
    DeleteMicrosoftTeamsConfiguredTeamCommandOutput,
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
  .s("WheatleyOrchestration_20171011", "DeleteMicrosoftTeamsConfiguredTeam", {})
  .n("ChatbotClient", "DeleteMicrosoftTeamsConfiguredTeamCommand")
  .f(void 0, void 0)
  .ser(se_DeleteMicrosoftTeamsConfiguredTeamCommand)
  .de(de_DeleteMicrosoftTeamsConfiguredTeamCommand)
  .build() {}
