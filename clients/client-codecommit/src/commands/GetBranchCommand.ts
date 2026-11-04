// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetBranchInput, GetBranchOutput } from "../models/models_0";
import { GetBranch$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetBranchCommand}.
 */
export interface GetBranchCommandInput extends GetBranchInput {}
/**
 * @public
 *
 * The output of {@link GetBranchCommand}.
 */
export interface GetBranchCommandOutput extends GetBranchOutput, __MetadataBearer {}

/**
 * Returns information about a repository branch, including its name and the last commit ID.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, GetBranchCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, GetBranchCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * // import type { CodeCommitClientConfig } from "@aws-sdk/client-codecommit";
 * const config = {}; // type is CodeCommitClientConfig
 * const client = new CodeCommitClient(config);
 * const input = { // GetBranchInput
 *   repositoryName: "STRING_VALUE",
 *   branchName: "STRING_VALUE",
 * };
 * const command = new GetBranchCommand(input);
 * const response = await client.send(command);
 * // { // GetBranchOutput
 * //   branch: { // BranchInfo
 * //     branchName: "STRING_VALUE",
 * //     commitId: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetBranchCommandInput - {@link GetBranchCommandInput}
 * @returns {@link GetBranchCommandOutput}
 * @see {@link GetBranchCommandInput} for command's `input` shape.
 * @see {@link GetBranchCommandOutput} for command's `response` shape.
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
export class GetBranchCommand extends command<GetBranchCommandInput, GetBranchCommandOutput>(
  _ep0,
  _mw0,
  "GetBranch",
  GetBranch$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetBranchInput;
      output: GetBranchOutput;
    };
    sdk: {
      input: GetBranchCommandInput;
      output: GetBranchCommandOutput;
    };
  };
}
