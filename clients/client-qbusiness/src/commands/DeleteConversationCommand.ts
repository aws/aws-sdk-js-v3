// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteConversationRequest, DeleteConversationResponse } from "../models/models_0";
import { DeleteConversation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteConversationCommand}.
 */
export interface DeleteConversationCommandInput extends DeleteConversationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteConversationCommand}.
 */
export interface DeleteConversationCommandOutput extends DeleteConversationResponse, __MetadataBearer {}

/**
 * Deletes an Amazon Q Business web experience conversation.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QBusinessClient, DeleteConversationCommand } from "@aws-sdk/client-qbusiness"; // ES Modules import
 * // const { QBusinessClient, DeleteConversationCommand } = require("@aws-sdk/client-qbusiness"); // CommonJS import
 * // import type { QBusinessClientConfig } from "@aws-sdk/client-qbusiness";
 * const config = {}; // type is QBusinessClientConfig
 * const client = new QBusinessClient(config);
 * const input = { // DeleteConversationRequest
 *   conversationId: "STRING_VALUE", // required
 *   applicationId: "STRING_VALUE", // required
 *   userId: "STRING_VALUE",
 * };
 * const command = new DeleteConversationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteConversationCommandInput - {@link DeleteConversationCommandInput}
 * @returns {@link DeleteConversationCommandOutput}
 * @see {@link DeleteConversationCommandInput} for command's `input` shape.
 * @see {@link DeleteConversationCommandOutput} for command's `response` shape.
 * @see {@link QBusinessClientResolvedConfig | config} for QBusinessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have access to perform this action. Make sure you have the required permission policies and user accounts and try again.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * You are trying to perform an action that conflicts with the current status of your resource. Fix any inconsistencies with your resources and try again.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An issue occurred with the internal server used for your Amazon Q Business service. Wait some minutes and try again, or contact [Support](http://aws.amazon.com/contact-us/) for help.
 *
 * @throws {@link LicenseNotFoundException} (client fault)
 *
 * You don't have permissions to perform the action because your license is inactive. Ask your admin to activate your license and try again after your licence is active.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The application or plugin resource you want to use doesn’t exist. Make sure you have provided the correct resource and try again.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to throttling. Reduce the number of requests and try again.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input doesn't meet the constraints set by the Amazon Q Business service. Provide the correct input and try again.
 *
 * @throws {@link QBusinessServiceException}
 *
 * Base exception class for all service exceptions from QBusiness service.
 *
 * @public
 */
export class DeleteConversationCommand extends command<DeleteConversationCommandInput, DeleteConversationCommandOutput>(
  _ep0,
  _mw0,
  "DeleteConversation",
  DeleteConversation$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteConversationRequest;
      output: {};
    };
    sdk: {
      input: DeleteConversationCommandInput;
      output: DeleteConversationCommandOutput;
    };
  };
}
