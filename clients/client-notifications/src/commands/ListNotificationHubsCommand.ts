// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListNotificationHubsRequest, ListNotificationHubsResponse } from "../models/models_0";
import { NotificationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NotificationsClient";
import { ListNotificationHubs } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListNotificationHubsCommand}.
 */
export interface ListNotificationHubsCommandInput extends ListNotificationHubsRequest {}
/**
 * @public
 *
 * The output of {@link ListNotificationHubsCommand}.
 */
export interface ListNotificationHubsCommandOutput extends ListNotificationHubsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of <code>NotificationHubs</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NotificationsClient, ListNotificationHubsCommand } from "@aws-sdk/client-notifications"; // ES Modules import
 * // const { NotificationsClient, ListNotificationHubsCommand } = require("@aws-sdk/client-notifications"); // CommonJS import
 * // import type { NotificationsClientConfig } from "@aws-sdk/client-notifications";
 * const config = {}; // type is NotificationsClientConfig
 * const client = new NotificationsClient(config);
 * const input = { // ListNotificationHubsRequest
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListNotificationHubsCommand(input);
 * const response = await client.send(command);
 * // { // ListNotificationHubsResponse
 * //   notificationHubs: [ // NotificationHubs // required
 * //     { // NotificationHubOverview
 * //       notificationHubRegion: "STRING_VALUE", // required
 * //       statusSummary: { // NotificationHubStatusSummary
 * //         status: "STRING_VALUE", // required
 * //         reason: "STRING_VALUE", // required
 * //       },
 * //       creationTime: new Date("TIMESTAMP"), // required
 * //       lastActivationTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListNotificationHubsCommandInput - {@link ListNotificationHubsCommandInput}
 * @returns {@link ListNotificationHubsCommandOutput}
 * @see {@link ListNotificationHubsCommandInput} for command's `input` shape.
 * @see {@link ListNotificationHubsCommandOutput} for command's `response` shape.
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
export class ListNotificationHubsCommand extends $Command
  .classBuilder<
    ListNotificationHubsCommandInput,
    ListNotificationHubsCommandOutput,
    NotificationsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NotificationsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Notifications", "ListNotificationHubs", {})
  .n("NotificationsClient", "ListNotificationHubsCommand")
  .sc(ListNotificationHubs)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListNotificationHubsRequest;
      output: ListNotificationHubsResponse;
    };
    sdk: {
      input: ListNotificationHubsCommandInput;
      output: ListNotificationHubsCommandOutput;
    };
  };
}
