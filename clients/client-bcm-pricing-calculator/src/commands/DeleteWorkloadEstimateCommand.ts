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
import type { DeleteWorkloadEstimateRequest, DeleteWorkloadEstimateResponse } from "../models/models_0";
import { DeleteWorkloadEstimate$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteWorkloadEstimateCommand}.
 */
export interface DeleteWorkloadEstimateCommandInput extends DeleteWorkloadEstimateRequest {}
/**
 * @public
 *
 * The output of {@link DeleteWorkloadEstimateCommand}.
 */
export interface DeleteWorkloadEstimateCommandOutput extends DeleteWorkloadEstimateResponse, __MetadataBearer {}

/**
 * <p> Deletes an existing workload estimate. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BCMPricingCalculatorClient, DeleteWorkloadEstimateCommand } from "@aws-sdk/client-bcm-pricing-calculator"; // ES Modules import
 * // const { BCMPricingCalculatorClient, DeleteWorkloadEstimateCommand } = require("@aws-sdk/client-bcm-pricing-calculator"); // CommonJS import
 * // import type { BCMPricingCalculatorClientConfig } from "@aws-sdk/client-bcm-pricing-calculator";
 * const config = {}; // type is BCMPricingCalculatorClientConfig
 * const client = new BCMPricingCalculatorClient(config);
 * const input = { // DeleteWorkloadEstimateRequest
 *   identifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteWorkloadEstimateCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteWorkloadEstimateCommandInput - {@link DeleteWorkloadEstimateCommandInput}
 * @returns {@link DeleteWorkloadEstimateCommandOutput}
 * @see {@link DeleteWorkloadEstimateCommandInput} for command's `input` shape.
 * @see {@link DeleteWorkloadEstimateCommandOutput} for command's `response` shape.
 * @see {@link BCMPricingCalculatorClientResolvedConfig | config} for BCMPricingCalculatorClient's `config` shape.
 *
 * @throws {@link DataUnavailableException} (client fault)
 *  <p> The requested data is currently unavailable. </p>
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
export class DeleteWorkloadEstimateCommand extends $Command
  .classBuilder<
    DeleteWorkloadEstimateCommandInput,
    DeleteWorkloadEstimateCommandOutput,
    BCMPricingCalculatorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BCMPricingCalculatorClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSBCMPricingCalculator", "DeleteWorkloadEstimate", {})
  .n("BCMPricingCalculatorClient", "DeleteWorkloadEstimateCommand")
  .sc(DeleteWorkloadEstimate$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteWorkloadEstimateRequest;
      output: {};
    };
    sdk: {
      input: DeleteWorkloadEstimateCommandInput;
      output: DeleteWorkloadEstimateCommandOutput;
    };
  };
}
