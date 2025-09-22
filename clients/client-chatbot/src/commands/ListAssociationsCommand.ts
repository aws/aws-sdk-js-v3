// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ChatbotClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChatbotClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListAssociationsRequest, ListAssociationsResult } from "../models/models_0";
import { ListAssociations } from "../schemas/schemas_9_List";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAssociationsCommand}.
 */
export interface ListAssociationsCommandInput extends ListAssociationsRequest {}
/**
 * @public
 *
 * The output of {@link ListAssociationsCommand}.
 */
export interface ListAssociationsCommandOutput extends ListAssociationsResult, __MetadataBearer {}

/**
 * <p>Lists resources associated with a channel configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChatbotClient, ListAssociationsCommand } from "@aws-sdk/client-chatbot"; // ES Modules import
 * // const { ChatbotClient, ListAssociationsCommand } = require("@aws-sdk/client-chatbot"); // CommonJS import
 * // import type { ChatbotClientConfig } from "@aws-sdk/client-chatbot";
 * const config = {}; // type is ChatbotClientConfig
 * const client = new ChatbotClient(config);
 * const input = { // ListAssociationsRequest
 *   ChatConfiguration: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // ListAssociationsResult
 * //   Associations: [ // AssociationList // required
 * //     { // AssociationListing
 * //       Resource: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAssociationsCommandInput - {@link ListAssociationsCommandInput}
 * @returns {@link ListAssociationsCommandOutput}
 * @see {@link ListAssociationsCommandInput} for command's `input` shape.
 * @see {@link ListAssociationsCommandOutput} for command's `response` shape.
 * @see {@link ChatbotClientResolvedConfig | config} for ChatbotClient's `config` shape.
 *
 * @throws {@link ChatbotServiceException}
 * <p>Base exception class for all service exceptions from Chatbot service.</p>
 *
 *
 * @example List custom actions associated with a configuration
 * ```javascript
 * //
 * const input = {
 *   ChatConfiguration: "arn:aws:chatbot::1234567890:chat-configuration/slack-channel/my-channel"
 * };
 * const command = new ListAssociationsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Associations: [
 *     {
 *       Resource: "arn:aws:chatbot::1234567890:custom-action/my-custom-action"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListAssociationsCommand extends $Command
  .classBuilder<
    ListAssociationsCommandInput,
    ListAssociationsCommandOutput,
    ChatbotClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ChatbotClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WheatleyOrchestration_20171011", "ListAssociations", {})
  .n("ChatbotClient", "ListAssociationsCommand")
  .sc(ListAssociations)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAssociationsRequest;
      output: ListAssociationsResult;
    };
    sdk: {
      input: ListAssociationsCommandInput;
      output: ListAssociationsCommandOutput;
    };
  };
}
