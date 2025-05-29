// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  BCMPricingCalculatorClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../BCMPricingCalculatorClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetBillEstimateRequest, GetBillEstimateResponse } from "../models/models_0";
import { de_GetBillEstimateCommand, se_GetBillEstimateCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p> Retrieves details of a specific bill estimate. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BCMPricingCalculatorClient, GetBillEstimateCommand } from "@aws-sdk/client-bcm-pricing-calculator"; // ES Modules import
 * // const { BCMPricingCalculatorClient, GetBillEstimateCommand } = require("@aws-sdk/client-bcm-pricing-calculator"); // CommonJS import
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
export class GetBillEstimateCommand extends $Command
  .classBuilder<
    GetBillEstimateCommandInput,
    GetBillEstimateCommandOutput,
    BCMPricingCalculatorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BCMPricingCalculatorClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSBCMPricingCalculator", "GetBillEstimate", {})
  .n("BCMPricingCalculatorClient", "GetBillEstimateCommand")
  .f(void 0, void 0)
  .ser(se_GetBillEstimateCommand)
  .de(de_GetBillEstimateCommand)
  .build() {
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
