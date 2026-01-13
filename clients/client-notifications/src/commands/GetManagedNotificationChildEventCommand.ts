// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  GetManagedNotificationChildEventRequest,
  GetManagedNotificationChildEventResponse,
} from "../models/models_0";
import type { NotificationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NotificationsClient";
import { GetManagedNotificationChildEvent$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetManagedNotificationChildEventCommand}.
 */
export interface GetManagedNotificationChildEventCommandInput extends GetManagedNotificationChildEventRequest {}
/**
 * @public
 *
 * The output of {@link GetManagedNotificationChildEventCommand}.
 */
export interface GetManagedNotificationChildEventCommandOutput extends GetManagedNotificationChildEventResponse, __MetadataBearer {}

/**
 * <p>Returns the child event of a specific given <code>ManagedNotificationEvent</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NotificationsClient, GetManagedNotificationChildEventCommand } from "@aws-sdk/client-notifications"; // ES Modules import
 * // const { NotificationsClient, GetManagedNotificationChildEventCommand } = require("@aws-sdk/client-notifications"); // CommonJS import
 * // import type { NotificationsClientConfig } from "@aws-sdk/client-notifications";
 * const config = {}; // type is NotificationsClientConfig
 * const client = new NotificationsClient(config);
 * const input = { // GetManagedNotificationChildEventRequest
 *   arn: "STRING_VALUE", // required
 *   locale: "STRING_VALUE",
 * };
 * const command = new GetManagedNotificationChildEventCommand(input);
 * const response = await client.send(command);
 * // { // GetManagedNotificationChildEventResponse
 * //   arn: "STRING_VALUE", // required
 * //   managedNotificationConfigurationArn: "STRING_VALUE", // required
 * //   creationTime: new Date("TIMESTAMP"), // required
 * //   content: { // ManagedNotificationChildEvent
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
 * //     aggregateManagedNotificationEventArn: "STRING_VALUE", // required
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
 * //     aggregationDetail: { // AggregationDetail
 * //       summarizationDimensions: [ // SummarizationDimensionDetails
 * //         { // SummarizationDimensionDetail
 * //           name: "STRING_VALUE", // required
 * //           value: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetManagedNotificationChildEventCommandInput - {@link GetManagedNotificationChildEventCommandInput}
 * @returns {@link GetManagedNotificationChildEventCommandOutput}
 * @see {@link GetManagedNotificationChildEventCommandInput} for command's `input` shape.
 * @see {@link GetManagedNotificationChildEventCommandOutput} for command's `response` shape.
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
export class GetManagedNotificationChildEventCommand extends $Command
  .classBuilder<
    GetManagedNotificationChildEventCommandInput,
    GetManagedNotificationChildEventCommandOutput,
    NotificationsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NotificationsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Notifications", "GetManagedNotificationChildEvent", {})
  .n("NotificationsClient", "GetManagedNotificationChildEventCommand")
  .sc(GetManagedNotificationChildEvent$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetManagedNotificationChildEventRequest;
      output: GetManagedNotificationChildEventResponse;
    };
    sdk: {
      input: GetManagedNotificationChildEventCommandInput;
      output: GetManagedNotificationChildEventCommandOutput;
    };
  };
}
