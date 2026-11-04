// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateCommitInput, CreateCommitOutput } from "../models/models_0";
import { CreateCommit$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateCommitCommand}.
 */
export interface CreateCommitCommandInput extends CreateCommitInput {}
/**
 * @public
 *
 * The output of {@link CreateCommitCommand}.
 */
export interface CreateCommitCommandOutput extends CreateCommitOutput, __MetadataBearer {}

/**
 * Creates a commit for a repository on the tip of a specified branch.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, CreateCommitCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, CreateCommitCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * // import type { CodeCommitClientConfig } from "@aws-sdk/client-codecommit";
 * const config = {}; // type is CodeCommitClientConfig
 * const client = new CodeCommitClient(config);
 * const input = { // CreateCommitInput
 *   repositoryName: "STRING_VALUE", // required
 *   branchName: "STRING_VALUE", // required
 *   parentCommitId: "STRING_VALUE",
 *   authorName: "STRING_VALUE",
 *   email: "STRING_VALUE",
 *   commitMessage: "STRING_VALUE",
 *   keepEmptyFolders: true || false,
 *   putFiles: [ // PutFileEntries
 *     { // PutFileEntry
 *       filePath: "STRING_VALUE", // required
 *       fileMode: "EXECUTABLE" || "NORMAL" || "SYMLINK",
 *       fileContent: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *       sourceFile: { // SourceFileSpecifier
 *         filePath: "STRING_VALUE", // required
 *         isMove: true || false,
 *       },
 *     },
 *   ],
 *   deleteFiles: [ // DeleteFileEntries
 *     { // DeleteFileEntry
 *       filePath: "STRING_VALUE", // required
 *     },
 *   ],
 *   setFileModes: [ // SetFileModeEntries
 *     { // SetFileModeEntry
 *       filePath: "STRING_VALUE", // required
 *       fileMode: "EXECUTABLE" || "NORMAL" || "SYMLINK", // required
 *     },
 *   ],
 * };
 * const command = new CreateCommitCommand(input);
 * const response = await client.send(command);
 * // { // CreateCommitOutput
 * //   commitId: "STRING_VALUE",
 * //   treeId: "STRING_VALUE",
 * //   filesAdded: [ // FilesMetadata
 * //     { // FileMetadata
 * //       absolutePath: "STRING_VALUE",
 * //       blobId: "STRING_VALUE",
 * //       fileMode: "EXECUTABLE" || "NORMAL" || "SYMLINK",
 * //     },
 * //   ],
 * //   filesUpdated: [
 * //     {
 * //       absolutePath: "STRING_VALUE",
 * //       blobId: "STRING_VALUE",
 * //       fileMode: "EXECUTABLE" || "NORMAL" || "SYMLINK",
 * //     },
 * //   ],
 * //   filesDeleted: [
 * //     {
 * //       absolutePath: "STRING_VALUE",
 * //       blobId: "STRING_VALUE",
 * //       fileMode: "EXECUTABLE" || "NORMAL" || "SYMLINK",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param CreateCommitCommandInput - {@link CreateCommitCommandInput}
 * @returns {@link CreateCommitCommandOutput}
 * @see {@link CreateCommitCommandInput} for command's `input` shape.
 * @see {@link CreateCommitCommandOutput} for command's `response` shape.
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
 * @throws {@link FileContentAndSourceFileSpecifiedException} (client fault)
 *
 * The commit cannot be created because both a source file and file content have been specified for the same file. You cannot provide both. Either specify a source file or provide the file content directly.
 *
 * @throws {@link FileContentSizeLimitExceededException} (client fault)
 *
 * The file cannot be added because it is too large. The maximum file size is 6 MB, and the combined file content change size is 7 MB. Consider making these changes using a Git client.
 *
 * @throws {@link FileDoesNotExistException} (client fault)
 *
 * The specified file does not exist. Verify that you have used the correct file name, full path, and extension.
 *
 * @throws {@link FileEntryRequiredException} (client fault)
 *
 * The commit cannot be created because no files have been specified as added, updated, or changed (PutFile or DeleteFile) for the commit.
 *
 * @throws {@link FileModeRequiredException} (client fault)
 *
 * The commit cannot be created because no file mode has been specified. A file mode is required to update mode permissions for a file.
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
 * @throws {@link MaximumFileEntriesExceededException} (client fault)
 *
 * The number of specified files to change as part of this commit exceeds the maximum number of files that can be changed in a single commit. Consider using a Git client for these changes.
 *
 * @throws {@link NameLengthExceededException} (client fault)
 *
 * The user name is not valid because it has exceeded the character limit for author names.
 *
 * @throws {@link NoChangeException} (client fault)
 *
 * The commit cannot be created because no changes will be made to the repository as a result of this commit. A commit must contain at least one change.
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
 * @throws {@link PutFileEntryConflictException} (client fault)
 *
 * The commit cannot be created because one or more files specified in the commit reference both a file and a folder.
 *
 * @throws {@link RepositoryDoesNotExistException} (client fault)
 *
 * The specified repository does not exist.
 *
 * @throws {@link RepositoryNameRequiredException} (client fault)
 *
 * A repository name is required, but was not specified.
 *
 * @throws {@link RestrictedSourceFileException} (client fault)
 *
 * The commit cannot be created because one of the changes specifies copying or moving a .gitkeep file.
 *
 * @throws {@link SamePathRequestException} (client fault)
 *
 * The commit cannot be created because one or more changes in this commit duplicate actions in the same file path. For example, you cannot make the same delete request to the same file in the same file path twice, or make a delete request and a move request to the same file as part of the same commit.
 *
 * @throws {@link SourceFileOrContentRequiredException} (client fault)
 *
 * The commit cannot be created because no source files or file content have been specified for the commit.
 *
 * @throws {@link CodeCommitServiceException}
 *
 * Base exception class for all service exceptions from CodeCommit service.
 *
 * @public
 */
export class CreateCommitCommand extends command<CreateCommitCommandInput, CreateCommitCommandOutput>(
  _ep0,
  _mw0,
  "CreateCommit",
  CreateCommit$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateCommitInput;
      output: CreateCommitOutput;
    };
    sdk: {
      input: CreateCommitCommandInput;
      output: CreateCommitCommandOutput;
    };
  };
}
