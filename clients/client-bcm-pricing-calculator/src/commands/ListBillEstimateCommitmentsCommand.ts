// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  BCMPricingCalculatorClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../BCMPricingCalculatorClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListBillEstimateCommitmentsRequest, ListBillEstimateCommitmentsResponse } from "../models/models_0";
import { ListBillEstimateCommitments$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export interface ListBillEstimateCommitmentsCommandOutput
  extends ListBillEstimateCommitmentsResponse,
    __MetadataBearer {}

/**
 * <p> Lists the commitments associated with a bill estimate. </p>
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
 *  <p> The requested data is currently unavailable. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p> The specified resource was not found. </p>
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> You do not have sufficient access to perform this action. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p> An internal error has occurred. Retry your request, but if the problem persists, contact Amazon Web Services support. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p> The request was denied due to request throttling. </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p> The input provided fails to satisfy the constraints specified by an Amazon Web Services service. </p>
 *
 * @throws {@link BCMPricingCalculatorServiceException}
 * <p>Base exception class for all service exceptions from BCMPricingCalculator service.</p>
 *
 *
 * @public
 */
export class ListBillEstimateCommitmentsCommand extends $Command
  .classBuilder<
    ListBillEstimateCommitmentsCommandInput,
    ListBillEstimateCommitmentsCommandOutput,
    BCMPricingCalculatorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BCMPricingCalculatorClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSBCMPricingCalculator", "ListBillEstimateCommitments", {})
  .n("BCMPricingCalculatorClient", "ListBillEstimateCommitmentsCommand")
  .sc(ListBillEstimateCommitments$)
  .build() {
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
