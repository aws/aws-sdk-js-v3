// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import type { UpdateConnectorDefinitionRequest, UpdateConnectorDefinitionResponse } from "../models/models_0";
import { UpdateConnectorDefinition$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateConnectorDefinitionCommand}.
 */
export interface UpdateConnectorDefinitionCommandInput extends UpdateConnectorDefinitionRequest {}
/**
 * @public
 *
 * The output of {@link UpdateConnectorDefinitionCommand}.
 */
export interface UpdateConnectorDefinitionCommandOutput extends UpdateConnectorDefinitionResponse, __MetadataBearer {}

/**
 * Updates a connector definition.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, UpdateConnectorDefinitionCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, UpdateConnectorDefinitionCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * // import type { GreengrassClientConfig } from "@aws-sdk/client-greengrass";
 * const config = {}; // type is GreengrassClientConfig
 * const client = new GreengrassClient(config);
 * const input = { // UpdateConnectorDefinitionRequest
 *   ConnectorDefinitionId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE",
 * };
 * const command = new UpdateConnectorDefinitionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateConnectorDefinitionCommandInput - {@link UpdateConnectorDefinitionCommandInput}
 * @returns {@link UpdateConnectorDefinitionCommandOutput}
 * @see {@link UpdateConnectorDefinitionCommandInput} for command's `input` shape.
 * @see {@link UpdateConnectorDefinitionCommandOutput} for command's `response` shape.
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
export class UpdateConnectorDefinitionCommand extends $Command
  .classBuilder<
    UpdateConnectorDefinitionCommandInput,
    UpdateConnectorDefinitionCommandOutput,
    GreengrassClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GreengrassClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Greengrass", "UpdateConnectorDefinition", {})
  .n("GreengrassClient", "UpdateConnectorDefinitionCommand")
  .sc(UpdateConnectorDefinition$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateConnectorDefinitionRequest;
      output: {};
    };
    sdk: {
      input: UpdateConnectorDefinitionCommandInput;
      output: UpdateConnectorDefinitionCommandOutput;
    };
  };
}
