// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DisassociateChannelRequest, DisassociateChannelResponse } from "../models/models_0";
import { DisassociateChannel$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DisassociateChannelCommand}.
 */
export interface DisassociateChannelCommandInput extends DisassociateChannelRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateChannelCommand}.
 */
export interface DisassociateChannelCommandOutput extends DisassociateChannelResponse, __MetadataBearer {}

/**
 * Disassociates a Channel from a specified `NotificationConfiguration`. Supported Channels include Amazon Q Developer in chat applications, the Console Mobile Application, and emails (notifications-contacts).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NotificationsClient, DisassociateChannelCommand } from "@aws-sdk/client-notifications"; // ES Modules import
 * // const { NotificationsClient, DisassociateChannelCommand } = require("@aws-sdk/client-notifications"); // CommonJS import
 * // import type { NotificationsClientConfig } from "@aws-sdk/client-notifications";
 * const config = {}; // type is NotificationsClientConfig
 * const client = new NotificationsClient(config);
 * const input = { // DisassociateChannelRequest
 *   arn: "STRING_VALUE", // required
 *   notificationConfigurationArn: "STRING_VALUE", // required
 * };
 * const command = new DisassociateChannelCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociateChannelCommandInput - {@link DisassociateChannelCommandInput}
 * @returns {@link DisassociateChannelCommandOutput}
 * @see {@link DisassociateChannelCommandInput} for command's `input` shape.
 * @see {@link DisassociateChannelCommandOutput} for command's `response` shape.
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
export class DisassociateChannelCommand extends command<DisassociateChannelCommandInput, DisassociateChannelCommandOutput>(
  _ep0,
  _mw0,
  "DisassociateChannel",
  DisassociateChannel$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateChannelRequest;
      output: {};
    };
    sdk: {
      input: DisassociateChannelCommandInput;
      output: DisassociateChannelCommandOutput;
    };
  };
}
