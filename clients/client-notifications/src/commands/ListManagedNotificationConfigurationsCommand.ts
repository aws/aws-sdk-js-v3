// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  ListManagedNotificationConfigurationsRequest,
  ListManagedNotificationConfigurationsResponse,
} from "../models/models_0";
import { ListManagedNotificationConfigurations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListManagedNotificationConfigurationsCommand}.
 */
export interface ListManagedNotificationConfigurationsCommandInput extends ListManagedNotificationConfigurationsRequest {}
/**
 * @public
 *
 * The output of {@link ListManagedNotificationConfigurationsCommand}.
 */
export interface ListManagedNotificationConfigurationsCommandOutput extends ListManagedNotificationConfigurationsResponse, __MetadataBearer {}

/**
 * Returns a list of Managed Notification Configurations according to specified filters, ordered by creation time in reverse chronological order (newest first).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NotificationsClient, ListManagedNotificationConfigurationsCommand } from "@aws-sdk/client-notifications"; // ES Modules import
 * // const { NotificationsClient, ListManagedNotificationConfigurationsCommand } = require("@aws-sdk/client-notifications"); // CommonJS import
 * // import type { NotificationsClientConfig } from "@aws-sdk/client-notifications";
 * const config = {}; // type is NotificationsClientConfig
 * const client = new NotificationsClient(config);
 * const input = { // ListManagedNotificationConfigurationsRequest
 *   channelIdentifier: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListManagedNotificationConfigurationsCommand(input);
 * const response = await client.send(command);
 * // { // ListManagedNotificationConfigurationsResponse
 * //   nextToken: "STRING_VALUE",
 * //   managedNotificationConfigurations: [ // ManagedNotificationConfigurations // required
 * //     { // ManagedNotificationConfigurationStructure
 * //       arn: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       description: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListManagedNotificationConfigurationsCommandInput - {@link ListManagedNotificationConfigurationsCommandInput}
 * @returns {@link ListManagedNotificationConfigurationsCommandOutput}
 * @see {@link ListManagedNotificationConfigurationsCommandInput} for command's `input` shape.
 * @see {@link ListManagedNotificationConfigurationsCommandOutput} for command's `response` shape.
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
export class ListManagedNotificationConfigurationsCommand extends command<ListManagedNotificationConfigurationsCommandInput, ListManagedNotificationConfigurationsCommandOutput>(
  _ep0,
  _mw0,
  "ListManagedNotificationConfigurations",
  ListManagedNotificationConfigurations$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListManagedNotificationConfigurationsRequest;
      output: ListManagedNotificationConfigurationsResponse;
    };
    sdk: {
      input: ListManagedNotificationConfigurationsCommandInput;
      output: ListManagedNotificationConfigurationsCommandOutput;
    };
  };
}
