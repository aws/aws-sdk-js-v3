// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { RestoreWorkspaceRequest, RestoreWorkspaceResult } from "../models/models_0";
import { RestoreWorkspace } from "../schemas/schemas_0";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RestoreWorkspaceCommand}.
 */
export interface RestoreWorkspaceCommandInput extends RestoreWorkspaceRequest {}
/**
 * @public
 *
 * The output of {@link RestoreWorkspaceCommand}.
 */
export interface RestoreWorkspaceCommandOutput extends RestoreWorkspaceResult, __MetadataBearer {}

/**
 * <p>Restores the specified WorkSpace to its last known healthy state.</p>
 *          <p>You cannot restore a WorkSpace unless its state is <code> AVAILABLE</code>,
 *             <code>ERROR</code>, <code>UNHEALTHY</code>, or <code>STOPPED</code>.</p>
 *          <p>Restoring a WorkSpace is a potentially destructive action that can result in the loss of
 *          data. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/restore-workspace.html">Restore a
 *          WorkSpace</a>.</p>
 *          <p>This operation is asynchronous and returns before the WorkSpace is completely
 *          restored.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, RestoreWorkspaceCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, RestoreWorkspaceCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * // import type { WorkSpacesClientConfig } from "@aws-sdk/client-workspaces";
 * const config = {}; // type is WorkSpacesClientConfig
 * const client = new WorkSpacesClient(config);
 * const input = { // RestoreWorkspaceRequest
 *   WorkspaceId: "STRING_VALUE", // required
 * };
 * const command = new RestoreWorkspaceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param RestoreWorkspaceCommandInput - {@link RestoreWorkspaceCommandInput}
 * @returns {@link RestoreWorkspaceCommandOutput}
 * @see {@link RestoreWorkspaceCommandInput} for command's `input` shape.
 * @see {@link RestoreWorkspaceCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for WorkSpacesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The user is not authorized to access a resource.</p>
 *
 * @throws {@link InvalidParameterValuesException} (client fault)
 *  <p>One or more parameter values are not valid.</p>
 *
 * @throws {@link OperationNotSupportedException} (client fault)
 *  <p>This operation is not supported.</p>
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
export class RestoreWorkspaceCommand extends $Command
  .classBuilder<
    RestoreWorkspaceCommandInput,
    RestoreWorkspaceCommandOutput,
    WorkSpacesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkSpacesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WorkspacesService", "RestoreWorkspace", {})
  .n("WorkSpacesClient", "RestoreWorkspaceCommand")
  .sc(RestoreWorkspace)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RestoreWorkspaceRequest;
      output: {};
    };
    sdk: {
      input: RestoreWorkspaceCommandInput;
      output: RestoreWorkspaceCommandOutput;
    };
  };
}
