// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ChatbotClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChatbotClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type {
  DeleteMicrosoftTeamsUserIdentityRequest,
  DeleteMicrosoftTeamsUserIdentityResult,
} from "../models/models_0";
import { DeleteMicrosoftTeamsUserIdentity$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteMicrosoftTeamsUserIdentityCommand}.
 */
export interface DeleteMicrosoftTeamsUserIdentityCommandInput extends DeleteMicrosoftTeamsUserIdentityRequest {}
/**
 * @public
 *
 * The output of {@link DeleteMicrosoftTeamsUserIdentityCommand}.
 */
export interface DeleteMicrosoftTeamsUserIdentityCommandOutput
  extends DeleteMicrosoftTeamsUserIdentityResult,
    __MetadataBearer {}

/**
 * <p>Identifes a user level permission for a channel configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChatbotClient, DeleteMicrosoftTeamsUserIdentityCommand } from "@aws-sdk/client-chatbot"; // ES Modules import
 * // const { ChatbotClient, DeleteMicrosoftTeamsUserIdentityCommand } = require("@aws-sdk/client-chatbot"); // CommonJS import
 * // import type { ChatbotClientConfig } from "@aws-sdk/client-chatbot";
 * const config = {}; // type is ChatbotClientConfig
 * const client = new ChatbotClient(config);
 * const input = { // DeleteMicrosoftTeamsUserIdentityRequest
 *   ChatConfigurationArn: "STRING_VALUE", // required
 *   UserId: "STRING_VALUE", // required
 * };
 * const command = new DeleteMicrosoftTeamsUserIdentityCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteMicrosoftTeamsUserIdentityCommandInput - {@link DeleteMicrosoftTeamsUserIdentityCommandInput}
 * @returns {@link DeleteMicrosoftTeamsUserIdentityCommandOutput}
 * @see {@link DeleteMicrosoftTeamsUserIdentityCommandInput} for command's `input` shape.
 * @see {@link DeleteMicrosoftTeamsUserIdentityCommandOutput} for command's `response` shape.
 * @see {@link ChatbotClientResolvedConfig | config} for ChatbotClient's `config` shape.
 *
 * @throws {@link DeleteMicrosoftTeamsUserIdentityException} (server fault)
 *  <p>We can’t process your request right now because of a server issue. Try again later.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>Your request input doesn't meet the constraints required by AWS Chatbot.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>We were unable to find the resource for your request</p>
 *
 * @throws {@link ChatbotServiceException}
 * <p>Base exception class for all service exceptions from Chatbot service.</p>
 *
 *
 * @public
 */
export class DeleteMicrosoftTeamsUserIdentityCommand extends $Command
  .classBuilder<
    DeleteMicrosoftTeamsUserIdentityCommandInput,
    DeleteMicrosoftTeamsUserIdentityCommandOutput,
    ChatbotClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ChatbotClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WheatleyOrchestration_20171011", "DeleteMicrosoftTeamsUserIdentity", {})
  .n("ChatbotClient", "DeleteMicrosoftTeamsUserIdentityCommand")
  .sc(DeleteMicrosoftTeamsUserIdentity$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteMicrosoftTeamsUserIdentityRequest;
      output: {};
    };
    sdk: {
      input: DeleteMicrosoftTeamsUserIdentityCommandInput;
      output: DeleteMicrosoftTeamsUserIdentityCommandOutput;
    };
  };
}
