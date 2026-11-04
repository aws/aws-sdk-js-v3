// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateBillScenarioRequest, UpdateBillScenarioResponse } from "../models/models_0";
import { UpdateBillScenario$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Updates an existing bill scenario.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BCMPricingCalculatorClient, UpdateBillScenarioCommand } from "@aws-sdk/client-bcm-pricing-calculator"; // ES Modules import
 * // const { BCMPricingCalculatorClient, UpdateBillScenarioCommand } = require("@aws-sdk/client-bcm-pricing-calculator"); // CommonJS import
 * // import type { BCMPricingCalculatorClientConfig } from "@aws-sdk/client-bcm-pricing-calculator";
 * const config = {}; // type is BCMPricingCalculatorClientConfig
 * const client = new BCMPricingCalculatorClient(config);
 * const input = { // UpdateBillScenarioRequest
 *   identifier: "STRING_VALUE", // required
 *   name: "STRING_VALUE",
 *   expiresAt: new Date("TIMESTAMP"),
 *   groupSharingPreference: "OPEN" || "PRIORITIZED" || "RESTRICTED",
 *   costCategoryGroupSharingPreferenceArn: "STRING_VALUE",
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
 * @param UpdateBillScenarioCommandInput - {@link UpdateBillScenarioCommandInput}
 * @returns {@link UpdateBillScenarioCommandOutput}
 * @see {@link UpdateBillScenarioCommandInput} for command's `input` shape.
 * @see {@link UpdateBillScenarioCommandOutput} for command's `response` shape.
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
export class UpdateBillScenarioCommand extends command<UpdateBillScenarioCommandInput, UpdateBillScenarioCommandOutput>(
  _ep0,
  _mw0,
  "UpdateBillScenario",
  UpdateBillScenario$
) {
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
