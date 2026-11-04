// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateDocumentRequest } from "../models/models_0";
import { UpdateDocument$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateDocumentCommand}.
 */
export interface UpdateDocumentCommandInput extends UpdateDocumentRequest {}
/**
 * @public
 *
 * The output of {@link UpdateDocumentCommand}.
 */
export interface UpdateDocumentCommandOutput extends __MetadataBearer {}

/**
 * Updates the specified attributes of a document. The user must have access to both the document and its parent folder, if applicable.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkDocsClient, UpdateDocumentCommand } from "@aws-sdk/client-workdocs"; // ES Modules import
 * // const { WorkDocsClient, UpdateDocumentCommand } = require("@aws-sdk/client-workdocs"); // CommonJS import
 * // import type { WorkDocsClientConfig } from "@aws-sdk/client-workdocs";
 * const config = {}; // type is WorkDocsClientConfig
 * const client = new WorkDocsClient(config);
 * const input = { // UpdateDocumentRequest
 *   AuthenticationToken: "STRING_VALUE",
 *   DocumentId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE",
 *   ParentFolderId: "STRING_VALUE",
 *   ResourceState: "ACTIVE" || "RESTORING" || "RECYCLING" || "RECYCLED",
 * };
 * const command = new UpdateDocumentCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateDocumentCommandInput - {@link UpdateDocumentCommandInput}
 * @returns {@link UpdateDocumentCommandOutput}
 * @see {@link UpdateDocumentCommandInput} for command's `input` shape.
 * @see {@link UpdateDocumentCommandOutput} for command's `response` shape.
 * @see {@link WorkDocsClientResolvedConfig | config} for WorkDocsClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *
 * The resource hierarchy is changing.
 *
 * @throws {@link ConflictingOperationException} (client fault)
 *
 * Another operation is in progress on the resource that conflicts with the current operation.
 *
 * @throws {@link EntityAlreadyExistsException} (client fault)
 *
 * The resource already exists.
 *
 * @throws {@link EntityNotExistsException} (client fault)
 *
 * The resource does not exist.
 *
 * @throws {@link FailedDependencyException} (client fault)
 *
 * The Directory Service cannot reach an on-premises instance. Or a dependency under the control of the organization is failing, such as a connected Active Directory.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * The maximum of 100,000 files and folders under the parent folder has been exceeded.
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
export class UpdateDocumentCommand extends command<UpdateDocumentCommandInput, UpdateDocumentCommandOutput>(
  _ep0,
  _mw0,
  "UpdateDocument",
  UpdateDocument$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateDocumentRequest;
      output: {};
    };
    sdk: {
      input: UpdateDocumentCommandInput;
      output: UpdateDocumentCommandOutput;
    };
  };
}
