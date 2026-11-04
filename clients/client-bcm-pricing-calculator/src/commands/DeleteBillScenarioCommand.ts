// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteBillScenarioRequest, DeleteBillScenarioResponse } from "../models/models_0";
import { DeleteBillScenario$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteBillScenarioCommand}.
 */
export interface DeleteBillScenarioCommandInput extends DeleteBillScenarioRequest {}
/**
 * @public
 *
 * The output of {@link DeleteBillScenarioCommand}.
 */
export interface DeleteBillScenarioCommandOutput extends DeleteBillScenarioResponse, __MetadataBearer {}

/**
 * Deletes an existing bill scenario.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BCMPricingCalculatorClient, DeleteBillScenarioCommand } from "@aws-sdk/client-bcm-pricing-calculator"; // ES Modules import
 * // const { BCMPricingCalculatorClient, DeleteBillScenarioCommand } = require("@aws-sdk/client-bcm-pricing-calculator"); // CommonJS import
 * // import type { BCMPricingCalculatorClientConfig } from "@aws-sdk/client-bcm-pricing-calculator";
 * const config = {}; // type is BCMPricingCalculatorClientConfig
 * const client = new BCMPricingCalculatorClient(config);
 * const input = { // DeleteBillScenarioRequest
 *   identifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteBillScenarioCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteBillScenarioCommandInput - {@link DeleteBillScenarioCommandInput}
 * @returns {@link DeleteBillScenarioCommandOutput}
 * @see {@link DeleteBillScenarioCommandInput} for command's `input` shape.
 * @see {@link DeleteBillScenarioCommandOutput} for command's `response` shape.
 * @see {@link BCMPricingCalculatorClientResolvedConfig | config} for BCMPricingCalculatorClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request could not be processed because of conflict in the current state of the resource.
 *
 * @throws {@link DataUnavailableException} (client fault)
 *
 * The requested data is currently unavailable.
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
export class DeleteBillScenarioCommand extends command<DeleteBillScenarioCommandInput, DeleteBillScenarioCommandOutput>(
  _ep0,
  _mw0,
  "DeleteBillScenario",
  DeleteBillScenario$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteBillScenarioRequest;
      output: {};
    };
    sdk: {
      input: DeleteBillScenarioCommandInput;
      output: DeleteBillScenarioCommandOutput;
    };
  };
}
