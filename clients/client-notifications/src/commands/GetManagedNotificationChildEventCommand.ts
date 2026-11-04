// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  GetManagedNotificationChildEventRequest,
  GetManagedNotificationChildEventResponse,
} from "../models/models_0";
import { GetManagedNotificationChildEvent$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Returns the child event of a specific given `ManagedNotificationEvent`.
 *
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
export class GetManagedNotificationChildEventCommand extends command<GetManagedNotificationChildEventCommandInput, GetManagedNotificationChildEventCommandOutput>(
  _ep0,
  _mw0,
  "GetManagedNotificationChildEvent",
  GetManagedNotificationChildEvent$
) {
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
