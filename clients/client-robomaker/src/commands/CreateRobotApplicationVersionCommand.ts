// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateRobotApplicationVersionRequest, CreateRobotApplicationVersionResponse } from "../models/models_0";
import {
  de_CreateRobotApplicationVersionCommand,
  se_CreateRobotApplicationVersionCommand,
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
 * The input for {@link CreateRobotApplicationVersionCommand}.
 */
export interface CreateRobotApplicationVersionCommandInput extends CreateRobotApplicationVersionRequest {}
/**
 * @public
 *
 * The output of {@link CreateRobotApplicationVersionCommand}.
 */
export interface CreateRobotApplicationVersionCommandOutput
  extends CreateRobotApplicationVersionResponse,
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
 *          <p>Creates a version of a robot application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, CreateRobotApplicationVersionCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, CreateRobotApplicationVersionCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const input = { // CreateRobotApplicationVersionRequest
 *   application: "STRING_VALUE", // required
 *   currentRevisionId: "STRING_VALUE",
 *   s3Etags: [ // S3Etags
 *     "STRING_VALUE",
 *   ],
 *   imageDigest: "STRING_VALUE",
 * };
 * const command = new CreateRobotApplicationVersionCommand(input);
 * const response = await client.send(command);
 * // { // CreateRobotApplicationVersionResponse
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
 * //   robotSoftwareSuite: { // RobotSoftwareSuite
 * //     name: "ROS" || "ROS2" || "General",
 * //     version: "Kinetic" || "Melodic" || "Dashing" || "Foxy",
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
 * @param CreateRobotApplicationVersionCommandInput - {@link CreateRobotApplicationVersionCommandInput}
 * @returns {@link CreateRobotApplicationVersionCommandOutput}
 * @see {@link CreateRobotApplicationVersionCommandInput} for command's `input` shape.
 * @see {@link CreateRobotApplicationVersionCommandOutput} for command's `response` shape.
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
 * @throws {@link ThrottlingException} (client fault)
 *  <p>AWS RoboMaker is temporarily unable to process the request. Try your call again.</p>
 *
 * @throws {@link RoboMakerServiceException}
 * <p>Base exception class for all service exceptions from RoboMaker service.</p>
 *
 *
 * @public
 */
export class CreateRobotApplicationVersionCommand extends $Command
  .classBuilder<
    CreateRobotApplicationVersionCommandInput,
    CreateRobotApplicationVersionCommandOutput,
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
  .s("robomaker", "CreateRobotApplicationVersion", {})
  .n("RoboMakerClient", "CreateRobotApplicationVersionCommand")
  .f(void 0, void 0)
  .ser(se_CreateRobotApplicationVersionCommand)
  .de(de_CreateRobotApplicationVersionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateRobotApplicationVersionRequest;
      output: CreateRobotApplicationVersionResponse;
    };
    sdk: {
      input: CreateRobotApplicationVersionCommandInput;
      output: CreateRobotApplicationVersionCommandOutput;
    };
  };
}
