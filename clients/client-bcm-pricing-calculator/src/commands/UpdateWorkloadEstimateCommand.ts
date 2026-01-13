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
import type { UpdateWorkloadEstimateRequest, UpdateWorkloadEstimateResponse } from "../models/models_0";
import { UpdateWorkloadEstimate$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateWorkloadEstimateCommand}.
 */
export interface UpdateWorkloadEstimateCommandInput extends UpdateWorkloadEstimateRequest {}
/**
 * @public
 *
 * The output of {@link UpdateWorkloadEstimateCommand}.
 */
export interface UpdateWorkloadEstimateCommandOutput extends UpdateWorkloadEstimateResponse, __MetadataBearer {}

/**
 * <p> Updates an existing workload estimate. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BCMPricingCalculatorClient, UpdateWorkloadEstimateCommand } from "@aws-sdk/client-bcm-pricing-calculator"; // ES Modules import
 * // const { BCMPricingCalculatorClient, UpdateWorkloadEstimateCommand } = require("@aws-sdk/client-bcm-pricing-calculator"); // CommonJS import
 * // import type { BCMPricingCalculatorClientConfig } from "@aws-sdk/client-bcm-pricing-calculator";
 * const config = {}; // type is BCMPricingCalculatorClientConfig
 * const client = new BCMPricingCalculatorClient(config);
 * const input = { // UpdateWorkloadEstimateRequest
 *   identifier: "STRING_VALUE", // required
 *   name: "STRING_VALUE",
 *   expiresAt: new Date("TIMESTAMP"),
 * };
 * const command = new UpdateWorkloadEstimateCommand(input);
 * const response = await client.send(command);
 * // { // UpdateWorkloadEstimateResponse
 * //   id: "STRING_VALUE", // required
 * //   name: "STRING_VALUE",
 * //   createdAt: new Date("TIMESTAMP"),
 * //   expiresAt: new Date("TIMESTAMP"),
 * //   rateType: "BEFORE_DISCOUNTS" || "AFTER_DISCOUNTS" || "AFTER_DISCOUNTS_AND_COMMITMENTS",
 * //   rateTimestamp: new Date("TIMESTAMP"),
 * //   status: "UPDATING" || "VALID" || "INVALID" || "ACTION_NEEDED",
 * //   totalCost: Number("double"),
 * //   costCurrency: "USD",
 * //   failureMessage: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateWorkloadEstimateCommandInput - {@link UpdateWorkloadEstimateCommandInput}
 * @returns {@link UpdateWorkloadEstimateCommandOutput}
 * @see {@link UpdateWorkloadEstimateCommandInput} for command's `input` shape.
 * @see {@link UpdateWorkloadEstimateCommandOutput} for command's `response` shape.
 * @see {@link BCMPricingCalculatorClientResolvedConfig | config} for BCMPricingCalculatorClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p> The request could not be processed because of conflict in the current state of the resource. </p>
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
export class UpdateWorkloadEstimateCommand extends $Command
  .classBuilder<
    UpdateWorkloadEstimateCommandInput,
    UpdateWorkloadEstimateCommandOutput,
    BCMPricingCalculatorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BCMPricingCalculatorClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSBCMPricingCalculator", "UpdateWorkloadEstimate", {})
  .n("BCMPricingCalculatorClient", "UpdateWorkloadEstimateCommand")
  .sc(UpdateWorkloadEstimate$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateWorkloadEstimateRequest;
      output: UpdateWorkloadEstimateResponse;
    };
    sdk: {
      input: UpdateWorkloadEstimateCommandInput;
      output: UpdateWorkloadEstimateCommandOutput;
    };
  };
}
