// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ARCRegionSwitchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ARCRegionSwitchClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListPlanExecutionsRequest, ListPlanExecutionsResponse } from "../models/models_0";
import { ListPlanExecutions } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListPlanExecutionsCommand}.
 */
export interface ListPlanExecutionsCommandInput extends ListPlanExecutionsRequest {}
/**
 * @public
 *
 * The output of {@link ListPlanExecutionsCommand}.
 */
export interface ListPlanExecutionsCommandOutput extends ListPlanExecutionsResponse, __MetadataBearer {}

/**
 * <p>Lists the executions of a Region switch plan. This operation returns information about both current and historical executions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ARCRegionSwitchClient, ListPlanExecutionsCommand } from "@aws-sdk/client-arc-region-switch"; // ES Modules import
 * // const { ARCRegionSwitchClient, ListPlanExecutionsCommand } = require("@aws-sdk/client-arc-region-switch"); // CommonJS import
 * // import type { ARCRegionSwitchClientConfig } from "@aws-sdk/client-arc-region-switch";
 * const config = {}; // type is ARCRegionSwitchClientConfig
 * const client = new ARCRegionSwitchClient(config);
 * const input = { // ListPlanExecutionsRequest
 *   planArn: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   state: "inProgress" || "pausedByFailedStep" || "pausedByOperator" || "completed" || "completedWithExceptions" || "canceled" || "planExecutionTimedOut" || "pendingManualApproval" || "failed" || "pending" || "completedMonitoringApplicationHealth",
 * };
 * const command = new ListPlanExecutionsCommand(input);
 * const response = await client.send(command);
 * // { // ListPlanExecutionsResponse
 * //   items: [ // AbbreviatedExecutionsList
 * //     { // AbbreviatedExecution
 * //       planArn: "STRING_VALUE", // required
 * //       executionId: "STRING_VALUE", // required
 * //       version: "STRING_VALUE",
 * //       updatedAt: new Date("TIMESTAMP"),
 * //       comment: "STRING_VALUE",
 * //       startTime: new Date("TIMESTAMP"), // required
 * //       endTime: new Date("TIMESTAMP"),
 * //       mode: "graceful" || "ungraceful", // required
 * //       executionState: "inProgress" || "pausedByFailedStep" || "pausedByOperator" || "completed" || "completedWithExceptions" || "canceled" || "planExecutionTimedOut" || "pendingManualApproval" || "failed" || "pending" || "completedMonitoringApplicationHealth", // required
 * //       executionAction: "activate" || "deactivate", // required
 * //       executionRegion: "STRING_VALUE", // required
 * //       actualRecoveryTime: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListPlanExecutionsCommandInput - {@link ListPlanExecutionsCommandInput}
 * @returns {@link ListPlanExecutionsCommandOutput}
 * @see {@link ListPlanExecutionsCommandInput} for command's `input` shape.
 * @see {@link ListPlanExecutionsCommandOutput} for command's `response` shape.
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
export class ListPlanExecutionsCommand extends $Command
  .classBuilder<
    ListPlanExecutionsCommandInput,
    ListPlanExecutionsCommandOutput,
    ARCRegionSwitchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ARCRegionSwitchClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ArcRegionSwitch", "ListPlanExecutions", {})
  .n("ARCRegionSwitchClient", "ListPlanExecutionsCommand")
  .sc(ListPlanExecutions)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPlanExecutionsRequest;
      output: ListPlanExecutionsResponse;
    };
    sdk: {
      input: ListPlanExecutionsCommandInput;
      output: ListPlanExecutionsCommandOutput;
    };
  };
}
