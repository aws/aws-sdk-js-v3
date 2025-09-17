// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { DeleteCoreDefinitionRequest, DeleteCoreDefinitionResponse } from "../models/models_0";
import { de_DeleteCoreDefinitionCommand, se_DeleteCoreDefinitionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteCoreDefinitionCommand}.
 */
export interface DeleteCoreDefinitionCommandInput extends DeleteCoreDefinitionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteCoreDefinitionCommand}.
 */
export interface DeleteCoreDefinitionCommandOutput extends DeleteCoreDefinitionResponse, __MetadataBearer {}

/**
 * Deletes a core definition.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, DeleteCoreDefinitionCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, DeleteCoreDefinitionCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * // import type { GreengrassClientConfig } from "@aws-sdk/client-greengrass";
 * const config = {}; // type is GreengrassClientConfig
 * const client = new GreengrassClient(config);
 * const input = { // DeleteCoreDefinitionRequest
 *   CoreDefinitionId: "STRING_VALUE", // required
 * };
 * const command = new DeleteCoreDefinitionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteCoreDefinitionCommandInput - {@link DeleteCoreDefinitionCommandInput}
 * @returns {@link DeleteCoreDefinitionCommandOutput}
 * @see {@link DeleteCoreDefinitionCommandInput} for command's `input` shape.
 * @see {@link DeleteCoreDefinitionCommandOutput} for command's `response` shape.
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
export class DeleteCoreDefinitionCommand extends $Command
  .classBuilder<
    DeleteCoreDefinitionCommandInput,
    DeleteCoreDefinitionCommandOutput,
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
  .s("Greengrass", "DeleteCoreDefinition", {})
  .n("GreengrassClient", "DeleteCoreDefinitionCommand")
  .f(void 0, void 0)
  .ser(se_DeleteCoreDefinitionCommand)
  .de(de_DeleteCoreDefinitionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteCoreDefinitionRequest;
      output: {};
    };
    sdk: {
      input: DeleteCoreDefinitionCommandInput;
      output: DeleteCoreDefinitionCommandOutput;
    };
  };
}
