// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ARCRegionSwitchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ARCRegionSwitchClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ApprovePlanExecutionStepRequest, ApprovePlanExecutionStepResponse } from "../models/models_0";
import { ApprovePlanExecutionStep } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ApprovePlanExecutionStepCommand}.
 */
export interface ApprovePlanExecutionStepCommandInput extends ApprovePlanExecutionStepRequest {}
/**
 * @public
 *
 * The output of {@link ApprovePlanExecutionStepCommand}.
 */
export interface ApprovePlanExecutionStepCommandOutput extends ApprovePlanExecutionStepResponse, __MetadataBearer {}

/**
 * <p>Approves a step in a plan execution that requires manual approval. When you create a plan, you can include approval steps that require manual intervention before the execution can proceed. This operation allows you to provide that approval.</p> <p>You must specify the plan ARN, execution ID, step name, and approval status. You can also provide an optional comment explaining the approval decision.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ARCRegionSwitchClient, ApprovePlanExecutionStepCommand } from "@aws-sdk/client-arc-region-switch"; // ES Modules import
 * // const { ARCRegionSwitchClient, ApprovePlanExecutionStepCommand } = require("@aws-sdk/client-arc-region-switch"); // CommonJS import
 * // import type { ARCRegionSwitchClientConfig } from "@aws-sdk/client-arc-region-switch";
 * const config = {}; // type is ARCRegionSwitchClientConfig
 * const client = new ARCRegionSwitchClient(config);
 * const input = { // ApprovePlanExecutionStepRequest
 *   planArn: "STRING_VALUE", // required
 *   executionId: "STRING_VALUE", // required
 *   stepName: "STRING_VALUE", // required
 *   approval: "approve" || "decline", // required
 *   comment: "STRING_VALUE",
 * };
 * const command = new ApprovePlanExecutionStepCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param ApprovePlanExecutionStepCommandInput - {@link ApprovePlanExecutionStepCommandInput}
 * @returns {@link ApprovePlanExecutionStepCommandOutput}
 * @see {@link ApprovePlanExecutionStepCommandInput} for command's `input` shape.
 * @see {@link ApprovePlanExecutionStepCommandOutput} for command's `response` shape.
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
export class ApprovePlanExecutionStepCommand extends $Command
  .classBuilder<
    ApprovePlanExecutionStepCommandInput,
    ApprovePlanExecutionStepCommandOutput,
    ARCRegionSwitchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ARCRegionSwitchClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ArcRegionSwitch", "ApprovePlanExecutionStep", {})
  .n("ARCRegionSwitchClient", "ApprovePlanExecutionStepCommand")
  .sc(ApprovePlanExecutionStep)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ApprovePlanExecutionStepRequest;
      output: {};
    };
    sdk: {
      input: ApprovePlanExecutionStepCommandInput;
      output: ApprovePlanExecutionStepCommandOutput;
    };
  };
}
