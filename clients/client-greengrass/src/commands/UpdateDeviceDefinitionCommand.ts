// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateDeviceDefinitionRequest, UpdateDeviceDefinitionResponse } from "../models/models_0";
import { UpdateDeviceDefinition$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateDeviceDefinitionCommand}.
 */
export interface UpdateDeviceDefinitionCommandInput extends UpdateDeviceDefinitionRequest {}
/**
 * @public
 *
 * The output of {@link UpdateDeviceDefinitionCommand}.
 */
export interface UpdateDeviceDefinitionCommandOutput extends UpdateDeviceDefinitionResponse, __MetadataBearer {}

/**
 * Updates a device definition.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, UpdateDeviceDefinitionCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, UpdateDeviceDefinitionCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * // import type { GreengrassClientConfig } from "@aws-sdk/client-greengrass";
 * const config = {}; // type is GreengrassClientConfig
 * const client = new GreengrassClient(config);
 * const input = { // UpdateDeviceDefinitionRequest
 *   DeviceDefinitionId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE",
 * };
 * const command = new UpdateDeviceDefinitionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateDeviceDefinitionCommandInput - {@link UpdateDeviceDefinitionCommandInput}
 * @returns {@link UpdateDeviceDefinitionCommandOutput}
 * @see {@link UpdateDeviceDefinitionCommandInput} for command's `input` shape.
 * @see {@link UpdateDeviceDefinitionCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for GreengrassClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  General error information.
 *
 * @throws {@link GreengrassServiceException}
 * <p>Base exception class for all service exceptions from Greengrass service.</p>
 *
 *
 * @public
 */
export class UpdateDeviceDefinitionCommand extends command<UpdateDeviceDefinitionCommandInput, UpdateDeviceDefinitionCommandOutput>(
  _ep0,
  _mw0,
  "UpdateDeviceDefinition",
  UpdateDeviceDefinition$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateDeviceDefinitionRequest;
      output: {};
    };
    sdk: {
      input: UpdateDeviceDefinitionCommandInput;
      output: UpdateDeviceDefinitionCommandOutput;
    };
  };
}
