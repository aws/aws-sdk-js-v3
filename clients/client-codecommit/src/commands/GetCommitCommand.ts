// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetCommitInput, GetCommitOutput } from "../models/models_0";
import { GetCommit$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetCommitCommand}.
 */
export interface GetCommitCommandInput extends GetCommitInput {}
/**
 * @public
 *
 * The output of {@link GetCommitCommand}.
 */
export interface GetCommitCommandOutput extends GetCommitOutput, __MetadataBearer {}

/**
 * Returns information about a commit, including commit message and committer information.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, GetCommitCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, GetCommitCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * // import type { CodeCommitClientConfig } from "@aws-sdk/client-codecommit";
 * const config = {}; // type is CodeCommitClientConfig
 * const client = new CodeCommitClient(config);
 * const input = { // GetCommitInput
 *   repositoryName: "STRING_VALUE", // required
 *   commitId: "STRING_VALUE", // required
 * };
 * const command = new GetCommitCommand(input);
 * const response = await client.send(command);
 * // { // GetCommitOutput
 * //   commit: { // Commit
 * //     commitId: "STRING_VALUE",
 * //     treeId: "STRING_VALUE",
 * //     parents: [ // ParentList
 * //       "STRING_VALUE",
 * //     ],
 * //     message: "STRING_VALUE",
 * //     author: { // UserInfo
 * //       name: "STRING_VALUE",
 * //       email: "STRING_VALUE",
 * //       date: "STRING_VALUE",
 * //     },
 * //     committer: {
 * //       name: "STRING_VALUE",
 * //       email: "STRING_VALUE",
 * //       date: "STRING_VALUE",
 * //     },
 * //     additionalData: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetCommitCommandInput - {@link GetCommitCommandInput}
 * @returns {@link GetCommitCommandOutput}
 * @see {@link GetCommitCommandInput} for command's `input` shape.
 * @see {@link GetCommitCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for CodeCommitClient's `config` shape.
 *
 * @throws {@link CommitIdDoesNotExistException} (client fault)
 *
 * The specified commit ID does not exist.
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
export class GetCommitCommand extends command<GetCommitCommandInput, GetCommitCommandOutput>(
  _ep0,
  _mw0,
  "GetCommit",
  GetCommit$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetCommitInput;
      output: GetCommitOutput;
    };
    sdk: {
      input: GetCommitCommandInput;
      output: GetCommitCommandOutput;
    };
  };
}
