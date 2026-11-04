// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  ListMicrosoftTeamsUserIdentitiesRequest,
  ListMicrosoftTeamsUserIdentitiesResult,
} from "../models/models_0";
import { ListMicrosoftTeamsUserIdentities$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListMicrosoftTeamsUserIdentitiesCommand}.
 */
export interface ListMicrosoftTeamsUserIdentitiesCommandInput extends ListMicrosoftTeamsUserIdentitiesRequest {}
/**
 * @public
 *
 * The output of {@link ListMicrosoftTeamsUserIdentitiesCommand}.
 */
export interface ListMicrosoftTeamsUserIdentitiesCommandOutput extends ListMicrosoftTeamsUserIdentitiesResult, __MetadataBearer {}

/**
 * A list all Microsoft Teams user identities with a mapped role.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChatbotClient, ListMicrosoftTeamsUserIdentitiesCommand } from "@aws-sdk/client-chatbot"; // ES Modules import
 * // const { ChatbotClient, ListMicrosoftTeamsUserIdentitiesCommand } = require("@aws-sdk/client-chatbot"); // CommonJS import
 * // import type { ChatbotClientConfig } from "@aws-sdk/client-chatbot";
 * const config = {}; // type is ChatbotClientConfig
 * const client = new ChatbotClient(config);
 * const input = { // ListMicrosoftTeamsUserIdentitiesRequest
 *   ChatConfigurationArn: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListMicrosoftTeamsUserIdentitiesCommand(input);
 * const response = await client.send(command);
 * // { // ListMicrosoftTeamsUserIdentitiesResult
 * //   TeamsUserIdentities: [ // TeamsUserIdentitiesList
 * //     { // TeamsUserIdentity
 * //       IamRoleArn: "STRING_VALUE", // required
 * //       ChatConfigurationArn: "STRING_VALUE", // required
 * //       TeamId: "STRING_VALUE", // required
 * //       UserId: "STRING_VALUE",
 * //       AwsUserIdentity: "STRING_VALUE",
 * //       TeamsChannelId: "STRING_VALUE",
 * //       TeamsTenantId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListMicrosoftTeamsUserIdentitiesCommandInput - {@link ListMicrosoftTeamsUserIdentitiesCommandInput}
 * @returns {@link ListMicrosoftTeamsUserIdentitiesCommandOutput}
 * @see {@link ListMicrosoftTeamsUserIdentitiesCommandInput} for command's `input` shape.
 * @see {@link ListMicrosoftTeamsUserIdentitiesCommandOutput} for command's `response` shape.
 * @see {@link ChatbotClientResolvedConfig | config} for ChatbotClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * Your request input doesn't meet the constraints required by AWS Chatbot.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * Your request input doesn't meet the constraints required by AWS Chatbot.
 *
 * @throws {@link ListMicrosoftTeamsUserIdentitiesException} (server fault)
 *
 * We can’t process your request right now because of a server issue. Try again later.
 *
 * @throws {@link ChatbotServiceException}
 *
 * Base exception class for all service exceptions from Chatbot service.
 *
 * @public
 */
export class ListMicrosoftTeamsUserIdentitiesCommand extends command<ListMicrosoftTeamsUserIdentitiesCommandInput, ListMicrosoftTeamsUserIdentitiesCommandOutput>(
  _ep0,
  _mw0,
  "ListMicrosoftTeamsUserIdentities",
  ListMicrosoftTeamsUserIdentities$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListMicrosoftTeamsUserIdentitiesRequest;
      output: ListMicrosoftTeamsUserIdentitiesResult;
    };
    sdk: {
      input: ListMicrosoftTeamsUserIdentitiesCommandInput;
      output: ListMicrosoftTeamsUserIdentitiesCommandOutput;
    };
  };
}
