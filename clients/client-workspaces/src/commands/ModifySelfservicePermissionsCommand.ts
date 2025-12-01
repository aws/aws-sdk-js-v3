// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ModifySelfservicePermissionsRequest, ModifySelfservicePermissionsResult } from "../models/models_0";
import { ModifySelfservicePermissions } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ModifySelfservicePermissionsCommand}.
 */
export interface ModifySelfservicePermissionsCommandInput extends ModifySelfservicePermissionsRequest {}
/**
 * @public
 *
 * The output of {@link ModifySelfservicePermissionsCommand}.
 */
export interface ModifySelfservicePermissionsCommandOutput
  extends ModifySelfservicePermissionsResult,
    __MetadataBearer {}

/**
 * <p>Modifies the self-service WorkSpace management capabilities for your users. For more
 *          information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/enable-user-self-service-workspace-management.html">Enable Self-Service WorkSpace Management Capabilities for Your Users</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, ModifySelfservicePermissionsCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, ModifySelfservicePermissionsCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * // import type { WorkSpacesClientConfig } from "@aws-sdk/client-workspaces";
 * const config = {}; // type is WorkSpacesClientConfig
 * const client = new WorkSpacesClient(config);
 * const input = { // ModifySelfservicePermissionsRequest
 *   ResourceId: "STRING_VALUE", // required
 *   SelfservicePermissions: { // SelfservicePermissions
 *     RestartWorkspace: "ENABLED" || "DISABLED",
 *     IncreaseVolumeSize: "ENABLED" || "DISABLED",
 *     ChangeComputeType: "ENABLED" || "DISABLED",
 *     SwitchRunningMode: "ENABLED" || "DISABLED",
 *     RebuildWorkspace: "ENABLED" || "DISABLED",
 *   },
 * };
 * const command = new ModifySelfservicePermissionsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param ModifySelfservicePermissionsCommandInput - {@link ModifySelfservicePermissionsCommandInput}
 * @returns {@link ModifySelfservicePermissionsCommandOutput}
 * @see {@link ModifySelfservicePermissionsCommandInput} for command's `input` shape.
 * @see {@link ModifySelfservicePermissionsCommandOutput} for command's `response` shape.
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
export class ModifySelfservicePermissionsCommand extends $Command
  .classBuilder<
    ModifySelfservicePermissionsCommandInput,
    ModifySelfservicePermissionsCommandOutput,
    WorkSpacesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkSpacesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WorkspacesService", "ModifySelfservicePermissions", {})
  .n("WorkSpacesClient", "ModifySelfservicePermissionsCommand")
  .sc(ModifySelfservicePermissions)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifySelfservicePermissionsRequest;
      output: {};
    };
    sdk: {
      input: ModifySelfservicePermissionsCommandInput;
      output: ModifySelfservicePermissionsCommandOutput;
    };
  };
}
