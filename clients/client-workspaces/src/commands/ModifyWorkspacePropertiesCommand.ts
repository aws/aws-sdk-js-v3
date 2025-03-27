// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ModifyWorkspacePropertiesRequest, ModifyWorkspacePropertiesResult } from "../models/models_0";
import { de_ModifyWorkspacePropertiesCommand, se_ModifyWorkspacePropertiesCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ModifyWorkspacePropertiesCommand}.
 */
export interface ModifyWorkspacePropertiesCommandInput extends ModifyWorkspacePropertiesRequest {}
/**
 * @public
 *
 * The output of {@link ModifyWorkspacePropertiesCommand}.
 */
export interface ModifyWorkspacePropertiesCommandOutput extends ModifyWorkspacePropertiesResult, __MetadataBearer {}

/**
 * <p>Modifies the specified WorkSpace properties. For important information about how to
 *          modify the size of the root and user volumes, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/modify-workspaces.html"> Modify a WorkSpace</a>.
 *       </p>
 *          <note>
 *             <p>The <code>MANUAL</code> running mode value is only supported by Amazon WorkSpaces
 *             Core. Contact your account team to be allow-listed to use this value. For more
 *             information, see <a href="http://aws.amazon.com/workspaces/core/">Amazon WorkSpaces
 *                Core</a>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, ModifyWorkspacePropertiesCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, ModifyWorkspacePropertiesCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * const client = new WorkSpacesClient(config);
 * const input = { // ModifyWorkspacePropertiesRequest
 *   WorkspaceId: "STRING_VALUE", // required
 *   WorkspaceProperties: { // WorkspaceProperties
 *     RunningMode: "AUTO_STOP" || "ALWAYS_ON" || "MANUAL",
 *     RunningModeAutoStopTimeoutInMinutes: Number("int"),
 *     RootVolumeSizeGib: Number("int"),
 *     UserVolumeSizeGib: Number("int"),
 *     ComputeTypeName: "VALUE" || "STANDARD" || "PERFORMANCE" || "POWER" || "GRAPHICS" || "POWERPRO" || "GENERALPURPOSE_4XLARGE" || "GENERALPURPOSE_8XLARGE" || "GRAPHICSPRO" || "GRAPHICS_G4DN" || "GRAPHICSPRO_G4DN",
 *     Protocols: [ // ProtocolList
 *       "PCOIP" || "WSP",
 *     ],
 *     OperatingSystemName: "AMAZON_LINUX_2" || "UBUNTU_18_04" || "UBUNTU_20_04" || "UBUNTU_22_04" || "UNKNOWN" || "WINDOWS_10" || "WINDOWS_11" || "WINDOWS_7" || "WINDOWS_SERVER_2016" || "WINDOWS_SERVER_2019" || "WINDOWS_SERVER_2022" || "RHEL_8" || "ROCKY_8",
 *     GlobalAccelerator: { // GlobalAcceleratorForWorkSpace
 *       Mode: "ENABLED_AUTO" || "DISABLED" || "INHERITED", // required
 *       PreferredProtocol: "TCP" || "NONE" || "INHERITED",
 *     },
 *   },
 *   DataReplication: "NO_REPLICATION" || "PRIMARY_AS_SOURCE",
 * };
 * const command = new ModifyWorkspacePropertiesCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param ModifyWorkspacePropertiesCommandInput - {@link ModifyWorkspacePropertiesCommandInput}
 * @returns {@link ModifyWorkspacePropertiesCommandOutput}
 * @see {@link ModifyWorkspacePropertiesCommandInput} for command's `input` shape.
 * @see {@link ModifyWorkspacePropertiesCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for WorkSpacesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The user is not authorized to access a resource.</p>
 *
 * @throws {@link InvalidParameterValuesException} (client fault)
 *  <p>One or more parameter values are not valid.</p>
 *
 * @throws {@link InvalidResourceStateException} (client fault)
 *  <p>The state of the resource is not valid for this operation.</p>
 *
 * @throws {@link OperationInProgressException} (client fault)
 *  <p>The properties of this WorkSpace are currently being modified. Try again in a moment.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link ResourceUnavailableException} (client fault)
 *  <p>The specified resource is not available.</p>
 *
 * @throws {@link UnsupportedWorkspaceConfigurationException} (client fault)
 *  <p>The configuration of this WorkSpace is not supported for this operation. For more information, see
 *          <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/required-service-components.html">Required
 *             Configuration and Service Components for WorkSpaces </a>.</p>
 *
 * @throws {@link WorkSpacesServiceException}
 * <p>Base exception class for all service exceptions from WorkSpaces service.</p>
 *
 *
 * @public
 */
export class ModifyWorkspacePropertiesCommand extends $Command
  .classBuilder<
    ModifyWorkspacePropertiesCommandInput,
    ModifyWorkspacePropertiesCommandOutput,
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
  .s("WorkspacesService", "ModifyWorkspaceProperties", {})
  .n("WorkSpacesClient", "ModifyWorkspacePropertiesCommand")
  .f(void 0, void 0)
  .ser(se_ModifyWorkspacePropertiesCommand)
  .de(de_ModifyWorkspacePropertiesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifyWorkspacePropertiesRequest;
      output: {};
    };
    sdk: {
      input: ModifyWorkspacePropertiesCommandInput;
      output: ModifyWorkspacePropertiesCommandOutput;
    };
  };
}
