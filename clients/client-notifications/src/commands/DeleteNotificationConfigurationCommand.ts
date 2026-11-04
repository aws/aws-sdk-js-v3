// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DeleteNotificationConfigurationRequest,
  DeleteNotificationConfigurationResponse,
} from "../models/models_0";
import { DeleteNotificationConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteNotificationConfigurationCommand}.
 */
export interface DeleteNotificationConfigurationCommandInput extends DeleteNotificationConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteNotificationConfigurationCommand}.
 */
export interface DeleteNotificationConfigurationCommandOutput extends DeleteNotificationConfigurationResponse, __MetadataBearer {}

/**
 * Deletes a `NotificationConfiguration`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NotificationsClient, DeleteNotificationConfigurationCommand } from "@aws-sdk/client-notifications"; // ES Modules import
 * // const { NotificationsClient, DeleteNotificationConfigurationCommand } = require("@aws-sdk/client-notifications"); // CommonJS import
 * // import type { NotificationsClientConfig } from "@aws-sdk/client-notifications";
 * const config = {}; // type is NotificationsClientConfig
 * const client = new NotificationsClient(config);
 * const input = { // DeleteNotificationConfigurationRequest
 *   arn: "STRING_VALUE", // required
 * };
 * const command = new DeleteNotificationConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteNotificationConfigurationCommandInput - {@link DeleteNotificationConfigurationCommandInput}
 * @returns {@link DeleteNotificationConfigurationCommandOutput}
 * @see {@link DeleteNotificationConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteNotificationConfigurationCommandOutput} for command's `response` shape.
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
export class DeleteNotificationConfigurationCommand extends command<DeleteNotificationConfigurationCommandInput, DeleteNotificationConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "DeleteNotificationConfiguration",
  DeleteNotificationConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteNotificationConfigurationRequest;
      output: {};
    };
    sdk: {
      input: DeleteNotificationConfigurationCommandInput;
      output: DeleteNotificationConfigurationCommandOutput;
    };
  };
}
