// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetRevenueStatisticsRequest, GetRevenueStatisticsResponse } from "../models/models_0";
import { GetRevenueStatistics$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetRevenueStatisticsCommand}.
 */
export interface GetRevenueStatisticsCommandInput extends GetRevenueStatisticsRequest {}
/**
 * @public
 *
 * The output of {@link GetRevenueStatisticsCommand}.
 */
export interface GetRevenueStatisticsCommandOutput extends GetRevenueStatisticsResponse, __MetadataBearer {}

/**
 * Retrieves ranked monetization statistics. Use the `StatisticType` parameter to specify the ranking: `TOP_SOURCES_BY_REVENUE` for top sources by revenue, or `TOP_PATHS_BY_REVENUE` for top content paths by revenue. This operation is only available for `CLOUDFRONT` scope. The maximum supported time window is 90 days. When no `CurrencyMode` filter is provided, results default to `REAL`. To retrieve test data, include a `CurrencyMode` filter with the value `TEST`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFV2Client, GetRevenueStatisticsCommand } from "@aws-sdk/client-wafv2"; // ES Modules import
 * // const { WAFV2Client, GetRevenueStatisticsCommand } = require("@aws-sdk/client-wafv2"); // CommonJS import
 * // import type { WAFV2ClientConfig } from "@aws-sdk/client-wafv2";
 * const config = {}; // type is WAFV2ClientConfig
 * const client = new WAFV2Client(config);
 * const input = { // GetRevenueStatisticsRequest
 *   StatisticType: "TOP_SOURCES_BY_REVENUE" || "TOP_PATHS_BY_REVENUE", // required
 *   TimeWindow: { // TimeWindow
 *     StartTime: new Date("TIMESTAMP"), // required
 *     EndTime: new Date("TIMESTAMP"), // required
 *   },
 *   Scope: "CLOUDFRONT" || "REGIONAL", // required
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
 *   NextMarker: "STRING_VALUE",
 *   Limit: Number("int"),
 *   SortBy: "REVENUE" || "PERCENTAGE" || "NAME",
 *   SortOrder: "ASC" || "DESC",
 * };
 * const command = new GetRevenueStatisticsCommand(input);
 * const response = await client.send(command);
 * // { // GetRevenueStatisticsResponse
 * //   SourceStatistics: [ // SourceStatisticsList
 * //     { // SourceStatistics
 * //       SourceName: "STRING_VALUE", // required
 * //       Percentage: Number("double"), // required
 * //       Amount: "STRING_VALUE", // required
 * //       RequestCount: Number("long"), // required
 * //       SourceCategory: "STRING_VALUE",
 * //       Intent: "STRING_VALUE",
 * //       Organization: "STRING_VALUE",
 * //       Verified: true || false,
 * //       GroupByValue: "STRING_VALUE",
 * //     },
 * //   ],
 * //   RevenuePathStatistics: [ // RevenuePathStatisticsList
 * //     { // RevenuePathStatistics
 * //       Path: "STRING_VALUE", // required
 * //       Percentage: Number("double"), // required
 * //       Amount: "STRING_VALUE", // required
 * //       RequestCount: Number("long"), // required
 * //     },
 * //   ],
 * //   NextMarker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetRevenueStatisticsCommandInput - {@link GetRevenueStatisticsCommandInput}
 * @returns {@link GetRevenueStatisticsCommandOutput}
 * @see {@link GetRevenueStatisticsCommandInput} for command's `input` shape.
 * @see {@link GetRevenueStatisticsCommandOutput} for command's `response` shape.
 * @see {@link WAFV2ClientResolvedConfig | config} for WAFV2Client's `config` shape.
 *
 * @throws {@link WAFInternalErrorException} (server fault)
 *
 * Your request is valid, but WAF couldn’t perform the operation because of a system problem. Retry your request.
 *
 * @throws {@link WAFInvalidOperationException} (client fault)
 *
 * The operation isn't valid.
 *
 * @throws {@link WAFInvalidParameterException} (client fault)
 *
 * The operation failed because WAF didn't recognize a parameter in the request. For example:
 *
 * - You specified a parameter name or value that isn't valid.
 * - Your nested statement isn't valid. You might have tried to nest a statement that can’t be nested.
 * - You tried to update a `WebACL` with a `DefaultAction` that isn't among the types available at DefaultAction.
 * - Your request references an ARN that is malformed, or corresponds to a resource with which a web ACL can't be associated.
 *
 * @throws {@link WAFNonexistentItemException} (client fault)
 *
 * WAF couldn’t perform the operation because your resource doesn't exist. If you've just created a resource that you're using in this operation, you might just need to wait a few minutes. It can take from a few seconds to a number of minutes for changes to propagate.
 *
 * @throws {@link WAFV2ServiceException}
 *
 * Base exception class for all service exceptions from WAFV2 service.
 *
 * @public
 */
export class GetRevenueStatisticsCommand extends command<GetRevenueStatisticsCommandInput, GetRevenueStatisticsCommandOutput>(
  _ep0,
  _mw0,
  "GetRevenueStatistics",
  GetRevenueStatistics$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetRevenueStatisticsRequest;
      output: GetRevenueStatisticsResponse;
    };
    sdk: {
      input: GetRevenueStatisticsCommandInput;
      output: GetRevenueStatisticsCommandOutput;
    };
  };
}
