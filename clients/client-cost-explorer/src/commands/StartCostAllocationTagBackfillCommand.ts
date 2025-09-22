// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CostExplorerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CostExplorerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { StartCostAllocationTagBackfillRequest, StartCostAllocationTagBackfillResponse } from "../models/models_0";
import { StartCostAllocationTagBackfill } from "../schemas/schemas_14_TagBackfill";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartCostAllocationTagBackfillCommand}.
 */
export interface StartCostAllocationTagBackfillCommandInput extends StartCostAllocationTagBackfillRequest {}
/**
 * @public
 *
 * The output of {@link StartCostAllocationTagBackfillCommand}.
 */
export interface StartCostAllocationTagBackfillCommandOutput
  extends StartCostAllocationTagBackfillResponse,
    __MetadataBearer {}

/**
 * <p>
 *       Request a cost allocation tag backfill. This will backfill the activation status (either <code>active</code> or <code>inactive</code>) for all tag keys from <code>para:BackfillFrom</code> up to the time this request is made.</p>
 *          <p>You can request a backfill once every 24 hours.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CostExplorerClient, StartCostAllocationTagBackfillCommand } from "@aws-sdk/client-cost-explorer"; // ES Modules import
 * // const { CostExplorerClient, StartCostAllocationTagBackfillCommand } = require("@aws-sdk/client-cost-explorer"); // CommonJS import
 * // import type { CostExplorerClientConfig } from "@aws-sdk/client-cost-explorer";
 * const config = {}; // type is CostExplorerClientConfig
 * const client = new CostExplorerClient(config);
 * const input = { // StartCostAllocationTagBackfillRequest
 *   BackfillFrom: "STRING_VALUE", // required
 * };
 * const command = new StartCostAllocationTagBackfillCommand(input);
 * const response = await client.send(command);
 * // { // StartCostAllocationTagBackfillResponse
 * //   BackfillRequest: { // CostAllocationTagBackfillRequest
 * //     BackfillFrom: "STRING_VALUE",
 * //     RequestedAt: "STRING_VALUE",
 * //     CompletedAt: "STRING_VALUE",
 * //     BackfillStatus: "SUCCEEDED" || "PROCESSING" || "FAILED",
 * //     LastUpdatedAt: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param StartCostAllocationTagBackfillCommandInput - {@link StartCostAllocationTagBackfillCommandInput}
 * @returns {@link StartCostAllocationTagBackfillCommandOutput}
 * @see {@link StartCostAllocationTagBackfillCommandInput} for command's `input` shape.
 * @see {@link StartCostAllocationTagBackfillCommandOutput} for command's `response` shape.
 * @see {@link CostExplorerClientResolvedConfig | config} for CostExplorerClient's `config` shape.
 *
 * @throws {@link BackfillLimitExceededException} (client fault)
 *  <p>
 *             A request to backfill is already in progress. Once the previous request is complete, you can create another request.
 *         </p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>You made too many calls in a short period of time. Try again later.</p>
 *
 * @throws {@link CostExplorerServiceException}
 * <p>Base exception class for all service exceptions from CostExplorer service.</p>
 *
 *
 * @public
 */
export class StartCostAllocationTagBackfillCommand extends $Command
  .classBuilder<
    StartCostAllocationTagBackfillCommandInput,
    StartCostAllocationTagBackfillCommandOutput,
    CostExplorerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CostExplorerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSInsightsIndexService", "StartCostAllocationTagBackfill", {})
  .n("CostExplorerClient", "StartCostAllocationTagBackfillCommand")
  .sc(StartCostAllocationTagBackfill)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartCostAllocationTagBackfillRequest;
      output: StartCostAllocationTagBackfillResponse;
    };
    sdk: {
      input: StartCostAllocationTagBackfillCommandInput;
      output: StartCostAllocationTagBackfillCommandOutput;
    };
  };
}
