// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { RegisterNotificationHubRequest, RegisterNotificationHubResponse } from "../models/models_0";
import { NotificationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NotificationsClient";
import { de_RegisterNotificationHubCommand, se_RegisterNotificationHubCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Registers a <code>NotificationConfiguration</code> in the specified Region.</p> <p>There is a maximum of one <code>NotificationConfiguration</code> per Region. You can have a maximum of 3 <code>NotificationHub</code> resources at a time.</p>
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
 *  <p>User does not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource can cause an inconsistent state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error during processing of request.</p>
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
export class RegisterNotificationHubCommand extends $Command
  .classBuilder<
    RegisterNotificationHubCommandInput,
    RegisterNotificationHubCommandOutput,
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
  .s("Notifications", "RegisterNotificationHub", {})
  .n("NotificationsClient", "RegisterNotificationHubCommand")
  .f(void 0, void 0)
  .ser(se_RegisterNotificationHubCommand)
  .de(de_RegisterNotificationHubCommand)
  .build() {
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
