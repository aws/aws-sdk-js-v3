// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetCommentReactionsInput, GetCommentReactionsOutput } from "../models/models_0";
import { de_GetCommentReactionsCommand, se_GetCommentReactionsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetCommentReactionsCommand}.
 */
export interface GetCommentReactionsCommandInput extends GetCommentReactionsInput {}
/**
 * @public
 *
 * The output of {@link GetCommentReactionsCommand}.
 */
export interface GetCommentReactionsCommandOutput extends GetCommentReactionsOutput, __MetadataBearer {}

/**
 * <p>Returns information about reactions to a specified comment ID. Reactions from users who have been deleted will not be included in the count.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, GetCommentReactionsCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, GetCommentReactionsCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const input = { // GetCommentReactionsInput
 *   commentId: "STRING_VALUE", // required
 *   reactionUserArn: "STRING_VALUE",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new GetCommentReactionsCommand(input);
 * const response = await client.send(command);
 * // { // GetCommentReactionsOutput
 * //   reactionsForComment: [ // ReactionsForCommentList // required
 * //     { // ReactionForComment
 * //       reaction: { // ReactionValueFormats
 * //         emoji: "STRING_VALUE",
 * //         shortCode: "STRING_VALUE",
 * //         unicode: "STRING_VALUE",
 * //       },
 * //       reactionUsers: [ // ReactionUsersList
 * //         "STRING_VALUE",
 * //       ],
 * //       reactionsFromDeletedUsersCount: Number("int"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetCommentReactionsCommandInput - {@link GetCommentReactionsCommandInput}
 * @returns {@link GetCommentReactionsCommandOutput}
 * @see {@link GetCommentReactionsCommandInput} for command's `input` shape.
 * @see {@link GetCommentReactionsCommandOutput} for command's `response` shape.
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
 * @throws {@link InvalidContinuationTokenException} (client fault)
 *  <p>The specified continuation token is not valid.</p>
 *
 * @throws {@link InvalidMaxResultsException} (client fault)
 *  <p>The specified number of maximum results is not valid.</p>
 *
 * @throws {@link InvalidReactionUserArnException} (client fault)
 *  <p>The Amazon Resource Name (ARN) of the user or identity is not valid.</p>
 *
 * @throws {@link CodeCommitServiceException}
 * <p>Base exception class for all service exceptions from CodeCommit service.</p>
 *
 *
 * @public
 */
export class GetCommentReactionsCommand extends $Command
  .classBuilder<
    GetCommentReactionsCommandInput,
    GetCommentReactionsCommandOutput,
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
  .s("CodeCommit_20150413", "GetCommentReactions", {})
  .n("CodeCommitClient", "GetCommentReactionsCommand")
  .f(void 0, void 0)
  .ser(se_GetCommentReactionsCommand)
  .de(de_GetCommentReactionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetCommentReactionsInput;
      output: GetCommentReactionsOutput;
    };
    sdk: {
      input: GetCommentReactionsCommandInput;
      output: GetCommentReactionsCommandOutput;
    };
  };
}
