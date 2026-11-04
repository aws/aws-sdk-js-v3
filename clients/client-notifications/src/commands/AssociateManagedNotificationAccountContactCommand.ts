// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  AssociateManagedNotificationAccountContactRequest,
  AssociateManagedNotificationAccountContactResponse,
} from "../models/models_0";
import { AssociateManagedNotificationAccountContact$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AssociateManagedNotificationAccountContactCommand}.
 */
export interface AssociateManagedNotificationAccountContactCommandInput extends AssociateManagedNotificationAccountContactRequest {}
/**
 * @public
 *
 * The output of {@link AssociateManagedNotificationAccountContactCommand}.
 */
export interface AssociateManagedNotificationAccountContactCommandOutput extends AssociateManagedNotificationAccountContactResponse, __MetadataBearer {}

/**
 * Associates an Account Contact with a particular `ManagedNotificationConfiguration`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NotificationsClient, AssociateManagedNotificationAccountContactCommand } from "@aws-sdk/client-notifications"; // ES Modules import
 * // const { NotificationsClient, AssociateManagedNotificationAccountContactCommand } = require("@aws-sdk/client-notifications"); // CommonJS import
 * // import type { NotificationsClientConfig } from "@aws-sdk/client-notifications";
 * const config = {}; // type is NotificationsClientConfig
 * const client = new NotificationsClient(config);
 * const input = { // AssociateManagedNotificationAccountContactRequest
 *   contactIdentifier: "STRING_VALUE", // required
 *   managedNotificationConfigurationArn: "STRING_VALUE", // required
 *   isSensitiveEventsSubscribed: true || false,
 * };
 * const command = new AssociateManagedNotificationAccountContactCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AssociateManagedNotificationAccountContactCommandInput - {@link AssociateManagedNotificationAccountContactCommandInput}
 * @returns {@link AssociateManagedNotificationAccountContactCommandOutput}
 * @see {@link AssociateManagedNotificationAccountContactCommandInput} for command's `input` shape.
 * @see {@link AssociateManagedNotificationAccountContactCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * Request would cause a service quota to be exceeded.
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
export class AssociateManagedNotificationAccountContactCommand extends command<AssociateManagedNotificationAccountContactCommandInput, AssociateManagedNotificationAccountContactCommandOutput>(
  _ep0,
  _mw0,
  "AssociateManagedNotificationAccountContact",
  AssociateManagedNotificationAccountContact$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateManagedNotificationAccountContactRequest;
      output: {};
    };
    sdk: {
      input: AssociateManagedNotificationAccountContactCommandInput;
      output: AssociateManagedNotificationAccountContactCommandOutput;
    };
  };
}
