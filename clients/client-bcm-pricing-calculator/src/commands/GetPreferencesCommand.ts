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
import { GetPreferencesRequest, GetPreferencesResponse } from "../models/models_0";
import { de_GetPreferencesCommand, se_GetPreferencesCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetPreferencesCommand}.
 */
export interface GetPreferencesCommandInput extends GetPreferencesRequest {}
/**
 * @public
 *
 * The output of {@link GetPreferencesCommand}.
 */
export interface GetPreferencesCommandOutput extends GetPreferencesResponse, __MetadataBearer {}

/**
 * <p>
 *         Retrieves the current preferences for Pricing Calculator.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BCMPricingCalculatorClient, GetPreferencesCommand } from "@aws-sdk/client-bcm-pricing-calculator"; // ES Modules import
 * // const { BCMPricingCalculatorClient, GetPreferencesCommand } = require("@aws-sdk/client-bcm-pricing-calculator"); // CommonJS import
 * const client = new BCMPricingCalculatorClient(config);
 * const input = {};
 * const command = new GetPreferencesCommand(input);
 * const response = await client.send(command);
 * // { // GetPreferencesResponse
 * //   managementAccountRateTypeSelections: [ // RateTypes
 * //     "BEFORE_DISCOUNTS" || "AFTER_DISCOUNTS",
 * //   ],
 * //   memberAccountRateTypeSelections: [
 * //     "BEFORE_DISCOUNTS" || "AFTER_DISCOUNTS",
 * //   ],
 * //   standaloneAccountRateTypeSelections: [
 * //     "BEFORE_DISCOUNTS" || "AFTER_DISCOUNTS",
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetPreferencesCommandInput - {@link GetPreferencesCommandInput}
 * @returns {@link GetPreferencesCommandOutput}
 * @see {@link GetPreferencesCommandInput} for command's `input` shape.
 * @see {@link GetPreferencesCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class GetPreferencesCommand extends $Command
  .classBuilder<
    GetPreferencesCommandInput,
    GetPreferencesCommandOutput,
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
  .s("AWSBCMPricingCalculator", "GetPreferences", {})
  .n("BCMPricingCalculatorClient", "GetPreferencesCommand")
  .f(void 0, void 0)
  .ser(se_GetPreferencesCommand)
  .de(de_GetPreferencesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: GetPreferencesResponse;
    };
    sdk: {
      input: GetPreferencesCommandInput;
      output: GetPreferencesCommandOutput;
    };
  };
}
