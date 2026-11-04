// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AssociateChannelRequest, AssociateChannelResponse } from "../models/models_0";
import { AssociateChannel$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AssociateChannelCommand}.
 */
export interface AssociateChannelCommandInput extends AssociateChannelRequest {}
/**
 * @public
 *
 * The output of {@link AssociateChannelCommand}.
 */
export interface AssociateChannelCommandOutput extends AssociateChannelResponse, __MetadataBearer {}

/**
 * Associates a delivery [Channel](https://docs.aws.amazon.com/notifications/latest/userguide/managing-delivery-channels.html) with a particular `NotificationConfiguration`. Supported Channels include Amazon Q Developer in chat applications, the Console Mobile Application, and emails (notifications-contacts).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NotificationsClient, AssociateChannelCommand } from "@aws-sdk/client-notifications"; // ES Modules import
 * // const { NotificationsClient, AssociateChannelCommand } = require("@aws-sdk/client-notifications"); // CommonJS import
 * // import type { NotificationsClientConfig } from "@aws-sdk/client-notifications";
 * const config = {}; // type is NotificationsClientConfig
 * const client = new NotificationsClient(config);
 * const input = { // AssociateChannelRequest
 *   arn: "STRING_VALUE", // required
 *   notificationConfigurationArn: "STRING_VALUE", // required
 * };
 * const command = new AssociateChannelCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AssociateChannelCommandInput - {@link AssociateChannelCommandInput}
 * @returns {@link AssociateChannelCommandOutput}
 * @see {@link AssociateChannelCommandInput} for command's `input` shape.
 * @see {@link AssociateChannelCommandOutput} for command's `response` shape.
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
export class AssociateChannelCommand extends command<AssociateChannelCommandInput, AssociateChannelCommandOutput>(
  _ep0,
  _mw0,
  "AssociateChannel",
  AssociateChannel$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateChannelRequest;
      output: {};
    };
    sdk: {
      input: AssociateChannelCommandInput;
      output: AssociateChannelCommandOutput;
    };
  };
}
