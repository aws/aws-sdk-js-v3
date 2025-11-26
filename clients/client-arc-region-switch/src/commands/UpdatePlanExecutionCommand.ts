// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  ARCRegionSwitchClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ARCRegionSwitchClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdatePlanExecutionRequest, UpdatePlanExecutionResponse } from "../models/models_0";
import { UpdatePlanExecution } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdatePlanExecutionCommand}.
 */
export interface UpdatePlanExecutionCommandInput extends UpdatePlanExecutionRequest {}
/**
 * @public
 *
 * The output of {@link UpdatePlanExecutionCommand}.
 */
export interface UpdatePlanExecutionCommandOutput extends UpdatePlanExecutionResponse, __MetadataBearer {}

/**
 * <p>Updates an in-progress plan execution. This operation allows you to modify certain aspects of the execution, such as adding a comment or changing the action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ARCRegionSwitchClient, UpdatePlanExecutionCommand } from "@aws-sdk/client-arc-region-switch"; // ES Modules import
 * // const { ARCRegionSwitchClient, UpdatePlanExecutionCommand } = require("@aws-sdk/client-arc-region-switch"); // CommonJS import
 * // import type { ARCRegionSwitchClientConfig } from "@aws-sdk/client-arc-region-switch";
 * const config = {}; // type is ARCRegionSwitchClientConfig
 * const client = new ARCRegionSwitchClient(config);
 * const input = { // UpdatePlanExecutionRequest
 *   planArn: "STRING_VALUE", // required
 *   executionId: "STRING_VALUE", // required
 *   action: "switchToGraceful" || "switchToUngraceful" || "pause" || "resume", // required
 *   comment: "STRING_VALUE",
 * };
 * const command = new UpdatePlanExecutionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdatePlanExecutionCommandInput - {@link UpdatePlanExecutionCommandInput}
 * @returns {@link UpdatePlanExecutionCommandOutput}
 * @see {@link UpdatePlanExecutionCommandInput} for command's `input` shape.
 * @see {@link UpdatePlanExecutionCommandOutput} for command's `response` shape.
 * @see {@link ARCRegionSwitchClientResolvedConfig | config} for ARCRegionSwitchClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p> <p>HTTP Status Code: 403</p>
 *
 * @throws {@link IllegalStateException} (client fault)
 *  <p>The operation failed because the current state of the resource doesn't allow the operation to proceed.</p> <p>HTTP Status Code: 400</p>
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
export class UpdatePlanExecutionCommand extends $Command
  .classBuilder<
    UpdatePlanExecutionCommandInput,
    UpdatePlanExecutionCommandOutput,
    ARCRegionSwitchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ARCRegionSwitchClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ArcRegionSwitch", "UpdatePlanExecution", {})
  .n("ARCRegionSwitchClient", "UpdatePlanExecutionCommand")
  .sc(UpdatePlanExecution)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdatePlanExecutionRequest;
      output: {};
    };
    sdk: {
      input: UpdatePlanExecutionCommandInput;
      output: UpdatePlanExecutionCommandOutput;
    };
  };
}
