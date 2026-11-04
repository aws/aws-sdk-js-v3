// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CancelPlanExecutionRequest, CancelPlanExecutionResponse } from "../models/models_0";
import { CancelPlanExecution$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CancelPlanExecutionCommand}.
 */
export interface CancelPlanExecutionCommandInput extends CancelPlanExecutionRequest {}
/**
 * @public
 *
 * The output of {@link CancelPlanExecutionCommand}.
 */
export interface CancelPlanExecutionCommandOutput extends CancelPlanExecutionResponse, __MetadataBearer {}

/**
 * Cancels an in-progress plan execution. This operation stops the execution of the plan and prevents any further steps from being processed.
 *
 * You must specify the plan ARN and execution ID. You can also provide an optional comment explaining why the execution was canceled.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ARCRegionSwitchClient, CancelPlanExecutionCommand } from "@aws-sdk/client-arc-region-switch"; // ES Modules import
 * // const { ARCRegionSwitchClient, CancelPlanExecutionCommand } = require("@aws-sdk/client-arc-region-switch"); // CommonJS import
 * // import type { ARCRegionSwitchClientConfig } from "@aws-sdk/client-arc-region-switch";
 * const config = {}; // type is ARCRegionSwitchClientConfig
 * const client = new ARCRegionSwitchClient(config);
 * const input = { // CancelPlanExecutionRequest
 *   planArn: "STRING_VALUE", // required
 *   executionId: "STRING_VALUE", // required
 *   comment: "STRING_VALUE",
 * };
 * const command = new CancelPlanExecutionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CancelPlanExecutionCommandInput - {@link CancelPlanExecutionCommandInput}
 * @returns {@link CancelPlanExecutionCommandOutput}
 * @see {@link CancelPlanExecutionCommandInput} for command's `input` shape.
 * @see {@link CancelPlanExecutionCommandOutput} for command's `response` shape.
 * @see {@link ARCRegionSwitchClientResolvedConfig | config} for ARCRegionSwitchClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * HTTP Status Code: 403
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found.
 *
 * HTTP Status Code: 404
 *
 * @throws {@link ARCRegionSwitchServiceException}
 *
 * Base exception class for all service exceptions from ARCRegionSwitch service.
 *
 * @public
 */
export class CancelPlanExecutionCommand extends command<CancelPlanExecutionCommandInput, CancelPlanExecutionCommandOutput>(
  _ep0,
  _mw0,
  "CancelPlanExecution",
  CancelPlanExecution$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CancelPlanExecutionRequest;
      output: {};
    };
    sdk: {
      input: CancelPlanExecutionCommandInput;
      output: CancelPlanExecutionCommandOutput;
    };
  };
}
