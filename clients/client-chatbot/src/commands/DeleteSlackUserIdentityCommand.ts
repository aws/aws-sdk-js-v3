// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ChatbotClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChatbotClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteSlackUserIdentityRequest, DeleteSlackUserIdentityResult } from "../models/models_0";
import { de_DeleteSlackUserIdentityCommand, se_DeleteSlackUserIdentityCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteSlackUserIdentityCommand}.
 */
export interface DeleteSlackUserIdentityCommandInput extends DeleteSlackUserIdentityRequest {}
/**
 * @public
 *
 * The output of {@link DeleteSlackUserIdentityCommand}.
 */
export interface DeleteSlackUserIdentityCommandOutput extends DeleteSlackUserIdentityResult, __MetadataBearer {}

/**
 * Deletes a Slack user identity
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChatbotClient, DeleteSlackUserIdentityCommand } from "@aws-sdk/client-chatbot"; // ES Modules import
 * // const { ChatbotClient, DeleteSlackUserIdentityCommand } = require("@aws-sdk/client-chatbot"); // CommonJS import
 * const client = new ChatbotClient(config);
 * const input = { // DeleteSlackUserIdentityRequest
 *   ChatConfigurationArn: "STRING_VALUE", // required
 *   SlackTeamId: "STRING_VALUE", // required
 *   SlackUserId: "STRING_VALUE", // required
 * };
 * const command = new DeleteSlackUserIdentityCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteSlackUserIdentityCommandInput - {@link DeleteSlackUserIdentityCommandInput}
 * @returns {@link DeleteSlackUserIdentityCommandOutput}
 * @see {@link DeleteSlackUserIdentityCommandInput} for command's `input` shape.
 * @see {@link DeleteSlackUserIdentityCommandOutput} for command's `response` shape.
 * @see {@link ChatbotClientResolvedConfig | config} for ChatbotClient's `config` shape.
 *
 * @throws {@link DeleteSlackUserIdentityException} (server fault)
 *  We can’t process your request right now because of a server issue. Try again later.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  Your request input doesn't meet the constraints that AWS Chatbot requires.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  We were not able to find the resource for your request.
 *
 * @throws {@link ChatbotServiceException}
 * <p>Base exception class for all service exceptions from Chatbot service.</p>
 *
 * @public
 */
export class DeleteSlackUserIdentityCommand extends $Command
  .classBuilder<
    DeleteSlackUserIdentityCommandInput,
    DeleteSlackUserIdentityCommandOutput,
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
  .s("WheatleyOrchestration_20171011", "DeleteSlackUserIdentity", {})
  .n("ChatbotClient", "DeleteSlackUserIdentityCommand")
  .f(void 0, void 0)
  .ser(se_DeleteSlackUserIdentityCommand)
  .de(de_DeleteSlackUserIdentityCommand)
  .build() {}
