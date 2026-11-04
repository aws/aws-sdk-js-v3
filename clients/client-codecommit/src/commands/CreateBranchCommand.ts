// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateBranchInput } from "../models/models_0";
import { CreateBranch$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateBranchCommand}.
 */
export interface CreateBranchCommandInput extends CreateBranchInput {}
/**
 * @public
 *
 * The output of {@link CreateBranchCommand}.
 */
export interface CreateBranchCommandOutput extends __MetadataBearer {}

/**
 * Creates a branch in a repository and points the branch to a commit.
 *
 * > **Note:** Calling the create branch operation does not set a repository's default branch. To do this, call the update default branch operation.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, CreateBranchCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, CreateBranchCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * // import type { CodeCommitClientConfig } from "@aws-sdk/client-codecommit";
 * const config = {}; // type is CodeCommitClientConfig
 * const client = new CodeCommitClient(config);
 * const input = { // CreateBranchInput
 *   repositoryName: "STRING_VALUE", // required
 *   branchName: "STRING_VALUE", // required
 *   commitId: "STRING_VALUE", // required
 * };
 * const command = new CreateBranchCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CreateBranchCommandInput - {@link CreateBranchCommandInput}
 * @returns {@link CreateBranchCommandOutput}
 * @see {@link CreateBranchCommandInput} for command's `input` shape.
 * @see {@link CreateBranchCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for CodeCommitClient's `config` shape.
 *
 * @throws {@link BranchNameExistsException} (client fault)
 *
 * Cannot create the branch with the specified name because the commit conflicts with an existing branch with the same name. Branch names must be unique.
 *
 * @throws {@link BranchNameRequiredException} (client fault)
 *
 * A branch name is required, but was not specified.
 *
 * @throws {@link CommitDoesNotExistException} (client fault)
 *
 * The specified commit does not exist or no commit was specified, and the specified repository has no default branch.
 *
 * @throws {@link CommitIdRequiredException} (client fault)
 *
 * A commit ID was not specified.
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
 * @throws {@link InvalidCommitIdException} (client fault)
 *
 * The specified commit ID is not valid.
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
export class CreateBranchCommand extends command<CreateBranchCommandInput, CreateBranchCommandOutput>(
  _ep0,
  _mw0,
  "CreateBranch",
  CreateBranch$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateBranchInput;
      output: {};
    };
    sdk: {
      input: CreateBranchCommandInput;
      output: CreateBranchCommandOutput;
    };
  };
}
