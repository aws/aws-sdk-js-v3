// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { UpdateResourceDefinitionRequest, UpdateResourceDefinitionResponse } from "../models/models_0";
import { de_UpdateResourceDefinitionCommand, se_UpdateResourceDefinitionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateResourceDefinitionCommand}.
 */
export interface UpdateResourceDefinitionCommandInput extends UpdateResourceDefinitionRequest {}
/**
 * @public
 *
 * The output of {@link UpdateResourceDefinitionCommand}.
 */
export interface UpdateResourceDefinitionCommandOutput extends UpdateResourceDefinitionResponse, __MetadataBearer {}

/**
 * Updates a resource definition.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, UpdateResourceDefinitionCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, UpdateResourceDefinitionCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * // import type { GreengrassClientConfig } from "@aws-sdk/client-greengrass";
 * const config = {}; // type is GreengrassClientConfig
 * const client = new GreengrassClient(config);
 * const input = { // UpdateResourceDefinitionRequest
 *   Name: "STRING_VALUE",
 *   ResourceDefinitionId: "STRING_VALUE", // required
 * };
 * const command = new UpdateResourceDefinitionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateResourceDefinitionCommandInput - {@link UpdateResourceDefinitionCommandInput}
 * @returns {@link UpdateResourceDefinitionCommandOutput}
 * @see {@link UpdateResourceDefinitionCommandInput} for command's `input` shape.
 * @see {@link UpdateResourceDefinitionCommandOutput} for command's `response` shape.
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
export class UpdateResourceDefinitionCommand extends $Command
  .classBuilder<
    UpdateResourceDefinitionCommandInput,
    UpdateResourceDefinitionCommandOutput,
    GreengrassClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GreengrassClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Greengrass", "UpdateResourceDefinition", {})
  .n("GreengrassClient", "UpdateResourceDefinitionCommand")
  .f(void 0, void 0)
  .ser(se_UpdateResourceDefinitionCommand)
  .de(de_UpdateResourceDefinitionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateResourceDefinitionRequest;
      output: {};
    };
    sdk: {
      input: UpdateResourceDefinitionCommandInput;
      output: UpdateResourceDefinitionCommandOutput;
    };
  };
}
