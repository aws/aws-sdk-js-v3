// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteRepositoryInput, DeleteRepositoryOutput } from "../models/models_0";
import { de_DeleteRepositoryCommand, se_DeleteRepositoryCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteRepositoryCommand}.
 */
export interface DeleteRepositoryCommandInput extends DeleteRepositoryInput {}
/**
 * @public
 *
 * The output of {@link DeleteRepositoryCommand}.
 */
export interface DeleteRepositoryCommandOutput extends DeleteRepositoryOutput, __MetadataBearer {}

/**
 * <p>Deletes a repository. If a specified repository was already deleted, a null repository
 *             ID is returned.</p>
 *          <important>
 *             <p>Deleting a repository also deletes all associated objects and metadata. After a repository is
 *                 deleted, all future push calls to the deleted repository fail.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, DeleteRepositoryCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, DeleteRepositoryCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const input = { // DeleteRepositoryInput
 *   repositoryName: "STRING_VALUE", // required
 * };
 * const command = new DeleteRepositoryCommand(input);
 * const response = await client.send(command);
 * // { // DeleteRepositoryOutput
 * //   repositoryId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteRepositoryCommandInput - {@link DeleteRepositoryCommandInput}
 * @returns {@link DeleteRepositoryCommandOutput}
 * @see {@link DeleteRepositoryCommandInput} for command's `input` shape.
 * @see {@link DeleteRepositoryCommandOutput} for command's `response` shape.
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
 * @throws {@link RepositoryNameRequiredException} (client fault)
 *  <p>A repository name is required, but was not specified.</p>
 *
 * @throws {@link CodeCommitServiceException}
 * <p>Base exception class for all service exceptions from CodeCommit service.</p>
 *
 *
 * @public
 */
export class DeleteRepositoryCommand extends $Command
  .classBuilder<
    DeleteRepositoryCommandInput,
    DeleteRepositoryCommandOutput,
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
  .s("CodeCommit_20150413", "DeleteRepository", {})
  .n("CodeCommitClient", "DeleteRepositoryCommand")
  .f(void 0, void 0)
  .ser(se_DeleteRepositoryCommand)
  .de(de_DeleteRepositoryCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteRepositoryInput;
      output: DeleteRepositoryOutput;
    };
    sdk: {
      input: DeleteRepositoryCommandInput;
      output: DeleteRepositoryCommandOutput;
    };
  };
}
