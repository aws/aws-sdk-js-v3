// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteCommentRequest } from "../models/models_0";
import { DeleteComment$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Deletes the specified comment from the document version.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkDocsClient, DeleteCommentCommand } from "@aws-sdk/client-workdocs"; // ES Modules import
 * // const { WorkDocsClient, DeleteCommentCommand } = require("@aws-sdk/client-workdocs"); // CommonJS import
 * // import type { WorkDocsClientConfig } from "@aws-sdk/client-workdocs";
 * const config = {}; // type is WorkDocsClientConfig
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
 *
 * This exception is thrown when the document is locked for comments and user tries to create or delete a comment on that document.
 *
 * @throws {@link EntityNotExistsException} (client fault)
 *
 * The resource does not exist.
 *
 * @throws {@link FailedDependencyException} (client fault)
 *
 * The Directory Service cannot reach an on-premises instance. Or a dependency under the control of the organization is failing, such as a connected Active Directory.
 *
 * @throws {@link ProhibitedStateException} (client fault)
 *
 * The specified document version is not in the INITIALIZED state.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * One or more of the dependencies is unavailable.
 *
 * @throws {@link UnauthorizedOperationException} (client fault)
 *
 * The operation is not permitted.
 *
 * @throws {@link UnauthorizedResourceAccessException} (client fault)
 *
 * The caller does not have access to perform the action on the resource.
 *
 * @throws {@link WorkDocsServiceException}
 *
 * Base exception class for all service exceptions from WorkDocs service.
 *
 * @public
 */
export class DeleteCommentCommand extends command<DeleteCommentCommandInput, DeleteCommentCommandOutput>(
  _ep0,
  _mw0,
  "DeleteComment",
  DeleteComment$
) {
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
