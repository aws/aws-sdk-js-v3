// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteFolderContentsRequest } from "../models/models_0";
import { DeleteFolderContents$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteFolderContentsCommand}.
 */
export interface DeleteFolderContentsCommandInput extends DeleteFolderContentsRequest {}
/**
 * @public
 *
 * The output of {@link DeleteFolderContentsCommand}.
 */
export interface DeleteFolderContentsCommandOutput extends __MetadataBearer {}

/**
 * Deletes the contents of the specified folder.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkDocsClient, DeleteFolderContentsCommand } from "@aws-sdk/client-workdocs"; // ES Modules import
 * // const { WorkDocsClient, DeleteFolderContentsCommand } = require("@aws-sdk/client-workdocs"); // CommonJS import
 * // import type { WorkDocsClientConfig } from "@aws-sdk/client-workdocs";
 * const config = {}; // type is WorkDocsClientConfig
 * const client = new WorkDocsClient(config);
 * const input = { // DeleteFolderContentsRequest
 *   AuthenticationToken: "STRING_VALUE",
 *   FolderId: "STRING_VALUE", // required
 * };
 * const command = new DeleteFolderContentsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteFolderContentsCommandInput - {@link DeleteFolderContentsCommandInput}
 * @returns {@link DeleteFolderContentsCommandOutput}
 * @see {@link DeleteFolderContentsCommandInput} for command's `input` shape.
 * @see {@link DeleteFolderContentsCommandOutput} for command's `response` shape.
 * @see {@link WorkDocsClientResolvedConfig | config} for WorkDocsClient's `config` shape.
 *
 * @throws {@link ConflictingOperationException} (client fault)
 *
 * Another operation is in progress on the resource that conflicts with the current operation.
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
export class DeleteFolderContentsCommand extends command<DeleteFolderContentsCommandInput, DeleteFolderContentsCommandOutput>(
  _ep0,
  _mw0,
  "DeleteFolderContents",
  DeleteFolderContents$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteFolderContentsRequest;
      output: {};
    };
    sdk: {
      input: DeleteFolderContentsCommandInput;
      output: DeleteFolderContentsCommandOutput;
    };
  };
}
