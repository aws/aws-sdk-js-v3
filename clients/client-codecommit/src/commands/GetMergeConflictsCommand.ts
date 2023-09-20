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
import { GetMergeConflictsInput, GetMergeConflictsOutput } from "../models/models_0";
import { de_GetMergeConflictsCommand, se_GetMergeConflictsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetMergeConflictsCommand}.
 */
export interface GetMergeConflictsCommandInput extends GetMergeConflictsInput {}
/**
 * @public
 *
 * The output of {@link GetMergeConflictsCommand}.
 */
export interface GetMergeConflictsCommandOutput extends GetMergeConflictsOutput, __MetadataBearer {}

/**
 * @public
 * <p>Returns information about merge conflicts between the before and after commit IDs for a pull request in a repository.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, GetMergeConflictsCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, GetMergeConflictsCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const input = { // GetMergeConflictsInput
 *   repositoryName: "STRING_VALUE", // required
 *   destinationCommitSpecifier: "STRING_VALUE", // required
 *   sourceCommitSpecifier: "STRING_VALUE", // required
 *   mergeOption: "FAST_FORWARD_MERGE" || "SQUASH_MERGE" || "THREE_WAY_MERGE", // required
 *   conflictDetailLevel: "FILE_LEVEL" || "LINE_LEVEL",
 *   maxConflictFiles: Number("int"),
 *   conflictResolutionStrategy: "NONE" || "ACCEPT_SOURCE" || "ACCEPT_DESTINATION" || "AUTOMERGE",
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new GetMergeConflictsCommand(input);
 * const response = await client.send(command);
 * // { // GetMergeConflictsOutput
 * //   mergeable: true || false, // required
 * //   destinationCommitId: "STRING_VALUE", // required
 * //   sourceCommitId: "STRING_VALUE", // required
 * //   baseCommitId: "STRING_VALUE",
 * //   conflictMetadataList: [ // ConflictMetadataList // required
 * //     { // ConflictMetadata
 * //       filePath: "STRING_VALUE",
 * //       fileSizes: { // FileSizes
 * //         source: Number("long"),
 * //         destination: Number("long"),
 * //         base: Number("long"),
 * //       },
 * //       fileModes: { // FileModes
 * //         source: "EXECUTABLE" || "NORMAL" || "SYMLINK",
 * //         destination: "EXECUTABLE" || "NORMAL" || "SYMLINK",
 * //         base: "EXECUTABLE" || "NORMAL" || "SYMLINK",
 * //       },
 * //       objectTypes: { // ObjectTypes
 * //         source: "FILE" || "DIRECTORY" || "GIT_LINK" || "SYMBOLIC_LINK",
 * //         destination: "FILE" || "DIRECTORY" || "GIT_LINK" || "SYMBOLIC_LINK",
 * //         base: "FILE" || "DIRECTORY" || "GIT_LINK" || "SYMBOLIC_LINK",
 * //       },
 * //       numberOfConflicts: Number("int"),
 * //       isBinaryFile: { // IsBinaryFile
 * //         source: true || false,
 * //         destination: true || false,
 * //         base: true || false,
 * //       },
 * //       contentConflict: true || false,
 * //       fileModeConflict: true || false,
 * //       objectTypeConflict: true || false,
 * //       mergeOperations: { // MergeOperations
 * //         source: "A" || "M" || "D",
 * //         destination: "A" || "M" || "D",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetMergeConflictsCommandInput - {@link GetMergeConflictsCommandInput}
 * @returns {@link GetMergeConflictsCommandOutput}
 * @see {@link GetMergeConflictsCommandInput} for command's `input` shape.
 * @see {@link GetMergeConflictsCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for CodeCommitClient's `config` shape.
 *
 * @throws {@link CommitDoesNotExistException} (client fault)
 *  <p>The specified commit does not exist or no commit was specified, and the specified repository has no default branch.</p>
 *
 * @throws {@link CommitRequiredException} (client fault)
 *  <p>A commit was not specified.</p>
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
 * @throws {@link InvalidCommitException} (client fault)
 *  <p>The specified commit is not valid.</p>
 *
 * @throws {@link InvalidConflictDetailLevelException} (client fault)
 *  <p>The specified conflict detail level is not valid.</p>
 *
 * @throws {@link InvalidConflictResolutionStrategyException} (client fault)
 *  <p>The specified conflict resolution strategy is not valid.</p>
 *
 * @throws {@link InvalidContinuationTokenException} (client fault)
 *  <p>The specified continuation token is not valid.</p>
 *
 * @throws {@link InvalidDestinationCommitSpecifierException} (client fault)
 *  <p>The destination commit specifier is not valid. You must provide a valid branch name, tag, or full commit ID. </p>
 *
 * @throws {@link InvalidMaxConflictFilesException} (client fault)
 *  <p>The specified value for the number of conflict files to return is not valid.</p>
 *
 * @throws {@link InvalidMergeOptionException} (client fault)
 *  <p>The specified merge option is not valid for this operation. Not all merge strategies are supported for all operations.</p>
 *
 * @throws {@link InvalidRepositoryNameException} (client fault)
 *  <p>A specified repository name is not valid.</p>
 *          <note>
 *             <p>This exception occurs only when a specified repository name is not valid. Other
 *                 exceptions occur when a required repository parameter is missing, or when a
 *                 specified repository does not exist.</p>
 *          </note>
 *
 * @throws {@link InvalidSourceCommitSpecifierException} (client fault)
 *  <p>The source commit specifier is not valid. You must provide a valid branch name, tag, or full commit ID.</p>
 *
 * @throws {@link MaximumFileContentToLoadExceededException} (client fault)
 *  <p>The number of files to load exceeds the allowed limit.</p>
 *
 * @throws {@link MaximumItemsToCompareExceededException} (client fault)
 *  <p>The number of items to compare between the source or destination branches and the merge base has exceeded the maximum allowed.</p>
 *
 * @throws {@link MergeOptionRequiredException} (client fault)
 *  <p>A merge option or stategy is required, and none was provided.</p>
 *
 * @throws {@link RepositoryDoesNotExistException} (client fault)
 *  <p>The specified repository does not exist.</p>
 *
 * @throws {@link RepositoryNameRequiredException} (client fault)
 *  <p>A repository name is required, but was not specified.</p>
 *
 * @throws {@link TipsDivergenceExceededException} (client fault)
 *  <p>The divergence between the tips of the provided commit specifiers is too great to determine whether there might be
 *             any merge conflicts. Locally compare the specifiers using <code>git diff</code> or a diff tool.</p>
 *
 * @throws {@link CodeCommitServiceException}
 * <p>Base exception class for all service exceptions from CodeCommit service.</p>
 *
 */
export class GetMergeConflictsCommand extends $Command<
  GetMergeConflictsCommandInput,
  GetMergeConflictsCommandOutput,
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
  constructor(readonly input: GetMergeConflictsCommandInput) {
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
  ): Handler<GetMergeConflictsCommandInput, GetMergeConflictsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetMergeConflictsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeCommitClient";
    const commandName = "GetMergeConflictsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "CodeCommit_20150413",
        operation: "GetMergeConflicts",
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
  private serialize(input: GetMergeConflictsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetMergeConflictsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetMergeConflictsCommandOutput> {
    return de_GetMergeConflictsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
