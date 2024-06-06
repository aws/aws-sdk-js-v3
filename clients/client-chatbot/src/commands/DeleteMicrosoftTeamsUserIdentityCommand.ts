// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ChatbotClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChatbotClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteMicrosoftTeamsUserIdentityRequest, DeleteMicrosoftTeamsUserIdentityResult } from "../models/models_0";
import {
  de_DeleteMicrosoftTeamsUserIdentityCommand,
  se_DeleteMicrosoftTeamsUserIdentityCommand,
} from "../protocols/Aws_restJson1";

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
 * Deletes a Teams user identity
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChatbotClient, DeleteMicrosoftTeamsUserIdentityCommand } from "@aws-sdk/client-chatbot"; // ES Modules import
 * // const { ChatbotClient, DeleteMicrosoftTeamsUserIdentityCommand } = require("@aws-sdk/client-chatbot"); // CommonJS import
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
export class DeleteMicrosoftTeamsUserIdentityCommand extends $Command
  .classBuilder<
    DeleteMicrosoftTeamsUserIdentityCommandInput,
    DeleteMicrosoftTeamsUserIdentityCommandOutput,
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
  .s("WheatleyOrchestration_20171011", "DeleteMicrosoftTeamsUserIdentity", {})
  .n("ChatbotClient", "DeleteMicrosoftTeamsUserIdentityCommand")
  .f(void 0, void 0)
  .ser(se_DeleteMicrosoftTeamsUserIdentityCommand)
  .de(de_DeleteMicrosoftTeamsUserIdentityCommand)
  .build() {}
