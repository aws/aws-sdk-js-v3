// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteNotificationConfigurationRequest, DeleteNotificationConfigurationResponse } from "../models/models_0";
import { NotificationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NotificationsClient";
import {
  de_DeleteNotificationConfigurationCommand,
  se_DeleteNotificationConfigurationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export interface DeleteNotificationConfigurationCommandOutput
  extends DeleteNotificationConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Deletes a <code>NotificationConfiguration</code>.</p>
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
export class DeleteNotificationConfigurationCommand extends $Command
  .classBuilder<
    DeleteNotificationConfigurationCommandInput,
    DeleteNotificationConfigurationCommandOutput,
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
  .s("Notifications", "DeleteNotificationConfiguration", {})
  .n("NotificationsClient", "DeleteNotificationConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_DeleteNotificationConfigurationCommand)
  .de(de_DeleteNotificationConfigurationCommand)
  .build() {
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
