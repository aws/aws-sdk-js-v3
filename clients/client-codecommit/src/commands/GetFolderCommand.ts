// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetFolderInput, GetFolderOutput } from "../models/models_0";
import { GetFolder$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Returns the contents of a specified folder in a repository.</p>
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
 *  <p>The specified commit does not exist or no commit was specified, and the specified repository has no default branch.</p>
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
 * @throws {@link FolderDoesNotExistException} (client fault)
 *  <p>The specified folder does not exist. Either the folder name is not correct, or you did
 *             not enter the full path to the folder.</p>
 *
 * @throws {@link InvalidCommitException} (client fault)
 *  <p>The specified commit is not valid.</p>
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
 * @throws {@link PathRequiredException} (client fault)
 *  <p>The folderPath for a location cannot be null.</p>
 *
 * @throws {@link RepositoryDoesNotExistException} (client fault)
 *  <p>The specified repository does not exist.</p>
 *
 * @throws {@link RepositoryNameRequiredException} (client fault)
 *  <p>A repository name is required, but was not specified.</p>
 *
 * @throws {@link CodeCommitServiceException}
 * <p>Base exception class for all service exceptions from CodeCommit service.</p>
 *
 *
 * @public
 */
export class GetFolderCommand extends $Command
  .classBuilder<
    GetFolderCommandInput,
    GetFolderCommandOutput,
    CodeCommitClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeCommitClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CodeCommit_20150413", "GetFolder", {})
  .n("CodeCommitClient", "GetFolderCommand")
  .sc(GetFolder$)
  .build() {
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
