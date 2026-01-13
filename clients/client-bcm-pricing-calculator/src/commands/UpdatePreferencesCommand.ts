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
import type { UpdatePreferencesRequest, UpdatePreferencesResponse } from "../models/models_0";
import { UpdatePreferences$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdatePreferencesCommand}.
 */
export interface UpdatePreferencesCommandInput extends UpdatePreferencesRequest {}
/**
 * @public
 *
 * The output of {@link UpdatePreferencesCommand}.
 */
export interface UpdatePreferencesCommandOutput extends UpdatePreferencesResponse, __MetadataBearer {}

/**
 * <p> Updates the preferences for Pricing Calculator. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BCMPricingCalculatorClient, UpdatePreferencesCommand } from "@aws-sdk/client-bcm-pricing-calculator"; // ES Modules import
 * // const { BCMPricingCalculatorClient, UpdatePreferencesCommand } = require("@aws-sdk/client-bcm-pricing-calculator"); // CommonJS import
 * // import type { BCMPricingCalculatorClientConfig } from "@aws-sdk/client-bcm-pricing-calculator";
 * const config = {}; // type is BCMPricingCalculatorClientConfig
 * const client = new BCMPricingCalculatorClient(config);
 * const input = { // UpdatePreferencesRequest
 *   managementAccountRateTypeSelections: [ // RateTypes
 *     "BEFORE_DISCOUNTS" || "AFTER_DISCOUNTS" || "AFTER_DISCOUNTS_AND_COMMITMENTS",
 *   ],
 *   memberAccountRateTypeSelections: [
 *     "BEFORE_DISCOUNTS" || "AFTER_DISCOUNTS" || "AFTER_DISCOUNTS_AND_COMMITMENTS",
 *   ],
 *   standaloneAccountRateTypeSelections: [
 *     "BEFORE_DISCOUNTS" || "AFTER_DISCOUNTS" || "AFTER_DISCOUNTS_AND_COMMITMENTS",
 *   ],
 * };
 * const command = new UpdatePreferencesCommand(input);
 * const response = await client.send(command);
 * // { // UpdatePreferencesResponse
 * //   managementAccountRateTypeSelections: [ // RateTypes
 * //     "BEFORE_DISCOUNTS" || "AFTER_DISCOUNTS" || "AFTER_DISCOUNTS_AND_COMMITMENTS",
 * //   ],
 * //   memberAccountRateTypeSelections: [
 * //     "BEFORE_DISCOUNTS" || "AFTER_DISCOUNTS" || "AFTER_DISCOUNTS_AND_COMMITMENTS",
 * //   ],
 * //   standaloneAccountRateTypeSelections: [
 * //     "BEFORE_DISCOUNTS" || "AFTER_DISCOUNTS" || "AFTER_DISCOUNTS_AND_COMMITMENTS",
 * //   ],
 * // };
 *
 * ```
 *
 * @param UpdatePreferencesCommandInput - {@link UpdatePreferencesCommandInput}
 * @returns {@link UpdatePreferencesCommandOutput}
 * @see {@link UpdatePreferencesCommandInput} for command's `input` shape.
 * @see {@link UpdatePreferencesCommandOutput} for command's `response` shape.
 * @see {@link BCMPricingCalculatorClientResolvedConfig | config} for BCMPricingCalculatorClient's `config` shape.
 *
 * @throws {@link DataUnavailableException} (client fault)
 *  <p> The requested data is currently unavailable. </p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p> The request would cause you to exceed your service quota. </p>
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
export class UpdatePreferencesCommand extends $Command
  .classBuilder<
    UpdatePreferencesCommandInput,
    UpdatePreferencesCommandOutput,
    BCMPricingCalculatorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BCMPricingCalculatorClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSBCMPricingCalculator", "UpdatePreferences", {})
  .n("BCMPricingCalculatorClient", "UpdatePreferencesCommand")
  .sc(UpdatePreferences$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdatePreferencesRequest;
      output: UpdatePreferencesResponse;
    };
    sdk: {
      input: UpdatePreferencesCommandInput;
      output: UpdatePreferencesCommandOutput;
    };
  };
}
