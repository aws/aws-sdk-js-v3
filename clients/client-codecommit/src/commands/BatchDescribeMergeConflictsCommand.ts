// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { BatchDescribeMergeConflictsInput, BatchDescribeMergeConflictsOutput } from "../models/models_0";
import { BatchDescribeMergeConflicts$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Returns information about one or more merge conflicts in the attempted merge of two commit specifiers using the squash or three-way merge strategy.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, BatchDescribeMergeConflictsCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, BatchDescribeMergeConflictsCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * // import type { CodeCommitClientConfig } from "@aws-sdk/client-codecommit";
 * const config = {}; // type is CodeCommitClientConfig
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
 *
 * The specified commit does not exist or no commit was specified, and the specified repository has no default branch.
 *
 * @throws {@link CommitRequiredException} (client fault)
 *
 * A commit was not specified.
 *
 * @throws {@link EncryptionIntegrityChecksFailedException} (server fault)
 *
 * An encryption integrity check failed.
 *
 * @throws {@link EncryptionKeyAccessDeniedException} (client fault)
 *
 * An encryption key could not be accessed.
 *
 * @throws {@link EncryptionKeyDisabledException} (client fault)
 *
 * The encryption key is disabled.
 *
 * @throws {@link EncryptionKeyNotFoundException} (client fault)
 *
 * No encryption key was found.
 *
 * @throws {@link EncryptionKeyUnavailableException} (client fault)
 *
 * The encryption key is not available.
 *
 * @throws {@link InvalidCommitException} (client fault)
 *
 * The specified commit is not valid.
 *
 * @throws {@link InvalidConflictDetailLevelException} (client fault)
 *
 * The specified conflict detail level is not valid.
 *
 * @throws {@link InvalidConflictResolutionStrategyException} (client fault)
 *
 * The specified conflict resolution strategy is not valid.
 *
 * @throws {@link InvalidContinuationTokenException} (client fault)
 *
 * The specified continuation token is not valid.
 *
 * @throws {@link InvalidMaxConflictFilesException} (client fault)
 *
 * The specified value for the number of conflict files to return is not valid.
 *
 * @throws {@link InvalidMaxMergeHunksException} (client fault)
 *
 * The specified value for the number of merge hunks to return is not valid.
 *
 * @throws {@link InvalidMergeOptionException} (client fault)
 *
 * The specified merge option is not valid for this operation. Not all merge strategies are supported for all operations.
 *
 * @throws {@link InvalidRepositoryNameException} (client fault)
 *
 * A specified repository name is not valid.
 *
 * > **Note:** This exception occurs only when a specified repository name is not valid. Other exceptions occur when a required repository parameter is missing, or when a specified repository does not exist.
 *
 * @throws {@link MaximumFileContentToLoadExceededException} (client fault)
 *
 * The number of files to load exceeds the allowed limit.
 *
 * @throws {@link MaximumItemsToCompareExceededException} (client fault)
 *
 * The number of items to compare between the source or destination branches and the merge base has exceeded the maximum allowed.
 *
 * @throws {@link MergeOptionRequiredException} (client fault)
 *
 * A merge option or stategy is required, and none was provided.
 *
 * @throws {@link RepositoryDoesNotExistException} (client fault)
 *
 * The specified repository does not exist.
 *
 * @throws {@link RepositoryNameRequiredException} (client fault)
 *
 * A repository name is required, but was not specified.
 *
 * @throws {@link TipsDivergenceExceededException} (client fault)
 *
 * The divergence between the tips of the provided commit specifiers is too great to determine whether there might be any merge conflicts. Locally compare the specifiers using `git diff` or a diff tool.
 *
 * @throws {@link CodeCommitServiceException}
 *
 * Base exception class for all service exceptions from CodeCommit service.
 *
 * @public
 */
export class BatchDescribeMergeConflictsCommand extends command<BatchDescribeMergeConflictsCommandInput, BatchDescribeMergeConflictsCommandOutput>(
  _ep0,
  _mw0,
  "BatchDescribeMergeConflicts",
  BatchDescribeMergeConflicts$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchDescribeMergeConflictsInput;
      output: BatchDescribeMergeConflictsOutput;
    };
    sdk: {
      input: BatchDescribeMergeConflictsCommandInput;
      output: BatchDescribeMergeConflictsCommandOutput;
    };
  };
}
