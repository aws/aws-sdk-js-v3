// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetManagedNotificationEventRequest, GetManagedNotificationEventResponse } from "../models/models_0";
import type { NotificationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NotificationsClient";
import { GetManagedNotificationEvent$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetManagedNotificationEventCommand}.
 */
export interface GetManagedNotificationEventCommandInput extends GetManagedNotificationEventRequest {}
/**
 * @public
 *
 * The output of {@link GetManagedNotificationEventCommand}.
 */
export interface GetManagedNotificationEventCommandOutput
  extends GetManagedNotificationEventResponse,
    __MetadataBearer {}

/**
 * <p>Returns a specified <code>ManagedNotificationEvent</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NotificationsClient, GetManagedNotificationEventCommand } from "@aws-sdk/client-notifications"; // ES Modules import
 * // const { NotificationsClient, GetManagedNotificationEventCommand } = require("@aws-sdk/client-notifications"); // CommonJS import
 * // import type { NotificationsClientConfig } from "@aws-sdk/client-notifications";
 * const config = {}; // type is NotificationsClientConfig
 * const client = new NotificationsClient(config);
 * const input = { // GetManagedNotificationEventRequest
 *   arn: "STRING_VALUE", // required
 *   locale: "STRING_VALUE",
 * };
 * const command = new GetManagedNotificationEventCommand(input);
 * const response = await client.send(command);
 * // { // GetManagedNotificationEventResponse
 * //   arn: "STRING_VALUE", // required
 * //   managedNotificationConfigurationArn: "STRING_VALUE", // required
 * //   creationTime: new Date("TIMESTAMP"), // required
 * //   content: { // ManagedNotificationEvent
 * //     schemaVersion: "STRING_VALUE", // required
 * //     id: "STRING_VALUE", // required
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
 * //     organizationalUnitId: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetManagedNotificationEventCommandInput - {@link GetManagedNotificationEventCommandInput}
 * @returns {@link GetManagedNotificationEventCommandOutput}
 * @see {@link GetManagedNotificationEventCommandInput} for command's `input` shape.
 * @see {@link GetManagedNotificationEventCommandOutput} for command's `response` shape.
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
export class GetManagedNotificationEventCommand extends $Command
  .classBuilder<
    GetManagedNotificationEventCommandInput,
    GetManagedNotificationEventCommandOutput,
    NotificationsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NotificationsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Notifications", "GetManagedNotificationEvent", {})
  .n("NotificationsClient", "GetManagedNotificationEventCommand")
  .sc(GetManagedNotificationEvent$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetManagedNotificationEventRequest;
      output: GetManagedNotificationEventResponse;
    };
    sdk: {
      input: GetManagedNotificationEventCommandInput;
      output: GetManagedNotificationEventCommandOutput;
    };
  };
}
