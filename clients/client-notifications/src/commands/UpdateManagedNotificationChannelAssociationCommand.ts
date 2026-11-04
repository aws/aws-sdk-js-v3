// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  UpdateManagedNotificationChannelAssociationRequest,
  UpdateManagedNotificationChannelAssociationResponse,
} from "../models/models_0";
import { UpdateManagedNotificationChannelAssociation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateManagedNotificationChannelAssociationCommand}.
 */
export interface UpdateManagedNotificationChannelAssociationCommandInput extends UpdateManagedNotificationChannelAssociationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateManagedNotificationChannelAssociationCommand}.
 */
export interface UpdateManagedNotificationChannelAssociationCommandOutput extends UpdateManagedNotificationChannelAssociationResponse, __MetadataBearer {}

/**
 * Updates the `isSensitiveEventsSubscribed` property of a particular ManagedNotification channel association.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NotificationsClient, UpdateManagedNotificationChannelAssociationCommand } from "@aws-sdk/client-notifications"; // ES Modules import
 * // const { NotificationsClient, UpdateManagedNotificationChannelAssociationCommand } = require("@aws-sdk/client-notifications"); // CommonJS import
 * // import type { NotificationsClientConfig } from "@aws-sdk/client-notifications";
 * const config = {}; // type is NotificationsClientConfig
 * const client = new NotificationsClient(config);
 * const input = { // UpdateManagedNotificationChannelAssociationRequest
 *   managedNotificationConfigurationArn: "STRING_VALUE", // required
 *   channelIdentifier: "STRING_VALUE", // required
 *   isSensitiveEventsSubscribed: true || false,
 * };
 * const command = new UpdateManagedNotificationChannelAssociationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateManagedNotificationChannelAssociationCommandInput - {@link UpdateManagedNotificationChannelAssociationCommandInput}
 * @returns {@link UpdateManagedNotificationChannelAssociationCommandOutput}
 * @see {@link UpdateManagedNotificationChannelAssociationCommandInput} for command's `input` shape.
 * @see {@link UpdateManagedNotificationChannelAssociationCommandOutput} for command's `response` shape.
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
export class UpdateManagedNotificationChannelAssociationCommand extends command<UpdateManagedNotificationChannelAssociationCommandInput, UpdateManagedNotificationChannelAssociationCommandOutput>(
  _ep0,
  _mw0,
  "UpdateManagedNotificationChannelAssociation",
  UpdateManagedNotificationChannelAssociation$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateManagedNotificationChannelAssociationRequest;
      output: {};
    };
    sdk: {
      input: UpdateManagedNotificationChannelAssociationCommandInput;
      output: UpdateManagedNotificationChannelAssociationCommandOutput;
    };
  };
}
