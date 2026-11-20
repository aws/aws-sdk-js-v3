// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { BatchGetFinancialRecordRequest, BatchGetFinancialRecordResponse } from "../models/models_0";
import { BatchGetFinancialRecord$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link BatchGetFinancialRecordCommand}.
 */
export interface BatchGetFinancialRecordCommandInput extends BatchGetFinancialRecordRequest {}
/**
 * @public
 *
 * The output of {@link BatchGetFinancialRecordCommand}.
 */
export interface BatchGetFinancialRecordCommandOutput extends BatchGetFinancialRecordResponse, __MetadataBearer {}

/**
 * <p>Retrieves up to 100 financial records in one request, including the details that are specific to each record's type. Identify each record by its ID or by its invoice ID. Results can be partial: each key that you request appears once in the response, either as a record in <code>financialRecords</code> or as an error in <code>errors</code>. A key that matches no record on your account is returned in <code>errors</code> and doesn't fail the request. This operation provides strongly consistent reads.</p> <p>To use this operation, you must have Amazon Web Services Identity and Access Management (IAM) permission for both <code>payments:BatchGetFinancialRecord</code> and <code>payments:GetPaymentStatus</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PaymentsClient, BatchGetFinancialRecordCommand } from "@aws-sdk/client-payments"; // ES Modules import
 * // const { PaymentsClient, BatchGetFinancialRecordCommand } = require("@aws-sdk/client-payments"); // CommonJS import
 * // import type { PaymentsClientConfig } from "@aws-sdk/client-payments";
 * const config = {}; // type is PaymentsClientConfig
 * const client = new PaymentsClient(config);
 * const input = { // BatchGetFinancialRecordRequest
 *   keys: [ // FinancialRecordKeyList // required
 *     { // FinancialRecordKey Union: only one key present
 *       identifier: "STRING_VALUE",
 *       invoiceIdentifier: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new BatchGetFinancialRecordCommand(input);
 * const response = await client.send(command);
 * // { // BatchGetFinancialRecordResponse
 * //   financialRecords: [ // FinancialRecordList // required
 * //     { // FinancialRecord
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
 * //       details: { // FinancialRecordDetails Union: only one key present
 * //         invoiceDetails: { // InvoiceDetails
 * //           invoiceId: "STRING_VALUE", // required
 * //           dueStatus: "DUE" || "PAST_DUE",
 * //           billingPeriod: { // BillingPeriod
 * //             startDate: new Date("TIMESTAMP"), // required
 * //             endDate: new Date("TIMESTAMP"), // required
 * //           },
 * //           dueDate: new Date("TIMESTAMP"), // required
 * //           paymentTerms: "STRING_VALUE",
 * //           invoiceFrequency: "ONE_TIME" || "RECURRING", // required
 * //         },
 * //         creditMemoDetails: { // CreditMemoDetails
 * //           invoiceId: "STRING_VALUE", // required
 * //           billingPeriod: {
 * //             startDate: new Date("TIMESTAMP"), // required
 * //             endDate: new Date("TIMESTAMP"), // required
 * //           },
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   errors: [ // FinancialRecordErrorList // required
 * //     { // FinancialRecordError
 * //       key: { // FinancialRecordKey Union: only one key present
 * //         identifier: "STRING_VALUE",
 * //         invoiceIdentifier: "STRING_VALUE",
 * //       },
 * //       code: "NOT_FOUND" || "INTERNAL_ERROR", // required
 * //       message: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchGetFinancialRecordCommandInput - {@link BatchGetFinancialRecordCommandInput}
 * @returns {@link BatchGetFinancialRecordCommandOutput}
 * @see {@link BatchGetFinancialRecordCommandInput} for command's `input` shape.
 * @see {@link BatchGetFinancialRecordCommandOutput} for command's `response` shape.
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
 * @example Invoke BatchGetFinancialRecord
 * ```javascript
 * //
 * const input = {
 *   keys: [
 *     {
 *       identifier: "INV-1234-5678-9012-3456"
 *     },
 *     {
 *       invoiceIdentifier: "999999999999"
 *     }
 *   ]
 * };
 * const command = new BatchGetFinancialRecordCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   errors: [
 *     {
 *       code: "NOT_FOUND",
 *       key: {
 *         invoiceIdentifier: "999999999999"
 *       },
 *       message: "The requested resource was not found"
 *     }
 *   ],
 *   financialRecords: [
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
 *       details: {
 *         invoiceDetails: {
 *           billingPeriod: {
 *             endDate: 1735689600,
 *             startDate: 1733011200
 *           },
 *           dueDate: 1738281600,
 *           invoiceFrequency: "RECURRING",
 *           invoiceId: "536462537364",
 *           paymentTerms: "Net30"
 *         }
 *       },
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
export class BatchGetFinancialRecordCommand extends command<BatchGetFinancialRecordCommandInput, BatchGetFinancialRecordCommandOutput>(
  _ep0,
  _mw0,
  "BatchGetFinancialRecord",
  BatchGetFinancialRecord$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchGetFinancialRecordRequest;
      output: BatchGetFinancialRecordResponse;
    };
    sdk: {
      input: BatchGetFinancialRecordCommandInput;
      output: BatchGetFinancialRecordCommandOutput;
    };
  };
}
