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
 * <p>Updates the <code>isSensitiveEventsSubscribed</code> property of a particular ManagedNotification channel association.</p>
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
 *  <p>User does not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource can cause an inconsistent state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error during processing of request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Request references a resource which does not exist. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Request was denied due to request throttling. </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>This exception is thrown when the notification event fails validation.</p>
 *
 * @throws {@link NotificationsServiceException}
 * <p>Base exception class for all service exceptions from Notifications service.</p>
 *
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
