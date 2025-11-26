// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListNotificationConfigurationsRequest, ListNotificationConfigurationsResponse } from "../models/models_0";
import type { NotificationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NotificationsClient";
import { ListNotificationConfigurations } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListNotificationConfigurationsCommand}.
 */
export interface ListNotificationConfigurationsCommandInput extends ListNotificationConfigurationsRequest {}
/**
 * @public
 *
 * The output of {@link ListNotificationConfigurationsCommand}.
 */
export interface ListNotificationConfigurationsCommandOutput
  extends ListNotificationConfigurationsResponse,
    __MetadataBearer {}

/**
 * <p>Returns a list of abbreviated <code>NotificationConfigurations</code> according to specified filters, in reverse chronological order (newest first).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NotificationsClient, ListNotificationConfigurationsCommand } from "@aws-sdk/client-notifications"; // ES Modules import
 * // const { NotificationsClient, ListNotificationConfigurationsCommand } = require("@aws-sdk/client-notifications"); // CommonJS import
 * // import type { NotificationsClientConfig } from "@aws-sdk/client-notifications";
 * const config = {}; // type is NotificationsClientConfig
 * const client = new NotificationsClient(config);
 * const input = { // ListNotificationConfigurationsRequest
 *   eventRuleSource: "STRING_VALUE",
 *   channelArn: "STRING_VALUE",
 *   status: "STRING_VALUE",
 *   subtype: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListNotificationConfigurationsCommand(input);
 * const response = await client.send(command);
 * // { // ListNotificationConfigurationsResponse
 * //   nextToken: "STRING_VALUE",
 * //   notificationConfigurations: [ // NotificationConfigurations // required
 * //     { // NotificationConfigurationStructure
 * //       arn: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       description: "STRING_VALUE", // required
 * //       status: "STRING_VALUE", // required
 * //       creationTime: new Date("TIMESTAMP"), // required
 * //       aggregationDuration: "STRING_VALUE",
 * //       subtype: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListNotificationConfigurationsCommandInput - {@link ListNotificationConfigurationsCommandInput}
 * @returns {@link ListNotificationConfigurationsCommandOutput}
 * @see {@link ListNotificationConfigurationsCommandInput} for command's `input` shape.
 * @see {@link ListNotificationConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link NotificationsClientResolvedConfig | config} for NotificationsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error during processing of request.</p>
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
export class ListNotificationConfigurationsCommand extends $Command
  .classBuilder<
    ListNotificationConfigurationsCommandInput,
    ListNotificationConfigurationsCommandOutput,
    NotificationsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NotificationsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Notifications", "ListNotificationConfigurations", {})
  .n("NotificationsClient", "ListNotificationConfigurationsCommand")
  .sc(ListNotificationConfigurations)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListNotificationConfigurationsRequest;
      output: ListNotificationConfigurationsResponse;
    };
    sdk: {
      input: ListNotificationConfigurationsCommandInput;
      output: ListNotificationConfigurationsCommandOutput;
    };
  };
}
