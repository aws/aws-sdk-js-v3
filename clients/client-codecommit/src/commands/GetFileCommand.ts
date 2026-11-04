// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetFileInput, GetFileOutput } from "../models/models_0";
import { GetFile$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetFileCommand}.
 */
export interface GetFileCommandInput extends GetFileInput {}
/**
 * @public
 *
 * The output of {@link GetFileCommand}.
 */
export interface GetFileCommandOutput extends GetFileOutput, __MetadataBearer {}

/**
 * Returns the base-64 encoded contents of a specified file and its metadata.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, GetFileCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, GetFileCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * // import type { CodeCommitClientConfig } from "@aws-sdk/client-codecommit";
 * const config = {}; // type is CodeCommitClientConfig
 * const client = new CodeCommitClient(config);
 * const input = { // GetFileInput
 *   repositoryName: "STRING_VALUE", // required
 *   commitSpecifier: "STRING_VALUE",
 *   filePath: "STRING_VALUE", // required
 * };
 * const command = new GetFileCommand(input);
 * const response = await client.send(command);
 * // { // GetFileOutput
 * //   commitId: "STRING_VALUE", // required
 * //   blobId: "STRING_VALUE", // required
 * //   filePath: "STRING_VALUE", // required
 * //   fileMode: "EXECUTABLE" || "NORMAL" || "SYMLINK", // required
 * //   fileSize: Number("long"), // required
 * //   fileContent: new Uint8Array(), // required
 * // };
 *
 * ```
 *
 * @param GetFileCommandInput - {@link GetFileCommandInput}
 * @returns {@link GetFileCommandOutput}
 * @see {@link GetFileCommandInput} for command's `input` shape.
 * @see {@link GetFileCommandOutput} for command's `response` shape.
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
 * @throws {@link FileDoesNotExistException} (client fault)
 *
 * The specified file does not exist. Verify that you have used the correct file name, full path, and extension.
 *
 * @throws {@link FileTooLargeException} (client fault)
 *
 * The specified file exceeds the file size limit for CodeCommit. For more information about limits in CodeCommit, see [Quotas](https://docs.aws.amazon.com/codecommit/latest/userguide/limits.html) in the *CodeCommit User Guide*.
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
export class GetFileCommand extends command<GetFileCommandInput, GetFileCommandOutput>(
  _ep0,
  _mw0,
  "GetFile",
  GetFile$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetFileInput;
      output: GetFileOutput;
    };
    sdk: {
      input: GetFileCommandInput;
      output: GetFileCommandOutput;
    };
  };
}
