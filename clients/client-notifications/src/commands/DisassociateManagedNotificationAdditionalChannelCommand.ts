// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DisassociateManagedNotificationAdditionalChannelRequest,
  DisassociateManagedNotificationAdditionalChannelResponse,
} from "../models/models_0";
import { DisassociateManagedNotificationAdditionalChannel$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DisassociateManagedNotificationAdditionalChannelCommand}.
 */
export interface DisassociateManagedNotificationAdditionalChannelCommandInput extends DisassociateManagedNotificationAdditionalChannelRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateManagedNotificationAdditionalChannelCommand}.
 */
export interface DisassociateManagedNotificationAdditionalChannelCommandOutput extends DisassociateManagedNotificationAdditionalChannelResponse, __MetadataBearer {}

/**
 * Disassociates an additional Channel from a particular `ManagedNotificationConfiguration`.
 *
 * Supported Channels include Amazon Q Developer in chat applications, the Console Mobile Application, and emails (notifications-contacts).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NotificationsClient, DisassociateManagedNotificationAdditionalChannelCommand } from "@aws-sdk/client-notifications"; // ES Modules import
 * // const { NotificationsClient, DisassociateManagedNotificationAdditionalChannelCommand } = require("@aws-sdk/client-notifications"); // CommonJS import
 * // import type { NotificationsClientConfig } from "@aws-sdk/client-notifications";
 * const config = {}; // type is NotificationsClientConfig
 * const client = new NotificationsClient(config);
 * const input = { // DisassociateManagedNotificationAdditionalChannelRequest
 *   channelArn: "STRING_VALUE", // required
 *   managedNotificationConfigurationArn: "STRING_VALUE", // required
 * };
 * const command = new DisassociateManagedNotificationAdditionalChannelCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociateManagedNotificationAdditionalChannelCommandInput - {@link DisassociateManagedNotificationAdditionalChannelCommandInput}
 * @returns {@link DisassociateManagedNotificationAdditionalChannelCommandOutput}
 * @see {@link DisassociateManagedNotificationAdditionalChannelCommandInput} for command's `input` shape.
 * @see {@link DisassociateManagedNotificationAdditionalChannelCommandOutput} for command's `response` shape.
 * @see {@link NotificationsClientResolvedConfig | config} for NotificationsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * User does not have sufficient access to perform this action.
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
export class DisassociateManagedNotificationAdditionalChannelCommand extends command<DisassociateManagedNotificationAdditionalChannelCommandInput, DisassociateManagedNotificationAdditionalChannelCommandOutput>(
  _ep0,
  _mw0,
  "DisassociateManagedNotificationAdditionalChannel",
  DisassociateManagedNotificationAdditionalChannel$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateManagedNotificationAdditionalChannelRequest;
      output: {};
    };
    sdk: {
      input: DisassociateManagedNotificationAdditionalChannelCommandInput;
      output: DisassociateManagedNotificationAdditionalChannelCommandOutput;
    };
  };
}
