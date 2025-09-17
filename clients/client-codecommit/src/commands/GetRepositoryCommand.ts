// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetRepositoryInput, GetRepositoryOutput } from "../models/models_0";
import { de_GetRepositoryCommand, se_GetRepositoryCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetRepositoryCommand}.
 */
export interface GetRepositoryCommandInput extends GetRepositoryInput {}
/**
 * @public
 *
 * The output of {@link GetRepositoryCommand}.
 */
export interface GetRepositoryCommandOutput extends GetRepositoryOutput, __MetadataBearer {}

/**
 * <p>Returns information about a repository.</p>
 *          <note>
 *             <p>The description field for a repository accepts all HTML characters and all valid
 *                 Unicode characters. Applications that do not HTML-encode the description and display
 *                 it in a webpage can expose users to potentially malicious code. Make sure that you
 *                 HTML-encode the description field in any application that uses this API to display
 *                 the repository description on a webpage.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, GetRepositoryCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, GetRepositoryCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * // import type { CodeCommitClientConfig } from "@aws-sdk/client-codecommit";
 * const config = {}; // type is CodeCommitClientConfig
 * const client = new CodeCommitClient(config);
 * const input = { // GetRepositoryInput
 *   repositoryName: "STRING_VALUE", // required
 * };
 * const command = new GetRepositoryCommand(input);
 * const response = await client.send(command);
 * // { // GetRepositoryOutput
 * //   repositoryMetadata: { // RepositoryMetadata
 * //     accountId: "STRING_VALUE",
 * //     repositoryId: "STRING_VALUE",
 * //     repositoryName: "STRING_VALUE",
 * //     repositoryDescription: "STRING_VALUE",
 * //     defaultBranch: "STRING_VALUE",
 * //     lastModifiedDate: new Date("TIMESTAMP"),
 * //     creationDate: new Date("TIMESTAMP"),
 * //     cloneUrlHttp: "STRING_VALUE",
 * //     cloneUrlSsh: "STRING_VALUE",
 * //     Arn: "STRING_VALUE",
 * //     kmsKeyId: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetRepositoryCommandInput - {@link GetRepositoryCommandInput}
 * @returns {@link GetRepositoryCommandOutput}
 * @see {@link GetRepositoryCommandInput} for command's `input` shape.
 * @see {@link GetRepositoryCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for CodeCommitClient's `config` shape.
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
 * @throws {@link InvalidRepositoryNameException} (client fault)
 *  <p>A specified repository name is not valid.</p>
 *          <note>
 *             <p>This exception occurs only when a specified repository name is not valid. Other
 *                 exceptions occur when a required repository parameter is missing, or when a
 *                 specified repository does not exist.</p>
 *          </note>
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
export class GetRepositoryCommand extends $Command
  .classBuilder<
    GetRepositoryCommandInput,
    GetRepositoryCommandOutput,
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
  .s("CodeCommit_20150413", "GetRepository", {})
  .n("CodeCommitClient", "GetRepositoryCommand")
  .f(void 0, void 0)
  .ser(se_GetRepositoryCommand)
  .de(de_GetRepositoryCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetRepositoryInput;
      output: GetRepositoryOutput;
    };
    sdk: {
      input: GetRepositoryCommandInput;
      output: GetRepositoryCommandOutput;
    };
  };
}
