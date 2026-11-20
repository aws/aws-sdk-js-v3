// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListPaymentInstrumentsRequest, ListPaymentInstrumentsResponse } from "../models/models_0";
import { ListPaymentInstruments$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListPaymentInstrumentsCommand}.
 */
export interface ListPaymentInstrumentsCommandInput extends ListPaymentInstrumentsRequest {}
/**
 * @public
 *
 * The output of {@link ListPaymentInstrumentsCommand}.
 */
export interface ListPaymentInstrumentsCommandOutput extends ListPaymentInstrumentsResponse, __MetadataBearer {}

/**
 * <p>Lists the payment instruments on your account. This operation returns summaries. To get the details that are specific to an instrument's payment method, use <code>GetPaymentInstrument</code>. Results are paginated. Use <code>nextToken</code> to retrieve more results.</p> <p>To use this operation, you must have Amazon Web Services Identity and Access Management (IAM) permission for <code>payments:ListPaymentInstruments</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PaymentsClient, ListPaymentInstrumentsCommand } from "@aws-sdk/client-payments"; // ES Modules import
 * // const { PaymentsClient, ListPaymentInstrumentsCommand } = require("@aws-sdk/client-payments"); // CommonJS import
 * // import type { PaymentsClientConfig } from "@aws-sdk/client-payments";
 * const config = {}; // type is PaymentsClientConfig
 * const client = new PaymentsClient(config);
 * const input = { // ListPaymentInstrumentsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListPaymentInstrumentsCommand(input);
 * const response = await client.send(command);
 * // { // ListPaymentInstrumentsResponse
 * //   paymentInstrumentSummaries: [ // PaymentInstrumentSummaryList // required
 * //     { // PaymentInstrumentSummary
 * //       id: "STRING_VALUE", // required
 * //       arn: "STRING_VALUE", // required
 * //       paymentMethod: "CARD" || "US_ACH_BANK_ACCOUNT" || "SEPA_BANK_ACCOUNT" || "UK_BACS_BANK_ACCOUNT" || "IN_NET_BANKING" || "CN_BANK_REDIRECT" || "UPI" || "PIX" || "PAY_BY_INVOICE", // required
 * //       status: "ACTIVE" || "PENDING_SETUP" || "SETUP_IN_PROGRESS" || "INVALID", // required
 * //       createdAt: new Date("TIMESTAMP"),
 * //       updatedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListPaymentInstrumentsCommandInput - {@link ListPaymentInstrumentsCommandInput}
 * @returns {@link ListPaymentInstrumentsCommandOutput}
 * @see {@link ListPaymentInstrumentsCommandInput} for command's `input` shape.
 * @see {@link ListPaymentInstrumentsCommandOutput} for command's `response` shape.
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
 * @example Invoke ListPaymentInstruments
 * ```javascript
 * //
 * const input = {
 *   maxResults: 5
 * };
 * const command = new ListPaymentInstrumentsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   paymentInstrumentSummaries: [
 *     {
 *       arn: "arn:aws:payments::123456789012:payment-instrument:1a2b3c4d-5e6f-7a8b-9c0d-111122223333",
 *       createdAt: 1735689600,
 *       id: "1a2b3c4d-5e6f-7a8b-9c0d-111122223333",
 *       paymentMethod: "CARD",
 *       status: "ACTIVE",
 *       updatedAt: 1738368000
 *     },
 *     {
 *       arn: "arn:aws:payments::123456789012:payment-instrument:2b3c4d5e-6f7a-8b9c-0d1e-444455556666",
 *       createdAt: 1727740800,
 *       id: "2b3c4d5e-6f7a-8b9c-0d1e-444455556666",
 *       paymentMethod: "US_ACH_BANK_ACCOUNT",
 *       status: "ACTIVE",
 *       updatedAt: 1727740800
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListPaymentInstrumentsCommand extends command<ListPaymentInstrumentsCommandInput, ListPaymentInstrumentsCommandOutput>(
  _ep0,
  _mw0,
  "ListPaymentInstruments",
  ListPaymentInstruments$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPaymentInstrumentsRequest;
      output: ListPaymentInstrumentsResponse;
    };
    sdk: {
      input: ListPaymentInstrumentsCommandInput;
      output: ListPaymentInstrumentsCommandOutput;
    };
  };
}
