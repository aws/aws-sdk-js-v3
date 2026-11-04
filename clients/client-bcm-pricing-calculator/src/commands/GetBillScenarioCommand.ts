// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetBillScenarioRequest, GetBillScenarioResponse } from "../models/models_0";
import { GetBillScenario$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Retrieves details of a specific bill scenario.
 *
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
 *
 * The requested data is currently unavailable.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal error has occurred. Retry your request, but if the problem persists, contact Amazon Web Services support.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input provided fails to satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link BCMPricingCalculatorServiceException}
 *
 * Base exception class for all service exceptions from BCMPricingCalculator service.
 *
 * @public
 */
export class GetBillScenarioCommand extends command<GetBillScenarioCommandInput, GetBillScenarioCommandOutput>(
  _ep0,
  _mw0,
  "GetBillScenario",
  GetBillScenario$
) {
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
