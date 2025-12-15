// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateProjectInput, UpdateProjectOutput } from "../models/models_0";
import { UpdateProject$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateProjectCommand}.
 */
export interface UpdateProjectCommandInput extends UpdateProjectInput {}
/**
 * @public
 *
 * The output of {@link UpdateProjectCommand}.
 */
export interface UpdateProjectCommandOutput extends UpdateProjectOutput, __MetadataBearer {}

/**
 * <p>Changes the settings of a build project.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeBuildClient, UpdateProjectCommand } from "@aws-sdk/client-codebuild"; // ES Modules import
 * // const { CodeBuildClient, UpdateProjectCommand } = require("@aws-sdk/client-codebuild"); // CommonJS import
 * // import type { CodeBuildClientConfig } from "@aws-sdk/client-codebuild";
 * const config = {}; // type is CodeBuildClientConfig
 * const client = new CodeBuildClient(config);
 * const input = { // UpdateProjectInput
 *   name: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   source: { // ProjectSource
 *     type: "CODECOMMIT" || "CODEPIPELINE" || "GITHUB" || "GITLAB" || "GITLAB_SELF_MANAGED" || "S3" || "BITBUCKET" || "GITHUB_ENTERPRISE" || "NO_SOURCE", // required
 *     location: "STRING_VALUE",
 *     gitCloneDepth: Number("int"),
 *     gitSubmodulesConfig: { // GitSubmodulesConfig
 *       fetchSubmodules: true || false, // required
 *     },
 *     buildspec: "STRING_VALUE",
 *     auth: { // SourceAuth
 *       type: "OAUTH" || "CODECONNECTIONS" || "SECRETS_MANAGER", // required
 *       resource: "STRING_VALUE",
 *     },
 *     reportBuildStatus: true || false,
 *     buildStatusConfig: { // BuildStatusConfig
 *       context: "STRING_VALUE",
 *       targetUrl: "STRING_VALUE",
 *     },
 *     insecureSsl: true || false,
 *     sourceIdentifier: "STRING_VALUE",
 *   },
 *   secondarySources: [ // ProjectSources
 *     {
 *       type: "CODECOMMIT" || "CODEPIPELINE" || "GITHUB" || "GITLAB" || "GITLAB_SELF_MANAGED" || "S3" || "BITBUCKET" || "GITHUB_ENTERPRISE" || "NO_SOURCE", // required
 *       location: "STRING_VALUE",
 *       gitCloneDepth: Number("int"),
 *       gitSubmodulesConfig: {
 *         fetchSubmodules: true || false, // required
 *       },
 *       buildspec: "STRING_VALUE",
 *       auth: {
 *         type: "OAUTH" || "CODECONNECTIONS" || "SECRETS_MANAGER", // required
 *         resource: "STRING_VALUE",
 *       },
 *       reportBuildStatus: true || false,
 *       buildStatusConfig: {
 *         context: "STRING_VALUE",
 *         targetUrl: "STRING_VALUE",
 *       },
 *       insecureSsl: true || false,
 *       sourceIdentifier: "STRING_VALUE",
 *     },
 *   ],
 *   sourceVersion: "STRING_VALUE",
 *   secondarySourceVersions: [ // ProjectSecondarySourceVersions
 *     { // ProjectSourceVersion
 *       sourceIdentifier: "STRING_VALUE", // required
 *       sourceVersion: "STRING_VALUE", // required
 *     },
 *   ],
 *   artifacts: { // ProjectArtifacts
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
 *   secondaryArtifacts: [ // ProjectArtifactsList
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
 *   cache: { // ProjectCache
 *     type: "NO_CACHE" || "S3" || "LOCAL", // required
 *     location: "STRING_VALUE",
 *     modes: [ // ProjectCacheModes
 *       "LOCAL_DOCKER_LAYER_CACHE" || "LOCAL_SOURCE_CACHE" || "LOCAL_CUSTOM_CACHE",
 *     ],
 *     cacheNamespace: "STRING_VALUE",
 *   },
 *   environment: { // ProjectEnvironment
 *     type: "WINDOWS_CONTAINER" || "LINUX_CONTAINER" || "LINUX_GPU_CONTAINER" || "ARM_CONTAINER" || "WINDOWS_SERVER_2019_CONTAINER" || "WINDOWS_SERVER_2022_CONTAINER" || "LINUX_LAMBDA_CONTAINER" || "ARM_LAMBDA_CONTAINER" || "LINUX_EC2" || "ARM_EC2" || "WINDOWS_EC2" || "MAC_ARM", // required
 *     image: "STRING_VALUE", // required
 *     computeType: "BUILD_GENERAL1_SMALL" || "BUILD_GENERAL1_MEDIUM" || "BUILD_GENERAL1_LARGE" || "BUILD_GENERAL1_XLARGE" || "BUILD_GENERAL1_2XLARGE" || "BUILD_LAMBDA_1GB" || "BUILD_LAMBDA_2GB" || "BUILD_LAMBDA_4GB" || "BUILD_LAMBDA_8GB" || "BUILD_LAMBDA_10GB" || "ATTRIBUTE_BASED_COMPUTE" || "CUSTOM_INSTANCE_TYPE", // required
 *     computeConfiguration: { // ComputeConfiguration
 *       vCpu: Number("long"),
 *       memory: Number("long"),
 *       disk: Number("long"),
 *       machineType: "GENERAL" || "NVME",
 *       instanceType: "STRING_VALUE",
 *     },
 *     fleet: { // ProjectFleet
 *       fleetArn: "STRING_VALUE",
 *     },
 *     environmentVariables: [ // EnvironmentVariables
 *       { // EnvironmentVariable
 *         name: "STRING_VALUE", // required
 *         value: "STRING_VALUE", // required
 *         type: "PLAINTEXT" || "PARAMETER_STORE" || "SECRETS_MANAGER",
 *       },
 *     ],
 *     privilegedMode: true || false,
 *     certificate: "STRING_VALUE",
 *     registryCredential: { // RegistryCredential
 *       credential: "STRING_VALUE", // required
 *       credentialProvider: "SECRETS_MANAGER", // required
 *     },
 *     imagePullCredentialsType: "CODEBUILD" || "SERVICE_ROLE",
 *     dockerServer: { // DockerServer
 *       computeType: "BUILD_GENERAL1_SMALL" || "BUILD_GENERAL1_MEDIUM" || "BUILD_GENERAL1_LARGE" || "BUILD_GENERAL1_XLARGE" || "BUILD_GENERAL1_2XLARGE" || "BUILD_LAMBDA_1GB" || "BUILD_LAMBDA_2GB" || "BUILD_LAMBDA_4GB" || "BUILD_LAMBDA_8GB" || "BUILD_LAMBDA_10GB" || "ATTRIBUTE_BASED_COMPUTE" || "CUSTOM_INSTANCE_TYPE", // required
 *       securityGroupIds: [ // SecurityGroupIds
 *         "STRING_VALUE",
 *       ],
 *       status: { // DockerServerStatus
 *         status: "STRING_VALUE",
 *         message: "STRING_VALUE",
 *       },
 *     },
 *   },
 *   serviceRole: "STRING_VALUE",
 *   timeoutInMinutes: Number("int"),
 *   queuedTimeoutInMinutes: Number("int"),
 *   encryptionKey: "STRING_VALUE",
 *   tags: [ // TagList
 *     { // Tag
 *       key: "STRING_VALUE",
 *       value: "STRING_VALUE",
 *     },
 *   ],
 *   vpcConfig: { // VpcConfig
 *     vpcId: "STRING_VALUE",
 *     subnets: [ // Subnets
 *       "STRING_VALUE",
 *     ],
 *     securityGroupIds: [
 *       "STRING_VALUE",
 *     ],
 *   },
 *   badgeEnabled: true || false,
 *   logsConfig: { // LogsConfig
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
 *   fileSystemLocations: [ // ProjectFileSystemLocations
 *     { // ProjectFileSystemLocation
 *       type: "EFS",
 *       location: "STRING_VALUE",
 *       mountPoint: "STRING_VALUE",
 *       identifier: "STRING_VALUE",
 *       mountOptions: "STRING_VALUE",
 *     },
 *   ],
 *   buildBatchConfig: { // ProjectBuildBatchConfig
 *     serviceRole: "STRING_VALUE",
 *     combineArtifacts: true || false,
 *     restrictions: { // BatchRestrictions
 *       maximumBuildsAllowed: Number("int"),
 *       computeTypesAllowed: [ // ComputeTypesAllowed
 *         "STRING_VALUE",
 *       ],
 *       fleetsAllowed: [ // FleetsAllowed
 *         "STRING_VALUE",
 *       ],
 *     },
 *     timeoutInMins: Number("int"),
 *     batchReportMode: "REPORT_INDIVIDUAL_BUILDS" || "REPORT_AGGREGATED_BATCH",
 *   },
 *   concurrentBuildLimit: Number("int"),
 *   autoRetryLimit: Number("int"),
 * };
 * const command = new UpdateProjectCommand(input);
 * const response = await client.send(command);
 * // { // UpdateProjectOutput
 * //   project: { // Project
 * //     name: "STRING_VALUE",
 * //     arn: "STRING_VALUE",
 * //     description: "STRING_VALUE",
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
 * //     sourceVersion: "STRING_VALUE",
 * //     secondarySourceVersions: [ // ProjectSecondarySourceVersions
 * //       { // ProjectSourceVersion
 * //         sourceIdentifier: "STRING_VALUE", // required
 * //         sourceVersion: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     artifacts: { // ProjectArtifacts
 * //       type: "CODEPIPELINE" || "S3" || "NO_ARTIFACTS", // required
 * //       location: "STRING_VALUE",
 * //       path: "STRING_VALUE",
 * //       namespaceType: "NONE" || "BUILD_ID",
 * //       name: "STRING_VALUE",
 * //       packaging: "NONE" || "ZIP",
 * //       overrideArtifactName: true || false,
 * //       encryptionDisabled: true || false,
 * //       artifactIdentifier: "STRING_VALUE",
 * //       bucketOwnerAccess: "NONE" || "READ_ONLY" || "FULL",
 * //     },
 * //     secondaryArtifacts: [ // ProjectArtifactsList
 * //       {
 * //         type: "CODEPIPELINE" || "S3" || "NO_ARTIFACTS", // required
 * //         location: "STRING_VALUE",
 * //         path: "STRING_VALUE",
 * //         namespaceType: "NONE" || "BUILD_ID",
 * //         name: "STRING_VALUE",
 * //         packaging: "NONE" || "ZIP",
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
 * //     timeoutInMinutes: Number("int"),
 * //     queuedTimeoutInMinutes: Number("int"),
 * //     encryptionKey: "STRING_VALUE",
 * //     tags: [ // TagList
 * //       { // Tag
 * //         key: "STRING_VALUE",
 * //         value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     created: new Date("TIMESTAMP"),
 * //     lastModified: new Date("TIMESTAMP"),
 * //     webhook: { // Webhook
 * //       url: "STRING_VALUE",
 * //       payloadUrl: "STRING_VALUE",
 * //       secret: "STRING_VALUE",
 * //       branchFilter: "STRING_VALUE",
 * //       filterGroups: [ // FilterGroups
 * //         [ // FilterGroup
 * //           { // WebhookFilter
 * //             type: "EVENT" || "BASE_REF" || "HEAD_REF" || "ACTOR_ACCOUNT_ID" || "FILE_PATH" || "COMMIT_MESSAGE" || "WORKFLOW_NAME" || "TAG_NAME" || "RELEASE_NAME" || "REPOSITORY_NAME" || "ORGANIZATION_NAME", // required
 * //             pattern: "STRING_VALUE", // required
 * //             excludeMatchedPattern: true || false,
 * //           },
 * //         ],
 * //       ],
 * //       buildType: "BUILD" || "BUILD_BATCH" || "RUNNER_BUILDKITE_BUILD",
 * //       manualCreation: true || false,
 * //       lastModifiedSecret: new Date("TIMESTAMP"),
 * //       scopeConfiguration: { // ScopeConfiguration
 * //         name: "STRING_VALUE", // required
 * //         domain: "STRING_VALUE",
 * //         scope: "GITHUB_ORGANIZATION" || "GITHUB_GLOBAL" || "GITLAB_GROUP", // required
 * //       },
 * //       status: "CREATING" || "CREATE_FAILED" || "ACTIVE" || "DELETING",
 * //       statusMessage: "STRING_VALUE",
 * //       pullRequestBuildPolicy: { // PullRequestBuildPolicy
 * //         requiresCommentApproval: "DISABLED" || "ALL_PULL_REQUESTS" || "FORK_PULL_REQUESTS", // required
 * //         approverRoles: [ // PullRequestBuildApproverRoles
 * //           "GITHUB_READ" || "GITHUB_TRIAGE" || "GITHUB_WRITE" || "GITHUB_MAINTAIN" || "GITHUB_ADMIN" || "GITLAB_GUEST" || "GITLAB_PLANNER" || "GITLAB_REPORTER" || "GITLAB_DEVELOPER" || "GITLAB_MAINTAINER" || "GITLAB_OWNER" || "BITBUCKET_READ" || "BITBUCKET_WRITE" || "BITBUCKET_ADMIN",
 * //         ],
 * //       },
 * //     },
 * //     vpcConfig: { // VpcConfig
 * //       vpcId: "STRING_VALUE",
 * //       subnets: [ // Subnets
 * //         "STRING_VALUE",
 * //       ],
 * //       securityGroupIds: [
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     badge: { // ProjectBadge
 * //       badgeEnabled: true || false,
 * //       badgeRequestUrl: "STRING_VALUE",
 * //     },
 * //     logsConfig: { // LogsConfig
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
 * //     concurrentBuildLimit: Number("int"),
 * //     projectVisibility: "PUBLIC_READ" || "PRIVATE",
 * //     publicProjectAlias: "STRING_VALUE",
 * //     resourceAccessRole: "STRING_VALUE",
 * //     autoRetryLimit: Number("int"),
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateProjectCommandInput - {@link UpdateProjectCommandInput}
 * @returns {@link UpdateProjectCommandOutput}
 * @see {@link UpdateProjectCommandInput} for command's `input` shape.
 * @see {@link UpdateProjectCommandOutput} for command's `response` shape.
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
export class UpdateProjectCommand extends $Command
  .classBuilder<
    UpdateProjectCommandInput,
    UpdateProjectCommandOutput,
    CodeBuildClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeBuildClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CodeBuild_20161006", "UpdateProject", {})
  .n("CodeBuildClient", "UpdateProjectCommand")
  .sc(UpdateProject$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateProjectInput;
      output: UpdateProjectOutput;
    };
    sdk: {
      input: UpdateProjectCommandInput;
      output: UpdateProjectCommandOutput;
    };
  };
}
