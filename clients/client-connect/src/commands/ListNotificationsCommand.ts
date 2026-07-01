// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListNotificationsRequest, ListNotificationsResponse } from "../models/models_2";
import { ListNotifications$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListNotificationsCommand}.
 */
export interface ListNotificationsCommandInput extends ListNotificationsRequest {}
/**
 * @public
 *
 * The output of {@link ListNotificationsCommand}.
 */
export interface ListNotificationsCommandOutput extends ListNotificationsResponse, __MetadataBearer {}

/**
 * <p>Retrieves a paginated list of all notifications in the Amazon Connect instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ListNotificationsCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ListNotificationsCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // ListNotificationsRequest
 *   InstanceId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListNotificationsCommand(input);
 * const response = await client.send(command);
 * // { // ListNotificationsResponse
 * //   NextToken: "STRING_VALUE",
 * //   NotificationSummaryList: [ // NotificationSummaryList // required
 * //     { // Notification
 * //       Content: { // NotificationContent
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       Id: "STRING_VALUE", // required
 * //       Arn: "STRING_VALUE", // required
 * //       Priority: "URGENT" || "HIGH" || "LOW",
 * //       Recipients: [ // RecipientList
 * //         "STRING_VALUE",
 * //       ],
 * //       LastModifiedTime: new Date("TIMESTAMP"), // required
 * //       CreatedAt: new Date("TIMESTAMP"),
 * //       ExpiresAt: new Date("TIMESTAMP"),
 * //       LastModifiedRegion: "STRING_VALUE",
 * //       Tags: { // TagMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListNotificationsCommandInput - {@link ListNotificationsCommandInput}
 * @returns {@link ListNotificationsCommandOutput}
 * @see {@link ListNotificationsCommandInput} for command's `input` shape.
 * @see {@link ListNotificationsCommandOutput} for command's `response` shape.
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
export class ListNotificationsCommand extends command<ListNotificationsCommandInput, ListNotificationsCommandOutput>(
  _ep0,
  _mw0,
  "ListNotifications",
  ListNotifications$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListNotificationsRequest;
      output: ListNotificationsResponse;
    };
    sdk: {
      input: ListNotificationsCommandInput;
      output: ListNotificationsCommandOutput;
    };
  };
}
