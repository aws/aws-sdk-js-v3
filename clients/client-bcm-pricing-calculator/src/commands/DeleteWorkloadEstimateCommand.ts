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
import { DeleteWorkloadEstimateRequest, DeleteWorkloadEstimateResponse } from "../models/models_0";
import { de_DeleteWorkloadEstimateCommand, se_DeleteWorkloadEstimateCommand } from "../protocols/Aws_json1_0";

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
 * <p>
 *         Deletes an existing workload estimate.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BCMPricingCalculatorClient, DeleteWorkloadEstimateCommand } from "@aws-sdk/client-bcm-pricing-calculator"; // ES Modules import
 * // const { BCMPricingCalculatorClient, DeleteWorkloadEstimateCommand } = require("@aws-sdk/client-bcm-pricing-calculator"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
 *  <p>
 *         The requested data is currently unavailable.
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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSBCMPricingCalculator", "DeleteWorkloadEstimate", {})
  .n("BCMPricingCalculatorClient", "DeleteWorkloadEstimateCommand")
  .f(void 0, void 0)
  .ser(se_DeleteWorkloadEstimateCommand)
  .de(de_DeleteWorkloadEstimateCommand)
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
