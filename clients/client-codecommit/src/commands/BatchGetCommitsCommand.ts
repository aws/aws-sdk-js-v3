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

import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { BatchGetCommitsInput, BatchGetCommitsOutput } from "../models/models_0";
import { de_BatchGetCommitsCommand, se_BatchGetCommitsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link BatchGetCommitsCommand}.
 */
export interface BatchGetCommitsCommandInput extends BatchGetCommitsInput {}
/**
 * @public
 *
 * The output of {@link BatchGetCommitsCommand}.
 */
export interface BatchGetCommitsCommandOutput extends BatchGetCommitsOutput, __MetadataBearer {}

/**
 * @public
 * <p>Returns information about the contents of one or more commits in a repository.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, BatchGetCommitsCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, BatchGetCommitsCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const input = { // BatchGetCommitsInput
 *   commitIds: [ // CommitIdsInputList // required
 *     "STRING_VALUE",
 *   ],
 *   repositoryName: "STRING_VALUE", // required
 * };
 * const command = new BatchGetCommitsCommand(input);
 * const response = await client.send(command);
 * // { // BatchGetCommitsOutput
 * //   commits: [ // CommitObjectsList
 * //     { // Commit
 * //       commitId: "STRING_VALUE",
 * //       treeId: "STRING_VALUE",
 * //       parents: [ // ParentList
 * //         "STRING_VALUE",
 * //       ],
 * //       message: "STRING_VALUE",
 * //       author: { // UserInfo
 * //         name: "STRING_VALUE",
 * //         email: "STRING_VALUE",
 * //         date: "STRING_VALUE",
 * //       },
 * //       committer: {
 * //         name: "STRING_VALUE",
 * //         email: "STRING_VALUE",
 * //         date: "STRING_VALUE",
 * //       },
 * //       additionalData: "STRING_VALUE",
 * //     },
 * //   ],
 * //   errors: [ // BatchGetCommitsErrorsList
 * //     { // BatchGetCommitsError
 * //       commitId: "STRING_VALUE",
 * //       errorCode: "STRING_VALUE",
 * //       errorMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchGetCommitsCommandInput - {@link BatchGetCommitsCommandInput}
 * @returns {@link BatchGetCommitsCommandOutput}
 * @see {@link BatchGetCommitsCommandInput} for command's `input` shape.
 * @see {@link BatchGetCommitsCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for CodeCommitClient's `config` shape.
 *
 * @throws {@link CommitIdsLimitExceededException} (client fault)
 *  <p>The maximum number of allowed commit IDs in a batch request is 100. Verify that your batch requests contains no more than 100 commit IDs, and then try again.</p>
 *
 * @throws {@link CommitIdsListRequiredException} (client fault)
 *  <p>A list of commit IDs is required, but was either not specified or the list was empty.</p>
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
 * @throws {@link InvalidRepositoryNameException} (client fault)
 *  <p>A specified repository name is not valid.</p>
 *          <note>
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
export class BatchGetCommitsCommand extends $Command<
  BatchGetCommitsCommandInput,
  BatchGetCommitsCommandOutput,
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
  constructor(readonly input: BatchGetCommitsCommandInput) {
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
  ): Handler<BatchGetCommitsCommandInput, BatchGetCommitsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchGetCommitsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeCommitClient";
    const commandName = "BatchGetCommitsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "CodeCommit_20150413",
        operation: "BatchGetCommits",
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
  private serialize(input: BatchGetCommitsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_BatchGetCommitsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchGetCommitsCommandOutput> {
    return de_BatchGetCommitsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
