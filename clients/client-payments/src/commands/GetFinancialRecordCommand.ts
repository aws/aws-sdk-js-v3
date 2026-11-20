// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetFinancialRecordRequest, GetFinancialRecordResponse } from "../models/models_0";
import { GetFinancialRecord$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetFinancialRecordCommand}.
 */
export interface GetFinancialRecordCommandInput extends GetFinancialRecordRequest {}
/**
 * @public
 *
 * The output of {@link GetFinancialRecordCommand}.
 */
export interface GetFinancialRecordCommandOutput extends GetFinancialRecordResponse, __MetadataBearer {}

/**
 * <p>Retrieves a single financial record, including the details that are specific to its type. Specify exactly one of the following:</p> <ul> <li> <p>The ID that Amazon Web Services Payments issued for the record, in <code>identifier</code>.</p> </li> <li> <p>The invoice ID that Amazon Web Services Invoicing issued for an invoice or a credit memo, in <code>invoiceIdentifier</code>.</p> </li> </ul> <p>If you specify both or neither, the request fails with <code>ValidationException</code>. If no record on your account matches, the request fails with <code>ResourceNotFoundException</code>.</p> <p>This operation provides strongly consistent reads.</p> <p>To use this operation, you must have Amazon Web Services Identity and Access Management (IAM) permission for both <code>payments:GetFinancialRecord</code> and <code>payments:GetPaymentStatus</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PaymentsClient, GetFinancialRecordCommand } from "@aws-sdk/client-payments"; // ES Modules import
 * // const { PaymentsClient, GetFinancialRecordCommand } = require("@aws-sdk/client-payments"); // CommonJS import
 * // import type { PaymentsClientConfig } from "@aws-sdk/client-payments";
 * const config = {}; // type is PaymentsClientConfig
 * const client = new PaymentsClient(config);
 * const input = { // GetFinancialRecordRequest
 *   identifier: "STRING_VALUE",
 *   invoiceIdentifier: "STRING_VALUE",
 * };
 * const command = new GetFinancialRecordCommand(input);
 * const response = await client.send(command);
 * // { // GetFinancialRecordResponse
 * //   financialRecord: { // FinancialRecord
 * //     id: "STRING_VALUE", // required
 * //     type: "INVOICE" || "CREDIT_MEMO", // required
 * //     businessUnit: { // BusinessUnit
 * //       merchantOfRecord: "STRING_VALUE", // required
 * //       lineOfBusiness: "AWS_CLOUD_SERVICES" || "PROSERVE_MARKETING_AND_TRAINING" || "AWS_MARKETPLACE",
 * //     },
 * //     amount: { // CurrencyAmount
 * //       value: "STRING_VALUE", // required
 * //       currency: "STRING_VALUE", // required
 * //     },
 * //     balances: { // Balances
 * //       outstanding: {
 * //         value: "STRING_VALUE", // required
 * //         currency: "STRING_VALUE", // required
 * //       },
 * //       processing: {
 * //         value: "STRING_VALUE", // required
 * //         currency: "STRING_VALUE", // required
 * //       },
 * //       settled: {
 * //         value: "STRING_VALUE", // required
 * //         currency: "STRING_VALUE", // required
 * //       },
 * //       canceled: {
 * //         value: "STRING_VALUE", // required
 * //         currency: "STRING_VALUE", // required
 * //       },
 * //     },
 * //     settlementStatus: "OPEN" || "CLOSED", // required
 * //     status: "OUTSTANDING" || "PROCESSING" || "SETTLED" || "CANCELED", // required
 * //     issuedAt: new Date("TIMESTAMP"), // required
 * //     closedAt: new Date("TIMESTAMP"),
 * //     details: { // FinancialRecordDetails Union: only one key present
 * //       invoiceDetails: { // InvoiceDetails
 * //         invoiceId: "STRING_VALUE", // required
 * //         dueStatus: "DUE" || "PAST_DUE",
 * //         billingPeriod: { // BillingPeriod
 * //           startDate: new Date("TIMESTAMP"), // required
 * //           endDate: new Date("TIMESTAMP"), // required
 * //         },
 * //         dueDate: new Date("TIMESTAMP"), // required
 * //         paymentTerms: "STRING_VALUE",
 * //         invoiceFrequency: "ONE_TIME" || "RECURRING", // required
 * //       },
 * //       creditMemoDetails: { // CreditMemoDetails
 * //         invoiceId: "STRING_VALUE", // required
 * //         billingPeriod: {
 * //           startDate: new Date("TIMESTAMP"), // required
 * //           endDate: new Date("TIMESTAMP"), // required
 * //         },
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetFinancialRecordCommandInput - {@link GetFinancialRecordCommandInput}
 * @returns {@link GetFinancialRecordCommandOutput}
 * @see {@link GetFinancialRecordCommandInput} for command's `input` shape.
 * @see {@link GetFinancialRecordCommandOutput} for command's `response` shape.
 * @see {@link PaymentsClientResolvedConfig | config} for PaymentsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request is denied because you don't have sufficient access to perform this operation. Verify that you have the required permissions and try again. This error is also returned, instead of <code>ResourceNotFoundException</code>, when you aren't authorized for the resource, so the response doesn't reveal whether the resource exists.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing failed because of an unknown error, exception, or failure. Retry your request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource couldn't be found. Verify that the resource ID is correct. This error is returned only when you're authorized for the resource.</p>
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
 * @example Invoke GetFinancialRecord
 * ```javascript
 * //
 * const input = {
 *   identifier: "INV-1234-5678-9012-3456"
 * };
 * const command = new GetFinancialRecordCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   financialRecord: {
 *     amount: {
 *       currency: "USD",
 *       value: "1000.24"
 *     },
 *     balances: {
 *       canceled: {
 *         currency: "USD",
 *         value: "0.0"
 *       },
 *       outstanding: {
 *         currency: "USD",
 *         value: "0.0"
 *       },
 *       processing: {
 *         currency: "USD",
 *         value: "0.0"
 *       },
 *       settled: {
 *         currency: "USD",
 *         value: "1000.24"
 *       }
 *     },
 *     businessUnit: {
 *       lineOfBusiness: "AWS_CLOUD_SERVICES",
 *       merchantOfRecord: "Amazon Web Services, Inc."
 *     },
 *     closedAt: 1736208000,
 *     details: {
 *       invoiceDetails: {
 *         billingPeriod: {
 *           endDate: 1735689600,
 *           startDate: 1733011200
 *         },
 *         dueDate: 1738281600,
 *         invoiceFrequency: "RECURRING",
 *         invoiceId: "536462537364",
 *         paymentTerms: "Net30"
 *       }
 *     },
 *     id: "INV-1234-5678-9012-3456",
 *     issuedAt: 1735689600,
 *     settlementStatus: "CLOSED",
 *     status: "SETTLED",
 *     type: "INVOICE"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetFinancialRecordCommand extends command<GetFinancialRecordCommandInput, GetFinancialRecordCommandOutput>(
  _ep0,
  _mw0,
  "GetFinancialRecord",
  GetFinancialRecord$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetFinancialRecordRequest;
      output: GetFinancialRecordResponse;
    };
    sdk: {
      input: GetFinancialRecordCommandInput;
      output: GetFinancialRecordCommandOutput;
    };
  };
}
