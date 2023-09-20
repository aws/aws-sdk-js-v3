// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient";
import { StartBuildBatchInput, StartBuildBatchOutput } from "../models/models_0";
import { de_StartBuildBatchCommand, se_StartBuildBatchCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link StartBuildBatchCommand}.
 */
export interface StartBuildBatchCommandInput extends StartBuildBatchInput {}
/**
 * @public
 *
 * The output of {@link StartBuildBatchCommand}.
 */
export interface StartBuildBatchCommandOutput extends StartBuildBatchOutput, __MetadataBearer {}

/**
 * @public
 * <p>Starts a batch build for a project.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeBuildClient, StartBuildBatchCommand } from "@aws-sdk/client-codebuild"; // ES Modules import
 * // const { CodeBuildClient, StartBuildBatchCommand } = require("@aws-sdk/client-codebuild"); // CommonJS import
 * const client = new CodeBuildClient(config);
 * const input = { // StartBuildBatchInput
 *   projectName: "STRING_VALUE", // required
 *   secondarySourcesOverride: [ // ProjectSources
 *     { // ProjectSource
 *       type: "CODECOMMIT" || "CODEPIPELINE" || "GITHUB" || "S3" || "BITBUCKET" || "GITHUB_ENTERPRISE" || "NO_SOURCE", // required
 *       location: "STRING_VALUE",
 *       gitCloneDepth: Number("int"),
 *       gitSubmodulesConfig: { // GitSubmodulesConfig
 *         fetchSubmodules: true || false, // required
 *       },
 *       buildspec: "STRING_VALUE",
 *       auth: { // SourceAuth
 *         type: "OAUTH", // required
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
 *   sourceTypeOverride: "CODECOMMIT" || "CODEPIPELINE" || "GITHUB" || "S3" || "BITBUCKET" || "GITHUB_ENTERPRISE" || "NO_SOURCE",
 *   sourceLocationOverride: "STRING_VALUE",
 *   sourceAuthOverride: {
 *     type: "OAUTH", // required
 *     resource: "STRING_VALUE",
 *   },
 *   gitCloneDepthOverride: Number("int"),
 *   gitSubmodulesConfigOverride: {
 *     fetchSubmodules: true || false, // required
 *   },
 *   buildspecOverride: "STRING_VALUE",
 *   insecureSslOverride: true || false,
 *   reportBuildBatchStatusOverride: true || false,
 *   environmentTypeOverride: "WINDOWS_CONTAINER" || "LINUX_CONTAINER" || "LINUX_GPU_CONTAINER" || "ARM_CONTAINER" || "WINDOWS_SERVER_2019_CONTAINER",
 *   imageOverride: "STRING_VALUE",
 *   computeTypeOverride: "BUILD_GENERAL1_SMALL" || "BUILD_GENERAL1_MEDIUM" || "BUILD_GENERAL1_LARGE" || "BUILD_GENERAL1_2XLARGE",
 *   certificateOverride: "STRING_VALUE",
 *   cacheOverride: { // ProjectCache
 *     type: "NO_CACHE" || "S3" || "LOCAL", // required
 *     location: "STRING_VALUE",
 *     modes: [ // ProjectCacheModes
 *       "LOCAL_DOCKER_LAYER_CACHE" || "LOCAL_SOURCE_CACHE" || "LOCAL_CUSTOM_CACHE",
 *     ],
 *   },
 *   serviceRoleOverride: "STRING_VALUE",
 *   privilegedModeOverride: true || false,
 *   buildTimeoutInMinutesOverride: Number("int"),
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
 *   buildBatchConfigOverride: { // ProjectBuildBatchConfig
 *     serviceRole: "STRING_VALUE",
 *     combineArtifacts: true || false,
 *     restrictions: { // BatchRestrictions
 *       maximumBuildsAllowed: Number("int"),
 *       computeTypesAllowed: [ // ComputeTypesAllowed
 *         "STRING_VALUE",
 *       ],
 *     },
 *     timeoutInMins: Number("int"),
 *     batchReportMode: "REPORT_INDIVIDUAL_BUILDS" || "REPORT_AGGREGATED_BATCH",
 *   },
 *   debugSessionEnabled: true || false,
 * };
 * const command = new StartBuildBatchCommand(input);
 * const response = await client.send(command);
 * // { // StartBuildBatchOutput
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
 * //       type: "CODECOMMIT" || "CODEPIPELINE" || "GITHUB" || "S3" || "BITBUCKET" || "GITHUB_ENTERPRISE" || "NO_SOURCE", // required
 * //       location: "STRING_VALUE",
 * //       gitCloneDepth: Number("int"),
 * //       gitSubmodulesConfig: { // GitSubmodulesConfig
 * //         fetchSubmodules: true || false, // required
 * //       },
 * //       buildspec: "STRING_VALUE",
 * //       auth: { // SourceAuth
 * //         type: "OAUTH", // required
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
 * //         type: "CODECOMMIT" || "CODEPIPELINE" || "GITHUB" || "S3" || "BITBUCKET" || "GITHUB_ENTERPRISE" || "NO_SOURCE", // required
 * //         location: "STRING_VALUE",
 * //         gitCloneDepth: Number("int"),
 * //         gitSubmodulesConfig: {
 * //           fetchSubmodules: true || false, // required
 * //         },
 * //         buildspec: "STRING_VALUE",
 * //         auth: {
 * //           type: "OAUTH", // required
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
 * //     },
 * //     environment: { // ProjectEnvironment
 * //       type: "WINDOWS_CONTAINER" || "LINUX_CONTAINER" || "LINUX_GPU_CONTAINER" || "ARM_CONTAINER" || "WINDOWS_SERVER_2019_CONTAINER", // required
 * //       image: "STRING_VALUE", // required
 * //       computeType: "BUILD_GENERAL1_SMALL" || "BUILD_GENERAL1_MEDIUM" || "BUILD_GENERAL1_LARGE" || "BUILD_GENERAL1_2XLARGE", // required
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
 * //       securityGroupIds: [ // SecurityGroupIds
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
 * //   },
 * // };
 *
 * ```
 *
 * @param StartBuildBatchCommandInput - {@link StartBuildBatchCommandInput}
 * @returns {@link StartBuildBatchCommandOutput}
 * @see {@link StartBuildBatchCommandInput} for command's `input` shape.
 * @see {@link StartBuildBatchCommandOutput} for command's `response` shape.
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
 */
export class StartBuildBatchCommand extends $Command<
  StartBuildBatchCommandInput,
  StartBuildBatchCommandOutput,
  CodeBuildClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: StartBuildBatchCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeBuildClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartBuildBatchCommandInput, StartBuildBatchCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartBuildBatchCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeBuildClient";
    const commandName = "StartBuildBatchCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "CodeBuild_20161006",
        operation: "StartBuildBatch",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: StartBuildBatchCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_StartBuildBatchCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartBuildBatchCommandOutput> {
    return de_StartBuildBatchCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
