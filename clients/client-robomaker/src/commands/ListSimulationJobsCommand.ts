// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListSimulationJobsRequest, ListSimulationJobsResponse } from "../models/models_0";
import { de_ListSimulationJobsCommand, se_ListSimulationJobsCommand } from "../protocols/Aws_restJson1";
import { RoboMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RoboMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListSimulationJobsCommand}.
 */
export interface ListSimulationJobsCommandInput extends ListSimulationJobsRequest {}
/**
 * @public
 *
 * The output of {@link ListSimulationJobsCommand}.
 */
export interface ListSimulationJobsCommandOutput extends ListSimulationJobsResponse, __MetadataBearer {}

/**
 * <important>
 *             <p>End of support notice: On September 10, 2025, Amazon Web Services
 *          will discontinue support for Amazon Web Services RoboMaker. After September 10, 2025, you will
 *          no longer be able to access the Amazon Web Services RoboMaker console or Amazon Web Services RoboMaker resources.
 *          For more information on transitioning to Batch to help run containerized
 *          simulations, visit <a href="https://aws.amazon.com/blogs/hpc/run-simulations-using-multiple-containers-in-a-single-aws-batch-job/">https://aws.amazon.com/blogs/hpc/run-simulations-using-multiple-containers-in-a-single-aws-batch-job/</a>.
 *       </p>
 *          </important>
 *          <p>Returns a list of simulation jobs. You can optionally provide filters to retrieve
 *          specific simulation jobs. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, ListSimulationJobsCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, ListSimulationJobsCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * // import type { RoboMakerClientConfig } from "@aws-sdk/client-robomaker";
 * const config = {}; // type is RoboMakerClientConfig
 * const client = new RoboMakerClient(config);
 * const input = { // ListSimulationJobsRequest
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
 * const command = new ListSimulationJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListSimulationJobsResponse
 * //   simulationJobSummaries: [ // SimulationJobSummaries // required
 * //     { // SimulationJobSummary
 * //       arn: "STRING_VALUE",
 * //       lastUpdatedAt: new Date("TIMESTAMP"),
 * //       name: "STRING_VALUE",
 * //       status: "Pending" || "Preparing" || "Running" || "Restarting" || "Completed" || "Failed" || "RunningFailed" || "Terminating" || "Terminated" || "Canceled",
 * //       simulationApplicationNames: [ // SimulationApplicationNames
 * //         "STRING_VALUE",
 * //       ],
 * //       robotApplicationNames: [ // RobotApplicationNames
 * //         "STRING_VALUE",
 * //       ],
 * //       dataSourceNames: [ // DataSourceNames
 * //         "STRING_VALUE",
 * //       ],
 * //       computeType: "CPU" || "GPU_AND_CPU",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSimulationJobsCommandInput - {@link ListSimulationJobsCommandInput}
 * @returns {@link ListSimulationJobsCommandOutput}
 * @see {@link ListSimulationJobsCommandInput} for command's `input` shape.
 * @see {@link ListSimulationJobsCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for RoboMakerClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>AWS RoboMaker experienced a service issue. Try your call again.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>A parameter specified in a request is not valid, is unsupported, or cannot be used. The
 *          returned message provides an explanation of the error value.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>AWS RoboMaker is temporarily unable to process the request. Try your call again.</p>
 *
 * @throws {@link RoboMakerServiceException}
 * <p>Base exception class for all service exceptions from RoboMaker service.</p>
 *
 *
 * @public
 */
export class ListSimulationJobsCommand extends $Command
  .classBuilder<
    ListSimulationJobsCommandInput,
    ListSimulationJobsCommandOutput,
    RoboMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RoboMakerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("robomaker", "ListSimulationJobs", {})
  .n("RoboMakerClient", "ListSimulationJobsCommand")
  .f(void 0, void 0)
  .ser(se_ListSimulationJobsCommand)
  .de(de_ListSimulationJobsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSimulationJobsRequest;
      output: ListSimulationJobsResponse;
    };
    sdk: {
      input: ListSimulationJobsCommandInput;
      output: ListSimulationJobsCommandOutput;
    };
  };
}
