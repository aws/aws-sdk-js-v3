// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListInsightsDataRequest, ListInsightsDataResponse } from "../models/models_0";
import { ListInsightsData$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListInsightsDataCommand}.
 */
export interface ListInsightsDataCommandInput extends ListInsightsDataRequest {}
/**
 * @public
 *
 * The output of {@link ListInsightsDataCommand}.
 */
export interface ListInsightsDataCommandOutput extends ListInsightsDataResponse, __MetadataBearer {}

/**
 * Returns Insights events generated on a trail that logs data events. You can list Insights events that occurred in a Region within the last 90 days.
 *
 * ListInsightsData supports the following Dimensions for Insights events:
 *
 * - Event ID
 * - Event name
 * - Event source
 *
 * All dimensions are optional. The default number of results returned is 50, with a maximum of 50 possible. The response includes a token that you can use to get the next page of results.
 *
 * The rate of ListInsightsData requests is limited to two per second, per account, per Region. If this limit is exceeded, a throttling error occurs.
 *
 * > **Note:** For data event Insights on organization trails, only the management account and delegated administrator accounts can call `ListInsightsData`. For these callers, the API returns Insights events only for the caller's own account. Member accounts cannot call this API on organization trails.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudTrailClient, ListInsightsDataCommand } from "@aws-sdk/client-cloudtrail"; // ES Modules import
 * // const { CloudTrailClient, ListInsightsDataCommand } = require("@aws-sdk/client-cloudtrail"); // CommonJS import
 * // import type { CloudTrailClientConfig } from "@aws-sdk/client-cloudtrail";
 * const config = {}; // type is CloudTrailClientConfig
 * const client = new CloudTrailClient(config);
 * const input = { // ListInsightsDataRequest
 *   InsightSource: "STRING_VALUE", // required
 *   DataType: "InsightsEvents", // required
 *   Dimensions: { // ListInsightsDataDimensions
 *     "<keys>": "STRING_VALUE",
 *   },
 *   StartTime: new Date("TIMESTAMP"),
 *   EndTime: new Date("TIMESTAMP"),
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListInsightsDataCommand(input);
 * const response = await client.send(command);
 * // { // ListInsightsDataResponse
 * //   Events: [ // EventsList
 * //     { // Event
 * //       EventId: "STRING_VALUE",
 * //       EventName: "STRING_VALUE",
 * //       ReadOnly: "STRING_VALUE",
 * //       AccessKeyId: "STRING_VALUE",
 * //       EventTime: new Date("TIMESTAMP"),
 * //       EventSource: "STRING_VALUE",
 * //       Username: "STRING_VALUE",
 * //       Resources: [ // ResourceList
 * //         { // Resource
 * //           ResourceType: "STRING_VALUE",
 * //           ResourceName: "STRING_VALUE",
 * //         },
 * //       ],
 * //       CloudTrailEvent: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListInsightsDataCommandInput - {@link ListInsightsDataCommandInput}
 * @returns {@link ListInsightsDataCommandOutput}
 * @see {@link ListInsightsDataCommandInput} for command's `input` shape.
 * @see {@link ListInsightsDataCommandOutput} for command's `response` shape.
 * @see {@link CloudTrailClientResolvedConfig | config} for CloudTrailClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * The request includes a parameter that is not valid.
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *
 * This exception is thrown when the requested operation is not permitted.
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *
 * This exception is thrown when the requested operation is not supported.
 *
 * @throws {@link CloudTrailServiceException}
 *
 * Base exception class for all service exceptions from CloudTrail service.
 *
 * @public
 */
export class ListInsightsDataCommand extends command<ListInsightsDataCommandInput, ListInsightsDataCommandOutput>(
  _ep0,
  _mw0,
  "ListInsightsData",
  ListInsightsData$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListInsightsDataRequest;
      output: ListInsightsDataResponse;
    };
    sdk: {
      input: ListInsightsDataCommandInput;
      output: ListInsightsDataCommandOutput;
    };
  };
}
