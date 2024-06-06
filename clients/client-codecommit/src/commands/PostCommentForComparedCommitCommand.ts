// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { PostCommentForComparedCommitInput, PostCommentForComparedCommitOutput } from "../models/models_1";
import {
  de_PostCommentForComparedCommitCommand,
  se_PostCommentForComparedCommitCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PostCommentForComparedCommitCommand}.
 */
export interface PostCommentForComparedCommitCommandInput extends PostCommentForComparedCommitInput {}
/**
 * @public
 *
 * The output of {@link PostCommentForComparedCommitCommand}.
 */
export interface PostCommentForComparedCommitCommandOutput
  extends PostCommentForComparedCommitOutput,
    __MetadataBearer {}

/**
 * <p>Posts a comment on the comparison between two commits.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, PostCommentForComparedCommitCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, PostCommentForComparedCommitCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const input = { // PostCommentForComparedCommitInput
 *   repositoryName: "STRING_VALUE", // required
 *   beforeCommitId: "STRING_VALUE",
 *   afterCommitId: "STRING_VALUE", // required
 *   location: { // Location
 *     filePath: "STRING_VALUE",
 *     filePosition: Number("long"),
 *     relativeFileVersion: "BEFORE" || "AFTER",
 *   },
 *   content: "STRING_VALUE", // required
 *   clientRequestToken: "STRING_VALUE",
 * };
 * const command = new PostCommentForComparedCommitCommand(input);
 * const response = await client.send(command);
 * // { // PostCommentForComparedCommitOutput
 * //   repositoryName: "STRING_VALUE",
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
 * @param PostCommentForComparedCommitCommandInput - {@link PostCommentForComparedCommitCommandInput}
 * @returns {@link PostCommentForComparedCommitCommandOutput}
 * @see {@link PostCommentForComparedCommitCommandInput} for command's `input` shape.
 * @see {@link PostCommentForComparedCommitCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for CodeCommitClient's `config` shape.
 *
 * @throws {@link BeforeCommitIdAndAfterCommitIdAreSameException} (client fault)
 *  <p>The before commit ID and the after commit ID are the same, which is not valid. The before commit ID and the after commit ID must be different commit IDs.</p>
 *
 * @throws {@link ClientRequestTokenRequiredException} (client fault)
 *  <p>A client request token is required. A client request token is an unique,
 *             client-generated idempotency token that, when provided in a request, ensures the request
 *             cannot be repeated with a changed parameter. If a request is received with the same
 *             parameters and a token is included, the request returns information about the initial
 *             request that used that token.</p>
 *
 * @throws {@link CommentContentRequiredException} (client fault)
 *  <p>The comment is empty. You must provide some content for a comment. The content cannot be null.</p>
 *
 * @throws {@link CommentContentSizeLimitExceededException} (client fault)
 *  <p>The comment is too large. Comments are limited to 10,240 characters.</p>
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
 * @throws {@link IdempotencyParameterMismatchException} (client fault)
 *  <p>The client request token is not valid. Either the token is not in a valid format, or
 *             the token has been used in a previous request and cannot be reused.</p>
 *
 * @throws {@link InvalidClientRequestTokenException} (client fault)
 *  <p>The client request token is not valid.</p>
 *
 * @throws {@link InvalidCommitIdException} (client fault)
 *  <p>The specified commit ID is not valid.</p>
 *
 * @throws {@link InvalidFileLocationException} (client fault)
 *  <p>The location of the file is not valid. Make sure that you include the file name and
 *             extension.</p>
 *
 * @throws {@link InvalidFilePositionException} (client fault)
 *  <p>The position is not valid. Make sure that the line number exists in the version of the file you want to comment on.</p>
 *
 * @throws {@link InvalidPathException} (client fault)
 *  <p>The specified path is not valid.</p>
 *
 * @throws {@link InvalidRelativeFileVersionEnumException} (client fault)
 *  <p>Either the enum is not in a valid format, or the specified file version enum is not valid in respect to the current file version.</p>
 *
 * @throws {@link InvalidRepositoryNameException} (client fault)
 *  <p>A specified repository name is not valid.</p>
 *          <note>
 *             <p>This exception occurs only when a specified repository name is not valid. Other
 *                 exceptions occur when a required repository parameter is missing, or when a
 *                 specified repository does not exist.</p>
 *          </note>
 *
 * @throws {@link PathDoesNotExistException} (client fault)
 *  <p>The specified path does not exist.</p>
 *
 * @throws {@link PathRequiredException} (client fault)
 *  <p>The folderPath for a location cannot be null.</p>
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
 * @public
 */
export class PostCommentForComparedCommitCommand extends $Command
  .classBuilder<
    PostCommentForComparedCommitCommandInput,
    PostCommentForComparedCommitCommandOutput,
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
  .s("CodeCommit_20150413", "PostCommentForComparedCommit", {})
  .n("CodeCommitClient", "PostCommentForComparedCommitCommand")
  .f(void 0, void 0)
  .ser(se_PostCommentForComparedCommitCommand)
  .de(de_PostCommentForComparedCommitCommand)
  .build() {}
