// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ApprovePlanExecutionStepRequest, ApprovePlanExecutionStepResponse } from "../models/models_0";
import { ApprovePlanExecutionStep$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Approves a step in a plan execution that requires manual approval. When you create a plan, you can include approval steps that require manual intervention before the execution can proceed. This operation allows you to provide that approval.
 *
 * You must specify the plan ARN, execution ID, step name, and approval status. You can also provide an optional comment explaining the approval decision.
 *
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
export class ApprovePlanExecutionStepCommand extends command<ApprovePlanExecutionStepCommandInput, ApprovePlanExecutionStepCommandOutput>(
  _ep0,
  _mw0,
  "ApprovePlanExecutionStep",
  ApprovePlanExecutionStep$
) {
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
