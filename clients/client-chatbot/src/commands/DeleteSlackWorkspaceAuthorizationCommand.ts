// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DeleteSlackWorkspaceAuthorizationRequest,
  DeleteSlackWorkspaceAuthorizationResult,
} from "../models/models_0";
import { DeleteSlackWorkspaceAuthorization$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface DeleteSlackWorkspaceAuthorizationCommandOutput extends DeleteSlackWorkspaceAuthorizationResult, __MetadataBearer {}

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
export class DeleteSlackWorkspaceAuthorizationCommand extends command<DeleteSlackWorkspaceAuthorizationCommandInput, DeleteSlackWorkspaceAuthorizationCommandOutput>(
  _ep0,
  _mw0,
  "DeleteSlackWorkspaceAuthorization",
  DeleteSlackWorkspaceAuthorization$
) {
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
