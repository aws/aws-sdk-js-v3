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
import { CreateCommitInput, CreateCommitOutput } from "../models/models_0";
import { de_CreateCommitCommand, se_CreateCommitCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
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
 * @public
 * <p>Creates a commit for a repository on the tip of a specified branch.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, CreateCommitCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, CreateCommitCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
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
 *       fileMode: "STRING_VALUE",
 *       fileContent: "BLOB_VALUE",
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
 *       fileMode: "STRING_VALUE", // required
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
 * //       fileMode: "STRING_VALUE",
 * //     },
 * //   ],
 * //   filesUpdated: [
 * //     {
 * //       absolutePath: "STRING_VALUE",
 * //       blobId: "STRING_VALUE",
 * //       fileMode: "STRING_VALUE",
 * //     },
 * //   ],
 * //   filesDeleted: [
 * //     {
 * //       absolutePath: "STRING_VALUE",
 * //       blobId: "STRING_VALUE",
 * //       fileMode: "STRING_VALUE",
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
 * @throws {@link FileContentAndSourceFileSpecifiedException} (client fault)
 *  <p>The commit cannot be created because both a source file and file content have been
 *             specified for the same file. You cannot provide both. Either specify a source file or
 *             provide the file content directly.</p>
 *
 * @throws {@link FileContentSizeLimitExceededException} (client fault)
 *  <p>The file cannot be added because it is too large. The maximum file size is 6 MB, and
 *             the combined file content change size is 7 MB. Consider making these changes using a Git
 *             client.</p>
 *
 * @throws {@link FileDoesNotExistException} (client fault)
 *  <p>The specified file does not exist. Verify that you have used the correct file name,
 *             full path, and extension.</p>
 *
 * @throws {@link FileEntryRequiredException} (client fault)
 *  <p>The commit cannot be created because no files have been specified as added, updated, or changed (PutFile or DeleteFile) for the commit.</p>
 *
 * @throws {@link FileModeRequiredException} (client fault)
 *  <p>The commit cannot be created because no file mode has been specified. A file mode is
 *             required to update mode permissions for a file.</p>
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
 *
 *         <note>
 *             <p>This exception occurs only when a specified repository name is not valid. Other
 *                 exceptions occur when a required repository parameter is missing, or when a
 *                 specified repository does not exist.</p>
 *          </note>
 *
 * @throws {@link MaximumFileEntriesExceededException} (client fault)
 *  <p>The number of specified files to change as part of this commit exceeds the maximum number of files
 *         that can be changed in a single commit. Consider using a Git client for these changes.</p>
 *
 * @throws {@link NameLengthExceededException} (client fault)
 *  <p>The user name is not valid because it has exceeded the character limit for author names. </p>
 *
 * @throws {@link NoChangeException} (client fault)
 *  <p>The commit cannot be created because no changes will be made to the repository as a result of this commit. A commit must contain at least one change.</p>
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
 * @throws {@link PutFileEntryConflictException} (client fault)
 *  <p>The commit cannot be created because one or more files specified in the commit reference both a file and a folder.</p>
 *
 * @throws {@link RepositoryDoesNotExistException} (client fault)
 *  <p>The specified repository does not exist.</p>
 *
 * @throws {@link RepositoryNameRequiredException} (client fault)
 *  <p>A repository name is required, but was not specified.</p>
 *
 * @throws {@link RestrictedSourceFileException} (client fault)
 *  <p>The commit cannot be created because one of the changes specifies copying or moving a .gitkeep file.</p>
 *
 * @throws {@link SamePathRequestException} (client fault)
 *  <p>The commit cannot be created because one or more changes in this commit duplicate actions in the same file path. For example,
 *         you cannot make the same delete request to the same file in the same file path twice, or make a delete request and a move request to the same
 *         file as part of the same commit.</p>
 *
 * @throws {@link SourceFileOrContentRequiredException} (client fault)
 *  <p>The commit cannot be created because no source files or file content have been specified for the commit.</p>
 *
 * @throws {@link CodeCommitServiceException}
 * <p>Base exception class for all service exceptions from CodeCommit service.</p>
 *
 */
export class CreateCommitCommand extends $Command<
  CreateCommitCommandInput,
  CreateCommitCommandOutput,
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
  constructor(readonly input: CreateCommitCommandInput) {
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
  ): Handler<CreateCommitCommandInput, CreateCommitCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateCommitCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeCommitClient";
    const commandName = "CreateCommitCommand";
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
  private serialize(input: CreateCommitCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateCommitCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateCommitCommandOutput> {
    return de_CreateCommitCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
