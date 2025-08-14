// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ModifyStreamingPropertiesRequest, ModifyStreamingPropertiesResult } from "../models/models_1";
import { de_ModifyStreamingPropertiesCommand, se_ModifyStreamingPropertiesCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ModifyStreamingPropertiesCommand}.
 */
export interface ModifyStreamingPropertiesCommandInput extends ModifyStreamingPropertiesRequest {}
/**
 * @public
 *
 * The output of {@link ModifyStreamingPropertiesCommand}.
 */
export interface ModifyStreamingPropertiesCommandOutput extends ModifyStreamingPropertiesResult, __MetadataBearer {}

/**
 * <p>Modifies the specified streaming properties.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, ModifyStreamingPropertiesCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, ModifyStreamingPropertiesCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * const client = new WorkSpacesClient(config);
 * const input = { // ModifyStreamingPropertiesRequest
 *   ResourceId: "STRING_VALUE", // required
 *   StreamingProperties: { // StreamingProperties
 *     StreamingExperiencePreferredProtocol: "TCP" || "UDP",
 *     UserSettings: [ // UserSettings
 *       { // UserSetting
 *         Action: "CLIPBOARD_COPY_FROM_LOCAL_DEVICE" || "CLIPBOARD_COPY_TO_LOCAL_DEVICE" || "PRINTING_TO_LOCAL_DEVICE" || "SMART_CARD", // required
 *         Permission: "ENABLED" || "DISABLED", // required
 *         MaximumLength: Number("int"),
 *       },
 *     ],
 *     StorageConnectors: [ // StorageConnectors
 *       { // StorageConnector
 *         ConnectorType: "HOME_FOLDER", // required
 *         Status: "ENABLED" || "DISABLED", // required
 *       },
 *     ],
 *     GlobalAccelerator: { // GlobalAcceleratorForDirectory
 *       Mode: "ENABLED_AUTO" || "DISABLED", // required
 *       PreferredProtocol: "TCP" || "NONE",
 *     },
 *   },
 * };
 * const command = new ModifyStreamingPropertiesCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param ModifyStreamingPropertiesCommandInput - {@link ModifyStreamingPropertiesCommandInput}
 * @returns {@link ModifyStreamingPropertiesCommandOutput}
 * @see {@link ModifyStreamingPropertiesCommandInput} for command's `input` shape.
 * @see {@link ModifyStreamingPropertiesCommandOutput} for command's `response` shape.
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
export class ModifyStreamingPropertiesCommand extends $Command
  .classBuilder<
    ModifyStreamingPropertiesCommandInput,
    ModifyStreamingPropertiesCommandOutput,
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
  .s("WorkspacesService", "ModifyStreamingProperties", {})
  .n("WorkSpacesClient", "ModifyStreamingPropertiesCommand")
  .f(void 0, void 0)
  .ser(se_ModifyStreamingPropertiesCommand)
  .de(de_ModifyStreamingPropertiesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifyStreamingPropertiesRequest;
      output: {};
    };
    sdk: {
      input: ModifyStreamingPropertiesCommandInput;
      output: ModifyStreamingPropertiesCommandOutput;
    };
  };
}
