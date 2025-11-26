// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import type { CreateBuildInput, CreateBuildOutput } from "../models/models_0";
import { CreateBuild } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateBuildCommand}.
 */
export interface CreateBuildCommandInput extends CreateBuildInput {}
/**
 * @public
 *
 * The output of {@link CreateBuildCommand}.
 */
export interface CreateBuildCommandOutput extends CreateBuildOutput, __MetadataBearer {}

/**
 * <p>
 *             <b>This API works with the following fleet types:</b> EC2, Anywhere</p>
 *          <p>Creates a new Amazon GameLift Servers build resource for your game server binary files. Combine game
 *             server binaries into a zip file for use with Amazon GameLift Servers. </p>
 *          <important>
 *             <p>When setting up a new game build for Amazon GameLift Servers, we recommend using the CLI command <b>
 *                   <a href="https://docs.aws.amazon.com/cli/latest/reference/gamelift/upload-build.html">upload-build</a>
 *                </b>. This helper command combines two tasks: (1) it
 *                 uploads your build files from a file directory to an Amazon GameLift Servers Amazon S3 location, and (2)
 *                 it creates a new build resource.</p>
 *          </important>
 *          <p>You can use the <code>CreateBuild</code> operation in the following scenarios:</p>
 *          <ul>
 *             <li>
 *                <p>Create a new game build with build files that are in an Amazon S3 location under an
 *                     Amazon Web Services account that you control. To use this option, you give Amazon GameLift Servers access to
 *                     the Amazon S3 bucket. With permissions in place, specify a build name, operating
 *                     system, and the Amazon S3 storage location of your game build.</p>
 *             </li>
 *             <li>
 *                <p>Upload your build files to a Amazon GameLift Servers Amazon S3 location. To use this option,
 *                     specify a build name and operating system. This operation creates a new build
 *                     resource and also returns an Amazon S3 location with temporary access credentials.
 *                     Use the credentials to manually upload your build files to the specified Amazon S3
 *                     location. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/UploadingObjects.html">Uploading Objects</a> in
 *                     the <i>Amazon S3 Developer Guide</i>. After you upload build files to
 *                     the Amazon GameLift Servers Amazon S3 location, you can't update them. </p>
 *             </li>
 *          </ul>
 *          <p>If successful, this operation creates a new build resource with a unique build ID and
 *             places it in <code>INITIALIZED</code> status. A build must be in <code>READY</code>
 *             status before you can create fleets with it.</p>
 *          <p>
 *             <b>Learn more</b>
 *          </p>
 *          <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-build-intro.html">Uploading Your
 *                 Game</a>
 *          </p>
 *          <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-build-cli-uploading.html#gamelift-build-cli-uploading-create-build"> Create a Build with Files in Amazon S3</a>
 *          </p>
 *          <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, CreateBuildCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, CreateBuildCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * // import type { GameLiftClientConfig } from "@aws-sdk/client-gamelift";
 * const config = {}; // type is GameLiftClientConfig
 * const client = new GameLiftClient(config);
 * const input = { // CreateBuildInput
 *   Name: "STRING_VALUE",
 *   Version: "STRING_VALUE",
 *   StorageLocation: { // S3Location
 *     Bucket: "STRING_VALUE",
 *     Key: "STRING_VALUE",
 *     RoleArn: "STRING_VALUE",
 *     ObjectVersion: "STRING_VALUE",
 *   },
 *   OperatingSystem: "WINDOWS_2012" || "AMAZON_LINUX" || "AMAZON_LINUX_2" || "WINDOWS_2016" || "AMAZON_LINUX_2023" || "WINDOWS_2022",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   ServerSdkVersion: "STRING_VALUE",
 * };
 * const command = new CreateBuildCommand(input);
 * const response = await client.send(command);
 * // { // CreateBuildOutput
 * //   Build: { // Build
 * //     BuildId: "STRING_VALUE",
 * //     BuildArn: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     Version: "STRING_VALUE",
 * //     Status: "INITIALIZED" || "READY" || "FAILED",
 * //     SizeOnDisk: Number("long"),
 * //     OperatingSystem: "WINDOWS_2012" || "AMAZON_LINUX" || "AMAZON_LINUX_2" || "WINDOWS_2016" || "AMAZON_LINUX_2023" || "WINDOWS_2022",
 * //     CreationTime: new Date("TIMESTAMP"),
 * //     ServerSdkVersion: "STRING_VALUE",
 * //   },
 * //   UploadCredentials: { // AwsCredentials
 * //     AccessKeyId: "STRING_VALUE",
 * //     SecretAccessKey: "STRING_VALUE",
 * //     SessionToken: "STRING_VALUE",
 * //   },
 * //   StorageLocation: { // S3Location
 * //     Bucket: "STRING_VALUE",
 * //     Key: "STRING_VALUE",
 * //     RoleArn: "STRING_VALUE",
 * //     ObjectVersion: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateBuildCommandInput - {@link CreateBuildCommandInput}
 * @returns {@link CreateBuildCommandOutput}
 * @see {@link CreateBuildCommandInput} for command's `input` shape.
 * @see {@link CreateBuildCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for GameLiftClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The requested operation would cause a conflict with the current state of a service
 *             resource associated with the request. Resolve the conflict before retrying this
 *             request.</p>
 *          <p></p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>The service encountered an unrecoverable internal failure while processing the
 *             request. Clients can retry such requests immediately or after a waiting period.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>One or more parameter values in the request are invalid. Correct the invalid parameter
 *             values before retrying.</p>
 *
 * @throws {@link TaggingFailedException} (client fault)
 *  <p>The requested tagging operation did not succeed. This may be due to invalid tag format
 *             or the maximum tag limit may have been exceeded. Resolve the issue before
 *             retrying.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>The client failed authentication. Clients should not retry such requests.</p>
 *
 * @throws {@link GameLiftServiceException}
 * <p>Base exception class for all service exceptions from GameLift service.</p>
 *
 *
 * @public
 */
export class CreateBuildCommand extends $Command
  .classBuilder<
    CreateBuildCommandInput,
    CreateBuildCommandOutput,
    GameLiftClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GameLiftClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GameLift", "CreateBuild", {})
  .n("GameLiftClient", "CreateBuildCommand")
  .sc(CreateBuild)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateBuildInput;
      output: CreateBuildOutput;
    };
    sdk: {
      input: CreateBuildCommandInput;
      output: CreateBuildCommandOutput;
    };
  };
}
