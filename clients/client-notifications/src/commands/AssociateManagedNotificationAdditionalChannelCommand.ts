// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  AssociateManagedNotificationAdditionalChannelRequest,
  AssociateManagedNotificationAdditionalChannelResponse,
} from "../models/models_0";
import { AssociateManagedNotificationAdditionalChannel$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AssociateManagedNotificationAdditionalChannelCommand}.
 */
export interface AssociateManagedNotificationAdditionalChannelCommandInput extends AssociateManagedNotificationAdditionalChannelRequest {}
/**
 * @public
 *
 * The output of {@link AssociateManagedNotificationAdditionalChannelCommand}.
 */
export interface AssociateManagedNotificationAdditionalChannelCommandOutput extends AssociateManagedNotificationAdditionalChannelResponse, __MetadataBearer {}

/**
 * Associates an additional Channel with a particular `ManagedNotificationConfiguration`.
 *
 * Supported Channels include Amazon Q Developer in chat applications, the Console Mobile Application, and emails (notifications-contacts).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NotificationsClient, AssociateManagedNotificationAdditionalChannelCommand } from "@aws-sdk/client-notifications"; // ES Modules import
 * // const { NotificationsClient, AssociateManagedNotificationAdditionalChannelCommand } = require("@aws-sdk/client-notifications"); // CommonJS import
 * // import type { NotificationsClientConfig } from "@aws-sdk/client-notifications";
 * const config = {}; // type is NotificationsClientConfig
 * const client = new NotificationsClient(config);
 * const input = { // AssociateManagedNotificationAdditionalChannelRequest
 *   channelArn: "STRING_VALUE", // required
 *   managedNotificationConfigurationArn: "STRING_VALUE", // required
 *   isSensitiveEventsSubscribed: true || false,
 * };
 * const command = new AssociateManagedNotificationAdditionalChannelCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AssociateManagedNotificationAdditionalChannelCommandInput - {@link AssociateManagedNotificationAdditionalChannelCommandInput}
 * @returns {@link AssociateManagedNotificationAdditionalChannelCommandOutput}
 * @see {@link AssociateManagedNotificationAdditionalChannelCommandInput} for command's `input` shape.
 * @see {@link AssociateManagedNotificationAdditionalChannelCommandOutput} for command's `response` shape.
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
export class AssociateManagedNotificationAdditionalChannelCommand extends command<AssociateManagedNotificationAdditionalChannelCommandInput, AssociateManagedNotificationAdditionalChannelCommandOutput>(
  _ep0,
  _mw0,
  "AssociateManagedNotificationAdditionalChannel",
  AssociateManagedNotificationAdditionalChannel$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateManagedNotificationAdditionalChannelRequest;
      output: {};
    };
    sdk: {
      input: AssociateManagedNotificationAdditionalChannelCommandInput;
      output: AssociateManagedNotificationAdditionalChannelCommandOutput;
    };
  };
}
