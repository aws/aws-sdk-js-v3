// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { DeleteResourceDefinitionRequest, DeleteResourceDefinitionResponse } from "../models/models_0";
import { de_DeleteResourceDefinitionCommand, se_DeleteResourceDefinitionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteResourceDefinitionCommand}.
 */
export interface DeleteResourceDefinitionCommandInput extends DeleteResourceDefinitionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteResourceDefinitionCommand}.
 */
export interface DeleteResourceDefinitionCommandOutput extends DeleteResourceDefinitionResponse, __MetadataBearer {}

/**
 * Deletes a resource definition.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, DeleteResourceDefinitionCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, DeleteResourceDefinitionCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const input = { // DeleteResourceDefinitionRequest
 *   ResourceDefinitionId: "STRING_VALUE", // required
 * };
 * const command = new DeleteResourceDefinitionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteResourceDefinitionCommandInput - {@link DeleteResourceDefinitionCommandInput}
 * @returns {@link DeleteResourceDefinitionCommandOutput}
 * @see {@link DeleteResourceDefinitionCommandInput} for command's `input` shape.
 * @see {@link DeleteResourceDefinitionCommandOutput} for command's `response` shape.
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
export class DeleteResourceDefinitionCommand extends $Command
  .classBuilder<
    DeleteResourceDefinitionCommandInput,
    DeleteResourceDefinitionCommandOutput,
    GreengrassClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: GreengrassClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Greengrass", "DeleteResourceDefinition", {})
  .n("GreengrassClient", "DeleteResourceDefinitionCommand")
  .f(void 0, void 0)
  .ser(se_DeleteResourceDefinitionCommand)
  .de(de_DeleteResourceDefinitionCommand)
  .build() {}
