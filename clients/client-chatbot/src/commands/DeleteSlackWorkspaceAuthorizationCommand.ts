// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ChatbotClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChatbotClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteSlackWorkspaceAuthorizationRequest, DeleteSlackWorkspaceAuthorizationResult } from "../models/models_0";
import {
  de_DeleteSlackWorkspaceAuthorizationCommand,
  se_DeleteSlackWorkspaceAuthorizationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteSlackWorkspaceAuthorizationCommand}.
 */
export interface DeleteSlackWorkspaceAuthorizationCommandInput extends DeleteSlackWorkspaceAuthorizationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteSlackWorkspaceAuthorizationCommand}.
 */
export interface DeleteSlackWorkspaceAuthorizationCommandOutput
  extends DeleteSlackWorkspaceAuthorizationResult,
    __MetadataBearer {}

/**
 * <p>Deletes the Slack workspace authorization that allows channels to be configured in that workspace. This requires all configured channels in the workspace to be deleted.
 *   </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChatbotClient, DeleteSlackWorkspaceAuthorizationCommand } from "@aws-sdk/client-chatbot"; // ES Modules import
 * // const { ChatbotClient, DeleteSlackWorkspaceAuthorizationCommand } = require("@aws-sdk/client-chatbot"); // CommonJS import
 * // import type { ChatbotClientConfig } from "@aws-sdk/client-chatbot";
 * const config = {}; // type is ChatbotClientConfig
 * const client = new ChatbotClient(config);
 * const input = { // DeleteSlackWorkspaceAuthorizationRequest
 *   SlackTeamId: "STRING_VALUE", // required
 * };
 * const command = new DeleteSlackWorkspaceAuthorizationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteSlackWorkspaceAuthorizationCommandInput - {@link DeleteSlackWorkspaceAuthorizationCommandInput}
 * @returns {@link DeleteSlackWorkspaceAuthorizationCommandOutput}
 * @see {@link DeleteSlackWorkspaceAuthorizationCommandInput} for command's `input` shape.
 * @see {@link DeleteSlackWorkspaceAuthorizationCommandOutput} for command's `response` shape.
 * @see {@link ChatbotClientResolvedConfig | config} for ChatbotClient's `config` shape.
 *
 * @throws {@link DeleteSlackWorkspaceAuthorizationFault} (server fault)
 *  <p>There was an issue deleting your Slack workspace.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>Your request input doesn't meet the constraints required by AWS Chatbot.</p>
 *
 * @throws {@link ChatbotServiceException}
 * <p>Base exception class for all service exceptions from Chatbot service.</p>
 *
 *
 * @public
 */
export class DeleteSlackWorkspaceAuthorizationCommand extends $Command
  .classBuilder<
    DeleteSlackWorkspaceAuthorizationCommandInput,
    DeleteSlackWorkspaceAuthorizationCommandOutput,
    ChatbotClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ChatbotClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("WheatleyOrchestration_20171011", "DeleteSlackWorkspaceAuthorization", {})
  .n("ChatbotClient", "DeleteSlackWorkspaceAuthorizationCommand")
  .f(void 0, void 0)
  .ser(se_DeleteSlackWorkspaceAuthorizationCommand)
  .de(de_DeleteSlackWorkspaceAuthorizationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteSlackWorkspaceAuthorizationRequest;
      output: {};
    };
    sdk: {
      input: DeleteSlackWorkspaceAuthorizationCommandInput;
      output: DeleteSlackWorkspaceAuthorizationCommandOutput;
    };
  };
}
