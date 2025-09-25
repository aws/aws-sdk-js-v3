// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  ListManagedNotificationChildEventsRequest,
  ListManagedNotificationChildEventsResponse,
} from "../models/models_0";
import { NotificationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NotificationsClient";
import { ListManagedNotificationChildEvents } from "../schemas/schemas_5_Notification";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListManagedNotificationChildEventsCommand}.
 */
export interface ListManagedNotificationChildEventsCommandInput extends ListManagedNotificationChildEventsRequest {}
/**
 * @public
 *
 * The output of {@link ListManagedNotificationChildEventsCommand}.
 */
export interface ListManagedNotificationChildEventsCommandOutput
  extends ListManagedNotificationChildEventsResponse,
    __MetadataBearer {}

/**
 * <p>Returns a list of <code>ManagedNotificationChildEvents</code> for a specified aggregate <code>ManagedNotificationEvent</code>, ordered by creation time in reverse chronological order (newest first).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NotificationsClient, ListManagedNotificationChildEventsCommand } from "@aws-sdk/client-notifications"; // ES Modules import
 * // const { NotificationsClient, ListManagedNotificationChildEventsCommand } = require("@aws-sdk/client-notifications"); // CommonJS import
 * // import type { NotificationsClientConfig } from "@aws-sdk/client-notifications";
 * const config = {}; // type is NotificationsClientConfig
 * const client = new NotificationsClient(config);
 * const input = { // ListManagedNotificationChildEventsRequest
 *   aggregateManagedNotificationEventArn: "STRING_VALUE", // required
 *   startTime: new Date("TIMESTAMP"),
 *   endTime: new Date("TIMESTAMP"),
 *   locale: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   relatedAccount: "STRING_VALUE",
 *   organizationalUnitId: "STRING_VALUE",
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListManagedNotificationChildEventsCommand(input);
 * const response = await client.send(command);
 * // { // ListManagedNotificationChildEventsResponse
 * //   nextToken: "STRING_VALUE",
 * //   managedNotificationChildEvents: [ // ManagedNotificationChildEvents // required
 * //     { // ManagedNotificationChildEventOverview
 * //       arn: "STRING_VALUE", // required
 * //       managedNotificationConfigurationArn: "STRING_VALUE", // required
 * //       relatedAccount: "STRING_VALUE", // required
 * //       creationTime: new Date("TIMESTAMP"), // required
 * //       childEvent: { // ManagedNotificationChildEventSummary
 * //         schemaVersion: "STRING_VALUE", // required
 * //         sourceEventMetadata: { // ManagedSourceEventMetadataSummary
 * //           eventOriginRegion: "STRING_VALUE",
 * //           source: "STRING_VALUE", // required
 * //           eventType: "STRING_VALUE", // required
 * //         },
 * //         messageComponents: { // MessageComponentsSummary
 * //           headline: "STRING_VALUE", // required
 * //         },
 * //         aggregationDetail: { // AggregationDetail
 * //           summarizationDimensions: [ // SummarizationDimensionDetails
 * //             { // SummarizationDimensionDetail
 * //               name: "STRING_VALUE", // required
 * //               value: "STRING_VALUE", // required
 * //             },
 * //           ],
 * //         },
 * //         eventStatus: "STRING_VALUE", // required
 * //         notificationType: "STRING_VALUE", // required
 * //       },
 * //       aggregateManagedNotificationEventArn: "STRING_VALUE", // required
 * //       organizationalUnitId: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListManagedNotificationChildEventsCommandInput - {@link ListManagedNotificationChildEventsCommandInput}
 * @returns {@link ListManagedNotificationChildEventsCommandOutput}
 * @see {@link ListManagedNotificationChildEventsCommandInput} for command's `input` shape.
 * @see {@link ListManagedNotificationChildEventsCommandOutput} for command's `response` shape.
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
export class ListManagedNotificationChildEventsCommand extends $Command
  .classBuilder<
    ListManagedNotificationChildEventsCommandInput,
    ListManagedNotificationChildEventsCommandOutput,
    NotificationsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NotificationsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Notifications", "ListManagedNotificationChildEvents", {})
  .n("NotificationsClient", "ListManagedNotificationChildEventsCommand")
  .sc(ListManagedNotificationChildEvents)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListManagedNotificationChildEventsRequest;
      output: ListManagedNotificationChildEventsResponse;
    };
    sdk: {
      input: ListManagedNotificationChildEventsCommandInput;
      output: ListManagedNotificationChildEventsCommandOutput;
    };
  };
}
