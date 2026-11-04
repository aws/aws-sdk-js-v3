// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListSettlementRecordsRequest, ListSettlementRecordsResponse } from "../models/models_0";
import { ListSettlementRecords$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Retrieves individual settlement transaction records for monetization. Each record represents a single payment transaction between a client and your protected resource. This operation is only available for `CLOUDFRONT` scope. The maximum supported time window is 90 days. When no `CurrencyMode` filter is provided, results default to `REAL`. To retrieve test data, include a `CurrencyMode` filter with the value `TEST`.
 *
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
export class ListSettlementRecordsCommand extends command<ListSettlementRecordsCommandInput, ListSettlementRecordsCommandOutput>(
  _ep0,
  _mw0,
  "ListSettlementRecords",
  ListSettlementRecords$
) {
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
