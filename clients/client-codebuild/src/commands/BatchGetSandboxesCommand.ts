// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { BatchGetSandboxesInput, BatchGetSandboxesOutput } from "../models/models_0";
import { BatchGetSandboxes } from "../schemas/schemas_5_Batch";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchGetSandboxesCommand}.
 */
export interface BatchGetSandboxesCommandInput extends BatchGetSandboxesInput {}
/**
 * @public
 *
 * The output of {@link BatchGetSandboxesCommand}.
 */
export interface BatchGetSandboxesCommandOutput extends BatchGetSandboxesOutput, __MetadataBearer {}

/**
 * <p>Gets information about the sandbox status.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeBuildClient, BatchGetSandboxesCommand } from "@aws-sdk/client-codebuild"; // ES Modules import
 * // const { CodeBuildClient, BatchGetSandboxesCommand } = require("@aws-sdk/client-codebuild"); // CommonJS import
 * // import type { CodeBuildClientConfig } from "@aws-sdk/client-codebuild";
 * const config = {}; // type is CodeBuildClientConfig
 * const client = new CodeBuildClient(config);
 * const input = { // BatchGetSandboxesInput
 *   ids: [ // SandboxIds // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new BatchGetSandboxesCommand(input);
 * const response = await client.send(command);
 * // { // BatchGetSandboxesOutput
 * //   sandboxes: [ // Sandboxes
 * //     { // Sandbox
 * //       id: "STRING_VALUE",
 * //       arn: "STRING_VALUE",
 * //       projectName: "STRING_VALUE",
 * //       requestTime: new Date("TIMESTAMP"),
 * //       startTime: new Date("TIMESTAMP"),
 * //       endTime: new Date("TIMESTAMP"),
 * //       status: "STRING_VALUE",
 * //       source: { // ProjectSource
 * //         type: "CODECOMMIT" || "CODEPIPELINE" || "GITHUB" || "GITLAB" || "GITLAB_SELF_MANAGED" || "S3" || "BITBUCKET" || "GITHUB_ENTERPRISE" || "NO_SOURCE", // required
 * //         location: "STRING_VALUE",
 * //         gitCloneDepth: Number("int"),
 * //         gitSubmodulesConfig: { // GitSubmodulesConfig
 * //           fetchSubmodules: true || false, // required
 * //         },
 * //         buildspec: "STRING_VALUE",
 * //         auth: { // SourceAuth
 * //           type: "OAUTH" || "CODECONNECTIONS" || "SECRETS_MANAGER", // required
 * //           resource: "STRING_VALUE",
 * //         },
 * //         reportBuildStatus: true || false,
 * //         buildStatusConfig: { // BuildStatusConfig
 * //           context: "STRING_VALUE",
 * //           targetUrl: "STRING_VALUE",
 * //         },
 * //         insecureSsl: true || false,
 * //         sourceIdentifier: "STRING_VALUE",
 * //       },
 * //       sourceVersion: "STRING_VALUE",
 * //       secondarySources: [ // ProjectSources
 * //         {
 * //           type: "CODECOMMIT" || "CODEPIPELINE" || "GITHUB" || "GITLAB" || "GITLAB_SELF_MANAGED" || "S3" || "BITBUCKET" || "GITHUB_ENTERPRISE" || "NO_SOURCE", // required
 * //           location: "STRING_VALUE",
 * //           gitCloneDepth: Number("int"),
 * //           gitSubmodulesConfig: {
 * //             fetchSubmodules: true || false, // required
 * //           },
 * //           buildspec: "STRING_VALUE",
 * //           auth: {
 * //             type: "OAUTH" || "CODECONNECTIONS" || "SECRETS_MANAGER", // required
 * //             resource: "STRING_VALUE",
 * //           },
 * //           reportBuildStatus: true || false,
 * //           buildStatusConfig: {
 * //             context: "STRING_VALUE",
 * //             targetUrl: "STRING_VALUE",
 * //           },
 * //           insecureSsl: true || false,
 * //           sourceIdentifier: "STRING_VALUE",
 * //         },
 * //       ],
 * //       secondarySourceVersions: [ // ProjectSecondarySourceVersions
 * //         { // ProjectSourceVersion
 * //           sourceIdentifier: "STRING_VALUE", // required
 * //           sourceVersion: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       environment: { // ProjectEnvironment
 * //         type: "WINDOWS_CONTAINER" || "LINUX_CONTAINER" || "LINUX_GPU_CONTAINER" || "ARM_CONTAINER" || "WINDOWS_SERVER_2019_CONTAINER" || "WINDOWS_SERVER_2022_CONTAINER" || "LINUX_LAMBDA_CONTAINER" || "ARM_LAMBDA_CONTAINER" || "LINUX_EC2" || "ARM_EC2" || "WINDOWS_EC2" || "MAC_ARM", // required
 * //         image: "STRING_VALUE", // required
 * //         computeType: "BUILD_GENERAL1_SMALL" || "BUILD_GENERAL1_MEDIUM" || "BUILD_GENERAL1_LARGE" || "BUILD_GENERAL1_XLARGE" || "BUILD_GENERAL1_2XLARGE" || "BUILD_LAMBDA_1GB" || "BUILD_LAMBDA_2GB" || "BUILD_LAMBDA_4GB" || "BUILD_LAMBDA_8GB" || "BUILD_LAMBDA_10GB" || "ATTRIBUTE_BASED_COMPUTE" || "CUSTOM_INSTANCE_TYPE", // required
 * //         computeConfiguration: { // ComputeConfiguration
 * //           vCpu: Number("long"),
 * //           memory: Number("long"),
 * //           disk: Number("long"),
 * //           machineType: "GENERAL" || "NVME",
 * //           instanceType: "STRING_VALUE",
 * //         },
 * //         fleet: { // ProjectFleet
 * //           fleetArn: "STRING_VALUE",
 * //         },
 * //         environmentVariables: [ // EnvironmentVariables
 * //           { // EnvironmentVariable
 * //             name: "STRING_VALUE", // required
 * //             value: "STRING_VALUE", // required
 * //             type: "PLAINTEXT" || "PARAMETER_STORE" || "SECRETS_MANAGER",
 * //           },
 * //         ],
 * //         privilegedMode: true || false,
 * //         certificate: "STRING_VALUE",
 * //         registryCredential: { // RegistryCredential
 * //           credential: "STRING_VALUE", // required
 * //           credentialProvider: "SECRETS_MANAGER", // required
 * //         },
 * //         imagePullCredentialsType: "CODEBUILD" || "SERVICE_ROLE",
 * //         dockerServer: { // DockerServer
 * //           computeType: "BUILD_GENERAL1_SMALL" || "BUILD_GENERAL1_MEDIUM" || "BUILD_GENERAL1_LARGE" || "BUILD_GENERAL1_XLARGE" || "BUILD_GENERAL1_2XLARGE" || "BUILD_LAMBDA_1GB" || "BUILD_LAMBDA_2GB" || "BUILD_LAMBDA_4GB" || "BUILD_LAMBDA_8GB" || "BUILD_LAMBDA_10GB" || "ATTRIBUTE_BASED_COMPUTE" || "CUSTOM_INSTANCE_TYPE", // required
 * //           securityGroupIds: [ // SecurityGroupIds
 * //             "STRING_VALUE",
 * //           ],
 * //           status: { // DockerServerStatus
 * //             status: "STRING_VALUE",
 * //             message: "STRING_VALUE",
 * //           },
 * //         },
 * //       },
 * //       fileSystemLocations: [ // ProjectFileSystemLocations
 * //         { // ProjectFileSystemLocation
 * //           type: "EFS",
 * //           location: "STRING_VALUE",
 * //           mountPoint: "STRING_VALUE",
 * //           identifier: "STRING_VALUE",
 * //           mountOptions: "STRING_VALUE",
 * //         },
 * //       ],
 * //       timeoutInMinutes: Number("int"),
 * //       queuedTimeoutInMinutes: Number("int"),
 * //       vpcConfig: { // VpcConfig
 * //         vpcId: "STRING_VALUE",
 * //         subnets: [ // Subnets
 * //           "STRING_VALUE",
 * //         ],
 * //         securityGroupIds: [
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       logConfig: { // LogsConfig
 * //         cloudWatchLogs: { // CloudWatchLogsConfig
 * //           status: "ENABLED" || "DISABLED", // required
 * //           groupName: "STRING_VALUE",
 * //           streamName: "STRING_VALUE",
 * //         },
 * //         s3Logs: { // S3LogsConfig
 * //           status: "ENABLED" || "DISABLED", // required
 * //           location: "STRING_VALUE",
 * //           encryptionDisabled: true || false,
 * //           bucketOwnerAccess: "NONE" || "READ_ONLY" || "FULL",
 * //         },
 * //       },
 * //       encryptionKey: "STRING_VALUE",
 * //       serviceRole: "STRING_VALUE",
 * //       currentSession: { // SandboxSession
 * //         id: "STRING_VALUE",
 * //         status: "STRING_VALUE",
 * //         startTime: new Date("TIMESTAMP"),
 * //         endTime: new Date("TIMESTAMP"),
 * //         currentPhase: "STRING_VALUE",
 * //         phases: [ // SandboxSessionPhases
 * //           { // SandboxSessionPhase
 * //             phaseType: "STRING_VALUE",
 * //             phaseStatus: "SUCCEEDED" || "FAILED" || "FAULT" || "TIMED_OUT" || "IN_PROGRESS" || "STOPPED",
 * //             startTime: new Date("TIMESTAMP"),
 * //             endTime: new Date("TIMESTAMP"),
 * //             durationInSeconds: Number("long"),
 * //             contexts: [ // PhaseContexts
 * //               { // PhaseContext
 * //                 statusCode: "STRING_VALUE",
 * //                 message: "STRING_VALUE",
 * //               },
 * //             ],
 * //           },
 * //         ],
 * //         resolvedSourceVersion: "STRING_VALUE",
 * //         logs: { // LogsLocation
 * //           groupName: "STRING_VALUE",
 * //           streamName: "STRING_VALUE",
 * //           deepLink: "STRING_VALUE",
 * //           s3DeepLink: "STRING_VALUE",
 * //           cloudWatchLogsArn: "STRING_VALUE",
 * //           s3LogsArn: "STRING_VALUE",
 * //           cloudWatchLogs: {
 * //             status: "ENABLED" || "DISABLED", // required
 * //             groupName: "STRING_VALUE",
 * //             streamName: "STRING_VALUE",
 * //           },
 * //           s3Logs: {
 * //             status: "ENABLED" || "DISABLED", // required
 * //             location: "STRING_VALUE",
 * //             encryptionDisabled: true || false,
 * //             bucketOwnerAccess: "NONE" || "READ_ONLY" || "FULL",
 * //           },
 * //         },
 * //         networkInterface: { // NetworkInterface
 * //           subnetId: "STRING_VALUE",
 * //           networkInterfaceId: "STRING_VALUE",
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   sandboxesNotFound: [ // SandboxIds
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchGetSandboxesCommandInput - {@link BatchGetSandboxesCommandInput}
 * @returns {@link BatchGetSandboxesCommandOutput}
 * @see {@link BatchGetSandboxesCommandInput} for command's `input` shape.
 * @see {@link BatchGetSandboxesCommandOutput} for command's `response` shape.
 * @see {@link CodeBuildClientResolvedConfig | config} for CodeBuildClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input value that was provided is not valid.</p>
 *
 * @throws {@link CodeBuildServiceException}
 * <p>Base exception class for all service exceptions from CodeBuild service.</p>
 *
 *
 * @public
 */
export class BatchGetSandboxesCommand extends $Command
  .classBuilder<
    BatchGetSandboxesCommandInput,
    BatchGetSandboxesCommandOutput,
    CodeBuildClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeBuildClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CodeBuild_20161006", "BatchGetSandboxes", {})
  .n("CodeBuildClient", "BatchGetSandboxesCommand")
  .sc(BatchGetSandboxes)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchGetSandboxesInput;
      output: BatchGetSandboxesOutput;
    };
    sdk: {
      input: BatchGetSandboxesCommandInput;
      output: BatchGetSandboxesCommandOutput;
    };
  };
}
