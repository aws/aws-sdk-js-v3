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
import { GetWorkloadEstimateRequest, GetWorkloadEstimateResponse } from "../models/models_0";
import { de_GetWorkloadEstimateCommand, se_GetWorkloadEstimateCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetWorkloadEstimateCommand}.
 */
export interface GetWorkloadEstimateCommandInput extends GetWorkloadEstimateRequest {}
/**
 * @public
 *
 * The output of {@link GetWorkloadEstimateCommand}.
 */
export interface GetWorkloadEstimateCommandOutput extends GetWorkloadEstimateResponse, __MetadataBearer {}

/**
 * <p>
 *         Retrieves details of a specific workload estimate.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BCMPricingCalculatorClient, GetWorkloadEstimateCommand } from "@aws-sdk/client-bcm-pricing-calculator"; // ES Modules import
 * // const { BCMPricingCalculatorClient, GetWorkloadEstimateCommand } = require("@aws-sdk/client-bcm-pricing-calculator"); // CommonJS import
 * const client = new BCMPricingCalculatorClient(config);
 * const input = { // GetWorkloadEstimateRequest
 *   identifier: "STRING_VALUE", // required
 * };
 * const command = new GetWorkloadEstimateCommand(input);
 * const response = await client.send(command);
 * // { // GetWorkloadEstimateResponse
 * //   id: "STRING_VALUE", // required
 * //   name: "STRING_VALUE",
 * //   createdAt: new Date("TIMESTAMP"),
 * //   expiresAt: new Date("TIMESTAMP"),
 * //   rateType: "BEFORE_DISCOUNTS" || "AFTER_DISCOUNTS",
 * //   rateTimestamp: new Date("TIMESTAMP"),
 * //   status: "UPDATING" || "VALID" || "INVALID" || "ACTION_NEEDED",
 * //   totalCost: Number("double"),
 * //   costCurrency: "USD",
 * //   failureMessage: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetWorkloadEstimateCommandInput - {@link GetWorkloadEstimateCommandInput}
 * @returns {@link GetWorkloadEstimateCommandOutput}
 * @see {@link GetWorkloadEstimateCommandInput} for command's `input` shape.
 * @see {@link GetWorkloadEstimateCommandOutput} for command's `response` shape.
 * @see {@link BCMPricingCalculatorClientResolvedConfig | config} for BCMPricingCalculatorClient's `config` shape.
 *
 * @throws {@link DataUnavailableException} (client fault)
 *  <p>
 *         The requested data is currently unavailable.
 *         </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>
 *         The specified resource was not found.
 *         </p>
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>
 *         You do not have sufficient access to perform this action.
 *         </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>
 *         An internal error has occurred. Retry your request, but if the problem persists, contact Amazon Web Services support.
 *         </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>
 *         The request was denied due to request throttling.
 *         </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>
 *         The input provided fails to satisfy the constraints specified by an Amazon Web Services service.
 *         </p>
 *
 * @throws {@link BCMPricingCalculatorServiceException}
 * <p>Base exception class for all service exceptions from BCMPricingCalculator service.</p>
 *
 * @public
 */
export class GetWorkloadEstimateCommand extends $Command
  .classBuilder<
    GetWorkloadEstimateCommandInput,
    GetWorkloadEstimateCommandOutput,
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
  .s("AWSBCMPricingCalculator", "GetWorkloadEstimate", {})
  .n("BCMPricingCalculatorClient", "GetWorkloadEstimateCommand")
  .f(void 0, void 0)
  .ser(se_GetWorkloadEstimateCommand)
  .de(de_GetWorkloadEstimateCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetWorkloadEstimateRequest;
      output: GetWorkloadEstimateResponse;
    };
    sdk: {
      input: GetWorkloadEstimateCommandInput;
      output: GetWorkloadEstimateCommandOutput;
    };
  };
}
