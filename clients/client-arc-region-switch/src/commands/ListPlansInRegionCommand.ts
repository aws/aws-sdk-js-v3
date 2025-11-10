// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ARCRegionSwitchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ARCRegionSwitchClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListPlansInRegionRequest, ListPlansInRegionResponse } from "../models/models_0";
import { ListPlansInRegion } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListPlansInRegionCommand}.
 */
export interface ListPlansInRegionCommandInput extends ListPlansInRegionRequest {}
/**
 * @public
 *
 * The output of {@link ListPlansInRegionCommand}.
 */
export interface ListPlansInRegionCommandOutput extends ListPlansInRegionResponse, __MetadataBearer {}

/**
 * <p>Lists all Region switch plans in your Amazon Web Services account that are available in the current Amazon Web Services Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ARCRegionSwitchClient, ListPlansInRegionCommand } from "@aws-sdk/client-arc-region-switch"; // ES Modules import
 * // const { ARCRegionSwitchClient, ListPlansInRegionCommand } = require("@aws-sdk/client-arc-region-switch"); // CommonJS import
 * // import type { ARCRegionSwitchClientConfig } from "@aws-sdk/client-arc-region-switch";
 * const config = {}; // type is ARCRegionSwitchClientConfig
 * const client = new ARCRegionSwitchClient(config);
 * const input = { // ListPlansInRegionRequest
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListPlansInRegionCommand(input);
 * const response = await client.send(command);
 * // { // ListPlansInRegionResponse
 * //   plans: [ // PlanList
 * //     { // AbbreviatedPlan
 * //       arn: "STRING_VALUE", // required
 * //       owner: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       regions: [ // RegionList // required
 * //         "STRING_VALUE",
 * //       ],
 * //       recoveryApproach: "activeActive" || "activePassive", // required
 * //       primaryRegion: "STRING_VALUE",
 * //       version: "STRING_VALUE",
 * //       updatedAt: new Date("TIMESTAMP"),
 * //       description: "STRING_VALUE",
 * //       executionRole: "STRING_VALUE",
 * //       activePlanExecution: "STRING_VALUE",
 * //       recoveryTimeObjectiveMinutes: Number("int"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListPlansInRegionCommandInput - {@link ListPlansInRegionCommandInput}
 * @returns {@link ListPlansInRegionCommandOutput}
 * @see {@link ListPlansInRegionCommandInput} for command's `input` shape.
 * @see {@link ListPlansInRegionCommandOutput} for command's `response` shape.
 * @see {@link ARCRegionSwitchClientResolvedConfig | config} for ARCRegionSwitchClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p> <p>HTTP Status Code: 403</p>
 *
 * @throws {@link ARCRegionSwitchServiceException}
 * <p>Base exception class for all service exceptions from ARCRegionSwitch service.</p>
 *
 *
 * @public
 */
export class ListPlansInRegionCommand extends $Command
  .classBuilder<
    ListPlansInRegionCommandInput,
    ListPlansInRegionCommandOutput,
    ARCRegionSwitchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ARCRegionSwitchClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ArcRegionSwitch", "ListPlansInRegion", {})
  .n("ARCRegionSwitchClient", "ListPlansInRegionCommand")
  .sc(ListPlansInRegion)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPlansInRegionRequest;
      output: ListPlansInRegionResponse;
    };
    sdk: {
      input: ListPlansInRegionCommandInput;
      output: ListPlansInRegionCommandOutput;
    };
  };
}
