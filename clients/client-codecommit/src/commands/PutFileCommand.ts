// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { PutFileInput, PutFileOutput } from "../models/models_0";
import { PutFile } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutFileCommand}.
 */
export interface PutFileCommandInput extends PutFileInput {}
/**
 * @public
 *
 * The output of {@link PutFileCommand}.
 */
export interface PutFileCommandOutput extends PutFileOutput, __MetadataBearer {}

/**
 * <p>Adds or updates a file in a branch in an CodeCommit repository, and generates a commit for the addition in the specified branch.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, PutFileCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, PutFileCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * // import type { CodeCommitClientConfig } from "@aws-sdk/client-codecommit";
 * const config = {}; // type is CodeCommitClientConfig
 * const client = new CodeCommitClient(config);
 * const input = { // PutFileInput
 *   repositoryName: "STRING_VALUE", // required
 *   branchName: "STRING_VALUE", // required
 *   fileContent: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")   // required
 *   filePath: "STRING_VALUE", // required
 *   fileMode: "EXECUTABLE" || "NORMAL" || "SYMLINK",
 *   parentCommitId: "STRING_VALUE",
 *   commitMessage: "STRING_VALUE",
 *   name: "STRING_VALUE",
 *   email: "STRING_VALUE",
 * };
 * const command = new PutFileCommand(input);
 * const response = await client.send(command);
 * // { // PutFileOutput
 * //   commitId: "STRING_VALUE", // required
 * //   blobId: "STRING_VALUE", // required
 * //   treeId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param PutFileCommandInput - {@link PutFileCommandInput}
 * @returns {@link PutFileCommandOutput}
 * @see {@link PutFileCommandInput} for command's `input` shape.
 * @see {@link PutFileCommandOutput} for command's `response` shape.
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
 * @throws {@link CommitMessageLengthExceededException} (client fault)
 *  <p>The commit message is too long. Provide a shorter string. </p>
 *
 * @throws {@link DirectoryNameConflictsWithFileNameException} (client fault)
 *  <p>A file cannot be added to the repository because the specified path name has the same name as a file that already exists in this repository.
 *         Either provide a different name for the file, or specify a different path for the file.</p>
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
 * @throws {@link FileContentRequiredException} (client fault)
 *  <p>The file cannot be added because it is empty. Empty files cannot be added to the repository with this API.</p>
 *
 * @throws {@link FileContentSizeLimitExceededException} (client fault)
 *  <p>The file cannot be added because it is too large. The maximum file size is 6 MB, and
 *             the combined file content change size is 7 MB. Consider making these changes using a Git
 *             client.</p>
 *
 * @throws {@link FileNameConflictsWithDirectoryNameException} (client fault)
 *  <p>A file cannot be added to the repository because the specified file name has the same name as a directory in this repository. Either provide
 *         another name for the file, or add the file in a directory that does not match the file name.</p>
 *
 * @throws {@link FilePathConflictsWithSubmodulePathException} (client fault)
 *  <p>The commit cannot be created because a specified file path points to a submodule. Verify that the destination files
 *         have valid file paths that do not point to a submodule.</p>
 *
 * @throws {@link FolderContentSizeLimitExceededException} (client fault)
 *  <p>The commit cannot be created because at least one of the overall changes in the commit results in a
 *             folder whose contents exceed the limit of 6 MB. Either reduce the number and size of your changes,
 *         or split the changes across multiple folders.</p>
 *
 * @throws {@link InvalidBranchNameException} (client fault)
 *  <p>The specified reference name is not valid.</p>
 *
 * @throws {@link InvalidDeletionParameterException} (client fault)
 *  <p>The specified deletion parameter is not valid.</p>
 *
 * @throws {@link InvalidEmailException} (client fault)
 *  <p>The specified email address either contains one or more characters that are not allowed, or it exceeds the maximum number of characters
 *         allowed for an email address.</p>
 *
 * @throws {@link InvalidFileModeException} (client fault)
 *  <p>The specified file mode permission is not valid. For a list of valid file mode permissions, see <a>PutFile</a>. </p>
 *
 * @throws {@link InvalidParentCommitIdException} (client fault)
 *  <p>The parent commit ID is not valid. The commit ID cannot be empty, and must match the head commit ID for the branch of the repository where you
 *         want to add or update a file.</p>
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
 * @throws {@link NameLengthExceededException} (client fault)
 *  <p>The user name is not valid because it has exceeded the character limit for author names. </p>
 *
 * @throws {@link ParentCommitDoesNotExistException} (client fault)
 *  <p>The parent commit ID is not valid because it does not exist. The specified parent commit ID does not exist in the specified branch of the repository.</p>
 *
 * @throws {@link ParentCommitIdOutdatedException} (client fault)
 *  <p>The file could not be added because the provided parent commit ID is not the current tip of the specified branch. To view the full commit ID of the current head
 *         of the branch, use <a>GetBranch</a>.</p>
 *
 * @throws {@link ParentCommitIdRequiredException} (client fault)
 *  <p>A parent commit ID is required. To view the full commit ID of a branch in a repository, use <a>GetBranch</a> or a Git command
 *         (for example, git pull or git log).</p>
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
 * @throws {@link SameFileContentException} (client fault)
 *  <p>The file was not added or updated because the content of the file is exactly the same as the content of that file in the repository and branch
 *         that you specified.</p>
 *
 * @throws {@link CodeCommitServiceException}
 * <p>Base exception class for all service exceptions from CodeCommit service.</p>
 *
 *
 * @public
 */
export class PutFileCommand extends $Command
  .classBuilder<
    PutFileCommandInput,
    PutFileCommandOutput,
    CodeCommitClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeCommitClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CodeCommit_20150413", "PutFile", {})
  .n("CodeCommitClient", "PutFileCommand")
  .sc(PutFile)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutFileInput;
      output: PutFileOutput;
    };
    sdk: {
      input: PutFileCommandInput;
      output: PutFileCommandOutput;
    };
  };
}
