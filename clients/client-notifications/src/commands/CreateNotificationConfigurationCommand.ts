// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateNotificationConfigurationRequest, CreateNotificationConfigurationResponse } from "../models/models_0";
import { NotificationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NotificationsClient";
import {
  de_CreateNotificationConfigurationCommand,
  se_CreateNotificationConfigurationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateNotificationConfigurationCommand}.
 */
export interface CreateNotificationConfigurationCommandInput extends CreateNotificationConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link CreateNotificationConfigurationCommand}.
 */
export interface CreateNotificationConfigurationCommandOutput
  extends CreateNotificationConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Creates a new <code>NotificationConfiguration</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NotificationsClient, CreateNotificationConfigurationCommand } from "@aws-sdk/client-notifications"; // ES Modules import
 * // const { NotificationsClient, CreateNotificationConfigurationCommand } = require("@aws-sdk/client-notifications"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new NotificationsClient(config);
 * const input = { // CreateNotificationConfigurationRequest
 *   name: "STRING_VALUE", // required
 *   description: "STRING_VALUE", // required
 *   aggregationDuration: "STRING_VALUE",
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateNotificationConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // CreateNotificationConfigurationResponse
 * //   arn: "STRING_VALUE", // required
 * //   status: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateNotificationConfigurationCommandInput - {@link CreateNotificationConfigurationCommandInput}
 * @returns {@link CreateNotificationConfigurationCommandOutput}
 * @see {@link CreateNotificationConfigurationCommandInput} for command's `input` shape.
 * @see {@link CreateNotificationConfigurationCommandOutput} for command's `response` shape.
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
 * @public
 */
export class CreateNotificationConfigurationCommand extends $Command
  .classBuilder<
    CreateNotificationConfigurationCommandInput,
    CreateNotificationConfigurationCommandOutput,
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
  .s("Notifications", "CreateNotificationConfiguration", {})
  .n("NotificationsClient", "CreateNotificationConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_CreateNotificationConfigurationCommand)
  .de(de_CreateNotificationConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateNotificationConfigurationRequest;
      output: CreateNotificationConfigurationResponse;
    };
    sdk: {
      input: CreateNotificationConfigurationCommandInput;
      output: CreateNotificationConfigurationCommandOutput;
    };
  };
}
