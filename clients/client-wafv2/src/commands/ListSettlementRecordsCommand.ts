// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListSettlementRecordsRequest, ListSettlementRecordsResponse } from "../models/models_0";
import { ListSettlementRecords$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, WAFV2ClientResolvedConfig } from "../WAFV2Client";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListSettlementRecordsCommand}.
 */
export interface ListSettlementRecordsCommandInput extends ListSettlementRecordsRequest {}
/**
 * @public
 *
 * The output of {@link ListSettlementRecordsCommand}.
 */
export interface ListSettlementRecordsCommandOutput extends ListSettlementRecordsResponse, __MetadataBearer {}

/**
 * <p>Retrieves individual settlement transaction records for monetization. Each record represents a single payment transaction between a client and your protected resource. This operation is only available for <code>CLOUDFRONT</code> scope. The maximum supported time window is 90 days. When no <code>CurrencyMode</code> filter is provided, results default to <code>REAL</code>. To retrieve test data, include a <code>CurrencyMode</code> filter with the value <code>TEST</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFV2Client, ListSettlementRecordsCommand } from "@aws-sdk/client-wafv2"; // ES Modules import
 * // const { WAFV2Client, ListSettlementRecordsCommand } = require("@aws-sdk/client-wafv2"); // CommonJS import
 * // import type { WAFV2ClientConfig } from "@aws-sdk/client-wafv2";
 * const config = {}; // type is WAFV2ClientConfig
 * const client = new WAFV2Client(config);
 * const input = { // ListSettlementRecordsRequest
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
 *   SortBy: "TIMESTAMP" || "AMOUNT" || "NAME" || "STATUS",
 *   SortOrder: "ASC" || "DESC",
 *   Limit: Number("int"),
 *   NextMarker: "STRING_VALUE",
 * };
 * const command = new ListSettlementRecordsCommand(input);
 * const response = await client.send(command);
 * // { // ListSettlementRecordsResponse
 * //   Settlements: [ // SettlementRecordList
 * //     { // SettlementRecord
 * //       Timestamp: new Date("TIMESTAMP"), // required
 * //       PayerAddress: "STRING_VALUE",
 * //       WalletAddress: "STRING_VALUE",
 * //       Status: "SETTLED" || "PENDING" || "FAILED" || "SERVICE_ERROR" || "SKIPPED_ORIGIN_ERROR" || "DUPLICATE", // required
 * //       Amount: "STRING_VALUE", // required
 * //       Currency: "USDC",
 * //       Network: "STRING_VALUE",
 * //       TransactionId: "STRING_VALUE",
 * //       RequestId: "STRING_VALUE",
 * //       SourceName: "STRING_VALUE",
 * //       Organization: "STRING_VALUE",
 * //       SourceCategory: "STRING_VALUE",
 * //       Intent: "STRING_VALUE",
 * //       Verified: true || false,
 * //       ContentPath: "STRING_VALUE",
 * //       WebAclArn: "STRING_VALUE",
 * //       RequestTimestamp: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextMarker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSettlementRecordsCommandInput - {@link ListSettlementRecordsCommandInput}
 * @returns {@link ListSettlementRecordsCommandOutput}
 * @see {@link ListSettlementRecordsCommandInput} for command's `input` shape.
 * @see {@link ListSettlementRecordsCommandOutput} for command's `response` shape.
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
export class ListSettlementRecordsCommand extends $Command
  .classBuilder<
    ListSettlementRecordsCommandInput,
    ListSettlementRecordsCommandOutput,
    WAFV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WAFV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSWAF_20190729", "ListSettlementRecords", {})
  .n("WAFV2Client", "ListSettlementRecordsCommand")
  .sc(ListSettlementRecords$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSettlementRecordsRequest;
      output: ListSettlementRecordsResponse;
    };
    sdk: {
      input: ListSettlementRecordsCommandInput;
      output: ListSettlementRecordsCommandOutput;
    };
  };
}
