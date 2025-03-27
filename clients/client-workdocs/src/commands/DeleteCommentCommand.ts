// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteCommentRequest, DeleteCommentRequestFilterSensitiveLog } from "../models/models_0";
import { de_DeleteCommentCommand, se_DeleteCommentCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WorkDocsClientResolvedConfig } from "../WorkDocsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteCommentCommand}.
 */
export interface DeleteCommentCommandInput extends DeleteCommentRequest {}
/**
 * @public
 *
 * The output of {@link DeleteCommentCommand}.
 */
export interface DeleteCommentCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the specified comment from the document version.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkDocsClient, DeleteCommentCommand } from "@aws-sdk/client-workdocs"; // ES Modules import
 * // const { WorkDocsClient, DeleteCommentCommand } = require("@aws-sdk/client-workdocs"); // CommonJS import
 * const client = new WorkDocsClient(config);
 * const input = { // DeleteCommentRequest
 *   AuthenticationToken: "STRING_VALUE",
 *   DocumentId: "STRING_VALUE", // required
 *   VersionId: "STRING_VALUE", // required
 *   CommentId: "STRING_VALUE", // required
 * };
 * const command = new DeleteCommentCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteCommentCommandInput - {@link DeleteCommentCommandInput}
 * @returns {@link DeleteCommentCommandOutput}
 * @see {@link DeleteCommentCommandInput} for command's `input` shape.
 * @see {@link DeleteCommentCommandOutput} for command's `response` shape.
 * @see {@link WorkDocsClientResolvedConfig | config} for WorkDocsClient's `config` shape.
 *
 * @throws {@link DocumentLockedForCommentsException} (client fault)
 *  <p>This exception is thrown when the document is locked for comments and user tries to
 *             create or delete a comment on that document.</p>
 *
 * @throws {@link EntityNotExistsException} (client fault)
 *  <p>The resource does not exist.</p>
 *
 * @throws {@link FailedDependencyException} (client fault)
 *  <p>The Directory Service cannot reach an on-premises instance. Or a dependency
 *             under the control of the organization is failing, such as a connected Active
 *             Directory.</p>
 *
 * @throws {@link ProhibitedStateException} (client fault)
 *  <p>The specified document version is not in the INITIALIZED state.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>One or more of the dependencies is unavailable.</p>
 *
 * @throws {@link UnauthorizedOperationException} (client fault)
 *  <p>The operation is not permitted.</p>
 *
 * @throws {@link UnauthorizedResourceAccessException} (client fault)
 *  <p>The caller does not have access to perform the action on the resource.</p>
 *
 * @throws {@link WorkDocsServiceException}
 * <p>Base exception class for all service exceptions from WorkDocs service.</p>
 *
 *
 * @public
 */
export class DeleteCommentCommand extends $Command
  .classBuilder<
    DeleteCommentCommandInput,
    DeleteCommentCommandOutput,
    WorkDocsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkDocsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSGorillaBoyService", "DeleteComment", {})
  .n("WorkDocsClient", "DeleteCommentCommand")
  .f(DeleteCommentRequestFilterSensitiveLog, void 0)
  .ser(se_DeleteCommentCommand)
  .de(de_DeleteCommentCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteCommentRequest;
      output: {};
    };
    sdk: {
      input: DeleteCommentCommandInput;
      output: DeleteCommentCommandOutput;
    };
  };
}
