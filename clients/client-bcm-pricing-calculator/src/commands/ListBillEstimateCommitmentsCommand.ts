// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListBillEstimateCommitmentsRequest, ListBillEstimateCommitmentsResponse } from "../models/models_0";
import { ListBillEstimateCommitments$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListBillEstimateCommitmentsCommand}.
 */
export interface ListBillEstimateCommitmentsCommandInput extends ListBillEstimateCommitmentsRequest {}
/**
 * @public
 *
 * The output of {@link ListBillEstimateCommitmentsCommand}.
 */
export interface ListBillEstimateCommitmentsCommandOutput extends ListBillEstimateCommitmentsResponse, __MetadataBearer {}

/**
 * Lists the commitments associated with a bill estimate.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BCMPricingCalculatorClient, ListBillEstimateCommitmentsCommand } from "@aws-sdk/client-bcm-pricing-calculator"; // ES Modules import
 * // const { BCMPricingCalculatorClient, ListBillEstimateCommitmentsCommand } = require("@aws-sdk/client-bcm-pricing-calculator"); // CommonJS import
 * // import type { BCMPricingCalculatorClientConfig } from "@aws-sdk/client-bcm-pricing-calculator";
 * const config = {}; // type is BCMPricingCalculatorClientConfig
 * const client = new BCMPricingCalculatorClient(config);
 * const input = { // ListBillEstimateCommitmentsRequest
 *   billEstimateId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListBillEstimateCommitmentsCommand(input);
 * const response = await client.send(command);
 * // { // ListBillEstimateCommitmentsResponse
 * //   items: [ // BillEstimateCommitmentSummaries
 * //     { // BillEstimateCommitmentSummary
 * //       id: "STRING_VALUE",
 * //       purchaseAgreementType: "SAVINGS_PLANS" || "RESERVED_INSTANCE",
 * //       offeringId: "STRING_VALUE",
 * //       usageAccountId: "STRING_VALUE",
 * //       region: "STRING_VALUE",
 * //       termLength: "STRING_VALUE",
 * //       paymentOption: "STRING_VALUE",
 * //       upfrontPayment: { // CostAmount
 * //         amount: Number("double"),
 * //         currency: "USD",
 * //       },
 * //       monthlyPayment: {
 * //         amount: Number("double"),
 * //         currency: "USD",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListBillEstimateCommitmentsCommandInput - {@link ListBillEstimateCommitmentsCommandInput}
 * @returns {@link ListBillEstimateCommitmentsCommandOutput}
 * @see {@link ListBillEstimateCommitmentsCommandInput} for command's `input` shape.
 * @see {@link ListBillEstimateCommitmentsCommandOutput} for command's `response` shape.
 * @see {@link BCMPricingCalculatorClientResolvedConfig | config} for BCMPricingCalculatorClient's `config` shape.
 *
 * @throws {@link DataUnavailableException} (client fault)
 *
 * The requested data is currently unavailable.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal error has occurred. Retry your request, but if the problem persists, contact Amazon Web Services support.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input provided fails to satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link BCMPricingCalculatorServiceException}
 *
 * Base exception class for all service exceptions from BCMPricingCalculator service.
 *
 * @public
 */
export class ListBillEstimateCommitmentsCommand extends command<ListBillEstimateCommitmentsCommandInput, ListBillEstimateCommitmentsCommandOutput>(
  _ep0,
  _mw0,
  "ListBillEstimateCommitments",
  ListBillEstimateCommitments$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListBillEstimateCommitmentsRequest;
      output: ListBillEstimateCommitmentsResponse;
    };
    sdk: {
      input: ListBillEstimateCommitmentsCommandInput;
      output: ListBillEstimateCommitmentsCommandOutput;
    };
  };
}
