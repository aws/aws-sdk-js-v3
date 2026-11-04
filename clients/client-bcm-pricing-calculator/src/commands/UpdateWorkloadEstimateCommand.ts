// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateWorkloadEstimateRequest, UpdateWorkloadEstimateResponse } from "../models/models_0";
import { UpdateWorkloadEstimate$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateWorkloadEstimateCommand}.
 */
export interface UpdateWorkloadEstimateCommandInput extends UpdateWorkloadEstimateRequest {}
/**
 * @public
 *
 * The output of {@link UpdateWorkloadEstimateCommand}.
 */
export interface UpdateWorkloadEstimateCommandOutput extends UpdateWorkloadEstimateResponse, __MetadataBearer {}

/**
 * Updates an existing workload estimate.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BCMPricingCalculatorClient, UpdateWorkloadEstimateCommand } from "@aws-sdk/client-bcm-pricing-calculator"; // ES Modules import
 * // const { BCMPricingCalculatorClient, UpdateWorkloadEstimateCommand } = require("@aws-sdk/client-bcm-pricing-calculator"); // CommonJS import
 * // import type { BCMPricingCalculatorClientConfig } from "@aws-sdk/client-bcm-pricing-calculator";
 * const config = {}; // type is BCMPricingCalculatorClientConfig
 * const client = new BCMPricingCalculatorClient(config);
 * const input = { // UpdateWorkloadEstimateRequest
 *   identifier: "STRING_VALUE", // required
 *   name: "STRING_VALUE",
 *   expiresAt: new Date("TIMESTAMP"),
 * };
 * const command = new UpdateWorkloadEstimateCommand(input);
 * const response = await client.send(command);
 * // { // UpdateWorkloadEstimateResponse
 * //   id: "STRING_VALUE", // required
 * //   name: "STRING_VALUE",
 * //   createdAt: new Date("TIMESTAMP"),
 * //   expiresAt: new Date("TIMESTAMP"),
 * //   rateType: "BEFORE_DISCOUNTS" || "AFTER_DISCOUNTS" || "AFTER_DISCOUNTS_AND_COMMITMENTS",
 * //   rateTimestamp: new Date("TIMESTAMP"),
 * //   status: "UPDATING" || "VALID" || "INVALID" || "ACTION_NEEDED",
 * //   totalCost: Number("double"),
 * //   costCurrency: "USD",
 * //   failureMessage: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateWorkloadEstimateCommandInput - {@link UpdateWorkloadEstimateCommandInput}
 * @returns {@link UpdateWorkloadEstimateCommandOutput}
 * @see {@link UpdateWorkloadEstimateCommandInput} for command's `input` shape.
 * @see {@link UpdateWorkloadEstimateCommandOutput} for command's `response` shape.
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
export class UpdateWorkloadEstimateCommand extends command<UpdateWorkloadEstimateCommandInput, UpdateWorkloadEstimateCommandOutput>(
  _ep0,
  _mw0,
  "UpdateWorkloadEstimate",
  UpdateWorkloadEstimate$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateWorkloadEstimateRequest;
      output: UpdateWorkloadEstimateResponse;
    };
    sdk: {
      input: UpdateWorkloadEstimateCommandInput;
      output: UpdateWorkloadEstimateCommandOutput;
    };
  };
}
