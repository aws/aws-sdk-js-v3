// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetFolderInput, GetFolderOutput } from "../models/models_0";
import { GetFolder$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetFolderCommand}.
 */
export interface GetFolderCommandInput extends GetFolderInput {}
/**
 * @public
 *
 * The output of {@link GetFolderCommand}.
 */
export interface GetFolderCommandOutput extends GetFolderOutput, __MetadataBearer {}

/**
 * Returns the contents of a specified folder in a repository.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, GetFolderCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, GetFolderCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * // import type { CodeCommitClientConfig } from "@aws-sdk/client-codecommit";
 * const config = {}; // type is CodeCommitClientConfig
 * const client = new CodeCommitClient(config);
 * const input = { // GetFolderInput
 *   repositoryName: "STRING_VALUE", // required
 *   commitSpecifier: "STRING_VALUE",
 *   folderPath: "STRING_VALUE", // required
 * };
 * const command = new GetFolderCommand(input);
 * const response = await client.send(command);
 * // { // GetFolderOutput
 * //   commitId: "STRING_VALUE", // required
 * //   folderPath: "STRING_VALUE", // required
 * //   treeId: "STRING_VALUE",
 * //   subFolders: [ // FolderList
 * //     { // Folder
 * //       treeId: "STRING_VALUE",
 * //       absolutePath: "STRING_VALUE",
 * //       relativePath: "STRING_VALUE",
 * //     },
 * //   ],
 * //   files: [ // FileList
 * //     { // File
 * //       blobId: "STRING_VALUE",
 * //       absolutePath: "STRING_VALUE",
 * //       relativePath: "STRING_VALUE",
 * //       fileMode: "EXECUTABLE" || "NORMAL" || "SYMLINK",
 * //     },
 * //   ],
 * //   symbolicLinks: [ // SymbolicLinkList
 * //     { // SymbolicLink
 * //       blobId: "STRING_VALUE",
 * //       absolutePath: "STRING_VALUE",
 * //       relativePath: "STRING_VALUE",
 * //       fileMode: "EXECUTABLE" || "NORMAL" || "SYMLINK",
 * //     },
 * //   ],
 * //   subModules: [ // SubModuleList
 * //     { // SubModule
 * //       commitId: "STRING_VALUE",
 * //       absolutePath: "STRING_VALUE",
 * //       relativePath: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetFolderCommandInput - {@link GetFolderCommandInput}
 * @returns {@link GetFolderCommandOutput}
 * @see {@link GetFolderCommandInput} for command's `input` shape.
 * @see {@link GetFolderCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for CodeCommitClient's `config` shape.
 *
 * @throws {@link CommitDoesNotExistException} (client fault)
 *
 * The specified commit does not exist or no commit was specified, and the specified repository has no default branch.
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
 * @throws {@link FolderDoesNotExistException} (client fault)
 *
 * The specified folder does not exist. Either the folder name is not correct, or you did not enter the full path to the folder.
 *
 * @throws {@link InvalidCommitException} (client fault)
 *
 * The specified commit is not valid.
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
export class GetFolderCommand extends command<GetFolderCommandInput, GetFolderCommandOutput>(
  _ep0,
  _mw0,
  "GetFolder",
  GetFolder$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetFolderInput;
      output: GetFolderOutput;
    };
    sdk: {
      input: GetFolderCommandInput;
      output: GetFolderCommandOutput;
    };
  };
}
