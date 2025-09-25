// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateNotificationConfigurationRequest, UpdateNotificationConfigurationResponse } from "../models/models_0";
import { NotificationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NotificationsClient";
import { UpdateNotificationConfiguration } from "../schemas/schemas_2_Notification";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateNotificationConfigurationCommand}.
 */
export interface UpdateNotificationConfigurationCommandInput extends UpdateNotificationConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateNotificationConfigurationCommand}.
 */
export interface UpdateNotificationConfigurationCommandOutput
  extends UpdateNotificationConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Updates a <code>NotificationConfiguration</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NotificationsClient, UpdateNotificationConfigurationCommand } from "@aws-sdk/client-notifications"; // ES Modules import
 * // const { NotificationsClient, UpdateNotificationConfigurationCommand } = require("@aws-sdk/client-notifications"); // CommonJS import
 * // import type { NotificationsClientConfig } from "@aws-sdk/client-notifications";
 * const config = {}; // type is NotificationsClientConfig
 * const client = new NotificationsClient(config);
 * const input = { // UpdateNotificationConfigurationRequest
 *   arn: "STRING_VALUE", // required
 *   name: "STRING_VALUE",
 *   description: "STRING_VALUE",
 *   aggregationDuration: "STRING_VALUE",
 * };
 * const command = new UpdateNotificationConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateNotificationConfigurationResponse
 * //   arn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param UpdateNotificationConfigurationCommandInput - {@link UpdateNotificationConfigurationCommandInput}
 * @returns {@link UpdateNotificationConfigurationCommandOutput}
 * @see {@link UpdateNotificationConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateNotificationConfigurationCommandOutput} for command's `response` shape.
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
export class UpdateNotificationConfigurationCommand extends $Command
  .classBuilder<
    UpdateNotificationConfigurationCommandInput,
    UpdateNotificationConfigurationCommandOutput,
    NotificationsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NotificationsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Notifications", "UpdateNotificationConfiguration", {})
  .n("NotificationsClient", "UpdateNotificationConfigurationCommand")
  .sc(UpdateNotificationConfiguration)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateNotificationConfigurationRequest;
      output: UpdateNotificationConfigurationResponse;
    };
    sdk: {
      input: UpdateNotificationConfigurationCommandInput;
      output: UpdateNotificationConfigurationCommandOutput;
    };
  };
}
