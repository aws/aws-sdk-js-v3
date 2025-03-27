// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListPullRequestsInput, ListPullRequestsOutput } from "../models/models_1";
import { de_ListPullRequestsCommand, se_ListPullRequestsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListPullRequestsCommand}.
 */
export interface ListPullRequestsCommandInput extends ListPullRequestsInput {}
/**
 * @public
 *
 * The output of {@link ListPullRequestsCommand}.
 */
export interface ListPullRequestsCommandOutput extends ListPullRequestsOutput, __MetadataBearer {}

/**
 * <p>Returns a list of pull requests for a specified repository. The return list can be refined by pull request
 *         status or pull request author ARN.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, ListPullRequestsCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, ListPullRequestsCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const input = { // ListPullRequestsInput
 *   repositoryName: "STRING_VALUE", // required
 *   authorArn: "STRING_VALUE",
 *   pullRequestStatus: "OPEN" || "CLOSED",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListPullRequestsCommand(input);
 * const response = await client.send(command);
 * // { // ListPullRequestsOutput
 * //   pullRequestIds: [ // PullRequestIdList // required
 * //     "STRING_VALUE",
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListPullRequestsCommandInput - {@link ListPullRequestsCommandInput}
 * @returns {@link ListPullRequestsCommandOutput}
 * @see {@link ListPullRequestsCommandInput} for command's `input` shape.
 * @see {@link ListPullRequestsCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for CodeCommitClient's `config` shape.
 *
 * @throws {@link AuthorDoesNotExistException} (client fault)
 *  <p>The specified Amazon Resource Name (ARN) does not exist in the Amazon Web Services account.</p>
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
 * @throws {@link InvalidAuthorArnException} (client fault)
 *  <p>The Amazon Resource Name (ARN) is not valid. Make sure that you have provided the full ARN for the author of the pull request, and then try again.</p>
 *
 * @throws {@link InvalidContinuationTokenException} (client fault)
 *  <p>The specified continuation token is not valid.</p>
 *
 * @throws {@link InvalidMaxResultsException} (client fault)
 *  <p>The specified number of maximum results is not valid.</p>
 *
 * @throws {@link InvalidPullRequestStatusException} (client fault)
 *  <p>The pull request status is not valid. The only valid values are <code>OPEN</code> and <code>CLOSED</code>.</p>
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
 * @throws {@link CodeCommitServiceException}
 * <p>Base exception class for all service exceptions from CodeCommit service.</p>
 *
 *
 * @public
 */
export class ListPullRequestsCommand extends $Command
  .classBuilder<
    ListPullRequestsCommandInput,
    ListPullRequestsCommandOutput,
    CodeCommitClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeCommitClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CodeCommit_20150413", "ListPullRequests", {})
  .n("CodeCommitClient", "ListPullRequestsCommand")
  .f(void 0, void 0)
  .ser(se_ListPullRequestsCommand)
  .de(de_ListPullRequestsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPullRequestsInput;
      output: ListPullRequestsOutput;
    };
    sdk: {
      input: ListPullRequestsCommandInput;
      output: ListPullRequestsCommandOutput;
    };
  };
}
