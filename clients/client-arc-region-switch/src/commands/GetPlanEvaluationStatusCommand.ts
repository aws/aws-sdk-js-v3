// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ARCRegionSwitchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ARCRegionSwitchClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetPlanEvaluationStatusRequest, GetPlanEvaluationStatusResponse } from "../models/models_0";
import { de_GetPlanEvaluationStatusCommand, se_GetPlanEvaluationStatusCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetPlanEvaluationStatusCommand}.
 */
export interface GetPlanEvaluationStatusCommandInput extends GetPlanEvaluationStatusRequest {}
/**
 * @public
 *
 * The output of {@link GetPlanEvaluationStatusCommand}.
 */
export interface GetPlanEvaluationStatusCommandOutput extends GetPlanEvaluationStatusResponse, __MetadataBearer {}

/**
 * <p>Retrieves the evaluation status of a Region switch plan. The evaluation status provides information about the last time the plan was evaluated and any warnings or issues detected.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ARCRegionSwitchClient, GetPlanEvaluationStatusCommand } from "@aws-sdk/client-arc-region-switch"; // ES Modules import
 * // const { ARCRegionSwitchClient, GetPlanEvaluationStatusCommand } = require("@aws-sdk/client-arc-region-switch"); // CommonJS import
 * const client = new ARCRegionSwitchClient(config);
 * const input = { // GetPlanEvaluationStatusRequest
 *   planArn: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new GetPlanEvaluationStatusCommand(input);
 * const response = await client.send(command);
 * // { // GetPlanEvaluationStatusResponse
 * //   planArn: "STRING_VALUE", // required
 * //   lastEvaluationTime: new Date("TIMESTAMP"),
 * //   lastEvaluatedVersion: "STRING_VALUE",
 * //   region: "STRING_VALUE",
 * //   evaluationState: "passed" || "actionRequired" || "pendingEvaluation" || "unknown",
 * //   warnings: [ // PlanWarnings
 * //     { // ResourceWarning
 * //       workflow: { // MinimalWorkflow
 * //         action: "activate" || "deactivate",
 * //         name: "STRING_VALUE",
 * //       },
 * //       version: "STRING_VALUE", // required
 * //       stepName: "STRING_VALUE",
 * //       resourceArn: "STRING_VALUE",
 * //       warningStatus: "active" || "resolved", // required
 * //       warningUpdatedTime: new Date("TIMESTAMP"), // required
 * //       warningMessage: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetPlanEvaluationStatusCommandInput - {@link GetPlanEvaluationStatusCommandInput}
 * @returns {@link GetPlanEvaluationStatusCommandOutput}
 * @see {@link GetPlanEvaluationStatusCommandInput} for command's `input` shape.
 * @see {@link GetPlanEvaluationStatusCommandOutput} for command's `response` shape.
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
export class GetPlanEvaluationStatusCommand extends $Command
  .classBuilder<
    GetPlanEvaluationStatusCommandInput,
    GetPlanEvaluationStatusCommandOutput,
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
  .s("ArcRegionSwitch", "GetPlanEvaluationStatus", {})
  .n("ARCRegionSwitchClient", "GetPlanEvaluationStatusCommand")
  .f(void 0, void 0)
  .ser(se_GetPlanEvaluationStatusCommand)
  .de(de_GetPlanEvaluationStatusCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetPlanEvaluationStatusRequest;
      output: GetPlanEvaluationStatusResponse;
    };
    sdk: {
      input: GetPlanEvaluationStatusCommandInput;
      output: GetPlanEvaluationStatusCommandOutput;
    };
  };
}
