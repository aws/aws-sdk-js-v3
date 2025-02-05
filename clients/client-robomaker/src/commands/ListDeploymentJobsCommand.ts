// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListDeploymentJobsRequest, ListDeploymentJobsResponse } from "../models/models_0";
import { de_ListDeploymentJobsCommand, se_ListDeploymentJobsCommand } from "../protocols/Aws_restJson1";
import { RoboMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RoboMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListDeploymentJobsCommand}.
 */
export interface ListDeploymentJobsCommandInput extends ListDeploymentJobsRequest {}
/**
 * @public
 *
 * The output of {@link ListDeploymentJobsCommand}.
 */
export interface ListDeploymentJobsCommandOutput extends ListDeploymentJobsResponse, __MetadataBearer {}

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
 *          Returns a list of deployment jobs for a fleet. You can optionally provide filters to retrieve specific deployment jobs.
 *       </p>
 *
 * @deprecated Support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, ListDeploymentJobsCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, ListDeploymentJobsCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new RoboMakerClient(config);
 * const input = { // ListDeploymentJobsRequest
 *   filters: [ // Filters
 *     { // Filter
 *       name: "STRING_VALUE",
 *       values: [ // FilterValues
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListDeploymentJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListDeploymentJobsResponse
 * //   deploymentJobs: [ // DeploymentJobs
 * //     { // DeploymentJob
 * //       arn: "STRING_VALUE",
 * //       fleet: "STRING_VALUE",
 * //       status: "Pending" || "Preparing" || "InProgress" || "Failed" || "Succeeded" || "Canceled",
 * //       deploymentApplicationConfigs: [ // DeploymentApplicationConfigs
 * //         { // DeploymentApplicationConfig
 * //           application: "STRING_VALUE", // required
 * //           applicationVersion: "STRING_VALUE", // required
 * //           launchConfig: { // DeploymentLaunchConfig
 * //             packageName: "STRING_VALUE", // required
 * //             preLaunchFile: "STRING_VALUE",
 * //             launchFile: "STRING_VALUE", // required
 * //             postLaunchFile: "STRING_VALUE",
 * //             environmentVariables: { // EnvironmentVariableMap
 * //               "<keys>": "STRING_VALUE",
 * //             },
 * //           },
 * //         },
 * //       ],
 * //       deploymentConfig: { // DeploymentConfig
 * //         concurrentDeploymentPercentage: Number("int"),
 * //         failureThresholdPercentage: Number("int"),
 * //         robotDeploymentTimeoutInSeconds: Number("long"),
 * //         downloadConditionFile: { // S3Object
 * //           bucket: "STRING_VALUE", // required
 * //           key: "STRING_VALUE", // required
 * //           etag: "STRING_VALUE",
 * //         },
 * //       },
 * //       failureReason: "STRING_VALUE",
 * //       failureCode: "ResourceNotFound" || "EnvironmentSetupError" || "EtagMismatch" || "FailureThresholdBreached" || "RobotDeploymentAborted" || "RobotDeploymentNoResponse" || "RobotAgentConnectionTimeout" || "GreengrassDeploymentFailed" || "InvalidGreengrassGroup" || "MissingRobotArchitecture" || "MissingRobotApplicationArchitecture" || "MissingRobotDeploymentResource" || "GreengrassGroupVersionDoesNotExist" || "LambdaDeleted" || "ExtractingBundleFailure" || "PreLaunchFileFailure" || "PostLaunchFileFailure" || "BadPermissionError" || "DownloadConditionFailed" || "BadLambdaAssociated" || "InternalServerError" || "RobotApplicationDoesNotExist" || "DeploymentFleetDoesNotExist" || "FleetDeploymentTimeout",
 * //       createdAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDeploymentJobsCommandInput - {@link ListDeploymentJobsCommandInput}
 * @returns {@link ListDeploymentJobsCommandOutput}
 * @see {@link ListDeploymentJobsCommandInput} for command's `input` shape.
 * @see {@link ListDeploymentJobsCommandOutput} for command's `response` shape.
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
export class ListDeploymentJobsCommand extends $Command
  .classBuilder<
    ListDeploymentJobsCommandInput,
    ListDeploymentJobsCommandOutput,
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
  .s("robomaker", "ListDeploymentJobs", {})
  .n("RoboMakerClient", "ListDeploymentJobsCommand")
  .f(void 0, void 0)
  .ser(se_ListDeploymentJobsCommand)
  .de(de_ListDeploymentJobsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDeploymentJobsRequest;
      output: ListDeploymentJobsResponse;
    };
    sdk: {
      input: ListDeploymentJobsCommandInput;
      output: ListDeploymentJobsCommandOutput;
    };
  };
}
