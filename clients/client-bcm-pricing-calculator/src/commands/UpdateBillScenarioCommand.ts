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
import { UpdateBillScenarioRequest, UpdateBillScenarioResponse } from "../models/models_0";
import { de_UpdateBillScenarioCommand, se_UpdateBillScenarioCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateBillScenarioCommand}.
 */
export interface UpdateBillScenarioCommandInput extends UpdateBillScenarioRequest {}
/**
 * @public
 *
 * The output of {@link UpdateBillScenarioCommand}.
 */
export interface UpdateBillScenarioCommandOutput extends UpdateBillScenarioResponse, __MetadataBearer {}

/**
 * <p>
 *                         Updates an existing bill scenario.
 *                 </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BCMPricingCalculatorClient, UpdateBillScenarioCommand } from "@aws-sdk/client-bcm-pricing-calculator"; // ES Modules import
 * // const { BCMPricingCalculatorClient, UpdateBillScenarioCommand } = require("@aws-sdk/client-bcm-pricing-calculator"); // CommonJS import
 * const client = new BCMPricingCalculatorClient(config);
 * const input = { // UpdateBillScenarioRequest
 *   identifier: "STRING_VALUE", // required
 *   name: "STRING_VALUE",
 *   expiresAt: new Date("TIMESTAMP"),
 * };
 * const command = new UpdateBillScenarioCommand(input);
 * const response = await client.send(command);
 * // { // UpdateBillScenarioResponse
 * //   id: "STRING_VALUE", // required
 * //   name: "STRING_VALUE",
 * //   billInterval: { // BillInterval
 * //     start: new Date("TIMESTAMP"),
 * //     end: new Date("TIMESTAMP"),
 * //   },
 * //   status: "READY" || "LOCKED" || "FAILED",
 * //   createdAt: new Date("TIMESTAMP"),
 * //   expiresAt: new Date("TIMESTAMP"),
 * //   failureMessage: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateBillScenarioCommandInput - {@link UpdateBillScenarioCommandInput}
 * @returns {@link UpdateBillScenarioCommandOutput}
 * @see {@link UpdateBillScenarioCommandInput} for command's `input` shape.
 * @see {@link UpdateBillScenarioCommandOutput} for command's `response` shape.
 * @see {@link BCMPricingCalculatorClientResolvedConfig | config} for BCMPricingCalculatorClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>
 *         The request could not be processed because of conflict in the current state of the resource.
 *         </p>
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
 *
 * @public
 */
export class UpdateBillScenarioCommand extends $Command
  .classBuilder<
    UpdateBillScenarioCommandInput,
    UpdateBillScenarioCommandOutput,
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
  .s("AWSBCMPricingCalculator", "UpdateBillScenario", {})
  .n("BCMPricingCalculatorClient", "UpdateBillScenarioCommand")
  .f(void 0, void 0)
  .ser(se_UpdateBillScenarioCommand)
  .de(de_UpdateBillScenarioCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateBillScenarioRequest;
      output: UpdateBillScenarioResponse;
    };
    sdk: {
      input: UpdateBillScenarioCommandInput;
      output: UpdateBillScenarioCommandOutput;
    };
  };
}
