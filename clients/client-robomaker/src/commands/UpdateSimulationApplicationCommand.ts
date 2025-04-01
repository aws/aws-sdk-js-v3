// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateSimulationApplicationRequest, UpdateSimulationApplicationResponse } from "../models/models_0";
import {
  de_UpdateSimulationApplicationCommand,
  se_UpdateSimulationApplicationCommand,
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
 * The input for {@link UpdateSimulationApplicationCommand}.
 */
export interface UpdateSimulationApplicationCommandInput extends UpdateSimulationApplicationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateSimulationApplicationCommand}.
 */
export interface UpdateSimulationApplicationCommandOutput
  extends UpdateSimulationApplicationResponse,
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
 *          <p>Updates a simulation application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, UpdateSimulationApplicationCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, UpdateSimulationApplicationCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const input = { // UpdateSimulationApplicationRequest
 *   application: "STRING_VALUE", // required
 *   sources: [ // SourceConfigs
 *     { // SourceConfig
 *       s3Bucket: "STRING_VALUE",
 *       s3Key: "STRING_VALUE",
 *       architecture: "X86_64" || "ARM64" || "ARMHF",
 *     },
 *   ],
 *   simulationSoftwareSuite: { // SimulationSoftwareSuite
 *     name: "Gazebo" || "RosbagPlay" || "SimulationRuntime",
 *     version: "STRING_VALUE",
 *   },
 *   robotSoftwareSuite: { // RobotSoftwareSuite
 *     name: "ROS" || "ROS2" || "General",
 *     version: "Kinetic" || "Melodic" || "Dashing" || "Foxy",
 *   },
 *   renderingEngine: { // RenderingEngine
 *     name: "OGRE",
 *     version: "STRING_VALUE",
 *   },
 *   currentRevisionId: "STRING_VALUE",
 *   environment: { // Environment
 *     uri: "STRING_VALUE",
 *   },
 * };
 * const command = new UpdateSimulationApplicationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateSimulationApplicationResponse
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
 * //   lastUpdatedAt: new Date("TIMESTAMP"),
 * //   revisionId: "STRING_VALUE",
 * //   environment: { // Environment
 * //     uri: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateSimulationApplicationCommandInput - {@link UpdateSimulationApplicationCommandInput}
 * @returns {@link UpdateSimulationApplicationCommandOutput}
 * @see {@link UpdateSimulationApplicationCommandInput} for command's `input` shape.
 * @see {@link UpdateSimulationApplicationCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for RoboMakerClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>AWS RoboMaker experienced a service issue. Try your call again.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>A parameter specified in a request is not valid, is unsupported, or cannot be used. The
 *          returned message provides an explanation of the error value.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The requested resource exceeds the maximum number allowed, or the number of concurrent
 *          stream requests exceeds the maximum number allowed. </p>
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
 *
 * @public
 */
export class UpdateSimulationApplicationCommand extends $Command
  .classBuilder<
    UpdateSimulationApplicationCommandInput,
    UpdateSimulationApplicationCommandOutput,
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
  .s("robomaker", "UpdateSimulationApplication", {})
  .n("RoboMakerClient", "UpdateSimulationApplicationCommand")
  .f(void 0, void 0)
  .ser(se_UpdateSimulationApplicationCommand)
  .de(de_UpdateSimulationApplicationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateSimulationApplicationRequest;
      output: UpdateSimulationApplicationResponse;
    };
    sdk: {
      input: UpdateSimulationApplicationCommandInput;
      output: UpdateSimulationApplicationCommandOutput;
    };
  };
}
