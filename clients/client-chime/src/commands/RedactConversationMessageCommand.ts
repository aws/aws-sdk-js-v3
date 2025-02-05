// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { RedactConversationMessageRequest, RedactConversationMessageResponse } from "../models/models_1";
import { de_RedactConversationMessageCommand, se_RedactConversationMessageCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RedactConversationMessageCommand}.
 */
export interface RedactConversationMessageCommandInput extends RedactConversationMessageRequest {}
/**
 * @public
 *
 * The output of {@link RedactConversationMessageCommand}.
 */
export interface RedactConversationMessageCommandOutput extends RedactConversationMessageResponse, __MetadataBearer {}

/**
 * <p>Redacts the specified message from the specified Amazon Chime conversation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, RedactConversationMessageCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, RedactConversationMessageCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new ChimeClient(config);
 * const input = { // RedactConversationMessageRequest
 *   AccountId: "STRING_VALUE", // required
 *   ConversationId: "STRING_VALUE", // required
 *   MessageId: "STRING_VALUE", // required
 * };
 * const command = new RedactConversationMessageCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param RedactConversationMessageCommandInput - {@link RedactConversationMessageCommandInput}
 * @returns {@link RedactConversationMessageCommandOutput}
 * @see {@link RedactConversationMessageCommandInput} for command's `input` shape.
 * @see {@link RedactConversationMessageCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for ChimeClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The client is permanently forbidden from making the request.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>One or more of the resources in the request does not exist in the system.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The service encountered an unexpected error.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is currently unavailable.</p>
 *
 * @throws {@link ThrottledClientException} (client fault)
 *  <p>The client exceeded its request rate limit.</p>
 *
 * @throws {@link UnauthorizedClientException} (client fault)
 *  <p>The client is not currently authorized to make the request.</p>
 *
 * @throws {@link ChimeServiceException}
 * <p>Base exception class for all service exceptions from Chime service.</p>
 *
 * @public
 */
export class RedactConversationMessageCommand extends $Command
  .classBuilder<
    RedactConversationMessageCommandInput,
    RedactConversationMessageCommandOutput,
    ChimeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ChimeClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("UCBuzzConsoleService", "RedactConversationMessage", {})
  .n("ChimeClient", "RedactConversationMessageCommand")
  .f(void 0, void 0)
  .ser(se_RedactConversationMessageCommand)
  .de(de_RedactConversationMessageCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RedactConversationMessageRequest;
      output: {};
    };
    sdk: {
      input: RedactConversationMessageCommandInput;
      output: RedactConversationMessageCommandOutput;
    };
  };
}
