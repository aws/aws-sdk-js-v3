// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  BCMPricingCalculatorClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../BCMPricingCalculatorClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetBillScenarioRequest, GetBillScenarioResponse } from "../models/models_0";
import { GetBillScenario } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetBillScenarioCommand}.
 */
export interface GetBillScenarioCommandInput extends GetBillScenarioRequest {}
/**
 * @public
 *
 * The output of {@link GetBillScenarioCommand}.
 */
export interface GetBillScenarioCommandOutput extends GetBillScenarioResponse, __MetadataBearer {}

/**
 * <p> Retrieves details of a specific bill scenario. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BCMPricingCalculatorClient, GetBillScenarioCommand } from "@aws-sdk/client-bcm-pricing-calculator"; // ES Modules import
 * // const { BCMPricingCalculatorClient, GetBillScenarioCommand } = require("@aws-sdk/client-bcm-pricing-calculator"); // CommonJS import
 * // import type { BCMPricingCalculatorClientConfig } from "@aws-sdk/client-bcm-pricing-calculator";
 * const config = {}; // type is BCMPricingCalculatorClientConfig
 * const client = new BCMPricingCalculatorClient(config);
 * const input = { // GetBillScenarioRequest
 *   identifier: "STRING_VALUE", // required
 * };
 * const command = new GetBillScenarioCommand(input);
 * const response = await client.send(command);
 * // { // GetBillScenarioResponse
 * //   id: "STRING_VALUE", // required
 * //   name: "STRING_VALUE",
 * //   billInterval: { // BillInterval
 * //     start: new Date("TIMESTAMP"),
 * //     end: new Date("TIMESTAMP"),
 * //   },
 * //   status: "READY" || "LOCKED" || "FAILED" || "STALE",
 * //   createdAt: new Date("TIMESTAMP"),
 * //   expiresAt: new Date("TIMESTAMP"),
 * //   failureMessage: "STRING_VALUE",
 * //   groupSharingPreference: "OPEN" || "PRIORITIZED" || "RESTRICTED",
 * //   costCategoryGroupSharingPreferenceArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetBillScenarioCommandInput - {@link GetBillScenarioCommandInput}
 * @returns {@link GetBillScenarioCommandOutput}
 * @see {@link GetBillScenarioCommandInput} for command's `input` shape.
 * @see {@link GetBillScenarioCommandOutput} for command's `response` shape.
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
export class GetBillScenarioCommand extends $Command
  .classBuilder<
    GetBillScenarioCommandInput,
    GetBillScenarioCommandOutput,
    BCMPricingCalculatorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BCMPricingCalculatorClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSBCMPricingCalculator", "GetBillScenario", {})
  .n("BCMPricingCalculatorClient", "GetBillScenarioCommand")
  .sc(GetBillScenario)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetBillScenarioRequest;
      output: GetBillScenarioResponse;
    };
    sdk: {
      input: GetBillScenarioCommandInput;
      output: GetBillScenarioCommandOutput;
    };
  };
}
