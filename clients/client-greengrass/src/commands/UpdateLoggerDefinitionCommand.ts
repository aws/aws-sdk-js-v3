// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { UpdateLoggerDefinitionRequest, UpdateLoggerDefinitionResponse } from "../models/models_0";
import { UpdateLoggerDefinition } from "../schemas/schemas_39_UpdateLoggerDefinition";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateLoggerDefinitionCommand}.
 */
export interface UpdateLoggerDefinitionCommandInput extends UpdateLoggerDefinitionRequest {}
/**
 * @public
 *
 * The output of {@link UpdateLoggerDefinitionCommand}.
 */
export interface UpdateLoggerDefinitionCommandOutput extends UpdateLoggerDefinitionResponse, __MetadataBearer {}

/**
 * Updates a logger definition.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, UpdateLoggerDefinitionCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, UpdateLoggerDefinitionCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * // import type { GreengrassClientConfig } from "@aws-sdk/client-greengrass";
 * const config = {}; // type is GreengrassClientConfig
 * const client = new GreengrassClient(config);
 * const input = { // UpdateLoggerDefinitionRequest
 *   LoggerDefinitionId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE",
 * };
 * const command = new UpdateLoggerDefinitionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateLoggerDefinitionCommandInput - {@link UpdateLoggerDefinitionCommandInput}
 * @returns {@link UpdateLoggerDefinitionCommandOutput}
 * @see {@link UpdateLoggerDefinitionCommandInput} for command's `input` shape.
 * @see {@link UpdateLoggerDefinitionCommandOutput} for command's `response` shape.
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
export class UpdateLoggerDefinitionCommand extends $Command
  .classBuilder<
    UpdateLoggerDefinitionCommandInput,
    UpdateLoggerDefinitionCommandOutput,
    GreengrassClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GreengrassClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Greengrass", "UpdateLoggerDefinition", {})
  .n("GreengrassClient", "UpdateLoggerDefinitionCommand")
  .sc(UpdateLoggerDefinition)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateLoggerDefinitionRequest;
      output: {};
    };
    sdk: {
      input: UpdateLoggerDefinitionCommandInput;
      output: UpdateLoggerDefinitionCommandOutput;
    };
  };
}
