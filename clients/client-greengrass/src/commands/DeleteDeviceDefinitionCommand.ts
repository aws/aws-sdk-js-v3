// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import type { DeleteDeviceDefinitionRequest, DeleteDeviceDefinitionResponse } from "../models/models_0";
import { DeleteDeviceDefinition$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteDeviceDefinitionCommand}.
 */
export interface DeleteDeviceDefinitionCommandInput extends DeleteDeviceDefinitionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteDeviceDefinitionCommand}.
 */
export interface DeleteDeviceDefinitionCommandOutput extends DeleteDeviceDefinitionResponse, __MetadataBearer {}

/**
 * Deletes a device definition.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, DeleteDeviceDefinitionCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, DeleteDeviceDefinitionCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * // import type { GreengrassClientConfig } from "@aws-sdk/client-greengrass";
 * const config = {}; // type is GreengrassClientConfig
 * const client = new GreengrassClient(config);
 * const input = { // DeleteDeviceDefinitionRequest
 *   DeviceDefinitionId: "STRING_VALUE", // required
 * };
 * const command = new DeleteDeviceDefinitionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteDeviceDefinitionCommandInput - {@link DeleteDeviceDefinitionCommandInput}
 * @returns {@link DeleteDeviceDefinitionCommandOutput}
 * @see {@link DeleteDeviceDefinitionCommandInput} for command's `input` shape.
 * @see {@link DeleteDeviceDefinitionCommandOutput} for command's `response` shape.
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
export class DeleteDeviceDefinitionCommand extends $Command
  .classBuilder<
    DeleteDeviceDefinitionCommandInput,
    DeleteDeviceDefinitionCommandOutput,
    GreengrassClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GreengrassClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Greengrass", "DeleteDeviceDefinition", {})
  .n("GreengrassClient", "DeleteDeviceDefinitionCommand")
  .sc(DeleteDeviceDefinition$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteDeviceDefinitionRequest;
      output: {};
    };
    sdk: {
      input: DeleteDeviceDefinitionCommandInput;
      output: DeleteDeviceDefinitionCommandOutput;
    };
  };
}
