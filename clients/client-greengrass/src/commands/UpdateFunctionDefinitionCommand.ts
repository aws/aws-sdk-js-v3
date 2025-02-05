// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { UpdateFunctionDefinitionRequest, UpdateFunctionDefinitionResponse } from "../models/models_0";
import { de_UpdateFunctionDefinitionCommand, se_UpdateFunctionDefinitionCommand } from "../protocols/Aws_restJson1";

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
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Greengrass", "UpdateFunctionDefinition", {})
  .n("GreengrassClient", "UpdateFunctionDefinitionCommand")
  .f(void 0, void 0)
  .ser(se_UpdateFunctionDefinitionCommand)
  .de(de_UpdateFunctionDefinitionCommand)
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
