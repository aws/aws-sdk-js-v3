// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetManagedNotificationConfigurationRequest,
  GetManagedNotificationConfigurationResponse,
} from "../models/models_0";
import { NotificationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NotificationsClient";
import {
  de_GetManagedNotificationConfigurationCommand,
  se_GetManagedNotificationConfigurationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetManagedNotificationConfigurationCommand}.
 */
export interface GetManagedNotificationConfigurationCommandInput extends GetManagedNotificationConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link GetManagedNotificationConfigurationCommand}.
 */
export interface GetManagedNotificationConfigurationCommandOutput
  extends GetManagedNotificationConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Returns a specified <code>ManagedNotificationConfiguration</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NotificationsClient, GetManagedNotificationConfigurationCommand } from "@aws-sdk/client-notifications"; // ES Modules import
 * // const { NotificationsClient, GetManagedNotificationConfigurationCommand } = require("@aws-sdk/client-notifications"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new NotificationsClient(config);
 * const input = { // GetManagedNotificationConfigurationRequest
 *   arn: "STRING_VALUE", // required
 * };
 * const command = new GetManagedNotificationConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetManagedNotificationConfigurationResponse
 * //   arn: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   description: "STRING_VALUE", // required
 * //   category: "STRING_VALUE", // required
 * //   subCategory: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param GetManagedNotificationConfigurationCommandInput - {@link GetManagedNotificationConfigurationCommandInput}
 * @returns {@link GetManagedNotificationConfigurationCommandOutput}
 * @see {@link GetManagedNotificationConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetManagedNotificationConfigurationCommandOutput} for command's `response` shape.
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
 * @public
 */
export class GetManagedNotificationConfigurationCommand extends $Command
  .classBuilder<
    GetManagedNotificationConfigurationCommandInput,
    GetManagedNotificationConfigurationCommandOutput,
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
  .s("Notifications", "GetManagedNotificationConfiguration", {})
  .n("NotificationsClient", "GetManagedNotificationConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_GetManagedNotificationConfigurationCommand)
  .de(de_GetManagedNotificationConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetManagedNotificationConfigurationRequest;
      output: GetManagedNotificationConfigurationResponse;
    };
    sdk: {
      input: GetManagedNotificationConfigurationCommandInput;
      output: GetManagedNotificationConfigurationCommandOutput;
    };
  };
}
