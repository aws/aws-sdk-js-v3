// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetRevenueStatisticsTimeSeriesRequest, GetRevenueStatisticsTimeSeriesResponse } from "../models/models_0";
import { GetRevenueStatisticsTimeSeries$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetRevenueStatisticsTimeSeriesCommand}.
 */
export interface GetRevenueStatisticsTimeSeriesCommandInput extends GetRevenueStatisticsTimeSeriesRequest {}
/**
 * @public
 *
 * The output of {@link GetRevenueStatisticsTimeSeriesCommand}.
 */
export interface GetRevenueStatisticsTimeSeriesCommandOutput extends GetRevenueStatisticsTimeSeriesResponse, __MetadataBearer {}

/**
 * <p>Retrieves time series data for monetization revenue. Returns data points aggregated at the specified interval for the given time window. This operation is only available for <code>CLOUDFRONT</code> scope. The maximum supported time window is 90 days. When no <code>CurrencyMode</code> filter is provided, results default to <code>REAL</code>. To retrieve test data, include a <code>CurrencyMode</code> filter with the value <code>TEST</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFV2Client, GetRevenueStatisticsTimeSeriesCommand } from "@aws-sdk/client-wafv2"; // ES Modules import
 * // const { WAFV2Client, GetRevenueStatisticsTimeSeriesCommand } = require("@aws-sdk/client-wafv2"); // CommonJS import
 * // import type { WAFV2ClientConfig } from "@aws-sdk/client-wafv2";
 * const config = {}; // type is WAFV2ClientConfig
 * const client = new WAFV2Client(config);
 * const input = { // GetRevenueStatisticsTimeSeriesRequest
 *   StatisticType: "DATE_HISTOGRAM" || "PAYMENT_TRAFFIC", // required
 *   TimeWindow: { // TimeWindow
 *     StartTime: new Date("TIMESTAMP"), // required
 *     EndTime: new Date("TIMESTAMP"), // required
 *   },
 *   Scope: "CLOUDFRONT" || "REGIONAL", // required
 *   Interval: "MINUTELY" || "FIVE_MINUTELY" || "HOURLY" || "DAILY", // required
 *   Currency: "USDC", // required
 *   GroupBy: "NAME" || "CATEGORY" || "INTENT" || "ORGANIZATION" || "WEBACL",
 *   Filters: [ // MonetizationFilterList
 *     { // MonetizationFilter
 *       Name: "STRING_VALUE", // required
 *       Values: [ // MonetizationFilterValueList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   Limit: Number("int"),
 *   NextMarker: "STRING_VALUE",
 * };
 * const command = new GetRevenueStatisticsTimeSeriesCommand(input);
 * const response = await client.send(command);
 * // { // GetRevenueStatisticsTimeSeriesResponse
 * //   DataPoints: [ // DataPointsList
 * //     { // DataPointEntry
 * //       Date: new Date("TIMESTAMP"),
 * //       MonetizeServedCount: Number("long"),
 * //       SettledCount: Number("long"),
 * //       TotalAmount: "STRING_VALUE",
 * //       Category: "STRING_VALUE",
 * //       Intent: "STRING_VALUE",
 * //       GroupByValue: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextMarker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetRevenueStatisticsTimeSeriesCommandInput - {@link GetRevenueStatisticsTimeSeriesCommandInput}
 * @returns {@link GetRevenueStatisticsTimeSeriesCommandOutput}
 * @see {@link GetRevenueStatisticsTimeSeriesCommandInput} for command's `input` shape.
 * @see {@link GetRevenueStatisticsTimeSeriesCommandOutput} for command's `response` shape.
 * @see {@link WAFV2ClientResolvedConfig | config} for WAFV2Client's `config` shape.
 *
 * @throws {@link WAFInternalErrorException} (server fault)
 *  <p>Your request is valid, but WAF couldn’t perform the operation because of a system
 *          problem. Retry your request. </p>
 *
 * @throws {@link WAFInvalidOperationException} (client fault)
 *  <p>The operation isn't valid. </p>
 *
 * @throws {@link WAFInvalidParameterException} (client fault)
 *  <p>The operation failed because WAF didn't recognize a parameter in the request. For
 *          example: </p>
 *          <ul>
 *             <li>
 *                <p>You specified a parameter name or value that isn't valid.</p>
 *             </li>
 *             <li>
 *                <p>Your nested statement isn't valid. You might have tried to nest a statement that
 *                can’t be nested. </p>
 *             </li>
 *             <li>
 *                <p>You tried to update a <code>WebACL</code> with a <code>DefaultAction</code> that
 *                isn't among the types available at <a>DefaultAction</a>.</p>
 *             </li>
 *             <li>
 *                <p>Your request references an ARN that is malformed, or corresponds to a resource
 *                with which a web ACL can't be associated.</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link WAFNonexistentItemException} (client fault)
 *  <p>WAF couldn’t perform the operation because your resource doesn't exist.
 *        If you've just created a resource that you're using in this operation, you might
 *        just need to wait a few minutes. It can take from a few seconds to a number of minutes
 *        for changes to propagate. </p>
 *
 * @throws {@link WAFV2ServiceException}
 * <p>Base exception class for all service exceptions from WAFV2 service.</p>
 *
 *
 * @public
 */
export class GetRevenueStatisticsTimeSeriesCommand extends command<GetRevenueStatisticsTimeSeriesCommandInput, GetRevenueStatisticsTimeSeriesCommandOutput>(
  _ep0,
  _mw0,
  "GetRevenueStatisticsTimeSeries",
  GetRevenueStatisticsTimeSeries$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetRevenueStatisticsTimeSeriesRequest;
      output: GetRevenueStatisticsTimeSeriesResponse;
    };
    sdk: {
      input: GetRevenueStatisticsTimeSeriesCommandInput;
      output: GetRevenueStatisticsTimeSeriesCommandOutput;
    };
  };
}
