// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { MergeBranchesByFastForwardInput, MergeBranchesByFastForwardOutput } from "../models/models_0";
import { MergeBranchesByFastForward$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Merges two branches using the fast-forward merge strategy.
 *
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
 * @throws {@link CommitDoesNotExistException} (client fault)
 *
 * The specified commit does not exist or no commit was specified, and the specified repository has no default branch.
 *
 * @throws {@link CommitRequiredException} (client fault)
 *
 * A commit was not specified.
 *
 * @throws {@link ConcurrentReferenceUpdateException} (client fault)
 *
 * The merge cannot be completed because the target branch has been modified. Another user might have modified the target branch while the merge was in progress. Wait a few minutes, and then try again.
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
 * @throws {@link InvalidBranchNameException} (client fault)
 *
 * The specified reference name is not valid.
 *
 * @throws {@link InvalidCommitException} (client fault)
 *
 * The specified commit is not valid.
 *
 * @throws {@link InvalidRepositoryNameException} (client fault)
 *
 * A specified repository name is not valid.
 *
 * > **Note:** This exception occurs only when a specified repository name is not valid. Other exceptions occur when a required repository parameter is missing, or when a specified repository does not exist.
 *
 * @throws {@link InvalidTargetBranchException} (client fault)
 *
 * The specified target branch is not valid.
 *
 * @throws {@link ManualMergeRequiredException} (client fault)
 *
 * The pull request cannot be merged automatically into the destination branch. You must manually merge the branches and resolve any conflicts.
 *
 * @throws {@link RepositoryDoesNotExistException} (client fault)
 *
 * The specified repository does not exist.
 *
 * @throws {@link RepositoryNameRequiredException} (client fault)
 *
 * A repository name is required, but was not specified.
 *
 * @throws {@link TipsDivergenceExceededException} (client fault)
 *
 * The divergence between the tips of the provided commit specifiers is too great to determine whether there might be any merge conflicts. Locally compare the specifiers using `git diff` or a diff tool.
 *
 * @throws {@link CodeCommitServiceException}
 *
 * Base exception class for all service exceptions from CodeCommit service.
 *
 * @public
 */
export class MergeBranchesByFastForwardCommand extends command<MergeBranchesByFastForwardCommandInput, MergeBranchesByFastForwardCommandOutput>(
  _ep0,
  _mw0,
  "MergeBranchesByFastForward",
  MergeBranchesByFastForward$
) {
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
