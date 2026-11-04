// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteBillEstimateRequest, DeleteBillEstimateResponse } from "../models/models_0";
import { DeleteBillEstimate$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Deletes an existing bill estimate.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BCMPricingCalculatorClient, DeleteBillEstimateCommand } from "@aws-sdk/client-bcm-pricing-calculator"; // ES Modules import
 * // const { BCMPricingCalculatorClient, DeleteBillEstimateCommand } = require("@aws-sdk/client-bcm-pricing-calculator"); // CommonJS import
 * // import type { BCMPricingCalculatorClientConfig } from "@aws-sdk/client-bcm-pricing-calculator";
 * const config = {}; // type is BCMPricingCalculatorClientConfig
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
export class DeleteBillEstimateCommand extends command<DeleteBillEstimateCommandInput, DeleteBillEstimateCommandOutput>(
  _ep0,
  _mw0,
  "DeleteBillEstimate",
  DeleteBillEstimate$
) {
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
