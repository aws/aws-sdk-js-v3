// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateSimulationApplicationRequest, CreateSimulationApplicationResponse } from "../models/models_0";
import {
  de_CreateSimulationApplicationCommand,
  se_CreateSimulationApplicationCommand,
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
 * The input for {@link CreateSimulationApplicationCommand}.
 */
export interface CreateSimulationApplicationCommandInput extends CreateSimulationApplicationRequest {}
/**
 * @public
 *
 * The output of {@link CreateSimulationApplicationCommand}.
 */
export interface CreateSimulationApplicationCommandOutput
  extends CreateSimulationApplicationResponse,
    __MetadataBearer {}

/**
 * <p>Creates a simulation application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, CreateSimulationApplicationCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, CreateSimulationApplicationCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const input = { // CreateSimulationApplicationRequest
 *   name: "STRING_VALUE", // required
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
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   environment: { // Environment
 *     uri: "STRING_VALUE",
 *   },
 * };
 * const command = new CreateSimulationApplicationCommand(input);
 * const response = await client.send(command);
 * // { // CreateSimulationApplicationResponse
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
 * //   tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   environment: { // Environment
 * //     uri: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateSimulationApplicationCommandInput - {@link CreateSimulationApplicationCommandInput}
 * @returns {@link CreateSimulationApplicationCommandOutput}
 * @see {@link CreateSimulationApplicationCommandInput} for command's `input` shape.
 * @see {@link CreateSimulationApplicationCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for RoboMakerClient's `config` shape.
 *
 * @throws {@link IdempotentParameterMismatchException} (client fault)
 *  <p>The request uses the same client token as a previous, but non-identical request. Do not
 *          reuse a client token with different requests, unless the requests are identical. </p>
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
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>The specified resource already exists.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>AWS RoboMaker is temporarily unable to process the request. Try your call again.</p>
 *
 * @throws {@link RoboMakerServiceException}
 * <p>Base exception class for all service exceptions from RoboMaker service.</p>
 *
 * @public
 */
export class CreateSimulationApplicationCommand extends $Command
  .classBuilder<
    CreateSimulationApplicationCommandInput,
    CreateSimulationApplicationCommandOutput,
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
  .s("robomaker", "CreateSimulationApplication", {})
  .n("RoboMakerClient", "CreateSimulationApplicationCommand")
  .f(void 0, void 0)
  .ser(se_CreateSimulationApplicationCommand)
  .de(de_CreateSimulationApplicationCommand)
  .build() {}
