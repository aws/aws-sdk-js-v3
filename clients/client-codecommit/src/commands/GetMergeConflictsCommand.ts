// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetMergeConflictsInput, GetMergeConflictsOutput } from "../models/models_0";
import { GetMergeConflicts$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Returns information about merge conflicts between the before and after commit IDs for a pull request in a repository.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, GetMergeConflictsCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, GetMergeConflictsCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * // import type { CodeCommitClientConfig } from "@aws-sdk/client-codecommit";
 * const config = {}; // type is CodeCommitClientConfig
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
 * @throws {@link InvalidDestinationCommitSpecifierException} (client fault)
 *
 * The destination commit specifier is not valid. You must provide a valid branch name, tag, or full commit ID.
 *
 * @throws {@link InvalidMaxConflictFilesException} (client fault)
 *
 * The specified value for the number of conflict files to return is not valid.
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
 * @throws {@link InvalidSourceCommitSpecifierException} (client fault)
 *
 * The source commit specifier is not valid. You must provide a valid branch name, tag, or full commit ID.
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
export class GetMergeConflictsCommand extends command<GetMergeConflictsCommandInput, GetMergeConflictsCommandOutput>(
  _ep0,
  _mw0,
  "GetMergeConflicts",
  GetMergeConflicts$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetMergeConflictsInput;
      output: GetMergeConflictsOutput;
    };
    sdk: {
      input: GetMergeConflictsCommandInput;
      output: GetMergeConflictsCommandOutput;
    };
  };
}
