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
} from "@smithy/types";

import { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient";
import { BatchGetProjectsInput, BatchGetProjectsOutput } from "../models/models_0";
import { de_BatchGetProjectsCommand, se_BatchGetProjectsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link BatchGetProjectsCommand}.
 */
export interface BatchGetProjectsCommandInput extends BatchGetProjectsInput {}
/**
 * @public
 *
 * The output of {@link BatchGetProjectsCommand}.
 */
export interface BatchGetProjectsCommandOutput extends BatchGetProjectsOutput, __MetadataBearer {}

/**
 * @public
 * <p>Gets information about one or more build projects.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeBuildClient, BatchGetProjectsCommand } from "@aws-sdk/client-codebuild"; // ES Modules import
 * // const { CodeBuildClient, BatchGetProjectsCommand } = require("@aws-sdk/client-codebuild"); // CommonJS import
 * const client = new CodeBuildClient(config);
 * const input = { // BatchGetProjectsInput
 *   names: [ // ProjectNames // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new BatchGetProjectsCommand(input);
 * const response = await client.send(command);
 * // { // BatchGetProjectsOutput
 * //   projects: [ // Projects
 * //     { // Project
 * //       name: "STRING_VALUE",
 * //       arn: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       source: { // ProjectSource
 * //         type: "STRING_VALUE", // required
 * //         location: "STRING_VALUE",
 * //         gitCloneDepth: Number("int"),
 * //         gitSubmodulesConfig: { // GitSubmodulesConfig
 * //           fetchSubmodules: true || false, // required
 * //         },
 * //         buildspec: "STRING_VALUE",
 * //         auth: { // SourceAuth
 * //           type: "STRING_VALUE", // required
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
 * //       secondarySources: [ // ProjectSources
 * //         {
 * //           type: "STRING_VALUE", // required
 * //           location: "STRING_VALUE",
 * //           gitCloneDepth: Number("int"),
 * //           gitSubmodulesConfig: {
 * //             fetchSubmodules: true || false, // required
 * //           },
 * //           buildspec: "STRING_VALUE",
 * //           auth: {
 * //             type: "STRING_VALUE", // required
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
 * //       sourceVersion: "STRING_VALUE",
 * //       secondarySourceVersions: [ // ProjectSecondarySourceVersions
 * //         { // ProjectSourceVersion
 * //           sourceIdentifier: "STRING_VALUE", // required
 * //           sourceVersion: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       artifacts: { // ProjectArtifacts
 * //         type: "STRING_VALUE", // required
 * //         location: "STRING_VALUE",
 * //         path: "STRING_VALUE",
 * //         namespaceType: "STRING_VALUE",
 * //         name: "STRING_VALUE",
 * //         packaging: "STRING_VALUE",
 * //         overrideArtifactName: true || false,
 * //         encryptionDisabled: true || false,
 * //         artifactIdentifier: "STRING_VALUE",
 * //         bucketOwnerAccess: "STRING_VALUE",
 * //       },
 * //       secondaryArtifacts: [ // ProjectArtifactsList
 * //         {
 * //           type: "STRING_VALUE", // required
 * //           location: "STRING_VALUE",
 * //           path: "STRING_VALUE",
 * //           namespaceType: "STRING_VALUE",
 * //           name: "STRING_VALUE",
 * //           packaging: "STRING_VALUE",
 * //           overrideArtifactName: true || false,
 * //           encryptionDisabled: true || false,
 * //           artifactIdentifier: "STRING_VALUE",
 * //           bucketOwnerAccess: "STRING_VALUE",
 * //         },
 * //       ],
 * //       cache: { // ProjectCache
 * //         type: "STRING_VALUE", // required
 * //         location: "STRING_VALUE",
 * //         modes: [ // ProjectCacheModes
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       environment: { // ProjectEnvironment
 * //         type: "STRING_VALUE", // required
 * //         image: "STRING_VALUE", // required
 * //         computeType: "STRING_VALUE", // required
 * //         environmentVariables: [ // EnvironmentVariables
 * //           { // EnvironmentVariable
 * //             name: "STRING_VALUE", // required
 * //             value: "STRING_VALUE", // required
 * //             type: "STRING_VALUE",
 * //           },
 * //         ],
 * //         privilegedMode: true || false,
 * //         certificate: "STRING_VALUE",
 * //         registryCredential: { // RegistryCredential
 * //           credential: "STRING_VALUE", // required
 * //           credentialProvider: "STRING_VALUE", // required
 * //         },
 * //         imagePullCredentialsType: "STRING_VALUE",
 * //       },
 * //       serviceRole: "STRING_VALUE",
 * //       timeoutInMinutes: Number("int"),
 * //       queuedTimeoutInMinutes: Number("int"),
 * //       encryptionKey: "STRING_VALUE",
 * //       tags: [ // TagList
 * //         { // Tag
 * //           key: "STRING_VALUE",
 * //           value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       created: new Date("TIMESTAMP"),
 * //       lastModified: new Date("TIMESTAMP"),
 * //       webhook: { // Webhook
 * //         url: "STRING_VALUE",
 * //         payloadUrl: "STRING_VALUE",
 * //         secret: "STRING_VALUE",
 * //         branchFilter: "STRING_VALUE",
 * //         filterGroups: [ // FilterGroups
 * //           [ // FilterGroup
 * //             { // WebhookFilter
 * //               type: "STRING_VALUE", // required
 * //               pattern: "STRING_VALUE", // required
 * //               excludeMatchedPattern: true || false,
 * //             },
 * //           ],
 * //         ],
 * //         buildType: "STRING_VALUE",
 * //         lastModifiedSecret: new Date("TIMESTAMP"),
 * //       },
 * //       vpcConfig: { // VpcConfig
 * //         vpcId: "STRING_VALUE",
 * //         subnets: [ // Subnets
 * //           "STRING_VALUE",
 * //         ],
 * //         securityGroupIds: [ // SecurityGroupIds
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       badge: { // ProjectBadge
 * //         badgeEnabled: true || false,
 * //         badgeRequestUrl: "STRING_VALUE",
 * //       },
 * //       logsConfig: { // LogsConfig
 * //         cloudWatchLogs: { // CloudWatchLogsConfig
 * //           status: "STRING_VALUE", // required
 * //           groupName: "STRING_VALUE",
 * //           streamName: "STRING_VALUE",
 * //         },
 * //         s3Logs: { // S3LogsConfig
 * //           status: "STRING_VALUE", // required
 * //           location: "STRING_VALUE",
 * //           encryptionDisabled: true || false,
 * //           bucketOwnerAccess: "STRING_VALUE",
 * //         },
 * //       },
 * //       fileSystemLocations: [ // ProjectFileSystemLocations
 * //         { // ProjectFileSystemLocation
 * //           type: "STRING_VALUE",
 * //           location: "STRING_VALUE",
 * //           mountPoint: "STRING_VALUE",
 * //           identifier: "STRING_VALUE",
 * //           mountOptions: "STRING_VALUE",
 * //         },
 * //       ],
 * //       buildBatchConfig: { // ProjectBuildBatchConfig
 * //         serviceRole: "STRING_VALUE",
 * //         combineArtifacts: true || false,
 * //         restrictions: { // BatchRestrictions
 * //           maximumBuildsAllowed: Number("int"),
 * //           computeTypesAllowed: [ // ComputeTypesAllowed
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //         timeoutInMins: Number("int"),
 * //         batchReportMode: "STRING_VALUE",
 * //       },
 * //       concurrentBuildLimit: Number("int"),
 * //       projectVisibility: "STRING_VALUE",
 * //       publicProjectAlias: "STRING_VALUE",
 * //       resourceAccessRole: "STRING_VALUE",
 * //     },
 * //   ],
 * //   projectsNotFound: [ // ProjectNames
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchGetProjectsCommandInput - {@link BatchGetProjectsCommandInput}
 * @returns {@link BatchGetProjectsCommandOutput}
 * @see {@link BatchGetProjectsCommandInput} for command's `input` shape.
 * @see {@link BatchGetProjectsCommandOutput} for command's `response` shape.
 * @see {@link CodeBuildClientResolvedConfig | config} for CodeBuildClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input value that was provided is not valid.</p>
 *
 * @throws {@link CodeBuildServiceException}
 * <p>Base exception class for all service exceptions from CodeBuild service.</p>
 *
 */
export class BatchGetProjectsCommand extends $Command<
  BatchGetProjectsCommandInput,
  BatchGetProjectsCommandOutput,
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
  constructor(readonly input: BatchGetProjectsCommandInput) {
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
  ): Handler<BatchGetProjectsCommandInput, BatchGetProjectsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchGetProjectsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeBuildClient";
    const commandName = "BatchGetProjectsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
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
  private serialize(input: BatchGetProjectsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_BatchGetProjectsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchGetProjectsCommandOutput> {
    return de_BatchGetProjectsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
