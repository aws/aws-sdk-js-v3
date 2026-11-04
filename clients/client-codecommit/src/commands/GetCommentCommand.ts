// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetCommentInput, GetCommentOutput } from "../models/models_0";
import { GetComment$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetCommentCommand}.
 */
export interface GetCommentCommandInput extends GetCommentInput {}
/**
 * @public
 *
 * The output of {@link GetCommentCommand}.
 */
export interface GetCommentCommandOutput extends GetCommentOutput, __MetadataBearer {}

/**
 * Returns the content of a comment made on a change, file, or commit in a repository.
 *
 * > **Note:** Reaction counts might include numbers from user identities who were deleted after the reaction was made. For a count of reactions from active identities, use GetCommentReactions.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, GetCommentCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, GetCommentCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * // import type { CodeCommitClientConfig } from "@aws-sdk/client-codecommit";
 * const config = {}; // type is CodeCommitClientConfig
 * const client = new CodeCommitClient(config);
 * const input = { // GetCommentInput
 *   commentId: "STRING_VALUE", // required
 * };
 * const command = new GetCommentCommand(input);
 * const response = await client.send(command);
 * // { // GetCommentOutput
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
 * @param GetCommentCommandInput - {@link GetCommentCommandInput}
 * @returns {@link GetCommentCommandOutput}
 * @see {@link GetCommentCommandInput} for command's `input` shape.
 * @see {@link GetCommentCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for CodeCommitClient's `config` shape.
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
export class GetCommentCommand extends command<GetCommentCommandInput, GetCommentCommandOutput>(
  _ep0,
  _mw0,
  "GetComment",
  GetComment$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetCommentInput;
      output: GetCommentOutput;
    };
    sdk: {
      input: GetCommentCommandInput;
      output: GetCommentCommandOutput;
    };
  };
}
