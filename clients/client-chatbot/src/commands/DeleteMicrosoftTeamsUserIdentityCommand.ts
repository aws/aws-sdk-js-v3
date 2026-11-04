// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DeleteMicrosoftTeamsUserIdentityRequest,
  DeleteMicrosoftTeamsUserIdentityResult,
} from "../models/models_0";
import { DeleteMicrosoftTeamsUserIdentity$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface DeleteMicrosoftTeamsUserIdentityCommandOutput extends DeleteMicrosoftTeamsUserIdentityResult, __MetadataBearer {}

/**
 * Identifes a user level permission for a channel configuration.
 *
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
 *
 * We can’t process your request right now because of a server issue. Try again later.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * Your request input doesn't meet the constraints required by AWS Chatbot.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * We were unable to find the resource for your request
 *
 * @throws {@link ChatbotServiceException}
 *
 * Base exception class for all service exceptions from Chatbot service.
 *
 * @public
 */
export class DeleteMicrosoftTeamsUserIdentityCommand extends command<DeleteMicrosoftTeamsUserIdentityCommandInput, DeleteMicrosoftTeamsUserIdentityCommandOutput>(
  _ep0,
  _mw0,
  "DeleteMicrosoftTeamsUserIdentity",
  DeleteMicrosoftTeamsUserIdentity$
) {
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
