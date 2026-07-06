// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetCreditAllocationHistoryRequest, GetCreditAllocationHistoryResponse } from "../models/models_0";
import { GetCreditAllocationHistory$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetCreditAllocationHistoryCommand}.
 */
export interface GetCreditAllocationHistoryCommandInput extends GetCreditAllocationHistoryRequest {}
/**
 * @public
 *
 * The output of {@link GetCreditAllocationHistoryCommand}.
 */
export interface GetCreditAllocationHistoryCommandOutput extends GetCreditAllocationHistoryResponse, __MetadataBearer {}

/**
 * <p>Returns the per-billing-month allocation history for credits applied to an Amazon Web Services account's bills. Traverses the consolidated billing family to capture cross-account credit applications. Supports pagination and optional filtering to a single credit.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BillingClient, GetCreditAllocationHistoryCommand } from "@aws-sdk/client-billing"; // ES Modules import
 * // const { BillingClient, GetCreditAllocationHistoryCommand } = require("@aws-sdk/client-billing"); // CommonJS import
 * // import type { BillingClientConfig } from "@aws-sdk/client-billing";
 * const config = {}; // type is BillingClientConfig
 * const client = new BillingClient(config);
 * const input = { // GetCreditAllocationHistoryRequest
 *   accountId: "STRING_VALUE", // required
 *   creditId: Number("long"),
 *   startDate: new Date("TIMESTAMP"), // required
 *   endDate: new Date("TIMESTAMP"), // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new GetCreditAllocationHistoryCommand(input);
 * const response = await client.send(command);
 * // { // GetCreditAllocationHistoryResponse
 * //   creditAllocationHistoryList: [ // CreditAllocationHistoryList
 * //     { // CreditAllocationHistoryEntry
 * //       creditId: "STRING_VALUE", // required
 * //       creditAmount: { // Amount
 * //         currencyCode: "STRING_VALUE", // required
 * //         currencyAmount: "STRING_VALUE", // required
 * //       },
 * //       description: "STRING_VALUE",
 * //       accountId: "STRING_VALUE", // required
 * //       appliedServiceName: "STRING_VALUE", // required
 * //       billingMonth: "STRING_VALUE", // required
 * //       isEstimatedBill: true || false, // required
 * //     },
 * //   ],
 * //   partialResults: true || false, // required
 * //   failedMonths: [ // FailedMonthsList
 * //     "STRING_VALUE",
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetCreditAllocationHistoryCommandInput - {@link GetCreditAllocationHistoryCommandInput}
 * @returns {@link GetCreditAllocationHistoryCommandOutput}
 * @see {@link GetCreditAllocationHistoryCommandInput} for command's `input` shape.
 * @see {@link GetCreditAllocationHistoryCommandOutput} for command's `response` shape.
 * @see {@link BillingClientResolvedConfig | config} for BillingClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing failed because of an unknown error, exception, or failure. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling. </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service. </p>
 *
 * @throws {@link BillingServiceException}
 * <p>Base exception class for all service exceptions from Billing service.</p>
 *
 *
 * @public
 */
export class GetCreditAllocationHistoryCommand extends command<GetCreditAllocationHistoryCommandInput, GetCreditAllocationHistoryCommandOutput>(
  _ep0,
  _mw0,
  "GetCreditAllocationHistory",
  GetCreditAllocationHistory$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetCreditAllocationHistoryRequest;
      output: GetCreditAllocationHistoryResponse;
    };
    sdk: {
      input: GetCreditAllocationHistoryCommandInput;
      output: GetCreditAllocationHistoryCommandOutput;
    };
  };
}
