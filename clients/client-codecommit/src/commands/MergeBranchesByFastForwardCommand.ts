// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { MergeBranchesByFastForwardInput, MergeBranchesByFastForwardOutput } from "../models/models_0";
import { MergeBranchesByFastForward$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link MergeBranchesByFastForwardCommand}.
 */
export interface MergeBranchesByFastForwardCommandInput extends MergeBranchesByFastForwardInput {}
/**
 * @public
 *
 * The output of {@link MergeBranchesByFastForwardCommand}.
 */
export interface MergeBranchesByFastForwardCommandOutput extends MergeBranchesByFastForwardOutput, __MetadataBearer {}

/**
 * <p>Merges two branches using the fast-forward merge strategy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, MergeBranchesByFastForwardCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, MergeBranchesByFastForwardCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * // import type { CodeCommitClientConfig } from "@aws-sdk/client-codecommit";
 * const config = {}; // type is CodeCommitClientConfig
 * const client = new CodeCommitClient(config);
 * const input = { // MergeBranchesByFastForwardInput
 *   repositoryName: "STRING_VALUE", // required
 *   sourceCommitSpecifier: "STRING_VALUE", // required
 *   destinationCommitSpecifier: "STRING_VALUE", // required
 *   targetBranch: "STRING_VALUE",
 * };
 * const command = new MergeBranchesByFastForwardCommand(input);
 * const response = await client.send(command);
 * // { // MergeBranchesByFastForwardOutput
 * //   commitId: "STRING_VALUE",
 * //   treeId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param MergeBranchesByFastForwardCommandInput - {@link MergeBranchesByFastForwardCommandInput}
 * @returns {@link MergeBranchesByFastForwardCommandOutput}
 * @see {@link MergeBranchesByFastForwardCommandInput} for command's `input` shape.
 * @see {@link MergeBranchesByFastForwardCommandOutput} for command's `response` shape.
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
 * @throws {@link CommitDoesNotExistException} (client fault)
 *  <p>The specified commit does not exist or no commit was specified, and the specified repository has no default branch.</p>
 *
 * @throws {@link CommitRequiredException} (client fault)
 *  <p>A commit was not specified.</p>
 *
 * @throws {@link ConcurrentReferenceUpdateException} (client fault)
 *  <p>The merge cannot be completed because the target branch has been modified. Another user might have modified the target branch while the merge was in progress. Wait a few minutes, and then try again.</p>
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
 * @throws {@link InvalidCommitException} (client fault)
 *  <p>The specified commit is not valid.</p>
 *
 * @throws {@link InvalidRepositoryNameException} (client fault)
 *  <p>A specified repository name is not valid.</p>
 *          <note>
 *             <p>This exception occurs only when a specified repository name is not valid. Other
 *                 exceptions occur when a required repository parameter is missing, or when a
 *                 specified repository does not exist.</p>
 *          </note>
 *
 * @throws {@link InvalidTargetBranchException} (client fault)
 *  <p>The specified target branch is not valid.</p>
 *
 * @throws {@link ManualMergeRequiredException} (client fault)
 *  <p>The pull request cannot be merged automatically into the destination branch. You must manually merge the branches and resolve any conflicts.</p>
 *
 * @throws {@link RepositoryDoesNotExistException} (client fault)
 *  <p>The specified repository does not exist.</p>
 *
 * @throws {@link RepositoryNameRequiredException} (client fault)
 *  <p>A repository name is required, but was not specified.</p>
 *
 * @throws {@link TipsDivergenceExceededException} (client fault)
 *  <p>The divergence between the tips of the provided commit specifiers is too great to determine whether there might be
 *             any merge conflicts. Locally compare the specifiers using <code>git diff</code> or a diff tool.</p>
 *
 * @throws {@link CodeCommitServiceException}
 * <p>Base exception class for all service exceptions from CodeCommit service.</p>
 *
 *
 * @public
 */
export class MergeBranchesByFastForwardCommand extends $Command
  .classBuilder<
    MergeBranchesByFastForwardCommandInput,
    MergeBranchesByFastForwardCommandOutput,
    CodeCommitClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeCommitClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CodeCommit_20150413", "MergeBranchesByFastForward", {})
  .n("CodeCommitClient", "MergeBranchesByFastForwardCommand")
  .sc(MergeBranchesByFastForward$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: MergeBranchesByFastForwardInput;
      output: MergeBranchesByFastForwardOutput;
    };
    sdk: {
      input: MergeBranchesByFastForwardCommandInput;
      output: MergeBranchesByFastForwardCommandOutput;
    };
  };
}
