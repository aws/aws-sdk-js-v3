// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateDefaultBranchInput } from "../models/models_0";
import { UpdateDefaultBranch$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateDefaultBranchCommand}.
 */
export interface UpdateDefaultBranchCommandInput extends UpdateDefaultBranchInput {}
/**
 * @public
 *
 * The output of {@link UpdateDefaultBranchCommand}.
 */
export interface UpdateDefaultBranchCommandOutput extends __MetadataBearer {}

/**
 * Sets or changes the default branch name for the specified repository.
 *
 * > **Note:** If you use this operation to change the default branch name to the current default branch name, a success message is returned even though the default branch did not change.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, UpdateDefaultBranchCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, UpdateDefaultBranchCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * // import type { CodeCommitClientConfig } from "@aws-sdk/client-codecommit";
 * const config = {}; // type is CodeCommitClientConfig
 * const client = new CodeCommitClient(config);
 * const input = { // UpdateDefaultBranchInput
 *   repositoryName: "STRING_VALUE", // required
 *   defaultBranchName: "STRING_VALUE", // required
 * };
 * const command = new UpdateDefaultBranchCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateDefaultBranchCommandInput - {@link UpdateDefaultBranchCommandInput}
 * @returns {@link UpdateDefaultBranchCommandOutput}
 * @see {@link UpdateDefaultBranchCommandInput} for command's `input` shape.
 * @see {@link UpdateDefaultBranchCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for CodeCommitClient's `config` shape.
 *
 * @throws {@link BranchDoesNotExistException} (client fault)
 *
 * The specified branch does not exist.
 *
 * @throws {@link BranchNameRequiredException} (client fault)
 *
 * A branch name is required, but was not specified.
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
export class UpdateDefaultBranchCommand extends command<UpdateDefaultBranchCommandInput, UpdateDefaultBranchCommandOutput>(
  _ep0,
  _mw0,
  "UpdateDefaultBranch",
  UpdateDefaultBranch$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateDefaultBranchInput;
      output: {};
    };
    sdk: {
      input: UpdateDefaultBranchCommandInput;
      output: UpdateDefaultBranchCommandOutput;
    };
  };
}
