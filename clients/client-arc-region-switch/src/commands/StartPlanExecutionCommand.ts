// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartPlanExecutionRequest, StartPlanExecutionResponse } from "../models/models_0";
import { StartPlanExecution$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Starts the execution of a Region switch plan. You can execute a plan in either `graceful` or `ungraceful` mode.
 *
 * Specifing `ungraceful` mode either changes the behavior of the execution blocks in a workflow or skips specific execution blocks.
 *
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
 *   action: "activate" || "deactivate" || "postRecovery", // required
 *   mode: "graceful" || "ungraceful",
 *   comment: "STRING_VALUE",
 *   latestVersion: "STRING_VALUE",
 *   recoveryExecutionId: "STRING_VALUE",
 *   clientToken: "STRING_VALUE",
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
 *
 * You do not have sufficient access to perform this action.
 *
 * HTTP Status Code: 403
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The client token was already used with different request parameters. A client token must map to the same parameters for every request. To retry this operation, provide a new client token.
 *
 * @throws {@link IllegalArgumentException} (client fault)
 *
 * The request processing has an invalid argument.
 *
 * @throws {@link IllegalStateException} (client fault)
 *
 * The operation failed because the current state of the resource doesn't allow the operation to proceed.
 *
 * HTTP Status Code: 400
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
export class StartPlanExecutionCommand extends command<StartPlanExecutionCommandInput, StartPlanExecutionCommandOutput>(
  _ep0,
  _mw0,
  "StartPlanExecution",
  StartPlanExecution$
) {
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
