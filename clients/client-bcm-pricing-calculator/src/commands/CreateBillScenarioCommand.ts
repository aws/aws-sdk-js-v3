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
import { CreateBillScenarioRequest, CreateBillScenarioResponse } from "../models/models_0";
import { CreateBillScenario } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateBillScenarioCommand}.
 */
export interface CreateBillScenarioCommandInput extends CreateBillScenarioRequest {}
/**
 * @public
 *
 * The output of {@link CreateBillScenarioCommand}.
 */
export interface CreateBillScenarioCommandOutput extends CreateBillScenarioResponse, __MetadataBearer {}

/**
 * <p> Creates a new bill scenario to model potential changes to Amazon Web Services usage and costs. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BCMPricingCalculatorClient, CreateBillScenarioCommand } from "@aws-sdk/client-bcm-pricing-calculator"; // ES Modules import
 * // const { BCMPricingCalculatorClient, CreateBillScenarioCommand } = require("@aws-sdk/client-bcm-pricing-calculator"); // CommonJS import
 * // import type { BCMPricingCalculatorClientConfig } from "@aws-sdk/client-bcm-pricing-calculator";
 * const config = {}; // type is BCMPricingCalculatorClientConfig
 * const client = new BCMPricingCalculatorClient(config);
 * const input = { // CreateBillScenarioRequest
 *   name: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 *   tags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateBillScenarioCommand(input);
 * const response = await client.send(command);
 * // { // CreateBillScenarioResponse
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
 * // };
 *
 * ```
 *
 * @param CreateBillScenarioCommandInput - {@link CreateBillScenarioCommandInput}
 * @returns {@link CreateBillScenarioCommandOutput}
 * @see {@link CreateBillScenarioCommandInput} for command's `input` shape.
 * @see {@link CreateBillScenarioCommandOutput} for command's `response` shape.
 * @see {@link BCMPricingCalculatorClientResolvedConfig | config} for BCMPricingCalculatorClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p> The request could not be processed because of conflict in the current state of the resource. </p>
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
export class CreateBillScenarioCommand extends $Command
  .classBuilder<
    CreateBillScenarioCommandInput,
    CreateBillScenarioCommandOutput,
    BCMPricingCalculatorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BCMPricingCalculatorClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSBCMPricingCalculator", "CreateBillScenario", {})
  .n("BCMPricingCalculatorClient", "CreateBillScenarioCommand")
  .sc(CreateBillScenario)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateBillScenarioRequest;
      output: CreateBillScenarioResponse;
    };
    sdk: {
      input: CreateBillScenarioCommandInput;
      output: CreateBillScenarioCommandOutput;
    };
  };
}
