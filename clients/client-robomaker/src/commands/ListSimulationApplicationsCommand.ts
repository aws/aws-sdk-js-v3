// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListSimulationApplicationsRequest, ListSimulationApplicationsResponse } from "../models/models_0";
import { de_ListSimulationApplicationsCommand, se_ListSimulationApplicationsCommand } from "../protocols/Aws_restJson1";
import { RoboMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RoboMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListSimulationApplicationsCommand}.
 */
export interface ListSimulationApplicationsCommandInput extends ListSimulationApplicationsRequest {}
/**
 * @public
 *
 * The output of {@link ListSimulationApplicationsCommand}.
 */
export interface ListSimulationApplicationsCommandOutput extends ListSimulationApplicationsResponse, __MetadataBearer {}

/**
 * <important>
 *             <p>End of support notice: On September 10, 2025, Amazon Web Services
 *          will discontinue support for Amazon Web Services RoboMaker. After September 10, 2025, you will
 *          no longer be able to access the Amazon Web Services RoboMaker console or Amazon Web Services RoboMaker resources.
 *          For more information on transitioning to Batch to help run containerized
 *          simulations, visit <a href="https://aws.amazon.com/blogs/hpc/run-simulations-using-multiple-containers-in-a-single-aws-batch-job/">https://aws.amazon.com/blogs/hpc/run-simulations-using-multiple-containers-in-a-single-aws-batch-job/</a>.
 *       </p>
 *          </important>
 *          <p>Returns a list of simulation applications. You can optionally provide filters to
 *          retrieve specific simulation applications. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, ListSimulationApplicationsCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, ListSimulationApplicationsCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const input = { // ListSimulationApplicationsRequest
 *   versionQualifier: "STRING_VALUE",
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
 * const command = new ListSimulationApplicationsCommand(input);
 * const response = await client.send(command);
 * // { // ListSimulationApplicationsResponse
 * //   simulationApplicationSummaries: [ // SimulationApplicationSummaries
 * //     { // SimulationApplicationSummary
 * //       name: "STRING_VALUE",
 * //       arn: "STRING_VALUE",
 * //       version: "STRING_VALUE",
 * //       lastUpdatedAt: new Date("TIMESTAMP"),
 * //       robotSoftwareSuite: { // RobotSoftwareSuite
 * //         name: "ROS" || "ROS2" || "General",
 * //         version: "Kinetic" || "Melodic" || "Dashing" || "Foxy",
 * //       },
 * //       simulationSoftwareSuite: { // SimulationSoftwareSuite
 * //         name: "Gazebo" || "RosbagPlay" || "SimulationRuntime",
 * //         version: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSimulationApplicationsCommandInput - {@link ListSimulationApplicationsCommandInput}
 * @returns {@link ListSimulationApplicationsCommandOutput}
 * @see {@link ListSimulationApplicationsCommandInput} for command's `input` shape.
 * @see {@link ListSimulationApplicationsCommandOutput} for command's `response` shape.
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
export class ListSimulationApplicationsCommand extends $Command
  .classBuilder<
    ListSimulationApplicationsCommandInput,
    ListSimulationApplicationsCommandOutput,
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
  .s("robomaker", "ListSimulationApplications", {})
  .n("RoboMakerClient", "ListSimulationApplicationsCommand")
  .f(void 0, void 0)
  .ser(se_ListSimulationApplicationsCommand)
  .de(de_ListSimulationApplicationsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSimulationApplicationsRequest;
      output: ListSimulationApplicationsResponse;
    };
    sdk: {
      input: ListSimulationApplicationsCommandInput;
      output: ListSimulationApplicationsCommandOutput;
    };
  };
}
