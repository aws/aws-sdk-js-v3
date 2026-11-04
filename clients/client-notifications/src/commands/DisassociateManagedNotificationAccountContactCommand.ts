// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DisassociateManagedNotificationAccountContactRequest,
  DisassociateManagedNotificationAccountContactResponse,
} from "../models/models_0";
import { DisassociateManagedNotificationAccountContact$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DisassociateManagedNotificationAccountContactCommand}.
 */
export interface DisassociateManagedNotificationAccountContactCommandInput extends DisassociateManagedNotificationAccountContactRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateManagedNotificationAccountContactCommand}.
 */
export interface DisassociateManagedNotificationAccountContactCommandOutput extends DisassociateManagedNotificationAccountContactResponse, __MetadataBearer {}

/**
 * Disassociates an Account Contact with a particular `ManagedNotificationConfiguration`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NotificationsClient, DisassociateManagedNotificationAccountContactCommand } from "@aws-sdk/client-notifications"; // ES Modules import
 * // const { NotificationsClient, DisassociateManagedNotificationAccountContactCommand } = require("@aws-sdk/client-notifications"); // CommonJS import
 * // import type { NotificationsClientConfig } from "@aws-sdk/client-notifications";
 * const config = {}; // type is NotificationsClientConfig
 * const client = new NotificationsClient(config);
 * const input = { // DisassociateManagedNotificationAccountContactRequest
 *   contactIdentifier: "STRING_VALUE", // required
 *   managedNotificationConfigurationArn: "STRING_VALUE", // required
 * };
 * const command = new DisassociateManagedNotificationAccountContactCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociateManagedNotificationAccountContactCommandInput - {@link DisassociateManagedNotificationAccountContactCommandInput}
 * @returns {@link DisassociateManagedNotificationAccountContactCommandOutput}
 * @see {@link DisassociateManagedNotificationAccountContactCommandInput} for command's `input` shape.
 * @see {@link DisassociateManagedNotificationAccountContactCommandOutput} for command's `response` shape.
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
export class DisassociateManagedNotificationAccountContactCommand extends command<DisassociateManagedNotificationAccountContactCommandInput, DisassociateManagedNotificationAccountContactCommandOutput>(
  _ep0,
  _mw0,
  "DisassociateManagedNotificationAccountContact",
  DisassociateManagedNotificationAccountContact$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateManagedNotificationAccountContactRequest;
      output: {};
    };
    sdk: {
      input: DisassociateManagedNotificationAccountContactCommandInput;
      output: DisassociateManagedNotificationAccountContactCommandOutput;
    };
  };
}
