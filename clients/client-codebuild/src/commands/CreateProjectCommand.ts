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
import { CreateProjectInput, CreateProjectOutput } from "../models/models_0";
import { de_CreateProjectCommand, se_CreateProjectCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateProjectCommand}.
 */
export interface CreateProjectCommandInput extends CreateProjectInput {}
/**
 * @public
 *
 * The output of {@link CreateProjectCommand}.
 */
export interface CreateProjectCommandOutput extends CreateProjectOutput, __MetadataBearer {}

/**
 * @public
 * <p>Creates a build project.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeBuildClient, CreateProjectCommand } from "@aws-sdk/client-codebuild"; // ES Modules import
 * // const { CodeBuildClient, CreateProjectCommand } = require("@aws-sdk/client-codebuild"); // CommonJS import
 * const client = new CodeBuildClient(config);
 * const input = { // CreateProjectInput
 *   name: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   source: { // ProjectSource
 *     type: "CODECOMMIT" || "CODEPIPELINE" || "GITHUB" || "S3" || "BITBUCKET" || "GITHUB_ENTERPRISE" || "NO_SOURCE", // required
 *     location: "STRING_VALUE",
 *     gitCloneDepth: Number("int"),
 *     gitSubmodulesConfig: { // GitSubmodulesConfig
 *       fetchSubmodules: true || false, // required
 *     },
 *     buildspec: "STRING_VALUE",
 *     auth: { // SourceAuth
 *       type: "OAUTH", // required
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
 *       type: "CODECOMMIT" || "CODEPIPELINE" || "GITHUB" || "S3" || "BITBUCKET" || "GITHUB_ENTERPRISE" || "NO_SOURCE", // required
 *       location: "STRING_VALUE",
 *       gitCloneDepth: Number("int"),
 *       gitSubmodulesConfig: {
 *         fetchSubmodules: true || false, // required
 *       },
 *       buildspec: "STRING_VALUE",
 *       auth: {
 *         type: "OAUTH", // required
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
 *   },
 *   environment: { // ProjectEnvironment
 *     type: "WINDOWS_CONTAINER" || "LINUX_CONTAINER" || "LINUX_GPU_CONTAINER" || "ARM_CONTAINER" || "WINDOWS_SERVER_2019_CONTAINER", // required
 *     image: "STRING_VALUE", // required
 *     computeType: "BUILD_GENERAL1_SMALL" || "BUILD_GENERAL1_MEDIUM" || "BUILD_GENERAL1_LARGE" || "BUILD_GENERAL1_2XLARGE", // required
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
 *   },
 *   serviceRole: "STRING_VALUE", // required
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
 *     securityGroupIds: [ // SecurityGroupIds
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
 *     },
 *     timeoutInMins: Number("int"),
 *     batchReportMode: "REPORT_INDIVIDUAL_BUILDS" || "REPORT_AGGREGATED_BATCH",
 *   },
 *   concurrentBuildLimit: Number("int"),
 * };
 * const command = new CreateProjectCommand(input);
 * const response = await client.send(command);
 * // { // CreateProjectOutput
 * //   project: { // Project
 * //     name: "STRING_VALUE",
 * //     arn: "STRING_VALUE",
 * //     description: "STRING_VALUE",
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
 * //             type: "EVENT" || "BASE_REF" || "HEAD_REF" || "ACTOR_ACCOUNT_ID" || "FILE_PATH" || "COMMIT_MESSAGE", // required
 * //             pattern: "STRING_VALUE", // required
 * //             excludeMatchedPattern: true || false,
 * //           },
 * //         ],
 * //       ],
 * //       buildType: "BUILD" || "BUILD_BATCH",
 * //       lastModifiedSecret: new Date("TIMESTAMP"),
 * //     },
 * //     vpcConfig: { // VpcConfig
 * //       vpcId: "STRING_VALUE",
 * //       subnets: [ // Subnets
 * //         "STRING_VALUE",
 * //       ],
 * //       securityGroupIds: [ // SecurityGroupIds
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
 * //       },
 * //       timeoutInMins: Number("int"),
 * //       batchReportMode: "REPORT_INDIVIDUAL_BUILDS" || "REPORT_AGGREGATED_BATCH",
 * //     },
 * //     concurrentBuildLimit: Number("int"),
 * //     projectVisibility: "PUBLIC_READ" || "PRIVATE",
 * //     publicProjectAlias: "STRING_VALUE",
 * //     resourceAccessRole: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateProjectCommandInput - {@link CreateProjectCommandInput}
 * @returns {@link CreateProjectCommandOutput}
 * @see {@link CreateProjectCommandInput} for command's `input` shape.
 * @see {@link CreateProjectCommandOutput} for command's `response` shape.
 * @see {@link CodeBuildClientResolvedConfig | config} for CodeBuildClient's `config` shape.
 *
 * @throws {@link AccountLimitExceededException} (client fault)
 *  <p>An Amazon Web Services service limit was exceeded for the calling Amazon Web Services account.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input value that was provided is not valid.</p>
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>The specified Amazon Web Services resource cannot be created, because an Amazon Web Services resource with the same
 *             settings already exists.</p>
 *
 * @throws {@link CodeBuildServiceException}
 * <p>Base exception class for all service exceptions from CodeBuild service.</p>
 *
 */
export class CreateProjectCommand extends $Command<
  CreateProjectCommandInput,
  CreateProjectCommandOutput,
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
  constructor(readonly input: CreateProjectCommandInput) {
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
  ): Handler<CreateProjectCommandInput, CreateProjectCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateProjectCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeBuildClient";
    const commandName = "CreateProjectCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "CodeBuild_20161006",
        operation: "CreateProject",
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
  private serialize(input: CreateProjectCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateProjectCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateProjectCommandOutput> {
    return de_CreateProjectCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
