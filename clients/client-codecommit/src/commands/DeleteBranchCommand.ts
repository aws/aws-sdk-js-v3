// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteBranchInput, DeleteBranchOutput } from "../models/models_0";
import { DeleteBranch$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Deletes a branch from a repository, unless that branch is the default branch for the repository.
 *
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
 *
 * A branch name is required, but was not specified.
 *
 * @throws {@link DefaultBranchCannotBeDeletedException} (client fault)
 *
 * The specified branch is the default branch for the repository, and cannot be deleted. To delete this branch, you must first set another branch as the default branch.
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
 * @throws {@link InvalidRepositoryNameException} (client fault)
 *
 * A specified repository name is not valid.
 *
 * > **Note:** This exception occurs only when a specified repository name is not valid. Other exceptions occur when a required repository parameter is missing, or when a specified repository does not exist.
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
export class DeleteBranchCommand extends command<DeleteBranchCommandInput, DeleteBranchCommandOutput>(
  _ep0,
  _mw0,
  "DeleteBranch",
  DeleteBranch$
) {
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
