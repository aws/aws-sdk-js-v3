// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteBranchInput, DeleteBranchOutput } from "../models/models_0";
import { DeleteBranch$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteBranchCommand}.
 */
export interface DeleteBranchCommandInput extends DeleteBranchInput {}
/**
 * @public
 *
 * The output of {@link DeleteBranchCommand}.
 */
export interface DeleteBranchCommandOutput extends DeleteBranchOutput, __MetadataBearer {}

/**
 * <p>Deletes a branch from a repository, unless that branch is the default branch for the repository. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, DeleteBranchCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, DeleteBranchCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * // import type { CodeCommitClientConfig } from "@aws-sdk/client-codecommit";
 * const config = {}; // type is CodeCommitClientConfig
 * const client = new CodeCommitClient(config);
 * const input = { // DeleteBranchInput
 *   repositoryName: "STRING_VALUE", // required
 *   branchName: "STRING_VALUE", // required
 * };
 * const command = new DeleteBranchCommand(input);
 * const response = await client.send(command);
 * // { // DeleteBranchOutput
 * //   deletedBranch: { // BranchInfo
 * //     branchName: "STRING_VALUE",
 * //     commitId: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteBranchCommandInput - {@link DeleteBranchCommandInput}
 * @returns {@link DeleteBranchCommandOutput}
 * @see {@link DeleteBranchCommandInput} for command's `input` shape.
 * @see {@link DeleteBranchCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for CodeCommitClient's `config` shape.
 *
 * @throws {@link BranchNameRequiredException} (client fault)
 *  <p>A branch name is required, but was not specified.</p>
 *
 * @throws {@link DefaultBranchCannotBeDeletedException} (client fault)
 *  <p>The specified branch is the default branch for the repository, and cannot be deleted. To delete this branch, you must first set another branch as the default branch.</p>
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
 * @throws {@link InvalidBranchNameException} (client fault)
 *  <p>The specified reference name is not valid.</p>
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
export class DeleteBranchCommand extends $Command
  .classBuilder<
    DeleteBranchCommandInput,
    DeleteBranchCommandOutput,
    CodeCommitClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeCommitClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CodeCommit_20150413", "DeleteBranch", {})
  .n("CodeCommitClient", "DeleteBranchCommand")
  .sc(DeleteBranch$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteBranchInput;
      output: DeleteBranchOutput;
    };
    sdk: {
      input: DeleteBranchCommandInput;
      output: DeleteBranchCommandOutput;
    };
  };
}
