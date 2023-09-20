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

import { CodeStarClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeStarClient";
import { CreateProjectRequest, CreateProjectRequestFilterSensitiveLog, CreateProjectResult } from "../models/models_0";
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
export interface CreateProjectCommandInput extends CreateProjectRequest {}
/**
 * @public
 *
 * The output of {@link CreateProjectCommand}.
 */
export interface CreateProjectCommandOutput extends CreateProjectResult, __MetadataBearer {}

/**
 * @public
 * <p>Creates a project, including project resources. This action creates a project based on
 *       a submitted project request. A set of source code files and a toolchain template file
 *       can be included with the project request. If these are not provided, an empty project is created.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeStarClient, CreateProjectCommand } from "@aws-sdk/client-codestar"; // ES Modules import
 * // const { CodeStarClient, CreateProjectCommand } = require("@aws-sdk/client-codestar"); // CommonJS import
 * const client = new CodeStarClient(config);
 * const input = { // CreateProjectRequest
 *   name: "STRING_VALUE", // required
 *   id: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   clientRequestToken: "STRING_VALUE",
 *   sourceCode: [ // SourceCode
 *     { // Code
 *       source: { // CodeSource
 *         s3: { // S3Location
 *           bucketName: "STRING_VALUE",
 *           bucketKey: "STRING_VALUE",
 *         },
 *       },
 *       destination: { // CodeDestination
 *         codeCommit: { // CodeCommitCodeDestination
 *           name: "STRING_VALUE", // required
 *         },
 *         gitHub: { // GitHubCodeDestination
 *           name: "STRING_VALUE", // required
 *           description: "STRING_VALUE",
 *           type: "STRING_VALUE", // required
 *           owner: "STRING_VALUE", // required
 *           privateRepository: true || false, // required
 *           issuesEnabled: true || false, // required
 *           token: "STRING_VALUE", // required
 *         },
 *       },
 *     },
 *   ],
 *   toolchain: { // Toolchain
 *     source: { // ToolchainSource
 *       s3: {
 *         bucketName: "STRING_VALUE",
 *         bucketKey: "STRING_VALUE",
 *       },
 *     },
 *     roleArn: "STRING_VALUE",
 *     stackParameters: { // TemplateParameterMap
 *       "<keys>": "STRING_VALUE",
 *     },
 *   },
 *   tags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateProjectCommand(input);
 * const response = await client.send(command);
 * // { // CreateProjectResult
 * //   id: "STRING_VALUE", // required
 * //   arn: "STRING_VALUE", // required
 * //   clientRequestToken: "STRING_VALUE",
 * //   projectTemplateId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateProjectCommandInput - {@link CreateProjectCommandInput}
 * @returns {@link CreateProjectCommandOutput}
 * @see {@link CreateProjectCommandInput} for command's `input` shape.
 * @see {@link CreateProjectCommandOutput} for command's `response` shape.
 * @see {@link CodeStarClientResolvedConfig | config} for CodeStarClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (server fault)
 *  <p>Another modification is being made. That modification must complete before you can make
 *       your change.</p>
 *
 * @throws {@link InvalidServiceRoleException} (client fault)
 *  <p>The service role is not valid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A resource limit has been exceeded.</p>
 *
 * @throws {@link ProjectAlreadyExistsException} (client fault)
 *  <p>An AWS CodeStar project with the same ID already exists in this region for the AWS account.
 *       AWS CodeStar project IDs must be unique within a region for the AWS account.</p>
 *
 * @throws {@link ProjectConfigurationException} (client fault)
 *  <p>Project configuration information is required but not specified.</p>
 *
 * @throws {@link ProjectCreationFailedException} (client fault)
 *  <p>The project creation request was valid, but a nonspecific exception or error occurred
 *       during project creation. The project could not be created in AWS CodeStar.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The specified input is either not valid, or it could not be validated.</p>
 *
 * @throws {@link CodeStarServiceException}
 * <p>Base exception class for all service exceptions from CodeStar service.</p>
 *
 */
export class CreateProjectCommand extends $Command<
  CreateProjectCommandInput,
  CreateProjectCommandOutput,
  CodeStarClientResolvedConfig
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
    configuration: CodeStarClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateProjectCommandInput, CreateProjectCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateProjectCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeStarClient";
    const commandName = "CreateProjectCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateProjectRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "CodeStar_20170419",
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
