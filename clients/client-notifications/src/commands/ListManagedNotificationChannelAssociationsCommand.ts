// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  ListManagedNotificationChannelAssociationsRequest,
  ListManagedNotificationChannelAssociationsResponse,
} from "../models/models_0";
import { ListManagedNotificationChannelAssociations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListManagedNotificationChannelAssociationsCommand}.
 */
export interface ListManagedNotificationChannelAssociationsCommandInput extends ListManagedNotificationChannelAssociationsRequest {}
/**
 * @public
 *
 * The output of {@link ListManagedNotificationChannelAssociationsCommand}.
 */
export interface ListManagedNotificationChannelAssociationsCommandOutput extends ListManagedNotificationChannelAssociationsResponse, __MetadataBearer {}

/**
 * Returns a list of Account contacts and Channels associated with a `ManagedNotificationConfiguration`, in paginated format.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NotificationsClient, ListManagedNotificationChannelAssociationsCommand } from "@aws-sdk/client-notifications"; // ES Modules import
 * // const { NotificationsClient, ListManagedNotificationChannelAssociationsCommand } = require("@aws-sdk/client-notifications"); // CommonJS import
 * // import type { NotificationsClientConfig } from "@aws-sdk/client-notifications";
 * const config = {}; // type is NotificationsClientConfig
 * const client = new NotificationsClient(config);
 * const input = { // ListManagedNotificationChannelAssociationsRequest
 *   managedNotificationConfigurationArn: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListManagedNotificationChannelAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // ListManagedNotificationChannelAssociationsResponse
 * //   nextToken: "STRING_VALUE",
 * //   channelAssociations: [ // ManagedNotificationChannelAssociations // required
 * //     { // ManagedNotificationChannelAssociationSummary
 * //       channelIdentifier: "STRING_VALUE", // required
 * //       channelType: "MOBILE" || "CHATBOT" || "EMAIL" || "ACCOUNT_CONTACT", // required
 * //       overrideOption: "STRING_VALUE",
 * //       isSensitiveEventsSubscribed: true || false,
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListManagedNotificationChannelAssociationsCommandInput - {@link ListManagedNotificationChannelAssociationsCommandInput}
 * @returns {@link ListManagedNotificationChannelAssociationsCommandOutput}
 * @see {@link ListManagedNotificationChannelAssociationsCommandInput} for command's `input` shape.
 * @see {@link ListManagedNotificationChannelAssociationsCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Request references a resource which does not exist.
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
export class ListManagedNotificationChannelAssociationsCommand extends command<ListManagedNotificationChannelAssociationsCommandInput, ListManagedNotificationChannelAssociationsCommandOutput>(
  _ep0,
  _mw0,
  "ListManagedNotificationChannelAssociations",
  ListManagedNotificationChannelAssociations$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListManagedNotificationChannelAssociationsRequest;
      output: ListManagedNotificationChannelAssociationsResponse;
    };
    sdk: {
      input: ListManagedNotificationChannelAssociationsCommandInput;
      output: ListManagedNotificationChannelAssociationsCommandOutput;
    };
  };
}
