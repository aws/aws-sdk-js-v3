// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { StartBuildInput, StartBuildOutput } from "../models/models_0";
import { StartBuild$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartBuildCommand}.
 */
export interface StartBuildCommandInput extends StartBuildInput {}
/**
 * @public
 *
 * The output of {@link StartBuildCommand}.
 */
export interface StartBuildCommandOutput extends StartBuildOutput, __MetadataBearer {}

/**
 * <p>Starts running a build with the settings defined in the project. These setting include: how to run a build,
 *             where to get the source code, which build environment to use, which build commands to run, and where to store the build output.</p>
 *          <p>You can also start a build run by overriding some of the build settings in the project. The overrides only apply for that
 *             specific start build request. The settings in the project are unaltered.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeBuildClient, StartBuildCommand } from "@aws-sdk/client-codebuild"; // ES Modules import
 * // const { CodeBuildClient, StartBuildCommand } = require("@aws-sdk/client-codebuild"); // CommonJS import
 * // import type { CodeBuildClientConfig } from "@aws-sdk/client-codebuild";
 * const config = {}; // type is CodeBuildClientConfig
 * const client = new CodeBuildClient(config);
 * const input = { // StartBuildInput
 *   projectName: "STRING_VALUE", // required
 *   secondarySourcesOverride: [ // ProjectSources
 *     { // ProjectSource
 *       type: "CODECOMMIT" || "CODEPIPELINE" || "GITHUB" || "GITLAB" || "GITLAB_SELF_MANAGED" || "S3" || "BITBUCKET" || "GITHUB_ENTERPRISE" || "NO_SOURCE", // required
 *       location: "STRING_VALUE",
 *       gitCloneDepth: Number("int"),
 *       gitSubmodulesConfig: { // GitSubmodulesConfig
 *         fetchSubmodules: true || false, // required
 *       },
 *       buildspec: "STRING_VALUE",
 *       auth: { // SourceAuth
 *         type: "OAUTH" || "CODECONNECTIONS" || "SECRETS_MANAGER", // required
 *         resource: "STRING_VALUE",
 *       },
 *       reportBuildStatus: true || false,
 *       buildStatusConfig: { // BuildStatusConfig
 *         context: "STRING_VALUE",
 *         targetUrl: "STRING_VALUE",
 *       },
 *       insecureSsl: true || false,
 *       sourceIdentifier: "STRING_VALUE",
 *     },
 *   ],
 *   secondarySourcesVersionOverride: [ // ProjectSecondarySourceVersions
 *     { // ProjectSourceVersion
 *       sourceIdentifier: "STRING_VALUE", // required
 *       sourceVersion: "STRING_VALUE", // required
 *     },
 *   ],
 *   sourceVersion: "STRING_VALUE",
 *   artifactsOverride: { // ProjectArtifacts
 *     type: "CODEPIPELINE" || "S3" || "NO_ARTIFACTS", // required
 *     location: "STRING_VALUE",
 *     path: "STRING_VALUE",
 *     namespaceType: "NONE" || "BUILD_ID",
 *     name: "STRING_VALUE",
 *     packaging: "NONE" || "ZIP",
 *     overrideArtifactName: true || false,
 *     encryptionDisabled: true || false,
 *     artifactIdentifier: "STRING_VALUE",
 *     bucketOwnerAccess: "NONE" || "READ_ONLY" || "FULL",
 *   },
 *   secondaryArtifactsOverride: [ // ProjectArtifactsList
 *     {
 *       type: "CODEPIPELINE" || "S3" || "NO_ARTIFACTS", // required
 *       location: "STRING_VALUE",
 *       path: "STRING_VALUE",
 *       namespaceType: "NONE" || "BUILD_ID",
 *       name: "STRING_VALUE",
 *       packaging: "NONE" || "ZIP",
 *       overrideArtifactName: true || false,
 *       encryptionDisabled: true || false,
 *       artifactIdentifier: "STRING_VALUE",
 *       bucketOwnerAccess: "NONE" || "READ_ONLY" || "FULL",
 *     },
 *   ],
 *   environmentVariablesOverride: [ // EnvironmentVariables
 *     { // EnvironmentVariable
 *       name: "STRING_VALUE", // required
 *       value: "STRING_VALUE", // required
 *       type: "PLAINTEXT" || "PARAMETER_STORE" || "SECRETS_MANAGER",
 *     },
 *   ],
 *   sourceTypeOverride: "CODECOMMIT" || "CODEPIPELINE" || "GITHUB" || "GITLAB" || "GITLAB_SELF_MANAGED" || "S3" || "BITBUCKET" || "GITHUB_ENTERPRISE" || "NO_SOURCE",
 *   sourceLocationOverride: "STRING_VALUE",
 *   sourceAuthOverride: {
 *     type: "OAUTH" || "CODECONNECTIONS" || "SECRETS_MANAGER", // required
 *     resource: "STRING_VALUE",
 *   },
 *   gitCloneDepthOverride: Number("int"),
 *   gitSubmodulesConfigOverride: {
 *     fetchSubmodules: true || false, // required
 *   },
 *   buildspecOverride: "STRING_VALUE",
 *   insecureSslOverride: true || false,
 *   reportBuildStatusOverride: true || false,
 *   buildStatusConfigOverride: {
 *     context: "STRING_VALUE",
 *     targetUrl: "STRING_VALUE",
 *   },
 *   environmentTypeOverride: "WINDOWS_CONTAINER" || "LINUX_CONTAINER" || "LINUX_GPU_CONTAINER" || "ARM_CONTAINER" || "WINDOWS_SERVER_2019_CONTAINER" || "WINDOWS_SERVER_2022_CONTAINER" || "LINUX_LAMBDA_CONTAINER" || "ARM_LAMBDA_CONTAINER" || "LINUX_EC2" || "ARM_EC2" || "WINDOWS_EC2" || "MAC_ARM",
 *   imageOverride: "STRING_VALUE",
 *   computeTypeOverride: "BUILD_GENERAL1_SMALL" || "BUILD_GENERAL1_MEDIUM" || "BUILD_GENERAL1_LARGE" || "BUILD_GENERAL1_XLARGE" || "BUILD_GENERAL1_2XLARGE" || "BUILD_LAMBDA_1GB" || "BUILD_LAMBDA_2GB" || "BUILD_LAMBDA_4GB" || "BUILD_LAMBDA_8GB" || "BUILD_LAMBDA_10GB" || "ATTRIBUTE_BASED_COMPUTE" || "CUSTOM_INSTANCE_TYPE",
 *   certificateOverride: "STRING_VALUE",
 *   cacheOverride: { // ProjectCache
 *     type: "NO_CACHE" || "S3" || "LOCAL", // required
 *     location: "STRING_VALUE",
 *     modes: [ // ProjectCacheModes
 *       "LOCAL_DOCKER_LAYER_CACHE" || "LOCAL_SOURCE_CACHE" || "LOCAL_CUSTOM_CACHE",
 *     ],
 *     cacheNamespace: "STRING_VALUE",
 *   },
 *   serviceRoleOverride: "STRING_VALUE",
 *   privilegedModeOverride: true || false,
 *   timeoutInMinutesOverride: Number("int"),
 *   queuedTimeoutInMinutesOverride: Number("int"),
 *   encryptionKeyOverride: "STRING_VALUE",
 *   idempotencyToken: "STRING_VALUE",
 *   logsConfigOverride: { // LogsConfig
 *     cloudWatchLogs: { // CloudWatchLogsConfig
 *       status: "ENABLED" || "DISABLED", // required
 *       groupName: "STRING_VALUE",
 *       streamName: "STRING_VALUE",
 *     },
 *     s3Logs: { // S3LogsConfig
 *       status: "ENABLED" || "DISABLED", // required
 *       location: "STRING_VALUE",
 *       encryptionDisabled: true || false,
 *       bucketOwnerAccess: "NONE" || "READ_ONLY" || "FULL",
 *     },
 *   },
 *   registryCredentialOverride: { // RegistryCredential
 *     credential: "STRING_VALUE", // required
 *     credentialProvider: "SECRETS_MANAGER", // required
 *   },
 *   imagePullCredentialsTypeOverride: "CODEBUILD" || "SERVICE_ROLE",
 *   debugSessionEnabled: true || false,
 *   fleetOverride: { // ProjectFleet
 *     fleetArn: "STRING_VALUE",
 *   },
 *   autoRetryLimitOverride: Number("int"),
 * };
 * const command = new StartBuildCommand(input);
 * const response = await client.send(command);
 * // { // StartBuildOutput
 * //   build: { // Build
 * //     id: "STRING_VALUE",
 * //     arn: "STRING_VALUE",
 * //     buildNumber: Number("long"),
 * //     startTime: new Date("TIMESTAMP"),
 * //     endTime: new Date("TIMESTAMP"),
 * //     currentPhase: "STRING_VALUE",
 * //     buildStatus: "SUCCEEDED" || "FAILED" || "FAULT" || "TIMED_OUT" || "IN_PROGRESS" || "STOPPED",
 * //     sourceVersion: "STRING_VALUE",
 * //     resolvedSourceVersion: "STRING_VALUE",
 * //     projectName: "STRING_VALUE",
 * //     phases: [ // BuildPhases
 * //       { // BuildPhase
 * //         phaseType: "SUBMITTED" || "QUEUED" || "PROVISIONING" || "DOWNLOAD_SOURCE" || "INSTALL" || "PRE_BUILD" || "BUILD" || "POST_BUILD" || "UPLOAD_ARTIFACTS" || "FINALIZING" || "COMPLETED",
 * //         phaseStatus: "SUCCEEDED" || "FAILED" || "FAULT" || "TIMED_OUT" || "IN_PROGRESS" || "STOPPED",
 * //         startTime: new Date("TIMESTAMP"),
 * //         endTime: new Date("TIMESTAMP"),
 * //         durationInSeconds: Number("long"),
 * //         contexts: [ // PhaseContexts
 * //           { // PhaseContext
 * //             statusCode: "STRING_VALUE",
 * //             message: "STRING_VALUE",
 * //           },
 * //         ],
 * //       },
 * //     ],
 * //     source: { // ProjectSource
 * //       type: "CODECOMMIT" || "CODEPIPELINE" || "GITHUB" || "GITLAB" || "GITLAB_SELF_MANAGED" || "S3" || "BITBUCKET" || "GITHUB_ENTERPRISE" || "NO_SOURCE", // required
 * //       location: "STRING_VALUE",
 * //       gitCloneDepth: Number("int"),
 * //       gitSubmodulesConfig: { // GitSubmodulesConfig
 * //         fetchSubmodules: true || false, // required
 * //       },
 * //       buildspec: "STRING_VALUE",
 * //       auth: { // SourceAuth
 * //         type: "OAUTH" || "CODECONNECTIONS" || "SECRETS_MANAGER", // required
 * //         resource: "STRING_VALUE",
 * //       },
 * //       reportBuildStatus: true || false,
 * //       buildStatusConfig: { // BuildStatusConfig
 * //         context: "STRING_VALUE",
 * //         targetUrl: "STRING_VALUE",
 * //       },
 * //       insecureSsl: true || false,
 * //       sourceIdentifier: "STRING_VALUE",
 * //     },
 * //     secondarySources: [ // ProjectSources
 * //       {
 * //         type: "CODECOMMIT" || "CODEPIPELINE" || "GITHUB" || "GITLAB" || "GITLAB_SELF_MANAGED" || "S3" || "BITBUCKET" || "GITHUB_ENTERPRISE" || "NO_SOURCE", // required
 * //         location: "STRING_VALUE",
 * //         gitCloneDepth: Number("int"),
 * //         gitSubmodulesConfig: {
 * //           fetchSubmodules: true || false, // required
 * //         },
 * //         buildspec: "STRING_VALUE",
 * //         auth: {
 * //           type: "OAUTH" || "CODECONNECTIONS" || "SECRETS_MANAGER", // required
 * //           resource: "STRING_VALUE",
 * //         },
 * //         reportBuildStatus: true || false,
 * //         buildStatusConfig: {
 * //           context: "STRING_VALUE",
 * //           targetUrl: "STRING_VALUE",
 * //         },
 * //         insecureSsl: true || false,
 * //         sourceIdentifier: "STRING_VALUE",
 * //       },
 * //     ],
 * //     secondarySourceVersions: [ // ProjectSecondarySourceVersions
 * //       { // ProjectSourceVersion
 * //         sourceIdentifier: "STRING_VALUE", // required
 * //         sourceVersion: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     artifacts: { // BuildArtifacts
 * //       location: "STRING_VALUE",
 * //       sha256sum: "STRING_VALUE",
 * //       md5sum: "STRING_VALUE",
 * //       overrideArtifactName: true || false,
 * //       encryptionDisabled: true || false,
 * //       artifactIdentifier: "STRING_VALUE",
 * //       bucketOwnerAccess: "NONE" || "READ_ONLY" || "FULL",
 * //     },
 * //     secondaryArtifacts: [ // BuildArtifactsList
 * //       {
 * //         location: "STRING_VALUE",
 * //         sha256sum: "STRING_VALUE",
 * //         md5sum: "STRING_VALUE",
 * //         overrideArtifactName: true || false,
 * //         encryptionDisabled: true || false,
 * //         artifactIdentifier: "STRING_VALUE",
 * //         bucketOwnerAccess: "NONE" || "READ_ONLY" || "FULL",
 * //       },
 * //     ],
 * //     cache: { // ProjectCache
 * //       type: "NO_CACHE" || "S3" || "LOCAL", // required
 * //       location: "STRING_VALUE",
 * //       modes: [ // ProjectCacheModes
 * //         "LOCAL_DOCKER_LAYER_CACHE" || "LOCAL_SOURCE_CACHE" || "LOCAL_CUSTOM_CACHE",
 * //       ],
 * //       cacheNamespace: "STRING_VALUE",
 * //     },
 * //     environment: { // ProjectEnvironment
 * //       type: "WINDOWS_CONTAINER" || "LINUX_CONTAINER" || "LINUX_GPU_CONTAINER" || "ARM_CONTAINER" || "WINDOWS_SERVER_2019_CONTAINER" || "WINDOWS_SERVER_2022_CONTAINER" || "LINUX_LAMBDA_CONTAINER" || "ARM_LAMBDA_CONTAINER" || "LINUX_EC2" || "ARM_EC2" || "WINDOWS_EC2" || "MAC_ARM", // required
 * //       image: "STRING_VALUE", // required
 * //       computeType: "BUILD_GENERAL1_SMALL" || "BUILD_GENERAL1_MEDIUM" || "BUILD_GENERAL1_LARGE" || "BUILD_GENERAL1_XLARGE" || "BUILD_GENERAL1_2XLARGE" || "BUILD_LAMBDA_1GB" || "BUILD_LAMBDA_2GB" || "BUILD_LAMBDA_4GB" || "BUILD_LAMBDA_8GB" || "BUILD_LAMBDA_10GB" || "ATTRIBUTE_BASED_COMPUTE" || "CUSTOM_INSTANCE_TYPE", // required
 * //       computeConfiguration: { // ComputeConfiguration
 * //         vCpu: Number("long"),
 * //         memory: Number("long"),
 * //         disk: Number("long"),
 * //         machineType: "GENERAL" || "NVME",
 * //         instanceType: "STRING_VALUE",
 * //       },
 * //       fleet: { // ProjectFleet
 * //         fleetArn: "STRING_VALUE",
 * //       },
 * //       environmentVariables: [ // EnvironmentVariables
 * //         { // EnvironmentVariable
 * //           name: "STRING_VALUE", // required
 * //           value: "STRING_VALUE", // required
 * //           type: "PLAINTEXT" || "PARAMETER_STORE" || "SECRETS_MANAGER",
 * //         },
 * //       ],
 * //       privilegedMode: true || false,
 * //       certificate: "STRING_VALUE",
 * //       registryCredential: { // RegistryCredential
 * //         credential: "STRING_VALUE", // required
 * //         credentialProvider: "SECRETS_MANAGER", // required
 * //       },
 * //       imagePullCredentialsType: "CODEBUILD" || "SERVICE_ROLE",
 * //       dockerServer: { // DockerServer
 * //         computeType: "BUILD_GENERAL1_SMALL" || "BUILD_GENERAL1_MEDIUM" || "BUILD_GENERAL1_LARGE" || "BUILD_GENERAL1_XLARGE" || "BUILD_GENERAL1_2XLARGE" || "BUILD_LAMBDA_1GB" || "BUILD_LAMBDA_2GB" || "BUILD_LAMBDA_4GB" || "BUILD_LAMBDA_8GB" || "BUILD_LAMBDA_10GB" || "ATTRIBUTE_BASED_COMPUTE" || "CUSTOM_INSTANCE_TYPE", // required
 * //         securityGroupIds: [ // SecurityGroupIds
 * //           "STRING_VALUE",
 * //         ],
 * //         status: { // DockerServerStatus
 * //           status: "STRING_VALUE",
 * //           message: "STRING_VALUE",
 * //         },
 * //       },
 * //     },
 * //     serviceRole: "STRING_VALUE",
 * //     logs: { // LogsLocation
 * //       groupName: "STRING_VALUE",
 * //       streamName: "STRING_VALUE",
 * //       deepLink: "STRING_VALUE",
 * //       s3DeepLink: "STRING_VALUE",
 * //       cloudWatchLogsArn: "STRING_VALUE",
 * //       s3LogsArn: "STRING_VALUE",
 * //       cloudWatchLogs: { // CloudWatchLogsConfig
 * //         status: "ENABLED" || "DISABLED", // required
 * //         groupName: "STRING_VALUE",
 * //         streamName: "STRING_VALUE",
 * //       },
 * //       s3Logs: { // S3LogsConfig
 * //         status: "ENABLED" || "DISABLED", // required
 * //         location: "STRING_VALUE",
 * //         encryptionDisabled: true || false,
 * //         bucketOwnerAccess: "NONE" || "READ_ONLY" || "FULL",
 * //       },
 * //     },
 * //     timeoutInMinutes: Number("int"),
 * //     queuedTimeoutInMinutes: Number("int"),
 * //     buildComplete: true || false,
 * //     initiator: "STRING_VALUE",
 * //     vpcConfig: { // VpcConfig
 * //       vpcId: "STRING_VALUE",
 * //       subnets: [ // Subnets
 * //         "STRING_VALUE",
 * //       ],
 * //       securityGroupIds: [
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     networkInterface: { // NetworkInterface
 * //       subnetId: "STRING_VALUE",
 * //       networkInterfaceId: "STRING_VALUE",
 * //     },
 * //     encryptionKey: "STRING_VALUE",
 * //     exportedEnvironmentVariables: [ // ExportedEnvironmentVariables
 * //       { // ExportedEnvironmentVariable
 * //         name: "STRING_VALUE",
 * //         value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     reportArns: [ // BuildReportArns
 * //       "STRING_VALUE",
 * //     ],
 * //     fileSystemLocations: [ // ProjectFileSystemLocations
 * //       { // ProjectFileSystemLocation
 * //         type: "EFS",
 * //         location: "STRING_VALUE",
 * //         mountPoint: "STRING_VALUE",
 * //         identifier: "STRING_VALUE",
 * //         mountOptions: "STRING_VALUE",
 * //       },
 * //     ],
 * //     debugSession: { // DebugSession
 * //       sessionEnabled: true || false,
 * //       sessionTarget: "STRING_VALUE",
 * //     },
 * //     buildBatchArn: "STRING_VALUE",
 * //     autoRetryConfig: { // AutoRetryConfig
 * //       autoRetryLimit: Number("int"),
 * //       autoRetryNumber: Number("int"),
 * //       nextAutoRetry: "STRING_VALUE",
 * //       previousAutoRetry: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param StartBuildCommandInput - {@link StartBuildCommandInput}
 * @returns {@link StartBuildCommandOutput}
 * @see {@link StartBuildCommandInput} for command's `input` shape.
 * @see {@link StartBuildCommandOutput} for command's `response` shape.
 * @see {@link CodeBuildClientResolvedConfig | config} for CodeBuildClient's `config` shape.
 *
 * @throws {@link AccountLimitExceededException} (client fault)
 *  <p>An Amazon Web Services service limit was exceeded for the calling Amazon Web Services account.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input value that was provided is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified Amazon Web Services resource cannot be found.</p>
 *
 * @throws {@link CodeBuildServiceException}
 * <p>Base exception class for all service exceptions from CodeBuild service.</p>
 *
 *
 * @public
 */
export class StartBuildCommand extends $Command
  .classBuilder<
    StartBuildCommandInput,
    StartBuildCommandOutput,
    CodeBuildClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeBuildClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CodeBuild_20161006", "StartBuild", {})
  .n("CodeBuildClient", "StartBuildCommand")
  .sc(StartBuild$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartBuildInput;
      output: StartBuildOutput;
    };
    sdk: {
      input: StartBuildCommandInput;
      output: StartBuildCommandOutput;
    };
  };
}
