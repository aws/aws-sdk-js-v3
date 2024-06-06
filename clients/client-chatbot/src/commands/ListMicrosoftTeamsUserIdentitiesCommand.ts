// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ChatbotClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChatbotClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListMicrosoftTeamsUserIdentitiesRequest, ListMicrosoftTeamsUserIdentitiesResult } from "../models/models_0";
import {
  de_ListMicrosoftTeamsUserIdentitiesCommand,
  se_ListMicrosoftTeamsUserIdentitiesCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export interface ListMicrosoftTeamsUserIdentitiesCommandOutput
  extends ListMicrosoftTeamsUserIdentitiesResult,
    __MetadataBearer {}

/**
 * Lists all Microsoft Teams user identities with a mapped role.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChatbotClient, ListMicrosoftTeamsUserIdentitiesCommand } from "@aws-sdk/client-chatbot"; // ES Modules import
 * // const { ChatbotClient, ListMicrosoftTeamsUserIdentitiesCommand } = require("@aws-sdk/client-chatbot"); // CommonJS import
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
 *  Your request input doesn't meet the constraints that AWS Chatbot requires.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  Your request input doesn't meet the constraints that AWS Chatbot requires.
 *
 * @throws {@link ListMicrosoftTeamsUserIdentitiesException} (server fault)
 *  We can’t process your request right now because of a server issue. Try again later.
 *
 * @throws {@link ChatbotServiceException}
 * <p>Base exception class for all service exceptions from Chatbot service.</p>
 *
 * @public
 */
export class ListMicrosoftTeamsUserIdentitiesCommand extends $Command
  .classBuilder<
    ListMicrosoftTeamsUserIdentitiesCommandInput,
    ListMicrosoftTeamsUserIdentitiesCommandOutput,
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
  .s("WheatleyOrchestration_20171011", "ListMicrosoftTeamsUserIdentities", {})
  .n("ChatbotClient", "ListMicrosoftTeamsUserIdentitiesCommand")
  .f(void 0, void 0)
  .ser(se_ListMicrosoftTeamsUserIdentitiesCommand)
  .de(de_ListMicrosoftTeamsUserIdentitiesCommand)
  .build() {}
