// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RegisterNotificationHubRequest, RegisterNotificationHubResponse } from "../models/models_0";
import { RegisterNotificationHub$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link RegisterNotificationHubCommand}.
 */
export interface RegisterNotificationHubCommandInput extends RegisterNotificationHubRequest {}
/**
 * @public
 *
 * The output of {@link RegisterNotificationHubCommand}.
 */
export interface RegisterNotificationHubCommandOutput extends RegisterNotificationHubResponse, __MetadataBearer {}

/**
 * Registers a `NotificationHub` in the specified Region.
 *
 * There is a maximum of one `NotificationHub` per Region. You can have a maximum of 3 `NotificationHub` resources at a time.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NotificationsClient, RegisterNotificationHubCommand } from "@aws-sdk/client-notifications"; // ES Modules import
 * // const { NotificationsClient, RegisterNotificationHubCommand } = require("@aws-sdk/client-notifications"); // CommonJS import
 * // import type { NotificationsClientConfig } from "@aws-sdk/client-notifications";
 * const config = {}; // type is NotificationsClientConfig
 * const client = new NotificationsClient(config);
 * const input = { // RegisterNotificationHubRequest
 *   notificationHubRegion: "STRING_VALUE", // required
 * };
 * const command = new RegisterNotificationHubCommand(input);
 * const response = await client.send(command);
 * // { // RegisterNotificationHubResponse
 * //   notificationHubRegion: "STRING_VALUE", // required
 * //   statusSummary: { // NotificationHubStatusSummary
 * //     status: "STRING_VALUE", // required
 * //     reason: "STRING_VALUE", // required
 * //   },
 * //   creationTime: new Date("TIMESTAMP"), // required
 * //   lastActivationTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param RegisterNotificationHubCommandInput - {@link RegisterNotificationHubCommandInput}
 * @returns {@link RegisterNotificationHubCommandOutput}
 * @see {@link RegisterNotificationHubCommandInput} for command's `input` shape.
 * @see {@link RegisterNotificationHubCommandOutput} for command's `response` shape.
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
export class RegisterNotificationHubCommand extends command<RegisterNotificationHubCommandInput, RegisterNotificationHubCommandOutput>(
  _ep0,
  _mw0,
  "RegisterNotificationHub",
  RegisterNotificationHub$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RegisterNotificationHubRequest;
      output: RegisterNotificationHubResponse;
    };
    sdk: {
      input: RegisterNotificationHubCommandInput;
      output: RegisterNotificationHubCommandOutput;
    };
  };
}
