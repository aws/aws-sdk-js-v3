// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import type { UpdateDeviceDefinitionRequest, UpdateDeviceDefinitionResponse } from "../models/models_0";
import { UpdateDeviceDefinition } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export class UpdateDeviceDefinitionCommand extends $Command
  .classBuilder<
    UpdateDeviceDefinitionCommandInput,
    UpdateDeviceDefinitionCommandOutput,
    GreengrassClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GreengrassClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Greengrass", "UpdateDeviceDefinition", {})
  .n("GreengrassClient", "UpdateDeviceDefinitionCommand")
  .sc(UpdateDeviceDefinition)
  .build() {
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
