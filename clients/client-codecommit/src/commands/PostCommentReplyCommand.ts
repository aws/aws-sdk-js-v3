// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PostCommentReplyInput, PostCommentReplyOutput } from "../models/models_0";
import { PostCommentReply$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PostCommentReplyCommand}.
 */
export interface PostCommentReplyCommandInput extends PostCommentReplyInput {}
/**
 * @public
 *
 * The output of {@link PostCommentReplyCommand}.
 */
export interface PostCommentReplyCommandOutput extends PostCommentReplyOutput, __MetadataBearer {}

/**
 * Posts a comment in reply to an existing comment on a comparison between commits or a pull request.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, PostCommentReplyCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, PostCommentReplyCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * // import type { CodeCommitClientConfig } from "@aws-sdk/client-codecommit";
 * const config = {}; // type is CodeCommitClientConfig
 * const client = new CodeCommitClient(config);
 * const input = { // PostCommentReplyInput
 *   inReplyTo: "STRING_VALUE", // required
 *   clientRequestToken: "STRING_VALUE",
 *   content: "STRING_VALUE", // required
 * };
 * const command = new PostCommentReplyCommand(input);
 * const response = await client.send(command);
 * // { // PostCommentReplyOutput
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
 * @param PostCommentReplyCommandInput - {@link PostCommentReplyCommandInput}
 * @returns {@link PostCommentReplyCommandOutput}
 * @see {@link PostCommentReplyCommandInput} for command's `input` shape.
 * @see {@link PostCommentReplyCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for CodeCommitClient's `config` shape.
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
 * @throws {@link CommentDoesNotExistException} (client fault)
 *
 * No comment exists with the provided ID. Verify that you have used the correct ID, and then try again.
 *
 * @throws {@link CommentIdRequiredException} (client fault)
 *
 * The comment ID is missing or null. A comment ID is required.
 *
 * @throws {@link IdempotencyParameterMismatchException} (client fault)
 *
 * The client request token is not valid. Either the token is not in a valid format, or the token has been used in a previous request and cannot be reused.
 *
 * @throws {@link InvalidClientRequestTokenException} (client fault)
 *
 * The client request token is not valid.
 *
 * @throws {@link InvalidCommentIdException} (client fault)
 *
 * The comment ID is not in a valid format. Make sure that you have provided the full comment ID.
 *
 * @throws {@link CodeCommitServiceException}
 *
 * Base exception class for all service exceptions from CodeCommit service.
 *
 * @public
 */
export class PostCommentReplyCommand extends command<PostCommentReplyCommandInput, PostCommentReplyCommandOutput>(
  _ep0,
  _mw0,
  "PostCommentReply",
  PostCommentReply$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PostCommentReplyInput;
      output: PostCommentReplyOutput;
    };
    sdk: {
      input: PostCommentReplyCommandInput;
      output: PostCommentReplyCommandOutput;
    };
  };
}
