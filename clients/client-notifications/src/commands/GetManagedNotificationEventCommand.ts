// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetManagedNotificationEventRequest, GetManagedNotificationEventResponse } from "../models/models_0";
import { GetManagedNotificationEvent$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface GetManagedNotificationEventCommandOutput extends GetManagedNotificationEventResponse, __MetadataBearer {}

/**
 * Returns a specified `ManagedNotificationEvent`.
 *
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
 * //       markupDescription: "STRING_VALUE",
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
 * //     attachments: [ // NotificationEventAttachmentList
 * //       { // NotificationEventAttachment
 * //         displayName: "STRING_VALUE", // required
 * //         attachmentDownloadUrl: "STRING_VALUE",
 * //         contentType: "STRING_VALUE", // required
 * //       },
 * //     ],
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
export class GetManagedNotificationEventCommand extends command<GetManagedNotificationEventCommandInput, GetManagedNotificationEventCommandOutput>(
  _ep0,
  _mw0,
  "GetManagedNotificationEvent",
  GetManagedNotificationEvent$
) {
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
