// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { MergeBranchesByThreeWayInput, MergeBranchesByThreeWayOutput } from "../models/models_1";
import { de_MergeBranchesByThreeWayCommand, se_MergeBranchesByThreeWayCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Merges two specified branches using the three-way merge strategy.</p>
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
 *  <p>The specified branch does not exist.</p>
 *
 * @throws {@link BranchNameIsTagNameException} (client fault)
 *  <p>The specified branch name is not valid because it is a tag name. Enter the name of a
 *             branch in the repository. For a list of valid branch names, use <a>ListBranches</a>.</p>
 *
 * @throws {@link BranchNameRequiredException} (client fault)
 *  <p>A branch name is required, but was not specified.</p>
 *
 * @throws {@link CommitDoesNotExistException} (client fault)
 *  <p>The specified commit does not exist or no commit was specified, and the specified repository has no default branch.</p>
 *
 * @throws {@link CommitMessageLengthExceededException} (client fault)
 *  <p>The commit message is too long. Provide a shorter string. </p>
 *
 * @throws {@link CommitRequiredException} (client fault)
 *  <p>A commit was not specified.</p>
 *
 * @throws {@link ConcurrentReferenceUpdateException} (client fault)
 *  <p>The merge cannot be completed because the target branch has been modified. Another user might have modified the target branch while the merge was in progress. Wait a few minutes, and then try again.</p>
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
 * @throws {@link FileContentSizeLimitExceededException} (client fault)
 *  <p>The file cannot be added because it is too large. The maximum file size is 6 MB, and
 *             the combined file content change size is 7 MB. Consider making these changes using a Git
 *             client.</p>
 *
 * @throws {@link FileModeRequiredException} (client fault)
 *  <p>The commit cannot be created because no file mode has been specified. A file mode is
 *             required to update mode permissions for a file.</p>
 *
 * @throws {@link FolderContentSizeLimitExceededException} (client fault)
 *  <p>The commit cannot be created because at least one of the overall changes in the commit results in a
 *             folder whose contents exceed the limit of 6 MB. Either reduce the number and size of your changes,
 *         or split the changes across multiple folders.</p>
 *
 * @throws {@link InvalidBranchNameException} (client fault)
 *  <p>The specified reference name is not valid.</p>
 *
 * @throws {@link InvalidCommitException} (client fault)
 *  <p>The specified commit is not valid.</p>
 *
 * @throws {@link InvalidConflictDetailLevelException} (client fault)
 *  <p>The specified conflict detail level is not valid.</p>
 *
 * @throws {@link InvalidConflictResolutionException} (client fault)
 *  <p>The specified conflict resolution list is not valid.</p>
 *
 * @throws {@link InvalidConflictResolutionStrategyException} (client fault)
 *  <p>The specified conflict resolution strategy is not valid.</p>
 *
 * @throws {@link InvalidEmailException} (client fault)
 *  <p>The specified email address either contains one or more characters that are not allowed, or it exceeds the maximum number of characters
 *         allowed for an email address.</p>
 *
 * @throws {@link InvalidFileModeException} (client fault)
 *  <p>The specified file mode permission is not valid. For a list of valid file mode permissions, see <a>PutFile</a>. </p>
 *
 * @throws {@link InvalidPathException} (client fault)
 *  <p>The specified path is not valid.</p>
 *
 * @throws {@link InvalidReplacementContentException} (client fault)
 *  <p>Automerge was specified for resolving the conflict, but the replacement type is not valid or content is missing. </p>
 *
 * @throws {@link InvalidReplacementTypeException} (client fault)
 *  <p>Automerge was specified for resolving the conflict, but the specified replacement type is not valid.</p>
 *
 * @throws {@link InvalidRepositoryNameException} (client fault)
 *  <p>A specified repository name is not valid.</p>
 *          <note>
 *             <p>This exception occurs only when a specified repository name is not valid. Other
 *                 exceptions occur when a required repository parameter is missing, or when a
 *                 specified repository does not exist.</p>
 *          </note>
 *
 * @throws {@link InvalidTargetBranchException} (client fault)
 *  <p>The specified target branch is not valid.</p>
 *
 * @throws {@link ManualMergeRequiredException} (client fault)
 *  <p>The pull request cannot be merged automatically into the destination branch. You must manually merge the branches and resolve any conflicts.</p>
 *
 * @throws {@link MaximumConflictResolutionEntriesExceededException} (client fault)
 *  <p>The number of allowed conflict resolution entries was exceeded.</p>
 *
 * @throws {@link MaximumFileContentToLoadExceededException} (client fault)
 *  <p>The number of files to load exceeds the allowed limit.</p>
 *
 * @throws {@link MaximumItemsToCompareExceededException} (client fault)
 *  <p>The number of items to compare between the source or destination branches and the merge base has exceeded the maximum allowed.</p>
 *
 * @throws {@link MultipleConflictResolutionEntriesException} (client fault)
 *  <p>More than one conflict resolution entries exists for the conflict. A conflict can have only one conflict resolution entry.</p>
 *
 * @throws {@link NameLengthExceededException} (client fault)
 *  <p>The user name is not valid because it has exceeded the character limit for author names. </p>
 *
 * @throws {@link PathRequiredException} (client fault)
 *  <p>The folderPath for a location cannot be null.</p>
 *
 * @throws {@link ReplacementContentRequiredException} (client fault)
 *  <p>USE_NEW_CONTENT was specified, but no replacement content has been provided.</p>
 *
 * @throws {@link ReplacementTypeRequiredException} (client fault)
 *  <p>A replacement type is required.</p>
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
 *
 * @public
 */
export class MergeBranchesByThreeWayCommand extends $Command
  .classBuilder<
    MergeBranchesByThreeWayCommandInput,
    MergeBranchesByThreeWayCommandOutput,
    CodeCommitClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeCommitClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CodeCommit_20150413", "MergeBranchesByThreeWay", {})
  .n("CodeCommitClient", "MergeBranchesByThreeWayCommand")
  .f(void 0, void 0)
  .ser(se_MergeBranchesByThreeWayCommand)
  .de(de_MergeBranchesByThreeWayCommand)
  .build() {
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
