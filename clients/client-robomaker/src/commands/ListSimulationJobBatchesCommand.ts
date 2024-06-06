// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListSimulationJobBatchesRequest, ListSimulationJobBatchesResponse } from "../models/models_0";
import { de_ListSimulationJobBatchesCommand, se_ListSimulationJobBatchesCommand } from "../protocols/Aws_restJson1";
import { RoboMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RoboMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListSimulationJobBatchesCommand}.
 */
export interface ListSimulationJobBatchesCommandInput extends ListSimulationJobBatchesRequest {}
/**
 * @public
 *
 * The output of {@link ListSimulationJobBatchesCommand}.
 */
export interface ListSimulationJobBatchesCommandOutput extends ListSimulationJobBatchesResponse, __MetadataBearer {}

/**
 * <p>Returns a list simulation job batches. You can optionally provide filters to retrieve
 *          specific simulation batch jobs. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, ListSimulationJobBatchesCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, ListSimulationJobBatchesCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const input = { // ListSimulationJobBatchesRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   filters: [ // Filters
 *     { // Filter
 *       name: "STRING_VALUE",
 *       values: [ // FilterValues
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 * };
 * const command = new ListSimulationJobBatchesCommand(input);
 * const response = await client.send(command);
 * // { // ListSimulationJobBatchesResponse
 * //   simulationJobBatchSummaries: [ // SimulationJobBatchSummaries
 * //     { // SimulationJobBatchSummary
 * //       arn: "STRING_VALUE",
 * //       lastUpdatedAt: new Date("TIMESTAMP"),
 * //       createdAt: new Date("TIMESTAMP"),
 * //       status: "Pending" || "InProgress" || "Failed" || "Completed" || "Canceled" || "Canceling" || "Completing" || "TimingOut" || "TimedOut",
 * //       failedRequestCount: Number("int"),
 * //       pendingRequestCount: Number("int"),
 * //       createdRequestCount: Number("int"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSimulationJobBatchesCommandInput - {@link ListSimulationJobBatchesCommandInput}
 * @returns {@link ListSimulationJobBatchesCommandOutput}
 * @see {@link ListSimulationJobBatchesCommandInput} for command's `input` shape.
 * @see {@link ListSimulationJobBatchesCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for RoboMakerClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>AWS RoboMaker experienced a service issue. Try your call again.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>A parameter specified in a request is not valid, is unsupported, or cannot be used. The
 *          returned message provides an explanation of the error value.</p>
 *
 * @throws {@link RoboMakerServiceException}
 * <p>Base exception class for all service exceptions from RoboMaker service.</p>
 *
 * @public
 */
export class ListSimulationJobBatchesCommand extends $Command
  .classBuilder<
    ListSimulationJobBatchesCommandInput,
    ListSimulationJobBatchesCommandOutput,
    RoboMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: RoboMakerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("robomaker", "ListSimulationJobBatches", {})
  .n("RoboMakerClient", "ListSimulationJobBatchesCommand")
  .f(void 0, void 0)
  .ser(se_ListSimulationJobBatchesCommand)
  .de(de_ListSimulationJobBatchesCommand)
  .build() {}
