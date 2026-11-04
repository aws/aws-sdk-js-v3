// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteWorkspaceBundleRequest, DeleteWorkspaceBundleResult } from "../models/models_0";
import { DeleteWorkspaceBundle$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteWorkspaceBundleCommand}.
 */
export interface DeleteWorkspaceBundleCommandInput extends DeleteWorkspaceBundleRequest {}
/**
 * @public
 *
 * The output of {@link DeleteWorkspaceBundleCommand}.
 */
export interface DeleteWorkspaceBundleCommandOutput extends DeleteWorkspaceBundleResult, __MetadataBearer {}

/**
 * Deletes the specified WorkSpace bundle. For more information about deleting WorkSpace bundles, see [Delete a Custom WorkSpaces Bundle or Image](https://docs.aws.amazon.com/workspaces/latest/adminguide/delete_bundle.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, DeleteWorkspaceBundleCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, DeleteWorkspaceBundleCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * // import type { WorkSpacesClientConfig } from "@aws-sdk/client-workspaces";
 * const config = {}; // type is WorkSpacesClientConfig
 * const client = new WorkSpacesClient(config);
 * const input = { // DeleteWorkspaceBundleRequest
 *   BundleId: "STRING_VALUE",
 * };
 * const command = new DeleteWorkspaceBundleCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteWorkspaceBundleCommandInput - {@link DeleteWorkspaceBundleCommandInput}
 * @returns {@link DeleteWorkspaceBundleCommandOutput}
 * @see {@link DeleteWorkspaceBundleCommandInput} for command's `input` shape.
 * @see {@link DeleteWorkspaceBundleCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for WorkSpacesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * The user is not authorized to access a resource.
 *
 * @throws {@link InvalidParameterValuesException} (client fault)
 *
 * One or more parameter values are not valid.
 *
 * @throws {@link ResourceAssociatedException} (client fault)
 *
 * The resource is associated with a directory.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource could not be found.
 *
 * @throws {@link WorkSpacesServiceException}
 *
 * Base exception class for all service exceptions from WorkSpaces service.
 *
 * @public
 */
export class DeleteWorkspaceBundleCommand extends command<DeleteWorkspaceBundleCommandInput, DeleteWorkspaceBundleCommandOutput>(
  _ep0,
  _mw0,
  "DeleteWorkspaceBundle",
  DeleteWorkspaceBundle$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteWorkspaceBundleRequest;
      output: {};
    };
    sdk: {
      input: DeleteWorkspaceBundleCommandInput;
      output: DeleteWorkspaceBundleCommandOutput;
    };
  };
}
