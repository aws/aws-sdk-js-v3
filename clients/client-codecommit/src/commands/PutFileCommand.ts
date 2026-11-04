// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutFileInput, PutFileOutput } from "../models/models_0";
import { PutFile$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Adds or updates a file in a branch in an CodeCommit repository, and generates a commit for the addition in the specified branch.
 *
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
 * @throws {@link CommitMessageLengthExceededException} (client fault)
 *
 * The commit message is too long. Provide a shorter string.
 *
 * @throws {@link DirectoryNameConflictsWithFileNameException} (client fault)
 *
 * A file cannot be added to the repository because the specified path name has the same name as a file that already exists in this repository. Either provide a different name for the file, or specify a different path for the file.
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
 * @throws {@link FileContentRequiredException} (client fault)
 *
 * The file cannot be added because it is empty. Empty files cannot be added to the repository with this API.
 *
 * @throws {@link FileContentSizeLimitExceededException} (client fault)
 *
 * The file cannot be added because it is too large. The maximum file size is 6 MB, and the combined file content change size is 7 MB. Consider making these changes using a Git client.
 *
 * @throws {@link FileNameConflictsWithDirectoryNameException} (client fault)
 *
 * A file cannot be added to the repository because the specified file name has the same name as a directory in this repository. Either provide another name for the file, or add the file in a directory that does not match the file name.
 *
 * @throws {@link FilePathConflictsWithSubmodulePathException} (client fault)
 *
 * The commit cannot be created because a specified file path points to a submodule. Verify that the destination files have valid file paths that do not point to a submodule.
 *
 * @throws {@link FolderContentSizeLimitExceededException} (client fault)
 *
 * The commit cannot be created because at least one of the overall changes in the commit results in a folder whose contents exceed the limit of 6 MB. Either reduce the number and size of your changes, or split the changes across multiple folders.
 *
 * @throws {@link InvalidBranchNameException} (client fault)
 *
 * The specified reference name is not valid.
 *
 * @throws {@link InvalidDeletionParameterException} (client fault)
 *
 * The specified deletion parameter is not valid.
 *
 * @throws {@link InvalidEmailException} (client fault)
 *
 * The specified email address either contains one or more characters that are not allowed, or it exceeds the maximum number of characters allowed for an email address.
 *
 * @throws {@link InvalidFileModeException} (client fault)
 *
 * The specified file mode permission is not valid. For a list of valid file mode permissions, see PutFile.
 *
 * @throws {@link InvalidParentCommitIdException} (client fault)
 *
 * The parent commit ID is not valid. The commit ID cannot be empty, and must match the head commit ID for the branch of the repository where you want to add or update a file.
 *
 * @throws {@link InvalidPathException} (client fault)
 *
 * The specified path is not valid.
 *
 * @throws {@link InvalidRepositoryNameException} (client fault)
 *
 * A specified repository name is not valid.
 *
 * > **Note:** This exception occurs only when a specified repository name is not valid. Other exceptions occur when a required repository parameter is missing, or when a specified repository does not exist.
 *
 * @throws {@link NameLengthExceededException} (client fault)
 *
 * The user name is not valid because it has exceeded the character limit for author names.
 *
 * @throws {@link ParentCommitDoesNotExistException} (client fault)
 *
 * The parent commit ID is not valid because it does not exist. The specified parent commit ID does not exist in the specified branch of the repository.
 *
 * @throws {@link ParentCommitIdOutdatedException} (client fault)
 *
 * The file could not be added because the provided parent commit ID is not the current tip of the specified branch. To view the full commit ID of the current head of the branch, use GetBranch.
 *
 * @throws {@link ParentCommitIdRequiredException} (client fault)
 *
 * A parent commit ID is required. To view the full commit ID of a branch in a repository, use GetBranch or a Git command (for example, git pull or git log).
 *
 * @throws {@link PathRequiredException} (client fault)
 *
 * The folderPath for a location cannot be null.
 *
 * @throws {@link RepositoryDoesNotExistException} (client fault)
 *
 * The specified repository does not exist.
 *
 * @throws {@link RepositoryNameRequiredException} (client fault)
 *
 * A repository name is required, but was not specified.
 *
 * @throws {@link SameFileContentException} (client fault)
 *
 * The file was not added or updated because the content of the file is exactly the same as the content of that file in the repository and branch that you specified.
 *
 * @throws {@link CodeCommitServiceException}
 *
 * Base exception class for all service exceptions from CodeCommit service.
 *
 * @public
 */
export class PutFileCommand extends command<PutFileCommandInput, PutFileCommandOutput>(
  _ep0,
  _mw0,
  "PutFile",
  PutFile$
) {
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
