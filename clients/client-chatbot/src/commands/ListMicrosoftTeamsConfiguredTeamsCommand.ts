// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  ListMicrosoftTeamsConfiguredTeamsRequest,
  ListMicrosoftTeamsConfiguredTeamsResult,
} from "../models/models_0";
import { ListMicrosoftTeamsConfiguredTeams$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface ListMicrosoftTeamsConfiguredTeamsCommandOutput extends ListMicrosoftTeamsConfiguredTeamsResult, __MetadataBearer {}

/**
 * <p>Lists all authorized Microsoft Teams for an AWS Account</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChatbotClient, ListMicrosoftTeamsConfiguredTeamsCommand } from "@aws-sdk/client-chatbot"; // ES Modules import
 * // const { ChatbotClient, ListMicrosoftTeamsConfiguredTeamsCommand } = require("@aws-sdk/client-chatbot"); // CommonJS import
 * // import type { ChatbotClientConfig } from "@aws-sdk/client-chatbot";
 * const config = {}; // type is ChatbotClientConfig
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
 * //       State: "STRING_VALUE",
 * //       StateReason: "STRING_VALUE",
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
 *  <p>Your request input doesn't meet the constraints required by AWS Chatbot.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>Your request input doesn't meet the constraints required by AWS Chatbot.</p>
 *
 * @throws {@link ListMicrosoftTeamsConfiguredTeamsException} (server fault)
 *  <p>We can’t process your request right now because of a server issue. Try again later.</p>
 *
 * @throws {@link ChatbotServiceException}
 * <p>Base exception class for all service exceptions from Chatbot service.</p>
 *
 *
 * @public
 */
export class ListMicrosoftTeamsConfiguredTeamsCommand extends command<ListMicrosoftTeamsConfiguredTeamsCommandInput, ListMicrosoftTeamsConfiguredTeamsCommandOutput>(
  _ep0,
  _mw0,
  "ListMicrosoftTeamsConfiguredTeams",
  ListMicrosoftTeamsConfiguredTeams$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListMicrosoftTeamsConfiguredTeamsRequest;
      output: ListMicrosoftTeamsConfiguredTeamsResult;
    };
    sdk: {
      input: ListMicrosoftTeamsConfiguredTeamsCommandInput;
      output: ListMicrosoftTeamsConfiguredTeamsCommandOutput;
    };
  };
}
