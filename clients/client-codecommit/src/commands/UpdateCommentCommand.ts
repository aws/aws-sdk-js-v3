// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateCommentInput, UpdateCommentOutput } from "../models/models_0";
import { UpdateComment$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateCommentCommand}.
 */
export interface UpdateCommentCommandInput extends UpdateCommentInput {}
/**
 * @public
 *
 * The output of {@link UpdateCommentCommand}.
 */
export interface UpdateCommentCommandOutput extends UpdateCommentOutput, __MetadataBearer {}

/**
 * Replaces the contents of a comment.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, UpdateCommentCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, UpdateCommentCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * // import type { CodeCommitClientConfig } from "@aws-sdk/client-codecommit";
 * const config = {}; // type is CodeCommitClientConfig
 * const client = new CodeCommitClient(config);
 * const input = { // UpdateCommentInput
 *   commentId: "STRING_VALUE", // required
 *   content: "STRING_VALUE", // required
 * };
 * const command = new UpdateCommentCommand(input);
 * const response = await client.send(command);
 * // { // UpdateCommentOutput
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
 * @param UpdateCommentCommandInput - {@link UpdateCommentCommandInput}
 * @returns {@link UpdateCommentCommandOutput}
 * @see {@link UpdateCommentCommandInput} for command's `input` shape.
 * @see {@link UpdateCommentCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for CodeCommitClient's `config` shape.
 *
 * @throws {@link CommentContentRequiredException} (client fault)
 *
 * The comment is empty. You must provide some content for a comment. The content cannot be null.
 *
 * @throws {@link CommentContentSizeLimitExceededException} (client fault)
 *
 * The comment is too large. Comments are limited to 10,240 characters.
 *
 * @throws {@link CommentDeletedException} (client fault)
 *
 * This comment has already been deleted. You cannot edit or delete a deleted comment.
 *
 * @throws {@link CommentDoesNotExistException} (client fault)
 *
 * No comment exists with the provided ID. Verify that you have used the correct ID, and then try again.
 *
 * @throws {@link CommentIdRequiredException} (client fault)
 *
 * The comment ID is missing or null. A comment ID is required.
 *
 * @throws {@link CommentNotCreatedByCallerException} (client fault)
 *
 * You cannot modify or delete this comment. Only comment authors can modify or delete their comments.
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
export class UpdateCommentCommand extends command<UpdateCommentCommandInput, UpdateCommentCommandOutput>(
  _ep0,
  _mw0,
  "UpdateComment",
  UpdateComment$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateCommentInput;
      output: UpdateCommentOutput;
    };
    sdk: {
      input: UpdateCommentCommandInput;
      output: UpdateCommentCommandOutput;
    };
  };
}
