// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListFileCommitHistoryRequest, ListFileCommitHistoryResponse } from "../models/models_0";
import { ListFileCommitHistory$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Retrieves a list of commits and changes to a specified file.</p>
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
 *  <p>The specified commit does not exist or no commit was specified, and the specified repository has no default branch.</p>
 *
 * @throws {@link CommitRequiredException} (client fault)
 *  <p>A commit was not specified.</p>
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
 * @throws {@link InvalidCommitException} (client fault)
 *  <p>The specified commit is not valid.</p>
 *
 * @throws {@link InvalidContinuationTokenException} (client fault)
 *  <p>The specified continuation token is not valid.</p>
 *
 * @throws {@link InvalidMaxResultsException} (client fault)
 *  <p>The specified number of maximum results is not valid.</p>
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
export class ListFileCommitHistoryCommand extends $Command
  .classBuilder<
    ListFileCommitHistoryCommandInput,
    ListFileCommitHistoryCommandOutput,
    CodeCommitClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeCommitClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CodeCommit_20150413", "ListFileCommitHistory", {})
  .n("CodeCommitClient", "ListFileCommitHistoryCommand")
  .sc(ListFileCommitHistory$)
  .build() {
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
