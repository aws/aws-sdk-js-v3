// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeEventTypesRequest, DescribeEventTypesResponse } from "../models/models_0";
import { DescribeEventTypes$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeEventTypesCommand}.
 */
export interface DescribeEventTypesCommandInput extends DescribeEventTypesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeEventTypesCommand}.
 */
export interface DescribeEventTypesCommandOutput extends DescribeEventTypesResponse, __MetadataBearer {}

/**
 * Returns the event types that meet the specified filter criteria. You can use this API operation to find information about the Health event, such as the category, Amazon Web Services service, and event code. The metadata for each event appears in the [EventType](https://docs.aws.amazon.com/health/latest/APIReference/API_EventType.html) object.
 *
 * If you don't specify a filter criteria, the API operation returns all event types, in no particular order.
 *
 * > **Note:** This API operation uses pagination. Specify the `nextToken` parameter in the next request to return more results.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HealthClient, DescribeEventTypesCommand } from "@aws-sdk/client-health"; // ES Modules import
 * // const { HealthClient, DescribeEventTypesCommand } = require("@aws-sdk/client-health"); // CommonJS import
 * // import type { HealthClientConfig } from "@aws-sdk/client-health";
 * const config = {}; // type is HealthClientConfig
 * const client = new HealthClient(config);
 * const input = { // DescribeEventTypesRequest
 *   filter: { // EventTypeFilter
 *     eventTypeCodes: [ // EventTypeCodeList
 *       "STRING_VALUE",
 *     ],
 *     services: [ // serviceList
 *       "STRING_VALUE",
 *     ],
 *     eventTypeCategories: [ // EventTypeCategoryList
 *       "issue" || "accountNotification" || "scheduledChange" || "investigation",
 *     ],
 *     actionabilities: [ // EventTypeActionabilityList
 *       "ACTION_REQUIRED" || "ACTION_MAY_BE_REQUIRED" || "INFORMATIONAL",
 *     ],
 *     personas: [ // EventTypePersonaList
 *       "OPERATIONS" || "SECURITY" || "BILLING",
 *     ],
 *   },
 *   locale: "STRING_VALUE",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new DescribeEventTypesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeEventTypesResponse
 * //   eventTypes: [ // EventTypeList
 * //     { // EventType
 * //       service: "STRING_VALUE",
 * //       code: "STRING_VALUE",
 * //       category: "issue" || "accountNotification" || "scheduledChange" || "investigation",
 * //       actionability: "ACTION_REQUIRED" || "ACTION_MAY_BE_REQUIRED" || "INFORMATIONAL",
 * //       personas: [ // EventTypePersonaList
 * //         "OPERATIONS" || "SECURITY" || "BILLING",
 * //       ],
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeEventTypesCommandInput - {@link DescribeEventTypesCommandInput}
 * @returns {@link DescribeEventTypesCommandOutput}
 * @see {@link DescribeEventTypesCommandInput} for command's `input` shape.
 * @see {@link DescribeEventTypesCommandOutput} for command's `response` shape.
 * @see {@link HealthClientResolvedConfig | config} for HealthClient's `config` shape.
 *
 * @throws {@link InvalidPaginationToken} (client fault)
 *
 * The specified pagination token (`nextToken`) is not valid.
 *
 * @throws {@link UnsupportedLocale} (client fault)
 *
 * The specified locale is not supported.
 *
 * @throws {@link HealthServiceException}
 *
 * Base exception class for all service exceptions from Health service.
 *
 * @public
 */
export class DescribeEventTypesCommand extends command<DescribeEventTypesCommandInput, DescribeEventTypesCommandOutput>(
  _ep0,
  _mw0,
  "DescribeEventTypes",
  DescribeEventTypes$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeEventTypesRequest;
      output: DescribeEventTypesResponse;
    };
    sdk: {
      input: DescribeEventTypesCommandInput;
      output: DescribeEventTypesCommandOutput;
    };
  };
}
