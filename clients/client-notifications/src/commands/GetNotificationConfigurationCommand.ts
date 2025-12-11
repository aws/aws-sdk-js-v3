// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetNotificationConfigurationRequest, GetNotificationConfigurationResponse } from "../models/models_0";
import type { NotificationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NotificationsClient";
import { GetNotificationConfiguration } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetNotificationConfigurationCommand}.
 */
export interface GetNotificationConfigurationCommandInput extends GetNotificationConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link GetNotificationConfigurationCommand}.
 */
export interface GetNotificationConfigurationCommandOutput
  extends GetNotificationConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Returns a specified <code>NotificationConfiguration</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NotificationsClient, GetNotificationConfigurationCommand } from "@aws-sdk/client-notifications"; // ES Modules import
 * // const { NotificationsClient, GetNotificationConfigurationCommand } = require("@aws-sdk/client-notifications"); // CommonJS import
 * // import type { NotificationsClientConfig } from "@aws-sdk/client-notifications";
 * const config = {}; // type is NotificationsClientConfig
 * const client = new NotificationsClient(config);
 * const input = { // GetNotificationConfigurationRequest
 *   arn: "STRING_VALUE", // required
 * };
 * const command = new GetNotificationConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetNotificationConfigurationResponse
 * //   arn: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   description: "STRING_VALUE", // required
 * //   status: "STRING_VALUE", // required
 * //   creationTime: new Date("TIMESTAMP"), // required
 * //   aggregationDuration: "STRING_VALUE",
 * //   subtype: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetNotificationConfigurationCommandInput - {@link GetNotificationConfigurationCommandInput}
 * @returns {@link GetNotificationConfigurationCommandOutput}
 * @see {@link GetNotificationConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetNotificationConfigurationCommandOutput} for command's `response` shape.
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
export class GetNotificationConfigurationCommand extends $Command
  .classBuilder<
    GetNotificationConfigurationCommandInput,
    GetNotificationConfigurationCommandOutput,
    NotificationsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NotificationsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Notifications", "GetNotificationConfiguration", {})
  .n("NotificationsClient", "GetNotificationConfigurationCommand")
  .sc(GetNotificationConfiguration)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetNotificationConfigurationRequest;
      output: GetNotificationConfigurationResponse;
    };
    sdk: {
      input: GetNotificationConfigurationCommandInput;
      output: GetNotificationConfigurationCommandOutput;
    };
  };
}
