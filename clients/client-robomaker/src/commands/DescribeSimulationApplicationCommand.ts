// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeSimulationApplicationRequest, DescribeSimulationApplicationResponse } from "../models/models_0";
import {
  de_DescribeSimulationApplicationCommand,
  se_DescribeSimulationApplicationCommand,
} from "../protocols/Aws_restJson1";
import { RoboMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RoboMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeSimulationApplicationCommand}.
 */
export interface DescribeSimulationApplicationCommandInput extends DescribeSimulationApplicationRequest {}
/**
 * @public
 *
 * The output of {@link DescribeSimulationApplicationCommand}.
 */
export interface DescribeSimulationApplicationCommandOutput
  extends DescribeSimulationApplicationResponse,
    __MetadataBearer {}

/**
 * <important>
 *             <p>End of support notice: On September 10, 2025, Amazon Web Services
 *          will discontinue support for Amazon Web Services RoboMaker. After September 10, 2025, you will
 *          no longer be able to access the Amazon Web Services RoboMaker console or Amazon Web Services RoboMaker resources.
 *          For more information on transitioning to Batch to help run containerized
 *          simulations, visit <a href="https://aws.amazon.com/blogs/hpc/run-simulations-using-multiple-containers-in-a-single-aws-batch-job/">https://aws.amazon.com/blogs/hpc/run-simulations-using-multiple-containers-in-a-single-aws-batch-job/</a>.
 *       </p>
 *          </important>
 *          <p>Describes a simulation application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, DescribeSimulationApplicationCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, DescribeSimulationApplicationCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new RoboMakerClient(config);
 * const input = { // DescribeSimulationApplicationRequest
 *   application: "STRING_VALUE", // required
 *   applicationVersion: "STRING_VALUE",
 * };
 * const command = new DescribeSimulationApplicationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeSimulationApplicationResponse
 * //   arn: "STRING_VALUE",
 * //   name: "STRING_VALUE",
 * //   version: "STRING_VALUE",
 * //   sources: [ // Sources
 * //     { // Source
 * //       s3Bucket: "STRING_VALUE",
 * //       s3Key: "STRING_VALUE",
 * //       etag: "STRING_VALUE",
 * //       architecture: "X86_64" || "ARM64" || "ARMHF",
 * //     },
 * //   ],
 * //   simulationSoftwareSuite: { // SimulationSoftwareSuite
 * //     name: "Gazebo" || "RosbagPlay" || "SimulationRuntime",
 * //     version: "STRING_VALUE",
 * //   },
 * //   robotSoftwareSuite: { // RobotSoftwareSuite
 * //     name: "ROS" || "ROS2" || "General",
 * //     version: "Kinetic" || "Melodic" || "Dashing" || "Foxy",
 * //   },
 * //   renderingEngine: { // RenderingEngine
 * //     name: "OGRE",
 * //     version: "STRING_VALUE",
 * //   },
 * //   revisionId: "STRING_VALUE",
 * //   lastUpdatedAt: new Date("TIMESTAMP"),
 * //   tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   environment: { // Environment
 * //     uri: "STRING_VALUE",
 * //   },
 * //   imageDigest: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeSimulationApplicationCommandInput - {@link DescribeSimulationApplicationCommandInput}
 * @returns {@link DescribeSimulationApplicationCommandOutput}
 * @see {@link DescribeSimulationApplicationCommandInput} for command's `input` shape.
 * @see {@link DescribeSimulationApplicationCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for RoboMakerClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>AWS RoboMaker experienced a service issue. Try your call again.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>A parameter specified in a request is not valid, is unsupported, or cannot be used. The
 *          returned message provides an explanation of the error value.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>AWS RoboMaker is temporarily unable to process the request. Try your call again.</p>
 *
 * @throws {@link RoboMakerServiceException}
 * <p>Base exception class for all service exceptions from RoboMaker service.</p>
 *
 * @public
 */
export class DescribeSimulationApplicationCommand extends $Command
  .classBuilder<
    DescribeSimulationApplicationCommandInput,
    DescribeSimulationApplicationCommandOutput,
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
  .s("robomaker", "DescribeSimulationApplication", {})
  .n("RoboMakerClient", "DescribeSimulationApplicationCommand")
  .f(void 0, void 0)
  .ser(se_DescribeSimulationApplicationCommand)
  .de(de_DescribeSimulationApplicationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeSimulationApplicationRequest;
      output: DescribeSimulationApplicationResponse;
    };
    sdk: {
      input: DescribeSimulationApplicationCommandInput;
      output: DescribeSimulationApplicationCommandOutput;
    };
  };
}
