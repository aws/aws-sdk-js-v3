// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import type { DeleteLoggerDefinitionRequest, DeleteLoggerDefinitionResponse } from "../models/models_0";
import { DeleteLoggerDefinition$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteLoggerDefinitionCommand}.
 */
export interface DeleteLoggerDefinitionCommandInput extends DeleteLoggerDefinitionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteLoggerDefinitionCommand}.
 */
export interface DeleteLoggerDefinitionCommandOutput extends DeleteLoggerDefinitionResponse, __MetadataBearer {}

/**
 * Deletes a logger definition.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, DeleteLoggerDefinitionCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, DeleteLoggerDefinitionCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * // import type { GreengrassClientConfig } from "@aws-sdk/client-greengrass";
 * const config = {}; // type is GreengrassClientConfig
 * const client = new GreengrassClient(config);
 * const input = { // DeleteLoggerDefinitionRequest
 *   LoggerDefinitionId: "STRING_VALUE", // required
 * };
 * const command = new DeleteLoggerDefinitionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteLoggerDefinitionCommandInput - {@link DeleteLoggerDefinitionCommandInput}
 * @returns {@link DeleteLoggerDefinitionCommandOutput}
 * @see {@link DeleteLoggerDefinitionCommandInput} for command's `input` shape.
 * @see {@link DeleteLoggerDefinitionCommandOutput} for command's `response` shape.
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
export class DeleteLoggerDefinitionCommand extends $Command
  .classBuilder<
    DeleteLoggerDefinitionCommandInput,
    DeleteLoggerDefinitionCommandOutput,
    GreengrassClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GreengrassClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Greengrass", "DeleteLoggerDefinition", {})
  .n("GreengrassClient", "DeleteLoggerDefinitionCommand")
  .sc(DeleteLoggerDefinition$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteLoggerDefinitionRequest;
      output: {};
    };
    sdk: {
      input: DeleteLoggerDefinitionCommandInput;
      output: DeleteLoggerDefinitionCommandOutput;
    };
  };
}
