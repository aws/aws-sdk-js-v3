// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetBillEstimateRequest, GetBillEstimateResponse } from "../models/models_0";
import { GetBillEstimate$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetBillEstimateCommand}.
 */
export interface GetBillEstimateCommandInput extends GetBillEstimateRequest {}
/**
 * @public
 *
 * The output of {@link GetBillEstimateCommand}.
 */
export interface GetBillEstimateCommandOutput extends GetBillEstimateResponse, __MetadataBearer {}

/**
 * Retrieves details of a specific bill estimate.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BCMPricingCalculatorClient, GetBillEstimateCommand } from "@aws-sdk/client-bcm-pricing-calculator"; // ES Modules import
 * // const { BCMPricingCalculatorClient, GetBillEstimateCommand } = require("@aws-sdk/client-bcm-pricing-calculator"); // CommonJS import
 * // import type { BCMPricingCalculatorClientConfig } from "@aws-sdk/client-bcm-pricing-calculator";
 * const config = {}; // type is BCMPricingCalculatorClientConfig
 * const client = new BCMPricingCalculatorClient(config);
 * const input = { // GetBillEstimateRequest
 *   identifier: "STRING_VALUE", // required
 * };
 * const command = new GetBillEstimateCommand(input);
 * const response = await client.send(command);
 * // { // GetBillEstimateResponse
 * //   id: "STRING_VALUE", // required
 * //   name: "STRING_VALUE",
 * //   status: "IN_PROGRESS" || "COMPLETE" || "FAILED",
 * //   failureMessage: "STRING_VALUE",
 * //   billInterval: { // BillInterval
 * //     start: new Date("TIMESTAMP"),
 * //     end: new Date("TIMESTAMP"),
 * //   },
 * //   costSummary: { // BillEstimateCostSummary
 * //     totalCostDifference: { // CostDifference
 * //       historicalCost: { // CostAmount
 * //         amount: Number("double"),
 * //         currency: "USD",
 * //       },
 * //       estimatedCost: {
 * //         amount: Number("double"),
 * //         currency: "USD",
 * //       },
 * //     },
 * //     serviceCostDifferences: { // ServiceCostDifferenceMap
 * //       "<keys>": {
 * //         historicalCost: {
 * //           amount: Number("double"),
 * //           currency: "USD",
 * //         },
 * //         estimatedCost: {
 * //           amount: Number("double"),
 * //           currency: "USD",
 * //         },
 * //       },
 * //     },
 * //   },
 * //   createdAt: new Date("TIMESTAMP"),
 * //   expiresAt: new Date("TIMESTAMP"),
 * //   groupSharingPreference: "OPEN" || "PRIORITIZED" || "RESTRICTED",
 * //   costCategoryGroupSharingPreferenceArn: "STRING_VALUE",
 * //   costCategoryGroupSharingPreferenceEffectiveDate: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetBillEstimateCommandInput - {@link GetBillEstimateCommandInput}
 * @returns {@link GetBillEstimateCommandOutput}
 * @see {@link GetBillEstimateCommandInput} for command's `input` shape.
 * @see {@link GetBillEstimateCommandOutput} for command's `response` shape.
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
export class GetBillEstimateCommand extends command<GetBillEstimateCommandInput, GetBillEstimateCommandOutput>(
  _ep0,
  _mw0,
  "GetBillEstimate",
  GetBillEstimate$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetBillEstimateRequest;
      output: GetBillEstimateResponse;
    };
    sdk: {
      input: GetBillEstimateCommandInput;
      output: GetBillEstimateCommandOutput;
    };
  };
}
