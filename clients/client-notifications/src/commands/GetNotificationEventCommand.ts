// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetNotificationEventRequest, GetNotificationEventResponse } from "../models/models_0";
import { NotificationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NotificationsClient";
import { de_GetNotificationEventCommand, se_GetNotificationEventCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetNotificationEventCommand}.
 */
export interface GetNotificationEventCommandInput extends GetNotificationEventRequest {}
/**
 * @public
 *
 * The output of {@link GetNotificationEventCommand}.
 */
export interface GetNotificationEventCommandOutput extends GetNotificationEventResponse, __MetadataBearer {}

/**
 * <p>Returns a specified <code>NotificationEvent</code>.</p> <important> <p>User Notifications stores notifications in the individual Regions you register as notification hubs and the Region of the source event rule. <code>GetNotificationEvent</code> only returns notifications stored in the same Region in which the action is called. User Notifications doesn't backfill notifications to new Regions selected as notification hubs. For this reason, we recommend that you make calls in your oldest registered notification hub. For more information, see <a href="https://docs.aws.amazon.com/notifications/latest/userguide/notification-hubs.html">Notification hubs</a> in the <i>Amazon Web Services User Notifications User Guide</i>.</p> </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NotificationsClient, GetNotificationEventCommand } from "@aws-sdk/client-notifications"; // ES Modules import
 * // const { NotificationsClient, GetNotificationEventCommand } = require("@aws-sdk/client-notifications"); // CommonJS import
 * const client = new NotificationsClient(config);
 * const input = { // GetNotificationEventRequest
 *   arn: "STRING_VALUE", // required
 *   locale: "STRING_VALUE",
 * };
 * const command = new GetNotificationEventCommand(input);
 * const response = await client.send(command);
 * // { // GetNotificationEventResponse
 * //   arn: "STRING_VALUE", // required
 * //   notificationConfigurationArn: "STRING_VALUE", // required
 * //   creationTime: new Date("TIMESTAMP"), // required
 * //   content: { // NotificationEventSchema
 * //     schemaVersion: "STRING_VALUE", // required
 * //     id: "STRING_VALUE", // required
 * //     sourceEventMetadata: { // SourceEventMetadata
 * //       eventTypeVersion: "STRING_VALUE", // required
 * //       sourceEventId: "STRING_VALUE", // required
 * //       eventOriginRegion: "STRING_VALUE",
 * //       relatedAccount: "STRING_VALUE", // required
 * //       source: "STRING_VALUE", // required
 * //       eventOccurrenceTime: new Date("TIMESTAMP"), // required
 * //       eventType: "STRING_VALUE", // required
 * //       relatedResources: [ // Resources // required
 * //         { // Resource
 * //           id: "STRING_VALUE",
 * //           arn: "STRING_VALUE",
 * //           detailUrl: "STRING_VALUE",
 * //           tags: [ // Tags
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       ],
 * //     },
 * //     messageComponents: { // MessageComponents
 * //       headline: "STRING_VALUE",
 * //       paragraphSummary: "STRING_VALUE",
 * //       completeDescription: "STRING_VALUE",
 * //       dimensions: [ // Dimensions
 * //         { // Dimension
 * //           name: "STRING_VALUE", // required
 * //           value: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //     },
 * //     sourceEventDetailUrl: "STRING_VALUE",
 * //     sourceEventDetailUrlDisplayText: "STRING_VALUE",
 * //     notificationType: "STRING_VALUE", // required
 * //     eventStatus: "STRING_VALUE",
 * //     aggregationEventType: "STRING_VALUE",
 * //     aggregateNotificationEventArn: "STRING_VALUE",
 * //     aggregationSummary: { // AggregationSummary
 * //       eventCount: Number("int"), // required
 * //       aggregatedBy: [ // AggregationKeys // required
 * //         { // AggregationKey
 * //           name: "STRING_VALUE", // required
 * //           value: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       aggregatedAccounts: { // SummarizationDimensionOverview
 * //         name: "STRING_VALUE", // required
 * //         count: Number("int"), // required
 * //         sampleValues: [ // SampleAggregationDimensionValues
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       aggregatedRegions: {
 * //         name: "STRING_VALUE", // required
 * //         count: Number("int"), // required
 * //         sampleValues: [
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       aggregatedOrganizationalUnits: {
 * //         name: "STRING_VALUE", // required
 * //         count: Number("int"), // required
 * //         sampleValues: [
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       additionalSummarizationDimensions: [ // SummarizationDimensionOverviews
 * //         {
 * //           name: "STRING_VALUE", // required
 * //           count: Number("int"), // required
 * //           sampleValues: [
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       ],
 * //     },
 * //     startTime: new Date("TIMESTAMP"),
 * //     endTime: new Date("TIMESTAMP"),
 * //     textParts: { // TextParts // required
 * //       "<keys>": { // TextPartValue
 * //         type: "STRING_VALUE", // required
 * //         displayText: "STRING_VALUE",
 * //         textByLocale: { // TextByLocale
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //         url: "STRING_VALUE",
 * //       },
 * //     },
 * //     media: [ // Media // required
 * //       { // MediaElement
 * //         mediaId: "STRING_VALUE", // required
 * //         type: "STRING_VALUE", // required
 * //         url: "STRING_VALUE", // required
 * //         caption: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     organizationalUnitId: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetNotificationEventCommandInput - {@link GetNotificationEventCommandInput}
 * @returns {@link GetNotificationEventCommandOutput}
 * @see {@link GetNotificationEventCommandInput} for command's `input` shape.
 * @see {@link GetNotificationEventCommandOutput} for command's `response` shape.
 * @see {@link NotificationsClientResolvedConfig | config} for NotificationsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error during processing of request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Request references a resource which does not exist. </p>
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
export class GetNotificationEventCommand extends $Command
  .classBuilder<
    GetNotificationEventCommandInput,
    GetNotificationEventCommandOutput,
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
  .s("Notifications", "GetNotificationEvent", {})
  .n("NotificationsClient", "GetNotificationEventCommand")
  .f(void 0, void 0)
  .ser(se_GetNotificationEventCommand)
  .de(de_GetNotificationEventCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetNotificationEventRequest;
      output: GetNotificationEventResponse;
    };
    sdk: {
      input: GetNotificationEventCommandInput;
      output: GetNotificationEventCommandOutput;
    };
  };
}
