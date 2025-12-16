// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ChatbotClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChatbotClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type {
  ListMicrosoftTeamsUserIdentitiesRequest,
  ListMicrosoftTeamsUserIdentitiesResult,
} from "../models/models_0";
import { ListMicrosoftTeamsUserIdentities$ } from "../schemas/schemas_0";

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
 * <p>A list all Microsoft Teams user identities with a mapped role.</p>
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
 *  <p>Your request input doesn't meet the constraints required by AWS Chatbot.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>Your request input doesn't meet the constraints required by AWS Chatbot.</p>
 *
 * @throws {@link ListMicrosoftTeamsUserIdentitiesException} (server fault)
 *  <p>We can’t process your request right now because of a server issue. Try again later.</p>
 *
 * @throws {@link ChatbotServiceException}
 * <p>Base exception class for all service exceptions from Chatbot service.</p>
 *
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
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ChatbotClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WheatleyOrchestration_20171011", "ListMicrosoftTeamsUserIdentities", {})
  .n("ChatbotClient", "ListMicrosoftTeamsUserIdentitiesCommand")
  .sc(ListMicrosoftTeamsUserIdentities$)
  .build() {
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
