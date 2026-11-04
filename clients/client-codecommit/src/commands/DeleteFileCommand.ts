// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteFileInput, DeleteFileOutput } from "../models/models_0";
import { DeleteFile$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteFileCommand}.
 */
export interface DeleteFileCommandInput extends DeleteFileInput {}
/**
 * @public
 *
 * The output of {@link DeleteFileCommand}.
 */
export interface DeleteFileCommandOutput extends DeleteFileOutput, __MetadataBearer {}

/**
 * Deletes a specified file from a specified branch. A commit is created on the branch that contains the revision. The file still exists in the commits earlier to the commit that contains the deletion.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, DeleteFileCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, DeleteFileCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * // import type { CodeCommitClientConfig } from "@aws-sdk/client-codecommit";
 * const config = {}; // type is CodeCommitClientConfig
 * const client = new CodeCommitClient(config);
 * const input = { // DeleteFileInput
 *   repositoryName: "STRING_VALUE", // required
 *   branchName: "STRING_VALUE", // required
 *   filePath: "STRING_VALUE", // required
 *   parentCommitId: "STRING_VALUE", // required
 *   keepEmptyFolders: true || false,
 *   commitMessage: "STRING_VALUE",
 *   name: "STRING_VALUE",
 *   email: "STRING_VALUE",
 * };
 * const command = new DeleteFileCommand(input);
 * const response = await client.send(command);
 * // { // DeleteFileOutput
 * //   commitId: "STRING_VALUE", // required
 * //   blobId: "STRING_VALUE", // required
 * //   treeId: "STRING_VALUE", // required
 * //   filePath: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param DeleteFileCommandInput - {@link DeleteFileCommandInput}
 * @returns {@link DeleteFileCommandOutput}
 * @see {@link DeleteFileCommandInput} for command's `input` shape.
 * @see {@link DeleteFileCommandOutput} for command's `response` shape.
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
 * @throws {@link FileDoesNotExistException} (client fault)
 *
 * The specified file does not exist. Verify that you have used the correct file name, full path, and extension.
 *
 * @throws {@link InvalidBranchNameException} (client fault)
 *
 * The specified reference name is not valid.
 *
 * @throws {@link InvalidEmailException} (client fault)
 *
 * The specified email address either contains one or more characters that are not allowed, or it exceeds the maximum number of characters allowed for an email address.
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
 * @throws {@link CodeCommitServiceException}
 *
 * Base exception class for all service exceptions from CodeCommit service.
 *
 * @public
 */
export class DeleteFileCommand extends command<DeleteFileCommandInput, DeleteFileCommandOutput>(
  _ep0,
  _mw0,
  "DeleteFile",
  DeleteFile$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteFileInput;
      output: DeleteFileOutput;
    };
    sdk: {
      input: DeleteFileCommandInput;
      output: DeleteFileCommandOutput;
    };
  };
}
