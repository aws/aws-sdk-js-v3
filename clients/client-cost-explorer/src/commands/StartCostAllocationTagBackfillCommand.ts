// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartCostAllocationTagBackfillRequest, StartCostAllocationTagBackfillResponse } from "../models/models_0";
import { StartCostAllocationTagBackfill$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface StartCostAllocationTagBackfillCommandOutput extends StartCostAllocationTagBackfillResponse, __MetadataBearer {}

/**
 * Request a cost allocation tag backfill. This will backfill the activation status (either `active` or `inactive`) for all tag keys from `para:BackfillFrom` up to the time this request is made.
 *
 * You can request a backfill once every 24 hours.
 *
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
 *
 * A request to backfill is already in progress. Once the previous request is complete, you can create another request.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * You made too many calls in a short period of time. Try again later.
 *
 * @throws {@link CostExplorerServiceException}
 *
 * Base exception class for all service exceptions from CostExplorer service.
 *
 * @public
 */
export class StartCostAllocationTagBackfillCommand extends command<StartCostAllocationTagBackfillCommandInput, StartCostAllocationTagBackfillCommandOutput>(
  _ep0,
  _mw0,
  "StartCostAllocationTagBackfill",
  StartCostAllocationTagBackfill$
) {
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
