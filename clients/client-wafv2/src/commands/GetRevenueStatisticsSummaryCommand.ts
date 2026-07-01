// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetRevenueStatisticsSummaryRequest, GetRevenueStatisticsSummaryResponse } from "../models/models_0";
import { GetRevenueStatisticsSummary$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetRevenueStatisticsSummaryCommand}.
 */
export interface GetRevenueStatisticsSummaryCommandInput extends GetRevenueStatisticsSummaryRequest {}
/**
 * @public
 *
 * The output of {@link GetRevenueStatisticsSummaryCommand}.
 */
export interface GetRevenueStatisticsSummaryCommandOutput extends GetRevenueStatisticsSummaryResponse, __MetadataBearer {}

/**
 * <p>Retrieves a summary of monetization revenue for the specified time window. Returns total revenue, revenue by verification tier, total settlements, and total HTTP 402 responses served. This operation is only available for <code>CLOUDFRONT</code> scope. The maximum supported time window is 90 days. When no <code>CurrencyMode</code> filter is provided, results default to <code>REAL</code>. To retrieve test data, include a <code>CurrencyMode</code> filter with the value <code>TEST</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFV2Client, GetRevenueStatisticsSummaryCommand } from "@aws-sdk/client-wafv2"; // ES Modules import
 * // const { WAFV2Client, GetRevenueStatisticsSummaryCommand } = require("@aws-sdk/client-wafv2"); // CommonJS import
 * // import type { WAFV2ClientConfig } from "@aws-sdk/client-wafv2";
 * const config = {}; // type is WAFV2ClientConfig
 * const client = new WAFV2Client(config);
 * const input = { // GetRevenueStatisticsSummaryRequest
 *   TimeWindow: { // TimeWindow
 *     StartTime: new Date("TIMESTAMP"), // required
 *     EndTime: new Date("TIMESTAMP"), // required
 *   },
 *   Scope: "CLOUDFRONT" || "REGIONAL", // required
 *   Currency: "USDC", // required
 *   Filters: [ // MonetizationFilterList
 *     { // MonetizationFilter
 *       Name: "STRING_VALUE", // required
 *       Values: [ // MonetizationFilterValueList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 * };
 * const command = new GetRevenueStatisticsSummaryCommand(input);
 * const response = await client.send(command);
 * // { // GetRevenueStatisticsSummaryResponse
 * //   RevenueBreakdown: { // RevenueBreakdown
 * //     TotalAmount: "STRING_VALUE",
 * //     VerifiedAmount: "STRING_VALUE",
 * //     UnverifiedAmount: "STRING_VALUE",
 * //     Currency: "USDC",
 * //     TotalSettled: Number("long"),
 * //     TotalMonetizeServed: Number("long"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetRevenueStatisticsSummaryCommandInput - {@link GetRevenueStatisticsSummaryCommandInput}
 * @returns {@link GetRevenueStatisticsSummaryCommandOutput}
 * @see {@link GetRevenueStatisticsSummaryCommandInput} for command's `input` shape.
 * @see {@link GetRevenueStatisticsSummaryCommandOutput} for command's `response` shape.
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
export class GetRevenueStatisticsSummaryCommand extends command<GetRevenueStatisticsSummaryCommandInput, GetRevenueStatisticsSummaryCommandOutput>(
  _ep0,
  _mw0,
  "GetRevenueStatisticsSummary",
  GetRevenueStatisticsSummary$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetRevenueStatisticsSummaryRequest;
      output: GetRevenueStatisticsSummaryResponse;
    };
    sdk: {
      input: GetRevenueStatisticsSummaryCommandInput;
      output: GetRevenueStatisticsSummaryCommandOutput;
    };
  };
}
