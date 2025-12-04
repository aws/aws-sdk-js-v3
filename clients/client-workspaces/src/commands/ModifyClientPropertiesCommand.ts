// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ModifyClientPropertiesRequest, ModifyClientPropertiesResult } from "../models/models_0";
import { ModifyClientProperties } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ModifyClientPropertiesCommand}.
 */
export interface ModifyClientPropertiesCommandInput extends ModifyClientPropertiesRequest {}
/**
 * @public
 *
 * The output of {@link ModifyClientPropertiesCommand}.
 */
export interface ModifyClientPropertiesCommandOutput extends ModifyClientPropertiesResult, __MetadataBearer {}

/**
 * <p>Modifies the properties of the specified Amazon WorkSpaces clients.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, ModifyClientPropertiesCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, ModifyClientPropertiesCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * // import type { WorkSpacesClientConfig } from "@aws-sdk/client-workspaces";
 * const config = {}; // type is WorkSpacesClientConfig
 * const client = new WorkSpacesClient(config);
 * const input = { // ModifyClientPropertiesRequest
 *   ResourceId: "STRING_VALUE", // required
 *   ClientProperties: { // ClientProperties
 *     ReconnectEnabled: "ENABLED" || "DISABLED",
 *     LogUploadEnabled: "ENABLED" || "DISABLED",
 *   },
 * };
 * const command = new ModifyClientPropertiesCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param ModifyClientPropertiesCommandInput - {@link ModifyClientPropertiesCommandInput}
 * @returns {@link ModifyClientPropertiesCommandOutput}
 * @see {@link ModifyClientPropertiesCommandInput} for command's `input` shape.
 * @see {@link ModifyClientPropertiesCommandOutput} for command's `response` shape.
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
export class ModifyClientPropertiesCommand extends $Command
  .classBuilder<
    ModifyClientPropertiesCommandInput,
    ModifyClientPropertiesCommandOutput,
    WorkSpacesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkSpacesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WorkspacesService", "ModifyClientProperties", {})
  .n("WorkSpacesClient", "ModifyClientPropertiesCommand")
  .sc(ModifyClientProperties)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifyClientPropertiesRequest;
      output: {};
    };
    sdk: {
      input: ModifyClientPropertiesCommandInput;
      output: ModifyClientPropertiesCommandOutput;
    };
  };
}
