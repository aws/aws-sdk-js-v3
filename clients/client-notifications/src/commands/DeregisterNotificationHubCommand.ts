// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeregisterNotificationHubRequest, DeregisterNotificationHubResponse } from "../models/models_0";
import { NotificationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NotificationsClient";
import { de_DeregisterNotificationHubCommand, se_DeregisterNotificationHubCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Deregisters a <code>NotificationConfiguration</code> in the specified Region.</p> <note> <p>You can't deregister the last <code>NotificationHub</code> in the account. <code>NotificationEvents</code> stored in the deregistered <code>NotificationConfiguration</code> are no longer be visible. Recreating a new <code>NotificationConfiguration</code> in the same Region restores access to those <code>NotificationEvents</code>.</p> </note>
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
export class DeregisterNotificationHubCommand extends $Command
  .classBuilder<
    DeregisterNotificationHubCommandInput,
    DeregisterNotificationHubCommandOutput,
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
  .s("Notifications", "DeregisterNotificationHub", {})
  .n("NotificationsClient", "DeregisterNotificationHubCommand")
  .f(void 0, void 0)
  .ser(se_DeregisterNotificationHubCommand)
  .de(de_DeregisterNotificationHubCommand)
  .build() {
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
