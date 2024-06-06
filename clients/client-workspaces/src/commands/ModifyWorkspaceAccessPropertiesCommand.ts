// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ModifyWorkspaceAccessPropertiesRequest, ModifyWorkspaceAccessPropertiesResult } from "../models/models_0";
import {
  de_ModifyWorkspaceAccessPropertiesCommand,
  se_ModifyWorkspaceAccessPropertiesCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ModifyWorkspaceAccessPropertiesCommand}.
 */
export interface ModifyWorkspaceAccessPropertiesCommandInput extends ModifyWorkspaceAccessPropertiesRequest {}
/**
 * @public
 *
 * The output of {@link ModifyWorkspaceAccessPropertiesCommand}.
 */
export interface ModifyWorkspaceAccessPropertiesCommandOutput
  extends ModifyWorkspaceAccessPropertiesResult,
    __MetadataBearer {}

/**
 * <p>Specifies which devices and operating systems users can use to access their WorkSpaces.
 *          For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/update-directory-details.html#control-device-access">
 *             Control Device Access</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, ModifyWorkspaceAccessPropertiesCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, ModifyWorkspaceAccessPropertiesCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * const client = new WorkSpacesClient(config);
 * const input = { // ModifyWorkspaceAccessPropertiesRequest
 *   ResourceId: "STRING_VALUE", // required
 *   WorkspaceAccessProperties: { // WorkspaceAccessProperties
 *     DeviceTypeWindows: "ALLOW" || "DENY",
 *     DeviceTypeOsx: "ALLOW" || "DENY",
 *     DeviceTypeWeb: "ALLOW" || "DENY",
 *     DeviceTypeIos: "ALLOW" || "DENY",
 *     DeviceTypeAndroid: "ALLOW" || "DENY",
 *     DeviceTypeChromeOs: "ALLOW" || "DENY",
 *     DeviceTypeZeroClient: "ALLOW" || "DENY",
 *     DeviceTypeLinux: "ALLOW" || "DENY",
 *   },
 * };
 * const command = new ModifyWorkspaceAccessPropertiesCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param ModifyWorkspaceAccessPropertiesCommandInput - {@link ModifyWorkspaceAccessPropertiesCommandInput}
 * @returns {@link ModifyWorkspaceAccessPropertiesCommandOutput}
 * @see {@link ModifyWorkspaceAccessPropertiesCommandInput} for command's `input` shape.
 * @see {@link ModifyWorkspaceAccessPropertiesCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for WorkSpacesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The user is not authorized to access a resource.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link WorkSpacesServiceException}
 * <p>Base exception class for all service exceptions from WorkSpaces service.</p>
 *
 * @public
 */
export class ModifyWorkspaceAccessPropertiesCommand extends $Command
  .classBuilder<
    ModifyWorkspaceAccessPropertiesCommandInput,
    ModifyWorkspaceAccessPropertiesCommandOutput,
    WorkSpacesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: WorkSpacesClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("WorkspacesService", "ModifyWorkspaceAccessProperties", {})
  .n("WorkSpacesClient", "ModifyWorkspaceAccessPropertiesCommand")
  .f(void 0, void 0)
  .ser(se_ModifyWorkspaceAccessPropertiesCommand)
  .de(de_ModifyWorkspaceAccessPropertiesCommand)
  .build() {}
