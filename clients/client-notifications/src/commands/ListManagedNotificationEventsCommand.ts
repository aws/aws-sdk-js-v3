// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListManagedNotificationEventsRequest, ListManagedNotificationEventsResponse } from "../models/models_0";
import { NotificationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NotificationsClient";
import {
  de_ListManagedNotificationEventsCommand,
  se_ListManagedNotificationEventsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListManagedNotificationEventsCommand}.
 */
export interface ListManagedNotificationEventsCommandInput extends ListManagedNotificationEventsRequest {}
/**
 * @public
 *
 * The output of {@link ListManagedNotificationEventsCommand}.
 */
export interface ListManagedNotificationEventsCommandOutput
  extends ListManagedNotificationEventsResponse,
    __MetadataBearer {}

/**
 * <p>Returns a list of Managed Notification Events according to specified filters, ordered by creation time in reverse chronological order (newest first).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NotificationsClient, ListManagedNotificationEventsCommand } from "@aws-sdk/client-notifications"; // ES Modules import
 * // const { NotificationsClient, ListManagedNotificationEventsCommand } = require("@aws-sdk/client-notifications"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new NotificationsClient(config);
 * const input = { // ListManagedNotificationEventsRequest
 *   startTime: new Date("TIMESTAMP"),
 *   endTime: new Date("TIMESTAMP"),
 *   locale: "STRING_VALUE",
 *   source: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   organizationalUnitId: "STRING_VALUE",
 *   relatedAccount: "STRING_VALUE",
 * };
 * const command = new ListManagedNotificationEventsCommand(input);
 * const response = await client.send(command);
 * // { // ListManagedNotificationEventsResponse
 * //   nextToken: "STRING_VALUE",
 * //   managedNotificationEvents: [ // ManagedNotificationEvents // required
 * //     { // ManagedNotificationEventOverview
 * //       arn: "STRING_VALUE", // required
 * //       managedNotificationConfigurationArn: "STRING_VALUE", // required
 * //       relatedAccount: "STRING_VALUE", // required
 * //       creationTime: new Date("TIMESTAMP"), // required
 * //       notificationEvent: { // ManagedNotificationEventSummary
 * //         schemaVersion: "STRING_VALUE", // required
 * //         sourceEventMetadata: { // ManagedSourceEventMetadataSummary
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
 * //       organizationalUnitId: "STRING_VALUE",
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
 * //       aggregatedNotificationRegions: [ // AggregatedNotificationRegions
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListManagedNotificationEventsCommandInput - {@link ListManagedNotificationEventsCommandInput}
 * @returns {@link ListManagedNotificationEventsCommandOutput}
 * @see {@link ListManagedNotificationEventsCommandInput} for command's `input` shape.
 * @see {@link ListManagedNotificationEventsCommandOutput} for command's `response` shape.
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
 * @public
 */
export class ListManagedNotificationEventsCommand extends $Command
  .classBuilder<
    ListManagedNotificationEventsCommandInput,
    ListManagedNotificationEventsCommandOutput,
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
  .s("Notifications", "ListManagedNotificationEvents", {})
  .n("NotificationsClient", "ListManagedNotificationEventsCommand")
  .f(void 0, void 0)
  .ser(se_ListManagedNotificationEventsCommand)
  .de(de_ListManagedNotificationEventsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListManagedNotificationEventsRequest;
      output: ListManagedNotificationEventsResponse;
    };
    sdk: {
      input: ListManagedNotificationEventsCommandInput;
      output: ListManagedNotificationEventsCommandOutput;
    };
  };
}
