// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetFileInput, GetFileOutput } from "../models/models_0";
import { de_GetFileCommand, se_GetFileCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Returns the base-64 encoded contents of a specified file and its metadata.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, GetFileCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, GetFileCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
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
 * @throws {@link FileDoesNotExistException} (client fault)
 *  <p>The specified file does not exist. Verify that you have used the correct file name,
 *             full path, and extension.</p>
 *
 * @throws {@link FileTooLargeException} (client fault)
 *  <p>The specified file exceeds the file size limit for CodeCommit. For more information about limits in CodeCommit, see
 *             <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/limits.html">Quotas</a> in the <i>CodeCommit User Guide</i>.</p>
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
export class GetFileCommand extends $Command
  .classBuilder<
    GetFileCommandInput,
    GetFileCommandOutput,
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
  .s("CodeCommit_20150413", "GetFile", {})
  .n("CodeCommitClient", "GetFileCommand")
  .f(void 0, void 0)
  .ser(se_GetFileCommand)
  .de(de_GetFileCommand)
  .build() {
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
