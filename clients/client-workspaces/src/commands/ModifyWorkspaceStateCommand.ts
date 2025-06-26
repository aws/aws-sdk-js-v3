// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ModifyWorkspaceStateRequest, ModifyWorkspaceStateResult } from "../models/models_1";
import { de_ModifyWorkspaceStateCommand, se_ModifyWorkspaceStateCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ModifyWorkspaceStateCommand}.
 */
export interface ModifyWorkspaceStateCommandInput extends ModifyWorkspaceStateRequest {}
/**
 * @public
 *
 * The output of {@link ModifyWorkspaceStateCommand}.
 */
export interface ModifyWorkspaceStateCommandOutput extends ModifyWorkspaceStateResult, __MetadataBearer {}

/**
 * <p>Sets the state of the specified WorkSpace.</p>
 *          <p>To maintain a WorkSpace without being interrupted, set the WorkSpace state to
 *             <code>ADMIN_MAINTENANCE</code>. WorkSpaces in this state do not respond to requests to
 *          reboot, stop, start, rebuild, or restore. An AutoStop WorkSpace in this state is not
 *          stopped. Users cannot log into a WorkSpace in the <code>ADMIN_MAINTENANCE</code>
 *          state.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, ModifyWorkspaceStateCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, ModifyWorkspaceStateCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * const client = new WorkSpacesClient(config);
 * const input = { // ModifyWorkspaceStateRequest
 *   WorkspaceId: "STRING_VALUE", // required
 *   WorkspaceState: "AVAILABLE" || "ADMIN_MAINTENANCE", // required
 * };
 * const command = new ModifyWorkspaceStateCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param ModifyWorkspaceStateCommandInput - {@link ModifyWorkspaceStateCommandInput}
 * @returns {@link ModifyWorkspaceStateCommandOutput}
 * @see {@link ModifyWorkspaceStateCommandInput} for command's `input` shape.
 * @see {@link ModifyWorkspaceStateCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for WorkSpacesClient's `config` shape.
 *
 * @throws {@link InvalidParameterValuesException} (client fault)
 *  <p>One or more parameter values are not valid.</p>
 *
 * @throws {@link InvalidResourceStateException} (client fault)
 *  <p>The state of the resource is not valid for this operation.</p>
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
export class ModifyWorkspaceStateCommand extends $Command
  .classBuilder<
    ModifyWorkspaceStateCommandInput,
    ModifyWorkspaceStateCommandOutput,
    WorkSpacesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkSpacesClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("WorkspacesService", "ModifyWorkspaceState", {})
  .n("WorkSpacesClient", "ModifyWorkspaceStateCommand")
  .f(void 0, void 0)
  .ser(se_ModifyWorkspaceStateCommand)
  .de(de_ModifyWorkspaceStateCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifyWorkspaceStateRequest;
      output: {};
    };
    sdk: {
      input: ModifyWorkspaceStateCommandInput;
      output: ModifyWorkspaceStateCommandOutput;
    };
  };
}
