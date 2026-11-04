// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeregisterNotificationHubRequest, DeregisterNotificationHubResponse } from "../models/models_0";
import { DeregisterNotificationHub$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeregisterNotificationHubCommand}.
 */
export interface DeregisterNotificationHubCommandInput extends DeregisterNotificationHubRequest {}
/**
 * @public
 *
 * The output of {@link DeregisterNotificationHubCommand}.
 */
export interface DeregisterNotificationHubCommandOutput extends DeregisterNotificationHubResponse, __MetadataBearer {}

/**
 * Deregisters a `NotificationHub` in the specified Region.
 *
 * > **Note:** You can't deregister the last `NotificationHub` in the account. `NotificationEvents` stored in the deregistered `NotificationHub` are no longer visible. Recreating a new `NotificationHub` in the same Region restores access to those `NotificationEvents`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NotificationsClient, DeregisterNotificationHubCommand } from "@aws-sdk/client-notifications"; // ES Modules import
 * // const { NotificationsClient, DeregisterNotificationHubCommand } = require("@aws-sdk/client-notifications"); // CommonJS import
 * // import type { NotificationsClientConfig } from "@aws-sdk/client-notifications";
 * const config = {}; // type is NotificationsClientConfig
 * const client = new NotificationsClient(config);
 * const input = { // DeregisterNotificationHubRequest
 *   notificationHubRegion: "STRING_VALUE", // required
 * };
 * const command = new DeregisterNotificationHubCommand(input);
 * const response = await client.send(command);
 * // { // DeregisterNotificationHubResponse
 * //   notificationHubRegion: "STRING_VALUE", // required
 * //   statusSummary: { // NotificationHubStatusSummary
 * //     status: "STRING_VALUE", // required
 * //     reason: "STRING_VALUE", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param DeregisterNotificationHubCommandInput - {@link DeregisterNotificationHubCommandInput}
 * @returns {@link DeregisterNotificationHubCommandOutput}
 * @see {@link DeregisterNotificationHubCommandInput} for command's `input` shape.
 * @see {@link DeregisterNotificationHubCommandOutput} for command's `response` shape.
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
export class DeregisterNotificationHubCommand extends command<DeregisterNotificationHubCommandInput, DeregisterNotificationHubCommandOutput>(
  _ep0,
  _mw0,
  "DeregisterNotificationHub",
  DeregisterNotificationHub$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeregisterNotificationHubRequest;
      output: DeregisterNotificationHubResponse;
    };
    sdk: {
      input: DeregisterNotificationHubCommandInput;
      output: DeregisterNotificationHubCommandOutput;
    };
  };
}
