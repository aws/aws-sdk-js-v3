// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetAccountBalanceRequest, GetAccountBalanceResponse } from "../models/models_0";
import { GetAccountBalance$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetAccountBalanceCommand}.
 */
export interface GetAccountBalanceCommandInput extends GetAccountBalanceRequest {}
/**
 * @public
 *
 * The output of {@link GetAccountBalanceCommand}.
 */
export interface GetAccountBalanceCommandOutput extends GetAccountBalanceResponse, __MetadataBearer {}

/**
 * <p>Retrieves one balance of your account, selected by balance type, as one amount for each merchant of record and currency. Each amount is the sum of the outstanding balances of your invoices or credit memos that have the status <code>OUTSTANDING</code>. Amounts are never added together across merchants of record or currencies. This operation is eventually consistent. Results are paginated. Use <code>nextToken</code> to retrieve more results.</p> <p>To use this operation, you must have Amazon Web Services Identity and Access Management (IAM) permission for both <code>payments:GetAccountBalance</code> and <code>payments:GetPaymentStatus</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PaymentsClient, GetAccountBalanceCommand } from "@aws-sdk/client-payments"; // ES Modules import
 * // const { PaymentsClient, GetAccountBalanceCommand } = require("@aws-sdk/client-payments"); // CommonJS import
 * // import type { PaymentsClientConfig } from "@aws-sdk/client-payments";
 * const config = {}; // type is PaymentsClientConfig
 * const client = new PaymentsClient(config);
 * const input = { // GetAccountBalanceRequest
 *   balanceType: "INVOICES_DUE" || "INVOICES_PAST_DUE" || "OUTSTANDING_CREDIT_MEMOS", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new GetAccountBalanceCommand(input);
 * const response = await client.send(command);
 * // { // GetAccountBalanceResponse
 * //   accountBalances: [ // AccountBalanceList // required
 * //     { // AccountBalance
 * //       amount: { // CurrencyAmount
 * //         value: "STRING_VALUE", // required
 * //         currency: "STRING_VALUE", // required
 * //       },
 * //       merchantOfRecord: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetAccountBalanceCommandInput - {@link GetAccountBalanceCommandInput}
 * @returns {@link GetAccountBalanceCommandOutput}
 * @see {@link GetAccountBalanceCommandInput} for command's `input` shape.
 * @see {@link GetAccountBalanceCommandOutput} for command's `response` shape.
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
 * @example Invoke GetAccountBalance
 * ```javascript
 * //
 * const input = {
 *   balanceType: "INVOICES_PAST_DUE"
 * };
 * const command = new GetAccountBalanceCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   accountBalances: [
 *     {
 *       amount: {
 *         currency: "USD",
 *         value: "1250.00"
 *       },
 *       merchantOfRecord: "Amazon Web Services, Inc."
 *     },
 *     {
 *       amount: {
 *         currency: "INR",
 *         value: "430.75"
 *       },
 *       merchantOfRecord: "Amazon Web Services India Private Limited"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetAccountBalanceCommand extends command<GetAccountBalanceCommandInput, GetAccountBalanceCommandOutput>(
  _ep0,
  _mw0,
  "GetAccountBalance",
  GetAccountBalance$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAccountBalanceRequest;
      output: GetAccountBalanceResponse;
    };
    sdk: {
      input: GetAccountBalanceCommandInput;
      output: GetAccountBalanceCommandOutput;
    };
  };
}
