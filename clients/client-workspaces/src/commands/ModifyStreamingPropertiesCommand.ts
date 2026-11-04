// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ModifyStreamingPropertiesRequest, ModifyStreamingPropertiesResult } from "../models/models_0";
import { ModifyStreamingProperties$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Modifies the specified streaming properties.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, ModifyStreamingPropertiesCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, ModifyStreamingPropertiesCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * // import type { WorkSpacesClientConfig } from "@aws-sdk/client-workspaces";
 * const config = {}; // type is WorkSpacesClientConfig
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
 *
 * The user is not authorized to access a resource.
 *
 * @throws {@link InvalidParameterValuesException} (client fault)
 *
 * One or more parameter values are not valid.
 *
 * @throws {@link OperationNotSupportedException} (client fault)
 *
 * This operation is not supported.
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
export class ModifyStreamingPropertiesCommand extends command<ModifyStreamingPropertiesCommandInput, ModifyStreamingPropertiesCommandOutput>(
  _ep0,
  _mw0,
  "ModifyStreamingProperties",
  ModifyStreamingProperties$
) {
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
