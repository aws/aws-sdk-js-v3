// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListNotificationConfigurationsRequest, ListNotificationConfigurationsResponse } from "../models/models_0";
import { ListNotificationConfigurations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface ListNotificationConfigurationsCommandOutput extends ListNotificationConfigurationsResponse, __MetadataBearer {}

/**
 * Returns a list of abbreviated `NotificationConfigurations` according to specified filters, in reverse chronological order (newest first).
 *
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
 *
 * User does not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Unexpected error during processing of request.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * This exception is thrown when the notification event fails validation.
 *
 * @throws {@link NotificationsServiceException}
 *
 * Base exception class for all service exceptions from Notifications service.
 *
 * @public
 */
export class ListNotificationConfigurationsCommand extends command<ListNotificationConfigurationsCommandInput, ListNotificationConfigurationsCommandOutput>(
  _ep0,
  _mw0,
  "ListNotificationConfigurations",
  ListNotificationConfigurations$
) {
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
