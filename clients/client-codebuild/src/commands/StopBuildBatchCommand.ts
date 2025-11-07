// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { StopBuildBatchInput, StopBuildBatchOutput } from "../models/models_0";
import { StopBuildBatch } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StopBuildBatchCommand}.
 */
export interface StopBuildBatchCommandInput extends StopBuildBatchInput {}
/**
 * @public
 *
 * The output of {@link StopBuildBatchCommand}.
 */
export interface StopBuildBatchCommandOutput extends StopBuildBatchOutput, __MetadataBearer {}

/**
 * <p>Stops a running batch build.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeBuildClient, StopBuildBatchCommand } from "@aws-sdk/client-codebuild"; // ES Modules import
 * // const { CodeBuildClient, StopBuildBatchCommand } = require("@aws-sdk/client-codebuild"); // CommonJS import
 * // import type { CodeBuildClientConfig } from "@aws-sdk/client-codebuild";
 * const config = {}; // type is CodeBuildClientConfig
 * const client = new CodeBuildClient(config);
 * const input = { // StopBuildBatchInput
 *   id: "STRING_VALUE", // required
 * };
 * const command = new StopBuildBatchCommand(input);
 * const response = await client.send(command);
 * // { // StopBuildBatchOutput
 * //   buildBatch: { // BuildBatch
 * //     id: "STRING_VALUE",
 * //     arn: "STRING_VALUE",
 * //     startTime: new Date("TIMESTAMP"),
 * //     endTime: new Date("TIMESTAMP"),
 * //     currentPhase: "STRING_VALUE",
 * //     buildBatchStatus: "SUCCEEDED" || "FAILED" || "FAULT" || "TIMED_OUT" || "IN_PROGRESS" || "STOPPED",
 * //     sourceVersion: "STRING_VALUE",
 * //     resolvedSourceVersion: "STRING_VALUE",
 * //     projectName: "STRING_VALUE",
 * //     phases: [ // BuildBatchPhases
 * //       { // BuildBatchPhase
 * //         phaseType: "SUBMITTED" || "DOWNLOAD_BATCHSPEC" || "IN_PROGRESS" || "COMBINE_ARTIFACTS" || "SUCCEEDED" || "FAILED" || "STOPPED",
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
 * //     logConfig: { // LogsConfig
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
 * //     buildTimeoutInMinutes: Number("int"),
 * //     queuedTimeoutInMinutes: Number("int"),
 * //     complete: true || false,
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
 * //     encryptionKey: "STRING_VALUE",
 * //     buildBatchNumber: Number("long"),
 * //     fileSystemLocations: [ // ProjectFileSystemLocations
 * //       { // ProjectFileSystemLocation
 * //         type: "EFS",
 * //         location: "STRING_VALUE",
 * //         mountPoint: "STRING_VALUE",
 * //         identifier: "STRING_VALUE",
 * //         mountOptions: "STRING_VALUE",
 * //       },
 * //     ],
 * //     buildBatchConfig: { // ProjectBuildBatchConfig
 * //       serviceRole: "STRING_VALUE",
 * //       combineArtifacts: true || false,
 * //       restrictions: { // BatchRestrictions
 * //         maximumBuildsAllowed: Number("int"),
 * //         computeTypesAllowed: [ // ComputeTypesAllowed
 * //           "STRING_VALUE",
 * //         ],
 * //         fleetsAllowed: [ // FleetsAllowed
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       timeoutInMins: Number("int"),
 * //       batchReportMode: "REPORT_INDIVIDUAL_BUILDS" || "REPORT_AGGREGATED_BATCH",
 * //     },
 * //     buildGroups: [ // BuildGroups
 * //       { // BuildGroup
 * //         identifier: "STRING_VALUE",
 * //         dependsOn: [ // Identifiers
 * //           "STRING_VALUE",
 * //         ],
 * //         ignoreFailure: true || false,
 * //         currentBuildSummary: { // BuildSummary
 * //           arn: "STRING_VALUE",
 * //           requestedOn: new Date("TIMESTAMP"),
 * //           buildStatus: "SUCCEEDED" || "FAILED" || "FAULT" || "TIMED_OUT" || "IN_PROGRESS" || "STOPPED",
 * //           primaryArtifact: { // ResolvedArtifact
 * //             type: "CODEPIPELINE" || "S3" || "NO_ARTIFACTS",
 * //             location: "STRING_VALUE",
 * //             identifier: "STRING_VALUE",
 * //           },
 * //           secondaryArtifacts: [ // ResolvedSecondaryArtifacts
 * //             {
 * //               type: "CODEPIPELINE" || "S3" || "NO_ARTIFACTS",
 * //               location: "STRING_VALUE",
 * //               identifier: "STRING_VALUE",
 * //             },
 * //           ],
 * //         },
 * //         priorBuildSummaryList: [ // BuildSummaries
 * //           {
 * //             arn: "STRING_VALUE",
 * //             requestedOn: new Date("TIMESTAMP"),
 * //             buildStatus: "SUCCEEDED" || "FAILED" || "FAULT" || "TIMED_OUT" || "IN_PROGRESS" || "STOPPED",
 * //             primaryArtifact: {
 * //               type: "CODEPIPELINE" || "S3" || "NO_ARTIFACTS",
 * //               location: "STRING_VALUE",
 * //               identifier: "STRING_VALUE",
 * //             },
 * //             secondaryArtifacts: [
 * //               "<ResolvedArtifact>",
 * //             ],
 * //           },
 * //         ],
 * //       },
 * //     ],
 * //     debugSessionEnabled: true || false,
 * //     reportArns: [ // BuildReportArns
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param StopBuildBatchCommandInput - {@link StopBuildBatchCommandInput}
 * @returns {@link StopBuildBatchCommandOutput}
 * @see {@link StopBuildBatchCommandInput} for command's `input` shape.
 * @see {@link StopBuildBatchCommandOutput} for command's `response` shape.
 * @see {@link CodeBuildClientResolvedConfig | config} for CodeBuildClient's `config` shape.
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
export class StopBuildBatchCommand extends $Command
  .classBuilder<
    StopBuildBatchCommandInput,
    StopBuildBatchCommandOutput,
    CodeBuildClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeBuildClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CodeBuild_20161006", "StopBuildBatch", {})
  .n("CodeBuildClient", "StopBuildBatchCommand")
  .sc(StopBuildBatch)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopBuildBatchInput;
      output: StopBuildBatchOutput;
    };
    sdk: {
      input: StopBuildBatchCommandInput;
      output: StopBuildBatchCommandOutput;
    };
  };
}
