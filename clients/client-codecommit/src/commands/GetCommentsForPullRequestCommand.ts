// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetCommentsForPullRequestInput, GetCommentsForPullRequestOutput } from "../models/models_0";
import { de_GetCommentsForPullRequestCommand, se_GetCommentsForPullRequestCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetCommentsForPullRequestCommand}.
 */
export interface GetCommentsForPullRequestCommandInput extends GetCommentsForPullRequestInput {}
/**
 * @public
 *
 * The output of {@link GetCommentsForPullRequestCommand}.
 */
export interface GetCommentsForPullRequestCommandOutput extends GetCommentsForPullRequestOutput, __MetadataBearer {}

/**
 * <p>Returns comments made on a pull request.</p>
 *          <note>
 *             <p>Reaction counts might include numbers from user identities who were deleted after the reaction was made. For a count of
 *             reactions from active identities, use GetCommentReactions.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, GetCommentsForPullRequestCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, GetCommentsForPullRequestCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const input = { // GetCommentsForPullRequestInput
 *   pullRequestId: "STRING_VALUE", // required
 *   repositoryName: "STRING_VALUE",
 *   beforeCommitId: "STRING_VALUE",
 *   afterCommitId: "STRING_VALUE",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new GetCommentsForPullRequestCommand(input);
 * const response = await client.send(command);
 * // { // GetCommentsForPullRequestOutput
 * //   commentsForPullRequestData: [ // CommentsForPullRequestData
 * //     { // CommentsForPullRequest
 * //       pullRequestId: "STRING_VALUE",
 * //       repositoryName: "STRING_VALUE",
 * //       beforeCommitId: "STRING_VALUE",
 * //       afterCommitId: "STRING_VALUE",
 * //       beforeBlobId: "STRING_VALUE",
 * //       afterBlobId: "STRING_VALUE",
 * //       location: { // Location
 * //         filePath: "STRING_VALUE",
 * //         filePosition: Number("long"),
 * //         relativeFileVersion: "BEFORE" || "AFTER",
 * //       },
 * //       comments: [ // Comments
 * //         { // Comment
 * //           commentId: "STRING_VALUE",
 * //           content: "STRING_VALUE",
 * //           inReplyTo: "STRING_VALUE",
 * //           creationDate: new Date("TIMESTAMP"),
 * //           lastModifiedDate: new Date("TIMESTAMP"),
 * //           authorArn: "STRING_VALUE",
 * //           deleted: true || false,
 * //           clientRequestToken: "STRING_VALUE",
 * //           callerReactions: [ // CallerReactions
 * //             "STRING_VALUE",
 * //           ],
 * //           reactionCounts: { // ReactionCountsMap
 * //             "<keys>": Number("int"),
 * //           },
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetCommentsForPullRequestCommandInput - {@link GetCommentsForPullRequestCommandInput}
 * @returns {@link GetCommentsForPullRequestCommandOutput}
 * @see {@link GetCommentsForPullRequestCommandInput} for command's `input` shape.
 * @see {@link GetCommentsForPullRequestCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for CodeCommitClient's `config` shape.
 *
 * @throws {@link CommitDoesNotExistException} (client fault)
 *  <p>The specified commit does not exist or no commit was specified, and the specified repository has no default branch.</p>
 *
 * @throws {@link CommitIdRequiredException} (client fault)
 *  <p>A commit ID was not specified.</p>
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
 * @throws {@link InvalidCommitIdException} (client fault)
 *  <p>The specified commit ID is not valid.</p>
 *
 * @throws {@link InvalidContinuationTokenException} (client fault)
 *  <p>The specified continuation token is not valid.</p>
 *
 * @throws {@link InvalidMaxResultsException} (client fault)
 *  <p>The specified number of maximum results is not valid.</p>
 *
 * @throws {@link InvalidPullRequestIdException} (client fault)
 *  <p>The pull request ID is not valid. Make sure that you have provided the full ID and that the pull request is in the specified repository, and then try again.</p>
 *
 * @throws {@link InvalidRepositoryNameException} (client fault)
 *  <p>A specified repository name is not valid.</p>
 *          <note>
 *             <p>This exception occurs only when a specified repository name is not valid. Other
 *                 exceptions occur when a required repository parameter is missing, or when a
 *                 specified repository does not exist.</p>
 *          </note>
 *
 * @throws {@link PullRequestDoesNotExistException} (client fault)
 *  <p>The pull request ID could not be found. Make sure that you have specified the correct repository name and pull request ID, and then try again.</p>
 *
 * @throws {@link PullRequestIdRequiredException} (client fault)
 *  <p>A pull request ID is required, but none was provided.</p>
 *
 * @throws {@link RepositoryDoesNotExistException} (client fault)
 *  <p>The specified repository does not exist.</p>
 *
 * @throws {@link RepositoryNameRequiredException} (client fault)
 *  <p>A repository name is required, but was not specified.</p>
 *
 * @throws {@link RepositoryNotAssociatedWithPullRequestException} (client fault)
 *  <p>The repository does not contain any pull requests with that pull request ID. Use GetPullRequest to verify the correct repository name for the pull request ID.</p>
 *
 * @throws {@link CodeCommitServiceException}
 * <p>Base exception class for all service exceptions from CodeCommit service.</p>
 *
 * @public
 */
export class GetCommentsForPullRequestCommand extends $Command
  .classBuilder<
    GetCommentsForPullRequestCommandInput,
    GetCommentsForPullRequestCommandOutput,
    CodeCommitClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: CodeCommitClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CodeCommit_20150413", "GetCommentsForPullRequest", {})
  .n("CodeCommitClient", "GetCommentsForPullRequestCommand")
  .f(void 0, void 0)
  .ser(se_GetCommentsForPullRequestCommand)
  .de(de_GetCommentsForPullRequestCommand)
  .build() {}
