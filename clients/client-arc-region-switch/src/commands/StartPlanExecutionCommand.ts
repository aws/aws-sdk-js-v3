// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ARCRegionSwitchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ARCRegionSwitchClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { StartPlanExecutionRequest, StartPlanExecutionResponse } from "../models/models_0";
import { StartPlanExecution } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartPlanExecutionCommand}.
 */
export interface StartPlanExecutionCommandInput extends StartPlanExecutionRequest {}
/**
 * @public
 *
 * The output of {@link StartPlanExecutionCommand}.
 */
export interface StartPlanExecutionCommandOutput extends StartPlanExecutionResponse, __MetadataBearer {}

/**
 * <p>Starts the execution of a Region switch plan. You can execute a plan in either PRACTICE or RECOVERY mode.</p> <p>In PRACTICE mode, the execution simulates the steps without making actual changes to your application's traffic routing. In RECOVERY mode, the execution performs actual changes to shift traffic between Regions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ARCRegionSwitchClient, StartPlanExecutionCommand } from "@aws-sdk/client-arc-region-switch"; // ES Modules import
 * // const { ARCRegionSwitchClient, StartPlanExecutionCommand } = require("@aws-sdk/client-arc-region-switch"); // CommonJS import
 * // import type { ARCRegionSwitchClientConfig } from "@aws-sdk/client-arc-region-switch";
 * const config = {}; // type is ARCRegionSwitchClientConfig
 * const client = new ARCRegionSwitchClient(config);
 * const input = { // StartPlanExecutionRequest
 *   planArn: "STRING_VALUE", // required
 *   targetRegion: "STRING_VALUE", // required
 *   action: "activate" || "deactivate", // required
 *   mode: "graceful" || "ungraceful",
 *   comment: "STRING_VALUE",
 *   latestVersion: "STRING_VALUE",
 * };
 * const command = new StartPlanExecutionCommand(input);
 * const response = await client.send(command);
 * // { // StartPlanExecutionResponse
 * //   executionId: "STRING_VALUE",
 * //   plan: "STRING_VALUE",
 * //   planVersion: "STRING_VALUE",
 * //   activateRegion: "STRING_VALUE",
 * //   deactivateRegion: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartPlanExecutionCommandInput - {@link StartPlanExecutionCommandInput}
 * @returns {@link StartPlanExecutionCommandOutput}
 * @see {@link StartPlanExecutionCommandInput} for command's `input` shape.
 * @see {@link StartPlanExecutionCommandOutput} for command's `response` shape.
 * @see {@link ARCRegionSwitchClientResolvedConfig | config} for ARCRegionSwitchClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p> <p>HTTP Status Code: 403</p>
 *
 * @throws {@link IllegalArgumentException} (client fault)
 *  <p>The request processing has an invalid argument.</p>
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
export class StartPlanExecutionCommand extends $Command
  .classBuilder<
    StartPlanExecutionCommandInput,
    StartPlanExecutionCommandOutput,
    ARCRegionSwitchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ARCRegionSwitchClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ArcRegionSwitch", "StartPlanExecution", {})
  .n("ARCRegionSwitchClient", "StartPlanExecutionCommand")
  .sc(StartPlanExecution)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartPlanExecutionRequest;
      output: StartPlanExecutionResponse;
    };
    sdk: {
      input: StartPlanExecutionCommandInput;
      output: StartPlanExecutionCommandOutput;
    };
  };
}
