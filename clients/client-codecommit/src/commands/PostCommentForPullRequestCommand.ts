// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PostCommentForPullRequestInput, PostCommentForPullRequestOutput } from "../models/models_0";
import { PostCommentForPullRequest$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PostCommentForPullRequestCommand}.
 */
export interface PostCommentForPullRequestCommandInput extends PostCommentForPullRequestInput {}
/**
 * @public
 *
 * The output of {@link PostCommentForPullRequestCommand}.
 */
export interface PostCommentForPullRequestCommandOutput extends PostCommentForPullRequestOutput, __MetadataBearer {}

/**
 * Posts a comment on a pull request.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, PostCommentForPullRequestCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, PostCommentForPullRequestCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * // import type { CodeCommitClientConfig } from "@aws-sdk/client-codecommit";
 * const config = {}; // type is CodeCommitClientConfig
 * const client = new CodeCommitClient(config);
 * const input = { // PostCommentForPullRequestInput
 *   pullRequestId: "STRING_VALUE", // required
 *   repositoryName: "STRING_VALUE", // required
 *   beforeCommitId: "STRING_VALUE", // required
 *   afterCommitId: "STRING_VALUE", // required
 *   location: { // Location
 *     filePath: "STRING_VALUE",
 *     filePosition: Number("long"),
 *     relativeFileVersion: "BEFORE" || "AFTER",
 *   },
 *   content: "STRING_VALUE", // required
 *   clientRequestToken: "STRING_VALUE",
 * };
 * const command = new PostCommentForPullRequestCommand(input);
 * const response = await client.send(command);
 * // { // PostCommentForPullRequestOutput
 * //   repositoryName: "STRING_VALUE",
 * //   pullRequestId: "STRING_VALUE",
 * //   beforeCommitId: "STRING_VALUE",
 * //   afterCommitId: "STRING_VALUE",
 * //   beforeBlobId: "STRING_VALUE",
 * //   afterBlobId: "STRING_VALUE",
 * //   location: { // Location
 * //     filePath: "STRING_VALUE",
 * //     filePosition: Number("long"),
 * //     relativeFileVersion: "BEFORE" || "AFTER",
 * //   },
 * //   comment: { // Comment
 * //     commentId: "STRING_VALUE",
 * //     content: "STRING_VALUE",
 * //     inReplyTo: "STRING_VALUE",
 * //     creationDate: new Date("TIMESTAMP"),
 * //     lastModifiedDate: new Date("TIMESTAMP"),
 * //     authorArn: "STRING_VALUE",
 * //     deleted: true || false,
 * //     clientRequestToken: "STRING_VALUE",
 * //     callerReactions: [ // CallerReactions
 * //       "STRING_VALUE",
 * //     ],
 * //     reactionCounts: { // ReactionCountsMap
 * //       "<keys>": Number("int"),
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param PostCommentForPullRequestCommandInput - {@link PostCommentForPullRequestCommandInput}
 * @returns {@link PostCommentForPullRequestCommandOutput}
 * @see {@link PostCommentForPullRequestCommandInput} for command's `input` shape.
 * @see {@link PostCommentForPullRequestCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for CodeCommitClient's `config` shape.
 *
 * @throws {@link BeforeCommitIdAndAfterCommitIdAreSameException} (client fault)
 *
 * The before commit ID and the after commit ID are the same, which is not valid. The before commit ID and the after commit ID must be different commit IDs.
 *
 * @throws {@link ClientRequestTokenRequiredException} (client fault)
 *
 * A client request token is required. A client request token is an unique, client-generated idempotency token that, when provided in a request, ensures the request cannot be repeated with a changed parameter. If a request is received with the same parameters and a token is included, the request returns information about the initial request that used that token.
 *
 * @throws {@link CommentContentRequiredException} (client fault)
 *
 * The comment is empty. You must provide some content for a comment. The content cannot be null.
 *
 * @throws {@link CommentContentSizeLimitExceededException} (client fault)
 *
 * The comment is too large. Comments are limited to 10,240 characters.
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
 * @throws {@link IdempotencyParameterMismatchException} (client fault)
 *
 * The client request token is not valid. Either the token is not in a valid format, or the token has been used in a previous request and cannot be reused.
 *
 * @throws {@link InvalidClientRequestTokenException} (client fault)
 *
 * The client request token is not valid.
 *
 * @throws {@link InvalidCommitIdException} (client fault)
 *
 * The specified commit ID is not valid.
 *
 * @throws {@link InvalidFileLocationException} (client fault)
 *
 * The location of the file is not valid. Make sure that you include the file name and extension.
 *
 * @throws {@link InvalidFilePositionException} (client fault)
 *
 * The position is not valid. Make sure that the line number exists in the version of the file you want to comment on.
 *
 * @throws {@link InvalidPathException} (client fault)
 *
 * The specified path is not valid.
 *
 * @throws {@link InvalidPullRequestIdException} (client fault)
 *
 * The pull request ID is not valid. Make sure that you have provided the full ID and that the pull request is in the specified repository, and then try again.
 *
 * @throws {@link InvalidRelativeFileVersionEnumException} (client fault)
 *
 * Either the enum is not in a valid format, or the specified file version enum is not valid in respect to the current file version.
 *
 * @throws {@link InvalidRepositoryNameException} (client fault)
 *
 * A specified repository name is not valid.
 *
 * > **Note:** This exception occurs only when a specified repository name is not valid. Other exceptions occur when a required repository parameter is missing, or when a specified repository does not exist.
 *
 * @throws {@link PathDoesNotExistException} (client fault)
 *
 * The specified path does not exist.
 *
 * @throws {@link PathRequiredException} (client fault)
 *
 * The folderPath for a location cannot be null.
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
export class PostCommentForPullRequestCommand extends command<PostCommentForPullRequestCommandInput, PostCommentForPullRequestCommandOutput>(
  _ep0,
  _mw0,
  "PostCommentForPullRequest",
  PostCommentForPullRequest$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PostCommentForPullRequestInput;
      output: PostCommentForPullRequestOutput;
    };
    sdk: {
      input: PostCommentForPullRequestCommandInput;
      output: PostCommentForPullRequestCommandOutput;
    };
  };
}
