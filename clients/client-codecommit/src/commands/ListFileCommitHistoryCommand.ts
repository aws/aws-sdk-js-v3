// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListFileCommitHistoryRequest, ListFileCommitHistoryResponse } from "../models/models_0";
import { ListFileCommitHistory$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListFileCommitHistoryCommand}.
 */
export interface ListFileCommitHistoryCommandInput extends ListFileCommitHistoryRequest {}
/**
 * @public
 *
 * The output of {@link ListFileCommitHistoryCommand}.
 */
export interface ListFileCommitHistoryCommandOutput extends ListFileCommitHistoryResponse, __MetadataBearer {}

/**
 * Retrieves a list of commits and changes to a specified file.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, ListFileCommitHistoryCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, ListFileCommitHistoryCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * // import type { CodeCommitClientConfig } from "@aws-sdk/client-codecommit";
 * const config = {}; // type is CodeCommitClientConfig
 * const client = new CodeCommitClient(config);
 * const input = { // ListFileCommitHistoryRequest
 *   repositoryName: "STRING_VALUE", // required
 *   commitSpecifier: "STRING_VALUE",
 *   filePath: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListFileCommitHistoryCommand(input);
 * const response = await client.send(command);
 * // { // ListFileCommitHistoryResponse
 * //   revisionDag: [ // RevisionDag // required
 * //     { // FileVersion
 * //       commit: { // Commit
 * //         commitId: "STRING_VALUE",
 * //         treeId: "STRING_VALUE",
 * //         parents: [ // ParentList
 * //           "STRING_VALUE",
 * //         ],
 * //         message: "STRING_VALUE",
 * //         author: { // UserInfo
 * //           name: "STRING_VALUE",
 * //           email: "STRING_VALUE",
 * //           date: "STRING_VALUE",
 * //         },
 * //         committer: {
 * //           name: "STRING_VALUE",
 * //           email: "STRING_VALUE",
 * //           date: "STRING_VALUE",
 * //         },
 * //         additionalData: "STRING_VALUE",
 * //       },
 * //       blobId: "STRING_VALUE",
 * //       path: "STRING_VALUE",
 * //       revisionChildren: [ // RevisionChildren
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListFileCommitHistoryCommandInput - {@link ListFileCommitHistoryCommandInput}
 * @returns {@link ListFileCommitHistoryCommandOutput}
 * @see {@link ListFileCommitHistoryCommandInput} for command's `input` shape.
 * @see {@link ListFileCommitHistoryCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for CodeCommitClient's `config` shape.
 *
 * @throws {@link CommitDoesNotExistException} (client fault)
 *
 * The specified commit does not exist or no commit was specified, and the specified repository has no default branch.
 *
 * @throws {@link CommitRequiredException} (client fault)
 *
 * A commit was not specified.
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
 * @throws {@link InvalidCommitException} (client fault)
 *
 * The specified commit is not valid.
 *
 * @throws {@link InvalidContinuationTokenException} (client fault)
 *
 * The specified continuation token is not valid.
 *
 * @throws {@link InvalidMaxResultsException} (client fault)
 *
 * The specified number of maximum results is not valid.
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
export class ListFileCommitHistoryCommand extends command<ListFileCommitHistoryCommandInput, ListFileCommitHistoryCommandOutput>(
  _ep0,
  _mw0,
  "ListFileCommitHistory",
  ListFileCommitHistory$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListFileCommitHistoryRequest;
      output: ListFileCommitHistoryResponse;
    };
    sdk: {
      input: ListFileCommitHistoryCommandInput;
      output: ListFileCommitHistoryCommandOutput;
    };
  };
}
