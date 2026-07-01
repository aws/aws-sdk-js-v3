// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteDocumentRequest } from "../models/models_0";
import { DeleteDocument$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteDocumentCommand}.
 */
export interface DeleteDocumentCommandInput extends DeleteDocumentRequest {}
/**
 * @public
 *
 * The output of {@link DeleteDocumentCommand}.
 */
export interface DeleteDocumentCommandOutput extends __MetadataBearer {}

/**
 * <p>Permanently deletes the specified document and its associated metadata.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkDocsClient, DeleteDocumentCommand } from "@aws-sdk/client-workdocs"; // ES Modules import
 * // const { WorkDocsClient, DeleteDocumentCommand } = require("@aws-sdk/client-workdocs"); // CommonJS import
 * // import type { WorkDocsClientConfig } from "@aws-sdk/client-workdocs";
 * const config = {}; // type is WorkDocsClientConfig
 * const client = new WorkDocsClient(config);
 * const input = { // DeleteDocumentRequest
 *   AuthenticationToken: "STRING_VALUE",
 *   DocumentId: "STRING_VALUE", // required
 * };
 * const command = new DeleteDocumentCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteDocumentCommandInput - {@link DeleteDocumentCommandInput}
 * @returns {@link DeleteDocumentCommandOutput}
 * @see {@link DeleteDocumentCommandInput} for command's `input` shape.
 * @see {@link DeleteDocumentCommandOutput} for command's `response` shape.
 * @see {@link WorkDocsClientResolvedConfig | config} for WorkDocsClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>The resource hierarchy is changing.</p>
 *
 * @throws {@link ConflictingOperationException} (client fault)
 *  <p>Another operation is in progress on the resource that conflicts with the current operation.</p>
 *
 * @throws {@link EntityNotExistsException} (client fault)
 *  <p>The resource does not exist.</p>
 *
 * @throws {@link FailedDependencyException} (client fault)
 *  <p>The Directory Service cannot reach an on-premises instance. Or a dependency
 *             under the control of the organization is failing, such as a connected Active
 *             Directory.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The maximum of 100,000 files and folders under the parent folder has been exceeded.</p>
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
export class DeleteDocumentCommand extends command<DeleteDocumentCommandInput, DeleteDocumentCommandOutput>(
  _ep0,
  _mw0,
  "DeleteDocument",
  DeleteDocument$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteDocumentRequest;
      output: {};
    };
    sdk: {
      input: DeleteDocumentCommandInput;
      output: DeleteDocumentCommandOutput;
    };
  };
}
