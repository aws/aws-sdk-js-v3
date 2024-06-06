// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { BatchDescribeMergeConflictsInput, BatchDescribeMergeConflictsOutput } from "../models/models_0";
import { de_BatchDescribeMergeConflictsCommand, se_BatchDescribeMergeConflictsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchDescribeMergeConflictsCommand}.
 */
export interface BatchDescribeMergeConflictsCommandInput extends BatchDescribeMergeConflictsInput {}
/**
 * @public
 *
 * The output of {@link BatchDescribeMergeConflictsCommand}.
 */
export interface BatchDescribeMergeConflictsCommandOutput extends BatchDescribeMergeConflictsOutput, __MetadataBearer {}

/**
 * <p>Returns information about one or more merge conflicts in the attempted merge of two commit specifiers using the squash or three-way merge strategy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, BatchDescribeMergeConflictsCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, BatchDescribeMergeConflictsCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const input = { // BatchDescribeMergeConflictsInput
 *   repositoryName: "STRING_VALUE", // required
 *   destinationCommitSpecifier: "STRING_VALUE", // required
 *   sourceCommitSpecifier: "STRING_VALUE", // required
 *   mergeOption: "FAST_FORWARD_MERGE" || "SQUASH_MERGE" || "THREE_WAY_MERGE", // required
 *   maxMergeHunks: Number("int"),
 *   maxConflictFiles: Number("int"),
 *   filePaths: [ // FilePaths
 *     "STRING_VALUE",
 *   ],
 *   conflictDetailLevel: "FILE_LEVEL" || "LINE_LEVEL",
 *   conflictResolutionStrategy: "NONE" || "ACCEPT_SOURCE" || "ACCEPT_DESTINATION" || "AUTOMERGE",
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new BatchDescribeMergeConflictsCommand(input);
 * const response = await client.send(command);
 * // { // BatchDescribeMergeConflictsOutput
 * //   conflicts: [ // Conflicts // required
 * //     { // Conflict
 * //       conflictMetadata: { // ConflictMetadata
 * //         filePath: "STRING_VALUE",
 * //         fileSizes: { // FileSizes
 * //           source: Number("long"),
 * //           destination: Number("long"),
 * //           base: Number("long"),
 * //         },
 * //         fileModes: { // FileModes
 * //           source: "EXECUTABLE" || "NORMAL" || "SYMLINK",
 * //           destination: "EXECUTABLE" || "NORMAL" || "SYMLINK",
 * //           base: "EXECUTABLE" || "NORMAL" || "SYMLINK",
 * //         },
 * //         objectTypes: { // ObjectTypes
 * //           source: "FILE" || "DIRECTORY" || "GIT_LINK" || "SYMBOLIC_LINK",
 * //           destination: "FILE" || "DIRECTORY" || "GIT_LINK" || "SYMBOLIC_LINK",
 * //           base: "FILE" || "DIRECTORY" || "GIT_LINK" || "SYMBOLIC_LINK",
 * //         },
 * //         numberOfConflicts: Number("int"),
 * //         isBinaryFile: { // IsBinaryFile
 * //           source: true || false,
 * //           destination: true || false,
 * //           base: true || false,
 * //         },
 * //         contentConflict: true || false,
 * //         fileModeConflict: true || false,
 * //         objectTypeConflict: true || false,
 * //         mergeOperations: { // MergeOperations
 * //           source: "A" || "M" || "D",
 * //           destination: "A" || "M" || "D",
 * //         },
 * //       },
 * //       mergeHunks: [ // MergeHunks
 * //         { // MergeHunk
 * //           isConflict: true || false,
 * //           source: { // MergeHunkDetail
 * //             startLine: Number("int"),
 * //             endLine: Number("int"),
 * //             hunkContent: "STRING_VALUE",
 * //           },
 * //           destination: {
 * //             startLine: Number("int"),
 * //             endLine: Number("int"),
 * //             hunkContent: "STRING_VALUE",
 * //           },
 * //           base: {
 * //             startLine: Number("int"),
 * //             endLine: Number("int"),
 * //             hunkContent: "STRING_VALUE",
 * //           },
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * //   errors: [ // BatchDescribeMergeConflictsErrors
 * //     { // BatchDescribeMergeConflictsError
 * //       filePath: "STRING_VALUE", // required
 * //       exceptionName: "STRING_VALUE", // required
 * //       message: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   destinationCommitId: "STRING_VALUE", // required
 * //   sourceCommitId: "STRING_VALUE", // required
 * //   baseCommitId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param BatchDescribeMergeConflictsCommandInput - {@link BatchDescribeMergeConflictsCommandInput}
 * @returns {@link BatchDescribeMergeConflictsCommandOutput}
 * @see {@link BatchDescribeMergeConflictsCommandInput} for command's `input` shape.
 * @see {@link BatchDescribeMergeConflictsCommandOutput} for command's `response` shape.
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
 * @throws {@link InvalidMaxConflictFilesException} (client fault)
 *  <p>The specified value for the number of conflict files to return is not valid.</p>
 *
 * @throws {@link InvalidMaxMergeHunksException} (client fault)
 *  <p>The specified value for the number of merge hunks to return is not valid.</p>
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
 * @public
 */
export class BatchDescribeMergeConflictsCommand extends $Command
  .classBuilder<
    BatchDescribeMergeConflictsCommandInput,
    BatchDescribeMergeConflictsCommandOutput,
    CodeCommitClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: CodeCommitClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CodeCommit_20150413", "BatchDescribeMergeConflicts", {})
  .n("CodeCommitClient", "BatchDescribeMergeConflictsCommand")
  .f(void 0, void 0)
  .ser(se_BatchDescribeMergeConflictsCommand)
  .de(de_BatchDescribeMergeConflictsCommand)
  .build() {}
