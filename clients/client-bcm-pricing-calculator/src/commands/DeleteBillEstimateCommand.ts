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
import { DeleteBillEstimateRequest, DeleteBillEstimateResponse } from "../models/models_0";
import { de_DeleteBillEstimateCommand, se_DeleteBillEstimateCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteBillEstimateCommand}.
 */
export interface DeleteBillEstimateCommandInput extends DeleteBillEstimateRequest {}
/**
 * @public
 *
 * The output of {@link DeleteBillEstimateCommand}.
 */
export interface DeleteBillEstimateCommandOutput extends DeleteBillEstimateResponse, __MetadataBearer {}

/**
 * <p> Deletes an existing bill estimate. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BCMPricingCalculatorClient, DeleteBillEstimateCommand } from "@aws-sdk/client-bcm-pricing-calculator"; // ES Modules import
 * // const { BCMPricingCalculatorClient, DeleteBillEstimateCommand } = require("@aws-sdk/client-bcm-pricing-calculator"); // CommonJS import
 * const client = new BCMPricingCalculatorClient(config);
 * const input = { // DeleteBillEstimateRequest
 *   identifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteBillEstimateCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteBillEstimateCommandInput - {@link DeleteBillEstimateCommandInput}
 * @returns {@link DeleteBillEstimateCommandOutput}
 * @see {@link DeleteBillEstimateCommandInput} for command's `input` shape.
 * @see {@link DeleteBillEstimateCommandOutput} for command's `response` shape.
 * @see {@link BCMPricingCalculatorClientResolvedConfig | config} for BCMPricingCalculatorClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p> The request could not be processed because of conflict in the current state of the resource. </p>
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
export class DeleteBillEstimateCommand extends $Command
  .classBuilder<
    DeleteBillEstimateCommandInput,
    DeleteBillEstimateCommandOutput,
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
  .s("AWSBCMPricingCalculator", "DeleteBillEstimate", {})
  .n("BCMPricingCalculatorClient", "DeleteBillEstimateCommand")
  .f(void 0, void 0)
  .ser(se_DeleteBillEstimateCommand)
  .de(de_DeleteBillEstimateCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteBillEstimateRequest;
      output: {};
    };
    sdk: {
      input: DeleteBillEstimateCommandInput;
      output: DeleteBillEstimateCommandOutput;
    };
  };
}
