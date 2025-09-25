// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { SyncDeploymentJobRequest, SyncDeploymentJobResponse } from "../models/models_0";
import { RoboMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RoboMakerClient";
import { SyncDeploymentJob } from "../schemas/schemas_8_Create";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SyncDeploymentJobCommand}.
 */
export interface SyncDeploymentJobCommandInput extends SyncDeploymentJobRequest {}
/**
 * @public
 *
 * The output of {@link SyncDeploymentJobCommand}.
 */
export interface SyncDeploymentJobCommandOutput extends SyncDeploymentJobResponse, __MetadataBearer {}

/**
 * <important>
 *             <p>End of support notice: On September 10, 2025, Amazon Web Services
 *          will discontinue support for Amazon Web Services RoboMaker. After September 10, 2025, you will
 *          no longer be able to access the Amazon Web Services RoboMaker console or Amazon Web Services RoboMaker resources.
 *          For more information on transitioning to Batch to help run containerized
 *          simulations, visit <a href="https://aws.amazon.com/blogs/hpc/run-simulations-using-multiple-containers-in-a-single-aws-batch-job/">https://aws.amazon.com/blogs/hpc/run-simulations-using-multiple-containers-in-a-single-aws-batch-job/</a>.
 *       </p>
 *          </important>
 *          <important>
 *             <p>This API is no longer supported. For more information, see the May 2, 2022 update in the <a href="https://docs.aws.amazon.com/robomaker/latest/dg/chapter-support-policy.html#software-support-policy-may2022">Support policy</a> page.</p>
 *          </important>
 *          <p>
 *          Syncrhonizes robots in a fleet to the latest deployment. This is helpful if robots were added after a deployment.
 *       </p>
 *
 * @deprecated Support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, SyncDeploymentJobCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, SyncDeploymentJobCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * // import type { RoboMakerClientConfig } from "@aws-sdk/client-robomaker";
 * const config = {}; // type is RoboMakerClientConfig
 * const client = new RoboMakerClient(config);
 * const input = { // SyncDeploymentJobRequest
 *   clientRequestToken: "STRING_VALUE", // required
 *   fleet: "STRING_VALUE", // required
 * };
 * const command = new SyncDeploymentJobCommand(input);
 * const response = await client.send(command);
 * // { // SyncDeploymentJobResponse
 * //   arn: "STRING_VALUE",
 * //   fleet: "STRING_VALUE",
 * //   status: "Pending" || "Preparing" || "InProgress" || "Failed" || "Succeeded" || "Canceled",
 * //   deploymentConfig: { // DeploymentConfig
 * //     concurrentDeploymentPercentage: Number("int"),
 * //     failureThresholdPercentage: Number("int"),
 * //     robotDeploymentTimeoutInSeconds: Number("long"),
 * //     downloadConditionFile: { // S3Object
 * //       bucket: "STRING_VALUE", // required
 * //       key: "STRING_VALUE", // required
 * //       etag: "STRING_VALUE",
 * //     },
 * //   },
 * //   deploymentApplicationConfigs: [ // DeploymentApplicationConfigs
 * //     { // DeploymentApplicationConfig
 * //       application: "STRING_VALUE", // required
 * //       applicationVersion: "STRING_VALUE", // required
 * //       launchConfig: { // DeploymentLaunchConfig
 * //         packageName: "STRING_VALUE", // required
 * //         preLaunchFile: "STRING_VALUE",
 * //         launchFile: "STRING_VALUE", // required
 * //         postLaunchFile: "STRING_VALUE",
 * //         environmentVariables: { // EnvironmentVariableMap
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   failureReason: "STRING_VALUE",
 * //   failureCode: "ResourceNotFound" || "EnvironmentSetupError" || "EtagMismatch" || "FailureThresholdBreached" || "RobotDeploymentAborted" || "RobotDeploymentNoResponse" || "RobotAgentConnectionTimeout" || "GreengrassDeploymentFailed" || "InvalidGreengrassGroup" || "MissingRobotArchitecture" || "MissingRobotApplicationArchitecture" || "MissingRobotDeploymentResource" || "GreengrassGroupVersionDoesNotExist" || "LambdaDeleted" || "ExtractingBundleFailure" || "PreLaunchFileFailure" || "PostLaunchFileFailure" || "BadPermissionError" || "DownloadConditionFailed" || "BadLambdaAssociated" || "InternalServerError" || "RobotApplicationDoesNotExist" || "DeploymentFleetDoesNotExist" || "FleetDeploymentTimeout",
 * //   createdAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param SyncDeploymentJobCommandInput - {@link SyncDeploymentJobCommandInput}
 * @returns {@link SyncDeploymentJobCommandOutput}
 * @see {@link SyncDeploymentJobCommandInput} for command's `input` shape.
 * @see {@link SyncDeploymentJobCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for RoboMakerClient's `config` shape.
 *
 * @throws {@link ConcurrentDeploymentException} (client fault)
 *  <p>The failure percentage threshold percentage was met.</p>
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
export class SyncDeploymentJobCommand extends $Command
  .classBuilder<
    SyncDeploymentJobCommandInput,
    SyncDeploymentJobCommandOutput,
    RoboMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RoboMakerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("robomaker", "SyncDeploymentJob", {})
  .n("RoboMakerClient", "SyncDeploymentJobCommand")
  .sc(SyncDeploymentJob)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SyncDeploymentJobRequest;
      output: SyncDeploymentJobResponse;
    };
    sdk: {
      input: SyncDeploymentJobCommandInput;
      output: SyncDeploymentJobCommandOutput;
    };
  };
}
