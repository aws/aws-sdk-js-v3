// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListFinancialRecordsRequest, ListFinancialRecordsResponse } from "../models/models_0";
import { ListFinancialRecords$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListFinancialRecordsCommand}.
 */
export interface ListFinancialRecordsCommandInput extends ListFinancialRecordsRequest {}
/**
 * @public
 *
 * The output of {@link ListFinancialRecordsCommand}.
 */
export interface ListFinancialRecordsCommandOutput extends ListFinancialRecordsResponse, __MetadataBearer {}

/**
 * <p>Lists the financial records on your account, with the newest first by default. A financial record is an invoice or a credit memo. You must specify at least one record type in <code>types</code>. You can narrow the results further by settlement status and issue date. This operation returns summaries. To get the details that are specific to a record's type, use <code>GetFinancialRecord</code> or <code>BatchGetFinancialRecord</code>. Results are paginated. Use <code>nextToken</code> to retrieve more results.</p> <p>To use this operation, you must have Amazon Web Services Identity and Access Management (IAM) permission for both <code>payments:ListFinancialRecords</code> and <code>payments:GetPaymentStatus</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PaymentsClient, ListFinancialRecordsCommand } from "@aws-sdk/client-payments"; // ES Modules import
 * // const { PaymentsClient, ListFinancialRecordsCommand } = require("@aws-sdk/client-payments"); // CommonJS import
 * // import type { PaymentsClientConfig } from "@aws-sdk/client-payments";
 * const config = {}; // type is PaymentsClientConfig
 * const client = new PaymentsClient(config);
 * const input = { // ListFinancialRecordsRequest
 *   types: [ // FinancialRecordTypeList // required
 *     "INVOICE" || "CREDIT_MEMO",
 *   ],
 *   settlementStatuses: [ // SettlementStatusList
 *     "OPEN" || "CLOSED",
 *   ],
 *   issuedAfter: new Date("TIMESTAMP"),
 *   issuedBefore: new Date("TIMESTAMP"),
 *   sortBy: "ISSUED_AT",
 *   sortOrder: "ASCENDING" || "DESCENDING",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListFinancialRecordsCommand(input);
 * const response = await client.send(command);
 * // { // ListFinancialRecordsResponse
 * //   financialRecordSummaries: [ // FinancialRecordSummaryList // required
 * //     { // FinancialRecordSummary
 * //       id: "STRING_VALUE", // required
 * //       type: "INVOICE" || "CREDIT_MEMO", // required
 * //       businessUnit: { // BusinessUnit
 * //         merchantOfRecord: "STRING_VALUE", // required
 * //         lineOfBusiness: "AWS_CLOUD_SERVICES" || "PROSERVE_MARKETING_AND_TRAINING" || "AWS_MARKETPLACE",
 * //       },
 * //       amount: { // CurrencyAmount
 * //         value: "STRING_VALUE", // required
 * //         currency: "STRING_VALUE", // required
 * //       },
 * //       balances: { // Balances
 * //         outstanding: {
 * //           value: "STRING_VALUE", // required
 * //           currency: "STRING_VALUE", // required
 * //         },
 * //         processing: {
 * //           value: "STRING_VALUE", // required
 * //           currency: "STRING_VALUE", // required
 * //         },
 * //         settled: {
 * //           value: "STRING_VALUE", // required
 * //           currency: "STRING_VALUE", // required
 * //         },
 * //         canceled: {
 * //           value: "STRING_VALUE", // required
 * //           currency: "STRING_VALUE", // required
 * //         },
 * //       },
 * //       settlementStatus: "OPEN" || "CLOSED", // required
 * //       status: "OUTSTANDING" || "PROCESSING" || "SETTLED" || "CANCELED", // required
 * //       issuedAt: new Date("TIMESTAMP"), // required
 * //       closedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListFinancialRecordsCommandInput - {@link ListFinancialRecordsCommandInput}
 * @returns {@link ListFinancialRecordsCommandOutput}
 * @see {@link ListFinancialRecordsCommandInput} for command's `input` shape.
 * @see {@link ListFinancialRecordsCommandOutput} for command's `response` shape.
 * @see {@link PaymentsClientResolvedConfig | config} for PaymentsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request is denied because you don't have sufficient access to perform this operation. Verify that you have the required permissions and try again. This error is also returned, instead of <code>ResourceNotFoundException</code>, when you aren't authorized for the resource, so the response doesn't reveal whether the resource exists.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing failed because of an unknown error, exception, or failure. Retry your request.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling. Reduce the frequency of your requests and try again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request isn't valid. Check <code>reason</code> and <code>fieldList</code> for the cause, correct the request, and try again.</p>
 *
 * @throws {@link PaymentsServiceException}
 * <p>Base exception class for all service exceptions from Payments service.</p>
 *
 *
 * @example Invoke ListFinancialRecords
 * ```javascript
 * //
 * const input = {
 *   maxResults: 5,
 *   settlementStatuses: [
 *     "CLOSED"
 *   ],
 *   sortBy: "ISSUED_AT",
 *   sortOrder: "DESCENDING",
 *   types: [
 *     "INVOICE"
 *   ]
 * };
 * const command = new ListFinancialRecordsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   financialRecordSummaries: [
 *     {
 *       amount: {
 *         currency: "USD",
 *         value: "1000.24"
 *       },
 *       balances: {
 *         canceled: {
 *           currency: "USD",
 *           value: "0.0"
 *         },
 *         outstanding: {
 *           currency: "USD",
 *           value: "0.0"
 *         },
 *         processing: {
 *           currency: "USD",
 *           value: "0.0"
 *         },
 *         settled: {
 *           currency: "USD",
 *           value: "1000.24"
 *         }
 *       },
 *       businessUnit: {
 *         lineOfBusiness: "AWS_CLOUD_SERVICES",
 *         merchantOfRecord: "Amazon Web Services, Inc."
 *       },
 *       closedAt: 1736208000,
 *       id: "INV-1234-5678-9012-3456",
 *       issuedAt: 1735689600,
 *       settlementStatus: "CLOSED",
 *       status: "SETTLED",
 *       type: "INVOICE"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListFinancialRecordsCommand extends command<ListFinancialRecordsCommandInput, ListFinancialRecordsCommandOutput>(
  _ep0,
  _mw0,
  "ListFinancialRecords",
  ListFinancialRecords$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListFinancialRecordsRequest;
      output: ListFinancialRecordsResponse;
    };
    sdk: {
      input: ListFinancialRecordsCommandInput;
      output: ListFinancialRecordsCommandOutput;
    };
  };
}
