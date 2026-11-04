// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetCommentsForPullRequestInput, GetCommentsForPullRequestOutput } from "../models/models_0";
import { GetCommentsForPullRequest$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Returns comments made on a pull request.
 *
 * > **Note:** Reaction counts might include numbers from user identities who were deleted after the reaction was made. For a count of reactions from active identities, use GetCommentReactions.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, GetCommentsForPullRequestCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, GetCommentsForPullRequestCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * // import type { CodeCommitClientConfig } from "@aws-sdk/client-codecommit";
 * const config = {}; // type is CodeCommitClientConfig
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
 * @throws {@link InvalidCommitIdException} (client fault)
 *
 * The specified commit ID is not valid.
 *
 * @throws {@link InvalidContinuationTokenException} (client fault)
 *
 * The specified continuation token is not valid.
 *
 * @throws {@link InvalidMaxResultsException} (client fault)
 *
 * The specified number of maximum results is not valid.
 *
 * @throws {@link InvalidPullRequestIdException} (client fault)
 *
 * The pull request ID is not valid. Make sure that you have provided the full ID and that the pull request is in the specified repository, and then try again.
 *
 * @throws {@link InvalidRepositoryNameException} (client fault)
 *
 * A specified repository name is not valid.
 *
 * > **Note:** This exception occurs only when a specified repository name is not valid. Other exceptions occur when a required repository parameter is missing, or when a specified repository does not exist.
 *
 * @throws {@link PullRequestDoesNotExistException} (client fault)
 *
 * The pull request ID could not be found. Make sure that you have specified the correct repository name and pull request ID, and then try again.
 *
 * @throws {@link PullRequestIdRequiredException} (client fault)
 *
 * A pull request ID is required, but none was provided.
 *
 * @throws {@link RepositoryDoesNotExistException} (client fault)
 *
 * The specified repository does not exist.
 *
 * @throws {@link RepositoryNameRequiredException} (client fault)
 *
 * A repository name is required, but was not specified.
 *
 * @throws {@link RepositoryNotAssociatedWithPullRequestException} (client fault)
 *
 * The repository does not contain any pull requests with that pull request ID. Use GetPullRequest to verify the correct repository name for the pull request ID.
 *
 * @throws {@link CodeCommitServiceException}
 *
 * Base exception class for all service exceptions from CodeCommit service.
 *
 * @public
 */
export class GetCommentsForPullRequestCommand extends command<GetCommentsForPullRequestCommandInput, GetCommentsForPullRequestCommandOutput>(
  _ep0,
  _mw0,
  "GetCommentsForPullRequest",
  GetCommentsForPullRequest$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetCommentsForPullRequestInput;
      output: GetCommentsForPullRequestOutput;
    };
    sdk: {
      input: GetCommentsForPullRequestCommandInput;
      output: GetCommentsForPullRequestCommandOutput;
    };
  };
}
