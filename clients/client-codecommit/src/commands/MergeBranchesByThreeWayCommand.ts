// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { MergeBranchesByThreeWayInput, MergeBranchesByThreeWayOutput } from "../models/models_0";
import { MergeBranchesByThreeWay$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link MergeBranchesByThreeWayCommand}.
 */
export interface MergeBranchesByThreeWayCommandInput extends MergeBranchesByThreeWayInput {}
/**
 * @public
 *
 * The output of {@link MergeBranchesByThreeWayCommand}.
 */
export interface MergeBranchesByThreeWayCommandOutput extends MergeBranchesByThreeWayOutput, __MetadataBearer {}

/**
 * Merges two specified branches using the three-way merge strategy.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, MergeBranchesByThreeWayCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, MergeBranchesByThreeWayCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * // import type { CodeCommitClientConfig } from "@aws-sdk/client-codecommit";
 * const config = {}; // type is CodeCommitClientConfig
 * const client = new CodeCommitClient(config);
 * const input = { // MergeBranchesByThreeWayInput
 *   repositoryName: "STRING_VALUE", // required
 *   sourceCommitSpecifier: "STRING_VALUE", // required
 *   destinationCommitSpecifier: "STRING_VALUE", // required
 *   targetBranch: "STRING_VALUE",
 *   conflictDetailLevel: "FILE_LEVEL" || "LINE_LEVEL",
 *   conflictResolutionStrategy: "NONE" || "ACCEPT_SOURCE" || "ACCEPT_DESTINATION" || "AUTOMERGE",
 *   authorName: "STRING_VALUE",
 *   email: "STRING_VALUE",
 *   commitMessage: "STRING_VALUE",
 *   keepEmptyFolders: true || false,
 *   conflictResolution: { // ConflictResolution
 *     replaceContents: [ // ReplaceContentEntries
 *       { // ReplaceContentEntry
 *         filePath: "STRING_VALUE", // required
 *         replacementType: "KEEP_BASE" || "KEEP_SOURCE" || "KEEP_DESTINATION" || "USE_NEW_CONTENT", // required
 *         content: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *         fileMode: "EXECUTABLE" || "NORMAL" || "SYMLINK",
 *       },
 *     ],
 *     deleteFiles: [ // DeleteFileEntries
 *       { // DeleteFileEntry
 *         filePath: "STRING_VALUE", // required
 *       },
 *     ],
 *     setFileModes: [ // SetFileModeEntries
 *       { // SetFileModeEntry
 *         filePath: "STRING_VALUE", // required
 *         fileMode: "EXECUTABLE" || "NORMAL" || "SYMLINK", // required
 *       },
 *     ],
 *   },
 * };
 * const command = new MergeBranchesByThreeWayCommand(input);
 * const response = await client.send(command);
 * // { // MergeBranchesByThreeWayOutput
 * //   commitId: "STRING_VALUE",
 * //   treeId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param MergeBranchesByThreeWayCommandInput - {@link MergeBranchesByThreeWayCommandInput}
 * @returns {@link MergeBranchesByThreeWayCommandOutput}
 * @see {@link MergeBranchesByThreeWayCommandInput} for command's `input` shape.
 * @see {@link MergeBranchesByThreeWayCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for CodeCommitClient's `config` shape.
 *
 * @throws {@link BranchDoesNotExistException} (client fault)
 *
 * The specified branch does not exist.
 *
 * @throws {@link BranchNameIsTagNameException} (client fault)
 *
 * The specified branch name is not valid because it is a tag name. Enter the name of a branch in the repository. For a list of valid branch names, use ListBranches.
 *
 * @throws {@link BranchNameRequiredException} (client fault)
 *
 * A branch name is required, but was not specified.
 *
 * @throws {@link CommitDoesNotExistException} (client fault)
 *
 * The specified commit does not exist or no commit was specified, and the specified repository has no default branch.
 *
 * @throws {@link CommitMessageLengthExceededException} (client fault)
 *
 * The commit message is too long. Provide a shorter string.
 *
 * @throws {@link CommitRequiredException} (client fault)
 *
 * A commit was not specified.
 *
 * @throws {@link ConcurrentReferenceUpdateException} (client fault)
 *
 * The merge cannot be completed because the target branch has been modified. Another user might have modified the target branch while the merge was in progress. Wait a few minutes, and then try again.
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
 * @throws {@link FileContentSizeLimitExceededException} (client fault)
 *
 * The file cannot be added because it is too large. The maximum file size is 6 MB, and the combined file content change size is 7 MB. Consider making these changes using a Git client.
 *
 * @throws {@link FileModeRequiredException} (client fault)
 *
 * The commit cannot be created because no file mode has been specified. A file mode is required to update mode permissions for a file.
 *
 * @throws {@link FolderContentSizeLimitExceededException} (client fault)
 *
 * The commit cannot be created because at least one of the overall changes in the commit results in a folder whose contents exceed the limit of 6 MB. Either reduce the number and size of your changes, or split the changes across multiple folders.
 *
 * @throws {@link InvalidBranchNameException} (client fault)
 *
 * The specified reference name is not valid.
 *
 * @throws {@link InvalidCommitException} (client fault)
 *
 * The specified commit is not valid.
 *
 * @throws {@link InvalidConflictDetailLevelException} (client fault)
 *
 * The specified conflict detail level is not valid.
 *
 * @throws {@link InvalidConflictResolutionException} (client fault)
 *
 * The specified conflict resolution list is not valid.
 *
 * @throws {@link InvalidConflictResolutionStrategyException} (client fault)
 *
 * The specified conflict resolution strategy is not valid.
 *
 * @throws {@link InvalidEmailException} (client fault)
 *
 * The specified email address either contains one or more characters that are not allowed, or it exceeds the maximum number of characters allowed for an email address.
 *
 * @throws {@link InvalidFileModeException} (client fault)
 *
 * The specified file mode permission is not valid. For a list of valid file mode permissions, see PutFile.
 *
 * @throws {@link InvalidPathException} (client fault)
 *
 * The specified path is not valid.
 *
 * @throws {@link InvalidReplacementContentException} (client fault)
 *
 * Automerge was specified for resolving the conflict, but the replacement type is not valid or content is missing.
 *
 * @throws {@link InvalidReplacementTypeException} (client fault)
 *
 * Automerge was specified for resolving the conflict, but the specified replacement type is not valid.
 *
 * @throws {@link InvalidRepositoryNameException} (client fault)
 *
 * A specified repository name is not valid.
 *
 * > **Note:** This exception occurs only when a specified repository name is not valid. Other exceptions occur when a required repository parameter is missing, or when a specified repository does not exist.
 *
 * @throws {@link InvalidTargetBranchException} (client fault)
 *
 * The specified target branch is not valid.
 *
 * @throws {@link ManualMergeRequiredException} (client fault)
 *
 * The pull request cannot be merged automatically into the destination branch. You must manually merge the branches and resolve any conflicts.
 *
 * @throws {@link MaximumConflictResolutionEntriesExceededException} (client fault)
 *
 * The number of allowed conflict resolution entries was exceeded.
 *
 * @throws {@link MaximumFileContentToLoadExceededException} (client fault)
 *
 * The number of files to load exceeds the allowed limit.
 *
 * @throws {@link MaximumItemsToCompareExceededException} (client fault)
 *
 * The number of items to compare between the source or destination branches and the merge base has exceeded the maximum allowed.
 *
 * @throws {@link MultipleConflictResolutionEntriesException} (client fault)
 *
 * More than one conflict resolution entries exists for the conflict. A conflict can have only one conflict resolution entry.
 *
 * @throws {@link NameLengthExceededException} (client fault)
 *
 * The user name is not valid because it has exceeded the character limit for author names.
 *
 * @throws {@link PathRequiredException} (client fault)
 *
 * The folderPath for a location cannot be null.
 *
 * @throws {@link ReplacementContentRequiredException} (client fault)
 *
 * USE_NEW_CONTENT was specified, but no replacement content has been provided.
 *
 * @throws {@link ReplacementTypeRequiredException} (client fault)
 *
 * A replacement type is required.
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
export class MergeBranchesByThreeWayCommand extends command<MergeBranchesByThreeWayCommandInput, MergeBranchesByThreeWayCommandOutput>(
  _ep0,
  _mw0,
  "MergeBranchesByThreeWay",
  MergeBranchesByThreeWay$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: MergeBranchesByThreeWayInput;
      output: MergeBranchesByThreeWayOutput;
    };
    sdk: {
      input: MergeBranchesByThreeWayCommandInput;
      output: MergeBranchesByThreeWayCommandOutput;
    };
  };
}
