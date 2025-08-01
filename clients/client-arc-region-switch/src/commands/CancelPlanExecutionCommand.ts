// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ARCRegionSwitchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ARCRegionSwitchClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CancelPlanExecutionRequest, CancelPlanExecutionResponse } from "../models/models_0";
import { de_CancelPlanExecutionCommand, se_CancelPlanExecutionCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Cancels an in-progress plan execution. This operation stops the execution of the plan and prevents any further steps from being processed.</p> <p>You must specify the plan ARN and execution ID. You can also provide an optional comment explaining why the execution was canceled.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ARCRegionSwitchClient, CancelPlanExecutionCommand } from "@aws-sdk/client-arc-region-switch"; // ES Modules import
 * // const { ARCRegionSwitchClient, CancelPlanExecutionCommand } = require("@aws-sdk/client-arc-region-switch"); // CommonJS import
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
export class CancelPlanExecutionCommand extends $Command
  .classBuilder<
    CancelPlanExecutionCommandInput,
    CancelPlanExecutionCommandOutput,
    ARCRegionSwitchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ARCRegionSwitchClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ArcRegionSwitch", "CancelPlanExecution", {})
  .n("ARCRegionSwitchClient", "CancelPlanExecutionCommand")
  .f(void 0, void 0)
  .ser(se_CancelPlanExecutionCommand)
  .de(de_CancelPlanExecutionCommand)
  .build() {
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
