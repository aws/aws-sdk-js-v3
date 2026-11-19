// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetUsageLinesEstimatedCostRequest, GetUsageLinesEstimatedCostResponse } from "../models/models_0";
import { GetUsageLinesEstimatedCost$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetUsageLinesEstimatedCostCommand}.
 */
export interface GetUsageLinesEstimatedCostCommandInput extends GetUsageLinesEstimatedCostRequest {}
/**
 * @public
 *
 * The output of {@link GetUsageLinesEstimatedCostCommand}.
 */
export interface GetUsageLinesEstimatedCostCommandOutput extends GetUsageLinesEstimatedCostResponse, __MetadataBearer {}

/**
 * <p> Retrieves the estimated cost of a list of usage lines. Each usage line identifies a billing line by its service code, usage type, and operation, and includes the usage amount to price. The estimate is based on Amazon Web Services pricing data and the rate type you choose. It doesn't include taxes, and your actual charges depend on your usage. </p> <p> The response includes the estimated cost of each usage line that was priced. It also includes each usage line that couldn't be priced, and the reason it couldn't be priced. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BCMPricingCalculatorClient, GetUsageLinesEstimatedCostCommand } from "@aws-sdk/client-bcm-pricing-calculator"; // ES Modules import
 * // const { BCMPricingCalculatorClient, GetUsageLinesEstimatedCostCommand } = require("@aws-sdk/client-bcm-pricing-calculator"); // CommonJS import
 * // import type { BCMPricingCalculatorClientConfig } from "@aws-sdk/client-bcm-pricing-calculator";
 * const config = {}; // type is BCMPricingCalculatorClientConfig
 * const client = new BCMPricingCalculatorClient(config);
 * const input = { // GetUsageLinesEstimatedCostRequest
 *   usage: [ // GetUsageLinesEstimatedCostInputList // required
 *     { // GetUsageLinesEstimatedCostInput
 *       serviceCode: "STRING_VALUE", // required
 *       usageType: "STRING_VALUE", // required
 *       operation: "STRING_VALUE", // required
 *       key: "STRING_VALUE", // required
 *       amount: Number("double"), // required
 *     },
 *   ],
 *   rateType: "BEFORE_DISCOUNTS" || "AFTER_DISCOUNTS" || "AFTER_DISCOUNTS_AND_COMMITMENTS", // required
 * };
 * const command = new GetUsageLinesEstimatedCostCommand(input);
 * const response = await client.send(command);
 * // { // GetUsageLinesEstimatedCostResponse
 * //   rateType: "BEFORE_DISCOUNTS" || "AFTER_DISCOUNTS" || "AFTER_DISCOUNTS_AND_COMMITMENTS",
 * //   totalCost: Number("double"),
 * //   currency: "USD",
 * //   lineItems: [ // GetUsageLinesEstimatedCostLineItemList
 * //     { // GetUsageLinesEstimatedCostLineItem
 * //       key: "STRING_VALUE", // required
 * //       serviceCode: "STRING_VALUE",
 * //       usageType: "STRING_VALUE",
 * //       operation: "STRING_VALUE",
 * //       estimatedCost: { // GetUsageLinesEstimatedCostEstimatedCost
 * //         usageAmount: Number("double"),
 * //         usageUnit: "STRING_VALUE",
 * //         cost: Number("double"),
 * //         currency: "USD",
 * //       },
 * //     },
 * //   ],
 * //   errors: [ // GetUsageLinesEstimatedCostErrors
 * //     { // GetUsageLinesEstimatedCostError
 * //       key: "STRING_VALUE", // required
 * //       serviceCode: "STRING_VALUE", // required
 * //       usageType: "STRING_VALUE", // required
 * //       operation: "STRING_VALUE", // required
 * //       errorCode: "BAD_REQUEST" || "NOT_FOUND" || "CONFLICT" || "INTERNAL_SERVER_ERROR", // required
 * //       errorMessage: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetUsageLinesEstimatedCostCommandInput - {@link GetUsageLinesEstimatedCostCommandInput}
 * @returns {@link GetUsageLinesEstimatedCostCommandOutput}
 * @see {@link GetUsageLinesEstimatedCostCommandInput} for command's `input` shape.
 * @see {@link GetUsageLinesEstimatedCostCommandOutput} for command's `response` shape.
 * @see {@link BCMPricingCalculatorClientResolvedConfig | config} for BCMPricingCalculatorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> The request is denied because you don't have sufficient permissions to perform this operation. Verify that you have the required permissions and try again. </p>
 *
 * @throws {@link DataUnavailableException} (client fault)
 *  <p> The requested data is currently unavailable. </p>
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
export class GetUsageLinesEstimatedCostCommand extends command<GetUsageLinesEstimatedCostCommandInput, GetUsageLinesEstimatedCostCommandOutput>(
  _ep0,
  _mw0,
  "GetUsageLinesEstimatedCost",
  GetUsageLinesEstimatedCost$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetUsageLinesEstimatedCostRequest;
      output: GetUsageLinesEstimatedCostResponse;
    };
    sdk: {
      input: GetUsageLinesEstimatedCostCommandInput;
      output: GetUsageLinesEstimatedCostCommandOutput;
    };
  };
}
