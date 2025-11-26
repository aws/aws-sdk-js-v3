// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteWorkspaceBundleRequest, DeleteWorkspaceBundleResult } from "../models/models_0";
import { DeleteWorkspaceBundle } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Deletes the specified WorkSpace bundle. For more information about deleting WorkSpace bundles, see
 *          <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/delete_bundle.html">
 *             Delete a Custom WorkSpaces Bundle or Image</a>.</p>
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
 *  <p>The user is not authorized to access a resource.</p>
 *
 * @throws {@link InvalidParameterValuesException} (client fault)
 *  <p>One or more parameter values are not valid.</p>
 *
 * @throws {@link ResourceAssociatedException} (client fault)
 *  <p>The resource is associated with a directory.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link WorkSpacesServiceException}
 * <p>Base exception class for all service exceptions from WorkSpaces service.</p>
 *
 *
 * @public
 */
export class DeleteWorkspaceBundleCommand extends $Command
  .classBuilder<
    DeleteWorkspaceBundleCommandInput,
    DeleteWorkspaceBundleCommandOutput,
    WorkSpacesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkSpacesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WorkspacesService", "DeleteWorkspaceBundle", {})
  .n("WorkSpacesClient", "DeleteWorkspaceBundleCommand")
  .sc(DeleteWorkspaceBundle)
  .build() {
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
