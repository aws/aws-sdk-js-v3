// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { DeleteConnectorDefinitionRequest, DeleteConnectorDefinitionResponse } from "../models/models_0";
import { de_DeleteConnectorDefinitionCommand, se_DeleteConnectorDefinitionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteConnectorDefinitionCommand}.
 */
export interface DeleteConnectorDefinitionCommandInput extends DeleteConnectorDefinitionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteConnectorDefinitionCommand}.
 */
export interface DeleteConnectorDefinitionCommandOutput extends DeleteConnectorDefinitionResponse, __MetadataBearer {}

/**
 * Deletes a connector definition.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, DeleteConnectorDefinitionCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, DeleteConnectorDefinitionCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const input = { // DeleteConnectorDefinitionRequest
 *   ConnectorDefinitionId: "STRING_VALUE", // required
 * };
 * const command = new DeleteConnectorDefinitionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteConnectorDefinitionCommandInput - {@link DeleteConnectorDefinitionCommandInput}
 * @returns {@link DeleteConnectorDefinitionCommandOutput}
 * @see {@link DeleteConnectorDefinitionCommandInput} for command's `input` shape.
 * @see {@link DeleteConnectorDefinitionCommandOutput} for command's `response` shape.
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
export class DeleteConnectorDefinitionCommand extends $Command
  .classBuilder<
    DeleteConnectorDefinitionCommandInput,
    DeleteConnectorDefinitionCommandOutput,
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
  .s("Greengrass", "DeleteConnectorDefinition", {})
  .n("GreengrassClient", "DeleteConnectorDefinitionCommand")
  .f(void 0, void 0)
  .ser(se_DeleteConnectorDefinitionCommand)
  .de(de_DeleteConnectorDefinitionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteConnectorDefinitionRequest;
      output: {};
    };
    sdk: {
      input: DeleteConnectorDefinitionCommandInput;
      output: DeleteConnectorDefinitionCommandOutput;
    };
  };
}
