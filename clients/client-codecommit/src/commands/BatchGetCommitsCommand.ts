// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { BatchGetCommitsInput, BatchGetCommitsOutput } from "../models/models_0";
import { BatchGetCommits$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link BatchGetCommitsCommand}.
 */
export interface BatchGetCommitsCommandInput extends BatchGetCommitsInput {}
/**
 * @public
 *
 * The output of {@link BatchGetCommitsCommand}.
 */
export interface BatchGetCommitsCommandOutput extends BatchGetCommitsOutput, __MetadataBearer {}

/**
 * Returns information about the contents of one or more commits in a repository.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, BatchGetCommitsCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, BatchGetCommitsCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * // import type { CodeCommitClientConfig } from "@aws-sdk/client-codecommit";
 * const config = {}; // type is CodeCommitClientConfig
 * const client = new CodeCommitClient(config);
 * const input = { // BatchGetCommitsInput
 *   commitIds: [ // CommitIdsInputList // required
 *     "STRING_VALUE",
 *   ],
 *   repositoryName: "STRING_VALUE", // required
 * };
 * const command = new BatchGetCommitsCommand(input);
 * const response = await client.send(command);
 * // { // BatchGetCommitsOutput
 * //   commits: [ // CommitObjectsList
 * //     { // Commit
 * //       commitId: "STRING_VALUE",
 * //       treeId: "STRING_VALUE",
 * //       parents: [ // ParentList
 * //         "STRING_VALUE",
 * //       ],
 * //       message: "STRING_VALUE",
 * //       author: { // UserInfo
 * //         name: "STRING_VALUE",
 * //         email: "STRING_VALUE",
 * //         date: "STRING_VALUE",
 * //       },
 * //       committer: {
 * //         name: "STRING_VALUE",
 * //         email: "STRING_VALUE",
 * //         date: "STRING_VALUE",
 * //       },
 * //       additionalData: "STRING_VALUE",
 * //     },
 * //   ],
 * //   errors: [ // BatchGetCommitsErrorsList
 * //     { // BatchGetCommitsError
 * //       commitId: "STRING_VALUE",
 * //       errorCode: "STRING_VALUE",
 * //       errorMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchGetCommitsCommandInput - {@link BatchGetCommitsCommandInput}
 * @returns {@link BatchGetCommitsCommandOutput}
 * @see {@link BatchGetCommitsCommandInput} for command's `input` shape.
 * @see {@link BatchGetCommitsCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for CodeCommitClient's `config` shape.
 *
 * @throws {@link CommitIdsLimitExceededException} (client fault)
 *
 * The maximum number of allowed commit IDs in a batch request is 100. Verify that your batch requests contains no more than 100 commit IDs, and then try again.
 *
 * @throws {@link CommitIdsListRequiredException} (client fault)
 *
 * A list of commit IDs is required, but was either not specified or the list was empty.
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
export class BatchGetCommitsCommand extends command<BatchGetCommitsCommandInput, BatchGetCommitsCommandOutput>(
  _ep0,
  _mw0,
  "BatchGetCommits",
  BatchGetCommits$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchGetCommitsInput;
      output: BatchGetCommitsOutput;
    };
    sdk: {
      input: BatchGetCommitsCommandInput;
      output: BatchGetCommitsCommandOutput;
    };
  };
}
