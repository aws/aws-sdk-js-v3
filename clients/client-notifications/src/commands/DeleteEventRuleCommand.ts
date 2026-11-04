// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteEventRuleRequest, DeleteEventRuleResponse } from "../models/models_0";
import { DeleteEventRule$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteEventRuleCommand}.
 */
export interface DeleteEventRuleCommandInput extends DeleteEventRuleRequest {}
/**
 * @public
 *
 * The output of {@link DeleteEventRuleCommand}.
 */
export interface DeleteEventRuleCommandOutput extends DeleteEventRuleResponse, __MetadataBearer {}

/**
 * Deletes an `EventRule`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NotificationsClient, DeleteEventRuleCommand } from "@aws-sdk/client-notifications"; // ES Modules import
 * // const { NotificationsClient, DeleteEventRuleCommand } = require("@aws-sdk/client-notifications"); // CommonJS import
 * // import type { NotificationsClientConfig } from "@aws-sdk/client-notifications";
 * const config = {}; // type is NotificationsClientConfig
 * const client = new NotificationsClient(config);
 * const input = { // DeleteEventRuleRequest
 *   arn: "STRING_VALUE", // required
 * };
 * const command = new DeleteEventRuleCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteEventRuleCommandInput - {@link DeleteEventRuleCommandInput}
 * @returns {@link DeleteEventRuleCommandOutput}
 * @see {@link DeleteEventRuleCommandInput} for command's `input` shape.
 * @see {@link DeleteEventRuleCommandOutput} for command's `response` shape.
 * @see {@link NotificationsClientResolvedConfig | config} for NotificationsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * User does not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Updating or deleting a resource can cause an inconsistent state.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Unexpected error during processing of request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Request references a resource which does not exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * This exception is thrown when the notification event fails validation.
 *
 * @throws {@link NotificationsServiceException}
 *
 * Base exception class for all service exceptions from Notifications service.
 *
 * @public
 */
export class DeleteEventRuleCommand extends command<DeleteEventRuleCommandInput, DeleteEventRuleCommandOutput>(
  _ep0,
  _mw0,
  "DeleteEventRule",
  DeleteEventRule$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteEventRuleRequest;
      output: {};
    };
    sdk: {
      input: DeleteEventRuleCommandInput;
      output: DeleteEventRuleCommandOutput;
    };
  };
}
