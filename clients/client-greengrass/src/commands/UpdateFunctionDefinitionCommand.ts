// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import type { UpdateFunctionDefinitionRequest, UpdateFunctionDefinitionResponse } from "../models/models_0";
import { UpdateFunctionDefinition } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateFunctionDefinitionCommand}.
 */
export interface UpdateFunctionDefinitionCommandInput extends UpdateFunctionDefinitionRequest {}
/**
 * @public
 *
 * The output of {@link UpdateFunctionDefinitionCommand}.
 */
export interface UpdateFunctionDefinitionCommandOutput extends UpdateFunctionDefinitionResponse, __MetadataBearer {}

/**
 * Updates a Lambda function definition.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, UpdateFunctionDefinitionCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, UpdateFunctionDefinitionCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * // import type { GreengrassClientConfig } from "@aws-sdk/client-greengrass";
 * const config = {}; // type is GreengrassClientConfig
 * const client = new GreengrassClient(config);
 * const input = { // UpdateFunctionDefinitionRequest
 *   FunctionDefinitionId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE",
 * };
 * const command = new UpdateFunctionDefinitionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateFunctionDefinitionCommandInput - {@link UpdateFunctionDefinitionCommandInput}
 * @returns {@link UpdateFunctionDefinitionCommandOutput}
 * @see {@link UpdateFunctionDefinitionCommandInput} for command's `input` shape.
 * @see {@link UpdateFunctionDefinitionCommandOutput} for command's `response` shape.
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
export class UpdateFunctionDefinitionCommand extends $Command
  .classBuilder<
    UpdateFunctionDefinitionCommandInput,
    UpdateFunctionDefinitionCommandOutput,
    GreengrassClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GreengrassClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Greengrass", "UpdateFunctionDefinition", {})
  .n("GreengrassClient", "UpdateFunctionDefinitionCommand")
  .sc(UpdateFunctionDefinition)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateFunctionDefinitionRequest;
      output: {};
    };
    sdk: {
      input: UpdateFunctionDefinitionCommandInput;
      output: UpdateFunctionDefinitionCommandOutput;
    };
  };
}
