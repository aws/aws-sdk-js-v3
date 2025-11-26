// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ChatbotClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChatbotClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListCustomActionsRequest, ListCustomActionsResult } from "../models/models_0";
import { ListCustomActions } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListCustomActionsCommand}.
 */
export interface ListCustomActionsCommandInput extends ListCustomActionsRequest {}
/**
 * @public
 *
 * The output of {@link ListCustomActionsCommand}.
 */
export interface ListCustomActionsCommandOutput extends ListCustomActionsResult, __MetadataBearer {}

/**
 * <p>Lists custom actions defined in this account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChatbotClient, ListCustomActionsCommand } from "@aws-sdk/client-chatbot"; // ES Modules import
 * // const { ChatbotClient, ListCustomActionsCommand } = require("@aws-sdk/client-chatbot"); // CommonJS import
 * // import type { ChatbotClientConfig } from "@aws-sdk/client-chatbot";
 * const config = {}; // type is ChatbotClientConfig
 * const client = new ChatbotClient(config);
 * const input = { // ListCustomActionsRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListCustomActionsCommand(input);
 * const response = await client.send(command);
 * // { // ListCustomActionsResult
 * //   CustomActions: [ // CustomActionArnList // required
 * //     "STRING_VALUE",
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListCustomActionsCommandInput - {@link ListCustomActionsCommandInput}
 * @returns {@link ListCustomActionsCommandOutput}
 * @see {@link ListCustomActionsCommandInput} for command's `input` shape.
 * @see {@link ListCustomActionsCommandOutput} for command's `response` shape.
 * @see {@link ChatbotClientResolvedConfig | config} for ChatbotClient's `config` shape.
 *
 * @throws {@link InternalServiceError} (server fault)
 *  <p>Unexpected error during processing of request.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>Your request input doesn't meet the constraints required by AWS Chatbot.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>The request was rejected because it doesn't have valid credentials for the target resource.</p>
 *
 * @throws {@link ChatbotServiceException}
 * <p>Base exception class for all service exceptions from Chatbot service.</p>
 *
 *
 * @example List custom actions
 * ```javascript
 * //
 * const input = { /* empty *\/ };
 * const command = new ListCustomActionsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   CustomActions: [
 *     "arn:aws:chatbot::1234567890:custom-action/my-custom-action"
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListCustomActionsCommand extends $Command
  .classBuilder<
    ListCustomActionsCommandInput,
    ListCustomActionsCommandOutput,
    ChatbotClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ChatbotClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WheatleyOrchestration_20171011", "ListCustomActions", {})
  .n("ChatbotClient", "ListCustomActionsCommand")
  .sc(ListCustomActions)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListCustomActionsRequest;
      output: ListCustomActionsResult;
    };
    sdk: {
      input: ListCustomActionsCommandInput;
      output: ListCustomActionsCommandOutput;
    };
  };
}
