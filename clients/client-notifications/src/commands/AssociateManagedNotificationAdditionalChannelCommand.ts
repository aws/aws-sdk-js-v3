// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  AssociateManagedNotificationAdditionalChannelRequest,
  AssociateManagedNotificationAdditionalChannelResponse,
} from "../models/models_0";
import { NotificationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NotificationsClient";
import { AssociateManagedNotificationAdditionalChannel } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AssociateManagedNotificationAdditionalChannelCommand}.
 */
export interface AssociateManagedNotificationAdditionalChannelCommandInput
  extends AssociateManagedNotificationAdditionalChannelRequest {}
/**
 * @public
 *
 * The output of {@link AssociateManagedNotificationAdditionalChannelCommand}.
 */
export interface AssociateManagedNotificationAdditionalChannelCommandOutput
  extends AssociateManagedNotificationAdditionalChannelResponse,
    __MetadataBearer {}

/**
 * <p>Associates an additional Channel with a particular <code>ManagedNotificationConfiguration</code>.</p> <p>Supported Channels include Amazon Q Developer in chat applications, the Console Mobile Application, and emails (notifications-contacts).</p>
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Request would cause a service quota to be exceeded.</p>
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
export class AssociateManagedNotificationAdditionalChannelCommand extends $Command
  .classBuilder<
    AssociateManagedNotificationAdditionalChannelCommandInput,
    AssociateManagedNotificationAdditionalChannelCommandOutput,
    NotificationsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NotificationsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Notifications", "AssociateManagedNotificationAdditionalChannel", {})
  .n("NotificationsClient", "AssociateManagedNotificationAdditionalChannelCommand")
  .sc(AssociateManagedNotificationAdditionalChannel)
  .build() {
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
