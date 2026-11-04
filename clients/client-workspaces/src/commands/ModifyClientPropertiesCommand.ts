// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ModifyClientPropertiesRequest, ModifyClientPropertiesResult } from "../models/models_0";
import { ModifyClientProperties$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Modifies the properties of the specified Amazon WorkSpaces clients.
 *
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
 *     ClientExperiencePolicy: "STRING_VALUE",
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
export class ModifyClientPropertiesCommand extends command<ModifyClientPropertiesCommandInput, ModifyClientPropertiesCommandOutput>(
  _ep0,
  _mw0,
  "ModifyClientProperties",
  ModifyClientProperties$
) {
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
