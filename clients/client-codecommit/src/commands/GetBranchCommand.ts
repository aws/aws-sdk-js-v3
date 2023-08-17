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

import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { GetBranchInput, GetBranchOutput } from "../models/models_0";
import { de_GetBranchCommand, se_GetBranchCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetBranchCommand}.
 */
export interface GetBranchCommandInput extends GetBranchInput {}
/**
 * @public
 *
 * The output of {@link GetBranchCommand}.
 */
export interface GetBranchCommandOutput extends GetBranchOutput, __MetadataBearer {}

/**
 * @public
 * <p>Returns information about a repository branch, including its name and the last commit ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, GetBranchCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, GetBranchCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const input = { // GetBranchInput
 *   repositoryName: "STRING_VALUE",
 *   branchName: "STRING_VALUE",
 * };
 * const command = new GetBranchCommand(input);
 * const response = await client.send(command);
 * // { // GetBranchOutput
 * //   branch: { // BranchInfo
 * //     branchName: "STRING_VALUE",
 * //     commitId: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetBranchCommandInput - {@link GetBranchCommandInput}
 * @returns {@link GetBranchCommandOutput}
 * @see {@link GetBranchCommandInput} for command's `input` shape.
 * @see {@link GetBranchCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for CodeCommitClient's `config` shape.
 *
 * @throws {@link BranchDoesNotExistException} (client fault)
 *  <p>The specified branch does not exist.</p>
 *
 * @throws {@link BranchNameRequiredException} (client fault)
 *  <p>A branch name is required, but was not specified.</p>
 *
 * @throws {@link EncryptionIntegrityChecksFailedException} (server fault)
 *  <p>An encryption integrity check failed.</p>
 *
 * @throws {@link EncryptionKeyAccessDeniedException} (client fault)
 *  <p>An encryption key could not be accessed.</p>
 *
 * @throws {@link EncryptionKeyDisabledException} (client fault)
 *  <p>The encryption key is disabled.</p>
 *
 * @throws {@link EncryptionKeyNotFoundException} (client fault)
 *  <p>No encryption key was found.</p>
 *
 * @throws {@link EncryptionKeyUnavailableException} (client fault)
 *  <p>The encryption key is not available.</p>
 *
 * @throws {@link InvalidBranchNameException} (client fault)
 *  <p>The specified reference name is not valid.</p>
 *
 * @throws {@link InvalidRepositoryNameException} (client fault)
 *  <p>A specified repository name is not valid.</p>
 *
 *         <note>
 *             <p>This exception occurs only when a specified repository name is not valid. Other
 *                 exceptions occur when a required repository parameter is missing, or when a
 *                 specified repository does not exist.</p>
 *          </note>
 *
 * @throws {@link RepositoryDoesNotExistException} (client fault)
 *  <p>The specified repository does not exist.</p>
 *
 * @throws {@link RepositoryNameRequiredException} (client fault)
 *  <p>A repository name is required, but was not specified.</p>
 *
 * @throws {@link CodeCommitServiceException}
 * <p>Base exception class for all service exceptions from CodeCommit service.</p>
 *
 */
export class GetBranchCommand extends $Command<
  GetBranchCommandInput,
  GetBranchCommandOutput,
  CodeCommitClientResolvedConfig
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
  constructor(readonly input: GetBranchCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeCommitClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetBranchCommandInput, GetBranchCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetBranchCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeCommitClient";
    const commandName = "GetBranchCommand";
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
  private serialize(input: GetBranchCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetBranchCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetBranchCommandOutput> {
    return de_GetBranchCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
