// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient";
import { StartBuildBatchInput, StartBuildBatchOutput } from "../models/models_0";
import { de_StartBuildBatchCommand, se_StartBuildBatchCommand } from "../protocols/Aws_json1_1";

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
 *       type: "STRING_VALUE", // required
 *       location: "STRING_VALUE",
 *       gitCloneDepth: Number("int"),
 *       gitSubmodulesConfig: { // GitSubmodulesConfig
 *         fetchSubmodules: true || false, // required
 *       },
 *       buildspec: "STRING_VALUE",
 *       auth: { // SourceAuth
 *         type: "STRING_VALUE", // required
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
 *     type: "STRING_VALUE", // required
 *     location: "STRING_VALUE",
 *     path: "STRING_VALUE",
 *     namespaceType: "STRING_VALUE",
 *     name: "STRING_VALUE",
 *     packaging: "STRING_VALUE",
 *     overrideArtifactName: true || false,
 *     encryptionDisabled: true || false,
 *     artifactIdentifier: "STRING_VALUE",
 *     bucketOwnerAccess: "STRING_VALUE",
 *   },
 *   secondaryArtifactsOverride: [ // ProjectArtifactsList
 *     {
 *       type: "STRING_VALUE", // required
 *       location: "STRING_VALUE",
 *       path: "STRING_VALUE",
 *       namespaceType: "STRING_VALUE",
 *       name: "STRING_VALUE",
 *       packaging: "STRING_VALUE",
 *       overrideArtifactName: true || false,
 *       encryptionDisabled: true || false,
 *       artifactIdentifier: "STRING_VALUE",
 *       bucketOwnerAccess: "STRING_VALUE",
 *     },
 *   ],
 *   environmentVariablesOverride: [ // EnvironmentVariables
 *     { // EnvironmentVariable
 *       name: "STRING_VALUE", // required
 *       value: "STRING_VALUE", // required
 *       type: "STRING_VALUE",
 *     },
 *   ],
 *   sourceTypeOverride: "STRING_VALUE",
 *   sourceLocationOverride: "STRING_VALUE",
 *   sourceAuthOverride: {
 *     type: "STRING_VALUE", // required
 *     resource: "STRING_VALUE",
 *   },
 *   gitCloneDepthOverride: Number("int"),
 *   gitSubmodulesConfigOverride: {
 *     fetchSubmodules: true || false, // required
 *   },
 *   buildspecOverride: "STRING_VALUE",
 *   insecureSslOverride: true || false,
 *   reportBuildBatchStatusOverride: true || false,
 *   environmentTypeOverride: "STRING_VALUE",
 *   imageOverride: "STRING_VALUE",
 *   computeTypeOverride: "STRING_VALUE",
 *   certificateOverride: "STRING_VALUE",
 *   cacheOverride: { // ProjectCache
 *     type: "STRING_VALUE", // required
 *     location: "STRING_VALUE",
 *     modes: [ // ProjectCacheModes
 *       "STRING_VALUE",
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
 *       status: "STRING_VALUE", // required
 *       groupName: "STRING_VALUE",
 *       streamName: "STRING_VALUE",
 *     },
 *     s3Logs: { // S3LogsConfig
 *       status: "STRING_VALUE", // required
 *       location: "STRING_VALUE",
 *       encryptionDisabled: true || false,
 *       bucketOwnerAccess: "STRING_VALUE",
 *     },
 *   },
 *   registryCredentialOverride: { // RegistryCredential
 *     credential: "STRING_VALUE", // required
 *     credentialProvider: "STRING_VALUE", // required
 *   },
 *   imagePullCredentialsTypeOverride: "STRING_VALUE",
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
 *     batchReportMode: "STRING_VALUE",
 *   },
 *   debugSessionEnabled: true || false,
 * };
 * const command = new StartBuildBatchCommand(input);
 * const response = await client.send(command);
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
