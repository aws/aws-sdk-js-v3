// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListUserNotificationsRequest, ListUserNotificationsResponse } from "../models/models_2";
import { ListUserNotifications$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListUserNotificationsCommand}.
 */
export interface ListUserNotificationsCommandInput extends ListUserNotificationsRequest {}
/**
 * @public
 *
 * The output of {@link ListUserNotificationsCommand}.
 */
export interface ListUserNotificationsCommandOutput extends ListUserNotificationsResponse, __MetadataBearer {}

/**
 * <p>Retrieves a paginated list of notifications for a specific user, including the notification status for that user.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ListUserNotificationsCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ListUserNotificationsCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // ListUserNotificationsRequest
 *   InstanceId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   UserId: "STRING_VALUE", // required
 * };
 * const command = new ListUserNotificationsCommand(input);
 * const response = await client.send(command);
 * // { // ListUserNotificationsResponse
 * //   UserNotifications: [ // UserNotificationSummaryList
 * //     { // UserNotificationSummary
 * //       NotificationId: "STRING_VALUE",
 * //       NotificationStatus: "READ" || "UNREAD" || "HIDDEN",
 * //       InstanceId: "STRING_VALUE",
 * //       RecipientId: "STRING_VALUE",
 * //       Content: { // NotificationContent
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       Priority: "URGENT" || "HIGH" || "LOW",
 * //       Source: "CUSTOMER" || "RULES" || "SYSTEM",
 * //       CreatedAt: new Date("TIMESTAMP"),
 * //       ExpiresAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListUserNotificationsCommandInput - {@link ListUserNotificationsCommandInput}
 * @returns {@link ListUserNotificationsCommandOutput}
 * @see {@link ListUserNotificationsCommandInput} for command's `input` shape.
 * @see {@link ListUserNotificationsCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the specified parameters are not valid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 *
 * @public
 */
export class ListUserNotificationsCommand extends $Command
  .classBuilder<
    ListUserNotificationsCommandInput,
    ListUserNotificationsCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "ListUserNotifications", {})
  .n("ConnectClient", "ListUserNotificationsCommand")
  .sc(ListUserNotifications$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListUserNotificationsRequest;
      output: ListUserNotificationsResponse;
    };
    sdk: {
      input: ListUserNotificationsCommandInput;
      output: ListUserNotificationsCommandOutput;
    };
  };
}
