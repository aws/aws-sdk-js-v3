// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep1, _mw0, command } from "../commandBuilder";
import type { ListPlansRequest, ListPlansResponse } from "../models/models_0";
import { ListPlans$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListPlansCommand}.
 */
export interface ListPlansCommandInput extends ListPlansRequest {}
/**
 * @public
 *
 * The output of {@link ListPlansCommand}.
 */
export interface ListPlansCommandOutput extends ListPlansResponse, __MetadataBearer {}

/**
 * <p>Lists all Region switch plans in your Amazon Web Services account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ARCRegionSwitchClient, ListPlansCommand } from "@aws-sdk/client-arc-region-switch"; // ES Modules import
 * // const { ARCRegionSwitchClient, ListPlansCommand } = require("@aws-sdk/client-arc-region-switch"); // CommonJS import
 * // import type { ARCRegionSwitchClientConfig } from "@aws-sdk/client-arc-region-switch";
 * const config = {}; // type is ARCRegionSwitchClientConfig
 * const client = new ARCRegionSwitchClient(config);
 * const input = { // ListPlansRequest
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListPlansCommand(input);
 * const response = await client.send(command);
 * // { // ListPlansResponse
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
 * @param ListPlansCommandInput - {@link ListPlansCommandInput}
 * @returns {@link ListPlansCommandOutput}
 * @see {@link ListPlansCommandInput} for command's `input` shape.
 * @see {@link ListPlansCommandOutput} for command's `response` shape.
 * @see {@link ARCRegionSwitchClientResolvedConfig | config} for ARCRegionSwitchClient's `config` shape.
 *
 * @throws {@link ARCRegionSwitchServiceException}
 * <p>Base exception class for all service exceptions from ARCRegionSwitch service.</p>
 *
 *
 * @public
 */
export class ListPlansCommand extends command<ListPlansCommandInput, ListPlansCommandOutput>(
  _ep1,
  _mw0,
  "ListPlans",
  ListPlans$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPlansRequest;
      output: ListPlansResponse;
    };
    sdk: {
      input: ListPlansCommandInput;
      output: ListPlansCommandOutput;
    };
  };
}
