// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  DisassociateManagedNotificationAdditionalChannelRequest,
  DisassociateManagedNotificationAdditionalChannelResponse,
} from "../models/models_0";
import { NotificationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NotificationsClient";
import {
  de_DisassociateManagedNotificationAdditionalChannelCommand,
  se_DisassociateManagedNotificationAdditionalChannelCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisassociateManagedNotificationAdditionalChannelCommand}.
 */
export interface DisassociateManagedNotificationAdditionalChannelCommandInput
  extends DisassociateManagedNotificationAdditionalChannelRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateManagedNotificationAdditionalChannelCommand}.
 */
export interface DisassociateManagedNotificationAdditionalChannelCommandOutput
  extends DisassociateManagedNotificationAdditionalChannelResponse,
    __MetadataBearer {}

/**
 * <p>Disassociates an additional Channel from a particular <code>ManagedNotificationConfiguration</code>.</p> <p>Supported Channels include Amazon Q Developer in chat applications, the Console Mobile Application, and emails (notifications-contacts).</p>
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
 *  <p>User does not have sufficient access to perform this action.</p>
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
export class DisassociateManagedNotificationAdditionalChannelCommand extends $Command
  .classBuilder<
    DisassociateManagedNotificationAdditionalChannelCommandInput,
    DisassociateManagedNotificationAdditionalChannelCommandOutput,
    NotificationsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NotificationsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Notifications", "DisassociateManagedNotificationAdditionalChannel", {})
  .n("NotificationsClient", "DisassociateManagedNotificationAdditionalChannelCommand")
  .f(void 0, void 0)
  .ser(se_DisassociateManagedNotificationAdditionalChannelCommand)
  .de(de_DisassociateManagedNotificationAdditionalChannelCommand)
  .build() {
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
