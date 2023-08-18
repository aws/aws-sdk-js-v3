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
import { DescribeMergeConflictsInput, DescribeMergeConflictsOutput } from "../models/models_0";
import { de_DescribeMergeConflictsCommand, se_DescribeMergeConflictsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeMergeConflictsCommand}.
 */
export interface DescribeMergeConflictsCommandInput extends DescribeMergeConflictsInput {}
/**
 * @public
 *
 * The output of {@link DescribeMergeConflictsCommand}.
 */
export interface DescribeMergeConflictsCommandOutput extends DescribeMergeConflictsOutput, __MetadataBearer {}

/**
 * @public
 * <p>Returns information about one or more merge conflicts in the attempted merge of two
 *             commit specifiers using the squash or three-way merge strategy. If the merge option for
 *             the attempted merge is specified as FAST_FORWARD_MERGE, an exception is thrown.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, DescribeMergeConflictsCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, DescribeMergeConflictsCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const input = { // DescribeMergeConflictsInput
 *   repositoryName: "STRING_VALUE", // required
 *   destinationCommitSpecifier: "STRING_VALUE", // required
 *   sourceCommitSpecifier: "STRING_VALUE", // required
 *   mergeOption: "FAST_FORWARD_MERGE" || "SQUASH_MERGE" || "THREE_WAY_MERGE", // required
 *   maxMergeHunks: Number("int"),
 *   filePath: "STRING_VALUE", // required
 *   conflictDetailLevel: "FILE_LEVEL" || "LINE_LEVEL",
 *   conflictResolutionStrategy: "NONE" || "ACCEPT_SOURCE" || "ACCEPT_DESTINATION" || "AUTOMERGE",
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new DescribeMergeConflictsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeMergeConflictsOutput
 * //   conflictMetadata: { // ConflictMetadata
 * //     filePath: "STRING_VALUE",
 * //     fileSizes: { // FileSizes
 * //       source: Number("long"),
 * //       destination: Number("long"),
 * //       base: Number("long"),
 * //     },
 * //     fileModes: { // FileModes
 * //       source: "EXECUTABLE" || "NORMAL" || "SYMLINK",
 * //       destination: "EXECUTABLE" || "NORMAL" || "SYMLINK",
 * //       base: "EXECUTABLE" || "NORMAL" || "SYMLINK",
 * //     },
 * //     objectTypes: { // ObjectTypes
 * //       source: "FILE" || "DIRECTORY" || "GIT_LINK" || "SYMBOLIC_LINK",
 * //       destination: "FILE" || "DIRECTORY" || "GIT_LINK" || "SYMBOLIC_LINK",
 * //       base: "FILE" || "DIRECTORY" || "GIT_LINK" || "SYMBOLIC_LINK",
 * //     },
 * //     numberOfConflicts: Number("int"),
 * //     isBinaryFile: { // IsBinaryFile
 * //       source: true || false,
 * //       destination: true || false,
 * //       base: true || false,
 * //     },
 * //     contentConflict: true || false,
 * //     fileModeConflict: true || false,
 * //     objectTypeConflict: true || false,
 * //     mergeOperations: { // MergeOperations
 * //       source: "A" || "M" || "D",
 * //       destination: "A" || "M" || "D",
 * //     },
 * //   },
 * //   mergeHunks: [ // MergeHunks // required
 * //     { // MergeHunk
 * //       isConflict: true || false,
 * //       source: { // MergeHunkDetail
 * //         startLine: Number("int"),
 * //         endLine: Number("int"),
 * //         hunkContent: "STRING_VALUE",
 * //       },
 * //       destination: {
 * //         startLine: Number("int"),
 * //         endLine: Number("int"),
 * //         hunkContent: "STRING_VALUE",
 * //       },
 * //       base: {
 * //         startLine: Number("int"),
 * //         endLine: Number("int"),
 * //         hunkContent: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * //   destinationCommitId: "STRING_VALUE", // required
 * //   sourceCommitId: "STRING_VALUE", // required
 * //   baseCommitId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeMergeConflictsCommandInput - {@link DescribeMergeConflictsCommandInput}
 * @returns {@link DescribeMergeConflictsCommandOutput}
 * @see {@link DescribeMergeConflictsCommandInput} for command's `input` shape.
 * @see {@link DescribeMergeConflictsCommandOutput} for command's `response` shape.
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
 * @throws {@link FileDoesNotExistException} (client fault)
 *  <p>The specified file does not exist. Verify that you have used the correct file name,
 *             full path, and extension.</p>
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
 * @throws {@link InvalidMaxMergeHunksException} (client fault)
 *  <p>The specified value for the number of merge hunks to return is not valid.</p>
 *
 * @throws {@link InvalidMergeOptionException} (client fault)
 *  <p>The specified merge option is not valid for this operation. Not all merge strategies are supported for all operations.</p>
 *
 * @throws {@link InvalidPathException} (client fault)
 *  <p>The specified path is not valid.</p>
 *
 * @throws {@link InvalidRepositoryNameException} (client fault)
 *  <p>A specified repository name is not valid.</p>
 *          <note>
 *             <p>This exception occurs only when a specified repository name is not valid. Other
 *                 exceptions occur when a required repository parameter is missing, or when a
 *                 specified repository does not exist.</p>
 *          </note>
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
 * @throws {@link PathRequiredException} (client fault)
 *  <p>The folderPath for a location cannot be null.</p>
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
export class DescribeMergeConflictsCommand extends $Command<
  DescribeMergeConflictsCommandInput,
  DescribeMergeConflictsCommandOutput,
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
  constructor(readonly input: DescribeMergeConflictsCommandInput) {
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
  ): Handler<DescribeMergeConflictsCommandInput, DescribeMergeConflictsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeMergeConflictsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeCommitClient";
    const commandName = "DescribeMergeConflictsCommand";
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
  private serialize(input: DescribeMergeConflictsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeMergeConflictsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeMergeConflictsCommandOutput> {
    return de_DescribeMergeConflictsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
