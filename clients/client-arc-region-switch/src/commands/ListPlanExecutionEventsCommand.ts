// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ARCRegionSwitchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ARCRegionSwitchClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListPlanExecutionEventsRequest, ListPlanExecutionEventsResponse } from "../models/models_0";
import { ListPlanExecutionEvents } from "../schemas/schemas_3_Plan";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListPlanExecutionEventsCommand}.
 */
export interface ListPlanExecutionEventsCommandInput extends ListPlanExecutionEventsRequest {}
/**
 * @public
 *
 * The output of {@link ListPlanExecutionEventsCommand}.
 */
export interface ListPlanExecutionEventsCommandOutput extends ListPlanExecutionEventsResponse, __MetadataBearer {}

/**
 * <p>Lists the events that occurred during a plan execution. These events provide a detailed timeline of the execution process.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ARCRegionSwitchClient, ListPlanExecutionEventsCommand } from "@aws-sdk/client-arc-region-switch"; // ES Modules import
 * // const { ARCRegionSwitchClient, ListPlanExecutionEventsCommand } = require("@aws-sdk/client-arc-region-switch"); // CommonJS import
 * // import type { ARCRegionSwitchClientConfig } from "@aws-sdk/client-arc-region-switch";
 * const config = {}; // type is ARCRegionSwitchClientConfig
 * const client = new ARCRegionSwitchClient(config);
 * const input = { // ListPlanExecutionEventsRequest
 *   planArn: "STRING_VALUE", // required
 *   executionId: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   name: "STRING_VALUE",
 * };
 * const command = new ListPlanExecutionEventsCommand(input);
 * const response = await client.send(command);
 * // { // ListPlanExecutionEventsResponse
 * //   items: [ // ExecutionEventList
 * //     { // ExecutionEvent
 * //       timestamp: new Date("TIMESTAMP"),
 * //       type: "unknown" || "executionPending" || "executionStarted" || "executionSucceeded" || "executionFailed" || "executionPausing" || "executionPaused" || "executionCanceling" || "executionCanceled" || "executionPendingApproval" || "executionBehaviorChangedToUngraceful" || "executionBehaviorChangedToGraceful" || "executionPendingChildPlanManualApproval" || "executionSuccessMonitoringApplicationHealth" || "stepStarted" || "stepUpdate" || "stepSucceeded" || "stepFailed" || "stepSkipped" || "stepPausedByError" || "stepPausedByOperator" || "stepCanceled" || "stepPendingApproval" || "stepExecutionBehaviorChangedToUngraceful" || "stepPendingApplicationHealthMonitor",
 * //       stepName: "STRING_VALUE",
 * //       executionBlockType: "CustomActionLambda" || "ManualApproval" || "AuroraGlobalDatabase" || "EC2AutoScaling" || "ARCRoutingControl" || "ARCRegionSwitchPlan" || "Parallel" || "ECSServiceScaling" || "EKSResourceScaling" || "Route53HealthCheck",
 * //       resources: [ // Resources
 * //         "STRING_VALUE",
 * //       ],
 * //       error: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       eventId: "STRING_VALUE", // required
 * //       previousEventId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListPlanExecutionEventsCommandInput - {@link ListPlanExecutionEventsCommandInput}
 * @returns {@link ListPlanExecutionEventsCommandOutput}
 * @see {@link ListPlanExecutionEventsCommandInput} for command's `input` shape.
 * @see {@link ListPlanExecutionEventsCommandOutput} for command's `response` shape.
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
export class ListPlanExecutionEventsCommand extends $Command
  .classBuilder<
    ListPlanExecutionEventsCommandInput,
    ListPlanExecutionEventsCommandOutput,
    ARCRegionSwitchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ARCRegionSwitchClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ArcRegionSwitch", "ListPlanExecutionEvents", {})
  .n("ARCRegionSwitchClient", "ListPlanExecutionEventsCommand")
  .sc(ListPlanExecutionEvents)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPlanExecutionEventsRequest;
      output: ListPlanExecutionEventsResponse;
    };
    sdk: {
      input: ListPlanExecutionEventsCommandInput;
      output: ListPlanExecutionEventsCommandOutput;
    };
  };
}
