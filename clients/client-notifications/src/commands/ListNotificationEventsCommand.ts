// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListNotificationEventsRequest, ListNotificationEventsResponse } from "../models/models_0";
import { NotificationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NotificationsClient";
import { de_ListNotificationEventsCommand, se_ListNotificationEventsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListNotificationEventsCommand}.
 */
export interface ListNotificationEventsCommandInput extends ListNotificationEventsRequest {}
/**
 * @public
 *
 * The output of {@link ListNotificationEventsCommand}.
 */
export interface ListNotificationEventsCommandOutput extends ListNotificationEventsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of <code>NotificationEvents</code> according to specified filters, in reverse chronological order (newest first).</p>
 *          <important>
 *             <p>User Notifications stores notifications in the individual Regions you register as notification hubs and the Region of the source event rule. ListNotificationEvents only returns notifications stored in the same Region in which the action is called.
 * 	  User Notifications doesn't backfill notifications to new Regions selected as notification hubs. For this reason, we recommend that you make calls in your oldest registered notification hub.
 * 	  For more information, see <a href="https://docs.aws.amazon.com/notifications/latest/userguide/notification-hubs.html">Notification hubs</a> in the <i>Amazon Web Services User Notifications User Guide</i>.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NotificationsClient, ListNotificationEventsCommand } from "@aws-sdk/client-notifications"; // ES Modules import
 * // const { NotificationsClient, ListNotificationEventsCommand } = require("@aws-sdk/client-notifications"); // CommonJS import
 * const client = new NotificationsClient(config);
 * const input = { // ListNotificationEventsRequest
 *   startTime: new Date("TIMESTAMP"),
 *   endTime: new Date("TIMESTAMP"),
 *   locale: "STRING_VALUE",
 *   source: "STRING_VALUE",
 *   includeChildEvents: true || false,
 *   aggregateNotificationEventArn: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListNotificationEventsCommand(input);
 * const response = await client.send(command);
 * // { // ListNotificationEventsResponse
 * //   nextToken: "STRING_VALUE",
 * //   notificationEvents: [ // NotificationEvents // required
 * //     { // NotificationEventOverview
 * //       arn: "STRING_VALUE", // required
 * //       notificationConfigurationArn: "STRING_VALUE", // required
 * //       relatedAccount: "STRING_VALUE", // required
 * //       creationTime: new Date("TIMESTAMP"), // required
 * //       notificationEvent: { // NotificationEventSummary
 * //         schemaVersion: "STRING_VALUE", // required
 * //         sourceEventMetadata: { // SourceEventMetadataSummary
 * //           eventOriginRegion: "STRING_VALUE",
 * //           source: "STRING_VALUE", // required
 * //           eventType: "STRING_VALUE", // required
 * //         },
 * //         messageComponents: { // MessageComponentsSummary
 * //           headline: "STRING_VALUE", // required
 * //         },
 * //         eventStatus: "STRING_VALUE", // required
 * //         notificationType: "STRING_VALUE", // required
 * //       },
 * //       aggregationEventType: "STRING_VALUE",
 * //       aggregateNotificationEventArn: "STRING_VALUE",
 * //       aggregationSummary: { // AggregationSummary
 * //         eventCount: Number("int"), // required
 * //         aggregatedBy: [ // AggregationKeys // required
 * //           { // AggregationKey
 * //             name: "STRING_VALUE", // required
 * //             value: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //         aggregatedAccounts: { // SummarizationDimensionOverview
 * //           name: "STRING_VALUE", // required
 * //           count: Number("int"), // required
 * //           sampleValues: [ // SampleAggregationDimensionValues
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //         aggregatedRegions: {
 * //           name: "STRING_VALUE", // required
 * //           count: Number("int"), // required
 * //           sampleValues: [
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //         aggregatedOrganizationalUnits: {
 * //           name: "STRING_VALUE", // required
 * //           count: Number("int"), // required
 * //           sampleValues: [
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //         additionalSummarizationDimensions: [ // SummarizationDimensionOverviews
 * //           {
 * //             name: "STRING_VALUE", // required
 * //             count: Number("int"), // required
 * //             sampleValues: [
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //         ],
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListNotificationEventsCommandInput - {@link ListNotificationEventsCommandInput}
 * @returns {@link ListNotificationEventsCommandOutput}
 * @see {@link ListNotificationEventsCommandInput} for command's `input` shape.
 * @see {@link ListNotificationEventsCommandOutput} for command's `response` shape.
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
export class ListNotificationEventsCommand extends $Command
  .classBuilder<
    ListNotificationEventsCommandInput,
    ListNotificationEventsCommandOutput,
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
  .s("Notifications", "ListNotificationEvents", {})
  .n("NotificationsClient", "ListNotificationEventsCommand")
  .f(void 0, void 0)
  .ser(se_ListNotificationEventsCommand)
  .de(de_ListNotificationEventsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListNotificationEventsRequest;
      output: ListNotificationEventsResponse;
    };
    sdk: {
      input: ListNotificationEventsCommandInput;
      output: ListNotificationEventsCommandOutput;
    };
  };
}
