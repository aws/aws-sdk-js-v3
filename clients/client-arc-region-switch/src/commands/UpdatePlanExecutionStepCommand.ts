// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdatePlanExecutionStepRequest, UpdatePlanExecutionStepResponse } from "../models/models_0";
import { UpdatePlanExecutionStep$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdatePlanExecutionStepCommand}.
 */
export interface UpdatePlanExecutionStepCommandInput extends UpdatePlanExecutionStepRequest {}
/**
 * @public
 *
 * The output of {@link UpdatePlanExecutionStepCommand}.
 */
export interface UpdatePlanExecutionStepCommandOutput extends UpdatePlanExecutionStepResponse, __MetadataBearer {}

/**
 * <p>Updates a specific step in an in-progress plan execution. This operation allows you to modify the step's comment or action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ARCRegionSwitchClient, UpdatePlanExecutionStepCommand } from "@aws-sdk/client-arc-region-switch"; // ES Modules import
 * // const { ARCRegionSwitchClient, UpdatePlanExecutionStepCommand } = require("@aws-sdk/client-arc-region-switch"); // CommonJS import
 * // import type { ARCRegionSwitchClientConfig } from "@aws-sdk/client-arc-region-switch";
 * const config = {}; // type is ARCRegionSwitchClientConfig
 * const client = new ARCRegionSwitchClient(config);
 * const input = { // UpdatePlanExecutionStepRequest
 *   planArn: "STRING_VALUE", // required
 *   executionId: "STRING_VALUE", // required
 *   comment: "STRING_VALUE", // required
 *   stepName: "STRING_VALUE", // required
 *   actionToTake: "switchToUngraceful" || "skip", // required
 * };
 * const command = new UpdatePlanExecutionStepCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdatePlanExecutionStepCommandInput - {@link UpdatePlanExecutionStepCommandInput}
 * @returns {@link UpdatePlanExecutionStepCommandOutput}
 * @see {@link UpdatePlanExecutionStepCommandInput} for command's `input` shape.
 * @see {@link UpdatePlanExecutionStepCommandOutput} for command's `response` shape.
 * @see {@link ARCRegionSwitchClientResolvedConfig | config} for ARCRegionSwitchClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p> <p>HTTP Status Code: 403</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p> <p>HTTP Status Code: 404</p>
 *
 * @throws {@link ARCRegionSwitchServiceException}
 * <p>Base exception class for all service exceptions from ARCRegionSwitch service.</p>
 *
 *
 * @public
 */
export class UpdatePlanExecutionStepCommand extends command<UpdatePlanExecutionStepCommandInput, UpdatePlanExecutionStepCommandOutput>(
  _ep0,
  _mw0,
  "UpdatePlanExecutionStep",
  UpdatePlanExecutionStep$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdatePlanExecutionStepRequest;
      output: {};
    };
    sdk: {
      input: UpdatePlanExecutionStepCommandInput;
      output: UpdatePlanExecutionStepCommandOutput;
    };
  };
}
