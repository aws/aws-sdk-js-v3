// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteCommentContentInput, DeleteCommentContentOutput } from "../models/models_0";
import { de_DeleteCommentContentCommand, se_DeleteCommentContentCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteCommentContentCommand}.
 */
export interface DeleteCommentContentCommandInput extends DeleteCommentContentInput {}
/**
 * @public
 *
 * The output of {@link DeleteCommentContentCommand}.
 */
export interface DeleteCommentContentCommandOutput extends DeleteCommentContentOutput, __MetadataBearer {}

/**
 * <p>Deletes the content of a comment made on a change, file, or commit in a repository.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, DeleteCommentContentCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, DeleteCommentContentCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * // import type { CodeCommitClientConfig } from "@aws-sdk/client-codecommit";
 * const config = {}; // type is CodeCommitClientConfig
 * const client = new CodeCommitClient(config);
 * const input = { // DeleteCommentContentInput
 *   commentId: "STRING_VALUE", // required
 * };
 * const command = new DeleteCommentContentCommand(input);
 * const response = await client.send(command);
 * // { // DeleteCommentContentOutput
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
 * @param DeleteCommentContentCommandInput - {@link DeleteCommentContentCommandInput}
 * @returns {@link DeleteCommentContentCommandOutput}
 * @see {@link DeleteCommentContentCommandInput} for command's `input` shape.
 * @see {@link DeleteCommentContentCommandOutput} for command's `response` shape.
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
 * @throws {@link CodeCommitServiceException}
 * <p>Base exception class for all service exceptions from CodeCommit service.</p>
 *
 *
 * @public
 */
export class DeleteCommentContentCommand extends $Command
  .classBuilder<
    DeleteCommentContentCommandInput,
    DeleteCommentContentCommandOutput,
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
  .s("CodeCommit_20150413", "DeleteCommentContent", {})
  .n("CodeCommitClient", "DeleteCommentContentCommand")
  .f(void 0, void 0)
  .ser(se_DeleteCommentContentCommand)
  .de(de_DeleteCommentContentCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteCommentContentInput;
      output: DeleteCommentContentOutput;
    };
    sdk: {
      input: DeleteCommentContentCommandInput;
      output: DeleteCommentContentCommandOutput;
    };
  };
}
