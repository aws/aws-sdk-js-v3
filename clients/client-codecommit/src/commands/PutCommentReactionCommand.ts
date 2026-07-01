// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutCommentReactionInput } from "../models/models_0";
import { PutCommentReaction$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutCommentReactionCommand}.
 */
export interface PutCommentReactionCommandInput extends PutCommentReactionInput {}
/**
 * @public
 *
 * The output of {@link PutCommentReactionCommand}.
 */
export interface PutCommentReactionCommandOutput extends __MetadataBearer {}

/**
 * <p>Adds or updates a reaction to a specified comment for the user whose identity is used to make the request. You can only add or
 *         update a reaction for yourself. You cannot add, modify, or delete a reaction for another user.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, PutCommentReactionCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, PutCommentReactionCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * // import type { CodeCommitClientConfig } from "@aws-sdk/client-codecommit";
 * const config = {}; // type is CodeCommitClientConfig
 * const client = new CodeCommitClient(config);
 * const input = { // PutCommentReactionInput
 *   commentId: "STRING_VALUE", // required
 *   reactionValue: "STRING_VALUE", // required
 * };
 * const command = new PutCommentReactionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutCommentReactionCommandInput - {@link PutCommentReactionCommandInput}
 * @returns {@link PutCommentReactionCommandOutput}
 * @see {@link PutCommentReactionCommandInput} for command's `input` shape.
 * @see {@link PutCommentReactionCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for CodeCommitClient's `config` shape.
 *
 * @throws {@link CommentDeletedException} (client fault)
 *  <p>This comment has already been deleted. You cannot edit or delete a deleted comment.</p>
 *
 * @throws {@link CommentDoesNotExistException} (client fault)
 *  <p>No comment exists with the provided ID. Verify that you have used the correct ID, and
 *             then try again.</p>
 *
 * @throws {@link CommentIdRequiredException} (client fault)
 *  <p>The comment ID is missing or null. A comment ID is required.</p>
 *
 * @throws {@link InvalidCommentIdException} (client fault)
 *  <p>The comment ID is not in a valid format. Make sure that you have provided the full comment ID.</p>
 *
 * @throws {@link InvalidReactionValueException} (client fault)
 *  <p>The value of the reaction is not valid. For more information, see the <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/welcome.html">CodeCommit User Guide</a>.</p>
 *
 * @throws {@link ReactionLimitExceededException} (client fault)
 *  <p>The number of reactions has been exceeded. Reactions are limited to one reaction per user for each individual comment ID.</p>
 *
 * @throws {@link ReactionValueRequiredException} (client fault)
 *  <p>A reaction value is required. </p>
 *
 * @throws {@link CodeCommitServiceException}
 * <p>Base exception class for all service exceptions from CodeCommit service.</p>
 *
 *
 * @public
 */
export class PutCommentReactionCommand extends command<PutCommentReactionCommandInput, PutCommentReactionCommandOutput>(
  _ep0,
  _mw0,
  "PutCommentReaction",
  PutCommentReaction$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutCommentReactionInput;
      output: {};
    };
    sdk: {
      input: PutCommentReactionCommandInput;
      output: PutCommentReactionCommandOutput;
    };
  };
}
